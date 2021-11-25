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

export namespace chromemanagement_v1 {
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
   * Chrome Management API
   *
   * The Chrome Management API is a suite of services that allows Chrome administrators to view, manage and gain insights on their Chrome OS and Chrome Browser devices.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const chromemanagement = google.chromemanagement('v1');
   * ```
   */
  export class Chromemanagement {
    context: APIRequestContext;
    customers: Resource$Customers;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.customers = new Resource$Customers(this.context);
    }
  }

  /**
   * Android app information.
   */
  export interface Schema$GoogleChromeManagementV1AndroidAppInfo {
    /**
     * Output only. Permissions requested by an Android app.
     */
    permissions?: Schema$GoogleChromeManagementV1AndroidAppPermission[];
  }
  /**
   * Permission requested by an Android app.
   */
  export interface Schema$GoogleChromeManagementV1AndroidAppPermission {
    /**
     * Output only. The type of the permission.
     */
    type?: string | null;
  }
  /**
   * Resource representing app details.
   */
  export interface Schema$GoogleChromeManagementV1AppDetails {
    /**
     * Output only. Android app information.
     */
    androidAppInfo?: Schema$GoogleChromeManagementV1AndroidAppInfo;
    /**
     * Output only. Unique store identifier for the item. Examples: "gmbmikajjgmnabiglmofipeabaddhgne" for the Save to Google Drive Chrome extension, "com.google.android.apps.docs" for the Google Drive Android app.
     */
    appId?: string | null;
    /**
     * Output only. Chrome Web Store app information.
     */
    chromeAppInfo?: Schema$GoogleChromeManagementV1ChromeAppInfo;
    /**
     * Output only. App's description.
     */
    description?: string | null;
    /**
     * Output only. The uri for the detail page of the item.
     */
    detailUri?: string | null;
    /**
     * Output only. App's display name.
     */
    displayName?: string | null;
    /**
     * Output only. First published time.
     */
    firstPublishTime?: string | null;
    /**
     * Output only. Home page or Website uri.
     */
    homepageUri?: string | null;
    /**
     * Output only. A link to an image that can be used as an icon for the product.
     */
    iconUri?: string | null;
    /**
     * Output only. Indicates if the app has to be paid for OR has paid content.
     */
    isPaidApp?: boolean | null;
    /**
     * Output only. Latest published time.
     */
    latestPublishTime?: string | null;
    /**
     * Output only. Format: name=customers/{customer_id\}/apps/{chrome|android|web\}/{app_id\}@{version\}
     */
    name?: string | null;
    /**
     * Output only. The URI pointing to the privacy policy of the app, if it was provided by the developer. Version-specific field that will only be set when the requested app version is found.
     */
    privacyPolicyUri?: string | null;
    /**
     * Output only. The publisher of the item.
     */
    publisher?: string | null;
    /**
     * Output only. Number of reviews received. Chrome Web Store review information will always be for the latest version of an app.
     */
    reviewNumber?: string | null;
    /**
     * Output only. The rating of the app (on 5 stars). Chrome Web Store review information will always be for the latest version of an app.
     */
    reviewRating?: number | null;
    /**
     * Output only. App version. A new revision is committed whenever a new version of the app is published.
     */
    revisionId?: string | null;
    /**
     * Output only. Information about a partial service error if applicable.
     */
    serviceError?: Schema$GoogleRpcStatus;
    /**
     * Output only. App type.
     */
    type?: string | null;
  }
  /**
   * Battery info
   */
  export interface Schema$GoogleChromeManagementV1BatteryInfo {
    /**
     * Output only. Design capacity (mAmpere-hours).
     */
    designCapacity?: string | null;
    /**
     * Output only. Designed minimum output voltage (mV)
     */
    designMinVoltage?: number | null;
    /**
     * Output only. The date the battery was manufactured.
     */
    manufactureDate?: Schema$GoogleTypeDate;
    /**
     * Output only. Battery manufacturer.
     */
    manufacturer?: string | null;
    /**
     * Output only. Battery serial number.
     */
    serialNumber?: string | null;
    /**
     * Output only. Technology of the battery. Example: Li-ion
     */
    technology?: string | null;
  }
  /**
   * Sampling data for battery.
   */
  export interface Schema$GoogleChromeManagementV1BatterySampleReport {
    /**
     * Output only. Battery charge percentage.
     */
    chargeRate?: number | null;
    /**
     * Output only. Battery current (mA).
     */
    current?: string | null;
    /**
     * Output only. The battery discharge rate measured in mW. Positive if the battery is being discharged, negative if it's being charged.
     */
    dischargeRate?: number | null;
    /**
     * Output only. Battery remaining capacity (mAmpere-hours).
     */
    remainingCapacity?: string | null;
    /**
     * Output only. Timestamp of when the sample was collected on device
     */
    reportTime?: string | null;
    /**
     * Output only. Battery status read from sysfs. Example: Discharging
     */
    status?: string | null;
    /**
     * Output only. Temperature in Celsius degrees.
     */
    temperature?: number | null;
    /**
     * Output only. Battery voltage (millivolt).
     */
    voltage?: string | null;
  }
  /**
   * Status data for battery.
   */
  export interface Schema$GoogleChromeManagementV1BatteryStatusReport {
    /**
     * Output only. Battery health.
     */
    batteryHealth?: string | null;
    /**
     * Output only. Cycle count.
     */
    cycleCount?: number | null;
    /**
     * Output only. Full charge capacity (mAmpere-hours).
     */
    fullChargeCapacity?: string | null;
    /**
     * Output only. Timestamp of when the sample was collected on device
     */
    reportTime?: string | null;
    /**
     * Output only. Sampling data for the battery.
     */
    sample?: Schema$GoogleChromeManagementV1BatterySampleReport[];
    /**
     * Output only. Battery serial number.
     */
    serialNumber?: string | null;
  }
  /**
   * Describes a browser version and its install count.
   */
  export interface Schema$GoogleChromeManagementV1BrowserVersion {
    /**
     * Output only. The release channel of the installed browser.
     */
    channel?: string | null;
    /**
     * Output only. Count grouped by device_system and major version
     */
    count?: string | null;
    /**
     * Output only. Version of the system-specified operating system.
     */
    deviceOsVersion?: string | null;
    /**
     * Output only. The device operating system.
     */
    system?: string | null;
    /**
     * Output only. The full version of the installed browser.
     */
    version?: string | null;
  }
  /**
   * Chrome Web Store app information.
   */
  export interface Schema$GoogleChromeManagementV1ChromeAppInfo {
    /**
     * Output only. Whether the app or extension is built and maintained by Google. Version-specific field that will only be set when the requested app version is found.
     */
    googleOwned?: boolean | null;
    /**
     * Output only. Whether the app or extension is in a published state in the Chrome Web Store.
     */
    isCwsHosted?: boolean | null;
    /**
     * Output only. Whether the app or extension is a theme.
     */
    isTheme?: boolean | null;
    /**
     * Output only. The minimum number of users using this app.
     */
    minUserCount?: number | null;
    /**
     * Output only. Every custom permission requested by the app. Version-specific field that will only be set when the requested app version is found.
     */
    permissions?: Schema$GoogleChromeManagementV1ChromeAppPermission[];
    /**
     * Output only. Every permission giving access to domains or broad host patterns. ( e.g. www.google.com). This includes the matches from content scripts as well as hosts in the permissions node of the manifest. Version-specific field that will only be set when the requested app version is found.
     */
    siteAccess?: Schema$GoogleChromeManagementV1ChromeAppSiteAccess[];
    /**
     * Output only. The app developer has enabled support for their app. Version-specific field that will only be set when the requested app version is found.
     */
    supportEnabled?: boolean | null;
  }
  /**
   * Permission requested by a Chrome app or extension.
   */
  export interface Schema$GoogleChromeManagementV1ChromeAppPermission {
    /**
     * Output only. If available, whether this permissions grants the app/extension access to user data.
     */
    accessUserData?: boolean | null;
    /**
     * Output only. If available, a URI to a page that has documentation for the current permission.
     */
    documentationUri?: string | null;
    /**
     * Output only. The type of the permission.
     */
    type?: string | null;
  }
  /**
   * Details of an app installation request.
   */
  export interface Schema$GoogleChromeManagementV1ChromeAppRequest {
    /**
     * Output only. Format: app_details=customers/{customer_id\}/apps/chrome/{app_id\}
     */
    appDetails?: string | null;
    /**
     * Output only. Unique store identifier for the app. Example: "gmbmikajjgmnabiglmofipeabaddhgne" for the Save to Google Drive Chrome extension.
     */
    appId?: string | null;
    /**
     * Output only. The uri for the detail page of the item.
     */
    detailUri?: string | null;
    /**
     * Output only. App's display name.
     */
    displayName?: string | null;
    /**
     * Output only. A link to an image that can be used as an icon for the product.
     */
    iconUri?: string | null;
    /**
     * Output only. The timestamp of the most recently made request for this app.
     */
    latestRequestTime?: string | null;
    /**
     * Output only. Total count of requests for this app.
     */
    requestCount?: string | null;
  }
  /**
   * Represent one host permission.
   */
  export interface Schema$GoogleChromeManagementV1ChromeAppSiteAccess {
    /**
     * Output only. This can contain very specific hosts, or patterns like "*.com" for instance.
     */
    hostMatch?: string | null;
  }
  /**
   * Response containing summary of requested app installations.
   */
  export interface Schema$GoogleChromeManagementV1CountChromeAppRequestsResponse {
    /**
     * Token to specify the next page in the list.
     */
    nextPageToken?: string | null;
    /**
     * Count of requested apps matching request.
     */
    requestedApps?: Schema$GoogleChromeManagementV1ChromeAppRequest[];
    /**
     * Total number of matching app requests.
     */
    totalSize?: number | null;
  }
  /**
   * Response containing requested browser versions details and counts.
   */
  export interface Schema$GoogleChromeManagementV1CountChromeVersionsResponse {
    /**
     * List of all browser versions and their install counts.
     */
    browserVersions?: Schema$GoogleChromeManagementV1BrowserVersion[];
    /**
     * Token to specify the next page of the request.
     */
    nextPageToken?: string | null;
    /**
     * Total number browser versions matching request.
     */
    totalSize?: number | null;
  }
  /**
   * Response containing details of queried installed apps.
   */
  export interface Schema$GoogleChromeManagementV1CountInstalledAppsResponse {
    /**
     * List of installed apps matching request.
     */
    installedApps?: Schema$GoogleChromeManagementV1InstalledApp[];
    /**
     * Token to specify the next page of the request.
     */
    nextPageToken?: string | null;
    /**
     * Total number of installed apps matching request.
     */
    totalSize?: number | null;
  }
  /**
   * CPU specs for a CPU.
   */
  export interface Schema$GoogleChromeManagementV1CpuInfo {
    /**
     * Output only. The CPU architecture.
     */
    architecture?: string | null;
    /**
     * Output only. The max CPU clock speed in kHz.
     */
    maxClockSpeed?: number | null;
    /**
     * Output only. The CPU model name. Example: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz
     */
    model?: string | null;
  }
  /**
   * Contains samples of the cpu status reports.
   */
  export interface Schema$GoogleChromeManagementV1CpuStatusReport {
    /**
     * Output only. CPU temperature sample info per CPU core in Celsius
     */
    cpuTemperatureInfo?: Schema$GoogleChromeManagementV1CpuTemperatureInfo[];
    /**
     * Output only. Sample of CPU utilization (0-100 percent).
     */
    cpuUtilizationPct?: number | null;
    /**
     * Output only. The timestamp in milliseconds representing time at which this report was sampled.
     */
    reportTime?: string | null;
    /**
     * Output only. Frequency the report is sampled.
     */
    sampleFrequency?: string | null;
  }
  /**
   * CPU temperature of a device. Sampled per CPU core in Celsius
   */
  export interface Schema$GoogleChromeManagementV1CpuTemperatureInfo {
    /**
     * Output only. CPU label. Example: Core 0
     */
    label?: string | null;
    /**
     * Output only. CPU temperature in Celsius.
     */
    temperatureCelsius?: number | null;
  }
  /**
   * Describes a device reporting Chrome browser information.
   */
  export interface Schema$GoogleChromeManagementV1Device {
    /**
     * Output only. The ID of the device that reported this Chrome browser information.
     */
    deviceId?: string | null;
    /**
     * Output only. The name of the machine within its local network.
     */
    machine?: string | null;
  }
  /**
   * Status of the single storage device.
   */
  export interface Schema$GoogleChromeManagementV1DiskInfo {
    /**
     * Output only. Number of bytes read since last boot.
     */
    bytesReadThisSession?: string | null;
    /**
     * Output only. Number of bytes written since last boot.
     */
    bytesWrittenThisSession?: string | null;
    /**
     * Output only. Time spent discarding since last boot. Discarding is writing to clear blocks which are no longer in use. Supported on kernels 4.18+.
     */
    discardTimeThisSession?: string | null;
    /**
     * Output only. Disk health.
     */
    health?: string | null;
    /**
     * Output only. Counts the time the disk and queue were busy, so unlike the fields above, parallel requests are not counted multiple times.
     */
    ioTimeThisSession?: string | null;
    /**
     * Output only. Disk manufacturer.
     */
    manufacturer?: string | null;
    /**
     * Output only. Disk model.
     */
    model?: string | null;
    /**
     * Output only. Time spent reading from disk since last boot.
     */
    readTimeThisSession?: string | null;
    /**
     * Output only. Disk serial number.
     */
    serialNumber?: string | null;
    /**
     * Output only. Disk size.
     */
    sizeBytes?: string | null;
    /**
     * Output only. Disk type: eMMC / NVMe / ATA / SCSI.
     */
    type?: string | null;
    /**
     * Output only. Disk volumes.
     */
    volumeIds?: string[] | null;
    /**
     * Output only. Time spent writing to disk since last boot.
     */
    writeTimeThisSession?: string | null;
  }
  /**
   * Information for a display.
   */
  export interface Schema$GoogleChromeManagementV1DisplayInfo {
    /**
     * Output only. Represents the graphics card device id.
     */
    deviceId?: string | null;
    /**
     * Output only. Indicates if display is internal or not.
     */
    isInternal?: boolean | null;
    /**
     * Output only. Refresh rate in Hz.
     */
    refreshRate?: number | null;
    /**
     * Output only. Resolution height in pixels.
     */
    resolutionHeight?: number | null;
    /**
     * Output only. Resolution width in pixels.
     */
    resolutionWidth?: number | null;
  }
  /**
   * Response containing a list of devices with queried app installed.
   */
  export interface Schema$GoogleChromeManagementV1FindInstalledAppDevicesResponse {
    /**
     * A list of devices which have the app installed. Sorted in ascending alphabetical order on the Device.machine field.
     */
    devices?: Schema$GoogleChromeManagementV1Device[];
    /**
     * Token to specify the next page of the request.
     */
    nextPageToken?: string | null;
    /**
     * Total number of devices matching request.
     */
    totalSize?: number | null;
  }
  /**
   * Information of a graphics adapter (GPU).
   */
  export interface Schema$GoogleChromeManagementV1GraphicsAdapterInfo {
    /**
     * Output only. Adapter name. Example: Mesa DRI Intel(R) UHD Graphics 620 (Kabylake GT2).
     */
    adapter?: string | null;
    /**
     * Output only. Represents the graphics card device id.
     */
    deviceId?: string | null;
    /**
     * Output only. Version of the GPU driver.
     */
    driverVersion?: string | null;
  }
  /**
   * Information of the graphics subsystem.
   */
  export interface Schema$GoogleChromeManagementV1GraphicsInfo {
    /**
     * Output only. Information about the graphics adapter (GPU).
     */
    adapterInfo?: Schema$GoogleChromeManagementV1GraphicsAdapterInfo;
  }
  /**
   * Information of the graphics subsystem.
   */
  export interface Schema$GoogleChromeManagementV1GraphicsStatusReport {
    /**
     * Output only. Information about the displays for the device.
     */
    displays?: Schema$GoogleChromeManagementV1DisplayInfo[];
    /**
     * Output only. Time at which the graphics data was reported.
     */
    reportTime?: string | null;
  }
  /**
   * Describes an installed app.
   */
  export interface Schema$GoogleChromeManagementV1InstalledApp {
    /**
     * Output only. Unique identifier of the app. For Chrome apps and extensions, the 32-character id (e.g. ehoadneljpdggcbbknedodolkkjodefl). For Android apps, the package name (e.g. com.evernote).
     */
    appId?: string | null;
    /**
     * Output only. How the app was installed.
     */
    appInstallType?: string | null;
    /**
     * Output only. Source of the installed app.
     */
    appSource?: string | null;
    /**
     * Output only. Type of the app.
     */
    appType?: string | null;
    /**
     * Output only. Count of browser devices with this app installed.
     */
    browserDeviceCount?: string | null;
    /**
     * Output only. Description of the installed app.
     */
    description?: string | null;
    /**
     * Output only. Whether the app is disabled.
     */
    disabled?: boolean | null;
    /**
     * Output only. Name of the installed app.
     */
    displayName?: string | null;
    /**
     * Output only. Homepage uri of the installed app.
     */
    homepageUri?: string | null;
    /**
     * Output only. Count of ChromeOS users with this app installed.
     */
    osUserCount?: string | null;
    /**
     * Output only. Permissions of the installed app.
     */
    permissions?: string[] | null;
  }
  export interface Schema$GoogleChromeManagementV1ListTelemetryDevicesResponse {
    /**
     * Telemetry devices returned in the response.
     */
    devices?: Schema$GoogleChromeManagementV1TelemetryDevice[];
    /**
     * Token to specify next page in the list.
     */
    nextPageToken?: string | null;
  }
  /**
   * Memory information of a device.
   */
  export interface Schema$GoogleChromeManagementV1MemoryInfo {
    /**
     * Output only. Amount of available RAM in bytes.
     */
    availableRamBytes?: string | null;
    /**
     * Output only. Total RAM in bytes.
     */
    totalRamBytes?: string | null;
  }
  /**
   * Contains samples of memory status reports.
   */
  export interface Schema$GoogleChromeManagementV1MemoryStatusReport {
    /**
     * Output only. Number of page faults during this collection
     */
    pageFaults?: number | null;
    /**
     * Output only. The timestamp in milliseconds representing time at which this report was sampled.
     */
    reportTime?: string | null;
    /**
     * Output only. Frequency the report is sampled.
     */
    sampleFrequency?: string | null;
    /**
     * Output only. Amount of free RAM in bytes (unreliable due to Garbage Collection).
     */
    systemRamFreeBytes?: string | null;
  }
  /**
   * State of visible/configured networks.
   */
  export interface Schema$GoogleChromeManagementV1NetworkStatusReport {
    /**
     * Output only. Gateway IP address.
     */
    gatewayIpAddress?: string | null;
    /**
     * Output only. LAN IP address.
     */
    lanIpAddress?: string | null;
    /**
     * Output only. Time at which the network state was reported.
     */
    reportTime?: string | null;
    /**
     * Output only. Frequency the report is sampled.
     */
    sampleFrequency?: string | null;
    /**
     * Output only. Signal strength for wireless networks measured in decibels.
     */
    signalStrengthDbm?: number | null;
  }
  /**
   * Contains information regarding the current OS update status.
   */
  export interface Schema$GoogleChromeManagementV1OsUpdateStatus {
    /**
     * Output only. Timestamp of the last reboot.
     */
    lastRebootTime?: string | null;
    /**
     * Output only. Timestamp of the last update check.
     */
    lastUpdateCheckTime?: string | null;
    /**
     * Output only. Timestamp of the last successful update.
     */
    lastUpdateTime?: string | null;
    /**
     * Output only. New platform version of the os image being downloaded and applied. It is only set when update status is OS_IMAGE_DOWNLOAD_IN_PROGRESS or OS_UPDATE_NEED_REBOOT. Note this could be a dummy "0.0.0.0" for OS_UPDATE_NEED_REBOOT status for some edge cases, e.g. update engine is restarted without a reboot.
     */
    newPlatformVersion?: string | null;
    /**
     * Output only. New requested platform version from the pending updated kiosk app.
     */
    newRequestedPlatformVersion?: string | null;
    /**
     * Output only. Current state of the os update.
     */
    updateState?: string | null;
  }
  /**
   * Status data for storage.
   */
  export interface Schema$GoogleChromeManagementV1StorageInfo {
    /**
     * The available space for user data storage in the device in bytes.
     */
    availableDiskBytes?: string | null;
    /**
     * The total space for user data storage in the device in bytes.
     */
    totalDiskBytes?: string | null;
    /**
     * Information for disk volumes
     */
    volume?: Schema$GoogleChromeManagementV1StorageInfoDiskVolume[];
  }
  /**
   * Information for disk volumes
   */
  export interface Schema$GoogleChromeManagementV1StorageInfoDiskVolume {
    /**
     * Free storage space in bytes.
     */
    storageFreeBytes?: string | null;
    /**
     * Total storage space in bytes.
     */
    storageTotalBytes?: string | null;
    /**
     * Disk volume id.
     */
    volumeId?: string | null;
  }
  /**
   * Status data for storage.
   */
  export interface Schema$GoogleChromeManagementV1StorageStatusReport {
    /**
     * Output only. Reports on disk
     */
    disk?: Schema$GoogleChromeManagementV1DiskInfo[];
    /**
     * Output only. Timestamp of when the sample was collected on device
     */
    reportTime?: string | null;
  }
  /**
   * Telemetry data collected from a managed device.
   */
  export interface Schema$GoogleChromeManagementV1TelemetryDevice {
    /**
     * Output only. Information on battery specs for the device.
     */
    batteryInfo?: Schema$GoogleChromeManagementV1BatteryInfo[];
    /**
     * Output only. Battery reports collected periodically.
     */
    batteryStatusReport?: Schema$GoogleChromeManagementV1BatteryStatusReport[];
    /**
     * Output only. Information regarding CPU specs for the device.
     */
    cpuInfo?: Schema$GoogleChromeManagementV1CpuInfo[];
    /**
     * Output only. CPU status reports collected periodically.
     */
    cpuStatusReport?: Schema$GoogleChromeManagementV1CpuStatusReport[];
    /**
     * Output only. Google Workspace Customer whose enterprise enrolled the device.
     */
    customer?: string | null;
    /**
     * Output only. The unique Directory API ID of the device. This value is the same as the Admin Console's Directory API ID in the Chrome OS Devices tab
     */
    deviceId?: string | null;
    /**
     * Output only. Contains information regarding Graphic peripherals for the device.
     */
    graphicsInfo?: Schema$GoogleChromeManagementV1GraphicsInfo;
    /**
     * Output only. Graphics reports collected periodically.
     */
    graphicsStatusReport?: Schema$GoogleChromeManagementV1GraphicsStatusReport[];
    /**
     * Output only. Information regarding memory specs for the device.
     */
    memoryInfo?: Schema$GoogleChromeManagementV1MemoryInfo;
    /**
     * Output only. Memory status reports collected periodically.
     */
    memoryStatusReport?: Schema$GoogleChromeManagementV1MemoryStatusReport[];
    /**
     * Output only. Resource name of the device.
     */
    name?: string | null;
    /**
     * Output only. Network specs collected periodically.
     */
    networkStatusReport?: Schema$GoogleChromeManagementV1NetworkStatusReport[];
    /**
     * Output only. Organization unit ID of the device.
     */
    orgUnitId?: string | null;
    /**
     * Output only. Contains relevant information regarding ChromeOS update status.
     */
    osUpdateStatus?: Schema$GoogleChromeManagementV1OsUpdateStatus[];
    /**
     * Output only. Device serial number. This value is the same as the Admin Console's Serial Number in the Chrome OS Devices tab.
     */
    serialNumber?: string | null;
    /**
     * Output only. Information of storage specs for the device.
     */
    storageInfo?: Schema$GoogleChromeManagementV1StorageInfo;
    /**
     * Output only. Storage reports collected periodically.
     */
    storageStatusReport?: Schema$GoogleChromeManagementV1StorageStatusReport[];
  }
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$GoogleRpcStatus {
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
   * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`.
   */
  export interface Schema$GoogleTypeDate {
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

  export class Resource$Customers {
    context: APIRequestContext;
    apps: Resource$Customers$Apps;
    reports: Resource$Customers$Reports;
    telemetry: Resource$Customers$Telemetry;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.apps = new Resource$Customers$Apps(this.context);
      this.reports = new Resource$Customers$Reports(this.context);
      this.telemetry = new Resource$Customers$Telemetry(this.context);
    }
  }

  export class Resource$Customers$Apps {
    context: APIRequestContext;
    android: Resource$Customers$Apps$Android;
    chrome: Resource$Customers$Apps$Chrome;
    web: Resource$Customers$Apps$Web;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.android = new Resource$Customers$Apps$Android(this.context);
      this.chrome = new Resource$Customers$Apps$Chrome(this.context);
      this.web = new Resource$Customers$Apps$Web(this.context);
    }

    /**
     * Generate summary of app installation requests.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const chromemanagement = google.chromemanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/chrome.management.appdetails.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chromemanagement.customers.apps.countChromeAppRequests({
     *     // Required. Customer id or "my_customer" to use the customer associated to the account making the request.
     *     customer: 'customers/my-customer',
     *     // Field used to order results. Supported fields: * request_count * latest_request_time
     *     orderBy: 'placeholder-value',
     *     // The ID of the organizational unit.
     *     orgUnitId: 'placeholder-value',
     *     // Maximum number of results to return. Maximum and default are 50, anything above will be coerced to 50.
     *     pageSize: 'placeholder-value',
     *     // Token to specify the page of the request to be returned.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "requestedApps": [],
     *   //   "totalSize": 0
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
    countChromeAppRequests(
      params: Params$Resource$Customers$Apps$Countchromeapprequests,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    countChromeAppRequests(
      params?: Params$Resource$Customers$Apps$Countchromeapprequests,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleChromeManagementV1CountChromeAppRequestsResponse>;
    countChromeAppRequests(
      params: Params$Resource$Customers$Apps$Countchromeapprequests,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    countChromeAppRequests(
      params: Params$Resource$Customers$Apps$Countchromeapprequests,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeAppRequestsResponse>,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeAppRequestsResponse>
    ): void;
    countChromeAppRequests(
      params: Params$Resource$Customers$Apps$Countchromeapprequests,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeAppRequestsResponse>
    ): void;
    countChromeAppRequests(
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeAppRequestsResponse>
    ): void;
    countChromeAppRequests(
      paramsOrCallback?:
        | Params$Resource$Customers$Apps$Countchromeapprequests
        | BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeAppRequestsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeAppRequestsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeAppRequestsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleChromeManagementV1CountChromeAppRequestsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Apps$Countchromeapprequests;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Apps$Countchromeapprequests;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://chromemanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+customer}/apps:countChromeAppRequests'
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
        createAPIRequest<Schema$GoogleChromeManagementV1CountChromeAppRequestsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromeManagementV1CountChromeAppRequestsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Customers$Apps$Countchromeapprequests
    extends StandardParameters {
    /**
     * Required. Customer id or "my_customer" to use the customer associated to the account making the request.
     */
    customer?: string;
    /**
     * Field used to order results. Supported fields: * request_count * latest_request_time
     */
    orderBy?: string;
    /**
     * The ID of the organizational unit.
     */
    orgUnitId?: string;
    /**
     * Maximum number of results to return. Maximum and default are 50, anything above will be coerced to 50.
     */
    pageSize?: number;
    /**
     * Token to specify the page of the request to be returned.
     */
    pageToken?: string;
  }

  export class Resource$Customers$Apps$Android {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get a specific app for a customer by its resource name.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const chromemanagement = google.chromemanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/chrome.management.appdetails.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chromemanagement.customers.apps.android.get({
     *     // Required. The app for which details are being queried. Examples: "customers/my_customer/apps/chrome/gmbmikajjgmnabiglmofipeabaddhgne@2.1.2" for the Save to Google Drive Chrome extension version 2.1.2, "customers/my_customer/apps/android/com.google.android.apps.docs" for the Google Drive Android app's latest version.
     *     name: 'customers/my-customer/apps/android/[^/]+',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "androidAppInfo": {},
     *   //   "appId": "my_appId",
     *   //   "chromeAppInfo": {},
     *   //   "description": "my_description",
     *   //   "detailUri": "my_detailUri",
     *   //   "displayName": "my_displayName",
     *   //   "firstPublishTime": "my_firstPublishTime",
     *   //   "homepageUri": "my_homepageUri",
     *   //   "iconUri": "my_iconUri",
     *   //   "isPaidApp": false,
     *   //   "latestPublishTime": "my_latestPublishTime",
     *   //   "name": "my_name",
     *   //   "privacyPolicyUri": "my_privacyPolicyUri",
     *   //   "publisher": "my_publisher",
     *   //   "reviewNumber": "my_reviewNumber",
     *   //   "reviewRating": {},
     *   //   "revisionId": "my_revisionId",
     *   //   "serviceError": {},
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
      params: Params$Resource$Customers$Apps$Android$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Customers$Apps$Android$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleChromeManagementV1AppDetails>;
    get(
      params: Params$Resource$Customers$Apps$Android$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Customers$Apps$Android$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>
    ): void;
    get(
      params: Params$Resource$Customers$Apps$Android$Get,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Customers$Apps$Android$Get
        | BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleChromeManagementV1AppDetails>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Apps$Android$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Apps$Android$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://chromemanagement.googleapis.com/';
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
        createAPIRequest<Schema$GoogleChromeManagementV1AppDetails>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromeManagementV1AppDetails>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Customers$Apps$Android$Get
    extends StandardParameters {
    /**
     * Required. The app for which details are being queried. Examples: "customers/my_customer/apps/chrome/gmbmikajjgmnabiglmofipeabaddhgne@2.1.2" for the Save to Google Drive Chrome extension version 2.1.2, "customers/my_customer/apps/android/com.google.android.apps.docs" for the Google Drive Android app's latest version.
     */
    name?: string;
  }

  export class Resource$Customers$Apps$Chrome {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get a specific app for a customer by its resource name.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const chromemanagement = google.chromemanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/chrome.management.appdetails.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chromemanagement.customers.apps.chrome.get({
     *     // Required. The app for which details are being queried. Examples: "customers/my_customer/apps/chrome/gmbmikajjgmnabiglmofipeabaddhgne@2.1.2" for the Save to Google Drive Chrome extension version 2.1.2, "customers/my_customer/apps/android/com.google.android.apps.docs" for the Google Drive Android app's latest version.
     *     name: 'customers/my-customer/apps/chrome/[^/]+',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "androidAppInfo": {},
     *   //   "appId": "my_appId",
     *   //   "chromeAppInfo": {},
     *   //   "description": "my_description",
     *   //   "detailUri": "my_detailUri",
     *   //   "displayName": "my_displayName",
     *   //   "firstPublishTime": "my_firstPublishTime",
     *   //   "homepageUri": "my_homepageUri",
     *   //   "iconUri": "my_iconUri",
     *   //   "isPaidApp": false,
     *   //   "latestPublishTime": "my_latestPublishTime",
     *   //   "name": "my_name",
     *   //   "privacyPolicyUri": "my_privacyPolicyUri",
     *   //   "publisher": "my_publisher",
     *   //   "reviewNumber": "my_reviewNumber",
     *   //   "reviewRating": {},
     *   //   "revisionId": "my_revisionId",
     *   //   "serviceError": {},
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
      params: Params$Resource$Customers$Apps$Chrome$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Customers$Apps$Chrome$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleChromeManagementV1AppDetails>;
    get(
      params: Params$Resource$Customers$Apps$Chrome$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Customers$Apps$Chrome$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>
    ): void;
    get(
      params: Params$Resource$Customers$Apps$Chrome$Get,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Customers$Apps$Chrome$Get
        | BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleChromeManagementV1AppDetails>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Apps$Chrome$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Apps$Chrome$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://chromemanagement.googleapis.com/';
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
        createAPIRequest<Schema$GoogleChromeManagementV1AppDetails>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromeManagementV1AppDetails>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Customers$Apps$Chrome$Get
    extends StandardParameters {
    /**
     * Required. The app for which details are being queried. Examples: "customers/my_customer/apps/chrome/gmbmikajjgmnabiglmofipeabaddhgne@2.1.2" for the Save to Google Drive Chrome extension version 2.1.2, "customers/my_customer/apps/android/com.google.android.apps.docs" for the Google Drive Android app's latest version.
     */
    name?: string;
  }

  export class Resource$Customers$Apps$Web {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get a specific app for a customer by its resource name.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const chromemanagement = google.chromemanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/chrome.management.appdetails.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chromemanagement.customers.apps.web.get({
     *     // Required. The app for which details are being queried. Examples: "customers/my_customer/apps/chrome/gmbmikajjgmnabiglmofipeabaddhgne@2.1.2" for the Save to Google Drive Chrome extension version 2.1.2, "customers/my_customer/apps/android/com.google.android.apps.docs" for the Google Drive Android app's latest version.
     *     name: 'customers/my-customer/apps/web/[^/]+',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "androidAppInfo": {},
     *   //   "appId": "my_appId",
     *   //   "chromeAppInfo": {},
     *   //   "description": "my_description",
     *   //   "detailUri": "my_detailUri",
     *   //   "displayName": "my_displayName",
     *   //   "firstPublishTime": "my_firstPublishTime",
     *   //   "homepageUri": "my_homepageUri",
     *   //   "iconUri": "my_iconUri",
     *   //   "isPaidApp": false,
     *   //   "latestPublishTime": "my_latestPublishTime",
     *   //   "name": "my_name",
     *   //   "privacyPolicyUri": "my_privacyPolicyUri",
     *   //   "publisher": "my_publisher",
     *   //   "reviewNumber": "my_reviewNumber",
     *   //   "reviewRating": {},
     *   //   "revisionId": "my_revisionId",
     *   //   "serviceError": {},
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
      params: Params$Resource$Customers$Apps$Web$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Customers$Apps$Web$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleChromeManagementV1AppDetails>;
    get(
      params: Params$Resource$Customers$Apps$Web$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Customers$Apps$Web$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>
    ): void;
    get(
      params: Params$Resource$Customers$Apps$Web$Get,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Customers$Apps$Web$Get
        | BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleChromeManagementV1AppDetails>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Apps$Web$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Apps$Web$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://chromemanagement.googleapis.com/';
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
        createAPIRequest<Schema$GoogleChromeManagementV1AppDetails>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromeManagementV1AppDetails>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Customers$Apps$Web$Get
    extends StandardParameters {
    /**
     * Required. The app for which details are being queried. Examples: "customers/my_customer/apps/chrome/gmbmikajjgmnabiglmofipeabaddhgne@2.1.2" for the Save to Google Drive Chrome extension version 2.1.2, "customers/my_customer/apps/android/com.google.android.apps.docs" for the Google Drive Android app's latest version.
     */
    name?: string;
  }

  export class Resource$Customers$Reports {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Generate report of installed Chrome versions.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const chromemanagement = google.chromemanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/chrome.management.reports.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chromemanagement.customers.reports.countChromeVersions({
     *     // Required. Customer id or "my_customer" to use the customer associated to the account making the request.
     *     customer: 'customers/my-customer',
     *     // Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Supported filter fields: * last_active_date
     *     filter: 'placeholder-value',
     *     // The ID of the organizational unit.
     *     orgUnitId: 'placeholder-value',
     *     // Maximum number of results to return. Maximum and default are 100.
     *     pageSize: 'placeholder-value',
     *     // Token to specify the page of the request to be returned.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "browserVersions": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "totalSize": 0
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
    countChromeVersions(
      params: Params$Resource$Customers$Reports$Countchromeversions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    countChromeVersions(
      params?: Params$Resource$Customers$Reports$Countchromeversions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleChromeManagementV1CountChromeVersionsResponse>;
    countChromeVersions(
      params: Params$Resource$Customers$Reports$Countchromeversions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    countChromeVersions(
      params: Params$Resource$Customers$Reports$Countchromeversions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeVersionsResponse>,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeVersionsResponse>
    ): void;
    countChromeVersions(
      params: Params$Resource$Customers$Reports$Countchromeversions,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeVersionsResponse>
    ): void;
    countChromeVersions(
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeVersionsResponse>
    ): void;
    countChromeVersions(
      paramsOrCallback?:
        | Params$Resource$Customers$Reports$Countchromeversions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeVersionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeVersionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeVersionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleChromeManagementV1CountChromeVersionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Reports$Countchromeversions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Reports$Countchromeversions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://chromemanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+customer}/reports:countChromeVersions'
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
        createAPIRequest<Schema$GoogleChromeManagementV1CountChromeVersionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromeManagementV1CountChromeVersionsResponse>(
          parameters
        );
      }
    }

    /**
     * Generate report of app installations.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const chromemanagement = google.chromemanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/chrome.management.reports.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chromemanagement.customers.reports.countInstalledApps({
     *     // Required. Customer id or "my_customer" to use the customer associated to the account making the request.
     *     customer: 'customers/my-customer',
     *     // Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Supported filter fields: * app_name * app_type * install_type * number_of_permissions * total_install_count * latest_profile_active_date * permission_name
     *     filter: 'placeholder-value',
     *     // Field used to order results. Supported order by fields: * app_name * app_type * install_type * number_of_permissions * total_install_count
     *     orderBy: 'placeholder-value',
     *     // The ID of the organizational unit.
     *     orgUnitId: 'placeholder-value',
     *     // Maximum number of results to return. Maximum and default are 100.
     *     pageSize: 'placeholder-value',
     *     // Token to specify the page of the request to be returned.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "installedApps": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "totalSize": 0
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
    countInstalledApps(
      params: Params$Resource$Customers$Reports$Countinstalledapps,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    countInstalledApps(
      params?: Params$Resource$Customers$Reports$Countinstalledapps,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleChromeManagementV1CountInstalledAppsResponse>;
    countInstalledApps(
      params: Params$Resource$Customers$Reports$Countinstalledapps,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    countInstalledApps(
      params: Params$Resource$Customers$Reports$Countinstalledapps,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1CountInstalledAppsResponse>,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountInstalledAppsResponse>
    ): void;
    countInstalledApps(
      params: Params$Resource$Customers$Reports$Countinstalledapps,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountInstalledAppsResponse>
    ): void;
    countInstalledApps(
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountInstalledAppsResponse>
    ): void;
    countInstalledApps(
      paramsOrCallback?:
        | Params$Resource$Customers$Reports$Countinstalledapps
        | BodyResponseCallback<Schema$GoogleChromeManagementV1CountInstalledAppsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1CountInstalledAppsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromeManagementV1CountInstalledAppsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleChromeManagementV1CountInstalledAppsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Reports$Countinstalledapps;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Reports$Countinstalledapps;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://chromemanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+customer}/reports:countInstalledApps'
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
        createAPIRequest<Schema$GoogleChromeManagementV1CountInstalledAppsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromeManagementV1CountInstalledAppsResponse>(
          parameters
        );
      }
    }

    /**
     * Generate report of devices that have a specified app installed.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const chromemanagement = google.chromemanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/chrome.management.reports.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chromemanagement.customers.reports.findInstalledAppDevices({
     *     // Unique identifier of the app. For Chrome apps and extensions, the 32-character id (e.g. ehoadneljpdggcbbknedodolkkjodefl). For Android apps, the package name (e.g. com.evernote).
     *     appId: 'placeholder-value',
     *     // Type of the app.
     *     appType: 'placeholder-value',
     *     // Required. Customer id or "my_customer" to use the customer associated to the account making the request.
     *     customer: 'customers/my-customer',
     *     // Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Supported filter fields: * last_active_date
     *     filter: 'placeholder-value',
     *     // Field used to order results. Supported order by fields: * machine * device_id
     *     orderBy: 'placeholder-value',
     *     // The ID of the organizational unit.
     *     orgUnitId: 'placeholder-value',
     *     // Maximum number of results to return. Maximum and default are 100.
     *     pageSize: 'placeholder-value',
     *     // Token to specify the page of the request to be returned.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "devices": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "totalSize": 0
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
    findInstalledAppDevices(
      params: Params$Resource$Customers$Reports$Findinstalledappdevices,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    findInstalledAppDevices(
      params?: Params$Resource$Customers$Reports$Findinstalledappdevices,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleChromeManagementV1FindInstalledAppDevicesResponse>;
    findInstalledAppDevices(
      params: Params$Resource$Customers$Reports$Findinstalledappdevices,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    findInstalledAppDevices(
      params: Params$Resource$Customers$Reports$Findinstalledappdevices,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1FindInstalledAppDevicesResponse>,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1FindInstalledAppDevicesResponse>
    ): void;
    findInstalledAppDevices(
      params: Params$Resource$Customers$Reports$Findinstalledappdevices,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1FindInstalledAppDevicesResponse>
    ): void;
    findInstalledAppDevices(
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1FindInstalledAppDevicesResponse>
    ): void;
    findInstalledAppDevices(
      paramsOrCallback?:
        | Params$Resource$Customers$Reports$Findinstalledappdevices
        | BodyResponseCallback<Schema$GoogleChromeManagementV1FindInstalledAppDevicesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1FindInstalledAppDevicesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromeManagementV1FindInstalledAppDevicesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleChromeManagementV1FindInstalledAppDevicesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Reports$Findinstalledappdevices;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Customers$Reports$Findinstalledappdevices;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://chromemanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+customer}/reports:findInstalledAppDevices'
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
        createAPIRequest<Schema$GoogleChromeManagementV1FindInstalledAppDevicesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromeManagementV1FindInstalledAppDevicesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Customers$Reports$Countchromeversions
    extends StandardParameters {
    /**
     * Required. Customer id or "my_customer" to use the customer associated to the account making the request.
     */
    customer?: string;
    /**
     * Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Supported filter fields: * last_active_date
     */
    filter?: string;
    /**
     * The ID of the organizational unit.
     */
    orgUnitId?: string;
    /**
     * Maximum number of results to return. Maximum and default are 100.
     */
    pageSize?: number;
    /**
     * Token to specify the page of the request to be returned.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Customers$Reports$Countinstalledapps
    extends StandardParameters {
    /**
     * Required. Customer id or "my_customer" to use the customer associated to the account making the request.
     */
    customer?: string;
    /**
     * Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Supported filter fields: * app_name * app_type * install_type * number_of_permissions * total_install_count * latest_profile_active_date * permission_name
     */
    filter?: string;
    /**
     * Field used to order results. Supported order by fields: * app_name * app_type * install_type * number_of_permissions * total_install_count
     */
    orderBy?: string;
    /**
     * The ID of the organizational unit.
     */
    orgUnitId?: string;
    /**
     * Maximum number of results to return. Maximum and default are 100.
     */
    pageSize?: number;
    /**
     * Token to specify the page of the request to be returned.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Customers$Reports$Findinstalledappdevices
    extends StandardParameters {
    /**
     * Unique identifier of the app. For Chrome apps and extensions, the 32-character id (e.g. ehoadneljpdggcbbknedodolkkjodefl). For Android apps, the package name (e.g. com.evernote).
     */
    appId?: string;
    /**
     * Type of the app.
     */
    appType?: string;
    /**
     * Required. Customer id or "my_customer" to use the customer associated to the account making the request.
     */
    customer?: string;
    /**
     * Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Supported filter fields: * last_active_date
     */
    filter?: string;
    /**
     * Field used to order results. Supported order by fields: * machine * device_id
     */
    orderBy?: string;
    /**
     * The ID of the organizational unit.
     */
    orgUnitId?: string;
    /**
     * Maximum number of results to return. Maximum and default are 100.
     */
    pageSize?: number;
    /**
     * Token to specify the page of the request to be returned.
     */
    pageToken?: string;
  }

  export class Resource$Customers$Telemetry {
    context: APIRequestContext;
    devices: Resource$Customers$Telemetry$Devices;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.devices = new Resource$Customers$Telemetry$Devices(this.context);
    }
  }

  export class Resource$Customers$Telemetry$Devices {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * List all telemetry devices.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const chromemanagement = google.chromemanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/chrome.management.telemetry.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chromemanagement.customers.telemetry.devices.list({
     *     // Optional. Only include resources that match the filter. Supported filter fields: - org_unit_id - serial_number
     *     filter: 'placeholder-value',
     *     // Maximum number of results to return. Maximum and default are 100.
     *     pageSize: 'placeholder-value',
     *     // Token to specify next page in the list.
     *     pageToken: 'placeholder-value',
     *     // Required. Customer id or "my_customer" to use the customer associated to the account making the request.
     *     parent: 'customers/my-customer',
     *     // Required. Read mask to specify which fields to return.
     *     readMask: 'placeholder-value',
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
      params: Params$Resource$Customers$Telemetry$Devices$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Customers$Telemetry$Devices$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleChromeManagementV1ListTelemetryDevicesResponse>;
    list(
      params: Params$Resource$Customers$Telemetry$Devices$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Customers$Telemetry$Devices$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1ListTelemetryDevicesResponse>,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1ListTelemetryDevicesResponse>
    ): void;
    list(
      params: Params$Resource$Customers$Telemetry$Devices$List,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1ListTelemetryDevicesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1ListTelemetryDevicesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Customers$Telemetry$Devices$List
        | BodyResponseCallback<Schema$GoogleChromeManagementV1ListTelemetryDevicesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1ListTelemetryDevicesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromeManagementV1ListTelemetryDevicesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleChromeManagementV1ListTelemetryDevicesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Telemetry$Devices$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Telemetry$Devices$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://chromemanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/telemetry/devices').replace(
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
        createAPIRequest<Schema$GoogleChromeManagementV1ListTelemetryDevicesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromeManagementV1ListTelemetryDevicesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Customers$Telemetry$Devices$List
    extends StandardParameters {
    /**
     * Optional. Only include resources that match the filter. Supported filter fields: - org_unit_id - serial_number
     */
    filter?: string;
    /**
     * Maximum number of results to return. Maximum and default are 100.
     */
    pageSize?: number;
    /**
     * Token to specify next page in the list.
     */
    pageToken?: string;
    /**
     * Required. Customer id or "my_customer" to use the customer associated to the account making the request.
     */
    parent?: string;
    /**
     * Required. Read mask to specify which fields to return.
     */
    readMask?: string;
  }
}
