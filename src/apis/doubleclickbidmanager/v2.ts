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

export namespace doubleclickbidmanager_v2 {
  export interface Options extends GlobalOptions {
    version: 'v2';
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
   * DoubleClick Bid Manager API
   *
   * DoubleClick Bid Manager API allows users to manage and create campaigns and reports.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const doubleclickbidmanager = google.doubleclickbidmanager('v2');
   * ```
   */
  export class Doubleclickbidmanager {
    context: APIRequestContext;
    queries: Resource$Queries;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.queries = new Resource$Queries(this.context);
    }
  }

  /**
   * The date range to be reported on.
   */
  export interface Schema$DataRange {
    /**
     * If `CUSTOM_DATES` is assigned to range, this field specifies the end date for the date range that is reported on. This field is required if using `CUSTOM_DATES` range and will be ignored otherwise.
     */
    customEndDate?: Schema$Date;
    /**
     * If `CUSTOM_DATES` is assigned to range, this field specifies the starting date for the date range that is reported on. This field is required if using `CUSTOM_DATES` range and will be ignored otherwise.
     */
    customStartDate?: Schema$Date;
    /**
     * The preset date range to be reported on. If `CUSTOM_DATES` is assigned to this field, fields custom_start_date and custom_end_date must be set to specify the custom date range.
     */
    range?: string | null;
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
   * Represents a single filter rule.
   */
  export interface Schema$FilterPair {
    /**
     * The type of value to filter by. Defined by a [Filter](/bid-manager/reference/rest/v2/filters-metrics#filters) value.
     */
    type?: string | null;
    /**
     * The identifying value to filter by, such as a relevant resource ID.
     */
    value?: string | null;
  }
  export interface Schema$ListQueriesResponse {
    /**
     * A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `queries.list` method to retrieve the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * The list of queries. This field will be absent if empty.
     */
    queries?: Schema$Query[];
  }
  export interface Schema$ListReportsResponse {
    /**
     * A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `queries.reports.list` method to retrieve the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * The list of reports. This field will be absent if empty.
     */
    reports?: Schema$Report[];
  }
  /**
   * Report parameter options.
   */
  export interface Schema$Options {
    /**
     * Whether to include data for audience lists specifically targeted by filtered line items or insertion orders. Requires the use of `FILTER_INSERTION_ORDER` or `FILTER_LINE_ITEM` filters.
     */
    includeOnlyTargetedUserLists?: boolean | null;
  }
  /**
   * Parameters of a generated report.
   */
  export interface Schema$Parameters {
    /**
     * Filters to limit the scope of reported data.
     */
    filters?: Schema$FilterPair[];
    /**
     * Dimensions by which to segment and group the data. Defined by [Filter](/bid-manager/reference/rest/v2/filters-metrics#filters) values.
     */
    groupBys?: string[] | null;
    /**
     * Metrics to define the data populating the report. Defined by [Metric](/bid-manager/reference/rest/v2/filters-metrics#metrics) values.
     */
    metrics?: string[] | null;
    /**
     * Additional report parameter options.
     */
    options?: Schema$Options;
    /**
     * The type of the report. The type of the report determines the dimesions, filters, and metrics that can be used.
     */
    type?: string | null;
  }
  /**
   * A single query used to generate a report.
   */
  export interface Schema$Query {
    /**
     * The metadata of the query.
     */
    metadata?: Schema$QueryMetadata;
    /**
     * The parameters of the report generated by the query.
     */
    params?: Schema$Parameters;
    /**
     * Output only. The unique ID of the query.
     */
    queryId?: string | null;
    /**
     * When and how often the query is scheduled to run. If the frequency field is set to `ONE_TIME`, the query will only run when queries.run is called.
     */
    schedule?: Schema$QuerySchedule;
  }
  /**
   * The metadata of the query.
   */
  export interface Schema$QueryMetadata {
    /**
     * The date range the report generated by the query will report on. This date range will be defined by the time zone as used by the advertiser.
     */
    dataRange?: Schema$DataRange;
    /**
     * The format of the report generated by the query.
     */
    format?: string | null;
    /**
     * Whether an email notification is sent to the query creator when a report generated by the query is ready. This value is `false` by default.
     */
    sendNotification?: boolean | null;
    /**
     * List of additional email addresses with which to share the query. If send_notification is `true`, these email addresses will receive a notification when a report generated by the query is ready. If these email addresses are connected to Display & Video 360 users, the query will be available to them in the Display & Video 360 interface.
     */
    shareEmailAddress?: string[] | null;
    /**
     * The display name of the query. This value will be used in the file name of reports generated by the query.
     */
    title?: string | null;
  }
  /**
   * Settings on when and how frequently to run a query.
   */
  export interface Schema$QuerySchedule {
    /**
     * The date on which to end the scheduled runs. This field is required if frequency is not set to `ONE_TIME`. Otherwise, it will be ignored.
     */
    endDate?: Schema$Date;
    /**
     * How frequently to run the query. If set to `ONE_TIME`, the query will only be run when queries.run is called.
     */
    frequency?: string | null;
    /**
     * The canonical code for the timezone the query schedule is based on. Scheduled runs are usually conducted in the morning of a given day. Defaults to `America/New_York`.
     */
    nextRunTimezoneCode?: string | null;
    /**
     * The date on which to begin the scheduled runs. This field is required if frequency is not set to `ONE_TIME`. Otherwise, it will be ignored.
     */
    startDate?: Schema$Date;
  }
  /**
   * A single report generated by its parent report.
   */
  export interface Schema$Report {
    /**
     * The key information identifying the report.
     */
    key?: Schema$ReportKey;
    /**
     * The metadata of the report.
     */
    metadata?: Schema$ReportMetadata;
    /**
     * The parameters of the report.
     */
    params?: Schema$Parameters;
  }
  /**
   * Identifying information of a report.
   */
  export interface Schema$ReportKey {
    /**
     * Output only. The unique ID of the query that generated the report.
     */
    queryId?: string | null;
    /**
     * Output only. The unique ID of the report.
     */
    reportId?: string | null;
  }
  /**
   * The metadata of a report.
   */
  export interface Schema$ReportMetadata {
    /**
     * Output only. The location of the generated report file in Google Cloud Storage. This field will be absent if status.state is not `DONE`.
     */
    googleCloudStoragePath?: string | null;
    /**
     * The end date of the report data date range.
     */
    reportDataEndDate?: Schema$Date;
    /**
     * The start date of the report data date range.
     */
    reportDataStartDate?: Schema$Date;
    /**
     * The status of the report.
     */
    status?: Schema$ReportStatus;
  }
  /**
   * The status of a report.
   */
  export interface Schema$ReportStatus {
    /**
     * Output only. The timestamp of when report generation finished successfully or in failure. This field will not be set unless state is `DONE` or `FAILED`.
     */
    finishTime?: string | null;
    /**
     * The format of the generated report file.
     */
    format?: string | null;
    /**
     * Output only. The state of the report generation.
     */
    state?: string | null;
  }
  /**
   * Details specifying how to run a query.
   */
  export interface Schema$RunQueryRequest {
    /**
     * The date range used by the query to generate the report. If unspecified, the query's original data_range is used.
     */
    dataRange?: Schema$DataRange;
  }

  export class Resource$Queries {
    context: APIRequestContext;
    reports: Resource$Queries$Reports;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.reports = new Resource$Queries$Reports(this.context);
    }

    /**
     * Creates a new query.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/doubleclickbidmanager.googleapis.com
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
     * const doubleclickbidmanager = google.doubleclickbidmanager('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/doubleclickbidmanager'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await doubleclickbidmanager.queries.create({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "metadata": {},
     *       //   "params": {},
     *       //   "queryId": "my_queryId",
     *       //   "schedule": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "metadata": {},
     *   //   "params": {},
     *   //   "queryId": "my_queryId",
     *   //   "schedule": {}
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
      params: Params$Resource$Queries$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Queries$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Query>>;
    create(
      params: Params$Resource$Queries$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Queries$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Query>,
      callback: BodyResponseCallback<Schema$Query>
    ): void;
    create(
      params: Params$Resource$Queries$Create,
      callback: BodyResponseCallback<Schema$Query>
    ): void;
    create(callback: BodyResponseCallback<Schema$Query>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Queries$Create
        | BodyResponseCallback<Schema$Query>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Query>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Query>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Query>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Queries$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Queries$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://doubleclickbidmanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/queries').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
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
        createAPIRequest<Schema$Query>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Query>(parameters);
      }
    }

    /**
     * Deletes an existing query as well as its generated reports.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/doubleclickbidmanager.googleapis.com
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
     * const doubleclickbidmanager = google.doubleclickbidmanager('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/doubleclickbidmanager'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await doubleclickbidmanager.queries.delete({
     *     // Required. The ID of the query to delete.
     *     queryId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Queries$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Queries$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    delete(
      params: Params$Resource$Queries$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Queries$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Queries$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Queries$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<void>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Queries$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Queries$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://doubleclickbidmanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/queries/{queryId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['queryId'],
        pathParams: ['queryId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Retrieves a query.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/doubleclickbidmanager.googleapis.com
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
     * const doubleclickbidmanager = google.doubleclickbidmanager('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/doubleclickbidmanager'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await doubleclickbidmanager.queries.get({
     *     // Required. The ID of the query to retrieve.
     *     queryId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "metadata": {},
     *   //   "params": {},
     *   //   "queryId": "my_queryId",
     *   //   "schedule": {}
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
      params: Params$Resource$Queries$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Queries$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Query>>;
    get(
      params: Params$Resource$Queries$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Queries$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Query>,
      callback: BodyResponseCallback<Schema$Query>
    ): void;
    get(
      params: Params$Resource$Queries$Get,
      callback: BodyResponseCallback<Schema$Query>
    ): void;
    get(callback: BodyResponseCallback<Schema$Query>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Queries$Get
        | BodyResponseCallback<Schema$Query>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Query>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Query>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Query>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Queries$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Queries$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://doubleclickbidmanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/queries/{queryId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['queryId'],
        pathParams: ['queryId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Query>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Query>(parameters);
      }
    }

    /**
     * Lists queries created by the current user.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/doubleclickbidmanager.googleapis.com
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
     * const doubleclickbidmanager = google.doubleclickbidmanager('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/doubleclickbidmanager'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await doubleclickbidmanager.queries.list({
     *     // Field to sort the list by. Accepts the following values: * `queryId` (default) * `metadata.title` The default sorting order is ascending. To specify descending order for a field, add the suffix `desc` to the field name. For example, `queryId desc`.
     *     orderBy: 'placeholder-value',
     *     // Maximum number of results per page. Must be between `1` and `100`. Defaults to `100` if unspecified.
     *     pageSize: 'placeholder-value',
     *     // A token identifying which page of results the server should return. Typically, this is the value of nextPageToken, returned from the previous call to the `queries.list` method. If unspecified, the first page of results is returned.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "queries": []
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
      params: Params$Resource$Queries$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Queries$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListQueriesResponse>>;
    list(
      params: Params$Resource$Queries$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Queries$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListQueriesResponse>,
      callback: BodyResponseCallback<Schema$ListQueriesResponse>
    ): void;
    list(
      params: Params$Resource$Queries$List,
      callback: BodyResponseCallback<Schema$ListQueriesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListQueriesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Queries$List
        | BodyResponseCallback<Schema$ListQueriesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListQueriesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListQueriesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListQueriesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Queries$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Queries$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://doubleclickbidmanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/queries').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListQueriesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListQueriesResponse>(parameters);
      }
    }

    /**
     * Runs an existing query to generate a report.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/doubleclickbidmanager.googleapis.com
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
     * const doubleclickbidmanager = google.doubleclickbidmanager('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/doubleclickbidmanager'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await doubleclickbidmanager.queries.run({
     *     // Required. The ID of the query to run.
     *     queryId: 'placeholder-value',
     *     // Whether the query should be run synchronously. When `true`, the request won't return until the resulting report has finished running. This parameter is `false` by default. Setting this parameter to `true` is **not recommended**.
     *     synchronous: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "dataRange": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "key": {},
     *   //   "metadata": {},
     *   //   "params": {}
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
      params: Params$Resource$Queries$Run,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    run(
      params?: Params$Resource$Queries$Run,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Report>>;
    run(
      params: Params$Resource$Queries$Run,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    run(
      params: Params$Resource$Queries$Run,
      options: MethodOptions | BodyResponseCallback<Schema$Report>,
      callback: BodyResponseCallback<Schema$Report>
    ): void;
    run(
      params: Params$Resource$Queries$Run,
      callback: BodyResponseCallback<Schema$Report>
    ): void;
    run(callback: BodyResponseCallback<Schema$Report>): void;
    run(
      paramsOrCallback?:
        | Params$Resource$Queries$Run
        | BodyResponseCallback<Schema$Report>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Report>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Report>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Report>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Queries$Run;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Queries$Run;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://doubleclickbidmanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/queries/{queryId}:run').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['queryId'],
        pathParams: ['queryId'],
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
  }

  export interface Params$Resource$Queries$Create extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$Query;
  }
  export interface Params$Resource$Queries$Delete extends StandardParameters {
    /**
     * Required. The ID of the query to delete.
     */
    queryId?: string;
  }
  export interface Params$Resource$Queries$Get extends StandardParameters {
    /**
     * Required. The ID of the query to retrieve.
     */
    queryId?: string;
  }
  export interface Params$Resource$Queries$List extends StandardParameters {
    /**
     * Field to sort the list by. Accepts the following values: * `queryId` (default) * `metadata.title` The default sorting order is ascending. To specify descending order for a field, add the suffix `desc` to the field name. For example, `queryId desc`.
     */
    orderBy?: string;
    /**
     * Maximum number of results per page. Must be between `1` and `100`. Defaults to `100` if unspecified.
     */
    pageSize?: number;
    /**
     * A token identifying which page of results the server should return. Typically, this is the value of nextPageToken, returned from the previous call to the `queries.list` method. If unspecified, the first page of results is returned.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Queries$Run extends StandardParameters {
    /**
     * Required. The ID of the query to run.
     */
    queryId?: string;
    /**
     * Whether the query should be run synchronously. When `true`, the request won't return until the resulting report has finished running. This parameter is `false` by default. Setting this parameter to `true` is **not recommended**.
     */
    synchronous?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RunQueryRequest;
  }

  export class Resource$Queries$Reports {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves a report.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/doubleclickbidmanager.googleapis.com
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
     * const doubleclickbidmanager = google.doubleclickbidmanager('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/doubleclickbidmanager'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await doubleclickbidmanager.queries.reports.get({
     *     // Required. The ID of the query that generated the report.
     *     queryId: 'placeholder-value',
     *     // Required. The ID of the query to retrieve.
     *     reportId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "key": {},
     *   //   "metadata": {},
     *   //   "params": {}
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
      params: Params$Resource$Queries$Reports$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Queries$Reports$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Report>>;
    get(
      params: Params$Resource$Queries$Reports$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Queries$Reports$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Report>,
      callback: BodyResponseCallback<Schema$Report>
    ): void;
    get(
      params: Params$Resource$Queries$Reports$Get,
      callback: BodyResponseCallback<Schema$Report>
    ): void;
    get(callback: BodyResponseCallback<Schema$Report>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Queries$Reports$Get
        | BodyResponseCallback<Schema$Report>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Report>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Report>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Report>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Queries$Reports$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Queries$Reports$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://doubleclickbidmanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/queries/{queryId}/reports/{reportId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['queryId', 'reportId'],
        pathParams: ['queryId', 'reportId'],
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
     * Lists reports generated by the provided query.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/doubleclickbidmanager.googleapis.com
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
     * const doubleclickbidmanager = google.doubleclickbidmanager('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/doubleclickbidmanager'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await doubleclickbidmanager.queries.reports.list({
     *     // Field to sort the list by. Accepts the following values: * `key.reportId` (default) The default sorting order is ascending. To specify descending order for a field, add the suffix `desc` to the field name. For example, `key.reportId desc`.
     *     orderBy: 'placeholder-value',
     *     // Maximum number of results per page. Must be between `1` and `100`. Defaults to `100` if unspecified.
     *     pageSize: 'placeholder-value',
     *     // A token identifying which page of results the server should return. Typically, this is the value of nextPageToken returned from the previous call to the `queries.reports.list` method. If unspecified, the first page of results is returned.
     *     pageToken: 'placeholder-value',
     *     // Required. The ID of the query that generated the reports.
     *     queryId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "reports": []
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
      params: Params$Resource$Queries$Reports$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Queries$Reports$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListReportsResponse>>;
    list(
      params: Params$Resource$Queries$Reports$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Queries$Reports$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListReportsResponse>,
      callback: BodyResponseCallback<Schema$ListReportsResponse>
    ): void;
    list(
      params: Params$Resource$Queries$Reports$List,
      callback: BodyResponseCallback<Schema$ListReportsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListReportsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Queries$Reports$List
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
        {}) as Params$Resource$Queries$Reports$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Queries$Reports$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://doubleclickbidmanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/queries/{queryId}/reports').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['queryId'],
        pathParams: ['queryId'],
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
  }

  export interface Params$Resource$Queries$Reports$Get
    extends StandardParameters {
    /**
     * Required. The ID of the query that generated the report.
     */
    queryId?: string;
    /**
     * Required. The ID of the query to retrieve.
     */
    reportId?: string;
  }
  export interface Params$Resource$Queries$Reports$List
    extends StandardParameters {
    /**
     * Field to sort the list by. Accepts the following values: * `key.reportId` (default) The default sorting order is ascending. To specify descending order for a field, add the suffix `desc` to the field name. For example, `key.reportId desc`.
     */
    orderBy?: string;
    /**
     * Maximum number of results per page. Must be between `1` and `100`. Defaults to `100` if unspecified.
     */
    pageSize?: number;
    /**
     * A token identifying which page of results the server should return. Typically, this is the value of nextPageToken returned from the previous call to the `queries.reports.list` method. If unspecified, the first page of results is returned.
     */
    pageToken?: string;
    /**
     * Required. The ID of the query that generated the reports.
     */
    queryId?: string;
  }
}
