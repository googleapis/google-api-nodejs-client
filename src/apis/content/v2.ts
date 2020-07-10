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

export namespace content_v2 {
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
   * Content API for Shopping
   *
   * Manages product items, inventory, and Merchant Center accounts for Google Shopping.
   *
   * @example
   * const {google} = require('googleapis');
   * const content = google.content('v2');
   *
   * @namespace content
   * @type {Function}
   * @version v2
   * @variation v2
   * @param {object=} options Options for Content
   */
  export class Content {
    context: APIRequestContext;
    accounts: Resource$Accounts;
    accountstatuses: Resource$Accountstatuses;
    accounttax: Resource$Accounttax;
    datafeeds: Resource$Datafeeds;
    datafeedstatuses: Resource$Datafeedstatuses;
    inventory: Resource$Inventory;
    liasettings: Resource$Liasettings;
    orderinvoices: Resource$Orderinvoices;
    orderreports: Resource$Orderreports;
    orderreturns: Resource$Orderreturns;
    orders: Resource$Orders;
    pos: Resource$Pos;
    products: Resource$Products;
    productstatuses: Resource$Productstatuses;
    shippingsettings: Resource$Shippingsettings;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.accounts = new Resource$Accounts(this.context);
      this.accountstatuses = new Resource$Accountstatuses(this.context);
      this.accounttax = new Resource$Accounttax(this.context);
      this.datafeeds = new Resource$Datafeeds(this.context);
      this.datafeedstatuses = new Resource$Datafeedstatuses(this.context);
      this.inventory = new Resource$Inventory(this.context);
      this.liasettings = new Resource$Liasettings(this.context);
      this.orderinvoices = new Resource$Orderinvoices(this.context);
      this.orderreports = new Resource$Orderreports(this.context);
      this.orderreturns = new Resource$Orderreturns(this.context);
      this.orders = new Resource$Orders(this.context);
      this.pos = new Resource$Pos(this.context);
      this.products = new Resource$Products(this.context);
      this.productstatuses = new Resource$Productstatuses(this.context);
      this.shippingsettings = new Resource$Shippingsettings(this.context);
    }
  }

  /**
   * Account data. After the creation of a new account it may take a few minutes before it is fully operational. The methods delete, insert, and update require the admin role.
   */
  export interface Schema$Account {
    /**
     * Indicates whether the merchant sells adult content.
     */
    adultContent?: boolean | null;
    /**
     * List of linked AdWords accounts that are active or pending approval. To create a new link request, add a new link with status `active` to the list. It will remain in a `pending` state until approved or rejected either in the AdWords interface or through the  AdWords API. To delete an active link, or to cancel a link request, remove it from the list.
     */
    adwordsLinks?: Schema$AccountAdwordsLink[];
    /**
     * The business information of the account.
     */
    businessInformation?: Schema$AccountBusinessInformation;
    /**
     * The GMB account which is linked or in the process of being linked with the Merchant Center account.
     */
    googleMyBusinessLink?: Schema$AccountGoogleMyBusinessLink;
    /**
     * Required for update. Merchant Center account ID.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;`content#account`&quot;
     */
    kind?: string | null;
    /**
     * Required. Display name for the account.
     */
    name?: string | null;
    /**
     * [DEPRECATED] This field is never returned and will be ignored if provided.
     */
    reviewsUrl?: string | null;
    /**
     * Client-specific, locally-unique, internal ID for the child account.
     */
    sellerId?: string | null;
    /**
     * Users with access to the account. Every account (except for subaccounts) must have at least one admin user.
     */
    users?: Schema$AccountUser[];
    /**
     * The merchant&#39;s website.
     */
    websiteUrl?: string | null;
    /**
     * List of linked YouTube channels that are active or pending approval. To create a new link request, add a new link with status `active` to the list. It will remain in a `pending` state until approved or rejected in the YT Creator Studio interface. To delete an active link, or to cancel a link request, remove it from the list.
     */
    youtubeChannelLinks?: Schema$AccountYouTubeChannelLink[];
  }
  export interface Schema$AccountAddress {
    /**
     * CLDR country code (e.g. &quot;US&quot;).
     */
    country?: string | null;
    /**
     * City, town or commune. May also include dependent localities or sublocalities (e.g. neighborhoods or suburbs).
     */
    locality?: string | null;
    /**
     * Postal code or ZIP (e.g. &quot;94043&quot;).
     */
    postalCode?: string | null;
    /**
     * Top-level administrative subdivision of the country. For example, a state like California (&quot;CA&quot;) or a province like Quebec (&quot;QC&quot;).
     */
    region?: string | null;
    /**
     * Street-level part of the address.
     */
    streetAddress?: string | null;
  }
  export interface Schema$AccountAdwordsLink {
    /**
     * Customer ID of the AdWords account.
     */
    adwordsId?: string | null;
    /**
     * Status of the link between this Merchant Center account and the AdWords account. Upon retrieval, it represents the actual status of the link and can be either `active` if it was approved in Google AdWords or `pending` if it&#39;s pending approval. Upon insertion, it represents the intended status of the link. Re-uploading a link with status `active` when it&#39;s still pending or with status `pending` when it&#39;s already active will have no effect: the status will remain unchanged. Re-uploading a link with deprecated status `inactive` is equivalent to not submitting the link at all and will delete the link if it was active or cancel the link request if it was pending.  Acceptable values are:   - &quot;`active`&quot;  - &quot;`pending`&quot;
     */
    status?: string | null;
  }
  export interface Schema$AccountBusinessInformation {
    /**
     * The address of the business.
     */
    address?: Schema$AccountAddress;
    /**
     * The customer service information of the business.
     */
    customerService?: Schema$AccountCustomerService;
    /**
     * The phone number of the business.
     */
    phoneNumber?: string | null;
  }
  export interface Schema$AccountCustomerService {
    /**
     * Customer service email.
     */
    email?: string | null;
    /**
     * Customer service phone number.
     */
    phoneNumber?: string | null;
    /**
     * Customer service URL.
     */
    url?: string | null;
  }
  export interface Schema$AccountGoogleMyBusinessLink {
    /**
     * The GMB email address of which a specific account within a GMB account. A sample account within a GMB account could be a business account with set of locations, managed under the GMB account.
     */
    gmbEmail?: string | null;
    /**
     * Status of the link between this Merchant Center account and the GMB account.  Acceptable values are:   - &quot;`active`&quot;  - &quot;`pending`&quot;
     */
    status?: string | null;
  }
  export interface Schema$AccountIdentifier {
    /**
     * The aggregator ID, set for aggregators and subaccounts (in that case, it represents the aggregator of the subaccount).
     */
    aggregatorId?: string | null;
    /**
     * The merchant account ID, set for individual accounts and subaccounts.
     */
    merchantId?: string | null;
  }
  export interface Schema$AccountsAuthInfoResponse {
    /**
     * The account identifiers corresponding to the authenticated user. - For an individual account: only the merchant ID is defined - For an aggregator: only the aggregator ID is defined - For a subaccount of an MCA: both the merchant ID and the aggregator ID are defined.
     */
    accountIdentifiers?: Schema$AccountIdentifier[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#accountsAuthInfoResponse&quot;.
     */
    kind?: string | null;
  }
  export interface Schema$AccountsClaimWebsiteResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#accountsClaimWebsiteResponse&quot;.
     */
    kind?: string | null;
  }
  export interface Schema$AccountsCustomBatchRequest {
    /**
     * The request entries to be processed in the batch.
     */
    entries?: Schema$AccountsCustomBatchRequestEntry[];
  }
  /**
   * A batch entry encoding a single non-batch accounts request.
   */
  export interface Schema$AccountsCustomBatchRequestEntry {
    /**
     * The account to create or update. Only defined if the method is `insert` or `update`.
     */
    account?: Schema$Account;
    /**
     * The ID of the targeted account. Only defined if the method is not `insert`.
     */
    accountId?: string | null;
    /**
     * An entry ID, unique within the batch request.
     */
    batchId?: number | null;
    /**
     * Whether the account should be deleted if the account has offers. Only applicable if the method is `delete`.
     */
    force?: boolean | null;
    /**
     * Details about the `link` request.
     */
    linkRequest?: Schema$AccountsCustomBatchRequestEntryLinkRequest;
    /**
     * The ID of the managing account.
     */
    merchantId?: string | null;
    /**
     * The method of the batch entry.  Acceptable values are:   - &quot;`claimWebsite`&quot;  - &quot;`delete`&quot;  - &quot;`get`&quot;  - &quot;`insert`&quot;  - &quot;`link`&quot;  - &quot;`update`&quot;
     */
    method?: string | null;
    /**
     * Only applicable if the method is `claimwebsite`. Indicates whether or not to take the claim from another account in case there is a conflict.
     */
    overwrite?: boolean | null;
  }
  export interface Schema$AccountsCustomBatchRequestEntryLinkRequest {
    /**
     * Action to perform for this link. The `&quot;request&quot;` action is only available to select merchants.  Acceptable values are:   - &quot;`approve`&quot;  - &quot;`remove`&quot;  - &quot;`request`&quot;
     */
    action?: string | null;
    /**
     * The ID of the linked account.
     */
    linkedAccountId?: string | null;
    /**
     * Type of the link between the two accounts.  Acceptable values are:   - &quot;`channelPartner`&quot;  - &quot;`eCommercePlatform`&quot;
     */
    linkType?: string | null;
  }
  export interface Schema$AccountsCustomBatchResponse {
    /**
     * The result of the execution of the batch requests.
     */
    entries?: Schema$AccountsCustomBatchResponseEntry[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#accountsCustomBatchResponse&quot;.
     */
    kind?: string | null;
  }
  /**
   * A batch entry encoding a single non-batch accounts response.
   */
  export interface Schema$AccountsCustomBatchResponseEntry {
    /**
     * The retrieved, created, or updated account. Not defined if the method was `delete`, `claimwebsite` or `link`.
     */
    account?: Schema$Account;
    /**
     * The ID of the request entry this entry responds to.
     */
    batchId?: number | null;
    /**
     * A list of errors defined if and only if the request failed.
     */
    errors?: Schema$Errors;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;`content#accountsCustomBatchResponseEntry`&quot;
     */
    kind?: string | null;
    /**
     * Deprecated. This field is never set.  Acceptable values are:   - &quot;`active`&quot;  - &quot;`inactive`&quot;  - &quot;`pending`&quot;
     */
    linkStatus?: string | null;
  }
  export interface Schema$AccountsLinkRequest {
    /**
     * Action to perform for this link. The `&quot;request&quot;` action is only available to select merchants.  Acceptable values are:   - &quot;`approve`&quot;  - &quot;`remove`&quot;  - &quot;`request`&quot;
     */
    action?: string | null;
    /**
     * The ID of the linked account.
     */
    linkedAccountId?: string | null;
    /**
     * Type of the link between the two accounts.  Acceptable values are:   - &quot;`channelPartner`&quot;  - &quot;`eCommercePlatform`&quot;
     */
    linkType?: string | null;
  }
  export interface Schema$AccountsLinkResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#accountsLinkResponse&quot;.
     */
    kind?: string | null;
  }
  export interface Schema$AccountsListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#accountsListResponse&quot;.
     */
    kind?: string | null;
    /**
     * The token for the retrieval of the next page of accounts.
     */
    nextPageToken?: string | null;
    resources?: Schema$Account[];
  }
  /**
   * The status of an account, i.e., information about its products, which is computed offline and not returned immediately at insertion time.
   */
  export interface Schema$AccountStatus {
    /**
     * The ID of the account for which the status is reported.
     */
    accountId?: string | null;
    /**
     * A list of account level issues.
     */
    accountLevelIssues?: Schema$AccountStatusAccountLevelIssue[];
    /**
     * DEPRECATED - never populated.
     */
    dataQualityIssues?: Schema$AccountStatusDataQualityIssue[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;`content#accountStatus`&quot;
     */
    kind?: string | null;
    /**
     * List of product-related data by channel, destination, and country. Data in this field may be delayed by up to 30 minutes.
     */
    products?: Schema$AccountStatusProducts[];
    /**
     * Whether the account&#39;s website is claimed or not.
     */
    websiteClaimed?: boolean | null;
  }
  export interface Schema$AccountStatusAccountLevelIssue {
    /**
     * Country for which this issue is reported.
     */
    country?: string | null;
    /**
     * The destination the issue applies to.
     */
    destination?: string | null;
    /**
     * Additional details about the issue.
     */
    detail?: string | null;
    /**
     * The URL of a web page to help resolving this issue.
     */
    documentation?: string | null;
    /**
     * Issue identifier.
     */
    id?: string | null;
    /**
     * Severity of the issue.  Acceptable values are:   - &quot;`critical`&quot;  - &quot;`error`&quot;  - &quot;`suggestion`&quot;
     */
    severity?: string | null;
    /**
     * Short description of the issue.
     */
    title?: string | null;
  }
  export interface Schema$AccountStatusDataQualityIssue {
    country?: string | null;
    destination?: string | null;
    detail?: string | null;
    displayedValue?: string | null;
    exampleItems?: Schema$AccountStatusExampleItem[];
    id?: string | null;
    lastChecked?: string | null;
    location?: string | null;
    numItems?: number | null;
    /**
     * Acceptable values are:   - &quot;`critical`&quot;  - &quot;`error`&quot;  - &quot;`suggestion`&quot;
     */
    severity?: string | null;
    submittedValue?: string | null;
  }
  export interface Schema$AccountstatusesCustomBatchRequest {
    /**
     * The request entries to be processed in the batch.
     */
    entries?: Schema$AccountstatusesCustomBatchRequestEntry[];
  }
  /**
   * A batch entry encoding a single non-batch accountstatuses request.
   */
  export interface Schema$AccountstatusesCustomBatchRequestEntry {
    /**
     * The ID of the (sub-)account whose status to get.
     */
    accountId?: string | null;
    /**
     * An entry ID, unique within the batch request.
     */
    batchId?: number | null;
    /**
     * If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
     */
    destinations?: string[] | null;
    /**
     * The ID of the managing account.
     */
    merchantId?: string | null;
    /**
     * The method of the batch entry.  Acceptable values are:   - &quot;`get`&quot;
     */
    method?: string | null;
  }
  export interface Schema$AccountstatusesCustomBatchResponse {
    /**
     * The result of the execution of the batch requests.
     */
    entries?: Schema$AccountstatusesCustomBatchResponseEntry[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#accountstatusesCustomBatchResponse&quot;.
     */
    kind?: string | null;
  }
  /**
   * A batch entry encoding a single non-batch accountstatuses response.
   */
  export interface Schema$AccountstatusesCustomBatchResponseEntry {
    /**
     * The requested account status. Defined if and only if the request was successful.
     */
    accountStatus?: Schema$AccountStatus;
    /**
     * The ID of the request entry this entry responds to.
     */
    batchId?: number | null;
    /**
     * A list of errors defined if and only if the request failed.
     */
    errors?: Schema$Errors;
  }
  export interface Schema$AccountstatusesListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#accountstatusesListResponse&quot;.
     */
    kind?: string | null;
    /**
     * The token for the retrieval of the next page of account statuses.
     */
    nextPageToken?: string | null;
    resources?: Schema$AccountStatus[];
  }
  export interface Schema$AccountStatusExampleItem {
    itemId?: string | null;
    link?: string | null;
    submittedValue?: string | null;
    title?: string | null;
    valueOnLandingPage?: string | null;
  }
  export interface Schema$AccountStatusItemLevelIssue {
    /**
     * The attribute&#39;s name, if the issue is caused by a single attribute.
     */
    attributeName?: string | null;
    /**
     * The error code of the issue.
     */
    code?: string | null;
    /**
     * A short issue description in English.
     */
    description?: string | null;
    /**
     * A detailed issue description in English.
     */
    detail?: string | null;
    /**
     * The URL of a web page to help with resolving this issue.
     */
    documentation?: string | null;
    /**
     * Number of items with this issue.
     */
    numItems?: string | null;
    /**
     * Whether the issue can be resolved by the merchant.
     */
    resolution?: string | null;
    /**
     * How this issue affects serving of the offer.
     */
    servability?: string | null;
  }
  export interface Schema$AccountStatusProducts {
    /**
     * The channel the data applies to.  Acceptable values are:   - &quot;`local`&quot;  - &quot;`online`&quot;
     */
    channel?: string | null;
    /**
     * The country the data applies to.
     */
    country?: string | null;
    /**
     * The destination the data applies to.
     */
    destination?: string | null;
    /**
     * List of item-level issues.
     */
    itemLevelIssues?: Schema$AccountStatusItemLevelIssue[];
    /**
     * Aggregated product statistics.
     */
    statistics?: Schema$AccountStatusStatistics;
  }
  export interface Schema$AccountStatusStatistics {
    /**
     * Number of active offers.
     */
    active?: string | null;
    /**
     * Number of disapproved offers.
     */
    disapproved?: string | null;
    /**
     * Number of expiring offers.
     */
    expiring?: string | null;
    /**
     * Number of pending offers.
     */
    pending?: string | null;
  }
  /**
   * The tax settings of a merchant account. All methods require the admin role.
   */
  export interface Schema$AccountTax {
    /**
     * Required. The ID of the account to which these account tax settings belong.
     */
    accountId?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#accountTax&quot;.
     */
    kind?: string | null;
    /**
     * Tax rules. Updating the tax rules will enable US taxes (not reversible). Defining no rules is equivalent to not charging tax at all.
     */
    rules?: Schema$AccountTaxTaxRule[];
  }
  export interface Schema$AccounttaxCustomBatchRequest {
    /**
     * The request entries to be processed in the batch.
     */
    entries?: Schema$AccounttaxCustomBatchRequestEntry[];
  }
  /**
   * A batch entry encoding a single non-batch accounttax request.
   */
  export interface Schema$AccounttaxCustomBatchRequestEntry {
    /**
     * The ID of the account for which to get/update account tax settings.
     */
    accountId?: string | null;
    /**
     * The account tax settings to update. Only defined if the method is `update`.
     */
    accountTax?: Schema$AccountTax;
    /**
     * An entry ID, unique within the batch request.
     */
    batchId?: number | null;
    /**
     * The ID of the managing account.
     */
    merchantId?: string | null;
    /**
     * The method of the batch entry.  Acceptable values are:   - &quot;`get`&quot;  - &quot;`update`&quot;
     */
    method?: string | null;
  }
  export interface Schema$AccounttaxCustomBatchResponse {
    /**
     * The result of the execution of the batch requests.
     */
    entries?: Schema$AccounttaxCustomBatchResponseEntry[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#accounttaxCustomBatchResponse&quot;.
     */
    kind?: string | null;
  }
  /**
   * A batch entry encoding a single non-batch accounttax response.
   */
  export interface Schema$AccounttaxCustomBatchResponseEntry {
    /**
     * The retrieved or updated account tax settings.
     */
    accountTax?: Schema$AccountTax;
    /**
     * The ID of the request entry this entry responds to.
     */
    batchId?: number | null;
    /**
     * A list of errors defined if and only if the request failed.
     */
    errors?: Schema$Errors;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;`content#accounttaxCustomBatchResponseEntry`&quot;
     */
    kind?: string | null;
  }
  export interface Schema$AccounttaxListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#accounttaxListResponse&quot;.
     */
    kind?: string | null;
    /**
     * The token for the retrieval of the next page of account tax settings.
     */
    nextPageToken?: string | null;
    resources?: Schema$AccountTax[];
  }
  /**
   * Tax calculation rule to apply in a state or province (USA only).
   */
  export interface Schema$AccountTaxTaxRule {
    /**
     * Country code in which tax is applicable.
     */
    country?: string | null;
    /**
     * Required. State (or province) is which the tax is applicable, described by its location ID (also called criteria ID).
     */
    locationId?: string | null;
    /**
     * Explicit tax rate in percent, represented as a floating point number without the percentage character. Must not be negative.
     */
    ratePercent?: string | null;
    /**
     * If true, shipping charges are also taxed.
     */
    shippingTaxed?: boolean | null;
    /**
     * Whether the tax rate is taken from a global tax table or specified explicitly.
     */
    useGlobalRate?: boolean | null;
  }
  export interface Schema$AccountUser {
    /**
     * Whether user is an admin.
     */
    admin?: boolean | null;
    /**
     * User&#39;s email address.
     */
    emailAddress?: string | null;
    /**
     * Whether user is an order manager.
     */
    orderManager?: boolean | null;
    /**
     * Whether user can access payment statements.
     */
    paymentsAnalyst?: boolean | null;
    /**
     * Whether user can manage payment settings.
     */
    paymentsManager?: boolean | null;
  }
  export interface Schema$AccountYouTubeChannelLink {
    /**
     * Channel ID.
     */
    channelId?: string | null;
    /**
     * Status of the link between this Merchant Center account and the YouTube channel. Upon retrieval, it represents the actual status of the link and can be either `active` if it was approved in YT Creator Studio or `pending` if it&#39;s pending approval. Upon insertion, it represents the intended status of the link. Re-uploading a link with status `active` when it&#39;s still pending or with status `pending` when it&#39;s already active will have no effect: the status will remain unchanged. Re-uploading a link with deprecated status `inactive` is equivalent to not submitting the link at all and will delete the link if it was active or cancel the link request if it was pending.
     */
    status?: string | null;
  }
  export interface Schema$Amount {
    /**
     * [required] Value before taxes.
     */
    pretax?: Schema$Price;
    /**
     * [required] Tax value.
     */
    tax?: Schema$Price;
  }
  export interface Schema$BusinessDayConfig {
    /**
     * Regular business days. May not be empty.
     */
    businessDays?: string[] | null;
  }
  export interface Schema$CarrierRate {
    /**
     * Carrier service, such as `&quot;UPS&quot;` or `&quot;Fedex&quot;`. The list of supported carriers can be retrieved via the `getSupportedCarriers` method. Required.
     */
    carrierName?: string | null;
    /**
     * Carrier service, such as `&quot;ground&quot;` or `&quot;2 days&quot;`. The list of supported services for a carrier can be retrieved via the `getSupportedCarriers` method. Required.
     */
    carrierService?: string | null;
    /**
     * Additive shipping rate modifier. Can be negative. For example `{ &quot;value&quot;: &quot;1&quot;, &quot;currency&quot; : &quot;USD&quot; }` adds $1 to the rate, `{ &quot;value&quot;: &quot;-3&quot;, &quot;currency&quot; : &quot;USD&quot; }` removes $3 from the rate. Optional.
     */
    flatAdjustment?: Schema$Price;
    /**
     * Name of the carrier rate. Must be unique per rate group. Required.
     */
    name?: string | null;
    /**
     * Shipping origin for this carrier rate. Required.
     */
    originPostalCode?: string | null;
    /**
     * Multiplicative shipping rate modifier as a number in decimal notation. Can be negative. For example `&quot;5.4&quot;` increases the rate by 5.4%, `&quot;-3&quot;` decreases the rate by 3%. Optional.
     */
    percentageAdjustment?: string | null;
  }
  export interface Schema$CarriersCarrier {
    /**
     * The CLDR country code of the carrier (e.g., &quot;US&quot;). Always present.
     */
    country?: string | null;
    /**
     * The name of the carrier (e.g., `&quot;UPS&quot;`). Always present.
     */
    name?: string | null;
    /**
     * A list of supported services (e.g., `&quot;ground&quot;`) for that carrier. Contains at least one service.
     */
    services?: string[] | null;
  }
  export interface Schema$CustomAttribute {
    /**
     * The name of the attribute. Underscores will be replaced by spaces upon insertion.
     */
    name?: string | null;
    /**
     * The type of the attribute.  Acceptable values are:   - &quot;`boolean`&quot;  - &quot;`datetimerange`&quot;  - &quot;`float`&quot;  - &quot;`group`&quot;  - &quot;`int`&quot;  - &quot;`price`&quot;  - &quot;`text`&quot;  - &quot;`time`&quot;  - &quot;`url`&quot;
     */
    type?: string | null;
    /**
     * Free-form unit of the attribute. Unit can only be used for values of type int, float, or price.
     */
    unit?: string | null;
    /**
     * The value of the attribute.
     */
    value?: string | null;
  }
  export interface Schema$CustomerReturnReason {
    /**
     * Description of the reason.
     */
    description?: string | null;
    /**
     * Code of the return reason.  Acceptable values are:   - &quot;`betterPriceFound`&quot;  - &quot;`changedMind`&quot;  - &quot;`damagedOrDefectiveItem`&quot;  - &quot;`didNotMatchDescription`&quot;  - &quot;`doesNotFit`&quot;  - &quot;`expiredItem`&quot;  - &quot;`incorrectItemReceived`&quot;  - &quot;`noLongerNeeded`&quot;  - &quot;`notSpecified`&quot;  - &quot;`orderedWrongItem`&quot;  - &quot;`other`&quot;  - &quot;`qualityNotExpected`&quot;  - &quot;`receivedTooLate`&quot;  - &quot;`undeliverable`&quot;
     */
    reasonCode?: string | null;
  }
  export interface Schema$CustomGroup {
    /**
     * The sub-attributes.
     */
    attributes?: Schema$CustomAttribute[];
    /**
     * The name of the group. Underscores will be replaced by spaces upon insertion.
     */
    name?: string | null;
  }
  export interface Schema$CutoffTime {
    /**
     * Hour of the cutoff time until which an order has to be placed to be processed in the same day. Required.
     */
    hour?: number | null;
    /**
     * Minute of the cutoff time until which an order has to be placed to be processed in the same day. Required.
     */
    minute?: number | null;
    /**
     * Timezone identifier for the cutoff time. A list of identifiers can be found in  the AdWords API documentation. E.g. &quot;Europe/Zurich&quot;. Required.
     */
    timezone?: string | null;
  }
  /**
   * Datafeed configuration data.
   */
  export interface Schema$Datafeed {
    /**
     * The two-letter ISO 639-1 language in which the attributes are defined in the data feed.
     */
    attributeLanguage?: string | null;
    /**
     * [DEPRECATED] Please use targets[].language instead. The two-letter ISO 639-1 language of the items in the feed. Must be a valid language for `targetCountry`.
     */
    contentLanguage?: string | null;
    /**
     * Required. The type of data feed. For product inventory feeds, only feeds for local stores, not online stores, are supported.  Acceptable values are:   - &quot;`local products`&quot;  - &quot;`product inventory`&quot;  - &quot;`products`&quot;
     */
    contentType?: string | null;
    /**
     * Fetch schedule for the feed file.
     */
    fetchSchedule?: Schema$DatafeedFetchSchedule;
    /**
     * Required. The filename of the feed. All feeds must have a unique file name.
     */
    fileName?: string | null;
    /**
     * Format of the feed file.
     */
    format?: Schema$DatafeedFormat;
    /**
     * Required for update. The ID of the data feed.
     */
    id?: string | null;
    /**
     * [DEPRECATED] Please use  targets[].includedDestinations instead. The list of intended destinations (corresponds to checked check boxes in Merchant Center).
     */
    intendedDestinations?: string[] | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;`content#datafeed`&quot;
     */
    kind?: string | null;
    /**
     * Required for insert. A descriptive name of the data feed.
     */
    name?: string | null;
    /**
     * [DEPRECATED] Please use targets[].country instead. The country where the items in the feed will be included in the search index, represented as a CLDR territory code.
     */
    targetCountry?: string | null;
    /**
     * The targets this feed should apply to (country, language, destinations).
     */
    targets?: Schema$DatafeedTarget[];
  }
  /**
   * The required fields vary based on the frequency of fetching. For a monthly fetch schedule, day_of_month and hour are required. For a weekly fetch schedule, weekday and hour are required. For a daily fetch schedule, only hour is required.
   */
  export interface Schema$DatafeedFetchSchedule {
    /**
     * The day of the month the feed file should be fetched (1-31).
     */
    dayOfMonth?: number | null;
    /**
     * The URL where the feed file can be fetched. Google Merchant Center will support automatic scheduled uploads using the HTTP, HTTPS, FTP, or SFTP protocols, so the value will need to be a valid link using one of those four protocols.
     */
    fetchUrl?: string | null;
    /**
     * The hour of the day the feed file should be fetched (0-23).
     */
    hour?: number | null;
    /**
     * The minute of the hour the feed file should be fetched (0-59). Read-only.
     */
    minuteOfHour?: number | null;
    /**
     * An optional password for fetch_url.
     */
    password?: string | null;
    /**
     * Whether the scheduled fetch is paused or not.
     */
    paused?: boolean | null;
    /**
     * Time zone used for schedule. UTC by default. E.g., &quot;America/Los_Angeles&quot;.
     */
    timeZone?: string | null;
    /**
     * An optional user name for fetch_url.
     */
    username?: string | null;
    /**
     * The day of the week the feed file should be fetched.  Acceptable values are:   - &quot;`monday`&quot;  - &quot;`tuesday`&quot;  - &quot;`wednesday`&quot;  - &quot;`thursday`&quot;  - &quot;`friday`&quot;  - &quot;`saturday`&quot;  - &quot;`sunday`&quot;
     */
    weekday?: string | null;
  }
  export interface Schema$DatafeedFormat {
    /**
     * Delimiter for the separation of values in a delimiter-separated values feed. If not specified, the delimiter will be auto-detected. Ignored for non-DSV data feeds.  Acceptable values are:   - &quot;`pipe`&quot;  - &quot;`tab`&quot;  - &quot;`tilde`&quot;
     */
    columnDelimiter?: string | null;
    /**
     * Character encoding scheme of the data feed. If not specified, the encoding will be auto-detected.  Acceptable values are:   - &quot;`latin-1`&quot;  - &quot;`utf-16be`&quot;  - &quot;`utf-16le`&quot;  - &quot;`utf-8`&quot;  - &quot;`windows-1252`&quot;
     */
    fileEncoding?: string | null;
    /**
     * Specifies how double quotes are interpreted. If not specified, the mode will be auto-detected. Ignored for non-DSV data feeds.  Acceptable values are:   - &quot;`normal character`&quot;  - &quot;`value quoting`&quot;
     */
    quotingMode?: string | null;
  }
  export interface Schema$DatafeedsCustomBatchRequest {
    /**
     * The request entries to be processed in the batch.
     */
    entries?: Schema$DatafeedsCustomBatchRequestEntry[];
  }
  /**
   * A batch entry encoding a single non-batch datafeeds request.
   */
  export interface Schema$DatafeedsCustomBatchRequestEntry {
    /**
     * An entry ID, unique within the batch request.
     */
    batchId?: number | null;
    /**
     * The data feed to insert.
     */
    datafeed?: Schema$Datafeed;
    /**
     * The ID of the data feed to get, delete or fetch.
     */
    datafeedId?: string | null;
    /**
     * The ID of the managing account.
     */
    merchantId?: string | null;
    /**
     * The method of the batch entry.  Acceptable values are:   - &quot;`delete`&quot;  - &quot;`fetchNow`&quot;  - &quot;`get`&quot;  - &quot;`insert`&quot;  - &quot;`update`&quot;
     */
    method?: string | null;
  }
  export interface Schema$DatafeedsCustomBatchResponse {
    /**
     * The result of the execution of the batch requests.
     */
    entries?: Schema$DatafeedsCustomBatchResponseEntry[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#datafeedsCustomBatchResponse&quot;.
     */
    kind?: string | null;
  }
  /**
   * A batch entry encoding a single non-batch datafeeds response.
   */
  export interface Schema$DatafeedsCustomBatchResponseEntry {
    /**
     * The ID of the request entry this entry responds to.
     */
    batchId?: number | null;
    /**
     * The requested data feed. Defined if and only if the request was successful.
     */
    datafeed?: Schema$Datafeed;
    /**
     * A list of errors defined if and only if the request failed.
     */
    errors?: Schema$Errors;
  }
  export interface Schema$DatafeedsFetchNowResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#datafeedsFetchNowResponse&quot;.
     */
    kind?: string | null;
  }
  export interface Schema$DatafeedsListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#datafeedsListResponse&quot;.
     */
    kind?: string | null;
    /**
     * The token for the retrieval of the next page of datafeeds.
     */
    nextPageToken?: string | null;
    resources?: Schema$Datafeed[];
  }
  /**
   * The status of a datafeed, i.e., the result of the last retrieval of the datafeed computed asynchronously when the feed processing is finished.
   */
  export interface Schema$DatafeedStatus {
    /**
     * The country for which the status is reported, represented as a  CLDR territory code.
     */
    country?: string | null;
    /**
     * The ID of the feed for which the status is reported.
     */
    datafeedId?: string | null;
    /**
     * The list of errors occurring in the feed.
     */
    errors?: Schema$DatafeedStatusError[];
    /**
     * The number of items in the feed that were processed.
     */
    itemsTotal?: string | null;
    /**
     * The number of items in the feed that were valid.
     */
    itemsValid?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;`content#datafeedStatus`&quot;
     */
    kind?: string | null;
    /**
     * The two-letter ISO 639-1 language for which the status is reported.
     */
    language?: string | null;
    /**
     * The last date at which the feed was uploaded.
     */
    lastUploadDate?: string | null;
    /**
     * The processing status of the feed.  Acceptable values are:   - &quot;`&quot;`failure`&quot;: The feed could not be processed or all items had errors.`&quot;  - &quot;`in progress`&quot;: The feed is being processed.  - &quot;`none`&quot;: The feed has not yet been processed. For example, a feed that has never been uploaded will have this processing status.  - &quot;`success`&quot;: The feed was processed successfully, though some items might have had errors.
     */
    processingStatus?: string | null;
    /**
     * The list of errors occurring in the feed.
     */
    warnings?: Schema$DatafeedStatusError[];
  }
  /**
   * An error occurring in the feed, like &quot;invalid price&quot;.
   */
  export interface Schema$DatafeedStatusError {
    /**
     * The code of the error, e.g., &quot;validation/invalid_value&quot;.
     */
    code?: string | null;
    /**
     * The number of occurrences of the error in the feed.
     */
    count?: string | null;
    /**
     * A list of example occurrences of the error, grouped by product.
     */
    examples?: Schema$DatafeedStatusExample[];
    /**
     * The error message, e.g., &quot;Invalid price&quot;.
     */
    message?: string | null;
  }
  export interface Schema$DatafeedstatusesCustomBatchRequest {
    /**
     * The request entries to be processed in the batch.
     */
    entries?: Schema$DatafeedstatusesCustomBatchRequestEntry[];
  }
  /**
   * A batch entry encoding a single non-batch datafeedstatuses request.
   */
  export interface Schema$DatafeedstatusesCustomBatchRequestEntry {
    /**
     * An entry ID, unique within the batch request.
     */
    batchId?: number | null;
    /**
     * The country for which to get the datafeed status. If this parameter is provided then language must also be provided. Note that for multi-target datafeeds this parameter is required.
     */
    country?: string | null;
    /**
     * The ID of the data feed to get.
     */
    datafeedId?: string | null;
    /**
     * The language for which to get the datafeed status. If this parameter is provided then country must also be provided. Note that for multi-target datafeeds this parameter is required.
     */
    language?: string | null;
    /**
     * The ID of the managing account.
     */
    merchantId?: string | null;
    /**
     * The method of the batch entry.  Acceptable values are:   - &quot;`get`&quot;
     */
    method?: string | null;
  }
  export interface Schema$DatafeedstatusesCustomBatchResponse {
    /**
     * The result of the execution of the batch requests.
     */
    entries?: Schema$DatafeedstatusesCustomBatchResponseEntry[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#datafeedstatusesCustomBatchResponse&quot;.
     */
    kind?: string | null;
  }
  /**
   * A batch entry encoding a single non-batch datafeedstatuses response.
   */
  export interface Schema$DatafeedstatusesCustomBatchResponseEntry {
    /**
     * The ID of the request entry this entry responds to.
     */
    batchId?: number | null;
    /**
     * The requested data feed status. Defined if and only if the request was successful.
     */
    datafeedStatus?: Schema$DatafeedStatus;
    /**
     * A list of errors defined if and only if the request failed.
     */
    errors?: Schema$Errors;
  }
  export interface Schema$DatafeedstatusesListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#datafeedstatusesListResponse&quot;.
     */
    kind?: string | null;
    /**
     * The token for the retrieval of the next page of datafeed statuses.
     */
    nextPageToken?: string | null;
    resources?: Schema$DatafeedStatus[];
  }
  /**
   * An example occurrence for a particular error.
   */
  export interface Schema$DatafeedStatusExample {
    /**
     * The ID of the example item.
     */
    itemId?: string | null;
    /**
     * Line number in the data feed where the example is found.
     */
    lineNumber?: string | null;
    /**
     * The problematic value.
     */
    value?: string | null;
  }
  export interface Schema$DatafeedTarget {
    /**
     * The country where the items in the feed will be included in the search index, represented as a  CLDR territory code.
     */
    country?: string | null;
    /**
     * The list of destinations to exclude for this target (corresponds to unchecked check boxes in Merchant Center).
     */
    excludedDestinations?: string[] | null;
    /**
     * The list of destinations to include for this target (corresponds to checked check boxes in Merchant Center). Default destinations are always included unless provided in `excludedDestinations`.  List of supported destinations (if available to the account):   - DisplayAds  - Shopping  - ShoppingActions  - SurfacesAcrossGoogle
     */
    includedDestinations?: string[] | null;
    /**
     * The two-letter ISO 639-1 language of the items in the feed. Must be a valid language for `targets[].country`.
     */
    language?: string | null;
  }
  export interface Schema$DeliveryTime {
    /**
     * Business days cutoff time definition. If not configured the cutoff time will be defaulted to 8AM PST.
     */
    cutoffTime?: Schema$CutoffTime;
    /**
     * The business days during which orders can be handled. If not provided, Monday to Friday business days will be assumed.
     */
    handlingBusinessDayConfig?: Schema$BusinessDayConfig;
    /**
     * Holiday cutoff definitions. If configured, they specify order cutoff times for holiday-specific shipping.
     */
    holidayCutoffs?: Schema$HolidayCutoff[];
    /**
     * Maximum number of business days spent before an order is shipped. 0 means same day shipped, 1 means next day shipped. Must be greater than or equal to `minHandlingTimeInDays`.
     */
    maxHandlingTimeInDays?: number | null;
    /**
     * Maximum number of business days that is spent in transit. 0 means same day delivery, 1 means next day delivery. Must be greater than or equal to `minTransitTimeInDays`.
     */
    maxTransitTimeInDays?: number | null;
    /**
     * Minimum number of business days spent before an order is shipped. 0 means same day shipped, 1 means next day shipped.
     */
    minHandlingTimeInDays?: number | null;
    /**
     * Minimum number of business days that is spent in transit. 0 means same day delivery, 1 means next day delivery. Either `{min,max}TransitTimeInDays` or `transitTimeTable` must be set, but not both.
     */
    minTransitTimeInDays?: number | null;
    /**
     * The business days during which orders can be in-transit. If not provided, Monday to Friday business days will be assumed.
     */
    transitBusinessDayConfig?: Schema$BusinessDayConfig;
    /**
     * Transit time table, number of business days spent in transit based on row and column dimensions. Either `{min,max}TransitTimeInDays` or `transitTimeTable` can be set, but not both.
     */
    transitTimeTable?: Schema$TransitTable;
  }
  /**
   * An error returned by the API.
   */
  export interface Schema$Error {
    /**
     * The domain of the error.
     */
    domain?: string | null;
    /**
     * A description of the error.
     */
    message?: string | null;
    /**
     * The error code.
     */
    reason?: string | null;
  }
  /**
   * A list of errors returned by a failed batch entry.
   */
  export interface Schema$Errors {
    /**
     * The HTTP status of the first error in `errors`.
     */
    code?: number | null;
    /**
     * A list of errors.
     */
    errors?: Schema$Error[];
    /**
     * The message of the first error in `errors`.
     */
    message?: string | null;
  }
  export interface Schema$GmbAccounts {
    /**
     * The ID of the Merchant Center account.
     */
    accountId?: string | null;
    /**
     * A list of GMB accounts which are available to the merchant.
     */
    gmbAccounts?: Schema$GmbAccountsGmbAccount[];
  }
  export interface Schema$GmbAccountsGmbAccount {
    /**
     * The email which identifies the GMB account.
     */
    email?: string | null;
    /**
     * Number of listings under this account.
     */
    listingCount?: string | null;
    /**
     * The name of the GMB account.
     */
    name?: string | null;
    /**
     * The type of the GMB account (User or Business).
     */
    type?: string | null;
  }
  /**
   * A non-empty list of row or column headers for a table. Exactly one of `prices`, `weights`, `numItems`, `postalCodeGroupNames`, or `location` must be set.
   */
  export interface Schema$Headers {
    /**
     * A list of location ID sets. Must be non-empty. Can only be set if all other fields are not set.
     */
    locations?: Schema$LocationIdSet[];
    /**
     * A list of inclusive number of items upper bounds. The last value can be `&quot;infinity&quot;`. For example `[&quot;10&quot;, &quot;50&quot;, &quot;infinity&quot;]` represents the headers &quot;&lt;= 10 items&quot;, &quot; 50 items&quot;. Must be non-empty. Can only be set if all other fields are not set.
     */
    numberOfItems?: string[] | null;
    /**
     * A list of postal group names. The last value can be `&quot;all other locations&quot;`. Example: `[&quot;zone 1&quot;, &quot;zone 2&quot;, &quot;all other locations&quot;]`. The referred postal code groups must match the delivery country of the service. Must be non-empty. Can only be set if all other fields are not set.
     */
    postalCodeGroupNames?: string[] | null;
    /**
     * A list of inclusive order price upper bounds. The last price&#39;s value can be `&quot;infinity&quot;`. For example `[{&quot;value&quot;: &quot;10&quot;, &quot;currency&quot;: &quot;USD&quot;}, {&quot;value&quot;: &quot;500&quot;, &quot;currency&quot;: &quot;USD&quot;}, {&quot;value&quot;: &quot;infinity&quot;, &quot;currency&quot;: &quot;USD&quot;}]` represents the headers &quot;&lt;= $10&quot;, &quot; $500&quot;. All prices within a service must have the same currency. Must be non-empty. Can only be set if all other fields are not set.
     */
    prices?: Schema$Price[];
    /**
     * A list of inclusive order weight upper bounds. The last weight&#39;s value can be `&quot;infinity&quot;`. For example `[{&quot;value&quot;: &quot;10&quot;, &quot;unit&quot;: &quot;kg&quot;}, {&quot;value&quot;: &quot;50&quot;, &quot;unit&quot;: &quot;kg&quot;}, {&quot;value&quot;: &quot;infinity&quot;, &quot;unit&quot;: &quot;kg&quot;}]` represents the headers &quot;&lt;= 10kg&quot;, &quot; 50kg&quot;. All weights within a service must have the same unit. Must be non-empty. Can only be set if all other fields are not set.
     */
    weights?: Schema$Weight[];
  }
  export interface Schema$HolidayCutoff {
    /**
     * Date of the order deadline, in ISO 8601 format. E.g. &quot;2016-11-29&quot; for 29th November 2016. Required.
     */
    deadlineDate?: string | null;
    /**
     * Hour of the day on the deadline date until which the order has to be placed to qualify for the delivery guarantee. Possible values are: 0 (midnight), 1, ..., 12 (noon), 13, ..., 23. Required.
     */
    deadlineHour?: number | null;
    /**
     * Timezone identifier for the deadline hour. A list of identifiers can be found in  the AdWords API documentation. E.g. &quot;Europe/Zurich&quot;. Required.
     */
    deadlineTimezone?: string | null;
    /**
     * Unique identifier for the holiday. Required.
     */
    holidayId?: string | null;
    /**
     * Date on which the deadline will become visible to consumers in ISO 8601 format. E.g. &quot;2016-10-31&quot; for 31st October 2016. Required.
     */
    visibleFromDate?: string | null;
  }
  export interface Schema$HolidaysHoliday {
    /**
     * The CLDR territory code of the country in which the holiday is available. E.g. &quot;US&quot;, &quot;DE&quot;, &quot;GB&quot;. A holiday cutoff can only be configured in a shipping settings service with matching delivery country. Always present.
     */
    countryCode?: string | null;
    /**
     * Date of the holiday, in ISO 8601 format. E.g. &quot;2016-12-25&quot; for Christmas 2016. Always present.
     */
    date?: string | null;
    /**
     * Date on which the order has to arrive at the customer&#39;s, in ISO 8601 format. E.g. &quot;2016-12-24&quot; for 24th December 2016. Always present.
     */
    deliveryGuaranteeDate?: string | null;
    /**
     * Hour of the day in the delivery location&#39;s timezone on the guaranteed delivery date by which the order has to arrive at the customer&#39;s. Possible values are: 0 (midnight), 1, ..., 12 (noon), 13, ..., 23. Always present.
     */
    deliveryGuaranteeHour?: string | null;
    /**
     * Unique identifier for the holiday to be used when configuring holiday cutoffs. Always present.
     */
    id?: string | null;
    /**
     * The holiday type. Always present.  Acceptable values are:   - &quot;`Christmas`&quot;  - &quot;`Easter`&quot;  - &quot;`Father&#39;s Day`&quot;  - &quot;`Halloween`&quot;  - &quot;`Independence Day (USA)`&quot;  - &quot;`Mother&#39;s Day`&quot;  - &quot;`Thanksgiving`&quot;  - &quot;`Valentine&#39;s Day`&quot;
     */
    type?: string | null;
  }
  export interface Schema$Installment {
    /**
     * The amount the buyer has to pay per month.
     */
    amount?: Schema$Price;
    /**
     * The number of installments the buyer has to pay.
     */
    months?: string | null;
  }
  /**
   * (== resource_for v2.inventory ==)
   */
  export interface Schema$Inventory {
    /**
     * The availability of the product.  Acceptable values are:   - &quot;`in stock`&quot;  - &quot;`out of stock`&quot;  - &quot;`preorder`&quot;
     */
    availability?: string | null;
    /**
     * Custom label 0 for custom grouping of items in a Shopping campaign. Only supported for online products.
     */
    customLabel0?: string | null;
    /**
     * Custom label 1 for custom grouping of items in a Shopping campaign. Only supported for online products.
     */
    customLabel1?: string | null;
    /**
     * Custom label 2 for custom grouping of items in a Shopping campaign. Only supported for online products.
     */
    customLabel2?: string | null;
    /**
     * Custom label 3 for custom grouping of items in a Shopping campaign. Only supported for online products.
     */
    customLabel3?: string | null;
    /**
     * Custom label 3 for custom grouping of items in a Shopping campaign. Only supported for online products.
     */
    customLabel4?: string | null;
    /**
     * Number and amount of installments to pay for an item. Brazil only.
     */
    installment?: Schema$Installment;
    /**
     * The instore product location. Supported only for local products.
     */
    instoreProductLocation?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;`content#inventory`&quot;
     */
    kind?: string | null;
    /**
     * Loyalty points that users receive after purchasing the item. Japan only.
     */
    loyaltyPoints?: Schema$LoyaltyPoints;
    /**
     * Store pickup information. Only supported for local inventory. Not setting `pickup` means &quot;don&#39;t update&quot; while setting it to the empty value (`{}` in JSON) means &quot;delete&quot;. Otherwise, `pickupMethod` and `pickupSla` must be set together, unless `pickupMethod` is &quot;not supported&quot;.
     */
    pickup?: Schema$InventoryPickup;
    /**
     * The price of the product.
     */
    price?: Schema$Price;
    /**
     * The quantity of the product. Must be equal to or greater than zero. Supported only for local products.
     */
    quantity?: number | null;
    /**
     * The sale price of the product. Mandatory if `sale_price_effective_date` is defined.
     */
    salePrice?: Schema$Price;
    /**
     * A date range represented by a pair of ISO 8601 dates separated by a space, comma, or slash. Both dates might be specified as &#39;null&#39; if undecided.
     */
    salePriceEffectiveDate?: string | null;
    /**
     * The quantity of the product that is available for selling on Google. Supported only for online products.
     */
    sellOnGoogleQuantity?: number | null;
  }
  export interface Schema$InventoryCustomBatchRequest {
    /**
     * The request entries to be processed in the batch.
     */
    entries?: Schema$InventoryCustomBatchRequestEntry[];
  }
  /**
   * A batch entry encoding a single non-batch inventory request.
   */
  export interface Schema$InventoryCustomBatchRequestEntry {
    /**
     * An entry ID, unique within the batch request.
     */
    batchId?: number | null;
    /**
     * Price and availability of the product.
     */
    inventory?: Schema$Inventory;
    /**
     * The ID of the managing account.
     */
    merchantId?: string | null;
    /**
     * The ID of the product for which to update price and availability.
     */
    productId?: string | null;
    /**
     * The code of the store for which to update price and availability. Use `online` to update price and availability of an online product.
     */
    storeCode?: string | null;
  }
  export interface Schema$InventoryCustomBatchResponse {
    /**
     * The result of the execution of the batch requests.
     */
    entries?: Schema$InventoryCustomBatchResponseEntry[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#inventoryCustomBatchResponse&quot;.
     */
    kind?: string | null;
  }
  /**
   * A batch entry encoding a single non-batch inventory response.
   */
  export interface Schema$InventoryCustomBatchResponseEntry {
    /**
     * The ID of the request entry this entry responds to.
     */
    batchId?: number | null;
    /**
     * A list of errors defined if and only if the request failed.
     */
    errors?: Schema$Errors;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;`content#inventoryCustomBatchResponseEntry`&quot;
     */
    kind?: string | null;
  }
  export interface Schema$InventoryPickup {
    /**
     * Whether store pickup is available for this offer and whether the pickup option should be shown as buy, reserve, or not supported. Only supported for local inventory. Unless the value is &quot;not supported&quot;, must be submitted together with `pickupSla`.  Acceptable values are:   - &quot;`buy`&quot;  - &quot;`not supported`&quot;  - &quot;`reserve`&quot;  - &quot;`ship to store`&quot;
     */
    pickupMethod?: string | null;
    /**
     * The expected date that an order will be ready for pickup, relative to when the order is placed. Only supported for local inventory. Must be submitted together with `pickupMethod`.  Acceptable values are:   - &quot;`five day`&quot;  - &quot;`four day`&quot;  - &quot;`multi day`&quot;  - &quot;`multi week`&quot;  - &quot;`next day`&quot;  - &quot;`same day`&quot;  - &quot;`seven day`&quot;  - &quot;`six day`&quot;  - &quot;`three day`&quot;  - &quot;`two day`&quot;
     */
    pickupSla?: string | null;
  }
  export interface Schema$InventorySetRequest {
    /**
     * The availability of the product.  Acceptable values are:   - &quot;`in stock`&quot;  - &quot;`out of stock`&quot;  - &quot;`preorder`&quot;
     */
    availability?: string | null;
    /**
     * Custom label 0 for custom grouping of items in a Shopping campaign. Only supported for online products.
     */
    customLabel0?: string | null;
    /**
     * Custom label 1 for custom grouping of items in a Shopping campaign. Only supported for online products.
     */
    customLabel1?: string | null;
    /**
     * Custom label 2 for custom grouping of items in a Shopping campaign. Only supported for online products.
     */
    customLabel2?: string | null;
    /**
     * Custom label 3 for custom grouping of items in a Shopping campaign. Only supported for online products.
     */
    customLabel3?: string | null;
    /**
     * Custom label 3 for custom grouping of items in a Shopping campaign. Only supported for online products.
     */
    customLabel4?: string | null;
    /**
     * Number and amount of installments to pay for an item. Brazil only.
     */
    installment?: Schema$Installment;
    /**
     * The instore product location. Supported only for local products.
     */
    instoreProductLocation?: string | null;
    /**
     * Loyalty points that users receive after purchasing the item. Japan only.
     */
    loyaltyPoints?: Schema$LoyaltyPoints;
    /**
     * Store pickup information. Only supported for local inventory. Not setting `pickup` means &quot;don&#39;t update&quot; while setting it to the empty value (`{}` in JSON) means &quot;delete&quot;. Otherwise, `pickupMethod` and `pickupSla` must be set together, unless `pickupMethod` is &quot;not supported&quot;.
     */
    pickup?: Schema$InventoryPickup;
    /**
     * The price of the product.
     */
    price?: Schema$Price;
    /**
     * The quantity of the product. Must be equal to or greater than zero. Supported only for local products.
     */
    quantity?: number | null;
    /**
     * The sale price of the product. Mandatory if `sale_price_effective_date` is defined.
     */
    salePrice?: Schema$Price;
    /**
     * A date range represented by a pair of ISO 8601 dates separated by a space, comma, or slash. Both dates might be specified as &#39;null&#39; if undecided.
     */
    salePriceEffectiveDate?: string | null;
    /**
     * The quantity of the product that is available for selling on Google. Supported only for online products.
     */
    sellOnGoogleQuantity?: number | null;
  }
  export interface Schema$InventorySetResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#inventorySetResponse&quot;.
     */
    kind?: string | null;
  }
  export interface Schema$InvoiceSummary {
    /**
     * Summary of the total amounts of the additional charges.
     */
    additionalChargeSummaries?: Schema$InvoiceSummaryAdditionalChargeSummary[];
    /**
     * Deprecated.
     */
    customerBalance?: Schema$Amount;
    /**
     * Deprecated.
     */
    googleBalance?: Schema$Amount;
    /**
     * Deprecated.
     */
    merchantBalance?: Schema$Amount;
    /**
     * [required] Total price for the product.
     */
    productTotal?: Schema$Amount;
    /**
     * Deprecated.
     */
    promotionSummaries?: Schema$Promotion[];
  }
  export interface Schema$InvoiceSummaryAdditionalChargeSummary {
    /**
     * [required] Total additional charge for this type.
     */
    totalAmount?: Schema$Amount;
    /**
     * [required] Type of the additional charge.  Acceptable values are:   - &quot;`shipping`&quot;
     */
    type?: string | null;
  }
  export interface Schema$LiaAboutPageSettings {
    /**
     * The status of the verification process for the About page.  Acceptable values are:   - &quot;`active`&quot;  - &quot;`inactive`&quot;  - &quot;`pending`&quot;
     */
    status?: string | null;
    /**
     * The URL for the About page.
     */
    url?: string | null;
  }
  export interface Schema$LiaCountrySettings {
    /**
     * The settings for the About page.
     */
    about?: Schema$LiaAboutPageSettings;
    /**
     * Required. CLDR country code (e.g. &quot;US&quot;).
     */
    country?: string | null;
    /**
     * The status of the &quot;Merchant hosted local storefront&quot; feature.
     */
    hostedLocalStorefrontActive?: boolean | null;
    /**
     * LIA inventory verification settings.
     */
    inventory?: Schema$LiaInventorySettings;
    /**
     * LIA &quot;On Display To Order&quot; settings.
     */
    onDisplayToOrder?: Schema$LiaOnDisplayToOrderSettings;
    /**
     * The POS data provider linked with this country.
     */
    posDataProvider?: Schema$LiaPosDataProvider;
    /**
     * The status of the &quot;Store pickup&quot; feature.
     */
    storePickupActive?: boolean | null;
  }
  export interface Schema$LiaInventorySettings {
    /**
     * The email of the contact for the inventory verification process.
     */
    inventoryVerificationContactEmail?: string | null;
    /**
     * The name of the contact for the inventory verification process.
     */
    inventoryVerificationContactName?: string | null;
    /**
     * The status of the verification contact.  Acceptable values are:   - &quot;`active`&quot;  - &quot;`inactive`&quot;  - &quot;`pending`&quot;
     */
    inventoryVerificationContactStatus?: string | null;
    /**
     * The status of the inventory verification process.  Acceptable values are:   - &quot;`active`&quot;  - &quot;`inactive`&quot;  - &quot;`pending`&quot;
     */
    status?: string | null;
  }
  export interface Schema$LiaOnDisplayToOrderSettings {
    /**
     * Shipping cost and policy URL.
     */
    shippingCostPolicyUrl?: string | null;
    /**
     * The status of the ?On display to order? feature.  Acceptable values are:   - &quot;`active`&quot;  - &quot;`inactive`&quot;  - &quot;`pending`&quot;
     */
    status?: string | null;
  }
  export interface Schema$LiaPosDataProvider {
    /**
     * The ID of the POS data provider.
     */
    posDataProviderId?: string | null;
    /**
     * The account ID by which this merchant is known to the POS data provider.
     */
    posExternalAccountId?: string | null;
  }
  /**
   * Local Inventory ads (LIA) settings. All methods except listposdataproviders require the admin role.
   */
  export interface Schema$LiaSettings {
    /**
     * The ID of the account to which these LIA settings belong. Ignored upon update, always present in get request responses.
     */
    accountId?: string | null;
    /**
     * The LIA settings for each country.
     */
    countrySettings?: Schema$LiaCountrySettings[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;`content#liaSettings`&quot;
     */
    kind?: string | null;
  }
  export interface Schema$LiasettingsCustomBatchRequest {
    /**
     * The request entries to be processed in the batch.
     */
    entries?: Schema$LiasettingsCustomBatchRequestEntry[];
  }
  export interface Schema$LiasettingsCustomBatchRequestEntry {
    /**
     * The ID of the account for which to get/update account LIA settings.
     */
    accountId?: string | null;
    /**
     * An entry ID, unique within the batch request.
     */
    batchId?: number | null;
    /**
     * Inventory validation contact email. Required only for SetInventoryValidationContact.
     */
    contactEmail?: string | null;
    /**
     * Inventory validation contact name. Required only for SetInventoryValidationContact.
     */
    contactName?: string | null;
    /**
     * The country code. Required only for RequestInventoryVerification.
     */
    country?: string | null;
    /**
     * The GMB account. Required only for RequestGmbAccess.
     */
    gmbEmail?: string | null;
    /**
     * The account Lia settings to update. Only defined if the method is `update`.
     */
    liaSettings?: Schema$LiaSettings;
    /**
     * The ID of the managing account.
     */
    merchantId?: string | null;
    /**
     * The method of the batch entry.  Acceptable values are:   - &quot;`get`&quot;  - &quot;`getAccessibleGmbAccounts`&quot;  - &quot;`requestGmbAccess`&quot;  - &quot;`requestInventoryVerification`&quot;  - &quot;`setInventoryVerificationContact`&quot;  - &quot;`update`&quot;
     */
    method?: string | null;
    /**
     * The ID of POS data provider. Required only for SetPosProvider.
     */
    posDataProviderId?: string | null;
    /**
     * The account ID by which this merchant is known to the POS provider.
     */
    posExternalAccountId?: string | null;
  }
  export interface Schema$LiasettingsCustomBatchResponse {
    /**
     * The result of the execution of the batch requests.
     */
    entries?: Schema$LiasettingsCustomBatchResponseEntry[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#liasettingsCustomBatchResponse&quot;.
     */
    kind?: string | null;
  }
  export interface Schema$LiasettingsCustomBatchResponseEntry {
    /**
     * The ID of the request entry to which this entry responds.
     */
    batchId?: number | null;
    /**
     * A list of errors defined if, and only if, the request failed.
     */
    errors?: Schema$Errors;
    /**
     * The the list of accessible GMB accounts.
     */
    gmbAccounts?: Schema$GmbAccounts;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;`content#liasettingsCustomBatchResponseEntry`&quot;
     */
    kind?: string | null;
    /**
     * The retrieved or updated Lia settings.
     */
    liaSettings?: Schema$LiaSettings;
    /**
     * The list of POS data providers.
     */
    posDataProviders?: Schema$PosDataProviders[];
  }
  export interface Schema$LiasettingsGetAccessibleGmbAccountsResponse {
    /**
     * The ID of the Merchant Center account.
     */
    accountId?: string | null;
    /**
     * A list of GMB accounts which are available to the merchant.
     */
    gmbAccounts?: Schema$GmbAccountsGmbAccount[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#liasettingsGetAccessibleGmbAccountsResponse&quot;.
     */
    kind?: string | null;
  }
  export interface Schema$LiasettingsListPosDataProvidersResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#liasettingsListPosDataProvidersResponse&quot;.
     */
    kind?: string | null;
    /**
     * The list of POS data providers for each eligible country
     */
    posDataProviders?: Schema$PosDataProviders[];
  }
  export interface Schema$LiasettingsListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#liasettingsListResponse&quot;.
     */
    kind?: string | null;
    /**
     * The token for the retrieval of the next page of LIA settings.
     */
    nextPageToken?: string | null;
    resources?: Schema$LiaSettings[];
  }
  export interface Schema$LiasettingsRequestGmbAccessResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#liasettingsRequestGmbAccessResponse&quot;.
     */
    kind?: string | null;
  }
  export interface Schema$LiasettingsRequestInventoryVerificationResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#liasettingsRequestInventoryVerificationResponse&quot;.
     */
    kind?: string | null;
  }
  export interface Schema$LiasettingsSetInventoryVerificationContactResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#liasettingsSetInventoryVerificationContactResponse&quot;.
     */
    kind?: string | null;
  }
  export interface Schema$LiasettingsSetPosDataProviderResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#liasettingsSetPosDataProviderResponse&quot;.
     */
    kind?: string | null;
  }
  export interface Schema$LocationIdSet {
    /**
     * A non-empty list of location IDs. They must all be of the same location type (e.g., state).
     */
    locationIds?: string[] | null;
  }
  export interface Schema$LoyaltyPoints {
    /**
     * Name of loyalty points program. It is recommended to limit the name to 12 full-width characters or 24 Roman characters.
     */
    name?: string | null;
    /**
     * The retailer&#39;s loyalty points in absolute value.
     */
    pointsValue?: string | null;
    /**
     * The ratio of a point when converted to currency. Google assumes currency based on Merchant Center settings. If ratio is left out, it defaults to 1.0.
     */
    ratio?: number | null;
  }
  /**
   * Order return. Production access (all methods) requires the order manager role. Sandbox access does not.
   */
  export interface Schema$MerchantOrderReturn {
    /**
     * The date of creation of the return, in ISO 8601 format.
     */
    creationDate?: string | null;
    /**
     * Merchant defined order ID.
     */
    merchantOrderId?: string | null;
    /**
     * Google order ID.
     */
    orderId?: string | null;
    /**
     * Order return ID generated by Google.
     */
    orderReturnId?: string | null;
    /**
     * Items of the return.
     */
    returnItems?: Schema$MerchantOrderReturnItem[];
    /**
     * Shipments of the return.
     */
    returnShipments?: Schema$ReturnShipment[];
  }
  export interface Schema$MerchantOrderReturnItem {
    /**
     * The reason that the customer chooses to return an item.
     */
    customerReturnReason?: Schema$CustomerReturnReason;
    /**
     * Product level item ID. If the returned items are of the same product, they will have the same ID.
     */
    itemId?: string | null;
    /**
     * The reason that merchant chooses to accept a return item.
     */
    merchantReturnReason?: Schema$RefundReason;
    /**
     * Product data from the time of the order placement.
     */
    product?: Schema$OrderLineItemProduct;
    /**
     * IDs of the return shipments that this return item belongs to.
     */
    returnShipmentIds?: string[] | null;
    /**
     * State of the item.  Acceptable values are:   - &quot;`canceled`&quot;  - &quot;`new`&quot;  - &quot;`received`&quot;  - &quot;`refunded`&quot;  - &quot;`rejected`&quot;
     */
    state?: string | null;
  }
  export interface Schema$MinimumOrderValueTable {
    storeCodeSetWithMovs?: Schema$MinimumOrderValueTableStoreCodeSetWithMov[];
  }
  /**
   * A list of store code sets sharing the same minimum order value. At least two sets are required and the last one must be empty, which signifies &#39;MOV for all other stores&#39;. Each store code can only appear once across all the sets. All prices within a service must have the same currency.
   */
  export interface Schema$MinimumOrderValueTableStoreCodeSetWithMov {
    /**
     * A list of unique store codes or empty for the catch all.
     */
    storeCodes?: string[] | null;
    /**
     * The minimum order value for the given stores.
     */
    value?: Schema$Price;
  }
  /**
   * Order. Production access (all methods) requires the order manager role. Sandbox access does not. (== resource_for v2.orders ==) (== resource_for v2.1.orders ==)
   */
  export interface Schema$Order {
    /**
     * Whether the order was acknowledged.
     */
    acknowledged?: boolean | null;
    /**
     * Deprecated.  Acceptable values are:   - &quot;`googleExpress`&quot;  - &quot;`purchasesOnGoogle`&quot;
     */
    channelType?: string | null;
    /**
     * The details of the customer who placed the order.
     */
    customer?: Schema$OrderCustomer;
    /**
     * Delivery details for shipments of type `delivery`.
     */
    deliveryDetails?: Schema$OrderDeliveryDetails;
    /**
     * The REST ID of the order. Globally unique.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;`content#order`&quot;
     */
    kind?: string | null;
    /**
     * Line items that are ordered.
     */
    lineItems?: Schema$OrderLineItem[];
    merchantId?: string | null;
    /**
     * Merchant-provided ID of the order.
     */
    merchantOrderId?: string | null;
    /**
     * The net amount for the order. For example, if an order was originally for a grand total of $100 and a refund was issued for $20, the net amount will be $80.
     */
    netAmount?: Schema$Price;
    /**
     * The details of the payment method.
     */
    paymentMethod?: Schema$OrderPaymentMethod;
    /**
     * The status of the payment.  Acceptable values are:   - &quot;`paymentCaptured`&quot;  - &quot;`paymentRejected`&quot;  - &quot;`paymentSecured`&quot;  - &quot;`pendingAuthorization`&quot;
     */
    paymentStatus?: string | null;
    /**
     * Pickup details for shipments of type `pickup`.
     */
    pickupDetails?: Schema$OrderPickupDetails;
    /**
     * The date when the order was placed, in ISO 8601 format.
     */
    placedDate?: string | null;
    /**
     * The details of the merchant provided promotions applied to the order.  To determine which promotions apply to which products, check the `Promotions[].Benefits[].OfferIds` field against the `LineItems[].Product.OfferId` field for each promotion. If a promotion is applied to more than 1 `offerId`, divide the discount value by the number of affected offers to determine how much discount to apply to each `offerId`.  Examples:   - To calculate the line item level discount for a single specific item: For each promotion, subtract the `Promotions[].Benefits[].Discount.value` amount from the `LineItems[].Price.value`.  - To calculate the line item level discount for multiple quantity of a specific item: For each promotion, divide the `Promotions[].Benefits[].Discount.value` by the quantity of products and substract it from `LineItems[].Product.Price.value` for each quantity item.    Only 1 promotion can be applied to an offerId in a given order. To refund an item which had a promotion applied to it, make sure to refund the amount after first subtracting the promotion discount from the item price.  More details about the program are here.
     */
    promotions?: Schema$OrderLegacyPromotion[];
    /**
     * Refunds for the order.
     */
    refunds?: Schema$OrderRefund[];
    /**
     * Shipments of the order.
     */
    shipments?: Schema$OrderShipment[];
    /**
     * The total cost of shipping for all items.
     */
    shippingCost?: Schema$Price;
    /**
     * The tax for the total shipping cost.
     */
    shippingCostTax?: Schema$Price;
    /**
     * Deprecated. Shipping details are provided with line items instead.  Acceptable values are:   - &quot;`economy`&quot;  - &quot;`expedited`&quot;  - &quot;`oneDay`&quot;  - &quot;`sameDay`&quot;  - &quot;`standard`&quot;  - &quot;`twoDay`&quot;
     */
    shippingOption?: string | null;
    /**
     * The status of the order.  Acceptable values are:   - &quot;`canceled`&quot;  - &quot;`delivered`&quot;  - &quot;`inProgress`&quot;  - &quot;`partiallyDelivered`&quot;  - &quot;`partiallyReturned`&quot;  - &quot;`partiallyShipped`&quot;  - &quot;`pendingShipment`&quot;  - &quot;`returned`&quot;  - &quot;`shipped`&quot;
     */
    status?: string | null;
    /**
     * The party responsible for collecting and remitting taxes.  Acceptable values are:   - &quot;`marketplaceFacilitator`&quot;  - &quot;`merchant`&quot;
     */
    taxCollector?: string | null;
  }
  export interface Schema$OrderAddress {
    /**
     * CLDR country code (e.g. &quot;US&quot;).
     */
    country?: string | null;
    /**
     * Strings representing the lines of the printed label for mailing the order, for example: John Smith 1600 Amphitheatre Parkway Mountain View, CA, 94043 United States
     */
    fullAddress?: string[] | null;
    /**
     * Whether the address is a post office box.
     */
    isPostOfficeBox?: boolean | null;
    /**
     * City, town or commune. May also include dependent localities or sublocalities (e.g. neighborhoods or suburbs).
     */
    locality?: string | null;
    /**
     * Postal Code or ZIP (e.g. &quot;94043&quot;).
     */
    postalCode?: string | null;
    /**
     * Name of the recipient.
     */
    recipientName?: string | null;
    /**
     * Top-level administrative subdivision of the country. For example, a state like California (&quot;CA&quot;) or a province like Quebec (&quot;QC&quot;).
     */
    region?: string | null;
    /**
     * Street-level part of the address.
     */
    streetAddress?: string[] | null;
  }
  export interface Schema$OrderCancellation {
    /**
     * The actor that created the cancellation.  Acceptable values are:   - &quot;`customer`&quot;  - &quot;`googleBot`&quot;  - &quot;`googleCustomerService`&quot;  - &quot;`googlePayments`&quot;  - &quot;`googleSabre`&quot;  - &quot;`merchant`&quot;
     */
    actor?: string | null;
    /**
     * Date on which the cancellation has been created, in ISO 8601 format.
     */
    creationDate?: string | null;
    /**
     * The quantity that was canceled.
     */
    quantity?: number | null;
    /**
     * The reason for the cancellation. Orders that are canceled with a noInventory reason will lead to the removal of the product from Shopping Actions until you make an update to that product. This will not affect your Shopping ads.  Acceptable values are:   - &quot;`autoPostInternal`&quot;  - &quot;`autoPostInvalidBillingAddress`&quot;  - &quot;`autoPostNoInventory`&quot;  - &quot;`autoPostPriceError`&quot;  - &quot;`autoPostUndeliverableShippingAddress`&quot;  - &quot;`couponAbuse`&quot;  - &quot;`customerCanceled`&quot;  - &quot;`customerInitiatedCancel`&quot;  - &quot;`customerSupportRequested`&quot;  - &quot;`failToPushOrderGoogleError`&quot;  - &quot;`failToPushOrderMerchantError`&quot;  - &quot;`failToPushOrderMerchantFulfillmentError`&quot;  - &quot;`failToPushOrderToMerchant`&quot;  - &quot;`failToPushOrderToMerchantOutOfStock`&quot;  - &quot;`invalidCoupon`&quot;  - &quot;`malformedShippingAddress`&quot;  - &quot;`merchantDidNotShipOnTime`&quot;  - &quot;`noInventory`&quot;  - &quot;`orderTimeout`&quot;  - &quot;`other`&quot;  - &quot;`paymentAbuse`&quot;  - &quot;`paymentDeclined`&quot;  - &quot;`priceError`&quot;  - &quot;`returnRefundAbuse`&quot;  - &quot;`shippingPriceError`&quot;  - &quot;`taxError`&quot;  - &quot;`undeliverableShippingAddress`&quot;  - &quot;`unsupportedPoBoxAddress`&quot;
     */
    reason?: string | null;
    /**
     * The explanation of the reason.
     */
    reasonText?: string | null;
  }
  export interface Schema$OrderCustomer {
    /**
     * Deprecated.
     */
    email?: string | null;
    /**
     * Deprecated. Please use marketingRightsInfo instead.
     */
    explicitMarketingPreference?: boolean | null;
    /**
     * Full name of the customer.
     */
    fullName?: string | null;
    /**
     * Email address for the merchant to send value-added tax or invoice documentation of the order. Only the last document sent is made available to the customer. For more information, see  About automated VAT invoicing for Shopping Actions.
     */
    invoiceReceivingEmail?: string | null;
    /**
     * Customer&#39;s marketing preferences. Contains the marketing opt-in information that is current at the time that the merchant call. User preference selections can change from one order to the next so preferences must be checked with every order.
     */
    marketingRightsInfo?: Schema$OrderCustomerMarketingRightsInfo;
  }
  export interface Schema$OrderCustomerMarketingRightsInfo {
    /**
     * Last known customer selection regarding marketing preferences. In certain cases this selection might not be known, so this field would be empty. If a customer selected `granted` in their most recent order, they can be subscribed to marketing emails. Customers who have chosen `denied` must not be subscribed, or must be unsubscribed if already opted-in.  Acceptable values are:   - &quot;`denied`&quot;  - &quot;`granted`&quot;
     */
    explicitMarketingPreference?: string | null;
    /**
     * Timestamp when last time marketing preference was updated. Could be empty, if user wasn&#39;t offered a selection yet.
     */
    lastUpdatedTimestamp?: string | null;
    /**
     * Email address that can be used for marketing purposes. The field may be empty even if `explicitMarketingPreference` is &#39;granted&#39;. This happens when retrieving an old order from the customer who deleted their account.
     */
    marketingEmailAddress?: string | null;
  }
  export interface Schema$OrderDeliveryDetails {
    /**
     * The delivery address
     */
    address?: Schema$OrderAddress;
    /**
     * The phone number of the person receiving the delivery.
     */
    phoneNumber?: string | null;
  }
  export interface Schema$OrderinvoicesCreateChargeInvoiceRequest {
    /**
     * [required] The ID of the invoice.
     */
    invoiceId?: string | null;
    /**
     * [required] Invoice summary.
     */
    invoiceSummary?: Schema$InvoiceSummary;
    /**
     * [required] Invoice details per line item.
     */
    lineItemInvoices?: Schema$ShipmentInvoiceLineItemInvoice[];
    /**
     * [required] The ID of the operation, unique across all operations for a given order.
     */
    operationId?: string | null;
    /**
     * [required] ID of the shipment group. It is assigned by the merchant in the `shipLineItems` method and is used to group multiple line items that have the same kind of shipping charges.
     */
    shipmentGroupId?: string | null;
  }
  export interface Schema$OrderinvoicesCreateChargeInvoiceResponse {
    /**
     * The status of the execution.  Acceptable values are:   - &quot;`duplicate`&quot;  - &quot;`executed`&quot;
     */
    executionStatus?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#orderinvoicesCreateChargeInvoiceResponse&quot;.
     */
    kind?: string | null;
  }
  export interface Schema$OrderinvoicesCreateRefundInvoiceRequest {
    /**
     * [required] The ID of the invoice.
     */
    invoiceId?: string | null;
    /**
     * [required] The ID of the operation, unique across all operations for a given order.
     */
    operationId?: string | null;
    /**
     * Option to create a refund-only invoice. Exactly one of `refundOnlyOption` or `returnOption` must be provided.
     */
    refundOnlyOption?: Schema$OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption;
    /**
     * Option to create an invoice for a refund and mark all items within the invoice as returned. Exactly one of `refundOnlyOption` or `returnOption` must be provided.
     */
    returnOption?: Schema$OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption;
    /**
     * Invoice details for different shipment groups.
     */
    shipmentInvoices?: Schema$ShipmentInvoice[];
  }
  export interface Schema$OrderinvoicesCreateRefundInvoiceResponse {
    /**
     * The status of the execution.  Acceptable values are:   - &quot;`duplicate`&quot;  - &quot;`executed`&quot;
     */
    executionStatus?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#orderinvoicesCreateRefundInvoiceResponse&quot;.
     */
    kind?: string | null;
  }
  export interface Schema$OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption {
    /**
     * Optional description of the refund reason.
     */
    description?: string | null;
    /**
     * [required] Reason for the refund.  Acceptable values are:   - &quot;`adjustment`&quot;  - &quot;`autoPostInternal`&quot;  - &quot;`autoPostInvalidBillingAddress`&quot;  - &quot;`autoPostNoInventory`&quot;  - &quot;`autoPostPriceError`&quot;  - &quot;`autoPostUndeliverableShippingAddress`&quot;  - &quot;`couponAbuse`&quot;  - &quot;`courtesyAdjustment`&quot;  - &quot;`customerCanceled`&quot;  - &quot;`customerDiscretionaryReturn`&quot;  - &quot;`customerInitiatedMerchantCancel`&quot;  - &quot;`customerSupportRequested`&quot;  - &quot;`deliveredLateByCarrier`&quot;  - &quot;`deliveredTooLate`&quot;  - &quot;`expiredItem`&quot;  - &quot;`failToPushOrderGoogleError`&quot;  - &quot;`failToPushOrderMerchantError`&quot;  - &quot;`failToPushOrderMerchantFulfillmentError`&quot;  - &quot;`failToPushOrderToMerchant`&quot;  - &quot;`failToPushOrderToMerchantOutOfStock`&quot;  - &quot;`feeAdjustment`&quot;  - &quot;`invalidCoupon`&quot;  - &quot;`lateShipmentCredit`&quot;  - &quot;`malformedShippingAddress`&quot;  - &quot;`merchantDidNotShipOnTime`&quot;  - &quot;`noInventory`&quot;  - &quot;`orderTimeout`&quot;  - &quot;`other`&quot;  - &quot;`paymentAbuse`&quot;  - &quot;`paymentDeclined`&quot;  - &quot;`priceAdjustment`&quot;  - &quot;`priceError`&quot;  - &quot;`productArrivedDamaged`&quot;  - &quot;`productNotAsDescribed`&quot;  - &quot;`promoReallocation`&quot;  - &quot;`qualityNotAsExpected`&quot;  - &quot;`returnRefundAbuse`&quot;  - &quot;`shippingCostAdjustment`&quot;  - &quot;`shippingPriceError`&quot;  - &quot;`taxAdjustment`&quot;  - &quot;`taxError`&quot;  - &quot;`undeliverableShippingAddress`&quot;  - &quot;`unsupportedPoBoxAddress`&quot;  - &quot;`wrongProductShipped`&quot;
     */
    reason?: string | null;
  }
  export interface Schema$OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption {
    /**
     * Optional description of the return reason.
     */
    description?: string | null;
    /**
     * [required] Reason for the return.  Acceptable values are:   - &quot;`customerDiscretionaryReturn`&quot;  - &quot;`customerInitiatedMerchantCancel`&quot;  - &quot;`deliveredTooLate`&quot;  - &quot;`expiredItem`&quot;  - &quot;`invalidCoupon`&quot;  - &quot;`malformedShippingAddress`&quot;  - &quot;`other`&quot;  - &quot;`productArrivedDamaged`&quot;  - &quot;`productNotAsDescribed`&quot;  - &quot;`qualityNotAsExpected`&quot;  - &quot;`undeliverableShippingAddress`&quot;  - &quot;`unsupportedPoBoxAddress`&quot;  - &quot;`wrongProductShipped`&quot;
     */
    reason?: string | null;
  }
  export interface Schema$OrderLegacyPromotion {
    benefits?: Schema$OrderLegacyPromotionBenefit[];
    /**
     * The date and time frame when the promotion is active and ready for validation review. Note that the promotion live time may be delayed for a few hours due to the validation review. Start date and end date are separated by a forward slash (/). The start date is specified by the format (YYYY-MM-DD), followed by the letter ?T?, the time of the day when the sale starts (in Greenwich Mean Time, GMT), followed by an expression of the time zone for the sale. The end date is in the same format.
     */
    effectiveDates?: string | null;
    /**
     * Optional. The text code that corresponds to the promotion when applied on the retailer?s website.
     */
    genericRedemptionCode?: string | null;
    /**
     * The unique ID of the promotion.
     */
    id?: string | null;
    /**
     * The full title of the promotion.
     */
    longTitle?: string | null;
    /**
     * Whether the promotion is applicable to all products or only specific products.  Acceptable values are:   - &quot;`allProducts`&quot;  - &quot;`specificProducts`&quot;
     */
    productApplicability?: string | null;
    /**
     * Indicates that the promotion is valid online.  Acceptable values are:   - &quot;`online`&quot;
     */
    redemptionChannel?: string | null;
  }
  export interface Schema$OrderLegacyPromotionBenefit {
    /**
     * The discount in the order price when the promotion is applied.
     */
    discount?: Schema$Price;
    /**
     * The OfferId(s) that were purchased in this order and map to this specific benefit of the promotion.
     */
    offerIds?: string[] | null;
    /**
     * Further describes the benefit of the promotion. Note that we will expand on this enumeration as we support new promotion sub-types.  Acceptable values are:   - &quot;`buyMGetMoneyOff`&quot;  - &quot;`buyMGetNMoneyOff`&quot;  - &quot;`buyMGetNPercentOff`&quot;  - &quot;`buyMGetPercentOff`&quot;  - &quot;`freeGift`&quot;  - &quot;`freeGiftWithItemId`&quot;  - &quot;`freeGiftWithValue`&quot;  - &quot;`freeOvernightShipping`&quot;  - &quot;`freeShipping`&quot;  - &quot;`freeTwoDayShipping`&quot;  - &quot;`moneyOff`&quot;  - &quot;`percentageOff`&quot;  - &quot;`rewardPoints`&quot;  - &quot;`salePrice`&quot;
     */
    subType?: string | null;
    /**
     * The impact on tax when the promotion is applied.
     */
    taxImpact?: Schema$Price;
    /**
     * Describes whether the promotion applies to products (e.g. 20% off) or to shipping (e.g. Free Shipping).  Acceptable values are:   - &quot;`product`&quot;  - &quot;`shipping`&quot;
     */
    type?: string | null;
  }
  export interface Schema$OrderLineItem {
    /**
     * Annotations that are attached to the line item.
     */
    annotations?: Schema$OrderMerchantProvidedAnnotation[];
    /**
     * Cancellations of the line item.
     */
    cancellations?: Schema$OrderCancellation[];
    /**
     * The ID of the line item.
     */
    id?: string | null;
    /**
     * Total price for the line item. For example, if two items for $10 are purchased, the total price will be $20.
     */
    price?: Schema$Price;
    /**
     * Product data as seen by customer from the time of the order placement. Note that certain attributes values (e.g. title or gtin) might be reformatted and no longer match values submitted via product feed.
     */
    product?: Schema$OrderLineItemProduct;
    /**
     * Number of items canceled.
     */
    quantityCanceled?: number | null;
    /**
     * Number of items delivered.
     */
    quantityDelivered?: number | null;
    /**
     * Number of items ordered.
     */
    quantityOrdered?: number | null;
    /**
     * Number of items pending.
     */
    quantityPending?: number | null;
    /**
     * Number of items ready for pickup.
     */
    quantityReadyForPickup?: number | null;
    /**
     * Number of items returned.
     */
    quantityReturned?: number | null;
    /**
     * Number of items shipped.
     */
    quantityShipped?: number | null;
    /**
     * Details of the return policy for the line item.
     */
    returnInfo?: Schema$OrderLineItemReturnInfo;
    /**
     * Returns of the line item.
     */
    returns?: Schema$OrderReturn[];
    /**
     * Details of the requested shipping for the line item.
     */
    shippingDetails?: Schema$OrderLineItemShippingDetails;
    /**
     * Total tax amount for the line item. For example, if two items are purchased, and each have a cost tax of $2, the total tax amount will be $4.
     */
    tax?: Schema$Price;
  }
  export interface Schema$OrderLineItemProduct {
    /**
     * Brand of the item.
     */
    brand?: string | null;
    /**
     * The item&#39;s channel (online or local).  Acceptable values are:   - &quot;`local`&quot;  - &quot;`online`&quot;
     */
    channel?: string | null;
    /**
     * Condition or state of the item.  Acceptable values are:   - &quot;`new`&quot;  - &quot;`refurbished`&quot;  - &quot;`used`&quot;
     */
    condition?: string | null;
    /**
     * The two-letter ISO 639-1 language code for the item.
     */
    contentLanguage?: string | null;
    /**
     * Associated fees at order creation time.
     */
    fees?: Schema$OrderLineItemProductFee[];
    /**
     * Global Trade Item Number (GTIN) of the item.
     */
    gtin?: string | null;
    /**
     * The REST ID of the product.
     */
    id?: string | null;
    /**
     * URL of an image of the item.
     */
    imageLink?: string | null;
    /**
     * Shared identifier for all variants of the same product.
     */
    itemGroupId?: string | null;
    /**
     * Manufacturer Part Number (MPN) of the item.
     */
    mpn?: string | null;
    /**
     * An identifier of the item.
     */
    offerId?: string | null;
    /**
     * Price of the item.
     */
    price?: Schema$Price;
    /**
     * URL to the cached image shown to the user when order was placed.
     */
    shownImage?: string | null;
    /**
     * The CLDR territory code of the target country of the product.
     */
    targetCountry?: string | null;
    /**
     * The title of the product.
     */
    title?: string | null;
    /**
     * Variant attributes for the item. These are dimensions of the product, such as color, gender, material, pattern, and size. You can find a comprehensive list of variant attributes here.
     */
    variantAttributes?: Schema$OrderLineItemProductVariantAttribute[];
  }
  export interface Schema$OrderLineItemProductFee {
    /**
     * Amount of the fee.
     */
    amount?: Schema$Price;
    /**
     * Name of the fee.
     */
    name?: string | null;
  }
  export interface Schema$OrderLineItemProductVariantAttribute {
    /**
     * The dimension of the variant.
     */
    dimension?: string | null;
    /**
     * The value for the dimension.
     */
    value?: string | null;
  }
  export interface Schema$OrderLineItemReturnInfo {
    /**
     * Required. How many days later the item can be returned.
     */
    daysToReturn?: number | null;
    /**
     * Required. Whether the item is returnable.
     */
    isReturnable?: boolean | null;
    /**
     * Required. URL of the item return policy.
     */
    policyUrl?: string | null;
  }
  export interface Schema$OrderLineItemShippingDetails {
    /**
     * Required. The delivery by date, in ISO 8601 format.
     */
    deliverByDate?: string | null;
    /**
     * Required. Details of the shipping method.
     */
    method?: Schema$OrderLineItemShippingDetailsMethod;
    /**
     * Required. The ship by date, in ISO 8601 format.
     */
    shipByDate?: string | null;
    /**
     * Type of shipment. Indicates whether `deliveryDetails` or `pickupDetails` is applicable for this shipment.  Acceptable values are:   - &quot;`delivery`&quot;  - &quot;`pickup`&quot;
     */
    type?: string | null;
  }
  export interface Schema$OrderLineItemShippingDetailsMethod {
    /**
     * The carrier for the shipping. Optional. See `shipments[].carrier` for a list of acceptable values.
     */
    carrier?: string | null;
    /**
     * Required. Maximum transit time.
     */
    maxDaysInTransit?: number | null;
    /**
     * Required. The name of the shipping method.
     */
    methodName?: string | null;
    /**
     * Required. Minimum transit time.
     */
    minDaysInTransit?: number | null;
  }
  export interface Schema$OrderMerchantProvidedAnnotation {
    /**
     * Key for additional merchant provided (as key-value pairs) annotation about the line item.
     */
    key?: string | null;
    /**
     * Value for additional merchant provided (as key-value pairs) annotation about the line item.
     */
    value?: string | null;
  }
  export interface Schema$OrderPaymentMethod {
    /**
     * The billing address.
     */
    billingAddress?: Schema$OrderAddress;
    /**
     * The card expiration month (January = 1, February = 2 etc.).
     */
    expirationMonth?: number | null;
    /**
     * The card expiration year (4-digit, e.g. 2015).
     */
    expirationYear?: number | null;
    /**
     * The last four digits of the card number.
     */
    lastFourDigits?: string | null;
    /**
     * The billing phone number.
     */
    phoneNumber?: string | null;
    /**
     * The type of instrument.  Acceptable values are:   - &quot;`AMEX`&quot;  - &quot;`DISCOVER`&quot;  - &quot;`JCB`&quot;  - &quot;`MASTERCARD`&quot;  - &quot;`UNIONPAY`&quot;  - &quot;`VISA`&quot;  - &quot;``&quot;
     */
    type?: string | null;
  }
  export interface Schema$OrderPickupDetails {
    /**
     * Address of the pickup location where the shipment should be sent. Note that `recipientName` in the address is the name of the business at the pickup location.
     */
    address?: Schema$OrderAddress;
    /**
     * Collectors authorized to pick up shipment from the pickup location.
     */
    collectors?: Schema$OrderPickupDetailsCollector[];
    /**
     * ID of the pickup location.
     */
    locationId?: string | null;
  }
  export interface Schema$OrderPickupDetailsCollector {
    /**
     * Name of the person picking up the shipment.
     */
    name?: string | null;
    /**
     * Phone number of the person picking up the shipment.
     */
    phoneNumber?: string | null;
  }
  export interface Schema$OrderRefund {
    /**
     * The actor that created the refund.  Acceptable values are:   - &quot;`customer`&quot;  - &quot;`googleBot`&quot;  - &quot;`googleCustomerService`&quot;  - &quot;`googlePayments`&quot;  - &quot;`googleSabre`&quot;  - &quot;`merchant`&quot;
     */
    actor?: string | null;
    /**
     * The amount that is refunded.
     */
    amount?: Schema$Price;
    /**
     * Date on which the item has been created, in ISO 8601 format.
     */
    creationDate?: string | null;
    /**
     * The reason for the refund.  Acceptable values are:   - &quot;`adjustment`&quot;  - &quot;`autoPostInternal`&quot;  - &quot;`autoPostInvalidBillingAddress`&quot;  - &quot;`autoPostNoInventory`&quot;  - &quot;`autoPostPriceError`&quot;  - &quot;`autoPostUndeliverableShippingAddress`&quot;  - &quot;`couponAbuse`&quot;  - &quot;`courtesyAdjustment`&quot;  - &quot;`customerCanceled`&quot;  - &quot;`customerDiscretionaryReturn`&quot;  - &quot;`customerInitiatedMerchantCancel`&quot;  - &quot;`customerSupportRequested`&quot;  - &quot;`deliveredLateByCarrier`&quot;  - &quot;`deliveredTooLate`&quot;  - &quot;`expiredItem`&quot;  - &quot;`failToPushOrderGoogleError`&quot;  - &quot;`failToPushOrderMerchantError`&quot;  - &quot;`failToPushOrderMerchantFulfillmentError`&quot;  - &quot;`failToPushOrderToMerchant`&quot;  - &quot;`failToPushOrderToMerchantOutOfStock`&quot;  - &quot;`feeAdjustment`&quot;  - &quot;`invalidCoupon`&quot;  - &quot;`lateShipmentCredit`&quot;  - &quot;`malformedShippingAddress`&quot;  - &quot;`merchantDidNotShipOnTime`&quot;  - &quot;`noInventory`&quot;  - &quot;`orderTimeout`&quot;  - &quot;`other`&quot;  - &quot;`paymentAbuse`&quot;  - &quot;`paymentDeclined`&quot;  - &quot;`priceAdjustment`&quot;  - &quot;`priceError`&quot;  - &quot;`productArrivedDamaged`&quot;  - &quot;`productNotAsDescribed`&quot;  - &quot;`promoReallocation`&quot;  - &quot;`qualityNotAsExpected`&quot;  - &quot;`returnRefundAbuse`&quot;  - &quot;`shippingCostAdjustment`&quot;  - &quot;`shippingPriceError`&quot;  - &quot;`taxAdjustment`&quot;  - &quot;`taxError`&quot;  - &quot;`undeliverableShippingAddress`&quot;  - &quot;`unsupportedPoBoxAddress`&quot;  - &quot;`wrongProductShipped`&quot;
     */
    reason?: string | null;
    /**
     * The explanation of the reason.
     */
    reasonText?: string | null;
  }
  /**
   * Order disbursement. All methods require the payment analyst role. (== resource_for v2.orderreports ==) (== resource_for v2.1.orderreports ==)
   */
  export interface Schema$OrderReportDisbursement {
    /**
     * The disbursement amount.
     */
    disbursementAmount?: Schema$Price;
    /**
     * The disbursement date, in ISO 8601 format.
     */
    disbursementCreationDate?: string | null;
    /**
     * The date the disbursement was initiated, in ISO 8601 format.
     */
    disbursementDate?: string | null;
    /**
     * The ID of the disbursement.
     */
    disbursementId?: string | null;
    /**
     * The ID of the managing account.
     */
    merchantId?: string | null;
  }
  export interface Schema$OrderreportsListDisbursementsResponse {
    /**
     * The list of disbursements.
     */
    disbursements?: Schema$OrderReportDisbursement[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#orderreportsListDisbursementsResponse&quot;.
     */
    kind?: string | null;
    /**
     * The token for the retrieval of the next page of disbursements.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$OrderreportsListTransactionsResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#orderreportsListTransactionsResponse&quot;.
     */
    kind?: string | null;
    /**
     * The token for the retrieval of the next page of transactions.
     */
    nextPageToken?: string | null;
    /**
     * The list of transactions.
     */
    transactions?: Schema$OrderReportTransaction[];
  }
  export interface Schema$OrderReportTransaction {
    /**
     * The disbursement amount.
     */
    disbursementAmount?: Schema$Price;
    /**
     * The date the disbursement was created, in ISO 8601 format.
     */
    disbursementCreationDate?: string | null;
    /**
     * The date the disbursement was initiated, in ISO 8601 format.
     */
    disbursementDate?: string | null;
    /**
     * The ID of the disbursement.
     */
    disbursementId?: string | null;
    /**
     * The ID of the managing account.
     */
    merchantId?: string | null;
    /**
     * Merchant-provided ID of the order.
     */
    merchantOrderId?: string | null;
    /**
     * The ID of the order.
     */
    orderId?: string | null;
    /**
     * Total amount for the items.
     */
    productAmount?: Schema$Amount;
    /**
     * Total amount with remitted tax for the items.
     */
    productAmountWithRemittedTax?: Schema$ProductAmount;
    /**
     * The date of the transaction, in ISO 8601 format.
     */
    transactionDate?: string | null;
  }
  export interface Schema$OrderReturn {
    /**
     * The actor that created the refund.  Acceptable values are:   - &quot;`customer`&quot;  - &quot;`googleBot`&quot;  - &quot;`googleCustomerService`&quot;  - &quot;`googlePayments`&quot;  - &quot;`googleSabre`&quot;  - &quot;`merchant`&quot;
     */
    actor?: string | null;
    /**
     * Date on which the item has been created, in ISO 8601 format.
     */
    creationDate?: string | null;
    /**
     * Quantity that is returned.
     */
    quantity?: number | null;
    /**
     * The reason for the return.  Acceptable values are:   - &quot;`customerDiscretionaryReturn`&quot;  - &quot;`customerInitiatedMerchantCancel`&quot;  - &quot;`deliveredTooLate`&quot;  - &quot;`expiredItem`&quot;  - &quot;`invalidCoupon`&quot;  - &quot;`malformedShippingAddress`&quot;  - &quot;`other`&quot;  - &quot;`productArrivedDamaged`&quot;  - &quot;`productNotAsDescribed`&quot;  - &quot;`qualityNotAsExpected`&quot;  - &quot;`undeliverableShippingAddress`&quot;  - &quot;`unsupportedPoBoxAddress`&quot;  - &quot;`wrongProductShipped`&quot;
     */
    reason?: string | null;
    /**
     * The explanation of the reason.
     */
    reasonText?: string | null;
  }
  export interface Schema$OrderreturnsListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#orderreturnsListResponse&quot;.
     */
    kind?: string | null;
    /**
     * The token for the retrieval of the next page of returns.
     */
    nextPageToken?: string | null;
    resources?: Schema$MerchantOrderReturn[];
  }
  export interface Schema$OrdersAcknowledgeRequest {
    /**
     * The ID of the operation. Unique across all operations for a given order.
     */
    operationId?: string | null;
  }
  export interface Schema$OrdersAcknowledgeResponse {
    /**
     * The status of the execution.  Acceptable values are:   - &quot;`duplicate`&quot;  - &quot;`executed`&quot;
     */
    executionStatus?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#ordersAcknowledgeResponse&quot;.
     */
    kind?: string | null;
  }
  export interface Schema$OrdersAdvanceTestOrderResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#ordersAdvanceTestOrderResponse&quot;.
     */
    kind?: string | null;
  }
  export interface Schema$OrdersCancelLineItemRequest {
    /**
     * Deprecated. Please use amountPretax and amountTax instead.
     */
    amount?: Schema$Price;
    /**
     * Amount to refund for the cancelation. Optional. If not set, Google will calculate the default based on the price and tax of the items involved. The amount must not be larger than the net amount left on the order.
     */
    amountPretax?: Schema$Price;
    /**
     * Tax amount that corresponds to cancellation amount in amountPretax. Optional, but if filled, then amountPretax must be set. Calculated automatically if not provided.
     */
    amountTax?: Schema$Price;
    /**
     * The ID of the line item to cancel. Either lineItemId or productId is required.
     */
    lineItemId?: string | null;
    /**
     * The ID of the operation. Unique across all operations for a given order.
     */
    operationId?: string | null;
    /**
     * The ID of the product to cancel. This is the REST ID used in the products service. Either lineItemId or productId is required.
     */
    productId?: string | null;
    /**
     * The quantity to cancel.
     */
    quantity?: number | null;
    /**
     * The reason for the cancellation.  Acceptable values are:   - &quot;`customerInitiatedCancel`&quot;  - &quot;`invalidCoupon`&quot;  - &quot;`malformedShippingAddress`&quot;  - &quot;`noInventory`&quot;  - &quot;`other`&quot;  - &quot;`priceError`&quot;  - &quot;`shippingPriceError`&quot;  - &quot;`taxError`&quot;  - &quot;`undeliverableShippingAddress`&quot;  - &quot;`unsupportedPoBoxAddress`&quot;
     */
    reason?: string | null;
    /**
     * The explanation of the reason.
     */
    reasonText?: string | null;
  }
  export interface Schema$OrdersCancelLineItemResponse {
    /**
     * The status of the execution.  Acceptable values are:   - &quot;`duplicate`&quot;  - &quot;`executed`&quot;
     */
    executionStatus?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#ordersCancelLineItemResponse&quot;.
     */
    kind?: string | null;
  }
  export interface Schema$OrdersCancelRequest {
    /**
     * The ID of the operation. Unique across all operations for a given order.
     */
    operationId?: string | null;
    /**
     * The reason for the cancellation.  Acceptable values are:   - &quot;`customerInitiatedCancel`&quot;  - &quot;`invalidCoupon`&quot;  - &quot;`malformedShippingAddress`&quot;  - &quot;`noInventory`&quot;  - &quot;`other`&quot;  - &quot;`priceError`&quot;  - &quot;`shippingPriceError`&quot;  - &quot;`taxError`&quot;  - &quot;`undeliverableShippingAddress`&quot;  - &quot;`unsupportedPoBoxAddress`&quot;
     */
    reason?: string | null;
    /**
     * The explanation of the reason.
     */
    reasonText?: string | null;
  }
  export interface Schema$OrdersCancelResponse {
    /**
     * The status of the execution.  Acceptable values are:   - &quot;`duplicate`&quot;  - &quot;`executed`&quot;
     */
    executionStatus?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#ordersCancelResponse&quot;.
     */
    kind?: string | null;
  }
  export interface Schema$OrdersCancelTestOrderByCustomerRequest {
    /**
     * The reason for the cancellation.  Acceptable values are:   - &quot;`changedMind`&quot;  - &quot;`orderedWrongItem`&quot;  - &quot;`other`&quot;
     */
    reason?: string | null;
  }
  export interface Schema$OrdersCancelTestOrderByCustomerResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#ordersCancelTestOrderByCustomerResponse&quot;.
     */
    kind?: string | null;
  }
  export interface Schema$OrdersCreateTestOrderRequest {
    /**
     * The  CLDR territory code of the country of the test order to create. Affects the currency and addresses of orders created via `template_name`, or the addresses of orders created via `test_order`.  Acceptable values are:   - &quot;`US`&quot;  - &quot;`FR`&quot;  Defaults to `US`.
     */
    country?: string | null;
    /**
     * The test order template to use. Specify as an alternative to `testOrder` as a shortcut for retrieving a template and then creating an order using that template.  Acceptable values are:   - &quot;`template1`&quot;  - &quot;`template1a`&quot;  - &quot;`template1b`&quot;  - &quot;`template2`&quot;  - &quot;`template3`&quot;
     */
    templateName?: string | null;
    /**
     * The test order to create.
     */
    testOrder?: Schema$TestOrder;
  }
  export interface Schema$OrdersCreateTestOrderResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#ordersCreateTestOrderResponse&quot;.
     */
    kind?: string | null;
    /**
     * The ID of the newly created test order.
     */
    orderId?: string | null;
  }
  export interface Schema$OrdersCreateTestReturnRequest {
    /**
     * Returned items.
     */
    items?: Schema$OrdersCustomBatchRequestEntryCreateTestReturnReturnItem[];
  }
  export interface Schema$OrdersCreateTestReturnResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#ordersCreateTestReturnResponse&quot;.
     */
    kind?: string | null;
    /**
     * The ID of the newly created test order return.
     */
    returnId?: string | null;
  }
  export interface Schema$OrdersCustomBatchRequest {
    /**
     * The request entries to be processed in the batch.
     */
    entries?: Schema$OrdersCustomBatchRequestEntry[];
  }
  export interface Schema$OrdersCustomBatchRequestEntry {
    /**
     * An entry ID, unique within the batch request.
     */
    batchId?: number | null;
    /**
     * Required for `cancel` method.
     */
    cancel?: Schema$OrdersCustomBatchRequestEntryCancel;
    /**
     * Required for `cancelLineItem` method.
     */
    cancelLineItem?: Schema$OrdersCustomBatchRequestEntryCancelLineItem;
    /**
     * Required for `inStoreReturnLineItem` method.
     */
    inStoreRefundLineItem?: Schema$OrdersCustomBatchRequestEntryInStoreRefundLineItem;
    /**
     * The ID of the managing account.
     */
    merchantId?: string | null;
    /**
     * The merchant order ID. Required for `updateMerchantOrderId` and `getByMerchantOrderId` methods.
     */
    merchantOrderId?: string | null;
    /**
     * The method of the batch entry.  Acceptable values are:   - &quot;`acknowledge`&quot;  - &quot;`cancel`&quot;  - &quot;`cancelLineItem`&quot;  - &quot;`get`&quot;  - &quot;`getByMerchantOrderId`&quot;  - &quot;`inStoreRefundLineItem`&quot;  - &quot;`refund`&quot;  - &quot;`rejectReturnLineItem`&quot;  - &quot;`returnLineItem`&quot;  - &quot;`returnRefundLineItem`&quot;  - &quot;`setLineItemMetadata`&quot;  - &quot;`shipLineItems`&quot;  - &quot;`updateLineItemShippingDetails`&quot;  - &quot;`updateMerchantOrderId`&quot;  - &quot;`updateShipment`&quot;
     */
    method?: string | null;
    /**
     * The ID of the operation. Unique across all operations for a given order. Required for all methods beside `get` and `getByMerchantOrderId`.
     */
    operationId?: string | null;
    /**
     * The ID of the order. Required for all methods beside `getByMerchantOrderId`.
     */
    orderId?: string | null;
    /**
     * Required for `refund` method.
     */
    refund?: Schema$OrdersCustomBatchRequestEntryRefund;
    /**
     * Required for `rejectReturnLineItem` method.
     */
    rejectReturnLineItem?: Schema$OrdersCustomBatchRequestEntryRejectReturnLineItem;
    /**
     * Required for `returnLineItem` method.
     */
    returnLineItem?: Schema$OrdersCustomBatchRequestEntryReturnLineItem;
    /**
     * Required for `returnRefundLineItem` method.
     */
    returnRefundLineItem?: Schema$OrdersCustomBatchRequestEntryReturnRefundLineItem;
    /**
     * Required for `setLineItemMetadata` method.
     */
    setLineItemMetadata?: Schema$OrdersCustomBatchRequestEntrySetLineItemMetadata;
    /**
     * Required for `shipLineItems` method.
     */
    shipLineItems?: Schema$OrdersCustomBatchRequestEntryShipLineItems;
    /**
     * Required for `updateLineItemShippingDate` method.
     */
    updateLineItemShippingDetails?: Schema$OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails;
    /**
     * Required for `updateShipment` method.
     */
    updateShipment?: Schema$OrdersCustomBatchRequestEntryUpdateShipment;
  }
  export interface Schema$OrdersCustomBatchRequestEntryCancel {
    /**
     * The reason for the cancellation.  Acceptable values are:   - &quot;`customerInitiatedCancel`&quot;  - &quot;`invalidCoupon`&quot;  - &quot;`malformedShippingAddress`&quot;  - &quot;`noInventory`&quot;  - &quot;`other`&quot;  - &quot;`priceError`&quot;  - &quot;`shippingPriceError`&quot;  - &quot;`taxError`&quot;  - &quot;`undeliverableShippingAddress`&quot;  - &quot;`unsupportedPoBoxAddress`&quot;
     */
    reason?: string | null;
    /**
     * The explanation of the reason.
     */
    reasonText?: string | null;
  }
  export interface Schema$OrdersCustomBatchRequestEntryCancelLineItem {
    /**
     * Deprecated. Please use amountPretax and amountTax instead.
     */
    amount?: Schema$Price;
    /**
     * Amount to refund for the cancelation. Optional. If not set, Google will calculate the default based on the price and tax of the items involved. The amount must not be larger than the net amount left on the order.
     */
    amountPretax?: Schema$Price;
    /**
     * Tax amount that corresponds to cancellation amount in amountPretax. Optional, but if filled, then amountPretax must be set. Calculated automatically if not provided.
     */
    amountTax?: Schema$Price;
    /**
     * The ID of the line item to cancel. Either lineItemId or productId is required.
     */
    lineItemId?: string | null;
    /**
     * The ID of the product to cancel. This is the REST ID used in the products service. Either lineItemId or productId is required.
     */
    productId?: string | null;
    /**
     * The quantity to cancel.
     */
    quantity?: number | null;
    /**
     * The reason for the cancellation.  Acceptable values are:   - &quot;`customerInitiatedCancel`&quot;  - &quot;`invalidCoupon`&quot;  - &quot;`malformedShippingAddress`&quot;  - &quot;`noInventory`&quot;  - &quot;`other`&quot;  - &quot;`priceError`&quot;  - &quot;`shippingPriceError`&quot;  - &quot;`taxError`&quot;  - &quot;`undeliverableShippingAddress`&quot;  - &quot;`unsupportedPoBoxAddress`&quot;
     */
    reason?: string | null;
    /**
     * The explanation of the reason.
     */
    reasonText?: string | null;
  }
  export interface Schema$OrdersCustomBatchRequestEntryCreateTestReturnReturnItem {
    /**
     * The ID of the line item to return.
     */
    lineItemId?: string | null;
    /**
     * Quantity that is returned.
     */
    quantity?: number | null;
  }
  export interface Schema$OrdersCustomBatchRequestEntryInStoreRefundLineItem {
    /**
     * The amount that is refunded. Required.
     */
    amountPretax?: Schema$Price;
    /**
     * Tax amount that correspond to refund amount in amountPretax. Required.
     */
    amountTax?: Schema$Price;
    /**
     * The ID of the line item to return. Either lineItemId or productId is required.
     */
    lineItemId?: string | null;
    /**
     * The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required.
     */
    productId?: string | null;
    /**
     * The quantity to return and refund.
     */
    quantity?: number | null;
    /**
     * The reason for the return.  Acceptable values are:   - &quot;`customerDiscretionaryReturn`&quot;  - &quot;`customerInitiatedMerchantCancel`&quot;  - &quot;`deliveredTooLate`&quot;  - &quot;`expiredItem`&quot;  - &quot;`invalidCoupon`&quot;  - &quot;`malformedShippingAddress`&quot;  - &quot;`other`&quot;  - &quot;`productArrivedDamaged`&quot;  - &quot;`productNotAsDescribed`&quot;  - &quot;`qualityNotAsExpected`&quot;  - &quot;`undeliverableShippingAddress`&quot;  - &quot;`unsupportedPoBoxAddress`&quot;  - &quot;`wrongProductShipped`&quot;
     */
    reason?: string | null;
    /**
     * The explanation of the reason.
     */
    reasonText?: string | null;
  }
  export interface Schema$OrdersCustomBatchRequestEntryRefund {
    /**
     * Deprecated. Please use amountPretax and amountTax instead.
     */
    amount?: Schema$Price;
    /**
     * The amount that is refunded. Either amount or amountPretax should be filled.
     */
    amountPretax?: Schema$Price;
    /**
     * Tax amount that corresponds to refund amount in amountPretax. Optional, but if filled, amountPretax must be set. Calculated automatically if not provided.
     */
    amountTax?: Schema$Price;
    /**
     * The reason for the refund.  Acceptable values are:   - &quot;`adjustment`&quot;  - &quot;`courtesyAdjustment`&quot;  - &quot;`customerCanceled`&quot;  - &quot;`customerDiscretionaryReturn`&quot;  - &quot;`deliveredLateByCarrier`&quot;  - &quot;`feeAdjustment`&quot;  - &quot;`lateShipmentCredit`&quot;  - &quot;`noInventory`&quot;  - &quot;`other`&quot;  - &quot;`priceError`&quot;  - &quot;`productArrivedDamaged`&quot;  - &quot;`productNotAsDescribed`&quot;  - &quot;`shippingCostAdjustment`&quot;  - &quot;`taxAdjustment`&quot;  - &quot;`undeliverableShippingAddress`&quot;  - &quot;`wrongProductShipped`&quot;
     */
    reason?: string | null;
    /**
     * The explanation of the reason.
     */
    reasonText?: string | null;
  }
  export interface Schema$OrdersCustomBatchRequestEntryRejectReturnLineItem {
    /**
     * The ID of the line item to return. Either lineItemId or productId is required.
     */
    lineItemId?: string | null;
    /**
     * The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required.
     */
    productId?: string | null;
    /**
     * The quantity to return and refund.
     */
    quantity?: number | null;
    /**
     * The reason for the return.  Acceptable values are:   - &quot;`damagedOrUsed`&quot;  - &quot;`missingComponent`&quot;  - &quot;`notEligible`&quot;  - &quot;`other`&quot;  - &quot;`outOfReturnWindow`&quot;
     */
    reason?: string | null;
    /**
     * The explanation of the reason.
     */
    reasonText?: string | null;
  }
  export interface Schema$OrdersCustomBatchRequestEntryReturnLineItem {
    /**
     * The ID of the line item to return. Either lineItemId or productId is required.
     */
    lineItemId?: string | null;
    /**
     * The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required.
     */
    productId?: string | null;
    /**
     * The quantity to return.
     */
    quantity?: number | null;
    /**
     * The reason for the return.  Acceptable values are:   - &quot;`customerDiscretionaryReturn`&quot;  - &quot;`customerInitiatedMerchantCancel`&quot;  - &quot;`deliveredTooLate`&quot;  - &quot;`expiredItem`&quot;  - &quot;`invalidCoupon`&quot;  - &quot;`malformedShippingAddress`&quot;  - &quot;`other`&quot;  - &quot;`productArrivedDamaged`&quot;  - &quot;`productNotAsDescribed`&quot;  - &quot;`qualityNotAsExpected`&quot;  - &quot;`undeliverableShippingAddress`&quot;  - &quot;`unsupportedPoBoxAddress`&quot;  - &quot;`wrongProductShipped`&quot;
     */
    reason?: string | null;
    /**
     * The explanation of the reason.
     */
    reasonText?: string | null;
  }
  export interface Schema$OrdersCustomBatchRequestEntryReturnRefundLineItem {
    /**
     * The amount that is refunded. If omitted, refundless return is assumed (same as calling returnLineItem method).
     */
    amountPretax?: Schema$Price;
    /**
     * Tax amount that corresponds to refund amount in amountPretax. Optional, but if filled, then amountPretax must be set. Calculated automatically if not provided.
     */
    amountTax?: Schema$Price;
    /**
     * The ID of the line item to return. Either lineItemId or productId is required.
     */
    lineItemId?: string | null;
    /**
     * The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required.
     */
    productId?: string | null;
    /**
     * The quantity to return and refund.
     */
    quantity?: number | null;
    /**
     * The reason for the return.  Acceptable values are:   - &quot;`customerDiscretionaryReturn`&quot;  - &quot;`customerInitiatedMerchantCancel`&quot;  - &quot;`deliveredTooLate`&quot;  - &quot;`expiredItem`&quot;  - &quot;`invalidCoupon`&quot;  - &quot;`malformedShippingAddress`&quot;  - &quot;`other`&quot;  - &quot;`productArrivedDamaged`&quot;  - &quot;`productNotAsDescribed`&quot;  - &quot;`qualityNotAsExpected`&quot;  - &quot;`undeliverableShippingAddress`&quot;  - &quot;`unsupportedPoBoxAddress`&quot;  - &quot;`wrongProductShipped`&quot;
     */
    reason?: string | null;
    /**
     * The explanation of the reason.
     */
    reasonText?: string | null;
  }
  export interface Schema$OrdersCustomBatchRequestEntrySetLineItemMetadata {
    annotations?: Schema$OrderMerchantProvidedAnnotation[];
    /**
     * The ID of the line item to set metadata. Either lineItemId or productId is required.
     */
    lineItemId?: string | null;
    /**
     * The ID of the product to set metadata. This is the REST ID used in the products service. Either lineItemId or productId is required.
     */
    productId?: string | null;
  }
  export interface Schema$OrdersCustomBatchRequestEntryShipLineItems {
    /**
     * Deprecated. Please use shipmentInfo instead. The carrier handling the shipment. See `shipments[].carrier` in the  Orders resource representation for a list of acceptable values.
     */
    carrier?: string | null;
    /**
     * Line items to ship.
     */
    lineItems?: Schema$OrderShipmentLineItemShipment[];
    /**
     * ID of the shipment group. Required for orders that use the orderinvoices service.
     */
    shipmentGroupId?: string | null;
    /**
     * Deprecated. Please use shipmentInfo instead. The ID of the shipment.
     */
    shipmentId?: string | null;
    /**
     * Shipment information. This field is repeated because a single line item can be shipped in several packages (and have several tracking IDs).
     */
    shipmentInfos?: Schema$OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo[];
    /**
     * Deprecated. Please use shipmentInfo instead. The tracking ID for the shipment.
     */
    trackingId?: string | null;
  }
  export interface Schema$OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo {
    /**
     * The carrier handling the shipment. See `shipments[].carrier` in the  Orders resource representation for a list of acceptable values.
     */
    carrier?: string | null;
    /**
     * Required. The ID of the shipment. This is assigned by the merchant and is unique to each shipment.
     */
    shipmentId?: string | null;
    /**
     * The tracking ID for the shipment.
     */
    trackingId?: string | null;
  }
  export interface Schema$OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails {
    /**
     * Updated delivery by date, in ISO 8601 format. If not specified only ship by date is updated.  Provided date should be within 1 year timeframe and can not be a date in the past.
     */
    deliverByDate?: string | null;
    /**
     * The ID of the line item to set metadata. Either lineItemId or productId is required.
     */
    lineItemId?: string | null;
    /**
     * The ID of the product to set metadata. This is the REST ID used in the products service. Either lineItemId or productId is required.
     */
    productId?: string | null;
    /**
     * Updated ship by date, in ISO 8601 format. If not specified only deliver by date is updated.  Provided date should be within 1 year timeframe and can not be a date in the past.
     */
    shipByDate?: string | null;
  }
  export interface Schema$OrdersCustomBatchRequestEntryUpdateShipment {
    /**
     * The carrier handling the shipment. Not updated if missing. See `shipments[].carrier` in the  Orders resource representation for a list of acceptable values.
     */
    carrier?: string | null;
    /**
     * Date on which the shipment has been delivered, in ISO 8601 format. Optional and can be provided only if `status` is `delivered`.
     */
    deliveryDate?: string | null;
    /**
     * The ID of the shipment.
     */
    shipmentId?: string | null;
    /**
     * New status for the shipment. Not updated if missing.  Acceptable values are:   - &quot;`delivered`&quot;  - &quot;`undeliverable`&quot;  - &quot;`readyForPickup`&quot;
     */
    status?: string | null;
    /**
     * The tracking ID for the shipment. Not updated if missing.
     */
    trackingId?: string | null;
  }
  export interface Schema$OrdersCustomBatchResponse {
    /**
     * The result of the execution of the batch requests.
     */
    entries?: Schema$OrdersCustomBatchResponseEntry[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#ordersCustomBatchResponse&quot;.
     */
    kind?: string | null;
  }
  export interface Schema$OrdersCustomBatchResponseEntry {
    /**
     * The ID of the request entry this entry responds to.
     */
    batchId?: number | null;
    /**
     * A list of errors defined if and only if the request failed.
     */
    errors?: Schema$Errors;
    /**
     * The status of the execution. Only defined if   - the request was successful; and  - the method is not `get`, `getByMerchantOrderId`, or one of the test methods.    Acceptable values are:   - &quot;`duplicate`&quot;  - &quot;`executed`&quot;
     */
    executionStatus?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;`content#ordersCustomBatchResponseEntry`&quot;
     */
    kind?: string | null;
    /**
     * The retrieved order. Only defined if the method is `get` and if the request was successful.
     */
    order?: Schema$Order;
  }
  export interface Schema$OrdersGetByMerchantOrderIdResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#ordersGetByMerchantOrderIdResponse&quot;.
     */
    kind?: string | null;
    /**
     * The requested order.
     */
    order?: Schema$Order;
  }
  export interface Schema$OrdersGetTestOrderTemplateResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#ordersGetTestOrderTemplateResponse&quot;.
     */
    kind?: string | null;
    /**
     * The requested test order template.
     */
    template?: Schema$TestOrder;
  }
  export interface Schema$OrderShipment {
    /**
     * The carrier handling the shipment.  For supported carriers, Google includes the carrier name and tracking URL in emails to customers. For select supported carriers, Google also automatically updates the shipment status based on the provided shipment ID. Note: You can also use unsupported carriers, but emails to customers will not include the carrier name or tracking URL, and there will be no automatic order status updates.  Supported carriers for US are:   - &quot;`ups`&quot; (United Parcel Service) automatic status updates  - &quot;`usps`&quot; (United States Postal Service) automatic status updates  - &quot;`fedex`&quot; (FedEx) automatic status updates   - &quot;`dhl`&quot; (DHL eCommerce) automatic status updates (US only)  - &quot;`ontrac`&quot; (OnTrac) automatic status updates   - &quot;`dhl express`&quot; (DHL Express) - &quot;`deliv`&quot; (Deliv)  - &quot;`dynamex`&quot; (TForce)  - &quot;`lasership`&quot; (LaserShip)  - &quot;`mpx`&quot; (Military Parcel Xpress)  - &quot;`uds`&quot; (United Delivery Service)  - &quot;`efw`&quot; (Estes Forwarding Worldwide)  - &quot;`jd logistics`&quot; (JD Logistics)  - &quot;`yunexpress`&quot; (YunExpress)  - &quot;`china post`&quot; (China Post)  - &quot;`china ems`&quot; (China Post Express Mail Service)  - &quot;`singapore post`&quot; (Singapore Post)  - &quot;`pos malaysia`&quot; (Pos Malaysia)  - &quot;`postnl`&quot; (PostNL)  - &quot;`ptt`&quot; (PTT Turkish Post)  - &quot;`eub`&quot; (ePacket)  - &quot;`chukou1`&quot; (Chukou1 Logistics)   Supported carriers for FR are:   - &quot;`la poste`&quot; (La Poste) automatic status updates   - &quot;`colissimo`&quot; (Colissimo by La Poste) automatic status updates  - &quot;`ups`&quot; (United Parcel Service) automatic status updates   - &quot;`chronopost`&quot; (Chronopost by La Poste)  - &quot;`gls`&quot; (General Logistics Systems France)  - &quot;`dpd`&quot; (DPD Group by GeoPost)  - &quot;`bpost`&quot; (Belgian Post Group)  - &quot;`colis prive`&quot; (Colis Privé)  - &quot;`boxtal`&quot; (Boxtal)  - &quot;`geodis`&quot; (GEODIS)  - &quot;`tnt`&quot; (TNT)  - &quot;`db schenker`&quot; (DB Schenker)  - &quot;`aramex`&quot; (Aramex)
     */
    carrier?: string | null;
    /**
     * Date on which the shipment has been created, in ISO 8601 format.
     */
    creationDate?: string | null;
    /**
     * Date on which the shipment has been delivered, in ISO 8601 format. Present only if `status` is `delivered`
     */
    deliveryDate?: string | null;
    /**
     * The ID of the shipment.
     */
    id?: string | null;
    /**
     * The line items that are shipped.
     */
    lineItems?: Schema$OrderShipmentLineItemShipment[];
    /**
     * Delivery details of the shipment if scheduling is needed.
     */
    scheduledDeliveryDetails?: Schema$OrderShipmentScheduledDeliveryDetails;
    /**
     * The status of the shipment.  Acceptable values are:   - &quot;`delivered`&quot;  - &quot;`readyForPickup`&quot;  - &quot;`shipped`&quot;  - &quot;`undeliverable`&quot;
     */
    status?: string | null;
    /**
     * The tracking ID for the shipment.
     */
    trackingId?: string | null;
  }
  export interface Schema$OrderShipmentLineItemShipment {
    /**
     * The ID of the line item that is shipped. This value is assigned by Google when an order is created. Either lineItemId or productId is required.
     */
    lineItemId?: string | null;
    /**
     * The ID of the product to ship. This is the REST ID used in the products service. Either lineItemId or productId is required.
     */
    productId?: string | null;
    /**
     * The quantity that is shipped.
     */
    quantity?: number | null;
  }
  export interface Schema$OrderShipmentScheduledDeliveryDetails {
    /**
     * The phone number of the carrier fulfilling the delivery.
     */
    carrierPhoneNumber?: string | null;
    /**
     * The date a shipment is scheduled for delivery, in ISO 8601 format.
     */
    scheduledDate?: string | null;
  }
  export interface Schema$OrdersInStoreRefundLineItemRequest {
    /**
     * The amount that is refunded. Required.
     */
    amountPretax?: Schema$Price;
    /**
     * Tax amount that correspond to refund amount in amountPretax. Required.
     */
    amountTax?: Schema$Price;
    /**
     * The ID of the line item to return. Either lineItemId or productId is required.
     */
    lineItemId?: string | null;
    /**
     * The ID of the operation. Unique across all operations for a given order.
     */
    operationId?: string | null;
    /**
     * The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required.
     */
    productId?: string | null;
    /**
     * The quantity to return and refund.
     */
    quantity?: number | null;
    /**
     * The reason for the return.  Acceptable values are:   - &quot;`customerDiscretionaryReturn`&quot;  - &quot;`customerInitiatedMerchantCancel`&quot;  - &quot;`deliveredTooLate`&quot;  - &quot;`expiredItem`&quot;  - &quot;`invalidCoupon`&quot;  - &quot;`malformedShippingAddress`&quot;  - &quot;`other`&quot;  - &quot;`productArrivedDamaged`&quot;  - &quot;`productNotAsDescribed`&quot;  - &quot;`qualityNotAsExpected`&quot;  - &quot;`undeliverableShippingAddress`&quot;  - &quot;`unsupportedPoBoxAddress`&quot;  - &quot;`wrongProductShipped`&quot;
     */
    reason?: string | null;
    /**
     * The explanation of the reason.
     */
    reasonText?: string | null;
  }
  export interface Schema$OrdersInStoreRefundLineItemResponse {
    /**
     * The status of the execution.  Acceptable values are:   - &quot;`duplicate`&quot;  - &quot;`executed`&quot;
     */
    executionStatus?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#ordersInStoreRefundLineItemResponse&quot;.
     */
    kind?: string | null;
  }
  export interface Schema$OrdersListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#ordersListResponse&quot;.
     */
    kind?: string | null;
    /**
     * The token for the retrieval of the next page of orders.
     */
    nextPageToken?: string | null;
    resources?: Schema$Order[];
  }
  export interface Schema$OrdersRefundRequest {
    /**
     * Deprecated. Please use amountPretax and amountTax instead.
     */
    amount?: Schema$Price;
    /**
     * The amount that is refunded. Either amount or amountPretax should be filled.
     */
    amountPretax?: Schema$Price;
    /**
     * Tax amount that corresponds to refund amount in amountPretax. Optional, but if filled, amountPretax must be set. Calculated automatically if not provided.
     */
    amountTax?: Schema$Price;
    /**
     * The ID of the operation. Unique across all operations for a given order.
     */
    operationId?: string | null;
    /**
     * The reason for the refund.  Acceptable values are:   - &quot;`adjustment`&quot;  - &quot;`courtesyAdjustment`&quot;  - &quot;`customerCanceled`&quot;  - &quot;`customerDiscretionaryReturn`&quot;  - &quot;`deliveredLateByCarrier`&quot;  - &quot;`feeAdjustment`&quot;  - &quot;`lateShipmentCredit`&quot;  - &quot;`noInventory`&quot;  - &quot;`other`&quot;  - &quot;`priceError`&quot;  - &quot;`productArrivedDamaged`&quot;  - &quot;`productNotAsDescribed`&quot;  - &quot;`shippingCostAdjustment`&quot;  - &quot;`taxAdjustment`&quot;  - &quot;`undeliverableShippingAddress`&quot;  - &quot;`wrongProductShipped`&quot;
     */
    reason?: string | null;
    /**
     * The explanation of the reason.
     */
    reasonText?: string | null;
  }
  export interface Schema$OrdersRefundResponse {
    /**
     * The status of the execution.  Acceptable values are:   - &quot;`duplicate`&quot;  - &quot;`executed`&quot;
     */
    executionStatus?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#ordersRefundResponse&quot;.
     */
    kind?: string | null;
  }
  export interface Schema$OrdersRejectReturnLineItemRequest {
    /**
     * The ID of the line item to return. Either lineItemId or productId is required.
     */
    lineItemId?: string | null;
    /**
     * The ID of the operation. Unique across all operations for a given order.
     */
    operationId?: string | null;
    /**
     * The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required.
     */
    productId?: string | null;
    /**
     * The quantity to return and refund.
     */
    quantity?: number | null;
    /**
     * The reason for the return.  Acceptable values are:   - &quot;`damagedOrUsed`&quot;  - &quot;`missingComponent`&quot;  - &quot;`notEligible`&quot;  - &quot;`other`&quot;  - &quot;`outOfReturnWindow`&quot;
     */
    reason?: string | null;
    /**
     * The explanation of the reason.
     */
    reasonText?: string | null;
  }
  export interface Schema$OrdersRejectReturnLineItemResponse {
    /**
     * The status of the execution.  Acceptable values are:   - &quot;`duplicate`&quot;  - &quot;`executed`&quot;
     */
    executionStatus?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#ordersRejectReturnLineItemResponse&quot;.
     */
    kind?: string | null;
  }
  export interface Schema$OrdersReturnLineItemRequest {
    /**
     * The ID of the line item to return. Either lineItemId or productId is required.
     */
    lineItemId?: string | null;
    /**
     * The ID of the operation. Unique across all operations for a given order.
     */
    operationId?: string | null;
    /**
     * The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required.
     */
    productId?: string | null;
    /**
     * The quantity to return.
     */
    quantity?: number | null;
    /**
     * The reason for the return.  Acceptable values are:   - &quot;`customerDiscretionaryReturn`&quot;  - &quot;`customerInitiatedMerchantCancel`&quot;  - &quot;`deliveredTooLate`&quot;  - &quot;`expiredItem`&quot;  - &quot;`invalidCoupon`&quot;  - &quot;`malformedShippingAddress`&quot;  - &quot;`other`&quot;  - &quot;`productArrivedDamaged`&quot;  - &quot;`productNotAsDescribed`&quot;  - &quot;`qualityNotAsExpected`&quot;  - &quot;`undeliverableShippingAddress`&quot;  - &quot;`unsupportedPoBoxAddress`&quot;  - &quot;`wrongProductShipped`&quot;
     */
    reason?: string | null;
    /**
     * The explanation of the reason.
     */
    reasonText?: string | null;
  }
  export interface Schema$OrdersReturnLineItemResponse {
    /**
     * The status of the execution.  Acceptable values are:   - &quot;`duplicate`&quot;  - &quot;`executed`&quot;
     */
    executionStatus?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#ordersReturnLineItemResponse&quot;.
     */
    kind?: string | null;
  }
  export interface Schema$OrdersReturnRefundLineItemRequest {
    /**
     * The amount that is refunded. If omitted, refundless return is assumed (same as calling returnLineItem method).
     */
    amountPretax?: Schema$Price;
    /**
     * Tax amount that corresponds to refund amount in amountPretax. Optional, but if filled, then amountPretax must be set. Calculated automatically if not provided.
     */
    amountTax?: Schema$Price;
    /**
     * The ID of the line item to return. Either lineItemId or productId is required.
     */
    lineItemId?: string | null;
    /**
     * The ID of the operation. Unique across all operations for a given order.
     */
    operationId?: string | null;
    /**
     * The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required.
     */
    productId?: string | null;
    /**
     * The quantity to return and refund.
     */
    quantity?: number | null;
    /**
     * The reason for the return.  Acceptable values are:   - &quot;`customerDiscretionaryReturn`&quot;  - &quot;`customerInitiatedMerchantCancel`&quot;  - &quot;`deliveredTooLate`&quot;  - &quot;`expiredItem`&quot;  - &quot;`invalidCoupon`&quot;  - &quot;`malformedShippingAddress`&quot;  - &quot;`other`&quot;  - &quot;`productArrivedDamaged`&quot;  - &quot;`productNotAsDescribed`&quot;  - &quot;`qualityNotAsExpected`&quot;  - &quot;`undeliverableShippingAddress`&quot;  - &quot;`unsupportedPoBoxAddress`&quot;  - &quot;`wrongProductShipped`&quot;
     */
    reason?: string | null;
    /**
     * The explanation of the reason.
     */
    reasonText?: string | null;
  }
  export interface Schema$OrdersReturnRefundLineItemResponse {
    /**
     * The status of the execution.  Acceptable values are:   - &quot;`duplicate`&quot;  - &quot;`executed`&quot;
     */
    executionStatus?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#ordersReturnRefundLineItemResponse&quot;.
     */
    kind?: string | null;
  }
  export interface Schema$OrdersSetLineItemMetadataRequest {
    annotations?: Schema$OrderMerchantProvidedAnnotation[];
    /**
     * The ID of the line item to set metadata. Either lineItemId or productId is required.
     */
    lineItemId?: string | null;
    /**
     * The ID of the operation. Unique across all operations for a given order.
     */
    operationId?: string | null;
    /**
     * The ID of the product to set metadata. This is the REST ID used in the products service. Either lineItemId or productId is required.
     */
    productId?: string | null;
  }
  export interface Schema$OrdersSetLineItemMetadataResponse {
    /**
     * The status of the execution.  Acceptable values are:   - &quot;`duplicate`&quot;  - &quot;`executed`&quot;
     */
    executionStatus?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#ordersSetLineItemMetadataResponse&quot;.
     */
    kind?: string | null;
  }
  export interface Schema$OrdersShipLineItemsRequest {
    /**
     * Deprecated. Please use shipmentInfo instead. The carrier handling the shipment. See `shipments[].carrier` in the  Orders resource representation for a list of acceptable values.
     */
    carrier?: string | null;
    /**
     * Line items to ship.
     */
    lineItems?: Schema$OrderShipmentLineItemShipment[];
    /**
     * The ID of the operation. Unique across all operations for a given order.
     */
    operationId?: string | null;
    /**
     * ID of the shipment group. Required for orders that use the orderinvoices service.
     */
    shipmentGroupId?: string | null;
    /**
     * Deprecated. Please use shipmentInfo instead. The ID of the shipment.
     */
    shipmentId?: string | null;
    /**
     * Shipment information. This field is repeated because a single line item can be shipped in several packages (and have several tracking IDs).
     */
    shipmentInfos?: Schema$OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo[];
    /**
     * Deprecated. Please use shipmentInfo instead. The tracking ID for the shipment.
     */
    trackingId?: string | null;
  }
  export interface Schema$OrdersShipLineItemsResponse {
    /**
     * The status of the execution.  Acceptable values are:   - &quot;`duplicate`&quot;  - &quot;`executed`&quot;
     */
    executionStatus?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#ordersShipLineItemsResponse&quot;.
     */
    kind?: string | null;
  }
  export interface Schema$OrdersUpdateLineItemShippingDetailsRequest {
    /**
     * Updated delivery by date, in ISO 8601 format. If not specified only ship by date is updated.  Provided date should be within 1 year timeframe and can not be a date in the past.
     */
    deliverByDate?: string | null;
    /**
     * The ID of the line item to set metadata. Either lineItemId or productId is required.
     */
    lineItemId?: string | null;
    /**
     * The ID of the operation. Unique across all operations for a given order.
     */
    operationId?: string | null;
    /**
     * The ID of the product to set metadata. This is the REST ID used in the products service. Either lineItemId or productId is required.
     */
    productId?: string | null;
    /**
     * Updated ship by date, in ISO 8601 format. If not specified only deliver by date is updated.  Provided date should be within 1 year timeframe and can not be a date in the past.
     */
    shipByDate?: string | null;
  }
  export interface Schema$OrdersUpdateLineItemShippingDetailsResponse {
    /**
     * The status of the execution.  Acceptable values are:   - &quot;`duplicate`&quot;  - &quot;`executed`&quot;
     */
    executionStatus?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#ordersUpdateLineItemShippingDetailsResponse&quot;.
     */
    kind?: string | null;
  }
  export interface Schema$OrdersUpdateMerchantOrderIdRequest {
    /**
     * The merchant order id to be assigned to the order. Must be unique per merchant.
     */
    merchantOrderId?: string | null;
    /**
     * The ID of the operation. Unique across all operations for a given order.
     */
    operationId?: string | null;
  }
  export interface Schema$OrdersUpdateMerchantOrderIdResponse {
    /**
     * The status of the execution.  Acceptable values are:   - &quot;`duplicate`&quot;  - &quot;`executed`&quot;
     */
    executionStatus?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#ordersUpdateMerchantOrderIdResponse&quot;.
     */
    kind?: string | null;
  }
  export interface Schema$OrdersUpdateShipmentRequest {
    /**
     * The carrier handling the shipment. Not updated if missing. See `shipments[].carrier` in the  Orders resource representation for a list of acceptable values.
     */
    carrier?: string | null;
    /**
     * Date on which the shipment has been delivered, in ISO 8601 format. Optional and can be provided only if `status` is `delivered`.
     */
    deliveryDate?: string | null;
    /**
     * The ID of the operation. Unique across all operations for a given order.
     */
    operationId?: string | null;
    /**
     * The ID of the shipment.
     */
    shipmentId?: string | null;
    /**
     * New status for the shipment. Not updated if missing.  Acceptable values are:   - &quot;`delivered`&quot;  - &quot;`undeliverable`&quot;  - &quot;`readyForPickup`&quot;
     */
    status?: string | null;
    /**
     * The tracking ID for the shipment. Not updated if missing.
     */
    trackingId?: string | null;
  }
  export interface Schema$OrdersUpdateShipmentResponse {
    /**
     * The status of the execution.  Acceptable values are:   - &quot;`duplicate`&quot;  - &quot;`executed`&quot;
     */
    executionStatus?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#ordersUpdateShipmentResponse&quot;.
     */
    kind?: string | null;
  }
  export interface Schema$PickupCarrierService {
    /**
     * The name of the pickup carrier (e.g., `&quot;UPS&quot;`). Required.
     */
    carrierName?: string | null;
    /**
     * The name of the pickup service (e.g., `&quot;Access point&quot;`). Required.
     */
    serviceName?: string | null;
  }
  export interface Schema$PickupServicesPickupService {
    /**
     * The name of the carrier (e.g., `&quot;UPS&quot;`). Always present.
     */
    carrierName?: string | null;
    /**
     * The CLDR country code of the carrier (e.g., &quot;US&quot;). Always present.
     */
    country?: string | null;
    /**
     * The name of the pickup service (e.g., `&quot;Access point&quot;`). Always present.
     */
    serviceName?: string | null;
  }
  export interface Schema$PosCustomBatchRequest {
    /**
     * The request entries to be processed in the batch.
     */
    entries?: Schema$PosCustomBatchRequestEntry[];
  }
  export interface Schema$PosCustomBatchRequestEntry {
    /**
     * An entry ID, unique within the batch request.
     */
    batchId?: number | null;
    /**
     * The inventory to submit. Set this only if the method is `inventory`.
     */
    inventory?: Schema$PosInventory;
    /**
     * The ID of the POS data provider.
     */
    merchantId?: string | null;
    /**
     * The method of the batch entry.  Acceptable values are:   - &quot;`delete`&quot;  - &quot;`get`&quot;  - &quot;`insert`&quot;  - &quot;`inventory`&quot;  - &quot;`sale`&quot;
     */
    method?: string | null;
    /**
     * The sale information to submit. Set this only if the method is `sale`.
     */
    sale?: Schema$PosSale;
    /**
     * The store information to submit. Set this only if the method is `insert`.
     */
    store?: Schema$PosStore;
    /**
     * The store code. Set this only if the method is `delete` or `get`.
     */
    storeCode?: string | null;
    /**
     * The ID of the account for which to get/submit data.
     */
    targetMerchantId?: string | null;
  }
  export interface Schema$PosCustomBatchResponse {
    /**
     * The result of the execution of the batch requests.
     */
    entries?: Schema$PosCustomBatchResponseEntry[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#posCustomBatchResponse&quot;.
     */
    kind?: string | null;
  }
  export interface Schema$PosCustomBatchResponseEntry {
    /**
     * The ID of the request entry to which this entry responds.
     */
    batchId?: number | null;
    /**
     * A list of errors defined if, and only if, the request failed.
     */
    errors?: Schema$Errors;
    /**
     * The updated inventory information.
     */
    inventory?: Schema$PosInventory;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;`content#posCustomBatchResponseEntry`&quot;
     */
    kind?: string | null;
    /**
     * The updated sale information.
     */
    sale?: Schema$PosSale;
    /**
     * The retrieved or updated store information.
     */
    store?: Schema$PosStore;
  }
  export interface Schema$PosDataProviders {
    /**
     * Country code.
     */
    country?: string | null;
    /**
     * A list of POS data providers.
     */
    posDataProviders?: Schema$PosDataProvidersPosDataProvider[];
  }
  export interface Schema$PosDataProvidersPosDataProvider {
    /**
     * The display name of Pos data Provider.
     */
    displayName?: string | null;
    /**
     * The full name of this POS data Provider.
     */
    fullName?: string | null;
    /**
     * The ID of the account.
     */
    providerId?: string | null;
  }
  /**
   * The absolute quantity of an item available at the given store.
   */
  export interface Schema$PosInventory {
    /**
     * Required. The two-letter ISO 639-1 language code for the item.
     */
    contentLanguage?: string | null;
    /**
     * Global Trade Item Number.
     */
    gtin?: string | null;
    /**
     * Required. A unique identifier for the item.
     */
    itemId?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;`content#posInventory`&quot;
     */
    kind?: string | null;
    /**
     * Required. The current price of the item.
     */
    price?: Schema$Price;
    /**
     * Required. The available quantity of the item.
     */
    quantity?: string | null;
    /**
     * Required. The identifier of the merchant&#39;s store. Either a `storeCode` inserted via the API or the code of the store in Google My Business.
     */
    storeCode?: string | null;
    /**
     * Required. The CLDR territory code for the item.
     */
    targetCountry?: string | null;
    /**
     * Required. The inventory timestamp, in ISO 8601 format.
     */
    timestamp?: string | null;
  }
  export interface Schema$PosInventoryRequest {
    /**
     * Required. The two-letter ISO 639-1 language code for the item.
     */
    contentLanguage?: string | null;
    /**
     * Global Trade Item Number.
     */
    gtin?: string | null;
    /**
     * Required. A unique identifier for the item.
     */
    itemId?: string | null;
    /**
     * Required. The current price of the item.
     */
    price?: Schema$Price;
    /**
     * Required. The available quantity of the item.
     */
    quantity?: string | null;
    /**
     * Required. The identifier of the merchant&#39;s store. Either a `storeCode` inserted via the API or the code of the store in Google My Business.
     */
    storeCode?: string | null;
    /**
     * Required. The CLDR territory code for the item.
     */
    targetCountry?: string | null;
    /**
     * Required. The inventory timestamp, in ISO 8601 format.
     */
    timestamp?: string | null;
  }
  export interface Schema$PosInventoryResponse {
    /**
     * Required. The two-letter ISO 639-1 language code for the item.
     */
    contentLanguage?: string | null;
    /**
     * Global Trade Item Number.
     */
    gtin?: string | null;
    /**
     * Required. A unique identifier for the item.
     */
    itemId?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#posInventoryResponse&quot;.
     */
    kind?: string | null;
    /**
     * Required. The current price of the item.
     */
    price?: Schema$Price;
    /**
     * Required. The available quantity of the item.
     */
    quantity?: string | null;
    /**
     * Required. The identifier of the merchant&#39;s store. Either a `storeCode` inserted via the API or the code of the store in Google My Business.
     */
    storeCode?: string | null;
    /**
     * Required. The CLDR territory code for the item.
     */
    targetCountry?: string | null;
    /**
     * Required. The inventory timestamp, in ISO 8601 format.
     */
    timestamp?: string | null;
  }
  export interface Schema$PosListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#posListResponse&quot;.
     */
    kind?: string | null;
    resources?: Schema$PosStore[];
  }
  /**
   * The change of the available quantity of an item at the given store.
   */
  export interface Schema$PosSale {
    /**
     * Required. The two-letter ISO 639-1 language code for the item.
     */
    contentLanguage?: string | null;
    /**
     * Global Trade Item Number.
     */
    gtin?: string | null;
    /**
     * Required. A unique identifier for the item.
     */
    itemId?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;`content#posSale`&quot;
     */
    kind?: string | null;
    /**
     * Required. The price of the item.
     */
    price?: Schema$Price;
    /**
     * Required. The relative change of the available quantity. Negative for items returned.
     */
    quantity?: string | null;
    /**
     * A unique ID to group items from the same sale event.
     */
    saleId?: string | null;
    /**
     * Required. The identifier of the merchant&#39;s store. Either a `storeCode` inserted via the API or the code of the store in Google My Business.
     */
    storeCode?: string | null;
    /**
     * Required. The CLDR territory code for the item.
     */
    targetCountry?: string | null;
    /**
     * Required. The inventory timestamp, in ISO 8601 format.
     */
    timestamp?: string | null;
  }
  export interface Schema$PosSaleRequest {
    /**
     * Required. The two-letter ISO 639-1 language code for the item.
     */
    contentLanguage?: string | null;
    /**
     * Global Trade Item Number.
     */
    gtin?: string | null;
    /**
     * Required. A unique identifier for the item.
     */
    itemId?: string | null;
    /**
     * Required. The price of the item.
     */
    price?: Schema$Price;
    /**
     * Required. The relative change of the available quantity. Negative for items returned.
     */
    quantity?: string | null;
    /**
     * A unique ID to group items from the same sale event.
     */
    saleId?: string | null;
    /**
     * Required. The identifier of the merchant&#39;s store. Either a `storeCode` inserted via the API or the code of the store in Google My Business.
     */
    storeCode?: string | null;
    /**
     * Required. The CLDR territory code for the item.
     */
    targetCountry?: string | null;
    /**
     * Required. The inventory timestamp, in ISO 8601 format.
     */
    timestamp?: string | null;
  }
  export interface Schema$PosSaleResponse {
    /**
     * Required. The two-letter ISO 639-1 language code for the item.
     */
    contentLanguage?: string | null;
    /**
     * Global Trade Item Number.
     */
    gtin?: string | null;
    /**
     * Required. A unique identifier for the item.
     */
    itemId?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#posSaleResponse&quot;.
     */
    kind?: string | null;
    /**
     * Required. The price of the item.
     */
    price?: Schema$Price;
    /**
     * Required. The relative change of the available quantity. Negative for items returned.
     */
    quantity?: string | null;
    /**
     * A unique ID to group items from the same sale event.
     */
    saleId?: string | null;
    /**
     * Required. The identifier of the merchant&#39;s store. Either a `storeCode` inserted via the API or the code of the store in Google My Business.
     */
    storeCode?: string | null;
    /**
     * Required. The CLDR territory code for the item.
     */
    targetCountry?: string | null;
    /**
     * Required. The inventory timestamp, in ISO 8601 format.
     */
    timestamp?: string | null;
  }
  /**
   * Store resource.
   */
  export interface Schema$PosStore {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;`content#posStore`&quot;
     */
    kind?: string | null;
    /**
     * Required. The street address of the store.
     */
    storeAddress?: string | null;
    /**
     * Required. A store identifier that is unique for the given merchant.
     */
    storeCode?: string | null;
  }
  export interface Schema$PostalCodeGroup {
    /**
     * The CLDR territory code of the country the postal code group applies to. Required.
     */
    country?: string | null;
    /**
     * The name of the postal code group, referred to in headers. Required.
     */
    name?: string | null;
    /**
     * A range of postal codes. Required.
     */
    postalCodeRanges?: Schema$PostalCodeRange[];
  }
  export interface Schema$PostalCodeRange {
    /**
     * A postal code or a pattern of the form `prefix*` denoting the inclusive lower bound of the range defining the area. Examples values: `&quot;94108&quot;`, `&quot;9410*&quot;`, `&quot;9*&quot;`. Required.
     */
    postalCodeRangeBegin?: string | null;
    /**
     * A postal code or a pattern of the form `prefix*` denoting the inclusive upper bound of the range defining the area. It must have the same length as `postalCodeRangeBegin`: if `postalCodeRangeBegin` is a postal code then `postalCodeRangeEnd` must be a postal code too; if `postalCodeRangeBegin` is a pattern then `postalCodeRangeEnd` must be a pattern with the same prefix length. Optional: if not set, then the area is defined as being all the postal codes matching `postalCodeRangeBegin`.
     */
    postalCodeRangeEnd?: string | null;
  }
  export interface Schema$Price {
    /**
     * The currency of the price.
     */
    currency?: string | null;
    /**
     * The price represented as a number.
     */
    value?: string | null;
  }
  /**
   * Required product attributes are primarily defined by the products data specification. See the  Products Data Specification Help Center article for information.  Some attributes are country-specific, so make sure you select the appropriate country in the drop-down selector at the top of the page.    Product data. After inserting, updating, or deleting a product, it may take several minutes before changes take effect.
   */
  export interface Schema$Product {
    /**
     * Additional URLs of images of the item.
     */
    additionalImageLinks?: string[] | null;
    /**
     * Additional categories of the item (formatted as in products data specification).
     */
    additionalProductTypes?: string[] | null;
    /**
     * Set to true if the item is targeted towards adults.
     */
    adult?: boolean | null;
    /**
     * Used to group items in an arbitrary way. Only for CPA%, discouraged otherwise.
     */
    adwordsGrouping?: string | null;
    /**
     * Similar to adwords_grouping, but only works on CPC.
     */
    adwordsLabels?: string[] | null;
    /**
     * Allows advertisers to override the item URL when the product is shown within the context of Product Ads.
     */
    adwordsRedirect?: string | null;
    /**
     * Target age group of the item.  Acceptable values are:   - &quot;`adult`&quot;  - &quot;`infant`&quot;  - &quot;`kids`&quot;  - &quot;`newborn`&quot;  - &quot;`toddler`&quot;  - &quot;`youngAdult`&quot;
     */
    ageGroup?: string | null;
    /**
     * Deprecated. Do not use.
     */
    aspects?: Schema$ProductAspect[];
    /**
     * Availability status of the item.  Acceptable values are:   - &quot;`in stock`&quot;  - &quot;`out of stock`&quot;  - &quot;`preorder`&quot;
     */
    availability?: string | null;
    /**
     * The day a pre-ordered product becomes available for delivery, in ISO 8601 format.
     */
    availabilityDate?: string | null;
    /**
     * Brand of the item.
     */
    brand?: string | null;
    /**
     * Link to the canonical version of the landing page.
     */
    canonicalLink?: string | null;
    /**
     * Required. The item&#39;s channel (online or local).  Acceptable values are:   - &quot;`local`&quot;  - &quot;`online`&quot;
     */
    channel?: string | null;
    /**
     * Color of the item.
     */
    color?: string | null;
    /**
     * Condition or state of the item.  Acceptable values are:   - &quot;`local`&quot;  - &quot;`online`&quot;
     */
    condition?: string | null;
    /**
     * Required. The two-letter ISO 639-1 language code for the item.
     */
    contentLanguage?: string | null;
    /**
     * Cost of goods sold. Used for gross profit reporting.
     */
    costOfGoodsSold?: Schema$Price;
    /**
     * A list of custom (merchant-provided) attributes. It can also be used for submitting any attribute of the feed specification in its generic form (e.g., `{ &quot;name&quot;: &quot;size type&quot;, &quot;value&quot;: &quot;regular&quot; }`). This is useful for submitting attributes not explicitly exposed by the API, such as additional attributes used for Shopping Actions.
     */
    customAttributes?: Schema$CustomAttribute[];
    /**
     * A list of custom (merchant-provided) custom attribute groups.
     */
    customGroups?: Schema$CustomGroup[];
    /**
     * Custom label 0 for custom grouping of items in a Shopping campaign.
     */
    customLabel0?: string | null;
    /**
     * Custom label 1 for custom grouping of items in a Shopping campaign.
     */
    customLabel1?: string | null;
    /**
     * Custom label 2 for custom grouping of items in a Shopping campaign.
     */
    customLabel2?: string | null;
    /**
     * Custom label 3 for custom grouping of items in a Shopping campaign.
     */
    customLabel3?: string | null;
    /**
     * Custom label 4 for custom grouping of items in a Shopping campaign.
     */
    customLabel4?: string | null;
    /**
     * Description of the item.
     */
    description?: string | null;
    /**
     * Specifies the intended destinations for the product.
     */
    destinations?: Schema$ProductDestination[];
    /**
     * An identifier for an item for dynamic remarketing campaigns.
     */
    displayAdsId?: string | null;
    /**
     * URL directly to your item&#39;s landing page for dynamic remarketing campaigns.
     */
    displayAdsLink?: string | null;
    /**
     * Advertiser-specified recommendations.
     */
    displayAdsSimilarIds?: string[] | null;
    /**
     * Title of an item for dynamic remarketing campaigns.
     */
    displayAdsTitle?: string | null;
    /**
     * Offer margin for dynamic remarketing campaigns.
     */
    displayAdsValue?: number | null;
    /**
     * The energy efficiency class as defined in EU directive 2010/30/EU.  Acceptable values are:   - &quot;`A`&quot;  - &quot;`A+`&quot;  - &quot;`A++`&quot;  - &quot;`A+++`&quot;  - &quot;`B`&quot;  - &quot;`C`&quot;  - &quot;`D`&quot;  - &quot;`E`&quot;  - &quot;`F`&quot;  - &quot;`G`&quot;
     */
    energyEfficiencyClass?: string | null;
    /**
     * Date on which the item should expire, as specified upon insertion, in ISO 8601 format. The actual expiration date in Google Shopping is exposed in `productstatuses` as `googleExpirationDate` and might be earlier if `expirationDate` is too far in the future.
     */
    expirationDate?: string | null;
    /**
     * Target gender of the item.  Acceptable values are:   - &quot;`female`&quot;  - &quot;`male`&quot;  - &quot;`unisex`&quot;
     */
    gender?: string | null;
    /**
     * Google&#39;s category of the item (see Google product taxonomy).
     */
    googleProductCategory?: string | null;
    /**
     * Global Trade Item Number (GTIN) of the item.
     */
    gtin?: string | null;
    /**
     * The REST ID of the product. Content API methods that operate on products take this as their `productId` parameter. The REST ID for a product is of the form channel:contentLanguage:targetCountry: offerId.
     */
    id?: string | null;
    /**
     * False when the item does not have unique product identifiers appropriate to its category, such as GTIN, MPN, and brand. Required according to the Unique Product Identifier Rules for all target countries except for Canada.
     */
    identifierExists?: boolean | null;
    /**
     * URL of an image of the item.
     */
    imageLink?: string | null;
    /**
     * Number and amount of installments to pay for an item.
     */
    installment?: Schema$Installment;
    /**
     * Whether the item is a merchant-defined bundle. A bundle is a custom grouping of different products sold by a merchant for a single price.
     */
    isBundle?: boolean | null;
    /**
     * Shared identifier for all variants of the same product.
     */
    itemGroupId?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;`content#product`&quot;
     */
    kind?: string | null;
    /**
     * URL directly linking to your item&#39;s page on your website.
     */
    link?: string | null;
    /**
     * Loyalty points that users receive after purchasing the item. Japan only.
     */
    loyaltyPoints?: Schema$LoyaltyPoints;
    /**
     * The material of which the item is made.
     */
    material?: string | null;
    /**
     * The energy efficiency class as defined in EU directive 2010/30/EU.  Acceptable values are:   - &quot;`A`&quot;  - &quot;`A+`&quot;  - &quot;`A++`&quot;  - &quot;`A+++`&quot;  - &quot;`B`&quot;  - &quot;`C`&quot;  - &quot;`D`&quot;  - &quot;`E`&quot;  - &quot;`F`&quot;  - &quot;`G`&quot;
     */
    maxEnergyEfficiencyClass?: string | null;
    /**
     * Maximal product handling time (in business days).
     */
    maxHandlingTime?: string | null;
    /**
     * The energy efficiency class as defined in EU directive 2010/30/EU.  Acceptable values are:   - &quot;`A`&quot;  - &quot;`A+`&quot;  - &quot;`A++`&quot;  - &quot;`A+++`&quot;  - &quot;`B`&quot;  - &quot;`C`&quot;  - &quot;`D`&quot;  - &quot;`E`&quot;  - &quot;`F`&quot;  - &quot;`G`&quot;
     */
    minEnergyEfficiencyClass?: string | null;
    /**
     * Minimal product handling time (in business days).
     */
    minHandlingTime?: string | null;
    /**
     * Link to a mobile-optimized version of the landing page.
     */
    mobileLink?: string | null;
    /**
     * Manufacturer Part Number (MPN) of the item.
     */
    mpn?: string | null;
    /**
     * The number of identical products in a merchant-defined multipack.
     */
    multipack?: string | null;
    /**
     * Required. A unique identifier for the item. Leading and trailing whitespaces are stripped and multiple whitespaces are replaced by a single whitespace upon submission. Only valid unicode characters are accepted. See the products feed specification for details. Note: Content API methods that operate on products take the REST ID of the product, not this identifier.
     */
    offerId?: string | null;
    /**
     * Deprecated.
     */
    onlineOnly?: boolean | null;
    /**
     * The item&#39;s pattern (e.g. polka dots).
     */
    pattern?: string | null;
    /**
     * Price of the item.
     */
    price?: Schema$Price;
    /**
     * Your category of the item (formatted as in products data specification).
     */
    productType?: string | null;
    /**
     * The unique ID of a promotion.
     */
    promotionIds?: string[] | null;
    /**
     * Advertised sale price of the item.
     */
    salePrice?: Schema$Price;
    /**
     * Date range during which the item is on sale (see products data specification).
     */
    salePriceEffectiveDate?: string | null;
    /**
     * The quantity of the product that is available for selling on Google. Supported only for online products.
     */
    sellOnGoogleQuantity?: string | null;
    /**
     * Shipping rules.
     */
    shipping?: Schema$ProductShipping[];
    /**
     * Height of the item for shipping.
     */
    shippingHeight?: Schema$ProductShippingDimension;
    /**
     * The shipping label of the product, used to group product in account-level shipping rules.
     */
    shippingLabel?: string | null;
    /**
     * Length of the item for shipping.
     */
    shippingLength?: Schema$ProductShippingDimension;
    /**
     * Weight of the item for shipping.
     */
    shippingWeight?: Schema$ProductShippingWeight;
    /**
     * Width of the item for shipping.
     */
    shippingWidth?: Schema$ProductShippingDimension;
    /**
     * Size of the item. Only one value is allowed. For variants with different sizes, insert a separate product for each size with the same `itemGroupId` value (see size definition).
     */
    sizes?: string[] | null;
    /**
     * System in which the size is specified. Recommended for apparel items.  Acceptable values are:   - &quot;`AU`&quot;  - &quot;`BR`&quot;  - &quot;`CN`&quot;  - &quot;`DE`&quot;  - &quot;`EU`&quot;  - &quot;`FR`&quot;  - &quot;`IT`&quot;  - &quot;`JP`&quot;  - &quot;`MEX`&quot;  - &quot;`UK`&quot;  - &quot;`US`&quot;
     */
    sizeSystem?: string | null;
    /**
     * The cut of the item. Recommended for apparel items.  Acceptable values are:   - &quot;`big and tall`&quot;  - &quot;`maternity`&quot;  - &quot;`oversize`&quot;  - &quot;`petite`&quot;  - &quot;`plus`&quot;  - &quot;`regular`&quot;
     */
    sizeType?: string | null;
    /**
     * The source of the offer, i.e., how the offer was created.  Acceptable values are:   - &quot;`api`&quot;  - &quot;`crawl`&quot;  - &quot;`feed`&quot;
     */
    source?: string | null;
    /**
     * Required. The CLDR territory code for the item.
     */
    targetCountry?: string | null;
    /**
     * Tax information.
     */
    taxes?: Schema$ProductTax[];
    /**
     * Title of the item.
     */
    title?: string | null;
    /**
     * The preference of the denominator of the unit price.
     */
    unitPricingBaseMeasure?: Schema$ProductUnitPricingBaseMeasure;
    /**
     * The measure and dimension of an item.
     */
    unitPricingMeasure?: Schema$ProductUnitPricingMeasure;
    /**
     * Deprecated. The read-only list of intended destinations which passed validation.
     */
    validatedDestinations?: string[] | null;
    /**
     * Read-only warnings.
     */
    warnings?: Schema$Error[];
  }
  export interface Schema$ProductAmount {
    /**
     * The pre-tax or post-tax price depending on the location of the order.
     */
    priceAmount?: Schema$Price;
    /**
     * Remitted tax value.
     */
    remittedTaxAmount?: Schema$Price;
    /**
     * Tax value.
     */
    taxAmount?: Schema$Price;
  }
  export interface Schema$ProductAspect {
    /**
     * Deprecated.
     */
    aspectName?: string | null;
    /**
     * Deprecated.
     */
    destinationName?: string | null;
    /**
     * Deprecated.
     */
    intention?: string | null;
  }
  export interface Schema$ProductDestination {
    /**
     * The name of the destination.
     */
    destinationName?: string | null;
    /**
     * Whether the destination is required, excluded or should be validated.  Acceptable values are:   - &quot;`default`&quot;  - &quot;`excluded`&quot;  - &quot;`optional`&quot;  - &quot;`required`&quot;
     */
    intention?: string | null;
  }
  export interface Schema$ProductsCustomBatchRequest {
    /**
     * The request entries to be processed in the batch.
     */
    entries?: Schema$ProductsCustomBatchRequestEntry[];
  }
  /**
   * A batch entry encoding a single non-batch products request.
   */
  export interface Schema$ProductsCustomBatchRequestEntry {
    /**
     * An entry ID, unique within the batch request.
     */
    batchId?: number | null;
    /**
     * The ID of the managing account.
     */
    merchantId?: string | null;
    /**
     * The method of the batch entry.  Acceptable values are:   - &quot;`delete`&quot;  - &quot;`get`&quot;  - &quot;`insert`&quot;
     */
    method?: string | null;
    /**
     * The product to insert. Only required if the method is `insert`.
     */
    product?: Schema$Product;
    /**
     * The ID of the product to get or delete. Only defined if the method is `get` or `delete`.
     */
    productId?: string | null;
  }
  export interface Schema$ProductsCustomBatchResponse {
    /**
     * The result of the execution of the batch requests.
     */
    entries?: Schema$ProductsCustomBatchResponseEntry[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#productsCustomBatchResponse&quot;.
     */
    kind?: string | null;
  }
  /**
   * A batch entry encoding a single non-batch products response.
   */
  export interface Schema$ProductsCustomBatchResponseEntry {
    /**
     * The ID of the request entry this entry responds to.
     */
    batchId?: number | null;
    /**
     * A list of errors defined if and only if the request failed.
     */
    errors?: Schema$Errors;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;`content#productsCustomBatchResponseEntry`&quot;
     */
    kind?: string | null;
    /**
     * The inserted product. Only defined if the method is `insert` and if the request was successful.
     */
    product?: Schema$Product;
  }
  export interface Schema$ProductShipping {
    /**
     * The CLDR territory code of the country to which an item will ship.
     */
    country?: string | null;
    /**
     * The location where the shipping is applicable, represented by a location group name.
     */
    locationGroupName?: string | null;
    /**
     * The numeric ID of a location that the shipping rate applies to as defined in the AdWords API.
     */
    locationId?: string | null;
    /**
     * The postal code range that the shipping rate applies to, represented by a postal code, a postal code prefix followed by a * wildcard, a range between two postal codes or two postal code prefixes of equal length.
     */
    postalCode?: string | null;
    /**
     * Fixed shipping price, represented as a number.
     */
    price?: Schema$Price;
    /**
     * The geographic region to which a shipping rate applies.
     */
    region?: string | null;
    /**
     * A free-form description of the service class or delivery speed.
     */
    service?: string | null;
  }
  export interface Schema$ProductShippingDimension {
    /**
     * The unit of value.
     */
    unit?: string | null;
    /**
     * The dimension of the product used to calculate the shipping cost of the item.
     */
    value?: number | null;
  }
  export interface Schema$ProductShippingWeight {
    /**
     * The unit of value.
     */
    unit?: string | null;
    /**
     * The weight of the product used to calculate the shipping cost of the item.
     */
    value?: number | null;
  }
  export interface Schema$ProductsListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#productsListResponse&quot;.
     */
    kind?: string | null;
    /**
     * The token for the retrieval of the next page of products.
     */
    nextPageToken?: string | null;
    resources?: Schema$Product[];
  }
  /**
   * The status of a product, i.e., information about a product computed asynchronously.
   */
  export interface Schema$ProductStatus {
    /**
     * Date on which the item has been created, in ISO 8601 format.
     */
    creationDate?: string | null;
    /**
     * DEPRECATED - never populated
     */
    dataQualityIssues?: Schema$ProductStatusDataQualityIssue[];
    /**
     * The intended destinations for the product.
     */
    destinationStatuses?: Schema$ProductStatusDestinationStatus[];
    /**
     * Date on which the item expires in Google Shopping, in ISO 8601 format.
     */
    googleExpirationDate?: string | null;
    /**
     * A list of all issues associated with the product.
     */
    itemLevelIssues?: Schema$ProductStatusItemLevelIssue[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;`content#productStatus`&quot;
     */
    kind?: string | null;
    /**
     * Date on which the item has been last updated, in ISO 8601 format.
     */
    lastUpdateDate?: string | null;
    /**
     * The link to the product.
     */
    link?: string | null;
    /**
     * Product data after applying all the join inputs.
     */
    product?: Schema$Product;
    /**
     * The ID of the product for which status is reported.
     */
    productId?: string | null;
    /**
     * The title of the product.
     */
    title?: string | null;
  }
  export interface Schema$ProductStatusDataQualityIssue {
    destination?: string | null;
    detail?: string | null;
    fetchStatus?: string | null;
    id?: string | null;
    location?: string | null;
    severity?: string | null;
    timestamp?: string | null;
    valueOnLandingPage?: string | null;
    valueProvided?: string | null;
  }
  export interface Schema$ProductStatusDestinationStatus {
    /**
     * Whether the approval status might change due to further processing.
     */
    approvalPending?: boolean | null;
    /**
     * The destination&#39;s approval status.  Acceptable values are:   - &quot;`approved`&quot;  - &quot;`disapproved`&quot;
     */
    approvalStatus?: string | null;
    /**
     * The name of the destination
     */
    destination?: string | null;
    /**
     * Provided for backward compatibility only. Always set to &quot;required&quot;.  Acceptable values are:   - &quot;`default`&quot;  - &quot;`excluded`&quot;  - &quot;`optional`&quot;  - &quot;`required`&quot;
     */
    intention?: string | null;
  }
  export interface Schema$ProductstatusesCustomBatchRequest {
    /**
     * The request entries to be processed in the batch.
     */
    entries?: Schema$ProductstatusesCustomBatchRequestEntry[];
  }
  /**
   * A batch entry encoding a single non-batch productstatuses request.
   */
  export interface Schema$ProductstatusesCustomBatchRequestEntry {
    /**
     * An entry ID, unique within the batch request.
     */
    batchId?: number | null;
    /**
     * If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
     */
    destinations?: string[] | null;
    includeAttributes?: boolean | null;
    /**
     * The ID of the managing account.
     */
    merchantId?: string | null;
    /**
     * The method of the batch entry.  Acceptable values are:   - &quot;`get`&quot;
     */
    method?: string | null;
    /**
     * The ID of the product whose status to get.
     */
    productId?: string | null;
  }
  export interface Schema$ProductstatusesCustomBatchResponse {
    /**
     * The result of the execution of the batch requests.
     */
    entries?: Schema$ProductstatusesCustomBatchResponseEntry[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#productstatusesCustomBatchResponse&quot;.
     */
    kind?: string | null;
  }
  /**
   * A batch entry encoding a single non-batch productstatuses response.
   */
  export interface Schema$ProductstatusesCustomBatchResponseEntry {
    /**
     * The ID of the request entry this entry responds to.
     */
    batchId?: number | null;
    /**
     * A list of errors, if the request failed.
     */
    errors?: Schema$Errors;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;`content#productstatusesCustomBatchResponseEntry`&quot;
     */
    kind?: string | null;
    /**
     * The requested product status. Only defined if the request was successful.
     */
    productStatus?: Schema$ProductStatus;
  }
  export interface Schema$ProductstatusesListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#productstatusesListResponse&quot;.
     */
    kind?: string | null;
    /**
     * The token for the retrieval of the next page of products statuses.
     */
    nextPageToken?: string | null;
    resources?: Schema$ProductStatus[];
  }
  export interface Schema$ProductStatusItemLevelIssue {
    /**
     * The attribute&#39;s name, if the issue is caused by a single attribute.
     */
    attributeName?: string | null;
    /**
     * The error code of the issue.
     */
    code?: string | null;
    /**
     * A short issue description in English.
     */
    description?: string | null;
    /**
     * The destination the issue applies to.
     */
    destination?: string | null;
    /**
     * A detailed issue description in English.
     */
    detail?: string | null;
    /**
     * The URL of a web page to help with resolving this issue.
     */
    documentation?: string | null;
    /**
     * Whether the issue can be resolved by the merchant.
     */
    resolution?: string | null;
    /**
     * How this issue affects serving of the offer.
     */
    servability?: string | null;
  }
  export interface Schema$ProductTax {
    /**
     * The country within which the item is taxed, specified as a CLDR territory code.
     */
    country?: string | null;
    /**
     * The numeric ID of a location that the tax rate applies to as defined in the AdWords API.
     */
    locationId?: string | null;
    /**
     * The postal code range that the tax rate applies to, represented by a ZIP code, a ZIP code prefix using * wildcard, a range between two ZIP codes or two ZIP code prefixes of equal length. Examples: 94114, 94*, 94002-95460, 94*-95*.
     */
    postalCode?: string | null;
    /**
     * The percentage of tax rate that applies to the item price.
     */
    rate?: number | null;
    /**
     * The geographic region to which the tax rate applies.
     */
    region?: string | null;
    /**
     * Set to true if tax is charged on shipping.
     */
    taxShip?: boolean | null;
  }
  export interface Schema$ProductUnitPricingBaseMeasure {
    /**
     * The unit of the denominator.
     */
    unit?: string | null;
    /**
     * The denominator of the unit price.
     */
    value?: string | null;
  }
  export interface Schema$ProductUnitPricingMeasure {
    /**
     * The unit of the measure.
     */
    unit?: string | null;
    /**
     * The measure of an item.
     */
    value?: number | null;
  }
  export interface Schema$Promotion {
    /**
     * [required] Amount of the promotion. The values here are the promotion applied to the unit price pretax and to the total of the tax amounts.
     */
    promotionAmount?: Schema$Amount;
    /**
     * [required] ID of the promotion.
     */
    promotionId?: string | null;
  }
  export interface Schema$RateGroup {
    /**
     * A list of shipping labels defining the products to which this rate group applies to. This is a disjunction: only one of the labels has to match for the rate group to apply. May only be empty for the last rate group of a service. Required.
     */
    applicableShippingLabels?: string[] | null;
    /**
     * A list of carrier rates that can be referred to by `mainTable` or `singleValue`.
     */
    carrierRates?: Schema$CarrierRate[];
    /**
     * A table defining the rate group, when `singleValue` is not expressive enough. Can only be set if `singleValue` is not set.
     */
    mainTable?: Schema$Table;
    /**
     * Name of the rate group. Optional. If set has to be unique within shipping service.
     */
    name?: string | null;
    /**
     * The value of the rate group (e.g. flat rate $10). Can only be set if `mainTable` and `subtables` are not set.
     */
    singleValue?: Schema$Value;
    /**
     * A list of subtables referred to by `mainTable`. Can only be set if `mainTable` is set.
     */
    subtables?: Schema$Table[];
  }
  export interface Schema$RefundReason {
    /**
     * Description of the reason.
     */
    description?: string | null;
    /**
     * Code of the refund reason.  Acceptable values are:   - &quot;`adjustment`&quot;  - &quot;`autoPostInternal`&quot;  - &quot;`autoPostInvalidBillingAddress`&quot;  - &quot;`autoPostNoInventory`&quot;  - &quot;`autoPostPriceError`&quot;  - &quot;`autoPostUndeliverableShippingAddress`&quot;  - &quot;`couponAbuse`&quot;  - &quot;`courtesyAdjustment`&quot;  - &quot;`customerCanceled`&quot;  - &quot;`customerDiscretionaryReturn`&quot;  - &quot;`customerInitiatedMerchantCancel`&quot;  - &quot;`customerSupportRequested`&quot;  - &quot;`deliveredLateByCarrier`&quot;  - &quot;`deliveredTooLate`&quot;  - &quot;`expiredItem`&quot;  - &quot;`failToPushOrderGoogleError`&quot;  - &quot;`failToPushOrderMerchantError`&quot;  - &quot;`failToPushOrderMerchantFulfillmentError`&quot;  - &quot;`failToPushOrderToMerchant`&quot;  - &quot;`failToPushOrderToMerchantOutOfStock`&quot;  - &quot;`feeAdjustment`&quot;  - &quot;`invalidCoupon`&quot;  - &quot;`lateShipmentCredit`&quot;  - &quot;`malformedShippingAddress`&quot;  - &quot;`merchantDidNotShipOnTime`&quot;  - &quot;`noInventory`&quot;  - &quot;`orderTimeout`&quot;  - &quot;`other`&quot;  - &quot;`paymentAbuse`&quot;  - &quot;`paymentDeclined`&quot;  - &quot;`priceAdjustment`&quot;  - &quot;`priceError`&quot;  - &quot;`productArrivedDamaged`&quot;  - &quot;`productNotAsDescribed`&quot;  - &quot;`promoReallocation`&quot;  - &quot;`qualityNotAsExpected`&quot;  - &quot;`returnRefundAbuse`&quot;  - &quot;`shippingCostAdjustment`&quot;  - &quot;`shippingPriceError`&quot;  - &quot;`taxAdjustment`&quot;  - &quot;`taxError`&quot;  - &quot;`undeliverableShippingAddress`&quot;  - &quot;`unsupportedPoBoxAddress`&quot;  - &quot;`wrongProductShipped`&quot;
     */
    reasonCode?: string | null;
  }
  export interface Schema$ReturnShipment {
    /**
     * The date of creation of the shipment, in ISO 8601 format.
     */
    creationDate?: string | null;
    /**
     * The date of delivery of the shipment, in ISO 8601 format.
     */
    deliveryDate?: string | null;
    /**
     * Type of the return method.  Acceptable values are:   - &quot;`byMail`&quot;  - &quot;`contactCustomerSupport`&quot;  - &quot;`returnless`&quot;
     */
    returnMethodType?: string | null;
    /**
     * Shipment ID generated by Google.
     */
    shipmentId?: string | null;
    /**
     * Tracking information of the shipment. One return shipment might be handled by several shipping carriers sequentially.
     */
    shipmentTrackingInfos?: Schema$ShipmentTrackingInfo[];
    /**
     * The date of shipping of the shipment, in ISO 8601 format.
     */
    shippingDate?: string | null;
    /**
     * State of the shipment.  Acceptable values are:   - &quot;`completed`&quot;  - &quot;`new`&quot;  - &quot;`shipped`&quot;  - &quot;`undeliverable`&quot;  - &quot;`pending`&quot;
     */
    state?: string | null;
  }
  export interface Schema$Row {
    /**
     * The list of cells that constitute the row. Must have the same length as `columnHeaders` for two-dimensional tables, a length of 1 for one-dimensional tables. Required.
     */
    cells?: Schema$Value[];
  }
  export interface Schema$Service {
    /**
     * A boolean exposing the active status of the shipping service. Required.
     */
    active?: boolean | null;
    /**
     * The CLDR code of the currency to which this service applies. Must match that of the prices in rate groups.
     */
    currency?: string | null;
    /**
     * The CLDR territory code of the country to which the service applies. Required.
     */
    deliveryCountry?: string | null;
    /**
     * Time spent in various aspects from order to the delivery of the product. Required.
     */
    deliveryTime?: Schema$DeliveryTime;
    /**
     * Eligibility for this service.  Acceptable values are:   - &quot;`All scenarios`&quot;  - &quot;`All scenarios except Shopping Actions`&quot;  - &quot;`Shopping Actions`&quot;
     */
    eligibility?: string | null;
    /**
     * Minimum order value for this service. If set, indicates that customers will have to spend at least this amount. All prices within a service must have the same currency. Cannot be set together with minimum_order_value_table.
     */
    minimumOrderValue?: Schema$Price;
    /**
     * Table of per store minimum order values for the pickup fulfillment type. Cannot be set together with minimum_order_value.
     */
    minimumOrderValueTable?: Schema$MinimumOrderValueTable;
    /**
     * Free-form name of the service. Must be unique within target account. Required.
     */
    name?: string | null;
    /**
     * The carrier-service pair delivering items to collection points. The list of supported pickup services can be retrieved via the `getSupportedPickupServices` method. Required if and only if the service delivery type is `pickup`.
     */
    pickupService?: Schema$PickupCarrierService;
    /**
     * Shipping rate group definitions. Only the last one is allowed to have an empty `applicableShippingLabels`, which means &quot;everything else&quot;. The other `applicableShippingLabels` must not overlap.
     */
    rateGroups?: Schema$RateGroup[];
    /**
     * Type of locations this service ships orders to.  Acceptable values are:   - &quot;`delivery`&quot;  - &quot;`pickup`&quot;
     */
    shipmentType?: string | null;
  }
  export interface Schema$ShipmentInvoice {
    /**
     * [required] Invoice summary.
     */
    invoiceSummary?: Schema$InvoiceSummary;
    /**
     * [required] Invoice details per line item.
     */
    lineItemInvoices?: Schema$ShipmentInvoiceLineItemInvoice[];
    /**
     * [required] ID of the shipment group. It is assigned by the merchant in the `shipLineItems` method and is used to group multiple line items that have the same kind of shipping charges.
     */
    shipmentGroupId?: string | null;
  }
  export interface Schema$ShipmentInvoiceLineItemInvoice {
    /**
     * ID of the line item. Either lineItemId or productId must be set.
     */
    lineItemId?: string | null;
    /**
     * ID of the product. This is the REST ID used in the products service. Either lineItemId or productId must be set.
     */
    productId?: string | null;
    /**
     * [required] The shipment unit ID is assigned by the merchant and defines individual quantities within a line item. The same ID can be assigned to units that are the same while units that differ must be assigned a different ID (for example: free or promotional units).
     */
    shipmentUnitIds?: string[] | null;
    /**
     * [required] Invoice details for a single unit.
     */
    unitInvoice?: Schema$UnitInvoice;
  }
  export interface Schema$ShipmentTrackingInfo {
    /**
     * The shipping carrier that handles the package.  Acceptable values are:   - &quot;`boxtal`&quot;  - &quot;`bpost`&quot;  - &quot;`chronopost`&quot;  - &quot;`colisPrive`&quot;  - &quot;`colissimo`&quot;  - &quot;`cxt`&quot;  - &quot;`deliv`&quot;  - &quot;`dhl`&quot;  - &quot;`dpd`&quot;  - &quot;`dynamex`&quot;  - &quot;`eCourier`&quot;  - &quot;`easypost`&quot;  - &quot;`efw`&quot;  - &quot;`fedex`&quot;  - &quot;`fedexSmartpost`&quot;  - &quot;`geodis`&quot;  - &quot;`gls`&quot;  - &quot;`googleCourier`&quot;  - &quot;`gsx`&quot;  - &quot;`jdLogistics`&quot;  - &quot;`laPoste`&quot;  - &quot;`lasership`&quot;  - &quot;`manual`&quot;  - &quot;`mpx`&quot;  - &quot;`onTrac`&quot;  - &quot;`other`&quot;  - &quot;`tnt`&quot;  - &quot;`uds`&quot;  - &quot;`ups`&quot;  - &quot;`usps`&quot;
     */
    carrier?: string | null;
    /**
     * The tracking number for the package.
     */
    trackingNumber?: string | null;
  }
  /**
   * The merchant account&#39;s shipping settings. All methods except getsupportedcarriers and getsupportedholidays require the admin role.
   */
  export interface Schema$ShippingSettings {
    /**
     * The ID of the account to which these account shipping settings belong. Ignored upon update, always present in get request responses.
     */
    accountId?: string | null;
    /**
     * A list of postal code groups that can be referred to in `services`. Optional.
     */
    postalCodeGroups?: Schema$PostalCodeGroup[];
    /**
     * The target account&#39;s list of services. Optional.
     */
    services?: Schema$Service[];
  }
  export interface Schema$ShippingsettingsCustomBatchRequest {
    /**
     * The request entries to be processed in the batch.
     */
    entries?: Schema$ShippingsettingsCustomBatchRequestEntry[];
  }
  /**
   * A batch entry encoding a single non-batch shippingsettings request.
   */
  export interface Schema$ShippingsettingsCustomBatchRequestEntry {
    /**
     * The ID of the account for which to get/update account shipping settings.
     */
    accountId?: string | null;
    /**
     * An entry ID, unique within the batch request.
     */
    batchId?: number | null;
    /**
     * The ID of the managing account.
     */
    merchantId?: string | null;
    /**
     * The method of the batch entry.  Acceptable values are:   - &quot;`get`&quot;  - &quot;`update`&quot;
     */
    method?: string | null;
    /**
     * The account shipping settings to update. Only defined if the method is `update`.
     */
    shippingSettings?: Schema$ShippingSettings;
  }
  export interface Schema$ShippingsettingsCustomBatchResponse {
    /**
     * The result of the execution of the batch requests.
     */
    entries?: Schema$ShippingsettingsCustomBatchResponseEntry[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#shippingsettingsCustomBatchResponse&quot;.
     */
    kind?: string | null;
  }
  /**
   * A batch entry encoding a single non-batch shipping settings response.
   */
  export interface Schema$ShippingsettingsCustomBatchResponseEntry {
    /**
     * The ID of the request entry to which this entry responds.
     */
    batchId?: number | null;
    /**
     * A list of errors defined if, and only if, the request failed.
     */
    errors?: Schema$Errors;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;`content#shippingsettingsCustomBatchResponseEntry`&quot;
     */
    kind?: string | null;
    /**
     * The retrieved or updated account shipping settings.
     */
    shippingSettings?: Schema$ShippingSettings;
  }
  export interface Schema$ShippingsettingsGetSupportedCarriersResponse {
    /**
     * A list of supported carriers. May be empty.
     */
    carriers?: Schema$CarriersCarrier[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#shippingsettingsGetSupportedCarriersResponse&quot;.
     */
    kind?: string | null;
  }
  export interface Schema$ShippingsettingsGetSupportedHolidaysResponse {
    /**
     * A list of holidays applicable for delivery guarantees. May be empty.
     */
    holidays?: Schema$HolidaysHoliday[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#shippingsettingsGetSupportedHolidaysResponse&quot;.
     */
    kind?: string | null;
  }
  export interface Schema$ShippingsettingsGetSupportedPickupServicesResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#shippingsettingsGetSupportedPickupServicesResponse&quot;.
     */
    kind?: string | null;
    /**
     * A list of supported pickup services. May be empty.
     */
    pickupServices?: Schema$PickupServicesPickupService[];
  }
  export interface Schema$ShippingsettingsListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;content#shippingsettingsListResponse&quot;.
     */
    kind?: string | null;
    /**
     * The token for the retrieval of the next page of shipping settings.
     */
    nextPageToken?: string | null;
    resources?: Schema$ShippingSettings[];
  }
  export interface Schema$Table {
    /**
     * Headers of the table&#39;s columns. Optional: if not set then the table has only one dimension.
     */
    columnHeaders?: Schema$Headers;
    /**
     * Name of the table. Required for subtables, ignored for the main table.
     */
    name?: string | null;
    /**
     * Headers of the table&#39;s rows. Required.
     */
    rowHeaders?: Schema$Headers;
    /**
     * The list of rows that constitute the table. Must have the same length as `rowHeaders`. Required.
     */
    rows?: Schema$Row[];
  }
  export interface Schema$TestOrder {
    /**
     * Required. The details of the customer who placed the order.
     */
    customer?: Schema$TestOrderCustomer;
    /**
     * Whether the orderinvoices service should support this order.
     */
    enableOrderinvoices?: boolean | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;`content#testOrder`&quot;
     */
    kind?: string | null;
    /**
     * Required. Line items that are ordered. At least one line item must be provided.
     */
    lineItems?: Schema$TestOrderLineItem[];
    /**
     * Restricted. Do not use.
     */
    notificationMode?: string | null;
    /**
     * The details of the payment method.
     */
    paymentMethod?: Schema$TestOrderPaymentMethod;
    /**
     * Required. Identifier of one of the predefined delivery addresses for the delivery.  Acceptable values are:   - &quot;`dwight`&quot;  - &quot;`jim`&quot;  - &quot;`pam`&quot;
     */
    predefinedDeliveryAddress?: string | null;
    /**
     * Identifier of one of the predefined pickup details. Required for orders containing line items with shipping type `pickup`.  Acceptable values are:   - &quot;`dwight`&quot;  - &quot;`jim`&quot;  - &quot;`pam`&quot;
     */
    predefinedPickupDetails?: string | null;
    /**
     * Deprecated. Ignored if provided.
     */
    promotions?: Schema$OrderLegacyPromotion[];
    /**
     * Required. The price of shipping for all items. Shipping tax is automatically calculated for orders where marketplace facilitator tax laws are applicable. Otherwise, tax settings from Merchant Center are applied. Note that shipping is not taxed in certain states.
     */
    shippingCost?: Schema$Price;
    /**
     * Deprecated. Ignored if provided.
     */
    shippingCostTax?: Schema$Price;
    /**
     * Required. The requested shipping option.  Acceptable values are:   - &quot;`economy`&quot;  - &quot;`expedited`&quot;  - &quot;`oneDay`&quot;  - &quot;`sameDay`&quot;  - &quot;`standard`&quot;  - &quot;`twoDay`&quot;
     */
    shippingOption?: string | null;
  }
  export interface Schema$TestOrderCustomer {
    /**
     * Required. Email address of the customer.  Acceptable values are:   - &quot;`pog.dwight.schrute@gmail.com`&quot;  - &quot;`pog.jim.halpert@gmail.com`&quot;  - &quot;`penpog.pam.beesly@gmail.comding`&quot;
     */
    email?: string | null;
    /**
     * Deprecated. Please use marketingRightsInfo instead.
     */
    explicitMarketingPreference?: boolean | null;
    /**
     * Full name of the customer.
     */
    fullName?: string | null;
    /**
     * Customer&#39;s marketing preferences.
     */
    marketingRightsInfo?: Schema$TestOrderCustomerMarketingRightsInfo;
  }
  export interface Schema$TestOrderCustomerMarketingRightsInfo {
    /**
     * Last know user use selection regards marketing preferences. In certain cases selection might not be known, so this field would be empty.  Acceptable values are:   - &quot;`denied`&quot;  - &quot;`granted`&quot;
     */
    explicitMarketingPreference?: string | null;
    /**
     * Timestamp when last time marketing preference was updated. Could be empty, if user wasn&#39;t offered a selection yet.
     */
    lastUpdatedTimestamp?: string | null;
  }
  export interface Schema$TestOrderLineItem {
    /**
     * Required. Product data from the time of the order placement.
     */
    product?: Schema$TestOrderLineItemProduct;
    /**
     * Required. Number of items ordered.
     */
    quantityOrdered?: number | null;
    /**
     * Required. Details of the return policy for the line item.
     */
    returnInfo?: Schema$OrderLineItemReturnInfo;
    /**
     * Required. Details of the requested shipping for the line item.
     */
    shippingDetails?: Schema$OrderLineItemShippingDetails;
    /**
     * Deprecated. Ignored if provided.
     */
    unitTax?: Schema$Price;
  }
  export interface Schema$TestOrderLineItemProduct {
    /**
     * Required. Brand of the item.
     */
    brand?: string | null;
    /**
     * Deprecated.  Acceptable values are:   - &quot;`online`&quot;
     */
    channel?: string | null;
    /**
     * Required. Condition or state of the item.  Acceptable values are:   - &quot;`new`&quot;
     */
    condition?: string | null;
    /**
     * Required. The two-letter ISO 639-1 language code for the item.  Acceptable values are:   - &quot;`en`&quot;  - &quot;`fr`&quot;
     */
    contentLanguage?: string | null;
    /**
     * Fees for the item. Optional.
     */
    fees?: Schema$OrderLineItemProductFee[];
    /**
     * Global Trade Item Number (GTIN) of the item. Optional.
     */
    gtin?: string | null;
    /**
     * Required. URL of an image of the item.
     */
    imageLink?: string | null;
    /**
     * Shared identifier for all variants of the same product. Optional.
     */
    itemGroupId?: string | null;
    /**
     * Manufacturer Part Number (MPN) of the item. Optional.
     */
    mpn?: string | null;
    /**
     * Required. An identifier of the item.
     */
    offerId?: string | null;
    /**
     * Required. The price for the product. Tax is automatically calculated for orders where marketplace facilitator tax laws are applicable. Otherwise, tax settings from Merchant Center are applied.
     */
    price?: Schema$Price;
    /**
     * Required. The CLDR territory code of the target country of the product.
     */
    targetCountry?: string | null;
    /**
     * Required. The title of the product.
     */
    title?: string | null;
    /**
     * Variant attributes for the item. Optional.
     */
    variantAttributes?: Schema$OrderLineItemProductVariantAttribute[];
  }
  export interface Schema$TestOrderPaymentMethod {
    /**
     * The card expiration month (January = 1, February = 2 etc.).
     */
    expirationMonth?: number | null;
    /**
     * The card expiration year (4-digit, e.g. 2015).
     */
    expirationYear?: number | null;
    /**
     * The last four digits of the card number.
     */
    lastFourDigits?: string | null;
    /**
     * The billing address.  Acceptable values are:   - &quot;`dwight`&quot;  - &quot;`jim`&quot;  - &quot;`pam`&quot;
     */
    predefinedBillingAddress?: string | null;
    /**
     * The type of instrument. Note that real orders might have different values than the four values accepted by `createTestOrder`.  Acceptable values are:   - &quot;`AMEX`&quot;  - &quot;`DISCOVER`&quot;  - &quot;`MASTERCARD`&quot;  - &quot;`VISA`&quot;
     */
    type?: string | null;
  }
  export interface Schema$TransitTable {
    /**
     * A list of postal group names. The last value can be `&quot;all other locations&quot;`. Example: `[&quot;zone 1&quot;, &quot;zone 2&quot;, &quot;all other locations&quot;]`. The referred postal code groups must match the delivery country of the service.
     */
    postalCodeGroupNames?: string[] | null;
    rows?: Schema$TransitTableTransitTimeRow[];
    /**
     * A list of transit time labels. The last value can be `&quot;all other labels&quot;`. Example: `[&quot;food&quot;, &quot;electronics&quot;, &quot;all other labels&quot;]`.
     */
    transitTimeLabels?: string[] | null;
  }
  export interface Schema$TransitTableTransitTimeRow {
    values?: Schema$TransitTableTransitTimeRowTransitTimeValue[];
  }
  export interface Schema$TransitTableTransitTimeRowTransitTimeValue {
    /**
     * Must be greater than or equal to `minTransitTimeInDays`.
     */
    maxTransitTimeInDays?: number | null;
    /**
     * Transit time range (min-max) in business days. 0 means same day delivery, 1 means next day delivery.
     */
    minTransitTimeInDays?: number | null;
  }
  export interface Schema$UnitInvoice {
    /**
     * Additional charges for a unit, e.g. shipping costs.
     */
    additionalCharges?: Schema$UnitInvoiceAdditionalCharge[];
    /**
     * Deprecated.
     */
    promotions?: Schema$Promotion[];
    /**
     * [required] Price of the unit, before applying taxes.
     */
    unitPricePretax?: Schema$Price;
    /**
     * Tax amounts to apply to the unit price.
     */
    unitPriceTaxes?: Schema$UnitInvoiceTaxLine[];
  }
  export interface Schema$UnitInvoiceAdditionalCharge {
    /**
     * [required] Amount of the additional charge.
     */
    additionalChargeAmount?: Schema$Amount;
    /**
     * Deprecated.
     */
    additionalChargePromotions?: Schema$Promotion[];
    /**
     * [required] Type of the additional charge.  Acceptable values are:   - &quot;`shipping`&quot;
     */
    type?: string | null;
  }
  export interface Schema$UnitInvoiceTaxLine {
    /**
     * [required] Tax amount for the tax type.
     */
    taxAmount?: Schema$Price;
    /**
     * Optional name of the tax type. This should only be provided if `taxType` is `otherFeeTax`.
     */
    taxName?: string | null;
    /**
     * [required] Type of the tax.  Acceptable values are:   - &quot;`otherFee`&quot;  - &quot;`otherFeeTax`&quot;  - &quot;`sales`&quot;
     */
    taxType?: string | null;
  }
  /**
   * The single value of a rate group or the value of a rate group table&#39;s cell. Exactly one of `noShipping`, `flatRate`, `pricePercentage`, `carrierRateName`, `subtableName` must be set.
   */
  export interface Schema$Value {
    /**
     * The name of a carrier rate referring to a carrier rate defined in the same rate group. Can only be set if all other fields are not set.
     */
    carrierRateName?: string | null;
    /**
     * A flat rate. Can only be set if all other fields are not set.
     */
    flatRate?: Schema$Price;
    /**
     * If true, then the product can&#39;t ship. Must be true when set, can only be set if all other fields are not set.
     */
    noShipping?: boolean | null;
    /**
     * A percentage of the price represented as a number in decimal notation (e.g., `&quot;5.4&quot;`). Can only be set if all other fields are not set.
     */
    pricePercentage?: string | null;
    /**
     * The name of a subtable. Can only be set in table cells (i.e., not for single values), and only if all other fields are not set.
     */
    subtableName?: string | null;
  }
  export interface Schema$Weight {
    /**
     * Required. The weight unit.  Acceptable values are:   - &quot;`kg`&quot;  - &quot;`lb`&quot;
     */
    unit?: string | null;
    /**
     * Required. The weight represented as a number.
     */
    value?: string | null;
  }

  export class Resource$Accounts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * content.accounts.authinfo
     * @desc Returns information about the authenticated user.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.accounts.authinfo({});
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountIdentifiers": [],
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.accounts.authinfo
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    authinfo(
      params: Params$Resource$Accounts$Authinfo,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    authinfo(
      params?: Params$Resource$Accounts$Authinfo,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccountsAuthInfoResponse>;
    authinfo(
      params: Params$Resource$Accounts$Authinfo,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    authinfo(
      params: Params$Resource$Accounts$Authinfo,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AccountsAuthInfoResponse>,
      callback: BodyResponseCallback<Schema$AccountsAuthInfoResponse>
    ): void;
    authinfo(
      params: Params$Resource$Accounts$Authinfo,
      callback: BodyResponseCallback<Schema$AccountsAuthInfoResponse>
    ): void;
    authinfo(
      callback: BodyResponseCallback<Schema$AccountsAuthInfoResponse>
    ): void;
    authinfo(
      paramsOrCallback?:
        | Params$Resource$Accounts$Authinfo
        | BodyResponseCallback<Schema$AccountsAuthInfoResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccountsAuthInfoResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccountsAuthInfoResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AccountsAuthInfoResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Authinfo;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Authinfo;
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
            url: (rootUrl + '/content/v2/accounts/authinfo').replace(
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
        createAPIRequest<Schema$AccountsAuthInfoResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$AccountsAuthInfoResponse>(parameters);
      }
    }

    /**
     * content.accounts.claimwebsite
     * @desc Claims the website of a Merchant Center sub-account.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.accounts.claimwebsite({
     *     // The ID of the account whose website is claimed.
     *     accountId: 'placeholder-value',
     *     // The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     *     merchantId: 'placeholder-value',
     *     // Only available to selected merchants. When set to `True`, this flag removes any existing claim on the requested website by another account and replaces it with a claim from this account.
     *     overwrite: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.accounts.claimwebsite
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId The ID of the account whose website is claimed.
     * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @param {boolean=} params.overwrite Only available to selected merchants. When set to `True`, this flag removes any existing claim on the requested website by another account and replaces it with a claim from this account.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    claimwebsite(
      params: Params$Resource$Accounts$Claimwebsite,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    claimwebsite(
      params?: Params$Resource$Accounts$Claimwebsite,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccountsClaimWebsiteResponse>;
    claimwebsite(
      params: Params$Resource$Accounts$Claimwebsite,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    claimwebsite(
      params: Params$Resource$Accounts$Claimwebsite,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AccountsClaimWebsiteResponse>,
      callback: BodyResponseCallback<Schema$AccountsClaimWebsiteResponse>
    ): void;
    claimwebsite(
      params: Params$Resource$Accounts$Claimwebsite,
      callback: BodyResponseCallback<Schema$AccountsClaimWebsiteResponse>
    ): void;
    claimwebsite(
      callback: BodyResponseCallback<Schema$AccountsClaimWebsiteResponse>
    ): void;
    claimwebsite(
      paramsOrCallback?:
        | Params$Resource$Accounts$Claimwebsite
        | BodyResponseCallback<Schema$AccountsClaimWebsiteResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccountsClaimWebsiteResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccountsClaimWebsiteResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AccountsClaimWebsiteResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Claimwebsite;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Claimwebsite;
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
              '/content/v2/{merchantId}/accounts/{accountId}/claimwebsite'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'accountId'],
        pathParams: ['accountId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AccountsClaimWebsiteResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$AccountsClaimWebsiteResponse>(
          parameters
        );
      }
    }

    /**
     * content.accounts.custombatch
     * @desc Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.accounts.custombatch({
     *     // Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     *     dryRun: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "entries": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "entries": [],
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.accounts.custombatch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     * @param {().AccountsCustomBatchRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    custombatch(
      params: Params$Resource$Accounts$Custombatch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    custombatch(
      params?: Params$Resource$Accounts$Custombatch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccountsCustomBatchResponse>;
    custombatch(
      params: Params$Resource$Accounts$Custombatch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    custombatch(
      params: Params$Resource$Accounts$Custombatch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AccountsCustomBatchResponse>,
      callback: BodyResponseCallback<Schema$AccountsCustomBatchResponse>
    ): void;
    custombatch(
      params: Params$Resource$Accounts$Custombatch,
      callback: BodyResponseCallback<Schema$AccountsCustomBatchResponse>
    ): void;
    custombatch(
      callback: BodyResponseCallback<Schema$AccountsCustomBatchResponse>
    ): void;
    custombatch(
      paramsOrCallback?:
        | Params$Resource$Accounts$Custombatch
        | BodyResponseCallback<Schema$AccountsCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccountsCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccountsCustomBatchResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AccountsCustomBatchResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Custombatch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Custombatch;
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
            url: (rootUrl + '/content/v2/accounts/batch').replace(
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
        createAPIRequest<Schema$AccountsCustomBatchResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$AccountsCustomBatchResponse>(parameters);
      }
    }

    /**
     * content.accounts.delete
     * @desc Deletes a Merchant Center sub-account.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.accounts.delete({
     *     // The ID of the account.
     *     accountId: 'placeholder-value',
     *     // Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     *     dryRun: 'placeholder-value',
     *     // Flag to delete sub-accounts with products. The default value is false.
     *     force: 'placeholder-value',
     *     // The ID of the managing account. This must be a multi-client account, and accountId must be the ID of a sub-account of this account.
     *     merchantId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.accounts.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId The ID of the account.
     * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     * @param {boolean=} params.force Flag to delete sub-accounts with products. The default value is false.
     * @param {string} params.merchantId The ID of the managing account. This must be a multi-client account, and accountId must be the ID of a sub-account of this account.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params: Params$Resource$Accounts$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Accounts$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Accounts$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Accounts$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Accounts$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Accounts$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Accounts$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Delete;
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
              rootUrl + '/content/v2/{merchantId}/accounts/{accountId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'accountId'],
        pathParams: ['accountId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * content.accounts.get
     * @desc Retrieves a Merchant Center account.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.accounts.get({
     *     // The ID of the account.
     *     accountId: 'placeholder-value',
     *     // The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     *     merchantId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adultContent": false,
     *   //   "adwordsLinks": [],
     *   //   "businessInformation": {},
     *   //   "googleMyBusinessLink": {},
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "reviewsUrl": "my_reviewsUrl",
     *   //   "sellerId": "my_sellerId",
     *   //   "users": [],
     *   //   "websiteUrl": "my_websiteUrl",
     *   //   "youtubeChannelLinks": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.accounts.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId The ID of the account.
     * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2/{merchantId}/accounts/{accountId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'accountId'],
        pathParams: ['accountId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Account>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Account>(parameters);
      }
    }

    /**
     * content.accounts.insert
     * @desc Creates a Merchant Center sub-account.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.accounts.insert({
     *     // Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     *     dryRun: 'placeholder-value',
     *     // The ID of the managing account. This must be a multi-client account.
     *     merchantId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "adultContent": false,
     *       //   "adwordsLinks": [],
     *       //   "businessInformation": {},
     *       //   "googleMyBusinessLink": {},
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "name": "my_name",
     *       //   "reviewsUrl": "my_reviewsUrl",
     *       //   "sellerId": "my_sellerId",
     *       //   "users": [],
     *       //   "websiteUrl": "my_websiteUrl",
     *       //   "youtubeChannelLinks": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adultContent": false,
     *   //   "adwordsLinks": [],
     *   //   "businessInformation": {},
     *   //   "googleMyBusinessLink": {},
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "reviewsUrl": "my_reviewsUrl",
     *   //   "sellerId": "my_sellerId",
     *   //   "users": [],
     *   //   "websiteUrl": "my_websiteUrl",
     *   //   "youtubeChannelLinks": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.accounts.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     * @param {string} params.merchantId The ID of the managing account. This must be a multi-client account.
     * @param {().Account} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params: Params$Resource$Accounts$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Accounts$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Account>;
    insert(
      params: Params$Resource$Accounts$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Accounts$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Account>,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    insert(
      params: Params$Resource$Accounts$Insert,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Account>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Accounts$Insert
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
      let params = (paramsOrCallback || {}) as Params$Resource$Accounts$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Insert;
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
            url: (rootUrl + '/content/v2/{merchantId}/accounts').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Account>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Account>(parameters);
      }
    }

    /**
     * content.accounts.link
     * @desc Performs an action on a link between two Merchant Center accounts, namely accountId and linkedAccountId.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.accounts.link({
     *     // The ID of the account that should be linked.
     *     accountId: 'placeholder-value',
     *     // The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     *     merchantId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "action": "my_action",
     *       //   "linkType": "my_linkType",
     *       //   "linkedAccountId": "my_linkedAccountId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.accounts.link
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId The ID of the account that should be linked.
     * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @param {().AccountsLinkRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    link(
      params: Params$Resource$Accounts$Link,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    link(
      params?: Params$Resource$Accounts$Link,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccountsLinkResponse>;
    link(
      params: Params$Resource$Accounts$Link,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    link(
      params: Params$Resource$Accounts$Link,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AccountsLinkResponse>,
      callback: BodyResponseCallback<Schema$AccountsLinkResponse>
    ): void;
    link(
      params: Params$Resource$Accounts$Link,
      callback: BodyResponseCallback<Schema$AccountsLinkResponse>
    ): void;
    link(callback: BodyResponseCallback<Schema$AccountsLinkResponse>): void;
    link(
      paramsOrCallback?:
        | Params$Resource$Accounts$Link
        | BodyResponseCallback<Schema$AccountsLinkResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccountsLinkResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccountsLinkResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AccountsLinkResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Accounts$Link;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Link;
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
              rootUrl + '/content/v2/{merchantId}/accounts/{accountId}/link'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'accountId'],
        pathParams: ['accountId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AccountsLinkResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$AccountsLinkResponse>(parameters);
      }
    }

    /**
     * content.accounts.list
     * @desc Lists the sub-accounts in your Merchant Center account.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.accounts.list({
     *     // The maximum number of accounts to return in the response, used for paging.
     *     maxResults: 'placeholder-value',
     *     // The ID of the managing account. This must be a multi-client account.
     *     merchantId: 'placeholder-value',
     *     // The token returned by the previous request.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "resources": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
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
    list(
      params: Params$Resource$Accounts$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Accounts$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccountsListResponse>;
    list(
      params: Params$Resource$Accounts$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AccountsListResponse>,
      callback: BodyResponseCallback<Schema$AccountsListResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$List,
      callback: BodyResponseCallback<Schema$AccountsListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$AccountsListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$List
        | BodyResponseCallback<Schema$AccountsListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccountsListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccountsListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AccountsListResponse>
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/content/v2/{merchantId}/accounts').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AccountsListResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$AccountsListResponse>(parameters);
      }
    }

    /**
     * content.accounts.update
     * @desc Updates a Merchant Center account. Any fields that are not provided are deleted from the resource.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.accounts.update({
     *     // The ID of the account.
     *     accountId: 'placeholder-value',
     *     // Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     *     dryRun: 'placeholder-value',
     *     // The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     *     merchantId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "adultContent": false,
     *       //   "adwordsLinks": [],
     *       //   "businessInformation": {},
     *       //   "googleMyBusinessLink": {},
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "name": "my_name",
     *       //   "reviewsUrl": "my_reviewsUrl",
     *       //   "sellerId": "my_sellerId",
     *       //   "users": [],
     *       //   "websiteUrl": "my_websiteUrl",
     *       //   "youtubeChannelLinks": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adultContent": false,
     *   //   "adwordsLinks": [],
     *   //   "businessInformation": {},
     *   //   "googleMyBusinessLink": {},
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "reviewsUrl": "my_reviewsUrl",
     *   //   "sellerId": "my_sellerId",
     *   //   "users": [],
     *   //   "websiteUrl": "my_websiteUrl",
     *   //   "youtubeChannelLinks": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.accounts.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId The ID of the account.
     * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @param {().Account} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params: Params$Resource$Accounts$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Accounts$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Account>;
    update(
      params: Params$Resource$Accounts$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
            url: (
              rootUrl + '/content/v2/{merchantId}/accounts/{accountId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'accountId'],
        pathParams: ['accountId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Account>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Account>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Authinfo
    extends StandardParameters {}
  export interface Params$Resource$Accounts$Claimwebsite
    extends StandardParameters {
    /**
     * The ID of the account whose website is claimed.
     */
    accountId?: string;
    /**
     * The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     */
    merchantId?: string;
    /**
     * Only available to selected merchants. When set to `True`, this flag removes any existing claim on the requested website by another account and replaces it with a claim from this account.
     */
    overwrite?: boolean;
  }
  export interface Params$Resource$Accounts$Custombatch
    extends StandardParameters {
    /**
     * Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     */
    dryRun?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AccountsCustomBatchRequest;
  }
  export interface Params$Resource$Accounts$Delete extends StandardParameters {
    /**
     * The ID of the account.
     */
    accountId?: string;
    /**
     * Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     */
    dryRun?: boolean;
    /**
     * Flag to delete sub-accounts with products. The default value is false.
     */
    force?: boolean;
    /**
     * The ID of the managing account. This must be a multi-client account, and accountId must be the ID of a sub-account of this account.
     */
    merchantId?: string;
  }
  export interface Params$Resource$Accounts$Get extends StandardParameters {
    /**
     * The ID of the account.
     */
    accountId?: string;
    /**
     * The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     */
    merchantId?: string;
  }
  export interface Params$Resource$Accounts$Insert extends StandardParameters {
    /**
     * Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     */
    dryRun?: boolean;
    /**
     * The ID of the managing account. This must be a multi-client account.
     */
    merchantId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Account;
  }
  export interface Params$Resource$Accounts$Link extends StandardParameters {
    /**
     * The ID of the account that should be linked.
     */
    accountId?: string;
    /**
     * The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     */
    merchantId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AccountsLinkRequest;
  }
  export interface Params$Resource$Accounts$List extends StandardParameters {
    /**
     * The maximum number of accounts to return in the response, used for paging.
     */
    maxResults?: number;
    /**
     * The ID of the managing account. This must be a multi-client account.
     */
    merchantId?: string;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Accounts$Update extends StandardParameters {
    /**
     * The ID of the account.
     */
    accountId?: string;
    /**
     * Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     */
    dryRun?: boolean;
    /**
     * The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     */
    merchantId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Account;
  }

  export class Resource$Accountstatuses {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * content.accountstatuses.custombatch
     * @desc Retrieves multiple Merchant Center account statuses in a single request.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.accountstatuses.custombatch({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "entries": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "entries": [],
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.accountstatuses.custombatch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().AccountstatusesCustomBatchRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    custombatch(
      params: Params$Resource$Accountstatuses$Custombatch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    custombatch(
      params?: Params$Resource$Accountstatuses$Custombatch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccountstatusesCustomBatchResponse>;
    custombatch(
      params: Params$Resource$Accountstatuses$Custombatch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    custombatch(
      params: Params$Resource$Accountstatuses$Custombatch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AccountstatusesCustomBatchResponse>,
      callback: BodyResponseCallback<Schema$AccountstatusesCustomBatchResponse>
    ): void;
    custombatch(
      params: Params$Resource$Accountstatuses$Custombatch,
      callback: BodyResponseCallback<Schema$AccountstatusesCustomBatchResponse>
    ): void;
    custombatch(
      callback: BodyResponseCallback<Schema$AccountstatusesCustomBatchResponse>
    ): void;
    custombatch(
      paramsOrCallback?:
        | Params$Resource$Accountstatuses$Custombatch
        | BodyResponseCallback<Schema$AccountstatusesCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccountstatusesCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccountstatusesCustomBatchResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AccountstatusesCustomBatchResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accountstatuses$Custombatch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accountstatuses$Custombatch;
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
            url: (rootUrl + '/content/v2/accountstatuses/batch').replace(
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
        createAPIRequest<Schema$AccountstatusesCustomBatchResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$AccountstatusesCustomBatchResponse>(
          parameters
        );
      }
    }

    /**
     * content.accountstatuses.get
     * @desc Retrieves the status of a Merchant Center account. No itemLevelIssues are returned for multi-client accounts.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.accountstatuses.get({
     *     // The ID of the account.
     *     accountId: 'placeholder-value',
     *     // If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
     *     destinations: 'placeholder-value',
     *     // The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     *     merchantId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "accountLevelIssues": [],
     *   //   "dataQualityIssues": [],
     *   //   "kind": "my_kind",
     *   //   "products": [],
     *   //   "websiteClaimed": false
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.accountstatuses.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId The ID of the account.
     * @param {string=} params.destinations If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
     * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Accountstatuses$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Accountstatuses$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccountStatus>;
    get(
      params: Params$Resource$Accountstatuses$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accountstatuses$Get,
      options: MethodOptions | BodyResponseCallback<Schema$AccountStatus>,
      callback: BodyResponseCallback<Schema$AccountStatus>
    ): void;
    get(
      params: Params$Resource$Accountstatuses$Get,
      callback: BodyResponseCallback<Schema$AccountStatus>
    ): void;
    get(callback: BodyResponseCallback<Schema$AccountStatus>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accountstatuses$Get
        | BodyResponseCallback<Schema$AccountStatus>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccountStatus>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccountStatus>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AccountStatus> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accountstatuses$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accountstatuses$Get;
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
              rootUrl + '/content/v2/{merchantId}/accountstatuses/{accountId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'accountId'],
        pathParams: ['accountId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AccountStatus>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$AccountStatus>(parameters);
      }
    }

    /**
     * content.accountstatuses.list
     * @desc Lists the statuses of the sub-accounts in your Merchant Center account.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.accountstatuses.list({
     *     // If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
     *     destinations: 'placeholder-value',
     *     // The maximum number of account statuses to return in the response, used for paging.
     *     maxResults: 'placeholder-value',
     *     // The ID of the managing account. This must be a multi-client account.
     *     merchantId: 'placeholder-value',
     *     // The token returned by the previous request.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "resources": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
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
    list(
      params: Params$Resource$Accountstatuses$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Accountstatuses$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccountstatusesListResponse>;
    list(
      params: Params$Resource$Accountstatuses$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accountstatuses$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AccountstatusesListResponse>,
      callback: BodyResponseCallback<Schema$AccountstatusesListResponse>
    ): void;
    list(
      params: Params$Resource$Accountstatuses$List,
      callback: BodyResponseCallback<Schema$AccountstatusesListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$AccountstatusesListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accountstatuses$List
        | BodyResponseCallback<Schema$AccountstatusesListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccountstatusesListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccountstatusesListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AccountstatusesListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accountstatuses$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accountstatuses$List;
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
            url: (rootUrl + '/content/v2/{merchantId}/accountstatuses').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AccountstatusesListResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$AccountstatusesListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Accountstatuses$Custombatch
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$AccountstatusesCustomBatchRequest;
  }
  export interface Params$Resource$Accountstatuses$Get
    extends StandardParameters {
    /**
     * The ID of the account.
     */
    accountId?: string;
    /**
     * If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
     */
    destinations?: string[];
    /**
     * The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     */
    merchantId?: string;
  }
  export interface Params$Resource$Accountstatuses$List
    extends StandardParameters {
    /**
     * If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
     */
    destinations?: string[];
    /**
     * The maximum number of account statuses to return in the response, used for paging.
     */
    maxResults?: number;
    /**
     * The ID of the managing account. This must be a multi-client account.
     */
    merchantId?: string;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
  }

  export class Resource$Accounttax {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * content.accounttax.custombatch
     * @desc Retrieves and updates tax settings of multiple accounts in a single request.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.accounttax.custombatch({
     *     // Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     *     dryRun: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "entries": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "entries": [],
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.accounttax.custombatch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     * @param {().AccounttaxCustomBatchRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    custombatch(
      params: Params$Resource$Accounttax$Custombatch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    custombatch(
      params?: Params$Resource$Accounttax$Custombatch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccounttaxCustomBatchResponse>;
    custombatch(
      params: Params$Resource$Accounttax$Custombatch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    custombatch(
      params: Params$Resource$Accounttax$Custombatch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AccounttaxCustomBatchResponse>,
      callback: BodyResponseCallback<Schema$AccounttaxCustomBatchResponse>
    ): void;
    custombatch(
      params: Params$Resource$Accounttax$Custombatch,
      callback: BodyResponseCallback<Schema$AccounttaxCustomBatchResponse>
    ): void;
    custombatch(
      callback: BodyResponseCallback<Schema$AccounttaxCustomBatchResponse>
    ): void;
    custombatch(
      paramsOrCallback?:
        | Params$Resource$Accounttax$Custombatch
        | BodyResponseCallback<Schema$AccounttaxCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccounttaxCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccounttaxCustomBatchResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AccounttaxCustomBatchResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounttax$Custombatch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounttax$Custombatch;
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
            url: (rootUrl + '/content/v2/accounttax/batch').replace(
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
        createAPIRequest<Schema$AccounttaxCustomBatchResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$AccounttaxCustomBatchResponse>(
          parameters
        );
      }
    }

    /**
     * content.accounttax.get
     * @desc Retrieves the tax settings of the account.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.accounttax.get({
     *     // The ID of the account for which to get/update account tax settings.
     *     accountId: 'placeholder-value',
     *     // The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     *     merchantId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "kind": "my_kind",
     *   //   "rules": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.accounttax.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId The ID of the account for which to get/update account tax settings.
     * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Accounttax$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Accounttax$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccountTax>;
    get(
      params: Params$Resource$Accounttax$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounttax$Get,
      options: MethodOptions | BodyResponseCallback<Schema$AccountTax>,
      callback: BodyResponseCallback<Schema$AccountTax>
    ): void;
    get(
      params: Params$Resource$Accounttax$Get,
      callback: BodyResponseCallback<Schema$AccountTax>
    ): void;
    get(callback: BodyResponseCallback<Schema$AccountTax>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounttax$Get
        | BodyResponseCallback<Schema$AccountTax>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccountTax>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccountTax>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AccountTax> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Accounttax$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounttax$Get;
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
              rootUrl + '/content/v2/{merchantId}/accounttax/{accountId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'accountId'],
        pathParams: ['accountId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AccountTax>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$AccountTax>(parameters);
      }
    }

    /**
     * content.accounttax.list
     * @desc Lists the tax settings of the sub-accounts in your Merchant Center account.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.accounttax.list({
     *     // The maximum number of tax settings to return in the response, used for paging.
     *     maxResults: 'placeholder-value',
     *     // The ID of the managing account. This must be a multi-client account.
     *     merchantId: 'placeholder-value',
     *     // The token returned by the previous request.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "resources": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
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
    list(
      params: Params$Resource$Accounttax$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Accounttax$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccounttaxListResponse>;
    list(
      params: Params$Resource$Accounttax$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounttax$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AccounttaxListResponse>,
      callback: BodyResponseCallback<Schema$AccounttaxListResponse>
    ): void;
    list(
      params: Params$Resource$Accounttax$List,
      callback: BodyResponseCallback<Schema$AccounttaxListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$AccounttaxListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounttax$List
        | BodyResponseCallback<Schema$AccounttaxListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccounttaxListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccounttaxListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AccounttaxListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Accounttax$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounttax$List;
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
            url: (rootUrl + '/content/v2/{merchantId}/accounttax').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AccounttaxListResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$AccounttaxListResponse>(parameters);
      }
    }

    /**
     * content.accounttax.update
     * @desc Updates the tax settings of the account. Any fields that are not provided are deleted from the resource.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.accounttax.update({
     *     // The ID of the account for which to get/update account tax settings.
     *     accountId: 'placeholder-value',
     *     // Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     *     dryRun: 'placeholder-value',
     *     // The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     *     merchantId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accountId": "my_accountId",
     *       //   "kind": "my_kind",
     *       //   "rules": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "kind": "my_kind",
     *   //   "rules": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.accounttax.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId The ID of the account for which to get/update account tax settings.
     * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @param {().AccountTax} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params: Params$Resource$Accounttax$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Accounttax$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccountTax>;
    update(
      params: Params$Resource$Accounttax$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Accounttax$Update,
      options: MethodOptions | BodyResponseCallback<Schema$AccountTax>,
      callback: BodyResponseCallback<Schema$AccountTax>
    ): void;
    update(
      params: Params$Resource$Accounttax$Update,
      callback: BodyResponseCallback<Schema$AccountTax>
    ): void;
    update(callback: BodyResponseCallback<Schema$AccountTax>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Accounttax$Update
        | BodyResponseCallback<Schema$AccountTax>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccountTax>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccountTax>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AccountTax> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounttax$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounttax$Update;
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
              rootUrl + '/content/v2/{merchantId}/accounttax/{accountId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'accountId'],
        pathParams: ['accountId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AccountTax>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$AccountTax>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounttax$Custombatch
    extends StandardParameters {
    /**
     * Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     */
    dryRun?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AccounttaxCustomBatchRequest;
  }
  export interface Params$Resource$Accounttax$Get extends StandardParameters {
    /**
     * The ID of the account for which to get/update account tax settings.
     */
    accountId?: string;
    /**
     * The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     */
    merchantId?: string;
  }
  export interface Params$Resource$Accounttax$List extends StandardParameters {
    /**
     * The maximum number of tax settings to return in the response, used for paging.
     */
    maxResults?: number;
    /**
     * The ID of the managing account. This must be a multi-client account.
     */
    merchantId?: string;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Accounttax$Update
    extends StandardParameters {
    /**
     * The ID of the account for which to get/update account tax settings.
     */
    accountId?: string;
    /**
     * Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     */
    dryRun?: boolean;
    /**
     * The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     */
    merchantId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AccountTax;
  }

  export class Resource$Datafeeds {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * content.datafeeds.custombatch
     * @desc Deletes, fetches, gets, inserts and updates multiple datafeeds in a single request.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.datafeeds.custombatch({
     *     // Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     *     dryRun: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "entries": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "entries": [],
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.datafeeds.custombatch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     * @param {().DatafeedsCustomBatchRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    custombatch(
      params: Params$Resource$Datafeeds$Custombatch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    custombatch(
      params?: Params$Resource$Datafeeds$Custombatch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DatafeedsCustomBatchResponse>;
    custombatch(
      params: Params$Resource$Datafeeds$Custombatch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    custombatch(
      params: Params$Resource$Datafeeds$Custombatch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$DatafeedsCustomBatchResponse>,
      callback: BodyResponseCallback<Schema$DatafeedsCustomBatchResponse>
    ): void;
    custombatch(
      params: Params$Resource$Datafeeds$Custombatch,
      callback: BodyResponseCallback<Schema$DatafeedsCustomBatchResponse>
    ): void;
    custombatch(
      callback: BodyResponseCallback<Schema$DatafeedsCustomBatchResponse>
    ): void;
    custombatch(
      paramsOrCallback?:
        | Params$Resource$Datafeeds$Custombatch
        | BodyResponseCallback<Schema$DatafeedsCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DatafeedsCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DatafeedsCustomBatchResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$DatafeedsCustomBatchResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Datafeeds$Custombatch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Datafeeds$Custombatch;
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
            url: (rootUrl + '/content/v2/datafeeds/batch').replace(
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
        createAPIRequest<Schema$DatafeedsCustomBatchResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$DatafeedsCustomBatchResponse>(
          parameters
        );
      }
    }

    /**
     * content.datafeeds.delete
     * @desc Deletes a datafeed configuration from your Merchant Center account.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.datafeeds.delete({
     *     // The ID of the datafeed.
     *     datafeedId: 'placeholder-value',
     *     // Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     *     dryRun: 'placeholder-value',
     *     // The ID of the account that manages the datafeed. This account cannot be a multi-client account.
     *     merchantId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.datafeeds.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.datafeedId The ID of the datafeed.
     * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     * @param {string} params.merchantId The ID of the account that manages the datafeed. This account cannot be a multi-client account.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params: Params$Resource$Datafeeds$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Datafeeds$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Datafeeds$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Datafeeds$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Datafeeds$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Datafeeds$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Datafeeds$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Datafeeds$Delete;
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
              rootUrl + '/content/v2/{merchantId}/datafeeds/{datafeedId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'datafeedId'],
        pathParams: ['datafeedId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * content.datafeeds.fetchnow
     * @desc Invokes a fetch for the datafeed in your Merchant Center account.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.datafeeds.fetchnow({
     *     // The ID of the datafeed to be fetched.
     *     datafeedId: 'placeholder-value',
     *     // Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     *     dryRun: 'placeholder-value',
     *     // The ID of the account that manages the datafeed. This account cannot be a multi-client account.
     *     merchantId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.datafeeds.fetchnow
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.datafeedId The ID of the datafeed to be fetched.
     * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     * @param {string} params.merchantId The ID of the account that manages the datafeed. This account cannot be a multi-client account.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    fetchnow(
      params: Params$Resource$Datafeeds$Fetchnow,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    fetchnow(
      params?: Params$Resource$Datafeeds$Fetchnow,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DatafeedsFetchNowResponse>;
    fetchnow(
      params: Params$Resource$Datafeeds$Fetchnow,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    fetchnow(
      params: Params$Resource$Datafeeds$Fetchnow,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$DatafeedsFetchNowResponse>,
      callback: BodyResponseCallback<Schema$DatafeedsFetchNowResponse>
    ): void;
    fetchnow(
      params: Params$Resource$Datafeeds$Fetchnow,
      callback: BodyResponseCallback<Schema$DatafeedsFetchNowResponse>
    ): void;
    fetchnow(
      callback: BodyResponseCallback<Schema$DatafeedsFetchNowResponse>
    ): void;
    fetchnow(
      paramsOrCallback?:
        | Params$Resource$Datafeeds$Fetchnow
        | BodyResponseCallback<Schema$DatafeedsFetchNowResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DatafeedsFetchNowResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DatafeedsFetchNowResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$DatafeedsFetchNowResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Datafeeds$Fetchnow;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Datafeeds$Fetchnow;
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
              '/content/v2/{merchantId}/datafeeds/{datafeedId}/fetchNow'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'datafeedId'],
        pathParams: ['datafeedId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DatafeedsFetchNowResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$DatafeedsFetchNowResponse>(parameters);
      }
    }

    /**
     * content.datafeeds.get
     * @desc Retrieves a datafeed configuration from your Merchant Center account.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.datafeeds.get({
     *     // The ID of the datafeed.
     *     datafeedId: 'placeholder-value',
     *     // The ID of the account that manages the datafeed. This account cannot be a multi-client account.
     *     merchantId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attributeLanguage": "my_attributeLanguage",
     *   //   "contentLanguage": "my_contentLanguage",
     *   //   "contentType": "my_contentType",
     *   //   "fetchSchedule": {},
     *   //   "fileName": "my_fileName",
     *   //   "format": {},
     *   //   "id": "my_id",
     *   //   "intendedDestinations": [],
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "targetCountry": "my_targetCountry",
     *   //   "targets": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
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
    get(
      params: Params$Resource$Datafeeds$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Datafeeds$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Datafeed>;
    get(
      params: Params$Resource$Datafeeds$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Datafeeds$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Datafeed>,
      callback: BodyResponseCallback<Schema$Datafeed>
    ): void;
    get(
      params: Params$Resource$Datafeeds$Get,
      callback: BodyResponseCallback<Schema$Datafeed>
    ): void;
    get(callback: BodyResponseCallback<Schema$Datafeed>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Datafeeds$Get
        | BodyResponseCallback<Schema$Datafeed>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Datafeed>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Datafeed>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Datafeed> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Datafeeds$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Datafeeds$Get;
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
              rootUrl + '/content/v2/{merchantId}/datafeeds/{datafeedId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'datafeedId'],
        pathParams: ['datafeedId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Datafeed>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Datafeed>(parameters);
      }
    }

    /**
     * content.datafeeds.insert
     * @desc Registers a datafeed configuration with your Merchant Center account.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.datafeeds.insert({
     *     // Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     *     dryRun: 'placeholder-value',
     *     // The ID of the account that manages the datafeed. This account cannot be a multi-client account.
     *     merchantId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "attributeLanguage": "my_attributeLanguage",
     *       //   "contentLanguage": "my_contentLanguage",
     *       //   "contentType": "my_contentType",
     *       //   "fetchSchedule": {},
     *       //   "fileName": "my_fileName",
     *       //   "format": {},
     *       //   "id": "my_id",
     *       //   "intendedDestinations": [],
     *       //   "kind": "my_kind",
     *       //   "name": "my_name",
     *       //   "targetCountry": "my_targetCountry",
     *       //   "targets": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attributeLanguage": "my_attributeLanguage",
     *   //   "contentLanguage": "my_contentLanguage",
     *   //   "contentType": "my_contentType",
     *   //   "fetchSchedule": {},
     *   //   "fileName": "my_fileName",
     *   //   "format": {},
     *   //   "id": "my_id",
     *   //   "intendedDestinations": [],
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "targetCountry": "my_targetCountry",
     *   //   "targets": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.datafeeds.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     * @param {string} params.merchantId The ID of the account that manages the datafeed. This account cannot be a multi-client account.
     * @param {().Datafeed} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params: Params$Resource$Datafeeds$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Datafeeds$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Datafeed>;
    insert(
      params: Params$Resource$Datafeeds$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Datafeeds$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Datafeed>,
      callback: BodyResponseCallback<Schema$Datafeed>
    ): void;
    insert(
      params: Params$Resource$Datafeeds$Insert,
      callback: BodyResponseCallback<Schema$Datafeed>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Datafeed>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Datafeeds$Insert
        | BodyResponseCallback<Schema$Datafeed>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Datafeed>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Datafeed>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Datafeed> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Datafeeds$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Datafeeds$Insert;
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
            url: (rootUrl + '/content/v2/{merchantId}/datafeeds').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Datafeed>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Datafeed>(parameters);
      }
    }

    /**
     * content.datafeeds.list
     * @desc Lists the configurations for datafeeds in your Merchant Center account.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.datafeeds.list({
     *     // The maximum number of products to return in the response, used for paging.
     *     maxResults: 'placeholder-value',
     *     // The ID of the account that manages the datafeeds. This account cannot be a multi-client account.
     *     merchantId: 'placeholder-value',
     *     // The token returned by the previous request.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "resources": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
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
    list(
      params: Params$Resource$Datafeeds$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Datafeeds$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DatafeedsListResponse>;
    list(
      params: Params$Resource$Datafeeds$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Datafeeds$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$DatafeedsListResponse>,
      callback: BodyResponseCallback<Schema$DatafeedsListResponse>
    ): void;
    list(
      params: Params$Resource$Datafeeds$List,
      callback: BodyResponseCallback<Schema$DatafeedsListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$DatafeedsListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Datafeeds$List
        | BodyResponseCallback<Schema$DatafeedsListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DatafeedsListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DatafeedsListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$DatafeedsListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Datafeeds$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Datafeeds$List;
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
            url: (rootUrl + '/content/v2/{merchantId}/datafeeds').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DatafeedsListResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$DatafeedsListResponse>(parameters);
      }
    }

    /**
     * content.datafeeds.update
     * @desc Updates a datafeed configuration of your Merchant Center account. Any fields that are not provided are deleted from the resource.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.datafeeds.update({
     *     // The ID of the datafeed.
     *     datafeedId: 'placeholder-value',
     *     // Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     *     dryRun: 'placeholder-value',
     *     // The ID of the account that manages the datafeed. This account cannot be a multi-client account.
     *     merchantId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "attributeLanguage": "my_attributeLanguage",
     *       //   "contentLanguage": "my_contentLanguage",
     *       //   "contentType": "my_contentType",
     *       //   "fetchSchedule": {},
     *       //   "fileName": "my_fileName",
     *       //   "format": {},
     *       //   "id": "my_id",
     *       //   "intendedDestinations": [],
     *       //   "kind": "my_kind",
     *       //   "name": "my_name",
     *       //   "targetCountry": "my_targetCountry",
     *       //   "targets": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attributeLanguage": "my_attributeLanguage",
     *   //   "contentLanguage": "my_contentLanguage",
     *   //   "contentType": "my_contentType",
     *   //   "fetchSchedule": {},
     *   //   "fileName": "my_fileName",
     *   //   "format": {},
     *   //   "id": "my_id",
     *   //   "intendedDestinations": [],
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "targetCountry": "my_targetCountry",
     *   //   "targets": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.datafeeds.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.datafeedId The ID of the datafeed.
     * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     * @param {string} params.merchantId The ID of the account that manages the datafeed. This account cannot be a multi-client account.
     * @param {().Datafeed} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params: Params$Resource$Datafeeds$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Datafeeds$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Datafeed>;
    update(
      params: Params$Resource$Datafeeds$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Datafeeds$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Datafeed>,
      callback: BodyResponseCallback<Schema$Datafeed>
    ): void;
    update(
      params: Params$Resource$Datafeeds$Update,
      callback: BodyResponseCallback<Schema$Datafeed>
    ): void;
    update(callback: BodyResponseCallback<Schema$Datafeed>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Datafeeds$Update
        | BodyResponseCallback<Schema$Datafeed>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Datafeed>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Datafeed>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Datafeed> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Datafeeds$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Datafeeds$Update;
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
              rootUrl + '/content/v2/{merchantId}/datafeeds/{datafeedId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'datafeedId'],
        pathParams: ['datafeedId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Datafeed>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Datafeed>(parameters);
      }
    }
  }

  export interface Params$Resource$Datafeeds$Custombatch
    extends StandardParameters {
    /**
     * Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     */
    dryRun?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DatafeedsCustomBatchRequest;
  }
  export interface Params$Resource$Datafeeds$Delete extends StandardParameters {
    /**
     * The ID of the datafeed.
     */
    datafeedId?: string;
    /**
     * Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     */
    dryRun?: boolean;
    /**
     * The ID of the account that manages the datafeed. This account cannot be a multi-client account.
     */
    merchantId?: string;
  }
  export interface Params$Resource$Datafeeds$Fetchnow
    extends StandardParameters {
    /**
     * The ID of the datafeed to be fetched.
     */
    datafeedId?: string;
    /**
     * Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     */
    dryRun?: boolean;
    /**
     * The ID of the account that manages the datafeed. This account cannot be a multi-client account.
     */
    merchantId?: string;
  }
  export interface Params$Resource$Datafeeds$Get extends StandardParameters {
    /**
     * The ID of the datafeed.
     */
    datafeedId?: string;
    /**
     * The ID of the account that manages the datafeed. This account cannot be a multi-client account.
     */
    merchantId?: string;
  }
  export interface Params$Resource$Datafeeds$Insert extends StandardParameters {
    /**
     * Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     */
    dryRun?: boolean;
    /**
     * The ID of the account that manages the datafeed. This account cannot be a multi-client account.
     */
    merchantId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Datafeed;
  }
  export interface Params$Resource$Datafeeds$List extends StandardParameters {
    /**
     * The maximum number of products to return in the response, used for paging.
     */
    maxResults?: number;
    /**
     * The ID of the account that manages the datafeeds. This account cannot be a multi-client account.
     */
    merchantId?: string;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Datafeeds$Update extends StandardParameters {
    /**
     * The ID of the datafeed.
     */
    datafeedId?: string;
    /**
     * Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     */
    dryRun?: boolean;
    /**
     * The ID of the account that manages the datafeed. This account cannot be a multi-client account.
     */
    merchantId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Datafeed;
  }

  export class Resource$Datafeedstatuses {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * content.datafeedstatuses.custombatch
     * @desc Gets multiple Merchant Center datafeed statuses in a single request.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.datafeedstatuses.custombatch({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "entries": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "entries": [],
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.datafeedstatuses.custombatch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().DatafeedstatusesCustomBatchRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    custombatch(
      params: Params$Resource$Datafeedstatuses$Custombatch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    custombatch(
      params?: Params$Resource$Datafeedstatuses$Custombatch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DatafeedstatusesCustomBatchResponse>;
    custombatch(
      params: Params$Resource$Datafeedstatuses$Custombatch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    custombatch(
      params: Params$Resource$Datafeedstatuses$Custombatch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$DatafeedstatusesCustomBatchResponse>,
      callback: BodyResponseCallback<Schema$DatafeedstatusesCustomBatchResponse>
    ): void;
    custombatch(
      params: Params$Resource$Datafeedstatuses$Custombatch,
      callback: BodyResponseCallback<Schema$DatafeedstatusesCustomBatchResponse>
    ): void;
    custombatch(
      callback: BodyResponseCallback<Schema$DatafeedstatusesCustomBatchResponse>
    ): void;
    custombatch(
      paramsOrCallback?:
        | Params$Resource$Datafeedstatuses$Custombatch
        | BodyResponseCallback<Schema$DatafeedstatusesCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DatafeedstatusesCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DatafeedstatusesCustomBatchResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$DatafeedstatusesCustomBatchResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Datafeedstatuses$Custombatch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Datafeedstatuses$Custombatch;
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
            url: (rootUrl + '/content/v2/datafeedstatuses/batch').replace(
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
        createAPIRequest<Schema$DatafeedstatusesCustomBatchResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$DatafeedstatusesCustomBatchResponse>(
          parameters
        );
      }
    }

    /**
     * content.datafeedstatuses.get
     * @desc Retrieves the status of a datafeed from your Merchant Center account.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.datafeedstatuses.get({
     *     // The country for which to get the datafeed status. If this parameter is provided then language must also be provided. Note that this parameter is required for feeds targeting multiple countries and languages, since a feed may have a different status for each target.
     *     country: 'placeholder-value',
     *     // The ID of the datafeed.
     *     datafeedId: 'placeholder-value',
     *     // The language for which to get the datafeed status. If this parameter is provided then country must also be provided. Note that this parameter is required for feeds targeting multiple countries and languages, since a feed may have a different status for each target.
     *     language: 'placeholder-value',
     *     // The ID of the account that manages the datafeed. This account cannot be a multi-client account.
     *     merchantId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "country": "my_country",
     *   //   "datafeedId": "my_datafeedId",
     *   //   "errors": [],
     *   //   "itemsTotal": "my_itemsTotal",
     *   //   "itemsValid": "my_itemsValid",
     *   //   "kind": "my_kind",
     *   //   "language": "my_language",
     *   //   "lastUploadDate": "my_lastUploadDate",
     *   //   "processingStatus": "my_processingStatus",
     *   //   "warnings": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
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
    get(
      params: Params$Resource$Datafeedstatuses$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Datafeedstatuses$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DatafeedStatus>;
    get(
      params: Params$Resource$Datafeedstatuses$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Datafeedstatuses$Get,
      options: MethodOptions | BodyResponseCallback<Schema$DatafeedStatus>,
      callback: BodyResponseCallback<Schema$DatafeedStatus>
    ): void;
    get(
      params: Params$Resource$Datafeedstatuses$Get,
      callback: BodyResponseCallback<Schema$DatafeedStatus>
    ): void;
    get(callback: BodyResponseCallback<Schema$DatafeedStatus>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Datafeedstatuses$Get
        | BodyResponseCallback<Schema$DatafeedStatus>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DatafeedStatus>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DatafeedStatus>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$DatafeedStatus> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Datafeedstatuses$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Datafeedstatuses$Get;
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
              rootUrl + '/content/v2/{merchantId}/datafeedstatuses/{datafeedId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'datafeedId'],
        pathParams: ['datafeedId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DatafeedStatus>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$DatafeedStatus>(parameters);
      }
    }

    /**
     * content.datafeedstatuses.list
     * @desc Lists the statuses of the datafeeds in your Merchant Center account.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.datafeedstatuses.list({
     *     // The maximum number of products to return in the response, used for paging.
     *     maxResults: 'placeholder-value',
     *     // The ID of the account that manages the datafeeds. This account cannot be a multi-client account.
     *     merchantId: 'placeholder-value',
     *     // The token returned by the previous request.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "resources": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
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
    list(
      params: Params$Resource$Datafeedstatuses$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Datafeedstatuses$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DatafeedstatusesListResponse>;
    list(
      params: Params$Resource$Datafeedstatuses$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Datafeedstatuses$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$DatafeedstatusesListResponse>,
      callback: BodyResponseCallback<Schema$DatafeedstatusesListResponse>
    ): void;
    list(
      params: Params$Resource$Datafeedstatuses$List,
      callback: BodyResponseCallback<Schema$DatafeedstatusesListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$DatafeedstatusesListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Datafeedstatuses$List
        | BodyResponseCallback<Schema$DatafeedstatusesListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DatafeedstatusesListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DatafeedstatusesListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$DatafeedstatusesListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Datafeedstatuses$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Datafeedstatuses$List;
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
              rootUrl + '/content/v2/{merchantId}/datafeedstatuses'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DatafeedstatusesListResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$DatafeedstatusesListResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Datafeedstatuses$Custombatch
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$DatafeedstatusesCustomBatchRequest;
  }
  export interface Params$Resource$Datafeedstatuses$Get
    extends StandardParameters {
    /**
     * The country for which to get the datafeed status. If this parameter is provided then language must also be provided. Note that this parameter is required for feeds targeting multiple countries and languages, since a feed may have a different status for each target.
     */
    country?: string;
    /**
     * The ID of the datafeed.
     */
    datafeedId?: string;
    /**
     * The language for which to get the datafeed status. If this parameter is provided then country must also be provided. Note that this parameter is required for feeds targeting multiple countries and languages, since a feed may have a different status for each target.
     */
    language?: string;
    /**
     * The ID of the account that manages the datafeed. This account cannot be a multi-client account.
     */
    merchantId?: string;
  }
  export interface Params$Resource$Datafeedstatuses$List
    extends StandardParameters {
    /**
     * The maximum number of products to return in the response, used for paging.
     */
    maxResults?: number;
    /**
     * The ID of the account that manages the datafeeds. This account cannot be a multi-client account.
     */
    merchantId?: string;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
  }

  export class Resource$Inventory {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * content.inventory.custombatch
     * @desc Updates price and availability for multiple products or stores in a single request. This operation does not update the expiration date of the products.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.inventory.custombatch({
     *     // Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     *     dryRun: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "entries": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "entries": [],
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.inventory.custombatch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     * @param {().InventoryCustomBatchRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    custombatch(
      params: Params$Resource$Inventory$Custombatch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    custombatch(
      params?: Params$Resource$Inventory$Custombatch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$InventoryCustomBatchResponse>;
    custombatch(
      params: Params$Resource$Inventory$Custombatch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    custombatch(
      params: Params$Resource$Inventory$Custombatch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$InventoryCustomBatchResponse>,
      callback: BodyResponseCallback<Schema$InventoryCustomBatchResponse>
    ): void;
    custombatch(
      params: Params$Resource$Inventory$Custombatch,
      callback: BodyResponseCallback<Schema$InventoryCustomBatchResponse>
    ): void;
    custombatch(
      callback: BodyResponseCallback<Schema$InventoryCustomBatchResponse>
    ): void;
    custombatch(
      paramsOrCallback?:
        | Params$Resource$Inventory$Custombatch
        | BodyResponseCallback<Schema$InventoryCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$InventoryCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$InventoryCustomBatchResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$InventoryCustomBatchResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Inventory$Custombatch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Inventory$Custombatch;
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
            url: (rootUrl + '/content/v2/inventory/batch').replace(
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
        createAPIRequest<Schema$InventoryCustomBatchResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$InventoryCustomBatchResponse>(
          parameters
        );
      }
    }

    /**
     * content.inventory.set
     * @desc Updates price and availability of a product in your Merchant Center account.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.inventory.set({
     *     // Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     *     dryRun: 'placeholder-value',
     *     // The ID of the account that contains the product. This account cannot be a multi-client account.
     *     merchantId: 'placeholder-value',
     *     // The REST ID of the product for which to update price and availability.
     *     productId: 'placeholder-value',
     *     // The code of the store for which to update price and availability. Use `online` to update price and availability of an online product.
     *     storeCode: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "availability": "my_availability",
     *       //   "customLabel0": "my_customLabel0",
     *       //   "customLabel1": "my_customLabel1",
     *       //   "customLabel2": "my_customLabel2",
     *       //   "customLabel3": "my_customLabel3",
     *       //   "customLabel4": "my_customLabel4",
     *       //   "installment": {},
     *       //   "instoreProductLocation": "my_instoreProductLocation",
     *       //   "loyaltyPoints": {},
     *       //   "pickup": {},
     *       //   "price": {},
     *       //   "quantity": 0,
     *       //   "salePrice": {},
     *       //   "salePriceEffectiveDate": "my_salePriceEffectiveDate",
     *       //   "sellOnGoogleQuantity": 0
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.inventory.set
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     * @param {string} params.merchantId The ID of the account that contains the product. This account cannot be a multi-client account.
     * @param {string} params.productId The REST ID of the product for which to update price and availability.
     * @param {string} params.storeCode The code of the store for which to update price and availability. Use `online` to update price and availability of an online product.
     * @param {().InventorySetRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    set(
      params: Params$Resource$Inventory$Set,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    set(
      params?: Params$Resource$Inventory$Set,
      options?: MethodOptions
    ): GaxiosPromise<Schema$InventorySetResponse>;
    set(
      params: Params$Resource$Inventory$Set,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    set(
      params: Params$Resource$Inventory$Set,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$InventorySetResponse>,
      callback: BodyResponseCallback<Schema$InventorySetResponse>
    ): void;
    set(
      params: Params$Resource$Inventory$Set,
      callback: BodyResponseCallback<Schema$InventorySetResponse>
    ): void;
    set(callback: BodyResponseCallback<Schema$InventorySetResponse>): void;
    set(
      paramsOrCallback?:
        | Params$Resource$Inventory$Set
        | BodyResponseCallback<Schema$InventorySetResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$InventorySetResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$InventorySetResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$InventorySetResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Inventory$Set;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Inventory$Set;
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
              '/content/v2/{merchantId}/inventory/{storeCode}/products/{productId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'storeCode', 'productId'],
        pathParams: ['merchantId', 'productId', 'storeCode'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$InventorySetResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$InventorySetResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Inventory$Custombatch
    extends StandardParameters {
    /**
     * Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     */
    dryRun?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$InventoryCustomBatchRequest;
  }
  export interface Params$Resource$Inventory$Set extends StandardParameters {
    /**
     * Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     */
    dryRun?: boolean;
    /**
     * The ID of the account that contains the product. This account cannot be a multi-client account.
     */
    merchantId?: string;
    /**
     * The REST ID of the product for which to update price and availability.
     */
    productId?: string;
    /**
     * The code of the store for which to update price and availability. Use `online` to update price and availability of an online product.
     */
    storeCode?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$InventorySetRequest;
  }

  export class Resource$Liasettings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * content.liasettings.custombatch
     * @desc Retrieves and/or updates the LIA settings of multiple accounts in a single request.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.liasettings.custombatch({
     *     // Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     *     dryRun: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "entries": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "entries": [],
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.liasettings.custombatch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     * @param {().LiasettingsCustomBatchRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    custombatch(
      params: Params$Resource$Liasettings$Custombatch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    custombatch(
      params?: Params$Resource$Liasettings$Custombatch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiasettingsCustomBatchResponse>;
    custombatch(
      params: Params$Resource$Liasettings$Custombatch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    custombatch(
      params: Params$Resource$Liasettings$Custombatch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$LiasettingsCustomBatchResponse>,
      callback: BodyResponseCallback<Schema$LiasettingsCustomBatchResponse>
    ): void;
    custombatch(
      params: Params$Resource$Liasettings$Custombatch,
      callback: BodyResponseCallback<Schema$LiasettingsCustomBatchResponse>
    ): void;
    custombatch(
      callback: BodyResponseCallback<Schema$LiasettingsCustomBatchResponse>
    ): void;
    custombatch(
      paramsOrCallback?:
        | Params$Resource$Liasettings$Custombatch
        | BodyResponseCallback<Schema$LiasettingsCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LiasettingsCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LiasettingsCustomBatchResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$LiasettingsCustomBatchResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Liasettings$Custombatch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Liasettings$Custombatch;
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
            url: (rootUrl + '/content/v2/liasettings/batch').replace(
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
        createAPIRequest<Schema$LiasettingsCustomBatchResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$LiasettingsCustomBatchResponse>(
          parameters
        );
      }
    }

    /**
     * content.liasettings.get
     * @desc Retrieves the LIA settings of the account.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.liasettings.get({
     *     // The ID of the account for which to get or update LIA settings.
     *     accountId: 'placeholder-value',
     *     // The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     *     merchantId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "countrySettings": [],
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.liasettings.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId The ID of the account for which to get or update LIA settings.
     * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Liasettings$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Liasettings$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiaSettings>;
    get(
      params: Params$Resource$Liasettings$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Liasettings$Get,
      options: MethodOptions | BodyResponseCallback<Schema$LiaSettings>,
      callback: BodyResponseCallback<Schema$LiaSettings>
    ): void;
    get(
      params: Params$Resource$Liasettings$Get,
      callback: BodyResponseCallback<Schema$LiaSettings>
    ): void;
    get(callback: BodyResponseCallback<Schema$LiaSettings>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Liasettings$Get
        | BodyResponseCallback<Schema$LiaSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LiaSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LiaSettings>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$LiaSettings> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Liasettings$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Liasettings$Get;
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
              rootUrl + '/content/v2/{merchantId}/liasettings/{accountId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'accountId'],
        pathParams: ['accountId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LiaSettings>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$LiaSettings>(parameters);
      }
    }

    /**
     * content.liasettings.getaccessiblegmbaccounts
     * @desc Retrieves the list of accessible Google My Business accounts.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.liasettings.getaccessiblegmbaccounts({
     *     // The ID of the account for which to retrieve accessible Google My Business accounts.
     *     accountId: 'placeholder-value',
     *     // The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     *     merchantId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "gmbAccounts": [],
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.liasettings.getaccessiblegmbaccounts
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId The ID of the account for which to retrieve accessible Google My Business accounts.
     * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getaccessiblegmbaccounts(
      params: Params$Resource$Liasettings$Getaccessiblegmbaccounts,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getaccessiblegmbaccounts(
      params?: Params$Resource$Liasettings$Getaccessiblegmbaccounts,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiasettingsGetAccessibleGmbAccountsResponse>;
    getaccessiblegmbaccounts(
      params: Params$Resource$Liasettings$Getaccessiblegmbaccounts,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getaccessiblegmbaccounts(
      params: Params$Resource$Liasettings$Getaccessiblegmbaccounts,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$LiasettingsGetAccessibleGmbAccountsResponse
          >,
      callback: BodyResponseCallback<
        Schema$LiasettingsGetAccessibleGmbAccountsResponse
      >
    ): void;
    getaccessiblegmbaccounts(
      params: Params$Resource$Liasettings$Getaccessiblegmbaccounts,
      callback: BodyResponseCallback<
        Schema$LiasettingsGetAccessibleGmbAccountsResponse
      >
    ): void;
    getaccessiblegmbaccounts(
      callback: BodyResponseCallback<
        Schema$LiasettingsGetAccessibleGmbAccountsResponse
      >
    ): void;
    getaccessiblegmbaccounts(
      paramsOrCallback?:
        | Params$Resource$Liasettings$Getaccessiblegmbaccounts
        | BodyResponseCallback<
            Schema$LiasettingsGetAccessibleGmbAccountsResponse
          >
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<
            Schema$LiasettingsGetAccessibleGmbAccountsResponse
          >
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<
            Schema$LiasettingsGetAccessibleGmbAccountsResponse
          >
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$LiasettingsGetAccessibleGmbAccountsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Liasettings$Getaccessiblegmbaccounts;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Liasettings$Getaccessiblegmbaccounts;
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
              '/content/v2/{merchantId}/liasettings/{accountId}/accessiblegmbaccounts'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'accountId'],
        pathParams: ['accountId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LiasettingsGetAccessibleGmbAccountsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<
          Schema$LiasettingsGetAccessibleGmbAccountsResponse
        >(parameters);
      }
    }

    /**
     * content.liasettings.list
     * @desc Lists the LIA settings of the sub-accounts in your Merchant Center account.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.liasettings.list({
     *     // The maximum number of LIA settings to return in the response, used for paging.
     *     maxResults: 'placeholder-value',
     *     // The ID of the managing account. This must be a multi-client account.
     *     merchantId: 'placeholder-value',
     *     // The token returned by the previous request.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "resources": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
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
    list(
      params: Params$Resource$Liasettings$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Liasettings$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiasettingsListResponse>;
    list(
      params: Params$Resource$Liasettings$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Liasettings$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$LiasettingsListResponse>,
      callback: BodyResponseCallback<Schema$LiasettingsListResponse>
    ): void;
    list(
      params: Params$Resource$Liasettings$List,
      callback: BodyResponseCallback<Schema$LiasettingsListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$LiasettingsListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Liasettings$List
        | BodyResponseCallback<Schema$LiasettingsListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LiasettingsListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LiasettingsListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$LiasettingsListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Liasettings$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Liasettings$List;
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
            url: (rootUrl + '/content/v2/{merchantId}/liasettings').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LiasettingsListResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$LiasettingsListResponse>(parameters);
      }
    }

    /**
     * content.liasettings.listposdataproviders
     * @desc Retrieves the list of POS data providers that have active settings for the all eiligible countries.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.liasettings.listposdataproviders({});
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "posDataProviders": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.liasettings.listposdataproviders
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listposdataproviders(
      params: Params$Resource$Liasettings$Listposdataproviders,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    listposdataproviders(
      params?: Params$Resource$Liasettings$Listposdataproviders,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiasettingsListPosDataProvidersResponse>;
    listposdataproviders(
      params: Params$Resource$Liasettings$Listposdataproviders,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listposdataproviders(
      params: Params$Resource$Liasettings$Listposdataproviders,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$LiasettingsListPosDataProvidersResponse>,
      callback: BodyResponseCallback<
        Schema$LiasettingsListPosDataProvidersResponse
      >
    ): void;
    listposdataproviders(
      params: Params$Resource$Liasettings$Listposdataproviders,
      callback: BodyResponseCallback<
        Schema$LiasettingsListPosDataProvidersResponse
      >
    ): void;
    listposdataproviders(
      callback: BodyResponseCallback<
        Schema$LiasettingsListPosDataProvidersResponse
      >
    ): void;
    listposdataproviders(
      paramsOrCallback?:
        | Params$Resource$Liasettings$Listposdataproviders
        | BodyResponseCallback<Schema$LiasettingsListPosDataProvidersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LiasettingsListPosDataProvidersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LiasettingsListPosDataProvidersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$LiasettingsListPosDataProvidersResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Liasettings$Listposdataproviders;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Liasettings$Listposdataproviders;
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
            url: (rootUrl + '/content/v2/liasettings/posdataproviders').replace(
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
        createAPIRequest<Schema$LiasettingsListPosDataProvidersResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$LiasettingsListPosDataProvidersResponse>(
          parameters
        );
      }
    }

    /**
     * content.liasettings.requestgmbaccess
     * @desc Requests access to a specified Google My Business account.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.liasettings.requestgmbaccess({
     *     // The ID of the account for which GMB access is requested.
     *     accountId: 'placeholder-value',
     *     // The email of the Google My Business account.
     *     gmbEmail: 'placeholder-value',
     *     // The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     *     merchantId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.liasettings.requestgmbaccess
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId The ID of the account for which GMB access is requested.
     * @param {string} params.gmbEmail The email of the Google My Business account.
     * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    requestgmbaccess(
      params: Params$Resource$Liasettings$Requestgmbaccess,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    requestgmbaccess(
      params?: Params$Resource$Liasettings$Requestgmbaccess,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiasettingsRequestGmbAccessResponse>;
    requestgmbaccess(
      params: Params$Resource$Liasettings$Requestgmbaccess,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    requestgmbaccess(
      params: Params$Resource$Liasettings$Requestgmbaccess,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$LiasettingsRequestGmbAccessResponse>,
      callback: BodyResponseCallback<Schema$LiasettingsRequestGmbAccessResponse>
    ): void;
    requestgmbaccess(
      params: Params$Resource$Liasettings$Requestgmbaccess,
      callback: BodyResponseCallback<Schema$LiasettingsRequestGmbAccessResponse>
    ): void;
    requestgmbaccess(
      callback: BodyResponseCallback<Schema$LiasettingsRequestGmbAccessResponse>
    ): void;
    requestgmbaccess(
      paramsOrCallback?:
        | Params$Resource$Liasettings$Requestgmbaccess
        | BodyResponseCallback<Schema$LiasettingsRequestGmbAccessResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LiasettingsRequestGmbAccessResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LiasettingsRequestGmbAccessResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$LiasettingsRequestGmbAccessResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Liasettings$Requestgmbaccess;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Liasettings$Requestgmbaccess;
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
              '/content/v2/{merchantId}/liasettings/{accountId}/requestgmbaccess'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'accountId', 'gmbEmail'],
        pathParams: ['accountId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LiasettingsRequestGmbAccessResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$LiasettingsRequestGmbAccessResponse>(
          parameters
        );
      }
    }

    /**
     * content.liasettings.requestinventoryverification
     * @desc Requests inventory validation for the specified country.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.liasettings.requestinventoryverification({
     *     // The ID of the account that manages the order. This cannot be a multi-client account.
     *     accountId: 'placeholder-value',
     *     // The country for which inventory validation is requested.
     *     country: 'placeholder-value',
     *     // The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     *     merchantId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.liasettings.requestinventoryverification
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId The ID of the account that manages the order. This cannot be a multi-client account.
     * @param {string} params.country The country for which inventory validation is requested.
     * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    requestinventoryverification(
      params: Params$Resource$Liasettings$Requestinventoryverification,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    requestinventoryverification(
      params?: Params$Resource$Liasettings$Requestinventoryverification,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiasettingsRequestInventoryVerificationResponse>;
    requestinventoryverification(
      params: Params$Resource$Liasettings$Requestinventoryverification,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    requestinventoryverification(
      params: Params$Resource$Liasettings$Requestinventoryverification,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$LiasettingsRequestInventoryVerificationResponse
          >,
      callback: BodyResponseCallback<
        Schema$LiasettingsRequestInventoryVerificationResponse
      >
    ): void;
    requestinventoryverification(
      params: Params$Resource$Liasettings$Requestinventoryverification,
      callback: BodyResponseCallback<
        Schema$LiasettingsRequestInventoryVerificationResponse
      >
    ): void;
    requestinventoryverification(
      callback: BodyResponseCallback<
        Schema$LiasettingsRequestInventoryVerificationResponse
      >
    ): void;
    requestinventoryverification(
      paramsOrCallback?:
        | Params$Resource$Liasettings$Requestinventoryverification
        | BodyResponseCallback<
            Schema$LiasettingsRequestInventoryVerificationResponse
          >
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<
            Schema$LiasettingsRequestInventoryVerificationResponse
          >
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<
            Schema$LiasettingsRequestInventoryVerificationResponse
          >
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$LiasettingsRequestInventoryVerificationResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Liasettings$Requestinventoryverification;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Liasettings$Requestinventoryverification;
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
              '/content/v2/{merchantId}/liasettings/{accountId}/requestinventoryverification/{country}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'accountId', 'country'],
        pathParams: ['accountId', 'country', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<
          Schema$LiasettingsRequestInventoryVerificationResponse
        >(parameters, callback as BodyResponseCallback<{} | void>);
      } else {
        return createAPIRequest<
          Schema$LiasettingsRequestInventoryVerificationResponse
        >(parameters);
      }
    }

    /**
     * content.liasettings.setinventoryverificationcontact
     * @desc Sets the inventory verification contract for the specified country.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.liasettings.setinventoryverificationcontact({
     *     // The ID of the account that manages the order. This cannot be a multi-client account.
     *     accountId: 'placeholder-value',
     *     // The email of the inventory verification contact.
     *     contactEmail: 'placeholder-value',
     *     // The name of the inventory verification contact.
     *     contactName: 'placeholder-value',
     *     // The country for which inventory verification is requested.
     *     country: 'placeholder-value',
     *     // The language for which inventory verification is requested.
     *     language: 'placeholder-value',
     *     // The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     *     merchantId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.liasettings.setinventoryverificationcontact
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId The ID of the account that manages the order. This cannot be a multi-client account.
     * @param {string} params.contactEmail The email of the inventory verification contact.
     * @param {string} params.contactName The name of the inventory verification contact.
     * @param {string} params.country The country for which inventory verification is requested.
     * @param {string} params.language The language for which inventory verification is requested.
     * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setinventoryverificationcontact(
      params: Params$Resource$Liasettings$Setinventoryverificationcontact,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setinventoryverificationcontact(
      params?: Params$Resource$Liasettings$Setinventoryverificationcontact,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiasettingsSetInventoryVerificationContactResponse>;
    setinventoryverificationcontact(
      params: Params$Resource$Liasettings$Setinventoryverificationcontact,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setinventoryverificationcontact(
      params: Params$Resource$Liasettings$Setinventoryverificationcontact,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$LiasettingsSetInventoryVerificationContactResponse
          >,
      callback: BodyResponseCallback<
        Schema$LiasettingsSetInventoryVerificationContactResponse
      >
    ): void;
    setinventoryverificationcontact(
      params: Params$Resource$Liasettings$Setinventoryverificationcontact,
      callback: BodyResponseCallback<
        Schema$LiasettingsSetInventoryVerificationContactResponse
      >
    ): void;
    setinventoryverificationcontact(
      callback: BodyResponseCallback<
        Schema$LiasettingsSetInventoryVerificationContactResponse
      >
    ): void;
    setinventoryverificationcontact(
      paramsOrCallback?:
        | Params$Resource$Liasettings$Setinventoryverificationcontact
        | BodyResponseCallback<
            Schema$LiasettingsSetInventoryVerificationContactResponse
          >
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<
            Schema$LiasettingsSetInventoryVerificationContactResponse
          >
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<
            Schema$LiasettingsSetInventoryVerificationContactResponse
          >
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$LiasettingsSetInventoryVerificationContactResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Liasettings$Setinventoryverificationcontact;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Liasettings$Setinventoryverificationcontact;
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
              '/content/v2/{merchantId}/liasettings/{accountId}/setinventoryverificationcontact'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [
          'merchantId',
          'accountId',
          'contactEmail',
          'contactName',
          'country',
          'language',
        ],
        pathParams: ['accountId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<
          Schema$LiasettingsSetInventoryVerificationContactResponse
        >(parameters, callback as BodyResponseCallback<{} | void>);
      } else {
        return createAPIRequest<
          Schema$LiasettingsSetInventoryVerificationContactResponse
        >(parameters);
      }
    }

    /**
     * content.liasettings.setposdataprovider
     * @desc Sets the POS data provider for the specified country.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.liasettings.setposdataprovider({
     *     // The ID of the account for which to retrieve accessible Google My Business accounts.
     *     accountId: 'placeholder-value',
     *     // The country for which the POS data provider is selected.
     *     country: 'placeholder-value',
     *     // The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     *     merchantId: 'placeholder-value',
     *     // The ID of POS data provider.
     *     posDataProviderId: 'placeholder-value',
     *     // The account ID by which this merchant is known to the POS data provider.
     *     posExternalAccountId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.liasettings.setposdataprovider
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId The ID of the account for which to retrieve accessible Google My Business accounts.
     * @param {string} params.country The country for which the POS data provider is selected.
     * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @param {string=} params.posDataProviderId The ID of POS data provider.
     * @param {string=} params.posExternalAccountId The account ID by which this merchant is known to the POS data provider.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setposdataprovider(
      params: Params$Resource$Liasettings$Setposdataprovider,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setposdataprovider(
      params?: Params$Resource$Liasettings$Setposdataprovider,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiasettingsSetPosDataProviderResponse>;
    setposdataprovider(
      params: Params$Resource$Liasettings$Setposdataprovider,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setposdataprovider(
      params: Params$Resource$Liasettings$Setposdataprovider,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$LiasettingsSetPosDataProviderResponse>,
      callback: BodyResponseCallback<
        Schema$LiasettingsSetPosDataProviderResponse
      >
    ): void;
    setposdataprovider(
      params: Params$Resource$Liasettings$Setposdataprovider,
      callback: BodyResponseCallback<
        Schema$LiasettingsSetPosDataProviderResponse
      >
    ): void;
    setposdataprovider(
      callback: BodyResponseCallback<
        Schema$LiasettingsSetPosDataProviderResponse
      >
    ): void;
    setposdataprovider(
      paramsOrCallback?:
        | Params$Resource$Liasettings$Setposdataprovider
        | BodyResponseCallback<Schema$LiasettingsSetPosDataProviderResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LiasettingsSetPosDataProviderResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LiasettingsSetPosDataProviderResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$LiasettingsSetPosDataProviderResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Liasettings$Setposdataprovider;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Liasettings$Setposdataprovider;
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
              '/content/v2/{merchantId}/liasettings/{accountId}/setposdataprovider'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'accountId', 'country'],
        pathParams: ['accountId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LiasettingsSetPosDataProviderResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$LiasettingsSetPosDataProviderResponse>(
          parameters
        );
      }
    }

    /**
     * content.liasettings.update
     * @desc Updates the LIA settings of the account. Any fields that are not provided are deleted from the resource.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.liasettings.update({
     *     // The ID of the account for which to get or update LIA settings.
     *     accountId: 'placeholder-value',
     *     // Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     *     dryRun: 'placeholder-value',
     *     // The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     *     merchantId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accountId": "my_accountId",
     *       //   "countrySettings": [],
     *       //   "kind": "my_kind"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "countrySettings": [],
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.liasettings.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId The ID of the account for which to get or update LIA settings.
     * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @param {().LiaSettings} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params: Params$Resource$Liasettings$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Liasettings$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiaSettings>;
    update(
      params: Params$Resource$Liasettings$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Liasettings$Update,
      options: MethodOptions | BodyResponseCallback<Schema$LiaSettings>,
      callback: BodyResponseCallback<Schema$LiaSettings>
    ): void;
    update(
      params: Params$Resource$Liasettings$Update,
      callback: BodyResponseCallback<Schema$LiaSettings>
    ): void;
    update(callback: BodyResponseCallback<Schema$LiaSettings>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Liasettings$Update
        | BodyResponseCallback<Schema$LiaSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LiaSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LiaSettings>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$LiaSettings> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Liasettings$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Liasettings$Update;
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
              rootUrl + '/content/v2/{merchantId}/liasettings/{accountId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'accountId'],
        pathParams: ['accountId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LiaSettings>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$LiaSettings>(parameters);
      }
    }
  }

  export interface Params$Resource$Liasettings$Custombatch
    extends StandardParameters {
    /**
     * Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     */
    dryRun?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LiasettingsCustomBatchRequest;
  }
  export interface Params$Resource$Liasettings$Get extends StandardParameters {
    /**
     * The ID of the account for which to get or update LIA settings.
     */
    accountId?: string;
    /**
     * The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     */
    merchantId?: string;
  }
  export interface Params$Resource$Liasettings$Getaccessiblegmbaccounts
    extends StandardParameters {
    /**
     * The ID of the account for which to retrieve accessible Google My Business accounts.
     */
    accountId?: string;
    /**
     * The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     */
    merchantId?: string;
  }
  export interface Params$Resource$Liasettings$List extends StandardParameters {
    /**
     * The maximum number of LIA settings to return in the response, used for paging.
     */
    maxResults?: number;
    /**
     * The ID of the managing account. This must be a multi-client account.
     */
    merchantId?: string;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Liasettings$Listposdataproviders
    extends StandardParameters {}
  export interface Params$Resource$Liasettings$Requestgmbaccess
    extends StandardParameters {
    /**
     * The ID of the account for which GMB access is requested.
     */
    accountId?: string;
    /**
     * The email of the Google My Business account.
     */
    gmbEmail?: string;
    /**
     * The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     */
    merchantId?: string;
  }
  export interface Params$Resource$Liasettings$Requestinventoryverification
    extends StandardParameters {
    /**
     * The ID of the account that manages the order. This cannot be a multi-client account.
     */
    accountId?: string;
    /**
     * The country for which inventory validation is requested.
     */
    country?: string;
    /**
     * The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     */
    merchantId?: string;
  }
  export interface Params$Resource$Liasettings$Setinventoryverificationcontact
    extends StandardParameters {
    /**
     * The ID of the account that manages the order. This cannot be a multi-client account.
     */
    accountId?: string;
    /**
     * The email of the inventory verification contact.
     */
    contactEmail?: string;
    /**
     * The name of the inventory verification contact.
     */
    contactName?: string;
    /**
     * The country for which inventory verification is requested.
     */
    country?: string;
    /**
     * The language for which inventory verification is requested.
     */
    language?: string;
    /**
     * The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     */
    merchantId?: string;
  }
  export interface Params$Resource$Liasettings$Setposdataprovider
    extends StandardParameters {
    /**
     * The ID of the account for which to retrieve accessible Google My Business accounts.
     */
    accountId?: string;
    /**
     * The country for which the POS data provider is selected.
     */
    country?: string;
    /**
     * The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     */
    merchantId?: string;
    /**
     * The ID of POS data provider.
     */
    posDataProviderId?: string;
    /**
     * The account ID by which this merchant is known to the POS data provider.
     */
    posExternalAccountId?: string;
  }
  export interface Params$Resource$Liasettings$Update
    extends StandardParameters {
    /**
     * The ID of the account for which to get or update LIA settings.
     */
    accountId?: string;
    /**
     * Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     */
    dryRun?: boolean;
    /**
     * The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     */
    merchantId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LiaSettings;
  }

  export class Resource$Orderinvoices {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * content.orderinvoices.createchargeinvoice
     * @desc Creates a charge invoice for a shipment group, and triggers a charge capture for orderinvoice enabled orders.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.orderinvoices.createchargeinvoice({
     *     // The ID of the account that manages the order. This cannot be a multi-client account.
     *     merchantId: 'placeholder-value',
     *     // The ID of the order.
     *     orderId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "invoiceId": "my_invoiceId",
     *       //   "invoiceSummary": {},
     *       //   "lineItemInvoices": [],
     *       //   "operationId": "my_operationId",
     *       //   "shipmentGroupId": "my_shipmentGroupId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "executionStatus": "my_executionStatus",
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.orderinvoices.createchargeinvoice
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
     * @param {string} params.orderId The ID of the order.
     * @param {().OrderinvoicesCreateChargeInvoiceRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    createchargeinvoice(
      params: Params$Resource$Orderinvoices$Createchargeinvoice,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    createchargeinvoice(
      params?: Params$Resource$Orderinvoices$Createchargeinvoice,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OrderinvoicesCreateChargeInvoiceResponse>;
    createchargeinvoice(
      params: Params$Resource$Orderinvoices$Createchargeinvoice,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    createchargeinvoice(
      params: Params$Resource$Orderinvoices$Createchargeinvoice,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$OrderinvoicesCreateChargeInvoiceResponse>,
      callback: BodyResponseCallback<
        Schema$OrderinvoicesCreateChargeInvoiceResponse
      >
    ): void;
    createchargeinvoice(
      params: Params$Resource$Orderinvoices$Createchargeinvoice,
      callback: BodyResponseCallback<
        Schema$OrderinvoicesCreateChargeInvoiceResponse
      >
    ): void;
    createchargeinvoice(
      callback: BodyResponseCallback<
        Schema$OrderinvoicesCreateChargeInvoiceResponse
      >
    ): void;
    createchargeinvoice(
      paramsOrCallback?:
        | Params$Resource$Orderinvoices$Createchargeinvoice
        | BodyResponseCallback<Schema$OrderinvoicesCreateChargeInvoiceResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OrderinvoicesCreateChargeInvoiceResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OrderinvoicesCreateChargeInvoiceResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$OrderinvoicesCreateChargeInvoiceResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Orderinvoices$Createchargeinvoice;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Orderinvoices$Createchargeinvoice;
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
              '/content/v2/{merchantId}/orderinvoices/{orderId}/createChargeInvoice'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'orderId'],
        pathParams: ['merchantId', 'orderId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OrderinvoicesCreateChargeInvoiceResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<
          Schema$OrderinvoicesCreateChargeInvoiceResponse
        >(parameters);
      }
    }

    /**
     * content.orderinvoices.createrefundinvoice
     * @desc Creates a refund invoice for one or more shipment groups, and triggers a refund for orderinvoice enabled orders. This can only be used for line items that have previously been charged using `createChargeInvoice`. All amounts (except for the summary) are incremental with respect to the previous invoice.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.orderinvoices.createrefundinvoice({
     *     // The ID of the account that manages the order. This cannot be a multi-client account.
     *     merchantId: 'placeholder-value',
     *     // The ID of the order.
     *     orderId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "invoiceId": "my_invoiceId",
     *       //   "operationId": "my_operationId",
     *       //   "refundOnlyOption": {},
     *       //   "returnOption": {},
     *       //   "shipmentInvoices": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "executionStatus": "my_executionStatus",
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.orderinvoices.createrefundinvoice
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
     * @param {string} params.orderId The ID of the order.
     * @param {().OrderinvoicesCreateRefundInvoiceRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    createrefundinvoice(
      params: Params$Resource$Orderinvoices$Createrefundinvoice,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    createrefundinvoice(
      params?: Params$Resource$Orderinvoices$Createrefundinvoice,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OrderinvoicesCreateRefundInvoiceResponse>;
    createrefundinvoice(
      params: Params$Resource$Orderinvoices$Createrefundinvoice,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    createrefundinvoice(
      params: Params$Resource$Orderinvoices$Createrefundinvoice,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$OrderinvoicesCreateRefundInvoiceResponse>,
      callback: BodyResponseCallback<
        Schema$OrderinvoicesCreateRefundInvoiceResponse
      >
    ): void;
    createrefundinvoice(
      params: Params$Resource$Orderinvoices$Createrefundinvoice,
      callback: BodyResponseCallback<
        Schema$OrderinvoicesCreateRefundInvoiceResponse
      >
    ): void;
    createrefundinvoice(
      callback: BodyResponseCallback<
        Schema$OrderinvoicesCreateRefundInvoiceResponse
      >
    ): void;
    createrefundinvoice(
      paramsOrCallback?:
        | Params$Resource$Orderinvoices$Createrefundinvoice
        | BodyResponseCallback<Schema$OrderinvoicesCreateRefundInvoiceResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OrderinvoicesCreateRefundInvoiceResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OrderinvoicesCreateRefundInvoiceResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$OrderinvoicesCreateRefundInvoiceResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Orderinvoices$Createrefundinvoice;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Orderinvoices$Createrefundinvoice;
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
              '/content/v2/{merchantId}/orderinvoices/{orderId}/createRefundInvoice'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'orderId'],
        pathParams: ['merchantId', 'orderId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OrderinvoicesCreateRefundInvoiceResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<
          Schema$OrderinvoicesCreateRefundInvoiceResponse
        >(parameters);
      }
    }
  }

  export interface Params$Resource$Orderinvoices$Createchargeinvoice
    extends StandardParameters {
    /**
     * The ID of the account that manages the order. This cannot be a multi-client account.
     */
    merchantId?: string;
    /**
     * The ID of the order.
     */
    orderId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$OrderinvoicesCreateChargeInvoiceRequest;
  }
  export interface Params$Resource$Orderinvoices$Createrefundinvoice
    extends StandardParameters {
    /**
     * The ID of the account that manages the order. This cannot be a multi-client account.
     */
    merchantId?: string;
    /**
     * The ID of the order.
     */
    orderId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$OrderinvoicesCreateRefundInvoiceRequest;
  }

  export class Resource$Orderreports {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * content.orderreports.listdisbursements
     * @desc Retrieves a report for disbursements from your Merchant Center account.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.orderreports.listdisbursements({
     *     // The last date which disbursements occurred. In ISO 8601 format. Default: current date.
     *     disbursementEndDate: 'placeholder-value',
     *     // The first date which disbursements occurred. In ISO 8601 format.
     *     disbursementStartDate: 'placeholder-value',
     *     // The maximum number of disbursements to return in the response, used for paging.
     *     maxResults: 'placeholder-value',
     *     // The ID of the account that manages the order. This cannot be a multi-client account.
     *     merchantId: 'placeholder-value',
     *     // The token returned by the previous request.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "disbursements": [],
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
     * @alias content.orderreports.listdisbursements
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.disbursementEndDate The last date which disbursements occurred. In ISO 8601 format. Default: current date.
     * @param {string} params.disbursementStartDate The first date which disbursements occurred. In ISO 8601 format.
     * @param {integer=} params.maxResults The maximum number of disbursements to return in the response, used for paging.
     * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
     * @param {string=} params.pageToken The token returned by the previous request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listdisbursements(
      params: Params$Resource$Orderreports$Listdisbursements,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    listdisbursements(
      params?: Params$Resource$Orderreports$Listdisbursements,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OrderreportsListDisbursementsResponse>;
    listdisbursements(
      params: Params$Resource$Orderreports$Listdisbursements,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listdisbursements(
      params: Params$Resource$Orderreports$Listdisbursements,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$OrderreportsListDisbursementsResponse>,
      callback: BodyResponseCallback<
        Schema$OrderreportsListDisbursementsResponse
      >
    ): void;
    listdisbursements(
      params: Params$Resource$Orderreports$Listdisbursements,
      callback: BodyResponseCallback<
        Schema$OrderreportsListDisbursementsResponse
      >
    ): void;
    listdisbursements(
      callback: BodyResponseCallback<
        Schema$OrderreportsListDisbursementsResponse
      >
    ): void;
    listdisbursements(
      paramsOrCallback?:
        | Params$Resource$Orderreports$Listdisbursements
        | BodyResponseCallback<Schema$OrderreportsListDisbursementsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OrderreportsListDisbursementsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OrderreportsListDisbursementsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$OrderreportsListDisbursementsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Orderreports$Listdisbursements;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Orderreports$Listdisbursements;
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
              rootUrl + '/content/v2/{merchantId}/orderreports/disbursements'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'disbursementStartDate'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OrderreportsListDisbursementsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$OrderreportsListDisbursementsResponse>(
          parameters
        );
      }
    }

    /**
     * content.orderreports.listtransactions
     * @desc Retrieves a list of transactions for a disbursement from your Merchant Center account.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.orderreports.listtransactions({
     *     // The Google-provided ID of the disbursement (found in Wallet).
     *     disbursementId: 'placeholder-value',
     *     // The maximum number of disbursements to return in the response, used for paging.
     *     maxResults: 'placeholder-value',
     *     // The ID of the account that manages the order. This cannot be a multi-client account.
     *     merchantId: 'placeholder-value',
     *     // The token returned by the previous request.
     *     pageToken: 'placeholder-value',
     *     // The last date in which transaction occurred. In ISO 8601 format. Default: current date.
     *     transactionEndDate: 'placeholder-value',
     *     // The first date in which transaction occurred. In ISO 8601 format.
     *     transactionStartDate: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "transactions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.orderreports.listtransactions
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.disbursementId The Google-provided ID of the disbursement (found in Wallet).
     * @param {integer=} params.maxResults The maximum number of disbursements to return in the response, used for paging.
     * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
     * @param {string=} params.pageToken The token returned by the previous request.
     * @param {string=} params.transactionEndDate The last date in which transaction occurred. In ISO 8601 format. Default: current date.
     * @param {string} params.transactionStartDate The first date in which transaction occurred. In ISO 8601 format.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listtransactions(
      params: Params$Resource$Orderreports$Listtransactions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    listtransactions(
      params?: Params$Resource$Orderreports$Listtransactions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OrderreportsListTransactionsResponse>;
    listtransactions(
      params: Params$Resource$Orderreports$Listtransactions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listtransactions(
      params: Params$Resource$Orderreports$Listtransactions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$OrderreportsListTransactionsResponse>,
      callback: BodyResponseCallback<
        Schema$OrderreportsListTransactionsResponse
      >
    ): void;
    listtransactions(
      params: Params$Resource$Orderreports$Listtransactions,
      callback: BodyResponseCallback<
        Schema$OrderreportsListTransactionsResponse
      >
    ): void;
    listtransactions(
      callback: BodyResponseCallback<
        Schema$OrderreportsListTransactionsResponse
      >
    ): void;
    listtransactions(
      paramsOrCallback?:
        | Params$Resource$Orderreports$Listtransactions
        | BodyResponseCallback<Schema$OrderreportsListTransactionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OrderreportsListTransactionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OrderreportsListTransactionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$OrderreportsListTransactionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Orderreports$Listtransactions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Orderreports$Listtransactions;
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
              '/content/v2/{merchantId}/orderreports/disbursements/{disbursementId}/transactions'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [
          'merchantId',
          'disbursementId',
          'transactionStartDate',
        ],
        pathParams: ['disbursementId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OrderreportsListTransactionsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$OrderreportsListTransactionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Orderreports$Listdisbursements
    extends StandardParameters {
    /**
     * The last date which disbursements occurred. In ISO 8601 format. Default: current date.
     */
    disbursementEndDate?: string;
    /**
     * The first date which disbursements occurred. In ISO 8601 format.
     */
    disbursementStartDate?: string;
    /**
     * The maximum number of disbursements to return in the response, used for paging.
     */
    maxResults?: number;
    /**
     * The ID of the account that manages the order. This cannot be a multi-client account.
     */
    merchantId?: string;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Orderreports$Listtransactions
    extends StandardParameters {
    /**
     * The Google-provided ID of the disbursement (found in Wallet).
     */
    disbursementId?: string;
    /**
     * The maximum number of disbursements to return in the response, used for paging.
     */
    maxResults?: number;
    /**
     * The ID of the account that manages the order. This cannot be a multi-client account.
     */
    merchantId?: string;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
    /**
     * The last date in which transaction occurred. In ISO 8601 format. Default: current date.
     */
    transactionEndDate?: string;
    /**
     * The first date in which transaction occurred. In ISO 8601 format.
     */
    transactionStartDate?: string;
  }

  export class Resource$Orderreturns {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * content.orderreturns.get
     * @desc Retrieves an order return from your Merchant Center account.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.orderreturns.get({
     *     // The ID of the account that manages the order. This cannot be a multi-client account.
     *     merchantId: 'placeholder-value',
     *     // Merchant order return ID generated by Google.
     *     returnId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "creationDate": "my_creationDate",
     *   //   "merchantOrderId": "my_merchantOrderId",
     *   //   "orderId": "my_orderId",
     *   //   "orderReturnId": "my_orderReturnId",
     *   //   "returnItems": [],
     *   //   "returnShipments": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.orderreturns.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
     * @param {string} params.returnId Merchant order return ID generated by Google.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Orderreturns$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Orderreturns$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$MerchantOrderReturn>;
    get(
      params: Params$Resource$Orderreturns$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Orderreturns$Get,
      options: MethodOptions | BodyResponseCallback<Schema$MerchantOrderReturn>,
      callback: BodyResponseCallback<Schema$MerchantOrderReturn>
    ): void;
    get(
      params: Params$Resource$Orderreturns$Get,
      callback: BodyResponseCallback<Schema$MerchantOrderReturn>
    ): void;
    get(callback: BodyResponseCallback<Schema$MerchantOrderReturn>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Orderreturns$Get
        | BodyResponseCallback<Schema$MerchantOrderReturn>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$MerchantOrderReturn>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$MerchantOrderReturn>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$MerchantOrderReturn>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Orderreturns$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Orderreturns$Get;
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
              rootUrl + '/content/v2/{merchantId}/orderreturns/{returnId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'returnId'],
        pathParams: ['merchantId', 'returnId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$MerchantOrderReturn>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$MerchantOrderReturn>(parameters);
      }
    }

    /**
     * content.orderreturns.list
     * @desc Lists order returns in your Merchant Center account.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.orderreturns.list({
     *     // Obtains order returns created before this date (inclusively), in ISO 8601 format.
     *     createdEndDate: 'placeholder-value',
     *     // Obtains order returns created after this date (inclusively), in ISO 8601 format.
     *     createdStartDate: 'placeholder-value',
     *     // The maximum number of order returns to return in the response, used for paging. The default value is 25 returns per page, and the maximum allowed value is 250 returns per page.
     *     maxResults: 'placeholder-value',
     *     // The ID of the account that manages the order. This cannot be a multi-client account.
     *     merchantId: 'placeholder-value',
     *     // Return the results in the specified order.
     *     orderBy: 'placeholder-value',
     *     // The token returned by the previous request.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "resources": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.orderreturns.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.createdEndDate Obtains order returns created before this date (inclusively), in ISO 8601 format.
     * @param {string=} params.createdStartDate Obtains order returns created after this date (inclusively), in ISO 8601 format.
     * @param {integer=} params.maxResults The maximum number of order returns to return in the response, used for paging. The default value is 25 returns per page, and the maximum allowed value is 250 returns per page.
     * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
     * @param {string=} params.orderBy Return the results in the specified order.
     * @param {string=} params.pageToken The token returned by the previous request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Orderreturns$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Orderreturns$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OrderreturnsListResponse>;
    list(
      params: Params$Resource$Orderreturns$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Orderreturns$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$OrderreturnsListResponse>,
      callback: BodyResponseCallback<Schema$OrderreturnsListResponse>
    ): void;
    list(
      params: Params$Resource$Orderreturns$List,
      callback: BodyResponseCallback<Schema$OrderreturnsListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$OrderreturnsListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Orderreturns$List
        | BodyResponseCallback<Schema$OrderreturnsListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OrderreturnsListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OrderreturnsListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$OrderreturnsListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Orderreturns$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Orderreturns$List;
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
            url: (rootUrl + '/content/v2/{merchantId}/orderreturns').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OrderreturnsListResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$OrderreturnsListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Orderreturns$Get extends StandardParameters {
    /**
     * The ID of the account that manages the order. This cannot be a multi-client account.
     */
    merchantId?: string;
    /**
     * Merchant order return ID generated by Google.
     */
    returnId?: string;
  }
  export interface Params$Resource$Orderreturns$List
    extends StandardParameters {
    /**
     * Obtains order returns created before this date (inclusively), in ISO 8601 format.
     */
    createdEndDate?: string;
    /**
     * Obtains order returns created after this date (inclusively), in ISO 8601 format.
     */
    createdStartDate?: string;
    /**
     * The maximum number of order returns to return in the response, used for paging. The default value is 25 returns per page, and the maximum allowed value is 250 returns per page.
     */
    maxResults?: number;
    /**
     * The ID of the account that manages the order. This cannot be a multi-client account.
     */
    merchantId?: string;
    /**
     * Return the results in the specified order.
     */
    orderBy?: string;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
  }

  export class Resource$Orders {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * content.orders.acknowledge
     * @desc Marks an order as acknowledged.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.orders.acknowledge({
     *     // The ID of the account that manages the order. This cannot be a multi-client account.
     *     merchantId: 'placeholder-value',
     *     // The ID of the order.
     *     orderId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "operationId": "my_operationId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "executionStatus": "my_executionStatus",
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.orders.acknowledge
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
     * @param {string} params.orderId The ID of the order.
     * @param {().OrdersAcknowledgeRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    acknowledge(
      params: Params$Resource$Orders$Acknowledge,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    acknowledge(
      params?: Params$Resource$Orders$Acknowledge,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OrdersAcknowledgeResponse>;
    acknowledge(
      params: Params$Resource$Orders$Acknowledge,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    acknowledge(
      params: Params$Resource$Orders$Acknowledge,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$OrdersAcknowledgeResponse>,
      callback: BodyResponseCallback<Schema$OrdersAcknowledgeResponse>
    ): void;
    acknowledge(
      params: Params$Resource$Orders$Acknowledge,
      callback: BodyResponseCallback<Schema$OrdersAcknowledgeResponse>
    ): void;
    acknowledge(
      callback: BodyResponseCallback<Schema$OrdersAcknowledgeResponse>
    ): void;
    acknowledge(
      paramsOrCallback?:
        | Params$Resource$Orders$Acknowledge
        | BodyResponseCallback<Schema$OrdersAcknowledgeResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OrdersAcknowledgeResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OrdersAcknowledgeResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$OrdersAcknowledgeResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Orders$Acknowledge;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Orders$Acknowledge;
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
              rootUrl + '/content/v2/{merchantId}/orders/{orderId}/acknowledge'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'orderId'],
        pathParams: ['merchantId', 'orderId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OrdersAcknowledgeResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$OrdersAcknowledgeResponse>(parameters);
      }
    }

    /**
     * content.orders.advancetestorder
     * @desc Sandbox only. Moves a test order from state "`inProgress`" to state "`pendingShipment`".
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.orders.advancetestorder({
     *     // The ID of the account that manages the order. This cannot be a multi-client account.
     *     merchantId: 'placeholder-value',
     *     // The ID of the test order to modify.
     *     orderId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
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
    advancetestorder(
      params: Params$Resource$Orders$Advancetestorder,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    advancetestorder(
      params?: Params$Resource$Orders$Advancetestorder,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OrdersAdvanceTestOrderResponse>;
    advancetestorder(
      params: Params$Resource$Orders$Advancetestorder,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    advancetestorder(
      params: Params$Resource$Orders$Advancetestorder,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$OrdersAdvanceTestOrderResponse>,
      callback: BodyResponseCallback<Schema$OrdersAdvanceTestOrderResponse>
    ): void;
    advancetestorder(
      params: Params$Resource$Orders$Advancetestorder,
      callback: BodyResponseCallback<Schema$OrdersAdvanceTestOrderResponse>
    ): void;
    advancetestorder(
      callback: BodyResponseCallback<Schema$OrdersAdvanceTestOrderResponse>
    ): void;
    advancetestorder(
      paramsOrCallback?:
        | Params$Resource$Orders$Advancetestorder
        | BodyResponseCallback<Schema$OrdersAdvanceTestOrderResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OrdersAdvanceTestOrderResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OrdersAdvanceTestOrderResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$OrdersAdvanceTestOrderResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Orders$Advancetestorder;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Orders$Advancetestorder;
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
              rootUrl + '/content/v2/{merchantId}/testorders/{orderId}/advance'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'orderId'],
        pathParams: ['merchantId', 'orderId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OrdersAdvanceTestOrderResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$OrdersAdvanceTestOrderResponse>(
          parameters
        );
      }
    }

    /**
     * content.orders.cancel
     * @desc Cancels all line items in an order, making a full refund.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.orders.cancel({
     *     // The ID of the account that manages the order. This cannot be a multi-client account.
     *     merchantId: 'placeholder-value',
     *     // The ID of the order to cancel.
     *     orderId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "operationId": "my_operationId",
     *       //   "reason": "my_reason",
     *       //   "reasonText": "my_reasonText"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "executionStatus": "my_executionStatus",
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.orders.cancel
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
     * @param {string} params.orderId The ID of the order to cancel.
     * @param {().OrdersCancelRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancel(
      params: Params$Resource$Orders$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Orders$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OrdersCancelResponse>;
    cancel(
      params: Params$Resource$Orders$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Orders$Cancel,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$OrdersCancelResponse>,
      callback: BodyResponseCallback<Schema$OrdersCancelResponse>
    ): void;
    cancel(
      params: Params$Resource$Orders$Cancel,
      callback: BodyResponseCallback<Schema$OrdersCancelResponse>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$OrdersCancelResponse>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Orders$Cancel
        | BodyResponseCallback<Schema$OrdersCancelResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OrdersCancelResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OrdersCancelResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$OrdersCancelResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Orders$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Orders$Cancel;
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
              rootUrl + '/content/v2/{merchantId}/orders/{orderId}/cancel'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'orderId'],
        pathParams: ['merchantId', 'orderId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OrdersCancelResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$OrdersCancelResponse>(parameters);
      }
    }

    /**
     * content.orders.cancellineitem
     * @desc Cancels a line item, making a full refund.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.orders.cancellineitem({
     *     // The ID of the account that manages the order. This cannot be a multi-client account.
     *     merchantId: 'placeholder-value',
     *     // The ID of the order.
     *     orderId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "amount": {},
     *       //   "amountPretax": {},
     *       //   "amountTax": {},
     *       //   "lineItemId": "my_lineItemId",
     *       //   "operationId": "my_operationId",
     *       //   "productId": "my_productId",
     *       //   "quantity": 0,
     *       //   "reason": "my_reason",
     *       //   "reasonText": "my_reasonText"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "executionStatus": "my_executionStatus",
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.orders.cancellineitem
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
     * @param {string} params.orderId The ID of the order.
     * @param {().OrdersCancelLineItemRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancellineitem(
      params: Params$Resource$Orders$Cancellineitem,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancellineitem(
      params?: Params$Resource$Orders$Cancellineitem,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OrdersCancelLineItemResponse>;
    cancellineitem(
      params: Params$Resource$Orders$Cancellineitem,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancellineitem(
      params: Params$Resource$Orders$Cancellineitem,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$OrdersCancelLineItemResponse>,
      callback: BodyResponseCallback<Schema$OrdersCancelLineItemResponse>
    ): void;
    cancellineitem(
      params: Params$Resource$Orders$Cancellineitem,
      callback: BodyResponseCallback<Schema$OrdersCancelLineItemResponse>
    ): void;
    cancellineitem(
      callback: BodyResponseCallback<Schema$OrdersCancelLineItemResponse>
    ): void;
    cancellineitem(
      paramsOrCallback?:
        | Params$Resource$Orders$Cancellineitem
        | BodyResponseCallback<Schema$OrdersCancelLineItemResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OrdersCancelLineItemResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OrdersCancelLineItemResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$OrdersCancelLineItemResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Orders$Cancellineitem;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Orders$Cancellineitem;
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
              '/content/v2/{merchantId}/orders/{orderId}/cancelLineItem'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'orderId'],
        pathParams: ['merchantId', 'orderId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OrdersCancelLineItemResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$OrdersCancelLineItemResponse>(
          parameters
        );
      }
    }

    /**
     * content.orders.canceltestorderbycustomer
     * @desc Sandbox only. Cancels a test order for customer-initiated cancellation.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.orders.canceltestorderbycustomer({
     *     // The ID of the account that manages the order. This cannot be a multi-client account.
     *     merchantId: 'placeholder-value',
     *     // The ID of the test order to cancel.
     *     orderId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "reason": "my_reason"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.orders.canceltestorderbycustomer
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
     * @param {string} params.orderId The ID of the test order to cancel.
     * @param {().OrdersCancelTestOrderByCustomerRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    canceltestorderbycustomer(
      params: Params$Resource$Orders$Canceltestorderbycustomer,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    canceltestorderbycustomer(
      params?: Params$Resource$Orders$Canceltestorderbycustomer,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OrdersCancelTestOrderByCustomerResponse>;
    canceltestorderbycustomer(
      params: Params$Resource$Orders$Canceltestorderbycustomer,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    canceltestorderbycustomer(
      params: Params$Resource$Orders$Canceltestorderbycustomer,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$OrdersCancelTestOrderByCustomerResponse>,
      callback: BodyResponseCallback<
        Schema$OrdersCancelTestOrderByCustomerResponse
      >
    ): void;
    canceltestorderbycustomer(
      params: Params$Resource$Orders$Canceltestorderbycustomer,
      callback: BodyResponseCallback<
        Schema$OrdersCancelTestOrderByCustomerResponse
      >
    ): void;
    canceltestorderbycustomer(
      callback: BodyResponseCallback<
        Schema$OrdersCancelTestOrderByCustomerResponse
      >
    ): void;
    canceltestorderbycustomer(
      paramsOrCallback?:
        | Params$Resource$Orders$Canceltestorderbycustomer
        | BodyResponseCallback<Schema$OrdersCancelTestOrderByCustomerResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OrdersCancelTestOrderByCustomerResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OrdersCancelTestOrderByCustomerResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$OrdersCancelTestOrderByCustomerResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Orders$Canceltestorderbycustomer;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Orders$Canceltestorderbycustomer;
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
              '/content/v2/{merchantId}/testorders/{orderId}/cancelByCustomer'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'orderId'],
        pathParams: ['merchantId', 'orderId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OrdersCancelTestOrderByCustomerResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$OrdersCancelTestOrderByCustomerResponse>(
          parameters
        );
      }
    }

    /**
     * content.orders.createtestorder
     * @desc Sandbox only. Creates a test order.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.orders.createtestorder({
     *     // The ID of the account that should manage the order. This cannot be a multi-client account.
     *     merchantId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "country": "my_country",
     *       //   "templateName": "my_templateName",
     *       //   "testOrder": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "orderId": "my_orderId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.orders.createtestorder
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.merchantId The ID of the account that should manage the order. This cannot be a multi-client account.
     * @param {().OrdersCreateTestOrderRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    createtestorder(
      params: Params$Resource$Orders$Createtestorder,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    createtestorder(
      params?: Params$Resource$Orders$Createtestorder,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OrdersCreateTestOrderResponse>;
    createtestorder(
      params: Params$Resource$Orders$Createtestorder,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    createtestorder(
      params: Params$Resource$Orders$Createtestorder,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$OrdersCreateTestOrderResponse>,
      callback: BodyResponseCallback<Schema$OrdersCreateTestOrderResponse>
    ): void;
    createtestorder(
      params: Params$Resource$Orders$Createtestorder,
      callback: BodyResponseCallback<Schema$OrdersCreateTestOrderResponse>
    ): void;
    createtestorder(
      callback: BodyResponseCallback<Schema$OrdersCreateTestOrderResponse>
    ): void;
    createtestorder(
      paramsOrCallback?:
        | Params$Resource$Orders$Createtestorder
        | BodyResponseCallback<Schema$OrdersCreateTestOrderResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OrdersCreateTestOrderResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OrdersCreateTestOrderResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$OrdersCreateTestOrderResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Orders$Createtestorder;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Orders$Createtestorder;
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
            url: (rootUrl + '/content/v2/{merchantId}/testorders').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OrdersCreateTestOrderResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$OrdersCreateTestOrderResponse>(
          parameters
        );
      }
    }

    /**
     * content.orders.createtestreturn
     * @desc Sandbox only. Creates a test return.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.orders.createtestreturn({
     *     // The ID of the account that manages the order. This cannot be a multi-client account.
     *     merchantId: 'placeholder-value',
     *     // The ID of the order.
     *     orderId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "items": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "returnId": "my_returnId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.orders.createtestreturn
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
     * @param {string} params.orderId The ID of the order.
     * @param {().OrdersCreateTestReturnRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    createtestreturn(
      params: Params$Resource$Orders$Createtestreturn,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    createtestreturn(
      params?: Params$Resource$Orders$Createtestreturn,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OrdersCreateTestReturnResponse>;
    createtestreturn(
      params: Params$Resource$Orders$Createtestreturn,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    createtestreturn(
      params: Params$Resource$Orders$Createtestreturn,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$OrdersCreateTestReturnResponse>,
      callback: BodyResponseCallback<Schema$OrdersCreateTestReturnResponse>
    ): void;
    createtestreturn(
      params: Params$Resource$Orders$Createtestreturn,
      callback: BodyResponseCallback<Schema$OrdersCreateTestReturnResponse>
    ): void;
    createtestreturn(
      callback: BodyResponseCallback<Schema$OrdersCreateTestReturnResponse>
    ): void;
    createtestreturn(
      paramsOrCallback?:
        | Params$Resource$Orders$Createtestreturn
        | BodyResponseCallback<Schema$OrdersCreateTestReturnResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OrdersCreateTestReturnResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OrdersCreateTestReturnResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$OrdersCreateTestReturnResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Orders$Createtestreturn;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Orders$Createtestreturn;
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
              rootUrl + '/content/v2/{merchantId}/orders/{orderId}/testreturn'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'orderId'],
        pathParams: ['merchantId', 'orderId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OrdersCreateTestReturnResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$OrdersCreateTestReturnResponse>(
          parameters
        );
      }
    }

    /**
     * content.orders.custombatch
     * @desc Retrieves or modifies multiple orders in a single request.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.orders.custombatch({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "entries": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "entries": [],
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.orders.custombatch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().OrdersCustomBatchRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    custombatch(
      params: Params$Resource$Orders$Custombatch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    custombatch(
      params?: Params$Resource$Orders$Custombatch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OrdersCustomBatchResponse>;
    custombatch(
      params: Params$Resource$Orders$Custombatch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    custombatch(
      params: Params$Resource$Orders$Custombatch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$OrdersCustomBatchResponse>,
      callback: BodyResponseCallback<Schema$OrdersCustomBatchResponse>
    ): void;
    custombatch(
      params: Params$Resource$Orders$Custombatch,
      callback: BodyResponseCallback<Schema$OrdersCustomBatchResponse>
    ): void;
    custombatch(
      callback: BodyResponseCallback<Schema$OrdersCustomBatchResponse>
    ): void;
    custombatch(
      paramsOrCallback?:
        | Params$Resource$Orders$Custombatch
        | BodyResponseCallback<Schema$OrdersCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OrdersCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OrdersCustomBatchResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$OrdersCustomBatchResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Orders$Custombatch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Orders$Custombatch;
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
            url: (rootUrl + '/content/v2/orders/batch').replace(
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
        createAPIRequest<Schema$OrdersCustomBatchResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$OrdersCustomBatchResponse>(parameters);
      }
    }

    /**
     * content.orders.get
     * @desc Retrieves an order from your Merchant Center account.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.orders.get({
     *     // The ID of the account that manages the order. This cannot be a multi-client account.
     *     merchantId: 'placeholder-value',
     *     // The ID of the order.
     *     orderId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "acknowledged": false,
     *   //   "channelType": "my_channelType",
     *   //   "customer": {},
     *   //   "deliveryDetails": {},
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "lineItems": [],
     *   //   "merchantId": "my_merchantId",
     *   //   "merchantOrderId": "my_merchantOrderId",
     *   //   "netAmount": {},
     *   //   "paymentMethod": {},
     *   //   "paymentStatus": "my_paymentStatus",
     *   //   "pickupDetails": {},
     *   //   "placedDate": "my_placedDate",
     *   //   "promotions": [],
     *   //   "refunds": [],
     *   //   "shipments": [],
     *   //   "shippingCost": {},
     *   //   "shippingCostTax": {},
     *   //   "shippingOption": "my_shippingOption",
     *   //   "status": "my_status",
     *   //   "taxCollector": "my_taxCollector"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
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
    get(
      params: Params$Resource$Orders$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Orders$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Order>;
    get(
      params: Params$Resource$Orders$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Orders$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Order>,
      callback: BodyResponseCallback<Schema$Order>
    ): void;
    get(
      params: Params$Resource$Orders$Get,
      callback: BodyResponseCallback<Schema$Order>
    ): void;
    get(callback: BodyResponseCallback<Schema$Order>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Orders$Get
        | BodyResponseCallback<Schema$Order>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Order>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Order>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Order> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Orders$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Orders$Get;
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
              rootUrl + '/content/v2/{merchantId}/orders/{orderId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'orderId'],
        pathParams: ['merchantId', 'orderId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Order>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Order>(parameters);
      }
    }

    /**
     * content.orders.getbymerchantorderid
     * @desc Retrieves an order using merchant order ID.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.orders.getbymerchantorderid({
     *     // The ID of the account that manages the order. This cannot be a multi-client account.
     *     merchantId: 'placeholder-value',
     *     // The merchant order ID to be looked for.
     *     merchantOrderId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "order": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.orders.getbymerchantorderid
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
     * @param {string} params.merchantOrderId The merchant order ID to be looked for.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getbymerchantorderid(
      params: Params$Resource$Orders$Getbymerchantorderid,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getbymerchantorderid(
      params?: Params$Resource$Orders$Getbymerchantorderid,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OrdersGetByMerchantOrderIdResponse>;
    getbymerchantorderid(
      params: Params$Resource$Orders$Getbymerchantorderid,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getbymerchantorderid(
      params: Params$Resource$Orders$Getbymerchantorderid,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$OrdersGetByMerchantOrderIdResponse>,
      callback: BodyResponseCallback<Schema$OrdersGetByMerchantOrderIdResponse>
    ): void;
    getbymerchantorderid(
      params: Params$Resource$Orders$Getbymerchantorderid,
      callback: BodyResponseCallback<Schema$OrdersGetByMerchantOrderIdResponse>
    ): void;
    getbymerchantorderid(
      callback: BodyResponseCallback<Schema$OrdersGetByMerchantOrderIdResponse>
    ): void;
    getbymerchantorderid(
      paramsOrCallback?:
        | Params$Resource$Orders$Getbymerchantorderid
        | BodyResponseCallback<Schema$OrdersGetByMerchantOrderIdResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OrdersGetByMerchantOrderIdResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OrdersGetByMerchantOrderIdResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$OrdersGetByMerchantOrderIdResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Orders$Getbymerchantorderid;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Orders$Getbymerchantorderid;
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
              '/content/v2/{merchantId}/ordersbymerchantid/{merchantOrderId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'merchantOrderId'],
        pathParams: ['merchantId', 'merchantOrderId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OrdersGetByMerchantOrderIdResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$OrdersGetByMerchantOrderIdResponse>(
          parameters
        );
      }
    }

    /**
     * content.orders.gettestordertemplate
     * @desc Sandbox only. Retrieves an order template that can be used to quickly create a new order in sandbox.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.orders.gettestordertemplate({
     *     // The country of the template to retrieve. Defaults to `US`.
     *     country: 'placeholder-value',
     *     // The ID of the account that should manage the order. This cannot be a multi-client account.
     *     merchantId: 'placeholder-value',
     *     // The name of the template to retrieve.
     *     templateName: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "template": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.orders.gettestordertemplate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.country The country of the template to retrieve. Defaults to `US`.
     * @param {string} params.merchantId The ID of the account that should manage the order. This cannot be a multi-client account.
     * @param {string} params.templateName The name of the template to retrieve.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    gettestordertemplate(
      params: Params$Resource$Orders$Gettestordertemplate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    gettestordertemplate(
      params?: Params$Resource$Orders$Gettestordertemplate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OrdersGetTestOrderTemplateResponse>;
    gettestordertemplate(
      params: Params$Resource$Orders$Gettestordertemplate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    gettestordertemplate(
      params: Params$Resource$Orders$Gettestordertemplate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$OrdersGetTestOrderTemplateResponse>,
      callback: BodyResponseCallback<Schema$OrdersGetTestOrderTemplateResponse>
    ): void;
    gettestordertemplate(
      params: Params$Resource$Orders$Gettestordertemplate,
      callback: BodyResponseCallback<Schema$OrdersGetTestOrderTemplateResponse>
    ): void;
    gettestordertemplate(
      callback: BodyResponseCallback<Schema$OrdersGetTestOrderTemplateResponse>
    ): void;
    gettestordertemplate(
      paramsOrCallback?:
        | Params$Resource$Orders$Gettestordertemplate
        | BodyResponseCallback<Schema$OrdersGetTestOrderTemplateResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OrdersGetTestOrderTemplateResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OrdersGetTestOrderTemplateResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$OrdersGetTestOrderTemplateResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Orders$Gettestordertemplate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Orders$Gettestordertemplate;
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
              '/content/v2/{merchantId}/testordertemplates/{templateName}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'templateName'],
        pathParams: ['merchantId', 'templateName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OrdersGetTestOrderTemplateResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$OrdersGetTestOrderTemplateResponse>(
          parameters
        );
      }
    }

    /**
     * content.orders.instorerefundlineitem
     * @desc Deprecated. Notifies that item return and refund was handled directly by merchant outside of Google payments processing (e.g. cash refund done in store). Note: We recommend calling the returnrefundlineitem method to refund in-store returns. We will issue the refund directly to the customer. This helps to prevent possible differences arising between merchant and Google transaction records. We also recommend having the point of sale system communicate with Google to ensure that customers do not receive a double refund by first refunding via Google then via an in-store return.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.orders.instorerefundlineitem({
     *     // The ID of the account that manages the order. This cannot be a multi-client account.
     *     merchantId: 'placeholder-value',
     *     // The ID of the order.
     *     orderId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "amountPretax": {},
     *       //   "amountTax": {},
     *       //   "lineItemId": "my_lineItemId",
     *       //   "operationId": "my_operationId",
     *       //   "productId": "my_productId",
     *       //   "quantity": 0,
     *       //   "reason": "my_reason",
     *       //   "reasonText": "my_reasonText"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "executionStatus": "my_executionStatus",
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.orders.instorerefundlineitem
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
     * @param {string} params.orderId The ID of the order.
     * @param {().OrdersInStoreRefundLineItemRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    instorerefundlineitem(
      params: Params$Resource$Orders$Instorerefundlineitem,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    instorerefundlineitem(
      params?: Params$Resource$Orders$Instorerefundlineitem,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OrdersInStoreRefundLineItemResponse>;
    instorerefundlineitem(
      params: Params$Resource$Orders$Instorerefundlineitem,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    instorerefundlineitem(
      params: Params$Resource$Orders$Instorerefundlineitem,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$OrdersInStoreRefundLineItemResponse>,
      callback: BodyResponseCallback<Schema$OrdersInStoreRefundLineItemResponse>
    ): void;
    instorerefundlineitem(
      params: Params$Resource$Orders$Instorerefundlineitem,
      callback: BodyResponseCallback<Schema$OrdersInStoreRefundLineItemResponse>
    ): void;
    instorerefundlineitem(
      callback: BodyResponseCallback<Schema$OrdersInStoreRefundLineItemResponse>
    ): void;
    instorerefundlineitem(
      paramsOrCallback?:
        | Params$Resource$Orders$Instorerefundlineitem
        | BodyResponseCallback<Schema$OrdersInStoreRefundLineItemResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OrdersInStoreRefundLineItemResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OrdersInStoreRefundLineItemResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$OrdersInStoreRefundLineItemResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Orders$Instorerefundlineitem;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Orders$Instorerefundlineitem;
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
              '/content/v2/{merchantId}/orders/{orderId}/inStoreRefundLineItem'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'orderId'],
        pathParams: ['merchantId', 'orderId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OrdersInStoreRefundLineItemResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$OrdersInStoreRefundLineItemResponse>(
          parameters
        );
      }
    }

    /**
     * content.orders.list
     * @desc Lists the orders in your Merchant Center account.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.orders.list({
     *     // Obtains orders that match the acknowledgement status. When set to true, obtains orders that have been acknowledged. When false, obtains orders that have not been acknowledged.
     *     // We recommend using this filter set to `false`, in conjunction with the `acknowledge` call, such that only un-acknowledged orders are returned.
     *     acknowledged: 'placeholder-value',
     *     // The maximum number of orders to return in the response, used for paging. The default value is 25 orders per page, and the maximum allowed value is 250 orders per page.
     *     maxResults: 'placeholder-value',
     *     // The ID of the account that manages the order. This cannot be a multi-client account.
     *     merchantId: 'placeholder-value',
     *     // Order results by placement date in descending or ascending order.
     *     //
     *     // Acceptable values are:
     *     // - placedDateAsc
     *     // - placedDateDesc
     *     orderBy: 'placeholder-value',
     *     // The token returned by the previous request.
     *     pageToken: 'placeholder-value',
     *     // Obtains orders placed before this date (exclusively), in ISO 8601 format.
     *     placedDateEnd: 'placeholder-value',
     *     // Obtains orders placed after this date (inclusively), in ISO 8601 format.
     *     placedDateStart: 'placeholder-value',
     *     // Obtains orders that match any of the specified statuses. Please note that `active` is a shortcut for `pendingShipment` and `partiallyShipped`, and `completed` is a shortcut for `shipped`, `partiallyDelivered`, `delivered`, `partiallyReturned`, `returned`, and `canceled`.
     *     statuses: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "resources": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.orders.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.acknowledged Obtains orders that match the acknowledgement status. When set to true, obtains orders that have been acknowledged. When false, obtains orders that have not been acknowledged. We recommend using this filter set to `false`, in conjunction with the `acknowledge` call, such that only un-acknowledged orders are returned.
     * @param {integer=} params.maxResults The maximum number of orders to return in the response, used for paging. The default value is 25 orders per page, and the maximum allowed value is 250 orders per page.
     * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
     * @param {string=} params.orderBy Order results by placement date in descending or ascending order.  Acceptable values are: - placedDateAsc - placedDateDesc
     * @param {string=} params.pageToken The token returned by the previous request.
     * @param {string=} params.placedDateEnd Obtains orders placed before this date (exclusively), in ISO 8601 format.
     * @param {string=} params.placedDateStart Obtains orders placed after this date (inclusively), in ISO 8601 format.
     * @param {string=} params.statuses Obtains orders that match any of the specified statuses. Please note that `active` is a shortcut for `pendingShipment` and `partiallyShipped`, and `completed` is a shortcut for `shipped`, `partiallyDelivered`, `delivered`, `partiallyReturned`, `returned`, and `canceled`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Orders$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Orders$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OrdersListResponse>;
    list(
      params: Params$Resource$Orders$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Orders$List,
      options: MethodOptions | BodyResponseCallback<Schema$OrdersListResponse>,
      callback: BodyResponseCallback<Schema$OrdersListResponse>
    ): void;
    list(
      params: Params$Resource$Orders$List,
      callback: BodyResponseCallback<Schema$OrdersListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$OrdersListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Orders$List
        | BodyResponseCallback<Schema$OrdersListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OrdersListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OrdersListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$OrdersListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Orders$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Orders$List;
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
            url: (rootUrl + '/content/v2/{merchantId}/orders').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OrdersListResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$OrdersListResponse>(parameters);
      }
    }

    /**
     * content.orders.refund
     * @desc Deprecated, please use returnRefundLineItem instead.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.orders.refund({
     *     // The ID of the account that manages the order. This cannot be a multi-client account.
     *     merchantId: 'placeholder-value',
     *     // The ID of the order to refund.
     *     orderId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "amount": {},
     *       //   "amountPretax": {},
     *       //   "amountTax": {},
     *       //   "operationId": "my_operationId",
     *       //   "reason": "my_reason",
     *       //   "reasonText": "my_reasonText"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "executionStatus": "my_executionStatus",
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.orders.refund
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
     * @param {string} params.orderId The ID of the order to refund.
     * @param {().OrdersRefundRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    refund(
      params: Params$Resource$Orders$Refund,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    refund(
      params?: Params$Resource$Orders$Refund,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OrdersRefundResponse>;
    refund(
      params: Params$Resource$Orders$Refund,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    refund(
      params: Params$Resource$Orders$Refund,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$OrdersRefundResponse>,
      callback: BodyResponseCallback<Schema$OrdersRefundResponse>
    ): void;
    refund(
      params: Params$Resource$Orders$Refund,
      callback: BodyResponseCallback<Schema$OrdersRefundResponse>
    ): void;
    refund(callback: BodyResponseCallback<Schema$OrdersRefundResponse>): void;
    refund(
      paramsOrCallback?:
        | Params$Resource$Orders$Refund
        | BodyResponseCallback<Schema$OrdersRefundResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OrdersRefundResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OrdersRefundResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$OrdersRefundResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Orders$Refund;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Orders$Refund;
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
              rootUrl + '/content/v2/{merchantId}/orders/{orderId}/refund'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'orderId'],
        pathParams: ['merchantId', 'orderId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OrdersRefundResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$OrdersRefundResponse>(parameters);
      }
    }

    /**
     * content.orders.rejectreturnlineitem
     * @desc Rejects return on an line item.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.orders.rejectreturnlineitem({
     *     // The ID of the account that manages the order. This cannot be a multi-client account.
     *     merchantId: 'placeholder-value',
     *     // The ID of the order.
     *     orderId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "lineItemId": "my_lineItemId",
     *       //   "operationId": "my_operationId",
     *       //   "productId": "my_productId",
     *       //   "quantity": 0,
     *       //   "reason": "my_reason",
     *       //   "reasonText": "my_reasonText"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "executionStatus": "my_executionStatus",
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.orders.rejectreturnlineitem
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
     * @param {string} params.orderId The ID of the order.
     * @param {().OrdersRejectReturnLineItemRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    rejectreturnlineitem(
      params: Params$Resource$Orders$Rejectreturnlineitem,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    rejectreturnlineitem(
      params?: Params$Resource$Orders$Rejectreturnlineitem,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OrdersRejectReturnLineItemResponse>;
    rejectreturnlineitem(
      params: Params$Resource$Orders$Rejectreturnlineitem,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    rejectreturnlineitem(
      params: Params$Resource$Orders$Rejectreturnlineitem,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$OrdersRejectReturnLineItemResponse>,
      callback: BodyResponseCallback<Schema$OrdersRejectReturnLineItemResponse>
    ): void;
    rejectreturnlineitem(
      params: Params$Resource$Orders$Rejectreturnlineitem,
      callback: BodyResponseCallback<Schema$OrdersRejectReturnLineItemResponse>
    ): void;
    rejectreturnlineitem(
      callback: BodyResponseCallback<Schema$OrdersRejectReturnLineItemResponse>
    ): void;
    rejectreturnlineitem(
      paramsOrCallback?:
        | Params$Resource$Orders$Rejectreturnlineitem
        | BodyResponseCallback<Schema$OrdersRejectReturnLineItemResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OrdersRejectReturnLineItemResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OrdersRejectReturnLineItemResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$OrdersRejectReturnLineItemResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Orders$Rejectreturnlineitem;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Orders$Rejectreturnlineitem;
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
              '/content/v2/{merchantId}/orders/{orderId}/rejectReturnLineItem'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'orderId'],
        pathParams: ['merchantId', 'orderId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OrdersRejectReturnLineItemResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$OrdersRejectReturnLineItemResponse>(
          parameters
        );
      }
    }

    /**
     * content.orders.returnlineitem
     * @desc Returns a line item.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.orders.returnlineitem({
     *     // The ID of the account that manages the order. This cannot be a multi-client account.
     *     merchantId: 'placeholder-value',
     *     // The ID of the order.
     *     orderId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "lineItemId": "my_lineItemId",
     *       //   "operationId": "my_operationId",
     *       //   "productId": "my_productId",
     *       //   "quantity": 0,
     *       //   "reason": "my_reason",
     *       //   "reasonText": "my_reasonText"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "executionStatus": "my_executionStatus",
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.orders.returnlineitem
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
     * @param {string} params.orderId The ID of the order.
     * @param {().OrdersReturnLineItemRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    returnlineitem(
      params: Params$Resource$Orders$Returnlineitem,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    returnlineitem(
      params?: Params$Resource$Orders$Returnlineitem,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OrdersReturnLineItemResponse>;
    returnlineitem(
      params: Params$Resource$Orders$Returnlineitem,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    returnlineitem(
      params: Params$Resource$Orders$Returnlineitem,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$OrdersReturnLineItemResponse>,
      callback: BodyResponseCallback<Schema$OrdersReturnLineItemResponse>
    ): void;
    returnlineitem(
      params: Params$Resource$Orders$Returnlineitem,
      callback: BodyResponseCallback<Schema$OrdersReturnLineItemResponse>
    ): void;
    returnlineitem(
      callback: BodyResponseCallback<Schema$OrdersReturnLineItemResponse>
    ): void;
    returnlineitem(
      paramsOrCallback?:
        | Params$Resource$Orders$Returnlineitem
        | BodyResponseCallback<Schema$OrdersReturnLineItemResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OrdersReturnLineItemResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OrdersReturnLineItemResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$OrdersReturnLineItemResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Orders$Returnlineitem;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Orders$Returnlineitem;
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
              '/content/v2/{merchantId}/orders/{orderId}/returnLineItem'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'orderId'],
        pathParams: ['merchantId', 'orderId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OrdersReturnLineItemResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$OrdersReturnLineItemResponse>(
          parameters
        );
      }
    }

    /**
     * content.orders.returnrefundlineitem
     * @desc Returns and refunds a line item. Note that this method can only be called on fully shipped orders. Please also note that the Orderreturns API is the preferred way to handle returns after you receive a return from a customer. You can use Orderreturns.list or Orderreturns.get to search for the return, and then use Orderreturns.processreturn to issue the refund. If the return cannot be found, then we recommend using this API to issue a refund.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.orders.returnrefundlineitem({
     *     // The ID of the account that manages the order. This cannot be a multi-client account.
     *     merchantId: 'placeholder-value',
     *     // The ID of the order.
     *     orderId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "amountPretax": {},
     *       //   "amountTax": {},
     *       //   "lineItemId": "my_lineItemId",
     *       //   "operationId": "my_operationId",
     *       //   "productId": "my_productId",
     *       //   "quantity": 0,
     *       //   "reason": "my_reason",
     *       //   "reasonText": "my_reasonText"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "executionStatus": "my_executionStatus",
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.orders.returnrefundlineitem
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
     * @param {string} params.orderId The ID of the order.
     * @param {().OrdersReturnRefundLineItemRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    returnrefundlineitem(
      params: Params$Resource$Orders$Returnrefundlineitem,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    returnrefundlineitem(
      params?: Params$Resource$Orders$Returnrefundlineitem,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OrdersReturnRefundLineItemResponse>;
    returnrefundlineitem(
      params: Params$Resource$Orders$Returnrefundlineitem,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    returnrefundlineitem(
      params: Params$Resource$Orders$Returnrefundlineitem,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$OrdersReturnRefundLineItemResponse>,
      callback: BodyResponseCallback<Schema$OrdersReturnRefundLineItemResponse>
    ): void;
    returnrefundlineitem(
      params: Params$Resource$Orders$Returnrefundlineitem,
      callback: BodyResponseCallback<Schema$OrdersReturnRefundLineItemResponse>
    ): void;
    returnrefundlineitem(
      callback: BodyResponseCallback<Schema$OrdersReturnRefundLineItemResponse>
    ): void;
    returnrefundlineitem(
      paramsOrCallback?:
        | Params$Resource$Orders$Returnrefundlineitem
        | BodyResponseCallback<Schema$OrdersReturnRefundLineItemResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OrdersReturnRefundLineItemResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OrdersReturnRefundLineItemResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$OrdersReturnRefundLineItemResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Orders$Returnrefundlineitem;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Orders$Returnrefundlineitem;
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
              '/content/v2/{merchantId}/orders/{orderId}/returnRefundLineItem'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'orderId'],
        pathParams: ['merchantId', 'orderId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OrdersReturnRefundLineItemResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$OrdersReturnRefundLineItemResponse>(
          parameters
        );
      }
    }

    /**
     * content.orders.setlineitemmetadata
     * @desc Sets (or overrides if it already exists) merchant provided annotations in the form of key-value pairs. A common use case would be to supply us with additional structured information about a line item that cannot be provided via other methods. Submitted key-value pairs can be retrieved as part of the orders resource.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.orders.setlineitemmetadata({
     *     // The ID of the account that manages the order. This cannot be a multi-client account.
     *     merchantId: 'placeholder-value',
     *     // The ID of the order.
     *     orderId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotations": [],
     *       //   "lineItemId": "my_lineItemId",
     *       //   "operationId": "my_operationId",
     *       //   "productId": "my_productId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "executionStatus": "my_executionStatus",
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.orders.setlineitemmetadata
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
     * @param {string} params.orderId The ID of the order.
     * @param {().OrdersSetLineItemMetadataRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setlineitemmetadata(
      params: Params$Resource$Orders$Setlineitemmetadata,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setlineitemmetadata(
      params?: Params$Resource$Orders$Setlineitemmetadata,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OrdersSetLineItemMetadataResponse>;
    setlineitemmetadata(
      params: Params$Resource$Orders$Setlineitemmetadata,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setlineitemmetadata(
      params: Params$Resource$Orders$Setlineitemmetadata,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$OrdersSetLineItemMetadataResponse>,
      callback: BodyResponseCallback<Schema$OrdersSetLineItemMetadataResponse>
    ): void;
    setlineitemmetadata(
      params: Params$Resource$Orders$Setlineitemmetadata,
      callback: BodyResponseCallback<Schema$OrdersSetLineItemMetadataResponse>
    ): void;
    setlineitemmetadata(
      callback: BodyResponseCallback<Schema$OrdersSetLineItemMetadataResponse>
    ): void;
    setlineitemmetadata(
      paramsOrCallback?:
        | Params$Resource$Orders$Setlineitemmetadata
        | BodyResponseCallback<Schema$OrdersSetLineItemMetadataResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OrdersSetLineItemMetadataResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OrdersSetLineItemMetadataResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$OrdersSetLineItemMetadataResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Orders$Setlineitemmetadata;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Orders$Setlineitemmetadata;
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
              '/content/v2/{merchantId}/orders/{orderId}/setLineItemMetadata'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'orderId'],
        pathParams: ['merchantId', 'orderId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OrdersSetLineItemMetadataResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$OrdersSetLineItemMetadataResponse>(
          parameters
        );
      }
    }

    /**
     * content.orders.shiplineitems
     * @desc Marks line item(s) as shipped.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.orders.shiplineitems({
     *     // The ID of the account that manages the order. This cannot be a multi-client account.
     *     merchantId: 'placeholder-value',
     *     // The ID of the order.
     *     orderId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "carrier": "my_carrier",
     *       //   "lineItems": [],
     *       //   "operationId": "my_operationId",
     *       //   "shipmentGroupId": "my_shipmentGroupId",
     *       //   "shipmentId": "my_shipmentId",
     *       //   "shipmentInfos": [],
     *       //   "trackingId": "my_trackingId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "executionStatus": "my_executionStatus",
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.orders.shiplineitems
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
     * @param {string} params.orderId The ID of the order.
     * @param {().OrdersShipLineItemsRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    shiplineitems(
      params: Params$Resource$Orders$Shiplineitems,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    shiplineitems(
      params?: Params$Resource$Orders$Shiplineitems,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OrdersShipLineItemsResponse>;
    shiplineitems(
      params: Params$Resource$Orders$Shiplineitems,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    shiplineitems(
      params: Params$Resource$Orders$Shiplineitems,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$OrdersShipLineItemsResponse>,
      callback: BodyResponseCallback<Schema$OrdersShipLineItemsResponse>
    ): void;
    shiplineitems(
      params: Params$Resource$Orders$Shiplineitems,
      callback: BodyResponseCallback<Schema$OrdersShipLineItemsResponse>
    ): void;
    shiplineitems(
      callback: BodyResponseCallback<Schema$OrdersShipLineItemsResponse>
    ): void;
    shiplineitems(
      paramsOrCallback?:
        | Params$Resource$Orders$Shiplineitems
        | BodyResponseCallback<Schema$OrdersShipLineItemsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OrdersShipLineItemsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OrdersShipLineItemsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$OrdersShipLineItemsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Orders$Shiplineitems;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Orders$Shiplineitems;
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
              '/content/v2/{merchantId}/orders/{orderId}/shipLineItems'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'orderId'],
        pathParams: ['merchantId', 'orderId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OrdersShipLineItemsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$OrdersShipLineItemsResponse>(parameters);
      }
    }

    /**
     * content.orders.updatelineitemshippingdetails
     * @desc Updates ship by and delivery by dates for a line item.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.orders.updatelineitemshippingdetails({
     *     // The ID of the account that manages the order. This cannot be a multi-client account.
     *     merchantId: 'placeholder-value',
     *     // The ID of the order.
     *     orderId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "deliverByDate": "my_deliverByDate",
     *       //   "lineItemId": "my_lineItemId",
     *       //   "operationId": "my_operationId",
     *       //   "productId": "my_productId",
     *       //   "shipByDate": "my_shipByDate"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "executionStatus": "my_executionStatus",
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.orders.updatelineitemshippingdetails
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
     * @param {string} params.orderId The ID of the order.
     * @param {().OrdersUpdateLineItemShippingDetailsRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updatelineitemshippingdetails(
      params: Params$Resource$Orders$Updatelineitemshippingdetails,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updatelineitemshippingdetails(
      params?: Params$Resource$Orders$Updatelineitemshippingdetails,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OrdersUpdateLineItemShippingDetailsResponse>;
    updatelineitemshippingdetails(
      params: Params$Resource$Orders$Updatelineitemshippingdetails,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updatelineitemshippingdetails(
      params: Params$Resource$Orders$Updatelineitemshippingdetails,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$OrdersUpdateLineItemShippingDetailsResponse
          >,
      callback: BodyResponseCallback<
        Schema$OrdersUpdateLineItemShippingDetailsResponse
      >
    ): void;
    updatelineitemshippingdetails(
      params: Params$Resource$Orders$Updatelineitemshippingdetails,
      callback: BodyResponseCallback<
        Schema$OrdersUpdateLineItemShippingDetailsResponse
      >
    ): void;
    updatelineitemshippingdetails(
      callback: BodyResponseCallback<
        Schema$OrdersUpdateLineItemShippingDetailsResponse
      >
    ): void;
    updatelineitemshippingdetails(
      paramsOrCallback?:
        | Params$Resource$Orders$Updatelineitemshippingdetails
        | BodyResponseCallback<
            Schema$OrdersUpdateLineItemShippingDetailsResponse
          >
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<
            Schema$OrdersUpdateLineItemShippingDetailsResponse
          >
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<
            Schema$OrdersUpdateLineItemShippingDetailsResponse
          >
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$OrdersUpdateLineItemShippingDetailsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Orders$Updatelineitemshippingdetails;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Orders$Updatelineitemshippingdetails;
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
              '/content/v2/{merchantId}/orders/{orderId}/updateLineItemShippingDetails'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'orderId'],
        pathParams: ['merchantId', 'orderId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OrdersUpdateLineItemShippingDetailsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<
          Schema$OrdersUpdateLineItemShippingDetailsResponse
        >(parameters);
      }
    }

    /**
     * content.orders.updatemerchantorderid
     * @desc Updates the merchant order ID for a given order.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.orders.updatemerchantorderid({
     *     // The ID of the account that manages the order. This cannot be a multi-client account.
     *     merchantId: 'placeholder-value',
     *     // The ID of the order.
     *     orderId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "merchantOrderId": "my_merchantOrderId",
     *       //   "operationId": "my_operationId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "executionStatus": "my_executionStatus",
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.orders.updatemerchantorderid
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
     * @param {string} params.orderId The ID of the order.
     * @param {().OrdersUpdateMerchantOrderIdRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updatemerchantorderid(
      params: Params$Resource$Orders$Updatemerchantorderid,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updatemerchantorderid(
      params?: Params$Resource$Orders$Updatemerchantorderid,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OrdersUpdateMerchantOrderIdResponse>;
    updatemerchantorderid(
      params: Params$Resource$Orders$Updatemerchantorderid,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updatemerchantorderid(
      params: Params$Resource$Orders$Updatemerchantorderid,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$OrdersUpdateMerchantOrderIdResponse>,
      callback: BodyResponseCallback<Schema$OrdersUpdateMerchantOrderIdResponse>
    ): void;
    updatemerchantorderid(
      params: Params$Resource$Orders$Updatemerchantorderid,
      callback: BodyResponseCallback<Schema$OrdersUpdateMerchantOrderIdResponse>
    ): void;
    updatemerchantorderid(
      callback: BodyResponseCallback<Schema$OrdersUpdateMerchantOrderIdResponse>
    ): void;
    updatemerchantorderid(
      paramsOrCallback?:
        | Params$Resource$Orders$Updatemerchantorderid
        | BodyResponseCallback<Schema$OrdersUpdateMerchantOrderIdResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OrdersUpdateMerchantOrderIdResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OrdersUpdateMerchantOrderIdResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$OrdersUpdateMerchantOrderIdResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Orders$Updatemerchantorderid;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Orders$Updatemerchantorderid;
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
              '/content/v2/{merchantId}/orders/{orderId}/updateMerchantOrderId'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'orderId'],
        pathParams: ['merchantId', 'orderId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OrdersUpdateMerchantOrderIdResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$OrdersUpdateMerchantOrderIdResponse>(
          parameters
        );
      }
    }

    /**
     * content.orders.updateshipment
     * @desc Updates a shipment's status, carrier, and/or tracking ID.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.orders.updateshipment({
     *     // The ID of the account that manages the order. This cannot be a multi-client account.
     *     merchantId: 'placeholder-value',
     *     // The ID of the order.
     *     orderId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "carrier": "my_carrier",
     *       //   "deliveryDate": "my_deliveryDate",
     *       //   "operationId": "my_operationId",
     *       //   "shipmentId": "my_shipmentId",
     *       //   "status": "my_status",
     *       //   "trackingId": "my_trackingId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "executionStatus": "my_executionStatus",
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.orders.updateshipment
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
     * @param {string} params.orderId The ID of the order.
     * @param {().OrdersUpdateShipmentRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updateshipment(
      params: Params$Resource$Orders$Updateshipment,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateshipment(
      params?: Params$Resource$Orders$Updateshipment,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OrdersUpdateShipmentResponse>;
    updateshipment(
      params: Params$Resource$Orders$Updateshipment,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateshipment(
      params: Params$Resource$Orders$Updateshipment,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$OrdersUpdateShipmentResponse>,
      callback: BodyResponseCallback<Schema$OrdersUpdateShipmentResponse>
    ): void;
    updateshipment(
      params: Params$Resource$Orders$Updateshipment,
      callback: BodyResponseCallback<Schema$OrdersUpdateShipmentResponse>
    ): void;
    updateshipment(
      callback: BodyResponseCallback<Schema$OrdersUpdateShipmentResponse>
    ): void;
    updateshipment(
      paramsOrCallback?:
        | Params$Resource$Orders$Updateshipment
        | BodyResponseCallback<Schema$OrdersUpdateShipmentResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OrdersUpdateShipmentResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OrdersUpdateShipmentResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$OrdersUpdateShipmentResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Orders$Updateshipment;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Orders$Updateshipment;
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
              '/content/v2/{merchantId}/orders/{orderId}/updateShipment'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'orderId'],
        pathParams: ['merchantId', 'orderId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OrdersUpdateShipmentResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$OrdersUpdateShipmentResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Orders$Acknowledge
    extends StandardParameters {
    /**
     * The ID of the account that manages the order. This cannot be a multi-client account.
     */
    merchantId?: string;
    /**
     * The ID of the order.
     */
    orderId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$OrdersAcknowledgeRequest;
  }
  export interface Params$Resource$Orders$Advancetestorder
    extends StandardParameters {
    /**
     * The ID of the account that manages the order. This cannot be a multi-client account.
     */
    merchantId?: string;
    /**
     * The ID of the test order to modify.
     */
    orderId?: string;
  }
  export interface Params$Resource$Orders$Cancel extends StandardParameters {
    /**
     * The ID of the account that manages the order. This cannot be a multi-client account.
     */
    merchantId?: string;
    /**
     * The ID of the order to cancel.
     */
    orderId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$OrdersCancelRequest;
  }
  export interface Params$Resource$Orders$Cancellineitem
    extends StandardParameters {
    /**
     * The ID of the account that manages the order. This cannot be a multi-client account.
     */
    merchantId?: string;
    /**
     * The ID of the order.
     */
    orderId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$OrdersCancelLineItemRequest;
  }
  export interface Params$Resource$Orders$Canceltestorderbycustomer
    extends StandardParameters {
    /**
     * The ID of the account that manages the order. This cannot be a multi-client account.
     */
    merchantId?: string;
    /**
     * The ID of the test order to cancel.
     */
    orderId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$OrdersCancelTestOrderByCustomerRequest;
  }
  export interface Params$Resource$Orders$Createtestorder
    extends StandardParameters {
    /**
     * The ID of the account that should manage the order. This cannot be a multi-client account.
     */
    merchantId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$OrdersCreateTestOrderRequest;
  }
  export interface Params$Resource$Orders$Createtestreturn
    extends StandardParameters {
    /**
     * The ID of the account that manages the order. This cannot be a multi-client account.
     */
    merchantId?: string;
    /**
     * The ID of the order.
     */
    orderId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$OrdersCreateTestReturnRequest;
  }
  export interface Params$Resource$Orders$Custombatch
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$OrdersCustomBatchRequest;
  }
  export interface Params$Resource$Orders$Get extends StandardParameters {
    /**
     * The ID of the account that manages the order. This cannot be a multi-client account.
     */
    merchantId?: string;
    /**
     * The ID of the order.
     */
    orderId?: string;
  }
  export interface Params$Resource$Orders$Getbymerchantorderid
    extends StandardParameters {
    /**
     * The ID of the account that manages the order. This cannot be a multi-client account.
     */
    merchantId?: string;
    /**
     * The merchant order ID to be looked for.
     */
    merchantOrderId?: string;
  }
  export interface Params$Resource$Orders$Gettestordertemplate
    extends StandardParameters {
    /**
     * The country of the template to retrieve. Defaults to `US`.
     */
    country?: string;
    /**
     * The ID of the account that should manage the order. This cannot be a multi-client account.
     */
    merchantId?: string;
    /**
     * The name of the template to retrieve.
     */
    templateName?: string;
  }
  export interface Params$Resource$Orders$Instorerefundlineitem
    extends StandardParameters {
    /**
     * The ID of the account that manages the order. This cannot be a multi-client account.
     */
    merchantId?: string;
    /**
     * The ID of the order.
     */
    orderId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$OrdersInStoreRefundLineItemRequest;
  }
  export interface Params$Resource$Orders$List extends StandardParameters {
    /**
     * Obtains orders that match the acknowledgement status. When set to true, obtains orders that have been acknowledged. When false, obtains orders that have not been acknowledged. We recommend using this filter set to `false`, in conjunction with the `acknowledge` call, such that only un-acknowledged orders are returned.
     */
    acknowledged?: boolean;
    /**
     * The maximum number of orders to return in the response, used for paging. The default value is 25 orders per page, and the maximum allowed value is 250 orders per page.
     */
    maxResults?: number;
    /**
     * The ID of the account that manages the order. This cannot be a multi-client account.
     */
    merchantId?: string;
    /**
     * Order results by placement date in descending or ascending order.  Acceptable values are: - placedDateAsc - placedDateDesc
     */
    orderBy?: string;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
    /**
     * Obtains orders placed before this date (exclusively), in ISO 8601 format.
     */
    placedDateEnd?: string;
    /**
     * Obtains orders placed after this date (inclusively), in ISO 8601 format.
     */
    placedDateStart?: string;
    /**
     * Obtains orders that match any of the specified statuses. Please note that `active` is a shortcut for `pendingShipment` and `partiallyShipped`, and `completed` is a shortcut for `shipped`, `partiallyDelivered`, `delivered`, `partiallyReturned`, `returned`, and `canceled`.
     */
    statuses?: string[];
  }
  export interface Params$Resource$Orders$Refund extends StandardParameters {
    /**
     * The ID of the account that manages the order. This cannot be a multi-client account.
     */
    merchantId?: string;
    /**
     * The ID of the order to refund.
     */
    orderId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$OrdersRefundRequest;
  }
  export interface Params$Resource$Orders$Rejectreturnlineitem
    extends StandardParameters {
    /**
     * The ID of the account that manages the order. This cannot be a multi-client account.
     */
    merchantId?: string;
    /**
     * The ID of the order.
     */
    orderId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$OrdersRejectReturnLineItemRequest;
  }
  export interface Params$Resource$Orders$Returnlineitem
    extends StandardParameters {
    /**
     * The ID of the account that manages the order. This cannot be a multi-client account.
     */
    merchantId?: string;
    /**
     * The ID of the order.
     */
    orderId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$OrdersReturnLineItemRequest;
  }
  export interface Params$Resource$Orders$Returnrefundlineitem
    extends StandardParameters {
    /**
     * The ID of the account that manages the order. This cannot be a multi-client account.
     */
    merchantId?: string;
    /**
     * The ID of the order.
     */
    orderId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$OrdersReturnRefundLineItemRequest;
  }
  export interface Params$Resource$Orders$Setlineitemmetadata
    extends StandardParameters {
    /**
     * The ID of the account that manages the order. This cannot be a multi-client account.
     */
    merchantId?: string;
    /**
     * The ID of the order.
     */
    orderId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$OrdersSetLineItemMetadataRequest;
  }
  export interface Params$Resource$Orders$Shiplineitems
    extends StandardParameters {
    /**
     * The ID of the account that manages the order. This cannot be a multi-client account.
     */
    merchantId?: string;
    /**
     * The ID of the order.
     */
    orderId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$OrdersShipLineItemsRequest;
  }
  export interface Params$Resource$Orders$Updatelineitemshippingdetails
    extends StandardParameters {
    /**
     * The ID of the account that manages the order. This cannot be a multi-client account.
     */
    merchantId?: string;
    /**
     * The ID of the order.
     */
    orderId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$OrdersUpdateLineItemShippingDetailsRequest;
  }
  export interface Params$Resource$Orders$Updatemerchantorderid
    extends StandardParameters {
    /**
     * The ID of the account that manages the order. This cannot be a multi-client account.
     */
    merchantId?: string;
    /**
     * The ID of the order.
     */
    orderId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$OrdersUpdateMerchantOrderIdRequest;
  }
  export interface Params$Resource$Orders$Updateshipment
    extends StandardParameters {
    /**
     * The ID of the account that manages the order. This cannot be a multi-client account.
     */
    merchantId?: string;
    /**
     * The ID of the order.
     */
    orderId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$OrdersUpdateShipmentRequest;
  }

  export class Resource$Pos {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * content.pos.custombatch
     * @desc Batches multiple POS-related calls in a single request.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.pos.custombatch({
     *     // Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     *     dryRun: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "entries": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "entries": [],
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.pos.custombatch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     * @param {().PosCustomBatchRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    custombatch(
      params: Params$Resource$Pos$Custombatch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    custombatch(
      params?: Params$Resource$Pos$Custombatch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PosCustomBatchResponse>;
    custombatch(
      params: Params$Resource$Pos$Custombatch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    custombatch(
      params: Params$Resource$Pos$Custombatch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PosCustomBatchResponse>,
      callback: BodyResponseCallback<Schema$PosCustomBatchResponse>
    ): void;
    custombatch(
      params: Params$Resource$Pos$Custombatch,
      callback: BodyResponseCallback<Schema$PosCustomBatchResponse>
    ): void;
    custombatch(
      callback: BodyResponseCallback<Schema$PosCustomBatchResponse>
    ): void;
    custombatch(
      paramsOrCallback?:
        | Params$Resource$Pos$Custombatch
        | BodyResponseCallback<Schema$PosCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PosCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PosCustomBatchResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$PosCustomBatchResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Pos$Custombatch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Pos$Custombatch;
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
            url: (rootUrl + '/content/v2/pos/batch').replace(
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
        createAPIRequest<Schema$PosCustomBatchResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$PosCustomBatchResponse>(parameters);
      }
    }

    /**
     * content.pos.delete
     * @desc Deletes a store for the given merchant.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.pos.delete({
     *     // Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     *     dryRun: 'placeholder-value',
     *     // The ID of the POS or inventory data provider.
     *     merchantId: 'placeholder-value',
     *     // A store code that is unique per merchant.
     *     storeCode: 'placeholder-value',
     *     // The ID of the target merchant.
     *     targetMerchantId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.pos.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     * @param {string} params.merchantId The ID of the POS or inventory data provider.
     * @param {string} params.storeCode A store code that is unique per merchant.
     * @param {string} params.targetMerchantId The ID of the target merchant.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params: Params$Resource$Pos$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Pos$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Pos$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Pos$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Pos$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Pos$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Pos$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Pos$Delete;
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
              '/content/v2/{merchantId}/pos/{targetMerchantId}/store/{storeCode}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'targetMerchantId', 'storeCode'],
        pathParams: ['merchantId', 'storeCode', 'targetMerchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * content.pos.get
     * @desc Retrieves information about the given store.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.pos.get({
     *     // The ID of the POS or inventory data provider.
     *     merchantId: 'placeholder-value',
     *     // A store code that is unique per merchant.
     *     storeCode: 'placeholder-value',
     *     // The ID of the target merchant.
     *     targetMerchantId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "storeAddress": "my_storeAddress",
     *   //   "storeCode": "my_storeCode"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
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
    get(
      params: Params$Resource$Pos$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Pos$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PosStore>;
    get(
      params: Params$Resource$Pos$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Pos$Get,
      options: MethodOptions | BodyResponseCallback<Schema$PosStore>,
      callback: BodyResponseCallback<Schema$PosStore>
    ): void;
    get(
      params: Params$Resource$Pos$Get,
      callback: BodyResponseCallback<Schema$PosStore>
    ): void;
    get(callback: BodyResponseCallback<Schema$PosStore>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Pos$Get
        | BodyResponseCallback<Schema$PosStore>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PosStore>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PosStore>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$PosStore> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Pos$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Pos$Get;
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
              '/content/v2/{merchantId}/pos/{targetMerchantId}/store/{storeCode}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'targetMerchantId', 'storeCode'],
        pathParams: ['merchantId', 'storeCode', 'targetMerchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PosStore>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$PosStore>(parameters);
      }
    }

    /**
     * content.pos.insert
     * @desc Creates a store for the given merchant.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.pos.insert({
     *     // Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     *     dryRun: 'placeholder-value',
     *     // The ID of the POS or inventory data provider.
     *     merchantId: 'placeholder-value',
     *     // The ID of the target merchant.
     *     targetMerchantId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "kind": "my_kind",
     *       //   "storeAddress": "my_storeAddress",
     *       //   "storeCode": "my_storeCode"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "storeAddress": "my_storeAddress",
     *   //   "storeCode": "my_storeCode"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.pos.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     * @param {string} params.merchantId The ID of the POS or inventory data provider.
     * @param {string} params.targetMerchantId The ID of the target merchant.
     * @param {().PosStore} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params: Params$Resource$Pos$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Pos$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PosStore>;
    insert(
      params: Params$Resource$Pos$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Pos$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$PosStore>,
      callback: BodyResponseCallback<Schema$PosStore>
    ): void;
    insert(
      params: Params$Resource$Pos$Insert,
      callback: BodyResponseCallback<Schema$PosStore>
    ): void;
    insert(callback: BodyResponseCallback<Schema$PosStore>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Pos$Insert
        | BodyResponseCallback<Schema$PosStore>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PosStore>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PosStore>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$PosStore> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Pos$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Pos$Insert;
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
              rootUrl + '/content/v2/{merchantId}/pos/{targetMerchantId}/store'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'targetMerchantId'],
        pathParams: ['merchantId', 'targetMerchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PosStore>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$PosStore>(parameters);
      }
    }

    /**
     * content.pos.inventory
     * @desc Submit inventory for the given merchant.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.pos.inventory({
     *     // Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     *     dryRun: 'placeholder-value',
     *     // The ID of the POS or inventory data provider.
     *     merchantId: 'placeholder-value',
     *     // The ID of the target merchant.
     *     targetMerchantId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "contentLanguage": "my_contentLanguage",
     *       //   "gtin": "my_gtin",
     *       //   "itemId": "my_itemId",
     *       //   "price": {},
     *       //   "quantity": "my_quantity",
     *       //   "storeCode": "my_storeCode",
     *       //   "targetCountry": "my_targetCountry",
     *       //   "timestamp": "my_timestamp"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentLanguage": "my_contentLanguage",
     *   //   "gtin": "my_gtin",
     *   //   "itemId": "my_itemId",
     *   //   "kind": "my_kind",
     *   //   "price": {},
     *   //   "quantity": "my_quantity",
     *   //   "storeCode": "my_storeCode",
     *   //   "targetCountry": "my_targetCountry",
     *   //   "timestamp": "my_timestamp"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.pos.inventory
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     * @param {string} params.merchantId The ID of the POS or inventory data provider.
     * @param {string} params.targetMerchantId The ID of the target merchant.
     * @param {().PosInventoryRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    inventory(
      params: Params$Resource$Pos$Inventory,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    inventory(
      params?: Params$Resource$Pos$Inventory,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PosInventoryResponse>;
    inventory(
      params: Params$Resource$Pos$Inventory,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    inventory(
      params: Params$Resource$Pos$Inventory,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PosInventoryResponse>,
      callback: BodyResponseCallback<Schema$PosInventoryResponse>
    ): void;
    inventory(
      params: Params$Resource$Pos$Inventory,
      callback: BodyResponseCallback<Schema$PosInventoryResponse>
    ): void;
    inventory(
      callback: BodyResponseCallback<Schema$PosInventoryResponse>
    ): void;
    inventory(
      paramsOrCallback?:
        | Params$Resource$Pos$Inventory
        | BodyResponseCallback<Schema$PosInventoryResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PosInventoryResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PosInventoryResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$PosInventoryResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Pos$Inventory;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Pos$Inventory;
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
              '/content/v2/{merchantId}/pos/{targetMerchantId}/inventory'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'targetMerchantId'],
        pathParams: ['merchantId', 'targetMerchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PosInventoryResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$PosInventoryResponse>(parameters);
      }
    }

    /**
     * content.pos.list
     * @desc Lists the stores of the target merchant.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.pos.list({
     *     // The ID of the POS or inventory data provider.
     *     merchantId: 'placeholder-value',
     *     // The ID of the target merchant.
     *     targetMerchantId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "resources": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
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
    list(
      params: Params$Resource$Pos$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Pos$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PosListResponse>;
    list(
      params: Params$Resource$Pos$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Pos$List,
      options: MethodOptions | BodyResponseCallback<Schema$PosListResponse>,
      callback: BodyResponseCallback<Schema$PosListResponse>
    ): void;
    list(
      params: Params$Resource$Pos$List,
      callback: BodyResponseCallback<Schema$PosListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$PosListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Pos$List
        | BodyResponseCallback<Schema$PosListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PosListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PosListResponse>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$PosListResponse> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Pos$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Pos$List;
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
              rootUrl + '/content/v2/{merchantId}/pos/{targetMerchantId}/store'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'targetMerchantId'],
        pathParams: ['merchantId', 'targetMerchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PosListResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$PosListResponse>(parameters);
      }
    }

    /**
     * content.pos.sale
     * @desc Submit a sale event for the given merchant.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.pos.sale({
     *     // Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     *     dryRun: 'placeholder-value',
     *     // The ID of the POS or inventory data provider.
     *     merchantId: 'placeholder-value',
     *     // The ID of the target merchant.
     *     targetMerchantId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "contentLanguage": "my_contentLanguage",
     *       //   "gtin": "my_gtin",
     *       //   "itemId": "my_itemId",
     *       //   "price": {},
     *       //   "quantity": "my_quantity",
     *       //   "saleId": "my_saleId",
     *       //   "storeCode": "my_storeCode",
     *       //   "targetCountry": "my_targetCountry",
     *       //   "timestamp": "my_timestamp"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentLanguage": "my_contentLanguage",
     *   //   "gtin": "my_gtin",
     *   //   "itemId": "my_itemId",
     *   //   "kind": "my_kind",
     *   //   "price": {},
     *   //   "quantity": "my_quantity",
     *   //   "saleId": "my_saleId",
     *   //   "storeCode": "my_storeCode",
     *   //   "targetCountry": "my_targetCountry",
     *   //   "timestamp": "my_timestamp"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.pos.sale
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     * @param {string} params.merchantId The ID of the POS or inventory data provider.
     * @param {string} params.targetMerchantId The ID of the target merchant.
     * @param {().PosSaleRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    sale(
      params: Params$Resource$Pos$Sale,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    sale(
      params?: Params$Resource$Pos$Sale,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PosSaleResponse>;
    sale(
      params: Params$Resource$Pos$Sale,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    sale(
      params: Params$Resource$Pos$Sale,
      options: MethodOptions | BodyResponseCallback<Schema$PosSaleResponse>,
      callback: BodyResponseCallback<Schema$PosSaleResponse>
    ): void;
    sale(
      params: Params$Resource$Pos$Sale,
      callback: BodyResponseCallback<Schema$PosSaleResponse>
    ): void;
    sale(callback: BodyResponseCallback<Schema$PosSaleResponse>): void;
    sale(
      paramsOrCallback?:
        | Params$Resource$Pos$Sale
        | BodyResponseCallback<Schema$PosSaleResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PosSaleResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PosSaleResponse>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$PosSaleResponse> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Pos$Sale;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Pos$Sale;
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
              rootUrl + '/content/v2/{merchantId}/pos/{targetMerchantId}/sale'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'targetMerchantId'],
        pathParams: ['merchantId', 'targetMerchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PosSaleResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$PosSaleResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Pos$Custombatch extends StandardParameters {
    /**
     * Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     */
    dryRun?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PosCustomBatchRequest;
  }
  export interface Params$Resource$Pos$Delete extends StandardParameters {
    /**
     * Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     */
    dryRun?: boolean;
    /**
     * The ID of the POS or inventory data provider.
     */
    merchantId?: string;
    /**
     * A store code that is unique per merchant.
     */
    storeCode?: string;
    /**
     * The ID of the target merchant.
     */
    targetMerchantId?: string;
  }
  export interface Params$Resource$Pos$Get extends StandardParameters {
    /**
     * The ID of the POS or inventory data provider.
     */
    merchantId?: string;
    /**
     * A store code that is unique per merchant.
     */
    storeCode?: string;
    /**
     * The ID of the target merchant.
     */
    targetMerchantId?: string;
  }
  export interface Params$Resource$Pos$Insert extends StandardParameters {
    /**
     * Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     */
    dryRun?: boolean;
    /**
     * The ID of the POS or inventory data provider.
     */
    merchantId?: string;
    /**
     * The ID of the target merchant.
     */
    targetMerchantId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PosStore;
  }
  export interface Params$Resource$Pos$Inventory extends StandardParameters {
    /**
     * Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     */
    dryRun?: boolean;
    /**
     * The ID of the POS or inventory data provider.
     */
    merchantId?: string;
    /**
     * The ID of the target merchant.
     */
    targetMerchantId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PosInventoryRequest;
  }
  export interface Params$Resource$Pos$List extends StandardParameters {
    /**
     * The ID of the POS or inventory data provider.
     */
    merchantId?: string;
    /**
     * The ID of the target merchant.
     */
    targetMerchantId?: string;
  }
  export interface Params$Resource$Pos$Sale extends StandardParameters {
    /**
     * Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     */
    dryRun?: boolean;
    /**
     * The ID of the POS or inventory data provider.
     */
    merchantId?: string;
    /**
     * The ID of the target merchant.
     */
    targetMerchantId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PosSaleRequest;
  }

  export class Resource$Products {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * content.products.custombatch
     * @desc Retrieves, inserts, and deletes multiple products in a single request.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.products.custombatch({
     *     // Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     *     dryRun: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "entries": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "entries": [],
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.products.custombatch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     * @param {().ProductsCustomBatchRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    custombatch(
      params: Params$Resource$Products$Custombatch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    custombatch(
      params?: Params$Resource$Products$Custombatch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ProductsCustomBatchResponse>;
    custombatch(
      params: Params$Resource$Products$Custombatch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    custombatch(
      params: Params$Resource$Products$Custombatch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ProductsCustomBatchResponse>,
      callback: BodyResponseCallback<Schema$ProductsCustomBatchResponse>
    ): void;
    custombatch(
      params: Params$Resource$Products$Custombatch,
      callback: BodyResponseCallback<Schema$ProductsCustomBatchResponse>
    ): void;
    custombatch(
      callback: BodyResponseCallback<Schema$ProductsCustomBatchResponse>
    ): void;
    custombatch(
      paramsOrCallback?:
        | Params$Resource$Products$Custombatch
        | BodyResponseCallback<Schema$ProductsCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ProductsCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ProductsCustomBatchResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ProductsCustomBatchResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Products$Custombatch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Products$Custombatch;
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
            url: (rootUrl + '/content/v2/products/batch').replace(
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
        createAPIRequest<Schema$ProductsCustomBatchResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ProductsCustomBatchResponse>(parameters);
      }
    }

    /**
     * content.products.delete
     * @desc Deletes a product from your Merchant Center account.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.products.delete({
     *     // Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     *     dryRun: 'placeholder-value',
     *     // The ID of the account that contains the product. This account cannot be a multi-client account.
     *     merchantId: 'placeholder-value',
     *     // The REST ID of the product.
     *     productId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.products.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     * @param {string} params.merchantId The ID of the account that contains the product. This account cannot be a multi-client account.
     * @param {string} params.productId The REST ID of the product.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params: Params$Resource$Products$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Products$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Products$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Products$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Products$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Products$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Products$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Products$Delete;
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
              rootUrl + '/content/v2/{merchantId}/products/{productId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'productId'],
        pathParams: ['merchantId', 'productId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * content.products.get
     * @desc Retrieves a product from your Merchant Center account.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.products.get({
     *     // The ID of the account that contains the product. This account cannot be a multi-client account.
     *     merchantId: 'placeholder-value',
     *     // The REST ID of the product.
     *     productId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "additionalImageLinks": [],
     *   //   "additionalProductTypes": [],
     *   //   "adult": false,
     *   //   "adwordsGrouping": "my_adwordsGrouping",
     *   //   "adwordsLabels": [],
     *   //   "adwordsRedirect": "my_adwordsRedirect",
     *   //   "ageGroup": "my_ageGroup",
     *   //   "aspects": [],
     *   //   "availability": "my_availability",
     *   //   "availabilityDate": "my_availabilityDate",
     *   //   "brand": "my_brand",
     *   //   "canonicalLink": "my_canonicalLink",
     *   //   "channel": "my_channel",
     *   //   "color": "my_color",
     *   //   "condition": "my_condition",
     *   //   "contentLanguage": "my_contentLanguage",
     *   //   "costOfGoodsSold": {},
     *   //   "customAttributes": [],
     *   //   "customGroups": [],
     *   //   "customLabel0": "my_customLabel0",
     *   //   "customLabel1": "my_customLabel1",
     *   //   "customLabel2": "my_customLabel2",
     *   //   "customLabel3": "my_customLabel3",
     *   //   "customLabel4": "my_customLabel4",
     *   //   "description": "my_description",
     *   //   "destinations": [],
     *   //   "displayAdsId": "my_displayAdsId",
     *   //   "displayAdsLink": "my_displayAdsLink",
     *   //   "displayAdsSimilarIds": [],
     *   //   "displayAdsTitle": "my_displayAdsTitle",
     *   //   "displayAdsValue": {},
     *   //   "energyEfficiencyClass": "my_energyEfficiencyClass",
     *   //   "expirationDate": "my_expirationDate",
     *   //   "gender": "my_gender",
     *   //   "googleProductCategory": "my_googleProductCategory",
     *   //   "gtin": "my_gtin",
     *   //   "id": "my_id",
     *   //   "identifierExists": false,
     *   //   "imageLink": "my_imageLink",
     *   //   "installment": {},
     *   //   "isBundle": false,
     *   //   "itemGroupId": "my_itemGroupId",
     *   //   "kind": "my_kind",
     *   //   "link": "my_link",
     *   //   "loyaltyPoints": {},
     *   //   "material": "my_material",
     *   //   "maxEnergyEfficiencyClass": "my_maxEnergyEfficiencyClass",
     *   //   "maxHandlingTime": "my_maxHandlingTime",
     *   //   "minEnergyEfficiencyClass": "my_minEnergyEfficiencyClass",
     *   //   "minHandlingTime": "my_minHandlingTime",
     *   //   "mobileLink": "my_mobileLink",
     *   //   "mpn": "my_mpn",
     *   //   "multipack": "my_multipack",
     *   //   "offerId": "my_offerId",
     *   //   "onlineOnly": false,
     *   //   "pattern": "my_pattern",
     *   //   "price": {},
     *   //   "productType": "my_productType",
     *   //   "promotionIds": [],
     *   //   "salePrice": {},
     *   //   "salePriceEffectiveDate": "my_salePriceEffectiveDate",
     *   //   "sellOnGoogleQuantity": "my_sellOnGoogleQuantity",
     *   //   "shipping": [],
     *   //   "shippingHeight": {},
     *   //   "shippingLabel": "my_shippingLabel",
     *   //   "shippingLength": {},
     *   //   "shippingWeight": {},
     *   //   "shippingWidth": {},
     *   //   "sizeSystem": "my_sizeSystem",
     *   //   "sizeType": "my_sizeType",
     *   //   "sizes": [],
     *   //   "source": "my_source",
     *   //   "targetCountry": "my_targetCountry",
     *   //   "taxes": [],
     *   //   "title": "my_title",
     *   //   "unitPricingBaseMeasure": {},
     *   //   "unitPricingMeasure": {},
     *   //   "validatedDestinations": [],
     *   //   "warnings": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.products.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.merchantId The ID of the account that contains the product. This account cannot be a multi-client account.
     * @param {string} params.productId The REST ID of the product.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Products$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Products$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Product>;
    get(
      params: Params$Resource$Products$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Products$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Product>,
      callback: BodyResponseCallback<Schema$Product>
    ): void;
    get(
      params: Params$Resource$Products$Get,
      callback: BodyResponseCallback<Schema$Product>
    ): void;
    get(callback: BodyResponseCallback<Schema$Product>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Products$Get
        | BodyResponseCallback<Schema$Product>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Product>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Product>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Product> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Products$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Products$Get;
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
              rootUrl + '/content/v2/{merchantId}/products/{productId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'productId'],
        pathParams: ['merchantId', 'productId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Product>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Product>(parameters);
      }
    }

    /**
     * content.products.insert
     * @desc Uploads a product to your Merchant Center account. If an item with the same channel, contentLanguage, offerId, and targetCountry already exists, this method updates that entry.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.products.insert({
     *     // Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     *     dryRun: 'placeholder-value',
     *     // The ID of the account that contains the product. This account cannot be a multi-client account.
     *     merchantId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "additionalImageLinks": [],
     *       //   "additionalProductTypes": [],
     *       //   "adult": false,
     *       //   "adwordsGrouping": "my_adwordsGrouping",
     *       //   "adwordsLabels": [],
     *       //   "adwordsRedirect": "my_adwordsRedirect",
     *       //   "ageGroup": "my_ageGroup",
     *       //   "aspects": [],
     *       //   "availability": "my_availability",
     *       //   "availabilityDate": "my_availabilityDate",
     *       //   "brand": "my_brand",
     *       //   "canonicalLink": "my_canonicalLink",
     *       //   "channel": "my_channel",
     *       //   "color": "my_color",
     *       //   "condition": "my_condition",
     *       //   "contentLanguage": "my_contentLanguage",
     *       //   "costOfGoodsSold": {},
     *       //   "customAttributes": [],
     *       //   "customGroups": [],
     *       //   "customLabel0": "my_customLabel0",
     *       //   "customLabel1": "my_customLabel1",
     *       //   "customLabel2": "my_customLabel2",
     *       //   "customLabel3": "my_customLabel3",
     *       //   "customLabel4": "my_customLabel4",
     *       //   "description": "my_description",
     *       //   "destinations": [],
     *       //   "displayAdsId": "my_displayAdsId",
     *       //   "displayAdsLink": "my_displayAdsLink",
     *       //   "displayAdsSimilarIds": [],
     *       //   "displayAdsTitle": "my_displayAdsTitle",
     *       //   "displayAdsValue": {},
     *       //   "energyEfficiencyClass": "my_energyEfficiencyClass",
     *       //   "expirationDate": "my_expirationDate",
     *       //   "gender": "my_gender",
     *       //   "googleProductCategory": "my_googleProductCategory",
     *       //   "gtin": "my_gtin",
     *       //   "id": "my_id",
     *       //   "identifierExists": false,
     *       //   "imageLink": "my_imageLink",
     *       //   "installment": {},
     *       //   "isBundle": false,
     *       //   "itemGroupId": "my_itemGroupId",
     *       //   "kind": "my_kind",
     *       //   "link": "my_link",
     *       //   "loyaltyPoints": {},
     *       //   "material": "my_material",
     *       //   "maxEnergyEfficiencyClass": "my_maxEnergyEfficiencyClass",
     *       //   "maxHandlingTime": "my_maxHandlingTime",
     *       //   "minEnergyEfficiencyClass": "my_minEnergyEfficiencyClass",
     *       //   "minHandlingTime": "my_minHandlingTime",
     *       //   "mobileLink": "my_mobileLink",
     *       //   "mpn": "my_mpn",
     *       //   "multipack": "my_multipack",
     *       //   "offerId": "my_offerId",
     *       //   "onlineOnly": false,
     *       //   "pattern": "my_pattern",
     *       //   "price": {},
     *       //   "productType": "my_productType",
     *       //   "promotionIds": [],
     *       //   "salePrice": {},
     *       //   "salePriceEffectiveDate": "my_salePriceEffectiveDate",
     *       //   "sellOnGoogleQuantity": "my_sellOnGoogleQuantity",
     *       //   "shipping": [],
     *       //   "shippingHeight": {},
     *       //   "shippingLabel": "my_shippingLabel",
     *       //   "shippingLength": {},
     *       //   "shippingWeight": {},
     *       //   "shippingWidth": {},
     *       //   "sizeSystem": "my_sizeSystem",
     *       //   "sizeType": "my_sizeType",
     *       //   "sizes": [],
     *       //   "source": "my_source",
     *       //   "targetCountry": "my_targetCountry",
     *       //   "taxes": [],
     *       //   "title": "my_title",
     *       //   "unitPricingBaseMeasure": {},
     *       //   "unitPricingMeasure": {},
     *       //   "validatedDestinations": [],
     *       //   "warnings": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "additionalImageLinks": [],
     *   //   "additionalProductTypes": [],
     *   //   "adult": false,
     *   //   "adwordsGrouping": "my_adwordsGrouping",
     *   //   "adwordsLabels": [],
     *   //   "adwordsRedirect": "my_adwordsRedirect",
     *   //   "ageGroup": "my_ageGroup",
     *   //   "aspects": [],
     *   //   "availability": "my_availability",
     *   //   "availabilityDate": "my_availabilityDate",
     *   //   "brand": "my_brand",
     *   //   "canonicalLink": "my_canonicalLink",
     *   //   "channel": "my_channel",
     *   //   "color": "my_color",
     *   //   "condition": "my_condition",
     *   //   "contentLanguage": "my_contentLanguage",
     *   //   "costOfGoodsSold": {},
     *   //   "customAttributes": [],
     *   //   "customGroups": [],
     *   //   "customLabel0": "my_customLabel0",
     *   //   "customLabel1": "my_customLabel1",
     *   //   "customLabel2": "my_customLabel2",
     *   //   "customLabel3": "my_customLabel3",
     *   //   "customLabel4": "my_customLabel4",
     *   //   "description": "my_description",
     *   //   "destinations": [],
     *   //   "displayAdsId": "my_displayAdsId",
     *   //   "displayAdsLink": "my_displayAdsLink",
     *   //   "displayAdsSimilarIds": [],
     *   //   "displayAdsTitle": "my_displayAdsTitle",
     *   //   "displayAdsValue": {},
     *   //   "energyEfficiencyClass": "my_energyEfficiencyClass",
     *   //   "expirationDate": "my_expirationDate",
     *   //   "gender": "my_gender",
     *   //   "googleProductCategory": "my_googleProductCategory",
     *   //   "gtin": "my_gtin",
     *   //   "id": "my_id",
     *   //   "identifierExists": false,
     *   //   "imageLink": "my_imageLink",
     *   //   "installment": {},
     *   //   "isBundle": false,
     *   //   "itemGroupId": "my_itemGroupId",
     *   //   "kind": "my_kind",
     *   //   "link": "my_link",
     *   //   "loyaltyPoints": {},
     *   //   "material": "my_material",
     *   //   "maxEnergyEfficiencyClass": "my_maxEnergyEfficiencyClass",
     *   //   "maxHandlingTime": "my_maxHandlingTime",
     *   //   "minEnergyEfficiencyClass": "my_minEnergyEfficiencyClass",
     *   //   "minHandlingTime": "my_minHandlingTime",
     *   //   "mobileLink": "my_mobileLink",
     *   //   "mpn": "my_mpn",
     *   //   "multipack": "my_multipack",
     *   //   "offerId": "my_offerId",
     *   //   "onlineOnly": false,
     *   //   "pattern": "my_pattern",
     *   //   "price": {},
     *   //   "productType": "my_productType",
     *   //   "promotionIds": [],
     *   //   "salePrice": {},
     *   //   "salePriceEffectiveDate": "my_salePriceEffectiveDate",
     *   //   "sellOnGoogleQuantity": "my_sellOnGoogleQuantity",
     *   //   "shipping": [],
     *   //   "shippingHeight": {},
     *   //   "shippingLabel": "my_shippingLabel",
     *   //   "shippingLength": {},
     *   //   "shippingWeight": {},
     *   //   "shippingWidth": {},
     *   //   "sizeSystem": "my_sizeSystem",
     *   //   "sizeType": "my_sizeType",
     *   //   "sizes": [],
     *   //   "source": "my_source",
     *   //   "targetCountry": "my_targetCountry",
     *   //   "taxes": [],
     *   //   "title": "my_title",
     *   //   "unitPricingBaseMeasure": {},
     *   //   "unitPricingMeasure": {},
     *   //   "validatedDestinations": [],
     *   //   "warnings": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.products.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     * @param {string} params.merchantId The ID of the account that contains the product. This account cannot be a multi-client account.
     * @param {().Product} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params: Params$Resource$Products$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Products$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Product>;
    insert(
      params: Params$Resource$Products$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Products$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Product>,
      callback: BodyResponseCallback<Schema$Product>
    ): void;
    insert(
      params: Params$Resource$Products$Insert,
      callback: BodyResponseCallback<Schema$Product>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Product>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Products$Insert
        | BodyResponseCallback<Schema$Product>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Product>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Product>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Product> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Products$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Products$Insert;
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
            url: (rootUrl + '/content/v2/{merchantId}/products').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Product>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Product>(parameters);
      }
    }

    /**
     * content.products.list
     * @desc Lists the products in your Merchant Center account. The response might contain fewer items than specified by maxResults. Rely on nextPageToken to determine if there are more items to be requested.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.products.list({
     *     // Flag to include the invalid inserted items in the result of the list request. By default the invalid items are not shown (the default value is false).
     *     includeInvalidInsertedItems: 'placeholder-value',
     *     // The maximum number of products to return in the response, used for paging.
     *     maxResults: 'placeholder-value',
     *     // The ID of the account that contains the products. This account cannot be a multi-client account.
     *     merchantId: 'placeholder-value',
     *     // The token returned by the previous request.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "resources": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
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
    list(
      params: Params$Resource$Products$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Products$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ProductsListResponse>;
    list(
      params: Params$Resource$Products$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Products$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ProductsListResponse>,
      callback: BodyResponseCallback<Schema$ProductsListResponse>
    ): void;
    list(
      params: Params$Resource$Products$List,
      callback: BodyResponseCallback<Schema$ProductsListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ProductsListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Products$List
        | BodyResponseCallback<Schema$ProductsListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ProductsListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ProductsListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ProductsListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Products$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Products$List;
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
            url: (rootUrl + '/content/v2/{merchantId}/products').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ProductsListResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ProductsListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Products$Custombatch
    extends StandardParameters {
    /**
     * Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     */
    dryRun?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ProductsCustomBatchRequest;
  }
  export interface Params$Resource$Products$Delete extends StandardParameters {
    /**
     * Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     */
    dryRun?: boolean;
    /**
     * The ID of the account that contains the product. This account cannot be a multi-client account.
     */
    merchantId?: string;
    /**
     * The REST ID of the product.
     */
    productId?: string;
  }
  export interface Params$Resource$Products$Get extends StandardParameters {
    /**
     * The ID of the account that contains the product. This account cannot be a multi-client account.
     */
    merchantId?: string;
    /**
     * The REST ID of the product.
     */
    productId?: string;
  }
  export interface Params$Resource$Products$Insert extends StandardParameters {
    /**
     * Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     */
    dryRun?: boolean;
    /**
     * The ID of the account that contains the product. This account cannot be a multi-client account.
     */
    merchantId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Product;
  }
  export interface Params$Resource$Products$List extends StandardParameters {
    /**
     * Flag to include the invalid inserted items in the result of the list request. By default the invalid items are not shown (the default value is false).
     */
    includeInvalidInsertedItems?: boolean;
    /**
     * The maximum number of products to return in the response, used for paging.
     */
    maxResults?: number;
    /**
     * The ID of the account that contains the products. This account cannot be a multi-client account.
     */
    merchantId?: string;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
  }

  export class Resource$Productstatuses {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * content.productstatuses.custombatch
     * @desc Gets the statuses of multiple products in a single request.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.productstatuses.custombatch({
     *     // Flag to include full product data in the results of this request. The default value is false.
     *     includeAttributes: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "entries": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "entries": [],
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.productstatuses.custombatch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.includeAttributes Flag to include full product data in the results of this request. The default value is false.
     * @param {().ProductstatusesCustomBatchRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    custombatch(
      params: Params$Resource$Productstatuses$Custombatch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    custombatch(
      params?: Params$Resource$Productstatuses$Custombatch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ProductstatusesCustomBatchResponse>;
    custombatch(
      params: Params$Resource$Productstatuses$Custombatch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    custombatch(
      params: Params$Resource$Productstatuses$Custombatch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ProductstatusesCustomBatchResponse>,
      callback: BodyResponseCallback<Schema$ProductstatusesCustomBatchResponse>
    ): void;
    custombatch(
      params: Params$Resource$Productstatuses$Custombatch,
      callback: BodyResponseCallback<Schema$ProductstatusesCustomBatchResponse>
    ): void;
    custombatch(
      callback: BodyResponseCallback<Schema$ProductstatusesCustomBatchResponse>
    ): void;
    custombatch(
      paramsOrCallback?:
        | Params$Resource$Productstatuses$Custombatch
        | BodyResponseCallback<Schema$ProductstatusesCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ProductstatusesCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ProductstatusesCustomBatchResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ProductstatusesCustomBatchResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Productstatuses$Custombatch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Productstatuses$Custombatch;
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
            url: (rootUrl + '/content/v2/productstatuses/batch').replace(
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
        createAPIRequest<Schema$ProductstatusesCustomBatchResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ProductstatusesCustomBatchResponse>(
          parameters
        );
      }
    }

    /**
     * content.productstatuses.get
     * @desc Gets the status of a product from your Merchant Center account.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.productstatuses.get({
     *     // If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
     *     destinations: 'placeholder-value',
     *     // Flag to include full product data in the result of this get request. The default value is false.
     *     includeAttributes: 'placeholder-value',
     *     // The ID of the account that contains the product. This account cannot be a multi-client account.
     *     merchantId: 'placeholder-value',
     *     // The REST ID of the product.
     *     productId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "creationDate": "my_creationDate",
     *   //   "dataQualityIssues": [],
     *   //   "destinationStatuses": [],
     *   //   "googleExpirationDate": "my_googleExpirationDate",
     *   //   "itemLevelIssues": [],
     *   //   "kind": "my_kind",
     *   //   "lastUpdateDate": "my_lastUpdateDate",
     *   //   "link": "my_link",
     *   //   "product": {},
     *   //   "productId": "my_productId",
     *   //   "title": "my_title"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.productstatuses.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.destinations If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
     * @param {boolean=} params.includeAttributes Flag to include full product data in the result of this get request. The default value is false.
     * @param {string} params.merchantId The ID of the account that contains the product. This account cannot be a multi-client account.
     * @param {string} params.productId The REST ID of the product.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Productstatuses$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Productstatuses$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ProductStatus>;
    get(
      params: Params$Resource$Productstatuses$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Productstatuses$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ProductStatus>,
      callback: BodyResponseCallback<Schema$ProductStatus>
    ): void;
    get(
      params: Params$Resource$Productstatuses$Get,
      callback: BodyResponseCallback<Schema$ProductStatus>
    ): void;
    get(callback: BodyResponseCallback<Schema$ProductStatus>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Productstatuses$Get
        | BodyResponseCallback<Schema$ProductStatus>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ProductStatus>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ProductStatus>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ProductStatus> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Productstatuses$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Productstatuses$Get;
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
              rootUrl + '/content/v2/{merchantId}/productstatuses/{productId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'productId'],
        pathParams: ['merchantId', 'productId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ProductStatus>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ProductStatus>(parameters);
      }
    }

    /**
     * content.productstatuses.list
     * @desc Lists the statuses of the products in your Merchant Center account.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.productstatuses.list({
     *     // If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
     *     destinations: 'placeholder-value',
     *     // Flag to include full product data in the results of the list request. The default value is false.
     *     includeAttributes: 'placeholder-value',
     *     // Flag to include the invalid inserted items in the result of the list request. By default the invalid items are not shown (the default value is false).
     *     includeInvalidInsertedItems: 'placeholder-value',
     *     // The maximum number of product statuses to return in the response, used for paging.
     *     maxResults: 'placeholder-value',
     *     // The ID of the account that contains the products. This account cannot be a multi-client account.
     *     merchantId: 'placeholder-value',
     *     // The token returned by the previous request.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "resources": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
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
    list(
      params: Params$Resource$Productstatuses$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Productstatuses$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ProductstatusesListResponse>;
    list(
      params: Params$Resource$Productstatuses$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Productstatuses$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ProductstatusesListResponse>,
      callback: BodyResponseCallback<Schema$ProductstatusesListResponse>
    ): void;
    list(
      params: Params$Resource$Productstatuses$List,
      callback: BodyResponseCallback<Schema$ProductstatusesListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ProductstatusesListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Productstatuses$List
        | BodyResponseCallback<Schema$ProductstatusesListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ProductstatusesListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ProductstatusesListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ProductstatusesListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Productstatuses$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Productstatuses$List;
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
            url: (rootUrl + '/content/v2/{merchantId}/productstatuses').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ProductstatusesListResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ProductstatusesListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Productstatuses$Custombatch
    extends StandardParameters {
    /**
     * Flag to include full product data in the results of this request. The default value is false.
     */
    includeAttributes?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ProductstatusesCustomBatchRequest;
  }
  export interface Params$Resource$Productstatuses$Get
    extends StandardParameters {
    /**
     * If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
     */
    destinations?: string[];
    /**
     * Flag to include full product data in the result of this get request. The default value is false.
     */
    includeAttributes?: boolean;
    /**
     * The ID of the account that contains the product. This account cannot be a multi-client account.
     */
    merchantId?: string;
    /**
     * The REST ID of the product.
     */
    productId?: string;
  }
  export interface Params$Resource$Productstatuses$List
    extends StandardParameters {
    /**
     * If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
     */
    destinations?: string[];
    /**
     * Flag to include full product data in the results of the list request. The default value is false.
     */
    includeAttributes?: boolean;
    /**
     * Flag to include the invalid inserted items in the result of the list request. By default the invalid items are not shown (the default value is false).
     */
    includeInvalidInsertedItems?: boolean;
    /**
     * The maximum number of product statuses to return in the response, used for paging.
     */
    maxResults?: number;
    /**
     * The ID of the account that contains the products. This account cannot be a multi-client account.
     */
    merchantId?: string;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
  }

  export class Resource$Shippingsettings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * content.shippingsettings.custombatch
     * @desc Retrieves and updates the shipping settings of multiple accounts in a single request.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.shippingsettings.custombatch({
     *     // Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     *     dryRun: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "entries": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "entries": [],
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.shippingsettings.custombatch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     * @param {().ShippingsettingsCustomBatchRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    custombatch(
      params: Params$Resource$Shippingsettings$Custombatch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    custombatch(
      params?: Params$Resource$Shippingsettings$Custombatch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ShippingsettingsCustomBatchResponse>;
    custombatch(
      params: Params$Resource$Shippingsettings$Custombatch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    custombatch(
      params: Params$Resource$Shippingsettings$Custombatch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ShippingsettingsCustomBatchResponse>,
      callback: BodyResponseCallback<Schema$ShippingsettingsCustomBatchResponse>
    ): void;
    custombatch(
      params: Params$Resource$Shippingsettings$Custombatch,
      callback: BodyResponseCallback<Schema$ShippingsettingsCustomBatchResponse>
    ): void;
    custombatch(
      callback: BodyResponseCallback<Schema$ShippingsettingsCustomBatchResponse>
    ): void;
    custombatch(
      paramsOrCallback?:
        | Params$Resource$Shippingsettings$Custombatch
        | BodyResponseCallback<Schema$ShippingsettingsCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ShippingsettingsCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ShippingsettingsCustomBatchResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ShippingsettingsCustomBatchResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Shippingsettings$Custombatch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Shippingsettings$Custombatch;
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
            url: (rootUrl + '/content/v2/shippingsettings/batch').replace(
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
        createAPIRequest<Schema$ShippingsettingsCustomBatchResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ShippingsettingsCustomBatchResponse>(
          parameters
        );
      }
    }

    /**
     * content.shippingsettings.get
     * @desc Retrieves the shipping settings of the account.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.shippingsettings.get({
     *     // The ID of the account for which to get/update shipping settings.
     *     accountId: 'placeholder-value',
     *     // The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     *     merchantId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "postalCodeGroups": [],
     *   //   "services": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.shippingsettings.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId The ID of the account for which to get/update shipping settings.
     * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Shippingsettings$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Shippingsettings$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ShippingSettings>;
    get(
      params: Params$Resource$Shippingsettings$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Shippingsettings$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ShippingSettings>,
      callback: BodyResponseCallback<Schema$ShippingSettings>
    ): void;
    get(
      params: Params$Resource$Shippingsettings$Get,
      callback: BodyResponseCallback<Schema$ShippingSettings>
    ): void;
    get(callback: BodyResponseCallback<Schema$ShippingSettings>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Shippingsettings$Get
        | BodyResponseCallback<Schema$ShippingSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ShippingSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ShippingSettings>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ShippingSettings> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Shippingsettings$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Shippingsettings$Get;
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
              rootUrl + '/content/v2/{merchantId}/shippingsettings/{accountId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'accountId'],
        pathParams: ['accountId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ShippingSettings>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ShippingSettings>(parameters);
      }
    }

    /**
     * content.shippingsettings.getsupportedcarriers
     * @desc Retrieves supported carriers and carrier services for an account.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.shippingsettings.getsupportedcarriers({
     *     // The ID of the account for which to retrieve the supported carriers.
     *     merchantId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "carriers": [],
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.shippingsettings.getsupportedcarriers
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.merchantId The ID of the account for which to retrieve the supported carriers.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getsupportedcarriers(
      params: Params$Resource$Shippingsettings$Getsupportedcarriers,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getsupportedcarriers(
      params?: Params$Resource$Shippingsettings$Getsupportedcarriers,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ShippingsettingsGetSupportedCarriersResponse>;
    getsupportedcarriers(
      params: Params$Resource$Shippingsettings$Getsupportedcarriers,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getsupportedcarriers(
      params: Params$Resource$Shippingsettings$Getsupportedcarriers,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$ShippingsettingsGetSupportedCarriersResponse
          >,
      callback: BodyResponseCallback<
        Schema$ShippingsettingsGetSupportedCarriersResponse
      >
    ): void;
    getsupportedcarriers(
      params: Params$Resource$Shippingsettings$Getsupportedcarriers,
      callback: BodyResponseCallback<
        Schema$ShippingsettingsGetSupportedCarriersResponse
      >
    ): void;
    getsupportedcarriers(
      callback: BodyResponseCallback<
        Schema$ShippingsettingsGetSupportedCarriersResponse
      >
    ): void;
    getsupportedcarriers(
      paramsOrCallback?:
        | Params$Resource$Shippingsettings$Getsupportedcarriers
        | BodyResponseCallback<
            Schema$ShippingsettingsGetSupportedCarriersResponse
          >
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<
            Schema$ShippingsettingsGetSupportedCarriersResponse
          >
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<
            Schema$ShippingsettingsGetSupportedCarriersResponse
          >
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ShippingsettingsGetSupportedCarriersResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Shippingsettings$Getsupportedcarriers;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Shippingsettings$Getsupportedcarriers;
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
              rootUrl + '/content/v2/{merchantId}/supportedCarriers'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ShippingsettingsGetSupportedCarriersResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<
          Schema$ShippingsettingsGetSupportedCarriersResponse
        >(parameters);
      }
    }

    /**
     * content.shippingsettings.getsupportedholidays
     * @desc Retrieves supported holidays for an account.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.shippingsettings.getsupportedholidays({
     *     // The ID of the account for which to retrieve the supported holidays.
     *     merchantId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "holidays": [],
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.shippingsettings.getsupportedholidays
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.merchantId The ID of the account for which to retrieve the supported holidays.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getsupportedholidays(
      params: Params$Resource$Shippingsettings$Getsupportedholidays,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getsupportedholidays(
      params?: Params$Resource$Shippingsettings$Getsupportedholidays,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ShippingsettingsGetSupportedHolidaysResponse>;
    getsupportedholidays(
      params: Params$Resource$Shippingsettings$Getsupportedholidays,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getsupportedholidays(
      params: Params$Resource$Shippingsettings$Getsupportedholidays,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$ShippingsettingsGetSupportedHolidaysResponse
          >,
      callback: BodyResponseCallback<
        Schema$ShippingsettingsGetSupportedHolidaysResponse
      >
    ): void;
    getsupportedholidays(
      params: Params$Resource$Shippingsettings$Getsupportedholidays,
      callback: BodyResponseCallback<
        Schema$ShippingsettingsGetSupportedHolidaysResponse
      >
    ): void;
    getsupportedholidays(
      callback: BodyResponseCallback<
        Schema$ShippingsettingsGetSupportedHolidaysResponse
      >
    ): void;
    getsupportedholidays(
      paramsOrCallback?:
        | Params$Resource$Shippingsettings$Getsupportedholidays
        | BodyResponseCallback<
            Schema$ShippingsettingsGetSupportedHolidaysResponse
          >
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<
            Schema$ShippingsettingsGetSupportedHolidaysResponse
          >
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<
            Schema$ShippingsettingsGetSupportedHolidaysResponse
          >
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ShippingsettingsGetSupportedHolidaysResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Shippingsettings$Getsupportedholidays;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Shippingsettings$Getsupportedholidays;
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
              rootUrl + '/content/v2/{merchantId}/supportedHolidays'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ShippingsettingsGetSupportedHolidaysResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<
          Schema$ShippingsettingsGetSupportedHolidaysResponse
        >(parameters);
      }
    }

    /**
     * content.shippingsettings.getsupportedpickupservices
     * @desc Retrieves supported pickup services for an account.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.shippingsettings.getsupportedpickupservices({
     *     // The ID of the account for which to retrieve the supported pickup services.
     *     merchantId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "pickupServices": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.shippingsettings.getsupportedpickupservices
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.merchantId The ID of the account for which to retrieve the supported pickup services.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getsupportedpickupservices(
      params: Params$Resource$Shippingsettings$Getsupportedpickupservices,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getsupportedpickupservices(
      params?: Params$Resource$Shippingsettings$Getsupportedpickupservices,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ShippingsettingsGetSupportedPickupServicesResponse>;
    getsupportedpickupservices(
      params: Params$Resource$Shippingsettings$Getsupportedpickupservices,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getsupportedpickupservices(
      params: Params$Resource$Shippingsettings$Getsupportedpickupservices,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$ShippingsettingsGetSupportedPickupServicesResponse
          >,
      callback: BodyResponseCallback<
        Schema$ShippingsettingsGetSupportedPickupServicesResponse
      >
    ): void;
    getsupportedpickupservices(
      params: Params$Resource$Shippingsettings$Getsupportedpickupservices,
      callback: BodyResponseCallback<
        Schema$ShippingsettingsGetSupportedPickupServicesResponse
      >
    ): void;
    getsupportedpickupservices(
      callback: BodyResponseCallback<
        Schema$ShippingsettingsGetSupportedPickupServicesResponse
      >
    ): void;
    getsupportedpickupservices(
      paramsOrCallback?:
        | Params$Resource$Shippingsettings$Getsupportedpickupservices
        | BodyResponseCallback<
            Schema$ShippingsettingsGetSupportedPickupServicesResponse
          >
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<
            Schema$ShippingsettingsGetSupportedPickupServicesResponse
          >
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<
            Schema$ShippingsettingsGetSupportedPickupServicesResponse
          >
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ShippingsettingsGetSupportedPickupServicesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Shippingsettings$Getsupportedpickupservices;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Shippingsettings$Getsupportedpickupservices;
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
              rootUrl + '/content/v2/{merchantId}/supportedPickupServices'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<
          Schema$ShippingsettingsGetSupportedPickupServicesResponse
        >(parameters, callback as BodyResponseCallback<{} | void>);
      } else {
        return createAPIRequest<
          Schema$ShippingsettingsGetSupportedPickupServicesResponse
        >(parameters);
      }
    }

    /**
     * content.shippingsettings.list
     * @desc Lists the shipping settings of the sub-accounts in your Merchant Center account.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.shippingsettings.list({
     *     // The maximum number of shipping settings to return in the response, used for paging.
     *     maxResults: 'placeholder-value',
     *     // The ID of the managing account. This must be a multi-client account.
     *     merchantId: 'placeholder-value',
     *     // The token returned by the previous request.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "resources": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
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
    list(
      params: Params$Resource$Shippingsettings$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Shippingsettings$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ShippingsettingsListResponse>;
    list(
      params: Params$Resource$Shippingsettings$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Shippingsettings$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ShippingsettingsListResponse>,
      callback: BodyResponseCallback<Schema$ShippingsettingsListResponse>
    ): void;
    list(
      params: Params$Resource$Shippingsettings$List,
      callback: BodyResponseCallback<Schema$ShippingsettingsListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ShippingsettingsListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Shippingsettings$List
        | BodyResponseCallback<Schema$ShippingsettingsListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ShippingsettingsListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ShippingsettingsListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ShippingsettingsListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Shippingsettings$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Shippingsettings$List;
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
              rootUrl + '/content/v2/{merchantId}/shippingsettings'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ShippingsettingsListResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ShippingsettingsListResponse>(
          parameters
        );
      }
    }

    /**
     * content.shippingsettings.update
     * @desc Updates the shipping settings of the account. Any fields that are not provided are deleted from the resource.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/content.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await content.shippingsettings.update({
     *     // The ID of the account for which to get/update shipping settings.
     *     accountId: 'placeholder-value',
     *     // Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     *     dryRun: 'placeholder-value',
     *     // The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     *     merchantId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accountId": "my_accountId",
     *       //   "postalCodeGroups": [],
     *       //   "services": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "postalCodeGroups": [],
     *   //   "services": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias content.shippingsettings.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId The ID of the account for which to get/update shipping settings.
     * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @param {().ShippingSettings} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params: Params$Resource$Shippingsettings$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Shippingsettings$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ShippingSettings>;
    update(
      params: Params$Resource$Shippingsettings$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Shippingsettings$Update,
      options: MethodOptions | BodyResponseCallback<Schema$ShippingSettings>,
      callback: BodyResponseCallback<Schema$ShippingSettings>
    ): void;
    update(
      params: Params$Resource$Shippingsettings$Update,
      callback: BodyResponseCallback<Schema$ShippingSettings>
    ): void;
    update(callback: BodyResponseCallback<Schema$ShippingSettings>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Shippingsettings$Update
        | BodyResponseCallback<Schema$ShippingSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ShippingSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ShippingSettings>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ShippingSettings> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Shippingsettings$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Shippingsettings$Update;
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
              rootUrl + '/content/v2/{merchantId}/shippingsettings/{accountId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'accountId'],
        pathParams: ['accountId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ShippingSettings>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ShippingSettings>(parameters);
      }
    }
  }

  export interface Params$Resource$Shippingsettings$Custombatch
    extends StandardParameters {
    /**
     * Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     */
    dryRun?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ShippingsettingsCustomBatchRequest;
  }
  export interface Params$Resource$Shippingsettings$Get
    extends StandardParameters {
    /**
     * The ID of the account for which to get/update shipping settings.
     */
    accountId?: string;
    /**
     * The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     */
    merchantId?: string;
  }
  export interface Params$Resource$Shippingsettings$Getsupportedcarriers
    extends StandardParameters {
    /**
     * The ID of the account for which to retrieve the supported carriers.
     */
    merchantId?: string;
  }
  export interface Params$Resource$Shippingsettings$Getsupportedholidays
    extends StandardParameters {
    /**
     * The ID of the account for which to retrieve the supported holidays.
     */
    merchantId?: string;
  }
  export interface Params$Resource$Shippingsettings$Getsupportedpickupservices
    extends StandardParameters {
    /**
     * The ID of the account for which to retrieve the supported pickup services.
     */
    merchantId?: string;
  }
  export interface Params$Resource$Shippingsettings$List
    extends StandardParameters {
    /**
     * The maximum number of shipping settings to return in the response, used for paging.
     */
    maxResults?: number;
    /**
     * The ID of the managing account. This must be a multi-client account.
     */
    merchantId?: string;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Shippingsettings$Update
    extends StandardParameters {
    /**
     * The ID of the account for which to get/update shipping settings.
     */
    accountId?: string;
    /**
     * Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     */
    dryRun?: boolean;
    /**
     * The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     */
    merchantId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ShippingSettings;
  }
}
