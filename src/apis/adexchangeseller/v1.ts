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
import {BodyResponseCallback, createAPIRequest, GlobalOptions, MethodOptions} from '../../shared/src';


// TODO: We will eventually get the `any` in here cleared out, but in the
// interim we want to turn on no-implicit-any.

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace adexchangeseller_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  /**
   * Ad Exchange Seller API
   *
   * Accesses the inventory of Ad Exchange seller users and generates reports.
   *
   * @example
   * const google = require('googleapis');
   * const adexchangeseller = google.adexchangeseller('v1');
   *
   * @namespace adexchangeseller
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Adexchangeseller
   */
  export class Adexchangeseller {
    _options: GlobalOptions;
    google: GoogleApis;
    root = this;

    adclients: Resource$Adclients;
    adunits: Resource$Adunits;
    customchannels: Resource$Customchannels;
    reports: Resource$Reports;
    urlchannels: Resource$Urlchannels;

    constructor(options: GlobalOptions, google: GoogleApis) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.adclients = new Resource$Adclients(this);
      this.adunits = new Resource$Adunits(this);
      this.customchannels = new Resource$Customchannels(this);
      this.reports = new Resource$Reports(this);
      this.urlchannels = new Resource$Urlchannels(this);
    }

    getRoot() {
      return this.root;
    }
  }

  export interface Schema$AdClient {
    /**
     * Whether this ad client is opted in to ARC.
     */
    arcOptIn?: boolean;
    /**
     * Unique identifier of this ad client.
     */
    id?: string;
    /**
     * Kind of resource this is, in this case adexchangeseller#adClient.
     */
    kind?: string;
    /**
     * This ad client&#39;s product code, which corresponds to the PRODUCT_CODE
     * report dimension.
     */
    productCode?: string;
    /**
     * Whether this ad client supports being reported on.
     */
    supportsReporting?: boolean;
  }
  export interface Schema$AdClients {
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string;
    /**
     * The ad clients returned in this list response.
     */
    items?: Schema$AdClient[];
    /**
     * Kind of list this is, in this case adexchangeseller#adClients.
     */
    kind?: string;
    /**
     * Continuation token used to page through ad clients. To retrieve the next
     * page of results, set the next request&#39;s &quot;pageToken&quot; value
     * to this.
     */
    nextPageToken?: string;
  }
  export interface Schema$AdUnit {
    /**
     * Identity code of this ad unit, not necessarily unique across ad clients.
     */
    code?: string;
    /**
     * Unique identifier of this ad unit. This should be considered an opaque
     * identifier; it is not safe to rely on it being in any particular format.
     */
    id?: string;
    /**
     * Kind of resource this is, in this case adexchangeseller#adUnit.
     */
    kind?: string;
    /**
     * Name of this ad unit.
     */
    name?: string;
    /**
     * Status of this ad unit. Possible values are: NEW: Indicates that the ad
     * unit was created within the last seven days and does not yet have any
     * activity associated with it.  ACTIVE: Indicates that there has been
     * activity on this ad unit in the last seven days.  INACTIVE: Indicates
     * that there has been no activity on this ad unit in the last seven days.
     */
    status?: string;
  }
  export interface Schema$AdUnits {
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string;
    /**
     * The ad units returned in this list response.
     */
    items?: Schema$AdUnit[];
    /**
     * Kind of list this is, in this case adexchangeseller#adUnits.
     */
    kind?: string;
    /**
     * Continuation token used to page through ad units. To retrieve the next
     * page of results, set the next request&#39;s &quot;pageToken&quot; value
     * to this.
     */
    nextPageToken?: string;
  }
  export interface Schema$CustomChannel {
    /**
     * Code of this custom channel, not necessarily unique across ad clients.
     */
    code?: string;
    /**
     * Unique identifier of this custom channel. This should be considered an
     * opaque identifier; it is not safe to rely on it being in any particular
     * format.
     */
    id?: string;
    /**
     * Kind of resource this is, in this case adexchangeseller#customChannel.
     */
    kind?: string;
    /**
     * Name of this custom channel.
     */
    name?: string;
    /**
     * The targeting information of this custom channel, if activated.
     */
    targetingInfo?: any;
  }
  export interface Schema$CustomChannels {
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string;
    /**
     * The custom channels returned in this list response.
     */
    items?: Schema$CustomChannel[];
    /**
     * Kind of list this is, in this case adexchangeseller#customChannels.
     */
    kind?: string;
    /**
     * Continuation token used to page through custom channels. To retrieve the
     * next page of results, set the next request&#39;s &quot;pageToken&quot;
     * value to this.
     */
    nextPageToken?: string;
  }
  export interface Schema$Report {
    /**
     * The averages of the report. This is the same length as any other row in
     * the report; cells corresponding to dimension columns are empty.
     */
    averages?: string[];
    /**
     * The header information of the columns requested in the report. This is a
     * list of headers; one for each dimension in the request, followed by one
     * for each metric in the request.
     */
    headers?: any[];
    /**
     * Kind this is, in this case adexchangeseller#report.
     */
    kind?: string;
    /**
     * The output rows of the report. Each row is a list of cells; one for each
     * dimension in the request, followed by one for each metric in the request.
     * The dimension cells contain strings, and the metric cells contain
     * numbers.
     */
    rows?: string[][];
    /**
     * The total number of rows matched by the report request. Fewer rows may be
     * returned in the response due to being limited by the row count requested
     * or the report row limit.
     */
    totalMatchedRows?: string;
    /**
     * The totals of the report. This is the same length as any other row in the
     * report; cells corresponding to dimension columns are empty.
     */
    totals?: string[];
    /**
     * Any warnings associated with generation of the report.
     */
    warnings?: string[];
  }
  export interface Schema$SavedReport {
    /**
     * Unique identifier of this saved report.
     */
    id?: string;
    /**
     * Kind of resource this is, in this case adexchangeseller#savedReport.
     */
    kind?: string;
    /**
     * This saved report&#39;s name.
     */
    name?: string;
  }
  export interface Schema$SavedReports {
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string;
    /**
     * The saved reports returned in this list response.
     */
    items?: Schema$SavedReport[];
    /**
     * Kind of list this is, in this case adexchangeseller#savedReports.
     */
    kind?: string;
    /**
     * Continuation token used to page through saved reports. To retrieve the
     * next page of results, set the next request&#39;s &quot;pageToken&quot;
     * value to this.
     */
    nextPageToken?: string;
  }
  export interface Schema$UrlChannel {
    /**
     * Unique identifier of this URL channel. This should be considered an
     * opaque identifier; it is not safe to rely on it being in any particular
     * format.
     */
    id?: string;
    /**
     * Kind of resource this is, in this case adexchangeseller#urlChannel.
     */
    kind?: string;
    /**
     * URL Pattern of this URL channel. Does not include &quot;http://&quot; or
     * &quot;https://&quot;. Example: www.example.com/home
     */
    urlPattern?: string;
  }
  export interface Schema$UrlChannels {
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string;
    /**
     * The URL channels returned in this list response.
     */
    items?: Schema$UrlChannel[];
    /**
     * Kind of list this is, in this case adexchangeseller#urlChannels.
     */
    kind?: string;
    /**
     * Continuation token used to page through URL channels. To retrieve the
     * next page of results, set the next request&#39;s &quot;pageToken&quot;
     * value to this.
     */
    nextPageToken?: string;
  }


  export class Resource$Adclients {
    root: Adexchangeseller;
    constructor(root: Adexchangeseller) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangeseller.adclients.list
     * @desc List all ad clients in this Ad Exchange account.
     * @alias adexchangeseller.adclients.list
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {integer=} params.maxResults The maximum number of ad clients to include in the response, used for paging.
     * @param {string=} params.pageToken A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Adclients$List, options?: MethodOptions):
        AxiosPromise<Schema$AdClients>;
    list(
        params: Params$Resource$Adclients$List,
        options: MethodOptions|BodyResponseCallback<Schema$AdClients>,
        callback: BodyResponseCallback<Schema$AdClients>): void;
    list(
        params: Params$Resource$Adclients$List,
        callback: BodyResponseCallback<Schema$AdClients>): void;
    list(callback: BodyResponseCallback<Schema$AdClients>): void;
    list(
        paramsOrCallback?: Params$Resource$Adclients$List|
        BodyResponseCallback<Schema$AdClients>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$AdClients>,
        callback?: BodyResponseCallback<Schema$AdClients>):
        void|AxiosPromise<Schema$AdClients> {
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
              url: (rootUrl + '/adexchangeseller/v1/adclients')
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
        createAPIRequest<Schema$AdClients>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AdClients>(parameters);
      }
    }
  }

  export interface Params$Resource$Adclients$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The maximum number of ad clients to include in the response, used for
     * paging.
     */
    maxResults?: number;
    /**
     * A continuation token, used to page through ad clients. To retrieve the
     * next page, set this parameter to the value of "nextPageToken" from the
     * previous response.
     */
    pageToken?: string;
  }


  export class Resource$Adunits {
    root: Adexchangeseller;
    customchannels: Resource$Adunits$Customchannels;
    constructor(root: Adexchangeseller) {
      this.root = root;
      this.getRoot.bind(this);
      this.customchannels = new Resource$Adunits$Customchannels(root);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangeseller.adunits.get
     * @desc Gets the specified ad unit in the specified ad client.
     * @alias adexchangeseller.adunits.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.adClientId Ad client for which to get the ad unit.
     * @param {string} params.adUnitId Ad unit to retrieve.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Adunits$Get,
        options?: MethodOptions): AxiosPromise<Schema$AdUnit>;
    get(params: Params$Resource$Adunits$Get,
        options: MethodOptions|BodyResponseCallback<Schema$AdUnit>,
        callback: BodyResponseCallback<Schema$AdUnit>): void;
    get(params: Params$Resource$Adunits$Get,
        callback: BodyResponseCallback<Schema$AdUnit>): void;
    get(callback: BodyResponseCallback<Schema$AdUnit>): void;
    get(paramsOrCallback?: Params$Resource$Adunits$Get|
        BodyResponseCallback<Schema$AdUnit>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$AdUnit>,
        callback?: BodyResponseCallback<Schema$AdUnit>):
        void|AxiosPromise<Schema$AdUnit> {
      let params = (paramsOrCallback || {}) as Params$Resource$Adunits$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Adunits$Get;
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
              url:
                  (rootUrl +
                   '/adexchangeseller/v1/adclients/{adClientId}/adunits/{adUnitId}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['adClientId', 'adUnitId'],
        pathParams: ['adClientId', 'adUnitId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$AdUnit>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AdUnit>(parameters);
      }
    }


    /**
     * adexchangeseller.adunits.list
     * @desc List all ad units in the specified ad client for this Ad Exchange
     * account.
     * @alias adexchangeseller.adunits.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.adClientId Ad client for which to list ad units.
     * @param {boolean=} params.includeInactive Whether to include inactive ad units. Default: true.
     * @param {integer=} params.maxResults The maximum number of ad units to include in the response, used for paging.
     * @param {string=} params.pageToken A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Adunits$List, options?: MethodOptions):
        AxiosPromise<Schema$AdUnits>;
    list(
        params: Params$Resource$Adunits$List,
        options: MethodOptions|BodyResponseCallback<Schema$AdUnits>,
        callback: BodyResponseCallback<Schema$AdUnits>): void;
    list(
        params: Params$Resource$Adunits$List,
        callback: BodyResponseCallback<Schema$AdUnits>): void;
    list(callback: BodyResponseCallback<Schema$AdUnits>): void;
    list(
        paramsOrCallback?: Params$Resource$Adunits$List|
        BodyResponseCallback<Schema$AdUnits>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$AdUnits>,
        callback?: BodyResponseCallback<Schema$AdUnits>):
        void|AxiosPromise<Schema$AdUnits> {
      let params = (paramsOrCallback || {}) as Params$Resource$Adunits$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Adunits$List;
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
              url: (rootUrl +
                    '/adexchangeseller/v1/adclients/{adClientId}/adunits')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['adClientId'],
        pathParams: ['adClientId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$AdUnits>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AdUnits>(parameters);
      }
    }
  }

  export interface Params$Resource$Adunits$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Ad client for which to get the ad unit.
     */
    adClientId?: string;
    /**
     * Ad unit to retrieve.
     */
    adUnitId?: string;
  }
  export interface Params$Resource$Adunits$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Ad client for which to list ad units.
     */
    adClientId?: string;
    /**
     * Whether to include inactive ad units. Default: true.
     */
    includeInactive?: boolean;
    /**
     * The maximum number of ad units to include in the response, used for
     * paging.
     */
    maxResults?: number;
    /**
     * A continuation token, used to page through ad units. To retrieve the next
     * page, set this parameter to the value of "nextPageToken" from the
     * previous response.
     */
    pageToken?: string;
  }

  export class Resource$Adunits$Customchannels {
    root: Adexchangeseller;
    constructor(root: Adexchangeseller) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangeseller.adunits.customchannels.list
     * @desc List all custom channels which the specified ad unit belongs to.
     * @alias adexchangeseller.adunits.customchannels.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.adClientId Ad client which contains the ad unit.
     * @param {string} params.adUnitId Ad unit for which to list custom channels.
     * @param {integer=} params.maxResults The maximum number of custom channels to include in the response, used for paging.
     * @param {string=} params.pageToken A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Adunits$Customchannels$List,
        options?: MethodOptions): AxiosPromise<Schema$CustomChannels>;
    list(
        params: Params$Resource$Adunits$Customchannels$List,
        options: MethodOptions|BodyResponseCallback<Schema$CustomChannels>,
        callback: BodyResponseCallback<Schema$CustomChannels>): void;
    list(
        params: Params$Resource$Adunits$Customchannels$List,
        callback: BodyResponseCallback<Schema$CustomChannels>): void;
    list(callback: BodyResponseCallback<Schema$CustomChannels>): void;
    list(
        paramsOrCallback?: Params$Resource$Adunits$Customchannels$List|
        BodyResponseCallback<Schema$CustomChannels>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$CustomChannels>,
        callback?: BodyResponseCallback<Schema$CustomChannels>):
        void|AxiosPromise<Schema$CustomChannels> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Adunits$Customchannels$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Adunits$Customchannels$List;
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
              url:
                  (rootUrl +
                   '/adexchangeseller/v1/adclients/{adClientId}/adunits/{adUnitId}/customchannels')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['adClientId', 'adUnitId'],
        pathParams: ['adClientId', 'adUnitId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$CustomChannels>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CustomChannels>(parameters);
      }
    }
  }

  export interface Params$Resource$Adunits$Customchannels$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Ad client which contains the ad unit.
     */
    adClientId?: string;
    /**
     * Ad unit for which to list custom channels.
     */
    adUnitId?: string;
    /**
     * The maximum number of custom channels to include in the response, used
     * for paging.
     */
    maxResults?: number;
    /**
     * A continuation token, used to page through custom channels. To retrieve
     * the next page, set this parameter to the value of "nextPageToken" from
     * the previous response.
     */
    pageToken?: string;
  }



  export class Resource$Customchannels {
    root: Adexchangeseller;
    adunits: Resource$Customchannels$Adunits;
    constructor(root: Adexchangeseller) {
      this.root = root;
      this.getRoot.bind(this);
      this.adunits = new Resource$Customchannels$Adunits(root);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangeseller.customchannels.get
     * @desc Get the specified custom channel from the specified ad client.
     * @alias adexchangeseller.customchannels.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.adClientId Ad client which contains the custom channel.
     * @param {string} params.customChannelId Custom channel to retrieve.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Customchannels$Get,
        options?: MethodOptions): AxiosPromise<Schema$CustomChannel>;
    get(params: Params$Resource$Customchannels$Get,
        options: MethodOptions|BodyResponseCallback<Schema$CustomChannel>,
        callback: BodyResponseCallback<Schema$CustomChannel>): void;
    get(params: Params$Resource$Customchannels$Get,
        callback: BodyResponseCallback<Schema$CustomChannel>): void;
    get(callback: BodyResponseCallback<Schema$CustomChannel>): void;
    get(paramsOrCallback?: Params$Resource$Customchannels$Get|
        BodyResponseCallback<Schema$CustomChannel>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$CustomChannel>,
        callback?: BodyResponseCallback<Schema$CustomChannel>):
        void|AxiosPromise<Schema$CustomChannel> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Customchannels$Get;
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
              url:
                  (rootUrl +
                   '/adexchangeseller/v1/adclients/{adClientId}/customchannels/{customChannelId}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['adClientId', 'customChannelId'],
        pathParams: ['adClientId', 'customChannelId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$CustomChannel>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CustomChannel>(parameters);
      }
    }


    /**
     * adexchangeseller.customchannels.list
     * @desc List all custom channels in the specified ad client for this Ad
     * Exchange account.
     * @alias adexchangeseller.customchannels.list
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
    list(params?: Params$Resource$Customchannels$List, options?: MethodOptions):
        AxiosPromise<Schema$CustomChannels>;
    list(
        params: Params$Resource$Customchannels$List,
        options: MethodOptions|BodyResponseCallback<Schema$CustomChannels>,
        callback: BodyResponseCallback<Schema$CustomChannels>): void;
    list(
        params: Params$Resource$Customchannels$List,
        callback: BodyResponseCallback<Schema$CustomChannels>): void;
    list(callback: BodyResponseCallback<Schema$CustomChannels>): void;
    list(
        paramsOrCallback?: Params$Resource$Customchannels$List|
        BodyResponseCallback<Schema$CustomChannels>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$CustomChannels>,
        callback?: BodyResponseCallback<Schema$CustomChannels>):
        void|AxiosPromise<Schema$CustomChannels> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Customchannels$List;
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
              url:
                  (rootUrl +
                   '/adexchangeseller/v1/adclients/{adClientId}/customchannels')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['adClientId'],
        pathParams: ['adClientId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$CustomChannels>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CustomChannels>(parameters);
      }
    }
  }

  export interface Params$Resource$Customchannels$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Ad client which contains the custom channel.
     */
    adClientId?: string;
    /**
     * Custom channel to retrieve.
     */
    customChannelId?: string;
  }
  export interface Params$Resource$Customchannels$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Ad client for which to list custom channels.
     */
    adClientId?: string;
    /**
     * The maximum number of custom channels to include in the response, used
     * for paging.
     */
    maxResults?: number;
    /**
     * A continuation token, used to page through custom channels. To retrieve
     * the next page, set this parameter to the value of "nextPageToken" from
     * the previous response.
     */
    pageToken?: string;
  }

  export class Resource$Customchannels$Adunits {
    root: Adexchangeseller;
    constructor(root: Adexchangeseller) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangeseller.customchannels.adunits.list
     * @desc List all ad units in the specified custom channel.
     * @alias adexchangeseller.customchannels.adunits.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.adClientId Ad client which contains the custom channel.
     * @param {string} params.customChannelId Custom channel for which to list ad units.
     * @param {boolean=} params.includeInactive Whether to include inactive ad units. Default: true.
     * @param {integer=} params.maxResults The maximum number of ad units to include in the response, used for paging.
     * @param {string=} params.pageToken A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Customchannels$Adunits$List,
        options?: MethodOptions): AxiosPromise<Schema$AdUnits>;
    list(
        params: Params$Resource$Customchannels$Adunits$List,
        options: MethodOptions|BodyResponseCallback<Schema$AdUnits>,
        callback: BodyResponseCallback<Schema$AdUnits>): void;
    list(
        params: Params$Resource$Customchannels$Adunits$List,
        callback: BodyResponseCallback<Schema$AdUnits>): void;
    list(callback: BodyResponseCallback<Schema$AdUnits>): void;
    list(
        paramsOrCallback?: Params$Resource$Customchannels$Adunits$List|
        BodyResponseCallback<Schema$AdUnits>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$AdUnits>,
        callback?: BodyResponseCallback<Schema$AdUnits>):
        void|AxiosPromise<Schema$AdUnits> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Customchannels$Adunits$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customchannels$Adunits$List;
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
              url:
                  (rootUrl +
                   '/adexchangeseller/v1/adclients/{adClientId}/customchannels/{customChannelId}/adunits')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['adClientId', 'customChannelId'],
        pathParams: ['adClientId', 'customChannelId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$AdUnits>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AdUnits>(parameters);
      }
    }
  }

  export interface Params$Resource$Customchannels$Adunits$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Ad client which contains the custom channel.
     */
    adClientId?: string;
    /**
     * Custom channel for which to list ad units.
     */
    customChannelId?: string;
    /**
     * Whether to include inactive ad units. Default: true.
     */
    includeInactive?: boolean;
    /**
     * The maximum number of ad units to include in the response, used for
     * paging.
     */
    maxResults?: number;
    /**
     * A continuation token, used to page through ad units. To retrieve the next
     * page, set this parameter to the value of "nextPageToken" from the
     * previous response.
     */
    pageToken?: string;
  }



  export class Resource$Reports {
    root: Adexchangeseller;
    saved: Resource$Reports$Saved;
    constructor(root: Adexchangeseller) {
      this.root = root;
      this.getRoot.bind(this);
      this.saved = new Resource$Reports$Saved(root);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangeseller.reports.generate
     * @desc Generate an Ad Exchange report based on the report request sent in
     * the query parameters. Returns the result as JSON; to retrieve output in
     * CSV format specify "alt=csv" as a query parameter.
     * @alias adexchangeseller.reports.generate
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
        options?: MethodOptions): AxiosPromise<Schema$Report>;
    generate(
        params: Params$Resource$Reports$Generate,
        options: MethodOptions|BodyResponseCallback<Schema$Report>,
        callback: BodyResponseCallback<Schema$Report>): void;
    generate(
        params: Params$Resource$Reports$Generate,
        callback: BodyResponseCallback<Schema$Report>): void;
    generate(callback: BodyResponseCallback<Schema$Report>): void;
    generate(
        paramsOrCallback?: Params$Resource$Reports$Generate|
        BodyResponseCallback<Schema$Report>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Report>,
        callback?: BodyResponseCallback<Schema$Report>):
        void|AxiosPromise<Schema$Report> {
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
              url: (rootUrl + '/adexchangeseller/v1/reports')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['startDate', 'endDate'],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Report>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Report>(parameters);
      }
    }
  }

  export interface Params$Resource$Reports$Generate {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Dimensions to base the report on.
     */
    dimension?: string;
    /**
     * End of the date range to report on in "YYYY-MM-DD" format, inclusive.
     */
    endDate?: string;
    /**
     * Filters to be run on the report.
     */
    filter?: string;
    /**
     * Optional locale to use for translating report output to a local language.
     * Defaults to "en_US" if not specified.
     */
    locale?: string;
    /**
     * The maximum number of rows of report data to return.
     */
    maxResults?: number;
    /**
     * Numeric columns to include in the report.
     */
    metric?: string;
    /**
     * The name of a dimension or metric to sort the resulting report on,
     * optionally prefixed with "+" to sort ascending or "-" to sort descending.
     * If no prefix is specified, the column is sorted ascending.
     */
    sort?: string;
    /**
     * Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
     */
    startDate?: string;
    /**
     * Index of the first row of report data to return.
     */
    startIndex?: number;
  }

  export class Resource$Reports$Saved {
    root: Adexchangeseller;
    constructor(root: Adexchangeseller) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangeseller.reports.saved.generate
     * @desc Generate an Ad Exchange report based on the saved report ID sent in
     * the query parameters.
     * @alias adexchangeseller.reports.saved.generate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.locale Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
     * @param {integer=} params.maxResults The maximum number of rows of report data to return.
     * @param {string} params.savedReportId The saved report to retrieve.
     * @param {integer=} params.startIndex Index of the first row of report data to return.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    generate(
        params?: Params$Resource$Reports$Saved$Generate,
        options?: MethodOptions): AxiosPromise<Schema$Report>;
    generate(
        params: Params$Resource$Reports$Saved$Generate,
        options: MethodOptions|BodyResponseCallback<Schema$Report>,
        callback: BodyResponseCallback<Schema$Report>): void;
    generate(
        params: Params$Resource$Reports$Saved$Generate,
        callback: BodyResponseCallback<Schema$Report>): void;
    generate(callback: BodyResponseCallback<Schema$Report>): void;
    generate(
        paramsOrCallback?: Params$Resource$Reports$Saved$Generate|
        BodyResponseCallback<Schema$Report>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Report>,
        callback?: BodyResponseCallback<Schema$Report>):
        void|AxiosPromise<Schema$Report> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Reports$Saved$Generate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Reports$Saved$Generate;
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
              url: (rootUrl + '/adexchangeseller/v1/reports/{savedReportId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['savedReportId'],
        pathParams: ['savedReportId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Report>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Report>(parameters);
      }
    }


    /**
     * adexchangeseller.reports.saved.list
     * @desc List all saved reports in this Ad Exchange account.
     * @alias adexchangeseller.reports.saved.list
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {integer=} params.maxResults The maximum number of saved reports to include in the response, used for paging.
     * @param {string=} params.pageToken A continuation token, used to page through saved reports. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Reports$Saved$List, options?: MethodOptions):
        AxiosPromise<Schema$SavedReports>;
    list(
        params: Params$Resource$Reports$Saved$List,
        options: MethodOptions|BodyResponseCallback<Schema$SavedReports>,
        callback: BodyResponseCallback<Schema$SavedReports>): void;
    list(
        params: Params$Resource$Reports$Saved$List,
        callback: BodyResponseCallback<Schema$SavedReports>): void;
    list(callback: BodyResponseCallback<Schema$SavedReports>): void;
    list(
        paramsOrCallback?: Params$Resource$Reports$Saved$List|
        BodyResponseCallback<Schema$SavedReports>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$SavedReports>,
        callback?: BodyResponseCallback<Schema$SavedReports>):
        void|AxiosPromise<Schema$SavedReports> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Reports$Saved$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Reports$Saved$List;
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
              url: (rootUrl + '/adexchangeseller/v1/reports/saved')
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
        createAPIRequest<Schema$SavedReports>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SavedReports>(parameters);
      }
    }
  }

  export interface Params$Resource$Reports$Saved$Generate {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Optional locale to use for translating report output to a local language.
     * Defaults to "en_US" if not specified.
     */
    locale?: string;
    /**
     * The maximum number of rows of report data to return.
     */
    maxResults?: number;
    /**
     * The saved report to retrieve.
     */
    savedReportId?: string;
    /**
     * Index of the first row of report data to return.
     */
    startIndex?: number;
  }
  export interface Params$Resource$Reports$Saved$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The maximum number of saved reports to include in the response, used for
     * paging.
     */
    maxResults?: number;
    /**
     * A continuation token, used to page through saved reports. To retrieve the
     * next page, set this parameter to the value of "nextPageToken" from the
     * previous response.
     */
    pageToken?: string;
  }



  export class Resource$Urlchannels {
    root: Adexchangeseller;
    constructor(root: Adexchangeseller) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangeseller.urlchannels.list
     * @desc List all URL channels in the specified ad client for this Ad
     * Exchange account.
     * @alias adexchangeseller.urlchannels.list
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
    list(params?: Params$Resource$Urlchannels$List, options?: MethodOptions):
        AxiosPromise<Schema$UrlChannels>;
    list(
        params: Params$Resource$Urlchannels$List,
        options: MethodOptions|BodyResponseCallback<Schema$UrlChannels>,
        callback: BodyResponseCallback<Schema$UrlChannels>): void;
    list(
        params: Params$Resource$Urlchannels$List,
        callback: BodyResponseCallback<Schema$UrlChannels>): void;
    list(callback: BodyResponseCallback<Schema$UrlChannels>): void;
    list(
        paramsOrCallback?: Params$Resource$Urlchannels$List|
        BodyResponseCallback<Schema$UrlChannels>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$UrlChannels>,
        callback?: BodyResponseCallback<Schema$UrlChannels>):
        void|AxiosPromise<Schema$UrlChannels> {
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
              url: (rootUrl +
                    '/adexchangeseller/v1/adclients/{adClientId}/urlchannels')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['adClientId'],
        pathParams: ['adClientId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$UrlChannels>(parameters, callback);
      } else {
        return createAPIRequest<Schema$UrlChannels>(parameters);
      }
    }
  }

  export interface Params$Resource$Urlchannels$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Ad client for which to list URL channels.
     */
    adClientId?: string;
    /**
     * The maximum number of URL channels to include in the response, used for
     * paging.
     */
    maxResults?: number;
    /**
     * A continuation token, used to page through URL channels. To retrieve the
     * next page, set this parameter to the value of "nextPageToken" from the
     * previous response.
     */
    pageToken?: string;
  }
}
