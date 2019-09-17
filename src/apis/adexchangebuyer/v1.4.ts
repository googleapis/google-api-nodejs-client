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

export namespace adexchangebuyer_v1_4 {
  export interface Options extends GlobalOptions {
    version: 'v1.4';
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
   * const adexchangebuyer = google.adexchangebuyer('v1.4');
   *
   * @namespace adexchangebuyer
   * @type {Function}
   * @version v1.4
   * @variation v1.4
   * @param {object=} options Options for Adexchangebuyer
   */
  export class Adexchangebuyer {
    context: APIRequestContext;
    accounts: Resource$Accounts;
    billingInfo: Resource$Billinginfo;
    budget: Resource$Budget;
    creatives: Resource$Creatives;
    marketplacedeals: Resource$Marketplacedeals;
    marketplacenotes: Resource$Marketplacenotes;
    marketplaceprivateauction: Resource$Marketplaceprivateauction;
    performanceReport: Resource$Performancereport;
    pretargetingConfig: Resource$Pretargetingconfig;
    products: Resource$Products;
    proposals: Resource$Proposals;
    pubprofiles: Resource$Pubprofiles;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.accounts = new Resource$Accounts(this.context);
      this.billingInfo = new Resource$Billinginfo(this.context);
      this.budget = new Resource$Budget(this.context);
      this.creatives = new Resource$Creatives(this.context);
      this.marketplacedeals = new Resource$Marketplacedeals(this.context);
      this.marketplacenotes = new Resource$Marketplacenotes(this.context);
      this.marketplaceprivateauction = new Resource$Marketplaceprivateauction(
        this.context
      );
      this.performanceReport = new Resource$Performancereport(this.context);
      this.pretargetingConfig = new Resource$Pretargetingconfig(this.context);
      this.products = new Resource$Products(this.context);
      this.proposals = new Resource$Proposals(this.context);
      this.pubprofiles = new Resource$Pubprofiles(this.context);
    }
  }

  /**
   * Configuration data for an Ad Exchange buyer account.
   */
  export interface Schema$Account {
    /**
     * When this is false, bid requests that include a deal ID for a private auction or preferred deal are always sent to your bidder. When true, all active pretargeting configs will be applied to private auctions and preferred deals. Programmatic Guaranteed deals (when enabled) are always sent to your bidder.
     */
    applyPretargetingToNonGuaranteedDeals?: boolean | null;
    /**
     * Your bidder locations that have distinct URLs.
     */
    bidderLocation?: Array<{
      bidProtocol?: string;
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
  export interface Schema$AddOrderDealsRequest {
    /**
     * The list of deals to add
     */
    deals?: Schema$MarketplaceDeal[];
    /**
     * The last known proposal revision number.
     */
    proposalRevisionNumber?: string | null;
    /**
     * Indicates an optional action to take on the proposal
     */
    updateAction?: string | null;
  }
  export interface Schema$AddOrderDealsResponse {
    /**
     * List of deals added (in the same proposal as passed in the request)
     */
    deals?: Schema$MarketplaceDeal[];
    /**
     * The updated revision number for the proposal.
     */
    proposalRevisionNumber?: string | null;
  }
  export interface Schema$AddOrderNotesRequest {
    /**
     * The list of notes to add.
     */
    notes?: Schema$MarketplaceNote[];
  }
  export interface Schema$AddOrderNotesResponse {
    notes?: Schema$MarketplaceNote[];
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
  export interface Schema$Buyer {
    /**
     * Adx account id of the buyer.
     */
    accountId?: string | null;
  }
  export interface Schema$ContactInformation {
    /**
     * Email address of the contact.
     */
    email?: string | null;
    /**
     * The name of the contact.
     */
    name?: string | null;
  }
  export interface Schema$CreateOrdersRequest {
    /**
     * The list of proposals to create.
     */
    proposals?: Schema$Proposal[];
    /**
     * Web property id of the seller creating these orders
     */
    webPropertyCode?: string | null;
  }
  export interface Schema$CreateOrdersResponse {
    /**
     * The list of proposals successfully created.
     */
    proposals?: Schema$Proposal[];
  }
  /**
   * A creative and its classification data.
   */
  export interface Schema$Creative {
    /**
     * Account id.
     */
    accountId?: number | null;
    /**
     * The link to the Ad Preferences page. This is only supported for native ads.
     */
    adChoicesDestinationUrl?: string | null;
    adTechnologyProviders?: {
      detectedProviderIds?: string[];
      hasUnidentifiedProvider?: boolean;
    } | null;
    /**
     * Detected advertiser id, if any. Read-only. This field should not be set in requests.
     */
    advertiserId?: string[] | null;
    /**
     * The name of the company being advertised in the creative. The value provided must exist in the advertisers.txt file.
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
     * List of buyer selectable attributes for the ads that may be shown from this snippet. Each attribute is represented by an integer as defined in  buyer-declarable-creative-attributes.txt.
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
    corrections?: Array<{
      contexts?: Array<{
        auctionType?: string[];
        contextType?: string;
        geoCriteriaId?: number[];
        platform?: string[];
      }>;
      details?: string[];
      reason?: string;
    }> | null;
    /**
     * Creative status identity type that the creative item applies to. Ad Exchange real-time bidding is migrating to the sizeless creative verification. Originally, Ad Exchange assigned creative verification status to a unique combination of a buyer creative ID and creative dimensions. Post-migration, a single verification status will be assigned at the buyer creative ID level. This field allows to distinguish whether a given creative status applies to a unique combination of a buyer creative ID and creative dimensions, or to a buyer creative ID as a whole.
     */
    creativeStatusIdentityType?: string | null;
    /**
     * Top-level deals status. Read-only. This field should not be set in requests. If disapproved, an entry for auctionType=DIRECT_DEALS (or ALL) in servingRestrictions will also exist. Note that this may be nuanced with other contextual restrictions, in which case it may be preferable to read from servingRestrictions directly.
     */
    dealsStatus?: string | null;
    /**
     * Detected domains for this creative. Read-only. This field should not be set in requests.
     */
    detectedDomains?: string[] | null;
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
     * The HTML snippet that displays the ad when inserted in the web page. If set, videoURL, videoVastXML, and nativeAd should not be set.
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
     * Detected languages for this creative. Read-only. This field should not be set in requests.
     */
    languages?: string[] | null;
    /**
     * If nativeAd is set, HTMLSnippet, videoVastXML, and the videoURL outside of nativeAd should not be set. (The videoURL inside nativeAd can be set.)
     */
    nativeAd?: {
      advertiser?: string;
      appIcon?: {height?: number; url?: string; width?: number};
      body?: string;
      callToAction?: string;
      clickLinkUrl?: string;
      clickTrackingUrl?: string;
      headline?: string;
      image?: {height?: number; url?: string; width?: number};
      impressionTrackingUrl?: string[];
      logo?: {height?: number; url?: string; width?: number};
      price?: string;
      starRating?: number;
      videoURL?: string;
    } | null;
    /**
     * Top-level open auction status. Read-only. This field should not be set in requests. If disapproved, an entry for auctionType=OPEN_AUCTION (or ALL) in servingRestrictions will also exist. Note that this may be nuanced with other contextual restrictions, in which case it may be preferable to read from ServingRestrictions directly.
     */
    openAuctionStatus?: string | null;
    /**
     * Detected product categories, if any. Each category is represented by an integer as defined in  ad-product-categories.txt. Read-only. This field should not be set in requests.
     */
    productCategories?: number[] | null;
    /**
     * All restricted categories for the ads that may be shown from this snippet. Each category is represented by an integer as defined in the  ad-restricted-categories.txt.
     */
    restrictedCategories?: number[] | null;
    /**
     * Detected sensitive categories, if any. Each category is represented by an integer as defined in  ad-sensitive-categories.txt. Read-only. This field should not be set in requests.
     */
    sensitiveCategories?: number[] | null;
    /**
     * The granular status of this ad in specific contexts. A context here relates to where something ultimately serves (for example, a physical location, a platform, an HTTPS vs HTTP request, or the type of auction). Read-only. This field should not be set in requests. See the examples in the Creatives guide for more details.
     */
    servingRestrictions?: Array<{
      contexts?: Array<{
        auctionType?: string[];
        contextType?: string;
        geoCriteriaId?: number[];
        platform?: string[];
      }>;
      disapprovalReasons?: Array<{details?: string[]; reason?: string}>;
      reason?: string;
    }> | null;
    /**
     * List of vendor types for the ads that may be shown from this snippet. Each vendor type is represented by an integer as defined in vendors.txt.
     */
    vendorType?: number[] | null;
    /**
     * The version for this creative. Read-only. This field should not be set in requests.
     */
    version?: number | null;
    /**
     * The URL to fetch a video ad. If set, HTMLSnippet, videoVastXML, and nativeAd should not be set. Note, this is different from resource.native_ad.video_url above.
     */
    videoURL?: string | null;
    /**
     * The contents of a VAST document for a video ad. This document should conform to the VAST 2.0 or 3.0 standard. If set, HTMLSnippet, videoURL, and nativeAd and should not be set.
     */
    videoVastXML?: string | null;
    /**
     * Ad width.
     */
    width?: number | null;
  }
  /**
   * The external deal ids associated with a creative.
   */
  export interface Schema$CreativeDealIds {
    /**
     * A list of external deal ids and ARC approval status.
     */
    dealStatuses?: Array<{
      arcStatus?: string;
      dealId?: string;
      webPropertyId?: number;
    }> | null;
    /**
     * Resource type.
     */
    kind?: string | null;
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
  export interface Schema$DealServingMetadata {
    /**
     * True if alcohol ads are allowed for this deal (read-only). This field is only populated when querying for finalized orders using the method GetFinalizedOrderDeals
     */
    alcoholAdsAllowed?: boolean | null;
    /**
     * Tracks which parties (if any) have paused a deal. (readonly, except via PauseResumeOrderDeals action)
     */
    dealPauseStatus?: Schema$DealServingMetadataDealPauseStatus;
  }
  /**
   * Tracks which parties (if any) have paused a deal. The deal is considered paused if has_buyer_paused || has_seller_paused. Each of the has_buyer_paused or the has_seller_paused bits can be set independently.
   */
  export interface Schema$DealServingMetadataDealPauseStatus {
    buyerPauseReason?: string | null;
    /**
     * If the deal is paused, records which party paused the deal first.
     */
    firstPausedBy?: string | null;
    hasBuyerPaused?: boolean | null;
    hasSellerPaused?: boolean | null;
    sellerPauseReason?: string | null;
  }
  export interface Schema$DealTerms {
    /**
     * Visibilty of the URL in bid requests.
     */
    brandingType?: string | null;
    /**
     * Indicates that this ExternalDealId exists under at least two different AdxInventoryDeals. Currently, the only case that the same ExternalDealId will exist is programmatic cross sell case.
     */
    crossListedExternalDealIdType?: string | null;
    /**
     * Description for the proposed terms of the deal.
     */
    description?: string | null;
    /**
     * Non-binding estimate of the estimated gross spend for this deal Can be set by buyer or seller.
     */
    estimatedGrossSpend?: Schema$Price;
    /**
     * Non-binding estimate of the impressions served per day Can be set by buyer or seller.
     */
    estimatedImpressionsPerDay?: string | null;
    /**
     * The terms for guaranteed fixed price deals.
     */
    guaranteedFixedPriceTerms?: Schema$DealTermsGuaranteedFixedPriceTerms;
    /**
     * The terms for non-guaranteed auction deals.
     */
    nonGuaranteedAuctionTerms?: Schema$DealTermsNonGuaranteedAuctionTerms;
    /**
     * The terms for non-guaranteed fixed price deals.
     */
    nonGuaranteedFixedPriceTerms?: Schema$DealTermsNonGuaranteedFixedPriceTerms;
    /**
     * The terms for rubicon non-guaranteed deals.
     */
    rubiconNonGuaranteedTerms?: Schema$DealTermsRubiconNonGuaranteedTerms;
    /**
     * For deals with Cost Per Day billing, defines the timezone used to mark the boundaries of a day (buyer-readonly)
     */
    sellerTimeZone?: string | null;
  }
  export interface Schema$DealTermsGuaranteedFixedPriceTerms {
    /**
     * External billing info for this Deal. This field is relevant when external billing info such as price has a different currency code than DFP/AdX.
     */
    billingInfo?: Schema$DealTermsGuaranteedFixedPriceTermsBillingInfo;
    /**
     * Fixed price for the specified buyer.
     */
    fixedPrices?: Schema$PricePerBuyer[];
    /**
     * Guaranteed impressions as a percentage. This is the percentage of guaranteed looks that the buyer is guaranteeing to buy.
     */
    guaranteedImpressions?: string | null;
    /**
     * Count of guaranteed looks. Required for deal, optional for product. For CPD deals, buyer changes to guaranteed_looks will be ignored.
     */
    guaranteedLooks?: string | null;
    /**
     * Count of minimum daily looks for a CPD deal. For CPD deals, buyer should negotiate on this field instead of guaranteed_looks.
     */
    minimumDailyLooks?: string | null;
  }
  export interface Schema$DealTermsGuaranteedFixedPriceTermsBillingInfo {
    /**
     * The timestamp (in ms since epoch) when the original reservation price for the deal was first converted to DFP currency. This is used to convert the contracted price into buyer&#39;s currency without discrepancy.
     */
    currencyConversionTimeMs?: string | null;
    /**
     * The DFP line item id associated with this deal. For features like CPD, buyers can retrieve the DFP line item for billing reconciliation.
     */
    dfpLineItemId?: string | null;
    /**
     * The original contracted quantity (# impressions) for this deal. To ensure delivery, sometimes the publisher will book the deal with a impression buffer, such that guaranteed_looks is greater than the contracted quantity. However clients are billed using the original contracted quantity.
     */
    originalContractedQuantity?: string | null;
    /**
     * The original reservation price for the deal, if the currency code is different from the one used in negotiation.
     */
    price?: Schema$Price;
  }
  export interface Schema$DealTermsNonGuaranteedAuctionTerms {
    /**
     * True if open auction buyers are allowed to compete with invited buyers in this private auction (buyer-readonly).
     */
    autoOptimizePrivateAuction?: boolean | null;
    /**
     * Reserve price for the specified buyer.
     */
    reservePricePerBuyers?: Schema$PricePerBuyer[];
  }
  export interface Schema$DealTermsNonGuaranteedFixedPriceTerms {
    /**
     * Fixed price for the specified buyer.
     */
    fixedPrices?: Schema$PricePerBuyer[];
  }
  export interface Schema$DealTermsRubiconNonGuaranteedTerms {
    /**
     * Optional price for Rubicon priority access in the auction.
     */
    priorityPrice?: Schema$Price;
    /**
     * Optional price for Rubicon standard access in the auction.
     */
    standardPrice?: Schema$Price;
  }
  export interface Schema$DeleteOrderDealsRequest {
    /**
     * List of deals to delete for a given proposal
     */
    dealIds?: string[] | null;
    /**
     * The last known proposal revision number.
     */
    proposalRevisionNumber?: string | null;
    /**
     * Indicates an optional action to take on the proposal
     */
    updateAction?: string | null;
  }
  export interface Schema$DeleteOrderDealsResponse {
    /**
     * List of deals deleted (in the same proposal as passed in the request)
     */
    deals?: Schema$MarketplaceDeal[];
    /**
     * The updated revision number for the proposal.
     */
    proposalRevisionNumber?: string | null;
  }
  export interface Schema$DeliveryControl {
    creativeBlockingLevel?: string | null;
    deliveryRateType?: string | null;
    frequencyCaps?: Schema$DeliveryControlFrequencyCap[];
  }
  export interface Schema$DeliveryControlFrequencyCap {
    maxImpressions?: number | null;
    numTimeUnits?: number | null;
    timeUnitType?: string | null;
  }
  /**
   * This message carries publisher provided breakdown. E.g. {dimension_type: &#39;COUNTRY&#39;, [{dimension_value: {id: 1, name: &#39;US&#39;}}, {dimension_value: {id: 2, name: &#39;UK&#39;}}]}
   */
  export interface Schema$Dimension {
    dimensionType?: string | null;
    dimensionValues?: Schema$DimensionDimensionValue[];
  }
  /**
   * Value of the dimension.
   */
  export interface Schema$DimensionDimensionValue {
    /**
     * Id of the dimension.
     */
    id?: number | null;
    /**
     * Name of the dimension mainly for debugging purposes, except for the case of CREATIVE_SIZE. For CREATIVE_SIZE, strings are used instead of ids.
     */
    name?: string | null;
    /**
     * Percent of total impressions for a dimension type. e.g. {dimension_type: &#39;GENDER&#39;, [{dimension_value: {id: 1, name: &#39;MALE&#39;, percentage: 60}}]} Gender MALE is 60% of all impressions which have gender.
     */
    percentage?: number | null;
  }
  export interface Schema$EditAllOrderDealsRequest {
    /**
     * List of deals to edit. Service may perform 3 different operations based on comparison of deals in this list vs deals already persisted in database: 1. Add new deal to proposal If a deal in this list does not exist in the proposal, the service will create a new deal and add it to the proposal. Validation will follow AddOrderDealsRequest. 2. Update existing deal in the proposal If a deal in this list already exist in the proposal, the service will update that existing deal to this new deal in the request. Validation will follow UpdateOrderDealsRequest. 3. Delete deals from the proposal (just need the id) If a existing deal in the proposal is not present in this list, the service will delete that deal from the proposal. Validation will follow DeleteOrderDealsRequest.
     */
    deals?: Schema$MarketplaceDeal[];
    /**
     * If specified, also updates the proposal in the batch transaction. This is useful when the proposal and the deals need to be updated in one transaction.
     */
    proposal?: Schema$Proposal;
    /**
     * The last known revision number for the proposal.
     */
    proposalRevisionNumber?: string | null;
    /**
     * Indicates an optional action to take on the proposal
     */
    updateAction?: string | null;
  }
  export interface Schema$EditAllOrderDealsResponse {
    /**
     * List of all deals in the proposal after edit.
     */
    deals?: Schema$MarketplaceDeal[];
    /**
     * The latest revision number after the update has been applied.
     */
    orderRevisionNumber?: string | null;
  }
  export interface Schema$GetOffersResponse {
    /**
     * The returned list of products.
     */
    products?: Schema$Product[];
  }
  export interface Schema$GetOrderDealsResponse {
    /**
     * List of deals for the proposal
     */
    deals?: Schema$MarketplaceDeal[];
  }
  export interface Schema$GetOrderNotesResponse {
    /**
     * The list of matching notes. The notes for a proposal are ordered from oldest to newest. If the notes span multiple proposals, they will be grouped by proposal, with the notes for the most recently modified proposal appearing first.
     */
    notes?: Schema$MarketplaceNote[];
  }
  export interface Schema$GetOrdersResponse {
    /**
     * The list of matching proposals.
     */
    proposals?: Schema$Proposal[];
  }
  export interface Schema$GetPublisherProfilesByAccountIdResponse {
    /**
     * Profiles for the requested publisher
     */
    profiles?: Schema$PublisherProfileApiProto[];
  }
  /**
   * A proposal can contain multiple deals. A deal contains the terms and targeting information that is used for serving.
   */
  export interface Schema$MarketplaceDeal {
    /**
     * Buyer private data (hidden from seller).
     */
    buyerPrivateData?: Schema$PrivateData;
    /**
     * The time (ms since epoch) of the deal creation. (readonly)
     */
    creationTimeMs?: string | null;
    /**
     * Specifies the creative pre-approval policy (buyer-readonly)
     */
    creativePreApprovalPolicy?: string | null;
    /**
     * Specifies whether the creative is safeFrame compatible (buyer-readonly)
     */
    creativeSafeFrameCompatibility?: string | null;
    /**
     * A unique deal-id for the deal (readonly).
     */
    dealId?: string | null;
    /**
     * Metadata about the serving status of this deal (readonly, writes via custom actions)
     */
    dealServingMetadata?: Schema$DealServingMetadata;
    /**
     * The set of fields around delivery control that are interesting for a buyer to see but are non-negotiable. These are set by the publisher. This message is assigned an id of 100 since some day we would want to model this as a protobuf extension.
     */
    deliveryControl?: Schema$DeliveryControl;
    /**
     * The external deal id assigned to this deal once the deal is finalized. This is the deal-id that shows up in serving/reporting etc. (readonly)
     */
    externalDealId?: string | null;
    /**
     * Proposed flight end time of the deal (ms since epoch) This will generally be stored in a granularity of a second. (updatable)
     */
    flightEndTimeMs?: string | null;
    /**
     * Proposed flight start time of the deal (ms since epoch) This will generally be stored in a granularity of a second. (updatable)
     */
    flightStartTimeMs?: string | null;
    /**
     * Description for the deal terms. (buyer-readonly)
     */
    inventoryDescription?: string | null;
    /**
     * Indicates whether the current deal is a RFP template. RFP template is created by buyer and not based on seller created products.
     */
    isRfpTemplate?: boolean | null;
    /**
     * True, if the buyside inventory setup is complete for this deal. (readonly, except via OrderSetupCompleted action)
     */
    isSetupComplete?: boolean | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;adexchangebuyer#marketplaceDeal&quot;.
     */
    kind?: string | null;
    /**
     * The time (ms since epoch) when the deal was last updated. (readonly)
     */
    lastUpdateTimeMs?: string | null;
    /**
     * The name of the deal. (updatable)
     */
    name?: string | null;
    /**
     * The product-id from which this deal was created. (readonly, except on create)
     */
    productId?: string | null;
    /**
     * The revision number of the product that the deal was created from (readonly, except on create)
     */
    productRevisionNumber?: string | null;
    /**
     * Specifies the creative source for programmatic deals, PUBLISHER means creative is provided by seller and ADVERTISR means creative is provided by buyer. (buyer-readonly)
     */
    programmaticCreativeSource?: string | null;
    proposalId?: string | null;
    /**
     * Optional Seller contact information for the deal (buyer-readonly)
     */
    sellerContacts?: Schema$ContactInformation[];
    /**
     * The shared targeting visible to buyers and sellers. Each shared targeting entity is AND&#39;d together. (updatable)
     */
    sharedTargetings?: Schema$SharedTargeting[];
    /**
     * The syndication product associated with the deal. (readonly, except on create)
     */
    syndicationProduct?: string | null;
    /**
     * The negotiable terms of the deal. (updatable)
     */
    terms?: Schema$DealTerms;
    webPropertyCode?: string | null;
  }
  export interface Schema$MarketplaceDealParty {
    /**
     * The buyer/seller associated with the deal. One of buyer/seller is specified for a deal-party.
     */
    buyer?: Schema$Buyer;
    /**
     * The buyer/seller associated with the deal. One of buyer/seller is specified for a deal party.
     */
    seller?: Schema$Seller;
  }
  export interface Schema$MarketplaceLabel {
    /**
     * The accountId of the party that created the label.
     */
    accountId?: string | null;
    /**
     * The creation time (in ms since epoch) for the label.
     */
    createTimeMs?: string | null;
    /**
     * Information about the party that created the label.
     */
    deprecatedMarketplaceDealParty?: Schema$MarketplaceDealParty;
    /**
     * The label to use.
     */
    label?: string | null;
  }
  /**
   * A proposal is associated with a bunch of notes which may optionally be associated with a deal and/or revision number.
   */
  export interface Schema$MarketplaceNote {
    /**
     * The role of the person (buyer/seller) creating the note. (readonly)
     */
    creatorRole?: string | null;
    /**
     * Notes can optionally be associated with a deal. (readonly, except on create)
     */
    dealId?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;adexchangebuyer#marketplaceNote&quot;.
     */
    kind?: string | null;
    /**
     * The actual note to attach. (readonly, except on create)
     */
    note?: string | null;
    /**
     * The unique id for the note. (readonly)
     */
    noteId?: string | null;
    /**
     * The proposalId that a note is attached to. (readonly)
     */
    proposalId?: string | null;
    /**
     * If the note is associated with a proposal revision number, then store that here. (readonly, except on create)
     */
    proposalRevisionNumber?: string | null;
    /**
     * The timestamp (ms since epoch) that this note was created. (readonly)
     */
    timestampMs?: string | null;
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
     * Requests where the predicted viewability is below the specified decile will not match. E.g. if the buyer sets this value to 5, requests from slots where the predicted viewability is below 50% will not match. If the predicted viewability is unknown this field will be ignored.
     */
    minimumViewabilityDecile?: number | null;
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
     * Requests containing the specified type of user data will match. Possible values are HOSTED_MATCH_DATA, which means the request is cookie-targetable and has a match in the buyer&#39;s hosted match table, and COOKIE_OR_IDFA, which means the request has either a targetable cookie or an iOS IDFA.
     */
    userIdentifierDataRequired?: string[] | null;
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
    /**
     * Video requests satisfying any of these player size constraints will match.
     */
    videoPlayerSizes?: Array<{
      aspectRatio?: string;
      minHeight?: string;
      minWidth?: string;
    }> | null;
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
  export interface Schema$Price {
    /**
     * The price value in micros.
     */
    amountMicros?: number | null;
    /**
     * The currency code for the price.
     */
    currencyCode?: string | null;
    /**
     * In case of CPD deals, the expected CPM in micros.
     */
    expectedCpmMicros?: number | null;
    /**
     * The pricing type for the deal/product.
     */
    pricingType?: string | null;
  }
  /**
   * Used to specify pricing rules for buyers. Each PricePerBuyer in a product can become [0,1] deals. To check if there is a PricePerBuyer for a particular buyer we look for the most specific matching rule - we first look for a rule matching the buyer and otherwise look for a matching rule where no buyer is set.
   */
  export interface Schema$PricePerBuyer {
    /**
     * Optional access type for this buyer.
     */
    auctionTier?: string | null;
    /**
     * Reference to the buyer that will get billed.
     */
    billedBuyer?: Schema$Buyer;
    /**
     * The buyer who will pay this price. If unset, all buyers can pay this price (if the advertisers match, and there&#39;s no more specific rule matching the buyer).
     */
    buyer?: Schema$Buyer;
    /**
     * The specified price
     */
    price?: Schema$Price;
  }
  export interface Schema$PrivateData {
    referenceId?: string | null;
    referencePayload?: string | null;
  }
  /**
   * A product is segment of inventory that a seller wishes to sell. It is associated with certain terms and targeting information which helps buyer know more about the inventory. Each field in a product can have one of the following setting:  (readonly) - It is an error to try and set this field. (buyer-readonly) - Only the seller can set this field. (seller-readonly) - Only the buyer can set this field. (updatable) - The field is updatable at all times by either buyer or the seller.
   */
  export interface Schema$Product {
    /**
     * The billed buyer corresponding to the buyer that created the offer. (readonly, except on create)
     */
    billedBuyer?: Schema$Buyer;
    /**
     * The buyer that created the offer if this is a buyer initiated offer (readonly, except on create)
     */
    buyer?: Schema$Buyer;
    /**
     * Creation time in ms. since epoch (readonly)
     */
    creationTimeMs?: string | null;
    /**
     * Optional contact information for the creator of this product. (buyer-readonly)
     */
    creatorContacts?: Schema$ContactInformation[];
    /**
     * The role that created the offer. Set to BUYER for buyer initiated offers.
     */
    creatorRole?: string | null;
    /**
     * The set of fields around delivery control that are interesting for a buyer to see but are non-negotiable. These are set by the publisher. This message is assigned an id of 100 since some day we would want to model this as a protobuf extension.
     */
    deliveryControl?: Schema$DeliveryControl;
    /**
     * The proposed end time for the deal (ms since epoch) (buyer-readonly)
     */
    flightEndTimeMs?: string | null;
    /**
     * Inventory availability dates. (times are in ms since epoch) The granularity is generally in the order of seconds. (buyer-readonly)
     */
    flightStartTimeMs?: string | null;
    /**
     * If the creator has already signed off on the product, then the buyer can finalize the deal by accepting the product as is. When copying to a proposal, if any of the terms are changed, then auto_finalize is automatically set to false.
     */
    hasCreatorSignedOff?: boolean | null;
    /**
     * What exchange will provide this inventory (readonly, except on create).
     */
    inventorySource?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;adexchangebuyer#product&quot;.
     */
    kind?: string | null;
    /**
     * Optional List of labels for the product (optional, buyer-readonly).
     */
    labels?: Schema$MarketplaceLabel[];
    /**
     * Time of last update in ms. since epoch (readonly)
     */
    lastUpdateTimeMs?: string | null;
    /**
     * Optional legacy offer id if this offer is a preferred deal offer.
     */
    legacyOfferId?: string | null;
    /**
     * Marketplace publisher profile Id. This Id differs from the regular publisher_profile_id in that 1. This is a new id, the old Id will be deprecated in 2017. 2. This id uniquely identifies a publisher profile by itself.
     */
    marketplacePublisherProfileId?: string | null;
    /**
     * The name for this product as set by the seller. (buyer-readonly)
     */
    name?: string | null;
    /**
     * Optional private auction id if this offer is a private auction offer.
     */
    privateAuctionId?: string | null;
    /**
     * The unique id for the product (readonly)
     */
    productId?: string | null;
    /**
     * Id of the publisher profile for a given seller. A (seller.account_id, publisher_profile_id) pair uniquely identifies a publisher profile. Buyers can call the PublisherProfiles::List endpoint to get a list of publisher profiles for a given seller.
     */
    publisherProfileId?: string | null;
    /**
     * Publisher self-provided forecast information.
     */
    publisherProvidedForecast?: Schema$PublisherProvidedForecast;
    /**
     * The revision number of the product. (readonly)
     */
    revisionNumber?: string | null;
    /**
     * Information about the seller that created this product (readonly, except on create)
     */
    seller?: Schema$Seller;
    /**
     * Targeting that is shared between the buyer and the seller. Each targeting criteria has a specified key and for each key there is a list of inclusion value or exclusion values. (buyer-readonly)
     */
    sharedTargetings?: Schema$SharedTargeting[];
    /**
     * The state of the product. (buyer-readonly)
     */
    state?: string | null;
    /**
     * The syndication product associated with the deal. (readonly, except on create)
     */
    syndicationProduct?: string | null;
    /**
     * The negotiable terms of the deal (buyer-readonly)
     */
    terms?: Schema$DealTerms;
    /**
     * The web property code for the seller. This field is meant to be copied over as is when creating deals.
     */
    webPropertyCode?: string | null;
  }
  /**
   * Represents a proposal in the marketplace. A proposal is the unit of negotiation between a seller and a buyer and contains deals which are served. Each field in a proposal can have one of the following setting:  (readonly) - It is an error to try and set this field. (buyer-readonly) - Only the seller can set this field. (seller-readonly) - Only the buyer can set this field. (updatable) - The field is updatable at all times by either buyer or the seller.
   */
  export interface Schema$Proposal {
    /**
     * Reference to the buyer that will get billed for this proposal. (readonly)
     */
    billedBuyer?: Schema$Buyer;
    /**
     * Reference to the buyer on the proposal. (readonly, except on create)
     */
    buyer?: Schema$Buyer;
    /**
     * Optional contact information of the buyer. (seller-readonly)
     */
    buyerContacts?: Schema$ContactInformation[];
    /**
     * Private data for buyer. (hidden from seller).
     */
    buyerPrivateData?: Schema$PrivateData;
    /**
     * IDs of DBM advertisers permission to this proposal.
     */
    dbmAdvertiserIds?: string[] | null;
    /**
     * When an proposal is in an accepted state, indicates whether the buyer has signed off. Once both sides have signed off on a deal, the proposal can be finalized by the seller. (seller-readonly)
     */
    hasBuyerSignedOff?: boolean | null;
    /**
     * When an proposal is in an accepted state, indicates whether the buyer has signed off Once both sides have signed off on a deal, the proposal can be finalized by the seller. (buyer-readonly)
     */
    hasSellerSignedOff?: boolean | null;
    /**
     * What exchange will provide this inventory (readonly, except on create).
     */
    inventorySource?: string | null;
    /**
     * True if the proposal is being renegotiated (readonly).
     */
    isRenegotiating?: boolean | null;
    /**
     * True, if the buyside inventory setup is complete for this proposal. (readonly, except via OrderSetupCompleted action) Deprecated in favor of deal level setup complete flag.
     */
    isSetupComplete?: boolean | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;adexchangebuyer#proposal&quot;.
     */
    kind?: string | null;
    /**
     * List of labels associated with the proposal. (readonly)
     */
    labels?: Schema$MarketplaceLabel[];
    /**
     * The role of the last user that either updated the proposal or left a comment. (readonly)
     */
    lastUpdaterOrCommentorRole?: string | null;
    /**
     * The name for the proposal (updatable)
     */
    name?: string | null;
    /**
     * Optional negotiation id if this proposal is a preferred deal proposal.
     */
    negotiationId?: string | null;
    /**
     * Indicates whether the buyer/seller created the proposal.(readonly)
     */
    originatorRole?: string | null;
    /**
     * Optional private auction id if this proposal is a private auction proposal.
     */
    privateAuctionId?: string | null;
    /**
     * The unique id of the proposal. (readonly).
     */
    proposalId?: string | null;
    /**
     * The current state of the proposal. (readonly)
     */
    proposalState?: string | null;
    /**
     * The revision number for the proposal (readonly).
     */
    revisionNumber?: string | null;
    /**
     * The time (ms since epoch) when the proposal was last revised (readonly).
     */
    revisionTimeMs?: string | null;
    /**
     * Reference to the seller on the proposal. (readonly, except on create)
     */
    seller?: Schema$Seller;
    /**
     * Optional contact information of the seller (buyer-readonly).
     */
    sellerContacts?: Schema$ContactInformation[];
  }
  export interface Schema$PublisherProfileApiProto {
    /**
     * Publisher provided info on its audience.
     */
    audience?: string | null;
    /**
     * A pitch statement for the buyer
     */
    buyerPitchStatement?: string | null;
    /**
     * Direct contact for the publisher profile.
     */
    directContact?: string | null;
    /**
     * Exchange where this publisher profile is from. E.g. AdX, Rubicon etc...
     */
    exchange?: string | null;
    /**
     * Link to publisher&#39;s Google+ page.
     */
    googlePlusLink?: string | null;
    /**
     * True, if this is the parent profile, which represents all domains owned by the publisher.
     */
    isParent?: boolean | null;
    /**
     * True, if this profile is published. Deprecated for state.
     */
    isPublished?: boolean | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;adexchangebuyer#publisherProfileApiProto&quot;.
     */
    kind?: string | null;
    /**
     * The url to the logo for the publisher.
     */
    logoUrl?: string | null;
    /**
     * The url for additional marketing and sales materials.
     */
    mediaKitLink?: string | null;
    name?: string | null;
    /**
     * Publisher provided overview.
     */
    overview?: string | null;
    /**
     * The pair of (seller.account_id, profile_id) uniquely identifies a publisher profile for a given publisher.
     */
    profileId?: number | null;
    /**
     * Programmatic contact for the publisher profile.
     */
    programmaticContact?: string | null;
    /**
     * The list of domains represented in this publisher profile. Empty if this is a parent profile.
     */
    publisherDomains?: string[] | null;
    /**
     * Unique Id for publisher profile.
     */
    publisherProfileId?: string | null;
    /**
     * Publisher provided forecasting information.
     */
    publisherProvidedForecast?: Schema$PublisherProvidedForecast;
    /**
     * Link to publisher rate card
     */
    rateCardInfoLink?: string | null;
    /**
     * Link for a sample content page.
     */
    samplePageLink?: string | null;
    /**
     * Seller of the publisher profile.
     */
    seller?: Schema$Seller;
    /**
     * State of the publisher profile.
     */
    state?: string | null;
    /**
     * Publisher provided key metrics and rankings.
     */
    topHeadlines?: string[] | null;
  }
  /**
   * This message carries publisher provided forecasting information.
   */
  export interface Schema$PublisherProvidedForecast {
    /**
     * Publisher provided dimensions. E.g. geo, sizes etc...
     */
    dimensions?: Schema$Dimension[];
    /**
     * Publisher provided weekly impressions.
     */
    weeklyImpressions?: string | null;
    /**
     * Publisher provided weekly uniques.
     */
    weeklyUniques?: string | null;
  }
  export interface Schema$Seller {
    /**
     * The unique id for the seller. The seller fills in this field. The seller account id is then available to buyer in the product.
     */
    accountId?: string | null;
    /**
     * Optional sub-account id for the seller.
     */
    subAccountId?: string | null;
  }
  export interface Schema$SharedTargeting {
    /**
     * The list of values to exclude from targeting. Each value is AND&#39;d together.
     */
    exclusions?: Schema$TargetingValue[];
    /**
     * The list of value to include as part of the targeting. Each value is OR&#39;d together.
     */
    inclusions?: Schema$TargetingValue[];
    /**
     * The key representing the shared targeting criterion.
     */
    key?: string | null;
  }
  export interface Schema$TargetingValue {
    /**
     * The creative size value to exclude/include.
     */
    creativeSizeValue?: Schema$TargetingValueCreativeSize;
    /**
     * The daypart targeting to include / exclude. Filled in when the key is GOOG_DAYPART_TARGETING.
     */
    dayPartTargetingValue?: Schema$TargetingValueDayPartTargeting;
    demogAgeCriteriaValue?: Schema$TargetingValueDemogAgeCriteria;
    demogGenderCriteriaValue?: Schema$TargetingValueDemogGenderCriteria;
    /**
     * The long value to exclude/include.
     */
    longValue?: string | null;
    /**
     * The string value to exclude/include.
     */
    stringValue?: string | null;
  }
  /**
   * Next Id: 7
   */
  export interface Schema$TargetingValueCreativeSize {
    /**
     * The formats allowed by the publisher.
     */
    allowedFormats?: string[] | null;
    /**
     * For video size type, the list of companion sizes.
     */
    companionSizes?: Schema$TargetingValueSize[];
    /**
     * The Creative size type.
     */
    creativeSizeType?: string | null;
    /**
     * The native template for native ad.
     */
    nativeTemplate?: string | null;
    /**
     * For regular or video creative size type, specifies the size of the creative.
     */
    size?: Schema$TargetingValueSize;
    /**
     * The skippable ad type for video size.
     */
    skippableAdType?: string | null;
  }
  export interface Schema$TargetingValueDayPartTargeting {
    dayParts?: Schema$TargetingValueDayPartTargetingDayPart[];
    timeZoneType?: string | null;
  }
  export interface Schema$TargetingValueDayPartTargetingDayPart {
    dayOfWeek?: string | null;
    endHour?: number | null;
    endMinute?: number | null;
    startHour?: number | null;
    startMinute?: number | null;
  }
  export interface Schema$TargetingValueDemogAgeCriteria {
    demogAgeCriteriaIds?: string[] | null;
  }
  export interface Schema$TargetingValueDemogGenderCriteria {
    demogGenderCriteriaIds?: string[] | null;
  }
  export interface Schema$TargetingValueSize {
    /**
     * The height of the creative.
     */
    height?: number | null;
    /**
     * The width of the creative.
     */
    width?: number | null;
  }
  export interface Schema$UpdatePrivateAuctionProposalRequest {
    /**
     * The externalDealId of the deal to be updated.
     */
    externalDealId?: string | null;
    /**
     * Optional note to be added.
     */
    note?: Schema$MarketplaceNote;
    /**
     * The current revision number of the proposal to be updated.
     */
    proposalRevisionNumber?: string | null;
    /**
     * The proposed action on the private auction proposal.
     */
    updateAction?: string | null;
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
            url: (rootUrl + '/adexchangebuyer/v1.4/accounts/{id}').replace(
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
            url: (rootUrl + '/adexchangebuyer/v1.4/accounts').replace(
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
     * @param {boolean=} params.confirmUnsafeAccountChange Confirmation for erasing bidder and cookie matching urls.
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
            url: (rootUrl + '/adexchangebuyer/v1.4/accounts/{id}').replace(
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
     * @param {boolean=} params.confirmUnsafeAccountChange Confirmation for erasing bidder and cookie matching urls.
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
            url: (rootUrl + '/adexchangebuyer/v1.4/accounts/{id}').replace(
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
     * Confirmation for erasing bidder and cookie matching urls.
     */
    confirmUnsafeAccountChange?: boolean;
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
     * Confirmation for erasing bidder and cookie matching urls.
     */
    confirmUnsafeAccountChange?: boolean;
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
              rootUrl + '/adexchangebuyer/v1.4/billinginfo/{accountId}'
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
            url: (rootUrl + '/adexchangebuyer/v1.4/billinginfo').replace(
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
              '/adexchangebuyer/v1.4/billinginfo/{accountId}/{billingId}'
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
              '/adexchangebuyer/v1.4/billinginfo/{accountId}/{billingId}'
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
              '/adexchangebuyer/v1.4/billinginfo/{accountId}/{billingId}'
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
     * adexchangebuyer.creatives.addDeal
     * @desc Add a deal id association for the creative.
     * @alias adexchangebuyer.creatives.addDeal
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer} params.accountId The id for the account that will serve this creative.
     * @param {string} params.buyerCreativeId The buyer-specific id for this creative.
     * @param {string} params.dealId The id of the deal id to associate with this creative.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    addDeal(
      params?: Params$Resource$Creatives$Adddeal,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    addDeal(
      params: Params$Resource$Creatives$Adddeal,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    addDeal(
      params: Params$Resource$Creatives$Adddeal,
      callback: BodyResponseCallback<void>
    ): void;
    addDeal(callback: BodyResponseCallback<void>): void;
    addDeal(
      paramsOrCallback?:
        | Params$Resource$Creatives$Adddeal
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Creatives$Adddeal;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Creatives$Adddeal;
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
              '/adexchangebuyer/v1.4/creatives/{accountId}/{buyerCreativeId}/addDeal/{dealId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'buyerCreativeId', 'dealId'],
        pathParams: ['accountId', 'buyerCreativeId', 'dealId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
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
              '/adexchangebuyer/v1.4/creatives/{accountId}/{buyerCreativeId}'
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
            url: (rootUrl + '/adexchangebuyer/v1.4/creatives').replace(
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
     * @param {string=} params.dealsStatusFilter When specified, only creatives having the given deals status are returned.
     * @param {integer=} params.maxResults Maximum number of entries returned on one result page. If not set, the default is 100. Optional.
     * @param {string=} params.openAuctionStatusFilter When specified, only creatives having the given open auction status are returned.
     * @param {string=} params.pageToken A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response. Optional.
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
            url: (rootUrl + '/adexchangebuyer/v1.4/creatives').replace(
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

    /**
     * adexchangebuyer.creatives.listDeals
     * @desc Lists the external deal ids associated with the creative.
     * @alias adexchangebuyer.creatives.listDeals
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer} params.accountId The id for the account that will serve this creative.
     * @param {string} params.buyerCreativeId The buyer-specific id for this creative.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listDeals(
      params?: Params$Resource$Creatives$Listdeals,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CreativeDealIds>;
    listDeals(
      params: Params$Resource$Creatives$Listdeals,
      options: MethodOptions | BodyResponseCallback<Schema$CreativeDealIds>,
      callback: BodyResponseCallback<Schema$CreativeDealIds>
    ): void;
    listDeals(
      params: Params$Resource$Creatives$Listdeals,
      callback: BodyResponseCallback<Schema$CreativeDealIds>
    ): void;
    listDeals(callback: BodyResponseCallback<Schema$CreativeDealIds>): void;
    listDeals(
      paramsOrCallback?:
        | Params$Resource$Creatives$Listdeals
        | BodyResponseCallback<Schema$CreativeDealIds>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CreativeDealIds>,
      callback?: BodyResponseCallback<Schema$CreativeDealIds>
    ): void | GaxiosPromise<Schema$CreativeDealIds> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Creatives$Listdeals;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Creatives$Listdeals;
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
              '/adexchangebuyer/v1.4/creatives/{accountId}/{buyerCreativeId}/listDeals'
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
        createAPIRequest<Schema$CreativeDealIds>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CreativeDealIds>(parameters);
      }
    }

    /**
     * adexchangebuyer.creatives.removeDeal
     * @desc Remove a deal id associated with the creative.
     * @alias adexchangebuyer.creatives.removeDeal
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer} params.accountId The id for the account that will serve this creative.
     * @param {string} params.buyerCreativeId The buyer-specific id for this creative.
     * @param {string} params.dealId The id of the deal id to disassociate with this creative.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    removeDeal(
      params?: Params$Resource$Creatives$Removedeal,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    removeDeal(
      params: Params$Resource$Creatives$Removedeal,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    removeDeal(
      params: Params$Resource$Creatives$Removedeal,
      callback: BodyResponseCallback<void>
    ): void;
    removeDeal(callback: BodyResponseCallback<void>): void;
    removeDeal(
      paramsOrCallback?:
        | Params$Resource$Creatives$Removedeal
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Creatives$Removedeal;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Creatives$Removedeal;
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
              '/adexchangebuyer/v1.4/creatives/{accountId}/{buyerCreativeId}/removeDeal/{dealId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'buyerCreativeId', 'dealId'],
        pathParams: ['accountId', 'buyerCreativeId', 'dealId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Creatives$Adddeal
    extends StandardParameters {
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
    /**
     * The id of the deal id to associate with this creative.
     */
    dealId?: string;
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
     * When specified, only creatives having the given deals status are returned.
     */
    dealsStatusFilter?: string;
    /**
     * Maximum number of entries returned on one result page. If not set, the default is 100. Optional.
     */
    maxResults?: number;
    /**
     * When specified, only creatives having the given open auction status are returned.
     */
    openAuctionStatusFilter?: string;
    /**
     * A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response. Optional.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Creatives$Listdeals
    extends StandardParameters {
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
  export interface Params$Resource$Creatives$Removedeal
    extends StandardParameters {
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
    /**
     * The id of the deal id to disassociate with this creative.
     */
    dealId?: string;
  }

  export class Resource$Marketplacedeals {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * adexchangebuyer.marketplacedeals.delete
     * @desc Delete the specified deals from the proposal
     * @alias adexchangebuyer.marketplacedeals.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.proposalId The proposalId to delete deals from.
     * @param {().DeleteOrderDealsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Marketplacedeals$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DeleteOrderDealsResponse>;
    delete(
      params: Params$Resource$Marketplacedeals$Delete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$DeleteOrderDealsResponse>,
      callback: BodyResponseCallback<Schema$DeleteOrderDealsResponse>
    ): void;
    delete(
      params: Params$Resource$Marketplacedeals$Delete,
      callback: BodyResponseCallback<Schema$DeleteOrderDealsResponse>
    ): void;
    delete(
      callback: BodyResponseCallback<Schema$DeleteOrderDealsResponse>
    ): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Marketplacedeals$Delete
        | BodyResponseCallback<Schema$DeleteOrderDealsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$DeleteOrderDealsResponse>,
      callback?: BodyResponseCallback<Schema$DeleteOrderDealsResponse>
    ): void | GaxiosPromise<Schema$DeleteOrderDealsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Marketplacedeals$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Marketplacedeals$Delete;
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
              '/adexchangebuyer/v1.4/proposals/{proposalId}/deals/delete'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['proposalId'],
        pathParams: ['proposalId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DeleteOrderDealsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$DeleteOrderDealsResponse>(parameters);
      }
    }

    /**
     * adexchangebuyer.marketplacedeals.insert
     * @desc Add new deals for the specified proposal
     * @alias adexchangebuyer.marketplacedeals.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.proposalId proposalId for which deals need to be added.
     * @param {().AddOrderDealsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Marketplacedeals$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AddOrderDealsResponse>;
    insert(
      params: Params$Resource$Marketplacedeals$Insert,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AddOrderDealsResponse>,
      callback: BodyResponseCallback<Schema$AddOrderDealsResponse>
    ): void;
    insert(
      params: Params$Resource$Marketplacedeals$Insert,
      callback: BodyResponseCallback<Schema$AddOrderDealsResponse>
    ): void;
    insert(callback: BodyResponseCallback<Schema$AddOrderDealsResponse>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Marketplacedeals$Insert
        | BodyResponseCallback<Schema$AddOrderDealsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AddOrderDealsResponse>,
      callback?: BodyResponseCallback<Schema$AddOrderDealsResponse>
    ): void | GaxiosPromise<Schema$AddOrderDealsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Marketplacedeals$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Marketplacedeals$Insert;
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
              '/adexchangebuyer/v1.4/proposals/{proposalId}/deals/insert'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['proposalId'],
        pathParams: ['proposalId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AddOrderDealsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AddOrderDealsResponse>(parameters);
      }
    }

    /**
     * adexchangebuyer.marketplacedeals.list
     * @desc List all the deals for a given proposal
     * @alias adexchangebuyer.marketplacedeals.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.pqlQuery Query string to retrieve specific deals.
     * @param {string} params.proposalId The proposalId to get deals for. To search across all proposals specify order_id = '-' as part of the URL.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Marketplacedeals$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GetOrderDealsResponse>;
    list(
      params: Params$Resource$Marketplacedeals$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GetOrderDealsResponse>,
      callback: BodyResponseCallback<Schema$GetOrderDealsResponse>
    ): void;
    list(
      params: Params$Resource$Marketplacedeals$List,
      callback: BodyResponseCallback<Schema$GetOrderDealsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$GetOrderDealsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Marketplacedeals$List
        | BodyResponseCallback<Schema$GetOrderDealsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GetOrderDealsResponse>,
      callback?: BodyResponseCallback<Schema$GetOrderDealsResponse>
    ): void | GaxiosPromise<Schema$GetOrderDealsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Marketplacedeals$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Marketplacedeals$List;
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
              rootUrl + '/adexchangebuyer/v1.4/proposals/{proposalId}/deals'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['proposalId'],
        pathParams: ['proposalId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GetOrderDealsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GetOrderDealsResponse>(parameters);
      }
    }

    /**
     * adexchangebuyer.marketplacedeals.update
     * @desc Replaces all the deals in the proposal with the passed in deals
     * @alias adexchangebuyer.marketplacedeals.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.proposalId The proposalId to edit deals on.
     * @param {().EditAllOrderDealsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Marketplacedeals$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EditAllOrderDealsResponse>;
    update(
      params: Params$Resource$Marketplacedeals$Update,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$EditAllOrderDealsResponse>,
      callback: BodyResponseCallback<Schema$EditAllOrderDealsResponse>
    ): void;
    update(
      params: Params$Resource$Marketplacedeals$Update,
      callback: BodyResponseCallback<Schema$EditAllOrderDealsResponse>
    ): void;
    update(
      callback: BodyResponseCallback<Schema$EditAllOrderDealsResponse>
    ): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Marketplacedeals$Update
        | BodyResponseCallback<Schema$EditAllOrderDealsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$EditAllOrderDealsResponse>,
      callback?: BodyResponseCallback<Schema$EditAllOrderDealsResponse>
    ): void | GaxiosPromise<Schema$EditAllOrderDealsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Marketplacedeals$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Marketplacedeals$Update;
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
              '/adexchangebuyer/v1.4/proposals/{proposalId}/deals/update'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['proposalId'],
        pathParams: ['proposalId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$EditAllOrderDealsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$EditAllOrderDealsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Marketplacedeals$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The proposalId to delete deals from.
     */
    proposalId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DeleteOrderDealsRequest;
  }
  export interface Params$Resource$Marketplacedeals$Insert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * proposalId for which deals need to be added.
     */
    proposalId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AddOrderDealsRequest;
  }
  export interface Params$Resource$Marketplacedeals$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Query string to retrieve specific deals.
     */
    pqlQuery?: string;
    /**
     * The proposalId to get deals for. To search across all proposals specify order_id = '-' as part of the URL.
     */
    proposalId?: string;
  }
  export interface Params$Resource$Marketplacedeals$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The proposalId to edit deals on.
     */
    proposalId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EditAllOrderDealsRequest;
  }

  export class Resource$Marketplacenotes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * adexchangebuyer.marketplacenotes.insert
     * @desc Add notes to the proposal
     * @alias adexchangebuyer.marketplacenotes.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.proposalId The proposalId to add notes for.
     * @param {().AddOrderNotesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Marketplacenotes$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AddOrderNotesResponse>;
    insert(
      params: Params$Resource$Marketplacenotes$Insert,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AddOrderNotesResponse>,
      callback: BodyResponseCallback<Schema$AddOrderNotesResponse>
    ): void;
    insert(
      params: Params$Resource$Marketplacenotes$Insert,
      callback: BodyResponseCallback<Schema$AddOrderNotesResponse>
    ): void;
    insert(callback: BodyResponseCallback<Schema$AddOrderNotesResponse>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Marketplacenotes$Insert
        | BodyResponseCallback<Schema$AddOrderNotesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AddOrderNotesResponse>,
      callback?: BodyResponseCallback<Schema$AddOrderNotesResponse>
    ): void | GaxiosPromise<Schema$AddOrderNotesResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Marketplacenotes$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Marketplacenotes$Insert;
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
              '/adexchangebuyer/v1.4/proposals/{proposalId}/notes/insert'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['proposalId'],
        pathParams: ['proposalId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AddOrderNotesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AddOrderNotesResponse>(parameters);
      }
    }

    /**
     * adexchangebuyer.marketplacenotes.list
     * @desc Get all the notes associated with a proposal
     * @alias adexchangebuyer.marketplacenotes.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.pqlQuery Query string to retrieve specific notes. To search the text contents of notes, please use syntax like "WHERE note.note = "foo" or "WHERE note.note LIKE "%bar%"
     * @param {string} params.proposalId The proposalId to get notes for. To search across all proposals specify order_id = '-' as part of the URL.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Marketplacenotes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GetOrderNotesResponse>;
    list(
      params: Params$Resource$Marketplacenotes$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GetOrderNotesResponse>,
      callback: BodyResponseCallback<Schema$GetOrderNotesResponse>
    ): void;
    list(
      params: Params$Resource$Marketplacenotes$List,
      callback: BodyResponseCallback<Schema$GetOrderNotesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$GetOrderNotesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Marketplacenotes$List
        | BodyResponseCallback<Schema$GetOrderNotesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GetOrderNotesResponse>,
      callback?: BodyResponseCallback<Schema$GetOrderNotesResponse>
    ): void | GaxiosPromise<Schema$GetOrderNotesResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Marketplacenotes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Marketplacenotes$List;
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
              rootUrl + '/adexchangebuyer/v1.4/proposals/{proposalId}/notes'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['proposalId'],
        pathParams: ['proposalId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GetOrderNotesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GetOrderNotesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Marketplacenotes$Insert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The proposalId to add notes for.
     */
    proposalId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AddOrderNotesRequest;
  }
  export interface Params$Resource$Marketplacenotes$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Query string to retrieve specific notes. To search the text contents of notes, please use syntax like "WHERE note.note = "foo" or "WHERE note.note LIKE "%bar%"
     */
    pqlQuery?: string;
    /**
     * The proposalId to get notes for. To search across all proposals specify order_id = '-' as part of the URL.
     */
    proposalId?: string;
  }

  export class Resource$Marketplaceprivateauction {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * adexchangebuyer.marketplaceprivateauction.updateproposal
     * @desc Update a given private auction proposal
     * @alias adexchangebuyer.marketplaceprivateauction.updateproposal
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.privateAuctionId The private auction id to be updated.
     * @param {().UpdatePrivateAuctionProposalRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updateproposal(
      params?: Params$Resource$Marketplaceprivateauction$Updateproposal,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    updateproposal(
      params: Params$Resource$Marketplaceprivateauction$Updateproposal,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    updateproposal(
      params: Params$Resource$Marketplaceprivateauction$Updateproposal,
      callback: BodyResponseCallback<void>
    ): void;
    updateproposal(callback: BodyResponseCallback<void>): void;
    updateproposal(
      paramsOrCallback?:
        | Params$Resource$Marketplaceprivateauction$Updateproposal
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Marketplaceprivateauction$Updateproposal;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Marketplaceprivateauction$Updateproposal;
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
              '/adexchangebuyer/v1.4/privateauction/{privateAuctionId}/updateproposal'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['privateAuctionId'],
        pathParams: ['privateAuctionId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Marketplaceprivateauction$Updateproposal
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The private auction id to be updated.
     */
    privateAuctionId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UpdatePrivateAuctionProposalRequest;
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
            url: (rootUrl + '/adexchangebuyer/v1.4/performancereport').replace(
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
              '/adexchangebuyer/v1.4/pretargetingconfigs/{accountId}/{configId}'
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
              '/adexchangebuyer/v1.4/pretargetingconfigs/{accountId}/{configId}'
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
              rootUrl + '/adexchangebuyer/v1.4/pretargetingconfigs/{accountId}'
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
              rootUrl + '/adexchangebuyer/v1.4/pretargetingconfigs/{accountId}'
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
              '/adexchangebuyer/v1.4/pretargetingconfigs/{accountId}/{configId}'
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
              '/adexchangebuyer/v1.4/pretargetingconfigs/{accountId}/{configId}'
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

  export class Resource$Products {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * adexchangebuyer.products.get
     * @desc Gets the requested product by id.
     * @alias adexchangebuyer.products.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.productId The id for the product to get the head revision for.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Products$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Product>;
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
        | BodyResponseCallback<Schema$Product>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Product>,
      callback?: BodyResponseCallback<Schema$Product>
    ): void | GaxiosPromise<Schema$Product> {
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
              rootUrl + '/adexchangebuyer/v1.4/products/{productId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['productId'],
        pathParams: ['productId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Product>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Product>(parameters);
      }
    }

    /**
     * adexchangebuyer.products.search
     * @desc Gets the requested product.
     * @alias adexchangebuyer.products.search
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.pqlQuery The pql query used to query for products.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    search(
      params?: Params$Resource$Products$Search,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GetOffersResponse>;
    search(
      params: Params$Resource$Products$Search,
      options: MethodOptions | BodyResponseCallback<Schema$GetOffersResponse>,
      callback: BodyResponseCallback<Schema$GetOffersResponse>
    ): void;
    search(
      params: Params$Resource$Products$Search,
      callback: BodyResponseCallback<Schema$GetOffersResponse>
    ): void;
    search(callback: BodyResponseCallback<Schema$GetOffersResponse>): void;
    search(
      paramsOrCallback?:
        | Params$Resource$Products$Search
        | BodyResponseCallback<Schema$GetOffersResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GetOffersResponse>,
      callback?: BodyResponseCallback<Schema$GetOffersResponse>
    ): void | GaxiosPromise<Schema$GetOffersResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Products$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Products$Search;
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
            url: (rootUrl + '/adexchangebuyer/v1.4/products/search').replace(
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
        createAPIRequest<Schema$GetOffersResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GetOffersResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Products$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The id for the product to get the head revision for.
     */
    productId?: string;
  }
  export interface Params$Resource$Products$Search extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The pql query used to query for products.
     */
    pqlQuery?: string;
  }

  export class Resource$Proposals {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * adexchangebuyer.proposals.get
     * @desc Get a proposal given its id
     * @alias adexchangebuyer.proposals.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.proposalId Id of the proposal to retrieve.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Proposals$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Proposal>;
    get(
      params: Params$Resource$Proposals$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Proposal>,
      callback: BodyResponseCallback<Schema$Proposal>
    ): void;
    get(
      params: Params$Resource$Proposals$Get,
      callback: BodyResponseCallback<Schema$Proposal>
    ): void;
    get(callback: BodyResponseCallback<Schema$Proposal>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Proposals$Get
        | BodyResponseCallback<Schema$Proposal>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Proposal>,
      callback?: BodyResponseCallback<Schema$Proposal>
    ): void | GaxiosPromise<Schema$Proposal> {
      let params = (paramsOrCallback || {}) as Params$Resource$Proposals$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Proposals$Get;
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
              rootUrl + '/adexchangebuyer/v1.4/proposals/{proposalId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['proposalId'],
        pathParams: ['proposalId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Proposal>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Proposal>(parameters);
      }
    }

    /**
     * adexchangebuyer.proposals.insert
     * @desc Create the given list of proposals
     * @alias adexchangebuyer.proposals.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().CreateOrdersRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Proposals$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CreateOrdersResponse>;
    insert(
      params: Params$Resource$Proposals$Insert,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CreateOrdersResponse>,
      callback: BodyResponseCallback<Schema$CreateOrdersResponse>
    ): void;
    insert(
      params: Params$Resource$Proposals$Insert,
      callback: BodyResponseCallback<Schema$CreateOrdersResponse>
    ): void;
    insert(callback: BodyResponseCallback<Schema$CreateOrdersResponse>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Proposals$Insert
        | BodyResponseCallback<Schema$CreateOrdersResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CreateOrdersResponse>,
      callback?: BodyResponseCallback<Schema$CreateOrdersResponse>
    ): void | GaxiosPromise<Schema$CreateOrdersResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Proposals$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Proposals$Insert;
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
            url: (rootUrl + '/adexchangebuyer/v1.4/proposals/insert').replace(
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
        createAPIRequest<Schema$CreateOrdersResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CreateOrdersResponse>(parameters);
      }
    }

    /**
     * adexchangebuyer.proposals.patch
     * @desc Update the given proposal. This method supports patch semantics.
     * @alias adexchangebuyer.proposals.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.proposalId The proposal id to update.
     * @param {string} params.revisionNumber The last known revision number to update. If the head revision in the marketplace database has since changed, an error will be thrown. The caller should then fetch the latest proposal at head revision and retry the update at that revision.
     * @param {string} params.updateAction The proposed action to take on the proposal. This field is required and it must be set when updating a proposal.
     * @param {().Proposal} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Proposals$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Proposal>;
    patch(
      params: Params$Resource$Proposals$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Proposal>,
      callback: BodyResponseCallback<Schema$Proposal>
    ): void;
    patch(
      params: Params$Resource$Proposals$Patch,
      callback: BodyResponseCallback<Schema$Proposal>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Proposal>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Proposals$Patch
        | BodyResponseCallback<Schema$Proposal>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Proposal>,
      callback?: BodyResponseCallback<Schema$Proposal>
    ): void | GaxiosPromise<Schema$Proposal> {
      let params = (paramsOrCallback || {}) as Params$Resource$Proposals$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Proposals$Patch;
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
              '/adexchangebuyer/v1.4/proposals/{proposalId}/{revisionNumber}/{updateAction}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['proposalId', 'revisionNumber', 'updateAction'],
        pathParams: ['proposalId', 'revisionNumber', 'updateAction'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Proposal>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Proposal>(parameters);
      }
    }

    /**
     * adexchangebuyer.proposals.search
     * @desc Search for proposals using pql query
     * @alias adexchangebuyer.proposals.search
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.pqlQuery Query string to retrieve specific proposals.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    search(
      params?: Params$Resource$Proposals$Search,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GetOrdersResponse>;
    search(
      params: Params$Resource$Proposals$Search,
      options: MethodOptions | BodyResponseCallback<Schema$GetOrdersResponse>,
      callback: BodyResponseCallback<Schema$GetOrdersResponse>
    ): void;
    search(
      params: Params$Resource$Proposals$Search,
      callback: BodyResponseCallback<Schema$GetOrdersResponse>
    ): void;
    search(callback: BodyResponseCallback<Schema$GetOrdersResponse>): void;
    search(
      paramsOrCallback?:
        | Params$Resource$Proposals$Search
        | BodyResponseCallback<Schema$GetOrdersResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GetOrdersResponse>,
      callback?: BodyResponseCallback<Schema$GetOrdersResponse>
    ): void | GaxiosPromise<Schema$GetOrdersResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Proposals$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Proposals$Search;
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
            url: (rootUrl + '/adexchangebuyer/v1.4/proposals/search').replace(
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
        createAPIRequest<Schema$GetOrdersResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GetOrdersResponse>(parameters);
      }
    }

    /**
     * adexchangebuyer.proposals.setupcomplete
     * @desc Update the given proposal to indicate that setup has been completed.
     * @alias adexchangebuyer.proposals.setupcomplete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.proposalId The proposal id for which the setup is complete
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setupcomplete(
      params?: Params$Resource$Proposals$Setupcomplete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    setupcomplete(
      params: Params$Resource$Proposals$Setupcomplete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    setupcomplete(
      params: Params$Resource$Proposals$Setupcomplete,
      callback: BodyResponseCallback<void>
    ): void;
    setupcomplete(callback: BodyResponseCallback<void>): void;
    setupcomplete(
      paramsOrCallback?:
        | Params$Resource$Proposals$Setupcomplete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Proposals$Setupcomplete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Proposals$Setupcomplete;
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
              '/adexchangebuyer/v1.4/proposals/{proposalId}/setupcomplete'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['proposalId'],
        pathParams: ['proposalId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * adexchangebuyer.proposals.update
     * @desc Update the given proposal
     * @alias adexchangebuyer.proposals.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.proposalId The proposal id to update.
     * @param {string} params.revisionNumber The last known revision number to update. If the head revision in the marketplace database has since changed, an error will be thrown. The caller should then fetch the latest proposal at head revision and retry the update at that revision.
     * @param {string} params.updateAction The proposed action to take on the proposal. This field is required and it must be set when updating a proposal.
     * @param {().Proposal} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Proposals$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Proposal>;
    update(
      params: Params$Resource$Proposals$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Proposal>,
      callback: BodyResponseCallback<Schema$Proposal>
    ): void;
    update(
      params: Params$Resource$Proposals$Update,
      callback: BodyResponseCallback<Schema$Proposal>
    ): void;
    update(callback: BodyResponseCallback<Schema$Proposal>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Proposals$Update
        | BodyResponseCallback<Schema$Proposal>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Proposal>,
      callback?: BodyResponseCallback<Schema$Proposal>
    ): void | GaxiosPromise<Schema$Proposal> {
      let params = (paramsOrCallback || {}) as Params$Resource$Proposals$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Proposals$Update;
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
              '/adexchangebuyer/v1.4/proposals/{proposalId}/{revisionNumber}/{updateAction}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['proposalId', 'revisionNumber', 'updateAction'],
        pathParams: ['proposalId', 'revisionNumber', 'updateAction'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Proposal>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Proposal>(parameters);
      }
    }
  }

  export interface Params$Resource$Proposals$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Id of the proposal to retrieve.
     */
    proposalId?: string;
  }
  export interface Params$Resource$Proposals$Insert extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreateOrdersRequest;
  }
  export interface Params$Resource$Proposals$Patch extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The proposal id to update.
     */
    proposalId?: string;
    /**
     * The last known revision number to update. If the head revision in the marketplace database has since changed, an error will be thrown. The caller should then fetch the latest proposal at head revision and retry the update at that revision.
     */
    revisionNumber?: string;
    /**
     * The proposed action to take on the proposal. This field is required and it must be set when updating a proposal.
     */
    updateAction?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Proposal;
  }
  export interface Params$Resource$Proposals$Search extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Query string to retrieve specific proposals.
     */
    pqlQuery?: string;
  }
  export interface Params$Resource$Proposals$Setupcomplete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The proposal id for which the setup is complete
     */
    proposalId?: string;
  }
  export interface Params$Resource$Proposals$Update extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The proposal id to update.
     */
    proposalId?: string;
    /**
     * The last known revision number to update. If the head revision in the marketplace database has since changed, an error will be thrown. The caller should then fetch the latest proposal at head revision and retry the update at that revision.
     */
    revisionNumber?: string;
    /**
     * The proposed action to take on the proposal. This field is required and it must be set when updating a proposal.
     */
    updateAction?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Proposal;
  }

  export class Resource$Pubprofiles {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * adexchangebuyer.pubprofiles.list
     * @desc Gets the requested publisher profile(s) by publisher accountId.
     * @alias adexchangebuyer.pubprofiles.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer} params.accountId The accountId of the publisher to get profiles for.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Pubprofiles$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GetPublisherProfilesByAccountIdResponse>;
    list(
      params: Params$Resource$Pubprofiles$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GetPublisherProfilesByAccountIdResponse>,
      callback: BodyResponseCallback<
        Schema$GetPublisherProfilesByAccountIdResponse
      >
    ): void;
    list(
      params: Params$Resource$Pubprofiles$List,
      callback: BodyResponseCallback<
        Schema$GetPublisherProfilesByAccountIdResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GetPublisherProfilesByAccountIdResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Pubprofiles$List
        | BodyResponseCallback<Schema$GetPublisherProfilesByAccountIdResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GetPublisherProfilesByAccountIdResponse>,
      callback?: BodyResponseCallback<
        Schema$GetPublisherProfilesByAccountIdResponse
      >
    ): void | GaxiosPromise<Schema$GetPublisherProfilesByAccountIdResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Pubprofiles$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Pubprofiles$List;
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
              rootUrl + '/adexchangebuyer/v1.4/publisher/{accountId}/profiles'
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
        createAPIRequest<Schema$GetPublisherProfilesByAccountIdResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GetPublisherProfilesByAccountIdResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Pubprofiles$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The accountId of the publisher to get profiles for.
     */
    accountId?: number;
  }
}
