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
import {Compute, JWT, OAuth2Client, UserRefreshClient} from 'google-auth-library';

import {BodyResponseCallback, createAPIRequest, GlobalOptions, GoogleConfigurable, MethodOptions} from '../../shared/src';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace jobs_v2 {
  export interface Options extends GlobalOptions {
    version: 'v2';
  }

  /**
   * Cloud Job Discovery
   *
   * Cloud Job Discovery provides the capability to create, read, update, and
   * delete job postings, as well as search jobs based on keywords and filters.
   *
   * @example
   * const {google} = require('googleapis');
   * const jobs = google.jobs('v2');
   *
   * @namespace jobs
   * @type {Function}
   * @version v2
   * @variation v2
   * @param {object=} options Options for Jobs
   */
  export class Jobs {
    _options: GlobalOptions;
    google?: GoogleConfigurable;
    root = this;

    companies: Resource$Companies;
    jobs: Resource$Jobs;
    v2: Resource$V2;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.companies = new Resource$Companies(this);
      this.jobs = new Resource$Jobs(this);
      this.v2 = new Resource$V2(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * Input only.  Batch delete jobs request.
   */
  export interface Schema$BatchDeleteJobsRequest {
    /**
     * Required.  The filter string specifies the jobs to be deleted.  Supported
     * operator: =, AND  The fields eligible for filtering are:  * `companyName`
     * (Required) * `requisitionId` (Required)  Sample Query: companyName =
     * &quot;companies/123&quot; AND requisitionId = &quot;req-1&quot;
     */
    filter?: string;
  }
  /**
   * Represents count of jobs within one bucket.
   */
  export interface Schema$BucketizedCount {
    /**
     * Number of jobs whose numeric field value fall into `range`.
     */
    count?: number;
    /**
     * Bucket range on which histogram was performed for the numeric field, that
     * is, the count represents number of jobs in this range.
     */
    range?: Schema$BucketRange;
  }
  /**
   * Represents starting and ending value of a range in double.
   */
  export interface Schema$BucketRange {
    /**
     * Starting value of the bucket range.
     */
    from?: number;
    /**
     * Ending value of the bucket range.
     */
    to?: number;
  }
  /**
   * Output only.  Commute details related to this job.
   */
  export interface Schema$CommuteInfo {
    /**
     * Location used as the destination in the commute calculation.
     */
    jobLocation?: Schema$JobLocation;
    /**
     * Travel time to reach the job.
     */
    travelDuration?: string;
  }
  /**
   * Input only.  Parameters needed for commute search.
   */
  export interface Schema$CommutePreference {
    /**
     * Optional. If `true`, jobs without street level addresses may also be
     * returned. For city level addresses, the city center is used. For state
     * and coarser level addresses, text matching is used. If this field is set
     * to `false` or is not specified, only jobs that include street level
     * addresses will be returned by commute search.
     */
    allowNonStreetLevelAddress?: boolean;
    /**
     * Optional.  The departure hour to use to calculate traffic impact. Accepts
     * an integer between 0 and 23, representing the hour in the time zone of
     * the start_location. Must not be present if road_traffic is specified.
     */
    departureHourLocal?: number;
    /**
     * Required.  The method of transportation for which to calculate the
     * commute time.
     */
    method?: string;
    /**
     * Optional.  Specifies the traffic density to use when caculating commute
     * time. Must not be present if departure_hour_local is specified.
     */
    roadTraffic?: string;
    /**
     * Required.  The latitude and longitude of the location from which to
     * calculate the commute time.
     */
    startLocation?: Schema$LatLng;
    /**
     * Required.  The maximum travel time in seconds. The maximum allowed value
     * is `3600s` (one hour). Format is `123s`.
     */
    travelTime?: string;
  }
  /**
   * A Company resource represents a company in the service. A company is the
   * entity that owns job listings, that is, the hiring entity responsible for
   * employing applicants for the job position.
   */
  export interface Schema$Company {
    /**
     * Optional.  The URL to employer&#39;s career site or careers page on the
     * employer&#39;s web site.
     */
    careerPageLink?: string;
    /**
     * Optional.  Identifiers external to the application that help to further
     * identify the employer.
     */
    companyInfoSources?: Schema$CompanyInfoSource[];
    /**
     * Optional.  The employer&#39;s company size.
     */
    companySize?: string;
    /**
     * Deprecated. Do not use this field.  Optional.  This field is no longer
     * used. Any value set to it is ignored.
     */
    disableLocationOptimization?: boolean;
    /**
     * Required.  The name of the employer to be displayed with the job, for
     * example, &quot;Google, LLC.&quot;.
     */
    displayName?: string;
    /**
     * Optional.  The unique company identifier provided by the client to
     * identify an employer for billing purposes. Recommended practice is to use
     * the distributor_company_id.  Defaults to same value as
     * distributor_company_id when a value is not provided.
     */
    distributorBillingCompanyId?: string;
    /**
     * Required.  A client&#39;s company identifier, used to uniquely identify
     * the company. If an employer has a subsidiary or sub-brand, such as
     * &quot;Alphabet&quot; and &quot;Google&quot;, which the client wishes to
     * use as the company displayed on the job. Best practice is to create a
     * distinct company identifier for each distinct brand displayed.
     */
    distributorCompanyId?: string;
    /**
     * Optional.  Equal Employment Opportunity legal disclaimer text to be
     * associated with all jobs, and typically to be displayed in all roles. The
     * maximum number of allowed characters is 500.
     */
    eeoText?: string;
    /**
     * Optional.  Set to true if it is the hiring agency that post jobs for
     * other employers.  Defaults to false if not provided.
     */
    hiringAgency?: boolean;
    /**
     * Optional.  The street address of the company&#39;s main headquarters,
     * which may be different from the job location. The service attempts to
     * geolocate the provided address, and populates a more specific location
     * wherever possible in structured_company_hq_location.
     */
    hqLocation?: string;
    /**
     * Optional.  A URL that hosts the employer&#39;s company logo. If provided,
     * the logo image should be squared at 80x80 pixels.  The url must be a
     * Google Photos or Google Album url. Only images in these Google
     * sub-domains are accepted.
     */
    imageUrl?: string;
    /**
     * Optional.  A list of keys of filterable Job.custom_attributes, whose
     * corresponding `string_values` are used in keyword search. Jobs with
     * `string_values` under these specified field keys are returned if any of
     * the values matches the search keyword.
     */
    keywordSearchableCustomAttributes?: string[];
    /**
     * Deprecated. Use keyword_searchable_custom_attributes instead.  Optional.
     * A list of filterable custom fields that should be used in keyword search.
     * The jobs of this company are returned if any of these custom fields
     * matches the search keyword.
     */
    keywordSearchableCustomFields?: number[];
    /**
     * Required during company update.  The resource name for a company. This is
     * generated by the service when a company is created, for example,
     * &quot;companies/0000aaaa-1111-bbbb-2222-cccc3333dddd&quot;.
     */
    name?: string;
    /**
     * Output only.  A structured headquarters location of the company, resolved
     * from hq_location if possible.
     */
    structuredCompanyHqLocation?: Schema$JobLocation;
    /**
     * Output only.  Indicates whether a company is flagged to be suspended from
     * public availability by the service when job content appears suspicious,
     * abusive, or spammy.
     */
    suspended?: boolean;
    /**
     * Deprecated. Use display_name instead.  Required.  The name of the
     * employer to be displayed with the job, for example, &quot;Google,
     * LLC.&quot;.
     */
    title?: string;
    /**
     * Optional.  The URL representing the company&#39;s primary web site or
     * home page, such as, &quot;www.google.com&quot;.
     */
    website?: string;
  }
  /**
   * A resource that represents an external  Google identifier for a company,
   * for example, a Google+ business page or a Google Maps business page. For
   * unsupported types, use `unknown_type_id`.
   */
  export interface Schema$CompanyInfoSource {
    /**
     * Optional.  The Google&#39;s Knowledge Graph value for the employer&#39;s
     * company.
     */
    freebaseMid?: string;
    /**
     * Optional.  The numeric identifier for the employer&#39;s Google+ business
     * page.
     */
    gplusId?: string;
    /**
     * Optional.  The numeric identifier for the employer&#39;s headquarters on
     * Google Maps, namely, the Google Maps CID (cell id).
     */
    mapsCid?: string;
    /**
     * Optional.  A Google identifier that does not match any of the other
     * types.
     */
    unknownTypeId?: string;
  }
  /**
   * A compensation entry that represents one component of compensation, such as
   * base pay, bonus, or other compensation type.  Annualization: One
   * compensation entry can be annualized if - it contains valid amount or
   * range. - and its expected_units_per_year is set or can be derived. Its
   * annualized range is determined as (amount or range) times
   * expected_units_per_year.
   */
  export interface Schema$CompensationEntry {
    /**
     * Optional.  Compensation amount.
     */
    amount?: Schema$Money;
    /**
     * Optional.  Compensation description.  For example, could indicate equity
     * terms or provide additional context to an estimated bonus.
     */
    description?: string;
    /**
     * Optional.  Expected number of units paid each year. If not specified,
     * when Job.employment_types is FULLTIME, a default value is inferred based
     * on unit. Default values: - HOURLY: 2080 - DAILY: 260 - WEEKLY: 52 -
     * MONTHLY: 12 - ANNUAL: 1
     */
    expectedUnitsPerYear?: number;
    /**
     * Optional.  Compensation range.
     */
    range?: Schema$CompensationRange;
    /**
     * Required.  Compensation type.
     */
    type?: string;
    /**
     * Optional.  Frequency of the specified amount.  Default is
     * CompensationUnit.OTHER_COMPENSATION_UNIT.
     */
    unit?: string;
  }
  /**
   * Input only.  Filter on job compensation type and amount.
   */
  export interface Schema$CompensationFilter {
    /**
     * Optional.  Whether to include jobs whose compensation range is
     * unspecified.
     */
    includeJobsWithUnspecifiedCompensationRange?: boolean;
    /**
     * Optional.  Compensation range.
     */
    range?: Schema$CompensationRange;
    /**
     * Required.  Type of filter.
     */
    type?: string;
    /**
     * Required.  Specify desired ** base compensation entry&#39;s **
     * CompensationInfo.CompensationUnit.
     */
    units?: string[];
  }
  /**
   * Input only.  Compensation based histogram request.
   */
  export interface Schema$CompensationHistogramRequest {
    /**
     * Required.  Numeric histogram options, like buckets, whether include min
     * or max value.
     */
    bucketingOption?: Schema$NumericBucketingOption;
    /**
     * Required.  Type of the request, representing which field the
     * histogramming should be performed over. A single request can only specify
     * one histogram of each `CompensationHistogramRequestType`.
     */
    type?: string;
  }
  /**
   * Output only.  Compensation based histogram result.
   */
  export interface Schema$CompensationHistogramResult {
    /**
     * Histogram result.
     */
    result?: Schema$NumericBucketingResult;
    /**
     * Type of the request, corresponding to CompensationHistogramRequest.type.
     */
    type?: string;
  }
  /**
   * Job compensation details.
   */
  export interface Schema$CompensationInfo {
    /**
     * Deprecated. Use entries instead.  Optional.  The amount of compensation
     * or pay for the job. As an alternative, compensation_amount_min and
     * compensation_amount_max may be used to define a range of compensation.
     */
    amount?: Schema$Money;
    /**
     * Output only.  Annualized base compensation range. Computed as base
     * compensation entry&#39;s CompensationEntry.compensation times
     * CompensationEntry.expected_units_per_year.  See CompensationEntry for
     * explanation on compensation annualization.
     */
    annualizedBaseCompensationRange?: Schema$CompensationRange;
    /**
     * Output only.  Annualized total compensation range. Computed as all
     * compensation entries&#39; CompensationEntry.compensation times
     * CompensationEntry.expected_units_per_year.  See CompensationEntry for
     * explanation on compensation annualization.
     */
    annualizedTotalCompensationRange?: Schema$CompensationRange;
    /**
     * Optional.  Job compensation information.  At most one entry can be of
     * type CompensationInfo.CompensationType.BASE, which is referred as ** base
     * compensation entry ** for the job.
     */
    entries?: Schema$CompensationEntry[];
    /**
     * Deprecated. Use entries instead.  Optional.  An upper bound on a range
     * for compensation or pay for the job. The currency type is specified in
     * compensation_amount.
     */
    max?: Schema$Money;
    /**
     * Deprecated. Use entries instead.  Optional.  A lower bound on a range for
     * compensation or pay for the job. The currency type is specified in
     * compensation_amount.
     */
    min?: Schema$Money;
    /**
     * Deprecated. Use entries instead.  Optional.  Type of job compensation.
     */
    type?: string;
  }
  /**
   * Compensation range.
   */
  export interface Schema$CompensationRange {
    /**
     * Required.  The maximum amount of compensation.
     */
    max?: Schema$Money;
    /**
     * Required.  The minimum amount of compensation.
     */
    min?: Schema$Money;
  }
  /**
   * Output only.  Response of auto-complete query.
   */
  export interface Schema$CompleteQueryResponse {
    /**
     * Results of the matching job/company candidates.
     */
    completionResults?: Schema$CompletionResult[];
    /**
     * Additional information for the API invocation, such as the request
     * tracking id.
     */
    metadata?: Schema$ResponseMetadata;
  }
  /**
   * Output only.  Resource that represents completion results.
   */
  export interface Schema$CompletionResult {
    /**
     * The URL for the company logo if `type=COMPANY_NAME`.
     */
    imageUrl?: string;
    /**
     * The suggestion for the query.
     */
    suggestion?: string;
    /**
     * The completion topic.
     */
    type?: string;
  }
  /**
   * Input only.  Create job request.
   */
  export interface Schema$CreateJobRequest {
    /**
     * If set to `true`, the service will not attempt to resolve a more precise
     * address for the job.
     */
    disableStreetAddressResolution?: boolean;
    /**
     * Required.  The Job to be created.
     */
    job?: Schema$Job;
  }
  /**
   * Custom attribute values that are either filterable or non-filterable.
   */
  export interface Schema$CustomAttribute {
    /**
     * Optional.  If the `filterable` flag is true, custom field values are
     * searchable. If false, values are not searchable.  Default is false.
     */
    filterable?: boolean;
    /**
     * Optional but at least one of string_values or long_value must be
     * specified.  This field is used to perform number range search. (`EQ`,
     * `GT`, `GE`, `LE`, `LT`) over filterable `long_value`. For `long_value`, a
     * value between Long.MIN and Long.MIN is allowed.
     */
    longValue?: string;
    /**
     * Optional but at least one of string_values or long_value must be
     * specified.  This field is used to perform a string match
     * (`CASE_SENSITIVE_MATCH` or `CASE_INSENSITIVE_MATCH`) search. For
     * filterable `string_values`, a maximum total number of 200 values is
     * allowed, with each `string_value` has a byte size of no more than 255B.
     * For unfilterable `string_values`, the maximum total byte size of
     * unfilterable `string_values` is 50KB.  Empty strings are not allowed.
     */
    stringValues?: Schema$StringValues;
  }
  /**
   * Custom attributes histogram request. An error will be thrown if neither
   * string_value_histogram or long_value_histogram_bucketing_option has been
   * defined.
   */
  export interface Schema$CustomAttributeHistogramRequest {
    /**
     * Required.  Specifies the custom field key to perform a histogram on. If
     * specified without `long_value_buckets` or `long_value_min_max`, a
     * histogram on string values of the given `key` is triggered, otherwise
     * histogram is performed on long values.
     */
    key?: string;
    /**
     * Optional.  Specifies buckets used to perform a range histogram on
     * Job&#39;s filterable long custom field values, or min/max value
     * requirements.
     */
    longValueHistogramBucketingOption?: Schema$NumericBucketingOption;
    /**
     * Optional. If set to true, the response will include the histogram value
     * for each key as a string.
     */
    stringValueHistogram?: boolean;
  }
  /**
   * Output only.  Custom attribute histogram result.
   */
  export interface Schema$CustomAttributeHistogramResult {
    /**
     * Stores the key of custom attribute the histogram is performed on.
     */
    key?: string;
    /**
     * Stores bucketed histogram counting result or min/max values for custom
     * attribute long values associated with `key`.
     */
    longValueHistogramResult?: Schema$NumericBucketingResult;
    /**
     * Stores a map from the values of string custom field associated with `key`
     * to the number of jobs with that value in this histogram result.
     */
    stringValueHistogramResult?: any;
  }
  /**
   * Resource that represents the custom data not captured by the standard
   * fields.
   */
  export interface Schema$CustomField {
    /**
     * Optional.  The values of the custom data.
     */
    values?: string[];
  }
  /**
   * Input only.  Custom field filter of the search.
   */
  export interface Schema$CustomFieldFilter {
    /**
     * Required.  The query strings for the filter.
     */
    queries?: string[];
    /**
     * Optional.  The type of filter. Defaults to FilterType.OR.
     */
    type?: string;
  }
  /**
   * Represents a whole calendar date, e.g. date of birth. The time of day and
   * time zone are either specified elsewhere or are not significant. The date
   * is relative to the Proleptic Gregorian Calendar. The day may be 0 to
   * represent a year and month where the day is not significant, e.g. credit
   * card expiration date. The year may be 0 to represent a month and day
   * independent of year, e.g. anniversary date. Related types are
   * google.type.TimeOfDay and `google.protobuf.Timestamp`.
   */
  export interface Schema$Date {
    /**
     * Day of month. Must be from 1 to 31 and valid for the year and month, or 0
     * if specifying a year/month where the day is not significant.
     */
    day?: number;
    /**
     * Month of year. Must be from 1 to 12, or 0 if specifying a date without a
     * month.
     */
    month?: number;
    /**
     * Year of date. Must be from 1 to 9999, or 0 if specifying a date without a
     * year.
     */
    year?: number;
  }
  /**
   * Deprecated. Use BatchDeleteJobsRequest instead.  Input only.  Delete job by
   * filter request.  The job typically becomes unsearchable within 10 seconds,
   * but it may take up to 5 minutes.
   */
  export interface Schema$DeleteJobsByFilterRequest {
    /**
     * Optional.  If set to true, this call waits for all processing steps to
     * complete before the job is cleaned up. Otherwise, the call returns while
     * some steps are still taking place asynchronously, hence faster.
     */
    disableFastProcess?: boolean;
    /**
     * Required.  Restrictions on the scope of the delete request.
     */
    filter?: Schema$Filter;
  }
  /**
   * Input only.  Device information collected from the job searcher, candidate,
   * or other entity conducting the job search. Providing this information
   * improves the quality of the search results across devices.
   */
  export interface Schema$DeviceInfo {
    /**
     * Optional.  Type of the device.
     */
    deviceType?: string;
    /**
     * Optional.  A device-specific ID. It must be a unique identifier, which
     * distinguishes the device from other devices.
     */
    id?: string;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated
   * empty messages in your APIs. A typical example is to use it as the request
   * or the response type of an API method. For instance:      service Foo { rpc
   * Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON
   * representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * Deprecated. Always use CompensationFilter.  Input only.  Filter on job
   * compensation type and amount.
   */
  export interface Schema$ExtendedCompensationFilter {
    /**
     * Optional.  Compensation range.
     */
    compensationRange?: Schema$ExtendedCompensationInfoCompensationRange;
    /**
     * Required.  Specify desired ** base compensation entry&#39;s **
     * ExtendedCompensationInfo.CompensationUnit.
     */
    compensationUnits?: string[];
    /**
     * Optional.  Specify currency in 3-letter [ISO
     * 4217](https://www.iso.org/iso-4217-currency-codes.html) format. If
     * unspecified, jobs are returned regardless of currency.
     */
    currency?: string;
    /**
     * Optional.  Whether to include jobs whose compensation range is
     * unspecified.
     */
    includeJobWithUnspecifiedCompensationRange?: boolean;
    /**
     * Required.  Type of filter.
     */
    type?: string;
  }
  /**
   * Deprecated. Use CompensationInfo.  Describes job compensation.
   */
  export interface Schema$ExtendedCompensationInfo {
    /**
     * Output only.  Annualized base compensation range.
     */
    annualizedBaseCompensationRange?:
        Schema$ExtendedCompensationInfoCompensationRange;
    /**
     * Output only.  Indicates annualized base compensation range cannot be
     * derived, due to the job&#39;s base compensation entry cannot be
     * annualized. See CompensationEntry for explanation on annualization and
     * base compensation entry.
     */
    annualizedBaseCompensationUnspecified?: boolean;
    /**
     * Output only.  Annualized total compensation range.
     */
    annualizedTotalCompensationRange?:
        Schema$ExtendedCompensationInfoCompensationRange;
    /**
     * Output only.  Indicates annualized total compensation range cannot be
     * derived, due to the job&#39;s all CompensationEntry cannot be annualized.
     * See CompensationEntry for explanation on annualization and base
     * compensation entry.
     */
    annualizedTotalCompensationUnspecified?: boolean;
    /**
     * Optional.  A 3-letter [ISO
     * 4217](https://www.iso.org/iso-4217-currency-codes.html) currency code.
     */
    currency?: string;
    /**
     * Optional.  Job compensation information.  At most one entry can be of
     * type ExtendedCompensationInfo.CompensationType.BASE, which is referred as
     * ** base compensation entry ** for the job.
     */
    entries?: Schema$ExtendedCompensationInfoCompensationEntry[];
  }
  /**
   * Deprecated. See CompensationInfo.  A compensation entry that represents one
   * component of compensation, such as base pay, bonus, or other compensation
   * type.  Annualization: One compensation entry can be annualized if - it
   * contains valid amount or range. - and its expected_units_per_year is set or
   * can be derived. Its annualized range is determined as (amount or range)
   * times expected_units_per_year.
   */
  export interface Schema$ExtendedCompensationInfoCompensationEntry {
    /**
     * Optional.  Monetary amount.
     */
    amount?: Schema$ExtendedCompensationInfoDecimal;
    /**
     * Optional.  Compensation description.
     */
    description?: string;
    /**
     * Optional.  Expected number of units paid each year. If not specified,
     * when Job.employment_types is FULLTIME, a default value is inferred based
     * on unit. Default values: - HOURLY: 2080 - DAILY: 260 - WEEKLY: 52 -
     * MONTHLY: 12 - ANNUAL: 1
     */
    expectedUnitsPerYear?: Schema$ExtendedCompensationInfoDecimal;
    /**
     * Optional.  Compensation range.
     */
    range?: Schema$ExtendedCompensationInfoCompensationRange;
    /**
     * Required.  Compensation type.
     */
    type?: string;
    /**
     * Optional.  Frequency of the specified amount.  Default is
     * CompensationUnit.OTHER_COMPENSATION_UNIT.
     */
    unit?: string;
    /**
     * Optional.  Indicates compensation amount and range are unset.
     */
    unspecified?: boolean;
  }
  /**
   * Deprecated. See CompensationInfo.  Compensation range.
   */
  export interface Schema$ExtendedCompensationInfoCompensationRange {
    /**
     * Required.  Maximum value.
     */
    max?: Schema$ExtendedCompensationInfoDecimal;
    /**
     * Required.  Minimum value.
     */
    min?: Schema$ExtendedCompensationInfoDecimal;
  }
  /**
   * Deprecated. See CompensationInfo.  Decimal number.
   */
  export interface Schema$ExtendedCompensationInfoDecimal {
    /**
     * Micro (10^-6) units. The value must be between -999,999 and +999,999
     * inclusive. If `units` is positive, `micros` must be positive or zero. If
     * `units` is zero, `micros` can be positive, zero, or negative. If `units`
     * is negative, `micros` must be negative or zero. For example -1.75 is
     * represented as `units`=-1 and `micros`=-750,000.
     */
    micros?: number;
    /**
     * Whole units.
     */
    units?: string;
  }
  /**
   * Deprecated. Use BatchDeleteJobsRequest instead.  Input only.  Filter for
   * jobs to be deleted.
   */
  export interface Schema$Filter {
    /**
     * Required.  The requisition ID (or posting ID) assigned by the client to
     * identify a job. This is intended for client identification and tracking
     * of listings. name takes precedence over this field The maximum number of
     * allowed characters is 225.
     */
    requisitionId?: string;
  }
  /**
   * Deprecated. Use SearchJobsRequest.histogram_facets instead to make a single
   * call with both search and histogram.  Input only.  A request for the
   * `GetHistogram` method.
   */
  export interface Schema$GetHistogramRequest {
    /**
     * Optional.  Controls whether to broaden the search to avoid too few
     * results for a given query in instances where a search has sparse results.
     * Results from a broadened query is a superset of the results from the
     * original query.  Defaults to false.
     */
    allowBroadening?: boolean;
    /**
     * Deprecated. Use query instead.  Optional.  Restrictions on the scope of
     * the histogram.
     */
    filters?: Schema$JobFilters;
    /**
     * Optional.  Query used to search against jobs, such as keyword, location
     * filters, etc.
     */
    query?: Schema$JobQuery;
    /**
     * Meta information, such as `user_id`, collected from the job searcher or
     * other entity conducting the job search, which is used to improve the
     * search quality of the service. Users determine identifier values, which
     * must be unique and consist.
     */
    requestMetadata?: Schema$RequestMetadata;
    /**
     * Required.  A list of facets that specify the histogram data to be
     * calculated against and returned.  Histogram response times can be slow,
     * and counts can be approximations. This call may be temporarily or
     * permanently removed prior to the production release of Cloud Job
     * Discovery.
     */
    searchTypes?: string[];
  }
  /**
   * Deprecated. Use SearchJobsRequest.histogram_facets instead to make a single
   * call with both search and histogram.  Output only.  The response of the
   * GetHistogram method.
   */
  export interface Schema$GetHistogramResponse {
    /**
     * Additional information for the API invocation, such as the request
     * tracking id.
     */
    metadata?: Schema$ResponseMetadata;
    /**
     * The Histogram results.
     */
    results?: Schema$HistogramResult[];
  }
  /**
   * Input only.  Histogram facets to be specified in SearchJobsRequest.
   */
  export interface Schema$HistogramFacets {
    /**
     * Optional.  Specifies compensation field-based histogram requests.
     * Duplicate CompensationHistogramRequest.types are not allowed.
     */
    compensationHistogramFacets?: Schema$CompensationHistogramRequest[];
    /**
     * Optional.  Specifies the custom attributes histogram requests. Duplicate
     * CustomAttributeHistogramRequest.keys are not allowed.
     */
    customAttributeHistogramFacets?: Schema$CustomAttributeHistogramRequest[];
    /**
     * Optional. Specifies the simple type of histogram facets, e.g,
     * `COMPANY_SIZE`, `EMPLOYMENT_TYPE` etc. This field is equivalent to
     * GetHistogramRequest.
     */
    simpleHistogramFacets?: string[];
  }
  /**
   * Output only.  Result of a histogram call. The response contains the
   * histogram map for the search type specified by HistogramResult.field. The
   * response is a map of each filter value to the corresponding count of jobs
   * for that filter.
   */
  export interface Schema$HistogramResult {
    /**
     * The Histogram search filters.
     */
    searchType?: string;
    /**
     * A map from the values of field to the number of jobs with that value in
     * this search result.  Key: search type (filter names, such as the
     * companyName).  Values: the count of jobs that match the filter for this
     * search.
     */
    values?: any;
  }
  /**
   * Output only.  Histogram results that matches HistogramFacets specified in
   * SearchJobsRequest.
   */
  export interface Schema$HistogramResults {
    /**
     * Specifies compensation field-based histogram results that matches
     * HistogramFacets.compensation_histogram_requests.
     */
    compensationHistogramResults?: Schema$CompensationHistogramResult[];
    /**
     * Specifies histogram results for custom attributes that matches
     * HistogramFacets.custom_attribute_histogram_facets.
     */
    customAttributeHistogramResults?: Schema$CustomAttributeHistogramResult[];
    /**
     * Specifies histogram results that matches
     * HistogramFacets.simple_histogram_facets.
     */
    simpleHistogramResults?: Schema$HistogramResult[];
  }
  /**
   * A Job resource represents a job posting (also referred to as a &quot;job
   * listing&quot; or &quot;job requisition&quot;). A job belongs to a Company,
   * which is the hiring entity responsible for the job.
   */
  export interface Schema$Job {
    /**
     * Optional but at least one of application_urls, application_email_list or
     * application_instruction must be specified.  Use this field to specify
     * email address(es) to which resumes or applications can be sent.  The
     * maximum number of allowed characters is 255.
     */
    applicationEmailList?: string[];
    /**
     * Optional but at least one of application_urls, application_email_list or
     * application_instruction must be specified.  Use this field to provide
     * instructions, such as &quot;Mail your application to ...&quot;, that a
     * candidate can follow to apply for the job.  This field accepts and
     * sanitizes HTML input, and also accepts bold, italic, ordered list, and
     * unordered list markup tags.  The maximum number of allowed characters is
     * 3,000.
     */
    applicationInstruction?: string;
    /**
     * Optional but at least one of application_urls, application_email_list or
     * application_instruction must be specified.  Use this URL field to direct
     * an applicant to a website, for example to link to an online application
     * form.  The maximum number of allowed characters is 2,000.
     */
    applicationUrls?: string[];
    /**
     * Optional.  The benefits included with the job.
     */
    benefits?: string[];
    /**
     * Output only.  The name of the company listing the job.
     */
    companyDisplayName?: string;
    /**
     * Optional but one of company_name or distributor_company_id must be
     * provided.  The resource name of the company listing the job, such as
     * /companies/foo. This field takes precedence over the distributor-assigned
     * company identifier, distributor_company_id.
     */
    companyName?: string;
    /**
     * Deprecated. Use company_display_name instead.  Output only.  The name of
     * the company listing the job.
     */
    companyTitle?: string;
    /**
     * Optional.  Job compensation information.
     */
    compensationInfo?: Schema$CompensationInfo;
    /**
     * Output only.  The timestamp when this job was created.
     */
    createTime?: string;
    /**
     * Optional.  A map of fields to hold both filterable and non-filterable
     * custom job attributes that are not covered by the provided structured
     * fields.  This field is a more general combination of the deprecated
     * id-based filterable_custom_fields and string-based
     * non_filterable_custom_fields.  The keys of the map are strings up to 64
     * bytes and must match the pattern: a-zA-Z*.  At most 100 filterable and at
     * most 100 unfilterable keys are supported. For filterable `string_values`,
     * across all keys at most 200 values are allowed, with each string no more
     * than 255 characters. For unfilterable `string_values`, the maximum total
     * size of `string_values` across all keys is 50KB.
     */
    customAttributes?: any;
    /**
     * Optional.  The department or functional area within the company with the
     * open position.  The maximum number of allowed characters is 255.
     */
    department?: string;
    /**
     * Required.  The description of the job, which typically includes a
     * multi-paragraph description of the company and related information.
     * Separate fields are provided on the job object for responsibilities,
     * qualifications, and other job characteristics. Use of these separate job
     * fields is recommended.  This field accepts and sanitizes HTML input, and
     * also accepts bold, italic, ordered list, and unordered list markup tags.
     * The maximum number of allowed characters is 100,000.
     */
    description?: string;
    /**
     * Optional but one of company_name or distributor_company_id must be
     * provided.  A unique company identifier that used by job distributors to
     * identify an employer&#39;s company entity. company_name takes precedence
     * over this field, and is the recommended field to use to identify
     * companies.  The maximum number of allowed characters is 255.
     */
    distributorCompanyId?: string;
    /**
     * Optional.  The desired education level for the job, such as
     * &quot;Bachelors&quot;, &quot;Masters&quot;, &quot;Doctorate&quot;.
     */
    educationLevels?: string[];
    /**
     * Optional.  The employment type(s) of a job, for example, full time or
     * part time.
     */
    employmentTypes?: string[];
    /**
     * Optional.  The end date of the job in UTC time zone. Typically this field
     * is used for contracting engagements. Dates prior to 1970/1/1 and invalid
     * date formats are ignored.
     */
    endDate?: Schema$Date;
    /**
     * Optional but strongly recommended to be provided for the best service
     * experience.  The expiration timestamp of the job. After this timestamp,
     * the job is marked as expired, and it no longer appears in search results.
     * The expired job can&#39;t be deleted or listed by the DeleteJob and
     * ListJobs APIs, but it can be retrieved with the GetJob API or updated
     * with the UpdateJob API. An expired job can be updated and opened again by
     * using a future expiration timestamp. It can also remain expired. Updating
     * an expired job to be open fails if there is another existing open job
     * with same requisition_id, company_name and language_code.  The expired
     * jobs are retained in our system for 90 days. However, the overall expired
     * job count cannot exceed 3 times the maximum of open jobs count over the
     * past week, otherwise jobs with earlier expire time are cleaned first.
     * Expired jobs are no longer accessible after they are cleaned out. The
     * format of this field is RFC 3339 date strings. Example:
     * 2000-01-01T00:00:00.999999999Z See
     * [https://www.ietf.org/rfc/rfc3339.txt](https://www.ietf.org/rfc/rfc3339.txt).
     * A valid date range is between 1970-01-01T00:00:00.0Z and
     * 2100-12-31T23:59:59.999Z. Invalid dates are ignored and treated as expire
     * time not provided.  If this value is not provided on job creation or
     * invalid, the job posting expires after 30 days from the job&#39;s
     * creation time. For example, if the job was created on 2017/01/01 13:00AM
     * UTC with an unspecified expiration date, the job expires after 2017/01/31
     * 13:00AM UTC.  If this value is not provided but expiry_date is,
     * expiry_date is used.  If this value is not provided on job update, it
     * depends on the field masks set by UpdateJobRequest.update_job_fields. If
     * the field masks include expiry_time, or the masks are empty meaning that
     * every field is updated, the job posting expires after 30 days from the
     * job&#39;s last update time. Otherwise the expiration date isn&#39;t
     * updated.
     */
    expireTime?: string;
    /**
     * Deprecated. Use expire_time instead.  Optional but strongly recommended
     * to be provided for the best service experience.  The expiration date of
     * the job in UTC time. After 12 am on this date, the job is marked as
     * expired, and it no longer appears in search results. The expired job
     * can&#39;t be deleted or listed by the DeleteJob and ListJobs APIs, but it
     * can be retrieved with the GetJob API or updated with the UpdateJob API.
     * An expired job can be updated and opened again by using a future
     * expiration date. It can also remain expired. Updating an expired job to
     * be open fails if there is another existing open job with same
     * requisition_id, company_name and language_code.  The expired jobs are
     * retained in our system for 90 days. However, the overall expired job
     * count cannot exceed 3 times the maximum of open jobs count over the past
     * week, otherwise jobs with earlier expire time are removed first. Expired
     * jobs are no longer accessible after they are cleaned out.  A valid date
     * range is between 1970/1/1 and 2100/12/31. Invalid dates are ignored and
     * treated as expiry date not provided.  If this value is not provided on
     * job creation or is invalid, the job posting expires after 30 days from
     * the job&#39;s creation time. For example, if the job was created on
     * 2017/01/01 13:00AM UTC with an unspecified expiration date, the job
     * expires after 2017/01/31 13:00AM UTC.  If this value is not provided on
     * job update, it depends on the field masks set by
     * UpdateJobRequest.update_job_fields. If the field masks include
     * expiry_date, or the masks are empty meaning that every field is updated,
     * the job expires after 30 days from the job&#39;s last update time.
     * Otherwise the expiration date isn&#39;t updated.
     */
    expiryDate?: Schema$Date;
    /**
     * Deprecated. Always use compensation_info.  Optional.  Job compensation
     * information.  This field replaces compensation_info.
     */
    extendedCompensationInfo?: Schema$ExtendedCompensationInfo;
    /**
     * Deprecated. Use custom_attributes instead.  Optional.  A map of fields to
     * hold filterable custom job attributes not captured by the standard fields
     * such as job_title, company_name, or level. These custom fields store
     * arbitrary string values, and can be used for purposes not covered by the
     * structured fields. For the best search experience, use of the structured
     * rather than custom fields is recommended.  Data stored in these custom
     * fields fields are indexed and searched against by keyword searches (see
     * SearchJobsRequest.custom_field_filters][]). To list jobs by custom
     * fields, see ListCustomFieldsRequest.field_id.  The map key must be a
     * number between 1-20. If an invalid key is provided on job create or
     * update, an error is returned.
     */
    filterableCustomFields?: any;
    /**
     * Optional.  A description of bonus, commission, and other compensation
     * incentives associated with the job not including salary or pay.  The
     * maximum number of allowed characters is 10,000.
     */
    incentives?: string;
    /**
     * Output only.  Structured locations of the job, resolved from locations.
     */
    jobLocations?: Schema$JobLocation[];
    /**
     * Required.  The title of the job, such as &quot;Software Engineer&quot;
     * The maximum number of allowed characters is 500.
     */
    jobTitle?: string;
    /**
     * Optional.  The language of the posting. This field is distinct from any
     * requirements for fluency that are associated with the job.  Language
     * codes must be in BCP-47 format, such as &quot;en-US&quot; or
     * &quot;sr-Latn&quot;. For more information, see [Tags for Identifying
     * Languages](https://tools.ietf.org/html/bcp47).  The default value is
     * `en-US`.
     */
    languageCode?: string;
    /**
     * Optional.  The experience level associated with the job, such as
     * &quot;Entry Level&quot;.
     */
    level?: string;
    /**
     * Optional but strongly recommended to be provided for the best service
     * experience.  Location(s) where the job is hiring.  Providing the full
     * street address(es) of the hiring location is recommended to enable better
     * API results, including job searches by commute time.  At most 50
     * locations are allowed for best search performance. If a job has more
     * locations, it is suggested to split it into multiple jobs with unique
     * requisition_ids (e.g. &#39;ReqA&#39; becomes &#39;ReqA-1&#39;,
     * &#39;ReqA-2&#39;, etc.) as multiple jobs with the same requisition_id,
     * company_name and language_code are not allowed. If the original
     * requisition_id must be preserved, a custom field should be used for
     * storage. It is also suggested to group the locations that close to each
     * other in the same job for better search experience.  The maximum number
     * of allowed characters is 500.
     */
    locations?: string[];
    /**
     * Required during job update.  Resource name assigned to a job by the API,
     * for example, &quot;/jobs/foo&quot;. Use of this field in job queries and
     * API calls is preferred over the use of requisition_id since this value is
     * unique.
     */
    name?: string;
    /**
     * Optional.  A promotion value of the job, as determined by the client. The
     * value determines the sort order of the jobs returned when searching for
     * jobs using the featured jobs search call, with higher promotional values
     * being returned first and ties being resolved by relevance sort. Only the
     * jobs with a promotionValue &gt;0 are returned in a FEATURED_JOB_SEARCH.
     * Default value is 0, and negative values are treated as 0.
     */
    promotionValue?: number;
    /**
     * Optional.  The date this job was most recently published in UTC format.
     * The default value is the time the request arrives at the server.
     */
    publishDate?: Schema$Date;
    /**
     * Optional.  A description of the qualifications required to perform the
     * job. The use of this field is recommended as an alternative to using the
     * more general description field.  This field accepts and sanitizes HTML
     * input, and also accepts bold, italic, ordered list, and unordered list
     * markup tags.  The maximum number of allowed characters is 10,000.
     */
    qualifications?: string;
    /**
     * Output only.  The URL of a web page that displays job details.
     */
    referenceUrl?: string;
    /**
     * Optional.  The job Region (for example, state, country) throughout which
     * the job is available. If this field is set, a LocationFilter in a search
     * query within the job region finds this job if an exact location match is
     * not specified. If this field is set, setting job locations to the same
     * location level as this field is strongly recommended.
     */
    region?: string;
    /**
     * Required.  The requisition ID, also referred to as the posting ID,
     * assigned by the client to identify a job. This field is intended to be
     * used by clients for client identification and tracking of listings. A job
     * is not allowed to be created if there is another job with the same
     * requisition_id, company_name and language_code.  The maximum number of
     * allowed characters is 225.
     */
    requisitionId?: string;
    /**
     * Optional.  A description of job responsibilities. The use of this field
     * is recommended as an alternative to using the more general description
     * field.  This field accepts and sanitizes HTML input, and also accepts
     * bold, italic, ordered list, and unordered list markup tags.  The maximum
     * number of allowed characters is 10,000.
     */
    responsibilities?: string;
    /**
     * Optional.  The start date of the job in UTC time zone. Typically this
     * field is used for contracting engagements. Dates prior to 1970/1/1 and
     * invalid date formats are ignored.
     */
    startDate?: Schema$Date;
    /**
     * Deprecated. Use custom_attributes instead.  Optional.  A map of fields to
     * hold non-filterable custom job attributes, similar to
     * filterable_custom_fields. These fields are distinct in that the data in
     * these fields are not indexed. Therefore, the client cannot search against
     * them, nor can the client use them to list jobs.  The key of the map can
     * be any valid string.
     */
    unindexedCustomFields?: any;
    /**
     * Output only.  The timestamp when this job was last updated.
     */
    updateTime?: string;
    /**
     * Optional.  The visibility of the job. Defaults to JobVisibility.PRIVATE
     * if not specified. Currently only JobVisibility.PRIVATE is supported.
     */
    visibility?: string;
  }
  /**
   * Input only.  Deprecated. Use JobQuery instead.  The filters required to
   * perform a search query or histogram.
   */
  export interface Schema$JobFilters {
    /**
     * Optional.  The category filter specifies the categories of jobs to search
     * against. See Category for more information.  If a value is not specified,
     * jobs from any category are searched against.  If multiple values are
     * specified, jobs from any of the specified categories are searched
     * against.
     */
    categories?: string[];
    /**
     * Optional.   Allows filtering jobs by commute time with different travel
     * methods (e.g.  driving or public transit). Note: this only works with
     * COMMUTE  MODE. When specified, [JobFilters.location_filters] will be
     * ignored.   Currently we do not support sorting by commute time.
     */
    commuteFilter?: Schema$CommutePreference;
    /**
     * Optional.  The company names filter specifies the company entities to
     * search against.  If a value is not specified, jobs are searched for
     * against all companies.  If multiple values are specified, jobs are
     * searched against the specified companies.  At most 20 company filters are
     * allowed.
     */
    companyNames?: string[];
    /**
     * Optional.  This filter specifies the exact company titles of jobs to
     * search against.  If a value is not specified, jobs within the search
     * results can be associated with any company.  If multiple values are
     * specified, jobs within the search results may be associated with any of
     * the specified companies.  At most 20 company title filters are allowed.
     */
    companyTitles?: string[];
    /**
     * Optional.  This search filter is applied only to Job.compensation_info.
     * For example, if the filter is specified as &quot;Hourly job with per-hour
     * compensation &gt; $15&quot;, only jobs that meet this criteria are
     * searched. If a filter is not defined, all open jobs are searched.
     */
    compensationFilter?: Schema$CompensationFilter;
    /**
     * Optional.  This filter specifies a structured syntax to match against the
     * Job.custom_attributes that are marked as `filterable`.  The syntax for
     * this expression is a subset of Google SQL syntax.  Supported operators
     * are: =, !=, &lt;, &lt;=, &gt;, &gt;= where the left of the operator is a
     * custom field key and the right of the operator is a number or string
     * (surrounded by quotes) value.  Supported functions are
     * LOWER(&lt;field_name&gt;) to perform case insensitive match and
     * EMPTY(&lt;field_name&gt;) to filter on the existence of a key.  Boolean
     * expressions (AND/OR/NOT) are supported up to 3 levels of nesting (For
     * example, &quot;((A AND B AND C) OR NOT D) AND E&quot;), and there can be
     * a maximum of 50 comparisons/functions in the expression. The expression
     * must be &lt; 2000 characters in length.  Sample Query: (key1 =
     * &quot;TEST&quot; OR LOWER(key1)=&quot;test&quot; OR NOT EMPTY(key1)) AND
     * key2 &gt; 100
     */
    customAttributeFilter?: string;
    /**
     * Deprecated. Use custom_attribute_filter instead.  Optional.  This filter
     * specifies searching against custom field values. See
     * Job.filterable_custom_fields for information. The key value specifies a
     * number between 1-20 (the service supports 20 custom fields) corresponding
     * to the desired custom field map value. If an invalid key is provided or
     * specified together with custom_attribute_filter, an error is thrown.
     */
    customFieldFilters?: any;
    /**
     * Optional.  This flag controls the spell-check feature. If false, the
     * service attempts to correct a misspelled query, for example,
     * &quot;enginee&quot; is corrected to &quot;engineer&quot;.  Defaults to
     * false: a spell check is performed.
     */
    disableSpellCheck?: boolean;
    /**
     * Optional.  The employment type filter specifies the employment type of
     * jobs to search against, such as EmploymentType.FULL_TIME.  If a value is
     * not specified, jobs in the search results include any employment type. If
     * multiple values are specified, jobs in the search results include any of
     * the specified employment types.
     */
    employmentTypes?: string[];
    /**
     * Deprecated. Always use compensation_filter.  Optional.  This search
     * filter is applied only to Job.extended_compensation_info. For example, if
     * the filter is specified as &quot;Hourly job with per-hour compensation
     * &gt; $15&quot;, only jobs that meet these criteria are searched. If a
     * filter is not defined, all open jobs are searched.
     */
    extendedCompensationFilter?: Schema$ExtendedCompensationFilter;
    /**
     * Optional.  This filter specifies the locale of jobs to search against,
     * for example, &quot;en-US&quot;.  If a value is not specified, the search
     * results can contain jobs in any locale.   Language codes should be in
     * BCP-47 format, such as &quot;en-US&quot; or &quot;sr-Latn&quot;. For more
     * information, see [Tags for Identifying
     * Languages](https://tools.ietf.org/html/bcp47).  At most 10 language code
     * filters are allowed.
     */
    languageCodes?: string[];
    /**
     * Optional.  The location filter specifies geo-regions containing the jobs
     * to search against. See LocationFilter for more information.  If a
     * location value is not specified, jobs are be retrieved from all
     * locations.  If multiple values are specified, jobs are retrieved from any
     * of the specified locations, and, if different values are specified for
     * the LocationFilter.distance_in_miles parameter, the maximum provided
     * distance is used for all locations.  At most 5 location filters are
     * allowed.
     */
    locationFilters?: Schema$LocationFilter[];
    /**
     * Optional.  Jobs published within a range specified by this filter are
     * searched against, for example, DateRange.PAST_MONTH. If a value is not
     * specified, all open jobs are searched against regardless of the date on
     * which they were published.
     */
    publishDateRange?: string;
    /**
     * Optional.  The query filter contains the keywords that match against the
     * job title, description, and location fields.  The maximum query size is
     * 255 bytes.
     */
    query?: string;
    /**
     * Optional.  This flag controls whether the job search should be restricted
     * to jobs owned by the current user.  Defaults to false that all jobs
     * accessible to the user are searched against.
     */
    tenantJobOnly?: boolean;
  }
  /**
   * Output only.  A resource that represents a location with full geographic
   * information.
   */
  export interface Schema$JobLocation {
    /**
     * An object representing a latitude/longitude pair.
     */
    latLng?: Schema$LatLng;
    /**
     * The type of a location, which corresponds to the address lines field of
     * PostalAddress. For example, &quot;Downtown, Atlanta, GA, USA&quot; has a
     * type of LocationType#NEIGHBORHOOD, and &quot;Kansas City, KS, USA&quot;
     * has a type of LocationType#LOCALITY.
     */
    locationType?: string;
    /**
     * Postal address of the location that includes human readable information,
     * such as postal delivery and payments addresses. Given a postal address, a
     * postal service can deliver items to a premises, P.O. Box, or other
     * delivery location.
     */
    postalAddress?: Schema$PostalAddress;
    /**
     * Radius in meters of the job location. This value is derived from the
     * location bounding box in which a circle with the specified radius
     * centered from LatLng coves the area associated with the job location. For
     * example, currently, &quot;Mountain View, CA, USA&quot; has a radius of
     * 7885.79 meters.
     */
    radiusMeters?: number;
  }
  /**
   * Input only.  The query required to perform a search query or histogram.
   */
  export interface Schema$JobQuery {
    /**
     * Optional.  The category filter specifies the categories of jobs to search
     * against. See Category for more information.  If a value is not specified,
     * jobs from any category are searched against.  If multiple values are
     * specified, jobs from any of the specified categories are searched
     * against.
     */
    categories?: string[];
    /**
     * Optional.   Allows filtering jobs by commute time with different travel
     * methods (e.g.  driving or public transit). Note: this only works with
     * COMMUTE  MODE. When specified, [JobQuery.location_filters] will be
     * ignored.   Currently we do not support sorting by commute time.
     */
    commuteFilter?: Schema$CommutePreference;
    /**
     * Optional.  This filter specifies the exact company display name of jobs
     * to search against.  If a value is not specified, jobs within the search
     * results can be associated with any company.  If multiple values are
     * specified, jobs within the search results may be associated with any of
     * the specified companies.  At most 20 company display name filters are
     * allowed.
     */
    companyDisplayNames?: string[];
    /**
     * Optional.  The company names filter specifies the company entities to
     * search against.  If a value is not specified, jobs are searched for
     * against all companies.  If multiple values are specified, jobs are
     * searched against the specified companies.  At most 20 company filters are
     * allowed.
     */
    companyNames?: string[];
    /**
     * Optional.  This search filter is applied only to Job.compensation_info.
     * For example, if the filter is specified as &quot;Hourly job with per-hour
     * compensation &gt; $15&quot;, only jobs that meet these criteria are
     * searched. If a filter is not defined, all open jobs are searched.
     */
    compensationFilter?: Schema$CompensationFilter;
    /**
     * Optional.  This filter specifies a structured syntax to match against the
     * Job.custom_attributes that are marked as `filterable`.  The syntax for
     * this expression is a subset of Google SQL syntax.  Supported operators
     * are: =, !=, &lt;, &lt;=, &gt;, &gt;= where the left of the operator is a
     * custom field key and the right of the operator is a number or string
     * (surrounded by quotes) value.  Supported functions are
     * LOWER(&lt;field_name&gt;) to perform case insensitive match and
     * EMPTY(&lt;field_name&gt;) to filter on the existence of a key.  Boolean
     * expressions (AND/OR/NOT) are supported up to 3 levels of nesting (for
     * example, &quot;((A AND B AND C) OR NOT D) AND E&quot;), and there can be
     * a maximum of 50 comparisons/functions in the expression. The expression
     * must be &lt; 2000 characters in length.  Sample Query: (key1 =
     * &quot;TEST&quot; OR LOWER(key1)=&quot;test&quot; OR NOT EMPTY(key1)) AND
     * key2 &gt; 100
     */
    customAttributeFilter?: string;
    /**
     * Optional.  This flag controls the spell-check feature. If false, the
     * service attempts to correct a misspelled query, for example,
     * &quot;enginee&quot; is corrected to &quot;engineer&quot;.  Defaults to
     * false: a spell check is performed.
     */
    disableSpellCheck?: boolean;
    /**
     * Optional.  The employment type filter specifies the employment type of
     * jobs to search against, such as EmploymentType.FULL_TIME.  If a value is
     * not specified, jobs in the search results will include any employment
     * type.  If multiple values are specified, jobs in the search results
     * include any of the specified employment types.
     */
    employmentTypes?: string[];
    /**
     * Optional.  This filter specifies the locale of jobs to search against,
     * for example, &quot;en-US&quot;.  If a value is not specified, the search
     * results can contain jobs in any locale.   Language codes should be in
     * BCP-47 format, such as &quot;en-US&quot; or &quot;sr-Latn&quot;. For more
     * information, see [Tags for Identifying
     * Languages](https://tools.ietf.org/html/bcp47).  At most 10 language code
     * filters are allowed.
     */
    languageCodes?: string[];
    /**
     * Optional.  The location filter specifies geo-regions containing the jobs
     * to search against. See LocationFilter for more information.  If a
     * location value is not specified, jobs that fit the other search criteria
     * are retrieved regardless of where they&#39;re located.  If multiple
     * values are specified, jobs are retrieved from any of the specified
     * locations, and, if different values are specified for the
     * LocationFilter.distance_in_miles parameter, the maximum provided distance
     * is used for all locations.  At most 5 location filters are allowed.
     */
    locationFilters?: Schema$LocationFilter[];
    /**
     * Optional.  Jobs published within a range specified by this filter are
     * searched against, for example, DateRange.PAST_MONTH. If a value is not
     * specified, all open jobs are searched against regardless of the date on
     * which they were published.
     */
    publishDateRange?: string;
    /**
     * Optional.  The query string that matches against the job title,
     * description, and location fields.  The maximum query size is 255 bytes.
     */
    query?: string;
    /**
     * Optional.  This flag controls whether the job search should be restricted
     * to jobs owned by the current user.  Defaults to false: all jobs
     * accessible to the user are searched against.
     */
    tenantJobOnly?: boolean;
  }
  /**
   * An object representing a latitude/longitude pair. This is expressed as a
   * pair of doubles representing degrees latitude and degrees longitude. Unless
   * specified otherwise, this must conform to the &lt;a
   * href=&quot;http://www.unoosa.org/pdf/icg/2012/template/WGS_84.pdf&quot;&gt;WGS84
   * standard&lt;/a&gt;. Values must be within normalized ranges.
   */
  export interface Schema$LatLng {
    /**
     * The latitude in degrees. It must be in the range [-90.0, +90.0].
     */
    latitude?: number;
    /**
     * The longitude in degrees. It must be in the range [-180.0, +180.0].
     */
    longitude?: number;
  }
  /**
   * Output only.  The List companies response object.
   */
  export interface Schema$ListCompaniesResponse {
    /**
     * Companies for the current client.
     */
    companies?: Schema$Company[];
    /**
     * Additional information for the API invocation, such as the request
     * tracking id.
     */
    metadata?: Schema$ResponseMetadata;
    /**
     * A token to retrieve the next page of results.
     */
    nextPageToken?: string;
  }
  /**
   * Deprecated. Use ListJobsResponse instead.  Output only.  The List jobs
   * response object.
   */
  export interface Schema$ListCompanyJobsResponse {
    /**
     * The Jobs for a given company.  The maximum number of items returned is
     * based on the limit field provided in the request.
     */
    jobs?: Schema$Job[];
    /**
     * Additional information for the API invocation, such as the request
     * tracking id.
     */
    metadata?: Schema$ResponseMetadata;
    /**
     * A token to retrieve the next page of results.
     */
    nextPageToken?: string;
    /**
     * The total number of open jobs. The result will be empty if
     * ListCompanyJobsRequest.include_jobs_count is not enabled or if no open
     * jobs are available.
     */
    totalSize?: string;
  }
  /**
   * Output only.  List jobs response.
   */
  export interface Schema$ListJobsResponse {
    /**
     * The Jobs for a given company.  The maximum number of items returned is
     * based on the limit field provided in the request.
     */
    jobs?: Schema$Job[];
    /**
     * Additional information for the API invocation, such as the request
     * tracking id.
     */
    metadata?: Schema$ResponseMetadata;
    /**
     * A token to retrieve the next page of results.
     */
    nextPageToken?: string;
  }
  /**
   * Input only.  Geographic region of the search.
   */
  export interface Schema$LocationFilter {
    /**
     * Optional.  The distance from the address in miles to search. The default
     * distance is 20 miles and maximum distance is 5,000 miles.
     */
    distanceInMiles?: number;
    /**
     * Optional.  Allows the client to return jobs without a set location,
     * specifically, telecommuting jobs (telecomuting is considered by the
     * service as a special location. Job.allow_telecommute indicates if a job
     * permits telecommuting. If this field is true, telecommuting jobs are
     * searched, and name and lat_lng are ignored. This filter can be used by
     * itself to search exclusively for telecommuting jobs, or it can be
     * combined with another location filter to search for a combination of job
     * locations, such as &quot;Mountain View&quot; or &quot;telecommuting&quot;
     * jobs. However, when used in combination with other location filters,
     * telecommuting jobs can be treated as less relevant than other jobs in the
     * search response.
     */
    isTelecommute?: boolean;
    /**
     * Optional.  The latitude and longitude of the geographic center from which
     * to search. This field is ignored if `location_name` is provided.
     */
    latLng?: Schema$LatLng;
    /**
     * Optional.  The address name, such as &quot;Mountain View&quot; or
     * &quot;Bay Area&quot;.
     */
    name?: string;
    /**
     * Optional.  CLDR region code of the country/region of the address. This
     * will be used to address ambiguity of the user-input location, e.g.
     * &quot;Liverpool&quot; against &quot;Liverpool, NY, US&quot; or
     * &quot;Liverpool, UK&quot;.  Set this field if all the jobs to search
     * against are from a same region, or jobs are world-wide but the job seeker
     * is from a specific region.  See http://cldr.unicode.org/ and
     * http://www.unicode.org/cldr/charts/30/supplemental/territory_information.html
     * for details. Example: &quot;CH&quot; for Switzerland.
     */
    regionCode?: string;
  }
  /**
   * Output only.  Job entry with metadata inside SearchJobsResponse.
   */
  export interface Schema$MatchingJob {
    /**
     * Commute information which is generated based on specified
     * CommutePreference.
     */
    commuteInfo?: Schema$CommuteInfo;
    /**
     * Job resource that matches the specified SearchJobsRequest.
     */
    job?: Schema$Job;
    /**
     * A summary of the job with core information that&#39;s displayed on the
     * search results listing page.
     */
    jobSummary?: string;
    /**
     * Contains snippets of text from the Job.job_title field that most closely
     * match a search query&#39;s keywords, if available. The matching query
     * keywords are enclosed in HTML bold tags.
     */
    jobTitleSnippet?: string;
    /**
     * Contains snippets of text from the Job.description and similar fields
     * that most closely match a search query&#39;s keywords, if available. All
     * HTML tags in the original fields are stripped when returned in this
     * field, and matching query keywords are enclosed in HTML bold tags.
     */
    searchTextSnippet?: string;
  }
  /**
   * Represents an amount of money with its currency type.
   */
  export interface Schema$Money {
    /**
     * The 3-letter currency code defined in ISO 4217.
     */
    currencyCode?: string;
    /**
     * Number of nano (10^-9) units of the amount. The value must be between
     * -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos`
     * must be positive or zero. If `units` is zero, `nanos` can be positive,
     * zero, or negative. If `units` is negative, `nanos` must be negative or
     * zero. For example $-1.75 is represented as `units`=-1 and
     * `nanos`=-750,000,000.
     */
    nanos?: number;
    /**
     * The whole units of the amount. For example if `currencyCode` is
     * `&quot;USD&quot;`, then 1 unit is one US dollar.
     */
    units?: string;
  }
  /**
   * Input only.  Use this field to specify bucketing option for the histogram
   * search response.
   */
  export interface Schema$NumericBucketingOption {
    /**
     * Required.  Two adjacent values form a histogram bucket. Values should be
     * in ascending order. For example, if [5, 10, 15] are provided, four
     * buckets are created: (-inf, 5), 5, 10), [10, 15), [15, inf). At most 20
     * [buckets_bound is supported.
     */
    bucketBounds?: number[];
    /**
     * Optional.  If set to true, the histogram result includes minimum/maximum
     * value of the numeric field.
     */
    requiresMinMax?: boolean;
  }
  /**
   * Output only.  Custom numeric bucketing result.
   */
  export interface Schema$NumericBucketingResult {
    /**
     * Count within each bucket. Its size is the length of
     * NumericBucketingOption.bucket_bounds plus 1.
     */
    counts?: Schema$BucketizedCount[];
    /**
     * Stores the maximum value of the numeric field. Will be populated only if
     * [NumericBucketingOption.requires_min_max] is set to true.
     */
    maxValue?: number;
    /**
     * Stores the minimum value of the numeric field. Will be populated only if
     * [NumericBucketingOption.requires_min_max] is set to true.
     */
    minValue?: number;
  }
  /**
   * Represents a postal address, e.g. for postal delivery or payments
   * addresses. Given a postal address, a postal service can deliver items to a
   * premise, P.O. Box or similar. It is not intended to model geographical
   * locations (roads, towns, mountains).  In typical usage an address would be
   * created via user input or from importing existing data, depending on the
   * type of process.  Advice on address input / editing:  - Use an i18n-ready
   * address widget such as    https://github.com/googlei18n/libaddressinput) -
   * Users should not be presented with UI elements for input or editing of
   * fields outside countries where that field is used.  For more guidance on
   * how to use this schema, please see:
   * https://support.google.com/business/answer/6397478
   */
  export interface Schema$PostalAddress {
    /**
     * Unstructured address lines describing the lower levels of an address.
     * Because values in address_lines do not have type information and may
     * sometimes contain multiple values in a single field (e.g. &quot;Austin,
     * TX&quot;), it is important that the line order is clear. The order of
     * address lines should be &quot;envelope order&quot; for the country/region
     * of the address. In places where this can vary (e.g. Japan),
     * address_language is used to make it explicit (e.g. &quot;ja&quot; for
     * large-to-small ordering and &quot;ja-Latn&quot; or &quot;en&quot; for
     * small-to-large). This way, the most specific line of an address can be
     * selected based on the language.  The minimum permitted structural
     * representation of an address consists of a region_code with all remaining
     * information placed in the address_lines. It would be possible to format
     * such an address very approximately without geocoding, but no semantic
     * reasoning could be made about any of the address components until it was
     * at least partially resolved.  Creating an address only containing a
     * region_code and address_lines, and then geocoding is the recommended way
     * to handle completely unstructured addresses (as opposed to guessing which
     * parts of the address should be localities or administrative areas).
     */
    addressLines?: string[];
    /**
     * Optional. Highest administrative subdivision which is used for postal
     * addresses of a country or region. For example, this can be a state, a
     * province, an oblast, or a prefecture. Specifically, for Spain this is the
     * province and not the autonomous community (e.g. &quot;Barcelona&quot; and
     * not &quot;Catalonia&quot;). Many countries don&#39;t use an
     * administrative area in postal addresses. E.g. in Switzerland this should
     * be left unpopulated.
     */
    administrativeArea?: string;
    /**
     * Optional. BCP-47 language code of the contents of this address (if
     * known). This is often the UI language of the input form or is expected to
     * match one of the languages used in the address&#39; country/region, or
     * their transliterated equivalents. This can affect formatting in certain
     * countries, but is not critical to the correctness of the data and will
     * never affect any validation or other non-formatting related operations.
     * If this value is not known, it should be omitted (rather than specifying
     * a possibly incorrect default).  Examples: &quot;zh-Hant&quot;,
     * &quot;ja&quot;, &quot;ja-Latn&quot;, &quot;en&quot;.
     */
    languageCode?: string;
    /**
     * Optional. Generally refers to the city/town portion of the address.
     * Examples: US city, IT comune, UK post town. In regions of the world where
     * localities are not well defined or do not fit into this structure well,
     * leave locality empty and use address_lines.
     */
    locality?: string;
    /**
     * Optional. The name of the organization at the address.
     */
    organization?: string;
    /**
     * Optional. Postal code of the address. Not all countries use or require
     * postal codes to be present, but where they are used, they may trigger
     * additional validation with other parts of the address (e.g. state/zip
     * validation in the U.S.A.).
     */
    postalCode?: string;
    /**
     * Optional. The recipient at the address. This field may, under certain
     * circumstances, contain multiline information. For example, it might
     * contain &quot;care of&quot; information.
     */
    recipients?: string[];
    /**
     * Required. CLDR region code of the country/region of the address. This is
     * never inferred and it is up to the user to ensure the value is correct.
     * See http://cldr.unicode.org/ and
     * http://www.unicode.org/cldr/charts/30/supplemental/territory_information.html
     * for details. Example: &quot;CH&quot; for Switzerland.
     */
    regionCode?: string;
    /**
     * The schema revision of the `PostalAddress`. This must be set to 0, which
     * is the latest revision.  All new revisions **must** be backward
     * compatible with old revisions.
     */
    revision?: number;
    /**
     * Optional. Additional, country-specific, sorting code. This is not used in
     * most regions. Where it is used, the value is either a string like
     * &quot;CEDEX&quot;, optionally followed by a number (e.g. &quot;CEDEX
     * 7&quot;), or just a number alone, representing the &quot;sector
     * code&quot; (Jamaica), &quot;delivery area indicator&quot; (Malawi) or
     * &quot;post office indicator&quot; (e.g. Côte d&#39;Ivoire).
     */
    sortingCode?: string;
    /**
     * Optional. Sublocality of the address. For example, this can be
     * neighborhoods, boroughs, districts.
     */
    sublocality?: string;
  }
  /**
   * Input only.  Meta information related to the job searcher or entity
   * conducting the job search. This information is used to improve the
   * performance of the service.
   */
  export interface Schema$RequestMetadata {
    /**
     * Optional.  The type of device used by the job seeker at the time of the
     * call to the service.
     */
    deviceInfo?: Schema$DeviceInfo;
    /**
     * Required.  The client-defined scope or source of the service call, which
     * typically is the domain on which the service has been implemented and is
     * currently being run.  For example, if the service is being run by client
     * &lt;em&gt;Foo, Inc.&lt;/em&gt;, on job board www.foo.com and career site
     * www.bar.com, then this field is set to &quot;foo.com&quot; for use on the
     * job board, and &quot;bar.com&quot; for use on the career site.  If this
     * field is not available for some reason, please send &quot;UNKNOWN&quot;.
     */
    domain?: string;
    /**
     * Required.  A unique session identification string. A session is defined
     * as the duration of an end user&#39;s interaction with the service over a
     * period. Obfuscate this field for privacy concerns before providing it to
     * the API.  If this field is not available for some reason, please send
     * &quot;UNKNOWN&quot;.
     */
    sessionId?: string;
    /**
     * Required.  A unique user identification string, as determined by the
     * client. The client is responsible for ensuring client-level uniqueness of
     * this value in order to have the strongest positive impact on search
     * quality. Obfuscate this field for privacy concerns before providing it to
     * the service.  If this field is not available for some reason, please send
     * &quot;UNKNOWN&quot;.
     */
    userId?: string;
  }
  /**
   * Output only.  Additional information returned to client, such as debugging
   * information.
   */
  export interface Schema$ResponseMetadata {
    /**
     * Identifiers for the versions of the search algorithm used during this API
     * invocation if multiple algorithms are used. The default value is empty.
     * For search response only.
     */
    experimentIdList?: number[];
    /**
     * For search response only. Indicates the mode of a performed search.
     */
    mode?: string;
    /**
     * A unique id associated with this call. This id is logged for tracking
     * purposes.
     */
    requestId?: string;
  }
  /**
   * Input only.  The Request body of the `SearchJobs` call.
   */
  export interface Schema$SearchJobsRequest {
    /**
     * Deprecated. Any value provided in this field will be ignored.  Optional.
     * Controls whether to disable relevance thresholding. Relevance
     * thresholding removes jobs that have low relevance in search results, for
     * example, removing &quot;Assistant to the CEO&quot; positions from the
     * search results of a search for &quot;CEO&quot;.  Disabling relevance
     * thresholding improves the accuracy of subsequent search requests.
     * Defaults to false.
     */
    disableRelevanceThresholding?: boolean;
    /**
     * Optional.  Controls whether to broaden the search when it produces sparse
     * results. Broadened queries append results to the end of the matching
     * results list.  Defaults to false.
     */
    enableBroadening?: boolean;
    /**
     * Optional.  Controls if the search job request requires the return of a
     * precise count of the first 300 results. Setting this to `true` ensures
     * consistency in the number of results per page. Best practice is to set
     * this value to true if a client allows users to jump directly to a
     * non-sequential search results page.  Enabling this flag may adversely
     * impact performance.  Defaults to false.
     */
    enablePreciseResultSize?: boolean;
    /**
     * Deprecated. Use query instead.  Optional.  Restrictions on the scope of
     * the search request, such as filtering by location.
     */
    filters?: Schema$JobFilters;
    /**
     * Optional.  Restrictions on what fields to perform histogram on, such as
     * `COMPANY_SIZE` etc.
     */
    histogramFacets?: Schema$HistogramFacets;
    /**
     * Optional.  The number of job attributes that is returned for jobs in the
     * search response. Defaults to JobView.SMALL if no value is specified.
     */
    jobView?: string;
    /**
     * Required.  Mode of a search.
     */
    mode?: string;
    /**
     * Optional.  An integer that specifies the current offset (i.e. starting
     * result) in search results. This field is only considered if page_token is
     * unset.  For example, 0 means to  return results starting from the first
     * matching job, and 10 means to return from the 11th job. This can be used
     * for pagination, (for example, pageSize = 10 and offset = 10 means to
     * return from the second page).
     */
    offset?: number;
    /**
     * Deprecated. Use sort_by instead.  Optional.  The criteria that determine
     * how search results are sorted. Defaults to SortBy.RELEVANCE_DESC if no
     * value is specified.
     */
    orderBy?: string;
    /**
     * Optional.  A limit on the number of jobs returned in the search results.
     * Increasing this value above the default value of 10 can increase search
     * response time. The value can be between 1 and 100.
     */
    pageSize?: number;
    /**
     * Optional.  The token that specifies the current offset within search
     * results. See SearchJobsResponse.next_page_token for an explanation of how
     * to obtain the next set of query results.
     */
    pageToken?: string;
    /**
     * Optional.  Query used to search against jobs, such as keyword, location
     * filters, etc.
     */
    query?: Schema$JobQuery;
    /**
     * Required.  The meta information collected about the job searcher, used to
     * improve the search quality of the service.. The identifiers, (such as
     * `user_id`) are provided by users, and must be unique and consistent.
     */
    requestMetadata?: Schema$RequestMetadata;
    /**
     * Optional.  The criteria that determine how search results are sorted.
     * Defaults to SortBy.RELEVANCE_DESC if no value is specified.
     */
    sortBy?: string;
  }
  /**
   * Output only.  Response for SearchJob method.
   */
  export interface Schema$SearchJobsResponse {
    /**
     * The commute filter that the service applied to the specified query. This
     * information is only available when query has a valid CommutePreference.
     */
    appliedCommuteFilter?: Schema$CommutePreference;
    /**
     * The location filters that the service applied to the specified query. If
     * any filters are lat-lng based, the JobLocation.location_type is
     * JobLocation.LocationType#LOCATION_TYPE_UNSPECIFIED.
     */
    appliedJobLocationFilters?: Schema$JobLocation[];
    /**
     * An estimation of the number of jobs that match the specified query.  This
     * number is not guaranteed to be accurate. For accurate results,
     * seenenable_precise_result_size.
     */
    estimatedTotalSize?: string;
    /**
     * The histogram results that match with specified
     * SearchJobsRequest.HistogramFacets.
     */
    histogramResults?: Schema$HistogramResults;
    /**
     * Corresponds to SearchJobsRequest.job_view.
     */
    jobView?: string;
    /**
     * The Job entities that match the specified SearchJobsRequest.
     */
    matchingJobs?: Schema$MatchingJob[];
    /**
     * Additional information for the API invocation, such as the request
     * tracking id.
     */
    metadata?: Schema$ResponseMetadata;
    /**
     * The token that specifies the starting position of the next page of
     * results. This field is empty if there are no more results.
     */
    nextPageToken?: string;
    /**
     * If query broadening is enabled, we may append additional results from the
     * broadened query. This number indicates how many of the jobs returned in
     * the jobs field are from the broadened query. These results are always at
     * the end of the jobs list. In particular, a value of 0 means all the jobs
     * in the jobs list are from the original (without broadening) query. If
     * this field is non-zero, subsequent requests with offset after this result
     * set should contain all broadened results.
     */
    numJobsFromBroadenedQuery?: number;
    /**
     * The spell checking result, and correction.
     */
    spellResult?: Schema$SpellingCorrection;
    /**
     * The precise result count, which is available only if the client set
     * enable_precise_result_size to `true` or if the response is the last page
     * of results. Otherwise, the value will be `-1`.
     */
    totalSize?: string;
  }
  /**
   * Output only.  Spell check result.
   */
  export interface Schema$SpellingCorrection {
    /**
     * Indicates if the query was corrected by the spell checker.
     */
    corrected?: boolean;
    /**
     * Correction output consisting of the corrected keyword string.
     */
    correctedText?: string;
  }
  /**
   * Represents array of string values.
   */
  export interface Schema$StringValues {
    /**
     * Required.  String values.
     */
    values?: string[];
  }
  /**
   * Input only.  Update job request.
   */
  export interface Schema$UpdateJobRequest {
    /**
     * If set to `true`, the service will not attempt resolve a more precise
     * address for the job.
     */
    disableStreetAddressResolution?: boolean;
    /**
     * Required.  The Job to be updated.
     */
    job?: Schema$Job;
    /**
     * Optional but strongly recommended to be provided for the best service
     * experience.  If update_job_fields is provided, only the specified fields
     * in job are updated. Otherwise all the fields are updated.  A field mask
     * to restrict the fields that are updated. Valid values are:  * jobTitle *
     * employmentTypes * description * applicationUrls * applicationEmailList *
     * applicationInstruction * responsibilities * qualifications *
     * educationLevels * level * department * startDate * endDate *
     * compensationInfo * incentives * languageCode * benefits * expireTime *
     * customAttributes * visibility * publishDate * promotionValue * locations
     * * region * expiryDate (deprecated) * filterableCustomFields (deprecated)
     * * unindexedCustomFields (deprecated)
     */
    updateJobFields?: string;
  }


  export class Resource$Companies {
    root: Jobs;
    jobs: Resource$Companies$Jobs;
    constructor(root: Jobs) {
      this.root = root;
      this.getRoot.bind(this);
      this.jobs = new Resource$Companies$Jobs(root);
    }

    getRoot() {
      return this.root;
    }


    /**
     * jobs.companies.create
     * @desc Creates a new company entity.
     * @alias jobs.companies.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().Company} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(params?: Params$Resource$Companies$Create, options?: MethodOptions):
        AxiosPromise<Schema$Company>;
    create(
        params: Params$Resource$Companies$Create,
        options: MethodOptions|BodyResponseCallback<Schema$Company>,
        callback: BodyResponseCallback<Schema$Company>): void;
    create(
        params: Params$Resource$Companies$Create,
        callback: BodyResponseCallback<Schema$Company>): void;
    create(callback: BodyResponseCallback<Schema$Company>): void;
    create(
        paramsOrCallback?: Params$Resource$Companies$Create|
        BodyResponseCallback<Schema$Company>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Company>,
        callback?: BodyResponseCallback<Schema$Company>):
        void|AxiosPromise<Schema$Company> {
      let params = (paramsOrCallback || {}) as Params$Resource$Companies$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Companies$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://jobs.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2/companies').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Company>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Company>(parameters);
      }
    }


    /**
     * jobs.companies.delete
     * @desc Deletes the specified company.
     * @alias jobs.companies.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required.  The resource name of the company to be deleted, such as, "companies/0000aaaa-1111-bbbb-2222-cccc3333dddd".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(params?: Params$Resource$Companies$Delete, options?: MethodOptions):
        AxiosPromise<Schema$Empty>;
    delete(
        params: Params$Resource$Companies$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params: Params$Resource$Companies$Delete,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        paramsOrCallback?: Params$Resource$Companies$Delete|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as Params$Resource$Companies$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Companies$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://jobs.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * jobs.companies.get
     * @desc Retrieves the specified company.
     * @alias jobs.companies.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required.  Resource name of the company to retrieve, such as "companies/0000aaaa-1111-bbbb-2222-cccc3333dddd".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Companies$Get,
        options?: MethodOptions): AxiosPromise<Schema$Company>;
    get(params: Params$Resource$Companies$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Company>,
        callback: BodyResponseCallback<Schema$Company>): void;
    get(params: Params$Resource$Companies$Get,
        callback: BodyResponseCallback<Schema$Company>): void;
    get(callback: BodyResponseCallback<Schema$Company>): void;
    get(paramsOrCallback?: Params$Resource$Companies$Get|
        BodyResponseCallback<Schema$Company>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Company>,
        callback?: BodyResponseCallback<Schema$Company>):
        void|AxiosPromise<Schema$Company> {
      let params = (paramsOrCallback || {}) as Params$Resource$Companies$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Companies$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://jobs.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Company>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Company>(parameters);
      }
    }


    /**
     * jobs.companies.list
     * @desc Lists all companies associated with a Cloud Job Discovery account.
     * @alias jobs.companies.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.mustHaveOpenJobs Optional.  Set to true if the companies request must have open jobs.  Defaults to false.  If true, at most page_size of companies are fetched, among which only those with open jobs are returned.
     * @param {integer=} params.pageSize Optional.  The maximum number of companies to be returned, at most 100. Default is 100 if a non-positive number is provided.
     * @param {string=} params.pageToken Optional.  The starting indicator from which to return results.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Companies$List, options?: MethodOptions):
        AxiosPromise<Schema$ListCompaniesResponse>;
    list(
        params: Params$Resource$Companies$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListCompaniesResponse>,
        callback: BodyResponseCallback<Schema$ListCompaniesResponse>): void;
    list(
        params: Params$Resource$Companies$List,
        callback: BodyResponseCallback<Schema$ListCompaniesResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListCompaniesResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Companies$List|
        BodyResponseCallback<Schema$ListCompaniesResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListCompaniesResponse>,
        callback?: BodyResponseCallback<Schema$ListCompaniesResponse>):
        void|AxiosPromise<Schema$ListCompaniesResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Companies$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Companies$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://jobs.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2/companies').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListCompaniesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListCompaniesResponse>(parameters);
      }
    }


    /**
     * jobs.companies.patch
     * @desc Updates the specified company. Company names can't be updated. To
     * update a company name, delete the company and all jobs associated with
     * it, and only then re-create them.
     * @alias jobs.companies.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required during company update.  The resource name for a company. This is generated by the service when a company is created, for example, "companies/0000aaaa-1111-bbbb-2222-cccc3333dddd".
     * @param {string=} params.updateCompanyFields Optional but strongly recommended to be provided for the best service experience.  If update_company_fields is provided, only the specified fields in company are updated. Otherwise all the fields are updated.  A field mask to specify the company fields to update. Valid values are:  * displayName * website * imageUrl * companySize * distributorBillingCompanyId * companyInfoSources * careerPageLink * hiringAgency * hqLocation * eeoText * keywordSearchableCustomAttributes * title (deprecated) * keywordSearchableCustomFields (deprecated)
     * @param {().Company} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(params?: Params$Resource$Companies$Patch, options?: MethodOptions):
        AxiosPromise<Schema$Company>;
    patch(
        params: Params$Resource$Companies$Patch,
        options: MethodOptions|BodyResponseCallback<Schema$Company>,
        callback: BodyResponseCallback<Schema$Company>): void;
    patch(
        params: Params$Resource$Companies$Patch,
        callback: BodyResponseCallback<Schema$Company>): void;
    patch(callback: BodyResponseCallback<Schema$Company>): void;
    patch(
        paramsOrCallback?: Params$Resource$Companies$Patch|
        BodyResponseCallback<Schema$Company>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Company>,
        callback?: BodyResponseCallback<Schema$Company>):
        void|AxiosPromise<Schema$Company> {
      let params = (paramsOrCallback || {}) as Params$Resource$Companies$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Companies$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://jobs.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Company>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Company>(parameters);
      }
    }
  }

  export interface Params$Resource$Companies$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$Company;
  }
  export interface Params$Resource$Companies$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required.  The resource name of the company to be deleted, such as,
     * "companies/0000aaaa-1111-bbbb-2222-cccc3333dddd".
     */
    name?: string;
  }
  export interface Params$Resource$Companies$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required.  Resource name of the company to retrieve, such as
     * "companies/0000aaaa-1111-bbbb-2222-cccc3333dddd".
     */
    name?: string;
  }
  export interface Params$Resource$Companies$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Optional.  Set to true if the companies request must have open jobs.
     * Defaults to false.  If true, at most page_size of companies are fetched,
     * among which only those with open jobs are returned.
     */
    mustHaveOpenJobs?: boolean;
    /**
     * Optional.  The maximum number of companies to be returned, at most 100.
     * Default is 100 if a non-positive number is provided.
     */
    pageSize?: number;
    /**
     * Optional.  The starting indicator from which to return results.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Companies$Patch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required during company update.  The resource name for a company. This is
     * generated by the service when a company is created, for example,
     * "companies/0000aaaa-1111-bbbb-2222-cccc3333dddd".
     */
    name?: string;
    /**
     * Optional but strongly recommended to be provided for the best service
     * experience.  If update_company_fields is provided, only the specified
     * fields in company are updated. Otherwise all the fields are updated.  A
     * field mask to specify the company fields to update. Valid values are:  *
     * displayName * website * imageUrl * companySize *
     * distributorBillingCompanyId * companyInfoSources * careerPageLink *
     * hiringAgency * hqLocation * eeoText * keywordSearchableCustomAttributes *
     * title (deprecated) * keywordSearchableCustomFields (deprecated)
     */
    updateCompanyFields?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Company;
  }

  export class Resource$Companies$Jobs {
    root: Jobs;
    constructor(root: Jobs) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * jobs.companies.jobs.list
     * @desc Deprecated. Use ListJobs instead.  Lists all jobs associated with a
     * company.
     * @alias jobs.companies.jobs.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.companyName Required.  The resource name of the company that owns the jobs to be listed, such as, "companies/0000aaaa-1111-bbbb-2222-cccc3333dddd".
     * @param {boolean=} params.idsOnly Optional.  If set to `true`, only job ID, job requisition ID and language code will be returned.  A typical use is to synchronize job repositories.  Defaults to false.
     * @param {boolean=} params.includeJobsCount Deprecated. Please DO NOT use this field except for small companies. Suggest counting jobs page by page instead.  Optional.  Set to true if the total number of open jobs is to be returned.  Defaults to false.
     * @param {string=} params.jobRequisitionId Optional.  The requisition ID, also known as posting ID, assigned by the company to the job.  The number of allowable characters is 225.
     * @param {integer=} params.pageSize Optional.  The maximum number of jobs to be returned per page of results.  If ids_only is set to true, the maximum allowed page size is 1000. Otherwise, the maximum allowed page size is 100.  Default is 100 if empty or a number < 1 is specified.
     * @param {string=} params.pageToken Optional.  The starting point of a query result.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Companies$Jobs$List, options?: MethodOptions):
        AxiosPromise<Schema$ListCompanyJobsResponse>;
    list(
        params: Params$Resource$Companies$Jobs$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListCompanyJobsResponse>,
        callback: BodyResponseCallback<Schema$ListCompanyJobsResponse>): void;
    list(
        params: Params$Resource$Companies$Jobs$List,
        callback: BodyResponseCallback<Schema$ListCompanyJobsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListCompanyJobsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Companies$Jobs$List|
        BodyResponseCallback<Schema$ListCompanyJobsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListCompanyJobsResponse>,
        callback?: BodyResponseCallback<Schema$ListCompanyJobsResponse>):
        void|AxiosPromise<Schema$ListCompanyJobsResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Companies$Jobs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Companies$Jobs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://jobs.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2/{+companyName}/jobs')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['companyName'],
        pathParams: ['companyName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListCompanyJobsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListCompanyJobsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Companies$Jobs$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required.  The resource name of the company that owns the jobs to be
     * listed, such as, "companies/0000aaaa-1111-bbbb-2222-cccc3333dddd".
     */
    companyName?: string;
    /**
     * Optional.  If set to `true`, only job ID, job requisition ID and language
     * code will be returned.  A typical use is to synchronize job repositories.
     * Defaults to false.
     */
    idsOnly?: boolean;
    /**
     * Deprecated. Please DO NOT use this field except for small companies.
     * Suggest counting jobs page by page instead.  Optional.  Set to true if
     * the total number of open jobs is to be returned.  Defaults to false.
     */
    includeJobsCount?: boolean;
    /**
     * Optional.  The requisition ID, also known as posting ID, assigned by the
     * company to the job.  The number of allowable characters is 225.
     */
    jobRequisitionId?: string;
    /**
     * Optional.  The maximum number of jobs to be returned per page of results.
     * If ids_only is set to true, the maximum allowed page size is 1000.
     * Otherwise, the maximum allowed page size is 100.  Default is 100 if empty
     * or a number < 1 is specified.
     */
    pageSize?: number;
    /**
     * Optional.  The starting point of a query result.
     */
    pageToken?: string;
  }



  export class Resource$Jobs {
    root: Jobs;
    constructor(root: Jobs) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * jobs.jobs.batchDelete
     * @desc Deletes a list of Jobs by filter.
     * @alias jobs.jobs.batchDelete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().BatchDeleteJobsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchDelete(
        params?: Params$Resource$Jobs$Batchdelete,
        options?: MethodOptions): AxiosPromise<Schema$Empty>;
    batchDelete(
        params: Params$Resource$Jobs$Batchdelete,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    batchDelete(
        params: Params$Resource$Jobs$Batchdelete,
        callback: BodyResponseCallback<Schema$Empty>): void;
    batchDelete(callback: BodyResponseCallback<Schema$Empty>): void;
    batchDelete(
        paramsOrCallback?: Params$Resource$Jobs$Batchdelete|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as Params$Resource$Jobs$Batchdelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Jobs$Batchdelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://jobs.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2/jobs:batchDelete')
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * jobs.jobs.create
     * @desc Creates a new job.  Typically, the job becomes searchable within 10
     * seconds, but it may take up to 5 minutes.
     * @alias jobs.jobs.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().CreateJobRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(params?: Params$Resource$Jobs$Create, options?: MethodOptions):
        AxiosPromise<Schema$Job>;
    create(
        params: Params$Resource$Jobs$Create,
        options: MethodOptions|BodyResponseCallback<Schema$Job>,
        callback: BodyResponseCallback<Schema$Job>): void;
    create(
        params: Params$Resource$Jobs$Create,
        callback: BodyResponseCallback<Schema$Job>): void;
    create(callback: BodyResponseCallback<Schema$Job>): void;
    create(
        paramsOrCallback?: Params$Resource$Jobs$Create|
        BodyResponseCallback<Schema$Job>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Job>,
        callback?: BodyResponseCallback<Schema$Job>):
        void|AxiosPromise<Schema$Job> {
      let params = (paramsOrCallback || {}) as Params$Resource$Jobs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Jobs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://jobs.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2/jobs').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Job>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Job>(parameters);
      }
    }


    /**
     * jobs.jobs.delete
     * @desc Deletes the specified job.  Typically, the job becomes unsearchable
     * within 10 seconds, but it may take up to 5 minutes.
     * @alias jobs.jobs.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.disableFastProcess Deprecated. This field is not working anymore.  Optional.  If set to true, this call waits for all processing steps to complete before the job is cleaned up. Otherwise, the call returns while some steps are still taking place asynchronously, hence faster.
     * @param {string} params.name Required.  The resource name of the job to be deleted, such as "jobs/11111111".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(params?: Params$Resource$Jobs$Delete, options?: MethodOptions):
        AxiosPromise<Schema$Empty>;
    delete(
        params: Params$Resource$Jobs$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params: Params$Resource$Jobs$Delete,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        paramsOrCallback?: Params$Resource$Jobs$Delete|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as Params$Resource$Jobs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Jobs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://jobs.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * jobs.jobs.deleteByFilter
     * @desc Deprecated. Use BatchDeleteJobs instead.  Deletes the specified job
     * by filter. You can specify whether to synchronously wait for validation,
     * indexing, and general processing to be completed before the response is
     * returned.
     * @alias jobs.jobs.deleteByFilter
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().DeleteJobsByFilterRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    deleteByFilter(
        params?: Params$Resource$Jobs$Deletebyfilter,
        options?: MethodOptions): AxiosPromise<Schema$Empty>;
    deleteByFilter(
        params: Params$Resource$Jobs$Deletebyfilter,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    deleteByFilter(
        params: Params$Resource$Jobs$Deletebyfilter,
        callback: BodyResponseCallback<Schema$Empty>): void;
    deleteByFilter(callback: BodyResponseCallback<Schema$Empty>): void;
    deleteByFilter(
        paramsOrCallback?: Params$Resource$Jobs$Deletebyfilter|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Jobs$Deletebyfilter;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Jobs$Deletebyfilter;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://jobs.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2/jobs:deleteByFilter')
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * jobs.jobs.get
     * @desc Retrieves the specified job, whose status is OPEN or recently
     * EXPIRED within the last 90 days.
     * @alias jobs.jobs.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required.  The resource name of the job to retrieve, such as "jobs/11111111".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Jobs$Get,
        options?: MethodOptions): AxiosPromise<Schema$Job>;
    get(params: Params$Resource$Jobs$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Job>,
        callback: BodyResponseCallback<Schema$Job>): void;
    get(params: Params$Resource$Jobs$Get,
        callback: BodyResponseCallback<Schema$Job>): void;
    get(callback: BodyResponseCallback<Schema$Job>): void;
    get(paramsOrCallback?: Params$Resource$Jobs$Get|
        BodyResponseCallback<Schema$Job>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Job>,
        callback?: BodyResponseCallback<Schema$Job>):
        void|AxiosPromise<Schema$Job> {
      let params = (paramsOrCallback || {}) as Params$Resource$Jobs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Jobs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://jobs.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Job>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Job>(parameters);
      }
    }


    /**
     * jobs.jobs.histogram
     * @desc Deprecated. Use SearchJobsRequest.histogram_facets instead to make
     * a single call with both search and histogram.  Retrieves a histogram for
     * the given GetHistogramRequest. This call provides a structured count of
     * jobs that match against the search query, grouped by specified facets.
     * This call constrains the visibility of jobs present in the database, and
     * only counts jobs the caller has permission to search against.  For
     * example, use this call to generate the number of jobs in the U.S. by
     * state.
     * @alias jobs.jobs.histogram
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().GetHistogramRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    histogram(params?: Params$Resource$Jobs$Histogram, options?: MethodOptions):
        AxiosPromise<Schema$GetHistogramResponse>;
    histogram(
        params: Params$Resource$Jobs$Histogram,
        options: MethodOptions|
        BodyResponseCallback<Schema$GetHistogramResponse>,
        callback: BodyResponseCallback<Schema$GetHistogramResponse>): void;
    histogram(
        params: Params$Resource$Jobs$Histogram,
        callback: BodyResponseCallback<Schema$GetHistogramResponse>): void;
    histogram(callback: BodyResponseCallback<Schema$GetHistogramResponse>):
        void;
    histogram(
        paramsOrCallback?: Params$Resource$Jobs$Histogram|
        BodyResponseCallback<Schema$GetHistogramResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GetHistogramResponse>,
        callback?: BodyResponseCallback<Schema$GetHistogramResponse>):
        void|AxiosPromise<Schema$GetHistogramResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Jobs$Histogram;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Jobs$Histogram;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://jobs.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2/jobs:histogram')
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
        createAPIRequest<Schema$GetHistogramResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GetHistogramResponse>(parameters);
      }
    }


    /**
     * jobs.jobs.list
     * @desc Lists jobs by filter.
     * @alias jobs.jobs.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Required.  The filter string specifies the jobs to be enumerated.  Supported operator: =, AND  The fields eligible for filtering are:  * `companyName` (Required) * `requisitionId` (Optional)  Sample Query:  * companyName = "companies/123" * companyName = "companies/123" AND requisitionId = "req-1"
     * @param {boolean=} params.idsOnly Optional.  If set to `true`, only Job.name, Job.requisition_id and Job.language_code will be returned.  A typical use case is to synchronize job repositories.  Defaults to false.
     * @param {integer=} params.pageSize Optional.  The maximum number of jobs to be returned per page of results.  If ids_only is set to true, the maximum allowed page size is 1000. Otherwise, the maximum allowed page size is 100.  Default is 100 if empty or a number < 1 is specified.
     * @param {string=} params.pageToken Optional.  The starting point of a query result.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Jobs$List, options?: MethodOptions):
        AxiosPromise<Schema$ListJobsResponse>;
    list(
        params: Params$Resource$Jobs$List,
        options: MethodOptions|BodyResponseCallback<Schema$ListJobsResponse>,
        callback: BodyResponseCallback<Schema$ListJobsResponse>): void;
    list(
        params: Params$Resource$Jobs$List,
        callback: BodyResponseCallback<Schema$ListJobsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListJobsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Jobs$List|
        BodyResponseCallback<Schema$ListJobsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListJobsResponse>,
        callback?: BodyResponseCallback<Schema$ListJobsResponse>):
        void|AxiosPromise<Schema$ListJobsResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Jobs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Jobs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://jobs.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2/jobs').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListJobsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListJobsResponse>(parameters);
      }
    }


    /**
     * jobs.jobs.patch
     * @desc Updates the specified job.  Typically, the updated contents become
     * visible in search results within 10 seconds, but it may take up to 5
     * minutes.
     * @alias jobs.jobs.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required during job update.  Resource name assigned to a job by the API, for example, "/jobs/foo". Use of this field in job queries and API calls is preferred over the use of requisition_id since this value is unique.
     * @param {().UpdateJobRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(params?: Params$Resource$Jobs$Patch, options?: MethodOptions):
        AxiosPromise<Schema$Job>;
    patch(
        params: Params$Resource$Jobs$Patch,
        options: MethodOptions|BodyResponseCallback<Schema$Job>,
        callback: BodyResponseCallback<Schema$Job>): void;
    patch(
        params: Params$Resource$Jobs$Patch,
        callback: BodyResponseCallback<Schema$Job>): void;
    patch(callback: BodyResponseCallback<Schema$Job>): void;
    patch(
        paramsOrCallback?: Params$Resource$Jobs$Patch|
        BodyResponseCallback<Schema$Job>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Job>,
        callback?: BodyResponseCallback<Schema$Job>):
        void|AxiosPromise<Schema$Job> {
      let params = (paramsOrCallback || {}) as Params$Resource$Jobs$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Jobs$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://jobs.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Job>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Job>(parameters);
      }
    }


    /**
     * jobs.jobs.search
     * @desc Searches for jobs using the provided SearchJobsRequest.  This call
     * constrains the visibility of jobs present in the database, and only
     * returns jobs that the caller has permission to search against.
     * @alias jobs.jobs.search
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().SearchJobsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    search(params?: Params$Resource$Jobs$Search, options?: MethodOptions):
        AxiosPromise<Schema$SearchJobsResponse>;
    search(
        params: Params$Resource$Jobs$Search,
        options: MethodOptions|BodyResponseCallback<Schema$SearchJobsResponse>,
        callback: BodyResponseCallback<Schema$SearchJobsResponse>): void;
    search(
        params: Params$Resource$Jobs$Search,
        callback: BodyResponseCallback<Schema$SearchJobsResponse>): void;
    search(callback: BodyResponseCallback<Schema$SearchJobsResponse>): void;
    search(
        paramsOrCallback?: Params$Resource$Jobs$Search|
        BodyResponseCallback<Schema$SearchJobsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$SearchJobsResponse>,
        callback?: BodyResponseCallback<Schema$SearchJobsResponse>):
        void|AxiosPromise<Schema$SearchJobsResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Jobs$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Jobs$Search;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://jobs.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2/jobs:search').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$SearchJobsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SearchJobsResponse>(parameters);
      }
    }


    /**
     * jobs.jobs.searchForAlert
     * @desc Searches for jobs using the provided SearchJobsRequest.  This call
     * is intended to use for large, periodic tasks such as email alert
     * processing, and has different algorithmic adjustments that are targeted
     * to passive job seekers.  This call constrains the visibility of jobs
     * present in the database, and only returns jobs the caller has permission
     * to search against.
     * @alias jobs.jobs.searchForAlert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().SearchJobsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    searchForAlert(
        params?: Params$Resource$Jobs$Searchforalert,
        options?: MethodOptions): AxiosPromise<Schema$SearchJobsResponse>;
    searchForAlert(
        params: Params$Resource$Jobs$Searchforalert,
        options: MethodOptions|BodyResponseCallback<Schema$SearchJobsResponse>,
        callback: BodyResponseCallback<Schema$SearchJobsResponse>): void;
    searchForAlert(
        params: Params$Resource$Jobs$Searchforalert,
        callback: BodyResponseCallback<Schema$SearchJobsResponse>): void;
    searchForAlert(callback: BodyResponseCallback<Schema$SearchJobsResponse>):
        void;
    searchForAlert(
        paramsOrCallback?: Params$Resource$Jobs$Searchforalert|
        BodyResponseCallback<Schema$SearchJobsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$SearchJobsResponse>,
        callback?: BodyResponseCallback<Schema$SearchJobsResponse>):
        void|AxiosPromise<Schema$SearchJobsResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Jobs$Searchforalert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Jobs$Searchforalert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://jobs.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2/jobs:searchForAlert')
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
        createAPIRequest<Schema$SearchJobsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SearchJobsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Jobs$Batchdelete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchDeleteJobsRequest;
  }
  export interface Params$Resource$Jobs$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$CreateJobRequest;
  }
  export interface Params$Resource$Jobs$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Deprecated. This field is not working anymore.  Optional.  If set to
     * true, this call waits for all processing steps to complete before the job
     * is cleaned up. Otherwise, the call returns while some steps are still
     * taking place asynchronously, hence faster.
     */
    disableFastProcess?: boolean;
    /**
     * Required.  The resource name of the job to be deleted, such as
     * "jobs/11111111".
     */
    name?: string;
  }
  export interface Params$Resource$Jobs$Deletebyfilter {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$DeleteJobsByFilterRequest;
  }
  export interface Params$Resource$Jobs$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required.  The resource name of the job to retrieve, such as
     * "jobs/11111111".
     */
    name?: string;
  }
  export interface Params$Resource$Jobs$Histogram {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$GetHistogramRequest;
  }
  export interface Params$Resource$Jobs$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required.  The filter string specifies the jobs to be enumerated.
     * Supported operator: =, AND  The fields eligible for filtering are:  *
     * `companyName` (Required) * `requisitionId` (Optional)  Sample Query:  *
     * companyName = "companies/123" * companyName = "companies/123" AND
     * requisitionId = "req-1"
     */
    filter?: string;
    /**
     * Optional.  If set to `true`, only Job.name, Job.requisition_id and
     * Job.language_code will be returned.  A typical use case is to synchronize
     * job repositories.  Defaults to false.
     */
    idsOnly?: boolean;
    /**
     * Optional.  The maximum number of jobs to be returned per page of results.
     * If ids_only is set to true, the maximum allowed page size is 1000.
     * Otherwise, the maximum allowed page size is 100.  Default is 100 if empty
     * or a number < 1 is specified.
     */
    pageSize?: number;
    /**
     * Optional.  The starting point of a query result.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Jobs$Patch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required during job update.  Resource name assigned to a job by the API,
     * for example, "/jobs/foo". Use of this field in job queries and API calls
     * is preferred over the use of requisition_id since this value is unique.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UpdateJobRequest;
  }
  export interface Params$Resource$Jobs$Search {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$SearchJobsRequest;
  }
  export interface Params$Resource$Jobs$Searchforalert {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$SearchJobsRequest;
  }


  export class Resource$V2 {
    root: Jobs;
    constructor(root: Jobs) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * jobs.complete
     * @desc Completes the specified prefix with job keyword suggestions.
     * Intended for use by a job search auto-complete search box.
     * @alias jobs.complete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.companyName Optional.  If provided, restricts completion to the specified company.
     * @param {string=} params.languageCode Required.  The language of the query. This is the BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47).  For CompletionType.JOB_TITLE type, only open jobs with same language_code are returned.  For CompletionType.COMPANY_NAME type, only companies having open jobs with same language_code are returned.  For CompletionType.COMBINED type, only open jobs with same language_code or companies having open jobs with same language_code are returned.
     * @param {integer=} params.pageSize Required.  Completion result count. The maximum allowed page size is 10.
     * @param {string=} params.query Required.  The query used to generate suggestions.
     * @param {string=} params.scope Optional.  The scope of the completion. The defaults is CompletionScope.PUBLIC.
     * @param {string=} params.type Optional.  The completion topic. The default is CompletionType.COMBINED.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    complete(params?: Params$Resource$V2$Complete, options?: MethodOptions):
        AxiosPromise<Schema$CompleteQueryResponse>;
    complete(
        params: Params$Resource$V2$Complete,
        options: MethodOptions|
        BodyResponseCallback<Schema$CompleteQueryResponse>,
        callback: BodyResponseCallback<Schema$CompleteQueryResponse>): void;
    complete(
        params: Params$Resource$V2$Complete,
        callback: BodyResponseCallback<Schema$CompleteQueryResponse>): void;
    complete(callback: BodyResponseCallback<Schema$CompleteQueryResponse>):
        void;
    complete(
        paramsOrCallback?: Params$Resource$V2$Complete|
        BodyResponseCallback<Schema$CompleteQueryResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$CompleteQueryResponse>,
        callback?: BodyResponseCallback<Schema$CompleteQueryResponse>):
        void|AxiosPromise<Schema$CompleteQueryResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$V2$Complete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$V2$Complete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://jobs.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2:complete').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$CompleteQueryResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CompleteQueryResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$V2$Complete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Optional.  If provided, restricts completion to the specified company.
     */
    companyName?: string;
    /**
     * Required.  The language of the query. This is the BCP-47 language code,
     * such as "en-US" or "sr-Latn". For more information, see [Tags for
     * Identifying Languages](https://tools.ietf.org/html/bcp47).  For
     * CompletionType.JOB_TITLE type, only open jobs with same language_code are
     * returned.  For CompletionType.COMPANY_NAME type, only companies having
     * open jobs with same language_code are returned.  For
     * CompletionType.COMBINED type, only open jobs with same language_code or
     * companies having open jobs with same language_code are returned.
     */
    languageCode?: string;
    /**
     * Required.  Completion result count. The maximum allowed page size is 10.
     */
    pageSize?: number;
    /**
     * Required.  The query used to generate suggestions.
     */
    query?: string;
    /**
     * Optional.  The scope of the completion. The defaults is
     * CompletionScope.PUBLIC.
     */
    scope?: string;
    /**
     * Optional.  The completion topic. The default is CompletionType.COMBINED.
     */
    type?: string;
  }
}
