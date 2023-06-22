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

export namespace playdeveloperreporting_v1alpha1 {
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
   * Google Play Developer Reporting API
   *
   *
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const playdeveloperreporting = google.playdeveloperreporting('v1alpha1');
   * ```
   */
  export class Playdeveloperreporting {
    context: APIRequestContext;
    anomalies: Resource$Anomalies;
    apps: Resource$Apps;
    vitals: Resource$Vitals;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.anomalies = new Resource$Anomalies(this.context);
      this.apps = new Resource$Apps(this.context);
      this.vitals = new Resource$Vitals(this.context);
    }
  }

  /**
   * Represents an anomaly detected in a dataset. Our anomaly detection systems flag datapoints in a time series that fall outside of and expected range derived from historical data. Although those expected ranges have an upper and a lower bound, we only flag anomalies when the data has become unexpectedly _worse_, which usually corresponds to the case where the metric crosses the upper bound. Multiple contiguous datapoints in a timeline outside of the expected range will be grouped into a single anomaly. Therefore, an anomaly represents effectively a segment of a metric's timeline. The information stored in the `timeline_spec`, `dimensions` and `metric` can be used to fetch a full timeline with extended ragne for context. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app.
   */
  export interface Schema$GooglePlayDeveloperReportingV1alpha1Anomaly {
    /**
     * Combination of dimensions in which the anomaly was detected.
     */
    dimensions?: Schema$GooglePlayDeveloperReportingV1alpha1DimensionValue[];
    /**
     * Metric where the anomaly was detected, together with the anomalous value.
     */
    metric?: Schema$GooglePlayDeveloperReportingV1alpha1MetricValue;
    /**
     * Metric set resource where the anomaly was detected.
     */
    metricSet?: string | null;
    /**
     * Name of the anomaly. Format: apps/{app\}/anomalies/{anomaly\}
     */
    name?: string | null;
    /**
     * Timeline specification that covers the anomaly period.
     */
    timelineSpec?: Schema$GooglePlayDeveloperReportingV1alpha1TimelineSpec;
  }
  /**
   * Singleton resource representing the set of ANR (Application not responding) metrics. This metric set contains ANRs data combined with usage data to produce a normalized metric independent of user counts. **Supported aggregation periods:** * DAILY: metrics are aggregated in calendar date intervals. Due to historical constraints, the only supported timezone is `America/Los_Angeles`. * HOURLY: metrics are aggregated in hourly intervals. The default and only supported timezone is `UTC`. **Supported metrics:** * `anrRate` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that experienced at least one ANR. * `anrRate7dUserWeighted` (`google.type.Decimal`): Rolling average value of `anrRate` in the last 7 days. The daily values are weighted by the count of distinct users for the day. Not supported in HOURLY granularity. * `anrRate28dUserWeighted` (`google.type.Decimal`): Rolling average value of `anrRate` in the last 28 days. The daily values are weighted by the count of distinct users for the day. Not supported in HOURLY granularity. * `userPerceivedAnrRate` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that experienced at least one user-perceived ANR. User-perceived ANRs are currently those of 'Input dispatching' type. * `userPerceivedAnrRate7dUserWeighted` (`google.type.Decimal`): Rolling average value of `userPerceivedAnrRate` in the last 7 days. The daily values are weighted by the count of distinct users for the day. Not supported in HOURLY granularity. * `userPerceivedAnrRate28dUserWeighted` (`google.type.Decimal`): Rolling average value of `userPerceivedAnrRate` in the last 28 days. The daily values are weighted by the count of distinct users for the day. * `distinctUsers` (`google.type.Decimal`): Count of distinct users in the aggregation period that were used as normalization value for the `anrRate` and `userPerceivedAnrRate` metrics. A user is counted in this metric if they used the app in the foreground during the aggregation period. Care must be taken not to aggregate this count further, as it may result in users being counted multiple times. The value is rounded to the nearest multiple of 10, 100, 1,000 or 1,000,000, depending on the magnitude of the value. **Supported dimensions:** * `apiLevel` (string): the API level of Android that was running on the user's device, e.g., 26. * `versionCode` (int64): version of the app that was running on the user's device. * `deviceModel` (string): unique identifier of the user's device model. The form of the identifier is 'deviceBrand/device', where deviceBrand corresponds to Build.BRAND and device corresponds to Build.DEVICE, e.g., google/coral. * `deviceBrand` (string): unique identifier of the user's device brand, e.g., google. * `deviceType` (string): the type (also known as form factor) of the user's device, e.g., PHONE. * `countryCode` (string): the country or region of the user's device based on their IP address, represented as a 2-letter ISO-3166 code (e.g. US for the United States). * `deviceRamBucket` (int64): RAM of the device, in MB, in buckets (3GB, 4GB, etc.). * `deviceSocMake` (string): Make of the device's primary system-on-chip, e.g., Samsung. [Reference](https://developer.android.com/reference/android/os/Build#SOC_MANUFACTURER) * `deviceSocModel` (string): Model of the device's primary system-on-chip, e.g., "Exynos 2100". [Reference](https://developer.android.com/reference/android/os/Build#SOC_MODEL) * `deviceCpuMake` (string): Make of the device's CPU, e.g., Qualcomm. * `deviceCpuModel` (string): Model of the device's CPU, e.g., "Kryo 240". * `deviceGpuMake` (string): Make of the device's GPU, e.g., ARM. * `deviceGpuModel` (string): Model of the device's GPU, e.g., Mali. * `deviceGpuVersion` (string): Version of the device's GPU, e.g., T750. * `deviceVulkanVersion` (string): Vulkan version of the device, e.g., "4198400". * `deviceGlEsVersion` (string): OpenGL ES version of the device, e.g., "196610". * `deviceScreenSize` (string): Screen size of the device, e.g., NORMAL, LARGE. * `deviceScreenDpi` (string): Screen density of the device, e.g., mdpi, hdpi. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app. **Related metric sets:** * vitals.errors contains unnormalized version (absolute counts) of crashes. * vitals.errors contains normalized metrics about crashes, another stability metric.
   */
  export interface Schema$GooglePlayDeveloperReportingV1alpha1AnrRateMetricSet {
    /**
     * Summary about data freshness in this resource.
     */
    freshnessInfo?: Schema$GooglePlayDeveloperReportingV1alpha1FreshnessInfo;
    /**
     * The resource name. Format: apps/{app\}/anrRateMetricSet
     */
    name?: string | null;
  }
  /**
   * A representation of an app in the Play Store.
   */
  export interface Schema$GooglePlayDeveloperReportingV1alpha1App {
    /**
     * Title of the app. This is the latest title as set in the Play Console and may not yet have been reviewed, so might not match the Play Store. Example: `Google Maps`.
     */
    displayName?: string | null;
    /**
     * The resource name. Format: apps/{app\}
     */
    name?: string | null;
    /**
     * Package name of the app. Example: `com.example.app123`.
     */
    packageName?: string | null;
  }
  /**
   * Representations of an app version.
   */
  export interface Schema$GooglePlayDeveloperReportingV1alpha1AppVersion {
    /**
     * Numeric version code of the app version (set by the app's developer).
     */
    versionCode?: string | null;
  }
  /**
   * Singleton resource representing the set of crashrate metrics. This metric set contains crashes data combined with usage data to produce a normalized metric independent of user counts. **Supported aggregation periods:** * DAILY: metrics are aggregated in calendar date intervals. Due to historical constraints, the only supported timezone is `America/Los_Angeles`. * HOURLY: metrics are aggregated in hourly intervals. The default and only supported timezone is `UTC`. **Supported metrics:** * `crashRate` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that experienced at least one crash. * `crashRate7dUserWeighted` (`google.type.Decimal`): Rolling average value of `crashRate` in the last 7 days. The daily values are weighted by the count of distinct users for the day. Not supported in HOURLY granularity. * `crashRate28dUserWeighted` (`google.type.Decimal`): Rolling average value of `crashRate` in the last 28 days. The daily values are weighted by the count of distinct users for the day. Not supported in HOURLY granularity. * `userPerceivedCrashRate` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that experienced at least one crash while they were actively using your app (a user-perceived crash). An app is considered to be in active use if it is displaying any activity or executing any foreground service. * `userPerceivedCrashRate7dUserWeighted` (`google.type.Decimal`): Rolling average value of `userPerceivedCrashRate` in the last 7 days. The daily values are weighted by the count of distinct users for the day. Not supported in HOURLY granularity. * `userPerceivedCrashRate28dUserWeighted` (`google.type.Decimal`): Rolling average value of `userPerceivedCrashRate` in the last 28 days. The daily values are weighted by the count of distinct users for the day. Not supported in HOURLY granularity. * `distinctUsers` (`google.type.Decimal`): Count of distinct users in the aggregation period that were used as normalization value for the `crashRate` and `userPerceivedCrashRate` metrics. A user is counted in this metric if they used the app actively during the aggregation period. An app is considered to be in active use if it is displaying any activity or executing any foreground service. Care must be taken not to aggregate this count further, as it may result in users being counted multiple times. The value is rounded to the nearest multiple of 10, 100, 1,000 or 1,000,000, depending on the magnitude of the value. **Supported dimensions:** * `apiLevel` (string): the API level of Android that was running on the user's device, e.g., 26. * `versionCode` (int64): version of the app that was running on the user's device. * `deviceModel` (string): unique identifier of the user's device model. The form of the identifier is 'deviceBrand/device', where deviceBrand corresponds to Build.BRAND and device corresponds to Build.DEVICE, e.g., google/coral. * `deviceBrand` (string): unique identifier of the user's device brand, e.g., google. * `deviceType` (string): the type (also known as form factor) of the user's device, e.g., PHONE. * `countryCode` (string): the country or region of the user's device based on their IP address, represented as a 2-letter ISO-3166 code (e.g. US for the United States). * `deviceRamBucket` (int64): RAM of the device, in MB, in buckets (3GB, 4GB, etc.). * `deviceSocMake` (string): Make of the device's primary system-on-chip, e.g., Samsung. [Reference](https://developer.android.com/reference/android/os/Build#SOC_MANUFACTURER) * `deviceSocModel` (string): Model of the device's primary system-on-chip, e.g., "Exynos 2100". [Reference](https://developer.android.com/reference/android/os/Build#SOC_MODEL) * `deviceCpuMake` (string): Make of the device's CPU, e.g., Qualcomm. * `deviceCpuModel` (string): Model of the device's CPU, e.g., "Kryo 240". * `deviceGpuMake` (string): Make of the device's GPU, e.g., ARM. * `deviceGpuModel` (string): Model of the device's GPU, e.g., Mali. * `deviceGpuVersion` (string): Version of the device's GPU, e.g., T750. * `deviceVulkanVersion` (string): Vulkan version of the device, e.g., "4198400". * `deviceGlEsVersion` (string): OpenGL ES version of the device, e.g., "196610". * `deviceScreenSize` (string): Screen size of the device, e.g., NORMAL, LARGE. * `deviceScreenDpi` (string): Screen density of the device, e.g., mdpi, hdpi. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app. **Related metric sets:** * vitals.errors contains unnormalized version (absolute counts) of crashes. * vitals.errors contains normalized metrics about ANRs, another stability metric.
   */
  export interface Schema$GooglePlayDeveloperReportingV1alpha1CrashRateMetricSet {
    /**
     * Summary about data freshness in this resource.
     */
    freshnessInfo?: Schema$GooglePlayDeveloperReportingV1alpha1FreshnessInfo;
    /**
     * The resource name. Format: apps/{app\}/crashRateMetricSet
     */
    name?: string | null;
  }
  /**
   * Represents the confidence interval of a metric.
   */
  export interface Schema$GooglePlayDeveloperReportingV1alpha1DecimalConfidenceInterval {
    /**
     * The confidence interval's lower bound.
     */
    lowerBound?: Schema$GoogleTypeDecimal;
    /**
     * The confidence interval's upper bound.
     */
    upperBound?: Schema$GoogleTypeDecimal;
  }
  /**
   * Identifier of a device.
   */
  export interface Schema$GooglePlayDeveloperReportingV1alpha1DeviceId {
    /**
     * Value of Build.BRAND.
     */
    buildBrand?: string | null;
    /**
     * Value of Build.DEVICE.
     */
    buildDevice?: string | null;
  }
  /**
   * Summary of a device
   */
  export interface Schema$GooglePlayDeveloperReportingV1alpha1DeviceModelSummary {
    /**
     * Identifier of the device.
     */
    deviceId?: Schema$GooglePlayDeveloperReportingV1alpha1DeviceId;
    /**
     * Link to the device in Play Device Catalog.
     */
    deviceUri?: string | null;
    /**
     * Display name of the device.
     */
    marketingName?: string | null;
  }
  /**
   * Represents the value of a single dimension.
   */
  export interface Schema$GooglePlayDeveloperReportingV1alpha1DimensionValue {
    /**
     * Name of the dimension.
     */
    dimension?: string | null;
    /**
     * Actual value, represented as an int64.
     */
    int64Value?: string | null;
    /**
     * Actual value, represented as a string.
     */
    stringValue?: string | null;
    /**
     * Optional. Human-friendly label for the value, always in English. For example, 'Spain' for the 'ES' country code. Whereas the dimension value is stable, this value label is subject to change. Do not assume that the (value, value_label) relationship is stable. For example, the ISO country code 'MK' changed its name recently to 'North Macedonia'.
     */
    valueLabel?: string | null;
  }
  /**
   * Singleton resource representing the set of error report metrics. This metric set contains un-normalized error report counts. **Supported aggregation periods:** * DAILY: metrics are aggregated in calendar date intervals. The default and only supported timezone is `America/Los_Angeles`. **Supported metrics:** * `errorReportCount` (`google.type.Decimal`): Absolute count of individual error reports that have been received for an app. * `distinctUsers` (`google.type.Decimal`): Count of distinct users for which reports have been received. Care must be taken not to aggregate this count further, as it may result in users being counted multiple times. This value is not rounded, however it may be an approximation. **Required dimension:** This dimension must be always specified in all requests in the `dimensions` field in query requests. * `reportType` (string): the type of error. The value should correspond to one of the possible values in ErrorType. **Supported dimensions:** * `apiLevel` (string): the API level of Android that was running on the user's device, e.g., 26. * `versionCode` (int64): version of the app that was running on the user's device. * `deviceModel` (string): unique identifier of the user's device model. The form of the identifier is 'deviceBrand/device', where deviceBrand corresponds to Build.BRAND and device corresponds to Build.DEVICE, e.g., google/coral. * `deviceType` (string): identifier of the device's form factor, e.g., PHONE. * `issueId` (string): the id an error was assigned to. The value should correspond to the `{issue\}` component of the issue name. * `deviceRamBucket` (int64): RAM of the device, in MB, in buckets (3GB, 4GB, etc.). * `deviceSocMake` (string): Make of the device's primary system-on-chip, e.g., Samsung. [Reference](https://developer.android.com/reference/android/os/Build#SOC_MANUFACTURER) * `deviceSocModel` (string): Model of the device's primary system-on-chip, e.g., "Exynos 2100". [Reference](https://developer.android.com/reference/android/os/Build#SOC_MODEL) * `deviceCpuMake` (string): Make of the device's CPU, e.g., Qualcomm. * `deviceCpuModel` (string): Model of the device's CPU, e.g., "Kryo 240". * `deviceGpuMake` (string): Make of the device's GPU, e.g., ARM. * `deviceGpuModel` (string): Model of the device's GPU, e.g., Mali. * `deviceGpuVersion` (string): Version of the device's GPU, e.g., T750. * `deviceVulkanVersion` (string): Vulkan version of the device, e.g., "4198400". * `deviceGlEsVersion` (string): OpenGL ES version of the device, e.g., "196610". * `deviceScreenSize` (string): Screen size of the device, e.g., NORMAL, LARGE. * `deviceScreenDpi` (string): Screen density of the device, e.g., mdpi, hdpi. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app. **Related metric sets:** * vitals.errors.counts contains normalized metrics about Crashes, another stability metric. * vitals.errors.counts contains normalized metrics about ANRs, another stability metric.
   */
  export interface Schema$GooglePlayDeveloperReportingV1alpha1ErrorCountMetricSet {
    /**
     * Summary about data freshness in this resource.
     */
    freshnessInfo?: Schema$GooglePlayDeveloperReportingV1alpha1FreshnessInfo;
    /**
     * The resource name. Format: apps/{app\}/errorCountMetricSet
     */
    name?: string | null;
  }
  /**
   * A group of related ErrorReports received for an app. Similar error reports are grouped together into issues with a likely identical root cause. **Please note:** this resource is currently in Alpha. There could be changes to the issue grouping that would result in similar but more recent error reports being assigned to different issues. This could also cause some issues disappearing entirely and being replaced by new ones. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app.
   */
  export interface Schema$GooglePlayDeveloperReportingV1alpha1ErrorIssue {
    /**
     * Cause of the issue. Depending on the type this can be either: * APPLICATION_NOT_RESPONDING: the type of ANR that occurred, e.g., 'Input dispatching timed out'. * CRASH: for Java unhandled exception errors, the type of the innermost exception that was thrown, e.g., IllegalArgumentException. For signals in native code, the signal that was raised, e.g. SIGSEGV.
     */
    cause?: string | null;
    /**
     * An estimate of the number of unique users who have experienced this issue (only considering occurrences matching the filters and within the requested time period).
     */
    distinctUsers?: string | null;
    /**
     * An estimated percentage of users affected by any issue that are affected by this issue (only considering occurrences matching the filters and within the requested time period).
     */
    distinctUsersPercent?: Schema$GoogleTypeDecimal;
    /**
     * The total number of error reports in this issue (only considering occurrences matching the filters and within the requested time period).
     */
    errorReportCount?: string | null;
    /**
     * The earliest (inclusive) app version appearing in this ErrorIssue in the requested time period (only considering occurrences matching the filters).
     */
    firstAppVersion?: Schema$GooglePlayDeveloperReportingV1alpha1AppVersion;
    /**
     * The smallest OS version in which this error cluster has occurred in the requested time period (only considering occurrences matching the filters and within the requested time period).
     */
    firstOsVersion?: Schema$GooglePlayDeveloperReportingV1alpha1OsVersion;
    /**
     * Link to the issue in Android vitals in the Play Console.
     */
    issueUri?: string | null;
    /**
     * The latest (inclusive) app version appearing in this ErrorIssue in the requested time period (only considering occurrences matching the filters).
     */
    lastAppVersion?: Schema$GooglePlayDeveloperReportingV1alpha1AppVersion;
    /**
     * Start of the hour during which the last error report in this issue occurred.
     */
    lastErrorReportTime?: string | null;
    /**
     * The latest OS version in which this error cluster has occurred in the requested time period (only considering occurrences matching the filters and within the requested time period).
     */
    lastOsVersion?: Schema$GooglePlayDeveloperReportingV1alpha1OsVersion;
    /**
     * Location where the issue happened. Depending on the type this can be either: * APPLICATION_NOT_RESPONDING: the name of the activity or service that stopped responding. * CRASH: the likely method name that caused the error.
     */
    location?: string | null;
    /**
     * The resource name of the issue. Format: apps/{app\}/errorIssues/{issue\}
     */
    name?: string | null;
    /**
     * Type of the errors grouped in this issue.
     */
    type?: string | null;
  }
  /**
   * An error report received for an app. There reports are produced by the Android platform code when a (potentially fatal) error condition is detected. Identical reports from many users will be deduplicated and coalesced into a single ErrorReport. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app.
   */
  export interface Schema$GooglePlayDeveloperReportingV1alpha1ErrorReport {
    /**
     * A device model on which an event in this error report occurred on.
     */
    deviceModel?: Schema$GooglePlayDeveloperReportingV1alpha1DeviceModelSummary;
    /**
     * Start of the hour during which the latest event in this error report occurred.
     */
    eventTime?: string | null;
    /**
     * The issue this report was associated with. **Please note:** this resource is currently in Alpha. There could be changes to the issue grouping that would result in similar but more recent error reports being assigned to a different issue.
     */
    issue?: string | null;
    /**
     * The resource name of the report. Format: apps/{app\}/errorReports/{report\}
     */
    name?: string | null;
    /**
     * The OS version on which an event in this error report occurred on.
     */
    osVersion?: Schema$GooglePlayDeveloperReportingV1alpha1OsVersion;
    /**
     * Textual representation of the error report. These textual reports are produced by the platform. The reports are then sanitized and filtered to remove any potentially sensitive information. Although their format is fairly stable, they are not entirely meant for machine consumption and we cannot guarantee that there won't be subtle changes to the formatting that may break systems trying to parse information out of the reports.
     */
    reportText?: string | null;
    /**
     * Type of the error for which this report was generated.
     */
    type?: string | null;
  }
  /**
   * Singleton resource representing the set of Excessive Weakeups metrics. This metric set contains AlarmManager wakeup counts data combined with process state data to produce a normalized metric independent of user counts. **Supported aggregation periods:** * DAILY: metrics are aggregated in calendar date intervals. Due to historical constraints, the only supported timezone is `America/Los_Angeles`. **Supported metrics:** * `excessiveWakeupRate` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that had more than 10 wakeups per hour. * `excessiveWakeupRate7dUserWeighted` (`google.type.Decimal`): Rolling average value of `excessiveWakeupRate` in the last 7 days. The daily values are weighted by the count of distinct users for the day. * `excessiveWakeupRate28dUserWeighted` (`google.type.Decimal`): Rolling average value of `excessiveWakeupRate` in the last 28 days. The daily values are weighted by the count of distinct users for the day. * `distinctUsers` (`google.type.Decimal`): Count of distinct users in the aggregation period that were used as normalization value for the `excessiveWakeupRate` metric. A user is counted in this metric if they app was doing any work on the device, i.e., not just active foreground usage but also background work. Care must be taken not to aggregate this count further, as it may result in users being counted multiple times. The value is rounded to the nearest multiple of 10, 100, 1,000 or 1,000,000, depending on the magnitude of the value. **Supported dimensions:** * `apiLevel` (string): the API level of Android that was running on the user's device, e.g., 26. * `versionCode` (int64): version of the app that was running on the user's device. * `deviceModel` (string): unique identifier of the user's device model. The form of the identifier is 'deviceBrand/device', where deviceBrand corresponds to Build.BRAND and device corresponds to Build.DEVICE, e.g., google/coral. * `deviceBrand` (string): unique identifier of the user's device brand, e.g., google. * `deviceType` (string): the type (also known as form factor) of the user's device, e.g., PHONE. * `countryCode` (string): the country or region of the user's device based on their IP address, represented as a 2-letter ISO-3166 code (e.g. US for the United States). * `deviceRamBucket` (int64): RAM of the device, in MB, in buckets (3GB, 4GB, etc.). * `deviceSocMake` (string): Make of the device's primary system-on-chip, e.g., Samsung. [Reference](https://developer.android.com/reference/android/os/Build#SOC_MANUFACTURER) * `deviceSocModel` (string): Model of the device's primary system-on-chip, e.g., "Exynos 2100". [Reference](https://developer.android.com/reference/android/os/Build#SOC_MODEL) * `deviceCpuMake` (string): Make of the device's CPU, e.g., Qualcomm. * `deviceCpuModel` (string): Model of the device's CPU, e.g., "Kryo 240". * `deviceGpuMake` (string): Make of the device's GPU, e.g., ARM. * `deviceGpuModel` (string): Model of the device's GPU, e.g., Mali. * `deviceGpuVersion` (string): Version of the device's GPU, e.g., T750. * `deviceVulkanVersion` (string): Vulkan version of the device, e.g., "4198400". * `deviceGlEsVersion` (string): OpenGL ES version of the device, e.g., "196610". * `deviceScreenSize` (string): Screen size of the device, e.g., NORMAL, LARGE. * `deviceScreenDpi` (string): Screen density of the device, e.g., mdpi, hdpi. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app.
   */
  export interface Schema$GooglePlayDeveloperReportingV1alpha1ExcessiveWakeupRateMetricSet {
    /**
     * Summary about data freshness in this resource.
     */
    freshnessInfo?: Schema$GooglePlayDeveloperReportingV1alpha1FreshnessInfo;
    /**
     * The resource name. Format: apps/{app\}/excessiveWakeupRateMetricSet
     */
    name?: string | null;
  }
  /**
   * Represents the latest available time that can be requested in a TimelineSpec. Different aggregation periods have different freshness. For example, `DAILY` aggregation may lag behind `HOURLY` in cases where such aggregation is computed only once at the end of the day.
   */
  export interface Schema$GooglePlayDeveloperReportingV1alpha1FreshnessInfo {
    /**
     * Information about data freshness for every supported aggregation period. This field has set semantics, keyed by the `aggregation_period` field.
     */
    freshnesses?: Schema$GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshness[];
  }
  /**
   * Information about data freshness for a single aggregation period.
   */
  export interface Schema$GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshness {
    /**
     * Aggregation period for which data is available.
     */
    aggregationPeriod?: string | null;
    /**
     * Latest end time for which data is available, for the aggregation period. The time is specified in the metric set's default timezone. *Note:* time ranges in TimelineSpec are represented as `start_time, end_time)`. For example, if the latest available timeline data point for a `DAILY` aggregation period is `2021-06-23 00:00:00 America/Los_Angeles`, the value of this field would be `2021-06-24 00:00:00 America/Los_Angeles` so it can be easily reused in [TimelineSpec.end_time.
     */
    latestEndTime?: Schema$GoogleTypeDateTime;
  }
  /**
   * Response with a list of anomalies in datasets.
   */
  export interface Schema$GooglePlayDeveloperReportingV1alpha1ListAnomaliesResponse {
    /**
     * Anomalies that were found.
     */
    anomalies?: Schema$GooglePlayDeveloperReportingV1alpha1Anomaly[];
    /**
     * Continuation token to fetch the next page of data.
     */
    nextPageToken?: string | null;
  }
  /**
   * Represents a row of dimensions and metrics.
   */
  export interface Schema$GooglePlayDeveloperReportingV1alpha1MetricsRow {
    /**
     * Granularity of the aggregation period of the row.
     */
    aggregationPeriod?: string | null;
    /**
     * Dimension columns in the row.
     */
    dimensions?: Schema$GooglePlayDeveloperReportingV1alpha1DimensionValue[];
    /**
     * Metric columns in the row.
     */
    metrics?: Schema$GooglePlayDeveloperReportingV1alpha1MetricValue[];
    /**
     * Starting date (and time for hourly aggregation) of the period covered by this row.
     */
    startTime?: Schema$GoogleTypeDateTime;
  }
  /**
   * Represents the value of a metric.
   */
  export interface Schema$GooglePlayDeveloperReportingV1alpha1MetricValue {
    /**
     * Actual value, represented as a decimal number.
     */
    decimalValue?: Schema$GoogleTypeDecimal;
    /**
     * Confidence interval of a value that is of type `type.Decimal`.
     */
    decimalValueConfidenceInterval?: Schema$GooglePlayDeveloperReportingV1alpha1DecimalConfidenceInterval;
    /**
     * Name of the metric.
     */
    metric?: string | null;
  }
  /**
   * Representation of an OS version.
   */
  export interface Schema$GooglePlayDeveloperReportingV1alpha1OsVersion {
    /**
     * Numeric version code of the OS - API level
     */
    apiLevel?: string | null;
  }
  /**
   * Request message for QueryAnrRateMetricSet.
   */
  export interface Schema$GooglePlayDeveloperReportingV1alpha1QueryAnrRateMetricSetRequest {
    /**
     * Dimensions to slice the metrics by. **Supported dimensions:** * `apiLevel` (string): the API level of Android that was running on the user's device, e.g., 26. * `versionCode` (int64): version of the app that was running on the user's device. * `deviceModel` (string): unique identifier of the user's device model. The form of the identifier is 'deviceBrand/device', where deviceBrand corresponds to Build.BRAND and device corresponds to Build.DEVICE, e.g., google/coral. * `deviceBrand` (string): unique identifier of the user's device brand, e.g., google. * `deviceType` (string): the type (also known as form factor) of the user's device, e.g., PHONE. * `countryCode` (string): the country or region of the user's device based on their IP address, represented as a 2-letter ISO-3166 code (e.g. US for the United States). * `deviceRamBucket` (int64): RAM of the device, in MB, in buckets (3GB, 4GB, etc.). * `deviceSocMake` (string): Make of the device's primary system-on-chip, e.g., Samsung. [Reference](https://developer.android.com/reference/android/os/Build#SOC_MANUFACTURER) * `deviceSocModel` (string): Model of the device's primary system-on-chip, e.g., "Exynos 2100". [Reference](https://developer.android.com/reference/android/os/Build#SOC_MODEL) * `deviceCpuMake` (string): Make of the device's CPU, e.g., Qualcomm. * `deviceCpuModel` (string): Model of the device's CPU, e.g., "Kryo 240". * `deviceGpuMake` (string): Make of the device's GPU, e.g., ARM. * `deviceGpuModel` (string): Model of the device's GPU, e.g., Mali. * `deviceGpuVersion` (string): Version of the device's GPU, e.g., T750. * `deviceVulkanVersion` (string): Vulkan version of the device, e.g., "4198400". * `deviceGlEsVersion` (string): OpenGL ES version of the device, e.g., "196610". * `deviceScreenSize` (string): Screen size of the device, e.g., NORMAL, LARGE. * `deviceScreenDpi` (string): Screen density of the device, e.g., mdpi, hdpi.
     */
    dimensions?: string[] | null;
    /**
     * Filters to apply to data. The filtering expression follows [AIP-160](https://google.aip.dev/160) standard and supports filtering by equality of all breakdown dimensions.
     */
    filter?: string | null;
    /**
     * Metrics to aggregate. **Supported metrics:** * `anrRate` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that experienced at least one ANR. * `anrRate7dUserWeighted` (`google.type.Decimal`): Rolling average value of `anrRate` in the last 7 days. The daily values are weighted by the count of distinct users for the day. Not supported in HOURLY granularity. * `anrRate28dUserWeighted` (`google.type.Decimal`): Rolling average value of `anrRate` in the last 28 days. The daily values are weighted by the count of distinct users for the day. Not supported in HOURLY granularity. * `userPerceivedAnrRate` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that experienced at least one user-perceived ANR. User-perceived ANRs are currently those of 'Input dispatching' type. * `userPerceivedAnrRate7dUserWeighted` (`google.type.Decimal`): Rolling average value of `userPerceivedAnrRate` in the last 7 days. The daily values are weighted by the count of distinct users for the day. Not supported in HOURLY granularity. * `userPerceivedAnrRate28dUserWeighted` (`google.type.Decimal`): Rolling average value of `userPerceivedAnrRate` in the last 28 days. The daily values are weighted by the count of distinct users for the day. Not . supported in HOURLY granularity. * `distinctUsers` (`google.type.Decimal`): Count of distinct users in the aggregation period that were used as normalization value for the `anrRate` and `userPerceivedAnrRate` metrics. A user is counted in this metric if they used the app in the foreground during the aggregation period. Care must be taken not to aggregate this count further, as it may result in users being counted multiple times. The value is rounded to the nearest multiple of 10, 100, 1,000 or 1,000,000, depending on the magnitude of the value.
     */
    metrics?: string[] | null;
    /**
     * Maximum size of the returned data. If unspecified, at most 1000 rows will be returned. The maximum value is 100,000; values above 100,000 will be coerced to 100,000.
     */
    pageSize?: number | null;
    /**
     * A page token, received from a previous call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to the request must match the call that provided the page token.
     */
    pageToken?: string | null;
    /**
     * Specification of the timeline aggregation parameters. **Supported aggregation periods:** * DAILY: metrics are aggregated in calendar date intervals. Due to historical constraints, the default and only supported timezone is `America/Los_Angeles`. * HOURLY: metrics are aggregated in hourly intervals. The default and only supported timezone is `UTC`.
     */
    timelineSpec?: Schema$GooglePlayDeveloperReportingV1alpha1TimelineSpec;
    /**
     * User view to select. The output data will correspond to the selected view. **Supported values:** * `OS_PUBLIC` To select data from all publicly released Android versions. This is the default. Supports all the above dimensions. * `APP_TESTERS` To select data from users who have opted in to be testers. Supports all the above dimensions. * `OS_BETA` To select data from beta android versions only, excluding data from released android versions. Only the following dimensions are supported: * `versionCode` (int64): version of the app that was running on the user's device. * `osBuild` (string): OS build of the user's device, e.g., "T1B2.220916.004".
     */
    userCohort?: string | null;
  }
  /**
   * Response message for QueryAnrRateMetricSet.
   */
  export interface Schema$GooglePlayDeveloperReportingV1alpha1QueryAnrRateMetricSetResponse {
    /**
     * Continuation token to fetch the next page of data.
     */
    nextPageToken?: string | null;
    /**
     * Returned rows of data.
     */
    rows?: Schema$GooglePlayDeveloperReportingV1alpha1MetricsRow[];
  }
  /**
   * Request message for QueryCrashRateMetricSet.
   */
  export interface Schema$GooglePlayDeveloperReportingV1alpha1QueryCrashRateMetricSetRequest {
    /**
     * Dimensions to slice the metrics by. **Supported dimensions:** * `apiLevel` (string): the API level of Android that was running on the user's device, e.g., 26. * `versionCode` (int64): version of the app that was running on the user's device. * `deviceModel` (string): unique identifier of the user's device model. The form of the identifier is 'deviceBrand/device', where deviceBrand corresponds to Build.BRAND and device corresponds to Build.DEVICE, e.g., google/coral. * `deviceBrand` (string): unique identifier of the user's device brand, e.g., google. * `deviceType` (string): the type (also known as form factor) of the user's device, e.g., PHONE. * `countryCode` (string): the country or region of the user's device based on their IP address, represented as a 2-letter ISO-3166 code (e.g. US for the United States). * `deviceRamBucket` (int64): RAM of the device, in MB, in buckets (3GB, 4GB, etc.). * `deviceSocMake` (string): Make of the device's primary system-on-chip, e.g., Samsung. [Reference](https://developer.android.com/reference/android/os/Build#SOC_MANUFACTURER) * `deviceSocModel` (string): Model of the device's primary system-on-chip, e.g., "Exynos 2100". [Reference](https://developer.android.com/reference/android/os/Build#SOC_MODEL) * `deviceCpuMake` (string): Make of the device's CPU, e.g., Qualcomm. * `deviceCpuModel` (string): Model of the device's CPU, e.g., "Kryo 240". * `deviceGpuMake` (string): Make of the device's GPU, e.g., ARM. * `deviceGpuModel` (string): Model of the device's GPU, e.g., Mali. * `deviceGpuVersion` (string): Version of the device's GPU, e.g., T750. * `deviceVulkanVersion` (string): Vulkan version of the device, e.g., "4198400". * `deviceGlEsVersion` (string): OpenGL ES version of the device, e.g., "196610". * `deviceScreenSize` (string): Screen size of the device, e.g., NORMAL, LARGE. * `deviceScreenDpi` (string): Screen density of the device, e.g., mdpi, hdpi.
     */
    dimensions?: string[] | null;
    /**
     * Filters to apply to data. The filtering expression follows [AIP-160](https://google.aip.dev/160) standard and supports filtering by equality of all breakdown dimensions.
     */
    filter?: string | null;
    /**
     * Metrics to aggregate. **Supported metrics:** * `crashRate` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that experienced at least one crash. * `crashRate7dUserWeighted` (`google.type.Decimal`): Rolling average value of `crashRate` in the last 7 days. The daily values are weighted by the count of distinct users for the day. * `crashRate28dUserWeighted` (`google.type.Decimal`): Rolling average value of `crashRate` in the last 28 days. The daily values are weighted by the count of distinct users for the day. Not supported in HOURLY granularity. * `userPerceivedCrashRate` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that experienced at least one crash while they were actively using your app (a user-perceived crash). An app is considered to be in active use if it is displaying any activity or executing any foreground service. * `userPerceivedCrashRate7dUserWeighted` (`google.type.Decimal`): Rolling average value of `userPerceivedCrashRate` in the last 7 days. The daily values are weighted by the count of distinct users for the day. Not supported in HOURLY granularity. * `userPerceivedCrashRate28dUserWeighted` (`google.type.Decimal`): Rolling average value of `userPerceivedCrashRate` in the last 28 days. The daily values are weighted by the count of distinct users for the day. Not supported in HOURLY granularity. * `distinctUsers` (`google.type.Decimal`): Count of distinct users in the aggregation period that were used as normalization value for the `crashRate` and `userPerceivedCrashRate` metrics. A user is counted in this metric if they used the app actively during the aggregation period. An app is considered to be in active use if it is displaying any activity or executing any foreground service. Care must be taken not to aggregate this count further, as it may result in users being counted multiple times. The value is rounded to the nearest multiple of 10, 100, 1,000 or 1,000,000, depending on the magnitude of the value.
     */
    metrics?: string[] | null;
    /**
     * Maximum size of the returned data. If unspecified, at most 1000 rows will be returned. The maximum value is 100,000; values above 100,000 will be coerced to 100,000.
     */
    pageSize?: number | null;
    /**
     * A page token, received from a previous call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to the request must match the call that provided the page token.
     */
    pageToken?: string | null;
    /**
     * Specification of the timeline aggregation parameters. **Supported aggregation periods:** * DAILY: metrics are aggregated in calendar date intervals. Due to historical constraints, the default and only supported timezone is `America/Los_Angeles`. * HOURLY: metrics are aggregated in hourly intervals. The default and only supported timezone is `UTC`.
     */
    timelineSpec?: Schema$GooglePlayDeveloperReportingV1alpha1TimelineSpec;
    /**
     * User view to select. The output data will correspond to the selected view. **Supported values:** * `OS_PUBLIC` To select data from all publicly released Android versions. This is the default. Supports all the above dimensions. * `APP_TESTERS` To select data from users who have opted in to be testers. Supports all the above dimensions. * `OS_BETA` To select data from beta android versions only, excluding data from released android versions. Only the following dimensions are supported: * `versionCode` (int64): version of the app that was running on the user's device. * `osBuild` (string): OS build of the user's device, e.g., "T1B2.220916.004".
     */
    userCohort?: string | null;
  }
  /**
   * Response message for QueryCrashRateMetricSet.
   */
  export interface Schema$GooglePlayDeveloperReportingV1alpha1QueryCrashRateMetricSetResponse {
    /**
     * Continuation token to fetch the next page of data.
     */
    nextPageToken?: string | null;
    /**
     * Returned rows of data.
     */
    rows?: Schema$GooglePlayDeveloperReportingV1alpha1MetricsRow[];
  }
  /**
   * Request message for QueryErrorCountMetricSet.
   */
  export interface Schema$GooglePlayDeveloperReportingV1alpha1QueryErrorCountMetricSetRequest {
    /**
     * Dimensions to slice the data by. **Supported dimensions:** * `apiLevel` (string): the API level of Android that was running on the user's device, e.g., 26. * `versionCode` (int64): unique identifier of the user's device model. The form of the identifier is 'deviceBrand/device', where deviceBrand corresponds to Build.BRAND and device corresponds to Build.DEVICE, e.g., google/coral. * `deviceModel` (string): unique identifier of the user's device model. * `deviceType` (string): identifier of the device's form factor, e.g., PHONE. * `reportType` (string): the type of error. The value should correspond to one of the possible values in ErrorType. * `isUserPerceived` (string): denotes whether error is user perceived or not, USER_PERCEIVED or NOT_USER_PERCEIVED. * `issueId` (string): the id an error was assigned to. The value should correspond to the `{issue\}` component of the issue name. * `deviceRamBucket` (int64): RAM of the device, in MB, in buckets (3GB, 4GB, etc.). * `deviceSocMake` (string): Make of the device's primary system-on-chip, e.g., Samsung. [Reference](https://developer.android.com/reference/android/os/Build#SOC_MANUFACTURER) * `deviceSocModel` (string): Model of the device's primary system-on-chip, e.g., "Exynos 2100". [Reference](https://developer.android.com/reference/android/os/Build#SOC_MODEL) * `deviceCpuMake` (string): Make of the device's CPU, e.g., Qualcomm. * `deviceCpuModel` (string): Model of the device's CPU, e.g., "Kryo 240". * `deviceGpuMake` (string): Make of the device's GPU, e.g., ARM. * `deviceGpuModel` (string): Model of the device's GPU, e.g., Mali. * `deviceGpuVersion` (string): Version of the device's GPU, e.g., T750. * `deviceVulkanVersion` (string): Vulkan version of the device, e.g., "4198400". * `deviceGlEsVersion` (string): OpenGL ES version of the device, e.g., "196610". * `deviceScreenSize` (string): Screen size of the device, e.g., NORMAL, LARGE. * `deviceScreenDpi` (string): Screen density of the device, e.g., mdpi, hdpi.
     */
    dimensions?: string[] | null;
    /**
     * Filters to apply to data. The filtering expression follows [AIP-160](https://google.aip.dev/160) standard and supports filtering by equality of all breakdown dimensions.
     */
    filter?: string | null;
    /**
     * Metrics to aggregate. **Supported metrics:** * `errorReportCount` (`google.type.Decimal`): Absolute count of individual error reports that have been received for an app. * `distinctUsers` (`google.type.Decimal`): Count of distinct users for which reports have been received. Care must be taken not to aggregate this count further, as it may result in users being counted multiple times. This value is not rounded, however it may be an approximation.
     */
    metrics?: string[] | null;
    /**
     * Maximum size of the returned data. If unspecified, at most 1000 rows will be returned. The maximum value is 100000; values above 100000 will be coerced to 100000.
     */
    pageSize?: number | null;
    /**
     * A page token, received from a previous call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to the request must match the call that provided the page token.
     */
    pageToken?: string | null;
    /**
     * Specification of the timeline aggregation parameters. **Supported aggregation periods:** * DAILY: metrics are aggregated in calendar date intervals. The default and only supported timezone is `America/Los_Angeles`.
     */
    timelineSpec?: Schema$GooglePlayDeveloperReportingV1alpha1TimelineSpec;
  }
  /**
   * Error counts query response.
   */
  export interface Schema$GooglePlayDeveloperReportingV1alpha1QueryErrorCountMetricSetResponse {
    /**
     * Continuation token to fetch the next page of data.
     */
    nextPageToken?: string | null;
    /**
     * Returned rows.
     */
    rows?: Schema$GooglePlayDeveloperReportingV1alpha1MetricsRow[];
  }
  /**
   * Request message for QueryExcessiveWakeupRateMetricSet.
   */
  export interface Schema$GooglePlayDeveloperReportingV1alpha1QueryExcessiveWakeupRateMetricSetRequest {
    /**
     * Dimensions to slice the data by. **Supported dimensions:** * `apiLevel` (string): the API level of Android that was running on the user's device, e.g., 26. * `versionCode` (int64): version of the app that was running on the user's device. * `deviceModel` (string): unique identifier of the user's device model. The form of the identifier is 'deviceBrand/device', where deviceBrand corresponds to Build.BRAND and device corresponds to Build.DEVICE, e.g., google/coral. * `deviceBrand` (string): unique identifier of the user's device brand, e.g., google. * `deviceType` (string): the type (also known as form factor) of the user's device, e.g., PHONE. * `countryCode` (string): the country or region of the user's device based on their IP address, represented as a 2-letter ISO-3166 code (e.g. US for the United States). * `deviceRamBucket` (int64): RAM of the device, in MB, in buckets (3GB, 4GB, etc.). * `deviceSocMake` (string): Make of the device's primary system-on-chip, e.g., Samsung. [Reference](https://developer.android.com/reference/android/os/Build#SOC_MANUFACTURER) * `deviceSocModel` (string): Model of the device's primary system-on-chip, e.g., "Exynos 2100". [Reference](https://developer.android.com/reference/android/os/Build#SOC_MODEL) * `deviceCpuMake` (string): Make of the device's CPU, e.g., Qualcomm. * `deviceCpuModel` (string): Model of the device's CPU, e.g., "Kryo 240". * `deviceGpuMake` (string): Make of the device's GPU, e.g., ARM. * `deviceGpuModel` (string): Model of the device's GPU, e.g., Mali. * `deviceGpuVersion` (string): Version of the device's GPU, e.g., T750. * `deviceVulkanVersion` (string): Vulkan version of the device, e.g., "4198400". * `deviceGlEsVersion` (string): OpenGL ES version of the device, e.g., "196610". * `deviceScreenSize` (string): Screen size of the device, e.g., NORMAL, LARGE. * `deviceScreenDpi` (string): Screen density of the device, e.g., mdpi, hdpi.
     */
    dimensions?: string[] | null;
    /**
     * Filters to apply to data. The filtering expression follows [AIP-160](https://google.aip.dev/160) standard and supports filtering by equality of all breakdown dimensions.
     */
    filter?: string | null;
    /**
     * Metrics to aggregate. **Supported metrics:** * `excessiveWakeupRate` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that had more than 10 wakeups per hour. * `excessiveWakeupRate7dUserWeighted` (`google.type.Decimal`): Rolling average value of `excessiveWakeupRate` in the last 7 days. The daily values are weighted by the count of distinct users for the day. * `excessiveWakeupRate28dUserWeighted` (`google.type.Decimal`): Rolling average value of `excessiveWakeupRate` in the last 28 days. The daily values are weighted by the count of distinct users for the day. * `distinctUsers` (`google.type.Decimal`): Count of distinct users in the aggregation period that were used as normalization value for the `excessiveWakeupRate` metric. A user is counted in this metric if they app was doing any work on the device, i.e., not just active foreground usage but also background work. Care must be taken not to aggregate this count further, as it may result in users being counted multiple times. The value is rounded to the nearest multiple of 10, 100, 1,000 or 1,000,000, depending on the magnitude of the value.
     */
    metrics?: string[] | null;
    /**
     * Maximum size of the returned data. If unspecified, at most 1000 rows will be returned. The maximum value is 100000; values above 100000 will be coerced to 100000.
     */
    pageSize?: number | null;
    /**
     * A page token, received from a previous call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to the request must match the call that provided the page token.
     */
    pageToken?: string | null;
    /**
     * Specification of the timeline aggregation parameters. **Supported aggregation periods:** * DAILY: metrics are aggregated in calendar date intervals. Due to historical constraints, the only supported timezone is `America/Los_Angeles`.
     */
    timelineSpec?: Schema$GooglePlayDeveloperReportingV1alpha1TimelineSpec;
    /**
     * User view to select. The output data will correspond to the selected view. **Supported values:** * `OS_PUBLIC` To select data from all publicly released Android versions. This is the default. Supports all the above dimensions. * `APP_TESTERS` To select data from users who have opted in to be testers. Supports all the above dimensions. * `OS_BETA` To select data from beta android versions only, excluding data from released android versions. Only the following dimensions are supported: * `versionCode` (int64): version of the app that was running on the user's device. * `osBuild` (string): OS build of the user's device, e.g., "T1B2.220916.004".
     */
    userCohort?: string | null;
  }
  /**
   * Response message for QueryExcessiveWakeupRateMetricSet.
   */
  export interface Schema$GooglePlayDeveloperReportingV1alpha1QueryExcessiveWakeupRateMetricSetResponse {
    /**
     * Continuation token to fetch the next page of data.
     */
    nextPageToken?: string | null;
    /**
     * Returned rows of data.
     */
    rows?: Schema$GooglePlayDeveloperReportingV1alpha1MetricsRow[];
  }
  /**
   * Request message for QuerySlowRenderingRateMetricSet.
   */
  export interface Schema$GooglePlayDeveloperReportingV1alpha1QuerySlowRenderingRateMetricSetRequest {
    /**
     * Dimensions to slice the data by. **Supported dimensions:** * `apiLevel` (string): the API level of Android that was running on the user's device, e.g., 26. * `versionCode` (int64): version of the app that was running on the user's device. * `deviceModel` (string): unique identifier of the user's device model. The form of the identifier is 'deviceBrand/device', where deviceBrand corresponds to Build.BRAND and device corresponds to Build.DEVICE, e.g., google/coral. * `deviceBrand` (string): unique identifier of the user's device brand, e.g., google. * `deviceType` (string): the type (also known as form factor) of the user's device, e.g., PHONE. * `countryCode` (string): the country or region of the user's device based on their IP address, represented as a 2-letter ISO-3166 code (e.g. US for the United States). * `deviceRamBucket` (int64): RAM of the device, in MB, in buckets (3GB, 4GB, etc.). * `deviceSocMake` (string): Make of the device's primary system-on-chip, e.g., Samsung. [Reference](https://developer.android.com/reference/android/os/Build#SOC_MANUFACTURER) * `deviceSocModel` (string): Model of the device's primary system-on-chip, e.g., "Exynos 2100". [Reference](https://developer.android.com/reference/android/os/Build#SOC_MODEL) * `deviceCpuMake` (string): Make of the device's CPU, e.g., Qualcomm. * `deviceCpuModel` (string): Model of the device's CPU, e.g., "Kryo 240". * `deviceGpuMake` (string): Make of the device's GPU, e.g., ARM. * `deviceGpuModel` (string): Model of the device's GPU, e.g., Mali. * `deviceGpuVersion` (string): Version of the device's GPU, e.g., T750. * `deviceVulkanVersion` (string): Vulkan version of the device, e.g., "4198400". * `deviceGlEsVersion` (string): OpenGL ES version of the device, e.g., "196610". * `deviceScreenSize` (string): Screen size of the device, e.g., NORMAL, LARGE. * `deviceScreenDpi` (string): Screen density of the device, e.g., mdpi, hdpi.
     */
    dimensions?: string[] | null;
    /**
     * Filters to apply to data. The filtering expression follows [AIP-160](https://google.aip.dev/160) standard and supports filtering by equality of all breakdown dimensions.
     */
    filter?: string | null;
    /**
     * Metrics to aggregate. **Supported metrics:** * `slowRenderingRate20Fps` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that had a slow rendering. * `slowRenderingRate20Fps7dUserWeighted` (`google.type.Decimal`): Rolling average value of `slowRenderingRate20Fps` in the last 7 days. The daily values are weighted by the count of distinct users for the day. * `slowRenderingRate20Fps28dUserWeighted` (`google.type.Decimal`): Rolling average value of `slowRenderingRate20Fps` in the last 28 days. The daily values are weighted by the count of distinct users for the day. * `slowRenderingRate30Fps` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that had a slow rendering. * `slowRenderingRate30Fps7dUserWeighted` (`google.type.Decimal`): Rolling average value of `slowRenderingRate30Fps` in the last 7 days. The daily values are weighted by the count of distinct users for the day. * `slowRenderingRate30Fps28dUserWeighted` (`google.type.Decimal`): Rolling average value of `slowRenderingRate30Fps` in the last 28 days. The daily values are weighted by the count of distinct users for the day. * `distinctUsers` (`google.type.Decimal`): Count of distinct users in the aggregation period that were used as normalization value for the `slowRenderingRate20Fps`/`slowRenderingRate30Fps` metric. A user is counted in this metric if their app was launched in the device. Care must be taken not to aggregate this count further, as it may result in users being counted multiple times. The value is rounded to the nearest multiple of 10, 100, 1,000 or 1,000,000, depending on the magnitude of the value.
     */
    metrics?: string[] | null;
    /**
     * Maximum size of the returned data. If unspecified, at most 1000 rows will be returned. The maximum value is 100000; values above 100000 will be coerced to 100000.
     */
    pageSize?: number | null;
    /**
     * A page token, received from a previous call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to the request must match the call that provided the page token.
     */
    pageToken?: string | null;
    /**
     * Specification of the timeline aggregation parameters. **Supported aggregation periods:** * DAILY: metrics are aggregated in calendar date intervals. Due to historical constraints, the only supported timezone is `America/Los_Angeles`.
     */
    timelineSpec?: Schema$GooglePlayDeveloperReportingV1alpha1TimelineSpec;
    /**
     * User view to select. The output data will correspond to the selected view. **Supported values:** * `OS_PUBLIC` To select data from all publicly released Android versions. This is the default. Supports all the above dimensions. * `APP_TESTERS` To select data from users who have opted in to be testers. Supports all the above dimensions. * `OS_BETA` To select data from beta Android versions only, excluding data from released Android versions. Only the following dimensions are supported: * `versionCode` (int64): version of the app that was running on the user's device. * `osBuild` (string): OS build of the user's device, e.g., "T1B2.220916.004".
     */
    userCohort?: string | null;
  }
  /**
   * Response message for QuerySlowRenderingRateMetricSet.
   */
  export interface Schema$GooglePlayDeveloperReportingV1alpha1QuerySlowRenderingRateMetricSetResponse {
    /**
     * Continuation token to fetch the next page of data.
     */
    nextPageToken?: string | null;
    /**
     * Returned rows of data.
     */
    rows?: Schema$GooglePlayDeveloperReportingV1alpha1MetricsRow[];
  }
  /**
   * Request message for QuerySlowStartRateMetricSet.
   */
  export interface Schema$GooglePlayDeveloperReportingV1alpha1QuerySlowStartRateMetricSetRequest {
    /**
     * Dimensions to slice the data by. **Supported dimensions:** * `apiLevel` (string): the API level of Android that was running on the user's device, e.g., 26. * `versionCode` (int64): version of the app that was running on the user's device. * `deviceModel` (string): unique identifier of the user's device model. The form of the identifier is 'deviceBrand/device', where deviceBrand corresponds to Build.BRAND and device corresponds to Build.DEVICE, e.g., google/coral. * `deviceBrand` (string): unique identifier of the user's device brand, e.g., google. * `deviceType` (string): the type (also known as form factor) of the user's device, e.g., PHONE. * `countryCode` (string): the country or region of the user's device based on their IP address, represented as a 2-letter ISO-3166 code (e.g. US for the United States). * `deviceRamBucket` (int64): RAM of the device, in MB, in buckets (3GB, 4GB, etc.). * `deviceSocMake` (string): Make of the device's primary system-on-chip, e.g., Samsung. [Reference](https://developer.android.com/reference/android/os/Build#SOC_MANUFACTURER) * `deviceSocModel` (string): Model of the device's primary system-on-chip, e.g., "Exynos 2100". [Reference](https://developer.android.com/reference/android/os/Build#SOC_MODEL) * `deviceCpuMake` (string): Make of the device's CPU, e.g., Qualcomm. * `deviceCpuModel` (string): Model of the device's CPU, e.g., "Kryo 240". * `deviceGpuMake` (string): Make of the device's GPU, e.g., ARM. * `deviceGpuModel` (string): Model of the device's GPU, e.g., Mali. * `deviceGpuVersion` (string): Version of the device's GPU, e.g., T750. * `deviceVulkanVersion` (string): Vulkan version of the device, e.g., "4198400". * `deviceGlEsVersion` (string): OpenGL ES version of the device, e.g., "196610". * `deviceScreenSize` (string): Screen size of the device, e.g., NORMAL, LARGE. * `deviceScreenDpi` (string): Screen density of the device, e.g., mdpi, hdpi.
     */
    dimensions?: string[] | null;
    /**
     * Filters to apply to data. The filtering expression follows [AIP-160](https://google.aip.dev/160) standard and supports filtering by equality of all breakdown dimensions.
     */
    filter?: string | null;
    /**
     * Metrics to aggregate. **Supported metrics:** * `slowStartRate` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that had a slow start. * `slowStartRate7dUserWeighted` (`google.type.Decimal`): Rolling average value of `slowStartRate` in the last 7 days. The daily values are weighted by the count of distinct users for the day. * `slowStartRate28dUserWeighted` (`google.type.Decimal`): Rolling average value of `slowStartRate` in the last 28 days. The daily values are weighted by the count of distinct users for the day. * `distinctUsers` (`google.type.Decimal`): Count of distinct users in the aggregation period that were used as normalization value for the `slowStartRate` metric. A user is counted in this metric if their app was launched in the device. Care must be taken not to aggregate this count further, as it may result in users being counted multiple times. The value is rounded to the nearest multiple of 10, 100, 1,000 or 1,000,000, depending on the magnitude of the value.
     */
    metrics?: string[] | null;
    /**
     * Maximum size of the returned data. If unspecified, at most 1000 rows will be returned. The maximum value is 100000; values above 100000 will be coerced to 100000.
     */
    pageSize?: number | null;
    /**
     * A page token, received from a previous call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to the request must match the call that provided the page token.
     */
    pageToken?: string | null;
    /**
     * Specification of the timeline aggregation parameters. **Supported aggregation periods:** * DAILY: metrics are aggregated in calendar date intervals. Due to historical constraints, the only supported timezone is `America/Los_Angeles`.
     */
    timelineSpec?: Schema$GooglePlayDeveloperReportingV1alpha1TimelineSpec;
    /**
     * User view to select. The output data will correspond to the selected view. **Supported values:** * `OS_PUBLIC` To select data from all publicly released Android versions. This is the default. Supports all the above dimensions. * `APP_TESTERS` To select data from users who have opted in to be testers. Supports all the above dimensions. * `OS_BETA` To select data from beta Android versions only, excluding data from released Android versions. Only the following dimensions are supported: * `versionCode` (int64): version of the app that was running on the user's device. * `osBuild` (string): OS build of the user's device, e.g., "T1B2.220916.004".
     */
    userCohort?: string | null;
  }
  /**
   * Response message for QuerySlowStartRateMetricSet.
   */
  export interface Schema$GooglePlayDeveloperReportingV1alpha1QuerySlowStartRateMetricSetResponse {
    /**
     * Continuation token to fetch the next page of data.
     */
    nextPageToken?: string | null;
    /**
     * Returned rows of data.
     */
    rows?: Schema$GooglePlayDeveloperReportingV1alpha1MetricsRow[];
  }
  /**
   * Request message for QueryStuckBackgroundWakelockRateMetricSet.
   */
  export interface Schema$GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetRequest {
    /**
     * Dimensions to slice the data by. **Supported dimensions:** * `apiLevel` (string): the API level of Android that was running on the user's device, e.g., 26. * `versionCode` (int64): version of the app that was running on the user's device. * `deviceModel` (string): unique identifier of the user's device model. The form of the identifier is 'deviceBrand/device', where deviceBrand corresponds to Build.BRAND and device corresponds to Build.DEVICE, e.g., google/coral. * `deviceBrand` (string): unique identifier of the user's device brand, e.g., google. * `deviceType` (string): the type (also known as form factor) of the user's device, e.g., PHONE. * `countryCode` (string): the country or region of the user's device based on their IP address, represented as a 2-letter ISO-3166 code (e.g. US for the United States). * `deviceRamBucket` (int64): RAM of the device, in MB, in buckets (3GB, 4GB, etc.). * `deviceSocMake` (string): Make of the device's primary system-on-chip, e.g., Samsung. [Reference](https://developer.android.com/reference/android/os/Build#SOC_MANUFACTURER) * `deviceSocModel` (string): Model of the device's primary system-on-chip, e.g., "Exynos 2100". [Reference](https://developer.android.com/reference/android/os/Build#SOC_MODEL) * `deviceCpuMake` (string): Make of the device's CPU, e.g., Qualcomm. * `deviceCpuModel` (string): Model of the device's CPU, e.g., "Kryo 240". * `deviceGpuMake` (string): Make of the device's GPU, e.g., ARM. * `deviceGpuModel` (string): Model of the device's GPU, e.g., Mali. * `deviceGpuVersion` (string): Version of the device's GPU, e.g., T750. * `deviceVulkanVersion` (string): Vulkan version of the device, e.g., "4198400". * `deviceGlEsVersion` (string): OpenGL ES version of the device, e.g., "196610". * `deviceScreenSize` (string): Screen size of the device, e.g., NORMAL, LARGE. * `deviceScreenDpi` (string): Screen density of the device, e.g., mdpi, hdpi.
     */
    dimensions?: string[] | null;
    /**
     * Filters to apply to data. The filtering expression follows [AIP-160](https://google.aip.dev/160) standard and supports filtering by equality of all breakdown dimensions.
     */
    filter?: string | null;
    /**
     * Metrics to aggregate. **Supported metrics:** * `stuckBgWakelockRate` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that had a wakelock held in the background for longer than 1 hour. * `stuckBgWakelockRate7dUserWeighted` (`google.type.Decimal`): Rolling average value of `stuckBgWakelockRate` in the last 7 days. The daily values are weighted by the count of distinct users for the day. * `stuckBgWakelockRate28dUserWeighted` (`google.type.Decimal`): Rolling average value of `stuckBgWakelockRate` in the last 28 days. The daily values are weighted by the count of distinct users for the day. * `distinctUsers` (`google.type.Decimal`): Count of distinct users in the aggregation period that were used as normalization value for the `stuckBgWakelockRate` metric. A user is counted in this metric if they app was doing any work on the device, i.e., not just active foreground usage but also background work. Care must be taken not to aggregate this count further, as it may result in users being counted multiple times. The value is rounded to the nearest multiple of 10, 100, 1,000 or 1,000,000, depending on the magnitude of the value.
     */
    metrics?: string[] | null;
    /**
     * Maximum size of the returned data. If unspecified, at most 1000 rows will be returned. The maximum value is 100000; values above 100000 will be coerced to 100000.
     */
    pageSize?: number | null;
    /**
     * A page token, received from a previous call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to the request must match the call that provided the page token.
     */
    pageToken?: string | null;
    /**
     * Specification of the timeline aggregation parameters. **Supported aggregation periods:** * DAILY: metrics are aggregated in calendar date intervals. Due to historical constraints, the only supported timezone is `America/Los_Angeles`.
     */
    timelineSpec?: Schema$GooglePlayDeveloperReportingV1alpha1TimelineSpec;
    /**
     * User view to select. The output data will correspond to the selected view. **Supported values:** * `OS_PUBLIC` To select data from all publicly released Android versions. This is the default. Supports all the above dimensions. * `APP_TESTERS` To select data from users who have opted in to be testers. Supports all the above dimensions. * `OS_BETA` To select data from beta android versions only, excluding data from released android versions. Only the following dimensions are supported: * `versionCode` (int64): version of the app that was running on the user's device. * `osBuild` (string): OS build of the user's device, e.g., "T1B2.220916.004".
     */
    userCohort?: string | null;
  }
  /**
   * Response message for QueryStuckBackgroundWakelockRateMetricSet.
   */
  export interface Schema$GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetResponse {
    /**
     * Continuation token to fetch the next page of data.
     */
    nextPageToken?: string | null;
    /**
     * Returned rows of data.
     */
    rows?: Schema$GooglePlayDeveloperReportingV1alpha1MetricsRow[];
  }
  /**
   * A representation of an app release.
   */
  export interface Schema$GooglePlayDeveloperReportingV1alpha1Release {
    /**
     * Readable identifier of the release.
     */
    displayName?: string | null;
    /**
     * The version codes contained in this release.
     */
    versionCodes?: string[] | null;
  }
  /**
   * A set of filtering options for releases and version codes specific to an app.
   */
  export interface Schema$GooglePlayDeveloperReportingV1alpha1ReleaseFilterOptions {
    /**
     * List of tracks to filter releases over. Provides the grouping of version codes under releases and tracks.
     */
    tracks?: Schema$GooglePlayDeveloperReportingV1alpha1Track[];
  }
  /**
   * Response message for SearchAccessibleApps.
   */
  export interface Schema$GooglePlayDeveloperReportingV1alpha1SearchAccessibleAppsResponse {
    /**
     * The apps accessible to the user calling the endpoint.
     */
    apps?: Schema$GooglePlayDeveloperReportingV1alpha1App[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response with a paginated list of issues that matched the request.
   */
  export interface Schema$GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse {
    /**
     * ErrorIssues that were found.
     */
    errorIssues?: Schema$GooglePlayDeveloperReportingV1alpha1ErrorIssue[];
    /**
     * Continuation token to fetch the next page of data.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response with a paginated list of error reports matching the search query.
   */
  export interface Schema$GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse {
    /**
     * Error reports that were found.
     */
    errorReports?: Schema$GooglePlayDeveloperReportingV1alpha1ErrorReport[];
    /**
     * Page token to fetch the next page of reports.
     */
    nextPageToken?: string | null;
  }
  /**
   * Singleton resource representing the set of Slow Rendering metrics. This metric set contains low-level rendering data captured by SurafeFlinger. Sessions are evaluated based on the present-to-present histogram of frames handled by any SurfaceFlinger layer owned by the app. A slow session is a session where more than 25% of frames for the session did not meet the metric's target frame rate (either 20fps, or 30fps). *NOTE:* This metric set is only available for games. **Supported aggregation periods:** * DAILY: metrics are aggregated in calendar date intervals. Due to historical constraints, the only supported timezone is `America/Los_Angeles`. **Supported metrics:** * `slowRenderingRate20Fps` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that had slow rendering. * `slowRenderingRate20Fps7dUserWeighted` (`google.type.Decimal`): Rolling average value of `slowRenderingRate20Fps` in the last 7 days. The daily values are weighted by the count of distinct users for the day. * `slowRenderingRate20Fps28dUserWeighted` (`google.type.Decimal`): Rolling average value of `slowRenderingRate20Fps` in the last 28 days. The daily values are weighted by the count of distinct users for the day. * `slowRenderingRate30Fps` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that had slow rendering. * `slowRenderingRate30Fps7dUserWeighted` (`google.type.Decimal`): Rolling average value of `slowRenderingRate30Fps` in the last 7 days. The daily values are weighted by the count of distinct users for the day. * `slowRenderingRate30Fps28dUserWeighted` (`google.type.Decimal`): Rolling average value of `slowRenderingRate30Fps` in the last 28 days. The daily values are weighted by the count of distinct users for the day. * `distinctUsers` (`google.type.Decimal`): Count of distinct users in the aggregation period that were used as normalization value for the `slowRenderingRate20Fps`/`slowRenderingRate30Fps` metric. A user is counted in this metric if their app rendered any frames. Care must be taken not to aggregate this count further, as it may result in users being counted multiple times. The value is rounded to the nearest multiple of 10, 100, 1,000 or 1,000,000, depending on the magnitude of the value. **Supported dimensions:** * `apiLevel` (string): the API level of Android that was running on the user's device, e.g., 26. * `versionCode` (int64): version of the app that was running on the user's device. * `deviceModel` (string): unique identifier of the user's device model. The form of the identifier is 'deviceBrand/device', where deviceBrand corresponds to Build.BRAND and device corresponds to Build.DEVICE, e.g., google/coral. * `deviceBrand` (string): unique identifier of the user's device brand, e.g., google. * `deviceType` (string): the type (also known as form factor) of the user's device, e.g., PHONE. * `countryCode` (string): the country or region of the user's device based on their IP address, represented as a 2-letter ISO-3166 code (e.g. US for the United States). * `deviceRamBucket` (int64): RAM of the device, in MB, in buckets (3GB, 4GB, etc.). * `deviceSocMake` (string): Make of the device's primary system-on-chip, e.g., Samsung. [Reference](https://developer.android.com/reference/android/os/Build#SOC_MANUFACTURER) * `deviceSocModel` (string): Model of the device's primary system-on-chip, e.g., "Exynos 2100". [Reference](https://developer.android.com/reference/android/os/Build#SOC_MODEL) * `deviceCpuMake` (string): Make of the device's CPU, e.g., Qualcomm. * `deviceCpuModel` (string): Model of the device's CPU, e.g., "Kryo 240". * `deviceGpuMake` (string): Make of the device's GPU, e.g., ARM. * `deviceGpuModel` (string): Model of the device's GPU, e.g., Mali. * `deviceGpuVersion` (string): Version of the device's GPU, e.g., T750. * `deviceVulkanVersion` (string): Vulkan version of the device, e.g., "4198400". * `deviceGlEsVersion` (string): OpenGL ES version of the device, e.g., "196610". * `deviceScreenSize` (string): Screen size of the device, e.g., NORMAL, LARGE. * `deviceScreenDpi` (string): Screen density of the device, e.g., mdpi, hdpi. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app.
   */
  export interface Schema$GooglePlayDeveloperReportingV1alpha1SlowRenderingRateMetricSet {
    /**
     * Summary about data freshness in this resource.
     */
    freshnessInfo?: Schema$GooglePlayDeveloperReportingV1alpha1FreshnessInfo;
    /**
     * The resource name. Format: apps/{app\}/slowRenderingRateMetricSet
     */
    name?: string | null;
  }
  /**
   * Singleton resource representing the set of Slow Start metrics. This metric set contains Activity start duration data. **Supported aggregation periods:** * DAILY: metrics are aggregated in calendar date intervals. Due to historical constraints, the only supported timezone is `America/Los_Angeles`. **Supported metrics:** * `slowStartRate` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that had a slow start. * `slowStartRate7dUserWeighted` (`google.type.Decimal`): Rolling average value of `slowStartRate` in the last 7 days. The daily values are weighted by the count of distinct users for the day. * `slowStartRate28dUserWeighted` (`google.type.Decimal`): Rolling average value of `slowStartRate` in the last 28 days. The daily values are weighted by the count of distinct users for the day. * `distinctUsers` (`google.type.Decimal`): Count of distinct users in the aggregation period that were used as normalization value for the `slowStartRate` metric. A user is counted in this metric if their app was launched in the device. Care must be taken not to aggregate this count further, as it may result in users being counted multiple times. The value is rounded to the nearest multiple of 10, 100, 1,000 or 1,000,000, depending on the magnitude of the value. **Required dimension:** This dimension must be specified with each request for the request to be valid. * `startType` (string): the type of start that was measured. Valid types are `HOT`, `WARM` and `COLD`. **Supported dimensions:** * `apiLevel` (string): the API level of Android that was running on the user's device, e.g., 26. * `versionCode` (int64): version of the app that was running on the user's device. * `deviceModel` (string): unique identifier of the user's device model. The form of the identifier is 'deviceBrand/device', where deviceBrand corresponds to Build.BRAND and device corresponds to Build.DEVICE, e.g., google/coral. * `deviceBrand` (string): unique identifier of the user's device brand, e.g., google. * `deviceType` (string): the type (also known as form factor) of the user's device, e.g., PHONE. * `countryCode` (string): the country or region of the user's device based on their IP address, represented as a 2-letter ISO-3166 code (e.g. US for the United States). * `deviceRamBucket` (int64): RAM of the device, in MB, in buckets (3GB, 4GB, etc.). * `deviceSocMake` (string): Make of the device's primary system-on-chip, e.g., Samsung. [Reference](https://developer.android.com/reference/android/os/Build#SOC_MANUFACTURER) * `deviceSocModel` (string): Model of the device's primary system-on-chip, e.g., "Exynos 2100". [Reference](https://developer.android.com/reference/android/os/Build#SOC_MODEL) * `deviceCpuMake` (string): Make of the device's CPU, e.g., Qualcomm. * `deviceCpuModel` (string): Model of the device's CPU, e.g., "Kryo 240". * `deviceGpuMake` (string): Make of the device's GPU, e.g., ARM. * `deviceGpuModel` (string): Model of the device's GPU, e.g., Mali. * `deviceGpuVersion` (string): Version of the device's GPU, e.g., T750. * `deviceVulkanVersion` (string): Vulkan version of the device, e.g., "4198400". * `deviceGlEsVersion` (string): OpenGL ES version of the device, e.g., "196610". * `deviceScreenSize` (string): Screen size of the device, e.g., NORMAL, LARGE. * `deviceScreenDpi` (string): Screen density of the device, e.g., mdpi, hdpi. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app.
   */
  export interface Schema$GooglePlayDeveloperReportingV1alpha1SlowStartRateMetricSet {
    /**
     * Summary about data freshness in this resource.
     */
    freshnessInfo?: Schema$GooglePlayDeveloperReportingV1alpha1FreshnessInfo;
    /**
     * The resource name. Format: apps/{app\}/slowStartRateMetricSet
     */
    name?: string | null;
  }
  /**
   * Singleton resource representing the set of Stuck Background Wakelocks metrics. This metric set contains PowerManager wakelock duration data combined with process state data to produce a normalized metric independent of user counts. **Supported aggregation periods:** * DAILY: metrics are aggregated in calendar date intervals. Due to historical constraints, the only supported timezone is `America/Los_Angeles`. **Supported metrics:** * `stuckBgWakelockRate` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that had a wakelock held in the background for longer than 1 hour. * `stuckBgWakelockRate7dUserWeighted` (`google.type.Decimal`): Rolling average value of `stuckBgWakelockRate` in the last 7 days. The daily values are weighted by the count of distinct users for the day. * `stuckBgWakelockRate28dUserWeighted` (`google.type.Decimal`): Rolling average value of `stuckBgWakelockRate` in the last 28 days. The daily values are weighted by the count of distinct users for the day. * `distinctUsers` (`google.type.Decimal`): Count of distinct users in the aggregation period that were used as normalization value for the `stuckBgWakelockRate` metric. A user is counted in this metric if their app was doing any work on the device, i.e., not just active foreground usage but also background work. Care must be taken not to aggregate this count further, as it may result in users being counted multiple times. The value is rounded to the nearest multiple of 10, 100, 1,000 or 1,000,000, depending on the magnitude of the value. **Supported dimensions:** * `apiLevel` (string): the API level of Android that was running on the user's device, e.g., 26. * `versionCode` (int64): version of the app that was running on the user's device. * `deviceModel` (string): unique identifier of the user's device model. The form of the identifier is 'deviceBrand/device', where deviceBrand corresponds to Build.BRAND and device corresponds to Build.DEVICE, e.g., google/coral. * `deviceBrand` (string): unique identifier of the user's device brand, e.g., google. * `deviceType` (string): the type (also known as form factor) of the user's device, e.g., PHONE. * `countryCode` (string): the country or region of the user's device based on their IP address, represented as a 2-letter ISO-3166 code (e.g. US for the United States). * `deviceRamBucket` (int64): RAM of the device, in MB, in buckets (3GB, 4GB, etc.). * `deviceSocMake` (string): Make of the device's primary system-on-chip, e.g., Samsung. [Reference](https://developer.android.com/reference/android/os/Build#SOC_MANUFACTURER) * `deviceSocModel` (string): Model of the device's primary system-on-chip, e.g., "Exynos 2100". [Reference](https://developer.android.com/reference/android/os/Build#SOC_MODEL) * `deviceCpuMake` (string): Make of the device's CPU, e.g., Qualcomm. * `deviceCpuModel` (string): Model of the device's CPU, e.g., "Kryo 240". * `deviceGpuMake` (string): Make of the device's GPU, e.g., ARM. * `deviceGpuModel` (string): Model of the device's GPU, e.g., Mali. * `deviceGpuVersion` (string): Version of the device's GPU, e.g., T750. * `deviceVulkanVersion` (string): Vulkan version of the device, e.g., "4198400". * `deviceGlEsVersion` (string): OpenGL ES version of the device, e.g., "196610". * `deviceScreenSize` (string): Screen size of the device, e.g., NORMAL, LARGE. * `deviceScreenDpi` (string): Screen density of the device, e.g., mdpi, hdpi. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app.
   */
  export interface Schema$GooglePlayDeveloperReportingV1alpha1StuckBackgroundWakelockRateMetricSet {
    /**
     * Summary about data freshness in this resource.
     */
    freshnessInfo?: Schema$GooglePlayDeveloperReportingV1alpha1FreshnessInfo;
    /**
     * The resource name. Format: apps/{app\}/stuckBackgroundWakelockRateMetricSet
     */
    name?: string | null;
  }
  /**
   * Specification of the time-related aggregation parameters of a timeline. Timelines have an aggregation period (`DAILY`, `HOURLY`, etc) which defines how events are aggregated in metrics. The points in a timeline are defined by the starting DateTime of the aggregation period. The duration is implicit in the AggregationPeriod. Hourly aggregation periods, when supported by a metric set, are always specified in UTC to avoid ambiguities around daylight saving time transitions, where an hour is skipped when adopting DST, and repeated when abandoning DST. For example, the timestamp '2021-11-07 01:00:00 America/Los_Angeles' is ambiguous since it can correspond to '2021-11-07 08:00:00 UTC' or '2021-11-07 09:00:00 UTC'. Daily aggregation periods require specifying a timezone which will determine the precise instants of the start and the end of the day. Not all metric sets support all timezones, so make sure to check which timezones are supported by the metric set you want to query.
   */
  export interface Schema$GooglePlayDeveloperReportingV1alpha1TimelineSpec {
    /**
     * Type of the aggregation period of the datapoints in the timeline. Intervals are identified by the date and time at the start of the interval.
     */
    aggregationPeriod?: string | null;
    /**
     * Ending datapoint of the timeline (exclusive). See start_time for restrictions. The timezone of the end point must match the timezone of the start point.
     */
    endTime?: Schema$GoogleTypeDateTime;
    /**
     * Starting datapoint of the timeline (inclusive). Must be aligned to the aggregation period as follows: * HOURLY: the 'minutes', 'seconds' and 'nanos' fields must be unset. The time_zone can be left unset (defaults to UTC) or set explicitly to "UTC". Setting any other utc_offset or timezone id will result in a validation error. * DAILY: the 'hours', 'minutes', 'seconds' and 'nanos' fields must be unset. Different metric sets support different timezones. It can be left unset to use the default timezone specified by the metric set. The timezone of the end point must match the timezone of the start point.
     */
    startTime?: Schema$GoogleTypeDateTime;
  }
  /**
   * A representation of a Play release track.
   */
  export interface Schema$GooglePlayDeveloperReportingV1alpha1Track {
    /**
     * Readable identifier of the track.
     */
    displayName?: string | null;
    /**
     * Represents all active releases in the track.
     */
    servingReleases?: Schema$GooglePlayDeveloperReportingV1alpha1Release[];
    /**
     * The type of the track.
     */
    type?: string | null;
  }
  /**
   * Represents civil time (or occasionally physical time). This type can represent a civil time in one of a few possible ways: * When utc_offset is set and time_zone is unset: a civil time on a calendar day with a particular offset from UTC. * When time_zone is set and utc_offset is unset: a civil time on a calendar day in a particular time zone. * When neither time_zone nor utc_offset is set: a civil time on a calendar day in local time. The date is relative to the Proleptic Gregorian Calendar. If year, month, or day are 0, the DateTime is considered not to have a specific year, month, or day respectively. This type may also be used to represent a physical time if all the date and time fields are set and either case of the `time_offset` oneof is set. Consider using `Timestamp` message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field. This type is more flexible than some applications may want. Make sure to document and validate your application's limitations.
   */
  export interface Schema$GoogleTypeDateTime {
    /**
     * Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day.
     */
    day?: number | null;
    /**
     * Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value "24:00:00" for scenarios like business closing time.
     */
    hours?: number | null;
    /**
     * Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0.
     */
    minutes?: number | null;
    /**
     * Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month.
     */
    month?: number | null;
    /**
     * Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0.
     */
    nanos?: number | null;
    /**
     * Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds.
     */
    seconds?: number | null;
    /**
     * Time zone.
     */
    timeZone?: Schema$GoogleTypeTimeZone;
    /**
     * UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 \}.
     */
    utcOffset?: string | null;
    /**
     * Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year.
     */
    year?: number | null;
  }
  /**
   * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's BigDecimal or Python's decimal.Decimal. [BigDecimal]: https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
   */
  export interface Schema$GoogleTypeDecimal {
    /**
     * The decimal value, as a string. The string representation consists of an optional sign, `+` (`U+002B`) or `-` (`U+002D`), followed by a sequence of zero or more decimal digits ("the integer"), optionally followed by a fraction, optionally followed by an exponent. An empty string **should** be interpreted as `0`. The fraction consists of a decimal point followed by zero or more decimal digits. The string must contain at least one digit in either the integer or the fraction. The number formed by the sign, the integer and the fraction is referred to as the significand. The exponent consists of the character `e` (`U+0065`) or `E` (`U+0045`) followed by one or more decimal digits. Services **should** normalize decimal values before storing them by: - Removing an explicitly-provided `+` sign (`+2.5` -\> `2.5`). - Replacing a zero-length integer value with `0` (`.5` -\> `0.5`). - Coercing the exponent character to upper-case, with explicit sign (`2.5e8` -\> `2.5E+8`). - Removing an explicitly-provided zero exponent (`2.5E0` -\> `2.5`). Services **may** perform additional normalization based on its own needs and the internal decimal implementation selected, such as shifting the decimal point and exponent value together (example: `2.5E-1` <-\> `0.25`). Additionally, services **may** preserve trailing zeroes in the fraction to indicate increased precision, but are not required to do so. Note that only the `.` character is supported to divide the integer and the fraction; `,` **should not** be supported regardless of locale. Additionally, thousand separators **should not** be supported. If a service does support them, values **must** be normalized. The ENBF grammar is: DecimalString = '' | [Sign] Significand [Exponent]; Sign = '+' | '-'; Significand = Digits '.' | [Digits] '.' Digits; Exponent = ('e' | 'E') [Sign] Digits; Digits = { '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' \}; Services **should** clearly document the range of supported values, the maximum supported precision (total number of digits), and, if applicable, the scale (number of digits after the decimal point), as well as how it behaves when receiving out-of-bounds values. Services **may** choose to accept values passed as input even when the value has a higher precision or scale than the service supports, and **should** round the value to fit the supported scale. Alternatively, the service **may** error with `400 Bad Request` (`INVALID_ARGUMENT` in gRPC) if precision would be lost. Services **should** error with `400 Bad Request` (`INVALID_ARGUMENT` in gRPC) if the service receives a value outside of the supported range.
     */
    value?: string | null;
  }
  /**
   * Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones).
   */
  export interface Schema$GoogleTypeTimeZone {
    /**
     * IANA Time Zone Database time zone, e.g. "America/New_York".
     */
    id?: string | null;
    /**
     * Optional. IANA Time Zone Database version number, e.g. "2019a".
     */
    version?: string | null;
  }

  export class Resource$Anomalies {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists anomalies in any of the datasets.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/playdeveloperreporting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const playdeveloperreporting = google.playdeveloperreporting('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/playdeveloperreporting'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await playdeveloperreporting.anomalies.list({
     *     // Filtering criteria for anomalies. For basic filter guidance, please check: https://google.aip.dev/160. **Supported functions:** * `activeBetween(startTime, endTime)`: If specified, only list anomalies that were active in between `startTime` (inclusive) and `endTime` (exclusive). Both parameters are expected to conform to an RFC-3339 formatted string (e.g. `2012-04-21T11:30:00-04:00`). UTC offsets are supported. Both `startTime` and `endTime` accept the special value `UNBOUNDED`, to signify intervals with no lower or upper bound, respectively. Examples: * `activeBetween("2021-04-21T11:30:00Z", "2021-07-21T00:00:00Z")` * `activeBetween(UNBOUNDED, "2021-11-21T00:00:00-04:00")` * `activeBetween("2021-07-21T00:00:00-04:00", UNBOUNDED)`
     *     filter: 'placeholder-value',
     *     // Maximum size of the returned data. If unspecified, at most 10 anomalies will be returned. The maximum value is 100; values above 100 will be coerced to 100.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListErrorReports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListErrorReports` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. Parent app for which anomalies were detected. Format: apps/{app\}
     *     parent: 'apps/my-app',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "anomalies": [],
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
      params: Params$Resource$Anomalies$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Anomalies$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePlayDeveloperReportingV1alpha1ListAnomaliesResponse>;
    list(
      params: Params$Resource$Anomalies$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Anomalies$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1ListAnomaliesResponse>,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1ListAnomaliesResponse>
    ): void;
    list(
      params: Params$Resource$Anomalies$List,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1ListAnomaliesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1ListAnomaliesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Anomalies$List
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1ListAnomaliesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1ListAnomaliesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1ListAnomaliesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GooglePlayDeveloperReportingV1alpha1ListAnomaliesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Anomalies$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Anomalies$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://playdeveloperreporting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/anomalies').replace(
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
        createAPIRequest<Schema$GooglePlayDeveloperReportingV1alpha1ListAnomaliesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GooglePlayDeveloperReportingV1alpha1ListAnomaliesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Anomalies$List extends StandardParameters {
    /**
     * Filtering criteria for anomalies. For basic filter guidance, please check: https://google.aip.dev/160. **Supported functions:** * `activeBetween(startTime, endTime)`: If specified, only list anomalies that were active in between `startTime` (inclusive) and `endTime` (exclusive). Both parameters are expected to conform to an RFC-3339 formatted string (e.g. `2012-04-21T11:30:00-04:00`). UTC offsets are supported. Both `startTime` and `endTime` accept the special value `UNBOUNDED`, to signify intervals with no lower or upper bound, respectively. Examples: * `activeBetween("2021-04-21T11:30:00Z", "2021-07-21T00:00:00Z")` * `activeBetween(UNBOUNDED, "2021-11-21T00:00:00-04:00")` * `activeBetween("2021-07-21T00:00:00-04:00", UNBOUNDED)`
     */
    filter?: string;
    /**
     * Maximum size of the returned data. If unspecified, at most 10 anomalies will be returned. The maximum value is 100; values above 100 will be coerced to 100.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListErrorReports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListErrorReports` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Parent app for which anomalies were detected. Format: apps/{app\}
     */
    parent?: string;
  }

  export class Resource$Apps {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Describes filtering options for releases.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/playdeveloperreporting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const playdeveloperreporting = google.playdeveloperreporting('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/playdeveloperreporting'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await playdeveloperreporting.apps.fetchReleaseFilterOptions({
     *     // Required. Name of the resource, i.e. app the filtering options are for. Format: apps/{app\}
     *     name: 'apps/my-app',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "tracks": []
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
    fetchReleaseFilterOptions(
      params: Params$Resource$Apps$Fetchreleasefilteroptions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    fetchReleaseFilterOptions(
      params?: Params$Resource$Apps$Fetchreleasefilteroptions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePlayDeveloperReportingV1alpha1ReleaseFilterOptions>;
    fetchReleaseFilterOptions(
      params: Params$Resource$Apps$Fetchreleasefilteroptions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    fetchReleaseFilterOptions(
      params: Params$Resource$Apps$Fetchreleasefilteroptions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1ReleaseFilterOptions>,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1ReleaseFilterOptions>
    ): void;
    fetchReleaseFilterOptions(
      params: Params$Resource$Apps$Fetchreleasefilteroptions,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1ReleaseFilterOptions>
    ): void;
    fetchReleaseFilterOptions(
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1ReleaseFilterOptions>
    ): void;
    fetchReleaseFilterOptions(
      paramsOrCallback?:
        | Params$Resource$Apps$Fetchreleasefilteroptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1ReleaseFilterOptions>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1ReleaseFilterOptions>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1ReleaseFilterOptions>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GooglePlayDeveloperReportingV1alpha1ReleaseFilterOptions>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Apps$Fetchreleasefilteroptions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Fetchreleasefilteroptions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://playdeveloperreporting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1alpha1/{+name}:fetchReleaseFilterOptions'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GooglePlayDeveloperReportingV1alpha1ReleaseFilterOptions>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GooglePlayDeveloperReportingV1alpha1ReleaseFilterOptions>(
          parameters
        );
      }
    }

    /**
     * Searches for Apps accessible by the user.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/playdeveloperreporting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const playdeveloperreporting = google.playdeveloperreporting('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/playdeveloperreporting'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await playdeveloperreporting.apps.search({
     *     // The maximum number of apps to return. The service may return fewer than this value. If unspecified, at most 50 apps will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `SearchAccessibleApps` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchAccessibleApps` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apps": [],
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
      params: Params$Resource$Apps$Search,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    search(
      params?: Params$Resource$Apps$Search,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePlayDeveloperReportingV1alpha1SearchAccessibleAppsResponse>;
    search(
      params: Params$Resource$Apps$Search,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    search(
      params: Params$Resource$Apps$Search,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1SearchAccessibleAppsResponse>,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1SearchAccessibleAppsResponse>
    ): void;
    search(
      params: Params$Resource$Apps$Search,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1SearchAccessibleAppsResponse>
    ): void;
    search(
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1SearchAccessibleAppsResponse>
    ): void;
    search(
      paramsOrCallback?:
        | Params$Resource$Apps$Search
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1SearchAccessibleAppsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1SearchAccessibleAppsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1SearchAccessibleAppsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GooglePlayDeveloperReportingV1alpha1SearchAccessibleAppsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Apps$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Search;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://playdeveloperreporting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/apps:search').replace(
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
        createAPIRequest<Schema$GooglePlayDeveloperReportingV1alpha1SearchAccessibleAppsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GooglePlayDeveloperReportingV1alpha1SearchAccessibleAppsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Apps$Fetchreleasefilteroptions
    extends StandardParameters {
    /**
     * Required. Name of the resource, i.e. app the filtering options are for. Format: apps/{app\}
     */
    name?: string;
  }
  export interface Params$Resource$Apps$Search extends StandardParameters {
    /**
     * The maximum number of apps to return. The service may return fewer than this value. If unspecified, at most 50 apps will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `SearchAccessibleApps` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchAccessibleApps` must match the call that provided the page token.
     */
    pageToken?: string;
  }

  export class Resource$Vitals {
    context: APIRequestContext;
    anrrate: Resource$Vitals$Anrrate;
    crashrate: Resource$Vitals$Crashrate;
    errors: Resource$Vitals$Errors;
    excessivewakeuprate: Resource$Vitals$Excessivewakeuprate;
    slowrenderingrate: Resource$Vitals$Slowrenderingrate;
    slowstartrate: Resource$Vitals$Slowstartrate;
    stuckbackgroundwakelockrate: Resource$Vitals$Stuckbackgroundwakelockrate;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.anrrate = new Resource$Vitals$Anrrate(this.context);
      this.crashrate = new Resource$Vitals$Crashrate(this.context);
      this.errors = new Resource$Vitals$Errors(this.context);
      this.excessivewakeuprate = new Resource$Vitals$Excessivewakeuprate(
        this.context
      );
      this.slowrenderingrate = new Resource$Vitals$Slowrenderingrate(
        this.context
      );
      this.slowstartrate = new Resource$Vitals$Slowstartrate(this.context);
      this.stuckbackgroundwakelockrate =
        new Resource$Vitals$Stuckbackgroundwakelockrate(this.context);
    }
  }

  export class Resource$Vitals$Anrrate {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Describes the properties of the metric set.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/playdeveloperreporting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const playdeveloperreporting = google.playdeveloperreporting('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/playdeveloperreporting'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await playdeveloperreporting.vitals.anrrate.get({
     *     // Required. The resource name. Format: apps/{app\}/anrRateMetricSet
     *     name: 'apps/my-app/anrRateMetricSet',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "freshnessInfo": {},
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
      params: Params$Resource$Vitals$Anrrate$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Vitals$Anrrate$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePlayDeveloperReportingV1alpha1AnrRateMetricSet>;
    get(
      params: Params$Resource$Vitals$Anrrate$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Vitals$Anrrate$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1AnrRateMetricSet>,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1AnrRateMetricSet>
    ): void;
    get(
      params: Params$Resource$Vitals$Anrrate$Get,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1AnrRateMetricSet>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1AnrRateMetricSet>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Vitals$Anrrate$Get
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1AnrRateMetricSet>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1AnrRateMetricSet>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1AnrRateMetricSet>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GooglePlayDeveloperReportingV1alpha1AnrRateMetricSet>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Vitals$Anrrate$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Vitals$Anrrate$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://playdeveloperreporting.googleapis.com/';
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
        createAPIRequest<Schema$GooglePlayDeveloperReportingV1alpha1AnrRateMetricSet>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GooglePlayDeveloperReportingV1alpha1AnrRateMetricSet>(
          parameters
        );
      }
    }

    /**
     * Queries the metrics in the metric set.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/playdeveloperreporting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const playdeveloperreporting = google.playdeveloperreporting('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/playdeveloperreporting'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await playdeveloperreporting.vitals.anrrate.query({
     *     // Required. The resource name. Format: apps/{app\}/anrRateMetricSet
     *     name: 'apps/my-app/anrRateMetricSet',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "dimensions": [],
     *       //   "filter": "my_filter",
     *       //   "metrics": [],
     *       //   "pageSize": 0,
     *       //   "pageToken": "my_pageToken",
     *       //   "timelineSpec": {},
     *       //   "userCohort": "my_userCohort"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "rows": []
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
    query(
      params: Params$Resource$Vitals$Anrrate$Query,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    query(
      params?: Params$Resource$Vitals$Anrrate$Query,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePlayDeveloperReportingV1alpha1QueryAnrRateMetricSetResponse>;
    query(
      params: Params$Resource$Vitals$Anrrate$Query,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    query(
      params: Params$Resource$Vitals$Anrrate$Query,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1QueryAnrRateMetricSetResponse>,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1QueryAnrRateMetricSetResponse>
    ): void;
    query(
      params: Params$Resource$Vitals$Anrrate$Query,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1QueryAnrRateMetricSetResponse>
    ): void;
    query(
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1QueryAnrRateMetricSetResponse>
    ): void;
    query(
      paramsOrCallback?:
        | Params$Resource$Vitals$Anrrate$Query
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1QueryAnrRateMetricSetResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1QueryAnrRateMetricSetResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1QueryAnrRateMetricSetResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GooglePlayDeveloperReportingV1alpha1QueryAnrRateMetricSetResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Vitals$Anrrate$Query;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Vitals$Anrrate$Query;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://playdeveloperreporting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}:query').replace(
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
        createAPIRequest<Schema$GooglePlayDeveloperReportingV1alpha1QueryAnrRateMetricSetResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GooglePlayDeveloperReportingV1alpha1QueryAnrRateMetricSetResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Vitals$Anrrate$Get
    extends StandardParameters {
    /**
     * Required. The resource name. Format: apps/{app\}/anrRateMetricSet
     */
    name?: string;
  }
  export interface Params$Resource$Vitals$Anrrate$Query
    extends StandardParameters {
    /**
     * Required. The resource name. Format: apps/{app\}/anrRateMetricSet
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GooglePlayDeveloperReportingV1alpha1QueryAnrRateMetricSetRequest;
  }

  export class Resource$Vitals$Crashrate {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Describes the properties of the metric set.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/playdeveloperreporting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const playdeveloperreporting = google.playdeveloperreporting('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/playdeveloperreporting'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await playdeveloperreporting.vitals.crashrate.get({
     *     // Required. The resource name. Format: apps/{app\}/crashRateMetricSet
     *     name: 'apps/my-app/crashRateMetricSet',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "freshnessInfo": {},
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
      params: Params$Resource$Vitals$Crashrate$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Vitals$Crashrate$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePlayDeveloperReportingV1alpha1CrashRateMetricSet>;
    get(
      params: Params$Resource$Vitals$Crashrate$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Vitals$Crashrate$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1CrashRateMetricSet>,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1CrashRateMetricSet>
    ): void;
    get(
      params: Params$Resource$Vitals$Crashrate$Get,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1CrashRateMetricSet>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1CrashRateMetricSet>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Vitals$Crashrate$Get
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1CrashRateMetricSet>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1CrashRateMetricSet>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1CrashRateMetricSet>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GooglePlayDeveloperReportingV1alpha1CrashRateMetricSet>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Vitals$Crashrate$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Vitals$Crashrate$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://playdeveloperreporting.googleapis.com/';
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
        createAPIRequest<Schema$GooglePlayDeveloperReportingV1alpha1CrashRateMetricSet>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GooglePlayDeveloperReportingV1alpha1CrashRateMetricSet>(
          parameters
        );
      }
    }

    /**
     * Queries the metrics in the metric set.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/playdeveloperreporting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const playdeveloperreporting = google.playdeveloperreporting('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/playdeveloperreporting'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await playdeveloperreporting.vitals.crashrate.query({
     *     // Required. The resource name. Format: apps/{app\}/crashRateMetricSet
     *     name: 'apps/my-app/crashRateMetricSet',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "dimensions": [],
     *       //   "filter": "my_filter",
     *       //   "metrics": [],
     *       //   "pageSize": 0,
     *       //   "pageToken": "my_pageToken",
     *       //   "timelineSpec": {},
     *       //   "userCohort": "my_userCohort"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "rows": []
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
    query(
      params: Params$Resource$Vitals$Crashrate$Query,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    query(
      params?: Params$Resource$Vitals$Crashrate$Query,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePlayDeveloperReportingV1alpha1QueryCrashRateMetricSetResponse>;
    query(
      params: Params$Resource$Vitals$Crashrate$Query,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    query(
      params: Params$Resource$Vitals$Crashrate$Query,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1QueryCrashRateMetricSetResponse>,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1QueryCrashRateMetricSetResponse>
    ): void;
    query(
      params: Params$Resource$Vitals$Crashrate$Query,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1QueryCrashRateMetricSetResponse>
    ): void;
    query(
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1QueryCrashRateMetricSetResponse>
    ): void;
    query(
      paramsOrCallback?:
        | Params$Resource$Vitals$Crashrate$Query
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1QueryCrashRateMetricSetResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1QueryCrashRateMetricSetResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1QueryCrashRateMetricSetResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GooglePlayDeveloperReportingV1alpha1QueryCrashRateMetricSetResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Vitals$Crashrate$Query;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Vitals$Crashrate$Query;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://playdeveloperreporting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}:query').replace(
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
        createAPIRequest<Schema$GooglePlayDeveloperReportingV1alpha1QueryCrashRateMetricSetResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GooglePlayDeveloperReportingV1alpha1QueryCrashRateMetricSetResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Vitals$Crashrate$Get
    extends StandardParameters {
    /**
     * Required. The resource name. Format: apps/{app\}/crashRateMetricSet
     */
    name?: string;
  }
  export interface Params$Resource$Vitals$Crashrate$Query
    extends StandardParameters {
    /**
     * Required. The resource name. Format: apps/{app\}/crashRateMetricSet
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GooglePlayDeveloperReportingV1alpha1QueryCrashRateMetricSetRequest;
  }

  export class Resource$Vitals$Errors {
    context: APIRequestContext;
    counts: Resource$Vitals$Errors$Counts;
    issues: Resource$Vitals$Errors$Issues;
    reports: Resource$Vitals$Errors$Reports;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.counts = new Resource$Vitals$Errors$Counts(this.context);
      this.issues = new Resource$Vitals$Errors$Issues(this.context);
      this.reports = new Resource$Vitals$Errors$Reports(this.context);
    }
  }

  export class Resource$Vitals$Errors$Counts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Describes the properties of the metrics set.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/playdeveloperreporting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const playdeveloperreporting = google.playdeveloperreporting('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/playdeveloperreporting'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await playdeveloperreporting.vitals.errors.counts.get({
     *     // Required. Name of the errors metric set. Format: apps/{app\}/errorCountMetricSet
     *     name: 'apps/my-app/errorCountMetricSet',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "freshnessInfo": {},
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
      params: Params$Resource$Vitals$Errors$Counts$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Vitals$Errors$Counts$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePlayDeveloperReportingV1alpha1ErrorCountMetricSet>;
    get(
      params: Params$Resource$Vitals$Errors$Counts$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Vitals$Errors$Counts$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1ErrorCountMetricSet>,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1ErrorCountMetricSet>
    ): void;
    get(
      params: Params$Resource$Vitals$Errors$Counts$Get,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1ErrorCountMetricSet>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1ErrorCountMetricSet>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Vitals$Errors$Counts$Get
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1ErrorCountMetricSet>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1ErrorCountMetricSet>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1ErrorCountMetricSet>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GooglePlayDeveloperReportingV1alpha1ErrorCountMetricSet>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Vitals$Errors$Counts$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Vitals$Errors$Counts$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://playdeveloperreporting.googleapis.com/';
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
        createAPIRequest<Schema$GooglePlayDeveloperReportingV1alpha1ErrorCountMetricSet>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GooglePlayDeveloperReportingV1alpha1ErrorCountMetricSet>(
          parameters
        );
      }
    }

    /**
     * Queries the metrics in the metrics set.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/playdeveloperreporting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const playdeveloperreporting = google.playdeveloperreporting('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/playdeveloperreporting'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await playdeveloperreporting.vitals.errors.counts.query({
     *     // Required. The resource name. Format: apps/{app\}/errorCountMetricSet
     *     name: 'apps/my-app/errorCountMetricSet',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "dimensions": [],
     *       //   "filter": "my_filter",
     *       //   "metrics": [],
     *       //   "pageSize": 0,
     *       //   "pageToken": "my_pageToken",
     *       //   "timelineSpec": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "rows": []
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
    query(
      params: Params$Resource$Vitals$Errors$Counts$Query,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    query(
      params?: Params$Resource$Vitals$Errors$Counts$Query,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePlayDeveloperReportingV1alpha1QueryErrorCountMetricSetResponse>;
    query(
      params: Params$Resource$Vitals$Errors$Counts$Query,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    query(
      params: Params$Resource$Vitals$Errors$Counts$Query,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1QueryErrorCountMetricSetResponse>,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1QueryErrorCountMetricSetResponse>
    ): void;
    query(
      params: Params$Resource$Vitals$Errors$Counts$Query,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1QueryErrorCountMetricSetResponse>
    ): void;
    query(
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1QueryErrorCountMetricSetResponse>
    ): void;
    query(
      paramsOrCallback?:
        | Params$Resource$Vitals$Errors$Counts$Query
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1QueryErrorCountMetricSetResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1QueryErrorCountMetricSetResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1QueryErrorCountMetricSetResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GooglePlayDeveloperReportingV1alpha1QueryErrorCountMetricSetResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Vitals$Errors$Counts$Query;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Vitals$Errors$Counts$Query;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://playdeveloperreporting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}:query').replace(
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
        createAPIRequest<Schema$GooglePlayDeveloperReportingV1alpha1QueryErrorCountMetricSetResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GooglePlayDeveloperReportingV1alpha1QueryErrorCountMetricSetResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Vitals$Errors$Counts$Get
    extends StandardParameters {
    /**
     * Required. Name of the errors metric set. Format: apps/{app\}/errorCountMetricSet
     */
    name?: string;
  }
  export interface Params$Resource$Vitals$Errors$Counts$Query
    extends StandardParameters {
    /**
     * Required. The resource name. Format: apps/{app\}/errorCountMetricSet
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GooglePlayDeveloperReportingV1alpha1QueryErrorCountMetricSetRequest;
  }

  export class Resource$Vitals$Errors$Issues {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Searches all error issues in which reports have been grouped.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/playdeveloperreporting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const playdeveloperreporting = google.playdeveloperreporting('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/playdeveloperreporting'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await playdeveloperreporting.vitals.errors.issues.search({
     *     // A selection predicate to retrieve only a subset of the issues. Counts in the returned error issues will only reflect occurrences that matched the filter. For filtering basics, please check [AIP-160](https://google.aip.dev/160). ** Supported field names:** * `apiLevel`: Matches error issues that occurred in the requested Android versions (specified as the numeric API level) only. Example: `apiLevel = 28 OR apiLevel = 29`. * `versionCode`: Matches error issues that occurred in the requested app version codes only. Example: `versionCode = 123 OR versionCode = 456`. * `deviceModel`: Matches error issues that occurred in the requested devices. Example: `deviceModel = "google/walleye" OR deviceModel = "google/marlin"`. * `deviceBrand`: Matches error issues that occurred in the requested device brands. Example: `deviceBrand = "Google". * `deviceType`: Matches error issues that occurred in the requested device types. Example: `deviceType = "PHONE"`. * `errorIssueType`: Matches error issues of the requested types only. Valid candidates: `CRASH`, `ANR`. Example: `errorIssueType = CRASH OR errorIssueType = ANR`. * `appProcessState`: Matches error issues on the process state of an app, indicating whether an app runs in the foreground (user-visible) or background. Valid candidates: `FOREGROUND`, `BACKGROUND`. Example: `appProcessState = FOREGROUND`. * `isUserPerceived`: Matches error issues that are user-perceived. It is not accompanied by any operators. Example: `isUserPerceived`. ** Supported operators:** * Comparison operators: The only supported comparison operator is equality. The filtered field must appear on the left hand side of the comparison. * Logical Operators: Logical operators `AND` and `OR` can be used to build complex filters following a conjunctive normal form (CNF), i.e., conjunctions of disjunctions. The `OR` operator takes precedence over `AND` so the use of parenthesis is not necessary when building CNF. The `OR` operator is only supported to build disjunctions that apply to the same field, e.g., `versionCode = 123 OR errorIssueType = ANR` is not a valid filter. ** Examples ** Some valid filtering expressions: * `versionCode = 123 AND errorIssueType = ANR` * `versionCode = 123 AND errorIssueType = OR errorIssueType = CRASH` * `versionCode = 123 AND (errorIssueType = OR errorIssueType = CRASH)`
     *     filter: 'placeholder-value',
     *     // Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day.
     *     'interval.endTime.day': 'placeholder-value',
     *     // Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value "24:00:00" for scenarios like business closing time.
     *     'interval.endTime.hours': 'placeholder-value',
     *     // Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0.
     *     'interval.endTime.minutes': 'placeholder-value',
     *     // Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month.
     *     'interval.endTime.month': 'placeholder-value',
     *     // Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0.
     *     'interval.endTime.nanos': 'placeholder-value',
     *     // Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds.
     *     'interval.endTime.seconds': 'placeholder-value',
     *     // IANA Time Zone Database time zone, e.g. "America/New_York".
     *     'interval.endTime.timeZone.id': 'placeholder-value',
     *     // Optional. IANA Time Zone Database version number, e.g. "2019a".
     *     'interval.endTime.timeZone.version': 'placeholder-value',
     *     // UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 \}.
     *     'interval.endTime.utcOffset': 'placeholder-value',
     *     // Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year.
     *     'interval.endTime.year': 'placeholder-value',
     *     // Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day.
     *     'interval.startTime.day': 'placeholder-value',
     *     // Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value "24:00:00" for scenarios like business closing time.
     *     'interval.startTime.hours': 'placeholder-value',
     *     // Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0.
     *     'interval.startTime.minutes': 'placeholder-value',
     *     // Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month.
     *     'interval.startTime.month': 'placeholder-value',
     *     // Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0.
     *     'interval.startTime.nanos': 'placeholder-value',
     *     // Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds.
     *     'interval.startTime.seconds': 'placeholder-value',
     *     // IANA Time Zone Database time zone, e.g. "America/New_York".
     *     'interval.startTime.timeZone.id': 'placeholder-value',
     *     // Optional. IANA Time Zone Database version number, e.g. "2019a".
     *     'interval.startTime.timeZone.version': 'placeholder-value',
     *     // UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 \}.
     *     'interval.startTime.utcOffset': 'placeholder-value',
     *     // Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year.
     *     'interval.startTime.year': 'placeholder-value',
     *     // Specifies a field that will be used to order the results. ** Supported dimensions:** * `errorReportCount`: Orders issues by number of error reports. * `distinctUsers`: Orders issues by number of unique affected users. ** Supported operations:** * `asc` for ascending order. * `desc` for descending order. Format: A field and an operation, e.g., `errorReportCount desc` *Note:* currently only one field is supported at a time.
     *     orderBy: 'placeholder-value',
     *     // The maximum number of error issues to return. The service may return fewer than this value. If unspecified, at most 50 error issues will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to the request must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. Parent resource of the error issues, indicating the application for which they were received. Format: apps/{app\}
     *     parent: 'apps/my-app',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "errorIssues": [],
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
      params: Params$Resource$Vitals$Errors$Issues$Search,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    search(
      params?: Params$Resource$Vitals$Errors$Issues$Search,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse>;
    search(
      params: Params$Resource$Vitals$Errors$Issues$Search,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    search(
      params: Params$Resource$Vitals$Errors$Issues$Search,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse>,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse>
    ): void;
    search(
      params: Params$Resource$Vitals$Errors$Issues$Search,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse>
    ): void;
    search(
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse>
    ): void;
    search(
      paramsOrCallback?:
        | Params$Resource$Vitals$Errors$Issues$Search
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Vitals$Errors$Issues$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Vitals$Errors$Issues$Search;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://playdeveloperreporting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/errorIssues:search').replace(
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
        createAPIRequest<Schema$GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Vitals$Errors$Issues$Search
    extends StandardParameters {
    /**
     * A selection predicate to retrieve only a subset of the issues. Counts in the returned error issues will only reflect occurrences that matched the filter. For filtering basics, please check [AIP-160](https://google.aip.dev/160). ** Supported field names:** * `apiLevel`: Matches error issues that occurred in the requested Android versions (specified as the numeric API level) only. Example: `apiLevel = 28 OR apiLevel = 29`. * `versionCode`: Matches error issues that occurred in the requested app version codes only. Example: `versionCode = 123 OR versionCode = 456`. * `deviceModel`: Matches error issues that occurred in the requested devices. Example: `deviceModel = "google/walleye" OR deviceModel = "google/marlin"`. * `deviceBrand`: Matches error issues that occurred in the requested device brands. Example: `deviceBrand = "Google". * `deviceType`: Matches error issues that occurred in the requested device types. Example: `deviceType = "PHONE"`. * `errorIssueType`: Matches error issues of the requested types only. Valid candidates: `CRASH`, `ANR`. Example: `errorIssueType = CRASH OR errorIssueType = ANR`. * `appProcessState`: Matches error issues on the process state of an app, indicating whether an app runs in the foreground (user-visible) or background. Valid candidates: `FOREGROUND`, `BACKGROUND`. Example: `appProcessState = FOREGROUND`. * `isUserPerceived`: Matches error issues that are user-perceived. It is not accompanied by any operators. Example: `isUserPerceived`. ** Supported operators:** * Comparison operators: The only supported comparison operator is equality. The filtered field must appear on the left hand side of the comparison. * Logical Operators: Logical operators `AND` and `OR` can be used to build complex filters following a conjunctive normal form (CNF), i.e., conjunctions of disjunctions. The `OR` operator takes precedence over `AND` so the use of parenthesis is not necessary when building CNF. The `OR` operator is only supported to build disjunctions that apply to the same field, e.g., `versionCode = 123 OR errorIssueType = ANR` is not a valid filter. ** Examples ** Some valid filtering expressions: * `versionCode = 123 AND errorIssueType = ANR` * `versionCode = 123 AND errorIssueType = OR errorIssueType = CRASH` * `versionCode = 123 AND (errorIssueType = OR errorIssueType = CRASH)`
     */
    filter?: string;
    /**
     * Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day.
     */
    'interval.endTime.day'?: number;
    /**
     * Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value "24:00:00" for scenarios like business closing time.
     */
    'interval.endTime.hours'?: number;
    /**
     * Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0.
     */
    'interval.endTime.minutes'?: number;
    /**
     * Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month.
     */
    'interval.endTime.month'?: number;
    /**
     * Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0.
     */
    'interval.endTime.nanos'?: number;
    /**
     * Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds.
     */
    'interval.endTime.seconds'?: number;
    /**
     * IANA Time Zone Database time zone, e.g. "America/New_York".
     */
    'interval.endTime.timeZone.id'?: string;
    /**
     * Optional. IANA Time Zone Database version number, e.g. "2019a".
     */
    'interval.endTime.timeZone.version'?: string;
    /**
     * UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 \}.
     */
    'interval.endTime.utcOffset'?: string;
    /**
     * Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year.
     */
    'interval.endTime.year'?: number;
    /**
     * Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day.
     */
    'interval.startTime.day'?: number;
    /**
     * Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value "24:00:00" for scenarios like business closing time.
     */
    'interval.startTime.hours'?: number;
    /**
     * Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0.
     */
    'interval.startTime.minutes'?: number;
    /**
     * Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month.
     */
    'interval.startTime.month'?: number;
    /**
     * Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0.
     */
    'interval.startTime.nanos'?: number;
    /**
     * Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds.
     */
    'interval.startTime.seconds'?: number;
    /**
     * IANA Time Zone Database time zone, e.g. "America/New_York".
     */
    'interval.startTime.timeZone.id'?: string;
    /**
     * Optional. IANA Time Zone Database version number, e.g. "2019a".
     */
    'interval.startTime.timeZone.version'?: string;
    /**
     * UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 \}.
     */
    'interval.startTime.utcOffset'?: string;
    /**
     * Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year.
     */
    'interval.startTime.year'?: number;
    /**
     * Specifies a field that will be used to order the results. ** Supported dimensions:** * `errorReportCount`: Orders issues by number of error reports. * `distinctUsers`: Orders issues by number of unique affected users. ** Supported operations:** * `asc` for ascending order. * `desc` for descending order. Format: A field and an operation, e.g., `errorReportCount desc` *Note:* currently only one field is supported at a time.
     */
    orderBy?: string;
    /**
     * The maximum number of error issues to return. The service may return fewer than this value. If unspecified, at most 50 error issues will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to the request must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Parent resource of the error issues, indicating the application for which they were received. Format: apps/{app\}
     */
    parent?: string;
  }

  export class Resource$Vitals$Errors$Reports {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Searches all error reports received for an app.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/playdeveloperreporting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const playdeveloperreporting = google.playdeveloperreporting('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/playdeveloperreporting'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await playdeveloperreporting.vitals.errors.reports.search({
     *     // A selection predicate to retrieve only a subset of the reports. For filtering basics, please check [AIP-160](https://google.aip.dev/160). ** Supported field names:** * `apiLevel`: Matches error reports that occurred in the requested Android versions (specified as the numeric API level) only. Example: `apiLevel = 28 OR apiLevel = 29`. * `versionCode`: Matches error reports that occurred in the requested app version codes only. Example: `versionCode = 123 OR versionCode = 456`. * `deviceModel`: Matches error issues that occurred in the requested devices. Example: `deviceModel = "google/walleye" OR deviceModel = "google/marlin"`. * `deviceBrand`: Matches error issues that occurred in the requested device brands. Example: `deviceBrand = "Google". * `deviceType`: Matches error reports that occurred in the requested device types. Example: `deviceType = "PHONE"`. * `errorIssueType`: Matches error reports of the requested types only. Valid candidates: `JAVA_CRASH`, `NATIVE_CRASH`, `ANR`. Example: `errorIssueType = JAVA_CRASH OR errorIssueType = NATIVE_CRASH`. * `errorIssueId`: Matches error reports belonging to the requested error issue ids only. Example: `errorIssueId = 1234 OR errorIssueId = 4567`. * `appProcessState`: Matches error reports on the process state of an app, indicating whether an app runs in the foreground (user-visible) or background. Valid candidates: `FOREGROUND`, `BACKGROUND`. Example: `appProcessState = FOREGROUND`. * `isUserPerceived`: Matches error reports that are user-perceived. It is not accompanied by any operators. Example: `isUserPerceived`. ** Supported operators:** * Comparison operators: The only supported comparison operator is equality. The filtered field must appear on the left hand side of the comparison. * Logical Operators: Logical operators `AND` and `OR` can be used to build complex filters following a conjunctive normal form (CNF), i.e., conjunctions of disjunctions. The `OR` operator takes precedence over `AND` so the use of parenthesis is not necessary when building CNF. The `OR` operator is only supported to build disjunctions that apply to the same field, e.g., `versionCode = 123 OR versionCode = ANR`. The filter expression `versionCode = 123 OR errorIssueType = ANR` is not valid. ** Examples ** Some valid filtering expressions: * `versionCode = 123 AND errorIssueType = ANR` * `versionCode = 123 AND errorIssueType = OR errorIssueType = CRASH` * `versionCode = 123 AND (errorIssueType = OR errorIssueType = CRASH)`
     *     filter: 'placeholder-value',
     *     // Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day.
     *     'interval.endTime.day': 'placeholder-value',
     *     // Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value "24:00:00" for scenarios like business closing time.
     *     'interval.endTime.hours': 'placeholder-value',
     *     // Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0.
     *     'interval.endTime.minutes': 'placeholder-value',
     *     // Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month.
     *     'interval.endTime.month': 'placeholder-value',
     *     // Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0.
     *     'interval.endTime.nanos': 'placeholder-value',
     *     // Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds.
     *     'interval.endTime.seconds': 'placeholder-value',
     *     // IANA Time Zone Database time zone, e.g. "America/New_York".
     *     'interval.endTime.timeZone.id': 'placeholder-value',
     *     // Optional. IANA Time Zone Database version number, e.g. "2019a".
     *     'interval.endTime.timeZone.version': 'placeholder-value',
     *     // UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 \}.
     *     'interval.endTime.utcOffset': 'placeholder-value',
     *     // Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year.
     *     'interval.endTime.year': 'placeholder-value',
     *     // Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day.
     *     'interval.startTime.day': 'placeholder-value',
     *     // Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value "24:00:00" for scenarios like business closing time.
     *     'interval.startTime.hours': 'placeholder-value',
     *     // Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0.
     *     'interval.startTime.minutes': 'placeholder-value',
     *     // Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month.
     *     'interval.startTime.month': 'placeholder-value',
     *     // Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0.
     *     'interval.startTime.nanos': 'placeholder-value',
     *     // Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds.
     *     'interval.startTime.seconds': 'placeholder-value',
     *     // IANA Time Zone Database time zone, e.g. "America/New_York".
     *     'interval.startTime.timeZone.id': 'placeholder-value',
     *     // Optional. IANA Time Zone Database version number, e.g. "2019a".
     *     'interval.startTime.timeZone.version': 'placeholder-value',
     *     // UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 \}.
     *     'interval.startTime.utcOffset': 'placeholder-value',
     *     // Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year.
     *     'interval.startTime.year': 'placeholder-value',
     *     // The maximum number of reports to return. The service may return fewer than this value. If unspecified, at most 50 reports will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `SearchErrorReports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchErrorReports` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. Parent resource of the reports, indicating the application for which they were received. Format: apps/{app\}
     *     parent: 'apps/my-app',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "errorReports": [],
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
      params: Params$Resource$Vitals$Errors$Reports$Search,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    search(
      params?: Params$Resource$Vitals$Errors$Reports$Search,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse>;
    search(
      params: Params$Resource$Vitals$Errors$Reports$Search,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    search(
      params: Params$Resource$Vitals$Errors$Reports$Search,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse>,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse>
    ): void;
    search(
      params: Params$Resource$Vitals$Errors$Reports$Search,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse>
    ): void;
    search(
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse>
    ): void;
    search(
      paramsOrCallback?:
        | Params$Resource$Vitals$Errors$Reports$Search
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Vitals$Errors$Reports$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Vitals$Errors$Reports$Search;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://playdeveloperreporting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/errorReports:search').replace(
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
        createAPIRequest<Schema$GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Vitals$Errors$Reports$Search
    extends StandardParameters {
    /**
     * A selection predicate to retrieve only a subset of the reports. For filtering basics, please check [AIP-160](https://google.aip.dev/160). ** Supported field names:** * `apiLevel`: Matches error reports that occurred in the requested Android versions (specified as the numeric API level) only. Example: `apiLevel = 28 OR apiLevel = 29`. * `versionCode`: Matches error reports that occurred in the requested app version codes only. Example: `versionCode = 123 OR versionCode = 456`. * `deviceModel`: Matches error issues that occurred in the requested devices. Example: `deviceModel = "google/walleye" OR deviceModel = "google/marlin"`. * `deviceBrand`: Matches error issues that occurred in the requested device brands. Example: `deviceBrand = "Google". * `deviceType`: Matches error reports that occurred in the requested device types. Example: `deviceType = "PHONE"`. * `errorIssueType`: Matches error reports of the requested types only. Valid candidates: `JAVA_CRASH`, `NATIVE_CRASH`, `ANR`. Example: `errorIssueType = JAVA_CRASH OR errorIssueType = NATIVE_CRASH`. * `errorIssueId`: Matches error reports belonging to the requested error issue ids only. Example: `errorIssueId = 1234 OR errorIssueId = 4567`. * `appProcessState`: Matches error reports on the process state of an app, indicating whether an app runs in the foreground (user-visible) or background. Valid candidates: `FOREGROUND`, `BACKGROUND`. Example: `appProcessState = FOREGROUND`. * `isUserPerceived`: Matches error reports that are user-perceived. It is not accompanied by any operators. Example: `isUserPerceived`. ** Supported operators:** * Comparison operators: The only supported comparison operator is equality. The filtered field must appear on the left hand side of the comparison. * Logical Operators: Logical operators `AND` and `OR` can be used to build complex filters following a conjunctive normal form (CNF), i.e., conjunctions of disjunctions. The `OR` operator takes precedence over `AND` so the use of parenthesis is not necessary when building CNF. The `OR` operator is only supported to build disjunctions that apply to the same field, e.g., `versionCode = 123 OR versionCode = ANR`. The filter expression `versionCode = 123 OR errorIssueType = ANR` is not valid. ** Examples ** Some valid filtering expressions: * `versionCode = 123 AND errorIssueType = ANR` * `versionCode = 123 AND errorIssueType = OR errorIssueType = CRASH` * `versionCode = 123 AND (errorIssueType = OR errorIssueType = CRASH)`
     */
    filter?: string;
    /**
     * Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day.
     */
    'interval.endTime.day'?: number;
    /**
     * Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value "24:00:00" for scenarios like business closing time.
     */
    'interval.endTime.hours'?: number;
    /**
     * Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0.
     */
    'interval.endTime.minutes'?: number;
    /**
     * Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month.
     */
    'interval.endTime.month'?: number;
    /**
     * Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0.
     */
    'interval.endTime.nanos'?: number;
    /**
     * Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds.
     */
    'interval.endTime.seconds'?: number;
    /**
     * IANA Time Zone Database time zone, e.g. "America/New_York".
     */
    'interval.endTime.timeZone.id'?: string;
    /**
     * Optional. IANA Time Zone Database version number, e.g. "2019a".
     */
    'interval.endTime.timeZone.version'?: string;
    /**
     * UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 \}.
     */
    'interval.endTime.utcOffset'?: string;
    /**
     * Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year.
     */
    'interval.endTime.year'?: number;
    /**
     * Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day.
     */
    'interval.startTime.day'?: number;
    /**
     * Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value "24:00:00" for scenarios like business closing time.
     */
    'interval.startTime.hours'?: number;
    /**
     * Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0.
     */
    'interval.startTime.minutes'?: number;
    /**
     * Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month.
     */
    'interval.startTime.month'?: number;
    /**
     * Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0.
     */
    'interval.startTime.nanos'?: number;
    /**
     * Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds.
     */
    'interval.startTime.seconds'?: number;
    /**
     * IANA Time Zone Database time zone, e.g. "America/New_York".
     */
    'interval.startTime.timeZone.id'?: string;
    /**
     * Optional. IANA Time Zone Database version number, e.g. "2019a".
     */
    'interval.startTime.timeZone.version'?: string;
    /**
     * UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 \}.
     */
    'interval.startTime.utcOffset'?: string;
    /**
     * Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year.
     */
    'interval.startTime.year'?: number;
    /**
     * The maximum number of reports to return. The service may return fewer than this value. If unspecified, at most 50 reports will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `SearchErrorReports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchErrorReports` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Parent resource of the reports, indicating the application for which they were received. Format: apps/{app\}
     */
    parent?: string;
  }

  export class Resource$Vitals$Excessivewakeuprate {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Describes the properties of the metric set.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/playdeveloperreporting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const playdeveloperreporting = google.playdeveloperreporting('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/playdeveloperreporting'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await playdeveloperreporting.vitals.excessivewakeuprate.get({
     *     // Required. The resource name. Format: apps/{app\}/excessiveWakeupRateMetricSet
     *     name: 'apps/my-app/excessiveWakeupRateMetricSet',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "freshnessInfo": {},
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
      params: Params$Resource$Vitals$Excessivewakeuprate$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Vitals$Excessivewakeuprate$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePlayDeveloperReportingV1alpha1ExcessiveWakeupRateMetricSet>;
    get(
      params: Params$Resource$Vitals$Excessivewakeuprate$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Vitals$Excessivewakeuprate$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1ExcessiveWakeupRateMetricSet>,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1ExcessiveWakeupRateMetricSet>
    ): void;
    get(
      params: Params$Resource$Vitals$Excessivewakeuprate$Get,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1ExcessiveWakeupRateMetricSet>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1ExcessiveWakeupRateMetricSet>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Vitals$Excessivewakeuprate$Get
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1ExcessiveWakeupRateMetricSet>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1ExcessiveWakeupRateMetricSet>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1ExcessiveWakeupRateMetricSet>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GooglePlayDeveloperReportingV1alpha1ExcessiveWakeupRateMetricSet>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Vitals$Excessivewakeuprate$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Vitals$Excessivewakeuprate$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://playdeveloperreporting.googleapis.com/';
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
        createAPIRequest<Schema$GooglePlayDeveloperReportingV1alpha1ExcessiveWakeupRateMetricSet>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GooglePlayDeveloperReportingV1alpha1ExcessiveWakeupRateMetricSet>(
          parameters
        );
      }
    }

    /**
     * Queries the metrics in the metric set.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/playdeveloperreporting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const playdeveloperreporting = google.playdeveloperreporting('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/playdeveloperreporting'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await playdeveloperreporting.vitals.excessivewakeuprate.query({
     *     // Required. The resource name. Format: apps/{app\}/excessiveWakeupRateMetricSet
     *     name: 'apps/my-app/excessiveWakeupRateMetricSet',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "dimensions": [],
     *       //   "filter": "my_filter",
     *       //   "metrics": [],
     *       //   "pageSize": 0,
     *       //   "pageToken": "my_pageToken",
     *       //   "timelineSpec": {},
     *       //   "userCohort": "my_userCohort"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "rows": []
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
    query(
      params: Params$Resource$Vitals$Excessivewakeuprate$Query,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    query(
      params?: Params$Resource$Vitals$Excessivewakeuprate$Query,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePlayDeveloperReportingV1alpha1QueryExcessiveWakeupRateMetricSetResponse>;
    query(
      params: Params$Resource$Vitals$Excessivewakeuprate$Query,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    query(
      params: Params$Resource$Vitals$Excessivewakeuprate$Query,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1QueryExcessiveWakeupRateMetricSetResponse>,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1QueryExcessiveWakeupRateMetricSetResponse>
    ): void;
    query(
      params: Params$Resource$Vitals$Excessivewakeuprate$Query,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1QueryExcessiveWakeupRateMetricSetResponse>
    ): void;
    query(
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1QueryExcessiveWakeupRateMetricSetResponse>
    ): void;
    query(
      paramsOrCallback?:
        | Params$Resource$Vitals$Excessivewakeuprate$Query
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1QueryExcessiveWakeupRateMetricSetResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1QueryExcessiveWakeupRateMetricSetResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1QueryExcessiveWakeupRateMetricSetResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GooglePlayDeveloperReportingV1alpha1QueryExcessiveWakeupRateMetricSetResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Vitals$Excessivewakeuprate$Query;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Vitals$Excessivewakeuprate$Query;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://playdeveloperreporting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}:query').replace(
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
        createAPIRequest<Schema$GooglePlayDeveloperReportingV1alpha1QueryExcessiveWakeupRateMetricSetResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GooglePlayDeveloperReportingV1alpha1QueryExcessiveWakeupRateMetricSetResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Vitals$Excessivewakeuprate$Get
    extends StandardParameters {
    /**
     * Required. The resource name. Format: apps/{app\}/excessiveWakeupRateMetricSet
     */
    name?: string;
  }
  export interface Params$Resource$Vitals$Excessivewakeuprate$Query
    extends StandardParameters {
    /**
     * Required. The resource name. Format: apps/{app\}/excessiveWakeupRateMetricSet
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GooglePlayDeveloperReportingV1alpha1QueryExcessiveWakeupRateMetricSetRequest;
  }

  export class Resource$Vitals$Slowrenderingrate {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Describes the properties of the metric set.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/playdeveloperreporting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const playdeveloperreporting = google.playdeveloperreporting('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/playdeveloperreporting'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await playdeveloperreporting.vitals.slowrenderingrate.get({
     *     // Required. The resource name. Format: apps/{app\}/slowRenderingRateMetricSet
     *     name: 'apps/my-app/slowRenderingRateMetricSet',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "freshnessInfo": {},
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
      params: Params$Resource$Vitals$Slowrenderingrate$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Vitals$Slowrenderingrate$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePlayDeveloperReportingV1alpha1SlowRenderingRateMetricSet>;
    get(
      params: Params$Resource$Vitals$Slowrenderingrate$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Vitals$Slowrenderingrate$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1SlowRenderingRateMetricSet>,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1SlowRenderingRateMetricSet>
    ): void;
    get(
      params: Params$Resource$Vitals$Slowrenderingrate$Get,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1SlowRenderingRateMetricSet>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1SlowRenderingRateMetricSet>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Vitals$Slowrenderingrate$Get
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1SlowRenderingRateMetricSet>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1SlowRenderingRateMetricSet>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1SlowRenderingRateMetricSet>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GooglePlayDeveloperReportingV1alpha1SlowRenderingRateMetricSet>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Vitals$Slowrenderingrate$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Vitals$Slowrenderingrate$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://playdeveloperreporting.googleapis.com/';
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
        createAPIRequest<Schema$GooglePlayDeveloperReportingV1alpha1SlowRenderingRateMetricSet>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GooglePlayDeveloperReportingV1alpha1SlowRenderingRateMetricSet>(
          parameters
        );
      }
    }

    /**
     * Queries the metrics in the metric set.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/playdeveloperreporting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const playdeveloperreporting = google.playdeveloperreporting('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/playdeveloperreporting'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await playdeveloperreporting.vitals.slowrenderingrate.query({
     *     // Required. The resource name. Format: apps/{app\}/slowRenderingRateMetricSet
     *     name: 'apps/my-app/slowRenderingRateMetricSet',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "dimensions": [],
     *       //   "filter": "my_filter",
     *       //   "metrics": [],
     *       //   "pageSize": 0,
     *       //   "pageToken": "my_pageToken",
     *       //   "timelineSpec": {},
     *       //   "userCohort": "my_userCohort"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "rows": []
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
    query(
      params: Params$Resource$Vitals$Slowrenderingrate$Query,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    query(
      params?: Params$Resource$Vitals$Slowrenderingrate$Query,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePlayDeveloperReportingV1alpha1QuerySlowRenderingRateMetricSetResponse>;
    query(
      params: Params$Resource$Vitals$Slowrenderingrate$Query,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    query(
      params: Params$Resource$Vitals$Slowrenderingrate$Query,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1QuerySlowRenderingRateMetricSetResponse>,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1QuerySlowRenderingRateMetricSetResponse>
    ): void;
    query(
      params: Params$Resource$Vitals$Slowrenderingrate$Query,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1QuerySlowRenderingRateMetricSetResponse>
    ): void;
    query(
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1QuerySlowRenderingRateMetricSetResponse>
    ): void;
    query(
      paramsOrCallback?:
        | Params$Resource$Vitals$Slowrenderingrate$Query
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1QuerySlowRenderingRateMetricSetResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1QuerySlowRenderingRateMetricSetResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1QuerySlowRenderingRateMetricSetResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GooglePlayDeveloperReportingV1alpha1QuerySlowRenderingRateMetricSetResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Vitals$Slowrenderingrate$Query;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Vitals$Slowrenderingrate$Query;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://playdeveloperreporting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}:query').replace(
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
        createAPIRequest<Schema$GooglePlayDeveloperReportingV1alpha1QuerySlowRenderingRateMetricSetResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GooglePlayDeveloperReportingV1alpha1QuerySlowRenderingRateMetricSetResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Vitals$Slowrenderingrate$Get
    extends StandardParameters {
    /**
     * Required. The resource name. Format: apps/{app\}/slowRenderingRateMetricSet
     */
    name?: string;
  }
  export interface Params$Resource$Vitals$Slowrenderingrate$Query
    extends StandardParameters {
    /**
     * Required. The resource name. Format: apps/{app\}/slowRenderingRateMetricSet
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GooglePlayDeveloperReportingV1alpha1QuerySlowRenderingRateMetricSetRequest;
  }

  export class Resource$Vitals$Slowstartrate {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Describes the properties of the metric set.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/playdeveloperreporting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const playdeveloperreporting = google.playdeveloperreporting('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/playdeveloperreporting'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await playdeveloperreporting.vitals.slowstartrate.get({
     *     // Required. The resource name. Format: apps/{app\}/slowStartRateMetricSet
     *     name: 'apps/my-app/slowStartRateMetricSet',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "freshnessInfo": {},
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
      params: Params$Resource$Vitals$Slowstartrate$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Vitals$Slowstartrate$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePlayDeveloperReportingV1alpha1SlowStartRateMetricSet>;
    get(
      params: Params$Resource$Vitals$Slowstartrate$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Vitals$Slowstartrate$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1SlowStartRateMetricSet>,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1SlowStartRateMetricSet>
    ): void;
    get(
      params: Params$Resource$Vitals$Slowstartrate$Get,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1SlowStartRateMetricSet>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1SlowStartRateMetricSet>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Vitals$Slowstartrate$Get
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1SlowStartRateMetricSet>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1SlowStartRateMetricSet>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1SlowStartRateMetricSet>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GooglePlayDeveloperReportingV1alpha1SlowStartRateMetricSet>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Vitals$Slowstartrate$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Vitals$Slowstartrate$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://playdeveloperreporting.googleapis.com/';
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
        createAPIRequest<Schema$GooglePlayDeveloperReportingV1alpha1SlowStartRateMetricSet>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GooglePlayDeveloperReportingV1alpha1SlowStartRateMetricSet>(
          parameters
        );
      }
    }

    /**
     * Queries the metrics in the metric set.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/playdeveloperreporting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const playdeveloperreporting = google.playdeveloperreporting('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/playdeveloperreporting'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await playdeveloperreporting.vitals.slowstartrate.query({
     *     // Required. The resource name. Format: apps/{app\}/slowStartRateMetricSet
     *     name: 'apps/my-app/slowStartRateMetricSet',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "dimensions": [],
     *       //   "filter": "my_filter",
     *       //   "metrics": [],
     *       //   "pageSize": 0,
     *       //   "pageToken": "my_pageToken",
     *       //   "timelineSpec": {},
     *       //   "userCohort": "my_userCohort"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "rows": []
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
    query(
      params: Params$Resource$Vitals$Slowstartrate$Query,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    query(
      params?: Params$Resource$Vitals$Slowstartrate$Query,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePlayDeveloperReportingV1alpha1QuerySlowStartRateMetricSetResponse>;
    query(
      params: Params$Resource$Vitals$Slowstartrate$Query,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    query(
      params: Params$Resource$Vitals$Slowstartrate$Query,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1QuerySlowStartRateMetricSetResponse>,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1QuerySlowStartRateMetricSetResponse>
    ): void;
    query(
      params: Params$Resource$Vitals$Slowstartrate$Query,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1QuerySlowStartRateMetricSetResponse>
    ): void;
    query(
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1QuerySlowStartRateMetricSetResponse>
    ): void;
    query(
      paramsOrCallback?:
        | Params$Resource$Vitals$Slowstartrate$Query
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1QuerySlowStartRateMetricSetResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1QuerySlowStartRateMetricSetResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1QuerySlowStartRateMetricSetResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GooglePlayDeveloperReportingV1alpha1QuerySlowStartRateMetricSetResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Vitals$Slowstartrate$Query;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Vitals$Slowstartrate$Query;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://playdeveloperreporting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}:query').replace(
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
        createAPIRequest<Schema$GooglePlayDeveloperReportingV1alpha1QuerySlowStartRateMetricSetResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GooglePlayDeveloperReportingV1alpha1QuerySlowStartRateMetricSetResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Vitals$Slowstartrate$Get
    extends StandardParameters {
    /**
     * Required. The resource name. Format: apps/{app\}/slowStartRateMetricSet
     */
    name?: string;
  }
  export interface Params$Resource$Vitals$Slowstartrate$Query
    extends StandardParameters {
    /**
     * Required. The resource name. Format: apps/{app\}/slowStartRateMetricSet
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GooglePlayDeveloperReportingV1alpha1QuerySlowStartRateMetricSetRequest;
  }

  export class Resource$Vitals$Stuckbackgroundwakelockrate {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Describes the properties of the metric set.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/playdeveloperreporting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const playdeveloperreporting = google.playdeveloperreporting('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/playdeveloperreporting'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await playdeveloperreporting.vitals.stuckbackgroundwakelockrate.get({
     *       // Required. The resource name. Format: apps/{app\}/stuckBackgroundWakelockRateMetricSet
     *       name: 'apps/my-app/stuckBackgroundWakelockRateMetricSet',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "freshnessInfo": {},
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
      params: Params$Resource$Vitals$Stuckbackgroundwakelockrate$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Vitals$Stuckbackgroundwakelockrate$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePlayDeveloperReportingV1alpha1StuckBackgroundWakelockRateMetricSet>;
    get(
      params: Params$Resource$Vitals$Stuckbackgroundwakelockrate$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Vitals$Stuckbackgroundwakelockrate$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1StuckBackgroundWakelockRateMetricSet>,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1StuckBackgroundWakelockRateMetricSet>
    ): void;
    get(
      params: Params$Resource$Vitals$Stuckbackgroundwakelockrate$Get,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1StuckBackgroundWakelockRateMetricSet>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1StuckBackgroundWakelockRateMetricSet>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Vitals$Stuckbackgroundwakelockrate$Get
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1StuckBackgroundWakelockRateMetricSet>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1StuckBackgroundWakelockRateMetricSet>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1StuckBackgroundWakelockRateMetricSet>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GooglePlayDeveloperReportingV1alpha1StuckBackgroundWakelockRateMetricSet>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Vitals$Stuckbackgroundwakelockrate$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Vitals$Stuckbackgroundwakelockrate$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://playdeveloperreporting.googleapis.com/';
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
        createAPIRequest<Schema$GooglePlayDeveloperReportingV1alpha1StuckBackgroundWakelockRateMetricSet>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GooglePlayDeveloperReportingV1alpha1StuckBackgroundWakelockRateMetricSet>(
          parameters
        );
      }
    }

    /**
     * Queries the metrics in the metric set.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/playdeveloperreporting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const playdeveloperreporting = google.playdeveloperreporting('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/playdeveloperreporting'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await playdeveloperreporting.vitals.stuckbackgroundwakelockrate.query({
     *       // Required. The resource name. Format: apps/{app\}/stuckBackgroundWakelockRateMetricSet
     *       name: 'apps/my-app/stuckBackgroundWakelockRateMetricSet',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "dimensions": [],
     *         //   "filter": "my_filter",
     *         //   "metrics": [],
     *         //   "pageSize": 0,
     *         //   "pageToken": "my_pageToken",
     *         //   "timelineSpec": {},
     *         //   "userCohort": "my_userCohort"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "rows": []
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
    query(
      params: Params$Resource$Vitals$Stuckbackgroundwakelockrate$Query,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    query(
      params?: Params$Resource$Vitals$Stuckbackgroundwakelockrate$Query,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetResponse>;
    query(
      params: Params$Resource$Vitals$Stuckbackgroundwakelockrate$Query,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    query(
      params: Params$Resource$Vitals$Stuckbackgroundwakelockrate$Query,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetResponse>,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetResponse>
    ): void;
    query(
      params: Params$Resource$Vitals$Stuckbackgroundwakelockrate$Query,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetResponse>
    ): void;
    query(
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetResponse>
    ): void;
    query(
      paramsOrCallback?:
        | Params$Resource$Vitals$Stuckbackgroundwakelockrate$Query
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Vitals$Stuckbackgroundwakelockrate$Query;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Vitals$Stuckbackgroundwakelockrate$Query;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://playdeveloperreporting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}:query').replace(
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
        createAPIRequest<Schema$GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Vitals$Stuckbackgroundwakelockrate$Get
    extends StandardParameters {
    /**
     * Required. The resource name. Format: apps/{app\}/stuckBackgroundWakelockRateMetricSet
     */
    name?: string;
  }
  export interface Params$Resource$Vitals$Stuckbackgroundwakelockrate$Query
    extends StandardParameters {
    /**
     * Required. The resource name. Format: apps/{app\}/stuckBackgroundWakelockRateMetricSet
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetRequest;
  }
}
