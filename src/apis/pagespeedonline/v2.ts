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

export namespace pagespeedonline_v2 {
  export interface Options extends GlobalOptions {
    version: 'v2';
  }

  /**
   * PageSpeed Insights API
   *
   * Analyzes the performance of a web page and provides tailored suggestions to
   * make that page faster.
   *
   * @example
   * const {google} = require('googleapis');
   * const pagespeedonline = google.pagespeedonline('v2');
   *
   * @namespace pagespeedonline
   * @type {Function}
   * @version v2
   * @variation v2
   * @param {object=} options Options for Pagespeedonline
   */
  export class Pagespeedonline {
    _options: GlobalOptions;
    google: GoogleConfigurable;
    root = this;

    pagespeedapi: Resource$Pagespeedapi;

    constructor(options: GlobalOptions, google: GoogleConfigurable) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.pagespeedapi = new Resource$Pagespeedapi(this);
    }

    getRoot() {
      return this.root;
    }
  }

  export interface Schema$PagespeedApiFormatStringV2 {
    /**
     * List of arguments for the format string.
     */
    args?: any[];
    /**
     * A localized format string with {{FOO}} placeholders, where &#39;FOO&#39;
     * is the key of the argument whose value should be substituted. For
     * HYPERLINK arguments, the format string will instead contain {{BEGIN_FOO}}
     * and {{END_FOO}} for the argument with key &#39;FOO&#39;.
     */
    format?: string;
  }
  export interface Schema$PagespeedApiImageV2 {
    /**
     * Image data base64 encoded.
     */
    data?: string;
    /**
     * Height of screenshot in pixels.
     */
    height?: number;
    /**
     * Unique string key, if any, identifying this image.
     */
    key?: string;
    /**
     * Mime type of image data (e.g. &quot;image/jpeg&quot;).
     */
    mime_type?: string;
    /**
     * The region of the page that is captured by this image, with dimensions
     * measured in CSS pixels.
     */
    page_rect?: any;
    /**
     * Width of screenshot in pixels.
     */
    width?: number;
  }
  export interface Schema$Result {
    /**
     * The captcha verify result
     */
    captchaResult?: string;
    /**
     * Localized PageSpeed results. Contains a ruleResults entry for each
     * PageSpeed rule instantiated and run by the server.
     */
    formattedResults?: any;
    /**
     * Canonicalized and final URL for the document, after following page
     * redirects (if any).
     */
    id?: string;
    /**
     * List of rules that were specified in the request, but which the server
     * did not know how to instantiate.
     */
    invalidRules?: string[];
    /**
     * Kind of result.
     */
    kind?: string;
    /**
     * Summary statistics for the page, such as number of JavaScript bytes,
     * number of HTML bytes, etc.
     */
    pageStats?: any;
    /**
     * Response code for the document. 200 indicates a normal page load. 4xx/5xx
     * indicates an error.
     */
    responseCode?: number;
    /**
     * A map with one entry for each rule group in these results.
     */
    ruleGroups?: any;
    /**
     * Base64-encoded screenshot of the page that was analyzed.
     */
    screenshot?: Schema$PagespeedApiImageV2;
    /**
     * Title of the page, as displayed in the browser&#39;s title bar.
     */
    title?: string;
    /**
     * The version of PageSpeed used to generate these results.
     */
    version?: any;
  }


  export class Resource$Pagespeedapi {
    root: Pagespeedonline;
    constructor(root: Pagespeedonline) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * pagespeedonline.pagespeedapi.runpagespeed
     * @desc Runs PageSpeed analysis on the page at the specified URL, and
     * returns PageSpeed scores, a list of suggestions to make that page faster,
     * and other information.
     * @alias pagespeedonline.pagespeedapi.runpagespeed
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.filter_third_party_resources Indicates if third party resources should be filtered out before PageSpeed analysis.
     * @param {string=} params.locale The locale used to localize formatted results
     * @param {string=} params.rule A PageSpeed rule to run; if none are given, all rules are run
     * @param {boolean=} params.screenshot Indicates if binary data containing a screenshot should be included
     * @param {string=} params.strategy The analysis strategy to use
     * @param {string} params.url The URL to fetch and analyze
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    runpagespeed(
        params?: Params$Resource$Pagespeedapi$Runpagespeed,
        options?: MethodOptions): AxiosPromise<Schema$Result>;
    runpagespeed(
        params: Params$Resource$Pagespeedapi$Runpagespeed,
        options: MethodOptions|BodyResponseCallback<Schema$Result>,
        callback: BodyResponseCallback<Schema$Result>): void;
    runpagespeed(
        params: Params$Resource$Pagespeedapi$Runpagespeed,
        callback: BodyResponseCallback<Schema$Result>): void;
    runpagespeed(callback: BodyResponseCallback<Schema$Result>): void;
    runpagespeed(
        paramsOrCallback?: Params$Resource$Pagespeedapi$Runpagespeed|
        BodyResponseCallback<Schema$Result>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Result>,
        callback?: BodyResponseCallback<Schema$Result>):
        void|AxiosPromise<Schema$Result> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Pagespeedapi$Runpagespeed;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Pagespeedapi$Runpagespeed;
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
              url: (rootUrl + '/pagespeedonline/v2/runPagespeed')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['url'],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Result>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Result>(parameters);
      }
    }
  }

  export interface Params$Resource$Pagespeedapi$Runpagespeed {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Indicates if third party resources should be filtered out before
     * PageSpeed analysis.
     */
    filter_third_party_resources?: boolean;
    /**
     * The locale used to localize formatted results
     */
    locale?: string;
    /**
     * A PageSpeed rule to run; if none are given, all rules are run
     */
    rule?: string;
    /**
     * Indicates if binary data containing a screenshot should be included
     */
    screenshot?: boolean;
    /**
     * The analysis strategy to use
     */
    strategy?: string;
    /**
     * The URL to fetch and analyze
     */
    url?: string;
  }
}
