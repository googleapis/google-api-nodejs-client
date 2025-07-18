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

export namespace realtimebidding_v1 {
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
   * Real-time Bidding API
   *
   * Allows external bidders to manage their RTB integration with Google. This includes managing bidder endpoints, QPS quotas, configuring what ad inventory to receive with pretargeting, submitting creatives for verification, and accessing creative metadata such as approval status.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const realtimebidding = google.realtimebidding('v1');
   * ```
   */
  export class Realtimebidding {
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
   * A request to activate a pretargeting configuration. Sets the configuration's state to ACTIVE.
   */
  export interface Schema$ActivatePretargetingConfigRequest {}
  /**
   * A request to start targeting the provided app IDs in a specific pretargeting configuration. The pretargeting configuration itself specifies how these apps are targeted. in PretargetingConfig.appTargeting.mobileAppTargeting.
   */
  export interface Schema$AddTargetedAppsRequest {
    /**
     * A list of app IDs to target in the pretargeting configuration. These values will be added to the list of targeted app IDs in PretargetingConfig.appTargeting.mobileAppTargeting.values.
     */
    appIds?: string[] | null;
    /**
     * Required. The targeting mode that should be applied to the list of app IDs. If there are existing targeted app IDs, must be equal to the existing PretargetingConfig.appTargeting.mobileAppTargeting.targetingMode or a 400 bad request error will be returned.
     */
    targetingMode?: string | null;
  }
  /**
   * A request to start targeting the provided publishers in a specific pretargeting configuration. The pretargeting configuration itself specifies how these publishers are targeted in PretargetingConfig.publisherTargeting.
   */
  export interface Schema$AddTargetedPublishersRequest {
    /**
     * A list of publisher IDs to target in the pretargeting configuration. These values will be added to the list of targeted publisher IDs in PretargetingConfig.publisherTargeting.values. Publishers are identified by their publisher ID from ads.txt / app-ads.txt. See https://iabtechlab.com/ads-txt/ and https://iabtechlab.com/app-ads-txt/ for more details.
     */
    publisherIds?: string[] | null;
    /**
     * Required. The targeting mode that should be applied to the list of publisher IDs. If are existing publisher IDs, must be equal to the existing PretargetingConfig.publisherTargeting.targetingMode or a 400 bad request error will be returned.
     */
    targetingMode?: string | null;
  }
  /**
   * A request to start targeting the provided sites in a specific pretargeting configuration. The pretargeting configuration itself specifies how these sites are targeted in PretargetingConfig.webTargeting.
   */
  export interface Schema$AddTargetedSitesRequest {
    /**
     * A list of site URLs to target in the pretargeting configuration. These values will be added to the list of targeted URLs in PretargetingConfig.webTargeting.values.
     */
    sites?: string[] | null;
    /**
     * Required. The targeting mode that should be applied to the list of site URLs. If there are existing targeted sites, must be equal to the existing PretargetingConfig.webTargeting.targetingMode or a 400 bad request error will be returned.
     */
    targetingMode?: string | null;
  }
  /**
   * The list of detected Ad Technology Providers for this creative. Bids placed for inventory that will serve to EEA or UK users are expected to comply with GDPR requirements. You must ensure that the creatives used in such bids should contain only user consented ad technology providers as indicated in the bid request. Google reserves the right to filter non-compliant bids. User consented ad technology providers can be found in the [Google Protocol](https://developers.google.com/authorized-buyers/rtb/downloads/realtime-bidding-proto) with the `BidRequest.adslot.consented_providers_settings` field, and can be found as an [OpenRTB extension](https://developers.google.com/authorized-buyers/rtb/downloads/openrtb-adx-proto) with the `BidRequest.user.ext.consented_providers_settings` and `BidRequest.user.ext.consent` fields. See https://support.google.com/authorizedbuyers/answer/9789378 for additional information about the Google TCF v2 integration.
   */
  export interface Schema$AdTechnologyProviders {
    /**
     * The detected IAB Global Vendor List (GVL) IDs for this creative. See the IAB Global Vendor List at https://vendor-list.consensu.org/v2/vendor-list.json for details about the vendors.
     */
    detectedGvlIds?: string[] | null;
    /**
     * The detected [Google Ad Tech Providers (ATP)](https://support.google.com/admanager/answer/9012903) for this creative. See https://storage.googleapis.com/adx-rtb-dictionaries/providers.csv for mapping of provider ID to provided name, a privacy policy URL, and a list of domains which can be attributed to the provider.
     */
    detectedProviderIds?: string[] | null;
    /**
     * Domains of detected unidentified ad technology providers (if any). You must ensure that the creatives used in bids placed for inventory that will serve to EEA or UK users does not contain unidentified ad technology providers. Google reserves the right to filter non-compliant bids.
     */
    unidentifiedProviderDomains?: string[] | null;
  }
  /**
   * Detected advertiser and brand information.
   */
  export interface Schema$AdvertiserAndBrand {
    /**
     * See https://storage.googleapis.com/adx-rtb-dictionaries/advertisers.txt for the list of possible values. Can be used to filter the response of the creatives.list method.
     */
    advertiserId?: string | null;
    /**
     * Advertiser name. Can be used to filter the response of the creatives.list method.
     */
    advertiserName?: string | null;
    /**
     * Detected brand ID or zero if no brand has been detected. See https://storage.googleapis.com/adx-rtb-dictionaries/brands.txt for the list of possible values. Can be used to filter the response of the creatives.list method.
     */
    brandId?: string | null;
    /**
     * Brand name. Can be used to filter the response of the creatives.list method.
     */
    brandName?: string | null;
  }
  /**
   * A subset of app inventory to target. Bid requests that match criteria in at least one of the specified dimensions will be sent.
   */
  export interface Schema$AppTargeting {
    /**
     * Lists of included and excluded mobile app categories as defined in https://developers.google.com/adwords/api/docs/appendix/mobileappcategories.csv.
     */
    mobileAppCategoryTargeting?: Schema$NumericTargetingDimension;
    /**
     * Targeted app IDs. App IDs can refer to those found in an app store or ones that are not published in an app store. A maximum of 30,000 app IDs can be targeted.
     */
    mobileAppTargeting?: Schema$StringTargetingDimension;
  }
  /**
   * A request to approve a batch of publisher connections.
   */
  export interface Schema$BatchApprovePublisherConnectionsRequest {
    /**
     * Required. The names of the publishers with which connections will be approved. In the pattern `bidders/{bidder\}/publisherConnections/{publisher\}` where `{bidder\}` is the account ID of the bidder, and `{publisher\}` is the ads.txt/app-ads.txt publisher ID.
     */
    names?: string[] | null;
  }
  /**
   * A response for the request to approve a batch of publisher connections.
   */
  export interface Schema$BatchApprovePublisherConnectionsResponse {
    /**
     * The publisher connections that have been approved.
     */
    publisherConnections?: Schema$PublisherConnection[];
  }
  /**
   * A request to reject a batch of publisher connections.
   */
  export interface Schema$BatchRejectPublisherConnectionsRequest {
    /**
     * Required. The names of the publishers with whom connection will be rejected. In the pattern `bidders/{bidder\}/publisherConnections/{publisher\}` where `{bidder\}` is the account ID of the bidder, and `{publisher\}` is the ads.txt/app-ads.txt publisher ID.
     */
    names?: string[] | null;
  }
  /**
   * A response for the request to reject a batch of publisher connections.
   */
  export interface Schema$BatchRejectPublisherConnectionsResponse {
    /**
     * The publisher connections that have been rejected.
     */
    publisherConnections?: Schema$PublisherConnection[];
  }
  /**
   * Bidder settings.
   */
  export interface Schema$Bidder {
    /**
     * Output only. An option to bypass pretargeting for private auctions and preferred deals. When true, bid requests from these nonguaranteed deals will always be sent. When false, bid requests will be subject to regular pretargeting configurations. Programmatic Guaranteed deals will always be sent to the bidder, regardless of the value for this option. Auction packages are not impacted by this value and are subject to the regular pretargeting configurations.
     */
    bypassNonguaranteedDealsPretargeting?: boolean | null;
    /**
     * Output only. The buyer's network ID used for cookie matching. This ID corresponds to the `google_nid` parameter in the URL used in cookie match requests. Refer to https://developers.google.com/authorized-buyers/rtb/cookie-guide for further information.
     */
    cookieMatchingNetworkId?: string | null;
    /**
     * Output only. The base URL used in cookie match requests. Refer to https://developers.google.com/authorized-buyers/rtb/cookie-guide for further information.
     */
    cookieMatchingUrl?: string | null;
    /**
     * Output only. The billing ID for the deals pretargeting config. This billing ID is sent on the bid request for guaranteed and nonguaranteed deals matched in pretargeting.
     */
    dealsBillingId?: string | null;
    /**
     * Output only. Name of the bidder resource that must follow the pattern `bidders/{bidderAccountId\}`, where `{bidderAccountId\}` is the account ID of the bidder whose information is to be received. One can get their account ID on the Authorized Buyers or Open Bidding UI, or by contacting their Google account manager.
     */
    name?: string | null;
  }
  /**
   * RTB Buyer account information.
   */
  export interface Schema$Buyer {
    /**
     * Output only. The number of creatives that this buyer submitted through the API or bid with in the last 30 days. This is counted against the maximum number of active creatives.
     */
    activeCreativeCount?: string | null;
    /**
     * Output only. The name of the bidder resource that is responsible for receiving bidding traffic for this account. The bidder name must follow the pattern `bidders/{bidderAccountId\}`, where `{bidderAccountId\}` is the account ID of the bidder receiving traffic for this buyer.
     */
    bidder?: string | null;
    /**
     * Output only. A list of billing IDs associated with this account. These IDs appear on: 1. A bid request, to signal which buyers are eligible to bid on a given opportunity, and which pretargeting configurations were matched for each eligible buyer. 2. The bid response, to attribute a winning impression to a specific account for billing, reporting, policy and publisher block enforcement.
     */
    billingIds?: string[] | null;
    /**
     * Output only. The diplay name associated with this buyer account, as visible to sellers.
     */
    displayName?: string | null;
    /**
     * Output only. The maximum number of active creatives that this buyer can have.
     */
    maximumActiveCreativeCount?: string | null;
    /**
     * Output only. Name of the buyer resource that must follow the pattern `buyers/{buyerAccountId\}`, where `{buyerAccountId\}` is the account ID of the buyer account whose information is to be received. One can get their account ID on the Authorized Buyers or Open Bidding UI, or by contacting their Google account manager.
     */
    name?: string | null;
  }
  /**
   * A request to close a specified user list.
   */
  export interface Schema$CloseUserListRequest {}
  /**
   * A creative and its classification data.
   */
  export interface Schema$Creative {
    /**
     * Output only. ID of the buyer account that this creative is owned by. Can be used to filter the response of the creatives.list method with equality and inequality check.
     */
    accountId?: string | null;
    /**
     * The link to AdChoices destination page. This is only supported for native ads.
     */
    adChoicesDestinationUrl?: string | null;
    /**
     * The name of the company being advertised in the creative. Can be used to filter the response of the creatives.list method.
     */
    advertiserName?: string | null;
    /**
     * The agency ID for this creative.
     */
    agencyId?: string | null;
    /**
     * Output only. The last update timestamp of the creative through the API.
     */
    apiUpdateTime?: string | null;
    /**
     * Output only. The format of this creative. Can be used to filter the response of the creatives.list method.
     */
    creativeFormat?: string | null;
    /**
     * Buyer-specific creative ID that references this creative in bid responses. This field is Ignored in update operations. Can be used to filter the response of the creatives.list method. The maximum length of the creative ID is 128 bytes.
     */
    creativeId?: string | null;
    /**
     * Output only. Top level status and detected attributes of a creative (for example domain, language, advertiser, product category, etc.) that affect whether (status) and where (context) a creative will be allowed to serve.
     */
    creativeServingDecision?: Schema$CreativeServingDecision;
    /**
     * Output only. IDs of all of the deals with which this creative has been used in bidding. Can be used to filter the response of the creatives.list method.
     */
    dealIds?: string[] | null;
    /**
     * All declared attributes for the ads that may be shown from this creative. Can be used to filter the response of the creatives.list method. If the `excluded_attribute` field of a [bid request](https://developers.google.com/authorized-buyers/rtb/downloads/realtime-bidding-proto") contains one of the attributes that were declared or detected for a given creative, and a bid is submitted with that creative, the bid will be filtered before the auction.
     */
    declaredAttributes?: string[] | null;
    /**
     * The set of declared destination URLs for the creative. Can be used to filter the response of the creatives.list method.
     */
    declaredClickThroughUrls?: string[] | null;
    /**
     * All declared restricted categories for the ads that may be shown from this creative. Can be used to filter the response of the creatives.list method.
     */
    declaredRestrictedCategories?: string[] | null;
    /**
     * IDs for the declared ad technology vendors that may be used by this creative. See https://storage.googleapis.com/adx-rtb-dictionaries/vendors.txt for possible values. Can be used to filter the response of the creatives.list method.
     */
    declaredVendorIds?: number[] | null;
    /**
     * An HTML creative.
     */
    html?: Schema$HtmlContent;
    /**
     * The set of URLs to be called to record an impression.
     */
    impressionTrackingUrls?: string[] | null;
    /**
     * Output only. Name of the creative. Follows the pattern `buyers/{buyer\}/creatives/{creative\}`, where `{buyer\}` represents the account ID of the buyer who owns the creative, and `{creative\}` is the buyer-specific creative ID that references this creative in the bid response.
     */
    name?: string | null;
    /**
     * A native creative.
     */
    native?: Schema$NativeContent;
    /**
     * Experimental field that can be used during the [FLEDGE Origin Trial](/authorized-buyers/rtb/fledge-origin-trial). The URL to fetch an interest group ad used in [TURTLEDOVE on-device auction](https://github.com/WICG/turtledove/blob/main/FLEDGE.md#1-browsers-record-interest-groups"). This should be unique among all creatives for a given `accountId`. This URL should be the same as the URL returned by [generateBid()](https://github.com/WICG/turtledove/blob/main/FLEDGE.md#32-on-device-bidding).
     */
    renderUrl?: string | null;
    /**
     * All restricted categories for the ads that may be shown from this creative.
     */
    restrictedCategories?: string[] | null;
    /**
     * Output only. The version of the creative. Version for a new creative is 1 and it increments during subsequent creative updates.
     */
    version?: number | null;
    /**
     * A video creative.
     */
    video?: Schema$VideoContent;
  }
  /**
   * The dimensions of a creative. This applies to only HTML and Native creatives.
   */
  export interface Schema$CreativeDimensions {
    /**
     * The height of the creative in pixels.
     */
    height?: string | null;
    /**
     * The width of the creative in pixels.
     */
    width?: string | null;
  }
  /**
   * Top level status and detected attributes of a creative.
   */
  export interface Schema$CreativeServingDecision {
    /**
     * The detected ad technology providers.
     */
    adTechnologyProviders?: Schema$AdTechnologyProviders;
    /**
     * The policy compliance of this creative in China. When approved or disapproved, this applies to both deals and open auction in China. When pending review, this creative is allowed to serve for deals but not for open auction.
     */
    chinaPolicyCompliance?: Schema$PolicyCompliance;
    /**
     * Policy compliance of this creative when bidding on Programmatic Guaranteed and Preferred Deals (outside of Russia and China).
     */
    dealsPolicyCompliance?: Schema$PolicyCompliance;
    /**
     * Detected advertisers and brands.
     */
    detectedAdvertisers?: Schema$AdvertiserAndBrand[];
    /**
     * Publisher-excludable attributes that were detected for this creative. Can be used to filter the response of the creatives.list method. If the `excluded_attribute` field of a [bid request](https://developers.google.com/authorized-buyers/rtb/downloads/realtime-bidding-proto) contains one of the attributes that were declared or detected for a given creative, and a bid is submitted with that creative, the bid will be filtered before the auction.
     */
    detectedAttributes?: string[] | null;
    /**
     * Output only. IDs of the detected categories. The taxonomy in which the categories are expressed is specified by the detected_categories_taxonomy field. Use this in conjunction with BidRequest.bcat to avoid bidding on impressions where a given ad category is blocked, or to troubleshoot filtered bids. Can be used to filter the response of the creatives.list method.
     */
    detectedCategories?: string[] | null;
    /**
     * Output only. The taxonomy in which the detected_categories field is expressed.
     */
    detectedCategoriesTaxonomy?: string | null;
    /**
     * The set of detected destination URLs for the creative. Can be used to filter the response of the creatives.list method.
     */
    detectedClickThroughUrls?: string[] | null;
    /**
     * The detected domains for this creative.
     */
    detectedDomains?: string[] | null;
    /**
     * The detected languages for this creative. The order is arbitrary. The codes are 2 or 5 characters and are documented at https://developers.google.com/adwords/api/docs/appendix/languagecodes. Can be used to filter the response of the creatives.list method.
     */
    detectedLanguages?: string[] | null;
    /**
     * Detected product categories, if any. See the ad-product-categories.txt file in the technical documentation for a list of IDs. Can be used to filter the response of the creatives.list method.
     */
    detectedProductCategories?: number[] | null;
    /**
     * Detected sensitive categories, if any. Can be used to filter the response of the creatives.list method. See the ad-sensitive-categories.txt file in the technical documentation for a list of IDs. You should use these IDs along with the excluded-sensitive-category field in the bid request to filter your bids.
     */
    detectedSensitiveCategories?: number[] | null;
    /**
     * IDs of the ad technology vendors that were detected to be used by this creative. See https://storage.googleapis.com/adx-rtb-dictionaries/vendors.txt for possible values. Can be used to filter the response of the creatives.list method. If the `allowed_vendor_type` field of a [bid request](https://developers.google.com/authorized-buyers/rtb/downloads/realtime-bidding-proto) does not contain one of the vendor type IDs that were declared or detected for a given creative, and a bid is submitted with that creative, the bid will be filtered before the auction.
     */
    detectedVendorIds?: number[] | null;
    /**
     * The last time the creative status was updated. Can be used to filter the response of the creatives.list method.
     */
    lastStatusUpdate?: string | null;
    /**
     * Policy compliance of this creative when bidding in open auction, private auction, or auction packages (outside of Russia and China).
     */
    networkPolicyCompliance?: Schema$PolicyCompliance;
    /**
     * Policy compliance of this creative when bidding in Open Bidding (outside of Russia and China). For the list of platform policies, see: https://support.google.com/platformspolicy/answer/3013851.
     */
    platformPolicyCompliance?: Schema$PolicyCompliance;
    /**
     * The policy compliance of this creative in Russia. When approved or disapproved, this applies to both deals and open auction in Russia. When pending review, this creative is allowed to serve for deals but not for open auction.
     */
    russiaPolicyCompliance?: Schema$PolicyCompliance;
  }
  /**
   * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
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
   * Evidence that the creative's destination URL was not crawlable by Google.
   */
  export interface Schema$DestinationNotCrawlableEvidence {
    /**
     * Destination URL that was attempted to be crawled.
     */
    crawledUrl?: string | null;
    /**
     * Approximate time of the crawl.
     */
    crawlTime?: string | null;
    /**
     * Reason of destination not crawlable.
     */
    reason?: string | null;
  }
  /**
   * Evidence of the creative's destination URL not functioning properly or having been incorrectly set up.
   */
  export interface Schema$DestinationNotWorkingEvidence {
    /**
     * DNS lookup errors.
     */
    dnsError?: string | null;
    /**
     * The full non-working URL.
     */
    expandedUrl?: string | null;
    /**
     * HTTP error code (for example, 404 or 5xx)
     */
    httpError?: number | null;
    /**
     * Page was crawled successfully, but was detected as either a page with no content or an error page.
     */
    invalidPage?: string | null;
    /**
     * Approximate time when the ad destination was last checked.
     */
    lastCheckTime?: string | null;
    /**
     * Platform of the non-working URL.
     */
    platform?: string | null;
    /**
     * HTTP redirect chain error.
     */
    redirectionError?: string | null;
    /**
     * Rejected because of malformed URLs or invalid requests.
     */
    urlRejected?: string | null;
  }
  /**
   * The full landing page URL of the destination.
   */
  export interface Schema$DestinationUrlEvidence {
    /**
     * The full landing page URL of the destination.
     */
    destinationUrl?: string | null;
  }
  /**
   * Number of HTTP calls made by a creative, broken down by domain.
   */
  export interface Schema$DomainCallEvidence {
    /**
     * Breakdown of the most frequent domains called through HTTP by the creative.
     */
    topHttpCallDomains?: Schema$DomainCalls[];
    /**
     * The total number of HTTP calls made by the creative, including but not limited to the number of calls in the top_http_call_domains.
     */
    totalHttpCallCount?: number | null;
  }
  /**
   * The number of HTTP calls made to the given domain.
   */
  export interface Schema$DomainCalls {
    /**
     * The domain name.
     */
    domain?: string | null;
    /**
     * Number of HTTP calls made to the domain.
     */
    httpCallCount?: number | null;
  }
  /**
   * Total download size and URL-level download size breakdown for resources in a creative.
   */
  export interface Schema$DownloadSizeEvidence {
    /**
     * Download size broken down by URLs with the top download size.
     */
    topUrlDownloadSizeBreakdowns?: Schema$UrlDownloadSize[];
    /**
     * Total download size (in kilobytes) for all the resources in the creative.
     */
    totalDownloadSizeKb?: number | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Bidder endpoint that receives bid requests.
   */
  export interface Schema$Endpoint {
    /**
     * The protocol that the bidder endpoint is using.
     */
    bidProtocol?: string | null;
    /**
     * The maximum number of queries per second allowed to be sent to this server.
     */
    maximumQps?: string | null;
    /**
     * Output only. Name of the endpoint resource that must follow the pattern `bidders/{bidderAccountId\}/endpoints/{endpointId\}`, where {bidderAccountId\} is the account ID of the bidder who operates this endpoint, and {endpointId\} is a unique ID assigned by the server.
     */
    name?: string | null;
    /**
     * The trading location that bid requests should be sent from. See https://developers.google.com/authorized-buyers/rtb/peer-guide#trading-locations for further information.
     */
    tradingLocation?: string | null;
    /**
     * Output only. The URL that bid requests should be sent to.
     */
    url?: string | null;
  }
  /**
   * This has been sunset as of October 2023, and will return an error response if called. For more information, see the release notes: https://developers.google.com/authorized-buyers/apis/relnotes#real-time-bidding-api Response for a request to get remarketing tag.
   */
  export interface Schema$GetRemarketingTagResponse {
    /**
     * An HTML tag that can be placed on the advertiser's page to add users to a user list. For more information and code samples on using snippets on your website, refer to [Tag your site for remarketing](https://support.google.com/google-ads/answer/2476688).
     */
    snippet?: string | null;
  }
  /**
   * HTML content for a creative.
   */
  export interface Schema$HtmlContent {
    /**
     * The height of the HTML snippet in pixels. Can be used to filter the response of the creatives.list method.
     */
    height?: number | null;
    /**
     * The HTML snippet that displays the ad when inserted in the web page.
     */
    snippet?: string | null;
    /**
     * The width of the HTML snippet in pixels. Can be used to filter the response of the creatives.list method.
     */
    width?: number | null;
  }
  /**
   * HTTP calls made by a creative that resulted in policy violations.
   */
  export interface Schema$HttpCallEvidence {
    /**
     * URLs of HTTP calls made by the creative.
     */
    urls?: string[] | null;
  }
  /**
   * Evidence for HTTP cookie-related policy violations.
   */
  export interface Schema$HttpCookieEvidence {
    /**
     * Names of cookies that violate Google policies. For TOO_MANY_COOKIES policy, this will be the cookie names of top domains with the largest number of cookies. For other policies, this will be all the cookie names that violate the policy.
     */
    cookieNames?: string[] | null;
    /**
     * The largest number of cookies set by a creative. If this field is set, cookie_names above will be set to the cookie names of top domains with the largest number of cookies. This field will only be set for TOO_MANY_COOKIES policy.
     */
    maxCookieCount?: number | null;
  }
  /**
   * An image resource. You may provide a larger image than was requested, so long as the aspect ratio is preserved.
   */
  export interface Schema$Image {
    /**
     * Image height in pixels.
     */
    height?: number | null;
    /**
     * The URL of the image.
     */
    url?: string | null;
    /**
     * Image width in pixels.
     */
    width?: number | null;
  }
  /**
   * A response containing bidders.
   */
  export interface Schema$ListBiddersResponse {
    /**
     * List of bidders.
     */
    bidders?: Schema$Bidder[];
    /**
     * A token which can be passed to a subsequent call to the `ListBidders` method to retrieve the next page of results in ListBiddersRequest.pageToken.
     */
    nextPageToken?: string | null;
  }
  /**
   * A response containing buyer account information.
   */
  export interface Schema$ListBuyersResponse {
    /**
     * List of buyers.
     */
    buyers?: Schema$Buyer[];
    /**
     * A token which can be passed to a subsequent call to the `ListBuyers` method to retrieve the next page of results in ListBuyersRequest.pageToken.
     */
    nextPageToken?: string | null;
  }
  /**
   * A response for listing creatives.
   */
  export interface Schema$ListCreativesResponse {
    /**
     * The list of creatives.
     */
    creatives?: Schema$Creative[];
    /**
     * A token to retrieve the next page of results. Pass this value in the ListCreativesRequest.pageToken field in the subsequent call to the `ListCreatives` method to retrieve the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * A response containing bidder endpoints.
   */
  export interface Schema$ListEndpointsResponse {
    /**
     * List of bidder endpoints.
     */
    endpoints?: Schema$Endpoint[];
    /**
     * A token which can be passed to a subsequent call to the `ListEndpoints` method to retrieve the next page of results in ListEndpointsRequest.pageToken.
     */
    nextPageToken?: string | null;
  }
  /**
   * A response containing pretargeting configurations.
   */
  export interface Schema$ListPretargetingConfigsResponse {
    /**
     * A token which can be passed to a subsequent call to the `ListPretargetingConfigs` method to retrieve the next page of results in ListPretargetingConfigsRequest.pageToken.
     */
    nextPageToken?: string | null;
    /**
     * List of pretargeting configurations.
     */
    pretargetingConfigs?: Schema$PretargetingConfig[];
  }
  /**
   * A response to a request for listing publisher connections.
   */
  export interface Schema$ListPublisherConnectionsResponse {
    /**
     * A token to retrieve the next page of results. Pass this value in the ListPublisherConnectionsRequest.pageToken field in the subsequent call to the `ListPublisherConnections` method to retrieve the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * The list of publisher connections.
     */
    publisherConnections?: Schema$PublisherConnection[];
  }
  /**
   * The list user list response.
   */
  export interface Schema$ListUserListsResponse {
    /**
     * The continuation page token to send back to the server in a subsequent request. Due to a currently known issue, it is recommended that the caller keep invoking the list method until the time a next page token is not returned, even if the result set is empty.
     */
    nextPageToken?: string | null;
    /**
     * List of user lists from the search.
     */
    userLists?: Schema$UserList[];
  }
  /**
   * Information about each media file in the VAST.
   */
  export interface Schema$MediaFile {
    /**
     * Bitrate of the video file, in Kbps. Can be used to filter the response of the creatives.list method.
     */
    bitrate?: string | null;
    /**
     * The MIME type of this media file. Can be used to filter the response of the creatives.list method.
     */
    mimeType?: string | null;
  }
  /**
   * Native content for a creative.
   */
  export interface Schema$NativeContent {
    /**
     * The name of the advertiser or sponsor, to be displayed in the ad creative.
     */
    advertiserName?: string | null;
    /**
     * The app icon, for app download ads.
     */
    appIcon?: Schema$Image;
    /**
     * A long description of the ad.
     */
    body?: string | null;
    /**
     * A label for the button that the user is supposed to click.
     */
    callToAction?: string | null;
    /**
     * The URL that the browser/SDK will load when the user clicks the ad.
     */
    clickLinkUrl?: string | null;
    /**
     * The URL to use for click tracking.
     */
    clickTrackingUrl?: string | null;
    /**
     * A short title for the ad.
     */
    headline?: string | null;
    /**
     * A large image.
     */
    image?: Schema$Image;
    /**
     * A smaller image, for the advertiser's logo.
     */
    logo?: Schema$Image;
    /**
     * The price of the promoted app including currency info.
     */
    priceDisplayText?: string | null;
    /**
     * The app rating in the app store. Must be in the range [0-5].
     */
    starRating?: number | null;
    /**
     * The URL to fetch a native video ad.
     */
    videoUrl?: string | null;
    /**
     * The contents of a VAST document for a native video ad.
     */
    videoVastXml?: string | null;
  }
  /**
   * Generic targeting used for targeting dimensions that contain a list of included and excluded numeric IDs used in app, user list, geo, and vertical id targeting.
   */
  export interface Schema$NumericTargetingDimension {
    /**
     * The IDs excluded in a configuration.
     */
    excludedIds?: string[] | null;
    /**
     * The IDs included in a configuration.
     */
    includedIds?: string[] | null;
  }
  /**
   * A request to open a specified user list.
   */
  export interface Schema$OpenUserListRequest {}
  /**
   * Policy compliance of the creative for a transaction type or a region.
   */
  export interface Schema$PolicyCompliance {
    /**
     * Serving status for the given transaction type (for example, open auction, deals) or region (for example, China, Russia). Can be used to filter the response of the creatives.list method.
     */
    status?: string | null;
    /**
     * Topics related to the policy compliance for this transaction type (for example, open auction, deals) or region (for example, China, Russia). Topics may be present only if status is DISAPPROVED.
     */
    topics?: Schema$PolicyTopicEntry[];
  }
  /**
   * Each policy topic entry will represent a violation of a policy topic for a creative, with the policy topic information and optional evidence for the policy violation.
   */
  export interface Schema$PolicyTopicEntry {
    /**
     * Pieces of evidence associated with this policy topic entry.
     */
    evidences?: Schema$PolicyTopicEvidence[];
    /**
     * URL of the help center article describing this policy topic.
     */
    helpCenterUrl?: string | null;
    /**
     * Whether or not the policy topic is missing a certificate. Some policy topics require a certificate to unblock serving in some regions. For more information about creative certification, refer to: https://support.google.com/authorizedbuyers/answer/7450776
     */
    missingCertificate?: boolean | null;
    /**
     * Policy topic this entry refers to. For example, "ALCOHOL", "TRADEMARKS_IN_AD_TEXT", or "DESTINATION_NOT_WORKING". The set of possible policy topics is not fixed for a particular API version and may change at any time. Can be used to filter the response of the creatives.list method
     */
    policyTopic?: string | null;
  }
  /**
   * Evidence associated with a policy topic entry.
   */
  export interface Schema$PolicyTopicEvidence {
    /**
     * The creative's destination URL was not crawlable by Google.
     */
    destinationNotCrawlable?: Schema$DestinationNotCrawlableEvidence;
    /**
     * The creative's destination URL did not function properly or was incorrectly set up.
     */
    destinationNotWorking?: Schema$DestinationNotWorkingEvidence;
    /**
     * URL of the actual landing page.
     */
    destinationUrl?: Schema$DestinationUrlEvidence;
    /**
     * Number of HTTP calls made by the creative, broken down by domain.
     */
    domainCall?: Schema$DomainCallEvidence;
    /**
     * Total download size and URL-level download size breakdown for resources in a creative.
     */
    downloadSize?: Schema$DownloadSizeEvidence;
    /**
     * HTTP calls made by the creative that resulted in policy violations.
     */
    httpCall?: Schema$HttpCallEvidence;
    /**
     * Evidence for HTTP cookie-related policy violations.
     */
    httpCookie?: Schema$HttpCookieEvidence;
  }
  /**
   * Pretargeting configuration: a set of targeting dimensions applied at the pretargeting stage of the RTB funnel. These control which inventory a bidder will receive bid requests for.
   */
  export interface Schema$PretargetingConfig {
    /**
     * Targeting modes included by this configuration. A bid request must allow all the specified targeting modes. An unset value allows all bid requests to be sent, regardless of which targeting modes they allow.
     */
    allowedUserTargetingModes?: string[] | null;
    /**
     * Targeting on a subset of app inventory. If APP is listed in targeted_environments, the specified targeting is applied. A maximum of 30,000 app IDs can be targeted. An unset value for targeting allows all app-based bid requests to be sent. Apps can either be targeting positively (bid requests will be sent only if the destination app is listed in the targeting dimension) or negatively (bid requests will be sent only if the destination app is not listed in the targeting dimension).
     */
    appTargeting?: Schema$AppTargeting;
    /**
     * Output only. The identifier that corresponds to this pretargeting configuration that helps buyers track and attribute their spend across their own arbitrary divisions. If a bid request matches more than one configuration, the buyer chooses which billing_id to attribute each of their bids.
     */
    billingId?: string | null;
    /**
     * The diplay name associated with this configuration. This name must be unique among all the pretargeting configurations a bidder has.
     */
    displayName?: string | null;
    /**
     * The sensitive content category label IDs excluded in this configuration. Bid requests for inventory with any of the specified content label IDs will not be sent. Refer to this file https://storage.googleapis.com/adx-rtb-dictionaries/content-labels.txt for category IDs.
     */
    excludedContentLabelIds?: string[] | null;
    /**
     * The geos included or excluded in this configuration defined in https://storage.googleapis.com/adx-rtb-dictionaries/geo-table.csv
     */
    geoTargeting?: Schema$NumericTargetingDimension;
    /**
     * Creative dimensions included by this configuration. Only bid requests eligible for at least one of the specified creative dimensions will be sent. An unset value allows all bid requests to be sent, regardless of creative dimension.
     */
    includedCreativeDimensions?: Schema$CreativeDimensions[];
    /**
     * Environments that are being included. Bid requests will not be sent for a given environment if it is not included. Further restrictions can be applied to included environments to target only a subset of its inventory. An unset value includes all environments.
     */
    includedEnvironments?: string[] | null;
    /**
     * Creative formats included by this configuration. Only bid requests eligible for at least one of the specified creative formats will be sent. An unset value will allow all bid requests to be sent, regardless of format.
     */
    includedFormats?: string[] | null;
    /**
     * The languages included in this configuration, represented by their language code. See https://developers.google.com/adwords/api/docs/appendix/languagecodes.
     */
    includedLanguages?: string[] | null;
    /**
     * The mobile operating systems included in this configuration as defined in https://storage.googleapis.com/adx-rtb-dictionaries/mobile-os.csv
     */
    includedMobileOperatingSystemIds?: string[] | null;
    /**
     * The platforms included by this configration. Bid requests for devices with the specified platform types will be sent. An unset value allows all bid requests to be sent, regardless of platform.
     */
    includedPlatforms?: string[] | null;
    /**
     * User identifier types included in this configuration. At least one of the user identifier types specified in this list must be available for the bid request to be sent.
     */
    includedUserIdTypes?: string[] | null;
    /**
     * The interstitial targeting specified for this configuration. The unset value will allow bid requests to be sent regardless of whether they are for interstitials or not.
     */
    interstitialTargeting?: string | null;
    /**
     * Output only. Existing included or excluded geos that are invalid. Previously targeted geos may become invalid due to privacy restrictions.
     */
    invalidGeoIds?: string[] | null;
    /**
     * The maximum QPS threshold for this configuration. The bidder should receive no more than this number of bid requests matching this configuration per second across all their bidding endpoints among all trading locations. Further information available at https://developers.google.com/authorized-buyers/rtb/peer-guide
     */
    maximumQps?: string | null;
    /**
     * The targeted minimum viewability decile, ranging in values [0, 10]. A value of 5 means that the configuration will only match adslots for which we predict at least 50% viewability. Values \> 10 will be rounded down to 10. An unset value or a value of 0 indicates that bid requests will be sent regardless of viewability.
     */
    minimumViewabilityDecile?: number | null;
    /**
     * Output only. Name of the pretargeting configuration that must follow the pattern `bidders/{bidder_account_id\}/pretargetingConfigs/{config_id\}`
     */
    name?: string | null;
    /**
     * Targeting on a subset of publisher inventory. Publishers can either be targeted positively (bid requests will be sent only if the publisher is listed in the targeting dimension) or negatively (bid requests will be sent only if the publisher is not listed in the targeting dimension). A maximum of 10,000 publisher IDs can be targeted. Publisher IDs are found in [ads.txt](https://iabtechlab.com/ads-txt/) / [app-ads.txt](https://iabtechlab.com/app-ads-txt/) and in bid requests in the `BidRequest.publisher_id` field on the [Google RTB protocol](https://developers.google.com/authorized-buyers/rtb/downloads/realtime-bidding-proto) or the `BidRequest.site.publisher.id` / `BidRequest.app.publisher.id` field on the [OpenRTB protocol](https://developers.google.com/authorized-buyers/rtb/downloads/openrtb-adx-proto). Publisher IDs will be returned in the order that they were entered.
     */
    publisherTargeting?: Schema$StringTargetingDimension;
    /**
     * Output only. The state of this pretargeting configuration.
     */
    state?: string | null;
    /**
     * The remarketing lists included or excluded in this configuration as defined in UserList.
     */
    userListTargeting?: Schema$NumericTargetingDimension;
    /**
     * The verticals included or excluded in this configuration as defined in https://developers.google.com/authorized-buyers/rtb/downloads/publisher-verticals
     */
    verticalTargeting?: Schema$NumericTargetingDimension;
    /**
     * Targeting on a subset of site inventory. If WEB is listed in included_environments, the specified targeting is applied. A maximum of 50,000 site URLs can be targeted. An unset value for targeting allows all web-based bid requests to be sent. Sites can either be targeting positively (bid requests will be sent only if the destination site is listed in the targeting dimension) or negatively (bid requests will be sent only if the destination site is not listed in the pretargeting configuration).
     */
    webTargeting?: Schema$StringTargetingDimension;
  }
  /**
   * An Open Bidding exchange's connection to a publisher. This is initiated by the publisher for the bidder to review. If approved by the bidder, this means that the bidder agrees to receive bid requests from the publisher.
   */
  export interface Schema$PublisherConnection {
    /**
     * Whether the publisher has been approved by the bidder.
     */
    biddingState?: string | null;
    /**
     * Output only. The time at which the publisher initiated a connection with the bidder (irrespective of if or when the bidder approves it). This is subsequently updated if the publisher revokes and re-initiates the connection.
     */
    createTime?: string | null;
    /**
     * Output only. Publisher display name.
     */
    displayName?: string | null;
    /**
     * Output only. Name of the publisher connection. This follows the pattern `bidders/{bidder\}/publisherConnections/{publisher\}`, where `{bidder\}` represents the account ID of the bidder, and `{publisher\}` is the ads.txt/app-ads.txt publisher ID.
     */
    name?: string | null;
    /**
     * Output only. Whether the publisher is an Ad Manager or AdMob publisher.
     */
    publisherPlatform?: string | null;
  }
  /**
   * A request to stop targeting the provided apps in a specific pretargeting configuration. The pretargeting configuration itself specifies how these apps are targeted. in PretargetingConfig.appTargeting.mobileAppTargeting.
   */
  export interface Schema$RemoveTargetedAppsRequest {
    /**
     * A list of app IDs to stop targeting in the pretargeting configuration. These values will be removed from the list of targeted app IDs in PretargetingConfig.appTargeting.mobileAppTargeting.values.
     */
    appIds?: string[] | null;
  }
  /**
   * A request to stop targeting publishers in a specific configuration. The pretargeting configuration itself specifies how these publishers are targeted in PretargetingConfig.publisherTargeting.
   */
  export interface Schema$RemoveTargetedPublishersRequest {
    /**
     * A list of publisher IDs to stop targeting in the pretargeting configuration. These values will be removed from the list of targeted publisher IDs in PretargetingConfig.publisherTargeting.values. Publishers are identified by their publisher ID from ads.txt / app-ads.txt. See https://iabtechlab.com/ads-txt/ and https://iabtechlab.com/app-ads-txt/ for more details.
     */
    publisherIds?: string[] | null;
  }
  /**
   * A request to stop targeting sites in a specific pretargeting configuration. The pretargeting configuration itself specifies how these sites are targeted in PretargetingConfig.webTargeting.
   */
  export interface Schema$RemoveTargetedSitesRequest {
    /**
     * A list of site URLs to stop targeting in the pretargeting configuration. These values will be removed from the list of targeted URLs in PretargetingConfig.webTargeting.values.
     */
    sites?: string[] | null;
  }
  /**
   * Generic targeting with string values used in app, website and publisher targeting.
   */
  export interface Schema$StringTargetingDimension {
    /**
     * How the items in this list should be targeted.
     */
    targetingMode?: string | null;
    /**
     * The values specified.
     */
    values?: string[] | null;
  }
  /**
   * A request to suspend a pretargeting configuration. Sets the configuration's state to SUSPENDED.
   */
  export interface Schema$SuspendPretargetingConfigRequest {}
  /**
   * The URL-level breakdown for the download size.
   */
  export interface Schema$UrlDownloadSize {
    /**
     * Download size of the URL in kilobytes.
     */
    downloadSizeKb?: number | null;
    /**
     * The normalized URL with query parameters and fragment removed.
     */
    normalizedUrl?: string | null;
  }
  /**
   * Deprecated. This will be removed in October 2023. For more information, see the release notes: https://developers.google.com/authorized-buyers/apis/relnotes#real-time-bidding-api Represents the URL restriction (for the URL captured by the pixel callback) for a user list.
   */
  export interface Schema$UrlRestriction {
    /**
     * End date (if specified) of the URL restriction. End date should be later than the start date for the date range to be valid.
     */
    endDate?: Schema$Date;
    /**
     * The restriction type for the specified URL.
     */
    restrictionType?: string | null;
    /**
     * Start date (if specified) of the URL restriction.
     */
    startDate?: Schema$Date;
    /**
     * Required. The URL to use for applying the restriction on the user list.
     */
    url?: string | null;
  }
  /**
   * Represents an Authorized Buyers user list. Authorized Buyers can create/update/list user lists. Once a user list is created in the system, Authorized Buyers can add users to the user list using the bulk uploader API. Alternatively, users can be added by hosting a tag on the advertiser's page.
   */
  export interface Schema$UserList {
    /**
     * The description for the user list.
     */
    description?: string | null;
    /**
     * Required. Display name of the user list. This must be unique across all user lists for a given account.
     */
    displayName?: string | null;
    /**
     * Required. The number of days a user's cookie stays on the user list. The field must be between 0 and 540 inclusive.
     */
    membershipDurationDays?: string | null;
    /**
     * Output only. Name of the user list that must follow the pattern `buyers/{buyer\}/userLists/{user_list\}`, where `{buyer\}` represents the account ID of the buyer who owns the user list. For a bidder accessing user lists on behalf of a child seat buyer, `{buyer\}` represents the account ID of the child seat buyer. `{user_list\}` is an int64 identifier assigned by Google to uniquely identify a user list.
     */
    name?: string | null;
    /**
     * Output only. The status of the user list. A new user list starts out as open.
     */
    status?: string | null;
    /**
     * Required. Deprecated. This will be removed in October 2023. For more information, see the release notes: https://developers.google.com/authorized-buyers/apis/relnotes#real-time-bidding-api The URL restriction for the user list.
     */
    urlRestriction?: Schema$UrlRestriction;
  }
  /**
   * Video content for a creative.
   */
  export interface Schema$VideoContent {
    /**
     * Output only. Video metadata.
     */
    videoMetadata?: Schema$VideoMetadata;
    /**
     * The URL to fetch a video ad. The URL should return an XML response that conforms to the VAST 2.0, 3.0 or 4.x standard.
     */
    videoUrl?: string | null;
    /**
     * The contents of a VAST document for a video ad. This document should conform to the VAST 2.0, 3.0, or 4.x standard.
     */
    videoVastXml?: string | null;
  }
  /**
   * Video metadata for a creative.
   */
  export interface Schema$VideoMetadata {
    /**
     * The duration of the ad. Can be used to filter the response of the creatives.list method.
     */
    duration?: string | null;
    /**
     * Is this a valid VAST ad? Can be used to filter the response of the creatives.list method.
     */
    isValidVast?: boolean | null;
    /**
     * Is this a VPAID ad? Can be used to filter the response of the creatives.list method.
     */
    isVpaid?: boolean | null;
    /**
     * The list of all media files declared in the VAST. If there are multiple VASTs in a wrapper chain, this includes the media files from the deepest one in the chain.
     */
    mediaFiles?: Schema$MediaFile[];
    /**
     * The minimum duration that the user has to watch before being able to skip this ad. If the field is not set, the ad is not skippable. If the field is set, the ad is skippable. Can be used to filter the response of the creatives.list method.
     */
    skipOffset?: string | null;
    /**
     * The maximum VAST version across all wrapped VAST documents. Can be used to filter the response of the creatives.list method.
     */
    vastVersion?: string | null;
  }
  /**
   * A request to receive push notifications when any of the creatives belonging to the bidder changes status.
   */
  export interface Schema$WatchCreativesRequest {}
  /**
   * A response for the request to receive push notification when a bidder's creatives change status.
   */
  export interface Schema$WatchCreativesResponse {
    /**
     * The Pub/Sub subscription that can be used to pull creative status notifications. This would be of the format `projects/{project_id\}/subscriptions/{subscription_id\}`. Subscription is created with pull delivery. All service accounts belonging to the bidder will have read access to this subscription. Subscriptions that are inactive for more than 90 days will be disabled. Use watchCreatives to re-enable the subscription.
     */
    subscription?: string | null;
    /**
     * The Pub/Sub topic that will be used to publish creative serving status notifications. This would be of the format `projects/{project_id\}/topics/{topic_id\}`.
     */
    topic?: string | null;
  }

  export class Resource$Bidders {
    context: APIRequestContext;
    creatives: Resource$Bidders$Creatives;
    endpoints: Resource$Bidders$Endpoints;
    pretargetingConfigs: Resource$Bidders$Pretargetingconfigs;
    publisherConnections: Resource$Bidders$Publisherconnections;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.creatives = new Resource$Bidders$Creatives(this.context);
      this.endpoints = new Resource$Bidders$Endpoints(this.context);
      this.pretargetingConfigs = new Resource$Bidders$Pretargetingconfigs(
        this.context
      );
      this.publisherConnections = new Resource$Bidders$Publisherconnections(
        this.context
      );
    }

    /**
     * Gets a bidder account by its name.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const realtimebidding = google.realtimebidding('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/realtime-bidding'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await realtimebidding.bidders.get({
     *     // Required. Name of the bidder to get. Format: `bidders/{bidderAccountId\}`
     *     name: 'bidders/my-bidder',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "bypassNonguaranteedDealsPretargeting": false,
     *   //   "cookieMatchingNetworkId": "my_cookieMatchingNetworkId",
     *   //   "cookieMatchingUrl": "my_cookieMatchingUrl",
     *   //   "dealsBillingId": "my_dealsBillingId",
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
      params: Params$Resource$Bidders$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Bidders$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Bidder>>;
    get(
      params: Params$Resource$Bidders$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Bidders$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Bidder>,
      callback: BodyResponseCallback<Schema$Bidder>
    ): void;
    get(
      params: Params$Resource$Bidders$Get,
      callback: BodyResponseCallback<Schema$Bidder>
    ): void;
    get(callback: BodyResponseCallback<Schema$Bidder>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Bidders$Get
        | BodyResponseCallback<Schema$Bidder>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Bidder>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Bidder>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Bidder>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Bidders$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Bidders$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://realtimebidding.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Bidder>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Bidder>(parameters);
      }
    }

    /**
     * Lists all the bidder accounts that belong to the caller.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const realtimebidding = google.realtimebidding('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/realtime-bidding'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await realtimebidding.bidders.list({
     *     // The maximum number of bidders to return. If unspecified, at most 100 bidders will be returned. The maximum value is 500; values above 500 will be coerced to 500.
     *     pageSize: 'placeholder-value',
     *     // A token identifying a page of results the server should return. This value is received from a previous `ListBidders` call in ListBiddersResponse.nextPageToken.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "bidders": [],
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
      params: Params$Resource$Bidders$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Bidders$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListBiddersResponse>>;
    list(
      params: Params$Resource$Bidders$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Bidders$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListBiddersResponse>,
      callback: BodyResponseCallback<Schema$ListBiddersResponse>
    ): void;
    list(
      params: Params$Resource$Bidders$List,
      callback: BodyResponseCallback<Schema$ListBiddersResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListBiddersResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Bidders$List
        | BodyResponseCallback<Schema$ListBiddersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListBiddersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListBiddersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListBiddersResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Bidders$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Bidders$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://realtimebidding.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/bidders').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListBiddersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListBiddersResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Bidders$Get extends StandardParameters {
    /**
     * Required. Name of the bidder to get. Format: `bidders/{bidderAccountId\}`
     */
    name?: string;
  }
  export interface Params$Resource$Bidders$List extends StandardParameters {
    /**
     * The maximum number of bidders to return. If unspecified, at most 100 bidders will be returned. The maximum value is 500; values above 500 will be coerced to 500.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return. This value is received from a previous `ListBidders` call in ListBiddersResponse.nextPageToken.
     */
    pageToken?: string;
  }

  export class Resource$Bidders$Creatives {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists creatives as they are at the time of the initial request. This call may take multiple hours to complete. For large, paginated requests, this method returns a snapshot of creatives at the time of request for the first page. `lastStatusUpdate` and `creativeServingDecision` may be outdated for creatives on sequential pages. We recommend [Google Cloud Pub/Sub](//cloud.google.com/pubsub/docs/overview) to view the latest status.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const realtimebidding = google.realtimebidding('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/realtime-bidding'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await realtimebidding.bidders.creatives.list({
     *     // Query string to filter creatives. If no filter is specified, all active creatives will be returned. Example: 'accountId=12345 AND (dealsStatus:DISAPPROVED AND disapprovalReason:UNACCEPTABLE_CONTENT) OR declaredAttributes:IS_COOKIE_TARGETED'
     *     filter: 'placeholder-value',
     *     // Requested page size. The server may return fewer creatives than requested (due to timeout constraint) even if more are available through another call. If unspecified, server will pick an appropriate default. Acceptable values are 1 to 1000, inclusive.
     *     pageSize: 'placeholder-value',
     *     // A token identifying a page of results the server should return. Typically, this is the value of ListCreativesResponse.nextPageToken returned from the previous call to the 'ListCreatives' method. Page tokens for continued pages are valid for up to five hours, counting from the call to 'ListCreatives' for the first page.
     *     pageToken: 'placeholder-value',
     *     // Required. Name of the parent buyer that owns the creatives. The pattern for this resource is either `buyers/{buyerAccountId\}` or `bidders/{bidderAccountId\}`. For `buyers/{buyerAccountId\}`, the `buyerAccountId` can be one of the following: 1. The ID of the buyer that is accessing their own creatives. 2. The ID of the child seat buyer under a bidder account. So for listing creatives pertaining to the child seat buyer (`456`) under bidder account (`123`), you would use the pattern: `buyers/456`. 3. The ID of the bidder itself. So for listing creatives pertaining to bidder (`123`), you would use `buyers/123`. If you want to access all creatives pertaining to both the bidder and all of its child seat accounts, you would use `bidders/{bidderAccountId\}`, for example, for all creatives pertaining to bidder (`123`), use `bidders/123`.
     *     parent: 'bidders/my-bidder',
     *     // Controls the amount of information included in the response. By default only creativeServingDecision is included. To retrieve the entire creative resource (including the declared fields and the creative content) specify the view as "FULL".
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "creatives": [],
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
      params: Params$Resource$Bidders$Creatives$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Bidders$Creatives$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListCreativesResponse>>;
    list(
      params: Params$Resource$Bidders$Creatives$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Bidders$Creatives$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListCreativesResponse>,
      callback: BodyResponseCallback<Schema$ListCreativesResponse>
    ): void;
    list(
      params: Params$Resource$Bidders$Creatives$List,
      callback: BodyResponseCallback<Schema$ListCreativesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListCreativesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Bidders$Creatives$List
        | BodyResponseCallback<Schema$ListCreativesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListCreativesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListCreativesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListCreativesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Bidders$Creatives$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Bidders$Creatives$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://realtimebidding.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/creatives').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListCreativesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListCreativesResponse>(parameters);
      }
    }

    /**
     * Watches all creatives pertaining to a bidder. It is sufficient to invoke this endpoint once per bidder. A Pub/Sub topic will be created and notifications will be pushed to the topic when any of the bidder's creatives change status. All of the bidder's service accounts will have access to read from the topic. Subsequent invocations of this method will return the existing Pub/Sub configuration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const realtimebidding = google.realtimebidding('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/realtime-bidding'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await realtimebidding.bidders.creatives.watch({
     *     // Required. To watch all creatives pertaining to the bidder and all its child seat accounts, the bidder must follow the pattern `bidders/{bidderAccountId\}`.
     *     parent: 'bidders/my-bidder',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "subscription": "my_subscription",
     *   //   "topic": "my_topic"
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
    watch(
      params: Params$Resource$Bidders$Creatives$Watch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    watch(
      params?: Params$Resource$Bidders$Creatives$Watch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$WatchCreativesResponse>>;
    watch(
      params: Params$Resource$Bidders$Creatives$Watch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    watch(
      params: Params$Resource$Bidders$Creatives$Watch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$WatchCreativesResponse>,
      callback: BodyResponseCallback<Schema$WatchCreativesResponse>
    ): void;
    watch(
      params: Params$Resource$Bidders$Creatives$Watch,
      callback: BodyResponseCallback<Schema$WatchCreativesResponse>
    ): void;
    watch(callback: BodyResponseCallback<Schema$WatchCreativesResponse>): void;
    watch(
      paramsOrCallback?:
        | Params$Resource$Bidders$Creatives$Watch
        | BodyResponseCallback<Schema$WatchCreativesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WatchCreativesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WatchCreativesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$WatchCreativesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Bidders$Creatives$Watch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Bidders$Creatives$Watch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://realtimebidding.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/creatives:watch').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$WatchCreativesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WatchCreativesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Bidders$Creatives$List
    extends StandardParameters {
    /**
     * Query string to filter creatives. If no filter is specified, all active creatives will be returned. Example: 'accountId=12345 AND (dealsStatus:DISAPPROVED AND disapprovalReason:UNACCEPTABLE_CONTENT) OR declaredAttributes:IS_COOKIE_TARGETED'
     */
    filter?: string;
    /**
     * Requested page size. The server may return fewer creatives than requested (due to timeout constraint) even if more are available through another call. If unspecified, server will pick an appropriate default. Acceptable values are 1 to 1000, inclusive.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return. Typically, this is the value of ListCreativesResponse.nextPageToken returned from the previous call to the 'ListCreatives' method. Page tokens for continued pages are valid for up to five hours, counting from the call to 'ListCreatives' for the first page.
     */
    pageToken?: string;
    /**
     * Required. Name of the parent buyer that owns the creatives. The pattern for this resource is either `buyers/{buyerAccountId\}` or `bidders/{bidderAccountId\}`. For `buyers/{buyerAccountId\}`, the `buyerAccountId` can be one of the following: 1. The ID of the buyer that is accessing their own creatives. 2. The ID of the child seat buyer under a bidder account. So for listing creatives pertaining to the child seat buyer (`456`) under bidder account (`123`), you would use the pattern: `buyers/456`. 3. The ID of the bidder itself. So for listing creatives pertaining to bidder (`123`), you would use `buyers/123`. If you want to access all creatives pertaining to both the bidder and all of its child seat accounts, you would use `bidders/{bidderAccountId\}`, for example, for all creatives pertaining to bidder (`123`), use `bidders/123`.
     */
    parent?: string;
    /**
     * Controls the amount of information included in the response. By default only creativeServingDecision is included. To retrieve the entire creative resource (including the declared fields and the creative content) specify the view as "FULL".
     */
    view?: string;
  }
  export interface Params$Resource$Bidders$Creatives$Watch
    extends StandardParameters {
    /**
     * Required. To watch all creatives pertaining to the bidder and all its child seat accounts, the bidder must follow the pattern `bidders/{bidderAccountId\}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WatchCreativesRequest;
  }

  export class Resource$Bidders$Endpoints {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets a bidder endpoint by its name.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const realtimebidding = google.realtimebidding('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/realtime-bidding'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await realtimebidding.bidders.endpoints.get({
     *     // Required. Name of the bidder endpoint to get. Format: `bidders/{bidderAccountId\}/endpoints/{endpointId\}`
     *     name: 'bidders/my-bidder/endpoints/my-endpoint',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "bidProtocol": "my_bidProtocol",
     *   //   "maximumQps": "my_maximumQps",
     *   //   "name": "my_name",
     *   //   "tradingLocation": "my_tradingLocation",
     *   //   "url": "my_url"
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
      params: Params$Resource$Bidders$Endpoints$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Bidders$Endpoints$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Endpoint>>;
    get(
      params: Params$Resource$Bidders$Endpoints$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Bidders$Endpoints$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Endpoint>,
      callback: BodyResponseCallback<Schema$Endpoint>
    ): void;
    get(
      params: Params$Resource$Bidders$Endpoints$Get,
      callback: BodyResponseCallback<Schema$Endpoint>
    ): void;
    get(callback: BodyResponseCallback<Schema$Endpoint>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Bidders$Endpoints$Get
        | BodyResponseCallback<Schema$Endpoint>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Endpoint>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Endpoint>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Endpoint>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Bidders$Endpoints$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Bidders$Endpoints$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://realtimebidding.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Endpoint>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Endpoint>(parameters);
      }
    }

    /**
     * Lists all the bidder's endpoints.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const realtimebidding = google.realtimebidding('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/realtime-bidding'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await realtimebidding.bidders.endpoints.list({
     *     // The maximum number of endpoints to return. If unspecified, at most 100 endpoints will be returned. The maximum value is 500; values above 500 will be coerced to 500.
     *     pageSize: 'placeholder-value',
     *     // A token identifying a page of results the server should return. This value is received from a previous `ListEndpoints` call in ListEndpointsResponse.nextPageToken.
     *     pageToken: 'placeholder-value',
     *     // Required. Name of the bidder whose endpoints will be listed. Format: `bidders/{bidderAccountId\}`
     *     parent: 'bidders/my-bidder',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "endpoints": [],
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
      params: Params$Resource$Bidders$Endpoints$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Bidders$Endpoints$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListEndpointsResponse>>;
    list(
      params: Params$Resource$Bidders$Endpoints$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Bidders$Endpoints$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListEndpointsResponse>,
      callback: BodyResponseCallback<Schema$ListEndpointsResponse>
    ): void;
    list(
      params: Params$Resource$Bidders$Endpoints$List,
      callback: BodyResponseCallback<Schema$ListEndpointsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListEndpointsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Bidders$Endpoints$List
        | BodyResponseCallback<Schema$ListEndpointsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListEndpointsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListEndpointsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListEndpointsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Bidders$Endpoints$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Bidders$Endpoints$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://realtimebidding.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/endpoints').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListEndpointsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListEndpointsResponse>(parameters);
      }
    }

    /**
     * Updates a bidder's endpoint.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const realtimebidding = google.realtimebidding('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/realtime-bidding'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await realtimebidding.bidders.endpoints.patch({
     *     // Output only. Name of the endpoint resource that must follow the pattern `bidders/{bidderAccountId\}/endpoints/{endpointId\}`, where {bidderAccountId\} is the account ID of the bidder who operates this endpoint, and {endpointId\} is a unique ID assigned by the server.
     *     name: 'bidders/my-bidder/endpoints/my-endpoint',
     *     // Field mask to use for partial in-place updates.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "bidProtocol": "my_bidProtocol",
     *       //   "maximumQps": "my_maximumQps",
     *       //   "name": "my_name",
     *       //   "tradingLocation": "my_tradingLocation",
     *       //   "url": "my_url"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "bidProtocol": "my_bidProtocol",
     *   //   "maximumQps": "my_maximumQps",
     *   //   "name": "my_name",
     *   //   "tradingLocation": "my_tradingLocation",
     *   //   "url": "my_url"
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
    patch(
      params: Params$Resource$Bidders$Endpoints$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Bidders$Endpoints$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Endpoint>>;
    patch(
      params: Params$Resource$Bidders$Endpoints$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Bidders$Endpoints$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Endpoint>,
      callback: BodyResponseCallback<Schema$Endpoint>
    ): void;
    patch(
      params: Params$Resource$Bidders$Endpoints$Patch,
      callback: BodyResponseCallback<Schema$Endpoint>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Endpoint>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Bidders$Endpoints$Patch
        | BodyResponseCallback<Schema$Endpoint>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Endpoint>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Endpoint>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Endpoint>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Bidders$Endpoints$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Bidders$Endpoints$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://realtimebidding.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Endpoint>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Endpoint>(parameters);
      }
    }
  }

  export interface Params$Resource$Bidders$Endpoints$Get
    extends StandardParameters {
    /**
     * Required. Name of the bidder endpoint to get. Format: `bidders/{bidderAccountId\}/endpoints/{endpointId\}`
     */
    name?: string;
  }
  export interface Params$Resource$Bidders$Endpoints$List
    extends StandardParameters {
    /**
     * The maximum number of endpoints to return. If unspecified, at most 100 endpoints will be returned. The maximum value is 500; values above 500 will be coerced to 500.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return. This value is received from a previous `ListEndpoints` call in ListEndpointsResponse.nextPageToken.
     */
    pageToken?: string;
    /**
     * Required. Name of the bidder whose endpoints will be listed. Format: `bidders/{bidderAccountId\}`
     */
    parent?: string;
  }
  export interface Params$Resource$Bidders$Endpoints$Patch
    extends StandardParameters {
    /**
     * Output only. Name of the endpoint resource that must follow the pattern `bidders/{bidderAccountId\}/endpoints/{endpointId\}`, where {bidderAccountId\} is the account ID of the bidder who operates this endpoint, and {endpointId\} is a unique ID assigned by the server.
     */
    name?: string;
    /**
     * Field mask to use for partial in-place updates.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Endpoint;
  }

  export class Resource$Bidders$Pretargetingconfigs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Activates a pretargeting configuration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const realtimebidding = google.realtimebidding('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/realtime-bidding'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await realtimebidding.bidders.pretargetingConfigs.activate({
     *     // Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId\}/pretargetingConfig/{configId\}
     *     name: 'bidders/my-bidder/pretargetingConfigs/my-pretargetingConfig',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "allowedUserTargetingModes": [],
     *   //   "appTargeting": {},
     *   //   "billingId": "my_billingId",
     *   //   "displayName": "my_displayName",
     *   //   "excludedContentLabelIds": [],
     *   //   "geoTargeting": {},
     *   //   "includedCreativeDimensions": [],
     *   //   "includedEnvironments": [],
     *   //   "includedFormats": [],
     *   //   "includedLanguages": [],
     *   //   "includedMobileOperatingSystemIds": [],
     *   //   "includedPlatforms": [],
     *   //   "includedUserIdTypes": [],
     *   //   "interstitialTargeting": "my_interstitialTargeting",
     *   //   "invalidGeoIds": [],
     *   //   "maximumQps": "my_maximumQps",
     *   //   "minimumViewabilityDecile": 0,
     *   //   "name": "my_name",
     *   //   "publisherTargeting": {},
     *   //   "state": "my_state",
     *   //   "userListTargeting": {},
     *   //   "verticalTargeting": {},
     *   //   "webTargeting": {}
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
    activate(
      params: Params$Resource$Bidders$Pretargetingconfigs$Activate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    activate(
      params?: Params$Resource$Bidders$Pretargetingconfigs$Activate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PretargetingConfig>>;
    activate(
      params: Params$Resource$Bidders$Pretargetingconfigs$Activate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    activate(
      params: Params$Resource$Bidders$Pretargetingconfigs$Activate,
      options: MethodOptions | BodyResponseCallback<Schema$PretargetingConfig>,
      callback: BodyResponseCallback<Schema$PretargetingConfig>
    ): void;
    activate(
      params: Params$Resource$Bidders$Pretargetingconfigs$Activate,
      callback: BodyResponseCallback<Schema$PretargetingConfig>
    ): void;
    activate(callback: BodyResponseCallback<Schema$PretargetingConfig>): void;
    activate(
      paramsOrCallback?:
        | Params$Resource$Bidders$Pretargetingconfigs$Activate
        | BodyResponseCallback<Schema$PretargetingConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PretargetingConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PretargetingConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PretargetingConfig>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Bidders$Pretargetingconfigs$Activate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Bidders$Pretargetingconfigs$Activate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://realtimebidding.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:activate').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PretargetingConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PretargetingConfig>(parameters);
      }
    }

    /**
     * Adds targeted apps to the pretargeting configuration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const realtimebidding = google.realtimebidding('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/realtime-bidding'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await realtimebidding.bidders.pretargetingConfigs.addTargetedApps(
     *     {
     *       // Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId\}/pretargetingConfig/{configId\}
     *       pretargetingConfig:
     *         'bidders/my-bidder/pretargetingConfigs/my-pretargetingConfig',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "appIds": [],
     *         //   "targetingMode": "my_targetingMode"
     *         // }
     *       },
     *     },
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "allowedUserTargetingModes": [],
     *   //   "appTargeting": {},
     *   //   "billingId": "my_billingId",
     *   //   "displayName": "my_displayName",
     *   //   "excludedContentLabelIds": [],
     *   //   "geoTargeting": {},
     *   //   "includedCreativeDimensions": [],
     *   //   "includedEnvironments": [],
     *   //   "includedFormats": [],
     *   //   "includedLanguages": [],
     *   //   "includedMobileOperatingSystemIds": [],
     *   //   "includedPlatforms": [],
     *   //   "includedUserIdTypes": [],
     *   //   "interstitialTargeting": "my_interstitialTargeting",
     *   //   "invalidGeoIds": [],
     *   //   "maximumQps": "my_maximumQps",
     *   //   "minimumViewabilityDecile": 0,
     *   //   "name": "my_name",
     *   //   "publisherTargeting": {},
     *   //   "state": "my_state",
     *   //   "userListTargeting": {},
     *   //   "verticalTargeting": {},
     *   //   "webTargeting": {}
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
    addTargetedApps(
      params: Params$Resource$Bidders$Pretargetingconfigs$Addtargetedapps,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    addTargetedApps(
      params?: Params$Resource$Bidders$Pretargetingconfigs$Addtargetedapps,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PretargetingConfig>>;
    addTargetedApps(
      params: Params$Resource$Bidders$Pretargetingconfigs$Addtargetedapps,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    addTargetedApps(
      params: Params$Resource$Bidders$Pretargetingconfigs$Addtargetedapps,
      options: MethodOptions | BodyResponseCallback<Schema$PretargetingConfig>,
      callback: BodyResponseCallback<Schema$PretargetingConfig>
    ): void;
    addTargetedApps(
      params: Params$Resource$Bidders$Pretargetingconfigs$Addtargetedapps,
      callback: BodyResponseCallback<Schema$PretargetingConfig>
    ): void;
    addTargetedApps(
      callback: BodyResponseCallback<Schema$PretargetingConfig>
    ): void;
    addTargetedApps(
      paramsOrCallback?:
        | Params$Resource$Bidders$Pretargetingconfigs$Addtargetedapps
        | BodyResponseCallback<Schema$PretargetingConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PretargetingConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PretargetingConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PretargetingConfig>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Bidders$Pretargetingconfigs$Addtargetedapps;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Bidders$Pretargetingconfigs$Addtargetedapps;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://realtimebidding.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+pretargetingConfig}:addTargetedApps'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['pretargetingConfig'],
        pathParams: ['pretargetingConfig'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PretargetingConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PretargetingConfig>(parameters);
      }
    }

    /**
     * Adds targeted publishers to the pretargeting config.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const realtimebidding = google.realtimebidding('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/realtime-bidding'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await realtimebidding.bidders.pretargetingConfigs.addTargetedPublishers({
     *       // Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId\}/pretargetingConfig/{configId\}
     *       pretargetingConfig:
     *         'bidders/my-bidder/pretargetingConfigs/my-pretargetingConfig',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "publisherIds": [],
     *         //   "targetingMode": "my_targetingMode"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "allowedUserTargetingModes": [],
     *   //   "appTargeting": {},
     *   //   "billingId": "my_billingId",
     *   //   "displayName": "my_displayName",
     *   //   "excludedContentLabelIds": [],
     *   //   "geoTargeting": {},
     *   //   "includedCreativeDimensions": [],
     *   //   "includedEnvironments": [],
     *   //   "includedFormats": [],
     *   //   "includedLanguages": [],
     *   //   "includedMobileOperatingSystemIds": [],
     *   //   "includedPlatforms": [],
     *   //   "includedUserIdTypes": [],
     *   //   "interstitialTargeting": "my_interstitialTargeting",
     *   //   "invalidGeoIds": [],
     *   //   "maximumQps": "my_maximumQps",
     *   //   "minimumViewabilityDecile": 0,
     *   //   "name": "my_name",
     *   //   "publisherTargeting": {},
     *   //   "state": "my_state",
     *   //   "userListTargeting": {},
     *   //   "verticalTargeting": {},
     *   //   "webTargeting": {}
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
    addTargetedPublishers(
      params: Params$Resource$Bidders$Pretargetingconfigs$Addtargetedpublishers,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    addTargetedPublishers(
      params?: Params$Resource$Bidders$Pretargetingconfigs$Addtargetedpublishers,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PretargetingConfig>>;
    addTargetedPublishers(
      params: Params$Resource$Bidders$Pretargetingconfigs$Addtargetedpublishers,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    addTargetedPublishers(
      params: Params$Resource$Bidders$Pretargetingconfigs$Addtargetedpublishers,
      options: MethodOptions | BodyResponseCallback<Schema$PretargetingConfig>,
      callback: BodyResponseCallback<Schema$PretargetingConfig>
    ): void;
    addTargetedPublishers(
      params: Params$Resource$Bidders$Pretargetingconfigs$Addtargetedpublishers,
      callback: BodyResponseCallback<Schema$PretargetingConfig>
    ): void;
    addTargetedPublishers(
      callback: BodyResponseCallback<Schema$PretargetingConfig>
    ): void;
    addTargetedPublishers(
      paramsOrCallback?:
        | Params$Resource$Bidders$Pretargetingconfigs$Addtargetedpublishers
        | BodyResponseCallback<Schema$PretargetingConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PretargetingConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PretargetingConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PretargetingConfig>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Bidders$Pretargetingconfigs$Addtargetedpublishers;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Bidders$Pretargetingconfigs$Addtargetedpublishers;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://realtimebidding.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+pretargetingConfig}:addTargetedPublishers'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['pretargetingConfig'],
        pathParams: ['pretargetingConfig'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PretargetingConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PretargetingConfig>(parameters);
      }
    }

    /**
     * Adds targeted sites to the pretargeting configuration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const realtimebidding = google.realtimebidding('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/realtime-bidding'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await realtimebidding.bidders.pretargetingConfigs.addTargetedSites({
     *       // Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId\}/pretargetingConfig/{configId\}
     *       pretargetingConfig:
     *         'bidders/my-bidder/pretargetingConfigs/my-pretargetingConfig',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "sites": [],
     *         //   "targetingMode": "my_targetingMode"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "allowedUserTargetingModes": [],
     *   //   "appTargeting": {},
     *   //   "billingId": "my_billingId",
     *   //   "displayName": "my_displayName",
     *   //   "excludedContentLabelIds": [],
     *   //   "geoTargeting": {},
     *   //   "includedCreativeDimensions": [],
     *   //   "includedEnvironments": [],
     *   //   "includedFormats": [],
     *   //   "includedLanguages": [],
     *   //   "includedMobileOperatingSystemIds": [],
     *   //   "includedPlatforms": [],
     *   //   "includedUserIdTypes": [],
     *   //   "interstitialTargeting": "my_interstitialTargeting",
     *   //   "invalidGeoIds": [],
     *   //   "maximumQps": "my_maximumQps",
     *   //   "minimumViewabilityDecile": 0,
     *   //   "name": "my_name",
     *   //   "publisherTargeting": {},
     *   //   "state": "my_state",
     *   //   "userListTargeting": {},
     *   //   "verticalTargeting": {},
     *   //   "webTargeting": {}
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
    addTargetedSites(
      params: Params$Resource$Bidders$Pretargetingconfigs$Addtargetedsites,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    addTargetedSites(
      params?: Params$Resource$Bidders$Pretargetingconfigs$Addtargetedsites,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PretargetingConfig>>;
    addTargetedSites(
      params: Params$Resource$Bidders$Pretargetingconfigs$Addtargetedsites,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    addTargetedSites(
      params: Params$Resource$Bidders$Pretargetingconfigs$Addtargetedsites,
      options: MethodOptions | BodyResponseCallback<Schema$PretargetingConfig>,
      callback: BodyResponseCallback<Schema$PretargetingConfig>
    ): void;
    addTargetedSites(
      params: Params$Resource$Bidders$Pretargetingconfigs$Addtargetedsites,
      callback: BodyResponseCallback<Schema$PretargetingConfig>
    ): void;
    addTargetedSites(
      callback: BodyResponseCallback<Schema$PretargetingConfig>
    ): void;
    addTargetedSites(
      paramsOrCallback?:
        | Params$Resource$Bidders$Pretargetingconfigs$Addtargetedsites
        | BodyResponseCallback<Schema$PretargetingConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PretargetingConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PretargetingConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PretargetingConfig>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Bidders$Pretargetingconfigs$Addtargetedsites;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Bidders$Pretargetingconfigs$Addtargetedsites;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://realtimebidding.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+pretargetingConfig}:addTargetedSites'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['pretargetingConfig'],
        pathParams: ['pretargetingConfig'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PretargetingConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PretargetingConfig>(parameters);
      }
    }

    /**
     * Creates a pretargeting configuration. A pretargeting configuration's state (PretargetingConfig.state) is active upon creation, and it will start to affect traffic shortly after. A bidder may create a maximum of 10 pretargeting configurations. Attempts to exceed this maximum results in a 400 bad request error.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const realtimebidding = google.realtimebidding('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/realtime-bidding'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await realtimebidding.bidders.pretargetingConfigs.create({
     *     // Required. Name of the bidder to create the pretargeting configuration for. Format: bidders/{bidderAccountId\}
     *     parent: 'bidders/my-bidder',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "allowedUserTargetingModes": [],
     *       //   "appTargeting": {},
     *       //   "billingId": "my_billingId",
     *       //   "displayName": "my_displayName",
     *       //   "excludedContentLabelIds": [],
     *       //   "geoTargeting": {},
     *       //   "includedCreativeDimensions": [],
     *       //   "includedEnvironments": [],
     *       //   "includedFormats": [],
     *       //   "includedLanguages": [],
     *       //   "includedMobileOperatingSystemIds": [],
     *       //   "includedPlatforms": [],
     *       //   "includedUserIdTypes": [],
     *       //   "interstitialTargeting": "my_interstitialTargeting",
     *       //   "invalidGeoIds": [],
     *       //   "maximumQps": "my_maximumQps",
     *       //   "minimumViewabilityDecile": 0,
     *       //   "name": "my_name",
     *       //   "publisherTargeting": {},
     *       //   "state": "my_state",
     *       //   "userListTargeting": {},
     *       //   "verticalTargeting": {},
     *       //   "webTargeting": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "allowedUserTargetingModes": [],
     *   //   "appTargeting": {},
     *   //   "billingId": "my_billingId",
     *   //   "displayName": "my_displayName",
     *   //   "excludedContentLabelIds": [],
     *   //   "geoTargeting": {},
     *   //   "includedCreativeDimensions": [],
     *   //   "includedEnvironments": [],
     *   //   "includedFormats": [],
     *   //   "includedLanguages": [],
     *   //   "includedMobileOperatingSystemIds": [],
     *   //   "includedPlatforms": [],
     *   //   "includedUserIdTypes": [],
     *   //   "interstitialTargeting": "my_interstitialTargeting",
     *   //   "invalidGeoIds": [],
     *   //   "maximumQps": "my_maximumQps",
     *   //   "minimumViewabilityDecile": 0,
     *   //   "name": "my_name",
     *   //   "publisherTargeting": {},
     *   //   "state": "my_state",
     *   //   "userListTargeting": {},
     *   //   "verticalTargeting": {},
     *   //   "webTargeting": {}
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
    create(
      params: Params$Resource$Bidders$Pretargetingconfigs$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Bidders$Pretargetingconfigs$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PretargetingConfig>>;
    create(
      params: Params$Resource$Bidders$Pretargetingconfigs$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Bidders$Pretargetingconfigs$Create,
      options: MethodOptions | BodyResponseCallback<Schema$PretargetingConfig>,
      callback: BodyResponseCallback<Schema$PretargetingConfig>
    ): void;
    create(
      params: Params$Resource$Bidders$Pretargetingconfigs$Create,
      callback: BodyResponseCallback<Schema$PretargetingConfig>
    ): void;
    create(callback: BodyResponseCallback<Schema$PretargetingConfig>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Bidders$Pretargetingconfigs$Create
        | BodyResponseCallback<Schema$PretargetingConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PretargetingConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PretargetingConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PretargetingConfig>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Bidders$Pretargetingconfigs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Bidders$Pretargetingconfigs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://realtimebidding.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/pretargetingConfigs').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PretargetingConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PretargetingConfig>(parameters);
      }
    }

    /**
     * Deletes a pretargeting configuration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const realtimebidding = google.realtimebidding('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/realtime-bidding'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await realtimebidding.bidders.pretargetingConfigs.delete({
     *     // Required. The name of the pretargeting configuration to delete. Format: bidders/{bidderAccountId\}/pretargetingConfig/{configId\}
     *     name: 'bidders/my-bidder/pretargetingConfigs/my-pretargetingConfig',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
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
      params: Params$Resource$Bidders$Pretargetingconfigs$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Bidders$Pretargetingconfigs$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Bidders$Pretargetingconfigs$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Bidders$Pretargetingconfigs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Bidders$Pretargetingconfigs$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Bidders$Pretargetingconfigs$Delete
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Bidders$Pretargetingconfigs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Bidders$Pretargetingconfigs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://realtimebidding.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
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
     * Gets a pretargeting configuration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const realtimebidding = google.realtimebidding('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/realtime-bidding'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await realtimebidding.bidders.pretargetingConfigs.get({
     *     // Required. Name of the pretargeting configuration to get. Format: bidders/{bidderAccountId\}/pretargetingConfig/{configId\}
     *     name: 'bidders/my-bidder/pretargetingConfigs/my-pretargetingConfig',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "allowedUserTargetingModes": [],
     *   //   "appTargeting": {},
     *   //   "billingId": "my_billingId",
     *   //   "displayName": "my_displayName",
     *   //   "excludedContentLabelIds": [],
     *   //   "geoTargeting": {},
     *   //   "includedCreativeDimensions": [],
     *   //   "includedEnvironments": [],
     *   //   "includedFormats": [],
     *   //   "includedLanguages": [],
     *   //   "includedMobileOperatingSystemIds": [],
     *   //   "includedPlatforms": [],
     *   //   "includedUserIdTypes": [],
     *   //   "interstitialTargeting": "my_interstitialTargeting",
     *   //   "invalidGeoIds": [],
     *   //   "maximumQps": "my_maximumQps",
     *   //   "minimumViewabilityDecile": 0,
     *   //   "name": "my_name",
     *   //   "publisherTargeting": {},
     *   //   "state": "my_state",
     *   //   "userListTargeting": {},
     *   //   "verticalTargeting": {},
     *   //   "webTargeting": {}
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
      params: Params$Resource$Bidders$Pretargetingconfigs$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Bidders$Pretargetingconfigs$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PretargetingConfig>>;
    get(
      params: Params$Resource$Bidders$Pretargetingconfigs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Bidders$Pretargetingconfigs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$PretargetingConfig>,
      callback: BodyResponseCallback<Schema$PretargetingConfig>
    ): void;
    get(
      params: Params$Resource$Bidders$Pretargetingconfigs$Get,
      callback: BodyResponseCallback<Schema$PretargetingConfig>
    ): void;
    get(callback: BodyResponseCallback<Schema$PretargetingConfig>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Bidders$Pretargetingconfigs$Get
        | BodyResponseCallback<Schema$PretargetingConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PretargetingConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PretargetingConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PretargetingConfig>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Bidders$Pretargetingconfigs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Bidders$Pretargetingconfigs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://realtimebidding.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PretargetingConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PretargetingConfig>(parameters);
      }
    }

    /**
     * Lists all pretargeting configurations for a single bidder.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const realtimebidding = google.realtimebidding('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/realtime-bidding'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await realtimebidding.bidders.pretargetingConfigs.list({
     *     // The maximum number of pretargeting configurations to return. If unspecified, at most 10 pretargeting configurations will be returned. The maximum value is 100; values above 100 will be coerced to 100.
     *     pageSize: 'placeholder-value',
     *     // A token identifying a page of results the server should return. This value is received from a previous `ListPretargetingConfigs` call in ListPretargetingConfigsResponse.nextPageToken.
     *     pageToken: 'placeholder-value',
     *     // Required. Name of the bidder whose pretargeting configurations will be listed. Format: bidders/{bidderAccountId\}
     *     parent: 'bidders/my-bidder',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "pretargetingConfigs": []
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
      params: Params$Resource$Bidders$Pretargetingconfigs$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Bidders$Pretargetingconfigs$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListPretargetingConfigsResponse>>;
    list(
      params: Params$Resource$Bidders$Pretargetingconfigs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Bidders$Pretargetingconfigs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListPretargetingConfigsResponse>,
      callback: BodyResponseCallback<Schema$ListPretargetingConfigsResponse>
    ): void;
    list(
      params: Params$Resource$Bidders$Pretargetingconfigs$List,
      callback: BodyResponseCallback<Schema$ListPretargetingConfigsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListPretargetingConfigsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Bidders$Pretargetingconfigs$List
        | BodyResponseCallback<Schema$ListPretargetingConfigsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListPretargetingConfigsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListPretargetingConfigsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListPretargetingConfigsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Bidders$Pretargetingconfigs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Bidders$Pretargetingconfigs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://realtimebidding.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/pretargetingConfigs').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListPretargetingConfigsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListPretargetingConfigsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a pretargeting configuration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const realtimebidding = google.realtimebidding('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/realtime-bidding'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await realtimebidding.bidders.pretargetingConfigs.patch({
     *     // Output only. Name of the pretargeting configuration that must follow the pattern `bidders/{bidder_account_id\}/pretargetingConfigs/{config_id\}`
     *     name: 'bidders/my-bidder/pretargetingConfigs/my-pretargetingConfig',
     *     // Field mask to use for partial in-place updates.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "allowedUserTargetingModes": [],
     *       //   "appTargeting": {},
     *       //   "billingId": "my_billingId",
     *       //   "displayName": "my_displayName",
     *       //   "excludedContentLabelIds": [],
     *       //   "geoTargeting": {},
     *       //   "includedCreativeDimensions": [],
     *       //   "includedEnvironments": [],
     *       //   "includedFormats": [],
     *       //   "includedLanguages": [],
     *       //   "includedMobileOperatingSystemIds": [],
     *       //   "includedPlatforms": [],
     *       //   "includedUserIdTypes": [],
     *       //   "interstitialTargeting": "my_interstitialTargeting",
     *       //   "invalidGeoIds": [],
     *       //   "maximumQps": "my_maximumQps",
     *       //   "minimumViewabilityDecile": 0,
     *       //   "name": "my_name",
     *       //   "publisherTargeting": {},
     *       //   "state": "my_state",
     *       //   "userListTargeting": {},
     *       //   "verticalTargeting": {},
     *       //   "webTargeting": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "allowedUserTargetingModes": [],
     *   //   "appTargeting": {},
     *   //   "billingId": "my_billingId",
     *   //   "displayName": "my_displayName",
     *   //   "excludedContentLabelIds": [],
     *   //   "geoTargeting": {},
     *   //   "includedCreativeDimensions": [],
     *   //   "includedEnvironments": [],
     *   //   "includedFormats": [],
     *   //   "includedLanguages": [],
     *   //   "includedMobileOperatingSystemIds": [],
     *   //   "includedPlatforms": [],
     *   //   "includedUserIdTypes": [],
     *   //   "interstitialTargeting": "my_interstitialTargeting",
     *   //   "invalidGeoIds": [],
     *   //   "maximumQps": "my_maximumQps",
     *   //   "minimumViewabilityDecile": 0,
     *   //   "name": "my_name",
     *   //   "publisherTargeting": {},
     *   //   "state": "my_state",
     *   //   "userListTargeting": {},
     *   //   "verticalTargeting": {},
     *   //   "webTargeting": {}
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
    patch(
      params: Params$Resource$Bidders$Pretargetingconfigs$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Bidders$Pretargetingconfigs$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PretargetingConfig>>;
    patch(
      params: Params$Resource$Bidders$Pretargetingconfigs$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Bidders$Pretargetingconfigs$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$PretargetingConfig>,
      callback: BodyResponseCallback<Schema$PretargetingConfig>
    ): void;
    patch(
      params: Params$Resource$Bidders$Pretargetingconfigs$Patch,
      callback: BodyResponseCallback<Schema$PretargetingConfig>
    ): void;
    patch(callback: BodyResponseCallback<Schema$PretargetingConfig>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Bidders$Pretargetingconfigs$Patch
        | BodyResponseCallback<Schema$PretargetingConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PretargetingConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PretargetingConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PretargetingConfig>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Bidders$Pretargetingconfigs$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Bidders$Pretargetingconfigs$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://realtimebidding.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PretargetingConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PretargetingConfig>(parameters);
      }
    }

    /**
     * Removes targeted apps from the pretargeting configuration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const realtimebidding = google.realtimebidding('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/realtime-bidding'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await realtimebidding.bidders.pretargetingConfigs.removeTargetedApps({
     *       // Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId\}/pretargetingConfig/{configId\}
     *       pretargetingConfig:
     *         'bidders/my-bidder/pretargetingConfigs/my-pretargetingConfig',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "appIds": []
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "allowedUserTargetingModes": [],
     *   //   "appTargeting": {},
     *   //   "billingId": "my_billingId",
     *   //   "displayName": "my_displayName",
     *   //   "excludedContentLabelIds": [],
     *   //   "geoTargeting": {},
     *   //   "includedCreativeDimensions": [],
     *   //   "includedEnvironments": [],
     *   //   "includedFormats": [],
     *   //   "includedLanguages": [],
     *   //   "includedMobileOperatingSystemIds": [],
     *   //   "includedPlatforms": [],
     *   //   "includedUserIdTypes": [],
     *   //   "interstitialTargeting": "my_interstitialTargeting",
     *   //   "invalidGeoIds": [],
     *   //   "maximumQps": "my_maximumQps",
     *   //   "minimumViewabilityDecile": 0,
     *   //   "name": "my_name",
     *   //   "publisherTargeting": {},
     *   //   "state": "my_state",
     *   //   "userListTargeting": {},
     *   //   "verticalTargeting": {},
     *   //   "webTargeting": {}
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
    removeTargetedApps(
      params: Params$Resource$Bidders$Pretargetingconfigs$Removetargetedapps,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    removeTargetedApps(
      params?: Params$Resource$Bidders$Pretargetingconfigs$Removetargetedapps,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PretargetingConfig>>;
    removeTargetedApps(
      params: Params$Resource$Bidders$Pretargetingconfigs$Removetargetedapps,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    removeTargetedApps(
      params: Params$Resource$Bidders$Pretargetingconfigs$Removetargetedapps,
      options: MethodOptions | BodyResponseCallback<Schema$PretargetingConfig>,
      callback: BodyResponseCallback<Schema$PretargetingConfig>
    ): void;
    removeTargetedApps(
      params: Params$Resource$Bidders$Pretargetingconfigs$Removetargetedapps,
      callback: BodyResponseCallback<Schema$PretargetingConfig>
    ): void;
    removeTargetedApps(
      callback: BodyResponseCallback<Schema$PretargetingConfig>
    ): void;
    removeTargetedApps(
      paramsOrCallback?:
        | Params$Resource$Bidders$Pretargetingconfigs$Removetargetedapps
        | BodyResponseCallback<Schema$PretargetingConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PretargetingConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PretargetingConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PretargetingConfig>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Bidders$Pretargetingconfigs$Removetargetedapps;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Bidders$Pretargetingconfigs$Removetargetedapps;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://realtimebidding.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+pretargetingConfig}:removeTargetedApps'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['pretargetingConfig'],
        pathParams: ['pretargetingConfig'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PretargetingConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PretargetingConfig>(parameters);
      }
    }

    /**
     * Removes targeted publishers from the pretargeting config.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const realtimebidding = google.realtimebidding('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/realtime-bidding'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await realtimebidding.bidders.pretargetingConfigs.removeTargetedPublishers({
     *       // Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId\}/pretargetingConfig/{configId\}
     *       pretargetingConfig:
     *         'bidders/my-bidder/pretargetingConfigs/my-pretargetingConfig',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "publisherIds": []
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "allowedUserTargetingModes": [],
     *   //   "appTargeting": {},
     *   //   "billingId": "my_billingId",
     *   //   "displayName": "my_displayName",
     *   //   "excludedContentLabelIds": [],
     *   //   "geoTargeting": {},
     *   //   "includedCreativeDimensions": [],
     *   //   "includedEnvironments": [],
     *   //   "includedFormats": [],
     *   //   "includedLanguages": [],
     *   //   "includedMobileOperatingSystemIds": [],
     *   //   "includedPlatforms": [],
     *   //   "includedUserIdTypes": [],
     *   //   "interstitialTargeting": "my_interstitialTargeting",
     *   //   "invalidGeoIds": [],
     *   //   "maximumQps": "my_maximumQps",
     *   //   "minimumViewabilityDecile": 0,
     *   //   "name": "my_name",
     *   //   "publisherTargeting": {},
     *   //   "state": "my_state",
     *   //   "userListTargeting": {},
     *   //   "verticalTargeting": {},
     *   //   "webTargeting": {}
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
    removeTargetedPublishers(
      params: Params$Resource$Bidders$Pretargetingconfigs$Removetargetedpublishers,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    removeTargetedPublishers(
      params?: Params$Resource$Bidders$Pretargetingconfigs$Removetargetedpublishers,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PretargetingConfig>>;
    removeTargetedPublishers(
      params: Params$Resource$Bidders$Pretargetingconfigs$Removetargetedpublishers,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    removeTargetedPublishers(
      params: Params$Resource$Bidders$Pretargetingconfigs$Removetargetedpublishers,
      options: MethodOptions | BodyResponseCallback<Schema$PretargetingConfig>,
      callback: BodyResponseCallback<Schema$PretargetingConfig>
    ): void;
    removeTargetedPublishers(
      params: Params$Resource$Bidders$Pretargetingconfigs$Removetargetedpublishers,
      callback: BodyResponseCallback<Schema$PretargetingConfig>
    ): void;
    removeTargetedPublishers(
      callback: BodyResponseCallback<Schema$PretargetingConfig>
    ): void;
    removeTargetedPublishers(
      paramsOrCallback?:
        | Params$Resource$Bidders$Pretargetingconfigs$Removetargetedpublishers
        | BodyResponseCallback<Schema$PretargetingConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PretargetingConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PretargetingConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PretargetingConfig>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Bidders$Pretargetingconfigs$Removetargetedpublishers;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Bidders$Pretargetingconfigs$Removetargetedpublishers;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://realtimebidding.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+pretargetingConfig}:removeTargetedPublishers'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['pretargetingConfig'],
        pathParams: ['pretargetingConfig'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PretargetingConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PretargetingConfig>(parameters);
      }
    }

    /**
     * Removes targeted sites from the pretargeting configuration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const realtimebidding = google.realtimebidding('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/realtime-bidding'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await realtimebidding.bidders.pretargetingConfigs.removeTargetedSites({
     *       // Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId\}/pretargetingConfig/{configId\}
     *       pretargetingConfig:
     *         'bidders/my-bidder/pretargetingConfigs/my-pretargetingConfig',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "sites": []
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "allowedUserTargetingModes": [],
     *   //   "appTargeting": {},
     *   //   "billingId": "my_billingId",
     *   //   "displayName": "my_displayName",
     *   //   "excludedContentLabelIds": [],
     *   //   "geoTargeting": {},
     *   //   "includedCreativeDimensions": [],
     *   //   "includedEnvironments": [],
     *   //   "includedFormats": [],
     *   //   "includedLanguages": [],
     *   //   "includedMobileOperatingSystemIds": [],
     *   //   "includedPlatforms": [],
     *   //   "includedUserIdTypes": [],
     *   //   "interstitialTargeting": "my_interstitialTargeting",
     *   //   "invalidGeoIds": [],
     *   //   "maximumQps": "my_maximumQps",
     *   //   "minimumViewabilityDecile": 0,
     *   //   "name": "my_name",
     *   //   "publisherTargeting": {},
     *   //   "state": "my_state",
     *   //   "userListTargeting": {},
     *   //   "verticalTargeting": {},
     *   //   "webTargeting": {}
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
    removeTargetedSites(
      params: Params$Resource$Bidders$Pretargetingconfigs$Removetargetedsites,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    removeTargetedSites(
      params?: Params$Resource$Bidders$Pretargetingconfigs$Removetargetedsites,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PretargetingConfig>>;
    removeTargetedSites(
      params: Params$Resource$Bidders$Pretargetingconfigs$Removetargetedsites,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    removeTargetedSites(
      params: Params$Resource$Bidders$Pretargetingconfigs$Removetargetedsites,
      options: MethodOptions | BodyResponseCallback<Schema$PretargetingConfig>,
      callback: BodyResponseCallback<Schema$PretargetingConfig>
    ): void;
    removeTargetedSites(
      params: Params$Resource$Bidders$Pretargetingconfigs$Removetargetedsites,
      callback: BodyResponseCallback<Schema$PretargetingConfig>
    ): void;
    removeTargetedSites(
      callback: BodyResponseCallback<Schema$PretargetingConfig>
    ): void;
    removeTargetedSites(
      paramsOrCallback?:
        | Params$Resource$Bidders$Pretargetingconfigs$Removetargetedsites
        | BodyResponseCallback<Schema$PretargetingConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PretargetingConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PretargetingConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PretargetingConfig>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Bidders$Pretargetingconfigs$Removetargetedsites;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Bidders$Pretargetingconfigs$Removetargetedsites;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://realtimebidding.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+pretargetingConfig}:removeTargetedSites'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['pretargetingConfig'],
        pathParams: ['pretargetingConfig'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PretargetingConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PretargetingConfig>(parameters);
      }
    }

    /**
     * Suspends a pretargeting configuration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const realtimebidding = google.realtimebidding('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/realtime-bidding'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await realtimebidding.bidders.pretargetingConfigs.suspend({
     *     // Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId\}/pretargetingConfig/{configId\}
     *     name: 'bidders/my-bidder/pretargetingConfigs/my-pretargetingConfig',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "allowedUserTargetingModes": [],
     *   //   "appTargeting": {},
     *   //   "billingId": "my_billingId",
     *   //   "displayName": "my_displayName",
     *   //   "excludedContentLabelIds": [],
     *   //   "geoTargeting": {},
     *   //   "includedCreativeDimensions": [],
     *   //   "includedEnvironments": [],
     *   //   "includedFormats": [],
     *   //   "includedLanguages": [],
     *   //   "includedMobileOperatingSystemIds": [],
     *   //   "includedPlatforms": [],
     *   //   "includedUserIdTypes": [],
     *   //   "interstitialTargeting": "my_interstitialTargeting",
     *   //   "invalidGeoIds": [],
     *   //   "maximumQps": "my_maximumQps",
     *   //   "minimumViewabilityDecile": 0,
     *   //   "name": "my_name",
     *   //   "publisherTargeting": {},
     *   //   "state": "my_state",
     *   //   "userListTargeting": {},
     *   //   "verticalTargeting": {},
     *   //   "webTargeting": {}
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
    suspend(
      params: Params$Resource$Bidders$Pretargetingconfigs$Suspend,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    suspend(
      params?: Params$Resource$Bidders$Pretargetingconfigs$Suspend,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PretargetingConfig>>;
    suspend(
      params: Params$Resource$Bidders$Pretargetingconfigs$Suspend,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    suspend(
      params: Params$Resource$Bidders$Pretargetingconfigs$Suspend,
      options: MethodOptions | BodyResponseCallback<Schema$PretargetingConfig>,
      callback: BodyResponseCallback<Schema$PretargetingConfig>
    ): void;
    suspend(
      params: Params$Resource$Bidders$Pretargetingconfigs$Suspend,
      callback: BodyResponseCallback<Schema$PretargetingConfig>
    ): void;
    suspend(callback: BodyResponseCallback<Schema$PretargetingConfig>): void;
    suspend(
      paramsOrCallback?:
        | Params$Resource$Bidders$Pretargetingconfigs$Suspend
        | BodyResponseCallback<Schema$PretargetingConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PretargetingConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PretargetingConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PretargetingConfig>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Bidders$Pretargetingconfigs$Suspend;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Bidders$Pretargetingconfigs$Suspend;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://realtimebidding.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:suspend').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PretargetingConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PretargetingConfig>(parameters);
      }
    }
  }

  export interface Params$Resource$Bidders$Pretargetingconfigs$Activate
    extends StandardParameters {
    /**
     * Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId\}/pretargetingConfig/{configId\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ActivatePretargetingConfigRequest;
  }
  export interface Params$Resource$Bidders$Pretargetingconfigs$Addtargetedapps
    extends StandardParameters {
    /**
     * Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId\}/pretargetingConfig/{configId\}
     */
    pretargetingConfig?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AddTargetedAppsRequest;
  }
  export interface Params$Resource$Bidders$Pretargetingconfigs$Addtargetedpublishers
    extends StandardParameters {
    /**
     * Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId\}/pretargetingConfig/{configId\}
     */
    pretargetingConfig?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AddTargetedPublishersRequest;
  }
  export interface Params$Resource$Bidders$Pretargetingconfigs$Addtargetedsites
    extends StandardParameters {
    /**
     * Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId\}/pretargetingConfig/{configId\}
     */
    pretargetingConfig?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AddTargetedSitesRequest;
  }
  export interface Params$Resource$Bidders$Pretargetingconfigs$Create
    extends StandardParameters {
    /**
     * Required. Name of the bidder to create the pretargeting configuration for. Format: bidders/{bidderAccountId\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PretargetingConfig;
  }
  export interface Params$Resource$Bidders$Pretargetingconfigs$Delete
    extends StandardParameters {
    /**
     * Required. The name of the pretargeting configuration to delete. Format: bidders/{bidderAccountId\}/pretargetingConfig/{configId\}
     */
    name?: string;
  }
  export interface Params$Resource$Bidders$Pretargetingconfigs$Get
    extends StandardParameters {
    /**
     * Required. Name of the pretargeting configuration to get. Format: bidders/{bidderAccountId\}/pretargetingConfig/{configId\}
     */
    name?: string;
  }
  export interface Params$Resource$Bidders$Pretargetingconfigs$List
    extends StandardParameters {
    /**
     * The maximum number of pretargeting configurations to return. If unspecified, at most 10 pretargeting configurations will be returned. The maximum value is 100; values above 100 will be coerced to 100.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return. This value is received from a previous `ListPretargetingConfigs` call in ListPretargetingConfigsResponse.nextPageToken.
     */
    pageToken?: string;
    /**
     * Required. Name of the bidder whose pretargeting configurations will be listed. Format: bidders/{bidderAccountId\}
     */
    parent?: string;
  }
  export interface Params$Resource$Bidders$Pretargetingconfigs$Patch
    extends StandardParameters {
    /**
     * Output only. Name of the pretargeting configuration that must follow the pattern `bidders/{bidder_account_id\}/pretargetingConfigs/{config_id\}`
     */
    name?: string;
    /**
     * Field mask to use for partial in-place updates.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PretargetingConfig;
  }
  export interface Params$Resource$Bidders$Pretargetingconfigs$Removetargetedapps
    extends StandardParameters {
    /**
     * Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId\}/pretargetingConfig/{configId\}
     */
    pretargetingConfig?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RemoveTargetedAppsRequest;
  }
  export interface Params$Resource$Bidders$Pretargetingconfigs$Removetargetedpublishers
    extends StandardParameters {
    /**
     * Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId\}/pretargetingConfig/{configId\}
     */
    pretargetingConfig?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RemoveTargetedPublishersRequest;
  }
  export interface Params$Resource$Bidders$Pretargetingconfigs$Removetargetedsites
    extends StandardParameters {
    /**
     * Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId\}/pretargetingConfig/{configId\}
     */
    pretargetingConfig?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RemoveTargetedSitesRequest;
  }
  export interface Params$Resource$Bidders$Pretargetingconfigs$Suspend
    extends StandardParameters {
    /**
     * Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId\}/pretargetingConfig/{configId\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SuspendPretargetingConfigRequest;
  }

  export class Resource$Bidders$Publisherconnections {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Batch approves multiple publisher connections.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const realtimebidding = google.realtimebidding('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/realtime-bidding'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await realtimebidding.bidders.publisherConnections.batchApprove({
     *     // Required. The bidder for whom publisher connections will be approved. Format: `bidders/{bidder\}` where `{bidder\}` is the account ID of the bidder.
     *     parent: 'bidders/my-bidder',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "names": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "publisherConnections": []
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
    batchApprove(
      params: Params$Resource$Bidders$Publisherconnections$Batchapprove,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchApprove(
      params?: Params$Resource$Bidders$Publisherconnections$Batchapprove,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$BatchApprovePublisherConnectionsResponse>
    >;
    batchApprove(
      params: Params$Resource$Bidders$Publisherconnections$Batchapprove,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchApprove(
      params: Params$Resource$Bidders$Publisherconnections$Batchapprove,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchApprovePublisherConnectionsResponse>,
      callback: BodyResponseCallback<Schema$BatchApprovePublisherConnectionsResponse>
    ): void;
    batchApprove(
      params: Params$Resource$Bidders$Publisherconnections$Batchapprove,
      callback: BodyResponseCallback<Schema$BatchApprovePublisherConnectionsResponse>
    ): void;
    batchApprove(
      callback: BodyResponseCallback<Schema$BatchApprovePublisherConnectionsResponse>
    ): void;
    batchApprove(
      paramsOrCallback?:
        | Params$Resource$Bidders$Publisherconnections$Batchapprove
        | BodyResponseCallback<Schema$BatchApprovePublisherConnectionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BatchApprovePublisherConnectionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BatchApprovePublisherConnectionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$BatchApprovePublisherConnectionsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Bidders$Publisherconnections$Batchapprove;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Bidders$Publisherconnections$Batchapprove;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://realtimebidding.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+parent}/publisherConnections:batchApprove'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BatchApprovePublisherConnectionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BatchApprovePublisherConnectionsResponse>(
          parameters
        );
      }
    }

    /**
     * Batch rejects multiple publisher connections.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const realtimebidding = google.realtimebidding('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/realtime-bidding'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await realtimebidding.bidders.publisherConnections.batchReject({
     *     // Required. The bidder for whom publisher connections will be rejected. Format: `bidders/{bidder\}` where `{bidder\}` is the account ID of the bidder.
     *     parent: 'bidders/my-bidder',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "names": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "publisherConnections": []
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
    batchReject(
      params: Params$Resource$Bidders$Publisherconnections$Batchreject,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchReject(
      params?: Params$Resource$Bidders$Publisherconnections$Batchreject,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$BatchRejectPublisherConnectionsResponse>
    >;
    batchReject(
      params: Params$Resource$Bidders$Publisherconnections$Batchreject,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchReject(
      params: Params$Resource$Bidders$Publisherconnections$Batchreject,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchRejectPublisherConnectionsResponse>,
      callback: BodyResponseCallback<Schema$BatchRejectPublisherConnectionsResponse>
    ): void;
    batchReject(
      params: Params$Resource$Bidders$Publisherconnections$Batchreject,
      callback: BodyResponseCallback<Schema$BatchRejectPublisherConnectionsResponse>
    ): void;
    batchReject(
      callback: BodyResponseCallback<Schema$BatchRejectPublisherConnectionsResponse>
    ): void;
    batchReject(
      paramsOrCallback?:
        | Params$Resource$Bidders$Publisherconnections$Batchreject
        | BodyResponseCallback<Schema$BatchRejectPublisherConnectionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BatchRejectPublisherConnectionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BatchRejectPublisherConnectionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$BatchRejectPublisherConnectionsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Bidders$Publisherconnections$Batchreject;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Bidders$Publisherconnections$Batchreject;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://realtimebidding.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+parent}/publisherConnections:batchReject'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BatchRejectPublisherConnectionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BatchRejectPublisherConnectionsResponse>(
          parameters
        );
      }
    }

    /**
     * Gets a publisher connection.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const realtimebidding = google.realtimebidding('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/realtime-bidding'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await realtimebidding.bidders.publisherConnections.get({
     *     // Required. Name of the publisher whose connection information is to be retrieved. In the pattern `bidders/{bidder\}/publisherConnections/{publisher\}` where `{bidder\}` is the account ID of the bidder, and `{publisher\}` is the ads.txt/app-ads.txt publisher ID. See publisherConnection.name.
     *     name: 'bidders/my-bidder/publisherConnections/my-publisherConnection',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "biddingState": "my_biddingState",
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "publisherPlatform": "my_publisherPlatform"
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
      params: Params$Resource$Bidders$Publisherconnections$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Bidders$Publisherconnections$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PublisherConnection>>;
    get(
      params: Params$Resource$Bidders$Publisherconnections$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Bidders$Publisherconnections$Get,
      options: MethodOptions | BodyResponseCallback<Schema$PublisherConnection>,
      callback: BodyResponseCallback<Schema$PublisherConnection>
    ): void;
    get(
      params: Params$Resource$Bidders$Publisherconnections$Get,
      callback: BodyResponseCallback<Schema$PublisherConnection>
    ): void;
    get(callback: BodyResponseCallback<Schema$PublisherConnection>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Bidders$Publisherconnections$Get
        | BodyResponseCallback<Schema$PublisherConnection>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PublisherConnection>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PublisherConnection>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PublisherConnection>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Bidders$Publisherconnections$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Bidders$Publisherconnections$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://realtimebidding.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PublisherConnection>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PublisherConnection>(parameters);
      }
    }

    /**
     * Lists publisher connections for a given bidder.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const realtimebidding = google.realtimebidding('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/realtime-bidding'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await realtimebidding.bidders.publisherConnections.list({
     *     // Query string to filter publisher connections. Connections can be filtered by `displayName`, `publisherPlatform`, and `biddingState`. If no filter is specified, all publisher connections will be returned. Example: 'displayName="Great Publisher*" AND publisherPlatform=ADMOB AND biddingState != PENDING' See https://google.aip.dev/160 for more information about filtering syntax.
     *     filter: 'placeholder-value',
     *     // Order specification by which results should be sorted. If no sort order is specified, the results will be returned in alphabetic order based on the publisher's publisher code. Results can be sorted by `createTime`. Example: 'createTime DESC'.
     *     orderBy: 'placeholder-value',
     *     // Requested page size. The server may return fewer results than requested (due to timeout constraint) even if more are available through another call. If unspecified, the server will pick an appropriate default. Acceptable values are 1 to 5000, inclusive.
     *     pageSize: 'placeholder-value',
     *     // A token identifying a page of results the server should return. Typically, this is the value of ListPublisherConnectionsResponse.nextPageToken returned from the previous call to the 'ListPublisherConnections' method.
     *     pageToken: 'placeholder-value',
     *     // Required. Name of the bidder for which publishers have initiated connections. The pattern for this resource is `bidders/{bidder\}` where `{bidder\}` represents the account ID of the bidder.
     *     parent: 'bidders/my-bidder',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "publisherConnections": []
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
      params: Params$Resource$Bidders$Publisherconnections$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Bidders$Publisherconnections$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ListPublisherConnectionsResponse>
    >;
    list(
      params: Params$Resource$Bidders$Publisherconnections$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Bidders$Publisherconnections$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListPublisherConnectionsResponse>,
      callback: BodyResponseCallback<Schema$ListPublisherConnectionsResponse>
    ): void;
    list(
      params: Params$Resource$Bidders$Publisherconnections$List,
      callback: BodyResponseCallback<Schema$ListPublisherConnectionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListPublisherConnectionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Bidders$Publisherconnections$List
        | BodyResponseCallback<Schema$ListPublisherConnectionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListPublisherConnectionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListPublisherConnectionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ListPublisherConnectionsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Bidders$Publisherconnections$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Bidders$Publisherconnections$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://realtimebidding.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/publisherConnections').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListPublisherConnectionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListPublisherConnectionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Bidders$Publisherconnections$Batchapprove
    extends StandardParameters {
    /**
     * Required. The bidder for whom publisher connections will be approved. Format: `bidders/{bidder\}` where `{bidder\}` is the account ID of the bidder.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchApprovePublisherConnectionsRequest;
  }
  export interface Params$Resource$Bidders$Publisherconnections$Batchreject
    extends StandardParameters {
    /**
     * Required. The bidder for whom publisher connections will be rejected. Format: `bidders/{bidder\}` where `{bidder\}` is the account ID of the bidder.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchRejectPublisherConnectionsRequest;
  }
  export interface Params$Resource$Bidders$Publisherconnections$Get
    extends StandardParameters {
    /**
     * Required. Name of the publisher whose connection information is to be retrieved. In the pattern `bidders/{bidder\}/publisherConnections/{publisher\}` where `{bidder\}` is the account ID of the bidder, and `{publisher\}` is the ads.txt/app-ads.txt publisher ID. See publisherConnection.name.
     */
    name?: string;
  }
  export interface Params$Resource$Bidders$Publisherconnections$List
    extends StandardParameters {
    /**
     * Query string to filter publisher connections. Connections can be filtered by `displayName`, `publisherPlatform`, and `biddingState`. If no filter is specified, all publisher connections will be returned. Example: 'displayName="Great Publisher*" AND publisherPlatform=ADMOB AND biddingState != PENDING' See https://google.aip.dev/160 for more information about filtering syntax.
     */
    filter?: string;
    /**
     * Order specification by which results should be sorted. If no sort order is specified, the results will be returned in alphabetic order based on the publisher's publisher code. Results can be sorted by `createTime`. Example: 'createTime DESC'.
     */
    orderBy?: string;
    /**
     * Requested page size. The server may return fewer results than requested (due to timeout constraint) even if more are available through another call. If unspecified, the server will pick an appropriate default. Acceptable values are 1 to 5000, inclusive.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return. Typically, this is the value of ListPublisherConnectionsResponse.nextPageToken returned from the previous call to the 'ListPublisherConnections' method.
     */
    pageToken?: string;
    /**
     * Required. Name of the bidder for which publishers have initiated connections. The pattern for this resource is `bidders/{bidder\}` where `{bidder\}` represents the account ID of the bidder.
     */
    parent?: string;
  }

  export class Resource$Buyers {
    context: APIRequestContext;
    creatives: Resource$Buyers$Creatives;
    userLists: Resource$Buyers$Userlists;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.creatives = new Resource$Buyers$Creatives(this.context);
      this.userLists = new Resource$Buyers$Userlists(this.context);
    }

    /**
     * Gets a buyer account by its name.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const realtimebidding = google.realtimebidding('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/realtime-bidding'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await realtimebidding.buyers.get({
     *     // Required. Name of the buyer to get. Format: `buyers/{buyerId\}`
     *     name: 'buyers/my-buyer',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "activeCreativeCount": "my_activeCreativeCount",
     *   //   "bidder": "my_bidder",
     *   //   "billingIds": [],
     *   //   "displayName": "my_displayName",
     *   //   "maximumActiveCreativeCount": "my_maximumActiveCreativeCount",
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
      params: Params$Resource$Buyers$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Buyers$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Buyer>>;
    get(
      params: Params$Resource$Buyers$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Buyers$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Buyer>,
      callback: BodyResponseCallback<Schema$Buyer>
    ): void;
    get(
      params: Params$Resource$Buyers$Get,
      callback: BodyResponseCallback<Schema$Buyer>
    ): void;
    get(callback: BodyResponseCallback<Schema$Buyer>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Buyers$Get
        | BodyResponseCallback<Schema$Buyer>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Buyer>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Buyer>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Buyer>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Buyers$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://realtimebidding.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Buyer>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Buyer>(parameters);
      }
    }

    /**
     * This has been sunset as of October 2023, and will return an error response if called. For more information, see the release notes: https://developers.google.com/authorized-buyers/apis/relnotes#real-time-bidding-api Gets remarketing tag for a buyer. A remarketing tag is a piece of JavaScript code that can be placed on a web page. When a user visits a page containing a remarketing tag, Google adds the user to a user list.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const realtimebidding = google.realtimebidding('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/realtime-bidding'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await realtimebidding.buyers.getRemarketingTag({
     *     // Required. To fetch the remarketing tag for an account, the name must follow the pattern `buyers/{accountId\}`, where `{accountId\}` represents the ID of the buyer that owns the remarketing tag. For a bidder accessing the remarketing tag on behalf of a child seat buyer, `{accountId\}` should represent the ID of the child seat buyer. To fetch the remarketing tag for a specific user list, the name must follow the pattern `buyers/{accountId\}/userLists/{userListId\}`. See UserList.name.
     *     name: 'buyers/my-buyer',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "snippet": "my_snippet"
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
    getRemarketingTag(
      params: Params$Resource$Buyers$Getremarketingtag,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getRemarketingTag(
      params?: Params$Resource$Buyers$Getremarketingtag,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GetRemarketingTagResponse>>;
    getRemarketingTag(
      params: Params$Resource$Buyers$Getremarketingtag,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getRemarketingTag(
      params: Params$Resource$Buyers$Getremarketingtag,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GetRemarketingTagResponse>,
      callback: BodyResponseCallback<Schema$GetRemarketingTagResponse>
    ): void;
    getRemarketingTag(
      params: Params$Resource$Buyers$Getremarketingtag,
      callback: BodyResponseCallback<Schema$GetRemarketingTagResponse>
    ): void;
    getRemarketingTag(
      callback: BodyResponseCallback<Schema$GetRemarketingTagResponse>
    ): void;
    getRemarketingTag(
      paramsOrCallback?:
        | Params$Resource$Buyers$Getremarketingtag
        | BodyResponseCallback<Schema$GetRemarketingTagResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GetRemarketingTagResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GetRemarketingTagResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GetRemarketingTagResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buyers$Getremarketingtag;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$Getremarketingtag;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://realtimebidding.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:getRemarketingTag').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GetRemarketingTagResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GetRemarketingTagResponse>(parameters);
      }
    }

    /**
     * Lists all buyer account information the calling buyer user or service account is permissioned to manage.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const realtimebidding = google.realtimebidding('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/realtime-bidding'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await realtimebidding.buyers.list({
     *     // The maximum number of buyers to return. If unspecified, at most 100 buyers will be returned. The maximum value is 500; values above 500 will be coerced to 500.
     *     pageSize: 'placeholder-value',
     *     // A token identifying a page of results the server should return. This value is received from a previous `ListBuyers` call in ListBuyersResponse.nextPageToken.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "buyers": [],
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
      params: Params$Resource$Buyers$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Buyers$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListBuyersResponse>>;
    list(
      params: Params$Resource$Buyers$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Buyers$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListBuyersResponse>,
      callback: BodyResponseCallback<Schema$ListBuyersResponse>
    ): void;
    list(
      params: Params$Resource$Buyers$List,
      callback: BodyResponseCallback<Schema$ListBuyersResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListBuyersResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Buyers$List
        | BodyResponseCallback<Schema$ListBuyersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListBuyersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListBuyersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListBuyersResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Buyers$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://realtimebidding.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/buyers').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListBuyersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListBuyersResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Buyers$Get extends StandardParameters {
    /**
     * Required. Name of the buyer to get. Format: `buyers/{buyerId\}`
     */
    name?: string;
  }
  export interface Params$Resource$Buyers$Getremarketingtag
    extends StandardParameters {
    /**
     * Required. To fetch the remarketing tag for an account, the name must follow the pattern `buyers/{accountId\}`, where `{accountId\}` represents the ID of the buyer that owns the remarketing tag. For a bidder accessing the remarketing tag on behalf of a child seat buyer, `{accountId\}` should represent the ID of the child seat buyer. To fetch the remarketing tag for a specific user list, the name must follow the pattern `buyers/{accountId\}/userLists/{userListId\}`. See UserList.name.
     */
    name?: string;
  }
  export interface Params$Resource$Buyers$List extends StandardParameters {
    /**
     * The maximum number of buyers to return. If unspecified, at most 100 buyers will be returned. The maximum value is 500; values above 500 will be coerced to 500.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return. This value is received from a previous `ListBuyers` call in ListBuyersResponse.nextPageToken.
     */
    pageToken?: string;
  }

  export class Resource$Buyers$Creatives {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a creative.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const realtimebidding = google.realtimebidding('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/realtime-bidding'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await realtimebidding.buyers.creatives.create({
     *     // Required. The name of the parent buyer that the new creative belongs to that must follow the pattern `buyers/{buyerAccountId\}`, where `{buyerAccountId\}` represents the account ID of the buyer who owns a creative. For a bidder accessing creatives on behalf of a child seat buyer, `{buyerAccountId\}` should represent the account ID of the child seat buyer.
     *     parent: 'buyers/my-buyer',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accountId": "my_accountId",
     *       //   "adChoicesDestinationUrl": "my_adChoicesDestinationUrl",
     *       //   "advertiserName": "my_advertiserName",
     *       //   "agencyId": "my_agencyId",
     *       //   "apiUpdateTime": "my_apiUpdateTime",
     *       //   "creativeFormat": "my_creativeFormat",
     *       //   "creativeId": "my_creativeId",
     *       //   "creativeServingDecision": {},
     *       //   "dealIds": [],
     *       //   "declaredAttributes": [],
     *       //   "declaredClickThroughUrls": [],
     *       //   "declaredRestrictedCategories": [],
     *       //   "declaredVendorIds": [],
     *       //   "html": {},
     *       //   "impressionTrackingUrls": [],
     *       //   "name": "my_name",
     *       //   "native": {},
     *       //   "renderUrl": "my_renderUrl",
     *       //   "restrictedCategories": [],
     *       //   "version": 0,
     *       //   "video": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "adChoicesDestinationUrl": "my_adChoicesDestinationUrl",
     *   //   "advertiserName": "my_advertiserName",
     *   //   "agencyId": "my_agencyId",
     *   //   "apiUpdateTime": "my_apiUpdateTime",
     *   //   "creativeFormat": "my_creativeFormat",
     *   //   "creativeId": "my_creativeId",
     *   //   "creativeServingDecision": {},
     *   //   "dealIds": [],
     *   //   "declaredAttributes": [],
     *   //   "declaredClickThroughUrls": [],
     *   //   "declaredRestrictedCategories": [],
     *   //   "declaredVendorIds": [],
     *   //   "html": {},
     *   //   "impressionTrackingUrls": [],
     *   //   "name": "my_name",
     *   //   "native": {},
     *   //   "renderUrl": "my_renderUrl",
     *   //   "restrictedCategories": [],
     *   //   "version": 0,
     *   //   "video": {}
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
    create(
      params: Params$Resource$Buyers$Creatives$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Buyers$Creatives$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Creative>>;
    create(
      params: Params$Resource$Buyers$Creatives$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Buyers$Creatives$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Creative>,
      callback: BodyResponseCallback<Schema$Creative>
    ): void;
    create(
      params: Params$Resource$Buyers$Creatives$Create,
      callback: BodyResponseCallback<Schema$Creative>
    ): void;
    create(callback: BodyResponseCallback<Schema$Creative>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Buyers$Creatives$Create
        | BodyResponseCallback<Schema$Creative>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Creative>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Creative>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Creative>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buyers$Creatives$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$Creatives$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://realtimebidding.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/creatives').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Creative>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Creative>(parameters);
      }
    }

    /**
     * Gets a creative.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const realtimebidding = google.realtimebidding('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/realtime-bidding'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await realtimebidding.buyers.creatives.get({
     *     // Required. Name of the creative to retrieve. See creative.name.
     *     name: 'buyers/my-buyer/creatives/my-creative',
     *     // Controls the amount of information included in the response. By default only creativeServingDecision is included. To retrieve the entire creative resource (including the declared fields and the creative content) specify the view as "FULL".
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "adChoicesDestinationUrl": "my_adChoicesDestinationUrl",
     *   //   "advertiserName": "my_advertiserName",
     *   //   "agencyId": "my_agencyId",
     *   //   "apiUpdateTime": "my_apiUpdateTime",
     *   //   "creativeFormat": "my_creativeFormat",
     *   //   "creativeId": "my_creativeId",
     *   //   "creativeServingDecision": {},
     *   //   "dealIds": [],
     *   //   "declaredAttributes": [],
     *   //   "declaredClickThroughUrls": [],
     *   //   "declaredRestrictedCategories": [],
     *   //   "declaredVendorIds": [],
     *   //   "html": {},
     *   //   "impressionTrackingUrls": [],
     *   //   "name": "my_name",
     *   //   "native": {},
     *   //   "renderUrl": "my_renderUrl",
     *   //   "restrictedCategories": [],
     *   //   "version": 0,
     *   //   "video": {}
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
      params: Params$Resource$Buyers$Creatives$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Buyers$Creatives$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Creative>>;
    get(
      params: Params$Resource$Buyers$Creatives$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Buyers$Creatives$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Creative>,
      callback: BodyResponseCallback<Schema$Creative>
    ): void;
    get(
      params: Params$Resource$Buyers$Creatives$Get,
      callback: BodyResponseCallback<Schema$Creative>
    ): void;
    get(callback: BodyResponseCallback<Schema$Creative>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Buyers$Creatives$Get
        | BodyResponseCallback<Schema$Creative>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Creative>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Creative>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Creative>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buyers$Creatives$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$Creatives$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://realtimebidding.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Creative>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Creative>(parameters);
      }
    }

    /**
     * Lists creatives as they are at the time of the initial request. This call may take multiple hours to complete. For large, paginated requests, this method returns a snapshot of creatives at the time of request for the first page. `lastStatusUpdate` and `creativeServingDecision` may be outdated for creatives on sequential pages. We recommend [Google Cloud Pub/Sub](//cloud.google.com/pubsub/docs/overview) to view the latest status.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const realtimebidding = google.realtimebidding('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/realtime-bidding'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await realtimebidding.buyers.creatives.list({
     *     // Query string to filter creatives. If no filter is specified, all active creatives will be returned. Example: 'accountId=12345 AND (dealsStatus:DISAPPROVED AND disapprovalReason:UNACCEPTABLE_CONTENT) OR declaredAttributes:IS_COOKIE_TARGETED'
     *     filter: 'placeholder-value',
     *     // Requested page size. The server may return fewer creatives than requested (due to timeout constraint) even if more are available through another call. If unspecified, server will pick an appropriate default. Acceptable values are 1 to 1000, inclusive.
     *     pageSize: 'placeholder-value',
     *     // A token identifying a page of results the server should return. Typically, this is the value of ListCreativesResponse.nextPageToken returned from the previous call to the 'ListCreatives' method. Page tokens for continued pages are valid for up to five hours, counting from the call to 'ListCreatives' for the first page.
     *     pageToken: 'placeholder-value',
     *     // Required. Name of the parent buyer that owns the creatives. The pattern for this resource is either `buyers/{buyerAccountId\}` or `bidders/{bidderAccountId\}`. For `buyers/{buyerAccountId\}`, the `buyerAccountId` can be one of the following: 1. The ID of the buyer that is accessing their own creatives. 2. The ID of the child seat buyer under a bidder account. So for listing creatives pertaining to the child seat buyer (`456`) under bidder account (`123`), you would use the pattern: `buyers/456`. 3. The ID of the bidder itself. So for listing creatives pertaining to bidder (`123`), you would use `buyers/123`. If you want to access all creatives pertaining to both the bidder and all of its child seat accounts, you would use `bidders/{bidderAccountId\}`, for example, for all creatives pertaining to bidder (`123`), use `bidders/123`.
     *     parent: 'buyers/my-buyer',
     *     // Controls the amount of information included in the response. By default only creativeServingDecision is included. To retrieve the entire creative resource (including the declared fields and the creative content) specify the view as "FULL".
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "creatives": [],
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
      params: Params$Resource$Buyers$Creatives$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Buyers$Creatives$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListCreativesResponse>>;
    list(
      params: Params$Resource$Buyers$Creatives$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Buyers$Creatives$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListCreativesResponse>,
      callback: BodyResponseCallback<Schema$ListCreativesResponse>
    ): void;
    list(
      params: Params$Resource$Buyers$Creatives$List,
      callback: BodyResponseCallback<Schema$ListCreativesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListCreativesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Buyers$Creatives$List
        | BodyResponseCallback<Schema$ListCreativesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListCreativesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListCreativesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListCreativesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buyers$Creatives$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$Creatives$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://realtimebidding.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/creatives').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListCreativesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListCreativesResponse>(parameters);
      }
    }

    /**
     * Updates a creative.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const realtimebidding = google.realtimebidding('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/realtime-bidding'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await realtimebidding.buyers.creatives.patch({
     *     // Output only. Name of the creative. Follows the pattern `buyers/{buyer\}/creatives/{creative\}`, where `{buyer\}` represents the account ID of the buyer who owns the creative, and `{creative\}` is the buyer-specific creative ID that references this creative in the bid response.
     *     name: 'buyers/my-buyer/creatives/my-creative',
     *     // Field mask to use for partial in-place updates.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accountId": "my_accountId",
     *       //   "adChoicesDestinationUrl": "my_adChoicesDestinationUrl",
     *       //   "advertiserName": "my_advertiserName",
     *       //   "agencyId": "my_agencyId",
     *       //   "apiUpdateTime": "my_apiUpdateTime",
     *       //   "creativeFormat": "my_creativeFormat",
     *       //   "creativeId": "my_creativeId",
     *       //   "creativeServingDecision": {},
     *       //   "dealIds": [],
     *       //   "declaredAttributes": [],
     *       //   "declaredClickThroughUrls": [],
     *       //   "declaredRestrictedCategories": [],
     *       //   "declaredVendorIds": [],
     *       //   "html": {},
     *       //   "impressionTrackingUrls": [],
     *       //   "name": "my_name",
     *       //   "native": {},
     *       //   "renderUrl": "my_renderUrl",
     *       //   "restrictedCategories": [],
     *       //   "version": 0,
     *       //   "video": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "adChoicesDestinationUrl": "my_adChoicesDestinationUrl",
     *   //   "advertiserName": "my_advertiserName",
     *   //   "agencyId": "my_agencyId",
     *   //   "apiUpdateTime": "my_apiUpdateTime",
     *   //   "creativeFormat": "my_creativeFormat",
     *   //   "creativeId": "my_creativeId",
     *   //   "creativeServingDecision": {},
     *   //   "dealIds": [],
     *   //   "declaredAttributes": [],
     *   //   "declaredClickThroughUrls": [],
     *   //   "declaredRestrictedCategories": [],
     *   //   "declaredVendorIds": [],
     *   //   "html": {},
     *   //   "impressionTrackingUrls": [],
     *   //   "name": "my_name",
     *   //   "native": {},
     *   //   "renderUrl": "my_renderUrl",
     *   //   "restrictedCategories": [],
     *   //   "version": 0,
     *   //   "video": {}
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
    patch(
      params: Params$Resource$Buyers$Creatives$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Buyers$Creatives$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Creative>>;
    patch(
      params: Params$Resource$Buyers$Creatives$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Buyers$Creatives$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Creative>,
      callback: BodyResponseCallback<Schema$Creative>
    ): void;
    patch(
      params: Params$Resource$Buyers$Creatives$Patch,
      callback: BodyResponseCallback<Schema$Creative>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Creative>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Buyers$Creatives$Patch
        | BodyResponseCallback<Schema$Creative>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Creative>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Creative>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Creative>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buyers$Creatives$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$Creatives$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://realtimebidding.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Creative>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Creative>(parameters);
      }
    }
  }

  export interface Params$Resource$Buyers$Creatives$Create
    extends StandardParameters {
    /**
     * Required. The name of the parent buyer that the new creative belongs to that must follow the pattern `buyers/{buyerAccountId\}`, where `{buyerAccountId\}` represents the account ID of the buyer who owns a creative. For a bidder accessing creatives on behalf of a child seat buyer, `{buyerAccountId\}` should represent the account ID of the child seat buyer.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Creative;
  }
  export interface Params$Resource$Buyers$Creatives$Get
    extends StandardParameters {
    /**
     * Required. Name of the creative to retrieve. See creative.name.
     */
    name?: string;
    /**
     * Controls the amount of information included in the response. By default only creativeServingDecision is included. To retrieve the entire creative resource (including the declared fields and the creative content) specify the view as "FULL".
     */
    view?: string;
  }
  export interface Params$Resource$Buyers$Creatives$List
    extends StandardParameters {
    /**
     * Query string to filter creatives. If no filter is specified, all active creatives will be returned. Example: 'accountId=12345 AND (dealsStatus:DISAPPROVED AND disapprovalReason:UNACCEPTABLE_CONTENT) OR declaredAttributes:IS_COOKIE_TARGETED'
     */
    filter?: string;
    /**
     * Requested page size. The server may return fewer creatives than requested (due to timeout constraint) even if more are available through another call. If unspecified, server will pick an appropriate default. Acceptable values are 1 to 1000, inclusive.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return. Typically, this is the value of ListCreativesResponse.nextPageToken returned from the previous call to the 'ListCreatives' method. Page tokens for continued pages are valid for up to five hours, counting from the call to 'ListCreatives' for the first page.
     */
    pageToken?: string;
    /**
     * Required. Name of the parent buyer that owns the creatives. The pattern for this resource is either `buyers/{buyerAccountId\}` or `bidders/{bidderAccountId\}`. For `buyers/{buyerAccountId\}`, the `buyerAccountId` can be one of the following: 1. The ID of the buyer that is accessing their own creatives. 2. The ID of the child seat buyer under a bidder account. So for listing creatives pertaining to the child seat buyer (`456`) under bidder account (`123`), you would use the pattern: `buyers/456`. 3. The ID of the bidder itself. So for listing creatives pertaining to bidder (`123`), you would use `buyers/123`. If you want to access all creatives pertaining to both the bidder and all of its child seat accounts, you would use `bidders/{bidderAccountId\}`, for example, for all creatives pertaining to bidder (`123`), use `bidders/123`.
     */
    parent?: string;
    /**
     * Controls the amount of information included in the response. By default only creativeServingDecision is included. To retrieve the entire creative resource (including the declared fields and the creative content) specify the view as "FULL".
     */
    view?: string;
  }
  export interface Params$Resource$Buyers$Creatives$Patch
    extends StandardParameters {
    /**
     * Output only. Name of the creative. Follows the pattern `buyers/{buyer\}/creatives/{creative\}`, where `{buyer\}` represents the account ID of the buyer who owns the creative, and `{creative\}` is the buyer-specific creative ID that references this creative in the bid response.
     */
    name?: string;
    /**
     * Field mask to use for partial in-place updates.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Creative;
  }

  export class Resource$Buyers$Userlists {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Changes the status of a user list to CLOSED. This prevents new users from being added to the user list.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const realtimebidding = google.realtimebidding('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/realtime-bidding'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await realtimebidding.buyers.userLists.close({
     *     // Required. The name of the user list to close. See UserList.name
     *     name: 'buyers/my-buyer/userLists/my-userList',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "membershipDurationDays": "my_membershipDurationDays",
     *   //   "name": "my_name",
     *   //   "status": "my_status",
     *   //   "urlRestriction": {}
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
    close(
      params: Params$Resource$Buyers$Userlists$Close,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    close(
      params?: Params$Resource$Buyers$Userlists$Close,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$UserList>>;
    close(
      params: Params$Resource$Buyers$Userlists$Close,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    close(
      params: Params$Resource$Buyers$Userlists$Close,
      options: MethodOptions | BodyResponseCallback<Schema$UserList>,
      callback: BodyResponseCallback<Schema$UserList>
    ): void;
    close(
      params: Params$Resource$Buyers$Userlists$Close,
      callback: BodyResponseCallback<Schema$UserList>
    ): void;
    close(callback: BodyResponseCallback<Schema$UserList>): void;
    close(
      paramsOrCallback?:
        | Params$Resource$Buyers$Userlists$Close
        | BodyResponseCallback<Schema$UserList>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UserList>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UserList>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$UserList>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buyers$Userlists$Close;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$Userlists$Close;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://realtimebidding.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:close').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UserList>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UserList>(parameters);
      }
    }

    /**
     * Creates a new user list.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const realtimebidding = google.realtimebidding('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/realtime-bidding'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await realtimebidding.buyers.userLists.create({
     *     // Required. The name of the parent buyer of the user list to be retrieved, which must follow the pattern `buyers/{buyerAccountId\}`, where `{buyerAccountId\}` represents the account ID of the buyer who owns the user list. For a bidder accessing user lists on behalf of a child seat buyer, `{buyerAccountId\}` should represent the account ID of the child seat buyer.
     *     parent: 'buyers/my-buyer',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "membershipDurationDays": "my_membershipDurationDays",
     *       //   "name": "my_name",
     *       //   "status": "my_status",
     *       //   "urlRestriction": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "membershipDurationDays": "my_membershipDurationDays",
     *   //   "name": "my_name",
     *   //   "status": "my_status",
     *   //   "urlRestriction": {}
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
    create(
      params: Params$Resource$Buyers$Userlists$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Buyers$Userlists$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$UserList>>;
    create(
      params: Params$Resource$Buyers$Userlists$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Buyers$Userlists$Create,
      options: MethodOptions | BodyResponseCallback<Schema$UserList>,
      callback: BodyResponseCallback<Schema$UserList>
    ): void;
    create(
      params: Params$Resource$Buyers$Userlists$Create,
      callback: BodyResponseCallback<Schema$UserList>
    ): void;
    create(callback: BodyResponseCallback<Schema$UserList>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Buyers$Userlists$Create
        | BodyResponseCallback<Schema$UserList>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UserList>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UserList>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$UserList>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buyers$Userlists$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$Userlists$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://realtimebidding.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/userLists').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UserList>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UserList>(parameters);
      }
    }

    /**
     * Gets a user list by its name.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const realtimebidding = google.realtimebidding('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/realtime-bidding'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await realtimebidding.buyers.userLists.get({
     *     // Required. The name of the user list to be retrieved. See UserList.name.
     *     name: 'buyers/my-buyer/userLists/my-userList',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "membershipDurationDays": "my_membershipDurationDays",
     *   //   "name": "my_name",
     *   //   "status": "my_status",
     *   //   "urlRestriction": {}
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
      params: Params$Resource$Buyers$Userlists$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Buyers$Userlists$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$UserList>>;
    get(
      params: Params$Resource$Buyers$Userlists$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Buyers$Userlists$Get,
      options: MethodOptions | BodyResponseCallback<Schema$UserList>,
      callback: BodyResponseCallback<Schema$UserList>
    ): void;
    get(
      params: Params$Resource$Buyers$Userlists$Get,
      callback: BodyResponseCallback<Schema$UserList>
    ): void;
    get(callback: BodyResponseCallback<Schema$UserList>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Buyers$Userlists$Get
        | BodyResponseCallback<Schema$UserList>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UserList>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UserList>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$UserList>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buyers$Userlists$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$Userlists$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://realtimebidding.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UserList>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UserList>(parameters);
      }
    }

    /**
     * This has been sunset as of October 2023, and will return an error response if called. For more information, see the release notes: https://developers.google.com/authorized-buyers/apis/relnotes#real-time-bidding-api Gets remarketing tag for a buyer. A remarketing tag is a piece of JavaScript code that can be placed on a web page. When a user visits a page containing a remarketing tag, Google adds the user to a user list.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const realtimebidding = google.realtimebidding('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/realtime-bidding'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await realtimebidding.buyers.userLists.getRemarketingTag({
     *     // Required. To fetch the remarketing tag for an account, the name must follow the pattern `buyers/{accountId\}`, where `{accountId\}` represents the ID of the buyer that owns the remarketing tag. For a bidder accessing the remarketing tag on behalf of a child seat buyer, `{accountId\}` should represent the ID of the child seat buyer. To fetch the remarketing tag for a specific user list, the name must follow the pattern `buyers/{accountId\}/userLists/{userListId\}`. See UserList.name.
     *     name: 'buyers/my-buyer/userLists/my-userList',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "snippet": "my_snippet"
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
    getRemarketingTag(
      params: Params$Resource$Buyers$Userlists$Getremarketingtag,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getRemarketingTag(
      params?: Params$Resource$Buyers$Userlists$Getremarketingtag,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GetRemarketingTagResponse>>;
    getRemarketingTag(
      params: Params$Resource$Buyers$Userlists$Getremarketingtag,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getRemarketingTag(
      params: Params$Resource$Buyers$Userlists$Getremarketingtag,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GetRemarketingTagResponse>,
      callback: BodyResponseCallback<Schema$GetRemarketingTagResponse>
    ): void;
    getRemarketingTag(
      params: Params$Resource$Buyers$Userlists$Getremarketingtag,
      callback: BodyResponseCallback<Schema$GetRemarketingTagResponse>
    ): void;
    getRemarketingTag(
      callback: BodyResponseCallback<Schema$GetRemarketingTagResponse>
    ): void;
    getRemarketingTag(
      paramsOrCallback?:
        | Params$Resource$Buyers$Userlists$Getremarketingtag
        | BodyResponseCallback<Schema$GetRemarketingTagResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GetRemarketingTagResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GetRemarketingTagResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GetRemarketingTagResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buyers$Userlists$Getremarketingtag;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$Userlists$Getremarketingtag;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://realtimebidding.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:getRemarketingTag').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GetRemarketingTagResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GetRemarketingTagResponse>(parameters);
      }
    }

    /**
     * Lists the user lists visible to the current user.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const realtimebidding = google.realtimebidding('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/realtime-bidding'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await realtimebidding.buyers.userLists.list({
     *     // The number of results to return per page.
     *     pageSize: 'placeholder-value',
     *     // Continuation page token as received from a previous response.
     *     pageToken: 'placeholder-value',
     *     // Required. The name of the parent buyer for the user lists to be returned that must follow the pattern `buyers/{buyerAccountId\}`, where `{buyerAccountId\}` represents the account ID of the buyer who owns user lists. For a bidder accessing user lists on behalf of a child seat buyer , `{buyerAccountId\}` should represent the account ID of the child seat buyer.
     *     parent: 'buyers/my-buyer',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "userLists": []
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
      params: Params$Resource$Buyers$Userlists$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Buyers$Userlists$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListUserListsResponse>>;
    list(
      params: Params$Resource$Buyers$Userlists$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Buyers$Userlists$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListUserListsResponse>,
      callback: BodyResponseCallback<Schema$ListUserListsResponse>
    ): void;
    list(
      params: Params$Resource$Buyers$Userlists$List,
      callback: BodyResponseCallback<Schema$ListUserListsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListUserListsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Buyers$Userlists$List
        | BodyResponseCallback<Schema$ListUserListsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListUserListsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListUserListsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListUserListsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buyers$Userlists$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$Userlists$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://realtimebidding.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/userLists').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListUserListsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListUserListsResponse>(parameters);
      }
    }

    /**
     * Changes the status of a user list to OPEN. This allows new users to be added to the user list.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const realtimebidding = google.realtimebidding('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/realtime-bidding'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await realtimebidding.buyers.userLists.open({
     *     // Required. The name of the user list to open. See UserList.name
     *     name: 'buyers/my-buyer/userLists/my-userList',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "membershipDurationDays": "my_membershipDurationDays",
     *   //   "name": "my_name",
     *   //   "status": "my_status",
     *   //   "urlRestriction": {}
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
    open(
      params: Params$Resource$Buyers$Userlists$Open,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    open(
      params?: Params$Resource$Buyers$Userlists$Open,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$UserList>>;
    open(
      params: Params$Resource$Buyers$Userlists$Open,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    open(
      params: Params$Resource$Buyers$Userlists$Open,
      options: MethodOptions | BodyResponseCallback<Schema$UserList>,
      callback: BodyResponseCallback<Schema$UserList>
    ): void;
    open(
      params: Params$Resource$Buyers$Userlists$Open,
      callback: BodyResponseCallback<Schema$UserList>
    ): void;
    open(callback: BodyResponseCallback<Schema$UserList>): void;
    open(
      paramsOrCallback?:
        | Params$Resource$Buyers$Userlists$Open
        | BodyResponseCallback<Schema$UserList>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UserList>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UserList>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$UserList>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buyers$Userlists$Open;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$Userlists$Open;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://realtimebidding.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:open').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UserList>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UserList>(parameters);
      }
    }

    /**
     * Updates the given user list. Only user lists with URLRestrictions can be updated.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const realtimebidding = google.realtimebidding('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/realtime-bidding'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await realtimebidding.buyers.userLists.update({
     *     // Output only. Name of the user list that must follow the pattern `buyers/{buyer\}/userLists/{user_list\}`, where `{buyer\}` represents the account ID of the buyer who owns the user list. For a bidder accessing user lists on behalf of a child seat buyer, `{buyer\}` represents the account ID of the child seat buyer. `{user_list\}` is an int64 identifier assigned by Google to uniquely identify a user list.
     *     name: 'buyers/my-buyer/userLists/my-userList',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "membershipDurationDays": "my_membershipDurationDays",
     *       //   "name": "my_name",
     *       //   "status": "my_status",
     *       //   "urlRestriction": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "membershipDurationDays": "my_membershipDurationDays",
     *   //   "name": "my_name",
     *   //   "status": "my_status",
     *   //   "urlRestriction": {}
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
    update(
      params: Params$Resource$Buyers$Userlists$Update,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    update(
      params?: Params$Resource$Buyers$Userlists$Update,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$UserList>>;
    update(
      params: Params$Resource$Buyers$Userlists$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Buyers$Userlists$Update,
      options: MethodOptions | BodyResponseCallback<Schema$UserList>,
      callback: BodyResponseCallback<Schema$UserList>
    ): void;
    update(
      params: Params$Resource$Buyers$Userlists$Update,
      callback: BodyResponseCallback<Schema$UserList>
    ): void;
    update(callback: BodyResponseCallback<Schema$UserList>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Buyers$Userlists$Update
        | BodyResponseCallback<Schema$UserList>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UserList>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UserList>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$UserList>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buyers$Userlists$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buyers$Userlists$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://realtimebidding.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UserList>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UserList>(parameters);
      }
    }
  }

  export interface Params$Resource$Buyers$Userlists$Close
    extends StandardParameters {
    /**
     * Required. The name of the user list to close. See UserList.name
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CloseUserListRequest;
  }
  export interface Params$Resource$Buyers$Userlists$Create
    extends StandardParameters {
    /**
     * Required. The name of the parent buyer of the user list to be retrieved, which must follow the pattern `buyers/{buyerAccountId\}`, where `{buyerAccountId\}` represents the account ID of the buyer who owns the user list. For a bidder accessing user lists on behalf of a child seat buyer, `{buyerAccountId\}` should represent the account ID of the child seat buyer.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UserList;
  }
  export interface Params$Resource$Buyers$Userlists$Get
    extends StandardParameters {
    /**
     * Required. The name of the user list to be retrieved. See UserList.name.
     */
    name?: string;
  }
  export interface Params$Resource$Buyers$Userlists$Getremarketingtag
    extends StandardParameters {
    /**
     * Required. To fetch the remarketing tag for an account, the name must follow the pattern `buyers/{accountId\}`, where `{accountId\}` represents the ID of the buyer that owns the remarketing tag. For a bidder accessing the remarketing tag on behalf of a child seat buyer, `{accountId\}` should represent the ID of the child seat buyer. To fetch the remarketing tag for a specific user list, the name must follow the pattern `buyers/{accountId\}/userLists/{userListId\}`. See UserList.name.
     */
    name?: string;
  }
  export interface Params$Resource$Buyers$Userlists$List
    extends StandardParameters {
    /**
     * The number of results to return per page.
     */
    pageSize?: number;
    /**
     * Continuation page token as received from a previous response.
     */
    pageToken?: string;
    /**
     * Required. The name of the parent buyer for the user lists to be returned that must follow the pattern `buyers/{buyerAccountId\}`, where `{buyerAccountId\}` represents the account ID of the buyer who owns user lists. For a bidder accessing user lists on behalf of a child seat buyer , `{buyerAccountId\}` should represent the account ID of the child seat buyer.
     */
    parent?: string;
  }
  export interface Params$Resource$Buyers$Userlists$Open
    extends StandardParameters {
    /**
     * Required. The name of the user list to open. See UserList.name
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$OpenUserListRequest;
  }
  export interface Params$Resource$Buyers$Userlists$Update
    extends StandardParameters {
    /**
     * Output only. Name of the user list that must follow the pattern `buyers/{buyer\}/userLists/{user_list\}`, where `{buyer\}` represents the account ID of the buyer who owns the user list. For a bidder accessing user lists on behalf of a child seat buyer, `{buyer\}` represents the account ID of the child seat buyer. `{user_list\}` is an int64 identifier assigned by Google to uniquely identify a user list.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UserList;
  }
}
