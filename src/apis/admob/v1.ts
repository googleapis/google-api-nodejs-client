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

export namespace admob_v1 {
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
   * AdMob API
   *
   * The Google AdMob API lets you programmatically get reports on earnings.
   *
   * @example
   * const {google} = require('googleapis');
   * const admob = google.admob('v1');
   *
   * @namespace admob
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Admob
   */
  export class Admob {
    context: APIRequestContext;
    accounts: Resource$Accounts;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.accounts = new Resource$Accounts(this.context);
    }
  }

  /**
   * Represents a whole or partial calendar date, e.g. a birthday. The time of day and time zone are either specified elsewhere or are not significant. The date is relative to the Proleptic Gregorian Calendar. This can represent:  * A full date, with non-zero year, month and day values * A month and day value, with a zero year, e.g. an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, e.g. a credit card expiration date  Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`.
   */
  export interface Schema$Date {
    /**
     * Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a year by itself or a year and month where the day is not significant.
     */
    day?: number | null;
    /**
     * Month of year. Must be from 1 to 12, or 0 if specifying a year without a month and day.
     */
    month?: number | null;
    /**
     * Year of date. Must be from 1 to 9999, or 0 if specifying a date without a year.
     */
    year?: number | null;
  }
  /**
   * Specification of a single date range. Both dates are inclusive.
   */
  export interface Schema$DateRange {
    /**
     * End date of the date range, inclusive. Must be greater than or equal to the start date.
     */
    endDate?: Schema$Date;
    /**
     * Start date of the date range, inclusive. Must be less than or equal to the end date.
     */
    startDate?: Schema$Date;
  }
  /**
   * Request to generate an AdMob Mediation report.
   */
  export interface Schema$GenerateMediationReportRequest {
    /**
     * Network report specification.
     */
    reportSpec?: Schema$MediationReportSpec;
  }
  /**
   * The streaming response for the AdMob Mediation report where the first response contains the report header, then a stream of row responses, and finally a footer as the last response message.  For example:      [{       &quot;header&quot;: {         &quot;date_range&quot;: {           &quot;start_date&quot;: {&quot;year&quot;: 2018, &quot;month&quot;: 9, &quot;day&quot;: 1},           &quot;end_date&quot;: {&quot;year&quot;: 2018, &quot;month&quot;: 9, &quot;day&quot;: 1}         },         &quot;localization_settings&quot;: {           &quot;currency_code&quot;: &quot;USD&quot;,           &quot;language_code&quot;: &quot;en-US&quot;         }       }     },     {       &quot;row&quot;: {         &quot;dimension_values&quot;: {           &quot;DATE&quot;: {&quot;value&quot;: &quot;20180918&quot;},           &quot;APP&quot;: {             &quot;value&quot;: &quot;ca-app-pub-8123415297019784~1001342552&quot;,              &quot;display_label&quot;: &quot;My app name!&quot;           }         },         &quot;metric_values&quot;: {           &quot;ESTIMATED_EARNINGS&quot;: {&quot;decimal_value&quot;: &quot;1324746&quot;}         }       }     },     {       &quot;footer&quot;: {&quot;matching_row_count&quot;: 1}     }]
   */
  export interface Schema$GenerateMediationReportResponse {
    /**
     * Additional information about the generated report, such as warnings about the data.
     */
    footer?: Schema$ReportFooter;
    /**
     * Report generation settings that describes the report contents, such as the report date range and localization settings.
     */
    header?: Schema$ReportHeader;
    /**
     * Actual report data.
     */
    row?: Schema$ReportRow;
  }
  /**
   * Request to generate an AdMob Network report.
   */
  export interface Schema$GenerateNetworkReportRequest {
    /**
     * Network report specification.
     */
    reportSpec?: Schema$NetworkReportSpec;
  }
  /**
   * The streaming response for the AdMob Network report where the first response contains the report header, then a stream of row responses, and finally a footer as the last response message.  For example:      [{       &quot;header&quot;: {         &quot;dateRange&quot;: {           &quot;startDate&quot;: {&quot;year&quot;: 2018, &quot;month&quot;: 9, &quot;day&quot;: 1},           &quot;endDate&quot;: {&quot;year&quot;: 2018, &quot;month&quot;: 9, &quot;day&quot;: 1}         },         &quot;localizationSettings&quot;: {           &quot;currencyCode&quot;: &quot;USD&quot;,           &quot;languageCode&quot;: &quot;en-US&quot;         }       }     },     {       &quot;row&quot;: {         &quot;dimensionValues&quot;: {           &quot;DATE&quot;: {&quot;value&quot;: &quot;20180918&quot;},           &quot;APP&quot;: {             &quot;value&quot;: &quot;ca-app-pub-8123415297019784~1001342552&quot;,              displayLabel: &quot;My app name!&quot;           }         },         &quot;metricValues&quot;: {           &quot;ESTIMATED_EARNINGS&quot;: {&quot;microsValue&quot;: 6500000}         }       }     },     {       &quot;footer&quot;: {&quot;matchingRowCount&quot;: 1}     }]
   */
  export interface Schema$GenerateNetworkReportResponse {
    /**
     * Additional information about the generated report, such as warnings about the data.
     */
    footer?: Schema$ReportFooter;
    /**
     * Report generation settings that describes the report contents, such as the report date range and localization settings.
     */
    header?: Schema$ReportHeader;
    /**
     * Actual report data.
     */
    row?: Schema$ReportRow;
  }
  /**
   * Response for the publisher account list request.
   */
  export interface Schema$ListPublisherAccountsResponse {
    /**
     * Publisher that the client credentials can access.
     */
    account?: Schema$PublisherAccount[];
    /**
     * If not empty, indicates that there might be more accounts for the request; you must pass this value in a new `ListPublisherAccountsRequest`.
     */
    nextPageToken?: string | null;
  }
  /**
   * Localization settings for reports, such as currency and language. It affects how metrics are calculated.
   */
  export interface Schema$LocalizationSettings {
    /**
     * Currency code of the earning related metrics, which is the 3-letter code defined in ISO 4217. The daily average rate is used for the currency conversion. Defaults to the account currency code if unspecified.
     */
    currencyCode?: string | null;
    /**
     * Language used for any localized text, such as some dimension value display labels. The language tag defined in the IETF BCP47. Defaults to &#39;en-US&#39; if unspecified.
     */
    languageCode?: string | null;
  }
  /**
   * The specification for generating an AdMob Mediation report. For example, the specification to get observed ECPM sliced by ad source and app for the &#39;US&#39; and &#39;CN&#39; countries can look like the following example:      {       &quot;date_range&quot;: {         &quot;start_date&quot;: {&quot;year&quot;: 2018, &quot;month&quot;: 9, &quot;day&quot;: 1},         &quot;end_date&quot;: {&quot;year&quot;: 2018, &quot;month&quot;: 9, &quot;day&quot;: 30}       },       &quot;dimensions&quot;: [&quot;AD_SOURCE&quot;, &quot;APP&quot;, &quot;COUNTRY&quot;],       &quot;metrics&quot;: [&quot;OBSERVED_ECPM&quot;],       &quot;dimension_filters&quot;: [         {           &quot;dimension&quot;: &quot;COUNTRY&quot;,           &quot;matches_any&quot;: {&quot;values&quot;: [{&quot;value&quot;: &quot;US&quot;, &quot;value&quot;: &quot;CN&quot;}]}         }       ],       &quot;sort_conditions&quot;: [         {&quot;dimension&quot;:&quot;APP&quot;, order: &quot;ASCENDING&quot;}       ],       &quot;localization_settings&quot;: {         &quot;currency_code&quot;: &quot;USD&quot;,         &quot;language_code&quot;: &quot;en-US&quot;       }     }  For a better understanding, you can treat the preceding specification like the following pseudo SQL:      SELECT AD_SOURCE, APP, COUNTRY, OBSERVED_ECPM     FROM MEDIATION_REPORT     WHERE DATE &gt;= &#39;2018-09-01&#39; AND DATE &lt;= &#39;2018-09-30&#39;         AND COUNTRY IN (&#39;US&#39;, &#39;CN&#39;)     GROUP BY AD_SOURCE, APP, COUNTRY     ORDER BY APP ASC;
   */
  export interface Schema$MediationReportSpec {
    /**
     * The date range for which the report is generated.
     */
    dateRange?: Schema$DateRange;
    /**
     * Describes which report rows to match based on their dimension values.
     */
    dimensionFilters?: Schema$MediationReportSpecDimensionFilter[];
    /**
     * List of dimensions of the report. The value combination of these dimensions determines the row of the report. If no dimensions are specified, the report returns a single row of requested metrics for the entire account.
     */
    dimensions?: string[] | null;
    /**
     * Localization settings of the report.
     */
    localizationSettings?: Schema$LocalizationSettings;
    /**
     * Maximum number of report data rows to return. If the value is not set, the API returns as many rows as possible, up to 100000. Acceptable values are 1-100000, inclusive. Any other values are treated as 100000.
     */
    maxReportRows?: number | null;
    /**
     * List of metrics of the report. A report must specify at least one metric.
     */
    metrics?: string[] | null;
    /**
     * Describes the sorting of report rows. The order of the condition in the list defines its precedence; the earlier the condition, the higher its precedence. If no sort conditions are specified, the row ordering is undefined.
     */
    sortConditions?: Schema$MediationReportSpecSortCondition[];
    /**
     * A report time zone. Accepts an IANA TZ name values, such as &quot;America/Los_Angeles.&quot;  If no time zone is defined, the account default takes effect. Check default value by the get account action.  **Warning:** The &quot;America/Los_Angeles&quot; is the only supported value at the moment.
     */
    timeZone?: string | null;
  }
  /**
   * Describes which report rows to match based on their dimension values.
   */
  export interface Schema$MediationReportSpecDimensionFilter {
    /**
     * Applies the filter criterion to the specified dimension.
     */
    dimension?: string | null;
    /**
     * Matches a row if its value for the specified dimension is in one of the values specified in this condition.
     */
    matchesAny?: Schema$StringList;
  }
  /**
   * Sorting direction to be applied on a dimension or a metric.
   */
  export interface Schema$MediationReportSpecSortCondition {
    /**
     * Sort by the specified dimension.
     */
    dimension?: string | null;
    /**
     * Sort by the specified metric.
     */
    metric?: string | null;
    /**
     * Sorting order of the dimension or metric.
     */
    order?: string | null;
  }
  /**
   * The specification for generating an AdMob Network report. For example, the specification to get clicks and estimated earnings for only the &#39;US&#39; and &#39;CN&#39; countries can look like the following example:      {       &#39;date_range&#39;: {         &#39;start_date&#39;: {&#39;year&#39;: 2018, &#39;month&#39;: 9, &#39;day&#39;: 1},         &#39;end_date&#39;: {&#39;year&#39;: 2018, &#39;month&#39;: 9, &#39;day&#39;: 30}       },       &#39;dimensions&#39;: [&#39;DATE&#39;, &#39;APP&#39;, &#39;COUNTRY&#39;],       &#39;metrics&#39;: [&#39;CLICKS&#39;, &#39;ESTIMATED_EARNINGS&#39;],       &#39;dimension_filters&#39;: [         {           &#39;dimension&#39;: &#39;COUNTRY&#39;,           &#39;matches_any&#39;: {&#39;values&#39;: [{&#39;value&#39;: &#39;US&#39;, &#39;value&#39;: &#39;CN&#39;}]}         }       ],       &#39;sort_conditions&#39;: [         {&#39;dimension&#39;:&#39;APP&#39;, order: &#39;ASCENDING&#39;},         {&#39;metric&#39;:&#39;CLICKS&#39;, order: &#39;DESCENDING&#39;}       ],       &#39;localization_settings&#39;: {         &#39;currency_code&#39;: &#39;USD&#39;,         &#39;language_code&#39;: &#39;en-US&#39;       }     }  For a better understanding, you can treat the preceding specification like the following pseudo SQL:      SELECT DATE, APP, COUNTRY, CLICKS, ESTIMATED_EARNINGS     FROM NETWORK_REPORT     WHERE DATE &gt;= &#39;2018-09-01&#39; AND DATE &lt;= &#39;2018-09-30&#39;         AND COUNTRY IN (&#39;US&#39;, &#39;CN&#39;)     GROUP BY DATE, APP, COUNTRY     ORDER BY APP ASC, CLICKS DESC;
   */
  export interface Schema$NetworkReportSpec {
    /**
     * The date range for which the report is generated.
     */
    dateRange?: Schema$DateRange;
    /**
     * Describes which report rows to match based on their dimension values.
     */
    dimensionFilters?: Schema$NetworkReportSpecDimensionFilter[];
    /**
     * List of dimensions of the report. The value combination of these dimensions determines the row of the report. If no dimensions are specified, the report returns a single row of requested metrics for the entire account.
     */
    dimensions?: string[] | null;
    /**
     * Localization settings of the report.
     */
    localizationSettings?: Schema$LocalizationSettings;
    /**
     * Maximum number of report data rows to return. If the value is not set, the API returns as many rows as possible, up to 100000. Acceptable values are 1-100000, inclusive. Any other values are treated as 100000.
     */
    maxReportRows?: number | null;
    /**
     * List of metrics of the report. A report must specify at least one metric.
     */
    metrics?: string[] | null;
    /**
     * Describes the sorting of report rows. The order of the condition in the list defines its precedence; the earlier the condition, the higher its precedence. If no sort conditions are specified, the row ordering is undefined.
     */
    sortConditions?: Schema$NetworkReportSpecSortCondition[];
    /**
     * A report time zone. Accepts an IANA TZ name values, such as &quot;America/Los_Angeles.&quot;  If no time zone is defined, the account default takes effect. Check default value by the get account action.  **Warning:** The &quot;America/Los_Angeles&quot; is the only supported value at the moment.
     */
    timeZone?: string | null;
  }
  /**
   * Describes which report rows to match based on their dimension values.
   */
  export interface Schema$NetworkReportSpecDimensionFilter {
    /**
     * Applies the filter criterion to the specified dimension.
     */
    dimension?: string | null;
    /**
     * Matches a row if its value for the specified dimension is in one of the values specified in this condition.
     */
    matchesAny?: Schema$StringList;
  }
  /**
   * Sorting direction to be applied on a dimension or a metric.
   */
  export interface Schema$NetworkReportSpecSortCondition {
    /**
     * Sort by the specified dimension.
     */
    dimension?: string | null;
    /**
     * Sort by the specified metric.
     */
    metric?: string | null;
    /**
     * Sorting order of the dimension or metric.
     */
    order?: string | null;
  }
  /**
   * A publisher account contains information relevant to the use of this API, such as the time zone used for the reports.
   */
  export interface Schema$PublisherAccount {
    /**
     * Currency code of the earning-related metrics, which is the 3-letter code defined in ISO 4217. The daily average rate is used for the currency conversion.
     */
    currencyCode?: string | null;
    /**
     * Resource name of this account. Format is accounts/{publisher_id}.
     */
    name?: string | null;
    /**
     * The unique ID by which this publisher account can be identified in the API requests (for example, pub-1234567890).
     */
    publisherId?: string | null;
    /**
     * The time zone that is used in reports that are generated for this account. The value is a time-zone ID as specified by the CLDR project, for example, &quot;America/Los_Angeles&quot;.
     */
    reportingTimeZone?: string | null;
  }
  /**
   * Groups data available after report generation, for example, warnings and row counts. Always sent as the last message in the stream response.
   */
  export interface Schema$ReportFooter {
    /**
     * Total number of rows that did match the request.
     */
    matchingRowCount?: string | null;
    /**
     * Warnings associated with generation of the report.
     */
    warnings?: Schema$ReportWarning[];
  }
  /**
   * Groups data helps to treat the generated report. Always sent as a first message in the stream response.
   */
  export interface Schema$ReportHeader {
    /**
     * The date range for which the report is generated. This is identical to the range specified in the report request.
     */
    dateRange?: Schema$DateRange;
    /**
     * Localization settings of the report. This is identical to the settings in the report request.
     */
    localizationSettings?: Schema$LocalizationSettings;
    /**
     * The report time zone. The value is a time-zone ID as specified by the CLDR project, for example, &quot;America/Los_Angeles&quot;.
     */
    reportingTimeZone?: string | null;
  }
  /**
   * A row of the returning report.
   */
  export interface Schema$ReportRow {
    /**
     * Map of dimension values in a row, with keys as enum name of the dimensions.
     */
    dimensionValues?: {[key: string]: Schema$ReportRowDimensionValue} | null;
    /**
     * Map of metric values in a row, with keys as enum name of the metrics. If a metric being requested has no value returned, the map will not include it.
     */
    metricValues?: {[key: string]: Schema$ReportRowMetricValue} | null;
  }
  /**
   * Representation of a dimension value.
   */
  export interface Schema$ReportRowDimensionValue {
    /**
     * The localized string representation of the value. If unspecified, the display label should be derived from the value.
     */
    displayLabel?: string | null;
    /**
     * Dimension value in the format specified in the report&#39;s spec Dimension enum.
     */
    value?: string | null;
  }
  /**
   * Representation of a metric value.
   */
  export interface Schema$ReportRowMetricValue {
    /**
     * Double precision (approximate) decimal values. Rates are from 0 to 1.
     */
    doubleValue?: number | null;
    /**
     * Metric integer value.
     */
    integerValue?: string | null;
    /**
     * Amount in micros. One million is equivalent to one unit. Currency value is in the unit (USD, EUR or other) specified by the request. For example, $6.50 whould be represented as 6500000 micros.
     */
    microsValue?: string | null;
  }
  /**
   * Warnings associated with generation of the report.
   */
  export interface Schema$ReportWarning {
    /**
     * Describes the details of the warning message, in English.
     */
    description?: string | null;
    /**
     * Type of the warning.
     */
    type?: string | null;
  }
  /**
   * List of string values.
   */
  export interface Schema$StringList {
    /**
     * The string values.
     */
    values?: string[] | null;
  }

  export class Resource$Accounts {
    context: APIRequestContext;
    mediationReport: Resource$Accounts$Mediationreport;
    networkReport: Resource$Accounts$Networkreport;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.mediationReport = new Resource$Accounts$Mediationreport(
        this.context
      );
      this.networkReport = new Resource$Accounts$Networkreport(this.context);
    }

    /**
     * admob.accounts.get
     * @desc Gets information about the specified AdMob publisher account.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admob.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admob = google.admob('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await admob.accounts.get({
     *     // Resource name of the publisher account to retrieve.
     *     // Example: accounts/pub-9876543210987654
     *     name: 'accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "currencyCode": "my_currencyCode",
     *   //   "name": "my_name",
     *   //   "publisherId": "my_publisherId",
     *   //   "reportingTimeZone": "my_reportingTimeZone"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias admob.accounts.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name of the publisher account to retrieve. Example: accounts/pub-9876543210987654
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Accounts$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Accounts$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PublisherAccount>;
    get(
      params: Params$Resource$Accounts$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounts$Get,
      options: MethodOptions | BodyResponseCallback<Schema$PublisherAccount>,
      callback: BodyResponseCallback<Schema$PublisherAccount>
    ): void;
    get(
      params: Params$Resource$Accounts$Get,
      callback: BodyResponseCallback<Schema$PublisherAccount>
    ): void;
    get(callback: BodyResponseCallback<Schema$PublisherAccount>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Get
        | BodyResponseCallback<Schema$PublisherAccount>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PublisherAccount>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PublisherAccount>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$PublisherAccount> | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://admob.googleapis.com/';
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
        createAPIRequest<Schema$PublisherAccount>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$PublisherAccount>(parameters);
      }
    }

    /**
     * admob.accounts.list
     * @desc Lists the AdMob publisher account accessible with the client credential. Currently, all credentials have access to at most one AdMob account.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admob.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admob = google.admob('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await admob.accounts.list({
     *     // Maximum number of accounts to return.
     *     pageSize: 'placeholder-value',
     *     // The value returned by the last `ListPublisherAccountsResponse`; indicates
     *     // that this is a continuation of a prior `ListPublisherAccounts` call, and
     *     // that the system should return the next page of data.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "account": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias admob.accounts.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Maximum number of accounts to return.
     * @param {string=} params.pageToken The value returned by the last `ListPublisherAccountsResponse`; indicates that this is a continuation of a prior `ListPublisherAccounts` call, and that the system should return the next page of data.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Accounts$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Accounts$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListPublisherAccountsResponse>;
    list(
      params: Params$Resource$Accounts$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListPublisherAccountsResponse>,
      callback: BodyResponseCallback<Schema$ListPublisherAccountsResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$List,
      callback: BodyResponseCallback<Schema$ListPublisherAccountsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListPublisherAccountsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$List
        | BodyResponseCallback<Schema$ListPublisherAccountsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListPublisherAccountsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListPublisherAccountsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListPublisherAccountsResponse>
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

      const rootUrl = options.rootUrl || 'https://admob.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/accounts').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListPublisherAccountsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ListPublisherAccountsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Accounts$Get extends StandardParameters {
    /**
     * Resource name of the publisher account to retrieve. Example: accounts/pub-9876543210987654
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$List extends StandardParameters {
    /**
     * Maximum number of accounts to return.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListPublisherAccountsResponse`; indicates that this is a continuation of a prior `ListPublisherAccounts` call, and that the system should return the next page of data.
     */
    pageToken?: string;
  }

  export class Resource$Accounts$Mediationreport {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * admob.accounts.mediationReport.generate
     * @desc Generates an AdMob Mediation report based on the provided report specification.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admob.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admob = google.admob('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await admob.accounts.mediationReport.generate({
     *     // Resource name of the account to generate the report for.
     *     // Example: accounts/pub-9876543210987654
     *     parent: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "reportSpec": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "footer": {},
     *   //   "header": {},
     *   //   "row": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias admob.accounts.mediationReport.generate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Resource name of the account to generate the report for. Example: accounts/pub-9876543210987654
     * @param {().GenerateMediationReportRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    generate(
      params: Params$Resource$Accounts$Mediationreport$Generate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    generate(
      params?: Params$Resource$Accounts$Mediationreport$Generate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GenerateMediationReportResponse>;
    generate(
      params: Params$Resource$Accounts$Mediationreport$Generate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    generate(
      params: Params$Resource$Accounts$Mediationreport$Generate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GenerateMediationReportResponse>,
      callback: BodyResponseCallback<Schema$GenerateMediationReportResponse>
    ): void;
    generate(
      params: Params$Resource$Accounts$Mediationreport$Generate,
      callback: BodyResponseCallback<Schema$GenerateMediationReportResponse>
    ): void;
    generate(
      callback: BodyResponseCallback<Schema$GenerateMediationReportResponse>
    ): void;
    generate(
      paramsOrCallback?:
        | Params$Resource$Accounts$Mediationreport$Generate
        | BodyResponseCallback<Schema$GenerateMediationReportResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GenerateMediationReportResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GenerateMediationReportResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GenerateMediationReportResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Mediationreport$Generate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Mediationreport$Generate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admob.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/mediationReport:generate').replace(
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
        createAPIRequest<Schema$GenerateMediationReportResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GenerateMediationReportResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Accounts$Mediationreport$Generate
    extends StandardParameters {
    /**
     * Resource name of the account to generate the report for. Example: accounts/pub-9876543210987654
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GenerateMediationReportRequest;
  }

  export class Resource$Accounts$Networkreport {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * admob.accounts.networkReport.generate
     * @desc Generates an AdMob Network report based on the provided report specification.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admob.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const admob = google.admob('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await admob.accounts.networkReport.generate({
     *     // Resource name of the account to generate the report for.
     *     // Example: accounts/pub-9876543210987654
     *     parent: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "reportSpec": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "footer": {},
     *   //   "header": {},
     *   //   "row": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias admob.accounts.networkReport.generate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Resource name of the account to generate the report for. Example: accounts/pub-9876543210987654
     * @param {().GenerateNetworkReportRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    generate(
      params: Params$Resource$Accounts$Networkreport$Generate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    generate(
      params?: Params$Resource$Accounts$Networkreport$Generate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GenerateNetworkReportResponse>;
    generate(
      params: Params$Resource$Accounts$Networkreport$Generate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    generate(
      params: Params$Resource$Accounts$Networkreport$Generate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GenerateNetworkReportResponse>,
      callback: BodyResponseCallback<Schema$GenerateNetworkReportResponse>
    ): void;
    generate(
      params: Params$Resource$Accounts$Networkreport$Generate,
      callback: BodyResponseCallback<Schema$GenerateNetworkReportResponse>
    ): void;
    generate(
      callback: BodyResponseCallback<Schema$GenerateNetworkReportResponse>
    ): void;
    generate(
      paramsOrCallback?:
        | Params$Resource$Accounts$Networkreport$Generate
        | BodyResponseCallback<Schema$GenerateNetworkReportResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GenerateNetworkReportResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GenerateNetworkReportResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GenerateNetworkReportResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Networkreport$Generate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Networkreport$Generate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admob.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/networkReport:generate').replace(
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
        createAPIRequest<Schema$GenerateNetworkReportResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GenerateNetworkReportResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Accounts$Networkreport$Generate
    extends StandardParameters {
    /**
     * Resource name of the account to generate the report for. Example: accounts/pub-9876543210987654
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GenerateNetworkReportRequest;
  }
}
