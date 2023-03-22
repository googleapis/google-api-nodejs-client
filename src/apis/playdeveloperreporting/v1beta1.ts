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

export namespace playdeveloperreporting_v1beta1 {
  export interface Options extends GlobalOptions {
    version: 'v1beta1';
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
   * const playdeveloperreporting = google.playdeveloperreporting('v1beta1');
   * ```
   */
  export class Playdeveloperreporting {
    context: APIRequestContext;
    anomalies: Resource$Anomalies;
    vitals: Resource$Vitals;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.anomalies = new Resource$Anomalies(this.context);
      this.vitals = new Resource$Vitals(this.context);
    }
  }

  /**
   * Represents an anomaly detected in a dataset. Our anomaly detection systems flag datapoints in a time series that fall outside of and expected range derived from historical data. Although those expected ranges have an upper and a lower bound, we only flag anomalies when the data has become unexpectedly _worse_, which usually corresponds to the case where the metric crosses the upper bound. Multiple contiguous datapoints in a timeline outside of the expected range will be grouped into a single anomaly. Therefore, an anomaly represents effectively a segment of a metric's timeline. The information stored in the `timeline_spec`, `dimensions` and `metric` can be used to fetch a full timeline with extended ragne for context. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app.
   */
  export interface Schema$GooglePlayDeveloperReportingV1beta1Anomaly {
    /**
     * Combination of dimensions in which the anomaly was detected.
     */
    dimensions?: Schema$GooglePlayDeveloperReportingV1beta1DimensionValue[];
    /**
     * Metric where the anomaly was detected, together with the anomalous value.
     */
    metric?: Schema$GooglePlayDeveloperReportingV1beta1MetricValue;
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
    timelineSpec?: Schema$GooglePlayDeveloperReportingV1beta1TimelineSpec;
  }
  /**
   * Singleton resource representing the set of ANR (Application not responding) metrics. This metric set contains ANRs data combined with usage data to produce a normalized metric independent of user counts. **Supported aggregation periods:** * DAILY: metrics are aggregated in calendar date intervals. Due to historical constraints, the only supported timezone is `America/Los_Angeles`. **Supported metrics:** * `anrRate` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that experienced at least one ANR. * `anrRate7dUserWeighted` (`google.type.Decimal`): Rolling average value of `anrRate` in the last 7 days. The daily values are weighted by the count of distinct users for the day. * `anrRate28dUserWeighted` (`google.type.Decimal`): Rolling average value of `anrRate` in the last 28 days. The daily values are weighted by the count of distinct users for the day. * `userPerceivedAnrRate` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that experienced at least one user-perceived ANR. User-perceived ANRs are currently those of 'Input dispatching' type. * `userPerceivedAnrRate7dUserWeighted` (`google.type.Decimal`): Rolling average value of `userPerceivedAnrRate` in the last 7 days. The daily values are weighted by the count of distinct users for the day. * `userPerceivedAnrRate28dUserWeighted` (`google.type.Decimal`): Rolling average value of `userPerceivedAnrRate` in the last 28 days. The daily values are weighted by the count of distinct users for the day. * `distinctUsers` (`google.type.Decimal`): Count of distinct users in the aggregation period that were used as normalization value for the `anrRate` and `userPerceivedAnrRate` metrics. A user is counted in this metric if they used the app in the foreground during the aggregation period. Care must be taken not to aggregate this count further, as it may result in users being counted multiple times. **Supported dimensions:** * `apiLevel` (string): the API level of Android that was running on the user's device. * `versionCode` (int64): version of the app that was running on the user's device. * `deviceModel` (string): unique identifier of the user's device model. * `deviceType` (string): the type (also known as form factor) of the user's device. * `countryCode` (string): the country or region of the user's device based on their IP address, represented as a 2-letter ISO-3166 code (e.g. US for the United States). * `deviceRamBucket` (int64): RAM of the device, in MB, in buckets (3GB, 4GB, etc.). * `deviceSocMake` (string): Make of the device's primary system-on-chip, e.g., Samsung. [Reference](https://developer.android.com/reference/android/os/Build#SOC_MANUFACTURER) * `deviceSocModel` (string): Model of the device's primary system-on-chip, e.g., "Exynos 2100". [Reference](https://developer.android.com/reference/android/os/Build#SOC_MODEL) * `deviceCpuMake` (string): Make of the device's CPU, e.g., Qualcomm. * `deviceCpuModel` (string): Model of the device's CPU, e.g., "Kryo 240". * `deviceGpuMake` (string): Make of the device's GPU, e.g., ARM. * `deviceGpuModel` (string): Model of the device's GPU, e.g., Mali. * `deviceGpuVersion` (string): Version of the device's GPU, e.g., T750. * `deviceVulkanVersion` (string): Vulkan version of the device, e.g., "4198400". * `deviceGlEsVersion` (string): OpenGL ES version of the device, e.g., "196610". * `deviceScreenSize` (string): Screen size of the device, e.g., NORMAL, LARGE. * `deviceScreenDpi` (string): Screen density of the device, e.g., mdpi, hdpi. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app. **Related metric sets:** * vitals.errors contains unnormalized version (absolute counts) of crashes. * vitals.errors contains normalized metrics about crashes, another stability metric.
   */
  export interface Schema$GooglePlayDeveloperReportingV1beta1AnrRateMetricSet {
    /**
     * Summary about data freshness in this resource.
     */
    freshnessInfo?: Schema$GooglePlayDeveloperReportingV1beta1FreshnessInfo;
    /**
     * The resource name. Format: apps/{app\}/anrRateMetricSet
     */
    name?: string | null;
  }
  /**
   * Singleton resource representing the set of crashrate metrics. This metric set contains crashes data combined with usage data to produce a normalized metric independent of user counts. **Supported aggregation periods:** * DAILY: metrics are aggregated in calendar date intervals. Due to historical constraints, the only supported timezone is `America/Los_Angeles`. **Supported metrics:** * `crashRate` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that experienced at least one crash. * `crashRate7dUserWeighted` (`google.type.Decimal`): Rolling average value of `crashRate` in the last 7 days. The daily values are weighted by the count of distinct users for the day. * `crashRate28dUserWeighted` (`google.type.Decimal`): Rolling average value of `crashRate` in the last 28 days. The daily values are weighted by the count of distinct users for the day. * `userPerceivedCrashRate` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that experienced at least one crash while they were actively using your app (a user-perceived crash). An app is considered to be in active use if it is displaying any activity or executing any foreground service. * `userPerceivedCrashRate7dUserWeighted` (`google.type.Decimal`): Rolling average value of `userPerceivedCrashRate` in the last 7 days. The daily values are weighted by the count of distinct users for the day. * `userPerceivedCrashRate28dUserWeighted` (`google.type.Decimal`): Rolling average value of `userPerceivedCrashRate` in the last 28 days. The daily values are weighted by the count of distinct users for the day. * `distinctUsers` (`google.type.Decimal`): Count of distinct users in the aggregation period that were used as normalization value for the `crashRate` and `userPerceivedCrashRate` metrics. A user is counted in this metric if they used the app actively during the aggregation period. An app is considered to be in active use if it is displaying any activity or executing any foreground service. Care must be taken not to aggregate this count further, as it may result in users being counted multiple times. **Supported dimensions:** * `apiLevel` (string): the API level of Android that was running on the user's device. * `versionCode` (int64): version of the app that was running on the user's device. * `deviceModel` (string): unique identifier of the user's device model. * `deviceType` (string): the type (also known as form factor) of the user's device. * `countryCode` (string): the country or region of the user's device based on their IP address, represented as a 2-letter ISO-3166 code (e.g. US for the United States). * `deviceRamBucket` (int64): RAM of the device, in MB, in buckets (3GB, 4GB, etc.). * `deviceSocMake` (string): Make of the device's primary system-on-chip, e.g., Samsung. [Reference](https://developer.android.com/reference/android/os/Build#SOC_MANUFACTURER) * `deviceSocModel` (string): Model of the device's primary system-on-chip, e.g., "Exynos 2100". [Reference](https://developer.android.com/reference/android/os/Build#SOC_MODEL) * `deviceCpuMake` (string): Make of the device's CPU, e.g., Qualcomm. * `deviceCpuModel` (string): Model of the device's CPU, e.g., "Kryo 240". * `deviceGpuMake` (string): Make of the device's GPU, e.g., ARM. * `deviceGpuModel` (string): Model of the device's GPU, e.g., Mali. * `deviceGpuVersion` (string): Version of the device's GPU, e.g., T750. * `deviceVulkanVersion` (string): Vulkan version of the device, e.g., "4198400". * `deviceGlEsVersion` (string): OpenGL ES version of the device, e.g., "196610". * `deviceScreenSize` (string): Screen size of the device, e.g., NORMAL, LARGE. * `deviceScreenDpi` (string): Screen density of the device, e.g., mdpi, hdpi. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app. **Related metric sets:** * vitals.errors contains unnormalized version (absolute counts) of crashes. * vitals.errors contains normalized metrics about ANRs, another stability metric.
   */
  export interface Schema$GooglePlayDeveloperReportingV1beta1CrashRateMetricSet {
    /**
     * Summary about data freshness in this resource.
     */
    freshnessInfo?: Schema$GooglePlayDeveloperReportingV1beta1FreshnessInfo;
    /**
     * The resource name. Format: apps/{app\}/crashRateMetricSet
     */
    name?: string | null;
  }
  /**
   * Represents the value of a single dimension.
   */
  export interface Schema$GooglePlayDeveloperReportingV1beta1DimensionValue {
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
   * Singleton resource representing the set of Excessive Weakeups metrics. This metric set contains AlarmManager wakeup counts data combined with process state data to produce a normalized metric independent of user counts. **Supported aggregation periods:** * DAILY: metrics are aggregated in calendar date intervals. Due to historical constraints, the only supported timezone is `America/Los_Angeles`. **Supported metrics:** * `excessiveWakeupRate` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that had more than 10 wakeups per hour. * `excessiveWakeupRate7dUserWeighted` (`google.type.Decimal`): Rolling average value of `excessiveWakeupRate` in the last 7 days. The daily values are weighted by the count of distinct users for the day. * `excessiveWakeupRate28dUserWeighted` (`google.type.Decimal`): Rolling average value of `excessiveWakeupRate` in the last 28 days. The daily values are weighted by the count of distinct users for the day. * `distinctUsers` (`google.type.Decimal`): Count of distinct users in the aggregation period that were used as normalization value for the `excessiveWakeupRate` metric. A user is counted in this metric if they app was doing any work on the device, i.e., not just active foreground usage but also background work. Care must be taken not to aggregate this count further, as it may result in users being counted multiple times. **Supported dimensions:** * `apiLevel` (string): the API level of Android that was running on the user's device. * `versionCode` (int64): version of the app that was running on the user's device. * `deviceModel` (string): unique identifier of the user's device model. * `deviceType` (string): the type (also known as form factor) of the user's device. * `countryCode` (string): the country or region of the user's device based on their IP address, represented as a 2-letter ISO-3166 code (e.g. US for the United States). * `deviceRamBucket` (int64): RAM of the device, in MB, in buckets (3GB, 4GB, etc.). * `deviceSocMake` (string): Make of the device's primary system-on-chip, e.g., Samsung. [Reference](https://developer.android.com/reference/android/os/Build#SOC_MANUFACTURER) * `deviceSocModel` (string): Model of the device's primary system-on-chip, e.g., "Exynos 2100". [Reference](https://developer.android.com/reference/android/os/Build#SOC_MODEL) * `deviceCpuMake` (string): Make of the device's CPU, e.g., Qualcomm. * `deviceCpuModel` (string): Model of the device's CPU, e.g., "Kryo 240". * `deviceGpuMake` (string): Make of the device's GPU, e.g., ARM. * `deviceGpuModel` (string): Model of the device's GPU, e.g., Mali. * `deviceGpuVersion` (string): Version of the device's GPU, e.g., T750. * `deviceVulkanVersion` (string): Vulkan version of the device, e.g., "4198400". * `deviceGlEsVersion` (string): OpenGL ES version of the device, e.g., "196610". * `deviceScreenSize` (string): Screen size of the device, e.g., NORMAL, LARGE. * `deviceScreenDpi` (string): Screen density of the device, e.g., mdpi, hdpi. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app.
   */
  export interface Schema$GooglePlayDeveloperReportingV1beta1ExcessiveWakeupRateMetricSet {
    /**
     * Summary about data freshness in this resource.
     */
    freshnessInfo?: Schema$GooglePlayDeveloperReportingV1beta1FreshnessInfo;
    /**
     * The resource name. Format: apps/{app\}/excessiveWakeupRateMetricSet
     */
    name?: string | null;
  }
  /**
   * Represents the latest available time that can be requested in a TimelineSpec. Different aggregation periods have different freshness. For example, `DAILY` aggregation may lag behind `HOURLY` in cases where such aggregation is computed only once at the end of the day.
   */
  export interface Schema$GooglePlayDeveloperReportingV1beta1FreshnessInfo {
    /**
     * Information about data freshness for every supported aggregation period. This field has set semantics, keyed by the `aggregation_period` field.
     */
    freshnesses?: Schema$GooglePlayDeveloperReportingV1beta1FreshnessInfoFreshness[];
  }
  /**
   * Information about data freshness for a single aggregation period.
   */
  export interface Schema$GooglePlayDeveloperReportingV1beta1FreshnessInfoFreshness {
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
  export interface Schema$GooglePlayDeveloperReportingV1beta1ListAnomaliesResponse {
    /**
     * Anomalies that were found.
     */
    anomalies?: Schema$GooglePlayDeveloperReportingV1beta1Anomaly[];
    /**
     * Continuation token to fetch the next page of data.
     */
    nextPageToken?: string | null;
  }
  /**
   * Represents a row of dimensions and metrics.
   */
  export interface Schema$GooglePlayDeveloperReportingV1beta1MetricsRow {
    /**
     * Granularity of the aggregation period of the row.
     */
    aggregationPeriod?: string | null;
    /**
     * Dimension columns in the row.
     */
    dimensions?: Schema$GooglePlayDeveloperReportingV1beta1DimensionValue[];
    /**
     * Metric columns in the row.
     */
    metrics?: Schema$GooglePlayDeveloperReportingV1beta1MetricValue[];
    /**
     * Starting date (and time for hourly aggregation) of the period covered by this row.
     */
    startTime?: Schema$GoogleTypeDateTime;
  }
  /**
   * Represents the value of a metric.
   */
  export interface Schema$GooglePlayDeveloperReportingV1beta1MetricValue {
    /**
     * Actual value, represented as a decimal number.
     */
    decimalValue?: Schema$GoogleTypeDecimal;
    /**
     * Name of the metric.
     */
    metric?: string | null;
  }
  /**
   * Request message for QueryAnrRateMetricSet.
   */
  export interface Schema$GooglePlayDeveloperReportingV1beta1QueryAnrRateMetricSetRequest {
    /**
     * Dimensions to slice the metrics by. **Supported dimensions:** * `apiLevel` (string): the API level of Android that was running on the user's device. * `versionCode` (int64): version of the app that was running on the user's device. * `deviceModel` (string): unique identifier of the user's device model. * `deviceType` (string): the type (also known as form factor) of the user's device. * `countryCode` (string): the country or region of the user's device based on their IP address, represented as a 2-letter ISO-3166 code (e.g. US for the United States). * `deviceRamBucket` (int64): RAM of the device, in MB, in buckets (3GB, 4GB, etc.). * `deviceSocMake` (string): Make of the device's primary system-on-chip, e.g., Samsung. [Reference](https://developer.android.com/reference/android/os/Build#SOC_MANUFACTURER) * `deviceSocModel` (string): Model of the device's primary system-on-chip, e.g., "Exynos 2100". [Reference](https://developer.android.com/reference/android/os/Build#SOC_MODEL) * `deviceCpuMake` (string): Make of the device's CPU, e.g., Qualcomm. * `deviceCpuModel` (string): Model of the device's CPU, e.g., "Kryo 240". * `deviceGpuMake` (string): Make of the device's GPU, e.g., ARM. * `deviceGpuModel` (string): Model of the device's GPU, e.g., Mali. * `deviceGpuVersion` (string): Version of the device's GPU, e.g., T750. * `deviceVulkanVersion` (string): Vulkan version of the device, e.g., "4198400". * `deviceGlEsVersion` (string): OpenGL ES version of the device, e.g., "196610". * `deviceScreenSize` (string): Screen size of the device, e.g., NORMAL, LARGE. * `deviceScreenDpi` (string): Screen density of the device, e.g., mdpi, hdpi.
     */
    dimensions?: string[] | null;
    /**
     * Filters to apply to data. The filtering expression follows [AIP-160](https://google.aip.dev/160) standard and supports filtering by equality of all breakdown dimensions.
     */
    filter?: string | null;
    /**
     * Metrics to aggregate. **Supported metrics:** * `anrRate` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that experienced at least one ANR. * `anrRate7dUserWeighted` (`google.type.Decimal`): Rolling average value of `anrRate` in the last 7 days. The daily values are weighted by the count of distinct users for the day. * `anrRate28dUserWeighted` (`google.type.Decimal`): Rolling average value of `anrRate` in the last 28 days. The daily values are weighted by the count of distinct users for the day. * `userPerceivedAnrRate` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that experienced at least one user-perceived ANR. User-perceived ANRs are currently those of 'Input dispatching' type. * `userPerceivedAnrRate7dUserWeighted` (`google.type.Decimal`): Rolling average value of `userPerceivedAnrRate` in the last 7 days. The daily values are weighted by the count of distinct users for the day. * `userPerceivedAnrRate28dUserWeighted` (`google.type.Decimal`): Rolling average value of `userPerceivedAnrRate` in the last 28 days. The daily values are weighted by the count of distinct users for the day. * `distinctUsers` (`google.type.Decimal`): Count of distinct users in the aggregation period that were used as normalization value for the `anrRate` and `userPerceivedAnrRate` metrics. A user is counted in this metric if they used the app in the foreground during the aggregation period. Care must be taken not to aggregate this count further, as it may result in users being counted multiple times.
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
     * Specification of the timeline aggregation parameters. **Supported aggregation periods:** * DAILY: metrics are aggregated in calendar date intervals. Due to historical constraints, the default and only supported timezone is `America/Los_Angeles`.
     */
    timelineSpec?: Schema$GooglePlayDeveloperReportingV1beta1TimelineSpec;
    /**
     * User view to select. The output data will correspond to the selected view. **Supported values:** * `OS_PUBLIC` To select data from all publicly released Android versions. This is the default. Supports all the above dimensions. * `APP_TESTERS` To select data from users who have opted in to be testers. Supports all the above dimensions. * `OS_BETA` To select data from beta android versions only, excluding data from released android versions. Only the following dimensions are supported: * `versionCode` (int64): version of the app that was running on the user's device. * `osBuild` (string): OS build of the user's device, e.g., "T1B2.220916.004".
     */
    userCohort?: string | null;
  }
  /**
   * Response message for QueryAnrRateMetricSet.
   */
  export interface Schema$GooglePlayDeveloperReportingV1beta1QueryAnrRateMetricSetResponse {
    /**
     * Continuation token to fetch the next page of data.
     */
    nextPageToken?: string | null;
    /**
     * Returned rows of data.
     */
    rows?: Schema$GooglePlayDeveloperReportingV1beta1MetricsRow[];
  }
  /**
   * Request message for QueryCrashRateMetricSet.
   */
  export interface Schema$GooglePlayDeveloperReportingV1beta1QueryCrashRateMetricSetRequest {
    /**
     * Dimensions to slice the metrics by. **Supported dimensions:** * `apiLevel` (string): the API level of Android that was running on the user's device. * `versionCode` (int64): version of the app that was running on the user's device. * `deviceModel` (string): unique identifier of the user's device model. * `deviceType` (string): the type (also known as form factor) of the user's device. * `countryCode` (string): the country or region of the user's device based on their IP address, represented as a 2-letter ISO-3166 code (e.g. US for the United States). * `deviceRamBucket` (int64): RAM of the device, in MB, in buckets (3GB, 4GB, etc.). * `deviceSocMake` (string): Make of the device's primary system-on-chip, e.g., Samsung. [Reference](https://developer.android.com/reference/android/os/Build#SOC_MANUFACTURER) * `deviceSocModel` (string): Model of the device's primary system-on-chip, e.g., "Exynos 2100". [Reference](https://developer.android.com/reference/android/os/Build#SOC_MODEL) * `deviceCpuMake` (string): Make of the device's CPU, e.g., Qualcomm. * `deviceCpuModel` (string): Model of the device's CPU, e.g., "Kryo 240". * `deviceGpuMake` (string): Make of the device's GPU, e.g., ARM. * `deviceGpuModel` (string): Model of the device's GPU, e.g., Mali. * `deviceGpuVersion` (string): Version of the device's GPU, e.g., T750. * `deviceVulkanVersion` (string): Vulkan version of the device, e.g., "4198400". * `deviceGlEsVersion` (string): OpenGL ES version of the device, e.g., "196610". * `deviceScreenSize` (string): Screen size of the device, e.g., NORMAL, LARGE. * `deviceScreenDpi` (string): Screen density of the device, e.g., mdpi, hdpi.
     */
    dimensions?: string[] | null;
    /**
     * Filters to apply to data. The filtering expression follows [AIP-160](https://google.aip.dev/160) standard and supports filtering by equality of all breakdown dimensions.
     */
    filter?: string | null;
    /**
     * Metrics to aggregate. **Supported metrics:** * `crashRate` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that experienced at least one crash. * `crashRate7dUserWeighted` (`google.type.Decimal`): Rolling average value of `crashRate` in the last 7 days. The daily values are weighted by the count of distinct users for the day. * `crashRate28dUserWeighted` (`google.type.Decimal`): Rolling average value of `crashRate` in the last 28 days. The daily values are weighted by the count of distinct users for the day. * `userPerceivedCrashRate` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that experienced at least one crash while they were actively using your app (a user-perceived crash). An app is considered to be in active use if it is displaying any activity or executing any foreground service. * `userPerceivedCrashRate7dUserWeighted` (`google.type.Decimal`): Rolling average value of `userPerceivedCrashRate` in the last 7 days. The daily values are weighted by the count of distinct users for the day. * `userPerceivedCrashRate28dUserWeighted` (`google.type.Decimal`): Rolling average value of `userPerceivedCrashRate` in the last 28 days. The daily values are weighted by the count of distinct users for the day. * `distinctUsers` (`google.type.Decimal`): Count of distinct users in the aggregation period that were used as normalization value for the `crashRate` and `userPerceivedCrashRate` metrics. A user is counted in this metric if they used the app actively during the aggregation period. An app is considered to be in active use if it is displaying any activity or executing any foreground service. Care must be taken not to aggregate this count further, as it may result in users being counted multiple times.
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
     * Specification of the timeline aggregation parameters. **Supported aggregation periods:** * DAILY: metrics are aggregated in calendar date intervals. Due to historical constraints, the default and only supported timezone is `America/Los_Angeles`.
     */
    timelineSpec?: Schema$GooglePlayDeveloperReportingV1beta1TimelineSpec;
    /**
     * User view to select. The output data will correspond to the selected view. **Supported values:** * `OS_PUBLIC` To select data from all publicly released Android versions. This is the default. Supports all the above dimensions. * `APP_TESTERS` To select data from users who have opted in to be testers. Supports all the above dimensions. * `OS_BETA` To select data from beta android versions only, excluding data from released android versions. Only the following dimensions are supported: * `versionCode` (int64): version of the app that was running on the user's device. * `osBuild` (string): OS build of the user's device, e.g., "T1B2.220916.004".
     */
    userCohort?: string | null;
  }
  /**
   * Response message for QueryCrashRateMetricSet.
   */
  export interface Schema$GooglePlayDeveloperReportingV1beta1QueryCrashRateMetricSetResponse {
    /**
     * Continuation token to fetch the next page of data.
     */
    nextPageToken?: string | null;
    /**
     * Returned rows of data.
     */
    rows?: Schema$GooglePlayDeveloperReportingV1beta1MetricsRow[];
  }
  /**
   * Request message for QueryExcessiveWakeupRateMetricSet.
   */
  export interface Schema$GooglePlayDeveloperReportingV1beta1QueryExcessiveWakeupRateMetricSetRequest {
    /**
     * Dimensions to slice the data by. **Supported dimensions:** * `apiLevel` (string): the API level of Android that was running on the user's device. * `versionCode` (int64): version of the app that was running on the user's device. * `deviceModel` (string): unique identifier of the user's device model. * `deviceType` (string): the type (also known as form factor) of the user's device. * `countryCode` (string): the country or region of the user's device based on their IP address, represented as a 2-letter ISO-3166 code (e.g. US for the United States). * `deviceRamBucket` (int64): RAM of the device, in MB, in buckets (3GB, 4GB, etc.). * `deviceSocMake` (string): Make of the device's primary system-on-chip, e.g., Samsung. [Reference](https://developer.android.com/reference/android/os/Build#SOC_MANUFACTURER) * `deviceSocModel` (string): Model of the device's primary system-on-chip, e.g., "Exynos 2100". [Reference](https://developer.android.com/reference/android/os/Build#SOC_MODEL) * `deviceCpuMake` (string): Make of the device's CPU, e.g., Qualcomm. * `deviceCpuModel` (string): Model of the device's CPU, e.g., "Kryo 240". * `deviceGpuMake` (string): Make of the device's GPU, e.g., ARM. * `deviceGpuModel` (string): Model of the device's GPU, e.g., Mali. * `deviceGpuVersion` (string): Version of the device's GPU, e.g., T750. * `deviceVulkanVersion` (string): Vulkan version of the device, e.g., "4198400". * `deviceGlEsVersion` (string): OpenGL ES version of the device, e.g., "196610". * `deviceScreenSize` (string): Screen size of the device, e.g., NORMAL, LARGE. * `deviceScreenDpi` (string): Screen density of the device, e.g., mdpi, hdpi.
     */
    dimensions?: string[] | null;
    /**
     * Filters to apply to data. The filtering expression follows [AIP-160](https://google.aip.dev/160) standard and supports filtering by equality of all breakdown dimensions.
     */
    filter?: string | null;
    /**
     * Metrics to aggregate. **Supported metrics:** * `excessiveWakeupRate` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that had more than 10 wakeups per hour. * `excessiveWakeupRate7dUserWeighted` (`google.type.Decimal`): Rolling average value of `excessiveWakeupRate` in the last 7 days. The daily values are weighted by the count of distinct users for the day. * `excessiveWakeupRate28dUserWeighted` (`google.type.Decimal`): Rolling average value of `excessiveWakeupRate` in the last 28 days. The daily values are weighted by the count of distinct users for the day. * `distinctUsers` (`google.type.Decimal`): Count of distinct users in the aggregation period that were used as normalization value for the `excessiveWakeupRate` metric. A user is counted in this metric if they app was doing any work on the device, i.e., not just active foreground usage but also background work. Care must be taken not to aggregate this count further, as it may result in users being counted multiple times.
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
    timelineSpec?: Schema$GooglePlayDeveloperReportingV1beta1TimelineSpec;
    /**
     * User view to select. The output data will correspond to the selected view. **Supported values:** * `OS_PUBLIC` To select data from all publicly released Android versions. This is the default. Supports all the above dimensions. * `APP_TESTERS` To select data from users who have opted in to be testers. Supports all the above dimensions. * `OS_BETA` To select data from beta android versions only, excluding data from released android versions. Only the following dimensions are supported: * `versionCode` (int64): version of the app that was running on the user's device. * `osBuild` (string): OS build of the user's device, e.g., "T1B2.220916.004".
     */
    userCohort?: string | null;
  }
  /**
   * Response message for QueryExcessiveWakeupRateMetricSet.
   */
  export interface Schema$GooglePlayDeveloperReportingV1beta1QueryExcessiveWakeupRateMetricSetResponse {
    /**
     * Continuation token to fetch the next page of data.
     */
    nextPageToken?: string | null;
    /**
     * Returned rows of data.
     */
    rows?: Schema$GooglePlayDeveloperReportingV1beta1MetricsRow[];
  }
  /**
   * Request message for QueryStuckBackgroundWakelockRateMetricSet.
   */
  export interface Schema$GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest {
    /**
     * Dimensions to slice the data by. **Supported dimensions:** * `apiLevel` (string): the API level of Android that was running on the user's device. * `versionCode` (int64): version of the app that was running on the user's device. * `deviceModel` (string): unique identifier of the user's device model. * `deviceType` (string): the type (also known as form factor) of the user's device. * `countryCode` (string): the country or region of the user's device based on their IP address, represented as a 2-letter ISO-3166 code (e.g. US for the United States). * `deviceRamBucket` (int64): RAM of the device, in MB, in buckets (3GB, 4GB, etc.). * `deviceSocMake` (string): Make of the device's primary system-on-chip, e.g., Samsung. [Reference](https://developer.android.com/reference/android/os/Build#SOC_MANUFACTURER) * `deviceSocModel` (string): Model of the device's primary system-on-chip, e.g., "Exynos 2100". [Reference](https://developer.android.com/reference/android/os/Build#SOC_MODEL) * `deviceCpuMake` (string): Make of the device's CPU, e.g., Qualcomm. * `deviceCpuModel` (string): Model of the device's CPU, e.g., "Kryo 240". * `deviceGpuMake` (string): Make of the device's GPU, e.g., ARM. * `deviceGpuModel` (string): Model of the device's GPU, e.g., Mali. * `deviceGpuVersion` (string): Version of the device's GPU, e.g., T750. * `deviceVulkanVersion` (string): Vulkan version of the device, e.g., "4198400". * `deviceGlEsVersion` (string): OpenGL ES version of the device, e.g., "196610". * `deviceScreenSize` (string): Screen size of the device, e.g., NORMAL, LARGE. * `deviceScreenDpi` (string): Screen density of the device, e.g., mdpi, hdpi.
     */
    dimensions?: string[] | null;
    /**
     * Filters to apply to data. The filtering expression follows [AIP-160](https://google.aip.dev/160) standard and supports filtering by equality of all breakdown dimensions.
     */
    filter?: string | null;
    /**
     * Metrics to aggregate. **Supported metrics:** * `stuckBgWakelockRate` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that had a wakelock held in the background for longer than 1 hour. * `stuckBgWakelockRate7dUserWeighted` (`google.type.Decimal`): Rolling average value of `stuckBgWakelockRate` in the last 7 days. The daily values are weighted by the count of distinct users for the day. * `stuckBgWakelockRate28dUserWeighted` (`google.type.Decimal`): Rolling average value of `stuckBgWakelockRate` in the last 28 days. The daily values are weighted by the count of distinct users for the day. * `distinctUsers` (`google.type.Decimal`): Count of distinct users in the aggregation period that were used as normalization value for the `stuckBgWakelockRate` metric. A user is counted in this metric if they app was doing any work on the device, i.e., not just active foreground usage but also background work. Care must be taken not to aggregate this count further, as it may result in users being counted multiple times.
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
    timelineSpec?: Schema$GooglePlayDeveloperReportingV1beta1TimelineSpec;
    /**
     * User view to select. The output data will correspond to the selected view. **Supported values:** * `OS_PUBLIC` To select data from all publicly released Android versions. This is the default. Supports all the above dimensions. * `APP_TESTERS` To select data from users who have opted in to be testers. Supports all the above dimensions. * `OS_BETA` To select data from beta android versions only, excluding data from released android versions. Only the following dimensions are supported: * `versionCode` (int64): version of the app that was running on the user's device. * `osBuild` (string): OS build of the user's device, e.g., "T1B2.220916.004".
     */
    userCohort?: string | null;
  }
  /**
   * Response message for QueryStuckBackgroundWakelockRateMetricSet.
   */
  export interface Schema$GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse {
    /**
     * Continuation token to fetch the next page of data.
     */
    nextPageToken?: string | null;
    /**
     * Returned rows of data.
     */
    rows?: Schema$GooglePlayDeveloperReportingV1beta1MetricsRow[];
  }
  /**
   * Singleton resource representing the set of Stuck Background Wakelocks metrics. This metric set contains PowerManager wakelock duration data combined with process state data to produce a normalized metric independent of user counts. **Supported aggregation periods:** * DAILY: metrics are aggregated in calendar date intervals. Due to historical constraints, the only supported timezone is `America/Los_Angeles`. **Supported metrics:** * `stuckBgWakelockRate` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that had a wakelock held in the background for longer than 1 hour. * `stuckBgWakelockRate7dUserWeighted` (`google.type.Decimal`): Rolling average value of `stuckBgWakelockRate` in the last 7 days. The daily values are weighted by the count of distinct users for the day. * `stuckBgWakelockRate28dUserWeighted` (`google.type.Decimal`): Rolling average value of `stuckBgWakelockRate` in the last 28 days. The daily values are weighted by the count of distinct users for the day. * `distinctUsers` (`google.type.Decimal`): Count of distinct users in the aggregation period that were used as normalization value for the `stuckBgWakelockRate` metric. A user is counted in this metric if their app was doing any work on the device, i.e., not just active foreground usage but also background work. Care must be taken not to aggregate this count further, as it may result in users being counted multiple times. **Supported dimensions:** * `apiLevel` (string): the API level of Android that was running on the user's device. * `versionCode` (int64): version of the app that was running on the user's device. * `deviceModel` (string): unique identifier of the user's device model. * `deviceType` (string): the type (also known as form factor) of the user's device. * `countryCode` (string): the country or region of the user's device based on their IP address, represented as a 2-letter ISO-3166 code (e.g. US for the United States). * `deviceRamBucket` (int64): RAM of the device, in MB, in buckets (3GB, 4GB, etc.). * `deviceSocMake` (string): Make of the device's primary system-on-chip, e.g., Samsung. [Reference](https://developer.android.com/reference/android/os/Build#SOC_MANUFACTURER) * `deviceSocModel` (string): Model of the device's primary system-on-chip, e.g., "Exynos 2100". [Reference](https://developer.android.com/reference/android/os/Build#SOC_MODEL) * `deviceCpuMake` (string): Make of the device's CPU, e.g., Qualcomm. * `deviceCpuModel` (string): Model of the device's CPU, e.g., "Kryo 240". * `deviceGpuMake` (string): Make of the device's GPU, e.g., ARM. * `deviceGpuModel` (string): Model of the device's GPU, e.g., Mali. * `deviceGpuVersion` (string): Version of the device's GPU, e.g., T750. * `deviceVulkanVersion` (string): Vulkan version of the device, e.g., "4198400". * `deviceGlEsVersion` (string): OpenGL ES version of the device, e.g., "196610". * `deviceScreenSize` (string): Screen size of the device, e.g., NORMAL, LARGE. * `deviceScreenDpi` (string): Screen density of the device, e.g., mdpi, hdpi. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app.
   */
  export interface Schema$GooglePlayDeveloperReportingV1beta1StuckBackgroundWakelockRateMetricSet {
    /**
     * Summary about data freshness in this resource.
     */
    freshnessInfo?: Schema$GooglePlayDeveloperReportingV1beta1FreshnessInfo;
    /**
     * The resource name. Format: apps/{app\}/stuckBackgroundWakelockRateMetricSet
     */
    name?: string | null;
  }
  /**
   * Specification of the time-related aggregation parameters of a timeline. Timelines have an aggregation period (`DAILY`, `HOURLY`, etc) which defines how events are aggregated in metrics. The points in a timeline are defined by the starting DateTime of the aggregation period. The duration is implicit in the AggregationPeriod. Hourly aggregation periods, when supported by a metric set, are always specified in UTC to avoid ambiguities around daylight saving time transitions, where an hour is skipped when adopting DST, and repeated when abandoning DST. For example, the timestamp '2021-11-07 01:00:00 America/Los_Angeles' is ambiguous since it can correspond to '2021-11-07 08:00:00 UTC' or '2021-11-07 09:00:00 UTC'. Daily aggregation periods require specifying a timezone which will determine the precise instants of the start and the end of the day. Not all metric sets support all timezones, so make sure to check which timezones are supported by the metric set you want to query.
   */
  export interface Schema$GooglePlayDeveloperReportingV1beta1TimelineSpec {
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
     * const playdeveloperreporting = google.playdeveloperreporting('v1beta1');
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
    ): GaxiosPromise<Schema$GooglePlayDeveloperReportingV1beta1ListAnomaliesResponse>;
    list(
      params: Params$Resource$Anomalies$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Anomalies$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1ListAnomaliesResponse>,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1ListAnomaliesResponse>
    ): void;
    list(
      params: Params$Resource$Anomalies$List,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1ListAnomaliesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1ListAnomaliesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Anomalies$List
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1ListAnomaliesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1ListAnomaliesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1ListAnomaliesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GooglePlayDeveloperReportingV1beta1ListAnomaliesResponse>
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
            url: (rootUrl + '/v1beta1/{+parent}/anomalies').replace(
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
        createAPIRequest<Schema$GooglePlayDeveloperReportingV1beta1ListAnomaliesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GooglePlayDeveloperReportingV1beta1ListAnomaliesResponse>(
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

  export class Resource$Vitals {
    context: APIRequestContext;
    anrrate: Resource$Vitals$Anrrate;
    crashrate: Resource$Vitals$Crashrate;
    excessivewakeuprate: Resource$Vitals$Excessivewakeuprate;
    stuckbackgroundwakelockrate: Resource$Vitals$Stuckbackgroundwakelockrate;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.anrrate = new Resource$Vitals$Anrrate(this.context);
      this.crashrate = new Resource$Vitals$Crashrate(this.context);
      this.excessivewakeuprate = new Resource$Vitals$Excessivewakeuprate(
        this.context
      );
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
     * const playdeveloperreporting = google.playdeveloperreporting('v1beta1');
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
    ): GaxiosPromise<Schema$GooglePlayDeveloperReportingV1beta1AnrRateMetricSet>;
    get(
      params: Params$Resource$Vitals$Anrrate$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Vitals$Anrrate$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1AnrRateMetricSet>,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1AnrRateMetricSet>
    ): void;
    get(
      params: Params$Resource$Vitals$Anrrate$Get,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1AnrRateMetricSet>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1AnrRateMetricSet>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Vitals$Anrrate$Get
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1AnrRateMetricSet>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1AnrRateMetricSet>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1AnrRateMetricSet>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GooglePlayDeveloperReportingV1beta1AnrRateMetricSet>
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
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GooglePlayDeveloperReportingV1beta1AnrRateMetricSet>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GooglePlayDeveloperReportingV1beta1AnrRateMetricSet>(
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
     * const playdeveloperreporting = google.playdeveloperreporting('v1beta1');
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
    ): GaxiosPromise<Schema$GooglePlayDeveloperReportingV1beta1QueryAnrRateMetricSetResponse>;
    query(
      params: Params$Resource$Vitals$Anrrate$Query,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    query(
      params: Params$Resource$Vitals$Anrrate$Query,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1QueryAnrRateMetricSetResponse>,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1QueryAnrRateMetricSetResponse>
    ): void;
    query(
      params: Params$Resource$Vitals$Anrrate$Query,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1QueryAnrRateMetricSetResponse>
    ): void;
    query(
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1QueryAnrRateMetricSetResponse>
    ): void;
    query(
      paramsOrCallback?:
        | Params$Resource$Vitals$Anrrate$Query
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1QueryAnrRateMetricSetResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1QueryAnrRateMetricSetResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1QueryAnrRateMetricSetResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GooglePlayDeveloperReportingV1beta1QueryAnrRateMetricSetResponse>
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
            url: (rootUrl + '/v1beta1/{+name}:query').replace(
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
        createAPIRequest<Schema$GooglePlayDeveloperReportingV1beta1QueryAnrRateMetricSetResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GooglePlayDeveloperReportingV1beta1QueryAnrRateMetricSetResponse>(
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
    requestBody?: Schema$GooglePlayDeveloperReportingV1beta1QueryAnrRateMetricSetRequest;
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
     * const playdeveloperreporting = google.playdeveloperreporting('v1beta1');
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
    ): GaxiosPromise<Schema$GooglePlayDeveloperReportingV1beta1CrashRateMetricSet>;
    get(
      params: Params$Resource$Vitals$Crashrate$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Vitals$Crashrate$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1CrashRateMetricSet>,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1CrashRateMetricSet>
    ): void;
    get(
      params: Params$Resource$Vitals$Crashrate$Get,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1CrashRateMetricSet>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1CrashRateMetricSet>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Vitals$Crashrate$Get
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1CrashRateMetricSet>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1CrashRateMetricSet>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1CrashRateMetricSet>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GooglePlayDeveloperReportingV1beta1CrashRateMetricSet>
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
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GooglePlayDeveloperReportingV1beta1CrashRateMetricSet>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GooglePlayDeveloperReportingV1beta1CrashRateMetricSet>(
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
     * const playdeveloperreporting = google.playdeveloperreporting('v1beta1');
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
    ): GaxiosPromise<Schema$GooglePlayDeveloperReportingV1beta1QueryCrashRateMetricSetResponse>;
    query(
      params: Params$Resource$Vitals$Crashrate$Query,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    query(
      params: Params$Resource$Vitals$Crashrate$Query,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1QueryCrashRateMetricSetResponse>,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1QueryCrashRateMetricSetResponse>
    ): void;
    query(
      params: Params$Resource$Vitals$Crashrate$Query,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1QueryCrashRateMetricSetResponse>
    ): void;
    query(
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1QueryCrashRateMetricSetResponse>
    ): void;
    query(
      paramsOrCallback?:
        | Params$Resource$Vitals$Crashrate$Query
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1QueryCrashRateMetricSetResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1QueryCrashRateMetricSetResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1QueryCrashRateMetricSetResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GooglePlayDeveloperReportingV1beta1QueryCrashRateMetricSetResponse>
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
            url: (rootUrl + '/v1beta1/{+name}:query').replace(
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
        createAPIRequest<Schema$GooglePlayDeveloperReportingV1beta1QueryCrashRateMetricSetResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GooglePlayDeveloperReportingV1beta1QueryCrashRateMetricSetResponse>(
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
    requestBody?: Schema$GooglePlayDeveloperReportingV1beta1QueryCrashRateMetricSetRequest;
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
     * const playdeveloperreporting = google.playdeveloperreporting('v1beta1');
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
    ): GaxiosPromise<Schema$GooglePlayDeveloperReportingV1beta1ExcessiveWakeupRateMetricSet>;
    get(
      params: Params$Resource$Vitals$Excessivewakeuprate$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Vitals$Excessivewakeuprate$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1ExcessiveWakeupRateMetricSet>,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1ExcessiveWakeupRateMetricSet>
    ): void;
    get(
      params: Params$Resource$Vitals$Excessivewakeuprate$Get,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1ExcessiveWakeupRateMetricSet>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1ExcessiveWakeupRateMetricSet>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Vitals$Excessivewakeuprate$Get
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1ExcessiveWakeupRateMetricSet>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1ExcessiveWakeupRateMetricSet>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1ExcessiveWakeupRateMetricSet>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GooglePlayDeveloperReportingV1beta1ExcessiveWakeupRateMetricSet>
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
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GooglePlayDeveloperReportingV1beta1ExcessiveWakeupRateMetricSet>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GooglePlayDeveloperReportingV1beta1ExcessiveWakeupRateMetricSet>(
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
     * const playdeveloperreporting = google.playdeveloperreporting('v1beta1');
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
    ): GaxiosPromise<Schema$GooglePlayDeveloperReportingV1beta1QueryExcessiveWakeupRateMetricSetResponse>;
    query(
      params: Params$Resource$Vitals$Excessivewakeuprate$Query,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    query(
      params: Params$Resource$Vitals$Excessivewakeuprate$Query,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1QueryExcessiveWakeupRateMetricSetResponse>,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1QueryExcessiveWakeupRateMetricSetResponse>
    ): void;
    query(
      params: Params$Resource$Vitals$Excessivewakeuprate$Query,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1QueryExcessiveWakeupRateMetricSetResponse>
    ): void;
    query(
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1QueryExcessiveWakeupRateMetricSetResponse>
    ): void;
    query(
      paramsOrCallback?:
        | Params$Resource$Vitals$Excessivewakeuprate$Query
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1QueryExcessiveWakeupRateMetricSetResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1QueryExcessiveWakeupRateMetricSetResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1QueryExcessiveWakeupRateMetricSetResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GooglePlayDeveloperReportingV1beta1QueryExcessiveWakeupRateMetricSetResponse>
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
            url: (rootUrl + '/v1beta1/{+name}:query').replace(
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
        createAPIRequest<Schema$GooglePlayDeveloperReportingV1beta1QueryExcessiveWakeupRateMetricSetResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GooglePlayDeveloperReportingV1beta1QueryExcessiveWakeupRateMetricSetResponse>(
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
    requestBody?: Schema$GooglePlayDeveloperReportingV1beta1QueryExcessiveWakeupRateMetricSetRequest;
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
     * const playdeveloperreporting = google.playdeveloperreporting('v1beta1');
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
    ): GaxiosPromise<Schema$GooglePlayDeveloperReportingV1beta1StuckBackgroundWakelockRateMetricSet>;
    get(
      params: Params$Resource$Vitals$Stuckbackgroundwakelockrate$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Vitals$Stuckbackgroundwakelockrate$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1StuckBackgroundWakelockRateMetricSet>,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1StuckBackgroundWakelockRateMetricSet>
    ): void;
    get(
      params: Params$Resource$Vitals$Stuckbackgroundwakelockrate$Get,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1StuckBackgroundWakelockRateMetricSet>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1StuckBackgroundWakelockRateMetricSet>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Vitals$Stuckbackgroundwakelockrate$Get
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1StuckBackgroundWakelockRateMetricSet>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1StuckBackgroundWakelockRateMetricSet>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1StuckBackgroundWakelockRateMetricSet>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GooglePlayDeveloperReportingV1beta1StuckBackgroundWakelockRateMetricSet>
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
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GooglePlayDeveloperReportingV1beta1StuckBackgroundWakelockRateMetricSet>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GooglePlayDeveloperReportingV1beta1StuckBackgroundWakelockRateMetricSet>(
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
     * const playdeveloperreporting = google.playdeveloperreporting('v1beta1');
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
    ): GaxiosPromise<Schema$GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse>;
    query(
      params: Params$Resource$Vitals$Stuckbackgroundwakelockrate$Query,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    query(
      params: Params$Resource$Vitals$Stuckbackgroundwakelockrate$Query,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse>,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse>
    ): void;
    query(
      params: Params$Resource$Vitals$Stuckbackgroundwakelockrate$Query,
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse>
    ): void;
    query(
      callback: BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse>
    ): void;
    query(
      paramsOrCallback?:
        | Params$Resource$Vitals$Stuckbackgroundwakelockrate$Query
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse>
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
            url: (rootUrl + '/v1beta1/{+name}:query').replace(
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
        createAPIRequest<Schema$GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse>(
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
    requestBody?: Schema$GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest;
  }
}
