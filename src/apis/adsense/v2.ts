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

export namespace adsense_v2 {
  export interface Options extends GlobalOptions {
    version: 'v2';
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
   * AdSense Management API
   *
   * The AdSense Management API allows publishers to access their inventory and run earnings and performance reports.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const adsense = google.adsense('v2');
   * ```
   */
  export class Adsense {
    context: APIRequestContext;
    accounts: Resource$Accounts;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.accounts = new Resource$Accounts(this.context);
    }
  }

  /**
   * Representation of an account.
   */
  export interface Schema$Account {
    /**
     * Output only. Creation time of the account.
     */
    createTime?: string | null;
    /**
     * Output only. Display name of this account.
     */
    displayName?: string | null;
    /**
     * Resource name of the account. Format: accounts/pub-[0-9]+
     */
    name?: string | null;
    /**
     * Output only. Outstanding tasks that need to be completed as part of the sign-up process for a new account. e.g. "billing-profile-creation", "phone-pin-verification".
     */
    pendingTasks?: string[] | null;
    /**
     * Output only. Whether this account is premium.
     */
    premium?: boolean | null;
    /**
     * The account time zone, as used by reporting. For more information, see [changing the time zone of your reports](https://support.google.com/adsense/answer/9830725).
     */
    timeZone?: Schema$TimeZone;
  }
  /**
   * Representation of an ad client. An ad client represents a user's subscription with a specific AdSense product.
   */
  export interface Schema$AdClient {
    /**
     * Resource name of the ad client. Format: accounts/{account\}/adclient/{adclient\}
     */
    name?: string | null;
    /**
     * Output only. Product code of the ad client. For example, "AFC" for AdSense for Content.
     */
    productCode?: string | null;
    /**
     * Output only. Unique ID of the ad client as used in the `AD_CLIENT_ID` reporting dimension. Present only if the ad client supports reporting.
     */
    reportingDimensionId?: string | null;
  }
  /**
   * Representation of the AdSense code for a given ad client. For more information, see [About the AdSense code](https://support.google.com/adsense/answer/9274634).
   */
  export interface Schema$AdClientAdCode {
    /**
     * Output only. The AdSense code snippet to add to the head of an HTML page.
     */
    adCode?: string | null;
    /**
     * Output only. The AdSense code snippet to add to the body of an AMP page.
     */
    ampBody?: string | null;
    /**
     * Output only. The AdSense code snippet to add to the head of an AMP page.
     */
    ampHead?: string | null;
  }
  /**
   * Representation of an ad unit. An ad unit represents a saved ad unit with a specific set of ad settings that have been customized within an account.
   */
  export interface Schema$AdUnit {
    /**
     * Settings specific to content ads (AFC).
     */
    contentAdsSettings?: Schema$ContentAdsSettings;
    /**
     * Display name of the ad unit, as provided when the ad unit was created.
     */
    displayName?: string | null;
    /**
     * Resource name of the ad unit. Format: accounts/{account\}/adclient/{adclient\}/adunits/{adunit\}
     */
    name?: string | null;
    /**
     * Output only. Unique ID of the ad unit as used in the `AD_UNIT_ID` reporting dimension.
     */
    reportingDimensionId?: string | null;
    /**
     * State of the ad unit.
     */
    state?: string | null;
  }
  /**
   * Representation of the AdSense code for a given ad unit.
   */
  export interface Schema$AdUnitAdCode {
    /**
     * Output only. The AdSense code snippet to add to the body of an HTML page.
     */
    adCode?: string | null;
  }
  /**
   * Representation of an alert.
   */
  export interface Schema$Alert {
    /**
     * Output only. The localized alert message. This may contain HTML markup, such as phrase elements or links.
     */
    message?: string | null;
    /**
     * Resource name of the alert. Format: accounts/{account\}/alerts/{alert\}
     */
    name?: string | null;
    /**
     * Output only. Severity of this alert.
     */
    severity?: string | null;
    /**
     * Output only. Type of alert. This identifies the broad type of this alert, and provides a stable machine-readable identifier that will not be translated. For example, "payment-hold".
     */
    type?: string | null;
  }
  /**
   * Cell representation.
   */
  export interface Schema$Cell {
    /**
     * Value in the cell. The dimension cells contain strings, and the metric cells contain numbers.
     */
    value?: string | null;
  }
  /**
   * Settings specific to content ads (AFC).
   */
  export interface Schema$ContentAdsSettings {
    /**
     * Size of the ad unit. e.g. "728x90", "1x3" (for responsive ad units).
     */
    size?: string | null;
    /**
     * Type of the ad unit.
     */
    type?: string | null;
  }
  /**
   * Representation of a custom channel.
   */
  export interface Schema$CustomChannel {
    /**
     * Display name of the custom channel.
     */
    displayName?: string | null;
    /**
     * Resource name of the custom channel. Format: accounts/{account\}/adclients/{adclient\}/customchannels/{customchannel\}
     */
    name?: string | null;
    /**
     * Output only. Unique ID of the custom channel as used in the `CUSTOM_CHANNEL_ID` reporting dimension.
     */
    reportingDimensionId?: string | null;
  }
  /**
   * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`.
   */
  export interface Schema$Date {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | null;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | null;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | null;
  }
  /**
   * The header information of the columns requested in the report.
   */
  export interface Schema$Header {
    /**
     * The [ISO-4217 currency code](https://en.wikipedia.org/wiki/ISO_4217) of this column. Only present if the header type is METRIC_CURRENCY.
     */
    currencyCode?: string | null;
    /**
     * Required. Name of the header.
     */
    name?: string | null;
    /**
     * Required. Type of the header.
     */
    type?: string | null;
  }
  /**
   * Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; \} service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); \} Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); \} Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged.
   */
  export interface Schema$HttpBody {
    /**
     * The HTTP Content-Type header value specifying the content type of the body.
     */
    contentType?: string | null;
    /**
     * The HTTP request/response body as raw binary.
     */
    data?: string | null;
    /**
     * Application specific response metadata. Must be set in the first response for streaming APIs.
     */
    extensions?: Array<{[key: string]: any}> | null;
  }
  /**
   * Response definition for the account list rpc.
   */
  export interface Schema$ListAccountsResponse {
    /**
     * The accounts returned in this list response.
     */
    accounts?: Schema$Account[];
    /**
     * Continuation token used to page through accounts. To retrieve the next page of the results, set the next request's "page_token" value to this.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response definition for the ad client list rpc.
   */
  export interface Schema$ListAdClientsResponse {
    /**
     * The ad clients returned in this list response.
     */
    adClients?: Schema$AdClient[];
    /**
     * Continuation token used to page through ad clients. To retrieve the next page of the results, set the next request's "page_token" value to this.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response definition for the adunit list rpc.
   */
  export interface Schema$ListAdUnitsResponse {
    /**
     * The ad units returned in the list response.
     */
    adUnits?: Schema$AdUnit[];
    /**
     * Continuation token used to page through ad units. To retrieve the next page of the results, set the next request's "page_token" value to this.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response definition for the alerts list rpc.
   */
  export interface Schema$ListAlertsResponse {
    /**
     * The alerts returned in this list response.
     */
    alerts?: Schema$Alert[];
  }
  /**
   * Response definition for the child account list rpc.
   */
  export interface Schema$ListChildAccountsResponse {
    /**
     * The accounts returned in this list response.
     */
    accounts?: Schema$Account[];
    /**
     * Continuation token used to page through accounts. To retrieve the next page of the results, set the next request's "page_token" value to this.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response definition for the custom channel list rpc.
   */
  export interface Schema$ListCustomChannelsResponse {
    /**
     * The custom channels returned in this list response.
     */
    customChannels?: Schema$CustomChannel[];
    /**
     * Continuation token used to page through alerts. To retrieve the next page of the results, set the next request's "page_token" value to this.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response definition for the ad units linked to a custom channel list rpc.
   */
  export interface Schema$ListLinkedAdUnitsResponse {
    /**
     * The ad units returned in the list response.
     */
    adUnits?: Schema$AdUnit[];
    /**
     * Continuation token used to page through ad units. To retrieve the next page of the results, set the next request's "page_token" value to this.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response definition for the custom channels linked to an adunit list rpc.
   */
  export interface Schema$ListLinkedCustomChannelsResponse {
    /**
     * The custom channels returned in this list response.
     */
    customChannels?: Schema$CustomChannel[];
    /**
     * Continuation token used to page through alerts. To retrieve the next page of the results, set the next request's "page_token" value to this.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response definition for the payments list rpc.
   */
  export interface Schema$ListPaymentsResponse {
    /**
     * The payments returned in this list response.
     */
    payments?: Schema$Payment[];
  }
  /**
   * Response definition for the saved reports list rpc.
   */
  export interface Schema$ListSavedReportsResponse {
    /**
     * Continuation token used to page through reports. To retrieve the next page of the results, set the next request's "page_token" value to this.
     */
    nextPageToken?: string | null;
    /**
     * The reports returned in this list response.
     */
    savedReports?: Schema$SavedReport[];
  }
  /**
   * Response definition for the sites list rpc.
   */
  export interface Schema$ListSitesResponse {
    /**
     * Continuation token used to page through sites. To retrieve the next page of the results, set the next request's "page_token" value to this.
     */
    nextPageToken?: string | null;
    /**
     * The sites returned in this list response.
     */
    sites?: Schema$Site[];
  }
  /**
   * Response definition for the url channels list rpc.
   */
  export interface Schema$ListUrlChannelsResponse {
    /**
     * Continuation token used to page through url channels. To retrieve the next page of the results, set the next request's "page_token" value to this.
     */
    nextPageToken?: string | null;
    /**
     * The url channels returned in this list response.
     */
    urlChannels?: Schema$UrlChannel[];
  }
  /**
   * Representation of an unpaid or paid payment. See [Payment timelines for AdSense](https://support.google.com/adsense/answer/7164703) for more information about payments.
   */
  export interface Schema$Payment {
    /**
     * Output only. The amount of unpaid or paid earnings, as a formatted string, including the currency. E.g. "¥1,235 JPY", "$1,234.57", "£87.65".
     */
    amount?: string | null;
    /**
     * Output only. For paid earnings, the date that the payment was credited. For unpaid earnings, this field is empty. Payment dates are always returned in the billing timezone (America/Los_Angeles).
     */
    date?: Schema$Date;
    /**
     * Resource name of the payment. Format: accounts/{account\}/payments/unpaid for unpaid (current) earnings. accounts/{account\}/payments/yyyy-MM-dd for paid earnings.
     */
    name?: string | null;
  }
  /**
   * Result of a generated report.
   */
  export interface Schema$ReportResult {
    /**
     * The averages of the report. This is the same length as any other row in the report; cells corresponding to dimension columns are empty.
     */
    averages?: Schema$Row;
    /**
     * Required. End date of the range (inclusive).
     */
    endDate?: Schema$Date;
    /**
     * The header information; one for each dimension in the request, followed by one for each metric in the request.
     */
    headers?: Schema$Header[];
    /**
     * The output rows of the report. Each row is a list of cells; one for each dimension in the request, followed by one for each metric in the request.
     */
    rows?: Schema$Row[];
    /**
     * Required. Start date of the range (inclusive).
     */
    startDate?: Schema$Date;
    /**
     * The total number of rows matched by the report request.
     */
    totalMatchedRows?: string | null;
    /**
     * The totals of the report. This is the same length as any other row in the report; cells corresponding to dimension columns are empty.
     */
    totals?: Schema$Row;
    /**
     * Any warnings associated with generation of the report. These warnings are always returned in English.
     */
    warnings?: string[] | null;
  }
  /**
   * Row representation.
   */
  export interface Schema$Row {
    /**
     * Cells in the row.
     */
    cells?: Schema$Cell[];
  }
  /**
   * Representation of a saved report.
   */
  export interface Schema$SavedReport {
    /**
     * Resource name of the report. Format: accounts/{account\}/reports/{report\}
     */
    name?: string | null;
    /**
     * Report title as specified by publisher.
     */
    title?: string | null;
  }
  /**
   * Representation of a Site.
   */
  export interface Schema$Site {
    /**
     * Whether auto ads is turned on for the site.
     */
    autoAdsEnabled?: boolean | null;
    /**
     * Domain (or subdomain) of the site, e.g. "example.com" or "www.example.com". This is used in the `OWNED_SITE_DOMAIN_NAME` reporting dimension.
     */
    domain?: string | null;
    /**
     * Resource name of a site. Format: accounts/{account\}/sites/{site\}
     */
    name?: string | null;
    /**
     * Output only. Unique ID of the site as used in the `OWNED_SITE_ID` reporting dimension.
     */
    reportingDimensionId?: string | null;
    /**
     * Output only. State of a site.
     */
    state?: string | null;
  }
  /**
   * Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones).
   */
  export interface Schema$TimeZone {
    /**
     * IANA Time Zone Database time zone, e.g. "America/New_York".
     */
    id?: string | null;
    /**
     * Optional. IANA Time Zone Database version number, e.g. "2019a".
     */
    version?: string | null;
  }
  /**
   * Representation of a URL channel. URL channels allow you to track the performance of particular pages in your site; see [URL channels](https://support.google.com/adsense/answer/2923836) for more information.
   */
  export interface Schema$UrlChannel {
    /**
     * Resource name of the URL channel. Format: accounts/{account\}/adclient/{adclient\}/urlchannels/{urlchannel\}
     */
    name?: string | null;
    /**
     * Output only. Unique ID of the custom channel as used in the `URL_CHANNEL_ID` reporting dimension.
     */
    reportingDimensionId?: string | null;
    /**
     * URI pattern of the channel. Does not include "http://" or "https://". Example: www.example.com/home
     */
    uriPattern?: string | null;
  }

  export class Resource$Accounts {
    context: APIRequestContext;
    adclients: Resource$Accounts$Adclients;
    alerts: Resource$Accounts$Alerts;
    payments: Resource$Accounts$Payments;
    reports: Resource$Accounts$Reports;
    sites: Resource$Accounts$Sites;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.adclients = new Resource$Accounts$Adclients(this.context);
      this.alerts = new Resource$Accounts$Alerts(this.context);
      this.payments = new Resource$Accounts$Payments(this.context);
      this.reports = new Resource$Accounts$Reports(this.context);
      this.sites = new Resource$Accounts$Sites(this.context);
    }

    /**
     * Gets information about the selected AdSense account.
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
     * const adsense = google.adsense('v2');
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
     *     // Required. Account to get information about. Format: accounts/{account_id\}
     *     name: 'accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "pendingTasks": [],
     *   //   "premium": false,
     *   //   "timeZone": {}
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
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Accounts$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Account>;
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
    ): void | GaxiosPromise<Schema$Account> | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://adsense.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Account>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Account>(parameters);
      }
    }

    /**
     * Lists all accounts available to this user.
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
     * const adsense = google.adsense('v2');
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
     *     // The maximum number of accounts to include in the response, used for paging. If unspecified, at most 10000 accounts will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListAccounts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccounts` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accounts": [],
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
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Accounts$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAccountsResponse>;
    list(
      params: Params$Resource$Accounts$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAccountsResponse>,
      callback: BodyResponseCallback<Schema$ListAccountsResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$List,
      callback: BodyResponseCallback<Schema$ListAccountsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListAccountsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$List
        | BodyResponseCallback<Schema$ListAccountsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAccountsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAccountsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListAccountsResponse>
      | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://adsense.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/accounts').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListAccountsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAccountsResponse>(parameters);
      }
    }

    /**
     * Lists all accounts directly managed by the given AdSense account.
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
     * const adsense = google.adsense('v2');
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
     *   const res = await adsense.accounts.listChildAccounts({
     *     // The maximum number of accounts to include in the response, used for paging. If unspecified, at most 10000 accounts will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListAccounts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccounts` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent account, which owns the child accounts. Format: accounts/{account\}
     *     parent: 'accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accounts": [],
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
    listChildAccounts(
      params: Params$Resource$Accounts$Listchildaccounts,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    listChildAccounts(
      params?: Params$Resource$Accounts$Listchildaccounts,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListChildAccountsResponse>;
    listChildAccounts(
      params: Params$Resource$Accounts$Listchildaccounts,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listChildAccounts(
      params: Params$Resource$Accounts$Listchildaccounts,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListChildAccountsResponse>,
      callback: BodyResponseCallback<Schema$ListChildAccountsResponse>
    ): void;
    listChildAccounts(
      params: Params$Resource$Accounts$Listchildaccounts,
      callback: BodyResponseCallback<Schema$ListChildAccountsResponse>
    ): void;
    listChildAccounts(
      callback: BodyResponseCallback<Schema$ListChildAccountsResponse>
    ): void;
    listChildAccounts(
      paramsOrCallback?:
        | Params$Resource$Accounts$Listchildaccounts
        | BodyResponseCallback<Schema$ListChildAccountsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListChildAccountsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListChildAccountsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListChildAccountsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Listchildaccounts;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Listchildaccounts;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://adsense.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}:listChildAccounts').replace(
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
        createAPIRequest<Schema$ListChildAccountsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListChildAccountsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Get extends StandardParameters {
    /**
     * Required. Account to get information about. Format: accounts/{account_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$List extends StandardParameters {
    /**
     * The maximum number of accounts to include in the response, used for paging. If unspecified, at most 10000 accounts will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListAccounts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccounts` must match the call that provided the page token.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Accounts$Listchildaccounts
    extends StandardParameters {
    /**
     * The maximum number of accounts to include in the response, used for paging. If unspecified, at most 10000 accounts will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListAccounts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccounts` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent account, which owns the child accounts. Format: accounts/{account\}
     */
    parent?: string;
  }

  export class Resource$Accounts$Adclients {
    context: APIRequestContext;
    adunits: Resource$Accounts$Adclients$Adunits;
    customchannels: Resource$Accounts$Adclients$Customchannels;
    urlchannels: Resource$Accounts$Adclients$Urlchannels;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.adunits = new Resource$Accounts$Adclients$Adunits(this.context);
      this.customchannels = new Resource$Accounts$Adclients$Customchannels(
        this.context
      );
      this.urlchannels = new Resource$Accounts$Adclients$Urlchannels(
        this.context
      );
    }

    /**
     * Gets the AdSense code for a given ad client. This returns what was previously known as the 'auto ad code'. This is only supported for ad clients with a product_code of AFC. For more information, see [About the AdSense code](https://support.google.com/adsense/answer/9274634).
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
     * const adsense = google.adsense('v2');
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
     *   const res = await adsense.accounts.adclients.getAdcode({
     *     // Required. Name of the ad client for which to get the adcode. Format: accounts/{account\}/adclients/{adclient\}
     *     name: 'accounts/my-account/adclients/my-adclient',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adCode": "my_adCode",
     *   //   "ampBody": "my_ampBody",
     *   //   "ampHead": "my_ampHead"
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
    getAdcode(
      params: Params$Resource$Accounts$Adclients$Getadcode,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getAdcode(
      params?: Params$Resource$Accounts$Adclients$Getadcode,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AdClientAdCode>;
    getAdcode(
      params: Params$Resource$Accounts$Adclients$Getadcode,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getAdcode(
      params: Params$Resource$Accounts$Adclients$Getadcode,
      options: MethodOptions | BodyResponseCallback<Schema$AdClientAdCode>,
      callback: BodyResponseCallback<Schema$AdClientAdCode>
    ): void;
    getAdcode(
      params: Params$Resource$Accounts$Adclients$Getadcode,
      callback: BodyResponseCallback<Schema$AdClientAdCode>
    ): void;
    getAdcode(callback: BodyResponseCallback<Schema$AdClientAdCode>): void;
    getAdcode(
      paramsOrCallback?:
        | Params$Resource$Accounts$Adclients$Getadcode
        | BodyResponseCallback<Schema$AdClientAdCode>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AdClientAdCode>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AdClientAdCode>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AdClientAdCode> | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://adsense.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}/adcode').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$AdClientAdCode>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AdClientAdCode>(parameters);
      }
    }

    /**
     * Lists all the ad clients available in an account.
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
     * const adsense = google.adsense('v2');
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
     *     // The maximum number of ad clients to include in the response, used for paging. If unspecified, at most 10000 ad clients will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListAdClients` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAdClients` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The account which owns the collection of ad clients. Format: accounts/{account\}
     *     parent: 'accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adClients": [],
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
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Accounts$Adclients$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAdClientsResponse>;
    list(
      params: Params$Resource$Accounts$Adclients$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Adclients$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAdClientsResponse>,
      callback: BodyResponseCallback<Schema$ListAdClientsResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Adclients$List,
      callback: BodyResponseCallback<Schema$ListAdClientsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListAdClientsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Adclients$List
        | BodyResponseCallback<Schema$ListAdClientsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAdClientsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAdClientsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListAdClientsResponse>
      | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://adsense.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/adclients').replace(
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
        createAPIRequest<Schema$ListAdClientsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAdClientsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Adclients$Getadcode
    extends StandardParameters {
    /**
     * Required. Name of the ad client for which to get the adcode. Format: accounts/{account\}/adclients/{adclient\}
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Adclients$List
    extends StandardParameters {
    /**
     * The maximum number of ad clients to include in the response, used for paging. If unspecified, at most 10000 ad clients will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListAdClients` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAdClients` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The account which owns the collection of ad clients. Format: accounts/{account\}
     */
    parent?: string;
  }

  export class Resource$Accounts$Adclients$Adunits {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets an ad unit from a specified account and ad client.
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
     * const adsense = google.adsense('v2');
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
     *   const res = await adsense.accounts.adclients.adunits.get({
     *     // Required. AdUnit to get information about. Format: accounts/{account_id\}/adclient/{adclient_id\}/adunit/{adunit_id\}
     *     name: 'accounts/my-account/adclients/my-adclient/adunits/my-adunit',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentAdsSettings": {},
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "reportingDimensionId": "my_reportingDimensionId",
     *   //   "state": "my_state"
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
      params: Params$Resource$Accounts$Adclients$Adunits$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Accounts$Adclients$Adunits$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AdUnit>;
    get(
      params: Params$Resource$Accounts$Adclients$Adunits$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounts$Adclients$Adunits$Get,
      options: MethodOptions | BodyResponseCallback<Schema$AdUnit>,
      callback: BodyResponseCallback<Schema$AdUnit>
    ): void;
    get(
      params: Params$Resource$Accounts$Adclients$Adunits$Get,
      callback: BodyResponseCallback<Schema$AdUnit>
    ): void;
    get(callback: BodyResponseCallback<Schema$AdUnit>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Adclients$Adunits$Get
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
    ): void | GaxiosPromise<Schema$AdUnit> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Adclients$Adunits$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Adclients$Adunits$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://adsense.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$AdUnit>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AdUnit>(parameters);
      }
    }

    /**
     * Gets the AdSense code for a given ad unit.
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
     * const adsense = google.adsense('v2');
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
     *   const res = await adsense.accounts.adclients.adunits.getAdcode({
     *     // Required. Name of the adunit for which to get the adcode. Format: accounts/{account\}/adclients/{adclient\}/adunits/{adunit\}
     *     name: 'accounts/my-account/adclients/my-adclient/adunits/my-adunit',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adCode": "my_adCode"
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
    getAdcode(
      params: Params$Resource$Accounts$Adclients$Adunits$Getadcode,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getAdcode(
      params?: Params$Resource$Accounts$Adclients$Adunits$Getadcode,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AdUnitAdCode>;
    getAdcode(
      params: Params$Resource$Accounts$Adclients$Adunits$Getadcode,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getAdcode(
      params: Params$Resource$Accounts$Adclients$Adunits$Getadcode,
      options: MethodOptions | BodyResponseCallback<Schema$AdUnitAdCode>,
      callback: BodyResponseCallback<Schema$AdUnitAdCode>
    ): void;
    getAdcode(
      params: Params$Resource$Accounts$Adclients$Adunits$Getadcode,
      callback: BodyResponseCallback<Schema$AdUnitAdCode>
    ): void;
    getAdcode(callback: BodyResponseCallback<Schema$AdUnitAdCode>): void;
    getAdcode(
      paramsOrCallback?:
        | Params$Resource$Accounts$Adclients$Adunits$Getadcode
        | BodyResponseCallback<Schema$AdUnitAdCode>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AdUnitAdCode>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AdUnitAdCode>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AdUnitAdCode> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Adclients$Adunits$Getadcode;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Adclients$Adunits$Getadcode;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://adsense.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}/adcode').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$AdUnitAdCode>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AdUnitAdCode>(parameters);
      }
    }

    /**
     * Lists all ad units under a specified account and ad client.
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
     * const adsense = google.adsense('v2');
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
     *   const res = await adsense.accounts.adclients.adunits.list({
     *     // The maximum number of ad units to include in the response, used for paging. If unspecified, at most 10000 ad units will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListAdUnits` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAdUnits` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The ad client which owns the collection of ad units. Format: accounts/{account\}/adclients/{adclient\}
     *     parent: 'accounts/my-account/adclients/my-adclient',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adUnits": [],
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
      params: Params$Resource$Accounts$Adclients$Adunits$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Accounts$Adclients$Adunits$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAdUnitsResponse>;
    list(
      params: Params$Resource$Accounts$Adclients$Adunits$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Adclients$Adunits$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListAdUnitsResponse>,
      callback: BodyResponseCallback<Schema$ListAdUnitsResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Adclients$Adunits$List,
      callback: BodyResponseCallback<Schema$ListAdUnitsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListAdUnitsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Adclients$Adunits$List
        | BodyResponseCallback<Schema$ListAdUnitsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAdUnitsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAdUnitsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListAdUnitsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Adclients$Adunits$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Adclients$Adunits$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://adsense.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/adunits').replace(
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
        createAPIRequest<Schema$ListAdUnitsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAdUnitsResponse>(parameters);
      }
    }

    /**
     * Lists all the custom channels available for an ad unit.
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
     * const adsense = google.adsense('v2');
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
     *   const res = await adsense.accounts.adclients.adunits.listLinkedCustomChannels(
     *     {
     *       // The maximum number of custom channels to include in the response, used for paging. If unspecified, at most 10000 custom channels will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     *       pageSize: 'placeholder-value',
     *       // A page token, received from a previous `ListLinkedCustomChannels` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListLinkedCustomChannels` must match the call that provided the page token.
     *       pageToken: 'placeholder-value',
     *       // Required. The ad unit which owns the collection of custom channels. Format: accounts/{account\}/adclients/{adclient\}/adunits/{adunit\}
     *       parent: 'accounts/my-account/adclients/my-adclient/adunits/my-adunit',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "customChannels": [],
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
    listLinkedCustomChannels(
      params: Params$Resource$Accounts$Adclients$Adunits$Listlinkedcustomchannels,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    listLinkedCustomChannels(
      params?: Params$Resource$Accounts$Adclients$Adunits$Listlinkedcustomchannels,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListLinkedCustomChannelsResponse>;
    listLinkedCustomChannels(
      params: Params$Resource$Accounts$Adclients$Adunits$Listlinkedcustomchannels,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listLinkedCustomChannels(
      params: Params$Resource$Accounts$Adclients$Adunits$Listlinkedcustomchannels,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLinkedCustomChannelsResponse>,
      callback: BodyResponseCallback<Schema$ListLinkedCustomChannelsResponse>
    ): void;
    listLinkedCustomChannels(
      params: Params$Resource$Accounts$Adclients$Adunits$Listlinkedcustomchannels,
      callback: BodyResponseCallback<Schema$ListLinkedCustomChannelsResponse>
    ): void;
    listLinkedCustomChannels(
      callback: BodyResponseCallback<Schema$ListLinkedCustomChannelsResponse>
    ): void;
    listLinkedCustomChannels(
      paramsOrCallback?:
        | Params$Resource$Accounts$Adclients$Adunits$Listlinkedcustomchannels
        | BodyResponseCallback<Schema$ListLinkedCustomChannelsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListLinkedCustomChannelsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListLinkedCustomChannelsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListLinkedCustomChannelsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Adclients$Adunits$Listlinkedcustomchannels;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounts$Adclients$Adunits$Listlinkedcustomchannels;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://adsense.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}:listLinkedCustomChannels').replace(
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
        createAPIRequest<Schema$ListLinkedCustomChannelsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListLinkedCustomChannelsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Accounts$Adclients$Adunits$Get
    extends StandardParameters {
    /**
     * Required. AdUnit to get information about. Format: accounts/{account_id\}/adclient/{adclient_id\}/adunit/{adunit_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Adclients$Adunits$Getadcode
    extends StandardParameters {
    /**
     * Required. Name of the adunit for which to get the adcode. Format: accounts/{account\}/adclients/{adclient\}/adunits/{adunit\}
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Adclients$Adunits$List
    extends StandardParameters {
    /**
     * The maximum number of ad units to include in the response, used for paging. If unspecified, at most 10000 ad units will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListAdUnits` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAdUnits` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The ad client which owns the collection of ad units. Format: accounts/{account\}/adclients/{adclient\}
     */
    parent?: string;
  }
  export interface Params$Resource$Accounts$Adclients$Adunits$Listlinkedcustomchannels
    extends StandardParameters {
    /**
     * The maximum number of custom channels to include in the response, used for paging. If unspecified, at most 10000 custom channels will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListLinkedCustomChannels` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListLinkedCustomChannels` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The ad unit which owns the collection of custom channels. Format: accounts/{account\}/adclients/{adclient\}/adunits/{adunit\}
     */
    parent?: string;
  }

  export class Resource$Accounts$Adclients$Customchannels {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets information about the selected custom channel.
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
     * const adsense = google.adsense('v2');
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
     *   const res = await adsense.accounts.adclients.customchannels.get({
     *     // Required. Name of the custom channel. Format: accounts/{account\}/adclients/{adclient\}/customchannels/{customchannel\}
     *     name: 'accounts/my-account/adclients/my-adclient/customchannels/my-customchannel',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "reportingDimensionId": "my_reportingDimensionId"
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
      params: Params$Resource$Accounts$Adclients$Customchannels$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Accounts$Adclients$Customchannels$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CustomChannel>;
    get(
      params: Params$Resource$Accounts$Adclients$Customchannels$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounts$Adclients$Customchannels$Get,
      options: MethodOptions | BodyResponseCallback<Schema$CustomChannel>,
      callback: BodyResponseCallback<Schema$CustomChannel>
    ): void;
    get(
      params: Params$Resource$Accounts$Adclients$Customchannels$Get,
      callback: BodyResponseCallback<Schema$CustomChannel>
    ): void;
    get(callback: BodyResponseCallback<Schema$CustomChannel>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Adclients$Customchannels$Get
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
    ): void | GaxiosPromise<Schema$CustomChannel> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Adclients$Customchannels$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Adclients$Customchannels$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://adsense.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$CustomChannel>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CustomChannel>(parameters);
      }
    }

    /**
     * Lists all the custom channels available in an ad client.
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
     * const adsense = google.adsense('v2');
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
     *   const res = await adsense.accounts.adclients.customchannels.list({
     *     // The maximum number of custom channels to include in the response, used for paging. If unspecified, at most 10000 custom channels will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListCustomChannels` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCustomChannels` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The ad client which owns the collection of custom channels. Format: accounts/{account\}/adclients/{adclient\}
     *     parent: 'accounts/my-account/adclients/my-adclient',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "customChannels": [],
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
      params: Params$Resource$Accounts$Adclients$Customchannels$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Accounts$Adclients$Customchannels$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListCustomChannelsResponse>;
    list(
      params: Params$Resource$Accounts$Adclients$Customchannels$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Adclients$Customchannels$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListCustomChannelsResponse>,
      callback: BodyResponseCallback<Schema$ListCustomChannelsResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Adclients$Customchannels$List,
      callback: BodyResponseCallback<Schema$ListCustomChannelsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListCustomChannelsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Adclients$Customchannels$List
        | BodyResponseCallback<Schema$ListCustomChannelsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListCustomChannelsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListCustomChannelsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListCustomChannelsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Adclients$Customchannels$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Adclients$Customchannels$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://adsense.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/customchannels').replace(
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
        createAPIRequest<Schema$ListCustomChannelsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListCustomChannelsResponse>(parameters);
      }
    }

    /**
     * Lists all the ad units available for a custom channel.
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
     * const adsense = google.adsense('v2');
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
     *   const res = await adsense.accounts.adclients.customchannels.listLinkedAdUnits(
     *     {
     *       // The maximum number of ad units to include in the response, used for paging. If unspecified, at most 10000 ad units will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     *       pageSize: 'placeholder-value',
     *       // A page token, received from a previous `ListLinkedAdUnits` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListLinkedAdUnits` must match the call that provided the page token.
     *       pageToken: 'placeholder-value',
     *       // Required. The custom channel which owns the collection of ad units. Format: accounts/{account\}/adclients/{adclient\}/customchannels/{customchannel\}
     *       parent:
     *         'accounts/my-account/adclients/my-adclient/customchannels/my-customchannel',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adUnits": [],
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
    listLinkedAdUnits(
      params: Params$Resource$Accounts$Adclients$Customchannels$Listlinkedadunits,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    listLinkedAdUnits(
      params?: Params$Resource$Accounts$Adclients$Customchannels$Listlinkedadunits,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListLinkedAdUnitsResponse>;
    listLinkedAdUnits(
      params: Params$Resource$Accounts$Adclients$Customchannels$Listlinkedadunits,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listLinkedAdUnits(
      params: Params$Resource$Accounts$Adclients$Customchannels$Listlinkedadunits,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLinkedAdUnitsResponse>,
      callback: BodyResponseCallback<Schema$ListLinkedAdUnitsResponse>
    ): void;
    listLinkedAdUnits(
      params: Params$Resource$Accounts$Adclients$Customchannels$Listlinkedadunits,
      callback: BodyResponseCallback<Schema$ListLinkedAdUnitsResponse>
    ): void;
    listLinkedAdUnits(
      callback: BodyResponseCallback<Schema$ListLinkedAdUnitsResponse>
    ): void;
    listLinkedAdUnits(
      paramsOrCallback?:
        | Params$Resource$Accounts$Adclients$Customchannels$Listlinkedadunits
        | BodyResponseCallback<Schema$ListLinkedAdUnitsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListLinkedAdUnitsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListLinkedAdUnitsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListLinkedAdUnitsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Adclients$Customchannels$Listlinkedadunits;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounts$Adclients$Customchannels$Listlinkedadunits;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://adsense.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}:listLinkedAdUnits').replace(
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
        createAPIRequest<Schema$ListLinkedAdUnitsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListLinkedAdUnitsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Adclients$Customchannels$Get
    extends StandardParameters {
    /**
     * Required. Name of the custom channel. Format: accounts/{account\}/adclients/{adclient\}/customchannels/{customchannel\}
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Adclients$Customchannels$List
    extends StandardParameters {
    /**
     * The maximum number of custom channels to include in the response, used for paging. If unspecified, at most 10000 custom channels will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListCustomChannels` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCustomChannels` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The ad client which owns the collection of custom channels. Format: accounts/{account\}/adclients/{adclient\}
     */
    parent?: string;
  }
  export interface Params$Resource$Accounts$Adclients$Customchannels$Listlinkedadunits
    extends StandardParameters {
    /**
     * The maximum number of ad units to include in the response, used for paging. If unspecified, at most 10000 ad units will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListLinkedAdUnits` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListLinkedAdUnits` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The custom channel which owns the collection of ad units. Format: accounts/{account\}/adclients/{adclient\}/customchannels/{customchannel\}
     */
    parent?: string;
  }

  export class Resource$Accounts$Adclients$Urlchannels {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists active url channels.
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
     * const adsense = google.adsense('v2');
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
     *   const res = await adsense.accounts.adclients.urlchannels.list({
     *     // The maximum number of url channels to include in the response, used for paging. If unspecified, at most 10000 url channels will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListUrlChannels` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUrlChannels` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The ad client which owns the collection of url channels. Format: accounts/{account\}/adclients/{adclient\}
     *     parent: 'accounts/my-account/adclients/my-adclient',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "urlChannels": []
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
      params: Params$Resource$Accounts$Adclients$Urlchannels$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Accounts$Adclients$Urlchannels$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListUrlChannelsResponse>;
    list(
      params: Params$Resource$Accounts$Adclients$Urlchannels$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Adclients$Urlchannels$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListUrlChannelsResponse>,
      callback: BodyResponseCallback<Schema$ListUrlChannelsResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Adclients$Urlchannels$List,
      callback: BodyResponseCallback<Schema$ListUrlChannelsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListUrlChannelsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Adclients$Urlchannels$List
        | BodyResponseCallback<Schema$ListUrlChannelsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListUrlChannelsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListUrlChannelsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListUrlChannelsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Adclients$Urlchannels$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Adclients$Urlchannels$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://adsense.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/urlchannels').replace(
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
        createAPIRequest<Schema$ListUrlChannelsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListUrlChannelsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Adclients$Urlchannels$List
    extends StandardParameters {
    /**
     * The maximum number of url channels to include in the response, used for paging. If unspecified, at most 10000 url channels will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListUrlChannels` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUrlChannels` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The ad client which owns the collection of url channels. Format: accounts/{account\}/adclients/{adclient\}
     */
    parent?: string;
  }

  export class Resource$Accounts$Alerts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists all the alerts available in an account.
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
     * const adsense = google.adsense('v2');
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
     *     // The language to use for translating alert messages. If unspecified, this defaults to the user's display language. If the given language is not supported, alerts will be returned in English. The language is specified as an [IETF BCP-47 language code](https://en.wikipedia.org/wiki/IETF_language_tag).
     *     languageCode: 'placeholder-value',
     *     // Required. The account which owns the collection of alerts. Format: accounts/{account\}
     *     parent: 'accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alerts": []
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
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Accounts$Alerts$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAlertsResponse>;
    list(
      params: Params$Resource$Accounts$Alerts$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Alerts$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListAlertsResponse>,
      callback: BodyResponseCallback<Schema$ListAlertsResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Alerts$List,
      callback: BodyResponseCallback<Schema$ListAlertsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListAlertsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Alerts$List
        | BodyResponseCallback<Schema$ListAlertsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAlertsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAlertsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListAlertsResponse>
      | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://adsense.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/alerts').replace(
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
        createAPIRequest<Schema$ListAlertsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAlertsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Alerts$List
    extends StandardParameters {
    /**
     * The language to use for translating alert messages. If unspecified, this defaults to the user's display language. If the given language is not supported, alerts will be returned in English. The language is specified as an [IETF BCP-47 language code](https://en.wikipedia.org/wiki/IETF_language_tag).
     */
    languageCode?: string;
    /**
     * Required. The account which owns the collection of alerts. Format: accounts/{account\}
     */
    parent?: string;
  }

  export class Resource$Accounts$Payments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists all the payments available for an account.
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
     * const adsense = google.adsense('v2');
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
     *     // Required. The account which owns the collection of payments. Format: accounts/{account\}
     *     parent: 'accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "payments": []
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
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Accounts$Payments$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListPaymentsResponse>;
    list(
      params: Params$Resource$Accounts$Payments$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Payments$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListPaymentsResponse>,
      callback: BodyResponseCallback<Schema$ListPaymentsResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Payments$List,
      callback: BodyResponseCallback<Schema$ListPaymentsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListPaymentsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Payments$List
        | BodyResponseCallback<Schema$ListPaymentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListPaymentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListPaymentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListPaymentsResponse>
      | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://adsense.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/payments').replace(
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
        createAPIRequest<Schema$ListPaymentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListPaymentsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Payments$List
    extends StandardParameters {
    /**
     * Required. The account which owns the collection of payments. Format: accounts/{account\}
     */
    parent?: string;
  }

  export class Resource$Accounts$Reports {
    context: APIRequestContext;
    saved: Resource$Accounts$Reports$Saved;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.saved = new Resource$Accounts$Reports$Saved(this.context);
    }

    /**
     * Generates an ad hoc report.
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
     * const adsense = google.adsense('v2');
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
     *     // Required. The account which owns the collection of reports. Format: accounts/{account\}
     *     account: 'accounts/my-account',
     *     // The [ISO-4217 currency code](https://en.wikipedia.org/wiki/ISO_4217) to use when reporting on monetary metrics. Defaults to the account's currency if not set.
     *     currencyCode: 'placeholder-value',
     *     // Date range of the report, if unset the range will be considered CUSTOM.
     *     dateRange: 'placeholder-value',
     *     // Dimensions to base the report on.
     *     dimensions: 'placeholder-value',
     *     // Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     *     'endDate.day': 'placeholder-value',
     *     // Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     *     'endDate.month': 'placeholder-value',
     *     // Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     *     'endDate.year': 'placeholder-value',
     *     // Filters to be run on the report.
     *     filters: 'placeholder-value',
     *     // The language to use for translating report output. If unspecified, this defaults to English ("en"). If the given language is not supported, report output will be returned in English. The language is specified as an [IETF BCP-47 language code](https://en.wikipedia.org/wiki/IETF_language_tag).
     *     languageCode: 'placeholder-value',
     *     // The maximum number of rows of report data to return. Reports producing more rows than the requested limit will be truncated. If unset, this defaults to 100,000 rows for `Reports.GenerateReport` and 1,000,000 rows for `Reports.GenerateCsvReport`, which are also the maximum values permitted here. Report truncation can be identified (for `Reports.GenerateReport` only) by comparing the number of rows returned to the value returned in `total_matched_rows`.
     *     limit: 'placeholder-value',
     *     // Required. Reporting metrics.
     *     metrics: 'placeholder-value',
     *     // The name of a dimension or metric to sort the resulting report on, can be prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
     *     orderBy: 'placeholder-value',
     *     // Timezone in which to generate the report. If unspecified, this defaults to the account timezone. For more information, see [changing the time zone of your reports](https://support.google.com/adsense/answer/9830725).
     *     reportingTimeZone: 'placeholder-value',
     *     // Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     *     'startDate.day': 'placeholder-value',
     *     // Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     *     'startDate.month': 'placeholder-value',
     *     // Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     *     'startDate.year': 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "averages": {},
     *   //   "endDate": {},
     *   //   "headers": [],
     *   //   "rows": [],
     *   //   "startDate": {},
     *   //   "totalMatchedRows": "my_totalMatchedRows",
     *   //   "totals": {},
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
    ): GaxiosPromise<Readable>;
    generate(
      params?: Params$Resource$Accounts$Reports$Generate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ReportResult>;
    generate(
      params: Params$Resource$Accounts$Reports$Generate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    generate(
      params: Params$Resource$Accounts$Reports$Generate,
      options: MethodOptions | BodyResponseCallback<Schema$ReportResult>,
      callback: BodyResponseCallback<Schema$ReportResult>
    ): void;
    generate(
      params: Params$Resource$Accounts$Reports$Generate,
      callback: BodyResponseCallback<Schema$ReportResult>
    ): void;
    generate(callback: BodyResponseCallback<Schema$ReportResult>): void;
    generate(
      paramsOrCallback?:
        | Params$Resource$Accounts$Reports$Generate
        | BodyResponseCallback<Schema$ReportResult>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ReportResult>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ReportResult>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ReportResult> | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://adsense.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+account}/reports:generate').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['account'],
        pathParams: ['account'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ReportResult>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ReportResult>(parameters);
      }
    }

    /**
     * Generates a csv formatted ad hoc report.
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
     * const adsense = google.adsense('v2');
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
     *   const res = await adsense.accounts.reports.generateCsv({
     *     // Required. The account which owns the collection of reports. Format: accounts/{account\}
     *     account: 'accounts/my-account',
     *     // The [ISO-4217 currency code](https://en.wikipedia.org/wiki/ISO_4217) to use when reporting on monetary metrics. Defaults to the account's currency if not set.
     *     currencyCode: 'placeholder-value',
     *     // Date range of the report, if unset the range will be considered CUSTOM.
     *     dateRange: 'placeholder-value',
     *     // Dimensions to base the report on.
     *     dimensions: 'placeholder-value',
     *     // Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     *     'endDate.day': 'placeholder-value',
     *     // Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     *     'endDate.month': 'placeholder-value',
     *     // Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     *     'endDate.year': 'placeholder-value',
     *     // Filters to be run on the report.
     *     filters: 'placeholder-value',
     *     // The language to use for translating report output. If unspecified, this defaults to English ("en"). If the given language is not supported, report output will be returned in English. The language is specified as an [IETF BCP-47 language code](https://en.wikipedia.org/wiki/IETF_language_tag).
     *     languageCode: 'placeholder-value',
     *     // The maximum number of rows of report data to return. Reports producing more rows than the requested limit will be truncated. If unset, this defaults to 100,000 rows for `Reports.GenerateReport` and 1,000,000 rows for `Reports.GenerateCsvReport`, which are also the maximum values permitted here. Report truncation can be identified (for `Reports.GenerateReport` only) by comparing the number of rows returned to the value returned in `total_matched_rows`.
     *     limit: 'placeholder-value',
     *     // Required. Reporting metrics.
     *     metrics: 'placeholder-value',
     *     // The name of a dimension or metric to sort the resulting report on, can be prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
     *     orderBy: 'placeholder-value',
     *     // Timezone in which to generate the report. If unspecified, this defaults to the account timezone. For more information, see [changing the time zone of your reports](https://support.google.com/adsense/answer/9830725).
     *     reportingTimeZone: 'placeholder-value',
     *     // Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     *     'startDate.day': 'placeholder-value',
     *     // Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     *     'startDate.month': 'placeholder-value',
     *     // Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     *     'startDate.year': 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
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
    generateCsv(
      params: Params$Resource$Accounts$Reports$Generatecsv,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    generateCsv(
      params?: Params$Resource$Accounts$Reports$Generatecsv,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
    generateCsv(
      params: Params$Resource$Accounts$Reports$Generatecsv,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    generateCsv(
      params: Params$Resource$Accounts$Reports$Generatecsv,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    generateCsv(
      params: Params$Resource$Accounts$Reports$Generatecsv,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    generateCsv(callback: BodyResponseCallback<Schema$HttpBody>): void;
    generateCsv(
      paramsOrCallback?:
        | Params$Resource$Accounts$Reports$Generatecsv
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$HttpBody> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Reports$Generatecsv;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Reports$Generatecsv;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://adsense.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+account}/reports:generateCsv').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['account'],
        pathParams: ['account'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Reports$Generate
    extends StandardParameters {
    /**
     * Required. The account which owns the collection of reports. Format: accounts/{account\}
     */
    account?: string;
    /**
     * The [ISO-4217 currency code](https://en.wikipedia.org/wiki/ISO_4217) to use when reporting on monetary metrics. Defaults to the account's currency if not set.
     */
    currencyCode?: string;
    /**
     * Date range of the report, if unset the range will be considered CUSTOM.
     */
    dateRange?: string;
    /**
     * Dimensions to base the report on.
     */
    dimensions?: string[];
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    'endDate.day'?: number;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    'endDate.month'?: number;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    'endDate.year'?: number;
    /**
     * Filters to be run on the report.
     */
    filters?: string[];
    /**
     * The language to use for translating report output. If unspecified, this defaults to English ("en"). If the given language is not supported, report output will be returned in English. The language is specified as an [IETF BCP-47 language code](https://en.wikipedia.org/wiki/IETF_language_tag).
     */
    languageCode?: string;
    /**
     * The maximum number of rows of report data to return. Reports producing more rows than the requested limit will be truncated. If unset, this defaults to 100,000 rows for `Reports.GenerateReport` and 1,000,000 rows for `Reports.GenerateCsvReport`, which are also the maximum values permitted here. Report truncation can be identified (for `Reports.GenerateReport` only) by comparing the number of rows returned to the value returned in `total_matched_rows`.
     */
    limit?: number;
    /**
     * Required. Reporting metrics.
     */
    metrics?: string[];
    /**
     * The name of a dimension or metric to sort the resulting report on, can be prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
     */
    orderBy?: string[];
    /**
     * Timezone in which to generate the report. If unspecified, this defaults to the account timezone. For more information, see [changing the time zone of your reports](https://support.google.com/adsense/answer/9830725).
     */
    reportingTimeZone?: string;
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    'startDate.day'?: number;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    'startDate.month'?: number;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    'startDate.year'?: number;
  }
  export interface Params$Resource$Accounts$Reports$Generatecsv
    extends StandardParameters {
    /**
     * Required. The account which owns the collection of reports. Format: accounts/{account\}
     */
    account?: string;
    /**
     * The [ISO-4217 currency code](https://en.wikipedia.org/wiki/ISO_4217) to use when reporting on monetary metrics. Defaults to the account's currency if not set.
     */
    currencyCode?: string;
    /**
     * Date range of the report, if unset the range will be considered CUSTOM.
     */
    dateRange?: string;
    /**
     * Dimensions to base the report on.
     */
    dimensions?: string[];
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    'endDate.day'?: number;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    'endDate.month'?: number;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    'endDate.year'?: number;
    /**
     * Filters to be run on the report.
     */
    filters?: string[];
    /**
     * The language to use for translating report output. If unspecified, this defaults to English ("en"). If the given language is not supported, report output will be returned in English. The language is specified as an [IETF BCP-47 language code](https://en.wikipedia.org/wiki/IETF_language_tag).
     */
    languageCode?: string;
    /**
     * The maximum number of rows of report data to return. Reports producing more rows than the requested limit will be truncated. If unset, this defaults to 100,000 rows for `Reports.GenerateReport` and 1,000,000 rows for `Reports.GenerateCsvReport`, which are also the maximum values permitted here. Report truncation can be identified (for `Reports.GenerateReport` only) by comparing the number of rows returned to the value returned in `total_matched_rows`.
     */
    limit?: number;
    /**
     * Required. Reporting metrics.
     */
    metrics?: string[];
    /**
     * The name of a dimension or metric to sort the resulting report on, can be prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
     */
    orderBy?: string[];
    /**
     * Timezone in which to generate the report. If unspecified, this defaults to the account timezone. For more information, see [changing the time zone of your reports](https://support.google.com/adsense/answer/9830725).
     */
    reportingTimeZone?: string;
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    'startDate.day'?: number;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    'startDate.month'?: number;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    'startDate.year'?: number;
  }

  export class Resource$Accounts$Reports$Saved {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Generates a saved report.
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
     * const adsense = google.adsense('v2');
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
     *     // The [ISO-4217 currency code](https://en.wikipedia.org/wiki/ISO_4217) to use when reporting on monetary metrics. Defaults to the account's currency if not set.
     *     currencyCode: 'placeholder-value',
     *     // Date range of the report, if unset the range will be considered CUSTOM.
     *     dateRange: 'placeholder-value',
     *     // Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     *     'endDate.day': 'placeholder-value',
     *     // Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     *     'endDate.month': 'placeholder-value',
     *     // Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     *     'endDate.year': 'placeholder-value',
     *     // The language to use for translating report output. If unspecified, this defaults to English ("en"). If the given language is not supported, report output will be returned in English. The language is specified as an [IETF BCP-47 language code](https://en.wikipedia.org/wiki/IETF_language_tag).
     *     languageCode: 'placeholder-value',
     *     // Required. Name of the saved report. Format: accounts/{account\}/reports/{report\}
     *     name: 'accounts/my-account/reports/my-report',
     *     // Timezone in which to generate the report. If unspecified, this defaults to the account timezone. For more information, see [changing the time zone of your reports](https://support.google.com/adsense/answer/9830725).
     *     reportingTimeZone: 'placeholder-value',
     *     // Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     *     'startDate.day': 'placeholder-value',
     *     // Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     *     'startDate.month': 'placeholder-value',
     *     // Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     *     'startDate.year': 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "averages": {},
     *   //   "endDate": {},
     *   //   "headers": [],
     *   //   "rows": [],
     *   //   "startDate": {},
     *   //   "totalMatchedRows": "my_totalMatchedRows",
     *   //   "totals": {},
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
    ): GaxiosPromise<Readable>;
    generate(
      params?: Params$Resource$Accounts$Reports$Saved$Generate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ReportResult>;
    generate(
      params: Params$Resource$Accounts$Reports$Saved$Generate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    generate(
      params: Params$Resource$Accounts$Reports$Saved$Generate,
      options: MethodOptions | BodyResponseCallback<Schema$ReportResult>,
      callback: BodyResponseCallback<Schema$ReportResult>
    ): void;
    generate(
      params: Params$Resource$Accounts$Reports$Saved$Generate,
      callback: BodyResponseCallback<Schema$ReportResult>
    ): void;
    generate(callback: BodyResponseCallback<Schema$ReportResult>): void;
    generate(
      paramsOrCallback?:
        | Params$Resource$Accounts$Reports$Saved$Generate
        | BodyResponseCallback<Schema$ReportResult>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ReportResult>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ReportResult>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ReportResult> | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://adsense.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}/saved:generate').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$ReportResult>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ReportResult>(parameters);
      }
    }

    /**
     * Generates a csv formatted saved report.
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
     * const adsense = google.adsense('v2');
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
     *   const res = await adsense.accounts.reports.saved.generateCsv({
     *     // The [ISO-4217 currency code](https://en.wikipedia.org/wiki/ISO_4217) to use when reporting on monetary metrics. Defaults to the account's currency if not set.
     *     currencyCode: 'placeholder-value',
     *     // Date range of the report, if unset the range will be considered CUSTOM.
     *     dateRange: 'placeholder-value',
     *     // Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     *     'endDate.day': 'placeholder-value',
     *     // Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     *     'endDate.month': 'placeholder-value',
     *     // Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     *     'endDate.year': 'placeholder-value',
     *     // The language to use for translating report output. If unspecified, this defaults to English ("en"). If the given language is not supported, report output will be returned in English. The language is specified as an [IETF BCP-47 language code](https://en.wikipedia.org/wiki/IETF_language_tag).
     *     languageCode: 'placeholder-value',
     *     // Required. Name of the saved report. Format: accounts/{account\}/reports/{report\}
     *     name: 'accounts/my-account/reports/my-report',
     *     // Timezone in which to generate the report. If unspecified, this defaults to the account timezone. For more information, see [changing the time zone of your reports](https://support.google.com/adsense/answer/9830725).
     *     reportingTimeZone: 'placeholder-value',
     *     // Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     *     'startDate.day': 'placeholder-value',
     *     // Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     *     'startDate.month': 'placeholder-value',
     *     // Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     *     'startDate.year': 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
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
    generateCsv(
      params: Params$Resource$Accounts$Reports$Saved$Generatecsv,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    generateCsv(
      params?: Params$Resource$Accounts$Reports$Saved$Generatecsv,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
    generateCsv(
      params: Params$Resource$Accounts$Reports$Saved$Generatecsv,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    generateCsv(
      params: Params$Resource$Accounts$Reports$Saved$Generatecsv,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    generateCsv(
      params: Params$Resource$Accounts$Reports$Saved$Generatecsv,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    generateCsv(callback: BodyResponseCallback<Schema$HttpBody>): void;
    generateCsv(
      paramsOrCallback?:
        | Params$Resource$Accounts$Reports$Saved$Generatecsv
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$HttpBody> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Reports$Saved$Generatecsv;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Reports$Saved$Generatecsv;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://adsense.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}/saved:generateCsv').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * Lists saved reports.
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
     * const adsense = google.adsense('v2');
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
     *     // The maximum number of reports to include in the response, used for paging. If unspecified, at most 10000 reports will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListPayments` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPayments` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The account which owns the collection of reports. Format: accounts/{account\}
     *     parent: 'accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "savedReports": []
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
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Accounts$Reports$Saved$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListSavedReportsResponse>;
    list(
      params: Params$Resource$Accounts$Reports$Saved$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Reports$Saved$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListSavedReportsResponse>,
      callback: BodyResponseCallback<Schema$ListSavedReportsResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Reports$Saved$List,
      callback: BodyResponseCallback<Schema$ListSavedReportsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListSavedReportsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Reports$Saved$List
        | BodyResponseCallback<Schema$ListSavedReportsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListSavedReportsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListSavedReportsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListSavedReportsResponse>
      | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://adsense.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/reports/saved').replace(
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
        createAPIRequest<Schema$ListSavedReportsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListSavedReportsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Reports$Saved$Generate
    extends StandardParameters {
    /**
     * The [ISO-4217 currency code](https://en.wikipedia.org/wiki/ISO_4217) to use when reporting on monetary metrics. Defaults to the account's currency if not set.
     */
    currencyCode?: string;
    /**
     * Date range of the report, if unset the range will be considered CUSTOM.
     */
    dateRange?: string;
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    'endDate.day'?: number;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    'endDate.month'?: number;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    'endDate.year'?: number;
    /**
     * The language to use for translating report output. If unspecified, this defaults to English ("en"). If the given language is not supported, report output will be returned in English. The language is specified as an [IETF BCP-47 language code](https://en.wikipedia.org/wiki/IETF_language_tag).
     */
    languageCode?: string;
    /**
     * Required. Name of the saved report. Format: accounts/{account\}/reports/{report\}
     */
    name?: string;
    /**
     * Timezone in which to generate the report. If unspecified, this defaults to the account timezone. For more information, see [changing the time zone of your reports](https://support.google.com/adsense/answer/9830725).
     */
    reportingTimeZone?: string;
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    'startDate.day'?: number;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    'startDate.month'?: number;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    'startDate.year'?: number;
  }
  export interface Params$Resource$Accounts$Reports$Saved$Generatecsv
    extends StandardParameters {
    /**
     * The [ISO-4217 currency code](https://en.wikipedia.org/wiki/ISO_4217) to use when reporting on monetary metrics. Defaults to the account's currency if not set.
     */
    currencyCode?: string;
    /**
     * Date range of the report, if unset the range will be considered CUSTOM.
     */
    dateRange?: string;
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    'endDate.day'?: number;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    'endDate.month'?: number;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    'endDate.year'?: number;
    /**
     * The language to use for translating report output. If unspecified, this defaults to English ("en"). If the given language is not supported, report output will be returned in English. The language is specified as an [IETF BCP-47 language code](https://en.wikipedia.org/wiki/IETF_language_tag).
     */
    languageCode?: string;
    /**
     * Required. Name of the saved report. Format: accounts/{account\}/reports/{report\}
     */
    name?: string;
    /**
     * Timezone in which to generate the report. If unspecified, this defaults to the account timezone. For more information, see [changing the time zone of your reports](https://support.google.com/adsense/answer/9830725).
     */
    reportingTimeZone?: string;
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    'startDate.day'?: number;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    'startDate.month'?: number;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    'startDate.year'?: number;
  }
  export interface Params$Resource$Accounts$Reports$Saved$List
    extends StandardParameters {
    /**
     * The maximum number of reports to include in the response, used for paging. If unspecified, at most 10000 reports will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListPayments` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPayments` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The account which owns the collection of reports. Format: accounts/{account\}
     */
    parent?: string;
  }

  export class Resource$Accounts$Sites {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets information about the selected site.
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
     * const adsense = google.adsense('v2');
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
     *   const res = await adsense.accounts.sites.get({
     *     // Required. Name of the site. Format: accounts/{account\}/sites/{site\}
     *     name: 'accounts/my-account/sites/my-site',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "autoAdsEnabled": false,
     *   //   "domain": "my_domain",
     *   //   "name": "my_name",
     *   //   "reportingDimensionId": "my_reportingDimensionId",
     *   //   "state": "my_state"
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
      params: Params$Resource$Accounts$Sites$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Accounts$Sites$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Site>;
    get(
      params: Params$Resource$Accounts$Sites$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounts$Sites$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Site>,
      callback: BodyResponseCallback<Schema$Site>
    ): void;
    get(
      params: Params$Resource$Accounts$Sites$Get,
      callback: BodyResponseCallback<Schema$Site>
    ): void;
    get(callback: BodyResponseCallback<Schema$Site>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Sites$Get
        | BodyResponseCallback<Schema$Site>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Site>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Site>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Site> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Sites$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Sites$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://adsense.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Site>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Site>(parameters);
      }
    }

    /**
     * Lists all the sites available in an account.
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
     * const adsense = google.adsense('v2');
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
     *   const res = await adsense.accounts.sites.list({
     *     // The maximum number of sites to include in the response, used for paging. If unspecified, at most 10000 sites will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListSites` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSites` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The account which owns the collection of sites. Format: accounts/{account\}
     *     parent: 'accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "sites": []
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
      params: Params$Resource$Accounts$Sites$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Accounts$Sites$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListSitesResponse>;
    list(
      params: Params$Resource$Accounts$Sites$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Sites$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListSitesResponse>,
      callback: BodyResponseCallback<Schema$ListSitesResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Sites$List,
      callback: BodyResponseCallback<Schema$ListSitesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListSitesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Sites$List
        | BodyResponseCallback<Schema$ListSitesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListSitesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListSitesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListSitesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Sites$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Sites$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://adsense.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/sites').replace(
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
        createAPIRequest<Schema$ListSitesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListSitesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Sites$Get
    extends StandardParameters {
    /**
     * Required. Name of the site. Format: accounts/{account\}/sites/{site\}
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Sites$List
    extends StandardParameters {
    /**
     * The maximum number of sites to include in the response, used for paging. If unspecified, at most 10000 sites will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListSites` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSites` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The account which owns the collection of sites. Format: accounts/{account\}
     */
    parent?: string;
  }
}
