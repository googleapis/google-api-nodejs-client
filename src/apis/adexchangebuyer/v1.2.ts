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

export namespace adexchangebuyer_v1_2 {
  export interface Options extends GlobalOptions {
    version: 'v1_2';
  }

  /**
   * Ad Exchange Buyer API
   *
   * Accesses your bidding-account information, submits creatives for
   * validation, finds available direct deals, and retrieves performance
   * reports.
   *
   * @example
   * const {google} = require('googleapis');
   * const adexchangebuyer = google.adexchangebuyer('v1.2');
   *
   * @namespace adexchangebuyer
   * @type {Function}
   * @version v1.2
   * @variation v1.2
   * @param {object=} options Options for Adexchangebuyer
   */
  export class Adexchangebuyer {
    _options: GlobalOptions;
    google: GoogleConfigurable;
    root = this;

    accounts: Resource$Accounts;
    creatives: Resource$Creatives;

    constructor(options: GlobalOptions, google: GoogleConfigurable) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.accounts = new Resource$Accounts(this);
      this.creatives = new Resource$Creatives(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * Configuration data for an Ad Exchange buyer account.
   */
  export interface Schema$Account {
    /**
     * Your bidder locations that have distinct URLs.
     */
    bidderLocation?: any[];
    /**
     * The nid parameter value used in cookie match requests. Please contact
     * your technical account manager if you need to change this.
     */
    cookieMatchingNid?: string;
    /**
     * The base URL used in cookie match requests.
     */
    cookieMatchingUrl?: string;
    /**
     * Account id.
     */
    id?: number;
    /**
     * Resource type.
     */
    kind?: string;
    /**
     * The maximum number of active creatives that an account can have, where a
     * creative is active if it was inserted or bid with in the last 30 days.
     * Please contact your technical account manager if you need to change this.
     */
    maximumActiveCreatives?: number;
    /**
     * The sum of all bidderLocation.maximumQps values cannot exceed this.
     * Please contact your technical account manager if you need to change this.
     */
    maximumTotalQps?: number;
    /**
     * The number of creatives that this account inserted or bid with in the
     * last 30 days.
     */
    numberActiveCreatives?: number;
  }
  /**
   * An account feed lists Ad Exchange buyer accounts that the user has access
   * to. Each entry in the feed corresponds to a single buyer account.
   */
  export interface Schema$AccountsList {
    /**
     * A list of accounts.
     */
    items?: Schema$Account[];
    /**
     * Resource type.
     */
    kind?: string;
  }
  /**
   * A creative and its classification data.
   */
  export interface Schema$Creative {
    /**
     * Account id.
     */
    accountId?: number;
    /**
     * Detected advertiser id, if any. Read-only. This field should not be set
     * in requests.
     */
    advertiserId?: string[];
    /**
     * The name of the company being advertised in the creative.
     */
    advertiserName?: string;
    /**
     * The agency id for this creative.
     */
    agencyId?: string;
    /**
     * The last upload timestamp of this creative if it was uploaded via API.
     * Read-only. The value of this field is generated, and will be ignored for
     * uploads. (formatted RFC 3339 timestamp).
     */
    apiUploadTimestamp?: string;
    /**
     * All attributes for the ads that may be shown from this snippet.
     */
    attribute?: number[];
    /**
     * A buyer-specific id identifying the creative in this ad.
     */
    buyerCreativeId?: string;
    /**
     * The set of destination urls for the snippet.
     */
    clickThroughUrl?: string[];
    /**
     * Shows any corrections that were applied to this creative. Read-only. This
     * field should not be set in requests.
     */
    corrections?: any[];
    /**
     * The reasons for disapproval, if any. Note that not all disapproval
     * reasons may be categorized, so it is possible for the creative to have a
     * status of DISAPPROVED with an empty list for disapproval_reasons. In this
     * case, please reach out to your TAM to help debug the issue. Read-only.
     * This field should not be set in requests.
     */
    disapprovalReasons?: any[];
    /**
     * The filtering reasons for the creative. Read-only. This field should not
     * be set in requests.
     */
    filteringReasons?: any;
    /**
     * Ad height.
     */
    height?: number;
    /**
     * The HTML snippet that displays the ad when inserted in the web page. If
     * set, videoURL should not be set.
     */
    HTMLSnippet?: string;
    /**
     * The set of urls to be called to record an impression.
     */
    impressionTrackingUrl?: string[];
    /**
     * Resource type.
     */
    kind?: string;
    /**
     * Detected product categories, if any. Read-only. This field should not be
     * set in requests.
     */
    productCategories?: number[];
    /**
     * All restricted categories for the ads that may be shown from this
     * snippet.
     */
    restrictedCategories?: number[];
    /**
     * Detected sensitive categories, if any. Read-only. This field should not
     * be set in requests.
     */
    sensitiveCategories?: number[];
    /**
     * Creative serving status. Read-only. This field should not be set in
     * requests.
     */
    status?: string;
    /**
     * All vendor types for the ads that may be shown from this snippet.
     */
    vendorType?: number[];
    /**
     * The version for this creative. Read-only. This field should not be set in
     * requests.
     */
    version?: number;
    /**
     * The url to fetch a video ad. If set, HTMLSnippet should not be set.
     */
    videoURL?: string;
    /**
     * Ad width.
     */
    width?: number;
  }
  /**
   * The creatives feed lists the active creatives for the Ad Exchange buyer
   * accounts that the user has access to. Each entry in the feed corresponds to
   * a single creative.
   */
  export interface Schema$CreativesList {
    /**
     * A list of creatives.
     */
    items?: Schema$Creative[];
    /**
     * Resource type.
     */
    kind?: string;
    /**
     * Continuation token used to page through creatives. To retrieve the next
     * page of results, set the next request&#39;s &quot;pageToken&quot; value
     * to this.
     */
    nextPageToken?: string;
  }


  export class Resource$Accounts {
    root: Adexchangebuyer;
    constructor(root: Adexchangebuyer) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangebuyer.accounts.get
     * @desc Gets one account by ID.
     * @alias adexchangebuyer.accounts.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer} params.id The account id
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Accounts$Get,
        options?: MethodOptions): AxiosPromise<Schema$Account>;
    get(params: Params$Resource$Accounts$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Account>,
        callback: BodyResponseCallback<Schema$Account>): void;
    get(params: Params$Resource$Accounts$Get,
        callback: BodyResponseCallback<Schema$Account>): void;
    get(callback: BodyResponseCallback<Schema$Account>): void;
    get(paramsOrCallback?: Params$Resource$Accounts$Get|
        BodyResponseCallback<Schema$Account>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Account>,
        callback?: BodyResponseCallback<Schema$Account>):
        void|AxiosPromise<Schema$Account> {
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
              url: (rootUrl + '/adexchangebuyer/v1.2/accounts/{id}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Account>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Account>(parameters);
      }
    }


    /**
     * adexchangebuyer.accounts.list
     * @desc Retrieves the authenticated user's list of accounts.
     * @alias adexchangebuyer.accounts.list
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Accounts$List, options?: MethodOptions):
        AxiosPromise<Schema$AccountsList>;
    list(
        params: Params$Resource$Accounts$List,
        options: MethodOptions|BodyResponseCallback<Schema$AccountsList>,
        callback: BodyResponseCallback<Schema$AccountsList>): void;
    list(
        params: Params$Resource$Accounts$List,
        callback: BodyResponseCallback<Schema$AccountsList>): void;
    list(callback: BodyResponseCallback<Schema$AccountsList>): void;
    list(
        paramsOrCallback?: Params$Resource$Accounts$List|
        BodyResponseCallback<Schema$AccountsList>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$AccountsList>,
        callback?: BodyResponseCallback<Schema$AccountsList>):
        void|AxiosPromise<Schema$AccountsList> {
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
              url: (rootUrl + '/adexchangebuyer/v1.2/accounts')
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
        createAPIRequest<Schema$AccountsList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AccountsList>(parameters);
      }
    }


    /**
     * adexchangebuyer.accounts.patch
     * @desc Updates an existing account. This method supports patch semantics.
     * @alias adexchangebuyer.accounts.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer} params.id The account id
     * @param {().Account} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(params?: Params$Resource$Accounts$Patch, options?: MethodOptions):
        AxiosPromise<Schema$Account>;
    patch(
        params: Params$Resource$Accounts$Patch,
        options: MethodOptions|BodyResponseCallback<Schema$Account>,
        callback: BodyResponseCallback<Schema$Account>): void;
    patch(
        params: Params$Resource$Accounts$Patch,
        callback: BodyResponseCallback<Schema$Account>): void;
    patch(callback: BodyResponseCallback<Schema$Account>): void;
    patch(
        paramsOrCallback?: Params$Resource$Accounts$Patch|
        BodyResponseCallback<Schema$Account>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Account>,
        callback?: BodyResponseCallback<Schema$Account>):
        void|AxiosPromise<Schema$Account> {
      let params = (paramsOrCallback || {}) as Params$Resource$Accounts$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Patch;
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
              url: (rootUrl + '/adexchangebuyer/v1.2/accounts/{id}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Account>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Account>(parameters);
      }
    }


    /**
     * adexchangebuyer.accounts.update
     * @desc Updates an existing account.
     * @alias adexchangebuyer.accounts.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer} params.id The account id
     * @param {().Account} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(params?: Params$Resource$Accounts$Update, options?: MethodOptions):
        AxiosPromise<Schema$Account>;
    update(
        params: Params$Resource$Accounts$Update,
        options: MethodOptions|BodyResponseCallback<Schema$Account>,
        callback: BodyResponseCallback<Schema$Account>): void;
    update(
        params: Params$Resource$Accounts$Update,
        callback: BodyResponseCallback<Schema$Account>): void;
    update(callback: BodyResponseCallback<Schema$Account>): void;
    update(
        paramsOrCallback?: Params$Resource$Accounts$Update|
        BodyResponseCallback<Schema$Account>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Account>,
        callback?: BodyResponseCallback<Schema$Account>):
        void|AxiosPromise<Schema$Account> {
      let params = (paramsOrCallback || {}) as Params$Resource$Accounts$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Update;
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
              url: (rootUrl + '/adexchangebuyer/v1.2/accounts/{id}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Account>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Account>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The account id
     */
    id?: number;
  }
  export interface Params$Resource$Accounts$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;
  }
  export interface Params$Resource$Accounts$Patch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The account id
     */
    id?: number;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Account;
  }
  export interface Params$Resource$Accounts$Update {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The account id
     */
    id?: number;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Account;
  }


  export class Resource$Creatives {
    root: Adexchangebuyer;
    constructor(root: Adexchangebuyer) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangebuyer.creatives.get
     * @desc Gets the status for a single creative. A creative will be available
     * 30-40 minutes after submission.
     * @alias adexchangebuyer.creatives.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer} params.accountId The id for the account that will serve this creative.
     * @param {string} params.buyerCreativeId The buyer-specific id for this creative.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Creatives$Get,
        options?: MethodOptions): AxiosPromise<Schema$Creative>;
    get(params: Params$Resource$Creatives$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Creative>,
        callback: BodyResponseCallback<Schema$Creative>): void;
    get(params: Params$Resource$Creatives$Get,
        callback: BodyResponseCallback<Schema$Creative>): void;
    get(callback: BodyResponseCallback<Schema$Creative>): void;
    get(paramsOrCallback?: Params$Resource$Creatives$Get|
        BodyResponseCallback<Schema$Creative>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Creative>,
        callback?: BodyResponseCallback<Schema$Creative>):
        void|AxiosPromise<Schema$Creative> {
      let params = (paramsOrCallback || {}) as Params$Resource$Creatives$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Creatives$Get;
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
                   '/adexchangebuyer/v1.2/creatives/{accountId}/{buyerCreativeId}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['accountId', 'buyerCreativeId'],
        pathParams: ['accountId', 'buyerCreativeId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Creative>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Creative>(parameters);
      }
    }


    /**
     * adexchangebuyer.creatives.insert
     * @desc Submit a new creative.
     * @alias adexchangebuyer.creatives.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().Creative} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(params?: Params$Resource$Creatives$Insert, options?: MethodOptions):
        AxiosPromise<Schema$Creative>;
    insert(
        params: Params$Resource$Creatives$Insert,
        options: MethodOptions|BodyResponseCallback<Schema$Creative>,
        callback: BodyResponseCallback<Schema$Creative>): void;
    insert(
        params: Params$Resource$Creatives$Insert,
        callback: BodyResponseCallback<Schema$Creative>): void;
    insert(callback: BodyResponseCallback<Schema$Creative>): void;
    insert(
        paramsOrCallback?: Params$Resource$Creatives$Insert|
        BodyResponseCallback<Schema$Creative>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Creative>,
        callback?: BodyResponseCallback<Schema$Creative>):
        void|AxiosPromise<Schema$Creative> {
      let params = (paramsOrCallback || {}) as Params$Resource$Creatives$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Creatives$Insert;
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
              url: (rootUrl + '/adexchangebuyer/v1.2/creatives')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Creative>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Creative>(parameters);
      }
    }


    /**
     * adexchangebuyer.creatives.list
     * @desc Retrieves a list of the authenticated user's active creatives. A
     * creative will be available 30-40 minutes after submission.
     * @alias adexchangebuyer.creatives.list
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {integer=} params.maxResults Maximum number of entries returned on one result page. If not set, the default is 100. Optional.
     * @param {string=} params.pageToken A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response. Optional.
     * @param {string=} params.statusFilter When specified, only creatives having the given status are returned.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Creatives$List, options?: MethodOptions):
        AxiosPromise<Schema$CreativesList>;
    list(
        params: Params$Resource$Creatives$List,
        options: MethodOptions|BodyResponseCallback<Schema$CreativesList>,
        callback: BodyResponseCallback<Schema$CreativesList>): void;
    list(
        params: Params$Resource$Creatives$List,
        callback: BodyResponseCallback<Schema$CreativesList>): void;
    list(callback: BodyResponseCallback<Schema$CreativesList>): void;
    list(
        paramsOrCallback?: Params$Resource$Creatives$List|
        BodyResponseCallback<Schema$CreativesList>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$CreativesList>,
        callback?: BodyResponseCallback<Schema$CreativesList>):
        void|AxiosPromise<Schema$CreativesList> {
      let params = (paramsOrCallback || {}) as Params$Resource$Creatives$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Creatives$List;
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
              url: (rootUrl + '/adexchangebuyer/v1.2/creatives')
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
        createAPIRequest<Schema$CreativesList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CreativesList>(parameters);
      }
    }
  }

  export interface Params$Resource$Creatives$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The id for the account that will serve this creative.
     */
    accountId?: number;
    /**
     * The buyer-specific id for this creative.
     */
    buyerCreativeId?: string;
  }
  export interface Params$Resource$Creatives$Insert {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$Creative;
  }
  export interface Params$Resource$Creatives$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Maximum number of entries returned on one result page. If not set, the
     * default is 100. Optional.
     */
    maxResults?: number;
    /**
     * A continuation token, used to page through ad clients. To retrieve the
     * next page, set this parameter to the value of "nextPageToken" from the
     * previous response. Optional.
     */
    pageToken?: string;
    /**
     * When specified, only creatives having the given status are returned.
     */
    statusFilter?: string;
  }
}
