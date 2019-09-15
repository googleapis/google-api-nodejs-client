/**
 * Copyright 2019 Google LLC
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

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
} from 'google-auth-library';
import {
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  GlobalOptions,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {GaxiosPromise} from 'gaxios';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace webmasters_v3 {
  export interface Options extends GlobalOptions {
    version: 'v3';
  }

  interface StandardParameters {
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
   * const {google} = require('googleapis');
   * const webmasters = google.webmasters('v3');
   *
   * @namespace webmasters
   * @type {Function}
   * @version v3
   * @variation v3
   * @param {object=} options Options for Webmasters
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
     * [Optional; Default is &quot;auto&quot;] How data is aggregated. If aggregated by property, all data for the same property is aggregated; if aggregated by page, all data is aggregated by canonical URI. If you filter or group by page, choose AUTO; otherwise you can aggregate either by property or by page, depending on how you want your data calculated; see  the help documentation to learn how data is calculated differently by site versus by page.  Note: If you group or filter by page, you cannot aggregate by property.  If you specify any value other than AUTO, the aggregation type in the result will match the requested type, or if you request an invalid type, you will get an error. The API will never change your aggregation type if the requested type is invalid.
     */
    aggregationType?: string | null;
    /**
     * [Optional] Zero or more filters to apply to the dimension grouping values; for example, &#39;query contains &quot;buy&quot;&#39; to see only data where the query string contains the substring &quot;buy&quot; (not case-sensitive). You can filter by a dimension without grouping by it.
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
     * [Optional; Default is &quot;web&quot;] The search type to filter for.
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
     * The user&#39;s permission level for the site.
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
     * Date &amp; time in which this sitemap was last downloaded. Date format is in RFC 3339 format (yyyy-mm-dd).
     */
    lastDownloaded?: string | null;
    /**
     * Date &amp; time in which this sitemap was submitted. Date format is in RFC 3339 format (yyyy-mm-dd).
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
     * webmasters.searchanalytics.query
     * @desc Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row keys that you define. You must define a date range of one or more days.  When date is one of the group by values, any days without data are omitted from the result list. If you need to know which days have data, issue a broad date range query grouped by date for any metric, and see which day rows are returned.
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
      options?: MethodOptions
    ): GaxiosPromise<Schema$SearchAnalyticsQueryResponse>;
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
        | BodyResponseCallback<Schema$SearchAnalyticsQueryResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SearchAnalyticsQueryResponse>,
      callback?: BodyResponseCallback<Schema$SearchAnalyticsQueryResponse>
    ): void | GaxiosPromise<Schema$SearchAnalyticsQueryResponse> {
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
          callback
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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
    delete(
      params?: Params$Resource$Sitemaps$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
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
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
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
    get(
      params?: Params$Resource$Sitemaps$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$WmxSitemap>;
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
        | BodyResponseCallback<Schema$WmxSitemap>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$WmxSitemap>,
      callback?: BodyResponseCallback<Schema$WmxSitemap>
    ): void | GaxiosPromise<Schema$WmxSitemap> {
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
        createAPIRequest<Schema$WmxSitemap>(parameters, callback);
      } else {
        return createAPIRequest<Schema$WmxSitemap>(parameters);
      }
    }

    /**
     * webmasters.sitemaps.list
     * @desc Lists the sitemaps-entries submitted for this site, or included in the sitemap index file (if sitemapIndex is specified in the request).
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
    list(
      params?: Params$Resource$Sitemaps$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SitemapsListResponse>;
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
        | BodyResponseCallback<Schema$SitemapsListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SitemapsListResponse>,
      callback?: BodyResponseCallback<Schema$SitemapsListResponse>
    ): void | GaxiosPromise<Schema$SitemapsListResponse> {
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
    submit(
      params?: Params$Resource$Sitemaps$Submit,
      options?: MethodOptions
    ): GaxiosPromise<void>;
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
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
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
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Sitemaps$Delete extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
    add(
      params?: Params$Resource$Sites$Add,
      options?: MethodOptions
    ): GaxiosPromise<void>;
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
      paramsOrCallback?: Params$Resource$Sites$Add | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
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
    delete(
      params?: Params$Resource$Sites$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
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
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
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
    get(
      params?: Params$Resource$Sites$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$WmxSite>;
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
        | BodyResponseCallback<Schema$WmxSite>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$WmxSite>,
      callback?: BodyResponseCallback<Schema$WmxSite>
    ): void | GaxiosPromise<Schema$WmxSite> {
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
    list(
      params?: Params$Resource$Sites$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SitesListResponse>;
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
        | BodyResponseCallback<Schema$SitesListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SitesListResponse>,
      callback?: BodyResponseCallback<Schema$SitesListResponse>
    ): void | GaxiosPromise<Schema$SitesListResponse> {
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
        createAPIRequest<Schema$SitesListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SitesListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Sites$Add extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The URL of the site to add.
     */
    siteUrl?: string;
  }
  export interface Params$Resource$Sites$Delete extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The URI of the property as defined in Search Console. Examples: http://www.example.com/ or android-app://com.example/ Note: for property-sets, use the URI that starts with sc-set: which is used in Search Console URLs.
     */
    siteUrl?: string;
  }
  export interface Params$Resource$Sites$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The URI of the property as defined in Search Console. Examples: http://www.example.com/ or android-app://com.example/ Note: for property-sets, use the URI that starts with sc-set: which is used in Search Console URLs.
     */
    siteUrl?: string;
  }
  export interface Params$Resource$Sites$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
  }
}
