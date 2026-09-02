// Copyright 2026 Google LLC
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

export namespace curationpartners_v1 {
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
   * Curation Partners API
   *
   * Curation partners API is an externally available HTTP API for curators to programmatically manage their data segments and curated packages used by ad agencies.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const curationpartners = google.curationpartners('v1');
   * ```
   */
  export class Curationpartners {
    context: APIRequestContext;
    curators: Resource$Curators;
    mediaPlanners: Resource$Mediaplanners;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.curators = new Resource$Curators(this.context);
      this.mediaPlanners = new Resource$Mediaplanners(this.context);
    }
  }

  /**
   * Settings for controlling access to a curated package.
   */
  export interface Schema$AccessControlSettings {
    /**
     * Required. Immutable. The list of media planners that are explicitly granted access to the curated package. Eligible media planners can be found in the mediaPlanners.list method. Only a single media planner may be allowlisted at this time. Format: `mediaPlanners/{mediaPlannerAccountId\}`
     */
    allowlistedMediaPlanners?: string[] | null;
  }
  /**
   * Request message for ActivateCuratedPackage.
   */
  export interface Schema$ActivateCuratedPackageRequest {}
  /**
   * Request message for activating a data segment
   */
  export interface Schema$ActivateDataSegmentRequest {}
  /**
   * Represents size of a single ad slot, or a creative.
   */
  export interface Schema$AdSize {
    /**
     * The height of the ad slot in pixels. This field will be present only when size type is `PIXEL`.
     */
    height?: string | null;
    /**
     * The type of the ad slot size.
     */
    type?: string | null;
    /**
     * The width of the ad slot in pixels. This field will be present only when size type is `PIXEL`.
     */
    width?: string | null;
  }
  /**
   * Generic targeting used for targeting dimensions that contains a list of included and excluded numeric IDs. This cannot be filtered using list filter syntax.
   */
  export interface Schema$CriteriaTargeting {
    /**
     * A list of numeric IDs to be excluded.
     */
    excludedCriteriaIds?: string[] | null;
    /**
     * A list of numeric IDs to be included.
     */
    targetedCriteriaIds?: string[] | null;
  }
  /**
   * Represents a curated package of inventory created and managed by a Curator.
   */
  export interface Schema$CuratedPackage {
    /**
     * Required. Settings for controlling access to the curated package. Access to this curated package is limited to the allowlisted media planners and the creator. Buyers and bidders can not be allowlisted for or have direct access to this resource.
     */
    accessSettings?: Schema$AccessControlSettings;
    /**
     * Output only. The timestamp when the curated package was created. Can be used to filter the response of the curatedPackages.list method.
     */
    createTime?: string | null;
    /**
     * Optional. Immutable. The visibility of the combined curation package fee and data segment fees (the total curation fee).
     */
    curationFeeVisibility?: string | null;
    /**
     * Optional. A description of the curated package, provided by the curator.
     */
    description?: string | null;
    /**
     * Required. The display name assigned to the curated package by the curator. Can be used to filter the response of the curatedPackages.list method.
     */
    displayName?: string | null;
    /**
     * Optional. The CPM fee charged by the curator to buyers using this curated package. Can be used to filter the response of the curatedPackages.list method.
     */
    feeCpm?: Schema$Money;
    /**
     * Optional. The minimum CPM a buyer has to bid to participate in auctions for inventory in this curated package. Can be used to filter the response of the curatedPackages.list method.
     */
    floorPriceCpm?: Schema$Money;
    /**
     * Optional. The fee will be charged as a percentage of the impression cost, represented in millipercent. For example, 1% is represented as 1000.
     */
    millipercentOfMediaFee?: string | null;
    /**
     * Identifier. The unique resource name for the curated package. Format: `curators/{accountId\}/curatedPackages/{curatedPackageId\}`
     */
    name?: string | null;
    /**
     * Output only. The state of the curated package. Can be used to filter the response of the curatedPackages.list method.
     */
    state?: string | null;
    /**
     * Optional. Targeting criteria for the curated package.
     */
    targeting?: Schema$PackageTargeting;
    /**
     * Output only. The timestamp when the curated package was last updated. Can be used to filter the response of the curatedPackages.list method.
     */
    updateTime?: string | null;
  }
  /**
   * Defines an identifier for a segment of inventory that can be targeted by curators or media planners in the deals or auction packages UI. Curation of inventory is done by curators on external platforms. -- Next ID: 9 --
   */
  export interface Schema$DataSegment {
    /**
     * Optional. A fixed fee charged per thousand impressions. Once set, the currency code cannot be changed.
     */
    cpmFee?: Schema$Money;
    /**
     * Output only. Time the data segment was created.
     */
    createTime?: string | null;
    /**
     * Optional. The fee will be charged as a percentage of the impression cost, represented in millipercent. For example, 1% is represented as 1000.
     */
    millipercentOfMediaFee?: string | null;
    /**
     * Immutable. Identifier. The unique identifier for the data segment. Account ID corresponds to the account ID that created the segment. Format: `curators/{curatorAccountId\}/dataSegments/{curatorDataSegmentId\}`
     */
    name?: string | null;
    /**
     * Output only. The state of the data segment.
     */
    state?: string | null;
    /**
     * Output only. Time the data segment was last updated.
     */
    updateTime?: string | null;
    /**
     * Optional. Immutable. The ID of the User List wrapped by this Data Segment. Curators with a linked Data Partner account can create a data segment that wraps a user list owned by the linked Data Partner account. User lists can be uploaded and managed using the [Data Manager API](https://developers.google.com/data-manager/api/data-partners/audiences). Linking a user list to a data segment lets you define a segment of inventory that is based on an audience you create.
     */
    userListId?: string | null;
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
   * A date range for a report.
   */
  export interface Schema$DateRange {
    /**
     * A fixed date range.
     */
    fixed?: Schema$FixedDateRange;
    /**
     * A relative date range.
     */
    relative?: string | null;
  }
  /**
   * Request message for DeactivateCuratedPackage.
   */
  export interface Schema$DeactivateCuratedPackageRequest {}
  /**
   * Request message for deactivating a data segment
   */
  export interface Schema$DeactivateDataSegmentRequest {}
  /**
   * A list of double values.
   */
  export interface Schema$DoubleList {
    /**
     * The values
     */
    values?: number[] | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * The response message for the fetch report result rows endpoint.
   */
  export interface Schema$FetchReportResultRowsResponse {
    /**
     * The computed fixed date ranges this report includes. Only returned with the first page of results (when page_token is not included in the request).
     */
    dateRanges?: Schema$FixedDateRange[];
    /**
     * A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Up to `page_size` rows of report data.
     */
    rows?: Schema$Row[];
    /**
     * The time at which the report was scheduled to run. For non-scheduled reports, this is the time at which the report was requested to be run.
     */
    runTime?: string | null;
    /**
     * The total number of rows available from this report. Useful for pagination. Only returned with the first page of results (when page_token is not included in the request).
     */
    totalRowCount?: number | null;
  }
  /**
   * A dimension or a metric in a report.
   */
  export interface Schema$Field {
    /**
     * The dimension this field represents.
     */
    dimension?: string | null;
    /**
     * The metric this field represents.
     */
    metric?: string | null;
  }
  /**
   * A filter on a specific field.
   */
  export interface Schema$FieldFilter {
    /**
     * Required. The field to filter on.
     */
    field?: Schema$Field;
    /**
     * Required. The operation of this filter.
     */
    operation?: string | null;
    /**
     * Required. Values to filter to.
     */
    values?: Schema$ReportValue[];
  }
  /**
   * A filter over one or more fields.
   */
  export interface Schema$Filter {
    /**
     * A list of filters whose results are AND-ed.
     */
    andFilter?: Schema$FilterList;
    /**
     * A filter on a single field.
     */
    fieldFilter?: Schema$FieldFilter;
    /**
     * A filter whose result is negated.
     */
    notFilter?: Schema$Filter;
    /**
     * A list of filters whose results are OR-ed.
     */
    orFilter?: Schema$FilterList;
  }
  /**
   * A list of filters.
   */
  export interface Schema$FilterList {
    /**
     * Required. A list of filters.
     */
    filters?: Schema$Filter[];
  }
  /**
   * A date range between two fixed dates (inclusive of end date).
   */
  export interface Schema$FixedDateRange {
    /**
     * Required. The end date (inclusive) of this date range.
     */
    endDate?: Schema$Date;
    /**
     * Required. The start date of this date range.
     */
    startDate?: Schema$Date;
  }
  /**
   * A list of integer values.
   */
  export interface Schema$IntList {
    /**
     * The values
     */
    values?: string[] | null;
  }
  /**
   * Response message for ListCuratedPackages.
   */
  export interface Schema$ListCuratedPackagesResponse {
    /**
     * The list of curated packages.
     */
    curatedPackages?: Schema$CuratedPackage[];
    /**
     * A token to retrieve the next page of results. Pass this value in the ListCuratedPackagesRequest.pageToken field in the subsequent call to `ListCuratedPackages` method to retrieve the next page of results. If empty, then there are no more results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for listing data segments.
   */
  export interface Schema$ListDataSegmentsResponse {
    /**
     * The list of data segments.
     */
    dataSegments?: Schema$DataSegment[];
    /**
     * Continuation token for fetching the next page of results. Pass this value in the ListDataSegmentsRequest.pageToken field in the subsequent call to the `ListDataSegments` method to retrieve the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * A response containing media planner account information.
   */
  export interface Schema$ListMediaPlannersResponse {
    /**
     * List of media planners.
     */
    mediaPlanners?: Schema$MediaPlanner[];
    /**
     * A token which can be passed to a subsequent call to the ListMediaPlanners method to retrieve the next page of results in ListMediaPlannersRequest.page_token.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response object for `ListReportsResponse` containing matching `Report` objects.
   */
  export interface Schema$ListReportsResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The `Report` objects from the specified network.
     */
    reports?: Schema$Report[];
    /**
     * Total number of `Report` objects. If a filter was included in the request, this reflects the total number after the filtering is applied. `total_size` won't be calculated in the response unless it has been included in a response field mask. The response field mask can be provided to the method by using the URL parameter `$fields` or `fields`, or by using the HTTP/gRPC header `X-Goog-FieldMask`. For more information, see https://developers.google.com/ad-manager/api/beta/field-masks
     */
    totalSize?: number | null;
  }
  /**
   * Represents a media planner account.
   */
  export interface Schema$MediaPlanner {
    /**
     * Output only. Account ID of the media planner.
     */
    accountId?: string | null;
    /**
     * Output only. The ancestor names of the media planner. Format: `mediaPlanners/{mediaPlannerAccountId\}`. Can be used to filter the response of the mediaPlanners.list method.
     */
    ancestorNames?: string[] | null;
    /**
     * Output only. The display name of the media planner. Can be used to filter the response of the mediaPlanners.list method.
     */
    displayName?: string | null;
    /**
     * Identifier. The unique resource name of the media planner. Format: `mediaPlanners/{mediaPlannerAccountId\}`. Can be used to filter the response of the mediaPlanners.list method.
     */
    name?: string | null;
  }
  /**
   * Contains all metric values requested for a single date range and set of column dimension values (returned in the columns field of the response). The order of the metrics in each field corresponds to the order of the metrics specified in the request.
   */
  export interface Schema$MetricValueGroup {
    /**
     * Data for the PRIMARY MetricValueType.
     */
    primaryValues?: Schema$ReportValue[];
  }
  /**
   * Represents an amount of money with its currency type.
   */
  export interface Schema$Money {
    /**
     * The three-letter currency code defined in ISO 4217.
     */
    currencyCode?: string | null;
    /**
     * Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
     */
    nanos?: number | null;
    /**
     * The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.
     */
    units?: string | null;
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
   * Represents targeting about where the ads can appear, for example, certain sites or mobile applications. Different placement targeting types will be logically OR'ed.
   */
  export interface Schema$PackagePlacementTargeting {
    /**
     * Optional. The list of targeted mobile app categories.
     */
    includedMobileAppCategoryTargeting?: string[] | null;
    /**
     * Optional. The list of targeted or excluded mobile application IDs that publishers own. Currently, only Android and Apple apps are supported. Android App ID, for example, com.google.android.apps.maps, can be found in Google Play Store URL. iOS App ID (which is a number) can be found at the end of iTunes store URL. First party mobile applications is either included or excluded.
     */
    mobileAppTargeting?: Schema$StringTargetingDimension;
    /**
     * Optional. The list of targeted or excluded URLs. The domains should have the http/https stripped (for example, google.com), and can contain a max of 5 paths per url.
     */
    uriTargeting?: Schema$StringTargetingDimension;
  }
  /**
   * Represents targeting about publisher provided signals. Different publisher provided signals types will be logically OR'ed.
   */
  export interface Schema$PackagePublisherProvidedSignalsTargeting {
    /**
     * Optional. The list of targeted or excluded audience IDs. Based off of IAB Audience Taxonomy version 1.1 (https://github.com/InteractiveAdvertisingBureau/Taxonomies/blob/main/Audience%20Taxonomies/Audience%20Taxonomy%201.1.tsv)
     */
    audienceTargeting?: Schema$TaxonomyTargeting;
    /**
     * Optional. The list of targeted or excluded content IDs. Based off of IAB Content Taxonomy version 2.2 (https://github.com/InteractiveAdvertisingBureau/Taxonomies/blob/main/Content%20Taxonomies/Content%20Taxonomy%202.2.tsv)
     */
    contentTargeting?: Schema$TaxonomyTargeting;
    /**
     * Optional. The list of targeted and excluded video and audio signals IDs. These are additional signals supported by publisher provided signals.
     */
    videoAndAudioSignalsTargeting?: Schema$StringTargetingDimension;
  }
  /**
   * Targeting criteria for curated and auction packages.
   */
  export interface Schema$PackageTargeting {
    /**
     * Optional. The geo criteria IDs to be included or excluded as defined in https://storage.googleapis.com/adx-rtb-dictionaries/geo-table.csv. If unset, inventory will be targeted regardless of geo.
     */
    geoTargeting?: Schema$CriteriaTargeting;
    /**
     * Optional. The targeted accelerated mobile page type. If unset, inventory will be targeted regardless of AMP status.
     */
    includedAcceleratedMobilePageType?: string | null;
    /**
     * Optional. The list of ad sizes to target. If unset, inventory will be targeted regardless of ad size. Curated packages supports `PIXEL` and `INTERSTITIAL` ad sizes.
     */
    includedAdSizes?: Schema$AdSize[];
    /**
     * Optional. The included list of targeted authorized seller statuses. If empty, inventory will be targeted regardless of seller status.
     */
    includedAuthorizedSellerStatuses?: string[] | null;
    /**
     * Optional. The creative format to target. If unset, all creative markup types are targeted.
     */
    includedCreativeFormat?: string | null;
    /**
     * Optional. The active data segments to be targeted. If unset, inventory will be targeted regardless of data segments. Format: `curators/{account_id\}/dataSegments/{data_segment_id\}`
     */
    includedDataSegments?: string[] | null;
    /**
     * Optional. The list of included device types to target. If empty, all device types are targeted.
     */
    includedDeviceTypes?: string[] | null;
    /**
     * Optional. The environment to target. If unspecified, all environments are targeted.
     */
    includedEnvironment?: string | null;
    /**
     * Optional. The targeted native inventory types. If empty, inventory will be targeted regardless of native inventory type.
     */
    includedNativeInventoryTypes?: string[] | null;
    /**
     * Optional. The list of targeted open measurement types. If empty, inventory will be targeted regardless of Open Measurement support.
     */
    includedOpenMeasurementTypes?: string[] | null;
    /**
     * Optional. The list of targeted restricted categories. If empty, inventory will be targeted regardless of restricted categories.
     */
    includedRestrictedCategories?: string[] | null;
    /**
     * Optional. The targeted rewarded type. If unset, inventory will be targeted regardless of rewarded type.
     */
    includedRewardedType?: string | null;
    /**
     * Optional. The languages to target. If unset, inventory will be targeted regardless of language. See https://developers.google.com/google-ads/api/data/codes-formats#languages for the list of supported language codes.
     */
    languageTargeting?: Schema$StringTargetingDimension;
    /**
     * Optional. The targeted minimum predicted click through rate, ranging in values [10, 10000] (0.01% - 10%). A value of 50 means that the configuration will only match adslots for which we predict at least 0.05% click through rate. An unset value indicates inventory will be targeted regardless of predicted click through rate.
     */
    minimumPredictedClickThroughRatePercentageMillis?: string | null;
    /**
     * Optional. The targeted minimum predicted viewability percentage. This value must be a multiple of 10 between 10 and 90 (inclusive). For example, 10 is valid, but 0, 15, and 100 are not. A value of 10 means that the configuration will only match adslots for which we predict at least 10% viewability. An unset value indicates inventory will be targeted regardless of predicted viewability.
     */
    minimumPredictedViewabilityPercentage?: string | null;
    /**
     * Optional. Placement targeting information, for example, URL, mobile applications.
     */
    placementTargeting?: Schema$PackagePlacementTargeting;
    /**
     * Optional. The publisher provided signals to target. If unset, inventory will be targeted regardless of publisher provided signals.
     */
    publisherProvidedSignalsTargeting?: Schema$PackagePublisherProvidedSignalsTargeting;
    /**
     * Optional. The targeted publishers. If unset, inventory will be targeted regardless of publisher. Publishers are identified by their publisher ID from ads.txt / app-ads.txt. See https://iabtechlab.com/ads-txt/ and https://iabtechlab.com/app-ads-txt/ for more details.
     */
    publisherTargeting?: Schema$StringTargetingDimension;
    /**
     * Optional. The verticals included or excluded as defined in https://developers.google.com/authorized-buyers/rtb/downloads/publisher-verticals. If unset, inventory will be targeted regardless of vertical.
     */
    verticalTargeting?: Schema$CriteriaTargeting;
    /**
     * Optional. Video specific targeting criteria.
     */
    videoTargeting?: Schema$PackageVideoTargeting;
  }
  /**
   * Video specific targeting criteria.
   */
  export interface Schema$PackageVideoTargeting {
    /**
     * Optional. The targeted video delivery method. If unset, inventory will be targeted regardless of video delivery method.
     */
    includedContentDeliveryMethod?: string | null;
    /**
     * Optional. The targeted maximum video ad duration. If unset, inventory will be targeted regardless of maximum video ad duration.
     */
    includedMaximumAdDurationTargeting?: string | null;
    /**
     * Optional. The list of targeted video mime types using the IANA published MIME type strings (https://www.iana.org/assignments/media-types/media-types.xhtml). If empty, inventory will be targeted regardless of video mime type.
     */
    includedMimeTypes?: string[] | null;
    /**
     * Optional. The list of targeted video playback methods. If empty, inventory will be targeted regardless of video playback method.
     */
    includedPlaybackMethods?: string[] | null;
    /**
     * Optional. The targeted video player size. If unset, inventory will be targeted regardless of video player size.
     */
    includedPlayerSizeTargeting?: Schema$VideoPlayerSizeTargeting;
    /**
     * Optional. The targeted video ad position types. If empty, inventory will be targeted regardless of video ad position type.
     */
    includedPositionTypes?: string[] | null;
    /**
     * Optional. The targeted minimum predicted completion rate percentage. This value must be a multiple of 10 between 10 and 90 (inclusive). For example, 10 is valid, but 0, 15, and 100 are not. A value of 10 means that the configuration will only match adslots for which we predict at least 10% completion rate. An unset value indicates inventory will be targeted regardless of predicted completion rate.
     */
    minimumPredictedCompletionRatePercentage?: string | null;
    /**
     * Optional. The targeted video plcmt types. If unset, inventory will be targeted regardless of video plcmt type.
     */
    plcmtTargeting?: Schema$VideoPlcmtTargeting;
  }
  /**
   * The `Report` resource.
   */
  export interface Schema$Report {
    /**
     * Output only. The instant this report was created.
     */
    createTime?: string | null;
    /**
     * Optional. Display name for the report.
     */
    displayName?: string | null;
    /**
     * Output only. The locale of this report. Locale is set from the user's locale at the time of the request. Locale can't be modified.
     */
    locale?: string | null;
    /**
     * Identifier. The resource name of the report. Report resource name have the form: `curators/{account_id\}/reports/{report_id\}`
     */
    name?: string | null;
    /**
     * Required. The report definition of the report.
     */
    reportDefinition?: Schema$ReportDefinition;
    /**
     * Output only. Report ID.
     */
    reportId?: string | null;
    /**
     * Output only. The instant this report was last modified.
     */
    updateTime?: string | null;
  }
  /**
   * The definition of how a report should be run.
   */
  export interface Schema$ReportDefinition {
    /**
     * Optional. The ISO 4217 currency code for this report. Defaults to account currency code if not specified.
     */
    currencyCode?: string | null;
    /**
     * Required. The primary date range of this report.
     */
    dateRange?: Schema$DateRange;
    /**
     * Required. The list of dimensions to report on. If empty, the report will have no dimensions, and any metrics will be totals.
     */
    dimensions?: string[] | null;
    /**
     * Optional. The filters for this report.
     */
    filters?: Schema$Filter[];
    /**
     * Required. The list of metrics to report on. If empty, the report will have no metrics.
     */
    metrics?: string[] | null;
    /**
     * Optional. Default sorts to apply to this report.
     */
    sorts?: Schema$Sort[];
    /**
     * Optional. If time_zone_source is PROVIDED, this is the time zone to use for this report. Leave empty for any other time zone source. Time zone in IANA format. For example, "America/New_York".
     */
    timeZone?: string | null;
    /**
     * Optional. Where to get the time zone for this report. Defaults to using the Pacific time zone (PT). If source is PROVIDED, the time_zone field in the report definition must also set a time zone.
     */
    timeZoneSource?: string | null;
  }
  /**
   * Represents a single value in a report.
   */
  export interface Schema$ReportValue {
    /**
     * For boolean values.
     */
    boolValue?: boolean | null;
    /**
     * For bytes values.
     */
    bytesValue?: string | null;
    /**
     * For lists of double values.
     */
    doubleListValue?: Schema$DoubleList;
    /**
     * For double values.
     */
    doubleValue?: number | null;
    /**
     * For lists of integer values.
     */
    intListValue?: Schema$IntList;
    /**
     * For integer values.
     */
    intValue?: string | null;
    /**
     * For lists of string values.
     */
    stringListValue?: Schema$StringList;
    /**
     * For string values.
     */
    stringValue?: string | null;
  }
  /**
   * A row of report data.
   */
  export interface Schema$Row {
    /**
     * The order of the dimension values is the same as the order of the dimensions specified in the request.
     */
    dimensionValues?: Schema$ReportValue[];
    /**
     *  The length of the metric_value_groups field will be equal to the length of the date_ranges field in the fetch response. The metric_value_groups field is ordered such that each index corresponds to the date_range at the same index. For example, given date_ranges [x, y], metric_value_groups will have a length of two. The first entry in metric_value_groups represents the metrics for date x and the second entry in metric_value_groups represents the metrics for date y.
     */
    metricValueGroups?: Schema$MetricValueGroup[];
  }
  /**
   * `RunReport` operation metadata.
   */
  export interface Schema$RunReportMetadata {
    /**
     * An estimate of how close this report is to being completed. Will always be 100 for failed and completed reports.
     */
    percentComplete?: number | null;
    /**
     * The result's parent report.
     */
    report?: string | null;
  }
  /**
   * Request message for a running a report.
   */
  export interface Schema$RunReportRequest {}
  /**
   * Response message for a completed `RunReport` operation.
   */
  export interface Schema$RunReportResponse {
    /**
     * The unique name of the generated result. Use with `FetchReportResultRows` to retrieve data.
     */
    reportResult?: string | null;
  }
  /**
   * Represents a sorting in a report.
   */
  export interface Schema$Sort {
    /**
     * Optional. The sort order. If true the sort will be descending.
     */
    descending?: boolean | null;
    /**
     * Required. A field (dimension or metric) to sort by.
     */
    field?: Schema$Field;
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
   * A list of string values.
   */
  export interface Schema$StringList {
    /**
     * The values
     */
    values?: string[] | null;
  }
  /**
   * Generic targeting with string values.
   */
  export interface Schema$StringTargetingDimension {
    /**
     * Required. How the items in this list should be targeted.
     */
    selectionType?: string | null;
    /**
     * Required. The values specified.
     */
    values?: string[] | null;
  }
  /**
   * Defines targeting criteria for handling the IAB audience and content Taxonomy ID space.
   */
  export interface Schema$TaxonomyTargeting {
    /**
     * Optional. The list of excluded content taxonomy IDs.
     */
    excludedTaxonomyIds?: string[] | null;
    /**
     * Optional. The list of targeted content taxonomy IDs.
     */
    targetedTaxonomyIds?: string[] | null;
  }
  /**
   * Represents the size of the video player that can be targeted. Both width and height are required to be set to non-zero values.
   */
  export interface Schema$VideoPlayerSizeTargeting {
    /**
     * Required. The minimum height of the video player in pixels.
     */
    minimumHeight?: string | null;
    /**
     * Required. The minimum width of the video player in pixels.
     */
    minimumWidth?: string | null;
  }
  /**
   * Defines targeting criteria based on the video placement type, often corresponding to the IAB OpenRTB 'plcmt' field.
   */
  export interface Schema$VideoPlcmtTargeting {
    /**
     * Required. The selection type for the list of video plcmts.
     */
    selectionType?: string | null;
    /**
     * Required. The list of targeted video plcmts types. If empty, inventory will be targeted regardless of video plcmt type.
     */
    videoPlcmtTypes?: string[] | null;
  }

  export class Resource$Curators {
    context: APIRequestContext;
    curatedPackages: Resource$Curators$Curatedpackages;
    dataSegments: Resource$Curators$Datasegments;
    reports: Resource$Curators$Reports;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.curatedPackages = new Resource$Curators$Curatedpackages(
        this.context
      );
      this.dataSegments = new Resource$Curators$Datasegments(this.context);
      this.reports = new Resource$Curators$Reports(this.context);
    }
  }

  export class Resource$Curators$Curatedpackages {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Activates an existing curated package.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/curationpartners.googleapis.com
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
     * const curationpartners = google.curationpartners('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/curation-partners'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await curationpartners.curators.curatedPackages.activate({
     *     // Required. The name of the curated package to activate. Format: `curators/{accountId\}/curatedPackages/{curatedPackageId\}`
     *     name: 'curators/my-curator/curatedPackages/my-curatedPackage',
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
     *   //   "accessSettings": {},
     *   //   "createTime": "my_createTime",
     *   //   "curationFeeVisibility": "my_curationFeeVisibility",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "feeCpm": {},
     *   //   "floorPriceCpm": {},
     *   //   "millipercentOfMediaFee": "my_millipercentOfMediaFee",
     *   //   "name": "my_name",
     *   //   "state": "my_state",
     *   //   "targeting": {},
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
    activate(
      params: Params$Resource$Curators$Curatedpackages$Activate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    activate(
      params?: Params$Resource$Curators$Curatedpackages$Activate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CuratedPackage>>;
    activate(
      params: Params$Resource$Curators$Curatedpackages$Activate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    activate(
      params: Params$Resource$Curators$Curatedpackages$Activate,
      options: MethodOptions | BodyResponseCallback<Schema$CuratedPackage>,
      callback: BodyResponseCallback<Schema$CuratedPackage>
    ): void;
    activate(
      params: Params$Resource$Curators$Curatedpackages$Activate,
      callback: BodyResponseCallback<Schema$CuratedPackage>
    ): void;
    activate(callback: BodyResponseCallback<Schema$CuratedPackage>): void;
    activate(
      paramsOrCallback?:
        | Params$Resource$Curators$Curatedpackages$Activate
        | BodyResponseCallback<Schema$CuratedPackage>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CuratedPackage>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CuratedPackage>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CuratedPackage>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Curators$Curatedpackages$Activate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Curators$Curatedpackages$Activate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://curationpartners.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:activate').replace(
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
        createAPIRequest<Schema$CuratedPackage>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CuratedPackage>(parameters);
      }
    }

    /**
     * Creates a new curated package.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/curationpartners.googleapis.com
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
     * const curationpartners = google.curationpartners('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/curation-partners'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await curationpartners.curators.curatedPackages.create({
     *     // Required. The parent curator account where this curated package will be created. Format: `curators/{accountId\}`
     *     parent: 'curators/my-curator',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accessSettings": {},
     *       //   "createTime": "my_createTime",
     *       //   "curationFeeVisibility": "my_curationFeeVisibility",
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "feeCpm": {},
     *       //   "floorPriceCpm": {},
     *       //   "millipercentOfMediaFee": "my_millipercentOfMediaFee",
     *       //   "name": "my_name",
     *       //   "state": "my_state",
     *       //   "targeting": {},
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accessSettings": {},
     *   //   "createTime": "my_createTime",
     *   //   "curationFeeVisibility": "my_curationFeeVisibility",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "feeCpm": {},
     *   //   "floorPriceCpm": {},
     *   //   "millipercentOfMediaFee": "my_millipercentOfMediaFee",
     *   //   "name": "my_name",
     *   //   "state": "my_state",
     *   //   "targeting": {},
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
    create(
      params: Params$Resource$Curators$Curatedpackages$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Curators$Curatedpackages$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CuratedPackage>>;
    create(
      params: Params$Resource$Curators$Curatedpackages$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Curators$Curatedpackages$Create,
      options: MethodOptions | BodyResponseCallback<Schema$CuratedPackage>,
      callback: BodyResponseCallback<Schema$CuratedPackage>
    ): void;
    create(
      params: Params$Resource$Curators$Curatedpackages$Create,
      callback: BodyResponseCallback<Schema$CuratedPackage>
    ): void;
    create(callback: BodyResponseCallback<Schema$CuratedPackage>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Curators$Curatedpackages$Create
        | BodyResponseCallback<Schema$CuratedPackage>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CuratedPackage>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CuratedPackage>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CuratedPackage>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Curators$Curatedpackages$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Curators$Curatedpackages$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://curationpartners.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/curatedPackages').replace(
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
        createAPIRequest<Schema$CuratedPackage>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CuratedPackage>(parameters);
      }
    }

    /**
     * Deactivates an existing curated package.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/curationpartners.googleapis.com
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
     * const curationpartners = google.curationpartners('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/curation-partners'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await curationpartners.curators.curatedPackages.deactivate({
     *     // Required. The name of the curated package to deactivate. Format: `curators/{accountId\}/curatedPackages/{curatedPackageId\}`
     *     name: 'curators/my-curator/curatedPackages/my-curatedPackage',
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
     *   //   "accessSettings": {},
     *   //   "createTime": "my_createTime",
     *   //   "curationFeeVisibility": "my_curationFeeVisibility",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "feeCpm": {},
     *   //   "floorPriceCpm": {},
     *   //   "millipercentOfMediaFee": "my_millipercentOfMediaFee",
     *   //   "name": "my_name",
     *   //   "state": "my_state",
     *   //   "targeting": {},
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
    deactivate(
      params: Params$Resource$Curators$Curatedpackages$Deactivate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    deactivate(
      params?: Params$Resource$Curators$Curatedpackages$Deactivate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CuratedPackage>>;
    deactivate(
      params: Params$Resource$Curators$Curatedpackages$Deactivate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    deactivate(
      params: Params$Resource$Curators$Curatedpackages$Deactivate,
      options: MethodOptions | BodyResponseCallback<Schema$CuratedPackage>,
      callback: BodyResponseCallback<Schema$CuratedPackage>
    ): void;
    deactivate(
      params: Params$Resource$Curators$Curatedpackages$Deactivate,
      callback: BodyResponseCallback<Schema$CuratedPackage>
    ): void;
    deactivate(callback: BodyResponseCallback<Schema$CuratedPackage>): void;
    deactivate(
      paramsOrCallback?:
        | Params$Resource$Curators$Curatedpackages$Deactivate
        | BodyResponseCallback<Schema$CuratedPackage>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CuratedPackage>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CuratedPackage>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CuratedPackage>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Curators$Curatedpackages$Deactivate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Curators$Curatedpackages$Deactivate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://curationpartners.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:deactivate').replace(
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
        createAPIRequest<Schema$CuratedPackage>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CuratedPackage>(parameters);
      }
    }

    /**
     * Gets a curated package given its resource name.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/curationpartners.googleapis.com
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
     * const curationpartners = google.curationpartners('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/curation-partners'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await curationpartners.curators.curatedPackages.get({
     *     // Required. The name of the curated package to retrieve. Format: `curators/{accountId\}/curatedPackages/{curatedPackageId\}`
     *     name: 'curators/my-curator/curatedPackages/my-curatedPackage',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accessSettings": {},
     *   //   "createTime": "my_createTime",
     *   //   "curationFeeVisibility": "my_curationFeeVisibility",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "feeCpm": {},
     *   //   "floorPriceCpm": {},
     *   //   "millipercentOfMediaFee": "my_millipercentOfMediaFee",
     *   //   "name": "my_name",
     *   //   "state": "my_state",
     *   //   "targeting": {},
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
      params: Params$Resource$Curators$Curatedpackages$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Curators$Curatedpackages$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CuratedPackage>>;
    get(
      params: Params$Resource$Curators$Curatedpackages$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Curators$Curatedpackages$Get,
      options: MethodOptions | BodyResponseCallback<Schema$CuratedPackage>,
      callback: BodyResponseCallback<Schema$CuratedPackage>
    ): void;
    get(
      params: Params$Resource$Curators$Curatedpackages$Get,
      callback: BodyResponseCallback<Schema$CuratedPackage>
    ): void;
    get(callback: BodyResponseCallback<Schema$CuratedPackage>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Curators$Curatedpackages$Get
        | BodyResponseCallback<Schema$CuratedPackage>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CuratedPackage>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CuratedPackage>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CuratedPackage>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Curators$Curatedpackages$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Curators$Curatedpackages$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://curationpartners.googleapis.com/';
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
        createAPIRequest<Schema$CuratedPackage>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CuratedPackage>(parameters);
      }
    }

    /**
     * Lists curated packages owned by the specified curator.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/curationpartners.googleapis.com
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
     * const curationpartners = google.curationpartners('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/curation-partners'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await curationpartners.curators.curatedPackages.list({
     *     // Optional. Optional query string using the [Cloud API list filtering syntax](/authorized-buyers/apis/guides/list-filters). Supported columns for filtering are: * displayName * createTime * updateTime * state * feeCpm.currencyCode * feeCpm.units * feeCpm.nanos * floorPriceCpm.currencyCode * floorPriceCpm.units * floorPriceCpm.nanos
     *     filter: 'placeholder-value',
     *     // Optional. Requested page size. The server may return fewer results than requested. Max allowed page size is 500. If unspecified, the server will default to 500.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListCuratedPackages` call. Provide this to retrieve the subsequent page.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent curator account which owns this collection of curated packages. Format: `curators/{accountId\}`
     *     parent: 'curators/my-curator',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "curatedPackages": [],
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
      params: Params$Resource$Curators$Curatedpackages$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Curators$Curatedpackages$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListCuratedPackagesResponse>>;
    list(
      params: Params$Resource$Curators$Curatedpackages$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Curators$Curatedpackages$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListCuratedPackagesResponse>,
      callback: BodyResponseCallback<Schema$ListCuratedPackagesResponse>
    ): void;
    list(
      params: Params$Resource$Curators$Curatedpackages$List,
      callback: BodyResponseCallback<Schema$ListCuratedPackagesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListCuratedPackagesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Curators$Curatedpackages$List
        | BodyResponseCallback<Schema$ListCuratedPackagesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListCuratedPackagesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListCuratedPackagesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListCuratedPackagesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Curators$Curatedpackages$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Curators$Curatedpackages$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://curationpartners.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/curatedPackages').replace(
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
        createAPIRequest<Schema$ListCuratedPackagesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListCuratedPackagesResponse>(parameters);
      }
    }

    /**
     * Updates an existing curated package.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/curationpartners.googleapis.com
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
     * const curationpartners = google.curationpartners('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/curation-partners'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await curationpartners.curators.curatedPackages.patch({
     *     // Identifier. The unique resource name for the curated package. Format: `curators/{accountId\}/curatedPackages/{curatedPackageId\}`
     *     name: 'curators/my-curator/curatedPackages/my-curatedPackage',
     *     // Optional. List of fields to be updated. If empty or unspecified, the service will update all fields populated in the update request excluding the output only fields and primitive fields with default value. Note that explicit field mask is required in order to reset a primitive field back to its default value, for example, false for boolean fields, 0 for integer fields. A special field mask consisting of a single path "*" can be used to indicate full replacement (the equivalent of PUT method), updatable fields unset or unspecified in the input will be cleared or set to default value. Output only fields will be ignored regardless of the value of updateMask.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accessSettings": {},
     *       //   "createTime": "my_createTime",
     *       //   "curationFeeVisibility": "my_curationFeeVisibility",
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "feeCpm": {},
     *       //   "floorPriceCpm": {},
     *       //   "millipercentOfMediaFee": "my_millipercentOfMediaFee",
     *       //   "name": "my_name",
     *       //   "state": "my_state",
     *       //   "targeting": {},
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accessSettings": {},
     *   //   "createTime": "my_createTime",
     *   //   "curationFeeVisibility": "my_curationFeeVisibility",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "feeCpm": {},
     *   //   "floorPriceCpm": {},
     *   //   "millipercentOfMediaFee": "my_millipercentOfMediaFee",
     *   //   "name": "my_name",
     *   //   "state": "my_state",
     *   //   "targeting": {},
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
    patch(
      params: Params$Resource$Curators$Curatedpackages$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Curators$Curatedpackages$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CuratedPackage>>;
    patch(
      params: Params$Resource$Curators$Curatedpackages$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Curators$Curatedpackages$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$CuratedPackage>,
      callback: BodyResponseCallback<Schema$CuratedPackage>
    ): void;
    patch(
      params: Params$Resource$Curators$Curatedpackages$Patch,
      callback: BodyResponseCallback<Schema$CuratedPackage>
    ): void;
    patch(callback: BodyResponseCallback<Schema$CuratedPackage>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Curators$Curatedpackages$Patch
        | BodyResponseCallback<Schema$CuratedPackage>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CuratedPackage>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CuratedPackage>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CuratedPackage>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Curators$Curatedpackages$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Curators$Curatedpackages$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://curationpartners.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$CuratedPackage>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CuratedPackage>(parameters);
      }
    }
  }

  export interface Params$Resource$Curators$Curatedpackages$Activate extends StandardParameters {
    /**
     * Required. The name of the curated package to activate. Format: `curators/{accountId\}/curatedPackages/{curatedPackageId\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ActivateCuratedPackageRequest;
  }
  export interface Params$Resource$Curators$Curatedpackages$Create extends StandardParameters {
    /**
     * Required. The parent curator account where this curated package will be created. Format: `curators/{accountId\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CuratedPackage;
  }
  export interface Params$Resource$Curators$Curatedpackages$Deactivate extends StandardParameters {
    /**
     * Required. The name of the curated package to deactivate. Format: `curators/{accountId\}/curatedPackages/{curatedPackageId\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DeactivateCuratedPackageRequest;
  }
  export interface Params$Resource$Curators$Curatedpackages$Get extends StandardParameters {
    /**
     * Required. The name of the curated package to retrieve. Format: `curators/{accountId\}/curatedPackages/{curatedPackageId\}`
     */
    name?: string;
  }
  export interface Params$Resource$Curators$Curatedpackages$List extends StandardParameters {
    /**
     * Optional. Optional query string using the [Cloud API list filtering syntax](/authorized-buyers/apis/guides/list-filters). Supported columns for filtering are: * displayName * createTime * updateTime * state * feeCpm.currencyCode * feeCpm.units * feeCpm.nanos * floorPriceCpm.currencyCode * floorPriceCpm.units * floorPriceCpm.nanos
     */
    filter?: string;
    /**
     * Optional. Requested page size. The server may return fewer results than requested. Max allowed page size is 500. If unspecified, the server will default to 500.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListCuratedPackages` call. Provide this to retrieve the subsequent page.
     */
    pageToken?: string;
    /**
     * Required. The parent curator account which owns this collection of curated packages. Format: `curators/{accountId\}`
     */
    parent?: string;
  }
  export interface Params$Resource$Curators$Curatedpackages$Patch extends StandardParameters {
    /**
     * Identifier. The unique resource name for the curated package. Format: `curators/{accountId\}/curatedPackages/{curatedPackageId\}`
     */
    name?: string;
    /**
     * Optional. List of fields to be updated. If empty or unspecified, the service will update all fields populated in the update request excluding the output only fields and primitive fields with default value. Note that explicit field mask is required in order to reset a primitive field back to its default value, for example, false for boolean fields, 0 for integer fields. A special field mask consisting of a single path "*" can be used to indicate full replacement (the equivalent of PUT method), updatable fields unset or unspecified in the input will be cleared or set to default value. Output only fields will be ignored regardless of the value of updateMask.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CuratedPackage;
  }

  export class Resource$Curators$Datasegments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Activates a data segment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/curationpartners.googleapis.com
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
     * const curationpartners = google.curationpartners('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/curation-partners'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await curationpartners.curators.dataSegments.activate({
     *     // Required. Name of data segment to activate. Format: `curators/{accountId\}/dataSegments/{curatorDataSegmentId\}`
     *     name: 'curators/my-curator/dataSegments/my-dataSegment',
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
     *   //   "cpmFee": {},
     *   //   "createTime": "my_createTime",
     *   //   "millipercentOfMediaFee": "my_millipercentOfMediaFee",
     *   //   "name": "my_name",
     *   //   "state": "my_state",
     *   //   "updateTime": "my_updateTime",
     *   //   "userListId": "my_userListId"
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
    activate(
      params: Params$Resource$Curators$Datasegments$Activate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    activate(
      params?: Params$Resource$Curators$Datasegments$Activate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DataSegment>>;
    activate(
      params: Params$Resource$Curators$Datasegments$Activate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    activate(
      params: Params$Resource$Curators$Datasegments$Activate,
      options: MethodOptions | BodyResponseCallback<Schema$DataSegment>,
      callback: BodyResponseCallback<Schema$DataSegment>
    ): void;
    activate(
      params: Params$Resource$Curators$Datasegments$Activate,
      callback: BodyResponseCallback<Schema$DataSegment>
    ): void;
    activate(callback: BodyResponseCallback<Schema$DataSegment>): void;
    activate(
      paramsOrCallback?:
        | Params$Resource$Curators$Datasegments$Activate
        | BodyResponseCallback<Schema$DataSegment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DataSegment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DataSegment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$DataSegment>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Curators$Datasegments$Activate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Curators$Datasegments$Activate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://curationpartners.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:activate').replace(
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
        createAPIRequest<Schema$DataSegment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DataSegment>(parameters);
      }
    }

    /**
     * Creates a data segment owned by the listed curator. The data segment will be created in the `ACTIVE` state, meaning it will be immediately available for buyers to use in preferred deals, private auction deals, and auction packages.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/curationpartners.googleapis.com
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
     * const curationpartners = google.curationpartners('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/curation-partners'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await curationpartners.curators.dataSegments.create({
     *     // Required. The parent resource where this data segment will be created. Format: `curators/{accountId\}`
     *     parent: 'curators/my-curator',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "cpmFee": {},
     *       //   "createTime": "my_createTime",
     *       //   "millipercentOfMediaFee": "my_millipercentOfMediaFee",
     *       //   "name": "my_name",
     *       //   "state": "my_state",
     *       //   "updateTime": "my_updateTime",
     *       //   "userListId": "my_userListId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cpmFee": {},
     *   //   "createTime": "my_createTime",
     *   //   "millipercentOfMediaFee": "my_millipercentOfMediaFee",
     *   //   "name": "my_name",
     *   //   "state": "my_state",
     *   //   "updateTime": "my_updateTime",
     *   //   "userListId": "my_userListId"
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
      params: Params$Resource$Curators$Datasegments$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Curators$Datasegments$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DataSegment>>;
    create(
      params: Params$Resource$Curators$Datasegments$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Curators$Datasegments$Create,
      options: MethodOptions | BodyResponseCallback<Schema$DataSegment>,
      callback: BodyResponseCallback<Schema$DataSegment>
    ): void;
    create(
      params: Params$Resource$Curators$Datasegments$Create,
      callback: BodyResponseCallback<Schema$DataSegment>
    ): void;
    create(callback: BodyResponseCallback<Schema$DataSegment>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Curators$Datasegments$Create
        | BodyResponseCallback<Schema$DataSegment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DataSegment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DataSegment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$DataSegment>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Curators$Datasegments$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Curators$Datasegments$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://curationpartners.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dataSegments').replace(
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
        createAPIRequest<Schema$DataSegment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DataSegment>(parameters);
      }
    }

    /**
     * Deactivates a data segment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/curationpartners.googleapis.com
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
     * const curationpartners = google.curationpartners('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/curation-partners'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await curationpartners.curators.dataSegments.deactivate({
     *     // Required. Name of data segment to deactivate. Format: `curators/{accountId\}/dataSegments/{curatorDataSegmentId\}`
     *     name: 'curators/my-curator/dataSegments/my-dataSegment',
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
     *   //   "cpmFee": {},
     *   //   "createTime": "my_createTime",
     *   //   "millipercentOfMediaFee": "my_millipercentOfMediaFee",
     *   //   "name": "my_name",
     *   //   "state": "my_state",
     *   //   "updateTime": "my_updateTime",
     *   //   "userListId": "my_userListId"
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
    deactivate(
      params: Params$Resource$Curators$Datasegments$Deactivate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    deactivate(
      params?: Params$Resource$Curators$Datasegments$Deactivate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DataSegment>>;
    deactivate(
      params: Params$Resource$Curators$Datasegments$Deactivate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    deactivate(
      params: Params$Resource$Curators$Datasegments$Deactivate,
      options: MethodOptions | BodyResponseCallback<Schema$DataSegment>,
      callback: BodyResponseCallback<Schema$DataSegment>
    ): void;
    deactivate(
      params: Params$Resource$Curators$Datasegments$Deactivate,
      callback: BodyResponseCallback<Schema$DataSegment>
    ): void;
    deactivate(callback: BodyResponseCallback<Schema$DataSegment>): void;
    deactivate(
      paramsOrCallback?:
        | Params$Resource$Curators$Datasegments$Deactivate
        | BodyResponseCallback<Schema$DataSegment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DataSegment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DataSegment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$DataSegment>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Curators$Datasegments$Deactivate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Curators$Datasegments$Deactivate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://curationpartners.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:deactivate').replace(
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
        createAPIRequest<Schema$DataSegment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DataSegment>(parameters);
      }
    }

    /**
     * Gets a data segment given its name.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/curationpartners.googleapis.com
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
     * const curationpartners = google.curationpartners('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/curation-partners'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await curationpartners.curators.dataSegments.get({
     *     // Required. Name of data segment to get. Format: `curators/{accountId\}/dataSegments/{curatorDataSegmentId\}`
     *     name: 'curators/my-curator/dataSegments/my-dataSegment',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cpmFee": {},
     *   //   "createTime": "my_createTime",
     *   //   "millipercentOfMediaFee": "my_millipercentOfMediaFee",
     *   //   "name": "my_name",
     *   //   "state": "my_state",
     *   //   "updateTime": "my_updateTime",
     *   //   "userListId": "my_userListId"
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
      params: Params$Resource$Curators$Datasegments$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Curators$Datasegments$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DataSegment>>;
    get(
      params: Params$Resource$Curators$Datasegments$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Curators$Datasegments$Get,
      options: MethodOptions | BodyResponseCallback<Schema$DataSegment>,
      callback: BodyResponseCallback<Schema$DataSegment>
    ): void;
    get(
      params: Params$Resource$Curators$Datasegments$Get,
      callback: BodyResponseCallback<Schema$DataSegment>
    ): void;
    get(callback: BodyResponseCallback<Schema$DataSegment>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Curators$Datasegments$Get
        | BodyResponseCallback<Schema$DataSegment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DataSegment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DataSegment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$DataSegment>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Curators$Datasegments$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Curators$Datasegments$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://curationpartners.googleapis.com/';
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
        createAPIRequest<Schema$DataSegment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DataSegment>(parameters);
      }
    }

    /**
     * List the data segments owned by a curator.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/curationpartners.googleapis.com
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
     * const curationpartners = google.curationpartners('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/curation-partners'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await curationpartners.curators.dataSegments.list({
     *     // Optional. Requested page size. The server may return fewer results than requested. Max allowed page size is 500. If unspecified, the server will default to 500.
     *     pageSize: 'placeholder-value',
     *     // Optional. The page token as returned. ListDataSegmentsResponse.nextPageToken
     *     pageToken: 'placeholder-value',
     *     // Required. Name of the parent curator that can access the data segment. Format: `curators/{accountId\}`
     *     parent: 'curators/my-curator',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dataSegments": [],
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
      params: Params$Resource$Curators$Datasegments$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Curators$Datasegments$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListDataSegmentsResponse>>;
    list(
      params: Params$Resource$Curators$Datasegments$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Curators$Datasegments$List,
      options:
        MethodOptions | BodyResponseCallback<Schema$ListDataSegmentsResponse>,
      callback: BodyResponseCallback<Schema$ListDataSegmentsResponse>
    ): void;
    list(
      params: Params$Resource$Curators$Datasegments$List,
      callback: BodyResponseCallback<Schema$ListDataSegmentsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListDataSegmentsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Curators$Datasegments$List
        | BodyResponseCallback<Schema$ListDataSegmentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDataSegmentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDataSegmentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListDataSegmentsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Curators$Datasegments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Curators$Datasegments$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://curationpartners.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dataSegments').replace(
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
        createAPIRequest<Schema$ListDataSegmentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDataSegmentsResponse>(parameters);
      }
    }

    /**
     * Updates a data segment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/curationpartners.googleapis.com
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
     * const curationpartners = google.curationpartners('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/curation-partners'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await curationpartners.curators.dataSegments.patch({
     *     // Immutable. Identifier. The unique identifier for the data segment. Account ID corresponds to the account ID that created the segment. Format: `curators/{curatorAccountId\}/dataSegments/{curatorDataSegmentId\}`
     *     name: 'curators/my-curator/dataSegments/my-dataSegment',
     *     // Optional. List of fields to be updated. If empty or unspecified, the service will update all fields populated in the update request excluding the output only fields and primitive fields with default value. Note that explicit field mask is required in order to reset a primitive field back to its default value, for example, false for boolean fields, 0 for integer fields. A special field mask consisting of a single path "*" can be used to indicate full replacement(the equivalent of PUT method), updatable fields unset or unspecified in the input will be cleared or set to default value. Output only fields will be ignored regardless of the value of updateMask.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "cpmFee": {},
     *       //   "createTime": "my_createTime",
     *       //   "millipercentOfMediaFee": "my_millipercentOfMediaFee",
     *       //   "name": "my_name",
     *       //   "state": "my_state",
     *       //   "updateTime": "my_updateTime",
     *       //   "userListId": "my_userListId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cpmFee": {},
     *   //   "createTime": "my_createTime",
     *   //   "millipercentOfMediaFee": "my_millipercentOfMediaFee",
     *   //   "name": "my_name",
     *   //   "state": "my_state",
     *   //   "updateTime": "my_updateTime",
     *   //   "userListId": "my_userListId"
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
      params: Params$Resource$Curators$Datasegments$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Curators$Datasegments$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DataSegment>>;
    patch(
      params: Params$Resource$Curators$Datasegments$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Curators$Datasegments$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$DataSegment>,
      callback: BodyResponseCallback<Schema$DataSegment>
    ): void;
    patch(
      params: Params$Resource$Curators$Datasegments$Patch,
      callback: BodyResponseCallback<Schema$DataSegment>
    ): void;
    patch(callback: BodyResponseCallback<Schema$DataSegment>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Curators$Datasegments$Patch
        | BodyResponseCallback<Schema$DataSegment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DataSegment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DataSegment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$DataSegment>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Curators$Datasegments$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Curators$Datasegments$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://curationpartners.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$DataSegment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DataSegment>(parameters);
      }
    }
  }

  export interface Params$Resource$Curators$Datasegments$Activate extends StandardParameters {
    /**
     * Required. Name of data segment to activate. Format: `curators/{accountId\}/dataSegments/{curatorDataSegmentId\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ActivateDataSegmentRequest;
  }
  export interface Params$Resource$Curators$Datasegments$Create extends StandardParameters {
    /**
     * Required. The parent resource where this data segment will be created. Format: `curators/{accountId\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DataSegment;
  }
  export interface Params$Resource$Curators$Datasegments$Deactivate extends StandardParameters {
    /**
     * Required. Name of data segment to deactivate. Format: `curators/{accountId\}/dataSegments/{curatorDataSegmentId\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DeactivateDataSegmentRequest;
  }
  export interface Params$Resource$Curators$Datasegments$Get extends StandardParameters {
    /**
     * Required. Name of data segment to get. Format: `curators/{accountId\}/dataSegments/{curatorDataSegmentId\}`
     */
    name?: string;
  }
  export interface Params$Resource$Curators$Datasegments$List extends StandardParameters {
    /**
     * Optional. Requested page size. The server may return fewer results than requested. Max allowed page size is 500. If unspecified, the server will default to 500.
     */
    pageSize?: number;
    /**
     * Optional. The page token as returned. ListDataSegmentsResponse.nextPageToken
     */
    pageToken?: string;
    /**
     * Required. Name of the parent curator that can access the data segment. Format: `curators/{accountId\}`
     */
    parent?: string;
  }
  export interface Params$Resource$Curators$Datasegments$Patch extends StandardParameters {
    /**
     * Immutable. Identifier. The unique identifier for the data segment. Account ID corresponds to the account ID that created the segment. Format: `curators/{curatorAccountId\}/dataSegments/{curatorDataSegmentId\}`
     */
    name?: string;
    /**
     * Optional. List of fields to be updated. If empty or unspecified, the service will update all fields populated in the update request excluding the output only fields and primitive fields with default value. Note that explicit field mask is required in order to reset a primitive field back to its default value, for example, false for boolean fields, 0 for integer fields. A special field mask consisting of a single path "*" can be used to indicate full replacement(the equivalent of PUT method), updatable fields unset or unspecified in the input will be cleared or set to default value. Output only fields will be ignored regardless of the value of updateMask.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DataSegment;
  }

  export class Resource$Curators$Reports {
    context: APIRequestContext;
    operations: Resource$Curators$Reports$Operations;
    results: Resource$Curators$Reports$Results;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations = new Resource$Curators$Reports$Operations(this.context);
      this.results = new Resource$Curators$Reports$Results(this.context);
    }

    /**
     * Creates a `Report` object.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/curationpartners.googleapis.com
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
     * const curationpartners = google.curationpartners('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/curation-partners'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await curationpartners.curators.reports.create({
     *     // Required. The parent resource where this `Report` will be created. Format: `curators/{account_id\}`
     *     parent: 'curators/my-curator',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "displayName": "my_displayName",
     *       //   "locale": "my_locale",
     *       //   "name": "my_name",
     *       //   "reportDefinition": {},
     *       //   "reportId": "my_reportId",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "locale": "my_locale",
     *   //   "name": "my_name",
     *   //   "reportDefinition": {},
     *   //   "reportId": "my_reportId",
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
    create(
      params: Params$Resource$Curators$Reports$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Curators$Reports$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Report>>;
    create(
      params: Params$Resource$Curators$Reports$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Curators$Reports$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Report>,
      callback: BodyResponseCallback<Schema$Report>
    ): void;
    create(
      params: Params$Resource$Curators$Reports$Create,
      callback: BodyResponseCallback<Schema$Report>
    ): void;
    create(callback: BodyResponseCallback<Schema$Report>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Curators$Reports$Create
        | BodyResponseCallback<Schema$Report>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Report>
        | BodyResponseCallback<Readable>,
      callback?:
        BodyResponseCallback<Schema$Report> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Report>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Curators$Reports$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Curators$Reports$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://curationpartners.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/reports').replace(
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
        createAPIRequest<Schema$Report>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Report>(parameters);
      }
    }

    /**
     * Deletes a `Report` object.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/curationpartners.googleapis.com
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
     * const curationpartners = google.curationpartners('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/curation-partners'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await curationpartners.curators.reports.delete({
     *     // Required. Resource name of the report to delete. Format: `curators/{account_id\}/reports/{report_id\}`
     *     name: 'curators/my-curator/reports/my-report',
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
      params: Params$Resource$Curators$Reports$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Curators$Reports$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Curators$Reports$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Curators$Reports$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Curators$Reports$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Curators$Reports$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        BodyResponseCallback<Schema$Empty> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Curators$Reports$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Curators$Reports$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://curationpartners.googleapis.com/';
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Retrieves a `Report` object.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/curationpartners.googleapis.com
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
     * const curationpartners = google.curationpartners('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/curation-partners'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await curationpartners.curators.reports.get({
     *     // Required. The resource name of the report. Format: `curators/{account_id\}/reports/{report_id\}`
     *     name: 'curators/my-curator/reports/my-report',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "locale": "my_locale",
     *   //   "name": "my_name",
     *   //   "reportDefinition": {},
     *   //   "reportId": "my_reportId",
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
      params: Params$Resource$Curators$Reports$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Curators$Reports$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Report>>;
    get(
      params: Params$Resource$Curators$Reports$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Curators$Reports$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Report>,
      callback: BodyResponseCallback<Schema$Report>
    ): void;
    get(
      params: Params$Resource$Curators$Reports$Get,
      callback: BodyResponseCallback<Schema$Report>
    ): void;
    get(callback: BodyResponseCallback<Schema$Report>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Curators$Reports$Get
        | BodyResponseCallback<Schema$Report>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Report>
        | BodyResponseCallback<Readable>,
      callback?:
        BodyResponseCallback<Schema$Report> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Report>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Curators$Reports$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Curators$Reports$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://curationpartners.googleapis.com/';
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
        createAPIRequest<Schema$Report>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Report>(parameters);
      }
    }

    /**
     * Lists `Report` objects.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/curationpartners.googleapis.com
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
     * const curationpartners = google.curationpartners('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/curation-partners'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await curationpartners.curators.reports.list({
     *     // Optional. Expression to filter the response. See syntax details at https://developers.google.com/ad-manager/api/beta/filters
     *     filter: 'placeholder-value',
     *     // Optional. Expression to specify sorting order. See syntax details at https://developers.google.com/ad-manager/api/beta/filters#order
     *     orderBy: 'placeholder-value',
     *     // Optional. The maximum number of `Reports` to return. The service may return fewer than this value. If unspecified, at most 50 `Reports` will be returned. The maximum value is 1000; values greater than 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListReports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListReports` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent, which owns this collection of reports. Format: `curators/{account_id\}`
     *     parent: 'curators/my-curator',
     *     // Optional. Number of individual resources to skip while paginating.
     *     skip: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "reports": [],
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
      params: Params$Resource$Curators$Reports$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Curators$Reports$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListReportsResponse>>;
    list(
      params: Params$Resource$Curators$Reports$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Curators$Reports$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListReportsResponse>,
      callback: BodyResponseCallback<Schema$ListReportsResponse>
    ): void;
    list(
      params: Params$Resource$Curators$Reports$List,
      callback: BodyResponseCallback<Schema$ListReportsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListReportsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Curators$Reports$List
        | BodyResponseCallback<Schema$ListReportsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListReportsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListReportsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListReportsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Curators$Reports$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Curators$Reports$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://curationpartners.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/reports').replace(
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
        createAPIRequest<Schema$ListReportsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListReportsResponse>(parameters);
      }
    }

    /**
     * Updates a `Report` object.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/curationpartners.googleapis.com
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
     * const curationpartners = google.curationpartners('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/curation-partners'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await curationpartners.curators.reports.patch({
     *     // Identifier. The resource name of the report. Report resource name have the form: `curators/{account_id\}/reports/{report_id\}`
     *     name: 'curators/my-curator/reports/my-report',
     *     // Optional. The list of fields to update.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "displayName": "my_displayName",
     *       //   "locale": "my_locale",
     *       //   "name": "my_name",
     *       //   "reportDefinition": {},
     *       //   "reportId": "my_reportId",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "locale": "my_locale",
     *   //   "name": "my_name",
     *   //   "reportDefinition": {},
     *   //   "reportId": "my_reportId",
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
    patch(
      params: Params$Resource$Curators$Reports$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Curators$Reports$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Report>>;
    patch(
      params: Params$Resource$Curators$Reports$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Curators$Reports$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Report>,
      callback: BodyResponseCallback<Schema$Report>
    ): void;
    patch(
      params: Params$Resource$Curators$Reports$Patch,
      callback: BodyResponseCallback<Schema$Report>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Report>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Curators$Reports$Patch
        | BodyResponseCallback<Schema$Report>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Report>
        | BodyResponseCallback<Readable>,
      callback?:
        BodyResponseCallback<Schema$Report> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Report>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Curators$Reports$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Curators$Reports$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://curationpartners.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Report>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Report>(parameters);
      }
    }

    /**
     * Initiates the execution of an existing report asynchronously. Users can get the report by polling this operation using `OperationsService.GetOperation`. Poll every 5 seconds initially, with an exponential backoff. Once a report is complete, the operation will contain a `RunReportResponse` in its response field containing a report_result that can be passed to the `FetchReportResultRows` method to retrieve the report data.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/curationpartners.googleapis.com
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
     * const curationpartners = google.curationpartners('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/curation-partners'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await curationpartners.curators.reports.run({
     *     // Required. The report to run. Format: `curators/{account_id\}/reports/{report_id\}`
     *     name: 'curators/my-curator/reports/my-report',
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
    run(
      params: Params$Resource$Curators$Reports$Run,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    run(
      params?: Params$Resource$Curators$Reports$Run,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    run(
      params: Params$Resource$Curators$Reports$Run,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    run(
      params: Params$Resource$Curators$Reports$Run,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    run(
      params: Params$Resource$Curators$Reports$Run,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    run(callback: BodyResponseCallback<Schema$Operation>): void;
    run(
      paramsOrCallback?:
        | Params$Resource$Curators$Reports$Run
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        BodyResponseCallback<Schema$Operation> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Curators$Reports$Run;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Curators$Reports$Run;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://curationpartners.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:run').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Curators$Reports$Create extends StandardParameters {
    /**
     * Required. The parent resource where this `Report` will be created. Format: `curators/{account_id\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Report;
  }
  export interface Params$Resource$Curators$Reports$Delete extends StandardParameters {
    /**
     * Required. Resource name of the report to delete. Format: `curators/{account_id\}/reports/{report_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Curators$Reports$Get extends StandardParameters {
    /**
     * Required. The resource name of the report. Format: `curators/{account_id\}/reports/{report_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Curators$Reports$List extends StandardParameters {
    /**
     * Optional. Expression to filter the response. See syntax details at https://developers.google.com/ad-manager/api/beta/filters
     */
    filter?: string;
    /**
     * Optional. Expression to specify sorting order. See syntax details at https://developers.google.com/ad-manager/api/beta/filters#order
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of `Reports` to return. The service may return fewer than this value. If unspecified, at most 50 `Reports` will be returned. The maximum value is 1000; values greater than 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListReports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListReports` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent, which owns this collection of reports. Format: `curators/{account_id\}`
     */
    parent?: string;
    /**
     * Optional. Number of individual resources to skip while paginating.
     */
    skip?: number;
  }
  export interface Params$Resource$Curators$Reports$Patch extends StandardParameters {
    /**
     * Identifier. The resource name of the report. Report resource name have the form: `curators/{account_id\}/reports/{report_id\}`
     */
    name?: string;
    /**
     * Optional. The list of fields to update.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Report;
  }
  export interface Params$Resource$Curators$Reports$Run extends StandardParameters {
    /**
     * Required. The report to run. Format: `curators/{account_id\}/reports/{report_id\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RunReportRequest;
  }

  export class Resource$Curators$Reports$Operations {
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
     * //   https://console.developers.google.com/apis/api/curationpartners.googleapis.com
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
     * const curationpartners = google.curationpartners('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/curation-partners'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await curationpartners.curators.reports.operations.get({
     *     // The name of the operation resource.
     *     name: 'curators/my-curator/reports/my-report/operations/my-operation',
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
    get(
      params: Params$Resource$Curators$Reports$Operations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Curators$Reports$Operations$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    get(
      params: Params$Resource$Curators$Reports$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Curators$Reports$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Curators$Reports$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Curators$Reports$Operations$Get
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        BodyResponseCallback<Schema$Operation> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Curators$Reports$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Curators$Reports$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://curationpartners.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Curators$Reports$Operations$Get extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }

  export class Resource$Curators$Reports$Results {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns the result rows from a completed report. The caller must have previously called `RunReport` and waited for that operation to complete. The rows will be returned according to the order specified by the `sorts` member of the report definition.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/curationpartners.googleapis.com
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
     * const curationpartners = google.curationpartners('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/curation-partners'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await curationpartners.curators.reports.results.fetchRows({
     *     // The report result being fetched. Format: `curators/{account_id\}/reports/{report_id\}/results/{report_result_id\}`
     *     name: 'curators/my-curator/reports/my-report/results/my-result',
     *     // Optional. The maximum number of rows to return. The service may return fewer than this value. If unspecified, at most 1,000 rows will be returned. The maximum value is 10,000; values greater than 10,000 will be reduced to 10,000.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `FetchReportResultRows` call. Provide this to retrieve the second and subsequent batches of rows.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dateRanges": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "rows": [],
     *   //   "runTime": "my_runTime",
     *   //   "totalRowCount": 0
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
    fetchRows(
      params: Params$Resource$Curators$Reports$Results$Fetchrows,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    fetchRows(
      params?: Params$Resource$Curators$Reports$Results$Fetchrows,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$FetchReportResultRowsResponse>>;
    fetchRows(
      params: Params$Resource$Curators$Reports$Results$Fetchrows,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    fetchRows(
      params: Params$Resource$Curators$Reports$Results$Fetchrows,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FetchReportResultRowsResponse>,
      callback: BodyResponseCallback<Schema$FetchReportResultRowsResponse>
    ): void;
    fetchRows(
      params: Params$Resource$Curators$Reports$Results$Fetchrows,
      callback: BodyResponseCallback<Schema$FetchReportResultRowsResponse>
    ): void;
    fetchRows(
      callback: BodyResponseCallback<Schema$FetchReportResultRowsResponse>
    ): void;
    fetchRows(
      paramsOrCallback?:
        | Params$Resource$Curators$Reports$Results$Fetchrows
        | BodyResponseCallback<Schema$FetchReportResultRowsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FetchReportResultRowsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FetchReportResultRowsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$FetchReportResultRowsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Curators$Reports$Results$Fetchrows;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Curators$Reports$Results$Fetchrows;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://curationpartners.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:fetchRows').replace(
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
        createAPIRequest<Schema$FetchReportResultRowsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FetchReportResultRowsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Curators$Reports$Results$Fetchrows extends StandardParameters {
    /**
     * The report result being fetched. Format: `curators/{account_id\}/reports/{report_id\}/results/{report_result_id\}`
     */
    name?: string;
    /**
     * Optional. The maximum number of rows to return. The service may return fewer than this value. If unspecified, at most 1,000 rows will be returned. The maximum value is 10,000; values greater than 10,000 will be reduced to 10,000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `FetchReportResultRows` call. Provide this to retrieve the second and subsequent batches of rows.
     */
    pageToken?: string;
  }

  export class Resource$Mediaplanners {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists all media planner accounts that the caller has access to. For curators, this will return all media planners that have accepted curator terms. For other accounts, attempting to list media planners will return an error.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/curationpartners.googleapis.com
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
     * const curationpartners = google.curationpartners('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/curation-partners'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await curationpartners.mediaPlanners.list({
     *     // Optional query string using the [Cloud API list filtering syntax](/authorized-buyers/apis/guides/list-filters). Supported columns for filtering are: * `name` * `displayName` * `ancestorNames`
     *     filter: 'placeholder-value',
     *     // The maximum number of media planners to return. If unspecified, at most 100 media planners will be returned. The maximum value is 500; values above 500 will be coerced to 500.
     *     pageSize: 'placeholder-value',
     *     // Optional. A token identifying a page of results the server should return.This value is received from a previous `ListMediaPlanners` call in ListMediaPlannersResponse.nextPageToken.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "mediaPlanners": [],
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
      params: Params$Resource$Mediaplanners$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Mediaplanners$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListMediaPlannersResponse>>;
    list(
      params: Params$Resource$Mediaplanners$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Mediaplanners$List,
      options:
        MethodOptions | BodyResponseCallback<Schema$ListMediaPlannersResponse>,
      callback: BodyResponseCallback<Schema$ListMediaPlannersResponse>
    ): void;
    list(
      params: Params$Resource$Mediaplanners$List,
      callback: BodyResponseCallback<Schema$ListMediaPlannersResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListMediaPlannersResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Mediaplanners$List
        | BodyResponseCallback<Schema$ListMediaPlannersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListMediaPlannersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListMediaPlannersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListMediaPlannersResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Mediaplanners$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Mediaplanners$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://curationpartners.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/mediaPlanners').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListMediaPlannersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListMediaPlannersResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Mediaplanners$List extends StandardParameters {
    /**
     * Optional query string using the [Cloud API list filtering syntax](/authorized-buyers/apis/guides/list-filters). Supported columns for filtering are: * `name` * `displayName` * `ancestorNames`
     */
    filter?: string;
    /**
     * The maximum number of media planners to return. If unspecified, at most 100 media planners will be returned. The maximum value is 500; values above 500 will be coerced to 500.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results the server should return.This value is received from a previous `ListMediaPlanners` call in ListMediaPlannersResponse.nextPageToken.
     */
    pageToken?: string;
  }
}
