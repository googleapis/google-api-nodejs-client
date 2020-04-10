// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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
   * Custom Search API
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
    siterestrict: Resource$Siterestrict;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.cse = new Resource$Cse(this.context);
      this.siterestrict = new Resource$Siterestrict(this.context);
    }
  }

  /**
   * Promotion result.
   */
  export interface Schema$Promotion {
    /**
     * An array of block objects for this promotion. See Google WebSearch Protocol reference for more information.
     */
    bodyLines?: Array<{
      title?: string;
      htmlTitle?: string;
      url?: string;
      link?: string;
    }> | null;
    /**
     * An abridged version of this search&#39;s result URL, e.g. www.example.com.
     */
    displayLink?: string | null;
    /**
     * The title of the promotion, in HTML.
     */
    htmlTitle?: string | null;
    /**
     * Image belonging to a promotion.
     */
    image?: {height?: number; source?: string; width?: number} | null;
    /**
     * The URL of the promotion.
     */
    link?: string | null;
    /**
     * The title of the promotion.
     */
    title?: string | null;
  }
  /**
   * A custom search result.
   */
  export interface Schema$Result {
    /**
     * Indicates the ID of Google&#39;s cached version of the search result.
     */
    cacheId?: string | null;
    /**
     * An abridged version of this search result’s URL, e.g. www.example.com.
     */
    displayLink?: string | null;
    /**
     * The file format of the search result.
     */
    fileFormat?: string | null;
    /**
     * The URL displayed after the snippet for each search result.
     */
    formattedUrl?: string | null;
    /**
     * The HTML-formatted URL displayed after the snippet for each search result.
     */
    htmlFormattedUrl?: string | null;
    /**
     * The snippet of the search result, in HTML.
     */
    htmlSnippet?: string | null;
    /**
     * The title of the search result, in HTML.
     */
    htmlTitle?: string | null;
    /**
     * Image belonging to a custom search result.
     */
    image?: {
      thumbnailLink?: string;
      thumbnailWidth?: number;
      height?: number;
      byteSize?: number;
      contextLink?: string;
      width?: number;
      thumbnailHeight?: number;
    } | null;
    /**
     * A unique identifier for the type of current object. For this API, it is customsearch#result.
     */
    kind?: string | null;
    /**
     * Encapsulates all information about refinement labels.
     */
    labels?: Array<{
      name?: string;
      displayName?: string;
      label_with_op?: string;
    }> | null;
    /**
     * The full URL to which the search result is pointing, e.g. http://www.example.com/foo/bar.
     */
    link?: string | null;
    /**
     * The MIME type of the search result.
     */
    mime?: string | null;
    /**
     * Contains PageMap information for this search result.
     */
    pagemap?: {[key: string]: any} | null;
    /**
     * The snippet of the search result, in plain text.
     */
    snippet?: string | null;
    /**
     * The title of the search result, in plain text.
     */
    title?: string | null;
  }
  /**
   * Response to a custom search request.
   */
  export interface Schema$Search {
    /**
     * Metadata and refinements associated with the given search engine.
     */
    context?: {[key: string]: any} | null;
    /**
     * The current set of custom search results.
     */
    items?: Schema$Result[];
    /**
     * Unique identifier for the type of current object. For this API, it is customsearch#search.
     */
    kind?: string | null;
    /**
     * The set of promotions. Present only if the custom search engine&#39;s configuration files define any promotions for the given query.
     */
    promotions?: Schema$Promotion[];
    /**
     * Query metadata for the previous, current, and next pages of results.
     */
    queries?: {
      request?: Array<{
        relatedSite?: string;
        siteSearch?: string;
        excludeTerms?: string;
        exactTerms?: string;
        imgType?: string;
        totalResults?: string;
        filter?: string;
        startIndex?: number;
        highRange?: string;
        hl?: string;
        gl?: string;
        cr?: string;
        startPage?: number;
        imgSize?: string;
        disableCnTwTranslation?: string;
        title?: string;
        orTerms?: string;
        count?: number;
        dateRestrict?: string;
        rights?: string;
        cx?: string;
        lowRange?: string;
        inputEncoding?: string;
        imgDominantColor?: string;
        imgColorType?: string;
        language?: string;
        safe?: string;
        siteSearchFilter?: string;
        outputEncoding?: string;
        sort?: string;
        linkSite?: string;
        searchTerms?: string;
        hq?: string;
        searchType?: string;
        fileType?: string;
        googleHost?: string;
      }>;
      nextPage?: Array<{
        cx?: string;
        lowRange?: string;
        inputEncoding?: string;
        imgDominantColor?: string;
        imgColorType?: string;
        safe?: string;
        language?: string;
        siteSearchFilter?: string;
        outputEncoding?: string;
        sort?: string;
        linkSite?: string;
        searchTerms?: string;
        hq?: string;
        searchType?: string;
        fileType?: string;
        googleHost?: string;
        relatedSite?: string;
        siteSearch?: string;
        excludeTerms?: string;
        exactTerms?: string;
        imgType?: string;
        totalResults?: string;
        filter?: string;
        startIndex?: number;
        highRange?: string;
        hl?: string;
        gl?: string;
        cr?: string;
        startPage?: number;
        imgSize?: string;
        disableCnTwTranslation?: string;
        title?: string;
        orTerms?: string;
        count?: number;
        dateRestrict?: string;
        rights?: string;
      }>;
      previousPage?: Array<{
        excludeTerms?: string;
        exactTerms?: string;
        totalResults?: string;
        imgType?: string;
        filter?: string;
        startIndex?: number;
        highRange?: string;
        gl?: string;
        hl?: string;
        cr?: string;
        startPage?: number;
        imgSize?: string;
        disableCnTwTranslation?: string;
        title?: string;
        orTerms?: string;
        dateRestrict?: string;
        count?: number;
        rights?: string;
        cx?: string;
        lowRange?: string;
        inputEncoding?: string;
        imgDominantColor?: string;
        imgColorType?: string;
        safe?: string;
        language?: string;
        siteSearchFilter?: string;
        outputEncoding?: string;
        sort?: string;
        linkSite?: string;
        searchTerms?: string;
        hq?: string;
        fileType?: string;
        searchType?: string;
        googleHost?: string;
        relatedSite?: string;
        siteSearch?: string;
      }>;
    } | null;
    /**
     * Metadata about a search operation.
     */
    searchInformation?: {
      searchTime?: number;
      totalResults?: string;
      formattedTotalResults?: string;
      formattedSearchTime?: string;
    } | null;
    /**
     * Spell correction information for a query.
     */
    spelling?: {correctedQuery?: string; htmlCorrectedQuery?: string} | null;
    /**
     * OpenSearch template and URL.
     */
    url?: {type?: string; template?: string} | null;
  }

  export class Resource$Cse {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
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
     * @param {string=} params.filter Controls turning on (1) or off (0) the duplicate content filter.
     * @param {string=} params.gl Geolocation of end user.
     * @param {string=} params.googlehost The local Google domain to use to perform the search.
     * @param {string=} params.highRange Creates a range in form as_nlo value..as_nhi value and attempts to append it to query
     * @param {string=} params.hl Sets the user interface language.
     * @param {string=} params.hq Appends the extra hidden query terms to the query.
     * @param {string=} params.imgColorType Returns black and white, grayscale, transparent-background or color images: mono, gray, trans, and color.
     * @param {string=} params.imgDominantColor Returns images of a specific dominant color: red, orange, yellow, green, teal, blue, purple, pink, white, gray, black and brown.
     * @param {string=} params.imgSize Returns images of a specified size, where size can be one of: icon, small, medium, large, xlarge, xxlarge, and huge.
     * @param {string=} params.imgType Returns images of a type, which can be one of: clipart, face, lineart, stock, photo, and animated.
     * @param {string=} params.linkSite Specifies that all search results should contain a link to a particular URL
     * @param {string=} params.lowRange Creates a range in form as_nlo value..as_nhi value and attempts to append it to query
     * @param {string=} params.lr The language restriction for the search results
     * @param {integer=} params.num Number of search results to return
     * @param {string=} params.orTerms Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms
     * @param {string=} params.q Query
     * @param {string=} params.relatedSite Specifies that all search results should be pages that are related to the specified URL
     * @param {string=} params.rights Filters based on licensing. Supported values include: cc_publicdomain, cc_attribute, cc_sharealike, cc_noncommercial, cc_nonderived and combinations of these. See https://wiki.creativecommons.org/wiki/CC_Search_integration for typical combinations.
     * @param {string=} params.safe Search safety level (active, off) (high, medium are same as active)
     * @param {string=} params.searchType Specifies the search type: image.
     * @param {string=} params.siteSearch Specifies all search results should be pages from a given site
     * @param {string=} params.siteSearchFilter Controls whether to include (i) or exclude (e) results from the site named in the siteSearch parameter
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

      const rootUrl = options.rootUrl || 'https://customsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/customsearch/v1').replace(/([^:]\/)\/+/g, '$1'),
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
     * Controls turning on (1) or off (0) the duplicate content filter.
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
     * Appends the extra hidden query terms to the query.
     */
    hq?: string;
    /**
     * Returns black and white, grayscale, transparent-background or color images: mono, gray, trans, and color.
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
     * Returns images of a type, which can be one of: clipart, face, lineart, stock, photo, and animated.
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
     * Filters based on licensing. Supported values include: cc_publicdomain, cc_attribute, cc_sharealike, cc_noncommercial, cc_nonderived and combinations of these. See https://wiki.creativecommons.org/wiki/CC_Search_integration for typical combinations.
     */
    rights?: string;
    /**
     * Search safety level (active, off) (high, medium are same as active)
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
     * Controls whether to include (i) or exclude (e) results from the site named in the siteSearch parameter
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

  export class Resource$Siterestrict {
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
     * @param {string=} params.filter Controls turning on (1) or off (0) the duplicate content filter.
     * @param {string=} params.gl Geolocation of end user.
     * @param {string=} params.googlehost The local Google domain to use to perform the search.
     * @param {string=} params.highRange Creates a range in form as_nlo value..as_nhi value and attempts to append it to query
     * @param {string=} params.hl Sets the user interface language.
     * @param {string=} params.hq Appends the extra hidden query terms to the query.
     * @param {string=} params.imgColorType Returns black and white, grayscale, transparent-background or color images: mono, gray, trans, and color.
     * @param {string=} params.imgDominantColor Returns images of a specific dominant color: red, orange, yellow, green, teal, blue, purple, pink, white, gray, black and brown.
     * @param {string=} params.imgSize Returns images of a specified size, where size can be one of: icon, small, medium, large, xlarge, xxlarge, and huge.
     * @param {string=} params.imgType Returns images of a type, which can be one of: clipart, face, lineart, stock, photo, and animated.
     * @param {string=} params.linkSite Specifies that all search results should contain a link to a particular URL
     * @param {string=} params.lowRange Creates a range in form as_nlo value..as_nhi value and attempts to append it to query
     * @param {string=} params.lr The language restriction for the search results
     * @param {integer=} params.num Number of search results to return
     * @param {string=} params.orTerms Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms
     * @param {string=} params.q Query
     * @param {string=} params.relatedSite Specifies that all search results should be pages that are related to the specified URL
     * @param {string=} params.rights Filters based on licensing. Supported values include: cc_publicdomain, cc_attribute, cc_sharealike, cc_noncommercial, cc_nonderived and combinations of these. See https://wiki.creativecommons.org/wiki/CC_Search_integration for typical combinations.
     * @param {string=} params.safe Search safety level (active, off) (high, medium are same as active)
     * @param {string=} params.searchType Specifies the search type: image.
     * @param {string=} params.siteSearch Specifies all search results should be pages from a given site
     * @param {string=} params.siteSearchFilter Controls whether to include (i) or exclude (e) results from the site named in the siteSearch parameter
     * @param {string=} params.sort The sort expression to apply to the results
     * @param {integer=} params.start The index of the first result to return
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Siterestrict$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Search>;
    list(
      params: Params$Resource$Siterestrict$List,
      options: MethodOptions | BodyResponseCallback<Schema$Search>,
      callback: BodyResponseCallback<Schema$Search>
    ): void;
    list(
      params: Params$Resource$Siterestrict$List,
      callback: BodyResponseCallback<Schema$Search>
    ): void;
    list(callback: BodyResponseCallback<Schema$Search>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Siterestrict$List
        | BodyResponseCallback<Schema$Search>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Search>,
      callback?: BodyResponseCallback<Schema$Search>
    ): void | GaxiosPromise<Schema$Search> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Siterestrict$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Siterestrict$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://customsearch.googleapis.com/';
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
        requiredParams: [],
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

  export interface Params$Resource$Siterestrict$List
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
     * Controls turning on (1) or off (0) the duplicate content filter.
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
     * Appends the extra hidden query terms to the query.
     */
    hq?: string;
    /**
     * Returns black and white, grayscale, transparent-background or color images: mono, gray, trans, and color.
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
     * Returns images of a type, which can be one of: clipart, face, lineart, stock, photo, and animated.
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
     * Filters based on licensing. Supported values include: cc_publicdomain, cc_attribute, cc_sharealike, cc_noncommercial, cc_nonderived and combinations of these. See https://wiki.creativecommons.org/wiki/CC_Search_integration for typical combinations.
     */
    rights?: string;
    /**
     * Search safety level (active, off) (high, medium are same as active)
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
     * Controls whether to include (i) or exclude (e) results from the site named in the siteSearch parameter
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
