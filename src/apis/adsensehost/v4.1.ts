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

export namespace adsensehost_v4_1 {
  export interface Options extends GlobalOptions {
    version: 'v4.1';
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
   * AdSense Host API
   *
   * Generates performance reports, generates ad codes, and provides publisher management capabilities for AdSense Hosts.
   *
   * @example
   * const {google} = require('googleapis');
   * const adsensehost = google.adsensehost('v4.1');
   *
   * @namespace adsensehost
   * @type {Function}
   * @version v4.1
   * @variation v4.1
   * @param {object=} options Options for Adsensehost
   */
  export class Adsensehost {
    context: APIRequestContext;
    accounts: Resource$Accounts;
    adclients: Resource$Adclients;
    associationsessions: Resource$Associationsessions;
    customchannels: Resource$Customchannels;
    reports: Resource$Reports;
    urlchannels: Resource$Urlchannels;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.accounts = new Resource$Accounts(this.context);
      this.adclients = new Resource$Adclients(this.context);
      this.associationsessions = new Resource$Associationsessions(this.context);
      this.customchannels = new Resource$Customchannels(this.context);
      this.reports = new Resource$Reports(this.context);
      this.urlchannels = new Resource$Urlchannels(this.context);
    }
  }

  export interface Schema$Account {
    /**
     * Unique identifier of this account.
     */
    id?: string | null;
    /**
     * Kind of resource this is, in this case adsensehost#account.
     */
    kind?: string | null;
    /**
     * Name of this account.
     */
    name?: string | null;
    /**
     * Approval status of this account. One of: PENDING, APPROVED, DISABLED.
     */
    status?: string | null;
  }
  export interface Schema$Accounts {
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string | null;
    /**
     * The accounts returned in this list response.
     */
    items?: Schema$Account[];
    /**
     * Kind of list this is, in this case adsensehost#accounts.
     */
    kind?: string | null;
  }
  export interface Schema$AdClient {
    /**
     * Whether this ad client is opted in to ARC.
     */
    arcOptIn?: boolean | null;
    /**
     * Unique identifier of this ad client.
     */
    id?: string | null;
    /**
     * Kind of resource this is, in this case adsensehost#adClient.
     */
    kind?: string | null;
    /**
     * This ad client&#39;s product code, which corresponds to the PRODUCT_CODE report dimension.
     */
    productCode?: string | null;
    /**
     * Whether this ad client supports being reported on.
     */
    supportsReporting?: boolean | null;
  }
  export interface Schema$AdClients {
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string | null;
    /**
     * The ad clients returned in this list response.
     */
    items?: Schema$AdClient[];
    /**
     * Kind of list this is, in this case adsensehost#adClients.
     */
    kind?: string | null;
    /**
     * Continuation token used to page through ad clients. To retrieve the next page of results, set the next request&#39;s &quot;pageToken&quot; value to this.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$AdCode {
    /**
     * The ad code snippet.
     */
    adCode?: string | null;
    /**
     * Kind this is, in this case adsensehost#adCode.
     */
    kind?: string | null;
  }
  export interface Schema$AdStyle {
    /**
     * The colors included in the style. These are represented as six hexadecimal characters, similar to HTML color codes, but without the leading hash.
     */
    colors?: {
      background?: string;
      border?: string;
      text?: string;
      title?: string;
      url?: string;
    } | null;
    /**
     * The style of the corners in the ad (deprecated: never populated, ignored).
     */
    corners?: string | null;
    /**
     * The font which is included in the style.
     */
    font?: {family?: string; size?: string} | null;
    /**
     * Kind this is, in this case adsensehost#adStyle.
     */
    kind?: string | null;
  }
  export interface Schema$AdUnit {
    /**
     * Identity code of this ad unit, not necessarily unique across ad clients.
     */
    code?: string | null;
    /**
     * Settings specific to content ads (AFC) and highend mobile content ads (AFMC - deprecated).
     */
    contentAdsSettings?: {
      backupOption?: {color?: string; type?: string; url?: string};
      size?: string;
      type?: string;
    } | null;
    /**
     * Custom style information specific to this ad unit.
     */
    customStyle?: Schema$AdStyle;
    /**
     * Unique identifier of this ad unit. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
     */
    id?: string | null;
    /**
     * Kind of resource this is, in this case adsensehost#adUnit.
     */
    kind?: string | null;
    /**
     * Settings specific to WAP mobile content ads (AFMC - deprecated).
     */
    mobileContentAdsSettings?: {
      markupLanguage?: string;
      scriptingLanguage?: string;
      size?: string;
      type?: string;
    } | null;
    /**
     * Name of this ad unit.
     */
    name?: string | null;
    /**
     * Status of this ad unit. Possible values are: NEW: Indicates that the ad unit was created within the last seven days and does not yet have any activity associated with it.  ACTIVE: Indicates that there has been activity on this ad unit in the last seven days.  INACTIVE: Indicates that there has been no activity on this ad unit in the last seven days.
     */
    status?: string | null;
  }
  export interface Schema$AdUnits {
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string | null;
    /**
     * The ad units returned in this list response.
     */
    items?: Schema$AdUnit[];
    /**
     * Kind of list this is, in this case adsensehost#adUnits.
     */
    kind?: string | null;
    /**
     * Continuation token used to page through ad units. To retrieve the next page of results, set the next request&#39;s &quot;pageToken&quot; value to this.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$AssociationSession {
    /**
     * Hosted account id of the associated publisher after association. Present if status is ACCEPTED.
     */
    accountId?: string | null;
    /**
     * Unique identifier of this association session.
     */
    id?: string | null;
    /**
     * Kind of resource this is, in this case adsensehost#associationSession.
     */
    kind?: string | null;
    /**
     * The products to associate with the user. Options: AFC, AFG, AFV, AFS (deprecated), AFMC (deprecated)
     */
    productCodes?: string[] | null;
    /**
     * Redirect URL of this association session. Used to redirect users into the AdSense association flow.
     */
    redirectUrl?: string | null;
    /**
     * Status of the completed association, available once the association callback token has been verified. One of ACCEPTED, REJECTED, or ERROR.
     */
    status?: string | null;
    /**
     * The preferred locale of the user themselves when going through the AdSense association flow.
     */
    userLocale?: string | null;
    /**
     * The locale of the user&#39;s hosted website.
     */
    websiteLocale?: string | null;
    /**
     * The URL of the user&#39;s hosted website.
     */
    websiteUrl?: string | null;
  }
  export interface Schema$CustomChannel {
    /**
     * Code of this custom channel, not necessarily unique across ad clients.
     */
    code?: string | null;
    /**
     * Unique identifier of this custom channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
     */
    id?: string | null;
    /**
     * Kind of resource this is, in this case adsensehost#customChannel.
     */
    kind?: string | null;
    /**
     * Name of this custom channel.
     */
    name?: string | null;
  }
  export interface Schema$CustomChannels {
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string | null;
    /**
     * The custom channels returned in this list response.
     */
    items?: Schema$CustomChannel[];
    /**
     * Kind of list this is, in this case adsensehost#customChannels.
     */
    kind?: string | null;
    /**
     * Continuation token used to page through custom channels. To retrieve the next page of results, set the next request&#39;s &quot;pageToken&quot; value to this.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$Report {
    /**
     * The averages of the report. This is the same length as any other row in the report; cells corresponding to dimension columns are empty.
     */
    averages?: string[] | null;
    /**
     * The header information of the columns requested in the report. This is a list of headers; one for each dimension in the request, followed by one for each metric in the request.
     */
    headers?: Array<{currency?: string; name?: string; type?: string}> | null;
    /**
     * Kind this is, in this case adsensehost#report.
     */
    kind?: string | null;
    /**
     * The output rows of the report. Each row is a list of cells; one for each dimension in the request, followed by one for each metric in the request. The dimension cells contain strings, and the metric cells contain numbers.
     */
    rows?: string[][] | null;
    /**
     * The total number of rows matched by the report request. Fewer rows may be returned in the response due to being limited by the row count requested or the report row limit.
     */
    totalMatchedRows?: string | null;
    /**
     * The totals of the report. This is the same length as any other row in the report; cells corresponding to dimension columns are empty.
     */
    totals?: string[] | null;
    /**
     * Any warnings associated with generation of the report.
     */
    warnings?: string[] | null;
  }
  export interface Schema$UrlChannel {
    /**
     * Unique identifier of this URL channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
     */
    id?: string | null;
    /**
     * Kind of resource this is, in this case adsensehost#urlChannel.
     */
    kind?: string | null;
    /**
     * URL Pattern of this URL channel. Does not include &quot;http://&quot; or &quot;https://&quot;. Example: www.example.com/home
     */
    urlPattern?: string | null;
  }
  export interface Schema$UrlChannels {
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string | null;
    /**
     * The URL channels returned in this list response.
     */
    items?: Schema$UrlChannel[];
    /**
     * Kind of list this is, in this case adsensehost#urlChannels.
     */
    kind?: string | null;
    /**
     * Continuation token used to page through URL channels. To retrieve the next page of results, set the next request&#39;s &quot;pageToken&quot; value to this.
     */
    nextPageToken?: string | null;
  }

  export class Resource$Accounts {
    context: APIRequestContext;
    adclients: Resource$Accounts$Adclients;
    adunits: Resource$Accounts$Adunits;
    reports: Resource$Accounts$Reports;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.adclients = new Resource$Accounts$Adclients(this.context);
      this.adunits = new Resource$Accounts$Adunits(this.context);
      this.reports = new Resource$Accounts$Reports(this.context);
    }

    /**
     * adsensehost.accounts.get
     * @desc Get information about the selected associated AdSense account.
     * @alias adsensehost.accounts.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Account to get information about.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Accounts$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Account>;
    get(
      params: Params$Resource$Accounts$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Account>,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    get(
      params: Params$Resource$Accounts$Get,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    get(callback: BodyResponseCallback<Schema$Account>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Get
        | BodyResponseCallback<Schema$Account>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Account>,
      callback?: BodyResponseCallback<Schema$Account>
    ): void | GaxiosPromise<Schema$Account> {
      let params = (paramsOrCallback || {}) as Params$Resource$Accounts$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Get;
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
            url: (rootUrl + '/adsensehost/v4.1/accounts/{accountId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId'],
        pathParams: ['accountId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Account>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Account>(parameters);
      }
    }

    /**
     * adsensehost.accounts.list
     * @desc List hosted accounts associated with this AdSense account by ad client id.
     * @alias adsensehost.accounts.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.filterAdClientId Ad clients to list accounts for.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Accounts$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Accounts>;
    list(
      params: Params$Resource$Accounts$List,
      options: MethodOptions | BodyResponseCallback<Schema$Accounts>,
      callback: BodyResponseCallback<Schema$Accounts>
    ): void;
    list(
      params: Params$Resource$Accounts$List,
      callback: BodyResponseCallback<Schema$Accounts>
    ): void;
    list(callback: BodyResponseCallback<Schema$Accounts>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$List
        | BodyResponseCallback<Schema$Accounts>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Accounts>,
      callback?: BodyResponseCallback<Schema$Accounts>
    ): void | GaxiosPromise<Schema$Accounts> {
      let params = (paramsOrCallback || {}) as Params$Resource$Accounts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$List;
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
            url: (rootUrl + '/adsensehost/v4.1/accounts').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['filterAdClientId'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Accounts>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Accounts>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Account to get information about.
     */
    accountId?: string;
  }
  export interface Params$Resource$Accounts$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Ad clients to list accounts for.
     */
    filterAdClientId?: string[];
  }

  export class Resource$Accounts$Adclients {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * adsensehost.accounts.adclients.get
     * @desc Get information about one of the ad clients in the specified publisher's AdSense account.
     * @alias adsensehost.accounts.adclients.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Account which contains the ad client.
     * @param {string} params.adClientId Ad client to get.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Accounts$Adclients$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AdClient>;
    get(
      params: Params$Resource$Accounts$Adclients$Get,
      options: MethodOptions | BodyResponseCallback<Schema$AdClient>,
      callback: BodyResponseCallback<Schema$AdClient>
    ): void;
    get(
      params: Params$Resource$Accounts$Adclients$Get,
      callback: BodyResponseCallback<Schema$AdClient>
    ): void;
    get(callback: BodyResponseCallback<Schema$AdClient>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Adclients$Get
        | BodyResponseCallback<Schema$AdClient>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$AdClient>,
      callback?: BodyResponseCallback<Schema$AdClient>
    ): void | GaxiosPromise<Schema$AdClient> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Adclients$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Adclients$Get;
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
              rootUrl +
              '/adsensehost/v4.1/accounts/{accountId}/adclients/{adClientId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'adClientId'],
        pathParams: ['accountId', 'adClientId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AdClient>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AdClient>(parameters);
      }
    }

    /**
     * adsensehost.accounts.adclients.list
     * @desc List all hosted ad clients in the specified hosted account.
     * @alias adsensehost.accounts.adclients.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Account for which to list ad clients.
     * @param {integer=} params.maxResults The maximum number of ad clients to include in the response, used for paging.
     * @param {string=} params.pageToken A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Accounts$Adclients$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AdClients>;
    list(
      params: Params$Resource$Accounts$Adclients$List,
      options: MethodOptions | BodyResponseCallback<Schema$AdClients>,
      callback: BodyResponseCallback<Schema$AdClients>
    ): void;
    list(
      params: Params$Resource$Accounts$Adclients$List,
      callback: BodyResponseCallback<Schema$AdClients>
    ): void;
    list(callback: BodyResponseCallback<Schema$AdClients>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Adclients$List
        | BodyResponseCallback<Schema$AdClients>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AdClients>,
      callback?: BodyResponseCallback<Schema$AdClients>
    ): void | GaxiosPromise<Schema$AdClients> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Adclients$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Adclients$List;
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
              rootUrl + '/adsensehost/v4.1/accounts/{accountId}/adclients'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId'],
        pathParams: ['accountId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AdClients>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AdClients>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Adclients$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Account which contains the ad client.
     */
    accountId?: string;
    /**
     * Ad client to get.
     */
    adClientId?: string;
  }
  export interface Params$Resource$Accounts$Adclients$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Account for which to list ad clients.
     */
    accountId?: string;
    /**
     * The maximum number of ad clients to include in the response, used for paging.
     */
    maxResults?: number;
    /**
     * A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     */
    pageToken?: string;
  }

  export class Resource$Accounts$Adunits {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * adsensehost.accounts.adunits.delete
     * @desc Delete the specified ad unit from the specified publisher AdSense account.
     * @alias adsensehost.accounts.adunits.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Account which contains the ad unit.
     * @param {string} params.adClientId Ad client for which to get ad unit.
     * @param {string} params.adUnitId Ad unit to delete.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Accounts$Adunits$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AdUnit>;
    delete(
      params: Params$Resource$Accounts$Adunits$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$AdUnit>,
      callback: BodyResponseCallback<Schema$AdUnit>
    ): void;
    delete(
      params: Params$Resource$Accounts$Adunits$Delete,
      callback: BodyResponseCallback<Schema$AdUnit>
    ): void;
    delete(callback: BodyResponseCallback<Schema$AdUnit>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Accounts$Adunits$Delete
        | BodyResponseCallback<Schema$AdUnit>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$AdUnit>,
      callback?: BodyResponseCallback<Schema$AdUnit>
    ): void | GaxiosPromise<Schema$AdUnit> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Adunits$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Adunits$Delete;
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
              rootUrl +
              '/adsensehost/v4.1/accounts/{accountId}/adclients/{adClientId}/adunits/{adUnitId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'adClientId', 'adUnitId'],
        pathParams: ['accountId', 'adClientId', 'adUnitId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AdUnit>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AdUnit>(parameters);
      }
    }

    /**
     * adsensehost.accounts.adunits.get
     * @desc Get the specified host ad unit in this AdSense account.
     * @alias adsensehost.accounts.adunits.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Account which contains the ad unit.
     * @param {string} params.adClientId Ad client for which to get ad unit.
     * @param {string} params.adUnitId Ad unit to get.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Accounts$Adunits$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AdUnit>;
    get(
      params: Params$Resource$Accounts$Adunits$Get,
      options: MethodOptions | BodyResponseCallback<Schema$AdUnit>,
      callback: BodyResponseCallback<Schema$AdUnit>
    ): void;
    get(
      params: Params$Resource$Accounts$Adunits$Get,
      callback: BodyResponseCallback<Schema$AdUnit>
    ): void;
    get(callback: BodyResponseCallback<Schema$AdUnit>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Adunits$Get
        | BodyResponseCallback<Schema$AdUnit>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$AdUnit>,
      callback?: BodyResponseCallback<Schema$AdUnit>
    ): void | GaxiosPromise<Schema$AdUnit> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Adunits$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Adunits$Get;
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
              rootUrl +
              '/adsensehost/v4.1/accounts/{accountId}/adclients/{adClientId}/adunits/{adUnitId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'adClientId', 'adUnitId'],
        pathParams: ['accountId', 'adClientId', 'adUnitId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AdUnit>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AdUnit>(parameters);
      }
    }

    /**
     * adsensehost.accounts.adunits.getAdCode
     * @desc Get ad code for the specified ad unit, attaching the specified host custom channels.
     * @alias adsensehost.accounts.adunits.getAdCode
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Account which contains the ad client.
     * @param {string} params.adClientId Ad client with contains the ad unit.
     * @param {string} params.adUnitId Ad unit to get the code for.
     * @param {string=} params.hostCustomChannelId Host custom channel to attach to the ad code.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getAdCode(
      params?: Params$Resource$Accounts$Adunits$Getadcode,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AdCode>;
    getAdCode(
      params: Params$Resource$Accounts$Adunits$Getadcode,
      options: MethodOptions | BodyResponseCallback<Schema$AdCode>,
      callback: BodyResponseCallback<Schema$AdCode>
    ): void;
    getAdCode(
      params: Params$Resource$Accounts$Adunits$Getadcode,
      callback: BodyResponseCallback<Schema$AdCode>
    ): void;
    getAdCode(callback: BodyResponseCallback<Schema$AdCode>): void;
    getAdCode(
      paramsOrCallback?:
        | Params$Resource$Accounts$Adunits$Getadcode
        | BodyResponseCallback<Schema$AdCode>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$AdCode>,
      callback?: BodyResponseCallback<Schema$AdCode>
    ): void | GaxiosPromise<Schema$AdCode> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Adunits$Getadcode;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Adunits$Getadcode;
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
              rootUrl +
              '/adsensehost/v4.1/accounts/{accountId}/adclients/{adClientId}/adunits/{adUnitId}/adcode'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'adClientId', 'adUnitId'],
        pathParams: ['accountId', 'adClientId', 'adUnitId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AdCode>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AdCode>(parameters);
      }
    }

    /**
     * adsensehost.accounts.adunits.insert
     * @desc Insert the supplied ad unit into the specified publisher AdSense account.
     * @alias adsensehost.accounts.adunits.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Account which will contain the ad unit.
     * @param {string} params.adClientId Ad client into which to insert the ad unit.
     * @param {().AdUnit} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Accounts$Adunits$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AdUnit>;
    insert(
      params: Params$Resource$Accounts$Adunits$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$AdUnit>,
      callback: BodyResponseCallback<Schema$AdUnit>
    ): void;
    insert(
      params: Params$Resource$Accounts$Adunits$Insert,
      callback: BodyResponseCallback<Schema$AdUnit>
    ): void;
    insert(callback: BodyResponseCallback<Schema$AdUnit>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Accounts$Adunits$Insert
        | BodyResponseCallback<Schema$AdUnit>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$AdUnit>,
      callback?: BodyResponseCallback<Schema$AdUnit>
    ): void | GaxiosPromise<Schema$AdUnit> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Adunits$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Adunits$Insert;
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
              rootUrl +
              '/adsensehost/v4.1/accounts/{accountId}/adclients/{adClientId}/adunits'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'adClientId'],
        pathParams: ['accountId', 'adClientId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AdUnit>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AdUnit>(parameters);
      }
    }

    /**
     * adsensehost.accounts.adunits.list
     * @desc List all ad units in the specified publisher's AdSense account.
     * @alias adsensehost.accounts.adunits.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Account which contains the ad client.
     * @param {string} params.adClientId Ad client for which to list ad units.
     * @param {boolean=} params.includeInactive Whether to include inactive ad units. Default: true.
     * @param {integer=} params.maxResults The maximum number of ad units to include in the response, used for paging.
     * @param {string=} params.pageToken A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Accounts$Adunits$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AdUnits>;
    list(
      params: Params$Resource$Accounts$Adunits$List,
      options: MethodOptions | BodyResponseCallback<Schema$AdUnits>,
      callback: BodyResponseCallback<Schema$AdUnits>
    ): void;
    list(
      params: Params$Resource$Accounts$Adunits$List,
      callback: BodyResponseCallback<Schema$AdUnits>
    ): void;
    list(callback: BodyResponseCallback<Schema$AdUnits>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Adunits$List
        | BodyResponseCallback<Schema$AdUnits>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$AdUnits>,
      callback?: BodyResponseCallback<Schema$AdUnits>
    ): void | GaxiosPromise<Schema$AdUnits> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Adunits$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Adunits$List;
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
              rootUrl +
              '/adsensehost/v4.1/accounts/{accountId}/adclients/{adClientId}/adunits'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'adClientId'],
        pathParams: ['accountId', 'adClientId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AdUnits>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AdUnits>(parameters);
      }
    }

    /**
     * adsensehost.accounts.adunits.patch
     * @desc Update the supplied ad unit in the specified publisher AdSense account. This method supports patch semantics.
     * @alias adsensehost.accounts.adunits.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Account which contains the ad client.
     * @param {string} params.adClientId Ad client which contains the ad unit.
     * @param {string} params.adUnitId Ad unit to get.
     * @param {().AdUnit} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Accounts$Adunits$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AdUnit>;
    patch(
      params: Params$Resource$Accounts$Adunits$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$AdUnit>,
      callback: BodyResponseCallback<Schema$AdUnit>
    ): void;
    patch(
      params: Params$Resource$Accounts$Adunits$Patch,
      callback: BodyResponseCallback<Schema$AdUnit>
    ): void;
    patch(callback: BodyResponseCallback<Schema$AdUnit>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Accounts$Adunits$Patch
        | BodyResponseCallback<Schema$AdUnit>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$AdUnit>,
      callback?: BodyResponseCallback<Schema$AdUnit>
    ): void | GaxiosPromise<Schema$AdUnit> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Adunits$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Adunits$Patch;
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
              rootUrl +
              '/adsensehost/v4.1/accounts/{accountId}/adclients/{adClientId}/adunits'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'adClientId', 'adUnitId'],
        pathParams: ['accountId', 'adClientId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AdUnit>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AdUnit>(parameters);
      }
    }

    /**
     * adsensehost.accounts.adunits.update
     * @desc Update the supplied ad unit in the specified publisher AdSense account.
     * @alias adsensehost.accounts.adunits.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Account which contains the ad client.
     * @param {string} params.adClientId Ad client which contains the ad unit.
     * @param {().AdUnit} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Accounts$Adunits$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AdUnit>;
    update(
      params: Params$Resource$Accounts$Adunits$Update,
      options: MethodOptions | BodyResponseCallback<Schema$AdUnit>,
      callback: BodyResponseCallback<Schema$AdUnit>
    ): void;
    update(
      params: Params$Resource$Accounts$Adunits$Update,
      callback: BodyResponseCallback<Schema$AdUnit>
    ): void;
    update(callback: BodyResponseCallback<Schema$AdUnit>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Accounts$Adunits$Update
        | BodyResponseCallback<Schema$AdUnit>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$AdUnit>,
      callback?: BodyResponseCallback<Schema$AdUnit>
    ): void | GaxiosPromise<Schema$AdUnit> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Adunits$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Adunits$Update;
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
              rootUrl +
              '/adsensehost/v4.1/accounts/{accountId}/adclients/{adClientId}/adunits'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'adClientId'],
        pathParams: ['accountId', 'adClientId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AdUnit>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AdUnit>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Adunits$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Account which contains the ad unit.
     */
    accountId?: string;
    /**
     * Ad client for which to get ad unit.
     */
    adClientId?: string;
    /**
     * Ad unit to delete.
     */
    adUnitId?: string;
  }
  export interface Params$Resource$Accounts$Adunits$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Account which contains the ad unit.
     */
    accountId?: string;
    /**
     * Ad client for which to get ad unit.
     */
    adClientId?: string;
    /**
     * Ad unit to get.
     */
    adUnitId?: string;
  }
  export interface Params$Resource$Accounts$Adunits$Getadcode
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Account which contains the ad client.
     */
    accountId?: string;
    /**
     * Ad client with contains the ad unit.
     */
    adClientId?: string;
    /**
     * Ad unit to get the code for.
     */
    adUnitId?: string;
    /**
     * Host custom channel to attach to the ad code.
     */
    hostCustomChannelId?: string[];
  }
  export interface Params$Resource$Accounts$Adunits$Insert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Account which will contain the ad unit.
     */
    accountId?: string;
    /**
     * Ad client into which to insert the ad unit.
     */
    adClientId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AdUnit;
  }
  export interface Params$Resource$Accounts$Adunits$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Account which contains the ad client.
     */
    accountId?: string;
    /**
     * Ad client for which to list ad units.
     */
    adClientId?: string;
    /**
     * Whether to include inactive ad units. Default: true.
     */
    includeInactive?: boolean;
    /**
     * The maximum number of ad units to include in the response, used for paging.
     */
    maxResults?: number;
    /**
     * A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Accounts$Adunits$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Account which contains the ad client.
     */
    accountId?: string;
    /**
     * Ad client which contains the ad unit.
     */
    adClientId?: string;
    /**
     * Ad unit to get.
     */
    adUnitId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AdUnit;
  }
  export interface Params$Resource$Accounts$Adunits$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Account which contains the ad client.
     */
    accountId?: string;
    /**
     * Ad client which contains the ad unit.
     */
    adClientId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AdUnit;
  }

  export class Resource$Accounts$Reports {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * adsensehost.accounts.reports.generate
     * @desc Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
     * @alias adsensehost.accounts.reports.generate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Hosted account upon which to report.
     * @param {string=} params.dimension Dimensions to base the report on.
     * @param {string} params.endDate End of the date range to report on in "YYYY-MM-DD" format, inclusive.
     * @param {string=} params.filter Filters to be run on the report.
     * @param {string=} params.locale Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
     * @param {integer=} params.maxResults The maximum number of rows of report data to return.
     * @param {string=} params.metric Numeric columns to include in the report.
     * @param {string=} params.sort The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
     * @param {string} params.startDate Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
     * @param {integer=} params.startIndex Index of the first row of report data to return.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    generate(
      params?: Params$Resource$Accounts$Reports$Generate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Report>;
    generate(
      params: Params$Resource$Accounts$Reports$Generate,
      options: MethodOptions | BodyResponseCallback<Schema$Report>,
      callback: BodyResponseCallback<Schema$Report>
    ): void;
    generate(
      params: Params$Resource$Accounts$Reports$Generate,
      callback: BodyResponseCallback<Schema$Report>
    ): void;
    generate(callback: BodyResponseCallback<Schema$Report>): void;
    generate(
      paramsOrCallback?:
        | Params$Resource$Accounts$Reports$Generate
        | BodyResponseCallback<Schema$Report>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Report>,
      callback?: BodyResponseCallback<Schema$Report>
    ): void | GaxiosPromise<Schema$Report> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Reports$Generate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Reports$Generate;
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
              rootUrl + '/adsensehost/v4.1/accounts/{accountId}/reports'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'startDate', 'endDate'],
        pathParams: ['accountId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Report>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Report>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Reports$Generate
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Hosted account upon which to report.
     */
    accountId?: string;
    /**
     * Dimensions to base the report on.
     */
    dimension?: string[];
    /**
     * End of the date range to report on in "YYYY-MM-DD" format, inclusive.
     */
    endDate?: string;
    /**
     * Filters to be run on the report.
     */
    filter?: string[];
    /**
     * Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
     */
    locale?: string;
    /**
     * The maximum number of rows of report data to return.
     */
    maxResults?: number;
    /**
     * Numeric columns to include in the report.
     */
    metric?: string[];
    /**
     * The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
     */
    sort?: string[];
    /**
     * Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
     */
    startDate?: string;
    /**
     * Index of the first row of report data to return.
     */
    startIndex?: number;
  }

  export class Resource$Adclients {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * adsensehost.adclients.get
     * @desc Get information about one of the ad clients in the Host AdSense account.
     * @alias adsensehost.adclients.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.adClientId Ad client to get.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Adclients$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AdClient>;
    get(
      params: Params$Resource$Adclients$Get,
      options: MethodOptions | BodyResponseCallback<Schema$AdClient>,
      callback: BodyResponseCallback<Schema$AdClient>
    ): void;
    get(
      params: Params$Resource$Adclients$Get,
      callback: BodyResponseCallback<Schema$AdClient>
    ): void;
    get(callback: BodyResponseCallback<Schema$AdClient>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Adclients$Get
        | BodyResponseCallback<Schema$AdClient>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$AdClient>,
      callback?: BodyResponseCallback<Schema$AdClient>
    ): void | GaxiosPromise<Schema$AdClient> {
      let params = (paramsOrCallback || {}) as Params$Resource$Adclients$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Adclients$Get;
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
            url: (rootUrl + '/adsensehost/v4.1/adclients/{adClientId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['adClientId'],
        pathParams: ['adClientId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AdClient>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AdClient>(parameters);
      }
    }

    /**
     * adsensehost.adclients.list
     * @desc List all host ad clients in this AdSense account.
     * @alias adsensehost.adclients.list
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {integer=} params.maxResults The maximum number of ad clients to include in the response, used for paging.
     * @param {string=} params.pageToken A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Adclients$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AdClients>;
    list(
      params: Params$Resource$Adclients$List,
      options: MethodOptions | BodyResponseCallback<Schema$AdClients>,
      callback: BodyResponseCallback<Schema$AdClients>
    ): void;
    list(
      params: Params$Resource$Adclients$List,
      callback: BodyResponseCallback<Schema$AdClients>
    ): void;
    list(callback: BodyResponseCallback<Schema$AdClients>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Adclients$List
        | BodyResponseCallback<Schema$AdClients>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AdClients>,
      callback?: BodyResponseCallback<Schema$AdClients>
    ): void | GaxiosPromise<Schema$AdClients> {
      let params = (paramsOrCallback || {}) as Params$Resource$Adclients$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Adclients$List;
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
            url: (rootUrl + '/adsensehost/v4.1/adclients').replace(
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
        createAPIRequest<Schema$AdClients>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AdClients>(parameters);
      }
    }
  }

  export interface Params$Resource$Adclients$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Ad client to get.
     */
    adClientId?: string;
  }
  export interface Params$Resource$Adclients$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The maximum number of ad clients to include in the response, used for paging.
     */
    maxResults?: number;
    /**
     * A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     */
    pageToken?: string;
  }

  export class Resource$Associationsessions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * adsensehost.associationsessions.start
     * @desc Create an association session for initiating an association with an AdSense user.
     * @alias adsensehost.associationsessions.start
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.productCode Products to associate with the user.
     * @param {string=} params.userLocale The preferred locale of the user.
     * @param {string=} params.websiteLocale The locale of the user's hosted website.
     * @param {string} params.websiteUrl The URL of the user's hosted website.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    start(
      params?: Params$Resource$Associationsessions$Start,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AssociationSession>;
    start(
      params: Params$Resource$Associationsessions$Start,
      options: MethodOptions | BodyResponseCallback<Schema$AssociationSession>,
      callback: BodyResponseCallback<Schema$AssociationSession>
    ): void;
    start(
      params: Params$Resource$Associationsessions$Start,
      callback: BodyResponseCallback<Schema$AssociationSession>
    ): void;
    start(callback: BodyResponseCallback<Schema$AssociationSession>): void;
    start(
      paramsOrCallback?:
        | Params$Resource$Associationsessions$Start
        | BodyResponseCallback<Schema$AssociationSession>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AssociationSession>,
      callback?: BodyResponseCallback<Schema$AssociationSession>
    ): void | GaxiosPromise<Schema$AssociationSession> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Associationsessions$Start;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Associationsessions$Start;
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
              rootUrl + '/adsensehost/v4.1/associationsessions/start'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['productCode', 'websiteUrl'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AssociationSession>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AssociationSession>(parameters);
      }
    }

    /**
     * adsensehost.associationsessions.verify
     * @desc Verify an association session after the association callback returns from AdSense signup.
     * @alias adsensehost.associationsessions.verify
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.token The token returned to the association callback URL.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    verify(
      params?: Params$Resource$Associationsessions$Verify,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AssociationSession>;
    verify(
      params: Params$Resource$Associationsessions$Verify,
      options: MethodOptions | BodyResponseCallback<Schema$AssociationSession>,
      callback: BodyResponseCallback<Schema$AssociationSession>
    ): void;
    verify(
      params: Params$Resource$Associationsessions$Verify,
      callback: BodyResponseCallback<Schema$AssociationSession>
    ): void;
    verify(callback: BodyResponseCallback<Schema$AssociationSession>): void;
    verify(
      paramsOrCallback?:
        | Params$Resource$Associationsessions$Verify
        | BodyResponseCallback<Schema$AssociationSession>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AssociationSession>,
      callback?: BodyResponseCallback<Schema$AssociationSession>
    ): void | GaxiosPromise<Schema$AssociationSession> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Associationsessions$Verify;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Associationsessions$Verify;
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
              rootUrl + '/adsensehost/v4.1/associationsessions/verify'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['token'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AssociationSession>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AssociationSession>(parameters);
      }
    }
  }

  export interface Params$Resource$Associationsessions$Start
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Products to associate with the user.
     */
    productCode?: string[];
    /**
     * The preferred locale of the user.
     */
    userLocale?: string;
    /**
     * The locale of the user's hosted website.
     */
    websiteLocale?: string;
    /**
     * The URL of the user's hosted website.
     */
    websiteUrl?: string;
  }
  export interface Params$Resource$Associationsessions$Verify
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The token returned to the association callback URL.
     */
    token?: string;
  }

  export class Resource$Customchannels {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * adsensehost.customchannels.delete
     * @desc Delete a specific custom channel from the host AdSense account.
     * @alias adsensehost.customchannels.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.adClientId Ad client from which to delete the custom channel.
     * @param {string} params.customChannelId Custom channel to delete.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Customchannels$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CustomChannel>;
    delete(
      params: Params$Resource$Customchannels$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$CustomChannel>,
      callback: BodyResponseCallback<Schema$CustomChannel>
    ): void;
    delete(
      params: Params$Resource$Customchannels$Delete,
      callback: BodyResponseCallback<Schema$CustomChannel>
    ): void;
    delete(callback: BodyResponseCallback<Schema$CustomChannel>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Customchannels$Delete
        | BodyResponseCallback<Schema$CustomChannel>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CustomChannel>,
      callback?: BodyResponseCallback<Schema$CustomChannel>
    ): void | GaxiosPromise<Schema$CustomChannel> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customchannels$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customchannels$Delete;
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
              rootUrl +
              '/adsensehost/v4.1/adclients/{adClientId}/customchannels/{customChannelId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['adClientId', 'customChannelId'],
        pathParams: ['adClientId', 'customChannelId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CustomChannel>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CustomChannel>(parameters);
      }
    }

    /**
     * adsensehost.customchannels.get
     * @desc Get a specific custom channel from the host AdSense account.
     * @alias adsensehost.customchannels.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.adClientId Ad client from which to get the custom channel.
     * @param {string} params.customChannelId Custom channel to get.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Customchannels$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CustomChannel>;
    get(
      params: Params$Resource$Customchannels$Get,
      options: MethodOptions | BodyResponseCallback<Schema$CustomChannel>,
      callback: BodyResponseCallback<Schema$CustomChannel>
    ): void;
    get(
      params: Params$Resource$Customchannels$Get,
      callback: BodyResponseCallback<Schema$CustomChannel>
    ): void;
    get(callback: BodyResponseCallback<Schema$CustomChannel>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Customchannels$Get
        | BodyResponseCallback<Schema$CustomChannel>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CustomChannel>,
      callback?: BodyResponseCallback<Schema$CustomChannel>
    ): void | GaxiosPromise<Schema$CustomChannel> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customchannels$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customchannels$Get;
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
              rootUrl +
              '/adsensehost/v4.1/adclients/{adClientId}/customchannels/{customChannelId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['adClientId', 'customChannelId'],
        pathParams: ['adClientId', 'customChannelId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CustomChannel>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CustomChannel>(parameters);
      }
    }

    /**
     * adsensehost.customchannels.insert
     * @desc Add a new custom channel to the host AdSense account.
     * @alias adsensehost.customchannels.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.adClientId Ad client to which the new custom channel will be added.
     * @param {().CustomChannel} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Customchannels$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CustomChannel>;
    insert(
      params: Params$Resource$Customchannels$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$CustomChannel>,
      callback: BodyResponseCallback<Schema$CustomChannel>
    ): void;
    insert(
      params: Params$Resource$Customchannels$Insert,
      callback: BodyResponseCallback<Schema$CustomChannel>
    ): void;
    insert(callback: BodyResponseCallback<Schema$CustomChannel>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Customchannels$Insert
        | BodyResponseCallback<Schema$CustomChannel>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CustomChannel>,
      callback?: BodyResponseCallback<Schema$CustomChannel>
    ): void | GaxiosPromise<Schema$CustomChannel> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customchannels$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customchannels$Insert;
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
              rootUrl +
              '/adsensehost/v4.1/adclients/{adClientId}/customchannels'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['adClientId'],
        pathParams: ['adClientId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CustomChannel>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CustomChannel>(parameters);
      }
    }

    /**
     * adsensehost.customchannels.list
     * @desc List all host custom channels in this AdSense account.
     * @alias adsensehost.customchannels.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.adClientId Ad client for which to list custom channels.
     * @param {integer=} params.maxResults The maximum number of custom channels to include in the response, used for paging.
     * @param {string=} params.pageToken A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Customchannels$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CustomChannels>;
    list(
      params: Params$Resource$Customchannels$List,
      options: MethodOptions | BodyResponseCallback<Schema$CustomChannels>,
      callback: BodyResponseCallback<Schema$CustomChannels>
    ): void;
    list(
      params: Params$Resource$Customchannels$List,
      callback: BodyResponseCallback<Schema$CustomChannels>
    ): void;
    list(callback: BodyResponseCallback<Schema$CustomChannels>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Customchannels$List
        | BodyResponseCallback<Schema$CustomChannels>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CustomChannels>,
      callback?: BodyResponseCallback<Schema$CustomChannels>
    ): void | GaxiosPromise<Schema$CustomChannels> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customchannels$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customchannels$List;
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
              rootUrl +
              '/adsensehost/v4.1/adclients/{adClientId}/customchannels'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['adClientId'],
        pathParams: ['adClientId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CustomChannels>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CustomChannels>(parameters);
      }
    }

    /**
     * adsensehost.customchannels.patch
     * @desc Update a custom channel in the host AdSense account. This method supports patch semantics.
     * @alias adsensehost.customchannels.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.adClientId Ad client in which the custom channel will be updated.
     * @param {string} params.customChannelId Custom channel to get.
     * @param {().CustomChannel} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Customchannels$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CustomChannel>;
    patch(
      params: Params$Resource$Customchannels$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$CustomChannel>,
      callback: BodyResponseCallback<Schema$CustomChannel>
    ): void;
    patch(
      params: Params$Resource$Customchannels$Patch,
      callback: BodyResponseCallback<Schema$CustomChannel>
    ): void;
    patch(callback: BodyResponseCallback<Schema$CustomChannel>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Customchannels$Patch
        | BodyResponseCallback<Schema$CustomChannel>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CustomChannel>,
      callback?: BodyResponseCallback<Schema$CustomChannel>
    ): void | GaxiosPromise<Schema$CustomChannel> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customchannels$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customchannels$Patch;
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
              rootUrl +
              '/adsensehost/v4.1/adclients/{adClientId}/customchannels'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['adClientId', 'customChannelId'],
        pathParams: ['adClientId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CustomChannel>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CustomChannel>(parameters);
      }
    }

    /**
     * adsensehost.customchannels.update
     * @desc Update a custom channel in the host AdSense account.
     * @alias adsensehost.customchannels.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.adClientId Ad client in which the custom channel will be updated.
     * @param {().CustomChannel} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Customchannels$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CustomChannel>;
    update(
      params: Params$Resource$Customchannels$Update,
      options: MethodOptions | BodyResponseCallback<Schema$CustomChannel>,
      callback: BodyResponseCallback<Schema$CustomChannel>
    ): void;
    update(
      params: Params$Resource$Customchannels$Update,
      callback: BodyResponseCallback<Schema$CustomChannel>
    ): void;
    update(callback: BodyResponseCallback<Schema$CustomChannel>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Customchannels$Update
        | BodyResponseCallback<Schema$CustomChannel>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CustomChannel>,
      callback?: BodyResponseCallback<Schema$CustomChannel>
    ): void | GaxiosPromise<Schema$CustomChannel> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customchannels$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customchannels$Update;
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
              rootUrl +
              '/adsensehost/v4.1/adclients/{adClientId}/customchannels'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['adClientId'],
        pathParams: ['adClientId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CustomChannel>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CustomChannel>(parameters);
      }
    }
  }

  export interface Params$Resource$Customchannels$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Ad client from which to delete the custom channel.
     */
    adClientId?: string;
    /**
     * Custom channel to delete.
     */
    customChannelId?: string;
  }
  export interface Params$Resource$Customchannels$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Ad client from which to get the custom channel.
     */
    adClientId?: string;
    /**
     * Custom channel to get.
     */
    customChannelId?: string;
  }
  export interface Params$Resource$Customchannels$Insert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Ad client to which the new custom channel will be added.
     */
    adClientId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CustomChannel;
  }
  export interface Params$Resource$Customchannels$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Ad client for which to list custom channels.
     */
    adClientId?: string;
    /**
     * The maximum number of custom channels to include in the response, used for paging.
     */
    maxResults?: number;
    /**
     * A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Customchannels$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Ad client in which the custom channel will be updated.
     */
    adClientId?: string;
    /**
     * Custom channel to get.
     */
    customChannelId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CustomChannel;
  }
  export interface Params$Resource$Customchannels$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Ad client in which the custom channel will be updated.
     */
    adClientId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CustomChannel;
  }

  export class Resource$Reports {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * adsensehost.reports.generate
     * @desc Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
     * @alias adsensehost.reports.generate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.dimension Dimensions to base the report on.
     * @param {string} params.endDate End of the date range to report on in "YYYY-MM-DD" format, inclusive.
     * @param {string=} params.filter Filters to be run on the report.
     * @param {string=} params.locale Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
     * @param {integer=} params.maxResults The maximum number of rows of report data to return.
     * @param {string=} params.metric Numeric columns to include in the report.
     * @param {string=} params.sort The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
     * @param {string} params.startDate Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
     * @param {integer=} params.startIndex Index of the first row of report data to return.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    generate(
      params?: Params$Resource$Reports$Generate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Report>;
    generate(
      params: Params$Resource$Reports$Generate,
      options: MethodOptions | BodyResponseCallback<Schema$Report>,
      callback: BodyResponseCallback<Schema$Report>
    ): void;
    generate(
      params: Params$Resource$Reports$Generate,
      callback: BodyResponseCallback<Schema$Report>
    ): void;
    generate(callback: BodyResponseCallback<Schema$Report>): void;
    generate(
      paramsOrCallback?:
        | Params$Resource$Reports$Generate
        | BodyResponseCallback<Schema$Report>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Report>,
      callback?: BodyResponseCallback<Schema$Report>
    ): void | GaxiosPromise<Schema$Report> {
      let params = (paramsOrCallback || {}) as Params$Resource$Reports$Generate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Reports$Generate;
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
            url: (rootUrl + '/adsensehost/v4.1/reports').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['startDate', 'endDate'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Report>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Report>(parameters);
      }
    }
  }

  export interface Params$Resource$Reports$Generate extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Dimensions to base the report on.
     */
    dimension?: string[];
    /**
     * End of the date range to report on in "YYYY-MM-DD" format, inclusive.
     */
    endDate?: string;
    /**
     * Filters to be run on the report.
     */
    filter?: string[];
    /**
     * Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
     */
    locale?: string;
    /**
     * The maximum number of rows of report data to return.
     */
    maxResults?: number;
    /**
     * Numeric columns to include in the report.
     */
    metric?: string[];
    /**
     * The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
     */
    sort?: string[];
    /**
     * Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
     */
    startDate?: string;
    /**
     * Index of the first row of report data to return.
     */
    startIndex?: number;
  }

  export class Resource$Urlchannels {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * adsensehost.urlchannels.delete
     * @desc Delete a URL channel from the host AdSense account.
     * @alias adsensehost.urlchannels.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.adClientId Ad client from which to delete the URL channel.
     * @param {string} params.urlChannelId URL channel to delete.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Urlchannels$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UrlChannel>;
    delete(
      params: Params$Resource$Urlchannels$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$UrlChannel>,
      callback: BodyResponseCallback<Schema$UrlChannel>
    ): void;
    delete(
      params: Params$Resource$Urlchannels$Delete,
      callback: BodyResponseCallback<Schema$UrlChannel>
    ): void;
    delete(callback: BodyResponseCallback<Schema$UrlChannel>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Urlchannels$Delete
        | BodyResponseCallback<Schema$UrlChannel>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$UrlChannel>,
      callback?: BodyResponseCallback<Schema$UrlChannel>
    ): void | GaxiosPromise<Schema$UrlChannel> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Urlchannels$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Urlchannels$Delete;
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
              rootUrl +
              '/adsensehost/v4.1/adclients/{adClientId}/urlchannels/{urlChannelId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['adClientId', 'urlChannelId'],
        pathParams: ['adClientId', 'urlChannelId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UrlChannel>(parameters, callback);
      } else {
        return createAPIRequest<Schema$UrlChannel>(parameters);
      }
    }

    /**
     * adsensehost.urlchannels.insert
     * @desc Add a new URL channel to the host AdSense account.
     * @alias adsensehost.urlchannels.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.adClientId Ad client to which the new URL channel will be added.
     * @param {().UrlChannel} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Urlchannels$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UrlChannel>;
    insert(
      params: Params$Resource$Urlchannels$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$UrlChannel>,
      callback: BodyResponseCallback<Schema$UrlChannel>
    ): void;
    insert(
      params: Params$Resource$Urlchannels$Insert,
      callback: BodyResponseCallback<Schema$UrlChannel>
    ): void;
    insert(callback: BodyResponseCallback<Schema$UrlChannel>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Urlchannels$Insert
        | BodyResponseCallback<Schema$UrlChannel>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$UrlChannel>,
      callback?: BodyResponseCallback<Schema$UrlChannel>
    ): void | GaxiosPromise<Schema$UrlChannel> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Urlchannels$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Urlchannels$Insert;
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
              rootUrl + '/adsensehost/v4.1/adclients/{adClientId}/urlchannels'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['adClientId'],
        pathParams: ['adClientId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UrlChannel>(parameters, callback);
      } else {
        return createAPIRequest<Schema$UrlChannel>(parameters);
      }
    }

    /**
     * adsensehost.urlchannels.list
     * @desc List all host URL channels in the host AdSense account.
     * @alias adsensehost.urlchannels.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.adClientId Ad client for which to list URL channels.
     * @param {integer=} params.maxResults The maximum number of URL channels to include in the response, used for paging.
     * @param {string=} params.pageToken A continuation token, used to page through URL channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Urlchannels$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UrlChannels>;
    list(
      params: Params$Resource$Urlchannels$List,
      options: MethodOptions | BodyResponseCallback<Schema$UrlChannels>,
      callback: BodyResponseCallback<Schema$UrlChannels>
    ): void;
    list(
      params: Params$Resource$Urlchannels$List,
      callback: BodyResponseCallback<Schema$UrlChannels>
    ): void;
    list(callback: BodyResponseCallback<Schema$UrlChannels>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Urlchannels$List
        | BodyResponseCallback<Schema$UrlChannels>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$UrlChannels>,
      callback?: BodyResponseCallback<Schema$UrlChannels>
    ): void | GaxiosPromise<Schema$UrlChannels> {
      let params = (paramsOrCallback || {}) as Params$Resource$Urlchannels$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Urlchannels$List;
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
              rootUrl + '/adsensehost/v4.1/adclients/{adClientId}/urlchannels'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['adClientId'],
        pathParams: ['adClientId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UrlChannels>(parameters, callback);
      } else {
        return createAPIRequest<Schema$UrlChannels>(parameters);
      }
    }
  }

  export interface Params$Resource$Urlchannels$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Ad client from which to delete the URL channel.
     */
    adClientId?: string;
    /**
     * URL channel to delete.
     */
    urlChannelId?: string;
  }
  export interface Params$Resource$Urlchannels$Insert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Ad client to which the new URL channel will be added.
     */
    adClientId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UrlChannel;
  }
  export interface Params$Resource$Urlchannels$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Ad client for which to list URL channels.
     */
    adClientId?: string;
    /**
     * The maximum number of URL channels to include in the response, used for paging.
     */
    maxResults?: number;
    /**
     * A continuation token, used to page through URL channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     */
    pageToken?: string;
  }
}
