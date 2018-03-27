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

import {GoogleApis} from '../..';
import {BodyResponseCallback, GlobalOptions, MethodOptions} from '../../lib/api';
import {createAPIRequest} from '../../lib/apirequest';

// TODO: We will eventually get the `any` in here cleared out, but in the
// interim we want to turn on no-implicit-any.

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format

/**
 * Ad Exchange Seller API
 *
 * Accesses the inventory of Ad Exchange seller users and generates reports.
 *
 * @example
 * const google = require('googleapis');
 * const adexchangeseller = google.adexchangeseller('v1.1');
 *
 * @namespace adexchangeseller
 * @type {Function}
 * @version v1.1
 * @variation v1.1
 * @param {object=} options Options for Adexchangeseller
 */
export class Adexchangeseller {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  accounts: Resource$Accounts;
  adclients: Resource$Adclients;
  adunits: Resource$Adunits;
  alerts: Resource$Alerts;
  customchannels: Resource$Customchannels;
  metadata: Resource$Metadata;
  preferreddeals: Resource$Preferreddeals;
  reports: Resource$Reports;
  urlchannels: Resource$Urlchannels;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;

    this.accounts = new Resource$Accounts(this);
    this.adclients = new Resource$Adclients(this);
    this.adunits = new Resource$Adunits(this);
    this.alerts = new Resource$Alerts(this);
    this.customchannels = new Resource$Customchannels(this);
    this.metadata = new Resource$Metadata(this);
    this.preferreddeals = new Resource$Preferreddeals(this);
    this.reports = new Resource$Reports(this);
    this.urlchannels = new Resource$Urlchannels(this);
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
   * page of results, set the next request&#39;s &quot;pageToken&quot; value to
   * this.
   */
  nextPageToken: string;
}
export interface Schema$AdUnit {
  /**
   * Identity code of this ad unit, not necessarily unique across ad clients.
   */
  code: string;
  /**
   * Unique identifier of this ad unit. This should be considered an opaque
   * identifier; it is not safe to rely on it being in any particular format.
   */
  id: string;
  /**
   * Kind of resource this is, in this case adexchangeseller#adUnit.
   */
  kind: string;
  /**
   * Name of this ad unit.
   */
  name: string;
  /**
   * Status of this ad unit. Possible values are: NEW: Indicates that the ad
   * unit was created within the last seven days and does not yet have any
   * activity associated with it.  ACTIVE: Indicates that there has been
   * activity on this ad unit in the last seven days.  INACTIVE: Indicates that
   * there has been no activity on this ad unit in the last seven days.
   */
  status: string;
}
export interface Schema$AdUnits {
  /**
   * ETag of this response for caching purposes.
   */
  etag: string;
  /**
   * The ad units returned in this list response.
   */
  items: Schema$AdUnit[];
  /**
   * Kind of list this is, in this case adexchangeseller#adUnits.
   */
  kind: string;
  /**
   * Continuation token used to page through ad units. To retrieve the next page
   * of results, set the next request&#39;s &quot;pageToken&quot; value to this.
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
   * Time when this deal stops being active in seconds since the epoch (GMT). If
   * not set then this deal is valid until manually disabled by the publisher.
   */
  endTime: string;
  /**
   * The fixed price for this preferred deal. In cpm micros of currency
   * according to currencyCode. If set, then this preferred deal is eligible for
   * the fixed price tier of buying (highest priority, pay exactly the
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
   * Time when this deal becomes active in seconds since the epoch (GMT). If not
   * set then this deal is active immediately upon creation.
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
   * The averages of the report. This is the same length as any other row in the
   * report; cells corresponding to dimension columns are empty.
   */
  averages: string[];
  /**
   * The header information of the columns requested in the report. This is a
   * list of headers; one for each dimension in the request, followed by one for
   * each metric in the request.
   */
  headers: any[];
  /**
   * Kind this is, in this case adexchangeseller#report.
   */
  kind: string;
  /**
   * The output rows of the report. Each row is a list of cells; one for each
   * dimension in the request, followed by one for each metric in the request.
   * The dimension cells contain strings, and the metric cells contain numbers.
   */
  rows: string[][];
  /**
   * The total number of rows matched by the report request. Fewer rows may be
   * returned in the response due to being limited by the row count requested or
   * the report row limit.
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
   * For metrics this is a list of dimension IDs which the metric is compatible
   * with, for dimensions it is a list of compatibility groups the dimension
   * belongs to.
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
   * report to be valid. Omitting these will not cause an error or warning, but
   * may result in data which cannot be correctly interpreted.
   */
  requiredDimensions: string[];
  /**
   * The names of the metrics which the dimension or metric this reporting
   * metadata entry describes requires to also be present in order for the
   * report to be valid. Omitting these will not cause an error or warning, but
   * may result in data which cannot be correctly interpreted.
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
   * Continuation token used to page through saved reports. To retrieve the next
   * page of results, set the next request&#39;s &quot;pageToken&quot; value to
   * this.
   */
  nextPageToken: string;
}
export interface Schema$UrlChannel {
  /**
   * Unique identifier of this URL channel. This should be considered an opaque
   * identifier; it is not safe to rely on it being in any particular format.
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
   * Continuation token used to page through URL channels. To retrieve the next
   * page of results, set the next request&#39;s &quot;pageToken&quot; value to
   * this.
   */
  nextPageToken: string;
}

export class Resource$Accounts {
  root: Adexchangeseller;
  constructor(root: Adexchangeseller) {
    this.root = root;
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
  get =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Account>,
       callback?: BodyResponseCallback<Schema$Account>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/adexchangeseller/v1.1/accounts/{accountId}')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['accountId'],
          pathParams: ['accountId'],
          context: this.root
        };
        createAPIRequest<Schema$Account>(parameters, callback!);
      };
}

export class Resource$Adclients {
  root: Adexchangeseller;
  constructor(root: Adexchangeseller) {
    this.root = root;
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
  list =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$AdClients>,
       callback?: BodyResponseCallback<Schema$AdClients>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/adexchangeseller/v1.1/adclients')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: [],
          pathParams: [],
          context: this.root
        };
        createAPIRequest<Schema$AdClients>(parameters, callback!);
      };
}

export class Resource$Adunits {
  root: Adexchangeseller;
  customchannels: Resource$Adunits$Customchannels;
  constructor(root: Adexchangeseller) {
    this.root = root;
    this.customchannels = new Resource$Adunits$Customchannels(root);
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
  get =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$AdUnit>,
       callback?: BodyResponseCallback<Schema$AdUnit>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/adexchangeseller/v1.1/adclients/{adClientId}/adunits/{adUnitId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['adClientId', 'adUnitId'],
          pathParams: ['adClientId', 'adUnitId'],
          context: this.root
        };
        createAPIRequest<Schema$AdUnit>(parameters, callback!);
      };


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
  list =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$AdUnits>,
       callback?: BodyResponseCallback<Schema$AdUnits>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl +
                      '/adexchangeseller/v1.1/adclients/{adClientId}/adunits')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['adClientId'],
          pathParams: ['adClientId'],
          context: this.root
        };
        createAPIRequest<Schema$AdUnits>(parameters, callback!);
      };
}
export class Resource$Adunits$Customchannels {
  root: Adexchangeseller;
  constructor(root: Adexchangeseller) {
    this.root = root;
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
  list =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$CustomChannels>,
       callback?: BodyResponseCallback<Schema$CustomChannels>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/adexchangeseller/v1.1/adclients/{adClientId}/adunits/{adUnitId}/customchannels')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['adClientId', 'adUnitId'],
          pathParams: ['adClientId', 'adUnitId'],
          context: this.root
        };
        createAPIRequest<Schema$CustomChannels>(parameters, callback!);
      };
}


export class Resource$Alerts {
  root: Adexchangeseller;
  constructor(root: Adexchangeseller) {
    this.root = root;
  }

  /**
   * adexchangeseller.alerts.list
   * @desc List the alerts for this Ad Exchange account.
   * @alias adexchangeseller.alerts.list
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {string=} params.locale The locale to use for translating alert messages. The account locale will be used if this is not supplied. The AdSense default (English) will be used if the supplied locale is invalid or unsupported.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Alerts>,
       callback?: BodyResponseCallback<Schema$Alerts>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/adexchangeseller/v1.1/alerts')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: [],
          pathParams: [],
          context: this.root
        };
        createAPIRequest<Schema$Alerts>(parameters, callback!);
      };
}

export class Resource$Customchannels {
  root: Adexchangeseller;
  adunits: Resource$Customchannels$Adunits;
  constructor(root: Adexchangeseller) {
    this.root = root;
    this.adunits = new Resource$Customchannels$Adunits(root);
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
  get =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$CustomChannel>,
       callback?: BodyResponseCallback<Schema$CustomChannel>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/adexchangeseller/v1.1/adclients/{adClientId}/customchannels/{customChannelId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['adClientId', 'customChannelId'],
          pathParams: ['adClientId', 'customChannelId'],
          context: this.root
        };
        createAPIRequest<Schema$CustomChannel>(parameters, callback!);
      };


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
  list =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$CustomChannels>,
       callback?: BodyResponseCallback<Schema$CustomChannels>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/adexchangeseller/v1.1/adclients/{adClientId}/customchannels')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['adClientId'],
          pathParams: ['adClientId'],
          context: this.root
        };
        createAPIRequest<Schema$CustomChannels>(parameters, callback!);
      };
}
export class Resource$Customchannels$Adunits {
  root: Adexchangeseller;
  constructor(root: Adexchangeseller) {
    this.root = root;
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
  list =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$AdUnits>,
       callback?: BodyResponseCallback<Schema$AdUnits>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/adexchangeseller/v1.1/adclients/{adClientId}/customchannels/{customChannelId}/adunits')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['adClientId', 'customChannelId'],
          pathParams: ['adClientId', 'customChannelId'],
          context: this.root
        };
        createAPIRequest<Schema$AdUnits>(parameters, callback!);
      };
}


export class Resource$Metadata {
  root: Adexchangeseller;
  dimensions: Resource$Metadata$Dimensions;
  metrics: Resource$Metadata$Metrics;
  constructor(root: Adexchangeseller) {
    this.root = root;
    this.dimensions = new Resource$Metadata$Dimensions(root);
    this.metrics = new Resource$Metadata$Metrics(root);
  }
}
export class Resource$Metadata$Dimensions {
  root: Adexchangeseller;
  constructor(root: Adexchangeseller) {
    this.root = root;
  }

  /**
   * adexchangeseller.metadata.dimensions.list
   * @desc List the metadata for the dimensions available to this AdExchange
   * account.
   * @alias adexchangeseller.metadata.dimensions.list
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$Metadata>,
       callback?: BodyResponseCallback<Schema$Metadata>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/adexchangeseller/v1.1/metadata/dimensions')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: [],
          pathParams: [],
          context: this.root
        };
        createAPIRequest<Schema$Metadata>(parameters, callback!);
      };
}

export class Resource$Metadata$Metrics {
  root: Adexchangeseller;
  constructor(root: Adexchangeseller) {
    this.root = root;
  }

  /**
   * adexchangeseller.metadata.metrics.list
   * @desc List the metadata for the metrics available to this AdExchange
   * account.
   * @alias adexchangeseller.metadata.metrics.list
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$Metadata>,
       callback?: BodyResponseCallback<Schema$Metadata>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/adexchangeseller/v1.1/metadata/metrics')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: [],
          pathParams: [],
          context: this.root
        };
        createAPIRequest<Schema$Metadata>(parameters, callback!);
      };
}


export class Resource$Preferreddeals {
  root: Adexchangeseller;
  constructor(root: Adexchangeseller) {
    this.root = root;
  }

  /**
   * adexchangeseller.preferreddeals.get
   * @desc Get information about the selected Ad Exchange Preferred Deal.
   * @alias adexchangeseller.preferreddeals.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.dealId Preferred deal to get information about.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$PreferredDeal>,
       callback?: BodyResponseCallback<Schema$PreferredDeal>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/adexchangeseller/v1.1/preferreddeals/{dealId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['dealId'],
          pathParams: ['dealId'],
          context: this.root
        };
        createAPIRequest<Schema$PreferredDeal>(parameters, callback!);
      };


  /**
   * adexchangeseller.preferreddeals.list
   * @desc List the preferred deals for this Ad Exchange account.
   * @alias adexchangeseller.preferreddeals.list
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$PreferredDeals>,
       callback?: BodyResponseCallback<Schema$PreferredDeals>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/adexchangeseller/v1.1/preferreddeals')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: [],
          pathParams: [],
          context: this.root
        };
        createAPIRequest<Schema$PreferredDeals>(parameters, callback!);
      };
}

export class Resource$Reports {
  root: Adexchangeseller;
  saved: Resource$Reports$Saved;
  constructor(root: Adexchangeseller) {
    this.root = root;
    this.saved = new Resource$Reports$Saved(root);
  }

  /**
   * adexchangeseller.reports.generate
   * @desc Generate an Ad Exchange report based on the report request sent in
   * the query parameters. Returns the result as JSON; to retrieve output in CSV
   * format specify "alt=csv" as a query parameter.
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
  generate =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Report>,
       callback?: BodyResponseCallback<Schema$Report>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/adexchangeseller/v1.1/reports')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['startDate', 'endDate'],
          pathParams: [],
          context: this.root
        };
        createAPIRequest<Schema$Report>(parameters, callback!);
      };
}
export class Resource$Reports$Saved {
  root: Adexchangeseller;
  constructor(root: Adexchangeseller) {
    this.root = root;
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
  generate =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Report>,
       callback?: BodyResponseCallback<Schema$Report>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/adexchangeseller/v1.1/reports/{savedReportId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['savedReportId'],
          pathParams: ['savedReportId'],
          context: this.root
        };
        createAPIRequest<Schema$Report>(parameters, callback!);
      };


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
  list =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$SavedReports>,
       callback?: BodyResponseCallback<Schema$SavedReports>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/adexchangeseller/v1.1/reports/saved')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: [],
          pathParams: [],
          context: this.root
        };
        createAPIRequest<Schema$SavedReports>(parameters, callback!);
      };
}


export class Resource$Urlchannels {
  root: Adexchangeseller;
  constructor(root: Adexchangeseller) {
    this.root = root;
  }

  /**
   * adexchangeseller.urlchannels.list
   * @desc List all URL channels in the specified ad client for this Ad Exchange
   * account.
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
  list =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$UrlChannels>,
       callback?: BodyResponseCallback<Schema$UrlChannels>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/adexchangeseller/v1.1/adclients/{adClientId}/urlchannels')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['adClientId'],
          pathParams: ['adClientId'],
          context: this.root
        };
        createAPIRequest<Schema$UrlChannels>(parameters, callback!);
      };
}
