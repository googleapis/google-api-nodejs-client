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

export namespace agenciesandbrands_v1 {
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
   * Agencies and Brands API
   *
   * Agencies and brands API is an externally available HTTP API for ad agencies and brands to programmatically manage their deals and spending with Google Ad Manager publishers.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const agenciesandbrands = google.agenciesandbrands('v1');
   * ```
   */
  export class Agenciesandbrands {
    context: APIRequestContext;
    agencies: Resource$Agencies;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.agencies = new Resource$Agencies(this.context);
    }
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
   * Contains all metric values requested for a single date range and set of column dimension values (returned in the columns field of the response). The order of the metrics in each field corresponds to the order of the metrics specified in the request.
   */
  export interface Schema$MetricValueGroup {
    /**
     * Data for the PRIMARY MetricValueType.
     */
    primaryValues?: Schema$ReportValue[];
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
     * Identifier. The resource name of the report. Report resource name have the form: `agencies/{account_id\}/reports/{report_id\}`
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

  export class Resource$Agencies {
    context: APIRequestContext;
    reports: Resource$Agencies$Reports;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.reports = new Resource$Agencies$Reports(this.context);
    }
  }

  export class Resource$Agencies$Reports {
    context: APIRequestContext;
    operations: Resource$Agencies$Reports$Operations;
    results: Resource$Agencies$Reports$Results;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations = new Resource$Agencies$Reports$Operations(this.context);
      this.results = new Resource$Agencies$Reports$Results(this.context);
    }

    /**
     * Creates a `Report` object.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/agenciesandbrands.googleapis.com
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
     * const agenciesandbrands = google.agenciesandbrands('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/agencies-and-brands'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await agenciesandbrands.agencies.reports.create({
     *     // Required. The parent resource where this `Report` will be created. Format: `agencies/{account_id\}`
     *     parent: 'agencies/my-agencie',
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
      params: Params$Resource$Agencies$Reports$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Agencies$Reports$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Report>>;
    create(
      params: Params$Resource$Agencies$Reports$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Agencies$Reports$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Report>,
      callback: BodyResponseCallback<Schema$Report>
    ): void;
    create(
      params: Params$Resource$Agencies$Reports$Create,
      callback: BodyResponseCallback<Schema$Report>
    ): void;
    create(callback: BodyResponseCallback<Schema$Report>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Agencies$Reports$Create
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
        {}) as Params$Resource$Agencies$Reports$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Agencies$Reports$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://agenciesandbrands.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/agenciesandbrands.googleapis.com
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
     * const agenciesandbrands = google.agenciesandbrands('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/agencies-and-brands'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await agenciesandbrands.agencies.reports.delete({
     *     // Required. Resource name of the report to delete. Format: `agencies/{account_id\}/reports/{report_id\}`
     *     name: 'agencies/my-agencie/reports/my-report',
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
      params: Params$Resource$Agencies$Reports$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Agencies$Reports$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Agencies$Reports$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Agencies$Reports$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Agencies$Reports$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Agencies$Reports$Delete
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
        {}) as Params$Resource$Agencies$Reports$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Agencies$Reports$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://agenciesandbrands.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/agenciesandbrands.googleapis.com
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
     * const agenciesandbrands = google.agenciesandbrands('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/agencies-and-brands'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await agenciesandbrands.agencies.reports.get({
     *     // Required. The resource name of the report. Format: `agencies/{account_id\}/reports/{report_id\}`
     *     name: 'agencies/my-agencie/reports/my-report',
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
      params: Params$Resource$Agencies$Reports$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Agencies$Reports$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Report>>;
    get(
      params: Params$Resource$Agencies$Reports$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Agencies$Reports$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Report>,
      callback: BodyResponseCallback<Schema$Report>
    ): void;
    get(
      params: Params$Resource$Agencies$Reports$Get,
      callback: BodyResponseCallback<Schema$Report>
    ): void;
    get(callback: BodyResponseCallback<Schema$Report>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Agencies$Reports$Get
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
        {}) as Params$Resource$Agencies$Reports$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Agencies$Reports$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://agenciesandbrands.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/agenciesandbrands.googleapis.com
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
     * const agenciesandbrands = google.agenciesandbrands('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/agencies-and-brands'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await agenciesandbrands.agencies.reports.list({
     *     // Optional. Expression to filter the response. See syntax details at https://developers.google.com/ad-manager/api/beta/filters
     *     filter: 'placeholder-value',
     *     // Optional. Expression to specify sorting order. See syntax details at https://developers.google.com/ad-manager/api/beta/filters#order
     *     orderBy: 'placeholder-value',
     *     // Optional. The maximum number of `Reports` to return. The service may return fewer than this value. If unspecified, at most 50 `Reports` will be returned. The maximum value is 1000; values greater than 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListReports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListReports` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent, which owns this collection of reports. Format: `agencies/{account_id\}`
     *     parent: 'agencies/my-agencie',
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
      params: Params$Resource$Agencies$Reports$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Agencies$Reports$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListReportsResponse>>;
    list(
      params: Params$Resource$Agencies$Reports$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Agencies$Reports$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListReportsResponse>,
      callback: BodyResponseCallback<Schema$ListReportsResponse>
    ): void;
    list(
      params: Params$Resource$Agencies$Reports$List,
      callback: BodyResponseCallback<Schema$ListReportsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListReportsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Agencies$Reports$List
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
        {}) as Params$Resource$Agencies$Reports$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Agencies$Reports$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://agenciesandbrands.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/agenciesandbrands.googleapis.com
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
     * const agenciesandbrands = google.agenciesandbrands('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/agencies-and-brands'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await agenciesandbrands.agencies.reports.patch({
     *     // Identifier. The resource name of the report. Report resource name have the form: `agencies/{account_id\}/reports/{report_id\}`
     *     name: 'agencies/my-agencie/reports/my-report',
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
      params: Params$Resource$Agencies$Reports$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Agencies$Reports$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Report>>;
    patch(
      params: Params$Resource$Agencies$Reports$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Agencies$Reports$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Report>,
      callback: BodyResponseCallback<Schema$Report>
    ): void;
    patch(
      params: Params$Resource$Agencies$Reports$Patch,
      callback: BodyResponseCallback<Schema$Report>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Report>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Agencies$Reports$Patch
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
        {}) as Params$Resource$Agencies$Reports$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Agencies$Reports$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://agenciesandbrands.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/agenciesandbrands.googleapis.com
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
     * const agenciesandbrands = google.agenciesandbrands('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/agencies-and-brands'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await agenciesandbrands.agencies.reports.run({
     *     // Required. The report to run. Format: `agencies/{account_id\}/reports/{report_id\}`
     *     name: 'agencies/my-agencie/reports/my-report',
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
      params: Params$Resource$Agencies$Reports$Run,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    run(
      params?: Params$Resource$Agencies$Reports$Run,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    run(
      params: Params$Resource$Agencies$Reports$Run,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    run(
      params: Params$Resource$Agencies$Reports$Run,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    run(
      params: Params$Resource$Agencies$Reports$Run,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    run(callback: BodyResponseCallback<Schema$Operation>): void;
    run(
      paramsOrCallback?:
        | Params$Resource$Agencies$Reports$Run
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
        {}) as Params$Resource$Agencies$Reports$Run;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Agencies$Reports$Run;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://agenciesandbrands.googleapis.com/';
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

  export interface Params$Resource$Agencies$Reports$Create extends StandardParameters {
    /**
     * Required. The parent resource where this `Report` will be created. Format: `agencies/{account_id\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Report;
  }
  export interface Params$Resource$Agencies$Reports$Delete extends StandardParameters {
    /**
     * Required. Resource name of the report to delete. Format: `agencies/{account_id\}/reports/{report_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Agencies$Reports$Get extends StandardParameters {
    /**
     * Required. The resource name of the report. Format: `agencies/{account_id\}/reports/{report_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Agencies$Reports$List extends StandardParameters {
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
     * Required. The parent, which owns this collection of reports. Format: `agencies/{account_id\}`
     */
    parent?: string;
    /**
     * Optional. Number of individual resources to skip while paginating.
     */
    skip?: number;
  }
  export interface Params$Resource$Agencies$Reports$Patch extends StandardParameters {
    /**
     * Identifier. The resource name of the report. Report resource name have the form: `agencies/{account_id\}/reports/{report_id\}`
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
  export interface Params$Resource$Agencies$Reports$Run extends StandardParameters {
    /**
     * Required. The report to run. Format: `agencies/{account_id\}/reports/{report_id\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RunReportRequest;
  }

  export class Resource$Agencies$Reports$Operations {
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
     * //   https://console.developers.google.com/apis/api/agenciesandbrands.googleapis.com
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
     * const agenciesandbrands = google.agenciesandbrands('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/agencies-and-brands'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await agenciesandbrands.agencies.reports.operations.get({
     *     // The name of the operation resource.
     *     name: 'agencies/my-agencie/reports/my-report/operations/my-operation',
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
      params: Params$Resource$Agencies$Reports$Operations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Agencies$Reports$Operations$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    get(
      params: Params$Resource$Agencies$Reports$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Agencies$Reports$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Agencies$Reports$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Agencies$Reports$Operations$Get
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
        {}) as Params$Resource$Agencies$Reports$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Agencies$Reports$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://agenciesandbrands.googleapis.com/';
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

  export interface Params$Resource$Agencies$Reports$Operations$Get extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }

  export class Resource$Agencies$Reports$Results {
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
     * //   https://console.developers.google.com/apis/api/agenciesandbrands.googleapis.com
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
     * const agenciesandbrands = google.agenciesandbrands('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/agencies-and-brands'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await agenciesandbrands.agencies.reports.results.fetchRows({
     *     // The report result being fetched. Format: `agencies/{account_id\}/reports/{report_id\}/results/{report_result_id\}`
     *     name: 'agencies/my-agencie/reports/my-report/results/my-result',
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
      params: Params$Resource$Agencies$Reports$Results$Fetchrows,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    fetchRows(
      params?: Params$Resource$Agencies$Reports$Results$Fetchrows,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$FetchReportResultRowsResponse>>;
    fetchRows(
      params: Params$Resource$Agencies$Reports$Results$Fetchrows,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    fetchRows(
      params: Params$Resource$Agencies$Reports$Results$Fetchrows,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FetchReportResultRowsResponse>,
      callback: BodyResponseCallback<Schema$FetchReportResultRowsResponse>
    ): void;
    fetchRows(
      params: Params$Resource$Agencies$Reports$Results$Fetchrows,
      callback: BodyResponseCallback<Schema$FetchReportResultRowsResponse>
    ): void;
    fetchRows(
      callback: BodyResponseCallback<Schema$FetchReportResultRowsResponse>
    ): void;
    fetchRows(
      paramsOrCallback?:
        | Params$Resource$Agencies$Reports$Results$Fetchrows
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
        {}) as Params$Resource$Agencies$Reports$Results$Fetchrows;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Agencies$Reports$Results$Fetchrows;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://agenciesandbrands.googleapis.com/';
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

  export interface Params$Resource$Agencies$Reports$Results$Fetchrows extends StandardParameters {
    /**
     * The report result being fetched. Format: `agencies/{account_id\}/reports/{report_id\}/results/{report_result_id\}`
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
}
