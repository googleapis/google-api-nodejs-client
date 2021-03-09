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

export namespace webmasters_v3 {
  export interface Options extends GlobalOptions {
    version: 'v3';
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
     * Data format for the response.
     */
    alt?: string;
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
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
  }

  /**
   * Search Console API
   *
   * View Google Search Console data for your verified sites.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const webmasters = google.webmasters('v3');
   * ```
   */
  export class Webmasters {
    context: APIRequestContext;
    searchanalytics: Resource$Searchanalytics;
    sitemaps: Resource$Sitemaps;
    sites: Resource$Sites;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.searchanalytics = new Resource$Searchanalytics(this.context);
      this.sitemaps = new Resource$Sitemaps(this.context);
      this.sites = new Resource$Sites(this.context);
    }
  }

  export interface Schema$ApiDataRow {
    clicks?: number | null;
    ctr?: number | null;
    impressions?: number | null;
    keys?: string[] | null;
    position?: number | null;
  }
  export interface Schema$ApiDimensionFilter {
    dimension?: string | null;
    expression?: string | null;
    operator?: string | null;
  }
  export interface Schema$ApiDimensionFilterGroup {
    filters?: Schema$ApiDimensionFilter[];
    groupType?: string | null;
  }
  export interface Schema$SearchAnalyticsQueryRequest {
    /**
     * [Optional; Default is "auto"] How data is aggregated. If aggregated by property, all data for the same property is aggregated; if aggregated by page, all data is aggregated by canonical URI. If you filter or group by page, choose AUTO; otherwise you can aggregate either by property or by page, depending on how you want your data calculated; see  the help documentation to learn how data is calculated differently by site versus by page.
     *
     * Note: If you group or filter by page, you cannot aggregate by property.
     *
     * If you specify any value other than AUTO, the aggregation type in the result will match the requested type, or if you request an invalid type, you will get an error. The API will never change your aggregation type if the requested type is invalid.
     */
    aggregationType?: string | null;
    /**
     * [Optional] If "all" (case-insensitive), data will include fresh data. If "final" (case-insensitive) or if this parameter is omitted, the returned data will include only finalized data.
     */
    dataState?: string | null;
    /**
     * [Optional] Zero or more filters to apply to the dimension grouping values; for example, 'query contains "buy"' to see only data where the query string contains the substring "buy" (not case-sensitive). You can filter by a dimension without grouping by it.
     */
    dimensionFilterGroups?: Schema$ApiDimensionFilterGroup[];
    /**
     * [Optional] Zero or more dimensions to group results by. Dimensions are the group-by values in the Search Analytics page. Dimensions are combined to create a unique row key for each row. Results are grouped in the order that you supply these dimensions.
     */
    dimensions?: string[] | null;
    /**
     * [Required] End date of the requested date range, in YYYY-MM-DD format, in PST (UTC - 8:00). Must be greater than or equal to the start date. This value is included in the range.
     */
    endDate?: string | null;
    /**
     * [Optional; Default is 1000] The maximum number of rows to return. Must be a number from 1 to 5,000 (inclusive).
     */
    rowLimit?: number | null;
    /**
     * [Optional; Default is "web"] The search type to filter for.
     */
    searchType?: string | null;
    /**
     * [Required] Start date of the requested date range, in YYYY-MM-DD format, in PST time (UTC - 8:00). Must be less than or equal to the end date. This value is included in the range.
     */
    startDate?: string | null;
    /**
     * [Optional; Default is 0] Zero-based index of the first row in the response. Must be a non-negative number.
     */
    startRow?: number | null;
  }
  /**
   * A list of rows, one per result, grouped by key. Metrics in each row are aggregated for all data grouped by that key either by page or property, as specified by the aggregation type parameter.
   */
  export interface Schema$SearchAnalyticsQueryResponse {
    /**
     * How the results were aggregated.
     */
    responseAggregationType?: string | null;
    /**
     * A list of rows grouped by the key values in the order given in the query.
     */
    rows?: Schema$ApiDataRow[];
  }
  /**
   * List of sitemaps.
   */
  export interface Schema$SitemapsListResponse {
    /**
     * Contains detailed information about a specific URL submitted as a sitemap.
     */
    sitemap?: Schema$WmxSitemap[];
  }
  /**
   * List of sites with access level information.
   */
  export interface Schema$SitesListResponse {
    /**
     * Contains permission level information about a Search Console site. For more information, see Permissions in Search Console.
     */
    siteEntry?: Schema$WmxSite[];
  }
  /**
   * Contains permission level information about a Search Console site. For more information, see  Permissions in Search Console.
   */
  export interface Schema$WmxSite {
    /**
     * The user's permission level for the site.
     */
    permissionLevel?: string | null;
    /**
     * The URL of the site.
     */
    siteUrl?: string | null;
  }
  /**
   * Contains detailed information about a specific URL submitted as a sitemap.
   */
  export interface Schema$WmxSitemap {
    /**
     * The various content types in the sitemap.
     */
    contents?: Schema$WmxSitemapContent[];
    /**
     * Number of errors in the sitemap. These are issues with the sitemap itself that need to be fixed before it can be processed correctly.
     */
    errors?: string | null;
    /**
     * If true, the sitemap has not been processed.
     */
    isPending?: boolean | null;
    /**
     * If true, the sitemap is a collection of sitemaps.
     */
    isSitemapsIndex?: boolean | null;
    /**
     * Date & time in which this sitemap was last downloaded. Date format is in RFC 3339 format (yyyy-mm-dd).
     */
    lastDownloaded?: string | null;
    /**
     * Date & time in which this sitemap was submitted. Date format is in RFC 3339 format (yyyy-mm-dd).
     */
    lastSubmitted?: string | null;
    /**
     * The url of the sitemap.
     */
    path?: string | null;
    /**
     * The type of the sitemap. For example: rssFeed.
     */
    type?: string | null;
    /**
     * Number of warnings for the sitemap. These are generally non-critical issues with URLs in the sitemaps.
     */
    warnings?: string | null;
  }
  /**
   * Information about the various content types in the sitemap.
   */
  export interface Schema$WmxSitemapContent {
    /**
     * The number of URLs from the sitemap that were indexed (of the content type).
     */
    indexed?: string | null;
    /**
     * The number of URLs in the sitemap (of the content type).
     */
    submitted?: string | null;
    /**
     * The specific type of content in this sitemap. For example: web.
     */
    type?: string | null;
  }

  export class Resource$Searchanalytics {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row keys that you define. You must define a date range of one or more days.
     *
     * When date is one of the group by values, any days without data are omitted from the result list. If you need to know which days have data, issue a broad date range query grouped by date for any metric, and see which day rows are returned.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/webmasters.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const webmasters = google.webmasters('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/webmasters',
     *       'https://www.googleapis.com/auth/webmasters.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await webmasters.searchanalytics.query({
     *     // The site's URL, including protocol. For example: http://www.example.com/
     *     siteUrl: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "aggregationType": "my_aggregationType",
     *       //   "dataState": "my_dataState",
     *       //   "dimensionFilterGroups": [],
     *       //   "dimensions": [],
     *       //   "endDate": "my_endDate",
     *       //   "rowLimit": 0,
     *       //   "searchType": "my_searchType",
     *       //   "startDate": "my_startDate",
     *       //   "startRow": 0
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "responseAggregationType": "my_responseAggregationType",
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
      params: Params$Resource$Searchanalytics$Query,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    query(
      params?: Params$Resource$Searchanalytics$Query,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SearchAnalyticsQueryResponse>;
    query(
      params: Params$Resource$Searchanalytics$Query,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    query(
      params: Params$Resource$Searchanalytics$Query,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SearchAnalyticsQueryResponse>,
      callback: BodyResponseCallback<Schema$SearchAnalyticsQueryResponse>
    ): void;
    query(
      params: Params$Resource$Searchanalytics$Query,
      callback: BodyResponseCallback<Schema$SearchAnalyticsQueryResponse>
    ): void;
    query(
      callback: BodyResponseCallback<Schema$SearchAnalyticsQueryResponse>
    ): void;
    query(
      paramsOrCallback?:
        | Params$Resource$Searchanalytics$Query
        | BodyResponseCallback<Schema$SearchAnalyticsQueryResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SearchAnalyticsQueryResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SearchAnalyticsQueryResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SearchAnalyticsQueryResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Searchanalytics$Query;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Searchanalytics$Query;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/webmasters/v3/sites/{siteUrl}/searchAnalytics/query'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['siteUrl'],
        pathParams: ['siteUrl'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SearchAnalyticsQueryResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SearchAnalyticsQueryResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Searchanalytics$Query
    extends StandardParameters {
    /**
     * The site's URL, including protocol. For example: http://www.example.com/
     */
    siteUrl?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SearchAnalyticsQueryRequest;
  }

  export class Resource$Sitemaps {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a sitemap from this site.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/webmasters.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const webmasters = google.webmasters('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/webmasters'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await webmasters.sitemaps.delete({
     *     // The URL of the actual sitemap. For example: http://www.example.com/sitemap.xml
     *     feedpath: 'placeholder-value',
     *     // The site's URL, including protocol. For example: http://www.example.com/
     *     siteUrl: 'placeholder-value',
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
      params: Params$Resource$Sitemaps$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Sitemaps$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Sitemaps$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Sitemaps$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Sitemaps$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Sitemaps$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Sitemaps$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sitemaps$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['siteUrl', 'feedpath'],
        pathParams: ['feedpath', 'siteUrl'],
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
     * Retrieves information about a specific sitemap.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/webmasters.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const webmasters = google.webmasters('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/webmasters',
     *       'https://www.googleapis.com/auth/webmasters.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await webmasters.sitemaps.get({
     *     // The URL of the actual sitemap. For example: http://www.example.com/sitemap.xml
     *     feedpath: 'placeholder-value',
     *     // The site's URL, including protocol. For example: http://www.example.com/
     *     siteUrl: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contents": [],
     *   //   "errors": "my_errors",
     *   //   "isPending": false,
     *   //   "isSitemapsIndex": false,
     *   //   "lastDownloaded": "my_lastDownloaded",
     *   //   "lastSubmitted": "my_lastSubmitted",
     *   //   "path": "my_path",
     *   //   "type": "my_type",
     *   //   "warnings": "my_warnings"
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
      params: Params$Resource$Sitemaps$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Sitemaps$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$WmxSitemap>;
    get(
      params: Params$Resource$Sitemaps$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Sitemaps$Get,
      options: MethodOptions | BodyResponseCallback<Schema$WmxSitemap>,
      callback: BodyResponseCallback<Schema$WmxSitemap>
    ): void;
    get(
      params: Params$Resource$Sitemaps$Get,
      callback: BodyResponseCallback<Schema$WmxSitemap>
    ): void;
    get(callback: BodyResponseCallback<Schema$WmxSitemap>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Sitemaps$Get
        | BodyResponseCallback<Schema$WmxSitemap>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WmxSitemap>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WmxSitemap>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$WmxSitemap> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Sitemaps$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sitemaps$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['siteUrl', 'feedpath'],
        pathParams: ['feedpath', 'siteUrl'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$WmxSitemap>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WmxSitemap>(parameters);
      }
    }

    /**
     * Lists the sitemaps-entries submitted for this site, or included in the sitemap index file (if sitemapIndex is specified in the request).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/webmasters.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const webmasters = google.webmasters('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/webmasters',
     *       'https://www.googleapis.com/auth/webmasters.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await webmasters.sitemaps.list({
     *     // A URL of a site's sitemap index. For example: http://www.example.com/sitemapindex.xml
     *     sitemapIndex: 'placeholder-value',
     *     // The site's URL, including protocol. For example: http://www.example.com/
     *     siteUrl: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "sitemap": []
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
      params: Params$Resource$Sitemaps$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Sitemaps$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SitemapsListResponse>;
    list(
      params: Params$Resource$Sitemaps$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Sitemaps$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SitemapsListResponse>,
      callback: BodyResponseCallback<Schema$SitemapsListResponse>
    ): void;
    list(
      params: Params$Resource$Sitemaps$List,
      callback: BodyResponseCallback<Schema$SitemapsListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$SitemapsListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Sitemaps$List
        | BodyResponseCallback<Schema$SitemapsListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SitemapsListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SitemapsListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SitemapsListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Sitemaps$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sitemaps$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/webmasters/v3/sites/{siteUrl}/sitemaps').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['siteUrl'],
        pathParams: ['siteUrl'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SitemapsListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SitemapsListResponse>(parameters);
      }
    }

    /**
     * Submits a sitemap for a site.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/webmasters.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const webmasters = google.webmasters('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/webmasters'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await webmasters.sitemaps.submit({
     *     // The URL of the sitemap to add. For example: http://www.example.com/sitemap.xml
     *     feedpath: 'placeholder-value',
     *     // The site's URL, including protocol. For example: http://www.example.com/
     *     siteUrl: 'placeholder-value',
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
    submit(
      params: Params$Resource$Sitemaps$Submit,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    submit(
      params?: Params$Resource$Sitemaps$Submit,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    submit(
      params: Params$Resource$Sitemaps$Submit,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    submit(
      params: Params$Resource$Sitemaps$Submit,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    submit(
      params: Params$Resource$Sitemaps$Submit,
      callback: BodyResponseCallback<void>
    ): void;
    submit(callback: BodyResponseCallback<void>): void;
    submit(
      paramsOrCallback?:
        | Params$Resource$Sitemaps$Submit
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Sitemaps$Submit;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sitemaps$Submit;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['siteUrl', 'feedpath'],
        pathParams: ['feedpath', 'siteUrl'],
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
  }

  export interface Params$Resource$Sitemaps$Delete extends StandardParameters {
    /**
     * The URL of the actual sitemap. For example: http://www.example.com/sitemap.xml
     */
    feedpath?: string;
    /**
     * The site's URL, including protocol. For example: http://www.example.com/
     */
    siteUrl?: string;
  }
  export interface Params$Resource$Sitemaps$Get extends StandardParameters {
    /**
     * The URL of the actual sitemap. For example: http://www.example.com/sitemap.xml
     */
    feedpath?: string;
    /**
     * The site's URL, including protocol. For example: http://www.example.com/
     */
    siteUrl?: string;
  }
  export interface Params$Resource$Sitemaps$List extends StandardParameters {
    /**
     * A URL of a site's sitemap index. For example: http://www.example.com/sitemapindex.xml
     */
    sitemapIndex?: string;
    /**
     * The site's URL, including protocol. For example: http://www.example.com/
     */
    siteUrl?: string;
  }
  export interface Params$Resource$Sitemaps$Submit extends StandardParameters {
    /**
     * The URL of the sitemap to add. For example: http://www.example.com/sitemap.xml
     */
    feedpath?: string;
    /**
     * The site's URL, including protocol. For example: http://www.example.com/
     */
    siteUrl?: string;
  }

  export class Resource$Sites {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Adds a site to the set of the user's sites in Search Console.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/webmasters.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const webmasters = google.webmasters('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/webmasters'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await webmasters.sites.add({
     *     // The URL of the site to add.
     *     siteUrl: 'placeholder-value',
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
    add(
      params: Params$Resource$Sites$Add,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    add(
      params?: Params$Resource$Sites$Add,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    add(
      params: Params$Resource$Sites$Add,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    add(
      params: Params$Resource$Sites$Add,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    add(
      params: Params$Resource$Sites$Add,
      callback: BodyResponseCallback<void>
    ): void;
    add(callback: BodyResponseCallback<void>): void;
    add(
      paramsOrCallback?:
        | Params$Resource$Sites$Add
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Sites$Add;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Add;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/webmasters/v3/sites/{siteUrl}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['siteUrl'],
        pathParams: ['siteUrl'],
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
     * Removes a site from the set of the user's Search Console sites.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/webmasters.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const webmasters = google.webmasters('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/webmasters'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await webmasters.sites.delete({
     *     // The URI of the property as defined in Search Console. Examples: http://www.example.com/ or android-app://com.example/ Note: for property-sets, use the URI that starts with sc-set: which is used in Search Console URLs.
     *     siteUrl: 'placeholder-value',
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
      params: Params$Resource$Sites$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Sites$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Sites$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Sites$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Sites$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Sites$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Sites$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/webmasters/v3/sites/{siteUrl}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['siteUrl'],
        pathParams: ['siteUrl'],
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
     * Retrieves information about specific site.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/webmasters.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const webmasters = google.webmasters('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/webmasters',
     *       'https://www.googleapis.com/auth/webmasters.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await webmasters.sites.get({
     *     // The URI of the property as defined in Search Console. Examples: http://www.example.com/ or android-app://com.example/ Note: for property-sets, use the URI that starts with sc-set: which is used in Search Console URLs.
     *     siteUrl: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "permissionLevel": "my_permissionLevel",
     *   //   "siteUrl": "my_siteUrl"
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
      params: Params$Resource$Sites$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Sites$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$WmxSite>;
    get(
      params: Params$Resource$Sites$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Sites$Get,
      options: MethodOptions | BodyResponseCallback<Schema$WmxSite>,
      callback: BodyResponseCallback<Schema$WmxSite>
    ): void;
    get(
      params: Params$Resource$Sites$Get,
      callback: BodyResponseCallback<Schema$WmxSite>
    ): void;
    get(callback: BodyResponseCallback<Schema$WmxSite>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Sites$Get
        | BodyResponseCallback<Schema$WmxSite>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WmxSite>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WmxSite>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$WmxSite> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Sites$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/webmasters/v3/sites/{siteUrl}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['siteUrl'],
        pathParams: ['siteUrl'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$WmxSite>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WmxSite>(parameters);
      }
    }

    /**
     * Lists the user's Search Console sites.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/webmasters.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const webmasters = google.webmasters('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/webmasters',
     *       'https://www.googleapis.com/auth/webmasters.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await webmasters.sites.list({});
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "siteEntry": []
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
      params: Params$Resource$Sites$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Sites$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SitesListResponse>;
    list(
      params: Params$Resource$Sites$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Sites$List,
      options: MethodOptions | BodyResponseCallback<Schema$SitesListResponse>,
      callback: BodyResponseCallback<Schema$SitesListResponse>
    ): void;
    list(
      params: Params$Resource$Sites$List,
      callback: BodyResponseCallback<Schema$SitesListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$SitesListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Sites$List
        | BodyResponseCallback<Schema$SitesListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SitesListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SitesListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SitesListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Sites$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/webmasters/v3/sites').replace(
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
        createAPIRequest<Schema$SitesListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SitesListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Sites$Add extends StandardParameters {
    /**
     * The URL of the site to add.
     */
    siteUrl?: string;
  }
  export interface Params$Resource$Sites$Delete extends StandardParameters {
    /**
     * The URI of the property as defined in Search Console. Examples: http://www.example.com/ or android-app://com.example/ Note: for property-sets, use the URI that starts with sc-set: which is used in Search Console URLs.
     */
    siteUrl?: string;
  }
  export interface Params$Resource$Sites$Get extends StandardParameters {
    /**
     * The URI of the property as defined in Search Console. Examples: http://www.example.com/ or android-app://com.example/ Note: for property-sets, use the URI that starts with sc-set: which is used in Search Console URLs.
     */
    siteUrl?: string;
  }
  export interface Params$Resource$Sites$List extends StandardParameters {}
}
