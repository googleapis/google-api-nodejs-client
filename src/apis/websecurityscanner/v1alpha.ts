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

export namespace websecurityscanner_v1alpha {
  export interface Options extends GlobalOptions {
    version: 'v1alpha';
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
   * Web Security Scanner API
   *
   * Scans your Compute and App Engine apps for common web vulnerabilities.
   *
   * @example
   * const {google} = require('googleapis');
   * const websecurityscanner = google.websecurityscanner('v1alpha');
   *
   * @namespace websecurityscanner
   * @type {Function}
   * @version v1alpha
   * @variation v1alpha
   * @param {object=} options Options for Websecurityscanner
   */
  export class Websecurityscanner {
    context: APIRequestContext;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * Scan authentication configuration.
   */
  export interface Schema$Authentication {
    /**
     * Authentication using a custom account.
     */
    customAccount?: Schema$CustomAccount;
    /**
     * Authentication using a Google account.
     */
    googleAccount?: Schema$GoogleAccount;
  }
  /**
   * A CrawledUrl resource represents a URL that was crawled during a ScanRun. Web Security Scanner Service crawls the web applications, following all links within the scope of sites, to find the URLs to test against.
   */
  export interface Schema$CrawledUrl {
    /**
     * Output only. The body of the request that was used to visit the URL.
     */
    body?: string | null;
    /**
     * Output only. The http method of the request that was used to visit the URL, in uppercase.
     */
    httpMethod?: string | null;
    /**
     * Output only. The URL that was crawled.
     */
    url?: string | null;
  }
  /**
   * Describes authentication configuration that uses a custom account.
   */
  export interface Schema$CustomAccount {
    /**
     * Required. The login form URL of the website.
     */
    loginUrl?: string | null;
    /**
     * Required. Input only. The password of the custom account. The credential is stored encrypted and not returned in any response nor included in audit logs.
     */
    password?: string | null;
    /**
     * Required. The user name of the custom account.
     */
    username?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:      service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * A Finding resource represents a vulnerability instance identified during a ScanRun.
   */
  export interface Schema$Finding {
    /**
     * Output only. The body of the request that triggered the vulnerability.
     */
    body?: string | null;
    /**
     * Output only. The description of the vulnerability.
     */
    description?: string | null;
    /**
     * Output only. The URL where the browser lands when the vulnerability is detected.
     */
    finalUrl?: string | null;
    /**
     * Output only. The type of the Finding.
     */
    findingType?: string | null;
    /**
     * Output only. If the vulnerability was originated from nested IFrame, the immediate parent IFrame is reported.
     */
    frameUrl?: string | null;
    /**
     * Output only. The URL produced by the server-side fuzzer and used in the request that triggered the vulnerability.
     */
    fuzzedUrl?: string | null;
    /**
     * Output only. The http method of the request that triggered the vulnerability, in uppercase.
     */
    httpMethod?: string | null;
    /**
     * Output only. The resource name of the Finding. The name follows the format of &#39;projects/{projectId}/scanConfigs/{scanConfigId}/scanruns/{scanRunId}/findings/{findingId}&#39;. The finding IDs are generated by the system.
     */
    name?: string | null;
    /**
     * Output only. An addon containing information about outdated libraries.
     */
    outdatedLibrary?: Schema$OutdatedLibrary;
    /**
     * Output only. The URL containing human-readable payload that user can leverage to reproduce the vulnerability.
     */
    reproductionUrl?: string | null;
    /**
     * Output only. The tracking ID uniquely identifies a vulnerability instance across multiple ScanRuns.
     */
    trackingId?: string | null;
    /**
     * Output only. An addon containing detailed information regarding any resource causing the vulnerability such as JavaScript sources, image, audio files, etc.
     */
    violatingResource?: Schema$ViolatingResource;
    /**
     * Output only. An addon containing information about vulnerable or missing HTTP headers.
     */
    vulnerableHeaders?: Schema$VulnerableHeaders;
    /**
     * Output only. An addon containing information about request parameters which were found to be vulnerable.
     */
    vulnerableParameters?: Schema$VulnerableParameters;
    /**
     * Output only. An addon containing information reported for an XSS, if any.
     */
    xss?: Schema$Xss;
  }
  /**
   * A FindingTypeStats resource represents stats regarding a specific FindingType of Findings under a given ScanRun.
   */
  export interface Schema$FindingTypeStats {
    /**
     * Output only. The count of findings belonging to this finding type.
     */
    findingCount?: number | null;
    /**
     * Output only. The finding type associated with the stats.
     */
    findingType?: string | null;
  }
  /**
   * Describes authentication configuration that uses a Google account.
   */
  export interface Schema$GoogleAccount {
    /**
     * Required. Input only. The password of the Google account. The credential is stored encrypted and not returned in any response nor included in audit logs.
     */
    password?: string | null;
    /**
     * Required. The user name of the Google account.
     */
    username?: string | null;
  }
  /**
   * Describes a HTTP Header.
   */
  export interface Schema$Header {
    /**
     * Header name.
     */
    name?: string | null;
    /**
     * Header value.
     */
    value?: string | null;
  }
  /**
   * Response for the `ListCrawledUrls` method.
   */
  export interface Schema$ListCrawledUrlsResponse {
    /**
     * The list of CrawledUrls returned.
     */
    crawledUrls?: Schema$CrawledUrl[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response for the `ListFindings` method.
   */
  export interface Schema$ListFindingsResponse {
    /**
     * The list of Findings returned.
     */
    findings?: Schema$Finding[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response for the `ListFindingTypeStats` method.
   */
  export interface Schema$ListFindingTypeStatsResponse {
    /**
     * The list of FindingTypeStats returned.
     */
    findingTypeStats?: Schema$FindingTypeStats[];
  }
  /**
   * Response for the `ListScanConfigs` method.
   */
  export interface Schema$ListScanConfigsResponse {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    /**
     * The list of ScanConfigs returned.
     */
    scanConfigs?: Schema$ScanConfig[];
  }
  /**
   * Response for the `ListScanRuns` method.
   */
  export interface Schema$ListScanRunsResponse {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    /**
     * The list of ScanRuns returned.
     */
    scanRuns?: Schema$ScanRun[];
  }
  /**
   * Information reported for an outdated library.
   */
  export interface Schema$OutdatedLibrary {
    /**
     * URLs to learn more information about the vulnerabilities in the library.
     */
    learnMoreUrls?: string[] | null;
    /**
     * The name of the outdated library.
     */
    libraryName?: string | null;
    /**
     * The version number.
     */
    version?: string | null;
  }
  /**
   * A ScanConfig resource contains the configurations to launch a scan. next id: 12
   */
  export interface Schema$ScanConfig {
    /**
     * The authentication configuration. If specified, service will use the authentication configuration during scanning.
     */
    authentication?: Schema$Authentication;
    /**
     * The blacklist URL patterns as described in https://cloud.google.com/security-scanner/docs/excluded-urls
     */
    blacklistPatterns?: string[] | null;
    /**
     * Required. The user provided display name of the ScanConfig.
     */
    displayName?: string | null;
    /**
     * Latest ScanRun if available.
     */
    latestRun?: Schema$ScanRun;
    /**
     * The maximum QPS during scanning. A valid value ranges from 5 to 20 inclusively. If the field is unspecified or its value is set 0, server will default to 15. Other values outside of [5, 20] range will be rejected with INVALID_ARGUMENT error.
     */
    maxQps?: number | null;
    /**
     * The resource name of the ScanConfig. The name follows the format of &#39;projects/{projectId}/scanConfigs/{scanConfigId}&#39;. The ScanConfig IDs are generated by the system.
     */
    name?: string | null;
    /**
     * The schedule of the ScanConfig.
     */
    schedule?: Schema$Schedule;
    /**
     * Required. The starting URLs from which the scanner finds site pages.
     */
    startingUrls?: string[] | null;
    /**
     * Set of Cloud Platforms targeted by the scan. If empty, APP_ENGINE will be used as a default.
     */
    targetPlatforms?: string[] | null;
    /**
     * The user agent used during scanning.
     */
    userAgent?: string | null;
  }
  /**
   * A ScanRun is a output-only resource representing an actual run of the scan.
   */
  export interface Schema$ScanRun {
    /**
     * Output only. The time at which the ScanRun reached termination state - that the ScanRun is either finished or stopped by user.
     */
    endTime?: string | null;
    /**
     * Output only. The execution state of the ScanRun.
     */
    executionState?: string | null;
    /**
     * Output only. Whether the scan run has found any vulnerabilities.
     */
    hasVulnerabilities?: boolean | null;
    /**
     * Output only. The resource name of the ScanRun. The name follows the format of &#39;projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}&#39;. The ScanRun IDs are generated by the system.
     */
    name?: string | null;
    /**
     * Output only. The percentage of total completion ranging from 0 to 100. If the scan is in queue, the value is 0. If the scan is running, the value ranges from 0 to 100. If the scan is finished, the value is 100.
     */
    progressPercent?: number | null;
    /**
     * Output only. The result state of the ScanRun. This field is only available after the execution state reaches &quot;FINISHED&quot;.
     */
    resultState?: string | null;
    /**
     * Output only. The time at which the ScanRun started.
     */
    startTime?: string | null;
    /**
     * Output only. The number of URLs crawled during this ScanRun. If the scan is in progress, the value represents the number of URLs crawled up to now.
     */
    urlsCrawledCount?: string | null;
    /**
     * Output only. The number of URLs tested during this ScanRun. If the scan is in progress, the value represents the number of URLs tested up to now. The number of URLs tested is usually larger than the number URLS crawled because typically a crawled URL is tested with multiple test payloads.
     */
    urlsTestedCount?: string | null;
  }
  /**
   * Scan schedule configuration.
   */
  export interface Schema$Schedule {
    /**
     * Required. The duration of time between executions in days.
     */
    intervalDurationDays?: number | null;
    /**
     * A timestamp indicates when the next run will be scheduled. The value is refreshed by the server after each run. If unspecified, it will default to current server time, which means the scan will be scheduled to start immediately.
     */
    scheduleTime?: string | null;
  }
  /**
   * Request for the `StartScanRun` method.
   */
  export interface Schema$StartScanRunRequest {}
  /**
   * Request for the `StopScanRun` method.
   */
  export interface Schema$StopScanRunRequest {}
  /**
   * Information regarding any resource causing the vulnerability such as JavaScript sources, image, audio files, etc.
   */
  export interface Schema$ViolatingResource {
    /**
     * The MIME type of this resource.
     */
    contentType?: string | null;
    /**
     * URL of this violating resource.
     */
    resourceUrl?: string | null;
  }
  /**
   * Information about vulnerable or missing HTTP Headers.
   */
  export interface Schema$VulnerableHeaders {
    /**
     * List of vulnerable headers.
     */
    headers?: Schema$Header[];
    /**
     * List of missing headers.
     */
    missingHeaders?: Schema$Header[];
  }
  /**
   * Information about vulnerable request parameters.
   */
  export interface Schema$VulnerableParameters {
    /**
     * The vulnerable parameter names.
     */
    parameterNames?: string[] | null;
  }
  /**
   * Information reported for an XSS.
   */
  export interface Schema$Xss {
    /**
     * An error message generated by a javascript breakage.
     */
    errorMessage?: string | null;
    /**
     * Stack traces leading to the point where the XSS occurred.
     */
    stackTraces?: string[] | null;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    scanConfigs: Resource$Projects$Scanconfigs;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.scanConfigs = new Resource$Projects$Scanconfigs(this.context);
    }
  }

  export class Resource$Projects$Scanconfigs {
    context: APIRequestContext;
    scanRuns: Resource$Projects$Scanconfigs$Scanruns;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.scanRuns = new Resource$Projects$Scanconfigs$Scanruns(this.context);
    }

    /**
     * websecurityscanner.projects.scanConfigs.create
     * @desc Creates a new ScanConfig.
     * @alias websecurityscanner.projects.scanConfigs.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The parent resource name where the scan is created, which should be a project resource name in the format 'projects/{projectId}'.
     * @param {().ScanConfig} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Scanconfigs$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ScanConfig>;
    create(
      params: Params$Resource$Projects$Scanconfigs$Create,
      options: MethodOptions | BodyResponseCallback<Schema$ScanConfig>,
      callback: BodyResponseCallback<Schema$ScanConfig>
    ): void;
    create(
      params: Params$Resource$Projects$Scanconfigs$Create,
      callback: BodyResponseCallback<Schema$ScanConfig>
    ): void;
    create(callback: BodyResponseCallback<Schema$ScanConfig>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Scanconfigs$Create
        | BodyResponseCallback<Schema$ScanConfig>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ScanConfig>,
      callback?: BodyResponseCallback<Schema$ScanConfig>
    ): void | GaxiosPromise<Schema$ScanConfig> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Scanconfigs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Scanconfigs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://websecurityscanner.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/scanConfigs').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ScanConfig>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ScanConfig>(parameters);
      }
    }

    /**
     * websecurityscanner.projects.scanConfigs.delete
     * @desc Deletes an existing ScanConfig and its child resources.
     * @alias websecurityscanner.projects.scanConfigs.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The resource name of the ScanConfig to be deleted. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}'.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Scanconfigs$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Scanconfigs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Scanconfigs$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Scanconfigs$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Scanconfigs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Scanconfigs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://websecurityscanner.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * websecurityscanner.projects.scanConfigs.get
     * @desc Gets a ScanConfig.
     * @alias websecurityscanner.projects.scanConfigs.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The resource name of the ScanConfig to be returned. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}'.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Scanconfigs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ScanConfig>;
    get(
      params: Params$Resource$Projects$Scanconfigs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ScanConfig>,
      callback: BodyResponseCallback<Schema$ScanConfig>
    ): void;
    get(
      params: Params$Resource$Projects$Scanconfigs$Get,
      callback: BodyResponseCallback<Schema$ScanConfig>
    ): void;
    get(callback: BodyResponseCallback<Schema$ScanConfig>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Scanconfigs$Get
        | BodyResponseCallback<Schema$ScanConfig>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ScanConfig>,
      callback?: BodyResponseCallback<Schema$ScanConfig>
    ): void | GaxiosPromise<Schema$ScanConfig> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Scanconfigs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Scanconfigs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://websecurityscanner.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ScanConfig>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ScanConfig>(parameters);
      }
    }

    /**
     * websecurityscanner.projects.scanConfigs.list
     * @desc Lists ScanConfigs under a given project.
     * @alias websecurityscanner.projects.scanConfigs.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of ScanConfigs to return, can be limited by server. If not specified or not positive, the implementation will select a reasonable value.
     * @param {string=} params.pageToken A token identifying a page of results to be returned. This should be a `next_page_token` value returned from a previous List request. If unspecified, the first page of results is returned.
     * @param {string} params.parent Required. The parent resource name, which should be a project resource name in the format 'projects/{projectId}'.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Scanconfigs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListScanConfigsResponse>;
    list(
      params: Params$Resource$Projects$Scanconfigs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListScanConfigsResponse>,
      callback: BodyResponseCallback<Schema$ListScanConfigsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Scanconfigs$List,
      callback: BodyResponseCallback<Schema$ListScanConfigsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListScanConfigsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Scanconfigs$List
        | BodyResponseCallback<Schema$ListScanConfigsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListScanConfigsResponse>,
      callback?: BodyResponseCallback<Schema$ListScanConfigsResponse>
    ): void | GaxiosPromise<Schema$ListScanConfigsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Scanconfigs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Scanconfigs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://websecurityscanner.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/scanConfigs').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListScanConfigsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListScanConfigsResponse>(parameters);
      }
    }

    /**
     * websecurityscanner.projects.scanConfigs.patch
     * @desc Updates a ScanConfig. This method support partial update of a ScanConfig.
     * @alias websecurityscanner.projects.scanConfigs.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the ScanConfig. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}'. The ScanConfig IDs are generated by the system.
     * @param {string=} params.updateMask Required. The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     * @param {().ScanConfig} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Scanconfigs$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ScanConfig>;
    patch(
      params: Params$Resource$Projects$Scanconfigs$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$ScanConfig>,
      callback: BodyResponseCallback<Schema$ScanConfig>
    ): void;
    patch(
      params: Params$Resource$Projects$Scanconfigs$Patch,
      callback: BodyResponseCallback<Schema$ScanConfig>
    ): void;
    patch(callback: BodyResponseCallback<Schema$ScanConfig>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Scanconfigs$Patch
        | BodyResponseCallback<Schema$ScanConfig>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ScanConfig>,
      callback?: BodyResponseCallback<Schema$ScanConfig>
    ): void | GaxiosPromise<Schema$ScanConfig> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Scanconfigs$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Scanconfigs$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://websecurityscanner.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ScanConfig>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ScanConfig>(parameters);
      }
    }

    /**
     * websecurityscanner.projects.scanConfigs.start
     * @desc Start a ScanRun according to the given ScanConfig.
     * @alias websecurityscanner.projects.scanConfigs.start
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The resource name of the ScanConfig to be used. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}'.
     * @param {().StartScanRunRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    start(
      params?: Params$Resource$Projects$Scanconfigs$Start,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ScanRun>;
    start(
      params: Params$Resource$Projects$Scanconfigs$Start,
      options: MethodOptions | BodyResponseCallback<Schema$ScanRun>,
      callback: BodyResponseCallback<Schema$ScanRun>
    ): void;
    start(
      params: Params$Resource$Projects$Scanconfigs$Start,
      callback: BodyResponseCallback<Schema$ScanRun>
    ): void;
    start(callback: BodyResponseCallback<Schema$ScanRun>): void;
    start(
      paramsOrCallback?:
        | Params$Resource$Projects$Scanconfigs$Start
        | BodyResponseCallback<Schema$ScanRun>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$ScanRun>,
      callback?: BodyResponseCallback<Schema$ScanRun>
    ): void | GaxiosPromise<Schema$ScanRun> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Scanconfigs$Start;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Scanconfigs$Start;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://websecurityscanner.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}:start').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ScanRun>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ScanRun>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Scanconfigs$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The parent resource name where the scan is created, which should be a project resource name in the format 'projects/{projectId}'.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ScanConfig;
  }
  export interface Params$Resource$Projects$Scanconfigs$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of the ScanConfig to be deleted. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}'.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Scanconfigs$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of the ScanConfig to be returned. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}'.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Scanconfigs$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The maximum number of ScanConfigs to return, can be limited by server. If not specified or not positive, the implementation will select a reasonable value.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results to be returned. This should be a `next_page_token` value returned from a previous List request. If unspecified, the first page of results is returned.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name, which should be a project resource name in the format 'projects/{projectId}'.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Scanconfigs$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The resource name of the ScanConfig. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}'. The ScanConfig IDs are generated by the system.
     */
    name?: string;
    /**
     * Required. The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ScanConfig;
  }
  export interface Params$Resource$Projects$Scanconfigs$Start
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of the ScanConfig to be used. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}'.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$StartScanRunRequest;
  }

  export class Resource$Projects$Scanconfigs$Scanruns {
    context: APIRequestContext;
    crawledUrls: Resource$Projects$Scanconfigs$Scanruns$Crawledurls;
    findings: Resource$Projects$Scanconfigs$Scanruns$Findings;
    findingTypeStats: Resource$Projects$Scanconfigs$Scanruns$Findingtypestats;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.crawledUrls = new Resource$Projects$Scanconfigs$Scanruns$Crawledurls(
        this.context
      );
      this.findings = new Resource$Projects$Scanconfigs$Scanruns$Findings(
        this.context
      );
      this.findingTypeStats = new Resource$Projects$Scanconfigs$Scanruns$Findingtypestats(
        this.context
      );
    }

    /**
     * websecurityscanner.projects.scanConfigs.scanRuns.get
     * @desc Gets a ScanRun.
     * @alias websecurityscanner.projects.scanConfigs.scanRuns.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The resource name of the ScanRun to be returned. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Scanconfigs$Scanruns$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ScanRun>;
    get(
      params: Params$Resource$Projects$Scanconfigs$Scanruns$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ScanRun>,
      callback: BodyResponseCallback<Schema$ScanRun>
    ): void;
    get(
      params: Params$Resource$Projects$Scanconfigs$Scanruns$Get,
      callback: BodyResponseCallback<Schema$ScanRun>
    ): void;
    get(callback: BodyResponseCallback<Schema$ScanRun>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Scanconfigs$Scanruns$Get
        | BodyResponseCallback<Schema$ScanRun>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$ScanRun>,
      callback?: BodyResponseCallback<Schema$ScanRun>
    ): void | GaxiosPromise<Schema$ScanRun> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Scanconfigs$Scanruns$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Scanconfigs$Scanruns$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://websecurityscanner.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ScanRun>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ScanRun>(parameters);
      }
    }

    /**
     * websecurityscanner.projects.scanConfigs.scanRuns.list
     * @desc Lists ScanRuns under a given ScanConfig, in descending order of ScanRun stop time.
     * @alias websecurityscanner.projects.scanConfigs.scanRuns.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of ScanRuns to return, can be limited by server. If not specified or not positive, the implementation will select a reasonable value.
     * @param {string=} params.pageToken A token identifying a page of results to be returned. This should be a `next_page_token` value returned from a previous List request. If unspecified, the first page of results is returned.
     * @param {string} params.parent Required. The parent resource name, which should be a scan resource name in the format 'projects/{projectId}/scanConfigs/{scanConfigId}'.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Scanconfigs$Scanruns$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListScanRunsResponse>;
    list(
      params: Params$Resource$Projects$Scanconfigs$Scanruns$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListScanRunsResponse>,
      callback: BodyResponseCallback<Schema$ListScanRunsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Scanconfigs$Scanruns$List,
      callback: BodyResponseCallback<Schema$ListScanRunsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListScanRunsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Scanconfigs$Scanruns$List
        | BodyResponseCallback<Schema$ListScanRunsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListScanRunsResponse>,
      callback?: BodyResponseCallback<Schema$ListScanRunsResponse>
    ): void | GaxiosPromise<Schema$ListScanRunsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Scanconfigs$Scanruns$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Scanconfigs$Scanruns$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://websecurityscanner.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/scanRuns').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListScanRunsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListScanRunsResponse>(parameters);
      }
    }

    /**
     * websecurityscanner.projects.scanConfigs.scanRuns.stop
     * @desc Stops a ScanRun. The stopped ScanRun is returned.
     * @alias websecurityscanner.projects.scanConfigs.scanRuns.stop
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The resource name of the ScanRun to be stopped. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.
     * @param {().StopScanRunRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    stop(
      params?: Params$Resource$Projects$Scanconfigs$Scanruns$Stop,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ScanRun>;
    stop(
      params: Params$Resource$Projects$Scanconfigs$Scanruns$Stop,
      options: MethodOptions | BodyResponseCallback<Schema$ScanRun>,
      callback: BodyResponseCallback<Schema$ScanRun>
    ): void;
    stop(
      params: Params$Resource$Projects$Scanconfigs$Scanruns$Stop,
      callback: BodyResponseCallback<Schema$ScanRun>
    ): void;
    stop(callback: BodyResponseCallback<Schema$ScanRun>): void;
    stop(
      paramsOrCallback?:
        | Params$Resource$Projects$Scanconfigs$Scanruns$Stop
        | BodyResponseCallback<Schema$ScanRun>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$ScanRun>,
      callback?: BodyResponseCallback<Schema$ScanRun>
    ): void | GaxiosPromise<Schema$ScanRun> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Scanconfigs$Scanruns$Stop;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Scanconfigs$Scanruns$Stop;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://websecurityscanner.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}:stop').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ScanRun>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ScanRun>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Scanconfigs$Scanruns$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of the ScanRun to be returned. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Scanconfigs$Scanruns$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The maximum number of ScanRuns to return, can be limited by server. If not specified or not positive, the implementation will select a reasonable value.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results to be returned. This should be a `next_page_token` value returned from a previous List request. If unspecified, the first page of results is returned.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name, which should be a scan resource name in the format 'projects/{projectId}/scanConfigs/{scanConfigId}'.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Scanconfigs$Scanruns$Stop
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of the ScanRun to be stopped. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$StopScanRunRequest;
  }

  export class Resource$Projects$Scanconfigs$Scanruns$Crawledurls {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * websecurityscanner.projects.scanConfigs.scanRuns.crawledUrls.list
     * @desc List CrawledUrls under a given ScanRun.
     * @alias websecurityscanner.projects.scanConfigs.scanRuns.crawledUrls.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of CrawledUrls to return, can be limited by server. If not specified or not positive, the implementation will select a reasonable value.
     * @param {string=} params.pageToken A token identifying a page of results to be returned. This should be a `next_page_token` value returned from a previous List request. If unspecified, the first page of results is returned.
     * @param {string} params.parent Required. The parent resource name, which should be a scan run resource name in the format 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Scanconfigs$Scanruns$Crawledurls$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListCrawledUrlsResponse>;
    list(
      params: Params$Resource$Projects$Scanconfigs$Scanruns$Crawledurls$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListCrawledUrlsResponse>,
      callback: BodyResponseCallback<Schema$ListCrawledUrlsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Scanconfigs$Scanruns$Crawledurls$List,
      callback: BodyResponseCallback<Schema$ListCrawledUrlsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListCrawledUrlsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Scanconfigs$Scanruns$Crawledurls$List
        | BodyResponseCallback<Schema$ListCrawledUrlsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListCrawledUrlsResponse>,
      callback?: BodyResponseCallback<Schema$ListCrawledUrlsResponse>
    ): void | GaxiosPromise<Schema$ListCrawledUrlsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Scanconfigs$Scanruns$Crawledurls$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Scanconfigs$Scanruns$Crawledurls$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://websecurityscanner.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/crawledUrls').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListCrawledUrlsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListCrawledUrlsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Scanconfigs$Scanruns$Crawledurls$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The maximum number of CrawledUrls to return, can be limited by server. If not specified or not positive, the implementation will select a reasonable value.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results to be returned. This should be a `next_page_token` value returned from a previous List request. If unspecified, the first page of results is returned.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name, which should be a scan run resource name in the format 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.
     */
    parent?: string;
  }

  export class Resource$Projects$Scanconfigs$Scanruns$Findings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * websecurityscanner.projects.scanConfigs.scanRuns.findings.get
     * @desc Gets a Finding.
     * @alias websecurityscanner.projects.scanConfigs.scanRuns.findings.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The resource name of the Finding to be returned. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}/findings/{findingId}'.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Scanconfigs$Scanruns$Findings$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Finding>;
    get(
      params: Params$Resource$Projects$Scanconfigs$Scanruns$Findings$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Finding>,
      callback: BodyResponseCallback<Schema$Finding>
    ): void;
    get(
      params: Params$Resource$Projects$Scanconfigs$Scanruns$Findings$Get,
      callback: BodyResponseCallback<Schema$Finding>
    ): void;
    get(callback: BodyResponseCallback<Schema$Finding>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Scanconfigs$Scanruns$Findings$Get
        | BodyResponseCallback<Schema$Finding>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Finding>,
      callback?: BodyResponseCallback<Schema$Finding>
    ): void | GaxiosPromise<Schema$Finding> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Scanconfigs$Scanruns$Findings$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Scanconfigs$Scanruns$Findings$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://websecurityscanner.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Finding>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Finding>(parameters);
      }
    }

    /**
     * websecurityscanner.projects.scanConfigs.scanRuns.findings.list
     * @desc List Findings under a given ScanRun.
     * @alias websecurityscanner.projects.scanConfigs.scanRuns.findings.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter The filter expression. The expression must be in the format: <field> <operator> <value>. Supported field: 'finding_type'. Supported operator: '='.
     * @param {integer=} params.pageSize The maximum number of Findings to return, can be limited by server. If not specified or not positive, the implementation will select a reasonable value.
     * @param {string=} params.pageToken A token identifying a page of results to be returned. This should be a `next_page_token` value returned from a previous List request. If unspecified, the first page of results is returned.
     * @param {string} params.parent Required. The parent resource name, which should be a scan run resource name in the format 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Scanconfigs$Scanruns$Findings$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListFindingsResponse>;
    list(
      params: Params$Resource$Projects$Scanconfigs$Scanruns$Findings$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListFindingsResponse>,
      callback: BodyResponseCallback<Schema$ListFindingsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Scanconfigs$Scanruns$Findings$List,
      callback: BodyResponseCallback<Schema$ListFindingsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListFindingsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Scanconfigs$Scanruns$Findings$List
        | BodyResponseCallback<Schema$ListFindingsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListFindingsResponse>,
      callback?: BodyResponseCallback<Schema$ListFindingsResponse>
    ): void | GaxiosPromise<Schema$ListFindingsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Scanconfigs$Scanruns$Findings$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Scanconfigs$Scanruns$Findings$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://websecurityscanner.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/findings').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListFindingsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListFindingsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Scanconfigs$Scanruns$Findings$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of the Finding to be returned. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}/findings/{findingId}'.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Scanconfigs$Scanruns$Findings$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The filter expression. The expression must be in the format: <field> <operator> <value>. Supported field: 'finding_type'. Supported operator: '='.
     */
    filter?: string;
    /**
     * The maximum number of Findings to return, can be limited by server. If not specified or not positive, the implementation will select a reasonable value.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results to be returned. This should be a `next_page_token` value returned from a previous List request. If unspecified, the first page of results is returned.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name, which should be a scan run resource name in the format 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.
     */
    parent?: string;
  }

  export class Resource$Projects$Scanconfigs$Scanruns$Findingtypestats {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * websecurityscanner.projects.scanConfigs.scanRuns.findingTypeStats.list
     * @desc List all FindingTypeStats under a given ScanRun.
     * @alias websecurityscanner.projects.scanConfigs.scanRuns.findingTypeStats.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The parent resource name, which should be a scan run resource name in the format 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Scanconfigs$Scanruns$Findingtypestats$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListFindingTypeStatsResponse>;
    list(
      params: Params$Resource$Projects$Scanconfigs$Scanruns$Findingtypestats$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListFindingTypeStatsResponse>,
      callback: BodyResponseCallback<Schema$ListFindingTypeStatsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Scanconfigs$Scanruns$Findingtypestats$List,
      callback: BodyResponseCallback<Schema$ListFindingTypeStatsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListFindingTypeStatsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Scanconfigs$Scanruns$Findingtypestats$List
        | BodyResponseCallback<Schema$ListFindingTypeStatsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListFindingTypeStatsResponse>,
      callback?: BodyResponseCallback<Schema$ListFindingTypeStatsResponse>
    ): void | GaxiosPromise<Schema$ListFindingTypeStatsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Scanconfigs$Scanruns$Findingtypestats$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Scanconfigs$Scanruns$Findingtypestats$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://websecurityscanner.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/findingTypeStats').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListFindingTypeStatsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ListFindingTypeStatsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Scanconfigs$Scanruns$Findingtypestats$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The parent resource name, which should be a scan run resource name in the format 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.
     */
    parent?: string;
  }
}
