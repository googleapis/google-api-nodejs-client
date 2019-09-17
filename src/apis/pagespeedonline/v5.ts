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

export namespace pagespeedonline_v5 {
  export interface Options extends GlobalOptions {
    version: 'v5';
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
   * PageSpeed Insights API
   *
   * Analyzes the performance of a web page and provides tailored suggestions to make that page faster.
   *
   * @example
   * const {google} = require('googleapis');
   * const pagespeedonline = google.pagespeedonline('v5');
   *
   * @namespace pagespeedonline
   * @type {Function}
   * @version v5
   * @variation v5
   * @param {object=} options Options for Pagespeedonline
   */
  export class Pagespeedonline {
    context: APIRequestContext;
    pagespeedapi: Resource$Pagespeedapi;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.pagespeedapi = new Resource$Pagespeedapi(this.context);
    }
  }

  export interface Schema$GoogleprotobufListValue {}
  export interface Schema$GoogleprotobufValue {}
  export interface Schema$LighthouseAuditResultV5 {
    /**
     * The description of the audit.
     */
    description?: string | null;
    /**
     * Freeform details section of the audit.
     */
    details?: {[key: string]: any} | null;
    /**
     * The value that should be displayed on the UI for this audit.
     */
    displayValue?: string | null;
    /**
     * An error message from a thrown error inside the audit.
     */
    errorMessage?: string | null;
    /**
     * An explanation of the errors in the audit.
     */
    explanation?: string | null;
    /**
     * The audit&#39;s id.
     */
    id?: string | null;
    score?: any | null;
    /**
     * The enumerated score display mode.
     */
    scoreDisplayMode?: string | null;
    /**
     * The human readable title.
     */
    title?: string | null;
    warnings?: any | null;
  }
  export interface Schema$LighthouseCategoryV5 {
    /**
     * An array of references to all the audit members of this category.
     */
    auditRefs?: Array<{group?: string; id?: string; weight?: number}> | null;
    /**
     * A more detailed description of the category and its importance.
     */
    description?: string | null;
    /**
     * The string identifier of the category.
     */
    id?: string | null;
    /**
     * A description for the manual audits in the category.
     */
    manualDescription?: string | null;
    score?: any | null;
    /**
     * The human-friendly name of the category.
     */
    title?: string | null;
  }
  export interface Schema$LighthouseResultV5 {
    /**
     * Map of audits in the LHR.
     */
    audits?: {[key: string]: Schema$LighthouseAuditResultV5} | null;
    /**
     * Map of categories in the LHR.
     */
    categories?: {
      accessibility?: Schema$LighthouseCategoryV5;
      'best-practices'?: Schema$LighthouseCategoryV5;
      performance?: Schema$LighthouseCategoryV5;
      pwa?: Schema$LighthouseCategoryV5;
      seo?: Schema$LighthouseCategoryV5;
    } | null;
    /**
     * Map of category groups in the LHR.
     */
    categoryGroups?: {
      [key: string]: {description?: string; title?: string};
    } | null;
    /**
     * The configuration settings for this LHR.
     */
    configSettings?: {
      emulatedFormFactor?: string;
      locale?: string;
      onlyCategories?: any;
    } | null;
    /**
     * Environment settings that were used when making this LHR.
     */
    environment?: {
      benchmarkIndex?: number;
      hostUserAgent?: string;
      networkUserAgent?: string;
    } | null;
    /**
     * The time that this run was fetched.
     */
    fetchTime?: string | null;
    /**
     * The final resolved url that was audited.
     */
    finalUrl?: string | null;
    /**
     * The internationalization strings that are required to render the LHR.
     */
    i18n?: {
      rendererFormattedStrings?: {
        auditGroupExpandTooltip?: string;
        crcInitialNavigation?: string;
        crcLongestDurationLabel?: string;
        errorLabel?: string;
        errorMissingAuditInfo?: string;
        labDataTitle?: string;
        lsPerformanceCategoryDescription?: string;
        manualAuditsGroupTitle?: string;
        notApplicableAuditsGroupTitle?: string;
        opportunityResourceColumnLabel?: string;
        opportunitySavingsColumnLabel?: string;
        passedAuditsGroupTitle?: string;
        scorescaleLabel?: string;
        toplevelWarningsMessage?: string;
        varianceDisclaimer?: string;
        warningHeader?: string;
      };
    } | null;
    /**
     * The lighthouse version that was used to generate this LHR.
     */
    lighthouseVersion?: string | null;
    /**
     * The original requested url.
     */
    requestedUrl?: string | null;
    /**
     * A top-level error message that, if present, indicates a serious enough problem that this Lighthouse result may need to be discarded.
     */
    runtimeError?: {code?: string; message?: string} | null;
    /**
     * List of all run warnings in the LHR. Will always output to at least `[]`.
     */
    runWarnings?: Schema$GoogleprotobufListValue;
    /**
     * The Stack Pack advice strings.
     */
    stackPacks?: Array<{
      descriptions?: {[key: string]: string};
      iconDataURL?: string;
      id?: string;
      title?: string;
    }> | null;
    /**
     * Timing information for this LHR.
     */
    timing?: {total?: number} | null;
    /**
     * The user agent that was used to run this LHR.
     */
    userAgent?: string | null;
  }
  export interface Schema$PagespeedApiLoadingExperienceV5 {
    /**
     * The url, pattern or origin which the metrics are on.
     */
    id?: string | null;
    initial_url?: string | null;
    metrics?: {
      [key: string]: {
        category?: string;
        distributions?: Array<{
          max?: number;
          min?: number;
          proportion?: number;
        }>;
        percentile?: number;
      };
    } | null;
    overall_category?: string | null;
  }
  export interface Schema$PagespeedApiPagespeedResponseV5 {
    /**
     * The UTC timestamp of this analysis.
     */
    analysisUTCTimestamp?: string | null;
    /**
     * The captcha verify result
     */
    captchaResult?: string | null;
    /**
     * Canonicalized and final URL for the document, after following page redirects (if any).
     */
    id?: string | null;
    /**
     * Kind of result.
     */
    kind?: string | null;
    /**
     * Lighthouse response for the audit url as an object.
     */
    lighthouseResult?: Schema$LighthouseResultV5;
    /**
     * Metrics of end users&#39; page loading experience.
     */
    loadingExperience?: Schema$PagespeedApiLoadingExperienceV5;
    /**
     * Metrics of the aggregated page loading experience of the origin
     */
    originLoadingExperience?: Schema$PagespeedApiLoadingExperienceV5;
    /**
     * The version of PageSpeed used to generate these results.
     */
    version?: {major?: number; minor?: number} | null;
  }

  export class Resource$Pagespeedapi {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * pagespeedonline.pagespeedapi.runpagespeed
     * @desc Runs PageSpeed analysis on the page at the specified URL, and returns PageSpeed scores, a list of suggestions to make that page faster, and other information.
     * @alias pagespeedonline.pagespeedapi.runpagespeed
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.category A Lighthouse category to run; if none are given, only Performance category will be run
     * @param {string=} params.locale The locale used to localize formatted results
     * @param {string=} params.strategy The analysis strategy (desktop or mobile) to use, and desktop is the default
     * @param {string} params.url The URL to fetch and analyze
     * @param {string=} params.utm_campaign Campaign name for analytics.
     * @param {string=} params.utm_source Campaign source for analytics.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    runpagespeed(
      params?: Params$Resource$Pagespeedapi$Runpagespeed,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PagespeedApiPagespeedResponseV5>;
    runpagespeed(
      params: Params$Resource$Pagespeedapi$Runpagespeed,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PagespeedApiPagespeedResponseV5>,
      callback: BodyResponseCallback<Schema$PagespeedApiPagespeedResponseV5>
    ): void;
    runpagespeed(
      params: Params$Resource$Pagespeedapi$Runpagespeed,
      callback: BodyResponseCallback<Schema$PagespeedApiPagespeedResponseV5>
    ): void;
    runpagespeed(
      callback: BodyResponseCallback<Schema$PagespeedApiPagespeedResponseV5>
    ): void;
    runpagespeed(
      paramsOrCallback?:
        | Params$Resource$Pagespeedapi$Runpagespeed
        | BodyResponseCallback<Schema$PagespeedApiPagespeedResponseV5>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PagespeedApiPagespeedResponseV5>,
      callback?: BodyResponseCallback<Schema$PagespeedApiPagespeedResponseV5>
    ): void | GaxiosPromise<Schema$PagespeedApiPagespeedResponseV5> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Pagespeedapi$Runpagespeed;
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
            url: (rootUrl + '/pagespeedonline/v5/runPagespeed').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['url'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PagespeedApiPagespeedResponseV5>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$PagespeedApiPagespeedResponseV5>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Pagespeedapi$Runpagespeed
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * A Lighthouse category to run; if none are given, only Performance category will be run
     */
    category?: string[];
    /**
     * The locale used to localize formatted results
     */
    locale?: string;
    /**
     * The analysis strategy (desktop or mobile) to use, and desktop is the default
     */
    strategy?: string;
    /**
     * The URL to fetch and analyze
     */
    url?: string;
    /**
     * Campaign name for analytics.
     */
    utm_campaign?: string;
    /**
     * Campaign source for analytics.
     */
    utm_source?: string;
  }
}
