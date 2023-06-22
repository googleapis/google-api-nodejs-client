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
   * A channel grouping defines a set of rules that can be used to categorize events in a path report.
   */
  export interface Schema$ChannelGrouping {
    /**
     * The name to apply to an event that does not match any of the rules in the channel grouping.
     */
    fallbackName?: string | null;
    /**
     * Channel Grouping name.
     */
    name?: string | null;
    /**
     * Rules within Channel Grouping. There is a limit of 100 rules that can be set per channel grouping.
     */
    rules?: Schema$Rule[];
  }
  /**
   * Report data range.
   */
  export interface Schema$DataRange {
    /**
     * The ending date for the data that is shown in the report. Note, `customEndDate` is required if `range` is `CUSTOM_DATES` and ignored otherwise.
     */
    customEndDate?: Schema$Date;
    /**
     * The starting data for the data that is shown in the report. Note, `customStartDate` is required if `range` is `CUSTOM_DATES` and ignored otherwise.
     */
    customStartDate?: Schema$Date;
    /**
     * Report data range used to generate the report.
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
   * DisjunctiveMatchStatement that OR's all contained filters.
   */
  export interface Schema$DisjunctiveMatchStatement {
    /**
     * Filters. There is a limit of 100 filters that can be set per disjunctive match statement.
     */
    eventFilters?: Schema$EventFilter[];
  }
  /**
   * Defines the type of filter to be applied to the path, a DV360 event dimension filter.
   */
  export interface Schema$EventFilter {
    /**
     * Filter on a dimension.
     */
    dimensionFilter?: Schema$PathQueryOptionsFilter;
  }
  /**
   * Filter used to match traffic data in your report.
   */
  export interface Schema$FilterPair {
    /**
     * Filter type.
     */
    type?: string | null;
    /**
     * Filter value.
     */
    value?: string | null;
  }
  export interface Schema$ListQueriesResponse {
    /**
     * A token, which can be sent as page_token to retrieve the next page of queries. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The list of queries.
     */
    queries?: Schema$Query[];
  }
  export interface Schema$ListReportsResponse {
    /**
     * A token, which can be sent as page_token to retrieve the next page of reports. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Retrieved reports.
     */
    reports?: Schema$Report[];
  }
  /**
   * Additional query options.
   */
  export interface Schema$Options {
    /**
     * Set to true and filter your report by `FILTER_INSERTION_ORDER` or `FILTER_LINE_ITEM` to include data for audience lists specifically targeted by those items.
     */
    includeOnlyTargetedUserLists?: boolean | null;
    /**
     * Options that contain Path Filters and Custom Channel Groupings.
     */
    pathQueryOptions?: Schema$PathQueryOptions;
  }
  /**
   * Parameters of a query or report.
   */
  export interface Schema$Parameters {
    /**
     * Filters used to match traffic data in your report.
     */
    filters?: Schema$FilterPair[];
    /**
     * Data is grouped by the filters listed in this field.
     */
    groupBys?: string[] | null;
    /**
     * Metrics to include as columns in your report.
     */
    metrics?: string[] | null;
    /**
     * Additional query options.
     */
    options?: Schema$Options;
    /**
     * The type of the report. The type of the report will dictate what dimesions, filters, and metrics can be used. **Warning:** The `AUDIENCE_COMPOSITION` report type will be deprecated in Display & Video 360 on **June 8, 2023**. Once deprecated, you will no longer be able to create new or retrieve existing Query and Report resources of this type.
     */
    type?: string | null;
  }
  /**
   * Path filters specify which paths to include in a report. A path is the result of combining DV360 events based on User ID to create a workflow of users' actions. When a path filter is set, the resulting report will only include paths that match the specified event at the specified position. All other paths will be excluded.
   */
  export interface Schema$PathFilter {
    /**
     * Filter on an event to be applied to some part of the path.
     */
    eventFilters?: Schema$EventFilter[];
    /**
     * The position of the path the filter should match to (first, last, or any event in path).
     */
    pathMatchPosition?: string | null;
  }
  /**
   * Path Query Options for Report Options.
   */
  export interface Schema$PathQueryOptions {
    /**
     * Custom Channel Groupings.
     */
    channelGrouping?: Schema$ChannelGrouping;
    /**
     * Path Filters. There is a limit of 100 path filters that can be set per report.
     */
    pathFilters?: Schema$PathFilter[];
  }
  /**
   * Dimension filter on path events.
   */
  export interface Schema$PathQueryOptionsFilter {
    /**
     * Dimension the filter is applied to.
     */
    filter?: string | null;
    /**
     * Match logic of the filter.
     */
    match?: string | null;
    /**
     * Values to filter on.
     */
    values?: string[] | null;
  }
  /**
   * Represents a query.
   */
  export interface Schema$Query {
    /**
     * Query metadata.
     */
    metadata?: Schema$QueryMetadata;
    /**
     * Query parameters.
     */
    params?: Schema$Parameters;
    /**
     * Output only. Query ID.
     */
    queryId?: string | null;
    /**
     * Information on how often and when to run a query. If `ONE_TIME` is set to the frequency field, the query will only be run at the time of creation.
     */
    schedule?: Schema$QuerySchedule;
  }
  /**
   * Query metadata.
   */
  export interface Schema$QueryMetadata {
    /**
     * Range of report data. All reports will be based on the same time zone as used by the advertiser.
     */
    dataRange?: Schema$DataRange;
    /**
     * Format of the generated report.
     */
    format?: string | null;
    /**
     * Whether to send an email notification when a report is ready. Defaults to false.
     */
    sendNotification?: boolean | null;
    /**
     * List of email addresses which are sent email notifications when the report is finished. Separate from send_notification.
     */
    shareEmailAddress?: string[] | null;
    /**
     * Query title. It is used to name the reports generated from this query.
     */
    title?: string | null;
  }
  /**
   * Information on when and how frequently to run a query.
   */
  export interface Schema$QuerySchedule {
    /**
     * Date to periodically run the query until. Not applicable to `ONE_TIME` frequency.
     */
    endDate?: Schema$Date;
    /**
     * How often the query is run.
     */
    frequency?: string | null;
    /**
     * Canonical timezone code for report generation time. Defaults to `America/New_York`.
     */
    nextRunTimezoneCode?: string | null;
    /**
     * When to start running the query. Not applicable to `ONE_TIME` frequency.
     */
    startDate?: Schema$Date;
  }
  /**
   * Represents a report.
   */
  export interface Schema$Report {
    /**
     * Key used to identify a report.
     */
    key?: Schema$ReportKey;
    /**
     * Report metadata.
     */
    metadata?: Schema$ReportMetadata;
    /**
     * Report parameters.
     */
    params?: Schema$Parameters;
  }
  /**
   * Key used to identify a report.
   */
  export interface Schema$ReportKey {
    /**
     * Output only. Query ID.
     */
    queryId?: string | null;
    /**
     * Output only. Report ID.
     */
    reportId?: string | null;
  }
  /**
   * Report metadata.
   */
  export interface Schema$ReportMetadata {
    /**
     * Output only. The path to the location in Google Cloud Storage where the report is stored.
     */
    googleCloudStoragePath?: string | null;
    /**
     * The ending time for the data that is shown in the report.
     */
    reportDataEndDate?: Schema$Date;
    /**
     * The starting time for the data that is shown in the report.
     */
    reportDataStartDate?: Schema$Date;
    /**
     * Report status.
     */
    status?: Schema$ReportStatus;
  }
  /**
   * Report status.
   */
  export interface Schema$ReportStatus {
    /**
     * Output only. The time when this report either completed successfully or failed.
     */
    finishTime?: string | null;
    /**
     * The file type of the report.
     */
    format?: string | null;
    /**
     * Output only. The state of the report.
     */
    state?: string | null;
  }
  /**
   * A Rule defines a name, and a boolean expression in [conjunctive normal form] (http://mathworld.wolfram.com/ConjunctiveNormalForm.html){.external\} that can be applied to a path event to determine if that name should be applied.
   */
  export interface Schema$Rule {
    /**
     * DisjunctiveMatchStatements within a Rule. DisjunctiveMatchStatement OR's all contained filters.
     */
    disjunctiveMatchStatements?: Schema$DisjunctiveMatchStatement[];
    /**
     * Rule name.
     */
    name?: string | null;
  }
  /**
   * Request to run a stored query to generate a report.
   */
  export interface Schema$RunQueryRequest {
    /**
     * Report data range used to generate the report. If unspecified, the original parent query's data range is used.
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
     * Creates a query.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/doubleclickbidmanager.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
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
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Queries$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Query>;
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
    ): void | GaxiosPromise<Schema$Query> | GaxiosPromise<Readable> {
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
     * Deletes a query as well as the associated reports.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/doubleclickbidmanager.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
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
     *     // Required. ID of query to delete.
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
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Queries$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
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
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
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
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
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
     *     // Required. ID of query to retrieve.
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
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Queries$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Query>;
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
    ): void | GaxiosPromise<Schema$Query> | GaxiosPromise<Readable> {
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
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
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
     *     // Name of a field used to order results. The default sorting order is ascending. To specify descending order for a field, append a " desc" suffix. For example "metadata.title desc". Sorting is only supported for the following fields: * `queryId` * `metadata.title`
     *     orderBy: 'placeholder-value',
     *     // Maximum number of results per page. Must be between `1` and `100`. Defaults to `100` if unspecified.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous list call. Provide this to retrieve the subsequent page of queries.
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
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Queries$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListQueriesResponse>;
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
      | GaxiosPromise<Schema$ListQueriesResponse>
      | GaxiosPromise<Readable> {
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
     * Runs a stored query to generate a report.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/doubleclickbidmanager.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
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
     *     // Required. ID of query to run.
     *     queryId: 'placeholder-value',
     *     // Whether the query should be run synchronously. When true, this method will not return until the query has finished running. When false or not specified, this method will return immediately.
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
    ): GaxiosPromise<Readable>;
    run(
      params?: Params$Resource$Queries$Run,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Report>;
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
    ): void | GaxiosPromise<Schema$Report> | GaxiosPromise<Readable> {
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
     * Required. ID of query to delete.
     */
    queryId?: string;
  }
  export interface Params$Resource$Queries$Get extends StandardParameters {
    /**
     * Required. ID of query to retrieve.
     */
    queryId?: string;
  }
  export interface Params$Resource$Queries$List extends StandardParameters {
    /**
     * Name of a field used to order results. The default sorting order is ascending. To specify descending order for a field, append a " desc" suffix. For example "metadata.title desc". Sorting is only supported for the following fields: * `queryId` * `metadata.title`
     */
    orderBy?: string;
    /**
     * Maximum number of results per page. Must be between `1` and `100`. Defaults to `100` if unspecified.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous list call. Provide this to retrieve the subsequent page of queries.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Queries$Run extends StandardParameters {
    /**
     * Required. ID of query to run.
     */
    queryId?: string;
    /**
     * Whether the query should be run synchronously. When true, this method will not return until the query has finished running. When false or not specified, this method will return immediately.
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
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
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
     *     // Required. ID of the query the report is associated with.
     *     queryId: 'placeholder-value',
     *     // Required. ID of the report to retrieve.
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
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Queries$Reports$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Report>;
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
    ): void | GaxiosPromise<Schema$Report> | GaxiosPromise<Readable> {
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
     * Lists reports associated with a query.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/doubleclickbidmanager.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
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
     *     // Name of a field used to order results. The default sorting order is ascending. To specify descending order for a field, append a " desc" suffix. For example "key.reportId desc". Sorting is only supported for the following fields: * `key.reportId`
     *     orderBy: 'placeholder-value',
     *     // Maximum number of results per page. Must be between `1` and `100`. Defaults to `100` if unspecified.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous list call. Provide this to retrieve the subsequent page of reports.
     *     pageToken: 'placeholder-value',
     *     // Required. ID of the query with which the reports are associated.
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
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Queries$Reports$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListReportsResponse>;
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
      | GaxiosPromise<Schema$ListReportsResponse>
      | GaxiosPromise<Readable> {
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
     * Required. ID of the query the report is associated with.
     */
    queryId?: string;
    /**
     * Required. ID of the report to retrieve.
     */
    reportId?: string;
  }
  export interface Params$Resource$Queries$Reports$List
    extends StandardParameters {
    /**
     * Name of a field used to order results. The default sorting order is ascending. To specify descending order for a field, append a " desc" suffix. For example "key.reportId desc". Sorting is only supported for the following fields: * `key.reportId`
     */
    orderBy?: string;
    /**
     * Maximum number of results per page. Must be between `1` and `100`. Defaults to `100` if unspecified.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous list call. Provide this to retrieve the subsequent page of reports.
     */
    pageToken?: string;
    /**
     * Required. ID of the query with which the reports are associated.
     */
    queryId?: string;
  }
}
