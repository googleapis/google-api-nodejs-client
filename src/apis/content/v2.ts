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
 * Content API for Shopping
 *
 * Manages product items, inventory, and Merchant Center accounts for Google
 * Shopping.
 *
 * @example
 * const google = require('googleapis');
 * const content = google.content('v2');
 *
 * @namespace content
 * @type {Function}
 * @version v2
 * @variation v2
 * @param {object=} options Options for Content
 */
export class Content {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  accounts: Resource$Accounts;
  accountstatuses: Resource$Accountstatuses;
  accounttax: Resource$Accounttax;
  datafeeds: Resource$Datafeeds;
  datafeedstatuses: Resource$Datafeedstatuses;
  inventory: Resource$Inventory;
  liasettings: Resource$Liasettings;
  orders: Resource$Orders;
  pos: Resource$Pos;
  products: Resource$Products;
  productstatuses: Resource$Productstatuses;
  shippingsettings: Resource$Shippingsettings;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;
    this.getRoot.bind(this);

    this.accounts = new Resource$Accounts(this);
    this.accountstatuses = new Resource$Accountstatuses(this);
    this.accounttax = new Resource$Accounttax(this);
    this.datafeeds = new Resource$Datafeeds(this);
    this.datafeedstatuses = new Resource$Datafeedstatuses(this);
    this.inventory = new Resource$Inventory(this);
    this.liasettings = new Resource$Liasettings(this);
    this.orders = new Resource$Orders(this);
    this.pos = new Resource$Pos(this);
    this.products = new Resource$Products(this);
    this.productstatuses = new Resource$Productstatuses(this);
    this.shippingsettings = new Resource$Shippingsettings(this);
  }

  getRoot() {
    return this.root;
  }
}

/**
 * Account data.
 */
export interface Schema$Account {
  /**
   * Indicates whether the merchant sells adult content.
   */
  adultContent: boolean;
  /**
   * List of linked AdWords accounts that are active or pending approval. To
   * create a new link request, add a new link with status active to the list.
   * It will remain in a pending state until approved or rejected either in the
   * AdWords interface or through the  AdWords API. To delete an active link, or
   * to cancel a link request, remove it from the list.
   */
  adwordsLinks: Schema$AccountAdwordsLink[];
  /**
   * The GMB account which is linked or in the process of being linked with the
   * Merchant Center accounnt.
   */
  googleMyBusinessLink: Schema$AccountGoogleMyBusinessLink;
  /**
   * Merchant Center account ID.
   */
  id: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#account&quot;.
   */
  kind: string;
  /**
   * Display name for the account.
   */
  name: string;
  /**
   * [DEPRECATED] This field is never returned and will be ignored if provided.
   */
  reviewsUrl: string;
  /**
   * Client-specific, locally-unique, internal ID for the child account.
   */
  sellerId: string;
  /**
   * Users with access to the account. Every account (except for subaccounts)
   * must have at least one admin user.
   */
  users: Schema$AccountUser[];
  /**
   * The merchant&#39;s website.
   */
  websiteUrl: string;
  /**
   * List of linked YouTube channels that are active or pending approval. To
   * create a new link request, add a new link with status active to the list.
   * It will remain in a pending state until approved or rejected in the YT
   * Creator Studio interface. To delete an active link, or to cancel a link
   * request, remove it from the list.
   */
  youtubeChannelLinks: Schema$AccountYouTubeChannelLink[];
}
export interface Schema$AccountAdwordsLink {
  /**
   * Customer ID of the AdWords account.
   */
  adwordsId: string;
  /**
   * Status of the link between this Merchant Center account and the AdWords
   * account. Upon retrieval, it represents the actual status of the link and
   * can be either active if it was approved in Google AdWords or pending if
   * it&#39;s pending approval. Upon insertion, it represents the intended
   * status of the link. Re-uploading a link with status active when it&#39;s
   * still pending or with status pending when it&#39;s already active will have
   * no effect: the status will remain unchanged. Re-uploading a link with
   * deprecated status inactive is equivalent to not submitting the link at all
   * and will delete the link if it was active or cancel the link request if it
   * was pending.
   */
  status: string;
}
export interface Schema$AccountGoogleMyBusinessLink {
  /**
   * The GMB email address of which a specific account within a GMB account. A
   * sample account within a GMB account could be a business account with set of
   * locations, managed under the GMB account.
   */
  gmbEmail: string;
  /**
   * Status of the link between this Merchant Center account and the GMB
   * account.
   */
  status: string;
}
export interface Schema$AccountIdentifier {
  /**
   * The aggregator ID, set for aggregators and subaccounts (in that case, it
   * represents the aggregator of the subaccount).
   */
  aggregatorId: string;
  /**
   * The merchant account ID, set for individual accounts and subaccounts.
   */
  merchantId: string;
}
export interface Schema$AccountsAuthInfoResponse {
  /**
   * The account identifiers corresponding to the authenticated user. - For an
   * individual account: only the merchant ID is defined - For an aggregator:
   * only the aggregator ID is defined - For a subaccount of an MCA: both the
   * merchant ID and the aggregator ID are defined.
   */
  accountIdentifiers: Schema$AccountIdentifier[];
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#accountsAuthInfoResponse&quot;.
   */
  kind: string;
}
export interface Schema$AccountsClaimWebsiteResponse {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#accountsClaimWebsiteResponse&quot;.
   */
  kind: string;
}
export interface Schema$AccountsCustomBatchRequest {
  /**
   * The request entries to be processed in the batch.
   */
  entries: Schema$AccountsCustomBatchRequestEntry[];
}
/**
 * A batch entry encoding a single non-batch accounts request.
 */
export interface Schema$AccountsCustomBatchRequestEntry {
  /**
   * The account to create or update. Only defined if the method is insert or
   * update.
   */
  account: Schema$Account;
  /**
   * The ID of the targeted account. Only defined if the method is get, delete
   * or claimwebsite.
   */
  accountId: string;
  /**
   * An entry ID, unique within the batch request.
   */
  batchId: number;
  /**
   * Whether the account should be deleted if the account has offers. Only
   * applicable if the method is delete.
   */
  force: boolean;
  /**
   * The ID of the managing account.
   */
  merchantId: string;
  method: string;
  /**
   * Only applicable if the method is claimwebsite. Indicates whether or not to
   * take the claim from another account in case there is a conflict.
   */
  overwrite: boolean;
}
export interface Schema$AccountsCustomBatchResponse {
  /**
   * The result of the execution of the batch requests.
   */
  entries: Schema$AccountsCustomBatchResponseEntry[];
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#accountsCustomBatchResponse&quot;.
   */
  kind: string;
}
/**
 * A batch entry encoding a single non-batch accounts response.
 */
export interface Schema$AccountsCustomBatchResponseEntry {
  /**
   * The retrieved, created, or updated account. Not defined if the method was
   * delete or claimwebsite.
   */
  account: Schema$Account;
  /**
   * The ID of the request entry this entry responds to.
   */
  batchId: number;
  /**
   * A list of errors defined if and only if the request failed.
   */
  errors: Schema$Errors;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#accountsCustomBatchResponseEntry&quot;.
   */
  kind: string;
}
export interface Schema$AccountsListResponse {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#accountsListResponse&quot;.
   */
  kind: string;
  /**
   * The token for the retrieval of the next page of accounts.
   */
  nextPageToken: string;
  resources: Schema$Account[];
}
/**
 * The status of an account, i.e., information about its products, which is
 * computed offline and not returned immediately at insertion time.
 */
export interface Schema$AccountStatus {
  /**
   * The ID of the account for which the status is reported.
   */
  accountId: string;
  /**
   * A list of account level issues.
   */
  accountLevelIssues: Schema$AccountStatusAccountLevelIssue[];
  /**
   * A list of data quality issues.
   */
  dataQualityIssues: Schema$AccountStatusDataQualityIssue[];
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#accountStatus&quot;.
   */
  kind: string;
  /**
   * Whether the account&#39;s website is claimed or not.
   */
  websiteClaimed: boolean;
}
export interface Schema$AccountStatusAccountLevelIssue {
  /**
   * Country for which this issue is reported.
   */
  country: string;
  /**
   * The destination the issue applies to.
   */
  destination: string;
  /**
   * Additional details about the issue.
   */
  detail: string;
  /**
   * Issue identifier.
   */
  id: string;
  /**
   * Severity of the issue.
   */
  severity: string;
  /**
   * Short description of the issue.
   */
  title: string;
}
export interface Schema$AccountStatusDataQualityIssue {
  /**
   * Country for which this issue is reported.
   */
  country: string;
  /**
   * The destination the issue applies to.
   */
  destination: string;
  /**
   * A more detailed description of the issue.
   */
  detail: string;
  /**
   * Actual value displayed on the landing page.
   */
  displayedValue: string;
  /**
   * Example items featuring the issue.
   */
  exampleItems: Schema$AccountStatusExampleItem[];
  /**
   * Issue identifier.
   */
  id: string;
  /**
   * Last time the account was checked for this issue.
   */
  lastChecked: string;
  /**
   * The attribute name that is relevant for the issue.
   */
  location: string;
  /**
   * Number of items in the account found to have the said issue.
   */
  numItems: number;
  /**
   * Severity of the problem.
   */
  severity: string;
  /**
   * Submitted value that causes the issue.
   */
  submittedValue: string;
}
export interface Schema$AccountstatusesCustomBatchRequest {
  /**
   * The request entries to be processed in the batch.
   */
  entries: Schema$AccountstatusesCustomBatchRequestEntry[];
}
/**
 * A batch entry encoding a single non-batch accountstatuses request.
 */
export interface Schema$AccountstatusesCustomBatchRequestEntry {
  /**
   * The ID of the (sub-)account whose status to get.
   */
  accountId: string;
  /**
   * An entry ID, unique within the batch request.
   */
  batchId: number;
  /**
   * If set, only issues for the specified destinations are returned, otherwise
   * only issues for the Shopping destination.
   */
  destinations: string[];
  /**
   * The ID of the managing account.
   */
  merchantId: string;
  /**
   * The method (get).
   */
  method: string;
}
export interface Schema$AccountstatusesCustomBatchResponse {
  /**
   * The result of the execution of the batch requests.
   */
  entries: Schema$AccountstatusesCustomBatchResponseEntry[];
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#accountstatusesCustomBatchResponse&quot;.
   */
  kind: string;
}
/**
 * A batch entry encoding a single non-batch accountstatuses response.
 */
export interface Schema$AccountstatusesCustomBatchResponseEntry {
  /**
   * The requested account status. Defined if and only if the request was
   * successful.
   */
  accountStatus: Schema$AccountStatus;
  /**
   * The ID of the request entry this entry responds to.
   */
  batchId: number;
  /**
   * A list of errors defined if and only if the request failed.
   */
  errors: Schema$Errors;
}
export interface Schema$AccountstatusesListResponse {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#accountstatusesListResponse&quot;.
   */
  kind: string;
  /**
   * The token for the retrieval of the next page of account statuses.
   */
  nextPageToken: string;
  resources: Schema$AccountStatus[];
}
/**
 * An example of an item that has poor data quality. An item value on the
 * landing page differs from what is submitted, or conflicts with a policy.
 */
export interface Schema$AccountStatusExampleItem {
  /**
   * Unique item ID as specified in the uploaded product data.
   */
  itemId: string;
  /**
   * Landing page of the item.
   */
  link: string;
  /**
   * The item value that was submitted.
   */
  submittedValue: string;
  /**
   * Title of the item.
   */
  title: string;
  /**
   * The actual value on the landing page.
   */
  valueOnLandingPage: string;
}
/**
 * The tax settings of a merchant account.
 */
export interface Schema$AccountTax {
  /**
   * The ID of the account to which these account tax settings belong.
   */
  accountId: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#accountTax&quot;.
   */
  kind: string;
  /**
   * Tax rules. Updating the tax rules will enable US taxes (not reversible).
   * Defining no rules is equivalent to not charging tax at all.
   */
  rules: Schema$AccountTaxTaxRule[];
}
export interface Schema$AccounttaxCustomBatchRequest {
  /**
   * The request entries to be processed in the batch.
   */
  entries: Schema$AccounttaxCustomBatchRequestEntry[];
}
/**
 * A batch entry encoding a single non-batch accounttax request.
 */
export interface Schema$AccounttaxCustomBatchRequestEntry {
  /**
   * The ID of the account for which to get/update account tax settings.
   */
  accountId: string;
  /**
   * The account tax settings to update. Only defined if the method is update.
   */
  accountTax: Schema$AccountTax;
  /**
   * An entry ID, unique within the batch request.
   */
  batchId: number;
  /**
   * The ID of the managing account.
   */
  merchantId: string;
  method: string;
}
export interface Schema$AccounttaxCustomBatchResponse {
  /**
   * The result of the execution of the batch requests.
   */
  entries: Schema$AccounttaxCustomBatchResponseEntry[];
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#accounttaxCustomBatchResponse&quot;.
   */
  kind: string;
}
/**
 * A batch entry encoding a single non-batch accounttax response.
 */
export interface Schema$AccounttaxCustomBatchResponseEntry {
  /**
   * The retrieved or updated account tax settings.
   */
  accountTax: Schema$AccountTax;
  /**
   * The ID of the request entry this entry responds to.
   */
  batchId: number;
  /**
   * A list of errors defined if and only if the request failed.
   */
  errors: Schema$Errors;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#accounttaxCustomBatchResponseEntry&quot;.
   */
  kind: string;
}
export interface Schema$AccounttaxListResponse {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#accounttaxListResponse&quot;.
   */
  kind: string;
  /**
   * The token for the retrieval of the next page of account tax settings.
   */
  nextPageToken: string;
  resources: Schema$AccountTax[];
}
/**
 * Tax calculation rule to apply in a state or province (USA only).
 */
export interface Schema$AccountTaxTaxRule {
  /**
   * Country code in which tax is applicable.
   */
  country: string;
  /**
   * State (or province) is which the tax is applicable, described by its
   * location id (also called criteria id).
   */
  locationId: string;
  /**
   * Explicit tax rate in percent, represented as a floating point number
   * without the percentage character. Must not be negative.
   */
  ratePercent: string;
  /**
   * If true, shipping charges are also taxed.
   */
  shippingTaxed: boolean;
  /**
   * Whether the tax rate is taken from a global tax table or specified
   * explicitly.
   */
  useGlobalRate: boolean;
}
export interface Schema$AccountUser {
  /**
   * Whether user is an admin.
   */
  admin: boolean;
  /**
   * User&#39;s email address.
   */
  emailAddress: string;
}
export interface Schema$AccountYouTubeChannelLink {
  /**
   * Channel ID.
   */
  channelId: string;
  /**
   * Status of the link between this Merchant Center account and the YouTube
   * channel. Upon retrieval, it represents the actual status of the link and
   * can be either active if it was approved in YT Creator Studio or pending if
   * it&#39;s pending approval. Upon insertion, it represents the intended
   * status of the link. Re-uploading a link with status active when it&#39;s
   * still pending or with status pending when it&#39;s already active will have
   * no effect: the status will remain unchanged. Re-uploading a link with
   * deprecated status inactive is equivalent to not submitting the link at all
   * and will delete the link if it was active or cancel the link request if it
   * was pending.
   */
  status: string;
}
export interface Schema$CarrierRate {
  /**
   * Carrier service, such as &quot;UPS&quot; or &quot;Fedex&quot;. The list of
   * supported carriers can be retrieved via the getSupportedCarriers method.
   * Required.
   */
  carrierName: string;
  /**
   * Carrier service, such as &quot;ground&quot; or &quot;2 days&quot;. The list
   * of supported services for a carrier can be retrieved via the
   * getSupportedCarriers method. Required.
   */
  carrierService: string;
  /**
   * Additive shipping rate modifier. Can be negative. For example {
   * &quot;value&quot;: &quot;1&quot;, &quot;currency&quot; : &quot;USD&quot; }
   * adds $1 to the rate, { &quot;value&quot;: &quot;-3&quot;,
   * &quot;currency&quot; : &quot;USD&quot; } removes $3 from the rate.
   * Optional.
   */
  flatAdjustment: Schema$Price;
  /**
   * Name of the carrier rate. Must be unique per rate group. Required.
   */
  name: string;
  /**
   * Shipping origin for this carrier rate. Required.
   */
  originPostalCode: string;
  /**
   * Multiplicative shipping rate modifier as a number in decimal notation. Can
   * be negative. For example &quot;5.4&quot; increases the rate by 5.4%,
   * &quot;-3&quot; decreases the rate by 3%. Optional.
   */
  percentageAdjustment: string;
}
export interface Schema$CarriersCarrier {
  /**
   * The CLDR country code of the carrier (e.g., &quot;US&quot;). Always
   * present.
   */
  country: string;
  /**
   * The name of the carrier (e.g., &quot;UPS&quot;). Always present.
   */
  name: string;
  /**
   * A list of supported services (e.g., &quot;ground&quot;) for that carrier.
   * Contains at least one service.
   */
  services: string[];
}
/**
 * Datafeed configuration data.
 */
export interface Schema$Datafeed {
  /**
   * The two-letter ISO 639-1 language in which the attributes are defined in
   * the data feed.
   */
  attributeLanguage: string;
  /**
   * [DEPRECATED] Please use targets[].language instead. The two-letter ISO
   * 639-1 language of the items in the feed. Must be a valid language for
   * targetCountry.
   */
  contentLanguage: string;
  /**
   * The type of data feed. For product inventory feeds, only feeds for local
   * stores, not online stores, are supported.
   */
  contentType: string;
  /**
   * Fetch schedule for the feed file.
   */
  fetchSchedule: Schema$DatafeedFetchSchedule;
  /**
   * The filename of the feed. All feeds must have a unique file name.
   */
  fileName: string;
  /**
   * Format of the feed file.
   */
  format: Schema$DatafeedFormat;
  /**
   * The ID of the data feed.
   */
  id: string;
  /**
   * [DEPRECATED] Please use targets[].includedDestinations instead. The list of
   * intended destinations (corresponds to checked check boxes in Merchant
   * Center).
   */
  intendedDestinations: string[];
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#datafeed&quot;.
   */
  kind: string;
  /**
   * A descriptive name of the data feed.
   */
  name: string;
  /**
   * [DEPRECATED] Please use targets[].country instead. The country where the
   * items in the feed will be included in the search index, represented as a
   * CLDR territory code.
   */
  targetCountry: string;
  /**
   * The targets this feed should apply to (country, language, destinations).
   */
  targets: Schema$DatafeedTarget[];
}
/**
 * The required fields vary based on the frequency of fetching. For a monthly
 * fetch schedule, day_of_month and hour are required. For a weekly fetch
 * schedule, weekday and hour are required. For a daily fetch schedule, only
 * hour is required.
 */
export interface Schema$DatafeedFetchSchedule {
  /**
   * The day of the month the feed file should be fetched (1-31).
   */
  dayOfMonth: number;
  /**
   * The URL where the feed file can be fetched. Google Merchant Center will
   * support automatic scheduled uploads using the HTTP, HTTPS, FTP, or SFTP
   * protocols, so the value will need to be a valid link using one of those
   * four protocols.
   */
  fetchUrl: string;
  /**
   * The hour of the day the feed file should be fetched (0-23).
   */
  hour: number;
  /**
   * The minute of the hour the feed file should be fetched (0-59). Read-only.
   */
  minuteOfHour: number;
  /**
   * An optional password for fetch_url.
   */
  password: string;
  /**
   * Whether the scheduled fetch is paused or not.
   */
  paused: boolean;
  /**
   * Time zone used for schedule. UTC by default. E.g.,
   * &quot;America/Los_Angeles&quot;.
   */
  timeZone: string;
  /**
   * An optional user name for fetch_url.
   */
  username: string;
  /**
   * The day of the week the feed file should be fetched.
   */
  weekday: string;
}
export interface Schema$DatafeedFormat {
  /**
   * Delimiter for the separation of values in a delimiter-separated values
   * feed. If not specified, the delimiter will be auto-detected. Ignored for
   * non-DSV data feeds.
   */
  columnDelimiter: string;
  /**
   * Character encoding scheme of the data feed. If not specified, the encoding
   * will be auto-detected.
   */
  fileEncoding: string;
  /**
   * Specifies how double quotes are interpreted. If not specified, the mode
   * will be auto-detected. Ignored for non-DSV data feeds.
   */
  quotingMode: string;
}
export interface Schema$DatafeedsCustomBatchRequest {
  /**
   * The request entries to be processed in the batch.
   */
  entries: Schema$DatafeedsCustomBatchRequestEntry[];
}
/**
 * A batch entry encoding a single non-batch datafeeds request.
 */
export interface Schema$DatafeedsCustomBatchRequestEntry {
  /**
   * An entry ID, unique within the batch request.
   */
  batchId: number;
  /**
   * The data feed to insert.
   */
  datafeed: Schema$Datafeed;
  /**
   * The ID of the data feed to get, delete or fetch.
   */
  datafeedId: string;
  /**
   * The ID of the managing account.
   */
  merchantId: string;
  method: string;
}
export interface Schema$DatafeedsCustomBatchResponse {
  /**
   * The result of the execution of the batch requests.
   */
  entries: Schema$DatafeedsCustomBatchResponseEntry[];
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#datafeedsCustomBatchResponse&quot;.
   */
  kind: string;
}
/**
 * A batch entry encoding a single non-batch datafeeds response.
 */
export interface Schema$DatafeedsCustomBatchResponseEntry {
  /**
   * The ID of the request entry this entry responds to.
   */
  batchId: number;
  /**
   * The requested data feed. Defined if and only if the request was successful.
   */
  datafeed: Schema$Datafeed;
  /**
   * A list of errors defined if and only if the request failed.
   */
  errors: Schema$Errors;
}
export interface Schema$DatafeedsFetchNowResponse {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#datafeedsFetchNowResponse&quot;.
   */
  kind: string;
}
export interface Schema$DatafeedsListResponse {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#datafeedsListResponse&quot;.
   */
  kind: string;
  /**
   * The token for the retrieval of the next page of datafeeds.
   */
  nextPageToken: string;
  resources: Schema$Datafeed[];
}
/**
 * The status of a datafeed, i.e., the result of the last retrieval of the
 * datafeed computed asynchronously when the feed processing is finished.
 */
export interface Schema$DatafeedStatus {
  /**
   * The country for which the status is reported, represented as a  CLDR
   * territory code.
   */
  country: string;
  /**
   * The ID of the feed for which the status is reported.
   */
  datafeedId: string;
  /**
   * The list of errors occurring in the feed.
   */
  errors: Schema$DatafeedStatusError[];
  /**
   * The number of items in the feed that were processed.
   */
  itemsTotal: string;
  /**
   * The number of items in the feed that were valid.
   */
  itemsValid: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#datafeedStatus&quot;.
   */
  kind: string;
  /**
   * The two-letter ISO 639-1 language for which the status is reported.
   */
  language: string;
  /**
   * The last date at which the feed was uploaded.
   */
  lastUploadDate: string;
  /**
   * The processing status of the feed.
   */
  processingStatus: string;
  /**
   * The list of errors occurring in the feed.
   */
  warnings: Schema$DatafeedStatusError[];
}
/**
 * An error occurring in the feed, like &quot;invalid price&quot;.
 */
export interface Schema$DatafeedStatusError {
  /**
   * The code of the error, e.g., &quot;validation/invalid_value&quot;.
   */
  code: string;
  /**
   * The number of occurrences of the error in the feed.
   */
  count: string;
  /**
   * A list of example occurrences of the error, grouped by product.
   */
  examples: Schema$DatafeedStatusExample[];
  /**
   * The error message, e.g., &quot;Invalid price&quot;.
   */
  message: string;
}
export interface Schema$DatafeedstatusesCustomBatchRequest {
  /**
   * The request entries to be processed in the batch.
   */
  entries: Schema$DatafeedstatusesCustomBatchRequestEntry[];
}
/**
 * A batch entry encoding a single non-batch datafeedstatuses request.
 */
export interface Schema$DatafeedstatusesCustomBatchRequestEntry {
  /**
   * An entry ID, unique within the batch request.
   */
  batchId: number;
  /**
   * The country for which to get the datafeed status. If this parameter is
   * provided then language must also be provided. Note that for multi-target
   * datafeeds this parameter is required.
   */
  country: string;
  /**
   * The ID of the data feed to get.
   */
  datafeedId: string;
  /**
   * The language for which to get the datafeed status. If this parameter is
   * provided then country must also be provided. Note that for multi-target
   * datafeeds this parameter is required.
   */
  language: string;
  /**
   * The ID of the managing account.
   */
  merchantId: string;
  method: string;
}
export interface Schema$DatafeedstatusesCustomBatchResponse {
  /**
   * The result of the execution of the batch requests.
   */
  entries: Schema$DatafeedstatusesCustomBatchResponseEntry[];
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#datafeedstatusesCustomBatchResponse&quot;.
   */
  kind: string;
}
/**
 * A batch entry encoding a single non-batch datafeedstatuses response.
 */
export interface Schema$DatafeedstatusesCustomBatchResponseEntry {
  /**
   * The ID of the request entry this entry responds to.
   */
  batchId: number;
  /**
   * The requested data feed status. Defined if and only if the request was
   * successful.
   */
  datafeedStatus: Schema$DatafeedStatus;
  /**
   * A list of errors defined if and only if the request failed.
   */
  errors: Schema$Errors;
}
export interface Schema$DatafeedstatusesListResponse {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#datafeedstatusesListResponse&quot;.
   */
  kind: string;
  /**
   * The token for the retrieval of the next page of datafeed statuses.
   */
  nextPageToken: string;
  resources: Schema$DatafeedStatus[];
}
/**
 * An example occurrence for a particular error.
 */
export interface Schema$DatafeedStatusExample {
  /**
   * The ID of the example item.
   */
  itemId: string;
  /**
   * Line number in the data feed where the example is found.
   */
  lineNumber: string;
  /**
   * The problematic value.
   */
  value: string;
}
export interface Schema$DatafeedTarget {
  /**
   * The country where the items in the feed will be included in the search
   * index, represented as a  CLDR territory code.
   */
  country: string;
  /**
   * The list of destinations to exclude for this target (corresponds to
   * unchecked check boxes in Merchant Center).
   */
  excludedDestinations: string[];
  /**
   * The list of destinations to include for this target (corresponds to checked
   * check boxes in Merchant Center). Default destinations are always included
   * unless provided in the excluded_destination field.
   */
  includedDestinations: string[];
  /**
   * The two-letter ISO 639-1 language of the items in the feed. Must be a valid
   * language for targets[].country.
   */
  language: string;
}
export interface Schema$DeliveryTime {
  /**
   * Holiday cutoff definitions. If configured, they specify order cutoff times
   * for holiday-specific shipping.
   */
  holidayCutoffs: Schema$HolidayCutoff[];
  /**
   * Maximum number of business days that is spent in transit. 0 means same day
   * delivery, 1 means next day delivery. Must be greater than or equal to
   * minTransitTimeInDays. Required.
   */
  maxTransitTimeInDays: number;
  /**
   * Minimum number of business days that is spent in transit. 0 means same day
   * delivery, 1 means next day delivery. Required.
   */
  minTransitTimeInDays: number;
}
/**
 * An error returned by the API.
 */
export interface Schema$Error {
  /**
   * The domain of the error.
   */
  domain: string;
  /**
   * A description of the error.
   */
  message: string;
  /**
   * The error code.
   */
  reason: string;
}
/**
 * A list of errors returned by a failed batch entry.
 */
export interface Schema$Errors {
  /**
   * The HTTP status of the first error in errors.
   */
  code: number;
  /**
   * A list of errors.
   */
  errors: Schema$Error[];
  /**
   * The message of the first error in errors.
   */
  message: string;
}
export interface Schema$GmbAccounts {
  /**
   * The ID of the account.
   */
  accountId: string;
  /**
   * A list of GMB accounts which are available to the merchant.
   */
  gmbAccounts: Schema$GmbAccountsGmbAccount[];
}
export interface Schema$GmbAccountsGmbAccount {
  /**
   * The email which identifies the GMB account.
   */
  email: string;
  /**
   * Number of listings under this account.
   */
  listingCount: string;
  /**
   * The name of the GMB account.
   */
  name: string;
  /**
   * The type of the GMB account (User or Business).
   */
  type: string;
}
/**
 * A non-empty list of row or column headers for a table. Exactly one of prices,
 * weights, numItems, postalCodeGroupNames, or locations must be set.
 */
export interface Schema$Headers {
  /**
   * A list of location ID sets. Must be non-empty. Can only be set if all other
   * fields are not set.
   */
  locations: Schema$LocationIdSet[];
  /**
   * A list of inclusive number of items upper bounds. The last value can be
   * &quot;infinity&quot;. For example [&quot;10&quot;, &quot;50&quot;,
   * &quot;infinity&quot;] represents the headers &quot;&lt;= 10 items&quot;,
   * &quot; 50 items&quot;. Must be non-empty. Can only be set if all other
   * fields are not set.
   */
  numberOfItems: string[];
  /**
   * A list of postal group names. The last value can be &quot;all other
   * locations&quot;. Example: [&quot;zone 1&quot;, &quot;zone 2&quot;,
   * &quot;all other locations&quot;]. The referred postal code groups must
   * match the delivery country of the service. Must be non-empty. Can only be
   * set if all other fields are not set.
   */
  postalCodeGroupNames: string[];
  /**
   * A list of inclusive order price upper bounds. The last price&#39;s value
   * can be &quot;infinity&quot;. For example [{&quot;value&quot;:
   * &quot;10&quot;, &quot;currency&quot;: &quot;USD&quot;}, {&quot;value&quot;:
   * &quot;500&quot;, &quot;currency&quot;: &quot;USD&quot;},
   * {&quot;value&quot;: &quot;infinity&quot;, &quot;currency&quot;:
   * &quot;USD&quot;}] represents the headers &quot;&lt;= $10&quot;, &quot;
   * $500&quot;. All prices within a service must have the same currency. Must
   * be non-empty. Can only be set if all other fields are not set.
   */
  prices: Schema$Price[];
  /**
   * A list of inclusive order weight upper bounds. The last weight&#39;s value
   * can be &quot;infinity&quot;. For example [{&quot;value&quot;:
   * &quot;10&quot;, &quot;unit&quot;: &quot;kg&quot;}, {&quot;value&quot;:
   * &quot;50&quot;, &quot;unit&quot;: &quot;kg&quot;}, {&quot;value&quot;:
   * &quot;infinity&quot;, &quot;unit&quot;: &quot;kg&quot;}] represents the
   * headers &quot;&lt;= 10kg&quot;, &quot; 50kg&quot;. All weights within a
   * service must have the same unit. Must be non-empty. Can only be set if all
   * other fields are not set.
   */
  weights: Schema$Weight[];
}
export interface Schema$HolidayCutoff {
  /**
   * Date of the order deadline, in ISO 8601 format. E.g. &quot;2016-11-29&quot;
   * for 29th November 2016. Required.
   */
  deadlineDate: string;
  /**
   * Hour of the day on the deadline date until which the order has to be placed
   * to qualify for the delivery guarantee. Possible values are: 0 (midnight),
   * 1, ..., 12 (noon), 13, ..., 23. Required.
   */
  deadlineHour: number;
  /**
   * Timezone identifier for the deadline hour. A list of identifiers can be
   * found in  the AdWords API documentation. E.g. &quot;Europe/Zurich&quot;.
   * Required.
   */
  deadlineTimezone: string;
  /**
   * Unique identifier for the holiday. Required.
   */
  holidayId: string;
  /**
   * Date on which the deadline will become visible to consumers in ISO 8601
   * format. E.g. &quot;2016-10-31&quot; for 31st October 2016. Required.
   */
  visibleFromDate: string;
}
export interface Schema$HolidaysHoliday {
  /**
   * The CLDR territory code of the country in which the holiday is available.
   * E.g. &quot;US&quot;, &quot;DE&quot;, &quot;GB&quot;. A holiday cutoff can
   * only be configured in a shipping settings service with matching delivery
   * country. Always present.
   */
  countryCode: string;
  /**
   * Date of the holiday, in ISO 8601 format. E.g. &quot;2016-12-25&quot; for
   * Christmas 2016. Always present.
   */
  date: string;
  /**
   * Date on which the order has to arrive at the customer&#39;s, in ISO 8601
   * format. E.g. &quot;2016-12-24&quot; for 24th December 2016. Always present.
   */
  deliveryGuaranteeDate: string;
  /**
   * Hour of the day in the delivery location&#39;s timezone on the guaranteed
   * delivery date by which the order has to arrive at the customer&#39;s.
   * Possible values are: 0 (midnight), 1, ..., 12 (noon), 13, ..., 23. Always
   * present.
   */
  deliveryGuaranteeHour: string;
  /**
   * Unique identifier for the holiday to be used when configuring holiday
   * cutoffs. Always present.
   */
  id: string;
  /**
   * The holiday type. Always present.
   */
  type: string;
}
export interface Schema$Installment {
  /**
   * The amount the buyer has to pay per month.
   */
  amount: Schema$Price;
  /**
   * The number of installments the buyer has to pay.
   */
  months: string;
}
export interface Schema$Inventory {
  /**
   * The availability of the product.
   */
  availability: string;
  /**
   * Number and amount of installments to pay for an item. Brazil only.
   */
  installment: Schema$Installment;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#inventory&quot;.
   */
  kind: string;
  /**
   * Loyalty points that users receive after purchasing the item. Japan only.
   */
  loyaltyPoints: Schema$LoyaltyPoints;
  /**
   * Store pickup information. Only supported for local inventory. Not setting
   * pickup means &quot;don&#39;t update&quot; while setting it to the empty
   * value ({} in JSON) means &quot;delete&quot;. Otherwise, pickupMethod and
   * pickupSla must be set together, unless pickupMethod is &quot;not
   * supported&quot;.
   */
  pickup: Schema$InventoryPickup;
  /**
   * The price of the product.
   */
  price: Schema$Price;
  /**
   * The quantity of the product. Must be equal to or greater than zero.
   * Supported only for local products.
   */
  quantity: number;
  /**
   * The sale price of the product. Mandatory if sale_price_effective_date is
   * defined.
   */
  salePrice: Schema$Price;
  /**
   * A date range represented by a pair of ISO 8601 dates separated by a space,
   * comma, or slash. Both dates might be specified as &#39;null&#39; if
   * undecided.
   */
  salePriceEffectiveDate: string;
  /**
   * The quantity of the product that is reserved for sell-on-google ads.
   * Supported only for online products.
   */
  sellOnGoogleQuantity: number;
}
export interface Schema$InventoryCustomBatchRequest {
  /**
   * The request entries to be processed in the batch.
   */
  entries: Schema$InventoryCustomBatchRequestEntry[];
}
/**
 * A batch entry encoding a single non-batch inventory request.
 */
export interface Schema$InventoryCustomBatchRequestEntry {
  /**
   * An entry ID, unique within the batch request.
   */
  batchId: number;
  /**
   * Price and availability of the product.
   */
  inventory: Schema$Inventory;
  /**
   * The ID of the managing account.
   */
  merchantId: string;
  /**
   * The ID of the product for which to update price and availability.
   */
  productId: string;
  /**
   * The code of the store for which to update price and availability. Use
   * online to update price and availability of an online product.
   */
  storeCode: string;
}
export interface Schema$InventoryCustomBatchResponse {
  /**
   * The result of the execution of the batch requests.
   */
  entries: Schema$InventoryCustomBatchResponseEntry[];
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#inventoryCustomBatchResponse&quot;.
   */
  kind: string;
}
/**
 * A batch entry encoding a single non-batch inventory response.
 */
export interface Schema$InventoryCustomBatchResponseEntry {
  /**
   * The ID of the request entry this entry responds to.
   */
  batchId: number;
  /**
   * A list of errors defined if and only if the request failed.
   */
  errors: Schema$Errors;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#inventoryCustomBatchResponseEntry&quot;.
   */
  kind: string;
}
export interface Schema$InventoryPickup {
  /**
   * Whether store pickup is available for this offer and whether the pickup
   * option should be shown as buy, reserve, or not supported. Only supported
   * for local inventory. Unless the value is &quot;not supported&quot;, must be
   * submitted together with pickupSla.
   */
  pickupMethod: string;
  /**
   * The expected date that an order will be ready for pickup, relative to when
   * the order is placed. Only supported for local inventory. Must be submitted
   * together with pickupMethod.
   */
  pickupSla: string;
}
export interface Schema$InventorySetRequest {
  /**
   * The availability of the product.
   */
  availability: string;
  /**
   * Number and amount of installments to pay for an item. Brazil only.
   */
  installment: Schema$Installment;
  /**
   * Loyalty points that users receive after purchasing the item. Japan only.
   */
  loyaltyPoints: Schema$LoyaltyPoints;
  /**
   * Store pickup information. Only supported for local inventory. Not setting
   * pickup means &quot;don&#39;t update&quot; while setting it to the empty
   * value ({} in JSON) means &quot;delete&quot;. Otherwise, pickupMethod and
   * pickupSla must be set together, unless pickupMethod is &quot;not
   * supported&quot;.
   */
  pickup: Schema$InventoryPickup;
  /**
   * The price of the product.
   */
  price: Schema$Price;
  /**
   * The quantity of the product. Must be equal to or greater than zero.
   * Supported only for local products.
   */
  quantity: number;
  /**
   * The sale price of the product. Mandatory if sale_price_effective_date is
   * defined.
   */
  salePrice: Schema$Price;
  /**
   * A date range represented by a pair of ISO 8601 dates separated by a space,
   * comma, or slash. Both dates might be specified as &#39;null&#39; if
   * undecided.
   */
  salePriceEffectiveDate: string;
  /**
   * The quantity of the product that is reserved for sell-on-google ads.
   * Supported only for online products.
   */
  sellOnGoogleQuantity: number;
}
export interface Schema$InventorySetResponse {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#inventorySetResponse&quot;.
   */
  kind: string;
}
export interface Schema$LiaAboutPageSettings {
  /**
   * The status of the verification process for the About page.
   */
  status: string;
  /**
   * The URL for the About page.
   */
  url: string;
}
export interface Schema$LiaCountrySettings {
  /**
   * The settings for the About page.
   */
  about: Schema$LiaAboutPageSettings;
  /**
   * CLDR country code (e.g. &quot;US&quot;).
   */
  country: string;
  /**
   * The status of the &quot;Merchant hosted local storefront&quot; feature.
   */
  hostedLocalStorefrontActive: boolean;
  /**
   * LIA inventory verification settings.
   */
  inventory: Schema$LiaInventorySettings;
  /**
   * LIA &quot;On Display To Order&quot; settings.
   */
  onDisplayToOrder: Schema$LiaOnDisplayToOrderSettings;
  /**
   * The status of the &quot;Store pickup&quot; feature.
   */
  storePickupActive: boolean;
}
export interface Schema$LiaInventorySettings {
  /**
   * The email of the contact for the inventory verification process.
   */
  inventoryVerificationContactEmail: string;
  /**
   * The name of the contact for the inventory verification process.
   */
  inventoryVerificationContactName: string;
  /**
   * The status of the verification contact.
   */
  inventoryVerificationContactStatus: string;
  /**
   * The status of the inventory verification process.
   */
  status: string;
}
export interface Schema$LiaOnDisplayToOrderSettings {
  /**
   * Shipping cost and policy URL.
   */
  shippingCostPolicyUrl: string;
  /**
   * The status of the ?On display to order? feature.
   */
  status: string;
}
export interface Schema$LiaSettings {
  /**
   * The ID of the account to which these LIA settings belong. Ignored upon
   * update, always present in get request responses.
   */
  accountId: string;
  /**
   * The LIA settings for each country.
   */
  countrySettings: Schema$LiaCountrySettings[];
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#liaSettings&quot;.
   */
  kind: string;
}
export interface Schema$LiasettingsCustomBatchRequest {
  /**
   * The request entries to be processed in the batch.
   */
  entries: Schema$LiasettingsCustomBatchRequestEntry[];
}
export interface Schema$LiasettingsCustomBatchRequestEntry {
  /**
   * The ID of the account for which to get/update account shipping settings.
   */
  accountId: string;
  /**
   * An entry ID, unique within the batch request.
   */
  batchId: number;
  /**
   * Inventory validation contact email. Required only for
   * SetInventoryValidationContact.
   */
  contactEmail: string;
  /**
   * Inventory validation contact name. Required only for
   * SetInventoryValidationContact.
   */
  contactName: string;
  /**
   * The country code. Required only for RequestInventoryVerification.
   */
  country: string;
  /**
   * The GMB account. Required only for RequestGmbAccess.
   */
  gmbEmail: string;
  /**
   * The account Lia settings to update. Only defined if the method is update.
   */
  liaSettings: Schema$LiaSettings;
  /**
   * The ID of the managing account.
   */
  merchantId: string;
  method: string;
}
export interface Schema$LiasettingsCustomBatchResponse {
  /**
   * The result of the execution of the batch requests.
   */
  entries: Schema$LiasettingsCustomBatchResponseEntry[];
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#liasettingsCustomBatchResponse&quot;.
   */
  kind: string;
}
export interface Schema$LiasettingsCustomBatchResponseEntry {
  /**
   * The ID of the request entry to which this entry responds.
   */
  batchId: number;
  /**
   * A list of errors defined if, and only if, the request failed.
   */
  errors: Schema$Errors;
  /**
   * The the list of accessible GMB accounts.
   */
  gmbAccounts: Schema$GmbAccounts;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#liasettingsCustomBatchResponseEntry&quot;.
   */
  kind: string;
  /**
   * The retrieved or updated Lia settings.
   */
  liaSettings: Schema$LiaSettings;
}
export interface Schema$LiasettingsGetAccessibleGmbAccountsResponse {
  /**
   * The ID of the account.
   */
  accountId: string;
  /**
   * A list of GMB accounts which are available to the merchant.
   */
  gmbAccounts: Schema$GmbAccountsGmbAccount[];
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#liasettingsGetAccessibleGmbAccountsResponse&quot;.
   */
  kind: string;
}
export interface Schema$LiasettingsListResponse {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#liasettingsListResponse&quot;.
   */
  kind: string;
  /**
   * The token for the retrieval of the next page of LIA settings.
   */
  nextPageToken: string;
  resources: Schema$LiaSettings[];
}
export interface Schema$LiasettingsRequestGmbAccessResponse {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#liasettingsRequestGmbAccessResponse&quot;.
   */
  kind: string;
}
export interface Schema$LiasettingsRequestInventoryVerificationResponse {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#liasettingsRequestInventoryVerificationResponse&quot;.
   */
  kind: string;
}
export interface Schema$LiasettingsSetInventoryVerificationContactResponse {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#liasettingsSetInventoryVerificationContactResponse&quot;.
   */
  kind: string;
}
export interface Schema$LocationIdSet {
  /**
   * A non-empty list of location IDs. They must all be of the same location
   * type (e.g., state).
   */
  locationIds: string[];
}
export interface Schema$LoyaltyPoints {
  /**
   * Name of loyalty points program. It is recommended to limit the name to 12
   * full-width characters or 24 Roman characters.
   */
  name: string;
  /**
   * The retailer&#39;s loyalty points in absolute value.
   */
  pointsValue: string;
  /**
   * The ratio of a point when converted to currency. Google assumes currency
   * based on Merchant Center settings. If ratio is left out, it defaults
   * to 1.0.
   */
  ratio: number;
}
export interface Schema$Order {
  /**
   * Whether the order was acknowledged.
   */
  acknowledged: boolean;
  /**
   * The channel type of the order: &quot;purchaseOnGoogle&quot; or
   * &quot;googleExpress&quot;.
   */
  channelType: string;
  /**
   * The details of the customer who placed the order.
   */
  customer: Schema$OrderCustomer;
  /**
   * The details for the delivery.
   */
  deliveryDetails: Schema$OrderDeliveryDetails;
  /**
   * The REST id of the order. Globally unique.
   */
  id: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#order&quot;.
   */
  kind: string;
  /**
   * Line items that are ordered.
   */
  lineItems: Schema$OrderLineItem[];
  merchantId: string;
  /**
   * Merchant-provided id of the order.
   */
  merchantOrderId: string;
  /**
   * The net amount for the order. For example, if an order was originally for a
   * grand total of $100 and a refund was issued for $20, the net amount will be
   * $80.
   */
  netAmount: Schema$Price;
  /**
   * The details of the payment method.
   */
  paymentMethod: Schema$OrderPaymentMethod;
  /**
   * The status of the payment.
   */
  paymentStatus: string;
  /**
   * The date when the order was placed, in ISO 8601 format.
   */
  placedDate: string;
  /**
   * The details of the merchant provided promotions applied to the order. More
   * details about the program are here.
   */
  promotions: Schema$OrderPromotion[];
  /**
   * Refunds for the order.
   */
  refunds: Schema$OrderRefund[];
  /**
   * Shipments of the order.
   */
  shipments: Schema$OrderShipment[];
  /**
   * The total cost of shipping for all items.
   */
  shippingCost: Schema$Price;
  /**
   * The tax for the total shipping cost.
   */
  shippingCostTax: Schema$Price;
  /**
   * The requested shipping option.
   */
  shippingOption: string;
  /**
   * The status of the order.
   */
  status: string;
}
export interface Schema$OrderAddress {
  /**
   * CLDR country code (e.g. &quot;US&quot;).
   */
  country: string;
  /**
   * Strings representing the lines of the printed label for mailing the order,
   * for example: John Smith 1600 Amphitheatre Parkway Mountain View, CA, 94043
   * United States
   */
  fullAddress: string[];
  /**
   * Whether the address is a post office box.
   */
  isPostOfficeBox: boolean;
  /**
   * City, town or commune. May also include dependent localities or
   * sublocalities (e.g. neighborhoods or suburbs).
   */
  locality: string;
  /**
   * Postal Code or ZIP (e.g. &quot;94043&quot;).
   */
  postalCode: string;
  /**
   * Name of the recipient.
   */
  recipientName: string;
  /**
   * Top-level administrative subdivision of the country (e.g. &quot;CA&quot;).
   */
  region: string;
  /**
   * Street-level part of the address.
   */
  streetAddress: string[];
}
export interface Schema$OrderCancellation {
  /**
   * The actor that created the cancellation.
   */
  actor: string;
  /**
   * Date on which the cancellation has been created, in ISO 8601 format.
   */
  creationDate: string;
  /**
   * The quantity that was canceled.
   */
  quantity: number;
  /**
   * The reason for the cancellation. Orders that are cancelled with a
   * noInventory reason will lead to the removal of the product from POG until
   * you make an update to that product. This will not affect your Shopping ads.
   */
  reason: string;
  /**
   * The explanation of the reason.
   */
  reasonText: string;
}
export interface Schema$OrderCustomer {
  /**
   * Email address that should be used for order related communications. In
   * certain cases this might not be a real users email, but a proxy email.
   */
  email: string;
  /**
   * If set, this indicates the user explicitly chose to opt in or out of
   * providing marketing rights to the merchant. If unset, this indicates the
   * user has already made this choice in a previous purchase, and was thus not
   * shown the marketing right opt in/out checkbox during the checkout flow.
   */
  explicitMarketingPreference: boolean;
  /**
   * Full name of the customer.
   */
  fullName: string;
}
export interface Schema$OrderDeliveryDetails {
  /**
   * The delivery address
   */
  address: Schema$OrderAddress;
  /**
   * The phone number of the person receiving the delivery.
   */
  phoneNumber: string;
}
export interface Schema$OrderLineItem {
  /**
   * Annotations that are attached to the line item.
   */
  annotations: Schema$OrderMerchantProvidedAnnotation[];
  /**
   * Cancellations of the line item.
   */
  cancellations: Schema$OrderCancellation[];
  /**
   * The id of the line item.
   */
  id: string;
  /**
   * Total price for the line item. For example, if two items for $10 are
   * purchased, the total price will be $20.
   */
  price: Schema$Price;
  /**
   * Product data from the time of the order placement.
   */
  product: Schema$OrderLineItemProduct;
  /**
   * Number of items canceled.
   */
  quantityCanceled: number;
  /**
   * Number of items delivered.
   */
  quantityDelivered: number;
  /**
   * Number of items ordered.
   */
  quantityOrdered: number;
  /**
   * Number of items pending.
   */
  quantityPending: number;
  /**
   * Number of items returned.
   */
  quantityReturned: number;
  /**
   * Number of items shipped.
   */
  quantityShipped: number;
  /**
   * Details of the return policy for the line item.
   */
  returnInfo: Schema$OrderLineItemReturnInfo;
  /**
   * Returns of the line item.
   */
  returns: Schema$OrderReturn[];
  /**
   * Details of the requested shipping for the line item.
   */
  shippingDetails: Schema$OrderLineItemShippingDetails;
  /**
   * Total tax amount for the line item. For example, if two items are
   * purchased, and each have a cost tax of $2, the total tax amount will be $4.
   */
  tax: Schema$Price;
}
export interface Schema$OrderLineItemProduct {
  /**
   * Brand of the item.
   */
  brand: string;
  /**
   * The item&#39;s channel (online or local).
   */
  channel: string;
  /**
   * Condition or state of the item.
   */
  condition: string;
  /**
   * The two-letter ISO 639-1 language code for the item.
   */
  contentLanguage: string;
  /**
   * Global Trade Item Number (GTIN) of the item.
   */
  gtin: string;
  /**
   * The REST id of the product.
   */
  id: string;
  /**
   * URL of an image of the item.
   */
  imageLink: string;
  /**
   * Shared identifier for all variants of the same product.
   */
  itemGroupId: string;
  /**
   * Manufacturer Part Number (MPN) of the item.
   */
  mpn: string;
  /**
   * An identifier of the item.
   */
  offerId: string;
  /**
   * Price of the item.
   */
  price: Schema$Price;
  /**
   * URL to the cached image shown to the user when order was placed.
   */
  shownImage: string;
  /**
   * The CLDR territory code of the target country of the product.
   */
  targetCountry: string;
  /**
   * The title of the product.
   */
  title: string;
  /**
   * Variant attributes for the item. These are dimensions of the product, such
   * as color, gender, material, pattern, and size. You can find a comprehensive
   * list of variant attributes here.
   */
  variantAttributes: Schema$OrderLineItemProductVariantAttribute[];
}
export interface Schema$OrderLineItemProductVariantAttribute {
  /**
   * The dimension of the variant.
   */
  dimension: string;
  /**
   * The value for the dimension.
   */
  value: string;
}
export interface Schema$OrderLineItemReturnInfo {
  /**
   * How many days later the item can be returned.
   */
  daysToReturn: number;
  /**
   * Whether the item is returnable.
   */
  isReturnable: boolean;
  /**
   * URL of the item return policy.
   */
  policyUrl: string;
}
export interface Schema$OrderLineItemShippingDetails {
  /**
   * The delivery by date, in ISO 8601 format.
   */
  deliverByDate: string;
  /**
   * Details of the shipping method.
   */
  method: Schema$OrderLineItemShippingDetailsMethod;
  /**
   * The ship by date, in ISO 8601 format.
   */
  shipByDate: string;
}
export interface Schema$OrderLineItemShippingDetailsMethod {
  /**
   * The carrier for the shipping. Optional. See shipments[].carrier for a list
   * of acceptable values.
   */
  carrier: string;
  /**
   * Maximum transit time.
   */
  maxDaysInTransit: number;
  /**
   * The name of the shipping method.
   */
  methodName: string;
  /**
   * Minimum transit time.
   */
  minDaysInTransit: number;
}
export interface Schema$OrderMerchantProvidedAnnotation {
  /**
   * Key for additional merchant provided (as key-value pairs) annotation about
   * the line item.
   */
  key: string;
  /**
   * Value for additional merchant provided (as key-value pairs) annotation
   * about the line item.
   */
  value: string;
}
export interface Schema$OrderPaymentMethod {
  /**
   * The billing address.
   */
  billingAddress: Schema$OrderAddress;
  /**
   * The card expiration month (January = 1, February = 2 etc.).
   */
  expirationMonth: number;
  /**
   * The card expiration year (4-digit, e.g. 2015).
   */
  expirationYear: number;
  /**
   * The last four digits of the card number.
   */
  lastFourDigits: string;
  /**
   * The billing phone number.
   */
  phoneNumber: string;
  /**
   * The type of instrument.  Acceptable values are:   - &quot;AMEX&quot;  -
   * &quot;DISCOVER&quot;  - &quot;JCB&quot;  - &quot;MASTERCARD&quot;  -
   * &quot;UNIONPAY&quot;  - &quot;VISA&quot;  - &quot;&quot;
   */
  type: string;
}
export interface Schema$OrderPromotion {
  benefits: Schema$OrderPromotionBenefit[];
  /**
   * The date and time frame when the promotion is active and ready for
   * validation review. Note that the promotion live time may be delayed for a
   * few hours due to the validation review. Start date and end date are
   * separated by a forward slash (/). The start date is specified by the format
   * (YYYY-MM-DD), followed by the letter ?T?, the time of the day when the sale
   * starts (in Greenwich Mean Time, GMT), followed by an expression of the time
   * zone for the sale. The end date is in the same format.
   */
  effectiveDates: string;
  /**
   * Optional. The text code that corresponds to the promotion when applied on
   * the retailer?s website.
   */
  genericRedemptionCode: string;
  /**
   * The unique ID of the promotion.
   */
  id: string;
  /**
   * The full title of the promotion.
   */
  longTitle: string;
  /**
   * Whether the promotion is applicable to all products or only specific
   * products.
   */
  productApplicability: string;
  /**
   * Indicates that the promotion is valid online.
   */
  redemptionChannel: string;
}
export interface Schema$OrderPromotionBenefit {
  /**
   * The discount in the order price when the promotion is applied.
   */
  discount: Schema$Price;
  /**
   * The OfferId(s) that were purchased in this order and map to this specific
   * benefit of the promotion.
   */
  offerIds: string[];
  /**
   * Further describes the benefit of the promotion. Note that we will expand on
   * this enumeration as we support new promotion sub-types.
   */
  subType: string;
  /**
   * The impact on tax when the promotion is applied.
   */
  taxImpact: Schema$Price;
  /**
   * Describes whether the promotion applies to products (e.g. 20% off) or to
   * shipping (e.g. Free Shipping).
   */
  type: string;
}
export interface Schema$OrderRefund {
  /**
   * The actor that created the refund.
   */
  actor: string;
  /**
   * The amount that is refunded.
   */
  amount: Schema$Price;
  /**
   * Date on which the item has been created, in ISO 8601 format.
   */
  creationDate: string;
  /**
   * The reason for the refund.
   */
  reason: string;
  /**
   * The explanation of the reason.
   */
  reasonText: string;
}
export interface Schema$OrderReturn {
  /**
   * The actor that created the refund.
   */
  actor: string;
  /**
   * Date on which the item has been created, in ISO 8601 format.
   */
  creationDate: string;
  /**
   * Quantity that is returned.
   */
  quantity: number;
  /**
   * The reason for the return.
   */
  reason: string;
  /**
   * The explanation of the reason.
   */
  reasonText: string;
}
export interface Schema$OrdersAcknowledgeRequest {
  /**
   * The ID of the operation. Unique across all operations for a given order.
   */
  operationId: string;
}
export interface Schema$OrdersAcknowledgeResponse {
  /**
   * The status of the execution.
   */
  executionStatus: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#ordersAcknowledgeResponse&quot;.
   */
  kind: string;
}
export interface Schema$OrdersAdvanceTestOrderResponse {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#ordersAdvanceTestOrderResponse&quot;.
   */
  kind: string;
}
export interface Schema$OrdersCancelLineItemRequest {
  /**
   * Amount to refund for the cancelation. Optional. If not set, Google will
   * calculate the default based on the price and tax of the items involved. The
   * amount must not be larger than the net amount left on the order.
   */
  amount: Schema$Price;
  /**
   * Amount to refund for the cancelation. Optional. If not set, Google will
   * calculate the default based on the price and tax of the items involved. The
   * amount must not be larger than the net amount left on the order.
   */
  amountPretax: Schema$Price;
  /**
   * Tax amount that correspond to cancellation amount in amountPretax.
   */
  amountTax: Schema$Price;
  /**
   * The ID of the line item to cancel. Either lineItemId or productId is
   * required.
   */
  lineItemId: string;
  /**
   * The ID of the operation. Unique across all operations for a given order.
   */
  operationId: string;
  /**
   * The ID of the product to cancel. This is the REST ID used in the products
   * service. Either lineItemId or productId is required.
   */
  productId: string;
  /**
   * The quantity to cancel.
   */
  quantity: number;
  /**
   * The reason for the cancellation.
   */
  reason: string;
  /**
   * The explanation of the reason.
   */
  reasonText: string;
}
export interface Schema$OrdersCancelLineItemResponse {
  /**
   * The status of the execution.
   */
  executionStatus: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#ordersCancelLineItemResponse&quot;.
   */
  kind: string;
}
export interface Schema$OrdersCancelRequest {
  /**
   * The ID of the operation. Unique across all operations for a given order.
   */
  operationId: string;
  /**
   * The reason for the cancellation.
   */
  reason: string;
  /**
   * The explanation of the reason.
   */
  reasonText: string;
}
export interface Schema$OrdersCancelResponse {
  /**
   * The status of the execution.
   */
  executionStatus: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#ordersCancelResponse&quot;.
   */
  kind: string;
}
export interface Schema$OrdersCreateTestOrderRequest {
  /**
   * The test order template to use. Specify as an alternative to testOrder as a
   * shortcut for retrieving a template and then creating an order using that
   * template.
   */
  templateName: string;
  /**
   * The test order to create.
   */
  testOrder: Schema$TestOrder;
}
export interface Schema$OrdersCreateTestOrderResponse {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#ordersCreateTestOrderResponse&quot;.
   */
  kind: string;
  /**
   * The ID of the newly created test order.
   */
  orderId: string;
}
export interface Schema$OrdersCustomBatchRequest {
  /**
   * The request entries to be processed in the batch.
   */
  entries: Schema$OrdersCustomBatchRequestEntry[];
}
export interface Schema$OrdersCustomBatchRequestEntry {
  /**
   * An entry ID, unique within the batch request.
   */
  batchId: number;
  /**
   * Required for cancel method.
   */
  cancel: Schema$OrdersCustomBatchRequestEntryCancel;
  /**
   * Required for cancelLineItem method.
   */
  cancelLineItem: Schema$OrdersCustomBatchRequestEntryCancelLineItem;
  /**
   * Required for inStoreReturnLineItem method.
   */
  inStoreRefundLineItem:
      Schema$OrdersCustomBatchRequestEntryInStoreRefundLineItem;
  /**
   * The ID of the managing account.
   */
  merchantId: string;
  /**
   * The merchant order id. Required for updateMerchantOrderId and
   * getByMerchantOrderId methods.
   */
  merchantOrderId: string;
  /**
   * The method to apply.
   */
  method: string;
  /**
   * The ID of the operation. Unique across all operations for a given order.
   * Required for all methods beside get and getByMerchantOrderId.
   */
  operationId: string;
  /**
   * The ID of the order. Required for all methods beside getByMerchantOrderId.
   */
  orderId: string;
  /**
   * Required for refund method.
   */
  refund: Schema$OrdersCustomBatchRequestEntryRefund;
  /**
   * Required for rejectReturnLineItem method.
   */
  rejectReturnLineItem:
      Schema$OrdersCustomBatchRequestEntryRejectReturnLineItem;
  /**
   * Required for returnLineItem method.
   */
  returnLineItem: Schema$OrdersCustomBatchRequestEntryReturnLineItem;
  /**
   * Required for returnRefundLineItem method.
   */
  returnRefundLineItem:
      Schema$OrdersCustomBatchRequestEntryReturnRefundLineItem;
  /**
   * Required for setLineItemMetadata method.
   */
  setLineItemMetadata: Schema$OrdersCustomBatchRequestEntrySetLineItemMetadata;
  /**
   * Required for shipLineItems method.
   */
  shipLineItems: Schema$OrdersCustomBatchRequestEntryShipLineItems;
  /**
   * Required for updateLineItemShippingDate method.
   */
  updateLineItemShippingDetails:
      Schema$OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails;
  /**
   * Required for updateShipment method.
   */
  updateShipment: Schema$OrdersCustomBatchRequestEntryUpdateShipment;
}
export interface Schema$OrdersCustomBatchRequestEntryCancel {
  /**
   * The reason for the cancellation.
   */
  reason: string;
  /**
   * The explanation of the reason.
   */
  reasonText: string;
}
export interface Schema$OrdersCustomBatchRequestEntryCancelLineItem {
  /**
   * Amount to refund for the cancelation. Optional. If not set, Google will
   * calculate the default based on the price and tax of the items involved. The
   * amount must not be larger than the net amount left on the order.
   */
  amount: Schema$Price;
  /**
   * Amount to refund for the cancelation. Optional. If not set, Google will
   * calculate the default based on the price and tax of the items involved. The
   * amount must not be larger than the net amount left on the order.
   */
  amountPretax: Schema$Price;
  /**
   * Tax amount that correspond to cancellation amount in amountPretax.
   */
  amountTax: Schema$Price;
  /**
   * The ID of the line item to cancel. Either lineItemId or productId is
   * required.
   */
  lineItemId: string;
  /**
   * The ID of the product to cancel. This is the REST ID used in the products
   * service. Either lineItemId or productId is required.
   */
  productId: string;
  /**
   * The quantity to cancel.
   */
  quantity: number;
  /**
   * The reason for the cancellation.
   */
  reason: string;
  /**
   * The explanation of the reason.
   */
  reasonText: string;
}
export interface Schema$OrdersCustomBatchRequestEntryInStoreRefundLineItem {
  /**
   * The amount that is refunded. Required.
   */
  amountPretax: Schema$Price;
  /**
   * Tax amount that correspond to refund amount in amountPretax. Required.
   */
  amountTax: Schema$Price;
  /**
   * The ID of the line item to return. Either lineItemId or productId is
   * required.
   */
  lineItemId: string;
  /**
   * The ID of the product to return. This is the REST ID used in the products
   * service. Either lineItemId or productId is required.
   */
  productId: string;
  /**
   * The quantity to return and refund.
   */
  quantity: number;
  /**
   * The reason for the return.
   */
  reason: string;
  /**
   * The explanation of the reason.
   */
  reasonText: string;
}
export interface Schema$OrdersCustomBatchRequestEntryRefund {
  /**
   * The amount that is refunded.
   */
  amount: Schema$Price;
  /**
   * The amount that is refunded. Either amount or amountPretax and amountTax
   * should be filled.
   */
  amountPretax: Schema$Price;
  /**
   * Tax amount that correspond to refund amount in amountPretax.
   */
  amountTax: Schema$Price;
  /**
   * The reason for the refund.
   */
  reason: string;
  /**
   * The explanation of the reason.
   */
  reasonText: string;
}
export interface Schema$OrdersCustomBatchRequestEntryRejectReturnLineItem {
  /**
   * The ID of the line item to return. Either lineItemId or productId is
   * required.
   */
  lineItemId: string;
  /**
   * The ID of the product to return. This is the REST ID used in the products
   * service. Either lineItemId or productId is required.
   */
  productId: string;
  /**
   * The quantity to return and refund.
   */
  quantity: number;
  /**
   * The reason for the return.
   */
  reason: string;
  /**
   * The explanation of the reason.
   */
  reasonText: string;
}
export interface Schema$OrdersCustomBatchRequestEntryReturnLineItem {
  /**
   * The ID of the line item to return. Either lineItemId or productId is
   * required.
   */
  lineItemId: string;
  /**
   * The ID of the product to return. This is the REST ID used in the products
   * service. Either lineItemId or productId is required.
   */
  productId: string;
  /**
   * The quantity to return.
   */
  quantity: number;
  /**
   * The reason for the return.
   */
  reason: string;
  /**
   * The explanation of the reason.
   */
  reasonText: string;
}
export interface Schema$OrdersCustomBatchRequestEntryReturnRefundLineItem {
  /**
   * The amount that is refunded. Optional, but if filled then both amountPretax
   * and amountTax must be set.
   */
  amountPretax: Schema$Price;
  /**
   * Tax amount that correspond to refund amount in amountPretax.
   */
  amountTax: Schema$Price;
  /**
   * The ID of the line item to return. Either lineItemId or productId is
   * required.
   */
  lineItemId: string;
  /**
   * The ID of the product to return. This is the REST ID used in the products
   * service. Either lineItemId or productId is required.
   */
  productId: string;
  /**
   * The quantity to return and refund.
   */
  quantity: number;
  /**
   * The reason for the return.
   */
  reason: string;
  /**
   * The explanation of the reason.
   */
  reasonText: string;
}
export interface Schema$OrdersCustomBatchRequestEntrySetLineItemMetadata {
  annotations: Schema$OrderMerchantProvidedAnnotation[];
  /**
   * The ID of the line item to set metadata. Either lineItemId or productId is
   * required.
   */
  lineItemId: string;
  /**
   * The ID of the product to set metadata. This is the REST ID used in the
   * products service. Either lineItemId or productId is required.
   */
  productId: string;
}
export interface Schema$OrdersCustomBatchRequestEntryShipLineItems {
  /**
   * Deprecated. Please use shipmentInfo instead. The carrier handling the
   * shipment. See shipments[].carrier in the  Orders resource representation
   * for a list of acceptable values.
   */
  carrier: string;
  /**
   * Line items to ship.
   */
  lineItems: Schema$OrderShipmentLineItemShipment[];
  /**
   * Deprecated. Please use shipmentInfo instead. The ID of the shipment.
   */
  shipmentId: string;
  /**
   * Shipment information. This field is repeated because a single line item can
   * be shipped in several packages (and have several tracking IDs).
   */
  shipmentInfos:
      Schema$OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo[];
  /**
   * Deprecated. Please use shipmentInfo instead. The tracking id for the
   * shipment.
   */
  trackingId: string;
}
export interface Schema$OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo {
  /**
   * The carrier handling the shipment. See shipments[].carrier in the  Orders
   * resource representation for a list of acceptable values.
   */
  carrier: string;
  /**
   * The ID of the shipment.
   */
  shipmentId: string;
  /**
   * The tracking id for the shipment.
   */
  trackingId: string;
}
export interface Schema$OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails {
  /**
   * Updated delivery by date, in ISO 8601 format. If not specified only ship by
   * date is updated.
   */
  deliverByDate: string;
  /**
   * The ID of the line item to set metadata. Either lineItemId or productId is
   * required.
   */
  lineItemId: string;
  /**
   * The ID of the product to set metadata. This is the REST ID used in the
   * products service. Either lineItemId or productId is required.
   */
  productId: string;
  /**
   * Updated ship by date, in ISO 8601 format. If not specified only deliver by
   * date is updated.
   */
  shipByDate: string;
}
export interface Schema$OrdersCustomBatchRequestEntryUpdateShipment {
  /**
   * The carrier handling the shipment. Not updated if missing. See
   * shipments[].carrier in the  Orders resource representation for a list of
   * acceptable values.
   */
  carrier: string;
  /**
   * The ID of the shipment.
   */
  shipmentId: string;
  /**
   * New status for the shipment. Not updated if missing.
   */
  status: string;
  /**
   * The tracking id for the shipment. Not updated if missing.
   */
  trackingId: string;
}
export interface Schema$OrdersCustomBatchResponse {
  /**
   * The result of the execution of the batch requests.
   */
  entries: Schema$OrdersCustomBatchResponseEntry[];
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#ordersCustomBatchResponse&quot;.
   */
  kind: string;
}
export interface Schema$OrdersCustomBatchResponseEntry {
  /**
   * The ID of the request entry this entry responds to.
   */
  batchId: number;
  /**
   * A list of errors defined if and only if the request failed.
   */
  errors: Schema$Errors;
  /**
   * The status of the execution. Only defined if the method is not get or
   * getByMerchantOrderId and if the request was successful.
   */
  executionStatus: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#ordersCustomBatchResponseEntry&quot;.
   */
  kind: string;
  /**
   * The retrieved order. Only defined if the method is get and if the request
   * was successful.
   */
  order: Schema$Order;
}
export interface Schema$OrdersGetByMerchantOrderIdResponse {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#ordersGetByMerchantOrderIdResponse&quot;.
   */
  kind: string;
  /**
   * The requested order.
   */
  order: Schema$Order;
}
export interface Schema$OrdersGetTestOrderTemplateResponse {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#ordersGetTestOrderTemplateResponse&quot;.
   */
  kind: string;
  /**
   * The requested test order template.
   */
  template: Schema$TestOrder;
}
export interface Schema$OrderShipment {
  /**
   * The carrier handling the shipment.  Acceptable values are:   -
   * &quot;gsx&quot;  - &quot;ups&quot;  - &quot;usps&quot;  - &quot;fedex&quot;
   * - &quot;dhl&quot;  - &quot;ecourier&quot;  - &quot;cxt&quot;  -
   * &quot;google&quot;  - &quot;ontrac&quot;  - &quot;emsy&quot;  -
   * &quot;ont&quot;  - &quot;deliv&quot;  - &quot;dynamex&quot;  -
   * &quot;lasership&quot;  - &quot;mpx&quot;  - &quot;uds&quot;
   */
  carrier: string;
  /**
   * Date on which the shipment has been created, in ISO 8601 format.
   */
  creationDate: string;
  /**
   * Date on which the shipment has been delivered, in ISO 8601 format. Present
   * only if status is delievered
   */
  deliveryDate: string;
  /**
   * The id of the shipment.
   */
  id: string;
  /**
   * The line items that are shipped.
   */
  lineItems: Schema$OrderShipmentLineItemShipment[];
  /**
   * The status of the shipment.
   */
  status: string;
  /**
   * The tracking id for the shipment.
   */
  trackingId: string;
}
export interface Schema$OrderShipmentLineItemShipment {
  /**
   * The id of the line item that is shipped. Either lineItemId or productId is
   * required.
   */
  lineItemId: string;
  /**
   * The ID of the product to ship. This is the REST ID used in the products
   * service. Either lineItemId or productId is required.
   */
  productId: string;
  /**
   * The quantity that is shipped.
   */
  quantity: number;
}
export interface Schema$OrdersInStoreRefundLineItemRequest {
  /**
   * The amount that is refunded. Required.
   */
  amountPretax: Schema$Price;
  /**
   * Tax amount that correspond to refund amount in amountPretax. Required.
   */
  amountTax: Schema$Price;
  /**
   * The ID of the line item to return. Either lineItemId or productId is
   * required.
   */
  lineItemId: string;
  /**
   * The ID of the operation. Unique across all operations for a given order.
   */
  operationId: string;
  /**
   * The ID of the product to return. This is the REST ID used in the products
   * service. Either lineItemId or productId is required.
   */
  productId: string;
  /**
   * The quantity to return and refund.
   */
  quantity: number;
  /**
   * The reason for the return.
   */
  reason: string;
  /**
   * The explanation of the reason.
   */
  reasonText: string;
}
export interface Schema$OrdersInStoreRefundLineItemResponse {
  /**
   * The status of the execution.
   */
  executionStatus: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#ordersInStoreRefundLineItemResponse&quot;.
   */
  kind: string;
}
export interface Schema$OrdersListResponse {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#ordersListResponse&quot;.
   */
  kind: string;
  /**
   * The token for the retrieval of the next page of orders.
   */
  nextPageToken: string;
  resources: Schema$Order[];
}
export interface Schema$OrdersRefundRequest {
  /**
   * The amount that is refunded.
   */
  amount: Schema$Price;
  /**
   * The amount that is refunded. Either amount or amountPretax and amountTax
   * should be filled.
   */
  amountPretax: Schema$Price;
  /**
   * Tax amount that correspond to refund amount in amountPretax.
   */
  amountTax: Schema$Price;
  /**
   * The ID of the operation. Unique across all operations for a given order.
   */
  operationId: string;
  /**
   * The reason for the refund.
   */
  reason: string;
  /**
   * The explanation of the reason.
   */
  reasonText: string;
}
export interface Schema$OrdersRefundResponse {
  /**
   * The status of the execution.
   */
  executionStatus: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#ordersRefundResponse&quot;.
   */
  kind: string;
}
export interface Schema$OrdersRejectReturnLineItemRequest {
  /**
   * The ID of the line item to return. Either lineItemId or productId is
   * required.
   */
  lineItemId: string;
  /**
   * The ID of the operation. Unique across all operations for a given order.
   */
  operationId: string;
  /**
   * The ID of the product to return. This is the REST ID used in the products
   * service. Either lineItemId or productId is required.
   */
  productId: string;
  /**
   * The quantity to return and refund.
   */
  quantity: number;
  /**
   * The reason for the return.
   */
  reason: string;
  /**
   * The explanation of the reason.
   */
  reasonText: string;
}
export interface Schema$OrdersRejectReturnLineItemResponse {
  /**
   * The status of the execution.
   */
  executionStatus: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#ordersRejectReturnLineItemResponse&quot;.
   */
  kind: string;
}
export interface Schema$OrdersReturnLineItemRequest {
  /**
   * The ID of the line item to return. Either lineItemId or productId is
   * required.
   */
  lineItemId: string;
  /**
   * The ID of the operation. Unique across all operations for a given order.
   */
  operationId: string;
  /**
   * The ID of the product to return. This is the REST ID used in the products
   * service. Either lineItemId or productId is required.
   */
  productId: string;
  /**
   * The quantity to return.
   */
  quantity: number;
  /**
   * The reason for the return.
   */
  reason: string;
  /**
   * The explanation of the reason.
   */
  reasonText: string;
}
export interface Schema$OrdersReturnLineItemResponse {
  /**
   * The status of the execution.
   */
  executionStatus: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#ordersReturnLineItemResponse&quot;.
   */
  kind: string;
}
export interface Schema$OrdersReturnRefundLineItemRequest {
  /**
   * The amount that is refunded. Optional, but if filled then both amountPretax
   * and amountTax must be set.
   */
  amountPretax: Schema$Price;
  /**
   * Tax amount that correspond to refund amount in amountPretax.
   */
  amountTax: Schema$Price;
  /**
   * The ID of the line item to return. Either lineItemId or productId is
   * required.
   */
  lineItemId: string;
  /**
   * The ID of the operation. Unique across all operations for a given order.
   */
  operationId: string;
  /**
   * The ID of the product to return. This is the REST ID used in the products
   * service. Either lineItemId or productId is required.
   */
  productId: string;
  /**
   * The quantity to return and refund.
   */
  quantity: number;
  /**
   * The reason for the return.
   */
  reason: string;
  /**
   * The explanation of the reason.
   */
  reasonText: string;
}
export interface Schema$OrdersReturnRefundLineItemResponse {
  /**
   * The status of the execution.
   */
  executionStatus: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#ordersReturnRefundLineItemResponse&quot;.
   */
  kind: string;
}
export interface Schema$OrdersSetLineItemMetadataRequest {
  annotations: Schema$OrderMerchantProvidedAnnotation[];
  /**
   * The ID of the line item to set metadata. Either lineItemId or productId is
   * required.
   */
  lineItemId: string;
  /**
   * The ID of the operation. Unique across all operations for a given order.
   */
  operationId: string;
  /**
   * The ID of the product to set metadata. This is the REST ID used in the
   * products service. Either lineItemId or productId is required.
   */
  productId: string;
}
export interface Schema$OrdersSetLineItemMetadataResponse {
  /**
   * The status of the execution.
   */
  executionStatus: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#ordersSetLineItemMetadataResponse&quot;.
   */
  kind: string;
}
export interface Schema$OrdersShipLineItemsRequest {
  /**
   * Deprecated. Please use shipmentInfo instead. The carrier handling the
   * shipment. See shipments[].carrier in the  Orders resource representation
   * for a list of acceptable values.
   */
  carrier: string;
  /**
   * Line items to ship.
   */
  lineItems: Schema$OrderShipmentLineItemShipment[];
  /**
   * The ID of the operation. Unique across all operations for a given order.
   */
  operationId: string;
  /**
   * Deprecated. Please use shipmentInfo instead. The ID of the shipment.
   */
  shipmentId: string;
  /**
   * Shipment information. This field is repeated because a single line item can
   * be shipped in several packages (and have several tracking IDs).
   */
  shipmentInfos:
      Schema$OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo[];
  /**
   * Deprecated. Please use shipmentInfo instead. The tracking id for the
   * shipment.
   */
  trackingId: string;
}
export interface Schema$OrdersShipLineItemsResponse {
  /**
   * The status of the execution.
   */
  executionStatus: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#ordersShipLineItemsResponse&quot;.
   */
  kind: string;
}
export interface Schema$OrdersUpdateLineItemShippingDetailsRequest {
  /**
   * Updated delivery by date, in ISO 8601 format. If not specified only ship by
   * date is updated.
   */
  deliverByDate: string;
  /**
   * The ID of the line item to set metadata. Either lineItemId or productId is
   * required.
   */
  lineItemId: string;
  /**
   * The ID of the operation. Unique across all operations for a given order.
   */
  operationId: string;
  /**
   * The ID of the product to set metadata. This is the REST ID used in the
   * products service. Either lineItemId or productId is required.
   */
  productId: string;
  /**
   * Updated ship by date, in ISO 8601 format. If not specified only deliver by
   * date is updated.
   */
  shipByDate: string;
}
export interface Schema$OrdersUpdateLineItemShippingDetailsResponse {
  /**
   * The status of the execution.
   */
  executionStatus: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#ordersUpdateLineItemShippingDetailsResponse&quot;.
   */
  kind: string;
}
export interface Schema$OrdersUpdateMerchantOrderIdRequest {
  /**
   * The merchant order id to be assigned to the order. Must be unique per
   * merchant.
   */
  merchantOrderId: string;
  /**
   * The ID of the operation. Unique across all operations for a given order.
   */
  operationId: string;
}
export interface Schema$OrdersUpdateMerchantOrderIdResponse {
  /**
   * The status of the execution.
   */
  executionStatus: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#ordersUpdateMerchantOrderIdResponse&quot;.
   */
  kind: string;
}
export interface Schema$OrdersUpdateShipmentRequest {
  /**
   * The carrier handling the shipment. Not updated if missing. See
   * shipments[].carrier in the  Orders resource representation for a list of
   * acceptable values.
   */
  carrier: string;
  /**
   * The ID of the operation. Unique across all operations for a given order.
   */
  operationId: string;
  /**
   * The ID of the shipment.
   */
  shipmentId: string;
  /**
   * New status for the shipment. Not updated if missing.
   */
  status: string;
  /**
   * The tracking id for the shipment. Not updated if missing.
   */
  trackingId: string;
}
export interface Schema$OrdersUpdateShipmentResponse {
  /**
   * The status of the execution.
   */
  executionStatus: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#ordersUpdateShipmentResponse&quot;.
   */
  kind: string;
}
export interface Schema$PosCustomBatchRequest {
  /**
   * The request entries to be processed in the batch.
   */
  entries: Schema$PosCustomBatchRequestEntry[];
}
export interface Schema$PosCustomBatchRequestEntry {
  /**
   * An entry ID, unique within the batch request.
   */
  batchId: number;
  /**
   * The inventory to submit. Set this only if the method is inventory.
   */
  inventory: Schema$PosInventory;
  /**
   * The ID of the POS provider.
   */
  merchantId: string;
  method: string;
  /**
   * The sale information to submit. Set this only if the method is sale.
   */
  sale: Schema$PosSale;
  /**
   * The store information to submit. Set this only if the method is insert.
   */
  store: Schema$PosStore;
  /**
   * The store code. Set this only if the method is delete or get.
   */
  storeCode: string;
  /**
   * The ID of the account for which to get/submit data.
   */
  targetMerchantId: string;
}
export interface Schema$PosCustomBatchResponse {
  /**
   * The result of the execution of the batch requests.
   */
  entries: Schema$PosCustomBatchResponseEntry[];
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#posCustomBatchResponse&quot;.
   */
  kind: string;
}
export interface Schema$PosCustomBatchResponseEntry {
  /**
   * The ID of the request entry to which this entry responds.
   */
  batchId: number;
  /**
   * A list of errors defined if, and only if, the request failed.
   */
  errors: Schema$Errors;
  /**
   * The updated inventory information.
   */
  inventory: Schema$PosInventory;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#posCustomBatchResponseEntry&quot;.
   */
  kind: string;
  /**
   * The updated sale information.
   */
  sale: Schema$PosSale;
  /**
   * The retrieved or updated store information.
   */
  store: Schema$PosStore;
}
/**
 * The absolute quantity of an item available at the given store.
 */
export interface Schema$PosInventory {
  /**
   * The two-letter ISO 639-1 language code for the item.
   */
  contentLanguage: string;
  /**
   * Global Trade Item Number.
   */
  gtin: string;
  /**
   * A unique identifier for the item.
   */
  itemId: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#posInventory&quot;.
   */
  kind: string;
  /**
   * The current price of the item.
   */
  price: Schema$Price;
  /**
   * The available quantity of the item.
   */
  quantity: string;
  /**
   * The identifier of the merchant&#39;s store. Either a storeCode inserted via
   * the API or the code of the store in Google My Business.
   */
  storeCode: string;
  /**
   * The CLDR territory code for the item.
   */
  targetCountry: string;
  /**
   * The inventory timestamp, in ISO 8601 format.
   */
  timestamp: string;
}
export interface Schema$PosInventoryRequest {
  /**
   * The two-letter ISO 639-1 language code for the item.
   */
  contentLanguage: string;
  /**
   * Global Trade Item Number.
   */
  gtin: string;
  /**
   * A unique identifier for the item.
   */
  itemId: string;
  /**
   * The current price of the item.
   */
  price: Schema$Price;
  /**
   * The available quantity of the item.
   */
  quantity: string;
  /**
   * The identifier of the merchant&#39;s store. Either a storeCode inserted via
   * the API or the code of the store in Google My Business.
   */
  storeCode: string;
  /**
   * The CLDR territory code for the item.
   */
  targetCountry: string;
  /**
   * The inventory timestamp, in ISO 8601 format.
   */
  timestamp: string;
}
export interface Schema$PosInventoryResponse {
  /**
   * The two-letter ISO 639-1 language code for the item.
   */
  contentLanguage: string;
  /**
   * Global Trade Item Number.
   */
  gtin: string;
  /**
   * A unique identifier for the item.
   */
  itemId: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#posInventoryResponse&quot;.
   */
  kind: string;
  /**
   * The current price of the item.
   */
  price: Schema$Price;
  /**
   * The available quantity of the item.
   */
  quantity: string;
  /**
   * The identifier of the merchant&#39;s store. Either a storeCode inserted via
   * the API or the code of the store in Google My Business.
   */
  storeCode: string;
  /**
   * The CLDR territory code for the item.
   */
  targetCountry: string;
  /**
   * The inventory timestamp, in ISO 8601 format.
   */
  timestamp: string;
}
export interface Schema$PosListResponse {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#posListResponse&quot;.
   */
  kind: string;
  resources: Schema$PosStore[];
}
/**
 * The change of the available quantity of an item at the given store.
 */
export interface Schema$PosSale {
  /**
   * The two-letter ISO 639-1 language code for the item.
   */
  contentLanguage: string;
  /**
   * Global Trade Item Number.
   */
  gtin: string;
  /**
   * A unique identifier for the item.
   */
  itemId: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#posSale&quot;.
   */
  kind: string;
  /**
   * The price of the item.
   */
  price: Schema$Price;
  /**
   * The relative change of the available quantity. Negative for items sold.
   */
  quantity: string;
  /**
   * A unique ID to group items from the same sale event.
   */
  saleId: string;
  /**
   * The identifier of the merchant&#39;s store. Either a storeCode inserted via
   * the API or the code of the store in Google My Business.
   */
  storeCode: string;
  /**
   * The CLDR territory code for the item.
   */
  targetCountry: string;
  /**
   * The inventory timestamp, in ISO 8601 format.
   */
  timestamp: string;
}
export interface Schema$PosSaleRequest {
  /**
   * The two-letter ISO 639-1 language code for the item.
   */
  contentLanguage: string;
  /**
   * Global Trade Item Number.
   */
  gtin: string;
  /**
   * A unique identifier for the item.
   */
  itemId: string;
  /**
   * The price of the item.
   */
  price: Schema$Price;
  /**
   * The relative change of the available quantity. Negative for items sold.
   */
  quantity: string;
  /**
   * A unique ID to group items from the same sale event.
   */
  saleId: string;
  /**
   * The identifier of the merchant&#39;s store. Either a storeCode inserted via
   * the API or the code of the store in Google My Business.
   */
  storeCode: string;
  /**
   * The CLDR territory code for the item.
   */
  targetCountry: string;
  /**
   * The inventory timestamp, in ISO 8601 format.
   */
  timestamp: string;
}
export interface Schema$PosSaleResponse {
  /**
   * The two-letter ISO 639-1 language code for the item.
   */
  contentLanguage: string;
  /**
   * Global Trade Item Number.
   */
  gtin: string;
  /**
   * A unique identifier for the item.
   */
  itemId: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#posSaleResponse&quot;.
   */
  kind: string;
  /**
   * The price of the item.
   */
  price: Schema$Price;
  /**
   * The relative change of the available quantity. Negative for items sold.
   */
  quantity: string;
  /**
   * A unique ID to group items from the same sale event.
   */
  saleId: string;
  /**
   * The identifier of the merchant&#39;s store. Either a storeCode inserted via
   * the API or the code of the store in Google My Business.
   */
  storeCode: string;
  /**
   * The CLDR territory code for the item.
   */
  targetCountry: string;
  /**
   * The inventory timestamp, in ISO 8601 format.
   */
  timestamp: string;
}
/**
 * Store resource.
 */
export interface Schema$PosStore {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#posStore&quot;.
   */
  kind: string;
  /**
   * The street address of the store.
   */
  storeAddress: string;
  /**
   * A store identifier that is unique for the given merchant.
   */
  storeCode: string;
}
export interface Schema$PostalCodeGroup {
  /**
   * The CLDR territory code of the country the postal code group applies to.
   * Required.
   */
  country: string;
  /**
   * The name of the postal code group, referred to in headers. Required.
   */
  name: string;
  /**
   * A range of postal codes. Required.
   */
  postalCodeRanges: Schema$PostalCodeRange[];
}
export interface Schema$PostalCodeRange {
  /**
   * A postal code or a pattern of the form prefix* denoting the inclusive lower
   * bound of the range defining the area. Examples values: &quot;94108&quot;,
   * &quot;9410*&quot;, &quot;9*&quot;. Required.
   */
  postalCodeRangeBegin: string;
  /**
   * A postal code or a pattern of the form prefix* denoting the inclusive upper
   * bound of the range defining the area. It must have the same length as
   * postalCodeRangeBegin: if postalCodeRangeBegin is a postal code then
   * postalCodeRangeEnd must be a postal code too; if postalCodeRangeBegin is a
   * pattern then postalCodeRangeEnd must be a pattern with the same prefix
   * length. Optional: if not set, then the area is defined as being all the
   * postal codes matching postalCodeRangeBegin.
   */
  postalCodeRangeEnd: string;
}
export interface Schema$Price {
  /**
   * The currency of the price.
   */
  currency: string;
  /**
   * The price represented as a number.
   */
  value: string;
}
/**
 * Product data.
 */
export interface Schema$Product {
  /**
   * Additional URLs of images of the item.
   */
  additionalImageLinks: string[];
  /**
   * Additional categories of the item (formatted as in products feed
   * specification).
   */
  additionalProductTypes: string[];
  /**
   * Set to true if the item is targeted towards adults.
   */
  adult: boolean;
  /**
   * Used to group items in an arbitrary way. Only for CPA%, discouraged
   * otherwise.
   */
  adwordsGrouping: string;
  /**
   * Similar to adwords_grouping, but only works on CPC.
   */
  adwordsLabels: string[];
  /**
   * Allows advertisers to override the item URL when the product is shown
   * within the context of Product Ads.
   */
  adwordsRedirect: string;
  /**
   * Target age group of the item.
   */
  ageGroup: string;
  /**
   * Specifies the intended aspects for the product.
   */
  aspects: Schema$ProductAspect[];
  /**
   * Availability status of the item.
   */
  availability: string;
  /**
   * The day a pre-ordered product becomes available for delivery, in ISO 8601
   * format.
   */
  availabilityDate: string;
  /**
   * Brand of the item.
   */
  brand: string;
  /**
   * The item&#39;s channel (online or local).
   */
  channel: string;
  /**
   * Color of the item.
   */
  color: string;
  /**
   * Condition or state of the item.
   */
  condition: string;
  /**
   * The two-letter ISO 639-1 language code for the item.
   */
  contentLanguage: string;
  /**
   * A list of custom (merchant-provided) attributes. It can also be used for
   * submitting any attribute of the feed specification in its generic form
   * (e.g., { &quot;name&quot;: &quot;size type&quot;, &quot;type&quot;:
   * &quot;text&quot;, &quot;value&quot;: &quot;regular&quot; }). This is useful
   * for submitting attributes not explicitly exposed by the API.
   */
  customAttributes: Schema$ProductCustomAttribute[];
  /**
   * A list of custom (merchant-provided) custom attribute groups.
   */
  customGroups: Schema$ProductCustomGroup[];
  /**
   * Custom label 0 for custom grouping of items in a Shopping campaign.
   */
  customLabel0: string;
  /**
   * Custom label 1 for custom grouping of items in a Shopping campaign.
   */
  customLabel1: string;
  /**
   * Custom label 2 for custom grouping of items in a Shopping campaign.
   */
  customLabel2: string;
  /**
   * Custom label 3 for custom grouping of items in a Shopping campaign.
   */
  customLabel3: string;
  /**
   * Custom label 4 for custom grouping of items in a Shopping campaign.
   */
  customLabel4: string;
  /**
   * Description of the item.
   */
  description: string;
  /**
   * Specifies the intended destinations for the product.
   */
  destinations: Schema$ProductDestination[];
  /**
   * An identifier for an item for dynamic remarketing campaigns.
   */
  displayAdsId: string;
  /**
   * URL directly to your item&#39;s landing page for dynamic remarketing
   * campaigns.
   */
  displayAdsLink: string;
  /**
   * Advertiser-specified recommendations.
   */
  displayAdsSimilarIds: string[];
  /**
   * Title of an item for dynamic remarketing campaigns.
   */
  displayAdsTitle: string;
  /**
   * Offer margin for dynamic remarketing campaigns.
   */
  displayAdsValue: number;
  /**
   * The energy efficiency class as defined in EU directive 2010/30/EU.
   */
  energyEfficiencyClass: string;
  /**
   * Date on which the item should expire, as specified upon insertion, in ISO
   * 8601 format. The actual expiration date in Google Shopping is exposed in
   * productstatuses as googleExpirationDate and might be earlier if
   * expirationDate is too far in the future.
   */
  expirationDate: string;
  /**
   * Target gender of the item.
   */
  gender: string;
  /**
   * Google&#39;s category of the item (see Google product taxonomy).
   */
  googleProductCategory: string;
  /**
   * Global Trade Item Number (GTIN) of the item.
   */
  gtin: string;
  /**
   * The REST id of the product. Content API methods that operate on products
   * take this as their productId parameter. The REST id for a product is of the
   * form channel:contentLanguage:targetCountry:offerId.
   */
  id: string;
  /**
   * False when the item does not have unique product identifiers appropriate to
   * its category, such as GTIN, MPN, and brand. Required according to the
   * Unique Product Identifier Rules for all target countries except for Canada.
   */
  identifierExists: boolean;
  /**
   * URL of an image of the item.
   */
  imageLink: string;
  /**
   * Number and amount of installments to pay for an item. Brazil only.
   */
  installment: Schema$Installment;
  /**
   * Whether the item is a merchant-defined bundle. A bundle is a custom
   * grouping of different products sold by a merchant for a single price.
   */
  isBundle: boolean;
  /**
   * Shared identifier for all variants of the same product.
   */
  itemGroupId: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#product&quot;.
   */
  kind: string;
  /**
   * URL directly linking to your item&#39;s page on your website.
   */
  link: string;
  /**
   * Loyalty points that users receive after purchasing the item. Japan only.
   */
  loyaltyPoints: Schema$LoyaltyPoints;
  /**
   * The material of which the item is made.
   */
  material: string;
  /**
   * Maximal product handling time (in business days).
   */
  maxHandlingTime: string;
  /**
   * Minimal product handling time (in business days).
   */
  minHandlingTime: string;
  /**
   * Link to a mobile-optimized version of the landing page.
   */
  mobileLink: string;
  /**
   * Manufacturer Part Number (MPN) of the item.
   */
  mpn: string;
  /**
   * The number of identical products in a merchant-defined multipack.
   */
  multipack: string;
  /**
   * A unique identifier for the item. Leading and trailing whitespaces are
   * stripped and multiple whitespaces are replaced by a single whitespace upon
   * submission. Only valid unicode characters are accepted. See the products
   * feed specification for details. Note: Content API methods that operate on
   * products take the REST id of the product, not this identifier.
   */
  offerId: string;
  /**
   * Whether an item is available for purchase only online.
   */
  onlineOnly: boolean;
  /**
   * The item&#39;s pattern (e.g. polka dots).
   */
  pattern: string;
  /**
   * Price of the item.
   */
  price: Schema$Price;
  /**
   * Your category of the item (formatted as in products feed specification).
   */
  productType: string;
  /**
   * The unique ID of a promotion.
   */
  promotionIds: string[];
  /**
   * Advertised sale price of the item.
   */
  salePrice: Schema$Price;
  /**
   * Date range during which the item is on sale (see products feed
   * specification).
   */
  salePriceEffectiveDate: string;
  /**
   * The quantity of the product that is reserved for sell-on-google ads.
   */
  sellOnGoogleQuantity: string;
  /**
   * Shipping rules.
   */
  shipping: Schema$ProductShipping[];
  /**
   * Height of the item for shipping.
   */
  shippingHeight: Schema$ProductShippingDimension;
  /**
   * The shipping label of the product, used to group product in account-level
   * shipping rules.
   */
  shippingLabel: string;
  /**
   * Length of the item for shipping.
   */
  shippingLength: Schema$ProductShippingDimension;
  /**
   * Weight of the item for shipping.
   */
  shippingWeight: Schema$ProductShippingWeight;
  /**
   * Width of the item for shipping.
   */
  shippingWidth: Schema$ProductShippingDimension;
  /**
   * Size of the item.
   */
  sizes: string[];
  /**
   * System in which the size is specified. Recommended for apparel items.
   */
  sizeSystem: string;
  /**
   * The cut of the item. Recommended for apparel items.
   */
  sizeType: string;
  /**
   * The CLDR territory code for the item.
   */
  targetCountry: string;
  /**
   * Tax information.
   */
  taxes: Schema$ProductTax[];
  /**
   * Title of the item.
   */
  title: string;
  /**
   * The preference of the denominator of the unit price.
   */
  unitPricingBaseMeasure: Schema$ProductUnitPricingBaseMeasure;
  /**
   * The measure and dimension of an item.
   */
  unitPricingMeasure: Schema$ProductUnitPricingMeasure;
  /**
   * The read-only list of intended destinations which passed validation.
   */
  validatedDestinations: string[];
  /**
   * Read-only warnings.
   */
  warnings: Schema$Error[];
}
export interface Schema$ProductAspect {
  /**
   * The name of the aspect.
   */
  aspectName: string;
  /**
   * The name of the destination. Leave out to apply to all destinations.
   */
  destinationName: string;
  /**
   * Whether the aspect is required, excluded or should be validated.
   */
  intention: string;
}
export interface Schema$ProductCustomAttribute {
  /**
   * The name of the attribute. Underscores will be replaced by spaces upon
   * insertion.
   */
  name: string;
  /**
   * The type of the attribute.
   */
  type: string;
  /**
   * Free-form unit of the attribute. Unit can only be used for values of type
   * INT or FLOAT.
   */
  unit: string;
  /**
   * The value of the attribute.
   */
  value: string;
}
export interface Schema$ProductCustomGroup {
  /**
   * The sub-attributes.
   */
  attributes: Schema$ProductCustomAttribute[];
  /**
   * The name of the group. Underscores will be replaced by spaces upon
   * insertion.
   */
  name: string;
}
export interface Schema$ProductDestination {
  /**
   * The name of the destination.
   */
  destinationName: string;
  /**
   * Whether the destination is required, excluded or should be validated.
   */
  intention: string;
}
export interface Schema$ProductsCustomBatchRequest {
  /**
   * The request entries to be processed in the batch.
   */
  entries: Schema$ProductsCustomBatchRequestEntry[];
}
/**
 * A batch entry encoding a single non-batch products request.
 */
export interface Schema$ProductsCustomBatchRequestEntry {
  /**
   * An entry ID, unique within the batch request.
   */
  batchId: number;
  /**
   * The ID of the managing account.
   */
  merchantId: string;
  method: string;
  /**
   * The product to insert. Only required if the method is insert.
   */
  product: Schema$Product;
  /**
   * The ID of the product to get or delete. Only defined if the method is get
   * or delete.
   */
  productId: string;
}
export interface Schema$ProductsCustomBatchResponse {
  /**
   * The result of the execution of the batch requests.
   */
  entries: Schema$ProductsCustomBatchResponseEntry[];
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#productsCustomBatchResponse&quot;.
   */
  kind: string;
}
/**
 * A batch entry encoding a single non-batch products response.
 */
export interface Schema$ProductsCustomBatchResponseEntry {
  /**
   * The ID of the request entry this entry responds to.
   */
  batchId: number;
  /**
   * A list of errors defined if and only if the request failed.
   */
  errors: Schema$Errors;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#productsCustomBatchResponseEntry&quot;.
   */
  kind: string;
  /**
   * The inserted product. Only defined if the method is insert and if the
   * request was successful.
   */
  product: Schema$Product;
}
export interface Schema$ProductShipping {
  /**
   * The CLDR territory code of the country to which an item will ship.
   */
  country: string;
  /**
   * The location where the shipping is applicable, represented by a location
   * group name.
   */
  locationGroupName: string;
  /**
   * The numeric id of a location that the shipping rate applies to as defined
   * in the AdWords API.
   */
  locationId: string;
  /**
   * The postal code range that the shipping rate applies to, represented by a
   * postal code, a postal code prefix followed by a * wildcard, a range between
   * two postal codes or two postal code prefixes of equal length.
   */
  postalCode: string;
  /**
   * Fixed shipping price, represented as a number.
   */
  price: Schema$Price;
  /**
   * The geographic region to which a shipping rate applies.
   */
  region: string;
  /**
   * A free-form description of the service class or delivery speed.
   */
  service: string;
}
export interface Schema$ProductShippingDimension {
  /**
   * The unit of value.  Acceptable values are:   - &quot;cm&quot;  -
   * &quot;in&quot;
   */
  unit: string;
  /**
   * The dimension of the product used to calculate the shipping cost of the
   * item.
   */
  value: number;
}
export interface Schema$ProductShippingWeight {
  /**
   * The unit of value.
   */
  unit: string;
  /**
   * The weight of the product used to calculate the shipping cost of the item.
   */
  value: number;
}
export interface Schema$ProductsListResponse {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#productsListResponse&quot;.
   */
  kind: string;
  /**
   * The token for the retrieval of the next page of products.
   */
  nextPageToken: string;
  resources: Schema$Product[];
}
/**
 * The status of a product, i.e., information about a product computed
 * asynchronously by the data quality analysis.
 */
export interface Schema$ProductStatus {
  /**
   * Date on which the item has been created, in ISO 8601 format.
   */
  creationDate: string;
  /**
   * A list of data quality issues associated with the product.
   */
  dataQualityIssues: Schema$ProductStatusDataQualityIssue[];
  /**
   * The intended destinations for the product.
   */
  destinationStatuses: Schema$ProductStatusDestinationStatus[];
  /**
   * Date on which the item expires in Google Shopping, in ISO 8601 format.
   */
  googleExpirationDate: string;
  /**
   * A list of all issues associated with the product.
   */
  itemLevelIssues: Schema$ProductStatusItemLevelIssue[];
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#productStatus&quot;.
   */
  kind: string;
  /**
   * Date on which the item has been last updated, in ISO 8601 format.
   */
  lastUpdateDate: string;
  /**
   * The link to the product.
   */
  link: string;
  /**
   * Product data after applying all the join inputs.
   */
  product: Schema$Product;
  /**
   * The id of the product for which status is reported.
   */
  productId: string;
  /**
   * The title of the product.
   */
  title: string;
}
export interface Schema$ProductStatusDataQualityIssue {
  /**
   * The destination the issue applies to.
   */
  destination: string;
  /**
   * A more detailed error string.
   */
  detail: string;
  /**
   * The fetch status for landing_page_errors.
   */
  fetchStatus: string;
  /**
   * The id of the data quality issue.
   */
  id: string;
  /**
   * The attribute name that is relevant for the issue.
   */
  location: string;
  /**
   * The severity of the data quality issue.
   */
  severity: string;
  /**
   * The time stamp of the data quality issue.
   */
  timestamp: string;
  /**
   * The value of that attribute that was found on the landing page
   */
  valueOnLandingPage: string;
  /**
   * The value the attribute had at time of evaluation.
   */
  valueProvided: string;
}
export interface Schema$ProductStatusDestinationStatus {
  /**
   * Whether the approval status might change due to further processing.
   */
  approvalPending: boolean;
  /**
   * The destination&#39;s approval status.
   */
  approvalStatus: string;
  /**
   * The name of the destination
   */
  destination: string;
  /**
   * Provided for backward compatibility only. Always set to
   * &quot;required&quot;.
   */
  intention: string;
}
export interface Schema$ProductstatusesCustomBatchRequest {
  /**
   * The request entries to be processed in the batch.
   */
  entries: Schema$ProductstatusesCustomBatchRequestEntry[];
}
/**
 * A batch entry encoding a single non-batch productstatuses request.
 */
export interface Schema$ProductstatusesCustomBatchRequestEntry {
  /**
   * An entry ID, unique within the batch request.
   */
  batchId: number;
  /**
   * If set, only issues for the specified destinations are returned, otherwise
   * only issues for the Shopping destination.
   */
  destinations: string[];
  includeAttributes: boolean;
  /**
   * The ID of the managing account.
   */
  merchantId: string;
  method: string;
  /**
   * The ID of the product whose status to get.
   */
  productId: string;
}
export interface Schema$ProductstatusesCustomBatchResponse {
  /**
   * The result of the execution of the batch requests.
   */
  entries: Schema$ProductstatusesCustomBatchResponseEntry[];
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#productstatusesCustomBatchResponse&quot;.
   */
  kind: string;
}
/**
 * A batch entry encoding a single non-batch productstatuses response.
 */
export interface Schema$ProductstatusesCustomBatchResponseEntry {
  /**
   * The ID of the request entry this entry responds to.
   */
  batchId: number;
  /**
   * A list of errors, if the request failed.
   */
  errors: Schema$Errors;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#productstatusesCustomBatchResponseEntry&quot;.
   */
  kind: string;
  /**
   * The requested product status. Only defined if the request was successful.
   */
  productStatus: Schema$ProductStatus;
}
export interface Schema$ProductstatusesListResponse {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#productstatusesListResponse&quot;.
   */
  kind: string;
  /**
   * The token for the retrieval of the next page of products statuses.
   */
  nextPageToken: string;
  resources: Schema$ProductStatus[];
}
export interface Schema$ProductStatusItemLevelIssue {
  /**
   * The attribute&#39;s name, if the issue is caused by a single attribute.
   */
  attributeName: string;
  /**
   * The error code of the issue.
   */
  code: string;
  /**
   * The destination the issue applies to.
   */
  destination: string;
  /**
   * Whether the issue can be resolved by the merchant.
   */
  resolution: string;
  /**
   * How this issue affects serving of the offer.
   */
  servability: string;
}
export interface Schema$ProductTax {
  /**
   * The country within which the item is taxed, specified as a CLDR territory
   * code.
   */
  country: string;
  /**
   * The numeric id of a location that the tax rate applies to as defined in the
   * AdWords API.
   */
  locationId: string;
  /**
   * The postal code range that the tax rate applies to, represented by a ZIP
   * code, a ZIP code prefix using * wildcard, a range between two ZIP codes or
   * two ZIP code prefixes of equal length. Examples: 94114, 94*, 94002-95460,
   * 94*-95*.
   */
  postalCode: string;
  /**
   * The percentage of tax rate that applies to the item price.
   */
  rate: number;
  /**
   * The geographic region to which the tax rate applies.
   */
  region: string;
  /**
   * Set to true if tax is charged on shipping.
   */
  taxShip: boolean;
}
export interface Schema$ProductUnitPricingBaseMeasure {
  /**
   * The unit of the denominator.
   */
  unit: string;
  /**
   * The denominator of the unit price.
   */
  value: string;
}
export interface Schema$ProductUnitPricingMeasure {
  /**
   * The unit of the measure.
   */
  unit: string;
  /**
   * The measure of an item.
   */
  value: number;
}
export interface Schema$RateGroup {
  /**
   * A list of shipping labels defining the products to which this rate group
   * applies to. This is a disjunction: only one of the labels has to match for
   * the rate group to apply. May only be empty for the last rate group of a
   * service. Required.
   */
  applicableShippingLabels: string[];
  /**
   * A list of carrier rates that can be referred to by mainTable or
   * singleValue.
   */
  carrierRates: Schema$CarrierRate[];
  /**
   * A table defining the rate group, when singleValue is not expressive enough.
   * Can only be set if singleValue is not set.
   */
  mainTable: Schema$Table;
  /**
   * The value of the rate group (e.g. flat rate $10). Can only be set if
   * mainTable and subtables are not set.
   */
  singleValue: Schema$Value;
  /**
   * A list of subtables referred to by mainTable. Can only be set if mainTable
   * is set.
   */
  subtables: Schema$Table[];
}
export interface Schema$Row {
  /**
   * The list of cells that constitute the row. Must have the same length as
   * columnHeaders for two-dimensional tables, a length of 1 for one-dimensional
   * tables. Required.
   */
  cells: Schema$Value[];
}
export interface Schema$Service {
  /**
   * A boolean exposing the active status of the shipping service. Required.
   */
  active: boolean;
  /**
   * The CLDR code of the currency to which this service applies. Must match
   * that of the prices in rate groups.
   */
  currency: string;
  /**
   * The CLDR territory code of the country to which the service applies.
   * Required.
   */
  deliveryCountry: string;
  /**
   * Time spent in various aspects from order to the delivery of the product.
   * Required.
   */
  deliveryTime: Schema$DeliveryTime;
  /**
   * Minimum order value for this service. If set, indicates that customers will
   * have to spend at least this amount. All prices within a service must have
   * the same currency.
   */
  minimumOrderValue: Schema$Price;
  /**
   * Free-form name of the service. Must be unique within target account.
   * Required.
   */
  name: string;
  /**
   * Shipping rate group definitions. Only the last one is allowed to have an
   * empty applicableShippingLabels, which means &quot;everything else&quot;.
   * The other applicableShippingLabels must not overlap.
   */
  rateGroups: Schema$RateGroup[];
}
/**
 * The merchant account&#39;s shipping settings.
 */
export interface Schema$ShippingSettings {
  /**
   * The ID of the account to which these account shipping settings belong.
   * Ignored upon update, always present in get request responses.
   */
  accountId: string;
  /**
   * A list of postal code groups that can be referred to in services. Optional.
   */
  postalCodeGroups: Schema$PostalCodeGroup[];
  /**
   * The target account&#39;s list of services. Optional.
   */
  services: Schema$Service[];
}
export interface Schema$ShippingsettingsCustomBatchRequest {
  /**
   * The request entries to be processed in the batch.
   */
  entries: Schema$ShippingsettingsCustomBatchRequestEntry[];
}
/**
 * A batch entry encoding a single non-batch shippingsettings request.
 */
export interface Schema$ShippingsettingsCustomBatchRequestEntry {
  /**
   * The ID of the account for which to get/update account shipping settings.
   */
  accountId: string;
  /**
   * An entry ID, unique within the batch request.
   */
  batchId: number;
  /**
   * The ID of the managing account.
   */
  merchantId: string;
  method: string;
  /**
   * The account shipping settings to update. Only defined if the method is
   * update.
   */
  shippingSettings: Schema$ShippingSettings;
}
export interface Schema$ShippingsettingsCustomBatchResponse {
  /**
   * The result of the execution of the batch requests.
   */
  entries: Schema$ShippingsettingsCustomBatchResponseEntry[];
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#shippingsettingsCustomBatchResponse&quot;.
   */
  kind: string;
}
/**
 * A batch entry encoding a single non-batch shipping settings response.
 */
export interface Schema$ShippingsettingsCustomBatchResponseEntry {
  /**
   * The ID of the request entry to which this entry responds.
   */
  batchId: number;
  /**
   * A list of errors defined if, and only if, the request failed.
   */
  errors: Schema$Errors;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#shippingsettingsCustomBatchResponseEntry&quot;.
   */
  kind: string;
  /**
   * The retrieved or updated account shipping settings.
   */
  shippingSettings: Schema$ShippingSettings;
}
export interface Schema$ShippingsettingsGetSupportedCarriersResponse {
  /**
   * A list of supported carriers. May be empty.
   */
  carriers: Schema$CarriersCarrier[];
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#shippingsettingsGetSupportedCarriersResponse&quot;.
   */
  kind: string;
}
export interface Schema$ShippingsettingsGetSupportedHolidaysResponse {
  /**
   * A list of holidays applicable for delivery guarantees. May be empty.
   */
  holidays: Schema$HolidaysHoliday[];
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#shippingsettingsGetSupportedHolidaysResponse&quot;.
   */
  kind: string;
}
export interface Schema$ShippingsettingsListResponse {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#shippingsettingsListResponse&quot;.
   */
  kind: string;
  /**
   * The token for the retrieval of the next page of shipping settings.
   */
  nextPageToken: string;
  resources: Schema$ShippingSettings[];
}
export interface Schema$Table {
  /**
   * Headers of the table&#39;s columns. Optional: if not set then the table has
   * only one dimension.
   */
  columnHeaders: Schema$Headers;
  /**
   * Name of the table. Required for subtables, ignored for the main table.
   */
  name: string;
  /**
   * Headers of the table&#39;s rows. Required.
   */
  rowHeaders: Schema$Headers;
  /**
   * The list of rows that constitute the table. Must have the same length as
   * rowHeaders. Required.
   */
  rows: Schema$Row[];
}
export interface Schema$TestOrder {
  /**
   * The details of the customer who placed the order.
   */
  customer: Schema$TestOrderCustomer;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#testOrder&quot;.
   */
  kind: string;
  /**
   * Line items that are ordered. At least one line item must be provided.
   */
  lineItems: Schema$TestOrderLineItem[];
  /**
   * Determines if test order must be pulled by merchant or pushed to merchant
   * via push integration.
   */
  notificationMode: string;
  /**
   * The details of the payment method.
   */
  paymentMethod: Schema$TestOrderPaymentMethod;
  /**
   * Identifier of one of the predefined delivery addresses for the delivery.
   */
  predefinedDeliveryAddress: string;
  /**
   * The details of the merchant provided promotions applied to the order. More
   * details about the program are here.
   */
  promotions: Schema$OrderPromotion[];
  /**
   * The total cost of shipping for all items.
   */
  shippingCost: Schema$Price;
  /**
   * The tax for the total shipping cost.
   */
  shippingCostTax: Schema$Price;
  /**
   * The requested shipping option.
   */
  shippingOption: string;
}
export interface Schema$TestOrderCustomer {
  /**
   * Email address of the customer.
   */
  email: string;
  /**
   * If set, this indicates the user explicitly chose to opt in or out of
   * providing marketing rights to the merchant. If unset, this indicates the
   * user has already made this choice in a previous purchase, and was thus not
   * shown the marketing right opt in/out checkbox during the checkout flow.
   * Optional.
   */
  explicitMarketingPreference: boolean;
  /**
   * Full name of the customer.
   */
  fullName: string;
}
export interface Schema$TestOrderLineItem {
  /**
   * Product data from the time of the order placement.
   */
  product: Schema$TestOrderLineItemProduct;
  /**
   * Number of items ordered.
   */
  quantityOrdered: number;
  /**
   * Details of the return policy for the line item.
   */
  returnInfo: Schema$OrderLineItemReturnInfo;
  /**
   * Details of the requested shipping for the line item.
   */
  shippingDetails: Schema$OrderLineItemShippingDetails;
  /**
   * Unit tax for the line item.
   */
  unitTax: Schema$Price;
}
export interface Schema$TestOrderLineItemProduct {
  /**
   * Brand of the item.
   */
  brand: string;
  /**
   * The item&#39;s channel.
   */
  channel: string;
  /**
   * Condition or state of the item.
   */
  condition: string;
  /**
   * The two-letter ISO 639-1 language code for the item.
   */
  contentLanguage: string;
  /**
   * Global Trade Item Number (GTIN) of the item. Optional.
   */
  gtin: string;
  /**
   * URL of an image of the item.
   */
  imageLink: string;
  /**
   * Shared identifier for all variants of the same product. Optional.
   */
  itemGroupId: string;
  /**
   * Manufacturer Part Number (MPN) of the item. Optional.
   */
  mpn: string;
  /**
   * An identifier of the item.
   */
  offerId: string;
  /**
   * The price for the product.
   */
  price: Schema$Price;
  /**
   * The CLDR territory code of the target country of the product.
   */
  targetCountry: string;
  /**
   * The title of the product.
   */
  title: string;
  /**
   * Variant attributes for the item. Optional.
   */
  variantAttributes: Schema$OrderLineItemProductVariantAttribute[];
}
export interface Schema$TestOrderPaymentMethod {
  /**
   * The card expiration month (January = 1, February = 2 etc.).
   */
  expirationMonth: number;
  /**
   * The card expiration year (4-digit, e.g. 2015).
   */
  expirationYear: number;
  /**
   * The last four digits of the card number.
   */
  lastFourDigits: string;
  /**
   * The billing address.
   */
  predefinedBillingAddress: string;
  /**
   * The type of instrument. Note that real orders might have different values
   * than the four values accepted by createTestOrder.
   */
  type: string;
}
/**
 * The single value of a rate group or the value of a rate group table&#39;s
 * cell. Exactly one of noShipping, flatRate, pricePercentage, carrierRateName,
 * subtableName must be set.
 */
export interface Schema$Value {
  /**
   * The name of a carrier rate referring to a carrier rate defined in the same
   * rate group. Can only be set if all other fields are not set.
   */
  carrierRateName: string;
  /**
   * A flat rate. Can only be set if all other fields are not set.
   */
  flatRate: Schema$Price;
  /**
   * If true, then the product can&#39;t ship. Must be true when set, can only
   * be set if all other fields are not set.
   */
  noShipping: boolean;
  /**
   * A percentage of the price represented as a number in decimal notation
   * (e.g., &quot;5.4&quot;). Can only be set if all other fields are not set.
   */
  pricePercentage: string;
  /**
   * The name of a subtable. Can only be set in table cells (i.e., not for
   * single values), and only if all other fields are not set.
   */
  subtableName: string;
}
export interface Schema$Weight {
  /**
   * The weight unit.
   */
  unit: string;
  /**
   * The weight represented as a number.
   */
  value: string;
}

export class Resource$Accounts {
  root: Content;
  constructor(root: Content) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * content.accounts.authinfo
   * @desc Returns information about the authenticated user.
   * @alias content.accounts.authinfo
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  authinfo(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$AccountsAuthInfoResponse>;
  authinfo(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$AccountsAuthInfoResponse>,
      callback?: BodyResponseCallback<Schema$AccountsAuthInfoResponse>): void;
  authinfo(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$AccountsAuthInfoResponse>,
      callback?: BodyResponseCallback<Schema$AccountsAuthInfoResponse>):
      void|AxiosPromise<Schema$AccountsAuthInfoResponse> {
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
            url: (rootUrl + '/content/v2/accounts/authinfo')
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
      createAPIRequest<Schema$AccountsAuthInfoResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$AccountsAuthInfoResponse>(parameters);
    }
  }


  /**
   * content.accounts.claimwebsite
   * @desc Claims the website of a Merchant Center sub-account.
   * @alias content.accounts.claimwebsite
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The ID of the account whose website is claimed.
   * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
   * @param {boolean=} params.overwrite Only available to selected merchants. When set to True, this flag removes any existing claim on the requested website by another account and replaces it with a claim from this account.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  claimwebsite(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$AccountsClaimWebsiteResponse>;
  claimwebsite(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$AccountsClaimWebsiteResponse>,
      callback?: BodyResponseCallback<Schema$AccountsClaimWebsiteResponse>):
      void;
  claimwebsite(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$AccountsClaimWebsiteResponse>,
      callback?: BodyResponseCallback<Schema$AccountsClaimWebsiteResponse>):
      void|AxiosPromise<Schema$AccountsClaimWebsiteResponse> {
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
                  '/content/v2/{merchantId}/accounts/{accountId}/claimwebsite')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['merchantId', 'accountId'],
      pathParams: ['accountId', 'merchantId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$AccountsClaimWebsiteResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$AccountsClaimWebsiteResponse>(parameters);
    }
  }


  /**
   * content.accounts.custombatch
   * @desc Retrieves, inserts, updates, and deletes multiple Merchant Center
   * (sub-)accounts in a single request.
   * @alias content.accounts.custombatch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
   * @param {().AccountsCustomBatchRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  custombatch(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$AccountsCustomBatchResponse>;
  custombatch(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$AccountsCustomBatchResponse>,
      callback?: BodyResponseCallback<Schema$AccountsCustomBatchResponse>):
      void;
  custombatch(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$AccountsCustomBatchResponse>,
      callback?: BodyResponseCallback<Schema$AccountsCustomBatchResponse>):
      void|AxiosPromise<Schema$AccountsCustomBatchResponse> {
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
            url: (rootUrl + '/content/v2/accounts/batch')
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
      createAPIRequest<Schema$AccountsCustomBatchResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$AccountsCustomBatchResponse>(parameters);
    }
  }


  /**
   * content.accounts.delete
   * @desc Deletes a Merchant Center sub-account.
   * @alias content.accounts.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The ID of the account.
   * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
   * @param {boolean=} params.force Flag to delete sub-accounts with products. The default value is false.
   * @param {string} params.merchantId The ID of the managing account. This must be a multi-client account, and accountId must be the ID of a sub-account of this account.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
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
            url: (rootUrl + '/content/v2/{merchantId}/accounts/{accountId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['merchantId', 'accountId'],
      pathParams: ['accountId', 'merchantId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * content.accounts.get
   * @desc Retrieves a Merchant Center account.
   * @alias content.accounts.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The ID of the account.
   * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
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
            url: (rootUrl + '/content/v2/{merchantId}/accounts/{accountId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['merchantId', 'accountId'],
      pathParams: ['accountId', 'merchantId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Account>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Account>(parameters);
    }
  }


  /**
   * content.accounts.insert
   * @desc Creates a Merchant Center sub-account.
   * @alias content.accounts.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
   * @param {string} params.merchantId The ID of the managing account. This must be a multi-client account.
   * @param {().Account} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions): AxiosPromise<Schema$Account>;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Account>,
      callback?: BodyResponseCallback<Schema$Account>): void;
  insert(
      params?: any,
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
            url: (rootUrl + '/content/v2/{merchantId}/accounts')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['merchantId'],
      pathParams: ['merchantId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Account>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Account>(parameters);
    }
  }


  /**
   * content.accounts.list
   * @desc Lists the sub-accounts in your Merchant Center account.
   * @alias content.accounts.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer=} params.maxResults The maximum number of accounts to return in the response, used for paging.
   * @param {string} params.merchantId The ID of the managing account. This must be a multi-client account.
   * @param {string=} params.pageToken The token returned by the previous request.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$AccountsListResponse>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$AccountsListResponse>,
      callback?: BodyResponseCallback<Schema$AccountsListResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$AccountsListResponse>,
      callback?: BodyResponseCallback<Schema$AccountsListResponse>):
      void|AxiosPromise<Schema$AccountsListResponse> {
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
            url: (rootUrl + '/content/v2/{merchantId}/accounts')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['merchantId'],
      pathParams: ['merchantId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$AccountsListResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$AccountsListResponse>(parameters);
    }
  }


  /**
   * content.accounts.patch
   * @desc Updates a Merchant Center account. This method supports patch
   * semantics.
   * @alias content.accounts.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The ID of the account.
   * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
   * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
   * @param {().Account} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$Account>;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Account>,
      callback?: BodyResponseCallback<Schema$Account>): void;
  patch(
      params?: any,
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
            url: (rootUrl + '/content/v2/{merchantId}/accounts/{accountId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['merchantId', 'accountId'],
      pathParams: ['accountId', 'merchantId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Account>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Account>(parameters);
    }
  }


  /**
   * content.accounts.update
   * @desc Updates a Merchant Center account.
   * @alias content.accounts.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The ID of the account.
   * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
   * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
   * @param {().Account} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions): AxiosPromise<Schema$Account>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Account>,
      callback?: BodyResponseCallback<Schema$Account>): void;
  update(
      params?: any,
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
            url: (rootUrl + '/content/v2/{merchantId}/accounts/{accountId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['merchantId', 'accountId'],
      pathParams: ['accountId', 'merchantId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Account>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Account>(parameters);
    }
  }
}

export class Resource$Accountstatuses {
  root: Content;
  constructor(root: Content) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * content.accountstatuses.custombatch
   * @alias content.accountstatuses.custombatch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().AccountstatusesCustomBatchRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  custombatch(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$AccountstatusesCustomBatchResponse>;
  custombatch(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$AccountstatusesCustomBatchResponse>,
      callback?:
          BodyResponseCallback<Schema$AccountstatusesCustomBatchResponse>):
      void;
  custombatch(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$AccountstatusesCustomBatchResponse>,
      callback?:
          BodyResponseCallback<Schema$AccountstatusesCustomBatchResponse>):
      void|AxiosPromise<Schema$AccountstatusesCustomBatchResponse> {
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
            url: (rootUrl + '/content/v2/accountstatuses/batch')
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
      createAPIRequest<Schema$AccountstatusesCustomBatchResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$AccountstatusesCustomBatchResponse>(
          parameters);
    }
  }


  /**
   * content.accountstatuses.get
   * @desc Retrieves the status of a Merchant Center account.
   * @alias content.accountstatuses.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The ID of the account.
   * @param {string=} params.destinations If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
   * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any,
      options?: MethodOptions): AxiosPromise<Schema$AccountStatus>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$AccountStatus>,
      callback?: BodyResponseCallback<Schema$AccountStatus>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$AccountStatus>,
      callback?: BodyResponseCallback<Schema$AccountStatus>):
      void|AxiosPromise<Schema$AccountStatus> {
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
                  '/content/v2/{merchantId}/accountstatuses/{accountId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['merchantId', 'accountId'],
      pathParams: ['accountId', 'merchantId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$AccountStatus>(parameters, callback);
    } else {
      return createAPIRequest<Schema$AccountStatus>(parameters);
    }
  }


  /**
   * content.accountstatuses.list
   * @desc Lists the statuses of the sub-accounts in your Merchant Center
   * account.
   * @alias content.accountstatuses.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.destinations If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
   * @param {integer=} params.maxResults The maximum number of account statuses to return in the response, used for paging.
   * @param {string} params.merchantId The ID of the managing account. This must be a multi-client account.
   * @param {string=} params.pageToken The token returned by the previous request.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$AccountstatusesListResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$AccountstatusesListResponse>,
      callback?: BodyResponseCallback<Schema$AccountstatusesListResponse>):
      void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$AccountstatusesListResponse>,
      callback?: BodyResponseCallback<Schema$AccountstatusesListResponse>):
      void|AxiosPromise<Schema$AccountstatusesListResponse> {
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
            url: (rootUrl + '/content/v2/{merchantId}/accountstatuses')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['merchantId'],
      pathParams: ['merchantId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$AccountstatusesListResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$AccountstatusesListResponse>(parameters);
    }
  }
}

export class Resource$Accounttax {
  root: Content;
  constructor(root: Content) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * content.accounttax.custombatch
   * @desc Retrieves and updates tax settings of multiple accounts in a single
   * request.
   * @alias content.accounttax.custombatch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
   * @param {().AccounttaxCustomBatchRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  custombatch(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$AccounttaxCustomBatchResponse>;
  custombatch(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$AccounttaxCustomBatchResponse>,
      callback?: BodyResponseCallback<Schema$AccounttaxCustomBatchResponse>):
      void;
  custombatch(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$AccounttaxCustomBatchResponse>,
      callback?: BodyResponseCallback<Schema$AccounttaxCustomBatchResponse>):
      void|AxiosPromise<Schema$AccounttaxCustomBatchResponse> {
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
            url: (rootUrl + '/content/v2/accounttax/batch')
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
      createAPIRequest<Schema$AccounttaxCustomBatchResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$AccounttaxCustomBatchResponse>(parameters);
    }
  }


  /**
   * content.accounttax.get
   * @desc Retrieves the tax settings of the account.
   * @alias content.accounttax.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The ID of the account for which to get/update account tax settings.
   * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$AccountTax>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$AccountTax>,
      callback?: BodyResponseCallback<Schema$AccountTax>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$AccountTax>,
      callback?: BodyResponseCallback<Schema$AccountTax>):
      void|AxiosPromise<Schema$AccountTax> {
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
            url: (rootUrl + '/content/v2/{merchantId}/accounttax/{accountId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['merchantId', 'accountId'],
      pathParams: ['accountId', 'merchantId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$AccountTax>(parameters, callback);
    } else {
      return createAPIRequest<Schema$AccountTax>(parameters);
    }
  }


  /**
   * content.accounttax.list
   * @desc Lists the tax settings of the sub-accounts in your Merchant Center
   * account.
   * @alias content.accounttax.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer=} params.maxResults The maximum number of tax settings to return in the response, used for paging.
   * @param {string} params.merchantId The ID of the managing account. This must be a multi-client account.
   * @param {string=} params.pageToken The token returned by the previous request.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$AccounttaxListResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$AccounttaxListResponse>,
      callback?: BodyResponseCallback<Schema$AccounttaxListResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$AccounttaxListResponse>,
      callback?: BodyResponseCallback<Schema$AccounttaxListResponse>):
      void|AxiosPromise<Schema$AccounttaxListResponse> {
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
            url: (rootUrl + '/content/v2/{merchantId}/accounttax')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['merchantId'],
      pathParams: ['merchantId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$AccounttaxListResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$AccounttaxListResponse>(parameters);
    }
  }


  /**
   * content.accounttax.patch
   * @desc Updates the tax settings of the account. This method supports patch
   * semantics.
   * @alias content.accounttax.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The ID of the account for which to get/update account tax settings.
   * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
   * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
   * @param {().AccountTax} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$AccountTax>;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$AccountTax>,
      callback?: BodyResponseCallback<Schema$AccountTax>): void;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$AccountTax>,
      callback?: BodyResponseCallback<Schema$AccountTax>):
      void|AxiosPromise<Schema$AccountTax> {
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
            url: (rootUrl + '/content/v2/{merchantId}/accounttax/{accountId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['merchantId', 'accountId'],
      pathParams: ['accountId', 'merchantId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$AccountTax>(parameters, callback);
    } else {
      return createAPIRequest<Schema$AccountTax>(parameters);
    }
  }


  /**
   * content.accounttax.update
   * @desc Updates the tax settings of the account.
   * @alias content.accounttax.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The ID of the account for which to get/update account tax settings.
   * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
   * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
   * @param {().AccountTax} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$AccountTax>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$AccountTax>,
      callback?: BodyResponseCallback<Schema$AccountTax>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$AccountTax>,
      callback?: BodyResponseCallback<Schema$AccountTax>):
      void|AxiosPromise<Schema$AccountTax> {
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
            url: (rootUrl + '/content/v2/{merchantId}/accounttax/{accountId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['merchantId', 'accountId'],
      pathParams: ['accountId', 'merchantId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$AccountTax>(parameters, callback);
    } else {
      return createAPIRequest<Schema$AccountTax>(parameters);
    }
  }
}

export class Resource$Datafeeds {
  root: Content;
  constructor(root: Content) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * content.datafeeds.custombatch
   * @alias content.datafeeds.custombatch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
   * @param {().DatafeedsCustomBatchRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  custombatch(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$DatafeedsCustomBatchResponse>;
  custombatch(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$DatafeedsCustomBatchResponse>,
      callback?: BodyResponseCallback<Schema$DatafeedsCustomBatchResponse>):
      void;
  custombatch(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$DatafeedsCustomBatchResponse>,
      callback?: BodyResponseCallback<Schema$DatafeedsCustomBatchResponse>):
      void|AxiosPromise<Schema$DatafeedsCustomBatchResponse> {
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
            url: (rootUrl + '/content/v2/datafeeds/batch')
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
      createAPIRequest<Schema$DatafeedsCustomBatchResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$DatafeedsCustomBatchResponse>(parameters);
    }
  }


  /**
   * content.datafeeds.delete
   * @desc Deletes a datafeed configuration from your Merchant Center account.
   * @alias content.datafeeds.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.datafeedId The ID of the datafeed.
   * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
   * @param {string} params.merchantId The ID of the account that manages the datafeed. This account cannot be a multi-client account.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
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
            url: (rootUrl + '/content/v2/{merchantId}/datafeeds/{datafeedId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['merchantId', 'datafeedId'],
      pathParams: ['datafeedId', 'merchantId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * content.datafeeds.fetchnow
   * @desc Invokes a fetch for the datafeed in your Merchant Center account.
   * @alias content.datafeeds.fetchnow
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.datafeedId The ID of the datafeed to be fetched.
   * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
   * @param {string} params.merchantId The ID of the account that manages the datafeed. This account cannot be a multi-client account.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  fetchnow(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$DatafeedsFetchNowResponse>;
  fetchnow(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$DatafeedsFetchNowResponse>,
      callback?: BodyResponseCallback<Schema$DatafeedsFetchNowResponse>): void;
  fetchnow(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$DatafeedsFetchNowResponse>,
      callback?: BodyResponseCallback<Schema$DatafeedsFetchNowResponse>):
      void|AxiosPromise<Schema$DatafeedsFetchNowResponse> {
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
                  '/content/v2/{merchantId}/datafeeds/{datafeedId}/fetchNow')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['merchantId', 'datafeedId'],
      pathParams: ['datafeedId', 'merchantId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$DatafeedsFetchNowResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$DatafeedsFetchNowResponse>(parameters);
    }
  }


  /**
   * content.datafeeds.get
   * @desc Retrieves a datafeed configuration from your Merchant Center account.
   * @alias content.datafeeds.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.datafeedId The ID of the datafeed.
   * @param {string} params.merchantId The ID of the account that manages the datafeed. This account cannot be a multi-client account.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Datafeed>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Datafeed>,
      callback?: BodyResponseCallback<Schema$Datafeed>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Datafeed>,
      callback?: BodyResponseCallback<Schema$Datafeed>):
      void|AxiosPromise<Schema$Datafeed> {
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
            url: (rootUrl + '/content/v2/{merchantId}/datafeeds/{datafeedId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['merchantId', 'datafeedId'],
      pathParams: ['datafeedId', 'merchantId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Datafeed>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Datafeed>(parameters);
    }
  }


  /**
   * content.datafeeds.insert
   * @desc Registers a datafeed configuration with your Merchant Center account.
   * @alias content.datafeeds.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
   * @param {string} params.merchantId The ID of the account that manages the datafeed. This account cannot be a multi-client account.
   * @param {().Datafeed} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions): AxiosPromise<Schema$Datafeed>;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Datafeed>,
      callback?: BodyResponseCallback<Schema$Datafeed>): void;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Datafeed>,
      callback?: BodyResponseCallback<Schema$Datafeed>):
      void|AxiosPromise<Schema$Datafeed> {
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
            url: (rootUrl + '/content/v2/{merchantId}/datafeeds')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['merchantId'],
      pathParams: ['merchantId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Datafeed>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Datafeed>(parameters);
    }
  }


  /**
   * content.datafeeds.list
   * @desc Lists the configurations for datafeeds in your Merchant Center
   * account.
   * @alias content.datafeeds.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer=} params.maxResults The maximum number of products to return in the response, used for paging.
   * @param {string} params.merchantId The ID of the account that manages the datafeeds. This account cannot be a multi-client account.
   * @param {string=} params.pageToken The token returned by the previous request.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$DatafeedsListResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$DatafeedsListResponse>,
      callback?: BodyResponseCallback<Schema$DatafeedsListResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$DatafeedsListResponse>,
      callback?: BodyResponseCallback<Schema$DatafeedsListResponse>):
      void|AxiosPromise<Schema$DatafeedsListResponse> {
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
            url: (rootUrl + '/content/v2/{merchantId}/datafeeds')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['merchantId'],
      pathParams: ['merchantId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$DatafeedsListResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$DatafeedsListResponse>(parameters);
    }
  }


  /**
   * content.datafeeds.patch
   * @desc Updates a datafeed configuration of your Merchant Center account.
   * This method supports patch semantics.
   * @alias content.datafeeds.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.datafeedId The ID of the datafeed.
   * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
   * @param {string} params.merchantId The ID of the account that manages the datafeed. This account cannot be a multi-client account.
   * @param {().Datafeed} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$Datafeed>;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Datafeed>,
      callback?: BodyResponseCallback<Schema$Datafeed>): void;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Datafeed>,
      callback?: BodyResponseCallback<Schema$Datafeed>):
      void|AxiosPromise<Schema$Datafeed> {
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
            url: (rootUrl + '/content/v2/{merchantId}/datafeeds/{datafeedId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['merchantId', 'datafeedId'],
      pathParams: ['datafeedId', 'merchantId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Datafeed>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Datafeed>(parameters);
    }
  }


  /**
   * content.datafeeds.update
   * @desc Updates a datafeed configuration of your Merchant Center account.
   * @alias content.datafeeds.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.datafeedId The ID of the datafeed.
   * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
   * @param {string} params.merchantId The ID of the account that manages the datafeed. This account cannot be a multi-client account.
   * @param {().Datafeed} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions): AxiosPromise<Schema$Datafeed>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Datafeed>,
      callback?: BodyResponseCallback<Schema$Datafeed>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Datafeed>,
      callback?: BodyResponseCallback<Schema$Datafeed>):
      void|AxiosPromise<Schema$Datafeed> {
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
            url: (rootUrl + '/content/v2/{merchantId}/datafeeds/{datafeedId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['merchantId', 'datafeedId'],
      pathParams: ['datafeedId', 'merchantId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Datafeed>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Datafeed>(parameters);
    }
  }
}

export class Resource$Datafeedstatuses {
  root: Content;
  constructor(root: Content) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * content.datafeedstatuses.custombatch
   * @alias content.datafeedstatuses.custombatch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().DatafeedstatusesCustomBatchRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  custombatch(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$DatafeedstatusesCustomBatchResponse>;
  custombatch(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$DatafeedstatusesCustomBatchResponse>,
      callback?:
          BodyResponseCallback<Schema$DatafeedstatusesCustomBatchResponse>):
      void;
  custombatch(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$DatafeedstatusesCustomBatchResponse>,
      callback?:
          BodyResponseCallback<Schema$DatafeedstatusesCustomBatchResponse>):
      void|AxiosPromise<Schema$DatafeedstatusesCustomBatchResponse> {
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
            url: (rootUrl + '/content/v2/datafeedstatuses/batch')
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
      createAPIRequest<Schema$DatafeedstatusesCustomBatchResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$DatafeedstatusesCustomBatchResponse>(
          parameters);
    }
  }


  /**
   * content.datafeedstatuses.get
   * @desc Retrieves the status of a datafeed from your Merchant Center account.
   * @alias content.datafeedstatuses.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.country The country for which to get the datafeed status. If this parameter is provided then language must also be provided. Note that this parameter is required for feeds targeting multiple countries and languages, since a feed may have a different status for each target.
   * @param {string} params.datafeedId The ID of the datafeed.
   * @param {string=} params.language The language for which to get the datafeed status. If this parameter is provided then country must also be provided. Note that this parameter is required for feeds targeting multiple countries and languages, since a feed may have a different status for each target.
   * @param {string} params.merchantId The ID of the account that manages the datafeed. This account cannot be a multi-client account.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any,
      options?: MethodOptions): AxiosPromise<Schema$DatafeedStatus>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$DatafeedStatus>,
      callback?: BodyResponseCallback<Schema$DatafeedStatus>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$DatafeedStatus>,
      callback?: BodyResponseCallback<Schema$DatafeedStatus>):
      void|AxiosPromise<Schema$DatafeedStatus> {
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
                  '/content/v2/{merchantId}/datafeedstatuses/{datafeedId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['merchantId', 'datafeedId'],
      pathParams: ['datafeedId', 'merchantId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$DatafeedStatus>(parameters, callback);
    } else {
      return createAPIRequest<Schema$DatafeedStatus>(parameters);
    }
  }


  /**
   * content.datafeedstatuses.list
   * @desc Lists the statuses of the datafeeds in your Merchant Center account.
   * @alias content.datafeedstatuses.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer=} params.maxResults The maximum number of products to return in the response, used for paging.
   * @param {string} params.merchantId The ID of the account that manages the datafeeds. This account cannot be a multi-client account.
   * @param {string=} params.pageToken The token returned by the previous request.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$DatafeedstatusesListResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$DatafeedstatusesListResponse>,
      callback?: BodyResponseCallback<Schema$DatafeedstatusesListResponse>):
      void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$DatafeedstatusesListResponse>,
      callback?: BodyResponseCallback<Schema$DatafeedstatusesListResponse>):
      void|AxiosPromise<Schema$DatafeedstatusesListResponse> {
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
            url: (rootUrl + '/content/v2/{merchantId}/datafeedstatuses')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['merchantId'],
      pathParams: ['merchantId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$DatafeedstatusesListResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$DatafeedstatusesListResponse>(parameters);
    }
  }
}

export class Resource$Inventory {
  root: Content;
  constructor(root: Content) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * content.inventory.custombatch
   * @desc Updates price and availability for multiple products or stores in a
   * single request. This operation does not update the expiration date of the
   * products.
   * @alias content.inventory.custombatch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
   * @param {().InventoryCustomBatchRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  custombatch(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$InventoryCustomBatchResponse>;
  custombatch(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$InventoryCustomBatchResponse>,
      callback?: BodyResponseCallback<Schema$InventoryCustomBatchResponse>):
      void;
  custombatch(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$InventoryCustomBatchResponse>,
      callback?: BodyResponseCallback<Schema$InventoryCustomBatchResponse>):
      void|AxiosPromise<Schema$InventoryCustomBatchResponse> {
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
            url: (rootUrl + '/content/v2/inventory/batch')
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
      createAPIRequest<Schema$InventoryCustomBatchResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$InventoryCustomBatchResponse>(parameters);
    }
  }


  /**
   * content.inventory.set
   * @desc Updates price and availability of a product in your Merchant Center
   * account.
   * @alias content.inventory.set
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
   * @param {string} params.merchantId The ID of the account that contains the product. This account cannot be a multi-client account.
   * @param {string} params.productId The REST id of the product for which to update price and availability.
   * @param {string} params.storeCode The code of the store for which to update price and availability. Use online to update price and availability of an online product.
   * @param {().InventorySetRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  set(params?: any,
      options?: MethodOptions): AxiosPromise<Schema$InventorySetResponse>;
  set(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$InventorySetResponse>,
      callback?: BodyResponseCallback<Schema$InventorySetResponse>): void;
  set(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$InventorySetResponse>,
      callback?: BodyResponseCallback<Schema$InventorySetResponse>):
      void|AxiosPromise<Schema$InventorySetResponse> {
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
                 '/content/v2/{merchantId}/inventory/{storeCode}/products/{productId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['merchantId', 'storeCode', 'productId'],
      pathParams: ['merchantId', 'productId', 'storeCode'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$InventorySetResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$InventorySetResponse>(parameters);
    }
  }
}

export class Resource$Liasettings {
  root: Content;
  constructor(root: Content) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * content.liasettings.custombatch
   * @desc Retrieves and/or updates the LIA settings of multiple accounts in a
   * single request.
   * @alias content.liasettings.custombatch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
   * @param {().LiasettingsCustomBatchRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  custombatch(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$LiasettingsCustomBatchResponse>;
  custombatch(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$LiasettingsCustomBatchResponse>,
      callback?: BodyResponseCallback<Schema$LiasettingsCustomBatchResponse>):
      void;
  custombatch(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$LiasettingsCustomBatchResponse>,
      callback?: BodyResponseCallback<Schema$LiasettingsCustomBatchResponse>):
      void|AxiosPromise<Schema$LiasettingsCustomBatchResponse> {
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
            url: (rootUrl + '/content/v2/liasettings/batch')
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
      createAPIRequest<Schema$LiasettingsCustomBatchResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$LiasettingsCustomBatchResponse>(
          parameters);
    }
  }


  /**
   * content.liasettings.get
   * @desc Retrieves the LIA settings of the account.
   * @alias content.liasettings.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The ID of the account for which to get or update LIA settings.
   * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$LiaSettings>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$LiaSettings>,
      callback?: BodyResponseCallback<Schema$LiaSettings>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$LiaSettings>,
      callback?: BodyResponseCallback<Schema$LiaSettings>):
      void|AxiosPromise<Schema$LiaSettings> {
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
            url: (rootUrl + '/content/v2/{merchantId}/liasettings/{accountId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['merchantId', 'accountId'],
      pathParams: ['accountId', 'merchantId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$LiaSettings>(parameters, callback);
    } else {
      return createAPIRequest<Schema$LiaSettings>(parameters);
    }
  }


  /**
   * content.liasettings.getaccessiblegmbaccounts
   * @desc Retrieves the list of accessible Google My Business accounts.
   * @alias content.liasettings.getaccessiblegmbaccounts
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The ID of the account for which to retrieve accessible Google My Business accounts.
   * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getaccessiblegmbaccounts(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$LiasettingsGetAccessibleGmbAccountsResponse>;
  getaccessiblegmbaccounts(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$LiasettingsGetAccessibleGmbAccountsResponse>,
      callback?: BodyResponseCallback<
          Schema$LiasettingsGetAccessibleGmbAccountsResponse>): void;
  getaccessiblegmbaccounts(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$LiasettingsGetAccessibleGmbAccountsResponse>,
      callback?: BodyResponseCallback<
          Schema$LiasettingsGetAccessibleGmbAccountsResponse>):
      void|AxiosPromise<Schema$LiasettingsGetAccessibleGmbAccountsResponse> {
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
                 '/content/v2/{merchantId}/liasettings/{accountId}/accessiblegmbaccounts')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['merchantId', 'accountId'],
      pathParams: ['accountId', 'merchantId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$LiasettingsGetAccessibleGmbAccountsResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<
          Schema$LiasettingsGetAccessibleGmbAccountsResponse>(parameters);
    }
  }


  /**
   * content.liasettings.list
   * @desc Lists the LIA settings of the sub-accounts in your Merchant Center
   * account.
   * @alias content.liasettings.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer=} params.maxResults The maximum number of LIA settings to return in the response, used for paging.
   * @param {string} params.merchantId The ID of the managing account. This must be a multi-client account.
   * @param {string=} params.pageToken The token returned by the previous request.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$LiasettingsListResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$LiasettingsListResponse>,
      callback?: BodyResponseCallback<Schema$LiasettingsListResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$LiasettingsListResponse>,
      callback?: BodyResponseCallback<Schema$LiasettingsListResponse>):
      void|AxiosPromise<Schema$LiasettingsListResponse> {
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
            url: (rootUrl + '/content/v2/{merchantId}/liasettings')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['merchantId'],
      pathParams: ['merchantId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$LiasettingsListResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$LiasettingsListResponse>(parameters);
    }
  }


  /**
   * content.liasettings.patch
   * @desc Updates the LIA settings of the account. This method supports patch
   * semantics.
   * @alias content.liasettings.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The ID of the account for which to get or update LIA settings.
   * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
   * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
   * @param {().LiaSettings} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$LiaSettings>;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$LiaSettings>,
      callback?: BodyResponseCallback<Schema$LiaSettings>): void;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$LiaSettings>,
      callback?: BodyResponseCallback<Schema$LiaSettings>):
      void|AxiosPromise<Schema$LiaSettings> {
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
            url: (rootUrl + '/content/v2/{merchantId}/liasettings/{accountId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['merchantId', 'accountId'],
      pathParams: ['accountId', 'merchantId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$LiaSettings>(parameters, callback);
    } else {
      return createAPIRequest<Schema$LiaSettings>(parameters);
    }
  }


  /**
   * content.liasettings.requestgmbaccess
   * @desc Requests access to a specified Google My Business account.
   * @alias content.liasettings.requestgmbaccess
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The ID of the account for which GMB access is requested.
   * @param {string=} params.gmbEmail The email of the Google My Business account.
   * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  requestgmbaccess(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$LiasettingsRequestGmbAccessResponse>;
  requestgmbaccess(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$LiasettingsRequestGmbAccessResponse>,
      callback?:
          BodyResponseCallback<Schema$LiasettingsRequestGmbAccessResponse>):
      void;
  requestgmbaccess(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$LiasettingsRequestGmbAccessResponse>,
      callback?:
          BodyResponseCallback<Schema$LiasettingsRequestGmbAccessResponse>):
      void|AxiosPromise<Schema$LiasettingsRequestGmbAccessResponse> {
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
                 '/content/v2/{merchantId}/liasettings/{accountId}/requestgmbaccess')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['merchantId', 'accountId'],
      pathParams: ['accountId', 'merchantId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$LiasettingsRequestGmbAccessResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$LiasettingsRequestGmbAccessResponse>(
          parameters);
    }
  }


  /**
   * content.liasettings.requestinventoryverification
   * @desc Requests inventory validation for the specified country.
   * @alias content.liasettings.requestinventoryverification
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The ID of the account that manages the order. This cannot be a multi-client account.
   * @param {string} params.country The country for which inventory validation is requested.
   * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  requestinventoryverification(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$LiasettingsRequestInventoryVerificationResponse>;
  requestinventoryverification(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<
          Schema$LiasettingsRequestInventoryVerificationResponse>,
      callback?: BodyResponseCallback<
          Schema$LiasettingsRequestInventoryVerificationResponse>): void;
  requestinventoryverification(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<
          Schema$LiasettingsRequestInventoryVerificationResponse>,
      callback?: BodyResponseCallback<
          Schema$LiasettingsRequestInventoryVerificationResponse>): void|
      AxiosPromise<Schema$LiasettingsRequestInventoryVerificationResponse> {
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
                 '/content/v2/{merchantId}/liasettings/{accountId}/requestinventoryverification/{country}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['merchantId', 'accountId', 'country'],
      pathParams: ['accountId', 'country', 'merchantId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$LiasettingsRequestInventoryVerificationResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<
          Schema$LiasettingsRequestInventoryVerificationResponse>(parameters);
    }
  }


  /**
   * content.liasettings.setinventoryverificationcontact
   * @desc Sets the inventory verification contract for the specified country.
   * @alias content.liasettings.setinventoryverificationcontact
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The ID of the account that manages the order. This cannot be a multi-client account.
   * @param {string=} params.contactEmail The email of the inventory verification contact.
   * @param {string=} params.contactName The name of the inventory verification contact.
   * @param {string=} params.country The country for which inventory verification is requested.
   * @param {string=} params.language The language for which inventory verification is requested.
   * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  setinventoryverificationcontact(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$LiasettingsSetInventoryVerificationContactResponse>;
  setinventoryverificationcontact(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<
          Schema$LiasettingsSetInventoryVerificationContactResponse>,
      callback?: BodyResponseCallback<
          Schema$LiasettingsSetInventoryVerificationContactResponse>): void;
  setinventoryverificationcontact(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<
          Schema$LiasettingsSetInventoryVerificationContactResponse>,
      callback?: BodyResponseCallback<
          Schema$LiasettingsSetInventoryVerificationContactResponse>): void|
      AxiosPromise<Schema$LiasettingsSetInventoryVerificationContactResponse> {
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
                 '/content/v2/{merchantId}/liasettings/{accountId}/setinventoryverificationcontact')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['merchantId', 'accountId'],
      pathParams: ['accountId', 'merchantId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<
          Schema$LiasettingsSetInventoryVerificationContactResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<
          Schema$LiasettingsSetInventoryVerificationContactResponse>(
          parameters);
    }
  }


  /**
   * content.liasettings.update
   * @desc Updates the LIA settings of the account.
   * @alias content.liasettings.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The ID of the account for which to get or update LIA settings.
   * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
   * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
   * @param {().LiaSettings} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$LiaSettings>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$LiaSettings>,
      callback?: BodyResponseCallback<Schema$LiaSettings>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$LiaSettings>,
      callback?: BodyResponseCallback<Schema$LiaSettings>):
      void|AxiosPromise<Schema$LiaSettings> {
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
            url: (rootUrl + '/content/v2/{merchantId}/liasettings/{accountId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['merchantId', 'accountId'],
      pathParams: ['accountId', 'merchantId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$LiaSettings>(parameters, callback);
    } else {
      return createAPIRequest<Schema$LiaSettings>(parameters);
    }
  }
}

export class Resource$Orders {
  root: Content;
  constructor(root: Content) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * content.orders.acknowledge
   * @desc Marks an order as acknowledged.
   * @alias content.orders.acknowledge
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
   * @param {string} params.orderId The ID of the order.
   * @param {().OrdersAcknowledgeRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  acknowledge(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$OrdersAcknowledgeResponse>;
  acknowledge(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$OrdersAcknowledgeResponse>,
      callback?: BodyResponseCallback<Schema$OrdersAcknowledgeResponse>): void;
  acknowledge(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$OrdersAcknowledgeResponse>,
      callback?: BodyResponseCallback<Schema$OrdersAcknowledgeResponse>):
      void|AxiosPromise<Schema$OrdersAcknowledgeResponse> {
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
                  '/content/v2/{merchantId}/orders/{orderId}/acknowledge')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['merchantId', 'orderId'],
      pathParams: ['merchantId', 'orderId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$OrdersAcknowledgeResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$OrdersAcknowledgeResponse>(parameters);
    }
  }


  /**
   * content.orders.advancetestorder
   * @desc Sandbox only. Moves a test order from state "inProgress" to state
   * "pendingShipment".
   * @alias content.orders.advancetestorder
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
   * @param {string} params.orderId The ID of the test order to modify.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  advancetestorder(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$OrdersAdvanceTestOrderResponse>;
  advancetestorder(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$OrdersAdvanceTestOrderResponse>,
      callback?: BodyResponseCallback<Schema$OrdersAdvanceTestOrderResponse>):
      void;
  advancetestorder(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$OrdersAdvanceTestOrderResponse>,
      callback?: BodyResponseCallback<Schema$OrdersAdvanceTestOrderResponse>):
      void|AxiosPromise<Schema$OrdersAdvanceTestOrderResponse> {
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
                  '/content/v2/{merchantId}/testorders/{orderId}/advance')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['merchantId', 'orderId'],
      pathParams: ['merchantId', 'orderId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$OrdersAdvanceTestOrderResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$OrdersAdvanceTestOrderResponse>(
          parameters);
    }
  }


  /**
   * content.orders.cancel
   * @desc Cancels all line items in an order, making a full refund.
   * @alias content.orders.cancel
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
   * @param {string} params.orderId The ID of the order to cancel.
   * @param {().OrdersCancelRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  cancel(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$OrdersCancelResponse>;
  cancel(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$OrdersCancelResponse>,
      callback?: BodyResponseCallback<Schema$OrdersCancelResponse>): void;
  cancel(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$OrdersCancelResponse>,
      callback?: BodyResponseCallback<Schema$OrdersCancelResponse>):
      void|AxiosPromise<Schema$OrdersCancelResponse> {
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
            url: (rootUrl + '/content/v2/{merchantId}/orders/{orderId}/cancel')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['merchantId', 'orderId'],
      pathParams: ['merchantId', 'orderId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$OrdersCancelResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$OrdersCancelResponse>(parameters);
    }
  }


  /**
   * content.orders.cancellineitem
   * @desc Cancels a line item, making a full refund.
   * @alias content.orders.cancellineitem
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
   * @param {string} params.orderId The ID of the order.
   * @param {().OrdersCancelLineItemRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  cancellineitem(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$OrdersCancelLineItemResponse>;
  cancellineitem(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$OrdersCancelLineItemResponse>,
      callback?: BodyResponseCallback<Schema$OrdersCancelLineItemResponse>):
      void;
  cancellineitem(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$OrdersCancelLineItemResponse>,
      callback?: BodyResponseCallback<Schema$OrdersCancelLineItemResponse>):
      void|AxiosPromise<Schema$OrdersCancelLineItemResponse> {
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
                  '/content/v2/{merchantId}/orders/{orderId}/cancelLineItem')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['merchantId', 'orderId'],
      pathParams: ['merchantId', 'orderId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$OrdersCancelLineItemResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$OrdersCancelLineItemResponse>(parameters);
    }
  }


  /**
   * content.orders.createtestorder
   * @desc Sandbox only. Creates a test order.
   * @alias content.orders.createtestorder
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.merchantId The ID of the account that should manage the order. This cannot be a multi-client account.
   * @param {().OrdersCreateTestOrderRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  createtestorder(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$OrdersCreateTestOrderResponse>;
  createtestorder(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$OrdersCreateTestOrderResponse>,
      callback?: BodyResponseCallback<Schema$OrdersCreateTestOrderResponse>):
      void;
  createtestorder(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$OrdersCreateTestOrderResponse>,
      callback?: BodyResponseCallback<Schema$OrdersCreateTestOrderResponse>):
      void|AxiosPromise<Schema$OrdersCreateTestOrderResponse> {
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
            url: (rootUrl + '/content/v2/{merchantId}/testorders')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['merchantId'],
      pathParams: ['merchantId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$OrdersCreateTestOrderResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$OrdersCreateTestOrderResponse>(parameters);
    }
  }


  /**
   * content.orders.custombatch
   * @desc Retrieves or modifies multiple orders in a single request.
   * @alias content.orders.custombatch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().OrdersCustomBatchRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  custombatch(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$OrdersCustomBatchResponse>;
  custombatch(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$OrdersCustomBatchResponse>,
      callback?: BodyResponseCallback<Schema$OrdersCustomBatchResponse>): void;
  custombatch(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$OrdersCustomBatchResponse>,
      callback?: BodyResponseCallback<Schema$OrdersCustomBatchResponse>):
      void|AxiosPromise<Schema$OrdersCustomBatchResponse> {
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
            url: (rootUrl + '/content/v2/orders/batch')
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
      createAPIRequest<Schema$OrdersCustomBatchResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$OrdersCustomBatchResponse>(parameters);
    }
  }


  /**
   * content.orders.get
   * @desc Retrieves an order from your Merchant Center account.
   * @alias content.orders.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
   * @param {string} params.orderId The ID of the order.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Order>;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Order>,
      callback?: BodyResponseCallback<Schema$Order>): void;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Order>,
      callback?: BodyResponseCallback<Schema$Order>):
      void|AxiosPromise<Schema$Order> {
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
            url: (rootUrl + '/content/v2/{merchantId}/orders/{orderId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['merchantId', 'orderId'],
      pathParams: ['merchantId', 'orderId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Order>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Order>(parameters);
    }
  }


  /**
   * content.orders.getbymerchantorderid
   * @desc Retrieves an order using merchant order id.
   * @alias content.orders.getbymerchantorderid
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
   * @param {string} params.merchantOrderId The merchant order id to be looked for.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getbymerchantorderid(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$OrdersGetByMerchantOrderIdResponse>;
  getbymerchantorderid(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$OrdersGetByMerchantOrderIdResponse>,
      callback?:
          BodyResponseCallback<Schema$OrdersGetByMerchantOrderIdResponse>):
      void;
  getbymerchantorderid(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$OrdersGetByMerchantOrderIdResponse>,
      callback?:
          BodyResponseCallback<Schema$OrdersGetByMerchantOrderIdResponse>):
      void|AxiosPromise<Schema$OrdersGetByMerchantOrderIdResponse> {
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
                 '/content/v2/{merchantId}/ordersbymerchantid/{merchantOrderId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['merchantId', 'merchantOrderId'],
      pathParams: ['merchantId', 'merchantOrderId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$OrdersGetByMerchantOrderIdResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$OrdersGetByMerchantOrderIdResponse>(
          parameters);
    }
  }


  /**
   * content.orders.gettestordertemplate
   * @desc Sandbox only. Retrieves an order template that can be used to quickly
   * create a new order in sandbox.
   * @alias content.orders.gettestordertemplate
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.merchantId The ID of the account that should manage the order. This cannot be a multi-client account.
   * @param {string} params.templateName The name of the template to retrieve.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  gettestordertemplate(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$OrdersGetTestOrderTemplateResponse>;
  gettestordertemplate(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$OrdersGetTestOrderTemplateResponse>,
      callback?:
          BodyResponseCallback<Schema$OrdersGetTestOrderTemplateResponse>):
      void;
  gettestordertemplate(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$OrdersGetTestOrderTemplateResponse>,
      callback?:
          BodyResponseCallback<Schema$OrdersGetTestOrderTemplateResponse>):
      void|AxiosPromise<Schema$OrdersGetTestOrderTemplateResponse> {
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
                  '/content/v2/{merchantId}/testordertemplates/{templateName}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['merchantId', 'templateName'],
      pathParams: ['merchantId', 'templateName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$OrdersGetTestOrderTemplateResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$OrdersGetTestOrderTemplateResponse>(
          parameters);
    }
  }


  /**
   * content.orders.instorerefundlineitem
   * @desc Notifies that item return and refund was handled directly in store.
   * @alias content.orders.instorerefundlineitem
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
   * @param {string} params.orderId The ID of the order.
   * @param {().OrdersInStoreRefundLineItemRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  instorerefundlineitem(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$OrdersInStoreRefundLineItemResponse>;
  instorerefundlineitem(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$OrdersInStoreRefundLineItemResponse>,
      callback?:
          BodyResponseCallback<Schema$OrdersInStoreRefundLineItemResponse>):
      void;
  instorerefundlineitem(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$OrdersInStoreRefundLineItemResponse>,
      callback?:
          BodyResponseCallback<Schema$OrdersInStoreRefundLineItemResponse>):
      void|AxiosPromise<Schema$OrdersInStoreRefundLineItemResponse> {
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
                 '/content/v2/{merchantId}/orders/{orderId}/inStoreRefundLineItem')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['merchantId', 'orderId'],
      pathParams: ['merchantId', 'orderId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$OrdersInStoreRefundLineItemResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$OrdersInStoreRefundLineItemResponse>(
          parameters);
    }
  }


  /**
   * content.orders.list
   * @desc Lists the orders in your Merchant Center account.
   * @alias content.orders.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {boolean=} params.acknowledged Obtains orders that match the acknowledgement status. When set to true, obtains orders that have been acknowledged. When false, obtains orders that have not been acknowledged. We recommend using this filter set to false, in conjunction with the acknowledge call, such that only un-acknowledged orders are returned.
   * @param {integer=} params.maxResults The maximum number of orders to return in the response, used for paging. The default value is 25 orders per page, and the maximum allowed value is 250 orders per page. Known issue: All List calls will return all Orders without limit regardless of the value of this field.
   * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
   * @param {string=} params.orderBy The ordering of the returned list. The only supported value are placedDate desc and placedDate asc for now, which returns orders sorted by placement date. "placedDate desc" stands for listing orders by placement date, from oldest to most recent. "placedDate asc" stands for listing orders by placement date, from most recent to oldest. In future releases we'll support other sorting criteria.
   * @param {string=} params.pageToken The token returned by the previous request.
   * @param {string=} params.placedDateEnd Obtains orders placed before this date (exclusively), in ISO 8601 format.
   * @param {string=} params.placedDateStart Obtains orders placed after this date (inclusively), in ISO 8601 format.
   * @param {string=} params.statuses Obtains orders that match any of the specified statuses. Multiple values can be specified with comma separation. Additionally, please note that active is a shortcut for pendingShipment and partiallyShipped, and completed is a shortcut for shipped , partiallyDelivered, delivered, partiallyReturned, returned, and canceled.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$OrdersListResponse>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$OrdersListResponse>,
      callback?: BodyResponseCallback<Schema$OrdersListResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$OrdersListResponse>,
      callback?: BodyResponseCallback<Schema$OrdersListResponse>):
      void|AxiosPromise<Schema$OrdersListResponse> {
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
            url: (rootUrl + '/content/v2/{merchantId}/orders')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['merchantId'],
      pathParams: ['merchantId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$OrdersListResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$OrdersListResponse>(parameters);
    }
  }


  /**
   * content.orders.refund
   * @desc Refund a portion of the order, up to the full amount paid.
   * @alias content.orders.refund
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
   * @param {string} params.orderId The ID of the order to refund.
   * @param {().OrdersRefundRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  refund(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$OrdersRefundResponse>;
  refund(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$OrdersRefundResponse>,
      callback?: BodyResponseCallback<Schema$OrdersRefundResponse>): void;
  refund(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$OrdersRefundResponse>,
      callback?: BodyResponseCallback<Schema$OrdersRefundResponse>):
      void|AxiosPromise<Schema$OrdersRefundResponse> {
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
            url: (rootUrl + '/content/v2/{merchantId}/orders/{orderId}/refund')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['merchantId', 'orderId'],
      pathParams: ['merchantId', 'orderId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$OrdersRefundResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$OrdersRefundResponse>(parameters);
    }
  }


  /**
   * content.orders.rejectreturnlineitem
   * @desc Rejects return on an line item.
   * @alias content.orders.rejectreturnlineitem
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
   * @param {string} params.orderId The ID of the order.
   * @param {().OrdersRejectReturnLineItemRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  rejectreturnlineitem(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$OrdersRejectReturnLineItemResponse>;
  rejectreturnlineitem(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$OrdersRejectReturnLineItemResponse>,
      callback?:
          BodyResponseCallback<Schema$OrdersRejectReturnLineItemResponse>):
      void;
  rejectreturnlineitem(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$OrdersRejectReturnLineItemResponse>,
      callback?:
          BodyResponseCallback<Schema$OrdersRejectReturnLineItemResponse>):
      void|AxiosPromise<Schema$OrdersRejectReturnLineItemResponse> {
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
                 '/content/v2/{merchantId}/orders/{orderId}/rejectReturnLineItem')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['merchantId', 'orderId'],
      pathParams: ['merchantId', 'orderId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$OrdersRejectReturnLineItemResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$OrdersRejectReturnLineItemResponse>(
          parameters);
    }
  }


  /**
   * content.orders.returnlineitem
   * @desc Returns a line item.
   * @alias content.orders.returnlineitem
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
   * @param {string} params.orderId The ID of the order.
   * @param {().OrdersReturnLineItemRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  returnlineitem(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$OrdersReturnLineItemResponse>;
  returnlineitem(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$OrdersReturnLineItemResponse>,
      callback?: BodyResponseCallback<Schema$OrdersReturnLineItemResponse>):
      void;
  returnlineitem(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$OrdersReturnLineItemResponse>,
      callback?: BodyResponseCallback<Schema$OrdersReturnLineItemResponse>):
      void|AxiosPromise<Schema$OrdersReturnLineItemResponse> {
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
                  '/content/v2/{merchantId}/orders/{orderId}/returnLineItem')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['merchantId', 'orderId'],
      pathParams: ['merchantId', 'orderId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$OrdersReturnLineItemResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$OrdersReturnLineItemResponse>(parameters);
    }
  }


  /**
   * content.orders.returnrefundlineitem
   * @desc Returns and refunds a line item. Note that this method can only be
   * called on fully shipped orders.
   * @alias content.orders.returnrefundlineitem
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
   * @param {string} params.orderId The ID of the order.
   * @param {().OrdersReturnRefundLineItemRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  returnrefundlineitem(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$OrdersReturnRefundLineItemResponse>;
  returnrefundlineitem(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$OrdersReturnRefundLineItemResponse>,
      callback?:
          BodyResponseCallback<Schema$OrdersReturnRefundLineItemResponse>):
      void;
  returnrefundlineitem(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$OrdersReturnRefundLineItemResponse>,
      callback?:
          BodyResponseCallback<Schema$OrdersReturnRefundLineItemResponse>):
      void|AxiosPromise<Schema$OrdersReturnRefundLineItemResponse> {
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
                 '/content/v2/{merchantId}/orders/{orderId}/returnRefundLineItem')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['merchantId', 'orderId'],
      pathParams: ['merchantId', 'orderId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$OrdersReturnRefundLineItemResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$OrdersReturnRefundLineItemResponse>(
          parameters);
    }
  }


  /**
   * content.orders.setlineitemmetadata
   * @desc Sets (overrides) merchant provided annotations on the line item.
   * @alias content.orders.setlineitemmetadata
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
   * @param {string} params.orderId The ID of the order.
   * @param {().OrdersSetLineItemMetadataRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  setlineitemmetadata(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$OrdersSetLineItemMetadataResponse>;
  setlineitemmetadata(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$OrdersSetLineItemMetadataResponse>,
      callback?:
          BodyResponseCallback<Schema$OrdersSetLineItemMetadataResponse>): void;
  setlineitemmetadata(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$OrdersSetLineItemMetadataResponse>,
      callback?:
          BodyResponseCallback<Schema$OrdersSetLineItemMetadataResponse>):
      void|AxiosPromise<Schema$OrdersSetLineItemMetadataResponse> {
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
                 '/content/v2/{merchantId}/orders/{orderId}/setLineItemMetadata')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['merchantId', 'orderId'],
      pathParams: ['merchantId', 'orderId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$OrdersSetLineItemMetadataResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$OrdersSetLineItemMetadataResponse>(
          parameters);
    }
  }


  /**
   * content.orders.shiplineitems
   * @desc Marks line item(s) as shipped.
   * @alias content.orders.shiplineitems
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
   * @param {string} params.orderId The ID of the order.
   * @param {().OrdersShipLineItemsRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  shiplineitems(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$OrdersShipLineItemsResponse>;
  shiplineitems(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$OrdersShipLineItemsResponse>,
      callback?: BodyResponseCallback<Schema$OrdersShipLineItemsResponse>):
      void;
  shiplineitems(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$OrdersShipLineItemsResponse>,
      callback?: BodyResponseCallback<Schema$OrdersShipLineItemsResponse>):
      void|AxiosPromise<Schema$OrdersShipLineItemsResponse> {
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
                  '/content/v2/{merchantId}/orders/{orderId}/shipLineItems')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['merchantId', 'orderId'],
      pathParams: ['merchantId', 'orderId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$OrdersShipLineItemsResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$OrdersShipLineItemsResponse>(parameters);
    }
  }


  /**
   * content.orders.updatelineitemshippingdetails
   * @desc Updates ship by and delivery by dates for a line item.
   * @alias content.orders.updatelineitemshippingdetails
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
   * @param {string} params.orderId The ID of the order.
   * @param {().OrdersUpdateLineItemShippingDetailsRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  updatelineitemshippingdetails(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$OrdersUpdateLineItemShippingDetailsResponse>;
  updatelineitemshippingdetails(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$OrdersUpdateLineItemShippingDetailsResponse>,
      callback?: BodyResponseCallback<
          Schema$OrdersUpdateLineItemShippingDetailsResponse>): void;
  updatelineitemshippingdetails(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$OrdersUpdateLineItemShippingDetailsResponse>,
      callback?: BodyResponseCallback<
          Schema$OrdersUpdateLineItemShippingDetailsResponse>):
      void|AxiosPromise<Schema$OrdersUpdateLineItemShippingDetailsResponse> {
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
                 '/content/v2/{merchantId}/orders/{orderId}/updateLineItemShippingDetails')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['merchantId', 'orderId'],
      pathParams: ['merchantId', 'orderId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$OrdersUpdateLineItemShippingDetailsResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<
          Schema$OrdersUpdateLineItemShippingDetailsResponse>(parameters);
    }
  }


  /**
   * content.orders.updatemerchantorderid
   * @desc Updates the merchant order ID for a given order.
   * @alias content.orders.updatemerchantorderid
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
   * @param {string} params.orderId The ID of the order.
   * @param {().OrdersUpdateMerchantOrderIdRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  updatemerchantorderid(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$OrdersUpdateMerchantOrderIdResponse>;
  updatemerchantorderid(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$OrdersUpdateMerchantOrderIdResponse>,
      callback?:
          BodyResponseCallback<Schema$OrdersUpdateMerchantOrderIdResponse>):
      void;
  updatemerchantorderid(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$OrdersUpdateMerchantOrderIdResponse>,
      callback?:
          BodyResponseCallback<Schema$OrdersUpdateMerchantOrderIdResponse>):
      void|AxiosPromise<Schema$OrdersUpdateMerchantOrderIdResponse> {
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
                 '/content/v2/{merchantId}/orders/{orderId}/updateMerchantOrderId')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['merchantId', 'orderId'],
      pathParams: ['merchantId', 'orderId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$OrdersUpdateMerchantOrderIdResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$OrdersUpdateMerchantOrderIdResponse>(
          parameters);
    }
  }


  /**
   * content.orders.updateshipment
   * @desc Updates a shipment's status, carrier, and/or tracking ID.
   * @alias content.orders.updateshipment
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
   * @param {string} params.orderId The ID of the order.
   * @param {().OrdersUpdateShipmentRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  updateshipment(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$OrdersUpdateShipmentResponse>;
  updateshipment(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$OrdersUpdateShipmentResponse>,
      callback?: BodyResponseCallback<Schema$OrdersUpdateShipmentResponse>):
      void;
  updateshipment(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$OrdersUpdateShipmentResponse>,
      callback?: BodyResponseCallback<Schema$OrdersUpdateShipmentResponse>):
      void|AxiosPromise<Schema$OrdersUpdateShipmentResponse> {
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
                  '/content/v2/{merchantId}/orders/{orderId}/updateShipment')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['merchantId', 'orderId'],
      pathParams: ['merchantId', 'orderId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$OrdersUpdateShipmentResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$OrdersUpdateShipmentResponse>(parameters);
    }
  }
}

export class Resource$Pos {
  root: Content;
  constructor(root: Content) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * content.pos.custombatch
   * @desc Batches multiple POS-related calls in a single request.
   * @alias content.pos.custombatch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
   * @param {().PosCustomBatchRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  custombatch(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$PosCustomBatchResponse>;
  custombatch(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$PosCustomBatchResponse>,
      callback?: BodyResponseCallback<Schema$PosCustomBatchResponse>): void;
  custombatch(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$PosCustomBatchResponse>,
      callback?: BodyResponseCallback<Schema$PosCustomBatchResponse>):
      void|AxiosPromise<Schema$PosCustomBatchResponse> {
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
            url: (rootUrl + '/content/v2/pos/batch')
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
      createAPIRequest<Schema$PosCustomBatchResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$PosCustomBatchResponse>(parameters);
    }
  }


  /**
   * content.pos.delete
   * @desc Deletes a store for the given merchant.
   * @alias content.pos.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
   * @param {string} params.merchantId The ID of the POS or inventory data provider.
   * @param {string} params.storeCode A store code that is unique per merchant.
   * @param {string} params.targetMerchantId The ID of the target merchant.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
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
                 '/content/v2/{merchantId}/pos/{targetMerchantId}/store/{storeCode}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['merchantId', 'targetMerchantId', 'storeCode'],
      pathParams: ['merchantId', 'storeCode', 'targetMerchantId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * content.pos.get
   * @desc Retrieves information about the given store.
   * @alias content.pos.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.merchantId The ID of the POS or inventory data provider.
   * @param {string} params.storeCode A store code that is unique per merchant.
   * @param {string} params.targetMerchantId The ID of the target merchant.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$PosStore>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PosStore>,
      callback?: BodyResponseCallback<Schema$PosStore>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PosStore>,
      callback?: BodyResponseCallback<Schema$PosStore>):
      void|AxiosPromise<Schema$PosStore> {
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
                 '/content/v2/{merchantId}/pos/{targetMerchantId}/store/{storeCode}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['merchantId', 'targetMerchantId', 'storeCode'],
      pathParams: ['merchantId', 'storeCode', 'targetMerchantId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$PosStore>(parameters, callback);
    } else {
      return createAPIRequest<Schema$PosStore>(parameters);
    }
  }


  /**
   * content.pos.insert
   * @desc Creates a store for the given merchant.
   * @alias content.pos.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
   * @param {string} params.merchantId The ID of the POS or inventory data provider.
   * @param {string} params.targetMerchantId The ID of the target merchant.
   * @param {().PosStore} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions): AxiosPromise<Schema$PosStore>;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PosStore>,
      callback?: BodyResponseCallback<Schema$PosStore>): void;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PosStore>,
      callback?: BodyResponseCallback<Schema$PosStore>):
      void|AxiosPromise<Schema$PosStore> {
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
                  '/content/v2/{merchantId}/pos/{targetMerchantId}/store')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['merchantId', 'targetMerchantId'],
      pathParams: ['merchantId', 'targetMerchantId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$PosStore>(parameters, callback);
    } else {
      return createAPIRequest<Schema$PosStore>(parameters);
    }
  }


  /**
   * content.pos.inventory
   * @desc Submit inventory for the given merchant.
   * @alias content.pos.inventory
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
   * @param {string} params.merchantId The ID of the POS or inventory data provider.
   * @param {string} params.targetMerchantId The ID of the target merchant.
   * @param {().PosInventoryRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  inventory(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$PosInventoryResponse>;
  inventory(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PosInventoryResponse>,
      callback?: BodyResponseCallback<Schema$PosInventoryResponse>): void;
  inventory(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PosInventoryResponse>,
      callback?: BodyResponseCallback<Schema$PosInventoryResponse>):
      void|AxiosPromise<Schema$PosInventoryResponse> {
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
                  '/content/v2/{merchantId}/pos/{targetMerchantId}/inventory')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['merchantId', 'targetMerchantId'],
      pathParams: ['merchantId', 'targetMerchantId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$PosInventoryResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$PosInventoryResponse>(parameters);
    }
  }


  /**
   * content.pos.list
   * @desc Lists the stores of the target merchant.
   * @alias content.pos.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.merchantId The ID of the POS or inventory data provider.
   * @param {string} params.targetMerchantId The ID of the target merchant.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$PosListResponse>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PosListResponse>,
      callback?: BodyResponseCallback<Schema$PosListResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PosListResponse>,
      callback?: BodyResponseCallback<Schema$PosListResponse>):
      void|AxiosPromise<Schema$PosListResponse> {
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
                  '/content/v2/{merchantId}/pos/{targetMerchantId}/store')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['merchantId', 'targetMerchantId'],
      pathParams: ['merchantId', 'targetMerchantId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$PosListResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$PosListResponse>(parameters);
    }
  }


  /**
   * content.pos.sale
   * @desc Submit a sale event for the given merchant.
   * @alias content.pos.sale
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
   * @param {string} params.merchantId The ID of the POS or inventory data provider.
   * @param {string} params.targetMerchantId The ID of the target merchant.
   * @param {().PosSaleRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  sale(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$PosSaleResponse>;
  sale(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PosSaleResponse>,
      callback?: BodyResponseCallback<Schema$PosSaleResponse>): void;
  sale(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PosSaleResponse>,
      callback?: BodyResponseCallback<Schema$PosSaleResponse>):
      void|AxiosPromise<Schema$PosSaleResponse> {
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
                  '/content/v2/{merchantId}/pos/{targetMerchantId}/sale')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['merchantId', 'targetMerchantId'],
      pathParams: ['merchantId', 'targetMerchantId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$PosSaleResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$PosSaleResponse>(parameters);
    }
  }
}

export class Resource$Products {
  root: Content;
  constructor(root: Content) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * content.products.custombatch
   * @desc Retrieves, inserts, and deletes multiple products in a single
   * request.
   * @alias content.products.custombatch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
   * @param {().ProductsCustomBatchRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  custombatch(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ProductsCustomBatchResponse>;
  custombatch(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ProductsCustomBatchResponse>,
      callback?: BodyResponseCallback<Schema$ProductsCustomBatchResponse>):
      void;
  custombatch(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ProductsCustomBatchResponse>,
      callback?: BodyResponseCallback<Schema$ProductsCustomBatchResponse>):
      void|AxiosPromise<Schema$ProductsCustomBatchResponse> {
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
            url: (rootUrl + '/content/v2/products/batch')
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
      createAPIRequest<Schema$ProductsCustomBatchResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$ProductsCustomBatchResponse>(parameters);
    }
  }


  /**
   * content.products.delete
   * @desc Deletes a product from your Merchant Center account.
   * @alias content.products.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
   * @param {string} params.merchantId The ID of the account that contains the product. This account cannot be a multi-client account.
   * @param {string} params.productId The REST id of the product.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
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
            url: (rootUrl + '/content/v2/{merchantId}/products/{productId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['merchantId', 'productId'],
      pathParams: ['merchantId', 'productId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * content.products.get
   * @desc Retrieves a product from your Merchant Center account.
   * @alias content.products.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.merchantId The ID of the account that contains the product. This account cannot be a multi-client account.
   * @param {string} params.productId The REST id of the product.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Product>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Product>,
      callback?: BodyResponseCallback<Schema$Product>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Product>,
      callback?: BodyResponseCallback<Schema$Product>):
      void|AxiosPromise<Schema$Product> {
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
            url: (rootUrl + '/content/v2/{merchantId}/products/{productId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['merchantId', 'productId'],
      pathParams: ['merchantId', 'productId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Product>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Product>(parameters);
    }
  }


  /**
   * content.products.insert
   * @desc Uploads a product to your Merchant Center account. If an item with
   * the same channel, contentLanguage, offerId, and targetCountry already
   * exists, this method updates that entry.
   * @alias content.products.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
   * @param {string} params.merchantId The ID of the account that contains the product. This account cannot be a multi-client account.
   * @param {().Product} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions): AxiosPromise<Schema$Product>;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Product>,
      callback?: BodyResponseCallback<Schema$Product>): void;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Product>,
      callback?: BodyResponseCallback<Schema$Product>):
      void|AxiosPromise<Schema$Product> {
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
            url: (rootUrl + '/content/v2/{merchantId}/products')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['merchantId'],
      pathParams: ['merchantId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Product>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Product>(parameters);
    }
  }


  /**
   * content.products.list
   * @desc Lists the products in your Merchant Center account.
   * @alias content.products.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {boolean=} params.includeInvalidInsertedItems Flag to include the invalid inserted items in the result of the list request. By default the invalid items are not shown (the default value is false).
   * @param {integer=} params.maxResults The maximum number of products to return in the response, used for paging.
   * @param {string} params.merchantId The ID of the account that contains the products. This account cannot be a multi-client account.
   * @param {string=} params.pageToken The token returned by the previous request.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ProductsListResponse>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ProductsListResponse>,
      callback?: BodyResponseCallback<Schema$ProductsListResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ProductsListResponse>,
      callback?: BodyResponseCallback<Schema$ProductsListResponse>):
      void|AxiosPromise<Schema$ProductsListResponse> {
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
            url: (rootUrl + '/content/v2/{merchantId}/products')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['merchantId'],
      pathParams: ['merchantId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ProductsListResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ProductsListResponse>(parameters);
    }
  }
}

export class Resource$Productstatuses {
  root: Content;
  constructor(root: Content) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * content.productstatuses.custombatch
   * @desc Gets the statuses of multiple products in a single request.
   * @alias content.productstatuses.custombatch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {boolean=} params.includeAttributes Flag to include full product data in the results of this request. The default value is false.
   * @param {().ProductstatusesCustomBatchRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  custombatch(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ProductstatusesCustomBatchResponse>;
  custombatch(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ProductstatusesCustomBatchResponse>,
      callback?:
          BodyResponseCallback<Schema$ProductstatusesCustomBatchResponse>):
      void;
  custombatch(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ProductstatusesCustomBatchResponse>,
      callback?:
          BodyResponseCallback<Schema$ProductstatusesCustomBatchResponse>):
      void|AxiosPromise<Schema$ProductstatusesCustomBatchResponse> {
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
            url: (rootUrl + '/content/v2/productstatuses/batch')
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
      createAPIRequest<Schema$ProductstatusesCustomBatchResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$ProductstatusesCustomBatchResponse>(
          parameters);
    }
  }


  /**
   * content.productstatuses.get
   * @desc Gets the status of a product from your Merchant Center account.
   * @alias content.productstatuses.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.destinations If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
   * @param {boolean=} params.includeAttributes Flag to include full product data in the result of this get request. The default value is false.
   * @param {string} params.merchantId The ID of the account that contains the product. This account cannot be a multi-client account.
   * @param {string} params.productId The REST id of the product.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any,
      options?: MethodOptions): AxiosPromise<Schema$ProductStatus>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ProductStatus>,
      callback?: BodyResponseCallback<Schema$ProductStatus>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ProductStatus>,
      callback?: BodyResponseCallback<Schema$ProductStatus>):
      void|AxiosPromise<Schema$ProductStatus> {
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
                  '/content/v2/{merchantId}/productstatuses/{productId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['merchantId', 'productId'],
      pathParams: ['merchantId', 'productId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ProductStatus>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ProductStatus>(parameters);
    }
  }


  /**
   * content.productstatuses.list
   * @desc Lists the statuses of the products in your Merchant Center account.
   * @alias content.productstatuses.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.destinations If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
   * @param {boolean=} params.includeAttributes Flag to include full product data in the results of the list request. The default value is false.
   * @param {boolean=} params.includeInvalidInsertedItems Flag to include the invalid inserted items in the result of the list request. By default the invalid items are not shown (the default value is false).
   * @param {integer=} params.maxResults The maximum number of product statuses to return in the response, used for paging.
   * @param {string} params.merchantId The ID of the account that contains the products. This account cannot be a multi-client account.
   * @param {string=} params.pageToken The token returned by the previous request.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ProductstatusesListResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ProductstatusesListResponse>,
      callback?: BodyResponseCallback<Schema$ProductstatusesListResponse>):
      void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ProductstatusesListResponse>,
      callback?: BodyResponseCallback<Schema$ProductstatusesListResponse>):
      void|AxiosPromise<Schema$ProductstatusesListResponse> {
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
            url: (rootUrl + '/content/v2/{merchantId}/productstatuses')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['merchantId'],
      pathParams: ['merchantId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ProductstatusesListResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$ProductstatusesListResponse>(parameters);
    }
  }
}

export class Resource$Shippingsettings {
  root: Content;
  constructor(root: Content) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * content.shippingsettings.custombatch
   * @desc Retrieves and updates the shipping settings of multiple accounts in a
   * single request.
   * @alias content.shippingsettings.custombatch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
   * @param {().ShippingsettingsCustomBatchRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  custombatch(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ShippingsettingsCustomBatchResponse>;
  custombatch(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ShippingsettingsCustomBatchResponse>,
      callback?:
          BodyResponseCallback<Schema$ShippingsettingsCustomBatchResponse>):
      void;
  custombatch(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ShippingsettingsCustomBatchResponse>,
      callback?:
          BodyResponseCallback<Schema$ShippingsettingsCustomBatchResponse>):
      void|AxiosPromise<Schema$ShippingsettingsCustomBatchResponse> {
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
            url: (rootUrl + '/content/v2/shippingsettings/batch')
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
      createAPIRequest<Schema$ShippingsettingsCustomBatchResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$ShippingsettingsCustomBatchResponse>(
          parameters);
    }
  }


  /**
   * content.shippingsettings.get
   * @desc Retrieves the shipping settings of the account.
   * @alias content.shippingsettings.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The ID of the account for which to get/update shipping settings.
   * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any,
      options?: MethodOptions): AxiosPromise<Schema$ShippingSettings>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ShippingSettings>,
      callback?: BodyResponseCallback<Schema$ShippingSettings>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ShippingSettings>,
      callback?: BodyResponseCallback<Schema$ShippingSettings>):
      void|AxiosPromise<Schema$ShippingSettings> {
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
                  '/content/v2/{merchantId}/shippingsettings/{accountId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['merchantId', 'accountId'],
      pathParams: ['accountId', 'merchantId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ShippingSettings>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ShippingSettings>(parameters);
    }
  }


  /**
   * content.shippingsettings.getsupportedcarriers
   * @desc Retrieves supported carriers and carrier services for an account.
   * @alias content.shippingsettings.getsupportedcarriers
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.merchantId The ID of the account for which to retrieve the supported carriers.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getsupportedcarriers(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ShippingsettingsGetSupportedCarriersResponse>;
  getsupportedcarriers(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ShippingsettingsGetSupportedCarriersResponse>,
      callback?: BodyResponseCallback<
          Schema$ShippingsettingsGetSupportedCarriersResponse>): void;
  getsupportedcarriers(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ShippingsettingsGetSupportedCarriersResponse>,
      callback?: BodyResponseCallback<
          Schema$ShippingsettingsGetSupportedCarriersResponse>):
      void|AxiosPromise<Schema$ShippingsettingsGetSupportedCarriersResponse> {
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
            url: (rootUrl + '/content/v2/{merchantId}/supportedCarriers')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['merchantId'],
      pathParams: ['merchantId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ShippingsettingsGetSupportedCarriersResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<
          Schema$ShippingsettingsGetSupportedCarriersResponse>(parameters);
    }
  }


  /**
   * content.shippingsettings.getsupportedholidays
   * @desc Retrieves supported holidays for an account.
   * @alias content.shippingsettings.getsupportedholidays
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.merchantId The ID of the account for which to retrieve the supported holidays.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getsupportedholidays(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ShippingsettingsGetSupportedHolidaysResponse>;
  getsupportedholidays(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ShippingsettingsGetSupportedHolidaysResponse>,
      callback?: BodyResponseCallback<
          Schema$ShippingsettingsGetSupportedHolidaysResponse>): void;
  getsupportedholidays(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ShippingsettingsGetSupportedHolidaysResponse>,
      callback?: BodyResponseCallback<
          Schema$ShippingsettingsGetSupportedHolidaysResponse>):
      void|AxiosPromise<Schema$ShippingsettingsGetSupportedHolidaysResponse> {
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
            url: (rootUrl + '/content/v2/{merchantId}/supportedHolidays')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['merchantId'],
      pathParams: ['merchantId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ShippingsettingsGetSupportedHolidaysResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<
          Schema$ShippingsettingsGetSupportedHolidaysResponse>(parameters);
    }
  }


  /**
   * content.shippingsettings.list
   * @desc Lists the shipping settings of the sub-accounts in your Merchant
   * Center account.
   * @alias content.shippingsettings.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer=} params.maxResults The maximum number of shipping settings to return in the response, used for paging.
   * @param {string} params.merchantId The ID of the managing account. This must be a multi-client account.
   * @param {string=} params.pageToken The token returned by the previous request.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ShippingsettingsListResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ShippingsettingsListResponse>,
      callback?: BodyResponseCallback<Schema$ShippingsettingsListResponse>):
      void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ShippingsettingsListResponse>,
      callback?: BodyResponseCallback<Schema$ShippingsettingsListResponse>):
      void|AxiosPromise<Schema$ShippingsettingsListResponse> {
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
            url: (rootUrl + '/content/v2/{merchantId}/shippingsettings')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['merchantId'],
      pathParams: ['merchantId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ShippingsettingsListResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$ShippingsettingsListResponse>(parameters);
    }
  }


  /**
   * content.shippingsettings.patch
   * @desc Updates the shipping settings of the account. This method supports
   * patch semantics.
   * @alias content.shippingsettings.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The ID of the account for which to get/update shipping settings.
   * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
   * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
   * @param {().ShippingSettings} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ShippingSettings>;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ShippingSettings>,
      callback?: BodyResponseCallback<Schema$ShippingSettings>): void;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ShippingSettings>,
      callback?: BodyResponseCallback<Schema$ShippingSettings>):
      void|AxiosPromise<Schema$ShippingSettings> {
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
                  '/content/v2/{merchantId}/shippingsettings/{accountId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['merchantId', 'accountId'],
      pathParams: ['accountId', 'merchantId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ShippingSettings>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ShippingSettings>(parameters);
    }
  }


  /**
   * content.shippingsettings.update
   * @desc Updates the shipping settings of the account.
   * @alias content.shippingsettings.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The ID of the account for which to get/update shipping settings.
   * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
   * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
   * @param {().ShippingSettings} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ShippingSettings>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ShippingSettings>,
      callback?: BodyResponseCallback<Schema$ShippingSettings>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ShippingSettings>,
      callback?: BodyResponseCallback<Schema$ShippingSettings>):
      void|AxiosPromise<Schema$ShippingSettings> {
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
                  '/content/v2/{merchantId}/shippingsettings/{accountId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['merchantId', 'accountId'],
      pathParams: ['accountId', 'merchantId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ShippingSettings>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ShippingSettings>(parameters);
    }
  }
}
