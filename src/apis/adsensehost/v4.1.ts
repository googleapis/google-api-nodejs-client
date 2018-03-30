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

/**
 * AdSense Host API
 *
 * Generates performance reports, generates ad codes, and provides publisher
 * management capabilities for AdSense Hosts.
 *
 * @example
 * const google = require('googleapis');
 * const adsensehost = google.adsensehost('v4.1');
 *
 * @namespace adsensehost
 * @type {Function}
 * @version v4.1
 * @variation v4.1
 * @param {object=} options Options for Adsensehost
 */
export class Adsensehost {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  accounts: Resource$Accounts;
  adclients: Resource$Adclients;
  associationsessions: Resource$Associationsessions;
  customchannels: Resource$Customchannels;
  reports: Resource$Reports;
  urlchannels: Resource$Urlchannels;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;
    this.getRoot.bind(this);

    this.accounts = new Resource$Accounts(this);
    this.adclients = new Resource$Adclients(this);
    this.associationsessions = new Resource$Associationsessions(this);
    this.customchannels = new Resource$Customchannels(this);
    this.reports = new Resource$Reports(this);
    this.urlchannels = new Resource$Urlchannels(this);
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
   * Kind of resource this is, in this case adsensehost#account.
   */
  kind: string;
  /**
   * Name of this account.
   */
  name: string;
  /**
   * Approval status of this account. One of: PENDING, APPROVED, DISABLED.
   */
  status: string;
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
   * Kind of list this is, in this case adsensehost#accounts.
   */
  kind: string;
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
   * Kind of resource this is, in this case adsensehost#adClient.
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
   * Kind of list this is, in this case adsensehost#adClients.
   */
  kind: string;
  /**
   * Continuation token used to page through ad clients. To retrieve the next
   * page of results, set the next request&#39;s &quot;pageToken&quot; value to
   * this.
   */
  nextPageToken: string;
}
export interface Schema$AdCode {
  /**
   * The ad code snippet.
   */
  adCode: string;
  /**
   * Kind this is, in this case adsensehost#adCode.
   */
  kind: string;
}
export interface Schema$AdStyle {
  /**
   * The colors included in the style. These are represented as six hexadecimal
   * characters, similar to HTML color codes, but without the leading hash.
   */
  colors: any;
  /**
   * The style of the corners in the ad (deprecated: never populated, ignored).
   */
  corners: string;
  /**
   * The font which is included in the style.
   */
  font: any;
  /**
   * Kind this is, in this case adsensehost#adStyle.
   */
  kind: string;
}
export interface Schema$AdUnit {
  /**
   * Identity code of this ad unit, not necessarily unique across ad clients.
   */
  code: string;
  /**
   * Settings specific to content ads (AFC) and highend mobile content ads (AFMC
   * - deprecated).
   */
  contentAdsSettings: any;
  /**
   * Custom style information specific to this ad unit.
   */
  customStyle: Schema$AdStyle;
  /**
   * Unique identifier of this ad unit. This should be considered an opaque
   * identifier; it is not safe to rely on it being in any particular format.
   */
  id: string;
  /**
   * Kind of resource this is, in this case adsensehost#adUnit.
   */
  kind: string;
  /**
   * Settings specific to WAP mobile content ads (AFMC - deprecated).
   */
  mobileContentAdsSettings: any;
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
   * Kind of list this is, in this case adsensehost#adUnits.
   */
  kind: string;
  /**
   * Continuation token used to page through ad units. To retrieve the next page
   * of results, set the next request&#39;s &quot;pageToken&quot; value to this.
   */
  nextPageToken: string;
}
export interface Schema$AssociationSession {
  /**
   * Hosted account id of the associated publisher after association. Present if
   * status is ACCEPTED.
   */
  accountId: string;
  /**
   * Unique identifier of this association session.
   */
  id: string;
  /**
   * Kind of resource this is, in this case adsensehost#associationSession.
   */
  kind: string;
  /**
   * The products to associate with the user. Options: AFC, AFG, AFV, AFS
   * (deprecated), AFMC (deprecated)
   */
  productCodes: string[];
  /**
   * Redirect URL of this association session. Used to redirect users into the
   * AdSense association flow.
   */
  redirectUrl: string;
  /**
   * Status of the completed association, available once the association
   * callback token has been verified. One of ACCEPTED, REJECTED, or ERROR.
   */
  status: string;
  /**
   * The preferred locale of the user themselves when going through the AdSense
   * association flow.
   */
  userLocale: string;
  /**
   * The locale of the user&#39;s hosted website.
   */
  websiteLocale: string;
  /**
   * The URL of the user&#39;s hosted website.
   */
  websiteUrl: string;
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
   * Kind of resource this is, in this case adsensehost#customChannel.
   */
  kind: string;
  /**
   * Name of this custom channel.
   */
  name: string;
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
   * Kind of list this is, in this case adsensehost#customChannels.
   */
  kind: string;
  /**
   * Continuation token used to page through custom channels. To retrieve the
   * next page of results, set the next request&#39;s &quot;pageToken&quot;
   * value to this.
   */
  nextPageToken: string;
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
   * Kind this is, in this case adsensehost#report.
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
export interface Schema$UrlChannel {
  /**
   * Unique identifier of this URL channel. This should be considered an opaque
   * identifier; it is not safe to rely on it being in any particular format.
   */
  id: string;
  /**
   * Kind of resource this is, in this case adsensehost#urlChannel.
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
   * Kind of list this is, in this case adsensehost#urlChannels.
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
  root: Adsensehost;
  adclients: Resource$Accounts$Adclients;
  adunits: Resource$Accounts$Adunits;
  reports: Resource$Accounts$Reports;
  constructor(root: Adsensehost) {
    this.root = root;
    this.getRoot.bind(this);
    this.adclients = new Resource$Accounts$Adclients(root);
    this.adunits = new Resource$Accounts$Adunits(root);
    this.reports = new Resource$Accounts$Reports(root);
  }

  getRoot() {
    return this.root;
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
            url: (rootUrl + '/adsensehost/v4.1/accounts/{accountId}')
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
   * adsensehost.accounts.list
   * @desc List hosted accounts associated with this AdSense account by ad
   * client id.
   * @alias adsensehost.accounts.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.filterAdClientId Ad clients to list accounts for.
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
            url: (rootUrl + '/adsensehost/v4.1/accounts')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['filterAdClientId'],
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
  root: Adsensehost;
  constructor(root: Adsensehost) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * adsensehost.accounts.adclients.get
   * @desc Get information about one of the ad clients in the specified
   * publisher's AdSense account.
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
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$AdClient>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$AdClient>,
      callback?: BodyResponseCallback<Schema$AdClient>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$AdClient>,
      callback?: BodyResponseCallback<Schema$AdClient>):
      void|AxiosPromise<Schema$AdClient> {
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
                 '/adsensehost/v4.1/accounts/{accountId}/adclients/{adClientId}')
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
            url: (rootUrl + '/adsensehost/v4.1/accounts/{accountId}/adclients')
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

export class Resource$Accounts$Adunits {
  root: Adsensehost;
  constructor(root: Adsensehost) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * adsensehost.accounts.adunits.delete
   * @desc Delete the specified ad unit from the specified publisher AdSense
   * account.
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
  delete(params?: any, options?: MethodOptions): AxiosPromise<Schema$AdUnit>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$AdUnit>,
      callback?: BodyResponseCallback<Schema$AdUnit>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$AdUnit>,
      callback?: BodyResponseCallback<Schema$AdUnit>):
      void|AxiosPromise<Schema$AdUnit> {
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
                 '/adsensehost/v4.1/accounts/{accountId}/adclients/{adClientId}/adunits/{adUnitId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['accountId', 'adClientId', 'adUnitId'],
      pathParams: ['accountId', 'adClientId', 'adUnitId'],
      context: this.getRoot()
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
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$AdUnit>;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$AdUnit>,
      callback?: BodyResponseCallback<Schema$AdUnit>): void;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$AdUnit>,
      callback?: BodyResponseCallback<Schema$AdUnit>):
      void|AxiosPromise<Schema$AdUnit> {
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
                 '/adsensehost/v4.1/accounts/{accountId}/adclients/{adClientId}/adunits/{adUnitId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['accountId', 'adClientId', 'adUnitId'],
      pathParams: ['accountId', 'adClientId', 'adUnitId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$AdUnit>(parameters, callback);
    } else {
      return createAPIRequest<Schema$AdUnit>(parameters);
    }
  }


  /**
   * adsensehost.accounts.adunits.getAdCode
   * @desc Get ad code for the specified ad unit, attaching the specified host
   * custom channels.
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
  getAdCode(params?: any, options?: MethodOptions): AxiosPromise<Schema$AdCode>;
  getAdCode(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$AdCode>,
      callback?: BodyResponseCallback<Schema$AdCode>): void;
  getAdCode(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$AdCode>,
      callback?: BodyResponseCallback<Schema$AdCode>):
      void|AxiosPromise<Schema$AdCode> {
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
                 '/adsensehost/v4.1/accounts/{accountId}/adclients/{adClientId}/adunits/{adUnitId}/adcode')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['accountId', 'adClientId', 'adUnitId'],
      pathParams: ['accountId', 'adClientId', 'adUnitId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$AdCode>(parameters, callback);
    } else {
      return createAPIRequest<Schema$AdCode>(parameters);
    }
  }


  /**
   * adsensehost.accounts.adunits.insert
   * @desc Insert the supplied ad unit into the specified publisher AdSense
   * account.
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
  insert(params?: any, options?: MethodOptions): AxiosPromise<Schema$AdUnit>;
  insert(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$AdUnit>,
      callback?: BodyResponseCallback<Schema$AdUnit>): void;
  insert(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$AdUnit>,
      callback?: BodyResponseCallback<Schema$AdUnit>):
      void|AxiosPromise<Schema$AdUnit> {
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
                 '/adsensehost/v4.1/accounts/{accountId}/adclients/{adClientId}/adunits')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['accountId', 'adClientId'],
      pathParams: ['accountId', 'adClientId'],
      context: this.getRoot()
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
  list(params?: any, options?: MethodOptions): AxiosPromise<Schema$AdUnits>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$AdUnits>,
      callback?: BodyResponseCallback<Schema$AdUnits>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$AdUnits>,
      callback?: BodyResponseCallback<Schema$AdUnits>):
      void|AxiosPromise<Schema$AdUnits> {
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
                 '/adsensehost/v4.1/accounts/{accountId}/adclients/{adClientId}/adunits')
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
      createAPIRequest<Schema$AdUnits>(parameters, callback);
    } else {
      return createAPIRequest<Schema$AdUnits>(parameters);
    }
  }


  /**
   * adsensehost.accounts.adunits.patch
   * @desc Update the supplied ad unit in the specified publisher AdSense
   * account. This method supports patch semantics.
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
  patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$AdUnit>;
  patch(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$AdUnit>,
      callback?: BodyResponseCallback<Schema$AdUnit>): void;
  patch(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$AdUnit>,
      callback?: BodyResponseCallback<Schema$AdUnit>):
      void|AxiosPromise<Schema$AdUnit> {
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
                 '/adsensehost/v4.1/accounts/{accountId}/adclients/{adClientId}/adunits')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['accountId', 'adClientId', 'adUnitId'],
      pathParams: ['accountId', 'adClientId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$AdUnit>(parameters, callback);
    } else {
      return createAPIRequest<Schema$AdUnit>(parameters);
    }
  }


  /**
   * adsensehost.accounts.adunits.update
   * @desc Update the supplied ad unit in the specified publisher AdSense
   * account.
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
  update(params?: any, options?: MethodOptions): AxiosPromise<Schema$AdUnit>;
  update(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$AdUnit>,
      callback?: BodyResponseCallback<Schema$AdUnit>): void;
  update(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$AdUnit>,
      callback?: BodyResponseCallback<Schema$AdUnit>):
      void|AxiosPromise<Schema$AdUnit> {
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
                 '/adsensehost/v4.1/accounts/{accountId}/adclients/{adClientId}/adunits')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['accountId', 'adClientId'],
      pathParams: ['accountId', 'adClientId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$AdUnit>(parameters, callback);
    } else {
      return createAPIRequest<Schema$AdUnit>(parameters);
    }
  }
}

export class Resource$Accounts$Reports {
  root: Adsensehost;
  constructor(root: Adsensehost) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * adsensehost.accounts.reports.generate
   * @desc Generate an AdSense report based on the report request sent in the
   * query parameters. Returns the result as JSON; to retrieve output in CSV
   * format specify "alt=csv" as a query parameter.
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
  generate(params?: any, options?: MethodOptions): AxiosPromise<Schema$Report>;
  generate(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Report>,
      callback?: BodyResponseCallback<Schema$Report>): void;
  generate(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Report>,
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
            url: (rootUrl + '/adsensehost/v4.1/accounts/{accountId}/reports')
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


export class Resource$Adclients {
  root: Adsensehost;
  constructor(root: Adsensehost) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * adsensehost.adclients.get
   * @desc Get information about one of the ad clients in the Host AdSense
   * account.
   * @alias adsensehost.adclients.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.adClientId Ad client to get.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$AdClient>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$AdClient>,
      callback?: BodyResponseCallback<Schema$AdClient>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$AdClient>,
      callback?: BodyResponseCallback<Schema$AdClient>):
      void|AxiosPromise<Schema$AdClient> {
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
            url: (rootUrl + '/adsensehost/v4.1/adclients/{adClientId}')
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
            url: (rootUrl + '/adsensehost/v4.1/adclients')
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

export class Resource$Associationsessions {
  root: Adsensehost;
  constructor(root: Adsensehost) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * adsensehost.associationsessions.start
   * @desc Create an association session for initiating an association with an
   * AdSense user.
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
  start(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$AssociationSession>;
  start(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$AssociationSession>,
      callback?: BodyResponseCallback<Schema$AssociationSession>): void;
  start(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$AssociationSession>,
      callback?: BodyResponseCallback<Schema$AssociationSession>):
      void|AxiosPromise<Schema$AssociationSession> {
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
            url: (rootUrl + '/adsensehost/v4.1/associationsessions/start')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['productCode', 'websiteUrl'],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$AssociationSession>(parameters, callback);
    } else {
      return createAPIRequest<Schema$AssociationSession>(parameters);
    }
  }


  /**
   * adsensehost.associationsessions.verify
   * @desc Verify an association session after the association callback returns
   * from AdSense signup.
   * @alias adsensehost.associationsessions.verify
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.token The token returned to the association callback URL.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  verify(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$AssociationSession>;
  verify(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$AssociationSession>,
      callback?: BodyResponseCallback<Schema$AssociationSession>): void;
  verify(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$AssociationSession>,
      callback?: BodyResponseCallback<Schema$AssociationSession>):
      void|AxiosPromise<Schema$AssociationSession> {
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
            url: (rootUrl + '/adsensehost/v4.1/associationsessions/verify')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['token'],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$AssociationSession>(parameters, callback);
    } else {
      return createAPIRequest<Schema$AssociationSession>(parameters);
    }
  }
}

export class Resource$Customchannels {
  root: Adsensehost;
  constructor(root: Adsensehost) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
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
  delete(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$CustomChannel>;
  delete(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CustomChannel>,
      callback?: BodyResponseCallback<Schema$CustomChannel>): void;
  delete(
      params?: any,
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
                 '/adsensehost/v4.1/adclients/{adClientId}/customchannels/{customChannelId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
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
                 '/adsensehost/v4.1/adclients/{adClientId}/customchannels/{customChannelId}')
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
  insert(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$CustomChannel>;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CustomChannel>,
      callback?: BodyResponseCallback<Schema$CustomChannel>): void;
  insert(
      params?: any,
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
            url: (rootUrl +
                  '/adsensehost/v4.1/adclients/{adClientId}/customchannels')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['adClientId'],
      pathParams: ['adClientId'],
      context: this.getRoot()
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
            url: (rootUrl +
                  '/adsensehost/v4.1/adclients/{adClientId}/customchannels')
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


  /**
   * adsensehost.customchannels.patch
   * @desc Update a custom channel in the host AdSense account. This method
   * supports patch semantics.
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
  patch(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$CustomChannel>;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CustomChannel>,
      callback?: BodyResponseCallback<Schema$CustomChannel>): void;
  patch(
      params?: any,
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
            url: (rootUrl +
                  '/adsensehost/v4.1/adclients/{adClientId}/customchannels')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['adClientId', 'customChannelId'],
      pathParams: ['adClientId'],
      context: this.getRoot()
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
  update(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$CustomChannel>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CustomChannel>,
      callback?: BodyResponseCallback<Schema$CustomChannel>): void;
  update(
      params?: any,
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
            url: (rootUrl +
                  '/adsensehost/v4.1/adclients/{adClientId}/customchannels')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['adClientId'],
      pathParams: ['adClientId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$CustomChannel>(parameters, callback);
    } else {
      return createAPIRequest<Schema$CustomChannel>(parameters);
    }
  }
}

export class Resource$Reports {
  root: Adsensehost;
  constructor(root: Adsensehost) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * adsensehost.reports.generate
   * @desc Generate an AdSense report based on the report request sent in the
   * query parameters. Returns the result as JSON; to retrieve output in CSV
   * format specify "alt=csv" as a query parameter.
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
  generate(params?: any, options?: MethodOptions): AxiosPromise<Schema$Report>;
  generate(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Report>,
      callback?: BodyResponseCallback<Schema$Report>): void;
  generate(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Report>,
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
            url: (rootUrl + '/adsensehost/v4.1/reports')
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

export class Resource$Urlchannels {
  root: Adsensehost;
  constructor(root: Adsensehost) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
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
  delete(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$UrlChannel>;
  delete(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$UrlChannel>,
      callback?: BodyResponseCallback<Schema$UrlChannel>): void;
  delete(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$UrlChannel>,
      callback?: BodyResponseCallback<Schema$UrlChannel>):
      void|AxiosPromise<Schema$UrlChannel> {
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
                 '/adsensehost/v4.1/adclients/{adClientId}/urlchannels/{urlChannelId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['adClientId', 'urlChannelId'],
      pathParams: ['adClientId', 'urlChannelId'],
      context: this.getRoot()
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
  insert(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$UrlChannel>;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$UrlChannel>,
      callback?: BodyResponseCallback<Schema$UrlChannel>): void;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$UrlChannel>,
      callback?: BodyResponseCallback<Schema$UrlChannel>):
      void|AxiosPromise<Schema$UrlChannel> {
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
                  '/adsensehost/v4.1/adclients/{adClientId}/urlchannels')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['adClientId'],
      pathParams: ['adClientId'],
      context: this.getRoot()
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
  list(params?: any, options?: MethodOptions): AxiosPromise<Schema$UrlChannels>;
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
            url: (rootUrl +
                  '/adsensehost/v4.1/adclients/{adClientId}/urlchannels')
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
