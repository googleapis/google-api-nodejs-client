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

export namespace health_v4 {
  export interface Options extends GlobalOptions {
    version: 'v4';
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
   * Google Health API
   *
   * The Google Health API lets you view and manage health and fitness metrics and measurement data.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const health = google.health('v4');
   * ```
   */
  export class Health {
    context: APIRequestContext;
    projects: Resource$Projects;
    users: Resource$Users;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.projects = new Resource$Projects(this.context);
      this.users = new Resource$Users(this.context);
    }
  }

  /**
   * Energy burned as part of an activity, excluding the basal energy burn.
   */
  export interface Schema$ActiveEnergyBurned {
    /**
     * Required. Observed interval
     */
    interval?: Schema$ObservationTimeInterval;
    /**
     * Required. Energy burned during an activity, measured in kilocalories.
     */
    kcal?: number | null;
  }
  /**
   * Represents the result of the rollup of active energy burned.
   */
  export interface Schema$ActiveEnergyBurnedRollupValue {
    /**
     * Output only. Sum of the active energy burned in kilocalories.
     */
    kcalSum?: number | null;
  }
  /**
   * Record of active minutes in a given time interval.
   */
  export interface Schema$ActiveMinutes {
    /**
     * Required. Active minutes by activity level. At most one record per activity level is allowed.
     */
    activeMinutesByActivityLevel?: Schema$ActiveMinutesByActivityLevel[];
    /**
     * Required. Observed interval.
     */
    interval?: Schema$ObservationTimeInterval;
  }
  /**
   * Active minutes at a given activity level.
   */
  export interface Schema$ActiveMinutesByActivityLevel {
    /**
     * Required. Number of whole minutes spent in activity.
     */
    activeMinutes?: string | null;
    /**
     * Required. The level of activity.
     */
    activityLevel?: string | null;
  }
  /**
   * Active minutes by activity level.
   */
  export interface Schema$ActiveMinutesRollupByActivityLevel {
    /**
     * Number of whole minutes spent in activity.
     */
    activeMinutesSum?: string | null;
    /**
     * The level of activity.
     */
    activityLevel?: string | null;
  }
  /**
   * Represents the result of the rollup of the active minutes data type.
   */
  export interface Schema$ActiveMinutesRollupValue {
    /**
     * Active minutes by activity level. At most one record per activity level is allowed.
     */
    activeMinutesRollupByActivityLevel?: Schema$ActiveMinutesRollupByActivityLevel[];
  }
  /**
   * Record of active zone minutes in a given time interval.
   */
  export interface Schema$ActiveZoneMinutes {
    /**
     * Required. Number of Active Zone Minutes earned in the given time interval. Note: active_zone_minutes equals to 1 for low intensity (fat burn) zones or 2 for high intensity zones (cardio, peak).
     */
    activeZoneMinutes?: string | null;
    /**
     * Required. Heart rate zone in which the active zone minutes have been earned, in the given time interval.
     */
    heartRateZone?: string | null;
    /**
     * Required. Observed interval.
     */
    interval?: Schema$ObservationTimeInterval;
  }
  /**
   * Represents the result of the rollup of the active zone minutes data type.
   */
  export interface Schema$ActiveZoneMinutesRollupValue {
    /**
     * Active zone minutes in `HeartRateZone.CARDIO`.
     */
    sumInCardioHeartZone?: string | null;
    /**
     * Active zone minutes in `HeartRateZone.FAT_BURN`.
     */
    sumInFatBurnHeartZone?: string | null;
    /**
     * Active zone minutes in `HeartRateZone.PEAK`.
     */
    sumInPeakHeartZone?: string | null;
  }
  /**
   * Internal type to capture activity level during a certain time interval.
   */
  export interface Schema$ActivityLevel {
    /**
     * Required. Activity level type in the given time interval.
     */
    activityLevelType?: string | null;
    /**
     * Required. Observed interval.
     */
    interval?: Schema$ObservationTimeInterval;
  }
  /**
   * Represents the total duration in a specific activity level type.
   */
  export interface Schema$ActivityLevelRollupByActivityLevelType {
    /**
     * Activity level type.
     */
    activityLevelType?: string | null;
    /**
     * Total duration in the activity level type.
     */
    totalDuration?: string | null;
  }
  /**
   * Represents the result of the rollup of the activity level data type.
   */
  export interface Schema$ActivityLevelRollupValue {
    /**
     * List of total durations in each activity level type.
     */
    activityLevelRollupsByActivityLevelType?: Schema$ActivityLevelRollupByActivityLevelType[];
  }
  /**
   * An analysis window evaluated for AFib. Note: The current version of the algorithm will only produce alerts if all windows are positive. So anything returned from the API will always have the positive bit set to true. Internally, windows can be negative, however. We never save "inconclusive" windows (they aren't produced by the algorithm).
   */
  export interface Schema$AlertWindow {
    /**
     * Output only. Observed interval end time in civil time in the timezone the subject is in at the end of the observed interval
     */
    civilEndTime?: Schema$CivilDateTime;
    /**
     * Output only. Observed interval start time in civil time in the timezone the subject is in at the start of the observed interval
     */
    civilStartTime?: Schema$CivilDateTime;
    /**
     * Required. The end time of the analysis window.
     */
    endTime?: string | null;
    /**
     * Required. The UTC offset of the user's timezone when the analysis window ended.
     */
    endUtcOffset?: string | null;
    /**
     * Optional. All heart beats in the interval contained in this analysis window.
     */
    heartBeats?: Schema$HeartBeat[];
    /**
     * Optional. Flag indicating whether the window was positive for AFib or not. A `true` value indicates that AFib was detected in this window. A `false` value means AFib was not detected, but does not guarantee the absence of AFib.
     */
    positive?: boolean | null;
    /**
     * Required. Observed interval. The start time of the analysis window.
     */
    startTime?: string | null;
    /**
     * Required. The UTC offset of the user's timezone when the analysis window started.
     */
    startUtcOffset?: string | null;
  }
  /**
   * Captures the altitude gain (i.e. deltas), and not level above sea, for a user in millimeters.
   */
  export interface Schema$Altitude {
    /**
     * Required. Altitude gain in millimeters over the observed interval.
     */
    gainMillimeters?: string | null;
    /**
     * Required. Observed interval.
     */
    interval?: Schema$ObservationTimeInterval;
  }
  /**
   * Represents the result of the rollup of the user's altitude.
   */
  export interface Schema$AltitudeRollupValue {
    /**
     * Sum of the altitude gain in millimeters.
     */
    gainMillimetersSum?: string | null;
  }
  /**
   * Optional metadata for the application that provided this data.
   */
  export interface Schema$Application {
    /**
     * Output only. The Google OAuth 2.0 client ID of the web application or service that recorded the data. This is the client ID used during the Google OAuth flow to obtain user credentials. This field is system-populated when the data is uploaded from Google Web API.
     */
    googleWebClientId?: string | null;
    /**
     * Output only. A unique identifier for the mobile application that was the source of the data. This is typically the application's package name on Android (e.g., `com.google.fitbit`) or the bundle ID on iOS. This field is informational and helps trace data origin. This field is system-populated when the data is uploaded from the Fitbit mobile application, Health Connect or Health Kit.
     */
    packageName?: string | null;
    /**
     * Output only. The client ID of the application that recorded the data. This ID is a legacy Fitbit API client ID, which is different from a Google OAuth client ID. Example format: `ABC123`. This field is system-populated and used for tracing data from legacy Fitbit API integrations. This field is system-populated when the data is uploaded from a legacy Fitbit API integration.
     */
    webClientId?: string | null;
  }
  /**
   * Number of calories burned due to basal metabolic rate (BMR) over a period of time.
   */
  export interface Schema$BasalEnergyBurned {
    /**
     * Required. Observed interval.
     */
    interval?: Schema$ObservationTimeInterval;
    /**
     * Required. Number of calories burned due to basal metabolic rate in kilocalories over the observed interval.
     */
    kcal?: number | null;
  }
  /**
   * Request to delete a batch of identifiable data points.
   */
  export interface Schema$BatchDeleteDataPointsRequest {
    /**
     * Required. The names of the DataPoints to delete. A maximum of 10000 data points can be deleted in a single request.
     */
    names?: string[] | null;
  }
  /**
   * Represents a blood glucose level measurement. LINT: LEGACY_NAMES
   */
  export interface Schema$BloodGlucose {
    /**
     * Required. Blood glucose level concentration in mg/dL.
     */
    bloodGlucoseMilligramsPerDeciliter?: number | null;
    /**
     * Optional. Meal type of the measurement.
     */
    mealType?: string | null;
    /**
     * Optional. Source of the measurement.
     */
    measurementSource?: string | null;
    /**
     * Optional. Timing of the measurement.
     */
    measurementTiming?: string | null;
    /**
     * Optional. Standard free-form notes captured at manual logging.
     */
    notes?: string | null;
    /**
     * Required. The time at which blood glucose was measured.
     */
    sampleTime?: Schema$ObservationSampleTime;
    /**
     * Optional. Type of body fluid used to measure the blood glucose.
     */
    specimen?: string | null;
  }
  /**
   * Represents the result of the rollup of the blood glucose data type. LINT: LEGACY_NAMES
   */
  export interface Schema$BloodGlucoseRollupValue {
    /**
     * Average blood glucose level in mg/dL.
     */
    bloodGlucoseMilligramsPerDeciliterAvg?: number | null;
  }
  /**
   * Body fat measurement.
   */
  export interface Schema$BodyFat {
    /**
     * Required. Body fat percentage, in range [0, 100].
     */
    percentage?: number | null;
    /**
     * Required. The time at which body fat was measured.
     */
    sampleTime?: Schema$ObservationSampleTime;
  }
  /**
   * Represents the result of the rollup of the body fat data type.
   */
  export interface Schema$BodyFatRollupValue {
    /**
     * Average body fat percentage.
     */
    bodyFatPercentageAvg?: number | null;
  }
  /**
   * Represents the result of the rollup of the calories in heart rate zone data type.
   */
  export interface Schema$CaloriesInHeartRateZoneRollupValue {
    /**
     * List of calories burned in each heart rate zone.
     */
    caloriesInHeartRateZones?: Schema$CaloriesInHeartRateZoneValue[];
  }
  /**
   * Represents the amount of kilocalories burned in a specific heart rate zone.
   */
  export interface Schema$CaloriesInHeartRateZoneValue {
    /**
     * The heart rate zone.
     */
    heartRateZone?: string | null;
    /**
     * The amount of kilocalories burned in the specified heart rate zone.
     */
    kcal?: number | null;
  }
  /**
   * Civil time representation similar to google.type.DateTime, but ensures that neither the timezone nor the UTC offset can be set to avoid confusion between civil and physical time queries.
   */
  export interface Schema$CivilDateTime {
    /**
     * Required. Calendar date.
     */
    date?: Schema$Date;
    /**
     * Optional. Time of day. Defaults to the start of the day, at midnight if omitted.
     */
    time?: Schema$TimeOfDay;
  }
  /**
   * Counterpart of google.type.Interval, but using CivilDateTime.
   */
  export interface Schema$CivilTimeInterval {
    /**
     * Required. The exclusive end of the range.
     */
    end?: Schema$CivilDateTime;
    /**
     * Required. The inclusive start of the range.
     */
    start?: Schema$CivilDateTime;
  }
  /**
   * Core body temperature measurement, distinct from peripheral body temperature, reflects the temperature of the body's internal organs.
   */
  export interface Schema$CoreBodyTemperature {
    /**
     * Optional. The unique identifier of the core body temperature measurement.
     */
    id?: string | null;
    /**
     * Optional. The location of the core body temperature measurement.
     */
    measurementLocation?: string | null;
    /**
     * Required. The time at which core body temperature was measured.
     */
    sampleTime?: Schema$ObservationSampleTime;
    /**
     * Required. The core body temperature in Celsius.
     */
    temperatureCelsius?: number | null;
  }
  /**
   * Represents the result of the rollup of the core body temperature data type.
   */
  export interface Schema$CoreBodyTemperatureRollupValue {
    /**
     * Average core body temperature in Celsius.
     */
    temperatureCelsiusAvg?: number | null;
    /**
     * Maximum core body temperature in Celsius.
     */
    temperatureCelsiusMax?: number | null;
    /**
     * Minimum core body temperature in Celsius.
     */
    temperatureCelsiusMin?: number | null;
  }
  /**
   * Payload for creating a subscriber.
   */
  export interface Schema$CreateSubscriberPayload {
    /**
     * Required. Authorization mechanism for the subscriber endpoint. The `secret` within this message is crucial for endpoint verification and for securing webhook notifications.
     */
    endpointAuthorization?: Schema$EndpointAuthorization;
    /**
     * Required. The full HTTPS URI where update notifications will be sent. The URI must be a valid URL and use HTTPS as the scheme. This endpoint will be verified during the `CreateSubscriber` call. See CreateSubscriber RPC documentation for verification details.
     */
    endpointUri?: string | null;
    /**
     * Optional. Configuration for the subscriber.
     */
    subscriberConfigs?: Schema$SubscriberConfig[];
  }
  /**
   * Payload for creating a subscription.
   */
  export interface Schema$CreateSubscriptionPayload {
    /**
     * Optional. Data types subscribed to.
     */
    dataTypes?: string[] | null;
    /**
     * Required. Immutable. The resource name of the user for whom this subscription is active. Format: `users/{user\}` where `{user\}` is the public `healthUserId` as returned by the `GetIdentity` action in the profile PAPI (see `google.devicesandservices.health.v4main.HealthProfileService.GetIdentity`).
     */
    user?: string | null;
  }
  /**
   * Represents the daily heart rate variability data type. At least one of the following fields must be set: - `average_heart_rate_variability_milliseconds` - `non_rem_heart_rate_beats_per_minute` - `entropy` - `deep_sleep_root_mean_square_of_successive_differences_milliseconds`
   */
  export interface Schema$DailyHeartRateVariability {
    /**
     * Optional. A user's average heart rate variability calculated using the root mean square of successive differences (RMSSD) in times between heartbeats.
     */
    averageHeartRateVariabilityMilliseconds?: number | null;
    /**
     * Required. Date (in the user's timezone) of heart rate variability measurement.
     */
    date?: Schema$Date;
    /**
     * Optional. The root mean square of successive differences (RMSSD) value during deep sleep.
     */
    deepSleepRootMeanSquareOfSuccessiveDifferencesMilliseconds?: number | null;
    /**
     * Optional. The Shanon entropy of heartbeat intervals. Entropy quantifies randomness or disorder in a system. High entropy indicates high HRV. Entropy is measured from the histogram of time interval between successive heart beats values measured during sleep.
     */
    entropy?: number | null;
    /**
     * Optional. Non-REM heart rate
     */
    nonRemHeartRateBeatsPerMinute?: string | null;
  }
  /**
   * User's heart rate zone thresholds based on the Karvonen algorithm for a specific day.
   */
  export interface Schema$DailyHeartRateZones {
    /**
     * Required. Date (in user's timezone) of the heart rate zones record.
     */
    date?: Schema$Date;
    /**
     * Required. The heart rate zones.
     */
    heartRateZones?: Schema$HeartRateZone[];
  }
  /**
   * A daily oxygen saturation (SpO2) record. Represents the user's daily oxygen saturation summary, typically calculated during sleep.
   */
  export interface Schema$DailyOxygenSaturation {
    /**
     * Required. The average value of the oxygen saturation samples during the sleep.
     */
    averagePercentage?: number | null;
    /**
     * Required. Date (in user's timezone) of the daily oxygen saturation record.
     */
    date?: Schema$Date;
    /**
     * Required. The lower bound of the confidence interval of oxygen saturation samples during sleep.
     */
    lowerBoundPercentage?: number | null;
    /**
     * Optional. Standard deviation of the daily oxygen saturation averages from the past 7-30 days.
     */
    standardDeviationPercentage?: number | null;
    /**
     * Required. The upper bound of the confidence interval of oxygen saturation samples during sleep.
     */
    upperBoundPercentage?: number | null;
  }
  /**
   * A daily average respiratory rate (breaths per minute) for a day of the year. One data point per day calculated for the main sleep.
   */
  export interface Schema$DailyRespiratoryRate {
    /**
     * Required. The average number of breaths taken per minute.
     */
    breathsPerMinute?: number | null;
    /**
     * Required. The date on which the respiratory rate was measured.
     */
    date?: Schema$Date;
  }
  /**
   * Measures the daily resting heart rate for a user, calculated using the all day heart rate measurements.
   */
  export interface Schema$DailyRestingHeartRate {
    /**
     * Required. The resting heart rate value in beats per minute.
     */
    beatsPerMinute?: string | null;
    /**
     * Optional. Metadata for the daily resting heart rate.
     */
    dailyRestingHeartRateMetadata?: Schema$DailyRestingHeartRateMetadata;
    /**
     * Required. Date (in the user's timezone) of the resting heart rate measurement.
     */
    date?: Schema$Date;
  }
  /**
   * Metadata for the daily resting heart rate.
   */
  export interface Schema$DailyRestingHeartRateMetadata {
    /**
     * Required. The method used to calculate the resting heart rate.
     */
    calculationMethod?: string | null;
  }
  /**
   * Value of a daily rollup for a single civil time interval (aggregation window) of reconciled data points from all data sources, excluding those data points that are identified as recorded by wearables in intervals when they were not actually worn.
   */
  export interface Schema$DailyRollupDataPoint {
    /**
     * Returned by default when rolling up data points from the `active-energy-burned` data type.
     */
    activeEnergyBurned?: Schema$ActiveEnergyBurnedRollupValue;
    /**
     * Returned by default when rolling up data points from the `active-minutes` data type, or when requested explicitly using the `active-minutes` rollup type identifier.
     */
    activeMinutes?: Schema$ActiveMinutesRollupValue;
    /**
     * Returned by default when rolling up data points from the `active-zone-minutes` data type, or when requested explicitly using the `active-zone-minutes` rollup type identifier.
     */
    activeZoneMinutes?: Schema$ActiveZoneMinutesRollupValue;
    /**
     * Returned by default when rolling up data points from the `activity-level` data type, or when requested explicitly using the `activity-level` rollup type identifier.
     */
    activityLevel?: Schema$ActivityLevelRollupValue;
    /**
     * Returned by default when rolling up data points from the `altitude` data type, or when requested explicitly using the `altitude` rollup type identifier.
     */
    altitude?: Schema$AltitudeRollupValue;
    /**
     * Returned by default when rolling up data points from the `blood-glucose` data type.
     */
    bloodGlucose?: Schema$BloodGlucoseRollupValue;
    /**
     * Returned by default when rolling up data points from the `body-fat` data type, or when requested explicitly using the `body-fat` rollup type identifier.
     */
    bodyFat?: Schema$BodyFatRollupValue;
    /**
     * Returned by default when rolling up data points from the `calories-in-heart-rate-zone` data type, or when requested explicitly using the `calories-in-heart-rate-zone` rollup type identifier.
     */
    caloriesInHeartRateZone?: Schema$CaloriesInHeartRateZoneRollupValue;
    /**
     * End time of the window this value aggregates over
     */
    civilEndTime?: Schema$CivilDateTime;
    /**
     * Start time of the window this value aggregates over
     */
    civilStartTime?: Schema$CivilDateTime;
    /**
     * Returned by default when rolling up data points from the `core-body-temperature` data type, or when requested explicitly using the `core-body-temperature` rollup type identifier.
     */
    coreBodyTemperature?: Schema$CoreBodyTemperatureRollupValue;
    /**
     * Returned by default when rolling up data points from the `distance` data type, or when requested explicitly using the `distance` rollup type identifier.
     */
    distance?: Schema$DistanceRollupValue;
    /**
     * Returned by default when rolling up data points from the `floors` data type, or when requested explicitly using the `floors` rollup type identifier.
     */
    floors?: Schema$FloorsRollupValue;
    /**
     * Returned by default when rolling up data points from the `heart-rate` data type, or when requested explicitly using the `heart-rate` rollup type identifier.
     */
    heartRate?: Schema$HeartRateRollupValue;
    /**
     * Returned by default when rolling up data points from the `daily-heart-rate-variability` data type, or when requested explicitly using the `heart-rate-variability-personal-range` rollup type identifier.
     */
    heartRateVariabilityPersonalRange?: Schema$HeartRateVariabilityPersonalRangeRollupValue;
    /**
     * Returned by default when rolling up data points from the `hydration-log` data type, or when requested explicitly using the `hydration-log` rollup type identifier.
     */
    hydrationLog?: Schema$HydrationLogRollupValue;
    /**
     * Returned by default when rolling up data points from the `nutrition-log` data type, or when requested explicitly using the `nutrition-log` rollup type identifier.
     */
    nutritionLog?: Schema$NutritionLogRollupValue;
    /**
     * Returned by default when rolling up data points from the `daily-resting-heart-rate` data type, or when requested explicitly using the `resting-heart-rate-personal-range` rollup type identifier.
     */
    restingHeartRatePersonalRange?: Schema$RestingHeartRatePersonalRangeRollupValue;
    /**
     * Returned by default when rolling up data points from the `run-vo2-max` data type, or when requested explicitly using the `run-vo2-max` rollup type identifier.
     */
    runVo2Max?: Schema$RunVO2MaxRollupValue;
    /**
     * Returned by default when rolling up data points from the `sedentary-period` data type, or when requested explicitly using the `sedentary-period` rollup type identifier.
     */
    sedentaryPeriod?: Schema$SedentaryPeriodRollupValue;
    /**
     * Returned by default when rolling up data points from the `steps` data type, or when requested explicitly using the `steps` rollup type identifier.
     */
    steps?: Schema$StepsRollupValue;
    /**
     * Returned by default when rolling up data points from the `swim-lengths-data` data type, or when requested explicitly using the `swim-lengths-data` rollup type identifier.
     */
    swimLengthsData?: Schema$SwimLengthsDataRollupValue;
    /**
     * Returned by default when rolling up data points from the `time-in-heart-rate-zone` data type, or when requested explicitly using the `time-in-heart-rate-zone` rollup type identifier.
     */
    timeInHeartRateZone?: Schema$TimeInHeartRateZoneRollupValue;
    /**
     * Returned by default when rolling up data points from the `total-calories` data type, or when requested explicitly using the `total-calories` rollup type identifier.
     */
    totalCalories?: Schema$TotalCaloriesRollupValue;
    /**
     * Returned by default when rolling up data points from the `weight` data type, or when requested explicitly using the `weight` rollup type identifier.
     */
    weight?: Schema$WeightRollupValue;
  }
  /**
   * Request to roll up data points by civil time intervals.
   */
  export interface Schema$DailyRollUpDataPointsRequest {
    /**
     * Optional. The data source family name to roll up. If empty, data points from all available data sources will be rolled up. Format: `users/me/dataSourceFamilies/{data_source_family\}` The supported values are: - `users/me/dataSourceFamilies/all-sources` - default value - `users/me/dataSourceFamilies/google-wearables` - tracker devices - `users/me/dataSourceFamilies/google-sources` - Google first party sources
     */
    dataSourceFamily?: string | null;
    /**
     * Optional. The maximum number of data points to return. If unspecified, at most 1440 data points will be returned. The maximum page size is 10000; values above that will be truncated accordingly.
     */
    pageSize?: number | null;
    /**
     * Optional. The `next_page_token` from a previous request, if any. All other request fields need to be the same as in the initial request when the page token is specified.
     */
    pageToken?: string | null;
    /**
     * Required. Closed-open range of data points that will be rolled up. The start time must be aligned with the aggregation window. The maximum range for `calories-in-heart-rate-zone`, `heart-rate`, `active-minutes` and `total-calories` is 14 days. The maximum range for all other data types is 90 days.
     */
    range?: Schema$CivilTimeInterval;
    /**
     * Optional. Aggregation window size, in number of days. Defaults to 1 if not specified.
     */
    windowSizeDays?: number | null;
  }
  /**
   * Response containing the list of rolled up data points.
   */
  export interface Schema$DailyRollUpDataPointsResponse {
    /**
     * Values for each aggregation time window.
     */
    rollupDataPoints?: Schema$DailyRollupDataPoint[];
  }
  /**
   * Provides derived sleep temperature values, calculated from skin or internal device temperature readings during sleep.
   */
  export interface Schema$DailySleepTemperatureDerivations {
    /**
     * Optional. The user's baseline skin temperature. It is the median of the user's nightly skin temperature over the past 30 days.
     */
    baselineTemperatureCelsius?: number | null;
    /**
     * Required. Date for which the sleep temperature derivations are calculated.
     */
    date?: Schema$Date;
    /**
     * Required. The user's nightly skin temperature. It is the mean of skin temperature samples taken from the user’s sleep.
     */
    nightlyTemperatureCelsius?: number | null;
    /**
     * Optional. The standard deviation of the user’s relative nightly skin temperature (temperature - baseline) over the past 30 days.
     */
    relativeNightlyStddev30dCelsius?: number | null;
  }
  /**
   * Contains a daily summary of the user's VO2 max (cardio fitness score), which is the maximum rate of oxygen the body can use during exercise.
   */
  export interface Schema$DailyVO2Max {
    /**
     * Optional. Represents the user's cardio fitness level based on their VO2 max.
     */
    cardioFitnessLevel?: string | null;
    /**
     * Required. The date for which the Daily VO2 max was measured.
     */
    date?: Schema$Date;
    /**
     * Optional. An estimated field is added to indicate when the confidence has decreased sufficiently to consider the value an estimation.
     */
    estimated?: boolean | null;
    /**
     * Required. Daily VO2 max value measured as in ml consumed oxygen / kg of body weight / min.
     */
    vo2Max?: number | null;
    /**
     * Optional. The covariance of the VO2 max value.
     */
    vo2MaxCovariance?: number | null;
  }
  /**
   * A computed or recorded metric.
   */
  export interface Schema$DataPoint {
    /**
     * Optional. Data for points in the `active-energy-burned` interval data type collection.
     */
    activeEnergyBurned?: Schema$ActiveEnergyBurned;
    /**
     * Optional. Data for points in the `active-minutes` interval data type collection.
     */
    activeMinutes?: Schema$ActiveMinutes;
    /**
     * Optional. Data for points in the `active-zone-minutes` interval data type collection, measured in minutes.
     */
    activeZoneMinutes?: Schema$ActiveZoneMinutes;
    /**
     * Optional. Data for points in the `activity-level` daily data type collection.
     */
    activityLevel?: Schema$ActivityLevel;
    /**
     * Optional. Data for points in the `altitude` interval data type collection.
     */
    altitude?: Schema$Altitude;
    /**
     * Optional. Data for points in the `basal-energy-burned` interval data type collection.
     */
    basalEnergyBurned?: Schema$BasalEnergyBurned;
    /**
     * Optional. Data for points in the `blood-glucose` sample data type collection.
     */
    bloodGlucose?: Schema$BloodGlucose;
    /**
     * Optional. Data for points in the `body-fat` sample data type collection.
     */
    bodyFat?: Schema$BodyFat;
    /**
     * Optional. Data for points in the `core-body-temperature` sample data type collection.
     */
    coreBodyTemperature?: Schema$CoreBodyTemperature;
    /**
     * Optional. Data for points in the `daily-heart-rate-variability` daily data type collection.
     */
    dailyHeartRateVariability?: Schema$DailyHeartRateVariability;
    /**
     * Optional. Data for points in the `daily-heart-rate-zones` daily data type collection.
     */
    dailyHeartRateZones?: Schema$DailyHeartRateZones;
    /**
     * Optional. Data for points in the `daily-oxygen-saturation` daily data type collection.
     */
    dailyOxygenSaturation?: Schema$DailyOxygenSaturation;
    /**
     * Optional. Data for points in the `daily-respiratory-rate` daily data type collection.
     */
    dailyRespiratoryRate?: Schema$DailyRespiratoryRate;
    /**
     * Optional. Data for points in the `daily-resting-heart-rate` daily data type collection.
     */
    dailyRestingHeartRate?: Schema$DailyRestingHeartRate;
    /**
     * Optional. Data for points in the `daily-sleep-temperature-derivations` daily data type collection.
     */
    dailySleepTemperatureDerivations?: Schema$DailySleepTemperatureDerivations;
    /**
     * Optional. Data for points in the `daily-vo2-max` daily data type collection.
     */
    dailyVo2Max?: Schema$DailyVO2Max;
    /**
     * Optional. Data source information for the metric
     */
    dataSource?: Schema$DataSource;
    /**
     * Optional. Data for points in the `distance` interval data type collection.
     */
    distance?: Schema$Distance;
    /**
     * Optional. Data for points in the `electrocardiogram` session data type collection.
     */
    electrocardiogram?: Schema$Electrocardiogram;
    /**
     * Optional. Data for points in the `exercise` session data type collection.
     */
    exercise?: Schema$Exercise;
    /**
     * Optional. Data for points in the `floors` interval data type collection.
     */
    floors?: Schema$Floors;
    /**
     * Optional. The food details.
     */
    food?: Schema$Food;
    /**
     * Optional. The food measurement unit details.
     */
    foodMeasurementUnit?: Schema$FoodMeasurementUnit;
    /**
     * Optional. Data for points in the `heart-rate` sample data type collection.
     */
    heartRate?: Schema$HeartRate;
    /**
     * Optional. Data for points in the `heart-rate-variability` sample data type collection.
     */
    heartRateVariability?: Schema$HeartRateVariability;
    /**
     * Optional. Data for points in the `height` sample data type collection.
     */
    height?: Schema$Height;
    /**
     * Optional. Data for points in the `hydration-log` session data type collection.
     */
    hydrationLog?: Schema$HydrationLog;
    /**
     * Optional. Data for points in the `irregular-rhythm-notification` session data type collection.
     */
    irregularRhythmNotification?: Schema$IrregularRhythmNotification;
    /**
     * Identifier. Data point name, only supported for the subset of identifiable data types. For the majority of the data types, individual data points do not need to be identified and this field would be empty. Format: `users/{user\}/dataTypes/{data_type\}/dataPoints/{data_point\}` Example: `users/abcd1234/dataTypes/sleep/dataPoints/a1b2c3d4-e5f6-7890-1234-567890abcdef` The `{user\}` ID is a system-generated identifier, as described in Identity.health_user_id. The `{data_type\}` ID corresponds to the kebab-case version of the field names in the DataPoint data union field, e.g. `total-calories` for the `total_calories` field. The `{data_point\}` ID can be client-provided or system-generated. If client-provided, it must be a string of 4-63 characters, containing only lowercase letters, numbers, and hyphens.
     */
    name?: string | null;
    /**
     * Optional. Data for points in the `nutrition-log` session data type collection.
     */
    nutritionLog?: Schema$NutritionLog;
    /**
     * Optional. Data for points in the `oxygen-saturation` sample data type collection.
     */
    oxygenSaturation?: Schema$OxygenSaturation;
    /**
     * Optional. Data for points in the `respiratory-rate-sleep-summary` sample data type collection.
     */
    respiratoryRateSleepSummary?: Schema$RespiratoryRateSleepSummary;
    /**
     * Optional. Data for points in the `run-vo2-max` sample data type collection.
     */
    runVo2Max?: Schema$RunVO2Max;
    /**
     * Optional. Data for points in the `sedentary-period` interval data type collection.
     */
    sedentaryPeriod?: Schema$SedentaryPeriod;
    /**
     * Optional. Data for points in the `sleep` session data type collection.
     */
    sleep?: Schema$Sleep;
    /**
     * Optional. Data for points in the `steps` interval data type collection.
     */
    steps?: Schema$Steps;
    /**
     * Optional. Data for points in the `swim-lengths-data` interval data type collection.
     */
    swimLengthsData?: Schema$SwimLengthsData;
    /**
     * Optional. Data for points in the `time-in-heart-rate-zone` interval data type collection.
     */
    timeInHeartRateZone?: Schema$TimeInHeartRateZone;
    /**
     * Optional. Data for points in the `vo2-max` sample data type collection.
     */
    vo2Max?: Schema$VO2Max;
    /**
     * Optional. Data for points in the `weight` sample data type collection.
     */
    weight?: Schema$Weight;
  }
  /**
   * Data Source definition to track the origin of data. Each health data point, regardless of the complexity or data model (whether a simple step count or a detailed sleep session) must retain information about its source of origin (e.g. the device or app that collected it).
   */
  export interface Schema$DataSource {
    /**
     * Output only. Captures metadata for the application that provided this data.
     */
    application?: Schema$Application;
    /**
     * Optional. Captures metadata for raw data points originating from devices. We expect this data source to be used for data points written on device sync.
     */
    device?: Schema$Device;
    /**
     * Output only. Captures the platform that uploaded the data.
     */
    platform?: string | null;
    /**
     * Optional. Captures how the data was recorded.
     */
    recordingMethod?: string | null;
  }
  /**
   * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
   */
  export interface Schema$Date {
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
  /**
   * Represents civil time (or occasionally physical time). This type can represent a civil time in one of a few possible ways: * When utc_offset is set and time_zone is unset: a civil time on a calendar day with a particular offset from UTC. * When time_zone is set and utc_offset is unset: a civil time on a calendar day in a particular time zone. * When neither time_zone nor utc_offset is set: a civil time on a calendar day in local time. The date is relative to the Proleptic Gregorian Calendar. If year, month, or day are 0, the DateTime is considered not to have a specific year, month, or day respectively. This type may also be used to represent a physical time if all the date and time fields are set and either case of the `time_offset` oneof is set. Consider using `Timestamp` message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field. This type is more flexible than some applications may want. Make sure to document and validate your application's limitations.
   */
  export interface Schema$DateTime {
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
    timeZone?: Schema$TimeZone;
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
   * Captures metadata about the device that recorded the measurement.
   */
  export interface Schema$Device {
    /**
     * Optional. An optional name for the device.
     */
    displayName?: string | null;
    /**
     * Optional. Captures the form factor of the device.
     */
    formFactor?: string | null;
    /**
     * Optional. An optional manufacturer of the device.
     */
    manufacturer?: string | null;
  }
  /**
   * Distance traveled over an interval of time.
   */
  export interface Schema$Distance {
    /**
     * Required. Observed interval.
     */
    interval?: Schema$ObservationTimeInterval;
    /**
     * Required. Distance in millimeters over the observed interval.
     */
    millimeters?: string | null;
  }
  /**
   * Result of the rollup of the user's distance.
   */
  export interface Schema$DistanceRollupValue {
    /**
     * Sum of the distance in millimeters.
     */
    millimetersSum?: string | null;
  }
  /**
   * Represents an Electrocardiogram (ECG) measurement session. This data type is based on SaMD feature and any changes to it may require additional review.
   */
  export interface Schema$Electrocardiogram {
    /**
     * Optional. Average heart rate recorded during ECG reading in beats per minute.
     */
    beatsPerMinuteAvg?: string | null;
    /**
     * Required. Observed interval. NOTE: Historical ECG data lacks timezone offsets, so `start_utc_offset` and `end_utc_offset` will be missing or default to zero. As a result, the civil time fields within this interval will default to UTC. It is recommended to use physical time fields instead for accurate time referencing. NOTE: The `start_time` and `end_time` of the interval are equal, representing the reading time.
     */
    interval?: Schema$SessionTimeInterval;
    /**
     * Optional. The number of leads used for ECG reading.
     */
    leadNumber?: number | null;
    /**
     * Output only. The meta information for the compatible device used to conduct the measurement. ECG measurements typically populate `firmware_version`, `feature_version`, and `device_model`.
     */
    medicalDeviceInfo?: Schema$MedicalDeviceInfo;
    /**
     * Optional. The factor by which to divide waveform samples to get voltage in millivolts: millivolts = waveform_sample / millivolts_scaling_factor.
     */
    millivoltsScalingFactor?: number | null;
    /**
     * Optional. The result classification of the ECG reading.
     */
    resultClassification?: string | null;
    /**
     * Optional. The sampling frequency of waveform samples in hertz.
     */
    samplingFrequencyHertz?: number | null;
    /**
     * Optional. An array of voltage values representing lead I ECG values. Each sample represents voltage difference in ECG graph. The first value in array corresponds to the start of the reading.
     */
    waveformSamples?: number[] | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Authorization mechanism for a subscriber endpoint. For all requests sent by the Webhooks service, the JSON payload is cryptographically signed. The signature is delivered in the `X-HEALTHAPI-SIGNATURE` HTTP header. This is an ECDSA (NIST P256) signature of the JSON payload. Clients must verify this signature using Google Health API's public key to confirm the payload was sent by the Health API.
   */
  export interface Schema$EndpointAuthorization {
    /**
     * Required. Input only. Provides a client-provided secret that will be sent with each notification to the subscriber endpoint using the "Authorization" header. The value must include the authorization scheme, e.g., "Bearer " or "Basic ", as it will be used as the full Authorization header value. This secret is used by the API to test the endpoint during `CreateSubscriber` and `UpdateSubscriber` calls, and will be sent in the `Authorization` header for all subsequent webhook notifications to this endpoint.
     */
    secret?: string | null;
    /**
     * Output only. Whether the secret is set.
     */
    secretSet?: boolean | null;
  }
  /**
   * Represents the energy quantity.
   */
  export interface Schema$EnergyQuantity {
    /**
     * Required. Value representing the energy in kilocalories.
     */
    kcal?: number | null;
    /**
     * Optional. Value representing the user provided unit.
     */
    userProvidedUnit?: string | null;
  }
  /**
   * Rollup for the energy quantity.
   */
  export interface Schema$EnergyQuantityRollup {
    /**
     * Required. The sum of the energy in kilocalories.
     */
    kcalSum?: number | null;
    /**
     * Optional. The user provided unit on the last element.
     */
    userProvidedUnitLast?: string | null;
  }
  /**
   * An exercise that stores information about a physical activity.
   */
  export interface Schema$Exercise {
    /**
     * Optional. Duration excluding pauses.
     */
    activeDuration?: string | null;
    /**
     * Output only. Represents the timestamp of the creation of the exercise.
     */
    createTime?: string | null;
    /**
     * Required. Exercise display name.
     */
    displayName?: string | null;
    /**
     * Optional. Exercise events that happen during an exercise, such as pause & restarts.
     */
    exerciseEvents?: Schema$ExerciseEvent[];
    /**
     * Optional. Additional exercise metadata.
     */
    exerciseMetadata?: Schema$ExerciseMetadata;
    /**
     * Required. The type of activity performed during an exercise.
     */
    exerciseType?: string | null;
    /**
     * Required. Observed exercise interval
     */
    interval?: Schema$SessionTimeInterval;
    /**
     * Required. Summary metrics for this exercise ( )
     */
    metricsSummary?: Schema$MetricsSummary;
    /**
     * Optional. Standard free-form notes captured at manual logging.
     */
    notes?: string | null;
    /**
     * Optional. The default split is 1 km or 1 mile. - if the movement distance is less than the default, then there are no splits - if the movement distance is greater than or equal to the default, then we have splits
     */
    splits?: Schema$SplitSummary[];
    /**
     * Optional. Laps or splits recorded within an exercise. Laps could be split based on distance or other criteria (duration, etc.) Laps should not be overlapping with each other.
     */
    splitSummaries?: Schema$SplitSummary[];
    /**
     * Output only. This is the timestamp of the last update to the exercise.
     */
    updateTime?: string | null;
  }
  /**
   * Represents instantaneous events that happen during an exercise, such as start, stop, pause, split.
   */
  export interface Schema$ExerciseEvent {
    /**
     * Required. Exercise event time
     */
    eventTime?: string | null;
    /**
     * Required. Exercise event time offset from UTC
     */
    eventUtcOffset?: string | null;
    /**
     * Required. The type of the event, such as start, stop, pause, resume.
     */
    exerciseEventType?: string | null;
  }
  /**
   * Additional exercise metadata.
   */
  export interface Schema$ExerciseMetadata {
    /**
     * Optional. Whether the exercise had GPS tracking.
     */
    hasGps?: boolean | null;
    /**
     * Optional. Pool length in millimeters. Only present in the swimming exercises.
     */
    poolLengthMillimeters?: string | null;
  }
  /**
   * Represents a Response for exporting exercise data in TCX format.
   */
  export interface Schema$ExportExerciseTcxResponse {
    /**
     * Contains the exported TCX data. This field is intended for gRPC clients, as media download integration is not supported for gRPC. HTTP clients should instead use the `alt=media` query parameter to download the raw binary TCX file.
     */
    tcxData?: string | null;
  }
  /**
   * Gained elevation measured in floors over the time interval
   */
  export interface Schema$Floors {
    /**
     * Required. Number of floors in the recorded interval
     */
    count?: string | null;
    /**
     * Required. Observed interval
     */
    interval?: Schema$ObservationTimeInterval;
  }
  /**
   * Represents the result of the rollup of the user's floors.
   */
  export interface Schema$FloorsRollupValue {
    /**
     * Sum of the floors count.
     */
    countSum?: string | null;
  }
  /**
   * Represents a food item.
   */
  export interface Schema$Food {
    /**
     * Required. The access level of the food.
     */
    accessLevel?: string | null;
    /**
     * Optional. The brand of the food.
     */
    brand?: string | null;
    /**
     * Required. Value representing the default serving of the food.
     */
    defaultServing?: Schema$FoodServing;
    /**
     * Optional. The description of the food.
     */
    description?: string | null;
    /**
     * Required. The display name of the food.
     */
    displayName?: string | null;
    /**
     * Optional. Value representing the average energy of the food for the default serving.
     */
    energyAvg?: Schema$EnergyQuantity;
    /**
     * Optional. Value representing the energy from fat of the food for the default serving.
     */
    energyFromFat?: Schema$EnergyQuantity;
    /**
     * Optional. Value representing the maximum energy of the food for the default serving.
     */
    energyMax?: Schema$EnergyQuantity;
    /**
     * Optional. Value representing the minimum energy of the food for the default serving.
     */
    energyMin?: Schema$EnergyQuantity;
    /**
     * Optional. The language code where the food is available in format xx-XX. Supported values are defined in Settings.food_language_code.
     */
    languageCode?: string | null;
    /**
     * Optional. The meal type associated with this food.
     */
    mealType?: string | null;
    /**
     * Optional. Value representing the nutrients of the food for the default serving.
     */
    nutrients?: Schema$NutrientQuantity[];
    /**
     * Optional. The serving of the food.
     */
    servings?: Schema$FoodServing[];
    /**
     * Optional. Value representing the total carbohydrate of the food for the default serving.
     */
    totalCarbohydrate?: Schema$WeightQuantity;
    /**
     * Optional. Value representing the total fat of the food for the default serving.
     */
    totalFat?: Schema$WeightQuantity;
  }
  /**
   * Represents a food measurement unit.
   */
  export interface Schema$FoodMeasurementUnit {
    /**
     * Required. The display name of the food measurement unit (e.g., "gram", "piece").
     */
    displayName?: string | null;
    /**
     * Optional. The plural display name of the food measurement unit (e.g., "grams", "pieces").
     */
    pluralDisplayName?: string | null;
  }
  /**
   * Represents different properties and information about the serving of a specific food.
   */
  export interface Schema$FoodServing {
    /**
     * Optional. Amount of food consumed, fractional values are supported.
     */
    amount?: number | null;
    /**
     * Required. Food measurement unit
     */
    foodMeasurementUnit?: string | null;
    /**
     * Output only. Legacy measurement unit for serving size in singular form (e.g. "piece", "gram").
     */
    foodMeasurementUnitDisplayName?: string | null;
    /**
     * Output only. Legacy measurement unit for serving size in plural form (e.g. "pieces", "grams").
     */
    foodMeasurementUnitDisplayNamePlural?: string | null;
    /**
     * Optional. Value representing the multiplier used to compute the energy when using this serving instead of the default serving.
     */
    multiplier?: number | null;
  }
  /**
   * Represents a type of health data a user can have data points recorded for. It matches the parent resource of collection containing data points of the given type. Clients currently do not need to interact with this resource directly.
   */
  export interface Schema$GoogleDevicesandservicesHealthV4DataType {
    /**
     * Identifier. The resource name of the data type. Format: `users/{user\}/dataTypes/{data_type\}` See DataPoint.name for examples and possible values.
     */
    name?: string | null;
  }
  /**
   * Log message for a webhook notification sent by the Google Health API to a subscriber's endpoint. Includes the HTTP response received from the endpoint.
   */
  export interface Schema$GoogleDevicesandservicesHealthV4WebhookNotificationCloudLog {
    /**
     * Required. Represents the HTTP response. This message includes the status code, reason phrase, headers, and body.
     */
    httpResponse?: Schema$HttpResponse;
  }
  /**
   * A single heart beat measurement.
   */
  export interface Schema$HeartBeat {
    /**
     * Required. The beats-per-minute value extrapolated from the time before the following heart beat. This is calculated as 60000 / rr, where rr is the gap between heart beats in milliseconds (IBI - Interbeat Interval).
     */
    beatsPerMinute?: number | null;
    /**
     * Output only. The civil time in the timezone the subject is in at the time of the observation.
     */
    civilTime?: Schema$CivilDateTime;
    /**
     * Required. The time of the heart beat measurement.
     */
    physicalTime?: string | null;
    /**
     * Required. The UTC offset of the user's timezone when the heart beat measurement occurred.
     */
    utcOffset?: string | null;
  }
  /**
   * A heart rate measurement.
   */
  export interface Schema$HeartRate {
    /**
     * Required. The heart rate value in beats per minute.
     */
    beatsPerMinute?: string | null;
    /**
     * Optional. Metadata about the heart rate sample.
     */
    metadata?: Schema$HeartRateMetadata;
    /**
     * Required. Observation time
     */
    sampleTime?: Schema$ObservationSampleTime;
  }
  /**
   * Heart rate metadata.
   */
  export interface Schema$HeartRateMetadata {
    /**
     * Optional. Indicates the user’s level of activity when the heart rate sample was measured
     */
    motionContext?: string | null;
    /**
     * Optional. Indicates the location of the sensor that measured the heart rate.
     */
    sensorLocation?: string | null;
  }
  /**
   * Represents the result of the rollup of the heart rate data type.
   */
  export interface Schema$HeartRateRollupValue {
    /**
     * The average heart rate value in the interval.
     */
    beatsPerMinuteAvg?: number | null;
    /**
     * The maximum heart rate value in the interval.
     */
    beatsPerMinuteMax?: number | null;
    /**
     * The minimum heart rate value in the interval.
     */
    beatsPerMinuteMin?: number | null;
  }
  /**
   * Captures user's heart rate variability (HRV) as measured by the root mean square of successive differences (RMSSD) between normal heartbeats or by standard deviation of the inter-beat intervals (SDNN).
   */
  export interface Schema$HeartRateVariability {
    /**
     * Optional. The root mean square of successive differences between normal heartbeats. This is a measure of heart rate variability used by Google Health.
     */
    rootMeanSquareOfSuccessiveDifferencesMilliseconds?: number | null;
    /**
     * Required. The time of the heart rate variability measurement.
     */
    sampleTime?: Schema$ObservationSampleTime;
    /**
     * Optional. The standard deviation of the heart rate variability measurement.
     */
    standardDeviationMilliseconds?: number | null;
  }
  /**
   * Represents the result of the rollup of the user's daily heart rate variability personal range.
   */
  export interface Schema$HeartRateVariabilityPersonalRangeRollupValue {
    /**
     * The upper bound of the user's average heart rate variability personal range.
     */
    averageHeartRateVariabilityMillisecondsMax?: number | null;
    /**
     * The lower bound of the user's average heart rate variability personal range.
     */
    averageHeartRateVariabilityMillisecondsMin?: number | null;
  }
  /**
   * The heart rate zone.
   */
  export interface Schema$HeartRateZone {
    /**
     * Required. The heart rate zone type.
     */
    heartRateZoneType?: string | null;
    /**
     * Required. Maximum heart rate for this zone in beats per minute.
     */
    maxBeatsPerMinute?: string | null;
    /**
     * Required. Minimum heart rate for this zone in beats per minute.
     */
    minBeatsPerMinute?: string | null;
  }
  /**
   * Body height measurement.
   */
  export interface Schema$Height {
    /**
     * Required. Height of the user in millimeters.
     */
    heightMillimeters?: string | null;
    /**
     * Required. The time at which the height was recorded.
     */
    sampleTime?: Schema$ObservationSampleTime;
  }
  /**
   * Represents an HTTP header.
   */
  export interface Schema$HttpHeader {
    /**
     * The HTTP header key. It is case insensitive.
     */
    key?: string | null;
    /**
     * The HTTP header value.
     */
    value?: string | null;
  }
  /**
   * Represents an HTTP response.
   */
  export interface Schema$HttpResponse {
    /**
     * The HTTP response body. If the body is not expected, it should be empty.
     */
    body?: string | null;
    /**
     * The HTTP response headers. The ordering of the headers is significant. Multiple headers with the same key may present for the response.
     */
    headers?: Schema$HttpHeader[];
    /**
     * The HTTP reason phrase, such as "OK" or "Not Found".
     */
    reason?: string | null;
    /**
     * The HTTP status code, such as 200 or 404.
     */
    status?: number | null;
  }
  /**
   * Holds information about a user logged hydration.
   */
  export interface Schema$HydrationLog {
    /**
     * Required. Amount of liquid (ex. water) consumed.
     */
    amountConsumed?: Schema$VolumeQuantity;
    /**
     * Required. Observed interval.
     */
    interval?: Schema$SessionTimeInterval;
  }
  /**
   * Represents the result of the rollup of the hydration log data type.
   */
  export interface Schema$HydrationLogRollupValue {
    /**
     * Rollup for amount consumed.
     */
    amountConsumed?: Schema$VolumeQuantityRollup;
  }
  /**
   * Represents details about the Google user's identity.
   */
  export interface Schema$Identity {
    /**
     * Output only. The Google User Identifier in the Google Health APIs. It matches the `{user\}` resource ID segment in the resource name paths, e.g. `users/{user\}/dataTypes/steps`. Valid values are strings of 1-63 characters, and valid characters are lowercase and uppercase letters, numbers, and hyphens.
     */
    healthUserId?: string | null;
    /**
     * Output only. The legacy Fitbit User identifier. This is the Fitbit ID used in the legacy Fitbit APIs (v1-v3). It can be referenced by clients migrating from the legacy Fitbit APIs to map their existing identifiers to the new Google user ID. It **must not** be used for any other purpose. It is not of any use for new clients using only the Google Health APIs. Valid values are strings of 1-63 characters, and valid characters are lowercase and uppercase letters, numbers, and hyphens.
     */
    legacyUserId?: string | null;
    /**
     * Identifier. The resource name of this Identity resource. Format: `users/me/identity`
     */
    name?: string | null;
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
   * Irregular Rhythm Notifications (IRN) Profile details. The Irregular Rhythm Notifications (IRN) feature checks for signs of atrial fibrillation (AFib). The IrnProfile details include information about the user's onboarding status, enrollment status, and the last update time of analyzable data for this feature.
   */
  export interface Schema$IrnProfile {
    /**
     * Required. Whether or not the user is currently enrolled in having their data processed for IRN alerts.
     */
    enrollmentStatus?: boolean | null;
    /**
     * Identifier. The resource name of this IrnProfile resource. Format: `users/{user\}/irnProfile` Example: `users/1234567890/irnProfile` or `users/me/irnProfile` The {user\} ID is a system-generated Google Health API user ID, a string of 1-63 characters consisting of lowercase and uppercase letters, numbers, and hyphens. The literal `me` can also be used to refer to the authenticated user.
     */
    name?: string | null;
    /**
     * Required. Whether or not the user has onboarded onto the IRN feature.
     */
    onboardingStatus?: boolean | null;
    /**
     * Output only. The timestamp of the last piece of analyzable data synced by the user.
     */
    updateTime?: string | null;
  }
  /**
   * Represents an Irregular Rhythm Notification alert, indicating a potential sign of atrial fibrillation (AFib). This data type is based on SaMD feature and any changes to it may require additional review.
   */
  export interface Schema$IrregularRhythmNotification {
    /**
     * Optional. The overlapping analysis windows that were used to evaluate rhythm for potential AFib, containing specific information about the user's heart rhythm.
     */
    alertWindows?: Schema$AlertWindow[];
    /**
     * Required. Observed interval.
     */
    interval?: Schema$SessionTimeInterval;
    /**
     * Output only. The meta information for the compatible device used to conduct the measurement. Irregular Rhythm Notification measurements typically populate `algorithm_version`, `service_version`, and `device_model`.
     */
    medicalDeviceInfo?: Schema$MedicalDeviceInfo;
  }
  /**
   * Response containing raw data points matching the query
   */
  export interface Schema$ListDataPointsResponse {
    /**
     * Data points matching the query
     */
    dataPoints?: Schema$DataPoint[];
    /**
     * Next page token, empty if the response is complete
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for ListPairedDevices.
   */
  export interface Schema$ListPairedDevicesResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The paired devices of the user.
     */
    pairedDevices?: Schema$PairedDevice[];
  }
  /**
   * Response message for ListSubscribers.
   */
  export interface Schema$ListSubscribersResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Subscribers from the specified project.
     */
    subscribers?: Schema$Subscriber[];
    /**
     * The total number of subscribers matching the request.
     */
    totalSize?: number | null;
  }
  /**
   * Response message for ListSubscriptions.
   */
  export interface Schema$ListSubscriptionsResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The subscriptions from the specified subscriber.
     */
    subscriptions?: Schema$Subscription[];
  }
  /**
   * Software as Medical Device (SaMD) metadata. Used to construct the Unique Device Identifier (UDI).
   */
  export interface Schema$MedicalDeviceInfo {
    /**
     * Output only. The algorithm version used by the feature.
     */
    algorithmVersion?: string | null;
    /**
     * Output only. The model name or device type of the compatible device used to collect the data.
     */
    deviceModel?: string | null;
    /**
     * Output only. The version of the feature/app running on the device.
     */
    featureVersion?: string | null;
    /**
     * Output only. The firmware version running on the compatible device used to collect the data.
     */
    firmwareVersion?: string | null;
    /**
     * Output only. The service version used by the feature.
     */
    serviceVersion?: string | null;
  }
  /**
   * Summary metrics for an exercise.
   */
  export interface Schema$MetricsSummary {
    /**
     * Optional. Total active zone minutes for the exercise.
     */
    activeZoneMinutes?: string | null;
    /**
     * Optional. Average heart rate during the exercise.
     */
    averageHeartRateBeatsPerMinute?: string | null;
    /**
     * Optional. Average pace in seconds per meter.
     */
    averagePaceSecondsPerMeter?: number | null;
    /**
     * Optional. Average speed in millimeters per second.
     */
    averageSpeedMillimetersPerSecond?: number | null;
    /**
     * Optional. Total calories burned by the user during the exercise.
     */
    caloriesKcal?: number | null;
    /**
     * Optional. Total distance covered by the user during the exercise.
     */
    distanceMillimeters?: number | null;
    /**
     * Optional. Total elevation gain during the exercise.
     */
    elevationGainMillimeters?: number | null;
    /**
     * Optional. Time spent in each heart rate zone.
     */
    heartRateZoneDurations?: Schema$TimeInHeartRateZones;
    /**
     * Optional. Mobility workouts specific metrics. Only present in the advanced running exercises.
     */
    mobilityMetrics?: Schema$MobilityMetrics;
    /**
     * Optional. Run VO2 max value for the exercise. Only present in the running exercises at the top level as in the summary of the whole exercise.
     */
    runVo2Max?: number | null;
    /**
     * Optional. Total steps taken during the exercise.
     */
    steps?: string | null;
    /**
     * Optional. Number of full pool lengths completed during the exercise. Only present in the swimming exercises at the top level as in the summary of the whole exercise.
     */
    totalSwimLengths?: number | null;
  }
  /**
   * Mobility workouts specific metrics
   */
  export interface Schema$MobilityMetrics {
    /**
     * Optional. Cadence is a measure of the frequency of your foot strikes. Steps / min in real time during workout.
     */
    avgCadenceStepsPerMinute?: number | null;
    /**
     * Optional. The ground contact time for a particular stride is the amount of time for which the foot was in contact with the ground on that stride
     */
    avgGroundContactTimeDuration?: string | null;
    /**
     * Optional. Stride length is a measure of the distance covered by a single stride
     */
    avgStrideLengthMillimeters?: string | null;
    /**
     * Optional. Distance off the ground your center of mass moves with each stride while running
     */
    avgVerticalOscillationMillimeters?: string | null;
    /**
     * Optional. Vertical oscillation/stride length between [5.0, 11.0].
     */
    avgVerticalRatio?: number | null;
  }
  /**
   * Represents the quantity of a nutrient.
   */
  export interface Schema$NutrientQuantity {
    /**
     * Required. Value representing the nutrient.
     */
    nutrient?: string | null;
    /**
     * Required. Value representing the quantity of the nutrient.
     */
    quantity?: Schema$WeightQuantity;
  }
  /**
   * Nutrient quantity rollup.
   */
  export interface Schema$NutrientQuantityRollup {
    /**
     * Required. Aggregated nutrient.
     */
    nutrient?: string | null;
    /**
     * Required. Aggregated nutrient weight.
     */
    quantity?: Schema$WeightQuantityRollup;
  }
  /**
   * Holds information about a user logged food. There are two ways of creating a nutrition log based on the food type: 1. Identified food: Using the food field, which is a reference to a Food resource. In this case fields `nutrients`, `energy`, `energy_from_fat`, `total_carbohydrate`, `total_fat`, `food_display_name` will be populated based on the referenced food. 2. Anonymous food: Using the `food_display_name` field and setting the `nutrients`, `energy`, `energy_from_fat`, `total_carbohydrate`, `total_fat` fields manually. The identified food is preferred over the anonymous food. Nutrition logs created from anonymous food are not be editable.
   */
  export interface Schema$NutritionLog {
    /**
     * Optional. Value representing the energy of the nutrition log. For nutrition logs created from an identified food, this field will be populated based on the referenced food. For anonymous food, this field will be populated manually.
     */
    energy?: Schema$EnergyQuantity;
    /**
     * Optional. Value representing the energy from fat of the nutrition log. For nutrition logs created from an identified food, this field will be populated based on the referenced food. For anonymous food, this field will be populated manually.
     */
    energyFromFat?: Schema$EnergyQuantity;
    /**
     * Required. Represents the food ID.
     */
    food?: string | null;
    /**
     * Value representing the display name of the food. For nutrition logs created from an identified food, this field will be populated based on the referenced food. For anonymous food, this field will be populated manually.
     */
    foodDisplayName?: string | null;
    /**
     * Required. Observed interval.
     */
    interval?: Schema$SessionTimeInterval;
    /**
     * Optional. Value representing the meal type of the nutrition log.
     */
    mealType?: string | null;
    /**
     * Optional. Value representing the nutrients of the nutrition log.
     */
    nutrients?: Schema$NutrientQuantity[];
    /**
     * Optional. Value representing the nutrition log serving.
     */
    serving?: Schema$Serving;
    /**
     * Optional. Value representing the total carbohydrate of the nutrition log. For nutrition logs created from an identified food, this field will be populated based on the referenced food. For anonymous food, this field will be populated manually.
     */
    totalCarbohydrate?: Schema$WeightQuantity;
    /**
     * Optional. Value representing the total fat of the nutrition log. For nutrition logs created from an identified food, this field will be populated based on the referenced food. For anonymous food, this field will be populated manually.
     */
    totalFat?: Schema$WeightQuantity;
  }
  /**
   * Represents the result of the rollup of the nutrition log data type.
   */
  export interface Schema$NutritionLogRollupValue {
    /**
     * Energy rollup.
     */
    energy?: Schema$EnergyQuantityRollup;
    /**
     * Value Energy from fat rollup.
     */
    energyFromFat?: Schema$EnergyQuantityRollup;
    /**
     * List of the nutrient roll-ups by the nutrient type.
     */
    nutrients?: Schema$NutrientQuantityRollup[];
    /**
     * Total carbohydrate rollup.
     */
    totalCarbohydrate?: Schema$WeightQuantityRollup;
    /**
     * Total fat rollup.
     */
    totalFat?: Schema$WeightQuantityRollup;
  }
  /**
   * Represents a sample time of an observed data point.
   */
  export interface Schema$ObservationSampleTime {
    /**
     * Output only. The civil time in the timezone the subject is in at the time of the observation.
     */
    civilTime?: Schema$CivilDateTime;
    /**
     * Required. The time of the observation.
     */
    physicalTime?: string | null;
    /**
     * Required. The offset of the user's local time during the observation relative to the Coordinated Universal Time (UTC).
     */
    utcOffset?: string | null;
  }
  /**
   * Represents a time interval of an observed data point.
   */
  export interface Schema$ObservationTimeInterval {
    /**
     * Output only. Observed interval end time in civil time in the timezone the subject is in at the end of the observed interval
     */
    civilEndTime?: Schema$CivilDateTime;
    /**
     * Output only. Observed interval start time in civil time in the timezone the subject is in at the start of the observed interval
     */
    civilStartTime?: Schema$CivilDateTime;
    /**
     * Required. Observed interval end time.
     */
    endTime?: string | null;
    /**
     * Required. The offset of the user's local time at the end of the observation relative to the Coordinated Universal Time (UTC).
     */
    endUtcOffset?: string | null;
    /**
     * Required. Observed interval start time.
     */
    startTime?: string | null;
    /**
     * Required. The offset of the user's local time at the start of the observation relative to the Coordinated Universal Time (UTC).
     */
    startUtcOffset?: string | null;
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
   * A time interval to represent an out-of-bed segment.
   */
  export interface Schema$OutOfBedSegment {
    /**
     * Required. Segment end time.
     */
    endTime?: string | null;
    /**
     * Required. The offset of the user's local time at the end of the segment relative to the Coordinated Universal Time (UTC).
     */
    endUtcOffset?: string | null;
    /**
     * Required. Segment tart time.
     */
    startTime?: string | null;
    /**
     * Required. The offset of the user's local time at the start of the segment relative to the Coordinated Universal Time (UTC).
     */
    startUtcOffset?: string | null;
  }
  /**
   * Captures the user's instantaneous oxygen saturation percentage (SpO2).
   */
  export interface Schema$OxygenSaturation {
    /**
     * Required. The oxygen saturation percentage. Valid values are from 0 to 100.
     */
    percentage?: number | null;
    /**
     * Required. The time at which oxygen saturation was measured.
     */
    sampleTime?: Schema$ObservationSampleTime;
  }
  /**
   * User's Paired 1P Device The PairedDevice details include information about the device type, battery status, battery level, last sync time, device version, mac address, and features.
   */
  export interface Schema$PairedDevice {
    /**
     * Output only. The battery level of the device.
     */
    batteryLevel?: number | null;
    /**
     * Output only. The battery status of the device. Supported: High | Medium | Low | Empty
     */
    batteryStatus?: string | null;
    /**
     * Output only. The device type. Supported: TRACKER | SCALE
     */
    deviceType?: string | null;
    /**
     * Output only. The product name of the device
     */
    deviceVersion?: string | null;
    /**
     * Output only. Lists of unique features supported by the device. Comprehensive list of supported features: **Fitness Tracking** - `ACTIVE_MINUTES`: Legacy active minutes. - `AUTOSTRIDE`: Automatic stride length calculation. - `BIKE_ONBOARDING`: Cycling UI support. - `CALORIES`: Daily burned calories. - `DISTANCE`: Daily distance tracking. - `ELEVATION`: Floors climbed. - `INACTIVITY_ALERTS`: Reminders to move. - `SEDENTARY_TIME`: Tracks inactive time. - `STEPS`: Daily steps. - `SWIM`: Swim tracking (laps/strokes). - `AUTORUN`: Automatic run detection. - `ACTIVE_ZONE_MINUTES`: Active Zone Minutes (AZM). **Heart Rate & Health** - `HEART_RATE`: Continuous heart rate (PPG). - `BAT_SIGNAL`: High/Low Heart Rate Alerts. **Advanced Sensors** - `SPO2`: Blood oxygen saturation. - `NIGHTTIME_OXYGEN_SATURATION`: Sleep SpO2. - `ESTIMATED_OXYGEN_VARIATION`: Estimated Oxygen Variation. - `EDA`: Electrodermal Activity (stress). - `SKIN_TEMPERATURE`: Skin temperature variation. - `INTERNAL_DEVICE_TEMPERATURE`: Internal device temperature. **Sleep & Wellness** - `SLEEP`: Basic sleep tracking. - `SMART_SLEEP`: Advanced sleep tracking (stages/score). - `BEDTIME_REMINDER`: Bedtime reminders. - `SOUNDSCAPE`: Snore and noise detection. **Advanced Workouts** - `WB`: Custom Workout Builder. - `AUTOCUES`: Auto Cues / Auto Lap. - `DWR_RUN`: Daily Run Recommendations. - `ADVANCED_RUNNING`: Advanced Running Dynamics (e.g., GCT, VO). **GPS & Location** - `GPS`: Built-in GPS. - `CONNECTED_GPS`: Connected GPS (uses phone). - `LOCATION_HINT`: Location helper. **Payments & NFC** - `PAYMENTS`: NFC payments (Fitbit Pay/Google Wallet). - `FELICA`: FeliCa support (Japan payments/transit). **Activity Detection** - `GROK`: SmartTrack automatic activity detection. - `RETRO_AR`: Retroactive Activity Recognition prompts. **Smart Features & UI** - `ALARMS`: Silent alarms. - `BLE_MUSIC_CONTROL`: BLE music control. - `MUSIC`: Direct music storage/control. - `YOUTUBE_MUSIC_SUPPORTED`: YouTube Music support. - `GALLERY`: App Gallery. - `TUTORIAL_SUPPORTED`: On-screen tutorials. - `SMILEY_EMOTE`: Legacy Zip face. - `MOBILE_TO_DEVICE_DEEPLINK`: Mobile to device settings deep link. - `HIDE_GALLERY`: Option to hide Gallery. - `HIDE_GOAL_SELECTION`: Option to hide goal selection. - `DIGITAL_WARRANTY_SUPPORTED`: Digital warranty display. - `DIRECT_DEVICE_SETTINGS_SUPPORTED`: Direct device settings management. **Gym HR Broadcasting** - `ASPEN_SUPPORTED`: Broadcast HR to gym equipment. - `ASPEN_REMOTE_UI_SUPPORTED`: Remote UI for HR sharing. **Privacy & Security** - `FINITE_IMPROBABILITY`: BLE Resolvable Private Address (RPA) privacy. - `DOMAIN_KEY_SYNC`: Domain key synchronization. **BLE Protocol** - `BONDING`: Secure BLE bonding. - `ADVERTISES_SERIAL`: Advertises serial number. - `STATUS_CHARACTERISTIC`: BLE Status Characteristic. - `TRACKER_CHANNEL_CHARACTERISTIC`: BLE Tracker Channel Characteristic. - `PING_CHARACTERISTIC`: BLE Ping Characteristic. **Cellular & Wi-Fi** - `MOBILE_DATA`: LTE cellular support. - `SINGLE_AP_WIFI`: Single AP Wi-Fi. - `MULTI_AP_WIFI`: Multi AP Wi-Fi. - `WIFI_FWUP`: Firmware updates over Wi-Fi. **Data Sync & Transfer** - `APP_SYNC`: Background app sync. - `LIVE_DATA`: Real-time data streaming. - `EVENT_BASED_SYNC_SUPPORTED`: Event-based sync. - `TIME_SERVICE`: Time synchronization service. - `REMOTE_FILE_PROVIDER`: Remote file transfer. - `DIRECT_COMMS_ALARMS`: Direct communication for alarms. - `DIRECT_COMMS_EXERCISE`: Direct communication for exercise. - `DIRECT_COMMS_BATTERY_ALERTS`: Direct communication for battery alerts. **Google Integrations** - `PARROT_TREE_SUPPORTED`: Find My Device support.
     */
    features?: string[] | null;
    /**
     * Output only. The time of last sync with the Fitbit mobile application.
     */
    lastSyncTime?: string | null;
    /**
     * Output only. Mac ID number of the device.
     */
    macAddress?: string | null;
    /**
     * Identifier. The resource name of this Device resource. Format: `users/{user\}/pairedDevices/{paired_device\}` Example: `users/1234567890/pairedDevices/123` or `users/me/pairedDevices/123`
     */
    name?: string | null;
  }
  /**
   * Profile details.
   */
  export interface Schema$Profile {
    /**
     * Optional. The age in years based on the user's birth date. Updates to this field are currently not supported.
     */
    age?: number | null;
    /**
     * Output only. The automatically calculated running stride length, in millimeters. The user must consent to one of the following access scopes to access this field: - `https://www.googleapis.com/auth/googlehealth.activity_and_fitness.readonly` - `https://www.googleapis.com/auth/googlehealth.activity_and_fitness`
     */
    autoRunningStrideLengthMm?: number | null;
    /**
     * Output only. The automatically calculated walking stride length, in millimeters. The user must consent to one of the following access scopes to access this field: - `https://www.googleapis.com/auth/googlehealth.activity_and_fitness.readonly` - `https://www.googleapis.com/auth/googlehealth.activity_and_fitness`
     */
    autoWalkingStrideLengthMm?: number | null;
    /**
     * Output only. The date the user created their account. Updates to this field are currently not supported.
     */
    membershipStartDate?: Schema$Date;
    /**
     * Identifier. The resource name of this Profile resource. Format: `users/{user\}/profile` Example: `users/1234567890/profile` or `users/me/profile` The {user\} ID is a system-generated Google Health API user ID, a string of 1-63 characters consisting of lowercase and uppercase letters, numbers, and hyphens. The literal `me` can also be used to refer to the authenticated user.
     */
    name?: string | null;
    /**
     * Optional. The user's user configured running stride length, in millimeters. The user must consent to one of the following access scopes to access this field: - `https://www.googleapis.com/auth/googlehealth.activity_and_fitness.readonly` - `https://www.googleapis.com/auth/googlehealth.activity_and_fitness`
     */
    userConfiguredRunningStrideLengthMm?: number | null;
    /**
     * Optional. The user's user configured walking stride length, in millimeters. The user must consent to one of the following access scopes to access this field: - `https://www.googleapis.com/auth/googlehealth.activity_and_fitness.readonly` - `https://www.googleapis.com/auth/googlehealth.activity_and_fitness`
     */
    userConfiguredWalkingStrideLengthMm?: number | null;
  }
  /**
   * Response containing the list of reconciled DataPoints.
   */
  export interface Schema$ReconcileDataPointsResponse {
    /**
     * Data points matching the query
     */
    dataPoints?: Schema$ReconciledDataPoint[];
    /**
     * Next page token, empty if the response is complete
     */
    nextPageToken?: string | null;
  }
  /**
   * A reconciled computed or recorded metric.
   */
  export interface Schema$ReconciledDataPoint {
    /**
     * Data for points in the `active-energy-burned` interval data type collection.
     */
    activeEnergyBurned?: Schema$ActiveEnergyBurned;
    /**
     * Data for points in the `active-minutes` interval data type collection.
     */
    activeMinutes?: Schema$ActiveMinutes;
    /**
     * Data for points in the `active-zone-minutes` interval data type collection, measured in minutes.
     */
    activeZoneMinutes?: Schema$ActiveZoneMinutes;
    /**
     * Data for points in the `activity-level` daily data type collection.
     */
    activityLevel?: Schema$ActivityLevel;
    /**
     * Data for points in the `altitude` interval data type collection.
     */
    altitude?: Schema$Altitude;
    /**
     * Data for points in the `basal-energy-burned` interval data type collection.
     */
    basalEnergyBurned?: Schema$BasalEnergyBurned;
    /**
     * Data for points in the `blood-glucose` sample data type collection.
     */
    bloodGlucose?: Schema$BloodGlucose;
    /**
     * Data for points in the `body-fat` sample data type collection.
     */
    bodyFat?: Schema$BodyFat;
    /**
     * Data for points in the `core-body-temperature` sample data type collection.
     */
    coreBodyTemperature?: Schema$CoreBodyTemperature;
    /**
     * Data for points in the `daily-heart-rate-variability` daily data type collection.
     */
    dailyHeartRateVariability?: Schema$DailyHeartRateVariability;
    /**
     * Data for points in the `daily-heart-rate-zones` daily data type collection.
     */
    dailyHeartRateZones?: Schema$DailyHeartRateZones;
    /**
     * Data for points in the `daily-oxygen-saturation` daily data type collection.
     */
    dailyOxygenSaturation?: Schema$DailyOxygenSaturation;
    /**
     * Data for points in the `daily-respiratory-rate` daily data type collection.
     */
    dailyRespiratoryRate?: Schema$DailyRespiratoryRate;
    /**
     * Data for points in the `daily-resting-heart-rate` daily data type collection.
     */
    dailyRestingHeartRate?: Schema$DailyRestingHeartRate;
    /**
     * Data for points in the `daily-sleep-temperature-derivations` daily data type collection.
     */
    dailySleepTemperatureDerivations?: Schema$DailySleepTemperatureDerivations;
    /**
     * Data for points in the `daily-vo2-max` daily data type collection.
     */
    dailyVo2Max?: Schema$DailyVO2Max;
    /**
     * Identifier. Data point name, only supported for the subset of identifiable data types. For the majority of the data types, individual data points do not need to be identified and this field would be empty. Format: `users/{user\}/dataTypes/{data_type\}/dataPoints/{data_point\}` Example: `users/abcd1234/dataTypes/sleep/dataPoints/a1b2c3d4-e5f6-7890-1234-567890abcdef` The `{user\}` ID is a system-generated identifier, as described in Identity.health_user_id. The `{data_type\}` ID corresponds to the kebab-case version of the field names in the DataPoint data union field, e.g. `total-calories` for the `total_calories` field. The `{data_point\}` ID can be client-provided or system-generated. If client-provided, it must be a string of 4-63 characters, containing only lowercase letters, numbers, and hyphens.
     */
    dataPointName?: string | null;
    /**
     * Data for points in the `distance` interval data type collection.
     */
    distance?: Schema$Distance;
    /**
     * Data for points in the `exercise` session data type collection.
     */
    exercise?: Schema$Exercise;
    /**
     * Data for points in the `floors` interval data type collection.
     */
    floors?: Schema$Floors;
    /**
     * Data for points in the `heart-rate` sample data type collection.
     */
    heartRate?: Schema$HeartRate;
    /**
     * Data for points in the `heart-rate-variability` sample data type collection.
     */
    heartRateVariability?: Schema$HeartRateVariability;
    /**
     * Data for points in the `height` sample data type collection.
     */
    height?: Schema$Height;
    /**
     * Data for points in the `hydration-log` session data type collection.
     */
    hydrationLog?: Schema$HydrationLog;
    /**
     * Data for points in the `nutrition-log` session data type collection.
     */
    nutritionLog?: Schema$NutritionLog;
    /**
     * Data for points in the `oxygen-saturation` sample data type collection.
     */
    oxygenSaturation?: Schema$OxygenSaturation;
    /**
     * Data for points in the `respiratory-rate-sleep-summary` sample data type collection.
     */
    respiratoryRateSleepSummary?: Schema$RespiratoryRateSleepSummary;
    /**
     * Data for points in the `run-vo2-max` sample data type collection.
     */
    runVo2Max?: Schema$RunVO2Max;
    /**
     * Data for points in the `sedentary-period` interval data type collection.
     */
    sedentaryPeriod?: Schema$SedentaryPeriod;
    /**
     * Data for points in the `sleep` session data type collection.
     */
    sleep?: Schema$Sleep;
    /**
     * Data for points in the `steps` interval data type collection.
     */
    steps?: Schema$Steps;
    /**
     * Data for points in the `swim-lengths-data` interval data type collection.
     */
    swimLengthsData?: Schema$SwimLengthsData;
    /**
     * Data for points in the `time-in-heart-rate-zone` interval data type collection.
     */
    timeInHeartRateZone?: Schema$TimeInHeartRateZone;
    /**
     * Data for points in the `vo2-max` sample data type collection.
     */
    vo2Max?: Schema$VO2Max;
    /**
     * Data for points in the `weight` sample data type collection.
     */
    weight?: Schema$Weight;
  }
  /**
   * Records respiratory rate details during sleep. Can have multiple per day if the user sleeps multiple times.
   */
  export interface Schema$RespiratoryRateSleepSummary {
    /**
     * Optional. Respiratory rate statistics for deep sleep.
     */
    deepSleepStats?: Schema$RespiratoryRateSleepSummaryStatistics;
    /**
     * Required. Full respiratory rate statistics.
     */
    fullSleepStats?: Schema$RespiratoryRateSleepSummaryStatistics;
    /**
     * Optional. Respiratory rate statistics for light sleep.
     */
    lightSleepStats?: Schema$RespiratoryRateSleepSummaryStatistics;
    /**
     * Optional. Respiratory rate statistics for REM sleep.
     */
    remSleepStats?: Schema$RespiratoryRateSleepSummaryStatistics;
    /**
     * Required. The time at which respiratory rate was measured.
     */
    sampleTime?: Schema$ObservationSampleTime;
  }
  /**
   * Respiratory rate statistics for a given sleep stage.
   */
  export interface Schema$RespiratoryRateSleepSummaryStatistics {
    /**
     * Required. Average breaths per minute.
     */
    breathsPerMinute?: number | null;
    /**
     * Optional. How trustworthy the data is for the computation.
     */
    signalToNoise?: number | null;
    /**
     * Optional. Standard deviation of the respiratory rate during sleep.
     */
    standardDeviation?: number | null;
  }
  /**
   * Represents the rollup value for the daily resting heart rate data type.
   */
  export interface Schema$RestingHeartRatePersonalRangeRollupValue {
    /**
     * The upper bound of the user's daily resting heart rate personal range.
     */
    beatsPerMinuteMax?: number | null;
    /**
     * The lower bound of the user's daily resting heart rate personal range.
     */
    beatsPerMinuteMin?: number | null;
  }
  /**
   * Value of a rollup for a single physical time interval (aggregation window) of reconciled data points from all data sources, excluding those data points that are identified as recorded by wearables in intervals when they were not actually worn.
   */
  export interface Schema$RollupDataPoint {
    /**
     * Returned by default when rolling up data points from the `active-energy-burned` data type.
     */
    activeEnergyBurned?: Schema$ActiveEnergyBurnedRollupValue;
    /**
     * Returned by default when rolling up data points from the `active-minutes` data type, or when requested explicitly using the `active-minutes` rollup type identifier.
     */
    activeMinutes?: Schema$ActiveMinutesRollupValue;
    /**
     * Returned by default when rolling up data points from the `active-zone-minutes` data type, or when requested explicitly using the `active-zone-minutes` rollup type identifier.
     */
    activeZoneMinutes?: Schema$ActiveZoneMinutesRollupValue;
    /**
     * Returned by default when rolling up data points from the `activity-level` data type, or when requested explicitly using the `activity-level` rollup type identifier.
     */
    activityLevel?: Schema$ActivityLevelRollupValue;
    /**
     * Returned by default when rolling up data points from the `altitude` data type, or when requested explicitly using the `altitude` rollup type identifier.
     */
    altitude?: Schema$AltitudeRollupValue;
    /**
     * Returned by default when rolling up data points from the `blood-glucose` data type.
     */
    bloodGlucose?: Schema$BloodGlucoseRollupValue;
    /**
     * Returned by default when rolling up data points from the `body-fat` data type, or when requested explicitly using the `body-fat` rollup type identifier.
     */
    bodyFat?: Schema$BodyFatRollupValue;
    /**
     * Returned by default when rolling up data points from the `calories-in-heart-rate-zone` data type, or when requested explicitly using the `calories-in-heart-rate-zone` rollup type identifier.
     */
    caloriesInHeartRateZone?: Schema$CaloriesInHeartRateZoneRollupValue;
    /**
     * Returned by default when rolling up data points from the `core-body-temperature` data type, or when requested explicitly using the `core-body-temperature` rollup type identifier.
     */
    coreBodyTemperature?: Schema$CoreBodyTemperatureRollupValue;
    /**
     * Returned by default when rolling up data points from the `distance` data type, or when requested explicitly using the `distance` rollup type identifier.
     */
    distance?: Schema$DistanceRollupValue;
    /**
     * End time of the window this value aggregates over
     */
    endTime?: string | null;
    /**
     * Returned by default when rolling up data points from the `floors` data type, or when requested explicitly using the `floors` rollup type identifier.
     */
    floors?: Schema$FloorsRollupValue;
    /**
     * Returned by default when rolling up data points from the `heart-rate` data type, or when requested explicitly using the `heart-rate` rollup type identifier.
     */
    heartRate?: Schema$HeartRateRollupValue;
    /**
     * Returned by default when rolling up data points from the `hydration-log` data type, or when requested explicitly using the `hydration-log` rollup type identifier.
     */
    hydrationLog?: Schema$HydrationLogRollupValue;
    /**
     * Returned by default when rolling up data points from the `nutrition-log` data type, or when requested explicitly using the `nutrition-log` rollup type identifier.
     */
    nutritionLog?: Schema$NutritionLogRollupValue;
    /**
     * Returned by default when rolling up data points from the `run-vo2-max` data type, or when requested explicitly using the `run-vo2-max` rollup type identifier.
     */
    runVo2Max?: Schema$RunVO2MaxRollupValue;
    /**
     * Returned by default when rolling up data points from the `sedentary-period` data type, or when requested explicitly using the `sedentary-period` rollup type identifier.
     */
    sedentaryPeriod?: Schema$SedentaryPeriodRollupValue;
    /**
     * Start time of the window this value aggregates over
     */
    startTime?: string | null;
    /**
     * Returned by default when rolling up data points from the `steps` data type, or when requested explicitly using the `steps` rollup type identifier.
     */
    steps?: Schema$StepsRollupValue;
    /**
     * Returned by default when rolling up data points from the `swim-lengths-data` data type, or when requested explicitly using the `swim-lengths-data` rollup type identifier.
     */
    swimLengthsData?: Schema$SwimLengthsDataRollupValue;
    /**
     * Returned by default when rolling up data points from the `time-in-heart-rate-zone` data type, or when requested explicitly using the `time-in-heart-rate-zone` rollup type identifier.
     */
    timeInHeartRateZone?: Schema$TimeInHeartRateZoneRollupValue;
    /**
     * Returned by default when rolling up data points from the `total-calories` data type, or when requested explicitly using the `total-calories` rollup type identifier.
     */
    totalCalories?: Schema$TotalCaloriesRollupValue;
    /**
     * Returned by default when rolling up data points from the `weight` data type, or when requested explicitly using the `weight` rollup type identifier.
     */
    weight?: Schema$WeightRollupValue;
  }
  /**
   * Request to roll up data points by physical time intervals.
   */
  export interface Schema$RollUpDataPointsRequest {
    /**
     * Optional. The data source family name to roll up. If empty, data points from all available data sources will be rolled up. Format: `users/me/dataSourceFamilies/{data_source_family\}` The supported values are: - `users/me/dataSourceFamilies/all-sources` - default value - `users/me/dataSourceFamilies/google-wearables` - tracker devices - `users/me/dataSourceFamilies/google-sources` - Google first party sources
     */
    dataSourceFamily?: string | null;
    /**
     * Optional. The maximum number of data points to return. If unspecified, at most 1440 data points will be returned. The maximum page size is 10000; values above that will be truncated accordingly.
     */
    pageSize?: number | null;
    /**
     * Optional. The next_page_token from a previous request, if any. All other request fields need to be the same as in the initial request when the page token is specified.
     */
    pageToken?: string | null;
    /**
     * Required. Closed-open range of data points that will be rolled up. The maximum range for `calories-in-heart-rate-zone`, `heart-rate`, `active-minutes` and `total-calories` is 14 days. The maximum range for all other data types is 90 days.
     */
    range?: Schema$Interval;
    /**
     * Required. The size of the time window to group data points into before applying the aggregation functions.
     */
    windowSize?: string | null;
  }
  /**
   * Response containing the list of rolled up data points.
   */
  export interface Schema$RollUpDataPointsResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Values for each aggregation time window.
     */
    rollupDataPoints?: Schema$RollupDataPoint[];
  }
  /**
   * VO2 max value calculated based on the user's running activity. Value stored in ml/kg/min.
   */
  export interface Schema$RunVO2Max {
    /**
     * Required. Run VO2 max value in ml/kg/min.
     */
    runVo2Max?: number | null;
    /**
     * Required. The time at which the metric was measured.
     */
    sampleTime?: Schema$ObservationSampleTime;
  }
  /**
   * Represents the result of the rollup of the user's daily heart rate variability personal range.
   */
  export interface Schema$RunVO2MaxRollupValue {
    /**
     * Average value of run VO2 max in the interval.
     */
    rateAvg?: number | null;
    /**
     * Maximum value of run VO2 max in the interval.
     */
    rateMax?: number | null;
    /**
     * Minimum value of run VO2 max in the interval..
     */
    rateMin?: number | null;
  }
  /**
   * SedentaryPeriod SedentaryPeriod data represents the periods of time that the user was sedentary (i.e. not moving while wearing the device).
   */
  export interface Schema$SedentaryPeriod {
    /**
     * Required. Observed interval.
     */
    interval?: Schema$ObservationTimeInterval;
  }
  /**
   * Represents the result of the rollup of the user's sedentary periods.
   */
  export interface Schema$SedentaryPeriodRollupValue {
    /**
     * The total time user spent sedentary during the interval.
     */
    durationSum?: string | null;
  }
  /**
   * Represents different properties and information about the serving of a specific food.
   */
  export interface Schema$Serving {
    /**
     * Optional. Amount of food consumed, fractional values are supported.
     */
    amount?: number | null;
    /**
     * Required. Food measurement unit
     */
    foodMeasurementUnit?: string | null;
    /**
     * Output only. Legacy measurement unit for serving size in singular form (e.g. "piece", "gram").
     */
    foodMeasurementUnitDisplayName?: string | null;
  }
  /**
   * Represents a time interval of session data point, which bundles multiple observed metrics together.
   */
  export interface Schema$SessionTimeInterval {
    /**
     * Output only. Session end time in civil time in the timezone the subject is in at the end of the session.
     */
    civilEndTime?: Schema$CivilDateTime;
    /**
     * Output only. Session start time in civil time in the timezone the subject is in at the start of the session.
     */
    civilStartTime?: Schema$CivilDateTime;
    /**
     * Required. The end time of the observed session.
     */
    endTime?: string | null;
    /**
     * Required. The offset of the user's local time at the end of the session relative to the Coordinated Universal Time (UTC).
     */
    endUtcOffset?: string | null;
    /**
     * Required. The start time of the observed session.
     */
    startTime?: string | null;
    /**
     * Required. The offset of the user's local time at the start of the session relative to the Coordinated Universal Time (UTC).
     */
    startUtcOffset?: string | null;
  }
  /**
   * Settings details.
   */
  export interface Schema$Settings {
    /**
     * Optional. True if the user's stride length is determined automatically. Updates to this field are currently not supported.
     */
    autoStrideEnabled?: boolean | null;
    /**
     * Optional. The measurement unit defined in the user's account settings. Updates to this field are currently not supported.
     */
    distanceUnit?: string | null;
    /**
     * Output only. The food language code derived from the user's food database. Possible values: `'en-US'`, `'en-GB'`, `'de-DE'`, `'es-ES'`, `'fr-FR'`, `'zh-CN'`, `'zh-TW'`, `'ja-JP'`, `'en-AU'`, `'en-CA'`, `'it-IT'`, `'ko-KR'`, `'es-MX'`, `'en-IN'`, `'en-SG'`, `'en-PH'`, `'en-IE'`, `'fr-CA'`. Updates to this field are currently not supported.
     */
    foodLanguageCode?: string | null;
    /**
     * Optional. The measurement unit defined in the user's account settings.
     */
    glucoseUnit?: string | null;
    /**
     * Optional. The measurement unit defined in the user's account settings.
     */
    heightUnit?: string | null;
    /**
     * Optional. The locale defined in the user's account settings. Updates to this field are currently not supported.
     */
    languageLocale?: string | null;
    /**
     * Identifier. The resource name of this Settings resource. Format: `users/{user\}/settings` Example: `users/1234567890/settings` or `users/me/settings` The {user\} ID is a system-generated Google Health API user ID, a string of 1-63 characters consisting of lowercase and uppercase letters, numbers, and hyphens. The literal `me` can also be used to refer to the authenticated user.
     */
    name?: string | null;
    /**
     * Optional. The stride length type defined in the user's account settings for running. Updates to this field are currently not supported.
     */
    strideLengthRunningType?: string | null;
    /**
     * Optional. The stride length type defined in the user's account settings for walking. Updates to this field are currently not supported.
     */
    strideLengthWalkingType?: string | null;
    /**
     * Optional. The measurement unit defined in the user's account settings.
     */
    swimUnit?: string | null;
    /**
     * Optional. The measurement unit defined in the user's account settings.
     */
    temperatureUnit?: string | null;
    /**
     * Optional. The timezone defined in the user's account settings. This follows the IANA [Time Zone Database](https://www.iana.org/time-zones). Updates to this field are currently not supported.
     */
    timeZone?: string | null;
    /**
     * Optional. The user's timezone offset relative to UTC. Updates to this field are currently not supported.
     */
    utcOffset?: string | null;
    /**
     * Optional. The measurement unit defined in the user's account settings.
     */
    waterUnit?: string | null;
    /**
     * Optional. The measurement unit defined in the user's account settings.
     */
    weightUnit?: string | null;
  }
  /**
   * A sleep session possibly including stages.
   */
  export interface Schema$Sleep {
    /**
     * Output only. Creation time of this sleep observation.
     */
    createTime?: string | null;
    /**
     * Required. Observed sleep interval.
     */
    interval?: Schema$SessionTimeInterval;
    /**
     * Optional. Sleep metadata: processing, main, manually edited, stages status.
     */
    metadata?: Schema$SleepMetadata;
    /**
     * Optional. “Out of bed” segments that can overlap with sleep stages.
     */
    outOfBedSegments?: Schema$OutOfBedSegment[];
    /**
     * Optional. List of non-overlapping contiguous sleep stage segments that cover the sleep period.
     */
    stages?: Schema$SleepStage[];
    /**
     * Output only. Sleep summary: metrics and stages summary.
     */
    summary?: Schema$SleepSummary;
    /**
     * Optional. SleepType: classic or stages.
     */
    type?: string | null;
    /**
     * Output only. Last update time of this sleep observation.
     */
    updateTime?: string | null;
  }
  /**
   * Additional information about how the sleep was processed.
   */
  export interface Schema$SleepMetadata {
    /**
     * Optional. Sleep identifier relevant in the context of the data source.
     */
    externalId?: string | null;
    /**
     * Output only. Some sleeps autodetected by algorithms can be manually edited by users.
     */
    manuallyEdited?: boolean | null;
    /**
     * Output only. Naps are sleeps without stages and relatively short durations.
     */
    nap?: boolean | null;
    /**
     * Output only. Sleep and sleep stages algorithms finished processing.
     */
    processed?: boolean | null;
    /**
     * Output only. Sleep stages algorithm processing status.
     */
    stagesStatus?: string | null;
  }
  /**
   * Sleep stage segment.
   */
  export interface Schema$SleepStage {
    /**
     * Output only. Creation time of this sleep stages segment.
     */
    createTime?: string | null;
    /**
     * Required. Sleep stage end time.
     */
    endTime?: string | null;
    /**
     * Required. The offset of the user's local time at the end of the sleep stage relative to the Coordinated Universal Time (UTC).
     */
    endUtcOffset?: string | null;
    /**
     * Required. Sleep stage start time.
     */
    startTime?: string | null;
    /**
     * Required. The offset of the user's local time at the start of the sleep stage relative to the Coordinated Universal Time (UTC).
     */
    startUtcOffset?: string | null;
    /**
     * Required. Sleep stage type: AWAKE, DEEP, REM, LIGHT etc.
     */
    type?: string | null;
    /**
     * Output only. Last update time of this sleep stages segment.
     */
    updateTime?: string | null;
  }
  /**
   *  Sleep summary: metrics and stages summary.
   */
  export interface Schema$SleepSummary {
    /**
     * Output only. Minutes after wake up calculated by restlessness algorithm.
     */
    minutesAfterWakeUp?: string | null;
    /**
     * Output only. Total number of minutes asleep. For classic sleep it is the sum of ASLEEP stages (excluding AWAKE and RESTLESS). For "stages" sleep it is the sum of LIGHT, REM and DEEP stages (excluding AWAKE).
     */
    minutesAsleep?: string | null;
    /**
     * Output only. Total number of minutes awake. It is a sum of all AWAKE stages.
     */
    minutesAwake?: string | null;
    /**
     * Output only. Delta between wake time and bedtime. It is the sum of all stages.
     */
    minutesInSleepPeriod?: string | null;
    /**
     * Output only. Minutes to fall asleep calculated by restlessness algorithm.
     */
    minutesToFallAsleep?: string | null;
    /**
     * Output only. List of summaries (total duration and segment count) per each sleep stage type.
     */
    stagesSummary?: Schema$StageSummary[];
  }
  /**
   * Represents splits or laps recorded within an exercise. Lap events partition a workout into segments based on criteria like distance, time, or calories.
   */
  export interface Schema$SplitSummary {
    /**
     * Output only. Lap time excluding the pauses.
     */
    activeDuration?: string | null;
    /**
     * Required. Lap end time
     */
    endTime?: string | null;
    /**
     * Required. Lap end time offset from UTC
     */
    endUtcOffset?: string | null;
    /**
     * Required. Summary metrics for this split.
     */
    metricsSummary?: Schema$MetricsSummary;
    /**
     * Required. Method used to split the exercise laps. Users may manually mark the lap as complete even if the tracking is automatic.
     */
    splitType?: string | null;
    /**
     * Required. Lap start time
     */
    startTime?: string | null;
    /**
     * Required. Lap start time offset from UTC
     */
    startUtcOffset?: string | null;
  }
  /**
   * Total duration and segment count for a stage.
   */
  export interface Schema$StageSummary {
    /**
     * Output only. Number of sleep stages segments.
     */
    count?: string | null;
    /**
     * Output only. Total duration in minutes of a sleep stage.
     */
    minutes?: string | null;
    /**
     * Output only. Sleep stage type: AWAKE, DEEP, REM, LIGHT etc.
     */
    type?: string | null;
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
   * Step count over the time interval.
   */
  export interface Schema$Steps {
    /**
     * Required. Number of steps in the recorded interval.
     */
    count?: string | null;
    /**
     * Required. Observed interval.
     */
    interval?: Schema$ObservationTimeInterval;
  }
  /**
   * Represents the result of the rollup of the steps data type.
   */
  export interface Schema$StepsRollupValue {
    /**
     * Total number of steps in the interval.
     */
    countSum?: string | null;
  }
  /**
   * -- Resource Messages -- A subscriber receives notifications from Google Health API.
   */
  export interface Schema$Subscriber {
    /**
     * Output only. The time at which the subscriber was created.
     */
    createTime?: string | null;
    /**
     * Required. Authorization mechanism for a subscriber endpoint. This is required to ensure the endpoint can be verified.
     */
    endpointAuthorization?: Schema$EndpointAuthorization;
    /**
     * Required. The full HTTPS URI where update notifications will be sent. The URI must be a valid URL and use HTTPS as the scheme. This endpoint will be verified during CreateSubscriber and UpdateSubscriber calls. See RPC documentation for verification details.
     */
    endpointUri?: string | null;
    /**
     * Identifier. The resource name of the Subscriber. Format: projects/{project\}/subscribers/{subscriber\} The {project\} ID is a Google Cloud Project ID or Project Number. The {subscriber\} ID is user-settable (4-36 characters, matching /[a-z]([a-z0-9-]{2,34\}[a-z0-9])/) if provided during creation, or system-generated otherwise (e.g., a UUID). Example (User-settable subscriber ID): projects/my-project/subscribers/my-sub-123 Example (System-generated subscriber ID): projects/my-project/subscribers/a1b2c3d4-e5f6-7890-1234-567890abcdef
     */
    name?: string | null;
    /**
     * Output only. The state of the subscriber.
     */
    state?: string | null;
    /**
     * Optional. Configuration for the subscriber.
     */
    subscriberConfigs?: Schema$SubscriberConfig[];
    /**
     * Output only. The time at which the subscriber was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Configuration for a subscriber. A notification is sent to a subscription ONLY if the subscriber has a config for the data type.
   */
  export interface Schema$SubscriberConfig {
    /**
     * Required. See [Google Health API data types](https://developers.google.com/health/data-types) for the list of supported data types. Values should be in kebab-case.
     */
    dataTypes?: string[] | null;
    /**
     * Required. Policy for subscription creation.
     */
    subscriptionCreatePolicy?: string | null;
  }
  /**
   * A subscription to a data collection for a specific user, to be delivered to a subscriber.
   */
  export interface Schema$Subscription {
    /**
     * Optional. Data types subscribed to. A subscriber will only receive notifications for data types that are declared here. A subscription can only subscribe to the data types of the subscriber. Supported data types are: "altitude", "distance", "floors", "sleep", "steps", "weight".
     */
    dataTypes?: string[] | null;
    /**
     * Identifier. The resource name of the Subscription. Format: `projects/{project\}/subscribers/{subscriber\}/subscriptions/{subscription\}` Example: `projects/my-project/subscribers/my-subscriber-123/subscriptions/my-subscription-456` The {project\} ID is mandatory (6-30 characters, matching /a-z{6,30\}/) The {subscriber\} ID is user-settable (4-36 characters, matching /[a-z]([a-z0-9-]{2,34\}[a-z0-9])/) if provided during creation, or system-generated otherwise. The {subscription\} ID is user-settable (4-36 chars, matching /[a-z]([a-z0-9-]{2,34\}[a-z0-9])/) or system-generated otherwise.
     */
    name?: string | null;
    /**
     * Immutable. The resource name of the user for whom this subscription is active. Format: `users/{user\}` where `{user\}` is the public `healthUserId` as returned by the `GetIdentity` action in the profile PAPI (see `google.devicesandservices.health.v4main.HealthProfileService.GetIdentity`).
     */
    user?: string | null;
  }
  /**
   * Swim lengths data over the time interval.
   */
  export interface Schema$SwimLengthsData {
    /**
     * Required. Observed interval.
     */
    interval?: Schema$ObservationTimeInterval;
    /**
     * Required. Number of strokes in the lap.
     */
    strokeCount?: string | null;
    /**
     * Required. Swim stroke type.
     */
    swimStrokeType?: string | null;
  }
  /**
   * Represents the result of the rollup of the swim lengths data type.
   */
  export interface Schema$SwimLengthsDataRollupValue {
    /**
     * Total number of swim strokes in the interval.
     */
    strokeCountSum?: string | null;
  }
  /**
   * Time in heart rate zone record. It's an interval spent in specific heart rate zone.
   */
  export interface Schema$TimeInHeartRateZone {
    /**
     * Required. Heart rate zone type.
     */
    heartRateZoneType?: string | null;
    /**
     * Required. Observed interval.
     */
    interval?: Schema$ObservationTimeInterval;
  }
  /**
   * Represents the result of the rollup of the time in heart rate zone data type.
   */
  export interface Schema$TimeInHeartRateZoneRollupValue {
    /**
     * List of time spent in each heart rate zone.
     */
    timeInHeartRateZones?: Schema$TimeInHeartRateZoneValue[];
  }
  /**
   * Time spent in each heart rate zone.
   */
  export interface Schema$TimeInHeartRateZones {
    /**
     * Optional. Time spent in light heart rate zone.
     */
    lightTime?: string | null;
    /**
     * Optional. Time spent in moderate heart rate zone.
     */
    moderateTime?: string | null;
    /**
     * Optional. Time spent in peak heart rate zone.
     */
    peakTime?: string | null;
    /**
     * Optional. Time spent in vigorous heart rate zone.
     */
    vigorousTime?: string | null;
  }
  /**
   * Represents the total time spent in a specific heart rate zone.
   */
  export interface Schema$TimeInHeartRateZoneValue {
    /**
     * The total time spent in the specified heart rate zone.
     */
    duration?: string | null;
    /**
     * The heart rate zone.
     */
    heartRateZone?: string | null;
  }
  /**
   * Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
   */
  export interface Schema$TimeOfDay {
    /**
     * Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less than or equal to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
     */
    hours?: number | null;
    /**
     * Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59.
     */
    minutes?: number | null;
    /**
     * Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999.
     */
    nanos?: number | null;
    /**
     * Seconds of a minute. Must be greater than or equal to 0 and typically must be less than or equal to 59. An API may allow the value 60 if it allows leap-seconds.
     */
    seconds?: number | null;
  }
  /**
   * Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones).
   */
  export interface Schema$TimeZone {
    /**
     * IANA Time Zone Database time zone. For example "America/New_York".
     */
    id?: string | null;
    /**
     * Optional. IANA Time Zone Database version number. For example "2019a".
     */
    version?: string | null;
  }
  /**
   * Represents the result of the rollup of the user's total calories.
   */
  export interface Schema$TotalCaloriesRollupValue {
    /**
     * Sum of the total calories in kilocalories.
     */
    kcalSum?: number | null;
  }
  /**
   * VO2 max measurement.
   */
  export interface Schema$VO2Max {
    /**
     * Optional. The method used to measure the VO2 max value.
     */
    measurementMethod?: string | null;
    /**
     * Required. The time at which VO2 max was measured.
     */
    sampleTime?: Schema$ObservationSampleTime;
    /**
     * Required. VO2 max value measured as in ml consumed oxygen / kg of body weight / min.
     */
    vo2Max?: number | null;
  }
  /**
   * Represents the volume quantity.
   */
  export interface Schema$VolumeQuantity {
    /**
     * Required. Value representing the volume in milliliters.
     */
    milliliters?: number | null;
    /**
     * Optional. Value representing the user provided unit, used only for user-facing input and display purposes. In the API format, all volume quantities are converted to milliliters.
     */
    userProvidedUnit?: string | null;
  }
  /**
   * Rollup for volume quantity.
   */
  export interface Schema$VolumeQuantityRollup {
    /**
     * Required. The sum of volume in milliliters.
     */
    millilitersSum?: number | null;
    /**
     * Optional. The user provided unit on the last element.
     */
    userProvidedUnitLast?: string | null;
  }
  /**
   * Body weight measurement.
   */
  export interface Schema$Weight {
    /**
     * Optional. Standard free-form notes captured at manual logging.
     */
    notes?: string | null;
    /**
     * Required. The time at which the weight was measured
     */
    sampleTime?: Schema$ObservationSampleTime;
    /**
     * Required. Weight of a user in grams.
     */
    weightGrams?: number | null;
  }
  /**
   * Represents the weight quantity.
   */
  export interface Schema$WeightQuantity {
    /**
     * Required. Value representing the weight in grams.
     */
    grams?: number | null;
    /**
     * Optional. Value representing the user provided unit.
     */
    userProvidedUnit?: string | null;
  }
  /**
   * Rollup for the weight.
   */
  export interface Schema$WeightQuantityRollup {
    /**
     * Required. The sum of the weight in grams.
     */
    gramsSum?: number | null;
    /**
     * Optional. The user provided unit on the last element.
     */
    userProvidedUnitLast?: string | null;
  }
  /**
   * Represents the result of the rollup of the weight data type.
   */
  export interface Schema$WeightRollupValue {
    /**
     * Average weight in grams.
     */
    weightGramsAvg?: number | null;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    subscribers: Resource$Projects$Subscribers;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.subscribers = new Resource$Projects$Subscribers(this.context);
    }
  }

  export class Resource$Projects$Subscribers {
    context: APIRequestContext;
    subscriptions: Resource$Projects$Subscribers$Subscriptions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.subscriptions = new Resource$Projects$Subscribers$Subscriptions(
        this.context
      );
    }

    /**
     * Registers a new subscriber endpoint to receive notifications. A subscriber represents an application or service that wishes to receive data change notifications for users who have granted consent. **Endpoint Verification:** For a subscriber to be successfully created, the provided `endpoint_uri` must be a valid HTTPS endpoint and must pass an automated verification check. The backend will send two HTTP POST requests to the `endpoint_uri`: 1. **Verification with Authorization:** * **Headers:** Includes `Content-Type: application/json` and `Authorization` (with the exact value from `CreateSubscriberPayload.endpoint_authorization.secret`). * **Body:** `{"type": "verification"\}` * **Expected Response:** HTTP `201 Created`. 2. **Verification without Authorization:** * **Headers:** Includes `Content-Type: application/json`. The `Authorization` header is OMITTED. * **Body:** `{"type": "verification"\}` * **Expected Response:** HTTP `401 Unauthorized` or `403 Forbidden`. Both tests must pass for the subscriber creation to succeed. If verification fails, the operation will not be completed and an error will be returned. This process ensures the endpoint is reachable and correctly validates the `Authorization` header.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/health.googleapis.com
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
     * const health = google.health('v4');
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
     *   const res = await health.projects.subscribers.create({
     *     // Required. The parent resource where this subscriber will be created. Format: projects/{project\} Example: projects/my-project-123
     *     parent: 'projects/my-project',
     *     // Optional. The ID to use for the subscriber, which will become the final component of the subscriber's resource name. This value should be 4-36 characters, and valid characters are /[a-z]([a-z0-9-]{2,34\}[a-z0-9])/.
     *     subscriberId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "endpointAuthorization": {},
     *       //   "endpointUri": "my_endpointUri",
     *       //   "subscriberConfigs": []
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
      params: Params$Resource$Projects$Subscribers$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Subscribers$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Subscribers$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Subscribers$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Subscribers$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Subscribers$Create
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Subscribers$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Subscribers$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://health.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/{+parent}/subscribers').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes a subscriber registration. This will stop all notifications to the subscriber's endpoint.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/health.googleapis.com
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
     * const health = google.health('v4');
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
     *   const res = await health.projects.subscribers.delete({
     *     // Optional. If set to true, any child resources (e.g., subscriptions) will also be deleted. If false (default) and child resources exist, the request will fail.
     *     force: 'placeholder-value',
     *     // Required. The name of the subscriber to delete. Format: projects/{project\}/subscribers/{subscriber\} Example: projects/my-project/subscribers/my-subscriber-123 The {subscriber\} ID is user-settable (4-36 characters, matching /[a-z]([a-z0-9-]{2,34\}[a-z0-9])/) or system-generated if not provided during creation.
     *     name: 'projects/my-project/subscribers/my-subscriber',
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
      params: Params$Resource$Projects$Subscribers$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Subscribers$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Subscribers$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Subscribers$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Subscribers$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Subscribers$Delete
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Subscribers$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Subscribers$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://health.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Lists all subscribers registered within the owned Google Cloud Project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/health.googleapis.com
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
     * const health = google.health('v4');
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
     *   const res = await health.projects.subscribers.list({
     *     // Optional. The maximum number of subscribers to return. The service may return fewer than this value. If unspecified, at most 50 subscribers will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListSubscribers` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubscribers` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent, which owns this collection of subscribers. Format: projects/{project\}
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "subscribers": [],
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
    list(
      params: Params$Resource$Projects$Subscribers$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Subscribers$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListSubscribersResponse>>;
    list(
      params: Params$Resource$Projects$Subscribers$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Subscribers$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListSubscribersResponse>,
      callback: BodyResponseCallback<Schema$ListSubscribersResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Subscribers$List,
      callback: BodyResponseCallback<Schema$ListSubscribersResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListSubscribersResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Subscribers$List
        | BodyResponseCallback<Schema$ListSubscribersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListSubscribersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListSubscribersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListSubscribersResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Subscribers$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Subscribers$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://health.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/{+parent}/subscribers').replace(
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
        createAPIRequest<Schema$ListSubscribersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListSubscribersResponse>(parameters);
      }
    }

    /**
     * Updates the configuration of an existing subscriber, such as the endpoint URI or the data types it's interested in. **Endpoint Verification:** If the `endpoint_uri` or `endpoint_authorization` field is included in the `update_mask`, the backend will re-verify the endpoint. The verification process is the same as described in `CreateSubscriber`: 1. **Verification with Authorization:** POST to the new or existing `endpoint_uri` with the new or existing `Authorization` secret. Expects HTTP `201 Created`. 2. **Verification without Authorization:** POST to the `endpoint_uri` without the `Authorization` header. Expects HTTP `401 Unauthorized` or `403 Forbidden`. Both tests must pass using the potentially updated values for the subscriber update to succeed. If verification fails, the update will not be applied, and an error will be returned.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/health.googleapis.com
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
     * const health = google.health('v4');
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
     *   const res = await health.projects.subscribers.patch({
     *     // Identifier. The resource name of the Subscriber. Format: projects/{project\}/subscribers/{subscriber\} The {project\} ID is a Google Cloud Project ID or Project Number. The {subscriber\} ID is user-settable (4-36 characters, matching /[a-z]([a-z0-9-]{2,34\}[a-z0-9])/) if provided during creation, or system-generated otherwise (e.g., a UUID). Example (User-settable subscriber ID): projects/my-project/subscribers/my-sub-123 Example (System-generated subscriber ID): projects/my-project/subscribers/a1b2c3d4-e5f6-7890-1234-567890abcdef
     *     name: 'projects/my-project/subscribers/my-subscriber',
     *     // Optional. A field mask that specifies which fields of the Subscriber message are to be updated. This allows for partial updates. Supported fields: - endpoint_uri - subscriber_configs - endpoint_authorization
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "endpointAuthorization": {},
     *       //   "endpointUri": "my_endpointUri",
     *       //   "name": "my_name",
     *       //   "state": "my_state",
     *       //   "subscriberConfigs": [],
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
      params: Params$Resource$Projects$Subscribers$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Subscribers$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    patch(
      params: Params$Resource$Projects$Subscribers$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Subscribers$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Subscribers$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Subscribers$Patch
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Subscribers$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Subscribers$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://health.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Subscribers$Create extends StandardParameters {
    /**
     * Required. The parent resource where this subscriber will be created. Format: projects/{project\} Example: projects/my-project-123
     */
    parent?: string;
    /**
     * Optional. The ID to use for the subscriber, which will become the final component of the subscriber's resource name. This value should be 4-36 characters, and valid characters are /[a-z]([a-z0-9-]{2,34\}[a-z0-9])/.
     */
    subscriberId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreateSubscriberPayload;
  }
  export interface Params$Resource$Projects$Subscribers$Delete extends StandardParameters {
    /**
     * Optional. If set to true, any child resources (e.g., subscriptions) will also be deleted. If false (default) and child resources exist, the request will fail.
     */
    force?: boolean;
    /**
     * Required. The name of the subscriber to delete. Format: projects/{project\}/subscribers/{subscriber\} Example: projects/my-project/subscribers/my-subscriber-123 The {subscriber\} ID is user-settable (4-36 characters, matching /[a-z]([a-z0-9-]{2,34\}[a-z0-9])/) or system-generated if not provided during creation.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Subscribers$List extends StandardParameters {
    /**
     * Optional. The maximum number of subscribers to return. The service may return fewer than this value. If unspecified, at most 50 subscribers will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListSubscribers` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubscribers` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent, which owns this collection of subscribers. Format: projects/{project\}
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Subscribers$Patch extends StandardParameters {
    /**
     * Identifier. The resource name of the Subscriber. Format: projects/{project\}/subscribers/{subscriber\} The {project\} ID is a Google Cloud Project ID or Project Number. The {subscriber\} ID is user-settable (4-36 characters, matching /[a-z]([a-z0-9-]{2,34\}[a-z0-9])/) if provided during creation, or system-generated otherwise (e.g., a UUID). Example (User-settable subscriber ID): projects/my-project/subscribers/my-sub-123 Example (System-generated subscriber ID): projects/my-project/subscribers/a1b2c3d4-e5f6-7890-1234-567890abcdef
     */
    name?: string;
    /**
     * Optional. A field mask that specifies which fields of the Subscriber message are to be updated. This allows for partial updates. Supported fields: - endpoint_uri - subscriber_configs - endpoint_authorization
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Subscriber;
  }

  export class Resource$Projects$Subscribers$Subscriptions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a subscription for a specific user to a specific subscriber. This method requires the subscriber to have a `SubscriptionCreatePolicy` set to `MANUAL` for the given data types.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/health.googleapis.com
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
     * const health = google.health('v4');
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
     *   const res = await health.projects.subscribers.subscriptions.create({
     *     // Required. The parent subscriber. Format: projects/{project\}/subscribers/{subscriber\} The {subscriber\} ID is user-settable (4-36 characters, matching /[a-z]([a-z0-9-]{2,34\}[a-z0-9])/) if provided during creation, or system-generated otherwise.
     *     parent: 'projects/my-project/subscribers/my-subscriber',
     *     // Optional. The {subscription_id\} is user-settable (4-36 chars, matching /[a-z]([a-z0-9-]{2,34\}[a-z0-9])/) or system-generated otherwise. If provided, the ID must be unique within the parent subscriber.
     *     subscriptionId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "dataTypes": [],
     *       //   "user": "my_user"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dataTypes": [],
     *   //   "name": "my_name",
     *   //   "user": "my_user"
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
      params: Params$Resource$Projects$Subscribers$Subscriptions$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Subscribers$Subscriptions$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Subscription>>;
    create(
      params: Params$Resource$Projects$Subscribers$Subscriptions$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Subscribers$Subscriptions$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Subscription>,
      callback: BodyResponseCallback<Schema$Subscription>
    ): void;
    create(
      params: Params$Resource$Projects$Subscribers$Subscriptions$Create,
      callback: BodyResponseCallback<Schema$Subscription>
    ): void;
    create(callback: BodyResponseCallback<Schema$Subscription>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Subscribers$Subscriptions$Create
        | BodyResponseCallback<Schema$Subscription>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Subscription>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Subscription>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Subscription>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Subscribers$Subscriptions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Subscribers$Subscriptions$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://health.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/{+parent}/subscriptions').replace(
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
        createAPIRequest<Schema$Subscription>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Subscription>(parameters);
      }
    }

    /**
     * Deletes a specific user subscription, stopping notifications for this user to this subscriber.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/health.googleapis.com
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
     * const health = google.health('v4');
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
     *   const res = await health.projects.subscribers.subscriptions.delete({
     *     // Required. The resource name of the subscription to delete. Format: `projects/{project\}/subscribers/{subscriber\}/subscriptions/{subscription\}` Example: `projects/my-project/subscribers/my-subscriber-123/subscriptions/my-subscription-456` The {subscriber\} ID is user-settable (4-36 characters, matching /[a-z]([a-z0-9-]{2,34\}[a-z0-9])/) if provided during creation, or system-generated otherwise. The {subscription\} ID is user-settable (4-36 characters, matching /[a-z]([a-z0-9-]{2,34\}[a-z0-9])/) or system-generated if not provided during creation.
     *     name: 'projects/my-project/subscribers/my-subscriber/subscriptions/my-subscription',
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
      params: Params$Resource$Projects$Subscribers$Subscriptions$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Subscribers$Subscriptions$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Subscribers$Subscriptions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Subscribers$Subscriptions$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Subscribers$Subscriptions$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Subscribers$Subscriptions$Delete
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Subscribers$Subscriptions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Subscribers$Subscriptions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://health.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Lists all active subscriptions for a given subscriber. This can be filtered, for example, by user or data type.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/health.googleapis.com
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
     * const health = google.health('v4');
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
     *   const res = await health.projects.subscribers.subscriptions.list({
     *     // Optional. A filter to apply to the list of subscriptions. The filter syntax is described in https://google.aip.dev/160. The filter can be applied to the following fields: - `user` - `data_type` The `user` identifier (e.g., `user1` in `users/user1`) refers to the public `healthUserId` Example: user = "users/user1" Example: user = "users/user1" OR user = "users/user2" Example: user = "users/user1" AND (data_type = "sleep" OR data_type = "weight")
     *     filter: 'placeholder-value',
     *     // Optional. The maximum number of subscriptions to return. The service may return fewer than this value. If unspecified, at most 50 subscriptions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListSubscriptions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubscriptions` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent subscriber. Format: projects/{project\}/subscribers/{subscriber\} The {subscriber\} ID is user-settable (4-36 characters, matching /[a-z]([a-z0-9-]{2,34\}[a-z0-9])/) if provided during creation, or system-generated otherwise.
     *     parent: 'projects/my-project/subscribers/my-subscriber',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "subscriptions": []
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
      params: Params$Resource$Projects$Subscribers$Subscriptions$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Subscribers$Subscriptions$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListSubscriptionsResponse>>;
    list(
      params: Params$Resource$Projects$Subscribers$Subscriptions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Subscribers$Subscriptions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListSubscriptionsResponse>,
      callback: BodyResponseCallback<Schema$ListSubscriptionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Subscribers$Subscriptions$List,
      callback: BodyResponseCallback<Schema$ListSubscriptionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListSubscriptionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Subscribers$Subscriptions$List
        | BodyResponseCallback<Schema$ListSubscriptionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListSubscriptionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListSubscriptionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListSubscriptionsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Subscribers$Subscriptions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Subscribers$Subscriptions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://health.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/{+parent}/subscriptions').replace(
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
        createAPIRequest<Schema$ListSubscriptionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListSubscriptionsResponse>(parameters);
      }
    }

    /**
     * Updates the data types for an existing user subscription.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/health.googleapis.com
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
     * const health = google.health('v4');
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
     *   const res = await health.projects.subscribers.subscriptions.patch({
     *     // Identifier. The resource name of the Subscription. Format: `projects/{project\}/subscribers/{subscriber\}/subscriptions/{subscription\}` Example: `projects/my-project/subscribers/my-subscriber-123/subscriptions/my-subscription-456` The {project\} ID is mandatory (6-30 characters, matching /a-z{6,30\}/) The {subscriber\} ID is user-settable (4-36 characters, matching /[a-z]([a-z0-9-]{2,34\}[a-z0-9])/) if provided during creation, or system-generated otherwise. The {subscription\} ID is user-settable (4-36 chars, matching /[a-z]([a-z0-9-]{2,34\}[a-z0-9])/) or system-generated otherwise.
     *     name: 'projects/my-project/subscribers/my-subscriber/subscriptions/my-subscription',
     *     // Optional. The list of fields to update.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "dataTypes": [],
     *       //   "name": "my_name",
     *       //   "user": "my_user"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dataTypes": [],
     *   //   "name": "my_name",
     *   //   "user": "my_user"
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
      params: Params$Resource$Projects$Subscribers$Subscriptions$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Subscribers$Subscriptions$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Subscription>>;
    patch(
      params: Params$Resource$Projects$Subscribers$Subscriptions$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Subscribers$Subscriptions$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Subscription>,
      callback: BodyResponseCallback<Schema$Subscription>
    ): void;
    patch(
      params: Params$Resource$Projects$Subscribers$Subscriptions$Patch,
      callback: BodyResponseCallback<Schema$Subscription>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Subscription>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Subscribers$Subscriptions$Patch
        | BodyResponseCallback<Schema$Subscription>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Subscription>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Subscription>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Subscription>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Subscribers$Subscriptions$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Subscribers$Subscriptions$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://health.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
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
        createAPIRequest<Schema$Subscription>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Subscription>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Subscribers$Subscriptions$Create extends StandardParameters {
    /**
     * Required. The parent subscriber. Format: projects/{project\}/subscribers/{subscriber\} The {subscriber\} ID is user-settable (4-36 characters, matching /[a-z]([a-z0-9-]{2,34\}[a-z0-9])/) if provided during creation, or system-generated otherwise.
     */
    parent?: string;
    /**
     * Optional. The {subscription_id\} is user-settable (4-36 chars, matching /[a-z]([a-z0-9-]{2,34\}[a-z0-9])/) or system-generated otherwise. If provided, the ID must be unique within the parent subscriber.
     */
    subscriptionId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreateSubscriptionPayload;
  }
  export interface Params$Resource$Projects$Subscribers$Subscriptions$Delete extends StandardParameters {
    /**
     * Required. The resource name of the subscription to delete. Format: `projects/{project\}/subscribers/{subscriber\}/subscriptions/{subscription\}` Example: `projects/my-project/subscribers/my-subscriber-123/subscriptions/my-subscription-456` The {subscriber\} ID is user-settable (4-36 characters, matching /[a-z]([a-z0-9-]{2,34\}[a-z0-9])/) if provided during creation, or system-generated otherwise. The {subscription\} ID is user-settable (4-36 characters, matching /[a-z]([a-z0-9-]{2,34\}[a-z0-9])/) or system-generated if not provided during creation.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Subscribers$Subscriptions$List extends StandardParameters {
    /**
     * Optional. A filter to apply to the list of subscriptions. The filter syntax is described in https://google.aip.dev/160. The filter can be applied to the following fields: - `user` - `data_type` The `user` identifier (e.g., `user1` in `users/user1`) refers to the public `healthUserId` Example: user = "users/user1" Example: user = "users/user1" OR user = "users/user2" Example: user = "users/user1" AND (data_type = "sleep" OR data_type = "weight")
     */
    filter?: string;
    /**
     * Optional. The maximum number of subscriptions to return. The service may return fewer than this value. If unspecified, at most 50 subscriptions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListSubscriptions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubscriptions` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent subscriber. Format: projects/{project\}/subscribers/{subscriber\} The {subscriber\} ID is user-settable (4-36 characters, matching /[a-z]([a-z0-9-]{2,34\}[a-z0-9])/) if provided during creation, or system-generated otherwise.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Subscribers$Subscriptions$Patch extends StandardParameters {
    /**
     * Identifier. The resource name of the Subscription. Format: `projects/{project\}/subscribers/{subscriber\}/subscriptions/{subscription\}` Example: `projects/my-project/subscribers/my-subscriber-123/subscriptions/my-subscription-456` The {project\} ID is mandatory (6-30 characters, matching /a-z{6,30\}/) The {subscriber\} ID is user-settable (4-36 characters, matching /[a-z]([a-z0-9-]{2,34\}[a-z0-9])/) if provided during creation, or system-generated otherwise. The {subscription\} ID is user-settable (4-36 chars, matching /[a-z]([a-z0-9-]{2,34\}[a-z0-9])/) or system-generated otherwise.
     */
    name?: string;
    /**
     * Optional. The list of fields to update.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Subscription;
  }

  export class Resource$Users {
    context: APIRequestContext;
    dataTypes: Resource$Users$Datatypes;
    pairedDevices: Resource$Users$Paireddevices;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.dataTypes = new Resource$Users$Datatypes(this.context);
      this.pairedDevices = new Resource$Users$Paireddevices(this.context);
    }

    /**
     * Gets the user's identity. It includes the legacy Fitbit user ID and the Google user ID and it can be used by migrating clients to map identifiers between the two systems.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/health.googleapis.com
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
     * const health = google.health('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/googlehealth.activity_and_fitness.readonly',
     *       'https://www.googleapis.com/auth/googlehealth.health_metrics_and_measurements.readonly',
     *       'https://www.googleapis.com/auth/googlehealth.profile.readonly',
     *       'https://www.googleapis.com/auth/googlehealth.settings.readonly',
     *       'https://www.googleapis.com/auth/googlehealth.sleep.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await health.users.getIdentity({
     *     // Required. The resource name of the Identity. Format: `users/me/identity`
     *     name: 'users/my-user/identity',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "healthUserId": "my_healthUserId",
     *   //   "legacyUserId": "my_legacyUserId",
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
    getIdentity(
      params: Params$Resource$Users$Getidentity,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getIdentity(
      params?: Params$Resource$Users$Getidentity,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Identity>>;
    getIdentity(
      params: Params$Resource$Users$Getidentity,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIdentity(
      params: Params$Resource$Users$Getidentity,
      options: MethodOptions | BodyResponseCallback<Schema$Identity>,
      callback: BodyResponseCallback<Schema$Identity>
    ): void;
    getIdentity(
      params: Params$Resource$Users$Getidentity,
      callback: BodyResponseCallback<Schema$Identity>
    ): void;
    getIdentity(callback: BodyResponseCallback<Schema$Identity>): void;
    getIdentity(
      paramsOrCallback?:
        | Params$Resource$Users$Getidentity
        | BodyResponseCallback<Schema$Identity>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Identity>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Identity>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Identity>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Getidentity;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Getidentity;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://health.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Identity>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Identity>(parameters);
      }
    }

    /**
     * Returns user's IRN Profile details.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/health.googleapis.com
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
     * const health = google.health('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/googlehealth.irn.readonly'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await health.users.getIrnProfile({
     *     // Required. The resource name of the IRN Profile. Format: `users/{user\}/irnProfile` Example: `users/1234567890/irnProfile` or `users/me/irnProfile` The {user\} ID is a system-generated Google Health API user ID, a string of 1-63 characters consisting of lowercase and uppercase letters, numbers, and hyphens. The literal `me` can also be used to refer to the authenticated user.
     *     name: 'users/my-user/irnProfile',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "enrollmentStatus": false,
     *   //   "name": "my_name",
     *   //   "onboardingStatus": false,
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
    getIrnProfile(
      params: Params$Resource$Users$Getirnprofile,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getIrnProfile(
      params?: Params$Resource$Users$Getirnprofile,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$IrnProfile>>;
    getIrnProfile(
      params: Params$Resource$Users$Getirnprofile,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIrnProfile(
      params: Params$Resource$Users$Getirnprofile,
      options: MethodOptions | BodyResponseCallback<Schema$IrnProfile>,
      callback: BodyResponseCallback<Schema$IrnProfile>
    ): void;
    getIrnProfile(
      params: Params$Resource$Users$Getirnprofile,
      callback: BodyResponseCallback<Schema$IrnProfile>
    ): void;
    getIrnProfile(callback: BodyResponseCallback<Schema$IrnProfile>): void;
    getIrnProfile(
      paramsOrCallback?:
        | Params$Resource$Users$Getirnprofile
        | BodyResponseCallback<Schema$IrnProfile>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$IrnProfile>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$IrnProfile>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$IrnProfile>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Getirnprofile;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Getirnprofile;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://health.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$IrnProfile>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$IrnProfile>(parameters);
      }
    }

    /**
     * Returns user Profile details.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/health.googleapis.com
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
     * const health = google.health('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/googlehealth.profile.readonly'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await health.users.getProfile({
     *     // Required. The name of the Profile. Format: `users/me/profile`.
     *     name: 'users/my-user/profile',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "age": 0,
     *   //   "autoRunningStrideLengthMm": 0,
     *   //   "autoWalkingStrideLengthMm": 0,
     *   //   "membershipStartDate": {},
     *   //   "name": "my_name",
     *   //   "userConfiguredRunningStrideLengthMm": 0,
     *   //   "userConfiguredWalkingStrideLengthMm": 0
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
    getProfile(
      params: Params$Resource$Users$Getprofile,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getProfile(
      params?: Params$Resource$Users$Getprofile,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Profile>>;
    getProfile(
      params: Params$Resource$Users$Getprofile,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getProfile(
      params: Params$Resource$Users$Getprofile,
      options: MethodOptions | BodyResponseCallback<Schema$Profile>,
      callback: BodyResponseCallback<Schema$Profile>
    ): void;
    getProfile(
      params: Params$Resource$Users$Getprofile,
      callback: BodyResponseCallback<Schema$Profile>
    ): void;
    getProfile(callback: BodyResponseCallback<Schema$Profile>): void;
    getProfile(
      paramsOrCallback?:
        | Params$Resource$Users$Getprofile
        | BodyResponseCallback<Schema$Profile>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Profile>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Profile>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Profile>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Users$Getprofile;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Getprofile;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://health.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Profile>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Profile>(parameters);
      }
    }

    /**
     * Returns user settings details.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/health.googleapis.com
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
     * const health = google.health('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/googlehealth.settings.readonly'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await health.users.getSettings({
     *     // Required. The name of the Settings. Format: `users/me/settings`.
     *     name: 'users/my-user/settings',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "autoStrideEnabled": false,
     *   //   "distanceUnit": "my_distanceUnit",
     *   //   "foodLanguageCode": "my_foodLanguageCode",
     *   //   "glucoseUnit": "my_glucoseUnit",
     *   //   "heightUnit": "my_heightUnit",
     *   //   "languageLocale": "my_languageLocale",
     *   //   "name": "my_name",
     *   //   "strideLengthRunningType": "my_strideLengthRunningType",
     *   //   "strideLengthWalkingType": "my_strideLengthWalkingType",
     *   //   "swimUnit": "my_swimUnit",
     *   //   "temperatureUnit": "my_temperatureUnit",
     *   //   "timeZone": "my_timeZone",
     *   //   "utcOffset": "my_utcOffset",
     *   //   "waterUnit": "my_waterUnit",
     *   //   "weightUnit": "my_weightUnit"
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
    getSettings(
      params: Params$Resource$Users$Getsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getSettings(
      params?: Params$Resource$Users$Getsettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Settings>>;
    getSettings(
      params: Params$Resource$Users$Getsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getSettings(
      params: Params$Resource$Users$Getsettings,
      options: MethodOptions | BodyResponseCallback<Schema$Settings>,
      callback: BodyResponseCallback<Schema$Settings>
    ): void;
    getSettings(
      params: Params$Resource$Users$Getsettings,
      callback: BodyResponseCallback<Schema$Settings>
    ): void;
    getSettings(callback: BodyResponseCallback<Schema$Settings>): void;
    getSettings(
      paramsOrCallback?:
        | Params$Resource$Users$Getsettings
        | BodyResponseCallback<Schema$Settings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Settings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Settings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Settings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Getsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Getsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://health.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Settings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Settings>(parameters);
      }
    }

    /**
     * Updates the user's profile details.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/health.googleapis.com
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
     * const health = google.health('v4');
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
     *   const res = await health.users.updateProfile({
     *     // Identifier. The resource name of this Profile resource. Format: `users/{user\}/profile` Example: `users/1234567890/profile` or `users/me/profile` The {user\} ID is a system-generated Google Health API user ID, a string of 1-63 characters consisting of lowercase and uppercase letters, numbers, and hyphens. The literal `me` can also be used to refer to the authenticated user.
     *     name: 'users/my-user/profile',
     *     // Optional. The list of fields to be updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "age": 0,
     *       //   "autoRunningStrideLengthMm": 0,
     *       //   "autoWalkingStrideLengthMm": 0,
     *       //   "membershipStartDate": {},
     *       //   "name": "my_name",
     *       //   "userConfiguredRunningStrideLengthMm": 0,
     *       //   "userConfiguredWalkingStrideLengthMm": 0
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "age": 0,
     *   //   "autoRunningStrideLengthMm": 0,
     *   //   "autoWalkingStrideLengthMm": 0,
     *   //   "membershipStartDate": {},
     *   //   "name": "my_name",
     *   //   "userConfiguredRunningStrideLengthMm": 0,
     *   //   "userConfiguredWalkingStrideLengthMm": 0
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
    updateProfile(
      params: Params$Resource$Users$Updateprofile,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateProfile(
      params?: Params$Resource$Users$Updateprofile,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Profile>>;
    updateProfile(
      params: Params$Resource$Users$Updateprofile,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateProfile(
      params: Params$Resource$Users$Updateprofile,
      options: MethodOptions | BodyResponseCallback<Schema$Profile>,
      callback: BodyResponseCallback<Schema$Profile>
    ): void;
    updateProfile(
      params: Params$Resource$Users$Updateprofile,
      callback: BodyResponseCallback<Schema$Profile>
    ): void;
    updateProfile(callback: BodyResponseCallback<Schema$Profile>): void;
    updateProfile(
      paramsOrCallback?:
        | Params$Resource$Users$Updateprofile
        | BodyResponseCallback<Schema$Profile>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Profile>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Profile>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Profile>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Updateprofile;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Updateprofile;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://health.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
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
        createAPIRequest<Schema$Profile>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Profile>(parameters);
      }
    }

    /**
     * Updates the user's settings details.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/health.googleapis.com
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
     * const health = google.health('v4');
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
     *   const res = await health.users.updateSettings({
     *     // Identifier. The resource name of this Settings resource. Format: `users/{user\}/settings` Example: `users/1234567890/settings` or `users/me/settings` The {user\} ID is a system-generated Google Health API user ID, a string of 1-63 characters consisting of lowercase and uppercase letters, numbers, and hyphens. The literal `me` can also be used to refer to the authenticated user.
     *     name: 'users/my-user/settings',
     *     // Optional. The list of fields to be updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "autoStrideEnabled": false,
     *       //   "distanceUnit": "my_distanceUnit",
     *       //   "foodLanguageCode": "my_foodLanguageCode",
     *       //   "glucoseUnit": "my_glucoseUnit",
     *       //   "heightUnit": "my_heightUnit",
     *       //   "languageLocale": "my_languageLocale",
     *       //   "name": "my_name",
     *       //   "strideLengthRunningType": "my_strideLengthRunningType",
     *       //   "strideLengthWalkingType": "my_strideLengthWalkingType",
     *       //   "swimUnit": "my_swimUnit",
     *       //   "temperatureUnit": "my_temperatureUnit",
     *       //   "timeZone": "my_timeZone",
     *       //   "utcOffset": "my_utcOffset",
     *       //   "waterUnit": "my_waterUnit",
     *       //   "weightUnit": "my_weightUnit"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "autoStrideEnabled": false,
     *   //   "distanceUnit": "my_distanceUnit",
     *   //   "foodLanguageCode": "my_foodLanguageCode",
     *   //   "glucoseUnit": "my_glucoseUnit",
     *   //   "heightUnit": "my_heightUnit",
     *   //   "languageLocale": "my_languageLocale",
     *   //   "name": "my_name",
     *   //   "strideLengthRunningType": "my_strideLengthRunningType",
     *   //   "strideLengthWalkingType": "my_strideLengthWalkingType",
     *   //   "swimUnit": "my_swimUnit",
     *   //   "temperatureUnit": "my_temperatureUnit",
     *   //   "timeZone": "my_timeZone",
     *   //   "utcOffset": "my_utcOffset",
     *   //   "waterUnit": "my_waterUnit",
     *   //   "weightUnit": "my_weightUnit"
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
    updateSettings(
      params: Params$Resource$Users$Updatesettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateSettings(
      params?: Params$Resource$Users$Updatesettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Settings>>;
    updateSettings(
      params: Params$Resource$Users$Updatesettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateSettings(
      params: Params$Resource$Users$Updatesettings,
      options: MethodOptions | BodyResponseCallback<Schema$Settings>,
      callback: BodyResponseCallback<Schema$Settings>
    ): void;
    updateSettings(
      params: Params$Resource$Users$Updatesettings,
      callback: BodyResponseCallback<Schema$Settings>
    ): void;
    updateSettings(callback: BodyResponseCallback<Schema$Settings>): void;
    updateSettings(
      paramsOrCallback?:
        | Params$Resource$Users$Updatesettings
        | BodyResponseCallback<Schema$Settings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Settings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Settings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Settings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Updatesettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Updatesettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://health.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
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
        createAPIRequest<Schema$Settings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Settings>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Getidentity extends StandardParameters {
    /**
     * Required. The resource name of the Identity. Format: `users/me/identity`
     */
    name?: string;
  }
  export interface Params$Resource$Users$Getirnprofile extends StandardParameters {
    /**
     * Required. The resource name of the IRN Profile. Format: `users/{user\}/irnProfile` Example: `users/1234567890/irnProfile` or `users/me/irnProfile` The {user\} ID is a system-generated Google Health API user ID, a string of 1-63 characters consisting of lowercase and uppercase letters, numbers, and hyphens. The literal `me` can also be used to refer to the authenticated user.
     */
    name?: string;
  }
  export interface Params$Resource$Users$Getprofile extends StandardParameters {
    /**
     * Required. The name of the Profile. Format: `users/me/profile`.
     */
    name?: string;
  }
  export interface Params$Resource$Users$Getsettings extends StandardParameters {
    /**
     * Required. The name of the Settings. Format: `users/me/settings`.
     */
    name?: string;
  }
  export interface Params$Resource$Users$Updateprofile extends StandardParameters {
    /**
     * Identifier. The resource name of this Profile resource. Format: `users/{user\}/profile` Example: `users/1234567890/profile` or `users/me/profile` The {user\} ID is a system-generated Google Health API user ID, a string of 1-63 characters consisting of lowercase and uppercase letters, numbers, and hyphens. The literal `me` can also be used to refer to the authenticated user.
     */
    name?: string;
    /**
     * Optional. The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Profile;
  }
  export interface Params$Resource$Users$Updatesettings extends StandardParameters {
    /**
     * Identifier. The resource name of this Settings resource. Format: `users/{user\}/settings` Example: `users/1234567890/settings` or `users/me/settings` The {user\} ID is a system-generated Google Health API user ID, a string of 1-63 characters consisting of lowercase and uppercase letters, numbers, and hyphens. The literal `me` can also be used to refer to the authenticated user.
     */
    name?: string;
    /**
     * Optional. The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Settings;
  }

  export class Resource$Users$Datatypes {
    context: APIRequestContext;
    dataPoints: Resource$Users$Datatypes$Datapoints;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.dataPoints = new Resource$Users$Datatypes$Datapoints(this.context);
    }
  }

  export class Resource$Users$Datatypes$Datapoints {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Delete a batch of identifyable data points.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/health.googleapis.com
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
     * const health = google.health('v4');
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
     *   const res = await health.users.dataTypes.dataPoints.batchDelete({
     *     // Optional. Parent (data type) for the Data Point collection Format: `users/me/dataTypes/{data_type\}`, e.g.: - `users/me/dataTypes/steps` - `users/me/dataTypes/-` For a list of the supported data types see the DataPoint data union field. Deleting data points across multiple data type collections is supported following https://aip.dev/159. If this is set, the parent of all of the data points specified in `names` must match this field.
     *     parent: 'users/my-user/dataTypes/my-dataType',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "names": []
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
    batchDelete(
      params: Params$Resource$Users$Datatypes$Datapoints$Batchdelete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchDelete(
      params?: Params$Resource$Users$Datatypes$Datapoints$Batchdelete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    batchDelete(
      params: Params$Resource$Users$Datatypes$Datapoints$Batchdelete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchDelete(
      params: Params$Resource$Users$Datatypes$Datapoints$Batchdelete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    batchDelete(
      params: Params$Resource$Users$Datatypes$Datapoints$Batchdelete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    batchDelete(callback: BodyResponseCallback<Schema$Operation>): void;
    batchDelete(
      paramsOrCallback?:
        | Params$Resource$Users$Datatypes$Datapoints$Batchdelete
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Datatypes$Datapoints$Batchdelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Datatypes$Datapoints$Batchdelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://health.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/{+parent}/dataPoints:batchDelete').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Creates a single identifiable data point.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/health.googleapis.com
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
     * const health = google.health('v4');
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
     *   const res = await health.users.dataTypes.dataPoints.create({
     *     // Required. The parent resource name where the data point will be created. Format: `users/{user\}/dataTypes/{data_type\}`
     *     parent: 'users/my-user/dataTypes/my-dataType',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "activeEnergyBurned": {},
     *       //   "activeMinutes": {},
     *       //   "activeZoneMinutes": {},
     *       //   "activityLevel": {},
     *       //   "altitude": {},
     *       //   "basalEnergyBurned": {},
     *       //   "bloodGlucose": {},
     *       //   "bodyFat": {},
     *       //   "coreBodyTemperature": {},
     *       //   "dailyHeartRateVariability": {},
     *       //   "dailyHeartRateZones": {},
     *       //   "dailyOxygenSaturation": {},
     *       //   "dailyRespiratoryRate": {},
     *       //   "dailyRestingHeartRate": {},
     *       //   "dailySleepTemperatureDerivations": {},
     *       //   "dailyVo2Max": {},
     *       //   "dataSource": {},
     *       //   "distance": {},
     *       //   "electrocardiogram": {},
     *       //   "exercise": {},
     *       //   "floors": {},
     *       //   "food": {},
     *       //   "foodMeasurementUnit": {},
     *       //   "heartRate": {},
     *       //   "heartRateVariability": {},
     *       //   "height": {},
     *       //   "hydrationLog": {},
     *       //   "irregularRhythmNotification": {},
     *       //   "name": "my_name",
     *       //   "nutritionLog": {},
     *       //   "oxygenSaturation": {},
     *       //   "respiratoryRateSleepSummary": {},
     *       //   "runVo2Max": {},
     *       //   "sedentaryPeriod": {},
     *       //   "sleep": {},
     *       //   "steps": {},
     *       //   "swimLengthsData": {},
     *       //   "timeInHeartRateZone": {},
     *       //   "vo2Max": {},
     *       //   "weight": {}
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
      params: Params$Resource$Users$Datatypes$Datapoints$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Users$Datatypes$Datapoints$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Users$Datatypes$Datapoints$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Users$Datatypes$Datapoints$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Users$Datatypes$Datapoints$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Users$Datatypes$Datapoints$Create
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Datatypes$Datapoints$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Datatypes$Datapoints$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://health.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/{+parent}/dataPoints').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Roll up data points over civil time intervals for supported data types.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/health.googleapis.com
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
     * const health = google.health('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/googlehealth.activity_and_fitness.readonly',
     *       'https://www.googleapis.com/auth/googlehealth.health_metrics_and_measurements.readonly',
     *       'https://www.googleapis.com/auth/googlehealth.location.readonly',
     *       'https://www.googleapis.com/auth/googlehealth.sleep.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await health.users.dataTypes.dataPoints.dailyRollUp({
     *     // Required. Parent data type of the Data Point collection. Format: `users/{user\}/dataTypes/{data_type\}`, e.g.: - `users/me/dataTypes/steps` - `users/me/dataTypes/distance` For a list of the supported data types see the DailyRollupDataPoint value union field.
     *     parent: 'users/my-user/dataTypes/my-dataType',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "dataSourceFamily": "my_dataSourceFamily",
     *       //   "pageSize": 0,
     *       //   "pageToken": "my_pageToken",
     *       //   "range": {},
     *       //   "windowSizeDays": 0
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "rollupDataPoints": []
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
    dailyRollUp(
      params: Params$Resource$Users$Datatypes$Datapoints$Dailyrollup,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    dailyRollUp(
      params?: Params$Resource$Users$Datatypes$Datapoints$Dailyrollup,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DailyRollUpDataPointsResponse>>;
    dailyRollUp(
      params: Params$Resource$Users$Datatypes$Datapoints$Dailyrollup,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    dailyRollUp(
      params: Params$Resource$Users$Datatypes$Datapoints$Dailyrollup,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$DailyRollUpDataPointsResponse>,
      callback: BodyResponseCallback<Schema$DailyRollUpDataPointsResponse>
    ): void;
    dailyRollUp(
      params: Params$Resource$Users$Datatypes$Datapoints$Dailyrollup,
      callback: BodyResponseCallback<Schema$DailyRollUpDataPointsResponse>
    ): void;
    dailyRollUp(
      callback: BodyResponseCallback<Schema$DailyRollUpDataPointsResponse>
    ): void;
    dailyRollUp(
      paramsOrCallback?:
        | Params$Resource$Users$Datatypes$Datapoints$Dailyrollup
        | BodyResponseCallback<Schema$DailyRollUpDataPointsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DailyRollUpDataPointsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DailyRollUpDataPointsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$DailyRollUpDataPointsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Datatypes$Datapoints$Dailyrollup;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Datatypes$Datapoints$Dailyrollup;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://health.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/{+parent}/dataPoints:dailyRollUp').replace(
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
        createAPIRequest<Schema$DailyRollUpDataPointsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DailyRollUpDataPointsResponse>(
          parameters
        );
      }
    }

    /**
     * Exports exercise data in TCX format. **IMPORTANT:** HTTP clients must append `?alt=media` to the request URL to download the raw TCX file. Example: `https://health.googleapis.com/v4/users/me/dataTypes/exercise/dataPoints/EXERCISE_ID:exportExerciseTcx?alt=media` Without `alt=media`, the server returns a JSON response (`ExportExerciseTcxResponse`) which is intended primarily for gRPC clients. **Note:** While the Authorization section below states that any one of the listed scopes is accepted, this specific method requires the user to provide both one of the `activity_and_fitness` scopes (`normal` or `readonly`) AND one of the `location` scopes (`normal` or `readonly`) in their access token to succeed.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/health.googleapis.com
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
     * const health = google.health('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/googlehealth.activity_and_fitness.readonly',
     *       'https://www.googleapis.com/auth/googlehealth.location.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await health.users.dataTypes.dataPoints.exportExerciseTcx({
     *     // Required. The resource name of the exercise data point to export. Format: `users/{user\}/dataTypes/exercise/dataPoints/{data_point\}` Example: `users/me/dataTypes/exercise/dataPoints/2026443605080188808` The `{user\}` is the alias `"me"` currently. Future versions may support user IDs. The `{data_point\}` ID maps to the exercise ID, which is a long integer.
     *     name: 'users/my-user/dataTypes/my-dataType/dataPoints/my-dataPoint',
     *     // Optional. Indicates whether to include the TCX data points when the GPS data is not available. If not specified, defaults to `false` and partial data will not be included.
     *     partialData: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "tcxData": "my_tcxData"
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
    exportExerciseTcx(
      params: Params$Resource$Users$Datatypes$Datapoints$Exportexercisetcx,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    exportExerciseTcx(
      params?: Params$Resource$Users$Datatypes$Datapoints$Exportexercisetcx,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ExportExerciseTcxResponse>>;
    exportExerciseTcx(
      params: Params$Resource$Users$Datatypes$Datapoints$Exportexercisetcx,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    exportExerciseTcx(
      params: Params$Resource$Users$Datatypes$Datapoints$Exportexercisetcx,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ExportExerciseTcxResponse>,
      callback: BodyResponseCallback<Schema$ExportExerciseTcxResponse>
    ): void;
    exportExerciseTcx(
      params: Params$Resource$Users$Datatypes$Datapoints$Exportexercisetcx,
      callback: BodyResponseCallback<Schema$ExportExerciseTcxResponse>
    ): void;
    exportExerciseTcx(
      callback: BodyResponseCallback<Schema$ExportExerciseTcxResponse>
    ): void;
    exportExerciseTcx(
      paramsOrCallback?:
        | Params$Resource$Users$Datatypes$Datapoints$Exportexercisetcx
        | BodyResponseCallback<Schema$ExportExerciseTcxResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ExportExerciseTcxResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ExportExerciseTcxResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ExportExerciseTcxResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Datatypes$Datapoints$Exportexercisetcx;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Users$Datatypes$Datapoints$Exportexercisetcx;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://health.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/{+name}:exportExerciseTcx').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$ExportExerciseTcxResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ExportExerciseTcxResponse>(parameters);
      }
    }

    /**
     * Get a single identifyable data point.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/health.googleapis.com
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
     * const health = google.health('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/googlehealth.activity_and_fitness.readonly',
     *       'https://www.googleapis.com/auth/googlehealth.health_metrics_and_measurements.readonly',
     *       'https://www.googleapis.com/auth/googlehealth.location.readonly',
     *       'https://www.googleapis.com/auth/googlehealth.sleep.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await health.users.dataTypes.dataPoints.get({
     *     // Required. The name of the data point to retrieve. Format: `users/{user\}/dataTypes/{data_type\}/dataPoints/{data_point\}` See DataPoint.name for examples and possible values.
     *     name: 'users/my-user/dataTypes/my-dataType/dataPoints/my-dataPoint',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "activeEnergyBurned": {},
     *   //   "activeMinutes": {},
     *   //   "activeZoneMinutes": {},
     *   //   "activityLevel": {},
     *   //   "altitude": {},
     *   //   "basalEnergyBurned": {},
     *   //   "bloodGlucose": {},
     *   //   "bodyFat": {},
     *   //   "coreBodyTemperature": {},
     *   //   "dailyHeartRateVariability": {},
     *   //   "dailyHeartRateZones": {},
     *   //   "dailyOxygenSaturation": {},
     *   //   "dailyRespiratoryRate": {},
     *   //   "dailyRestingHeartRate": {},
     *   //   "dailySleepTemperatureDerivations": {},
     *   //   "dailyVo2Max": {},
     *   //   "dataSource": {},
     *   //   "distance": {},
     *   //   "electrocardiogram": {},
     *   //   "exercise": {},
     *   //   "floors": {},
     *   //   "food": {},
     *   //   "foodMeasurementUnit": {},
     *   //   "heartRate": {},
     *   //   "heartRateVariability": {},
     *   //   "height": {},
     *   //   "hydrationLog": {},
     *   //   "irregularRhythmNotification": {},
     *   //   "name": "my_name",
     *   //   "nutritionLog": {},
     *   //   "oxygenSaturation": {},
     *   //   "respiratoryRateSleepSummary": {},
     *   //   "runVo2Max": {},
     *   //   "sedentaryPeriod": {},
     *   //   "sleep": {},
     *   //   "steps": {},
     *   //   "swimLengthsData": {},
     *   //   "timeInHeartRateZone": {},
     *   //   "vo2Max": {},
     *   //   "weight": {}
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
      params: Params$Resource$Users$Datatypes$Datapoints$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Users$Datatypes$Datapoints$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DataPoint>>;
    get(
      params: Params$Resource$Users$Datatypes$Datapoints$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Users$Datatypes$Datapoints$Get,
      options: MethodOptions | BodyResponseCallback<Schema$DataPoint>,
      callback: BodyResponseCallback<Schema$DataPoint>
    ): void;
    get(
      params: Params$Resource$Users$Datatypes$Datapoints$Get,
      callback: BodyResponseCallback<Schema$DataPoint>
    ): void;
    get(callback: BodyResponseCallback<Schema$DataPoint>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Users$Datatypes$Datapoints$Get
        | BodyResponseCallback<Schema$DataPoint>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DataPoint>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DataPoint>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$DataPoint>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Datatypes$Datapoints$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Datatypes$Datapoints$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://health.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$DataPoint>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DataPoint>(parameters);
      }
    }

    /**
     * Query user health and fitness data points.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/health.googleapis.com
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
     * const health = google.health('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/googlehealth.activity_and_fitness.readonly',
     *       'https://www.googleapis.com/auth/googlehealth.health_metrics_and_measurements.readonly',
     *       'https://www.googleapis.com/auth/googlehealth.location.readonly',
     *       'https://www.googleapis.com/auth/googlehealth.sleep.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await health.users.dataTypes.dataPoints.list({
     *     // Optional. Filter expression following https://google.aip.dev/160. A time range (either physical or civil) can be specified. The supported filter fields are: - Interval start time: - Pattern: `{interval_data_type\}.interval.start_time` - Supported comparison operators: `\>=`, `<` - Timestamp literal expected in RFC-3339 format - Supported logical operators: `AND` - Example: - `steps.interval.start_time \>= "2023-11-24T00:00:00Z" AND steps.interval.start_time < "2023-11-25T00:00:00Z"` - `distance.interval.start_time \>= "2024-08-14T12:34:56Z"` - Interval civil start time: - Pattern: `{interval_data_type\}.interval.civil_start_time` - Supported comparison operators: `\>=`, `<` - Date with optional time literal expected in ISO 8601 `YYYY-MM-DD[THH:mm:ss]` format - Supported logical operators: `AND` - Example: - `steps.interval.civil_start_time \>= "2023-11-24" AND steps.interval.civil_start_time < "2023-11-25"` - `distance.interval.civil_start_time \>= "2024-08-14T12:34:56"` - Sample observation physical time: - Pattern: `{sample_data_type\}.sample_time.physical_time` - Supported comparison operators: `\>=`, `<` - Timestamp literal expected in RFC-3339 format - Supported logical operators: `AND` - Example: - `weight.sample_time.physical_time \>= "2023-11-24T00:00:00Z" AND weight.sample_time.physical_time < "2023-11-25T00:00:00Z"` - `weight.sample_time.physical_time \>= "2024-08-14T12:34:56Z"` - Sample observation civil time: - Pattern: `{sample_data_type\}.sample_time.civil_time` - Supported comparison operators: `\>=`, `<` - Date with optional time literal expected in ISO 8601 `YYYY-MM-DD[THH:mm:ss]` format - Supported logical operators: `AND` - Example: - `weight.sample_time.civil_time \>= "2023-11-24" AND weight.sample_time.civil_time < "2023-11-25"` - `weight.sample_time.civil_time \>= "2024-08-14T12:34:56"` - Daily summary date: - Pattern: `{daily_summary_data_type\}.date` - Supported comparison operators: `\>=`, `<` - Date literal expected in ISO 8601 `YYYY-MM-DD` format - Supported logical operators: `AND` - Example: - `daily_heart_rate_variability.date < "2024-08-15"` - Session civil start time (**Excluding Sleep and ECG**): - Pattern: `{session_data_type\}.interval.civil_start_time` - Supported comparison operators: `\>=`, `<` - Date with optional time literal expected in ISO 8601 `YYYY-MM-DD[THH:mm:ss]` format - Supported logical operators: `AND` - Example: - `exercise.interval.civil_start_time \>= "2023-11-24" AND exercise.interval.civil_start_time < "2023-11-25"` - `exercise.interval.civil_start_time \>= "2024-08-14T12:34:56"` - Session start time (**ECG specific**): - Pattern: `electrocardiogram.interval.start_time` - Supported comparison operators: `\>=` - Timestamp literal expected in RFC-3339 format - Example: - `electrocardiogram.interval.start_time \>= "2024-08-14T12:34:56Z"` - Note: Only filtering by start time is supported for ECG. Filtering by end time (e.g., `electrocardiogram.interval.end_time`) is not supported. - Session end time (**Sleep specific**): - Pattern: `sleep.interval.end_time` - Supported comparison operators: `\>=`, `<` - Timestamp literal expected in RFC-3339 format - Supported logical operators: `AND`, `OR` - Example: - `sleep.interval.end_time \>= "2023-11-24T00:00:00Z" AND sleep.interval.end_time < "2023-11-25T00:00:00Z"` - Session civil end time (**Sleep specific**): - Pattern: `sleep.interval.civil_end_time` - Supported comparison operators: `\>=`, `<` - Date with optional time literal expected in ISO 8601 `YYYY-MM-DD[THH:mm:ss]` format - Supported logical operators: `AND`, `OR` - Example: - `sleep.interval.civil_end_time \>= "2023-11-24" AND sleep.interval.civil_end_time < "2023-11-25"` Data points in the response will be ordered by the interval start time in descending order.
     *     filter: 'placeholder-value',
     *     // Optional. The maximum number of data points to return. If unspecified, at most 1440 data points will be returned. The maximum page size is 10000; values above that will be truncated accordingly. For `exercise` and `sleep` the default page size is 25. The maximum page size for `exercise` and `sleep` is 25.
     *     pageSize: 'placeholder-value',
     *     // Optional. The `next_page_token` from a previous request, if any.
     *     pageToken: 'placeholder-value',
     *     // Required. Parent data type of the Data Point collection. Format: `users/me/dataTypes/{data_type\}`, e.g.: - `users/me/dataTypes/steps` - `users/me/dataTypes/weight` For a list of the supported data types see the DataPoint data union field.
     *     parent: 'users/my-user/dataTypes/my-dataType',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dataPoints": [],
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
      params: Params$Resource$Users$Datatypes$Datapoints$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Users$Datatypes$Datapoints$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListDataPointsResponse>>;
    list(
      params: Params$Resource$Users$Datatypes$Datapoints$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Users$Datatypes$Datapoints$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDataPointsResponse>,
      callback: BodyResponseCallback<Schema$ListDataPointsResponse>
    ): void;
    list(
      params: Params$Resource$Users$Datatypes$Datapoints$List,
      callback: BodyResponseCallback<Schema$ListDataPointsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListDataPointsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Users$Datatypes$Datapoints$List
        | BodyResponseCallback<Schema$ListDataPointsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDataPointsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDataPointsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListDataPointsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Datatypes$Datapoints$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Datatypes$Datapoints$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://health.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/{+parent}/dataPoints').replace(
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
        createAPIRequest<Schema$ListDataPointsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDataPointsResponse>(parameters);
      }
    }

    /**
     * Updates a single identifiable data point. If a data point with the specified `name` is not found, the request will fail.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/health.googleapis.com
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
     * const health = google.health('v4');
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
     *   const res = await health.users.dataTypes.dataPoints.patch({
     *     // Identifier. Data point name, only supported for the subset of identifiable data types. For the majority of the data types, individual data points do not need to be identified and this field would be empty. Format: `users/{user\}/dataTypes/{data_type\}/dataPoints/{data_point\}` Example: `users/abcd1234/dataTypes/sleep/dataPoints/a1b2c3d4-e5f6-7890-1234-567890abcdef` The `{user\}` ID is a system-generated identifier, as described in Identity.health_user_id. The `{data_type\}` ID corresponds to the kebab-case version of the field names in the DataPoint data union field, e.g. `total-calories` for the `total_calories` field. The `{data_point\}` ID can be client-provided or system-generated. If client-provided, it must be a string of 4-63 characters, containing only lowercase letters, numbers, and hyphens.
     *     name: 'users/my-user/dataTypes/my-dataType/dataPoints/my-dataPoint',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "activeEnergyBurned": {},
     *       //   "activeMinutes": {},
     *       //   "activeZoneMinutes": {},
     *       //   "activityLevel": {},
     *       //   "altitude": {},
     *       //   "basalEnergyBurned": {},
     *       //   "bloodGlucose": {},
     *       //   "bodyFat": {},
     *       //   "coreBodyTemperature": {},
     *       //   "dailyHeartRateVariability": {},
     *       //   "dailyHeartRateZones": {},
     *       //   "dailyOxygenSaturation": {},
     *       //   "dailyRespiratoryRate": {},
     *       //   "dailyRestingHeartRate": {},
     *       //   "dailySleepTemperatureDerivations": {},
     *       //   "dailyVo2Max": {},
     *       //   "dataSource": {},
     *       //   "distance": {},
     *       //   "electrocardiogram": {},
     *       //   "exercise": {},
     *       //   "floors": {},
     *       //   "food": {},
     *       //   "foodMeasurementUnit": {},
     *       //   "heartRate": {},
     *       //   "heartRateVariability": {},
     *       //   "height": {},
     *       //   "hydrationLog": {},
     *       //   "irregularRhythmNotification": {},
     *       //   "name": "my_name",
     *       //   "nutritionLog": {},
     *       //   "oxygenSaturation": {},
     *       //   "respiratoryRateSleepSummary": {},
     *       //   "runVo2Max": {},
     *       //   "sedentaryPeriod": {},
     *       //   "sleep": {},
     *       //   "steps": {},
     *       //   "swimLengthsData": {},
     *       //   "timeInHeartRateZone": {},
     *       //   "vo2Max": {},
     *       //   "weight": {}
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
      params: Params$Resource$Users$Datatypes$Datapoints$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Users$Datatypes$Datapoints$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    patch(
      params: Params$Resource$Users$Datatypes$Datapoints$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Users$Datatypes$Datapoints$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Users$Datatypes$Datapoints$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Users$Datatypes$Datapoints$Patch
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Datatypes$Datapoints$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Datatypes$Datapoints$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://health.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Reconcile data points from multiple data sources into a single data stream.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/health.googleapis.com
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
     * const health = google.health('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/googlehealth.activity_and_fitness.readonly',
     *       'https://www.googleapis.com/auth/googlehealth.health_metrics_and_measurements.readonly',
     *       'https://www.googleapis.com/auth/googlehealth.location.readonly',
     *       'https://www.googleapis.com/auth/googlehealth.sleep.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await health.users.dataTypes.dataPoints.reconcile({
     *     // Optional. The data source family name to reconcile. If empty, data points from all data sources will be reconciled. Format: `users/me/dataSourceFamilies/{data_source_family\}` The supported values are: - `users/me/dataSourceFamilies/all-sources` - default value - `users/me/dataSourceFamilies/google-wearables` - tracker devices - `users/me/dataSourceFamilies/google-sources` - Google first party sources
     *     dataSourceFamily: 'placeholder-value',
     *     // Optional. Filter expression based on https://aip.dev/160. A time range, either physical or civil, can be specified. See the ListDataPointsRequest.filter for the supported fields and syntax.
     *     filter: 'placeholder-value',
     *     // Optional. The maximum number of data points to return. If unspecified, at most 1440 data points will be returned. The maximum page size is 10000; values above that will be truncated accordingly. For `exercise` and `sleep` the default page size is 25. The maximum page size for `exercise` and `sleep` is 25.
     *     pageSize: 'placeholder-value',
     *     // Optional. The `next_page_token` from a previous request, if any.
     *     pageToken: 'placeholder-value',
     *     // Required. Parent data type of the Data Point collection. Format: `users/me/dataTypes/{data_type\}`, e.g.: - `users/me/dataTypes/steps` - `users/me/dataTypes/heart-rate` For a list of the supported data types see the DataPoint data union field.
     *     parent: 'users/my-user/dataTypes/my-dataType',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dataPoints": [],
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
    reconcile(
      params: Params$Resource$Users$Datatypes$Datapoints$Reconcile,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    reconcile(
      params?: Params$Resource$Users$Datatypes$Datapoints$Reconcile,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ReconcileDataPointsResponse>>;
    reconcile(
      params: Params$Resource$Users$Datatypes$Datapoints$Reconcile,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    reconcile(
      params: Params$Resource$Users$Datatypes$Datapoints$Reconcile,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ReconcileDataPointsResponse>,
      callback: BodyResponseCallback<Schema$ReconcileDataPointsResponse>
    ): void;
    reconcile(
      params: Params$Resource$Users$Datatypes$Datapoints$Reconcile,
      callback: BodyResponseCallback<Schema$ReconcileDataPointsResponse>
    ): void;
    reconcile(
      callback: BodyResponseCallback<Schema$ReconcileDataPointsResponse>
    ): void;
    reconcile(
      paramsOrCallback?:
        | Params$Resource$Users$Datatypes$Datapoints$Reconcile
        | BodyResponseCallback<Schema$ReconcileDataPointsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ReconcileDataPointsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ReconcileDataPointsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ReconcileDataPointsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Datatypes$Datapoints$Reconcile;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Datatypes$Datapoints$Reconcile;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://health.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/{+parent}/dataPoints:reconcile').replace(
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
        createAPIRequest<Schema$ReconcileDataPointsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ReconcileDataPointsResponse>(parameters);
      }
    }

    /**
     * Roll up data points over physical time intervals for supported data types.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/health.googleapis.com
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
     * const health = google.health('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/googlehealth.activity_and_fitness.readonly',
     *       'https://www.googleapis.com/auth/googlehealth.health_metrics_and_measurements.readonly',
     *       'https://www.googleapis.com/auth/googlehealth.location.readonly',
     *       'https://www.googleapis.com/auth/googlehealth.sleep.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await health.users.dataTypes.dataPoints.rollUp({
     *     // Required. Parent data type of the Data Point collection. Format: `users/{user\}/dataTypes/{data_type\}`, e.g.: - `users/me/dataTypes/steps` - `users/me/dataTypes/distance` For a list of the supported data types see the RollupDataPoint value union field.
     *     parent: 'users/my-user/dataTypes/my-dataType',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "dataSourceFamily": "my_dataSourceFamily",
     *       //   "pageSize": 0,
     *       //   "pageToken": "my_pageToken",
     *       //   "range": {},
     *       //   "windowSize": "my_windowSize"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "rollupDataPoints": []
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
    rollUp(
      params: Params$Resource$Users$Datatypes$Datapoints$Rollup,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    rollUp(
      params?: Params$Resource$Users$Datatypes$Datapoints$Rollup,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$RollUpDataPointsResponse>>;
    rollUp(
      params: Params$Resource$Users$Datatypes$Datapoints$Rollup,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    rollUp(
      params: Params$Resource$Users$Datatypes$Datapoints$Rollup,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RollUpDataPointsResponse>,
      callback: BodyResponseCallback<Schema$RollUpDataPointsResponse>
    ): void;
    rollUp(
      params: Params$Resource$Users$Datatypes$Datapoints$Rollup,
      callback: BodyResponseCallback<Schema$RollUpDataPointsResponse>
    ): void;
    rollUp(
      callback: BodyResponseCallback<Schema$RollUpDataPointsResponse>
    ): void;
    rollUp(
      paramsOrCallback?:
        | Params$Resource$Users$Datatypes$Datapoints$Rollup
        | BodyResponseCallback<Schema$RollUpDataPointsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RollUpDataPointsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RollUpDataPointsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$RollUpDataPointsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Datatypes$Datapoints$Rollup;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Datatypes$Datapoints$Rollup;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://health.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/{+parent}/dataPoints:rollUp').replace(
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
        createAPIRequest<Schema$RollUpDataPointsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RollUpDataPointsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Datatypes$Datapoints$Batchdelete extends StandardParameters {
    /**
     * Optional. Parent (data type) for the Data Point collection Format: `users/me/dataTypes/{data_type\}`, e.g.: - `users/me/dataTypes/steps` - `users/me/dataTypes/-` For a list of the supported data types see the DataPoint data union field. Deleting data points across multiple data type collections is supported following https://aip.dev/159. If this is set, the parent of all of the data points specified in `names` must match this field.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchDeleteDataPointsRequest;
  }
  export interface Params$Resource$Users$Datatypes$Datapoints$Create extends StandardParameters {
    /**
     * Required. The parent resource name where the data point will be created. Format: `users/{user\}/dataTypes/{data_type\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DataPoint;
  }
  export interface Params$Resource$Users$Datatypes$Datapoints$Dailyrollup extends StandardParameters {
    /**
     * Required. Parent data type of the Data Point collection. Format: `users/{user\}/dataTypes/{data_type\}`, e.g.: - `users/me/dataTypes/steps` - `users/me/dataTypes/distance` For a list of the supported data types see the DailyRollupDataPoint value union field.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DailyRollUpDataPointsRequest;
  }
  export interface Params$Resource$Users$Datatypes$Datapoints$Exportexercisetcx extends StandardParameters {
    /**
     * Required. The resource name of the exercise data point to export. Format: `users/{user\}/dataTypes/exercise/dataPoints/{data_point\}` Example: `users/me/dataTypes/exercise/dataPoints/2026443605080188808` The `{user\}` is the alias `"me"` currently. Future versions may support user IDs. The `{data_point\}` ID maps to the exercise ID, which is a long integer.
     */
    name?: string;
    /**
     * Optional. Indicates whether to include the TCX data points when the GPS data is not available. If not specified, defaults to `false` and partial data will not be included.
     */
    partialData?: boolean;
  }
  export interface Params$Resource$Users$Datatypes$Datapoints$Get extends StandardParameters {
    /**
     * Required. The name of the data point to retrieve. Format: `users/{user\}/dataTypes/{data_type\}/dataPoints/{data_point\}` See DataPoint.name for examples and possible values.
     */
    name?: string;
  }
  export interface Params$Resource$Users$Datatypes$Datapoints$List extends StandardParameters {
    /**
     * Optional. Filter expression following https://google.aip.dev/160. A time range (either physical or civil) can be specified. The supported filter fields are: - Interval start time: - Pattern: `{interval_data_type\}.interval.start_time` - Supported comparison operators: `\>=`, `<` - Timestamp literal expected in RFC-3339 format - Supported logical operators: `AND` - Example: - `steps.interval.start_time \>= "2023-11-24T00:00:00Z" AND steps.interval.start_time < "2023-11-25T00:00:00Z"` - `distance.interval.start_time \>= "2024-08-14T12:34:56Z"` - Interval civil start time: - Pattern: `{interval_data_type\}.interval.civil_start_time` - Supported comparison operators: `\>=`, `<` - Date with optional time literal expected in ISO 8601 `YYYY-MM-DD[THH:mm:ss]` format - Supported logical operators: `AND` - Example: - `steps.interval.civil_start_time \>= "2023-11-24" AND steps.interval.civil_start_time < "2023-11-25"` - `distance.interval.civil_start_time \>= "2024-08-14T12:34:56"` - Sample observation physical time: - Pattern: `{sample_data_type\}.sample_time.physical_time` - Supported comparison operators: `\>=`, `<` - Timestamp literal expected in RFC-3339 format - Supported logical operators: `AND` - Example: - `weight.sample_time.physical_time \>= "2023-11-24T00:00:00Z" AND weight.sample_time.physical_time < "2023-11-25T00:00:00Z"` - `weight.sample_time.physical_time \>= "2024-08-14T12:34:56Z"` - Sample observation civil time: - Pattern: `{sample_data_type\}.sample_time.civil_time` - Supported comparison operators: `\>=`, `<` - Date with optional time literal expected in ISO 8601 `YYYY-MM-DD[THH:mm:ss]` format - Supported logical operators: `AND` - Example: - `weight.sample_time.civil_time \>= "2023-11-24" AND weight.sample_time.civil_time < "2023-11-25"` - `weight.sample_time.civil_time \>= "2024-08-14T12:34:56"` - Daily summary date: - Pattern: `{daily_summary_data_type\}.date` - Supported comparison operators: `\>=`, `<` - Date literal expected in ISO 8601 `YYYY-MM-DD` format - Supported logical operators: `AND` - Example: - `daily_heart_rate_variability.date < "2024-08-15"` - Session civil start time (**Excluding Sleep and ECG**): - Pattern: `{session_data_type\}.interval.civil_start_time` - Supported comparison operators: `\>=`, `<` - Date with optional time literal expected in ISO 8601 `YYYY-MM-DD[THH:mm:ss]` format - Supported logical operators: `AND` - Example: - `exercise.interval.civil_start_time \>= "2023-11-24" AND exercise.interval.civil_start_time < "2023-11-25"` - `exercise.interval.civil_start_time \>= "2024-08-14T12:34:56"` - Session start time (**ECG specific**): - Pattern: `electrocardiogram.interval.start_time` - Supported comparison operators: `\>=` - Timestamp literal expected in RFC-3339 format - Example: - `electrocardiogram.interval.start_time \>= "2024-08-14T12:34:56Z"` - Note: Only filtering by start time is supported for ECG. Filtering by end time (e.g., `electrocardiogram.interval.end_time`) is not supported. - Session end time (**Sleep specific**): - Pattern: `sleep.interval.end_time` - Supported comparison operators: `\>=`, `<` - Timestamp literal expected in RFC-3339 format - Supported logical operators: `AND`, `OR` - Example: - `sleep.interval.end_time \>= "2023-11-24T00:00:00Z" AND sleep.interval.end_time < "2023-11-25T00:00:00Z"` - Session civil end time (**Sleep specific**): - Pattern: `sleep.interval.civil_end_time` - Supported comparison operators: `\>=`, `<` - Date with optional time literal expected in ISO 8601 `YYYY-MM-DD[THH:mm:ss]` format - Supported logical operators: `AND`, `OR` - Example: - `sleep.interval.civil_end_time \>= "2023-11-24" AND sleep.interval.civil_end_time < "2023-11-25"` Data points in the response will be ordered by the interval start time in descending order.
     */
    filter?: string;
    /**
     * Optional. The maximum number of data points to return. If unspecified, at most 1440 data points will be returned. The maximum page size is 10000; values above that will be truncated accordingly. For `exercise` and `sleep` the default page size is 25. The maximum page size for `exercise` and `sleep` is 25.
     */
    pageSize?: number;
    /**
     * Optional. The `next_page_token` from a previous request, if any.
     */
    pageToken?: string;
    /**
     * Required. Parent data type of the Data Point collection. Format: `users/me/dataTypes/{data_type\}`, e.g.: - `users/me/dataTypes/steps` - `users/me/dataTypes/weight` For a list of the supported data types see the DataPoint data union field.
     */
    parent?: string;
  }
  export interface Params$Resource$Users$Datatypes$Datapoints$Patch extends StandardParameters {
    /**
     * Identifier. Data point name, only supported for the subset of identifiable data types. For the majority of the data types, individual data points do not need to be identified and this field would be empty. Format: `users/{user\}/dataTypes/{data_type\}/dataPoints/{data_point\}` Example: `users/abcd1234/dataTypes/sleep/dataPoints/a1b2c3d4-e5f6-7890-1234-567890abcdef` The `{user\}` ID is a system-generated identifier, as described in Identity.health_user_id. The `{data_type\}` ID corresponds to the kebab-case version of the field names in the DataPoint data union field, e.g. `total-calories` for the `total_calories` field. The `{data_point\}` ID can be client-provided or system-generated. If client-provided, it must be a string of 4-63 characters, containing only lowercase letters, numbers, and hyphens.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DataPoint;
  }
  export interface Params$Resource$Users$Datatypes$Datapoints$Reconcile extends StandardParameters {
    /**
     * Optional. The data source family name to reconcile. If empty, data points from all data sources will be reconciled. Format: `users/me/dataSourceFamilies/{data_source_family\}` The supported values are: - `users/me/dataSourceFamilies/all-sources` - default value - `users/me/dataSourceFamilies/google-wearables` - tracker devices - `users/me/dataSourceFamilies/google-sources` - Google first party sources
     */
    dataSourceFamily?: string;
    /**
     * Optional. Filter expression based on https://aip.dev/160. A time range, either physical or civil, can be specified. See the ListDataPointsRequest.filter for the supported fields and syntax.
     */
    filter?: string;
    /**
     * Optional. The maximum number of data points to return. If unspecified, at most 1440 data points will be returned. The maximum page size is 10000; values above that will be truncated accordingly. For `exercise` and `sleep` the default page size is 25. The maximum page size for `exercise` and `sleep` is 25.
     */
    pageSize?: number;
    /**
     * Optional. The `next_page_token` from a previous request, if any.
     */
    pageToken?: string;
    /**
     * Required. Parent data type of the Data Point collection. Format: `users/me/dataTypes/{data_type\}`, e.g.: - `users/me/dataTypes/steps` - `users/me/dataTypes/heart-rate` For a list of the supported data types see the DataPoint data union field.
     */
    parent?: string;
  }
  export interface Params$Resource$Users$Datatypes$Datapoints$Rollup extends StandardParameters {
    /**
     * Required. Parent data type of the Data Point collection. Format: `users/{user\}/dataTypes/{data_type\}`, e.g.: - `users/me/dataTypes/steps` - `users/me/dataTypes/distance` For a list of the supported data types see the RollupDataPoint value union field.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RollUpDataPointsRequest;
  }

  export class Resource$Users$Paireddevices {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns user's Device.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/health.googleapis.com
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
     * const health = google.health('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/googlehealth.settings.readonly'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await health.users.pairedDevices.get({
     *     // Required. The name of the device to retrieve. Format: users/{user\}/devices/{device\}
     *     name: 'users/my-user/pairedDevices/my-pairedDevice',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "batteryLevel": 0,
     *   //   "batteryStatus": "my_batteryStatus",
     *   //   "deviceType": "my_deviceType",
     *   //   "deviceVersion": "my_deviceVersion",
     *   //   "features": [],
     *   //   "lastSyncTime": "my_lastSyncTime",
     *   //   "macAddress": "my_macAddress",
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
      params: Params$Resource$Users$Paireddevices$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Users$Paireddevices$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PairedDevice>>;
    get(
      params: Params$Resource$Users$Paireddevices$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Users$Paireddevices$Get,
      options: MethodOptions | BodyResponseCallback<Schema$PairedDevice>,
      callback: BodyResponseCallback<Schema$PairedDevice>
    ): void;
    get(
      params: Params$Resource$Users$Paireddevices$Get,
      callback: BodyResponseCallback<Schema$PairedDevice>
    ): void;
    get(callback: BodyResponseCallback<Schema$PairedDevice>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Users$Paireddevices$Get
        | BodyResponseCallback<Schema$PairedDevice>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PairedDevice>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PairedDevice>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PairedDevice>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Paireddevices$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Paireddevices$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://health.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$PairedDevice>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PairedDevice>(parameters);
      }
    }

    /**
     * Returns the user's list of paired 1P trackers and smartwatches.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/health.googleapis.com
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
     * const health = google.health('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/googlehealth.settings.readonly'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await health.users.pairedDevices.list({
     *     // Optional. The maximum number of devices to return. The service may return fewer than this value. If unspecified, at most 5 devices will be returned. The maximum value is 100. values above 100 will be coerced to 100.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListPairedDevices` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPairedDevices` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent, which owns this collection of devices. Format: users/{user\}
     *     parent: 'users/my-user',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "pairedDevices": []
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
      params: Params$Resource$Users$Paireddevices$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Users$Paireddevices$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListPairedDevicesResponse>>;
    list(
      params: Params$Resource$Users$Paireddevices$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Users$Paireddevices$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListPairedDevicesResponse>,
      callback: BodyResponseCallback<Schema$ListPairedDevicesResponse>
    ): void;
    list(
      params: Params$Resource$Users$Paireddevices$List,
      callback: BodyResponseCallback<Schema$ListPairedDevicesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListPairedDevicesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Users$Paireddevices$List
        | BodyResponseCallback<Schema$ListPairedDevicesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListPairedDevicesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListPairedDevicesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListPairedDevicesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Paireddevices$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Paireddevices$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://health.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/{+parent}/pairedDevices').replace(
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
        createAPIRequest<Schema$ListPairedDevicesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListPairedDevicesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Paireddevices$Get extends StandardParameters {
    /**
     * Required. The name of the device to retrieve. Format: users/{user\}/devices/{device\}
     */
    name?: string;
  }
  export interface Params$Resource$Users$Paireddevices$List extends StandardParameters {
    /**
     * Optional. The maximum number of devices to return. The service may return fewer than this value. If unspecified, at most 5 devices will be returned. The maximum value is 100. values above 100 will be coerced to 100.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListPairedDevices` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPairedDevices` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent, which owns this collection of devices. Format: users/{user\}
     */
    parent?: string;
  }
}
