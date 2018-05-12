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
import {BodyResponseCallback, GlobalOptions, MethodOptions} from '../../shared/api';
import {createAPIRequest} from '../../shared/apirequest';

// TODO: We will eventually get the `any` in here cleared out, but in the
// interim we want to turn on no-implicit-any.

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace urlshortener_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  /**
   * URL Shortener API
   *
   * Lets you create, inspect, and manage goo.gl short URLs
   *
   * @example
   * const google = require('googleapis');
   * const urlshortener = google.urlshortener('v1');
   *
   * @namespace urlshortener
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Urlshortener
   */
  export class Urlshortener {
    _options: GlobalOptions;
    google: GoogleApis;
    root = this;

    url: Resource$Url;

    constructor(options: GlobalOptions, google: GoogleApis) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.url = new Resource$Url(this);
    }

    getRoot() {
      return this.root;
    }
  }

  export interface Schema$AnalyticsSnapshot {
    /**
     * Top browsers, e.g. &quot;Chrome&quot;; sorted by (descending) click
     * counts. Only present if this data is available.
     */
    browsers?: Schema$StringCount[];
    /**
     * Top countries (expressed as country codes), e.g. &quot;US&quot; or
     * &quot;DE&quot;; sorted by (descending) click counts. Only present if this
     * data is available.
     */
    countries?: Schema$StringCount[];
    /**
     * Number of clicks on all goo.gl short URLs pointing to this long URL.
     */
    longUrlClicks?: string;
    /**
     * Top platforms or OSes, e.g. &quot;Windows&quot;; sorted by (descending)
     * click counts. Only present if this data is available.
     */
    platforms?: Schema$StringCount[];
    /**
     * Top referring hosts, e.g. &quot;www.google.com&quot;; sorted by
     * (descending) click counts. Only present if this data is available.
     */
    referrers?: Schema$StringCount[];
    /**
     * Number of clicks on this short URL.
     */
    shortUrlClicks?: string;
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
     * Number of clicks for this top entry, e.g. for this particular country or
     * browser.
     */
    count?: string;
    /**
     * Label assigned to this top entry, e.g. &quot;US&quot; or
     * &quot;Chrome&quot;.
     */
    id?: string;
  }
  export interface Schema$Url {
    /**
     * A summary of the click analytics for the short and long URL. Might not be
     * present if not requested or currently unavailable.
     */
    analytics?: Schema$AnalyticsSummary;
    /**
     * Time the short URL was created; ISO 8601 representation using the
     * yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZZ format, e.g.
     * &quot;2010-10-14T19:01:24.944+00:00&quot;.
     */
    created?: string;
    /**
     * Short URL, e.g. &quot;http://goo.gl/l6MS&quot;.
     */
    id?: string;
    /**
     * The fixed string &quot;urlshortener#url&quot;.
     */
    kind?: string;
    /**
     * Long URL, e.g. &quot;http://www.google.com/&quot;. Might not be present
     * if the status is &quot;REMOVED&quot;.
     */
    longUrl?: string;
    /**
     * Status of the target URL. Possible values: &quot;OK&quot;,
     * &quot;MALWARE&quot;, &quot;PHISHING&quot;, or &quot;REMOVED&quot;. A URL
     * might be marked &quot;REMOVED&quot; if it was flagged as spam, for
     * example.
     */
    status?: string;
  }
  export interface Schema$UrlHistory {
    /**
     * A list of URL resources.
     */
    items?: Schema$Url[];
    /**
     * Number of items returned with each full &quot;page&quot; of results. Note
     * that the last page could have fewer items than the
     * &quot;itemsPerPage&quot; value.
     */
    itemsPerPage?: number;
    /**
     * The fixed string &quot;urlshortener#urlHistory&quot;.
     */
    kind?: string;
    /**
     * A token to provide to get the next page of results.
     */
    nextPageToken?: string;
    /**
     * Total number of short URLs associated with this user (may be
     * approximate).
     */
    totalItems?: number;
  }


  export class Resource$Url {
    root: Urlshortener;
    constructor(root: Urlshortener) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
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
    get(params?: Params$Resource$Url$Get,
        options?: MethodOptions): AxiosPromise<Schema$Url>;
    get(params: Params$Resource$Url$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Url>,
        callback: BodyResponseCallback<Schema$Url>): void;
    get(params: Params$Resource$Url$Get,
        callback: BodyResponseCallback<Schema$Url>): void;
    get(callback: BodyResponseCallback<Schema$Url>): void;
    get(paramsOrCallback?: Params$Resource$Url$Get|
        BodyResponseCallback<Schema$Url>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Url>,
        callback?: BodyResponseCallback<Schema$Url>):
        void|AxiosPromise<Schema$Url> {
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
              url: (rootUrl + '/urlshortener/v1/url')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['shortUrl'],
        pathParams: [],
        context: this.getRoot()
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
    insert(params?: Params$Resource$Url$Insert, options?: MethodOptions):
        AxiosPromise<Schema$Url>;
    insert(
        params: Params$Resource$Url$Insert,
        options: MethodOptions|BodyResponseCallback<Schema$Url>,
        callback: BodyResponseCallback<Schema$Url>): void;
    insert(
        params: Params$Resource$Url$Insert,
        callback: BodyResponseCallback<Schema$Url>): void;
    insert(callback: BodyResponseCallback<Schema$Url>): void;
    insert(
        paramsOrCallback?: Params$Resource$Url$Insert|
        BodyResponseCallback<Schema$Url>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Url>,
        callback?: BodyResponseCallback<Schema$Url>):
        void|AxiosPromise<Schema$Url> {
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
              url: (rootUrl + '/urlshortener/v1/url')
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
    list(params?: Params$Resource$Url$List, options?: MethodOptions):
        AxiosPromise<Schema$UrlHistory>;
    list(
        params: Params$Resource$Url$List,
        options: MethodOptions|BodyResponseCallback<Schema$UrlHistory>,
        callback: BodyResponseCallback<Schema$UrlHistory>): void;
    list(
        params: Params$Resource$Url$List,
        callback: BodyResponseCallback<Schema$UrlHistory>): void;
    list(callback: BodyResponseCallback<Schema$UrlHistory>): void;
    list(
        paramsOrCallback?: Params$Resource$Url$List|
        BodyResponseCallback<Schema$UrlHistory>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$UrlHistory>,
        callback?: BodyResponseCallback<Schema$UrlHistory>):
        void|AxiosPromise<Schema$UrlHistory> {
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
              url: (rootUrl + '/urlshortener/v1/url/history')
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
        createAPIRequest<Schema$UrlHistory>(parameters, callback);
      } else {
        return createAPIRequest<Schema$UrlHistory>(parameters);
      }
    }
  }

  export interface Params$Resource$Url$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Additional information to return.
     */
    projection?: string;
    /**
     * The short URL, including the protocol.
     */
    shortUrl?: string;
  }
  export interface Params$Resource$Url$Insert {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$Url;
  }
  export interface Params$Resource$Url$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

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
