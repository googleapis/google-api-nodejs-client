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

export namespace pagespeedonline_v5 {
  export interface Options extends GlobalOptions {
    version: 'v5';
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
      | GoogleAuth;

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
   * PageSpeed Insights API
   *
   * The PageSpeed Insights API lets you analyze the performance of your website with a simple API.  It offers tailored suggestions for how you can optimize your site, and lets you easily integrate PageSpeed Insights analysis into your development tools and workflow.
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

  /**
   * A light reference to an audit by id, used to group and weight audits in a given category.
   */
  export interface Schema$AuditRefs {
    /**
     * The category group that the audit belongs to (optional).
     */
    group?: string | null;
    /**
     * The audit ref id.
     */
    id?: string | null;
    /**
     * The weight this audit&#39;s score has on the overall category score.
     */
    weight?: number | null;
  }
  /**
   * A proportion of data in the total distribution, bucketed by a min/max percentage. Each bucket&#39;s range is bounded by min &lt;= x &lt; max, In millisecond.
   */
  export interface Schema$Bucket {
    /**
     * Upper bound for a bucket&#39;s range.
     */
    max?: number | null;
    /**
     * Lower bound for a bucket&#39;s range.
     */
    min?: number | null;
    /**
     * The proportion of data in this bucket.
     */
    proportion?: number | null;
  }
  /**
   * The categories in a Lighthouse run.
   */
  export interface Schema$Categories {
    /**
     * The accessibility category, containing all accessibility related audits.
     */
    accessibility?: Schema$LighthouseCategoryV5;
    /**
     * The best practices category, containing all best practices related audits.
     */
    'best-practices'?: Schema$LighthouseCategoryV5;
    /**
     * The performance category, containing all performance related audits.
     */
    performance?: Schema$LighthouseCategoryV5;
    /**
     * The Progressive-Web-App (PWA) category, containing all pwa related audits.
     */
    pwa?: Schema$LighthouseCategoryV5;
    /**
     * The Search-Engine-Optimization (SEO) category, containing all seo related audits.
     */
    seo?: Schema$LighthouseCategoryV5;
  }
  /**
   * Message containing a category
   */
  export interface Schema$CategoryGroupV5 {
    /**
     * The description of what the category is grouping
     */
    description?: string | null;
    /**
     * The human readable title of the group
     */
    title?: string | null;
  }
  /**
   * Message containing the configuration settings for the Lighthouse run.
   */
  export interface Schema$ConfigSettings {
    /**
     * How Lighthouse was run, e.g. from the Chrome extension or from the npm module.
     */
    channel?: string | null;
    /**
     * The form factor the emulation should use.
     */
    emulatedFormFactor?: string | null;
    /**
     * The locale setting.
     */
    locale?: string | null;
    /**
     * List of categories of audits the run should conduct.
     */
    onlyCategories?: any | null;
  }
  /**
   * Message containing environment configuration for a Lighthouse run.
   */
  export interface Schema$Environment {
    /**
     * The benchmark index number that indicates rough device class.
     */
    benchmarkIndex?: number | null;
    /**
     * The user agent string of the version of Chrome used.
     */
    hostUserAgent?: string | null;
    /**
     * The user agent string that was sent over the network.
     */
    networkUserAgent?: string | null;
  }
  /**
   * Message containing the i18n data for the LHR - Version 1.
   */
  export interface Schema$I18n {
    /**
     * Internationalized strings that are formatted to the locale in configSettings.
     */
    rendererFormattedStrings?: Schema$RendererFormattedStrings;
  }
  /**
   * An audit&#39;s result object in a Lighthouse result.
   */
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
    /**
     * A numeric value that has a meaning specific to the audit, e.g. the number of nodes in the DOM or the timestamp of a specific load event. More information can be found in the audit details, if present.
     */
    numericValue?: number | null;
    /**
     * The score of the audit, can be null.
     */
    score?: any | null;
    /**
     * The enumerated score display mode.
     */
    scoreDisplayMode?: string | null;
    /**
     * The human readable title.
     */
    title?: string | null;
    /**
     * Possible warnings that occurred in the audit, can be null.
     */
    warnings?: any | null;
  }
  /**
   * A Lighthouse category.
   */
  export interface Schema$LighthouseCategoryV5 {
    /**
     * An array of references to all the audit members of this category.
     */
    auditRefs?: Schema$AuditRefs[];
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
    /**
     * The overall score of the category, the weighted average of all its audits. (The category&#39;s score, can be null.)
     */
    score?: any | null;
    /**
     * The human-friendly name of the category.
     */
    title?: string | null;
  }
  /**
   * The Lighthouse result object.
   */
  export interface Schema$LighthouseResultV5 {
    /**
     * Map of audits in the LHR.
     */
    audits?: {[key: string]: Schema$LighthouseAuditResultV5} | null;
    /**
     * Map of categories in the LHR.
     */
    categories?: Schema$Categories;
    /**
     * Map of category groups in the LHR.
     */
    categoryGroups?: {[key: string]: Schema$CategoryGroupV5} | null;
    /**
     * The configuration settings for this LHR.
     */
    configSettings?: Schema$ConfigSettings;
    /**
     * Environment settings that were used when making this LHR.
     */
    environment?: Schema$Environment;
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
    i18n?: Schema$I18n;
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
    runtimeError?: Schema$RuntimeError;
    /**
     * List of all run warnings in the LHR.  Will always output to at least `[]`.
     */
    runWarnings?: any[] | null;
    /**
     * The Stack Pack advice strings.
     */
    stackPacks?: Schema$StackPack[];
    /**
     * Timing information for this LHR.
     */
    timing?: Schema$Timing;
    /**
     * The user agent that was used to run this LHR.
     */
    userAgent?: string | null;
  }
  /**
   * The CrUX loading experience object that contains CrUX data breakdowns.
   */
  export interface Schema$PagespeedApiLoadingExperienceV5 {
    /**
     * The url, pattern or origin which the metrics are on.
     */
    id?: string | null;
    /**
     * The requested URL, which may differ from the resolved &quot;id&quot;.
     */
    initial_url?: string | null;
    /**
     * The map of &lt;metrics, data&gt;.
     */
    metrics?: {[key: string]: Schema$UserPageLoadMetricV5} | null;
    /**
     * True if the result is an origin fallback from a page, false otherwise.
     */
    origin_fallback?: boolean | null;
    /**
     * The human readable speed &quot;category&quot; of the id.
     */
    overall_category?: string | null;
  }
  /**
   * The Pagespeed API response object.
   */
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
    version?: Schema$PagespeedVersion;
  }
  /**
   * The Pagespeed Version object.
   */
  export interface Schema$PagespeedVersion {
    /**
     * The major version number of PageSpeed used to generate these results.
     */
    major?: string | null;
    /**
     * The minor version number of PageSpeed used to generate these results.
     */
    minor?: string | null;
  }
  /**
   * Message holding the formatted strings used in the renderer.
   */
  export interface Schema$RendererFormattedStrings {
    /**
     * The tooltip text on an expandable chevron icon.
     */
    auditGroupExpandTooltip?: string | null;
    /**
     * The label for the initial request in a critical request chain.
     */
    crcInitialNavigation?: string | null;
    /**
     * The label for values shown in the summary of critical request chains.
     */
    crcLongestDurationLabel?: string | null;
    /**
     * The label shown next to an audit or metric that has had an error.
     */
    errorLabel?: string | null;
    /**
     * The error string shown next to an erroring audit.
     */
    errorMissingAuditInfo?: string | null;
    /**
     * The title of the lab data performance category.
     */
    labDataTitle?: string | null;
    /**
     * The disclaimer shown under performance explaning that the network can vary.
     */
    lsPerformanceCategoryDescription?: string | null;
    /**
     * The heading shown above a list of audits that were not computerd in the run.
     */
    manualAuditsGroupTitle?: string | null;
    /**
     * The heading shown above a list of audits that do not apply to a page.
     */
    notApplicableAuditsGroupTitle?: string | null;
    /**
     * The heading for the estimated page load savings opportunity of an audit.
     */
    opportunityResourceColumnLabel?: string | null;
    /**
     * The heading for the estimated page load savings of opportunity audits.
     */
    opportunitySavingsColumnLabel?: string | null;
    /**
     * The heading that is shown above a list of audits that are passing.
     */
    passedAuditsGroupTitle?: string | null;
    /**
     * The label that explains the score gauges scale (0-49, 50-89, 90-100).
     */
    scorescaleLabel?: string | null;
    /**
     * The label shown preceding important warnings that may have invalidated an entire report.
     */
    toplevelWarningsMessage?: string | null;
    /**
     * The disclaimer shown below a performance metric value.
     */
    varianceDisclaimer?: string | null;
    /**
     * The label shown above a bulleted list of warnings.
     */
    warningHeader?: string | null;
  }
  /**
   * Message containing a runtime error config.
   */
  export interface Schema$RuntimeError {
    /**
     * The enumerated Lighthouse Error code.
     */
    code?: string | null;
    /**
     * A human readable message explaining the error code.
     */
    message?: string | null;
  }
  /**
   * Message containing Stack Pack information.
   */
  export interface Schema$StackPack {
    /**
     * The stack pack advice strings.
     */
    descriptions?: {[key: string]: string} | null;
    /**
     * The stack pack icon data uri.
     */
    iconDataURL?: string | null;
    /**
     * The stack pack id.
     */
    id?: string | null;
    /**
     * The stack pack title.
     */
    title?: string | null;
  }
  /**
   * Message containing the performance timing data for the Lighthouse run.
   */
  export interface Schema$Timing {
    /**
     * The total duration of Lighthouse&#39;s run.
     */
    total?: number | null;
  }
  /**
   * A CrUX metric object for a single metric and form factor.
   */
  export interface Schema$UserPageLoadMetricV5 {
    /**
     * The category of the specific time metric.
     */
    category?: string | null;
    /**
     * Metric distributions. Proportions should sum up to 1.
     */
    distributions?: Schema$Bucket[];
    /**
     * Identifies the form factor of the metric being collected.
     */
    formFactor?: string | null;
    /**
     * The median number of the metric, in millisecond.
     */
    median?: number | null;
    /**
     * Identifies the type of the metric.
     */
    metricId?: string | null;
    /**
     * We use this field to store certain percentile value for this metric. For v4, this field contains pc50. For v5, this field contains pc90.
     */
    percentile?: number | null;
  }

  export class Resource$Pagespeedapi {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * pagespeedonline.pagespeedapi.runpagespeed
     * @desc Runs PageSpeed analysis on the page at the specified URL, and returns PageSpeed scores, a list of suggestions to make that page faster, and other information.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/pagespeedonline.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const pagespeedonline = google.pagespeedonline('v5');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['openid'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await pagespeedonline.pagespeedapi.runpagespeed({
     *     // The captcha token passed when filling out a captcha.
     *     captchaToken: 'placeholder-value',
     *     // A Lighthouse category to run; if none are given, only Performance category
     *     // will be run
     *     category: 'placeholder-value',
     *     // The locale used to localize formatted results
     *     locale: 'placeholder-value',
     *     // The analysis strategy (desktop or mobile) to use, and desktop is the
     *     // default
     *     strategy: 'placeholder-value',
     *     // The URL to fetch and analyze
     *     url: 'placeholder-value',
     *     // Campaign name for analytics.
     *     utm_campaign: 'placeholder-value',
     *     // Campaign source for analytics.
     *     utm_source: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "analysisUTCTimestamp": "my_analysisUTCTimestamp",
     *   //   "captchaResult": "my_captchaResult",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "lighthouseResult": {},
     *   //   "loadingExperience": {},
     *   //   "originLoadingExperience": {},
     *   //   "version": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias pagespeedonline.pagespeedapi.runpagespeed
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.captchaToken The captcha token passed when filling out a captcha.
     * @param {string=} params.category A Lighthouse category to run; if none are given, only Performance category will be run
     * @param {string=} params.locale The locale used to localize formatted results
     * @param {string=} params.strategy The analysis strategy (desktop or mobile) to use, and desktop is the default
     * @param {string=} params.url The URL to fetch and analyze
     * @param {string=} params.utm_campaign Campaign name for analytics.
     * @param {string=} params.utm_source Campaign source for analytics.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    runpagespeed(
      params: Params$Resource$Pagespeedapi$Runpagespeed,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    runpagespeed(
      params?: Params$Resource$Pagespeedapi$Runpagespeed,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PagespeedApiPagespeedResponseV5>;
    runpagespeed(
      params: Params$Resource$Pagespeedapi$Runpagespeed,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$PagespeedApiPagespeedResponseV5>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PagespeedApiPagespeedResponseV5>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PagespeedApiPagespeedResponseV5>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$PagespeedApiPagespeedResponseV5>
      | GaxiosPromise<Readable> {
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

      const rootUrl =
        options.rootUrl || 'https://pagespeedonline.googleapis.com/';
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
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PagespeedApiPagespeedResponseV5>(
          parameters,
          callback as BodyResponseCallback<{} | void>
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
     * The captcha token passed when filling out a captcha.
     */
    captchaToken?: string;
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
