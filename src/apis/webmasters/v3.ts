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

import {GoogleApis} from '../..';
import {BodyResponseCallback, createAPIRequest, GlobalOptions, MethodOptions} from '../../shared/src';


// TODO: We will eventually get the `any` in here cleared out, but in the
// interim we want to turn on no-implicit-any.

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace webmasters_v3 {
  export interface Options extends GlobalOptions {
    version: 'v3';
  }

  /**
   * Search Console API
   *
   * View Google Search Console data for your verified sites.
   *
   * @example
   * const google = require('googleapis');
   * const webmasters = google.webmasters('v3');
   *
   * @namespace webmasters
   * @type {Function}
   * @version v3
   * @variation v3
   * @param {object=} options Options for Webmasters
   */
  export class Webmasters {
    _options: GlobalOptions;
    google: GoogleApis;
    root = this;

    searchanalytics: Resource$Searchanalytics;
    sitemaps: Resource$Sitemaps;
    sites: Resource$Sites;
    urlcrawlerrorscounts: Resource$Urlcrawlerrorscounts;
    urlcrawlerrorssamples: Resource$Urlcrawlerrorssamples;

    constructor(options: GlobalOptions, google: GoogleApis) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.searchanalytics = new Resource$Searchanalytics(this);
      this.sitemaps = new Resource$Sitemaps(this);
      this.sites = new Resource$Sites(this);
      this.urlcrawlerrorscounts = new Resource$Urlcrawlerrorscounts(this);
      this.urlcrawlerrorssamples = new Resource$Urlcrawlerrorssamples(this);
    }

    getRoot() {
      return this.root;
    }
  }

  export interface Schema$ApiDataRow {
    clicks?: number;
    ctr?: number;
    impressions?: number;
    keys?: string[];
    position?: number;
  }
  export interface Schema$ApiDimensionFilter {
    dimension?: string;
    expression?: string;
    operator?: string;
  }
  export interface Schema$ApiDimensionFilterGroup {
    filters?: Schema$ApiDimensionFilter[];
    groupType?: string;
  }
  export interface Schema$SearchAnalyticsQueryRequest {
    /**
     * [Optional; Default is &quot;auto&quot;] How data is aggregated. If
     * aggregated by property, all data for the same property is aggregated; if
     * aggregated by page, all data is aggregated by canonical URI. If you
     * filter or group by page, choose AUTO; otherwise you can aggregate either
     * by property or by page, depending on how you want your data calculated;
     * see  the help documentation to learn how data is calculated differently
     * by site versus by page.  Note: If you group or filter by page, you cannot
     * aggregate by property.  If you specify any value other than AUTO, the
     * aggregation type in the result will match the requested type, or if you
     * request an invalid type, you will get an error. The API will never change
     * your aggregation type if the requested type is invalid.
     */
    aggregationType?: string;
    /**
     * [Optional] Zero or more filters to apply to the dimension grouping
     * values; for example, &#39;query contains &quot;buy&quot;&#39; to see only
     * data where the query string contains the substring &quot;buy&quot; (not
     * case-sensitive). You can filter by a dimension without grouping by it.
     */
    dimensionFilterGroups?: Schema$ApiDimensionFilterGroup[];
    /**
     * [Optional] Zero or more dimensions to group results by. Dimensions are
     * the group-by values in the Search Analytics page. Dimensions are combined
     * to create a unique row key for each row. Results are grouped in the order
     * that you supply these dimensions.
     */
    dimensions?: string[];
    /**
     * [Required] End date of the requested date range, in YYYY-MM-DD format, in
     * PST (UTC - 8:00). Must be greater than or equal to the start date. This
     * value is included in the range.
     */
    endDate?: string;
    /**
     * [Optional; Default is 1000] The maximum number of rows to return. Must be
     * a number from 1 to 5,000 (inclusive).
     */
    rowLimit?: number;
    /**
     * [Optional; Default is &quot;web&quot;] The search type to filter for.
     */
    searchType?: string;
    /**
     * [Required] Start date of the requested date range, in YYYY-MM-DD format,
     * in PST time (UTC - 8:00). Must be less than or equal to the end date.
     * This value is included in the range.
     */
    startDate?: string;
    /**
     * [Optional; Default is 0] Zero-based index of the first row in the
     * response. Must be a non-negative number.
     */
    startRow?: number;
  }
  /**
   * A list of rows, one per result, grouped by key. Metrics in each row are
   * aggregated for all data grouped by that key either by page or property, as
   * specified by the aggregation type parameter.
   */
  export interface Schema$SearchAnalyticsQueryResponse {
    /**
     * How the results were aggregated.
     */
    responseAggregationType?: string;
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
     * Contains detailed information about a specific URL submitted as a
     * sitemap.
     */
    sitemap?: Schema$WmxSitemap[];
  }
  /**
   * List of sites with access level information.
   */
  export interface Schema$SitesListResponse {
    /**
     * Contains permission level information about a Search Console site. For
     * more information, see Permissions in Search Console.
     */
    siteEntry?: Schema$WmxSite[];
  }
  /**
   * An entry in a URL crawl errors time series.
   */
  export interface Schema$UrlCrawlErrorCount {
    /**
     * The error count at the given timestamp.
     */
    count?: string;
    /**
     * The date and time when the crawl attempt took place, in RFC 3339 format.
     */
    timestamp?: string;
  }
  /**
   * Number of errors per day for a specific error type (defined by platform and
   * category).
   */
  export interface Schema$UrlCrawlErrorCountsPerType {
    /**
     * The crawl error type.
     */
    category?: string;
    /**
     * The error count entries time series.
     */
    entries?: Schema$UrlCrawlErrorCount[];
    /**
     * The general type of Googlebot that made the request (see list of
     * Googlebot user-agents for the user-agents used).
     */
    platform?: string;
  }
  /**
   * A time series of the number of URL crawl errors per error category and
   * platform.
   */
  export interface Schema$UrlCrawlErrorsCountsQueryResponse {
    /**
     * The time series of the number of URL crawl errors per error category and
     * platform.
     */
    countPerTypes?: Schema$UrlCrawlErrorCountsPerType[];
  }
  /**
   * Contains information about specific crawl errors.
   */
  export interface Schema$UrlCrawlErrorsSample {
    /**
     * The time the error was first detected, in RFC 3339 format.
     */
    first_detected?: string;
    /**
     * The time when the URL was last crawled, in RFC 3339 format.
     */
    last_crawled?: string;
    /**
     * The URL of an error, relative to the site.
     */
    pageUrl?: string;
    /**
     * The HTTP response code, if any.
     */
    responseCode?: number;
    /**
     * Additional details about the URL, set only when calling get().
     */
    urlDetails?: Schema$UrlSampleDetails;
  }
  /**
   * List of crawl error samples.
   */
  export interface Schema$UrlCrawlErrorsSamplesListResponse {
    /**
     * Information about the sample URL and its crawl error.
     */
    urlCrawlErrorSample?: Schema$UrlCrawlErrorsSample[];
  }
  /**
   * Additional details about the URL, set only when calling get().
   */
  export interface Schema$UrlSampleDetails {
    /**
     * List of sitemaps pointing at this URL.
     */
    containingSitemaps?: string[];
    /**
     * A sample set of URLs linking to this URL.
     */
    linkedFromUrls?: string[];
  }
  /**
   * Contains permission level information about a Search Console site. For more
   * information, see  Permissions in Search Console.
   */
  export interface Schema$WmxSite {
    /**
     * The user&#39;s permission level for the site.
     */
    permissionLevel?: string;
    /**
     * The URL of the site.
     */
    siteUrl?: string;
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
     * Number of errors in the sitemap. These are issues with the sitemap itself
     * that need to be fixed before it can be processed correctly.
     */
    errors?: string;
    /**
     * If true, the sitemap has not been processed.
     */
    isPending?: boolean;
    /**
     * If true, the sitemap is a collection of sitemaps.
     */
    isSitemapsIndex?: boolean;
    /**
     * Date &amp; time in which this sitemap was last downloaded. Date format is
     * in RFC 3339 format (yyyy-mm-dd).
     */
    lastDownloaded?: string;
    /**
     * Date &amp; time in which this sitemap was submitted. Date format is in
     * RFC 3339 format (yyyy-mm-dd).
     */
    lastSubmitted?: string;
    /**
     * The url of the sitemap.
     */
    path?: string;
    /**
     * The type of the sitemap. For example: rssFeed.
     */
    type?: string;
    /**
     * Number of warnings for the sitemap. These are generally non-critical
     * issues with URLs in the sitemaps.
     */
    warnings?: string;
  }
  /**
   * Information about the various content types in the sitemap.
   */
  export interface Schema$WmxSitemapContent {
    /**
     * The number of URLs from the sitemap that were indexed (of the content
     * type).
     */
    indexed?: string;
    /**
     * The number of URLs in the sitemap (of the content type).
     */
    submitted?: string;
    /**
     * The specific type of content in this sitemap. For example: web.
     */
    type?: string;
  }


  export class Resource$Searchanalytics {
    root: Webmasters;
    constructor(root: Webmasters) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * webmasters.searchanalytics.query
     * @desc Query your data with filters and parameters that you define.
     * Returns zero or more rows grouped by the row keys that you define. You
     * must define a date range of one or more days.  When date is one of the
     * group by values, any days without data are omitted from the result list.
     * If you need to know which days have data, issue a broad date range query
     * grouped by date for any metric, and see which day rows are returned.
     * @alias webmasters.searchanalytics.query
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.siteUrl The site's URL, including protocol. For example: http://www.example.com/
     * @param {().SearchAnalyticsQueryRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    query(
        params?: Params$Resource$Searchanalytics$Query,
        options?: MethodOptions):
        AxiosPromise<Schema$SearchAnalyticsQueryResponse>;
    query(
        params: Params$Resource$Searchanalytics$Query,
        options: MethodOptions|
        BodyResponseCallback<Schema$SearchAnalyticsQueryResponse>,
        callback: BodyResponseCallback<Schema$SearchAnalyticsQueryResponse>):
        void;
    query(
        params: Params$Resource$Searchanalytics$Query,
        callback: BodyResponseCallback<Schema$SearchAnalyticsQueryResponse>):
        void;
    query(callback: BodyResponseCallback<Schema$SearchAnalyticsQueryResponse>):
        void;
    query(
        paramsOrCallback?: Params$Resource$Searchanalytics$Query|
        BodyResponseCallback<Schema$SearchAnalyticsQueryResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$SearchAnalyticsQueryResponse>,
        callback?: BodyResponseCallback<Schema$SearchAnalyticsQueryResponse>):
        void|AxiosPromise<Schema$SearchAnalyticsQueryResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Searchanalytics$Query;
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
              url: (rootUrl +
                    '/webmasters/v3/sites/{siteUrl}/searchAnalytics/query')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['siteUrl'],
        pathParams: ['siteUrl'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$SearchAnalyticsQueryResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$SearchAnalyticsQueryResponse>(
            parameters);
      }
    }
  }

  export interface Params$Resource$Searchanalytics$Query {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

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
    root: Webmasters;
    constructor(root: Webmasters) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * webmasters.sitemaps.delete
     * @desc Deletes a sitemap from this site.
     * @alias webmasters.sitemaps.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.feedpath The URL of the actual sitemap. For example: http://www.example.com/sitemap.xml
     * @param {string} params.siteUrl The site's URL, including protocol. For example: http://www.example.com/
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(params?: Params$Resource$Sitemaps$Delete, options?: MethodOptions):
        AxiosPromise<void>;
    delete(
        params: Params$Resource$Sitemaps$Delete,
        options: MethodOptions|BodyResponseCallback<void>,
        callback: BodyResponseCallback<void>): void;
    delete(
        params: Params$Resource$Sitemaps$Delete,
        callback: BodyResponseCallback<void>): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
        paramsOrCallback?: Params$Resource$Sitemaps$Delete|
        BodyResponseCallback<void>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
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
              url: (rootUrl +
                    '/webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['siteUrl', 'feedpath'],
        pathParams: ['feedpath', 'siteUrl'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }


    /**
     * webmasters.sitemaps.get
     * @desc Retrieves information about a specific sitemap.
     * @alias webmasters.sitemaps.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.feedpath The URL of the actual sitemap. For example: http://www.example.com/sitemap.xml
     * @param {string} params.siteUrl The site's URL, including protocol. For example: http://www.example.com/
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Sitemaps$Get,
        options?: MethodOptions): AxiosPromise<Schema$WmxSitemap>;
    get(params: Params$Resource$Sitemaps$Get,
        options: MethodOptions|BodyResponseCallback<Schema$WmxSitemap>,
        callback: BodyResponseCallback<Schema$WmxSitemap>): void;
    get(params: Params$Resource$Sitemaps$Get,
        callback: BodyResponseCallback<Schema$WmxSitemap>): void;
    get(callback: BodyResponseCallback<Schema$WmxSitemap>): void;
    get(paramsOrCallback?: Params$Resource$Sitemaps$Get|
        BodyResponseCallback<Schema$WmxSitemap>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$WmxSitemap>,
        callback?: BodyResponseCallback<Schema$WmxSitemap>):
        void|AxiosPromise<Schema$WmxSitemap> {
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
              url: (rootUrl +
                    '/webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['siteUrl', 'feedpath'],
        pathParams: ['feedpath', 'siteUrl'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$WmxSitemap>(parameters, callback);
      } else {
        return createAPIRequest<Schema$WmxSitemap>(parameters);
      }
    }


    /**
     * webmasters.sitemaps.list
     * @desc Lists the sitemaps-entries submitted for this site, or included in
     * the sitemap index file (if sitemapIndex is specified in the request).
     * @alias webmasters.sitemaps.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.sitemapIndex A URL of a site's sitemap index. For example: http://www.example.com/sitemapindex.xml
     * @param {string} params.siteUrl The site's URL, including protocol. For example: http://www.example.com/
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Sitemaps$List, options?: MethodOptions):
        AxiosPromise<Schema$SitemapsListResponse>;
    list(
        params: Params$Resource$Sitemaps$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$SitemapsListResponse>,
        callback: BodyResponseCallback<Schema$SitemapsListResponse>): void;
    list(
        params: Params$Resource$Sitemaps$List,
        callback: BodyResponseCallback<Schema$SitemapsListResponse>): void;
    list(callback: BodyResponseCallback<Schema$SitemapsListResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Sitemaps$List|
        BodyResponseCallback<Schema$SitemapsListResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$SitemapsListResponse>,
        callback?: BodyResponseCallback<Schema$SitemapsListResponse>):
        void|AxiosPromise<Schema$SitemapsListResponse> {
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
              url: (rootUrl + '/webmasters/v3/sites/{siteUrl}/sitemaps')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['siteUrl'],
        pathParams: ['siteUrl'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$SitemapsListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SitemapsListResponse>(parameters);
      }
    }


    /**
     * webmasters.sitemaps.submit
     * @desc Submits a sitemap for a site.
     * @alias webmasters.sitemaps.submit
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.feedpath The URL of the sitemap to add. For example: http://www.example.com/sitemap.xml
     * @param {string} params.siteUrl The site's URL, including protocol. For example: http://www.example.com/
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    submit(params?: Params$Resource$Sitemaps$Submit, options?: MethodOptions):
        AxiosPromise<void>;
    submit(
        params: Params$Resource$Sitemaps$Submit,
        options: MethodOptions|BodyResponseCallback<void>,
        callback: BodyResponseCallback<void>): void;
    submit(
        params: Params$Resource$Sitemaps$Submit,
        callback: BodyResponseCallback<void>): void;
    submit(callback: BodyResponseCallback<void>): void;
    submit(
        paramsOrCallback?: Params$Resource$Sitemaps$Submit|
        BodyResponseCallback<void>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
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
              url: (rootUrl +
                    '/webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['siteUrl', 'feedpath'],
        pathParams: ['feedpath', 'siteUrl'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Sitemaps$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The URL of the actual sitemap. For example:
     * http://www.example.com/sitemap.xml
     */
    feedpath?: string;
    /**
     * The site's URL, including protocol. For example: http://www.example.com/
     */
    siteUrl?: string;
  }
  export interface Params$Resource$Sitemaps$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The URL of the actual sitemap. For example:
     * http://www.example.com/sitemap.xml
     */
    feedpath?: string;
    /**
     * The site's URL, including protocol. For example: http://www.example.com/
     */
    siteUrl?: string;
  }
  export interface Params$Resource$Sitemaps$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * A URL of a site's sitemap index. For example:
     * http://www.example.com/sitemapindex.xml
     */
    sitemapIndex?: string;
    /**
     * The site's URL, including protocol. For example: http://www.example.com/
     */
    siteUrl?: string;
  }
  export interface Params$Resource$Sitemaps$Submit {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The URL of the sitemap to add. For example:
     * http://www.example.com/sitemap.xml
     */
    feedpath?: string;
    /**
     * The site's URL, including protocol. For example: http://www.example.com/
     */
    siteUrl?: string;
  }


  export class Resource$Sites {
    root: Webmasters;
    constructor(root: Webmasters) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * webmasters.sites.add
     * @desc Adds a site to the set of the user's sites in Search Console.
     * @alias webmasters.sites.add
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.siteUrl The URL of the site to add.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    add(params?: Params$Resource$Sites$Add,
        options?: MethodOptions): AxiosPromise<void>;
    add(params: Params$Resource$Sites$Add,
        options: MethodOptions|BodyResponseCallback<void>,
        callback: BodyResponseCallback<void>): void;
    add(params: Params$Resource$Sites$Add,
        callback: BodyResponseCallback<void>): void;
    add(callback: BodyResponseCallback<void>): void;
    add(paramsOrCallback?: Params$Resource$Sites$Add|BodyResponseCallback<void>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
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
              url: (rootUrl + '/webmasters/v3/sites/{siteUrl}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['siteUrl'],
        pathParams: ['siteUrl'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }


    /**
     * webmasters.sites.delete
     * @desc Removes a site from the set of the user's Search Console sites.
     * @alias webmasters.sites.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.siteUrl The URI of the property as defined in Search Console. Examples: http://www.example.com/ or android-app://com.example/ Note: for property-sets, use the URI that starts with sc-set: which is used in Search Console URLs.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(params?: Params$Resource$Sites$Delete, options?: MethodOptions):
        AxiosPromise<void>;
    delete(
        params: Params$Resource$Sites$Delete,
        options: MethodOptions|BodyResponseCallback<void>,
        callback: BodyResponseCallback<void>): void;
    delete(
        params: Params$Resource$Sites$Delete,
        callback: BodyResponseCallback<void>): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
        paramsOrCallback?: Params$Resource$Sites$Delete|
        BodyResponseCallback<void>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
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
              url: (rootUrl + '/webmasters/v3/sites/{siteUrl}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['siteUrl'],
        pathParams: ['siteUrl'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }


    /**
     * webmasters.sites.get
     * @desc Retrieves information about specific site.
     * @alias webmasters.sites.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.siteUrl The URI of the property as defined in Search Console. Examples: http://www.example.com/ or android-app://com.example/ Note: for property-sets, use the URI that starts with sc-set: which is used in Search Console URLs.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Sites$Get,
        options?: MethodOptions): AxiosPromise<Schema$WmxSite>;
    get(params: Params$Resource$Sites$Get,
        options: MethodOptions|BodyResponseCallback<Schema$WmxSite>,
        callback: BodyResponseCallback<Schema$WmxSite>): void;
    get(params: Params$Resource$Sites$Get,
        callback: BodyResponseCallback<Schema$WmxSite>): void;
    get(callback: BodyResponseCallback<Schema$WmxSite>): void;
    get(paramsOrCallback?: Params$Resource$Sites$Get|
        BodyResponseCallback<Schema$WmxSite>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$WmxSite>,
        callback?: BodyResponseCallback<Schema$WmxSite>):
        void|AxiosPromise<Schema$WmxSite> {
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
              url: (rootUrl + '/webmasters/v3/sites/{siteUrl}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['siteUrl'],
        pathParams: ['siteUrl'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$WmxSite>(parameters, callback);
      } else {
        return createAPIRequest<Schema$WmxSite>(parameters);
      }
    }


    /**
     * webmasters.sites.list
     * @desc Lists the user's Search Console sites.
     * @alias webmasters.sites.list
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Sites$List, options?: MethodOptions):
        AxiosPromise<Schema$SitesListResponse>;
    list(
        params: Params$Resource$Sites$List,
        options: MethodOptions|BodyResponseCallback<Schema$SitesListResponse>,
        callback: BodyResponseCallback<Schema$SitesListResponse>): void;
    list(
        params: Params$Resource$Sites$List,
        callback: BodyResponseCallback<Schema$SitesListResponse>): void;
    list(callback: BodyResponseCallback<Schema$SitesListResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Sites$List|
        BodyResponseCallback<Schema$SitesListResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$SitesListResponse>,
        callback?: BodyResponseCallback<Schema$SitesListResponse>):
        void|AxiosPromise<Schema$SitesListResponse> {
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
              url: (rootUrl + '/webmasters/v3/sites')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$SitesListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SitesListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Sites$Add {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The URL of the site to add.
     */
    siteUrl?: string;
  }
  export interface Params$Resource$Sites$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The URI of the property as defined in Search Console. Examples:
     * http://www.example.com/ or android-app://com.example/ Note: for
     * property-sets, use the URI that starts with sc-set: which is used in
     * Search Console URLs.
     */
    siteUrl?: string;
  }
  export interface Params$Resource$Sites$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The URI of the property as defined in Search Console. Examples:
     * http://www.example.com/ or android-app://com.example/ Note: for
     * property-sets, use the URI that starts with sc-set: which is used in
     * Search Console URLs.
     */
    siteUrl?: string;
  }
  export interface Params$Resource$Sites$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;
  }


  export class Resource$Urlcrawlerrorscounts {
    root: Webmasters;
    constructor(root: Webmasters) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * webmasters.urlcrawlerrorscounts.query
     * @desc Retrieves a time series of the number of URL crawl errors per error
     * category and platform.
     * @alias webmasters.urlcrawlerrorscounts.query
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.category The crawl error category. For example: serverError. If not specified, returns results for all categories.
     * @param {boolean=} params.latestCountsOnly If true, returns only the latest crawl error counts.
     * @param {string=} params.platform The user agent type (platform) that made the request. For example: web. If not specified, returns results for all platforms.
     * @param {string} params.siteUrl The site's URL, including protocol. For example: http://www.example.com/
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    query(
        params?: Params$Resource$Urlcrawlerrorscounts$Query,
        options?: MethodOptions):
        AxiosPromise<Schema$UrlCrawlErrorsCountsQueryResponse>;
    query(
        params: Params$Resource$Urlcrawlerrorscounts$Query,
        options: MethodOptions|
        BodyResponseCallback<Schema$UrlCrawlErrorsCountsQueryResponse>,
        callback:
            BodyResponseCallback<Schema$UrlCrawlErrorsCountsQueryResponse>):
        void;
    query(
        params: Params$Resource$Urlcrawlerrorscounts$Query,
        callback:
            BodyResponseCallback<Schema$UrlCrawlErrorsCountsQueryResponse>):
        void;
    query(callback:
              BodyResponseCallback<Schema$UrlCrawlErrorsCountsQueryResponse>):
        void;
    query(
        paramsOrCallback?: Params$Resource$Urlcrawlerrorscounts$Query|
        BodyResponseCallback<Schema$UrlCrawlErrorsCountsQueryResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$UrlCrawlErrorsCountsQueryResponse>,
        callback?:
            BodyResponseCallback<Schema$UrlCrawlErrorsCountsQueryResponse>):
        void|AxiosPromise<Schema$UrlCrawlErrorsCountsQueryResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Urlcrawlerrorscounts$Query;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Urlcrawlerrorscounts$Query;
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
              url: (rootUrl +
                    '/webmasters/v3/sites/{siteUrl}/urlCrawlErrorsCounts/query')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['siteUrl'],
        pathParams: ['siteUrl'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$UrlCrawlErrorsCountsQueryResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$UrlCrawlErrorsCountsQueryResponse>(
            parameters);
      }
    }
  }

  export interface Params$Resource$Urlcrawlerrorscounts$Query {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The crawl error category. For example: serverError. If not specified,
     * returns results for all categories.
     */
    category?: string;
    /**
     * If true, returns only the latest crawl error counts.
     */
    latestCountsOnly?: boolean;
    /**
     * The user agent type (platform) that made the request. For example: web.
     * If not specified, returns results for all platforms.
     */
    platform?: string;
    /**
     * The site's URL, including protocol. For example: http://www.example.com/
     */
    siteUrl?: string;
  }


  export class Resource$Urlcrawlerrorssamples {
    root: Webmasters;
    constructor(root: Webmasters) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * webmasters.urlcrawlerrorssamples.get
     * @desc Retrieves details about crawl errors for a site's sample URL.
     * @alias webmasters.urlcrawlerrorssamples.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.category The crawl error category. For example: authPermissions
     * @param {string} params.platform The user agent type (platform) that made the request. For example: web
     * @param {string} params.siteUrl The site's URL, including protocol. For example: http://www.example.com/
     * @param {string} params.url The relative path (without the site) of the sample URL. It must be one of the URLs returned by list(). For example, for the URL https://www.example.com/pagename on the site https://www.example.com/, the url value is pagename
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Urlcrawlerrorssamples$Get,
        options?: MethodOptions): AxiosPromise<Schema$UrlCrawlErrorsSample>;
    get(params: Params$Resource$Urlcrawlerrorssamples$Get,
        options: MethodOptions|
        BodyResponseCallback<Schema$UrlCrawlErrorsSample>,
        callback: BodyResponseCallback<Schema$UrlCrawlErrorsSample>): void;
    get(params: Params$Resource$Urlcrawlerrorssamples$Get,
        callback: BodyResponseCallback<Schema$UrlCrawlErrorsSample>): void;
    get(callback: BodyResponseCallback<Schema$UrlCrawlErrorsSample>): void;
    get(paramsOrCallback?: Params$Resource$Urlcrawlerrorssamples$Get|
        BodyResponseCallback<Schema$UrlCrawlErrorsSample>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$UrlCrawlErrorsSample>,
        callback?: BodyResponseCallback<Schema$UrlCrawlErrorsSample>):
        void|AxiosPromise<Schema$UrlCrawlErrorsSample> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Urlcrawlerrorssamples$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Urlcrawlerrorssamples$Get;
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
              url:
                  (rootUrl +
                   '/webmasters/v3/sites/{siteUrl}/urlCrawlErrorsSamples/{url}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['siteUrl', 'url', 'category', 'platform'],
        pathParams: ['siteUrl', 'url'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$UrlCrawlErrorsSample>(parameters, callback);
      } else {
        return createAPIRequest<Schema$UrlCrawlErrorsSample>(parameters);
      }
    }


    /**
     * webmasters.urlcrawlerrorssamples.list
     * @desc Lists a site's sample URLs for the specified crawl error category
     * and platform.
     * @alias webmasters.urlcrawlerrorssamples.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.category The crawl error category. For example: authPermissions
     * @param {string} params.platform The user agent type (platform) that made the request. For example: web
     * @param {string} params.siteUrl The site's URL, including protocol. For example: http://www.example.com/
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Urlcrawlerrorssamples$List,
        options?: MethodOptions):
        AxiosPromise<Schema$UrlCrawlErrorsSamplesListResponse>;
    list(
        params: Params$Resource$Urlcrawlerrorssamples$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$UrlCrawlErrorsSamplesListResponse>,
        callback:
            BodyResponseCallback<Schema$UrlCrawlErrorsSamplesListResponse>):
        void;
    list(
        params: Params$Resource$Urlcrawlerrorssamples$List,
        callback:
            BodyResponseCallback<Schema$UrlCrawlErrorsSamplesListResponse>):
        void;
    list(callback:
             BodyResponseCallback<Schema$UrlCrawlErrorsSamplesListResponse>):
        void;
    list(
        paramsOrCallback?: Params$Resource$Urlcrawlerrorssamples$List|
        BodyResponseCallback<Schema$UrlCrawlErrorsSamplesListResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$UrlCrawlErrorsSamplesListResponse>,
        callback?:
            BodyResponseCallback<Schema$UrlCrawlErrorsSamplesListResponse>):
        void|AxiosPromise<Schema$UrlCrawlErrorsSamplesListResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Urlcrawlerrorssamples$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Urlcrawlerrorssamples$List;
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
              url: (rootUrl +
                    '/webmasters/v3/sites/{siteUrl}/urlCrawlErrorsSamples')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['siteUrl', 'category', 'platform'],
        pathParams: ['siteUrl'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$UrlCrawlErrorsSamplesListResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$UrlCrawlErrorsSamplesListResponse>(
            parameters);
      }
    }


    /**
     * webmasters.urlcrawlerrorssamples.markAsFixed
     * @desc Marks the provided site's sample URL as fixed, and removes it from
     * the samples list.
     * @alias webmasters.urlcrawlerrorssamples.markAsFixed
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.category The crawl error category. For example: authPermissions
     * @param {string} params.platform The user agent type (platform) that made the request. For example: web
     * @param {string} params.siteUrl The site's URL, including protocol. For example: http://www.example.com/
     * @param {string} params.url The relative path (without the site) of the sample URL. It must be one of the URLs returned by list(). For example, for the URL https://www.example.com/pagename on the site https://www.example.com/, the url value is pagename
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    markAsFixed(
        params?: Params$Resource$Urlcrawlerrorssamples$Markasfixed,
        options?: MethodOptions): AxiosPromise<void>;
    markAsFixed(
        params: Params$Resource$Urlcrawlerrorssamples$Markasfixed,
        options: MethodOptions|BodyResponseCallback<void>,
        callback: BodyResponseCallback<void>): void;
    markAsFixed(
        params: Params$Resource$Urlcrawlerrorssamples$Markasfixed,
        callback: BodyResponseCallback<void>): void;
    markAsFixed(callback: BodyResponseCallback<void>): void;
    markAsFixed(
        paramsOrCallback?: Params$Resource$Urlcrawlerrorssamples$Markasfixed|
        BodyResponseCallback<void>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Urlcrawlerrorssamples$Markasfixed;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Urlcrawlerrorssamples$Markasfixed;
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
              url:
                  (rootUrl +
                   '/webmasters/v3/sites/{siteUrl}/urlCrawlErrorsSamples/{url}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['siteUrl', 'url', 'category', 'platform'],
        pathParams: ['siteUrl', 'url'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Urlcrawlerrorssamples$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The crawl error category. For example: authPermissions
     */
    category?: string;
    /**
     * The user agent type (platform) that made the request. For example: web
     */
    platform?: string;
    /**
     * The site's URL, including protocol. For example: http://www.example.com/
     */
    siteUrl?: string;
    /**
     * The relative path (without the site) of the sample URL. It must be one of
     * the URLs returned by list(). For example, for the URL
     * https://www.example.com/pagename on the site https://www.example.com/,
     * the url value is pagename
     */
    url?: string;
  }
  export interface Params$Resource$Urlcrawlerrorssamples$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The crawl error category. For example: authPermissions
     */
    category?: string;
    /**
     * The user agent type (platform) that made the request. For example: web
     */
    platform?: string;
    /**
     * The site's URL, including protocol. For example: http://www.example.com/
     */
    siteUrl?: string;
  }
  export interface Params$Resource$Urlcrawlerrorssamples$Markasfixed {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The crawl error category. For example: authPermissions
     */
    category?: string;
    /**
     * The user agent type (platform) that made the request. For example: web
     */
    platform?: string;
    /**
     * The site's URL, including protocol. For example: http://www.example.com/
     */
    siteUrl?: string;
    /**
     * The relative path (without the site) of the sample URL. It must be one of
     * the URLs returned by list(). For example, for the URL
     * https://www.example.com/pagename on the site https://www.example.com/,
     * the url value is pagename
     */
    url?: string;
  }
}
