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
  BaseExternalAccountClient,
  GaxiosResponseWithHTTP2,
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

export namespace adsense_v1_4 {
  export interface Options extends GlobalOptions {
    version: 'v1.4';
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
      | BaseExternalAccountClient
      | GoogleAuth;

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
   * AdSense Management API
   *
   * Accesses AdSense publishers&#39; inventory and generates performance reports.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const adsense = google.adsense('v1.4');
   * ```
   */
  export class Adsense {
    context: APIRequestContext;
    accounts: Resource$Accounts;
    adclients: Resource$Adclients;
    adunits: Resource$Adunits;
    alerts: Resource$Alerts;
    customchannels: Resource$Customchannels;
    metadata: Resource$Metadata;
    payments: Resource$Payments;
    reports: Resource$Reports;
    savedadstyles: Resource$Savedadstyles;
    urlchannels: Resource$Urlchannels;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.accounts = new Resource$Accounts(this.context);
      this.adclients = new Resource$Adclients(this.context);
      this.adunits = new Resource$Adunits(this.context);
      this.alerts = new Resource$Alerts(this.context);
      this.customchannels = new Resource$Customchannels(this.context);
      this.metadata = new Resource$Metadata(this.context);
      this.payments = new Resource$Payments(this.context);
      this.reports = new Resource$Reports(this.context);
      this.savedadstyles = new Resource$Savedadstyles(this.context);
      this.urlchannels = new Resource$Urlchannels(this.context);
    }
  }

  export interface Schema$Account {
    creation_time?: string | null;
    /**
     * Unique identifier of this account.
     */
    id?: string | null;
    /**
     * Kind of resource this is, in this case adsense#account.
     */
    kind?: string | null;
    /**
     * Name of this account.
     */
    name?: string | null;
    /**
     * Whether this account is premium.
     */
    premium?: boolean | null;
    /**
     * Sub accounts of the this account.
     */
    subAccounts?: Schema$Account[];
    /**
     * AdSense timezone of this account.
     */
    timezone?: string | null;
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
     * Kind of list this is, in this case adsense#accounts.
     */
    kind?: string | null;
    /**
     * Continuation token used to page through accounts. To retrieve the next page of results, set the next request's "pageToken" value to this.
     */
    nextPageToken?: string | null;
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
     * Kind of resource this is, in this case adsense#adClient.
     */
    kind?: string | null;
    /**
     * This ad client's product code, which corresponds to the PRODUCT_CODE report dimension.
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
     * Kind of list this is, in this case adsense#adClients.
     */
    kind?: string | null;
    /**
     * Continuation token used to page through ad clients. To retrieve the next page of results, set the next request's "pageToken" value to this.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$AdCode {
    /**
     * The Auto ad code snippet. The ad code snippet.
     */
    adCode?: string | null;
    /**
     * The AMP Auto ad code snippet that goes in the body of an AMP page.
     */
    ampBody?: string | null;
    /**
     * The AMP Auto ad code snippet that goes in the head of an AMP page.
     */
    ampHead?: string | null;
    /**
     * Kind this is, in this case adsense#adCode.
     */
    kind?: string | null;
  }
  export interface Schema$AdsenseReportsGenerateResponse {
    /**
     * The averages of the report. This is the same length as any other row in the report; cells corresponding to dimension columns are empty.
     */
    averages?: string[] | null;
    /**
     * The requested end date in yyyy-mm-dd format.
     */
    endDate?: string | null;
    /**
     * The header information of the columns requested in the report. This is a list of headers; one for each dimension in the request, followed by one for each metric in the request.
     */
    headers?: Array<{currency?: string; name?: string; type?: string}> | null;
    /**
     * Kind this is, in this case adsense#report.
     */
    kind?: string | null;
    /**
     * The output rows of the report. Each row is a list of cells; one for each dimension in the request, followed by one for each metric in the request. The dimension cells contain strings, and the metric cells contain numbers.
     */
    rows?: string[][] | null;
    /**
     * The requested start date in yyyy-mm-dd format.
     */
    startDate?: string | null;
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
  export interface Schema$AdStyle {
    /**
     * The colors which are included in the style. These are represented as six hexadecimal characters, similar to HTML color codes, but without the leading hash.
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
     * Kind this is, in this case adsense#adStyle.
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
     * Settings specific to feed ads (AFF) - deprecated.
     */
    feedAdsSettings?: {
      adPosition?: string;
      frequency?: number;
      minimumWordCount?: number;
      type?: string;
    } | null;
    /**
     * Unique identifier of this ad unit. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
     */
    id?: string | null;
    /**
     * Kind of resource this is, in this case adsense#adUnit.
     */
    kind?: string | null;
    /**
     * Settings specific to WAP mobile content ads (AFMC) - deprecated.
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
     * ID of the saved ad style which holds this ad unit's style information.
     */
    savedStyleId?: string | null;
    /**
     * Status of this ad unit. Possible values are:
     * NEW: Indicates that the ad unit was created within the last seven days and does not yet have any activity associated with it.
     *
     * ACTIVE: Indicates that there has been activity on this ad unit in the last seven days.
     *
     * INACTIVE: Indicates that there has been no activity on this ad unit in the last seven days.
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
     * Kind of list this is, in this case adsense#adUnits.
     */
    kind?: string | null;
    /**
     * Continuation token used to page through ad units. To retrieve the next page of results, set the next request's "pageToken" value to this.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$Alert {
    /**
     * Unique identifier of this alert. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
     */
    id?: string | null;
    /**
     * Whether this alert can be dismissed.
     */
    isDismissible?: boolean | null;
    /**
     * Kind of resource this is, in this case adsense#alert.
     */
    kind?: string | null;
    /**
     * The localized alert message.
     */
    message?: string | null;
    /**
     * Severity of this alert. Possible values: INFO, WARNING, SEVERE.
     */
    severity?: string | null;
    /**
     * Type of this alert. Possible values: SELF_HOLD, MIGRATED_TO_BILLING3, ADDRESS_PIN_VERIFICATION, PHONE_PIN_VERIFICATION, CORPORATE_ENTITY, GRAYLISTED_PUBLISHER, API_HOLD.
     */
    type?: string | null;
  }
  export interface Schema$Alerts {
    /**
     * The alerts returned in this list response.
     */
    items?: Schema$Alert[];
    /**
     * Kind of list this is, in this case adsense#alerts.
     */
    kind?: string | null;
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
     * Kind of resource this is, in this case adsense#customChannel.
     */
    kind?: string | null;
    /**
     * Name of this custom channel.
     */
    name?: string | null;
    /**
     * The targeting information of this custom channel, if activated.
     */
    targetingInfo?: {
      adsAppearOn?: string;
      description?: string;
      location?: string;
      siteLanguage?: string;
    } | null;
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
     * Kind of list this is, in this case adsense#customChannels.
     */
    kind?: string | null;
    /**
     * Continuation token used to page through custom channels. To retrieve the next page of results, set the next request's "pageToken" value to this.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$Metadata {
    items?: Schema$ReportingMetadataEntry[];
    /**
     * Kind of list this is, in this case adsense#metadata.
     */
    kind?: string | null;
  }
  export interface Schema$Payment {
    /**
     * Unique identifier of this Payment.
     */
    id?: string | null;
    /**
     * Kind of resource this is, in this case adsense#payment.
     */
    kind?: string | null;
    /**
     * The amount to be paid.
     */
    paymentAmount?: string | null;
    /**
     * The currency code for the amount to be paid.
     */
    paymentAmountCurrencyCode?: string | null;
    /**
     * The date this payment was/will be credited to the user, or none if the payment threshold has not been met.
     */
    paymentDate?: string | null;
  }
  export interface Schema$Payments {
    /**
     * The list of Payments for the account. One or both of a) the account's most recent payment; and b) the account's upcoming payment.
     */
    items?: Schema$Payment[];
    /**
     * Kind of list this is, in this case adsense#payments.
     */
    kind?: string | null;
  }
  export interface Schema$ReportingMetadataEntry {
    /**
     * For metrics this is a list of dimension IDs which the metric is compatible with, for dimensions it is a list of compatibility groups the dimension belongs to.
     */
    compatibleDimensions?: string[] | null;
    /**
     * The names of the metrics the dimension or metric this reporting metadata entry describes is compatible with.
     */
    compatibleMetrics?: string[] | null;
    /**
     * Unique identifier of this reporting metadata entry, corresponding to the name of the appropriate dimension or metric.
     */
    id?: string | null;
    /**
     * Kind of resource this is, in this case adsense#reportingMetadataEntry.
     */
    kind?: string | null;
    /**
     * The names of the dimensions which the dimension or metric this reporting metadata entry describes requires to also be present in order for the report to be valid. Omitting these will not cause an error or warning, but may result in data which cannot be correctly interpreted.
     */
    requiredDimensions?: string[] | null;
    /**
     * The names of the metrics which the dimension or metric this reporting metadata entry describes requires to also be present in order for the report to be valid. Omitting these will not cause an error or warning, but may result in data which cannot be correctly interpreted.
     */
    requiredMetrics?: string[] | null;
    /**
     * The codes of the projects supported by the dimension or metric this reporting metadata entry describes.
     */
    supportedProducts?: string[] | null;
  }
  export interface Schema$SavedAdStyle {
    /**
     * The AdStyle itself.
     */
    adStyle?: Schema$AdStyle;
    /**
     * Unique identifier of this saved ad style. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
     */
    id?: string | null;
    /**
     * Kind of resource this is, in this case adsense#savedAdStyle.
     */
    kind?: string | null;
    /**
     * The user selected name of this SavedAdStyle.
     */
    name?: string | null;
  }
  export interface Schema$SavedAdStyles {
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string | null;
    /**
     * The saved ad styles returned in this list response.
     */
    items?: Schema$SavedAdStyle[];
    /**
     * Kind of list this is, in this case adsense#savedAdStyles.
     */
    kind?: string | null;
    /**
     * Continuation token used to page through ad units. To retrieve the next page of results, set the next request's "pageToken" value to this.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$SavedReport {
    /**
     * Unique identifier of this saved report.
     */
    id?: string | null;
    /**
     * Kind of resource this is, in this case adsense#savedReport.
     */
    kind?: string | null;
    /**
     * This saved report's name.
     */
    name?: string | null;
  }
  export interface Schema$SavedReports {
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string | null;
    /**
     * The saved reports returned in this list response.
     */
    items?: Schema$SavedReport[];
    /**
     * Kind of list this is, in this case adsense#savedReports.
     */
    kind?: string | null;
    /**
     * Continuation token used to page through saved reports. To retrieve the next page of results, set the next request's "pageToken" value to this.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$UrlChannel {
    /**
     * Unique identifier of this URL channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
     */
    id?: string | null;
    /**
     * Kind of resource this is, in this case adsense#urlChannel.
     */
    kind?: string | null;
    /**
     * URL Pattern of this URL channel. Does not include "http://" or "https://". Example: www.example.com/home
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
     * Kind of list this is, in this case adsense#urlChannels.
     */
    kind?: string | null;
    /**
     * Continuation token used to page through URL channels. To retrieve the next page of results, set the next request's "pageToken" value to this.
     */
    nextPageToken?: string | null;
  }

  export class Resource$Accounts {
    context: APIRequestContext;
    adclients: Resource$Accounts$Adclients;
    adunits: Resource$Accounts$Adunits;
    alerts: Resource$Accounts$Alerts;
    customchannels: Resource$Accounts$Customchannels;
    payments: Resource$Accounts$Payments;
    reports: Resource$Accounts$Reports;
    savedadstyles: Resource$Accounts$Savedadstyles;
    urlchannels: Resource$Accounts$Urlchannels;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.adclients = new Resource$Accounts$Adclients(this.context);
      this.adunits = new Resource$Accounts$Adunits(this.context);
      this.alerts = new Resource$Accounts$Alerts(this.context);
      this.customchannels = new Resource$Accounts$Customchannels(this.context);
      this.payments = new Resource$Accounts$Payments(this.context);
      this.reports = new Resource$Accounts$Reports(this.context);
      this.savedadstyles = new Resource$Accounts$Savedadstyles(this.context);
      this.urlchannels = new Resource$Accounts$Urlchannels(this.context);
    }

    /**
     * Get information about the selected AdSense account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsense.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsense = google.adsense('v1.4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/adsense',
     *       'https://www.googleapis.com/auth/adsense.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsense.accounts.get({
     *     // Account to get information about.
     *     accountId: 'placeholder-value',
     *     // Whether the tree of sub accounts should be returned.
     *     tree: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "creation_time": "my_creation_time",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "premium": false,
     *   //   "subAccounts": [],
     *   //   "timezone": "my_timezone"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Accounts$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Accounts$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Account>>;
    get(
      params: Params$Resource$Accounts$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$Account>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Account>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Account>
        | BodyResponseCallback<Readable>
    ): void | Promise<GaxiosResponseWithHTTP2<Schema$Account>> | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
            url: (rootUrl + '/adsense/v1.4/accounts/{accountId}').replace(
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
        createAPIRequest<Schema$Account>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Account>(parameters);
      }
    }

    /**
     * List all accounts available to this AdSense account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsense.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsense = google.adsense('v1.4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/adsense',
     *       'https://www.googleapis.com/auth/adsense.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsense.accounts.list({
     *     // The maximum number of accounts to include in the response, used for paging.
     *     maxResults: 'placeholder-value',
     *     // A continuation token, used to page through accounts. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Accounts$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Accounts$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Accounts>>;
    list(
      params: Params$Resource$Accounts$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$Accounts>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Accounts>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Accounts>
        | BodyResponseCallback<Readable>
    ): void | Promise<GaxiosResponseWithHTTP2<Schema$Accounts>> | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
            url: (rootUrl + '/adsense/v1.4/accounts').replace(
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
        createAPIRequest<Schema$Accounts>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Accounts>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Get extends StandardParameters {
    /**
     * Account to get information about.
     */
    accountId?: string;
    /**
     * Whether the tree of sub accounts should be returned.
     */
    tree?: boolean;
  }
  export interface Params$Resource$Accounts$List extends StandardParameters {
    /**
     * The maximum number of accounts to include in the response, used for paging.
     */
    maxResults?: number;
    /**
     * A continuation token, used to page through accounts. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     */
    pageToken?: string;
  }

  export class Resource$Accounts$Adclients {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get Auto ad code for a given ad client.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsense.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsense = google.adsense('v1.4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/adsense',
     *       'https://www.googleapis.com/auth/adsense.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsense.accounts.adclients.getAdCode({
     *     // Account which contains the ad client.
     *     accountId: 'placeholder-value',
     *     // Ad client to get the code for.
     *     adClientId: 'placeholder-value',
     *     // Tag partner to include in the ad code snippet.
     *     tagPartner: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adCode": "my_adCode",
     *   //   "ampBody": "my_ampBody",
     *   //   "ampHead": "my_ampHead",
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getAdCode(
      params: Params$Resource$Accounts$Adclients$Getadcode,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getAdCode(
      params?: Params$Resource$Accounts$Adclients$Getadcode,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AdCode>>;
    getAdCode(
      params: Params$Resource$Accounts$Adclients$Getadcode,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getAdCode(
      params: Params$Resource$Accounts$Adclients$Getadcode,
      options: MethodOptions | BodyResponseCallback<Schema$AdCode>,
      callback: BodyResponseCallback<Schema$AdCode>
    ): void;
    getAdCode(
      params: Params$Resource$Accounts$Adclients$Getadcode,
      callback: BodyResponseCallback<Schema$AdCode>
    ): void;
    getAdCode(callback: BodyResponseCallback<Schema$AdCode>): void;
    getAdCode(
      paramsOrCallback?:
        | Params$Resource$Accounts$Adclients$Getadcode
        | BodyResponseCallback<Schema$AdCode>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AdCode>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AdCode>
        | BodyResponseCallback<Readable>
    ): void | Promise<GaxiosResponseWithHTTP2<Schema$AdCode>> | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Adclients$Getadcode;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Adclients$Getadcode;
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
              '/adsense/v1.4/accounts/{accountId}/adclients/{adClientId}/adcode'
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
        createAPIRequest<Schema$AdCode>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AdCode>(parameters);
      }
    }

    /**
     * List all ad clients in the specified account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsense.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsense = google.adsense('v1.4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/adsense',
     *       'https://www.googleapis.com/auth/adsense.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsense.accounts.adclients.list({
     *     // Account for which to list ad clients.
     *     accountId: 'placeholder-value',
     *     // The maximum number of ad clients to include in the response, used for paging.
     *     maxResults: 'placeholder-value',
     *     // A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Accounts$Adclients$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Accounts$Adclients$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AdClients>>;
    list(
      params: Params$Resource$Accounts$Adclients$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$AdClients>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AdClients>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AdClients>
        | BodyResponseCallback<Readable>
    ): void | Promise<GaxiosResponseWithHTTP2<Schema$AdClients>> | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
              rootUrl + '/adsense/v1.4/accounts/{accountId}/adclients'
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
        createAPIRequest<Schema$AdClients>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AdClients>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Adclients$Getadcode
    extends StandardParameters {
    /**
     * Account which contains the ad client.
     */
    accountId?: string;
    /**
     * Ad client to get the code for.
     */
    adClientId?: string;
    /**
     * Tag partner to include in the ad code snippet.
     */
    tagPartner?: string;
  }
  export interface Params$Resource$Accounts$Adclients$List
    extends StandardParameters {
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
    customchannels: Resource$Accounts$Adunits$Customchannels;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.customchannels = new Resource$Accounts$Adunits$Customchannels(
        this.context
      );
    }

    /**
     * Gets the specified ad unit in the specified ad client for the specified account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsense.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsense = google.adsense('v1.4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/adsense',
     *       'https://www.googleapis.com/auth/adsense.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsense.accounts.adunits.get({
     *     // Account to which the ad client belongs.
     *     accountId: 'placeholder-value',
     *     // Ad client for which to get the ad unit.
     *     adClientId: 'placeholder-value',
     *     // Ad unit to retrieve.
     *     adUnitId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "code": "my_code",
     *   //   "contentAdsSettings": {},
     *   //   "customStyle": {},
     *   //   "feedAdsSettings": {},
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "mobileContentAdsSettings": {},
     *   //   "name": "my_name",
     *   //   "savedStyleId": "my_savedStyleId",
     *   //   "status": "my_status"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Accounts$Adunits$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Accounts$Adunits$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AdUnit>>;
    get(
      params: Params$Resource$Accounts$Adunits$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$AdUnit>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AdUnit>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AdUnit>
        | BodyResponseCallback<Readable>
    ): void | Promise<GaxiosResponseWithHTTP2<Schema$AdUnit>> | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
              '/adsense/v1.4/accounts/{accountId}/adclients/{adClientId}/adunits/{adUnitId}'
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
        createAPIRequest<Schema$AdUnit>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AdUnit>(parameters);
      }
    }

    /**
     * Get ad code for the specified ad unit.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsense.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsense = google.adsense('v1.4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/adsense',
     *       'https://www.googleapis.com/auth/adsense.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsense.accounts.adunits.getAdCode({
     *     // Account which contains the ad client.
     *     accountId: 'placeholder-value',
     *     // Ad client with contains the ad unit.
     *     adClientId: 'placeholder-value',
     *     // Ad unit to get the code for.
     *     adUnitId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adCode": "my_adCode",
     *   //   "ampBody": "my_ampBody",
     *   //   "ampHead": "my_ampHead",
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getAdCode(
      params: Params$Resource$Accounts$Adunits$Getadcode,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getAdCode(
      params?: Params$Resource$Accounts$Adunits$Getadcode,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AdCode>>;
    getAdCode(
      params: Params$Resource$Accounts$Adunits$Getadcode,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$AdCode>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AdCode>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AdCode>
        | BodyResponseCallback<Readable>
    ): void | Promise<GaxiosResponseWithHTTP2<Schema$AdCode>> | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
              '/adsense/v1.4/accounts/{accountId}/adclients/{adClientId}/adunits/{adUnitId}/adcode'
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
        createAPIRequest<Schema$AdCode>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AdCode>(parameters);
      }
    }

    /**
     * List all ad units in the specified ad client for the specified account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsense.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsense = google.adsense('v1.4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/adsense',
     *       'https://www.googleapis.com/auth/adsense.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsense.accounts.adunits.list({
     *     // Account to which the ad client belongs.
     *     accountId: 'placeholder-value',
     *     // Ad client for which to list ad units.
     *     adClientId: 'placeholder-value',
     *     // Whether to include inactive ad units. Default: true.
     *     includeInactive: 'placeholder-value',
     *     // The maximum number of ad units to include in the response, used for paging.
     *     maxResults: 'placeholder-value',
     *     // A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Accounts$Adunits$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Accounts$Adunits$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AdUnits>>;
    list(
      params: Params$Resource$Accounts$Adunits$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$AdUnits>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AdUnits>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AdUnits>
        | BodyResponseCallback<Readable>
    ): void | Promise<GaxiosResponseWithHTTP2<Schema$AdUnits>> | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
              '/adsense/v1.4/accounts/{accountId}/adclients/{adClientId}/adunits'
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
        createAPIRequest<Schema$AdUnits>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AdUnits>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Adunits$Get
    extends StandardParameters {
    /**
     * Account to which the ad client belongs.
     */
    accountId?: string;
    /**
     * Ad client for which to get the ad unit.
     */
    adClientId?: string;
    /**
     * Ad unit to retrieve.
     */
    adUnitId?: string;
  }
  export interface Params$Resource$Accounts$Adunits$Getadcode
    extends StandardParameters {
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
  }
  export interface Params$Resource$Accounts$Adunits$List
    extends StandardParameters {
    /**
     * Account to which the ad client belongs.
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

  export class Resource$Accounts$Adunits$Customchannels {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * List all custom channels which the specified ad unit belongs to.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsense.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsense = google.adsense('v1.4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/adsense',
     *       'https://www.googleapis.com/auth/adsense.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsense.accounts.adunits.customchannels.list({
     *     // Account to which the ad client belongs.
     *     accountId: 'placeholder-value',
     *     // Ad client which contains the ad unit.
     *     adClientId: 'placeholder-value',
     *     // Ad unit for which to list custom channels.
     *     adUnitId: 'placeholder-value',
     *     // The maximum number of custom channels to include in the response, used for paging.
     *     maxResults: 'placeholder-value',
     *     // A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Accounts$Adunits$Customchannels$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Accounts$Adunits$Customchannels$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CustomChannels>>;
    list(
      params: Params$Resource$Accounts$Adunits$Customchannels$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Adunits$Customchannels$List,
      options: MethodOptions | BodyResponseCallback<Schema$CustomChannels>,
      callback: BodyResponseCallback<Schema$CustomChannels>
    ): void;
    list(
      params: Params$Resource$Accounts$Adunits$Customchannels$List,
      callback: BodyResponseCallback<Schema$CustomChannels>
    ): void;
    list(callback: BodyResponseCallback<Schema$CustomChannels>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Adunits$Customchannels$List
        | BodyResponseCallback<Schema$CustomChannels>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CustomChannels>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CustomChannels>
        | BodyResponseCallback<Readable>
    ): void | Promise<GaxiosResponseWithHTTP2<Schema$CustomChannels>> | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Adunits$Customchannels$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Adunits$Customchannels$List;
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
              '/adsense/v1.4/accounts/{accountId}/adclients/{adClientId}/adunits/{adUnitId}/customchannels'
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
        createAPIRequest<Schema$CustomChannels>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CustomChannels>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Adunits$Customchannels$List
    extends StandardParameters {
    /**
     * Account to which the ad client belongs.
     */
    accountId?: string;
    /**
     * Ad client which contains the ad unit.
     */
    adClientId?: string;
    /**
     * Ad unit for which to list custom channels.
     */
    adUnitId?: string;
    /**
     * The maximum number of custom channels to include in the response, used for paging.
     */
    maxResults?: number;
    /**
     * A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     */
    pageToken?: string;
  }

  export class Resource$Accounts$Alerts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Dismiss (delete) the specified alert from the specified publisher AdSense account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsense.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsense = google.adsense('v1.4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adsense'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsense.accounts.alerts.delete({
     *     // Account which contains the ad unit.
     *     accountId: 'placeholder-value',
     *     // Alert to delete.
     *     alertId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Accounts$Alerts$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Accounts$Alerts$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    delete(
      params: Params$Resource$Accounts$Alerts$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Accounts$Alerts$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Accounts$Alerts$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Accounts$Alerts$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | Promise<GaxiosResponseWithHTTP2<void>> | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Alerts$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Alerts$Delete;
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
              rootUrl + '/adsense/v1.4/accounts/{accountId}/alerts/{alertId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'alertId'],
        pathParams: ['accountId', 'alertId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * List the alerts for the specified AdSense account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsense.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsense = google.adsense('v1.4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/adsense',
     *       'https://www.googleapis.com/auth/adsense.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsense.accounts.alerts.list({
     *     // Account for which to retrieve the alerts.
     *     accountId: 'placeholder-value',
     *     // The locale to use for translating alert messages. The account locale will be used if this is not supplied. The AdSense default (English) will be used if the supplied locale is invalid or unsupported.
     *     locale: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Accounts$Alerts$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Accounts$Alerts$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Alerts>>;
    list(
      params: Params$Resource$Accounts$Alerts$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Alerts$List,
      options: MethodOptions | BodyResponseCallback<Schema$Alerts>,
      callback: BodyResponseCallback<Schema$Alerts>
    ): void;
    list(
      params: Params$Resource$Accounts$Alerts$List,
      callback: BodyResponseCallback<Schema$Alerts>
    ): void;
    list(callback: BodyResponseCallback<Schema$Alerts>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Alerts$List
        | BodyResponseCallback<Schema$Alerts>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Alerts>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Alerts>
        | BodyResponseCallback<Readable>
    ): void | Promise<GaxiosResponseWithHTTP2<Schema$Alerts>> | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Alerts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Alerts$List;
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
              rootUrl + '/adsense/v1.4/accounts/{accountId}/alerts'
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
        createAPIRequest<Schema$Alerts>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Alerts>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Alerts$Delete
    extends StandardParameters {
    /**
     * Account which contains the ad unit.
     */
    accountId?: string;
    /**
     * Alert to delete.
     */
    alertId?: string;
  }
  export interface Params$Resource$Accounts$Alerts$List
    extends StandardParameters {
    /**
     * Account for which to retrieve the alerts.
     */
    accountId?: string;
    /**
     * The locale to use for translating alert messages. The account locale will be used if this is not supplied. The AdSense default (English) will be used if the supplied locale is invalid or unsupported.
     */
    locale?: string;
  }

  export class Resource$Accounts$Customchannels {
    context: APIRequestContext;
    adunits: Resource$Accounts$Customchannels$Adunits;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.adunits = new Resource$Accounts$Customchannels$Adunits(this.context);
    }

    /**
     * Get the specified custom channel from the specified ad client for the specified account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsense.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsense = google.adsense('v1.4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/adsense',
     *       'https://www.googleapis.com/auth/adsense.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsense.accounts.customchannels.get({
     *     // Account to which the ad client belongs.
     *     accountId: 'placeholder-value',
     *     // Ad client which contains the custom channel.
     *     adClientId: 'placeholder-value',
     *     // Custom channel to retrieve.
     *     customChannelId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "code": "my_code",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "targetingInfo": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Accounts$Customchannels$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Accounts$Customchannels$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CustomChannel>>;
    get(
      params: Params$Resource$Accounts$Customchannels$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounts$Customchannels$Get,
      options: MethodOptions | BodyResponseCallback<Schema$CustomChannel>,
      callback: BodyResponseCallback<Schema$CustomChannel>
    ): void;
    get(
      params: Params$Resource$Accounts$Customchannels$Get,
      callback: BodyResponseCallback<Schema$CustomChannel>
    ): void;
    get(callback: BodyResponseCallback<Schema$CustomChannel>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Customchannels$Get
        | BodyResponseCallback<Schema$CustomChannel>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CustomChannel>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CustomChannel>
        | BodyResponseCallback<Readable>
    ): void | Promise<GaxiosResponseWithHTTP2<Schema$CustomChannel>> | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Customchannels$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Customchannels$Get;
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
              '/adsense/v1.4/accounts/{accountId}/adclients/{adClientId}/customchannels/{customChannelId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'adClientId', 'customChannelId'],
        pathParams: ['accountId', 'adClientId', 'customChannelId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CustomChannel>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CustomChannel>(parameters);
      }
    }

    /**
     * List all custom channels in the specified ad client for the specified account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsense.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsense = google.adsense('v1.4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/adsense',
     *       'https://www.googleapis.com/auth/adsense.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsense.accounts.customchannels.list({
     *     // Account to which the ad client belongs.
     *     accountId: 'placeholder-value',
     *     // Ad client for which to list custom channels.
     *     adClientId: 'placeholder-value',
     *     // The maximum number of custom channels to include in the response, used for paging.
     *     maxResults: 'placeholder-value',
     *     // A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Accounts$Customchannels$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Accounts$Customchannels$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CustomChannels>>;
    list(
      params: Params$Resource$Accounts$Customchannels$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Customchannels$List,
      options: MethodOptions | BodyResponseCallback<Schema$CustomChannels>,
      callback: BodyResponseCallback<Schema$CustomChannels>
    ): void;
    list(
      params: Params$Resource$Accounts$Customchannels$List,
      callback: BodyResponseCallback<Schema$CustomChannels>
    ): void;
    list(callback: BodyResponseCallback<Schema$CustomChannels>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Customchannels$List
        | BodyResponseCallback<Schema$CustomChannels>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CustomChannels>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CustomChannels>
        | BodyResponseCallback<Readable>
    ): void | Promise<GaxiosResponseWithHTTP2<Schema$CustomChannels>> | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Customchannels$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Customchannels$List;
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
              '/adsense/v1.4/accounts/{accountId}/adclients/{adClientId}/customchannels'
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
        createAPIRequest<Schema$CustomChannels>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CustomChannels>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Customchannels$Get
    extends StandardParameters {
    /**
     * Account to which the ad client belongs.
     */
    accountId?: string;
    /**
     * Ad client which contains the custom channel.
     */
    adClientId?: string;
    /**
     * Custom channel to retrieve.
     */
    customChannelId?: string;
  }
  export interface Params$Resource$Accounts$Customchannels$List
    extends StandardParameters {
    /**
     * Account to which the ad client belongs.
     */
    accountId?: string;
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

  export class Resource$Accounts$Customchannels$Adunits {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * List all ad units in the specified custom channel.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsense.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsense = google.adsense('v1.4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/adsense',
     *       'https://www.googleapis.com/auth/adsense.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsense.accounts.customchannels.adunits.list({
     *     // Account to which the ad client belongs.
     *     accountId: 'placeholder-value',
     *     // Ad client which contains the custom channel.
     *     adClientId: 'placeholder-value',
     *     // Custom channel for which to list ad units.
     *     customChannelId: 'placeholder-value',
     *     // Whether to include inactive ad units. Default: true.
     *     includeInactive: 'placeholder-value',
     *     // The maximum number of ad units to include in the response, used for paging.
     *     maxResults: 'placeholder-value',
     *     // A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Accounts$Customchannels$Adunits$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Accounts$Customchannels$Adunits$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AdUnits>>;
    list(
      params: Params$Resource$Accounts$Customchannels$Adunits$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Customchannels$Adunits$List,
      options: MethodOptions | BodyResponseCallback<Schema$AdUnits>,
      callback: BodyResponseCallback<Schema$AdUnits>
    ): void;
    list(
      params: Params$Resource$Accounts$Customchannels$Adunits$List,
      callback: BodyResponseCallback<Schema$AdUnits>
    ): void;
    list(callback: BodyResponseCallback<Schema$AdUnits>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Customchannels$Adunits$List
        | BodyResponseCallback<Schema$AdUnits>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AdUnits>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AdUnits>
        | BodyResponseCallback<Readable>
    ): void | Promise<GaxiosResponseWithHTTP2<Schema$AdUnits>> | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Customchannels$Adunits$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Customchannels$Adunits$List;
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
              '/adsense/v1.4/accounts/{accountId}/adclients/{adClientId}/customchannels/{customChannelId}/adunits'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'adClientId', 'customChannelId'],
        pathParams: ['accountId', 'adClientId', 'customChannelId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AdUnits>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AdUnits>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Customchannels$Adunits$List
    extends StandardParameters {
    /**
     * Account to which the ad client belongs.
     */
    accountId?: string;
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
     * The maximum number of ad units to include in the response, used for paging.
     */
    maxResults?: number;
    /**
     * A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     */
    pageToken?: string;
  }

  export class Resource$Accounts$Payments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * List the payments for the specified AdSense account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsense.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsense = google.adsense('v1.4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/adsense',
     *       'https://www.googleapis.com/auth/adsense.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsense.accounts.payments.list({
     *     // Account for which to retrieve the payments.
     *     accountId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Accounts$Payments$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Accounts$Payments$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Payments>>;
    list(
      params: Params$Resource$Accounts$Payments$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Payments$List,
      options: MethodOptions | BodyResponseCallback<Schema$Payments>,
      callback: BodyResponseCallback<Schema$Payments>
    ): void;
    list(
      params: Params$Resource$Accounts$Payments$List,
      callback: BodyResponseCallback<Schema$Payments>
    ): void;
    list(callback: BodyResponseCallback<Schema$Payments>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Payments$List
        | BodyResponseCallback<Schema$Payments>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Payments>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Payments>
        | BodyResponseCallback<Readable>
    ): void | Promise<GaxiosResponseWithHTTP2<Schema$Payments>> | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Payments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Payments$List;
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
              rootUrl + '/adsense/v1.4/accounts/{accountId}/payments'
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
        createAPIRequest<Schema$Payments>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Payments>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Payments$List
    extends StandardParameters {
    /**
     * Account for which to retrieve the payments.
     */
    accountId?: string;
  }

  export class Resource$Accounts$Reports {
    context: APIRequestContext;
    saved: Resource$Accounts$Reports$Saved;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.saved = new Resource$Accounts$Reports$Saved(this.context);
    }

    /**
     * Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsense.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsense = google.adsense('v1.4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/adsense',
     *       'https://www.googleapis.com/auth/adsense.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsense.accounts.reports.generate({
     *     // Account upon which to report.
     *     accountId: 'placeholder-value',
     *     // Optional currency to use when reporting on monetary metrics. Defaults to the account's currency if not set.
     *     currency: '[a-zA-Z]+',
     *     // Dimensions to base the report on.
     *     dimension: '[a-zA-Z_]+',
     *     // End of the date range to report on in "YYYY-MM-DD" format, inclusive.
     *     endDate:
     *       'd{4}-d{2}-d{2}|(today|startOfMonth|startOfYear)(([-+]d+[dwmy]){0,3}?)|(latest-(d{2})-(d{2})(-d+y)?)|(latest-latest-(d{2})(-d+m)?)',
     *     // Filters to be run on the report.
     *     filter: '[a-zA-Z_]+(==|=@).+',
     *     // Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
     *     locale: '[a-zA-Z_]+',
     *     // The maximum number of rows of report data to return.
     *     maxResults: 'placeholder-value',
     *     // Numeric columns to include in the report.
     *     metric: '[a-zA-Z_]+',
     *     // The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
     *     sort: '(+|-)?[a-zA-Z_]+',
     *     // Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
     *     startDate:
     *       'd{4}-d{2}-d{2}|(today|startOfMonth|startOfYear)(([-+]d+[dwmy]){0,3}?)|(latest-(d{2})-(d{2})(-d+y)?)|(latest-latest-(d{2})(-d+m)?)',
     *     // Index of the first row of report data to return.
     *     startIndex: 'placeholder-value',
     *     // Whether the report should be generated in the AdSense account's local timezone. If false default PST/PDT timezone will be used.
     *     useTimezoneReporting: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "averages": [],
     *   //   "endDate": "my_endDate",
     *   //   "headers": [],
     *   //   "kind": "my_kind",
     *   //   "rows": [],
     *   //   "startDate": "my_startDate",
     *   //   "totalMatchedRows": "my_totalMatchedRows",
     *   //   "totals": [],
     *   //   "warnings": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    generate(
      params: Params$Resource$Accounts$Reports$Generate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    generate(
      params?: Params$Resource$Accounts$Reports$Generate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AdsenseReportsGenerateResponse>>;
    generate(
      params: Params$Resource$Accounts$Reports$Generate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    generate(
      params: Params$Resource$Accounts$Reports$Generate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AdsenseReportsGenerateResponse>,
      callback: BodyResponseCallback<Schema$AdsenseReportsGenerateResponse>
    ): void;
    generate(
      params: Params$Resource$Accounts$Reports$Generate,
      callback: BodyResponseCallback<Schema$AdsenseReportsGenerateResponse>
    ): void;
    generate(
      callback: BodyResponseCallback<Schema$AdsenseReportsGenerateResponse>
    ): void;
    generate(
      paramsOrCallback?:
        | Params$Resource$Accounts$Reports$Generate
        | BodyResponseCallback<Schema$AdsenseReportsGenerateResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AdsenseReportsGenerateResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AdsenseReportsGenerateResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AdsenseReportsGenerateResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
              rootUrl + '/adsense/v1.4/accounts/{accountId}/reports'
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
        createAPIRequest<Schema$AdsenseReportsGenerateResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AdsenseReportsGenerateResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Accounts$Reports$Generate
    extends StandardParameters {
    /**
     * Account upon which to report.
     */
    accountId?: string;
    /**
     * Optional currency to use when reporting on monetary metrics. Defaults to the account's currency if not set.
     */
    currency?: string;
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
    /**
     * Whether the report should be generated in the AdSense account's local timezone. If false default PST/PDT timezone will be used.
     */
    useTimezoneReporting?: boolean;
  }

  export class Resource$Accounts$Reports$Saved {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Generate an AdSense report based on the saved report ID sent in the query parameters.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsense.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsense = google.adsense('v1.4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/adsense',
     *       'https://www.googleapis.com/auth/adsense.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsense.accounts.reports.saved.generate({
     *     // Account to which the saved reports belong.
     *     accountId: 'placeholder-value',
     *     // Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
     *     locale: '[a-zA-Z_]+',
     *     // The maximum number of rows of report data to return.
     *     maxResults: 'placeholder-value',
     *     // The saved report to retrieve.
     *     savedReportId: 'placeholder-value',
     *     // Index of the first row of report data to return.
     *     startIndex: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "averages": [],
     *   //   "endDate": "my_endDate",
     *   //   "headers": [],
     *   //   "kind": "my_kind",
     *   //   "rows": [],
     *   //   "startDate": "my_startDate",
     *   //   "totalMatchedRows": "my_totalMatchedRows",
     *   //   "totals": [],
     *   //   "warnings": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    generate(
      params: Params$Resource$Accounts$Reports$Saved$Generate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    generate(
      params?: Params$Resource$Accounts$Reports$Saved$Generate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AdsenseReportsGenerateResponse>>;
    generate(
      params: Params$Resource$Accounts$Reports$Saved$Generate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    generate(
      params: Params$Resource$Accounts$Reports$Saved$Generate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AdsenseReportsGenerateResponse>,
      callback: BodyResponseCallback<Schema$AdsenseReportsGenerateResponse>
    ): void;
    generate(
      params: Params$Resource$Accounts$Reports$Saved$Generate,
      callback: BodyResponseCallback<Schema$AdsenseReportsGenerateResponse>
    ): void;
    generate(
      callback: BodyResponseCallback<Schema$AdsenseReportsGenerateResponse>
    ): void;
    generate(
      paramsOrCallback?:
        | Params$Resource$Accounts$Reports$Saved$Generate
        | BodyResponseCallback<Schema$AdsenseReportsGenerateResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AdsenseReportsGenerateResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AdsenseReportsGenerateResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AdsenseReportsGenerateResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Reports$Saved$Generate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Reports$Saved$Generate;
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
              '/adsense/v1.4/accounts/{accountId}/reports/{savedReportId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'savedReportId'],
        pathParams: ['accountId', 'savedReportId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AdsenseReportsGenerateResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AdsenseReportsGenerateResponse>(
          parameters
        );
      }
    }

    /**
     * List all saved reports in the specified AdSense account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsense.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsense = google.adsense('v1.4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/adsense',
     *       'https://www.googleapis.com/auth/adsense.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsense.accounts.reports.saved.list({
     *     // Account to which the saved reports belong.
     *     accountId: 'placeholder-value',
     *     // The maximum number of saved reports to include in the response, used for paging.
     *     maxResults: 'placeholder-value',
     *     // A continuation token, used to page through saved reports. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Accounts$Reports$Saved$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Accounts$Reports$Saved$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SavedReports>>;
    list(
      params: Params$Resource$Accounts$Reports$Saved$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Reports$Saved$List,
      options: MethodOptions | BodyResponseCallback<Schema$SavedReports>,
      callback: BodyResponseCallback<Schema$SavedReports>
    ): void;
    list(
      params: Params$Resource$Accounts$Reports$Saved$List,
      callback: BodyResponseCallback<Schema$SavedReports>
    ): void;
    list(callback: BodyResponseCallback<Schema$SavedReports>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Reports$Saved$List
        | BodyResponseCallback<Schema$SavedReports>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SavedReports>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SavedReports>
        | BodyResponseCallback<Readable>
    ): void | Promise<GaxiosResponseWithHTTP2<Schema$SavedReports>> | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Reports$Saved$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Reports$Saved$List;
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
              rootUrl + '/adsense/v1.4/accounts/{accountId}/reports/saved'
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
        createAPIRequest<Schema$SavedReports>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SavedReports>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Reports$Saved$Generate
    extends StandardParameters {
    /**
     * Account to which the saved reports belong.
     */
    accountId?: string;
    /**
     * Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
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
  export interface Params$Resource$Accounts$Reports$Saved$List
    extends StandardParameters {
    /**
     * Account to which the saved reports belong.
     */
    accountId?: string;
    /**
     * The maximum number of saved reports to include in the response, used for paging.
     */
    maxResults?: number;
    /**
     * A continuation token, used to page through saved reports. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     */
    pageToken?: string;
  }

  export class Resource$Accounts$Savedadstyles {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * List a specific saved ad style for the specified account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsense.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsense = google.adsense('v1.4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/adsense',
     *       'https://www.googleapis.com/auth/adsense.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsense.accounts.savedadstyles.get({
     *     // Account for which to get the saved ad style.
     *     accountId: 'placeholder-value',
     *     // Saved ad style to retrieve.
     *     savedAdStyleId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adStyle": {},
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Accounts$Savedadstyles$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Accounts$Savedadstyles$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SavedAdStyle>>;
    get(
      params: Params$Resource$Accounts$Savedadstyles$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounts$Savedadstyles$Get,
      options: MethodOptions | BodyResponseCallback<Schema$SavedAdStyle>,
      callback: BodyResponseCallback<Schema$SavedAdStyle>
    ): void;
    get(
      params: Params$Resource$Accounts$Savedadstyles$Get,
      callback: BodyResponseCallback<Schema$SavedAdStyle>
    ): void;
    get(callback: BodyResponseCallback<Schema$SavedAdStyle>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Savedadstyles$Get
        | BodyResponseCallback<Schema$SavedAdStyle>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SavedAdStyle>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SavedAdStyle>
        | BodyResponseCallback<Readable>
    ): void | Promise<GaxiosResponseWithHTTP2<Schema$SavedAdStyle>> | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Savedadstyles$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Savedadstyles$Get;
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
              '/adsense/v1.4/accounts/{accountId}/savedadstyles/{savedAdStyleId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'savedAdStyleId'],
        pathParams: ['accountId', 'savedAdStyleId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SavedAdStyle>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SavedAdStyle>(parameters);
      }
    }

    /**
     * List all saved ad styles in the specified account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsense.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsense = google.adsense('v1.4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/adsense',
     *       'https://www.googleapis.com/auth/adsense.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsense.accounts.savedadstyles.list({
     *     // Account for which to list saved ad styles.
     *     accountId: 'placeholder-value',
     *     // The maximum number of saved ad styles to include in the response, used for paging.
     *     maxResults: 'placeholder-value',
     *     // A continuation token, used to page through saved ad styles. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Accounts$Savedadstyles$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Accounts$Savedadstyles$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SavedAdStyles>>;
    list(
      params: Params$Resource$Accounts$Savedadstyles$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Savedadstyles$List,
      options: MethodOptions | BodyResponseCallback<Schema$SavedAdStyles>,
      callback: BodyResponseCallback<Schema$SavedAdStyles>
    ): void;
    list(
      params: Params$Resource$Accounts$Savedadstyles$List,
      callback: BodyResponseCallback<Schema$SavedAdStyles>
    ): void;
    list(callback: BodyResponseCallback<Schema$SavedAdStyles>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Savedadstyles$List
        | BodyResponseCallback<Schema$SavedAdStyles>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SavedAdStyles>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SavedAdStyles>
        | BodyResponseCallback<Readable>
    ): void | Promise<GaxiosResponseWithHTTP2<Schema$SavedAdStyles>> | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Savedadstyles$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Savedadstyles$List;
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
              rootUrl + '/adsense/v1.4/accounts/{accountId}/savedadstyles'
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
        createAPIRequest<Schema$SavedAdStyles>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SavedAdStyles>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Savedadstyles$Get
    extends StandardParameters {
    /**
     * Account for which to get the saved ad style.
     */
    accountId?: string;
    /**
     * Saved ad style to retrieve.
     */
    savedAdStyleId?: string;
  }
  export interface Params$Resource$Accounts$Savedadstyles$List
    extends StandardParameters {
    /**
     * Account for which to list saved ad styles.
     */
    accountId?: string;
    /**
     * The maximum number of saved ad styles to include in the response, used for paging.
     */
    maxResults?: number;
    /**
     * A continuation token, used to page through saved ad styles. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     */
    pageToken?: string;
  }

  export class Resource$Accounts$Urlchannels {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * List all URL channels in the specified ad client for the specified account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsense.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsense = google.adsense('v1.4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/adsense',
     *       'https://www.googleapis.com/auth/adsense.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsense.accounts.urlchannels.list({
     *     // Account to which the ad client belongs.
     *     accountId: 'placeholder-value',
     *     // Ad client for which to list URL channels.
     *     adClientId: 'placeholder-value',
     *     // The maximum number of URL channels to include in the response, used for paging.
     *     maxResults: 'placeholder-value',
     *     // A continuation token, used to page through URL channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Accounts$Urlchannels$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Accounts$Urlchannels$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$UrlChannels>>;
    list(
      params: Params$Resource$Accounts$Urlchannels$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Urlchannels$List,
      options: MethodOptions | BodyResponseCallback<Schema$UrlChannels>,
      callback: BodyResponseCallback<Schema$UrlChannels>
    ): void;
    list(
      params: Params$Resource$Accounts$Urlchannels$List,
      callback: BodyResponseCallback<Schema$UrlChannels>
    ): void;
    list(callback: BodyResponseCallback<Schema$UrlChannels>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Urlchannels$List
        | BodyResponseCallback<Schema$UrlChannels>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UrlChannels>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UrlChannels>
        | BodyResponseCallback<Readable>
    ): void | Promise<GaxiosResponseWithHTTP2<Schema$UrlChannels>> | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Urlchannels$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Urlchannels$List;
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
              '/adsense/v1.4/accounts/{accountId}/adclients/{adClientId}/urlchannels'
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
        createAPIRequest<Schema$UrlChannels>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UrlChannels>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Urlchannels$List
    extends StandardParameters {
    /**
     * Account to which the ad client belongs.
     */
    accountId?: string;
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

  export class Resource$Adclients {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * List all ad clients in this AdSense account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsense.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsense = google.adsense('v1.4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/adsense',
     *       'https://www.googleapis.com/auth/adsense.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsense.adclients.list({
     *     // The maximum number of ad clients to include in the response, used for paging.
     *     maxResults: 'placeholder-value',
     *     // A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Adclients$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Adclients$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AdClients>>;
    list(
      params: Params$Resource$Adclients$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$AdClients>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AdClients>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AdClients>
        | BodyResponseCallback<Readable>
    ): void | Promise<GaxiosResponseWithHTTP2<Schema$AdClients>> | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
            url: (rootUrl + '/adsense/v1.4/adclients').replace(
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
        createAPIRequest<Schema$AdClients>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AdClients>(parameters);
      }
    }
  }

  export interface Params$Resource$Adclients$List extends StandardParameters {
    /**
     * The maximum number of ad clients to include in the response, used for paging.
     */
    maxResults?: number;
    /**
     * A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     */
    pageToken?: string;
  }

  export class Resource$Adunits {
    context: APIRequestContext;
    customchannels: Resource$Adunits$Customchannels;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.customchannels = new Resource$Adunits$Customchannels(this.context);
    }

    /**
     * Gets the specified ad unit in the specified ad client.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsense.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsense = google.adsense('v1.4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/adsense',
     *       'https://www.googleapis.com/auth/adsense.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsense.adunits.get({
     *     // Ad client for which to get the ad unit.
     *     adClientId: 'placeholder-value',
     *     // Ad unit to retrieve.
     *     adUnitId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "code": "my_code",
     *   //   "contentAdsSettings": {},
     *   //   "customStyle": {},
     *   //   "feedAdsSettings": {},
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "mobileContentAdsSettings": {},
     *   //   "name": "my_name",
     *   //   "savedStyleId": "my_savedStyleId",
     *   //   "status": "my_status"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Adunits$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Adunits$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AdUnit>>;
    get(
      params: Params$Resource$Adunits$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Adunits$Get,
      options: MethodOptions | BodyResponseCallback<Schema$AdUnit>,
      callback: BodyResponseCallback<Schema$AdUnit>
    ): void;
    get(
      params: Params$Resource$Adunits$Get,
      callback: BodyResponseCallback<Schema$AdUnit>
    ): void;
    get(callback: BodyResponseCallback<Schema$AdUnit>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Adunits$Get
        | BodyResponseCallback<Schema$AdUnit>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AdUnit>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AdUnit>
        | BodyResponseCallback<Readable>
    ): void | Promise<GaxiosResponseWithHTTP2<Schema$AdUnit>> | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
            url: (
              rootUrl +
              '/adsense/v1.4/adclients/{adClientId}/adunits/{adUnitId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['adClientId', 'adUnitId'],
        pathParams: ['adClientId', 'adUnitId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AdUnit>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AdUnit>(parameters);
      }
    }

    /**
     * Get ad code for the specified ad unit.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsense.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsense = google.adsense('v1.4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/adsense',
     *       'https://www.googleapis.com/auth/adsense.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsense.adunits.getAdCode({
     *     // Ad client with contains the ad unit.
     *     adClientId: 'placeholder-value',
     *     // Ad unit to get the code for.
     *     adUnitId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adCode": "my_adCode",
     *   //   "ampBody": "my_ampBody",
     *   //   "ampHead": "my_ampHead",
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getAdCode(
      params: Params$Resource$Adunits$Getadcode,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getAdCode(
      params?: Params$Resource$Adunits$Getadcode,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AdCode>>;
    getAdCode(
      params: Params$Resource$Adunits$Getadcode,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getAdCode(
      params: Params$Resource$Adunits$Getadcode,
      options: MethodOptions | BodyResponseCallback<Schema$AdCode>,
      callback: BodyResponseCallback<Schema$AdCode>
    ): void;
    getAdCode(
      params: Params$Resource$Adunits$Getadcode,
      callback: BodyResponseCallback<Schema$AdCode>
    ): void;
    getAdCode(callback: BodyResponseCallback<Schema$AdCode>): void;
    getAdCode(
      paramsOrCallback?:
        | Params$Resource$Adunits$Getadcode
        | BodyResponseCallback<Schema$AdCode>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AdCode>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AdCode>
        | BodyResponseCallback<Readable>
    ): void | Promise<GaxiosResponseWithHTTP2<Schema$AdCode>> | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Adunits$Getadcode;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Adunits$Getadcode;
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
              '/adsense/v1.4/adclients/{adClientId}/adunits/{adUnitId}/adcode'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['adClientId', 'adUnitId'],
        pathParams: ['adClientId', 'adUnitId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AdCode>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AdCode>(parameters);
      }
    }

    /**
     * List all ad units in the specified ad client for this AdSense account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsense.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsense = google.adsense('v1.4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/adsense',
     *       'https://www.googleapis.com/auth/adsense.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsense.adunits.list({
     *     // Ad client for which to list ad units.
     *     adClientId: 'placeholder-value',
     *     // Whether to include inactive ad units. Default: true.
     *     includeInactive: 'placeholder-value',
     *     // The maximum number of ad units to include in the response, used for paging.
     *     maxResults: 'placeholder-value',
     *     // A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Adunits$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Adunits$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AdUnits>>;
    list(
      params: Params$Resource$Adunits$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Adunits$List,
      options: MethodOptions | BodyResponseCallback<Schema$AdUnits>,
      callback: BodyResponseCallback<Schema$AdUnits>
    ): void;
    list(
      params: Params$Resource$Adunits$List,
      callback: BodyResponseCallback<Schema$AdUnits>
    ): void;
    list(callback: BodyResponseCallback<Schema$AdUnits>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Adunits$List
        | BodyResponseCallback<Schema$AdUnits>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AdUnits>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AdUnits>
        | BodyResponseCallback<Readable>
    ): void | Promise<GaxiosResponseWithHTTP2<Schema$AdUnits>> | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
            url: (
              rootUrl + '/adsense/v1.4/adclients/{adClientId}/adunits'
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
        createAPIRequest<Schema$AdUnits>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AdUnits>(parameters);
      }
    }
  }

  export interface Params$Resource$Adunits$Get extends StandardParameters {
    /**
     * Ad client for which to get the ad unit.
     */
    adClientId?: string;
    /**
     * Ad unit to retrieve.
     */
    adUnitId?: string;
  }
  export interface Params$Resource$Adunits$Getadcode
    extends StandardParameters {
    /**
     * Ad client with contains the ad unit.
     */
    adClientId?: string;
    /**
     * Ad unit to get the code for.
     */
    adUnitId?: string;
  }
  export interface Params$Resource$Adunits$List extends StandardParameters {
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

  export class Resource$Adunits$Customchannels {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * List all custom channels which the specified ad unit belongs to.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsense.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsense = google.adsense('v1.4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/adsense',
     *       'https://www.googleapis.com/auth/adsense.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsense.adunits.customchannels.list({
     *     // Ad client which contains the ad unit.
     *     adClientId: 'placeholder-value',
     *     // Ad unit for which to list custom channels.
     *     adUnitId: 'placeholder-value',
     *     // The maximum number of custom channels to include in the response, used for paging.
     *     maxResults: 'placeholder-value',
     *     // A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Adunits$Customchannels$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Adunits$Customchannels$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CustomChannels>>;
    list(
      params: Params$Resource$Adunits$Customchannels$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Adunits$Customchannels$List,
      options: MethodOptions | BodyResponseCallback<Schema$CustomChannels>,
      callback: BodyResponseCallback<Schema$CustomChannels>
    ): void;
    list(
      params: Params$Resource$Adunits$Customchannels$List,
      callback: BodyResponseCallback<Schema$CustomChannels>
    ): void;
    list(callback: BodyResponseCallback<Schema$CustomChannels>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Adunits$Customchannels$List
        | BodyResponseCallback<Schema$CustomChannels>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CustomChannels>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CustomChannels>
        | BodyResponseCallback<Readable>
    ): void | Promise<GaxiosResponseWithHTTP2<Schema$CustomChannels>> | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Adunits$Customchannels$List;
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
            url: (
              rootUrl +
              '/adsense/v1.4/adclients/{adClientId}/adunits/{adUnitId}/customchannels'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['adClientId', 'adUnitId'],
        pathParams: ['adClientId', 'adUnitId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CustomChannels>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CustomChannels>(parameters);
      }
    }
  }

  export interface Params$Resource$Adunits$Customchannels$List
    extends StandardParameters {
    /**
     * Ad client which contains the ad unit.
     */
    adClientId?: string;
    /**
     * Ad unit for which to list custom channels.
     */
    adUnitId?: string;
    /**
     * The maximum number of custom channels to include in the response, used for paging.
     */
    maxResults?: number;
    /**
     * A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     */
    pageToken?: string;
  }

  export class Resource$Alerts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Dismiss (delete) the specified alert from the publisher's AdSense account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsense.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsense = google.adsense('v1.4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adsense'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsense.alerts.delete({
     *     // Alert to delete.
     *     alertId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Alerts$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Alerts$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    delete(
      params: Params$Resource$Alerts$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Alerts$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Alerts$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Alerts$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | Promise<GaxiosResponseWithHTTP2<void>> | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Alerts$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Alerts$Delete;
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
            url: (rootUrl + '/adsense/v1.4/alerts/{alertId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['alertId'],
        pathParams: ['alertId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * List the alerts for this AdSense account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsense.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsense = google.adsense('v1.4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/adsense',
     *       'https://www.googleapis.com/auth/adsense.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsense.alerts.list({
     *     // The locale to use for translating alert messages. The account locale will be used if this is not supplied. The AdSense default (English) will be used if the supplied locale is invalid or unsupported.
     *     locale: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Alerts$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Alerts$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Alerts>>;
    list(
      params: Params$Resource$Alerts$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Alerts$List,
      options: MethodOptions | BodyResponseCallback<Schema$Alerts>,
      callback: BodyResponseCallback<Schema$Alerts>
    ): void;
    list(
      params: Params$Resource$Alerts$List,
      callback: BodyResponseCallback<Schema$Alerts>
    ): void;
    list(callback: BodyResponseCallback<Schema$Alerts>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Alerts$List
        | BodyResponseCallback<Schema$Alerts>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Alerts>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Alerts>
        | BodyResponseCallback<Readable>
    ): void | Promise<GaxiosResponseWithHTTP2<Schema$Alerts>> | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Alerts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Alerts$List;
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
            url: (rootUrl + '/adsense/v1.4/alerts').replace(
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
        createAPIRequest<Schema$Alerts>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Alerts>(parameters);
      }
    }
  }

  export interface Params$Resource$Alerts$Delete extends StandardParameters {
    /**
     * Alert to delete.
     */
    alertId?: string;
  }
  export interface Params$Resource$Alerts$List extends StandardParameters {
    /**
     * The locale to use for translating alert messages. The account locale will be used if this is not supplied. The AdSense default (English) will be used if the supplied locale is invalid or unsupported.
     */
    locale?: string;
  }

  export class Resource$Customchannels {
    context: APIRequestContext;
    adunits: Resource$Customchannels$Adunits;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.adunits = new Resource$Customchannels$Adunits(this.context);
    }

    /**
     * Get the specified custom channel from the specified ad client.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsense.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsense = google.adsense('v1.4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/adsense',
     *       'https://www.googleapis.com/auth/adsense.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsense.customchannels.get({
     *     // Ad client which contains the custom channel.
     *     adClientId: 'placeholder-value',
     *     // Custom channel to retrieve.
     *     customChannelId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "code": "my_code",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "targetingInfo": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Customchannels$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Customchannels$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CustomChannel>>;
    get(
      params: Params$Resource$Customchannels$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$CustomChannel>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CustomChannel>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CustomChannel>
        | BodyResponseCallback<Readable>
    ): void | Promise<GaxiosResponseWithHTTP2<Schema$CustomChannel>> | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
              '/adsense/v1.4/adclients/{adClientId}/customchannels/{customChannelId}'
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
        createAPIRequest<Schema$CustomChannel>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CustomChannel>(parameters);
      }
    }

    /**
     * List all custom channels in the specified ad client for this AdSense account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsense.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsense = google.adsense('v1.4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/adsense',
     *       'https://www.googleapis.com/auth/adsense.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsense.customchannels.list({
     *     // Ad client for which to list custom channels.
     *     adClientId: 'placeholder-value',
     *     // The maximum number of custom channels to include in the response, used for paging.
     *     maxResults: 'placeholder-value',
     *     // A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Customchannels$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Customchannels$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CustomChannels>>;
    list(
      params: Params$Resource$Customchannels$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$CustomChannels>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CustomChannels>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CustomChannels>
        | BodyResponseCallback<Readable>
    ): void | Promise<GaxiosResponseWithHTTP2<Schema$CustomChannels>> | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
              rootUrl + '/adsense/v1.4/adclients/{adClientId}/customchannels'
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
        createAPIRequest<Schema$CustomChannels>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CustomChannels>(parameters);
      }
    }
  }

  export interface Params$Resource$Customchannels$Get
    extends StandardParameters {
    /**
     * Ad client which contains the custom channel.
     */
    adClientId?: string;
    /**
     * Custom channel to retrieve.
     */
    customChannelId?: string;
  }
  export interface Params$Resource$Customchannels$List
    extends StandardParameters {
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

  export class Resource$Customchannels$Adunits {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * List all ad units in the specified custom channel.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsense.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsense = google.adsense('v1.4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/adsense',
     *       'https://www.googleapis.com/auth/adsense.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsense.customchannels.adunits.list({
     *     // Ad client which contains the custom channel.
     *     adClientId: 'placeholder-value',
     *     // Custom channel for which to list ad units.
     *     customChannelId: 'placeholder-value',
     *     // Whether to include inactive ad units. Default: true.
     *     includeInactive: 'placeholder-value',
     *     // The maximum number of ad units to include in the response, used for paging.
     *     maxResults: 'placeholder-value',
     *     // A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Customchannels$Adunits$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Customchannels$Adunits$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AdUnits>>;
    list(
      params: Params$Resource$Customchannels$Adunits$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Customchannels$Adunits$List,
      options: MethodOptions | BodyResponseCallback<Schema$AdUnits>,
      callback: BodyResponseCallback<Schema$AdUnits>
    ): void;
    list(
      params: Params$Resource$Customchannels$Adunits$List,
      callback: BodyResponseCallback<Schema$AdUnits>
    ): void;
    list(callback: BodyResponseCallback<Schema$AdUnits>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Customchannels$Adunits$List
        | BodyResponseCallback<Schema$AdUnits>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AdUnits>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AdUnits>
        | BodyResponseCallback<Readable>
    ): void | Promise<GaxiosResponseWithHTTP2<Schema$AdUnits>> | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customchannels$Adunits$List;
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
            url: (
              rootUrl +
              '/adsense/v1.4/adclients/{adClientId}/customchannels/{customChannelId}/adunits'
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
        createAPIRequest<Schema$AdUnits>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AdUnits>(parameters);
      }
    }
  }

  export interface Params$Resource$Customchannels$Adunits$List
    extends StandardParameters {
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
     * The maximum number of ad units to include in the response, used for paging.
     */
    maxResults?: number;
    /**
     * A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     */
    pageToken?: string;
  }

  export class Resource$Metadata {
    context: APIRequestContext;
    dimensions: Resource$Metadata$Dimensions;
    metrics: Resource$Metadata$Metrics;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.dimensions = new Resource$Metadata$Dimensions(this.context);
      this.metrics = new Resource$Metadata$Metrics(this.context);
    }
  }

  export class Resource$Metadata$Dimensions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * List the metadata for the dimensions available to this AdSense account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsense.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsense = google.adsense('v1.4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/adsense',
     *       'https://www.googleapis.com/auth/adsense.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsense.metadata.dimensions.list({});
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Metadata$Dimensions$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Metadata$Dimensions$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Metadata>>;
    list(
      params: Params$Resource$Metadata$Dimensions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Metadata$Dimensions$List,
      options: MethodOptions | BodyResponseCallback<Schema$Metadata>,
      callback: BodyResponseCallback<Schema$Metadata>
    ): void;
    list(
      params: Params$Resource$Metadata$Dimensions$List,
      callback: BodyResponseCallback<Schema$Metadata>
    ): void;
    list(callback: BodyResponseCallback<Schema$Metadata>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Metadata$Dimensions$List
        | BodyResponseCallback<Schema$Metadata>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Metadata>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Metadata>
        | BodyResponseCallback<Readable>
    ): void | Promise<GaxiosResponseWithHTTP2<Schema$Metadata>> | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Metadata$Dimensions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Metadata$Dimensions$List;
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
            url: (rootUrl + '/adsense/v1.4/metadata/dimensions').replace(
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
        createAPIRequest<Schema$Metadata>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Metadata>(parameters);
      }
    }
  }

  export interface Params$Resource$Metadata$Dimensions$List
    extends StandardParameters {}

  export class Resource$Metadata$Metrics {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * List the metadata for the metrics available to this AdSense account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsense.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsense = google.adsense('v1.4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/adsense',
     *       'https://www.googleapis.com/auth/adsense.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsense.metadata.metrics.list({});
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Metadata$Metrics$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Metadata$Metrics$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Metadata>>;
    list(
      params: Params$Resource$Metadata$Metrics$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Metadata$Metrics$List,
      options: MethodOptions | BodyResponseCallback<Schema$Metadata>,
      callback: BodyResponseCallback<Schema$Metadata>
    ): void;
    list(
      params: Params$Resource$Metadata$Metrics$List,
      callback: BodyResponseCallback<Schema$Metadata>
    ): void;
    list(callback: BodyResponseCallback<Schema$Metadata>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Metadata$Metrics$List
        | BodyResponseCallback<Schema$Metadata>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Metadata>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Metadata>
        | BodyResponseCallback<Readable>
    ): void | Promise<GaxiosResponseWithHTTP2<Schema$Metadata>> | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Metadata$Metrics$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Metadata$Metrics$List;
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
            url: (rootUrl + '/adsense/v1.4/metadata/metrics').replace(
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
        createAPIRequest<Schema$Metadata>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Metadata>(parameters);
      }
    }
  }

  export interface Params$Resource$Metadata$Metrics$List
    extends StandardParameters {}

  export class Resource$Payments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * List the payments for this AdSense account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsense.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsense = google.adsense('v1.4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/adsense',
     *       'https://www.googleapis.com/auth/adsense.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsense.payments.list({});
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Payments$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Payments$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Payments>>;
    list(
      params: Params$Resource$Payments$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Payments$List,
      options: MethodOptions | BodyResponseCallback<Schema$Payments>,
      callback: BodyResponseCallback<Schema$Payments>
    ): void;
    list(
      params: Params$Resource$Payments$List,
      callback: BodyResponseCallback<Schema$Payments>
    ): void;
    list(callback: BodyResponseCallback<Schema$Payments>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Payments$List
        | BodyResponseCallback<Schema$Payments>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Payments>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Payments>
        | BodyResponseCallback<Readable>
    ): void | Promise<GaxiosResponseWithHTTP2<Schema$Payments>> | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Payments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Payments$List;
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
            url: (rootUrl + '/adsense/v1.4/payments').replace(
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
        createAPIRequest<Schema$Payments>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Payments>(parameters);
      }
    }
  }

  export interface Params$Resource$Payments$List extends StandardParameters {}

  export class Resource$Reports {
    context: APIRequestContext;
    saved: Resource$Reports$Saved;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.saved = new Resource$Reports$Saved(this.context);
    }

    /**
     * Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsense.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsense = google.adsense('v1.4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/adsense',
     *       'https://www.googleapis.com/auth/adsense.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsense.reports.generate({
     *     // Accounts upon which to report.
     *     accountId: 'placeholder-value',
     *     // Optional currency to use when reporting on monetary metrics. Defaults to the account's currency if not set.
     *     currency: '[a-zA-Z]+',
     *     // Dimensions to base the report on.
     *     dimension: '[a-zA-Z_]+',
     *     // End of the date range to report on in "YYYY-MM-DD" format, inclusive.
     *     endDate:
     *       'd{4}-d{2}-d{2}|(today|startOfMonth|startOfYear)(([-+]d+[dwmy]){0,3}?)|(latest-(d{2})-(d{2})(-d+y)?)|(latest-latest-(d{2})(-d+m)?)',
     *     // Filters to be run on the report.
     *     filter: '[a-zA-Z_]+(==|=@).+',
     *     // Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
     *     locale: '[a-zA-Z_]+',
     *     // The maximum number of rows of report data to return.
     *     maxResults: 'placeholder-value',
     *     // Numeric columns to include in the report.
     *     metric: '[a-zA-Z_]+',
     *     // The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
     *     sort: '(+|-)?[a-zA-Z_]+',
     *     // Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
     *     startDate:
     *       'd{4}-d{2}-d{2}|(today|startOfMonth|startOfYear)(([-+]d+[dwmy]){0,3}?)|(latest-(d{2})-(d{2})(-d+y)?)|(latest-latest-(d{2})(-d+m)?)',
     *     // Index of the first row of report data to return.
     *     startIndex: 'placeholder-value',
     *     // Whether the report should be generated in the AdSense account's local timezone. If false default PST/PDT timezone will be used.
     *     useTimezoneReporting: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "averages": [],
     *   //   "endDate": "my_endDate",
     *   //   "headers": [],
     *   //   "kind": "my_kind",
     *   //   "rows": [],
     *   //   "startDate": "my_startDate",
     *   //   "totalMatchedRows": "my_totalMatchedRows",
     *   //   "totals": [],
     *   //   "warnings": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    generate(
      params: Params$Resource$Reports$Generate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    generate(
      params?: Params$Resource$Reports$Generate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AdsenseReportsGenerateResponse>>;
    generate(
      params: Params$Resource$Reports$Generate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    generate(
      params: Params$Resource$Reports$Generate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AdsenseReportsGenerateResponse>,
      callback: BodyResponseCallback<Schema$AdsenseReportsGenerateResponse>
    ): void;
    generate(
      params: Params$Resource$Reports$Generate,
      callback: BodyResponseCallback<Schema$AdsenseReportsGenerateResponse>
    ): void;
    generate(
      callback: BodyResponseCallback<Schema$AdsenseReportsGenerateResponse>
    ): void;
    generate(
      paramsOrCallback?:
        | Params$Resource$Reports$Generate
        | BodyResponseCallback<Schema$AdsenseReportsGenerateResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AdsenseReportsGenerateResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AdsenseReportsGenerateResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AdsenseReportsGenerateResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
            url: (rootUrl + '/adsense/v1.4/reports').replace(
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
        createAPIRequest<Schema$AdsenseReportsGenerateResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AdsenseReportsGenerateResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Reports$Generate extends StandardParameters {
    /**
     * Accounts upon which to report.
     */
    accountId?: string[];
    /**
     * Optional currency to use when reporting on monetary metrics. Defaults to the account's currency if not set.
     */
    currency?: string;
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
    /**
     * Whether the report should be generated in the AdSense account's local timezone. If false default PST/PDT timezone will be used.
     */
    useTimezoneReporting?: boolean;
  }

  export class Resource$Reports$Saved {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Generate an AdSense report based on the saved report ID sent in the query parameters.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsense.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsense = google.adsense('v1.4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/adsense',
     *       'https://www.googleapis.com/auth/adsense.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsense.reports.saved.generate({
     *     // Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
     *     locale: '[a-zA-Z_]+',
     *     // The maximum number of rows of report data to return.
     *     maxResults: 'placeholder-value',
     *     // The saved report to retrieve.
     *     savedReportId: 'placeholder-value',
     *     // Index of the first row of report data to return.
     *     startIndex: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "averages": [],
     *   //   "endDate": "my_endDate",
     *   //   "headers": [],
     *   //   "kind": "my_kind",
     *   //   "rows": [],
     *   //   "startDate": "my_startDate",
     *   //   "totalMatchedRows": "my_totalMatchedRows",
     *   //   "totals": [],
     *   //   "warnings": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    generate(
      params: Params$Resource$Reports$Saved$Generate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    generate(
      params?: Params$Resource$Reports$Saved$Generate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AdsenseReportsGenerateResponse>>;
    generate(
      params: Params$Resource$Reports$Saved$Generate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    generate(
      params: Params$Resource$Reports$Saved$Generate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AdsenseReportsGenerateResponse>,
      callback: BodyResponseCallback<Schema$AdsenseReportsGenerateResponse>
    ): void;
    generate(
      params: Params$Resource$Reports$Saved$Generate,
      callback: BodyResponseCallback<Schema$AdsenseReportsGenerateResponse>
    ): void;
    generate(
      callback: BodyResponseCallback<Schema$AdsenseReportsGenerateResponse>
    ): void;
    generate(
      paramsOrCallback?:
        | Params$Resource$Reports$Saved$Generate
        | BodyResponseCallback<Schema$AdsenseReportsGenerateResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AdsenseReportsGenerateResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AdsenseReportsGenerateResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AdsenseReportsGenerateResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Reports$Saved$Generate;
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
            url: (rootUrl + '/adsense/v1.4/reports/{savedReportId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['savedReportId'],
        pathParams: ['savedReportId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AdsenseReportsGenerateResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AdsenseReportsGenerateResponse>(
          parameters
        );
      }
    }

    /**
     * List all saved reports in this AdSense account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsense.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsense = google.adsense('v1.4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/adsense',
     *       'https://www.googleapis.com/auth/adsense.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsense.reports.saved.list({
     *     // The maximum number of saved reports to include in the response, used for paging.
     *     maxResults: 'placeholder-value',
     *     // A continuation token, used to page through saved reports. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Reports$Saved$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Reports$Saved$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SavedReports>>;
    list(
      params: Params$Resource$Reports$Saved$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Reports$Saved$List,
      options: MethodOptions | BodyResponseCallback<Schema$SavedReports>,
      callback: BodyResponseCallback<Schema$SavedReports>
    ): void;
    list(
      params: Params$Resource$Reports$Saved$List,
      callback: BodyResponseCallback<Schema$SavedReports>
    ): void;
    list(callback: BodyResponseCallback<Schema$SavedReports>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Reports$Saved$List
        | BodyResponseCallback<Schema$SavedReports>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SavedReports>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SavedReports>
        | BodyResponseCallback<Readable>
    ): void | Promise<GaxiosResponseWithHTTP2<Schema$SavedReports>> | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Reports$Saved$List;
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
            url: (rootUrl + '/adsense/v1.4/reports/saved').replace(
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
        createAPIRequest<Schema$SavedReports>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SavedReports>(parameters);
      }
    }
  }

  export interface Params$Resource$Reports$Saved$Generate
    extends StandardParameters {
    /**
     * Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
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
  export interface Params$Resource$Reports$Saved$List
    extends StandardParameters {
    /**
     * The maximum number of saved reports to include in the response, used for paging.
     */
    maxResults?: number;
    /**
     * A continuation token, used to page through saved reports. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     */
    pageToken?: string;
  }

  export class Resource$Savedadstyles {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get a specific saved ad style from the user's account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsense.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsense = google.adsense('v1.4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/adsense',
     *       'https://www.googleapis.com/auth/adsense.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsense.savedadstyles.get({
     *     // Saved ad style to retrieve.
     *     savedAdStyleId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adStyle": {},
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Savedadstyles$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Savedadstyles$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SavedAdStyle>>;
    get(
      params: Params$Resource$Savedadstyles$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Savedadstyles$Get,
      options: MethodOptions | BodyResponseCallback<Schema$SavedAdStyle>,
      callback: BodyResponseCallback<Schema$SavedAdStyle>
    ): void;
    get(
      params: Params$Resource$Savedadstyles$Get,
      callback: BodyResponseCallback<Schema$SavedAdStyle>
    ): void;
    get(callback: BodyResponseCallback<Schema$SavedAdStyle>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Savedadstyles$Get
        | BodyResponseCallback<Schema$SavedAdStyle>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SavedAdStyle>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SavedAdStyle>
        | BodyResponseCallback<Readable>
    ): void | Promise<GaxiosResponseWithHTTP2<Schema$SavedAdStyle>> | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Savedadstyles$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Savedadstyles$Get;
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
              rootUrl + '/adsense/v1.4/savedadstyles/{savedAdStyleId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['savedAdStyleId'],
        pathParams: ['savedAdStyleId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SavedAdStyle>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SavedAdStyle>(parameters);
      }
    }

    /**
     * List all saved ad styles in the user's account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsense.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsense = google.adsense('v1.4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/adsense',
     *       'https://www.googleapis.com/auth/adsense.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsense.savedadstyles.list({
     *     // The maximum number of saved ad styles to include in the response, used for paging.
     *     maxResults: 'placeholder-value',
     *     // A continuation token, used to page through saved ad styles. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Savedadstyles$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Savedadstyles$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SavedAdStyles>>;
    list(
      params: Params$Resource$Savedadstyles$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Savedadstyles$List,
      options: MethodOptions | BodyResponseCallback<Schema$SavedAdStyles>,
      callback: BodyResponseCallback<Schema$SavedAdStyles>
    ): void;
    list(
      params: Params$Resource$Savedadstyles$List,
      callback: BodyResponseCallback<Schema$SavedAdStyles>
    ): void;
    list(callback: BodyResponseCallback<Schema$SavedAdStyles>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Savedadstyles$List
        | BodyResponseCallback<Schema$SavedAdStyles>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SavedAdStyles>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SavedAdStyles>
        | BodyResponseCallback<Readable>
    ): void | Promise<GaxiosResponseWithHTTP2<Schema$SavedAdStyles>> | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Savedadstyles$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Savedadstyles$List;
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
            url: (rootUrl + '/adsense/v1.4/savedadstyles').replace(
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
        createAPIRequest<Schema$SavedAdStyles>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SavedAdStyles>(parameters);
      }
    }
  }

  export interface Params$Resource$Savedadstyles$Get
    extends StandardParameters {
    /**
     * Saved ad style to retrieve.
     */
    savedAdStyleId?: string;
  }
  export interface Params$Resource$Savedadstyles$List
    extends StandardParameters {
    /**
     * The maximum number of saved ad styles to include in the response, used for paging.
     */
    maxResults?: number;
    /**
     * A continuation token, used to page through saved ad styles. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     */
    pageToken?: string;
  }

  export class Resource$Urlchannels {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * List all URL channels in the specified ad client for this AdSense account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsense.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsense = google.adsense('v1.4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/adsense',
     *       'https://www.googleapis.com/auth/adsense.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsense.urlchannels.list({
     *     // Ad client for which to list URL channels.
     *     adClientId: 'placeholder-value',
     *     // The maximum number of URL channels to include in the response, used for paging.
     *     maxResults: 'placeholder-value',
     *     // A continuation token, used to page through URL channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Urlchannels$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Urlchannels$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$UrlChannels>>;
    list(
      params: Params$Resource$Urlchannels$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$UrlChannels>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UrlChannels>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UrlChannels>
        | BodyResponseCallback<Readable>
    ): void | Promise<GaxiosResponseWithHTTP2<Schema$UrlChannels>> | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
              rootUrl + '/adsense/v1.4/adclients/{adClientId}/urlchannels'
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
        createAPIRequest<Schema$UrlChannels>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UrlChannels>(parameters);
      }
    }
  }

  export interface Params$Resource$Urlchannels$List extends StandardParameters {
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
