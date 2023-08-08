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

export namespace authorizedbuyersmarketplace_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
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
   * Authorized Buyers Marketplace API
   *
   * The Authorized Buyers Marketplace API lets buyers programmatically discover inventory; propose, retrieve and negotiate deals with publishers.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const authorizedbuyersmarketplace = google.authorizedbuyersmarketplace('v1');
   * ```
   */
  export class Authorizedbuyersmarketplace {
    context: APIRequestContext;
    bidders: Resource$Bidders;
    buyers: Resource$Buyers;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.bidders = new Resource$Bidders(this.context);
      this.buyers = new Resource$Buyers(this.context);
    }
  }

  /**
   * Request to accept a proposal. Accepting a proposal implies acceptance of the publisher terms_and_conditions, if any.
   */
  export interface Schema$AcceptProposalRequest {
    /**
     * The last known client revision number of the proposal.
     */
    proposalRevision?: string | null;
  }
  /**
   * Request message for activating a client.
   */
  export interface Schema$ActivateClientRequest {}
  /**
   * Request message for activating a client user.
   */
  export interface Schema$ActivateClientUserRequest {}
  /**
   * Request message for adding creative to be used in the bidding process for the finalized deal.
   */
  export interface Schema$AddCreativeRequest {
    /**
     * Name of the creative to add to the finalized deal, in the format `buyers/{buyerAccountId\}/creatives/{creativeId\}`. See creative.name.
     */
    creative?: string | null;
  }
  /**
   * Request to add a note.
   */
  export interface Schema$AddNoteRequest {
    /**
     * The note to add.
     */
    note?: Schema$Note;
  }
  /**
   * Represents size of a single ad slot, or a creative.
   */
  export interface Schema$AdSize {
    /**
     * The height of the ad slot in pixels. This field will be present only when size type is `PIXEL`.
     */
    height?: string | null;
    /**
     * The type of the ad slot size.
     */
    type?: string | null;
    /**
     * The width of the ad slot in pixels. This field will be present only when size type is `PIXEL`.
     */
    width?: string | null;
  }
  /**
   * Defines a segment of inventory that buyer wants to buy. It's created by buyer and could be shared with multiple buyers.
   */
  export interface Schema$AuctionPackage {
    /**
     * Output only. Time the auction package was created.
     */
    createTime?: string | null;
    /**
     * Output only. The buyer that created this auction package. Format: `buyers/{buyerAccountId\}`
     */
    creator?: string | null;
    /**
     * Output only. A description of the auction package.
     */
    description?: string | null;
    /**
     * The display_name assigned to the auction package.
     */
    displayName?: string | null;
    /**
     * Immutable. The unique identifier for the auction package. Format: `buyers/{accountId\}/auctionPackages/{auctionPackageId\}` The auction_package_id part of name is sent in the BidRequest to all RTB bidders and is returned as deal_id by the bidder in the BidResponse.
     */
    name?: string | null;
    /**
     * Output only. The list of clients of the current buyer that are subscribed to the AuctionPackage. Format: `buyers/{buyerAccountId\}/clients/{clientAccountId\}`
     */
    subscribedClients?: string[] | null;
    /**
     * Output only. Time the auction package was last updated. This value is only increased when this auction package is updated but never when a buyer subscribed.
     */
    updateTime?: string | null;
  }
  /**
   * Request message for batch updating deals.
   */
  export interface Schema$BatchUpdateDealsRequest {
    /**
     * Required. List of request messages to update deals.
     */
    requests?: Schema$UpdateDealRequest[];
  }
  /**
   * Response message for batch updating deals.
   */
  export interface Schema$BatchUpdateDealsResponse {
    /**
     * Deals updated.
     */
    deals?: Schema$Deal[];
  }
  /**
   * Request to cancel an ongoing negotiation.
   */
  export interface Schema$CancelNegotiationRequest {}
  /**
   * A client represents an agency, a brand, or an advertiser customer of the buyer. Based on the client's role, its client users will have varying levels of restricted access to the Marketplace and certain other sections of the Authorized Buyers UI.
   */
  export interface Schema$Client {
    /**
     * Required. Display name shown to publishers. Must be unique for clients without partnerClientId specified. Maximum length of 255 characters is allowed.
     */
    displayName?: string | null;
    /**
     * Output only. The resource name of the client. Format: `buyers/{accountId\}/clients/{clientAccountId\}`
     */
    name?: string | null;
    /**
     * Arbitrary unique identifier provided by the buyer. This field can be used to associate a client with an identifier in the namespace of the buyer, lookup clients by that identifier and verify whether an Authorized Buyers account of the client already exists. If present, must be unique across all the clients.
     */
    partnerClientId?: string | null;
    /**
     * Required. The role assigned to the client. Each role implies a set of permissions granted to the client.
     */
    role?: string | null;
    /**
     * Whether the client will be visible to sellers.
     */
    sellerVisible?: boolean | null;
    /**
     * Output only. The state of the client.
     */
    state?: string | null;
  }
  /**
   * A user of a client who has restricted access to the Marketplace and certain other sections of the Authorized Buyers UI based on the role granted to the associated client.
   */
  export interface Schema$ClientUser {
    /**
     * Required. The client user's email address that has to be unique across all users for the same client.
     */
    email?: string | null;
    /**
     * Output only. The resource name of the client user. Format: `buyers/{accountId\}/clients/{clientAccountId\}/users/{userId\}`
     */
    name?: string | null;
    /**
     * Output only. The state of the client user.
     */
    state?: string | null;
  }
  /**
   * Contains information on how a buyer or seller can be reached.
   */
  export interface Schema$Contact {
    /**
     * The display_name of the contact.
     */
    displayName?: string | null;
    /**
     * Email address for the contact.
     */
    email?: string | null;
  }
  /**
   * Message captures data about the creatives in the deal.
   */
  export interface Schema$CreativeRequirements {
    /**
     * Output only. The format of the creative, only applicable for programmatic guaranteed and preferred deals.
     */
    creativeFormat?: string | null;
    /**
     * Output only. Specifies the creative pre-approval policy.
     */
    creativePreApprovalPolicy?: string | null;
    /**
     * Output only. Specifies whether the creative is safeFrame compatible.
     */
    creativeSafeFrameCompatibility?: string | null;
    /**
     * Output only. The max duration of the video creative in milliseconds. only applicable for deals with video creatives.
     */
    maxAdDurationMs?: string | null;
    /**
     * Output only. Specifies the creative source for programmatic deals. PUBLISHER means creative is provided by seller and ADVERTISER means creative is provided by the buyer.
     */
    programmaticCreativeSource?: string | null;
    /**
     * Output only. Skippable video ads allow viewers to skip ads after 5 seconds. Only applicable for deals with video creatives.
     */
    skippableAdType?: string | null;
  }
  /**
   * Generic targeting used for targeting dimensions that contains a list of included and excluded numeric IDs. This cannot be filtered using list filter syntax.
   */
  export interface Schema$CriteriaTargeting {
    /**
     * A list of numeric IDs to be excluded.
     */
    excludedCriteriaIds?: string[] | null;
    /**
     * A list of numeric IDs to be included.
     */
    targetedCriteriaIds?: string[] | null;
  }
  /**
   * Defines targeting for a period of time on a specific week day.
   */
  export interface Schema$DayPart {
    /**
     * Day of week for the period.
     */
    dayOfWeek?: string | null;
    /**
     * Hours in 24 hour time between 0 and 24, inclusive. Note: 24 is logically equivalent to 0, but is supported since in some cases there may need to be differentiation made between midnight on one day and midnight on the next day. Accepted values for minutes are [0, 15, 30, 45]. 0 is the only acceptable minute value for hour 24. Seconds and nanos are ignored.
     */
    endTime?: Schema$TimeOfDay;
    /**
     * Hours in 24 hour time between 0 and 24, inclusive. Note: 24 is logically equivalent to 0, but is supported since in some cases there may need to be differentiation made between midnight on one day and midnight on the next day. Accepted values for minutes are [0, 15, 30, 45]. 0 is the only acceptable minute value for hour 24. Seconds and nanos are ignored.
     */
    startTime?: Schema$TimeOfDay;
  }
  /**
   * Represents Daypart targeting.
   */
  export interface Schema$DayPartTargeting {
    /**
     * The targeted weekdays and times
     */
    dayParts?: Schema$DayPart[];
    /**
     * The time zone type of the day parts
     */
    timeZoneType?: string | null;
  }
  /**
   * Request message for disabling a client.
   */
  export interface Schema$DeactivateClientRequest {}
  /**
   * Request message for deactivating a client user.
   */
  export interface Schema$DeactivateClientUserRequest {}
  /**
   * A deal represents a segment of inventory for displaying ads that contains the terms and targeting information that is used for serving as well as the deal stats and status. Note: A proposal may contain multiple deals.
   */
  export interface Schema$Deal {
    /**
     * Output only. When the client field is populated, this field refers to the buyer who creates and manages the client buyer and gets billed on behalf of the client buyer; when the buyer field is populated, this field is the same value as buyer. Format : `buyers/{buyerAccountId\}`
     */
    billedBuyer?: string | null;
    /**
     * Output only. Refers to a buyer in The Realtime-bidding API. Format: `buyers/{buyerAccountId\}`
     */
    buyer?: string | null;
    /**
     * Output only. Refers to a Client. Format: `buyers/{buyerAccountId\}/clients/{clientAccountid\}`
     */
    client?: string | null;
    /**
     * Output only. The time of the deal creation.
     */
    createTime?: string | null;
    /**
     * Output only. Metadata about the creatives of this deal.
     */
    creativeRequirements?: Schema$CreativeRequirements;
    /**
     * Output only. Type of deal.
     */
    dealType?: string | null;
    /**
     * Output only. Specifies the pacing set by the publisher.
     */
    deliveryControl?: Schema$DeliveryControl;
    /**
     * Output only. Free text description for the deal terms.
     */
    description?: string | null;
    /**
     * Output only. The name of the deal. Maximum length of 255 unicode characters is allowed. Control characters are not allowed. Buyers cannot update this field. Note: Not to be confused with name, which is a unique identifier of the deal.
     */
    displayName?: string | null;
    /**
     * Specified by buyers in request for proposal (RFP) to notify publisher the total estimated spend for the proposal. Publishers will receive this information and send back proposed deals accordingly.
     */
    estimatedGrossSpend?: Schema$Money;
    /**
     * Proposed flight end time of the deal. This will generally be stored in a granularity of a second. A value is not necessary for Private Auction deals.
     */
    flightEndTime?: string | null;
    /**
     * Proposed flight start time of the deal. This will generally be stored in the granularity of one second since deal serving starts at seconds boundary. Any time specified with more granularity (for example, in milliseconds) will be truncated towards the start of time in seconds.
     */
    flightStartTime?: string | null;
    /**
     * Immutable. The unique identifier of the deal. Auto-generated by the server when a deal is created. Format: buyers/{accountId\}/proposals/{proposalId\}/deals/{dealId\}
     */
    name?: string | null;
    /**
     * The terms for preferred deals.
     */
    preferredDealTerms?: Schema$PreferredDealTerms;
    /**
     * The terms for private auction deals.
     */
    privateAuctionTerms?: Schema$PrivateAuctionTerms;
    /**
     * The terms for programmatic guaranteed deals.
     */
    programmaticGuaranteedTerms?: Schema$ProgrammaticGuaranteedTerms;
    /**
     * Output only. The revision number for the proposal and is the same value as proposal.proposal_revision. Each update to deal causes the proposal revision number to auto-increment. The buyer keeps track of the last revision number they know of and pass it in when making an update. If the head revision number on the server has since incremented, then an ABORTED error is returned during the update operation to let the buyer know that a subsequent update was made.
     */
    proposalRevision?: string | null;
    /**
     * Immutable. Reference to the seller on the deal. Format: `buyers/{buyerAccountId\}/publisherProfiles/{publisherProfileId\}`
     */
    publisherProfile?: string | null;
    /**
     * Output only. Time zone of the seller used to mark the boundaries of a day for daypart targeting and CPD billing.
     */
    sellerTimeZone?: Schema$TimeZone;
    /**
     * Specifies the subset of inventory targeted by the deal. Can be updated by the buyer before the deal is finalized.
     */
    targeting?: Schema$MarketplaceTargeting;
    /**
     * Output only. The time when the deal was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Information related to deal pausing.
   */
  export interface Schema$DealPausingInfo {
    /**
     * The reason for the pausing of the deal; empty for active deals.
     */
    pauseReason?: string | null;
    /**
     * The party that first paused the deal; unspecified for active deals.
     */
    pauseRole?: string | null;
    /**
     * Whether pausing is consented between buyer and seller for the deal.
     */
    pausingConsented?: boolean | null;
  }
  /**
   * Message contains details about how the deal will be paced.
   */
  export interface Schema$DeliveryControl {
    /**
     * Output only. Specifies roadblocking in a main companion lineitem.
     */
    companionDeliveryType?: string | null;
    /**
     * Output only. Specifies strategy to use for selecting a creative when multiple creatives of the same size are available.
     */
    creativeRotationType?: string | null;
    /**
     * Output only. Specifies how the impression delivery will be paced.
     */
    deliveryRateType?: string | null;
    /**
     * Output only. Specifies any frequency caps. Cannot be filtered within ListDealsRequest.
     */
    frequencyCap?: Schema$FrequencyCap[];
    /**
     * Output only. Specifies the roadblocking type in display creatives.
     */
    roadblockingType?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * A finalized deal is a snapshot of the deal when both buyer and seller accept the deal. The buyer or seller can update the deal after it's been finalized and renegotiate on the deal targeting, terms and other fields, while at the same time the finalized snapshot of the deal can still be retrieved using this API. The finalized deal contains a copy of the deal as it existed when most recently finalized, as well as fields related to deal serving such as pause/resume status, RTB metrics, and more.
   */
  export interface Schema$FinalizedDeal {
    /**
     * A copy of the Deal made upon finalization. During renegotiation, this will reflect the last finalized deal before renegotiation was initiated.
     */
    deal?: Schema$Deal;
    /**
     * Information related to deal pausing for the deal.
     */
    dealPausingInfo?: Schema$DealPausingInfo;
    /**
     * Serving status of the deal.
     */
    dealServingStatus?: string | null;
    /**
     * The resource name of the finalized deal. Format: `buyers/{accountId\}/finalizeddeals/{finalizedDealId\}`
     */
    name?: string | null;
    /**
     * Whether the Programmatic Guaranteed deal is ready for serving.
     */
    readyToServe?: boolean | null;
    /**
     * Real-time bidding metrics for this deal.
     */
    rtbMetrics?: Schema$RtbMetrics;
  }
  /**
   * Represents a list of targeted and excluded mobile application IDs that publishers own. Android App ID, for example, com.google.android.apps.maps, can be found in Google Play Store URL. iOS App ID (which is a number) can be found at the end of iTunes store URL. First party mobile applications is either included or excluded.
   */
  export interface Schema$FirstPartyMobileApplicationTargeting {
    /**
     * A list of application IDs to be excluded.
     */
    excludedAppIds?: string[] | null;
    /**
     * A list of application IDs to be included.
     */
    targetedAppIds?: string[] | null;
  }
  /**
   * Message contains details about publisher-set frequency caps of the delivery.
   */
  export interface Schema$FrequencyCap {
    /**
     * The maximum number of impressions that can be served to a user within the specified time period.
     */
    maxImpressions?: number | null;
    /**
     * The amount of time, in the units specified by time_unit_type. Defines the amount of time over which impressions per user are counted and capped.
     */
    timeUnitsCount?: number | null;
    /**
     * The time unit. Along with num_time_units defines the amount of time over which impressions per user are counted and capped.
     */
    timeUnitType?: string | null;
  }
  /**
   * Represents the size of an ad unit that can be targeted on a bid request.
   */
  export interface Schema$InventorySizeTargeting {
    /**
     * A list of inventory sizes to be excluded.
     */
    excludedInventorySizes?: Schema$AdSize[];
    /**
     * A list of inventory sizes to be included.
     */
    targetedInventorySizes?: Schema$AdSize[];
  }
  /**
   * Targeting of the inventory types a bid request can originate from.
   */
  export interface Schema$InventoryTypeTargeting {
    /**
     * The list of targeted inventory types for the bid request.
     */
    inventoryTypes?: string[] | null;
  }
  /**
   * Response message for listing auction packages.
   */
  export interface Schema$ListAuctionPackagesResponse {
    /**
     * The list of auction packages.
     */
    auctionPackages?: Schema$AuctionPackage[];
    /**
     * Continuation token for fetching the next page of results. Pass this value in the ListAuctionPackagesRequest.pageToken field in the subsequent call to the `ListAuctionPackages` method to retrieve the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for the list method.
   */
  export interface Schema$ListClientsResponse {
    /**
     * The returned list of clients.
     */
    clients?: Schema$Client[];
    /**
     * A token to retrieve the next page of results. Pass this value in the ListClientsRequest.pageToken field in the subsequent call to the list method to retrieve the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for the list method.
   */
  export interface Schema$ListClientUsersResponse {
    /**
     * The returned list of client users.
     */
    clientUsers?: Schema$ClientUser[];
    /**
     * A token to retrieve the next page of results. Pass this value in the ListClientUsersRequest.pageToken field in the subsequent call to the list method to retrieve the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for listing deals in a proposal.
   */
  export interface Schema$ListDealsResponse {
    /**
     * The list of deals.
     */
    deals?: Schema$Deal[];
    /**
     * Token to fetch the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for listing finalized deals.
   */
  export interface Schema$ListFinalizedDealsResponse {
    /**
     * The list of finalized deals.
     */
    finalizedDeals?: Schema$FinalizedDeal[];
    /**
     * Token to fetch the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for listing proposals.
   */
  export interface Schema$ListProposalsResponse {
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * The list of proposals.
     */
    proposals?: Schema$Proposal[];
  }
  /**
   * Response message for profiles visible to the buyer.
   */
  export interface Schema$ListPublisherProfilesResponse {
    /**
     * Token to fetch the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * The list of matching publisher profiles.
     */
    publisherProfiles?: Schema$PublisherProfile[];
  }
  /**
   * Targeting represents different criteria that can be used to target inventory. For example, they can choose to target inventory only if the user is in the US. Multiple types of targeting are always applied as a logical AND, unless noted otherwise.
   */
  export interface Schema$MarketplaceTargeting {
    /**
     * Daypart targeting information.
     */
    daypartTargeting?: Schema$DayPartTargeting;
    /**
     * Output only. Geo criteria IDs to be included/excluded.
     */
    geoTargeting?: Schema$CriteriaTargeting;
    /**
     * Output only. Inventory sizes to be included/excluded.
     */
    inventorySizeTargeting?: Schema$InventorySizeTargeting;
    /**
     * Output only. Inventory type targeting information.
     */
    inventoryTypeTargeting?: Schema$InventoryTypeTargeting;
    /**
     * Output only. Placement targeting information, for example, URL, mobile applications.
     */
    placementTargeting?: Schema$PlacementTargeting;
    /**
     * Output only. Technology targeting information, for example, operating system, device category.
     */
    technologyTargeting?: Schema$TechnologyTargeting;
    /**
     * Buyer user list targeting information. User lists can be uploaded using https://developers.google.com/authorized-buyers/rtb/bulk-uploader.
     */
    userListTargeting?: Schema$CriteriaTargeting;
    /**
     * Output only. Video targeting information.
     */
    videoTargeting?: Schema$VideoTargeting;
  }
  /**
   * Mobile application targeting settings.
   */
  export interface Schema$MobileApplicationTargeting {
    /**
     * Publisher owned apps to be targeted or excluded by the publisher to display the ads in.
     */
    firstPartyTargeting?: Schema$FirstPartyMobileApplicationTargeting;
  }
  /**
   * Represents an amount of money with its currency type.
   */
  export interface Schema$Money {
    /**
     * The three-letter currency code defined in ISO 4217.
     */
    currencyCode?: string | null;
    /**
     * Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
     */
    nanos?: number | null;
    /**
     * The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.
     */
    units?: string | null;
  }
  /**
   * A text note attached to the proposal to facilitate the communication between buyers and sellers.
   */
  export interface Schema$Note {
    /**
     * Output only. When this note was created.
     */
    createTime?: string | null;
    /**
     * Output only. The role who created the note.
     */
    creatorRole?: string | null;
    /**
     * The text of the note. Maximum length is 1024 characters.
     */
    note?: string | null;
  }
  /**
   * Represents targeting information for operating systems.
   */
  export interface Schema$OperatingSystemTargeting {
    /**
     * IDs of operating systems to be included/excluded.
     */
    operatingSystemCriteria?: Schema$CriteriaTargeting;
    /**
     * IDs of operating system versions to be included/excluded.
     */
    operatingSystemVersionCriteria?: Schema$CriteriaTargeting;
  }
  /**
   * Request message for pausing a finalized deal.
   */
  export interface Schema$PauseFinalizedDealRequest {
    /**
     * The reason to pause the finalized deal, will be displayed to the seller. Maximum length is 1000 characters.
     */
    reason?: string | null;
  }
  /**
   * Represents targeting about where the ads can appear, for example, certain sites or mobile applications. Different placement targeting types will be logically OR'ed.
   */
  export interface Schema$PlacementTargeting {
    /**
     * Mobile application targeting information in a deal. This doesn't apply to Auction Packages.
     */
    mobileApplicationTargeting?: Schema$MobileApplicationTargeting;
    /**
     * URLs to be included/excluded.
     */
    uriTargeting?: Schema$UriTargeting;
  }
  /**
   * Pricing terms for Preferred Deals.
   */
  export interface Schema$PreferredDealTerms {
    /**
     * Fixed price for the deal.
     */
    fixedPrice?: Schema$Price;
  }
  /**
   * Represents a price and a pricing type for a deal.
   */
  export interface Schema$Price {
    /**
     * The actual price with currency specified.
     */
    amount?: Schema$Money;
    /**
     * The pricing type for the deal.
     */
    type?: string | null;
  }
  /**
   * Pricing terms for Private Auctions.
   */
  export interface Schema$PrivateAuctionTerms {
    /**
     * The minimum price buyer has to bid to compete in the private auction.
     */
    floorPrice?: Schema$Price;
    /**
     * Output only. True if open auction buyers are allowed to compete with invited buyers in this private auction.
     */
    openAuctionAllowed?: boolean | null;
  }
  /**
   * Buyers are allowed to store certain types of private data in a proposal or deal.
   */
  export interface Schema$PrivateData {
    /**
     * A buyer specified reference ID. This can be queried in the list operations (max-length: 1024 unicode code units).
     */
    referenceId?: string | null;
  }
  /**
   * Pricing terms for Programmatic Guaranteed Deals.
   */
  export interface Schema$ProgrammaticGuaranteedTerms {
    /**
     * Fixed price for the deal.
     */
    fixedPrice?: Schema$Price;
    /**
     * Count of guaranteed looks. For CPD deals, buyer changes to guaranteed_looks will be ignored.
     */
    guaranteedLooks?: string | null;
    /**
     * The lifetime impression cap for CPM Sponsorship deals. Deal will stop serving when cap is reached.
     */
    impressionCap?: string | null;
    /**
     * Daily minimum looks for CPD deal types. For CPD deals, buyer should negotiate on this field instead of guaranteed_looks.
     */
    minimumDailyLooks?: string | null;
    /**
     * For sponsorship deals, this is the percentage of the seller's eligible impressions that the deal will serve until the cap is reached. Valid value is within range 0~100.
     */
    percentShareOfVoice?: string | null;
    /**
     * The reservation type for a Programmatic Guaranteed deal. This indicates whether the number of impressions is fixed, or a percent of available impressions. If not specified, the default reservation type is STANDARD.
     */
    reservationType?: string | null;
  }
  /**
   * Represents a proposal in the Marketplace. A proposal is the unit of negotiation between a seller and a buyer.
   */
  export interface Schema$Proposal {
    /**
     * Output only. When the client field is populated, this field refers to the buyer who creates and manages the client buyer and gets billed on behalf of the client buyer; when the buyer field is populated, this field is the same value as buyer. Format : `buyers/{buyerAccountId\}`
     */
    billedBuyer?: string | null;
    /**
     * Output only. Refers to a buyer in The Realtime-bidding API. Format: `buyers/{buyerAccountId\}`
     */
    buyer?: string | null;
    /**
     * Contact information for the buyer.
     */
    buyerContacts?: Schema$Contact[];
    /**
     * Buyer private data (hidden from seller).
     */
    buyerPrivateData?: Schema$PrivateData;
    /**
     * Output only. Refers to a Client. Format: `buyers/{buyerAccountId\}/clients/{clientAccountid\}`
     */
    client?: string | null;
    /**
     * Output only. Type of deal the proposal contains.
     */
    dealType?: string | null;
    /**
     * Output only. The descriptive name for the proposal. Maximum length of 255 unicode characters is allowed. Control characters are not allowed. Buyers cannot update this field. Note: Not to be confused with name, which is a unique identifier of the proposal.
     */
    displayName?: string | null;
    /**
     * Output only. True if the proposal was previously finalized and is now being renegotiated.
     */
    isRenegotiating?: boolean | null;
    /**
     * Output only. The role of the last user that either updated the proposal or left a comment.
     */
    lastUpdaterOrCommentorRole?: string | null;
    /**
     * Immutable. The name of the proposal serving as a unique identifier. Format: buyers/{accountId\}/proposals/{proposalId\}
     */
    name?: string | null;
    /**
     * A list of notes from the buyer and the seller attached to this proposal.
     */
    notes?: Schema$Note[];
    /**
     * Output only. Indicates whether the buyer/seller created the proposal.
     */
    originatorRole?: string | null;
    /**
     * Whether pausing is allowed for the proposal. This is a negotiable term between buyers and publishers.
     */
    pausingConsented?: boolean | null;
    /**
     * Output only. The revision number for the proposal. Each update to the proposal or deal causes the proposal revision number to auto-increment. The buyer keeps track of the last revision number they know of and pass it in when making an update. If the head revision number on the server has since incremented, then an ABORTED error is returned during the update operation to let the buyer know that a subsequent update was made.
     */
    proposalRevision?: string | null;
    /**
     * Immutable. Reference to the seller on the proposal. Format: `buyers/{buyerAccountId\}/publisherProfiles/{publisherProfileId\}` Note: This field may be set only when creating the resource. Modifying this field while updating the resource will result in an error.
     */
    publisherProfile?: string | null;
    /**
     * Output only. Contact information for the seller.
     */
    sellerContacts?: Schema$Contact[];
    /**
     * Output only. Indicates the state of the proposal.
     */
    state?: string | null;
    /**
     * Output only. The terms and conditions associated with this proposal. Accepting a proposal implies acceptance of this field. This is created by the seller, the buyer can only view it.
     */
    termsAndConditions?: string | null;
    /**
     * Output only. The time when the proposal was last revised.
     */
    updateTime?: string | null;
  }
  /**
   * The values in the publisher profile are supplied by the publisher. All fields are not filterable unless stated otherwise.
   */
  export interface Schema$PublisherProfile {
    /**
     * Description on the publisher's audience.
     */
    audienceDescription?: string | null;
    /**
     * Contact information for direct reservation deals. This is free text entered by the publisher and may include information like names, phone numbers and email addresses.
     */
    directDealsContact?: string | null;
    /**
     * Display name of the publisher profile. Can be used to filter the response of the publisherProfiles.list method.
     */
    displayName?: string | null;
    /**
     * The list of domains represented in this publisher profile. Empty if this is a parent profile. These are top private domains, meaning that these will not contain a string like "photos.google.co.uk/123", but will instead contain "google.co.uk". Can be used to filter the response of the publisherProfiles.list method.
     */
    domains?: string[] | null;
    /**
     * Indicates if this profile is the parent profile of the seller. A parent profile represents all the inventory from the seller, as opposed to child profile that is created to brand a portion of inventory. One seller has only one parent publisher profile, and can have multiple child profiles. See https://support.google.com/admanager/answer/6035806 for details. Can be used to filter the response of the publisherProfiles.list method by setting the filter to "is_parent: true".
     */
    isParent?: boolean | null;
    /**
     * A Google public URL to the logo for this publisher profile. The logo is stored as a PNG, JPG, or GIF image.
     */
    logoUrl?: string | null;
    /**
     * URL to additional marketing and sales materials.
     */
    mediaKitUrl?: string | null;
    /**
     * The list of apps represented in this publisher profile. Empty if this is a parent profile.
     */
    mobileApps?: Schema$PublisherProfileMobileApplication[];
    /**
     * Name of the publisher profile. Format: `buyers/{buyer\}/publisherProfiles/{publisher_profile\}`
     */
    name?: string | null;
    /**
     * Overview of the publisher.
     */
    overview?: string | null;
    /**
     * Statement explaining what's unique about publisher's business, and why buyers should partner with the publisher.
     */
    pitchStatement?: string | null;
    /**
     * Contact information for programmatic deals. This is free text entered by the publisher and may include information like names, phone numbers and email addresses.
     */
    programmaticDealsContact?: string | null;
    /**
     * A unique identifying code for the seller. This value is the same for all of the seller's parent and child publisher profiles. Can be used to filter the response of the publisherProfiles.list method.
     */
    publisherCode?: string | null;
    /**
     * URL to a sample content page.
     */
    samplePageUrl?: string | null;
    /**
     * Up to three key metrics and rankings. For example, "#1 Mobile News Site for 20 Straight Months".
     */
    topHeadlines?: string[] | null;
  }
  /**
   * A mobile application that contains a external app ID, name, and app store.
   */
  export interface Schema$PublisherProfileMobileApplication {
    /**
     * The app store the app belongs to. Can be used to filter the response of the publisherProfiles.list method.
     */
    appStore?: string | null;
    /**
     * The external ID for the app from its app store. Can be used to filter the response of the publisherProfiles.list method.
     */
    externalAppId?: string | null;
    /**
     * The name of the app.
     */
    name?: string | null;
  }
  /**
   * Request message for resuming a finalized deal.
   */
  export interface Schema$ResumeFinalizedDealRequest {}
  /**
   * Real-time bidding metrics. For what each metric means refer to [Report metrics](https://support.google.com/adxbuyer/answer/6115195#report-metrics)
   */
  export interface Schema$RtbMetrics {
    /**
     * Ad impressions in last 7 days.
     */
    adImpressions7Days?: string | null;
    /**
     * Bid rate in last 7 days, calculated by (bids / bid requests).
     */
    bidRate7Days?: number | null;
    /**
     * Bid requests in last 7 days.
     */
    bidRequests7Days?: string | null;
    /**
     * Bids in last 7 days.
     */
    bids7Days?: string | null;
    /**
     * Filtered bid rate in last 7 days, calculated by (filtered bids / bids).
     */
    filteredBidRate7Days?: number | null;
    /**
     * Must bid rate for current month.
     */
    mustBidRateCurrentMonth?: number | null;
  }
  /**
   * Request to send an RFP. All fields in this request are proposed to publisher and subject to changes by publisher during later negotiation.
   */
  export interface Schema$SendRfpRequest {
    /**
     * Contact information for the buyer.
     */
    buyerContacts?: Schema$Contact[];
    /**
     * If the current buyer is sending the RFP on behalf of its client, use this field to specify the name of the client in the format: `buyers/{accountId\}/clients/{clientAccountid\}`.
     */
    client?: string | null;
    /**
     * Required. The display name of the proposal being created by this RFP.
     */
    displayName?: string | null;
    /**
     * Specified by buyers in request for proposal (RFP) to notify publisher the total estimated spend for the proposal. Publishers will receive this information and send back proposed deals accordingly.
     */
    estimatedGrossSpend?: Schema$Money;
    /**
     * Required. Proposed flight end time of the RFP. A timestamp in RFC3339 UTC "Zulu" format. Note that the specified value will be truncated to a granularity of one second.
     */
    flightEndTime?: string | null;
    /**
     * Required. Proposed flight start time of the RFP. A timestamp in RFC3339 UTC "Zulu" format. Note that the specified value will be truncated to a granularity of one second.
     */
    flightStartTime?: string | null;
    /**
     * Geo criteria IDs to be targeted. Refer to Geo tables.
     */
    geoTargeting?: Schema$CriteriaTargeting;
    /**
     * Inventory sizes to be targeted.
     */
    inventorySizeTargeting?: Schema$InventorySizeTargeting;
    /**
     * A message that is sent to the publisher. Maximum length is 1024 characters.
     */
    note?: string | null;
    /**
     * The terms for preferred deals.
     */
    preferredDealTerms?: Schema$PreferredDealTerms;
    /**
     * The terms for programmatic guaranteed deals.
     */
    programmaticGuaranteedTerms?: Schema$ProgrammaticGuaranteedTerms;
    /**
     * Required. The profile of the publisher who will receive this RFP in the format: `buyers/{accountId\}/publisherProfiles/{publisherProfileId\}`.
     */
    publisherProfile?: string | null;
  }
  /**
   * Request message for setting ready to serve for a finalized deal.
   */
  export interface Schema$SetReadyToServeRequest {}
  /**
   * Request message for SubscribeAuctionPackage.
   */
  export interface Schema$SubscribeAuctionPackageRequest {}
  /**
   * Request message for SubscribeAuctionPackageClients.
   */
  export interface Schema$SubscribeClientsRequest {
    /**
     * Optional. A list of client buyers to subscribe to the auction package, with client buyer in the format `buyers/{accountId\}/clients/{clientAccountId\}`. The current buyer will be subscribed to the auction package regardless of the list contents if not already.
     */
    clients?: string[] | null;
  }
  /**
   * Represents targeting about various types of technology.
   */
  export interface Schema$TechnologyTargeting {
    /**
     * IDs of device capabilities to be included/excluded.
     */
    deviceCapabilityTargeting?: Schema$CriteriaTargeting;
    /**
     * IDs of device categories to be included/excluded.
     */
    deviceCategoryTargeting?: Schema$CriteriaTargeting;
    /**
     * Operating system related targeting information.
     */
    operatingSystemTargeting?: Schema$OperatingSystemTargeting;
  }
  /**
   * Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
   */
  export interface Schema$TimeOfDay {
    /**
     * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
     */
    hours?: number | null;
    /**
     * Minutes of hour of day. Must be from 0 to 59.
     */
    minutes?: number | null;
    /**
     * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
     */
    nanos?: number | null;
    /**
     * Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
     */
    seconds?: number | null;
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
   * Request message for UnsubscribeAuctionPackage.
   */
  export interface Schema$UnsubscribeAuctionPackageRequest {}
  /**
   * Request message for UnsubscribeAuctionPackage.
   */
  export interface Schema$UnsubscribeClientsRequest {
    /**
     * Optional. A list of client buyers to unsubscribe from the auction package, with client buyer in the format `buyers/{accountId\}/clients/{clientAccountId\}`.
     */
    clients?: string[] | null;
  }
  /**
   * Request message for updating the deal at the given revision number.
   */
  export interface Schema$UpdateDealRequest {
    /**
     * Required. The deal to update. The deal's `name` field is used to identify the deal to be updated. Note: proposal_revision will have to be provided within the resource or else an error will be thrown. Format: buyers/{accountId\}/proposals/{proposalId\}/deals/{dealId\}
     */
    deal?: Schema$Deal;
    /**
     * List of fields to be updated. If empty or unspecified, the service will update all fields populated in the update request excluding the output only fields and primitive fields with default value. Note that explicit field mask is required in order to reset a primitive field back to its default value, for example, false for boolean fields, 0 for integer fields. A special field mask consisting of a single path "*" can be used to indicate full replacement(the equivalent of PUT method), updatable fields unset or unspecified in the input will be cleared or set to default value. Output only fields will be ignored regardless of the value of updateMask.
     */
    updateMask?: string | null;
  }
  /**
   * Represents a list of targeted and excluded URLs (for example, google.com). For Private Auction Deals, URLs are either included or excluded. For Programmatic Guaranteed and Preferred Deals, this doesn't apply.
   */
  export interface Schema$UriTargeting {
    /**
     * A list of URLs to be excluded.
     */
    excludedUris?: string[] | null;
    /**
     * A list of URLs to be included.
     */
    targetedUris?: string[] | null;
  }
  /**
   * Represents targeting information about video.
   */
  export interface Schema$VideoTargeting {
    /**
     * A list of video positions to be excluded. When this field is populated, the targeted_position_types field must be empty.
     */
    excludedPositionTypes?: string[] | null;
    /**
     * A list of video positions to be included. When this field is populated, the excluded_position_types field must be empty.
     */
    targetedPositionTypes?: string[] | null;
  }

  export class Resource$Bidders {
    context: APIRequestContext;
    finalizedDeals: Resource$Bidders$Finalizeddeals;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.finalizedDeals = new Resource$Bidders$Finalizeddeals(this.context);
    }
  }

  export class Resource$Bidders$Finalizeddeals {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists finalized deals. Use the URL path "/v1/buyers/{accountId\}/finalizedDeals" to list finalized deals for the current buyer and its clients. Bidders can use the URL path "/v1/bidders/{accountId\}/finalizedDeals" to list finalized deals for the bidder, its buyers and all their clients.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Bidders$Finalizeddeals$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Bidders$Finalizeddeals$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListFinalizedDealsResponse>;
    list(
      params: Params$Resource$Bidders$Finalizeddeals$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Bidders$Finalizeddeals$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListFinalizedDealsResponse>,
      callback: BodyResponseCallback<Schema$ListFinalizedDealsResponse>
    ): void;
    list(
      params: Params$Resource$Bidders$Finalizeddeals$List,
      callback: BodyResponseCallback<Schema$ListFinalizedDealsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListFinalizedDealsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Bidders$Finalizeddeals$List
        | BodyResponseCallback<Schema$ListFinalizedDealsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListFinalizedDealsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListFinalizedDealsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListFinalizedDealsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Bidders$Finalizeddeals$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Bidders$Finalizeddeals$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/finalizedDeals').replace(
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
        createAPIRequest<Schema$ListFinalizedDealsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListFinalizedDealsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Bidders$Finalizeddeals$List
    extends StandardParameters {
    /**
     * Optional query string using the [Cloud API list filtering syntax](https://developers.google.com/authorized-buyers/apis/guides/list-filters) Supported columns for filtering are: * deal.displayName * deal.dealType * deal.createTime * deal.updateTime * deal.flightStartTime * deal.flightEndTime * dealServingStatus
     */
    filter?: string;
    /**
     * An optional query string to sort finalized deals using the [Cloud API sorting syntax](https://cloud.google.com/apis/design/design_patterns#sorting_order). If no sort order is specified, results will be returned in an arbitrary order. Supported columns for sorting are: * deal.displayName * deal.createTime * deal.updateTime * deal.flightStartTime * deal.flightEndTime * rtbMetrics.bidRequests7Days * rtbMetrics.bids7Days * rtbMetrics.adImpressions7Days * rtbMetrics.bidRate7Days * rtbMetrics.filteredBidRate7Days * rtbMetrics.mustBidRateCurrentMonth Example: 'deal.displayName, deal.updateTime desc'
     */
    orderBy?: string;
    /**
     * Requested page size. The server may return fewer results than requested. If requested more than 500, the server will return 500 results per page. If unspecified, the server will pick a default page size of 100.
     */
    pageSize?: number;
    /**
     * The page token as returned from ListFinalizedDealsResponse.
     */
    pageToken?: string;
    /**
     * Required. The buyer to list the finalized deals for, in the format: `buyers/{accountId\}`. When used to list finalized deals for a bidder, its buyers and clients, in the format `bidders/{accountId\}`.
     */
    parent?: string;
  }

  export class Resource$Buyers {
    context: APIRequestContext;
    auctionPackages: Resource$Buyers$Auctionpackages;
    clients: Resource$Buyers$Clients;
    finalizedDeals: Resource$Buyers$Finalizeddeals;
    proposals: Resource$Buyers$Proposals;
    publisherProfiles: Resource$Buyers$Publisherprofiles;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.auctionPackages = new Resource$Buyers$Auctionpackages(this.context);
      this.clients = new Resource$Buyers$Clients(this.context);
      this.finalizedDeals = new Resource$Buyers$Finalizeddeals(this.context);
      this.proposals = new Resource$Buyers$Proposals(this.context);
      this.publisherProfiles = new Resource$Buyers$Publisherprofiles(
        this.context
      );
    }
  }

  export class Resource$Buyers$Auctionpackages {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets an auction package given its name.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Buyers$Auctionpackages$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Buyers$Auctionpackages$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AuctionPackage>;
    get(
      params: Params$Resource$Buyers$Auctionpackages$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Buyers$Auctionpackages$Get,
      options: MethodOptions | BodyResponseCallback<Schema$AuctionPackage>,
      callback: BodyResponseCallback<Schema$AuctionPackage>
    ): void;
    get(
      params: Params$Resource$Buyers$Auctionpackages$Get,
      callback: BodyResponseCallback<Schema$AuctionPackage>
    ): void;
    get(callback: BodyResponseCallback<Schema$AuctionPackage>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Buyers$Auctionpackages$Get
        | BodyResponseCallback<Schema$AuctionPackage>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AuctionPackage>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AuctionPackage>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AuctionPackage> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buyers$Auctionpackages$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$Auctionpackages$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$AuctionPackage>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AuctionPackage>(parameters);
      }
    }

    /**
     * List the auction packages subscribed by a buyer and its clients.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Buyers$Auctionpackages$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Buyers$Auctionpackages$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAuctionPackagesResponse>;
    list(
      params: Params$Resource$Buyers$Auctionpackages$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Buyers$Auctionpackages$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAuctionPackagesResponse>,
      callback: BodyResponseCallback<Schema$ListAuctionPackagesResponse>
    ): void;
    list(
      params: Params$Resource$Buyers$Auctionpackages$List,
      callback: BodyResponseCallback<Schema$ListAuctionPackagesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListAuctionPackagesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Buyers$Auctionpackages$List
        | BodyResponseCallback<Schema$ListAuctionPackagesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAuctionPackagesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAuctionPackagesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListAuctionPackagesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buyers$Auctionpackages$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$Auctionpackages$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/auctionPackages').replace(
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
        createAPIRequest<Schema$ListAuctionPackagesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAuctionPackagesResponse>(parameters);
      }
    }

    /**
     * Subscribe to the auction package for the specified buyer. Once subscribed, the bidder will receive a call out for inventory matching the auction package targeting criteria with the auction package deal ID and the specified buyer.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    subscribe(
      params: Params$Resource$Buyers$Auctionpackages$Subscribe,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    subscribe(
      params?: Params$Resource$Buyers$Auctionpackages$Subscribe,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AuctionPackage>;
    subscribe(
      params: Params$Resource$Buyers$Auctionpackages$Subscribe,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    subscribe(
      params: Params$Resource$Buyers$Auctionpackages$Subscribe,
      options: MethodOptions | BodyResponseCallback<Schema$AuctionPackage>,
      callback: BodyResponseCallback<Schema$AuctionPackage>
    ): void;
    subscribe(
      params: Params$Resource$Buyers$Auctionpackages$Subscribe,
      callback: BodyResponseCallback<Schema$AuctionPackage>
    ): void;
    subscribe(callback: BodyResponseCallback<Schema$AuctionPackage>): void;
    subscribe(
      paramsOrCallback?:
        | Params$Resource$Buyers$Auctionpackages$Subscribe
        | BodyResponseCallback<Schema$AuctionPackage>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AuctionPackage>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AuctionPackage>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AuctionPackage> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buyers$Auctionpackages$Subscribe;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$Auctionpackages$Subscribe;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:subscribe').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AuctionPackage>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AuctionPackage>(parameters);
      }
    }

    /**
     * Subscribe the specified clients of the buyer to the auction package. If a client in the list does not belong to the buyer, an error response will be returned, and all of the following clients in the list will not be subscribed. Subscribing an already subscribed client will have no effect.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    subscribeClients(
      params: Params$Resource$Buyers$Auctionpackages$Subscribeclients,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    subscribeClients(
      params?: Params$Resource$Buyers$Auctionpackages$Subscribeclients,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AuctionPackage>;
    subscribeClients(
      params: Params$Resource$Buyers$Auctionpackages$Subscribeclients,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    subscribeClients(
      params: Params$Resource$Buyers$Auctionpackages$Subscribeclients,
      options: MethodOptions | BodyResponseCallback<Schema$AuctionPackage>,
      callback: BodyResponseCallback<Schema$AuctionPackage>
    ): void;
    subscribeClients(
      params: Params$Resource$Buyers$Auctionpackages$Subscribeclients,
      callback: BodyResponseCallback<Schema$AuctionPackage>
    ): void;
    subscribeClients(
      callback: BodyResponseCallback<Schema$AuctionPackage>
    ): void;
    subscribeClients(
      paramsOrCallback?:
        | Params$Resource$Buyers$Auctionpackages$Subscribeclients
        | BodyResponseCallback<Schema$AuctionPackage>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AuctionPackage>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AuctionPackage>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AuctionPackage> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buyers$Auctionpackages$Subscribeclients;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$Auctionpackages$Subscribeclients;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+auctionPackage}:subscribeClients').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['auctionPackage'],
        pathParams: ['auctionPackage'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AuctionPackage>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AuctionPackage>(parameters);
      }
    }

    /**
     * Unsubscribe from the auction package for the specified buyer. Once unsubscribed, the bidder will no longer receive a call out for the auction package deal ID and the specified buyer.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    unsubscribe(
      params: Params$Resource$Buyers$Auctionpackages$Unsubscribe,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    unsubscribe(
      params?: Params$Resource$Buyers$Auctionpackages$Unsubscribe,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AuctionPackage>;
    unsubscribe(
      params: Params$Resource$Buyers$Auctionpackages$Unsubscribe,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    unsubscribe(
      params: Params$Resource$Buyers$Auctionpackages$Unsubscribe,
      options: MethodOptions | BodyResponseCallback<Schema$AuctionPackage>,
      callback: BodyResponseCallback<Schema$AuctionPackage>
    ): void;
    unsubscribe(
      params: Params$Resource$Buyers$Auctionpackages$Unsubscribe,
      callback: BodyResponseCallback<Schema$AuctionPackage>
    ): void;
    unsubscribe(callback: BodyResponseCallback<Schema$AuctionPackage>): void;
    unsubscribe(
      paramsOrCallback?:
        | Params$Resource$Buyers$Auctionpackages$Unsubscribe
        | BodyResponseCallback<Schema$AuctionPackage>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AuctionPackage>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AuctionPackage>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AuctionPackage> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buyers$Auctionpackages$Unsubscribe;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$Auctionpackages$Unsubscribe;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:unsubscribe').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AuctionPackage>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AuctionPackage>(parameters);
      }
    }

    /**
     * Unsubscribe from the auction package for the specified clients of the buyer. Unsubscribing a client that is not subscribed will have no effect.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    unsubscribeClients(
      params: Params$Resource$Buyers$Auctionpackages$Unsubscribeclients,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    unsubscribeClients(
      params?: Params$Resource$Buyers$Auctionpackages$Unsubscribeclients,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AuctionPackage>;
    unsubscribeClients(
      params: Params$Resource$Buyers$Auctionpackages$Unsubscribeclients,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    unsubscribeClients(
      params: Params$Resource$Buyers$Auctionpackages$Unsubscribeclients,
      options: MethodOptions | BodyResponseCallback<Schema$AuctionPackage>,
      callback: BodyResponseCallback<Schema$AuctionPackage>
    ): void;
    unsubscribeClients(
      params: Params$Resource$Buyers$Auctionpackages$Unsubscribeclients,
      callback: BodyResponseCallback<Schema$AuctionPackage>
    ): void;
    unsubscribeClients(
      callback: BodyResponseCallback<Schema$AuctionPackage>
    ): void;
    unsubscribeClients(
      paramsOrCallback?:
        | Params$Resource$Buyers$Auctionpackages$Unsubscribeclients
        | BodyResponseCallback<Schema$AuctionPackage>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AuctionPackage>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AuctionPackage>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AuctionPackage> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buyers$Auctionpackages$Unsubscribeclients;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Buyers$Auctionpackages$Unsubscribeclients;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+auctionPackage}:unsubscribeClients').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['auctionPackage'],
        pathParams: ['auctionPackage'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AuctionPackage>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AuctionPackage>(parameters);
      }
    }
  }

  export interface Params$Resource$Buyers$Auctionpackages$Get
    extends StandardParameters {
    /**
     * Required. Name of auction package to get. Format: `buyers/{accountId\}/auctionPackages/{auctionPackageId\}`
     */
    name?: string;
  }
  export interface Params$Resource$Buyers$Auctionpackages$List
    extends StandardParameters {
    /**
     * Requested page size. The server may return fewer results than requested. Max allowed page size is 500.
     */
    pageSize?: number;
    /**
     * The page token as returned. ListAuctionPackagesResponse.nextPageToken
     */
    pageToken?: string;
    /**
     * Required. Name of the parent buyer that can access the auction package. Format: `buyers/{accountId\}`
     */
    parent?: string;
  }
  export interface Params$Resource$Buyers$Auctionpackages$Subscribe
    extends StandardParameters {
    /**
     * Required. Name of the auction package. Format: `buyers/{accountId\}/auctionPackages/{auctionPackageId\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SubscribeAuctionPackageRequest;
  }
  export interface Params$Resource$Buyers$Auctionpackages$Subscribeclients
    extends StandardParameters {
    /**
     * Required. Name of the auction package. Format: `buyers/{accountId\}/auctionPackages/{auctionPackageId\}`
     */
    auctionPackage?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SubscribeClientsRequest;
  }
  export interface Params$Resource$Buyers$Auctionpackages$Unsubscribe
    extends StandardParameters {
    /**
     * Required. Name of the auction package. Format: `buyers/{accountId\}/auctionPackages/{auctionPackageId\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UnsubscribeAuctionPackageRequest;
  }
  export interface Params$Resource$Buyers$Auctionpackages$Unsubscribeclients
    extends StandardParameters {
    /**
     * Required. Name of the auction package. Format: `buyers/{accountId\}/auctionPackages/{auctionPackageId\}`
     */
    auctionPackage?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UnsubscribeClientsRequest;
  }

  export class Resource$Buyers$Clients {
    context: APIRequestContext;
    users: Resource$Buyers$Clients$Users;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.users = new Resource$Buyers$Clients$Users(this.context);
    }

    /**
     * Activates an existing client. The state of the client will be updated to "ACTIVE". This method has no effect if the client is already in "ACTIVE" state.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    activate(
      params: Params$Resource$Buyers$Clients$Activate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    activate(
      params?: Params$Resource$Buyers$Clients$Activate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Client>;
    activate(
      params: Params$Resource$Buyers$Clients$Activate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    activate(
      params: Params$Resource$Buyers$Clients$Activate,
      options: MethodOptions | BodyResponseCallback<Schema$Client>,
      callback: BodyResponseCallback<Schema$Client>
    ): void;
    activate(
      params: Params$Resource$Buyers$Clients$Activate,
      callback: BodyResponseCallback<Schema$Client>
    ): void;
    activate(callback: BodyResponseCallback<Schema$Client>): void;
    activate(
      paramsOrCallback?:
        | Params$Resource$Buyers$Clients$Activate
        | BodyResponseCallback<Schema$Client>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Client>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Client>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Client> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buyers$Clients$Activate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$Clients$Activate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:activate').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Client>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Client>(parameters);
      }
    }

    /**
     * Creates a new client.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Buyers$Clients$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Buyers$Clients$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Client>;
    create(
      params: Params$Resource$Buyers$Clients$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Buyers$Clients$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Client>,
      callback: BodyResponseCallback<Schema$Client>
    ): void;
    create(
      params: Params$Resource$Buyers$Clients$Create,
      callback: BodyResponseCallback<Schema$Client>
    ): void;
    create(callback: BodyResponseCallback<Schema$Client>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Buyers$Clients$Create
        | BodyResponseCallback<Schema$Client>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Client>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Client>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Client> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buyers$Clients$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$Clients$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/clients').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Client>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Client>(parameters);
      }
    }

    /**
     * Deactivates an existing client. The state of the client will be updated to "INACTIVE". This method has no effect if the client is already in "INACTIVE" state.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    deactivate(
      params: Params$Resource$Buyers$Clients$Deactivate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    deactivate(
      params?: Params$Resource$Buyers$Clients$Deactivate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Client>;
    deactivate(
      params: Params$Resource$Buyers$Clients$Deactivate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    deactivate(
      params: Params$Resource$Buyers$Clients$Deactivate,
      options: MethodOptions | BodyResponseCallback<Schema$Client>,
      callback: BodyResponseCallback<Schema$Client>
    ): void;
    deactivate(
      params: Params$Resource$Buyers$Clients$Deactivate,
      callback: BodyResponseCallback<Schema$Client>
    ): void;
    deactivate(callback: BodyResponseCallback<Schema$Client>): void;
    deactivate(
      paramsOrCallback?:
        | Params$Resource$Buyers$Clients$Deactivate
        | BodyResponseCallback<Schema$Client>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Client>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Client>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Client> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buyers$Clients$Deactivate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$Clients$Deactivate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:deactivate').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Client>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Client>(parameters);
      }
    }

    /**
     * Gets a client with a given resource name.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Buyers$Clients$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Buyers$Clients$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Client>;
    get(
      params: Params$Resource$Buyers$Clients$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Buyers$Clients$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Client>,
      callback: BodyResponseCallback<Schema$Client>
    ): void;
    get(
      params: Params$Resource$Buyers$Clients$Get,
      callback: BodyResponseCallback<Schema$Client>
    ): void;
    get(callback: BodyResponseCallback<Schema$Client>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Buyers$Clients$Get
        | BodyResponseCallback<Schema$Client>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Client>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Client>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Client> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buyers$Clients$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$Clients$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Client>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Client>(parameters);
      }
    }

    /**
     * Lists all the clients for the current buyer.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Buyers$Clients$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Buyers$Clients$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListClientsResponse>;
    list(
      params: Params$Resource$Buyers$Clients$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Buyers$Clients$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListClientsResponse>,
      callback: BodyResponseCallback<Schema$ListClientsResponse>
    ): void;
    list(
      params: Params$Resource$Buyers$Clients$List,
      callback: BodyResponseCallback<Schema$ListClientsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListClientsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Buyers$Clients$List
        | BodyResponseCallback<Schema$ListClientsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListClientsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListClientsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListClientsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buyers$Clients$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$Clients$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/clients').replace(
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
        createAPIRequest<Schema$ListClientsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListClientsResponse>(parameters);
      }
    }

    /**
     * Updates an existing client.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Buyers$Clients$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Buyers$Clients$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Client>;
    patch(
      params: Params$Resource$Buyers$Clients$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Buyers$Clients$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Client>,
      callback: BodyResponseCallback<Schema$Client>
    ): void;
    patch(
      params: Params$Resource$Buyers$Clients$Patch,
      callback: BodyResponseCallback<Schema$Client>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Client>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Buyers$Clients$Patch
        | BodyResponseCallback<Schema$Client>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Client>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Client>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Client> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buyers$Clients$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$Clients$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Client>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Client>(parameters);
      }
    }
  }

  export interface Params$Resource$Buyers$Clients$Activate
    extends StandardParameters {
    /**
     * Required. Format: `buyers/{buyerAccountId\}/clients/{clientAccountId\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ActivateClientRequest;
  }
  export interface Params$Resource$Buyers$Clients$Create
    extends StandardParameters {
    /**
     * Required. The name of the buyer. Format: `buyers/{accountId\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Client;
  }
  export interface Params$Resource$Buyers$Clients$Deactivate
    extends StandardParameters {
    /**
     * Required. Format: `buyers/{buyerAccountId\}/clients/{clientAccountId\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DeactivateClientRequest;
  }
  export interface Params$Resource$Buyers$Clients$Get
    extends StandardParameters {
    /**
     * Required. Format: `buyers/{accountId\}/clients/{clientAccountId\}`
     */
    name?: string;
  }
  export interface Params$Resource$Buyers$Clients$List
    extends StandardParameters {
    /**
     * Query string using the [Filtering Syntax](https://developers.google.com/authorized-buyers/apis/guides/list-filters) Supported fields for filtering are: * partnerClientId Use this field to filter the clients by the partnerClientId. For example, if the partnerClientId of the client is "1234", the value of this field should be `partnerClientId = "1234"`, in order to get only the client whose partnerClientId is "1234" in the response.
     */
    filter?: string;
    /**
     * Requested page size. If left blank, a default page size of 500 will be applied.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return. Typically, this is the value of ListClientsResponse.nextPageToken returned from the previous call to the list method.
     */
    pageToken?: string;
    /**
     * Required. The name of the buyer. Format: `buyers/{accountId\}`
     */
    parent?: string;
  }
  export interface Params$Resource$Buyers$Clients$Patch
    extends StandardParameters {
    /**
     * Output only. The resource name of the client. Format: `buyers/{accountId\}/clients/{clientAccountId\}`
     */
    name?: string;
    /**
     * List of fields to be updated. If empty or unspecified, the service will update all fields populated in the update request excluding the output only fields and primitive fields with default value. Note that explicit field mask is required in order to reset a primitive field back to its default value, for example, false for boolean fields, 0 for integer fields. A special field mask consisting of a single path "*" can be used to indicate full replacement(the equivalent of PUT method), updatable fields unset or unspecified in the input will be cleared or set to default value. Output only fields will be ignored regardless of the value of updateMask.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Client;
  }

  export class Resource$Buyers$Clients$Users {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Activates an existing client user. The state of the client user will be updated from "INACTIVE" to "ACTIVE". This method has no effect if the client user is already in "ACTIVE" state. An error will be returned if the client user to activate is still in "INVITED" state.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    activate(
      params: Params$Resource$Buyers$Clients$Users$Activate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    activate(
      params?: Params$Resource$Buyers$Clients$Users$Activate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ClientUser>;
    activate(
      params: Params$Resource$Buyers$Clients$Users$Activate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    activate(
      params: Params$Resource$Buyers$Clients$Users$Activate,
      options: MethodOptions | BodyResponseCallback<Schema$ClientUser>,
      callback: BodyResponseCallback<Schema$ClientUser>
    ): void;
    activate(
      params: Params$Resource$Buyers$Clients$Users$Activate,
      callback: BodyResponseCallback<Schema$ClientUser>
    ): void;
    activate(callback: BodyResponseCallback<Schema$ClientUser>): void;
    activate(
      paramsOrCallback?:
        | Params$Resource$Buyers$Clients$Users$Activate
        | BodyResponseCallback<Schema$ClientUser>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ClientUser>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ClientUser>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ClientUser> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buyers$Clients$Users$Activate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$Clients$Users$Activate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:activate').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ClientUser>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ClientUser>(parameters);
      }
    }

    /**
     * Creates a new client user in "INVITED" state. An email invitation will be sent to the new user, once accepted the user will become active.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Buyers$Clients$Users$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Buyers$Clients$Users$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ClientUser>;
    create(
      params: Params$Resource$Buyers$Clients$Users$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Buyers$Clients$Users$Create,
      options: MethodOptions | BodyResponseCallback<Schema$ClientUser>,
      callback: BodyResponseCallback<Schema$ClientUser>
    ): void;
    create(
      params: Params$Resource$Buyers$Clients$Users$Create,
      callback: BodyResponseCallback<Schema$ClientUser>
    ): void;
    create(callback: BodyResponseCallback<Schema$ClientUser>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Buyers$Clients$Users$Create
        | BodyResponseCallback<Schema$ClientUser>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ClientUser>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ClientUser>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ClientUser> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buyers$Clients$Users$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$Clients$Users$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/users').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ClientUser>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ClientUser>(parameters);
      }
    }

    /**
     * Deactivates an existing client user. The state of the client user will be updated from "ACTIVE" to "INACTIVE". This method has no effect if the client user is already in "INACTIVE" state. An error will be returned if the client user to deactivate is still in "INVITED" state.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    deactivate(
      params: Params$Resource$Buyers$Clients$Users$Deactivate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    deactivate(
      params?: Params$Resource$Buyers$Clients$Users$Deactivate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ClientUser>;
    deactivate(
      params: Params$Resource$Buyers$Clients$Users$Deactivate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    deactivate(
      params: Params$Resource$Buyers$Clients$Users$Deactivate,
      options: MethodOptions | BodyResponseCallback<Schema$ClientUser>,
      callback: BodyResponseCallback<Schema$ClientUser>
    ): void;
    deactivate(
      params: Params$Resource$Buyers$Clients$Users$Deactivate,
      callback: BodyResponseCallback<Schema$ClientUser>
    ): void;
    deactivate(callback: BodyResponseCallback<Schema$ClientUser>): void;
    deactivate(
      paramsOrCallback?:
        | Params$Resource$Buyers$Clients$Users$Deactivate
        | BodyResponseCallback<Schema$ClientUser>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ClientUser>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ClientUser>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ClientUser> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buyers$Clients$Users$Deactivate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$Clients$Users$Deactivate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:deactivate').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ClientUser>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ClientUser>(parameters);
      }
    }

    /**
     * Deletes an existing client user. The client user will lose access to the Authorized Buyers UI. Note that if a client user is deleted, the user's access to the UI can't be restored unless a new client user is created and activated.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Buyers$Clients$Users$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Buyers$Clients$Users$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Buyers$Clients$Users$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Buyers$Clients$Users$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Buyers$Clients$Users$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Buyers$Clients$Users$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buyers$Clients$Users$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$Clients$Users$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Retrieves an existing client user.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Buyers$Clients$Users$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Buyers$Clients$Users$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ClientUser>;
    get(
      params: Params$Resource$Buyers$Clients$Users$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Buyers$Clients$Users$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ClientUser>,
      callback: BodyResponseCallback<Schema$ClientUser>
    ): void;
    get(
      params: Params$Resource$Buyers$Clients$Users$Get,
      callback: BodyResponseCallback<Schema$ClientUser>
    ): void;
    get(callback: BodyResponseCallback<Schema$ClientUser>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Buyers$Clients$Users$Get
        | BodyResponseCallback<Schema$ClientUser>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ClientUser>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ClientUser>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ClientUser> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buyers$Clients$Users$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$Clients$Users$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ClientUser>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ClientUser>(parameters);
      }
    }

    /**
     * Lists all client users for a specified client.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Buyers$Clients$Users$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Buyers$Clients$Users$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListClientUsersResponse>;
    list(
      params: Params$Resource$Buyers$Clients$Users$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Buyers$Clients$Users$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListClientUsersResponse>,
      callback: BodyResponseCallback<Schema$ListClientUsersResponse>
    ): void;
    list(
      params: Params$Resource$Buyers$Clients$Users$List,
      callback: BodyResponseCallback<Schema$ListClientUsersResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListClientUsersResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Buyers$Clients$Users$List
        | BodyResponseCallback<Schema$ListClientUsersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListClientUsersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListClientUsersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListClientUsersResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buyers$Clients$Users$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$Clients$Users$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/users').replace(
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
        createAPIRequest<Schema$ListClientUsersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListClientUsersResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Buyers$Clients$Users$Activate
    extends StandardParameters {
    /**
     * Required. Format: `buyers/{buyerAccountId\}/clients/{clientAccountId\}/clientUsers/{userId\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ActivateClientUserRequest;
  }
  export interface Params$Resource$Buyers$Clients$Users$Create
    extends StandardParameters {
    /**
     * Required. The name of the client. Format: `buyers/{accountId\}/clients/{clientAccountId\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ClientUser;
  }
  export interface Params$Resource$Buyers$Clients$Users$Deactivate
    extends StandardParameters {
    /**
     * Required. Format: `buyers/{buyerAccountId\}/clients/{clientAccountId\}/clientUsers/{userId\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DeactivateClientUserRequest;
  }
  export interface Params$Resource$Buyers$Clients$Users$Delete
    extends StandardParameters {
    /**
     * Required. Format: `buyers/{buyerAccountId\}/clients/{clientAccountId\}/clientUsers/{userId\}`
     */
    name?: string;
  }
  export interface Params$Resource$Buyers$Clients$Users$Get
    extends StandardParameters {
    /**
     * Required. Format: `buyers/{buyerAccountId\}/clients/{clientAccountId\}/clientUsers/{userId\}`
     */
    name?: string;
  }
  export interface Params$Resource$Buyers$Clients$Users$List
    extends StandardParameters {
    /**
     * Requested page size. If left blank, a default page size of 500 will be applied.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return. Typically, this is the value of ListClientUsersResponse.nextPageToken returned from the previous call to the list method.
     */
    pageToken?: string;
    /**
     * Required. The name of the client. Format: `buyers/{buyerAccountId\}/clients/{clientAccountId\}`
     */
    parent?: string;
  }

  export class Resource$Buyers$Finalizeddeals {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Add creative to be used in the bidding process for a finalized deal. For programmatic guaranteed deals, it's recommended that you associate at least one approved creative with the deal before calling SetReadyToServe, to help reduce the number of bid responses filtered because they don't contain approved creatives. Creatives successfully added to a deal can be found in the Realtime-bidding Creatives API creative.deal_ids. This method only applies to programmatic guaranteed deals. Maximum number of 1000 creatives can be added to a finalized deal.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    addCreative(
      params: Params$Resource$Buyers$Finalizeddeals$Addcreative,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    addCreative(
      params?: Params$Resource$Buyers$Finalizeddeals$Addcreative,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FinalizedDeal>;
    addCreative(
      params: Params$Resource$Buyers$Finalizeddeals$Addcreative,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    addCreative(
      params: Params$Resource$Buyers$Finalizeddeals$Addcreative,
      options: MethodOptions | BodyResponseCallback<Schema$FinalizedDeal>,
      callback: BodyResponseCallback<Schema$FinalizedDeal>
    ): void;
    addCreative(
      params: Params$Resource$Buyers$Finalizeddeals$Addcreative,
      callback: BodyResponseCallback<Schema$FinalizedDeal>
    ): void;
    addCreative(callback: BodyResponseCallback<Schema$FinalizedDeal>): void;
    addCreative(
      paramsOrCallback?:
        | Params$Resource$Buyers$Finalizeddeals$Addcreative
        | BodyResponseCallback<Schema$FinalizedDeal>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FinalizedDeal>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FinalizedDeal>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$FinalizedDeal> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buyers$Finalizeddeals$Addcreative;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$Finalizeddeals$Addcreative;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+deal}:addCreative').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['deal'],
        pathParams: ['deal'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FinalizedDeal>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FinalizedDeal>(parameters);
      }
    }

    /**
     * Gets a finalized deal given its name.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Buyers$Finalizeddeals$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Buyers$Finalizeddeals$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FinalizedDeal>;
    get(
      params: Params$Resource$Buyers$Finalizeddeals$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Buyers$Finalizeddeals$Get,
      options: MethodOptions | BodyResponseCallback<Schema$FinalizedDeal>,
      callback: BodyResponseCallback<Schema$FinalizedDeal>
    ): void;
    get(
      params: Params$Resource$Buyers$Finalizeddeals$Get,
      callback: BodyResponseCallback<Schema$FinalizedDeal>
    ): void;
    get(callback: BodyResponseCallback<Schema$FinalizedDeal>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Buyers$Finalizeddeals$Get
        | BodyResponseCallback<Schema$FinalizedDeal>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FinalizedDeal>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FinalizedDeal>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$FinalizedDeal> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buyers$Finalizeddeals$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$Finalizeddeals$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$FinalizedDeal>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FinalizedDeal>(parameters);
      }
    }

    /**
     * Lists finalized deals. Use the URL path "/v1/buyers/{accountId\}/finalizedDeals" to list finalized deals for the current buyer and its clients. Bidders can use the URL path "/v1/bidders/{accountId\}/finalizedDeals" to list finalized deals for the bidder, its buyers and all their clients.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Buyers$Finalizeddeals$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Buyers$Finalizeddeals$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListFinalizedDealsResponse>;
    list(
      params: Params$Resource$Buyers$Finalizeddeals$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Buyers$Finalizeddeals$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListFinalizedDealsResponse>,
      callback: BodyResponseCallback<Schema$ListFinalizedDealsResponse>
    ): void;
    list(
      params: Params$Resource$Buyers$Finalizeddeals$List,
      callback: BodyResponseCallback<Schema$ListFinalizedDealsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListFinalizedDealsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Buyers$Finalizeddeals$List
        | BodyResponseCallback<Schema$ListFinalizedDealsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListFinalizedDealsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListFinalizedDealsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListFinalizedDealsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buyers$Finalizeddeals$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$Finalizeddeals$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/finalizedDeals').replace(
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
        createAPIRequest<Schema$ListFinalizedDealsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListFinalizedDealsResponse>(parameters);
      }
    }

    /**
     * Pauses serving of the given finalized deal. This call only pauses the serving status, and does not affect other fields of the finalized deal. Calling this method for an already paused deal has no effect. This method only applies to programmatic guaranteed deals.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    pause(
      params: Params$Resource$Buyers$Finalizeddeals$Pause,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    pause(
      params?: Params$Resource$Buyers$Finalizeddeals$Pause,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FinalizedDeal>;
    pause(
      params: Params$Resource$Buyers$Finalizeddeals$Pause,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    pause(
      params: Params$Resource$Buyers$Finalizeddeals$Pause,
      options: MethodOptions | BodyResponseCallback<Schema$FinalizedDeal>,
      callback: BodyResponseCallback<Schema$FinalizedDeal>
    ): void;
    pause(
      params: Params$Resource$Buyers$Finalizeddeals$Pause,
      callback: BodyResponseCallback<Schema$FinalizedDeal>
    ): void;
    pause(callback: BodyResponseCallback<Schema$FinalizedDeal>): void;
    pause(
      paramsOrCallback?:
        | Params$Resource$Buyers$Finalizeddeals$Pause
        | BodyResponseCallback<Schema$FinalizedDeal>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FinalizedDeal>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FinalizedDeal>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$FinalizedDeal> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buyers$Finalizeddeals$Pause;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$Finalizeddeals$Pause;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:pause').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FinalizedDeal>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FinalizedDeal>(parameters);
      }
    }

    /**
     * Resumes serving of the given finalized deal. Calling this method for an running deal has no effect. If a deal is initially paused by the seller, calling this method will not resume serving of the deal until the seller also resumes the deal. This method only applies to programmatic guaranteed deals.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    resume(
      params: Params$Resource$Buyers$Finalizeddeals$Resume,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    resume(
      params?: Params$Resource$Buyers$Finalizeddeals$Resume,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FinalizedDeal>;
    resume(
      params: Params$Resource$Buyers$Finalizeddeals$Resume,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    resume(
      params: Params$Resource$Buyers$Finalizeddeals$Resume,
      options: MethodOptions | BodyResponseCallback<Schema$FinalizedDeal>,
      callback: BodyResponseCallback<Schema$FinalizedDeal>
    ): void;
    resume(
      params: Params$Resource$Buyers$Finalizeddeals$Resume,
      callback: BodyResponseCallback<Schema$FinalizedDeal>
    ): void;
    resume(callback: BodyResponseCallback<Schema$FinalizedDeal>): void;
    resume(
      paramsOrCallback?:
        | Params$Resource$Buyers$Finalizeddeals$Resume
        | BodyResponseCallback<Schema$FinalizedDeal>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FinalizedDeal>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FinalizedDeal>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$FinalizedDeal> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buyers$Finalizeddeals$Resume;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$Finalizeddeals$Resume;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:resume').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FinalizedDeal>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FinalizedDeal>(parameters);
      }
    }

    /**
     * Sets the given finalized deal as ready to serve. By default, deals are set as ready to serve as soon as they're finalized. If you want to opt out of the default behavior, and manually indicate that deals are ready to serve, ask your Technical Account Manager to add you to the allowlist. If you choose to use this method, finalized deals belonging to the bidder and its child seats don't start serving until after you call `setReadyToServe`, and after the deals become active. For example, you can use this method to delay receiving bid requests until your creative is ready. This method only applies to programmatic guaranteed deals.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setReadyToServe(
      params: Params$Resource$Buyers$Finalizeddeals$Setreadytoserve,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setReadyToServe(
      params?: Params$Resource$Buyers$Finalizeddeals$Setreadytoserve,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FinalizedDeal>;
    setReadyToServe(
      params: Params$Resource$Buyers$Finalizeddeals$Setreadytoserve,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setReadyToServe(
      params: Params$Resource$Buyers$Finalizeddeals$Setreadytoserve,
      options: MethodOptions | BodyResponseCallback<Schema$FinalizedDeal>,
      callback: BodyResponseCallback<Schema$FinalizedDeal>
    ): void;
    setReadyToServe(
      params: Params$Resource$Buyers$Finalizeddeals$Setreadytoserve,
      callback: BodyResponseCallback<Schema$FinalizedDeal>
    ): void;
    setReadyToServe(callback: BodyResponseCallback<Schema$FinalizedDeal>): void;
    setReadyToServe(
      paramsOrCallback?:
        | Params$Resource$Buyers$Finalizeddeals$Setreadytoserve
        | BodyResponseCallback<Schema$FinalizedDeal>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FinalizedDeal>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FinalizedDeal>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$FinalizedDeal> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buyers$Finalizeddeals$Setreadytoserve;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$Finalizeddeals$Setreadytoserve;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+deal}:setReadyToServe').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['deal'],
        pathParams: ['deal'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FinalizedDeal>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FinalizedDeal>(parameters);
      }
    }
  }

  export interface Params$Resource$Buyers$Finalizeddeals$Addcreative
    extends StandardParameters {
    /**
     * Required. Name of the finalized deal in the format of: `buyers/{accountId\}/finalizedDeals/{dealId\}`
     */
    deal?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AddCreativeRequest;
  }
  export interface Params$Resource$Buyers$Finalizeddeals$Get
    extends StandardParameters {
    /**
     * Required. Format: `buyers/{accountId\}/finalizedDeals/{dealId\}`
     */
    name?: string;
  }
  export interface Params$Resource$Buyers$Finalizeddeals$List
    extends StandardParameters {
    /**
     * Optional query string using the [Cloud API list filtering syntax](https://developers.google.com/authorized-buyers/apis/guides/list-filters) Supported columns for filtering are: * deal.displayName * deal.dealType * deal.createTime * deal.updateTime * deal.flightStartTime * deal.flightEndTime * dealServingStatus
     */
    filter?: string;
    /**
     * An optional query string to sort finalized deals using the [Cloud API sorting syntax](https://cloud.google.com/apis/design/design_patterns#sorting_order). If no sort order is specified, results will be returned in an arbitrary order. Supported columns for sorting are: * deal.displayName * deal.createTime * deal.updateTime * deal.flightStartTime * deal.flightEndTime * rtbMetrics.bidRequests7Days * rtbMetrics.bids7Days * rtbMetrics.adImpressions7Days * rtbMetrics.bidRate7Days * rtbMetrics.filteredBidRate7Days * rtbMetrics.mustBidRateCurrentMonth Example: 'deal.displayName, deal.updateTime desc'
     */
    orderBy?: string;
    /**
     * Requested page size. The server may return fewer results than requested. If requested more than 500, the server will return 500 results per page. If unspecified, the server will pick a default page size of 100.
     */
    pageSize?: number;
    /**
     * The page token as returned from ListFinalizedDealsResponse.
     */
    pageToken?: string;
    /**
     * Required. The buyer to list the finalized deals for, in the format: `buyers/{accountId\}`. When used to list finalized deals for a bidder, its buyers and clients, in the format `bidders/{accountId\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Buyers$Finalizeddeals$Pause
    extends StandardParameters {
    /**
     * Required. Format: `buyers/{accountId\}/finalizedDeals/{dealId\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PauseFinalizedDealRequest;
  }
  export interface Params$Resource$Buyers$Finalizeddeals$Resume
    extends StandardParameters {
    /**
     * Required. Format: `buyers/{accountId\}/finalizedDeals/{dealId\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ResumeFinalizedDealRequest;
  }
  export interface Params$Resource$Buyers$Finalizeddeals$Setreadytoserve
    extends StandardParameters {
    /**
     * Required. Format: `buyers/{accountId\}/finalizedDeals/{dealId\}`
     */
    deal?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetReadyToServeRequest;
  }

  export class Resource$Buyers$Proposals {
    context: APIRequestContext;
    deals: Resource$Buyers$Proposals$Deals;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.deals = new Resource$Buyers$Proposals$Deals(this.context);
    }

    /**
     * Accepts the proposal at the given revision number. If the revision number in the request is behind the latest from the server, an error message will be returned. This call updates the Proposal.state from `BUYER_ACCEPTANCE_REQUESTED` to `FINALIZED`; it has no side effect if the Proposal.state is already `FINALIZED` and throws exception if the Proposal.state is not either `BUYER_ACCEPTANCE_REQUESTED` or `FINALIZED`. Accepting a proposal means the buyer understands and accepts the Proposal.terms_and_conditions proposed by the seller.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    accept(
      params: Params$Resource$Buyers$Proposals$Accept,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    accept(
      params?: Params$Resource$Buyers$Proposals$Accept,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Proposal>;
    accept(
      params: Params$Resource$Buyers$Proposals$Accept,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    accept(
      params: Params$Resource$Buyers$Proposals$Accept,
      options: MethodOptions | BodyResponseCallback<Schema$Proposal>,
      callback: BodyResponseCallback<Schema$Proposal>
    ): void;
    accept(
      params: Params$Resource$Buyers$Proposals$Accept,
      callback: BodyResponseCallback<Schema$Proposal>
    ): void;
    accept(callback: BodyResponseCallback<Schema$Proposal>): void;
    accept(
      paramsOrCallback?:
        | Params$Resource$Buyers$Proposals$Accept
        | BodyResponseCallback<Schema$Proposal>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Proposal>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Proposal>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Proposal> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buyers$Proposals$Accept;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$Proposals$Accept;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:accept').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Proposal>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Proposal>(parameters);
      }
    }

    /**
     * Creates a note for this proposal and sends to the seller.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    addNote(
      params: Params$Resource$Buyers$Proposals$Addnote,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    addNote(
      params?: Params$Resource$Buyers$Proposals$Addnote,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Proposal>;
    addNote(
      params: Params$Resource$Buyers$Proposals$Addnote,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    addNote(
      params: Params$Resource$Buyers$Proposals$Addnote,
      options: MethodOptions | BodyResponseCallback<Schema$Proposal>,
      callback: BodyResponseCallback<Schema$Proposal>
    ): void;
    addNote(
      params: Params$Resource$Buyers$Proposals$Addnote,
      callback: BodyResponseCallback<Schema$Proposal>
    ): void;
    addNote(callback: BodyResponseCallback<Schema$Proposal>): void;
    addNote(
      paramsOrCallback?:
        | Params$Resource$Buyers$Proposals$Addnote
        | BodyResponseCallback<Schema$Proposal>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Proposal>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Proposal>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Proposal> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buyers$Proposals$Addnote;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$Proposals$Addnote;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+proposal}:addNote').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['proposal'],
        pathParams: ['proposal'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Proposal>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Proposal>(parameters);
      }
    }

    /**
     * Cancels an ongoing negotiation on a proposal. This does not cancel or end serving for the deals if the proposal has been finalized. If the proposal has not been finalized before, calling this method will set the Proposal.state to `TERMINATED` and increment the Proposal.proposal_revision. If the proposal has been finalized before and is under renegotiation now, calling this method will reset the Proposal.state to `FINALIZED` and increment the Proposal.proposal_revision. This method does not support private auction proposals whose Proposal.deal_type is 'PRIVATE_AUCTION'.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    cancelNegotiation(
      params: Params$Resource$Buyers$Proposals$Cancelnegotiation,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancelNegotiation(
      params?: Params$Resource$Buyers$Proposals$Cancelnegotiation,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Proposal>;
    cancelNegotiation(
      params: Params$Resource$Buyers$Proposals$Cancelnegotiation,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancelNegotiation(
      params: Params$Resource$Buyers$Proposals$Cancelnegotiation,
      options: MethodOptions | BodyResponseCallback<Schema$Proposal>,
      callback: BodyResponseCallback<Schema$Proposal>
    ): void;
    cancelNegotiation(
      params: Params$Resource$Buyers$Proposals$Cancelnegotiation,
      callback: BodyResponseCallback<Schema$Proposal>
    ): void;
    cancelNegotiation(callback: BodyResponseCallback<Schema$Proposal>): void;
    cancelNegotiation(
      paramsOrCallback?:
        | Params$Resource$Buyers$Proposals$Cancelnegotiation
        | BodyResponseCallback<Schema$Proposal>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Proposal>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Proposal>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Proposal> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buyers$Proposals$Cancelnegotiation;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$Proposals$Cancelnegotiation;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+proposal}:cancelNegotiation').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['proposal'],
        pathParams: ['proposal'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Proposal>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Proposal>(parameters);
      }
    }

    /**
     * Gets a proposal using its resource name. The proposal is returned at the latest revision.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Buyers$Proposals$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Buyers$Proposals$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Proposal>;
    get(
      params: Params$Resource$Buyers$Proposals$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Buyers$Proposals$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Proposal>,
      callback: BodyResponseCallback<Schema$Proposal>
    ): void;
    get(
      params: Params$Resource$Buyers$Proposals$Get,
      callback: BodyResponseCallback<Schema$Proposal>
    ): void;
    get(callback: BodyResponseCallback<Schema$Proposal>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Buyers$Proposals$Get
        | BodyResponseCallback<Schema$Proposal>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Proposal>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Proposal>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Proposal> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buyers$Proposals$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$Proposals$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Proposal>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Proposal>(parameters);
      }
    }

    /**
     * Lists proposals. A filter expression using [Cloud API list filtering syntax](https://developers.google.com/authorized-buyers/apis/guides/list-filters) may be specified to filter the results.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Buyers$Proposals$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Buyers$Proposals$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListProposalsResponse>;
    list(
      params: Params$Resource$Buyers$Proposals$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Buyers$Proposals$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListProposalsResponse>,
      callback: BodyResponseCallback<Schema$ListProposalsResponse>
    ): void;
    list(
      params: Params$Resource$Buyers$Proposals$List,
      callback: BodyResponseCallback<Schema$ListProposalsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListProposalsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Buyers$Proposals$List
        | BodyResponseCallback<Schema$ListProposalsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListProposalsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListProposalsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListProposalsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buyers$Proposals$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$Proposals$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/proposals').replace(
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
        createAPIRequest<Schema$ListProposalsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListProposalsResponse>(parameters);
      }
    }

    /**
     * Updates the proposal at the given revision number. If the revision number in the request is behind the latest one kept in the server, an error message will be returned. See FieldMask for how to use FieldMask. Only fields specified in the UpdateProposalRequest.update_mask will be updated; Fields noted as 'Immutable' or 'Output only' yet specified in the UpdateProposalRequest.update_mask will be ignored and left unchanged. Updating a private auction proposal is not allowed and will result in an error.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Buyers$Proposals$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Buyers$Proposals$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Proposal>;
    patch(
      params: Params$Resource$Buyers$Proposals$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Buyers$Proposals$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Proposal>,
      callback: BodyResponseCallback<Schema$Proposal>
    ): void;
    patch(
      params: Params$Resource$Buyers$Proposals$Patch,
      callback: BodyResponseCallback<Schema$Proposal>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Proposal>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Buyers$Proposals$Patch
        | BodyResponseCallback<Schema$Proposal>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Proposal>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Proposal>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Proposal> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buyers$Proposals$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$Proposals$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Proposal>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Proposal>(parameters);
      }
    }

    /**
     * Sends a request for proposal (RFP) to a publisher to initiate the negotiation regarding certain inventory. In the RFP, buyers can specify the deal type, deal terms, start and end dates, targeting, and a message to the publisher. Once the RFP is sent, a proposal in `SELLER_REVIEW_REQUESTED` state will be created and returned in the response. The publisher may review your request and respond with detailed deals in the proposal.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    sendRfp(
      params: Params$Resource$Buyers$Proposals$Sendrfp,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    sendRfp(
      params?: Params$Resource$Buyers$Proposals$Sendrfp,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Proposal>;
    sendRfp(
      params: Params$Resource$Buyers$Proposals$Sendrfp,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    sendRfp(
      params: Params$Resource$Buyers$Proposals$Sendrfp,
      options: MethodOptions | BodyResponseCallback<Schema$Proposal>,
      callback: BodyResponseCallback<Schema$Proposal>
    ): void;
    sendRfp(
      params: Params$Resource$Buyers$Proposals$Sendrfp,
      callback: BodyResponseCallback<Schema$Proposal>
    ): void;
    sendRfp(callback: BodyResponseCallback<Schema$Proposal>): void;
    sendRfp(
      paramsOrCallback?:
        | Params$Resource$Buyers$Proposals$Sendrfp
        | BodyResponseCallback<Schema$Proposal>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Proposal>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Proposal>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Proposal> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buyers$Proposals$Sendrfp;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$Proposals$Sendrfp;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+buyer}/proposals:sendRfp').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['buyer'],
        pathParams: ['buyer'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Proposal>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Proposal>(parameters);
      }
    }
  }

  export interface Params$Resource$Buyers$Proposals$Accept
    extends StandardParameters {
    /**
     * Name of the proposal. Format: `buyers/{accountId\}/proposals/{proposalId\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AcceptProposalRequest;
  }
  export interface Params$Resource$Buyers$Proposals$Addnote
    extends StandardParameters {
    /**
     * Name of the proposal. Format: `buyers/{accountId\}/proposals/{proposalId\}`
     */
    proposal?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AddNoteRequest;
  }
  export interface Params$Resource$Buyers$Proposals$Cancelnegotiation
    extends StandardParameters {
    /**
     * Name of the proposal. Format: `buyers/{accountId\}/proposals/{proposalId\}`
     */
    proposal?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelNegotiationRequest;
  }
  export interface Params$Resource$Buyers$Proposals$Get
    extends StandardParameters {
    /**
     * Required. Name of the proposal. Format: `buyers/{accountId\}/proposals/{proposalId\}`
     */
    name?: string;
  }
  export interface Params$Resource$Buyers$Proposals$List
    extends StandardParameters {
    /**
     * Optional query string using the [Cloud API list filtering syntax](https://developers.google.com/authorized-buyers/apis/guides/list-filters) Supported columns for filtering are: * displayName * dealType * updateTime * state
     */
    filter?: string;
    /**
     * Requested page size. The server may return fewer results than requested. If unspecified, the server will put a size of 500.
     */
    pageSize?: number;
    /**
     * The page token as returned from ListProposalsResponse.
     */
    pageToken?: string;
    /**
     * Required. Parent that owns the collection of proposals Format: `buyers/{accountId\}`
     */
    parent?: string;
  }
  export interface Params$Resource$Buyers$Proposals$Patch
    extends StandardParameters {
    /**
     * Immutable. The name of the proposal serving as a unique identifier. Format: buyers/{accountId\}/proposals/{proposalId\}
     */
    name?: string;
    /**
     * List of fields to be updated. If empty or unspecified, the service will update all fields populated in the update request excluding the output only fields and primitive fields with default value. Note that explicit field mask is required in order to reset a primitive field back to its default value, for example, false for boolean fields, 0 for integer fields. A special field mask consisting of a single path "*" can be used to indicate full replacement(the equivalent of PUT method), updatable fields unset or unspecified in the input will be cleared or set to default value. Output only fields will be ignored regardless of the value of updateMask.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Proposal;
  }
  export interface Params$Resource$Buyers$Proposals$Sendrfp
    extends StandardParameters {
    /**
     * Required. The current buyer who is sending the RFP in the format: `buyers/{accountId\}`.
     */
    buyer?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SendRfpRequest;
  }

  export class Resource$Buyers$Proposals$Deals {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Batch updates multiple deals in the same proposal.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    batchUpdate(
      params: Params$Resource$Buyers$Proposals$Deals$Batchupdate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchUpdate(
      params?: Params$Resource$Buyers$Proposals$Deals$Batchupdate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BatchUpdateDealsResponse>;
    batchUpdate(
      params: Params$Resource$Buyers$Proposals$Deals$Batchupdate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchUpdate(
      params: Params$Resource$Buyers$Proposals$Deals$Batchupdate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchUpdateDealsResponse>,
      callback: BodyResponseCallback<Schema$BatchUpdateDealsResponse>
    ): void;
    batchUpdate(
      params: Params$Resource$Buyers$Proposals$Deals$Batchupdate,
      callback: BodyResponseCallback<Schema$BatchUpdateDealsResponse>
    ): void;
    batchUpdate(
      callback: BodyResponseCallback<Schema$BatchUpdateDealsResponse>
    ): void;
    batchUpdate(
      paramsOrCallback?:
        | Params$Resource$Buyers$Proposals$Deals$Batchupdate
        | BodyResponseCallback<Schema$BatchUpdateDealsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BatchUpdateDealsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BatchUpdateDealsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$BatchUpdateDealsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buyers$Proposals$Deals$Batchupdate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$Proposals$Deals$Batchupdate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/deals:batchUpdate').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BatchUpdateDealsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BatchUpdateDealsResponse>(parameters);
      }
    }

    /**
     * Gets a deal given its name. The deal is returned at its head revision.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Buyers$Proposals$Deals$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Buyers$Proposals$Deals$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Deal>;
    get(
      params: Params$Resource$Buyers$Proposals$Deals$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Buyers$Proposals$Deals$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Deal>,
      callback: BodyResponseCallback<Schema$Deal>
    ): void;
    get(
      params: Params$Resource$Buyers$Proposals$Deals$Get,
      callback: BodyResponseCallback<Schema$Deal>
    ): void;
    get(callback: BodyResponseCallback<Schema$Deal>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Buyers$Proposals$Deals$Get
        | BodyResponseCallback<Schema$Deal>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Deal>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Deal>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Deal> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buyers$Proposals$Deals$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$Proposals$Deals$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Deal>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Deal>(parameters);
      }
    }

    /**
     * Lists all deals in a proposal. To retrieve only the finalized revision deals regardless if a deal is being renegotiated, see the FinalizedDeals resource.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Buyers$Proposals$Deals$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Buyers$Proposals$Deals$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListDealsResponse>;
    list(
      params: Params$Resource$Buyers$Proposals$Deals$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Buyers$Proposals$Deals$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListDealsResponse>,
      callback: BodyResponseCallback<Schema$ListDealsResponse>
    ): void;
    list(
      params: Params$Resource$Buyers$Proposals$Deals$List,
      callback: BodyResponseCallback<Schema$ListDealsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListDealsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Buyers$Proposals$Deals$List
        | BodyResponseCallback<Schema$ListDealsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDealsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDealsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListDealsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buyers$Proposals$Deals$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$Proposals$Deals$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/deals').replace(
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
        createAPIRequest<Schema$ListDealsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDealsResponse>(parameters);
      }
    }

    /**
     * Updates the given deal at the buyer known revision number. If the server revision has advanced since the passed-in proposal.proposal_revision an ABORTED error message will be returned. The revision number is incremented by the server whenever the proposal or its constituent deals are updated. Note: The revision number is kept at a proposal level. The buyer of the API is expected to keep track of the revision number after the last update operation and send it in as part of the next update request. This way, if there are further changes on the server (for example, seller making new updates), then the server can detect conflicts and reject the proposed changes.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Buyers$Proposals$Deals$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Buyers$Proposals$Deals$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Deal>;
    patch(
      params: Params$Resource$Buyers$Proposals$Deals$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Buyers$Proposals$Deals$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Deal>,
      callback: BodyResponseCallback<Schema$Deal>
    ): void;
    patch(
      params: Params$Resource$Buyers$Proposals$Deals$Patch,
      callback: BodyResponseCallback<Schema$Deal>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Deal>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Buyers$Proposals$Deals$Patch
        | BodyResponseCallback<Schema$Deal>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Deal>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Deal>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Deal> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buyers$Proposals$Deals$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$Proposals$Deals$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Deal>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Deal>(parameters);
      }
    }
  }

  export interface Params$Resource$Buyers$Proposals$Deals$Batchupdate
    extends StandardParameters {
    /**
     * Required. The name of the proposal containing the deals to batch update. Format: buyers/{accountId\}/proposals/{proposalId\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchUpdateDealsRequest;
  }
  export interface Params$Resource$Buyers$Proposals$Deals$Get
    extends StandardParameters {
    /**
     * Required. Format: buyers/{accountId\}/proposals/{proposalId\}/deals/{dealId\}
     */
    name?: string;
  }
  export interface Params$Resource$Buyers$Proposals$Deals$List
    extends StandardParameters {
    /**
     * Requested page size. The server may return fewer results than requested. If requested more than 500, the server will return 500 results per page. If unspecified, the server will pick a default page size of 100.
     */
    pageSize?: number;
    /**
     * The page token as returned from ListDealsResponse.
     */
    pageToken?: string;
    /**
     * Required. The name of the proposal containing the deals to retrieve. Format: buyers/{accountId\}/proposals/{proposalId\}
     */
    parent?: string;
  }
  export interface Params$Resource$Buyers$Proposals$Deals$Patch
    extends StandardParameters {
    /**
     * Immutable. The unique identifier of the deal. Auto-generated by the server when a deal is created. Format: buyers/{accountId\}/proposals/{proposalId\}/deals/{dealId\}
     */
    name?: string;
    /**
     * List of fields to be updated. If empty or unspecified, the service will update all fields populated in the update request excluding the output only fields and primitive fields with default value. Note that explicit field mask is required in order to reset a primitive field back to its default value, for example, false for boolean fields, 0 for integer fields. A special field mask consisting of a single path "*" can be used to indicate full replacement(the equivalent of PUT method), updatable fields unset or unspecified in the input will be cleared or set to default value. Output only fields will be ignored regardless of the value of updateMask.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Deal;
  }

  export class Resource$Buyers$Publisherprofiles {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the requested publisher profile by name.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Buyers$Publisherprofiles$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Buyers$Publisherprofiles$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PublisherProfile>;
    get(
      params: Params$Resource$Buyers$Publisherprofiles$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Buyers$Publisherprofiles$Get,
      options: MethodOptions | BodyResponseCallback<Schema$PublisherProfile>,
      callback: BodyResponseCallback<Schema$PublisherProfile>
    ): void;
    get(
      params: Params$Resource$Buyers$Publisherprofiles$Get,
      callback: BodyResponseCallback<Schema$PublisherProfile>
    ): void;
    get(callback: BodyResponseCallback<Schema$PublisherProfile>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Buyers$Publisherprofiles$Get
        | BodyResponseCallback<Schema$PublisherProfile>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PublisherProfile>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PublisherProfile>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$PublisherProfile> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buyers$Publisherprofiles$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$Publisherprofiles$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$PublisherProfile>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PublisherProfile>(parameters);
      }
    }

    /**
     * Lists publisher profiles. The returned publisher profiles aren't in any defined order. The order of the results might change. A new publisher profile can appear in any place in the list of returned results.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Buyers$Publisherprofiles$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Buyers$Publisherprofiles$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListPublisherProfilesResponse>;
    list(
      params: Params$Resource$Buyers$Publisherprofiles$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Buyers$Publisherprofiles$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListPublisherProfilesResponse>,
      callback: BodyResponseCallback<Schema$ListPublisherProfilesResponse>
    ): void;
    list(
      params: Params$Resource$Buyers$Publisherprofiles$List,
      callback: BodyResponseCallback<Schema$ListPublisherProfilesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListPublisherProfilesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Buyers$Publisherprofiles$List
        | BodyResponseCallback<Schema$ListPublisherProfilesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListPublisherProfilesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListPublisherProfilesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListPublisherProfilesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buyers$Publisherprofiles$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$Publisherprofiles$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/publisherProfiles').replace(
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
        createAPIRequest<Schema$ListPublisherProfilesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListPublisherProfilesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Buyers$Publisherprofiles$Get
    extends StandardParameters {
    /**
     * Required. Name of the publisher profile. Format: `buyers/{buyerId\}/publisherProfiles/{publisherProfileId\}`
     */
    name?: string;
  }
  export interface Params$Resource$Buyers$Publisherprofiles$List
    extends StandardParameters {
    /**
     * Optional query string using the [Cloud API list filtering] (https://developers.google.com/authorized-buyers/apis/guides/list-filters) syntax.
     */
    filter?: string;
    /**
     * Requested page size. The server may return fewer results than requested. If requested more than 500, the server will return 500 results per page. If unspecified, the server will pick a default page size of 100.
     */
    pageSize?: number;
    /**
     * The page token as returned from a previous ListPublisherProfilesResponse.
     */
    pageToken?: string;
    /**
     * Required. Parent that owns the collection of publisher profiles Format: `buyers/{buyerId\}`
     */
    parent?: string;
  }
}
