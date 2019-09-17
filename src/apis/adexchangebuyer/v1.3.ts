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

export namespace adexchangebuyer_v1_3 {
  export interface Options extends GlobalOptions {
    version: 'v1.3';
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
   * Ad Exchange Buyer API
   *
   * Accesses your bidding-account information, submits creatives for validation, finds available direct deals, and retrieves performance reports.
   *
   * @example
   * const {google} = require('googleapis');
   * const adexchangebuyer = google.adexchangebuyer('v1.3');
   *
   * @namespace adexchangebuyer
   * @type {Function}
   * @version v1.3
   * @variation v1.3
   * @param {object=} options Options for Adexchangebuyer
   */
  export class Adexchangebuyer {
    context: APIRequestContext;
    accounts: Resource$Accounts;
    billingInfo: Resource$Billinginfo;
    budget: Resource$Budget;
    creatives: Resource$Creatives;
    directDeals: Resource$Directdeals;
    performanceReport: Resource$Performancereport;
    pretargetingConfig: Resource$Pretargetingconfig;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.accounts = new Resource$Accounts(this.context);
      this.billingInfo = new Resource$Billinginfo(this.context);
      this.budget = new Resource$Budget(this.context);
      this.creatives = new Resource$Creatives(this.context);
      this.directDeals = new Resource$Directdeals(this.context);
      this.performanceReport = new Resource$Performancereport(this.context);
      this.pretargetingConfig = new Resource$Pretargetingconfig(this.context);
    }
  }

  /**
   * Configuration data for an Ad Exchange buyer account.
   */
  export interface Schema$Account {
    /**
     * Your bidder locations that have distinct URLs.
     */
    bidderLocation?: Array<{
      maximumQps?: number;
      region?: string;
      url?: string;
    }> | null;
    /**
     * The nid parameter value used in cookie match requests. Please contact your technical account manager if you need to change this.
     */
    cookieMatchingNid?: string | null;
    /**
     * The base URL used in cookie match requests.
     */
    cookieMatchingUrl?: string | null;
    /**
     * Account id.
     */
    id?: number | null;
    /**
     * Resource type.
     */
    kind?: string | null;
    /**
     * The maximum number of active creatives that an account can have, where a creative is active if it was inserted or bid with in the last 30 days. Please contact your technical account manager if you need to change this.
     */
    maximumActiveCreatives?: number | null;
    /**
     * The sum of all bidderLocation.maximumQps values cannot exceed this. Please contact your technical account manager if you need to change this.
     */
    maximumTotalQps?: number | null;
    /**
     * The number of creatives that this account inserted or bid with in the last 30 days.
     */
    numberActiveCreatives?: number | null;
  }
  /**
   * An account feed lists Ad Exchange buyer accounts that the user has access to. Each entry in the feed corresponds to a single buyer account.
   */
  export interface Schema$AccountsList {
    /**
     * A list of accounts.
     */
    items?: Schema$Account[];
    /**
     * Resource type.
     */
    kind?: string | null;
  }
  /**
   * The configuration data for an Ad Exchange billing info.
   */
  export interface Schema$BillingInfo {
    /**
     * Account id.
     */
    accountId?: number | null;
    /**
     * Account name.
     */
    accountName?: string | null;
    /**
     * A list of adgroup IDs associated with this particular account. These IDs may show up as part of a realtime bidding BidRequest, which indicates a bid request for this account.
     */
    billingId?: string[] | null;
    /**
     * Resource type.
     */
    kind?: string | null;
  }
  /**
   * A billing info feed lists Billing Info the Ad Exchange buyer account has access to. Each entry in the feed corresponds to a single billing info.
   */
  export interface Schema$BillingInfoList {
    /**
     * A list of billing info relevant for your account.
     */
    items?: Schema$BillingInfo[];
    /**
     * Resource type.
     */
    kind?: string | null;
  }
  /**
   * The configuration data for Ad Exchange RTB - Budget API.
   */
  export interface Schema$Budget {
    /**
     * The id of the account. This is required for get and update requests.
     */
    accountId?: string | null;
    /**
     * The billing id to determine which adgroup to provide budget information for. This is required for get and update requests.
     */
    billingId?: string | null;
    /**
     * The daily budget amount in unit amount of the account currency to apply for the billingId provided. This is required for update requests.
     */
    budgetAmount?: string | null;
    /**
     * The currency code for the buyer. This cannot be altered here.
     */
    currencyCode?: string | null;
    /**
     * The unique id that describes this item.
     */
    id?: string | null;
    /**
     * The kind of the resource, i.e. &quot;adexchangebuyer#budget&quot;.
     */
    kind?: string | null;
  }
  /**
   * A creative and its classification data.
   */
  export interface Schema$Creative {
    /**
     * Account id.
     */
    accountId?: number | null;
    adTechnologyProviders?: {
      detectedProviderIds?: string[];
      hasUnidentifiedProvider?: boolean;
    } | null;
    /**
     * Detected advertiser id, if any. Read-only. This field should not be set in requests.
     */
    advertiserId?: string[] | null;
    /**
     * The name of the company being advertised in the creative.
     */
    advertiserName?: string | null;
    /**
     * The agency id for this creative.
     */
    agencyId?: string | null;
    /**
     * The last upload timestamp of this creative if it was uploaded via API. Read-only. The value of this field is generated, and will be ignored for uploads. (formatted RFC 3339 timestamp).
     */
    apiUploadTimestamp?: string | null;
    /**
     * All attributes for the ads that may be shown from this snippet.
     */
    attribute?: number[] | null;
    /**
     * A buyer-specific id identifying the creative in this ad.
     */
    buyerCreativeId?: string | null;
    /**
     * The set of destination urls for the snippet.
     */
    clickThroughUrl?: string[] | null;
    /**
     * Shows any corrections that were applied to this creative. Read-only. This field should not be set in requests.
     */
    corrections?: Array<{details?: string[]; reason?: string}> | null;
    /**
     * The reasons for disapproval, if any. Note that not all disapproval reasons may be categorized, so it is possible for the creative to have a status of DISAPPROVED with an empty list for disapproval_reasons. In this case, please reach out to your TAM to help debug the issue. Read-only. This field should not be set in requests.
     */
    disapprovalReasons?: Array<{details?: string[]; reason?: string}> | null;
    /**
     * The filtering reasons for the creative. Read-only. This field should not be set in requests.
     */
    filteringReasons?: {
      date?: string;
      reasons?: Array<{filteringCount?: string; filteringStatus?: number}>;
    } | null;
    /**
     * Ad height.
     */
    height?: number | null;
    /**
     * The HTML snippet that displays the ad when inserted in the web page. If set, videoURL should not be set.
     */
    HTMLSnippet?: string | null;
    /**
     * The set of urls to be called to record an impression.
     */
    impressionTrackingUrl?: string[] | null;
    /**
     * Resource type.
     */
    kind?: string | null;
    /**
     * If nativeAd is set, HTMLSnippet and videoURL should not be set.
     */
    nativeAd?: {
      advertiser?: string;
      appIcon?: {height?: number; url?: string; width?: number};
      body?: string;
      callToAction?: string;
      clickTrackingUrl?: string;
      headline?: string;
      image?: {height?: number; url?: string; width?: number};
      impressionTrackingUrl?: string[];
      logo?: {height?: number; url?: string; width?: number};
      price?: string;
      starRating?: number;
    } | null;
    /**
     * Detected product categories, if any. Read-only. This field should not be set in requests.
     */
    productCategories?: number[] | null;
    /**
     * All restricted categories for the ads that may be shown from this snippet.
     */
    restrictedCategories?: number[] | null;
    /**
     * Detected sensitive categories, if any. Read-only. This field should not be set in requests.
     */
    sensitiveCategories?: number[] | null;
    /**
     * Creative serving status. Read-only. This field should not be set in requests.
     */
    status?: string | null;
    /**
     * All vendor types for the ads that may be shown from this snippet.
     */
    vendorType?: number[] | null;
    /**
     * The version for this creative. Read-only. This field should not be set in requests.
     */
    version?: number | null;
    /**
     * The URL to fetch a video ad. If set, HTMLSnippet and the nativeAd should not be set.
     */
    videoURL?: string | null;
    /**
     * Ad width.
     */
    width?: number | null;
  }
  /**
   * The creatives feed lists the active creatives for the Ad Exchange buyer accounts that the user has access to. Each entry in the feed corresponds to a single creative.
   */
  export interface Schema$CreativesList {
    /**
     * A list of creatives.
     */
    items?: Schema$Creative[];
    /**
     * Resource type.
     */
    kind?: string | null;
    /**
     * Continuation token used to page through creatives. To retrieve the next page of results, set the next request&#39;s &quot;pageToken&quot; value to this.
     */
    nextPageToken?: string | null;
  }
  /**
   * The configuration data for an Ad Exchange direct deal.
   */
  export interface Schema$DirectDeal {
    /**
     * The account id of the buyer this deal is for.
     */
    accountId?: number | null;
    /**
     * The name of the advertiser this deal is for.
     */
    advertiser?: string | null;
    /**
     * Whether the publisher for this deal is eligible for alcohol ads.
     */
    allowsAlcohol?: boolean | null;
    /**
     * The account id that this deal was negotiated for. It is either the buyer or the client that this deal was negotiated on behalf of.
     */
    buyerAccountId?: string | null;
    /**
     * The currency code that applies to the fixed_cpm value. If not set then assumed to be USD.
     */
    currencyCode?: string | null;
    /**
     * The deal type such as programmatic reservation or fixed price and so on.
     */
    dealTier?: string | null;
    /**
     * End time for when this deal stops being active. If not set then this deal is valid until manually disabled by the publisher. In seconds since the epoch.
     */
    endTime?: string | null;
    /**
     * The fixed price for this direct deal. In cpm micros of currency according to currency_code. If set, then this deal is eligible for the fixed price tier of buying (highest priority, pay exactly the configured fixed price).
     */
    fixedCpm?: string | null;
    /**
     * Deal id.
     */
    id?: string | null;
    /**
     * Resource type.
     */
    kind?: string | null;
    /**
     * Deal name.
     */
    name?: string | null;
    /**
     * The minimum price for this direct deal. In cpm micros of currency according to currency_code. If set, then this deal is eligible for the private exchange tier of buying (below fixed price priority, run as a second price auction).
     */
    privateExchangeMinCpm?: string | null;
    /**
     * If true, the publisher has opted to have their blocks ignored when a creative is bid with for this deal.
     */
    publisherBlocksOverriden?: boolean | null;
    /**
     * The name of the publisher offering this direct deal.
     */
    sellerNetwork?: string | null;
    /**
     * Start time for when this deal becomes active. If not set then this deal is active immediately upon creation. In seconds since the epoch.
     */
    startTime?: string | null;
  }
  /**
   * A direct deals feed lists Direct Deals the Ad Exchange buyer account has access to. This includes direct deals set up for the buyer account as well as its merged stream seats.
   */
  export interface Schema$DirectDealsList {
    /**
     * A list of direct deals relevant for your account.
     */
    directDeals?: Schema$DirectDeal[];
    /**
     * Resource type.
     */
    kind?: string | null;
  }
  /**
   * The configuration data for an Ad Exchange performance report list.
   */
  export interface Schema$PerformanceReport {
    /**
     * The number of bid responses with an ad.
     */
    bidRate?: number | null;
    /**
     * The number of bid requests sent to your bidder.
     */
    bidRequestRate?: number | null;
    /**
     * Rate of various prefiltering statuses per match. Please refer to the callout-status-codes.txt file for different statuses.
     */
    calloutStatusRate?: any[] | null;
    /**
     * Average QPS for cookie matcher operations.
     */
    cookieMatcherStatusRate?: any[] | null;
    /**
     * Rate of ads with a given status. Please refer to the creative-status-codes.txt file for different statuses.
     */
    creativeStatusRate?: any[] | null;
    /**
     * The number of bid responses that were filtered due to a policy violation or other errors.
     */
    filteredBidRate?: number | null;
    /**
     * Average QPS for hosted match operations.
     */
    hostedMatchStatusRate?: any[] | null;
    /**
     * The number of potential queries based on your pretargeting settings.
     */
    inventoryMatchRate?: number | null;
    /**
     * Resource type.
     */
    kind?: string | null;
    /**
     * The 50th percentile round trip latency(ms) as perceived from Google servers for the duration period covered by the report.
     */
    latency50thPercentile?: number | null;
    /**
     * The 85th percentile round trip latency(ms) as perceived from Google servers for the duration period covered by the report.
     */
    latency85thPercentile?: number | null;
    /**
     * The 95th percentile round trip latency(ms) as perceived from Google servers for the duration period covered by the report.
     */
    latency95thPercentile?: number | null;
    /**
     * Rate of various quota account statuses per quota check.
     */
    noQuotaInRegion?: number | null;
    /**
     * Rate of various quota account statuses per quota check.
     */
    outOfQuota?: number | null;
    /**
     * Average QPS for pixel match requests from clients.
     */
    pixelMatchRequests?: number | null;
    /**
     * Average QPS for pixel match responses from clients.
     */
    pixelMatchResponses?: number | null;
    /**
     * The configured quota limits for this account.
     */
    quotaConfiguredLimit?: number | null;
    /**
     * The throttled quota limits for this account.
     */
    quotaThrottledLimit?: number | null;
    /**
     * The trading location of this data.
     */
    region?: string | null;
    /**
     * The number of properly formed bid responses received by our servers within the deadline.
     */
    successfulRequestRate?: number | null;
    /**
     * The unix timestamp of the starting time of this performance data.
     */
    timestamp?: string | null;
    /**
     * The number of bid responses that were unsuccessful due to timeouts, incorrect formatting, etc.
     */
    unsuccessfulRequestRate?: number | null;
  }
  /**
   * The configuration data for an Ad Exchange performance report list.
   */
  export interface Schema$PerformanceReportList {
    /**
     * Resource type.
     */
    kind?: string | null;
    /**
     * A list of performance reports relevant for the account.
     */
    performanceReport?: Schema$PerformanceReport[];
  }
  export interface Schema$PretargetingConfig {
    /**
     * The id for billing purposes, provided for reference. Leave this field blank for insert requests; the id will be generated automatically.
     */
    billingId?: string | null;
    /**
     * The config id; generated automatically. Leave this field blank for insert requests.
     */
    configId?: string | null;
    /**
     * The name of the config. Must be unique. Required for all requests.
     */
    configName?: string | null;
    /**
     * List must contain exactly one of PRETARGETING_CREATIVE_TYPE_HTML or PRETARGETING_CREATIVE_TYPE_VIDEO.
     */
    creativeType?: string[] | null;
    /**
     * Requests which allow one of these (width, height) pairs will match. All pairs must be supported ad dimensions.
     */
    dimensions?: Array<{height?: string; width?: string}> | null;
    /**
     * Requests with any of these content labels will not match. Values are from content-labels.txt in the downloadable files section.
     */
    excludedContentLabels?: string[] | null;
    /**
     * Requests containing any of these geo criteria ids will not match.
     */
    excludedGeoCriteriaIds?: string[] | null;
    /**
     * Requests containing any of these placements will not match.
     */
    excludedPlacements?: Array<{token?: string; type?: string}> | null;
    /**
     * Requests containing any of these users list ids will not match.
     */
    excludedUserLists?: string[] | null;
    /**
     * Requests containing any of these vertical ids will not match. Values are from the publisher-verticals.txt file in the downloadable files section.
     */
    excludedVerticals?: string[] | null;
    /**
     * Requests containing any of these geo criteria ids will match.
     */
    geoCriteriaIds?: string[] | null;
    /**
     * Whether this config is active. Required for all requests.
     */
    isActive?: boolean | null;
    /**
     * The kind of the resource, i.e. &quot;adexchangebuyer#pretargetingConfig&quot;.
     */
    kind?: string | null;
    /**
     * Request containing any of these language codes will match.
     */
    languages?: string[] | null;
    /**
     * Requests containing any of these mobile carrier ids will match. Values are from mobile-carriers.csv in the downloadable files section.
     */
    mobileCarriers?: string[] | null;
    /**
     * Requests containing any of these mobile device ids will match. Values are from mobile-devices.csv in the downloadable files section.
     */
    mobileDevices?: string[] | null;
    /**
     * Requests containing any of these mobile operating system version ids will match. Values are from mobile-os.csv in the downloadable files section.
     */
    mobileOperatingSystemVersions?: string[] | null;
    /**
     * Requests containing any of these placements will match.
     */
    placements?: Array<{token?: string; type?: string}> | null;
    /**
     * Requests matching any of these platforms will match. Possible values are PRETARGETING_PLATFORM_MOBILE, PRETARGETING_PLATFORM_DESKTOP, and PRETARGETING_PLATFORM_TABLET.
     */
    platforms?: string[] | null;
    /**
     * Creative attributes should be declared here if all creatives corresponding to this pretargeting configuration have that creative attribute. Values are from pretargetable-creative-attributes.txt in the downloadable files section.
     */
    supportedCreativeAttributes?: string[] | null;
    /**
     * Requests containing any of these user list ids will match.
     */
    userLists?: string[] | null;
    /**
     * Requests that allow any of these vendor ids will match. Values are from vendors.txt in the downloadable files section.
     */
    vendorTypes?: string[] | null;
    /**
     * Requests containing any of these vertical ids will match.
     */
    verticals?: string[] | null;
  }
  export interface Schema$PretargetingConfigList {
    /**
     * A list of pretargeting configs
     */
    items?: Schema$PretargetingConfig[];
    /**
     * Resource type.
     */
    kind?: string | null;
  }

  export class Resource$Accounts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
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
            url: (rootUrl + '/adexchangebuyer/v1.3/accounts/{id}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: this.context,
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
    list(
      params?: Params$Resource$Accounts$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccountsList>;
    list(
      params: Params$Resource$Accounts$List,
      options: MethodOptions | BodyResponseCallback<Schema$AccountsList>,
      callback: BodyResponseCallback<Schema$AccountsList>
    ): void;
    list(
      params: Params$Resource$Accounts$List,
      callback: BodyResponseCallback<Schema$AccountsList>
    ): void;
    list(callback: BodyResponseCallback<Schema$AccountsList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$List
        | BodyResponseCallback<Schema$AccountsList>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AccountsList>,
      callback?: BodyResponseCallback<Schema$AccountsList>
    ): void | GaxiosPromise<Schema$AccountsList> {
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
            url: (rootUrl + '/adexchangebuyer/v1.3/accounts').replace(
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
    patch(
      params?: Params$Resource$Accounts$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Account>;
    patch(
      params: Params$Resource$Accounts$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Account>,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    patch(
      params: Params$Resource$Accounts$Patch,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Account>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Accounts$Patch
        | BodyResponseCallback<Schema$Account>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Account>,
      callback?: BodyResponseCallback<Schema$Account>
    ): void | GaxiosPromise<Schema$Account> {
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
            url: (rootUrl + '/adexchangebuyer/v1.3/accounts/{id}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: this.context,
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
    update(
      params?: Params$Resource$Accounts$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Account>;
    update(
      params: Params$Resource$Accounts$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Account>,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    update(
      params: Params$Resource$Accounts$Update,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    update(callback: BodyResponseCallback<Schema$Account>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Accounts$Update
        | BodyResponseCallback<Schema$Account>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Account>,
      callback?: BodyResponseCallback<Schema$Account>
    ): void | GaxiosPromise<Schema$Account> {
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
            url: (rootUrl + '/adexchangebuyer/v1.3/accounts/{id}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Account>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Account>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The account id
     */
    id?: number;
  }
  export interface Params$Resource$Accounts$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
  }
  export interface Params$Resource$Accounts$Patch extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The account id
     */
    id?: number;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Account;
  }
  export interface Params$Resource$Accounts$Update extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The account id
     */
    id?: number;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Account;
  }

  export class Resource$Billinginfo {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * adexchangebuyer.billingInfo.get
     * @desc Returns the billing information for one account specified by account ID.
     * @alias adexchangebuyer.billingInfo.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer} params.accountId The account id.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Billinginfo$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BillingInfo>;
    get(
      params: Params$Resource$Billinginfo$Get,
      options: MethodOptions | BodyResponseCallback<Schema$BillingInfo>,
      callback: BodyResponseCallback<Schema$BillingInfo>
    ): void;
    get(
      params: Params$Resource$Billinginfo$Get,
      callback: BodyResponseCallback<Schema$BillingInfo>
    ): void;
    get(callback: BodyResponseCallback<Schema$BillingInfo>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Billinginfo$Get
        | BodyResponseCallback<Schema$BillingInfo>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$BillingInfo>,
      callback?: BodyResponseCallback<Schema$BillingInfo>
    ): void | GaxiosPromise<Schema$BillingInfo> {
      let params = (paramsOrCallback || {}) as Params$Resource$Billinginfo$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Billinginfo$Get;
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
              rootUrl + '/adexchangebuyer/v1.3/billinginfo/{accountId}'
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
        createAPIRequest<Schema$BillingInfo>(parameters, callback);
      } else {
        return createAPIRequest<Schema$BillingInfo>(parameters);
      }
    }

    /**
     * adexchangebuyer.billingInfo.list
     * @desc Retrieves a list of billing information for all accounts of the authenticated user.
     * @alias adexchangebuyer.billingInfo.list
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Billinginfo$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BillingInfoList>;
    list(
      params: Params$Resource$Billinginfo$List,
      options: MethodOptions | BodyResponseCallback<Schema$BillingInfoList>,
      callback: BodyResponseCallback<Schema$BillingInfoList>
    ): void;
    list(
      params: Params$Resource$Billinginfo$List,
      callback: BodyResponseCallback<Schema$BillingInfoList>
    ): void;
    list(callback: BodyResponseCallback<Schema$BillingInfoList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Billinginfo$List
        | BodyResponseCallback<Schema$BillingInfoList>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$BillingInfoList>,
      callback?: BodyResponseCallback<Schema$BillingInfoList>
    ): void | GaxiosPromise<Schema$BillingInfoList> {
      let params = (paramsOrCallback || {}) as Params$Resource$Billinginfo$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Billinginfo$List;
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
            url: (rootUrl + '/adexchangebuyer/v1.3/billinginfo').replace(
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
        createAPIRequest<Schema$BillingInfoList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$BillingInfoList>(parameters);
      }
    }
  }

  export interface Params$Resource$Billinginfo$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The account id.
     */
    accountId?: number;
  }
  export interface Params$Resource$Billinginfo$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
  }

  export class Resource$Budget {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * adexchangebuyer.budget.get
     * @desc Returns the budget information for the adgroup specified by the accountId and billingId.
     * @alias adexchangebuyer.budget.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId The account id to get the budget information for.
     * @param {string} params.billingId The billing id to get the budget information for.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Budget$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Budget>;
    get(
      params: Params$Resource$Budget$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Budget>,
      callback: BodyResponseCallback<Schema$Budget>
    ): void;
    get(
      params: Params$Resource$Budget$Get,
      callback: BodyResponseCallback<Schema$Budget>
    ): void;
    get(callback: BodyResponseCallback<Schema$Budget>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Budget$Get
        | BodyResponseCallback<Schema$Budget>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Budget>,
      callback?: BodyResponseCallback<Schema$Budget>
    ): void | GaxiosPromise<Schema$Budget> {
      let params = (paramsOrCallback || {}) as Params$Resource$Budget$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Budget$Get;
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
              '/adexchangebuyer/v1.3/billinginfo/{accountId}/{billingId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'billingId'],
        pathParams: ['accountId', 'billingId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Budget>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Budget>(parameters);
      }
    }

    /**
     * adexchangebuyer.budget.patch
     * @desc Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request. This method supports patch semantics.
     * @alias adexchangebuyer.budget.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId The account id associated with the budget being updated.
     * @param {string} params.billingId The billing id associated with the budget being updated.
     * @param {().Budget} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Budget$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Budget>;
    patch(
      params: Params$Resource$Budget$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Budget>,
      callback: BodyResponseCallback<Schema$Budget>
    ): void;
    patch(
      params: Params$Resource$Budget$Patch,
      callback: BodyResponseCallback<Schema$Budget>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Budget>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Budget$Patch
        | BodyResponseCallback<Schema$Budget>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Budget>,
      callback?: BodyResponseCallback<Schema$Budget>
    ): void | GaxiosPromise<Schema$Budget> {
      let params = (paramsOrCallback || {}) as Params$Resource$Budget$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Budget$Patch;
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
              '/adexchangebuyer/v1.3/billinginfo/{accountId}/{billingId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'billingId'],
        pathParams: ['accountId', 'billingId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Budget>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Budget>(parameters);
      }
    }

    /**
     * adexchangebuyer.budget.update
     * @desc Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request.
     * @alias adexchangebuyer.budget.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId The account id associated with the budget being updated.
     * @param {string} params.billingId The billing id associated with the budget being updated.
     * @param {().Budget} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Budget$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Budget>;
    update(
      params: Params$Resource$Budget$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Budget>,
      callback: BodyResponseCallback<Schema$Budget>
    ): void;
    update(
      params: Params$Resource$Budget$Update,
      callback: BodyResponseCallback<Schema$Budget>
    ): void;
    update(callback: BodyResponseCallback<Schema$Budget>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Budget$Update
        | BodyResponseCallback<Schema$Budget>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Budget>,
      callback?: BodyResponseCallback<Schema$Budget>
    ): void | GaxiosPromise<Schema$Budget> {
      let params = (paramsOrCallback || {}) as Params$Resource$Budget$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Budget$Update;
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
              '/adexchangebuyer/v1.3/billinginfo/{accountId}/{billingId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'billingId'],
        pathParams: ['accountId', 'billingId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Budget>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Budget>(parameters);
      }
    }
  }

  export interface Params$Resource$Budget$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The account id to get the budget information for.
     */
    accountId?: string;
    /**
     * The billing id to get the budget information for.
     */
    billingId?: string;
  }
  export interface Params$Resource$Budget$Patch extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The account id associated with the budget being updated.
     */
    accountId?: string;
    /**
     * The billing id associated with the budget being updated.
     */
    billingId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Budget;
  }
  export interface Params$Resource$Budget$Update extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The account id associated with the budget being updated.
     */
    accountId?: string;
    /**
     * The billing id associated with the budget being updated.
     */
    billingId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Budget;
  }

  export class Resource$Creatives {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * adexchangebuyer.creatives.get
     * @desc Gets the status for a single creative. A creative will be available 30-40 minutes after submission.
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
    get(
      params?: Params$Resource$Creatives$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Creative>;
    get(
      params: Params$Resource$Creatives$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Creative>,
      callback: BodyResponseCallback<Schema$Creative>
    ): void;
    get(
      params: Params$Resource$Creatives$Get,
      callback: BodyResponseCallback<Schema$Creative>
    ): void;
    get(callback: BodyResponseCallback<Schema$Creative>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Creatives$Get
        | BodyResponseCallback<Schema$Creative>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Creative>,
      callback?: BodyResponseCallback<Schema$Creative>
    ): void | GaxiosPromise<Schema$Creative> {
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
            url: (
              rootUrl +
              '/adexchangebuyer/v1.3/creatives/{accountId}/{buyerCreativeId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'buyerCreativeId'],
        pathParams: ['accountId', 'buyerCreativeId'],
        context: this.context,
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
    insert(
      params?: Params$Resource$Creatives$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Creative>;
    insert(
      params: Params$Resource$Creatives$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Creative>,
      callback: BodyResponseCallback<Schema$Creative>
    ): void;
    insert(
      params: Params$Resource$Creatives$Insert,
      callback: BodyResponseCallback<Schema$Creative>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Creative>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Creatives$Insert
        | BodyResponseCallback<Schema$Creative>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Creative>,
      callback?: BodyResponseCallback<Schema$Creative>
    ): void | GaxiosPromise<Schema$Creative> {
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
            url: (rootUrl + '/adexchangebuyer/v1.3/creatives').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Creative>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Creative>(parameters);
      }
    }

    /**
     * adexchangebuyer.creatives.list
     * @desc Retrieves a list of the authenticated user's active creatives. A creative will be available 30-40 minutes after submission.
     * @alias adexchangebuyer.creatives.list
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {integer=} params.accountId When specified, only creatives for the given account ids are returned.
     * @param {string=} params.buyerCreativeId When specified, only creatives for the given buyer creative ids are returned.
     * @param {integer=} params.maxResults Maximum number of entries returned on one result page. If not set, the default is 100. Optional.
     * @param {string=} params.pageToken A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response. Optional.
     * @param {string=} params.statusFilter When specified, only creatives having the given status are returned.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Creatives$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CreativesList>;
    list(
      params: Params$Resource$Creatives$List,
      options: MethodOptions | BodyResponseCallback<Schema$CreativesList>,
      callback: BodyResponseCallback<Schema$CreativesList>
    ): void;
    list(
      params: Params$Resource$Creatives$List,
      callback: BodyResponseCallback<Schema$CreativesList>
    ): void;
    list(callback: BodyResponseCallback<Schema$CreativesList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Creatives$List
        | BodyResponseCallback<Schema$CreativesList>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CreativesList>,
      callback?: BodyResponseCallback<Schema$CreativesList>
    ): void | GaxiosPromise<Schema$CreativesList> {
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
            url: (rootUrl + '/adexchangebuyer/v1.3/creatives').replace(
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
        createAPIRequest<Schema$CreativesList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CreativesList>(parameters);
      }
    }
  }

  export interface Params$Resource$Creatives$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The id for the account that will serve this creative.
     */
    accountId?: number;
    /**
     * The buyer-specific id for this creative.
     */
    buyerCreativeId?: string;
  }
  export interface Params$Resource$Creatives$Insert extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Creative;
  }
  export interface Params$Resource$Creatives$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * When specified, only creatives for the given account ids are returned.
     */
    accountId?: number[];
    /**
     * When specified, only creatives for the given buyer creative ids are returned.
     */
    buyerCreativeId?: string[];
    /**
     * Maximum number of entries returned on one result page. If not set, the default is 100. Optional.
     */
    maxResults?: number;
    /**
     * A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response. Optional.
     */
    pageToken?: string;
    /**
     * When specified, only creatives having the given status are returned.
     */
    statusFilter?: string;
  }

  export class Resource$Directdeals {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * adexchangebuyer.directDeals.get
     * @desc Gets one direct deal by ID.
     * @alias adexchangebuyer.directDeals.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The direct deal id
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Directdeals$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DirectDeal>;
    get(
      params: Params$Resource$Directdeals$Get,
      options: MethodOptions | BodyResponseCallback<Schema$DirectDeal>,
      callback: BodyResponseCallback<Schema$DirectDeal>
    ): void;
    get(
      params: Params$Resource$Directdeals$Get,
      callback: BodyResponseCallback<Schema$DirectDeal>
    ): void;
    get(callback: BodyResponseCallback<Schema$DirectDeal>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Directdeals$Get
        | BodyResponseCallback<Schema$DirectDeal>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$DirectDeal>,
      callback?: BodyResponseCallback<Schema$DirectDeal>
    ): void | GaxiosPromise<Schema$DirectDeal> {
      let params = (paramsOrCallback || {}) as Params$Resource$Directdeals$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Directdeals$Get;
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
            url: (rootUrl + '/adexchangebuyer/v1.3/directdeals/{id}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DirectDeal>(parameters, callback);
      } else {
        return createAPIRequest<Schema$DirectDeal>(parameters);
      }
    }

    /**
     * adexchangebuyer.directDeals.list
     * @desc Retrieves the authenticated user's list of direct deals.
     * @alias adexchangebuyer.directDeals.list
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Directdeals$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DirectDealsList>;
    list(
      params: Params$Resource$Directdeals$List,
      options: MethodOptions | BodyResponseCallback<Schema$DirectDealsList>,
      callback: BodyResponseCallback<Schema$DirectDealsList>
    ): void;
    list(
      params: Params$Resource$Directdeals$List,
      callback: BodyResponseCallback<Schema$DirectDealsList>
    ): void;
    list(callback: BodyResponseCallback<Schema$DirectDealsList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Directdeals$List
        | BodyResponseCallback<Schema$DirectDealsList>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$DirectDealsList>,
      callback?: BodyResponseCallback<Schema$DirectDealsList>
    ): void | GaxiosPromise<Schema$DirectDealsList> {
      let params = (paramsOrCallback || {}) as Params$Resource$Directdeals$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Directdeals$List;
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
            url: (rootUrl + '/adexchangebuyer/v1.3/directdeals').replace(
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
        createAPIRequest<Schema$DirectDealsList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$DirectDealsList>(parameters);
      }
    }
  }

  export interface Params$Resource$Directdeals$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The direct deal id
     */
    id?: string;
  }
  export interface Params$Resource$Directdeals$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
  }

  export class Resource$Performancereport {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * adexchangebuyer.performanceReport.list
     * @desc Retrieves the authenticated user's list of performance metrics.
     * @alias adexchangebuyer.performanceReport.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId The account id to get the reports.
     * @param {string} params.endDateTime The end time of the report in ISO 8601 timestamp format using UTC.
     * @param {integer=} params.maxResults Maximum number of entries returned on one result page. If not set, the default is 100. Optional.
     * @param {string=} params.pageToken A continuation token, used to page through performance reports. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response. Optional.
     * @param {string} params.startDateTime The start time of the report in ISO 8601 timestamp format using UTC.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Performancereport$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PerformanceReportList>;
    list(
      params: Params$Resource$Performancereport$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PerformanceReportList>,
      callback: BodyResponseCallback<Schema$PerformanceReportList>
    ): void;
    list(
      params: Params$Resource$Performancereport$List,
      callback: BodyResponseCallback<Schema$PerformanceReportList>
    ): void;
    list(callback: BodyResponseCallback<Schema$PerformanceReportList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Performancereport$List
        | BodyResponseCallback<Schema$PerformanceReportList>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PerformanceReportList>,
      callback?: BodyResponseCallback<Schema$PerformanceReportList>
    ): void | GaxiosPromise<Schema$PerformanceReportList> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Performancereport$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Performancereport$List;
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
            url: (rootUrl + '/adexchangebuyer/v1.3/performancereport').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'endDateTime', 'startDateTime'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PerformanceReportList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PerformanceReportList>(parameters);
      }
    }
  }

  export interface Params$Resource$Performancereport$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The account id to get the reports.
     */
    accountId?: string;
    /**
     * The end time of the report in ISO 8601 timestamp format using UTC.
     */
    endDateTime?: string;
    /**
     * Maximum number of entries returned on one result page. If not set, the default is 100. Optional.
     */
    maxResults?: number;
    /**
     * A continuation token, used to page through performance reports. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response. Optional.
     */
    pageToken?: string;
    /**
     * The start time of the report in ISO 8601 timestamp format using UTC.
     */
    startDateTime?: string;
  }

  export class Resource$Pretargetingconfig {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * adexchangebuyer.pretargetingConfig.delete
     * @desc Deletes an existing pretargeting config.
     * @alias adexchangebuyer.pretargetingConfig.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId The account id to delete the pretargeting config for.
     * @param {string} params.configId The specific id of the configuration to delete.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Pretargetingconfig$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Pretargetingconfig$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Pretargetingconfig$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Pretargetingconfig$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Pretargetingconfig$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Pretargetingconfig$Delete;
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
              '/adexchangebuyer/v1.3/pretargetingconfigs/{accountId}/{configId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'configId'],
        pathParams: ['accountId', 'configId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * adexchangebuyer.pretargetingConfig.get
     * @desc Gets a specific pretargeting configuration
     * @alias adexchangebuyer.pretargetingConfig.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId The account id to get the pretargeting config for.
     * @param {string} params.configId The specific id of the configuration to retrieve.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Pretargetingconfig$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PretargetingConfig>;
    get(
      params: Params$Resource$Pretargetingconfig$Get,
      options: MethodOptions | BodyResponseCallback<Schema$PretargetingConfig>,
      callback: BodyResponseCallback<Schema$PretargetingConfig>
    ): void;
    get(
      params: Params$Resource$Pretargetingconfig$Get,
      callback: BodyResponseCallback<Schema$PretargetingConfig>
    ): void;
    get(callback: BodyResponseCallback<Schema$PretargetingConfig>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Pretargetingconfig$Get
        | BodyResponseCallback<Schema$PretargetingConfig>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PretargetingConfig>,
      callback?: BodyResponseCallback<Schema$PretargetingConfig>
    ): void | GaxiosPromise<Schema$PretargetingConfig> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Pretargetingconfig$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Pretargetingconfig$Get;
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
              '/adexchangebuyer/v1.3/pretargetingconfigs/{accountId}/{configId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'configId'],
        pathParams: ['accountId', 'configId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PretargetingConfig>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PretargetingConfig>(parameters);
      }
    }

    /**
     * adexchangebuyer.pretargetingConfig.insert
     * @desc Inserts a new pretargeting configuration.
     * @alias adexchangebuyer.pretargetingConfig.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId The account id to insert the pretargeting config for.
     * @param {().PretargetingConfig} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Pretargetingconfig$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PretargetingConfig>;
    insert(
      params: Params$Resource$Pretargetingconfig$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$PretargetingConfig>,
      callback: BodyResponseCallback<Schema$PretargetingConfig>
    ): void;
    insert(
      params: Params$Resource$Pretargetingconfig$Insert,
      callback: BodyResponseCallback<Schema$PretargetingConfig>
    ): void;
    insert(callback: BodyResponseCallback<Schema$PretargetingConfig>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Pretargetingconfig$Insert
        | BodyResponseCallback<Schema$PretargetingConfig>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PretargetingConfig>,
      callback?: BodyResponseCallback<Schema$PretargetingConfig>
    ): void | GaxiosPromise<Schema$PretargetingConfig> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Pretargetingconfig$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Pretargetingconfig$Insert;
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
              rootUrl + '/adexchangebuyer/v1.3/pretargetingconfigs/{accountId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['accountId'],
        pathParams: ['accountId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PretargetingConfig>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PretargetingConfig>(parameters);
      }
    }

    /**
     * adexchangebuyer.pretargetingConfig.list
     * @desc Retrieves a list of the authenticated user's pretargeting configurations.
     * @alias adexchangebuyer.pretargetingConfig.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId The account id to get the pretargeting configs for.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Pretargetingconfig$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PretargetingConfigList>;
    list(
      params: Params$Resource$Pretargetingconfig$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PretargetingConfigList>,
      callback: BodyResponseCallback<Schema$PretargetingConfigList>
    ): void;
    list(
      params: Params$Resource$Pretargetingconfig$List,
      callback: BodyResponseCallback<Schema$PretargetingConfigList>
    ): void;
    list(callback: BodyResponseCallback<Schema$PretargetingConfigList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Pretargetingconfig$List
        | BodyResponseCallback<Schema$PretargetingConfigList>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PretargetingConfigList>,
      callback?: BodyResponseCallback<Schema$PretargetingConfigList>
    ): void | GaxiosPromise<Schema$PretargetingConfigList> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Pretargetingconfig$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Pretargetingconfig$List;
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
              rootUrl + '/adexchangebuyer/v1.3/pretargetingconfigs/{accountId}'
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
        createAPIRequest<Schema$PretargetingConfigList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PretargetingConfigList>(parameters);
      }
    }

    /**
     * adexchangebuyer.pretargetingConfig.patch
     * @desc Updates an existing pretargeting config. This method supports patch semantics.
     * @alias adexchangebuyer.pretargetingConfig.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId The account id to update the pretargeting config for.
     * @param {string} params.configId The specific id of the configuration to update.
     * @param {().PretargetingConfig} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Pretargetingconfig$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PretargetingConfig>;
    patch(
      params: Params$Resource$Pretargetingconfig$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$PretargetingConfig>,
      callback: BodyResponseCallback<Schema$PretargetingConfig>
    ): void;
    patch(
      params: Params$Resource$Pretargetingconfig$Patch,
      callback: BodyResponseCallback<Schema$PretargetingConfig>
    ): void;
    patch(callback: BodyResponseCallback<Schema$PretargetingConfig>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Pretargetingconfig$Patch
        | BodyResponseCallback<Schema$PretargetingConfig>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PretargetingConfig>,
      callback?: BodyResponseCallback<Schema$PretargetingConfig>
    ): void | GaxiosPromise<Schema$PretargetingConfig> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Pretargetingconfig$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Pretargetingconfig$Patch;
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
              '/adexchangebuyer/v1.3/pretargetingconfigs/{accountId}/{configId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'configId'],
        pathParams: ['accountId', 'configId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PretargetingConfig>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PretargetingConfig>(parameters);
      }
    }

    /**
     * adexchangebuyer.pretargetingConfig.update
     * @desc Updates an existing pretargeting config.
     * @alias adexchangebuyer.pretargetingConfig.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId The account id to update the pretargeting config for.
     * @param {string} params.configId The specific id of the configuration to update.
     * @param {().PretargetingConfig} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Pretargetingconfig$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PretargetingConfig>;
    update(
      params: Params$Resource$Pretargetingconfig$Update,
      options: MethodOptions | BodyResponseCallback<Schema$PretargetingConfig>,
      callback: BodyResponseCallback<Schema$PretargetingConfig>
    ): void;
    update(
      params: Params$Resource$Pretargetingconfig$Update,
      callback: BodyResponseCallback<Schema$PretargetingConfig>
    ): void;
    update(callback: BodyResponseCallback<Schema$PretargetingConfig>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Pretargetingconfig$Update
        | BodyResponseCallback<Schema$PretargetingConfig>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PretargetingConfig>,
      callback?: BodyResponseCallback<Schema$PretargetingConfig>
    ): void | GaxiosPromise<Schema$PretargetingConfig> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Pretargetingconfig$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Pretargetingconfig$Update;
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
              '/adexchangebuyer/v1.3/pretargetingconfigs/{accountId}/{configId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'configId'],
        pathParams: ['accountId', 'configId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PretargetingConfig>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PretargetingConfig>(parameters);
      }
    }
  }

  export interface Params$Resource$Pretargetingconfig$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The account id to delete the pretargeting config for.
     */
    accountId?: string;
    /**
     * The specific id of the configuration to delete.
     */
    configId?: string;
  }
  export interface Params$Resource$Pretargetingconfig$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The account id to get the pretargeting config for.
     */
    accountId?: string;
    /**
     * The specific id of the configuration to retrieve.
     */
    configId?: string;
  }
  export interface Params$Resource$Pretargetingconfig$Insert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The account id to insert the pretargeting config for.
     */
    accountId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PretargetingConfig;
  }
  export interface Params$Resource$Pretargetingconfig$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The account id to get the pretargeting configs for.
     */
    accountId?: string;
  }
  export interface Params$Resource$Pretargetingconfig$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The account id to update the pretargeting config for.
     */
    accountId?: string;
    /**
     * The specific id of the configuration to update.
     */
    configId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PretargetingConfig;
  }
  export interface Params$Resource$Pretargetingconfig$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The account id to update the pretargeting config for.
     */
    accountId?: string;
    /**
     * The specific id of the configuration to update.
     */
    configId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PretargetingConfig;
  }
}
