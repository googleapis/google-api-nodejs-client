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
   * Admin SDK
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
   * The template that returns individual ASP (Access Code) data. STEPLADDER: Generated unstable field number for field 'kind'. (See http://go/stepladder-help#fieldNumber) STEPLADDER: Generated unstable field number for field 'etag'. (See http://go/stepladder-help#fieldNumber)
   */
  export interface Schema$Asp {
    /**
     * The unique ID of the ASP.
     */
    codeId?: number | null;
    /**
     * The time when the ASP was created. Expressed in Unix time format.
     */
    creationTime?: string | null;
    /**
     * ETag of the ASP.
     */
    etag?: string | null;
    /**
     * The type of the API resource. This is always admin#directory#asp.
     */
    kind?: string | null;
    /**
     * The time when the ASP was last used. Expressed in Unix time format.
     */
    lastTimeUsed?: string | null;
    /**
     * The name of the application that the user, represented by their userId, entered when the ASP was created.
     */
    name?: string | null;
    /**
     * The unique ID of the user who issued the ASP.
     */
    userKey?: string | null;
  }
  /**
   * STEPLADDER: Generated unstable field number for field 'kind'. (See http://go/stepladder-help#fieldNumber) STEPLADDER: Generated unstable field number for field 'etag'. (See http://go/stepladder-help#fieldNumber)
   */
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
     * The type of the API resource. This is always admin#directory#aspList.
     */
    kind?: string | null;
  }
  /**
   * Public API: Resources.buildings
   */
  export interface Schema$Building {
    /**
     * The postal address of the building. See PostalAddress for details. Note that only a single address line and region code are required.
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
     * The type of the resource. For calendar resources, the value is admin#directory#resources#calendars#CalendarResource.
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
     * Identifies this as a collection of CalendarResources. This is always admin#directory#resources#calendars#calendarResourcesList.
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
     * Identifies this as a notification channel used to watch for changes to a resource, which is "api#channel".
     */
    kind?: string | null;
    /**
     * Additional parameters controlling delivery channel behavior. Optional.
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
   * STEPLADDER: Generated unstable field number for field 'kind'. (See http://go/stepladder-help#fieldNumber) STEPLADDER: Generated unstable field number for field 'etag'. (See http://go/stepladder-help#fieldNumber)
   */
  export interface Schema$ChromeOsDevice {
    /**
     * List of active time ranges (Read-only)
     */
    activeTimeRanges?: Array<{activeTime?: number; date?: string}> | null;
    /**
     * AssetId specified during enrollment or through later annotation
     */
    annotatedAssetId?: string | null;
    /**
     * Address or location of the device as noted by the administrator
     */
    annotatedLocation?: string | null;
    /**
     * User of the device
     */
    annotatedUser?: string | null;
    /**
     * (Read-only) The timestamp after which the device will stop receiving Chrome updates or support
     */
    autoUpdateExpiration?: string | null;
    /**
     * Chromebook boot mode (Read-only)
     */
    bootMode?: string | null;
    /**
     * Reports of CPU utilization and temperature (Read-only)
     */
    cpuStatusReports?: Array<{
      cpuTemperatureInfo?: Array<{label?: string; temperature?: number}>;
      cpuUtilizationPercentageInfo?: number[];
      reportTime?: string;
    }> | null;
    /**
     * List of device files to download (Read-only)
     */
    deviceFiles?: Array<{
      createTime?: string;
      downloadUrl?: string;
      name?: string;
      type?: string;
    }> | null;
    /**
     * Unique identifier of Chrome OS Device (Read-only)
     */
    deviceId?: string | null;
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
     * Chromebook Mac Address on ethernet network interface (Read-only)
     */
    ethernetMacAddress?: string | null;
    /**
     * (Read-only) MAC address used by the Chromebook’s internal ethernet port, and for onboard network (ethernet) interface. The format is twelve (12) hexadecimal digits without any delimiter (uppercase letters). This is only relevant for some devices.
     */
    ethernetMacAddress0?: string | null;
    /**
     * Chromebook firmware version (Read-only)
     */
    firmwareVersion?: string | null;
    /**
     * Kind of resource this is.
     */
    kind?: string | null;
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
     * Chromebook Mac Address on wifi network interface (Read-only)
     */
    macAddress?: string | null;
    /**
     * (Read-only) The date the device was manufactured in yyyy-mm-dd format.
     */
    manufactureDate?: string | null;
    /**
     * Contains either the Mobile Equipment identifier (MEID) or the International Mobile Equipment Identity (IMEI) for the 3G mobile card in the Chromebook (Read-only)
     */
    meid?: string | null;
    /**
     * Chromebook Model (Read-only)
     */
    model?: string | null;
    /**
     * Notes added by the administrator
     */
    notes?: string | null;
    /**
     * Chromebook order number (Read-only)
     */
    orderNumber?: string | null;
    /**
     * OrgUnit of the device
     */
    orgUnitPath?: string | null;
    /**
     * Chromebook Os Version (Read-only)
     */
    osVersion?: string | null;
    /**
     * Chromebook platform version (Read-only)
     */
    platformVersion?: string | null;
    /**
     * List of recent device users, in descending order by last login time (Read-only)
     */
    recentUsers?: Array<{email?: string; type?: string}> | null;
    /**
     * Chromebook serial number (Read-only)
     */
    serialNumber?: string | null;
    /**
     * status of the device (Read-only)
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
     * Will Chromebook auto renew after support end date (Read-only)
     */
    willAutoRenew?: boolean | null;
  }
  export interface Schema$ChromeOsDeviceAction {
    /**
     * Action to be taken on the ChromeOs Device
     */
    action?: string | null;
    deprovisionReason?: string | null;
  }
  /**
   * STEPLADDER: Generated unstable field number for field 'kind'. (See http://go/stepladder-help#fieldNumber) STEPLADDER: Generated unstable field number for field 'etag'. (See http://go/stepladder-help#fieldNumber)
   */
  export interface Schema$ChromeOsDevices {
    /**
     * List of Chrome OS Device objects.
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
     * Token used to access next page of this result.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$ChromeOsMoveDevicesToOu {
    /**
     * ChromeOs Devices to be moved to OU
     */
    deviceIds?: string[] | null;
  }
  /**
   * STEPLADDER: Generated unstable field number for field 'kind'. (See http://go/stepladder-help#fieldNumber) STEPLADDER: Generated unstable field number for field 'etag'. (See http://go/stepladder-help#fieldNumber)
   */
  export interface Schema$Customer {
    /**
     * The customer's secondary contact email address. This email address cannot be on the same domain as the customerDomain
     */
    alternateEmail?: string | null;
    /**
     * The customer's creation time (Readonly)
     */
    customerCreationTime?: string | null;
    /**
     * The customer's primary domain name string. Do not include the www prefix when creating a new customer.
     */
    customerDomain?: string | null;
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * The unique ID for the customer's G Suite account. (Readonly)
     */
    id?: string | null;
    /**
     * Identifies the resource as a customer. Value: admin#directory#customer
     */
    kind?: string | null;
    /**
     * The customer's ISO 639-2 language code. The default value is en-US
     */
    language?: string | null;
    /**
     * The customer's contact phone number in E.164 format.
     */
    phoneNumber?: string | null;
    /**
     * The customer's postal address information.
     */
    postalAddress?: Schema$CustomerPostalAddress;
  }
  /**
   * STEPLADDER: Generated unstable field number for field 'address_line2' to avoid collision. (See http://go/stepladder-help#fieldNumber) STEPLADDER: Generated unstable field number for field 'address_line3' to avoid collision. (See http://go/stepladder-help#fieldNumber)
   */
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
     * This is a required property. For countryCode information see the ISO 3166 country code elements.
     */
    countryCode?: string | null;
    /**
     * Name of the locality. An example of a locality value is the city of San Francisco.
     */
    locality?: string | null;
    /**
     * The company or company division name.
     */
    organizationName?: string | null;
    /**
     * The postal code. A postalCode example is a postal zip code such as 10009. This is in accordance with - http: //portablecontacts.net/draft-spec.html#address_element.
     */
    postalCode?: string | null;
    /**
     * Name of the region. An example of a region value is NY for the state of New York.
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
     * The payload for the command, provide it only if command supports it. The following commands support adding payload: - SET_VOLUME: Payload is a stringified JSON object in the form: { "volume": 50 \}. The volume has to be an integer in the range [0,100].
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
     * List of domain alias objects.
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
     * Creation time of the domain. (Read-only).
     */
    creationTime?: string | null;
    /**
     * List of domain alias objects. (Read-only)
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
     * List of domain objects.
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
   * STEPLADDER: Generated unstable field number for field 'kind'. (See http://go/stepladder-help#fieldNumber) STEPLADDER: Generated unstable field number for field 'etag'. (See http://go/stepladder-help#fieldNumber)
   */
  export interface Schema$Group {
    /**
     * Is the group created by admin (Read-only) *
     */
    adminCreated?: boolean | null;
    /**
     * List of aliases (Read-only)
     */
    aliases?: string[] | null;
    /**
     * Description of the group
     */
    description?: string | null;
    /**
     * Group direct members count
     */
    directMembersCount?: string | null;
    /**
     * Email of Group
     */
    email?: string | null;
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * Unique identifier of Group (Read-only)
     */
    id?: string | null;
    /**
     * Kind of resource this is.
     */
    kind?: string | null;
    /**
     * Group name
     */
    name?: string | null;
    /**
     * List of non editable aliases (Read-only)
     */
    nonEditableAliases?: string[] | null;
  }
  /**
   * STEPLADDER: Generated unstable field number for field 'kind'. (See http://go/stepladder-help#fieldNumber) STEPLADDER: Generated unstable field number for field 'etag'. (See http://go/stepladder-help#fieldNumber)
   */
  export interface Schema$Groups {
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * List of group objects.
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
  export interface Schema$Member {
    /**
     * Delivery settings of member
     */
    delivery_settings?: string | null;
    /**
     * Email of member (Read-only)
     */
    email?: string | null;
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * Unique identifier of group (Read-only) Unique identifier of member (Read-only) The unique ID of the group member. A member id can be used as a member request URI's memberKey.
     */
    id?: string | null;
    /**
     * Kind of resource this is.
     */
    kind?: string | null;
    /**
     * Role of member
     */
    role?: string | null;
    /**
     * Status of member (Immutable)
     */
    status?: string | null;
    /**
     * Type of member (Immutable)
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
     * List of member objects.
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
  export interface Schema$MobileDevice {
    /**
     * Adb (USB debugging) enabled or disabled on device (Read-only)
     */
    adbStatus?: boolean | null;
    /**
     * List of applications installed on Mobile Device
     */
    applications?: Array<{
      displayName?: string;
      packageName?: string;
      permission?: string[];
      versionCode?: number;
      versionName?: string;
    }> | null;
    /**
     * Mobile Device Baseband version (Read-only)
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
     * Mobile Device Build number (Read-only)
     */
    buildNumber?: string | null;
    /**
     * The default locale used on the Mobile Device (Read-only)
     */
    defaultLanguage?: string | null;
    /**
     * Developer options enabled or disabled on device (Read-only)
     */
    developerOptionsStatus?: boolean | null;
    /**
     * Mobile Device compromised status (Read-only)
     */
    deviceCompromisedStatus?: string | null;
    /**
     * Mobile Device serial number (Read-only)
     */
    deviceId?: string | null;
    /**
     * DevicePasswordStatus (Read-only)
     */
    devicePasswordStatus?: string | null;
    /**
     * List of owner user's email addresses (Read-only)
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
     * Mobile Device Hardware Id (Read-only)
     */
    hardwareId?: string | null;
    /**
     * Mobile Device IMEI number (Read-only)
     */
    imei?: string | null;
    /**
     * Mobile Device Kernel version (Read-only)
     */
    kernelVersion?: string | null;
    /**
     * Kind of resource this is.
     */
    kind?: string | null;
    /**
     * Date and time the device was last synchronized with the policy settings in the G Suite administrator control panel (Read-only)
     */
    lastSync?: string | null;
    /**
     * Boolean indicating if this account is on owner/primary profile or not (Read-only)
     */
    managedAccountIsOnOwnerProfile?: boolean | null;
    /**
     * Mobile Device manufacturer (Read-only)
     */
    manufacturer?: string | null;
    /**
     * Mobile Device MEID number (Read-only)
     */
    meid?: string | null;
    /**
     * Name of the model of the device
     */
    model?: string | null;
    /**
     * List of owner user's names (Read-only)
     */
    name?: string[] | null;
    /**
     * Mobile Device mobile or network operator (if available) (Read-only)
     */
    networkOperator?: string | null;
    /**
     * Name of the mobile operating system
     */
    os?: string | null;
    /**
     * List of accounts added on device (Read-only)
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
     * Unique identifier of Mobile Device (Read-only)
     */
    resourceId?: string | null;
    /**
     * Mobile Device Security patch level (Read-only)
     */
    securityPatchLevel?: string | null;
    /**
     * Mobile Device SSN or Serial Number (Read-only)
     */
    serialNumber?: string | null;
    /**
     * Status of the device (Read-only)
     */
    status?: string | null;
    /**
     * Work profile supported on device (Read-only)
     */
    supportsWorkProfile?: boolean | null;
    /**
     * The type of device (Read-only)
     */
    type?: string | null;
    /**
     * Unknown sources enabled or disabled on device (Read-only)
     */
    unknownSourcesStatus?: boolean | null;
    /**
     * Mobile Device user agent
     */
    userAgent?: string | null;
    /**
     * Mobile Device WiFi MAC address (Read-only)
     */
    wifiMacAddress?: string | null;
  }
  export interface Schema$MobileDeviceAction {
    /**
     * Action to be taken on the Mobile Device
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
     * List of Mobile Device objects.
     */
    mobiledevices?: Schema$MobileDevice[];
    /**
     * Token used to access next page of this result.
     */
    nextPageToken?: string | null;
  }
  /**
   * JSON template for Org Unit resource in Directory API. STEPLADDER: Generated unstable field number for field 'kind'. (See http://go/stepladder-help#fieldNumber) STEPLADDER: Generated unstable field number for field 'etag'. (See http://go/stepladder-help#fieldNumber)
   */
  export interface Schema$OrgUnit {
    /**
     * Should block inheritance
     */
    blockInheritance?: boolean | null;
    /**
     * Description of OrgUnit
     */
    description?: string | null;
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * Kind of resource this is.
     */
    kind?: string | null;
    /**
     * Name of OrgUnit
     */
    name?: string | null;
    /**
     * Id of OrgUnit
     */
    orgUnitId?: string | null;
    /**
     * Path of OrgUnit
     */
    orgUnitPath?: string | null;
    /**
     * Id of parent OrgUnit
     */
    parentOrgUnitId?: string | null;
    /**
     * Path of parent OrgUnit
     */
    parentOrgUnitPath?: string | null;
  }
  /**
   * JSON response template for List Organization Units operation in Directory API. STEPLADDER: Generated unstable field number for field 'kind'. (See http://go/stepladder-help#fieldNumber) STEPLADDER: Generated unstable field number for field 'etag'. (See http://go/stepladder-help#fieldNumber)
   */
  export interface Schema$OrgUnits {
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * Kind of resource this is.
     */
    kind?: string | null;
    /**
     * List of user objects.
     */
    organizationUnits?: Schema$OrgUnit[];
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
     * The type of the API resource. This is always admin#directory#privilege.
     */
    kind?: string | null;
    /**
     * The name of the privilege.
     */
    privilegeName?: string | null;
    /**
     * The obfuscated ID of the service this privilege is for. This value is returned with Privileges.list().
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
     * The type of the API resource. This is always admin#directory#privileges.
     */
    kind?: string | null;
  }
  export interface Schema$Role {
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * Returns true if the role is a super admin role.
     */
    isSuperAdminRole?: boolean | null;
    /**
     * Returns true if this is a pre-defined system role.
     */
    isSystemRole?: boolean | null;
    /**
     * The type of the API resource. This is always admin#directory#role.
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
  export interface Schema$RoleAssignment {
    /**
     * The unique ID of the user this role is assigned to.
     */
    assignedTo?: string | null;
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * The type of the API resource. This is always admin#directory#roleAssignment.
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
     * The scope in which this role is assigned. Possible values are: - CUSTOMER - ORG_UNIT
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
     * The type of the API resource. This is always admin#directory#roleAssignments .
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
     * The type of the API resource. This is always admin#directory#roles.
     */
    kind?: string | null;
    nextPageToken?: string | null;
  }
  /**
   * JSON template for Schema resource in Directory API. STEPLADDER: Generated unstable field number for field 'kind'. (See http://go/stepladder-help#fieldNumber) STEPLADDER: Generated unstable field number for field 'etag'. (See http://go/stepladder-help#fieldNumber)
   */
  export interface Schema$Schema {
    /**
     * Display name for the schema.
     */
    displayName?: string | null;
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * Fields of Schema
     */
    fields?: Schema$SchemaFieldSpec[];
    /**
     * Kind of resource this is.
     */
    kind?: string | null;
    /**
     * Unique identifier of Schema (Read-only)
     */
    schemaId?: string | null;
    /**
     * Schema name
     */
    schemaName?: string | null;
  }
  /**
   * JSON template for FieldSpec resource for Schemas in Directory API. STEPLADDER: Generated unstable field number for field 'kind'. (See http://go/stepladder-help#fieldNumber) STEPLADDER: Generated unstable field number for field 'etag'. (See http://go/stepladder-help#fieldNumber)
   */
  export interface Schema$SchemaFieldSpec {
    /**
     * Display Name of the field.
     */
    displayName?: string | null;
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * Unique identifier of Field (Read-only)
     */
    fieldId?: string | null;
    /**
     * Name of the field.
     */
    fieldName?: string | null;
    /**
     * Type of the field.
     */
    fieldType?: string | null;
    /**
     * Boolean specifying whether the field is indexed or not.
     */
    indexed?: boolean | null;
    /**
     * Kind of resource this is.
     */
    kind?: string | null;
    /**
     * Boolean specifying whether this is a multi-valued field or not.
     */
    multiValued?: boolean | null;
    /**
     * Indexing spec for a numeric field. By default, only exact match queries will be supported for numeric fields. Setting the numericIndexingSpec allows range queries to be supported.
     */
    numericIndexingSpec?: {maxValue?: number; minValue?: number} | null;
    /**
     * Read ACLs on the field specifying who can view values of this field. Valid values are "ALL_DOMAIN_USERS" and "ADMINS_AND_SELF".
     */
    readAccessType?: string | null;
  }
  /**
   * JSON response template for List Schema operation in Directory API. STEPLADDER: Generated unstable field number for field 'kind'. (See http://go/stepladder-help#fieldNumber) STEPLADDER: Generated unstable field number for field 'etag'. (See http://go/stepladder-help#fieldNumber)
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
     * List of UserSchema objects.
     */
    schemas?: Schema$Schema[];
  }
  /**
   * JSON template for token resource in Directory API. STEPLADDER: Generated unstable field number for field 'kind'. (See http://go/stepladder-help#fieldNumber) STEPLADDER: Generated unstable field number for field 'etag'. (See http://go/stepladder-help#fieldNumber)
   */
  export interface Schema$Token {
    /**
     * Whether the application is registered with Google. The value is true if the application has an anonymous Client ID.
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
     * The type of the API resource. This is always admin#directory#token.
     */
    kind?: string | null;
    /**
     * Whether the token is issued to an installed application. The value is true if the application is installed to a desktop or mobile device.
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
   * JSON response template for List tokens operation in Directory API. STEPLADDER: Generated unstable field number for field 'kind'. (See http://go/stepladder-help#fieldNumber) STEPLADDER: Generated unstable field number for field 'etag'. (See http://go/stepladder-help#fieldNumber)
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
     * The type of the API resource. This is always admin#directory#tokenList.
     */
    kind?: string | null;
  }
  /**
   * STEPLADDER: Generated unstable field number for field 'kind'. (See http://go/stepladder-help#fieldNumber) STEPLADDER: Generated unstable field number for field 'etag'. (See http://go/stepladder-help#fieldNumber) STEPLADDER: Generated unstable field number for field 'external_ids' to avoid collision. (See http://go/stepladder-help#fieldNumber) STEPLADDER: Generated unstable field number for field 'relations' to avoid collision. (See http://go/stepladder-help#fieldNumber) STEPLADDER: Generated unstable field number for field 'addresses' to avoid collision. (See http://go/stepladder-help#fieldNumber) STEPLADDER: Generated unstable field number for field 'organizations' to avoid collision. (See http://go/stepladder-help#fieldNumber) STEPLADDER: Generated unstable field number for field 'phones' to avoid collision. (See http://go/stepladder-help#fieldNumber) STEPLADDER: Generated unstable field number for field 'languages' to avoid collision. (See http://go/stepladder-help#fieldNumber) STEPLADDER: Generated unstable field number for field 'posix_accounts' to avoid collision. (See http://go/stepladder-help#fieldNumber) STEPLADDER: Generated unstable field number for field 'ssh_public_keys' to avoid collision. (See http://go/stepladder-help#fieldNumber) STEPLADDER: Generated unstable field number for field 'notes' to avoid collision. (See http://go/stepladder-help#fieldNumber) STEPLADDER: Generated unstable field number for field 'websites' to avoid collision. (See http://go/stepladder-help#fieldNumber) STEPLADDER: Generated unstable field number for field 'locations' to avoid collision. (See http://go/stepladder-help#fieldNumber) STEPLADDER: Generated unstable field number for field 'keywords' to avoid collision. (See http://go/stepladder-help#fieldNumber) STEPLADDER: Generated unstable field number for field 'gender' to avoid collision. (See http://go/stepladder-help#fieldNumber) STEPLADDER: Generated unstable field number for field 'thumbnail_photo_etag' to avoid collision. (See http://go/stepladder-help#fieldNumber)
   */
  export interface Schema$User {
    /**
     * Addresses of User
     */
    addresses?: any | null;
    /**
     * Output only. Indicates if user has agreed to terms (Read-only)
     */
    agreedToTerms?: boolean | null;
    /**
     * Output only. List of aliases (Read-only)
     */
    aliases?: string[] | null;
    /**
     * Indicates if user is archived.
     */
    archived?: boolean | null;
    /**
     * Boolean indicating if the user should change password in next login
     */
    changePasswordAtNextLogin?: boolean | null;
    /**
     * User's G Suite account creation time. (Read-only)
     */
    creationTime?: string | null;
    /**
     * Output only. CustomerId of User (Read-only)
     */
    customerId?: string | null;
    /**
     * Custom fields of the user.
     */
    customSchemas?: {[key: string]: Schema$UserCustomProperties} | null;
    deletionTime?: string | null;
    /**
     * Emails of User
     */
    emails?: any | null;
    /**
     * Output only. ETag of the resource.
     */
    etag?: string | null;
    /**
     * The external Ids of User *
     */
    externalIds?: any | null;
    /**
     * Gender of User
     */
    gender?: any | null;
    /**
     * Hash function name for password. Supported are MD5, SHA-1 and crypt
     */
    hashFunction?: string | null;
    /**
     * Unique identifier of User (Read-only)
     */
    id?: string | null;
    /**
     * User's Instant Messenger
     */
    ims?: any | null;
    /**
     * Boolean indicating if user is included in Global Address List
     */
    includeInGlobalAddressList?: boolean | null;
    /**
     * Boolean indicating if ip is whitelisted
     */
    ipWhitelisted?: boolean | null;
    /**
     * Output only. Boolean indicating if the user is admin (Read-only)
     */
    isAdmin?: boolean | null;
    /**
     * Output only. Boolean indicating if the user is delegated admin (Read-only)
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
     * Output only. Is mailbox setup (Read-only)
     */
    isMailboxSetup?: boolean | null;
    /**
     * Keywords of User
     */
    keywords?: any | null;
    /**
     * Output only. Kind of resource this is.
     */
    kind?: string | null;
    /**
     * Languages of User
     */
    languages?: any | null;
    /**
     * User's last login time. (Read-only)
     */
    lastLoginTime?: string | null;
    /**
     * Locations of User
     */
    locations?: any | null;
    /**
     * User's name
     */
    name?: Schema$UserName;
    /**
     * Output only. List of non editable aliases (Read-only)
     */
    nonEditableAliases?: string[] | null;
    /**
     * Notes of User
     */
    notes?: any | null;
    /**
     * Organizations of User
     */
    organizations?: any | null;
    /**
     * OrgUnit of User
     */
    orgUnitPath?: string | null;
    /**
     * User's password
     */
    password?: string | null;
    /**
     * Phone numbers of User
     */
    phones?: any | null;
    /**
     * The POSIX accounts of User
     */
    posixAccounts?: any | null;
    /**
     * username of User
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
     * The Relations of User *
     */
    relations?: any | null;
    /**
     * The SSH public keys of User
     */
    sshPublicKeys?: any | null;
    /**
     * Indicates if user is suspended.
     */
    suspended?: boolean | null;
    /**
     * Output only. Suspension reason if user is suspended (Read-only)
     */
    suspensionReason?: string | null;
    /**
     * Output only. ETag of the user's photo (Read-only)
     */
    thumbnailPhotoEtag?: string | null;
    /**
     * Output only. Photo Url of the user (Read-only)
     */
    thumbnailPhotoUrl?: string | null;
    /**
     * Websites of User
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
     * Other language. User can provide own language name if there is no corresponding Google III language code. If this is set LanguageCode can't be set
     */
    customLanguage?: string | null;
    /**
     * Language Code. Should be used for storing Google III LanguageCode string representation for language. Illegal values cause SchemaException.
     */
    languageCode?: string | null;
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
     * Boolean indicating new admin status of the user
     */
    status?: boolean | null;
  }
  export interface Schema$UserName {
    /**
     * Last Name
     */
    familyName?: string | null;
    /**
     * Full Name
     */
    fullName?: string | null;
    /**
     * First Name
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
  /**
   * STEPLADDER: Generated unstable field number for field 'kind'. (See http://go/stepladder-help#fieldNumber) STEPLADDER: Generated unstable field number for field 'etag'. (See http://go/stepladder-help#fieldNumber)
   */
  export interface Schema$UserPhoto {
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * Height in pixels of the photo
     */
    height?: number | null;
    /**
     * Unique identifier of User (Read-only)
     */
    id?: string | null;
    /**
     * Kind of resource this is.
     */
    kind?: string | null;
    /**
     * Mime Type of the photo
     */
    mimeType?: string | null;
    /**
     * Base64 encoded photo data
     */
    photoData?: string | null;
    /**
     * Primary email of User (Read-only)
     */
    primaryEmail?: string | null;
    /**
     * Width in pixels of the photo
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
  /**
   * STEPLADDER: Generated unstable field number for field 'kind'. (See http://go/stepladder-help#fieldNumber) STEPLADDER: Generated unstable field number for field 'etag'. (See http://go/stepladder-help#fieldNumber)
   */
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
     * List of user objects.
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
   * JSON template for verification codes in Directory API. STEPLADDER: Generated unstable field number for field 'kind'. (See http://go/stepladder-help#fieldNumber) STEPLADDER: Generated unstable field number for field 'etag'. (See http://go/stepladder-help#fieldNumber)
   */
  export interface Schema$VerificationCode {
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * The type of the resource. This is always admin#directory#verificationCode.
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
   * JSON response template for List verification codes operation in Directory API. STEPLADDER: Generated unstable field number for field 'kind'. (See http://go/stepladder-help#fieldNumber) STEPLADDER: Generated unstable field number for field 'etag'. (See http://go/stepladder-help#fieldNumber)
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
     * The type of the resource. This is always admin#directory#verificationCodesList.
     */
    kind?: string | null;
  }

  export class Resource$Asps {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Delete an ASP issued by a user.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.user.security'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.asps.delete({
     *     // The unique ID of the ASP to be deleted.
     *     codeId: 'placeholder-value',
     *     // Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     *     userKey: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
     * Get information about an ASP issued by a user.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.user.security'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.asps.get({
     *     // The unique ID of the ASP.
     *     codeId: 'placeholder-value',
     *     // Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     *     userKey: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "codeId": 0,
     *   //   "creationTime": "my_creationTime",
     *   //   "etag": "my_etag",
     *   //   "kind": "my_kind",
     *   //   "lastTimeUsed": "my_lastTimeUsed",
     *   //   "name": "my_name",
     *   //   "userKey": "my_userKey"
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
     * List the ASPs issued by a user.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.user.security'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.asps.list({
     *     // Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     *     userKey: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "items": [],
     *   //   "kind": "my_kind"
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
     * Stop watching resources through this channel.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.user',
     *       'https://www.googleapis.com/auth/admin.directory.user.alias',
     *       'https://www.googleapis.com/auth/admin.directory.user.alias.readonly',
     *       'https://www.googleapis.com/auth/admin.directory.user.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await admin.channels.stop({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "address": "my_address",
     *       //   "expiration": "my_expiration",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "params": {},
     *       //   "payload": false,
     *       //   "resourceId": "my_resourceId",
     *       //   "resourceUri": "my_resourceUri",
     *       //   "token": "my_token",
     *       //   "type": "my_type"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
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
     * Take action on Chrome OS Device
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.device.chromeos'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.chromeosdevices.action({
     *     // Immutable ID of the G Suite account
     *     customerId: 'placeholder-value',
     *     // Immutable ID of Chrome OS Device
     *     resourceId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "action": "my_action",
     *       //   "deprovisionReason": "my_deprovisionReason"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
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
     * Retrieve Chrome OS Device
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.device.chromeos',
     *       'https://www.googleapis.com/auth/admin.directory.device.chromeos.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.chromeosdevices.get({
     *     // Immutable ID of the G Suite account
     *     customerId: 'placeholder-value',
     *     // Immutable ID of Chrome OS Device
     *     deviceId: 'placeholder-value',
     *     // Restrict information returned to a set of selected fields.
     *     projection: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "activeTimeRanges": [],
     *   //   "annotatedAssetId": "my_annotatedAssetId",
     *   //   "annotatedLocation": "my_annotatedLocation",
     *   //   "annotatedUser": "my_annotatedUser",
     *   //   "autoUpdateExpiration": "my_autoUpdateExpiration",
     *   //   "bootMode": "my_bootMode",
     *   //   "cpuStatusReports": [],
     *   //   "deviceFiles": [],
     *   //   "deviceId": "my_deviceId",
     *   //   "diskVolumeReports": [],
     *   //   "dockMacAddress": "my_dockMacAddress",
     *   //   "etag": "my_etag",
     *   //   "ethernetMacAddress": "my_ethernetMacAddress",
     *   //   "ethernetMacAddress0": "my_ethernetMacAddress0",
     *   //   "firmwareVersion": "my_firmwareVersion",
     *   //   "kind": "my_kind",
     *   //   "lastEnrollmentTime": "my_lastEnrollmentTime",
     *   //   "lastKnownNetwork": [],
     *   //   "lastSync": "my_lastSync",
     *   //   "macAddress": "my_macAddress",
     *   //   "manufactureDate": "my_manufactureDate",
     *   //   "meid": "my_meid",
     *   //   "model": "my_model",
     *   //   "notes": "my_notes",
     *   //   "orderNumber": "my_orderNumber",
     *   //   "orgUnitPath": "my_orgUnitPath",
     *   //   "osVersion": "my_osVersion",
     *   //   "platformVersion": "my_platformVersion",
     *   //   "recentUsers": [],
     *   //   "serialNumber": "my_serialNumber",
     *   //   "status": "my_status",
     *   //   "supportEndDate": "my_supportEndDate",
     *   //   "systemRamFreeReports": [],
     *   //   "systemRamTotal": "my_systemRamTotal",
     *   //   "tpmVersionInfo": {},
     *   //   "willAutoRenew": false
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
     * Retrieve all Chrome OS Devices of a customer (paginated)
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.device.chromeos',
     *       'https://www.googleapis.com/auth/admin.directory.device.chromeos.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.chromeosdevices.list({
     *     // Immutable ID of the G Suite account
     *     customerId: 'placeholder-value',
     *     // Maximum number of results to return.
     *     maxResults: 'placeholder-value',
     *     // Column to use for sorting results
     *     orderBy: 'placeholder-value',
     *     // Full path of the organizational unit or its ID
     *     orgUnitPath: 'placeholder-value',
     *     // Token to specify next page in the list
     *     pageToken: 'placeholder-value',
     *     // Restrict information returned to a set of selected fields.
     *     projection: 'placeholder-value',
     *     // Search string in the format given at http://support.google.com/chromeos/a/bin/answer.py?answer=1698333
     *     query: 'placeholder-value',
     *     // Whether to return results in ascending or descending order. Only of use when orderBy is also used
     *     sortOrder: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "chromeosdevices": [],
     *   //   "etag": "my_etag",
     *   //   "kind": "my_kind",
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
     * Move or insert multiple Chrome OS Devices to organizational unit
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.device.chromeos'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.chromeosdevices.moveDevicesToOu({
     *     // Immutable ID of the G Suite account
     *     customerId: 'placeholder-value',
     *     // Full path of the target organizational unit or its ID
     *     orgUnitPath: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "deviceIds": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
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
     * Patch Chrome OS Device
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.device.chromeos'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.chromeosdevices.patch({
     *     // Immutable ID of the G Suite account
     *     customerId: 'placeholder-value',
     *     // Immutable ID of Chrome OS Device
     *     deviceId: 'placeholder-value',
     *     // Restrict information returned to a set of selected fields.
     *     projection: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "activeTimeRanges": [],
     *       //   "annotatedAssetId": "my_annotatedAssetId",
     *       //   "annotatedLocation": "my_annotatedLocation",
     *       //   "annotatedUser": "my_annotatedUser",
     *       //   "autoUpdateExpiration": "my_autoUpdateExpiration",
     *       //   "bootMode": "my_bootMode",
     *       //   "cpuStatusReports": [],
     *       //   "deviceFiles": [],
     *       //   "deviceId": "my_deviceId",
     *       //   "diskVolumeReports": [],
     *       //   "dockMacAddress": "my_dockMacAddress",
     *       //   "etag": "my_etag",
     *       //   "ethernetMacAddress": "my_ethernetMacAddress",
     *       //   "ethernetMacAddress0": "my_ethernetMacAddress0",
     *       //   "firmwareVersion": "my_firmwareVersion",
     *       //   "kind": "my_kind",
     *       //   "lastEnrollmentTime": "my_lastEnrollmentTime",
     *       //   "lastKnownNetwork": [],
     *       //   "lastSync": "my_lastSync",
     *       //   "macAddress": "my_macAddress",
     *       //   "manufactureDate": "my_manufactureDate",
     *       //   "meid": "my_meid",
     *       //   "model": "my_model",
     *       //   "notes": "my_notes",
     *       //   "orderNumber": "my_orderNumber",
     *       //   "orgUnitPath": "my_orgUnitPath",
     *       //   "osVersion": "my_osVersion",
     *       //   "platformVersion": "my_platformVersion",
     *       //   "recentUsers": [],
     *       //   "serialNumber": "my_serialNumber",
     *       //   "status": "my_status",
     *       //   "supportEndDate": "my_supportEndDate",
     *       //   "systemRamFreeReports": [],
     *       //   "systemRamTotal": "my_systemRamTotal",
     *       //   "tpmVersionInfo": {},
     *       //   "willAutoRenew": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "activeTimeRanges": [],
     *   //   "annotatedAssetId": "my_annotatedAssetId",
     *   //   "annotatedLocation": "my_annotatedLocation",
     *   //   "annotatedUser": "my_annotatedUser",
     *   //   "autoUpdateExpiration": "my_autoUpdateExpiration",
     *   //   "bootMode": "my_bootMode",
     *   //   "cpuStatusReports": [],
     *   //   "deviceFiles": [],
     *   //   "deviceId": "my_deviceId",
     *   //   "diskVolumeReports": [],
     *   //   "dockMacAddress": "my_dockMacAddress",
     *   //   "etag": "my_etag",
     *   //   "ethernetMacAddress": "my_ethernetMacAddress",
     *   //   "ethernetMacAddress0": "my_ethernetMacAddress0",
     *   //   "firmwareVersion": "my_firmwareVersion",
     *   //   "kind": "my_kind",
     *   //   "lastEnrollmentTime": "my_lastEnrollmentTime",
     *   //   "lastKnownNetwork": [],
     *   //   "lastSync": "my_lastSync",
     *   //   "macAddress": "my_macAddress",
     *   //   "manufactureDate": "my_manufactureDate",
     *   //   "meid": "my_meid",
     *   //   "model": "my_model",
     *   //   "notes": "my_notes",
     *   //   "orderNumber": "my_orderNumber",
     *   //   "orgUnitPath": "my_orgUnitPath",
     *   //   "osVersion": "my_osVersion",
     *   //   "platformVersion": "my_platformVersion",
     *   //   "recentUsers": [],
     *   //   "serialNumber": "my_serialNumber",
     *   //   "status": "my_status",
     *   //   "supportEndDate": "my_supportEndDate",
     *   //   "systemRamFreeReports": [],
     *   //   "systemRamTotal": "my_systemRamTotal",
     *   //   "tpmVersionInfo": {},
     *   //   "willAutoRenew": false
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
     * Update Chrome OS Device
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.device.chromeos'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.chromeosdevices.update({
     *     // Immutable ID of the G Suite account
     *     customerId: 'placeholder-value',
     *     // Immutable ID of Chrome OS Device
     *     deviceId: 'placeholder-value',
     *     // Restrict information returned to a set of selected fields.
     *     projection: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "activeTimeRanges": [],
     *       //   "annotatedAssetId": "my_annotatedAssetId",
     *       //   "annotatedLocation": "my_annotatedLocation",
     *       //   "annotatedUser": "my_annotatedUser",
     *       //   "autoUpdateExpiration": "my_autoUpdateExpiration",
     *       //   "bootMode": "my_bootMode",
     *       //   "cpuStatusReports": [],
     *       //   "deviceFiles": [],
     *       //   "deviceId": "my_deviceId",
     *       //   "diskVolumeReports": [],
     *       //   "dockMacAddress": "my_dockMacAddress",
     *       //   "etag": "my_etag",
     *       //   "ethernetMacAddress": "my_ethernetMacAddress",
     *       //   "ethernetMacAddress0": "my_ethernetMacAddress0",
     *       //   "firmwareVersion": "my_firmwareVersion",
     *       //   "kind": "my_kind",
     *       //   "lastEnrollmentTime": "my_lastEnrollmentTime",
     *       //   "lastKnownNetwork": [],
     *       //   "lastSync": "my_lastSync",
     *       //   "macAddress": "my_macAddress",
     *       //   "manufactureDate": "my_manufactureDate",
     *       //   "meid": "my_meid",
     *       //   "model": "my_model",
     *       //   "notes": "my_notes",
     *       //   "orderNumber": "my_orderNumber",
     *       //   "orgUnitPath": "my_orgUnitPath",
     *       //   "osVersion": "my_osVersion",
     *       //   "platformVersion": "my_platformVersion",
     *       //   "recentUsers": [],
     *       //   "serialNumber": "my_serialNumber",
     *       //   "status": "my_status",
     *       //   "supportEndDate": "my_supportEndDate",
     *       //   "systemRamFreeReports": [],
     *       //   "systemRamTotal": "my_systemRamTotal",
     *       //   "tpmVersionInfo": {},
     *       //   "willAutoRenew": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "activeTimeRanges": [],
     *   //   "annotatedAssetId": "my_annotatedAssetId",
     *   //   "annotatedLocation": "my_annotatedLocation",
     *   //   "annotatedUser": "my_annotatedUser",
     *   //   "autoUpdateExpiration": "my_autoUpdateExpiration",
     *   //   "bootMode": "my_bootMode",
     *   //   "cpuStatusReports": [],
     *   //   "deviceFiles": [],
     *   //   "deviceId": "my_deviceId",
     *   //   "diskVolumeReports": [],
     *   //   "dockMacAddress": "my_dockMacAddress",
     *   //   "etag": "my_etag",
     *   //   "ethernetMacAddress": "my_ethernetMacAddress",
     *   //   "ethernetMacAddress0": "my_ethernetMacAddress0",
     *   //   "firmwareVersion": "my_firmwareVersion",
     *   //   "kind": "my_kind",
     *   //   "lastEnrollmentTime": "my_lastEnrollmentTime",
     *   //   "lastKnownNetwork": [],
     *   //   "lastSync": "my_lastSync",
     *   //   "macAddress": "my_macAddress",
     *   //   "manufactureDate": "my_manufactureDate",
     *   //   "meid": "my_meid",
     *   //   "model": "my_model",
     *   //   "notes": "my_notes",
     *   //   "orderNumber": "my_orderNumber",
     *   //   "orgUnitPath": "my_orgUnitPath",
     *   //   "osVersion": "my_osVersion",
     *   //   "platformVersion": "my_platformVersion",
     *   //   "recentUsers": [],
     *   //   "serialNumber": "my_serialNumber",
     *   //   "status": "my_status",
     *   //   "supportEndDate": "my_supportEndDate",
     *   //   "systemRamFreeReports": [],
     *   //   "systemRamTotal": "my_systemRamTotal",
     *   //   "tpmVersionInfo": {},
     *   //   "willAutoRenew": false
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
     * Immutable ID of the G Suite account
     */
    customerId?: string;
    /**
     * Immutable ID of Chrome OS Device
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
     * Immutable ID of the G Suite account
     */
    customerId?: string;
    /**
     * Immutable ID of Chrome OS Device
     */
    deviceId?: string;
    /**
     * Restrict information returned to a set of selected fields.
     */
    projection?: string;
  }
  export interface Params$Resource$Chromeosdevices$List
    extends StandardParameters {
    /**
     * Immutable ID of the G Suite account
     */
    customerId?: string;
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * Column to use for sorting results
     */
    orderBy?: string;
    /**
     * Full path of the organizational unit or its ID
     */
    orgUnitPath?: string;
    /**
     * Token to specify next page in the list
     */
    pageToken?: string;
    /**
     * Restrict information returned to a set of selected fields.
     */
    projection?: string;
    /**
     * Search string in the format given at http://support.google.com/chromeos/a/bin/answer.py?answer=1698333
     */
    query?: string;
    /**
     * Whether to return results in ascending or descending order. Only of use when orderBy is also used
     */
    sortOrder?: string;
  }
  export interface Params$Resource$Chromeosdevices$Movedevicestoou
    extends StandardParameters {
    /**
     * Immutable ID of the G Suite account
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
     * Immutable ID of the G Suite account
     */
    customerId?: string;
    /**
     * Immutable ID of Chrome OS Device
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
     * Immutable ID of the G Suite account
     */
    customerId?: string;
    /**
     * Immutable ID of Chrome OS Device
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.device.chromeos'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await admin.customer.devices.chromeos.issueCommand({
     *     // Immutable. Immutable ID of the G Suite account.
     *     customerId: 'placeholder-value',
     *     // Immutable. Immutable ID of Chrome OS Device.
     *     deviceId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "commandType": "my_commandType",
     *       //   "payload": "my_payload"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "commandId": "my_commandId"
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
        | BodyResponseCallback<
            Schema$DirectoryChromeosdevicesIssueCommandResponse
          >,
      callback: BodyResponseCallback<
        Schema$DirectoryChromeosdevicesIssueCommandResponse
      >
    ): void;
    issueCommand(
      params: Params$Resource$Customer$Devices$Chromeos$Issuecommand,
      callback: BodyResponseCallback<
        Schema$DirectoryChromeosdevicesIssueCommandResponse
      >
    ): void;
    issueCommand(
      callback: BodyResponseCallback<
        Schema$DirectoryChromeosdevicesIssueCommandResponse
      >
    ): void;
    issueCommand(
      paramsOrCallback?:
        | Params$Resource$Customer$Devices$Chromeos$Issuecommand
        | BodyResponseCallback<
            Schema$DirectoryChromeosdevicesIssueCommandResponse
          >
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<
            Schema$DirectoryChromeosdevicesIssueCommandResponse
          >
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<
            Schema$DirectoryChromeosdevicesIssueCommandResponse
          >
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
        return createAPIRequest<
          Schema$DirectoryChromeosdevicesIssueCommandResponse
        >(parameters);
      }
    }
  }

  export interface Params$Resource$Customer$Devices$Chromeos$Issuecommand
    extends StandardParameters {
    /**
     * Immutable. Immutable ID of the G Suite account.
     */
    customerId?: string;
    /**
     * Immutable. Immutable ID of Chrome OS Device.
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.device.chromeos',
     *       'https://www.googleapis.com/auth/admin.directory.device.chromeos.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await admin.customer.devices.chromeos.commands.get({
     *     // Immutable. Immutable ID of Chrome OS Device Command.
     *     commandId: 'placeholder-value',
     *     // Immutable. Immutable ID of the G Suite account.
     *     customerId: 'placeholder-value',
     *     // Immutable. Immutable ID of Chrome OS Device.
     *     deviceId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "commandExpireTime": "my_commandExpireTime",
     *   //   "commandId": "my_commandId",
     *   //   "commandResult": {},
     *   //   "issueTime": "my_issueTime",
     *   //   "payload": "my_payload",
     *   //   "state": "my_state",
     *   //   "type": "my_type"
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
     * Immutable. Immutable ID of Chrome OS Device Command.
     */
    commandId?: string;
    /**
     * Immutable. Immutable ID of the G Suite account.
     */
    customerId?: string;
    /**
     * Immutable. Immutable ID of Chrome OS Device.
     */
    deviceId?: string;
  }

  export class Resource$Customers {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves a customer.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.customer',
     *       'https://www.googleapis.com/auth/admin.directory.customer.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.customers.get({
     *     // Id of the customer to be retrieved
     *     customerKey: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternateEmail": "my_alternateEmail",
     *   //   "customerCreationTime": "my_customerCreationTime",
     *   //   "customerDomain": "my_customerDomain",
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "language": "my_language",
     *   //   "phoneNumber": "my_phoneNumber",
     *   //   "postalAddress": {}
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
     * Patch Customers via Apiary Patch Orchestration
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.customer'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.customers.patch({
     *     // Id of the customer to be updated
     *     customerKey: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "alternateEmail": "my_alternateEmail",
     *       //   "customerCreationTime": "my_customerCreationTime",
     *       //   "customerDomain": "my_customerDomain",
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "language": "my_language",
     *       //   "phoneNumber": "my_phoneNumber",
     *       //   "postalAddress": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternateEmail": "my_alternateEmail",
     *   //   "customerCreationTime": "my_customerCreationTime",
     *   //   "customerDomain": "my_customerDomain",
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "language": "my_language",
     *   //   "phoneNumber": "my_phoneNumber",
     *   //   "postalAddress": {}
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.customer'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.customers.update({
     *     // Id of the customer to be updated
     *     customerKey: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "alternateEmail": "my_alternateEmail",
     *       //   "customerCreationTime": "my_customerCreationTime",
     *       //   "customerDomain": "my_customerDomain",
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "language": "my_language",
     *       //   "phoneNumber": "my_phoneNumber",
     *       //   "postalAddress": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternateEmail": "my_alternateEmail",
     *   //   "customerCreationTime": "my_customerCreationTime",
     *   //   "customerDomain": "my_customerDomain",
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "language": "my_language",
     *   //   "phoneNumber": "my_phoneNumber",
     *   //   "postalAddress": {}
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

  export class Resource$Domainaliases {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a domain Alias of the customer.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.domain'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.domainAliases.delete({
     *     // Immutable ID of the G Suite account.
     *     customer: 'placeholder-value',
     *     // Name of domain alias to be retrieved.
     *     domainAliasName: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.domain',
     *       'https://www.googleapis.com/auth/admin.directory.domain.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.domainAliases.get({
     *     // Immutable ID of the G Suite account.
     *     customer: 'placeholder-value',
     *     // Name of domain alias to be retrieved.
     *     domainAliasName: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "creationTime": "my_creationTime",
     *   //   "domainAliasName": "my_domainAliasName",
     *   //   "etag": "my_etag",
     *   //   "kind": "my_kind",
     *   //   "parentDomainName": "my_parentDomainName",
     *   //   "verified": false
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.domain'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.domainAliases.insert({
     *     // Immutable ID of the G Suite account.
     *     customer: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "creationTime": "my_creationTime",
     *       //   "domainAliasName": "my_domainAliasName",
     *       //   "etag": "my_etag",
     *       //   "kind": "my_kind",
     *       //   "parentDomainName": "my_parentDomainName",
     *       //   "verified": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "creationTime": "my_creationTime",
     *   //   "domainAliasName": "my_domainAliasName",
     *   //   "etag": "my_etag",
     *   //   "kind": "my_kind",
     *   //   "parentDomainName": "my_parentDomainName",
     *   //   "verified": false
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.domain',
     *       'https://www.googleapis.com/auth/admin.directory.domain.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.domainAliases.list({
     *     // Immutable ID of the G Suite account.
     *     customer: 'placeholder-value',
     *     // Name of the parent domain for which domain aliases are to be fetched.
     *     parentDomainName: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "domainAliases": [],
     *   //   "etag": "my_etag",
     *   //   "kind": "my_kind"
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
     * Immutable ID of the G Suite account.
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
     * Immutable ID of the G Suite account.
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
     * Immutable ID of the G Suite account.
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
     * Immutable ID of the G Suite account.
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.domain'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.domains.delete({
     *     // Immutable ID of the G Suite account.
     *     customer: 'placeholder-value',
     *     // Name of domain to be deleted
     *     domainName: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.domain',
     *       'https://www.googleapis.com/auth/admin.directory.domain.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.domains.get({
     *     // Immutable ID of the G Suite account.
     *     customer: 'placeholder-value',
     *     // Name of domain to be retrieved
     *     domainName: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "creationTime": "my_creationTime",
     *   //   "domainAliases": [],
     *   //   "domainName": "my_domainName",
     *   //   "etag": "my_etag",
     *   //   "isPrimary": false,
     *   //   "kind": "my_kind",
     *   //   "verified": false
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.domain'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.domains.insert({
     *     // Immutable ID of the G Suite account.
     *     customer: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "creationTime": "my_creationTime",
     *       //   "domainAliases": [],
     *       //   "domainName": "my_domainName",
     *       //   "etag": "my_etag",
     *       //   "isPrimary": false,
     *       //   "kind": "my_kind",
     *       //   "verified": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "creationTime": "my_creationTime",
     *   //   "domainAliases": [],
     *   //   "domainName": "my_domainName",
     *   //   "etag": "my_etag",
     *   //   "isPrimary": false,
     *   //   "kind": "my_kind",
     *   //   "verified": false
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.domain',
     *       'https://www.googleapis.com/auth/admin.directory.domain.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.domains.list({
     *     // Immutable ID of the G Suite account.
     *     customer: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "domains": [],
     *   //   "etag": "my_etag",
     *   //   "kind": "my_kind"
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
     * Immutable ID of the G Suite account.
     */
    customer?: string;
    /**
     * Name of domain to be deleted
     */
    domainName?: string;
  }
  export interface Params$Resource$Domains$Get extends StandardParameters {
    /**
     * Immutable ID of the G Suite account.
     */
    customer?: string;
    /**
     * Name of domain to be retrieved
     */
    domainName?: string;
  }
  export interface Params$Resource$Domains$Insert extends StandardParameters {
    /**
     * Immutable ID of the G Suite account.
     */
    customer?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Domains;
  }
  export interface Params$Resource$Domains$List extends StandardParameters {
    /**
     * Immutable ID of the G Suite account.
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
     * Delete Group
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.group'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.groups.delete({
     *     // Email or immutable ID of the group
     *     groupKey: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
     * Retrieve Group
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.group',
     *       'https://www.googleapis.com/auth/admin.directory.group.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.groups.get({
     *     // Email or immutable ID of the group
     *     groupKey: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adminCreated": false,
     *   //   "aliases": [],
     *   //   "description": "my_description",
     *   //   "directMembersCount": "my_directMembersCount",
     *   //   "email": "my_email",
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "nonEditableAliases": []
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
     * Create Group
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.group'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.groups.insert({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "adminCreated": false,
     *       //   "aliases": [],
     *       //   "description": "my_description",
     *       //   "directMembersCount": "my_directMembersCount",
     *       //   "email": "my_email",
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "name": "my_name",
     *       //   "nonEditableAliases": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adminCreated": false,
     *   //   "aliases": [],
     *   //   "description": "my_description",
     *   //   "directMembersCount": "my_directMembersCount",
     *   //   "email": "my_email",
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "nonEditableAliases": []
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
     * Retrieve all groups of a domain or of a user given a userKey (paginated)
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.group',
     *       'https://www.googleapis.com/auth/admin.directory.group.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.groups.list({
     *     // Immutable ID of the G Suite account. In case of multi-domain, to fetch all groups for a customer, fill this field instead of domain.
     *     customer: 'placeholder-value',
     *     // Name of the domain. Fill this field to get groups from only this domain. To return all groups in a multi-domain fill customer field instead.
     *     domain: 'placeholder-value',
     *     // Maximum number of results to return. Max allowed value is 200.
     *     maxResults: 'placeholder-value',
     *     // Column to use for sorting results
     *     orderBy: 'placeholder-value',
     *     // Token to specify next page in the list
     *     pageToken: 'placeholder-value',
     *     // Query string search. Should be of the form "". Complete documentation is at https: //developers.google.com/admin-sdk/directory/v1/guides/search-groups
     *     query: 'placeholder-value',
     *     // Whether to return results in ascending or descending order. Only of use when orderBy is also used
     *     sortOrder: 'placeholder-value',
     *     // Email or immutable ID of the user if only those groups are to be listed, the given user is a member of. If it's an ID, it should match with the ID of the user object.
     *     userKey: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "groups": [],
     *   //   "kind": "my_kind",
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
     * Patch Groups via Apiary Patch Orchestration
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.group'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.groups.patch({
     *     // Email or immutable ID of the group. If ID, it should match with id of group object
     *     groupKey: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "adminCreated": false,
     *       //   "aliases": [],
     *       //   "description": "my_description",
     *       //   "directMembersCount": "my_directMembersCount",
     *       //   "email": "my_email",
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "name": "my_name",
     *       //   "nonEditableAliases": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adminCreated": false,
     *   //   "aliases": [],
     *   //   "description": "my_description",
     *   //   "directMembersCount": "my_directMembersCount",
     *   //   "email": "my_email",
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "nonEditableAliases": []
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
     * Update Group
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.group'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.groups.update({
     *     // Email or immutable ID of the group. If ID, it should match with id of group object
     *     groupKey: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "adminCreated": false,
     *       //   "aliases": [],
     *       //   "description": "my_description",
     *       //   "directMembersCount": "my_directMembersCount",
     *       //   "email": "my_email",
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "name": "my_name",
     *       //   "nonEditableAliases": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adminCreated": false,
     *   //   "aliases": [],
     *   //   "description": "my_description",
     *   //   "directMembersCount": "my_directMembersCount",
     *   //   "email": "my_email",
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "nonEditableAliases": []
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
     * Email or immutable ID of the group
     */
    groupKey?: string;
  }
  export interface Params$Resource$Groups$Get extends StandardParameters {
    /**
     * Email or immutable ID of the group
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
     * Immutable ID of the G Suite account. In case of multi-domain, to fetch all groups for a customer, fill this field instead of domain.
     */
    customer?: string;
    /**
     * Name of the domain. Fill this field to get groups from only this domain. To return all groups in a multi-domain fill customer field instead.
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
     * Email or immutable ID of the group. If ID, it should match with id of group object
     */
    groupKey?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Group;
  }
  export interface Params$Resource$Groups$Update extends StandardParameters {
    /**
     * Email or immutable ID of the group. If ID, it should match with id of group object
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
     * Remove a alias for the group
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.group'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.groups.aliases.delete({
     *     // The alias to be removed
     *     alias: 'placeholder-value',
     *     // Email or immutable ID of the group
     *     groupKey: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
     * Add a alias for the group
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.group'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.groups.aliases.insert({
     *     // Email or immutable ID of the group
     *     groupKey: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "alias": "my_alias",
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "primaryEmail": "my_primaryEmail"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alias": "my_alias",
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "primaryEmail": "my_primaryEmail"
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
     * List all aliases for a group
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.group',
     *       'https://www.googleapis.com/auth/admin.directory.group.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.groups.aliases.list({
     *     // Email or immutable ID of the group
     *     groupKey: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "aliases": [],
     *   //   "etag": "my_etag",
     *   //   "kind": "my_kind"
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
     * Email or immutable ID of the group
     */
    groupKey?: string;
  }
  export interface Params$Resource$Groups$Aliases$Insert
    extends StandardParameters {
    /**
     * Email or immutable ID of the group
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
     * Email or immutable ID of the group
     */
    groupKey?: string;
  }

  export class Resource$Members {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Remove membership.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.group',
     *       'https://www.googleapis.com/auth/admin.directory.group.member',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.members.delete({
     *     // Email or immutable ID of the group
     *     groupKey: 'placeholder-value',
     *     // Email or immutable ID of the member
     *     memberKey: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
     * Retrieve Group Member
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.group',
     *       'https://www.googleapis.com/auth/admin.directory.group.member',
     *       'https://www.googleapis.com/auth/admin.directory.group.member.readonly',
     *       'https://www.googleapis.com/auth/admin.directory.group.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.members.get({
     *     // Email or immutable ID of the group
     *     groupKey: 'placeholder-value',
     *     // Email or immutable ID of the member
     *     memberKey: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "delivery_settings": "my_delivery_settings",
     *   //   "email": "my_email",
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "role": "my_role",
     *   //   "status": "my_status",
     *   //   "type": "my_type"
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
     * Checks whether the given user is a member of the group. Membership can be direct or nested.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.group',
     *       'https://www.googleapis.com/auth/admin.directory.group.member',
     *       'https://www.googleapis.com/auth/admin.directory.group.member.readonly',
     *       'https://www.googleapis.com/auth/admin.directory.group.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.members.hasMember({
     *     // Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
     *     groupKey: 'placeholder-value',
     *     // Identifies the user member in the API request. The value can be the user's primary email address, alias, or unique ID.
     *     memberKey: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "isMember": false
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
     * Add user to the specified group.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.group',
     *       'https://www.googleapis.com/auth/admin.directory.group.member',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.members.insert({
     *     // Email or immutable ID of the group
     *     groupKey: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "delivery_settings": "my_delivery_settings",
     *       //   "email": "my_email",
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "role": "my_role",
     *       //   "status": "my_status",
     *       //   "type": "my_type"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "delivery_settings": "my_delivery_settings",
     *   //   "email": "my_email",
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "role": "my_role",
     *   //   "status": "my_status",
     *   //   "type": "my_type"
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
     * Retrieve all members in a group (paginated)
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.group',
     *       'https://www.googleapis.com/auth/admin.directory.group.member',
     *       'https://www.googleapis.com/auth/admin.directory.group.member.readonly',
     *       'https://www.googleapis.com/auth/admin.directory.group.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.members.list({
     *     // Email or immutable ID of the group
     *     groupKey: 'placeholder-value',
     *     // Whether to list indirect memberships. Default: false.
     *     includeDerivedMembership: 'placeholder-value',
     *     // Maximum number of results to return. Max allowed value is 200.
     *     maxResults: 'placeholder-value',
     *     // Token to specify next page in the list
     *     pageToken: 'placeholder-value',
     *     // Comma separated role values to filter list results on.
     *     roles: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "kind": "my_kind",
     *   //   "members": [],
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
     * Patch Member via Apiary Patch Orchestration
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.group',
     *       'https://www.googleapis.com/auth/admin.directory.group.member',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.members.patch({
     *     // Email or immutable ID of the group. If ID, it should match with id of group object
     *     groupKey: 'placeholder-value',
     *     // Email or immutable ID of the user. If ID, it should match with id of member object
     *     memberKey: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "delivery_settings": "my_delivery_settings",
     *       //   "email": "my_email",
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "role": "my_role",
     *       //   "status": "my_status",
     *       //   "type": "my_type"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "delivery_settings": "my_delivery_settings",
     *   //   "email": "my_email",
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "role": "my_role",
     *   //   "status": "my_status",
     *   //   "type": "my_type"
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
     * Update membership of a user in the specified group.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.group',
     *       'https://www.googleapis.com/auth/admin.directory.group.member',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.members.update({
     *     // Email or immutable ID of the group. If ID, it should match with id of group object
     *     groupKey: 'placeholder-value',
     *     // Email or immutable ID of the user. If ID, it should match with id of member object
     *     memberKey: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "delivery_settings": "my_delivery_settings",
     *       //   "email": "my_email",
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "role": "my_role",
     *       //   "status": "my_status",
     *       //   "type": "my_type"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "delivery_settings": "my_delivery_settings",
     *   //   "email": "my_email",
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "role": "my_role",
     *   //   "status": "my_status",
     *   //   "type": "my_type"
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
     * Email or immutable ID of the group
     */
    groupKey?: string;
    /**
     * Email or immutable ID of the member
     */
    memberKey?: string;
  }
  export interface Params$Resource$Members$Get extends StandardParameters {
    /**
     * Email or immutable ID of the group
     */
    groupKey?: string;
    /**
     * Email or immutable ID of the member
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
     * Email or immutable ID of the group
     */
    groupKey?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Member;
  }
  export interface Params$Resource$Members$List extends StandardParameters {
    /**
     * Email or immutable ID of the group
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
     * Token to specify next page in the list
     */
    pageToken?: string;
    /**
     * Comma separated role values to filter list results on.
     */
    roles?: string;
  }
  export interface Params$Resource$Members$Patch extends StandardParameters {
    /**
     * Email or immutable ID of the group. If ID, it should match with id of group object
     */
    groupKey?: string;
    /**
     * Email or immutable ID of the user. If ID, it should match with id of member object
     */
    memberKey?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Member;
  }
  export interface Params$Resource$Members$Update extends StandardParameters {
    /**
     * Email or immutable ID of the group. If ID, it should match with id of group object
     */
    groupKey?: string;
    /**
     * Email or immutable ID of the user. If ID, it should match with id of member object
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
     * Take action on Mobile Device
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.device.mobile',
     *       'https://www.googleapis.com/auth/admin.directory.device.mobile.action',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.mobiledevices.action({
     *     // Immutable ID of the G Suite account
     *     customerId: 'placeholder-value',
     *     // Immutable ID of Mobile Device
     *     resourceId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "action": "my_action"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
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
     * Delete Mobile Device
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.device.mobile'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.mobiledevices.delete({
     *     // Immutable ID of the G Suite account
     *     customerId: 'placeholder-value',
     *     // Immutable ID of Mobile Device
     *     resourceId: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
     * Retrieve Mobile Device
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.device.mobile',
     *       'https://www.googleapis.com/auth/admin.directory.device.mobile.action',
     *       'https://www.googleapis.com/auth/admin.directory.device.mobile.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.mobiledevices.get({
     *     // Immutable ID of the G Suite account
     *     customerId: 'placeholder-value',
     *     // Restrict information returned to a set of selected fields.
     *     projection: 'placeholder-value',
     *     // Immutable ID of Mobile Device
     *     resourceId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adbStatus": false,
     *   //   "applications": [],
     *   //   "basebandVersion": "my_basebandVersion",
     *   //   "bootloaderVersion": "my_bootloaderVersion",
     *   //   "brand": "my_brand",
     *   //   "buildNumber": "my_buildNumber",
     *   //   "defaultLanguage": "my_defaultLanguage",
     *   //   "developerOptionsStatus": false,
     *   //   "deviceCompromisedStatus": "my_deviceCompromisedStatus",
     *   //   "deviceId": "my_deviceId",
     *   //   "devicePasswordStatus": "my_devicePasswordStatus",
     *   //   "email": [],
     *   //   "encryptionStatus": "my_encryptionStatus",
     *   //   "etag": "my_etag",
     *   //   "firstSync": "my_firstSync",
     *   //   "hardware": "my_hardware",
     *   //   "hardwareId": "my_hardwareId",
     *   //   "imei": "my_imei",
     *   //   "kernelVersion": "my_kernelVersion",
     *   //   "kind": "my_kind",
     *   //   "lastSync": "my_lastSync",
     *   //   "managedAccountIsOnOwnerProfile": false,
     *   //   "manufacturer": "my_manufacturer",
     *   //   "meid": "my_meid",
     *   //   "model": "my_model",
     *   //   "name": [],
     *   //   "networkOperator": "my_networkOperator",
     *   //   "os": "my_os",
     *   //   "otherAccountsInfo": [],
     *   //   "privilege": "my_privilege",
     *   //   "releaseVersion": "my_releaseVersion",
     *   //   "resourceId": "my_resourceId",
     *   //   "securityPatchLevel": "my_securityPatchLevel",
     *   //   "serialNumber": "my_serialNumber",
     *   //   "status": "my_status",
     *   //   "supportsWorkProfile": false,
     *   //   "type": "my_type",
     *   //   "unknownSourcesStatus": false,
     *   //   "userAgent": "my_userAgent",
     *   //   "wifiMacAddress": "my_wifiMacAddress"
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
     * Retrieve all Mobile Devices of a customer (paginated)
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.device.mobile',
     *       'https://www.googleapis.com/auth/admin.directory.device.mobile.action',
     *       'https://www.googleapis.com/auth/admin.directory.device.mobile.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.mobiledevices.list({
     *     // Immutable ID of the G Suite account
     *     customerId: 'placeholder-value',
     *     // Maximum number of results to return. Max allowed value is 100.
     *     maxResults: 'placeholder-value',
     *     // Column to use for sorting results
     *     orderBy: 'placeholder-value',
     *     // Token to specify next page in the list
     *     pageToken: 'placeholder-value',
     *     // Restrict information returned to a set of selected fields.
     *     projection: 'placeholder-value',
     *     // Search string in the format given at http://support.google.com/a/bin/answer.py?answer=1408863#search
     *     query: 'placeholder-value',
     *     // Whether to return results in ascending or descending order. Only of use when orderBy is also used
     *     sortOrder: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "kind": "my_kind",
     *   //   "mobiledevices": [],
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
     * Immutable ID of the G Suite account
     */
    customerId?: string;
    /**
     * Immutable ID of Mobile Device
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
     * Immutable ID of the G Suite account
     */
    customerId?: string;
    /**
     * Immutable ID of Mobile Device
     */
    resourceId?: string;
  }
  export interface Params$Resource$Mobiledevices$Get
    extends StandardParameters {
    /**
     * Immutable ID of the G Suite account
     */
    customerId?: string;
    /**
     * Restrict information returned to a set of selected fields.
     */
    projection?: string;
    /**
     * Immutable ID of Mobile Device
     */
    resourceId?: string;
  }
  export interface Params$Resource$Mobiledevices$List
    extends StandardParameters {
    /**
     * Immutable ID of the G Suite account
     */
    customerId?: string;
    /**
     * Maximum number of results to return. Max allowed value is 100.
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
     * Restrict information returned to a set of selected fields.
     */
    projection?: string;
    /**
     * Search string in the format given at http://support.google.com/a/bin/answer.py?answer=1408863#search
     */
    query?: string;
    /**
     * Whether to return results in ascending or descending order. Only of use when orderBy is also used
     */
    sortOrder?: string;
  }

  export class Resource$Orgunits {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Remove organizational unit
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.orgunit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.orgunits.delete({
     *     // Immutable ID of the G Suite account
     *     customerId: 'placeholder-value',
     *     // Full path of the organizational unit or its ID
     *     orgUnitPath: '.*',
     *   });
     *   console.log(res.data);
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
     * Retrieve organizational unit
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.orgunit',
     *       'https://www.googleapis.com/auth/admin.directory.orgunit.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.orgunits.get({
     *     // Immutable ID of the G Suite account
     *     customerId: 'placeholder-value',
     *     // Full path of the organizational unit or its ID
     *     orgUnitPath: '.*',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "blockInheritance": false,
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "orgUnitId": "my_orgUnitId",
     *   //   "orgUnitPath": "my_orgUnitPath",
     *   //   "parentOrgUnitId": "my_parentOrgUnitId",
     *   //   "parentOrgUnitPath": "my_parentOrgUnitPath"
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
     * Add organizational unit
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.orgunit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.orgunits.insert({
     *     // Immutable ID of the G Suite account
     *     customerId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "blockInheritance": false,
     *       //   "description": "my_description",
     *       //   "etag": "my_etag",
     *       //   "kind": "my_kind",
     *       //   "name": "my_name",
     *       //   "orgUnitId": "my_orgUnitId",
     *       //   "orgUnitPath": "my_orgUnitPath",
     *       //   "parentOrgUnitId": "my_parentOrgUnitId",
     *       //   "parentOrgUnitPath": "my_parentOrgUnitPath"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "blockInheritance": false,
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "orgUnitId": "my_orgUnitId",
     *   //   "orgUnitPath": "my_orgUnitPath",
     *   //   "parentOrgUnitId": "my_parentOrgUnitId",
     *   //   "parentOrgUnitPath": "my_parentOrgUnitPath"
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
     * Retrieve all organizational units
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.orgunit',
     *       'https://www.googleapis.com/auth/admin.directory.orgunit.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.orgunits.list({
     *     // Immutable ID of the G Suite account
     *     customerId: 'placeholder-value',
     *     // the URL-encoded organizational unit's path or its ID
     *     orgUnitPath: 'placeholder-value',
     *     // Whether to return all sub-organizations or just immediate children
     *     type: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "kind": "my_kind",
     *   //   "organizationUnits": []
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
     * Patch organization unit via Apiary Patch Orchestration
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.orgunit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.orgunits.patch({
     *     // Immutable ID of the G Suite account
     *     customerId: 'placeholder-value',
     *     // Full path of the organizational unit or its ID
     *     orgUnitPath: '.*',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "blockInheritance": false,
     *       //   "description": "my_description",
     *       //   "etag": "my_etag",
     *       //   "kind": "my_kind",
     *       //   "name": "my_name",
     *       //   "orgUnitId": "my_orgUnitId",
     *       //   "orgUnitPath": "my_orgUnitPath",
     *       //   "parentOrgUnitId": "my_parentOrgUnitId",
     *       //   "parentOrgUnitPath": "my_parentOrgUnitPath"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "blockInheritance": false,
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "orgUnitId": "my_orgUnitId",
     *   //   "orgUnitPath": "my_orgUnitPath",
     *   //   "parentOrgUnitId": "my_parentOrgUnitId",
     *   //   "parentOrgUnitPath": "my_parentOrgUnitPath"
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
     * Update organizational unit
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.orgunit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.orgunits.update({
     *     // Immutable ID of the G Suite account
     *     customerId: 'placeholder-value',
     *     // Full path of the organizational unit or its ID
     *     orgUnitPath: '.*',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "blockInheritance": false,
     *       //   "description": "my_description",
     *       //   "etag": "my_etag",
     *       //   "kind": "my_kind",
     *       //   "name": "my_name",
     *       //   "orgUnitId": "my_orgUnitId",
     *       //   "orgUnitPath": "my_orgUnitPath",
     *       //   "parentOrgUnitId": "my_parentOrgUnitId",
     *       //   "parentOrgUnitPath": "my_parentOrgUnitPath"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "blockInheritance": false,
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "orgUnitId": "my_orgUnitId",
     *   //   "orgUnitPath": "my_orgUnitPath",
     *   //   "parentOrgUnitId": "my_parentOrgUnitId",
     *   //   "parentOrgUnitPath": "my_parentOrgUnitPath"
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
     * Immutable ID of the G Suite account
     */
    customerId?: string;
    /**
     * Full path of the organizational unit or its ID
     */
    orgUnitPath?: string;
  }
  export interface Params$Resource$Orgunits$Get extends StandardParameters {
    /**
     * Immutable ID of the G Suite account
     */
    customerId?: string;
    /**
     * Full path of the organizational unit or its ID
     */
    orgUnitPath?: string;
  }
  export interface Params$Resource$Orgunits$Insert extends StandardParameters {
    /**
     * Immutable ID of the G Suite account
     */
    customerId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$OrgUnit;
  }
  export interface Params$Resource$Orgunits$List extends StandardParameters {
    /**
     * Immutable ID of the G Suite account
     */
    customerId?: string;
    /**
     * the URL-encoded organizational unit's path or its ID
     */
    orgUnitPath?: string;
    /**
     * Whether to return all sub-organizations or just immediate children
     */
    type?: string;
  }
  export interface Params$Resource$Orgunits$Patch extends StandardParameters {
    /**
     * Immutable ID of the G Suite account
     */
    customerId?: string;
    /**
     * Full path of the organizational unit or its ID
     */
    orgUnitPath?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$OrgUnit;
  }
  export interface Params$Resource$Orgunits$Update extends StandardParameters {
    /**
     * Immutable ID of the G Suite account
     */
    customerId?: string;
    /**
     * Full path of the organizational unit or its ID
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.rolemanagement',
     *       'https://www.googleapis.com/auth/admin.directory.rolemanagement.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.privileges.list({
     *     // Immutable ID of the G Suite account.
     *     customer: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "items": [],
     *   //   "kind": "my_kind"
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
     * Immutable ID of the G Suite account.
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.resource.calendar',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.resources.buildings.delete({
     *     // The id of the building to delete.
     *     buildingId: 'placeholder-value',
     *     // The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
     *     customer: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.resource.calendar',
     *       'https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.resources.buildings.get({
     *     // The unique ID of the building to retrieve.
     *     buildingId: 'placeholder-value',
     *     // The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
     *     customer: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "address": {},
     *   //   "buildingId": "my_buildingId",
     *   //   "buildingName": "my_buildingName",
     *   //   "coordinates": {},
     *   //   "description": "my_description",
     *   //   "etags": "my_etags",
     *   //   "floorNames": [],
     *   //   "kind": "my_kind"
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.resource.calendar',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.resources.buildings.insert({
     *     // Source from which Building.coordinates are derived.
     *     coordinatesSource: 'placeholder-value',
     *     // The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
     *     customer: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "address": {},
     *       //   "buildingId": "my_buildingId",
     *       //   "buildingName": "my_buildingName",
     *       //   "coordinates": {},
     *       //   "description": "my_description",
     *       //   "etags": "my_etags",
     *       //   "floorNames": [],
     *       //   "kind": "my_kind"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "address": {},
     *   //   "buildingId": "my_buildingId",
     *   //   "buildingName": "my_buildingName",
     *   //   "coordinates": {},
     *   //   "description": "my_description",
     *   //   "etags": "my_etags",
     *   //   "floorNames": [],
     *   //   "kind": "my_kind"
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.resource.calendar',
     *       'https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.resources.buildings.list({
     *     // The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
     *     customer: 'placeholder-value',
     *     // Maximum number of results to return.
     *     maxResults: 'placeholder-value',
     *     // Token to specify the next page in the list.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "buildings": [],
     *   //   "etag": "my_etag",
     *   //   "kind": "my_kind",
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
     * Patches a building via Apiary Patch Orchestration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.resource.calendar',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.resources.buildings.patch({
     *     // The id of the building to update.
     *     buildingId: 'placeholder-value',
     *     // Source from which Building.coordinates are derived.
     *     coordinatesSource: 'placeholder-value',
     *     // The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
     *     customer: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "address": {},
     *       //   "buildingId": "my_buildingId",
     *       //   "buildingName": "my_buildingName",
     *       //   "coordinates": {},
     *       //   "description": "my_description",
     *       //   "etags": "my_etags",
     *       //   "floorNames": [],
     *       //   "kind": "my_kind"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "address": {},
     *   //   "buildingId": "my_buildingId",
     *   //   "buildingName": "my_buildingName",
     *   //   "coordinates": {},
     *   //   "description": "my_description",
     *   //   "etags": "my_etags",
     *   //   "floorNames": [],
     *   //   "kind": "my_kind"
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.resource.calendar',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.resources.buildings.update({
     *     // The id of the building to update.
     *     buildingId: 'placeholder-value',
     *     // Source from which Building.coordinates are derived.
     *     coordinatesSource: 'placeholder-value',
     *     // The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
     *     customer: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "address": {},
     *       //   "buildingId": "my_buildingId",
     *       //   "buildingName": "my_buildingName",
     *       //   "coordinates": {},
     *       //   "description": "my_description",
     *       //   "etags": "my_etags",
     *       //   "floorNames": [],
     *       //   "kind": "my_kind"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "address": {},
     *   //   "buildingId": "my_buildingId",
     *   //   "buildingName": "my_buildingName",
     *   //   "coordinates": {},
     *   //   "description": "my_description",
     *   //   "etags": "my_etags",
     *   //   "floorNames": [],
     *   //   "kind": "my_kind"
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
     * The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
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
     * The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
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
     * The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
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
     * The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
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
     * The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
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
     * The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.resource.calendar',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.resources.calendars.delete({
     *     // The unique ID of the calendar resource to delete.
     *     calendarResourceId: 'placeholder-value',
     *     // The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
     *     customer: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.resource.calendar',
     *       'https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.resources.calendars.get({
     *     // The unique ID of the calendar resource to retrieve.
     *     calendarResourceId: 'placeholder-value',
     *     // The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
     *     customer: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "buildingId": "my_buildingId",
     *   //   "capacity": 0,
     *   //   "etags": "my_etags",
     *   //   "featureInstances": {},
     *   //   "floorName": "my_floorName",
     *   //   "floorSection": "my_floorSection",
     *   //   "generatedResourceName": "my_generatedResourceName",
     *   //   "kind": "my_kind",
     *   //   "resourceCategory": "my_resourceCategory",
     *   //   "resourceDescription": "my_resourceDescription",
     *   //   "resourceEmail": "my_resourceEmail",
     *   //   "resourceId": "my_resourceId",
     *   //   "resourceName": "my_resourceName",
     *   //   "resourceType": "my_resourceType",
     *   //   "userVisibleDescription": "my_userVisibleDescription"
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.resource.calendar',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.resources.calendars.insert({
     *     // The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
     *     customer: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "buildingId": "my_buildingId",
     *       //   "capacity": 0,
     *       //   "etags": "my_etags",
     *       //   "featureInstances": {},
     *       //   "floorName": "my_floorName",
     *       //   "floorSection": "my_floorSection",
     *       //   "generatedResourceName": "my_generatedResourceName",
     *       //   "kind": "my_kind",
     *       //   "resourceCategory": "my_resourceCategory",
     *       //   "resourceDescription": "my_resourceDescription",
     *       //   "resourceEmail": "my_resourceEmail",
     *       //   "resourceId": "my_resourceId",
     *       //   "resourceName": "my_resourceName",
     *       //   "resourceType": "my_resourceType",
     *       //   "userVisibleDescription": "my_userVisibleDescription"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "buildingId": "my_buildingId",
     *   //   "capacity": 0,
     *   //   "etags": "my_etags",
     *   //   "featureInstances": {},
     *   //   "floorName": "my_floorName",
     *   //   "floorSection": "my_floorSection",
     *   //   "generatedResourceName": "my_generatedResourceName",
     *   //   "kind": "my_kind",
     *   //   "resourceCategory": "my_resourceCategory",
     *   //   "resourceDescription": "my_resourceDescription",
     *   //   "resourceEmail": "my_resourceEmail",
     *   //   "resourceId": "my_resourceId",
     *   //   "resourceName": "my_resourceName",
     *   //   "resourceType": "my_resourceType",
     *   //   "userVisibleDescription": "my_userVisibleDescription"
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.resource.calendar',
     *       'https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.resources.calendars.list({
     *     // The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
     *     customer: 'placeholder-value',
     *     // Maximum number of results to return.
     *     maxResults: 'placeholder-value',
     *     // Field(s) to sort results by in either ascending or descending order. Supported fields include resourceId, resourceName, capacity, buildingId, and floorName. If no order is specified, defaults to ascending. Should be of the form "field [asc|desc], field [asc|desc], ...". For example buildingId, capacity desc would return results sorted first by buildingId in ascending order then by capacity in descending order.
     *     orderBy: 'placeholder-value',
     *     // Token to specify the next page in the list.
     *     pageToken: 'placeholder-value',
     *     // String query used to filter results. Should be of the form "field operator value" where field can be any of supported fields and operators can be any of supported operations. Operators include '=' for exact match, '!=' for mismatch and ':' for prefix match or HAS match where applicable. For prefix match, the value should always be followed by a *. Logical operators NOT and AND are supported (in this order of precedence). Supported fields include generatedResourceName, name, buildingId, floor_name, capacity, featureInstances.feature.name. For example buildingId=US-NYC-9TH AND featureInstances.feature.name:Phone.
     *     query: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "items": [],
     *   //   "kind": "my_kind",
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
     * Patches a calendar resource via Apiary Patch Orchestration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.resource.calendar',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.resources.calendars.patch({
     *     // The unique ID of the calendar resource to update.
     *     calendarResourceId: 'placeholder-value',
     *     // The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
     *     customer: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "buildingId": "my_buildingId",
     *       //   "capacity": 0,
     *       //   "etags": "my_etags",
     *       //   "featureInstances": {},
     *       //   "floorName": "my_floorName",
     *       //   "floorSection": "my_floorSection",
     *       //   "generatedResourceName": "my_generatedResourceName",
     *       //   "kind": "my_kind",
     *       //   "resourceCategory": "my_resourceCategory",
     *       //   "resourceDescription": "my_resourceDescription",
     *       //   "resourceEmail": "my_resourceEmail",
     *       //   "resourceId": "my_resourceId",
     *       //   "resourceName": "my_resourceName",
     *       //   "resourceType": "my_resourceType",
     *       //   "userVisibleDescription": "my_userVisibleDescription"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "buildingId": "my_buildingId",
     *   //   "capacity": 0,
     *   //   "etags": "my_etags",
     *   //   "featureInstances": {},
     *   //   "floorName": "my_floorName",
     *   //   "floorSection": "my_floorSection",
     *   //   "generatedResourceName": "my_generatedResourceName",
     *   //   "kind": "my_kind",
     *   //   "resourceCategory": "my_resourceCategory",
     *   //   "resourceDescription": "my_resourceDescription",
     *   //   "resourceEmail": "my_resourceEmail",
     *   //   "resourceId": "my_resourceId",
     *   //   "resourceName": "my_resourceName",
     *   //   "resourceType": "my_resourceType",
     *   //   "userVisibleDescription": "my_userVisibleDescription"
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.resource.calendar',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.resources.calendars.update({
     *     // The unique ID of the calendar resource to update.
     *     calendarResourceId: 'placeholder-value',
     *     // The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
     *     customer: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "buildingId": "my_buildingId",
     *       //   "capacity": 0,
     *       //   "etags": "my_etags",
     *       //   "featureInstances": {},
     *       //   "floorName": "my_floorName",
     *       //   "floorSection": "my_floorSection",
     *       //   "generatedResourceName": "my_generatedResourceName",
     *       //   "kind": "my_kind",
     *       //   "resourceCategory": "my_resourceCategory",
     *       //   "resourceDescription": "my_resourceDescription",
     *       //   "resourceEmail": "my_resourceEmail",
     *       //   "resourceId": "my_resourceId",
     *       //   "resourceName": "my_resourceName",
     *       //   "resourceType": "my_resourceType",
     *       //   "userVisibleDescription": "my_userVisibleDescription"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "buildingId": "my_buildingId",
     *   //   "capacity": 0,
     *   //   "etags": "my_etags",
     *   //   "featureInstances": {},
     *   //   "floorName": "my_floorName",
     *   //   "floorSection": "my_floorSection",
     *   //   "generatedResourceName": "my_generatedResourceName",
     *   //   "kind": "my_kind",
     *   //   "resourceCategory": "my_resourceCategory",
     *   //   "resourceDescription": "my_resourceDescription",
     *   //   "resourceEmail": "my_resourceEmail",
     *   //   "resourceId": "my_resourceId",
     *   //   "resourceName": "my_resourceName",
     *   //   "resourceType": "my_resourceType",
     *   //   "userVisibleDescription": "my_userVisibleDescription"
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
     * The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
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
     * The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
     */
    customer?: string;
  }
  export interface Params$Resource$Resources$Calendars$Insert
    extends StandardParameters {
    /**
     * The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
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
     * The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
     */
    customer?: string;
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * Field(s) to sort results by in either ascending or descending order. Supported fields include resourceId, resourceName, capacity, buildingId, and floorName. If no order is specified, defaults to ascending. Should be of the form "field [asc|desc], field [asc|desc], ...". For example buildingId, capacity desc would return results sorted first by buildingId in ascending order then by capacity in descending order.
     */
    orderBy?: string;
    /**
     * Token to specify the next page in the list.
     */
    pageToken?: string;
    /**
     * String query used to filter results. Should be of the form "field operator value" where field can be any of supported fields and operators can be any of supported operations. Operators include '=' for exact match, '!=' for mismatch and ':' for prefix match or HAS match where applicable. For prefix match, the value should always be followed by a *. Logical operators NOT and AND are supported (in this order of precedence). Supported fields include generatedResourceName, name, buildingId, floor_name, capacity, featureInstances.feature.name. For example buildingId=US-NYC-9TH AND featureInstances.feature.name:Phone.
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
     * The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
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
     * The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.resource.calendar',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.resources.features.delete({
     *     // The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
     *     customer: 'placeholder-value',
     *     // The unique ID of the feature to delete.
     *     featureKey: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.resource.calendar',
     *       'https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.resources.features.get({
     *     // The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
     *     customer: 'placeholder-value',
     *     // The unique ID of the feature to retrieve.
     *     featureKey: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etags": "my_etags",
     *   //   "kind": "my_kind",
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.resource.calendar',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.resources.features.insert({
     *     // The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
     *     customer: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "etags": "my_etags",
     *       //   "kind": "my_kind",
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etags": "my_etags",
     *   //   "kind": "my_kind",
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.resource.calendar',
     *       'https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.resources.features.list({
     *     // The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
     *     customer: 'placeholder-value',
     *     // Maximum number of results to return.
     *     maxResults: 'placeholder-value',
     *     // Token to specify the next page in the list.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "features": [],
     *   //   "kind": "my_kind",
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
     * Patches a feature via Apiary Patch Orchestration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.resource.calendar',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.resources.features.patch({
     *     // The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
     *     customer: 'placeholder-value',
     *     // The unique ID of the feature to update.
     *     featureKey: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "etags": "my_etags",
     *       //   "kind": "my_kind",
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etags": "my_etags",
     *   //   "kind": "my_kind",
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.resource.calendar',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.resources.features.rename({
     *     // The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
     *     customer: 'placeholder-value',
     *     // The unique ID of the feature to rename.
     *     oldName: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "newName": "my_newName"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.resource.calendar',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.resources.features.update({
     *     // The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
     *     customer: 'placeholder-value',
     *     // The unique ID of the feature to update.
     *     featureKey: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "etags": "my_etags",
     *       //   "kind": "my_kind",
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etags": "my_etags",
     *   //   "kind": "my_kind",
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
     * The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
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
     * The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
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
     * The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
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
     * The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
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
     * The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
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
     * The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
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
     * The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.rolemanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.roleAssignments.delete({
     *     // Immutable ID of the G Suite account.
     *     customer: 'placeholder-value',
     *     // Immutable ID of the role assignment.
     *     roleAssignmentId: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
     * Retrieve a role assignment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.rolemanagement',
     *       'https://www.googleapis.com/auth/admin.directory.rolemanagement.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.roleAssignments.get({
     *     // Immutable ID of the G Suite account.
     *     customer: 'placeholder-value',
     *     // Immutable ID of the role assignment.
     *     roleAssignmentId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "assignedTo": "my_assignedTo",
     *   //   "etag": "my_etag",
     *   //   "kind": "my_kind",
     *   //   "orgUnitId": "my_orgUnitId",
     *   //   "roleAssignmentId": "my_roleAssignmentId",
     *   //   "roleId": "my_roleId",
     *   //   "scopeType": "my_scopeType"
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.rolemanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.roleAssignments.insert({
     *     // Immutable ID of the G Suite account.
     *     customer: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "assignedTo": "my_assignedTo",
     *       //   "etag": "my_etag",
     *       //   "kind": "my_kind",
     *       //   "orgUnitId": "my_orgUnitId",
     *       //   "roleAssignmentId": "my_roleAssignmentId",
     *       //   "roleId": "my_roleId",
     *       //   "scopeType": "my_scopeType"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "assignedTo": "my_assignedTo",
     *   //   "etag": "my_etag",
     *   //   "kind": "my_kind",
     *   //   "orgUnitId": "my_orgUnitId",
     *   //   "roleAssignmentId": "my_roleAssignmentId",
     *   //   "roleId": "my_roleId",
     *   //   "scopeType": "my_scopeType"
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.rolemanagement',
     *       'https://www.googleapis.com/auth/admin.directory.rolemanagement.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.roleAssignments.list({
     *     // Immutable ID of the G Suite account.
     *     customer: 'placeholder-value',
     *     // Maximum number of results to return.
     *     maxResults: 'placeholder-value',
     *     // Token to specify the next page in the list.
     *     pageToken: 'placeholder-value',
     *     // Immutable ID of a role. If included in the request, returns only role assignments containing this role ID.
     *     roleId: 'placeholder-value',
     *     // The user's primary email address, alias email address, or unique user ID. If included in the request, returns role assignments only for this user.
     *     userKey: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "items": [],
     *   //   "kind": "my_kind",
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
     * Immutable ID of the G Suite account.
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
     * Immutable ID of the G Suite account.
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
     * Immutable ID of the G Suite account.
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
     * Immutable ID of the G Suite account.
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
    /**
     * Immutable ID of a role. If included in the request, returns only role assignments containing this role ID.
     */
    roleId?: string;
    /**
     * The user's primary email address, alias email address, or unique user ID. If included in the request, returns role assignments only for this user.
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.rolemanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.roles.delete({
     *     // Immutable ID of the G Suite account.
     *     customer: 'placeholder-value',
     *     // Immutable ID of the role.
     *     roleId: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.rolemanagement',
     *       'https://www.googleapis.com/auth/admin.directory.rolemanagement.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.roles.get({
     *     // Immutable ID of the G Suite account.
     *     customer: 'placeholder-value',
     *     // Immutable ID of the role.
     *     roleId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "isSuperAdminRole": false,
     *   //   "isSystemRole": false,
     *   //   "kind": "my_kind",
     *   //   "roleDescription": "my_roleDescription",
     *   //   "roleId": "my_roleId",
     *   //   "roleName": "my_roleName",
     *   //   "rolePrivileges": []
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.rolemanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.roles.insert({
     *     // Immutable ID of the G Suite account.
     *     customer: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "etag": "my_etag",
     *       //   "isSuperAdminRole": false,
     *       //   "isSystemRole": false,
     *       //   "kind": "my_kind",
     *       //   "roleDescription": "my_roleDescription",
     *       //   "roleId": "my_roleId",
     *       //   "roleName": "my_roleName",
     *       //   "rolePrivileges": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "isSuperAdminRole": false,
     *   //   "isSystemRole": false,
     *   //   "kind": "my_kind",
     *   //   "roleDescription": "my_roleDescription",
     *   //   "roleId": "my_roleId",
     *   //   "roleName": "my_roleName",
     *   //   "rolePrivileges": []
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.rolemanagement',
     *       'https://www.googleapis.com/auth/admin.directory.rolemanagement.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.roles.list({
     *     // Immutable ID of the G Suite account.
     *     customer: 'placeholder-value',
     *     // Maximum number of results to return.
     *     maxResults: 'placeholder-value',
     *     // Token to specify the next page in the list.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "items": [],
     *   //   "kind": "my_kind",
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
     * Patch role via Apiary Patch Orchestration
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.rolemanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.roles.patch({
     *     // Immutable ID of the G Suite account.
     *     customer: 'placeholder-value',
     *     // Immutable ID of the role.
     *     roleId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "etag": "my_etag",
     *       //   "isSuperAdminRole": false,
     *       //   "isSystemRole": false,
     *       //   "kind": "my_kind",
     *       //   "roleDescription": "my_roleDescription",
     *       //   "roleId": "my_roleId",
     *       //   "roleName": "my_roleName",
     *       //   "rolePrivileges": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "isSuperAdminRole": false,
     *   //   "isSystemRole": false,
     *   //   "kind": "my_kind",
     *   //   "roleDescription": "my_roleDescription",
     *   //   "roleId": "my_roleId",
     *   //   "roleName": "my_roleName",
     *   //   "rolePrivileges": []
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.rolemanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.roles.update({
     *     // Immutable ID of the G Suite account.
     *     customer: 'placeholder-value',
     *     // Immutable ID of the role.
     *     roleId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "etag": "my_etag",
     *       //   "isSuperAdminRole": false,
     *       //   "isSystemRole": false,
     *       //   "kind": "my_kind",
     *       //   "roleDescription": "my_roleDescription",
     *       //   "roleId": "my_roleId",
     *       //   "roleName": "my_roleName",
     *       //   "rolePrivileges": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "isSuperAdminRole": false,
     *   //   "isSystemRole": false,
     *   //   "kind": "my_kind",
     *   //   "roleDescription": "my_roleDescription",
     *   //   "roleId": "my_roleId",
     *   //   "roleName": "my_roleName",
     *   //   "rolePrivileges": []
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
     * Immutable ID of the G Suite account.
     */
    customer?: string;
    /**
     * Immutable ID of the role.
     */
    roleId?: string;
  }
  export interface Params$Resource$Roles$Get extends StandardParameters {
    /**
     * Immutable ID of the G Suite account.
     */
    customer?: string;
    /**
     * Immutable ID of the role.
     */
    roleId?: string;
  }
  export interface Params$Resource$Roles$Insert extends StandardParameters {
    /**
     * Immutable ID of the G Suite account.
     */
    customer?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Role;
  }
  export interface Params$Resource$Roles$List extends StandardParameters {
    /**
     * Immutable ID of the G Suite account.
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
     * Immutable ID of the G Suite account.
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
     * Immutable ID of the G Suite account.
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
     * Delete schema
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.userschema'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.schemas.delete({
     *     // Immutable ID of the G Suite account
     *     customerId: 'placeholder-value',
     *     // Name or immutable ID of the schema
     *     schemaKey: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
     * Retrieve schema
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.userschema',
     *       'https://www.googleapis.com/auth/admin.directory.userschema.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.schemas.get({
     *     // Immutable ID of the G Suite account
     *     customerId: 'placeholder-value',
     *     // Name or immutable ID of the schema
     *     schemaKey: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "fields": [],
     *   //   "kind": "my_kind",
     *   //   "schemaId": "my_schemaId",
     *   //   "schemaName": "my_schemaName"
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
     * Create schema.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.userschema'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.schemas.insert({
     *     // Immutable ID of the G Suite account
     *     customerId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "displayName": "my_displayName",
     *       //   "etag": "my_etag",
     *       //   "fields": [],
     *       //   "kind": "my_kind",
     *       //   "schemaId": "my_schemaId",
     *       //   "schemaName": "my_schemaName"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "fields": [],
     *   //   "kind": "my_kind",
     *   //   "schemaId": "my_schemaId",
     *   //   "schemaName": "my_schemaName"
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
     * Retrieve all schemas for a customer
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.userschema',
     *       'https://www.googleapis.com/auth/admin.directory.userschema.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.schemas.list({
     *     // Immutable ID of the G Suite account
     *     customerId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "kind": "my_kind",
     *   //   "schemas": []
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
     * Patch Schema via Apiary Patch Orchestration
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.userschema'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.schemas.patch({
     *     // Immutable ID of the G Suite account
     *     customerId: 'placeholder-value',
     *     // Name or immutable ID of the schema.
     *     schemaKey: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "displayName": "my_displayName",
     *       //   "etag": "my_etag",
     *       //   "fields": [],
     *       //   "kind": "my_kind",
     *       //   "schemaId": "my_schemaId",
     *       //   "schemaName": "my_schemaName"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "fields": [],
     *   //   "kind": "my_kind",
     *   //   "schemaId": "my_schemaId",
     *   //   "schemaName": "my_schemaName"
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
     * Update schema
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.userschema'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.schemas.update({
     *     // Immutable ID of the G Suite account
     *     customerId: 'placeholder-value',
     *     // Name or immutable ID of the schema.
     *     schemaKey: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "displayName": "my_displayName",
     *       //   "etag": "my_etag",
     *       //   "fields": [],
     *       //   "kind": "my_kind",
     *       //   "schemaId": "my_schemaId",
     *       //   "schemaName": "my_schemaName"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "fields": [],
     *   //   "kind": "my_kind",
     *   //   "schemaId": "my_schemaId",
     *   //   "schemaName": "my_schemaName"
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
     * Immutable ID of the G Suite account
     */
    customerId?: string;
    /**
     * Name or immutable ID of the schema
     */
    schemaKey?: string;
  }
  export interface Params$Resource$Schemas$Get extends StandardParameters {
    /**
     * Immutable ID of the G Suite account
     */
    customerId?: string;
    /**
     * Name or immutable ID of the schema
     */
    schemaKey?: string;
  }
  export interface Params$Resource$Schemas$Insert extends StandardParameters {
    /**
     * Immutable ID of the G Suite account
     */
    customerId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Schema;
  }
  export interface Params$Resource$Schemas$List extends StandardParameters {
    /**
     * Immutable ID of the G Suite account
     */
    customerId?: string;
  }
  export interface Params$Resource$Schemas$Patch extends StandardParameters {
    /**
     * Immutable ID of the G Suite account
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
     * Immutable ID of the G Suite account
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
     * Delete all access tokens issued by a user for an application.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.user.security'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.tokens.delete({
     *     // The Client ID of the application the token is issued to.
     *     clientId: 'placeholder-value',
     *     // Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     *     userKey: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
     * Get information about an access token issued by a user.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.user.security'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.tokens.get({
     *     // The Client ID of the application the token is issued to.
     *     clientId: 'placeholder-value',
     *     // Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     *     userKey: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "anonymous": false,
     *   //   "clientId": "my_clientId",
     *   //   "displayText": "my_displayText",
     *   //   "etag": "my_etag",
     *   //   "kind": "my_kind",
     *   //   "nativeApp": false,
     *   //   "scopes": [],
     *   //   "userKey": "my_userKey"
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.user.security'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.tokens.list({
     *     // Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     *     userKey: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "items": [],
     *   //   "kind": "my_kind"
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
     * Turn off 2-Step Verification for user.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.user.security'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.twoStepVerification.turnOff({
     *     // Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     *     userKey: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
     * Delete user
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.user'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.users.delete({
     *     // Email or immutable ID of the user
     *     userKey: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
     * retrieve user
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.user',
     *       'https://www.googleapis.com/auth/admin.directory.user.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.users.get({
     *     // Comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when projection=custom.
     *     customFieldMask: 'placeholder-value',
     *     // What subset of fields to fetch for this user.
     *     projection: 'placeholder-value',
     *     // Email or immutable ID of the user
     *     userKey: 'placeholder-value',
     *     // Whether to fetch the ADMIN_VIEW or DOMAIN_PUBLIC view of the user.
     *     viewType: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "addresses": {},
     *   //   "agreedToTerms": false,
     *   //   "aliases": [],
     *   //   "archived": false,
     *   //   "changePasswordAtNextLogin": false,
     *   //   "creationTime": "my_creationTime",
     *   //   "customSchemas": {},
     *   //   "customerId": "my_customerId",
     *   //   "deletionTime": "my_deletionTime",
     *   //   "emails": {},
     *   //   "etag": "my_etag",
     *   //   "externalIds": {},
     *   //   "gender": {},
     *   //   "hashFunction": "my_hashFunction",
     *   //   "id": "my_id",
     *   //   "ims": {},
     *   //   "includeInGlobalAddressList": false,
     *   //   "ipWhitelisted": false,
     *   //   "isAdmin": false,
     *   //   "isDelegatedAdmin": false,
     *   //   "isEnforcedIn2Sv": false,
     *   //   "isEnrolledIn2Sv": false,
     *   //   "isMailboxSetup": false,
     *   //   "keywords": {},
     *   //   "kind": "my_kind",
     *   //   "languages": {},
     *   //   "lastLoginTime": "my_lastLoginTime",
     *   //   "locations": {},
     *   //   "name": {},
     *   //   "nonEditableAliases": [],
     *   //   "notes": {},
     *   //   "orgUnitPath": "my_orgUnitPath",
     *   //   "organizations": {},
     *   //   "password": "my_password",
     *   //   "phones": {},
     *   //   "posixAccounts": {},
     *   //   "primaryEmail": "my_primaryEmail",
     *   //   "recoveryEmail": "my_recoveryEmail",
     *   //   "recoveryPhone": "my_recoveryPhone",
     *   //   "relations": {},
     *   //   "sshPublicKeys": {},
     *   //   "suspended": false,
     *   //   "suspensionReason": "my_suspensionReason",
     *   //   "thumbnailPhotoEtag": "my_thumbnailPhotoEtag",
     *   //   "thumbnailPhotoUrl": "my_thumbnailPhotoUrl",
     *   //   "websites": {}
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
     * create user.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.user'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.users.insert({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "addresses": {},
     *       //   "agreedToTerms": false,
     *       //   "aliases": [],
     *       //   "archived": false,
     *       //   "changePasswordAtNextLogin": false,
     *       //   "creationTime": "my_creationTime",
     *       //   "customSchemas": {},
     *       //   "customerId": "my_customerId",
     *       //   "deletionTime": "my_deletionTime",
     *       //   "emails": {},
     *       //   "etag": "my_etag",
     *       //   "externalIds": {},
     *       //   "gender": {},
     *       //   "hashFunction": "my_hashFunction",
     *       //   "id": "my_id",
     *       //   "ims": {},
     *       //   "includeInGlobalAddressList": false,
     *       //   "ipWhitelisted": false,
     *       //   "isAdmin": false,
     *       //   "isDelegatedAdmin": false,
     *       //   "isEnforcedIn2Sv": false,
     *       //   "isEnrolledIn2Sv": false,
     *       //   "isMailboxSetup": false,
     *       //   "keywords": {},
     *       //   "kind": "my_kind",
     *       //   "languages": {},
     *       //   "lastLoginTime": "my_lastLoginTime",
     *       //   "locations": {},
     *       //   "name": {},
     *       //   "nonEditableAliases": [],
     *       //   "notes": {},
     *       //   "orgUnitPath": "my_orgUnitPath",
     *       //   "organizations": {},
     *       //   "password": "my_password",
     *       //   "phones": {},
     *       //   "posixAccounts": {},
     *       //   "primaryEmail": "my_primaryEmail",
     *       //   "recoveryEmail": "my_recoveryEmail",
     *       //   "recoveryPhone": "my_recoveryPhone",
     *       //   "relations": {},
     *       //   "sshPublicKeys": {},
     *       //   "suspended": false,
     *       //   "suspensionReason": "my_suspensionReason",
     *       //   "thumbnailPhotoEtag": "my_thumbnailPhotoEtag",
     *       //   "thumbnailPhotoUrl": "my_thumbnailPhotoUrl",
     *       //   "websites": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "addresses": {},
     *   //   "agreedToTerms": false,
     *   //   "aliases": [],
     *   //   "archived": false,
     *   //   "changePasswordAtNextLogin": false,
     *   //   "creationTime": "my_creationTime",
     *   //   "customSchemas": {},
     *   //   "customerId": "my_customerId",
     *   //   "deletionTime": "my_deletionTime",
     *   //   "emails": {},
     *   //   "etag": "my_etag",
     *   //   "externalIds": {},
     *   //   "gender": {},
     *   //   "hashFunction": "my_hashFunction",
     *   //   "id": "my_id",
     *   //   "ims": {},
     *   //   "includeInGlobalAddressList": false,
     *   //   "ipWhitelisted": false,
     *   //   "isAdmin": false,
     *   //   "isDelegatedAdmin": false,
     *   //   "isEnforcedIn2Sv": false,
     *   //   "isEnrolledIn2Sv": false,
     *   //   "isMailboxSetup": false,
     *   //   "keywords": {},
     *   //   "kind": "my_kind",
     *   //   "languages": {},
     *   //   "lastLoginTime": "my_lastLoginTime",
     *   //   "locations": {},
     *   //   "name": {},
     *   //   "nonEditableAliases": [],
     *   //   "notes": {},
     *   //   "orgUnitPath": "my_orgUnitPath",
     *   //   "organizations": {},
     *   //   "password": "my_password",
     *   //   "phones": {},
     *   //   "posixAccounts": {},
     *   //   "primaryEmail": "my_primaryEmail",
     *   //   "recoveryEmail": "my_recoveryEmail",
     *   //   "recoveryPhone": "my_recoveryPhone",
     *   //   "relations": {},
     *   //   "sshPublicKeys": {},
     *   //   "suspended": false,
     *   //   "suspensionReason": "my_suspensionReason",
     *   //   "thumbnailPhotoEtag": "my_thumbnailPhotoEtag",
     *   //   "thumbnailPhotoUrl": "my_thumbnailPhotoUrl",
     *   //   "websites": {}
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
     * Retrieve either deleted users or all users in a domain (paginated)
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.user',
     *       'https://www.googleapis.com/auth/admin.directory.user.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.users.list({
     *     // Immutable ID of the G Suite account. In case of multi-domain, to fetch all users for a customer, fill this field instead of domain.
     *     customer: 'placeholder-value',
     *     // Comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when projection=custom.
     *     customFieldMask: 'placeholder-value',
     *     // Name of the domain. Fill this field to get users from only this domain. To return all users in a multi-domain fill customer field instead.
     *     domain: 'placeholder-value',
     *     // Maximum number of results to return.
     *     maxResults: 'placeholder-value',
     *     // Column to use for sorting results
     *     orderBy: 'placeholder-value',
     *     // Token to specify next page in the list
     *     pageToken: 'placeholder-value',
     *     // What subset of fields to fetch for this user.
     *     projection: 'placeholder-value',
     *     // Query string search. Should be of the form "". Complete documentation is at https: //developers.google.com/admin-sdk/directory/v1/guides/search-users
     *     query: 'placeholder-value',
     *     // If set to true, retrieves the list of deleted users. (Default: false)
     *     showDeleted: 'placeholder-value',
     *     // Whether to return results in ascending or descending order.
     *     sortOrder: 'placeholder-value',
     *     // Whether to fetch the ADMIN_VIEW or DOMAIN_PUBLIC view of the user.
     *     viewType: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "trigger_event": "my_trigger_event",
     *   //   "users": []
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
     * change admin status of a user
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.user'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.users.makeAdmin({
     *     // Email or immutable ID of the user as admin
     *     userKey: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "status": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
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
     * Patch Users via Apiary Patch Orchestration
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.user'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.users.patch({
     *     // Email or immutable ID of the user. If ID, it should match with id of user object
     *     userKey: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "addresses": {},
     *       //   "agreedToTerms": false,
     *       //   "aliases": [],
     *       //   "archived": false,
     *       //   "changePasswordAtNextLogin": false,
     *       //   "creationTime": "my_creationTime",
     *       //   "customSchemas": {},
     *       //   "customerId": "my_customerId",
     *       //   "deletionTime": "my_deletionTime",
     *       //   "emails": {},
     *       //   "etag": "my_etag",
     *       //   "externalIds": {},
     *       //   "gender": {},
     *       //   "hashFunction": "my_hashFunction",
     *       //   "id": "my_id",
     *       //   "ims": {},
     *       //   "includeInGlobalAddressList": false,
     *       //   "ipWhitelisted": false,
     *       //   "isAdmin": false,
     *       //   "isDelegatedAdmin": false,
     *       //   "isEnforcedIn2Sv": false,
     *       //   "isEnrolledIn2Sv": false,
     *       //   "isMailboxSetup": false,
     *       //   "keywords": {},
     *       //   "kind": "my_kind",
     *       //   "languages": {},
     *       //   "lastLoginTime": "my_lastLoginTime",
     *       //   "locations": {},
     *       //   "name": {},
     *       //   "nonEditableAliases": [],
     *       //   "notes": {},
     *       //   "orgUnitPath": "my_orgUnitPath",
     *       //   "organizations": {},
     *       //   "password": "my_password",
     *       //   "phones": {},
     *       //   "posixAccounts": {},
     *       //   "primaryEmail": "my_primaryEmail",
     *       //   "recoveryEmail": "my_recoveryEmail",
     *       //   "recoveryPhone": "my_recoveryPhone",
     *       //   "relations": {},
     *       //   "sshPublicKeys": {},
     *       //   "suspended": false,
     *       //   "suspensionReason": "my_suspensionReason",
     *       //   "thumbnailPhotoEtag": "my_thumbnailPhotoEtag",
     *       //   "thumbnailPhotoUrl": "my_thumbnailPhotoUrl",
     *       //   "websites": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "addresses": {},
     *   //   "agreedToTerms": false,
     *   //   "aliases": [],
     *   //   "archived": false,
     *   //   "changePasswordAtNextLogin": false,
     *   //   "creationTime": "my_creationTime",
     *   //   "customSchemas": {},
     *   //   "customerId": "my_customerId",
     *   //   "deletionTime": "my_deletionTime",
     *   //   "emails": {},
     *   //   "etag": "my_etag",
     *   //   "externalIds": {},
     *   //   "gender": {},
     *   //   "hashFunction": "my_hashFunction",
     *   //   "id": "my_id",
     *   //   "ims": {},
     *   //   "includeInGlobalAddressList": false,
     *   //   "ipWhitelisted": false,
     *   //   "isAdmin": false,
     *   //   "isDelegatedAdmin": false,
     *   //   "isEnforcedIn2Sv": false,
     *   //   "isEnrolledIn2Sv": false,
     *   //   "isMailboxSetup": false,
     *   //   "keywords": {},
     *   //   "kind": "my_kind",
     *   //   "languages": {},
     *   //   "lastLoginTime": "my_lastLoginTime",
     *   //   "locations": {},
     *   //   "name": {},
     *   //   "nonEditableAliases": [],
     *   //   "notes": {},
     *   //   "orgUnitPath": "my_orgUnitPath",
     *   //   "organizations": {},
     *   //   "password": "my_password",
     *   //   "phones": {},
     *   //   "posixAccounts": {},
     *   //   "primaryEmail": "my_primaryEmail",
     *   //   "recoveryEmail": "my_recoveryEmail",
     *   //   "recoveryPhone": "my_recoveryPhone",
     *   //   "relations": {},
     *   //   "sshPublicKeys": {},
     *   //   "suspended": false,
     *   //   "suspensionReason": "my_suspensionReason",
     *   //   "thumbnailPhotoEtag": "my_thumbnailPhotoEtag",
     *   //   "thumbnailPhotoUrl": "my_thumbnailPhotoUrl",
     *   //   "websites": {}
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
     * Sign a user out of all web and device sessions and reset their sign-in cookies. User will have to sign in by authenticating again.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.user.security'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.users.signOut({
     *     // Identifies the target user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     *     userKey: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
     * Undelete a deleted user
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.user'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.users.undelete({
     *     // The immutable id of the user
     *     userKey: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "orgUnitPath": "my_orgUnitPath"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
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
     * update user
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.user'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.users.update({
     *     // Email or immutable ID of the user. If ID, it should match with id of user object
     *     userKey: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "addresses": {},
     *       //   "agreedToTerms": false,
     *       //   "aliases": [],
     *       //   "archived": false,
     *       //   "changePasswordAtNextLogin": false,
     *       //   "creationTime": "my_creationTime",
     *       //   "customSchemas": {},
     *       //   "customerId": "my_customerId",
     *       //   "deletionTime": "my_deletionTime",
     *       //   "emails": {},
     *       //   "etag": "my_etag",
     *       //   "externalIds": {},
     *       //   "gender": {},
     *       //   "hashFunction": "my_hashFunction",
     *       //   "id": "my_id",
     *       //   "ims": {},
     *       //   "includeInGlobalAddressList": false,
     *       //   "ipWhitelisted": false,
     *       //   "isAdmin": false,
     *       //   "isDelegatedAdmin": false,
     *       //   "isEnforcedIn2Sv": false,
     *       //   "isEnrolledIn2Sv": false,
     *       //   "isMailboxSetup": false,
     *       //   "keywords": {},
     *       //   "kind": "my_kind",
     *       //   "languages": {},
     *       //   "lastLoginTime": "my_lastLoginTime",
     *       //   "locations": {},
     *       //   "name": {},
     *       //   "nonEditableAliases": [],
     *       //   "notes": {},
     *       //   "orgUnitPath": "my_orgUnitPath",
     *       //   "organizations": {},
     *       //   "password": "my_password",
     *       //   "phones": {},
     *       //   "posixAccounts": {},
     *       //   "primaryEmail": "my_primaryEmail",
     *       //   "recoveryEmail": "my_recoveryEmail",
     *       //   "recoveryPhone": "my_recoveryPhone",
     *       //   "relations": {},
     *       //   "sshPublicKeys": {},
     *       //   "suspended": false,
     *       //   "suspensionReason": "my_suspensionReason",
     *       //   "thumbnailPhotoEtag": "my_thumbnailPhotoEtag",
     *       //   "thumbnailPhotoUrl": "my_thumbnailPhotoUrl",
     *       //   "websites": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "addresses": {},
     *   //   "agreedToTerms": false,
     *   //   "aliases": [],
     *   //   "archived": false,
     *   //   "changePasswordAtNextLogin": false,
     *   //   "creationTime": "my_creationTime",
     *   //   "customSchemas": {},
     *   //   "customerId": "my_customerId",
     *   //   "deletionTime": "my_deletionTime",
     *   //   "emails": {},
     *   //   "etag": "my_etag",
     *   //   "externalIds": {},
     *   //   "gender": {},
     *   //   "hashFunction": "my_hashFunction",
     *   //   "id": "my_id",
     *   //   "ims": {},
     *   //   "includeInGlobalAddressList": false,
     *   //   "ipWhitelisted": false,
     *   //   "isAdmin": false,
     *   //   "isDelegatedAdmin": false,
     *   //   "isEnforcedIn2Sv": false,
     *   //   "isEnrolledIn2Sv": false,
     *   //   "isMailboxSetup": false,
     *   //   "keywords": {},
     *   //   "kind": "my_kind",
     *   //   "languages": {},
     *   //   "lastLoginTime": "my_lastLoginTime",
     *   //   "locations": {},
     *   //   "name": {},
     *   //   "nonEditableAliases": [],
     *   //   "notes": {},
     *   //   "orgUnitPath": "my_orgUnitPath",
     *   //   "organizations": {},
     *   //   "password": "my_password",
     *   //   "phones": {},
     *   //   "posixAccounts": {},
     *   //   "primaryEmail": "my_primaryEmail",
     *   //   "recoveryEmail": "my_recoveryEmail",
     *   //   "recoveryPhone": "my_recoveryPhone",
     *   //   "relations": {},
     *   //   "sshPublicKeys": {},
     *   //   "suspended": false,
     *   //   "suspensionReason": "my_suspensionReason",
     *   //   "thumbnailPhotoEtag": "my_thumbnailPhotoEtag",
     *   //   "thumbnailPhotoUrl": "my_thumbnailPhotoUrl",
     *   //   "websites": {}
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
     * Watch for changes in users list
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.user',
     *       'https://www.googleapis.com/auth/admin.directory.user.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.users.watch({
     *     // Immutable ID of the G Suite account. In case of multi-domain, to fetch all users for a customer, fill this field instead of domain.
     *     customer: 'placeholder-value',
     *     // Comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when projection=custom.
     *     customFieldMask: 'placeholder-value',
     *     // Name of the domain. Fill this field to get users from only this domain. To return all users in a multi-domain fill customer field instead."
     *     domain: 'placeholder-value',
     *     // Event on which subscription is intended
     *     event: 'placeholder-value',
     *     // Maximum number of results to return.
     *     maxResults: 'placeholder-value',
     *     // Column to use for sorting results
     *     orderBy: 'placeholder-value',
     *     // Token to specify next page in the list
     *     pageToken: 'placeholder-value',
     *     // What subset of fields to fetch for this user.
     *     projection: 'placeholder-value',
     *     // Query string search. Should be of the form "". Complete documentation is at https: //developers.google.com/admin-sdk/directory/v1/guides/search-users
     *     query: 'placeholder-value',
     *     // If set to true, retrieves the list of deleted users. (Default: false)
     *     showDeleted: 'placeholder-value',
     *     // Whether to return results in ascending or descending order.
     *     sortOrder: 'placeholder-value',
     *     // Whether to fetch the ADMIN_VIEW or DOMAIN_PUBLIC view of the user.
     *     viewType: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "address": "my_address",
     *       //   "expiration": "my_expiration",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "params": {},
     *       //   "payload": false,
     *       //   "resourceId": "my_resourceId",
     *       //   "resourceUri": "my_resourceUri",
     *       //   "token": "my_token",
     *       //   "type": "my_type"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "address": "my_address",
     *   //   "expiration": "my_expiration",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "params": {},
     *   //   "payload": false,
     *   //   "resourceId": "my_resourceId",
     *   //   "resourceUri": "my_resourceUri",
     *   //   "token": "my_token",
     *   //   "type": "my_type"
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
     * Email or immutable ID of the user
     */
    userKey?: string;
  }
  export interface Params$Resource$Users$Get extends StandardParameters {
    /**
     * Comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when projection=custom.
     */
    customFieldMask?: string;
    /**
     * What subset of fields to fetch for this user.
     */
    projection?: string;
    /**
     * Email or immutable ID of the user
     */
    userKey?: string;
    /**
     * Whether to fetch the ADMIN_VIEW or DOMAIN_PUBLIC view of the user.
     */
    viewType?: string;
  }
  export interface Params$Resource$Users$Insert extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$User;
  }
  export interface Params$Resource$Users$List extends StandardParameters {
    /**
     * Immutable ID of the G Suite account. In case of multi-domain, to fetch all users for a customer, fill this field instead of domain.
     */
    customer?: string;
    /**
     * Comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when projection=custom.
     */
    customFieldMask?: string;
    /**
     * Name of the domain. Fill this field to get users from only this domain. To return all users in a multi-domain fill customer field instead.
     */
    domain?: string;
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
     * Whether to fetch the ADMIN_VIEW or DOMAIN_PUBLIC view of the user.
     */
    viewType?: string;
  }
  export interface Params$Resource$Users$Makeadmin extends StandardParameters {
    /**
     * Email or immutable ID of the user as admin
     */
    userKey?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UserMakeAdmin;
  }
  export interface Params$Resource$Users$Patch extends StandardParameters {
    /**
     * Email or immutable ID of the user. If ID, it should match with id of user object
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
     * Email or immutable ID of the user. If ID, it should match with id of user object
     */
    userKey?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$User;
  }
  export interface Params$Resource$Users$Watch extends StandardParameters {
    /**
     * Immutable ID of the G Suite account. In case of multi-domain, to fetch all users for a customer, fill this field instead of domain.
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
     * Event on which subscription is intended
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
     * Whether to fetch the ADMIN_VIEW or DOMAIN_PUBLIC view of the user.
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
     * Remove a alias for the user
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.user',
     *       'https://www.googleapis.com/auth/admin.directory.user.alias',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.users.aliases.delete({
     *     // The alias to be removed
     *     alias: 'placeholder-value',
     *     // Email or immutable ID of the user
     *     userKey: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
     * Add a alias for the user
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.user',
     *       'https://www.googleapis.com/auth/admin.directory.user.alias',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.users.aliases.insert({
     *     // Email or immutable ID of the user
     *     userKey: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "alias": "my_alias",
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "primaryEmail": "my_primaryEmail"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alias": "my_alias",
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "primaryEmail": "my_primaryEmail"
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
     * List all aliases for a user
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.user',
     *       'https://www.googleapis.com/auth/admin.directory.user.alias',
     *       'https://www.googleapis.com/auth/admin.directory.user.alias.readonly',
     *       'https://www.googleapis.com/auth/admin.directory.user.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.users.aliases.list({
     *     // Email or immutable ID of the user
     *     userKey: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "aliases": [],
     *   //   "etag": "my_etag",
     *   //   "kind": "my_kind"
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
     * Watch for changes in users list
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.user',
     *       'https://www.googleapis.com/auth/admin.directory.user.alias',
     *       'https://www.googleapis.com/auth/admin.directory.user.alias.readonly',
     *       'https://www.googleapis.com/auth/admin.directory.user.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.users.aliases.watch({
     *     // Event on which subscription is intended (if subscribing)
     *     event: 'placeholder-value',
     *     // Email or immutable ID of the user
     *     userKey: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "address": "my_address",
     *       //   "expiration": "my_expiration",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "params": {},
     *       //   "payload": false,
     *       //   "resourceId": "my_resourceId",
     *       //   "resourceUri": "my_resourceUri",
     *       //   "token": "my_token",
     *       //   "type": "my_type"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "address": "my_address",
     *   //   "expiration": "my_expiration",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "params": {},
     *   //   "payload": false,
     *   //   "resourceId": "my_resourceId",
     *   //   "resourceUri": "my_resourceUri",
     *   //   "token": "my_token",
     *   //   "type": "my_type"
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
     * The alias to be removed
     */
    alias?: string;
    /**
     * Email or immutable ID of the user
     */
    userKey?: string;
  }
  export interface Params$Resource$Users$Aliases$Insert
    extends StandardParameters {
    /**
     * Email or immutable ID of the user
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
     * Email or immutable ID of the user
     */
    userKey?: string;
  }
  export interface Params$Resource$Users$Aliases$Watch
    extends StandardParameters {
    /**
     * Event on which subscription is intended (if subscribing)
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
     * Remove photos for the user
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.user'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.users.photos.delete({
     *     // Email or immutable ID of the user
     *     userKey: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
     * Retrieve photo of a user
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.directory.user',
     *       'https://www.googleapis.com/auth/admin.directory.user.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.users.photos.get({
     *     // Email or immutable ID of the user
     *     userKey: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "height": 0,
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "mimeType": "my_mimeType",
     *   //   "photoData": "my_photoData",
     *   //   "primaryEmail": "my_primaryEmail",
     *   //   "width": 0
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
     * Patch Photo via Apiary Patch Orchestration
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.user'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.users.photos.patch({
     *     // Email or immutable ID of the user
     *     userKey: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "etag": "my_etag",
     *       //   "height": 0,
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "mimeType": "my_mimeType",
     *       //   "photoData": "my_photoData",
     *       //   "primaryEmail": "my_primaryEmail",
     *       //   "width": 0
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "height": 0,
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "mimeType": "my_mimeType",
     *   //   "photoData": "my_photoData",
     *   //   "primaryEmail": "my_primaryEmail",
     *   //   "width": 0
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
     * Add a photo for the user
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.user'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.users.photos.update({
     *     // Email or immutable ID of the user
     *     userKey: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "etag": "my_etag",
     *       //   "height": 0,
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "mimeType": "my_mimeType",
     *       //   "photoData": "my_photoData",
     *       //   "primaryEmail": "my_primaryEmail",
     *       //   "width": 0
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "height": 0,
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "mimeType": "my_mimeType",
     *   //   "photoData": "my_photoData",
     *   //   "primaryEmail": "my_primaryEmail",
     *   //   "width": 0
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
     * Email or immutable ID of the user
     */
    userKey?: string;
  }
  export interface Params$Resource$Users$Photos$Get extends StandardParameters {
    /**
     * Email or immutable ID of the user
     */
    userKey?: string;
  }
  export interface Params$Resource$Users$Photos$Patch
    extends StandardParameters {
    /**
     * Email or immutable ID of the user
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
     * Email or immutable ID of the user
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
     * Generate new backup verification codes for the user.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.user.security'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.verificationCodes.generate({
     *     // Email or immutable ID of the user
     *     userKey: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
     * Invalidate the current backup verification codes for the user.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.user.security'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.verificationCodes.invalidate({
     *     // Email or immutable ID of the user
     *     userKey: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.directory.user.security'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await directory.verificationCodes.list({
     *     // Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     *     userKey: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "items": [],
     *   //   "kind": "my_kind"
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
