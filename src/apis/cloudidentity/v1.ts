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

export namespace cloudidentity_v1 {
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
   * Cloud Identity API
   *
   * API for provisioning and managing identity resources.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const cloudidentity = google.cloudidentity('v1');
   * ```
   */
  export class Cloudidentity {
    context: APIRequestContext;
    devices: Resource$Devices;
    groups: Resource$Groups;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.devices = new Resource$Devices(this.context);
      this.groups = new Resource$Groups(this.context);
    }
  }

  /**
   * The response message for MembershipsService.CheckTransitiveMembership.
   */
  export interface Schema$CheckTransitiveMembershipResponse {
    /**
     * Response does not include the possible roles of a member since the behavior of this rpc is not all-or-nothing unlike the other rpcs. So, it may not be possible to list all the roles definitively, due to possible lack of authorization in some of the paths.
     */
    hasMembership?: boolean | null;
  }
  /**
   * Metadata for CreateGroup LRO.
   */
  export interface Schema$CreateGroupMetadata {}
  /**
   * Metadata for CreateMembership LRO.
   */
  export interface Schema$CreateMembershipMetadata {}
  /**
   * Metadata for DeleteGroup LRO.
   */
  export interface Schema$DeleteGroupMetadata {}
  /**
   * Metadata for DeleteMembership LRO.
   */
  export interface Schema$DeleteMembershipMetadata {}
  /**
   * Dynamic group metadata like queries and status.
   */
  export interface Schema$DynamicGroupMetadata {
    /**
     * Memberships will be the union of all queries. Only one entry with USER resource is currently supported. Customers can create up to 100 dynamic groups.
     */
    queries?: Schema$DynamicGroupQuery[];
    /**
     * Output only. Status of the dynamic group.
     */
    status?: Schema$DynamicGroupStatus;
  }
  /**
   * Defines a query on a resource.
   */
  export interface Schema$DynamicGroupQuery {
    /**
     * Query that determines the memberships of the dynamic group. Examples: All users with at least one `organizations.department` of engineering. `user.organizations.exists(org, org.department=='engineering')` All users with at least one location that has `area` of `foo` and `building_id` of `bar`. `user.locations.exists(loc, loc.area=='foo' && loc.building_id=='bar')` All users with any variation of the name John Doe (case-insensitive queries add `equalsIgnoreCase()` to the value being queried). `user.name.value.equalsIgnoreCase('jOhn DoE')`
     */
    query?: string | null;
    /**
     * Resource type for the Dynamic Group Query
     */
    resourceType?: string | null;
  }
  /**
   * The current status of a dynamic group along with timestamp.
   */
  export interface Schema$DynamicGroupStatus {
    /**
     * Status of the dynamic group.
     */
    status?: string | null;
    /**
     * The latest time at which the dynamic group is guaranteed to be in the given status. If status is `UP_TO_DATE`, the latest time at which the dynamic group was confirmed to be up-to-date. If status is `UPDATING_MEMBERSHIPS`, the time at which dynamic group was created.
     */
    statusTime?: string | null;
  }
  /**
   * A unique identifier for an entity in the Cloud Identity Groups API. An entity can represent either a group with an optional `namespace` or a user without a `namespace`. The combination of `id` and `namespace` must be unique; however, the same `id` can be used with different `namespace`s.
   */
  export interface Schema$EntityKey {
    /**
     * The ID of the entity. For Google-managed entities, the `id` should be the email address of an existing group or user. For external-identity-mapped entities, the `id` must be a string conforming to the Identity Source's requirements. Must be unique within a `namespace`.
     */
    id?: string | null;
    /**
     * The namespace in which the entity exists. If not specified, the `EntityKey` represents a Google-managed entity such as a Google user or a Google Group. If specified, the `EntityKey` represents an external-identity-mapped group. The namespace must correspond to an identity source created in Admin Console and must be in the form of `identitysources/{identity_source\}`.
     */
    namespace?: string | null;
  }
  /**
   * The `MembershipRole` expiry details.
   */
  export interface Schema$ExpiryDetail {
    /**
     * The time at which the `MembershipRole` will expire.
     */
    expireTime?: string | null;
  }
  /**
   * Metadata of GetMembershipGraphResponse LRO. This is currently empty to permit future extensibility.
   */
  export interface Schema$GetMembershipGraphMetadata {}
  /**
   * The response message for MembershipsService.GetMembershipGraph.
   */
  export interface Schema$GetMembershipGraphResponse {
    /**
     * The membership graph's path information represented as an adjacency list.
     */
    adjacencyList?: Schema$MembershipAdjacencyList[];
    /**
     * The resources representing each group in the adjacency list. Each group in this list can be correlated to a 'group' of the MembershipAdjacencyList using the 'name' of the Group resource.
     */
    groups?: Schema$Group[];
  }
  /**
   * Resource representing the Android specific attributes of a Device.
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1AndroidAttributes {
    /**
     * Whether applications from unknown sources can be installed on device.
     */
    enabledUnknownSources?: boolean | null;
    /**
     * Whether this account is on an owner/primary profile. For phones, only true for owner profiles. Android 4+ devices can have secondary or restricted user profiles.
     */
    ownerProfileAccount?: boolean | null;
    /**
     * Ownership privileges on device.
     */
    ownershipPrivilege?: string | null;
    /**
     * Whether device supports Android work profiles. If false, this service will not block access to corp data even if an administrator turns on the "Enforce Work Profile" policy.
     */
    supportsWorkProfile?: boolean | null;
  }
  /**
   * Metadata for ApproveDeviceUser LRO.
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1ApproveDeviceUserMetadata {}
  /**
   * Request message for approving the device to access user data.
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1ApproveDeviceUserRequest {
    /**
     * Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer\}`, where customer is the customer to whom the device belongs.
     */
    customer?: string | null;
  }
  /**
   * Response message for approving the device to access user data.
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1ApproveDeviceUserResponse {
    /**
     * Resultant DeviceUser object for the action.
     */
    deviceUser?: Schema$GoogleAppsCloudidentityDevicesV1DeviceUser;
  }
  /**
   * Metadata for BlockDeviceUser LRO.
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1BlockDeviceUserMetadata {}
  /**
   * Request message for blocking account on device.
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1BlockDeviceUserRequest {
    /**
     * Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer\}`, where customer is the customer to whom the device belongs.
     */
    customer?: string | null;
  }
  /**
   * Response message for blocking the device from accessing user data.
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1BlockDeviceUserResponse {
    /**
     * Resultant DeviceUser object for the action.
     */
    deviceUser?: Schema$GoogleAppsCloudidentityDevicesV1DeviceUser;
  }
  /**
   * Metadata for CancelWipeDevice LRO.
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1CancelWipeDeviceMetadata {}
  /**
   * Request message for cancelling an unfinished device wipe.
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1CancelWipeDeviceRequest {
    /**
     * Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer\}`, where customer is the customer to whom the device belongs.
     */
    customer?: string | null;
  }
  /**
   * Response message for cancelling an unfinished device wipe.
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1CancelWipeDeviceResponse {
    /**
     * Resultant Device object for the action. Note that asset tags will not be returned in the device object.
     */
    device?: Schema$GoogleAppsCloudidentityDevicesV1Device;
  }
  /**
   * Metadata for CancelWipeDeviceUser LRO.
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserMetadata {}
  /**
   * Request message for cancelling an unfinished user account wipe.
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserRequest {
    /**
     * Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer\}`, where customer is the customer to whom the device belongs.
     */
    customer?: string | null;
  }
  /**
   * Response message for cancelling an unfinished user account wipe.
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserResponse {
    /**
     * Resultant DeviceUser object for the action.
     */
    deviceUser?: Schema$GoogleAppsCloudidentityDevicesV1DeviceUser;
  }
  /**
   * Represents the state associated with an API client calling the Devices API. Resource representing ClientState and supports updates from API users
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1ClientState {
    /**
     * The caller can specify asset tags for this resource
     */
    assetTags?: string[] | null;
    /**
     * The compliance state of the resource as specified by the API client.
     */
    complianceState?: string | null;
    /**
     * Output only. The time the client state data was created.
     */
    createTime?: string | null;
    /**
     * This field may be used to store a unique identifier for the API resource within which these CustomAttributes are a field.
     */
    customId?: string | null;
    /**
     * The token that needs to be passed back for concurrency control in updates. Token needs to be passed back in UpdateRequest
     */
    etag?: string | null;
    /**
     * The Health score of the resource. The Health score is the callers specification of the condition of the device from a usability point of view. For example, a third-party device management provider may specify a health score based on its compliance with organizational policies.
     */
    healthScore?: string | null;
    /**
     * The map of key-value attributes stored by callers specific to a device. The total serialized length of this map may not exceed 10KB. No limit is placed on the number of attributes in a map.
     */
    keyValuePairs?: {
      [
        key: string
      ]: Schema$GoogleAppsCloudidentityDevicesV1CustomAttributeValue;
    } | null;
    /**
     * Output only. The time the client state data was last updated.
     */
    lastUpdateTime?: string | null;
    /**
     * The management state of the resource as specified by the API client.
     */
    managed?: string | null;
    /**
     * Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the ClientState in format: `devices/{device\}/deviceUsers/{device_user\}/clientState/{partner\}`, where partner corresponds to the partner storing the data. For partners belonging to the "BeyondCorp Alliance", this is the partner ID specified to you by Google. For all other callers, this is a string of the form: `{customer\}-suffix`, where `customer` is your customer ID. The *suffix* is any string the caller specifies. This string will be displayed verbatim in the administration console. This suffix is used in setting up Custom Access Levels in Context-Aware Access. Your organization's customer ID can be obtained from the URL: `GET https://www.googleapis.com/admin/directory/v1/customers/my_customer` The `id` field in the response contains the customer ID starting with the letter 'C'. The customer ID to be used in this API is the string after the letter 'C' (not including 'C')
     */
    name?: string | null;
    /**
     * Output only. The owner of the ClientState
     */
    ownerType?: string | null;
    /**
     * A descriptive cause of the health score.
     */
    scoreReason?: string | null;
  }
  /**
   * Metadata for CreateDevice LRO.
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1CreateDeviceMetadata {}
  /**
   * Additional custom attribute values may be one of these types
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1CustomAttributeValue {
    /**
     * Represents a boolean value.
     */
    boolValue?: boolean | null;
    /**
     * Represents a double value.
     */
    numberValue?: number | null;
    /**
     * Represents a string value.
     */
    stringValue?: string | null;
  }
  /**
   * Metadata for DeleteDevice LRO.
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1DeleteDeviceMetadata {}
  /**
   * Metadata for DeleteDeviceUser LRO.
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1DeleteDeviceUserMetadata {}
  /**
   *  A Device within the Cloud Identity Devices API. Represents a Device known to Google Cloud, independent of the device ownership, type, and whether it is assigned or in use by a user.
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1Device {
    /**
     * Output only. Attributes specific to Android devices.
     */
    androidSpecificAttributes?: Schema$GoogleAppsCloudidentityDevicesV1AndroidAttributes;
    /**
     * Asset tag of the device.
     */
    assetTag?: string | null;
    /**
     * Output only. Baseband version of the device.
     */
    basebandVersion?: string | null;
    /**
     * Output only. Device bootloader version. Example: 0.6.7.
     */
    bootloaderVersion?: string | null;
    /**
     * Output only. Device brand. Example: Samsung.
     */
    brand?: string | null;
    /**
     * Output only. Build number of the device.
     */
    buildNumber?: string | null;
    /**
     * Output only. Represents whether the Device is compromised.
     */
    compromisedState?: string | null;
    /**
     * Output only. When the Company-Owned device was imported. This field is empty for BYOD devices.
     */
    createTime?: string | null;
    /**
     * Output only. Type of device.
     */
    deviceType?: string | null;
    /**
     * Output only. Whether developer options is enabled on device.
     */
    enabledDeveloperOptions?: boolean | null;
    /**
     * Output only. Whether USB debugging is enabled on device.
     */
    enabledUsbDebugging?: boolean | null;
    /**
     * Output only. Device encryption state.
     */
    encryptionState?: string | null;
    /**
     * Output only. IMEI number of device if GSM device; empty otherwise.
     */
    imei?: string | null;
    /**
     * Output only. Kernel version of the device.
     */
    kernelVersion?: string | null;
    /**
     * Most recent time when device synced with this service.
     */
    lastSyncTime?: string | null;
    /**
     * Output only. Management state of the device
     */
    managementState?: string | null;
    /**
     * Output only. Device manufacturer. Example: Motorola.
     */
    manufacturer?: string | null;
    /**
     * Output only. MEID number of device if CDMA device; empty otherwise.
     */
    meid?: string | null;
    /**
     * Output only. Model name of device. Example: Pixel 3.
     */
    model?: string | null;
    /**
     * Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device\}`, where device is the unique id assigned to the Device.
     */
    name?: string | null;
    /**
     * Output only. Mobile or network operator of device, if available.
     */
    networkOperator?: string | null;
    /**
     * Output only. OS version of the device. Example: Android 8.1.0.
     */
    osVersion?: string | null;
    /**
     * Output only. Domain name for Google accounts on device. Type for other accounts on device. On Android, will only be populated if |ownership_privilege| is |PROFILE_OWNER| or |DEVICE_OWNER|. Does not include the account signed in to the device policy app if that account's domain has only one account. Examples: "com.example", "xyz.com".
     */
    otherAccounts?: string[] | null;
    /**
     * Output only. Whether the device is owned by the company or an individual
     */
    ownerType?: string | null;
    /**
     * Output only. OS release version. Example: 6.0.
     */
    releaseVersion?: string | null;
    /**
     * Output only. OS security patch update time on device.
     */
    securityPatchTime?: string | null;
    /**
     * Serial Number of device. Example: HT82V1A01076.
     */
    serialNumber?: string | null;
    /**
     * WiFi MAC addresses of device.
     */
    wifiMacAddresses?: string[] | null;
  }
  /**
   * Represents a user's use of a Device in the Cloud Identity Devices API. A DeviceUser is a resource representing a user's use of a Device
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1DeviceUser {
    /**
     * Compromised State of the DeviceUser object
     */
    compromisedState?: string | null;
    /**
     * When the user first signed in to the device
     */
    createTime?: string | null;
    /**
     * Output only. Most recent time when user registered with this service.
     */
    firstSyncTime?: string | null;
    /**
     * Output only. Default locale used on device, in IETF BCP-47 format.
     */
    languageCode?: string | null;
    /**
     * Output only. Last time when user synced with policies.
     */
    lastSyncTime?: string | null;
    /**
     * Output only. Management state of the user on the device.
     */
    managementState?: string | null;
    /**
     * Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the DeviceUser in format: `devices/{device\}/deviceUsers/{device_user\}`, where `device_user` uniquely identifies a user's use of a device.
     */
    name?: string | null;
    /**
     * Password state of the DeviceUser object
     */
    passwordState?: string | null;
    /**
     * Output only. User agent on the device for this specific user
     */
    userAgent?: string | null;
    /**
     * Email address of the user registered on the device.
     */
    userEmail?: string | null;
  }
  /**
   * Response message that is returned in ListClientStates.
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1ListClientStatesResponse {
    /**
     * Client states meeting the list restrictions.
     */
    clientStates?: Schema$GoogleAppsCloudidentityDevicesV1ClientState[];
    /**
     * Token to retrieve the next page of results. Empty if there are no more results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message that is returned from the ListDevices method.
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1ListDevicesResponse {
    /**
     * Devices meeting the list restrictions.
     */
    devices?: Schema$GoogleAppsCloudidentityDevicesV1Device[];
    /**
     * Token to retrieve the next page of results. Empty if there are no more results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message that is returned from the ListDeviceUsers method.
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse {
    /**
     * Devices meeting the list restrictions.
     */
    deviceUsers?: Schema$GoogleAppsCloudidentityDevicesV1DeviceUser[];
    /**
     * Token to retrieve the next page of results. Empty if there are no more results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Metadata for ListEndpointApps LRO.
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1ListEndpointAppsMetadata {}
  /**
   * Response containing resource names of the DeviceUsers associated with the caller's credentials.
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse {
    /**
     * The obfuscated customer Id that may be passed back to other Devices API methods such as List, Get, etc.
     */
    customer?: string | null;
    /**
     * [Resource names](https://cloud.google.com/apis/design/resource_names) of the DeviceUsers in the format: `devices/{device\}/deviceUsers/{user_resource\}`, where device is the unique ID assigned to a Device and user_resource is the unique user ID
     */
    names?: string[] | null;
    /**
     * Token to retrieve the next page of results. Empty if there are no more results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Metadata for SignoutDeviceUser LRO.
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1SignoutDeviceUserMetadata {}
  /**
   * Metadata for UpdateClientState LRO.
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1UpdateClientStateMetadata {}
  /**
   * Metadata for UpdateDevice LRO.
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1UpdateDeviceMetadata {}
  /**
   * Metadata for WipeDevice LRO.
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1WipeDeviceMetadata {}
  /**
   * Request message for wiping all data on the device.
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1WipeDeviceRequest {
    /**
     * Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer\}`, where customer is the customer to whom the device belongs.
     */
    customer?: string | null;
  }
  /**
   * Response message for wiping all data on the device.
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1WipeDeviceResponse {
    /**
     * Resultant Device object for the action. Note that asset tags will not be returned in the device object.
     */
    device?: Schema$GoogleAppsCloudidentityDevicesV1Device;
  }
  /**
   * Metadata for WipeDeviceUser LRO.
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1WipeDeviceUserMetadata {}
  /**
   * Request message for starting an account wipe on device.
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1WipeDeviceUserRequest {
    /**
     * Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer\}`, where customer is the customer to whom the device belongs.
     */
    customer?: string | null;
  }
  /**
   * Response message for wiping the user's account from the device.
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1WipeDeviceUserResponse {
    /**
     * Resultant DeviceUser object for the action.
     */
    deviceUser?: Schema$GoogleAppsCloudidentityDevicesV1DeviceUser;
  }
  /**
   * A group within the Cloud Identity Groups API. A `Group` is a collection of entities, where each entity is either a user, another group, or a service account.
   */
  export interface Schema$Group {
    /**
     * Output only. The time when the `Group` was created.
     */
    createTime?: string | null;
    /**
     * An extended description to help users determine the purpose of a `Group`. Must not be longer than 4,096 characters.
     */
    description?: string | null;
    /**
     * The display name of the `Group`.
     */
    displayName?: string | null;
    /**
     * Optional. Dynamic group metadata like queries and status.
     */
    dynamicGroupMetadata?: Schema$DynamicGroupMetadata;
    /**
     * Required. Immutable. The `EntityKey` of the `Group`.
     */
    groupKey?: Schema$EntityKey;
    /**
     * Required. One or more label entries that apply to the Group. Currently supported labels contain a key with an empty value. Google Groups are the default type of group and have a label with a key of `cloudidentity.googleapis.com/groups.discussion_forum` and an empty value. Existing Google Groups can have an additional label with a key of `cloudidentity.googleapis.com/groups.security` and an empty value added to them. **This is an immutable change and the security label cannot be removed once added.** Dynamic groups have a label with a key of `cloudidentity.googleapis.com/groups.dynamic`. Identity-mapped groups for Cloud Search have a label with a key of `system/groups/external` and an empty value.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Group`. Shall be of the form `groups/{group\}`.
     */
    name?: string | null;
    /**
     * Required. Immutable. The resource name of the entity under which this `Group` resides in the Cloud Identity resource hierarchy. Must be of the form `identitysources/{identity_source\}` for external- identity-mapped groups or `customers/{customer\}` for Google Groups. The `customer` must begin with "C" (for example, 'C046psxkn').
     */
    parent?: string | null;
    /**
     * Output only. The time when the `Group` was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Message representing a transitive group of a user or a group.
   */
  export interface Schema$GroupRelation {
    /**
     * Display name for this group.
     */
    displayName?: string | null;
    /**
     * Resource name for this group.
     */
    group?: string | null;
    /**
     * Entity key has an id and a namespace. In case of discussion forums, the id will be an email address without a namespace.
     */
    groupKey?: Schema$EntityKey;
    /**
     * Labels for Group resource.
     */
    labels?: {[key: string]: string} | null;
    /**
     * The relation between the member and the transitive group.
     */
    relationType?: string | null;
    /**
     * Membership roles of the member for the group.
     */
    roles?: Schema$TransitiveMembershipRole[];
  }
  /**
   * Response message for ListGroups operation.
   */
  export interface Schema$ListGroupsResponse {
    /**
     * Groups returned in response to list request. The results are not sorted.
     */
    groups?: Schema$Group[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results available for listing.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response message for MembershipsService.ListMemberships.
   */
  export interface Schema$ListMembershipsResponse {
    /**
     * The `Membership`s under the specified `parent`.
     */
    memberships?: Schema$Membership[];
    /**
     * A continuation token to retrieve the next page of results, or empty if there are no more results available.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response message for GroupsService.LookupGroupName.
   */
  export interface Schema$LookupGroupNameResponse {
    /**
     * The [resource name](https://cloud.google.com/apis/design/resource_names) of the looked-up `Group`.
     */
    name?: string | null;
  }
  /**
   * The response message for MembershipsService.LookupMembershipName.
   */
  export interface Schema$LookupMembershipNameResponse {
    /**
     * The [resource name](https://cloud.google.com/apis/design/resource_names) of the looked-up `Membership`. Must be of the form `groups/{group\}/memberships/{membership\}`.
     */
    name?: string | null;
  }
  /**
   * Message representing a transitive membership of a group.
   */
  export interface Schema$MemberRelation {
    /**
     * Resource name for this member.
     */
    member?: string | null;
    /**
     * Entity key has an id and a namespace. In case of discussion forums, the id will be an email address without a namespace.
     */
    preferredMemberKey?: Schema$EntityKey[];
    /**
     * The relation between the group and the transitive member.
     */
    relationType?: string | null;
    /**
     * The membership role details (i.e name of role and expiry time).
     */
    roles?: Schema$TransitiveMembershipRole[];
  }
  /**
   * The definition of MemberRestriction
   */
  export interface Schema$MemberRestriction {
    /**
     * The evaluated state of this restriction on a group.
     */
    evaluation?: Schema$RestrictionEvaluation;
    /**
     * Member Restriction as defined by CEL expression. Supported restrictions are: `member.customer_id` and `member.type`. Valid values for `member.type` are `1`, `2` and `3`. They correspond to USER, SERVICE_ACCOUNT, and GROUP respectively. The value for `member.customer_id` only supports `groupCustomerId()` currently which means the customer id of the group will be used for restriction. Supported operators are `&&`, `||` and `==`, corresponding to AND, OR, and EQUAL. Examples: Allow only service accounts of given customer to be members. `member.type == 2 && member.customer_id == groupCustomerId()` Allow only users or groups to be members. `member.type == 1 || member.type == 3`
     */
    query?: string | null;
  }
  /**
   * A membership within the Cloud Identity Groups API. A `Membership` defines a relationship between a `Group` and an entity belonging to that `Group`, referred to as a "member".
   */
  export interface Schema$Membership {
    /**
     * Output only. The time when the `Membership` was created.
     */
    createTime?: string | null;
    /**
     * Output only. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Membership`. Shall be of the form `groups/{group\}/memberships/{membership\}`.
     */
    name?: string | null;
    /**
     * Required. Immutable. The `EntityKey` of the member.
     */
    preferredMemberKey?: Schema$EntityKey;
    /**
     * The `MembershipRole`s that apply to the `Membership`. If unspecified, defaults to a single `MembershipRole` with `name` `MEMBER`. Must not contain duplicate `MembershipRole`s with the same `name`.
     */
    roles?: Schema$MembershipRole[];
    /**
     * Output only. The type of the membership.
     */
    type?: string | null;
    /**
     * Output only. The time when the `Membership` was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Membership graph's path information as an adjacency list.
   */
  export interface Schema$MembershipAdjacencyList {
    /**
     * Each edge contains information about the member that belongs to this group. Note: Fields returned here will help identify the specific Membership resource (e.g name, preferred_member_key and role), but may not be a comprehensive list of all fields.
     */
    edges?: Schema$Membership[];
    /**
     * Resource name of the group that the members belong to.
     */
    group?: string | null;
  }
  /**
   * A membership role within the Cloud Identity Groups API. A `MembershipRole` defines the privileges granted to a `Membership`.
   */
  export interface Schema$MembershipRole {
    /**
     * The expiry details of the `MembershipRole`. Expiry details are only supported for `MEMBER` `MembershipRoles`. May be set if `name` is `MEMBER`. Must not be set if `name` is any other value.
     */
    expiryDetail?: Schema$ExpiryDetail;
    /**
     * The name of the `MembershipRole`. Must be one of `OWNER`, `MANAGER`, `MEMBER`.
     */
    name?: string | null;
    /**
     * Evaluations of restrictions applied to parent group on this membership.
     */
    restrictionEvaluations?: Schema$RestrictionEvaluations;
  }
  /**
   * The evaluated state of this restriction.
   */
  export interface Schema$MembershipRoleRestrictionEvaluation {
    /**
     * Output only. The current state of the restriction
     */
    state?: string | null;
  }
  /**
   * The request message for MembershipsService.ModifyMembershipRoles.
   */
  export interface Schema$ModifyMembershipRolesRequest {
    /**
     * The `MembershipRole`s to be added. Adding or removing roles in the same request as updating roles is not supported. Must not be set if `update_roles_params` is set.
     */
    addRoles?: Schema$MembershipRole[];
    /**
     * The `name`s of the `MembershipRole`s to be removed. Adding or removing roles in the same request as updating roles is not supported. It is not possible to remove the `MEMBER` `MembershipRole`. If you wish to delete a `Membership`, call MembershipsService.DeleteMembership instead. Must not contain `MEMBER`. Must not be set if `update_roles_params` is set.
     */
    removeRoles?: string[] | null;
    /**
     * The `MembershipRole`s to be updated. Updating roles in the same request as adding or removing roles is not supported. Must not be set if either `add_roles` or `remove_roles` is set.
     */
    updateRolesParams?: Schema$UpdateMembershipRolesParams[];
  }
  /**
   * The response message for MembershipsService.ModifyMembershipRoles.
   */
  export interface Schema$ModifyMembershipRolesResponse {
    /**
     * The `Membership` resource after modifying its `MembershipRole`s.
     */
    membership?: Schema$Membership;
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
   * The evaluated state of this restriction.
   */
  export interface Schema$RestrictionEvaluation {
    /**
     * Output only. The current state of the restriction
     */
    state?: string | null;
  }
  /**
   * Evaluations of restrictions applied to parent group on this membership.
   */
  export interface Schema$RestrictionEvaluations {
    /**
     * Evaluation of the member restriction applied to this membership. Empty if the user lacks permission to view the restriction evaluation.
     */
    memberRestrictionEvaluation?: Schema$MembershipRoleRestrictionEvaluation;
  }
  /**
   * The response message for GroupsService.SearchGroups.
   */
  export interface Schema$SearchGroupsResponse {
    /**
     * The `Group` resources that match the search query.
     */
    groups?: Schema$Group[];
    /**
     * A continuation token to retrieve the next page of results, or empty if there are no more results available.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response message for MembershipsService.SearchTransitiveGroups.
   */
  export interface Schema$SearchTransitiveGroupsResponse {
    /**
     * List of transitive groups satisfying the query.
     */
    memberships?: Schema$GroupRelation[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results available for listing.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response message for MembershipsService.SearchTransitiveMemberships.
   */
  export interface Schema$SearchTransitiveMembershipsResponse {
    /**
     * List of transitive members satisfying the query.
     */
    memberships?: Schema$MemberRelation[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results.
     */
    nextPageToken?: string | null;
  }
  /**
   * The definition of security settings.
   */
  export interface Schema$SecuritySettings {
    /**
     * The Member Restriction value
     */
    memberRestriction?: Schema$MemberRestriction;
    /**
     * Output only. The resource name of the security settings. Shall be of the form `groups/{group_id\}/securitySettings`.
     */
    name?: string | null;
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
   * Message representing the role of a TransitiveMembership.
   */
  export interface Schema$TransitiveMembershipRole {
    /**
     * TransitiveMembershipRole in string format. Currently supported TransitiveMembershipRoles: `"MEMBER"`, `"OWNER"`, and `"MANAGER"`.
     */
    role?: string | null;
  }
  /**
   * Metadata for UpdateGroup LRO.
   */
  export interface Schema$UpdateGroupMetadata {}
  /**
   * Metadata for UpdateMembership LRO.
   */
  export interface Schema$UpdateMembershipMetadata {}
  /**
   * The details of an update to a `MembershipRole`.
   */
  export interface Schema$UpdateMembershipRolesParams {
    /**
     * The fully-qualified names of fields to update. May only contain the field `expiry_detail.expire_time`.
     */
    fieldMask?: string | null;
    /**
     * The `MembershipRole`s to be updated. Only `MEMBER` `MembershipRole` can currently be updated.
     */
    membershipRole?: Schema$MembershipRole;
  }
  /**
   * The `UserInvitation` resource represents an email that can be sent to an unmanaged user account inviting them to join the customer's Google Workspace or Cloud Identity account. An unmanaged account shares an email address domain with the Google Workspace or Cloud Identity account but is not managed by it yet. If the user accepts the `UserInvitation`, the user account will become managed.
   */
  export interface Schema$UserInvitation {
    /**
     * Number of invitation emails sent to the user.
     */
    mailsSentCount?: string | null;
    /**
     * Shall be of the form `customers/{customer\}/userinvitations/{user_email_address\}`.
     */
    name?: string | null;
    /**
     * State of the `UserInvitation`.
     */
    state?: string | null;
    /**
     * Time when the `UserInvitation` was last updated.
     */
    updateTime?: string | null;
  }

  export class Resource$Devices {
    context: APIRequestContext;
    deviceUsers: Resource$Devices$Deviceusers;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.deviceUsers = new Resource$Devices$Deviceusers(this.context);
    }

    /**
     * Cancels an unfinished device wipe. This operation can be used to cancel device wipe in the gap between the wipe operation returning success and the device being wiped. This operation is possible when the device is in a "pending wipe" state. The device enters the "pending wipe" state when a wipe device command is issued, but has not yet been sent to the device. The cancel wipe will fail if the wipe command has already been issued to the device.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.devices.cancelWipe({
     *     // Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device\}`, where device is the unique ID assigned to the Device.
     *     name: 'devices/my-device',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "customer": "my_customer"
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
    cancelWipe(
      params: Params$Resource$Devices$Cancelwipe,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancelWipe(
      params?: Params$Resource$Devices$Cancelwipe,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    cancelWipe(
      params: Params$Resource$Devices$Cancelwipe,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancelWipe(
      params: Params$Resource$Devices$Cancelwipe,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    cancelWipe(
      params: Params$Resource$Devices$Cancelwipe,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    cancelWipe(callback: BodyResponseCallback<Schema$Operation>): void;
    cancelWipe(
      paramsOrCallback?:
        | Params$Resource$Devices$Cancelwipe
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
        {}) as Params$Resource$Devices$Cancelwipe;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Devices$Cancelwipe;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:cancelWipe').replace(
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
     * Creates a device. Only company-owned device may be created. **Note**: This method is available only to customers who have one of the following SKUs: Enterprise Standard, Enterprise Plus, Enterprise for Education, and Cloud Identity Premium
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.devices.create({
     *     // Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer\}`, where customer is the customer to whom the device belongs.
     *     customer: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "androidSpecificAttributes": {},
     *       //   "assetTag": "my_assetTag",
     *       //   "basebandVersion": "my_basebandVersion",
     *       //   "bootloaderVersion": "my_bootloaderVersion",
     *       //   "brand": "my_brand",
     *       //   "buildNumber": "my_buildNumber",
     *       //   "compromisedState": "my_compromisedState",
     *       //   "createTime": "my_createTime",
     *       //   "deviceType": "my_deviceType",
     *       //   "enabledDeveloperOptions": false,
     *       //   "enabledUsbDebugging": false,
     *       //   "encryptionState": "my_encryptionState",
     *       //   "imei": "my_imei",
     *       //   "kernelVersion": "my_kernelVersion",
     *       //   "lastSyncTime": "my_lastSyncTime",
     *       //   "managementState": "my_managementState",
     *       //   "manufacturer": "my_manufacturer",
     *       //   "meid": "my_meid",
     *       //   "model": "my_model",
     *       //   "name": "my_name",
     *       //   "networkOperator": "my_networkOperator",
     *       //   "osVersion": "my_osVersion",
     *       //   "otherAccounts": [],
     *       //   "ownerType": "my_ownerType",
     *       //   "releaseVersion": "my_releaseVersion",
     *       //   "securityPatchTime": "my_securityPatchTime",
     *       //   "serialNumber": "my_serialNumber",
     *       //   "wifiMacAddresses": []
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
      params: Params$Resource$Devices$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Devices$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Devices$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Devices$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Devices$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Devices$Create
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
      let params = (paramsOrCallback || {}) as Params$Resource$Devices$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Devices$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/devices').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
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
     * Deletes the specified device.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.devices.delete({
     *     // Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer\}`, where customer is the customer to whom the device belongs.
     *     customer: 'placeholder-value',
     *     // Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device\}`, where device is the unique ID assigned to the Device.
     *     name: 'devices/my-device',
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
      params: Params$Resource$Devices$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Devices$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Devices$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Devices$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Devices$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Devices$Delete
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
      let params = (paramsOrCallback || {}) as Params$Resource$Devices$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Devices$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
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
     * Retrieves the specified device.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.devices.get({
     *     // Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Customer in the format: `customers/{customer\}`, where customer is the customer to whom the device belongs. If you're using this API for your own organization, use `customers/my_customer`. If you're using this API to manage another organization, use `customers/{customer\}`, where customer is the customer to whom the device belongs.
     *     customer: 'placeholder-value',
     *     // Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in the format: `devices/{device\}`, where device is the unique ID assigned to the Device.
     *     name: 'devices/my-device',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "androidSpecificAttributes": {},
     *   //   "assetTag": "my_assetTag",
     *   //   "basebandVersion": "my_basebandVersion",
     *   //   "bootloaderVersion": "my_bootloaderVersion",
     *   //   "brand": "my_brand",
     *   //   "buildNumber": "my_buildNumber",
     *   //   "compromisedState": "my_compromisedState",
     *   //   "createTime": "my_createTime",
     *   //   "deviceType": "my_deviceType",
     *   //   "enabledDeveloperOptions": false,
     *   //   "enabledUsbDebugging": false,
     *   //   "encryptionState": "my_encryptionState",
     *   //   "imei": "my_imei",
     *   //   "kernelVersion": "my_kernelVersion",
     *   //   "lastSyncTime": "my_lastSyncTime",
     *   //   "managementState": "my_managementState",
     *   //   "manufacturer": "my_manufacturer",
     *   //   "meid": "my_meid",
     *   //   "model": "my_model",
     *   //   "name": "my_name",
     *   //   "networkOperator": "my_networkOperator",
     *   //   "osVersion": "my_osVersion",
     *   //   "otherAccounts": [],
     *   //   "ownerType": "my_ownerType",
     *   //   "releaseVersion": "my_releaseVersion",
     *   //   "securityPatchTime": "my_securityPatchTime",
     *   //   "serialNumber": "my_serialNumber",
     *   //   "wifiMacAddresses": []
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
      params: Params$Resource$Devices$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Devices$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAppsCloudidentityDevicesV1Device>;
    get(
      params: Params$Resource$Devices$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Devices$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1Device>,
      callback: BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1Device>
    ): void;
    get(
      params: Params$Resource$Devices$Get,
      callback: BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1Device>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1Device>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Devices$Get
        | BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1Device>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1Device>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1Device>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAppsCloudidentityDevicesV1Device>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Devices$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Devices$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
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
        createAPIRequest<Schema$GoogleAppsCloudidentityDevicesV1Device>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAppsCloudidentityDevicesV1Device>(
          parameters
        );
      }
    }

    /**
     * Lists/Searches devices.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.devices.list({
     *     // Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer in the format: `customers/{customer\}`, where customer is the customer to whom the device belongs. If you're using this API for your own organization, use `customers/my_customer`. If you're using this API to manage another organization, use `customers/{customer\}`, where customer is the customer to whom the device belongs.
     *     customer: 'placeholder-value',
     *     // Optional. Additional restrictions when fetching list of devices. For a list of search fields, refer to [Mobile device search fields](https://developers.google.com/admin-sdk/directory/v1/search-operators). Multiple search fields are separated by the space character.
     *     filter: 'placeholder-value',
     *     // Optional. Order specification for devices in the response. Only one of the following field names may be used to specify the order: `create_time`, `last_sync_time`, `model`, `os_version`, `device_type` and `serial_number`. `desc` may be specified optionally at the end to specify results to be sorted in descending order. Default order is ascending.
     *     orderBy: 'placeholder-value',
     *     // Optional. The maximum number of Devices to return. If unspecified, at most 20 Devices will be returned. The maximum value is 100; values above 100 will be coerced to 100.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListDevices` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDevices` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Optional. The view to use for the List request.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "devices": [],
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
      params: Params$Resource$Devices$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Devices$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAppsCloudidentityDevicesV1ListDevicesResponse>;
    list(
      params: Params$Resource$Devices$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Devices$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1ListDevicesResponse>,
      callback: BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1ListDevicesResponse>
    ): void;
    list(
      params: Params$Resource$Devices$List,
      callback: BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1ListDevicesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1ListDevicesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Devices$List
        | BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1ListDevicesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1ListDevicesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1ListDevicesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAppsCloudidentityDevicesV1ListDevicesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Devices$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Devices$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/devices').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAppsCloudidentityDevicesV1ListDevicesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAppsCloudidentityDevicesV1ListDevicesResponse>(
          parameters
        );
      }
    }

    /**
     * Wipes all data on the specified device.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.devices.wipe({
     *     // Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device\}/deviceUsers/{device_user\}`, where device is the unique ID assigned to the Device, and device_user is the unique ID assigned to the User.
     *     name: 'devices/my-device',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "customer": "my_customer"
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
    wipe(
      params: Params$Resource$Devices$Wipe,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    wipe(
      params?: Params$Resource$Devices$Wipe,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    wipe(
      params: Params$Resource$Devices$Wipe,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    wipe(
      params: Params$Resource$Devices$Wipe,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    wipe(
      params: Params$Resource$Devices$Wipe,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    wipe(callback: BodyResponseCallback<Schema$Operation>): void;
    wipe(
      paramsOrCallback?:
        | Params$Resource$Devices$Wipe
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
      let params = (paramsOrCallback || {}) as Params$Resource$Devices$Wipe;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Devices$Wipe;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:wipe').replace(/([^:]\/)\/+/g, '$1'),
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

  export interface Params$Resource$Devices$Cancelwipe
    extends StandardParameters {
    /**
     * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device\}`, where device is the unique ID assigned to the Device.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAppsCloudidentityDevicesV1CancelWipeDeviceRequest;
  }
  export interface Params$Resource$Devices$Create extends StandardParameters {
    /**
     * Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer\}`, where customer is the customer to whom the device belongs.
     */
    customer?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAppsCloudidentityDevicesV1Device;
  }
  export interface Params$Resource$Devices$Delete extends StandardParameters {
    /**
     * Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer\}`, where customer is the customer to whom the device belongs.
     */
    customer?: string;
    /**
     * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device\}`, where device is the unique ID assigned to the Device.
     */
    name?: string;
  }
  export interface Params$Resource$Devices$Get extends StandardParameters {
    /**
     * Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Customer in the format: `customers/{customer\}`, where customer is the customer to whom the device belongs. If you're using this API for your own organization, use `customers/my_customer`. If you're using this API to manage another organization, use `customers/{customer\}`, where customer is the customer to whom the device belongs.
     */
    customer?: string;
    /**
     * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in the format: `devices/{device\}`, where device is the unique ID assigned to the Device.
     */
    name?: string;
  }
  export interface Params$Resource$Devices$List extends StandardParameters {
    /**
     * Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer in the format: `customers/{customer\}`, where customer is the customer to whom the device belongs. If you're using this API for your own organization, use `customers/my_customer`. If you're using this API to manage another organization, use `customers/{customer\}`, where customer is the customer to whom the device belongs.
     */
    customer?: string;
    /**
     * Optional. Additional restrictions when fetching list of devices. For a list of search fields, refer to [Mobile device search fields](https://developers.google.com/admin-sdk/directory/v1/search-operators). Multiple search fields are separated by the space character.
     */
    filter?: string;
    /**
     * Optional. Order specification for devices in the response. Only one of the following field names may be used to specify the order: `create_time`, `last_sync_time`, `model`, `os_version`, `device_type` and `serial_number`. `desc` may be specified optionally at the end to specify results to be sorted in descending order. Default order is ascending.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of Devices to return. If unspecified, at most 20 Devices will be returned. The maximum value is 100; values above 100 will be coerced to 100.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListDevices` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDevices` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Optional. The view to use for the List request.
     */
    view?: string;
  }
  export interface Params$Resource$Devices$Wipe extends StandardParameters {
    /**
     * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device\}/deviceUsers/{device_user\}`, where device is the unique ID assigned to the Device, and device_user is the unique ID assigned to the User.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAppsCloudidentityDevicesV1WipeDeviceRequest;
  }

  export class Resource$Devices$Deviceusers {
    context: APIRequestContext;
    clientStates: Resource$Devices$Deviceusers$Clientstates;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.clientStates = new Resource$Devices$Deviceusers$Clientstates(
        this.context
      );
    }

    /**
     * Approves device to access user data.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.devices.deviceUsers.approve({
     *     // Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device\}/deviceUsers/{device_user\}`, where device is the unique ID assigned to the Device, and device_user is the unique ID assigned to the User.
     *     name: 'devices/my-device/deviceUsers/my-deviceUser',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "customer": "my_customer"
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
    approve(
      params: Params$Resource$Devices$Deviceusers$Approve,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    approve(
      params?: Params$Resource$Devices$Deviceusers$Approve,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    approve(
      params: Params$Resource$Devices$Deviceusers$Approve,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    approve(
      params: Params$Resource$Devices$Deviceusers$Approve,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    approve(
      params: Params$Resource$Devices$Deviceusers$Approve,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    approve(callback: BodyResponseCallback<Schema$Operation>): void;
    approve(
      paramsOrCallback?:
        | Params$Resource$Devices$Deviceusers$Approve
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
        {}) as Params$Resource$Devices$Deviceusers$Approve;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Devices$Deviceusers$Approve;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:approve').replace(
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
     * Blocks device from accessing user data
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.devices.deviceUsers.block({
     *     // Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device\}/deviceUsers/{device_user\}`, where device is the unique ID assigned to the Device, and device_user is the unique ID assigned to the User.
     *     name: 'devices/my-device/deviceUsers/my-deviceUser',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "customer": "my_customer"
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
    block(
      params: Params$Resource$Devices$Deviceusers$Block,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    block(
      params?: Params$Resource$Devices$Deviceusers$Block,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    block(
      params: Params$Resource$Devices$Deviceusers$Block,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    block(
      params: Params$Resource$Devices$Deviceusers$Block,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    block(
      params: Params$Resource$Devices$Deviceusers$Block,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    block(callback: BodyResponseCallback<Schema$Operation>): void;
    block(
      paramsOrCallback?:
        | Params$Resource$Devices$Deviceusers$Block
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
        {}) as Params$Resource$Devices$Deviceusers$Block;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Devices$Deviceusers$Block;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:block').replace(/([^:]\/)\/+/g, '$1'),
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
     * Cancels an unfinished user account wipe. This operation can be used to cancel device wipe in the gap between the wipe operation returning success and the device being wiped.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.devices.deviceUsers.cancelWipe({
     *     // Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device\}/deviceUsers/{device_user\}`, where device is the unique ID assigned to the Device, and device_user is the unique ID assigned to the User.
     *     name: 'devices/my-device/deviceUsers/my-deviceUser',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "customer": "my_customer"
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
    cancelWipe(
      params: Params$Resource$Devices$Deviceusers$Cancelwipe,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancelWipe(
      params?: Params$Resource$Devices$Deviceusers$Cancelwipe,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    cancelWipe(
      params: Params$Resource$Devices$Deviceusers$Cancelwipe,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancelWipe(
      params: Params$Resource$Devices$Deviceusers$Cancelwipe,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    cancelWipe(
      params: Params$Resource$Devices$Deviceusers$Cancelwipe,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    cancelWipe(callback: BodyResponseCallback<Schema$Operation>): void;
    cancelWipe(
      paramsOrCallback?:
        | Params$Resource$Devices$Deviceusers$Cancelwipe
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
        {}) as Params$Resource$Devices$Deviceusers$Cancelwipe;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Devices$Deviceusers$Cancelwipe;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:cancelWipe').replace(
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
     * Deletes the specified DeviceUser. This also revokes the user's access to device data.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.devices.deviceUsers.delete({
     *     // Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer\}`, where customer is the customer to whom the device belongs.
     *     customer: 'placeholder-value',
     *     // Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device\}/deviceUsers/{device_user\}`, where device is the unique ID assigned to the Device, and device_user is the unique ID assigned to the User.
     *     name: 'devices/my-device/deviceUsers/my-deviceUser',
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
      params: Params$Resource$Devices$Deviceusers$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Devices$Deviceusers$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Devices$Deviceusers$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Devices$Deviceusers$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Devices$Deviceusers$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Devices$Deviceusers$Delete
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
        {}) as Params$Resource$Devices$Deviceusers$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Devices$Deviceusers$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
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
     * Retrieves the specified DeviceUser
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.devices.deviceUsers.get({
     *     // Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer\}`, where customer is the customer to whom the device belongs.
     *     customer: 'placeholder-value',
     *     // Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device\}/deviceUsers/{device_user\}`, where device is the unique ID assigned to the Device, and device_user is the unique ID assigned to the User.
     *     name: 'devices/my-device/deviceUsers/my-deviceUser',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "compromisedState": "my_compromisedState",
     *   //   "createTime": "my_createTime",
     *   //   "firstSyncTime": "my_firstSyncTime",
     *   //   "languageCode": "my_languageCode",
     *   //   "lastSyncTime": "my_lastSyncTime",
     *   //   "managementState": "my_managementState",
     *   //   "name": "my_name",
     *   //   "passwordState": "my_passwordState",
     *   //   "userAgent": "my_userAgent",
     *   //   "userEmail": "my_userEmail"
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
      params: Params$Resource$Devices$Deviceusers$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Devices$Deviceusers$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAppsCloudidentityDevicesV1DeviceUser>;
    get(
      params: Params$Resource$Devices$Deviceusers$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Devices$Deviceusers$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1DeviceUser>,
      callback: BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1DeviceUser>
    ): void;
    get(
      params: Params$Resource$Devices$Deviceusers$Get,
      callback: BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1DeviceUser>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1DeviceUser>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Devices$Deviceusers$Get
        | BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1DeviceUser>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1DeviceUser>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1DeviceUser>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAppsCloudidentityDevicesV1DeviceUser>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Devices$Deviceusers$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Devices$Deviceusers$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
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
        createAPIRequest<Schema$GoogleAppsCloudidentityDevicesV1DeviceUser>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAppsCloudidentityDevicesV1DeviceUser>(
          parameters
        );
      }
    }

    /**
     * Lists/Searches DeviceUsers.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.devices.deviceUsers.list({
     *     // Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer\}`, where customer is the customer to whom the device belongs.
     *     customer: 'placeholder-value',
     *     // Optional. Additional restrictions when fetching list of devices. For a list of search fields, refer to [Mobile device search fields](https://developers.google.com/admin-sdk/directory/v1/search-operators). Multiple search fields are separated by the space character.
     *     filter: 'placeholder-value',
     *     // Optional. Order specification for devices in the response.
     *     orderBy: 'placeholder-value',
     *     // Optional. The maximum number of DeviceUsers to return. If unspecified, at most 5 DeviceUsers will be returned. The maximum value is 20; values above 20 will be coerced to 20.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListDeviceUsers` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBooks` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. To list all DeviceUsers, set this to "devices/-". To list all DeviceUsers owned by a device, set this to the resource name of the device. Format: devices/{device\}
     *     parent: 'devices/my-device',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "deviceUsers": [],
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
      params: Params$Resource$Devices$Deviceusers$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Devices$Deviceusers$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse>;
    list(
      params: Params$Resource$Devices$Deviceusers$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Devices$Deviceusers$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse>,
      callback: BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse>
    ): void;
    list(
      params: Params$Resource$Devices$Deviceusers$List,
      callback: BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Devices$Deviceusers$List
        | BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Devices$Deviceusers$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Devices$Deviceusers$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/deviceUsers').replace(
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
        createAPIRequest<Schema$GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse>(
          parameters
        );
      }
    }

    /**
     * Looks up resource names of the DeviceUsers associated with the caller's credentials, as well as the properties provided in the request. This method must be called with end-user credentials with the scope: https://www.googleapis.com/auth/cloud-identity.devices.lookup If multiple properties are provided, only DeviceUsers having all of these properties are considered as matches - i.e. the query behaves like an AND. Different platforms require different amounts of information from the caller to ensure that the DeviceUser is uniquely identified. - iOS: No properties need to be passed, the caller's credentials are sufficient to identify the corresponding DeviceUser. - Android: Specifying the 'android_id' field is required. - Desktop: Specifying the 'raw_resource_id' field is required.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-identity.devices.lookup'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.devices.deviceUsers.lookup({
     *     // Android Id returned by [Settings.Secure#ANDROID_ID](https://developer.android.com/reference/android/provider/Settings.Secure.html#ANDROID_ID).
     *     androidId: 'placeholder-value',
     *     // The maximum number of DeviceUsers to return. If unspecified, at most 20 DeviceUsers will be returned. The maximum value is 20; values above 20 will be coerced to 20.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `LookupDeviceUsers` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `LookupDeviceUsers` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Must be set to "devices/-/deviceUsers" to search across all DeviceUser belonging to the user.
     *     parent: 'devices/my-device/deviceUsers',
     *     // Raw Resource Id used by Google Endpoint Verification. If the user is enrolled into Google Endpoint Verification, this id will be saved as the 'device_resource_id' field in the following platform dependent files. Mac: ~/.secureConnect/context_aware_config.json Windows: C:\Users\%USERPROFILE%\.secureConnect\context_aware_config.json Linux: ~/.secureConnect/context_aware_config.json
     *     rawResourceId: 'placeholder-value',
     *     // The user whose DeviceUser's resource name will be fetched. Must be set to 'me' to fetch the DeviceUser's resource name for the calling user.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "customer": "my_customer",
     *   //   "names": [],
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
    lookup(
      params: Params$Resource$Devices$Deviceusers$Lookup,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    lookup(
      params?: Params$Resource$Devices$Deviceusers$Lookup,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse>;
    lookup(
      params: Params$Resource$Devices$Deviceusers$Lookup,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    lookup(
      params: Params$Resource$Devices$Deviceusers$Lookup,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse>,
      callback: BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse>
    ): void;
    lookup(
      params: Params$Resource$Devices$Deviceusers$Lookup,
      callback: BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse>
    ): void;
    lookup(
      callback: BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse>
    ): void;
    lookup(
      paramsOrCallback?:
        | Params$Resource$Devices$Deviceusers$Lookup
        | BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Devices$Deviceusers$Lookup;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Devices$Deviceusers$Lookup;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}:lookup').replace(
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
        createAPIRequest<Schema$GoogleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse>(
          parameters
        );
      }
    }

    /**
     * Wipes the user's account on a device. Other data on the device that is not associated with the user's work account is not affected. For example, if a Gmail app is installed on a device that is used for personal and work purposes, and the user is logged in to the Gmail app with their personal account as well as their work account, wiping the "deviceUser" by their work administrator will not affect their personal account within Gmail or other apps such as Photos.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.devices.deviceUsers.wipe({
     *     // Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device\}/deviceUsers/{device_user\}`, where device is the unique ID assigned to the Device, and device_user is the unique ID assigned to the User.
     *     name: 'devices/my-device/deviceUsers/my-deviceUser',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "customer": "my_customer"
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
    wipe(
      params: Params$Resource$Devices$Deviceusers$Wipe,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    wipe(
      params?: Params$Resource$Devices$Deviceusers$Wipe,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    wipe(
      params: Params$Resource$Devices$Deviceusers$Wipe,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    wipe(
      params: Params$Resource$Devices$Deviceusers$Wipe,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    wipe(
      params: Params$Resource$Devices$Deviceusers$Wipe,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    wipe(callback: BodyResponseCallback<Schema$Operation>): void;
    wipe(
      paramsOrCallback?:
        | Params$Resource$Devices$Deviceusers$Wipe
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
        {}) as Params$Resource$Devices$Deviceusers$Wipe;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Devices$Deviceusers$Wipe;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:wipe').replace(/([^:]\/)\/+/g, '$1'),
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

  export interface Params$Resource$Devices$Deviceusers$Approve
    extends StandardParameters {
    /**
     * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device\}/deviceUsers/{device_user\}`, where device is the unique ID assigned to the Device, and device_user is the unique ID assigned to the User.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAppsCloudidentityDevicesV1ApproveDeviceUserRequest;
  }
  export interface Params$Resource$Devices$Deviceusers$Block
    extends StandardParameters {
    /**
     * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device\}/deviceUsers/{device_user\}`, where device is the unique ID assigned to the Device, and device_user is the unique ID assigned to the User.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAppsCloudidentityDevicesV1BlockDeviceUserRequest;
  }
  export interface Params$Resource$Devices$Deviceusers$Cancelwipe
    extends StandardParameters {
    /**
     * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device\}/deviceUsers/{device_user\}`, where device is the unique ID assigned to the Device, and device_user is the unique ID assigned to the User.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserRequest;
  }
  export interface Params$Resource$Devices$Deviceusers$Delete
    extends StandardParameters {
    /**
     * Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer\}`, where customer is the customer to whom the device belongs.
     */
    customer?: string;
    /**
     * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device\}/deviceUsers/{device_user\}`, where device is the unique ID assigned to the Device, and device_user is the unique ID assigned to the User.
     */
    name?: string;
  }
  export interface Params$Resource$Devices$Deviceusers$Get
    extends StandardParameters {
    /**
     * Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer\}`, where customer is the customer to whom the device belongs.
     */
    customer?: string;
    /**
     * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device\}/deviceUsers/{device_user\}`, where device is the unique ID assigned to the Device, and device_user is the unique ID assigned to the User.
     */
    name?: string;
  }
  export interface Params$Resource$Devices$Deviceusers$List
    extends StandardParameters {
    /**
     * Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer\}`, where customer is the customer to whom the device belongs.
     */
    customer?: string;
    /**
     * Optional. Additional restrictions when fetching list of devices. For a list of search fields, refer to [Mobile device search fields](https://developers.google.com/admin-sdk/directory/v1/search-operators). Multiple search fields are separated by the space character.
     */
    filter?: string;
    /**
     * Optional. Order specification for devices in the response.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of DeviceUsers to return. If unspecified, at most 5 DeviceUsers will be returned. The maximum value is 20; values above 20 will be coerced to 20.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListDeviceUsers` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBooks` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. To list all DeviceUsers, set this to "devices/-". To list all DeviceUsers owned by a device, set this to the resource name of the device. Format: devices/{device\}
     */
    parent?: string;
  }
  export interface Params$Resource$Devices$Deviceusers$Lookup
    extends StandardParameters {
    /**
     * Android Id returned by [Settings.Secure#ANDROID_ID](https://developer.android.com/reference/android/provider/Settings.Secure.html#ANDROID_ID).
     */
    androidId?: string;
    /**
     * The maximum number of DeviceUsers to return. If unspecified, at most 20 DeviceUsers will be returned. The maximum value is 20; values above 20 will be coerced to 20.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `LookupDeviceUsers` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `LookupDeviceUsers` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Must be set to "devices/-/deviceUsers" to search across all DeviceUser belonging to the user.
     */
    parent?: string;
    /**
     * Raw Resource Id used by Google Endpoint Verification. If the user is enrolled into Google Endpoint Verification, this id will be saved as the 'device_resource_id' field in the following platform dependent files. Mac: ~/.secureConnect/context_aware_config.json Windows: C:\Users\%USERPROFILE%\.secureConnect\context_aware_config.json Linux: ~/.secureConnect/context_aware_config.json
     */
    rawResourceId?: string;
    /**
     * The user whose DeviceUser's resource name will be fetched. Must be set to 'me' to fetch the DeviceUser's resource name for the calling user.
     */
    userId?: string;
  }
  export interface Params$Resource$Devices$Deviceusers$Wipe
    extends StandardParameters {
    /**
     * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device\}/deviceUsers/{device_user\}`, where device is the unique ID assigned to the Device, and device_user is the unique ID assigned to the User.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAppsCloudidentityDevicesV1WipeDeviceUserRequest;
  }

  export class Resource$Devices$Deviceusers$Clientstates {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the client state for the device user
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.devices.deviceUsers.clientStates.get({
     *     // Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer\}`, where customer is the customer to whom the device belongs.
     *     customer: 'placeholder-value',
     *     // Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the ClientState in format: `devices/{device\}/deviceUsers/{device_user\}/clientStates/{partner\}`, where `device` is the unique ID assigned to the Device, `device_user` is the unique ID assigned to the User and `partner` identifies the partner storing the data. To get the client state for devices belonging to your own organization, the `partnerId` is in the format: `customerId-*anystring*`. Where the `customerId` is your organization's customer ID and `anystring` is any suffix. This suffix is used in setting up Custom Access Levels in Context-Aware Access. You may use `my_customer` instead of the customer ID for devices managed by your own organization. You may specify `-` in place of the `{device\}`, so the ClientState resource name can be: `devices/-/deviceUsers/{device_user_resource\}/clientStates/{partner\}`.
     *     name: 'devices/my-device/deviceUsers/my-deviceUser/clientStates/my-clientState',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "assetTags": [],
     *   //   "complianceState": "my_complianceState",
     *   //   "createTime": "my_createTime",
     *   //   "customId": "my_customId",
     *   //   "etag": "my_etag",
     *   //   "healthScore": "my_healthScore",
     *   //   "keyValuePairs": {},
     *   //   "lastUpdateTime": "my_lastUpdateTime",
     *   //   "managed": "my_managed",
     *   //   "name": "my_name",
     *   //   "ownerType": "my_ownerType",
     *   //   "scoreReason": "my_scoreReason"
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
      params: Params$Resource$Devices$Deviceusers$Clientstates$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Devices$Deviceusers$Clientstates$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAppsCloudidentityDevicesV1ClientState>;
    get(
      params: Params$Resource$Devices$Deviceusers$Clientstates$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Devices$Deviceusers$Clientstates$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1ClientState>,
      callback: BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1ClientState>
    ): void;
    get(
      params: Params$Resource$Devices$Deviceusers$Clientstates$Get,
      callback: BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1ClientState>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1ClientState>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Devices$Deviceusers$Clientstates$Get
        | BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1ClientState>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1ClientState>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1ClientState>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAppsCloudidentityDevicesV1ClientState>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Devices$Deviceusers$Clientstates$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Devices$Deviceusers$Clientstates$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
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
        createAPIRequest<Schema$GoogleAppsCloudidentityDevicesV1ClientState>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAppsCloudidentityDevicesV1ClientState>(
          parameters
        );
      }
    }

    /**
     * Lists the client states for the given search query.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.devices.deviceUsers.clientStates.list({
     *     // Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer\}`, where customer is the customer to whom the device belongs.
     *     customer: 'placeholder-value',
     *     // Optional. Additional restrictions when fetching list of client states.
     *     filter: 'placeholder-value',
     *     // Optional. Order specification for client states in the response.
     *     orderBy: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListClientStates` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListClientStates` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. To list all ClientStates, set this to "devices/-/deviceUsers/-". To list all ClientStates owned by a DeviceUser, set this to the resource name of the DeviceUser. Format: devices/{device\}/deviceUsers/{deviceUser\}
     *     parent: 'devices/my-device/deviceUsers/my-deviceUser',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clientStates": [],
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
      params: Params$Resource$Devices$Deviceusers$Clientstates$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Devices$Deviceusers$Clientstates$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAppsCloudidentityDevicesV1ListClientStatesResponse>;
    list(
      params: Params$Resource$Devices$Deviceusers$Clientstates$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Devices$Deviceusers$Clientstates$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1ListClientStatesResponse>,
      callback: BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1ListClientStatesResponse>
    ): void;
    list(
      params: Params$Resource$Devices$Deviceusers$Clientstates$List,
      callback: BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1ListClientStatesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1ListClientStatesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Devices$Deviceusers$Clientstates$List
        | BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1ListClientStatesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1ListClientStatesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1ListClientStatesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAppsCloudidentityDevicesV1ListClientStatesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Devices$Deviceusers$Clientstates$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Devices$Deviceusers$Clientstates$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/clientStates').replace(
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
        createAPIRequest<Schema$GoogleAppsCloudidentityDevicesV1ListClientStatesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAppsCloudidentityDevicesV1ListClientStatesResponse>(
          parameters
        );
      }
    }

    /**
     * Updates the client state for the device user **Note**: This method is available only to customers who have one of the following SKUs: Enterprise Standard, Enterprise Plus, Enterprise for Education, and Cloud Identity Premium
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.devices.deviceUsers.clientStates.patch({
     *     // Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer\}`, where customer is the customer to whom the device belongs.
     *     customer: 'placeholder-value',
     *     // Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the ClientState in format: `devices/{device\}/deviceUsers/{device_user\}/clientState/{partner\}`, where partner corresponds to the partner storing the data. For partners belonging to the "BeyondCorp Alliance", this is the partner ID specified to you by Google. For all other callers, this is a string of the form: `{customer\}-suffix`, where `customer` is your customer ID. The *suffix* is any string the caller specifies. This string will be displayed verbatim in the administration console. This suffix is used in setting up Custom Access Levels in Context-Aware Access. Your organization's customer ID can be obtained from the URL: `GET https://www.googleapis.com/admin/directory/v1/customers/my_customer` The `id` field in the response contains the customer ID starting with the letter 'C'. The customer ID to be used in this API is the string after the letter 'C' (not including 'C')
     *     name: 'devices/my-device/deviceUsers/my-deviceUser/clientStates/my-clientState',
     *     // Optional. Comma-separated list of fully qualified names of fields to be updated. If not specified, all updatable fields in ClientState are updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "assetTags": [],
     *       //   "complianceState": "my_complianceState",
     *       //   "createTime": "my_createTime",
     *       //   "customId": "my_customId",
     *       //   "etag": "my_etag",
     *       //   "healthScore": "my_healthScore",
     *       //   "keyValuePairs": {},
     *       //   "lastUpdateTime": "my_lastUpdateTime",
     *       //   "managed": "my_managed",
     *       //   "name": "my_name",
     *       //   "ownerType": "my_ownerType",
     *       //   "scoreReason": "my_scoreReason"
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
      params: Params$Resource$Devices$Deviceusers$Clientstates$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Devices$Deviceusers$Clientstates$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Devices$Deviceusers$Clientstates$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Devices$Deviceusers$Clientstates$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Devices$Deviceusers$Clientstates$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Devices$Deviceusers$Clientstates$Patch
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
        {}) as Params$Resource$Devices$Deviceusers$Clientstates$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Devices$Deviceusers$Clientstates$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
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
  }

  export interface Params$Resource$Devices$Deviceusers$Clientstates$Get
    extends StandardParameters {
    /**
     * Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer\}`, where customer is the customer to whom the device belongs.
     */
    customer?: string;
    /**
     * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the ClientState in format: `devices/{device\}/deviceUsers/{device_user\}/clientStates/{partner\}`, where `device` is the unique ID assigned to the Device, `device_user` is the unique ID assigned to the User and `partner` identifies the partner storing the data. To get the client state for devices belonging to your own organization, the `partnerId` is in the format: `customerId-*anystring*`. Where the `customerId` is your organization's customer ID and `anystring` is any suffix. This suffix is used in setting up Custom Access Levels in Context-Aware Access. You may use `my_customer` instead of the customer ID for devices managed by your own organization. You may specify `-` in place of the `{device\}`, so the ClientState resource name can be: `devices/-/deviceUsers/{device_user_resource\}/clientStates/{partner\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Devices$Deviceusers$Clientstates$List
    extends StandardParameters {
    /**
     * Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer\}`, where customer is the customer to whom the device belongs.
     */
    customer?: string;
    /**
     * Optional. Additional restrictions when fetching list of client states.
     */
    filter?: string;
    /**
     * Optional. Order specification for client states in the response.
     */
    orderBy?: string;
    /**
     * Optional. A page token, received from a previous `ListClientStates` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListClientStates` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. To list all ClientStates, set this to "devices/-/deviceUsers/-". To list all ClientStates owned by a DeviceUser, set this to the resource name of the DeviceUser. Format: devices/{device\}/deviceUsers/{deviceUser\}
     */
    parent?: string;
  }
  export interface Params$Resource$Devices$Deviceusers$Clientstates$Patch
    extends StandardParameters {
    /**
     * Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer\}`, where customer is the customer to whom the device belongs.
     */
    customer?: string;
    /**
     * Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the ClientState in format: `devices/{device\}/deviceUsers/{device_user\}/clientState/{partner\}`, where partner corresponds to the partner storing the data. For partners belonging to the "BeyondCorp Alliance", this is the partner ID specified to you by Google. For all other callers, this is a string of the form: `{customer\}-suffix`, where `customer` is your customer ID. The *suffix* is any string the caller specifies. This string will be displayed verbatim in the administration console. This suffix is used in setting up Custom Access Levels in Context-Aware Access. Your organization's customer ID can be obtained from the URL: `GET https://www.googleapis.com/admin/directory/v1/customers/my_customer` The `id` field in the response contains the customer ID starting with the letter 'C'. The customer ID to be used in this API is the string after the letter 'C' (not including 'C')
     */
    name?: string;
    /**
     * Optional. Comma-separated list of fully qualified names of fields to be updated. If not specified, all updatable fields in ClientState are updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAppsCloudidentityDevicesV1ClientState;
  }

  export class Resource$Groups {
    context: APIRequestContext;
    memberships: Resource$Groups$Memberships;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.memberships = new Resource$Groups$Memberships(this.context);
    }

    /**
     * Creates a Group.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-identity.groups',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.groups.create({
     *     // Optional. The initial configuration option for the `Group`.
     *     initialGroupConfig: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "dynamicGroupMetadata": {},
     *       //   "groupKey": {},
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "parent": "my_parent",
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
      params: Params$Resource$Groups$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Groups$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Groups$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Groups$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Groups$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Groups$Create
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
      let params = (paramsOrCallback || {}) as Params$Resource$Groups$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/groups').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
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
     * Deletes a `Group`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-identity.groups',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.groups.delete({
     *     // Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Group` to retrieve. Must be of the form `groups/{group\}`.
     *     name: 'groups/my-group',
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
      params: Params$Resource$Groups$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Groups$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Groups$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Groups$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Groups$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Groups$Delete
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
      let params = (paramsOrCallback || {}) as Params$Resource$Groups$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
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
     * Retrieves a `Group`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-identity.groups',
     *       'https://www.googleapis.com/auth/cloud-identity.groups.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.groups.get({
     *     // Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Group` to retrieve. Must be of the form `groups/{group\}`.
     *     name: 'groups/my-group',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "dynamicGroupMetadata": {},
     *   //   "groupKey": {},
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "parent": "my_parent",
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
      params: Params$Resource$Groups$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Groups$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Group>;
    get(
      params: Params$Resource$Groups$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Groups$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Group>,
      callback: BodyResponseCallback<Schema$Group>
    ): void;
    get(
      params: Params$Resource$Groups$Get,
      callback: BodyResponseCallback<Schema$Group>
    ): void;
    get(callback: BodyResponseCallback<Schema$Group>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Groups$Get
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
      let params = (paramsOrCallback || {}) as Params$Resource$Groups$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
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
        createAPIRequest<Schema$Group>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Group>(parameters);
      }
    }

    /**
     * Get Security Settings
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-identity.groups',
     *       'https://www.googleapis.com/auth/cloud-identity.groups.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.groups.getSecuritySettings({
     *     // Required. The security settings to retrieve. Format: `groups/{group_id\}/securitySettings`
     *     name: 'groups/my-group/securitySettings',
     *     // Field-level read mask of which fields to return. "*" returns all fields. If not specified, all fields will be returned. May only contain the following field: `member_restriction`.
     *     readMask: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "memberRestriction": {},
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
    getSecuritySettings(
      params: Params$Resource$Groups$Getsecuritysettings,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getSecuritySettings(
      params?: Params$Resource$Groups$Getsecuritysettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SecuritySettings>;
    getSecuritySettings(
      params: Params$Resource$Groups$Getsecuritysettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getSecuritySettings(
      params: Params$Resource$Groups$Getsecuritysettings,
      options: MethodOptions | BodyResponseCallback<Schema$SecuritySettings>,
      callback: BodyResponseCallback<Schema$SecuritySettings>
    ): void;
    getSecuritySettings(
      params: Params$Resource$Groups$Getsecuritysettings,
      callback: BodyResponseCallback<Schema$SecuritySettings>
    ): void;
    getSecuritySettings(
      callback: BodyResponseCallback<Schema$SecuritySettings>
    ): void;
    getSecuritySettings(
      paramsOrCallback?:
        | Params$Resource$Groups$Getsecuritysettings
        | BodyResponseCallback<Schema$SecuritySettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SecuritySettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SecuritySettings>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SecuritySettings> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Groups$Getsecuritysettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Getsecuritysettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
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
        createAPIRequest<Schema$SecuritySettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SecuritySettings>(parameters);
      }
    }

    /**
     * Lists the `Group` resources under a customer or namespace.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-identity.groups',
     *       'https://www.googleapis.com/auth/cloud-identity.groups.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.groups.list({
     *     // The maximum number of results to return. Note that the number of results returned may be less than this value even if there are more available results. To fetch all results, clients must continue calling this method repeatedly until the response no longer contains a `next_page_token`. If unspecified, defaults to 200 for `View.BASIC` and to 50 for `View.FULL`. Must not be greater than 1000 for `View.BASIC` or 500 for `View.FULL`.
     *     pageSize: 'placeholder-value',
     *     // The `next_page_token` value returned from a previous list request, if any.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent resource under which to list all `Group` resources. Must be of the form `identitysources/{identity_source\}` for external- identity-mapped groups or `customers/{customer\}` for Google Groups. The `customer` must begin with "C" (for example, 'C046psxkn').
     *     parent: 'placeholder-value',
     *     // The level of detail to be returned. If unspecified, defaults to `View.BASIC`.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "groups": [],
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
      params: Params$Resource$Groups$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Groups$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListGroupsResponse>;
    list(
      params: Params$Resource$Groups$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Groups$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListGroupsResponse>,
      callback: BodyResponseCallback<Schema$ListGroupsResponse>
    ): void;
    list(
      params: Params$Resource$Groups$List,
      callback: BodyResponseCallback<Schema$ListGroupsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListGroupsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Groups$List
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
      let params = (paramsOrCallback || {}) as Params$Resource$Groups$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/groups').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
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
     * Looks up the [resource name](https://cloud.google.com/apis/design/resource_names) of a `Group` by its `EntityKey`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-identity.groups',
     *       'https://www.googleapis.com/auth/cloud-identity.groups.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.groups.lookup({
     *     // The ID of the entity. For Google-managed entities, the `id` should be the email address of an existing group or user. For external-identity-mapped entities, the `id` must be a string conforming to the Identity Source's requirements. Must be unique within a `namespace`.
     *     'groupKey.id': 'placeholder-value',
     *     // The namespace in which the entity exists. If not specified, the `EntityKey` represents a Google-managed entity such as a Google user or a Google Group. If specified, the `EntityKey` represents an external-identity-mapped group. The namespace must correspond to an identity source created in Admin Console and must be in the form of `identitysources/{identity_source\}`.
     *     'groupKey.namespace': 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
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
    lookup(
      params: Params$Resource$Groups$Lookup,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    lookup(
      params?: Params$Resource$Groups$Lookup,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LookupGroupNameResponse>;
    lookup(
      params: Params$Resource$Groups$Lookup,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    lookup(
      params: Params$Resource$Groups$Lookup,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$LookupGroupNameResponse>,
      callback: BodyResponseCallback<Schema$LookupGroupNameResponse>
    ): void;
    lookup(
      params: Params$Resource$Groups$Lookup,
      callback: BodyResponseCallback<Schema$LookupGroupNameResponse>
    ): void;
    lookup(
      callback: BodyResponseCallback<Schema$LookupGroupNameResponse>
    ): void;
    lookup(
      paramsOrCallback?:
        | Params$Resource$Groups$Lookup
        | BodyResponseCallback<Schema$LookupGroupNameResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LookupGroupNameResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LookupGroupNameResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$LookupGroupNameResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Groups$Lookup;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Lookup;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/groups:lookup').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LookupGroupNameResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LookupGroupNameResponse>(parameters);
      }
    }

    /**
     * Updates a `Group`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-identity.groups',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.groups.patch({
     *     // Output only. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Group`. Shall be of the form `groups/{group\}`.
     *     name: 'groups/my-group',
     *     // Required. The names of fields to update. May only contain the following field names: `display_name`, `description`, `labels`.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "dynamicGroupMetadata": {},
     *       //   "groupKey": {},
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "parent": "my_parent",
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
      params: Params$Resource$Groups$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Groups$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Groups$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Groups$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Groups$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Groups$Patch
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
      let params = (paramsOrCallback || {}) as Params$Resource$Groups$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
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
     * Searches for `Group` resources matching a specified query.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-identity.groups',
     *       'https://www.googleapis.com/auth/cloud-identity.groups.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.groups.search({
     *     // The maximum number of results to return. Note that the number of results returned may be less than this value even if there are more available results. To fetch all results, clients must continue calling this method repeatedly until the response no longer contains a `next_page_token`. If unspecified, defaults to 200 for `GroupView.BASIC` and 50 for `GroupView.FULL`. Must not be greater than 1000 for `GroupView.BASIC` or 500 for `GroupView.FULL`.
     *     pageSize: 'placeholder-value',
     *     // The `next_page_token` value returned from a previous search request, if any.
     *     pageToken: 'placeholder-value',
     *     // Required. The search query. Must be specified in [Common Expression Language](https://opensource.google/projects/cel). May only contain equality operators on the parent and inclusion operators on labels (e.g., `parent == 'customers/{customer\}' && 'cloudidentity.googleapis.com/groups.discussion_forum' in labels`). The `customer` must begin with "C" (for example, 'C046psxkn').
     *     query: 'placeholder-value',
     *     // The level of detail to be returned. If unspecified, defaults to `View.BASIC`.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "groups": [],
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
    search(
      params: Params$Resource$Groups$Search,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    search(
      params?: Params$Resource$Groups$Search,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SearchGroupsResponse>;
    search(
      params: Params$Resource$Groups$Search,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    search(
      params: Params$Resource$Groups$Search,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SearchGroupsResponse>,
      callback: BodyResponseCallback<Schema$SearchGroupsResponse>
    ): void;
    search(
      params: Params$Resource$Groups$Search,
      callback: BodyResponseCallback<Schema$SearchGroupsResponse>
    ): void;
    search(callback: BodyResponseCallback<Schema$SearchGroupsResponse>): void;
    search(
      paramsOrCallback?:
        | Params$Resource$Groups$Search
        | BodyResponseCallback<Schema$SearchGroupsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SearchGroupsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SearchGroupsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SearchGroupsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Groups$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Search;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/groups:search').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SearchGroupsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SearchGroupsResponse>(parameters);
      }
    }

    /**
     * Update Security Settings
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-identity.groups',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.groups.updateSecuritySettings({
     *     // Output only. The resource name of the security settings. Shall be of the form `groups/{group_id\}/securitySettings`.
     *     name: 'groups/my-group/securitySettings',
     *     // Required. The fully-qualified names of fields to update. May only contain the following field: `member_restriction.query`.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "memberRestriction": {},
     *       //   "name": "my_name"
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
    updateSecuritySettings(
      params: Params$Resource$Groups$Updatesecuritysettings,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateSecuritySettings(
      params?: Params$Resource$Groups$Updatesecuritysettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    updateSecuritySettings(
      params: Params$Resource$Groups$Updatesecuritysettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateSecuritySettings(
      params: Params$Resource$Groups$Updatesecuritysettings,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    updateSecuritySettings(
      params: Params$Resource$Groups$Updatesecuritysettings,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    updateSecuritySettings(
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    updateSecuritySettings(
      paramsOrCallback?:
        | Params$Resource$Groups$Updatesecuritysettings
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
        {}) as Params$Resource$Groups$Updatesecuritysettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Updatesecuritysettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
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
  }

  export interface Params$Resource$Groups$Create extends StandardParameters {
    /**
     * Optional. The initial configuration option for the `Group`.
     */
    initialGroupConfig?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Group;
  }
  export interface Params$Resource$Groups$Delete extends StandardParameters {
    /**
     * Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Group` to retrieve. Must be of the form `groups/{group\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Groups$Get extends StandardParameters {
    /**
     * Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Group` to retrieve. Must be of the form `groups/{group\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Groups$Getsecuritysettings
    extends StandardParameters {
    /**
     * Required. The security settings to retrieve. Format: `groups/{group_id\}/securitySettings`
     */
    name?: string;
    /**
     * Field-level read mask of which fields to return. "*" returns all fields. If not specified, all fields will be returned. May only contain the following field: `member_restriction`.
     */
    readMask?: string;
  }
  export interface Params$Resource$Groups$List extends StandardParameters {
    /**
     * The maximum number of results to return. Note that the number of results returned may be less than this value even if there are more available results. To fetch all results, clients must continue calling this method repeatedly until the response no longer contains a `next_page_token`. If unspecified, defaults to 200 for `View.BASIC` and to 50 for `View.FULL`. Must not be greater than 1000 for `View.BASIC` or 500 for `View.FULL`.
     */
    pageSize?: number;
    /**
     * The `next_page_token` value returned from a previous list request, if any.
     */
    pageToken?: string;
    /**
     * Required. The parent resource under which to list all `Group` resources. Must be of the form `identitysources/{identity_source\}` for external- identity-mapped groups or `customers/{customer\}` for Google Groups. The `customer` must begin with "C" (for example, 'C046psxkn').
     */
    parent?: string;
    /**
     * The level of detail to be returned. If unspecified, defaults to `View.BASIC`.
     */
    view?: string;
  }
  export interface Params$Resource$Groups$Lookup extends StandardParameters {
    /**
     * The ID of the entity. For Google-managed entities, the `id` should be the email address of an existing group or user. For external-identity-mapped entities, the `id` must be a string conforming to the Identity Source's requirements. Must be unique within a `namespace`.
     */
    'groupKey.id'?: string;
    /**
     * The namespace in which the entity exists. If not specified, the `EntityKey` represents a Google-managed entity such as a Google user or a Google Group. If specified, the `EntityKey` represents an external-identity-mapped group. The namespace must correspond to an identity source created in Admin Console and must be in the form of `identitysources/{identity_source\}`.
     */
    'groupKey.namespace'?: string;
  }
  export interface Params$Resource$Groups$Patch extends StandardParameters {
    /**
     * Output only. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Group`. Shall be of the form `groups/{group\}`.
     */
    name?: string;
    /**
     * Required. The names of fields to update. May only contain the following field names: `display_name`, `description`, `labels`.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Group;
  }
  export interface Params$Resource$Groups$Search extends StandardParameters {
    /**
     * The maximum number of results to return. Note that the number of results returned may be less than this value even if there are more available results. To fetch all results, clients must continue calling this method repeatedly until the response no longer contains a `next_page_token`. If unspecified, defaults to 200 for `GroupView.BASIC` and 50 for `GroupView.FULL`. Must not be greater than 1000 for `GroupView.BASIC` or 500 for `GroupView.FULL`.
     */
    pageSize?: number;
    /**
     * The `next_page_token` value returned from a previous search request, if any.
     */
    pageToken?: string;
    /**
     * Required. The search query. Must be specified in [Common Expression Language](https://opensource.google/projects/cel). May only contain equality operators on the parent and inclusion operators on labels (e.g., `parent == 'customers/{customer\}' && 'cloudidentity.googleapis.com/groups.discussion_forum' in labels`). The `customer` must begin with "C" (for example, 'C046psxkn').
     */
    query?: string;
    /**
     * The level of detail to be returned. If unspecified, defaults to `View.BASIC`.
     */
    view?: string;
  }
  export interface Params$Resource$Groups$Updatesecuritysettings
    extends StandardParameters {
    /**
     * Output only. The resource name of the security settings. Shall be of the form `groups/{group_id\}/securitySettings`.
     */
    name?: string;
    /**
     * Required. The fully-qualified names of fields to update. May only contain the following field: `member_restriction.query`.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SecuritySettings;
  }

  export class Resource$Groups$Memberships {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Check a potential member for membership in a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the member is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. A member has membership to a group as long as there is a single viewable transitive membership between the group and the member. The actor must have view permissions to at least one transitive membership between the member and group.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-identity.groups',
     *       'https://www.googleapis.com/auth/cloud-identity.groups.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.groups.memberships.checkTransitiveMembership({
     *     // [Resource name](https://cloud.google.com/apis/design/resource_names) of the group to check the transitive membership in. Format: `groups/{group\}`, where `group` is the unique id assigned to the Group to which the Membership belongs to.
     *     parent: 'groups/my-group',
     *     // Required. A CEL expression that MUST include member specification. This is a `required` field. Certain groups are uniquely identified by both a 'member_key_id' and a 'member_key_namespace', which requires an additional query input: 'member_key_namespace'. Example query: `member_key_id == 'member_key_id_value'`
     *     query: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "hasMembership": false
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
    checkTransitiveMembership(
      params: Params$Resource$Groups$Memberships$Checktransitivemembership,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    checkTransitiveMembership(
      params?: Params$Resource$Groups$Memberships$Checktransitivemembership,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CheckTransitiveMembershipResponse>;
    checkTransitiveMembership(
      params: Params$Resource$Groups$Memberships$Checktransitivemembership,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    checkTransitiveMembership(
      params: Params$Resource$Groups$Memberships$Checktransitivemembership,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CheckTransitiveMembershipResponse>,
      callback: BodyResponseCallback<Schema$CheckTransitiveMembershipResponse>
    ): void;
    checkTransitiveMembership(
      params: Params$Resource$Groups$Memberships$Checktransitivemembership,
      callback: BodyResponseCallback<Schema$CheckTransitiveMembershipResponse>
    ): void;
    checkTransitiveMembership(
      callback: BodyResponseCallback<Schema$CheckTransitiveMembershipResponse>
    ): void;
    checkTransitiveMembership(
      paramsOrCallback?:
        | Params$Resource$Groups$Memberships$Checktransitivemembership
        | BodyResponseCallback<Schema$CheckTransitiveMembershipResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CheckTransitiveMembershipResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CheckTransitiveMembershipResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$CheckTransitiveMembershipResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Groups$Memberships$Checktransitivemembership;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Groups$Memberships$Checktransitivemembership;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+parent}/memberships:checkTransitiveMembership'
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
        createAPIRequest<Schema$CheckTransitiveMembershipResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CheckTransitiveMembershipResponse>(
          parameters
        );
      }
    }

    /**
     * Creates a `Membership`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-identity.groups',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.groups.memberships.create({
     *     // Required. The parent `Group` resource under which to create the `Membership`. Must be of the form `groups/{group\}`.
     *     parent: 'groups/my-group',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "name": "my_name",
     *       //   "preferredMemberKey": {},
     *       //   "roles": [],
     *       //   "type": "my_type",
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
      params: Params$Resource$Groups$Memberships$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Groups$Memberships$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Groups$Memberships$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Groups$Memberships$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Groups$Memberships$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Groups$Memberships$Create
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
        {}) as Params$Resource$Groups$Memberships$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Memberships$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/memberships').replace(
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
     * Deletes a `Membership`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-identity.groups',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.groups.memberships.delete({
     *     // Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Membership` to delete. Must be of the form `groups/{group\}/memberships/{membership\}`
     *     name: 'groups/my-group/memberships/my-membership',
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
      params: Params$Resource$Groups$Memberships$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Groups$Memberships$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Groups$Memberships$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Groups$Memberships$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Groups$Memberships$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Groups$Memberships$Delete
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
        {}) as Params$Resource$Groups$Memberships$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Memberships$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
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
     * Retrieves a `Membership`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-identity.groups',
     *       'https://www.googleapis.com/auth/cloud-identity.groups.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.groups.memberships.get({
     *     // Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Membership` to retrieve. Must be of the form `groups/{group\}/memberships/{membership\}`.
     *     name: 'groups/my-group/memberships/my-membership',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "name": "my_name",
     *   //   "preferredMemberKey": {},
     *   //   "roles": [],
     *   //   "type": "my_type",
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
      params: Params$Resource$Groups$Memberships$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Groups$Memberships$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Membership>;
    get(
      params: Params$Resource$Groups$Memberships$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Groups$Memberships$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Membership>,
      callback: BodyResponseCallback<Schema$Membership>
    ): void;
    get(
      params: Params$Resource$Groups$Memberships$Get,
      callback: BodyResponseCallback<Schema$Membership>
    ): void;
    get(callback: BodyResponseCallback<Schema$Membership>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Groups$Memberships$Get
        | BodyResponseCallback<Schema$Membership>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Membership>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Membership>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Membership> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Groups$Memberships$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Memberships$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
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
        createAPIRequest<Schema$Membership>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Membership>(parameters);
      }
    }

    /**
     * Get a membership graph of just a member or both a member and a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the member is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. Given a member, the response will contain all membership paths from the member. Given both a group and a member, the response will contain all membership paths between the group and the member.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-identity.groups',
     *       'https://www.googleapis.com/auth/cloud-identity.groups.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.groups.memberships.getMembershipGraph({
     *     // Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the group to search transitive memberships in. Format: `groups/{group\}`, where `group` is the unique ID assigned to the Group to which the Membership belongs to. group can be a wildcard collection id "-". When a group is specified, the membership graph will be constrained to paths between the member (defined in the query) and the parent. If a wildcard collection is provided, all membership paths connected to the member will be returned.
     *     parent: 'groups/my-group',
     *     // Required. A CEL expression that MUST include member specification AND label(s). Certain groups are uniquely identified by both a 'member_key_id' and a 'member_key_namespace', which requires an additional query input: 'member_key_namespace'. Example query: `member_key_id == 'member_key_id_value' && in labels`
     *     query: 'placeholder-value',
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
    getMembershipGraph(
      params: Params$Resource$Groups$Memberships$Getmembershipgraph,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getMembershipGraph(
      params?: Params$Resource$Groups$Memberships$Getmembershipgraph,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    getMembershipGraph(
      params: Params$Resource$Groups$Memberships$Getmembershipgraph,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getMembershipGraph(
      params: Params$Resource$Groups$Memberships$Getmembershipgraph,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    getMembershipGraph(
      params: Params$Resource$Groups$Memberships$Getmembershipgraph,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    getMembershipGraph(callback: BodyResponseCallback<Schema$Operation>): void;
    getMembershipGraph(
      paramsOrCallback?:
        | Params$Resource$Groups$Memberships$Getmembershipgraph
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
        {}) as Params$Resource$Groups$Memberships$Getmembershipgraph;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Memberships$Getmembershipgraph;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+parent}/memberships:getMembershipGraph'
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Lists the `Membership`s within a `Group`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-identity.groups',
     *       'https://www.googleapis.com/auth/cloud-identity.groups.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.groups.memberships.list({
     *     // The maximum number of results to return. Note that the number of results returned may be less than this value even if there are more available results. To fetch all results, clients must continue calling this method repeatedly until the response no longer contains a `next_page_token`. If unspecified, defaults to 200 for `GroupView.BASIC` and to 50 for `GroupView.FULL`. Must not be greater than 1000 for `GroupView.BASIC` or 500 for `GroupView.FULL`.
     *     pageSize: 'placeholder-value',
     *     // The `next_page_token` value returned from a previous search request, if any.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent `Group` resource under which to lookup the `Membership` name. Must be of the form `groups/{group\}`.
     *     parent: 'groups/my-group',
     *     // The level of detail to be returned. If unspecified, defaults to `View.BASIC`.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "memberships": [],
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
      params: Params$Resource$Groups$Memberships$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Groups$Memberships$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListMembershipsResponse>;
    list(
      params: Params$Resource$Groups$Memberships$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Groups$Memberships$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListMembershipsResponse>,
      callback: BodyResponseCallback<Schema$ListMembershipsResponse>
    ): void;
    list(
      params: Params$Resource$Groups$Memberships$List,
      callback: BodyResponseCallback<Schema$ListMembershipsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListMembershipsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Groups$Memberships$List
        | BodyResponseCallback<Schema$ListMembershipsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListMembershipsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListMembershipsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListMembershipsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Groups$Memberships$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Memberships$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/memberships').replace(
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
        createAPIRequest<Schema$ListMembershipsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListMembershipsResponse>(parameters);
      }
    }

    /**
     * Looks up the [resource name](https://cloud.google.com/apis/design/resource_names) of a `Membership` by its `EntityKey`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-identity.groups',
     *       'https://www.googleapis.com/auth/cloud-identity.groups.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.groups.memberships.lookup({
     *     // The ID of the entity. For Google-managed entities, the `id` should be the email address of an existing group or user. For external-identity-mapped entities, the `id` must be a string conforming to the Identity Source's requirements. Must be unique within a `namespace`.
     *     'memberKey.id': 'placeholder-value',
     *     // The namespace in which the entity exists. If not specified, the `EntityKey` represents a Google-managed entity such as a Google user or a Google Group. If specified, the `EntityKey` represents an external-identity-mapped group. The namespace must correspond to an identity source created in Admin Console and must be in the form of `identitysources/{identity_source\}`.
     *     'memberKey.namespace': 'placeholder-value',
     *     // Required. The parent `Group` resource under which to lookup the `Membership` name. Must be of the form `groups/{group\}`.
     *     parent: 'groups/my-group',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
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
    lookup(
      params: Params$Resource$Groups$Memberships$Lookup,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    lookup(
      params?: Params$Resource$Groups$Memberships$Lookup,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LookupMembershipNameResponse>;
    lookup(
      params: Params$Resource$Groups$Memberships$Lookup,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    lookup(
      params: Params$Resource$Groups$Memberships$Lookup,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$LookupMembershipNameResponse>,
      callback: BodyResponseCallback<Schema$LookupMembershipNameResponse>
    ): void;
    lookup(
      params: Params$Resource$Groups$Memberships$Lookup,
      callback: BodyResponseCallback<Schema$LookupMembershipNameResponse>
    ): void;
    lookup(
      callback: BodyResponseCallback<Schema$LookupMembershipNameResponse>
    ): void;
    lookup(
      paramsOrCallback?:
        | Params$Resource$Groups$Memberships$Lookup
        | BodyResponseCallback<Schema$LookupMembershipNameResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LookupMembershipNameResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LookupMembershipNameResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$LookupMembershipNameResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Groups$Memberships$Lookup;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Memberships$Lookup;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/memberships:lookup').replace(
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
        createAPIRequest<Schema$LookupMembershipNameResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LookupMembershipNameResponse>(
          parameters
        );
      }
    }

    /**
     * Modifies the `MembershipRole`s of a `Membership`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-identity.groups',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.groups.memberships.modifyMembershipRoles({
     *     // Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Membership` whose roles are to be modified. Must be of the form `groups/{group\}/memberships/{membership\}`.
     *     name: 'groups/my-group/memberships/my-membership',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "addRoles": [],
     *       //   "removeRoles": [],
     *       //   "updateRolesParams": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "membership": {}
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
    modifyMembershipRoles(
      params: Params$Resource$Groups$Memberships$Modifymembershiproles,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    modifyMembershipRoles(
      params?: Params$Resource$Groups$Memberships$Modifymembershiproles,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ModifyMembershipRolesResponse>;
    modifyMembershipRoles(
      params: Params$Resource$Groups$Memberships$Modifymembershiproles,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    modifyMembershipRoles(
      params: Params$Resource$Groups$Memberships$Modifymembershiproles,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ModifyMembershipRolesResponse>,
      callback: BodyResponseCallback<Schema$ModifyMembershipRolesResponse>
    ): void;
    modifyMembershipRoles(
      params: Params$Resource$Groups$Memberships$Modifymembershiproles,
      callback: BodyResponseCallback<Schema$ModifyMembershipRolesResponse>
    ): void;
    modifyMembershipRoles(
      callback: BodyResponseCallback<Schema$ModifyMembershipRolesResponse>
    ): void;
    modifyMembershipRoles(
      paramsOrCallback?:
        | Params$Resource$Groups$Memberships$Modifymembershiproles
        | BodyResponseCallback<Schema$ModifyMembershipRolesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ModifyMembershipRolesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ModifyMembershipRolesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ModifyMembershipRolesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Groups$Memberships$Modifymembershiproles;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Memberships$Modifymembershiproles;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:modifyMembershipRoles').replace(
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
        createAPIRequest<Schema$ModifyMembershipRolesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ModifyMembershipRolesResponse>(
          parameters
        );
      }
    }

    /**
     * Search transitive groups of a member. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the member is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. A transitive group is any group that has a direct or indirect membership to the member. Actor must have view permissions all transitive groups.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-identity.groups',
     *       'https://www.googleapis.com/auth/cloud-identity.groups.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.groups.memberships.searchTransitiveGroups({
     *     // The default page size is 200 (max 1000).
     *     pageSize: 'placeholder-value',
     *     // The next_page_token value returned from a previous list request, if any.
     *     pageToken: 'placeholder-value',
     *     // [Resource name](https://cloud.google.com/apis/design/resource_names) of the group to search transitive memberships in. Format: `groups/{group\}`, where `group` is always '-' as this API will search across all groups for a given member.
     *     parent: 'groups/my-group',
     *     // Required. A CEL expression that MUST include member specification AND label(s). This is a `required` field. Users can search on label attributes of groups. CONTAINS match ('in') is supported on labels. Identity-mapped groups are uniquely identified by both a `member_key_id` and a `member_key_namespace`, which requires an additional query input: `member_key_namespace`. Example query: `member_key_id == 'member_key_id_value' && in labels`
     *     query: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "memberships": [],
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
    searchTransitiveGroups(
      params: Params$Resource$Groups$Memberships$Searchtransitivegroups,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    searchTransitiveGroups(
      params?: Params$Resource$Groups$Memberships$Searchtransitivegroups,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SearchTransitiveGroupsResponse>;
    searchTransitiveGroups(
      params: Params$Resource$Groups$Memberships$Searchtransitivegroups,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    searchTransitiveGroups(
      params: Params$Resource$Groups$Memberships$Searchtransitivegroups,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SearchTransitiveGroupsResponse>,
      callback: BodyResponseCallback<Schema$SearchTransitiveGroupsResponse>
    ): void;
    searchTransitiveGroups(
      params: Params$Resource$Groups$Memberships$Searchtransitivegroups,
      callback: BodyResponseCallback<Schema$SearchTransitiveGroupsResponse>
    ): void;
    searchTransitiveGroups(
      callback: BodyResponseCallback<Schema$SearchTransitiveGroupsResponse>
    ): void;
    searchTransitiveGroups(
      paramsOrCallback?:
        | Params$Resource$Groups$Memberships$Searchtransitivegroups
        | BodyResponseCallback<Schema$SearchTransitiveGroupsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SearchTransitiveGroupsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SearchTransitiveGroupsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SearchTransitiveGroupsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Groups$Memberships$Searchtransitivegroups;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Groups$Memberships$Searchtransitivegroups;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+parent}/memberships:searchTransitiveGroups'
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
        createAPIRequest<Schema$SearchTransitiveGroupsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SearchTransitiveGroupsResponse>(
          parameters
        );
      }
    }

    /**
     * Search transitive memberships of a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the group is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. A transitive membership is any direct or indirect membership of a group. Actor must have view permissions to all transitive memberships.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-identity.groups',
     *       'https://www.googleapis.com/auth/cloud-identity.groups.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await cloudidentity.groups.memberships.searchTransitiveMemberships({
     *       // The default page size is 200 (max 1000).
     *       pageSize: 'placeholder-value',
     *       // The next_page_token value returned from a previous list request, if any.
     *       pageToken: 'placeholder-value',
     *       // [Resource name](https://cloud.google.com/apis/design/resource_names) of the group to search transitive memberships in. Format: `groups/{group\}`, where `group` is the unique ID assigned to the Group.
     *       parent: 'groups/my-group',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "memberships": [],
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
    searchTransitiveMemberships(
      params: Params$Resource$Groups$Memberships$Searchtransitivememberships,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    searchTransitiveMemberships(
      params?: Params$Resource$Groups$Memberships$Searchtransitivememberships,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SearchTransitiveMembershipsResponse>;
    searchTransitiveMemberships(
      params: Params$Resource$Groups$Memberships$Searchtransitivememberships,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    searchTransitiveMemberships(
      params: Params$Resource$Groups$Memberships$Searchtransitivememberships,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SearchTransitiveMembershipsResponse>,
      callback: BodyResponseCallback<Schema$SearchTransitiveMembershipsResponse>
    ): void;
    searchTransitiveMemberships(
      params: Params$Resource$Groups$Memberships$Searchtransitivememberships,
      callback: BodyResponseCallback<Schema$SearchTransitiveMembershipsResponse>
    ): void;
    searchTransitiveMemberships(
      callback: BodyResponseCallback<Schema$SearchTransitiveMembershipsResponse>
    ): void;
    searchTransitiveMemberships(
      paramsOrCallback?:
        | Params$Resource$Groups$Memberships$Searchtransitivememberships
        | BodyResponseCallback<Schema$SearchTransitiveMembershipsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SearchTransitiveMembershipsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SearchTransitiveMembershipsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SearchTransitiveMembershipsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Groups$Memberships$Searchtransitivememberships;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Groups$Memberships$Searchtransitivememberships;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+parent}/memberships:searchTransitiveMemberships'
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
        createAPIRequest<Schema$SearchTransitiveMembershipsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SearchTransitiveMembershipsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Groups$Memberships$Checktransitivemembership
    extends StandardParameters {
    /**
     * [Resource name](https://cloud.google.com/apis/design/resource_names) of the group to check the transitive membership in. Format: `groups/{group\}`, where `group` is the unique id assigned to the Group to which the Membership belongs to.
     */
    parent?: string;
    /**
     * Required. A CEL expression that MUST include member specification. This is a `required` field. Certain groups are uniquely identified by both a 'member_key_id' and a 'member_key_namespace', which requires an additional query input: 'member_key_namespace'. Example query: `member_key_id == 'member_key_id_value'`
     */
    query?: string;
  }
  export interface Params$Resource$Groups$Memberships$Create
    extends StandardParameters {
    /**
     * Required. The parent `Group` resource under which to create the `Membership`. Must be of the form `groups/{group\}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Membership;
  }
  export interface Params$Resource$Groups$Memberships$Delete
    extends StandardParameters {
    /**
     * Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Membership` to delete. Must be of the form `groups/{group\}/memberships/{membership\}`
     */
    name?: string;
  }
  export interface Params$Resource$Groups$Memberships$Get
    extends StandardParameters {
    /**
     * Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Membership` to retrieve. Must be of the form `groups/{group\}/memberships/{membership\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Groups$Memberships$Getmembershipgraph
    extends StandardParameters {
    /**
     * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the group to search transitive memberships in. Format: `groups/{group\}`, where `group` is the unique ID assigned to the Group to which the Membership belongs to. group can be a wildcard collection id "-". When a group is specified, the membership graph will be constrained to paths between the member (defined in the query) and the parent. If a wildcard collection is provided, all membership paths connected to the member will be returned.
     */
    parent?: string;
    /**
     * Required. A CEL expression that MUST include member specification AND label(s). Certain groups are uniquely identified by both a 'member_key_id' and a 'member_key_namespace', which requires an additional query input: 'member_key_namespace'. Example query: `member_key_id == 'member_key_id_value' && in labels`
     */
    query?: string;
  }
  export interface Params$Resource$Groups$Memberships$List
    extends StandardParameters {
    /**
     * The maximum number of results to return. Note that the number of results returned may be less than this value even if there are more available results. To fetch all results, clients must continue calling this method repeatedly until the response no longer contains a `next_page_token`. If unspecified, defaults to 200 for `GroupView.BASIC` and to 50 for `GroupView.FULL`. Must not be greater than 1000 for `GroupView.BASIC` or 500 for `GroupView.FULL`.
     */
    pageSize?: number;
    /**
     * The `next_page_token` value returned from a previous search request, if any.
     */
    pageToken?: string;
    /**
     * Required. The parent `Group` resource under which to lookup the `Membership` name. Must be of the form `groups/{group\}`.
     */
    parent?: string;
    /**
     * The level of detail to be returned. If unspecified, defaults to `View.BASIC`.
     */
    view?: string;
  }
  export interface Params$Resource$Groups$Memberships$Lookup
    extends StandardParameters {
    /**
     * The ID of the entity. For Google-managed entities, the `id` should be the email address of an existing group or user. For external-identity-mapped entities, the `id` must be a string conforming to the Identity Source's requirements. Must be unique within a `namespace`.
     */
    'memberKey.id'?: string;
    /**
     * The namespace in which the entity exists. If not specified, the `EntityKey` represents a Google-managed entity such as a Google user or a Google Group. If specified, the `EntityKey` represents an external-identity-mapped group. The namespace must correspond to an identity source created in Admin Console and must be in the form of `identitysources/{identity_source\}`.
     */
    'memberKey.namespace'?: string;
    /**
     * Required. The parent `Group` resource under which to lookup the `Membership` name. Must be of the form `groups/{group\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Groups$Memberships$Modifymembershiproles
    extends StandardParameters {
    /**
     * Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Membership` whose roles are to be modified. Must be of the form `groups/{group\}/memberships/{membership\}`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ModifyMembershipRolesRequest;
  }
  export interface Params$Resource$Groups$Memberships$Searchtransitivegroups
    extends StandardParameters {
    /**
     * The default page size is 200 (max 1000).
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous list request, if any.
     */
    pageToken?: string;
    /**
     * [Resource name](https://cloud.google.com/apis/design/resource_names) of the group to search transitive memberships in. Format: `groups/{group\}`, where `group` is always '-' as this API will search across all groups for a given member.
     */
    parent?: string;
    /**
     * Required. A CEL expression that MUST include member specification AND label(s). This is a `required` field. Users can search on label attributes of groups. CONTAINS match ('in') is supported on labels. Identity-mapped groups are uniquely identified by both a `member_key_id` and a `member_key_namespace`, which requires an additional query input: `member_key_namespace`. Example query: `member_key_id == 'member_key_id_value' && in labels`
     */
    query?: string;
  }
  export interface Params$Resource$Groups$Memberships$Searchtransitivememberships
    extends StandardParameters {
    /**
     * The default page size is 200 (max 1000).
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous list request, if any.
     */
    pageToken?: string;
    /**
     * [Resource name](https://cloud.google.com/apis/design/resource_names) of the group to search transitive memberships in. Format: `groups/{group\}`, where `group` is the unique ID assigned to the Group.
     */
    parent?: string;
  }
}
