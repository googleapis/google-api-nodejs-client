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

export namespace gmailpostmastertools_v2 {
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
   * Gmail Postmaster Tools API
   *
   * The Postmaster Tools API is a RESTful API that provides programmatic access to email traffic metrics (like spam reports, delivery errors etc) otherwise available through the Gmail Postmaster Tools UI currently.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const gmailpostmastertools = google.gmailpostmastertools('v2');
   * ```
   */
  export class Gmailpostmastertools {
    context: APIRequestContext;
    domains: Resource$Domains;
    domainStats: Resource$Domainstats;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.domains = new Resource$Domains(this.context);
      this.domainStats = new Resource$Domainstats(this.context);
    }
  }

  /**
   * Specifies the base metric to query, which can be a predefined standard metric or a user-defined custom metric (if supported in the future).
   */
  export interface Schema$BaseMetric {
    /**
     * A predefined standard metric.
     */
    standardMetric?: string | null;
  }
  /**
   * Request message for BatchQueryDomainStats.
   */
  export interface Schema$BatchQueryDomainStatsRequest {
    /**
     * Required. A list of individual query requests. Each request can be for a different domain. A maximum of 100 requests can be included in a single batch.
     */
    requests?: Schema$QueryDomainStatsRequest[];
  }
  /**
   * Response message for BatchQueryDomainStats.
   */
  export interface Schema$BatchQueryDomainStatsResponse {
    /**
     * A list of responses, one for each query in the BatchQueryDomainStatsRequest. The order of responses will correspond to the order of requests.
     */
    results?: Schema$BatchQueryDomainStatsResult[];
  }
  /**
   * Represents the result of a single QueryDomainStatsRequest within a batch.
   */
  export interface Schema$BatchQueryDomainStatsResult {
    /**
     * The error status if the individual query failed.
     */
    error?: Schema$Status;
    /**
     * The successful response for the individual query.
     */
    response?: Schema$QueryDomainStatsResponse;
  }
  /**
   * Data for a single row of the compliance status table.
   */
  export interface Schema$ComplianceRowData {
    /**
     * The compliance requirement.
     */
    requirement?: string | null;
    /**
     * The compliance status for the requirement.
     */
    status?: Schema$ComplianceStatus;
  }
  /**
   * The status of a sender compliance requirement.
   */
  export interface Schema$ComplianceStatus {
    /**
     * Output only. The compliance status.
     */
    status?: string | null;
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
   * A set of specific dates.
   */
  export interface Schema$DateList {
    /**
     * Required. The list of specific dates for which to retrieve data.
     */
    dates?: Schema$Date[];
  }
  /**
   * A single date range defined by a start and end date.
   */
  export interface Schema$DateRange {
    /**
     * Required. The inclusive end date of the date range.
     */
    end?: Schema$Date;
    /**
     * Required. The inclusive start date of the date range.
     */
    start?: Schema$Date;
  }
  /**
   * A set of date ranges.
   */
  export interface Schema$DateRanges {
    /**
     * Required. The list of date ranges for which to retrieve data.
     */
    dateRanges?: Schema$DateRange[];
  }
  /**
   * Information about a domain registered by the user.
   */
  export interface Schema$Domain {
    /**
     * Output only. Immutable. The timestamp at which the domain was added to the user's account.
     */
    createTime?: string | null;
    /**
     * The timestamp at which the domain was last verified by the user.
     */
    lastVerifyTime?: string | null;
    /**
     * Identifier. The resource name of the domain. Format: `domains/{domain_name\}`, where domain_name is the fully qualified domain name (i.e., mymail.mydomain.com).
     */
    name?: string | null;
    /**
     * Output only. User's permission of this domain.
     */
    permission?: string | null;
    /**
     * Output only. Information about a user's verification history and properties for the domain.
     */
    verificationState?: string | null;
  }
  /**
   * Compliance data for a given domain.
   */
  export interface Schema$DomainComplianceData {
    /**
     * Domain that this data is for.
     */
    domainId?: string | null;
    /**
     * Unsubscribe honoring compliance verdict.
     */
    honorUnsubscribeVerdict?: Schema$HonorUnsubscribeVerdict;
    /**
     * One-click unsubscribe compliance verdict.
     */
    oneClickUnsubscribeVerdict?: Schema$OneClickUnsubscribeVerdict;
    /**
     * Data for each of the rows of the table. Each message contains all the data that backs a single row.
     */
    rowData?: Schema$ComplianceRowData[];
  }
  /**
   * Compliance status for a domain.
   */
  export interface Schema$DomainComplianceStatus {
    /**
     * Compliance data for the registrable domain part of the domain in `name`. For example, if `name` is `domains/example.com/complianceStatus`, this field contains compliance data for `example.com`.
     */
    complianceData?: Schema$DomainComplianceData;
    /**
     * Identifier. The resource name of the domain's compliance status. Format: `domains/{domain_id\}/complianceStatus`.
     */
    name?: string | null;
    /**
     * Compliance data calculated specifically for the subdomain in `name`. This field is only populated if the domain in `name` is a subdomain that differs from its registrable domain (e.g., `sub.example.com`), and if compliance data is available for that specific subdomain.
     */
    subdomainComplianceData?: Schema$DomainComplianceData;
  }
  /**
   * Email statistics for a domain for a specified time period or date.
   */
  export interface Schema$DomainStat {
    /**
     * Optional. The specific date for these stats, if granularity is DAILY. This field is populated if the QueryDomainStatsRequest specified a DAILY aggregation granularity.
     */
    date?: Schema$Date;
    /**
     * The user-defined name from MetricDefinition.name in the request, used to correlate this result with the requested metric.
     */
    metric?: string | null;
    /**
     * Output only. The resource name of the DomainStat resource. Format: domains/{domain\}/domainStats/{domain_stat\} The `{domain_stat\}` segment is an opaque, server-generated ID. We recommend using the `metric` field to identify queried metrics instead of parsing the name.
     */
    name?: string | null;
    /**
     * The value of the corresponding metric.
     */
    value?: Schema$StatisticValue;
  }
  /**
   * Compliance verdict for whether a sender meets the unsubscribe honoring compliance requirement.
   */
  export interface Schema$HonorUnsubscribeVerdict {
    /**
     * The specific reason for the compliance verdict. Must be empty if the status is compliant.
     */
    reason?: string | null;
    /**
     * The compliance status.
     */
    status?: Schema$ComplianceStatus;
  }
  /**
   * Response message for ListDomains.
   */
  export interface Schema$ListDomainsResponse {
    /**
     * The domains that have been registered by the user.
     */
    domains?: Schema$Domain[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
  }
  /**
   * Defines a specific metric to query, including a user-defined name, the base metric type, and optional filters.
   */
  export interface Schema$MetricDefinition {
    /**
     * Required. The underlying metric to query.
     */
    baseMetric?: Schema$BaseMetric;
    /**
     * Optional. Optional filters to apply to the metric.
     */
    filter?: string | null;
    /**
     * Required. The user-defined name for this metric. This name will be used as the key for this metric's value in the response.
     */
    name?: string | null;
  }
  /**
   * Compliance verdict for whether a sender meets the one-click unsubscribe compliance requirement.
   */
  export interface Schema$OneClickUnsubscribeVerdict {
    /**
     * The specific reason for the compliance verdict. Must be empty if the status is compliant.
     */
    reason?: string | null;
    /**
     * The compliance status.
     */
    status?: Schema$ComplianceStatus;
  }
  /**
   * Request message for QueryDomainStats.
   */
  export interface Schema$QueryDomainStatsRequest {
    /**
     * Optional. The granularity at which to aggregate the statistics. If unspecified, defaults to DAILY.
     */
    aggregationGranularity?: string | null;
    /**
     * Required. The specific metrics to query. You can define a custom name for each metric, which will be used in the response.
     */
    metricDefinitions?: Schema$MetricDefinition[];
    /**
     * Optional. The maximum number of DomainStats resources to return in the response. The server may return fewer than this value. If unspecified, a default value of 10 will be used. The maximum value is 200.
     */
    pageSize?: number | null;
    /**
     * Optional. The next_page_token value returned from a previous List request, if any. If the aggregation granularity is DAILY, the page token will be the encoded date + "/" + metric name. If the aggregation granularity is OVERALL, the page token will be the encoded metric name.
     */
    pageToken?: string | null;
    /**
     * Required. The parent resource name where the stats are queried. Format: domains/{domain\}
     */
    parent?: string | null;
    /**
     * Required. The time range or specific dates for which to retrieve the metrics.
     */
    timeQuery?: Schema$TimeQuery;
  }
  /**
   * Response message for QueryDomainStats.
   */
  export interface Schema$QueryDomainStatsResponse {
    /**
     * The list of domain statistics. Each DomainStat object contains the value for a metric requested in the QueryDomainStatsRequest.
     */
    domainStats?: Schema$DomainStat[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
  }
  /**
   * The actual value of a statistic.
   */
  export interface Schema$StatisticValue {
    /**
     * Double value.
     */
    doubleValue?: number | null;
    /**
     * Float value.
     */
    floatValue?: number | null;
    /**
     * Integer value.
     */
    intValue?: string | null;
    /**
     * List of string values.
     */
    stringList?: Schema$StringList;
    /**
     * String value.
     */
    stringValue?: string | null;
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
   * Represents a list of strings.
   */
  export interface Schema$StringList {
    /**
     * The string values.
     */
    values?: string[] | null;
  }
  /**
   * The date ranges or specific dates for which you want to retrieve data.
   */
  export interface Schema$TimeQuery {
    /**
     * A list of specific dates.
     */
    dateList?: Schema$DateList;
    /**
     * A list of date ranges.
     */
    dateRanges?: Schema$DateRanges;
  }

  export class Resource$Domains {
    context: APIRequestContext;
    domainStats: Resource$Domains$Domainstats;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.domainStats = new Resource$Domains$Domainstats(this.context);
    }

    /**
     * Retrieves detailed information about a domain registered by you. Returns NOT_FOUND if the domain is not registered by you. Domain represents the metadata of a domain that has been registered within the system and linked to a user.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmailpostmastertools.googleapis.com
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
     * const gmailpostmastertools = google.gmailpostmastertools('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/postmaster',
     *       'https://www.googleapis.com/auth/postmaster.domain',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmailpostmastertools.domains.get({
     *     // Required. The resource name of the domain. Format: `domains/{domain_name\}`, where domain_name is the fully qualified domain name (i.e., mymail.mydomain.com).
     *     name: 'domains/my-domain',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "lastVerifyTime": "my_lastVerifyTime",
     *   //   "name": "my_name",
     *   //   "permission": "my_permission",
     *   //   "verificationState": "my_verificationState"
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
      params: Params$Resource$Domains$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Domains$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Domain>>;
    get(
      params: Params$Resource$Domains$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Domains$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Domain>,
      callback: BodyResponseCallback<Schema$Domain>
    ): void;
    get(
      params: Params$Resource$Domains$Get,
      callback: BodyResponseCallback<Schema$Domain>
    ): void;
    get(callback: BodyResponseCallback<Schema$Domain>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Domains$Get
        | BodyResponseCallback<Schema$Domain>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Domain>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Domain>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Domain>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Domains$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Domains$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://gmailpostmastertools.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Domain>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Domain>(parameters);
      }
    }

    /**
     * Retrieves the compliance status for a given domain. Returns PERMISSION_DENIED if you don't have permission to access compliance status for the domain.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmailpostmastertools.googleapis.com
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
     * const gmailpostmastertools = google.gmailpostmastertools('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/postmaster',
     *       'https://www.googleapis.com/auth/postmaster.traffic.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmailpostmastertools.domains.getComplianceStatus({
     *     // Required. The resource name of the domain's compliance status to retrieve. Format: `domains/{domain_id\}/complianceStatus`.
     *     name: 'domains/my-domain/complianceStatus',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "complianceData": {},
     *   //   "name": "my_name",
     *   //   "subdomainComplianceData": {}
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
    getComplianceStatus(
      params: Params$Resource$Domains$Getcompliancestatus,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getComplianceStatus(
      params?: Params$Resource$Domains$Getcompliancestatus,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DomainComplianceStatus>>;
    getComplianceStatus(
      params: Params$Resource$Domains$Getcompliancestatus,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getComplianceStatus(
      params: Params$Resource$Domains$Getcompliancestatus,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$DomainComplianceStatus>,
      callback: BodyResponseCallback<Schema$DomainComplianceStatus>
    ): void;
    getComplianceStatus(
      params: Params$Resource$Domains$Getcompliancestatus,
      callback: BodyResponseCallback<Schema$DomainComplianceStatus>
    ): void;
    getComplianceStatus(
      callback: BodyResponseCallback<Schema$DomainComplianceStatus>
    ): void;
    getComplianceStatus(
      paramsOrCallback?:
        | Params$Resource$Domains$Getcompliancestatus
        | BodyResponseCallback<Schema$DomainComplianceStatus>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DomainComplianceStatus>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DomainComplianceStatus>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$DomainComplianceStatus>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Domains$Getcompliancestatus;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Domains$Getcompliancestatus;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://gmailpostmastertools.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$DomainComplianceStatus>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DomainComplianceStatus>(parameters);
      }
    }

    /**
     * Retrieves a list of all domains registered by you, along with their corresponding metadata. The order of domains in the response is unspecified and non-deterministic. Newly registered domains will not necessarily be added to the end of this list.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmailpostmastertools.googleapis.com
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
     * const gmailpostmastertools = google.gmailpostmastertools('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/postmaster',
     *       'https://www.googleapis.com/auth/postmaster.domain',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmailpostmastertools.domains.list({
     *     // Optional. Requested page size. Server may return fewer domains than requested. If unspecified, the default value for this field is 10. The maximum value for this field is 200.
     *     pageSize: 'placeholder-value',
     *     // Optional. The next_page_token value returned from a previous List request, if any.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "domains": [],
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
      params: Params$Resource$Domains$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Domains$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListDomainsResponse>>;
    list(
      params: Params$Resource$Domains$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Domains$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListDomainsResponse>,
      callback: BodyResponseCallback<Schema$ListDomainsResponse>
    ): void;
    list(
      params: Params$Resource$Domains$List,
      callback: BodyResponseCallback<Schema$ListDomainsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListDomainsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Domains$List
        | BodyResponseCallback<Schema$ListDomainsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDomainsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDomainsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListDomainsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Domains$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Domains$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://gmailpostmastertools.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/domains').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListDomainsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDomainsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Domains$Get extends StandardParameters {
    /**
     * Required. The resource name of the domain. Format: `domains/{domain_name\}`, where domain_name is the fully qualified domain name (i.e., mymail.mydomain.com).
     */
    name?: string;
  }
  export interface Params$Resource$Domains$Getcompliancestatus extends StandardParameters {
    /**
     * Required. The resource name of the domain's compliance status to retrieve. Format: `domains/{domain_id\}/complianceStatus`.
     */
    name?: string;
  }
  export interface Params$Resource$Domains$List extends StandardParameters {
    /**
     * Optional. Requested page size. Server may return fewer domains than requested. If unspecified, the default value for this field is 10. The maximum value for this field is 200.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
  }

  export class Resource$Domains$Domainstats {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves a list of domain statistics for a given domain and time period. Returns statistics only for dates where data is available. Returns PERMISSION_DENIED if you don't have permission to access DomainStats for the domain.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmailpostmastertools.googleapis.com
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
     * const gmailpostmastertools = google.gmailpostmastertools('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/postmaster',
     *       'https://www.googleapis.com/auth/postmaster.traffic.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmailpostmastertools.domains.domainStats.query({
     *     // Required. The parent resource name where the stats are queried. Format: domains/{domain\}
     *     parent: 'domains/my-domain',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "aggregationGranularity": "my_aggregationGranularity",
     *       //   "metricDefinitions": [],
     *       //   "pageSize": 0,
     *       //   "pageToken": "my_pageToken",
     *       //   "parent": "my_parent",
     *       //   "timeQuery": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "domainStats": [],
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
    query(
      params: Params$Resource$Domains$Domainstats$Query,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    query(
      params?: Params$Resource$Domains$Domainstats$Query,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$QueryDomainStatsResponse>>;
    query(
      params: Params$Resource$Domains$Domainstats$Query,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    query(
      params: Params$Resource$Domains$Domainstats$Query,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$QueryDomainStatsResponse>,
      callback: BodyResponseCallback<Schema$QueryDomainStatsResponse>
    ): void;
    query(
      params: Params$Resource$Domains$Domainstats$Query,
      callback: BodyResponseCallback<Schema$QueryDomainStatsResponse>
    ): void;
    query(
      callback: BodyResponseCallback<Schema$QueryDomainStatsResponse>
    ): void;
    query(
      paramsOrCallback?:
        | Params$Resource$Domains$Domainstats$Query
        | BodyResponseCallback<Schema$QueryDomainStatsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$QueryDomainStatsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$QueryDomainStatsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$QueryDomainStatsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Domains$Domainstats$Query;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Domains$Domainstats$Query;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://gmailpostmastertools.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/domainStats:query').replace(
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
        createAPIRequest<Schema$QueryDomainStatsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$QueryDomainStatsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Domains$Domainstats$Query extends StandardParameters {
    /**
     * Required. The parent resource name where the stats are queried. Format: domains/{domain\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$QueryDomainStatsRequest;
  }

  export class Resource$Domainstats {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Executes a batch of QueryDomainStats requests for multiple domains. Returns PERMISSION_DENIED if you don't have permission to access DomainStats for any of the requested domains.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmailpostmastertools.googleapis.com
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
     * const gmailpostmastertools = google.gmailpostmastertools('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/postmaster',
     *       'https://www.googleapis.com/auth/postmaster.traffic.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmailpostmastertools.domainStats.batchQuery({
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
     *   //   "results": []
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
    batchQuery(
      params: Params$Resource$Domainstats$Batchquery,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchQuery(
      params?: Params$Resource$Domainstats$Batchquery,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$BatchQueryDomainStatsResponse>>;
    batchQuery(
      params: Params$Resource$Domainstats$Batchquery,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchQuery(
      params: Params$Resource$Domainstats$Batchquery,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchQueryDomainStatsResponse>,
      callback: BodyResponseCallback<Schema$BatchQueryDomainStatsResponse>
    ): void;
    batchQuery(
      params: Params$Resource$Domainstats$Batchquery,
      callback: BodyResponseCallback<Schema$BatchQueryDomainStatsResponse>
    ): void;
    batchQuery(
      callback: BodyResponseCallback<Schema$BatchQueryDomainStatsResponse>
    ): void;
    batchQuery(
      paramsOrCallback?:
        | Params$Resource$Domainstats$Batchquery
        | BodyResponseCallback<Schema$BatchQueryDomainStatsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BatchQueryDomainStatsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BatchQueryDomainStatsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$BatchQueryDomainStatsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Domainstats$Batchquery;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Domainstats$Batchquery;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://gmailpostmastertools.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/domainStats:batchQuery').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$BatchQueryDomainStatsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BatchQueryDomainStatsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Domainstats$Batchquery extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchQueryDomainStatsRequest;
  }
}
