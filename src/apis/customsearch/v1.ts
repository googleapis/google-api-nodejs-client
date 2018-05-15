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

import {BodyResponseCallback, createAPIRequest, GlobalOptions, GoogleConfigurable, MethodOptions} from '../../shared/src';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace customsearch_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
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
    _options: GlobalOptions;
    google: GoogleConfigurable;
    root = this;

    cse: Resource$Cse;

    constructor(options: GlobalOptions, google: GoogleConfigurable) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.cse = new Resource$Cse(this);
    }

    getRoot() {
      return this.root;
    }
  }

  export interface Schema$Context {
    facets?: any[][];
    title?: string;
  }
  export interface Schema$Promotion {
    bodyLines?: any[];
    displayLink?: string;
    htmlTitle?: string;
    image?: any;
    link?: string;
    title?: string;
  }
  export interface Schema$Query {
    count?: number;
    cr?: string;
    cx?: string;
    dateRestrict?: string;
    disableCnTwTranslation?: string;
    exactTerms?: string;
    excludeTerms?: string;
    fileType?: string;
    filter?: string;
    gl?: string;
    googleHost?: string;
    highRange?: string;
    hl?: string;
    hq?: string;
    imgColorType?: string;
    imgDominantColor?: string;
    imgSize?: string;
    imgType?: string;
    inputEncoding?: string;
    language?: string;
    linkSite?: string;
    lowRange?: string;
    orTerms?: string;
    outputEncoding?: string;
    relatedSite?: string;
    rights?: string;
    safe?: string;
    searchTerms?: string;
    searchType?: string;
    siteSearch?: string;
    siteSearchFilter?: string;
    sort?: string;
    startIndex?: number;
    startPage?: number;
    title?: string;
    totalResults?: string;
  }
  export interface Schema$Result {
    cacheId?: string;
    displayLink?: string;
    fileFormat?: string;
    formattedUrl?: string;
    htmlFormattedUrl?: string;
    htmlSnippet?: string;
    htmlTitle?: string;
    image?: any;
    kind?: string;
    labels?: any[];
    link?: string;
    mime?: string;
    pagemap?: any;
    snippet?: string;
    title?: string;
  }
  export interface Schema$Search {
    context?: Schema$Context;
    items?: Schema$Result[];
    kind?: string;
    promotions?: Schema$Promotion[];
    queries?: any;
    searchInformation?: any;
    spelling?: any;
    url?: any;
  }


  export class Resource$Cse {
    root: Customsearch;
    siterestrict: Resource$Cse$Siterestrict;
    constructor(root: Customsearch) {
      this.root = root;
      this.getRoot.bind(this);
      this.siterestrict = new Resource$Cse$Siterestrict(root);
    }

    getRoot() {
      return this.root;
    }


    /**
     * search.cse.list
     * @desc Returns metadata about the search performed, metadata about the
     * custom search engine used for the search, and the search results.
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
     * @param {string=} params.imgDominantColor Returns images of a specific dominant color: yellow, green, teal, blue, purple, pink, white, gray, black and brown.
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
    list(params?: Params$Resource$Cse$List, options?: MethodOptions):
        AxiosPromise<Schema$Search>;
    list(
        params: Params$Resource$Cse$List,
        options: MethodOptions|BodyResponseCallback<Schema$Search>,
        callback: BodyResponseCallback<Schema$Search>): void;
    list(
        params: Params$Resource$Cse$List,
        callback: BodyResponseCallback<Schema$Search>): void;
    list(callback: BodyResponseCallback<Schema$Search>): void;
    list(
        paramsOrCallback?: Params$Resource$Cse$List|
        BodyResponseCallback<Schema$Search>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Search>,
        callback?: BodyResponseCallback<Schema$Search>):
        void|AxiosPromise<Schema$Search> {
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
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['q'],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Search>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Search>(parameters);
      }
    }
  }

  export interface Params$Resource$Cse$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

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
     * Identifies a word or phrase that should not appear in any documents in
     * the search results
     */
    excludeTerms?: string;
    /**
     * Returns images of a specified type. Some of the allowed values are: bmp,
     * gif, png, jpg, svg, pdf, ...
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
     * Creates a range in form as_nlo value..as_nhi value and attempts to append
     * it to query
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
     * Returns black and white, grayscale, or color images: mono, gray, and
     * color.
     */
    imgColorType?: string;
    /**
     * Returns images of a specific dominant color: yellow, green, teal, blue,
     * purple, pink, white, gray, black and brown.
     */
    imgDominantColor?: string;
    /**
     * Returns images of a specified size, where size can be one of: icon,
     * small, medium, large, xlarge, xxlarge, and huge.
     */
    imgSize?: string;
    /**
     * Returns images of a type, which can be one of: clipart, face, lineart,
     * news, and photo.
     */
    imgType?: string;
    /**
     * Specifies that all search results should contain a link to a particular
     * URL
     */
    linkSite?: string;
    /**
     * Creates a range in form as_nlo value..as_nhi value and attempts to append
     * it to query
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
     * Provides additional search terms to check for in a document, where each
     * document in the search results must contain at least one of the
     * additional search terms
     */
    orTerms?: string;
    /**
     * Query
     */
    q?: string;
    /**
     * Specifies that all search results should be pages that are related to the
     * specified URL
     */
    relatedSite?: string;
    /**
     * Filters based on licensing. Supported values include: cc_publicdomain,
     * cc_attribute, cc_sharealike, cc_noncommercial, cc_nonderived and
     * combinations of these.
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
     * Controls whether to include or exclude results from the site named in the
     * as_sitesearch parameter
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
    root: Customsearch;
    constructor(root: Customsearch) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * search.cse.siterestrict.list
     * @desc (Closed Beta API) Returns metadata about the search performed,
     * metadata about the custom search engine used for the search, and the
     * search results only for site-restrict cses.
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
     * @param {string=} params.imgDominantColor Returns images of a specific dominant color: yellow, green, teal, blue, purple, pink, white, gray, black and brown.
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
        options?: MethodOptions): AxiosPromise<Schema$Search>;
    list(
        params: Params$Resource$Cse$Siterestrict$List,
        options: MethodOptions|BodyResponseCallback<Schema$Search>,
        callback: BodyResponseCallback<Schema$Search>): void;
    list(
        params: Params$Resource$Cse$Siterestrict$List,
        callback: BodyResponseCallback<Schema$Search>): void;
    list(callback: BodyResponseCallback<Schema$Search>): void;
    list(
        paramsOrCallback?: Params$Resource$Cse$Siterestrict$List|
        BodyResponseCallback<Schema$Search>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Search>,
        callback?: BodyResponseCallback<Schema$Search>):
        void|AxiosPromise<Schema$Search> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Cse$Siterestrict$List;
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
              url: (rootUrl + '/customsearch/v1/siterestrict')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['q'],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Search>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Search>(parameters);
      }
    }
  }

  export interface Params$Resource$Cse$Siterestrict$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

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
     * Identifies a word or phrase that should not appear in any documents in
     * the search results
     */
    excludeTerms?: string;
    /**
     * Returns images of a specified type. Some of the allowed values are: bmp,
     * gif, png, jpg, svg, pdf, ...
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
     * Creates a range in form as_nlo value..as_nhi value and attempts to append
     * it to query
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
     * Returns black and white, grayscale, or color images: mono, gray, and
     * color.
     */
    imgColorType?: string;
    /**
     * Returns images of a specific dominant color: yellow, green, teal, blue,
     * purple, pink, white, gray, black and brown.
     */
    imgDominantColor?: string;
    /**
     * Returns images of a specified size, where size can be one of: icon,
     * small, medium, large, xlarge, xxlarge, and huge.
     */
    imgSize?: string;
    /**
     * Returns images of a type, which can be one of: clipart, face, lineart,
     * news, and photo.
     */
    imgType?: string;
    /**
     * Specifies that all search results should contain a link to a particular
     * URL
     */
    linkSite?: string;
    /**
     * Creates a range in form as_nlo value..as_nhi value and attempts to append
     * it to query
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
     * Provides additional search terms to check for in a document, where each
     * document in the search results must contain at least one of the
     * additional search terms
     */
    orTerms?: string;
    /**
     * Query
     */
    q?: string;
    /**
     * Specifies that all search results should be pages that are related to the
     * specified URL
     */
    relatedSite?: string;
    /**
     * Filters based on licensing. Supported values include: cc_publicdomain,
     * cc_attribute, cc_sharealike, cc_noncommercial, cc_nonderived and
     * combinations of these.
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
     * Controls whether to include or exclude results from the site named in the
     * as_sitesearch parameter
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
