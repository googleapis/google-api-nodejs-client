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

export namespace customsearch_v1 {
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
   * CustomSearch API
   *
   * Searches over a website or collection of websites
   *
   * @example
   * const {google} = require('googleapis');
   * const customsearch = google.customsearch('v1');
   *
   * @namespace customsearch
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Customsearch
   */
  export class Customsearch {
    context: APIRequestContext;
    cse: Resource$Cse;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.cse = new Resource$Cse(this.context);
    }
  }

  export interface Schema$Context {
    facets?: Array<
      Array<{anchor?: string; label?: string; label_with_op?: string}>
    > | null;
    title?: string | null;
  }
  export interface Schema$Promotion {
    bodyLines?: Array<{
      htmlTitle?: string;
      link?: string;
      title?: string;
      url?: string;
    }> | null;
    displayLink?: string | null;
    htmlTitle?: string | null;
    image?: {height?: number; source?: string; width?: number} | null;
    link?: string | null;
    title?: string | null;
  }
  export interface Schema$Query {
    count?: number | null;
    cr?: string | null;
    cx?: string | null;
    dateRestrict?: string | null;
    disableCnTwTranslation?: string | null;
    exactTerms?: string | null;
    excludeTerms?: string | null;
    fileType?: string | null;
    filter?: string | null;
    gl?: string | null;
    googleHost?: string | null;
    highRange?: string | null;
    hl?: string | null;
    hq?: string | null;
    imgColorType?: string | null;
    imgDominantColor?: string | null;
    imgSize?: string | null;
    imgType?: string | null;
    inputEncoding?: string | null;
    language?: string | null;
    linkSite?: string | null;
    lowRange?: string | null;
    orTerms?: string | null;
    outputEncoding?: string | null;
    relatedSite?: string | null;
    rights?: string | null;
    safe?: string | null;
    searchTerms?: string | null;
    searchType?: string | null;
    siteSearch?: string | null;
    siteSearchFilter?: string | null;
    sort?: string | null;
    startIndex?: number | null;
    startPage?: number | null;
    title?: string | null;
    totalResults?: string | null;
  }
  export interface Schema$Result {
    cacheId?: string | null;
    displayLink?: string | null;
    fileFormat?: string | null;
    formattedUrl?: string | null;
    htmlFormattedUrl?: string | null;
    htmlSnippet?: string | null;
    htmlTitle?: string | null;
    image?: {
      byteSize?: number;
      contextLink?: string;
      height?: number;
      thumbnailHeight?: number;
      thumbnailLink?: string;
      thumbnailWidth?: number;
      width?: number;
    } | null;
    kind?: string | null;
    labels?: Array<{
      displayName?: string;
      label_with_op?: string;
      name?: string;
    }> | null;
    link?: string | null;
    mime?: string | null;
    pagemap?: {[key: string]: Array<{[key: string]: any}>} | null;
    snippet?: string | null;
    title?: string | null;
  }
  export interface Schema$Search {
    context?: Schema$Context;
    items?: Schema$Result[];
    kind?: string | null;
    promotions?: Schema$Promotion[];
    queries?: {[key: string]: Schema$Query[]} | null;
    searchInformation?: {
      formattedSearchTime?: string;
      formattedTotalResults?: string;
      searchTime?: number;
      totalResults?: string;
    } | null;
    spelling?: {correctedQuery?: string; htmlCorrectedQuery?: string} | null;
    url?: {template?: string; type?: string} | null;
  }

  export class Resource$Cse {
    context: APIRequestContext;
    siterestrict: Resource$Cse$Siterestrict;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.siterestrict = new Resource$Cse$Siterestrict(this.context);
    }

    /**
     * search.cse.list
     * @desc Returns metadata about the search performed, metadata about the custom search engine used for the search, and the search results.
     * @alias search.cse.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.c2coff Turns off the translation between zh-CN and zh-TW.
     * @param {string=} params.cr Country restrict(s).
     * @param {string=} params.cx The custom search engine ID to scope this search query
     * @param {string=} params.dateRestrict Specifies all search results are from a time period
     * @param {string=} params.exactTerms Identifies a phrase that all documents in the search results must contain
     * @param {string=} params.excludeTerms Identifies a word or phrase that should not appear in any documents in the search results
     * @param {string=} params.fileType Returns images of a specified type. Some of the allowed values are: bmp, gif, png, jpg, svg, pdf, ...
     * @param {string=} params.filter Controls turning on or off the duplicate content filter.
     * @param {string=} params.gl Geolocation of end user.
     * @param {string=} params.googlehost The local Google domain to use to perform the search.
     * @param {string=} params.highRange Creates a range in form as_nlo value..as_nhi value and attempts to append it to query
     * @param {string=} params.hl Sets the user interface language.
     * @param {string=} params.hq Appends the extra query terms to the query.
     * @param {string=} params.imgColorType Returns black and white, grayscale, or color images: mono, gray, and color.
     * @param {string=} params.imgDominantColor Returns images of a specific dominant color: red, orange, yellow, green, teal, blue, purple, pink, white, gray, black and brown.
     * @param {string=} params.imgSize Returns images of a specified size, where size can be one of: icon, small, medium, large, xlarge, xxlarge, and huge.
     * @param {string=} params.imgType Returns images of a type, which can be one of: clipart, face, lineart, news, and photo.
     * @param {string=} params.linkSite Specifies that all search results should contain a link to a particular URL
     * @param {string=} params.lowRange Creates a range in form as_nlo value..as_nhi value and attempts to append it to query
     * @param {string=} params.lr The language restriction for the search results
     * @param {integer=} params.num Number of search results to return
     * @param {string=} params.orTerms Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms
     * @param {string} params.q Query
     * @param {string=} params.relatedSite Specifies that all search results should be pages that are related to the specified URL
     * @param {string=} params.rights Filters based on licensing. Supported values include: cc_publicdomain, cc_attribute, cc_sharealike, cc_noncommercial, cc_nonderived and combinations of these.
     * @param {string=} params.safe Search safety level
     * @param {string=} params.searchType Specifies the search type: image.
     * @param {string=} params.siteSearch Specifies all search results should be pages from a given site
     * @param {string=} params.siteSearchFilter Controls whether to include or exclude results from the site named in the as_sitesearch parameter
     * @param {string=} params.sort The sort expression to apply to the results
     * @param {integer=} params.start The index of the first result to return
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Cse$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Search>;
    list(
      params: Params$Resource$Cse$List,
      options: MethodOptions | BodyResponseCallback<Schema$Search>,
      callback: BodyResponseCallback<Schema$Search>
    ): void;
    list(
      params: Params$Resource$Cse$List,
      callback: BodyResponseCallback<Schema$Search>
    ): void;
    list(callback: BodyResponseCallback<Schema$Search>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Cse$List
        | BodyResponseCallback<Schema$Search>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Search>,
      callback?: BodyResponseCallback<Schema$Search>
    ): void | GaxiosPromise<Schema$Search> {
      let params = (paramsOrCallback || {}) as Params$Resource$Cse$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Cse$List;
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
            url: (rootUrl + '/customsearch/v1').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['q'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Search>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Search>(parameters);
      }
    }
  }

  export interface Params$Resource$Cse$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Turns off the translation between zh-CN and zh-TW.
     */
    c2coff?: string;
    /**
     * Country restrict(s).
     */
    cr?: string;
    /**
     * The custom search engine ID to scope this search query
     */
    cx?: string;
    /**
     * Specifies all search results are from a time period
     */
    dateRestrict?: string;
    /**
     * Identifies a phrase that all documents in the search results must contain
     */
    exactTerms?: string;
    /**
     * Identifies a word or phrase that should not appear in any documents in the search results
     */
    excludeTerms?: string;
    /**
     * Returns images of a specified type. Some of the allowed values are: bmp, gif, png, jpg, svg, pdf, ...
     */
    fileType?: string;
    /**
     * Controls turning on or off the duplicate content filter.
     */
    filter?: string;
    /**
     * Geolocation of end user.
     */
    gl?: string;
    /**
     * The local Google domain to use to perform the search.
     */
    googlehost?: string;
    /**
     * Creates a range in form as_nlo value..as_nhi value and attempts to append it to query
     */
    highRange?: string;
    /**
     * Sets the user interface language.
     */
    hl?: string;
    /**
     * Appends the extra query terms to the query.
     */
    hq?: string;
    /**
     * Returns black and white, grayscale, or color images: mono, gray, and color.
     */
    imgColorType?: string;
    /**
     * Returns images of a specific dominant color: red, orange, yellow, green, teal, blue, purple, pink, white, gray, black and brown.
     */
    imgDominantColor?: string;
    /**
     * Returns images of a specified size, where size can be one of: icon, small, medium, large, xlarge, xxlarge, and huge.
     */
    imgSize?: string;
    /**
     * Returns images of a type, which can be one of: clipart, face, lineart, news, and photo.
     */
    imgType?: string;
    /**
     * Specifies that all search results should contain a link to a particular URL
     */
    linkSite?: string;
    /**
     * Creates a range in form as_nlo value..as_nhi value and attempts to append it to query
     */
    lowRange?: string;
    /**
     * The language restriction for the search results
     */
    lr?: string;
    /**
     * Number of search results to return
     */
    num?: number;
    /**
     * Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms
     */
    orTerms?: string;
    /**
     * Query
     */
    q?: string;
    /**
     * Specifies that all search results should be pages that are related to the specified URL
     */
    relatedSite?: string;
    /**
     * Filters based on licensing. Supported values include: cc_publicdomain, cc_attribute, cc_sharealike, cc_noncommercial, cc_nonderived and combinations of these.
     */
    rights?: string;
    /**
     * Search safety level
     */
    safe?: string;
    /**
     * Specifies the search type: image.
     */
    searchType?: string;
    /**
     * Specifies all search results should be pages from a given site
     */
    siteSearch?: string;
    /**
     * Controls whether to include or exclude results from the site named in the as_sitesearch parameter
     */
    siteSearchFilter?: string;
    /**
     * The sort expression to apply to the results
     */
    sort?: string;
    /**
     * The index of the first result to return
     */
    start?: number;
  }

  export class Resource$Cse$Siterestrict {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * search.cse.siterestrict.list
     * @desc Returns metadata about the search performed, metadata about the custom search engine used for the search, and the search results. Uses a small set of url patterns.
     * @alias search.cse.siterestrict.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.c2coff Turns off the translation between zh-CN and zh-TW.
     * @param {string=} params.cr Country restrict(s).
     * @param {string=} params.cx The custom search engine ID to scope this search query
     * @param {string=} params.dateRestrict Specifies all search results are from a time period
     * @param {string=} params.exactTerms Identifies a phrase that all documents in the search results must contain
     * @param {string=} params.excludeTerms Identifies a word or phrase that should not appear in any documents in the search results
     * @param {string=} params.fileType Returns images of a specified type. Some of the allowed values are: bmp, gif, png, jpg, svg, pdf, ...
     * @param {string=} params.filter Controls turning on or off the duplicate content filter.
     * @param {string=} params.gl Geolocation of end user.
     * @param {string=} params.googlehost The local Google domain to use to perform the search.
     * @param {string=} params.highRange Creates a range in form as_nlo value..as_nhi value and attempts to append it to query
     * @param {string=} params.hl Sets the user interface language.
     * @param {string=} params.hq Appends the extra query terms to the query.
     * @param {string=} params.imgColorType Returns black and white, grayscale, or color images: mono, gray, and color.
     * @param {string=} params.imgDominantColor Returns images of a specific dominant color: red, orange, yellow, green, teal, blue, purple, pink, white, gray, black and brown.
     * @param {string=} params.imgSize Returns images of a specified size, where size can be one of: icon, small, medium, large, xlarge, xxlarge, and huge.
     * @param {string=} params.imgType Returns images of a type, which can be one of: clipart, face, lineart, news, and photo.
     * @param {string=} params.linkSite Specifies that all search results should contain a link to a particular URL
     * @param {string=} params.lowRange Creates a range in form as_nlo value..as_nhi value and attempts to append it to query
     * @param {string=} params.lr The language restriction for the search results
     * @param {integer=} params.num Number of search results to return
     * @param {string=} params.orTerms Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms
     * @param {string} params.q Query
     * @param {string=} params.relatedSite Specifies that all search results should be pages that are related to the specified URL
     * @param {string=} params.rights Filters based on licensing. Supported values include: cc_publicdomain, cc_attribute, cc_sharealike, cc_noncommercial, cc_nonderived and combinations of these.
     * @param {string=} params.safe Search safety level
     * @param {string=} params.searchType Specifies the search type: image.
     * @param {string=} params.siteSearch Specifies all search results should be pages from a given site
     * @param {string=} params.siteSearchFilter Controls whether to include or exclude results from the site named in the as_sitesearch parameter
     * @param {string=} params.sort The sort expression to apply to the results
     * @param {integer=} params.start The index of the first result to return
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Cse$Siterestrict$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Search>;
    list(
      params: Params$Resource$Cse$Siterestrict$List,
      options: MethodOptions | BodyResponseCallback<Schema$Search>,
      callback: BodyResponseCallback<Schema$Search>
    ): void;
    list(
      params: Params$Resource$Cse$Siterestrict$List,
      callback: BodyResponseCallback<Schema$Search>
    ): void;
    list(callback: BodyResponseCallback<Schema$Search>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Cse$Siterestrict$List
        | BodyResponseCallback<Schema$Search>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Search>,
      callback?: BodyResponseCallback<Schema$Search>
    ): void | GaxiosPromise<Schema$Search> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Cse$Siterestrict$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Cse$Siterestrict$List;
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
            url: (rootUrl + '/customsearch/v1/siterestrict').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['q'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Search>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Search>(parameters);
      }
    }
  }

  export interface Params$Resource$Cse$Siterestrict$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Turns off the translation between zh-CN and zh-TW.
     */
    c2coff?: string;
    /**
     * Country restrict(s).
     */
    cr?: string;
    /**
     * The custom search engine ID to scope this search query
     */
    cx?: string;
    /**
     * Specifies all search results are from a time period
     */
    dateRestrict?: string;
    /**
     * Identifies a phrase that all documents in the search results must contain
     */
    exactTerms?: string;
    /**
     * Identifies a word or phrase that should not appear in any documents in the search results
     */
    excludeTerms?: string;
    /**
     * Returns images of a specified type. Some of the allowed values are: bmp, gif, png, jpg, svg, pdf, ...
     */
    fileType?: string;
    /**
     * Controls turning on or off the duplicate content filter.
     */
    filter?: string;
    /**
     * Geolocation of end user.
     */
    gl?: string;
    /**
     * The local Google domain to use to perform the search.
     */
    googlehost?: string;
    /**
     * Creates a range in form as_nlo value..as_nhi value and attempts to append it to query
     */
    highRange?: string;
    /**
     * Sets the user interface language.
     */
    hl?: string;
    /**
     * Appends the extra query terms to the query.
     */
    hq?: string;
    /**
     * Returns black and white, grayscale, or color images: mono, gray, and color.
     */
    imgColorType?: string;
    /**
     * Returns images of a specific dominant color: red, orange, yellow, green, teal, blue, purple, pink, white, gray, black and brown.
     */
    imgDominantColor?: string;
    /**
     * Returns images of a specified size, where size can be one of: icon, small, medium, large, xlarge, xxlarge, and huge.
     */
    imgSize?: string;
    /**
     * Returns images of a type, which can be one of: clipart, face, lineart, news, and photo.
     */
    imgType?: string;
    /**
     * Specifies that all search results should contain a link to a particular URL
     */
    linkSite?: string;
    /**
     * Creates a range in form as_nlo value..as_nhi value and attempts to append it to query
     */
    lowRange?: string;
    /**
     * The language restriction for the search results
     */
    lr?: string;
    /**
     * Number of search results to return
     */
    num?: number;
    /**
     * Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms
     */
    orTerms?: string;
    /**
     * Query
     */
    q?: string;
    /**
     * Specifies that all search results should be pages that are related to the specified URL
     */
    relatedSite?: string;
    /**
     * Filters based on licensing. Supported values include: cc_publicdomain, cc_attribute, cc_sharealike, cc_noncommercial, cc_nonderived and combinations of these.
     */
    rights?: string;
    /**
     * Search safety level
     */
    safe?: string;
    /**
     * Specifies the search type: image.
     */
    searchType?: string;
    /**
     * Specifies all search results should be pages from a given site
     */
    siteSearch?: string;
    /**
     * Controls whether to include or exclude results from the site named in the as_sitesearch parameter
     */
    siteSearchFilter?: string;
    /**
     * The sort expression to apply to the results
     */
    sort?: string;
    /**
     * The index of the first result to return
     */
    start?: number;
  }
}
