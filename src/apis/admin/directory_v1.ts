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

export namespace admin_directory_v1 {
  export interface Options extends GlobalOptions {
    version: 'directory_v1';
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
   * Admin SDK API
   *
   * Admin SDK lets administrators of enterprise domains to view and manage resources like user, groups etc. It also provides audit and usage reports of domain.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const admin = google.admin('directory_v1');
   * ```
   */
  export class Admin {
    context: APIRequestContext;
    asps: Resource$Asps;
    channels: Resource$Channels;
    chromeosdevices: Resource$Chromeosdevices;
    customer: Resource$Customer;
    customers: Resource$Customers;
    domainAliases: Resource$Domainaliases;
    domains: Resource$Domains;
    groups: Resource$Groups;
    members: Resource$Members;
    mobiledevices: Resource$Mobiledevices;
    orgunits: Resource$Orgunits;
    privileges: Resource$Privileges;
    resources: Resource$Resources;
    roleAssignments: Resource$Roleassignments;
    roles: Resource$Roles;
    schemas: Resource$Schemas;
    tokens: Resource$Tokens;
    twoStepVerification: Resource$Twostepverification;
    users: Resource$Users;
    verificationCodes: Resource$Verificationcodes;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.asps = new Resource$Asps(this.context);
      this.channels = new Resource$Channels(this.context);
      this.chromeosdevices = new Resource$Chromeosdevices(this.context);
      this.customer = new Resource$Customer(this.context);
      this.customers = new Resource$Customers(this.context);
      this.domainAliases = new Resource$Domainaliases(this.context);
      this.domains = new Resource$Domains(this.context);
      this.groups = new Resource$Groups(this.context);
      this.members = new Resource$Members(this.context);
      this.mobiledevices = new Resource$Mobiledevices(this.context);
      this.orgunits = new Resource$Orgunits(this.context);
      this.privileges = new Resource$Privileges(this.context);
      this.resources = new Resource$Resources(this.context);
      this.roleAssignments = new Resource$Roleassignments(this.context);
      this.roles = new Resource$Roles(this.context);
      this.schemas = new Resource$Schemas(this.context);
      this.tokens = new Resource$Tokens(this.context);
      this.twoStepVerification = new Resource$Twostepverification(this.context);
      this.users = new Resource$Users(this.context);
      this.verificationCodes = new Resource$Verificationcodes(this.context);
    }
  }

  /**
   * JSON template for Alias object in Directory API.
   */
  export interface Schema$Alias {
    alias?: string | null;
    etag?: string | null;
    id?: string | null;
    kind?: string | null;
    primaryEmail?: string | null;
  }
  /**
   * JSON response template to list aliases in Directory API.
   */
  export interface Schema$Aliases {
    aliases?: any[] | null;
    etag?: string | null;
    kind?: string | null;
  }
  /**
   * An application-specific password (ASP) is used with applications that do not accept a verification code when logging into the application on certain devices. The ASP access code is used instead of the login and password you commonly use when accessing an application through a browser. For more information about ASPs and how to create one, see the [help center](https://support.google.com/a/answer/2537800#asp).
   */
  export interface Schema$Asp {
    /**
     * The unique ID of the ASP.
     */
    codeId?: number | null;
    /**
     * The time when the ASP was created. Expressed in [Unix time](https://en.wikipedia.org/wiki/Epoch_time) format.
     */
    creationTime?: string | null;
    /**
     * ETag of the ASP.
     */
    etag?: string | null;
    /**
     * The type of the API resource. This is always `admin#directory#asp`.
     */
    kind?: string | null;
    /**
     * The time when the ASP was last used. Expressed in [Unix time](https://en.wikipedia.org/wiki/Epoch_time) format.
     */
    lastTimeUsed?: string | null;
    /**
     * The name of the application that the user, represented by their `userId`, entered when the ASP was created.
     */
    name?: string | null;
    /**
     * The unique ID of the user who issued the ASP.
     */
    userKey?: string | null;
  }
  export interface Schema$Asps {
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * A list of ASP resources.
     */
    items?: Schema$Asp[];
    /**
     * The type of the API resource. This is always `admin#directory#aspList`.
     */
    kind?: string | null;
  }
  /**
   * Auxiliary message about issues with printers or settings. Example: {message_type:AUXILIARY_MESSAGE_WARNING, field_mask:make_and_model, message:"Given printer is invalid or no longer supported."\}
   */
  export interface Schema$AuxiliaryMessage {
    /**
     * Human readable message in English. Example: "Given printer is invalid or no longer supported."
     */
    auxiliaryMessage?: string | null;
    /**
     * Field that this message concerns.
     */
    fieldMask?: string | null;
    /**
     * Message severity
     */
    severity?: string | null;
  }
  /**
   * Request for adding new printers in batch.
   */
  export interface Schema$BatchCreatePrintersRequest {
    /**
     * A list of Printers to be created. Max 50 at a time.
     */
    requests?: Schema$CreatePrinterRequest[];
  }
  /**
   * Response for adding new printers in batch.
   */
  export interface Schema$BatchCreatePrintersResponse {
    /**
     * A list of create failures. Printer IDs are not populated, as printer were not created.
     */
    failures?: Schema$FailureInfo[];
    /**
     * A list of successfully created printers with their IDs populated.
     */
    printers?: Schema$Printer[];
  }
  /**
   * Request to add multiple new print servers in a batch.
   */
  export interface Schema$BatchCreatePrintServersRequest {
    /**
     * Required. A list of `PrintServer` resources to be created (max `50` per batch).
     */
    requests?: Schema$CreatePrintServerRequest[];
  }
  export interface Schema$BatchCreatePrintServersResponse {
    /**
     * A list of create failures. `PrintServer` IDs are not populated, as print servers were not created.
     */
    failures?: Schema$PrintServerFailureInfo[];
    /**
     * A list of successfully created print servers with their IDs populated.
     */
    printServers?: Schema$PrintServer[];
  }
  /**
   * Request for deleting existing printers in batch.
   */
  export interface Schema$BatchDeletePrintersRequest {
    /**
     * A list of Printer.id that should be deleted. Max 100 at a time.
     */
    printerIds?: string[] | null;
  }
  /**
   * Response for deleting existing printers in batch.
   */
  export interface Schema$BatchDeletePrintersResponse {
    /**
     * A list of update failures.
     */
    failedPrinters?: Schema$FailureInfo[];
    /**
     * A list of Printer.id that were successfully deleted.
     */
    printerIds?: string[] | null;
  }
  /**
   * Request to delete multiple existing print servers in a batch.
   */
  export interface Schema$BatchDeletePrintServersRequest {
    /**
     * A list of print server IDs that should be deleted (max `100` per batch).
     */
    printServerIds?: string[] | null;
  }
  export interface Schema$BatchDeletePrintServersResponse {
    /**
     * A list of update failures.
     */
    failedPrintServers?: Schema$PrintServerFailureInfo[];
    /**
     * A list of print server IDs that were successfully deleted.
     */
    printServerIds?: string[] | null;
  }
  /**
   * Public API: Resources.buildings
   */
  export interface Schema$Building {
    /**
     * The postal address of the building. See [`PostalAddress`](/my-business/reference/rest/v4/PostalAddress) for details. Note that only a single address line and region code are required.
     */
    address?: Schema$BuildingAddress;
    /**
     * Unique identifier for the building. The maximum length is 100 characters.
     */
    buildingId?: string | null;
    /**
     * The building name as seen by users in Calendar. Must be unique for the customer. For example, "NYC-CHEL". The maximum length is 100 characters.
     */
    buildingName?: string | null;
    /**
     * The geographic coordinates of the center of the building, expressed as latitude and longitude in decimal degrees.
     */
    coordinates?: Schema$BuildingCoordinates;
    /**
     * A brief description of the building. For example, "Chelsea Market".
     */
    description?: string | null;
    /**
     * ETag of the resource.
     */
    etags?: string | null;
    /**
     * The display names for all floors in this building. The floors are expected to be sorted in ascending order, from lowest floor to highest floor. For example, ["B2", "B1", "L", "1", "2", "2M", "3", "PH"] Must contain at least one entry.
     */
    floorNames?: string[] | null;
    /**
     * Kind of resource this is.
     */
    kind?: string | null;
  }
  /**
   * Public API: Resources.buildings
   */
  export interface Schema$BuildingAddress {
    /**
     * Unstructured address lines describing the lower levels of an address.
     */
    addressLines?: string[] | null;
    /**
     * Optional. Highest administrative subdivision which is used for postal addresses of a country or region.
     */
    administrativeArea?: string | null;
    /**
     * Optional. BCP-47 language code of the contents of this address (if known).
     */
    languageCode?: string | null;
    /**
     * Optional. Generally refers to the city/town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave locality empty and use addressLines.
     */
    locality?: string | null;
    /**
     * Optional. Postal code of the address.
     */
    postalCode?: string | null;
    /**
     * Required. CLDR region code of the country/region of the address.
     */
    regionCode?: string | null;
    /**
     * Optional. Sublocality of the address.
     */
    sublocality?: string | null;
  }
  /**
   * Public API: Resources.buildings
   */
  export interface Schema$BuildingCoordinates {
    /**
     * Latitude in decimal degrees.
     */
    latitude?: number | null;
    /**
     * Longitude in decimal degrees.
     */
    longitude?: number | null;
  }
  /**
   * Public API: Resources.buildings
   */
  export interface Schema$Buildings {
    /**
     * The Buildings in this page of results.
     */
    buildings?: Schema$Building[];
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * Kind of resource this is.
     */
    kind?: string | null;
    /**
     * The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Public API: Resources.calendars
   */
  export interface Schema$CalendarResource {
    /**
     * Unique ID for the building a resource is located in.
     */
    buildingId?: string | null;
    /**
     * Capacity of a resource, number of seats in a room.
     */
    capacity?: number | null;
    /**
     * ETag of the resource.
     */
    etags?: string | null;
    /**
     * Instances of features for the calendar resource.
     */
    featureInstances?: any | null;
    /**
     * Name of the floor a resource is located on.
     */
    floorName?: string | null;
    /**
     * Name of the section within a floor a resource is located in.
     */
    floorSection?: string | null;
    /**
     * The read-only auto-generated name of the calendar resource which includes metadata about the resource such as building name, floor, capacity, etc. For example, "NYC-2-Training Room 1A (16)".
     */
    generatedResourceName?: string | null;
    /**
     * The type of the resource. For calendar resources, the value is `admin#directory#resources#calendars#CalendarResource`.
     */
    kind?: string | null;
    /**
     * The category of the calendar resource. Either CONFERENCE_ROOM or OTHER. Legacy data is set to CATEGORY_UNKNOWN.
     */
    resourceCategory?: string | null;
    /**
     * Description of the resource, visible only to admins.
     */
    resourceDescription?: string | null;
    /**
     * The read-only email for the calendar resource. Generated as part of creating a new calendar resource.
     */
    resourceEmail?: string | null;
    /**
     * The unique ID for the calendar resource.
     */
    resourceId?: string | null;
    /**
     * The name of the calendar resource. For example, "Training Room 1A".
     */
    resourceName?: string | null;
    /**
     * The type of the calendar resource, intended for non-room resources.
     */
    resourceType?: string | null;
    /**
     * Description of the resource, visible to users and admins.
     */
    userVisibleDescription?: string | null;
  }
  /**
   * Public API: Resources.calendars
   */
  export interface Schema$CalendarResources {
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * The CalendarResources in this page of results.
     */
    items?: Schema$CalendarResource[];
    /**
     * Identifies this as a collection of CalendarResources. This is always `admin#directory#resources#calendars#calendarResourcesList`.
     */
    kind?: string | null;
    /**
     * The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * An notification channel used to watch for resource changes.
   */
  export interface Schema$Channel {
    /**
     * The address where notifications are delivered for this channel.
     */
    address?: string | null;
    /**
     * Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.
     */
    expiration?: string | null;
    /**
     * A UUID or similar unique string that identifies this channel.
     */
    id?: string | null;
    /**
     * Identifies this as a notification channel used to watch for changes to a resource, which is `api#channel`.
     */
    kind?: string | null;
    /**
     * Additional parameters controlling delivery channel behavior. Optional. For example, `params.ttl` specifies the time-to-live in seconds for the notification channel, where the default is 2 hours and the maximum TTL is 2 days.
     */
    params?: {[key: string]: string} | null;
    /**
     * A Boolean value to indicate whether payload is wanted. Optional.
     */
    payload?: boolean | null;
    /**
     * An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.
     */
    resourceId?: string | null;
    /**
     * A version-specific identifier for the watched resource.
     */
    resourceUri?: string | null;
    /**
     * An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.
     */
    token?: string | null;
    /**
     * The type of delivery mechanism used for this channel.
     */
    type?: string | null;
  }
  /**
   * Google Chrome devices run on the [Chrome OS](https://support.google.com/chromeos). For more information about common API tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-chrome-devices).
   */
  export interface Schema$ChromeOsDevice {
    /**
     * A list of active time ranges (Read-only).
     */
    activeTimeRanges?: Array<{activeTime?: number; date?: string}> | null;
    /**
     * The asset identifier as noted by an administrator or specified during enrollment.
     */
    annotatedAssetId?: string | null;
    /**
     * The address or location of the device as noted by the administrator. Maximum length is `200` characters. Empty values are allowed.
     */
    annotatedLocation?: string | null;
    /**
     * The user of the device as noted by the administrator. Maximum length is 100 characters. Empty values are allowed.
     */
    annotatedUser?: string | null;
    /**
     * (Read-only) The timestamp after which the device will stop receiving Chrome updates or support
     */
    autoUpdateExpiration?: string | null;
    /**
     * The boot mode for the device. The possible values are: * `Verified`: The device is running a valid version of the Chrome OS. * `Dev`: The devices's developer hardware switch is enabled. When booted, the device has a command line shell. For an example of a developer switch, see the [Chromebook developer information](https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/samsung-series-5-chromebook#TOC-Developer-switch).
     */
    bootMode?: string | null;
    /**
     * Information regarding CPU specs in the device.
     */
    cpuInfo?: Array<{
      architecture?: string;
      logicalCpus?: Array<{
        cStates?: Array<{displayName?: string; sessionDuration?: string}>;
        currentScalingFrequencyKhz?: number;
        idleDuration?: string;
        maxScalingFrequencyKhz?: number;
      }>;
      maxClockSpeedKhz?: number;
      model?: string;
    }> | null;
    /**
     * Reports of CPU utilization and temperature (Read-only)
     */
    cpuStatusReports?: Array<{
      cpuTemperatureInfo?: Array<{label?: string; temperature?: number}>;
      cpuUtilizationPercentageInfo?: number[];
      reportTime?: string;
    }> | null;
    /**
     * (Read-only) Deprovision reason.
     */
    deprovisionReason?: string | null;
    /**
     * A list of device files to download (Read-only)
     */
    deviceFiles?: Array<{
      createTime?: string;
      downloadUrl?: string;
      name?: string;
      type?: string;
    }> | null;
    /**
     * The unique ID of the Chrome device.
     */
    deviceId?: string | null;
    /**
     * Output only. Device license type.
     */
    deviceLicenseType?: string | null;
    /**
     * Reports of disk space and other info about mounted/connected volumes.
     */
    diskVolumeReports?: Array<{
      volumeInfo?: Array<{
        storageFree?: string;
        storageTotal?: string;
        volumeId?: string;
      }>;
    }> | null;
    /**
     * (Read-only) Built-in MAC address for the docking station that the device connected to. Factory sets Media access control address (MAC address) assigned for use by a dock. It is reserved specifically for MAC pass through device policy. The format is twelve (12) hexadecimal digits without any delimiter (uppercase letters). This is only relevant for some devices.
     */
    dockMacAddress?: string | null;
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * The device's MAC address on the ethernet network interface.
     */
    ethernetMacAddress?: string | null;
    /**
     * (Read-only) MAC address used by the Chromebook’s internal ethernet port, and for onboard network (ethernet) interface. The format is twelve (12) hexadecimal digits without any delimiter (uppercase letters). This is only relevant for some devices.
     */
    ethernetMacAddress0?: string | null;
    /**
     * The Chrome device's firmware version.
     */
    firmwareVersion?: string | null;
    /**
     * Date and time for the first time the device was enrolled.
     */
    firstEnrollmentTime?: string | null;
    /**
     * The type of resource. For the Chromeosdevices resource, the value is `admin#directory#chromeosdevice`.
     */
    kind?: string | null;
    /**
     * (Read-only) Date and time for the last deprovision of the device.
     */
    lastDeprovisionTimestamp?: string | null;
    /**
     * Date and time the device was last enrolled (Read-only)
     */
    lastEnrollmentTime?: string | null;
    /**
     * Contains last known network (Read-only)
     */
    lastKnownNetwork?: Array<{
      ipAddress?: string;
      wanIpAddress?: string;
    }> | null;
    /**
     * Date and time the device was last synchronized with the policy settings in the G Suite administrator control panel (Read-only)
     */
    lastSync?: string | null;
    /**
     * The device's wireless MAC address. If the device does not have this information, it is not included in the response.
     */
    macAddress?: string | null;
    /**
     * (Read-only) The date the device was manufactured in yyyy-mm-dd format.
     */
    manufactureDate?: string | null;
    /**
     * The Mobile Equipment Identifier (MEID) or the International Mobile Equipment Identity (IMEI) for the 3G mobile card in a mobile device. A MEID/IMEI is typically used when adding a device to a wireless carrier's post-pay service plan. If the device does not have this information, this property is not included in the response. For more information on how to export a MEID/IMEI list, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-chrome-devices.html#export_meid).
     */
    meid?: string | null;
    /**
     * The device's model information. If the device does not have this information, this property is not included in the response.
     */
    model?: string | null;
    /**
     * Notes about this device added by the administrator. This property can be [searched](https://support.google.com/chrome/a/answer/1698333) with the [list](/admin-sdk/directory/v1/reference/chromeosdevices/list) method's `query` parameter. Maximum length is 500 characters. Empty values are allowed.
     */
    notes?: string | null;
    /**
     * The device's order number. Only devices directly purchased from Google have an order number.
     */
    orderNumber?: string | null;
    /**
     * The unique ID of the organizational unit. orgUnitPath is the human readable version of orgUnitId. While orgUnitPath may change by renaming an organizational unit within the path, orgUnitId is unchangeable for one organizational unit. This property can be [updated](/admin-sdk/directory/v1/guides/manage-chrome-devices#move_chrome_devices_to_ou) using the API. For more information about how to create an organizational structure for your device, see the [administration help center](https://support.google.com/a/answer/182433).
     */
    orgUnitId?: string | null;
    /**
     * The full parent path with the organizational unit's name associated with the device. Path names are case insensitive. If the parent organizational unit is the top-level organization, it is represented as a forward slash, `/`. This property can be [updated](/admin-sdk/directory/v1/guides/manage-chrome-devices#move_chrome_devices_to_ou) using the API. For more information about how to create an organizational structure for your device, see the [administration help center](https://support.google.com/a/answer/182433).
     */
    orgUnitPath?: string | null;
    /**
     * The status of the OS updates for the device.
     */
    osUpdateStatus?: Schema$OsUpdateStatus;
    /**
     * The Chrome device's operating system version.
     */
    osVersion?: string | null;
    /**
     * The Chrome device's platform version.
     */
    platformVersion?: string | null;
    /**
     * A list of recent device users, in descending order, by last login time.
     */
    recentUsers?: Array<{email?: string; type?: string}> | null;
    /**
     * A list of screenshot files to download. Type is always "SCREENSHOT_FILE". (Read-only)
     */
    screenshotFiles?: Array<{
      createTime?: string;
      downloadUrl?: string;
      name?: string;
      type?: string;
    }> | null;
    /**
     * The Chrome device serial number entered when the device was enabled. This value is the same as the Admin console's *Serial Number* in the *Chrome OS Devices* tab.
     */
    serialNumber?: string | null;
    /**
     * The status of the device.
     */
    status?: string | null;
    /**
     * Final date the device will be supported (Read-only)
     */
    supportEndDate?: string | null;
    /**
     * Reports of amounts of available RAM memory (Read-only)
     */
    systemRamFreeReports?: Array<{
      reportTime?: string;
      systemRamFreeInfo?: string[];
    }> | null;
    /**
     * Total RAM on the device [in bytes] (Read-only)
     */
    systemRamTotal?: string | null;
    /**
     * Trusted Platform Module (TPM) (Read-only)
     */
    tpmVersionInfo?: {
      family?: string;
      firmwareVersion?: string;
      manufacturer?: string;
      specLevel?: string;
      tpmModel?: string;
      vendorSpecific?: string;
    } | null;
    /**
     * Determines if the device will auto renew its support after the support end date. This is a read-only property.
     */
    willAutoRenew?: boolean | null;
  }
  /**
   * Data about an update to the status of a Chrome OS device.
   */
  export interface Schema$ChromeOsDeviceAction {
    /**
     * Action to be taken on the Chrome OS device.
     */
    action?: string | null;
    /**
     * Only used when the action is `deprovision`. With the `deprovision` action, this field is required. *Note*: The deprovision reason is audited because it might have implications on licenses for perpetual subscription customers.
     */
    deprovisionReason?: string | null;
  }
  export interface Schema$ChromeOsDevices {
    /**
     * A list of Chrome OS Device objects.
     */
    chromeosdevices?: Schema$ChromeOsDevice[];
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * Kind of resource this is.
     */
    kind?: string | null;
    /**
     * Token used to access the next page of this result. To access the next page, use this token's value in the `pageToken` query string of this request.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$ChromeOsMoveDevicesToOu {
    /**
     * Chrome OS devices to be moved to OU
     */
    deviceIds?: string[] | null;
  }
  /**
   * Request for adding a new printer.
   */
  export interface Schema$CreatePrinterRequest {
    /**
     * Required. The name of the customer. Format: customers/{customer_id\}
     */
    parent?: string | null;
    /**
     * Required. A printer to create. If you want to place the printer under particular OU then populate printer.org_unit_id filed. Otherwise the printer will be placed under root OU.
     */
    printer?: Schema$Printer;
  }
  /**
   * Request for adding a new print server.
   */
  export interface Schema$CreatePrintServerRequest {
    /**
     * Required. The [unique ID](https://developers.google.com/admin-sdk/directory/reference/rest/v1/customers) of the customer's Google Workspace account. Format: `customers/{id\}`
     */
    parent?: string | null;
    /**
     * Required. A print server to create. If you want to place the print server under a specific organizational unit (OU), then populate the `org_unit_id`. Otherwise the print server is created under the root OU. The `org_unit_id` can be retrieved using the [Directory API](https://developers.google.com/admin-sdk/directory/v1/guides/manage-org-units).
     */
    printServer?: Schema$PrintServer;
  }
  export interface Schema$Customer {
    /**
     * The customer's secondary contact email address. This email address cannot be on the same domain as the `customerDomain`
     */
    alternateEmail?: string | null;
    /**
     * The customer's creation time (Readonly)
     */
    customerCreationTime?: string | null;
    /**
     * The customer's primary domain name string. Do not include the `www` prefix when creating a new customer.
     */
    customerDomain?: string | null;
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * The unique ID for the customer's Google Workspace account. (Readonly)
     */
    id?: string | null;
    /**
     * Identifies the resource as a customer. Value: `admin#directory#customer`
     */
    kind?: string | null;
    /**
     * The customer's ISO 639-2 language code. See the [Language Codes](/admin-sdk/directory/v1/languages) page for the list of supported codes. Valid language codes outside the supported set will be accepted by the API but may lead to unexpected behavior. The default value is `en`.
     */
    language?: string | null;
    /**
     * The customer's contact phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format.
     */
    phoneNumber?: string | null;
    /**
     * The customer's postal address information.
     */
    postalAddress?: Schema$CustomerPostalAddress;
  }
  export interface Schema$CustomerPostalAddress {
    /**
     * A customer's physical address. The address can be composed of one to three lines.
     */
    addressLine1?: string | null;
    /**
     * Address line 2 of the address.
     */
    addressLine2?: string | null;
    /**
     * Address line 3 of the address.
     */
    addressLine3?: string | null;
    /**
     * The customer contact's name.
     */
    contactName?: string | null;
    /**
     * This is a required property. For `countryCode` information see the [ISO 3166 country code elements](https://www.iso.org/iso/country_codes.htm).
     */
    countryCode?: string | null;
    /**
     * Name of the locality. An example of a locality value is the city of `San Francisco`.
     */
    locality?: string | null;
    /**
     * The company or company division name.
     */
    organizationName?: string | null;
    /**
     * The postal code. A postalCode example is a postal zip code such as `10009`. This is in accordance with - http: //portablecontacts.net/draft-spec.html#address_element.
     */
    postalCode?: string | null;
    /**
     * Name of the region. An example of a region value is `NY` for the state of New York.
     */
    region?: string | null;
  }
  /**
   * Information regarding a command that was issued to a device.
   */
  export interface Schema$DirectoryChromeosdevicesCommand {
    /**
     * The time at which the command will expire. If the device doesn't execute the command within this time the command will become expired.
     */
    commandExpireTime?: string | null;
    /**
     * Unique ID of a device command.
     */
    commandId?: string | null;
    /**
     * The result of the command execution.
     */
    commandResult?: Schema$DirectoryChromeosdevicesCommandResult;
    /**
     * The timestamp when the command was issued by the admin.
     */
    issueTime?: string | null;
    /**
     * The payload that the command specified, if any.
     */
    payload?: string | null;
    /**
     * Indicates the command state.
     */
    state?: string | null;
    /**
     * The type of the command.
     */
    type?: string | null;
  }
  /**
   * The result of executing a command.
   */
  export interface Schema$DirectoryChromeosdevicesCommandResult {
    /**
     * The payload for the command result. The following commands respond with a payload: * `DEVICE_START_CRD_SESSION`: Payload is a stringified JSON object in the form: { "url": url \}. The URL provides a link to the Chrome Remote Desktop session.
     */
    commandResultPayload?: string | null;
    /**
     * The error message with a short explanation as to why the command failed. Only present if the command failed.
     */
    errorMessage?: string | null;
    /**
     * The time at which the command was executed or failed to execute.
     */
    executeTime?: string | null;
    /**
     * The result of the command.
     */
    result?: string | null;
  }
  /**
   * A request for issuing a command.
   */
  export interface Schema$DirectoryChromeosdevicesIssueCommandRequest {
    /**
     * The type of command.
     */
    commandType?: string | null;
    /**
     * The payload for the command, provide it only if command supports it. The following commands support adding payload: * `SET_VOLUME`: Payload is a stringified JSON object in the form: { "volume": 50 \}. The volume has to be an integer in the range [0,100]. * `DEVICE_START_CRD_SESSION`: Payload is optionally a stringified JSON object in the form: { "ackedUserPresence": true \}. `ackedUserPresence` is a boolean. By default, `ackedUserPresence` is set to `false`. To start a Chrome Remote Desktop session for an active device, set `ackedUserPresence` to `true`.
     */
    payload?: string | null;
  }
  /**
   * A response for issuing a command.
   */
  export interface Schema$DirectoryChromeosdevicesIssueCommandResponse {
    /**
     * The unique ID of the issued command, used to retrieve the command status.
     */
    commandId?: string | null;
  }
  export interface Schema$DomainAlias {
    /**
     * The creation time of the domain alias. (Read-only).
     */
    creationTime?: string | null;
    /**
     * The domain alias name.
     */
    domainAliasName?: string | null;
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * Kind of resource this is.
     */
    kind?: string | null;
    /**
     * The parent domain name that the domain alias is associated with. This can either be a primary or secondary domain name within a customer.
     */
    parentDomainName?: string | null;
    /**
     * Indicates the verification state of a domain alias. (Read-only)
     */
    verified?: boolean | null;
  }
  export interface Schema$DomainAliases {
    /**
     * A list of domain alias objects.
     */
    domainAliases?: Schema$DomainAlias[];
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * Kind of resource this is.
     */
    kind?: string | null;
  }
  export interface Schema$Domains {
    /**
     * Creation time of the domain. Expressed in [Unix time](https://en.wikipedia.org/wiki/Epoch_time) format. (Read-only).
     */
    creationTime?: string | null;
    /**
     * A list of domain alias objects. (Read-only)
     */
    domainAliases?: Schema$DomainAlias[];
    /**
     * The domain name of the customer.
     */
    domainName?: string | null;
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * Indicates if the domain is a primary domain (Read-only).
     */
    isPrimary?: boolean | null;
    /**
     * Kind of resource this is.
     */
    kind?: string | null;
    /**
     * Indicates the verification state of a domain. (Read-only).
     */
    verified?: boolean | null;
  }
  export interface Schema$Domains2 {
    /**
     * A list of domain objects.
     */
    domains?: Schema$Domains[];
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * Kind of resource this is.
     */
    kind?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Info about failures
   */
  export interface Schema$FailureInfo {
    /**
     * Canonical code for why the update failed to apply.
     */
    errorCode?: string | null;
    /**
     * Failure reason message.
     */
    errorMessage?: string | null;
    /**
     * Failed printer.
     */
    printer?: Schema$Printer;
    /**
     * Id of a failed printer.
     */
    printerId?: string | null;
  }
  /**
   * JSON template for Feature object in Directory API.
   */
  export interface Schema$Feature {
    /**
     * ETag of the resource.
     */
    etags?: string | null;
    /**
     * Kind of resource this is.
     */
    kind?: string | null;
    /**
     * The name of the feature.
     */
    name?: string | null;
  }
  /**
   * JSON template for a feature instance.
   */
  export interface Schema$FeatureInstance {
    /**
     * The feature that this is an instance of. A calendar resource may have multiple instances of a feature.
     */
    feature?: Schema$Feature;
  }
  export interface Schema$FeatureRename {
    /**
     * New name of the feature.
     */
    newName?: string | null;
  }
  /**
   * Public API: Resources.features
   */
  export interface Schema$Features {
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * The Features in this page of results.
     */
    features?: Schema$Feature[];
    /**
     * Kind of resource this is.
     */
    kind?: string | null;
    /**
     * The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Google Groups provide your users the ability to send messages to groups of people using the group's email address. For more information about common tasks, see the [Developer's Guide](https://developers.google.com/admin-sdk/directory/v1/guides/manage-groups). For information about other types of groups, see the [Cloud Identity Groups API documentation](https://cloud.google.com/identity/docs/groups). Note: The user calling the API (or being impersonated by a service account) must have an assigned [role](https://developers.google.com/admin-sdk/directory/v1/guides/manage-roles) that includes Admin API Groups permissions, such as Super Admin or Groups Admin.
   */
  export interface Schema$Group {
    /**
     * Read-only. Value is `true` if this group was created by an administrator rather than a user.
     */
    adminCreated?: boolean | null;
    /**
     * Read-only. The list of a group's alias email addresses. To add, update, or remove a group's aliases, use the `groups.aliases` methods. If edited in a group's POST or PUT request, the edit is ignored.
     */
    aliases?: string[] | null;
    /**
     * An extended description to help users determine the purpose of a group. For example, you can include information about who should join the group, the types of messages to send to the group, links to FAQs about the group, or related groups. Maximum length is `4,096` characters.
     */
    description?: string | null;
    /**
     * The number of users that are direct members of the group. If a group is a member (child) of this group (the parent), members of the child group are not counted in the `directMembersCount` property of the parent group.
     */
    directMembersCount?: string | null;
    /**
     * The group's email address. If your account has multiple domains, select the appropriate domain for the email address. The `email` must be unique. This property is required when creating a group. Group email addresses are subject to the same character usage rules as usernames, see the [help center](https://support.google.com/a/answer/9193374) for details.
     */
    email?: string | null;
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * Read-only. The unique ID of a group. A group `id` can be used as a group request URI's `groupKey`.
     */
    id?: string | null;
    /**
     * The type of the API resource. For Groups resources, the value is `admin#directory#group`.
     */
    kind?: string | null;
    /**
     * The group's display name.
     */
    name?: string | null;
    /**
     * Read-only. The list of the group's non-editable alias email addresses that are outside of the account's primary domain or subdomains. These are functioning email addresses used by the group. This is a read-only property returned in the API's response for a group. If edited in a group's POST or PUT request, the edit is ignored.
     */
    nonEditableAliases?: string[] | null;
  }
  /**
   * The Directory API manages aliases, which are alternative email addresses.
   */
  export interface Schema$GroupAlias {
    /**
     * The alias email address.
     */
    alias?: string | null;
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * The unique ID of the group.
     */
    id?: string | null;
    /**
     * The type of the API resource. For Alias resources, the value is `admin#directory#alias`.
     */
    kind?: string | null;
    /**
     * The primary email address of the group.
     */
    primaryEmail?: string | null;
  }
  export interface Schema$Groups {
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * A list of group objects.
     */
    groups?: Schema$Group[];
    /**
     * Kind of resource this is.
     */
    kind?: string | null;
    /**
     * Token used to access next page of this result.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response for listing allowed printer models.
   */
  export interface Schema$ListPrinterModelsResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Printer models that are currently allowed to be configured for ChromeOs. Some printers may be added or removed over time.
     */
    printerModels?: Schema$PrinterModel[];
  }
  /**
   * Response for listing printers.
   */
  export interface Schema$ListPrintersResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * List of printers. If `org_unit_id` was given in the request, then only printers visible for this OU will be returned. If `org_unit_id` was not given in the request, then all printers will be returned.
     */
    printers?: Schema$Printer[];
  }
  export interface Schema$ListPrintServersResponse {
    /**
     * A token that can be sent as `page_token` in a request to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * List of print servers.
     */
    printServers?: Schema$PrintServer[];
  }
  /**
   * A Google Groups member can be a user or another group. This member can be inside or outside of your account's domains. For more information about common group member tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-group-members).
   */
  export interface Schema$Member {
    /**
     * Defines mail delivery preferences of member. This field is only supported by `insert`, `update`, and `get` methods.
     */
    delivery_settings?: string | null;
    /**
     * The member's email address. A member can be a user or another group. This property is required when adding a member to a group. The `email` must be unique and cannot be an alias of another group. If the email address is changed, the API automatically reflects the email address changes.
     */
    email?: string | null;
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * The unique ID of the group member. A member `id` can be used as a member request URI's `memberKey`.
     */
    id?: string | null;
    /**
     * The type of the API resource. For Members resources, the value is `admin#directory#member`.
     */
    kind?: string | null;
    /**
     * The member's role in a group. The API returns an error for cycles in group memberships. For example, if `group1` is a member of `group2`, `group2` cannot be a member of `group1`. For more information about a member's role, see the [administration help center](https://support.google.com/a/answer/167094).
     */
    role?: string | null;
    /**
     * Status of member (Immutable)
     */
    status?: string | null;
    /**
     * The type of group member.
     */
    type?: string | null;
  }
  export interface Schema$Members {
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * Kind of resource this is.
     */
    kind?: string | null;
    /**
     * A list of member objects.
     */
    members?: Schema$Member[];
    /**
     * Token used to access next page of this result.
     */
    nextPageToken?: string | null;
  }
  /**
   * JSON template for Has Member response in Directory API.
   */
  export interface Schema$MembersHasMember {
    /**
     * Output only. Identifies whether the given user is a member of the group. Membership can be direct or nested.
     */
    isMember?: boolean | null;
  }
  /**
   * Google Workspace Mobile Management includes Android, [Google Sync](https://support.google.com/a/answer/135937), and iOS devices. For more information about common group mobile device API tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-mobile-devices.html).
   */
  export interface Schema$MobileDevice {
    /**
     * Adb (USB debugging) enabled or disabled on device (Read-only)
     */
    adbStatus?: boolean | null;
    /**
     * The list of applications installed on an Android mobile device. It is not applicable to Google Sync and iOS devices. The list includes any Android applications that access Google Workspace data. When updating an applications list, it is important to note that updates replace the existing list. If the Android device has two existing applications and the API updates the list with five applications, the is now the updated list of five applications.
     */
    applications?: Array<{
      displayName?: string;
      packageName?: string;
      permission?: string[];
      versionCode?: number;
      versionName?: string;
    }> | null;
    /**
     * The device's baseband version.
     */
    basebandVersion?: string | null;
    /**
     * Mobile Device Bootloader version (Read-only)
     */
    bootloaderVersion?: string | null;
    /**
     * Mobile Device Brand (Read-only)
     */
    brand?: string | null;
    /**
     * The device's operating system build number.
     */
    buildNumber?: string | null;
    /**
     * The default locale used on the device.
     */
    defaultLanguage?: string | null;
    /**
     * Developer options enabled or disabled on device (Read-only)
     */
    developerOptionsStatus?: boolean | null;
    /**
     * The compromised device status.
     */
    deviceCompromisedStatus?: string | null;
    /**
     * The serial number for a Google Sync mobile device. For Android and iOS devices, this is a software generated unique identifier.
     */
    deviceId?: string | null;
    /**
     * DevicePasswordStatus (Read-only)
     */
    devicePasswordStatus?: string | null;
    /**
     * The list of the owner's email addresses. If your application needs the current list of user emails, use the [get](/admin-sdk/directory/v1/reference/mobiledevices/get.html) method. For additional information, see the [retrieve a user](/admin-sdk/directory/v1/guides/manage-users#get_user) method.
     */
    email?: string[] | null;
    /**
     * Mobile Device Encryption Status (Read-only)
     */
    encryptionStatus?: string | null;
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * Date and time the device was first synchronized with the policy settings in the G Suite administrator control panel (Read-only)
     */
    firstSync?: string | null;
    /**
     * Mobile Device Hardware (Read-only)
     */
    hardware?: string | null;
    /**
     * The IMEI/MEID unique identifier for Android hardware. It is not applicable to Google Sync devices. When adding an Android mobile device, this is an optional property. When updating one of these devices, this is a read-only property.
     */
    hardwareId?: string | null;
    /**
     * The device's IMEI number.
     */
    imei?: string | null;
    /**
     * The device's kernel version.
     */
    kernelVersion?: string | null;
    /**
     * The type of the API resource. For Mobiledevices resources, the value is `admin#directory#mobiledevice`.
     */
    kind?: string | null;
    /**
     * Date and time the device was last synchronized with the policy settings in the G Suite administrator control panel (Read-only)
     */
    lastSync?: string | null;
    /**
     * Boolean indicating if this account is on owner/primary profile or not.
     */
    managedAccountIsOnOwnerProfile?: boolean | null;
    /**
     * Mobile Device manufacturer (Read-only)
     */
    manufacturer?: string | null;
    /**
     * The device's MEID number.
     */
    meid?: string | null;
    /**
     * The mobile device's model name, for example Nexus S. This property can be [updated](/admin-sdk/directory/v1/reference/mobiledevices/update.html). For more information, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-mobile=devices#update_mobile_device).
     */
    model?: string | null;
    /**
     * The list of the owner's user names. If your application needs the current list of device owner names, use the [get](/admin-sdk/directory/v1/reference/mobiledevices/get.html) method. For more information about retrieving mobile device user information, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-users#get_user).
     */
    name?: string[] | null;
    /**
     * Mobile Device mobile or network operator (if available) (Read-only)
     */
    networkOperator?: string | null;
    /**
     * The mobile device's operating system, for example IOS 4.3 or Android 2.3.5. This property can be [updated](/admin-sdk/directory/v1/reference/mobiledevices/update.html). For more information, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-mobile-devices#update_mobile_device).
     */
    os?: string | null;
    /**
     * The list of accounts added on device (Read-only)
     */
    otherAccountsInfo?: string[] | null;
    /**
     * DMAgentPermission (Read-only)
     */
    privilege?: string | null;
    /**
     * Mobile Device release version version (Read-only)
     */
    releaseVersion?: string | null;
    /**
     * The unique ID the API service uses to identify the mobile device.
     */
    resourceId?: string | null;
    /**
     * Mobile Device Security patch level (Read-only)
     */
    securityPatchLevel?: string | null;
    /**
     * The device's serial number.
     */
    serialNumber?: string | null;
    /**
     * The device's status.
     */
    status?: string | null;
    /**
     * Work profile supported on device (Read-only)
     */
    supportsWorkProfile?: boolean | null;
    /**
     * The type of mobile device.
     */
    type?: string | null;
    /**
     * Unknown sources enabled or disabled on device (Read-only)
     */
    unknownSourcesStatus?: boolean | null;
    /**
     * Gives information about the device such as `os` version. This property can be [updated](/admin-sdk/directory/v1/reference/mobiledevices/update.html). For more information, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-mobile-devices#update_mobile_device).
     */
    userAgent?: string | null;
    /**
     * The device's MAC address on Wi-Fi networks.
     */
    wifiMacAddress?: string | null;
  }
  export interface Schema$MobileDeviceAction {
    /**
     * The action to be performed on the device.
     */
    action?: string | null;
  }
  export interface Schema$MobileDevices {
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * Kind of resource this is.
     */
    kind?: string | null;
    /**
     * A list of Mobile Device objects.
     */
    mobiledevices?: Schema$MobileDevice[];
    /**
     * Token used to access next page of this result.
     */
    nextPageToken?: string | null;
  }
  /**
   * Managing your account's organizational units allows you to configure your users' access to services and custom settings. For more information about common organizational unit tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-org-units.html). The customer's organizational unit hierarchy is limited to 35 levels of depth.
   */
  export interface Schema$OrgUnit {
    /**
     * Determines if a sub-organizational unit can inherit the settings of the parent organization. The default value is `false`, meaning a sub-organizational unit inherits the settings of the nearest parent organizational unit. This field is deprecated. Setting it to `true` is no longer supported and can have _unintended consequences_. For more information about inheritance and users in an organization structure, see the [administration help center](https://support.google.com/a/answer/4352075).
     */
    blockInheritance?: boolean | null;
    /**
     * Description of the organizational unit.
     */
    description?: string | null;
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * The type of the API resource. For Orgunits resources, the value is `admin#directory#orgUnit`.
     */
    kind?: string | null;
    /**
     * The organizational unit's path name. For example, an organizational unit's name within the /corp/support/sales_support parent path is sales_support. Required.
     */
    name?: string | null;
    /**
     * The unique ID of the organizational unit.
     */
    orgUnitId?: string | null;
    /**
     * The full path to the organizational unit. The `orgUnitPath` is a derived property. When listed, it is derived from `parentOrgunitPath` and organizational unit's `name`. For example, for an organizational unit named 'apps' under parent organization '/engineering', the orgUnitPath is '/engineering/apps'. In order to edit an `orgUnitPath`, either update the name of the organization or the `parentOrgunitPath`. A user's organizational unit determines which Google Workspace services the user has access to. If the user is moved to a new organization, the user's access changes. For more information about organization structures, see the [administration help center](https://support.google.com/a/answer/4352075). For more information about moving a user to a different organization, see [Update a user](/admin-sdk/directory/v1/guides/manage-users.html#update_user).
     */
    orgUnitPath?: string | null;
    /**
     * The unique ID of the parent organizational unit. Required, unless `parentOrgUnitPath` is set.
     */
    parentOrgUnitId?: string | null;
    /**
     * The organizational unit's parent path. For example, /corp/sales is the parent path for /corp/sales/sales_support organizational unit. Required, unless `parentOrgUnitId` is set.
     */
    parentOrgUnitPath?: string | null;
  }
  export interface Schema$OrgUnits {
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * The type of the API resource. For Org Unit resources, the type is `admin#directory#orgUnits`.
     */
    kind?: string | null;
    /**
     * A list of organizational unit objects.
     */
    organizationUnits?: Schema$OrgUnit[];
  }
  /**
   * Contains information regarding the current OS update status.
   */
  export interface Schema$OsUpdateStatus {
    /**
     * Date and time of the last reboot.
     */
    rebootTime?: string | null;
    /**
     * The update state of an OS update.
     */
    state?: string | null;
    /**
     * New required platform version from the pending updated kiosk app.
     */
    targetKioskAppVersion?: string | null;
    /**
     * New platform version of the OS image being downloaded and applied. It is only set when update status is UPDATE_STATUS_DOWNLOAD_IN_PROGRESS or UPDATE_STATUS_NEED_REBOOT. Note this could be a dummy "0.0.0.0" for UPDATE_STATUS_NEED_REBOOT for some edge cases, e.g. update engine is restarted without a reboot.
     */
    targetOsVersion?: string | null;
    /**
     * Date and time of the last update check.
     */
    updateCheckTime?: string | null;
    /**
     * Date and time of the last successful OS update.
     */
    updateTime?: string | null;
  }
  /**
   * Printer configuration.
   */
  export interface Schema$Printer {
    /**
     * Output only. Auxiliary messages about issues with the printer configuration if any.
     */
    auxiliaryMessages?: Schema$AuxiliaryMessage[];
    /**
     * Output only. Time when printer was created.
     */
    createTime?: string | null;
    /**
     * Editable. Description of printer.
     */
    description?: string | null;
    /**
     * Editable. Name of printer.
     */
    displayName?: string | null;
    /**
     * Id of the printer. (During printer creation leave empty)
     */
    id?: string | null;
    /**
     * Editable. Make and model of printer. e.g. Lexmark MS610de Value must be in format as seen in ListPrinterModels response.
     */
    makeAndModel?: string | null;
    /**
     * The resource name of the Printer object, in the format customers/{customer-id\}/printers/{printer-id\} (During printer creation leave empty)
     */
    name?: string | null;
    /**
     * Organization Unit that owns this printer (Only can be set during Printer creation)
     */
    orgUnitId?: string | null;
    /**
     * Editable. Printer URI.
     */
    uri?: string | null;
    /**
     * Editable. flag to use driverless configuration or not. If it's set to be true, make_and_model can be ignored
     */
    useDriverlessConfig?: boolean | null;
  }
  /**
   * Printer manufacturer and model
   */
  export interface Schema$PrinterModel {
    /**
     * Display name. eq. "Brother MFC-8840D"
     */
    displayName?: string | null;
    /**
     * Make and model as represented in "make_and_model" field in Printer object. eq. "brother mfc-8840d"
     */
    makeAndModel?: string | null;
    /**
     * Manufacturer. eq. "Brother"
     */
    manufacturer?: string | null;
  }
  /**
   * Configuration for a print server.
   */
  export interface Schema$PrintServer {
    /**
     * Output only. Time when the print server was created.
     */
    createTime?: string | null;
    /**
     * Editable. Description of the print server (as shown in the Admin console).
     */
    description?: string | null;
    /**
     * Editable. Display name of the print server (as shown in the Admin console).
     */
    displayName?: string | null;
    /**
     * Immutable. ID of the print server. Leave empty when creating.
     */
    id?: string | null;
    /**
     * Immutable. Resource name of the print server. Leave empty when creating. Format: `customers/{customer.id\}/printServers/{print_server.id\}`
     */
    name?: string | null;
    /**
     * ID of the organization unit (OU) that owns this print server. This value can only be set when the print server is initially created. If it's not populated, the print server is placed under the root OU. The `org_unit_id` can be retrieved using the [Directory API](/admin-sdk/directory/reference/rest/v1/orgunits).
     */
    orgUnitId?: string | null;
    /**
     * Editable. Print server URI.
     */
    uri?: string | null;
  }
  /**
   * Info about failures
   */
  export interface Schema$PrintServerFailureInfo {
    /**
     * Canonical code for why the update failed to apply.
     */
    errorCode?: string | null;
    /**
     * Failure reason message.
     */
    errorMessage?: string | null;
    /**
     * Failed print server.
     */
    printServer?: Schema$PrintServer;
    /**
     * ID of a failed print server.
     */
    printServerId?: string | null;
  }
  export interface Schema$Privilege {
    /**
     * A list of child privileges. Privileges for a service form a tree. Each privilege can have a list of child privileges; this list is empty for a leaf privilege.
     */
    childPrivileges?: Schema$Privilege[];
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * If the privilege can be restricted to an organization unit.
     */
    isOuScopable?: boolean | null;
    /**
     * The type of the API resource. This is always `admin#directory#privilege`.
     */
    kind?: string | null;
    /**
     * The name of the privilege.
     */
    privilegeName?: string | null;
    /**
     * The obfuscated ID of the service this privilege is for. This value is returned with [`Privileges.list()`](/admin-sdk/directory/v1/reference/privileges/list).
     */
    serviceId?: string | null;
    /**
     * The name of the service this privilege is for.
     */
    serviceName?: string | null;
  }
  export interface Schema$Privileges {
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * A list of Privilege resources.
     */
    items?: Schema$Privilege[];
    /**
     * The type of the API resource. This is always `admin#directory#privileges`.
     */
    kind?: string | null;
  }
  export interface Schema$Role {
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * Returns `true` if the role is a super admin role.
     */
    isSuperAdminRole?: boolean | null;
    /**
     * Returns `true` if this is a pre-defined system role.
     */
    isSystemRole?: boolean | null;
    /**
     * The type of the API resource. This is always `admin#directory#role`.
     */
    kind?: string | null;
    /**
     * A short description of the role.
     */
    roleDescription?: string | null;
    /**
     * ID of the role.
     */
    roleId?: string | null;
    /**
     * Name of the role.
     */
    roleName?: string | null;
    /**
     * The set of privileges that are granted to this role.
     */
    rolePrivileges?: Array<{privilegeName?: string; serviceId?: string}> | null;
  }
  /**
   * Defines an assignment of a role.
   */
  export interface Schema$RoleAssignment {
    /**
     * The unique ID of the entity this role is assigned to—either the `user_id` of a user, the `group_id` of a group, or the `uniqueId` of a service account as defined in [Identity and Access Management (IAM)](https://cloud.google.com/iam/docs/reference/rest/v1/projects.serviceAccounts).
     */
    assignedTo?: string | null;
    /**
     * Output only. The type of the assignee (`USER` or `GROUP`).
     */
    assigneeType?: string | null;
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * The type of the API resource. This is always `admin#directory#roleAssignment`.
     */
    kind?: string | null;
    /**
     * If the role is restricted to an organization unit, this contains the ID for the organization unit the exercise of this role is restricted to.
     */
    orgUnitId?: string | null;
    /**
     * ID of this roleAssignment.
     */
    roleAssignmentId?: string | null;
    /**
     * The ID of the role that is assigned.
     */
    roleId?: string | null;
    /**
     * The scope in which this role is assigned.
     */
    scopeType?: string | null;
  }
  export interface Schema$RoleAssignments {
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * A list of RoleAssignment resources.
     */
    items?: Schema$RoleAssignment[];
    /**
     * The type of the API resource. This is always `admin#directory#roleAssignments`.
     */
    kind?: string | null;
    nextPageToken?: string | null;
  }
  export interface Schema$Roles {
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * A list of Role resources.
     */
    items?: Schema$Role[];
    /**
     * The type of the API resource. This is always `admin#directory#roles`.
     */
    kind?: string | null;
    nextPageToken?: string | null;
  }
  /**
   * The type of API resource. For Schema resources, this is always `admin#directory#schema`.
   */
  export interface Schema$Schema {
    /**
     * Display name for the schema.
     */
    displayName?: string | null;
    /**
     * The ETag of the resource.
     */
    etag?: string | null;
    /**
     * A list of fields in the schema.
     */
    fields?: Schema$SchemaFieldSpec[];
    /**
     * Kind of resource this is.
     */
    kind?: string | null;
    /**
     * The unique identifier of the schema (Read-only)
     */
    schemaId?: string | null;
    /**
     * The schema's name. Each `schema_name` must be unique within a customer. Reusing a name results in a `409: Entity already exists` error.
     */
    schemaName?: string | null;
  }
  /**
   * You can use schemas to add custom fields to user profiles. You can use these fields to store information such as the projects your users work on, their physical locations, their hire dates, or whatever else fits your business needs. For more information, see [Custom User Fields](/admin-sdk/directory/v1/guides/manage-schemas).
   */
  export interface Schema$SchemaFieldSpec {
    /**
     * Display Name of the field.
     */
    displayName?: string | null;
    /**
     * The ETag of the field.
     */
    etag?: string | null;
    /**
     * The unique identifier of the field (Read-only)
     */
    fieldId?: string | null;
    /**
     * The name of the field.
     */
    fieldName?: string | null;
    /**
     * The type of the field.
     */
    fieldType?: string | null;
    /**
     * Boolean specifying whether the field is indexed or not. Default: `true`.
     */
    indexed?: boolean | null;
    /**
     * The kind of resource this is. For schema fields this is always `admin#directory#schema#fieldspec`.
     */
    kind?: string | null;
    /**
     * A boolean specifying whether this is a multi-valued field or not. Default: `false`.
     */
    multiValued?: boolean | null;
    /**
     * Indexing spec for a numeric field. By default, only exact match queries will be supported for numeric fields. Setting the `numericIndexingSpec` allows range queries to be supported.
     */
    numericIndexingSpec?: {maxValue?: number; minValue?: number} | null;
    /**
     * Specifies who can view values of this field. See [Retrieve users as a non-administrator](/admin-sdk/directory/v1/guides/manage-users#retrieve_users_non_admin) for more information. Note: It may take up to 24 hours for changes to this field to be reflected.
     */
    readAccessType?: string | null;
  }
  /**
   * JSON response template for List Schema operation in Directory API.
   */
  export interface Schema$Schemas {
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * Kind of resource this is.
     */
    kind?: string | null;
    /**
     * A list of UserSchema objects.
     */
    schemas?: Schema$Schema[];
  }
  /**
   * JSON template for token resource in Directory API.
   */
  export interface Schema$Token {
    /**
     * Whether the application is registered with Google. The value is `true` if the application has an anonymous Client ID.
     */
    anonymous?: boolean | null;
    /**
     * The Client ID of the application the token is issued to.
     */
    clientId?: string | null;
    /**
     * The displayable name of the application the token is issued to.
     */
    displayText?: string | null;
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * The type of the API resource. This is always `admin#directory#token`.
     */
    kind?: string | null;
    /**
     * Whether the token is issued to an installed application. The value is `true` if the application is installed to a desktop or mobile device.
     */
    nativeApp?: boolean | null;
    /**
     * A list of authorization scopes the application is granted.
     */
    scopes?: string[] | null;
    /**
     * The unique ID of the user that issued the token.
     */
    userKey?: string | null;
  }
  /**
   * JSON response template for List tokens operation in Directory API.
   */
  export interface Schema$Tokens {
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * A list of Token resources.
     */
    items?: Schema$Token[];
    /**
     * The type of the API resource. This is always `admin#directory#tokenList`.
     */
    kind?: string | null;
  }
  /**
   * The Directory API allows you to create and manage your account's users, user aliases, and user Google profile photos. For more information about common tasks, see the [User Accounts Developer's Guide](/admin-sdk/directory/v1/guides/manage-users.html) and the [User Aliases Developer's Guide](/admin-sdk/directory/v1/guides/manage-user-aliases.html).
   */
  export interface Schema$User {
    /**
     * The list of the user's addresses. The maximum allowed data size for this field is 10KB.
     */
    addresses?: any | null;
    /**
     * Output only. This property is `true` if the user has completed an initial login and accepted the Terms of Service agreement.
     */
    agreedToTerms?: boolean | null;
    /**
     * Output only. The list of the user's alias email addresses.
     */
    aliases?: string[] | null;
    /**
     * Indicates if user is archived.
     */
    archived?: boolean | null;
    /**
     * Indicates if the user is forced to change their password at next login. This setting doesn't apply when [the user signs in via a third-party identity provider](https://support.google.com/a/answer/60224).
     */
    changePasswordAtNextLogin?: boolean | null;
    /**
     * User's G Suite account creation time. (Read-only)
     */
    creationTime?: string | null;
    /**
     * Output only. The customer ID to [retrieve all account users](/admin-sdk/directory/v1/guides/manage-users.html#get_all_users). You can use the alias `my_customer` to represent your account's `customerId`. As a reseller administrator, you can use the resold customer account's `customerId`. To get a `customerId`, use the account's primary domain in the `domain` parameter of a [users.list](/admin-sdk/directory/v1/reference/users/list) request.
     */
    customerId?: string | null;
    /**
     * Custom fields of the user. The key is a `schema_name` and its values are `'field_name': 'field_value'`.
     */
    customSchemas?: {[key: string]: Schema$UserCustomProperties} | null;
    deletionTime?: string | null;
    /**
     * The list of the user's email addresses. The maximum allowed data size for this field is 10KB. This excludes `publicKeyEncryptionCertificates`.
     */
    emails?: any | null;
    /**
     * Output only. ETag of the resource.
     */
    etag?: string | null;
    /**
     * The list of external IDs for the user, such as an employee or network ID. The maximum allowed data size for this field is 2KB.
     */
    externalIds?: any | null;
    /**
     * The user's gender. The maximum allowed data size for this field is 1KB.
     */
    gender?: any | null;
    /**
     * Stores the hash format of the `password` property. The following `hashFunction` values are allowed: * `MD5` - Accepts simple hex-encoded values. * `SHA-1` - Accepts simple hex-encoded values. * `crypt` - Compliant with the [C crypt library](https://en.wikipedia.org/wiki/Crypt_%28C%29). Supports the DES, MD5 (hash prefix `$1$`), SHA-256 (hash prefix `$5$`), and SHA-512 (hash prefix `$6$`) hash algorithms. If rounds are specified as part of the prefix, they must be 10,000 or fewer.
     */
    hashFunction?: string | null;
    /**
     * The unique ID for the user. A user `id` can be used as a user request URI's `userKey`.
     */
    id?: string | null;
    /**
     * The list of the user's Instant Messenger (IM) accounts. A user account can have multiple ims properties. But, only one of these ims properties can be the primary IM contact. The maximum allowed data size for this field is 2KB.
     */
    ims?: any | null;
    /**
     * Indicates if the user's profile is visible in the Google Workspace global address list when the contact sharing feature is enabled for the domain. For more information about excluding user profiles, see the [administration help center](https://support.google.com/a/answer/1285988).
     */
    includeInGlobalAddressList?: boolean | null;
    /**
     * If `true`, the user's IP address is subject to a deprecated IP address [`allowlist`](https://support.google.com/a/answer/60752) configuration.
     */
    ipWhitelisted?: boolean | null;
    /**
     * Output only. Indicates a user with super admininistrator privileges. The `isAdmin` property can only be edited in the [Make a user an administrator](/admin-sdk/directory/v1/guides/manage-users.html#make_admin) operation ( [makeAdmin](/admin-sdk/directory/v1/reference/users/makeAdmin.html) method). If edited in the user [insert](/admin-sdk/directory/v1/reference/users/insert.html) or [update](/admin-sdk/directory/v1/reference/users/update.html) methods, the edit is ignored by the API service.
     */
    isAdmin?: boolean | null;
    /**
     * Output only. Indicates if the user is a delegated administrator. Delegated administrators are supported by the API but cannot create or undelete users, or make users administrators. These requests are ignored by the API service. Roles and privileges for administrators are assigned using the [Admin console](https://support.google.com/a/answer/33325).
     */
    isDelegatedAdmin?: boolean | null;
    /**
     * Output only. Is 2-step verification enforced (Read-only)
     */
    isEnforcedIn2Sv?: boolean | null;
    /**
     * Output only. Is enrolled in 2-step verification (Read-only)
     */
    isEnrolledIn2Sv?: boolean | null;
    /**
     * Output only. Indicates if the user's Google mailbox is created. This property is only applicable if the user has been assigned a Gmail license.
     */
    isMailboxSetup?: boolean | null;
    /**
     * The list of the user's keywords. The maximum allowed data size for this field is 1KB.
     */
    keywords?: any | null;
    /**
     * Output only. The type of the API resource. For Users resources, the value is `admin#directory#user`.
     */
    kind?: string | null;
    /**
     * The user's languages. The maximum allowed data size for this field is 1KB.
     */
    languages?: any | null;
    /**
     * User's last login time. (Read-only)
     */
    lastLoginTime?: string | null;
    /**
     * The user's locations. The maximum allowed data size for this field is 10KB.
     */
    locations?: any | null;
    /**
     * Holds the given and family names of the user, and the read-only `fullName` value. The maximum number of characters in the `givenName` and in the `familyName` values is 60. In addition, name values support unicode/UTF-8 characters, and can contain spaces, letters (a-z), numbers (0-9), dashes (-), forward slashes (/), and periods (.). For more information about character usage rules, see the [administration help center](https://support.google.com/a/answer/9193374). Maximum allowed data size for this field is 1KB.
     */
    name?: Schema$UserName;
    /**
     * Output only. The list of the user's non-editable alias email addresses. These are typically outside the account's primary domain or sub-domain.
     */
    nonEditableAliases?: string[] | null;
    /**
     * Notes for the user.
     */
    notes?: any | null;
    /**
     * The list of organizations the user belongs to. The maximum allowed data size for this field is 10KB.
     */
    organizations?: any | null;
    /**
     * The full path of the parent organization associated with the user. If the parent organization is the top-level, it is represented as a forward slash (`/`).
     */
    orgUnitPath?: string | null;
    /**
     * User's password
     */
    password?: string | null;
    /**
     * The list of the user's phone numbers. The maximum allowed data size for this field is 1KB.
     */
    phones?: any | null;
    /**
     * The list of [POSIX](https://www.opengroup.org/austin/papers/posix_faq.html) account information for the user.
     */
    posixAccounts?: any | null;
    /**
     * The user's primary email address. This property is required in a request to create a user account. The `primaryEmail` must be unique and cannot be an alias of another user.
     */
    primaryEmail?: string | null;
    /**
     * Recovery email of the user.
     */
    recoveryEmail?: string | null;
    /**
     * Recovery phone of the user. The phone number must be in the E.164 format, starting with the plus sign (+). Example: *+16506661212*.
     */
    recoveryPhone?: string | null;
    /**
     * The list of the user's relationships to other users. The maximum allowed data size for this field is 2KB.
     */
    relations?: any | null;
    /**
     * A list of SSH public keys.
     */
    sshPublicKeys?: any | null;
    /**
     * Indicates if user is suspended.
     */
    suspended?: boolean | null;
    /**
     * Output only. Has the reason a user account is suspended either by the administrator or by Google at the time of suspension. The property is returned only if the `suspended` property is `true`.
     */
    suspensionReason?: string | null;
    /**
     * Output only. ETag of the user's photo (Read-only)
     */
    thumbnailPhotoEtag?: string | null;
    /**
     * Output only. The URL of the user's profile photo. The URL might be temporary or private.
     */
    thumbnailPhotoUrl?: string | null;
    /**
     * The user's websites. The maximum allowed data size for this field is 2KB.
     */
    websites?: any | null;
  }
  /**
   * JSON template for About (notes) of a user in Directory API.
   */
  export interface Schema$UserAbout {
    /**
     * About entry can have a type which indicates the content type. It can either be plain or html. By default, notes contents are assumed to contain plain text.
     */
    contentType?: string | null;
    /**
     * Actual value of notes.
     */
    value?: string | null;
  }
  /**
   * JSON template for address.
   */
  export interface Schema$UserAddress {
    /**
     * Country.
     */
    country?: string | null;
    /**
     * Country code.
     */
    countryCode?: string | null;
    /**
     * Custom type.
     */
    customType?: string | null;
    /**
     * Extended Address.
     */
    extendedAddress?: string | null;
    /**
     * Formatted address.
     */
    formatted?: string | null;
    /**
     * Locality.
     */
    locality?: string | null;
    /**
     * Other parts of address.
     */
    poBox?: string | null;
    /**
     * Postal code.
     */
    postalCode?: string | null;
    /**
     * If this is user's primary address. Only one entry could be marked as primary.
     */
    primary?: boolean | null;
    /**
     * Region.
     */
    region?: string | null;
    /**
     * User supplied address was structured. Structured addresses are NOT supported at this time. You might be able to write structured addresses but any values will eventually be clobbered.
     */
    sourceIsStructured?: boolean | null;
    /**
     * Street.
     */
    streetAddress?: string | null;
    /**
     * Each entry can have a type which indicates standard values of that entry. For example address could be of home work etc. In addition to the standard type an entry can have a custom type and can take any value. Such type should have the CUSTOM value as type and also have a customType value.
     */
    type?: string | null;
  }
  /**
   * The Directory API manages aliases, which are alternative email addresses.
   */
  export interface Schema$UserAlias {
    /**
     * The alias email address.
     */
    alias?: string | null;
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * The unique ID for the user.
     */
    id?: string | null;
    /**
     * The type of the API resource. For Alias resources, the value is `admin#directory#alias`.
     */
    kind?: string | null;
    /**
     * The user's primary email address.
     */
    primaryEmail?: string | null;
  }
  /**
   * JSON template for a set of custom properties (i.e. all fields in a particular schema)
   */
  export interface Schema$UserCustomProperties {}
  /**
   * JSON template for an email.
   */
  export interface Schema$UserEmail {
    /**
     * Email id of the user.
     */
    address?: string | null;
    /**
     * Custom Type.
     */
    customType?: string | null;
    /**
     * If this is user's primary email. Only one entry could be marked as primary.
     */
    primary?: boolean | null;
    /**
     * Public Key Encryption Certificates. Current limit: 1 per email address, and 5 per user.
     */
    public_key_encryption_certificates?: {
      certificate?: string;
      is_default?: boolean;
      state?: string;
    } | null;
    /**
     * Each entry can have a type which indicates standard types of that entry. For example email could be of home, work etc. In addition to the standard type, an entry can have a custom type and can take any value Such types should have the CUSTOM value as type and also have a customType value.
     */
    type?: string | null;
  }
  /**
   * JSON template for an externalId entry.
   */
  export interface Schema$UserExternalId {
    /**
     * Custom type.
     */
    customType?: string | null;
    /**
     * The type of the Id.
     */
    type?: string | null;
    /**
     * The value of the id.
     */
    value?: string | null;
  }
  export interface Schema$UserGender {
    /**
     * AddressMeAs. A human-readable string containing the proper way to refer to the profile owner by humans for example he/him/his or they/them/their.
     */
    addressMeAs?: string | null;
    /**
     * Custom gender.
     */
    customGender?: string | null;
    /**
     * Gender.
     */
    type?: string | null;
  }
  /**
   * JSON template for instant messenger of an user.
   */
  export interface Schema$UserIm {
    /**
     * Custom protocol.
     */
    customProtocol?: string | null;
    /**
     * Custom type.
     */
    customType?: string | null;
    /**
     * Instant messenger id.
     */
    im?: string | null;
    /**
     * If this is user's primary im. Only one entry could be marked as primary.
     */
    primary?: boolean | null;
    /**
     * Protocol used in the instant messenger. It should be one of the values from ImProtocolTypes map. Similar to type it can take a CUSTOM value and specify the custom name in customProtocol field.
     */
    protocol?: string | null;
    /**
     * Each entry can have a type which indicates standard types of that entry. For example instant messengers could be of home work etc. In addition to the standard type an entry can have a custom type and can take any value. Such types should have the CUSTOM value as type and also have a customType value.
     */
    type?: string | null;
  }
  /**
   * JSON template for a keyword entry.
   */
  export interface Schema$UserKeyword {
    /**
     * Custom Type.
     */
    customType?: string | null;
    /**
     * Each entry can have a type which indicates standard type of that entry. For example keyword could be of type occupation or outlook. In addition to the standard type an entry can have a custom type and can give it any name. Such types should have the CUSTOM value as type and also have a customType value.
     */
    type?: string | null;
    /**
     * Keyword.
     */
    value?: string | null;
  }
  /**
   * JSON template for a language entry.
   */
  export interface Schema$UserLanguage {
    /**
     * Other language. User can provide their own language name if there is no corresponding ISO 639 language code. If this is set, `languageCode` can't be set.
     */
    customLanguage?: string | null;
    /**
     * ISO 639 string representation of a language. See [Language Codes](/admin-sdk/directory/v1/languages) for the list of supported codes. Valid language codes outside the supported set will be accepted by the API but may lead to unexpected behavior. Illegal values cause `SchemaException`. If this is set, `customLanguage` can't be set.
     */
    languageCode?: string | null;
    /**
     * Optional. If present, controls whether the specified `languageCode` is the user's preferred language. If `customLanguage` is set, this can't be set. Allowed values are `preferred` and `not_preferred`.
     */
    preference?: string | null;
  }
  /**
   * JSON template for a location entry.
   */
  export interface Schema$UserLocation {
    /**
     * Textual location. This is most useful for display purposes to concisely describe the location. For example 'Mountain View, CA', 'Near Seattle', 'US-NYC-9TH 9A209A.''
     */
    area?: string | null;
    /**
     * Building Identifier.
     */
    buildingId?: string | null;
    /**
     * Custom Type.
     */
    customType?: string | null;
    /**
     * Most specific textual code of individual desk location.
     */
    deskCode?: string | null;
    /**
     * Floor name/number.
     */
    floorName?: string | null;
    /**
     * Floor section. More specific location within the floor. For example if a floor is divided into sections 'A', 'B' and 'C' this field would identify one of those values.
     */
    floorSection?: string | null;
    /**
     * Each entry can have a type which indicates standard types of that entry. For example location could be of types default and desk. In addition to standard type an entry can have a custom type and can give it any name. Such types should have 'custom' as type and also have a customType value.
     */
    type?: string | null;
  }
  export interface Schema$UserMakeAdmin {
    /**
     * Indicates the administrator status of the user.
     */
    status?: boolean | null;
  }
  export interface Schema$UserName {
    /**
     * The user's display name. Limit: 256 characters.
     */
    displayName?: string | null;
    /**
     * The user's last name. Required when creating a user account.
     */
    familyName?: string | null;
    /**
     * The user's full name formed by concatenating the first and last name values.
     */
    fullName?: string | null;
    /**
     * The user's first name. Required when creating a user account.
     */
    givenName?: string | null;
  }
  /**
   * JSON template for an organization entry.
   */
  export interface Schema$UserOrganization {
    /**
     * The cost center of the users department.
     */
    costCenter?: string | null;
    /**
     * Custom type.
     */
    customType?: string | null;
    /**
     * Department within the organization.
     */
    department?: string | null;
    /**
     * Description of the organization.
     */
    description?: string | null;
    /**
     * The domain to which the organization belongs to.
     */
    domain?: string | null;
    /**
     * The full-time equivalent millipercent within the organization (100000 = 100%).
     */
    fullTimeEquivalent?: number | null;
    /**
     * Location of the organization. This need not be fully qualified address.
     */
    location?: string | null;
    /**
     * Name of the organization
     */
    name?: string | null;
    /**
     * If it user's primary organization.
     */
    primary?: boolean | null;
    /**
     * Symbol of the organization.
     */
    symbol?: string | null;
    /**
     * Title (designation) of the user in the organization.
     */
    title?: string | null;
    /**
     * Each entry can have a type which indicates standard types of that entry. For example organization could be of school work etc. In addition to the standard type an entry can have a custom type and can give it any name. Such types should have the CUSTOM value as type and also have a CustomType value.
     */
    type?: string | null;
  }
  /**
   * JSON template for a phone entry.
   */
  export interface Schema$UserPhone {
    /**
     * Custom Type.
     */
    customType?: string | null;
    /**
     * If this is user's primary phone or not.
     */
    primary?: boolean | null;
    /**
     * Each entry can have a type which indicates standard types of that entry. For example phone could be of home_fax work mobile etc. In addition to the standard type an entry can have a custom type and can give it any name. Such types should have the CUSTOM value as type and also have a customType value.
     */
    type?: string | null;
    /**
     * Phone number.
     */
    value?: string | null;
  }
  export interface Schema$UserPhoto {
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * Height of the photo in pixels.
     */
    height?: number | null;
    /**
     * The ID the API uses to uniquely identify the user.
     */
    id?: string | null;
    /**
     * The type of the API resource. For Photo resources, this is `admin#directory#user#photo`.
     */
    kind?: string | null;
    /**
     * The MIME type of the photo. Allowed values are `JPEG`, `PNG`, `GIF`, `BMP`, `TIFF`, and web-safe base64 encoding.
     */
    mimeType?: string | null;
    /**
     * The user photo's upload data in [web-safe Base64](https://en.wikipedia.org/wiki/Base64#URL_applications) format in bytes. This means: * The slash (/) character is replaced with the underscore (_) character. * The plus sign (+) character is replaced with the hyphen (-) character. * The equals sign (=) character is replaced with the asterisk (*). * For padding, the period (.) character is used instead of the RFC-4648 baseURL definition which uses the equals sign (=) for padding. This is done to simplify URL-parsing. * Whatever the size of the photo being uploaded, the API downsizes it to 96x96 pixels.
     */
    photoData?: string | null;
    /**
     * The user's primary email address.
     */
    primaryEmail?: string | null;
    /**
     * Width of the photo in pixels.
     */
    width?: number | null;
  }
  /**
   * JSON template for a POSIX account entry.
   */
  export interface Schema$UserPosixAccount {
    /**
     * A POSIX account field identifier.
     */
    accountId?: string | null;
    /**
     * The GECOS (user information) for this account.
     */
    gecos?: string | null;
    /**
     * The default group ID.
     */
    gid?: string | null;
    /**
     * The path to the home directory for this account.
     */
    homeDirectory?: string | null;
    /**
     * The operating system type for this account.
     */
    operatingSystemType?: string | null;
    /**
     * If this is user's primary account within the SystemId.
     */
    primary?: boolean | null;
    /**
     * The path to the login shell for this account.
     */
    shell?: string | null;
    /**
     * System identifier for which account Username or Uid apply to.
     */
    systemId?: string | null;
    /**
     * The POSIX compliant user ID.
     */
    uid?: string | null;
    /**
     * The username of the account.
     */
    username?: string | null;
  }
  /**
   * JSON template for a relation entry.
   */
  export interface Schema$UserRelation {
    /**
     * Custom Type.
     */
    customType?: string | null;
    /**
     * The relation of the user. Some of the possible values are mother father sister brother manager assistant partner.
     */
    type?: string | null;
    /**
     * The name of the relation.
     */
    value?: string | null;
  }
  export interface Schema$Users {
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * Kind of resource this is.
     */
    kind?: string | null;
    /**
     * Token used to access next page of this result.
     */
    nextPageToken?: string | null;
    /**
     * Event that triggered this response (only used in case of Push Response)
     */
    trigger_event?: string | null;
    /**
     * A list of user objects.
     */
    users?: Schema$User[];
  }
  /**
   * JSON template for a POSIX account entry.
   */
  export interface Schema$UserSshPublicKey {
    /**
     * An expiration time in microseconds since epoch.
     */
    expirationTimeUsec?: string | null;
    /**
     * A SHA-256 fingerprint of the SSH public key. (Read-only)
     */
    fingerprint?: string | null;
    /**
     * An SSH public key.
     */
    key?: string | null;
  }
  export interface Schema$UserUndelete {
    /**
     * OrgUnit of User
     */
    orgUnitPath?: string | null;
  }
  /**
   * JSON template for a website entry.
   */
  export interface Schema$UserWebsite {
    /**
     * Custom Type.
     */
    customType?: string | null;
    /**
     * If this is user's primary website or not.
     */
    primary?: boolean | null;
    /**
     * Each entry can have a type which indicates standard types of that entry. For example website could be of home work blog etc. In addition to the standard type an entry can have a custom type and can give it any name. Such types should have the CUSTOM value as type and also have a customType value.
     */
    type?: string | null;
    /**
     * Website.
     */
    value?: string | null;
  }
  /**
   * The Directory API allows you to view, generate, and invalidate backup verification codes for a user.
   */
  export interface Schema$VerificationCode {
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * The type of the resource. This is always `admin#directory#verificationCode`.
     */
    kind?: string | null;
    /**
     * The obfuscated unique ID of the user.
     */
    userId?: string | null;
    /**
     * A current verification code for the user. Invalidated or used verification codes are not returned as part of the result.
     */
    verificationCode?: string | null;
  }
  /**
   * JSON response template for list verification codes operation in Directory API.
   */
  export interface Schema$VerificationCodes {
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * A list of verification code resources.
     */
    items?: Schema$VerificationCode[];
    /**
     * The type of the resource. This is always `admin#directory#verificationCodesList`.
     */
    kind?: string | null;
  }

  export class Resource$Asps {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes an ASP issued by a user.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Asps$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Asps$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Asps$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Asps$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Asps$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Asps$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Asps$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Asps$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/admin/directory/v1/users/{userKey}/asps/{codeId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['userKey', 'codeId'],
        pathParams: ['codeId', 'userKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Gets information about an ASP issued by a user.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Asps$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Asps$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Asp>;
    get(
      params: Params$Resource$Asps$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Asps$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Asp>,
      callback: BodyResponseCallback<Schema$Asp>
    ): void;
    get(
      params: Params$Resource$Asps$Get,
      callback: BodyResponseCallback<Schema$Asp>
    ): void;
    get(callback: BodyResponseCallback<Schema$Asp>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Asps$Get
        | BodyResponseCallback<Schema$Asp>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Asp>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Asp>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Asp> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Asps$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Asps$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/admin/directory/v1/users/{userKey}/asps/{codeId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userKey', 'codeId'],
        pathParams: ['codeId', 'userKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Asp>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Asp>(parameters);
      }
    }

    /**
     * Lists the ASPs issued by a user.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Asps$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Asps$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Asps>;
    list(
      params: Params$Resource$Asps$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Asps$List,
      options: MethodOptions | BodyResponseCallback<Schema$Asps>,
      callback: BodyResponseCallback<Schema$Asps>
    ): void;
    list(
      params: Params$Resource$Asps$List,
      callback: BodyResponseCallback<Schema$Asps>
    ): void;
    list(callback: BodyResponseCallback<Schema$Asps>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Asps$List
        | BodyResponseCallback<Schema$Asps>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Asps>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Asps>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Asps> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Asps$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Asps$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/users/{userKey}/asps').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userKey'],
        pathParams: ['userKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Asps>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Asps>(parameters);
      }
    }
  }

  export interface Params$Resource$Asps$Delete extends StandardParameters {
    /**
     * The unique ID of the ASP to be deleted.
     */
    codeId?: number;
    /**
     * Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     */
    userKey?: string;
  }
  export interface Params$Resource$Asps$Get extends StandardParameters {
    /**
     * The unique ID of the ASP.
     */
    codeId?: number;
    /**
     * Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     */
    userKey?: string;
  }
  export interface Params$Resource$Asps$List extends StandardParameters {
    /**
     * Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     */
    userKey?: string;
  }

  export class Resource$Channels {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Stops watching resources through this channel.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    stop(
      params: Params$Resource$Channels$Stop,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    stop(
      params?: Params$Resource$Channels$Stop,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    stop(
      params: Params$Resource$Channels$Stop,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    stop(
      params: Params$Resource$Channels$Stop,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    stop(
      params: Params$Resource$Channels$Stop,
      callback: BodyResponseCallback<void>
    ): void;
    stop(callback: BodyResponseCallback<void>): void;
    stop(
      paramsOrCallback?:
        | Params$Resource$Channels$Stop
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Channels$Stop;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Channels$Stop;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/admin/directory_v1/channels/stop').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Channels$Stop extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$Channel;
  }

  export class Resource$Chromeosdevices {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Takes an action that affects a Chrome OS Device. This includes deprovisioning, disabling, and re-enabling devices. *Warning:* * Deprovisioning a device will stop device policy syncing and remove device-level printers. After a device is deprovisioned, it must be wiped before it can be re-enrolled. * Lost or stolen devices should use the disable action. * Re-enabling a disabled device will consume a device license. If you do not have sufficient licenses available when completing the re-enable action, you will receive an error. For more information about deprovisioning and disabling devices, visit the [help center](https://support.google.com/chrome/a/answer/3523633).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    action(
      params: Params$Resource$Chromeosdevices$Action,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    action(
      params?: Params$Resource$Chromeosdevices$Action,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    action(
      params: Params$Resource$Chromeosdevices$Action,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    action(
      params: Params$Resource$Chromeosdevices$Action,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    action(
      params: Params$Resource$Chromeosdevices$Action,
      callback: BodyResponseCallback<void>
    ): void;
    action(callback: BodyResponseCallback<void>): void;
    action(
      paramsOrCallback?:
        | Params$Resource$Chromeosdevices$Action
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Chromeosdevices$Action;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Chromeosdevices$Action;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/customer/{customerId}/devices/chromeos/{resourceId}/action'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['customerId', 'resourceId'],
        pathParams: ['customerId', 'resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Retrieves a Chrome OS device's properties.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Chromeosdevices$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Chromeosdevices$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ChromeOsDevice>;
    get(
      params: Params$Resource$Chromeosdevices$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Chromeosdevices$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ChromeOsDevice>,
      callback: BodyResponseCallback<Schema$ChromeOsDevice>
    ): void;
    get(
      params: Params$Resource$Chromeosdevices$Get,
      callback: BodyResponseCallback<Schema$ChromeOsDevice>
    ): void;
    get(callback: BodyResponseCallback<Schema$ChromeOsDevice>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Chromeosdevices$Get
        | BodyResponseCallback<Schema$ChromeOsDevice>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ChromeOsDevice>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ChromeOsDevice>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ChromeOsDevice> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Chromeosdevices$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Chromeosdevices$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['customerId', 'deviceId'],
        pathParams: ['customerId', 'deviceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ChromeOsDevice>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ChromeOsDevice>(parameters);
      }
    }

    /**
     * Retrieves a paginated list of Chrome OS devices within an account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Chromeosdevices$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Chromeosdevices$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ChromeOsDevices>;
    list(
      params: Params$Resource$Chromeosdevices$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Chromeosdevices$List,
      options: MethodOptions | BodyResponseCallback<Schema$ChromeOsDevices>,
      callback: BodyResponseCallback<Schema$ChromeOsDevices>
    ): void;
    list(
      params: Params$Resource$Chromeosdevices$List,
      callback: BodyResponseCallback<Schema$ChromeOsDevices>
    ): void;
    list(callback: BodyResponseCallback<Schema$ChromeOsDevices>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Chromeosdevices$List
        | BodyResponseCallback<Schema$ChromeOsDevices>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ChromeOsDevices>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ChromeOsDevices>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ChromeOsDevices> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Chromeosdevices$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Chromeosdevices$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/customer/{customerId}/devices/chromeos'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['customerId'],
        pathParams: ['customerId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ChromeOsDevices>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ChromeOsDevices>(parameters);
      }
    }

    /**
     * Moves or inserts multiple Chrome OS devices to an organizational unit. You can move up to 50 devices at once.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    moveDevicesToOu(
      params: Params$Resource$Chromeosdevices$Movedevicestoou,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    moveDevicesToOu(
      params?: Params$Resource$Chromeosdevices$Movedevicestoou,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    moveDevicesToOu(
      params: Params$Resource$Chromeosdevices$Movedevicestoou,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    moveDevicesToOu(
      params: Params$Resource$Chromeosdevices$Movedevicestoou,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    moveDevicesToOu(
      params: Params$Resource$Chromeosdevices$Movedevicestoou,
      callback: BodyResponseCallback<void>
    ): void;
    moveDevicesToOu(callback: BodyResponseCallback<void>): void;
    moveDevicesToOu(
      paramsOrCallback?:
        | Params$Resource$Chromeosdevices$Movedevicestoou
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Chromeosdevices$Movedevicestoou;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Chromeosdevices$Movedevicestoou;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/customer/{customerId}/devices/chromeos/moveDevicesToOu'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['customerId', 'orgUnitPath'],
        pathParams: ['customerId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Chromeosdevices$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Chromeosdevices$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ChromeOsDevice>;
    patch(
      params: Params$Resource$Chromeosdevices$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Chromeosdevices$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$ChromeOsDevice>,
      callback: BodyResponseCallback<Schema$ChromeOsDevice>
    ): void;
    patch(
      params: Params$Resource$Chromeosdevices$Patch,
      callback: BodyResponseCallback<Schema$ChromeOsDevice>
    ): void;
    patch(callback: BodyResponseCallback<Schema$ChromeOsDevice>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Chromeosdevices$Patch
        | BodyResponseCallback<Schema$ChromeOsDevice>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ChromeOsDevice>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ChromeOsDevice>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ChromeOsDevice> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Chromeosdevices$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Chromeosdevices$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['customerId', 'deviceId'],
        pathParams: ['customerId', 'deviceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ChromeOsDevice>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ChromeOsDevice>(parameters);
      }
    }

    /**
     * Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Chromeosdevices$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Chromeosdevices$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ChromeOsDevice>;
    update(
      params: Params$Resource$Chromeosdevices$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Chromeosdevices$Update,
      options: MethodOptions | BodyResponseCallback<Schema$ChromeOsDevice>,
      callback: BodyResponseCallback<Schema$ChromeOsDevice>
    ): void;
    update(
      params: Params$Resource$Chromeosdevices$Update,
      callback: BodyResponseCallback<Schema$ChromeOsDevice>
    ): void;
    update(callback: BodyResponseCallback<Schema$ChromeOsDevice>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Chromeosdevices$Update
        | BodyResponseCallback<Schema$ChromeOsDevice>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ChromeOsDevice>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ChromeOsDevice>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ChromeOsDevice> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Chromeosdevices$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Chromeosdevices$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['customerId', 'deviceId'],
        pathParams: ['customerId', 'deviceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ChromeOsDevice>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ChromeOsDevice>(parameters);
      }
    }
  }

  export interface Params$Resource$Chromeosdevices$Action
    extends StandardParameters {
    /**
     * The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).
     */
    customerId?: string;
    /**
     * The unique ID of the device. The `resourceId`s are returned in the response from the [chromeosdevices.list](/admin-sdk/directory/v1/reference/chromeosdevices/list) method.
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ChromeOsDeviceAction;
  }
  export interface Params$Resource$Chromeosdevices$Get
    extends StandardParameters {
    /**
     * The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).
     */
    customerId?: string;
    /**
     * The unique ID of the device. The `deviceId`s are returned in the response from the [chromeosdevices.list](/admin-sdk/directory/v1/reference/chromeosdevices/list) method.
     */
    deviceId?: string;
    /**
     * Determines whether the response contains the full list of properties or only a subset.
     */
    projection?: string;
  }
  export interface Params$Resource$Chromeosdevices$List
    extends StandardParameters {
    /**
     * The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).
     */
    customerId?: string;
    /**
     * Return devices from all child orgunits, as well as the specified org unit. If this is set to true, 'orgUnitPath' must be provided.
     */
    includeChildOrgunits?: boolean;
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * Device property to use for sorting results.
     */
    orderBy?: string;
    /**
     * The full path of the organizational unit (minus the leading `/`) or its unique ID.
     */
    orgUnitPath?: string;
    /**
     * The `pageToken` query parameter is used to request the next page of query results. The follow-on request's `pageToken` query parameter is the `nextPageToken` from your previous response.
     */
    pageToken?: string;
    /**
     * Restrict information returned to a set of selected fields.
     */
    projection?: string;
    /**
     * Search string in the format given at https://developers.google.com/admin-sdk/directory/v1/list-query-operators
     */
    query?: string;
    /**
     * Whether to return results in ascending or descending order. Must be used with the `orderBy` parameter.
     */
    sortOrder?: string;
  }
  export interface Params$Resource$Chromeosdevices$Movedevicestoou
    extends StandardParameters {
    /**
     * Immutable. ID of the Google Workspace account
     */
    customerId?: string;
    /**
     * Full path of the target organizational unit or its ID
     */
    orgUnitPath?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ChromeOsMoveDevicesToOu;
  }
  export interface Params$Resource$Chromeosdevices$Patch
    extends StandardParameters {
    /**
     * The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).
     */
    customerId?: string;
    /**
     * The unique ID of the device. The `deviceId`s are returned in the response from the [chromeosdevices.list](/admin-sdk/v1/reference/chromeosdevices/list) method.
     */
    deviceId?: string;
    /**
     * Restrict information returned to a set of selected fields.
     */
    projection?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ChromeOsDevice;
  }
  export interface Params$Resource$Chromeosdevices$Update
    extends StandardParameters {
    /**
     * The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).
     */
    customerId?: string;
    /**
     * The unique ID of the device. The `deviceId`s are returned in the response from the [chromeosdevices.list](/admin-sdk/v1/reference/chromeosdevices/list) method.
     */
    deviceId?: string;
    /**
     * Restrict information returned to a set of selected fields.
     */
    projection?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ChromeOsDevice;
  }

  export class Resource$Customer {
    context: APIRequestContext;
    devices: Resource$Customer$Devices;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.devices = new Resource$Customer$Devices(this.context);
    }
  }

  export class Resource$Customer$Devices {
    context: APIRequestContext;
    chromeos: Resource$Customer$Devices$Chromeos;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.chromeos = new Resource$Customer$Devices$Chromeos(this.context);
    }
  }

  export class Resource$Customer$Devices$Chromeos {
    context: APIRequestContext;
    commands: Resource$Customer$Devices$Chromeos$Commands;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.commands = new Resource$Customer$Devices$Chromeos$Commands(
        this.context
      );
    }

    /**
     * Issues a command for the device to execute.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    issueCommand(
      params: Params$Resource$Customer$Devices$Chromeos$Issuecommand,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    issueCommand(
      params?: Params$Resource$Customer$Devices$Chromeos$Issuecommand,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DirectoryChromeosdevicesIssueCommandResponse>;
    issueCommand(
      params: Params$Resource$Customer$Devices$Chromeos$Issuecommand,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    issueCommand(
      params: Params$Resource$Customer$Devices$Chromeos$Issuecommand,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$DirectoryChromeosdevicesIssueCommandResponse>,
      callback: BodyResponseCallback<Schema$DirectoryChromeosdevicesIssueCommandResponse>
    ): void;
    issueCommand(
      params: Params$Resource$Customer$Devices$Chromeos$Issuecommand,
      callback: BodyResponseCallback<Schema$DirectoryChromeosdevicesIssueCommandResponse>
    ): void;
    issueCommand(
      callback: BodyResponseCallback<Schema$DirectoryChromeosdevicesIssueCommandResponse>
    ): void;
    issueCommand(
      paramsOrCallback?:
        | Params$Resource$Customer$Devices$Chromeos$Issuecommand
        | BodyResponseCallback<Schema$DirectoryChromeosdevicesIssueCommandResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DirectoryChromeosdevicesIssueCommandResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DirectoryChromeosdevicesIssueCommandResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$DirectoryChromeosdevicesIssueCommandResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customer$Devices$Chromeos$Issuecommand;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customer$Devices$Chromeos$Issuecommand;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}:issueCommand'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['customerId', 'deviceId'],
        pathParams: ['customerId', 'deviceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DirectoryChromeosdevicesIssueCommandResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DirectoryChromeosdevicesIssueCommandResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Customer$Devices$Chromeos$Issuecommand
    extends StandardParameters {
    /**
     * Immutable. ID of the Google Workspace account.
     */
    customerId?: string;
    /**
     * Immutable. ID of Chrome OS Device.
     */
    deviceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DirectoryChromeosdevicesIssueCommandRequest;
  }

  export class Resource$Customer$Devices$Chromeos$Commands {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets command data a specific command issued to the device.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Customer$Devices$Chromeos$Commands$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Customer$Devices$Chromeos$Commands$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DirectoryChromeosdevicesCommand>;
    get(
      params: Params$Resource$Customer$Devices$Chromeos$Commands$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Customer$Devices$Chromeos$Commands$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$DirectoryChromeosdevicesCommand>,
      callback: BodyResponseCallback<Schema$DirectoryChromeosdevicesCommand>
    ): void;
    get(
      params: Params$Resource$Customer$Devices$Chromeos$Commands$Get,
      callback: BodyResponseCallback<Schema$DirectoryChromeosdevicesCommand>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$DirectoryChromeosdevicesCommand>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Customer$Devices$Chromeos$Commands$Get
        | BodyResponseCallback<Schema$DirectoryChromeosdevicesCommand>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DirectoryChromeosdevicesCommand>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DirectoryChromeosdevicesCommand>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$DirectoryChromeosdevicesCommand>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customer$Devices$Chromeos$Commands$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customer$Devices$Chromeos$Commands$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}/commands/{commandId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['customerId', 'deviceId', 'commandId'],
        pathParams: ['commandId', 'customerId', 'deviceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DirectoryChromeosdevicesCommand>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DirectoryChromeosdevicesCommand>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Customer$Devices$Chromeos$Commands$Get
    extends StandardParameters {
    /**
     * Immutable. ID of Chrome OS Device Command.
     */
    commandId?: string;
    /**
     * Immutable. ID of the Google Workspace account.
     */
    customerId?: string;
    /**
     * Immutable. ID of Chrome OS Device.
     */
    deviceId?: string;
  }

  export class Resource$Customers {
    context: APIRequestContext;
    chrome: Resource$Customers$Chrome;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.chrome = new Resource$Customers$Chrome(this.context);
    }

    /**
     * Retrieves a customer.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Customers$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Customers$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Customer>;
    get(
      params: Params$Resource$Customers$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Customers$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Customer>,
      callback: BodyResponseCallback<Schema$Customer>
    ): void;
    get(
      params: Params$Resource$Customers$Get,
      callback: BodyResponseCallback<Schema$Customer>
    ): void;
    get(callback: BodyResponseCallback<Schema$Customer>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Customers$Get
        | BodyResponseCallback<Schema$Customer>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Customer>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Customer>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Customer> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Customers$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/admin/directory/v1/customers/{customerKey}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['customerKey'],
        pathParams: ['customerKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Customer>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Customer>(parameters);
      }
    }

    /**
     * Patches a customer.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Customers$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Customers$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Customer>;
    patch(
      params: Params$Resource$Customers$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Customers$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Customer>,
      callback: BodyResponseCallback<Schema$Customer>
    ): void;
    patch(
      params: Params$Resource$Customers$Patch,
      callback: BodyResponseCallback<Schema$Customer>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Customer>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Customers$Patch
        | BodyResponseCallback<Schema$Customer>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Customer>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Customer>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Customer> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Customers$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/admin/directory/v1/customers/{customerKey}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['customerKey'],
        pathParams: ['customerKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Customer>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Customer>(parameters);
      }
    }

    /**
     * Updates a customer.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Customers$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Customers$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Customer>;
    update(
      params: Params$Resource$Customers$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Customers$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Customer>,
      callback: BodyResponseCallback<Schema$Customer>
    ): void;
    update(
      params: Params$Resource$Customers$Update,
      callback: BodyResponseCallback<Schema$Customer>
    ): void;
    update(callback: BodyResponseCallback<Schema$Customer>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Customers$Update
        | BodyResponseCallback<Schema$Customer>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Customer>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Customer>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Customer> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Customers$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/admin/directory/v1/customers/{customerKey}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['customerKey'],
        pathParams: ['customerKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Customer>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Customer>(parameters);
      }
    }
  }

  export interface Params$Resource$Customers$Get extends StandardParameters {
    /**
     * Id of the customer to be retrieved
     */
    customerKey?: string;
  }
  export interface Params$Resource$Customers$Patch extends StandardParameters {
    /**
     * Id of the customer to be updated
     */
    customerKey?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Customer;
  }
  export interface Params$Resource$Customers$Update extends StandardParameters {
    /**
     * Id of the customer to be updated
     */
    customerKey?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Customer;
  }

  export class Resource$Customers$Chrome {
    context: APIRequestContext;
    printers: Resource$Customers$Chrome$Printers;
    printServers: Resource$Customers$Chrome$Printservers;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.printers = new Resource$Customers$Chrome$Printers(this.context);
      this.printServers = new Resource$Customers$Chrome$Printservers(
        this.context
      );
    }
  }

  export class Resource$Customers$Chrome$Printers {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates printers under given Organization Unit.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    batchCreatePrinters(
      params: Params$Resource$Customers$Chrome$Printers$Batchcreateprinters,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchCreatePrinters(
      params?: Params$Resource$Customers$Chrome$Printers$Batchcreateprinters,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BatchCreatePrintersResponse>;
    batchCreatePrinters(
      params: Params$Resource$Customers$Chrome$Printers$Batchcreateprinters,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchCreatePrinters(
      params: Params$Resource$Customers$Chrome$Printers$Batchcreateprinters,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchCreatePrintersResponse>,
      callback: BodyResponseCallback<Schema$BatchCreatePrintersResponse>
    ): void;
    batchCreatePrinters(
      params: Params$Resource$Customers$Chrome$Printers$Batchcreateprinters,
      callback: BodyResponseCallback<Schema$BatchCreatePrintersResponse>
    ): void;
    batchCreatePrinters(
      callback: BodyResponseCallback<Schema$BatchCreatePrintersResponse>
    ): void;
    batchCreatePrinters(
      paramsOrCallback?:
        | Params$Resource$Customers$Chrome$Printers$Batchcreateprinters
        | BodyResponseCallback<Schema$BatchCreatePrintersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BatchCreatePrintersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BatchCreatePrintersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$BatchCreatePrintersResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Chrome$Printers$Batchcreateprinters;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Customers$Chrome$Printers$Batchcreateprinters;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/{+parent}/chrome/printers:batchCreatePrinters'
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
        createAPIRequest<Schema$BatchCreatePrintersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BatchCreatePrintersResponse>(parameters);
      }
    }

    /**
     * Deletes printers in batch.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    batchDeletePrinters(
      params: Params$Resource$Customers$Chrome$Printers$Batchdeleteprinters,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchDeletePrinters(
      params?: Params$Resource$Customers$Chrome$Printers$Batchdeleteprinters,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BatchDeletePrintersResponse>;
    batchDeletePrinters(
      params: Params$Resource$Customers$Chrome$Printers$Batchdeleteprinters,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchDeletePrinters(
      params: Params$Resource$Customers$Chrome$Printers$Batchdeleteprinters,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchDeletePrintersResponse>,
      callback: BodyResponseCallback<Schema$BatchDeletePrintersResponse>
    ): void;
    batchDeletePrinters(
      params: Params$Resource$Customers$Chrome$Printers$Batchdeleteprinters,
      callback: BodyResponseCallback<Schema$BatchDeletePrintersResponse>
    ): void;
    batchDeletePrinters(
      callback: BodyResponseCallback<Schema$BatchDeletePrintersResponse>
    ): void;
    batchDeletePrinters(
      paramsOrCallback?:
        | Params$Resource$Customers$Chrome$Printers$Batchdeleteprinters
        | BodyResponseCallback<Schema$BatchDeletePrintersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BatchDeletePrintersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BatchDeletePrintersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$BatchDeletePrintersResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Chrome$Printers$Batchdeleteprinters;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Customers$Chrome$Printers$Batchdeleteprinters;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/{+parent}/chrome/printers:batchDeletePrinters'
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
        createAPIRequest<Schema$BatchDeletePrintersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BatchDeletePrintersResponse>(parameters);
      }
    }

    /**
     * Creates a printer under given Organization Unit.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Customers$Chrome$Printers$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Customers$Chrome$Printers$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Printer>;
    create(
      params: Params$Resource$Customers$Chrome$Printers$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Customers$Chrome$Printers$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Printer>,
      callback: BodyResponseCallback<Schema$Printer>
    ): void;
    create(
      params: Params$Resource$Customers$Chrome$Printers$Create,
      callback: BodyResponseCallback<Schema$Printer>
    ): void;
    create(callback: BodyResponseCallback<Schema$Printer>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Customers$Chrome$Printers$Create
        | BodyResponseCallback<Schema$Printer>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Printer>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Printer>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Printer> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Chrome$Printers$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Chrome$Printers$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/admin/directory/v1/{+parent}/chrome/printers'
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
        createAPIRequest<Schema$Printer>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Printer>(parameters);
      }
    }

    /**
     * Deletes a `Printer`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Customers$Chrome$Printers$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Customers$Chrome$Printers$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Customers$Chrome$Printers$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Customers$Chrome$Printers$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Customers$Chrome$Printers$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Customers$Chrome$Printers$Delete
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
        {}) as Params$Resource$Customers$Chrome$Printers$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Chrome$Printers$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
     * Returns a `Printer` resource (printer's config).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Customers$Chrome$Printers$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Customers$Chrome$Printers$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Printer>;
    get(
      params: Params$Resource$Customers$Chrome$Printers$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Customers$Chrome$Printers$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Printer>,
      callback: BodyResponseCallback<Schema$Printer>
    ): void;
    get(
      params: Params$Resource$Customers$Chrome$Printers$Get,
      callback: BodyResponseCallback<Schema$Printer>
    ): void;
    get(callback: BodyResponseCallback<Schema$Printer>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Customers$Chrome$Printers$Get
        | BodyResponseCallback<Schema$Printer>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Printer>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Printer>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Printer> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Chrome$Printers$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Chrome$Printers$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/{+name}').replace(
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
        createAPIRequest<Schema$Printer>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Printer>(parameters);
      }
    }

    /**
     * List printers configs.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Customers$Chrome$Printers$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Customers$Chrome$Printers$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListPrintersResponse>;
    list(
      params: Params$Resource$Customers$Chrome$Printers$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Customers$Chrome$Printers$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListPrintersResponse>,
      callback: BodyResponseCallback<Schema$ListPrintersResponse>
    ): void;
    list(
      params: Params$Resource$Customers$Chrome$Printers$List,
      callback: BodyResponseCallback<Schema$ListPrintersResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListPrintersResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Customers$Chrome$Printers$List
        | BodyResponseCallback<Schema$ListPrintersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListPrintersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListPrintersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListPrintersResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Chrome$Printers$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Chrome$Printers$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/admin/directory/v1/{+parent}/chrome/printers'
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
        createAPIRequest<Schema$ListPrintersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListPrintersResponse>(parameters);
      }
    }

    /**
     * Lists the supported printer models.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    listPrinterModels(
      params: Params$Resource$Customers$Chrome$Printers$Listprintermodels,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    listPrinterModels(
      params?: Params$Resource$Customers$Chrome$Printers$Listprintermodels,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListPrinterModelsResponse>;
    listPrinterModels(
      params: Params$Resource$Customers$Chrome$Printers$Listprintermodels,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listPrinterModels(
      params: Params$Resource$Customers$Chrome$Printers$Listprintermodels,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListPrinterModelsResponse>,
      callback: BodyResponseCallback<Schema$ListPrinterModelsResponse>
    ): void;
    listPrinterModels(
      params: Params$Resource$Customers$Chrome$Printers$Listprintermodels,
      callback: BodyResponseCallback<Schema$ListPrinterModelsResponse>
    ): void;
    listPrinterModels(
      callback: BodyResponseCallback<Schema$ListPrinterModelsResponse>
    ): void;
    listPrinterModels(
      paramsOrCallback?:
        | Params$Resource$Customers$Chrome$Printers$Listprintermodels
        | BodyResponseCallback<Schema$ListPrinterModelsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListPrinterModelsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListPrinterModelsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListPrinterModelsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Chrome$Printers$Listprintermodels;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Customers$Chrome$Printers$Listprintermodels;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/{+parent}/chrome/printers:listPrinterModels'
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
        createAPIRequest<Schema$ListPrinterModelsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListPrinterModelsResponse>(parameters);
      }
    }

    /**
     * Updates a `Printer` resource.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Customers$Chrome$Printers$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Customers$Chrome$Printers$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Printer>;
    patch(
      params: Params$Resource$Customers$Chrome$Printers$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Customers$Chrome$Printers$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Printer>,
      callback: BodyResponseCallback<Schema$Printer>
    ): void;
    patch(
      params: Params$Resource$Customers$Chrome$Printers$Patch,
      callback: BodyResponseCallback<Schema$Printer>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Printer>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Customers$Chrome$Printers$Patch
        | BodyResponseCallback<Schema$Printer>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Printer>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Printer>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Printer> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Chrome$Printers$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Chrome$Printers$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$Printer>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Printer>(parameters);
      }
    }
  }

  export interface Params$Resource$Customers$Chrome$Printers$Batchcreateprinters
    extends StandardParameters {
    /**
     * Required. The name of the customer. Format: customers/{customer_id\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchCreatePrintersRequest;
  }
  export interface Params$Resource$Customers$Chrome$Printers$Batchdeleteprinters
    extends StandardParameters {
    /**
     * Required. The name of the customer. Format: customers/{customer_id\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchDeletePrintersRequest;
  }
  export interface Params$Resource$Customers$Chrome$Printers$Create
    extends StandardParameters {
    /**
     * Required. The name of the customer. Format: customers/{customer_id\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Printer;
  }
  export interface Params$Resource$Customers$Chrome$Printers$Delete
    extends StandardParameters {
    /**
     * Required. The name of the printer to be updated. Format: customers/{customer_id\}/chrome/printers/{printer_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Customers$Chrome$Printers$Get
    extends StandardParameters {
    /**
     * Required. The name of the printer to retrieve. Format: customers/{customer_id\}/chrome/printers/{printer_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Customers$Chrome$Printers$List
    extends StandardParameters {
    /**
     * Search query. Search syntax is shared between this api and Admin Console printers pages.
     */
    filter?: string;
    /**
     * The order to sort results by. Must be one of display_name, description, make_and_model, or create_time. Default order is ascending, but descending order can be returned by appending "desc" to the order_by field. For instance, "description desc" will return the printers sorted by description in descending order.
     */
    orderBy?: string;
    /**
     * Organization Unit that we want to list the printers for. When org_unit is not present in the request then all printers of the customer are returned (or filtered). When org_unit is present in the request then only printers available to this OU will be returned (owned or inherited). You may see if printer is owned or inherited for this OU by looking at Printer.org_unit_id.
     */
    orgUnitId?: string;
    /**
     * The maximum number of objects to return. The service may return fewer than this value.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous call.
     */
    pageToken?: string;
    /**
     * Required. The name of the customer who owns this collection of printers. Format: customers/{customer_id\}
     */
    parent?: string;
  }
  export interface Params$Resource$Customers$Chrome$Printers$Listprintermodels
    extends StandardParameters {
    /**
     * Filer to list only models by a given manufacturer in format: "manufacturer:Brother". Search syntax is shared between this api and Admin Console printers pages.
     */
    filter?: string;
    /**
     * The maximum number of objects to return. The service may return fewer than this value.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous call.
     */
    pageToken?: string;
    /**
     * Required. The name of the customer who owns this collection of printers. Format: customers/{customer_id\}
     */
    parent?: string;
  }
  export interface Params$Resource$Customers$Chrome$Printers$Patch
    extends StandardParameters {
    /**
     * The list of fields to be cleared. Note, some of the fields are read only and cannot be updated. Values for not specified fields will be patched.
     */
    clearMask?: string;
    /**
     * The resource name of the Printer object, in the format customers/{customer-id\}/printers/{printer-id\} (During printer creation leave empty)
     */
    name?: string;
    /**
     * The list of fields to be updated. Note, some of the fields are read only and cannot be updated. Values for not specified fields will be patched.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Printer;
  }

  export class Resource$Customers$Chrome$Printservers {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates multiple print servers.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    batchCreatePrintServers(
      params: Params$Resource$Customers$Chrome$Printservers$Batchcreateprintservers,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchCreatePrintServers(
      params?: Params$Resource$Customers$Chrome$Printservers$Batchcreateprintservers,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BatchCreatePrintServersResponse>;
    batchCreatePrintServers(
      params: Params$Resource$Customers$Chrome$Printservers$Batchcreateprintservers,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchCreatePrintServers(
      params: Params$Resource$Customers$Chrome$Printservers$Batchcreateprintservers,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchCreatePrintServersResponse>,
      callback: BodyResponseCallback<Schema$BatchCreatePrintServersResponse>
    ): void;
    batchCreatePrintServers(
      params: Params$Resource$Customers$Chrome$Printservers$Batchcreateprintservers,
      callback: BodyResponseCallback<Schema$BatchCreatePrintServersResponse>
    ): void;
    batchCreatePrintServers(
      callback: BodyResponseCallback<Schema$BatchCreatePrintServersResponse>
    ): void;
    batchCreatePrintServers(
      paramsOrCallback?:
        | Params$Resource$Customers$Chrome$Printservers$Batchcreateprintservers
        | BodyResponseCallback<Schema$BatchCreatePrintServersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BatchCreatePrintServersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BatchCreatePrintServersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$BatchCreatePrintServersResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Chrome$Printservers$Batchcreateprintservers;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Customers$Chrome$Printservers$Batchcreateprintservers;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/{+parent}/chrome/printServers:batchCreatePrintServers'
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
        createAPIRequest<Schema$BatchCreatePrintServersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BatchCreatePrintServersResponse>(
          parameters
        );
      }
    }

    /**
     * Deletes multiple print servers.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    batchDeletePrintServers(
      params: Params$Resource$Customers$Chrome$Printservers$Batchdeleteprintservers,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchDeletePrintServers(
      params?: Params$Resource$Customers$Chrome$Printservers$Batchdeleteprintservers,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BatchDeletePrintServersResponse>;
    batchDeletePrintServers(
      params: Params$Resource$Customers$Chrome$Printservers$Batchdeleteprintservers,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchDeletePrintServers(
      params: Params$Resource$Customers$Chrome$Printservers$Batchdeleteprintservers,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchDeletePrintServersResponse>,
      callback: BodyResponseCallback<Schema$BatchDeletePrintServersResponse>
    ): void;
    batchDeletePrintServers(
      params: Params$Resource$Customers$Chrome$Printservers$Batchdeleteprintservers,
      callback: BodyResponseCallback<Schema$BatchDeletePrintServersResponse>
    ): void;
    batchDeletePrintServers(
      callback: BodyResponseCallback<Schema$BatchDeletePrintServersResponse>
    ): void;
    batchDeletePrintServers(
      paramsOrCallback?:
        | Params$Resource$Customers$Chrome$Printservers$Batchdeleteprintservers
        | BodyResponseCallback<Schema$BatchDeletePrintServersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BatchDeletePrintServersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BatchDeletePrintServersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$BatchDeletePrintServersResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Chrome$Printservers$Batchdeleteprintservers;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Customers$Chrome$Printservers$Batchdeleteprintservers;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/{+parent}/chrome/printServers:batchDeletePrintServers'
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
        createAPIRequest<Schema$BatchDeletePrintServersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BatchDeletePrintServersResponse>(
          parameters
        );
      }
    }

    /**
     * Creates a print server.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Customers$Chrome$Printservers$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Customers$Chrome$Printservers$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PrintServer>;
    create(
      params: Params$Resource$Customers$Chrome$Printservers$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Customers$Chrome$Printservers$Create,
      options: MethodOptions | BodyResponseCallback<Schema$PrintServer>,
      callback: BodyResponseCallback<Schema$PrintServer>
    ): void;
    create(
      params: Params$Resource$Customers$Chrome$Printservers$Create,
      callback: BodyResponseCallback<Schema$PrintServer>
    ): void;
    create(callback: BodyResponseCallback<Schema$PrintServer>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Customers$Chrome$Printservers$Create
        | BodyResponseCallback<Schema$PrintServer>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PrintServer>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PrintServer>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$PrintServer> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Chrome$Printservers$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Chrome$Printservers$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/admin/directory/v1/{+parent}/chrome/printServers'
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
        createAPIRequest<Schema$PrintServer>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PrintServer>(parameters);
      }
    }

    /**
     * Deletes a print server.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Customers$Chrome$Printservers$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Customers$Chrome$Printservers$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Customers$Chrome$Printservers$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Customers$Chrome$Printservers$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Customers$Chrome$Printservers$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Customers$Chrome$Printservers$Delete
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
        {}) as Params$Resource$Customers$Chrome$Printservers$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Chrome$Printservers$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
     * Returns a print server's configuration.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Customers$Chrome$Printservers$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Customers$Chrome$Printservers$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PrintServer>;
    get(
      params: Params$Resource$Customers$Chrome$Printservers$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Customers$Chrome$Printservers$Get,
      options: MethodOptions | BodyResponseCallback<Schema$PrintServer>,
      callback: BodyResponseCallback<Schema$PrintServer>
    ): void;
    get(
      params: Params$Resource$Customers$Chrome$Printservers$Get,
      callback: BodyResponseCallback<Schema$PrintServer>
    ): void;
    get(callback: BodyResponseCallback<Schema$PrintServer>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Customers$Chrome$Printservers$Get
        | BodyResponseCallback<Schema$PrintServer>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PrintServer>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PrintServer>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$PrintServer> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Chrome$Printservers$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Chrome$Printservers$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/{+name}').replace(
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
        createAPIRequest<Schema$PrintServer>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PrintServer>(parameters);
      }
    }

    /**
     * Lists print server configurations.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Customers$Chrome$Printservers$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Customers$Chrome$Printservers$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListPrintServersResponse>;
    list(
      params: Params$Resource$Customers$Chrome$Printservers$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Customers$Chrome$Printservers$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListPrintServersResponse>,
      callback: BodyResponseCallback<Schema$ListPrintServersResponse>
    ): void;
    list(
      params: Params$Resource$Customers$Chrome$Printservers$List,
      callback: BodyResponseCallback<Schema$ListPrintServersResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListPrintServersResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Customers$Chrome$Printservers$List
        | BodyResponseCallback<Schema$ListPrintServersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListPrintServersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListPrintServersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListPrintServersResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Chrome$Printservers$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Chrome$Printservers$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/admin/directory/v1/{+parent}/chrome/printServers'
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
        createAPIRequest<Schema$ListPrintServersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListPrintServersResponse>(parameters);
      }
    }

    /**
     * Updates a print server's configuration.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Customers$Chrome$Printservers$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Customers$Chrome$Printservers$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PrintServer>;
    patch(
      params: Params$Resource$Customers$Chrome$Printservers$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Customers$Chrome$Printservers$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$PrintServer>,
      callback: BodyResponseCallback<Schema$PrintServer>
    ): void;
    patch(
      params: Params$Resource$Customers$Chrome$Printservers$Patch,
      callback: BodyResponseCallback<Schema$PrintServer>
    ): void;
    patch(callback: BodyResponseCallback<Schema$PrintServer>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Customers$Chrome$Printservers$Patch
        | BodyResponseCallback<Schema$PrintServer>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PrintServer>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PrintServer>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$PrintServer> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Chrome$Printservers$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Chrome$Printservers$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$PrintServer>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PrintServer>(parameters);
      }
    }
  }

  export interface Params$Resource$Customers$Chrome$Printservers$Batchcreateprintservers
    extends StandardParameters {
    /**
     * Required. The [unique ID](https://developers.google.com/admin-sdk/directory/reference/rest/v1/customers) of the customer's Google Workspace account. Format: `customers/{id\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchCreatePrintServersRequest;
  }
  export interface Params$Resource$Customers$Chrome$Printservers$Batchdeleteprintservers
    extends StandardParameters {
    /**
     * Required. The [unique ID](https://developers.google.com/admin-sdk/directory/reference/rest/v1/customers) of the customer's Google Workspace account. Format: `customers/{customer.id\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchDeletePrintServersRequest;
  }
  export interface Params$Resource$Customers$Chrome$Printservers$Create
    extends StandardParameters {
    /**
     * Required. The [unique ID](https://developers.google.com/admin-sdk/directory/reference/rest/v1/customers) of the customer's Google Workspace account. Format: `customers/{id\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PrintServer;
  }
  export interface Params$Resource$Customers$Chrome$Printservers$Delete
    extends StandardParameters {
    /**
     * Required. The name of the print server to be deleted. Format: `customers/{customer.id\}/chrome/printServers/{print_server.id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Customers$Chrome$Printservers$Get
    extends StandardParameters {
    /**
     * Required. The [unique ID](https://developers.google.com/admin-sdk/directory/reference/rest/v1/customers) of the customer's Google Workspace account. Format: `customers/{id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Customers$Chrome$Printservers$List
    extends StandardParameters {
    /**
     * Search query in [Common Expression Language syntax](https://github.com/google/cel-spec). Supported filters are `display_name`, `description`, and `uri`. Example: `printServer.displayName=='marketing-queue'`.
     */
    filter?: string;
    /**
     * Sort order for results. Supported values are `display_name`, `description`, or `create_time`. Default order is ascending, but descending order can be returned by appending "desc" to the `order_by` field. For instance, `orderBy=='description desc'` returns the print servers sorted by description in descending order.
     */
    orderBy?: string;
    /**
     * If `org_unit_id` is present in the request, only print servers owned or inherited by the organizational unit (OU) are returned. If the `PrintServer` resource's `org_unit_id` matches the one in the request, the OU owns the server. If `org_unit_id` is not specified in the request, all print servers are returned or filtered against.
     */
    orgUnitId?: string;
    /**
     * The maximum number of objects to return (default `100`, max `100`). The service might return fewer than this value.
     */
    pageSize?: number;
    /**
     * A generated token to paginate results (the `next_page_token` from a previous call).
     */
    pageToken?: string;
    /**
     * Required. The [unique ID](https://developers.google.com/admin-sdk/directory/reference/rest/v1/customers) of the customer's Google Workspace account. Format: `customers/{id\}`
     */
    parent?: string;
  }
  export interface Params$Resource$Customers$Chrome$Printservers$Patch
    extends StandardParameters {
    /**
     * Immutable. Resource name of the print server. Leave empty when creating. Format: `customers/{customer.id\}/printServers/{print_server.id\}`
     */
    name?: string;
    /**
     * The list of fields to update. Some fields are read-only and cannot be updated. Values for unspecified fields are patched.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PrintServer;
  }

  export class Resource$Domainaliases {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a domain Alias of the customer.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Domainaliases$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Domainaliases$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Domainaliases$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Domainaliases$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Domainaliases$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Domainaliases$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Domainaliases$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Domainaliases$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/customer/{customer}/domainaliases/{domainAliasName}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['customer', 'domainAliasName'],
        pathParams: ['customer', 'domainAliasName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Retrieves a domain alias of the customer.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Domainaliases$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Domainaliases$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DomainAlias>;
    get(
      params: Params$Resource$Domainaliases$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Domainaliases$Get,
      options: MethodOptions | BodyResponseCallback<Schema$DomainAlias>,
      callback: BodyResponseCallback<Schema$DomainAlias>
    ): void;
    get(
      params: Params$Resource$Domainaliases$Get,
      callback: BodyResponseCallback<Schema$DomainAlias>
    ): void;
    get(callback: BodyResponseCallback<Schema$DomainAlias>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Domainaliases$Get
        | BodyResponseCallback<Schema$DomainAlias>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DomainAlias>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DomainAlias>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$DomainAlias> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Domainaliases$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Domainaliases$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/customer/{customer}/domainaliases/{domainAliasName}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['customer', 'domainAliasName'],
        pathParams: ['customer', 'domainAliasName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DomainAlias>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DomainAlias>(parameters);
      }
    }

    /**
     * Inserts a domain alias of the customer.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Domainaliases$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Domainaliases$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DomainAlias>;
    insert(
      params: Params$Resource$Domainaliases$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Domainaliases$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$DomainAlias>,
      callback: BodyResponseCallback<Schema$DomainAlias>
    ): void;
    insert(
      params: Params$Resource$Domainaliases$Insert,
      callback: BodyResponseCallback<Schema$DomainAlias>
    ): void;
    insert(callback: BodyResponseCallback<Schema$DomainAlias>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Domainaliases$Insert
        | BodyResponseCallback<Schema$DomainAlias>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DomainAlias>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DomainAlias>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$DomainAlias> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Domainaliases$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Domainaliases$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/admin/directory/v1/customer/{customer}/domainaliases'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['customer'],
        pathParams: ['customer'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DomainAlias>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DomainAlias>(parameters);
      }
    }

    /**
     * Lists the domain aliases of the customer.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Domainaliases$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Domainaliases$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DomainAliases>;
    list(
      params: Params$Resource$Domainaliases$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Domainaliases$List,
      options: MethodOptions | BodyResponseCallback<Schema$DomainAliases>,
      callback: BodyResponseCallback<Schema$DomainAliases>
    ): void;
    list(
      params: Params$Resource$Domainaliases$List,
      callback: BodyResponseCallback<Schema$DomainAliases>
    ): void;
    list(callback: BodyResponseCallback<Schema$DomainAliases>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Domainaliases$List
        | BodyResponseCallback<Schema$DomainAliases>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DomainAliases>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DomainAliases>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$DomainAliases> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Domainaliases$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Domainaliases$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/admin/directory/v1/customer/{customer}/domainaliases'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['customer'],
        pathParams: ['customer'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DomainAliases>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DomainAliases>(parameters);
      }
    }
  }

  export interface Params$Resource$Domainaliases$Delete
    extends StandardParameters {
    /**
     * Immutable ID of the Google Workspace account.
     */
    customer?: string;
    /**
     * Name of domain alias to be retrieved.
     */
    domainAliasName?: string;
  }
  export interface Params$Resource$Domainaliases$Get
    extends StandardParameters {
    /**
     * The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
     */
    customer?: string;
    /**
     * Name of domain alias to be retrieved.
     */
    domainAliasName?: string;
  }
  export interface Params$Resource$Domainaliases$Insert
    extends StandardParameters {
    /**
     * Immutable ID of the Google Workspace account.
     */
    customer?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DomainAlias;
  }
  export interface Params$Resource$Domainaliases$List
    extends StandardParameters {
    /**
     * The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
     */
    customer?: string;
    /**
     * Name of the parent domain for which domain aliases are to be fetched.
     */
    parentDomainName?: string;
  }

  export class Resource$Domains {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a domain of the customer.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Domains$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Domains$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Domains$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Domains$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Domains$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Domains$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Domains$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Domains$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/customer/{customer}/domains/{domainName}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['customer', 'domainName'],
        pathParams: ['customer', 'domainName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Retrieves a domain of the customer.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Domains$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Domains$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Domains>;
    get(
      params: Params$Resource$Domains$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Domains$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Domains>,
      callback: BodyResponseCallback<Schema$Domains>
    ): void;
    get(
      params: Params$Resource$Domains$Get,
      callback: BodyResponseCallback<Schema$Domains>
    ): void;
    get(callback: BodyResponseCallback<Schema$Domains>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Domains$Get
        | BodyResponseCallback<Schema$Domains>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Domains>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Domains>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Domains> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Domains$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Domains$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/customer/{customer}/domains/{domainName}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['customer', 'domainName'],
        pathParams: ['customer', 'domainName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Domains>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Domains>(parameters);
      }
    }

    /**
     * Inserts a domain of the customer.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Domains$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Domains$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Domains>;
    insert(
      params: Params$Resource$Domains$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Domains$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Domains>,
      callback: BodyResponseCallback<Schema$Domains>
    ): void;
    insert(
      params: Params$Resource$Domains$Insert,
      callback: BodyResponseCallback<Schema$Domains>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Domains>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Domains$Insert
        | BodyResponseCallback<Schema$Domains>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Domains>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Domains>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Domains> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Domains$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Domains$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/admin/directory/v1/customer/{customer}/domains'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['customer'],
        pathParams: ['customer'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Domains>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Domains>(parameters);
      }
    }

    /**
     * Lists the domains of the customer.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Domains$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Domains$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Domains2>;
    list(
      params: Params$Resource$Domains$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Domains$List,
      options: MethodOptions | BodyResponseCallback<Schema$Domains2>,
      callback: BodyResponseCallback<Schema$Domains2>
    ): void;
    list(
      params: Params$Resource$Domains$List,
      callback: BodyResponseCallback<Schema$Domains2>
    ): void;
    list(callback: BodyResponseCallback<Schema$Domains2>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Domains$List
        | BodyResponseCallback<Schema$Domains2>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Domains2>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Domains2>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Domains2> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Domains$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Domains$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/admin/directory/v1/customer/{customer}/domains'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['customer'],
        pathParams: ['customer'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Domains2>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Domains2>(parameters);
      }
    }
  }

  export interface Params$Resource$Domains$Delete extends StandardParameters {
    /**
     * Immutable ID of the Google Workspace account.
     */
    customer?: string;
    /**
     * Name of domain to be deleted
     */
    domainName?: string;
  }
  export interface Params$Resource$Domains$Get extends StandardParameters {
    /**
     * The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
     */
    customer?: string;
    /**
     * Name of domain to be retrieved
     */
    domainName?: string;
  }
  export interface Params$Resource$Domains$Insert extends StandardParameters {
    /**
     * Immutable ID of the Google Workspace account.
     */
    customer?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Domains;
  }
  export interface Params$Resource$Domains$List extends StandardParameters {
    /**
     * The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
     */
    customer?: string;
  }

  export class Resource$Groups {
    context: APIRequestContext;
    aliases: Resource$Groups$Aliases;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.aliases = new Resource$Groups$Aliases(this.context);
    }

    /**
     * Deletes a group.
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
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Groups$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Groups$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Groups$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Groups$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/groups/{groupKey}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['groupKey'],
        pathParams: ['groupKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Retrieves a group's properties.
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

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/groups/{groupKey}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['groupKey'],
        pathParams: ['groupKey'],
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
     * Creates a group.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Groups$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Groups$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Group>;
    insert(
      params: Params$Resource$Groups$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Groups$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Group>,
      callback: BodyResponseCallback<Schema$Group>
    ): void;
    insert(
      params: Params$Resource$Groups$Insert,
      callback: BodyResponseCallback<Schema$Group>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Group>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Groups$Insert
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
      let params = (paramsOrCallback || {}) as Params$Resource$Groups$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/groups').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$Group>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Group>(parameters);
      }
    }

    /**
     * Retrieves all groups of a domain or of a user given a userKey (paginated).
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
    ): GaxiosPromise<Schema$Groups>;
    list(
      params: Params$Resource$Groups$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Groups$List,
      options: MethodOptions | BodyResponseCallback<Schema$Groups>,
      callback: BodyResponseCallback<Schema$Groups>
    ): void;
    list(
      params: Params$Resource$Groups$List,
      callback: BodyResponseCallback<Schema$Groups>
    ): void;
    list(callback: BodyResponseCallback<Schema$Groups>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Groups$List
        | BodyResponseCallback<Schema$Groups>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Groups>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Groups>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Groups> | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/groups').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$Groups>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Groups>(parameters);
      }
    }

    /**
     * Updates a group's properties. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
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
    ): GaxiosPromise<Schema$Group>;
    patch(
      params: Params$Resource$Groups$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Groups$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Group>,
      callback: BodyResponseCallback<Schema$Group>
    ): void;
    patch(
      params: Params$Resource$Groups$Patch,
      callback: BodyResponseCallback<Schema$Group>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Group>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Groups$Patch
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

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/groups/{groupKey}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['groupKey'],
        pathParams: ['groupKey'],
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
     * Updates a group's properties.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Groups$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Groups$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Group>;
    update(
      params: Params$Resource$Groups$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Groups$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Group>,
      callback: BodyResponseCallback<Schema$Group>
    ): void;
    update(
      params: Params$Resource$Groups$Update,
      callback: BodyResponseCallback<Schema$Group>
    ): void;
    update(callback: BodyResponseCallback<Schema$Group>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Groups$Update
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
      let params = (paramsOrCallback || {}) as Params$Resource$Groups$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/groups/{groupKey}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['groupKey'],
        pathParams: ['groupKey'],
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
  }

  export interface Params$Resource$Groups$Delete extends StandardParameters {
    /**
     * Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
     */
    groupKey?: string;
  }
  export interface Params$Resource$Groups$Get extends StandardParameters {
    /**
     * Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
     */
    groupKey?: string;
  }
  export interface Params$Resource$Groups$Insert extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$Group;
  }
  export interface Params$Resource$Groups$List extends StandardParameters {
    /**
     * The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
     */
    customer?: string;
    /**
     * The domain name. Use this field to get groups from only one domain. To return all domains for a customer account, use the `customer` query parameter instead.
     */
    domain?: string;
    /**
     * Maximum number of results to return. Max allowed value is 200.
     */
    maxResults?: number;
    /**
     * Column to use for sorting results
     */
    orderBy?: string;
    /**
     * Token to specify next page in the list
     */
    pageToken?: string;
    /**
     * Query string search. Should be of the form "". Complete documentation is at https: //developers.google.com/admin-sdk/directory/v1/guides/search-groups
     */
    query?: string;
    /**
     * Whether to return results in ascending or descending order. Only of use when orderBy is also used
     */
    sortOrder?: string;
    /**
     * Email or immutable ID of the user if only those groups are to be listed, the given user is a member of. If it's an ID, it should match with the ID of the user object.
     */
    userKey?: string;
  }
  export interface Params$Resource$Groups$Patch extends StandardParameters {
    /**
     * Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
     */
    groupKey?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Group;
  }
  export interface Params$Resource$Groups$Update extends StandardParameters {
    /**
     * Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
     */
    groupKey?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Group;
  }

  export class Resource$Groups$Aliases {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Removes an alias.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Groups$Aliases$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Groups$Aliases$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Groups$Aliases$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Groups$Aliases$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Groups$Aliases$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Groups$Aliases$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Groups$Aliases$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Aliases$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/admin/directory/v1/groups/{groupKey}/aliases/{alias}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['groupKey', 'alias'],
        pathParams: ['alias', 'groupKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Adds an alias for the group.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Groups$Aliases$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Groups$Aliases$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Alias>;
    insert(
      params: Params$Resource$Groups$Aliases$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Groups$Aliases$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Alias>,
      callback: BodyResponseCallback<Schema$Alias>
    ): void;
    insert(
      params: Params$Resource$Groups$Aliases$Insert,
      callback: BodyResponseCallback<Schema$Alias>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Alias>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Groups$Aliases$Insert
        | BodyResponseCallback<Schema$Alias>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Alias>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Alias>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Alias> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Groups$Aliases$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Aliases$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/admin/directory/v1/groups/{groupKey}/aliases'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['groupKey'],
        pathParams: ['groupKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Alias>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Alias>(parameters);
      }
    }

    /**
     * Lists all aliases for a group.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Groups$Aliases$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Groups$Aliases$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Aliases>;
    list(
      params: Params$Resource$Groups$Aliases$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Groups$Aliases$List,
      options: MethodOptions | BodyResponseCallback<Schema$Aliases>,
      callback: BodyResponseCallback<Schema$Aliases>
    ): void;
    list(
      params: Params$Resource$Groups$Aliases$List,
      callback: BodyResponseCallback<Schema$Aliases>
    ): void;
    list(callback: BodyResponseCallback<Schema$Aliases>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Groups$Aliases$List
        | BodyResponseCallback<Schema$Aliases>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Aliases>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Aliases>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Aliases> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Groups$Aliases$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Aliases$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/admin/directory/v1/groups/{groupKey}/aliases'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['groupKey'],
        pathParams: ['groupKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Aliases>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Aliases>(parameters);
      }
    }
  }

  export interface Params$Resource$Groups$Aliases$Delete
    extends StandardParameters {
    /**
     * The alias to be removed
     */
    alias?: string;
    /**
     * Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
     */
    groupKey?: string;
  }
  export interface Params$Resource$Groups$Aliases$Insert
    extends StandardParameters {
    /**
     * Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
     */
    groupKey?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Alias;
  }
  export interface Params$Resource$Groups$Aliases$List
    extends StandardParameters {
    /**
     * Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
     */
    groupKey?: string;
  }

  export class Resource$Members {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Removes a member from a group.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Members$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Members$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Members$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Members$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Members$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Members$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Members$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Members$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/groups/{groupKey}/members/{memberKey}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['groupKey', 'memberKey'],
        pathParams: ['groupKey', 'memberKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Retrieves a group member's properties.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Members$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Members$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Member>;
    get(
      params: Params$Resource$Members$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Members$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Member>,
      callback: BodyResponseCallback<Schema$Member>
    ): void;
    get(
      params: Params$Resource$Members$Get,
      callback: BodyResponseCallback<Schema$Member>
    ): void;
    get(callback: BodyResponseCallback<Schema$Member>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Members$Get
        | BodyResponseCallback<Schema$Member>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Member>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Member>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Member> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Members$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Members$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/groups/{groupKey}/members/{memberKey}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['groupKey', 'memberKey'],
        pathParams: ['groupKey', 'memberKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Member>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Member>(parameters);
      }
    }

    /**
     * Checks whether the given user is a member of the group. Membership can be direct or nested, but if nested, the `memberKey` and `groupKey` must be entities in the same domain or an `Invalid input` error is returned. To check for nested memberships that include entities outside of the group's domain, use the [`checkTransitiveMembership()`](https://cloud.google.com/identity/docs/reference/rest/v1/groups.memberships/checkTransitiveMembership) method in the Cloud Identity Groups API.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    hasMember(
      params: Params$Resource$Members$Hasmember,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    hasMember(
      params?: Params$Resource$Members$Hasmember,
      options?: MethodOptions
    ): GaxiosPromise<Schema$MembersHasMember>;
    hasMember(
      params: Params$Resource$Members$Hasmember,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    hasMember(
      params: Params$Resource$Members$Hasmember,
      options: MethodOptions | BodyResponseCallback<Schema$MembersHasMember>,
      callback: BodyResponseCallback<Schema$MembersHasMember>
    ): void;
    hasMember(
      params: Params$Resource$Members$Hasmember,
      callback: BodyResponseCallback<Schema$MembersHasMember>
    ): void;
    hasMember(callback: BodyResponseCallback<Schema$MembersHasMember>): void;
    hasMember(
      paramsOrCallback?:
        | Params$Resource$Members$Hasmember
        | BodyResponseCallback<Schema$MembersHasMember>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$MembersHasMember>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$MembersHasMember>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$MembersHasMember> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Members$Hasmember;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Members$Hasmember;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/groups/{groupKey}/hasMember/{memberKey}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['groupKey', 'memberKey'],
        pathParams: ['groupKey', 'memberKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$MembersHasMember>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$MembersHasMember>(parameters);
      }
    }

    /**
     * Adds a user to the specified group.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Members$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Members$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Member>;
    insert(
      params: Params$Resource$Members$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Members$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Member>,
      callback: BodyResponseCallback<Schema$Member>
    ): void;
    insert(
      params: Params$Resource$Members$Insert,
      callback: BodyResponseCallback<Schema$Member>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Member>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Members$Insert
        | BodyResponseCallback<Schema$Member>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Member>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Member>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Member> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Members$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Members$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/admin/directory/v1/groups/{groupKey}/members'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['groupKey'],
        pathParams: ['groupKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Member>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Member>(parameters);
      }
    }

    /**
     * Retrieves a paginated list of all members in a group. This method times out after 60 minutes. For more information, see [Troubleshoot error codes](https://developers.google.com/admin-sdk/directory/v1/guides/troubleshoot-error-codes).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Members$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Members$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Members>;
    list(
      params: Params$Resource$Members$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Members$List,
      options: MethodOptions | BodyResponseCallback<Schema$Members>,
      callback: BodyResponseCallback<Schema$Members>
    ): void;
    list(
      params: Params$Resource$Members$List,
      callback: BodyResponseCallback<Schema$Members>
    ): void;
    list(callback: BodyResponseCallback<Schema$Members>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Members$List
        | BodyResponseCallback<Schema$Members>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Members>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Members>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Members> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Members$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Members$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/admin/directory/v1/groups/{groupKey}/members'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['groupKey'],
        pathParams: ['groupKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Members>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Members>(parameters);
      }
    }

    /**
     * Updates the membership properties of a user in the specified group. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Members$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Members$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Member>;
    patch(
      params: Params$Resource$Members$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Members$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Member>,
      callback: BodyResponseCallback<Schema$Member>
    ): void;
    patch(
      params: Params$Resource$Members$Patch,
      callback: BodyResponseCallback<Schema$Member>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Member>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Members$Patch
        | BodyResponseCallback<Schema$Member>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Member>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Member>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Member> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Members$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Members$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/groups/{groupKey}/members/{memberKey}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['groupKey', 'memberKey'],
        pathParams: ['groupKey', 'memberKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Member>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Member>(parameters);
      }
    }

    /**
     * Updates the membership of a user in the specified group.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Members$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Members$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Member>;
    update(
      params: Params$Resource$Members$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Members$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Member>,
      callback: BodyResponseCallback<Schema$Member>
    ): void;
    update(
      params: Params$Resource$Members$Update,
      callback: BodyResponseCallback<Schema$Member>
    ): void;
    update(callback: BodyResponseCallback<Schema$Member>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Members$Update
        | BodyResponseCallback<Schema$Member>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Member>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Member>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Member> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Members$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Members$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/groups/{groupKey}/members/{memberKey}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['groupKey', 'memberKey'],
        pathParams: ['groupKey', 'memberKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Member>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Member>(parameters);
      }
    }
  }

  export interface Params$Resource$Members$Delete extends StandardParameters {
    /**
     * Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
     */
    groupKey?: string;
    /**
     * Identifies the group member in the API request. A group member can be a user or another group. The value can be the member's (group or user) primary email address, alias, or unique ID.
     */
    memberKey?: string;
  }
  export interface Params$Resource$Members$Get extends StandardParameters {
    /**
     * Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
     */
    groupKey?: string;
    /**
     * Identifies the group member in the API request. A group member can be a user or another group. The value can be the member's (group or user) primary email address, alias, or unique ID.
     */
    memberKey?: string;
  }
  export interface Params$Resource$Members$Hasmember
    extends StandardParameters {
    /**
     * Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
     */
    groupKey?: string;
    /**
     * Identifies the user member in the API request. The value can be the user's primary email address, alias, or unique ID.
     */
    memberKey?: string;
  }
  export interface Params$Resource$Members$Insert extends StandardParameters {
    /**
     * Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
     */
    groupKey?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Member;
  }
  export interface Params$Resource$Members$List extends StandardParameters {
    /**
     * Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
     */
    groupKey?: string;
    /**
     * Whether to list indirect memberships. Default: false.
     */
    includeDerivedMembership?: boolean;
    /**
     * Maximum number of results to return. Max allowed value is 200.
     */
    maxResults?: number;
    /**
     * Token to specify next page in the list.
     */
    pageToken?: string;
    /**
     * The `roles` query parameter allows you to retrieve group members by role. Allowed values are `OWNER`, `MANAGER`, and `MEMBER`.
     */
    roles?: string;
  }
  export interface Params$Resource$Members$Patch extends StandardParameters {
    /**
     * Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
     */
    groupKey?: string;
    /**
     * Identifies the group member in the API request. A group member can be a user or another group. The value can be the member's (group or user) primary email address, alias, or unique ID.
     */
    memberKey?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Member;
  }
  export interface Params$Resource$Members$Update extends StandardParameters {
    /**
     * Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
     */
    groupKey?: string;
    /**
     * Identifies the group member in the API request. A group member can be a user or another group. The value can be the member's (group or user) primary email address, alias, or unique ID.
     */
    memberKey?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Member;
  }

  export class Resource$Mobiledevices {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Takes an action that affects a mobile device. For example, remotely wiping a device.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    action(
      params: Params$Resource$Mobiledevices$Action,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    action(
      params?: Params$Resource$Mobiledevices$Action,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    action(
      params: Params$Resource$Mobiledevices$Action,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    action(
      params: Params$Resource$Mobiledevices$Action,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    action(
      params: Params$Resource$Mobiledevices$Action,
      callback: BodyResponseCallback<void>
    ): void;
    action(callback: BodyResponseCallback<void>): void;
    action(
      paramsOrCallback?:
        | Params$Resource$Mobiledevices$Action
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Mobiledevices$Action;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Mobiledevices$Action;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}/action'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['customerId', 'resourceId'],
        pathParams: ['customerId', 'resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Removes a mobile device.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Mobiledevices$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Mobiledevices$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Mobiledevices$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Mobiledevices$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Mobiledevices$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Mobiledevices$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Mobiledevices$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Mobiledevices$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['customerId', 'resourceId'],
        pathParams: ['customerId', 'resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Retrieves a mobile device's properties.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Mobiledevices$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Mobiledevices$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$MobileDevice>;
    get(
      params: Params$Resource$Mobiledevices$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Mobiledevices$Get,
      options: MethodOptions | BodyResponseCallback<Schema$MobileDevice>,
      callback: BodyResponseCallback<Schema$MobileDevice>
    ): void;
    get(
      params: Params$Resource$Mobiledevices$Get,
      callback: BodyResponseCallback<Schema$MobileDevice>
    ): void;
    get(callback: BodyResponseCallback<Schema$MobileDevice>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Mobiledevices$Get
        | BodyResponseCallback<Schema$MobileDevice>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$MobileDevice>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$MobileDevice>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$MobileDevice> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Mobiledevices$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Mobiledevices$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['customerId', 'resourceId'],
        pathParams: ['customerId', 'resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$MobileDevice>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$MobileDevice>(parameters);
      }
    }

    /**
     * Retrieves a paginated list of all user-owned mobile devices for an account. To retrieve a list that includes company-owned devices, use the Cloud Identity [Devices API](https://cloud.google.com/identity/docs/concepts/overview-devices) instead. This method times out after 60 minutes. For more information, see [Troubleshoot error codes](https://developers.google.com/admin-sdk/directory/v1/guides/troubleshoot-error-codes).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Mobiledevices$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Mobiledevices$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$MobileDevices>;
    list(
      params: Params$Resource$Mobiledevices$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Mobiledevices$List,
      options: MethodOptions | BodyResponseCallback<Schema$MobileDevices>,
      callback: BodyResponseCallback<Schema$MobileDevices>
    ): void;
    list(
      params: Params$Resource$Mobiledevices$List,
      callback: BodyResponseCallback<Schema$MobileDevices>
    ): void;
    list(callback: BodyResponseCallback<Schema$MobileDevices>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Mobiledevices$List
        | BodyResponseCallback<Schema$MobileDevices>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$MobileDevices>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$MobileDevices>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$MobileDevices> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Mobiledevices$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Mobiledevices$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/customer/{customerId}/devices/mobile'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['customerId'],
        pathParams: ['customerId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$MobileDevices>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$MobileDevices>(parameters);
      }
    }
  }

  export interface Params$Resource$Mobiledevices$Action
    extends StandardParameters {
    /**
     * The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).
     */
    customerId?: string;
    /**
     * The unique ID the API service uses to identify the mobile device.
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$MobileDeviceAction;
  }
  export interface Params$Resource$Mobiledevices$Delete
    extends StandardParameters {
    /**
     * The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).
     */
    customerId?: string;
    /**
     * The unique ID the API service uses to identify the mobile device.
     */
    resourceId?: string;
  }
  export interface Params$Resource$Mobiledevices$Get
    extends StandardParameters {
    /**
     * The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).
     */
    customerId?: string;
    /**
     * Restrict information returned to a set of selected fields.
     */
    projection?: string;
    /**
     * The unique ID the API service uses to identify the mobile device.
     */
    resourceId?: string;
  }
  export interface Params$Resource$Mobiledevices$List
    extends StandardParameters {
    /**
     * The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).
     */
    customerId?: string;
    /**
     * Maximum number of results to return. Max allowed value is 100.
     */
    maxResults?: number;
    /**
     * Device property to use for sorting results.
     */
    orderBy?: string;
    /**
     * Token to specify next page in the list
     */
    pageToken?: string;
    /**
     * Restrict information returned to a set of selected fields.
     */
    projection?: string;
    /**
     * Search string in the format given at https://developers.google.com/admin-sdk/directory/v1/search-operators
     */
    query?: string;
    /**
     * Whether to return results in ascending or descending order. Must be used with the `orderBy` parameter.
     */
    sortOrder?: string;
  }

  export class Resource$Orgunits {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Removes an organizational unit.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Orgunits$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Orgunits$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Orgunits$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Orgunits$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Orgunits$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Orgunits$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Orgunits$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Orgunits$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/customer/{customerId}/orgunits/{+orgUnitPath}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['customerId', 'orgUnitPath'],
        pathParams: ['customerId', 'orgUnitPath'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Retrieves an organizational unit.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Orgunits$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Orgunits$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OrgUnit>;
    get(
      params: Params$Resource$Orgunits$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Orgunits$Get,
      options: MethodOptions | BodyResponseCallback<Schema$OrgUnit>,
      callback: BodyResponseCallback<Schema$OrgUnit>
    ): void;
    get(
      params: Params$Resource$Orgunits$Get,
      callback: BodyResponseCallback<Schema$OrgUnit>
    ): void;
    get(callback: BodyResponseCallback<Schema$OrgUnit>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Orgunits$Get
        | BodyResponseCallback<Schema$OrgUnit>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OrgUnit>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OrgUnit>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$OrgUnit> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Orgunits$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Orgunits$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/customer/{customerId}/orgunits/{+orgUnitPath}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['customerId', 'orgUnitPath'],
        pathParams: ['customerId', 'orgUnitPath'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OrgUnit>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$OrgUnit>(parameters);
      }
    }

    /**
     * Adds an organizational unit.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Orgunits$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Orgunits$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OrgUnit>;
    insert(
      params: Params$Resource$Orgunits$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Orgunits$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$OrgUnit>,
      callback: BodyResponseCallback<Schema$OrgUnit>
    ): void;
    insert(
      params: Params$Resource$Orgunits$Insert,
      callback: BodyResponseCallback<Schema$OrgUnit>
    ): void;
    insert(callback: BodyResponseCallback<Schema$OrgUnit>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Orgunits$Insert
        | BodyResponseCallback<Schema$OrgUnit>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OrgUnit>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OrgUnit>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$OrgUnit> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Orgunits$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Orgunits$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/admin/directory/v1/customer/{customerId}/orgunits'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['customerId'],
        pathParams: ['customerId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OrgUnit>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$OrgUnit>(parameters);
      }
    }

    /**
     * Retrieves a list of all organizational units for an account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Orgunits$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Orgunits$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OrgUnits>;
    list(
      params: Params$Resource$Orgunits$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Orgunits$List,
      options: MethodOptions | BodyResponseCallback<Schema$OrgUnits>,
      callback: BodyResponseCallback<Schema$OrgUnits>
    ): void;
    list(
      params: Params$Resource$Orgunits$List,
      callback: BodyResponseCallback<Schema$OrgUnits>
    ): void;
    list(callback: BodyResponseCallback<Schema$OrgUnits>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Orgunits$List
        | BodyResponseCallback<Schema$OrgUnits>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OrgUnits>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OrgUnits>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$OrgUnits> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Orgunits$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Orgunits$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/admin/directory/v1/customer/{customerId}/orgunits'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['customerId'],
        pathParams: ['customerId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OrgUnits>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$OrgUnits>(parameters);
      }
    }

    /**
     * Updates an organizational unit. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch)
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Orgunits$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Orgunits$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OrgUnit>;
    patch(
      params: Params$Resource$Orgunits$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Orgunits$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$OrgUnit>,
      callback: BodyResponseCallback<Schema$OrgUnit>
    ): void;
    patch(
      params: Params$Resource$Orgunits$Patch,
      callback: BodyResponseCallback<Schema$OrgUnit>
    ): void;
    patch(callback: BodyResponseCallback<Schema$OrgUnit>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Orgunits$Patch
        | BodyResponseCallback<Schema$OrgUnit>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OrgUnit>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OrgUnit>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$OrgUnit> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Orgunits$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Orgunits$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/customer/{customerId}/orgunits/{+orgUnitPath}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['customerId', 'orgUnitPath'],
        pathParams: ['customerId', 'orgUnitPath'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OrgUnit>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$OrgUnit>(parameters);
      }
    }

    /**
     * Updates an organizational unit.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Orgunits$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Orgunits$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OrgUnit>;
    update(
      params: Params$Resource$Orgunits$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Orgunits$Update,
      options: MethodOptions | BodyResponseCallback<Schema$OrgUnit>,
      callback: BodyResponseCallback<Schema$OrgUnit>
    ): void;
    update(
      params: Params$Resource$Orgunits$Update,
      callback: BodyResponseCallback<Schema$OrgUnit>
    ): void;
    update(callback: BodyResponseCallback<Schema$OrgUnit>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Orgunits$Update
        | BodyResponseCallback<Schema$OrgUnit>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OrgUnit>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OrgUnit>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$OrgUnit> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Orgunits$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Orgunits$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/customer/{customerId}/orgunits/{+orgUnitPath}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['customerId', 'orgUnitPath'],
        pathParams: ['customerId', 'orgUnitPath'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OrgUnit>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$OrgUnit>(parameters);
      }
    }
  }

  export interface Params$Resource$Orgunits$Delete extends StandardParameters {
    /**
     * The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).
     */
    customerId?: string;
    /**
     * The full path of the organizational unit (minus the leading `/`) or its unique ID.
     */
    orgUnitPath?: string;
  }
  export interface Params$Resource$Orgunits$Get extends StandardParameters {
    /**
     * The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).
     */
    customerId?: string;
    /**
     * The full path of the organizational unit (minus the leading `/`) or its unique ID.
     */
    orgUnitPath?: string;
  }
  export interface Params$Resource$Orgunits$Insert extends StandardParameters {
    /**
     * The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).
     */
    customerId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$OrgUnit;
  }
  export interface Params$Resource$Orgunits$List extends StandardParameters {
    /**
     * The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).
     */
    customerId?: string;
    /**
     * The full path to the organizational unit or its unique ID. Returns the children of the specified organizational unit.
     */
    orgUnitPath?: string;
    /**
     * Whether to return all sub-organizations or just immediate children.
     */
    type?: string;
  }
  export interface Params$Resource$Orgunits$Patch extends StandardParameters {
    /**
     * The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).
     */
    customerId?: string;
    /**
     * The full path of the organizational unit (minus the leading `/`) or its unique ID.
     */
    orgUnitPath?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$OrgUnit;
  }
  export interface Params$Resource$Orgunits$Update extends StandardParameters {
    /**
     * The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).
     */
    customerId?: string;
    /**
     * The full path of the organizational unit (minus the leading `/`) or its unique ID.
     */
    orgUnitPath?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$OrgUnit;
  }

  export class Resource$Privileges {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves a paginated list of all privileges for a customer.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Privileges$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Privileges$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Privileges>;
    list(
      params: Params$Resource$Privileges$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Privileges$List,
      options: MethodOptions | BodyResponseCallback<Schema$Privileges>,
      callback: BodyResponseCallback<Schema$Privileges>
    ): void;
    list(
      params: Params$Resource$Privileges$List,
      callback: BodyResponseCallback<Schema$Privileges>
    ): void;
    list(callback: BodyResponseCallback<Schema$Privileges>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Privileges$List
        | BodyResponseCallback<Schema$Privileges>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Privileges>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Privileges>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Privileges> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Privileges$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Privileges$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/customer/{customer}/roles/ALL/privileges'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['customer'],
        pathParams: ['customer'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Privileges>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Privileges>(parameters);
      }
    }
  }

  export interface Params$Resource$Privileges$List extends StandardParameters {
    /**
     * The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
     */
    customer?: string;
  }

  export class Resource$Resources {
    context: APIRequestContext;
    buildings: Resource$Resources$Buildings;
    calendars: Resource$Resources$Calendars;
    features: Resource$Resources$Features;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.buildings = new Resource$Resources$Buildings(this.context);
      this.calendars = new Resource$Resources$Calendars(this.context);
      this.features = new Resource$Resources$Features(this.context);
    }
  }

  export class Resource$Resources$Buildings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a building.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Resources$Buildings$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Resources$Buildings$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Resources$Buildings$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Resources$Buildings$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Resources$Buildings$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Resources$Buildings$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Resources$Buildings$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Resources$Buildings$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['customer', 'buildingId'],
        pathParams: ['buildingId', 'customer'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Retrieves a building.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Resources$Buildings$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Resources$Buildings$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Building>;
    get(
      params: Params$Resource$Resources$Buildings$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Resources$Buildings$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Building>,
      callback: BodyResponseCallback<Schema$Building>
    ): void;
    get(
      params: Params$Resource$Resources$Buildings$Get,
      callback: BodyResponseCallback<Schema$Building>
    ): void;
    get(callback: BodyResponseCallback<Schema$Building>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Resources$Buildings$Get
        | BodyResponseCallback<Schema$Building>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Building>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Building>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Building> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Resources$Buildings$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Resources$Buildings$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['customer', 'buildingId'],
        pathParams: ['buildingId', 'customer'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Building>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Building>(parameters);
      }
    }

    /**
     * Inserts a building.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Resources$Buildings$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Resources$Buildings$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Building>;
    insert(
      params: Params$Resource$Resources$Buildings$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Resources$Buildings$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Building>,
      callback: BodyResponseCallback<Schema$Building>
    ): void;
    insert(
      params: Params$Resource$Resources$Buildings$Insert,
      callback: BodyResponseCallback<Schema$Building>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Building>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Resources$Buildings$Insert
        | BodyResponseCallback<Schema$Building>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Building>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Building>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Building> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Resources$Buildings$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Resources$Buildings$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/customer/{customer}/resources/buildings'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['customer'],
        pathParams: ['customer'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Building>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Building>(parameters);
      }
    }

    /**
     * Retrieves a list of buildings for an account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Resources$Buildings$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Resources$Buildings$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Buildings>;
    list(
      params: Params$Resource$Resources$Buildings$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Resources$Buildings$List,
      options: MethodOptions | BodyResponseCallback<Schema$Buildings>,
      callback: BodyResponseCallback<Schema$Buildings>
    ): void;
    list(
      params: Params$Resource$Resources$Buildings$List,
      callback: BodyResponseCallback<Schema$Buildings>
    ): void;
    list(callback: BodyResponseCallback<Schema$Buildings>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Resources$Buildings$List
        | BodyResponseCallback<Schema$Buildings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Buildings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Buildings>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Buildings> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Resources$Buildings$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Resources$Buildings$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/customer/{customer}/resources/buildings'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['customer'],
        pathParams: ['customer'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Buildings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Buildings>(parameters);
      }
    }

    /**
     * Patches a building.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Resources$Buildings$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Resources$Buildings$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Building>;
    patch(
      params: Params$Resource$Resources$Buildings$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Resources$Buildings$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Building>,
      callback: BodyResponseCallback<Schema$Building>
    ): void;
    patch(
      params: Params$Resource$Resources$Buildings$Patch,
      callback: BodyResponseCallback<Schema$Building>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Building>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Resources$Buildings$Patch
        | BodyResponseCallback<Schema$Building>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Building>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Building>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Building> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Resources$Buildings$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Resources$Buildings$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['customer', 'buildingId'],
        pathParams: ['buildingId', 'customer'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Building>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Building>(parameters);
      }
    }

    /**
     * Updates a building.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Resources$Buildings$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Resources$Buildings$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Building>;
    update(
      params: Params$Resource$Resources$Buildings$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Resources$Buildings$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Building>,
      callback: BodyResponseCallback<Schema$Building>
    ): void;
    update(
      params: Params$Resource$Resources$Buildings$Update,
      callback: BodyResponseCallback<Schema$Building>
    ): void;
    update(callback: BodyResponseCallback<Schema$Building>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Resources$Buildings$Update
        | BodyResponseCallback<Schema$Building>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Building>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Building>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Building> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Resources$Buildings$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Resources$Buildings$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['customer', 'buildingId'],
        pathParams: ['buildingId', 'customer'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Building>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Building>(parameters);
      }
    }
  }

  export interface Params$Resource$Resources$Buildings$Delete
    extends StandardParameters {
    /**
     * The id of the building to delete.
     */
    buildingId?: string;
    /**
     * The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     */
    customer?: string;
  }
  export interface Params$Resource$Resources$Buildings$Get
    extends StandardParameters {
    /**
     * The unique ID of the building to retrieve.
     */
    buildingId?: string;
    /**
     * The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     */
    customer?: string;
  }
  export interface Params$Resource$Resources$Buildings$Insert
    extends StandardParameters {
    /**
     * Source from which Building.coordinates are derived.
     */
    coordinatesSource?: string;
    /**
     * The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     */
    customer?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Building;
  }
  export interface Params$Resource$Resources$Buildings$List
    extends StandardParameters {
    /**
     * The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     */
    customer?: string;
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * Token to specify the next page in the list.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Resources$Buildings$Patch
    extends StandardParameters {
    /**
     * The id of the building to update.
     */
    buildingId?: string;
    /**
     * Source from which Building.coordinates are derived.
     */
    coordinatesSource?: string;
    /**
     * The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     */
    customer?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Building;
  }
  export interface Params$Resource$Resources$Buildings$Update
    extends StandardParameters {
    /**
     * The id of the building to update.
     */
    buildingId?: string;
    /**
     * Source from which Building.coordinates are derived.
     */
    coordinatesSource?: string;
    /**
     * The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     */
    customer?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Building;
  }

  export class Resource$Resources$Calendars {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a calendar resource.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Resources$Calendars$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Resources$Calendars$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Resources$Calendars$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Resources$Calendars$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Resources$Calendars$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Resources$Calendars$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Resources$Calendars$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Resources$Calendars$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['customer', 'calendarResourceId'],
        pathParams: ['calendarResourceId', 'customer'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Retrieves a calendar resource.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Resources$Calendars$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Resources$Calendars$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CalendarResource>;
    get(
      params: Params$Resource$Resources$Calendars$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Resources$Calendars$Get,
      options: MethodOptions | BodyResponseCallback<Schema$CalendarResource>,
      callback: BodyResponseCallback<Schema$CalendarResource>
    ): void;
    get(
      params: Params$Resource$Resources$Calendars$Get,
      callback: BodyResponseCallback<Schema$CalendarResource>
    ): void;
    get(callback: BodyResponseCallback<Schema$CalendarResource>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Resources$Calendars$Get
        | BodyResponseCallback<Schema$CalendarResource>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CalendarResource>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CalendarResource>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CalendarResource> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Resources$Calendars$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Resources$Calendars$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['customer', 'calendarResourceId'],
        pathParams: ['calendarResourceId', 'customer'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CalendarResource>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CalendarResource>(parameters);
      }
    }

    /**
     * Inserts a calendar resource.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Resources$Calendars$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Resources$Calendars$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CalendarResource>;
    insert(
      params: Params$Resource$Resources$Calendars$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Resources$Calendars$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$CalendarResource>,
      callback: BodyResponseCallback<Schema$CalendarResource>
    ): void;
    insert(
      params: Params$Resource$Resources$Calendars$Insert,
      callback: BodyResponseCallback<Schema$CalendarResource>
    ): void;
    insert(callback: BodyResponseCallback<Schema$CalendarResource>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Resources$Calendars$Insert
        | BodyResponseCallback<Schema$CalendarResource>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CalendarResource>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CalendarResource>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CalendarResource> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Resources$Calendars$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Resources$Calendars$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/customer/{customer}/resources/calendars'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['customer'],
        pathParams: ['customer'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CalendarResource>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CalendarResource>(parameters);
      }
    }

    /**
     * Retrieves a list of calendar resources for an account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Resources$Calendars$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Resources$Calendars$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CalendarResources>;
    list(
      params: Params$Resource$Resources$Calendars$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Resources$Calendars$List,
      options: MethodOptions | BodyResponseCallback<Schema$CalendarResources>,
      callback: BodyResponseCallback<Schema$CalendarResources>
    ): void;
    list(
      params: Params$Resource$Resources$Calendars$List,
      callback: BodyResponseCallback<Schema$CalendarResources>
    ): void;
    list(callback: BodyResponseCallback<Schema$CalendarResources>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Resources$Calendars$List
        | BodyResponseCallback<Schema$CalendarResources>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CalendarResources>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CalendarResources>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$CalendarResources>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Resources$Calendars$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Resources$Calendars$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/customer/{customer}/resources/calendars'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['customer'],
        pathParams: ['customer'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CalendarResources>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CalendarResources>(parameters);
      }
    }

    /**
     * Patches a calendar resource.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Resources$Calendars$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Resources$Calendars$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CalendarResource>;
    patch(
      params: Params$Resource$Resources$Calendars$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Resources$Calendars$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$CalendarResource>,
      callback: BodyResponseCallback<Schema$CalendarResource>
    ): void;
    patch(
      params: Params$Resource$Resources$Calendars$Patch,
      callback: BodyResponseCallback<Schema$CalendarResource>
    ): void;
    patch(callback: BodyResponseCallback<Schema$CalendarResource>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Resources$Calendars$Patch
        | BodyResponseCallback<Schema$CalendarResource>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CalendarResource>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CalendarResource>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CalendarResource> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Resources$Calendars$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Resources$Calendars$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['customer', 'calendarResourceId'],
        pathParams: ['calendarResourceId', 'customer'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CalendarResource>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CalendarResource>(parameters);
      }
    }

    /**
     * Updates a calendar resource. This method supports patch semantics, meaning you only need to include the fields you wish to update. Fields that are not present in the request will be preserved.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Resources$Calendars$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Resources$Calendars$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CalendarResource>;
    update(
      params: Params$Resource$Resources$Calendars$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Resources$Calendars$Update,
      options: MethodOptions | BodyResponseCallback<Schema$CalendarResource>,
      callback: BodyResponseCallback<Schema$CalendarResource>
    ): void;
    update(
      params: Params$Resource$Resources$Calendars$Update,
      callback: BodyResponseCallback<Schema$CalendarResource>
    ): void;
    update(callback: BodyResponseCallback<Schema$CalendarResource>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Resources$Calendars$Update
        | BodyResponseCallback<Schema$CalendarResource>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CalendarResource>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CalendarResource>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CalendarResource> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Resources$Calendars$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Resources$Calendars$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['customer', 'calendarResourceId'],
        pathParams: ['calendarResourceId', 'customer'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CalendarResource>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CalendarResource>(parameters);
      }
    }
  }

  export interface Params$Resource$Resources$Calendars$Delete
    extends StandardParameters {
    /**
     * The unique ID of the calendar resource to delete.
     */
    calendarResourceId?: string;
    /**
     * The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     */
    customer?: string;
  }
  export interface Params$Resource$Resources$Calendars$Get
    extends StandardParameters {
    /**
     * The unique ID of the calendar resource to retrieve.
     */
    calendarResourceId?: string;
    /**
     * The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     */
    customer?: string;
  }
  export interface Params$Resource$Resources$Calendars$Insert
    extends StandardParameters {
    /**
     * The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     */
    customer?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CalendarResource;
  }
  export interface Params$Resource$Resources$Calendars$List
    extends StandardParameters {
    /**
     * The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     */
    customer?: string;
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * Field(s) to sort results by in either ascending or descending order. Supported fields include `resourceId`, `resourceName`, `capacity`, `buildingId`, and `floorName`. If no order is specified, defaults to ascending. Should be of the form "field [asc|desc], field [asc|desc], ...". For example `buildingId, capacity desc` would return results sorted first by `buildingId` in ascending order then by `capacity` in descending order.
     */
    orderBy?: string;
    /**
     * Token to specify the next page in the list.
     */
    pageToken?: string;
    /**
     * String query used to filter results. Should be of the form "field operator value" where field can be any of supported fields and operators can be any of supported operations. Operators include '=' for exact match, '!=' for mismatch and ':' for prefix match or HAS match where applicable. For prefix match, the value should always be followed by a *. Logical operators NOT and AND are supported (in this order of precedence). Supported fields include `generatedResourceName`, `name`, `buildingId`, `floor_name`, `capacity`, `featureInstances.feature.name`, `resourceEmail`, `resourceCategory`. For example `buildingId=US-NYC-9TH AND featureInstances.feature.name:Phone`.
     */
    query?: string;
  }
  export interface Params$Resource$Resources$Calendars$Patch
    extends StandardParameters {
    /**
     * The unique ID of the calendar resource to update.
     */
    calendarResourceId?: string;
    /**
     * The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     */
    customer?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CalendarResource;
  }
  export interface Params$Resource$Resources$Calendars$Update
    extends StandardParameters {
    /**
     * The unique ID of the calendar resource to update.
     */
    calendarResourceId?: string;
    /**
     * The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     */
    customer?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CalendarResource;
  }

  export class Resource$Resources$Features {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a feature.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Resources$Features$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Resources$Features$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Resources$Features$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Resources$Features$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Resources$Features$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Resources$Features$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Resources$Features$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Resources$Features$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/customer/{customer}/resources/features/{featureKey}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['customer', 'featureKey'],
        pathParams: ['customer', 'featureKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Retrieves a feature.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Resources$Features$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Resources$Features$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Feature>;
    get(
      params: Params$Resource$Resources$Features$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Resources$Features$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Feature>,
      callback: BodyResponseCallback<Schema$Feature>
    ): void;
    get(
      params: Params$Resource$Resources$Features$Get,
      callback: BodyResponseCallback<Schema$Feature>
    ): void;
    get(callback: BodyResponseCallback<Schema$Feature>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Resources$Features$Get
        | BodyResponseCallback<Schema$Feature>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Feature>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Feature>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Feature> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Resources$Features$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Resources$Features$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/customer/{customer}/resources/features/{featureKey}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['customer', 'featureKey'],
        pathParams: ['customer', 'featureKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Feature>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Feature>(parameters);
      }
    }

    /**
     * Inserts a feature.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Resources$Features$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Resources$Features$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Feature>;
    insert(
      params: Params$Resource$Resources$Features$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Resources$Features$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Feature>,
      callback: BodyResponseCallback<Schema$Feature>
    ): void;
    insert(
      params: Params$Resource$Resources$Features$Insert,
      callback: BodyResponseCallback<Schema$Feature>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Feature>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Resources$Features$Insert
        | BodyResponseCallback<Schema$Feature>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Feature>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Feature>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Feature> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Resources$Features$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Resources$Features$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/customer/{customer}/resources/features'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['customer'],
        pathParams: ['customer'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Feature>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Feature>(parameters);
      }
    }

    /**
     * Retrieves a list of features for an account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Resources$Features$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Resources$Features$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Features>;
    list(
      params: Params$Resource$Resources$Features$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Resources$Features$List,
      options: MethodOptions | BodyResponseCallback<Schema$Features>,
      callback: BodyResponseCallback<Schema$Features>
    ): void;
    list(
      params: Params$Resource$Resources$Features$List,
      callback: BodyResponseCallback<Schema$Features>
    ): void;
    list(callback: BodyResponseCallback<Schema$Features>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Resources$Features$List
        | BodyResponseCallback<Schema$Features>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Features>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Features>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Features> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Resources$Features$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Resources$Features$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/customer/{customer}/resources/features'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['customer'],
        pathParams: ['customer'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Features>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Features>(parameters);
      }
    }

    /**
     * Patches a feature.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Resources$Features$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Resources$Features$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Feature>;
    patch(
      params: Params$Resource$Resources$Features$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Resources$Features$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Feature>,
      callback: BodyResponseCallback<Schema$Feature>
    ): void;
    patch(
      params: Params$Resource$Resources$Features$Patch,
      callback: BodyResponseCallback<Schema$Feature>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Feature>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Resources$Features$Patch
        | BodyResponseCallback<Schema$Feature>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Feature>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Feature>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Feature> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Resources$Features$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Resources$Features$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/customer/{customer}/resources/features/{featureKey}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['customer', 'featureKey'],
        pathParams: ['customer', 'featureKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Feature>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Feature>(parameters);
      }
    }

    /**
     * Renames a feature.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    rename(
      params: Params$Resource$Resources$Features$Rename,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    rename(
      params?: Params$Resource$Resources$Features$Rename,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    rename(
      params: Params$Resource$Resources$Features$Rename,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    rename(
      params: Params$Resource$Resources$Features$Rename,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    rename(
      params: Params$Resource$Resources$Features$Rename,
      callback: BodyResponseCallback<void>
    ): void;
    rename(callback: BodyResponseCallback<void>): void;
    rename(
      paramsOrCallback?:
        | Params$Resource$Resources$Features$Rename
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Resources$Features$Rename;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Resources$Features$Rename;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/customer/{customer}/resources/features/{oldName}/rename'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['customer', 'oldName'],
        pathParams: ['customer', 'oldName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Updates a feature.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Resources$Features$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Resources$Features$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Feature>;
    update(
      params: Params$Resource$Resources$Features$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Resources$Features$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Feature>,
      callback: BodyResponseCallback<Schema$Feature>
    ): void;
    update(
      params: Params$Resource$Resources$Features$Update,
      callback: BodyResponseCallback<Schema$Feature>
    ): void;
    update(callback: BodyResponseCallback<Schema$Feature>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Resources$Features$Update
        | BodyResponseCallback<Schema$Feature>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Feature>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Feature>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Feature> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Resources$Features$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Resources$Features$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/customer/{customer}/resources/features/{featureKey}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['customer', 'featureKey'],
        pathParams: ['customer', 'featureKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Feature>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Feature>(parameters);
      }
    }
  }

  export interface Params$Resource$Resources$Features$Delete
    extends StandardParameters {
    /**
     * The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     */
    customer?: string;
    /**
     * The unique ID of the feature to delete.
     */
    featureKey?: string;
  }
  export interface Params$Resource$Resources$Features$Get
    extends StandardParameters {
    /**
     * The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     */
    customer?: string;
    /**
     * The unique ID of the feature to retrieve.
     */
    featureKey?: string;
  }
  export interface Params$Resource$Resources$Features$Insert
    extends StandardParameters {
    /**
     * The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     */
    customer?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Feature;
  }
  export interface Params$Resource$Resources$Features$List
    extends StandardParameters {
    /**
     * The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     */
    customer?: string;
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * Token to specify the next page in the list.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Resources$Features$Patch
    extends StandardParameters {
    /**
     * The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     */
    customer?: string;
    /**
     * The unique ID of the feature to update.
     */
    featureKey?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Feature;
  }
  export interface Params$Resource$Resources$Features$Rename
    extends StandardParameters {
    /**
     * The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     */
    customer?: string;
    /**
     * The unique ID of the feature to rename.
     */
    oldName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$FeatureRename;
  }
  export interface Params$Resource$Resources$Features$Update
    extends StandardParameters {
    /**
     * The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     */
    customer?: string;
    /**
     * The unique ID of the feature to update.
     */
    featureKey?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Feature;
  }

  export class Resource$Roleassignments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a role assignment.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Roleassignments$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Roleassignments$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Roleassignments$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Roleassignments$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Roleassignments$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Roleassignments$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Roleassignments$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Roleassignments$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/customer/{customer}/roleassignments/{roleAssignmentId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['customer', 'roleAssignmentId'],
        pathParams: ['customer', 'roleAssignmentId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Retrieves a role assignment.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Roleassignments$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Roleassignments$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RoleAssignment>;
    get(
      params: Params$Resource$Roleassignments$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Roleassignments$Get,
      options: MethodOptions | BodyResponseCallback<Schema$RoleAssignment>,
      callback: BodyResponseCallback<Schema$RoleAssignment>
    ): void;
    get(
      params: Params$Resource$Roleassignments$Get,
      callback: BodyResponseCallback<Schema$RoleAssignment>
    ): void;
    get(callback: BodyResponseCallback<Schema$RoleAssignment>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Roleassignments$Get
        | BodyResponseCallback<Schema$RoleAssignment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RoleAssignment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RoleAssignment>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$RoleAssignment> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Roleassignments$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Roleassignments$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/customer/{customer}/roleassignments/{roleAssignmentId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['customer', 'roleAssignmentId'],
        pathParams: ['customer', 'roleAssignmentId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RoleAssignment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RoleAssignment>(parameters);
      }
    }

    /**
     * Creates a role assignment.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Roleassignments$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Roleassignments$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RoleAssignment>;
    insert(
      params: Params$Resource$Roleassignments$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Roleassignments$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$RoleAssignment>,
      callback: BodyResponseCallback<Schema$RoleAssignment>
    ): void;
    insert(
      params: Params$Resource$Roleassignments$Insert,
      callback: BodyResponseCallback<Schema$RoleAssignment>
    ): void;
    insert(callback: BodyResponseCallback<Schema$RoleAssignment>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Roleassignments$Insert
        | BodyResponseCallback<Schema$RoleAssignment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RoleAssignment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RoleAssignment>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$RoleAssignment> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Roleassignments$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Roleassignments$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/customer/{customer}/roleassignments'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['customer'],
        pathParams: ['customer'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RoleAssignment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RoleAssignment>(parameters);
      }
    }

    /**
     * Retrieves a paginated list of all roleAssignments.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Roleassignments$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Roleassignments$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RoleAssignments>;
    list(
      params: Params$Resource$Roleassignments$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Roleassignments$List,
      options: MethodOptions | BodyResponseCallback<Schema$RoleAssignments>,
      callback: BodyResponseCallback<Schema$RoleAssignments>
    ): void;
    list(
      params: Params$Resource$Roleassignments$List,
      callback: BodyResponseCallback<Schema$RoleAssignments>
    ): void;
    list(callback: BodyResponseCallback<Schema$RoleAssignments>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Roleassignments$List
        | BodyResponseCallback<Schema$RoleAssignments>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RoleAssignments>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RoleAssignments>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$RoleAssignments> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Roleassignments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Roleassignments$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/customer/{customer}/roleassignments'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['customer'],
        pathParams: ['customer'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RoleAssignments>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RoleAssignments>(parameters);
      }
    }
  }

  export interface Params$Resource$Roleassignments$Delete
    extends StandardParameters {
    /**
     * Immutable ID of the Google Workspace account.
     */
    customer?: string;
    /**
     * Immutable ID of the role assignment.
     */
    roleAssignmentId?: string;
  }
  export interface Params$Resource$Roleassignments$Get
    extends StandardParameters {
    /**
     * The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
     */
    customer?: string;
    /**
     * Immutable ID of the role assignment.
     */
    roleAssignmentId?: string;
  }
  export interface Params$Resource$Roleassignments$Insert
    extends StandardParameters {
    /**
     * Immutable ID of the Google Workspace account.
     */
    customer?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RoleAssignment;
  }
  export interface Params$Resource$Roleassignments$List
    extends StandardParameters {
    /**
     * The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
     */
    customer?: string;
    /**
     * When set to `true`, fetches indirect role assignments (i.e. role assignment via a group) as well as direct ones. Defaults to `false`. You must specify `user_key` or the indirect role assignments will not be included.
     */
    includeIndirectRoleAssignments?: boolean;
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * Token to specify the next page in the list.
     */
    pageToken?: string;
    /**
     * Immutable ID of a role. If included in the request, returns only role assignments containing this role ID.
     */
    roleId?: string;
    /**
     * The primary email address, alias email address, or unique user or group ID. If included in the request, returns role assignments only for this user or group.
     */
    userKey?: string;
  }

  export class Resource$Roles {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a role.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Roles$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Roles$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Roles$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Roles$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Roles$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Roles$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Roles$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Roles$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/admin/directory/v1/customer/{customer}/roles/{roleId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['customer', 'roleId'],
        pathParams: ['customer', 'roleId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Retrieves a role.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Roles$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Roles$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Role>;
    get(
      params: Params$Resource$Roles$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Roles$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Role>,
      callback: BodyResponseCallback<Schema$Role>
    ): void;
    get(
      params: Params$Resource$Roles$Get,
      callback: BodyResponseCallback<Schema$Role>
    ): void;
    get(callback: BodyResponseCallback<Schema$Role>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Roles$Get
        | BodyResponseCallback<Schema$Role>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Role>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Role>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Role> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Roles$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Roles$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/admin/directory/v1/customer/{customer}/roles/{roleId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['customer', 'roleId'],
        pathParams: ['customer', 'roleId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Role>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Role>(parameters);
      }
    }

    /**
     * Creates a role.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Roles$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Roles$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Role>;
    insert(
      params: Params$Resource$Roles$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Roles$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Role>,
      callback: BodyResponseCallback<Schema$Role>
    ): void;
    insert(
      params: Params$Resource$Roles$Insert,
      callback: BodyResponseCallback<Schema$Role>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Role>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Roles$Insert
        | BodyResponseCallback<Schema$Role>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Role>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Role>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Role> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Roles$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Roles$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/admin/directory/v1/customer/{customer}/roles'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['customer'],
        pathParams: ['customer'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Role>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Role>(parameters);
      }
    }

    /**
     * Retrieves a paginated list of all the roles in a domain.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Roles$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Roles$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Roles>;
    list(
      params: Params$Resource$Roles$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Roles$List,
      options: MethodOptions | BodyResponseCallback<Schema$Roles>,
      callback: BodyResponseCallback<Schema$Roles>
    ): void;
    list(
      params: Params$Resource$Roles$List,
      callback: BodyResponseCallback<Schema$Roles>
    ): void;
    list(callback: BodyResponseCallback<Schema$Roles>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Roles$List
        | BodyResponseCallback<Schema$Roles>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Roles>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Roles>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Roles> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Roles$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Roles$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/admin/directory/v1/customer/{customer}/roles'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['customer'],
        pathParams: ['customer'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Roles>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Roles>(parameters);
      }
    }

    /**
     * Patches a role.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Roles$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Roles$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Role>;
    patch(
      params: Params$Resource$Roles$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Roles$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Role>,
      callback: BodyResponseCallback<Schema$Role>
    ): void;
    patch(
      params: Params$Resource$Roles$Patch,
      callback: BodyResponseCallback<Schema$Role>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Role>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Roles$Patch
        | BodyResponseCallback<Schema$Role>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Role>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Role>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Role> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Roles$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Roles$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/admin/directory/v1/customer/{customer}/roles/{roleId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['customer', 'roleId'],
        pathParams: ['customer', 'roleId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Role>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Role>(parameters);
      }
    }

    /**
     * Updates a role.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Roles$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Roles$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Role>;
    update(
      params: Params$Resource$Roles$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Roles$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Role>,
      callback: BodyResponseCallback<Schema$Role>
    ): void;
    update(
      params: Params$Resource$Roles$Update,
      callback: BodyResponseCallback<Schema$Role>
    ): void;
    update(callback: BodyResponseCallback<Schema$Role>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Roles$Update
        | BodyResponseCallback<Schema$Role>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Role>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Role>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Role> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Roles$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Roles$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/admin/directory/v1/customer/{customer}/roles/{roleId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['customer', 'roleId'],
        pathParams: ['customer', 'roleId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Role>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Role>(parameters);
      }
    }
  }

  export interface Params$Resource$Roles$Delete extends StandardParameters {
    /**
     * Immutable ID of the Google Workspace account.
     */
    customer?: string;
    /**
     * Immutable ID of the role.
     */
    roleId?: string;
  }
  export interface Params$Resource$Roles$Get extends StandardParameters {
    /**
     * The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
     */
    customer?: string;
    /**
     * Immutable ID of the role.
     */
    roleId?: string;
  }
  export interface Params$Resource$Roles$Insert extends StandardParameters {
    /**
     * Immutable ID of the Google Workspace account.
     */
    customer?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Role;
  }
  export interface Params$Resource$Roles$List extends StandardParameters {
    /**
     * The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
     */
    customer?: string;
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * Token to specify the next page in the list.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Roles$Patch extends StandardParameters {
    /**
     * Immutable ID of the Google Workspace account.
     */
    customer?: string;
    /**
     * Immutable ID of the role.
     */
    roleId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Role;
  }
  export interface Params$Resource$Roles$Update extends StandardParameters {
    /**
     * Immutable ID of the Google Workspace account.
     */
    customer?: string;
    /**
     * Immutable ID of the role.
     */
    roleId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Role;
  }

  export class Resource$Schemas {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a schema.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Schemas$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Schemas$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Schemas$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Schemas$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Schemas$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Schemas$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Schemas$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Schemas$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/customer/{customerId}/schemas/{schemaKey}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['customerId', 'schemaKey'],
        pathParams: ['customerId', 'schemaKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Retrieves a schema.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Schemas$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Schemas$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Schema>;
    get(
      params: Params$Resource$Schemas$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Schemas$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Schema>,
      callback: BodyResponseCallback<Schema$Schema>
    ): void;
    get(
      params: Params$Resource$Schemas$Get,
      callback: BodyResponseCallback<Schema$Schema>
    ): void;
    get(callback: BodyResponseCallback<Schema$Schema>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Schemas$Get
        | BodyResponseCallback<Schema$Schema>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Schema>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Schema>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Schema> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Schemas$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Schemas$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/customer/{customerId}/schemas/{schemaKey}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['customerId', 'schemaKey'],
        pathParams: ['customerId', 'schemaKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Schema>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Schema>(parameters);
      }
    }

    /**
     * Creates a schema.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Schemas$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Schemas$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Schema>;
    insert(
      params: Params$Resource$Schemas$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Schemas$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Schema>,
      callback: BodyResponseCallback<Schema$Schema>
    ): void;
    insert(
      params: Params$Resource$Schemas$Insert,
      callback: BodyResponseCallback<Schema$Schema>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Schema>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Schemas$Insert
        | BodyResponseCallback<Schema$Schema>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Schema>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Schema>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Schema> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Schemas$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Schemas$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/admin/directory/v1/customer/{customerId}/schemas'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['customerId'],
        pathParams: ['customerId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Schema>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Schema>(parameters);
      }
    }

    /**
     * Retrieves all schemas for a customer.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Schemas$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Schemas$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Schemas>;
    list(
      params: Params$Resource$Schemas$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Schemas$List,
      options: MethodOptions | BodyResponseCallback<Schema$Schemas>,
      callback: BodyResponseCallback<Schema$Schemas>
    ): void;
    list(
      params: Params$Resource$Schemas$List,
      callback: BodyResponseCallback<Schema$Schemas>
    ): void;
    list(callback: BodyResponseCallback<Schema$Schemas>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Schemas$List
        | BodyResponseCallback<Schema$Schemas>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Schemas>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Schemas>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Schemas> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Schemas$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Schemas$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/admin/directory/v1/customer/{customerId}/schemas'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['customerId'],
        pathParams: ['customerId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Schemas>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Schemas>(parameters);
      }
    }

    /**
     * Patches a schema.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Schemas$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Schemas$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Schema>;
    patch(
      params: Params$Resource$Schemas$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Schemas$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Schema>,
      callback: BodyResponseCallback<Schema$Schema>
    ): void;
    patch(
      params: Params$Resource$Schemas$Patch,
      callback: BodyResponseCallback<Schema$Schema>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Schema>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Schemas$Patch
        | BodyResponseCallback<Schema$Schema>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Schema>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Schema>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Schema> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Schemas$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Schemas$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/customer/{customerId}/schemas/{schemaKey}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['customerId', 'schemaKey'],
        pathParams: ['customerId', 'schemaKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Schema>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Schema>(parameters);
      }
    }

    /**
     * Updates a schema.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Schemas$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Schemas$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Schema>;
    update(
      params: Params$Resource$Schemas$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Schemas$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Schema>,
      callback: BodyResponseCallback<Schema$Schema>
    ): void;
    update(
      params: Params$Resource$Schemas$Update,
      callback: BodyResponseCallback<Schema$Schema>
    ): void;
    update(callback: BodyResponseCallback<Schema$Schema>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Schemas$Update
        | BodyResponseCallback<Schema$Schema>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Schema>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Schema>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Schema> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Schemas$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Schemas$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/customer/{customerId}/schemas/{schemaKey}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['customerId', 'schemaKey'],
        pathParams: ['customerId', 'schemaKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Schema>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Schema>(parameters);
      }
    }
  }

  export interface Params$Resource$Schemas$Delete extends StandardParameters {
    /**
     * Immutable ID of the Google Workspace account.
     */
    customerId?: string;
    /**
     * Name or immutable ID of the schema.
     */
    schemaKey?: string;
  }
  export interface Params$Resource$Schemas$Get extends StandardParameters {
    /**
     * The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
     */
    customerId?: string;
    /**
     * Name or immutable ID of the schema.
     */
    schemaKey?: string;
  }
  export interface Params$Resource$Schemas$Insert extends StandardParameters {
    /**
     * Immutable ID of the Google Workspace account.
     */
    customerId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Schema;
  }
  export interface Params$Resource$Schemas$List extends StandardParameters {
    /**
     * The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
     */
    customerId?: string;
  }
  export interface Params$Resource$Schemas$Patch extends StandardParameters {
    /**
     * Immutable ID of the Google Workspace account.
     */
    customerId?: string;
    /**
     * Name or immutable ID of the schema.
     */
    schemaKey?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Schema;
  }
  export interface Params$Resource$Schemas$Update extends StandardParameters {
    /**
     * Immutable ID of the Google Workspace account.
     */
    customerId?: string;
    /**
     * Name or immutable ID of the schema.
     */
    schemaKey?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Schema;
  }

  export class Resource$Tokens {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes all access tokens issued by a user for an application.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Tokens$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Tokens$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Tokens$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Tokens$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Tokens$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Tokens$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Tokens$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tokens$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/admin/directory/v1/users/{userKey}/tokens/{clientId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['userKey', 'clientId'],
        pathParams: ['clientId', 'userKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Gets information about an access token issued by a user.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Tokens$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Tokens$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Token>;
    get(
      params: Params$Resource$Tokens$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Tokens$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Token>,
      callback: BodyResponseCallback<Schema$Token>
    ): void;
    get(
      params: Params$Resource$Tokens$Get,
      callback: BodyResponseCallback<Schema$Token>
    ): void;
    get(callback: BodyResponseCallback<Schema$Token>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Tokens$Get
        | BodyResponseCallback<Schema$Token>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Token>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Token>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Token> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Tokens$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tokens$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/admin/directory/v1/users/{userKey}/tokens/{clientId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userKey', 'clientId'],
        pathParams: ['clientId', 'userKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Token>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Token>(parameters);
      }
    }

    /**
     * Returns the set of tokens specified user has issued to 3rd party applications.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Tokens$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Tokens$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Tokens>;
    list(
      params: Params$Resource$Tokens$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Tokens$List,
      options: MethodOptions | BodyResponseCallback<Schema$Tokens>,
      callback: BodyResponseCallback<Schema$Tokens>
    ): void;
    list(
      params: Params$Resource$Tokens$List,
      callback: BodyResponseCallback<Schema$Tokens>
    ): void;
    list(callback: BodyResponseCallback<Schema$Tokens>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Tokens$List
        | BodyResponseCallback<Schema$Tokens>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Tokens>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Tokens>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Tokens> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Tokens$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tokens$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/admin/directory/v1/users/{userKey}/tokens'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userKey'],
        pathParams: ['userKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Tokens>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Tokens>(parameters);
      }
    }
  }

  export interface Params$Resource$Tokens$Delete extends StandardParameters {
    /**
     * The Client ID of the application the token is issued to.
     */
    clientId?: string;
    /**
     * Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     */
    userKey?: string;
  }
  export interface Params$Resource$Tokens$Get extends StandardParameters {
    /**
     * The Client ID of the application the token is issued to.
     */
    clientId?: string;
    /**
     * Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     */
    userKey?: string;
  }
  export interface Params$Resource$Tokens$List extends StandardParameters {
    /**
     * Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     */
    userKey?: string;
  }

  export class Resource$Twostepverification {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Turns off 2-Step Verification for user.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    turnOff(
      params: Params$Resource$Twostepverification$Turnoff,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    turnOff(
      params?: Params$Resource$Twostepverification$Turnoff,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    turnOff(
      params: Params$Resource$Twostepverification$Turnoff,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    turnOff(
      params: Params$Resource$Twostepverification$Turnoff,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    turnOff(
      params: Params$Resource$Twostepverification$Turnoff,
      callback: BodyResponseCallback<void>
    ): void;
    turnOff(callback: BodyResponseCallback<void>): void;
    turnOff(
      paramsOrCallback?:
        | Params$Resource$Twostepverification$Turnoff
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Twostepverification$Turnoff;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Twostepverification$Turnoff;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/users/{userKey}/twoStepVerification/turnOff'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['userKey'],
        pathParams: ['userKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Twostepverification$Turnoff
    extends StandardParameters {
    /**
     * Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     */
    userKey?: string;
  }

  export class Resource$Users {
    context: APIRequestContext;
    aliases: Resource$Users$Aliases;
    photos: Resource$Users$Photos;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.aliases = new Resource$Users$Aliases(this.context);
      this.photos = new Resource$Users$Photos(this.context);
    }

    /**
     * Deletes a user.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Users$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Users$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Users$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Users$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Users$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Users$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Users$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/users/{userKey}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['userKey'],
        pathParams: ['userKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Retrieves a user.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Users$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Users$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$User>;
    get(
      params: Params$Resource$Users$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Users$Get,
      options: MethodOptions | BodyResponseCallback<Schema$User>,
      callback: BodyResponseCallback<Schema$User>
    ): void;
    get(
      params: Params$Resource$Users$Get,
      callback: BodyResponseCallback<Schema$User>
    ): void;
    get(callback: BodyResponseCallback<Schema$User>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Users$Get
        | BodyResponseCallback<Schema$User>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$User>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$User>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$User> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Users$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/users/{userKey}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userKey'],
        pathParams: ['userKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$User>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$User>(parameters);
      }
    }

    /**
     * Creates a user. Mutate calls immediately following user creation might sometimes fail as the user isn't fully created due to propagation delay in our backends. Check the error details for the "User creation is not complete" message to see if this is the case. Retrying the calls after some time can help in this case.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Users$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Users$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$User>;
    insert(
      params: Params$Resource$Users$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Users$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$User>,
      callback: BodyResponseCallback<Schema$User>
    ): void;
    insert(
      params: Params$Resource$Users$Insert,
      callback: BodyResponseCallback<Schema$User>
    ): void;
    insert(callback: BodyResponseCallback<Schema$User>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Users$Insert
        | BodyResponseCallback<Schema$User>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$User>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$User>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$User> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Users$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/users').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$User>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$User>(parameters);
      }
    }

    /**
     * Retrieves a paginated list of either deleted users or all users in a domain.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Users$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Users$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Users>;
    list(
      params: Params$Resource$Users$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Users$List,
      options: MethodOptions | BodyResponseCallback<Schema$Users>,
      callback: BodyResponseCallback<Schema$Users>
    ): void;
    list(
      params: Params$Resource$Users$List,
      callback: BodyResponseCallback<Schema$Users>
    ): void;
    list(callback: BodyResponseCallback<Schema$Users>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Users$List
        | BodyResponseCallback<Schema$Users>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Users>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Users>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Users> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Users$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/users').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$Users>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Users>(parameters);
      }
    }

    /**
     * Makes a user a super administrator.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    makeAdmin(
      params: Params$Resource$Users$Makeadmin,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    makeAdmin(
      params?: Params$Resource$Users$Makeadmin,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    makeAdmin(
      params: Params$Resource$Users$Makeadmin,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    makeAdmin(
      params: Params$Resource$Users$Makeadmin,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    makeAdmin(
      params: Params$Resource$Users$Makeadmin,
      callback: BodyResponseCallback<void>
    ): void;
    makeAdmin(callback: BodyResponseCallback<void>): void;
    makeAdmin(
      paramsOrCallback?:
        | Params$Resource$Users$Makeadmin
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Users$Makeadmin;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Makeadmin;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/admin/directory/v1/users/{userKey}/makeAdmin'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['userKey'],
        pathParams: ['userKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Updates a user using patch semantics. The update method should be used instead, because it also supports patch semantics and has better performance. If you're mapping an external identity to a Google identity, use the [`update`](https://developers.google.com/admin-sdk/directory/v1/reference/users/update) method instead of the `patch` method. This method is unable to clear fields that contain repeated objects (`addresses`, `phones`, etc). Use the update method instead.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Users$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Users$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$User>;
    patch(
      params: Params$Resource$Users$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Users$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$User>,
      callback: BodyResponseCallback<Schema$User>
    ): void;
    patch(
      params: Params$Resource$Users$Patch,
      callback: BodyResponseCallback<Schema$User>
    ): void;
    patch(callback: BodyResponseCallback<Schema$User>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Users$Patch
        | BodyResponseCallback<Schema$User>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$User>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$User>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$User> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Users$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/users/{userKey}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['userKey'],
        pathParams: ['userKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$User>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$User>(parameters);
      }
    }

    /**
     * Signs a user out of all web and device sessions and reset their sign-in cookies. User will have to sign in by authenticating again.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    signOut(
      params: Params$Resource$Users$Signout,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    signOut(
      params?: Params$Resource$Users$Signout,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    signOut(
      params: Params$Resource$Users$Signout,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    signOut(
      params: Params$Resource$Users$Signout,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    signOut(
      params: Params$Resource$Users$Signout,
      callback: BodyResponseCallback<void>
    ): void;
    signOut(callback: BodyResponseCallback<void>): void;
    signOut(
      paramsOrCallback?:
        | Params$Resource$Users$Signout
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Users$Signout;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Signout;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/admin/directory/v1/users/{userKey}/signOut'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['userKey'],
        pathParams: ['userKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Undeletes a deleted user.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    undelete(
      params: Params$Resource$Users$Undelete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    undelete(
      params?: Params$Resource$Users$Undelete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    undelete(
      params: Params$Resource$Users$Undelete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    undelete(
      params: Params$Resource$Users$Undelete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    undelete(
      params: Params$Resource$Users$Undelete,
      callback: BodyResponseCallback<void>
    ): void;
    undelete(callback: BodyResponseCallback<void>): void;
    undelete(
      paramsOrCallback?:
        | Params$Resource$Users$Undelete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Users$Undelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Undelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/admin/directory/v1/users/{userKey}/undelete'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['userKey'],
        pathParams: ['userKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Updates a user. This method supports patch semantics, meaning that you only need to include the fields you wish to update. Fields that are not present in the request will be preserved, and fields set to `null` will be cleared. For repeating fields that contain arrays, individual items in the array can't be patched piecemeal; they must be supplied in the request body with the desired values for all items. See the [user accounts guide](https://developers.google.com/admin-sdk/directory/v1/guides/manage-users#update_user) for more information.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Users$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Users$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$User>;
    update(
      params: Params$Resource$Users$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Users$Update,
      options: MethodOptions | BodyResponseCallback<Schema$User>,
      callback: BodyResponseCallback<Schema$User>
    ): void;
    update(
      params: Params$Resource$Users$Update,
      callback: BodyResponseCallback<Schema$User>
    ): void;
    update(callback: BodyResponseCallback<Schema$User>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Users$Update
        | BodyResponseCallback<Schema$User>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$User>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$User>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$User> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Users$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/users/{userKey}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['userKey'],
        pathParams: ['userKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$User>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$User>(parameters);
      }
    }

    /**
     * Watches for changes in users list.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    watch(
      params: Params$Resource$Users$Watch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    watch(
      params?: Params$Resource$Users$Watch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Channel>;
    watch(
      params: Params$Resource$Users$Watch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    watch(
      params: Params$Resource$Users$Watch,
      options: MethodOptions | BodyResponseCallback<Schema$Channel>,
      callback: BodyResponseCallback<Schema$Channel>
    ): void;
    watch(
      params: Params$Resource$Users$Watch,
      callback: BodyResponseCallback<Schema$Channel>
    ): void;
    watch(callback: BodyResponseCallback<Schema$Channel>): void;
    watch(
      paramsOrCallback?:
        | Params$Resource$Users$Watch
        | BodyResponseCallback<Schema$Channel>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Channel>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Channel>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Channel> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Users$Watch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Watch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/users/watch').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$Channel>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Channel>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Delete extends StandardParameters {
    /**
     * Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     */
    userKey?: string;
  }
  export interface Params$Resource$Users$Get extends StandardParameters {
    /**
     * A comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when `projection=custom`.
     */
    customFieldMask?: string;
    /**
     * What subset of fields to fetch for this user.
     */
    projection?: string;
    /**
     * Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     */
    userKey?: string;
    /**
     * Whether to fetch the administrator-only or domain-wide public view of the user. For more information, see [Retrieve a user as a non-administrator](/admin-sdk/directory/v1/guides/manage-users#retrieve_users_non_admin).
     */
    viewType?: string;
  }
  export interface Params$Resource$Users$Insert extends StandardParameters {
    /**
     * Optional. If set to `true`, the option selected for [handling unmanaged user accounts](https://support.google.com/a/answer/11112794) will apply. Default: `false`
     */
    resolveConflictAccount?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$User;
  }
  export interface Params$Resource$Users$List extends StandardParameters {
    /**
     * The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
     */
    customer?: string;
    /**
     * A comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when `projection=custom`.
     */
    customFieldMask?: string;
    /**
     * The domain name. Use this field to get groups from only one domain. To return all domains for a customer account, use the `customer` query parameter instead. Either the `customer` or the `domain` parameter must be provided.
     */
    domain?: string;
    /**
     * Event on which subscription is intended (if subscribing)
     */
    event?: string;
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * Property to use for sorting results.
     */
    orderBy?: string;
    /**
     * Token to specify next page in the list
     */
    pageToken?: string;
    /**
     * What subset of fields to fetch for this user.
     */
    projection?: string;
    /**
     * Query string for searching user fields. For more information on constructing user queries, see [Search for Users](/admin-sdk/directory/v1/guides/search-users).
     */
    query?: string;
    /**
     * If set to `true`, retrieves the list of deleted users. (Default: `false`)
     */
    showDeleted?: string;
    /**
     * Whether to return results in ascending or descending order, ignoring case.
     */
    sortOrder?: string;
    /**
     * Whether to fetch the administrator-only or domain-wide public view of the user. For more information, see [Retrieve a user as a non-administrator](/admin-sdk/directory/v1/guides/manage-users#retrieve_users_non_admin).
     */
    viewType?: string;
  }
  export interface Params$Resource$Users$Makeadmin extends StandardParameters {
    /**
     * Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     */
    userKey?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UserMakeAdmin;
  }
  export interface Params$Resource$Users$Patch extends StandardParameters {
    /**
     * Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     */
    userKey?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$User;
  }
  export interface Params$Resource$Users$Signout extends StandardParameters {
    /**
     * Identifies the target user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     */
    userKey?: string;
  }
  export interface Params$Resource$Users$Undelete extends StandardParameters {
    /**
     * The immutable id of the user
     */
    userKey?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UserUndelete;
  }
  export interface Params$Resource$Users$Update extends StandardParameters {
    /**
     * Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     */
    userKey?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$User;
  }
  export interface Params$Resource$Users$Watch extends StandardParameters {
    /**
     * Immutable ID of the Google Workspace account. In case of multi-domain, to fetch all users for a customer, fill this field instead of domain.
     */
    customer?: string;
    /**
     * Comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when projection=custom.
     */
    customFieldMask?: string;
    /**
     * Name of the domain. Fill this field to get users from only this domain. To return all users in a multi-domain fill customer field instead."
     */
    domain?: string;
    /**
     * Events to watch for.
     */
    event?: string;
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * Column to use for sorting results
     */
    orderBy?: string;
    /**
     * Token to specify next page in the list
     */
    pageToken?: string;
    /**
     * What subset of fields to fetch for this user.
     */
    projection?: string;
    /**
     * Query string search. Should be of the form "". Complete documentation is at https: //developers.google.com/admin-sdk/directory/v1/guides/search-users
     */
    query?: string;
    /**
     * If set to true, retrieves the list of deleted users. (Default: false)
     */
    showDeleted?: string;
    /**
     * Whether to return results in ascending or descending order.
     */
    sortOrder?: string;
    /**
     * Whether to fetch the administrator-only or domain-wide public view of the user. For more information, see [Retrieve a user as a non-administrator](/admin-sdk/directory/v1/guides/manage-users#retrieve_users_non_admin).
     */
    viewType?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Channel;
  }

  export class Resource$Users$Aliases {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Removes an alias.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Users$Aliases$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Users$Aliases$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Users$Aliases$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Users$Aliases$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Users$Aliases$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Users$Aliases$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Aliases$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Aliases$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/admin/directory/v1/users/{userKey}/aliases/{alias}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['userKey', 'alias'],
        pathParams: ['alias', 'userKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Adds an alias.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Users$Aliases$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Users$Aliases$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Alias>;
    insert(
      params: Params$Resource$Users$Aliases$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Users$Aliases$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Alias>,
      callback: BodyResponseCallback<Schema$Alias>
    ): void;
    insert(
      params: Params$Resource$Users$Aliases$Insert,
      callback: BodyResponseCallback<Schema$Alias>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Alias>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Users$Aliases$Insert
        | BodyResponseCallback<Schema$Alias>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Alias>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Alias>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Alias> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Aliases$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Aliases$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/admin/directory/v1/users/{userKey}/aliases'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['userKey'],
        pathParams: ['userKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Alias>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Alias>(parameters);
      }
    }

    /**
     * Lists all aliases for a user.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Users$Aliases$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Users$Aliases$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Aliases>;
    list(
      params: Params$Resource$Users$Aliases$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Users$Aliases$List,
      options: MethodOptions | BodyResponseCallback<Schema$Aliases>,
      callback: BodyResponseCallback<Schema$Aliases>
    ): void;
    list(
      params: Params$Resource$Users$Aliases$List,
      callback: BodyResponseCallback<Schema$Aliases>
    ): void;
    list(callback: BodyResponseCallback<Schema$Aliases>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Users$Aliases$List
        | BodyResponseCallback<Schema$Aliases>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Aliases>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Aliases>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Aliases> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Aliases$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Aliases$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/admin/directory/v1/users/{userKey}/aliases'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userKey'],
        pathParams: ['userKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Aliases>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Aliases>(parameters);
      }
    }

    /**
     * Watches for changes in users list.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    watch(
      params: Params$Resource$Users$Aliases$Watch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    watch(
      params?: Params$Resource$Users$Aliases$Watch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Channel>;
    watch(
      params: Params$Resource$Users$Aliases$Watch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    watch(
      params: Params$Resource$Users$Aliases$Watch,
      options: MethodOptions | BodyResponseCallback<Schema$Channel>,
      callback: BodyResponseCallback<Schema$Channel>
    ): void;
    watch(
      params: Params$Resource$Users$Aliases$Watch,
      callback: BodyResponseCallback<Schema$Channel>
    ): void;
    watch(callback: BodyResponseCallback<Schema$Channel>): void;
    watch(
      paramsOrCallback?:
        | Params$Resource$Users$Aliases$Watch
        | BodyResponseCallback<Schema$Channel>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Channel>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Channel>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Channel> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Aliases$Watch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Aliases$Watch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/admin/directory/v1/users/{userKey}/aliases/watch'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['userKey'],
        pathParams: ['userKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Channel>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Channel>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Aliases$Delete
    extends StandardParameters {
    /**
     * The alias to be removed.
     */
    alias?: string;
    /**
     * Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     */
    userKey?: string;
  }
  export interface Params$Resource$Users$Aliases$Insert
    extends StandardParameters {
    /**
     * Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     */
    userKey?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Alias;
  }
  export interface Params$Resource$Users$Aliases$List
    extends StandardParameters {
    /**
     * Events to watch for.
     */
    event?: string;
    /**
     * Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     */
    userKey?: string;
  }
  export interface Params$Resource$Users$Aliases$Watch
    extends StandardParameters {
    /**
     * Events to watch for.
     */
    event?: string;
    /**
     * Email or immutable ID of the user
     */
    userKey?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Channel;
  }

  export class Resource$Users$Photos {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Removes the user's photo.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Users$Photos$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Users$Photos$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Users$Photos$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Users$Photos$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Users$Photos$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Users$Photos$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Photos$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Photos$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/admin/directory/v1/users/{userKey}/photos/thumbnail'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['userKey'],
        pathParams: ['userKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Retrieves the user's photo.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Users$Photos$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Users$Photos$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UserPhoto>;
    get(
      params: Params$Resource$Users$Photos$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Users$Photos$Get,
      options: MethodOptions | BodyResponseCallback<Schema$UserPhoto>,
      callback: BodyResponseCallback<Schema$UserPhoto>
    ): void;
    get(
      params: Params$Resource$Users$Photos$Get,
      callback: BodyResponseCallback<Schema$UserPhoto>
    ): void;
    get(callback: BodyResponseCallback<Schema$UserPhoto>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Users$Photos$Get
        | BodyResponseCallback<Schema$UserPhoto>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UserPhoto>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UserPhoto>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$UserPhoto> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Users$Photos$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Photos$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/admin/directory/v1/users/{userKey}/photos/thumbnail'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userKey'],
        pathParams: ['userKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UserPhoto>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UserPhoto>(parameters);
      }
    }

    /**
     * Adds a photo for the user. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Users$Photos$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Users$Photos$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UserPhoto>;
    patch(
      params: Params$Resource$Users$Photos$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Users$Photos$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$UserPhoto>,
      callback: BodyResponseCallback<Schema$UserPhoto>
    ): void;
    patch(
      params: Params$Resource$Users$Photos$Patch,
      callback: BodyResponseCallback<Schema$UserPhoto>
    ): void;
    patch(callback: BodyResponseCallback<Schema$UserPhoto>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Users$Photos$Patch
        | BodyResponseCallback<Schema$UserPhoto>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UserPhoto>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UserPhoto>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$UserPhoto> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Photos$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Photos$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/admin/directory/v1/users/{userKey}/photos/thumbnail'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['userKey'],
        pathParams: ['userKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UserPhoto>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UserPhoto>(parameters);
      }
    }

    /**
     * Adds a photo for the user.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Users$Photos$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Users$Photos$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UserPhoto>;
    update(
      params: Params$Resource$Users$Photos$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Users$Photos$Update,
      options: MethodOptions | BodyResponseCallback<Schema$UserPhoto>,
      callback: BodyResponseCallback<Schema$UserPhoto>
    ): void;
    update(
      params: Params$Resource$Users$Photos$Update,
      callback: BodyResponseCallback<Schema$UserPhoto>
    ): void;
    update(callback: BodyResponseCallback<Schema$UserPhoto>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Users$Photos$Update
        | BodyResponseCallback<Schema$UserPhoto>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UserPhoto>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UserPhoto>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$UserPhoto> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Photos$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Photos$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/admin/directory/v1/users/{userKey}/photos/thumbnail'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['userKey'],
        pathParams: ['userKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UserPhoto>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UserPhoto>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Photos$Delete
    extends StandardParameters {
    /**
     * Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     */
    userKey?: string;
  }
  export interface Params$Resource$Users$Photos$Get extends StandardParameters {
    /**
     * Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     */
    userKey?: string;
  }
  export interface Params$Resource$Users$Photos$Patch
    extends StandardParameters {
    /**
     * Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     */
    userKey?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UserPhoto;
  }
  export interface Params$Resource$Users$Photos$Update
    extends StandardParameters {
    /**
     * Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     */
    userKey?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UserPhoto;
  }

  export class Resource$Verificationcodes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Generates new backup verification codes for the user.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    generate(
      params: Params$Resource$Verificationcodes$Generate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    generate(
      params?: Params$Resource$Verificationcodes$Generate,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    generate(
      params: Params$Resource$Verificationcodes$Generate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    generate(
      params: Params$Resource$Verificationcodes$Generate,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    generate(
      params: Params$Resource$Verificationcodes$Generate,
      callback: BodyResponseCallback<void>
    ): void;
    generate(callback: BodyResponseCallback<void>): void;
    generate(
      paramsOrCallback?:
        | Params$Resource$Verificationcodes$Generate
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Verificationcodes$Generate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Verificationcodes$Generate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/users/{userKey}/verificationCodes/generate'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['userKey'],
        pathParams: ['userKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Invalidates the current backup verification codes for the user.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    invalidate(
      params: Params$Resource$Verificationcodes$Invalidate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    invalidate(
      params?: Params$Resource$Verificationcodes$Invalidate,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    invalidate(
      params: Params$Resource$Verificationcodes$Invalidate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    invalidate(
      params: Params$Resource$Verificationcodes$Invalidate,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    invalidate(
      params: Params$Resource$Verificationcodes$Invalidate,
      callback: BodyResponseCallback<void>
    ): void;
    invalidate(callback: BodyResponseCallback<void>): void;
    invalidate(
      paramsOrCallback?:
        | Params$Resource$Verificationcodes$Invalidate
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Verificationcodes$Invalidate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Verificationcodes$Invalidate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/directory/v1/users/{userKey}/verificationCodes/invalidate'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['userKey'],
        pathParams: ['userKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Returns the current set of valid backup verification codes for the specified user.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Verificationcodes$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Verificationcodes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$VerificationCodes>;
    list(
      params: Params$Resource$Verificationcodes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Verificationcodes$List,
      options: MethodOptions | BodyResponseCallback<Schema$VerificationCodes>,
      callback: BodyResponseCallback<Schema$VerificationCodes>
    ): void;
    list(
      params: Params$Resource$Verificationcodes$List,
      callback: BodyResponseCallback<Schema$VerificationCodes>
    ): void;
    list(callback: BodyResponseCallback<Schema$VerificationCodes>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Verificationcodes$List
        | BodyResponseCallback<Schema$VerificationCodes>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VerificationCodes>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VerificationCodes>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$VerificationCodes>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Verificationcodes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Verificationcodes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/admin/directory/v1/users/{userKey}/verificationCodes'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userKey'],
        pathParams: ['userKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$VerificationCodes>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VerificationCodes>(parameters);
      }
    }
  }

  export interface Params$Resource$Verificationcodes$Generate
    extends StandardParameters {
    /**
     * Email or immutable ID of the user
     */
    userKey?: string;
  }
  export interface Params$Resource$Verificationcodes$Invalidate
    extends StandardParameters {
    /**
     * Email or immutable ID of the user
     */
    userKey?: string;
  }
  export interface Params$Resource$Verificationcodes$List
    extends StandardParameters {
    /**
     * Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     */
    userKey?: string;
  }
}
