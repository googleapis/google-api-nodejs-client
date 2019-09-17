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

export namespace urlshortener_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
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
   * URL Shortener API
   *
   * Lets you create, inspect, and manage goo.gl short URLs
   *
   * @example
   * const {google} = require('googleapis');
   * const urlshortener = google.urlshortener('v1');
   *
   * @namespace urlshortener
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Urlshortener
   */
  export class Urlshortener {
    context: APIRequestContext;
    url: Resource$Url;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.url = new Resource$Url(this.context);
    }
  }

  export interface Schema$AnalyticsSnapshot {
    /**
     * Top browsers, e.g. &quot;Chrome&quot;; sorted by (descending) click counts. Only present if this data is available.
     */
    browsers?: Schema$StringCount[];
    /**
     * Top countries (expressed as country codes), e.g. &quot;US&quot; or &quot;DE&quot;; sorted by (descending) click counts. Only present if this data is available.
     */
    countries?: Schema$StringCount[];
    /**
     * Number of clicks on all goo.gl short URLs pointing to this long URL.
     */
    longUrlClicks?: string | null;
    /**
     * Top platforms or OSes, e.g. &quot;Windows&quot;; sorted by (descending) click counts. Only present if this data is available.
     */
    platforms?: Schema$StringCount[];
    /**
     * Top referring hosts, e.g. &quot;www.google.com&quot;; sorted by (descending) click counts. Only present if this data is available.
     */
    referrers?: Schema$StringCount[];
    /**
     * Number of clicks on this short URL.
     */
    shortUrlClicks?: string | null;
  }
  export interface Schema$AnalyticsSummary {
    /**
     * Click analytics over all time.
     */
    allTime?: Schema$AnalyticsSnapshot;
    /**
     * Click analytics over the last day.
     */
    day?: Schema$AnalyticsSnapshot;
    /**
     * Click analytics over the last month.
     */
    month?: Schema$AnalyticsSnapshot;
    /**
     * Click analytics over the last two hours.
     */
    twoHours?: Schema$AnalyticsSnapshot;
    /**
     * Click analytics over the last week.
     */
    week?: Schema$AnalyticsSnapshot;
  }
  export interface Schema$StringCount {
    /**
     * Number of clicks for this top entry, e.g. for this particular country or browser.
     */
    count?: string | null;
    /**
     * Label assigned to this top entry, e.g. &quot;US&quot; or &quot;Chrome&quot;.
     */
    id?: string | null;
  }
  export interface Schema$Url {
    /**
     * A summary of the click analytics for the short and long URL. Might not be present if not requested or currently unavailable.
     */
    analytics?: Schema$AnalyticsSummary;
    /**
     * Time the short URL was created; ISO 8601 representation using the yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZZ format, e.g. &quot;2010-10-14T19:01:24.944+00:00&quot;.
     */
    created?: string | null;
    /**
     * Short URL, e.g. &quot;http://goo.gl/l6MS&quot;.
     */
    id?: string | null;
    /**
     * The fixed string &quot;urlshortener#url&quot;.
     */
    kind?: string | null;
    /**
     * Long URL, e.g. &quot;http://www.google.com/&quot;. Might not be present if the status is &quot;REMOVED&quot;.
     */
    longUrl?: string | null;
    /**
     * Status of the target URL. Possible values: &quot;OK&quot;, &quot;MALWARE&quot;, &quot;PHISHING&quot;, or &quot;REMOVED&quot;. A URL might be marked &quot;REMOVED&quot; if it was flagged as spam, for example.
     */
    status?: string | null;
  }
  export interface Schema$UrlHistory {
    /**
     * A list of URL resources.
     */
    items?: Schema$Url[];
    /**
     * Number of items returned with each full &quot;page&quot; of results. Note that the last page could have fewer items than the &quot;itemsPerPage&quot; value.
     */
    itemsPerPage?: number | null;
    /**
     * The fixed string &quot;urlshortener#urlHistory&quot;.
     */
    kind?: string | null;
    /**
     * A token to provide to get the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * Total number of short URLs associated with this user (may be approximate).
     */
    totalItems?: number | null;
  }

  export class Resource$Url {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * urlshortener.url.get
     * @desc Expands a short URL or gets creation time and analytics.
     * @alias urlshortener.url.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.projection Additional information to return.
     * @param {string} params.shortUrl The short URL, including the protocol.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Url$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Url>;
    get(
      params: Params$Resource$Url$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Url>,
      callback: BodyResponseCallback<Schema$Url>
    ): void;
    get(
      params: Params$Resource$Url$Get,
      callback: BodyResponseCallback<Schema$Url>
    ): void;
    get(callback: BodyResponseCallback<Schema$Url>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Url$Get
        | BodyResponseCallback<Schema$Url>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Url>,
      callback?: BodyResponseCallback<Schema$Url>
    ): void | GaxiosPromise<Schema$Url> {
      let params = (paramsOrCallback || {}) as Params$Resource$Url$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Url$Get;
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
            url: (rootUrl + '/urlshortener/v1/url').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['shortUrl'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Url>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Url>(parameters);
      }
    }

    /**
     * urlshortener.url.insert
     * @desc Creates a new short URL.
     * @alias urlshortener.url.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().Url} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Url$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Url>;
    insert(
      params: Params$Resource$Url$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Url>,
      callback: BodyResponseCallback<Schema$Url>
    ): void;
    insert(
      params: Params$Resource$Url$Insert,
      callback: BodyResponseCallback<Schema$Url>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Url>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Url$Insert
        | BodyResponseCallback<Schema$Url>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Url>,
      callback?: BodyResponseCallback<Schema$Url>
    ): void | GaxiosPromise<Schema$Url> {
      let params = (paramsOrCallback || {}) as Params$Resource$Url$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Url$Insert;
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
            url: (rootUrl + '/urlshortener/v1/url').replace(
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
        createAPIRequest<Schema$Url>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Url>(parameters);
      }
    }

    /**
     * urlshortener.url.list
     * @desc Retrieves a list of URLs shortened by a user.
     * @alias urlshortener.url.list
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.projection Additional information to return.
     * @param {string=} params.start-token Token for requesting successive pages of results.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Url$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UrlHistory>;
    list(
      params: Params$Resource$Url$List,
      options: MethodOptions | BodyResponseCallback<Schema$UrlHistory>,
      callback: BodyResponseCallback<Schema$UrlHistory>
    ): void;
    list(
      params: Params$Resource$Url$List,
      callback: BodyResponseCallback<Schema$UrlHistory>
    ): void;
    list(callback: BodyResponseCallback<Schema$UrlHistory>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Url$List
        | BodyResponseCallback<Schema$UrlHistory>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$UrlHistory>,
      callback?: BodyResponseCallback<Schema$UrlHistory>
    ): void | GaxiosPromise<Schema$UrlHistory> {
      let params = (paramsOrCallback || {}) as Params$Resource$Url$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Url$List;
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
            url: (rootUrl + '/urlshortener/v1/url/history').replace(
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
        createAPIRequest<Schema$UrlHistory>(parameters, callback);
      } else {
        return createAPIRequest<Schema$UrlHistory>(parameters);
      }
    }
  }

  export interface Params$Resource$Url$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Additional information to return.
     */
    projection?: string;
    /**
     * The short URL, including the protocol.
     */
    shortUrl?: string;
  }
  export interface Params$Resource$Url$Insert extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Url;
  }
  export interface Params$Resource$Url$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Additional information to return.
     */
    projection?: string;
    /**
     * Token for requesting successive pages of results.
     */
    'start-token'?: string;
  }
}
