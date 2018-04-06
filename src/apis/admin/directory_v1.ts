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
 * Admin Directory API
 *
 * The Admin SDK Directory API lets you view and manage enterprise resources
 * such as users and groups, administrative notifications, security features,
 * and more.
 *
 * @example
 * const google = require('googleapis');
 * const admin = google.admin('directory_v1');
 *
 * @namespace admin
 * @type {Function}
 * @version directory_v1
 * @variation directory_v1
 * @param {object=} options Options for Admin
 */
export class Admin {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  asps: Resource$Asps;
  channels: Resource$Channels;
  chromeosdevices: Resource$Chromeosdevices;
  customers: Resource$Customers;
  domainAliases: Resource$Domainaliases;
  domains: Resource$Domains;
  groups: Resource$Groups;
  members: Resource$Members;
  mobiledevices: Resource$Mobiledevices;
  notifications: Resource$Notifications;
  orgunits: Resource$Orgunits;
  privileges: Resource$Privileges;
  resolvedAppAccessSettings: Resource$Resolvedappaccesssettings;
  resources: Resource$Resources;
  roleAssignments: Resource$Roleassignments;
  roles: Resource$Roles;
  schemas: Resource$Schemas;
  tokens: Resource$Tokens;
  users: Resource$Users;
  verificationCodes: Resource$Verificationcodes;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;
    this.getRoot.bind(this);

    this.asps = new Resource$Asps(this);
    this.channels = new Resource$Channels(this);
    this.chromeosdevices = new Resource$Chromeosdevices(this);
    this.customers = new Resource$Customers(this);
    this.domainAliases = new Resource$Domainaliases(this);
    this.domains = new Resource$Domains(this);
    this.groups = new Resource$Groups(this);
    this.members = new Resource$Members(this);
    this.mobiledevices = new Resource$Mobiledevices(this);
    this.notifications = new Resource$Notifications(this);
    this.orgunits = new Resource$Orgunits(this);
    this.privileges = new Resource$Privileges(this);
    this.resolvedAppAccessSettings =
        new Resource$Resolvedappaccesssettings(this);
    this.resources = new Resource$Resources(this);
    this.roleAssignments = new Resource$Roleassignments(this);
    this.roles = new Resource$Roles(this);
    this.schemas = new Resource$Schemas(this);
    this.tokens = new Resource$Tokens(this);
    this.users = new Resource$Users(this);
    this.verificationCodes = new Resource$Verificationcodes(this);
  }

  getRoot() {
    return this.root;
  }
}

/**
 * JSON template for Alias object in Directory API.
 */
export interface Schema$Alias {
  /**
   * A alias email
   */
  alias: string;
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * Unique id of the group (Read-only) Unique id of the user (Read-only)
   */
  id: string;
  /**
   * Kind of resource this is.
   */
  kind: string;
  /**
   * Group&#39;s primary email (Read-only) User&#39;s primary email (Read-only)
   */
  primaryEmail: string;
}
/**
 * JSON response template to list aliases in Directory API.
 */
export interface Schema$Aliases {
  /**
   * List of alias objects.
   */
  aliases: any[];
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * Kind of resource this is.
   */
  kind: string;
}
/**
 * JSON template for App Access Collections Resource object in Directory API.
 */
export interface Schema$AppAccessCollections {
  /**
   * List of blocked api access buckets.
   */
  blockedApiAccessBuckets: string[];
  /**
   * Boolean to indicate whether to enforce app access settings on Android Drive
   * or not.
   */
  enforceSettingsForAndroidDrive: boolean;
  /**
   * Error message provided by the Admin that will be shown to the user when an
   * app is blocked.
   */
  errorMessage: string;
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * Identifies the resource as an app access collection. Value:
   * admin#directory#appaccesscollection
   */
  kind: string;
  /**
   * Unique ID of app access collection. (Readonly)
   */
  resourceId: string;
  /**
   * Resource name given by the customer while creating/updating. Should be
   * unique under given customer.
   */
  resourceName: string;
  /**
   * Boolean that indicates whether to trust domain owned apps.
   */
  trustDomainOwnedApps: boolean;
}
/**
 * The template that returns individual ASP (Access Code) data.
 */
export interface Schema$Asp {
  /**
   * The unique ID of the ASP.
   */
  codeId: number;
  /**
   * The time when the ASP was created. Expressed in Unix time format.
   */
  creationTime: string;
  /**
   * ETag of the ASP.
   */
  etag: string;
  /**
   * The type of the API resource. This is always admin#directory#asp.
   */
  kind: string;
  /**
   * The time when the ASP was last used. Expressed in Unix time format.
   */
  lastTimeUsed: string;
  /**
   * The name of the application that the user, represented by their userId,
   * entered when the ASP was created.
   */
  name: string;
  /**
   * The unique ID of the user who issued the ASP.
   */
  userKey: string;
}
export interface Schema$Asps {
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * A list of ASP resources.
   */
  items: Schema$Asp[];
  /**
   * The type of the API resource. This is always admin#directory#aspList.
   */
  kind: string;
}
/**
 * JSON template for Building object in Directory API.
 */
export interface Schema$Building {
  /**
   * Unique identifier for the building. The maximum length is 100 characters.
   */
  buildingId: string;
  /**
   * The building name as seen by users in Calendar. Must be unique for the
   * customer. For example, &quot;NYC-CHEL&quot;. The maximum length is 100
   * characters.
   */
  buildingName: string;
  /**
   * The geographic coordinates of the center of the building, expressed as
   * latitude and longitude in decimal degrees.
   */
  coordinates: Schema$BuildingCoordinates;
  /**
   * A brief description of the building. For example, &quot;Chelsea
   * Market&quot;.
   */
  description: string;
  /**
   * ETag of the resource.
   */
  etags: string;
  /**
   * The display names for all floors in this building. The floors are expected
   * to be sorted in ascending order, from lowest floor to highest floor. For
   * example, [&quot;B2&quot;, &quot;B1&quot;, &quot;L&quot;, &quot;1&quot;,
   * &quot;2&quot;, &quot;2M&quot;, &quot;3&quot;, &quot;PH&quot;] Must contain
   * at least one entry.
   */
  floorNames: string[];
  /**
   * Kind of resource this is.
   */
  kind: string;
}
/**
 * JSON template for coordinates of a building in Directory API.
 */
export interface Schema$BuildingCoordinates {
  /**
   * Latitude in decimal degrees.
   */
  latitude: number;
  /**
   * Longitude in decimal degrees.
   */
  longitude: number;
}
/**
 * JSON template for Building List Response object in Directory API.
 */
export interface Schema$Buildings {
  /**
   * The Buildings in this page of results.
   */
  buildings: Schema$Building[];
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * Kind of resource this is.
   */
  kind: string;
  /**
   * The continuation token, used to page through large result sets. Provide
   * this value in a subsequent request to return the next page of results.
   */
  nextPageToken: string;
}
/**
 * JSON template for Calendar Resource object in Directory API.
 */
export interface Schema$CalendarResource {
  /**
   * Unique ID for the building a resource is located in.
   */
  buildingId: string;
  /**
   * Capacity of a resource, number of seats in a room.
   */
  capacity: number;
  /**
   * ETag of the resource.
   */
  etags: string;
  featureInstances: any;
  /**
   * Name of the floor a resource is located on.
   */
  floorName: string;
  /**
   * Name of the section within a floor a resource is located in.
   */
  floorSection: string;
  /**
   * The read-only auto-generated name of the calendar resource which includes
   * metadata about the resource such as building name, floor, capacity, etc.
   * For example, &quot;NYC-2-Training Room 1A (16)&quot;.
   */
  generatedResourceName: string;
  /**
   * The type of the resource. For calendar resources, the value is
   * admin#directory#resources#calendars#CalendarResource.
   */
  kind: string;
  /**
   * The category of the calendar resource. Either CONFERENCE_ROOM or OTHER.
   * Legacy data is set to CATEGORY_UNKNOWN.
   */
  resourceCategory: string;
  /**
   * Description of the resource, visible only to admins.
   */
  resourceDescription: string;
  /**
   * The read-only email for the calendar resource. Generated as part of
   * creating a new calendar resource.
   */
  resourceEmail: string;
  /**
   * The unique ID for the calendar resource.
   */
  resourceId: string;
  /**
   * The name of the calendar resource. For example, &quot;Training Room
   * 1A&quot;.
   */
  resourceName: string;
  /**
   * The type of the calendar resource, intended for non-room resources.
   */
  resourceType: string;
  /**
   * Description of the resource, visible to users and admins.
   */
  userVisibleDescription: string;
}
/**
 * JSON template for Calendar Resource List Response object in Directory API.
 */
export interface Schema$CalendarResources {
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * The CalendarResources in this page of results.
   */
  items: Schema$CalendarResource[];
  /**
   * Identifies this as a collection of CalendarResources. This is always
   * admin#directory#resources#calendars#calendarResourcesList.
   */
  kind: string;
  /**
   * The continuation token, used to page through large result sets. Provide
   * this value in a subsequent request to return the next page of results.
   */
  nextPageToken: string;
}
/**
 * An notification channel used to watch for resource changes.
 */
export interface Schema$Channel {
  /**
   * The address where notifications are delivered for this channel.
   */
  address: string;
  /**
   * Date and time of notification channel expiration, expressed as a Unix
   * timestamp, in milliseconds. Optional.
   */
  expiration: string;
  /**
   * A UUID or similar unique string that identifies this channel.
   */
  id: string;
  /**
   * Identifies this as a notification channel used to watch for changes to a
   * resource. Value: the fixed string &quot;api#channel&quot;.
   */
  kind: string;
  /**
   * Additional parameters controlling delivery channel behavior. Optional.
   */
  params: any;
  /**
   * A Boolean value to indicate whether payload is wanted. Optional.
   */
  payload: boolean;
  /**
   * An opaque ID that identifies the resource being watched on this channel.
   * Stable across different API versions.
   */
  resourceId: string;
  /**
   * A version-specific identifier for the watched resource.
   */
  resourceUri: string;
  /**
   * An arbitrary string delivered to the target address with each notification
   * delivered over this channel. Optional.
   */
  token: string;
  /**
   * The type of delivery mechanism used for this channel.
   */
  type: string;
}
/**
 * JSON template for Chrome Os Device resource in Directory API.
 */
export interface Schema$ChromeOsDevice {
  /**
   * List of active time ranges (Read-only)
   */
  activeTimeRanges: any[];
  /**
   * AssetId specified during enrollment or through later annotation
   */
  annotatedAssetId: string;
  /**
   * Address or location of the device as noted by the administrator
   */
  annotatedLocation: string;
  /**
   * User of the device
   */
  annotatedUser: string;
  /**
   * Chromebook boot mode (Read-only)
   */
  bootMode: string;
  /**
   * List of device files to download (Read-only)
   */
  deviceFiles: any[];
  /**
   * Unique identifier of Chrome OS Device (Read-only)
   */
  deviceId: string;
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * Chromebook Mac Address on ethernet network interface (Read-only)
   */
  ethernetMacAddress: string;
  /**
   * Chromebook firmware version (Read-only)
   */
  firmwareVersion: string;
  /**
   * Kind of resource this is.
   */
  kind: string;
  /**
   * Date and time the device was last enrolled (Read-only)
   */
  lastEnrollmentTime: string;
  /**
   * Date and time the device was last synchronized with the policy settings in
   * the G Suite administrator control panel (Read-only)
   */
  lastSync: string;
  /**
   * Chromebook Mac Address on wifi network interface (Read-only)
   */
  macAddress: string;
  /**
   * Mobile Equipment identifier for the 3G mobile card in the Chromebook
   * (Read-only)
   */
  meid: string;
  /**
   * Chromebook Model (Read-only)
   */
  model: string;
  /**
   * Notes added by the administrator
   */
  notes: string;
  /**
   * Chromebook order number (Read-only)
   */
  orderNumber: string;
  /**
   * OrgUnit of the device
   */
  orgUnitPath: string;
  /**
   * Chromebook Os Version (Read-only)
   */
  osVersion: string;
  /**
   * Chromebook platform version (Read-only)
   */
  platformVersion: string;
  /**
   * List of recent device users, in descending order by last login time
   * (Read-only)
   */
  recentUsers: any[];
  /**
   * Chromebook serial number (Read-only)
   */
  serialNumber: string;
  /**
   * status of the device (Read-only)
   */
  status: string;
  /**
   * Final date the device will be supported (Read-only)
   */
  supportEndDate: string;
  /**
   * Trusted Platform Module (TPM) (Read-only)
   */
  tpmVersionInfo: any;
  /**
   * Will Chromebook auto renew after support end date (Read-only)
   */
  willAutoRenew: boolean;
}
/**
 * JSON request template for firing actions on ChromeOs Device in Directory
 * Devices API.
 */
export interface Schema$ChromeOsDeviceAction {
  /**
   * Action to be taken on the ChromeOs Device
   */
  action: string;
  deprovisionReason: string;
}
/**
 * JSON response template for List Chrome OS Devices operation in Directory API.
 */
export interface Schema$ChromeOsDevices {
  /**
   * List of Chrome OS Device objects.
   */
  chromeosdevices: Schema$ChromeOsDevice[];
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * Kind of resource this is.
   */
  kind: string;
  /**
   * Token used to access next page of this result.
   */
  nextPageToken: string;
}
/**
 * JSON request template for moving ChromeOs Device to given OU in Directory
 * Devices API.
 */
export interface Schema$ChromeOsMoveDevicesToOu {
  /**
   * ChromeOs Devices to be moved to OU
   */
  deviceIds: string[];
}
/**
 * JSON template for Customer Resource object in Directory API.
 */
export interface Schema$Customer {
  /**
   * The customer&#39;s secondary contact email address. This email address
   * cannot be on the same domain as the customerDomain
   */
  alternateEmail: string;
  /**
   * The customer&#39;s creation time (Readonly)
   */
  customerCreationTime: string;
  /**
   * The customer&#39;s primary domain name string. Do not include the www
   * prefix when creating a new customer.
   */
  customerDomain: string;
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * The unique ID for the customer&#39;s G Suite account. (Readonly)
   */
  id: string;
  /**
   * Identifies the resource as a customer. Value: admin#directory#customer
   */
  kind: string;
  /**
   * The customer&#39;s ISO 639-2 language code. The default value is en-US
   */
  language: string;
  /**
   * The customer&#39;s contact phone number in E.164 format.
   */
  phoneNumber: string;
  /**
   * The customer&#39;s postal address information.
   */
  postalAddress: Schema$CustomerPostalAddress;
}
/**
 * JSON template for postal address of a customer.
 */
export interface Schema$CustomerPostalAddress {
  /**
   * A customer&#39;s physical address. The address can be composed of one to
   * three lines.
   */
  addressLine1: string;
  /**
   * Address line 2 of the address.
   */
  addressLine2: string;
  /**
   * Address line 3 of the address.
   */
  addressLine3: string;
  /**
   * The customer contact&#39;s name.
   */
  contactName: string;
  /**
   * This is a required property. For countryCode information see the ISO 3166
   * country code elements.
   */
  countryCode: string;
  /**
   * Name of the locality. An example of a locality value is the city of San
   * Francisco.
   */
  locality: string;
  /**
   * The company or company division name.
   */
  organizationName: string;
  /**
   * The postal code. A postalCode example is a postal zip code such as 10009.
   * This is in accordance with -
   * http://portablecontacts.net/draft-spec.html#address_element.
   */
  postalCode: string;
  /**
   * Name of the region. An example of a region value is NY for the state of New
   * York.
   */
  region: string;
}
/**
 * JSON template for Domain Alias object in Directory API.
 */
export interface Schema$DomainAlias {
  /**
   * The creation time of the domain alias. (Read-only).
   */
  creationTime: string;
  /**
   * The domain alias name.
   */
  domainAliasName: string;
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * Kind of resource this is.
   */
  kind: string;
  /**
   * The parent domain name that the domain alias is associated with. This can
   * either be a primary or secondary domain name within a customer.
   */
  parentDomainName: string;
  /**
   * Indicates the verification state of a domain alias. (Read-only)
   */
  verified: boolean;
}
/**
 * JSON response template to list domain aliases in Directory API.
 */
export interface Schema$DomainAliases {
  /**
   * List of domain alias objects.
   */
  domainAliases: Schema$DomainAlias[];
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * Kind of resource this is.
   */
  kind: string;
}
/**
 * JSON template for Domain object in Directory API.
 */
export interface Schema$Domains {
  /**
   * Creation time of the domain. (Read-only).
   */
  creationTime: string;
  /**
   * List of domain alias objects. (Read-only)
   */
  domainAliases: Schema$DomainAlias[];
  /**
   * The domain name of the customer.
   */
  domainName: string;
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * Indicates if the domain is a primary domain (Read-only).
   */
  isPrimary: boolean;
  /**
   * Kind of resource this is.
   */
  kind: string;
  /**
   * Indicates the verification state of a domain. (Read-only).
   */
  verified: boolean;
}
/**
 * JSON response template to list Domains in Directory API.
 */
export interface Schema$Domains2 {
  /**
   * List of domain objects.
   */
  domains: Schema$Domains[];
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * Kind of resource this is.
   */
  kind: string;
}
/**
 * JSON template for Feature object in Directory API.
 */
export interface Schema$Feature {
  /**
   * ETag of the resource.
   */
  etags: string;
  /**
   * Kind of resource this is.
   */
  kind: string;
  /**
   * The name of the feature.
   */
  name: string;
}
/**
 * JSON template for a &quot;feature instance&quot;.
 */
export interface Schema$FeatureInstance {
  /**
   * The feature that this is an instance of. A calendar resource may have
   * multiple instances of a feature.
   */
  feature: Schema$Feature;
}
/**
 * JSON request template for renaming a feature.
 */
export interface Schema$FeatureRename {
  /**
   * New name of the feature.
   */
  newName: string;
}
/**
 * JSON template for Feature List Response object in Directory API.
 */
export interface Schema$Features {
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * The Features in this page of results.
   */
  features: Schema$Feature[];
  /**
   * Kind of resource this is.
   */
  kind: string;
  /**
   * The continuation token, used to page through large result sets. Provide
   * this value in a subsequent request to return the next page of results.
   */
  nextPageToken: string;
}
/**
 * JSON template for Group resource in Directory API.
 */
export interface Schema$Group {
  /**
   * Is the group created by admin (Read-only) *
   */
  adminCreated: boolean;
  /**
   * List of aliases (Read-only)
   */
  aliases: string[];
  /**
   * Description of the group
   */
  description: string;
  /**
   * Group direct members count
   */
  directMembersCount: string;
  /**
   * Email of Group
   */
  email: string;
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * Unique identifier of Group (Read-only)
   */
  id: string;
  /**
   * Kind of resource this is.
   */
  kind: string;
  /**
   * Group name
   */
  name: string;
  /**
   * List of non editable aliases (Read-only)
   */
  nonEditableAliases: string[];
}
/**
 * JSON response template for List Groups operation in Directory API.
 */
export interface Schema$Groups {
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * List of group objects.
   */
  groups: Schema$Group[];
  /**
   * Kind of resource this is.
   */
  kind: string;
  /**
   * Token used to access next page of this result.
   */
  nextPageToken: string;
}
/**
 * JSON template for Member resource in Directory API.
 */
export interface Schema$Member {
  /**
   * Email of member (Read-only)
   */
  email: string;
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * Unique identifier of customer member (Read-only) Unique identifier of group
   * (Read-only) Unique identifier of member (Read-only)
   */
  id: string;
  /**
   * Kind of resource this is.
   */
  kind: string;
  /**
   * Role of member
   */
  role: string;
  /**
   * Status of member (Immutable)
   */
  status: string;
  /**
   * Type of member (Immutable)
   */
  type: string;
}
/**
 * JSON response template for List Members operation in Directory API.
 */
export interface Schema$Members {
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * Kind of resource this is.
   */
  kind: string;
  /**
   * List of member objects.
   */
  members: Schema$Member[];
  /**
   * Token used to access next page of this result.
   */
  nextPageToken: string;
}
/**
 * JSON template for Has Member response in Directory API.
 */
export interface Schema$MembersHasMember {
  /**
   * Identifies whether the given user is a member of the group. Membership can
   * be direct or nested.
   */
  isMember: boolean;
}
/**
 * JSON template for Mobile Device resource in Directory API.
 */
export interface Schema$MobileDevice {
  /**
   * Adb (USB debugging) enabled or disabled on device (Read-only)
   */
  adbStatus: boolean;
  /**
   * List of applications installed on Mobile Device
   */
  applications: any[];
  /**
   * Mobile Device Baseband version (Read-only)
   */
  basebandVersion: string;
  /**
   * Mobile Device Bootloader version (Read-only)
   */
  bootloaderVersion: string;
  /**
   * Mobile Device Brand (Read-only)
   */
  brand: string;
  /**
   * Mobile Device Build number (Read-only)
   */
  buildNumber: string;
  /**
   * The default locale used on the Mobile Device (Read-only)
   */
  defaultLanguage: string;
  /**
   * Developer options enabled or disabled on device (Read-only)
   */
  developerOptionsStatus: boolean;
  /**
   * Mobile Device compromised status (Read-only)
   */
  deviceCompromisedStatus: string;
  /**
   * Mobile Device serial number (Read-only)
   */
  deviceId: string;
  /**
   * DevicePasswordStatus (Read-only)
   */
  devicePasswordStatus: string;
  /**
   * List of owner user&#39;s email addresses (Read-only)
   */
  email: string[];
  /**
   * Mobile Device Encryption Status (Read-only)
   */
  encryptionStatus: string;
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * Date and time the device was first synchronized with the policy settings in
   * the G Suite administrator control panel (Read-only)
   */
  firstSync: string;
  /**
   * Mobile Device Hardware (Read-only)
   */
  hardware: string;
  /**
   * Mobile Device Hardware Id (Read-only)
   */
  hardwareId: string;
  /**
   * Mobile Device IMEI number (Read-only)
   */
  imei: string;
  /**
   * Mobile Device Kernel version (Read-only)
   */
  kernelVersion: string;
  /**
   * Kind of resource this is.
   */
  kind: string;
  /**
   * Date and time the device was last synchronized with the policy settings in
   * the G Suite administrator control panel (Read-only)
   */
  lastSync: string;
  /**
   * Boolean indicating if this account is on owner/primary profile or not
   * (Read-only)
   */
  managedAccountIsOnOwnerProfile: boolean;
  /**
   * Mobile Device manufacturer (Read-only)
   */
  manufacturer: string;
  /**
   * Mobile Device MEID number (Read-only)
   */
  meid: string;
  /**
   * Name of the model of the device
   */
  model: string;
  /**
   * List of owner user&#39;s names (Read-only)
   */
  name: string[];
  /**
   * Mobile Device mobile or network operator (if available) (Read-only)
   */
  networkOperator: string;
  /**
   * Name of the mobile operating system
   */
  os: string;
  /**
   * List of accounts added on device (Read-only)
   */
  otherAccountsInfo: string[];
  /**
   * DMAgentPermission (Read-only)
   */
  privilege: string;
  /**
   * Mobile Device release version version (Read-only)
   */
  releaseVersion: string;
  /**
   * Unique identifier of Mobile Device (Read-only)
   */
  resourceId: string;
  /**
   * Mobile Device Security patch level (Read-only)
   */
  securityPatchLevel: string;
  /**
   * Mobile Device SSN or Serial Number (Read-only)
   */
  serialNumber: string;
  /**
   * Status of the device (Read-only)
   */
  status: string;
  /**
   * Work profile supported on device (Read-only)
   */
  supportsWorkProfile: boolean;
  /**
   * The type of device (Read-only)
   */
  type: string;
  /**
   * Unknown sources enabled or disabled on device (Read-only)
   */
  unknownSourcesStatus: boolean;
  /**
   * Mobile Device user agent
   */
  userAgent: string;
  /**
   * Mobile Device WiFi MAC address (Read-only)
   */
  wifiMacAddress: string;
}
/**
 * JSON request template for firing commands on Mobile Device in Directory
 * Devices API.
 */
export interface Schema$MobileDeviceAction {
  /**
   * Action to be taken on the Mobile Device
   */
  action: string;
}
/**
 * JSON response template for List Mobile Devices operation in Directory API.
 */
export interface Schema$MobileDevices {
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * Kind of resource this is.
   */
  kind: string;
  /**
   * List of Mobile Device objects.
   */
  mobiledevices: Schema$MobileDevice[];
  /**
   * Token used to access next page of this result.
   */
  nextPageToken: string;
}
/**
 * Template for a notification resource.
 */
export interface Schema$Notification {
  /**
   * Body of the notification (Read-only)
   */
  body: string;
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * Address from which the notification is received (Read-only)
   */
  fromAddress: string;
  /**
   * Boolean indicating whether the notification is unread or not.
   */
  isUnread: boolean;
  /**
   * The type of the resource.
   */
  kind: string;
  notificationId: string;
  /**
   * Time at which notification was sent (Read-only)
   */
  sendTime: string;
  /**
   * Subject of the notification (Read-only)
   */
  subject: string;
}
/**
 * Template for notifications list response.
 */
export interface Schema$Notifications {
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * List of notifications in this page.
   */
  items: Schema$Notification[];
  /**
   * The type of the resource.
   */
  kind: string;
  /**
   * Token for fetching the next page of notifications.
   */
  nextPageToken: string;
  /**
   * Number of unread notification for the domain.
   */
  unreadNotificationsCount: number;
}
/**
 * JSON template for Org Unit resource in Directory API.
 */
export interface Schema$OrgUnit {
  /**
   * Should block inheritance
   */
  blockInheritance: boolean;
  /**
   * Description of OrgUnit
   */
  description: string;
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * Kind of resource this is.
   */
  kind: string;
  /**
   * Name of OrgUnit
   */
  name: string;
  /**
   * Id of OrgUnit
   */
  orgUnitId: string;
  /**
   * Path of OrgUnit
   */
  orgUnitPath: string;
  /**
   * Id of parent OrgUnit
   */
  parentOrgUnitId: string;
  /**
   * Path of parent OrgUnit
   */
  parentOrgUnitPath: string;
}
/**
 * JSON response template for List Organization Units operation in Directory
 * API.
 */
export interface Schema$OrgUnits {
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * Kind of resource this is.
   */
  kind: string;
  /**
   * List of user objects.
   */
  organizationUnits: Schema$OrgUnit[];
}
/**
 * JSON template for privilege resource in Directory API.
 */
export interface Schema$Privilege {
  /**
   * A list of child privileges. Privileges for a service form a tree. Each
   * privilege can have a list of child privileges; this list is empty for a
   * leaf privilege.
   */
  childPrivileges: Schema$Privilege[];
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * If the privilege can be restricted to an organization unit.
   */
  isOuScopable: boolean;
  /**
   * The type of the API resource. This is always admin#directory#privilege.
   */
  kind: string;
  /**
   * The name of the privilege.
   */
  privilegeName: string;
  /**
   * The obfuscated ID of the service this privilege is for.
   */
  serviceId: string;
  /**
   * The name of the service this privilege is for.
   */
  serviceName: string;
}
/**
 * JSON response template for List privileges operation in Directory API.
 */
export interface Schema$Privileges {
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * A list of Privilege resources.
   */
  items: Schema$Privilege[];
  /**
   * The type of the API resource. This is always admin#directory#privileges.
   */
  kind: string;
}
/**
 * JSON template for role resource in Directory API.
 */
export interface Schema$Role {
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * Returns true if the role is a super admin role.
   */
  isSuperAdminRole: boolean;
  /**
   * Returns true if this is a pre-defined system role.
   */
  isSystemRole: boolean;
  /**
   * The type of the API resource. This is always admin#directory#role.
   */
  kind: string;
  /**
   * A short description of the role.
   */
  roleDescription: string;
  /**
   * ID of the role.
   */
  roleId: string;
  /**
   * Name of the role.
   */
  roleName: string;
  /**
   * The set of privileges that are granted to this role.
   */
  rolePrivileges: any[];
}
/**
 * JSON template for roleAssignment resource in Directory API.
 */
export interface Schema$RoleAssignment {
  /**
   * The unique ID of the user this role is assigned to.
   */
  assignedTo: string;
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * The type of the API resource. This is always
   * admin#directory#roleAssignment.
   */
  kind: string;
  /**
   * If the role is restricted to an organization unit, this contains the ID for
   * the organization unit the exercise of this role is restricted to.
   */
  orgUnitId: string;
  /**
   * ID of this roleAssignment.
   */
  roleAssignmentId: string;
  /**
   * The ID of the role that is assigned.
   */
  roleId: string;
  /**
   * The scope in which this role is assigned. Possible values are:  - CUSTOMER
   * - ORG_UNIT
   */
  scopeType: string;
}
/**
 * JSON response template for List roleAssignments operation in Directory API.
 */
export interface Schema$RoleAssignments {
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * A list of RoleAssignment resources.
   */
  items: Schema$RoleAssignment[];
  /**
   * The type of the API resource. This is always
   * admin#directory#roleAssignments.
   */
  kind: string;
  nextPageToken: string;
}
/**
 * JSON response template for List roles operation in Directory API.
 */
export interface Schema$Roles {
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * A list of Role resources.
   */
  items: Schema$Role[];
  /**
   * The type of the API resource. This is always admin#directory#roles.
   */
  kind: string;
  nextPageToken: string;
}
/**
 * JSON template for Schema resource in Directory API.
 */
export interface Schema$Schema {
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * Fields of Schema
   */
  fields: Schema$SchemaFieldSpec[];
  /**
   * Kind of resource this is.
   */
  kind: string;
  /**
   * Unique identifier of Schema (Read-only)
   */
  schemaId: string;
  /**
   * Schema name
   */
  schemaName: string;
}
/**
 * JSON template for FieldSpec resource for Schemas in Directory API.
 */
export interface Schema$SchemaFieldSpec {
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * Unique identifier of Field (Read-only)
   */
  fieldId: string;
  /**
   * Name of the field.
   */
  fieldName: string;
  /**
   * Type of the field.
   */
  fieldType: string;
  /**
   * Boolean specifying whether the field is indexed or not.
   */
  indexed: boolean;
  /**
   * Kind of resource this is.
   */
  kind: string;
  /**
   * Boolean specifying whether this is a multi-valued field or not.
   */
  multiValued: boolean;
  /**
   * Indexing spec for a numeric field. By default, only exact match queries
   * will be supported for numeric fields. Setting the numericIndexingSpec
   * allows range queries to be supported.
   */
  numericIndexingSpec: any;
  /**
   * Read ACLs on the field specifying who can view values of this field. Valid
   * values are &quot;ALL_DOMAIN_USERS&quot; and &quot;ADMINS_AND_SELF&quot;.
   */
  readAccessType: string;
}
/**
 * JSON response template for List Schema operation in Directory API.
 */
export interface Schema$Schemas {
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * Kind of resource this is.
   */
  kind: string;
  /**
   * List of UserSchema objects.
   */
  schemas: Schema$Schema[];
}
/**
 * JSON template for token resource in Directory API.
 */
export interface Schema$Token {
  /**
   * Whether the application is registered with Google. The value is true if the
   * application has an anonymous Client ID.
   */
  anonymous: boolean;
  /**
   * The Client ID of the application the token is issued to.
   */
  clientId: string;
  /**
   * The displayable name of the application the token is issued to.
   */
  displayText: string;
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * The type of the API resource. This is always admin#directory#token.
   */
  kind: string;
  /**
   * Whether the token is issued to an installed application. The value is true
   * if the application is installed to a desktop or mobile device.
   */
  nativeApp: boolean;
  /**
   * A list of authorization scopes the application is granted.
   */
  scopes: string[];
  /**
   * The unique ID of the user that issued the token.
   */
  userKey: string;
}
/**
 * JSON response template for List tokens operation in Directory API.
 */
export interface Schema$Tokens {
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * A list of Token resources.
   */
  items: Schema$Token[];
  /**
   * The type of the API resource. This is always admin#directory#tokenList.
   */
  kind: string;
}
/**
 * JSON template for Trusted App Ids Resource object in Directory API.
 */
export interface Schema$TrustedAppId {
  /**
   * Android package name.
   */
  androidPackageName: string;
  /**
   * SHA1 signature of the app certificate.
   */
  certificateHashSHA1: string;
  /**
   * SHA256 signature of the app certificate.
   */
  certificateHashSHA256: string;
  etag: string;
  /**
   * Identifies the resource as a trusted AppId.
   */
  kind: string;
}
/**
 * JSON template for Trusted Apps response object of a user in Directory API.
 */
export interface Schema$TrustedApps {
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * Identifies the resource as trusted apps response.
   */
  kind: string;
  nextPageToken: string;
  /**
   * Trusted Apps list.
   */
  trustedApps: Schema$TrustedAppId[];
}
/**
 * JSON template for User object in Directory API.
 */
export interface Schema$User {
  addresses: any;
  /**
   * Indicates if user has agreed to terms (Read-only)
   */
  agreedToTerms: boolean;
  /**
   * List of aliases (Read-only)
   */
  aliases: string[];
  /**
   * Boolean indicating if the user should change password in next login
   */
  changePasswordAtNextLogin: boolean;
  /**
   * User&#39;s G Suite account creation time. (Read-only)
   */
  creationTime: string;
  /**
   * CustomerId of User (Read-only)
   */
  customerId: string;
  /**
   * Custom fields of the user.
   */
  customSchemas: any;
  deletionTime: string;
  emails: any;
  /**
   * ETag of the resource.
   */
  etag: string;
  externalIds: any;
  gender: any;
  /**
   * Hash function name for password. Supported are MD5, SHA-1 and crypt
   */
  hashFunction: string;
  /**
   * Unique identifier of User (Read-only)
   */
  id: string;
  ims: any;
  /**
   * Boolean indicating if user is included in Global Address List
   */
  includeInGlobalAddressList: boolean;
  /**
   * Boolean indicating if ip is whitelisted
   */
  ipWhitelisted: boolean;
  /**
   * Boolean indicating if the user is admin (Read-only)
   */
  isAdmin: boolean;
  /**
   * Boolean indicating if the user is delegated admin (Read-only)
   */
  isDelegatedAdmin: boolean;
  /**
   * Is 2-step verification enforced (Read-only)
   */
  isEnforcedIn2Sv: boolean;
  /**
   * Is enrolled in 2-step verification (Read-only)
   */
  isEnrolledIn2Sv: boolean;
  /**
   * Is mailbox setup (Read-only)
   */
  isMailboxSetup: boolean;
  keywords: any;
  /**
   * Kind of resource this is.
   */
  kind: string;
  languages: any;
  /**
   * User&#39;s last login time. (Read-only)
   */
  lastLoginTime: string;
  locations: any;
  /**
   * User&#39;s name
   */
  name: Schema$UserName;
  /**
   * List of non editable aliases (Read-only)
   */
  nonEditableAliases: string[];
  notes: any;
  organizations: any;
  /**
   * OrgUnit of User
   */
  orgUnitPath: string;
  /**
   * User&#39;s password
   */
  password: string;
  phones: any;
  posixAccounts: any;
  /**
   * username of User
   */
  primaryEmail: string;
  relations: any;
  sshPublicKeys: any;
  /**
   * Indicates if user is suspended
   */
  suspended: boolean;
  /**
   * Suspension reason if user is suspended (Read-only)
   */
  suspensionReason: string;
  /**
   * ETag of the user&#39;s photo (Read-only)
   */
  thumbnailPhotoEtag: string;
  /**
   * Photo Url of the user (Read-only)
   */
  thumbnailPhotoUrl: string;
  websites: any;
}
/**
 * JSON template for About (notes) of a user in Directory API.
 */
export interface Schema$UserAbout {
  /**
   * About entry can have a type which indicates the content type. It can either
   * be plain or html. By default, notes contents are assumed to contain plain
   * text.
   */
  contentType: string;
  /**
   * Actual value of notes.
   */
  value: string;
}
/**
 * JSON template for address.
 */
export interface Schema$UserAddress {
  /**
   * Country.
   */
  country: string;
  /**
   * Country code.
   */
  countryCode: string;
  /**
   * Custom type.
   */
  customType: string;
  /**
   * Extended Address.
   */
  extendedAddress: string;
  /**
   * Formatted address.
   */
  formatted: string;
  /**
   * Locality.
   */
  locality: string;
  /**
   * Other parts of address.
   */
  poBox: string;
  /**
   * Postal code.
   */
  postalCode: string;
  /**
   * If this is user&#39;s primary address. Only one entry could be marked as
   * primary.
   */
  primary: boolean;
  /**
   * Region.
   */
  region: string;
  /**
   * User supplied address was structured. Structured addresses are NOT
   * supported at this time. You might be able to write structured addresses,
   * but any values will eventually be clobbered.
   */
  sourceIsStructured: boolean;
  /**
   * Street.
   */
  streetAddress: string;
  /**
   * Each entry can have a type which indicates standard values of that entry.
   * For example address could be of home, work etc. In addition to the standard
   * type, an entry can have a custom type and can take any value. Such type
   * should have the CUSTOM value as type and also have a customType value.
   */
  type: string;
}
/**
 * JSON template for a set of custom properties (i.e. all fields in a particular
 * schema)
 */
export interface Schema$UserCustomProperties {}
/**
 * JSON template for an email.
 */
export interface Schema$UserEmail {
  /**
   * Email id of the user.
   */
  address: string;
  /**
   * Custom Type.
   */
  customType: string;
  /**
   * If this is user&#39;s primary email. Only one entry could be marked as
   * primary.
   */
  primary: boolean;
  /**
   * Each entry can have a type which indicates standard types of that entry.
   * For example email could be of home, work etc. In addition to the standard
   * type, an entry can have a custom type and can take any value Such types
   * should have the CUSTOM value as type and also have a customType value.
   */
  type: string;
}
/**
 * JSON template for an externalId entry.
 */
export interface Schema$UserExternalId {
  /**
   * Custom type.
   */
  customType: string;
  /**
   * The type of the Id.
   */
  type: string;
  /**
   * The value of the id.
   */
  value: string;
}
export interface Schema$UserGender {
  /**
   * AddressMeAs. A human-readable string containing the proper way to refer to
   * the profile owner by humans, for example &quot;he/him/his&quot; or
   * &quot;they/them/their&quot;.
   */
  addressMeAs: string;
  /**
   * Custom gender.
   */
  customGender: string;
  /**
   * Gender.
   */
  type: string;
}
/**
 * JSON template for instant messenger of an user.
 */
export interface Schema$UserIm {
  /**
   * Custom protocol.
   */
  customProtocol: string;
  /**
   * Custom type.
   */
  customType: string;
  /**
   * Instant messenger id.
   */
  im: string;
  /**
   * If this is user&#39;s primary im. Only one entry could be marked as
   * primary.
   */
  primary: boolean;
  /**
   * Protocol used in the instant messenger. It should be one of the values from
   * ImProtocolTypes map. Similar to type, it can take a CUSTOM value and
   * specify the custom name in customProtocol field.
   */
  protocol: string;
  /**
   * Each entry can have a type which indicates standard types of that entry.
   * For example instant messengers could be of home, work etc. In addition to
   * the standard type, an entry can have a custom type and can take any value.
   * Such types should have the CUSTOM value as type and also have a customType
   * value.
   */
  type: string;
}
/**
 * JSON template for a keyword entry.
 */
export interface Schema$UserKeyword {
  /**
   * Custom Type.
   */
  customType: string;
  /**
   * Each entry can have a type which indicates standard type of that entry. For
   * example, keyword could be of type occupation or outlook. In addition to the
   * standard type, an entry can have a custom type and can give it any name.
   * Such types should have the CUSTOM value as type and also have a customType
   * value.
   */
  type: string;
  /**
   * Keyword.
   */
  value: string;
}
/**
 * JSON template for a language entry.
 */
export interface Schema$UserLanguage {
  /**
   * Other language. User can provide own language name if there is no
   * corresponding Google III language code. If this is set LanguageCode
   * can&#39;t be set
   */
  customLanguage: string;
  /**
   * Language Code. Should be used for storing Google III LanguageCode string
   * representation for language. Illegal values cause SchemaException.
   */
  languageCode: string;
}
/**
 * JSON template for a location entry.
 */
export interface Schema$UserLocation {
  /**
   * Textual location. This is most useful for display purposes to concisely
   * describe the location. For example, &quot;Mountain View, CA&quot;,
   * &quot;Near Seattle&quot;, &quot;US-NYC-9TH 9A209A&quot;.
   */
  area: string;
  /**
   * Building Identifier.
   */
  buildingId: string;
  /**
   * Custom Type.
   */
  customType: string;
  /**
   * Most specific textual code of individual desk location.
   */
  deskCode: string;
  /**
   * Floor name/number.
   */
  floorName: string;
  /**
   * Floor section. More specific location within the floor. For example, if a
   * floor is divided into sections &quot;A&quot;, &quot;B&quot;, and
   * &quot;C&quot;, this field would identify one of those values.
   */
  floorSection: string;
  /**
   * Each entry can have a type which indicates standard types of that entry.
   * For example location could be of types default and desk. In addition to
   * standard type, an entry can have a custom type and can give it any name.
   * Such types should have &quot;custom&quot; as type and also have a
   * customType value.
   */
  type: string;
}
/**
 * JSON request template for setting/revoking admin status of a user in
 * Directory API.
 */
export interface Schema$UserMakeAdmin {
  /**
   * Boolean indicating new admin status of the user
   */
  status: boolean;
}
/**
 * JSON template for name of a user in Directory API.
 */
export interface Schema$UserName {
  /**
   * Last Name
   */
  familyName: string;
  /**
   * Full Name
   */
  fullName: string;
  /**
   * First Name
   */
  givenName: string;
}
/**
 * JSON template for an organization entry.
 */
export interface Schema$UserOrganization {
  /**
   * The cost center of the users department.
   */
  costCenter: string;
  /**
   * Custom type.
   */
  customType: string;
  /**
   * Department within the organization.
   */
  department: string;
  /**
   * Description of the organization.
   */
  description: string;
  /**
   * The domain to which the organization belongs to.
   */
  domain: string;
  /**
   * The full-time equivalent percent within the organization (100000 = 100%).
   */
  fullTimeEquivalent: number;
  /**
   * Location of the organization. This need not be fully qualified address.
   */
  location: string;
  /**
   * Name of the organization
   */
  name: string;
  /**
   * If it user&#39;s primary organization.
   */
  primary: boolean;
  /**
   * Symbol of the organization.
   */
  symbol: string;
  /**
   * Title (designation) of the user in the organization.
   */
  title: string;
  /**
   * Each entry can have a type which indicates standard types of that entry.
   * For example organization could be of school, work etc. In addition to the
   * standard type, an entry can have a custom type and can give it any name.
   * Such types should have the CUSTOM value as type and also have a CustomType
   * value.
   */
  type: string;
}
/**
 * JSON template for a phone entry.
 */
export interface Schema$UserPhone {
  /**
   * Custom Type.
   */
  customType: string;
  /**
   * If this is user&#39;s primary phone or not.
   */
  primary: boolean;
  /**
   * Each entry can have a type which indicates standard types of that entry.
   * For example phone could be of home_fax, work, mobile etc. In addition to
   * the standard type, an entry can have a custom type and can give it any
   * name. Such types should have the CUSTOM value as type and also have a
   * customType value.
   */
  type: string;
  /**
   * Phone number.
   */
  value: string;
}
/**
 * JSON template for Photo object in Directory API.
 */
export interface Schema$UserPhoto {
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * Height in pixels of the photo
   */
  height: number;
  /**
   * Unique identifier of User (Read-only)
   */
  id: string;
  /**
   * Kind of resource this is.
   */
  kind: string;
  /**
   * Mime Type of the photo
   */
  mimeType: string;
  /**
   * Base64 encoded photo data
   */
  photoData: string;
  /**
   * Primary email of User (Read-only)
   */
  primaryEmail: string;
  /**
   * Width in pixels of the photo
   */
  width: number;
}
/**
 * JSON template for a POSIX account entry. Description of the field family:
 * go/fbs-posix.
 */
export interface Schema$UserPosixAccount {
  /**
   * A POSIX account field identifier. (Read-only)
   */
  accountId: string;
  /**
   * The GECOS (user information) for this account.
   */
  gecos: string;
  /**
   * The default group ID.
   */
  gid: string;
  /**
   * The path to the home directory for this account.
   */
  homeDirectory: string;
  /**
   * If this is user&#39;s primary account within the SystemId.
   */
  primary: boolean;
  /**
   * The path to the login shell for this account.
   */
  shell: string;
  /**
   * System identifier for which account Username or Uid apply to.
   */
  systemId: string;
  /**
   * The POSIX compliant user ID.
   */
  uid: string;
  /**
   * The username of the account.
   */
  username: string;
}
/**
 * JSON template for a relation entry.
 */
export interface Schema$UserRelation {
  /**
   * Custom Type.
   */
  customType: string;
  /**
   * The relation of the user. Some of the possible values are mother, father,
   * sister, brother, manager, assistant, partner.
   */
  type: string;
  /**
   * The name of the relation.
   */
  value: string;
}
/**
 * JSON response template for List Users operation in Apps Directory API.
 */
export interface Schema$Users {
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * Kind of resource this is.
   */
  kind: string;
  /**
   * Token used to access next page of this result.
   */
  nextPageToken: string;
  /**
   * Event that triggered this response (only used in case of Push Response)
   */
  trigger_event: string;
  /**
   * List of user objects.
   */
  users: Schema$User[];
}
/**
 * JSON template for a POSIX account entry.
 */
export interface Schema$UserSshPublicKey {
  /**
   * An expiration time in microseconds since epoch.
   */
  expirationTimeUsec: string;
  /**
   * A SHA-256 fingerprint of the SSH public key. (Read-only)
   */
  fingerprint: string;
  /**
   * An SSH public key.
   */
  key: string;
}
/**
 * JSON request template to undelete a user in Directory API.
 */
export interface Schema$UserUndelete {
  /**
   * OrgUnit of User
   */
  orgUnitPath: string;
}
/**
 * JSON template for a website entry.
 */
export interface Schema$UserWebsite {
  /**
   * Custom Type.
   */
  customType: string;
  /**
   * If this is user&#39;s primary website or not.
   */
  primary: boolean;
  /**
   * Each entry can have a type which indicates standard types of that entry.
   * For example website could be of home, work, blog etc. In addition to the
   * standard type, an entry can have a custom type and can give it any name.
   * Such types should have the CUSTOM value as type and also have a customType
   * value.
   */
  type: string;
  /**
   * Website.
   */
  value: string;
}
/**
 * JSON template for verification codes in Directory API.
 */
export interface Schema$VerificationCode {
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * The type of the resource. This is always admin#directory#verificationCode.
   */
  kind: string;
  /**
   * The obfuscated unique ID of the user.
   */
  userId: string;
  /**
   * A current verification code for the user. Invalidated or used verification
   * codes are not returned as part of the result.
   */
  verificationCode: string;
}
/**
 * JSON response template for List verification codes operation in Directory
 * API.
 */
export interface Schema$VerificationCodes {
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * A list of verification code resources.
   */
  items: Schema$VerificationCode[];
  /**
   * The type of the resource. This is always
   * admin#directory#verificationCodesList.
   */
  kind: string;
}

export class Resource$Asps {
  root: Admin;
  constructor(root: Admin) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * directory.asps.delete
   * @desc Delete an ASP issued by a user.
   * @alias directory.asps.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer} params.codeId The unique ID of the ASP to be deleted.
   * @param {string} params.userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/users/{userKey}/asps/{codeId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['userKey', 'codeId'],
      pathParams: ['codeId', 'userKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * directory.asps.get
   * @desc Get information about an ASP issued by a user.
   * @alias directory.asps.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer} params.codeId The unique ID of the ASP.
   * @param {string} params.userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Asp>;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Asp>,
      callback?: BodyResponseCallback<Schema$Asp>): void;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Asp>,
      callback?: BodyResponseCallback<Schema$Asp>):
      void|AxiosPromise<Schema$Asp> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/users/{userKey}/asps/{codeId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['userKey', 'codeId'],
      pathParams: ['codeId', 'userKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Asp>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Asp>(parameters);
    }
  }


  /**
   * directory.asps.list
   * @desc List the ASPs issued by a user.
   * @alias directory.asps.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions): AxiosPromise<Schema$Asps>;
  list(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Asps>,
      callback?: BodyResponseCallback<Schema$Asps>): void;
  list(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Asps>,
      callback?: BodyResponseCallback<Schema$Asps>):
      void|AxiosPromise<Schema$Asps> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/users/{userKey}/asps')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['userKey'],
      pathParams: ['userKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Asps>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Asps>(parameters);
    }
  }
}

export class Resource$Channels {
  root: Admin;
  constructor(root: Admin) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * admin.channels.stop
   * @desc Stop watching resources through this channel
   * @alias admin.channels.stop
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().Channel} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  stop(params?: any, options?: MethodOptions): AxiosPromise<void>;
  stop(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  stop(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/admin/directory/v1/admin/directory_v1/channels/stop')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }
}

export class Resource$Chromeosdevices {
  root: Admin;
  constructor(root: Admin) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * directory.chromeosdevices.action
   * @desc Take action on Chrome OS Device
   * @alias directory.chromeosdevices.action
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customerId Immutable ID of the G Suite account
   * @param {string} params.resourceId Immutable ID of Chrome OS Device
   * @param {().ChromeOsDeviceAction} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  action(params?: any, options?: MethodOptions): AxiosPromise<void>;
  action(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  action(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/admin/directory/v1/customer/{customerId}/devices/chromeos/{resourceId}/action')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['customerId', 'resourceId'],
      pathParams: ['customerId', 'resourceId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * directory.chromeosdevices.get
   * @desc Retrieve Chrome OS Device
   * @alias directory.chromeosdevices.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customerId Immutable ID of the G Suite account
   * @param {string} params.deviceId Immutable ID of Chrome OS Device
   * @param {string=} params.projection Restrict information returned to a set of selected fields.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any,
      options?: MethodOptions): AxiosPromise<Schema$ChromeOsDevice>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ChromeOsDevice>,
      callback?: BodyResponseCallback<Schema$ChromeOsDevice>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ChromeOsDevice>,
      callback?: BodyResponseCallback<Schema$ChromeOsDevice>):
      void|AxiosPromise<Schema$ChromeOsDevice> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['customerId', 'deviceId'],
      pathParams: ['customerId', 'deviceId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ChromeOsDevice>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ChromeOsDevice>(parameters);
    }
  }


  /**
   * directory.chromeosdevices.list
   * @desc Retrieve all Chrome OS Devices of a customer (paginated)
   * @alias directory.chromeosdevices.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customerId Immutable ID of the G Suite account
   * @param {integer=} params.maxResults Maximum number of results to return. Default is 100
   * @param {string=} params.orderBy Column to use for sorting results
   * @param {string=} params.orgUnitPath Full path of the organizational unit or its ID
   * @param {string=} params.pageToken Token to specify next page in the list
   * @param {string=} params.projection Restrict information returned to a set of selected fields.
   * @param {string=} params.query Search string in the format given at http://support.google.com/chromeos/a/bin/answer.py?hl=en&answer=1698333
   * @param {string=} params.sortOrder Whether to return results in ascending or descending order. Only of use when orderBy is also used
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ChromeOsDevices>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ChromeOsDevices>,
      callback?: BodyResponseCallback<Schema$ChromeOsDevices>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ChromeOsDevices>,
      callback?: BodyResponseCallback<Schema$ChromeOsDevices>):
      void|AxiosPromise<Schema$ChromeOsDevices> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/admin/directory/v1/customer/{customerId}/devices/chromeos')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['customerId'],
      pathParams: ['customerId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ChromeOsDevices>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ChromeOsDevices>(parameters);
    }
  }


  /**
   * directory.chromeosdevices.moveDevicesToOu
   * @desc Move or insert multiple Chrome OS Devices to organizational unit
   * @alias directory.chromeosdevices.moveDevicesToOu
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customerId Immutable ID of the G Suite account
   * @param {string} params.orgUnitPath Full path of the target organizational unit or its ID
   * @param {().ChromeOsMoveDevicesToOu} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  moveDevicesToOu(params?: any, options?: MethodOptions): AxiosPromise<void>;
  moveDevicesToOu(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  moveDevicesToOu(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/admin/directory/v1/customer/{customerId}/devices/chromeos/moveDevicesToOu')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['customerId', 'orgUnitPath'],
      pathParams: ['customerId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * directory.chromeosdevices.patch
   * @desc Update Chrome OS Device. This method supports patch semantics.
   * @alias directory.chromeosdevices.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customerId Immutable ID of the G Suite account
   * @param {string} params.deviceId Immutable ID of Chrome OS Device
   * @param {string=} params.projection Restrict information returned to a set of selected fields.
   * @param {().ChromeOsDevice} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ChromeOsDevice>;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ChromeOsDevice>,
      callback?: BodyResponseCallback<Schema$ChromeOsDevice>): void;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ChromeOsDevice>,
      callback?: BodyResponseCallback<Schema$ChromeOsDevice>):
      void|AxiosPromise<Schema$ChromeOsDevice> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['customerId', 'deviceId'],
      pathParams: ['customerId', 'deviceId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ChromeOsDevice>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ChromeOsDevice>(parameters);
    }
  }


  /**
   * directory.chromeosdevices.update
   * @desc Update Chrome OS Device
   * @alias directory.chromeosdevices.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customerId Immutable ID of the G Suite account
   * @param {string} params.deviceId Immutable ID of Chrome OS Device
   * @param {string=} params.projection Restrict information returned to a set of selected fields.
   * @param {().ChromeOsDevice} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ChromeOsDevice>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ChromeOsDevice>,
      callback?: BodyResponseCallback<Schema$ChromeOsDevice>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ChromeOsDevice>,
      callback?: BodyResponseCallback<Schema$ChromeOsDevice>):
      void|AxiosPromise<Schema$ChromeOsDevice> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['customerId', 'deviceId'],
      pathParams: ['customerId', 'deviceId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ChromeOsDevice>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ChromeOsDevice>(parameters);
    }
  }
}

export class Resource$Customers {
  root: Admin;
  constructor(root: Admin) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * directory.customers.get
   * @desc Retrieves a customer.
   * @alias directory.customers.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customerKey Id of the customer to be retrieved
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Customer>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Customer>,
      callback?: BodyResponseCallback<Schema$Customer>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Customer>,
      callback?: BodyResponseCallback<Schema$Customer>):
      void|AxiosPromise<Schema$Customer> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/customers/{customerKey}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['customerKey'],
      pathParams: ['customerKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Customer>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Customer>(parameters);
    }
  }


  /**
   * directory.customers.patch
   * @desc Updates a customer. This method supports patch semantics.
   * @alias directory.customers.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customerKey Id of the customer to be updated
   * @param {().Customer} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$Customer>;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Customer>,
      callback?: BodyResponseCallback<Schema$Customer>): void;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Customer>,
      callback?: BodyResponseCallback<Schema$Customer>):
      void|AxiosPromise<Schema$Customer> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/customers/{customerKey}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['customerKey'],
      pathParams: ['customerKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Customer>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Customer>(parameters);
    }
  }


  /**
   * directory.customers.update
   * @desc Updates a customer.
   * @alias directory.customers.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customerKey Id of the customer to be updated
   * @param {().Customer} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions): AxiosPromise<Schema$Customer>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Customer>,
      callback?: BodyResponseCallback<Schema$Customer>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Customer>,
      callback?: BodyResponseCallback<Schema$Customer>):
      void|AxiosPromise<Schema$Customer> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/customers/{customerKey}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['customerKey'],
      pathParams: ['customerKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Customer>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Customer>(parameters);
    }
  }
}

export class Resource$Domainaliases {
  root: Admin;
  constructor(root: Admin) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * directory.domainAliases.delete
   * @desc Deletes a Domain Alias of the customer.
   * @alias directory.domainAliases.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customer Immutable ID of the G Suite account.
   * @param {string} params.domainAliasName Name of domain alias to be retrieved.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/admin/directory/v1/customer/{customer}/domainaliases/{domainAliasName}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['customer', 'domainAliasName'],
      pathParams: ['customer', 'domainAliasName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * directory.domainAliases.get
   * @desc Retrieves a domain alias of the customer.
   * @alias directory.domainAliases.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customer Immutable ID of the G Suite account.
   * @param {string} params.domainAliasName Name of domain alias to be retrieved.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$DomainAlias>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$DomainAlias>,
      callback?: BodyResponseCallback<Schema$DomainAlias>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$DomainAlias>,
      callback?: BodyResponseCallback<Schema$DomainAlias>):
      void|AxiosPromise<Schema$DomainAlias> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/admin/directory/v1/customer/{customer}/domainaliases/{domainAliasName}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['customer', 'domainAliasName'],
      pathParams: ['customer', 'domainAliasName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$DomainAlias>(parameters, callback);
    } else {
      return createAPIRequest<Schema$DomainAlias>(parameters);
    }
  }


  /**
   * directory.domainAliases.insert
   * @desc Inserts a Domain alias of the customer.
   * @alias directory.domainAliases.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customer Immutable ID of the G Suite account.
   * @param {().DomainAlias} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$DomainAlias>;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$DomainAlias>,
      callback?: BodyResponseCallback<Schema$DomainAlias>): void;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$DomainAlias>,
      callback?: BodyResponseCallback<Schema$DomainAlias>):
      void|AxiosPromise<Schema$DomainAlias> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/admin/directory/v1/customer/{customer}/domainaliases')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['customer'],
      pathParams: ['customer'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$DomainAlias>(parameters, callback);
    } else {
      return createAPIRequest<Schema$DomainAlias>(parameters);
    }
  }


  /**
   * directory.domainAliases.list
   * @desc Lists the domain aliases of the customer.
   * @alias directory.domainAliases.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customer Immutable ID of the G Suite account.
   * @param {string=} params.parentDomainName Name of the parent domain for which domain aliases are to be fetched.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$DomainAliases>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$DomainAliases>,
      callback?: BodyResponseCallback<Schema$DomainAliases>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$DomainAliases>,
      callback?: BodyResponseCallback<Schema$DomainAliases>):
      void|AxiosPromise<Schema$DomainAliases> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/admin/directory/v1/customer/{customer}/domainaliases')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['customer'],
      pathParams: ['customer'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$DomainAliases>(parameters, callback);
    } else {
      return createAPIRequest<Schema$DomainAliases>(parameters);
    }
  }
}

export class Resource$Domains {
  root: Admin;
  constructor(root: Admin) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * directory.domains.delete
   * @desc Deletes a domain of the customer.
   * @alias directory.domains.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customer Immutable ID of the G Suite account.
   * @param {string} params.domainName Name of domain to be deleted
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/admin/directory/v1/customer/{customer}/domains/{domainName}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['customer', 'domainName'],
      pathParams: ['customer', 'domainName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * directory.domains.get
   * @desc Retrieves a domain of the customer.
   * @alias directory.domains.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customer Immutable ID of the G Suite account.
   * @param {string} params.domainName Name of domain to be retrieved
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Domains>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Domains>,
      callback?: BodyResponseCallback<Schema$Domains>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Domains>,
      callback?: BodyResponseCallback<Schema$Domains>):
      void|AxiosPromise<Schema$Domains> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/admin/directory/v1/customer/{customer}/domains/{domainName}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['customer', 'domainName'],
      pathParams: ['customer', 'domainName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Domains>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Domains>(parameters);
    }
  }


  /**
   * directory.domains.insert
   * @desc Inserts a domain of the customer.
   * @alias directory.domains.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customer Immutable ID of the G Suite account.
   * @param {().Domains} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions): AxiosPromise<Schema$Domains>;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Domains>,
      callback?: BodyResponseCallback<Schema$Domains>): void;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Domains>,
      callback?: BodyResponseCallback<Schema$Domains>):
      void|AxiosPromise<Schema$Domains> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/customer/{customer}/domains')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['customer'],
      pathParams: ['customer'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Domains>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Domains>(parameters);
    }
  }


  /**
   * directory.domains.list
   * @desc Lists the domains of the customer.
   * @alias directory.domains.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customer Immutable ID of the G Suite account.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions): AxiosPromise<Schema$Domains2>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Domains2>,
      callback?: BodyResponseCallback<Schema$Domains2>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Domains2>,
      callback?: BodyResponseCallback<Schema$Domains2>):
      void|AxiosPromise<Schema$Domains2> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/customer/{customer}/domains')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['customer'],
      pathParams: ['customer'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Domains2>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Domains2>(parameters);
    }
  }
}

export class Resource$Groups {
  root: Admin;
  aliases: Resource$Groups$Aliases;
  constructor(root: Admin) {
    this.root = root;
    this.getRoot.bind(this);
    this.aliases = new Resource$Groups$Aliases(root);
  }

  getRoot() {
    return this.root;
  }


  /**
   * directory.groups.delete
   * @desc Delete Group
   * @alias directory.groups.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.groupKey Email or immutable ID of the group
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/groups/{groupKey}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['groupKey'],
      pathParams: ['groupKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * directory.groups.get
   * @desc Retrieve Group
   * @alias directory.groups.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.groupKey Email or immutable ID of the group
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Group>;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Group>,
      callback?: BodyResponseCallback<Schema$Group>): void;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Group>,
      callback?: BodyResponseCallback<Schema$Group>):
      void|AxiosPromise<Schema$Group> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/groups/{groupKey}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['groupKey'],
      pathParams: ['groupKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Group>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Group>(parameters);
    }
  }


  /**
   * directory.groups.insert
   * @desc Create Group
   * @alias directory.groups.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().Group} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions): AxiosPromise<Schema$Group>;
  insert(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Group>,
      callback?: BodyResponseCallback<Schema$Group>): void;
  insert(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Group>,
      callback?: BodyResponseCallback<Schema$Group>):
      void|AxiosPromise<Schema$Group> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/groups')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Group>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Group>(parameters);
    }
  }


  /**
   * directory.groups.list
   * @desc Retrieve all groups in a domain (paginated)
   * @alias directory.groups.list
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {string=} params.customer Immutable ID of the G Suite account. In case of multi-domain, to fetch all groups for a customer, fill this field instead of domain.
   * @param {string=} params.domain Name of the domain. Fill this field to get groups from only this domain. To return all groups in a multi-domain fill customer field instead.
   * @param {integer=} params.maxResults Maximum number of results to return. Default is 200
   * @param {string=} params.pageToken Token to specify next page in the list
   * @param {string=} params.userKey Email or immutable ID of the user if only those groups are to be listed, the given user is a member of. If ID, it should match with id of user object
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions): AxiosPromise<Schema$Groups>;
  list(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Groups>,
      callback?: BodyResponseCallback<Schema$Groups>): void;
  list(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Groups>,
      callback?: BodyResponseCallback<Schema$Groups>):
      void|AxiosPromise<Schema$Groups> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/groups')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Groups>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Groups>(parameters);
    }
  }


  /**
   * directory.groups.patch
   * @desc Update Group. This method supports patch semantics.
   * @alias directory.groups.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.groupKey Email or immutable ID of the group. If ID, it should match with id of group object
   * @param {().Group} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$Group>;
  patch(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Group>,
      callback?: BodyResponseCallback<Schema$Group>): void;
  patch(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Group>,
      callback?: BodyResponseCallback<Schema$Group>):
      void|AxiosPromise<Schema$Group> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/groups/{groupKey}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['groupKey'],
      pathParams: ['groupKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Group>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Group>(parameters);
    }
  }


  /**
   * directory.groups.update
   * @desc Update Group
   * @alias directory.groups.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.groupKey Email or immutable ID of the group. If ID, it should match with id of group object
   * @param {().Group} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions): AxiosPromise<Schema$Group>;
  update(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Group>,
      callback?: BodyResponseCallback<Schema$Group>): void;
  update(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Group>,
      callback?: BodyResponseCallback<Schema$Group>):
      void|AxiosPromise<Schema$Group> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/groups/{groupKey}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['groupKey'],
      pathParams: ['groupKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Group>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Group>(parameters);
    }
  }
}
export class Resource$Groups$Aliases {
  root: Admin;
  constructor(root: Admin) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * directory.groups.aliases.delete
   * @desc Remove a alias for the group
   * @alias directory.groups.aliases.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.alias The alias to be removed
   * @param {string} params.groupKey Email or immutable ID of the group
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/admin/directory/v1/groups/{groupKey}/aliases/{alias}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['groupKey', 'alias'],
      pathParams: ['alias', 'groupKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * directory.groups.aliases.insert
   * @desc Add a alias for the group
   * @alias directory.groups.aliases.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.groupKey Email or immutable ID of the group
   * @param {().Alias} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions): AxiosPromise<Schema$Alias>;
  insert(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Alias>,
      callback?: BodyResponseCallback<Schema$Alias>): void;
  insert(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Alias>,
      callback?: BodyResponseCallback<Schema$Alias>):
      void|AxiosPromise<Schema$Alias> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/groups/{groupKey}/aliases')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['groupKey'],
      pathParams: ['groupKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Alias>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Alias>(parameters);
    }
  }


  /**
   * directory.groups.aliases.list
   * @desc List all aliases for a group
   * @alias directory.groups.aliases.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.groupKey Email or immutable ID of the group
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions): AxiosPromise<Schema$Aliases>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Aliases>,
      callback?: BodyResponseCallback<Schema$Aliases>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Aliases>,
      callback?: BodyResponseCallback<Schema$Aliases>):
      void|AxiosPromise<Schema$Aliases> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/groups/{groupKey}/aliases')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['groupKey'],
      pathParams: ['groupKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Aliases>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Aliases>(parameters);
    }
  }
}


export class Resource$Members {
  root: Admin;
  constructor(root: Admin) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * directory.members.delete
   * @desc Remove membership.
   * @alias directory.members.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.groupKey Email or immutable ID of the group
   * @param {string} params.memberKey Email or immutable ID of the member
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/admin/directory/v1/groups/{groupKey}/members/{memberKey}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['groupKey', 'memberKey'],
      pathParams: ['groupKey', 'memberKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * directory.members.get
   * @desc Retrieve Group Member
   * @alias directory.members.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.groupKey Email or immutable ID of the group
   * @param {string} params.memberKey Email or immutable ID of the member
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Member>;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Member>,
      callback?: BodyResponseCallback<Schema$Member>): void;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Member>,
      callback?: BodyResponseCallback<Schema$Member>):
      void|AxiosPromise<Schema$Member> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/admin/directory/v1/groups/{groupKey}/members/{memberKey}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['groupKey', 'memberKey'],
      pathParams: ['groupKey', 'memberKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Member>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Member>(parameters);
    }
  }


  /**
   * directory.members.hasMember
   * @desc Checks whether the given user is a member of the group. Membership
   * can be direct or nested.
   * @alias directory.members.hasMember
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.groupKey Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
   * @param {string} params.memberKey Identifies the user member in the API request. The value can be the user's primary email address, alias, or unique ID.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  hasMember(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$MembersHasMember>;
  hasMember(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$MembersHasMember>,
      callback?: BodyResponseCallback<Schema$MembersHasMember>): void;
  hasMember(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$MembersHasMember>,
      callback?: BodyResponseCallback<Schema$MembersHasMember>):
      void|AxiosPromise<Schema$MembersHasMember> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/admin/directory/v1/groups/{groupKey}/hasMember/{memberKey}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['groupKey', 'memberKey'],
      pathParams: ['groupKey', 'memberKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$MembersHasMember>(parameters, callback);
    } else {
      return createAPIRequest<Schema$MembersHasMember>(parameters);
    }
  }


  /**
   * directory.members.insert
   * @desc Add user to the specified group.
   * @alias directory.members.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.groupKey Email or immutable ID of the group
   * @param {().Member} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions): AxiosPromise<Schema$Member>;
  insert(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Member>,
      callback?: BodyResponseCallback<Schema$Member>): void;
  insert(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Member>,
      callback?: BodyResponseCallback<Schema$Member>):
      void|AxiosPromise<Schema$Member> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/groups/{groupKey}/members')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['groupKey'],
      pathParams: ['groupKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Member>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Member>(parameters);
    }
  }


  /**
   * directory.members.list
   * @desc Retrieve all members in a group (paginated)
   * @alias directory.members.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.groupKey Email or immutable ID of the group
   * @param {integer=} params.maxResults Maximum number of results to return. Default is 200
   * @param {string=} params.pageToken Token to specify next page in the list
   * @param {string=} params.roles Comma separated role values to filter list results on.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions): AxiosPromise<Schema$Members>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Members>,
      callback?: BodyResponseCallback<Schema$Members>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Members>,
      callback?: BodyResponseCallback<Schema$Members>):
      void|AxiosPromise<Schema$Members> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/groups/{groupKey}/members')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['groupKey'],
      pathParams: ['groupKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Members>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Members>(parameters);
    }
  }


  /**
   * directory.members.patch
   * @desc Update membership of a user in the specified group. This method
   * supports patch semantics.
   * @alias directory.members.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.groupKey Email or immutable ID of the group. If ID, it should match with id of group object
   * @param {string} params.memberKey Email or immutable ID of the user. If ID, it should match with id of member object
   * @param {().Member} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$Member>;
  patch(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Member>,
      callback?: BodyResponseCallback<Schema$Member>): void;
  patch(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Member>,
      callback?: BodyResponseCallback<Schema$Member>):
      void|AxiosPromise<Schema$Member> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/admin/directory/v1/groups/{groupKey}/members/{memberKey}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['groupKey', 'memberKey'],
      pathParams: ['groupKey', 'memberKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Member>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Member>(parameters);
    }
  }


  /**
   * directory.members.update
   * @desc Update membership of a user in the specified group.
   * @alias directory.members.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.groupKey Email or immutable ID of the group. If ID, it should match with id of group object
   * @param {string} params.memberKey Email or immutable ID of the user. If ID, it should match with id of member object
   * @param {().Member} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions): AxiosPromise<Schema$Member>;
  update(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Member>,
      callback?: BodyResponseCallback<Schema$Member>): void;
  update(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Member>,
      callback?: BodyResponseCallback<Schema$Member>):
      void|AxiosPromise<Schema$Member> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/admin/directory/v1/groups/{groupKey}/members/{memberKey}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['groupKey', 'memberKey'],
      pathParams: ['groupKey', 'memberKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Member>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Member>(parameters);
    }
  }
}

export class Resource$Mobiledevices {
  root: Admin;
  constructor(root: Admin) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * directory.mobiledevices.action
   * @desc Take action on Mobile Device
   * @alias directory.mobiledevices.action
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customerId Immutable ID of the G Suite account
   * @param {string} params.resourceId Immutable ID of Mobile Device
   * @param {().MobileDeviceAction} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  action(params?: any, options?: MethodOptions): AxiosPromise<void>;
  action(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  action(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}/action')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['customerId', 'resourceId'],
      pathParams: ['customerId', 'resourceId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * directory.mobiledevices.delete
   * @desc Delete Mobile Device
   * @alias directory.mobiledevices.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customerId Immutable ID of the G Suite account
   * @param {string} params.resourceId Immutable ID of Mobile Device
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['customerId', 'resourceId'],
      pathParams: ['customerId', 'resourceId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * directory.mobiledevices.get
   * @desc Retrieve Mobile Device
   * @alias directory.mobiledevices.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customerId Immutable ID of the G Suite account
   * @param {string=} params.projection Restrict information returned to a set of selected fields.
   * @param {string} params.resourceId Immutable ID of Mobile Device
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$MobileDevice>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$MobileDevice>,
      callback?: BodyResponseCallback<Schema$MobileDevice>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$MobileDevice>,
      callback?: BodyResponseCallback<Schema$MobileDevice>):
      void|AxiosPromise<Schema$MobileDevice> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['customerId', 'resourceId'],
      pathParams: ['customerId', 'resourceId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$MobileDevice>(parameters, callback);
    } else {
      return createAPIRequest<Schema$MobileDevice>(parameters);
    }
  }


  /**
   * directory.mobiledevices.list
   * @desc Retrieve all Mobile Devices of a customer (paginated)
   * @alias directory.mobiledevices.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customerId Immutable ID of the G Suite account
   * @param {integer=} params.maxResults Maximum number of results to return. Default is 100
   * @param {string=} params.orderBy Column to use for sorting results
   * @param {string=} params.pageToken Token to specify next page in the list
   * @param {string=} params.projection Restrict information returned to a set of selected fields.
   * @param {string=} params.query Search string in the format given at http://support.google.com/a/bin/answer.py?hl=en&answer=1408863#search
   * @param {string=} params.sortOrder Whether to return results in ascending or descending order. Only of use when orderBy is also used
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$MobileDevices>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$MobileDevices>,
      callback?: BodyResponseCallback<Schema$MobileDevices>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$MobileDevices>,
      callback?: BodyResponseCallback<Schema$MobileDevices>):
      void|AxiosPromise<Schema$MobileDevices> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/admin/directory/v1/customer/{customerId}/devices/mobile')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['customerId'],
      pathParams: ['customerId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$MobileDevices>(parameters, callback);
    } else {
      return createAPIRequest<Schema$MobileDevices>(parameters);
    }
  }
}

export class Resource$Notifications {
  root: Admin;
  constructor(root: Admin) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * directory.notifications.delete
   * @desc Deletes a notification
   * @alias directory.notifications.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customer The unique ID for the customer's G Suite account. The customerId is also returned as part of the Users resource.
   * @param {string} params.notificationId The unique ID of the notification.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/admin/directory/v1/customer/{customer}/notifications/{notificationId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['customer', 'notificationId'],
      pathParams: ['customer', 'notificationId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * directory.notifications.get
   * @desc Retrieves a notification.
   * @alias directory.notifications.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customer The unique ID for the customer's G Suite account. The customerId is also returned as part of the Users resource.
   * @param {string} params.notificationId The unique ID of the notification.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Notification>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Notification>,
      callback?: BodyResponseCallback<Schema$Notification>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Notification>,
      callback?: BodyResponseCallback<Schema$Notification>):
      void|AxiosPromise<Schema$Notification> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/admin/directory/v1/customer/{customer}/notifications/{notificationId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['customer', 'notificationId'],
      pathParams: ['customer', 'notificationId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Notification>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Notification>(parameters);
    }
  }


  /**
   * directory.notifications.list
   * @desc Retrieves a list of notifications.
   * @alias directory.notifications.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customer The unique ID for the customer's G Suite account.
   * @param {string=} params.language The ISO 639-1 code of the language notifications are returned in. The default is English (en).
   * @param {integer=} params.maxResults Maximum number of notifications to return per page. The default is 100.
   * @param {string=} params.pageToken The token to specify the page of results to retrieve.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Notifications>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Notifications>,
      callback?: BodyResponseCallback<Schema$Notifications>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Notifications>,
      callback?: BodyResponseCallback<Schema$Notifications>):
      void|AxiosPromise<Schema$Notifications> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/admin/directory/v1/customer/{customer}/notifications')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['customer'],
      pathParams: ['customer'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Notifications>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Notifications>(parameters);
    }
  }


  /**
   * directory.notifications.patch
   * @desc Updates a notification. This method supports patch semantics.
   * @alias directory.notifications.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customer The unique ID for the customer's G Suite account.
   * @param {string} params.notificationId The unique ID of the notification.
   * @param {().Notification} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Notification>;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Notification>,
      callback?: BodyResponseCallback<Schema$Notification>): void;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Notification>,
      callback?: BodyResponseCallback<Schema$Notification>):
      void|AxiosPromise<Schema$Notification> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/admin/directory/v1/customer/{customer}/notifications/{notificationId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['customer', 'notificationId'],
      pathParams: ['customer', 'notificationId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Notification>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Notification>(parameters);
    }
  }


  /**
   * directory.notifications.update
   * @desc Updates a notification.
   * @alias directory.notifications.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customer The unique ID for the customer's G Suite account.
   * @param {string} params.notificationId The unique ID of the notification.
   * @param {().Notification} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Notification>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Notification>,
      callback?: BodyResponseCallback<Schema$Notification>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Notification>,
      callback?: BodyResponseCallback<Schema$Notification>):
      void|AxiosPromise<Schema$Notification> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/admin/directory/v1/customer/{customer}/notifications/{notificationId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['customer', 'notificationId'],
      pathParams: ['customer', 'notificationId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Notification>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Notification>(parameters);
    }
  }
}

export class Resource$Orgunits {
  root: Admin;
  constructor(root: Admin) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * directory.orgunits.delete
   * @desc Remove organizational unit
   * @alias directory.orgunits.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customerId Immutable ID of the G Suite account
   * @param {string} params.orgUnitPath Full path of the organizational unit or its ID
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/admin/directory/v1/customer/{customerId}/orgunits{/orgUnitPath*}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['customerId', 'orgUnitPath'],
      pathParams: ['customerId', 'orgUnitPath'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * directory.orgunits.get
   * @desc Retrieve organizational unit
   * @alias directory.orgunits.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customerId Immutable ID of the G Suite account
   * @param {string} params.orgUnitPath Full path of the organizational unit or its ID
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$OrgUnit>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$OrgUnit>,
      callback?: BodyResponseCallback<Schema$OrgUnit>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$OrgUnit>,
      callback?: BodyResponseCallback<Schema$OrgUnit>):
      void|AxiosPromise<Schema$OrgUnit> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/admin/directory/v1/customer/{customerId}/orgunits{/orgUnitPath*}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['customerId', 'orgUnitPath'],
      pathParams: ['customerId', 'orgUnitPath'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$OrgUnit>(parameters, callback);
    } else {
      return createAPIRequest<Schema$OrgUnit>(parameters);
    }
  }


  /**
   * directory.orgunits.insert
   * @desc Add organizational unit
   * @alias directory.orgunits.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customerId Immutable ID of the G Suite account
   * @param {().OrgUnit} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions): AxiosPromise<Schema$OrgUnit>;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$OrgUnit>,
      callback?: BodyResponseCallback<Schema$OrgUnit>): void;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$OrgUnit>,
      callback?: BodyResponseCallback<Schema$OrgUnit>):
      void|AxiosPromise<Schema$OrgUnit> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl + '/admin/directory/v1/customer/{customerId}/orgunits')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['customerId'],
      pathParams: ['customerId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$OrgUnit>(parameters, callback);
    } else {
      return createAPIRequest<Schema$OrgUnit>(parameters);
    }
  }


  /**
   * directory.orgunits.list
   * @desc Retrieve all organizational units
   * @alias directory.orgunits.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customerId Immutable ID of the G Suite account
   * @param {string=} params.orgUnitPath the URL-encoded organizational unit's path or its ID
   * @param {string=} params.type Whether to return all sub-organizations or just immediate children
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions): AxiosPromise<Schema$OrgUnits>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$OrgUnits>,
      callback?: BodyResponseCallback<Schema$OrgUnits>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$OrgUnits>,
      callback?: BodyResponseCallback<Schema$OrgUnits>):
      void|AxiosPromise<Schema$OrgUnits> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl + '/admin/directory/v1/customer/{customerId}/orgunits')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['customerId'],
      pathParams: ['customerId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$OrgUnits>(parameters, callback);
    } else {
      return createAPIRequest<Schema$OrgUnits>(parameters);
    }
  }


  /**
   * directory.orgunits.patch
   * @desc Update organizational unit. This method supports patch semantics.
   * @alias directory.orgunits.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customerId Immutable ID of the G Suite account
   * @param {string} params.orgUnitPath Full path of the organizational unit or its ID
   * @param {().OrgUnit} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$OrgUnit>;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$OrgUnit>,
      callback?: BodyResponseCallback<Schema$OrgUnit>): void;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$OrgUnit>,
      callback?: BodyResponseCallback<Schema$OrgUnit>):
      void|AxiosPromise<Schema$OrgUnit> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/admin/directory/v1/customer/{customerId}/orgunits{/orgUnitPath*}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['customerId', 'orgUnitPath'],
      pathParams: ['customerId', 'orgUnitPath'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$OrgUnit>(parameters, callback);
    } else {
      return createAPIRequest<Schema$OrgUnit>(parameters);
    }
  }


  /**
   * directory.orgunits.update
   * @desc Update organizational unit
   * @alias directory.orgunits.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customerId Immutable ID of the G Suite account
   * @param {string} params.orgUnitPath Full path of the organizational unit or its ID
   * @param {().OrgUnit} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions): AxiosPromise<Schema$OrgUnit>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$OrgUnit>,
      callback?: BodyResponseCallback<Schema$OrgUnit>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$OrgUnit>,
      callback?: BodyResponseCallback<Schema$OrgUnit>):
      void|AxiosPromise<Schema$OrgUnit> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/admin/directory/v1/customer/{customerId}/orgunits{/orgUnitPath*}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['customerId', 'orgUnitPath'],
      pathParams: ['customerId', 'orgUnitPath'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$OrgUnit>(parameters, callback);
    } else {
      return createAPIRequest<Schema$OrgUnit>(parameters);
    }
  }
}

export class Resource$Privileges {
  root: Admin;
  constructor(root: Admin) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * directory.privileges.list
   * @desc Retrieves a paginated list of all privileges for a customer.
   * @alias directory.privileges.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customer Immutable ID of the G Suite account.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions): AxiosPromise<Schema$Privileges>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Privileges>,
      callback?: BodyResponseCallback<Schema$Privileges>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Privileges>,
      callback?: BodyResponseCallback<Schema$Privileges>):
      void|AxiosPromise<Schema$Privileges> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/admin/directory/v1/customer/{customer}/roles/ALL/privileges')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['customer'],
      pathParams: ['customer'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Privileges>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Privileges>(parameters);
    }
  }
}

export class Resource$Resolvedappaccesssettings {
  root: Admin;
  constructor(root: Admin) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * directory.resolvedAppAccessSettings.GetSettings
   * @desc Retrieves resolved app access settings of the logged in user.
   * @alias directory.resolvedAppAccessSettings.GetSettings
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  GetSettings(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$AppAccessCollections>;
  GetSettings(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$AppAccessCollections>,
      callback?: BodyResponseCallback<Schema$AppAccessCollections>): void;
  GetSettings(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$AppAccessCollections>,
      callback?: BodyResponseCallback<Schema$AppAccessCollections>):
      void|AxiosPromise<Schema$AppAccessCollections> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/resolvedappaccesssettings')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$AppAccessCollections>(parameters, callback);
    } else {
      return createAPIRequest<Schema$AppAccessCollections>(parameters);
    }
  }


  /**
   * directory.resolvedAppAccessSettings.ListTrustedApps
   * @desc Retrieves the list of apps trusted by the admin of the logged in
   * user.
   * @alias directory.resolvedAppAccessSettings.ListTrustedApps
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  ListTrustedApps(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$TrustedApps>;
  ListTrustedApps(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$TrustedApps>,
      callback?: BodyResponseCallback<Schema$TrustedApps>): void;
  ListTrustedApps(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$TrustedApps>,
      callback?: BodyResponseCallback<Schema$TrustedApps>):
      void|AxiosPromise<Schema$TrustedApps> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/trustedapps')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$TrustedApps>(parameters, callback);
    } else {
      return createAPIRequest<Schema$TrustedApps>(parameters);
    }
  }
}

export class Resource$Resources {
  root: Admin;
  buildings: Resource$Resources$Buildings;
  calendars: Resource$Resources$Calendars;
  features: Resource$Resources$Features;
  constructor(root: Admin) {
    this.root = root;
    this.getRoot.bind(this);
    this.buildings = new Resource$Resources$Buildings(root);
    this.calendars = new Resource$Resources$Calendars(root);
    this.features = new Resource$Resources$Features(root);
  }

  getRoot() {
    return this.root;
  }
}
export class Resource$Resources$Buildings {
  root: Admin;
  constructor(root: Admin) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * directory.resources.buildings.delete
   * @desc Deletes a building.
   * @alias directory.resources.buildings.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.buildingId The ID of the building to delete.
   * @param {string} params.customer The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['customer', 'buildingId'],
      pathParams: ['buildingId', 'customer'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * directory.resources.buildings.get
   * @desc Retrieves a building.
   * @alias directory.resources.buildings.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.buildingId The unique ID of the building to retrieve.
   * @param {string} params.customer The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Building>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Building>,
      callback?: BodyResponseCallback<Schema$Building>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Building>,
      callback?: BodyResponseCallback<Schema$Building>):
      void|AxiosPromise<Schema$Building> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['customer', 'buildingId'],
      pathParams: ['buildingId', 'customer'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Building>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Building>(parameters);
    }
  }


  /**
   * directory.resources.buildings.insert
   * @desc Inserts a building.
   * @alias directory.resources.buildings.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customer The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
   * @param {().Building} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions): AxiosPromise<Schema$Building>;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Building>,
      callback?: BodyResponseCallback<Schema$Building>): void;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Building>,
      callback?: BodyResponseCallback<Schema$Building>):
      void|AxiosPromise<Schema$Building> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/admin/directory/v1/customer/{customer}/resources/buildings')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['customer'],
      pathParams: ['customer'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Building>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Building>(parameters);
    }
  }


  /**
   * directory.resources.buildings.list
   * @desc Retrieves a list of buildings for an account.
   * @alias directory.resources.buildings.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customer The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
   * @param {integer=} params.maxResults Maximum number of results to return.
   * @param {string=} params.pageToken Token to specify the next page in the list.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions): AxiosPromise<Schema$Buildings>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Buildings>,
      callback?: BodyResponseCallback<Schema$Buildings>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Buildings>,
      callback?: BodyResponseCallback<Schema$Buildings>):
      void|AxiosPromise<Schema$Buildings> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/admin/directory/v1/customer/{customer}/resources/buildings')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['customer'],
      pathParams: ['customer'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Buildings>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Buildings>(parameters);
    }
  }


  /**
   * directory.resources.buildings.patch
   * @desc Updates a building. This method supports patch semantics.
   * @alias directory.resources.buildings.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.buildingId The ID of the building to update.
   * @param {string} params.customer The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
   * @param {().Building} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$Building>;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Building>,
      callback?: BodyResponseCallback<Schema$Building>): void;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Building>,
      callback?: BodyResponseCallback<Schema$Building>):
      void|AxiosPromise<Schema$Building> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['customer', 'buildingId'],
      pathParams: ['buildingId', 'customer'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Building>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Building>(parameters);
    }
  }


  /**
   * directory.resources.buildings.update
   * @desc Updates a building.
   * @alias directory.resources.buildings.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.buildingId The ID of the building to update.
   * @param {string} params.customer The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
   * @param {().Building} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions): AxiosPromise<Schema$Building>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Building>,
      callback?: BodyResponseCallback<Schema$Building>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Building>,
      callback?: BodyResponseCallback<Schema$Building>):
      void|AxiosPromise<Schema$Building> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['customer', 'buildingId'],
      pathParams: ['buildingId', 'customer'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Building>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Building>(parameters);
    }
  }
}

export class Resource$Resources$Calendars {
  root: Admin;
  constructor(root: Admin) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * directory.resources.calendars.delete
   * @desc Deletes a calendar resource.
   * @alias directory.resources.calendars.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.calendarResourceId The unique ID of the calendar resource to delete.
   * @param {string} params.customer The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['customer', 'calendarResourceId'],
      pathParams: ['calendarResourceId', 'customer'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * directory.resources.calendars.get
   * @desc Retrieves a calendar resource.
   * @alias directory.resources.calendars.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.calendarResourceId The unique ID of the calendar resource to retrieve.
   * @param {string} params.customer The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any,
      options?: MethodOptions): AxiosPromise<Schema$CalendarResource>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CalendarResource>,
      callback?: BodyResponseCallback<Schema$CalendarResource>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CalendarResource>,
      callback?: BodyResponseCallback<Schema$CalendarResource>):
      void|AxiosPromise<Schema$CalendarResource> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['customer', 'calendarResourceId'],
      pathParams: ['calendarResourceId', 'customer'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$CalendarResource>(parameters, callback);
    } else {
      return createAPIRequest<Schema$CalendarResource>(parameters);
    }
  }


  /**
   * directory.resources.calendars.insert
   * @desc Inserts a calendar resource.
   * @alias directory.resources.calendars.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customer The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
   * @param {().CalendarResource} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$CalendarResource>;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CalendarResource>,
      callback?: BodyResponseCallback<Schema$CalendarResource>): void;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CalendarResource>,
      callback?: BodyResponseCallback<Schema$CalendarResource>):
      void|AxiosPromise<Schema$CalendarResource> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/admin/directory/v1/customer/{customer}/resources/calendars')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['customer'],
      pathParams: ['customer'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$CalendarResource>(parameters, callback);
    } else {
      return createAPIRequest<Schema$CalendarResource>(parameters);
    }
  }


  /**
   * directory.resources.calendars.list
   * @desc Retrieves a list of calendar resources for an account.
   * @alias directory.resources.calendars.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customer The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
   * @param {integer=} params.maxResults Maximum number of results to return.
   * @param {string=} params.orderBy Field(s) to sort results by in either ascending or descending order. Supported fields include resourceId, resourceName, capacity, buildingId, and floorName. If no order is specified, defaults to ascending. Should be of the form "field [asc|desc], field [asc|desc], ...". For example buildingId, capacity desc would return results sorted first by buildingId in ascending order then by capacity in descending order.
   * @param {string=} params.pageToken Token to specify the next page in the list.
   * @param {string=} params.query String query used to filter results. Should be of the form "field operator value" where field can be any of supported fields and operators can be any of supported operations. Operators include '=' for exact match and ':' for prefix match or HAS match where applicable. For prefix match, the value should always be followed by a *. Supported fields include generatedResourceName, name, buildingId, featureInstances.feature.name. For example buildingId=US-NYC-9TH AND featureInstances.feature.name:Phone.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$CalendarResources>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CalendarResources>,
      callback?: BodyResponseCallback<Schema$CalendarResources>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CalendarResources>,
      callback?: BodyResponseCallback<Schema$CalendarResources>):
      void|AxiosPromise<Schema$CalendarResources> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/admin/directory/v1/customer/{customer}/resources/calendars')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['customer'],
      pathParams: ['customer'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$CalendarResources>(parameters, callback);
    } else {
      return createAPIRequest<Schema$CalendarResources>(parameters);
    }
  }


  /**
   * directory.resources.calendars.patch
   * @desc Updates a calendar resource.  This method supports patch semantics,
   * meaning you only need to include the fields you wish to update. Fields that
   * are not present in the request will be preserved. This method supports
   * patch semantics.
   * @alias directory.resources.calendars.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.calendarResourceId The unique ID of the calendar resource to update.
   * @param {string} params.customer The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
   * @param {().CalendarResource} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$CalendarResource>;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CalendarResource>,
      callback?: BodyResponseCallback<Schema$CalendarResource>): void;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CalendarResource>,
      callback?: BodyResponseCallback<Schema$CalendarResource>):
      void|AxiosPromise<Schema$CalendarResource> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['customer', 'calendarResourceId'],
      pathParams: ['calendarResourceId', 'customer'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$CalendarResource>(parameters, callback);
    } else {
      return createAPIRequest<Schema$CalendarResource>(parameters);
    }
  }


  /**
   * directory.resources.calendars.update
   * @desc Updates a calendar resource.  This method supports patch semantics,
   * meaning you only need to include the fields you wish to update. Fields that
   * are not present in the request will be preserved.
   * @alias directory.resources.calendars.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.calendarResourceId The unique ID of the calendar resource to update.
   * @param {string} params.customer The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
   * @param {().CalendarResource} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$CalendarResource>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CalendarResource>,
      callback?: BodyResponseCallback<Schema$CalendarResource>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CalendarResource>,
      callback?: BodyResponseCallback<Schema$CalendarResource>):
      void|AxiosPromise<Schema$CalendarResource> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['customer', 'calendarResourceId'],
      pathParams: ['calendarResourceId', 'customer'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$CalendarResource>(parameters, callback);
    } else {
      return createAPIRequest<Schema$CalendarResource>(parameters);
    }
  }
}

export class Resource$Resources$Features {
  root: Admin;
  constructor(root: Admin) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * directory.resources.features.delete
   * @desc Deletes a feature.
   * @alias directory.resources.features.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customer The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
   * @param {string} params.featureKey The unique ID of the feature to delete.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/admin/directory/v1/customer/{customer}/resources/features/{featureKey}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['customer', 'featureKey'],
      pathParams: ['customer', 'featureKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * directory.resources.features.get
   * @desc Retrieves a feature.
   * @alias directory.resources.features.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customer The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
   * @param {string} params.featureKey The unique ID of the feature to retrieve.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Feature>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Feature>,
      callback?: BodyResponseCallback<Schema$Feature>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Feature>,
      callback?: BodyResponseCallback<Schema$Feature>):
      void|AxiosPromise<Schema$Feature> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/admin/directory/v1/customer/{customer}/resources/features/{featureKey}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['customer', 'featureKey'],
      pathParams: ['customer', 'featureKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Feature>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Feature>(parameters);
    }
  }


  /**
   * directory.resources.features.insert
   * @desc Inserts a feature.
   * @alias directory.resources.features.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customer The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
   * @param {().Feature} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions): AxiosPromise<Schema$Feature>;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Feature>,
      callback?: BodyResponseCallback<Schema$Feature>): void;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Feature>,
      callback?: BodyResponseCallback<Schema$Feature>):
      void|AxiosPromise<Schema$Feature> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/admin/directory/v1/customer/{customer}/resources/features')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['customer'],
      pathParams: ['customer'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Feature>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Feature>(parameters);
    }
  }


  /**
   * directory.resources.features.list
   * @desc Retrieves a list of features for an account.
   * @alias directory.resources.features.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customer The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
   * @param {integer=} params.maxResults Maximum number of results to return.
   * @param {string=} params.pageToken Token to specify the next page in the list.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions): AxiosPromise<Schema$Features>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Features>,
      callback?: BodyResponseCallback<Schema$Features>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Features>,
      callback?: BodyResponseCallback<Schema$Features>):
      void|AxiosPromise<Schema$Features> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/admin/directory/v1/customer/{customer}/resources/features')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['customer'],
      pathParams: ['customer'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Features>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Features>(parameters);
    }
  }


  /**
   * directory.resources.features.patch
   * @desc Updates a feature. This method supports patch semantics.
   * @alias directory.resources.features.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customer The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
   * @param {string} params.featureKey The unique ID of the feature to update.
   * @param {().Feature} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$Feature>;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Feature>,
      callback?: BodyResponseCallback<Schema$Feature>): void;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Feature>,
      callback?: BodyResponseCallback<Schema$Feature>):
      void|AxiosPromise<Schema$Feature> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/admin/directory/v1/customer/{customer}/resources/features/{featureKey}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['customer', 'featureKey'],
      pathParams: ['customer', 'featureKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Feature>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Feature>(parameters);
    }
  }


  /**
   * directory.resources.features.rename
   * @desc Renames a feature.
   * @alias directory.resources.features.rename
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customer The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
   * @param {string} params.oldName The unique ID of the feature to rename.
   * @param {().FeatureRename} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  rename(params?: any, options?: MethodOptions): AxiosPromise<void>;
  rename(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  rename(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/admin/directory/v1/customer/{customer}/resources/features/{oldName}/rename')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['customer', 'oldName'],
      pathParams: ['customer', 'oldName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * directory.resources.features.update
   * @desc Updates a feature.
   * @alias directory.resources.features.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customer The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
   * @param {string} params.featureKey The unique ID of the feature to update.
   * @param {().Feature} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions): AxiosPromise<Schema$Feature>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Feature>,
      callback?: BodyResponseCallback<Schema$Feature>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Feature>,
      callback?: BodyResponseCallback<Schema$Feature>):
      void|AxiosPromise<Schema$Feature> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/admin/directory/v1/customer/{customer}/resources/features/{featureKey}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['customer', 'featureKey'],
      pathParams: ['customer', 'featureKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Feature>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Feature>(parameters);
    }
  }
}


export class Resource$Roleassignments {
  root: Admin;
  constructor(root: Admin) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * directory.roleAssignments.delete
   * @desc Deletes a role assignment.
   * @alias directory.roleAssignments.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customer Immutable ID of the G Suite account.
   * @param {string} params.roleAssignmentId Immutable ID of the role assignment.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/admin/directory/v1/customer/{customer}/roleassignments/{roleAssignmentId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['customer', 'roleAssignmentId'],
      pathParams: ['customer', 'roleAssignmentId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * directory.roleAssignments.get
   * @desc Retrieve a role assignment.
   * @alias directory.roleAssignments.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customer Immutable ID of the G Suite account.
   * @param {string} params.roleAssignmentId Immutable ID of the role assignment.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any,
      options?: MethodOptions): AxiosPromise<Schema$RoleAssignment>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$RoleAssignment>,
      callback?: BodyResponseCallback<Schema$RoleAssignment>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$RoleAssignment>,
      callback?: BodyResponseCallback<Schema$RoleAssignment>):
      void|AxiosPromise<Schema$RoleAssignment> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/admin/directory/v1/customer/{customer}/roleassignments/{roleAssignmentId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['customer', 'roleAssignmentId'],
      pathParams: ['customer', 'roleAssignmentId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$RoleAssignment>(parameters, callback);
    } else {
      return createAPIRequest<Schema$RoleAssignment>(parameters);
    }
  }


  /**
   * directory.roleAssignments.insert
   * @desc Creates a role assignment.
   * @alias directory.roleAssignments.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customer Immutable ID of the G Suite account.
   * @param {().RoleAssignment} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$RoleAssignment>;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$RoleAssignment>,
      callback?: BodyResponseCallback<Schema$RoleAssignment>): void;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$RoleAssignment>,
      callback?: BodyResponseCallback<Schema$RoleAssignment>):
      void|AxiosPromise<Schema$RoleAssignment> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/admin/directory/v1/customer/{customer}/roleassignments')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['customer'],
      pathParams: ['customer'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$RoleAssignment>(parameters, callback);
    } else {
      return createAPIRequest<Schema$RoleAssignment>(parameters);
    }
  }


  /**
   * directory.roleAssignments.list
   * @desc Retrieves a paginated list of all roleAssignments.
   * @alias directory.roleAssignments.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customer Immutable ID of the G Suite account.
   * @param {integer=} params.maxResults Maximum number of results to return.
   * @param {string=} params.pageToken Token to specify the next page in the list.
   * @param {string=} params.roleId Immutable ID of a role. If included in the request, returns only role assignments containing this role ID.
   * @param {string=} params.userKey The user's primary email address, alias email address, or unique user ID. If included in the request, returns role assignments only for this user.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$RoleAssignments>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$RoleAssignments>,
      callback?: BodyResponseCallback<Schema$RoleAssignments>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$RoleAssignments>,
      callback?: BodyResponseCallback<Schema$RoleAssignments>):
      void|AxiosPromise<Schema$RoleAssignments> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/admin/directory/v1/customer/{customer}/roleassignments')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['customer'],
      pathParams: ['customer'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$RoleAssignments>(parameters, callback);
    } else {
      return createAPIRequest<Schema$RoleAssignments>(parameters);
    }
  }
}

export class Resource$Roles {
  root: Admin;
  constructor(root: Admin) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * directory.roles.delete
   * @desc Deletes a role.
   * @alias directory.roles.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customer Immutable ID of the G Suite account.
   * @param {string} params.roleId Immutable ID of the role.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/admin/directory/v1/customer/{customer}/roles/{roleId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['customer', 'roleId'],
      pathParams: ['customer', 'roleId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * directory.roles.get
   * @desc Retrieves a role.
   * @alias directory.roles.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customer Immutable ID of the G Suite account.
   * @param {string} params.roleId Immutable ID of the role.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Role>;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Role>,
      callback?: BodyResponseCallback<Schema$Role>): void;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Role>,
      callback?: BodyResponseCallback<Schema$Role>):
      void|AxiosPromise<Schema$Role> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/admin/directory/v1/customer/{customer}/roles/{roleId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['customer', 'roleId'],
      pathParams: ['customer', 'roleId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Role>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Role>(parameters);
    }
  }


  /**
   * directory.roles.insert
   * @desc Creates a role.
   * @alias directory.roles.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customer Immutable ID of the G Suite account.
   * @param {().Role} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions): AxiosPromise<Schema$Role>;
  insert(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Role>,
      callback?: BodyResponseCallback<Schema$Role>): void;
  insert(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Role>,
      callback?: BodyResponseCallback<Schema$Role>):
      void|AxiosPromise<Schema$Role> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/customer/{customer}/roles')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['customer'],
      pathParams: ['customer'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Role>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Role>(parameters);
    }
  }


  /**
   * directory.roles.list
   * @desc Retrieves a paginated list of all the roles in a domain.
   * @alias directory.roles.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customer Immutable ID of the G Suite account.
   * @param {integer=} params.maxResults Maximum number of results to return.
   * @param {string=} params.pageToken Token to specify the next page in the list.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions): AxiosPromise<Schema$Roles>;
  list(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Roles>,
      callback?: BodyResponseCallback<Schema$Roles>): void;
  list(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Roles>,
      callback?: BodyResponseCallback<Schema$Roles>):
      void|AxiosPromise<Schema$Roles> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/customer/{customer}/roles')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['customer'],
      pathParams: ['customer'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Roles>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Roles>(parameters);
    }
  }


  /**
   * directory.roles.patch
   * @desc Updates a role. This method supports patch semantics.
   * @alias directory.roles.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customer Immutable ID of the G Suite account.
   * @param {string} params.roleId Immutable ID of the role.
   * @param {().Role} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$Role>;
  patch(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Role>,
      callback?: BodyResponseCallback<Schema$Role>): void;
  patch(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Role>,
      callback?: BodyResponseCallback<Schema$Role>):
      void|AxiosPromise<Schema$Role> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/admin/directory/v1/customer/{customer}/roles/{roleId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['customer', 'roleId'],
      pathParams: ['customer', 'roleId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Role>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Role>(parameters);
    }
  }


  /**
   * directory.roles.update
   * @desc Updates a role.
   * @alias directory.roles.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customer Immutable ID of the G Suite account.
   * @param {string} params.roleId Immutable ID of the role.
   * @param {().Role} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions): AxiosPromise<Schema$Role>;
  update(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Role>,
      callback?: BodyResponseCallback<Schema$Role>): void;
  update(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Role>,
      callback?: BodyResponseCallback<Schema$Role>):
      void|AxiosPromise<Schema$Role> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/admin/directory/v1/customer/{customer}/roles/{roleId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['customer', 'roleId'],
      pathParams: ['customer', 'roleId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Role>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Role>(parameters);
    }
  }
}

export class Resource$Schemas {
  root: Admin;
  constructor(root: Admin) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * directory.schemas.delete
   * @desc Delete schema
   * @alias directory.schemas.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customerId Immutable ID of the G Suite account
   * @param {string} params.schemaKey Name or immutable ID of the schema
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/admin/directory/v1/customer/{customerId}/schemas/{schemaKey}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['customerId', 'schemaKey'],
      pathParams: ['customerId', 'schemaKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * directory.schemas.get
   * @desc Retrieve schema
   * @alias directory.schemas.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customerId Immutable ID of the G Suite account
   * @param {string} params.schemaKey Name or immutable ID of the schema
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Schema>;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Schema>,
      callback?: BodyResponseCallback<Schema$Schema>): void;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Schema>,
      callback?: BodyResponseCallback<Schema$Schema>):
      void|AxiosPromise<Schema$Schema> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/admin/directory/v1/customer/{customerId}/schemas/{schemaKey}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['customerId', 'schemaKey'],
      pathParams: ['customerId', 'schemaKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Schema>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Schema>(parameters);
    }
  }


  /**
   * directory.schemas.insert
   * @desc Create schema.
   * @alias directory.schemas.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customerId Immutable ID of the G Suite account
   * @param {().Schema} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions): AxiosPromise<Schema$Schema>;
  insert(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Schema>,
      callback?: BodyResponseCallback<Schema$Schema>): void;
  insert(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Schema>,
      callback?: BodyResponseCallback<Schema$Schema>):
      void|AxiosPromise<Schema$Schema> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/customer/{customerId}/schemas')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['customerId'],
      pathParams: ['customerId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Schema>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Schema>(parameters);
    }
  }


  /**
   * directory.schemas.list
   * @desc Retrieve all schemas for a customer
   * @alias directory.schemas.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customerId Immutable ID of the G Suite account
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions): AxiosPromise<Schema$Schemas>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Schemas>,
      callback?: BodyResponseCallback<Schema$Schemas>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Schemas>,
      callback?: BodyResponseCallback<Schema$Schemas>):
      void|AxiosPromise<Schema$Schemas> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/customer/{customerId}/schemas')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['customerId'],
      pathParams: ['customerId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Schemas>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Schemas>(parameters);
    }
  }


  /**
   * directory.schemas.patch
   * @desc Update schema. This method supports patch semantics.
   * @alias directory.schemas.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customerId Immutable ID of the G Suite account
   * @param {string} params.schemaKey Name or immutable ID of the schema.
   * @param {().Schema} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$Schema>;
  patch(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Schema>,
      callback?: BodyResponseCallback<Schema$Schema>): void;
  patch(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Schema>,
      callback?: BodyResponseCallback<Schema$Schema>):
      void|AxiosPromise<Schema$Schema> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/admin/directory/v1/customer/{customerId}/schemas/{schemaKey}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['customerId', 'schemaKey'],
      pathParams: ['customerId', 'schemaKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Schema>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Schema>(parameters);
    }
  }


  /**
   * directory.schemas.update
   * @desc Update schema
   * @alias directory.schemas.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customerId Immutable ID of the G Suite account
   * @param {string} params.schemaKey Name or immutable ID of the schema.
   * @param {().Schema} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions): AxiosPromise<Schema$Schema>;
  update(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Schema>,
      callback?: BodyResponseCallback<Schema$Schema>): void;
  update(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Schema>,
      callback?: BodyResponseCallback<Schema$Schema>):
      void|AxiosPromise<Schema$Schema> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/admin/directory/v1/customer/{customerId}/schemas/{schemaKey}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['customerId', 'schemaKey'],
      pathParams: ['customerId', 'schemaKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Schema>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Schema>(parameters);
    }
  }
}

export class Resource$Tokens {
  root: Admin;
  constructor(root: Admin) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * directory.tokens.delete
   * @desc Delete all access tokens issued by a user for an application.
   * @alias directory.tokens.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.clientId The Client ID of the application the token is issued to.
   * @param {string} params.userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/admin/directory/v1/users/{userKey}/tokens/{clientId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['userKey', 'clientId'],
      pathParams: ['clientId', 'userKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * directory.tokens.get
   * @desc Get information about an access token issued by a user.
   * @alias directory.tokens.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.clientId The Client ID of the application the token is issued to.
   * @param {string} params.userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Token>;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Token>,
      callback?: BodyResponseCallback<Schema$Token>): void;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Token>,
      callback?: BodyResponseCallback<Schema$Token>):
      void|AxiosPromise<Schema$Token> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/admin/directory/v1/users/{userKey}/tokens/{clientId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['userKey', 'clientId'],
      pathParams: ['clientId', 'userKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Token>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Token>(parameters);
    }
  }


  /**
   * directory.tokens.list
   * @desc Returns the set of tokens specified user has issued to 3rd party
   * applications.
   * @alias directory.tokens.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions): AxiosPromise<Schema$Tokens>;
  list(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Tokens>,
      callback?: BodyResponseCallback<Schema$Tokens>): void;
  list(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Tokens>,
      callback?: BodyResponseCallback<Schema$Tokens>):
      void|AxiosPromise<Schema$Tokens> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/users/{userKey}/tokens')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['userKey'],
      pathParams: ['userKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Tokens>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Tokens>(parameters);
    }
  }
}

export class Resource$Users {
  root: Admin;
  aliases: Resource$Users$Aliases;
  photos: Resource$Users$Photos;
  constructor(root: Admin) {
    this.root = root;
    this.getRoot.bind(this);
    this.aliases = new Resource$Users$Aliases(root);
    this.photos = new Resource$Users$Photos(root);
  }

  getRoot() {
    return this.root;
  }


  /**
   * directory.users.delete
   * @desc Delete user
   * @alias directory.users.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.userKey Email or immutable ID of the user
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/users/{userKey}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['userKey'],
      pathParams: ['userKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * directory.users.get
   * @desc retrieve user
   * @alias directory.users.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.customFieldMask Comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when projection=custom.
   * @param {string=} params.projection What subset of fields to fetch for this user.
   * @param {string} params.userKey Email or immutable ID of the user
   * @param {string=} params.viewType Whether to fetch the ADMIN_VIEW or DOMAIN_PUBLIC view of the user.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$User>;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$User>,
      callback?: BodyResponseCallback<Schema$User>): void;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$User>,
      callback?: BodyResponseCallback<Schema$User>):
      void|AxiosPromise<Schema$User> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/users/{userKey}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['userKey'],
      pathParams: ['userKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$User>(parameters, callback);
    } else {
      return createAPIRequest<Schema$User>(parameters);
    }
  }


  /**
   * directory.users.insert
   * @desc create user.
   * @alias directory.users.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().User} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions): AxiosPromise<Schema$User>;
  insert(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$User>,
      callback?: BodyResponseCallback<Schema$User>): void;
  insert(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$User>,
      callback?: BodyResponseCallback<Schema$User>):
      void|AxiosPromise<Schema$User> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/users')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$User>(parameters, callback);
    } else {
      return createAPIRequest<Schema$User>(parameters);
    }
  }


  /**
   * directory.users.list
   * @desc Retrieve either deleted users or all users in a domain (paginated)
   * @alias directory.users.list
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {string=} params.customer Immutable ID of the G Suite account. In case of multi-domain, to fetch all users for a customer, fill this field instead of domain.
   * @param {string=} params.customFieldMask Comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when projection=custom.
   * @param {string=} params.domain Name of the domain. Fill this field to get users from only this domain. To return all users in a multi-domain fill customer field instead.
   * @param {string=} params.event Event on which subscription is intended (if subscribing)
   * @param {integer=} params.maxResults Maximum number of results to return. Default is 100. Max allowed is 500
   * @param {string=} params.orderBy Column to use for sorting results
   * @param {string=} params.pageToken Token to specify next page in the list
   * @param {string=} params.projection What subset of fields to fetch for this user.
   * @param {string=} params.query Query string search. Should be of the form "". Complete documentation is at https://developers.google.com/admin-sdk/directory/v1/guides/search-users
   * @param {string=} params.showDeleted If set to true retrieves the list of deleted users. Default is false
   * @param {string=} params.sortOrder Whether to return results in ascending or descending order.
   * @param {string=} params.viewType Whether to fetch the ADMIN_VIEW or DOMAIN_PUBLIC view of the user.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions): AxiosPromise<Schema$Users>;
  list(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Users>,
      callback?: BodyResponseCallback<Schema$Users>): void;
  list(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Users>,
      callback?: BodyResponseCallback<Schema$Users>):
      void|AxiosPromise<Schema$Users> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/users')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Users>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Users>(parameters);
    }
  }


  /**
   * directory.users.makeAdmin
   * @desc change admin status of a user
   * @alias directory.users.makeAdmin
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.userKey Email or immutable ID of the user as admin
   * @param {().UserMakeAdmin} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  makeAdmin(params?: any, options?: MethodOptions): AxiosPromise<void>;
  makeAdmin(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  makeAdmin(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/users/{userKey}/makeAdmin')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['userKey'],
      pathParams: ['userKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * directory.users.patch
   * @desc update user. This method supports patch semantics.
   * @alias directory.users.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.userKey Email or immutable ID of the user. If ID, it should match with id of user object
   * @param {().User} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$User>;
  patch(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$User>,
      callback?: BodyResponseCallback<Schema$User>): void;
  patch(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$User>,
      callback?: BodyResponseCallback<Schema$User>):
      void|AxiosPromise<Schema$User> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/users/{userKey}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['userKey'],
      pathParams: ['userKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$User>(parameters, callback);
    } else {
      return createAPIRequest<Schema$User>(parameters);
    }
  }


  /**
   * directory.users.undelete
   * @desc Undelete a deleted user
   * @alias directory.users.undelete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.userKey The immutable id of the user
   * @param {().UserUndelete} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  undelete(params?: any, options?: MethodOptions): AxiosPromise<void>;
  undelete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  undelete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/users/{userKey}/undelete')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['userKey'],
      pathParams: ['userKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * directory.users.update
   * @desc update user
   * @alias directory.users.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.userKey Email or immutable ID of the user. If ID, it should match with id of user object
   * @param {().User} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions): AxiosPromise<Schema$User>;
  update(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$User>,
      callback?: BodyResponseCallback<Schema$User>): void;
  update(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$User>,
      callback?: BodyResponseCallback<Schema$User>):
      void|AxiosPromise<Schema$User> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/users/{userKey}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['userKey'],
      pathParams: ['userKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$User>(parameters, callback);
    } else {
      return createAPIRequest<Schema$User>(parameters);
    }
  }


  /**
   * directory.users.watch
   * @desc Watch for changes in users list
   * @alias directory.users.watch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.customer Immutable ID of the G Suite account. In case of multi-domain, to fetch all users for a customer, fill this field instead of domain.
   * @param {string=} params.customFieldMask Comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when projection=custom.
   * @param {string=} params.domain Name of the domain. Fill this field to get users from only this domain. To return all users in a multi-domain fill customer field instead.
   * @param {string=} params.event Event on which subscription is intended (if subscribing)
   * @param {integer=} params.maxResults Maximum number of results to return. Default is 100. Max allowed is 500
   * @param {string=} params.orderBy Column to use for sorting results
   * @param {string=} params.pageToken Token to specify next page in the list
   * @param {string=} params.projection What subset of fields to fetch for this user.
   * @param {string=} params.query Query string search. Should be of the form "". Complete documentation is at https://developers.google.com/admin-sdk/directory/v1/guides/search-users
   * @param {string=} params.showDeleted If set to true retrieves the list of deleted users. Default is false
   * @param {string=} params.sortOrder Whether to return results in ascending or descending order.
   * @param {string=} params.viewType Whether to fetch the ADMIN_VIEW or DOMAIN_PUBLIC view of the user.
   * @param {().Channel} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  watch(params?: any, options?: MethodOptions): AxiosPromise<Schema$Channel>;
  watch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Channel>,
      callback?: BodyResponseCallback<Schema$Channel>): void;
  watch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Channel>,
      callback?: BodyResponseCallback<Schema$Channel>):
      void|AxiosPromise<Schema$Channel> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/users/watch')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Channel>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Channel>(parameters);
    }
  }
}
export class Resource$Users$Aliases {
  root: Admin;
  constructor(root: Admin) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * directory.users.aliases.delete
   * @desc Remove a alias for the user
   * @alias directory.users.aliases.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.alias The alias to be removed
   * @param {string} params.userKey Email or immutable ID of the user
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/admin/directory/v1/users/{userKey}/aliases/{alias}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['userKey', 'alias'],
      pathParams: ['alias', 'userKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * directory.users.aliases.insert
   * @desc Add a alias for the user
   * @alias directory.users.aliases.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.userKey Email or immutable ID of the user
   * @param {().Alias} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions): AxiosPromise<Schema$Alias>;
  insert(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Alias>,
      callback?: BodyResponseCallback<Schema$Alias>): void;
  insert(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Alias>,
      callback?: BodyResponseCallback<Schema$Alias>):
      void|AxiosPromise<Schema$Alias> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/users/{userKey}/aliases')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['userKey'],
      pathParams: ['userKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Alias>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Alias>(parameters);
    }
  }


  /**
   * directory.users.aliases.list
   * @desc List all aliases for a user
   * @alias directory.users.aliases.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.event Event on which subscription is intended (if subscribing)
   * @param {string} params.userKey Email or immutable ID of the user
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions): AxiosPromise<Schema$Aliases>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Aliases>,
      callback?: BodyResponseCallback<Schema$Aliases>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Aliases>,
      callback?: BodyResponseCallback<Schema$Aliases>):
      void|AxiosPromise<Schema$Aliases> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/users/{userKey}/aliases')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['userKey'],
      pathParams: ['userKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Aliases>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Aliases>(parameters);
    }
  }


  /**
   * directory.users.aliases.watch
   * @desc Watch for changes in user aliases list
   * @alias directory.users.aliases.watch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.event Event on which subscription is intended (if subscribing)
   * @param {string} params.userKey Email or immutable ID of the user
   * @param {().Channel} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  watch(params?: any, options?: MethodOptions): AxiosPromise<Schema$Channel>;
  watch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Channel>,
      callback?: BodyResponseCallback<Schema$Channel>): void;
  watch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Channel>,
      callback?: BodyResponseCallback<Schema$Channel>):
      void|AxiosPromise<Schema$Channel> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/admin/directory/v1/users/{userKey}/aliases/watch')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['userKey'],
      pathParams: ['userKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Channel>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Channel>(parameters);
    }
  }
}

export class Resource$Users$Photos {
  root: Admin;
  constructor(root: Admin) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * directory.users.photos.delete
   * @desc Remove photos for the user
   * @alias directory.users.photos.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.userKey Email or immutable ID of the user
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/admin/directory/v1/users/{userKey}/photos/thumbnail')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['userKey'],
      pathParams: ['userKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * directory.users.photos.get
   * @desc Retrieve photo of a user
   * @alias directory.users.photos.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.userKey Email or immutable ID of the user
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$UserPhoto>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$UserPhoto>,
      callback?: BodyResponseCallback<Schema$UserPhoto>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$UserPhoto>,
      callback?: BodyResponseCallback<Schema$UserPhoto>):
      void|AxiosPromise<Schema$UserPhoto> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/admin/directory/v1/users/{userKey}/photos/thumbnail')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['userKey'],
      pathParams: ['userKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$UserPhoto>(parameters, callback);
    } else {
      return createAPIRequest<Schema$UserPhoto>(parameters);
    }
  }


  /**
   * directory.users.photos.patch
   * @desc Add a photo for the user. This method supports patch semantics.
   * @alias directory.users.photos.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.userKey Email or immutable ID of the user
   * @param {().UserPhoto} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$UserPhoto>;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$UserPhoto>,
      callback?: BodyResponseCallback<Schema$UserPhoto>): void;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$UserPhoto>,
      callback?: BodyResponseCallback<Schema$UserPhoto>):
      void|AxiosPromise<Schema$UserPhoto> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/admin/directory/v1/users/{userKey}/photos/thumbnail')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['userKey'],
      pathParams: ['userKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$UserPhoto>(parameters, callback);
    } else {
      return createAPIRequest<Schema$UserPhoto>(parameters);
    }
  }


  /**
   * directory.users.photos.update
   * @desc Add a photo for the user
   * @alias directory.users.photos.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.userKey Email or immutable ID of the user
   * @param {().UserPhoto} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions): AxiosPromise<Schema$UserPhoto>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$UserPhoto>,
      callback?: BodyResponseCallback<Schema$UserPhoto>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$UserPhoto>,
      callback?: BodyResponseCallback<Schema$UserPhoto>):
      void|AxiosPromise<Schema$UserPhoto> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/admin/directory/v1/users/{userKey}/photos/thumbnail')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['userKey'],
      pathParams: ['userKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$UserPhoto>(parameters, callback);
    } else {
      return createAPIRequest<Schema$UserPhoto>(parameters);
    }
  }
}


export class Resource$Verificationcodes {
  root: Admin;
  constructor(root: Admin) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * directory.verificationCodes.generate
   * @desc Generate new backup verification codes for the user.
   * @alias directory.verificationCodes.generate
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.userKey Email or immutable ID of the user
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  generate(params?: any, options?: MethodOptions): AxiosPromise<void>;
  generate(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  generate(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/admin/directory/v1/users/{userKey}/verificationCodes/generate')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['userKey'],
      pathParams: ['userKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * directory.verificationCodes.invalidate
   * @desc Invalidate the current backup verification codes for the user.
   * @alias directory.verificationCodes.invalidate
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.userKey Email or immutable ID of the user
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  invalidate(params?: any, options?: MethodOptions): AxiosPromise<void>;
  invalidate(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  invalidate(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/admin/directory/v1/users/{userKey}/verificationCodes/invalidate')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['userKey'],
      pathParams: ['userKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * directory.verificationCodes.list
   * @desc Returns the current set of valid backup verification codes for the
   * specified user.
   * @alias directory.verificationCodes.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$VerificationCodes>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$VerificationCodes>,
      callback?: BodyResponseCallback<Schema$VerificationCodes>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$VerificationCodes>,
      callback?: BodyResponseCallback<Schema$VerificationCodes>):
      void|AxiosPromise<Schema$VerificationCodes> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/admin/directory/v1/users/{userKey}/verificationCodes')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['userKey'],
      pathParams: ['userKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$VerificationCodes>(parameters, callback);
    } else {
      return createAPIRequest<Schema$VerificationCodes>(parameters);
    }
  }
}
