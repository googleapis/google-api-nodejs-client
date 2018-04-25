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

import {GoogleApis} from '../..';
import {BodyResponseCallback, GlobalOptions, MethodOptions} from '../../lib/api';
import {createAPIRequest} from '../../lib/apirequest';

// TODO: We will eventually get the `any` in here cleared out, but in the
// interim we want to turn on no-implicit-any.

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace adexchangeseller_v2_0 {
  /**
   * Ad Exchange Seller API
   *
   * Accesses the inventory of Ad Exchange seller users and generates reports.
   *
   * @example
   * const google = require('googleapis');
   * const adexchangeseller = google.adexchangeseller('v2.0');
   *
   * @namespace adexchangeseller
   * @type {Function}
   * @version v2.0
   * @variation v2.0
   * @param {object=} options Options for Adexchangeseller
   */
  export class Adexchangeseller {
    _options: GlobalOptions;
    google: GoogleApis;
    root = this;

    accounts: Resource$Accounts;

    constructor(options: GlobalOptions, google: GoogleApis) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.accounts = new Resource$Accounts(this);
    }

    getRoot() {
      return this.root;
    }
  }

  export interface Schema$Account {
    /**
     * Unique identifier of this account.
     */
    id: string;
    /**
     * Kind of resource this is, in this case adexchangeseller#account.
     */
    kind: string;
    /**
     * Name of this account.
     */
    name: string;
  }
  export interface Schema$Accounts {
    /**
     * ETag of this response for caching purposes.
     */
    etag: string;
    /**
     * The accounts returned in this list response.
     */
    items: Schema$Account[];
    /**
     * Kind of list this is, in this case adexchangeseller#accounts.
     */
    kind: string;
    /**
     * Continuation token used to page through accounts. To retrieve the next
     * page of results, set the next request&#39;s &quot;pageToken&quot; value
     * to this.
     */
    nextPageToken: string;
  }
  export interface Schema$AdClient {
    /**
     * Whether this ad client is opted in to ARC.
     */
    arcOptIn: boolean;
    /**
     * Unique identifier of this ad client.
     */
    id: string;
    /**
     * Kind of resource this is, in this case adexchangeseller#adClient.
     */
    kind: string;
    /**
     * This ad client&#39;s product code, which corresponds to the PRODUCT_CODE
     * report dimension.
     */
    productCode: string;
    /**
     * Whether this ad client supports being reported on.
     */
    supportsReporting: boolean;
  }
  export interface Schema$AdClients {
    /**
     * ETag of this response for caching purposes.
     */
    etag: string;
    /**
     * The ad clients returned in this list response.
     */
    items: Schema$AdClient[];
    /**
     * Kind of list this is, in this case adexchangeseller#adClients.
     */
    kind: string;
    /**
     * Continuation token used to page through ad clients. To retrieve the next
     * page of results, set the next request&#39;s &quot;pageToken&quot; value
     * to this.
     */
    nextPageToken: string;
  }
  export interface Schema$Alert {
    /**
     * Unique identifier of this alert. This should be considered an opaque
     * identifier; it is not safe to rely on it being in any particular format.
     */
    id: string;
    /**
     * Kind of resource this is, in this case adexchangeseller#alert.
     */
    kind: string;
    /**
     * The localized alert message.
     */
    message: string;
    /**
     * Severity of this alert. Possible values: INFO, WARNING, SEVERE.
     */
    severity: string;
    /**
     * Type of this alert. Possible values: SELF_HOLD, MIGRATED_TO_BILLING3,
     * ADDRESS_PIN_VERIFICATION, PHONE_PIN_VERIFICATION, CORPORATE_ENTITY,
     * GRAYLISTED_PUBLISHER, API_HOLD.
     */
    type: string;
  }
  export interface Schema$Alerts {
    /**
     * The alerts returned in this list response.
     */
    items: Schema$Alert[];
    /**
     * Kind of list this is, in this case adexchangeseller#alerts.
     */
    kind: string;
  }
  export interface Schema$CustomChannel {
    /**
     * Code of this custom channel, not necessarily unique across ad clients.
     */
    code: string;
    /**
     * Unique identifier of this custom channel. This should be considered an
     * opaque identifier; it is not safe to rely on it being in any particular
     * format.
     */
    id: string;
    /**
     * Kind of resource this is, in this case adexchangeseller#customChannel.
     */
    kind: string;
    /**
     * Name of this custom channel.
     */
    name: string;
    /**
     * The targeting information of this custom channel, if activated.
     */
    targetingInfo: any;
  }
  export interface Schema$CustomChannels {
    /**
     * ETag of this response for caching purposes.
     */
    etag: string;
    /**
     * The custom channels returned in this list response.
     */
    items: Schema$CustomChannel[];
    /**
     * Kind of list this is, in this case adexchangeseller#customChannels.
     */
    kind: string;
    /**
     * Continuation token used to page through custom channels. To retrieve the
     * next page of results, set the next request&#39;s &quot;pageToken&quot;
     * value to this.
     */
    nextPageToken: string;
  }
  export interface Schema$Metadata {
    items: Schema$ReportingMetadataEntry[];
    /**
     * Kind of list this is, in this case adexchangeseller#metadata.
     */
    kind: string;
  }
  export interface Schema$PreferredDeal {
    /**
     * The name of the advertiser this deal is for.
     */
    advertiserName: string;
    /**
     * The name of the buyer network this deal is for.
     */
    buyerNetworkName: string;
    /**
     * The currency code that applies to the fixed_cpm value. If not set then
     * assumed to be USD.
     */
    currencyCode: string;
    /**
     * Time when this deal stops being active in seconds since the epoch (GMT).
     * If not set then this deal is valid until manually disabled by the
     * publisher.
     */
    endTime: string;
    /**
     * The fixed price for this preferred deal. In cpm micros of currency
     * according to currencyCode. If set, then this preferred deal is eligible
     * for the fixed price tier of buying (highest priority, pay exactly the
     * configured fixed price).
     */
    fixedCpm: string;
    /**
     * Unique identifier of this preferred deal.
     */
    id: string;
    /**
     * Kind of resource this is, in this case adexchangeseller#preferredDeal.
     */
    kind: string;
    /**
     * Time when this deal becomes active in seconds since the epoch (GMT). If
     * not set then this deal is active immediately upon creation.
     */
    startTime: string;
  }
  export interface Schema$PreferredDeals {
    /**
     * The preferred deals returned in this list response.
     */
    items: Schema$PreferredDeal[];
    /**
     * Kind of list this is, in this case adexchangeseller#preferredDeals.
     */
    kind: string;
  }
  export interface Schema$Report {
    /**
     * The averages of the report. This is the same length as any other row in
     * the report; cells corresponding to dimension columns are empty.
     */
    averages: string[];
    /**
     * The header information of the columns requested in the report. This is a
     * list of headers; one for each dimension in the request, followed by one
     * for each metric in the request.
     */
    headers: any[];
    /**
     * Kind this is, in this case adexchangeseller#report.
     */
    kind: string;
    /**
     * The output rows of the report. Each row is a list of cells; one for each
     * dimension in the request, followed by one for each metric in the request.
     * The dimension cells contain strings, and the metric cells contain
     * numbers.
     */
    rows: string[][];
    /**
     * The total number of rows matched by the report request. Fewer rows may be
     * returned in the response due to being limited by the row count requested
     * or the report row limit.
     */
    totalMatchedRows: string;
    /**
     * The totals of the report. This is the same length as any other row in the
     * report; cells corresponding to dimension columns are empty.
     */
    totals: string[];
    /**
     * Any warnings associated with generation of the report.
     */
    warnings: string[];
  }
  export interface Schema$ReportingMetadataEntry {
    /**
     * For metrics this is a list of dimension IDs which the metric is
     * compatible with, for dimensions it is a list of compatibility groups the
     * dimension belongs to.
     */
    compatibleDimensions: string[];
    /**
     * The names of the metrics the dimension or metric this reporting metadata
     * entry describes is compatible with.
     */
    compatibleMetrics: string[];
    /**
     * Unique identifier of this reporting metadata entry, corresponding to the
     * name of the appropriate dimension or metric.
     */
    id: string;
    /**
     * Kind of resource this is, in this case
     * adexchangeseller#reportingMetadataEntry.
     */
    kind: string;
    /**
     * The names of the dimensions which the dimension or metric this reporting
     * metadata entry describes requires to also be present in order for the
     * report to be valid. Omitting these will not cause an error or warning,
     * but may result in data which cannot be correctly interpreted.
     */
    requiredDimensions: string[];
    /**
     * The names of the metrics which the dimension or metric this reporting
     * metadata entry describes requires to also be present in order for the
     * report to be valid. Omitting these will not cause an error or warning,
     * but may result in data which cannot be correctly interpreted.
     */
    requiredMetrics: string[];
    /**
     * The codes of the projects supported by the dimension or metric this
     * reporting metadata entry describes.
     */
    supportedProducts: string[];
  }
  export interface Schema$SavedReport {
    /**
     * Unique identifier of this saved report.
     */
    id: string;
    /**
     * Kind of resource this is, in this case adexchangeseller#savedReport.
     */
    kind: string;
    /**
     * This saved report&#39;s name.
     */
    name: string;
  }
  export interface Schema$SavedReports {
    /**
     * ETag of this response for caching purposes.
     */
    etag: string;
    /**
     * The saved reports returned in this list response.
     */
    items: Schema$SavedReport[];
    /**
     * Kind of list this is, in this case adexchangeseller#savedReports.
     */
    kind: string;
    /**
     * Continuation token used to page through saved reports. To retrieve the
     * next page of results, set the next request&#39;s &quot;pageToken&quot;
     * value to this.
     */
    nextPageToken: string;
  }
  export interface Schema$UrlChannel {
    /**
     * Unique identifier of this URL channel. This should be considered an
     * opaque identifier; it is not safe to rely on it being in any particular
     * format.
     */
    id: string;
    /**
     * Kind of resource this is, in this case adexchangeseller#urlChannel.
     */
    kind: string;
    /**
     * URL Pattern of this URL channel. Does not include &quot;http://&quot; or
     * &quot;https://&quot;. Example: www.example.com/home
     */
    urlPattern: string;
  }
  export interface Schema$UrlChannels {
    /**
     * ETag of this response for caching purposes.
     */
    etag: string;
    /**
     * The URL channels returned in this list response.
     */
    items: Schema$UrlChannel[];
    /**
     * Kind of list this is, in this case adexchangeseller#urlChannels.
     */
    kind: string;
    /**
     * Continuation token used to page through URL channels. To retrieve the
     * next page of results, set the next request&#39;s &quot;pageToken&quot;
     * value to this.
     */
    nextPageToken: string;
  }

  export class Resource$Accounts {
    root: Adexchangeseller;
    adclients: Resource$Accounts$Adclients;
    alerts: Resource$Accounts$Alerts;
    customchannels: Resource$Accounts$Customchannels;
    metadata: Resource$Accounts$Metadata;
    preferreddeals: Resource$Accounts$Preferreddeals;
    reports: Resource$Accounts$Reports;
    urlchannels: Resource$Accounts$Urlchannels;
    constructor(root: Adexchangeseller) {
      this.root = root;
      this.getRoot.bind(this);
      this.adclients = new Resource$Accounts$Adclients(root);
      this.alerts = new Resource$Accounts$Alerts(root);
      this.customchannels = new Resource$Accounts$Customchannels(root);
      this.metadata = new Resource$Accounts$Metadata(root);
      this.preferreddeals = new Resource$Accounts$Preferreddeals(root);
      this.reports = new Resource$Accounts$Reports(root);
      this.urlchannels = new Resource$Accounts$Urlchannels(root);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangeseller.accounts.get
     * @desc Get information about the selected Ad Exchange account.
     * @alias adexchangeseller.accounts.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Account to get information about. Tip: 'myaccount' is a valid ID.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Account>;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Account>,
        callback?: BodyResponseCallback<Schema$Account>): void;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Account>,
        callback?: BodyResponseCallback<Schema$Account>):
        void|AxiosPromise<Schema$Account> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/adexchangeseller/v2.0/accounts/{accountId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['accountId'],
        pathParams: ['accountId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Account>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Account>(parameters);
      }
    }


    /**
     * adexchangeseller.accounts.list
     * @desc List all accounts available to this Ad Exchange account.
     * @alias adexchangeseller.accounts.list
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {integer=} params.maxResults The maximum number of accounts to include in the response, used for paging.
     * @param {string=} params.pageToken A continuation token, used to page through accounts. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: any, options?: MethodOptions): AxiosPromise<Schema$Accounts>;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Accounts>,
        callback?: BodyResponseCallback<Schema$Accounts>): void;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Accounts>,
        callback?: BodyResponseCallback<Schema$Accounts>):
        void|AxiosPromise<Schema$Accounts> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/adexchangeseller/v2.0/accounts')
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
        createAPIRequest<Schema$Accounts>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Accounts>(parameters);
      }
    }
  }
  export class Resource$Accounts$Adclients {
    root: Adexchangeseller;
    constructor(root: Adexchangeseller) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangeseller.accounts.adclients.list
     * @desc List all ad clients in this Ad Exchange account.
     * @alias adexchangeseller.accounts.adclients.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Account to which the ad client belongs.
     * @param {integer=} params.maxResults The maximum number of ad clients to include in the response, used for paging.
     * @param {string=} params.pageToken A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: any, options?: MethodOptions): AxiosPromise<Schema$AdClients>;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$AdClients>,
        callback?: BodyResponseCallback<Schema$AdClients>): void;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$AdClients>,
        callback?: BodyResponseCallback<Schema$AdClients>):
        void|AxiosPromise<Schema$AdClients> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/adexchangeseller/v2.0/accounts/{accountId}/adclients')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['accountId'],
        pathParams: ['accountId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$AdClients>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AdClients>(parameters);
      }
    }
  }

  export class Resource$Accounts$Alerts {
    root: Adexchangeseller;
    constructor(root: Adexchangeseller) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangeseller.accounts.alerts.list
     * @desc List the alerts for this Ad Exchange account.
     * @alias adexchangeseller.accounts.alerts.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Account owning the alerts.
     * @param {string=} params.locale The locale to use for translating alert messages. The account locale will be used if this is not supplied. The AdSense default (English) will be used if the supplied locale is invalid or unsupported.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: any, options?: MethodOptions): AxiosPromise<Schema$Alerts>;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Alerts>,
        callback?: BodyResponseCallback<Schema$Alerts>): void;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Alerts>,
        callback?: BodyResponseCallback<Schema$Alerts>):
        void|AxiosPromise<Schema$Alerts> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/adexchangeseller/v2.0/accounts/{accountId}/alerts')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['accountId'],
        pathParams: ['accountId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Alerts>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Alerts>(parameters);
      }
    }
  }

  export class Resource$Accounts$Customchannels {
    root: Adexchangeseller;
    constructor(root: Adexchangeseller) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangeseller.accounts.customchannels.get
     * @desc Get the specified custom channel from the specified ad client.
     * @alias adexchangeseller.accounts.customchannels.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Account to which the ad client belongs.
     * @param {string} params.adClientId Ad client which contains the custom channel.
     * @param {string} params.customChannelId Custom channel to retrieve.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: any,
        options?: MethodOptions): AxiosPromise<Schema$CustomChannel>;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$CustomChannel>,
        callback?: BodyResponseCallback<Schema$CustomChannel>): void;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$CustomChannel>,
        callback?: BodyResponseCallback<Schema$CustomChannel>):
        void|AxiosPromise<Schema$CustomChannel> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/adexchangeseller/v2.0/accounts/{accountId}/adclients/{adClientId}/customchannels/{customChannelId}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['accountId', 'adClientId', 'customChannelId'],
        pathParams: ['accountId', 'adClientId', 'customChannelId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$CustomChannel>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CustomChannel>(parameters);
      }
    }


    /**
     * adexchangeseller.accounts.customchannels.list
     * @desc List all custom channels in the specified ad client for this Ad
     * Exchange account.
     * @alias adexchangeseller.accounts.customchannels.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Account to which the ad client belongs.
     * @param {string} params.adClientId Ad client for which to list custom channels.
     * @param {integer=} params.maxResults The maximum number of custom channels to include in the response, used for paging.
     * @param {string=} params.pageToken A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$CustomChannels>;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$CustomChannels>,
        callback?: BodyResponseCallback<Schema$CustomChannels>): void;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$CustomChannels>,
        callback?: BodyResponseCallback<Schema$CustomChannels>):
        void|AxiosPromise<Schema$CustomChannels> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/adexchangeseller/v2.0/accounts/{accountId}/adclients/{adClientId}/customchannels')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['accountId', 'adClientId'],
        pathParams: ['accountId', 'adClientId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$CustomChannels>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CustomChannels>(parameters);
      }
    }
  }

  export class Resource$Accounts$Metadata {
    root: Adexchangeseller;
    dimensions: Resource$Accounts$Metadata$Dimensions;
    metrics: Resource$Accounts$Metadata$Metrics;
    constructor(root: Adexchangeseller) {
      this.root = root;
      this.getRoot.bind(this);
      this.dimensions = new Resource$Accounts$Metadata$Dimensions(root);
      this.metrics = new Resource$Accounts$Metadata$Metrics(root);
    }

    getRoot() {
      return this.root;
    }
  }
  export class Resource$Accounts$Metadata$Dimensions {
    root: Adexchangeseller;
    constructor(root: Adexchangeseller) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangeseller.accounts.metadata.dimensions.list
     * @desc List the metadata for the dimensions available to this AdExchange
     * account.
     * @alias adexchangeseller.accounts.metadata.dimensions.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Account with visibility to the dimensions.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: any, options?: MethodOptions): AxiosPromise<Schema$Metadata>;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Metadata>,
        callback?: BodyResponseCallback<Schema$Metadata>): void;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Metadata>,
        callback?: BodyResponseCallback<Schema$Metadata>):
        void|AxiosPromise<Schema$Metadata> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/adexchangeseller/v2.0/accounts/{accountId}/metadata/dimensions')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['accountId'],
        pathParams: ['accountId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Metadata>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Metadata>(parameters);
      }
    }
  }

  export class Resource$Accounts$Metadata$Metrics {
    root: Adexchangeseller;
    constructor(root: Adexchangeseller) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangeseller.accounts.metadata.metrics.list
     * @desc List the metadata for the metrics available to this AdExchange
     * account.
     * @alias adexchangeseller.accounts.metadata.metrics.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Account with visibility to the metrics.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: any, options?: MethodOptions): AxiosPromise<Schema$Metadata>;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Metadata>,
        callback?: BodyResponseCallback<Schema$Metadata>): void;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Metadata>,
        callback?: BodyResponseCallback<Schema$Metadata>):
        void|AxiosPromise<Schema$Metadata> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/adexchangeseller/v2.0/accounts/{accountId}/metadata/metrics')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['accountId'],
        pathParams: ['accountId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Metadata>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Metadata>(parameters);
      }
    }
  }


  export class Resource$Accounts$Preferreddeals {
    root: Adexchangeseller;
    constructor(root: Adexchangeseller) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangeseller.accounts.preferreddeals.get
     * @desc Get information about the selected Ad Exchange Preferred Deal.
     * @alias adexchangeseller.accounts.preferreddeals.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Account owning the deal.
     * @param {string} params.dealId Preferred deal to get information about.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: any,
        options?: MethodOptions): AxiosPromise<Schema$PreferredDeal>;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$PreferredDeal>,
        callback?: BodyResponseCallback<Schema$PreferredDeal>): void;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$PreferredDeal>,
        callback?: BodyResponseCallback<Schema$PreferredDeal>):
        void|AxiosPromise<Schema$PreferredDeal> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/adexchangeseller/v2.0/accounts/{accountId}/preferreddeals/{dealId}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['accountId', 'dealId'],
        pathParams: ['accountId', 'dealId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$PreferredDeal>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PreferredDeal>(parameters);
      }
    }


    /**
     * adexchangeseller.accounts.preferreddeals.list
     * @desc List the preferred deals for this Ad Exchange account.
     * @alias adexchangeseller.accounts.preferreddeals.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Account owning the deals.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$PreferredDeals>;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$PreferredDeals>,
        callback?: BodyResponseCallback<Schema$PreferredDeals>): void;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$PreferredDeals>,
        callback?: BodyResponseCallback<Schema$PreferredDeals>):
        void|AxiosPromise<Schema$PreferredDeals> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/adexchangeseller/v2.0/accounts/{accountId}/preferreddeals')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['accountId'],
        pathParams: ['accountId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$PreferredDeals>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PreferredDeals>(parameters);
      }
    }
  }

  export class Resource$Accounts$Reports {
    root: Adexchangeseller;
    saved: Resource$Accounts$Reports$Saved;
    constructor(root: Adexchangeseller) {
      this.root = root;
      this.getRoot.bind(this);
      this.saved = new Resource$Accounts$Reports$Saved(root);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangeseller.accounts.reports.generate
     * @desc Generate an Ad Exchange report based on the report request sent in
     * the query parameters. Returns the result as JSON; to retrieve output in
     * CSV format specify "alt=csv" as a query parameter.
     * @alias adexchangeseller.accounts.reports.generate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Account which owns the generated report.
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
    generate(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$Report>;
    generate(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Report>,
        callback?: BodyResponseCallback<Schema$Report>): void;
    generate(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Report>,
        callback?: BodyResponseCallback<Schema$Report>):
        void|AxiosPromise<Schema$Report> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/adexchangeseller/v2.0/accounts/{accountId}/reports')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['accountId', 'startDate', 'endDate'],
        pathParams: ['accountId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Report>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Report>(parameters);
      }
    }
  }
  export class Resource$Accounts$Reports$Saved {
    root: Adexchangeseller;
    constructor(root: Adexchangeseller) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangeseller.accounts.reports.saved.generate
     * @desc Generate an Ad Exchange report based on the saved report ID sent in
     * the query parameters.
     * @alias adexchangeseller.accounts.reports.saved.generate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Account owning the saved report.
     * @param {string=} params.locale Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
     * @param {integer=} params.maxResults The maximum number of rows of report data to return.
     * @param {string} params.savedReportId The saved report to retrieve.
     * @param {integer=} params.startIndex Index of the first row of report data to return.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    generate(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$Report>;
    generate(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Report>,
        callback?: BodyResponseCallback<Schema$Report>): void;
    generate(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Report>,
        callback?: BodyResponseCallback<Schema$Report>):
        void|AxiosPromise<Schema$Report> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/adexchangeseller/v2.0/accounts/{accountId}/reports/{savedReportId}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['accountId', 'savedReportId'],
        pathParams: ['accountId', 'savedReportId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Report>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Report>(parameters);
      }
    }


    /**
     * adexchangeseller.accounts.reports.saved.list
     * @desc List all saved reports in this Ad Exchange account.
     * @alias adexchangeseller.accounts.reports.saved.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Account owning the saved reports.
     * @param {integer=} params.maxResults The maximum number of saved reports to include in the response, used for paging.
     * @param {string=} params.pageToken A continuation token, used to page through saved reports. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$SavedReports>;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$SavedReports>,
        callback?: BodyResponseCallback<Schema$SavedReports>): void;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$SavedReports>,
        callback?: BodyResponseCallback<Schema$SavedReports>):
        void|AxiosPromise<Schema$SavedReports> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/adexchangeseller/v2.0/accounts/{accountId}/reports/saved')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['accountId'],
        pathParams: ['accountId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$SavedReports>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SavedReports>(parameters);
      }
    }
  }


  export class Resource$Accounts$Urlchannels {
    root: Adexchangeseller;
    constructor(root: Adexchangeseller) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangeseller.accounts.urlchannels.list
     * @desc List all URL channels in the specified ad client for this Ad
     * Exchange account.
     * @alias adexchangeseller.accounts.urlchannels.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Account to which the ad client belongs.
     * @param {string} params.adClientId Ad client for which to list URL channels.
     * @param {integer=} params.maxResults The maximum number of URL channels to include in the response, used for paging.
     * @param {string=} params.pageToken A continuation token, used to page through URL channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$UrlChannels>;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$UrlChannels>,
        callback?: BodyResponseCallback<Schema$UrlChannels>): void;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$UrlChannels>,
        callback?: BodyResponseCallback<Schema$UrlChannels>):
        void|AxiosPromise<Schema$UrlChannels> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/adexchangeseller/v2.0/accounts/{accountId}/adclients/{adClientId}/urlchannels')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['accountId', 'adClientId'],
        pathParams: ['accountId', 'adClientId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$UrlChannels>(parameters, callback);
      } else {
        return createAPIRequest<Schema$UrlChannels>(parameters);
      }
    }
  }
}
