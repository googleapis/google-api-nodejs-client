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
   * Allows external bidders to manage their RTB integration with Google. This includes managing bidder endpoints, QPS quotas, configuring what ad inventory to receive via pretargeting, submitting creatives for verification, and accessing creative metadata such as approval status.
   *
   * @example
   * const {google} = require('googleapis');
   * const realtimebidding = google.realtimebidding('v1');
   *
   * @namespace realtimebidding
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Realtimebidding
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
     * Output only. The last update timestamp of the creative via API.
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
     * All declared attributes for the ads that may be shown from this creative. Can be used to filter the response of the creatives.list method. If the `excluded_attribute` field of a [bid request](https://developers.google.com/authorized-buyers/rtb/downloads/realtime-bidding-proto&quot;) contains one of the attributes that were declared or detected for a given creative, and a bid is submitted with that creative, the bid will be filtered before the auction.
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
     * Output only. Name of the creative. Follows the pattern `buyers/{buyer}/creatives/{creative}`, where `{buyer}` represents the account ID of the buyer who owns the creative, and `{creative}` is the buyer-specific creative ID that references this creative in the bid response.
     */
    name?: string | null;
    /**
     * A native creative.
     */
    native?: Schema$NativeContent;
    /**
     * All restricted categories for the ads that may be shown from this creative.
     */
    restrictedCategories?: string[] | null;
    /**
     * Output only. The version of this creative. Version for a new creative is 1 and it increments during subsequent creative updates.
     */
    version?: number | null;
    /**
     * A video creative.
     */
    video?: Schema$VideoContent;
  }
  /**
   * Top level status and detected attributes of a creative.
   */
  export interface Schema$CreativeServingDecision {
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
   * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`.
   */
  export interface Schema$Date {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn&#39;t significant.
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
   * Evidence that the creative&#39;s destination URL was not crawlable by Google.
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
   * Evidence of the creative&#39;s destination URL not functioning properly or having been incorrectly set up.
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
     * HTTP error code (e.g. 404 or 5xx)
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
     * Breakdown of the most frequent domains called via HTTP by the creative.
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
   * Response for a request to get remarketing tag.
   */
  export interface Schema$GetRemarketingTagResponse {
    /**
     * A HTML tag that can be placed on the advertiser&#39;s page to add users to a user list. For more information and code samples on using snippet on your website refer to [Tag your site for remarketing]( https://support.google.com/google-ads/answer/2476688).
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
   * The list user list response.
   */
  export interface Schema$ListUserListsResponse {
    /**
     * The continuation page token to send back to the server in a subsequent request. Due to a currently known issue, it is recommended that the caller keep invoking the list method till the time a next page token is not returned (even if the result set is empty).
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
     * A smaller image, for the advertiser&#39;s logo.
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
     * Serving status for the given transaction type (e.g., open auction, deals) or region (e.g., China, Russia). Can be used to filter the response of the creatives.list method.
     */
    status?: string | null;
    /**
     * Topics related to the policy compliance for this transaction type (e.g., open auction, deals) or region (e.g., China, Russia). Topics may be present only if status is DISAPPROVED.
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
     * Policy topic this entry refers to. For example, &quot;ALCOHOL&quot;, &quot;TRADEMARKS_IN_AD_TEXT&quot;, or &quot;DESTINATION_NOT_WORKING&quot;. The set of possible policy topics is not fixed for a particular API version and may change at any time. Can be used to filter the response of the creatives.list method
     */
    policyTopic?: string | null;
  }
  /**
   * Evidence associated with a policy topic entry.
   */
  export interface Schema$PolicyTopicEvidence {
    /**
     * The creative&#39;s destination URL was not crawlable by Google.
     */
    destinationNotCrawlable?: Schema$DestinationNotCrawlableEvidence;
    /**
     * The creative&#39;s destination URL did not function properly or was incorrectly set up.
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
   * Represents the URL restriction (for the URL captured by the pixel callback) for a user list.
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
   * Represents an Authorized Buyers user list. Authorized Buyers can create/update/list user lists. Once a user list is created in the system, Authorized Buyers can add users to the user list using the bulk uploader API. Alternatively, users can be added by hosting a tag on the advertiser&#39;s page.
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
     * Required. The number of days a user&#39;s cookie stays on the user list. The field must be between 0 and 540 inclusive.
     */
    membershipDurationDays?: string | null;
    /**
     * Output only. Name of the user list that must follow the pattern `buyers/{buyer}/userLists/{user_list}`, where `{buyer}` represents the account ID of the buyer who owns the user list. For a bidder accessing user lists on behalf of a child seat buyer, `{buyer}` represents the account ID of the child seat buyer. `{user_list}` is an int64 identifier assigned by Google to uniquely identify a user list.
     */
    name?: string | null;
    /**
     * Output only. The status of the user list. A new user list starts out as open.
     */
    status?: string | null;
    /**
     * Required. The URL restriction for the user list.
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
     * The URL to fetch a video ad.
     */
    videoUrl?: string | null;
    /**
     * The contents of a VAST document for a video ad. This document should conform to the VAST 2.0 or 3.0 standard.
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
   * A response for the request to receive push notification when a bidder&#39;s creatives change status.
   */
  export interface Schema$WatchCreativesResponse {
    /**
     * The Pub/Sub subscription that can be used to pull creative status notifications. This would be of the format `projects/{project_id}/subscriptions/{subscription_id}`. Subscription is created with pull delivery. All service accounts belonging to the bidder will have read access to this subscription. Subscriptions that are inactive for more than 90 days will be disabled. Please use watchCreatives to re-enable the subscription.
     */
    subscription?: string | null;
    /**
     * The Pub/Sub topic that will be used to publish creative serving status notifications. This would be of the format `projects/{project_id}/topics/{topic_id}`.
     */
    topic?: string | null;
  }

  export class Resource$Bidders {
    context: APIRequestContext;
    creatives: Resource$Bidders$Creatives;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.creatives = new Resource$Bidders$Creatives(this.context);
    }
  }

  export class Resource$Bidders$Creatives {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * realtimebidding.bidders.creatives.list
     * @desc Lists creatives.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
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
     *     // Requested page size. The server may return fewer creatives than requested (due to timeout constraint) even if more are available via another call. If unspecified, server will pick an appropriate default. Acceptable values are 1 to 1000, inclusive.
     *     pageSize: 'placeholder-value',
     *     // A token identifying a page of results the server should return. Typically, this is the value of ListCreativesResponse.nextPageToken returned from the previous call to the 'ListCreatives' method.
     *     pageToken: 'placeholder-value',
     *     // Required. Name of the parent buyer that owns the creatives. The pattern for this resource is either `buyers/{buyerAccountId}` or `bidders/{bidderAccountId}`. For `buyers/{buyerAccountId}`, the `buyerAccountId` can be one of the following: 1. The ID of the buyer that is accessing their own creatives. 2. The ID of the child seat buyer under a bidder account. So for listing creatives pertaining to the child seat buyer (`456`) under bidder account (`123`), you would use the pattern: `buyers/456`. 3. The ID of the bidder itself. So for listing creatives pertaining to bidder (`123`), you would use `buyers/123`. If you want to access all creatives pertaining to both the bidder and all of its child seat accounts, you would use `bidders/{bidderAccountId}`, e.g., for all creatives pertaining to bidder (`123`), use `bidders/123`.
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
     * @alias realtimebidding.bidders.creatives.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Query string to filter creatives. If no filter is specified, all active creatives will be returned. Example: 'accountId=12345 AND (dealsStatus:DISAPPROVED AND disapprovalReason:UNACCEPTABLE_CONTENT) OR declaredAttributes:IS_COOKIE_TARGETED'
     * @param {integer=} params.pageSize Requested page size. The server may return fewer creatives than requested (due to timeout constraint) even if more are available via another call. If unspecified, server will pick an appropriate default. Acceptable values are 1 to 1000, inclusive.
     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListCreativesResponse.nextPageToken returned from the previous call to the 'ListCreatives' method.
     * @param {string} params.parent Required. Name of the parent buyer that owns the creatives. The pattern for this resource is either `buyers/{buyerAccountId}` or `bidders/{bidderAccountId}`. For `buyers/{buyerAccountId}`, the `buyerAccountId` can be one of the following: 1. The ID of the buyer that is accessing their own creatives. 2. The ID of the child seat buyer under a bidder account. So for listing creatives pertaining to the child seat buyer (`456`) under bidder account (`123`), you would use the pattern: `buyers/456`. 3. The ID of the bidder itself. So for listing creatives pertaining to bidder (`123`), you would use `buyers/123`. If you want to access all creatives pertaining to both the bidder and all of its child seat accounts, you would use `bidders/{bidderAccountId}`, e.g., for all creatives pertaining to bidder (`123`), use `bidders/123`.
     * @param {string=} params.view Controls the amount of information included in the response. By default only creativeServingDecision is included. To retrieve the entire creative resource (including the declared fields and the creative content) specify the view as "FULL".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Bidders$Creatives$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Bidders$Creatives$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListCreativesResponse>;
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
      | GaxiosPromise<Schema$ListCreativesResponse>
      | GaxiosPromise<Readable> {
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ListCreativesResponse>(parameters);
      }
    }

    /**
     * realtimebidding.bidders.creatives.watch
     * @desc Watches all creatives pertaining to a bidder. It is sufficient to invoke this endpoint once per bidder. A Pub/Sub topic will be created and notifications will be pushed to the topic when any of the bidder's creatives change status. All of the bidder's service accounts will have access to read from the topic. Subsequent invocations of this method will return the existing Pub/Sub configuration.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
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
     *     // Required. To watch all creatives pertaining to the bidder and all its child seat accounts, the bidder must follow the pattern `bidders/{bidderAccountId}`.
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
     * @alias realtimebidding.bidders.creatives.watch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. To watch all creatives pertaining to the bidder and all its child seat accounts, the bidder must follow the pattern `bidders/{bidderAccountId}`.
     * @param {().WatchCreativesRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    watch(
      params: Params$Resource$Bidders$Creatives$Watch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    watch(
      params?: Params$Resource$Bidders$Creatives$Watch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$WatchCreativesResponse>;
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
      | GaxiosPromise<Schema$WatchCreativesResponse>
      | GaxiosPromise<Readable> {
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
          callback as BodyResponseCallback<{} | void>
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
     * Requested page size. The server may return fewer creatives than requested (due to timeout constraint) even if more are available via another call. If unspecified, server will pick an appropriate default. Acceptable values are 1 to 1000, inclusive.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return. Typically, this is the value of ListCreativesResponse.nextPageToken returned from the previous call to the 'ListCreatives' method.
     */
    pageToken?: string;
    /**
     * Required. Name of the parent buyer that owns the creatives. The pattern for this resource is either `buyers/{buyerAccountId}` or `bidders/{bidderAccountId}`. For `buyers/{buyerAccountId}`, the `buyerAccountId` can be one of the following: 1. The ID of the buyer that is accessing their own creatives. 2. The ID of the child seat buyer under a bidder account. So for listing creatives pertaining to the child seat buyer (`456`) under bidder account (`123`), you would use the pattern: `buyers/456`. 3. The ID of the bidder itself. So for listing creatives pertaining to bidder (`123`), you would use `buyers/123`. If you want to access all creatives pertaining to both the bidder and all of its child seat accounts, you would use `bidders/{bidderAccountId}`, e.g., for all creatives pertaining to bidder (`123`), use `bidders/123`.
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
     * Required. To watch all creatives pertaining to the bidder and all its child seat accounts, the bidder must follow the pattern `bidders/{bidderAccountId}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WatchCreativesRequest;
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
     * realtimebidding.buyers.getRemarketingTag
     * @desc Gets remarketing tag for a buyer. A remarketing tag is a piece of JavaScript code that can be placed on a web page. When a user visits a page containing a remarketing tag, Google adds the user to a user list.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
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
     *     // Required. To fetch remarketing tag for an account, name must follow the pattern `buyers/{accountId}` where `{accountId}` represents ID of a buyer that owns the remarketing tag. For a bidder accessing remarketing tag on behalf of a child seat buyer, `{accountId}` should represent the ID of the child seat buyer. To fetch remarketing tag for a specific user list, name must follow the pattern `buyers/{accountId}/userLists/{userListId}`. See UserList.name.
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
     * @alias realtimebidding.buyers.getRemarketingTag
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. To fetch remarketing tag for an account, name must follow the pattern `buyers/{accountId}` where `{accountId}` represents ID of a buyer that owns the remarketing tag. For a bidder accessing remarketing tag on behalf of a child seat buyer, `{accountId}` should represent the ID of the child seat buyer. To fetch remarketing tag for a specific user list, name must follow the pattern `buyers/{accountId}/userLists/{userListId}`. See UserList.name.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getRemarketingTag(
      params: Params$Resource$Buyers$Getremarketingtag,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getRemarketingTag(
      params?: Params$Resource$Buyers$Getremarketingtag,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GetRemarketingTagResponse>;
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
      | GaxiosPromise<Schema$GetRemarketingTagResponse>
      | GaxiosPromise<Readable> {
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GetRemarketingTagResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Buyers$Getremarketingtag
    extends StandardParameters {
    /**
     * Required. To fetch remarketing tag for an account, name must follow the pattern `buyers/{accountId}` where `{accountId}` represents ID of a buyer that owns the remarketing tag. For a bidder accessing remarketing tag on behalf of a child seat buyer, `{accountId}` should represent the ID of the child seat buyer. To fetch remarketing tag for a specific user list, name must follow the pattern `buyers/{accountId}/userLists/{userListId}`. See UserList.name.
     */
    name?: string;
  }

  export class Resource$Buyers$Creatives {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * realtimebidding.buyers.creatives.create
     * @desc Creates a creative.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
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
     *     // Required. The name of the parent buyer that the new creative belongs to that must follow the pattern `buyers/{buyerAccountId}`, where `{buyerAccountId}` represents the account ID of the buyer who owns a creative. For a bidder accessing creatives on behalf of a child seat buyer, `{buyerAccountId}` should represent the account ID of the child seat buyer.
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
     * @alias realtimebidding.buyers.creatives.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The name of the parent buyer that the new creative belongs to that must follow the pattern `buyers/{buyerAccountId}`, where `{buyerAccountId}` represents the account ID of the buyer who owns a creative. For a bidder accessing creatives on behalf of a child seat buyer, `{buyerAccountId}` should represent the account ID of the child seat buyer.
     * @param {().Creative} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params: Params$Resource$Buyers$Creatives$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Buyers$Creatives$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Creative>;
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
    ): void | GaxiosPromise<Schema$Creative> | GaxiosPromise<Readable> {
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Creative>(parameters);
      }
    }

    /**
     * realtimebidding.buyers.creatives.get
     * @desc Gets a creative.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
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
     * @alias realtimebidding.buyers.creatives.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. Name of the creative to retrieve. See creative.name.
     * @param {string=} params.view Controls the amount of information included in the response. By default only creativeServingDecision is included. To retrieve the entire creative resource (including the declared fields and the creative content) specify the view as "FULL".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Buyers$Creatives$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Buyers$Creatives$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Creative>;
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
    ): void | GaxiosPromise<Schema$Creative> | GaxiosPromise<Readable> {
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Creative>(parameters);
      }
    }

    /**
     * realtimebidding.buyers.creatives.list
     * @desc Lists creatives.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
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
     *     // Requested page size. The server may return fewer creatives than requested (due to timeout constraint) even if more are available via another call. If unspecified, server will pick an appropriate default. Acceptable values are 1 to 1000, inclusive.
     *     pageSize: 'placeholder-value',
     *     // A token identifying a page of results the server should return. Typically, this is the value of ListCreativesResponse.nextPageToken returned from the previous call to the 'ListCreatives' method.
     *     pageToken: 'placeholder-value',
     *     // Required. Name of the parent buyer that owns the creatives. The pattern for this resource is either `buyers/{buyerAccountId}` or `bidders/{bidderAccountId}`. For `buyers/{buyerAccountId}`, the `buyerAccountId` can be one of the following: 1. The ID of the buyer that is accessing their own creatives. 2. The ID of the child seat buyer under a bidder account. So for listing creatives pertaining to the child seat buyer (`456`) under bidder account (`123`), you would use the pattern: `buyers/456`. 3. The ID of the bidder itself. So for listing creatives pertaining to bidder (`123`), you would use `buyers/123`. If you want to access all creatives pertaining to both the bidder and all of its child seat accounts, you would use `bidders/{bidderAccountId}`, e.g., for all creatives pertaining to bidder (`123`), use `bidders/123`.
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
     * @alias realtimebidding.buyers.creatives.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Query string to filter creatives. If no filter is specified, all active creatives will be returned. Example: 'accountId=12345 AND (dealsStatus:DISAPPROVED AND disapprovalReason:UNACCEPTABLE_CONTENT) OR declaredAttributes:IS_COOKIE_TARGETED'
     * @param {integer=} params.pageSize Requested page size. The server may return fewer creatives than requested (due to timeout constraint) even if more are available via another call. If unspecified, server will pick an appropriate default. Acceptable values are 1 to 1000, inclusive.
     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListCreativesResponse.nextPageToken returned from the previous call to the 'ListCreatives' method.
     * @param {string} params.parent Required. Name of the parent buyer that owns the creatives. The pattern for this resource is either `buyers/{buyerAccountId}` or `bidders/{bidderAccountId}`. For `buyers/{buyerAccountId}`, the `buyerAccountId` can be one of the following: 1. The ID of the buyer that is accessing their own creatives. 2. The ID of the child seat buyer under a bidder account. So for listing creatives pertaining to the child seat buyer (`456`) under bidder account (`123`), you would use the pattern: `buyers/456`. 3. The ID of the bidder itself. So for listing creatives pertaining to bidder (`123`), you would use `buyers/123`. If you want to access all creatives pertaining to both the bidder and all of its child seat accounts, you would use `bidders/{bidderAccountId}`, e.g., for all creatives pertaining to bidder (`123`), use `bidders/123`.
     * @param {string=} params.view Controls the amount of information included in the response. By default only creativeServingDecision is included. To retrieve the entire creative resource (including the declared fields and the creative content) specify the view as "FULL".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Buyers$Creatives$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Buyers$Creatives$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListCreativesResponse>;
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
      | GaxiosPromise<Schema$ListCreativesResponse>
      | GaxiosPromise<Readable> {
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ListCreativesResponse>(parameters);
      }
    }

    /**
     * realtimebidding.buyers.creatives.patch
     * @desc Updates a creative.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
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
     *     // Output only. Name of the creative. Follows the pattern `buyers/{buyer}/creatives/{creative}`, where `{buyer}` represents the account ID of the buyer who owns the creative, and `{creative}` is the buyer-specific creative ID that references this creative in the bid response.
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
     * @alias realtimebidding.buyers.creatives.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Output only. Name of the creative. Follows the pattern `buyers/{buyer}/creatives/{creative}`, where `{buyer}` represents the account ID of the buyer who owns the creative, and `{creative}` is the buyer-specific creative ID that references this creative in the bid response.
     * @param {string=} params.updateMask Field mask to use for partial in-place updates.
     * @param {().Creative} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params: Params$Resource$Buyers$Creatives$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Buyers$Creatives$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Creative>;
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
    ): void | GaxiosPromise<Schema$Creative> | GaxiosPromise<Readable> {
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Creative>(parameters);
      }
    }
  }

  export interface Params$Resource$Buyers$Creatives$Create
    extends StandardParameters {
    /**
     * Required. The name of the parent buyer that the new creative belongs to that must follow the pattern `buyers/{buyerAccountId}`, where `{buyerAccountId}` represents the account ID of the buyer who owns a creative. For a bidder accessing creatives on behalf of a child seat buyer, `{buyerAccountId}` should represent the account ID of the child seat buyer.
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
     * Requested page size. The server may return fewer creatives than requested (due to timeout constraint) even if more are available via another call. If unspecified, server will pick an appropriate default. Acceptable values are 1 to 1000, inclusive.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return. Typically, this is the value of ListCreativesResponse.nextPageToken returned from the previous call to the 'ListCreatives' method.
     */
    pageToken?: string;
    /**
     * Required. Name of the parent buyer that owns the creatives. The pattern for this resource is either `buyers/{buyerAccountId}` or `bidders/{bidderAccountId}`. For `buyers/{buyerAccountId}`, the `buyerAccountId` can be one of the following: 1. The ID of the buyer that is accessing their own creatives. 2. The ID of the child seat buyer under a bidder account. So for listing creatives pertaining to the child seat buyer (`456`) under bidder account (`123`), you would use the pattern: `buyers/456`. 3. The ID of the bidder itself. So for listing creatives pertaining to bidder (`123`), you would use `buyers/123`. If you want to access all creatives pertaining to both the bidder and all of its child seat accounts, you would use `bidders/{bidderAccountId}`, e.g., for all creatives pertaining to bidder (`123`), use `bidders/123`.
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
     * Output only. Name of the creative. Follows the pattern `buyers/{buyer}/creatives/{creative}`, where `{buyer}` represents the account ID of the buyer who owns the creative, and `{creative}` is the buyer-specific creative ID that references this creative in the bid response.
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
     * realtimebidding.buyers.userLists.close
     * @desc Change the status of a user list to CLOSED. This prevents new users from being added to the user list.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
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
     * @alias realtimebidding.buyers.userLists.close
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the user list to close. See UserList.name
     * @param {().CloseUserListRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    close(
      params: Params$Resource$Buyers$Userlists$Close,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    close(
      params?: Params$Resource$Buyers$Userlists$Close,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UserList>;
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
    ): void | GaxiosPromise<Schema$UserList> | GaxiosPromise<Readable> {
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$UserList>(parameters);
      }
    }

    /**
     * realtimebidding.buyers.userLists.create
     * @desc Create a new user list.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
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
     *     // Required. The name of the parent buyer of the user list to be retrieved that must follow the pattern `buyers/{buyerAccountId}`, where `{buyerAccountId}` represents the account ID of the buyer who owns user lists. For a bidder accessing user lists on behalf of a child seat buyer , `{buyerAccountId}` should represent the account ID of the child seat buyer.
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
     * @alias realtimebidding.buyers.userLists.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The name of the parent buyer of the user list to be retrieved that must follow the pattern `buyers/{buyerAccountId}`, where `{buyerAccountId}` represents the account ID of the buyer who owns user lists. For a bidder accessing user lists on behalf of a child seat buyer , `{buyerAccountId}` should represent the account ID of the child seat buyer.
     * @param {().UserList} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params: Params$Resource$Buyers$Userlists$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Buyers$Userlists$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UserList>;
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
    ): void | GaxiosPromise<Schema$UserList> | GaxiosPromise<Readable> {
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$UserList>(parameters);
      }
    }

    /**
     * realtimebidding.buyers.userLists.get
     * @desc Gets a user list by its name.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
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
     * @alias realtimebidding.buyers.userLists.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the user list to be retrieved. See UserList.name.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Buyers$Userlists$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Buyers$Userlists$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UserList>;
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
    ): void | GaxiosPromise<Schema$UserList> | GaxiosPromise<Readable> {
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$UserList>(parameters);
      }
    }

    /**
     * realtimebidding.buyers.userLists.getRemarketingTag
     * @desc Gets remarketing tag for a buyer. A remarketing tag is a piece of JavaScript code that can be placed on a web page. When a user visits a page containing a remarketing tag, Google adds the user to a user list.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
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
     *     // Required. To fetch remarketing tag for an account, name must follow the pattern `buyers/{accountId}` where `{accountId}` represents ID of a buyer that owns the remarketing tag. For a bidder accessing remarketing tag on behalf of a child seat buyer, `{accountId}` should represent the ID of the child seat buyer. To fetch remarketing tag for a specific user list, name must follow the pattern `buyers/{accountId}/userLists/{userListId}`. See UserList.name.
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
     * @alias realtimebidding.buyers.userLists.getRemarketingTag
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. To fetch remarketing tag for an account, name must follow the pattern `buyers/{accountId}` where `{accountId}` represents ID of a buyer that owns the remarketing tag. For a bidder accessing remarketing tag on behalf of a child seat buyer, `{accountId}` should represent the ID of the child seat buyer. To fetch remarketing tag for a specific user list, name must follow the pattern `buyers/{accountId}/userLists/{userListId}`. See UserList.name.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getRemarketingTag(
      params: Params$Resource$Buyers$Userlists$Getremarketingtag,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getRemarketingTag(
      params?: Params$Resource$Buyers$Userlists$Getremarketingtag,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GetRemarketingTagResponse>;
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
      | GaxiosPromise<Schema$GetRemarketingTagResponse>
      | GaxiosPromise<Readable> {
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GetRemarketingTagResponse>(parameters);
      }
    }

    /**
     * realtimebidding.buyers.userLists.list
     * @desc Lists the user lists visible to the current user.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
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
     *     // Continuation page token (as received from a previous response).
     *     pageToken: 'placeholder-value',
     *     // Required. The name of the parent buyer for the user lists to be returned that must follow the pattern `buyers/{buyerAccountId}`, where `{buyerAccountId}` represents the account ID of the buyer who owns user lists. For a bidder accessing user lists on behalf of a child seat buyer , `{buyerAccountId}` should represent the account ID of the child seat buyer.
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
     * @alias realtimebidding.buyers.userLists.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The number of results to return per page.
     * @param {string=} params.pageToken Continuation page token (as received from a previous response).
     * @param {string} params.parent Required. The name of the parent buyer for the user lists to be returned that must follow the pattern `buyers/{buyerAccountId}`, where `{buyerAccountId}` represents the account ID of the buyer who owns user lists. For a bidder accessing user lists on behalf of a child seat buyer , `{buyerAccountId}` should represent the account ID of the child seat buyer.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Buyers$Userlists$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Buyers$Userlists$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListUserListsResponse>;
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
      | GaxiosPromise<Schema$ListUserListsResponse>
      | GaxiosPromise<Readable> {
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ListUserListsResponse>(parameters);
      }
    }

    /**
     * realtimebidding.buyers.userLists.open
     * @desc Change the status of a user list to OPEN. This allows new users to be added to the user list.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
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
     * @alias realtimebidding.buyers.userLists.open
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the user list to open. See UserList.name
     * @param {().OpenUserListRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    open(
      params: Params$Resource$Buyers$Userlists$Open,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    open(
      params?: Params$Resource$Buyers$Userlists$Open,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UserList>;
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
    ): void | GaxiosPromise<Schema$UserList> | GaxiosPromise<Readable> {
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$UserList>(parameters);
      }
    }

    /**
     * realtimebidding.buyers.userLists.update
     * @desc Update the given user list. Only user lists with URLRestrictions can be updated.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/realtimebidding.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
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
     *     // Output only. Name of the user list that must follow the pattern `buyers/{buyer}/userLists/{user_list}`, where `{buyer}` represents the account ID of the buyer who owns the user list. For a bidder accessing user lists on behalf of a child seat buyer, `{buyer}` represents the account ID of the child seat buyer. `{user_list}` is an int64 identifier assigned by Google to uniquely identify a user list.
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
     * @alias realtimebidding.buyers.userLists.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Output only. Name of the user list that must follow the pattern `buyers/{buyer}/userLists/{user_list}`, where `{buyer}` represents the account ID of the buyer who owns the user list. For a bidder accessing user lists on behalf of a child seat buyer, `{buyer}` represents the account ID of the child seat buyer. `{user_list}` is an int64 identifier assigned by Google to uniquely identify a user list.
     * @param {().UserList} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params: Params$Resource$Buyers$Userlists$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Buyers$Userlists$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UserList>;
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
    ): void | GaxiosPromise<Schema$UserList> | GaxiosPromise<Readable> {
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
          callback as BodyResponseCallback<{} | void>
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
     * Required. The name of the parent buyer of the user list to be retrieved that must follow the pattern `buyers/{buyerAccountId}`, where `{buyerAccountId}` represents the account ID of the buyer who owns user lists. For a bidder accessing user lists on behalf of a child seat buyer , `{buyerAccountId}` should represent the account ID of the child seat buyer.
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
     * Required. To fetch remarketing tag for an account, name must follow the pattern `buyers/{accountId}` where `{accountId}` represents ID of a buyer that owns the remarketing tag. For a bidder accessing remarketing tag on behalf of a child seat buyer, `{accountId}` should represent the ID of the child seat buyer. To fetch remarketing tag for a specific user list, name must follow the pattern `buyers/{accountId}/userLists/{userListId}`. See UserList.name.
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
     * Continuation page token (as received from a previous response).
     */
    pageToken?: string;
    /**
     * Required. The name of the parent buyer for the user lists to be returned that must follow the pattern `buyers/{buyerAccountId}`, where `{buyerAccountId}` represents the account ID of the buyer who owns user lists. For a bidder accessing user lists on behalf of a child seat buyer , `{buyerAccountId}` should represent the account ID of the child seat buyer.
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
     * Output only. Name of the user list that must follow the pattern `buyers/{buyer}/userLists/{user_list}`, where `{buyer}` represents the account ID of the buyer who owns the user list. For a bidder accessing user lists on behalf of a child seat buyer, `{buyer}` represents the account ID of the child seat buyer. `{user_list}` is an int64 identifier assigned by Google to uniquely identify a user list.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UserList;
  }
}
