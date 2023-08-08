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

export namespace analyticsadmin_v1alpha {
  export interface Options extends GlobalOptions {
    version: 'v1alpha';
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
   * Google Analytics Admin API
   *
   * Manage properties in Google Analytics. Warning: Creating multiple Customer Applications, Accounts, or Projects to simulate or act as a single Customer Application, Account, or Project (respectively) or to circumvent Service-specific usage limits or quotas is a direct violation of Google Cloud Platform Terms of Service as well as Google APIs Terms of Service. These actions can result in immediate termination of your GCP project(s) without any warning.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const analyticsadmin = google.analyticsadmin('v1alpha');
   * ```
   */
  export class Analyticsadmin {
    context: APIRequestContext;
    accounts: Resource$Accounts;
    accountSummaries: Resource$Accountsummaries;
    properties: Resource$Properties;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.accounts = new Resource$Accounts(this.context);
      this.accountSummaries = new Resource$Accountsummaries(this.context);
      this.properties = new Resource$Properties(this.context);
    }
  }

  /**
   * To express that the result needs to be between two numbers (inclusive).
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAccessBetweenFilter {
    /**
     * Begins with this number.
     */
    fromValue?: Schema$GoogleAnalyticsAdminV1alphaNumericValue;
    /**
     * Ends with this number.
     */
    toValue?: Schema$GoogleAnalyticsAdminV1alphaNumericValue;
  }
  /**
   * A binding of a user to a set of roles.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAccessBinding {
    /**
     * Output only. Resource name of this binding. Format: accounts/{account\}/accessBindings/{access_binding\} or properties/{property\}/accessBindings/{access_binding\} Example: "accounts/100/accessBindings/200"
     */
    name?: string | null;
    /**
     * A list of roles for to grant to the parent resource. Valid values: predefinedRoles/viewer predefinedRoles/analyst predefinedRoles/editor predefinedRoles/admin predefinedRoles/no-cost-data predefinedRoles/no-revenue-data For users, if an empty list of roles is set, this AccessBinding will be deleted.
     */
    roles?: string[] | null;
    /**
     * If set, the email address of the user to set roles for. Format: "someuser@gmail.com"
     */
    user?: string | null;
  }
  /**
   * A contiguous range of days: startDate, startDate + 1, ..., endDate.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAccessDateRange {
    /**
     * The inclusive end date for the query in the format `YYYY-MM-DD`. Cannot be before `startDate`. The format `NdaysAgo`, `yesterday`, or `today` is also accepted, and in that case, the date is inferred based on the current time in the request's time zone.
     */
    endDate?: string | null;
    /**
     * The inclusive start date for the query in the format `YYYY-MM-DD`. Cannot be after `endDate`. The format `NdaysAgo`, `yesterday`, or `today` is also accepted, and in that case, the date is inferred based on the current time in the request's time zone.
     */
    startDate?: string | null;
  }
  /**
   * Dimensions are attributes of your data. For example, the dimension `userEmail` indicates the email of the user that accessed reporting data. Dimension values in report responses are strings.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAccessDimension {
    /**
     * The API name of the dimension. See [Data Access Schema](https://developers.google.com/analytics/devguides/config/admin/v1/access-api-schema) for the list of dimensions supported in this API. Dimensions are referenced by name in `dimensionFilter` and `orderBys`.
     */
    dimensionName?: string | null;
  }
  /**
   * Describes a dimension column in the report. Dimensions requested in a report produce column entries within rows and DimensionHeaders. However, dimensions used exclusively within filters or expressions do not produce columns in a report; correspondingly, those dimensions do not produce headers.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAccessDimensionHeader {
    /**
     * The dimension's name; for example 'userEmail'.
     */
    dimensionName?: string | null;
  }
  /**
   * The value of a dimension.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAccessDimensionValue {
    /**
     * The dimension value. For example, this value may be 'France' for the 'country' dimension.
     */
    value?: string | null;
  }
  /**
   * An expression to filter dimension or metric values.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAccessFilter {
    /**
     * A filter for two values.
     */
    betweenFilter?: Schema$GoogleAnalyticsAdminV1alphaAccessBetweenFilter;
    /**
     * The dimension name or metric name.
     */
    fieldName?: string | null;
    /**
     * A filter for in list values.
     */
    inListFilter?: Schema$GoogleAnalyticsAdminV1alphaAccessInListFilter;
    /**
     * A filter for numeric or date values.
     */
    numericFilter?: Schema$GoogleAnalyticsAdminV1alphaAccessNumericFilter;
    /**
     * Strings related filter.
     */
    stringFilter?: Schema$GoogleAnalyticsAdminV1alphaAccessStringFilter;
  }
  /**
   * Expresses dimension or metric filters. The fields in the same expression need to be either all dimensions or all metrics.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAccessFilterExpression {
    /**
     * A primitive filter. In the same FilterExpression, all of the filter's field names need to be either all dimensions or all metrics.
     */
    accessFilter?: Schema$GoogleAnalyticsAdminV1alphaAccessFilter;
    /**
     * Each of the FilterExpressions in the and_group has an AND relationship.
     */
    andGroup?: Schema$GoogleAnalyticsAdminV1alphaAccessFilterExpressionList;
    /**
     * The FilterExpression is NOT of not_expression.
     */
    notExpression?: Schema$GoogleAnalyticsAdminV1alphaAccessFilterExpression;
    /**
     * Each of the FilterExpressions in the or_group has an OR relationship.
     */
    orGroup?: Schema$GoogleAnalyticsAdminV1alphaAccessFilterExpressionList;
  }
  /**
   * A list of filter expressions.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAccessFilterExpressionList {
    /**
     * A list of filter expressions.
     */
    expressions?: Schema$GoogleAnalyticsAdminV1alphaAccessFilterExpression[];
  }
  /**
   * The result needs to be in a list of string values.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAccessInListFilter {
    /**
     * If true, the string value is case sensitive.
     */
    caseSensitive?: boolean | null;
    /**
     * The list of string values. Must be non-empty.
     */
    values?: string[] | null;
  }
  /**
   * The quantitative measurements of a report. For example, the metric `accessCount` is the total number of data access records.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAccessMetric {
    /**
     * The API name of the metric. See [Data Access Schema](https://developers.google.com/analytics/devguides/config/admin/v1/access-api-schema) for the list of metrics supported in this API. Metrics are referenced by name in `metricFilter` & `orderBys`.
     */
    metricName?: string | null;
  }
  /**
   * Describes a metric column in the report. Visible metrics requested in a report produce column entries within rows and MetricHeaders. However, metrics used exclusively within filters or expressions do not produce columns in a report; correspondingly, those metrics do not produce headers.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAccessMetricHeader {
    /**
     * The metric's name; for example 'accessCount'.
     */
    metricName?: string | null;
  }
  /**
   * The value of a metric.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAccessMetricValue {
    /**
     * The measurement value. For example, this value may be '13'.
     */
    value?: string | null;
  }
  /**
   * Filters for numeric or date values.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAccessNumericFilter {
    /**
     * The operation type for this filter.
     */
    operation?: string | null;
    /**
     * A numeric value or a date value.
     */
    value?: Schema$GoogleAnalyticsAdminV1alphaNumericValue;
  }
  /**
   * Order bys define how rows will be sorted in the response. For example, ordering rows by descending access count is one ordering, and ordering rows by the country string is a different ordering.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAccessOrderBy {
    /**
     * If true, sorts by descending order. If false or unspecified, sorts in ascending order.
     */
    desc?: boolean | null;
    /**
     * Sorts results by a dimension's values.
     */
    dimension?: Schema$GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderBy;
    /**
     * Sorts results by a metric's values.
     */
    metric?: Schema$GoogleAnalyticsAdminV1alphaAccessOrderByMetricOrderBy;
  }
  /**
   * Sorts by dimension values.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderBy {
    /**
     * A dimension name in the request to order by.
     */
    dimensionName?: string | null;
    /**
     * Controls the rule for dimension value ordering.
     */
    orderType?: string | null;
  }
  /**
   * Sorts by metric values.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAccessOrderByMetricOrderBy {
    /**
     * A metric name in the request to order by.
     */
    metricName?: string | null;
  }
  /**
   * Current state of all quotas for this Analytics property. If any quota for a property is exhausted, all requests to that property will return Resource Exhausted errors.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAccessQuota {
    /**
     * Properties can use up to 50 concurrent requests.
     */
    concurrentRequests?: Schema$GoogleAnalyticsAdminV1alphaAccessQuotaStatus;
    /**
     * Properties and cloud project pairs can have up to 50 server errors per hour.
     */
    serverErrorsPerProjectPerHour?: Schema$GoogleAnalyticsAdminV1alphaAccessQuotaStatus;
    /**
     * Properties can use 250,000 tokens per day. Most requests consume fewer than 10 tokens.
     */
    tokensPerDay?: Schema$GoogleAnalyticsAdminV1alphaAccessQuotaStatus;
    /**
     * Properties can use 50,000 tokens per hour. An API request consumes a single number of tokens, and that number is deducted from all of the hourly, daily, and per project hourly quotas.
     */
    tokensPerHour?: Schema$GoogleAnalyticsAdminV1alphaAccessQuotaStatus;
    /**
     * Properties can use up to 25% of their tokens per project per hour. This amounts to Analytics 360 Properties can use 12,500 tokens per project per hour. An API request consumes a single number of tokens, and that number is deducted from all of the hourly, daily, and per project hourly quotas.
     */
    tokensPerProjectPerHour?: Schema$GoogleAnalyticsAdminV1alphaAccessQuotaStatus;
  }
  /**
   * Current state for a particular quota group.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAccessQuotaStatus {
    /**
     * Quota consumed by this request.
     */
    consumed?: number | null;
    /**
     * Quota remaining after this request.
     */
    remaining?: number | null;
  }
  /**
   * Access report data for each row.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAccessRow {
    /**
     * List of dimension values. These values are in the same order as specified in the request.
     */
    dimensionValues?: Schema$GoogleAnalyticsAdminV1alphaAccessDimensionValue[];
    /**
     * List of metric values. These values are in the same order as specified in the request.
     */
    metricValues?: Schema$GoogleAnalyticsAdminV1alphaAccessMetricValue[];
  }
  /**
   * The filter for strings.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAccessStringFilter {
    /**
     * If true, the string value is case sensitive.
     */
    caseSensitive?: boolean | null;
    /**
     * The match type for this filter.
     */
    matchType?: string | null;
    /**
     * The string value used for the matching.
     */
    value?: string | null;
  }
  /**
   * A resource message representing a Google Analytics account.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAccount {
    /**
     * Output only. Time when this account was originally created.
     */
    createTime?: string | null;
    /**
     * Output only. Indicates whether this Account is soft-deleted or not. Deleted accounts are excluded from List results unless specifically requested.
     */
    deleted?: boolean | null;
    /**
     * Required. Human-readable display name for this account.
     */
    displayName?: string | null;
    /**
     * Output only. Resource name of this account. Format: accounts/{account\} Example: "accounts/100"
     */
    name?: string | null;
    /**
     * Country of business. Must be a Unicode CLDR region code.
     */
    regionCode?: string | null;
    /**
     * Output only. Time when account payload fields were last updated.
     */
    updateTime?: string | null;
  }
  /**
   * A virtual resource representing an overview of an account and all its child GA4 properties.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAccountSummary {
    /**
     * Resource name of account referred to by this account summary Format: accounts/{account_id\} Example: "accounts/1000"
     */
    account?: string | null;
    /**
     * Display name for the account referred to in this account summary.
     */
    displayName?: string | null;
    /**
     * Resource name for this account summary. Format: accountSummaries/{account_id\} Example: "accountSummaries/1000"
     */
    name?: string | null;
    /**
     * List of summaries for child accounts of this account.
     */
    propertySummaries?: Schema$GoogleAnalyticsAdminV1alphaPropertySummary[];
  }
  /**
   * Request message for AcknowledgeUserDataCollection RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAcknowledgeUserDataCollectionRequest {
    /**
     * Required. An acknowledgement that the caller of this method understands the terms of user data collection. This field must contain the exact value: "I acknowledge that I have the necessary privacy disclosures and rights from my end users for the collection and processing of their data, including the association of such data with the visitation information Google Analytics collects from my site and/or app property."
     */
    acknowledgement?: string | null;
  }
  /**
   * Response message for AcknowledgeUserDataCollection RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAcknowledgeUserDataCollectionResponse {}
  /**
   * A link between a GA4 Property and an AdSense for Content ad client.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAdSenseLink {
    /**
     * Immutable. The AdSense ad client code that the GA4 property is linked to. Example format: "ca-pub-1234567890"
     */
    adClientCode?: string | null;
    /**
     * Output only. The resource name for this AdSense Link resource. Format: properties/{propertyId\}/adSenseLinks/{linkId\} Example: properties/1234/adSenseLinks/6789
     */
    name?: string | null;
  }
  /**
   * Request message for ApproveDisplayVideo360AdvertiserLinkProposal RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalRequest {}
  /**
   * Response message for ApproveDisplayVideo360AdvertiserLinkProposal RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalResponse {
    /**
     * The DisplayVideo360AdvertiserLink created as a result of approving the proposal.
     */
    displayVideo360AdvertiserLink?: Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink;
  }
  /**
   * Request message for ArchiveAudience RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaArchiveAudienceRequest {}
  /**
   * Request message for ArchiveCustomDimension RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaArchiveCustomDimensionRequest {}
  /**
   * Request message for ArchiveCustomMetric RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaArchiveCustomMetricRequest {}
  /**
   * The attribution settings used for a given property. This is a singleton resource.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAttributionSettings {
    /**
     * Required. The lookback window configuration for acquisition conversion events. The default window size is 30 days.
     */
    acquisitionConversionEventLookbackWindow?: string | null;
    /**
     * Required. The Conversion Export Scope for data exported to linked Ads Accounts.
     */
    adsWebConversionDataExportScope?: string | null;
    /**
     * Output only. Resource name of this attribution settings resource. Format: properties/{property_id\}/attributionSettings Example: "properties/1000/attributionSettings"
     */
    name?: string | null;
    /**
     * Required. The lookback window for all other, non-acquisition conversion events. The default window size is 90 days.
     */
    otherConversionEventLookbackWindow?: string | null;
    /**
     * Required. The reporting attribution model used to calculate conversion credit in this property's reports. Changing the attribution model will apply to both historical and future data. These changes will be reflected in reports with conversion and revenue data. User and session data will be unaffected.
     */
    reportingAttributionModel?: string | null;
  }
  /**
   * A resource message representing a GA4 Audience.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAudience {
    /**
     * Output only. It is automatically set by GA to false if this is an NPA Audience and is excluded from ads personalization.
     */
    adsPersonalizationEnabled?: boolean | null;
    /**
     * Required. The description of the Audience.
     */
    description?: string | null;
    /**
     * Required. The display name of the Audience.
     */
    displayName?: string | null;
    /**
     * Optional. Specifies an event to log when a user joins the Audience. If not set, no event is logged when a user joins the Audience.
     */
    eventTrigger?: Schema$GoogleAnalyticsAdminV1alphaAudienceEventTrigger;
    /**
     * Immutable. Specifies how long an exclusion lasts for users that meet the exclusion filter. It is applied to all EXCLUDE filter clauses and is ignored when there is no EXCLUDE filter clause in the Audience.
     */
    exclusionDurationMode?: string | null;
    /**
     * Required. Immutable. Unordered list. Filter clauses that define the Audience. All clauses will be AND’ed together.
     */
    filterClauses?: Schema$GoogleAnalyticsAdminV1alphaAudienceFilterClause[];
    /**
     * Required. Immutable. The duration a user should stay in an Audience. It cannot be set to more than 540 days.
     */
    membershipDurationDays?: number | null;
    /**
     * Output only. The resource name for this Audience resource. Format: properties/{propertyId\}/audiences/{audienceId\}
     */
    name?: string | null;
  }
  /**
   * A specific filter for a single dimension or metric.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter {
    /**
     * Optional. Indicates whether this filter needs dynamic evaluation or not. If set to true, users join the Audience if they ever met the condition (static evaluation). If unset or set to false, user evaluation for an Audience is dynamic; users are added to an Audience when they meet the conditions and then removed when they no longer meet them. This can only be set when Audience scope is ACROSS_ALL_SESSIONS.
     */
    atAnyPointInTime?: boolean | null;
    /**
     * A filter for numeric or date values between certain values on a dimension or metric.
     */
    betweenFilter?: Schema$GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter;
    /**
     * Required. Immutable. The dimension name or metric name to filter. If the field name refers to a custom dimension or metric, a scope prefix will be added to the front of the custom dimensions or metric name. For more on scope prefixes or custom dimensions/metrics, reference the [Google Analytics Data API documentation] (https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema#custom_dimensions).
     */
    fieldName?: string | null;
    /**
     * Optional. If set, specifies the time window for which to evaluate data in number of days. If not set, then audience data is evaluated against lifetime data (For example, infinite time window). For example, if set to 1 day, only the current day's data is evaluated. The reference point is the current day when at_any_point_in_time is unset or false. It can only be set when Audience scope is ACROSS_ALL_SESSIONS and cannot be greater than 60 days.
     */
    inAnyNDayPeriod?: number | null;
    /**
     * A filter for a string dimension that matches a particular list of options.
     */
    inListFilter?: Schema$GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilter;
    /**
     * A filter for numeric or date values on a dimension or metric.
     */
    numericFilter?: Schema$GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter;
    /**
     * A filter for a string-type dimension that matches a particular pattern.
     */
    stringFilter?: Schema$GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter;
  }
  /**
   * A filter for numeric or date values between certain values on a dimension or metric.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter {
    /**
     * Required. Begins with this number, inclusive.
     */
    fromValue?: Schema$GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue;
    /**
     * Required. Ends with this number, inclusive.
     */
    toValue?: Schema$GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue;
  }
  /**
   * A filter for a string dimension that matches a particular list of options.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilter {
    /**
     * Optional. If true, the match is case-sensitive. If false, the match is case-insensitive.
     */
    caseSensitive?: boolean | null;
    /**
     * Required. The list of possible string values to match against. Must be non-empty.
     */
    values?: string[] | null;
  }
  /**
   * A filter for numeric or date values on a dimension or metric.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter {
    /**
     * Required. The operation applied to a numeric filter.
     */
    operation?: string | null;
    /**
     * Required. The numeric or date value to match against.
     */
    value?: Schema$GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue;
  }
  /**
   * To represent a number.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue {
    /**
     * Double value.
     */
    doubleValue?: number | null;
    /**
     * Integer value.
     */
    int64Value?: string | null;
  }
  /**
   * A filter for a string-type dimension that matches a particular pattern.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter {
    /**
     * Optional. If true, the match is case-sensitive. If false, the match is case-insensitive.
     */
    caseSensitive?: boolean | null;
    /**
     * Required. The match type for the string filter.
     */
    matchType?: string | null;
    /**
     * Required. The string value to be matched against.
     */
    value?: string | null;
  }
  /**
   * A filter that matches events of a single event name. If an event parameter is specified, only the subset of events that match both the single event name and the parameter filter expressions match this event filter.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAudienceEventFilter {
    /**
     * Required. Immutable. The name of the event to match against.
     */
    eventName?: string | null;
    /**
     * Optional. If specified, this filter matches events that match both the single event name and the parameter filter expressions. AudienceEventFilter inside the parameter filter expression cannot be set (For example, nested event filters are not supported). This should be a single and_group of dimension_or_metric_filter or not_expression; ANDs of ORs are not supported. Also, if it includes a filter for "eventCount", only that one will be considered; all the other filters will be ignored.
     */
    eventParameterFilterExpression?: Schema$GoogleAnalyticsAdminV1alphaAudienceFilterExpression;
  }
  /**
   * Specifies an event to log when a user joins the Audience.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAudienceEventTrigger {
    /**
     * Required. The event name that will be logged.
     */
    eventName?: string | null;
    /**
     * Required. When to log the event.
     */
    logCondition?: string | null;
  }
  /**
   * A clause for defining either a simple or sequence filter. A filter can be inclusive (For example, users satisfying the filter clause are included in the Audience) or exclusive (For example, users satisfying the filter clause are excluded from the Audience).
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAudienceFilterClause {
    /**
     * Required. Specifies whether this is an include or exclude filter clause.
     */
    clauseType?: string | null;
    /**
     * Filters that must occur in a specific order for the user to be a member of the Audience.
     */
    sequenceFilter?: Schema$GoogleAnalyticsAdminV1alphaAudienceSequenceFilter;
    /**
     * A simple filter that a user must satisfy to be a member of the Audience.
     */
    simpleFilter?: Schema$GoogleAnalyticsAdminV1alphaAudienceSimpleFilter;
  }
  /**
   * A logical expression of Audience dimension, metric, or event filters.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAudienceFilterExpression {
    /**
     * A list of expressions to be AND’ed together. It can only contain AudienceFilterExpressions with or_group. This must be set for the top level AudienceFilterExpression.
     */
    andGroup?: Schema$GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList;
    /**
     * A filter on a single dimension or metric. This cannot be set on the top level AudienceFilterExpression.
     */
    dimensionOrMetricFilter?: Schema$GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter;
    /**
     * Creates a filter that matches a specific event. This cannot be set on the top level AudienceFilterExpression.
     */
    eventFilter?: Schema$GoogleAnalyticsAdminV1alphaAudienceEventFilter;
    /**
     * A filter expression to be NOT'ed (For example, inverted, complemented). It can only include a dimension_or_metric_filter. This cannot be set on the top level AudienceFilterExpression.
     */
    notExpression?: Schema$GoogleAnalyticsAdminV1alphaAudienceFilterExpression;
    /**
     * A list of expressions to OR’ed together. It cannot contain AudienceFilterExpressions with and_group or or_group.
     */
    orGroup?: Schema$GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList;
  }
  /**
   * A list of Audience filter expressions.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList {
    /**
     * A list of Audience filter expressions.
     */
    filterExpressions?: Schema$GoogleAnalyticsAdminV1alphaAudienceFilterExpression[];
  }
  /**
   * Defines filters that must occur in a specific order for the user to be a member of the Audience.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAudienceSequenceFilter {
    /**
     * Required. Immutable. Specifies the scope for this filter.
     */
    scope?: string | null;
    /**
     * Optional. Defines the time period in which the whole sequence must occur.
     */
    sequenceMaximumDuration?: string | null;
    /**
     * Required. An ordered sequence of steps. A user must complete each step in order to join the sequence filter.
     */
    sequenceSteps?: Schema$GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep[];
  }
  /**
   * A condition that must occur in the specified step order for this user to match the sequence.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep {
    /**
     * Optional. When set, this step must be satisfied within the constraint_duration of the previous step (For example, t[i] - t[i-1] <= constraint_duration). If not set, there is no duration requirement (the duration is effectively unlimited). It is ignored for the first step.
     */
    constraintDuration?: string | null;
    /**
     * Required. Immutable. A logical expression of Audience dimension, metric, or event filters in each step.
     */
    filterExpression?: Schema$GoogleAnalyticsAdminV1alphaAudienceFilterExpression;
    /**
     * Optional. If true, the event satisfying this step must be the very next event after the event satisfying the last step. If unset or false, this step indirectly follows the prior step; for example, there may be events between the prior step and this step. It is ignored for the first step.
     */
    immediatelyFollows?: boolean | null;
    /**
     * Required. Immutable. Specifies the scope for this step.
     */
    scope?: string | null;
  }
  /**
   * Defines a simple filter that a user must satisfy to be a member of the Audience.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAudienceSimpleFilter {
    /**
     * Required. Immutable. A logical expression of Audience dimension, metric, or event filters.
     */
    filterExpression?: Schema$GoogleAnalyticsAdminV1alphaAudienceFilterExpression;
    /**
     * Required. Immutable. Specifies the scope for this filter.
     */
    scope?: string | null;
  }
  /**
   * Read-only resource used to summarize a principal's effective roles.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAuditUserLink {
    /**
     * Roles directly assigned to this user for this entity. Format: predefinedRoles/viewer Excludes roles that are inherited from an account (if this is for a property), group, or organization admin role.
     */
    directRoles?: string[] | null;
    /**
     * Union of all permissions a user has at this account or property (includes direct permissions, group-inherited permissions, etc.). Format: predefinedRoles/viewer
     */
    effectiveRoles?: string[] | null;
    /**
     * Email address of the linked user
     */
    emailAddress?: string | null;
    /**
     * Example format: properties/1234/userLinks/5678
     */
    name?: string | null;
  }
  /**
   * Request message for AuditUserLinks RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksRequest {
    /**
     * The maximum number of user links to return. The service may return fewer than this value. If unspecified, at most 1000 user links will be returned. The maximum value is 5000; values above 5000 will be coerced to 5000.
     */
    pageSize?: number | null;
    /**
     * A page token, received from a previous `AuditUserLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `AuditUserLinks` must match the call that provided the page token.
     */
    pageToken?: string | null;
  }
  /**
   * Response message for AuditUserLinks RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * List of AuditUserLinks. These will be ordered stably, but in an arbitrary order.
     */
    userLinks?: Schema$GoogleAnalyticsAdminV1alphaAuditUserLink[];
  }
  /**
   * Request message for BatchCreateAccessBindings RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsRequest {
    /**
     * Required. The requests specifying the access bindings to create. A maximum of 1000 access bindings can be created in a batch.
     */
    requests?: Schema$GoogleAnalyticsAdminV1alphaCreateAccessBindingRequest[];
  }
  /**
   * Response message for BatchCreateAccessBindings RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsResponse {
    /**
     * The access bindings created.
     */
    accessBindings?: Schema$GoogleAnalyticsAdminV1alphaAccessBinding[];
  }
  /**
   * Request message for BatchCreateUserLinks RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksRequest {
    /**
     * Optional. If set, then email the new users notifying them that they've been granted permissions to the resource. Regardless of whether this is set or not, notify_new_user field inside each individual request is ignored.
     */
    notifyNewUsers?: boolean | null;
    /**
     * Required. The requests specifying the user links to create. A maximum of 1000 user links can be created in a batch.
     */
    requests?: Schema$GoogleAnalyticsAdminV1alphaCreateUserLinkRequest[];
  }
  /**
   * Response message for BatchCreateUserLinks RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse {
    /**
     * The user links created.
     */
    userLinks?: Schema$GoogleAnalyticsAdminV1alphaUserLink[];
  }
  /**
   * Request message for BatchDeleteAccessBindings RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaBatchDeleteAccessBindingsRequest {
    /**
     * Required. The requests specifying the access bindings to delete. A maximum of 1000 access bindings can be deleted in a batch.
     */
    requests?: Schema$GoogleAnalyticsAdminV1alphaDeleteAccessBindingRequest[];
  }
  /**
   * Request message for BatchDeleteUserLinks RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaBatchDeleteUserLinksRequest {
    /**
     * Required. The requests specifying the user links to update. A maximum of 1000 user links can be updated in a batch.
     */
    requests?: Schema$GoogleAnalyticsAdminV1alphaDeleteUserLinkRequest[];
  }
  /**
   * Response message for BatchGetAccessBindings RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaBatchGetAccessBindingsResponse {
    /**
     * The requested access bindings.
     */
    accessBindings?: Schema$GoogleAnalyticsAdminV1alphaAccessBinding[];
  }
  /**
   * Response message for BatchGetUserLinks RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse {
    /**
     * The requested user links.
     */
    userLinks?: Schema$GoogleAnalyticsAdminV1alphaUserLink[];
  }
  /**
   * Request message for BatchUpdateAccessBindings RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsRequest {
    /**
     * Required. The requests specifying the access bindings to update. A maximum of 1000 access bindings can be updated in a batch.
     */
    requests?: Schema$GoogleAnalyticsAdminV1alphaUpdateAccessBindingRequest[];
  }
  /**
   * Response message for BatchUpdateAccessBindings RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsResponse {
    /**
     * The access bindings updated.
     */
    accessBindings?: Schema$GoogleAnalyticsAdminV1alphaAccessBinding[];
  }
  /**
   * Request message for BatchUpdateUserLinks RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksRequest {
    /**
     * Required. The requests specifying the user links to update. A maximum of 1000 user links can be updated in a batch.
     */
    requests?: Schema$GoogleAnalyticsAdminV1alphaUpdateUserLinkRequest[];
  }
  /**
   * Response message for BatchUpdateUserLinks RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse {
    /**
     * The user links updated.
     */
    userLinks?: Schema$GoogleAnalyticsAdminV1alphaUserLink[];
  }
  /**
   * A link between a GA4 Property and BigQuery project.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaBigQueryLink {
    /**
     * Output only. Time when the link was created.
     */
    createTime?: string | null;
    /**
     * If set true, enables daily data export to the linked Google Cloud project.
     */
    dailyExportEnabled?: boolean | null;
    /**
     * If set true, enables enterprise export to the linked Google Cloud project.
     */
    enterpriseExportEnabled?: boolean | null;
    /**
     * The list of event names that will be excluded from exports.
     */
    excludedEvents?: string[] | null;
    /**
     * The list of streams under the parent property for which data will be exported. Format: properties/{property_id\}/dataStreams/{stream_id\} Example: ['properties/1000/dataStreams/2000']
     */
    exportStreams?: string[] | null;
    /**
     * If set true, exported data will include advertising identifiers for mobile app streams.
     */
    includeAdvertisingId?: boolean | null;
    /**
     * Output only. Resource name of this BigQuery link. Format: 'properties/{property_id\}/bigQueryLinks/{bigquery_link_id\}' Format: 'properties/1234/bigQueryLinks/abc567'
     */
    name?: string | null;
    /**
     * Immutable. The linked Google Cloud project. When creating a BigQueryLink, you may provide this resource name using either a project number or project ID. Once this resource has been created, the returned project will always have a project that contains a project number. Format: 'projects/{project number\}' Example: 'projects/1234'
     */
    project?: string | null;
    /**
     * If set true, enables streaming export to the linked Google Cloud project.
     */
    streamingExportEnabled?: boolean | null;
  }
  /**
   * Request message for CancelDisplayVideo360AdvertiserLinkProposal RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaCancelDisplayVideo360AdvertiserLinkProposalRequest {}
  /**
   * A description of a change to a single Google Analytics resource.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaChangeHistoryChange {
    /**
     * The type of action that changed this resource.
     */
    action?: string | null;
    /**
     * Resource name of the resource whose changes are described by this entry.
     */
    resource?: string | null;
    /**
     * Resource contents from after the change was made. If this resource was deleted in this change, this field will be missing.
     */
    resourceAfterChange?: Schema$GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource;
    /**
     * Resource contents from before the change was made. If this resource was created in this change, this field will be missing.
     */
    resourceBeforeChange?: Schema$GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource;
  }
  /**
   * A snapshot of a resource as before or after the result of a change in change history.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource {
    /**
     * A snapshot of an Account resource in change history.
     */
    account?: Schema$GoogleAnalyticsAdminV1alphaAccount;
    /**
     * A snapshot of an AdSenseLink resource in change history.
     */
    adsenseLink?: Schema$GoogleAnalyticsAdminV1alphaAdSenseLink;
    /**
     * A snapshot of AttributionSettings resource in change history.
     */
    attributionSettings?: Schema$GoogleAnalyticsAdminV1alphaAttributionSettings;
    /**
     * A snapshot of an Audience resource in change history.
     */
    audience?: Schema$GoogleAnalyticsAdminV1alphaAudience;
    /**
     * A snapshot of a BigQuery link resource in change history.
     */
    bigqueryLink?: Schema$GoogleAnalyticsAdminV1alphaBigQueryLink;
    /**
     * A snapshot of a ChannelGroup resource in change history.
     */
    channelGroup?: Schema$GoogleAnalyticsAdminV1alphaChannelGroup;
    /**
     * A snapshot of a ConversionEvent resource in change history.
     */
    conversionEvent?: Schema$GoogleAnalyticsAdminV1alphaConversionEvent;
    /**
     * A snapshot of a CustomDimension resource in change history.
     */
    customDimension?: Schema$GoogleAnalyticsAdminV1alphaCustomDimension;
    /**
     * A snapshot of a CustomMetric resource in change history.
     */
    customMetric?: Schema$GoogleAnalyticsAdminV1alphaCustomMetric;
    /**
     * A snapshot of a data retention settings resource in change history.
     */
    dataRetentionSettings?: Schema$GoogleAnalyticsAdminV1alphaDataRetentionSettings;
    /**
     * A snapshot of a DataStream resource in change history.
     */
    dataStream?: Schema$GoogleAnalyticsAdminV1alphaDataStream;
    /**
     * A snapshot of a DisplayVideo360AdvertiserLink resource in change history.
     */
    displayVideo360AdvertiserLink?: Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink;
    /**
     * A snapshot of a DisplayVideo360AdvertiserLinkProposal resource in change history.
     */
    displayVideo360AdvertiserLinkProposal?: Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal;
    /**
     * A snapshot of EnhancedMeasurementSettings resource in change history.
     */
    enhancedMeasurementSettings?: Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings;
    /**
     * A snapshot of an EventCreateRule resource in change history.
     */
    eventCreateRule?: Schema$GoogleAnalyticsAdminV1alphaEventCreateRule;
    /**
     * A snapshot of an ExpandedDataSet resource in change history.
     */
    expandedDataSet?: Schema$GoogleAnalyticsAdminV1alphaExpandedDataSet;
    /**
     * A snapshot of a FirebaseLink resource in change history.
     */
    firebaseLink?: Schema$GoogleAnalyticsAdminV1alphaFirebaseLink;
    /**
     * A snapshot of a GoogleAdsLink resource in change history.
     */
    googleAdsLink?: Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink;
    /**
     * A snapshot of a GoogleSignalsSettings resource in change history.
     */
    googleSignalsSettings?: Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings;
    /**
     * A snapshot of a MeasurementProtocolSecret resource in change history.
     */
    measurementProtocolSecret?: Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret;
    /**
     * A snapshot of a Property resource in change history.
     */
    property?: Schema$GoogleAnalyticsAdminV1alphaProperty;
    /**
     * A snapshot of a SearchAds360Link resource in change history.
     */
    searchAds360Link?: Schema$GoogleAnalyticsAdminV1alphaSearchAds360Link;
  }
  /**
   * A set of changes within a Google Analytics account or its child properties that resulted from the same cause. Common causes would be updates made in the Google Analytics UI, changes from customer support, or automatic Google Analytics system changes.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaChangeHistoryEvent {
    /**
     * The type of actor that made this change.
     */
    actorType?: string | null;
    /**
     * A list of changes made in this change history event that fit the filters specified in SearchChangeHistoryEventsRequest.
     */
    changes?: Schema$GoogleAnalyticsAdminV1alphaChangeHistoryChange[];
    /**
     * If true, then the list of changes returned was filtered, and does not represent all changes that occurred in this event.
     */
    changesFiltered?: boolean | null;
    /**
     * Time when change was made.
     */
    changeTime?: string | null;
    /**
     * ID of this change history event. This ID is unique across Google Analytics.
     */
    id?: string | null;
    /**
     * Email address of the Google account that made the change. This will be a valid email address if the actor field is set to USER, and empty otherwise. Google accounts that have been deleted will cause an error.
     */
    userActorEmail?: string | null;
  }
  /**
   * A resource message representing a Channel Group.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaChannelGroup {
    /**
     * The description of the Channel Group. Max length of 256 characters.
     */
    description?: string | null;
    /**
     * Required. The display name of the Channel Group. Max length of 80 characters.
     */
    displayName?: string | null;
    /**
     * Required. The grouping rules of channels. Maximum number of rules is 25.
     */
    groupingRule?: Schema$GoogleAnalyticsAdminV1alphaGroupingRule[];
    /**
     * Output only. The resource name for this Channel Group resource. Format: properties/{property\}/channelGroups/{channel_group\}
     */
    name?: string | null;
    /**
     * Output only. Default Channel Group defined by Google, which cannot be updated.
     */
    systemDefined?: boolean | null;
  }
  /**
   * A specific filter for a single dimension.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaChannelGroupFilter {
    /**
     * Required. Immutable. The dimension name to filter.
     */
    fieldName?: string | null;
    /**
     * A filter for a string dimension that matches a particular list of options.
     */
    inListFilter?: Schema$GoogleAnalyticsAdminV1alphaChannelGroupFilterInListFilter;
    /**
     * A filter for a string-type dimension that matches a particular pattern.
     */
    stringFilter?: Schema$GoogleAnalyticsAdminV1alphaChannelGroupFilterStringFilter;
  }
  /**
   * A logical expression of Channel Group dimension filters.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression {
    /**
     * A list of expressions to be AND’ed together. It can only contain ChannelGroupFilterExpressions with or_group. This must be set for the top level ChannelGroupFilterExpression.
     */
    andGroup?: Schema$GoogleAnalyticsAdminV1alphaChannelGroupFilterExpressionList;
    /**
     * A filter on a single dimension. This cannot be set on the top level ChannelGroupFilterExpression.
     */
    filter?: Schema$GoogleAnalyticsAdminV1alphaChannelGroupFilter;
    /**
     * A filter expression to be NOT'ed (that is inverted, complemented). It can only include a dimension_or_metric_filter. This cannot be set on the top level ChannelGroupFilterExpression.
     */
    notExpression?: Schema$GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression;
    /**
     * A list of expressions to OR’ed together. It cannot contain ChannelGroupFilterExpressions with and_group or or_group.
     */
    orGroup?: Schema$GoogleAnalyticsAdminV1alphaChannelGroupFilterExpressionList;
  }
  /**
   * A list of Channel Group filter expressions.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaChannelGroupFilterExpressionList {
    /**
     * A list of Channel Group filter expressions.
     */
    filterExpressions?: Schema$GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression[];
  }
  /**
   * A filter for a string dimension that matches a particular list of options. The match is case insensitive.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaChannelGroupFilterInListFilter {
    /**
     * Required. The list of possible string values to match against. Must be non-empty.
     */
    values?: string[] | null;
  }
  /**
   * Filter where the field value is a String. The match is case insensitive.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaChannelGroupFilterStringFilter {
    /**
     * Required. The match type for the string filter.
     */
    matchType?: string | null;
    /**
     * Required. The string value to be matched against.
     */
    value?: string | null;
  }
  /**
   * Configuration for a specific Connected Site Tag.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaConnectedSiteTag {
    /**
     * Required. User-provided display name for the connected site tag. Must be less than 256 characters.
     */
    displayName?: string | null;
    /**
     * Required. "Tag ID to forward events to. Also known as the Measurement ID, or the "G-ID" (For example: G-12345).
     */
    tagId?: string | null;
  }
  /**
   * A conversion event in a Google Analytics property.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaConversionEvent {
    /**
     * Output only. Time when this conversion event was created in the property.
     */
    createTime?: string | null;
    /**
     * Output only. If set to true, this conversion event refers to a custom event. If set to false, this conversion event refers to a default event in GA. Default events typically have special meaning in GA. Default events are usually created for you by the GA system, but in some cases can be created by property admins. Custom events count towards the maximum number of custom conversion events that may be created per property.
     */
    custom?: boolean | null;
    /**
     * Output only. If set, this event can currently be deleted with DeleteConversionEvent.
     */
    deletable?: boolean | null;
    /**
     * Immutable. The event name for this conversion event. Examples: 'click', 'purchase'
     */
    eventName?: string | null;
    /**
     * Output only. Resource name of this conversion event. Format: properties/{property\}/conversionEvents/{conversion_event\}
     */
    name?: string | null;
  }
  /**
   * Request message for CreateAccessBinding RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaCreateAccessBindingRequest {
    /**
     * Required. The access binding to create.
     */
    accessBinding?: Schema$GoogleAnalyticsAdminV1alphaAccessBinding;
    /**
     * Required. Formats: - accounts/{account\} - properties/{property\}
     */
    parent?: string | null;
  }
  /**
   * Request message for CreateConnectedSiteTag RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaCreateConnectedSiteTagRequest {
    /**
     * Required. The tag to add to the Universal Analytics property
     */
    connectedSiteTag?: Schema$GoogleAnalyticsAdminV1alphaConnectedSiteTag;
    /**
     * The Universal Analytics property to create connected site tags for. This API does not support GA4 properties. Format: properties/{universalAnalyticsPropertyId\} Example: properties/1234
     */
    property?: string | null;
  }
  /**
   * Response message for CreateConnectedSiteTag RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaCreateConnectedSiteTagResponse {}
  /**
   * Request message for CreateUserLink RPC. Users can have multiple email addresses associated with their Google account, and one of these email addresses is the "primary" email address. Any of the email addresses associated with a Google account may be used for a new UserLink, but the returned UserLink will always contain the "primary" email address. As a result, the input and output email address for this request may differ.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaCreateUserLinkRequest {
    /**
     * Optional. If set, then email the new user notifying them that they've been granted permissions to the resource.
     */
    notifyNewUser?: boolean | null;
    /**
     * Required. Example format: accounts/1234
     */
    parent?: string | null;
    /**
     * Required. The user link to create.
     */
    userLink?: Schema$GoogleAnalyticsAdminV1alphaUserLink;
  }
  /**
   * A definition for a CustomDimension.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaCustomDimension {
    /**
     * Optional. Description for this custom dimension. Max length of 150 characters.
     */
    description?: string | null;
    /**
     * Optional. If set to true, sets this dimension as NPA and excludes it from ads personalization. This is currently only supported by user-scoped custom dimensions.
     */
    disallowAdsPersonalization?: boolean | null;
    /**
     * Required. Display name for this custom dimension as shown in the Analytics UI. Max length of 82 characters, alphanumeric plus space and underscore starting with a letter. Legacy system-generated display names may contain square brackets, but updates to this field will never permit square brackets.
     */
    displayName?: string | null;
    /**
     * Output only. Resource name for this CustomDimension resource. Format: properties/{property\}/customDimensions/{customDimension\}
     */
    name?: string | null;
    /**
     * Required. Immutable. Tagging parameter name for this custom dimension. If this is a user-scoped dimension, then this is the user property name. If this is an event-scoped dimension, then this is the event parameter name. If this is an item-scoped dimension, then this is the parameter name found in the eCommerce items array. May only contain alphanumeric and underscore characters, starting with a letter. Max length of 24 characters for user-scoped dimensions, 40 characters for event-scoped dimensions.
     */
    parameterName?: string | null;
    /**
     * Required. Immutable. The scope of this dimension.
     */
    scope?: string | null;
  }
  /**
   * A definition for a custom metric.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaCustomMetric {
    /**
     * Optional. Description for this custom dimension. Max length of 150 characters.
     */
    description?: string | null;
    /**
     * Required. Display name for this custom metric as shown in the Analytics UI. Max length of 82 characters, alphanumeric plus space and underscore starting with a letter. Legacy system-generated display names may contain square brackets, but updates to this field will never permit square brackets.
     */
    displayName?: string | null;
    /**
     * Required. The type for the custom metric's value.
     */
    measurementUnit?: string | null;
    /**
     * Output only. Resource name for this CustomMetric resource. Format: properties/{property\}/customMetrics/{customMetric\}
     */
    name?: string | null;
    /**
     * Required. Immutable. Tagging name for this custom metric. If this is an event-scoped metric, then this is the event parameter name. May only contain alphanumeric and underscore charactes, starting with a letter. Max length of 40 characters for event-scoped metrics.
     */
    parameterName?: string | null;
    /**
     * Optional. Types of restricted data that this metric may contain. Required for metrics with CURRENCY measurement unit. Must be empty for metrics with a non-CURRENCY measurement unit.
     */
    restrictedMetricType?: string[] | null;
    /**
     * Required. Immutable. The scope of this custom metric.
     */
    scope?: string | null;
  }
  /**
   * Settings values for data retention. This is a singleton resource.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaDataRetentionSettings {
    /**
     * The length of time that event-level data is retained.
     */
    eventDataRetention?: string | null;
    /**
     * Output only. Resource name for this DataRetentionSetting resource. Format: properties/{property\}/dataRetentionSettings
     */
    name?: string | null;
    /**
     * If true, reset the retention period for the user identifier with every event from that user.
     */
    resetUserDataOnNewActivity?: boolean | null;
  }
  /**
   * A resource message representing data sharing settings of a Google Analytics account.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaDataSharingSettings {
    /**
     * Output only. Resource name. Format: accounts/{account\}/dataSharingSettings Example: "accounts/1000/dataSharingSettings"
     */
    name?: string | null;
    /**
     * Allows any of Google sales to access the data in order to suggest configuration changes to improve results.
     */
    sharingWithGoogleAnySalesEnabled?: boolean | null;
    /**
     * Allows Google sales teams that are assigned to the customer to access the data in order to suggest configuration changes to improve results. Sales team restrictions still apply when enabled.
     */
    sharingWithGoogleAssignedSalesEnabled?: boolean | null;
    /**
     * Allows Google to use the data to improve other Google products or services.
     */
    sharingWithGoogleProductsEnabled?: boolean | null;
    /**
     * Allows Google support to access the data in order to help troubleshoot issues.
     */
    sharingWithGoogleSupportEnabled?: boolean | null;
    /**
     * Allows Google to share the data anonymously in aggregate form with others.
     */
    sharingWithOthersEnabled?: boolean | null;
  }
  /**
   * A resource message representing a data stream.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaDataStream {
    /**
     * Data specific to Android app streams. Must be populated if type is ANDROID_APP_DATA_STREAM.
     */
    androidAppStreamData?: Schema$GoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamData;
    /**
     * Output only. Time when this stream was originally created.
     */
    createTime?: string | null;
    /**
     * Human-readable display name for the Data Stream. Required for web data streams. The max allowed display name length is 255 UTF-16 code units.
     */
    displayName?: string | null;
    /**
     * Data specific to iOS app streams. Must be populated if type is IOS_APP_DATA_STREAM.
     */
    iosAppStreamData?: Schema$GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamData;
    /**
     * Output only. Resource name of this Data Stream. Format: properties/{property_id\}/dataStreams/{stream_id\} Example: "properties/1000/dataStreams/2000"
     */
    name?: string | null;
    /**
     * Required. Immutable. The type of this DataStream resource.
     */
    type?: string | null;
    /**
     * Output only. Time when stream payload fields were last updated.
     */
    updateTime?: string | null;
    /**
     * Data specific to web streams. Must be populated if type is WEB_DATA_STREAM.
     */
    webStreamData?: Schema$GoogleAnalyticsAdminV1alphaDataStreamWebStreamData;
  }
  /**
   * Data specific to Android app streams.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamData {
    /**
     * Output only. ID of the corresponding Android app in Firebase, if any. This ID can change if the Android app is deleted and recreated.
     */
    firebaseAppId?: string | null;
    /**
     * Immutable. The package name for the app being measured. Example: "com.example.myandroidapp"
     */
    packageName?: string | null;
  }
  /**
   * Data specific to iOS app streams.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamData {
    /**
     * Required. Immutable. The Apple App Store Bundle ID for the app Example: "com.example.myiosapp"
     */
    bundleId?: string | null;
    /**
     * Output only. ID of the corresponding iOS app in Firebase, if any. This ID can change if the iOS app is deleted and recreated.
     */
    firebaseAppId?: string | null;
  }
  /**
   * Data specific to web streams.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaDataStreamWebStreamData {
    /**
     * Domain name of the web app being measured, or empty. Example: "http://www.google.com", "https://www.google.com"
     */
    defaultUri?: string | null;
    /**
     * Output only. ID of the corresponding web app in Firebase, if any. This ID can change if the web app is deleted and recreated.
     */
    firebaseAppId?: string | null;
    /**
     * Output only. Analytics Measurement ID. Example: "G-1A2BCD345E"
     */
    measurementId?: string | null;
  }
  /**
   * Request message for DeleteAccessBinding RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaDeleteAccessBindingRequest {
    /**
     * Required. Formats: - accounts/{account\}/accessBindings/{accessBinding\} - properties/{property\}/accessBindings/{accessBinding\}
     */
    name?: string | null;
  }
  /**
   * Request message for DeleteConnectedSiteTag RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaDeleteConnectedSiteTagRequest {
    /**
     * The Universal Analytics property to delete connected site tags for. This API does not support GA4 properties. Format: properties/{universalAnalyticsPropertyId\} Example: properties/1234
     */
    property?: string | null;
    /**
     * Tag ID to forward events to. Also known as the Measurement ID, or the "G-ID" (For example: G-12345).
     */
    tagId?: string | null;
  }
  /**
   * Request message for DeleteUserLink RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaDeleteUserLinkRequest {
    /**
     * Required. Example format: accounts/1234/userLinks/5678
     */
    name?: string | null;
  }
  /**
   * A link between a GA4 property and a Display & Video 360 advertiser.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink {
    /**
     * Enables personalized advertising features with this integration. If this field is not set on create/update, it will be defaulted to true.
     */
    adsPersonalizationEnabled?: boolean | null;
    /**
     * Output only. The display name of the Display & Video 360 Advertiser.
     */
    advertiserDisplayName?: string | null;
    /**
     * Immutable. The Display & Video 360 Advertiser's advertiser ID.
     */
    advertiserId?: string | null;
    /**
     * Immutable. Enables the import of campaign data from Display & Video 360 into the GA4 property. After link creation, this can only be updated from the Display & Video 360 product. If this field is not set on create, it will be defaulted to true.
     */
    campaignDataSharingEnabled?: boolean | null;
    /**
     * Immutable. Enables the import of cost data from Display & Video 360 into the GA4 property. This can only be enabled if campaign_data_sharing_enabled is enabled. After link creation, this can only be updated from the Display & Video 360 product. If this field is not set on create, it will be defaulted to true.
     */
    costDataSharingEnabled?: boolean | null;
    /**
     * Output only. The resource name for this DisplayVideo360AdvertiserLink resource. Format: properties/{propertyId\}/displayVideo360AdvertiserLinks/{linkId\} Note: linkId is not the Display & Video 360 Advertiser ID
     */
    name?: string | null;
  }
  /**
   * A proposal for a link between a GA4 property and a Display & Video 360 advertiser. A proposal is converted to a DisplayVideo360AdvertiserLink once approved. Google Analytics admins approve inbound proposals while Display & Video 360 admins approve outbound proposals.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal {
    /**
     * Immutable. Enables personalized advertising features with this integration. If this field is not set on create, it will be defaulted to true.
     */
    adsPersonalizationEnabled?: boolean | null;
    /**
     * Output only. The display name of the Display & Video Advertiser. Only populated for proposals that originated from Display & Video 360.
     */
    advertiserDisplayName?: string | null;
    /**
     * Immutable. The Display & Video 360 Advertiser's advertiser ID.
     */
    advertiserId?: string | null;
    /**
     * Immutable. Enables the import of campaign data from Display & Video 360. If this field is not set on create, it will be defaulted to true.
     */
    campaignDataSharingEnabled?: boolean | null;
    /**
     * Immutable. Enables the import of cost data from Display & Video 360. This can only be enabled if campaign_data_sharing_enabled is enabled. If this field is not set on create, it will be defaulted to true.
     */
    costDataSharingEnabled?: boolean | null;
    /**
     * Output only. The status information for this link proposal.
     */
    linkProposalStatusDetails?: Schema$GoogleAnalyticsAdminV1alphaLinkProposalStatusDetails;
    /**
     * Output only. The resource name for this DisplayVideo360AdvertiserLinkProposal resource. Format: properties/{propertyId\}/displayVideo360AdvertiserLinkProposals/{proposalId\} Note: proposalId is not the Display & Video 360 Advertiser ID
     */
    name?: string | null;
    /**
     * Input only. On a proposal being sent to Display & Video 360, this field must be set to the email address of an admin on the target advertiser. This is used to verify that the Google Analytics admin is aware of at least one admin on the Display & Video 360 Advertiser. This does not restrict approval of the proposal to a single user. Any admin on the Display & Video 360 Advertiser may approve the proposal.
     */
    validationEmail?: string | null;
  }
  /**
   * Singleton resource under a web DataStream, configuring measurement of additional site interactions and content.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings {
    /**
     * If enabled, capture a file download event each time a link is clicked with a common document, compressed file, application, video, or audio extension.
     */
    fileDownloadsEnabled?: boolean | null;
    /**
     * If enabled, capture a form interaction event each time a visitor interacts with a form on your website. False by default.
     */
    formInteractionsEnabled?: boolean | null;
    /**
     * Output only. Resource name of the Enhanced Measurement Settings. Format: properties/{property_id\}/dataStreams/{data_stream\}/enhancedMeasurementSettings Example: "properties/1000/dataStreams/2000/enhancedMeasurementSettings"
     */
    name?: string | null;
    /**
     * If enabled, capture an outbound click event each time a visitor clicks a link that leads them away from your domain.
     */
    outboundClicksEnabled?: boolean | null;
    /**
     * If enabled, capture a page view event each time the website changes the browser history state.
     */
    pageChangesEnabled?: boolean | null;
    /**
     * If enabled, capture scroll events each time a visitor gets to the bottom of a page.
     */
    scrollsEnabled?: boolean | null;
    /**
     * Required. URL query parameters to interpret as site search parameters. Max length is 1024 characters. Must not be empty.
     */
    searchQueryParameter?: string | null;
    /**
     * If enabled, capture a view search results event each time a visitor performs a search on your site (based on a query parameter).
     */
    siteSearchEnabled?: boolean | null;
    /**
     * Indicates whether Enhanced Measurement Settings will be used to automatically measure interactions and content on this web stream. Changing this value does not affect the settings themselves, but determines whether they are respected.
     */
    streamEnabled?: boolean | null;
    /**
     * Additional URL query parameters. Max length is 1024 characters.
     */
    uriQueryParameter?: string | null;
    /**
     * If enabled, capture video play, progress, and complete events as visitors view embedded videos on your site.
     */
    videoEngagementEnabled?: boolean | null;
  }
  /**
   * An Event Create Rule defines conditions that will trigger the creation of an entirely new event based upon matched criteria of a source event. Additional mutations of the parameters from the source event can be defined. Unlike Event Edit rules, Event Creation Rules have no defined order. They will all be run independently. Event Edit and Event Create rules can't be used to modify an event created from an Event Create rule.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaEventCreateRule {
    /**
     * Required. The name of the new event to be created. This value must: * be less than 40 characters * consist only of letters, digits or _ (underscores) * start with a letter
     */
    destinationEvent?: string | null;
    /**
     * Required. Must have at least one condition, and can have up to 10 max. Conditions on the source event must match for this rule to be applied.
     */
    eventConditions?: Schema$GoogleAnalyticsAdminV1alphaMatchingCondition[];
    /**
     * Output only. Resource name for this EventCreateRule resource. Format: properties/{property\}/dataStreams/{data_stream\}/eventCreateRules/{event_create_rule\}
     */
    name?: string | null;
    /**
     * Parameter mutations define parameter behavior on the new event, and are applied in order. A maximum of 20 mutations can be applied.
     */
    parameterMutations?: Schema$GoogleAnalyticsAdminV1alphaParameterMutation[];
    /**
     * If true, the source parameters are copied to the new event. If false, or unset, all non-internal parameters are not copied from the source event. Parameter mutations are applied after the parameters have been copied.
     */
    sourceCopyParameters?: boolean | null;
  }
  /**
   * A resource message representing a GA4 ExpandedDataSet.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaExpandedDataSet {
    /**
     * Output only. Time when expanded data set began (or will begin) collecing data.
     */
    dataCollectionStartTime?: string | null;
    /**
     * Optional. The description of the ExpandedDataSet. Max 50 chars.
     */
    description?: string | null;
    /**
     * Immutable. A logical expression of ExpandedDataSet filters applied to dimension included in the ExpandedDataSet. This filter is used to reduce the number of rows and thus the chance of encountering `other` row.
     */
    dimensionFilterExpression?: Schema$GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression;
    /**
     * Immutable. The list of dimensions included in the ExpandedDataSet. See the [API Dimensions](https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema#dimensions) for the list of dimension names.
     */
    dimensionNames?: string[] | null;
    /**
     * Required. The display name of the ExpandedDataSet. Max 200 chars.
     */
    displayName?: string | null;
    /**
     * Immutable. The list of metrics included in the ExpandedDataSet. See the [API Metrics](https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema#metrics) for the list of dimension names.
     */
    metricNames?: string[] | null;
    /**
     * Output only. The resource name for this ExpandedDataSet resource. Format: properties/{property_id\}/expandedDataSets/{expanded_data_set\}
     */
    name?: string | null;
  }
  /**
   * A specific filter for a single dimension
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaExpandedDataSetFilter {
    /**
     * Required. The dimension name to filter.
     */
    fieldName?: string | null;
    /**
     * A filter for a string dimension that matches a particular list of options.
     */
    inListFilter?: Schema$GoogleAnalyticsAdminV1alphaExpandedDataSetFilterInListFilter;
    /**
     * A filter for a string-type dimension that matches a particular pattern.
     */
    stringFilter?: Schema$GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilter;
  }
  /**
   * A logical expression of EnhancedDataSet dimension filters.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression {
    /**
     * A list of expressions to be AND’ed together. It must contain a ExpandedDataSetFilterExpression with either not_expression or dimension_filter. This must be set for the top level ExpandedDataSetFilterExpression.
     */
    andGroup?: Schema$GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpressionList;
    /**
     * A filter on a single dimension. This cannot be set on the top level ExpandedDataSetFilterExpression.
     */
    filter?: Schema$GoogleAnalyticsAdminV1alphaExpandedDataSetFilter;
    /**
     * A filter expression to be NOT'ed (that is, inverted, complemented). It must include a dimension_filter. This cannot be set on the top level ExpandedDataSetFilterExpression.
     */
    notExpression?: Schema$GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression;
  }
  /**
   * A list of ExpandedDataSet filter expressions.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpressionList {
    /**
     * A list of ExpandedDataSet filter expressions.
     */
    filterExpressions?: Schema$GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression[];
  }
  /**
   * A filter for a string dimension that matches a particular list of options.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaExpandedDataSetFilterInListFilter {
    /**
     * Optional. If true, the match is case-sensitive. If false, the match is case-insensitive. Must be true.
     */
    caseSensitive?: boolean | null;
    /**
     * Required. The list of possible string values to match against. Must be non-empty.
     */
    values?: string[] | null;
  }
  /**
   * A filter for a string-type dimension that matches a particular pattern.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilter {
    /**
     * Optional. If true, the match is case-sensitive. If false, the match is case-insensitive. Must be true when match_type is EXACT. Must be false when match_type is CONTAINS.
     */
    caseSensitive?: boolean | null;
    /**
     * Required. The match type for the string filter.
     */
    matchType?: string | null;
    /**
     * Required. The string value to be matched against.
     */
    value?: string | null;
  }
  /**
   * Request for fetching the opt out status for the automated GA4 setup process.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutRequest {
    /**
     * Required. The UA property to get the opt out status. Note this request uses the internal property ID, not the tracking ID of the form UA-XXXXXX-YY. Format: properties/{internalWebPropertyId\} Example: properties/1234
     */
    property?: string | null;
  }
  /**
   * Response message for fetching the opt out status for the automated GA4 setup process.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutResponse {
    /**
     * The opt out status for the UA property.
     */
    optOut?: boolean | null;
  }
  /**
   * Response for looking up GA4 property connected to a UA property.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaFetchConnectedGa4PropertyResponse {
    /**
     * The GA4 property connected to the UA property. An empty string is returned when there is no connected GA4 property. Format: properties/{property_id\} Example: properties/1234
     */
    property?: string | null;
  }
  /**
   * A link between a GA4 property and a Firebase project.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaFirebaseLink {
    /**
     * Output only. Time when this FirebaseLink was originally created.
     */
    createTime?: string | null;
    /**
     * Output only. Example format: properties/1234/firebaseLinks/5678
     */
    name?: string | null;
    /**
     * Immutable. Firebase project resource name. When creating a FirebaseLink, you may provide this resource name using either a project number or project ID. Once this resource has been created, returned FirebaseLinks will always have a project_name that contains a project number. Format: 'projects/{project number\}' Example: 'projects/1234'
     */
    project?: string | null;
  }
  /**
   * Read-only resource with the tag for sending data from a website to a DataStream. Only present for web DataStream resources.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaGlobalSiteTag {
    /**
     * Output only. Resource name for this GlobalSiteTag resource. Format: properties/{property_id\}/dataStreams/{stream_id\}/globalSiteTag Example: "properties/123/dataStreams/456/globalSiteTag"
     */
    name?: string | null;
    /**
     * Immutable. JavaScript code snippet to be pasted as the first item into the head tag of every webpage to measure.
     */
    snippet?: string | null;
  }
  /**
   * A link between a GA4 property and a Google Ads account.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink {
    /**
     * Enable personalized advertising features with this integration. Automatically publish my Google Analytics audience lists and Google Analytics remarketing events/parameters to the linked Google Ads account. If this field is not set on create/update, it will be defaulted to true.
     */
    adsPersonalizationEnabled?: boolean | null;
    /**
     * Output only. If true, this link is for a Google Ads manager account.
     */
    canManageClients?: boolean | null;
    /**
     * Output only. Time when this link was originally created.
     */
    createTime?: string | null;
    /**
     * Output only. Email address of the user that created the link. An empty string will be returned if the email address can't be retrieved.
     */
    creatorEmailAddress?: string | null;
    /**
     * Immutable. Google Ads customer ID.
     */
    customerId?: string | null;
    /**
     * Output only. Format: properties/{propertyId\}/googleAdsLinks/{googleAdsLinkId\} Note: googleAdsLinkId is not the Google Ads customer ID.
     */
    name?: string | null;
    /**
     * Output only. Time when this link was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Settings values for Google Signals. This is a singleton resource.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings {
    /**
     * Output only. Terms of Service acceptance.
     */
    consent?: string | null;
    /**
     * Output only. Resource name of this setting. Format: properties/{property_id\}/googleSignalsSettings Example: "properties/1000/googleSignalsSettings"
     */
    name?: string | null;
    /**
     * Status of this setting.
     */
    state?: string | null;
  }
  /**
   * The rules that govern how traffic is grouped into one channel.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaGroupingRule {
    /**
     * Required. Customer defined display name for the channel.
     */
    displayName?: string | null;
    /**
     * Required. The Filter Expression that defines the Grouping Rule.
     */
    expression?: Schema$GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression;
  }
  /**
   * Status information for a link proposal.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaLinkProposalStatusDetails {
    /**
     * Output only. The source of this proposal.
     */
    linkProposalInitiatingProduct?: string | null;
    /**
     * Output only. The state of this proposal.
     */
    linkProposalState?: string | null;
    /**
     * Output only. The email address of the user that proposed this linkage.
     */
    requestorEmail?: string | null;
  }
  /**
   * Response message for ListAccessBindings RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaListAccessBindingsResponse {
    /**
     * List of AccessBindings. These will be ordered stably, but in an arbitrary order.
     */
    accessBindings?: Schema$GoogleAnalyticsAdminV1alphaAccessBinding[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Request message for ListAccounts RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaListAccountsResponse {
    /**
     * Results that were accessible to the caller.
     */
    accounts?: Schema$GoogleAnalyticsAdminV1alphaAccount[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for ListAccountSummaries RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaListAccountSummariesResponse {
    /**
     * Account summaries of all accounts the caller has access to.
     */
    accountSummaries?: Schema$GoogleAnalyticsAdminV1alphaAccountSummary[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for ListAdSenseLinks method.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaListAdSenseLinksResponse {
    /**
     * List of AdSenseLinks.
     */
    adsenseLinks?: Schema$GoogleAnalyticsAdminV1alphaAdSenseLink[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for ListAudiences RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaListAudiencesResponse {
    /**
     * List of Audiences.
     */
    audiences?: Schema$GoogleAnalyticsAdminV1alphaAudience[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for ListBigQueryLinks RPC
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaListBigQueryLinksResponse {
    /**
     * List of BigQueryLinks.
     */
    bigqueryLinks?: Schema$GoogleAnalyticsAdminV1alphaBigQueryLink[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for ListChannelGroups RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaListChannelGroupsResponse {
    /**
     * List of ChannelGroup. These will be ordered stably, but in an arbitrary order.
     */
    channelGroups?: Schema$GoogleAnalyticsAdminV1alphaChannelGroup[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Request message for ListConnectedSiteTags RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaListConnectedSiteTagsRequest {
    /**
     * The Universal Analytics property to fetch connected site tags for. This does not work on GA4 properties. A maximum of 20 connected site tags will be returned. Example Format: `properties/1234`
     */
    property?: string | null;
  }
  /**
   * Response message for ListConnectedSiteTags RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaListConnectedSiteTagsResponse {
    /**
     * The site tags for the Universal Analytics property. A maximum of 20 connected site tags will be returned.
     */
    connectedSiteTags?: Schema$GoogleAnalyticsAdminV1alphaConnectedSiteTag[];
  }
  /**
   * Response message for ListConversionEvents RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaListConversionEventsResponse {
    /**
     * The requested conversion events
     */
    conversionEvents?: Schema$GoogleAnalyticsAdminV1alphaConversionEvent[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for ListCustomDimensions RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaListCustomDimensionsResponse {
    /**
     * List of CustomDimensions.
     */
    customDimensions?: Schema$GoogleAnalyticsAdminV1alphaCustomDimension[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for ListCustomMetrics RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaListCustomMetricsResponse {
    /**
     * List of CustomMetrics.
     */
    customMetrics?: Schema$GoogleAnalyticsAdminV1alphaCustomMetric[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for ListDataStreams RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaListDataStreamsResponse {
    /**
     * List of DataStreams.
     */
    dataStreams?: Schema$GoogleAnalyticsAdminV1alphaDataStream[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for ListDisplayVideo360AdvertiserLinkProposals RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse {
    /**
     * List of DisplayVideo360AdvertiserLinkProposals.
     */
    displayVideo360AdvertiserLinkProposals?: Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for ListDisplayVideo360AdvertiserLinks RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse {
    /**
     * List of DisplayVideo360AdvertiserLinks.
     */
    displayVideo360AdvertiserLinks?: Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for ListEventCreateRules RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaListEventCreateRulesResponse {
    /**
     * List of EventCreateRules. These will be ordered stably, but in an arbitrary order.
     */
    eventCreateRules?: Schema$GoogleAnalyticsAdminV1alphaEventCreateRule[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for ListExpandedDataSets RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaListExpandedDataSetsResponse {
    /**
     * List of ExpandedDataSet. These will be ordered stably, but in an arbitrary order.
     */
    expandedDataSets?: Schema$GoogleAnalyticsAdminV1alphaExpandedDataSet[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for ListFirebaseLinks RPC
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse {
    /**
     * List of FirebaseLinks. This will have at most one value.
     */
    firebaseLinks?: Schema$GoogleAnalyticsAdminV1alphaFirebaseLink[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. Currently, Google Analytics supports only one FirebaseLink per property, so this will never be populated.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for ListGoogleAdsLinks RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse {
    /**
     * List of GoogleAdsLinks.
     */
    googleAdsLinks?: Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for ListMeasurementProtocolSecret RPC
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse {
    /**
     * A list of secrets for the parent stream specified in the request.
     */
    measurementProtocolSecrets?: Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for ListProperties RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaListPropertiesResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Results that matched the filter criteria and were accessible to the caller.
     */
    properties?: Schema$GoogleAnalyticsAdminV1alphaProperty[];
  }
  /**
   * Response message for ListSearchAds360Links RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaListSearchAds360LinksResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * List of SearchAds360Links.
     */
    searchAds360Links?: Schema$GoogleAnalyticsAdminV1alphaSearchAds360Link[];
  }
  /**
   * Response message for ListUserLinks RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * List of UserLinks. These will be ordered stably, but in an arbitrary order.
     */
    userLinks?: Schema$GoogleAnalyticsAdminV1alphaUserLink[];
  }
  /**
   * Defines a condition for when an Event Edit or Event Creation rule applies to an event.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaMatchingCondition {
    /**
     * Required. The type of comparison to be applied to the value.
     */
    comparisonType?: string | null;
    /**
     * Required. The name of the field that is compared against for the condition. If 'event_name' is specified this condition will apply to the name of the event. Otherwise the condition will apply to a parameter with the specified name. This value cannot contain spaces.
     */
    field?: string | null;
    /**
     * Whether or not the result of the comparison should be negated. For example, if `negated` is true, then 'equals' comparisons would function as 'not equals'.
     */
    negated?: boolean | null;
    /**
     * Required. The value being compared against for this condition. The runtime implementation may perform type coercion of this value to evaluate this condition based on the type of the parameter value.
     */
    value?: string | null;
  }
  /**
   * A secret value used for sending hits to Measurement Protocol.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret {
    /**
     * Required. Human-readable display name for this secret.
     */
    displayName?: string | null;
    /**
     * Output only. Resource name of this secret. This secret may be a child of any type of stream. Format: properties/{property\}/dataStreams/{dataStream\}/measurementProtocolSecrets/{measurementProtocolSecret\}
     */
    name?: string | null;
    /**
     * Output only. The measurement protocol secret value. Pass this value to the api_secret field of the Measurement Protocol API when sending hits to this secret's parent property.
     */
    secretValue?: string | null;
  }
  /**
   * To represent a number.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaNumericValue {
    /**
     * Double value
     */
    doubleValue?: number | null;
    /**
     * Integer value
     */
    int64Value?: string | null;
  }
  /**
   * Defines an event parameter to mutate.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaParameterMutation {
    /**
     * Required. The name of the parameter to mutate. This value must: * be less than 40 characters. * be unique across across all mutations within the rule * consist only of letters, digits or _ (underscores) For event edit rules, the name may also be set to 'event_name' to modify the event_name in place.
     */
    parameter?: string | null;
    /**
     * Required. The value mutation to perform. * Must be less than 100 characters. * To specify a constant value for the param, use the value's string. * To copy value from another parameter, use syntax like "[[other_parameter]]" For more details, see this [help center article](https://support.google.com/analytics/answer/10085872#modify-an-event&zippy=%2Cin-this-article%2Cmodify-parameters).
     */
    parameterValue?: string | null;
  }
  /**
   * A resource message representing a Google Analytics GA4 property.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaProperty {
    /**
     * Immutable. The resource name of the parent account Format: accounts/{account_id\} Example: "accounts/123"
     */
    account?: string | null;
    /**
     * Output only. Time when the entity was originally created.
     */
    createTime?: string | null;
    /**
     * The currency type used in reports involving monetary values. Format: https://en.wikipedia.org/wiki/ISO_4217 Examples: "USD", "EUR", "JPY"
     */
    currencyCode?: string | null;
    /**
     * Output only. If set, the time at which this property was trashed. If not set, then this property is not currently in the trash can.
     */
    deleteTime?: string | null;
    /**
     * Required. Human-readable display name for this property. The max allowed display name length is 100 UTF-16 code units.
     */
    displayName?: string | null;
    /**
     * Output only. If set, the time at which this trashed property will be permanently deleted. If not set, then this property is not currently in the trash can and is not slated to be deleted.
     */
    expireTime?: string | null;
    /**
     * Industry associated with this property Example: AUTOMOTIVE, FOOD_AND_DRINK
     */
    industryCategory?: string | null;
    /**
     * Output only. Resource name of this property. Format: properties/{property_id\} Example: "properties/1000"
     */
    name?: string | null;
    /**
     * Immutable. Resource name of this property's logical parent. Note: The Property-Moving UI can be used to change the parent. Format: accounts/{account\}, properties/{property\} Example: "accounts/100", "properties/101"
     */
    parent?: string | null;
    /**
     * Immutable. The property type for this Property resource. When creating a property, if the type is "PROPERTY_TYPE_UNSPECIFIED", then "ORDINARY_PROPERTY" will be implied. "SUBPROPERTY" and "ROLLUP_PROPERTY" types cannot yet be created with the Google Analytics Admin API.
     */
    propertyType?: string | null;
    /**
     * Output only. The Google Analytics service level that applies to this property.
     */
    serviceLevel?: string | null;
    /**
     * Required. Reporting Time Zone, used as the day boundary for reports, regardless of where the data originates. If the time zone honors DST, Analytics will automatically adjust for the changes. NOTE: Changing the time zone only affects data going forward, and is not applied retroactively. Format: https://www.iana.org/time-zones Example: "America/Los_Angeles"
     */
    timeZone?: string | null;
    /**
     * Output only. Time when entity payload fields were last updated.
     */
    updateTime?: string | null;
  }
  /**
   * A virtual resource representing metadata for a GA4 property.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaPropertySummary {
    /**
     * Display name for the property referred to in this property summary.
     */
    displayName?: string | null;
    /**
     * Resource name of this property's logical parent. Note: The Property-Moving UI can be used to change the parent. Format: accounts/{account\}, properties/{property\} Example: "accounts/100", "properties/200"
     */
    parent?: string | null;
    /**
     * Resource name of property referred to by this property summary Format: properties/{property_id\} Example: "properties/1000"
     */
    property?: string | null;
    /**
     * The property's property type.
     */
    propertyType?: string | null;
  }
  /**
   * Request message for ProvisionAccountTicket RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaProvisionAccountTicketRequest {
    /**
     * The account to create.
     */
    account?: Schema$GoogleAnalyticsAdminV1alphaAccount;
    /**
     * Redirect URI where the user will be sent after accepting Terms of Service. Must be configured in Cloud Console as a Redirect URI.
     */
    redirectUri?: string | null;
  }
  /**
   * Response message for ProvisionAccountTicket RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse {
    /**
     * The param to be passed in the ToS link.
     */
    accountTicketId?: string | null;
  }
  /**
   * The request for a Data Access Record Report.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaRunAccessReportRequest {
    /**
     * Date ranges of access records to read. If multiple date ranges are requested, each response row will contain a zero based date range index. If two date ranges overlap, the access records for the overlapping days is included in the response rows for both date ranges. Requests are allowed up to 2 date ranges.
     */
    dateRanges?: Schema$GoogleAnalyticsAdminV1alphaAccessDateRange[];
    /**
     * Dimension filters let you restrict report response to specific dimension values which match the filter. For example, filtering on access records of a single user. To learn more, see [Fundamentals of Dimension Filters](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#dimension_filters) for examples. Metrics cannot be used in this filter.
     */
    dimensionFilter?: Schema$GoogleAnalyticsAdminV1alphaAccessFilterExpression;
    /**
     * The dimensions requested and displayed in the response. Requests are allowed up to 9 dimensions.
     */
    dimensions?: Schema$GoogleAnalyticsAdminV1alphaAccessDimension[];
    /**
     * The number of rows to return. If unspecified, 10,000 rows are returned. The API returns a maximum of 100,000 rows per request, no matter how many you ask for. `limit` must be positive. The API may return fewer rows than the requested `limit`, if there aren't as many remaining rows as the `limit`. For instance, there are fewer than 300 possible values for the dimension `country`, so when reporting on only `country`, you can't get more than 300 rows, even if you set `limit` to a higher value. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination).
     */
    limit?: string | null;
    /**
     * Metric filters allow you to restrict report response to specific metric values which match the filter. Metric filters are applied after aggregating the report's rows, similar to SQL having-clause. Dimensions cannot be used in this filter.
     */
    metricFilter?: Schema$GoogleAnalyticsAdminV1alphaAccessFilterExpression;
    /**
     * The metrics requested and displayed in the response. Requests are allowed up to 10 metrics.
     */
    metrics?: Schema$GoogleAnalyticsAdminV1alphaAccessMetric[];
    /**
     * The row count of the start row. The first row is counted as row 0. If offset is unspecified, it is treated as 0. If offset is zero, then this method will return the first page of results with `limit` entries. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination).
     */
    offset?: string | null;
    /**
     * Specifies how rows are ordered in the response.
     */
    orderBys?: Schema$GoogleAnalyticsAdminV1alphaAccessOrderBy[];
    /**
     * Toggles whether to return the current state of this Analytics Property's quota. Quota is returned in [AccessQuota](#AccessQuota). For account-level requests, this field must be false.
     */
    returnEntityQuota?: boolean | null;
    /**
     * This request's time zone if specified. If unspecified, the property's time zone is used. The request's time zone is used to interpret the start & end dates of the report. Formatted as strings from the IANA Time Zone database (https://www.iana.org/time-zones); for example "America/New_York" or "Asia/Tokyo".
     */
    timeZone?: string | null;
  }
  /**
   * The customized Data Access Record Report response.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaRunAccessReportResponse {
    /**
     * The header for a column in the report that corresponds to a specific dimension. The number of DimensionHeaders and ordering of DimensionHeaders matches the dimensions present in rows.
     */
    dimensionHeaders?: Schema$GoogleAnalyticsAdminV1alphaAccessDimensionHeader[];
    /**
     * The header for a column in the report that corresponds to a specific metric. The number of MetricHeaders and ordering of MetricHeaders matches the metrics present in rows.
     */
    metricHeaders?: Schema$GoogleAnalyticsAdminV1alphaAccessMetricHeader[];
    /**
     * The quota state for this Analytics property including this request. This field doesn't work with account-level requests.
     */
    quota?: Schema$GoogleAnalyticsAdminV1alphaAccessQuota;
    /**
     * The total number of rows in the query result. `rowCount` is independent of the number of rows returned in the response, the `limit` request parameter, and the `offset` request parameter. For example if a query returns 175 rows and includes `limit` of 50 in the API request, the response will contain `rowCount` of 175 but only 50 rows. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination).
     */
    rowCount?: number | null;
    /**
     * Rows of dimension value combinations and metric values in the report.
     */
    rows?: Schema$GoogleAnalyticsAdminV1alphaAccessRow[];
  }
  /**
   * A link between a GA4 property and a Search Ads 360 entity.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaSearchAds360Link {
    /**
     * Enables personalized advertising features with this integration. If this field is not set on create, it will be defaulted to true.
     */
    adsPersonalizationEnabled?: boolean | null;
    /**
     * Output only. The display name of the Search Ads 360 Advertiser. Allows users to easily identify the linked resource.
     */
    advertiserDisplayName?: string | null;
    /**
     * Immutable. This field represents the Advertiser ID of the Search Ads 360 Advertiser. that has been linked.
     */
    advertiserId?: string | null;
    /**
     * Immutable. Enables the import of campaign data from Search Ads 360 into the GA4 property. After link creation, this can only be updated from the Search Ads 360 product. If this field is not set on create, it will be defaulted to true.
     */
    campaignDataSharingEnabled?: boolean | null;
    /**
     * Immutable. Enables the import of cost data from Search Ads 360 to the GA4 property. This can only be enabled if campaign_data_sharing_enabled is enabled. After link creation, this can only be updated from the Search Ads 360 product. If this field is not set on create, it will be defaulted to true.
     */
    costDataSharingEnabled?: boolean | null;
    /**
     * Output only. The resource name for this SearchAds360Link resource. Format: properties/{propertyId\}/searchAds360Links/{linkId\} Note: linkId is not the Search Ads 360 advertiser ID
     */
    name?: string | null;
    /**
     * Enables export of site stats with this integration. If this field is not set on create, it will be defaulted to true.
     */
    siteStatsSharingEnabled?: boolean | null;
  }
  /**
   * Request message for SearchChangeHistoryEvents RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequest {
    /**
     * Optional. If set, only return changes that match one or more of these types of actions.
     */
    action?: string[] | null;
    /**
     * Optional. If set, only return changes if they are made by a user in this list.
     */
    actorEmail?: string[] | null;
    /**
     * Optional. If set, only return changes made after this time (inclusive).
     */
    earliestChangeTime?: string | null;
    /**
     * Optional. If set, only return changes made before this time (inclusive).
     */
    latestChangeTime?: string | null;
    /**
     * Optional. The maximum number of ChangeHistoryEvent items to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 items will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     */
    pageSize?: number | null;
    /**
     * Optional. A page token, received from a previous `SearchChangeHistoryEvents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchChangeHistoryEvents` must match the call that provided the page token.
     */
    pageToken?: string | null;
    /**
     * Optional. Resource name for a child property. If set, only return changes made to this property or its child resources.
     */
    property?: string | null;
    /**
     * Optional. If set, only return changes if they are for a resource that matches at least one of these types.
     */
    resourceType?: string[] | null;
  }
  /**
   * Response message for SearchAccounts RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse {
    /**
     * Results that were accessible to the caller.
     */
    changeHistoryEvents?: Schema$GoogleAnalyticsAdminV1alphaChangeHistoryEvent[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Request for setting the opt out status for the automated GA4 setup process.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaSetAutomatedGa4ConfigurationOptOutRequest {
    /**
     * The status to set.
     */
    optOut?: boolean | null;
    /**
     * Required. The UA property to set the opt out status. Note this request uses the internal property ID, not the tracking ID of the form UA-XXXXXX-YY. Format: properties/{internalWebPropertyId\} Example: properties/1234
     */
    property?: string | null;
  }
  /**
   * Response message for setting the opt out status for the automated GA4 setup process.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaSetAutomatedGa4ConfigurationOptOutResponse {}
  /**
   * Request message for UpdateAccessBinding RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaUpdateAccessBindingRequest {
    /**
     * Required. The access binding to update.
     */
    accessBinding?: Schema$GoogleAnalyticsAdminV1alphaAccessBinding;
  }
  /**
   * Request message for UpdateUserLink RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaUpdateUserLinkRequest {
    /**
     * Required. The user link to update.
     */
    userLink?: Schema$GoogleAnalyticsAdminV1alphaUserLink;
  }
  /**
   * A resource message representing a user's permissions on an Account or Property resource.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaUserLink {
    /**
     * Roles directly assigned to this user for this account or property. Valid values: predefinedRoles/viewer predefinedRoles/analyst predefinedRoles/editor predefinedRoles/admin predefinedRoles/no-cost-data predefinedRoles/no-revenue-data Excludes roles that are inherited from a higher-level entity, group, or organization admin role. A UserLink that is updated to have an empty list of direct_roles will be deleted.
     */
    directRoles?: string[] | null;
    /**
     * Immutable. Email address of the user to link
     */
    emailAddress?: string | null;
    /**
     * Output only. Example format: properties/1234/userLinks/5678
     */
    name?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$GoogleProtobufEmpty {}

  export class Resource$Accounts {
    context: APIRequestContext;
    accessBindings: Resource$Accounts$Accessbindings;
    userLinks: Resource$Accounts$Userlinks;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.accessBindings = new Resource$Accounts$Accessbindings(this.context);
      this.userLinks = new Resource$Accounts$Userlinks(this.context);
    }

    /**
     * Marks target Account as soft-deleted (ie: "trashed") and returns it. This API does not have a method to restore soft-deleted accounts. However, they can be restored using the Trash Can UI. If the accounts are not restored before the expiration time, the account and all child resources (eg: Properties, GoogleAdsLinks, Streams, UserLinks) will be permanently purged. https://support.google.com/analytics/answer/6154772 Returns an error if the target is not found.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.accounts.delete({
     *     // Required. The name of the Account to soft-delete. Format: accounts/{account\} Example: "accounts/100"
     *     name: 'accounts/my-account',
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
      params: Params$Resource$Accounts$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Accounts$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Accounts$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Accounts$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Accounts$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Accounts$Delete
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
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Accounts$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Lookup for a single Account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.accounts.get({
     *     // Required. The name of the account to lookup. Format: accounts/{account\} Example: "accounts/100"
     *     name: 'accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "deleted": false,
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "regionCode": "my_regionCode",
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
      params: Params$Resource$Accounts$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Accounts$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAccount>;
    get(
      params: Params$Resource$Accounts$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounts$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccount>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccount>
    ): void;
    get(
      params: Params$Resource$Accounts$Get,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccount>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccount>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Get
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccount>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccount>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccount>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAccount>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Accounts$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAccount>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAccount>(
          parameters
        );
      }
    }

    /**
     * Get data sharing settings on an account. Data sharing settings are singletons.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.accounts.getDataSharingSettings({
     *     // Required. The name of the settings to lookup. Format: accounts/{account\}/dataSharingSettings Example: "accounts/1000/dataSharingSettings"
     *     name: 'accounts/my-account/dataSharingSettings',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "sharingWithGoogleAnySalesEnabled": false,
     *   //   "sharingWithGoogleAssignedSalesEnabled": false,
     *   //   "sharingWithGoogleProductsEnabled": false,
     *   //   "sharingWithGoogleSupportEnabled": false,
     *   //   "sharingWithOthersEnabled": false
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
    getDataSharingSettings(
      params: Params$Resource$Accounts$Getdatasharingsettings,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getDataSharingSettings(
      params?: Params$Resource$Accounts$Getdatasharingsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaDataSharingSettings>;
    getDataSharingSettings(
      params: Params$Resource$Accounts$Getdatasharingsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getDataSharingSettings(
      params: Params$Resource$Accounts$Getdatasharingsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDataSharingSettings>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDataSharingSettings>
    ): void;
    getDataSharingSettings(
      params: Params$Resource$Accounts$Getdatasharingsettings,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDataSharingSettings>
    ): void;
    getDataSharingSettings(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDataSharingSettings>
    ): void;
    getDataSharingSettings(
      paramsOrCallback?:
        | Params$Resource$Accounts$Getdatasharingsettings
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDataSharingSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDataSharingSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDataSharingSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaDataSharingSettings>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Getdatasharingsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Getdatasharingsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaDataSharingSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaDataSharingSettings>(
          parameters
        );
      }
    }

    /**
     * Returns all accounts accessible by the caller. Note that these accounts might not currently have GA4 properties. Soft-deleted (ie: "trashed") accounts are excluded by default. Returns an empty list if no relevant accounts are found.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.accounts.list({
     *     // The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListAccounts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccounts` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Whether to include soft-deleted (ie: "trashed") Accounts in the results. Accounts can be inspected to determine whether they are deleted or not.
     *     showDeleted: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accounts": [],
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
      params: Params$Resource$Accounts$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Accounts$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListAccountsResponse>;
    list(
      params: Params$Resource$Accounts$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAccountsResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAccountsResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$List,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAccountsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAccountsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$List
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAccountsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAccountsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAccountsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListAccountsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Accounts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/accounts').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListAccountsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListAccountsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates an account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.accounts.patch({
     *     // Output only. Resource name of this account. Format: accounts/{account\} Example: "accounts/100"
     *     name: 'accounts/my-account',
     *     // Required. The list of fields to be updated. Field names must be in snake case (for example, "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "deleted": false,
     *       //   "displayName": "my_displayName",
     *       //   "name": "my_name",
     *       //   "regionCode": "my_regionCode",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "deleted": false,
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "regionCode": "my_regionCode",
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
      params: Params$Resource$Accounts$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Accounts$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAccount>;
    patch(
      params: Params$Resource$Accounts$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Accounts$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccount>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccount>
    ): void;
    patch(
      params: Params$Resource$Accounts$Patch,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccount>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccount>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Accounts$Patch
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccount>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccount>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccount>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAccount>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Accounts$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAccount>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAccount>(
          parameters
        );
      }
    }

    /**
     * Requests a ticket for creating an account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.accounts.provisionAccountTicket({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "account": {},
     *       //   "redirectUri": "my_redirectUri"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountTicketId": "my_accountTicketId"
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
    provisionAccountTicket(
      params: Params$Resource$Accounts$Provisionaccountticket,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    provisionAccountTicket(
      params?: Params$Resource$Accounts$Provisionaccountticket,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse>;
    provisionAccountTicket(
      params: Params$Resource$Accounts$Provisionaccountticket,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    provisionAccountTicket(
      params: Params$Resource$Accounts$Provisionaccountticket,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse>
    ): void;
    provisionAccountTicket(
      params: Params$Resource$Accounts$Provisionaccountticket,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse>
    ): void;
    provisionAccountTicket(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse>
    ): void;
    provisionAccountTicket(
      paramsOrCallback?:
        | Params$Resource$Accounts$Provisionaccountticket
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Provisionaccountticket;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Provisionaccountticket;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/accounts:provisionAccountTicket').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse>(
          parameters
        );
      }
    }

    /**
     * Returns a customized report of data access records. The report provides records of each time a user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be requested for a property. The property must be in Google Analytics 360. This method is only available to Administrators. These data access records include GA4 UI Reporting, GA4 UI Explorations, GA4 Data API, and other products like Firebase & Admob that can retrieve data from Google Analytics through a linkage. These records don't include property configuration changes like adding a stream or changing a property's time zone. For configuration change history, see [searchChangeHistoryEvents](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/accounts/searchChangeHistoryEvents).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.accounts.runAccessReport({
     *     // The Data Access Report supports requesting at the property level or account level. If requested at the account level, Data Access Reports include all access for all properties under that account. To request at the property level, entity should be for example 'properties/123' if "123" is your GA4 property ID. To request at the account level, entity should be for example 'accounts/1234' if "1234" is your GA4 Account ID.
     *     entity: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "dateRanges": [],
     *       //   "dimensionFilter": {},
     *       //   "dimensions": [],
     *       //   "limit": "my_limit",
     *       //   "metricFilter": {},
     *       //   "metrics": [],
     *       //   "offset": "my_offset",
     *       //   "orderBys": [],
     *       //   "returnEntityQuota": false,
     *       //   "timeZone": "my_timeZone"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dimensionHeaders": [],
     *   //   "metricHeaders": [],
     *   //   "quota": {},
     *   //   "rowCount": 0,
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
    runAccessReport(
      params: Params$Resource$Accounts$Runaccessreport,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    runAccessReport(
      params?: Params$Resource$Accounts$Runaccessreport,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaRunAccessReportResponse>;
    runAccessReport(
      params: Params$Resource$Accounts$Runaccessreport,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    runAccessReport(
      params: Params$Resource$Accounts$Runaccessreport,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaRunAccessReportResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaRunAccessReportResponse>
    ): void;
    runAccessReport(
      params: Params$Resource$Accounts$Runaccessreport,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaRunAccessReportResponse>
    ): void;
    runAccessReport(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaRunAccessReportResponse>
    ): void;
    runAccessReport(
      paramsOrCallback?:
        | Params$Resource$Accounts$Runaccessreport
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaRunAccessReportResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaRunAccessReportResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaRunAccessReportResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaRunAccessReportResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Runaccessreport;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Runaccessreport;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+entity}:runAccessReport').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['entity'],
        pathParams: ['entity'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaRunAccessReportResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaRunAccessReportResponse>(
          parameters
        );
      }
    }

    /**
     * Searches through all changes to an account or its children given the specified set of filters.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.accounts.searchChangeHistoryEvents({
     *     // Required. The account resource for which to return change history resources.
     *     account: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "action": [],
     *       //   "actorEmail": [],
     *       //   "earliestChangeTime": "my_earliestChangeTime",
     *       //   "latestChangeTime": "my_latestChangeTime",
     *       //   "pageSize": 0,
     *       //   "pageToken": "my_pageToken",
     *       //   "property": "my_property",
     *       //   "resourceType": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "changeHistoryEvents": [],
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
    searchChangeHistoryEvents(
      params: Params$Resource$Accounts$Searchchangehistoryevents,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    searchChangeHistoryEvents(
      params?: Params$Resource$Accounts$Searchchangehistoryevents,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse>;
    searchChangeHistoryEvents(
      params: Params$Resource$Accounts$Searchchangehistoryevents,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    searchChangeHistoryEvents(
      params: Params$Resource$Accounts$Searchchangehistoryevents,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse>
    ): void;
    searchChangeHistoryEvents(
      params: Params$Resource$Accounts$Searchchangehistoryevents,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse>
    ): void;
    searchChangeHistoryEvents(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse>
    ): void;
    searchChangeHistoryEvents(
      paramsOrCallback?:
        | Params$Resource$Accounts$Searchchangehistoryevents
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Searchchangehistoryevents;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Searchchangehistoryevents;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1alpha/{+account}:searchChangeHistoryEvents'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['account'],
        pathParams: ['account'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Accounts$Delete extends StandardParameters {
    /**
     * Required. The name of the Account to soft-delete. Format: accounts/{account\} Example: "accounts/100"
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Get extends StandardParameters {
    /**
     * Required. The name of the account to lookup. Format: accounts/{account\} Example: "accounts/100"
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Getdatasharingsettings
    extends StandardParameters {
    /**
     * Required. The name of the settings to lookup. Format: accounts/{account\}/dataSharingSettings Example: "accounts/1000/dataSharingSettings"
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$List extends StandardParameters {
    /**
     * The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListAccounts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccounts` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Whether to include soft-deleted (ie: "trashed") Accounts in the results. Accounts can be inspected to determine whether they are deleted or not.
     */
    showDeleted?: boolean;
  }
  export interface Params$Resource$Accounts$Patch extends StandardParameters {
    /**
     * Output only. Resource name of this account. Format: accounts/{account\} Example: "accounts/100"
     */
    name?: string;
    /**
     * Required. The list of fields to be updated. Field names must be in snake case (for example, "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaAccount;
  }
  export interface Params$Resource$Accounts$Provisionaccountticket
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaProvisionAccountTicketRequest;
  }
  export interface Params$Resource$Accounts$Runaccessreport
    extends StandardParameters {
    /**
     * The Data Access Report supports requesting at the property level or account level. If requested at the account level, Data Access Reports include all access for all properties under that account. To request at the property level, entity should be for example 'properties/123' if "123" is your GA4 property ID. To request at the account level, entity should be for example 'accounts/1234' if "1234" is your GA4 Account ID.
     */
    entity?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaRunAccessReportRequest;
  }
  export interface Params$Resource$Accounts$Searchchangehistoryevents
    extends StandardParameters {
    /**
     * Required. The account resource for which to return change history resources.
     */
    account?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequest;
  }

  export class Resource$Accounts$Accessbindings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates information about multiple access bindings to an account or property. This method is transactional. If any AccessBinding cannot be created, none of the AccessBindings will be created.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.accounts.accessBindings.batchCreate({
     *     // Required. The account or property that owns the access bindings. The parent field in the CreateAccessBindingRequest messages must either be empty or match this field. Formats: - accounts/{account\} - properties/{property\}
     *     parent: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "requests": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accessBindings": []
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
    batchCreate(
      params: Params$Resource$Accounts$Accessbindings$Batchcreate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchCreate(
      params?: Params$Resource$Accounts$Accessbindings$Batchcreate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsResponse>;
    batchCreate(
      params: Params$Resource$Accounts$Accessbindings$Batchcreate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchCreate(
      params: Params$Resource$Accounts$Accessbindings$Batchcreate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsResponse>
    ): void;
    batchCreate(
      params: Params$Resource$Accounts$Accessbindings$Batchcreate,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsResponse>
    ): void;
    batchCreate(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsResponse>
    ): void;
    batchCreate(
      paramsOrCallback?:
        | Params$Resource$Accounts$Accessbindings$Batchcreate
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Accessbindings$Batchcreate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Accessbindings$Batchcreate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1alpha/{+parent}/accessBindings:batchCreate'
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsResponse>(
          parameters
        );
      }
    }

    /**
     * Deletes information about multiple users' links to an account or property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.accounts.accessBindings.batchDelete({
     *     // Required. The account or property that owns the access bindings. The parent of all provided values for the 'names' field in DeleteAccessBindingRequest messages must match this field. Formats: - accounts/{account\} - properties/{property\}
     *     parent: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "requests": []
     *       // }
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
    batchDelete(
      params: Params$Resource$Accounts$Accessbindings$Batchdelete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchDelete(
      params?: Params$Resource$Accounts$Accessbindings$Batchdelete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    batchDelete(
      params: Params$Resource$Accounts$Accessbindings$Batchdelete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchDelete(
      params: Params$Resource$Accounts$Accessbindings$Batchdelete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    batchDelete(
      params: Params$Resource$Accounts$Accessbindings$Batchdelete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    batchDelete(
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    batchDelete(
      paramsOrCallback?:
        | Params$Resource$Accounts$Accessbindings$Batchdelete
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
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Accessbindings$Batchdelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Accessbindings$Batchdelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1alpha/{+parent}/accessBindings:batchDelete'
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Gets information about multiple access bindings to an account or property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.manage.users',
     *       'https://www.googleapis.com/auth/analytics.manage.users.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.accounts.accessBindings.batchGet({
     *     // Required. The names of the access bindings to retrieve. A maximum of 1000 access bindings can be retrieved in a batch. Formats: - accounts/{account\}/accessBindings/{accessBinding\} - properties/{property\}/accessBindings/{accessBinding\}
     *     names: 'placeholder-value',
     *     // Required. The account or property that owns the access bindings. The parent of all provided values for the 'names' field must match this field. Formats: - accounts/{account\} - properties/{property\}
     *     parent: 'accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accessBindings": []
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
    batchGet(
      params: Params$Resource$Accounts$Accessbindings$Batchget,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchGet(
      params?: Params$Resource$Accounts$Accessbindings$Batchget,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaBatchGetAccessBindingsResponse>;
    batchGet(
      params: Params$Resource$Accounts$Accessbindings$Batchget,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchGet(
      params: Params$Resource$Accounts$Accessbindings$Batchget,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchGetAccessBindingsResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchGetAccessBindingsResponse>
    ): void;
    batchGet(
      params: Params$Resource$Accounts$Accessbindings$Batchget,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchGetAccessBindingsResponse>
    ): void;
    batchGet(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchGetAccessBindingsResponse>
    ): void;
    batchGet(
      paramsOrCallback?:
        | Params$Resource$Accounts$Accessbindings$Batchget
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchGetAccessBindingsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchGetAccessBindingsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchGetAccessBindingsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaBatchGetAccessBindingsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Accessbindings$Batchget;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Accessbindings$Batchget;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1alpha/{+parent}/accessBindings:batchGet'
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaBatchGetAccessBindingsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaBatchGetAccessBindingsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates information about multiple access bindings to an account or property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.accounts.accessBindings.batchUpdate({
     *     // Required. The account or property that owns the access bindings. The parent of all provided AccessBinding in UpdateAccessBindingRequest messages must match this field. Formats: - accounts/{account\} - properties/{property\}
     *     parent: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "requests": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accessBindings": []
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
    batchUpdate(
      params: Params$Resource$Accounts$Accessbindings$Batchupdate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchUpdate(
      params?: Params$Resource$Accounts$Accessbindings$Batchupdate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsResponse>;
    batchUpdate(
      params: Params$Resource$Accounts$Accessbindings$Batchupdate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchUpdate(
      params: Params$Resource$Accounts$Accessbindings$Batchupdate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsResponse>
    ): void;
    batchUpdate(
      params: Params$Resource$Accounts$Accessbindings$Batchupdate,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsResponse>
    ): void;
    batchUpdate(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsResponse>
    ): void;
    batchUpdate(
      paramsOrCallback?:
        | Params$Resource$Accounts$Accessbindings$Batchupdate
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Accessbindings$Batchupdate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Accessbindings$Batchupdate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1alpha/{+parent}/accessBindings:batchUpdate'
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsResponse>(
          parameters
        );
      }
    }

    /**
     * Creates an access binding on an account or property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.accounts.accessBindings.create({
     *     // Required. Formats: - accounts/{account\} - properties/{property\}
     *     parent: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "name": "my_name",
     *       //   "roles": [],
     *       //   "user": "my_user"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "roles": [],
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
      params: Params$Resource$Accounts$Accessbindings$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Accounts$Accessbindings$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>;
    create(
      params: Params$Resource$Accounts$Accessbindings$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Accounts$Accessbindings$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>
    ): void;
    create(
      params: Params$Resource$Accounts$Accessbindings$Create,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Accounts$Accessbindings$Create
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Accessbindings$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Accessbindings$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/accessBindings').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>(
          parameters
        );
      }
    }

    /**
     * Deletes an access binding on an account or property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.accounts.accessBindings.delete({
     *     // Required. Formats: - accounts/{account\}/accessBindings/{accessBinding\} - properties/{property\}/accessBindings/{accessBinding\}
     *     name: 'accounts/my-account/accessBindings/my-accessBinding',
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
      params: Params$Resource$Accounts$Accessbindings$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Accounts$Accessbindings$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Accounts$Accessbindings$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Accounts$Accessbindings$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Accounts$Accessbindings$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Accounts$Accessbindings$Delete
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
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Accessbindings$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Accessbindings$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Gets information about an access binding.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.manage.users',
     *       'https://www.googleapis.com/auth/analytics.manage.users.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.accounts.accessBindings.get({
     *     // Required. The name of the access binding to retrieve. Formats: - accounts/{account\}/accessBindings/{accessBinding\} - properties/{property\}/accessBindings/{accessBinding\}
     *     name: 'accounts/my-account/accessBindings/my-accessBinding',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "roles": [],
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
    get(
      params: Params$Resource$Accounts$Accessbindings$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Accounts$Accessbindings$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>;
    get(
      params: Params$Resource$Accounts$Accessbindings$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounts$Accessbindings$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>
    ): void;
    get(
      params: Params$Resource$Accounts$Accessbindings$Get,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Accessbindings$Get
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Accessbindings$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Accessbindings$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>(
          parameters
        );
      }
    }

    /**
     * Lists all access bindings on an account or property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.manage.users',
     *       'https://www.googleapis.com/auth/analytics.manage.users.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.accounts.accessBindings.list({
     *     // The maximum number of access bindings to return. The service may return fewer than this value. If unspecified, at most 200 access bindings will be returned. The maximum value is 500; values above 500 will be coerced to 500.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListAccessBindings` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccessBindings` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. Formats: - accounts/{account\} - properties/{property\}
     *     parent: 'accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accessBindings": [],
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
      params: Params$Resource$Accounts$Accessbindings$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Accounts$Accessbindings$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListAccessBindingsResponse>;
    list(
      params: Params$Resource$Accounts$Accessbindings$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Accessbindings$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAccessBindingsResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAccessBindingsResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Accessbindings$List,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAccessBindingsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAccessBindingsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Accessbindings$List
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAccessBindingsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAccessBindingsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAccessBindingsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListAccessBindingsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Accessbindings$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Accessbindings$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/accessBindings').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListAccessBindingsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListAccessBindingsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates an access binding on an account or property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.accounts.accessBindings.patch({
     *     // Output only. Resource name of this binding. Format: accounts/{account\}/accessBindings/{access_binding\} or properties/{property\}/accessBindings/{access_binding\} Example: "accounts/100/accessBindings/200"
     *     name: 'accounts/my-account/accessBindings/my-accessBinding',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "name": "my_name",
     *       //   "roles": [],
     *       //   "user": "my_user"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "roles": [],
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
      params: Params$Resource$Accounts$Accessbindings$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Accounts$Accessbindings$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>;
    patch(
      params: Params$Resource$Accounts$Accessbindings$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Accounts$Accessbindings$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>
    ): void;
    patch(
      params: Params$Resource$Accounts$Accessbindings$Patch,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Accounts$Accessbindings$Patch
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Accessbindings$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Accessbindings$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Accounts$Accessbindings$Batchcreate
    extends StandardParameters {
    /**
     * Required. The account or property that owns the access bindings. The parent field in the CreateAccessBindingRequest messages must either be empty or match this field. Formats: - accounts/{account\} - properties/{property\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsRequest;
  }
  export interface Params$Resource$Accounts$Accessbindings$Batchdelete
    extends StandardParameters {
    /**
     * Required. The account or property that owns the access bindings. The parent of all provided values for the 'names' field in DeleteAccessBindingRequest messages must match this field. Formats: - accounts/{account\} - properties/{property\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaBatchDeleteAccessBindingsRequest;
  }
  export interface Params$Resource$Accounts$Accessbindings$Batchget
    extends StandardParameters {
    /**
     * Required. The names of the access bindings to retrieve. A maximum of 1000 access bindings can be retrieved in a batch. Formats: - accounts/{account\}/accessBindings/{accessBinding\} - properties/{property\}/accessBindings/{accessBinding\}
     */
    names?: string[];
    /**
     * Required. The account or property that owns the access bindings. The parent of all provided values for the 'names' field must match this field. Formats: - accounts/{account\} - properties/{property\}
     */
    parent?: string;
  }
  export interface Params$Resource$Accounts$Accessbindings$Batchupdate
    extends StandardParameters {
    /**
     * Required. The account or property that owns the access bindings. The parent of all provided AccessBinding in UpdateAccessBindingRequest messages must match this field. Formats: - accounts/{account\} - properties/{property\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsRequest;
  }
  export interface Params$Resource$Accounts$Accessbindings$Create
    extends StandardParameters {
    /**
     * Required. Formats: - accounts/{account\} - properties/{property\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaAccessBinding;
  }
  export interface Params$Resource$Accounts$Accessbindings$Delete
    extends StandardParameters {
    /**
     * Required. Formats: - accounts/{account\}/accessBindings/{accessBinding\} - properties/{property\}/accessBindings/{accessBinding\}
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Accessbindings$Get
    extends StandardParameters {
    /**
     * Required. The name of the access binding to retrieve. Formats: - accounts/{account\}/accessBindings/{accessBinding\} - properties/{property\}/accessBindings/{accessBinding\}
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Accessbindings$List
    extends StandardParameters {
    /**
     * The maximum number of access bindings to return. The service may return fewer than this value. If unspecified, at most 200 access bindings will be returned. The maximum value is 500; values above 500 will be coerced to 500.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListAccessBindings` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccessBindings` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Formats: - accounts/{account\} - properties/{property\}
     */
    parent?: string;
  }
  export interface Params$Resource$Accounts$Accessbindings$Patch
    extends StandardParameters {
    /**
     * Output only. Resource name of this binding. Format: accounts/{account\}/accessBindings/{access_binding\} or properties/{property\}/accessBindings/{access_binding\} Example: "accounts/100/accessBindings/200"
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaAccessBinding;
  }

  export class Resource$Accounts$Userlinks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists all user links on an account or property, including implicit ones that come from effective permissions granted by groups or organization admin roles. If a returned user link does not have direct permissions, they cannot be removed from the account or property directly with the DeleteUserLink command. They have to be removed from the group/etc that gives them permissions, which is currently only usable/discoverable in the GA or GMP UIs.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.manage.users',
     *       'https://www.googleapis.com/auth/analytics.manage.users.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.accounts.userLinks.audit({
     *     // Required. Example format: accounts/1234
     *     parent: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "pageSize": 0,
     *       //   "pageToken": "my_pageToken"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "userLinks": []
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
    audit(
      params: Params$Resource$Accounts$Userlinks$Audit,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    audit(
      params?: Params$Resource$Accounts$Userlinks$Audit,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse>;
    audit(
      params: Params$Resource$Accounts$Userlinks$Audit,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    audit(
      params: Params$Resource$Accounts$Userlinks$Audit,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse>
    ): void;
    audit(
      params: Params$Resource$Accounts$Userlinks$Audit,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse>
    ): void;
    audit(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse>
    ): void;
    audit(
      paramsOrCallback?:
        | Params$Resource$Accounts$Userlinks$Audit
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Userlinks$Audit;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Userlinks$Audit;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/userLinks:audit').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse>(
          parameters
        );
      }
    }

    /**
     * Creates information about multiple users' links to an account or property. This method is transactional. If any UserLink cannot be created, none of the UserLinks will be created.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.accounts.userLinks.batchCreate({
     *     // Required. The account or property that all user links in the request are for. This field is required. The parent field in the CreateUserLinkRequest messages must either be empty or match this field. Example format: accounts/1234
     *     parent: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "notifyNewUsers": false,
     *       //   "requests": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "userLinks": []
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
    batchCreate(
      params: Params$Resource$Accounts$Userlinks$Batchcreate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchCreate(
      params?: Params$Resource$Accounts$Userlinks$Batchcreate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse>;
    batchCreate(
      params: Params$Resource$Accounts$Userlinks$Batchcreate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchCreate(
      params: Params$Resource$Accounts$Userlinks$Batchcreate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse>
    ): void;
    batchCreate(
      params: Params$Resource$Accounts$Userlinks$Batchcreate,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse>
    ): void;
    batchCreate(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse>
    ): void;
    batchCreate(
      paramsOrCallback?:
        | Params$Resource$Accounts$Userlinks$Batchcreate
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Userlinks$Batchcreate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Userlinks$Batchcreate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/userLinks:batchCreate').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse>(
          parameters
        );
      }
    }

    /**
     * Deletes information about multiple users' links to an account or property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.accounts.userLinks.batchDelete({
     *     // Required. The account or property that all user links in the request are for. The parent of all values for user link names to delete must match this field. Example format: accounts/1234
     *     parent: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "requests": []
     *       // }
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
    batchDelete(
      params: Params$Resource$Accounts$Userlinks$Batchdelete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchDelete(
      params?: Params$Resource$Accounts$Userlinks$Batchdelete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    batchDelete(
      params: Params$Resource$Accounts$Userlinks$Batchdelete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchDelete(
      params: Params$Resource$Accounts$Userlinks$Batchdelete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    batchDelete(
      params: Params$Resource$Accounts$Userlinks$Batchdelete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    batchDelete(
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    batchDelete(
      paramsOrCallback?:
        | Params$Resource$Accounts$Userlinks$Batchdelete
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
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Userlinks$Batchdelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Userlinks$Batchdelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/userLinks:batchDelete').replace(
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Gets information about multiple users' links to an account or property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.manage.users',
     *       'https://www.googleapis.com/auth/analytics.manage.users.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.accounts.userLinks.batchGet({
     *     // Required. The names of the user links to retrieve. A maximum of 1000 user links can be retrieved in a batch. Format: accounts/{accountId\}/userLinks/{userLinkId\}
     *     names: 'placeholder-value',
     *     // Required. The account or property that all user links in the request are for. The parent of all provided values for the 'names' field must match this field. Example format: accounts/1234
     *     parent: 'accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "userLinks": []
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
    batchGet(
      params: Params$Resource$Accounts$Userlinks$Batchget,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchGet(
      params?: Params$Resource$Accounts$Userlinks$Batchget,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse>;
    batchGet(
      params: Params$Resource$Accounts$Userlinks$Batchget,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchGet(
      params: Params$Resource$Accounts$Userlinks$Batchget,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse>
    ): void;
    batchGet(
      params: Params$Resource$Accounts$Userlinks$Batchget,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse>
    ): void;
    batchGet(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse>
    ): void;
    batchGet(
      paramsOrCallback?:
        | Params$Resource$Accounts$Userlinks$Batchget
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Userlinks$Batchget;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Userlinks$Batchget;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/userLinks:batchGet').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse>(
          parameters
        );
      }
    }

    /**
     * Updates information about multiple users' links to an account or property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.accounts.userLinks.batchUpdate({
     *     // Required. The account or property that all user links in the request are for. The parent field in the UpdateUserLinkRequest messages must either be empty or match this field. Example format: accounts/1234
     *     parent: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "requests": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "userLinks": []
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
    batchUpdate(
      params: Params$Resource$Accounts$Userlinks$Batchupdate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchUpdate(
      params?: Params$Resource$Accounts$Userlinks$Batchupdate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse>;
    batchUpdate(
      params: Params$Resource$Accounts$Userlinks$Batchupdate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchUpdate(
      params: Params$Resource$Accounts$Userlinks$Batchupdate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse>
    ): void;
    batchUpdate(
      params: Params$Resource$Accounts$Userlinks$Batchupdate,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse>
    ): void;
    batchUpdate(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse>
    ): void;
    batchUpdate(
      paramsOrCallback?:
        | Params$Resource$Accounts$Userlinks$Batchupdate
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Userlinks$Batchupdate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Userlinks$Batchupdate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/userLinks:batchUpdate').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse>(
          parameters
        );
      }
    }

    /**
     * Creates a user link on an account or property. If the user with the specified email already has permissions on the account or property, then the user's existing permissions will be unioned with the permissions specified in the new UserLink.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.accounts.userLinks.create({
     *     // Optional. If set, then email the new user notifying them that they've been granted permissions to the resource.
     *     notifyNewUser: 'placeholder-value',
     *     // Required. Example format: accounts/1234
     *     parent: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "directRoles": [],
     *       //   "emailAddress": "my_emailAddress",
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "directRoles": [],
     *   //   "emailAddress": "my_emailAddress",
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
      params: Params$Resource$Accounts$Userlinks$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Accounts$Userlinks$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaUserLink>;
    create(
      params: Params$Resource$Accounts$Userlinks$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Accounts$Userlinks$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
    ): void;
    create(
      params: Params$Resource$Accounts$Userlinks$Create,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Accounts$Userlinks$Create
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaUserLink>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Userlinks$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Userlinks$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/userLinks').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaUserLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaUserLink>(
          parameters
        );
      }
    }

    /**
     * Deletes a user link on an account or property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.accounts.userLinks.delete({
     *     // Required. Example format: accounts/1234/userLinks/5678
     *     name: 'accounts/my-account/userLinks/my-userLink',
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
      params: Params$Resource$Accounts$Userlinks$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Accounts$Userlinks$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Accounts$Userlinks$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Accounts$Userlinks$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Accounts$Userlinks$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Accounts$Userlinks$Delete
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
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Userlinks$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Userlinks$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Gets information about a user's link to an account or property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.manage.users',
     *       'https://www.googleapis.com/auth/analytics.manage.users.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.accounts.userLinks.get({
     *     // Required. Example format: accounts/1234/userLinks/5678
     *     name: 'accounts/my-account/userLinks/my-userLink',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "directRoles": [],
     *   //   "emailAddress": "my_emailAddress",
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
      params: Params$Resource$Accounts$Userlinks$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Accounts$Userlinks$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaUserLink>;
    get(
      params: Params$Resource$Accounts$Userlinks$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounts$Userlinks$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
    ): void;
    get(
      params: Params$Resource$Accounts$Userlinks$Get,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Userlinks$Get
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaUserLink>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Userlinks$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Userlinks$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaUserLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaUserLink>(
          parameters
        );
      }
    }

    /**
     * Lists all user links on an account or property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.manage.users',
     *       'https://www.googleapis.com/auth/analytics.manage.users.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.accounts.userLinks.list({
     *     // The maximum number of user links to return. The service may return fewer than this value. If unspecified, at most 200 user links will be returned. The maximum value is 500; values above 500 will be coerced to 500.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListUserLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUserLinks` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. Example format: accounts/1234
     *     parent: 'accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "userLinks": []
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
      params: Params$Resource$Accounts$Userlinks$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Accounts$Userlinks$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse>;
    list(
      params: Params$Resource$Accounts$Userlinks$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Userlinks$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Userlinks$List,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Userlinks$List
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Userlinks$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Userlinks$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/userLinks').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a user link on an account or property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.accounts.userLinks.patch({
     *     // Output only. Example format: properties/1234/userLinks/5678
     *     name: 'accounts/my-account/userLinks/my-userLink',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "directRoles": [],
     *       //   "emailAddress": "my_emailAddress",
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "directRoles": [],
     *   //   "emailAddress": "my_emailAddress",
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
      params: Params$Resource$Accounts$Userlinks$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Accounts$Userlinks$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaUserLink>;
    patch(
      params: Params$Resource$Accounts$Userlinks$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Accounts$Userlinks$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
    ): void;
    patch(
      params: Params$Resource$Accounts$Userlinks$Patch,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Accounts$Userlinks$Patch
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaUserLink>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Userlinks$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Userlinks$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaUserLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaUserLink>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Accounts$Userlinks$Audit
    extends StandardParameters {
    /**
     * Required. Example format: accounts/1234
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksRequest;
  }
  export interface Params$Resource$Accounts$Userlinks$Batchcreate
    extends StandardParameters {
    /**
     * Required. The account or property that all user links in the request are for. This field is required. The parent field in the CreateUserLinkRequest messages must either be empty or match this field. Example format: accounts/1234
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksRequest;
  }
  export interface Params$Resource$Accounts$Userlinks$Batchdelete
    extends StandardParameters {
    /**
     * Required. The account or property that all user links in the request are for. The parent of all values for user link names to delete must match this field. Example format: accounts/1234
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaBatchDeleteUserLinksRequest;
  }
  export interface Params$Resource$Accounts$Userlinks$Batchget
    extends StandardParameters {
    /**
     * Required. The names of the user links to retrieve. A maximum of 1000 user links can be retrieved in a batch. Format: accounts/{accountId\}/userLinks/{userLinkId\}
     */
    names?: string[];
    /**
     * Required. The account or property that all user links in the request are for. The parent of all provided values for the 'names' field must match this field. Example format: accounts/1234
     */
    parent?: string;
  }
  export interface Params$Resource$Accounts$Userlinks$Batchupdate
    extends StandardParameters {
    /**
     * Required. The account or property that all user links in the request are for. The parent field in the UpdateUserLinkRequest messages must either be empty or match this field. Example format: accounts/1234
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksRequest;
  }
  export interface Params$Resource$Accounts$Userlinks$Create
    extends StandardParameters {
    /**
     * Optional. If set, then email the new user notifying them that they've been granted permissions to the resource.
     */
    notifyNewUser?: boolean;
    /**
     * Required. Example format: accounts/1234
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaUserLink;
  }
  export interface Params$Resource$Accounts$Userlinks$Delete
    extends StandardParameters {
    /**
     * Required. Example format: accounts/1234/userLinks/5678
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Userlinks$Get
    extends StandardParameters {
    /**
     * Required. Example format: accounts/1234/userLinks/5678
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Userlinks$List
    extends StandardParameters {
    /**
     * The maximum number of user links to return. The service may return fewer than this value. If unspecified, at most 200 user links will be returned. The maximum value is 500; values above 500 will be coerced to 500.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListUserLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUserLinks` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Example format: accounts/1234
     */
    parent?: string;
  }
  export interface Params$Resource$Accounts$Userlinks$Patch
    extends StandardParameters {
    /**
     * Output only. Example format: properties/1234/userLinks/5678
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaUserLink;
  }

  export class Resource$Accountsummaries {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns summaries of all accounts accessible by the caller.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.accountSummaries.list({
     *     // The maximum number of AccountSummary resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListAccountSummaries` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccountSummaries` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountSummaries": [],
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
      params: Params$Resource$Accountsummaries$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Accountsummaries$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListAccountSummariesResponse>;
    list(
      params: Params$Resource$Accountsummaries$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accountsummaries$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAccountSummariesResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAccountSummariesResponse>
    ): void;
    list(
      params: Params$Resource$Accountsummaries$List,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAccountSummariesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAccountSummariesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accountsummaries$List
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAccountSummariesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAccountSummariesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAccountSummariesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListAccountSummariesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accountsummaries$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accountsummaries$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/accountSummaries').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListAccountSummariesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListAccountSummariesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Accountsummaries$List
    extends StandardParameters {
    /**
     * The maximum number of AccountSummary resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListAccountSummaries` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccountSummaries` must match the call that provided the page token.
     */
    pageToken?: string;
  }

  export class Resource$Properties {
    context: APIRequestContext;
    accessBindings: Resource$Properties$Accessbindings;
    adSenseLinks: Resource$Properties$Adsenselinks;
    audiences: Resource$Properties$Audiences;
    bigQueryLinks: Resource$Properties$Bigquerylinks;
    channelGroups: Resource$Properties$Channelgroups;
    conversionEvents: Resource$Properties$Conversionevents;
    customDimensions: Resource$Properties$Customdimensions;
    customMetrics: Resource$Properties$Custommetrics;
    dataStreams: Resource$Properties$Datastreams;
    displayVideo360AdvertiserLinkProposals: Resource$Properties$Displayvideo360advertiserlinkproposals;
    displayVideo360AdvertiserLinks: Resource$Properties$Displayvideo360advertiserlinks;
    expandedDataSets: Resource$Properties$Expandeddatasets;
    firebaseLinks: Resource$Properties$Firebaselinks;
    googleAdsLinks: Resource$Properties$Googleadslinks;
    searchAds360Links: Resource$Properties$Searchads360links;
    userLinks: Resource$Properties$Userlinks;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.accessBindings = new Resource$Properties$Accessbindings(
        this.context
      );
      this.adSenseLinks = new Resource$Properties$Adsenselinks(this.context);
      this.audiences = new Resource$Properties$Audiences(this.context);
      this.bigQueryLinks = new Resource$Properties$Bigquerylinks(this.context);
      this.channelGroups = new Resource$Properties$Channelgroups(this.context);
      this.conversionEvents = new Resource$Properties$Conversionevents(
        this.context
      );
      this.customDimensions = new Resource$Properties$Customdimensions(
        this.context
      );
      this.customMetrics = new Resource$Properties$Custommetrics(this.context);
      this.dataStreams = new Resource$Properties$Datastreams(this.context);
      this.displayVideo360AdvertiserLinkProposals =
        new Resource$Properties$Displayvideo360advertiserlinkproposals(
          this.context
        );
      this.displayVideo360AdvertiserLinks =
        new Resource$Properties$Displayvideo360advertiserlinks(this.context);
      this.expandedDataSets = new Resource$Properties$Expandeddatasets(
        this.context
      );
      this.firebaseLinks = new Resource$Properties$Firebaselinks(this.context);
      this.googleAdsLinks = new Resource$Properties$Googleadslinks(
        this.context
      );
      this.searchAds360Links = new Resource$Properties$Searchads360links(
        this.context
      );
      this.userLinks = new Resource$Properties$Userlinks(this.context);
    }

    /**
     * Acknowledges the terms of user data collection for the specified property. This acknowledgement must be completed (either in the Google Analytics UI or through this API) before MeasurementProtocolSecret resources may be created.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.acknowledgeUserDataCollection({
     *     // Required. The property for which to acknowledge user data collection.
     *     property: 'properties/my-propertie',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "acknowledgement": "my_acknowledgement"
     *       // }
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
    acknowledgeUserDataCollection(
      params: Params$Resource$Properties$Acknowledgeuserdatacollection,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    acknowledgeUserDataCollection(
      params?: Params$Resource$Properties$Acknowledgeuserdatacollection,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAcknowledgeUserDataCollectionResponse>;
    acknowledgeUserDataCollection(
      params: Params$Resource$Properties$Acknowledgeuserdatacollection,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    acknowledgeUserDataCollection(
      params: Params$Resource$Properties$Acknowledgeuserdatacollection,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAcknowledgeUserDataCollectionResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAcknowledgeUserDataCollectionResponse>
    ): void;
    acknowledgeUserDataCollection(
      params: Params$Resource$Properties$Acknowledgeuserdatacollection,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAcknowledgeUserDataCollectionResponse>
    ): void;
    acknowledgeUserDataCollection(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAcknowledgeUserDataCollectionResponse>
    ): void;
    acknowledgeUserDataCollection(
      paramsOrCallback?:
        | Params$Resource$Properties$Acknowledgeuserdatacollection
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAcknowledgeUserDataCollectionResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAcknowledgeUserDataCollectionResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAcknowledgeUserDataCollectionResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAcknowledgeUserDataCollectionResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Acknowledgeuserdatacollection;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Acknowledgeuserdatacollection;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1alpha/{+property}:acknowledgeUserDataCollection'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['property'],
        pathParams: ['property'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAcknowledgeUserDataCollectionResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAcknowledgeUserDataCollectionResponse>(
          parameters
        );
      }
    }

    /**
     * Creates an "GA4" property with the specified location and attributes.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.create({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "account": "my_account",
     *       //   "createTime": "my_createTime",
     *       //   "currencyCode": "my_currencyCode",
     *       //   "deleteTime": "my_deleteTime",
     *       //   "displayName": "my_displayName",
     *       //   "expireTime": "my_expireTime",
     *       //   "industryCategory": "my_industryCategory",
     *       //   "name": "my_name",
     *       //   "parent": "my_parent",
     *       //   "propertyType": "my_propertyType",
     *       //   "serviceLevel": "my_serviceLevel",
     *       //   "timeZone": "my_timeZone",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "account": "my_account",
     *   //   "createTime": "my_createTime",
     *   //   "currencyCode": "my_currencyCode",
     *   //   "deleteTime": "my_deleteTime",
     *   //   "displayName": "my_displayName",
     *   //   "expireTime": "my_expireTime",
     *   //   "industryCategory": "my_industryCategory",
     *   //   "name": "my_name",
     *   //   "parent": "my_parent",
     *   //   "propertyType": "my_propertyType",
     *   //   "serviceLevel": "my_serviceLevel",
     *   //   "timeZone": "my_timeZone",
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
      params: Params$Resource$Properties$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Properties$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaProperty>;
    create(
      params: Params$Resource$Properties$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Properties$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>
    ): void;
    create(
      params: Params$Resource$Properties$Create,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Properties$Create
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaProperty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/properties').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaProperty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaProperty>(
          parameters
        );
      }
    }

    /**
     * Creates a connected site tag for a Universal Analytics property. You can create a maximum of 20 connected site tags per property. Note: This API cannot be used on GA4 properties.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.createConnectedSiteTag({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "connectedSiteTag": {},
     *       //   "property": "my_property"
     *       // }
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
    createConnectedSiteTag(
      params: Params$Resource$Properties$Createconnectedsitetag,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    createConnectedSiteTag(
      params?: Params$Resource$Properties$Createconnectedsitetag,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaCreateConnectedSiteTagResponse>;
    createConnectedSiteTag(
      params: Params$Resource$Properties$Createconnectedsitetag,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    createConnectedSiteTag(
      params: Params$Resource$Properties$Createconnectedsitetag,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCreateConnectedSiteTagResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCreateConnectedSiteTagResponse>
    ): void;
    createConnectedSiteTag(
      params: Params$Resource$Properties$Createconnectedsitetag,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCreateConnectedSiteTagResponse>
    ): void;
    createConnectedSiteTag(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCreateConnectedSiteTagResponse>
    ): void;
    createConnectedSiteTag(
      paramsOrCallback?:
        | Params$Resource$Properties$Createconnectedsitetag
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCreateConnectedSiteTagResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCreateConnectedSiteTagResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCreateConnectedSiteTagResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaCreateConnectedSiteTagResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Createconnectedsitetag;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Createconnectedsitetag;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1alpha/properties:createConnectedSiteTag'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaCreateConnectedSiteTagResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaCreateConnectedSiteTagResponse>(
          parameters
        );
      }
    }

    /**
     * Marks target Property as soft-deleted (ie: "trashed") and returns it. This API does not have a method to restore soft-deleted properties. However, they can be restored using the Trash Can UI. If the properties are not restored before the expiration time, the Property and all child resources (eg: GoogleAdsLinks, Streams, UserLinks) will be permanently purged. https://support.google.com/analytics/answer/6154772 Returns an error if the target is not found, or is not a GA4 Property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.delete({
     *     // Required. The name of the Property to soft-delete. Format: properties/{property_id\} Example: "properties/1000"
     *     name: 'properties/my-propertie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "account": "my_account",
     *   //   "createTime": "my_createTime",
     *   //   "currencyCode": "my_currencyCode",
     *   //   "deleteTime": "my_deleteTime",
     *   //   "displayName": "my_displayName",
     *   //   "expireTime": "my_expireTime",
     *   //   "industryCategory": "my_industryCategory",
     *   //   "name": "my_name",
     *   //   "parent": "my_parent",
     *   //   "propertyType": "my_propertyType",
     *   //   "serviceLevel": "my_serviceLevel",
     *   //   "timeZone": "my_timeZone",
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
    delete(
      params: Params$Resource$Properties$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Properties$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaProperty>;
    delete(
      params: Params$Resource$Properties$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Properties$Delete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>
    ): void;
    delete(
      params: Params$Resource$Properties$Delete,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>
    ): void;
    delete(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>
    ): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Properties$Delete
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaProperty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaProperty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaProperty>(
          parameters
        );
      }
    }

    /**
     * Deletes a connected site tag for a Universal Analytics property. Note: this has no effect on GA4 properties.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.deleteConnectedSiteTag({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "property": "my_property",
     *       //   "tagId": "my_tagId"
     *       // }
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
    deleteConnectedSiteTag(
      params: Params$Resource$Properties$Deleteconnectedsitetag,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    deleteConnectedSiteTag(
      params?: Params$Resource$Properties$Deleteconnectedsitetag,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    deleteConnectedSiteTag(
      params: Params$Resource$Properties$Deleteconnectedsitetag,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    deleteConnectedSiteTag(
      params: Params$Resource$Properties$Deleteconnectedsitetag,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    deleteConnectedSiteTag(
      params: Params$Resource$Properties$Deleteconnectedsitetag,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    deleteConnectedSiteTag(
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    deleteConnectedSiteTag(
      paramsOrCallback?:
        | Params$Resource$Properties$Deleteconnectedsitetag
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
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Deleteconnectedsitetag;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Deleteconnectedsitetag;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1alpha/properties:deleteConnectedSiteTag'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Fetches the opt out status for the automated GA4 setup process for a UA property. Note: this has no effect on GA4 property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.fetchAutomatedGa4ConfigurationOptOut({
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "property": "my_property"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "optOut": false
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
    fetchAutomatedGa4ConfigurationOptOut(
      params: Params$Resource$Properties$Fetchautomatedga4configurationoptout,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    fetchAutomatedGa4ConfigurationOptOut(
      params?: Params$Resource$Properties$Fetchautomatedga4configurationoptout,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutResponse>;
    fetchAutomatedGa4ConfigurationOptOut(
      params: Params$Resource$Properties$Fetchautomatedga4configurationoptout,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    fetchAutomatedGa4ConfigurationOptOut(
      params: Params$Resource$Properties$Fetchautomatedga4configurationoptout,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutResponse>
    ): void;
    fetchAutomatedGa4ConfigurationOptOut(
      params: Params$Resource$Properties$Fetchautomatedga4configurationoptout,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutResponse>
    ): void;
    fetchAutomatedGa4ConfigurationOptOut(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutResponse>
    ): void;
    fetchAutomatedGa4ConfigurationOptOut(
      paramsOrCallback?:
        | Params$Resource$Properties$Fetchautomatedga4configurationoptout
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Fetchautomatedga4configurationoptout;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Fetchautomatedga4configurationoptout;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1alpha/properties:fetchAutomatedGa4ConfigurationOptOut'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutResponse>(
          parameters
        );
      }
    }

    /**
     * Given a specified UA property, looks up the GA4 property connected to it. Note: this cannot be used with GA4 properties.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.fetchConnectedGa4Property({
     *     // Required. The UA property for which to look up the connected GA4 property. Note this request uses the internal property ID, not the tracking ID of the form UA-XXXXXX-YY. Format: properties/{internal_web_property_id\} Example: properties/1234
     *     property: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "property": "my_property"
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
    fetchConnectedGa4Property(
      params: Params$Resource$Properties$Fetchconnectedga4property,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    fetchConnectedGa4Property(
      params?: Params$Resource$Properties$Fetchconnectedga4property,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaFetchConnectedGa4PropertyResponse>;
    fetchConnectedGa4Property(
      params: Params$Resource$Properties$Fetchconnectedga4property,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    fetchConnectedGa4Property(
      params: Params$Resource$Properties$Fetchconnectedga4property,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaFetchConnectedGa4PropertyResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaFetchConnectedGa4PropertyResponse>
    ): void;
    fetchConnectedGa4Property(
      params: Params$Resource$Properties$Fetchconnectedga4property,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaFetchConnectedGa4PropertyResponse>
    ): void;
    fetchConnectedGa4Property(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaFetchConnectedGa4PropertyResponse>
    ): void;
    fetchConnectedGa4Property(
      paramsOrCallback?:
        | Params$Resource$Properties$Fetchconnectedga4property
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaFetchConnectedGa4PropertyResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaFetchConnectedGa4PropertyResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaFetchConnectedGa4PropertyResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaFetchConnectedGa4PropertyResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Fetchconnectedga4property;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Fetchconnectedga4property;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1alpha/properties:fetchConnectedGa4Property'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaFetchConnectedGa4PropertyResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaFetchConnectedGa4PropertyResponse>(
          parameters
        );
      }
    }

    /**
     * Lookup for a single "GA4" Property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.get({
     *     // Required. The name of the property to lookup. Format: properties/{property_id\} Example: "properties/1000"
     *     name: 'properties/my-propertie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "account": "my_account",
     *   //   "createTime": "my_createTime",
     *   //   "currencyCode": "my_currencyCode",
     *   //   "deleteTime": "my_deleteTime",
     *   //   "displayName": "my_displayName",
     *   //   "expireTime": "my_expireTime",
     *   //   "industryCategory": "my_industryCategory",
     *   //   "name": "my_name",
     *   //   "parent": "my_parent",
     *   //   "propertyType": "my_propertyType",
     *   //   "serviceLevel": "my_serviceLevel",
     *   //   "timeZone": "my_timeZone",
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
      params: Params$Resource$Properties$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Properties$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaProperty>;
    get(
      params: Params$Resource$Properties$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Properties$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>
    ): void;
    get(
      params: Params$Resource$Properties$Get,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Properties$Get
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaProperty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Properties$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaProperty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaProperty>(
          parameters
        );
      }
    }

    /**
     * Lookup for a AttributionSettings singleton.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.getAttributionSettings({
     *     // Required. The name of the attribution settings to retrieve. Format: properties/{property\}/attributionSettings
     *     name: 'properties/my-propertie/attributionSettings',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "acquisitionConversionEventLookbackWindow": "my_acquisitionConversionEventLookbackWindow",
     *   //   "adsWebConversionDataExportScope": "my_adsWebConversionDataExportScope",
     *   //   "name": "my_name",
     *   //   "otherConversionEventLookbackWindow": "my_otherConversionEventLookbackWindow",
     *   //   "reportingAttributionModel": "my_reportingAttributionModel"
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
    getAttributionSettings(
      params: Params$Resource$Properties$Getattributionsettings,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getAttributionSettings(
      params?: Params$Resource$Properties$Getattributionsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAttributionSettings>;
    getAttributionSettings(
      params: Params$Resource$Properties$Getattributionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getAttributionSettings(
      params: Params$Resource$Properties$Getattributionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAttributionSettings>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAttributionSettings>
    ): void;
    getAttributionSettings(
      params: Params$Resource$Properties$Getattributionsettings,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAttributionSettings>
    ): void;
    getAttributionSettings(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAttributionSettings>
    ): void;
    getAttributionSettings(
      paramsOrCallback?:
        | Params$Resource$Properties$Getattributionsettings
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAttributionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAttributionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAttributionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAttributionSettings>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Getattributionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Getattributionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAttributionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAttributionSettings>(
          parameters
        );
      }
    }

    /**
     * Returns the singleton data retention settings for this property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.getDataRetentionSettings({
     *     // Required. The name of the settings to lookup. Format: properties/{property\}/dataRetentionSettings Example: "properties/1000/dataRetentionSettings"
     *     name: 'properties/my-propertie/dataRetentionSettings',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "eventDataRetention": "my_eventDataRetention",
     *   //   "name": "my_name",
     *   //   "resetUserDataOnNewActivity": false
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
    getDataRetentionSettings(
      params: Params$Resource$Properties$Getdataretentionsettings,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getDataRetentionSettings(
      params?: Params$Resource$Properties$Getdataretentionsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaDataRetentionSettings>;
    getDataRetentionSettings(
      params: Params$Resource$Properties$Getdataretentionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getDataRetentionSettings(
      params: Params$Resource$Properties$Getdataretentionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDataRetentionSettings>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDataRetentionSettings>
    ): void;
    getDataRetentionSettings(
      params: Params$Resource$Properties$Getdataretentionsettings,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDataRetentionSettings>
    ): void;
    getDataRetentionSettings(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDataRetentionSettings>
    ): void;
    getDataRetentionSettings(
      paramsOrCallback?:
        | Params$Resource$Properties$Getdataretentionsettings
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDataRetentionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDataRetentionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDataRetentionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaDataRetentionSettings>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Getdataretentionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Getdataretentionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaDataRetentionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaDataRetentionSettings>(
          parameters
        );
      }
    }

    /**
     * Lookup for Google Signals settings for a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.getGoogleSignalsSettings({
     *     // Required. The name of the google signals settings to retrieve. Format: properties/{property\}/googleSignalsSettings
     *     name: 'properties/my-propertie/googleSignalsSettings',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "consent": "my_consent",
     *   //   "name": "my_name",
     *   //   "state": "my_state"
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
    getGoogleSignalsSettings(
      params: Params$Resource$Properties$Getgooglesignalssettings,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getGoogleSignalsSettings(
      params?: Params$Resource$Properties$Getgooglesignalssettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings>;
    getGoogleSignalsSettings(
      params: Params$Resource$Properties$Getgooglesignalssettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getGoogleSignalsSettings(
      params: Params$Resource$Properties$Getgooglesignalssettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings>
    ): void;
    getGoogleSignalsSettings(
      params: Params$Resource$Properties$Getgooglesignalssettings,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings>
    ): void;
    getGoogleSignalsSettings(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings>
    ): void;
    getGoogleSignalsSettings(
      paramsOrCallback?:
        | Params$Resource$Properties$Getgooglesignalssettings
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Getgooglesignalssettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Getgooglesignalssettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings>(
          parameters
        );
      }
    }

    /**
     * Returns child Properties under the specified parent Account. Only "GA4" properties will be returned. Properties will be excluded if the caller does not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no relevant properties are found.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.list({
     *     // Required. An expression for filtering the results of the request. Fields eligible for filtering are: `parent:`(The resource name of the parent account/property) or `ancestor:`(The resource name of the parent account) or `firebase_project:`(The id or number of the linked firebase project). Some examples of filters: ``` | Filter | Description | |-----------------------------|-------------------------------------------| | parent:accounts/123 | The account with account id: 123. | | parent:properties/123 | The property with property id: 123. | | ancestor:accounts/123 | The account with account id: 123. | | firebase_project:project-id | The firebase project with id: project-id. | | firebase_project:123 | The firebase project with number: 123. | ```
     *     filter: 'placeholder-value',
     *     // The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListProperties` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProperties` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Whether to include soft-deleted (ie: "trashed") Properties in the results. Properties can be inspected to determine whether they are deleted or not.
     *     showDeleted: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "properties": []
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
      params: Params$Resource$Properties$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Properties$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListPropertiesResponse>;
    list(
      params: Params$Resource$Properties$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Properties$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListPropertiesResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListPropertiesResponse>
    ): void;
    list(
      params: Params$Resource$Properties$List,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListPropertiesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListPropertiesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Properties$List
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListPropertiesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListPropertiesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListPropertiesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListPropertiesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Properties$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/properties').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListPropertiesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListPropertiesResponse>(
          parameters
        );
      }
    }

    /**
     * Lists the connected site tags for a Universal Analytics property. A maximum of 20 connected site tags will be returned. Note: this has no effect on GA4 property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.listConnectedSiteTags({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "property": "my_property"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "connectedSiteTags": []
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
    listConnectedSiteTags(
      params: Params$Resource$Properties$Listconnectedsitetags,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    listConnectedSiteTags(
      params?: Params$Resource$Properties$Listconnectedsitetags,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListConnectedSiteTagsResponse>;
    listConnectedSiteTags(
      params: Params$Resource$Properties$Listconnectedsitetags,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listConnectedSiteTags(
      params: Params$Resource$Properties$Listconnectedsitetags,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListConnectedSiteTagsResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListConnectedSiteTagsResponse>
    ): void;
    listConnectedSiteTags(
      params: Params$Resource$Properties$Listconnectedsitetags,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListConnectedSiteTagsResponse>
    ): void;
    listConnectedSiteTags(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListConnectedSiteTagsResponse>
    ): void;
    listConnectedSiteTags(
      paramsOrCallback?:
        | Params$Resource$Properties$Listconnectedsitetags
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListConnectedSiteTagsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListConnectedSiteTagsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListConnectedSiteTagsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListConnectedSiteTagsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Listconnectedsitetags;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Listconnectedsitetags;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1alpha/properties:listConnectedSiteTags'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListConnectedSiteTagsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListConnectedSiteTagsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.patch({
     *     // Output only. Resource name of this property. Format: properties/{property_id\} Example: "properties/1000"
     *     name: 'properties/my-propertie',
     *     // Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "account": "my_account",
     *       //   "createTime": "my_createTime",
     *       //   "currencyCode": "my_currencyCode",
     *       //   "deleteTime": "my_deleteTime",
     *       //   "displayName": "my_displayName",
     *       //   "expireTime": "my_expireTime",
     *       //   "industryCategory": "my_industryCategory",
     *       //   "name": "my_name",
     *       //   "parent": "my_parent",
     *       //   "propertyType": "my_propertyType",
     *       //   "serviceLevel": "my_serviceLevel",
     *       //   "timeZone": "my_timeZone",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "account": "my_account",
     *   //   "createTime": "my_createTime",
     *   //   "currencyCode": "my_currencyCode",
     *   //   "deleteTime": "my_deleteTime",
     *   //   "displayName": "my_displayName",
     *   //   "expireTime": "my_expireTime",
     *   //   "industryCategory": "my_industryCategory",
     *   //   "name": "my_name",
     *   //   "parent": "my_parent",
     *   //   "propertyType": "my_propertyType",
     *   //   "serviceLevel": "my_serviceLevel",
     *   //   "timeZone": "my_timeZone",
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
      params: Params$Resource$Properties$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Properties$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaProperty>;
    patch(
      params: Params$Resource$Properties$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Properties$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>
    ): void;
    patch(
      params: Params$Resource$Properties$Patch,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Properties$Patch
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaProperty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Properties$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaProperty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaProperty>(
          parameters
        );
      }
    }

    /**
     * Returns a customized report of data access records. The report provides records of each time a user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be requested for a property. The property must be in Google Analytics 360. This method is only available to Administrators. These data access records include GA4 UI Reporting, GA4 UI Explorations, GA4 Data API, and other products like Firebase & Admob that can retrieve data from Google Analytics through a linkage. These records don't include property configuration changes like adding a stream or changing a property's time zone. For configuration change history, see [searchChangeHistoryEvents](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/accounts/searchChangeHistoryEvents).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.runAccessReport({
     *     // The Data Access Report supports requesting at the property level or account level. If requested at the account level, Data Access Reports include all access for all properties under that account. To request at the property level, entity should be for example 'properties/123' if "123" is your GA4 property ID. To request at the account level, entity should be for example 'accounts/1234' if "1234" is your GA4 Account ID.
     *     entity: 'properties/my-propertie',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "dateRanges": [],
     *       //   "dimensionFilter": {},
     *       //   "dimensions": [],
     *       //   "limit": "my_limit",
     *       //   "metricFilter": {},
     *       //   "metrics": [],
     *       //   "offset": "my_offset",
     *       //   "orderBys": [],
     *       //   "returnEntityQuota": false,
     *       //   "timeZone": "my_timeZone"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dimensionHeaders": [],
     *   //   "metricHeaders": [],
     *   //   "quota": {},
     *   //   "rowCount": 0,
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
    runAccessReport(
      params: Params$Resource$Properties$Runaccessreport,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    runAccessReport(
      params?: Params$Resource$Properties$Runaccessreport,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaRunAccessReportResponse>;
    runAccessReport(
      params: Params$Resource$Properties$Runaccessreport,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    runAccessReport(
      params: Params$Resource$Properties$Runaccessreport,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaRunAccessReportResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaRunAccessReportResponse>
    ): void;
    runAccessReport(
      params: Params$Resource$Properties$Runaccessreport,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaRunAccessReportResponse>
    ): void;
    runAccessReport(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaRunAccessReportResponse>
    ): void;
    runAccessReport(
      paramsOrCallback?:
        | Params$Resource$Properties$Runaccessreport
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaRunAccessReportResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaRunAccessReportResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaRunAccessReportResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaRunAccessReportResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Runaccessreport;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Runaccessreport;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+entity}:runAccessReport').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['entity'],
        pathParams: ['entity'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaRunAccessReportResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaRunAccessReportResponse>(
          parameters
        );
      }
    }

    /**
     * Sets the opt out status for the automated GA4 setup process for a UA property. Note: this has no effect on GA4 property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.setAutomatedGa4ConfigurationOptOut({
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "optOut": false,
     *         //   "property": "my_property"
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
    setAutomatedGa4ConfigurationOptOut(
      params: Params$Resource$Properties$Setautomatedga4configurationoptout,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setAutomatedGa4ConfigurationOptOut(
      params?: Params$Resource$Properties$Setautomatedga4configurationoptout,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaSetAutomatedGa4ConfigurationOptOutResponse>;
    setAutomatedGa4ConfigurationOptOut(
      params: Params$Resource$Properties$Setautomatedga4configurationoptout,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setAutomatedGa4ConfigurationOptOut(
      params: Params$Resource$Properties$Setautomatedga4configurationoptout,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaSetAutomatedGa4ConfigurationOptOutResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaSetAutomatedGa4ConfigurationOptOutResponse>
    ): void;
    setAutomatedGa4ConfigurationOptOut(
      params: Params$Resource$Properties$Setautomatedga4configurationoptout,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaSetAutomatedGa4ConfigurationOptOutResponse>
    ): void;
    setAutomatedGa4ConfigurationOptOut(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaSetAutomatedGa4ConfigurationOptOutResponse>
    ): void;
    setAutomatedGa4ConfigurationOptOut(
      paramsOrCallback?:
        | Params$Resource$Properties$Setautomatedga4configurationoptout
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaSetAutomatedGa4ConfigurationOptOutResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaSetAutomatedGa4ConfigurationOptOutResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaSetAutomatedGa4ConfigurationOptOutResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaSetAutomatedGa4ConfigurationOptOutResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Setautomatedga4configurationoptout;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Setautomatedga4configurationoptout;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1alpha/properties:setAutomatedGa4ConfigurationOptOut'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaSetAutomatedGa4ConfigurationOptOutResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaSetAutomatedGa4ConfigurationOptOutResponse>(
          parameters
        );
      }
    }

    /**
     * Updates attribution settings on a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.updateAttributionSettings({
     *     // Output only. Resource name of this attribution settings resource. Format: properties/{property_id\}/attributionSettings Example: "properties/1000/attributionSettings"
     *     name: 'properties/my-propertie/attributionSettings',
     *     // Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "acquisitionConversionEventLookbackWindow": "my_acquisitionConversionEventLookbackWindow",
     *       //   "adsWebConversionDataExportScope": "my_adsWebConversionDataExportScope",
     *       //   "name": "my_name",
     *       //   "otherConversionEventLookbackWindow": "my_otherConversionEventLookbackWindow",
     *       //   "reportingAttributionModel": "my_reportingAttributionModel"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "acquisitionConversionEventLookbackWindow": "my_acquisitionConversionEventLookbackWindow",
     *   //   "adsWebConversionDataExportScope": "my_adsWebConversionDataExportScope",
     *   //   "name": "my_name",
     *   //   "otherConversionEventLookbackWindow": "my_otherConversionEventLookbackWindow",
     *   //   "reportingAttributionModel": "my_reportingAttributionModel"
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
    updateAttributionSettings(
      params: Params$Resource$Properties$Updateattributionsettings,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateAttributionSettings(
      params?: Params$Resource$Properties$Updateattributionsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAttributionSettings>;
    updateAttributionSettings(
      params: Params$Resource$Properties$Updateattributionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateAttributionSettings(
      params: Params$Resource$Properties$Updateattributionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAttributionSettings>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAttributionSettings>
    ): void;
    updateAttributionSettings(
      params: Params$Resource$Properties$Updateattributionsettings,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAttributionSettings>
    ): void;
    updateAttributionSettings(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAttributionSettings>
    ): void;
    updateAttributionSettings(
      paramsOrCallback?:
        | Params$Resource$Properties$Updateattributionsettings
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAttributionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAttributionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAttributionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAttributionSettings>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Updateattributionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Updateattributionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAttributionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAttributionSettings>(
          parameters
        );
      }
    }

    /**
     * Updates the singleton data retention settings for this property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.updateDataRetentionSettings({
     *     // Output only. Resource name for this DataRetentionSetting resource. Format: properties/{property\}/dataRetentionSettings
     *     name: 'properties/my-propertie/dataRetentionSettings',
     *     // Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "eventDataRetention": "my_eventDataRetention",
     *       //   "name": "my_name",
     *       //   "resetUserDataOnNewActivity": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "eventDataRetention": "my_eventDataRetention",
     *   //   "name": "my_name",
     *   //   "resetUserDataOnNewActivity": false
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
    updateDataRetentionSettings(
      params: Params$Resource$Properties$Updatedataretentionsettings,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateDataRetentionSettings(
      params?: Params$Resource$Properties$Updatedataretentionsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaDataRetentionSettings>;
    updateDataRetentionSettings(
      params: Params$Resource$Properties$Updatedataretentionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateDataRetentionSettings(
      params: Params$Resource$Properties$Updatedataretentionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDataRetentionSettings>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDataRetentionSettings>
    ): void;
    updateDataRetentionSettings(
      params: Params$Resource$Properties$Updatedataretentionsettings,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDataRetentionSettings>
    ): void;
    updateDataRetentionSettings(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDataRetentionSettings>
    ): void;
    updateDataRetentionSettings(
      paramsOrCallback?:
        | Params$Resource$Properties$Updatedataretentionsettings
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDataRetentionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDataRetentionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDataRetentionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaDataRetentionSettings>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Updatedataretentionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Updatedataretentionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaDataRetentionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaDataRetentionSettings>(
          parameters
        );
      }
    }

    /**
     * Updates Google Signals settings for a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.updateGoogleSignalsSettings({
     *     // Output only. Resource name of this setting. Format: properties/{property_id\}/googleSignalsSettings Example: "properties/1000/googleSignalsSettings"
     *     name: 'properties/my-propertie/googleSignalsSettings',
     *     // Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "consent": "my_consent",
     *       //   "name": "my_name",
     *       //   "state": "my_state"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "consent": "my_consent",
     *   //   "name": "my_name",
     *   //   "state": "my_state"
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
    updateGoogleSignalsSettings(
      params: Params$Resource$Properties$Updategooglesignalssettings,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateGoogleSignalsSettings(
      params?: Params$Resource$Properties$Updategooglesignalssettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings>;
    updateGoogleSignalsSettings(
      params: Params$Resource$Properties$Updategooglesignalssettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateGoogleSignalsSettings(
      params: Params$Resource$Properties$Updategooglesignalssettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings>
    ): void;
    updateGoogleSignalsSettings(
      params: Params$Resource$Properties$Updategooglesignalssettings,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings>
    ): void;
    updateGoogleSignalsSettings(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings>
    ): void;
    updateGoogleSignalsSettings(
      paramsOrCallback?:
        | Params$Resource$Properties$Updategooglesignalssettings
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Updategooglesignalssettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Updategooglesignalssettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Properties$Acknowledgeuserdatacollection
    extends StandardParameters {
    /**
     * Required. The property for which to acknowledge user data collection.
     */
    property?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaAcknowledgeUserDataCollectionRequest;
  }
  export interface Params$Resource$Properties$Create
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaProperty;
  }
  export interface Params$Resource$Properties$Createconnectedsitetag
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaCreateConnectedSiteTagRequest;
  }
  export interface Params$Resource$Properties$Delete
    extends StandardParameters {
    /**
     * Required. The name of the Property to soft-delete. Format: properties/{property_id\} Example: "properties/1000"
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Deleteconnectedsitetag
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaDeleteConnectedSiteTagRequest;
  }
  export interface Params$Resource$Properties$Fetchautomatedga4configurationoptout
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutRequest;
  }
  export interface Params$Resource$Properties$Fetchconnectedga4property
    extends StandardParameters {
    /**
     * Required. The UA property for which to look up the connected GA4 property. Note this request uses the internal property ID, not the tracking ID of the form UA-XXXXXX-YY. Format: properties/{internal_web_property_id\} Example: properties/1234
     */
    property?: string;
  }
  export interface Params$Resource$Properties$Get extends StandardParameters {
    /**
     * Required. The name of the property to lookup. Format: properties/{property_id\} Example: "properties/1000"
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Getattributionsettings
    extends StandardParameters {
    /**
     * Required. The name of the attribution settings to retrieve. Format: properties/{property\}/attributionSettings
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Getdataretentionsettings
    extends StandardParameters {
    /**
     * Required. The name of the settings to lookup. Format: properties/{property\}/dataRetentionSettings Example: "properties/1000/dataRetentionSettings"
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Getgooglesignalssettings
    extends StandardParameters {
    /**
     * Required. The name of the google signals settings to retrieve. Format: properties/{property\}/googleSignalsSettings
     */
    name?: string;
  }
  export interface Params$Resource$Properties$List extends StandardParameters {
    /**
     * Required. An expression for filtering the results of the request. Fields eligible for filtering are: `parent:`(The resource name of the parent account/property) or `ancestor:`(The resource name of the parent account) or `firebase_project:`(The id or number of the linked firebase project). Some examples of filters: ``` | Filter | Description | |-----------------------------|-------------------------------------------| | parent:accounts/123 | The account with account id: 123. | | parent:properties/123 | The property with property id: 123. | | ancestor:accounts/123 | The account with account id: 123. | | firebase_project:project-id | The firebase project with id: project-id. | | firebase_project:123 | The firebase project with number: 123. | ```
     */
    filter?: string;
    /**
     * The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListProperties` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProperties` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Whether to include soft-deleted (ie: "trashed") Properties in the results. Properties can be inspected to determine whether they are deleted or not.
     */
    showDeleted?: boolean;
  }
  export interface Params$Resource$Properties$Listconnectedsitetags
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaListConnectedSiteTagsRequest;
  }
  export interface Params$Resource$Properties$Patch extends StandardParameters {
    /**
     * Output only. Resource name of this property. Format: properties/{property_id\} Example: "properties/1000"
     */
    name?: string;
    /**
     * Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaProperty;
  }
  export interface Params$Resource$Properties$Runaccessreport
    extends StandardParameters {
    /**
     * The Data Access Report supports requesting at the property level or account level. If requested at the account level, Data Access Reports include all access for all properties under that account. To request at the property level, entity should be for example 'properties/123' if "123" is your GA4 property ID. To request at the account level, entity should be for example 'accounts/1234' if "1234" is your GA4 Account ID.
     */
    entity?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaRunAccessReportRequest;
  }
  export interface Params$Resource$Properties$Setautomatedga4configurationoptout
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaSetAutomatedGa4ConfigurationOptOutRequest;
  }
  export interface Params$Resource$Properties$Updateattributionsettings
    extends StandardParameters {
    /**
     * Output only. Resource name of this attribution settings resource. Format: properties/{property_id\}/attributionSettings Example: "properties/1000/attributionSettings"
     */
    name?: string;
    /**
     * Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaAttributionSettings;
  }
  export interface Params$Resource$Properties$Updatedataretentionsettings
    extends StandardParameters {
    /**
     * Output only. Resource name for this DataRetentionSetting resource. Format: properties/{property\}/dataRetentionSettings
     */
    name?: string;
    /**
     * Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaDataRetentionSettings;
  }
  export interface Params$Resource$Properties$Updategooglesignalssettings
    extends StandardParameters {
    /**
     * Output only. Resource name of this setting. Format: properties/{property_id\}/googleSignalsSettings Example: "properties/1000/googleSignalsSettings"
     */
    name?: string;
    /**
     * Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings;
  }

  export class Resource$Properties$Accessbindings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates information about multiple access bindings to an account or property. This method is transactional. If any AccessBinding cannot be created, none of the AccessBindings will be created.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.accessBindings.batchCreate({
     *     // Required. The account or property that owns the access bindings. The parent field in the CreateAccessBindingRequest messages must either be empty or match this field. Formats: - accounts/{account\} - properties/{property\}
     *     parent: 'properties/my-propertie',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "requests": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accessBindings": []
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
    batchCreate(
      params: Params$Resource$Properties$Accessbindings$Batchcreate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchCreate(
      params?: Params$Resource$Properties$Accessbindings$Batchcreate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsResponse>;
    batchCreate(
      params: Params$Resource$Properties$Accessbindings$Batchcreate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchCreate(
      params: Params$Resource$Properties$Accessbindings$Batchcreate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsResponse>
    ): void;
    batchCreate(
      params: Params$Resource$Properties$Accessbindings$Batchcreate,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsResponse>
    ): void;
    batchCreate(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsResponse>
    ): void;
    batchCreate(
      paramsOrCallback?:
        | Params$Resource$Properties$Accessbindings$Batchcreate
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Accessbindings$Batchcreate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Accessbindings$Batchcreate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1alpha/{+parent}/accessBindings:batchCreate'
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsResponse>(
          parameters
        );
      }
    }

    /**
     * Deletes information about multiple users' links to an account or property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.accessBindings.batchDelete({
     *     // Required. The account or property that owns the access bindings. The parent of all provided values for the 'names' field in DeleteAccessBindingRequest messages must match this field. Formats: - accounts/{account\} - properties/{property\}
     *     parent: 'properties/my-propertie',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "requests": []
     *       // }
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
    batchDelete(
      params: Params$Resource$Properties$Accessbindings$Batchdelete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchDelete(
      params?: Params$Resource$Properties$Accessbindings$Batchdelete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    batchDelete(
      params: Params$Resource$Properties$Accessbindings$Batchdelete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchDelete(
      params: Params$Resource$Properties$Accessbindings$Batchdelete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    batchDelete(
      params: Params$Resource$Properties$Accessbindings$Batchdelete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    batchDelete(
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    batchDelete(
      paramsOrCallback?:
        | Params$Resource$Properties$Accessbindings$Batchdelete
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
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Accessbindings$Batchdelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Accessbindings$Batchdelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1alpha/{+parent}/accessBindings:batchDelete'
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Gets information about multiple access bindings to an account or property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.manage.users',
     *       'https://www.googleapis.com/auth/analytics.manage.users.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.accessBindings.batchGet({
     *     // Required. The names of the access bindings to retrieve. A maximum of 1000 access bindings can be retrieved in a batch. Formats: - accounts/{account\}/accessBindings/{accessBinding\} - properties/{property\}/accessBindings/{accessBinding\}
     *     names: 'placeholder-value',
     *     // Required. The account or property that owns the access bindings. The parent of all provided values for the 'names' field must match this field. Formats: - accounts/{account\} - properties/{property\}
     *     parent: 'properties/my-propertie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accessBindings": []
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
    batchGet(
      params: Params$Resource$Properties$Accessbindings$Batchget,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchGet(
      params?: Params$Resource$Properties$Accessbindings$Batchget,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaBatchGetAccessBindingsResponse>;
    batchGet(
      params: Params$Resource$Properties$Accessbindings$Batchget,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchGet(
      params: Params$Resource$Properties$Accessbindings$Batchget,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchGetAccessBindingsResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchGetAccessBindingsResponse>
    ): void;
    batchGet(
      params: Params$Resource$Properties$Accessbindings$Batchget,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchGetAccessBindingsResponse>
    ): void;
    batchGet(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchGetAccessBindingsResponse>
    ): void;
    batchGet(
      paramsOrCallback?:
        | Params$Resource$Properties$Accessbindings$Batchget
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchGetAccessBindingsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchGetAccessBindingsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchGetAccessBindingsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaBatchGetAccessBindingsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Accessbindings$Batchget;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Accessbindings$Batchget;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1alpha/{+parent}/accessBindings:batchGet'
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaBatchGetAccessBindingsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaBatchGetAccessBindingsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates information about multiple access bindings to an account or property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.accessBindings.batchUpdate({
     *     // Required. The account or property that owns the access bindings. The parent of all provided AccessBinding in UpdateAccessBindingRequest messages must match this field. Formats: - accounts/{account\} - properties/{property\}
     *     parent: 'properties/my-propertie',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "requests": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accessBindings": []
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
    batchUpdate(
      params: Params$Resource$Properties$Accessbindings$Batchupdate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchUpdate(
      params?: Params$Resource$Properties$Accessbindings$Batchupdate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsResponse>;
    batchUpdate(
      params: Params$Resource$Properties$Accessbindings$Batchupdate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchUpdate(
      params: Params$Resource$Properties$Accessbindings$Batchupdate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsResponse>
    ): void;
    batchUpdate(
      params: Params$Resource$Properties$Accessbindings$Batchupdate,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsResponse>
    ): void;
    batchUpdate(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsResponse>
    ): void;
    batchUpdate(
      paramsOrCallback?:
        | Params$Resource$Properties$Accessbindings$Batchupdate
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Accessbindings$Batchupdate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Accessbindings$Batchupdate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1alpha/{+parent}/accessBindings:batchUpdate'
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsResponse>(
          parameters
        );
      }
    }

    /**
     * Creates an access binding on an account or property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.accessBindings.create({
     *     // Required. Formats: - accounts/{account\} - properties/{property\}
     *     parent: 'properties/my-propertie',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "name": "my_name",
     *       //   "roles": [],
     *       //   "user": "my_user"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "roles": [],
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
      params: Params$Resource$Properties$Accessbindings$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Properties$Accessbindings$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>;
    create(
      params: Params$Resource$Properties$Accessbindings$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Properties$Accessbindings$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>
    ): void;
    create(
      params: Params$Resource$Properties$Accessbindings$Create,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Properties$Accessbindings$Create
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Accessbindings$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Accessbindings$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/accessBindings').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>(
          parameters
        );
      }
    }

    /**
     * Deletes an access binding on an account or property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.accessBindings.delete({
     *     // Required. Formats: - accounts/{account\}/accessBindings/{accessBinding\} - properties/{property\}/accessBindings/{accessBinding\}
     *     name: 'properties/my-propertie/accessBindings/my-accessBinding',
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
      params: Params$Resource$Properties$Accessbindings$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Properties$Accessbindings$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Properties$Accessbindings$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Properties$Accessbindings$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Properties$Accessbindings$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Properties$Accessbindings$Delete
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
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Accessbindings$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Accessbindings$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Gets information about an access binding.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.manage.users',
     *       'https://www.googleapis.com/auth/analytics.manage.users.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.accessBindings.get({
     *     // Required. The name of the access binding to retrieve. Formats: - accounts/{account\}/accessBindings/{accessBinding\} - properties/{property\}/accessBindings/{accessBinding\}
     *     name: 'properties/my-propertie/accessBindings/my-accessBinding',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "roles": [],
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
    get(
      params: Params$Resource$Properties$Accessbindings$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Properties$Accessbindings$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>;
    get(
      params: Params$Resource$Properties$Accessbindings$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Properties$Accessbindings$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>
    ): void;
    get(
      params: Params$Resource$Properties$Accessbindings$Get,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Properties$Accessbindings$Get
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Accessbindings$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Accessbindings$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>(
          parameters
        );
      }
    }

    /**
     * Lists all access bindings on an account or property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.manage.users',
     *       'https://www.googleapis.com/auth/analytics.manage.users.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.accessBindings.list({
     *     // The maximum number of access bindings to return. The service may return fewer than this value. If unspecified, at most 200 access bindings will be returned. The maximum value is 500; values above 500 will be coerced to 500.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListAccessBindings` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccessBindings` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. Formats: - accounts/{account\} - properties/{property\}
     *     parent: 'properties/my-propertie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accessBindings": [],
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
      params: Params$Resource$Properties$Accessbindings$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Properties$Accessbindings$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListAccessBindingsResponse>;
    list(
      params: Params$Resource$Properties$Accessbindings$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Properties$Accessbindings$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAccessBindingsResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAccessBindingsResponse>
    ): void;
    list(
      params: Params$Resource$Properties$Accessbindings$List,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAccessBindingsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAccessBindingsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Properties$Accessbindings$List
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAccessBindingsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAccessBindingsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAccessBindingsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListAccessBindingsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Accessbindings$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Accessbindings$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/accessBindings').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListAccessBindingsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListAccessBindingsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates an access binding on an account or property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.accessBindings.patch({
     *     // Output only. Resource name of this binding. Format: accounts/{account\}/accessBindings/{access_binding\} or properties/{property\}/accessBindings/{access_binding\} Example: "accounts/100/accessBindings/200"
     *     name: 'properties/my-propertie/accessBindings/my-accessBinding',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "name": "my_name",
     *       //   "roles": [],
     *       //   "user": "my_user"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "roles": [],
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
      params: Params$Resource$Properties$Accessbindings$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Properties$Accessbindings$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>;
    patch(
      params: Params$Resource$Properties$Accessbindings$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Properties$Accessbindings$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>
    ): void;
    patch(
      params: Params$Resource$Properties$Accessbindings$Patch,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Properties$Accessbindings$Patch
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Accessbindings$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Accessbindings$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAccessBinding>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Properties$Accessbindings$Batchcreate
    extends StandardParameters {
    /**
     * Required. The account or property that owns the access bindings. The parent field in the CreateAccessBindingRequest messages must either be empty or match this field. Formats: - accounts/{account\} - properties/{property\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsRequest;
  }
  export interface Params$Resource$Properties$Accessbindings$Batchdelete
    extends StandardParameters {
    /**
     * Required. The account or property that owns the access bindings. The parent of all provided values for the 'names' field in DeleteAccessBindingRequest messages must match this field. Formats: - accounts/{account\} - properties/{property\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaBatchDeleteAccessBindingsRequest;
  }
  export interface Params$Resource$Properties$Accessbindings$Batchget
    extends StandardParameters {
    /**
     * Required. The names of the access bindings to retrieve. A maximum of 1000 access bindings can be retrieved in a batch. Formats: - accounts/{account\}/accessBindings/{accessBinding\} - properties/{property\}/accessBindings/{accessBinding\}
     */
    names?: string[];
    /**
     * Required. The account or property that owns the access bindings. The parent of all provided values for the 'names' field must match this field. Formats: - accounts/{account\} - properties/{property\}
     */
    parent?: string;
  }
  export interface Params$Resource$Properties$Accessbindings$Batchupdate
    extends StandardParameters {
    /**
     * Required. The account or property that owns the access bindings. The parent of all provided AccessBinding in UpdateAccessBindingRequest messages must match this field. Formats: - accounts/{account\} - properties/{property\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsRequest;
  }
  export interface Params$Resource$Properties$Accessbindings$Create
    extends StandardParameters {
    /**
     * Required. Formats: - accounts/{account\} - properties/{property\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaAccessBinding;
  }
  export interface Params$Resource$Properties$Accessbindings$Delete
    extends StandardParameters {
    /**
     * Required. Formats: - accounts/{account\}/accessBindings/{accessBinding\} - properties/{property\}/accessBindings/{accessBinding\}
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Accessbindings$Get
    extends StandardParameters {
    /**
     * Required. The name of the access binding to retrieve. Formats: - accounts/{account\}/accessBindings/{accessBinding\} - properties/{property\}/accessBindings/{accessBinding\}
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Accessbindings$List
    extends StandardParameters {
    /**
     * The maximum number of access bindings to return. The service may return fewer than this value. If unspecified, at most 200 access bindings will be returned. The maximum value is 500; values above 500 will be coerced to 500.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListAccessBindings` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccessBindings` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Formats: - accounts/{account\} - properties/{property\}
     */
    parent?: string;
  }
  export interface Params$Resource$Properties$Accessbindings$Patch
    extends StandardParameters {
    /**
     * Output only. Resource name of this binding. Format: accounts/{account\}/accessBindings/{access_binding\} or properties/{property\}/accessBindings/{access_binding\} Example: "accounts/100/accessBindings/200"
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaAccessBinding;
  }

  export class Resource$Properties$Adsenselinks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates an AdSenseLink.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
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
     *   const res = await analyticsadmin.properties.adSenseLinks.create({
     *     // Required. The property for which to create an AdSense Link. Format: properties/{propertyId\} Example: properties/1234
     *     parent: 'properties/my-propertie',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "adClientCode": "my_adClientCode",
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adClientCode": "my_adClientCode",
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
      params: Params$Resource$Properties$Adsenselinks$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Properties$Adsenselinks$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAdSenseLink>;
    create(
      params: Params$Resource$Properties$Adsenselinks$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Properties$Adsenselinks$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAdSenseLink>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAdSenseLink>
    ): void;
    create(
      params: Params$Resource$Properties$Adsenselinks$Create,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAdSenseLink>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAdSenseLink>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Properties$Adsenselinks$Create
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAdSenseLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAdSenseLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAdSenseLink>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAdSenseLink>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Adsenselinks$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Adsenselinks$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/adSenseLinks').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAdSenseLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAdSenseLink>(
          parameters
        );
      }
    }

    /**
     * Deletes an AdSenseLink.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
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
     *   const res = await analyticsadmin.properties.adSenseLinks.delete({
     *     // Required. Unique identifier for the AdSense Link to be deleted. Format: properties/{propertyId\}/adSenseLinks/{linkId\} Example: properties/1234/adSenseLinks/5678
     *     name: 'properties/my-propertie/adSenseLinks/my-adSenseLink',
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
      params: Params$Resource$Properties$Adsenselinks$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Properties$Adsenselinks$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Properties$Adsenselinks$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Properties$Adsenselinks$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Properties$Adsenselinks$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Properties$Adsenselinks$Delete
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
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Adsenselinks$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Adsenselinks$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Looks up a single AdSenseLink.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
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
     *   const res = await analyticsadmin.properties.adSenseLinks.get({
     *     // Required. Unique identifier for the AdSense Link requested. Format: properties/{propertyId\}/adSenseLinks/{linkId\} Example: properties/1234/adSenseLinks/5678
     *     name: 'properties/my-propertie/adSenseLinks/my-adSenseLink',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adClientCode": "my_adClientCode",
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
      params: Params$Resource$Properties$Adsenselinks$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Properties$Adsenselinks$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAdSenseLink>;
    get(
      params: Params$Resource$Properties$Adsenselinks$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Properties$Adsenselinks$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAdSenseLink>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAdSenseLink>
    ): void;
    get(
      params: Params$Resource$Properties$Adsenselinks$Get,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAdSenseLink>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAdSenseLink>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Properties$Adsenselinks$Get
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAdSenseLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAdSenseLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAdSenseLink>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAdSenseLink>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Adsenselinks$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Adsenselinks$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAdSenseLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAdSenseLink>(
          parameters
        );
      }
    }

    /**
     * Lists AdSenseLinks on a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
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
     *   const res = await analyticsadmin.properties.adSenseLinks.list({
     *     // The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     *     pageSize: 'placeholder-value',
     *     // A page token received from a previous `ListAdSenseLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAdSenseLinks` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. Resource name of the parent property. Format: properties/{propertyId\} Example: properties/1234
     *     parent: 'properties/my-propertie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adsenseLinks": [],
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
      params: Params$Resource$Properties$Adsenselinks$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Properties$Adsenselinks$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListAdSenseLinksResponse>;
    list(
      params: Params$Resource$Properties$Adsenselinks$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Properties$Adsenselinks$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAdSenseLinksResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAdSenseLinksResponse>
    ): void;
    list(
      params: Params$Resource$Properties$Adsenselinks$List,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAdSenseLinksResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAdSenseLinksResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Properties$Adsenselinks$List
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAdSenseLinksResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAdSenseLinksResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAdSenseLinksResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListAdSenseLinksResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Adsenselinks$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Adsenselinks$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/adSenseLinks').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListAdSenseLinksResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListAdSenseLinksResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Properties$Adsenselinks$Create
    extends StandardParameters {
    /**
     * Required. The property for which to create an AdSense Link. Format: properties/{propertyId\} Example: properties/1234
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaAdSenseLink;
  }
  export interface Params$Resource$Properties$Adsenselinks$Delete
    extends StandardParameters {
    /**
     * Required. Unique identifier for the AdSense Link to be deleted. Format: properties/{propertyId\}/adSenseLinks/{linkId\} Example: properties/1234/adSenseLinks/5678
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Adsenselinks$Get
    extends StandardParameters {
    /**
     * Required. Unique identifier for the AdSense Link requested. Format: properties/{propertyId\}/adSenseLinks/{linkId\} Example: properties/1234/adSenseLinks/5678
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Adsenselinks$List
    extends StandardParameters {
    /**
     * The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     */
    pageSize?: number;
    /**
     * A page token received from a previous `ListAdSenseLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAdSenseLinks` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Resource name of the parent property. Format: properties/{propertyId\} Example: properties/1234
     */
    parent?: string;
  }

  export class Resource$Properties$Audiences {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Archives an Audience on a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.audiences.archive({
     *     // Required. Example format: properties/1234/audiences/5678
     *     name: 'properties/my-propertie/audiences/my-audience',
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
    archive(
      params: Params$Resource$Properties$Audiences$Archive,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    archive(
      params?: Params$Resource$Properties$Audiences$Archive,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    archive(
      params: Params$Resource$Properties$Audiences$Archive,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    archive(
      params: Params$Resource$Properties$Audiences$Archive,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    archive(
      params: Params$Resource$Properties$Audiences$Archive,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    archive(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    archive(
      paramsOrCallback?:
        | Params$Resource$Properties$Audiences$Archive
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
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Audiences$Archive;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Audiences$Archive;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}:archive').replace(
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Creates an Audience.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.audiences.create({
     *     // Required. Example format: properties/1234
     *     parent: 'properties/my-propertie',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "adsPersonalizationEnabled": false,
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "eventTrigger": {},
     *       //   "exclusionDurationMode": "my_exclusionDurationMode",
     *       //   "filterClauses": [],
     *       //   "membershipDurationDays": 0,
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adsPersonalizationEnabled": false,
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "eventTrigger": {},
     *   //   "exclusionDurationMode": "my_exclusionDurationMode",
     *   //   "filterClauses": [],
     *   //   "membershipDurationDays": 0,
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
      params: Params$Resource$Properties$Audiences$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Properties$Audiences$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAudience>;
    create(
      params: Params$Resource$Properties$Audiences$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Properties$Audiences$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAudience>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAudience>
    ): void;
    create(
      params: Params$Resource$Properties$Audiences$Create,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAudience>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAudience>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Properties$Audiences$Create
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAudience>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAudience>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAudience>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAudience>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Audiences$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Audiences$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/audiences').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAudience>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAudience>(
          parameters
        );
      }
    }

    /**
     * Lookup for a single Audience. Audiences created before 2020 may not be supported. Default audiences will not show filter definitions.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.audiences.get({
     *     // Required. The name of the Audience to get. Example format: properties/1234/audiences/5678
     *     name: 'properties/my-propertie/audiences/my-audience',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adsPersonalizationEnabled": false,
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "eventTrigger": {},
     *   //   "exclusionDurationMode": "my_exclusionDurationMode",
     *   //   "filterClauses": [],
     *   //   "membershipDurationDays": 0,
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
      params: Params$Resource$Properties$Audiences$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Properties$Audiences$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAudience>;
    get(
      params: Params$Resource$Properties$Audiences$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Properties$Audiences$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAudience>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAudience>
    ): void;
    get(
      params: Params$Resource$Properties$Audiences$Get,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAudience>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAudience>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Properties$Audiences$Get
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAudience>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAudience>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAudience>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAudience>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Audiences$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Audiences$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAudience>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAudience>(
          parameters
        );
      }
    }

    /**
     * Lists Audiences on a property. Audiences created before 2020 may not be supported. Default audiences will not show filter definitions.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.audiences.list({
     *     // The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListAudiences` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAudiences` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. Example format: properties/1234
     *     parent: 'properties/my-propertie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "audiences": [],
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
      params: Params$Resource$Properties$Audiences$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Properties$Audiences$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListAudiencesResponse>;
    list(
      params: Params$Resource$Properties$Audiences$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Properties$Audiences$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAudiencesResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAudiencesResponse>
    ): void;
    list(
      params: Params$Resource$Properties$Audiences$List,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAudiencesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAudiencesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Properties$Audiences$List
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAudiencesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAudiencesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAudiencesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListAudiencesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Audiences$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Audiences$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/audiences').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListAudiencesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListAudiencesResponse>(
          parameters
        );
      }
    }

    /**
     * Updates an Audience on a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.audiences.patch({
     *     // Output only. The resource name for this Audience resource. Format: properties/{propertyId\}/audiences/{audienceId\}
     *     name: 'properties/my-propertie/audiences/my-audience',
     *     // Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "adsPersonalizationEnabled": false,
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "eventTrigger": {},
     *       //   "exclusionDurationMode": "my_exclusionDurationMode",
     *       //   "filterClauses": [],
     *       //   "membershipDurationDays": 0,
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adsPersonalizationEnabled": false,
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "eventTrigger": {},
     *   //   "exclusionDurationMode": "my_exclusionDurationMode",
     *   //   "filterClauses": [],
     *   //   "membershipDurationDays": 0,
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
      params: Params$Resource$Properties$Audiences$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Properties$Audiences$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAudience>;
    patch(
      params: Params$Resource$Properties$Audiences$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Properties$Audiences$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAudience>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAudience>
    ): void;
    patch(
      params: Params$Resource$Properties$Audiences$Patch,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAudience>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAudience>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Properties$Audiences$Patch
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAudience>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAudience>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAudience>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAudience>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Audiences$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Audiences$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAudience>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAudience>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Properties$Audiences$Archive
    extends StandardParameters {
    /**
     * Required. Example format: properties/1234/audiences/5678
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaArchiveAudienceRequest;
  }
  export interface Params$Resource$Properties$Audiences$Create
    extends StandardParameters {
    /**
     * Required. Example format: properties/1234
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaAudience;
  }
  export interface Params$Resource$Properties$Audiences$Get
    extends StandardParameters {
    /**
     * Required. The name of the Audience to get. Example format: properties/1234/audiences/5678
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Audiences$List
    extends StandardParameters {
    /**
     * The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListAudiences` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAudiences` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Example format: properties/1234
     */
    parent?: string;
  }
  export interface Params$Resource$Properties$Audiences$Patch
    extends StandardParameters {
    /**
     * Output only. The resource name for this Audience resource. Format: properties/{propertyId\}/audiences/{audienceId\}
     */
    name?: string;
    /**
     * Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaAudience;
  }

  export class Resource$Properties$Bigquerylinks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lookup for a single BigQuery Link.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.bigQueryLinks.get({
     *     // Required. The name of the BigQuery link to lookup. Format: properties/{property_id\}/bigQueryLinks/{bigquery_link_id\} Example: properties/123/bigQueryLinks/456
     *     name: 'properties/my-propertie/bigQueryLinks/my-bigQueryLink',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "dailyExportEnabled": false,
     *   //   "enterpriseExportEnabled": false,
     *   //   "excludedEvents": [],
     *   //   "exportStreams": [],
     *   //   "includeAdvertisingId": false,
     *   //   "name": "my_name",
     *   //   "project": "my_project",
     *   //   "streamingExportEnabled": false
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
      params: Params$Resource$Properties$Bigquerylinks$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Properties$Bigquerylinks$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaBigQueryLink>;
    get(
      params: Params$Resource$Properties$Bigquerylinks$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Properties$Bigquerylinks$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBigQueryLink>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBigQueryLink>
    ): void;
    get(
      params: Params$Resource$Properties$Bigquerylinks$Get,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBigQueryLink>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBigQueryLink>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Properties$Bigquerylinks$Get
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBigQueryLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBigQueryLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBigQueryLink>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaBigQueryLink>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Bigquerylinks$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Bigquerylinks$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaBigQueryLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaBigQueryLink>(
          parameters
        );
      }
    }

    /**
     * Lists BigQuery Links on a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.bigQueryLinks.list({
     *     // The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListBigQueryLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBigQueryLinks` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The name of the property to list BigQuery links under. Format: properties/{property_id\} Example: properties/1234
     *     parent: 'properties/my-propertie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "bigqueryLinks": [],
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
      params: Params$Resource$Properties$Bigquerylinks$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Properties$Bigquerylinks$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListBigQueryLinksResponse>;
    list(
      params: Params$Resource$Properties$Bigquerylinks$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Properties$Bigquerylinks$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListBigQueryLinksResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListBigQueryLinksResponse>
    ): void;
    list(
      params: Params$Resource$Properties$Bigquerylinks$List,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListBigQueryLinksResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListBigQueryLinksResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Properties$Bigquerylinks$List
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListBigQueryLinksResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListBigQueryLinksResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListBigQueryLinksResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListBigQueryLinksResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Bigquerylinks$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Bigquerylinks$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/bigQueryLinks').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListBigQueryLinksResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListBigQueryLinksResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Properties$Bigquerylinks$Get
    extends StandardParameters {
    /**
     * Required. The name of the BigQuery link to lookup. Format: properties/{property_id\}/bigQueryLinks/{bigquery_link_id\} Example: properties/123/bigQueryLinks/456
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Bigquerylinks$List
    extends StandardParameters {
    /**
     * The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListBigQueryLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBigQueryLinks` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The name of the property to list BigQuery links under. Format: properties/{property_id\} Example: properties/1234
     */
    parent?: string;
  }

  export class Resource$Properties$Channelgroups {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a ChannelGroup.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.channelGroups.create({
     *     // Required. The property for which to create a ChannelGroup. Example format: properties/1234
     *     parent: 'properties/my-propertie',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "groupingRule": [],
     *       //   "name": "my_name",
     *       //   "systemDefined": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "groupingRule": [],
     *   //   "name": "my_name",
     *   //   "systemDefined": false
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
      params: Params$Resource$Properties$Channelgroups$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Properties$Channelgroups$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaChannelGroup>;
    create(
      params: Params$Resource$Properties$Channelgroups$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Properties$Channelgroups$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaChannelGroup>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaChannelGroup>
    ): void;
    create(
      params: Params$Resource$Properties$Channelgroups$Create,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaChannelGroup>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaChannelGroup>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Properties$Channelgroups$Create
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaChannelGroup>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaChannelGroup>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaChannelGroup>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaChannelGroup>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Channelgroups$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Channelgroups$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/channelGroups').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaChannelGroup>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaChannelGroup>(
          parameters
        );
      }
    }

    /**
     * Deletes a ChannelGroup on a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.channelGroups.delete({
     *     // Required. The ChannelGroup to delete. Example format: properties/1234/channelGroups/5678
     *     name: 'properties/my-propertie/channelGroups/my-channelGroup',
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
      params: Params$Resource$Properties$Channelgroups$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Properties$Channelgroups$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Properties$Channelgroups$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Properties$Channelgroups$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Properties$Channelgroups$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Properties$Channelgroups$Delete
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
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Channelgroups$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Channelgroups$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Lookup for a single ChannelGroup.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.channelGroups.get({
     *     // Required. The ChannelGroup to get. Example format: properties/1234/channelGroups/5678
     *     name: 'properties/my-propertie/channelGroups/my-channelGroup',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "groupingRule": [],
     *   //   "name": "my_name",
     *   //   "systemDefined": false
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
      params: Params$Resource$Properties$Channelgroups$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Properties$Channelgroups$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaChannelGroup>;
    get(
      params: Params$Resource$Properties$Channelgroups$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Properties$Channelgroups$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaChannelGroup>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaChannelGroup>
    ): void;
    get(
      params: Params$Resource$Properties$Channelgroups$Get,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaChannelGroup>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaChannelGroup>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Properties$Channelgroups$Get
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaChannelGroup>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaChannelGroup>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaChannelGroup>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaChannelGroup>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Channelgroups$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Channelgroups$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaChannelGroup>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaChannelGroup>(
          parameters
        );
      }
    }

    /**
     * Lists ChannelGroups on a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.channelGroups.list({
     *     // The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListChannelGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListChannelGroups` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The property for which to list ChannelGroups. Example format: properties/1234
     *     parent: 'properties/my-propertie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "channelGroups": [],
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
      params: Params$Resource$Properties$Channelgroups$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Properties$Channelgroups$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListChannelGroupsResponse>;
    list(
      params: Params$Resource$Properties$Channelgroups$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Properties$Channelgroups$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListChannelGroupsResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListChannelGroupsResponse>
    ): void;
    list(
      params: Params$Resource$Properties$Channelgroups$List,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListChannelGroupsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListChannelGroupsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Properties$Channelgroups$List
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListChannelGroupsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListChannelGroupsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListChannelGroupsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListChannelGroupsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Channelgroups$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Channelgroups$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/channelGroups').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListChannelGroupsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListChannelGroupsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a ChannelGroup.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.channelGroups.patch({
     *     // Output only. The resource name for this Channel Group resource. Format: properties/{property\}/channelGroups/{channel_group\}
     *     name: 'properties/my-propertie/channelGroups/my-channelGroup',
     *     // Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "groupingRule": [],
     *       //   "name": "my_name",
     *       //   "systemDefined": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "groupingRule": [],
     *   //   "name": "my_name",
     *   //   "systemDefined": false
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
      params: Params$Resource$Properties$Channelgroups$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Properties$Channelgroups$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaChannelGroup>;
    patch(
      params: Params$Resource$Properties$Channelgroups$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Properties$Channelgroups$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaChannelGroup>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaChannelGroup>
    ): void;
    patch(
      params: Params$Resource$Properties$Channelgroups$Patch,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaChannelGroup>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaChannelGroup>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Properties$Channelgroups$Patch
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaChannelGroup>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaChannelGroup>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaChannelGroup>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaChannelGroup>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Channelgroups$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Channelgroups$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaChannelGroup>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaChannelGroup>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Properties$Channelgroups$Create
    extends StandardParameters {
    /**
     * Required. The property for which to create a ChannelGroup. Example format: properties/1234
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaChannelGroup;
  }
  export interface Params$Resource$Properties$Channelgroups$Delete
    extends StandardParameters {
    /**
     * Required. The ChannelGroup to delete. Example format: properties/1234/channelGroups/5678
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Channelgroups$Get
    extends StandardParameters {
    /**
     * Required. The ChannelGroup to get. Example format: properties/1234/channelGroups/5678
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Channelgroups$List
    extends StandardParameters {
    /**
     * The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListChannelGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListChannelGroups` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The property for which to list ChannelGroups. Example format: properties/1234
     */
    parent?: string;
  }
  export interface Params$Resource$Properties$Channelgroups$Patch
    extends StandardParameters {
    /**
     * Output only. The resource name for this Channel Group resource. Format: properties/{property\}/channelGroups/{channel_group\}
     */
    name?: string;
    /**
     * Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaChannelGroup;
  }

  export class Resource$Properties$Conversionevents {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a conversion event with the specified attributes.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.conversionEvents.create({
     *     // Required. The resource name of the parent property where this conversion event will be created. Format: properties/123
     *     parent: 'properties/my-propertie',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "custom": false,
     *       //   "deletable": false,
     *       //   "eventName": "my_eventName",
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "custom": false,
     *   //   "deletable": false,
     *   //   "eventName": "my_eventName",
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
      params: Params$Resource$Properties$Conversionevents$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Properties$Conversionevents$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaConversionEvent>;
    create(
      params: Params$Resource$Properties$Conversionevents$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Properties$Conversionevents$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaConversionEvent>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaConversionEvent>
    ): void;
    create(
      params: Params$Resource$Properties$Conversionevents$Create,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaConversionEvent>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaConversionEvent>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Properties$Conversionevents$Create
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaConversionEvent>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaConversionEvent>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaConversionEvent>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaConversionEvent>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Conversionevents$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Conversionevents$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/conversionEvents').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaConversionEvent>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaConversionEvent>(
          parameters
        );
      }
    }

    /**
     * Deletes a conversion event in a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.conversionEvents.delete({
     *     // Required. The resource name of the conversion event to delete. Format: properties/{property\}/conversionEvents/{conversion_event\} Example: "properties/123/conversionEvents/456"
     *     name: 'properties/my-propertie/conversionEvents/my-conversionEvent',
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
      params: Params$Resource$Properties$Conversionevents$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Properties$Conversionevents$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Properties$Conversionevents$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Properties$Conversionevents$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Properties$Conversionevents$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Properties$Conversionevents$Delete
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
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Conversionevents$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Conversionevents$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Retrieve a single conversion event.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.conversionEvents.get({
     *     // Required. The resource name of the conversion event to retrieve. Format: properties/{property\}/conversionEvents/{conversion_event\} Example: "properties/123/conversionEvents/456"
     *     name: 'properties/my-propertie/conversionEvents/my-conversionEvent',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "custom": false,
     *   //   "deletable": false,
     *   //   "eventName": "my_eventName",
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
      params: Params$Resource$Properties$Conversionevents$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Properties$Conversionevents$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaConversionEvent>;
    get(
      params: Params$Resource$Properties$Conversionevents$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Properties$Conversionevents$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaConversionEvent>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaConversionEvent>
    ): void;
    get(
      params: Params$Resource$Properties$Conversionevents$Get,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaConversionEvent>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaConversionEvent>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Properties$Conversionevents$Get
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaConversionEvent>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaConversionEvent>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaConversionEvent>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaConversionEvent>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Conversionevents$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Conversionevents$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaConversionEvent>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaConversionEvent>(
          parameters
        );
      }
    }

    /**
     * Returns a list of conversion events in the specified parent property. Returns an empty list if no conversion events are found.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.conversionEvents.list({
     *     // The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListConversionEvents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConversionEvents` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name of the parent property. Example: 'properties/123'
     *     parent: 'properties/my-propertie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "conversionEvents": [],
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
      params: Params$Resource$Properties$Conversionevents$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Properties$Conversionevents$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListConversionEventsResponse>;
    list(
      params: Params$Resource$Properties$Conversionevents$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Properties$Conversionevents$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListConversionEventsResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListConversionEventsResponse>
    ): void;
    list(
      params: Params$Resource$Properties$Conversionevents$List,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListConversionEventsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListConversionEventsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Properties$Conversionevents$List
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListConversionEventsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListConversionEventsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListConversionEventsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListConversionEventsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Conversionevents$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Conversionevents$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/conversionEvents').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListConversionEventsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListConversionEventsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Properties$Conversionevents$Create
    extends StandardParameters {
    /**
     * Required. The resource name of the parent property where this conversion event will be created. Format: properties/123
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaConversionEvent;
  }
  export interface Params$Resource$Properties$Conversionevents$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the conversion event to delete. Format: properties/{property\}/conversionEvents/{conversion_event\} Example: "properties/123/conversionEvents/456"
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Conversionevents$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the conversion event to retrieve. Format: properties/{property\}/conversionEvents/{conversion_event\} Example: "properties/123/conversionEvents/456"
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Conversionevents$List
    extends StandardParameters {
    /**
     * The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListConversionEvents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConversionEvents` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the parent property. Example: 'properties/123'
     */
    parent?: string;
  }

  export class Resource$Properties$Customdimensions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Archives a CustomDimension on a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.customDimensions.archive({
     *     // Required. The name of the CustomDimension to archive. Example format: properties/1234/customDimensions/5678
     *     name: 'properties/my-propertie/customDimensions/my-customDimension',
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
    archive(
      params: Params$Resource$Properties$Customdimensions$Archive,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    archive(
      params?: Params$Resource$Properties$Customdimensions$Archive,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    archive(
      params: Params$Resource$Properties$Customdimensions$Archive,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    archive(
      params: Params$Resource$Properties$Customdimensions$Archive,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    archive(
      params: Params$Resource$Properties$Customdimensions$Archive,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    archive(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    archive(
      paramsOrCallback?:
        | Params$Resource$Properties$Customdimensions$Archive
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
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Customdimensions$Archive;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Customdimensions$Archive;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}:archive').replace(
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Creates a CustomDimension.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.customDimensions.create({
     *     // Required. Example format: properties/1234
     *     parent: 'properties/my-propertie',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "description": "my_description",
     *       //   "disallowAdsPersonalization": false,
     *       //   "displayName": "my_displayName",
     *       //   "name": "my_name",
     *       //   "parameterName": "my_parameterName",
     *       //   "scope": "my_scope"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
     *   //   "disallowAdsPersonalization": false,
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "parameterName": "my_parameterName",
     *   //   "scope": "my_scope"
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
      params: Params$Resource$Properties$Customdimensions$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Properties$Customdimensions$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>;
    create(
      params: Params$Resource$Properties$Customdimensions$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Properties$Customdimensions$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>
    ): void;
    create(
      params: Params$Resource$Properties$Customdimensions$Create,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Properties$Customdimensions$Create
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Customdimensions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Customdimensions$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/customDimensions').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>(
          parameters
        );
      }
    }

    /**
     * Lookup for a single CustomDimension.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.customDimensions.get({
     *     // Required. The name of the CustomDimension to get. Example format: properties/1234/customDimensions/5678
     *     name: 'properties/my-propertie/customDimensions/my-customDimension',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
     *   //   "disallowAdsPersonalization": false,
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "parameterName": "my_parameterName",
     *   //   "scope": "my_scope"
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
      params: Params$Resource$Properties$Customdimensions$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Properties$Customdimensions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>;
    get(
      params: Params$Resource$Properties$Customdimensions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Properties$Customdimensions$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>
    ): void;
    get(
      params: Params$Resource$Properties$Customdimensions$Get,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Properties$Customdimensions$Get
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Customdimensions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Customdimensions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>(
          parameters
        );
      }
    }

    /**
     * Lists CustomDimensions on a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.customDimensions.list({
     *     // The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListCustomDimensions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCustomDimensions` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. Example format: properties/1234
     *     parent: 'properties/my-propertie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "customDimensions": [],
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
      params: Params$Resource$Properties$Customdimensions$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Properties$Customdimensions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListCustomDimensionsResponse>;
    list(
      params: Params$Resource$Properties$Customdimensions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Properties$Customdimensions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListCustomDimensionsResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListCustomDimensionsResponse>
    ): void;
    list(
      params: Params$Resource$Properties$Customdimensions$List,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListCustomDimensionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListCustomDimensionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Properties$Customdimensions$List
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListCustomDimensionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListCustomDimensionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListCustomDimensionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListCustomDimensionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Customdimensions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Customdimensions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/customDimensions').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListCustomDimensionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListCustomDimensionsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a CustomDimension on a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.customDimensions.patch({
     *     // Output only. Resource name for this CustomDimension resource. Format: properties/{property\}/customDimensions/{customDimension\}
     *     name: 'properties/my-propertie/customDimensions/my-customDimension',
     *     // Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "description": "my_description",
     *       //   "disallowAdsPersonalization": false,
     *       //   "displayName": "my_displayName",
     *       //   "name": "my_name",
     *       //   "parameterName": "my_parameterName",
     *       //   "scope": "my_scope"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
     *   //   "disallowAdsPersonalization": false,
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "parameterName": "my_parameterName",
     *   //   "scope": "my_scope"
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
      params: Params$Resource$Properties$Customdimensions$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Properties$Customdimensions$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>;
    patch(
      params: Params$Resource$Properties$Customdimensions$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Properties$Customdimensions$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>
    ): void;
    patch(
      params: Params$Resource$Properties$Customdimensions$Patch,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Properties$Customdimensions$Patch
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Customdimensions$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Customdimensions$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Properties$Customdimensions$Archive
    extends StandardParameters {
    /**
     * Required. The name of the CustomDimension to archive. Example format: properties/1234/customDimensions/5678
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaArchiveCustomDimensionRequest;
  }
  export interface Params$Resource$Properties$Customdimensions$Create
    extends StandardParameters {
    /**
     * Required. Example format: properties/1234
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaCustomDimension;
  }
  export interface Params$Resource$Properties$Customdimensions$Get
    extends StandardParameters {
    /**
     * Required. The name of the CustomDimension to get. Example format: properties/1234/customDimensions/5678
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Customdimensions$List
    extends StandardParameters {
    /**
     * The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListCustomDimensions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCustomDimensions` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Example format: properties/1234
     */
    parent?: string;
  }
  export interface Params$Resource$Properties$Customdimensions$Patch
    extends StandardParameters {
    /**
     * Output only. Resource name for this CustomDimension resource. Format: properties/{property\}/customDimensions/{customDimension\}
     */
    name?: string;
    /**
     * Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaCustomDimension;
  }

  export class Resource$Properties$Custommetrics {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Archives a CustomMetric on a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.customMetrics.archive({
     *     // Required. The name of the CustomMetric to archive. Example format: properties/1234/customMetrics/5678
     *     name: 'properties/my-propertie/customMetrics/my-customMetric',
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
    archive(
      params: Params$Resource$Properties$Custommetrics$Archive,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    archive(
      params?: Params$Resource$Properties$Custommetrics$Archive,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    archive(
      params: Params$Resource$Properties$Custommetrics$Archive,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    archive(
      params: Params$Resource$Properties$Custommetrics$Archive,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    archive(
      params: Params$Resource$Properties$Custommetrics$Archive,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    archive(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    archive(
      paramsOrCallback?:
        | Params$Resource$Properties$Custommetrics$Archive
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
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Custommetrics$Archive;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Custommetrics$Archive;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}:archive').replace(
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Creates a CustomMetric.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.customMetrics.create({
     *     // Required. Example format: properties/1234
     *     parent: 'properties/my-propertie',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "measurementUnit": "my_measurementUnit",
     *       //   "name": "my_name",
     *       //   "parameterName": "my_parameterName",
     *       //   "restrictedMetricType": [],
     *       //   "scope": "my_scope"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "measurementUnit": "my_measurementUnit",
     *   //   "name": "my_name",
     *   //   "parameterName": "my_parameterName",
     *   //   "restrictedMetricType": [],
     *   //   "scope": "my_scope"
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
      params: Params$Resource$Properties$Custommetrics$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Properties$Custommetrics$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>;
    create(
      params: Params$Resource$Properties$Custommetrics$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Properties$Custommetrics$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>
    ): void;
    create(
      params: Params$Resource$Properties$Custommetrics$Create,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Properties$Custommetrics$Create
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Custommetrics$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Custommetrics$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/customMetrics').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>(
          parameters
        );
      }
    }

    /**
     * Lookup for a single CustomMetric.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.customMetrics.get({
     *     // Required. The name of the CustomMetric to get. Example format: properties/1234/customMetrics/5678
     *     name: 'properties/my-propertie/customMetrics/my-customMetric',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "measurementUnit": "my_measurementUnit",
     *   //   "name": "my_name",
     *   //   "parameterName": "my_parameterName",
     *   //   "restrictedMetricType": [],
     *   //   "scope": "my_scope"
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
      params: Params$Resource$Properties$Custommetrics$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Properties$Custommetrics$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>;
    get(
      params: Params$Resource$Properties$Custommetrics$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Properties$Custommetrics$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>
    ): void;
    get(
      params: Params$Resource$Properties$Custommetrics$Get,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Properties$Custommetrics$Get
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Custommetrics$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Custommetrics$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>(
          parameters
        );
      }
    }

    /**
     * Lists CustomMetrics on a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.customMetrics.list({
     *     // The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListCustomMetrics` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCustomMetrics` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. Example format: properties/1234
     *     parent: 'properties/my-propertie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "customMetrics": [],
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
      params: Params$Resource$Properties$Custommetrics$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Properties$Custommetrics$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListCustomMetricsResponse>;
    list(
      params: Params$Resource$Properties$Custommetrics$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Properties$Custommetrics$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListCustomMetricsResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListCustomMetricsResponse>
    ): void;
    list(
      params: Params$Resource$Properties$Custommetrics$List,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListCustomMetricsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListCustomMetricsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Properties$Custommetrics$List
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListCustomMetricsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListCustomMetricsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListCustomMetricsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListCustomMetricsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Custommetrics$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Custommetrics$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/customMetrics').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListCustomMetricsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListCustomMetricsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a CustomMetric on a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.customMetrics.patch({
     *     // Output only. Resource name for this CustomMetric resource. Format: properties/{property\}/customMetrics/{customMetric\}
     *     name: 'properties/my-propertie/customMetrics/my-customMetric',
     *     // Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "measurementUnit": "my_measurementUnit",
     *       //   "name": "my_name",
     *       //   "parameterName": "my_parameterName",
     *       //   "restrictedMetricType": [],
     *       //   "scope": "my_scope"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "measurementUnit": "my_measurementUnit",
     *   //   "name": "my_name",
     *   //   "parameterName": "my_parameterName",
     *   //   "restrictedMetricType": [],
     *   //   "scope": "my_scope"
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
      params: Params$Resource$Properties$Custommetrics$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Properties$Custommetrics$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>;
    patch(
      params: Params$Resource$Properties$Custommetrics$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Properties$Custommetrics$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>
    ): void;
    patch(
      params: Params$Resource$Properties$Custommetrics$Patch,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Properties$Custommetrics$Patch
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Custommetrics$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Custommetrics$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Properties$Custommetrics$Archive
    extends StandardParameters {
    /**
     * Required. The name of the CustomMetric to archive. Example format: properties/1234/customMetrics/5678
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaArchiveCustomMetricRequest;
  }
  export interface Params$Resource$Properties$Custommetrics$Create
    extends StandardParameters {
    /**
     * Required. Example format: properties/1234
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaCustomMetric;
  }
  export interface Params$Resource$Properties$Custommetrics$Get
    extends StandardParameters {
    /**
     * Required. The name of the CustomMetric to get. Example format: properties/1234/customMetrics/5678
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Custommetrics$List
    extends StandardParameters {
    /**
     * The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListCustomMetrics` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCustomMetrics` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Example format: properties/1234
     */
    parent?: string;
  }
  export interface Params$Resource$Properties$Custommetrics$Patch
    extends StandardParameters {
    /**
     * Output only. Resource name for this CustomMetric resource. Format: properties/{property\}/customMetrics/{customMetric\}
     */
    name?: string;
    /**
     * Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaCustomMetric;
  }

  export class Resource$Properties$Datastreams {
    context: APIRequestContext;
    eventCreateRules: Resource$Properties$Datastreams$Eventcreaterules;
    measurementProtocolSecrets: Resource$Properties$Datastreams$Measurementprotocolsecrets;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.eventCreateRules =
        new Resource$Properties$Datastreams$Eventcreaterules(this.context);
      this.measurementProtocolSecrets =
        new Resource$Properties$Datastreams$Measurementprotocolsecrets(
          this.context
        );
    }

    /**
     * Creates a DataStream.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.dataStreams.create({
     *     // Required. Example format: properties/1234
     *     parent: 'properties/my-propertie',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "androidAppStreamData": {},
     *       //   "createTime": "my_createTime",
     *       //   "displayName": "my_displayName",
     *       //   "iosAppStreamData": {},
     *       //   "name": "my_name",
     *       //   "type": "my_type",
     *       //   "updateTime": "my_updateTime",
     *       //   "webStreamData": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "androidAppStreamData": {},
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "iosAppStreamData": {},
     *   //   "name": "my_name",
     *   //   "type": "my_type",
     *   //   "updateTime": "my_updateTime",
     *   //   "webStreamData": {}
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
      params: Params$Resource$Properties$Datastreams$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Properties$Datastreams$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaDataStream>;
    create(
      params: Params$Resource$Properties$Datastreams$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Properties$Datastreams$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDataStream>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDataStream>
    ): void;
    create(
      params: Params$Resource$Properties$Datastreams$Create,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDataStream>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDataStream>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Properties$Datastreams$Create
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDataStream>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDataStream>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDataStream>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaDataStream>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Datastreams$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Datastreams$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/dataStreams').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaDataStream>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaDataStream>(
          parameters
        );
      }
    }

    /**
     * Deletes a DataStream on a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.dataStreams.delete({
     *     // Required. The name of the DataStream to delete. Example format: properties/1234/dataStreams/5678
     *     name: 'properties/my-propertie/dataStreams/my-dataStream',
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
      params: Params$Resource$Properties$Datastreams$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Properties$Datastreams$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Properties$Datastreams$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Properties$Datastreams$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Properties$Datastreams$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Properties$Datastreams$Delete
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
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Datastreams$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Datastreams$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Lookup for a single DataStream.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.dataStreams.get({
     *     // Required. The name of the DataStream to get. Example format: properties/1234/dataStreams/5678
     *     name: 'properties/my-propertie/dataStreams/my-dataStream',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "androidAppStreamData": {},
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "iosAppStreamData": {},
     *   //   "name": "my_name",
     *   //   "type": "my_type",
     *   //   "updateTime": "my_updateTime",
     *   //   "webStreamData": {}
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
      params: Params$Resource$Properties$Datastreams$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Properties$Datastreams$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaDataStream>;
    get(
      params: Params$Resource$Properties$Datastreams$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Properties$Datastreams$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDataStream>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDataStream>
    ): void;
    get(
      params: Params$Resource$Properties$Datastreams$Get,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDataStream>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDataStream>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Properties$Datastreams$Get
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDataStream>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDataStream>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDataStream>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaDataStream>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Datastreams$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Datastreams$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaDataStream>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaDataStream>(
          parameters
        );
      }
    }

    /**
     * Returns the enhanced measurement settings for this data stream. Note that the stream must enable enhanced measurement for these settings to take effect.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.dataStreams.getEnhancedMeasurementSettings({
     *       // Required. The name of the settings to lookup. Format: properties/{property\}/dataStreams/{data_stream\}/enhancedMeasurementSettings Example: "properties/1000/dataStreams/2000/enhancedMeasurementSettings"
     *       name: 'properties/my-propertie/dataStreams/my-dataStream/enhancedMeasurementSettings',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "fileDownloadsEnabled": false,
     *   //   "formInteractionsEnabled": false,
     *   //   "name": "my_name",
     *   //   "outboundClicksEnabled": false,
     *   //   "pageChangesEnabled": false,
     *   //   "scrollsEnabled": false,
     *   //   "searchQueryParameter": "my_searchQueryParameter",
     *   //   "siteSearchEnabled": false,
     *   //   "streamEnabled": false,
     *   //   "uriQueryParameter": "my_uriQueryParameter",
     *   //   "videoEngagementEnabled": false
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
    getEnhancedMeasurementSettings(
      params: Params$Resource$Properties$Datastreams$Getenhancedmeasurementsettings,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getEnhancedMeasurementSettings(
      params?: Params$Resource$Properties$Datastreams$Getenhancedmeasurementsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings>;
    getEnhancedMeasurementSettings(
      params: Params$Resource$Properties$Datastreams$Getenhancedmeasurementsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getEnhancedMeasurementSettings(
      params: Params$Resource$Properties$Datastreams$Getenhancedmeasurementsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings>
    ): void;
    getEnhancedMeasurementSettings(
      params: Params$Resource$Properties$Datastreams$Getenhancedmeasurementsettings,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings>
    ): void;
    getEnhancedMeasurementSettings(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings>
    ): void;
    getEnhancedMeasurementSettings(
      paramsOrCallback?:
        | Params$Resource$Properties$Datastreams$Getenhancedmeasurementsettings
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Datastreams$Getenhancedmeasurementsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Datastreams$Getenhancedmeasurementsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings>(
          parameters
        );
      }
    }

    /**
     * Returns the Site Tag for the specified web stream. Site Tags are immutable singletons.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.dataStreams.getGlobalSiteTag({
     *     // Required. The name of the site tag to lookup. Note that site tags are singletons and do not have unique IDs. Format: properties/{property_id\}/dataStreams/{stream_id\}/globalSiteTag Example: "properties/123/dataStreams/456/globalSiteTag"
     *     name: 'properties/my-propertie/dataStreams/my-dataStream/globalSiteTag',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "snippet": "my_snippet"
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
    getGlobalSiteTag(
      params: Params$Resource$Properties$Datastreams$Getglobalsitetag,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getGlobalSiteTag(
      params?: Params$Resource$Properties$Datastreams$Getglobalsitetag,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaGlobalSiteTag>;
    getGlobalSiteTag(
      params: Params$Resource$Properties$Datastreams$Getglobalsitetag,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getGlobalSiteTag(
      params: Params$Resource$Properties$Datastreams$Getglobalsitetag,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGlobalSiteTag>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGlobalSiteTag>
    ): void;
    getGlobalSiteTag(
      params: Params$Resource$Properties$Datastreams$Getglobalsitetag,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGlobalSiteTag>
    ): void;
    getGlobalSiteTag(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGlobalSiteTag>
    ): void;
    getGlobalSiteTag(
      paramsOrCallback?:
        | Params$Resource$Properties$Datastreams$Getglobalsitetag
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGlobalSiteTag>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGlobalSiteTag>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGlobalSiteTag>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaGlobalSiteTag>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Datastreams$Getglobalsitetag;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Datastreams$Getglobalsitetag;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaGlobalSiteTag>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaGlobalSiteTag>(
          parameters
        );
      }
    }

    /**
     * Lists DataStreams on a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.dataStreams.list({
     *     // The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListDataStreams` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDataStreams` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. Example format: properties/1234
     *     parent: 'properties/my-propertie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dataStreams": [],
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
      params: Params$Resource$Properties$Datastreams$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Properties$Datastreams$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListDataStreamsResponse>;
    list(
      params: Params$Resource$Properties$Datastreams$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Properties$Datastreams$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListDataStreamsResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListDataStreamsResponse>
    ): void;
    list(
      params: Params$Resource$Properties$Datastreams$List,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListDataStreamsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListDataStreamsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Properties$Datastreams$List
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListDataStreamsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListDataStreamsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListDataStreamsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListDataStreamsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Datastreams$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Datastreams$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/dataStreams').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListDataStreamsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListDataStreamsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a DataStream on a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.dataStreams.patch({
     *     // Output only. Resource name of this Data Stream. Format: properties/{property_id\}/dataStreams/{stream_id\} Example: "properties/1000/dataStreams/2000"
     *     name: 'properties/my-propertie/dataStreams/my-dataStream',
     *     // Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "androidAppStreamData": {},
     *       //   "createTime": "my_createTime",
     *       //   "displayName": "my_displayName",
     *       //   "iosAppStreamData": {},
     *       //   "name": "my_name",
     *       //   "type": "my_type",
     *       //   "updateTime": "my_updateTime",
     *       //   "webStreamData": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "androidAppStreamData": {},
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "iosAppStreamData": {},
     *   //   "name": "my_name",
     *   //   "type": "my_type",
     *   //   "updateTime": "my_updateTime",
     *   //   "webStreamData": {}
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
      params: Params$Resource$Properties$Datastreams$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Properties$Datastreams$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaDataStream>;
    patch(
      params: Params$Resource$Properties$Datastreams$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Properties$Datastreams$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDataStream>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDataStream>
    ): void;
    patch(
      params: Params$Resource$Properties$Datastreams$Patch,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDataStream>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDataStream>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Properties$Datastreams$Patch
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDataStream>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDataStream>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDataStream>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaDataStream>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Datastreams$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Datastreams$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaDataStream>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaDataStream>(
          parameters
        );
      }
    }

    /**
     * Updates the enhanced measurement settings for this data stream. Note that the stream must enable enhanced measurement for these settings to take effect.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.dataStreams.updateEnhancedMeasurementSettings(
     *       {
     *         // Output only. Resource name of the Enhanced Measurement Settings. Format: properties/{property_id\}/dataStreams/{data_stream\}/enhancedMeasurementSettings Example: "properties/1000/dataStreams/2000/enhancedMeasurementSettings"
     *         name: 'properties/my-propertie/dataStreams/my-dataStream/enhancedMeasurementSettings',
     *         // Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     *         updateMask: 'placeholder-value',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "fileDownloadsEnabled": false,
     *           //   "formInteractionsEnabled": false,
     *           //   "name": "my_name",
     *           //   "outboundClicksEnabled": false,
     *           //   "pageChangesEnabled": false,
     *           //   "scrollsEnabled": false,
     *           //   "searchQueryParameter": "my_searchQueryParameter",
     *           //   "siteSearchEnabled": false,
     *           //   "streamEnabled": false,
     *           //   "uriQueryParameter": "my_uriQueryParameter",
     *           //   "videoEngagementEnabled": false
     *           // }
     *         },
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "fileDownloadsEnabled": false,
     *   //   "formInteractionsEnabled": false,
     *   //   "name": "my_name",
     *   //   "outboundClicksEnabled": false,
     *   //   "pageChangesEnabled": false,
     *   //   "scrollsEnabled": false,
     *   //   "searchQueryParameter": "my_searchQueryParameter",
     *   //   "siteSearchEnabled": false,
     *   //   "streamEnabled": false,
     *   //   "uriQueryParameter": "my_uriQueryParameter",
     *   //   "videoEngagementEnabled": false
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
    updateEnhancedMeasurementSettings(
      params: Params$Resource$Properties$Datastreams$Updateenhancedmeasurementsettings,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateEnhancedMeasurementSettings(
      params?: Params$Resource$Properties$Datastreams$Updateenhancedmeasurementsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings>;
    updateEnhancedMeasurementSettings(
      params: Params$Resource$Properties$Datastreams$Updateenhancedmeasurementsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateEnhancedMeasurementSettings(
      params: Params$Resource$Properties$Datastreams$Updateenhancedmeasurementsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings>
    ): void;
    updateEnhancedMeasurementSettings(
      params: Params$Resource$Properties$Datastreams$Updateenhancedmeasurementsettings,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings>
    ): void;
    updateEnhancedMeasurementSettings(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings>
    ): void;
    updateEnhancedMeasurementSettings(
      paramsOrCallback?:
        | Params$Resource$Properties$Datastreams$Updateenhancedmeasurementsettings
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Datastreams$Updateenhancedmeasurementsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Datastreams$Updateenhancedmeasurementsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Properties$Datastreams$Create
    extends StandardParameters {
    /**
     * Required. Example format: properties/1234
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaDataStream;
  }
  export interface Params$Resource$Properties$Datastreams$Delete
    extends StandardParameters {
    /**
     * Required. The name of the DataStream to delete. Example format: properties/1234/dataStreams/5678
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Datastreams$Get
    extends StandardParameters {
    /**
     * Required. The name of the DataStream to get. Example format: properties/1234/dataStreams/5678
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Datastreams$Getenhancedmeasurementsettings
    extends StandardParameters {
    /**
     * Required. The name of the settings to lookup. Format: properties/{property\}/dataStreams/{data_stream\}/enhancedMeasurementSettings Example: "properties/1000/dataStreams/2000/enhancedMeasurementSettings"
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Datastreams$Getglobalsitetag
    extends StandardParameters {
    /**
     * Required. The name of the site tag to lookup. Note that site tags are singletons and do not have unique IDs. Format: properties/{property_id\}/dataStreams/{stream_id\}/globalSiteTag Example: "properties/123/dataStreams/456/globalSiteTag"
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Datastreams$List
    extends StandardParameters {
    /**
     * The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListDataStreams` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDataStreams` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Example format: properties/1234
     */
    parent?: string;
  }
  export interface Params$Resource$Properties$Datastreams$Patch
    extends StandardParameters {
    /**
     * Output only. Resource name of this Data Stream. Format: properties/{property_id\}/dataStreams/{stream_id\} Example: "properties/1000/dataStreams/2000"
     */
    name?: string;
    /**
     * Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaDataStream;
  }
  export interface Params$Resource$Properties$Datastreams$Updateenhancedmeasurementsettings
    extends StandardParameters {
    /**
     * Output only. Resource name of the Enhanced Measurement Settings. Format: properties/{property_id\}/dataStreams/{data_stream\}/enhancedMeasurementSettings Example: "properties/1000/dataStreams/2000/enhancedMeasurementSettings"
     */
    name?: string;
    /**
     * Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings;
  }

  export class Resource$Properties$Datastreams$Eventcreaterules {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates an EventCreateRule.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.dataStreams.eventCreateRules.create({
     *       // Required. Example format: properties/123/dataStreams/456
     *       parent: 'properties/my-propertie/dataStreams/my-dataStream',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "destinationEvent": "my_destinationEvent",
     *         //   "eventConditions": [],
     *         //   "name": "my_name",
     *         //   "parameterMutations": [],
     *         //   "sourceCopyParameters": false
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "destinationEvent": "my_destinationEvent",
     *   //   "eventConditions": [],
     *   //   "name": "my_name",
     *   //   "parameterMutations": [],
     *   //   "sourceCopyParameters": false
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
      params: Params$Resource$Properties$Datastreams$Eventcreaterules$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Properties$Datastreams$Eventcreaterules$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaEventCreateRule>;
    create(
      params: Params$Resource$Properties$Datastreams$Eventcreaterules$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Properties$Datastreams$Eventcreaterules$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaEventCreateRule>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaEventCreateRule>
    ): void;
    create(
      params: Params$Resource$Properties$Datastreams$Eventcreaterules$Create,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaEventCreateRule>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaEventCreateRule>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Properties$Datastreams$Eventcreaterules$Create
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaEventCreateRule>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaEventCreateRule>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaEventCreateRule>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaEventCreateRule>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Datastreams$Eventcreaterules$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Datastreams$Eventcreaterules$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/eventCreateRules').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaEventCreateRule>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaEventCreateRule>(
          parameters
        );
      }
    }

    /**
     * Deletes an EventCreateRule.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.dataStreams.eventCreateRules.delete({
     *       // Required. Example format: properties/123/dataStreams/456/eventCreateRules/789
     *       name: 'properties/my-propertie/dataStreams/my-dataStream/eventCreateRules/my-eventCreateRule',
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
      params: Params$Resource$Properties$Datastreams$Eventcreaterules$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Properties$Datastreams$Eventcreaterules$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Properties$Datastreams$Eventcreaterules$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Properties$Datastreams$Eventcreaterules$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Properties$Datastreams$Eventcreaterules$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Properties$Datastreams$Eventcreaterules$Delete
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
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Datastreams$Eventcreaterules$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Datastreams$Eventcreaterules$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Lookup for a single EventCreateRule.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.dataStreams.eventCreateRules.get({
     *     // Required. The name of the EventCreateRule to get. Example format: properties/123/dataStreams/456/eventCreateRules/789
     *     name: 'properties/my-propertie/dataStreams/my-dataStream/eventCreateRules/my-eventCreateRule',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "destinationEvent": "my_destinationEvent",
     *   //   "eventConditions": [],
     *   //   "name": "my_name",
     *   //   "parameterMutations": [],
     *   //   "sourceCopyParameters": false
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
      params: Params$Resource$Properties$Datastreams$Eventcreaterules$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Properties$Datastreams$Eventcreaterules$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaEventCreateRule>;
    get(
      params: Params$Resource$Properties$Datastreams$Eventcreaterules$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Properties$Datastreams$Eventcreaterules$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaEventCreateRule>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaEventCreateRule>
    ): void;
    get(
      params: Params$Resource$Properties$Datastreams$Eventcreaterules$Get,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaEventCreateRule>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaEventCreateRule>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Properties$Datastreams$Eventcreaterules$Get
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaEventCreateRule>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaEventCreateRule>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaEventCreateRule>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaEventCreateRule>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Datastreams$Eventcreaterules$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Datastreams$Eventcreaterules$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaEventCreateRule>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaEventCreateRule>(
          parameters
        );
      }
    }

    /**
     * Lists EventCreateRules on a web data stream.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.dataStreams.eventCreateRules.list(
     *     {
     *       // The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     *       pageSize: 'placeholder-value',
     *       // A page token, received from a previous `ListEventCreateRules` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListEventCreateRules` must match the call that provided the page token.
     *       pageToken: 'placeholder-value',
     *       // Required. Example format: properties/123/dataStreams/456
     *       parent: 'properties/my-propertie/dataStreams/my-dataStream',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "eventCreateRules": [],
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
      params: Params$Resource$Properties$Datastreams$Eventcreaterules$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Properties$Datastreams$Eventcreaterules$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListEventCreateRulesResponse>;
    list(
      params: Params$Resource$Properties$Datastreams$Eventcreaterules$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Properties$Datastreams$Eventcreaterules$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListEventCreateRulesResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListEventCreateRulesResponse>
    ): void;
    list(
      params: Params$Resource$Properties$Datastreams$Eventcreaterules$List,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListEventCreateRulesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListEventCreateRulesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Properties$Datastreams$Eventcreaterules$List
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListEventCreateRulesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListEventCreateRulesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListEventCreateRulesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListEventCreateRulesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Datastreams$Eventcreaterules$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Datastreams$Eventcreaterules$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/eventCreateRules').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListEventCreateRulesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListEventCreateRulesResponse>(
          parameters
        );
      }
    }

    /**
     * Updates an EventCreateRule.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.dataStreams.eventCreateRules.patch({
     *       // Output only. Resource name for this EventCreateRule resource. Format: properties/{property\}/dataStreams/{data_stream\}/eventCreateRules/{event_create_rule\}
     *       name: 'properties/my-propertie/dataStreams/my-dataStream/eventCreateRules/my-eventCreateRule',
     *       // Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "destinationEvent": "my_destinationEvent",
     *         //   "eventConditions": [],
     *         //   "name": "my_name",
     *         //   "parameterMutations": [],
     *         //   "sourceCopyParameters": false
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "destinationEvent": "my_destinationEvent",
     *   //   "eventConditions": [],
     *   //   "name": "my_name",
     *   //   "parameterMutations": [],
     *   //   "sourceCopyParameters": false
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
      params: Params$Resource$Properties$Datastreams$Eventcreaterules$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Properties$Datastreams$Eventcreaterules$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaEventCreateRule>;
    patch(
      params: Params$Resource$Properties$Datastreams$Eventcreaterules$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Properties$Datastreams$Eventcreaterules$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaEventCreateRule>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaEventCreateRule>
    ): void;
    patch(
      params: Params$Resource$Properties$Datastreams$Eventcreaterules$Patch,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaEventCreateRule>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaEventCreateRule>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Properties$Datastreams$Eventcreaterules$Patch
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaEventCreateRule>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaEventCreateRule>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaEventCreateRule>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaEventCreateRule>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Datastreams$Eventcreaterules$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Datastreams$Eventcreaterules$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaEventCreateRule>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaEventCreateRule>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Properties$Datastreams$Eventcreaterules$Create
    extends StandardParameters {
    /**
     * Required. Example format: properties/123/dataStreams/456
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaEventCreateRule;
  }
  export interface Params$Resource$Properties$Datastreams$Eventcreaterules$Delete
    extends StandardParameters {
    /**
     * Required. Example format: properties/123/dataStreams/456/eventCreateRules/789
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Datastreams$Eventcreaterules$Get
    extends StandardParameters {
    /**
     * Required. The name of the EventCreateRule to get. Example format: properties/123/dataStreams/456/eventCreateRules/789
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Datastreams$Eventcreaterules$List
    extends StandardParameters {
    /**
     * The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListEventCreateRules` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListEventCreateRules` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Example format: properties/123/dataStreams/456
     */
    parent?: string;
  }
  export interface Params$Resource$Properties$Datastreams$Eventcreaterules$Patch
    extends StandardParameters {
    /**
     * Output only. Resource name for this EventCreateRule resource. Format: properties/{property\}/dataStreams/{data_stream\}/eventCreateRules/{event_create_rule\}
     */
    name?: string;
    /**
     * Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaEventCreateRule;
  }

  export class Resource$Properties$Datastreams$Measurementprotocolsecrets {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a measurement protocol secret.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.dataStreams.measurementProtocolSecrets.create(
     *       {
     *         // Required. The parent resource where this secret will be created. Format: properties/{property\}/dataStreams/{dataStream\}
     *         parent: 'properties/my-propertie/dataStreams/my-dataStream',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "displayName": "my_displayName",
     *           //   "name": "my_name",
     *           //   "secretValue": "my_secretValue"
     *           // }
     *         },
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "secretValue": "my_secretValue"
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
      params: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>;
    create(
      params: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
    ): void;
    create(
      params: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Create,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Create
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1alpha/{+parent}/measurementProtocolSecrets'
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>(
          parameters
        );
      }
    }

    /**
     * Deletes target MeasurementProtocolSecret.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.dataStreams.measurementProtocolSecrets.delete(
     *       {
     *         // Required. The name of the MeasurementProtocolSecret to delete. Format: properties/{property\}/dataStreams/{dataStream\}/measurementProtocolSecrets/{measurementProtocolSecret\}
     *         name: 'properties/my-propertie/dataStreams/my-dataStream/measurementProtocolSecrets/my-measurementProtocolSecret',
     *       }
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
    delete(
      params: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Delete
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
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Lookup for a single "GA4" MeasurementProtocolSecret.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.dataStreams.measurementProtocolSecrets.get({
     *       // Required. The name of the measurement protocol secret to lookup. Format: properties/{property\}/dataStreams/{dataStream\}/measurementProtocolSecrets/{measurementProtocolSecret\}
     *       name: 'properties/my-propertie/dataStreams/my-dataStream/measurementProtocolSecrets/my-measurementProtocolSecret',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "secretValue": "my_secretValue"
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
      params: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>;
    get(
      params: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
    ): void;
    get(
      params: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Get,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Get
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>(
          parameters
        );
      }
    }

    /**
     * Returns child MeasurementProtocolSecrets under the specified parent Property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.dataStreams.measurementProtocolSecrets.list(
     *       {
     *         // The maximum number of resources to return. If unspecified, at most 10 resources will be returned. The maximum value is 10. Higher values will be coerced to the maximum.
     *         pageSize: 'placeholder-value',
     *         // A page token, received from a previous `ListMeasurementProtocolSecrets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMeasurementProtocolSecrets` must match the call that provided the page token.
     *         pageToken: 'placeholder-value',
     *         // Required. The resource name of the parent stream. Format: properties/{property\}/dataStreams/{dataStream\}/measurementProtocolSecrets
     *         parent: 'properties/my-propertie/dataStreams/my-dataStream',
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "measurementProtocolSecrets": [],
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
      params: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse>;
    list(
      params: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse>
    ): void;
    list(
      params: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$List,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$List
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1alpha/{+parent}/measurementProtocolSecrets'
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a measurement protocol secret.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.dataStreams.measurementProtocolSecrets.patch(
     *       {
     *         // Output only. Resource name of this secret. This secret may be a child of any type of stream. Format: properties/{property\}/dataStreams/{dataStream\}/measurementProtocolSecrets/{measurementProtocolSecret\}
     *         name: 'properties/my-propertie/dataStreams/my-dataStream/measurementProtocolSecrets/my-measurementProtocolSecret',
     *         // Required. The list of fields to be updated. Omitted fields will not be updated.
     *         updateMask: 'placeholder-value',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "displayName": "my_displayName",
     *           //   "name": "my_name",
     *           //   "secretValue": "my_secretValue"
     *           // }
     *         },
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "secretValue": "my_secretValue"
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
      params: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>;
    patch(
      params: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
    ): void;
    patch(
      params: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Patch,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Patch
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Create
    extends StandardParameters {
    /**
     * Required. The parent resource where this secret will be created. Format: properties/{property\}/dataStreams/{dataStream\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret;
  }
  export interface Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Delete
    extends StandardParameters {
    /**
     * Required. The name of the MeasurementProtocolSecret to delete. Format: properties/{property\}/dataStreams/{dataStream\}/measurementProtocolSecrets/{measurementProtocolSecret\}
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Get
    extends StandardParameters {
    /**
     * Required. The name of the measurement protocol secret to lookup. Format: properties/{property\}/dataStreams/{dataStream\}/measurementProtocolSecrets/{measurementProtocolSecret\}
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$List
    extends StandardParameters {
    /**
     * The maximum number of resources to return. If unspecified, at most 10 resources will be returned. The maximum value is 10. Higher values will be coerced to the maximum.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListMeasurementProtocolSecrets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMeasurementProtocolSecrets` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the parent stream. Format: properties/{property\}/dataStreams/{dataStream\}/measurementProtocolSecrets
     */
    parent?: string;
  }
  export interface Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Patch
    extends StandardParameters {
    /**
     * Output only. Resource name of this secret. This secret may be a child of any type of stream. Format: properties/{property\}/dataStreams/{dataStream\}/measurementProtocolSecrets/{measurementProtocolSecret\}
     */
    name?: string;
    /**
     * Required. The list of fields to be updated. Omitted fields will not be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret;
  }

  export class Resource$Properties$Displayvideo360advertiserlinkproposals {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Approves a DisplayVideo360AdvertiserLinkProposal. The DisplayVideo360AdvertiserLinkProposal will be deleted and a new DisplayVideo360AdvertiserLink will be created.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.displayVideo360AdvertiserLinkProposals.approve(
     *       {
     *         // Required. The name of the DisplayVideo360AdvertiserLinkProposal to approve. Example format: properties/1234/displayVideo360AdvertiserLinkProposals/5678
     *         name: 'properties/my-propertie/displayVideo360AdvertiserLinkProposals/my-displayVideo360AdvertiserLinkProposal',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {}
     *         },
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayVideo360AdvertiserLink": {}
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
      params: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Approve,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    approve(
      params?: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Approve,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalResponse>;
    approve(
      params: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Approve,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    approve(
      params: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Approve,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalResponse>
    ): void;
    approve(
      params: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Approve,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalResponse>
    ): void;
    approve(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalResponse>
    ): void;
    approve(
      paramsOrCallback?:
        | Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Approve
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Approve;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Approve;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}:approve').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalResponse>(
          parameters
        );
      }
    }

    /**
     * Cancels a DisplayVideo360AdvertiserLinkProposal. Cancelling can mean either: - Declining a proposal initiated from Display & Video 360 - Withdrawing a proposal initiated from Google Analytics After being cancelled, a proposal will eventually be deleted automatically.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.displayVideo360AdvertiserLinkProposals.cancel(
     *       {
     *         // Required. The name of the DisplayVideo360AdvertiserLinkProposal to cancel. Example format: properties/1234/displayVideo360AdvertiserLinkProposals/5678
     *         name: 'properties/my-propertie/displayVideo360AdvertiserLinkProposals/my-displayVideo360AdvertiserLinkProposal',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {}
     *         },
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adsPersonalizationEnabled": false,
     *   //   "advertiserDisplayName": "my_advertiserDisplayName",
     *   //   "advertiserId": "my_advertiserId",
     *   //   "campaignDataSharingEnabled": false,
     *   //   "costDataSharingEnabled": false,
     *   //   "linkProposalStatusDetails": {},
     *   //   "name": "my_name",
     *   //   "validationEmail": "my_validationEmail"
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
    cancel(
      params: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>;
    cancel(
      params: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Cancel,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>
    ): void;
    cancel(
      params: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Cancel,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>
    ): void;
    cancel(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>
    ): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Cancel
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}:cancel').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>(
          parameters
        );
      }
    }

    /**
     * Creates a DisplayVideo360AdvertiserLinkProposal.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.displayVideo360AdvertiserLinkProposals.create(
     *       {
     *         // Required. Example format: properties/1234
     *         parent: 'properties/my-propertie',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "adsPersonalizationEnabled": false,
     *           //   "advertiserDisplayName": "my_advertiserDisplayName",
     *           //   "advertiserId": "my_advertiserId",
     *           //   "campaignDataSharingEnabled": false,
     *           //   "costDataSharingEnabled": false,
     *           //   "linkProposalStatusDetails": {},
     *           //   "name": "my_name",
     *           //   "validationEmail": "my_validationEmail"
     *           // }
     *         },
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adsPersonalizationEnabled": false,
     *   //   "advertiserDisplayName": "my_advertiserDisplayName",
     *   //   "advertiserId": "my_advertiserId",
     *   //   "campaignDataSharingEnabled": false,
     *   //   "costDataSharingEnabled": false,
     *   //   "linkProposalStatusDetails": {},
     *   //   "name": "my_name",
     *   //   "validationEmail": "my_validationEmail"
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
      params: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>;
    create(
      params: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>
    ): void;
    create(
      params: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Create,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Create
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1alpha/{+parent}/displayVideo360AdvertiserLinkProposals'
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>(
          parameters
        );
      }
    }

    /**
     * Deletes a DisplayVideo360AdvertiserLinkProposal on a property. This can only be used on cancelled proposals.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.displayVideo360AdvertiserLinkProposals.delete(
     *       {
     *         // Required. The name of the DisplayVideo360AdvertiserLinkProposal to delete. Example format: properties/1234/displayVideo360AdvertiserLinkProposals/5678
     *         name: 'properties/my-propertie/displayVideo360AdvertiserLinkProposals/my-displayVideo360AdvertiserLinkProposal',
     *       }
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
    delete(
      params: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Delete
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
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Lookup for a single DisplayVideo360AdvertiserLinkProposal.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.displayVideo360AdvertiserLinkProposals.get({
     *       // Required. The name of the DisplayVideo360AdvertiserLinkProposal to get. Example format: properties/1234/displayVideo360AdvertiserLinkProposals/5678
     *       name: 'properties/my-propertie/displayVideo360AdvertiserLinkProposals/my-displayVideo360AdvertiserLinkProposal',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adsPersonalizationEnabled": false,
     *   //   "advertiserDisplayName": "my_advertiserDisplayName",
     *   //   "advertiserId": "my_advertiserId",
     *   //   "campaignDataSharingEnabled": false,
     *   //   "costDataSharingEnabled": false,
     *   //   "linkProposalStatusDetails": {},
     *   //   "name": "my_name",
     *   //   "validationEmail": "my_validationEmail"
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
      params: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>;
    get(
      params: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>
    ): void;
    get(
      params: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Get,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Get
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>(
          parameters
        );
      }
    }

    /**
     * Lists DisplayVideo360AdvertiserLinkProposals on a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.displayVideo360AdvertiserLinkProposals.list(
     *       {
     *         // The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     *         pageSize: 'placeholder-value',
     *         // A page token, received from a previous `ListDisplayVideo360AdvertiserLinkProposals` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDisplayVideo360AdvertiserLinkProposals` must match the call that provided the page token.
     *         pageToken: 'placeholder-value',
     *         // Required. Example format: properties/1234
     *         parent: 'properties/my-propertie',
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayVideo360AdvertiserLinkProposals": [],
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
      params: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse>;
    list(
      params: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse>
    ): void;
    list(
      params: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$List,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Properties$Displayvideo360advertiserlinkproposals$List
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Displayvideo360advertiserlinkproposals$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Displayvideo360advertiserlinkproposals$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1alpha/{+parent}/displayVideo360AdvertiserLinkProposals'
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Approve
    extends StandardParameters {
    /**
     * Required. The name of the DisplayVideo360AdvertiserLinkProposal to approve. Example format: properties/1234/displayVideo360AdvertiserLinkProposals/5678
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalRequest;
  }
  export interface Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Cancel
    extends StandardParameters {
    /**
     * Required. The name of the DisplayVideo360AdvertiserLinkProposal to cancel. Example format: properties/1234/displayVideo360AdvertiserLinkProposals/5678
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaCancelDisplayVideo360AdvertiserLinkProposalRequest;
  }
  export interface Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Create
    extends StandardParameters {
    /**
     * Required. Example format: properties/1234
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal;
  }
  export interface Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Delete
    extends StandardParameters {
    /**
     * Required. The name of the DisplayVideo360AdvertiserLinkProposal to delete. Example format: properties/1234/displayVideo360AdvertiserLinkProposals/5678
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Get
    extends StandardParameters {
    /**
     * Required. The name of the DisplayVideo360AdvertiserLinkProposal to get. Example format: properties/1234/displayVideo360AdvertiserLinkProposals/5678
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Displayvideo360advertiserlinkproposals$List
    extends StandardParameters {
    /**
     * The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListDisplayVideo360AdvertiserLinkProposals` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDisplayVideo360AdvertiserLinkProposals` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Example format: properties/1234
     */
    parent?: string;
  }

  export class Resource$Properties$Displayvideo360advertiserlinks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a DisplayVideo360AdvertiserLink. This can only be utilized by users who have proper authorization both on the Google Analytics property and on the Display & Video 360 advertiser. Users who do not have access to the Display & Video 360 advertiser should instead seek to create a DisplayVideo360LinkProposal.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.displayVideo360AdvertiserLinks.create({
     *       // Required. Example format: properties/1234
     *       parent: 'properties/my-propertie',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "adsPersonalizationEnabled": false,
     *         //   "advertiserDisplayName": "my_advertiserDisplayName",
     *         //   "advertiserId": "my_advertiserId",
     *         //   "campaignDataSharingEnabled": false,
     *         //   "costDataSharingEnabled": false,
     *         //   "name": "my_name"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adsPersonalizationEnabled": false,
     *   //   "advertiserDisplayName": "my_advertiserDisplayName",
     *   //   "advertiserId": "my_advertiserId",
     *   //   "campaignDataSharingEnabled": false,
     *   //   "costDataSharingEnabled": false,
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
      params: Params$Resource$Properties$Displayvideo360advertiserlinks$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Properties$Displayvideo360advertiserlinks$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>;
    create(
      params: Params$Resource$Properties$Displayvideo360advertiserlinks$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Properties$Displayvideo360advertiserlinks$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>
    ): void;
    create(
      params: Params$Resource$Properties$Displayvideo360advertiserlinks$Create,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Properties$Displayvideo360advertiserlinks$Create
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Displayvideo360advertiserlinks$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Displayvideo360advertiserlinks$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1alpha/{+parent}/displayVideo360AdvertiserLinks'
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>(
          parameters
        );
      }
    }

    /**
     * Deletes a DisplayVideo360AdvertiserLink on a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.displayVideo360AdvertiserLinks.delete({
     *       // Required. The name of the DisplayVideo360AdvertiserLink to delete. Example format: properties/1234/displayVideo360AdvertiserLinks/5678
     *       name: 'properties/my-propertie/displayVideo360AdvertiserLinks/my-displayVideo360AdvertiserLink',
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
      params: Params$Resource$Properties$Displayvideo360advertiserlinks$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Properties$Displayvideo360advertiserlinks$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Properties$Displayvideo360advertiserlinks$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Properties$Displayvideo360advertiserlinks$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Properties$Displayvideo360advertiserlinks$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Properties$Displayvideo360advertiserlinks$Delete
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
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Displayvideo360advertiserlinks$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Displayvideo360advertiserlinks$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Look up a single DisplayVideo360AdvertiserLink
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.displayVideo360AdvertiserLinks.get({
     *       // Required. The name of the DisplayVideo360AdvertiserLink to get. Example format: properties/1234/displayVideo360AdvertiserLink/5678
     *       name: 'properties/my-propertie/displayVideo360AdvertiserLinks/my-displayVideo360AdvertiserLink',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adsPersonalizationEnabled": false,
     *   //   "advertiserDisplayName": "my_advertiserDisplayName",
     *   //   "advertiserId": "my_advertiserId",
     *   //   "campaignDataSharingEnabled": false,
     *   //   "costDataSharingEnabled": false,
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
      params: Params$Resource$Properties$Displayvideo360advertiserlinks$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Properties$Displayvideo360advertiserlinks$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>;
    get(
      params: Params$Resource$Properties$Displayvideo360advertiserlinks$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Properties$Displayvideo360advertiserlinks$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>
    ): void;
    get(
      params: Params$Resource$Properties$Displayvideo360advertiserlinks$Get,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Properties$Displayvideo360advertiserlinks$Get
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Displayvideo360advertiserlinks$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Displayvideo360advertiserlinks$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>(
          parameters
        );
      }
    }

    /**
     * Lists all DisplayVideo360AdvertiserLinks on a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.displayVideo360AdvertiserLinks.list({
     *       // The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     *       pageSize: 'placeholder-value',
     *       // A page token, received from a previous `ListDisplayVideo360AdvertiserLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDisplayVideo360AdvertiserLinks` must match the call that provided the page token.
     *       pageToken: 'placeholder-value',
     *       // Required. Example format: properties/1234
     *       parent: 'properties/my-propertie',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayVideo360AdvertiserLinks": [],
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
      params: Params$Resource$Properties$Displayvideo360advertiserlinks$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Properties$Displayvideo360advertiserlinks$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse>;
    list(
      params: Params$Resource$Properties$Displayvideo360advertiserlinks$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Properties$Displayvideo360advertiserlinks$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse>
    ): void;
    list(
      params: Params$Resource$Properties$Displayvideo360advertiserlinks$List,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Properties$Displayvideo360advertiserlinks$List
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Displayvideo360advertiserlinks$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Displayvideo360advertiserlinks$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1alpha/{+parent}/displayVideo360AdvertiserLinks'
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a DisplayVideo360AdvertiserLink on a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.displayVideo360AdvertiserLinks.patch({
     *       // Output only. The resource name for this DisplayVideo360AdvertiserLink resource. Format: properties/{propertyId\}/displayVideo360AdvertiserLinks/{linkId\} Note: linkId is not the Display & Video 360 Advertiser ID
     *       name: 'properties/my-propertie/displayVideo360AdvertiserLinks/my-displayVideo360AdvertiserLink',
     *       // Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "adsPersonalizationEnabled": false,
     *         //   "advertiserDisplayName": "my_advertiserDisplayName",
     *         //   "advertiserId": "my_advertiserId",
     *         //   "campaignDataSharingEnabled": false,
     *         //   "costDataSharingEnabled": false,
     *         //   "name": "my_name"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adsPersonalizationEnabled": false,
     *   //   "advertiserDisplayName": "my_advertiserDisplayName",
     *   //   "advertiserId": "my_advertiserId",
     *   //   "campaignDataSharingEnabled": false,
     *   //   "costDataSharingEnabled": false,
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
      params: Params$Resource$Properties$Displayvideo360advertiserlinks$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Properties$Displayvideo360advertiserlinks$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>;
    patch(
      params: Params$Resource$Properties$Displayvideo360advertiserlinks$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Properties$Displayvideo360advertiserlinks$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>
    ): void;
    patch(
      params: Params$Resource$Properties$Displayvideo360advertiserlinks$Patch,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Properties$Displayvideo360advertiserlinks$Patch
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Displayvideo360advertiserlinks$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Displayvideo360advertiserlinks$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Properties$Displayvideo360advertiserlinks$Create
    extends StandardParameters {
    /**
     * Required. Example format: properties/1234
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink;
  }
  export interface Params$Resource$Properties$Displayvideo360advertiserlinks$Delete
    extends StandardParameters {
    /**
     * Required. The name of the DisplayVideo360AdvertiserLink to delete. Example format: properties/1234/displayVideo360AdvertiserLinks/5678
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Displayvideo360advertiserlinks$Get
    extends StandardParameters {
    /**
     * Required. The name of the DisplayVideo360AdvertiserLink to get. Example format: properties/1234/displayVideo360AdvertiserLink/5678
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Displayvideo360advertiserlinks$List
    extends StandardParameters {
    /**
     * The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListDisplayVideo360AdvertiserLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDisplayVideo360AdvertiserLinks` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Example format: properties/1234
     */
    parent?: string;
  }
  export interface Params$Resource$Properties$Displayvideo360advertiserlinks$Patch
    extends StandardParameters {
    /**
     * Output only. The resource name for this DisplayVideo360AdvertiserLink resource. Format: properties/{propertyId\}/displayVideo360AdvertiserLinks/{linkId\} Note: linkId is not the Display & Video 360 Advertiser ID
     */
    name?: string;
    /**
     * Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink;
  }

  export class Resource$Properties$Expandeddatasets {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a ExpandedDataSet.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.expandedDataSets.create({
     *     // Required. Example format: properties/1234
     *     parent: 'properties/my-propertie',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "dataCollectionStartTime": "my_dataCollectionStartTime",
     *       //   "description": "my_description",
     *       //   "dimensionFilterExpression": {},
     *       //   "dimensionNames": [],
     *       //   "displayName": "my_displayName",
     *       //   "metricNames": [],
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dataCollectionStartTime": "my_dataCollectionStartTime",
     *   //   "description": "my_description",
     *   //   "dimensionFilterExpression": {},
     *   //   "dimensionNames": [],
     *   //   "displayName": "my_displayName",
     *   //   "metricNames": [],
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
      params: Params$Resource$Properties$Expandeddatasets$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Properties$Expandeddatasets$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaExpandedDataSet>;
    create(
      params: Params$Resource$Properties$Expandeddatasets$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Properties$Expandeddatasets$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaExpandedDataSet>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaExpandedDataSet>
    ): void;
    create(
      params: Params$Resource$Properties$Expandeddatasets$Create,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaExpandedDataSet>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaExpandedDataSet>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Properties$Expandeddatasets$Create
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaExpandedDataSet>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaExpandedDataSet>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaExpandedDataSet>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaExpandedDataSet>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Expandeddatasets$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Expandeddatasets$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/expandedDataSets').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaExpandedDataSet>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaExpandedDataSet>(
          parameters
        );
      }
    }

    /**
     * Deletes a ExpandedDataSet on a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.expandedDataSets.delete({
     *     // Required. Example format: properties/1234/expandedDataSets/5678
     *     name: 'properties/my-propertie/expandedDataSets/my-expandedDataSet',
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
      params: Params$Resource$Properties$Expandeddatasets$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Properties$Expandeddatasets$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Properties$Expandeddatasets$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Properties$Expandeddatasets$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Properties$Expandeddatasets$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Properties$Expandeddatasets$Delete
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
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Expandeddatasets$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Expandeddatasets$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Lookup for a single ExpandedDataSet.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.expandedDataSets.get({
     *     // Required. The name of the ExpandedDataSet to get. Example format: properties/1234/expandedDataSets/5678
     *     name: 'properties/my-propertie/expandedDataSets/my-expandedDataSet',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dataCollectionStartTime": "my_dataCollectionStartTime",
     *   //   "description": "my_description",
     *   //   "dimensionFilterExpression": {},
     *   //   "dimensionNames": [],
     *   //   "displayName": "my_displayName",
     *   //   "metricNames": [],
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
      params: Params$Resource$Properties$Expandeddatasets$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Properties$Expandeddatasets$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaExpandedDataSet>;
    get(
      params: Params$Resource$Properties$Expandeddatasets$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Properties$Expandeddatasets$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaExpandedDataSet>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaExpandedDataSet>
    ): void;
    get(
      params: Params$Resource$Properties$Expandeddatasets$Get,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaExpandedDataSet>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaExpandedDataSet>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Properties$Expandeddatasets$Get
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaExpandedDataSet>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaExpandedDataSet>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaExpandedDataSet>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaExpandedDataSet>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Expandeddatasets$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Expandeddatasets$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaExpandedDataSet>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaExpandedDataSet>(
          parameters
        );
      }
    }

    /**
     * Lists ExpandedDataSets on a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.expandedDataSets.list({
     *     // The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListExpandedDataSets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListExpandedDataSet` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. Example format: properties/1234
     *     parent: 'properties/my-propertie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "expandedDataSets": [],
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
      params: Params$Resource$Properties$Expandeddatasets$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Properties$Expandeddatasets$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListExpandedDataSetsResponse>;
    list(
      params: Params$Resource$Properties$Expandeddatasets$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Properties$Expandeddatasets$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListExpandedDataSetsResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListExpandedDataSetsResponse>
    ): void;
    list(
      params: Params$Resource$Properties$Expandeddatasets$List,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListExpandedDataSetsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListExpandedDataSetsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Properties$Expandeddatasets$List
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListExpandedDataSetsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListExpandedDataSetsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListExpandedDataSetsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListExpandedDataSetsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Expandeddatasets$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Expandeddatasets$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/expandedDataSets').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListExpandedDataSetsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListExpandedDataSetsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a ExpandedDataSet on a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.expandedDataSets.patch({
     *     // Output only. The resource name for this ExpandedDataSet resource. Format: properties/{property_id\}/expandedDataSets/{expanded_data_set\}
     *     name: 'properties/my-propertie/expandedDataSets/my-expandedDataSet',
     *     // Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "dataCollectionStartTime": "my_dataCollectionStartTime",
     *       //   "description": "my_description",
     *       //   "dimensionFilterExpression": {},
     *       //   "dimensionNames": [],
     *       //   "displayName": "my_displayName",
     *       //   "metricNames": [],
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dataCollectionStartTime": "my_dataCollectionStartTime",
     *   //   "description": "my_description",
     *   //   "dimensionFilterExpression": {},
     *   //   "dimensionNames": [],
     *   //   "displayName": "my_displayName",
     *   //   "metricNames": [],
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
      params: Params$Resource$Properties$Expandeddatasets$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Properties$Expandeddatasets$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaExpandedDataSet>;
    patch(
      params: Params$Resource$Properties$Expandeddatasets$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Properties$Expandeddatasets$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaExpandedDataSet>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaExpandedDataSet>
    ): void;
    patch(
      params: Params$Resource$Properties$Expandeddatasets$Patch,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaExpandedDataSet>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaExpandedDataSet>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Properties$Expandeddatasets$Patch
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaExpandedDataSet>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaExpandedDataSet>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaExpandedDataSet>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaExpandedDataSet>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Expandeddatasets$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Expandeddatasets$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaExpandedDataSet>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaExpandedDataSet>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Properties$Expandeddatasets$Create
    extends StandardParameters {
    /**
     * Required. Example format: properties/1234
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaExpandedDataSet;
  }
  export interface Params$Resource$Properties$Expandeddatasets$Delete
    extends StandardParameters {
    /**
     * Required. Example format: properties/1234/expandedDataSets/5678
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Expandeddatasets$Get
    extends StandardParameters {
    /**
     * Required. The name of the ExpandedDataSet to get. Example format: properties/1234/expandedDataSets/5678
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Expandeddatasets$List
    extends StandardParameters {
    /**
     * The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListExpandedDataSets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListExpandedDataSet` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Example format: properties/1234
     */
    parent?: string;
  }
  export interface Params$Resource$Properties$Expandeddatasets$Patch
    extends StandardParameters {
    /**
     * Output only. The resource name for this ExpandedDataSet resource. Format: properties/{property_id\}/expandedDataSets/{expanded_data_set\}
     */
    name?: string;
    /**
     * Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaExpandedDataSet;
  }

  export class Resource$Properties$Firebaselinks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a FirebaseLink. Properties can have at most one FirebaseLink.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.firebaseLinks.create({
     *     // Required. Format: properties/{property_id\} Example: properties/1234
     *     parent: 'properties/my-propertie',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "name": "my_name",
     *       //   "project": "my_project"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "name": "my_name",
     *   //   "project": "my_project"
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
      params: Params$Resource$Properties$Firebaselinks$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Properties$Firebaselinks$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaFirebaseLink>;
    create(
      params: Params$Resource$Properties$Firebaselinks$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Properties$Firebaselinks$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaFirebaseLink>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaFirebaseLink>
    ): void;
    create(
      params: Params$Resource$Properties$Firebaselinks$Create,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaFirebaseLink>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaFirebaseLink>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Properties$Firebaselinks$Create
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaFirebaseLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaFirebaseLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaFirebaseLink>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaFirebaseLink>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Firebaselinks$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Firebaselinks$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/firebaseLinks').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaFirebaseLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaFirebaseLink>(
          parameters
        );
      }
    }

    /**
     * Deletes a FirebaseLink on a property
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.firebaseLinks.delete({
     *     // Required. Format: properties/{property_id\}/firebaseLinks/{firebase_link_id\} Example: properties/1234/firebaseLinks/5678
     *     name: 'properties/my-propertie/firebaseLinks/my-firebaseLink',
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
      params: Params$Resource$Properties$Firebaselinks$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Properties$Firebaselinks$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Properties$Firebaselinks$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Properties$Firebaselinks$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Properties$Firebaselinks$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Properties$Firebaselinks$Delete
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
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Firebaselinks$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Firebaselinks$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.firebaseLinks.list({
     *     // The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListFirebaseLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListFirebaseLinks` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. Format: properties/{property_id\} Example: properties/1234
     *     parent: 'properties/my-propertie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "firebaseLinks": [],
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
      params: Params$Resource$Properties$Firebaselinks$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Properties$Firebaselinks$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse>;
    list(
      params: Params$Resource$Properties$Firebaselinks$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Properties$Firebaselinks$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse>
    ): void;
    list(
      params: Params$Resource$Properties$Firebaselinks$List,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Properties$Firebaselinks$List
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Firebaselinks$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Firebaselinks$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/firebaseLinks').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Properties$Firebaselinks$Create
    extends StandardParameters {
    /**
     * Required. Format: properties/{property_id\} Example: properties/1234
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaFirebaseLink;
  }
  export interface Params$Resource$Properties$Firebaselinks$Delete
    extends StandardParameters {
    /**
     * Required. Format: properties/{property_id\}/firebaseLinks/{firebase_link_id\} Example: properties/1234/firebaseLinks/5678
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Firebaselinks$List
    extends StandardParameters {
    /**
     * The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListFirebaseLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListFirebaseLinks` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Format: properties/{property_id\} Example: properties/1234
     */
    parent?: string;
  }

  export class Resource$Properties$Googleadslinks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a GoogleAdsLink.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.googleAdsLinks.create({
     *     // Required. Example format: properties/1234
     *     parent: 'properties/my-propertie',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "adsPersonalizationEnabled": false,
     *       //   "canManageClients": false,
     *       //   "createTime": "my_createTime",
     *       //   "creatorEmailAddress": "my_creatorEmailAddress",
     *       //   "customerId": "my_customerId",
     *       //   "name": "my_name",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adsPersonalizationEnabled": false,
     *   //   "canManageClients": false,
     *   //   "createTime": "my_createTime",
     *   //   "creatorEmailAddress": "my_creatorEmailAddress",
     *   //   "customerId": "my_customerId",
     *   //   "name": "my_name",
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
      params: Params$Resource$Properties$Googleadslinks$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Properties$Googleadslinks$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink>;
    create(
      params: Params$Resource$Properties$Googleadslinks$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Properties$Googleadslinks$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink>
    ): void;
    create(
      params: Params$Resource$Properties$Googleadslinks$Create,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Properties$Googleadslinks$Create
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Googleadslinks$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Googleadslinks$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/googleAdsLinks').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink>(
          parameters
        );
      }
    }

    /**
     * Deletes a GoogleAdsLink on a property
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.googleAdsLinks.delete({
     *     // Required. Example format: properties/1234/googleAdsLinks/5678
     *     name: 'properties/my-propertie/googleAdsLinks/my-googleAdsLink',
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
      params: Params$Resource$Properties$Googleadslinks$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Properties$Googleadslinks$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Properties$Googleadslinks$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Properties$Googleadslinks$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Properties$Googleadslinks$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Properties$Googleadslinks$Delete
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
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Googleadslinks$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Googleadslinks$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Lists GoogleAdsLinks on a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.googleAdsLinks.list({
     *     // The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListGoogleAdsLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListGoogleAdsLinks` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. Example format: properties/1234
     *     parent: 'properties/my-propertie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "googleAdsLinks": [],
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
      params: Params$Resource$Properties$Googleadslinks$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Properties$Googleadslinks$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse>;
    list(
      params: Params$Resource$Properties$Googleadslinks$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Properties$Googleadslinks$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse>
    ): void;
    list(
      params: Params$Resource$Properties$Googleadslinks$List,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Properties$Googleadslinks$List
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Googleadslinks$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Googleadslinks$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/googleAdsLinks').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a GoogleAdsLink on a property
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.googleAdsLinks.patch({
     *     // Output only. Format: properties/{propertyId\}/googleAdsLinks/{googleAdsLinkId\} Note: googleAdsLinkId is not the Google Ads customer ID.
     *     name: 'properties/my-propertie/googleAdsLinks/my-googleAdsLink',
     *     // Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "adsPersonalizationEnabled": false,
     *       //   "canManageClients": false,
     *       //   "createTime": "my_createTime",
     *       //   "creatorEmailAddress": "my_creatorEmailAddress",
     *       //   "customerId": "my_customerId",
     *       //   "name": "my_name",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adsPersonalizationEnabled": false,
     *   //   "canManageClients": false,
     *   //   "createTime": "my_createTime",
     *   //   "creatorEmailAddress": "my_creatorEmailAddress",
     *   //   "customerId": "my_customerId",
     *   //   "name": "my_name",
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
      params: Params$Resource$Properties$Googleadslinks$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Properties$Googleadslinks$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink>;
    patch(
      params: Params$Resource$Properties$Googleadslinks$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Properties$Googleadslinks$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink>
    ): void;
    patch(
      params: Params$Resource$Properties$Googleadslinks$Patch,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Properties$Googleadslinks$Patch
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Googleadslinks$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Googleadslinks$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Properties$Googleadslinks$Create
    extends StandardParameters {
    /**
     * Required. Example format: properties/1234
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink;
  }
  export interface Params$Resource$Properties$Googleadslinks$Delete
    extends StandardParameters {
    /**
     * Required. Example format: properties/1234/googleAdsLinks/5678
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Googleadslinks$List
    extends StandardParameters {
    /**
     * The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListGoogleAdsLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListGoogleAdsLinks` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Example format: properties/1234
     */
    parent?: string;
  }
  export interface Params$Resource$Properties$Googleadslinks$Patch
    extends StandardParameters {
    /**
     * Output only. Format: properties/{propertyId\}/googleAdsLinks/{googleAdsLinkId\} Note: googleAdsLinkId is not the Google Ads customer ID.
     */
    name?: string;
    /**
     * Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink;
  }

  export class Resource$Properties$Searchads360links {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a SearchAds360Link.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.searchAds360Links.create({
     *     // Required. Example format: properties/1234
     *     parent: 'properties/my-propertie',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "adsPersonalizationEnabled": false,
     *       //   "advertiserDisplayName": "my_advertiserDisplayName",
     *       //   "advertiserId": "my_advertiserId",
     *       //   "campaignDataSharingEnabled": false,
     *       //   "costDataSharingEnabled": false,
     *       //   "name": "my_name",
     *       //   "siteStatsSharingEnabled": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adsPersonalizationEnabled": false,
     *   //   "advertiserDisplayName": "my_advertiserDisplayName",
     *   //   "advertiserId": "my_advertiserId",
     *   //   "campaignDataSharingEnabled": false,
     *   //   "costDataSharingEnabled": false,
     *   //   "name": "my_name",
     *   //   "siteStatsSharingEnabled": false
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
      params: Params$Resource$Properties$Searchads360links$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Properties$Searchads360links$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaSearchAds360Link>;
    create(
      params: Params$Resource$Properties$Searchads360links$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Properties$Searchads360links$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaSearchAds360Link>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaSearchAds360Link>
    ): void;
    create(
      params: Params$Resource$Properties$Searchads360links$Create,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaSearchAds360Link>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaSearchAds360Link>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Properties$Searchads360links$Create
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaSearchAds360Link>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaSearchAds360Link>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaSearchAds360Link>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaSearchAds360Link>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Searchads360links$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Searchads360links$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/searchAds360Links').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaSearchAds360Link>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaSearchAds360Link>(
          parameters
        );
      }
    }

    /**
     * Deletes a SearchAds360Link on a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.searchAds360Links.delete({
     *     // Required. The name of the SearchAds360Link to delete. Example format: properties/1234/SearchAds360Links/5678
     *     name: 'properties/my-propertie/searchAds360Links/my-searchAds360Link',
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
      params: Params$Resource$Properties$Searchads360links$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Properties$Searchads360links$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Properties$Searchads360links$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Properties$Searchads360links$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Properties$Searchads360links$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Properties$Searchads360links$Delete
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
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Searchads360links$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Searchads360links$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Look up a single SearchAds360Link
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.searchAds360Links.get({
     *     // Required. The name of the SearchAds360Link to get. Example format: properties/1234/SearchAds360Link/5678
     *     name: 'properties/my-propertie/searchAds360Links/my-searchAds360Link',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adsPersonalizationEnabled": false,
     *   //   "advertiserDisplayName": "my_advertiserDisplayName",
     *   //   "advertiserId": "my_advertiserId",
     *   //   "campaignDataSharingEnabled": false,
     *   //   "costDataSharingEnabled": false,
     *   //   "name": "my_name",
     *   //   "siteStatsSharingEnabled": false
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
      params: Params$Resource$Properties$Searchads360links$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Properties$Searchads360links$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaSearchAds360Link>;
    get(
      params: Params$Resource$Properties$Searchads360links$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Properties$Searchads360links$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaSearchAds360Link>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaSearchAds360Link>
    ): void;
    get(
      params: Params$Resource$Properties$Searchads360links$Get,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaSearchAds360Link>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaSearchAds360Link>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Properties$Searchads360links$Get
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaSearchAds360Link>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaSearchAds360Link>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaSearchAds360Link>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaSearchAds360Link>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Searchads360links$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Searchads360links$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaSearchAds360Link>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaSearchAds360Link>(
          parameters
        );
      }
    }

    /**
     * Lists all SearchAds360Links on a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.searchAds360Links.list({
     *     // The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListSearchAds360Links` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSearchAds360Links` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. Example format: properties/1234
     *     parent: 'properties/my-propertie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "searchAds360Links": []
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
      params: Params$Resource$Properties$Searchads360links$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Properties$Searchads360links$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListSearchAds360LinksResponse>;
    list(
      params: Params$Resource$Properties$Searchads360links$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Properties$Searchads360links$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListSearchAds360LinksResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListSearchAds360LinksResponse>
    ): void;
    list(
      params: Params$Resource$Properties$Searchads360links$List,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListSearchAds360LinksResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListSearchAds360LinksResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Properties$Searchads360links$List
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListSearchAds360LinksResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListSearchAds360LinksResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListSearchAds360LinksResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListSearchAds360LinksResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Searchads360links$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Searchads360links$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/searchAds360Links').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListSearchAds360LinksResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListSearchAds360LinksResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a SearchAds360Link on a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.searchAds360Links.patch({
     *     // Output only. The resource name for this SearchAds360Link resource. Format: properties/{propertyId\}/searchAds360Links/{linkId\} Note: linkId is not the Search Ads 360 advertiser ID
     *     name: 'properties/my-propertie/searchAds360Links/my-searchAds360Link',
     *     // Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "adsPersonalizationEnabled": false,
     *       //   "advertiserDisplayName": "my_advertiserDisplayName",
     *       //   "advertiserId": "my_advertiserId",
     *       //   "campaignDataSharingEnabled": false,
     *       //   "costDataSharingEnabled": false,
     *       //   "name": "my_name",
     *       //   "siteStatsSharingEnabled": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adsPersonalizationEnabled": false,
     *   //   "advertiserDisplayName": "my_advertiserDisplayName",
     *   //   "advertiserId": "my_advertiserId",
     *   //   "campaignDataSharingEnabled": false,
     *   //   "costDataSharingEnabled": false,
     *   //   "name": "my_name",
     *   //   "siteStatsSharingEnabled": false
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
      params: Params$Resource$Properties$Searchads360links$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Properties$Searchads360links$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaSearchAds360Link>;
    patch(
      params: Params$Resource$Properties$Searchads360links$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Properties$Searchads360links$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaSearchAds360Link>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaSearchAds360Link>
    ): void;
    patch(
      params: Params$Resource$Properties$Searchads360links$Patch,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaSearchAds360Link>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaSearchAds360Link>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Properties$Searchads360links$Patch
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaSearchAds360Link>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaSearchAds360Link>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaSearchAds360Link>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaSearchAds360Link>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Searchads360links$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Searchads360links$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaSearchAds360Link>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaSearchAds360Link>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Properties$Searchads360links$Create
    extends StandardParameters {
    /**
     * Required. Example format: properties/1234
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaSearchAds360Link;
  }
  export interface Params$Resource$Properties$Searchads360links$Delete
    extends StandardParameters {
    /**
     * Required. The name of the SearchAds360Link to delete. Example format: properties/1234/SearchAds360Links/5678
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Searchads360links$Get
    extends StandardParameters {
    /**
     * Required. The name of the SearchAds360Link to get. Example format: properties/1234/SearchAds360Link/5678
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Searchads360links$List
    extends StandardParameters {
    /**
     * The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListSearchAds360Links` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSearchAds360Links` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Example format: properties/1234
     */
    parent?: string;
  }
  export interface Params$Resource$Properties$Searchads360links$Patch
    extends StandardParameters {
    /**
     * Output only. The resource name for this SearchAds360Link resource. Format: properties/{propertyId\}/searchAds360Links/{linkId\} Note: linkId is not the Search Ads 360 advertiser ID
     */
    name?: string;
    /**
     * Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaSearchAds360Link;
  }

  export class Resource$Properties$Userlinks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists all user links on an account or property, including implicit ones that come from effective permissions granted by groups or organization admin roles. If a returned user link does not have direct permissions, they cannot be removed from the account or property directly with the DeleteUserLink command. They have to be removed from the group/etc that gives them permissions, which is currently only usable/discoverable in the GA or GMP UIs.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.manage.users',
     *       'https://www.googleapis.com/auth/analytics.manage.users.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.userLinks.audit({
     *     // Required. Example format: accounts/1234
     *     parent: 'properties/my-propertie',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "pageSize": 0,
     *       //   "pageToken": "my_pageToken"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "userLinks": []
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
    audit(
      params: Params$Resource$Properties$Userlinks$Audit,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    audit(
      params?: Params$Resource$Properties$Userlinks$Audit,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse>;
    audit(
      params: Params$Resource$Properties$Userlinks$Audit,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    audit(
      params: Params$Resource$Properties$Userlinks$Audit,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse>
    ): void;
    audit(
      params: Params$Resource$Properties$Userlinks$Audit,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse>
    ): void;
    audit(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse>
    ): void;
    audit(
      paramsOrCallback?:
        | Params$Resource$Properties$Userlinks$Audit
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Userlinks$Audit;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Userlinks$Audit;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/userLinks:audit').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse>(
          parameters
        );
      }
    }

    /**
     * Creates information about multiple users' links to an account or property. This method is transactional. If any UserLink cannot be created, none of the UserLinks will be created.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.userLinks.batchCreate({
     *     // Required. The account or property that all user links in the request are for. This field is required. The parent field in the CreateUserLinkRequest messages must either be empty or match this field. Example format: accounts/1234
     *     parent: 'properties/my-propertie',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "notifyNewUsers": false,
     *       //   "requests": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "userLinks": []
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
    batchCreate(
      params: Params$Resource$Properties$Userlinks$Batchcreate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchCreate(
      params?: Params$Resource$Properties$Userlinks$Batchcreate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse>;
    batchCreate(
      params: Params$Resource$Properties$Userlinks$Batchcreate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchCreate(
      params: Params$Resource$Properties$Userlinks$Batchcreate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse>
    ): void;
    batchCreate(
      params: Params$Resource$Properties$Userlinks$Batchcreate,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse>
    ): void;
    batchCreate(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse>
    ): void;
    batchCreate(
      paramsOrCallback?:
        | Params$Resource$Properties$Userlinks$Batchcreate
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Userlinks$Batchcreate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Userlinks$Batchcreate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/userLinks:batchCreate').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse>(
          parameters
        );
      }
    }

    /**
     * Deletes information about multiple users' links to an account or property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.userLinks.batchDelete({
     *     // Required. The account or property that all user links in the request are for. The parent of all values for user link names to delete must match this field. Example format: accounts/1234
     *     parent: 'properties/my-propertie',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "requests": []
     *       // }
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
    batchDelete(
      params: Params$Resource$Properties$Userlinks$Batchdelete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchDelete(
      params?: Params$Resource$Properties$Userlinks$Batchdelete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    batchDelete(
      params: Params$Resource$Properties$Userlinks$Batchdelete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchDelete(
      params: Params$Resource$Properties$Userlinks$Batchdelete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    batchDelete(
      params: Params$Resource$Properties$Userlinks$Batchdelete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    batchDelete(
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    batchDelete(
      paramsOrCallback?:
        | Params$Resource$Properties$Userlinks$Batchdelete
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
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Userlinks$Batchdelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Userlinks$Batchdelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/userLinks:batchDelete').replace(
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Gets information about multiple users' links to an account or property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.manage.users',
     *       'https://www.googleapis.com/auth/analytics.manage.users.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.userLinks.batchGet({
     *     // Required. The names of the user links to retrieve. A maximum of 1000 user links can be retrieved in a batch. Format: accounts/{accountId\}/userLinks/{userLinkId\}
     *     names: 'placeholder-value',
     *     // Required. The account or property that all user links in the request are for. The parent of all provided values for the 'names' field must match this field. Example format: accounts/1234
     *     parent: 'properties/my-propertie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "userLinks": []
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
    batchGet(
      params: Params$Resource$Properties$Userlinks$Batchget,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchGet(
      params?: Params$Resource$Properties$Userlinks$Batchget,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse>;
    batchGet(
      params: Params$Resource$Properties$Userlinks$Batchget,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchGet(
      params: Params$Resource$Properties$Userlinks$Batchget,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse>
    ): void;
    batchGet(
      params: Params$Resource$Properties$Userlinks$Batchget,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse>
    ): void;
    batchGet(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse>
    ): void;
    batchGet(
      paramsOrCallback?:
        | Params$Resource$Properties$Userlinks$Batchget
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Userlinks$Batchget;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Userlinks$Batchget;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/userLinks:batchGet').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse>(
          parameters
        );
      }
    }

    /**
     * Updates information about multiple users' links to an account or property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.userLinks.batchUpdate({
     *     // Required. The account or property that all user links in the request are for. The parent field in the UpdateUserLinkRequest messages must either be empty or match this field. Example format: accounts/1234
     *     parent: 'properties/my-propertie',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "requests": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "userLinks": []
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
    batchUpdate(
      params: Params$Resource$Properties$Userlinks$Batchupdate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchUpdate(
      params?: Params$Resource$Properties$Userlinks$Batchupdate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse>;
    batchUpdate(
      params: Params$Resource$Properties$Userlinks$Batchupdate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchUpdate(
      params: Params$Resource$Properties$Userlinks$Batchupdate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse>
    ): void;
    batchUpdate(
      params: Params$Resource$Properties$Userlinks$Batchupdate,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse>
    ): void;
    batchUpdate(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse>
    ): void;
    batchUpdate(
      paramsOrCallback?:
        | Params$Resource$Properties$Userlinks$Batchupdate
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Userlinks$Batchupdate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Userlinks$Batchupdate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/userLinks:batchUpdate').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse>(
          parameters
        );
      }
    }

    /**
     * Creates a user link on an account or property. If the user with the specified email already has permissions on the account or property, then the user's existing permissions will be unioned with the permissions specified in the new UserLink.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.userLinks.create({
     *     // Optional. If set, then email the new user notifying them that they've been granted permissions to the resource.
     *     notifyNewUser: 'placeholder-value',
     *     // Required. Example format: accounts/1234
     *     parent: 'properties/my-propertie',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "directRoles": [],
     *       //   "emailAddress": "my_emailAddress",
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "directRoles": [],
     *   //   "emailAddress": "my_emailAddress",
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
      params: Params$Resource$Properties$Userlinks$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Properties$Userlinks$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaUserLink>;
    create(
      params: Params$Resource$Properties$Userlinks$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Properties$Userlinks$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
    ): void;
    create(
      params: Params$Resource$Properties$Userlinks$Create,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Properties$Userlinks$Create
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaUserLink>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Userlinks$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Userlinks$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/userLinks').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaUserLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaUserLink>(
          parameters
        );
      }
    }

    /**
     * Deletes a user link on an account or property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.userLinks.delete({
     *     // Required. Example format: accounts/1234/userLinks/5678
     *     name: 'properties/my-propertie/userLinks/my-userLink',
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
      params: Params$Resource$Properties$Userlinks$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Properties$Userlinks$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Properties$Userlinks$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Properties$Userlinks$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Properties$Userlinks$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Properties$Userlinks$Delete
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
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Userlinks$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Userlinks$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Gets information about a user's link to an account or property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.manage.users',
     *       'https://www.googleapis.com/auth/analytics.manage.users.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.userLinks.get({
     *     // Required. Example format: accounts/1234/userLinks/5678
     *     name: 'properties/my-propertie/userLinks/my-userLink',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "directRoles": [],
     *   //   "emailAddress": "my_emailAddress",
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
      params: Params$Resource$Properties$Userlinks$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Properties$Userlinks$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaUserLink>;
    get(
      params: Params$Resource$Properties$Userlinks$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Properties$Userlinks$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
    ): void;
    get(
      params: Params$Resource$Properties$Userlinks$Get,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Properties$Userlinks$Get
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaUserLink>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Userlinks$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Userlinks$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaUserLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaUserLink>(
          parameters
        );
      }
    }

    /**
     * Lists all user links on an account or property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.manage.users',
     *       'https://www.googleapis.com/auth/analytics.manage.users.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.userLinks.list({
     *     // The maximum number of user links to return. The service may return fewer than this value. If unspecified, at most 200 user links will be returned. The maximum value is 500; values above 500 will be coerced to 500.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListUserLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUserLinks` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. Example format: accounts/1234
     *     parent: 'properties/my-propertie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "userLinks": []
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
      params: Params$Resource$Properties$Userlinks$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Properties$Userlinks$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse>;
    list(
      params: Params$Resource$Properties$Userlinks$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Properties$Userlinks$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse>
    ): void;
    list(
      params: Params$Resource$Properties$Userlinks$List,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Properties$Userlinks$List
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Userlinks$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Userlinks$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/userLinks').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a user link on an account or property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.userLinks.patch({
     *     // Output only. Example format: properties/1234/userLinks/5678
     *     name: 'properties/my-propertie/userLinks/my-userLink',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "directRoles": [],
     *       //   "emailAddress": "my_emailAddress",
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "directRoles": [],
     *   //   "emailAddress": "my_emailAddress",
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
      params: Params$Resource$Properties$Userlinks$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Properties$Userlinks$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaUserLink>;
    patch(
      params: Params$Resource$Properties$Userlinks$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Properties$Userlinks$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
    ): void;
    patch(
      params: Params$Resource$Properties$Userlinks$Patch,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Properties$Userlinks$Patch
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaUserLink>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Userlinks$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Userlinks$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaUserLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaUserLink>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Properties$Userlinks$Audit
    extends StandardParameters {
    /**
     * Required. Example format: accounts/1234
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksRequest;
  }
  export interface Params$Resource$Properties$Userlinks$Batchcreate
    extends StandardParameters {
    /**
     * Required. The account or property that all user links in the request are for. This field is required. The parent field in the CreateUserLinkRequest messages must either be empty or match this field. Example format: accounts/1234
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksRequest;
  }
  export interface Params$Resource$Properties$Userlinks$Batchdelete
    extends StandardParameters {
    /**
     * Required. The account or property that all user links in the request are for. The parent of all values for user link names to delete must match this field. Example format: accounts/1234
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaBatchDeleteUserLinksRequest;
  }
  export interface Params$Resource$Properties$Userlinks$Batchget
    extends StandardParameters {
    /**
     * Required. The names of the user links to retrieve. A maximum of 1000 user links can be retrieved in a batch. Format: accounts/{accountId\}/userLinks/{userLinkId\}
     */
    names?: string[];
    /**
     * Required. The account or property that all user links in the request are for. The parent of all provided values for the 'names' field must match this field. Example format: accounts/1234
     */
    parent?: string;
  }
  export interface Params$Resource$Properties$Userlinks$Batchupdate
    extends StandardParameters {
    /**
     * Required. The account or property that all user links in the request are for. The parent field in the UpdateUserLinkRequest messages must either be empty or match this field. Example format: accounts/1234
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksRequest;
  }
  export interface Params$Resource$Properties$Userlinks$Create
    extends StandardParameters {
    /**
     * Optional. If set, then email the new user notifying them that they've been granted permissions to the resource.
     */
    notifyNewUser?: boolean;
    /**
     * Required. Example format: accounts/1234
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaUserLink;
  }
  export interface Params$Resource$Properties$Userlinks$Delete
    extends StandardParameters {
    /**
     * Required. Example format: accounts/1234/userLinks/5678
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Userlinks$Get
    extends StandardParameters {
    /**
     * Required. Example format: accounts/1234/userLinks/5678
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Userlinks$List
    extends StandardParameters {
    /**
     * The maximum number of user links to return. The service may return fewer than this value. If unspecified, at most 200 user links will be returned. The maximum value is 500; values above 500 will be coerced to 500.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListUserLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUserLinks` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Example format: accounts/1234
     */
    parent?: string;
  }
  export interface Params$Resource$Properties$Userlinks$Patch
    extends StandardParameters {
    /**
     * Output only. Example format: properties/1234/userLinks/5678
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaUserLink;
  }
}
