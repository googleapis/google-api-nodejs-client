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
    operations: Resource$Operations;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.customers = new Resource$Customers(this.context);
      this.operations = new Resource$Operations(this.context);
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
   * App report.
   */
  export interface Schema$GoogleChromeManagementV1AppReport {
    /**
     * Timestamp when the report was collected.
     */
    reportTime?: string | null;
    /**
     * App usage data.
     */
    usageData?: Schema$GoogleChromeManagementV1AppUsageData[];
  }
  /**
   * App usage data.
   */
  export interface Schema$GoogleChromeManagementV1AppUsageData {
    /**
     * App id.
     */
    appId?: string | null;
    /**
     * Application instance id. This will be unique per window/instance.
     */
    appInstanceId?: string | null;
    /**
     * Type of app.
     */
    appType?: string | null;
    /**
     * App foreground running time.
     */
    runningDuration?: string | null;
  }
  /**
   * Status data for storage. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceAudioStatus](https://chromeenterprise.google/policies/#ReportDeviceAudioStatus) * Data Collection Frequency: 10 minutes * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_AUDIO_REPORT
   */
  export interface Schema$GoogleChromeManagementV1AudioStatusReport {
    /**
     * Output only. Active input device's name.
     */
    inputDevice?: string | null;
    /**
     * Output only. Active input device's gain in [0, 100].
     */
    inputGain?: number | null;
    /**
     * Output only. Is active input device mute or not.
     */
    inputMute?: boolean | null;
    /**
     * Output only. Active output device's name.
     */
    outputDevice?: string | null;
    /**
     * Output only. Is active output device mute or not.
     */
    outputMute?: boolean | null;
    /**
     * Output only. Active output device's volume in [0, 100].
     */
    outputVolume?: number | null;
    /**
     * Output only. Timestamp of when the sample was collected on device.
     */
    reportTime?: string | null;
  }
  /**
   * Information about the battery. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDevicePowerStatus](https://chromeenterprise.google/policies/#ReportDevicePowerStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_BATTERY_INFO
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
   * Sampling data for battery. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDevicePowerStatus](https://chromeenterprise.google/policies/#ReportDevicePowerStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
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
   * Status data for battery. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDevicePowerStatus](https://chromeenterprise.google/policies/#ReportDevicePowerStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_BATTERY_REPORT
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
     * Output only. Sampling data for the battery sorted in a decreasing order of report_time.
     */
    sample?: Schema$GoogleChromeManagementV1BatterySampleReport[];
    /**
     * Output only. Battery serial number.
     */
    serialNumber?: string | null;
  }
  /**
   * Boot performance report of a device. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceBootMode](https://chromeenterprise.google/policies/#ReportDeviceBootMode) * Data Collection Frequency: On every boot up event * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_OS_REPORT
   */
  export interface Schema$GoogleChromeManagementV1BootPerformanceReport {
    /**
     * Total time to boot up.
     */
    bootUpDuration?: string | null;
    /**
     * The timestamp when power came on.
     */
    bootUpTime?: string | null;
    /**
     * Timestamp when the report was collected.
     */
    reportTime?: string | null;
    /**
     * Total time since shutdown start to power off.
     */
    shutdownDuration?: string | null;
    /**
     * The shutdown reason.
     */
    shutdownReason?: string | null;
    /**
     * The timestamp when shutdown.
     */
    shutdownTime?: string | null;
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
     * Output only. Whether an app supports policy for extensions.
     */
    isExtensionPolicySupported?: boolean | null;
    /**
     * Output only. Whether the app is only for Kiosk mode on ChromeOS devices
     */
    isKioskOnly?: boolean | null;
    /**
     * Output only. Whether the app or extension is a theme.
     */
    isTheme?: boolean | null;
    /**
     * Output only. Whether this app is enabled for Kiosk mode on ChromeOS devices
     */
    kioskEnabled?: boolean | null;
    /**
     * Output only. The version of this extension's manifest.
     */
    manifestVersion?: string | null;
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
    /**
     * Output only. Types of an item in the Chrome Web Store
     */
    type?: string | null;
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
   * Response containing counts for browsers that need attention.
   */
  export interface Schema$GoogleChromeManagementV1CountChromeBrowsersNeedingAttentionResponse {
    /**
     * Number of browsers that haven’t had any recent activity
     */
    noRecentActivityCount?: string | null;
    /**
     * Number of browsers that are pending an OS update
     */
    pendingBrowserUpdateCount?: string | null;
    /**
     * Number of browsers that have been recently enrolled
     */
    recentlyEnrolledCount?: string | null;
  }
  /**
   * Response contains a list of CrashEventCountByVersionPerDay which count the chrome crash at the certain date.
   */
  export interface Schema$GoogleChromeManagementV1CountChromeCrashEventsResponse {
    /**
     * Crash event counts grouped by date and browser version.
     */
    crashEventCounts?: Schema$GoogleChromeManagementV1CountChromeCrashEventsResponseCrashEventCount[];
  }
  /**
   * The `count` of the Chrome crash events at the `date`.
   */
  export interface Schema$GoogleChromeManagementV1CountChromeCrashEventsResponseCrashEventCount {
    /**
     * Browser version this is counting.
     */
    browserVersion?: string | null;
    /**
     * Total count of crash events.
     */
    count?: string | null;
    /**
     * Date of the crash event.
     */
    date?: Schema$GoogleTypeDate;
  }
  /**
   * Response containing a list of devices expiring in each month of a selected time frame. Counts are grouped by model and Auto Update Expiration date.
   */
  export interface Schema$GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse {
    /**
     * The list of reports sorted by auto update expiration date in ascending order.
     */
    deviceAueCountReports?: Schema$GoogleChromeManagementV1DeviceAueCountReport[];
  }
  /**
   * Response containing counts for devices that need attention.
   */
  export interface Schema$GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse {
    /**
     * Number of ChromeOS devices have not synced policies in the past 28 days.
     */
    noRecentPolicySyncCount?: string | null;
    /**
     * Number of ChromeOS devices that have not seen any user activity in the past 28 days.
     */
    noRecentUserActivityCount?: string | null;
    /**
     * Number of devices whose OS version is not compliant.
     */
    osVersionNotCompliantCount?: string | null;
    /**
     * Number of devices that are pending an OS update.
     */
    pendingUpdate?: string | null;
    /**
     * Number of devices that are unable to apply a policy due to an OS version mismatch.
     */
    unsupportedPolicyCount?: string | null;
  }
  /**
   * Response containing a list of devices with a specific type of hardware specification from the requested hardware type.
   */
  export interface Schema$GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse {
    /**
     * The DeviceHardwareCountReport for device cpu type (for example Intel(R) Core(TM) i7-10610U CPU @ 1.80GHz).
     */
    cpuReports?: Schema$GoogleChromeManagementV1DeviceHardwareCountReport[];
    /**
     * The DeviceHardwareCountReport for device memory amount in gigabytes (for example 16).
     */
    memoryReports?: Schema$GoogleChromeManagementV1DeviceHardwareCountReport[];
    /**
     * The DeviceHardwareCountReport for device model type (for example Acer C7 Chromebook).
     */
    modelReports?: Schema$GoogleChromeManagementV1DeviceHardwareCountReport[];
    /**
     * The DeviceHardwareCountReport for device storage amount in gigabytes (for example 128).
     */
    storageReports?: Schema$GoogleChromeManagementV1DeviceHardwareCountReport[];
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
   * Response containing a summary printing report for each printer from the specified organizational unit for the requested time interval.
   */
  export interface Schema$GoogleChromeManagementV1CountPrintJobsByPrinterResponse {
    /**
     * Pagination token for requesting the next page.
     */
    nextPageToken?: string | null;
    /**
     * List of PrinterReports matching request.
     */
    printerReports?: Schema$GoogleChromeManagementV1PrinterReport[];
    /**
     * Total number of printers matching request.
     */
    totalSize?: string | null;
  }
  /**
   * Response containing a summary printing report for each user that has initiated a print job with a printer from the specified organizational unit during the requested time interval.
   */
  export interface Schema$GoogleChromeManagementV1CountPrintJobsByUserResponse {
    /**
     * Pagination token for requesting the next page.
     */
    nextPageToken?: string | null;
    /**
     * Total number of users matching request.
     */
    totalSize?: string | null;
    /**
     * List of UserPrintReports matching request.
     */
    userPrintReports?: Schema$GoogleChromeManagementV1UserPrintReport[];
  }
  /**
   * CPU specifications for the device * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceCpuInfo](https://chromeenterprise.google/policies/#ReportDeviceCpuInfo) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_CPU_INFO
   */
  export interface Schema$GoogleChromeManagementV1CpuInfo {
    /**
     * Output only. Architecture type for the CPU. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceCpuInfo](https://chromeenterprise.google/policies/#ReportDeviceCpuInfo) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
     */
    architecture?: string | null;
    /**
     * Output only. Whether keylocker is configured.`TRUE` = Enabled; `FALSE` = disabled. Only reported if keylockerSupported = `TRUE`.
     */
    keylockerConfigured?: boolean | null;
    /**
     * Output only. Whether keylocker is supported.
     */
    keylockerSupported?: boolean | null;
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
   * Provides information about the status of the CPU. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceCpuInfo](https://chromeenterprise.google/policies/#ReportDeviceCpuInfo) * Data Collection Frequency: Every 10 minutes * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_CPU_REPORT
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
   * CPU temperature of a device. Sampled per CPU core in Celsius. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceCpuInfo](https://chromeenterprise.google/policies/#ReportDeviceCpuInfo) * Data Collection Frequency: Every 10 minutes * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
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
   * Device activity report. * Granular permission needed: TELEMETRY_API_DEVICE_ACTIVITY_REPORT
   */
  export interface Schema$GoogleChromeManagementV1DeviceActivityReport {
    /**
     * Output only. Device activity state.
     */
    deviceActivityState?: string | null;
    /**
     * Output only. Timestamp of when the report was collected.
     */
    reportTime?: string | null;
  }
  /**
   * Report for CountChromeDevicesPerAueDateResponse, contains the count of devices of a specific model and auto update expiration range.
   */
  export interface Schema$GoogleChromeManagementV1DeviceAueCountReport {
    /**
     * Enum value of month corresponding to the auto update expiration date in UTC time zone. If the device is already expired, this field is empty.
     */
    aueMonth?: string | null;
    /**
     * Int value of year corresponding to the Auto Update Expiration date in UTC time zone. If the device is already expired, this field is empty.
     */
    aueYear?: string | null;
    /**
     * Count of devices of this model.
     */
    count?: string | null;
    /**
     * Boolean value for whether or not the device has already expired.
     */
    expired?: boolean | null;
    /**
     * Public model name of the devices.
     */
    model?: string | null;
  }
  /**
   * Report for CountChromeDevicesPerHardwareSpecResponse, contains the count of devices with a unique hardware specification.
   */
  export interface Schema$GoogleChromeManagementV1DeviceHardwareCountReport {
    /**
     * Public name of the hardware specification.
     */
    bucket?: string | null;
    /**
     * Count of devices with a unique hardware specification.
     */
    count?: string | null;
  }
  /**
   * Details of a device requesting an extension, including the name of the device and the justification of the request.
   */
  export interface Schema$GoogleChromeManagementV1DeviceRequestingExtensionDetails {
    /**
     * The name of a device that has requested the extension.
     */
    deviceName?: string | null;
    /**
     * Request justification as entered by the user.
     */
    justification?: string | null;
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
   * Information of a display device.
   */
  export interface Schema$GoogleChromeManagementV1DisplayDevice {
    /**
     * Output only. Display height in millimeters.
     */
    displayHeightMm?: number | null;
    /**
     * Output only. Display device name.
     */
    displayName?: string | null;
    /**
     * Output only. Display width in millimeters.
     */
    displayWidthMm?: number | null;
    /**
     * Output only. EDID version.
     */
    edidVersion?: string | null;
    /**
     * Output only. Is display internal or not.
     */
    internal?: boolean | null;
    /**
     * Output only. Three letter manufacturer ID.
     */
    manufacturerId?: string | null;
    /**
     * Output only. Year of manufacture.
     */
    manufactureYear?: number | null;
    /**
     * Output only. Manufacturer product code.
     */
    modelId?: number | null;
    /**
     * Output only. Serial number.
     */
    serialNumber?: number | null;
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
     * Output only. Display device name.
     */
    displayName?: string | null;
    /**
     * Output only. EDID version.
     */
    edidVersion?: string | null;
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
    /**
     * Output only. Serial number.
     */
    serialNumber?: number | null;
  }
  /**
   * Response containing a list of print jobs.
   */
  export interface Schema$GoogleChromeManagementV1EnumeratePrintJobsResponse {
    /**
     * A token, which can be used in a subsequent request to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * List of requested print jobs.
     */
    printJobs?: Schema$GoogleChromeManagementV1PrintJob[];
    /**
     * Total number of print jobs matching request.
     */
    totalSize?: string | null;
  }
  /**
   * Response containing a list of devices that have requested the queried extension.
   */
  export interface Schema$GoogleChromeManagementV1FetchDevicesRequestingExtensionResponse {
    /**
     * Details of devices that have requested the queried extension.
     */
    deviceDetails?: Schema$GoogleChromeManagementV1DeviceRequestingExtensionDetails[];
    /**
     * Optional. Token to specify the next page in the list. Token expires after 1 day.
     */
    nextPageToken?: string | null;
    /**
     * Optional. Total number of devices in response.
     */
    totalSize?: number | null;
  }
  /**
   * Response containing a list of users that have requested the queried extension.
   */
  export interface Schema$GoogleChromeManagementV1FetchUsersRequestingExtensionResponse {
    /**
     * Token to specify the next page in the list.
     */
    nextPageToken?: string | null;
    /**
     * Total number of users in response.
     */
    totalSize?: number | null;
    /**
     * Details of users that have requested the queried extension.
     */
    userDetails?: Schema$GoogleChromeManagementV1UserRequestingExtensionDetails[];
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
   * Information of the graphics subsystem. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceGraphicsStatus](https://chromeenterprise.google/policies/#ReportDeviceGraphicsStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_GRAPHICS_INFO
   */
  export interface Schema$GoogleChromeManagementV1GraphicsInfo {
    /**
     * Output only. Information about the graphics adapter (GPU).
     */
    adapterInfo?: Schema$GoogleChromeManagementV1GraphicsAdapterInfo;
    /**
     * Output only. Information about the display(s) of the device.
     */
    displayDevices?: Schema$GoogleChromeManagementV1DisplayDevice[];
    /**
     * Output only. Is ePrivacy screen supported or not.
     */
    eprivacySupported?: boolean | null;
    /**
     * Output only. Information about the internal touch screen(s) of the device.
     */
    touchScreenInfo?: Schema$GoogleChromeManagementV1TouchScreenInfo;
  }
  /**
   * Information of the graphics subsystem. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceGraphicsInfo](https://chromeenterprise.google/policies/#ReportDeviceGraphicsInfo) * Data Collection Frequency: 3 hours. * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_GRAPHICS_REPORT
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
   * Heartbeat status report of a device. * Available for Kiosks * This field provides online/offline/unknown status of a device and will only be included if the status has changed (e.g. Online -\> Offline) * Data for this field is controlled via policy: [HeartbeatEnabled](https://chromeenterprise.google/policies/#HeartbeatEnabled) [More Info](https://support.google.com/chrome/a/answer/6179663#:~:text=On%20the%20Chrome,device%20status%20alerts) * Heartbeat Frequency: 2 mins * Note: If a device goes offline, it can take up to 12 minutes for the online status of the device to be updated * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: N/A * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_DEVICE_ACTIVITY_REPORT
   */
  export interface Schema$GoogleChromeManagementV1HeartbeatStatusReport {
    /**
     * Timestamp of when status changed was detected
     */
    reportTime?: string | null;
    /**
     * State the device changed to
     */
    state?: string | null;
  }
  /**
   * Data that describes the result of the HTTPS latency diagnostics routine, with the HTTPS requests issued to Google websites.
   */
  export interface Schema$GoogleChromeManagementV1HttpsLatencyRoutineData {
    /**
     * Output only. HTTPS latency if routine succeeded or failed because of HIGH_LATENCY or VERY_HIGH_LATENCY.
     */
    latency?: string | null;
    /**
     * Output only. HTTPS latency routine problem if a problem occurred.
     */
    problem?: string | null;
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
    /**
     * Output only. If available, the risk assessment data about this extension.
     */
    riskAssessment?: Schema$GoogleChromeManagementV1RiskAssessmentData;
  }
  /**
   * Kiosk app status report of a device. * Available for Kiosks * This field provides the app id and version number running on a kiosk device and the timestamp of when the report was last updated * Data for this field is controlled via policy: [ReportDeviceSessionStatus](https://chromeenterprise.google/policies/#ReportDeviceSessionStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_APPS_REPORT
   */
  export interface Schema$GoogleChromeManagementV1KioskAppStatusReport {
    /**
     * App id of kiosk app for example "mdmkkicfmmkgmpkmkdikhlbggogpicma"
     */
    appId?: string | null;
    /**
     * App version number of kiosk app for example "1.10.118"
     */
    appVersion?: string | null;
    /**
     * Timestamp of when report was collected
     */
    reportTime?: string | null;
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
   * Response message for listing telemetry events for a customer.
   */
  export interface Schema$GoogleChromeManagementV1ListTelemetryEventsResponse {
    /**
     * Token to specify next page in the list.
     */
    nextPageToken?: string | null;
    /**
     * Telemetry events returned in the response.
     */
    telemetryEvents?: Schema$GoogleChromeManagementV1TelemetryEvent[];
  }
  /**
   * Response message for listing notification configs for a customer.
   */
  export interface Schema$GoogleChromeManagementV1ListTelemetryNotificationConfigsResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The telemetry notification configs from the specified customer.
     */
    telemetryNotificationConfigs?: Schema$GoogleChromeManagementV1TelemetryNotificationConfig[];
  }
  /**
   * Response message for listing telemetry users for a customer.
   */
  export interface Schema$GoogleChromeManagementV1ListTelemetryUsersResponse {
    /**
     * Token to specify next page in the list.
     */
    nextPageToken?: string | null;
    /**
     * Telemetry users returned in the response.
     */
    telemetryUsers?: Schema$GoogleChromeManagementV1TelemetryUser[];
  }
  /**
   * Memory information of a device. * This field has both telemetry and device information: - `totalRamBytes` - Device information - `availableRamBytes` - Telemetry information - `totalMemoryEncryption` - Device information * Data for this field is controlled via policy: [ReportDeviceMemoryInfo](https://chromeenterprise.google/policies/#ReportDeviceMemoryInfo) * Data Collection Frequency: - `totalRamBytes` - Only at upload - `availableRamBytes` - Every 10 minutes - `totalMemoryEncryption` - at device startup * Default Data Reporting Frequency: - `totalRamBytes` - 3 hours - `availableRamBytes` - 3 hours - `totalMemoryEncryption` - at device startup - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: only for `totalMemoryEncryption` * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_MEMORY_INFO
   */
  export interface Schema$GoogleChromeManagementV1MemoryInfo {
    /**
     * Output only. Amount of available RAM in bytes.
     */
    availableRamBytes?: string | null;
    /**
     * Output only. Total memory encryption info for the device.
     */
    totalMemoryEncryption?: Schema$GoogleChromeManagementV1TotalMemoryEncryptionInfo;
    /**
     * Output only. Total RAM in bytes.
     */
    totalRamBytes?: string | null;
  }
  /**
   * Contains samples of memory status reports. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceMemoryInfo](https://chromeenterprise.google/policies/#ReportDeviceMemoryInfo) * Data Collection Frequency: Only at upload, SystemRamFreeByes is collected every 10 minutes * Default Data Reporting Frequency: Every 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_MEMORY_REPORT
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
   * Network bandwidth report. * Granular permission needed: TELEMETRY_API_NETWORK_REPORT
   */
  export interface Schema$GoogleChromeManagementV1NetworkBandwidthReport {
    /**
     * Output only. Download speed in kilobits per second.
     */
    downloadSpeedKbps?: string | null;
    /**
     * Output only. Timestamp of when the report was collected.
     */
    reportTime?: string | null;
  }
  /**
   * Details about the network device. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportNetworkDeviceConfiguration](https://chromeenterprise.google/policies/#ReportNetworkDeviceConfiguration) * Data Collection Frequency: At device startup * Default Data Reporting Frequency: At device startup - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A
   */
  export interface Schema$GoogleChromeManagementV1NetworkDevice {
    /**
     * Output only. The integrated circuit card ID associated with the device's sim card.
     */
    iccid?: string | null;
    /**
     * Output only. IMEI (if applicable) of the corresponding network device.
     */
    imei?: string | null;
    /**
     * Output only. MAC address (if applicable) of the corresponding network device.
     */
    macAddress?: string | null;
    /**
     * Output only. The mobile directory number associated with the device's sim card.
     */
    mdn?: string | null;
    /**
     * Output only. MEID (if applicable) of the corresponding network device.
     */
    meid?: string | null;
    /**
     * Output only. Network device type.
     */
    type?: string | null;
  }
  /**
   * Network testing results to determine the health of the device's network connection, for example whether the HTTPS latency is high or normal. * Granular permission needed: TELEMETRY_API_NETWORK_REPORT
   */
  export interface Schema$GoogleChromeManagementV1NetworkDiagnosticsReport {
    /**
     * Output only. HTTPS latency test data.
     */
    httpsLatencyData?: Schema$GoogleChromeManagementV1HttpsLatencyRoutineData;
    /**
     * Output only. Timestamp of when the diagnostics were collected.
     */
    reportTime?: string | null;
  }
  /**
   * Network device information. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportNetworkDeviceConfiguration](https://chromeenterprise.google/policies/#ReportNetworkDeviceConfiguration) * Data Collection Frequency: At device startup * Default Data Reporting Frequency: At device startup - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_NETWORK_INFO
   */
  export interface Schema$GoogleChromeManagementV1NetworkInfo {
    /**
     * Output only. List of network devices.
     */
    networkDevices?: Schema$GoogleChromeManagementV1NetworkDevice[];
  }
  /**
   * State of visible/configured networks. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportNetworkStatus](https://chromeenterprise.google/policies/#ReportNetworkStatus) * Data Collection Frequency: 60 minutes * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: Yes * Granular permission needed: TELEMETRY_API_NETWORK_REPORT
   */
  export interface Schema$GoogleChromeManagementV1NetworkStatusReport {
    /**
     * Output only. Current connection state of the network.
     */
    connectionState?: string | null;
    /**
     * Output only. Network connection type.
     */
    connectionType?: string | null;
    /**
     * Output only. Whether the wifi encryption key is turned off.
     */
    encryptionOn?: boolean | null;
    /**
     * Output only. Gateway IP address.
     */
    gatewayIpAddress?: string | null;
    /**
     * Output only. Network connection guid.
     */
    guid?: string | null;
    /**
     * Output only. LAN IP address.
     */
    lanIpAddress?: string | null;
    /**
     * Output only. Receiving bit rate measured in Megabits per second.
     */
    receivingBitRateMbps?: string | null;
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
    /**
     * Output only. Transmission bit rate measured in Megabits per second.
     */
    transmissionBitRateMbps?: string | null;
    /**
     * Output only. Transmission power measured in decibels.
     */
    transmissionPowerDbm?: number | null;
    /**
     * Output only. Wifi link quality. Value ranges from [0, 70]. 0 indicates no signal and 70 indicates a strong signal.
     */
    wifiLinkQuality?: string | null;
    /**
     * Output only. Wifi power management enabled
     */
    wifiPowerManagementEnabled?: boolean | null;
  }
  /**
   * Contains information regarding the current OS update status. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceOsUpdateStatus](https://chromeenterprise.google/policies/#ReportDeviceOsUpdateStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_OS_REPORT
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
   * Peripherals report. * Granular permission needed: TELEMETRY_API_PERIPHERALS_REPORT
   */
  export interface Schema$GoogleChromeManagementV1PeripheralsReport {
    /**
     * Output only. Timestamp of when the report was collected.
     */
    reportTime?: string | null;
    /**
     * Reports of all usb connected devices.
     */
    usbPeripheralReport?: Schema$GoogleChromeManagementV1UsbPeripheralReport[];
  }
  /**
   * Report for CountPrintJobsByPrinter, contains statistics on printer usage. Contains the total number of print jobs initiated with this printer, the number of users and the number of devices that have initiated at least one print job with this printer.
   */
  export interface Schema$GoogleChromeManagementV1PrinterReport {
    /**
     * Number of chrome devices that have been used to send print jobs to the specified printer.
     */
    deviceCount?: string | null;
    /**
     * Number of print jobs sent to the printer.
     */
    jobCount?: string | null;
    /**
     * Printer name.
     */
    printer?: string | null;
    /**
     * Printer API ID.
     */
    printerId?: string | null;
    /**
     * Printer model.
     */
    printerModel?: string | null;
    /**
     * Number of users that have sent print jobs to the printer.
     */
    userCount?: string | null;
  }
  /**
   * Represents a request to print a document that has been submitted to a printer.
   */
  export interface Schema$GoogleChromeManagementV1PrintJob {
    /**
     * Color mode.
     */
    colorMode?: string | null;
    /**
     * Print job completion timestamp.
     */
    completeTime?: string | null;
    /**
     * Number of copies.
     */
    copyCount?: number | null;
    /**
     * Print job creation timestamp.
     */
    createTime?: string | null;
    /**
     * Number of pages in the document.
     */
    documentPageCount?: number | null;
    /**
     * Duplex mode.
     */
    duplexMode?: string | null;
    /**
     * Unique ID of the print job.
     */
    id?: string | null;
    /**
     * Name of the printer used for printing.
     */
    printer?: string | null;
    /**
     * API ID of the printer used for printing.
     */
    printerId?: string | null;
    /**
     * The final state of the job.
     */
    state?: string | null;
    /**
     * The title of the document.
     */
    title?: string | null;
    /**
     * The primary e-mail address of the user who submitted the print job.
     */
    userEmail?: string | null;
    /**
     * The unique Directory API ID of the user who submitted the print job.
     */
    userId?: string | null;
  }
  /**
   * Risk assessment for a Chrome extension.
   */
  export interface Schema$GoogleChromeManagementV1RiskAssessment {
    /**
     * Risk assessment for the extension. Currently, this is a numerical value, and its interpretation is specific to each risk assessment provider.
     */
    assessment?: string | null;
    /**
     * A URL that a user can navigate to for more information about the risk assessment.
     */
    detailsUrl?: string | null;
    /**
     * The version of the extension that this assessment applies to.
     */
    version?: string | null;
  }
  /**
   * Risk assessment data about an extension/app.
   */
  export interface Schema$GoogleChromeManagementV1RiskAssessmentData {
    /**
     * Individual risk assessments.
     */
    entries?: Schema$GoogleChromeManagementV1RiskAssessmentEntry[];
    /**
     * Overall assessed risk level across all entries. This will be the highest risk level from all entries.
     */
    overallRiskLevel?: string | null;
  }
  /**
   * One risk assessment entry.
   */
  export interface Schema$GoogleChromeManagementV1RiskAssessmentEntry {
    /**
     * The risk assessment provider from which this entry comes from.
     */
    provider?: string | null;
    /**
     * The details of the provider's risk assessment.
     */
    riskAssessment?: Schema$GoogleChromeManagementV1RiskAssessment;
    /**
     * The bucketed risk level for the risk assessment.
     */
    riskLevel?: string | null;
  }
  /**
   * Runtime counters retrieved from CPU. Currently the runtime counters telemetry is only supported by Intel vPro PSR on Gen 14+.
   */
  export interface Schema$GoogleChromeManagementV1RuntimeCountersReport {
    /**
     * Number of times that the device has entered into the hibernation state. Currently obtained via the PSR, count from S0-\>S4.
     */
    enterHibernationCount?: string | null;
    /**
     * Number of times that the device has entered into the power-off state. Currently obtained via the PSR, count from S0-\>S5.
     */
    enterPoweroffCount?: string | null;
    /**
     * Number of times that the device has entered into the sleep state. Currently obtained via the PSR, count from S0-\>S3.
     */
    enterSleepCount?: string | null;
    /**
     * Timestamp when the report was collected.
     */
    reportTime?: string | null;
    /**
     * Total lifetime runtime. Currently always S0 runtime from Intel vPro PSR.
     */
    uptimeRuntimeDuration?: string | null;
  }
  /**
   * Status data for storage. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceStorageStatus](https://chromeenterprise.google/policies/#ReportDeviceStorageStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_STORAGE_INFO
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
   * Status data for storage. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceStorageStatus](https://chromeenterprise.google/policies/#ReportDeviceStorageStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_STORAGE_REPORT
   */
  export interface Schema$GoogleChromeManagementV1StorageStatusReport {
    /**
     * Output only. Reports on disk.
     */
    disk?: Schema$GoogleChromeManagementV1DiskInfo[];
    /**
     * Output only. Timestamp of when the sample was collected on device
     */
    reportTime?: string | null;
  }
  /**
   * App installation data.
   */
  export interface Schema$GoogleChromeManagementV1TelemetryAppInstallEvent {
    /**
     * App id. For PWAs this is the start URL, and for extensions this is the extension id.
     */
    appId?: string | null;
    /**
     * App installation reason.
     */
    appInstallReason?: string | null;
    /**
     * App installation source.
     */
    appInstallSource?: string | null;
    /**
     * App installation time depending on the app lifecycle.
     */
    appInstallTime?: string | null;
    /**
     * Type of app.
     */
    appType?: string | null;
  }
  /**
   * App launch data.
   */
  export interface Schema$GoogleChromeManagementV1TelemetryAppLaunchEvent {
    /**
     * App id. For PWAs this is the start URL, and for extensions this is the extension id.
     */
    appId?: string | null;
    /**
     * App launch source.
     */
    appLaunchSource?: string | null;
    /**
     * Type of app.
     */
    appType?: string | null;
  }
  /**
   * App uninstall data.
   */
  export interface Schema$GoogleChromeManagementV1TelemetryAppUninstallEvent {
    /**
     * App id. For PWAs this is the start URL, and for extensions this is the extension id.
     */
    appId?: string | null;
    /**
     * Type of app.
     */
    appType?: string | null;
    /**
     * App uninstall source.
     */
    appUninstallSource?: string | null;
  }
  /**
   * `TelemetryAudioSevereUnderrunEvent` is triggered when a audio devices run out of buffer data for more than 5 seconds. * Granular permission needed: TELEMETRY_API_AUDIO_REPORT
   */
  export interface Schema$GoogleChromeManagementV1TelemetryAudioSevereUnderrunEvent {}
  /**
   * Telemetry data collected from a managed device. * Granular permission needed: TELEMETRY_API_DEVICE
   */
  export interface Schema$GoogleChromeManagementV1TelemetryDevice {
    /**
     * Output only. App reports collected periodically sorted in a decreasing order of report_time.
     */
    appReport?: Schema$GoogleChromeManagementV1AppReport[];
    /**
     * Output only. Audio reports collected periodically sorted in a decreasing order of report_time.
     */
    audioStatusReport?: Schema$GoogleChromeManagementV1AudioStatusReport[];
    /**
     * Output only. Information on battery specs for the device.
     */
    batteryInfo?: Schema$GoogleChromeManagementV1BatteryInfo[];
    /**
     * Output only. Battery reports collected periodically.
     */
    batteryStatusReport?: Schema$GoogleChromeManagementV1BatteryStatusReport[];
    /**
     * Output only. Boot performance reports of the device.
     */
    bootPerformanceReport?: Schema$GoogleChromeManagementV1BootPerformanceReport[];
    /**
     * Output only. Information regarding CPU specs for the device.
     */
    cpuInfo?: Schema$GoogleChromeManagementV1CpuInfo[];
    /**
     * Output only. CPU status reports collected periodically sorted in a decreasing order of report_time.
     */
    cpuStatusReport?: Schema$GoogleChromeManagementV1CpuStatusReport[];
    /**
     * Output only. Google Workspace Customer whose enterprise enrolled the device.
     */
    customer?: string | null;
    /**
     * Output only. The unique Directory API ID of the device. This value is the same as the Admin Console's Directory API ID in the ChromeOS Devices tab
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
     * Output only. Heartbeat status report containing timestamps periodically sorted in decreasing order of report_time
     */
    heartbeatStatusReport?: Schema$GoogleChromeManagementV1HeartbeatStatusReport[];
    /**
     * Output only. Kiosk app status report for the kiosk device
     */
    kioskAppStatusReport?: Schema$GoogleChromeManagementV1KioskAppStatusReport[];
    /**
     * Output only. Information regarding memory specs for the device.
     */
    memoryInfo?: Schema$GoogleChromeManagementV1MemoryInfo;
    /**
     * Output only. Memory status reports collected periodically sorted decreasing by report_time.
     */
    memoryStatusReport?: Schema$GoogleChromeManagementV1MemoryStatusReport[];
    /**
     * Output only. Resource name of the device.
     */
    name?: string | null;
    /**
     * Output only. Network bandwidth reports collected periodically sorted in a decreasing order of report_time.
     */
    networkBandwidthReport?: Schema$GoogleChromeManagementV1NetworkBandwidthReport[];
    /**
     * Output only. Network diagnostics collected periodically.
     */
    networkDiagnosticsReport?: Schema$GoogleChromeManagementV1NetworkDiagnosticsReport[];
    /**
     * Output only. Network devices information.
     */
    networkInfo?: Schema$GoogleChromeManagementV1NetworkInfo;
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
     * Output only. Peripherals reports collected periodically sorted in a decreasing order of report_time.
     */
    peripheralsReport?: Schema$GoogleChromeManagementV1PeripheralsReport[];
    /**
     * Output only. Runtime counters reports collected device lifetime runtime, as well as the counts of S0-\>S3, S0-\>S4, and S0-\>S5 transitions, meaning entering into sleep, hibernation, and power-off states
     */
    runtimeCountersReport?: Schema$GoogleChromeManagementV1RuntimeCountersReport[];
    /**
     * Output only. Device serial number. This value is the same as the Admin Console's Serial Number in the ChromeOS Devices tab.
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
    /**
     * Output only. Information on Thunderbolt bus.
     */
    thunderboltInfo?: Schema$GoogleChromeManagementV1ThunderboltInfo[];
  }
  /**
   * Information about a device associated with telemetry data. * Granular Permission needed: TELEMETRY_API_DEVICE
   */
  export interface Schema$GoogleChromeManagementV1TelemetryDeviceInfo {
    /**
     * Output only. The unique Directory API ID of the device. This value is the same as the Admin Console's Directory API ID in the ChromeOS Devices tab.
     */
    deviceId?: string | null;
    /**
     * Output only. Organization unit ID of the device.
     */
    orgUnitId?: string | null;
  }
  /**
   * Telemetry data reported by a managed device.
   */
  export interface Schema$GoogleChromeManagementV1TelemetryEvent {
    /**
     * Output only. Payload for app install event. Present only when `event_type` is `APP_INSTALLED`.
     */
    appInstallEvent?: Schema$GoogleChromeManagementV1TelemetryAppInstallEvent;
    /**
     * Output only. Payload for app launch event.Present only when `event_type` is `APP_LAUNCHED`.
     */
    appLaunchEvent?: Schema$GoogleChromeManagementV1TelemetryAppLaunchEvent;
    /**
     * Output only. Payload for app uninstall event. Present only when `event_type` is `APP_UNINSTALLED`.
     */
    appUninstallEvent?: Schema$GoogleChromeManagementV1TelemetryAppUninstallEvent;
    /**
     * Output only. Payload for audio severe underrun event. Present only when the `event_type` field is `AUDIO_SEVERE_UNDERRUN`.
     */
    audioSevereUnderrunEvent?: Schema$GoogleChromeManagementV1TelemetryAudioSevereUnderrunEvent;
    /**
     * Output only. Information about the device associated with the event.
     */
    device?: Schema$GoogleChromeManagementV1TelemetryDeviceInfo;
    /**
     * The event type of the current event.
     */
    eventType?: string | null;
    /**
     * Output only. Payload for HTTPS latency change event. Present only when `event_type` is `NETWORK_HTTPS_LATENCY_CHANGE`.
     */
    httpsLatencyChangeEvent?: Schema$GoogleChromeManagementV1TelemetryHttpsLatencyChangeEvent;
    /**
     * Output only. Resource name of the event.
     */
    name?: string | null;
    /**
     * Output only. Payload for network connection state change event. Present only when `event_type` is `NETWORK_STATE_CHANGE`.
     */
    networkStateChangeEvent?: Schema$GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEvent;
    /**
     * Output only. Payload for OS crash event. Present only when `event_type` is `OS_CRASH`.
     */
    osCrashEvent?: Schema$GoogleChromeManagementV1TelemetryOsCrashEvent;
    /**
     * Timestamp that represents when the event was reported.
     */
    reportTime?: string | null;
    /**
     * Output only. Payload for usb peripherals event. Present only when the `event_type` field is either `USB_ADDED` or `USB_REMOVED`.
     */
    usbPeripheralsEvent?: Schema$GoogleChromeManagementV1TelemetryUsbPeripheralsEvent;
    /**
     * Output only. Information about the user associated with the event.
     */
    user?: Schema$GoogleChromeManagementV1TelemetryUserInfo;
    /**
     * Output only. Payload for VPN connection state change event. Present only when `event_type` is `VPN_CONNECTION_STATE_CHANGE`.
     */
    vpnConnectionStateChangeEvent?: Schema$GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEvent;
    /**
     * Output only. Payload for WiFi signal strength events. Present only when `event_type` is `WIFI_SIGNAL_STRENGTH_LOW` or `WIFI_SIGNAL_STRENGTH_RECOVERED`.
     */
    wifiSignalStrengthEvent?: Schema$GoogleChromeManagementV1TelemetryNetworkSignalStrengthEvent;
  }
  /**
   * Configures how the telemetry events should be filtered.
   */
  export interface Schema$GoogleChromeManagementV1TelemetryEventNotificationFilter {
    /**
     * Only sends the notifications for events of these types. Must not be empty.
     */
    eventTypes?: string[] | null;
  }
  /**
   * Https latency routine is run periodically and `TelemetryHttpsLatencyChangeEvent` is triggered if a latency problem was detected or if the device has recovered from a latency problem. * Granular permission needed: TELEMETRY_API_NETWORK_REPORT
   */
  export interface Schema$GoogleChromeManagementV1TelemetryHttpsLatencyChangeEvent {
    /**
     * HTTPS latency routine data that triggered the event.
     */
    httpsLatencyRoutineData?: Schema$GoogleChromeManagementV1HttpsLatencyRoutineData;
    /**
     * Current HTTPS latency state.
     */
    httpsLatencyState?: string | null;
  }
  /**
   * `TelemetryNetworkConnectionStateChangeEvent` is triggered on network connection state changes. * Granular permission needed: TELEMETRY_API_NETWORK_REPORT
   */
  export interface Schema$GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEvent {
    /**
     * Current connection state of the network.
     */
    connectionState?: string | null;
    /**
     * Unique identifier of the network.
     */
    guid?: string | null;
  }
  /**
   * `TelemetryNetworkSignalStrengthEvent` is triggered on WiFi signal strength events. * Granular permission needed: TELEMETRY_API_NETWORK_REPORT
   */
  export interface Schema$GoogleChromeManagementV1TelemetryNetworkSignalStrengthEvent {
    /**
     * Unique identifier of the network.
     */
    guid?: string | null;
    /**
     * Signal strength RSSI value.
     */
    signalStrengthDbm?: number | null;
  }
  /**
   * Configuration to receive notifications of telemetry data.
   */
  export interface Schema$GoogleChromeManagementV1TelemetryNotificationConfig {
    /**
     * Output only. Google Workspace customer that owns the resource.
     */
    customer?: string | null;
    /**
     * Only send notifications for telemetry data matching this filter.
     */
    filter?: Schema$GoogleChromeManagementV1TelemetryNotificationFilter;
    /**
     * The pubsub topic to which notifications are published to.
     */
    googleCloudPubsubTopic?: string | null;
    /**
     * Output only. Resource name of the notification configuration.
     */
    name?: string | null;
  }
  /**
   * Configures how the telemetry data should be filtered.
   */
  export interface Schema$GoogleChromeManagementV1TelemetryNotificationFilter {
    /**
     * If set, only sends notifications for telemetry data coming from this device.
     */
    deviceId?: string | null;
    /**
     * If set, only sends notifications for telemetry data coming from devices in this org unit.
     */
    deviceOrgUnitId?: string | null;
    /**
     * Only sends notifications for the telemetry events matching this filter.
     */
    telemetryEventNotificationFilter?: Schema$GoogleChromeManagementV1TelemetryEventNotificationFilter;
    /**
     * If set, only sends notifications for telemetry data coming from devices owned by this user.
     */
    userEmail?: string | null;
    /**
     * If set, only sends notifications for telemetry data coming from devices owned by users in this org unit.
     */
    userOrgUnitId?: string | null;
  }
  /**
   * OS crash data.
   */
  export interface Schema$GoogleChromeManagementV1TelemetryOsCrashEvent {
    /**
     * Crash id.
     */
    crashId?: string | null;
    /**
     * Crash type.
     */
    crashType?: string | null;
    /**
     * Session type.
     */
    sessionType?: string | null;
  }
  /**
   * `TelemetryUsbPeripheralsEvent` is triggered USB devices are either added or removed. * Granular permission needed: TELEMETRY_API_PERIPHERALS_REPORT
   */
  export interface Schema$GoogleChromeManagementV1TelemetryUsbPeripheralsEvent {
    /**
     * List of usb devices that were either added or removed.
     */
    usbPeripheralReport?: Schema$GoogleChromeManagementV1UsbPeripheralReport[];
  }
  /**
   * Telemetry data collected from a managed user. * Granular permission needed: TELEMETRY_API_USER
   */
  export interface Schema$GoogleChromeManagementV1TelemetryUser {
    /**
     * G Suite Customer whose enterprise enrolled the device.
     */
    customer?: string | null;
    /**
     * Resource name of the user.
     */
    name?: string | null;
    /**
     * Organization unit of the user.
     */
    orgUnitId?: string | null;
    /**
     * Telemetry data collected from a managed user and device.
     */
    userDevice?: Schema$GoogleChromeManagementV1TelemetryUserDevice[];
    /**
     * Email address of the user.
     */
    userEmail?: string | null;
    /**
     * Directory ID of the user.
     */
    userId?: string | null;
  }
  /**
   * Telemetry data collected for a managed user and device. * Granular permission needed: TELEMETRY_API_DEVICE
   */
  export interface Schema$GoogleChromeManagementV1TelemetryUserDevice {
    /**
     * Output only. App reports collected periodically sorted in a decreasing order of report_time.
     */
    appReport?: Schema$GoogleChromeManagementV1AppReport[];
    /**
     * Output only. Audio reports collected periodically sorted in a decreasing order of report_time.
     */
    audioStatusReport?: Schema$GoogleChromeManagementV1AudioStatusReport[];
    /**
     * Output only. Device activity reports collected periodically sorted in a decreasing order of report_time.
     */
    deviceActivityReport?: Schema$GoogleChromeManagementV1DeviceActivityReport[];
    /**
     * The unique Directory API ID of the device. This value is the same as the Admin Console's Directory API ID in the ChromeOS Devices tab.
     */
    deviceId?: string | null;
    /**
     * Output only. Network bandwidth reports collected periodically sorted in a decreasing order of report_time.
     */
    networkBandwidthReport?: Schema$GoogleChromeManagementV1NetworkBandwidthReport[];
    /**
     * Output only. Peripherals reports collected periodically sorted in a decreasing order of report_time.
     */
    peripheralsReport?: Schema$GoogleChromeManagementV1PeripheralsReport[];
  }
  /**
   * Information about a user associated with telemetry data. * Granular permission needed: TELEMETRY_API_USER
   */
  export interface Schema$GoogleChromeManagementV1TelemetryUserInfo {
    /**
     * Output only. User's email.
     */
    email?: string | null;
    /**
     * Output only. Organization unit ID of the user.
     */
    orgUnitId?: string | null;
  }
  /**
   * Thunderbolt bus info. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceSecurityStatus](https://chromeenterprise.google/policies/#ReportDeviceSecurityStatus) * Data Collection Frequency: At device startup * Default Data Reporting Frequency: At device startup - Policy Controlled: No * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_BUS_DEVICE_INFO
   */
  export interface Schema$GoogleChromeManagementV1ThunderboltInfo {
    /**
     * Security level of the Thunderbolt bus.
     */
    securityLevel?: string | null;
  }
  /**
   * Memory encryption information of a device. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceMemoryInfo](https://chromeenterprise.google/policies/#ReportDeviceMemoryInfo) * Data Collection Frequency: At device startup * Default Data Reporting Frequency: At device startup - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A
   */
  export interface Schema$GoogleChromeManagementV1TotalMemoryEncryptionInfo {
    /**
     * Memory encryption algorithm.
     */
    encryptionAlgorithm?: string | null;
    /**
     * The state of memory encryption on the device.
     */
    encryptionState?: string | null;
    /**
     * The length of the encryption keys.
     */
    keyLength?: string | null;
    /**
     * The maximum number of keys that can be used for encryption.
     */
    maxKeys?: string | null;
  }
  /**
   * Information of an internal touch screen device.
   */
  export interface Schema$GoogleChromeManagementV1TouchScreenDevice {
    /**
     * Output only. Touch screen device display name.
     */
    displayName?: string | null;
    /**
     * Output only. Touch screen device is stylus capable or not.
     */
    stylusCapable?: boolean | null;
    /**
     * Output only. Number of touch points supported on the device.
     */
    touchPointCount?: number | null;
  }
  /**
   * Information on the device touch screen.
   */
  export interface Schema$GoogleChromeManagementV1TouchScreenInfo {
    /**
     * Output only. List of the internal touch screen devices.
     */
    devices?: Schema$GoogleChromeManagementV1TouchScreenDevice[];
    /**
     * Output only. Touchpad library name used by the input stack.
     */
    touchpadLibrary?: string | null;
  }
  /**
   * USB connected peripheral report.
   */
  export interface Schema$GoogleChromeManagementV1UsbPeripheralReport {
    /**
     * Output only. Categories the device belongs to https://www.usb.org/defined-class-codes
     */
    categories?: string[] | null;
    /**
     * Output only. Class ID https://www.usb.org/defined-class-codes
     */
    classId?: number | null;
    /**
     * Output only. Firmware version
     */
    firmwareVersion?: string | null;
    /**
     * Output only. Device name, model name, or product name
     */
    name?: string | null;
    /**
     * Output only. Product ID
     */
    pid?: number | null;
    /**
     * Output only. Subclass ID https://www.usb.org/defined-class-codes
     */
    subclassId?: number | null;
    /**
     * Output only. Vendor name
     */
    vendor?: string | null;
    /**
     * Output only. Vendor ID
     */
    vid?: number | null;
  }
  /**
   * Report for CountPrintJobsByUser, contains printing statistics for a user. Contains the number of printers, the number of devices used to initiate print jobs, and the number of print jobs initiated.
   */
  export interface Schema$GoogleChromeManagementV1UserPrintReport {
    /**
     * Number of chrome devices that have been used to initiate print jobs by the user.
     */
    deviceCount?: string | null;
    /**
     * Number of print jobs initiated by the user.
     */
    jobCount?: string | null;
    /**
     * Number of printers used by the user.
     */
    printerCount?: string | null;
    /**
     * The primary e-mail address of the user.
     */
    userEmail?: string | null;
    /**
     * The unique Directory API ID of the user.
     */
    userId?: string | null;
  }
  /**
   * Details of a user requesting an extension, including the email and the justification.
   */
  export interface Schema$GoogleChromeManagementV1UserRequestingExtensionDetails {
    /**
     * The e-mail address of a user that has requested the extension.
     */
    email?: string | null;
    /**
     * Request justification as entered by the user.
     */
    justification?: string | null;
  }
  /**
   * Information of public key associated with a Chrome browser profile.
   */
  export interface Schema$GoogleChromeManagementVersionsV1AttestationCredential {
    /**
     * Output only. Latest rotation timestamp of the public key rotation.
     */
    keyRotationTime?: string | null;
    /**
     * Output only. Trust level of the public key.
     */
    keyTrustLevel?: string | null;
    /**
     * Output only. Type of the public key.
     */
    keyType?: string | null;
    /**
     * Output only. Value of the public key.
     */
    publicKey?: string | null;
  }
  /**
   * A certificate provisioning process.
   */
  export interface Schema$GoogleChromeManagementVersionsV1CertificateProvisioningProcess {
    /**
     * Output only. The client certificate is being provisioned for a ChromeOS device. This contains information about the device.
     */
    chromeOsDevice?: Schema$GoogleChromeManagementVersionsV1ChromeOsDevice;
    /**
     * Output only. The client certificate is being provisioned for a ChromeOS user. This contains information about the current user session.
     */
    chromeOsUserSession?: Schema$GoogleChromeManagementVersionsV1ChromeOsUserSession;
    /**
     * Output only. A message describing why this `CertificateProvisioningProcess` has failed. Presence of this field indicates that the `CertificateProvisioningProcess` has failed.
     */
    failureMessage?: string | null;
    /**
     * Output only. The CA connection is a generic CA connection.
     */
    genericCaConnection?: Schema$GoogleChromeManagementVersionsV1GenericCaConnection;
    /**
     * Output only. The profile is a generic certificate provisioning profile.
     */
    genericProfile?: Schema$GoogleChromeManagementVersionsV1GenericProfile;
    /**
     * Output only. The issued certificate for this `CertificateProvisioningProcess` in PEM format.
     */
    issuedCertificate?: string | null;
    /**
     * Identifier. Resource name of the `CertificateProvisioningProcess`. The name pattern is given as `customers/{customer\}/certificateProvisioningProcesses/{certificate_provisioning_process\}` with `{customer\}` being the obfuscated customer id and `{certificate_provisioning_process\}` being the certificate provisioning process id.
     */
    name?: string | null;
    /**
     * Output only. The ID of the certificate provisioning profile.
     */
    provisioningProfileId?: string | null;
    /**
     * Output only. The CA connection is a SCEP CA connection.
     */
    scepCaConnection?: Schema$GoogleChromeManagementVersionsV1ScepCaConnection;
    /**
     * Output only. The profile is a SCEP certificate provisioning profile.
     */
    scepProfile?: Schema$GoogleChromeManagementVersionsV1ScepProfile;
    /**
     * Output only. The signature of `signature_algorithm`, generated using the client's private key using `signature_algorithm`. This field is only present after the `SignData` operation has finished.
     */
    signature?: string | null;
    /**
     * Output only. The signature algorithm that the client and backend components use when processing `sign_data`. If the `profile_type` is a `GenericProfile`, this field will only be present after the `SignData` operation was initiated. If the `profile_type` is a `ScepProfile`, the field will always be present.
     */
    signatureAlgorithm?: string | null;
    /**
     * Output only. The data that the client was asked to sign. This field is only present after the `SignData` operation has been initiated.
     */
    signData?: string | null;
    /**
     * Output only. Server-generated timestamp of when the certificate provisioning process has been created.
     */
    startTime?: string | null;
    /**
     * Output only. The public key for which a certificate should be provisioned. Represented as a DER-encoded X.509 SubjectPublicKeyInfo.
     */
    subjectPublicKeyInfo?: string | null;
  }
  /**
   * A representation of a Chrome browser profile.
   */
  export interface Schema$GoogleChromeManagementVersionsV1ChromeBrowserProfile {
    /**
     * Output only. The specific affiliation state of the profile.
     */
    affiliationState?: string | null;
    /**
     * Optional. Location of the profile annotated by the admin.
     */
    annotatedLocation?: string | null;
    /**
     * Optional. User of the profile annotated by the admin.
     */
    annotatedUser?: string | null;
    /**
     * Output only. Attestation credential information of the profile.
     */
    attestationCredential?: Schema$GoogleChromeManagementVersionsV1AttestationCredential;
    /**
     * Output only. Channel of the browser on which the profile exists.
     */
    browserChannel?: string | null;
    /**
     * Output only. Version of the browser on which the profile exists.
     */
    browserVersion?: string | null;
    /**
     * Output only. Basic information of the device on which the profile exists. This information is only available for the affiliated profiles.
     */
    deviceInfo?: Schema$GoogleChromeManagementVersionsV1DeviceInfo;
    /**
     * Output only. Profile display name set by client.
     */
    displayName?: string | null;
    /**
     * Output only. Etag of this ChromeBrowserProfile resource. This etag can be used with UPDATE operation to ensure consistency.
     */
    etag?: string | null;
    /**
     * Output only. Number of extensions installed on the profile.
     */
    extensionCount?: string | null;
    /**
     * Output only. Timestamp of the first enrollment of the profile.
     */
    firstEnrollmentTime?: string | null;
    /**
     * Output only. Identify provider of the profile.
     */
    identityProvider?: string | null;
    /**
     * Output only. Timestamp of the latest activity by the profile.
     */
    lastActivityTime?: string | null;
    /**
     * Output only. Timestamp of the latest policy fetch by the profile.
     */
    lastPolicyFetchTime?: string | null;
    /**
     * Output only. Timestamp of the latest policy sync by the profile.
     */
    lastPolicySyncTime?: string | null;
    /**
     * Output only. Timestamp of the latest status report by the profile.
     */
    lastStatusReportTime?: string | null;
    /**
     * Identifier. Format: customers/{customer_id\}/profiles/{profile_permanent_id\}
     */
    name?: string | null;
    /**
     * Output only. OS platform of the device on which the profile exists.
     */
    osPlatformType?: string | null;
    /**
     * Output only. Major OS platform version of the device on which the profile exists, from profile reporting.
     */
    osPlatformVersion?: string | null;
    /**
     * Output only. OS version of the device on which the profile exists.
     */
    osVersion?: string | null;
    /**
     * Output only. Number of policies applied on the profile.
     */
    policyCount?: string | null;
    /**
     * Output only. Chrome client side profile ID.
     */
    profileId?: string | null;
    /**
     * Output only. Profile permanent ID is the unique identifier of a profile within one customer.
     */
    profilePermanentId?: string | null;
    /**
     * Output only. Detailed reporting data of the profile. This information is only available when the profile reporting policy is enabled.
     */
    reportingData?: Schema$GoogleChromeManagementVersionsV1ReportingData;
    /**
     * Output only. Whether the profile supports FCM notifications.
     */
    supportsFcmNotifications?: boolean | null;
    /**
     * Output only. Email address of the user to which the profile belongs.
     */
    userEmail?: string | null;
    /**
     * Output only. Unique Directory API ID of the user that can be used in Admin SDK Users API.
     */
    userId?: string | null;
  }
  /**
   * A representation of a remote command for a Chrome browser profile.
   */
  export interface Schema$GoogleChromeManagementVersionsV1ChromeBrowserProfileCommand {
    /**
     * Output only. Result of the remote command.
     */
    commandResult?: Schema$GoogleChromeManagementVersionsV1ChromeBrowserProfileCommandCommandResult;
    /**
     * Output only. State of the remote command.
     */
    commandState?: string | null;
    /**
     * Required. Type of the remote command. The only supported command_type is "clearBrowsingData".
     */
    commandType?: string | null;
    /**
     * Output only. Timestamp of the issurance of the remote command.
     */
    issueTime?: string | null;
    /**
     * Identifier. Format: customers/{customer_id\}/profiles/{profile_permanent_id\}/commands/{command_id\}
     */
    name?: string | null;
    /**
     * Required. Payload of the remote command. The payload for "clearBrowsingData" command supports: - fields "clearCache" and "clearCookies" - values of boolean type.
     */
    payload?: {[key: string]: any} | null;
    /**
     * Output only. Valid duration of the remote command.
     */
    validDuration?: string | null;
  }
  /**
   * Result of the execution of a command.
   */
  export interface Schema$GoogleChromeManagementVersionsV1ChromeBrowserProfileCommandCommandResult {
    /**
     * Output only. Timestamp of the client execution of the remote command.
     */
    clientExecutionTime?: string | null;
    /**
     * Output only. Result code that indicates the type of error or success of the command.
     */
    resultCode?: string | null;
    /**
     * Output only. Result type of the remote command.
     */
    resultType?: string | null;
  }
  /**
   * Describes the ChromeOS device that a `CertificateProvisioningProcess` belongs to.
   */
  export interface Schema$GoogleChromeManagementVersionsV1ChromeOsDevice {
    /**
     * Output only. The unique Directory API ID of the device. This value is the same as the Admin Console's Directory API ID in the ChromeOS Devices tab.
     */
    deviceDirectoryApiId?: string | null;
    /**
     * Output only. Device serial number. This value is the same as the Admin Console's Serial Number in the ChromeOS Devices tab.
     */
    serialNumber?: string | null;
  }
  /**
   * Describes the ChromeOS user session that a `CertificateProvisioningProcess` belongs to.
   */
  export interface Schema$GoogleChromeManagementVersionsV1ChromeOsUserSession {
    /**
     * Output only. This field contains information about the ChromeOS device that the user session is running on. It is only set if the user is affiliated, i.e., if the user is managed by the same organization that manages the ChromeOS device.
     */
    chromeOsDevice?: Schema$GoogleChromeManagementVersionsV1ChromeOsDevice;
    /**
     * Output only. The unique Directory API ID of the user.
     */
    userDirectoryApiId?: string | null;
    /**
     * Output only. The primary e-mail address of the user.
     */
    userPrimaryEmail?: string | null;
  }
  /**
   * Request message for claiming a certificate provisioning process.
   */
  export interface Schema$GoogleChromeManagementVersionsV1ClaimCertificateProvisioningProcessRequest {
    /**
     * Required. The instance id of the caller.
     */
    callerInstanceId?: string | null;
  }
  /**
   * Response message for claiming a certificate provisioning process.
   */
  export interface Schema$GoogleChromeManagementVersionsV1ClaimCertificateProvisioningProcessResponse {}
  /**
   * Information of a device that runs a Chrome browser profile.
   */
  export interface Schema$GoogleChromeManagementVersionsV1DeviceInfo {
    /**
     * Output only. Device ID that identifies the affiliated device on which the profile exists. If the device type is CHROME_BROWSER, then this represents a unique Directory API ID of the device that can be used in Admin SDK Browsers API.
     */
    affiliatedDeviceId?: string | null;
    /**
     * Output only. Type of the device on which the profile exists.
     */
    deviceType?: string | null;
    /**
     * Output only. Hostname of the device on which the profile exists.
     */
    hostname?: string | null;
    /**
     * Output only. Machine name of the device on which the profile exists. On platforms which do not report the machine name (currently iOS and Android) this is instead set to the browser's device_id - but note that this is a different device_id than the |affiliated_device_id|.
     */
    machine?: string | null;
  }
  /**
   * Describes a generic Certificate Authority Connection.
   */
  export interface Schema$GoogleChromeManagementVersionsV1GenericCaConnection {
    /**
     * Output only. A string that references the administrator-provided configuration for the certification authority service.
     */
    caConnectionAdapterConfigReference?: string | null;
  }
  /**
   * Describes a generic certificate provisioning profile.
   */
  export interface Schema$GoogleChromeManagementVersionsV1GenericProfile {
    /**
     * Output only. A string that references the administrator-provided configuration for the certificate provisioning profile.
     */
    profileAdapterConfigReference?: string | null;
  }
  /**
   * Response to ListChromeBrowserProfileCommands method.
   */
  export interface Schema$GoogleChromeManagementVersionsV1ListChromeBrowserProfileCommandsResponse {
    /**
     * The list of commands returned.
     */
    chromeBrowserProfileCommands?: Schema$GoogleChromeManagementVersionsV1ChromeBrowserProfileCommand[];
    /**
     * The pagination token that can be used to list the next page.
     */
    nextPageToken?: string | null;
    /**
     * Total size represents an estimated number of resources returned.
     */
    totalSize?: string | null;
  }
  /**
   * Response to ListChromeBrowserProfiles method.
   */
  export interface Schema$GoogleChromeManagementVersionsV1ListChromeBrowserProfilesResponse {
    /**
     * The list of profiles returned.
     */
    chromeBrowserProfiles?: Schema$GoogleChromeManagementVersionsV1ChromeBrowserProfile[];
    /**
     * The pagination token that can be used to list the next page.
     */
    nextPageToken?: string | null;
    /**
     * Total size represents an estimated number of resources returned. Not guaranteed to be accurate above 10k profiles.
     */
    totalSize?: string | null;
  }
  /**
   * Request to MoveThirdPartyProfileUser method.
   */
  export interface Schema$GoogleChromeManagementVersionsV1MoveThirdPartyProfileUserRequest {
    /**
     * Required. Destination organizational unit where the third party chrome profile user will be moved to.
     */
    destinationOrgUnit?: string | null;
  }
  /**
   * Response for MoveThirdPartyProfileUser method.
   */
  export interface Schema$GoogleChromeManagementVersionsV1MoveThirdPartyProfileUserResponse {
    /**
     * Output only. The moved third party profile user.
     */
    thirdPartyProfileUser?: Schema$GoogleChromeManagementVersionsV1ThirdPartyProfileUser;
  }
  /**
   * Reporting data of a Chrome browser profile.
   */
  export interface Schema$GoogleChromeManagementVersionsV1ReportingData {
    /**
     * Output only. Executable path of the installed Chrome browser. A valid path is included only in affiliated profiles.
     */
    browserExecutablePath?: string | null;
    /**
     * Output only. Information of the extensions installed on the profile.
     */
    extensionData?: Schema$GoogleChromeManagementVersionsV1ReportingDataExtensionData[];
    /**
     * Output only. Information of the policies applied on the extensions.
     */
    extensionPolicyData?: Schema$GoogleChromeManagementVersionsV1ReportingDataExtensionPolicyData[];
    /**
     * Output only. Updated version of a browser, if it is different from the active browser version.
     */
    installedBrowserVersion?: string | null;
    /**
     * Output only. Information of the policies applied on the profile.
     */
    policyData?: Schema$GoogleChromeManagementVersionsV1ReportingDataPolicyData[];
    /**
     * Output only. Path of the profile. A valid path is included only in affiliated profiles.
     */
    profilePath?: string | null;
  }
  /**
   * Information of conflicting policy applied on a Chrome browser profile.
   */
  export interface Schema$GoogleChromeManagementVersionsV1ReportingDataConflictingPolicyData {
    /**
     * Output only. Source of the policy.
     */
    source?: string | null;
  }
  /**
   * Information of an extension installed on a Chrome browser profile.
   */
  export interface Schema$GoogleChromeManagementVersionsV1ReportingDataExtensionData {
    /**
     * Output only. Description of the extension.
     */
    description?: string | null;
    /**
     * Output only. ID of the extension.
     */
    extensionId?: string | null;
    /**
     * Output only. Type of the extension.
     */
    extensionType?: string | null;
    /**
     * Output only. The URL of the homepage of the extension.
     */
    homepageUri?: string | null;
    /**
     * Output only. Installation type of the extension.
     */
    installationType?: string | null;
    /**
     * Output only. Represents whether the user disabled the extension.
     */
    isDisabled?: boolean | null;
    /**
     * Output only. Represents whether the extension is from the webstore.
     */
    isWebstoreExtension?: boolean | null;
    /**
     * Output only. Manifest version of the extension.
     */
    manifestVersion?: number | null;
    /**
     * Output only. Name of the extension.
     */
    name?: string | null;
    /**
     * Output only. Permissions requested by the extension.
     */
    permissions?: string[] | null;
    /**
     * Output only. Version of the extension.
     */
    version?: string | null;
  }
  /**
   * Information of the policies applied on an extension.
   */
  export interface Schema$GoogleChromeManagementVersionsV1ReportingDataExtensionPolicyData {
    /**
     * Output only. ID of the extension.
     */
    extensionId?: string | null;
    /**
     * Output only. Name of the extension.
     */
    extensionName?: string | null;
    /**
     * Output only. Information of the policies applied on the extension.
     */
    policyData?: Schema$GoogleChromeManagementVersionsV1ReportingDataPolicyData[];
  }
  /**
   * Information of a policy applied on a Chrome browser profile.
   */
  export interface Schema$GoogleChromeManagementVersionsV1ReportingDataPolicyData {
    /**
     * Output only. Conflicting policy information.
     */
    conflicts?: Schema$GoogleChromeManagementVersionsV1ReportingDataConflictingPolicyData[];
    /**
     * Output only. Error message of the policy, if any.
     */
    error?: string | null;
    /**
     * Output only. Name of the policy.
     */
    name?: string | null;
    /**
     * Output only. Source of the policy.
     */
    source?: string | null;
    /**
     * Output only. Value of the policy.
     */
    value?: string | null;
  }
  /**
   * Describes a SCEP Certificate Authority Connection.
   */
  export interface Schema$GoogleChromeManagementVersionsV1ScepCaConnection {
    /**
     * Output only. A string that references the administrator-provided configuration for the certification authority service.
     */
    caConnectionAdapterConfigReference?: string | null;
  }
  /**
   * Describes a SCEP certificate provisioning profile.
   */
  export interface Schema$GoogleChromeManagementVersionsV1ScepProfile {
    /**
     * Output only. The certificate template name as defined by the admin on their on-prem infrastructure. The Certificate Authority uses this name to identify the certificate template.
     */
    certificateTemplateName?: string | null;
    /**
     * Output only. The country of the subject.
     */
    country?: string | null;
    /**
     * Output only. The allowed key usages for certificate's key.
     */
    keyUsages?: string[] | null;
    /**
     * Output only. The locality of the subject.
     */
    locality?: string | null;
    /**
     * Output only. The name of the organization the subject belongs to.
     */
    organization?: string | null;
    /**
     * Output only. The organizational units of the subject.
     */
    organizationalUnits?: string[] | null;
    /**
     * Output only. The state of the subject.
     */
    state?: string | null;
    /**
     * Output only. The subject alternative names.
     */
    subjectAltNames?: Schema$GoogleChromeManagementVersionsV1SubjectAltName[];
    /**
     * Output only. The common name of the subject.
     */
    subjectCommonName?: string | null;
  }
  /**
   * Request message for marking a certificate provisioning process as failed.
   */
  export interface Schema$GoogleChromeManagementVersionsV1SetFailureRequest {
    /**
     * Required. A message describing the failure details. It is displayed on the ChromeOS client device.
     */
    errorMessage?: string | null;
  }
  /**
   * Response message for publishing a failure for a certificate provisioning process.
   */
  export interface Schema$GoogleChromeManagementVersionsV1SetFailureResponse {}
  /**
   * Metadata for the long-running operation returned by signData.
   */
  export interface Schema$GoogleChromeManagementVersionsV1SignDataMetadata {
    /**
     * Output only. Start time of the SignData operation.
     */
    startTime?: string | null;
  }
  /**
   * Request message for requesting a signature from the client that initated a certificate provisioning process.
   */
  export interface Schema$GoogleChromeManagementVersionsV1SignDataRequest {
    /**
     * Required. The signature algorithm that the adapter expects the client and backend components to use when processing `sign_data`.
     */
    signatureAlgorithm?: string | null;
    /**
     * Required. The data that the client was asked to sign.
     */
    signData?: string | null;
  }
  /**
   * Response message for requesting a signature from the client that initated a certificate provisioning process.
   */
  export interface Schema$GoogleChromeManagementVersionsV1SignDataResponse {
    /**
     * Output only. The certificate provisioning process. The signature generated by the client will be available in the `signature` field of `CertificateProvisioningProcess`.
     */
    certificateProvisioningProcess?: Schema$GoogleChromeManagementVersionsV1CertificateProvisioningProcess;
  }
  /**
   * Describes a subject alternative name.
   */
  export interface Schema$GoogleChromeManagementVersionsV1SubjectAltName {
    /**
     * Output only. The type of the SubjectAltName extension.
     */
    type?: string | null;
    /**
     * Output only. The value of the subject alternative name with respect to the `type`.
     */
    value?: string | null;
  }
  /**
   * A representation of non-Google (third party) user that is associated with a managed Chrome profile.
   */
  export interface Schema$GoogleChromeManagementVersionsV1ThirdPartyProfileUser {
    /**
     * Identifier. Format: customers/{customer_id\}/thirdPartyProfileUsers/{third_party_profile_user_id\}
     */
    name?: string | null;
    /**
     * Output only. The ID of the organizational unit assigned to the user.
     */
    orgUnitId?: string | null;
  }
  /**
   * Request message for uploading an issued certificate for a certificate provisioning process.
   */
  export interface Schema$GoogleChromeManagementVersionsV1UploadCertificateRequest {
    /**
     * Required. The issued certificate in PEM format.
     */
    certificatePem?: string | null;
  }
  /**
   * Response message for publishing an issued certificate for a certificate provisioning process.
   */
  export interface Schema$GoogleChromeManagementVersionsV1UploadCertificateResponse {}
  /**
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$GoogleLongrunningCancelOperationRequest {}
  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$GoogleLongrunningListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: Schema$GoogleLongrunningOperation[];
    /**
     * Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections e.g. when attempting to list all resources across all supported locations.
     */
    unreachable?: string[] | null;
  }
  /**
   * This resource represents a long-running operation that is the result of a network API call.
   */
  export interface Schema$GoogleLongrunningOperation {
    /**
     * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
     */
    done?: boolean | null;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$GoogleRpcStatus;
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
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$GoogleProtobufEmpty {}
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
   * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
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
    certificateProvisioningProcesses: Resource$Customers$Certificateprovisioningprocesses;
    profiles: Resource$Customers$Profiles;
    reports: Resource$Customers$Reports;
    telemetry: Resource$Customers$Telemetry;
    thirdPartyProfileUsers: Resource$Customers$Thirdpartyprofileusers;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.apps = new Resource$Customers$Apps(this.context);
      this.certificateProvisioningProcesses =
        new Resource$Customers$Certificateprovisioningprocesses(this.context);
      this.profiles = new Resource$Customers$Profiles(this.context);
      this.reports = new Resource$Customers$Reports(this.context);
      this.telemetry = new Resource$Customers$Telemetry(this.context);
      this.thirdPartyProfileUsers =
        new Resource$Customers$Thirdpartyprofileusers(this.context);
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
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
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
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    countChromeAppRequests(
      params?: Params$Resource$Customers$Apps$Countchromeapprequests,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementV1CountChromeAppRequestsResponse>
    >;
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
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementV1CountChromeAppRequestsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
            apiVersion: '',
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

    /**
     * Get a list of devices that have requested to install an extension.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
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
     *   const res =
     *     await chromemanagement.customers.apps.fetchDevicesRequestingExtension({
     *       // Required. The customer ID or "my_customer" prefixed with "customers/".
     *       customer: 'customers/my-customer',
     *       // Required. The extension for which we want to find requesting devices.
     *       extensionId: 'placeholder-value',
     *       // The ID of the organizational unit. Only consider devices that directly belong to this org unit, i.e. sub-orgunits are not counted. If omitted, all data will be returned.
     *       orgUnitId: 'placeholder-value',
     *       // Optional. Maximum number of results to return. Maximum and default are 50. Any page size larger than 50 will be coerced to 50.
     *       pageSize: 'placeholder-value',
     *       // Optional. Token to specify the page of the request to be returned. Token expires after 1 day.
     *       pageToken: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "deviceDetails": [],
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
    fetchDevicesRequestingExtension(
      params: Params$Resource$Customers$Apps$Fetchdevicesrequestingextension,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    fetchDevicesRequestingExtension(
      params?: Params$Resource$Customers$Apps$Fetchdevicesrequestingextension,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementV1FetchDevicesRequestingExtensionResponse>
    >;
    fetchDevicesRequestingExtension(
      params: Params$Resource$Customers$Apps$Fetchdevicesrequestingextension,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    fetchDevicesRequestingExtension(
      params: Params$Resource$Customers$Apps$Fetchdevicesrequestingextension,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1FetchDevicesRequestingExtensionResponse>,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1FetchDevicesRequestingExtensionResponse>
    ): void;
    fetchDevicesRequestingExtension(
      params: Params$Resource$Customers$Apps$Fetchdevicesrequestingextension,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1FetchDevicesRequestingExtensionResponse>
    ): void;
    fetchDevicesRequestingExtension(
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1FetchDevicesRequestingExtensionResponse>
    ): void;
    fetchDevicesRequestingExtension(
      paramsOrCallback?:
        | Params$Resource$Customers$Apps$Fetchdevicesrequestingextension
        | BodyResponseCallback<Schema$GoogleChromeManagementV1FetchDevicesRequestingExtensionResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1FetchDevicesRequestingExtensionResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromeManagementV1FetchDevicesRequestingExtensionResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementV1FetchDevicesRequestingExtensionResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Apps$Fetchdevicesrequestingextension;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Customers$Apps$Fetchdevicesrequestingextension;
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
              rootUrl + '/v1/{+customer}/apps:fetchDevicesRequestingExtension'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['customer'],
        pathParams: ['customer'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleChromeManagementV1FetchDevicesRequestingExtensionResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromeManagementV1FetchDevicesRequestingExtensionResponse>(
          parameters
        );
      }
    }

    /**
     * Get a list of users that have requested to install an extension.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
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
     *   const res =
     *     await chromemanagement.customers.apps.fetchUsersRequestingExtension({
     *       // Required. The customer ID or "my_customer" prefixed with "customers/".
     *       customer: 'customers/my-customer',
     *       // Required. The extension for which we want to find the requesting users.
     *       extensionId: 'placeholder-value',
     *       // The ID of the organizational unit. Only consider devices that directly belong to this org unit, i.e. sub-orgunits are not counted. If omitted, all data will be returned.
     *       orgUnitId: 'placeholder-value',
     *       // Optional. Maximum number of results to return. Maximum and default are 50. Any page size larger than 50 will be coerced to 50.
     *       pageSize: 'placeholder-value',
     *       // Optional. Token to specify the page of the request to be returned. Token expires after 1 day.
     *       pageToken: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "totalSize": 0,
     *   //   "userDetails": []
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
    fetchUsersRequestingExtension(
      params: Params$Resource$Customers$Apps$Fetchusersrequestingextension,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    fetchUsersRequestingExtension(
      params?: Params$Resource$Customers$Apps$Fetchusersrequestingextension,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementV1FetchUsersRequestingExtensionResponse>
    >;
    fetchUsersRequestingExtension(
      params: Params$Resource$Customers$Apps$Fetchusersrequestingextension,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    fetchUsersRequestingExtension(
      params: Params$Resource$Customers$Apps$Fetchusersrequestingextension,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1FetchUsersRequestingExtensionResponse>,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1FetchUsersRequestingExtensionResponse>
    ): void;
    fetchUsersRequestingExtension(
      params: Params$Resource$Customers$Apps$Fetchusersrequestingextension,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1FetchUsersRequestingExtensionResponse>
    ): void;
    fetchUsersRequestingExtension(
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1FetchUsersRequestingExtensionResponse>
    ): void;
    fetchUsersRequestingExtension(
      paramsOrCallback?:
        | Params$Resource$Customers$Apps$Fetchusersrequestingextension
        | BodyResponseCallback<Schema$GoogleChromeManagementV1FetchUsersRequestingExtensionResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1FetchUsersRequestingExtensionResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromeManagementV1FetchUsersRequestingExtensionResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementV1FetchUsersRequestingExtensionResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Apps$Fetchusersrequestingextension;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Customers$Apps$Fetchusersrequestingextension;
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
              rootUrl + '/v1/{+customer}/apps:fetchUsersRequestingExtension'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['customer'],
        pathParams: ['customer'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleChromeManagementV1FetchUsersRequestingExtensionResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromeManagementV1FetchUsersRequestingExtensionResponse>(
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
  export interface Params$Resource$Customers$Apps$Fetchdevicesrequestingextension
    extends StandardParameters {
    /**
     * Required. The customer ID or "my_customer" prefixed with "customers/".
     */
    customer?: string;
    /**
     * Required. The extension for which we want to find requesting devices.
     */
    extensionId?: string;
    /**
     * The ID of the organizational unit. Only consider devices that directly belong to this org unit, i.e. sub-orgunits are not counted. If omitted, all data will be returned.
     */
    orgUnitId?: string;
    /**
     * Optional. Maximum number of results to return. Maximum and default are 50. Any page size larger than 50 will be coerced to 50.
     */
    pageSize?: number;
    /**
     * Optional. Token to specify the page of the request to be returned. Token expires after 1 day.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Customers$Apps$Fetchusersrequestingextension
    extends StandardParameters {
    /**
     * Required. The customer ID or "my_customer" prefixed with "customers/".
     */
    customer?: string;
    /**
     * Required. The extension for which we want to find the requesting users.
     */
    extensionId?: string;
    /**
     * The ID of the organizational unit. Only consider devices that directly belong to this org unit, i.e. sub-orgunits are not counted. If omitted, all data will be returned.
     */
    orgUnitId?: string;
    /**
     * Optional. Maximum number of results to return. Maximum and default are 50. Any page size larger than 50 will be coerced to 50.
     */
    pageSize?: number;
    /**
     * Optional. Token to specify the page of the request to be returned. Token expires after 1 day.
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
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
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
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Customers$Apps$Android$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementV1AppDetails>
    >;
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
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementV1AppDetails>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
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
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Customers$Apps$Chrome$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementV1AppDetails>
    >;
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
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementV1AppDetails>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
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
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Customers$Apps$Web$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementV1AppDetails>
    >;
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
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementV1AppDetails>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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

  export class Resource$Customers$Certificateprovisioningprocesses {
    context: APIRequestContext;
    operations: Resource$Customers$Certificateprovisioningprocesses$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations =
        new Resource$Customers$Certificateprovisioningprocesses$Operations(
          this.context
        );
    }

    /**
     * Claims a certificate provisioning process. For each certificate provisioning process, this operation can succeed only for one `caller_instance_id`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
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
     * const chromemanagement = google.chromemanagement('v1');
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
     *   const res =
     *     await chromemanagement.customers.certificateProvisioningProcesses.claim({
     *       // Required. Resource name of the `CertificateProvisioningProcess` to claim. The name pattern is given as `customers/{customer\}/certificateProvisioningProcesses/{certificate_provisioning_process\}` with `{customer\}` being the obfuscated customer id and `{certificate_provisioning_process\}` being the certificate provisioning process id.
     *       name: 'customers/my-customer/certificateProvisioningProcesses/my-certificateProvisioningProcesse',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "callerInstanceId": "my_callerInstanceId"
     *         // }
     *       },
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
    claim(
      params: Params$Resource$Customers$Certificateprovisioningprocesses$Claim,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    claim(
      params?: Params$Resource$Customers$Certificateprovisioningprocesses$Claim,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementVersionsV1ClaimCertificateProvisioningProcessResponse>
    >;
    claim(
      params: Params$Resource$Customers$Certificateprovisioningprocesses$Claim,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    claim(
      params: Params$Resource$Customers$Certificateprovisioningprocesses$Claim,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1ClaimCertificateProvisioningProcessResponse>,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1ClaimCertificateProvisioningProcessResponse>
    ): void;
    claim(
      params: Params$Resource$Customers$Certificateprovisioningprocesses$Claim,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1ClaimCertificateProvisioningProcessResponse>
    ): void;
    claim(
      callback: BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1ClaimCertificateProvisioningProcessResponse>
    ): void;
    claim(
      paramsOrCallback?:
        | Params$Resource$Customers$Certificateprovisioningprocesses$Claim
        | BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1ClaimCertificateProvisioningProcessResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1ClaimCertificateProvisioningProcessResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1ClaimCertificateProvisioningProcessResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementVersionsV1ClaimCertificateProvisioningProcessResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Certificateprovisioningprocesses$Claim;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Customers$Certificateprovisioningprocesses$Claim;
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
            url: (rootUrl + '/v1/{+name}:claim').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleChromeManagementVersionsV1ClaimCertificateProvisioningProcessResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromeManagementVersionsV1ClaimCertificateProvisioningProcessResponse>(
          parameters
        );
      }
    }

    /**
     * Retrieves a certificate provisioning process.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
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
     * const chromemanagement = google.chromemanagement('v1');
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
     *   const res =
     *     await chromemanagement.customers.certificateProvisioningProcesses.get({
     *       // Required. Resource name of the `CertificateProvisioningProcess` to return. The name pattern is given as `customers/{customer\}/certificateProvisioningProcesses/{certificate_provisioning_process\}` with `{customer\}` being the obfuscated customer id and `{certificate_provisioning_process\}` being the certificate provisioning process id.
     *       name: 'customers/my-customer/certificateProvisioningProcesses/my-certificateProvisioningProcesse',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "chromeOsDevice": {},
     *   //   "chromeOsUserSession": {},
     *   //   "failureMessage": "my_failureMessage",
     *   //   "genericCaConnection": {},
     *   //   "genericProfile": {},
     *   //   "issuedCertificate": "my_issuedCertificate",
     *   //   "name": "my_name",
     *   //   "provisioningProfileId": "my_provisioningProfileId",
     *   //   "scepCaConnection": {},
     *   //   "scepProfile": {},
     *   //   "signData": "my_signData",
     *   //   "signature": "my_signature",
     *   //   "signatureAlgorithm": "my_signatureAlgorithm",
     *   //   "startTime": "my_startTime",
     *   //   "subjectPublicKeyInfo": "my_subjectPublicKeyInfo"
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
      params: Params$Resource$Customers$Certificateprovisioningprocesses$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Customers$Certificateprovisioningprocesses$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementVersionsV1CertificateProvisioningProcess>
    >;
    get(
      params: Params$Resource$Customers$Certificateprovisioningprocesses$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Customers$Certificateprovisioningprocesses$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1CertificateProvisioningProcess>,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1CertificateProvisioningProcess>
    ): void;
    get(
      params: Params$Resource$Customers$Certificateprovisioningprocesses$Get,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1CertificateProvisioningProcess>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1CertificateProvisioningProcess>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Customers$Certificateprovisioningprocesses$Get
        | BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1CertificateProvisioningProcess>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1CertificateProvisioningProcess>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1CertificateProvisioningProcess>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementVersionsV1CertificateProvisioningProcess>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Certificateprovisioningprocesses$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Customers$Certificateprovisioningprocesses$Get;
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
        createAPIRequest<Schema$GoogleChromeManagementVersionsV1CertificateProvisioningProcess>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromeManagementVersionsV1CertificateProvisioningProcess>(
          parameters
        );
      }
    }

    /**
     * Marks a certificate provisioning process as failed.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
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
     * const chromemanagement = google.chromemanagement('v1');
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
     *   const res =
     *     await chromemanagement.customers.certificateProvisioningProcesses.setFailure(
     *       {
     *         // Required. Resource name of the `CertificateProvisioningProcess` to return. The name pattern is given as `customers/{customer\}/certificateProvisioningProcesses/{certificate_provisioning_process\}` with `{customer\}` being the obfuscated customer id and `{certificate_provisioning_process\}` being the certificate provisioning process id.
     *         name: 'customers/my-customer/certificateProvisioningProcesses/my-certificateProvisioningProcesse',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "errorMessage": "my_errorMessage"
     *           // }
     *         },
     *       },
     *     );
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
    setFailure(
      params: Params$Resource$Customers$Certificateprovisioningprocesses$Setfailure,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    setFailure(
      params?: Params$Resource$Customers$Certificateprovisioningprocesses$Setfailure,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementVersionsV1SetFailureResponse>
    >;
    setFailure(
      params: Params$Resource$Customers$Certificateprovisioningprocesses$Setfailure,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setFailure(
      params: Params$Resource$Customers$Certificateprovisioningprocesses$Setfailure,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1SetFailureResponse>,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1SetFailureResponse>
    ): void;
    setFailure(
      params: Params$Resource$Customers$Certificateprovisioningprocesses$Setfailure,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1SetFailureResponse>
    ): void;
    setFailure(
      callback: BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1SetFailureResponse>
    ): void;
    setFailure(
      paramsOrCallback?:
        | Params$Resource$Customers$Certificateprovisioningprocesses$Setfailure
        | BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1SetFailureResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1SetFailureResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1SetFailureResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementVersionsV1SetFailureResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Certificateprovisioningprocesses$Setfailure;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Customers$Certificateprovisioningprocesses$Setfailure;
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
            url: (rootUrl + '/v1/{+name}:setFailure').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$GoogleChromeManagementVersionsV1SetFailureResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromeManagementVersionsV1SetFailureResponse>(
          parameters
        );
      }
    }

    /**
     * Requests the client that initiated a certificate provisioning process to sign data. This should only be called after `ClaimCertificateProvisioningProcess` has been successfully executed.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
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
     * const chromemanagement = google.chromemanagement('v1');
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
     *   const res =
     *     await chromemanagement.customers.certificateProvisioningProcesses.signData({
     *       // Required. Resource name of the `CertificateProvisioningProcess` to return. The name pattern is given as `customers/{customer\}/certificateProvisioningProcesses/{certificate_provisioning_process\}` with `{customer\}` being the obfuscated customer id and `{certificate_provisioning_process\}` being the certificate provisioning process id.
     *       name: 'customers/my-customer/certificateProvisioningProcesses/my-certificateProvisioningProcesse',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "signData": "my_signData",
     *         //   "signatureAlgorithm": "my_signatureAlgorithm"
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
    signData(
      params: Params$Resource$Customers$Certificateprovisioningprocesses$Signdata,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    signData(
      params?: Params$Resource$Customers$Certificateprovisioningprocesses$Signdata,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>;
    signData(
      params: Params$Resource$Customers$Certificateprovisioningprocesses$Signdata,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    signData(
      params: Params$Resource$Customers$Certificateprovisioningprocesses$Signdata,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    signData(
      params: Params$Resource$Customers$Certificateprovisioningprocesses$Signdata,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    signData(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    signData(
      paramsOrCallback?:
        | Params$Resource$Customers$Certificateprovisioningprocesses$Signdata
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Certificateprovisioningprocesses$Signdata;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Customers$Certificateprovisioningprocesses$Signdata;
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
            url: (rootUrl + '/v1/{+name}:signData').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Uploads a successfully issued certificate for a certificate provisioning process.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
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
     * const chromemanagement = google.chromemanagement('v1');
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
     *   const res =
     *     await chromemanagement.customers.certificateProvisioningProcesses.uploadCertificate(
     *       {
     *         // Required. Resource name of the `CertificateProvisioningProcess` to return. The name pattern is given as `customers/{customer\}/certificateProvisioningProcesses/{certificate_provisioning_process\}` with `{customer\}` being the obfuscated customer id and `{certificate_provisioning_process\}` being the certificate provisioning process id.
     *         name: 'customers/my-customer/certificateProvisioningProcesses/my-certificateProvisioningProcesse',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "certificatePem": "my_certificatePem"
     *           // }
     *         },
     *       },
     *     );
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
    uploadCertificate(
      params: Params$Resource$Customers$Certificateprovisioningprocesses$Uploadcertificate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    uploadCertificate(
      params?: Params$Resource$Customers$Certificateprovisioningprocesses$Uploadcertificate,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementVersionsV1UploadCertificateResponse>
    >;
    uploadCertificate(
      params: Params$Resource$Customers$Certificateprovisioningprocesses$Uploadcertificate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    uploadCertificate(
      params: Params$Resource$Customers$Certificateprovisioningprocesses$Uploadcertificate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1UploadCertificateResponse>,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1UploadCertificateResponse>
    ): void;
    uploadCertificate(
      params: Params$Resource$Customers$Certificateprovisioningprocesses$Uploadcertificate,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1UploadCertificateResponse>
    ): void;
    uploadCertificate(
      callback: BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1UploadCertificateResponse>
    ): void;
    uploadCertificate(
      paramsOrCallback?:
        | Params$Resource$Customers$Certificateprovisioningprocesses$Uploadcertificate
        | BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1UploadCertificateResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1UploadCertificateResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1UploadCertificateResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementVersionsV1UploadCertificateResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Certificateprovisioningprocesses$Uploadcertificate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Customers$Certificateprovisioningprocesses$Uploadcertificate;
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
            url: (rootUrl + '/v1/{+name}:uploadCertificate').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$GoogleChromeManagementVersionsV1UploadCertificateResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromeManagementVersionsV1UploadCertificateResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Customers$Certificateprovisioningprocesses$Claim
    extends StandardParameters {
    /**
     * Required. Resource name of the `CertificateProvisioningProcess` to claim. The name pattern is given as `customers/{customer\}/certificateProvisioningProcesses/{certificate_provisioning_process\}` with `{customer\}` being the obfuscated customer id and `{certificate_provisioning_process\}` being the certificate provisioning process id.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleChromeManagementVersionsV1ClaimCertificateProvisioningProcessRequest;
  }
  export interface Params$Resource$Customers$Certificateprovisioningprocesses$Get
    extends StandardParameters {
    /**
     * Required. Resource name of the `CertificateProvisioningProcess` to return. The name pattern is given as `customers/{customer\}/certificateProvisioningProcesses/{certificate_provisioning_process\}` with `{customer\}` being the obfuscated customer id and `{certificate_provisioning_process\}` being the certificate provisioning process id.
     */
    name?: string;
  }
  export interface Params$Resource$Customers$Certificateprovisioningprocesses$Setfailure
    extends StandardParameters {
    /**
     * Required. Resource name of the `CertificateProvisioningProcess` to return. The name pattern is given as `customers/{customer\}/certificateProvisioningProcesses/{certificate_provisioning_process\}` with `{customer\}` being the obfuscated customer id and `{certificate_provisioning_process\}` being the certificate provisioning process id.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleChromeManagementVersionsV1SetFailureRequest;
  }
  export interface Params$Resource$Customers$Certificateprovisioningprocesses$Signdata
    extends StandardParameters {
    /**
     * Required. Resource name of the `CertificateProvisioningProcess` to return. The name pattern is given as `customers/{customer\}/certificateProvisioningProcesses/{certificate_provisioning_process\}` with `{customer\}` being the obfuscated customer id and `{certificate_provisioning_process\}` being the certificate provisioning process id.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleChromeManagementVersionsV1SignDataRequest;
  }
  export interface Params$Resource$Customers$Certificateprovisioningprocesses$Uploadcertificate
    extends StandardParameters {
    /**
     * Required. Resource name of the `CertificateProvisioningProcess` to return. The name pattern is given as `customers/{customer\}/certificateProvisioningProcesses/{certificate_provisioning_process\}` with `{customer\}` being the obfuscated customer id and `{certificate_provisioning_process\}` being the certificate provisioning process id.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleChromeManagementVersionsV1UploadCertificateRequest;
  }

  export class Resource$Customers$Certificateprovisioningprocesses$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
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
     * const chromemanagement = google.chromemanagement('v1');
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
     *   const res =
     *     await chromemanagement.customers.certificateProvisioningProcesses.operations.get(
     *       {
     *         // The name of the operation resource.
     *         name: 'customers/my-customer/certificateProvisioningProcesses/my-certificateProvisioningProcesse/operations/my-operation',
     *       },
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
    get(
      params: Params$Resource$Customers$Certificateprovisioningprocesses$Operations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Customers$Certificateprovisioningprocesses$Operations$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>;
    get(
      params: Params$Resource$Customers$Certificateprovisioningprocesses$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Customers$Certificateprovisioningprocesses$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Customers$Certificateprovisioningprocesses$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Customers$Certificateprovisioningprocesses$Operations$Get
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Certificateprovisioningprocesses$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Customers$Certificateprovisioningprocesses$Operations$Get;
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }
  }

  export interface Params$Resource$Customers$Certificateprovisioningprocesses$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }

  export class Resource$Customers$Profiles {
    context: APIRequestContext;
    commands: Resource$Customers$Profiles$Commands;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.commands = new Resource$Customers$Profiles$Commands(this.context);
    }

    /**
     * Deletes the data collected from a Chrome browser profile.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
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
     * const chromemanagement = google.chromemanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/chrome.management.profiles'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chromemanagement.customers.profiles.delete({
     *     // Required. Format: customers/{customer_id\}/profiles/{profile_permanent_id\}
     *     name: 'customers/my-customer/profiles/my-profile',
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
      params: Params$Resource$Customers$Profiles$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Customers$Profiles$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>;
    delete(
      params: Params$Resource$Customers$Profiles$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Customers$Profiles$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Customers$Profiles$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Customers$Profiles$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Profiles$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Profiles$Delete;
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Gets a Chrome browser profile with customer ID and profile permanent ID.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
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
     * const chromemanagement = google.chromemanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/chrome.management.profiles',
     *       'https://www.googleapis.com/auth/chrome.management.profiles.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chromemanagement.customers.profiles.get({
     *     // Required. Format: customers/{customer_id\}/profiles/{profile_permanent_id\}
     *     name: 'customers/my-customer/profiles/my-profile',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "affiliationState": "my_affiliationState",
     *   //   "annotatedLocation": "my_annotatedLocation",
     *   //   "annotatedUser": "my_annotatedUser",
     *   //   "attestationCredential": {},
     *   //   "browserChannel": "my_browserChannel",
     *   //   "browserVersion": "my_browserVersion",
     *   //   "deviceInfo": {},
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "extensionCount": "my_extensionCount",
     *   //   "firstEnrollmentTime": "my_firstEnrollmentTime",
     *   //   "identityProvider": "my_identityProvider",
     *   //   "lastActivityTime": "my_lastActivityTime",
     *   //   "lastPolicyFetchTime": "my_lastPolicyFetchTime",
     *   //   "lastPolicySyncTime": "my_lastPolicySyncTime",
     *   //   "lastStatusReportTime": "my_lastStatusReportTime",
     *   //   "name": "my_name",
     *   //   "osPlatformType": "my_osPlatformType",
     *   //   "osPlatformVersion": "my_osPlatformVersion",
     *   //   "osVersion": "my_osVersion",
     *   //   "policyCount": "my_policyCount",
     *   //   "profileId": "my_profileId",
     *   //   "profilePermanentId": "my_profilePermanentId",
     *   //   "reportingData": {},
     *   //   "supportsFcmNotifications": false,
     *   //   "userEmail": "my_userEmail",
     *   //   "userId": "my_userId"
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
      params: Params$Resource$Customers$Profiles$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Customers$Profiles$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementVersionsV1ChromeBrowserProfile>
    >;
    get(
      params: Params$Resource$Customers$Profiles$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Customers$Profiles$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1ChromeBrowserProfile>,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1ChromeBrowserProfile>
    ): void;
    get(
      params: Params$Resource$Customers$Profiles$Get,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1ChromeBrowserProfile>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1ChromeBrowserProfile>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Customers$Profiles$Get
        | BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1ChromeBrowserProfile>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1ChromeBrowserProfile>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1ChromeBrowserProfile>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementVersionsV1ChromeBrowserProfile>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Profiles$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Profiles$Get;
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
        createAPIRequest<Schema$GoogleChromeManagementVersionsV1ChromeBrowserProfile>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromeManagementVersionsV1ChromeBrowserProfile>(
          parameters
        );
      }
    }

    /**
     * Lists Chrome browser profiles of a customer based on the given search and sorting criteria.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
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
     * const chromemanagement = google.chromemanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/chrome.management.profiles',
     *       'https://www.googleapis.com/auth/chrome.management.profiles.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chromemanagement.customers.profiles.list({
     *     // Optional. The filter used to filter profiles. The following fields can be used in the filter: - profile_id - display_name - user_email - last_activity_time - last_policy_sync_time - last_status_report_time - first_enrollment_time - os_platform_type - os_version - browser_version - browser_channel - policy_count - extension_count - identity_provider - affiliation_state - os_platform_version - ouId Any of the above fields can be used to specify a filter, and filtering by multiple fields is supported with AND operator. String type fields and enum type fields support '=' and '!=' operators. The integer type and the timestamp type fields support '=', '!=', '<', '\>', '<=' and '\>=' operators. Timestamps expect an RFC-3339 formatted string (e.g. 2012-04-21T11:30:00-04:00). Wildcard '*' can be used with a string type field filter. In addition, string literal filtering is also supported, for example, 'ABC' as a filter maps to a filter that checks if any of the filterable string type fields contains 'ABC'. Organization unit number can be used as a filtering criteria here by specifying 'ouId = ${your_org_unit_id\}', please note that only single OU ID matching is supported.
     *     filter: 'placeholder-value',
     *     // Optional. The fields used to specify the ordering of the results. The supported fields are: - profile_id - display_name - user_email - last_activity_time - last_policy_sync_time - last_status_report_time - first_enrollment_time - os_platform_type - os_version - browser_version - browser_channel - policy_count - extension_count - identity_provider - affiliation_state - os_platform_version By default, sorting is in ascending order, to specify descending order for a field, a suffix " desc" should be added to the field name. The default ordering is the descending order of last_status_report_time.
     *     orderBy: 'placeholder-value',
     *     // Optional. The maximum number of profiles to return. The default page size is 100 if page_size is unspecified, and the maximum page size allowed is 200.
     *     pageSize: 'placeholder-value',
     *     // Optional. The page token used to retrieve a specific page of the listing request.
     *     pageToken: 'placeholder-value',
     *     // Required. Format: customers/{customer_id\}
     *     parent: 'customers/my-customer',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "chromeBrowserProfiles": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "totalSize": "my_totalSize"
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
      params: Params$Resource$Customers$Profiles$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Customers$Profiles$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementVersionsV1ListChromeBrowserProfilesResponse>
    >;
    list(
      params: Params$Resource$Customers$Profiles$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Customers$Profiles$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1ListChromeBrowserProfilesResponse>,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1ListChromeBrowserProfilesResponse>
    ): void;
    list(
      params: Params$Resource$Customers$Profiles$List,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1ListChromeBrowserProfilesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1ListChromeBrowserProfilesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Customers$Profiles$List
        | BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1ListChromeBrowserProfilesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1ListChromeBrowserProfilesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1ListChromeBrowserProfilesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementVersionsV1ListChromeBrowserProfilesResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Profiles$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Profiles$List;
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
            url: (rootUrl + '/v1/{+parent}/profiles').replace(
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
        createAPIRequest<Schema$GoogleChromeManagementVersionsV1ListChromeBrowserProfilesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromeManagementVersionsV1ListChromeBrowserProfilesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Customers$Profiles$Delete
    extends StandardParameters {
    /**
     * Required. Format: customers/{customer_id\}/profiles/{profile_permanent_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Customers$Profiles$Get
    extends StandardParameters {
    /**
     * Required. Format: customers/{customer_id\}/profiles/{profile_permanent_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Customers$Profiles$List
    extends StandardParameters {
    /**
     * Optional. The filter used to filter profiles. The following fields can be used in the filter: - profile_id - display_name - user_email - last_activity_time - last_policy_sync_time - last_status_report_time - first_enrollment_time - os_platform_type - os_version - browser_version - browser_channel - policy_count - extension_count - identity_provider - affiliation_state - os_platform_version - ouId Any of the above fields can be used to specify a filter, and filtering by multiple fields is supported with AND operator. String type fields and enum type fields support '=' and '!=' operators. The integer type and the timestamp type fields support '=', '!=', '<', '\>', '<=' and '\>=' operators. Timestamps expect an RFC-3339 formatted string (e.g. 2012-04-21T11:30:00-04:00). Wildcard '*' can be used with a string type field filter. In addition, string literal filtering is also supported, for example, 'ABC' as a filter maps to a filter that checks if any of the filterable string type fields contains 'ABC'. Organization unit number can be used as a filtering criteria here by specifying 'ouId = ${your_org_unit_id\}', please note that only single OU ID matching is supported.
     */
    filter?: string;
    /**
     * Optional. The fields used to specify the ordering of the results. The supported fields are: - profile_id - display_name - user_email - last_activity_time - last_policy_sync_time - last_status_report_time - first_enrollment_time - os_platform_type - os_version - browser_version - browser_channel - policy_count - extension_count - identity_provider - affiliation_state - os_platform_version By default, sorting is in ascending order, to specify descending order for a field, a suffix " desc" should be added to the field name. The default ordering is the descending order of last_status_report_time.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of profiles to return. The default page size is 100 if page_size is unspecified, and the maximum page size allowed is 200.
     */
    pageSize?: number;
    /**
     * Optional. The page token used to retrieve a specific page of the listing request.
     */
    pageToken?: string;
    /**
     * Required. Format: customers/{customer_id\}
     */
    parent?: string;
  }

  export class Resource$Customers$Profiles$Commands {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a Chrome browser profile remote command.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
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
     * const chromemanagement = google.chromemanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/chrome.management.profiles'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chromemanagement.customers.profiles.commands.create({
     *     // Required. Format: customers/{customer_id\}/profiles/{profile_permanent_id\}
     *     parent: 'customers/my-customer/profiles/my-profile',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "commandResult": {},
     *       //   "commandState": "my_commandState",
     *       //   "commandType": "my_commandType",
     *       //   "issueTime": "my_issueTime",
     *       //   "name": "my_name",
     *       //   "payload": {},
     *       //   "validDuration": "my_validDuration"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "commandResult": {},
     *   //   "commandState": "my_commandState",
     *   //   "commandType": "my_commandType",
     *   //   "issueTime": "my_issueTime",
     *   //   "name": "my_name",
     *   //   "payload": {},
     *   //   "validDuration": "my_validDuration"
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
      params: Params$Resource$Customers$Profiles$Commands$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Customers$Profiles$Commands$Create,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementVersionsV1ChromeBrowserProfileCommand>
    >;
    create(
      params: Params$Resource$Customers$Profiles$Commands$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Customers$Profiles$Commands$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1ChromeBrowserProfileCommand>,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1ChromeBrowserProfileCommand>
    ): void;
    create(
      params: Params$Resource$Customers$Profiles$Commands$Create,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1ChromeBrowserProfileCommand>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1ChromeBrowserProfileCommand>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Customers$Profiles$Commands$Create
        | BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1ChromeBrowserProfileCommand>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1ChromeBrowserProfileCommand>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1ChromeBrowserProfileCommand>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementVersionsV1ChromeBrowserProfileCommand>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Profiles$Commands$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Profiles$Commands$Create;
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
            url: (rootUrl + '/v1/{+parent}/commands').replace(
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
        createAPIRequest<Schema$GoogleChromeManagementVersionsV1ChromeBrowserProfileCommand>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromeManagementVersionsV1ChromeBrowserProfileCommand>(
          parameters
        );
      }
    }

    /**
     * Gets a Chrome browser profile remote command.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
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
     * const chromemanagement = google.chromemanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/chrome.management.profiles',
     *       'https://www.googleapis.com/auth/chrome.management.profiles.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chromemanagement.customers.profiles.commands.get({
     *     // Required. Format: customers/{customer_id\}/profiles/{profile_permanent_id\}/commands/{command_id\}
     *     name: 'customers/my-customer/profiles/my-profile/commands/my-command',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "commandResult": {},
     *   //   "commandState": "my_commandState",
     *   //   "commandType": "my_commandType",
     *   //   "issueTime": "my_issueTime",
     *   //   "name": "my_name",
     *   //   "payload": {},
     *   //   "validDuration": "my_validDuration"
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
      params: Params$Resource$Customers$Profiles$Commands$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Customers$Profiles$Commands$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementVersionsV1ChromeBrowserProfileCommand>
    >;
    get(
      params: Params$Resource$Customers$Profiles$Commands$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Customers$Profiles$Commands$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1ChromeBrowserProfileCommand>,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1ChromeBrowserProfileCommand>
    ): void;
    get(
      params: Params$Resource$Customers$Profiles$Commands$Get,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1ChromeBrowserProfileCommand>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1ChromeBrowserProfileCommand>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Customers$Profiles$Commands$Get
        | BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1ChromeBrowserProfileCommand>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1ChromeBrowserProfileCommand>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1ChromeBrowserProfileCommand>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementVersionsV1ChromeBrowserProfileCommand>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Profiles$Commands$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Profiles$Commands$Get;
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
        createAPIRequest<Schema$GoogleChromeManagementVersionsV1ChromeBrowserProfileCommand>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromeManagementVersionsV1ChromeBrowserProfileCommand>(
          parameters
        );
      }
    }

    /**
     * Lists remote commands of a Chrome browser profile.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
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
     * const chromemanagement = google.chromemanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/chrome.management.profiles',
     *       'https://www.googleapis.com/auth/chrome.management.profiles.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chromemanagement.customers.profiles.commands.list({
     *     // Optional. The maximum number of commands to return. The default page size is 100 if page_size is unspecified, and the maximum page size allowed is 100.
     *     pageSize: 'placeholder-value',
     *     // Optional. The page token used to retrieve a specific page of the listing request.
     *     pageToken: 'placeholder-value',
     *     // Required. Format: customers/{customer_id\}/profiles/{profile_permanent_id\}
     *     parent: 'customers/my-customer/profiles/my-profile',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "chromeBrowserProfileCommands": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "totalSize": "my_totalSize"
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
      params: Params$Resource$Customers$Profiles$Commands$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Customers$Profiles$Commands$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementVersionsV1ListChromeBrowserProfileCommandsResponse>
    >;
    list(
      params: Params$Resource$Customers$Profiles$Commands$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Customers$Profiles$Commands$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1ListChromeBrowserProfileCommandsResponse>,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1ListChromeBrowserProfileCommandsResponse>
    ): void;
    list(
      params: Params$Resource$Customers$Profiles$Commands$List,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1ListChromeBrowserProfileCommandsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1ListChromeBrowserProfileCommandsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Customers$Profiles$Commands$List
        | BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1ListChromeBrowserProfileCommandsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1ListChromeBrowserProfileCommandsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1ListChromeBrowserProfileCommandsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementVersionsV1ListChromeBrowserProfileCommandsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Profiles$Commands$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Profiles$Commands$List;
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
            url: (rootUrl + '/v1/{+parent}/commands').replace(
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
        createAPIRequest<Schema$GoogleChromeManagementVersionsV1ListChromeBrowserProfileCommandsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromeManagementVersionsV1ListChromeBrowserProfileCommandsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Customers$Profiles$Commands$Create
    extends StandardParameters {
    /**
     * Required. Format: customers/{customer_id\}/profiles/{profile_permanent_id\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleChromeManagementVersionsV1ChromeBrowserProfileCommand;
  }
  export interface Params$Resource$Customers$Profiles$Commands$Get
    extends StandardParameters {
    /**
     * Required. Format: customers/{customer_id\}/profiles/{profile_permanent_id\}/commands/{command_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Customers$Profiles$Commands$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of commands to return. The default page size is 100 if page_size is unspecified, and the maximum page size allowed is 100.
     */
    pageSize?: number;
    /**
     * Optional. The page token used to retrieve a specific page of the listing request.
     */
    pageToken?: string;
    /**
     * Required. Format: customers/{customer_id\}/profiles/{profile_permanent_id\}
     */
    parent?: string;
  }

  export class Resource$Customers$Reports {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Count of Chrome Browsers that have been recently enrolled, have new policy to be synced, or have no recent activity.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
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
     *   const res =
     *     await chromemanagement.customers.reports.countChromeBrowsersNeedingAttention(
     *       {
     *         // Required. The customer ID or "my_customer" prefixed with "customers/".
     *         customer: 'customers/my-customer',
     *         // Optional. The ID of the organizational unit. If omitted, all data will be returned.
     *         orgUnitId: 'placeholder-value',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "noRecentActivityCount": "my_noRecentActivityCount",
     *   //   "pendingBrowserUpdateCount": "my_pendingBrowserUpdateCount",
     *   //   "recentlyEnrolledCount": "my_recentlyEnrolledCount"
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
    countChromeBrowsersNeedingAttention(
      params: Params$Resource$Customers$Reports$Countchromebrowsersneedingattention,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    countChromeBrowsersNeedingAttention(
      params?: Params$Resource$Customers$Reports$Countchromebrowsersneedingattention,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementV1CountChromeBrowsersNeedingAttentionResponse>
    >;
    countChromeBrowsersNeedingAttention(
      params: Params$Resource$Customers$Reports$Countchromebrowsersneedingattention,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    countChromeBrowsersNeedingAttention(
      params: Params$Resource$Customers$Reports$Countchromebrowsersneedingattention,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeBrowsersNeedingAttentionResponse>,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeBrowsersNeedingAttentionResponse>
    ): void;
    countChromeBrowsersNeedingAttention(
      params: Params$Resource$Customers$Reports$Countchromebrowsersneedingattention,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeBrowsersNeedingAttentionResponse>
    ): void;
    countChromeBrowsersNeedingAttention(
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeBrowsersNeedingAttentionResponse>
    ): void;
    countChromeBrowsersNeedingAttention(
      paramsOrCallback?:
        | Params$Resource$Customers$Reports$Countchromebrowsersneedingattention
        | BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeBrowsersNeedingAttentionResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeBrowsersNeedingAttentionResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeBrowsersNeedingAttentionResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementV1CountChromeBrowsersNeedingAttentionResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Reports$Countchromebrowsersneedingattention;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Customers$Reports$Countchromebrowsersneedingattention;
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
              rootUrl +
              '/v1/{+customer}/reports:countChromeBrowsersNeedingAttention'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['customer'],
        pathParams: ['customer'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleChromeManagementV1CountChromeBrowsersNeedingAttentionResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromeManagementV1CountChromeBrowsersNeedingAttentionResponse>(
          parameters
        );
      }
    }

    /**
     * Get a count of Chrome crash events.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
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
     *   const res = await chromemanagement.customers.reports.countChromeCrashEvents({
     *     // Customer ID.
     *     customer: 'customers/my-customer',
     *     // Query string to filter results, AND-separated fields in EBNF syntax. Supported filter fields: * major_browser_version * minor_browser_version * browser_channel * device_platform * past_number_days Example: `major_browser_version = 'M115' AND past_number_days = '28'`.
     *     filter: 'placeholder-value',
     *     // Field used to order results. Supported order by fields: * browser_version * count * date
     *     orderBy: 'placeholder-value',
     *     // If specified, only count the number of crash events of the devices in this organizational unit.
     *     orgUnitId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "crashEventCounts": []
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
    countChromeCrashEvents(
      params: Params$Resource$Customers$Reports$Countchromecrashevents,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    countChromeCrashEvents(
      params?: Params$Resource$Customers$Reports$Countchromecrashevents,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementV1CountChromeCrashEventsResponse>
    >;
    countChromeCrashEvents(
      params: Params$Resource$Customers$Reports$Countchromecrashevents,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    countChromeCrashEvents(
      params: Params$Resource$Customers$Reports$Countchromecrashevents,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeCrashEventsResponse>,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeCrashEventsResponse>
    ): void;
    countChromeCrashEvents(
      params: Params$Resource$Customers$Reports$Countchromecrashevents,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeCrashEventsResponse>
    ): void;
    countChromeCrashEvents(
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeCrashEventsResponse>
    ): void;
    countChromeCrashEvents(
      paramsOrCallback?:
        | Params$Resource$Customers$Reports$Countchromecrashevents
        | BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeCrashEventsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeCrashEventsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeCrashEventsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementV1CountChromeCrashEventsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Reports$Countchromecrashevents;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Reports$Countchromecrashevents;
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
              rootUrl + '/v1/{+customer}/reports:countChromeCrashEvents'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['customer'],
        pathParams: ['customer'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleChromeManagementV1CountChromeCrashEventsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromeManagementV1CountChromeCrashEventsResponse>(
          parameters
        );
      }
    }

    /**
     * Generate report of the number of devices expiring in each month of the selected time frame. Devices are grouped by auto update expiration date and model. Further information can be found [here](https://support.google.com/chrome/a/answer/10564947).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
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
     *   const res =
     *     await chromemanagement.customers.reports.countChromeDevicesReachingAutoExpirationDate(
     *       {
     *         // Required. The customer ID or "my_customer" prefixed with "customers/".
     *         customer: 'customers/my-customer',
     *         // Optional. Maximum expiration date in format yyyy-mm-dd in UTC timezone. If included returns all devices that have already expired and devices with auto expiration date equal to or earlier than the maximum date.
     *         maxAueDate: 'placeholder-value',
     *         // Optional. Maximum expiration date in format yyyy-mm-dd in UTC timezone. If included returns all devices that have already expired and devices with auto expiration date equal to or later than the minimum date.
     *         minAueDate: 'placeholder-value',
     *         // Optional. The organizational unit ID, if omitted, will return data for all organizational units.
     *         orgUnitId: 'placeholder-value',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "deviceAueCountReports": []
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
    countChromeDevicesReachingAutoExpirationDate(
      params: Params$Resource$Customers$Reports$Countchromedevicesreachingautoexpirationdate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    countChromeDevicesReachingAutoExpirationDate(
      params?: Params$Resource$Customers$Reports$Countchromedevicesreachingautoexpirationdate,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse>
    >;
    countChromeDevicesReachingAutoExpirationDate(
      params: Params$Resource$Customers$Reports$Countchromedevicesreachingautoexpirationdate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    countChromeDevicesReachingAutoExpirationDate(
      params: Params$Resource$Customers$Reports$Countchromedevicesreachingautoexpirationdate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse>,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse>
    ): void;
    countChromeDevicesReachingAutoExpirationDate(
      params: Params$Resource$Customers$Reports$Countchromedevicesreachingautoexpirationdate,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse>
    ): void;
    countChromeDevicesReachingAutoExpirationDate(
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse>
    ): void;
    countChromeDevicesReachingAutoExpirationDate(
      paramsOrCallback?:
        | Params$Resource$Customers$Reports$Countchromedevicesreachingautoexpirationdate
        | BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Reports$Countchromedevicesreachingautoexpirationdate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Customers$Reports$Countchromedevicesreachingautoexpirationdate;
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
              rootUrl +
              '/v1/{+customer}/reports:countChromeDevicesReachingAutoExpirationDate'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['customer'],
        pathParams: ['customer'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse>(
          parameters
        );
      }
    }

    /**
     * Counts of ChromeOS devices that have not synced policies or have lacked user activity in the past 28 days, are out of date, or are not complaint. Further information can be found here https://support.google.com/chrome/a/answer/10564947
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
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
     *   const res =
     *     await chromemanagement.customers.reports.countChromeDevicesThatNeedAttention(
     *       {
     *         // Required. The customer ID or "my_customer" prefixed with "customers/".
     *         customer: 'customers/my-customer',
     *         // Optional. The ID of the organizational unit. If omitted, all data will be returned.
     *         orgUnitId: 'placeholder-value',
     *         // Required. Mask of the fields that should be populated in the returned report.
     *         readMask: 'placeholder-value',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "noRecentPolicySyncCount": "my_noRecentPolicySyncCount",
     *   //   "noRecentUserActivityCount": "my_noRecentUserActivityCount",
     *   //   "osVersionNotCompliantCount": "my_osVersionNotCompliantCount",
     *   //   "pendingUpdate": "my_pendingUpdate",
     *   //   "unsupportedPolicyCount": "my_unsupportedPolicyCount"
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
    countChromeDevicesThatNeedAttention(
      params: Params$Resource$Customers$Reports$Countchromedevicesthatneedattention,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    countChromeDevicesThatNeedAttention(
      params?: Params$Resource$Customers$Reports$Countchromedevicesthatneedattention,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse>
    >;
    countChromeDevicesThatNeedAttention(
      params: Params$Resource$Customers$Reports$Countchromedevicesthatneedattention,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    countChromeDevicesThatNeedAttention(
      params: Params$Resource$Customers$Reports$Countchromedevicesthatneedattention,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse>,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse>
    ): void;
    countChromeDevicesThatNeedAttention(
      params: Params$Resource$Customers$Reports$Countchromedevicesthatneedattention,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse>
    ): void;
    countChromeDevicesThatNeedAttention(
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse>
    ): void;
    countChromeDevicesThatNeedAttention(
      paramsOrCallback?:
        | Params$Resource$Customers$Reports$Countchromedevicesthatneedattention
        | BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Reports$Countchromedevicesthatneedattention;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Customers$Reports$Countchromedevicesthatneedattention;
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
              rootUrl +
              '/v1/{+customer}/reports:countChromeDevicesThatNeedAttention'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['customer'],
        pathParams: ['customer'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse>(
          parameters
        );
      }
    }

    /**
     * Counts of devices with a specific hardware specification from the requested hardware type (for example model name, processor type). Further information can be found here https://support.google.com/chrome/a/answer/10564947
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
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
     *   const res =
     *     await chromemanagement.customers.reports.countChromeHardwareFleetDevices({
     *       // Required. The customer ID or "my_customer".
     *       customer: 'customers/my-customer',
     *       // Optional. The ID of the organizational unit. If omitted, all data will be returned.
     *       orgUnitId: 'placeholder-value',
     *       // Required. Mask of the fields that should be populated in the returned report.
     *       readMask: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cpuReports": [],
     *   //   "memoryReports": [],
     *   //   "modelReports": [],
     *   //   "storageReports": []
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
    countChromeHardwareFleetDevices(
      params: Params$Resource$Customers$Reports$Countchromehardwarefleetdevices,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    countChromeHardwareFleetDevices(
      params?: Params$Resource$Customers$Reports$Countchromehardwarefleetdevices,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse>
    >;
    countChromeHardwareFleetDevices(
      params: Params$Resource$Customers$Reports$Countchromehardwarefleetdevices,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    countChromeHardwareFleetDevices(
      params: Params$Resource$Customers$Reports$Countchromehardwarefleetdevices,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse>,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse>
    ): void;
    countChromeHardwareFleetDevices(
      params: Params$Resource$Customers$Reports$Countchromehardwarefleetdevices,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse>
    ): void;
    countChromeHardwareFleetDevices(
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse>
    ): void;
    countChromeHardwareFleetDevices(
      paramsOrCallback?:
        | Params$Resource$Customers$Reports$Countchromehardwarefleetdevices
        | BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Reports$Countchromehardwarefleetdevices;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Customers$Reports$Countchromehardwarefleetdevices;
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
              rootUrl +
              '/v1/{+customer}/reports:countChromeHardwareFleetDevices'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['customer'],
        pathParams: ['customer'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse>(
          parameters
        );
      }
    }

    /**
     * Generate report of installed Chrome versions.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
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
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    countChromeVersions(
      params?: Params$Resource$Customers$Reports$Countchromeversions,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementV1CountChromeVersionsResponse>
    >;
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
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementV1CountChromeVersionsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
            apiVersion: '',
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
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
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
     *     // Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Supported filter fields: * app_name * app_type * install_type * number_of_permissions * total_install_count * latest_profile_active_date * permission_name * app_id * manifest_versions * risk_score
     *     filter: 'placeholder-value',
     *     // Field used to order results. Supported order by fields: * app_name * app_type * install_type * number_of_permissions * total_install_count * app_id * manifest_versions * risk_score
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
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    countInstalledApps(
      params?: Params$Resource$Customers$Reports$Countinstalledapps,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementV1CountInstalledAppsResponse>
    >;
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
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementV1CountInstalledAppsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
            apiVersion: '',
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
     * Get a summary of printing done by each printer.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
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
     *   const res = await chromemanagement.customers.reports.countPrintJobsByPrinter({
     *     // Required. Customer ID prefixed with "customers/" or "customers/my_customer" to use the customer associated to the account making the request.
     *     customer: 'customers/my-customer',
     *     // Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Note: Only \>= and <= comparators are supported in this filter. Supported filter fields: * complete_time
     *     filter: 'placeholder-value',
     *     // Field used to order results. If omitted, results will be ordered in ascending order of the 'printer' field. Supported order_by fields: * printer * job_count * device_count * user_count
     *     orderBy: 'placeholder-value',
     *     // Maximum number of results to return. Maximum and default are 100.
     *     pageSize: 'placeholder-value',
     *     // Token to specify the page of the response to be returned.
     *     pageToken: 'placeholder-value',
     *     // The ID of the organizational unit for printers. If specified, only data for printers from the specified organizational unit will be returned. If omitted, data for printers from all organizational units will be returned.
     *     printerOrgUnitId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "printerReports": [],
     *   //   "totalSize": "my_totalSize"
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
    countPrintJobsByPrinter(
      params: Params$Resource$Customers$Reports$Countprintjobsbyprinter,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    countPrintJobsByPrinter(
      params?: Params$Resource$Customers$Reports$Countprintjobsbyprinter,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementV1CountPrintJobsByPrinterResponse>
    >;
    countPrintJobsByPrinter(
      params: Params$Resource$Customers$Reports$Countprintjobsbyprinter,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    countPrintJobsByPrinter(
      params: Params$Resource$Customers$Reports$Countprintjobsbyprinter,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1CountPrintJobsByPrinterResponse>,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountPrintJobsByPrinterResponse>
    ): void;
    countPrintJobsByPrinter(
      params: Params$Resource$Customers$Reports$Countprintjobsbyprinter,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountPrintJobsByPrinterResponse>
    ): void;
    countPrintJobsByPrinter(
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountPrintJobsByPrinterResponse>
    ): void;
    countPrintJobsByPrinter(
      paramsOrCallback?:
        | Params$Resource$Customers$Reports$Countprintjobsbyprinter
        | BodyResponseCallback<Schema$GoogleChromeManagementV1CountPrintJobsByPrinterResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1CountPrintJobsByPrinterResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromeManagementV1CountPrintJobsByPrinterResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementV1CountPrintJobsByPrinterResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Reports$Countprintjobsbyprinter;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Customers$Reports$Countprintjobsbyprinter;
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
              rootUrl + '/v1/{+customer}/reports:countPrintJobsByPrinter'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['customer'],
        pathParams: ['customer'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleChromeManagementV1CountPrintJobsByPrinterResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromeManagementV1CountPrintJobsByPrinterResponse>(
          parameters
        );
      }
    }

    /**
     * Get a summary of printing done by each user.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
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
     *   const res = await chromemanagement.customers.reports.countPrintJobsByUser({
     *     // Required. Customer ID prefixed with "customers/" or "customers/my_customer" to use the customer associated to the account making the request.
     *     customer: 'customers/my-customer',
     *     // Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Note: Only \>= and <= comparators are supported in this filter. Supported filter fields: * complete_time
     *     filter: 'placeholder-value',
     *     // Field used to order results. If omitted, results will be ordered in ascending order of the 'user_email' field. Supported order_by fields: * user_email * job_count * printer_count * device_count
     *     orderBy: 'placeholder-value',
     *     // Maximum number of results to return. Maximum and default are 100.
     *     pageSize: 'placeholder-value',
     *     // Token to specify the page of the response to be returned.
     *     pageToken: 'placeholder-value',
     *     // The ID of the organizational unit for printers. If specified, only print jobs initiated with printers from the specified organizational unit will be counted. If omitted, all print jobs will be counted.
     *     printerOrgUnitId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "totalSize": "my_totalSize",
     *   //   "userPrintReports": []
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
    countPrintJobsByUser(
      params: Params$Resource$Customers$Reports$Countprintjobsbyuser,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    countPrintJobsByUser(
      params?: Params$Resource$Customers$Reports$Countprintjobsbyuser,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementV1CountPrintJobsByUserResponse>
    >;
    countPrintJobsByUser(
      params: Params$Resource$Customers$Reports$Countprintjobsbyuser,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    countPrintJobsByUser(
      params: Params$Resource$Customers$Reports$Countprintjobsbyuser,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1CountPrintJobsByUserResponse>,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountPrintJobsByUserResponse>
    ): void;
    countPrintJobsByUser(
      params: Params$Resource$Customers$Reports$Countprintjobsbyuser,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountPrintJobsByUserResponse>
    ): void;
    countPrintJobsByUser(
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountPrintJobsByUserResponse>
    ): void;
    countPrintJobsByUser(
      paramsOrCallback?:
        | Params$Resource$Customers$Reports$Countprintjobsbyuser
        | BodyResponseCallback<Schema$GoogleChromeManagementV1CountPrintJobsByUserResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1CountPrintJobsByUserResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromeManagementV1CountPrintJobsByUserResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementV1CountPrintJobsByUserResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Reports$Countprintjobsbyuser;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Reports$Countprintjobsbyuser;
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
              rootUrl + '/v1/{+customer}/reports:countPrintJobsByUser'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['customer'],
        pathParams: ['customer'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleChromeManagementV1CountPrintJobsByUserResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromeManagementV1CountPrintJobsByUserResponse>(
          parameters
        );
      }
    }

    /**
     * Get a list of print jobs.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
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
     *   const res = await chromemanagement.customers.reports.enumeratePrintJobs({
     *     // Required. Customer ID prefixed with "customers/" or "customers/my_customer" to use the customer associated to the account making the request.
     *     customer: 'customers/my-customer',
     *     // Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Note: Only \>= and <= comparators are supported for `complete_time`. Note: Only = comparator supported for `user_id` and `printer_id`. Supported filter fields: * complete_time * printer_id * user_id
     *     filter: 'placeholder-value',
     *     // Field used to order results. If not specified, results will be ordered in descending order of the `complete_time` field. Supported order by fields: * title * state * create_time * complete_time * document_page_count * color_mode * duplex_mode * printer * user_email
     *     orderBy: 'placeholder-value',
     *     // The number of print jobs in the page from 0 to 100 inclusive, if page_size is not specified or zero, the size will be 50.
     *     pageSize: 'placeholder-value',
     *     // A page token received from a previous `EnumeratePrintJobs` call. Provide this to retrieve the subsequent page. If omitted, the first page of results will be returned. When paginating, all other parameters provided to `EnumeratePrintJobs` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // The ID of the organizational unit for printers. If specified, only print jobs submitted to printers from the specified organizational unit will be returned.
     *     printerOrgUnitId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "printJobs": [],
     *   //   "totalSize": "my_totalSize"
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
    enumeratePrintJobs(
      params: Params$Resource$Customers$Reports$Enumerateprintjobs,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    enumeratePrintJobs(
      params?: Params$Resource$Customers$Reports$Enumerateprintjobs,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementV1EnumeratePrintJobsResponse>
    >;
    enumeratePrintJobs(
      params: Params$Resource$Customers$Reports$Enumerateprintjobs,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    enumeratePrintJobs(
      params: Params$Resource$Customers$Reports$Enumerateprintjobs,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1EnumeratePrintJobsResponse>,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1EnumeratePrintJobsResponse>
    ): void;
    enumeratePrintJobs(
      params: Params$Resource$Customers$Reports$Enumerateprintjobs,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1EnumeratePrintJobsResponse>
    ): void;
    enumeratePrintJobs(
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1EnumeratePrintJobsResponse>
    ): void;
    enumeratePrintJobs(
      paramsOrCallback?:
        | Params$Resource$Customers$Reports$Enumerateprintjobs
        | BodyResponseCallback<Schema$GoogleChromeManagementV1EnumeratePrintJobsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1EnumeratePrintJobsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromeManagementV1EnumeratePrintJobsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementV1EnumeratePrintJobsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Reports$Enumerateprintjobs;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Reports$Enumerateprintjobs;
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
              rootUrl + '/v1/{+customer}/reports:enumeratePrintJobs'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['customer'],
        pathParams: ['customer'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleChromeManagementV1EnumeratePrintJobsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromeManagementV1EnumeratePrintJobsResponse>(
          parameters
        );
      }
    }

    /**
     * Generate report of managed Chrome browser devices that have a specified app installed.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
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
     *     // Type of the app. Optional. If not provided, an app type will be inferred from the format of the app ID.
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
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    findInstalledAppDevices(
      params?: Params$Resource$Customers$Reports$Findinstalledappdevices,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementV1FindInstalledAppDevicesResponse>
    >;
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
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementV1FindInstalledAppDevicesResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
            apiVersion: '',
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

  export interface Params$Resource$Customers$Reports$Countchromebrowsersneedingattention
    extends StandardParameters {
    /**
     * Required. The customer ID or "my_customer" prefixed with "customers/".
     */
    customer?: string;
    /**
     * Optional. The ID of the organizational unit. If omitted, all data will be returned.
     */
    orgUnitId?: string;
  }
  export interface Params$Resource$Customers$Reports$Countchromecrashevents
    extends StandardParameters {
    /**
     * Customer ID.
     */
    customer?: string;
    /**
     * Query string to filter results, AND-separated fields in EBNF syntax. Supported filter fields: * major_browser_version * minor_browser_version * browser_channel * device_platform * past_number_days Example: `major_browser_version = 'M115' AND past_number_days = '28'`.
     */
    filter?: string;
    /**
     * Field used to order results. Supported order by fields: * browser_version * count * date
     */
    orderBy?: string;
    /**
     * If specified, only count the number of crash events of the devices in this organizational unit.
     */
    orgUnitId?: string;
  }
  export interface Params$Resource$Customers$Reports$Countchromedevicesreachingautoexpirationdate
    extends StandardParameters {
    /**
     * Required. The customer ID or "my_customer" prefixed with "customers/".
     */
    customer?: string;
    /**
     * Optional. Maximum expiration date in format yyyy-mm-dd in UTC timezone. If included returns all devices that have already expired and devices with auto expiration date equal to or earlier than the maximum date.
     */
    maxAueDate?: string;
    /**
     * Optional. Maximum expiration date in format yyyy-mm-dd in UTC timezone. If included returns all devices that have already expired and devices with auto expiration date equal to or later than the minimum date.
     */
    minAueDate?: string;
    /**
     * Optional. The organizational unit ID, if omitted, will return data for all organizational units.
     */
    orgUnitId?: string;
  }
  export interface Params$Resource$Customers$Reports$Countchromedevicesthatneedattention
    extends StandardParameters {
    /**
     * Required. The customer ID or "my_customer" prefixed with "customers/".
     */
    customer?: string;
    /**
     * Optional. The ID of the organizational unit. If omitted, all data will be returned.
     */
    orgUnitId?: string;
    /**
     * Required. Mask of the fields that should be populated in the returned report.
     */
    readMask?: string;
  }
  export interface Params$Resource$Customers$Reports$Countchromehardwarefleetdevices
    extends StandardParameters {
    /**
     * Required. The customer ID or "my_customer".
     */
    customer?: string;
    /**
     * Optional. The ID of the organizational unit. If omitted, all data will be returned.
     */
    orgUnitId?: string;
    /**
     * Required. Mask of the fields that should be populated in the returned report.
     */
    readMask?: string;
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
     * Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Supported filter fields: * app_name * app_type * install_type * number_of_permissions * total_install_count * latest_profile_active_date * permission_name * app_id * manifest_versions * risk_score
     */
    filter?: string;
    /**
     * Field used to order results. Supported order by fields: * app_name * app_type * install_type * number_of_permissions * total_install_count * app_id * manifest_versions * risk_score
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
  export interface Params$Resource$Customers$Reports$Countprintjobsbyprinter
    extends StandardParameters {
    /**
     * Required. Customer ID prefixed with "customers/" or "customers/my_customer" to use the customer associated to the account making the request.
     */
    customer?: string;
    /**
     * Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Note: Only \>= and <= comparators are supported in this filter. Supported filter fields: * complete_time
     */
    filter?: string;
    /**
     * Field used to order results. If omitted, results will be ordered in ascending order of the 'printer' field. Supported order_by fields: * printer * job_count * device_count * user_count
     */
    orderBy?: string;
    /**
     * Maximum number of results to return. Maximum and default are 100.
     */
    pageSize?: number;
    /**
     * Token to specify the page of the response to be returned.
     */
    pageToken?: string;
    /**
     * The ID of the organizational unit for printers. If specified, only data for printers from the specified organizational unit will be returned. If omitted, data for printers from all organizational units will be returned.
     */
    printerOrgUnitId?: string;
  }
  export interface Params$Resource$Customers$Reports$Countprintjobsbyuser
    extends StandardParameters {
    /**
     * Required. Customer ID prefixed with "customers/" or "customers/my_customer" to use the customer associated to the account making the request.
     */
    customer?: string;
    /**
     * Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Note: Only \>= and <= comparators are supported in this filter. Supported filter fields: * complete_time
     */
    filter?: string;
    /**
     * Field used to order results. If omitted, results will be ordered in ascending order of the 'user_email' field. Supported order_by fields: * user_email * job_count * printer_count * device_count
     */
    orderBy?: string;
    /**
     * Maximum number of results to return. Maximum and default are 100.
     */
    pageSize?: number;
    /**
     * Token to specify the page of the response to be returned.
     */
    pageToken?: string;
    /**
     * The ID of the organizational unit for printers. If specified, only print jobs initiated with printers from the specified organizational unit will be counted. If omitted, all print jobs will be counted.
     */
    printerOrgUnitId?: string;
  }
  export interface Params$Resource$Customers$Reports$Enumerateprintjobs
    extends StandardParameters {
    /**
     * Required. Customer ID prefixed with "customers/" or "customers/my_customer" to use the customer associated to the account making the request.
     */
    customer?: string;
    /**
     * Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Note: Only \>= and <= comparators are supported for `complete_time`. Note: Only = comparator supported for `user_id` and `printer_id`. Supported filter fields: * complete_time * printer_id * user_id
     */
    filter?: string;
    /**
     * Field used to order results. If not specified, results will be ordered in descending order of the `complete_time` field. Supported order by fields: * title * state * create_time * complete_time * document_page_count * color_mode * duplex_mode * printer * user_email
     */
    orderBy?: string;
    /**
     * The number of print jobs in the page from 0 to 100 inclusive, if page_size is not specified or zero, the size will be 50.
     */
    pageSize?: number;
    /**
     * A page token received from a previous `EnumeratePrintJobs` call. Provide this to retrieve the subsequent page. If omitted, the first page of results will be returned. When paginating, all other parameters provided to `EnumeratePrintJobs` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * The ID of the organizational unit for printers. If specified, only print jobs submitted to printers from the specified organizational unit will be returned.
     */
    printerOrgUnitId?: string;
  }
  export interface Params$Resource$Customers$Reports$Findinstalledappdevices
    extends StandardParameters {
    /**
     * Unique identifier of the app. For Chrome apps and extensions, the 32-character id (e.g. ehoadneljpdggcbbknedodolkkjodefl). For Android apps, the package name (e.g. com.evernote).
     */
    appId?: string;
    /**
     * Type of the app. Optional. If not provided, an app type will be inferred from the format of the app ID.
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
    events: Resource$Customers$Telemetry$Events;
    notificationConfigs: Resource$Customers$Telemetry$Notificationconfigs;
    users: Resource$Customers$Telemetry$Users;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.devices = new Resource$Customers$Telemetry$Devices(this.context);
      this.events = new Resource$Customers$Telemetry$Events(this.context);
      this.notificationConfigs =
        new Resource$Customers$Telemetry$Notificationconfigs(this.context);
      this.users = new Resource$Customers$Telemetry$Users(this.context);
    }
  }

  export class Resource$Customers$Telemetry$Devices {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get telemetry device.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
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
     *   const res = await chromemanagement.customers.telemetry.devices.get({
     *     // Required. Name of the `TelemetryDevice` to return.
     *     name: 'customers/my-customer/telemetry/devices/my-device',
     *     // Required. Read mask to specify which fields to return. Supported read_mask paths are: - name - org_unit_id - device_id - serial_number - cpu_info - cpu_status_report - memory_info - memory_status_report - network_info - network_diagnostics_report - network_status_report - os_update_status - graphics_info - graphics_status_report - battery_info - battery_status_report - storage_info - storage_status_report - thunderbolt_info - audio_status_report - boot_performance_report - heartbeat_status_report - network_bandwidth_report - peripherals_report - kiosk_app_status_report - app_report - runtime_counters_report
     *     readMask: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appReport": [],
     *   //   "audioStatusReport": [],
     *   //   "batteryInfo": [],
     *   //   "batteryStatusReport": [],
     *   //   "bootPerformanceReport": [],
     *   //   "cpuInfo": [],
     *   //   "cpuStatusReport": [],
     *   //   "customer": "my_customer",
     *   //   "deviceId": "my_deviceId",
     *   //   "graphicsInfo": {},
     *   //   "graphicsStatusReport": [],
     *   //   "heartbeatStatusReport": [],
     *   //   "kioskAppStatusReport": [],
     *   //   "memoryInfo": {},
     *   //   "memoryStatusReport": [],
     *   //   "name": "my_name",
     *   //   "networkBandwidthReport": [],
     *   //   "networkDiagnosticsReport": [],
     *   //   "networkInfo": {},
     *   //   "networkStatusReport": [],
     *   //   "orgUnitId": "my_orgUnitId",
     *   //   "osUpdateStatus": [],
     *   //   "peripheralsReport": [],
     *   //   "runtimeCountersReport": [],
     *   //   "serialNumber": "my_serialNumber",
     *   //   "storageInfo": {},
     *   //   "storageStatusReport": [],
     *   //   "thunderboltInfo": []
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
      params: Params$Resource$Customers$Telemetry$Devices$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Customers$Telemetry$Devices$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementV1TelemetryDevice>
    >;
    get(
      params: Params$Resource$Customers$Telemetry$Devices$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Customers$Telemetry$Devices$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1TelemetryDevice>,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1TelemetryDevice>
    ): void;
    get(
      params: Params$Resource$Customers$Telemetry$Devices$Get,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1TelemetryDevice>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1TelemetryDevice>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Customers$Telemetry$Devices$Get
        | BodyResponseCallback<Schema$GoogleChromeManagementV1TelemetryDevice>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1TelemetryDevice>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromeManagementV1TelemetryDevice>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementV1TelemetryDevice>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Telemetry$Devices$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Telemetry$Devices$Get;
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
        createAPIRequest<Schema$GoogleChromeManagementV1TelemetryDevice>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromeManagementV1TelemetryDevice>(
          parameters
        );
      }
    }

    /**
     * List all telemetry devices.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
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
     *     // Optional. Only include resources that match the filter. Requests that don't specify a "reports_timestamp" value will default to returning only recent reports. Specify "reports_timestamp\>=0" to get all report data. Supported filter fields: - org_unit_id - serial_number - device_id - reports_timestamp The "reports_timestamp" filter accepts either the Unix Epoch milliseconds format or the RFC3339 UTC "Zulu" format with nanosecond resolution and up to nine fractional digits. Both formats should be surrounded by simple double quotes. Examples: "2014-10-02T15:01:23Z", "2014-10-02T15:01:23.045123456Z", "1679283943823".
     *     filter: 'placeholder-value',
     *     // Maximum number of results to return. Default value is 100. Maximum value is 1000.
     *     pageSize: 'placeholder-value',
     *     // Token to specify next page in the list.
     *     pageToken: 'placeholder-value',
     *     // Required. Customer id or "my_customer" to use the customer associated to the account making the request.
     *     parent: 'customers/my-customer',
     *     // Required. Read mask to specify which fields to return. Supported read_mask paths are: - name - org_unit_id - device_id - serial_number - cpu_info - cpu_status_report - memory_info - memory_status_report - network_info - network_diagnostics_report - network_status_report - os_update_status - graphics_info - graphics_status_report - battery_info - battery_status_report - storage_info - storage_status_report - thunderbolt_info - audio_status_report - boot_performance_report - heartbeat_status_report - network_bandwidth_report - peripherals_report - kiosk_app_status_report - app_report - runtime_counters_report
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
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Customers$Telemetry$Devices$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementV1ListTelemetryDevicesResponse>
    >;
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
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementV1ListTelemetryDevicesResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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

  export interface Params$Resource$Customers$Telemetry$Devices$Get
    extends StandardParameters {
    /**
     * Required. Name of the `TelemetryDevice` to return.
     */
    name?: string;
    /**
     * Required. Read mask to specify which fields to return. Supported read_mask paths are: - name - org_unit_id - device_id - serial_number - cpu_info - cpu_status_report - memory_info - memory_status_report - network_info - network_diagnostics_report - network_status_report - os_update_status - graphics_info - graphics_status_report - battery_info - battery_status_report - storage_info - storage_status_report - thunderbolt_info - audio_status_report - boot_performance_report - heartbeat_status_report - network_bandwidth_report - peripherals_report - kiosk_app_status_report - app_report - runtime_counters_report
     */
    readMask?: string;
  }
  export interface Params$Resource$Customers$Telemetry$Devices$List
    extends StandardParameters {
    /**
     * Optional. Only include resources that match the filter. Requests that don't specify a "reports_timestamp" value will default to returning only recent reports. Specify "reports_timestamp\>=0" to get all report data. Supported filter fields: - org_unit_id - serial_number - device_id - reports_timestamp The "reports_timestamp" filter accepts either the Unix Epoch milliseconds format or the RFC3339 UTC "Zulu" format with nanosecond resolution and up to nine fractional digits. Both formats should be surrounded by simple double quotes. Examples: "2014-10-02T15:01:23Z", "2014-10-02T15:01:23.045123456Z", "1679283943823".
     */
    filter?: string;
    /**
     * Maximum number of results to return. Default value is 100. Maximum value is 1000.
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
     * Required. Read mask to specify which fields to return. Supported read_mask paths are: - name - org_unit_id - device_id - serial_number - cpu_info - cpu_status_report - memory_info - memory_status_report - network_info - network_diagnostics_report - network_status_report - os_update_status - graphics_info - graphics_status_report - battery_info - battery_status_report - storage_info - storage_status_report - thunderbolt_info - audio_status_report - boot_performance_report - heartbeat_status_report - network_bandwidth_report - peripherals_report - kiosk_app_status_report - app_report - runtime_counters_report
     */
    readMask?: string;
  }

  export class Resource$Customers$Telemetry$Events {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * List telemetry events.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
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
     *   const res = await chromemanagement.customers.telemetry.events.list({
     *     // Optional. Only include resources that match the filter. Although this parameter is currently optional, this parameter will be required- please specify at least 1 event type. Supported filter fields: - device_id - user_id - device_org_unit_id - user_org_unit_id - timestamp - event_type The "timestamp" filter accepts either the Unix Epoch milliseconds format or the RFC3339 UTC "Zulu" format with nanosecond resolution and up to nine fractional digits. Both formats should be surrounded by simple double quotes. Examples: "2014-10-02T15:01:23Z", "2014-10-02T15:01:23.045123456Z", "1679283943823".
     *     filter: 'placeholder-value',
     *     // Optional. Maximum number of results to return. Default value is 100. Maximum value is 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. Token to specify next page in the list.
     *     pageToken: 'placeholder-value',
     *     // Required. Customer id or "my_customer" to use the customer associated to the account making the request.
     *     parent: 'customers/my-customer',
     *     // Required. Read mask to specify which fields to return. Although currently required, this field will become optional, while the filter parameter with an event type will be come required. Supported read_mask paths are: - device - user - audio_severe_underrun_event - usb_peripherals_event - https_latency_change_event - network_state_change_event - wifi_signal_strength_event - vpn_connection_state_change_event - app_install_event - app_uninstall_event - app_launch_event - os_crash_event - external_displays_event
     *     readMask: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "telemetryEvents": []
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
      params: Params$Resource$Customers$Telemetry$Events$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Customers$Telemetry$Events$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementV1ListTelemetryEventsResponse>
    >;
    list(
      params: Params$Resource$Customers$Telemetry$Events$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Customers$Telemetry$Events$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1ListTelemetryEventsResponse>,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1ListTelemetryEventsResponse>
    ): void;
    list(
      params: Params$Resource$Customers$Telemetry$Events$List,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1ListTelemetryEventsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1ListTelemetryEventsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Customers$Telemetry$Events$List
        | BodyResponseCallback<Schema$GoogleChromeManagementV1ListTelemetryEventsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1ListTelemetryEventsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromeManagementV1ListTelemetryEventsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementV1ListTelemetryEventsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Telemetry$Events$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Telemetry$Events$List;
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
            url: (rootUrl + '/v1/{+parent}/telemetry/events').replace(
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
        createAPIRequest<Schema$GoogleChromeManagementV1ListTelemetryEventsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromeManagementV1ListTelemetryEventsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Customers$Telemetry$Events$List
    extends StandardParameters {
    /**
     * Optional. Only include resources that match the filter. Although this parameter is currently optional, this parameter will be required- please specify at least 1 event type. Supported filter fields: - device_id - user_id - device_org_unit_id - user_org_unit_id - timestamp - event_type The "timestamp" filter accepts either the Unix Epoch milliseconds format or the RFC3339 UTC "Zulu" format with nanosecond resolution and up to nine fractional digits. Both formats should be surrounded by simple double quotes. Examples: "2014-10-02T15:01:23Z", "2014-10-02T15:01:23.045123456Z", "1679283943823".
     */
    filter?: string;
    /**
     * Optional. Maximum number of results to return. Default value is 100. Maximum value is 1000.
     */
    pageSize?: number;
    /**
     * Optional. Token to specify next page in the list.
     */
    pageToken?: string;
    /**
     * Required. Customer id or "my_customer" to use the customer associated to the account making the request.
     */
    parent?: string;
    /**
     * Required. Read mask to specify which fields to return. Although currently required, this field will become optional, while the filter parameter with an event type will be come required. Supported read_mask paths are: - device - user - audio_severe_underrun_event - usb_peripherals_event - https_latency_change_event - network_state_change_event - wifi_signal_strength_event - vpn_connection_state_change_event - app_install_event - app_uninstall_event - app_launch_event - os_crash_event - external_displays_event
     */
    readMask?: string;
  }

  export class Resource$Customers$Telemetry$Notificationconfigs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Create a telemetry notification config.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
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
     *   const res =
     *     await chromemanagement.customers.telemetry.notificationConfigs.create({
     *       // Required. The parent resource where this notification config will be created. Format: `customers/{customer\}`
     *       parent: 'customers/my-customer',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "customer": "my_customer",
     *         //   "filter": {},
     *         //   "googleCloudPubsubTopic": "my_googleCloudPubsubTopic",
     *         //   "name": "my_name"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "customer": "my_customer",
     *   //   "filter": {},
     *   //   "googleCloudPubsubTopic": "my_googleCloudPubsubTopic",
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
    create(
      params: Params$Resource$Customers$Telemetry$Notificationconfigs$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Customers$Telemetry$Notificationconfigs$Create,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementV1TelemetryNotificationConfig>
    >;
    create(
      params: Params$Resource$Customers$Telemetry$Notificationconfigs$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Customers$Telemetry$Notificationconfigs$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1TelemetryNotificationConfig>,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1TelemetryNotificationConfig>
    ): void;
    create(
      params: Params$Resource$Customers$Telemetry$Notificationconfigs$Create,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1TelemetryNotificationConfig>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1TelemetryNotificationConfig>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Customers$Telemetry$Notificationconfigs$Create
        | BodyResponseCallback<Schema$GoogleChromeManagementV1TelemetryNotificationConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1TelemetryNotificationConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromeManagementV1TelemetryNotificationConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementV1TelemetryNotificationConfig>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Telemetry$Notificationconfigs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Customers$Telemetry$Notificationconfigs$Create;
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
              rootUrl + '/v1/{+parent}/telemetry/notificationConfigs'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleChromeManagementV1TelemetryNotificationConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromeManagementV1TelemetryNotificationConfig>(
          parameters
        );
      }
    }

    /**
     * Delete a telemetry notification config.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
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
     *   const res =
     *     await chromemanagement.customers.telemetry.notificationConfigs.delete({
     *       // Required. The name of the notification config to delete. Format: `customers/{customer\}/telemetry/notificationConfigs/{notification_config\}`
     *       name: 'customers/my-customer/telemetry/notificationConfigs/my-notificationConfig',
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
      params: Params$Resource$Customers$Telemetry$Notificationconfigs$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Customers$Telemetry$Notificationconfigs$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>;
    delete(
      params: Params$Resource$Customers$Telemetry$Notificationconfigs$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Customers$Telemetry$Notificationconfigs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Customers$Telemetry$Notificationconfigs$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Customers$Telemetry$Notificationconfigs$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Telemetry$Notificationconfigs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Customers$Telemetry$Notificationconfigs$Delete;
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * List all telemetry notification configs.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
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
     *   const res =
     *     await chromemanagement.customers.telemetry.notificationConfigs.list({
     *       // The maximum number of notification configs to return. The service may return fewer than this value. If unspecified, at most 100 notification configs will be returned. The maximum value is 100; values above 100 will be coerced to 100.
     *       pageSize: 'placeholder-value',
     *       // A page token, received from a previous `ListTelemetryNotificationConfigs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTelemetryNotificationConfigs` must match the call that provided the page token.
     *       pageToken: 'placeholder-value',
     *       // Required. The parent which owns the notification configs.
     *       parent: 'customers/my-customer',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "telemetryNotificationConfigs": []
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
      params: Params$Resource$Customers$Telemetry$Notificationconfigs$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Customers$Telemetry$Notificationconfigs$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementV1ListTelemetryNotificationConfigsResponse>
    >;
    list(
      params: Params$Resource$Customers$Telemetry$Notificationconfigs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Customers$Telemetry$Notificationconfigs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1ListTelemetryNotificationConfigsResponse>,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1ListTelemetryNotificationConfigsResponse>
    ): void;
    list(
      params: Params$Resource$Customers$Telemetry$Notificationconfigs$List,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1ListTelemetryNotificationConfigsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1ListTelemetryNotificationConfigsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Customers$Telemetry$Notificationconfigs$List
        | BodyResponseCallback<Schema$GoogleChromeManagementV1ListTelemetryNotificationConfigsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1ListTelemetryNotificationConfigsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromeManagementV1ListTelemetryNotificationConfigsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementV1ListTelemetryNotificationConfigsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Telemetry$Notificationconfigs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Customers$Telemetry$Notificationconfigs$List;
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
              rootUrl + '/v1/{+parent}/telemetry/notificationConfigs'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleChromeManagementV1ListTelemetryNotificationConfigsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromeManagementV1ListTelemetryNotificationConfigsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Customers$Telemetry$Notificationconfigs$Create
    extends StandardParameters {
    /**
     * Required. The parent resource where this notification config will be created. Format: `customers/{customer\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleChromeManagementV1TelemetryNotificationConfig;
  }
  export interface Params$Resource$Customers$Telemetry$Notificationconfigs$Delete
    extends StandardParameters {
    /**
     * Required. The name of the notification config to delete. Format: `customers/{customer\}/telemetry/notificationConfigs/{notification_config\}`
     */
    name?: string;
  }
  export interface Params$Resource$Customers$Telemetry$Notificationconfigs$List
    extends StandardParameters {
    /**
     * The maximum number of notification configs to return. The service may return fewer than this value. If unspecified, at most 100 notification configs will be returned. The maximum value is 100; values above 100 will be coerced to 100.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListTelemetryNotificationConfigs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTelemetryNotificationConfigs` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent which owns the notification configs.
     */
    parent?: string;
  }

  export class Resource$Customers$Telemetry$Users {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get telemetry user.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
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
     *   const res = await chromemanagement.customers.telemetry.users.get({
     *     // Required. Name of the `TelemetryUser` to return.
     *     name: 'customers/my-customer/telemetry/users/my-user',
     *     // Read mask to specify which fields to return. Supported read_mask paths are: - name - org_unit_id - user_id - user_email - user_device.device_id - user_device.audio_status_report - user_device.device_activity_report - user_device.network_bandwidth_report - user_device.peripherals_report - user_device.app_report
     *     readMask: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "customer": "my_customer",
     *   //   "name": "my_name",
     *   //   "orgUnitId": "my_orgUnitId",
     *   //   "userDevice": [],
     *   //   "userEmail": "my_userEmail",
     *   //   "userId": "my_userId"
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
      params: Params$Resource$Customers$Telemetry$Users$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Customers$Telemetry$Users$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementV1TelemetryUser>
    >;
    get(
      params: Params$Resource$Customers$Telemetry$Users$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Customers$Telemetry$Users$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1TelemetryUser>,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1TelemetryUser>
    ): void;
    get(
      params: Params$Resource$Customers$Telemetry$Users$Get,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1TelemetryUser>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1TelemetryUser>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Customers$Telemetry$Users$Get
        | BodyResponseCallback<Schema$GoogleChromeManagementV1TelemetryUser>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1TelemetryUser>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromeManagementV1TelemetryUser>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementV1TelemetryUser>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Telemetry$Users$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Telemetry$Users$Get;
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
        createAPIRequest<Schema$GoogleChromeManagementV1TelemetryUser>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromeManagementV1TelemetryUser>(
          parameters
        );
      }
    }

    /**
     * List all telemetry users.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
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
     *   const res = await chromemanagement.customers.telemetry.users.list({
     *     // Only include resources that match the filter. Supported filter fields: - user_id - user_org_unit_id
     *     filter: 'placeholder-value',
     *     // Maximum number of results to return. Default value is 100. Maximum value is 1000.
     *     pageSize: 'placeholder-value',
     *     // Token to specify next page in the list.
     *     pageToken: 'placeholder-value',
     *     // Required. Customer id or "my_customer" to use the customer associated to the account making the request.
     *     parent: 'customers/my-customer',
     *     // Read mask to specify which fields to return. Supported read_mask paths are: - name - org_unit_id - user_id - user_email - user_device.device_id - user_device.audio_status_report - user_device.device_activity_report - user_device.network_bandwidth_report - user_device.peripherals_report - user_device.app_report
     *     readMask: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "telemetryUsers": []
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
      params: Params$Resource$Customers$Telemetry$Users$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Customers$Telemetry$Users$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementV1ListTelemetryUsersResponse>
    >;
    list(
      params: Params$Resource$Customers$Telemetry$Users$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Customers$Telemetry$Users$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1ListTelemetryUsersResponse>,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1ListTelemetryUsersResponse>
    ): void;
    list(
      params: Params$Resource$Customers$Telemetry$Users$List,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1ListTelemetryUsersResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1ListTelemetryUsersResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Customers$Telemetry$Users$List
        | BodyResponseCallback<Schema$GoogleChromeManagementV1ListTelemetryUsersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1ListTelemetryUsersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromeManagementV1ListTelemetryUsersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementV1ListTelemetryUsersResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Telemetry$Users$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Telemetry$Users$List;
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
            url: (rootUrl + '/v1/{+parent}/telemetry/users').replace(
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
        createAPIRequest<Schema$GoogleChromeManagementV1ListTelemetryUsersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromeManagementV1ListTelemetryUsersResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Customers$Telemetry$Users$Get
    extends StandardParameters {
    /**
     * Required. Name of the `TelemetryUser` to return.
     */
    name?: string;
    /**
     * Read mask to specify which fields to return. Supported read_mask paths are: - name - org_unit_id - user_id - user_email - user_device.device_id - user_device.audio_status_report - user_device.device_activity_report - user_device.network_bandwidth_report - user_device.peripherals_report - user_device.app_report
     */
    readMask?: string;
  }
  export interface Params$Resource$Customers$Telemetry$Users$List
    extends StandardParameters {
    /**
     * Only include resources that match the filter. Supported filter fields: - user_id - user_org_unit_id
     */
    filter?: string;
    /**
     * Maximum number of results to return. Default value is 100. Maximum value is 1000.
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
     * Read mask to specify which fields to return. Supported read_mask paths are: - name - org_unit_id - user_id - user_email - user_device.device_id - user_device.audio_status_report - user_device.device_activity_report - user_device.network_bandwidth_report - user_device.peripherals_report - user_device.app_report
     */
    readMask?: string;
  }

  export class Resource$Customers$Thirdpartyprofileusers {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Moves a third party chrome profile user to a destination OU. All profiles associated to that user will be moved to the destination OU.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
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
     * const chromemanagement = google.chromemanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/chrome.management.profiles'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chromemanagement.customers.thirdPartyProfileUsers.move({
     *     // Required. Format: customers/{customer_id\}/thirdPartyProfileUsers/{third_party_profile_user_id\}
     *     name: 'customers/my-customer/thirdPartyProfileUsers/my-thirdPartyProfileUser',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "destinationOrgUnit": "my_destinationOrgUnit"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "thirdPartyProfileUser": {}
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
    move(
      params: Params$Resource$Customers$Thirdpartyprofileusers$Move,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    move(
      params?: Params$Resource$Customers$Thirdpartyprofileusers$Move,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementVersionsV1MoveThirdPartyProfileUserResponse>
    >;
    move(
      params: Params$Resource$Customers$Thirdpartyprofileusers$Move,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    move(
      params: Params$Resource$Customers$Thirdpartyprofileusers$Move,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1MoveThirdPartyProfileUserResponse>,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1MoveThirdPartyProfileUserResponse>
    ): void;
    move(
      params: Params$Resource$Customers$Thirdpartyprofileusers$Move,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1MoveThirdPartyProfileUserResponse>
    ): void;
    move(
      callback: BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1MoveThirdPartyProfileUserResponse>
    ): void;
    move(
      paramsOrCallback?:
        | Params$Resource$Customers$Thirdpartyprofileusers$Move
        | BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1MoveThirdPartyProfileUserResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1MoveThirdPartyProfileUserResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromeManagementVersionsV1MoveThirdPartyProfileUserResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleChromeManagementVersionsV1MoveThirdPartyProfileUserResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Thirdpartyprofileusers$Move;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Thirdpartyprofileusers$Move;
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
            url: (rootUrl + '/v1/{+name}:move').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleChromeManagementVersionsV1MoveThirdPartyProfileUserResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromeManagementVersionsV1MoveThirdPartyProfileUserResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Customers$Thirdpartyprofileusers$Move
    extends StandardParameters {
    /**
     * Required. Format: customers/{customer_id\}/thirdPartyProfileUsers/{third_party_profile_user_id\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleChromeManagementVersionsV1MoveThirdPartyProfileUserRequest;
  }

  export class Resource$Operations {
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
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
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
     * const chromemanagement = google.chromemanagement('v1');
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
     *   const res = await chromemanagement.operations.cancel({
     *     // The name of the operation resource to be cancelled.
     *     name: 'operations/.*',
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
      params: Params$Resource$Operations$Cancel,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    cancel(
      params?: Params$Resource$Operations$Cancel,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>;
    cancel(
      params: Params$Resource$Operations$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    cancel(
      params: Params$Resource$Operations$Cancel,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Operations$Cancel
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$Cancel;
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
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
     * const chromemanagement = google.chromemanagement('v1');
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
     *   const res = await chromemanagement.operations.delete({
     *     // The name of the operation resource to be deleted.
     *     name: 'operations/.*',
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
      params: Params$Resource$Operations$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Operations$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>;
    delete(
      params: Params$Resource$Operations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Operations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Operations$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Operations$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Operations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$Delete;
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
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
     * const chromemanagement = google.chromemanagement('v1');
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
     *   const res = await chromemanagement.operations.list({
     *     // The standard list filter.
     *     filter: 'placeholder-value',
     *     // The name of the operation's parent resource.
     *     name: 'operations',
     *     // The standard list page size.
     *     pageSize: 'placeholder-value',
     *     // The standard list page token.
     *     pageToken: 'placeholder-value',
     *     // When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the [ListOperationsResponse.unreachable] field. This can only be `true` when reading across collections e.g. when `parent` is set to `"projects/example/locations/-"`. This field is not by default supported and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation.
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
      params: Params$Resource$Operations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Operations$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleLongrunningListOperationsResponse>
    >;
    list(
      params: Params$Resource$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Operations$List,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Operations$List
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleLongrunningListOperationsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$List;
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
        createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Operations$Cancel
    extends StandardParameters {
    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleLongrunningCancelOperationRequest;
  }
  export interface Params$Resource$Operations$Delete
    extends StandardParameters {
    /**
     * The name of the operation resource to be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Operations$List extends StandardParameters {
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
     * When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the [ListOperationsResponse.unreachable] field. This can only be `true` when reading across collections e.g. when `parent` is set to `"projects/example/locations/-"`. This field is not by default supported and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation.
     */
    returnPartialSuccess?: boolean;
  }
}
