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
 * Ad Exchange Buyer API II
 *
 * Accesses the latest features for managing Ad Exchange accounts, Real-Time
 * Bidding configurations and auction metrics, and Marketplace programmatic
 * deals.
 *
 * @example
 * const google = require('googleapis');
 * const adexchangebuyer2 = google.adexchangebuyer2('v2beta1');
 *
 * @namespace adexchangebuyer2
 * @type {Function}
 * @version v2beta1
 * @variation v2beta1
 * @param {object=} options Options for Adexchangebuyer2
 */
export class Adexchangebuyer2 {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  accounts: Resource$Accounts;
  bidders: Resource$Bidders;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;
    this.getRoot.bind(this);

    this.accounts = new Resource$Accounts(this);
    this.bidders = new Resource$Bidders(this);
  }

  getRoot() {
    return this.root;
  }
}

/**
 * An absolute date range, specified by its start date and end date. The
 * supported range of dates begins 30 days before today and ends today. Validity
 * checked upon filter set creation. If a filter set with an absolute date range
 * is run at a later date more than 30 days after start_date, it will fail.
 */
export interface Schema$AbsoluteDateRange {
  /**
   * The end date of the range (inclusive). Must be within the 30 days leading
   * up to current date, and must be equal to or after start_date.
   */
  endDate: Schema$Date;
  /**
   * The start date of the range (inclusive). Must be within the 30 days leading
   * up to current date, and must be equal to or before end_date.
   */
  startDate: Schema$Date;
}
/**
 * A request for associating a deal and a creative.
 */
export interface Schema$AddDealAssociationRequest {
  /**
   * The association between a creative and a deal that should be added.
   */
  association: Schema$CreativeDealAssociation;
}
/**
 * @OutputOnly The app type the restriction applies to for mobile device.
 */
export interface Schema$AppContext {
  /**
   * The app types this restriction applies to.
   */
  appTypes: string[];
}
/**
 * @OutputOnly The auction type the restriction applies to.
 */
export interface Schema$AuctionContext {
  /**
   * The auction types this restriction applies to.
   */
  auctionTypes: string[];
}
/**
 * The set of metrics that are measured in numbers of bids, representing how
 * many bids with the specified dimension values were considered eligible at
 * each stage of the bidding funnel;
 */
export interface Schema$BidMetricsRow {
  /**
   * The number of bids that Ad Exchange received from the buyer.
   */
  bids: Schema$MetricValue;
  /**
   * The number of bids that were permitted to compete in the auction.
   */
  bidsInAuction: Schema$MetricValue;
  /**
   * The number of bids for which the buyer was billed.
   */
  billedImpressions: Schema$MetricValue;
  /**
   * The number of bids that won an impression.
   */
  impressionsWon: Schema$MetricValue;
  /**
   * The number of bids for which the corresponding impression was measurable
   * for viewability (as defined by Active View).
   */
  measurableImpressions: Schema$MetricValue;
  /**
   * The values of all dimensions associated with metric values in this row.
   */
  rowDimensions: Schema$RowDimensions;
  /**
   * The number of bids for which the corresponding impression was viewable (as
   * defined by Active View).
   */
  viewableImpressions: Schema$MetricValue;
}
/**
 * The number of impressions with the specified dimension values that were
 * considered to have no applicable bids, as described by the specified status.
 */
export interface Schema$BidResponseWithoutBidsStatusRow {
  /**
   * The number of impressions for which there was a bid response with the
   * specified status.
   */
  impressionCount: Schema$MetricValue;
  /**
   * The values of all dimensions associated with metric values in this row.
   */
  rowDimensions: Schema$RowDimensions;
  /**
   * The status specifying why the bid responses were considered to have no
   * applicable bids.
   */
  status: string;
}
/**
 * The number of impressions with the specified dimension values where the
 * corresponding bid request or bid response was not successful, as described by
 * the specified callout status.
 */
export interface Schema$CalloutStatusRow {
  /**
   * The ID of the callout status. See
   * [callout-status-codes](https://developers.google.com/ad-exchange/rtb/downloads/callout-status-codes).
   */
  calloutStatusId: number;
  /**
   * The number of impressions for which there was a bid request or bid response
   * with the specified callout status.
   */
  impressionCount: Schema$MetricValue;
  /**
   * The values of all dimensions associated with metric values in this row.
   */
  rowDimensions: Schema$RowDimensions;
}
/**
 * A client resource represents a client buyer&amp;mdash;an agency, a brand, or
 * an advertiser customer of the sponsor buyer. Users associated with the client
 * buyer have restricted access to the Ad Exchange Marketplace and certain other
 * sections of the Ad Exchange Buyer UI based on the role granted to the client
 * buyer. All fields are required unless otherwise specified.
 */
export interface Schema$Client {
  /**
   * The globally-unique numerical ID of the client. The value of this field is
   * ignored in create and update operations.
   */
  clientAccountId: string;
  /**
   * Name used to represent this client to publishers. You may have multiple
   * clients that map to the same entity, but for each client the combination of
   * `clientName` and entity must be unique. You can specify this field as
   * empty.
   */
  clientName: string;
  /**
   * Numerical identifier of the client entity. The entity can be an advertiser,
   * a brand, or an agency. This identifier is unique among all the entities
   * with the same type.  A list of all known advertisers with their identifiers
   * is available in the
   * [advertisers.txt](https://storage.googleapis.com/adx-rtb-dictionaries/advertisers.txt)
   * file.  A list of all known brands with their identifiers is available in
   * the
   * [brands.txt](https://storage.googleapis.com/adx-rtb-dictionaries/brands.txt)
   * file.  A list of all known agencies with their identifiers is available in
   * the
   * [agencies.txt](https://storage.googleapis.com/adx-rtb-dictionaries/agencies.txt)
   * file.
   */
  entityId: string;
  /**
   * The name of the entity. This field is automatically fetched based on the
   * type and ID. The value of this field is ignored in create and update
   * operations.
   */
  entityName: string;
  /**
   * The type of the client entity: `ADVERTISER`, `BRAND`, or `AGENCY`.
   */
  entityType: string;
  /**
   * Optional arbitrary unique identifier of this client buyer from the
   * standpoint of its Ad Exchange sponsor buyer.  This field can be used to
   * associate a client buyer with the identifier in the namespace of its
   * sponsor buyer, lookup client buyers by that identifier and verify whether
   * an Ad Exchange counterpart of a given client buyer already exists.  If
   * present, must be unique among all the client buyers for its Ad Exchange
   * sponsor buyer.
   */
  partnerClientId: string;
  /**
   * The role which is assigned to the client buyer. Each role implies a set of
   * permissions granted to the client. Must be one of `CLIENT_DEAL_VIEWER`,
   * `CLIENT_DEAL_NEGOTIATOR` or `CLIENT_DEAL_APPROVER`.
   */
  role: string;
  /**
   * The status of the client buyer.
   */
  status: string;
  /**
   * Whether the client buyer will be visible to sellers.
   */
  visibleToSeller: boolean;
}
/**
 * A client user is created under a client buyer and has restricted access to
 * the Ad Exchange Marketplace and certain other sections of the Ad Exchange
 * Buyer UI based on the role granted to the associated client buyer.  The only
 * way a new client user can be created is via accepting an email invitation
 * (see the accounts.clients.invitations.create method).  All fields are
 * required unless otherwise specified.
 */
export interface Schema$ClientUser {
  /**
   * Numerical account ID of the client buyer with which the user is associated;
   * the buyer must be a client of the current sponsor buyer. The value of this
   * field is ignored in an update operation.
   */
  clientAccountId: string;
  /**
   * User&#39;s email address. The value of this field is ignored in an update
   * operation.
   */
  email: string;
  /**
   * The status of the client user.
   */
  status: string;
  /**
   * The unique numerical ID of the client user that has accepted an invitation.
   * The value of this field is ignored in an update operation.
   */
  userId: string;
}
/**
 * An invitation for a new client user to get access to the Ad Exchange Buyer
 * UI. All fields are required unless otherwise specified.
 */
export interface Schema$ClientUserInvitation {
  /**
   * Numerical account ID of the client buyer that the invited user is
   * associated with. The value of this field is ignored in create operations.
   */
  clientAccountId: string;
  /**
   * The email address to which the invitation is sent. Email addresses should
   * be unique among all client users under each sponsor buyer.
   */
  email: string;
  /**
   * The unique numerical ID of the invitation that is sent to the user. The
   * value of this field is ignored in create operations.
   */
  invitationId: string;
}
/**
 * @OutputOnly Shows any corrections that were applied to this creative.
 */
export interface Schema$Correction {
  /**
   * The contexts for the correction.
   */
  contexts: Schema$ServingContext[];
  /**
   * Additional details about what was corrected.
   */
  details: string[];
  /**
   * The type of correction that was applied to the creative.
   */
  type: string;
}
/**
 * A creative and its classification data.  Next ID: 31
 */
export interface Schema$Creative {
  /**
   * The account that this creative belongs to. Can be used to filter the
   * response of the creatives.list method.
   */
  accountId: string;
  /**
   * The link to AdChoices destination page.
   */
  adChoicesDestinationUrl: string;
  /**
   * The name of the company being advertised in the creative.
   */
  advertiserName: string;
  /**
   * The agency ID for this creative.
   */
  agencyId: string;
  /**
   * @OutputOnly The last update timestamp of the creative via API.
   */
  apiUpdateTime: string;
  /**
   * All attributes for the ads that may be shown from this creative. Can be
   * used to filter the response of the creatives.list method.
   */
  attributes: string[];
  /**
   * The set of destination URLs for the creative.
   */
  clickThroughUrls: string[];
  /**
   * @OutputOnly Shows any corrections that were applied to this creative.
   */
  corrections: Schema$Correction[];
  /**
   * The buyer-defined creative ID of this creative. Can be used to filter the
   * response of the creatives.list method.
   */
  creativeId: string;
  /**
   * @OutputOnly The top-level deals status of this creative. If disapproved, an
   * entry for &#39;auctionType=DIRECT_DEALS&#39; (or &#39;ALL&#39;) in
   * serving_restrictions will also exist. Note that this may be nuanced with
   * other contextual restrictions, in which case, it may be preferable to read
   * from serving_restrictions directly. Can be used to filter the response of
   * the creatives.list method.
   */
  dealsStatus: string;
  /**
   * @OutputOnly Detected advertiser IDs, if any.
   */
  detectedAdvertiserIds: string[];
  /**
   * @OutputOnly The detected domains for this creative.
   */
  detectedDomains: string[];
  /**
   * @OutputOnly The detected languages for this creative. The order is
   * arbitrary. The codes are 2 or 5 characters and are documented at
   * https://developers.google.com/adwords/api/docs/appendix/languagecodes.
   */
  detectedLanguages: string[];
  /**
   * @OutputOnly Detected product categories, if any. See the
   * ad-product-categories.txt file in the technical documentation for a list of
   * IDs.
   */
  detectedProductCategories: number[];
  /**
   * @OutputOnly Detected sensitive categories, if any. See the
   * ad-sensitive-categories.txt file in the technical documentation for a list
   * of IDs. You should use these IDs along with the excluded-sensitive-category
   * field in the bid request to filter your bids.
   */
  detectedSensitiveCategories: number[];
  /**
   * @OutputOnly The filtering stats for this creative.
   */
  filteringStats: Schema$FilteringStats;
  /**
   * An HTML creative.
   */
  html: Schema$HtmlContent;
  /**
   * The set of URLs to be called to record an impression.
   */
  impressionTrackingUrls: string[];
  /**
   * A native creative.
   */
  native: Schema$NativeContent;
  /**
   * @OutputOnly The top-level open auction status of this creative. If
   * disapproved, an entry for &#39;auctionType = OPEN_AUCTION&#39; (or
   * &#39;ALL&#39;) in serving_restrictions will also exist. Note that this may
   * be nuanced with other contextual restrictions, in which case, it may be
   * preferable to read from serving_restrictions directly. Can be used to
   * filter the response of the creatives.list method.
   */
  openAuctionStatus: string;
  /**
   * All restricted categories for the ads that may be shown from this creative.
   */
  restrictedCategories: string[];
  /**
   * @OutputOnly The granular status of this ad in specific contexts. A context
   * here relates to where something ultimately serves (for example, a physical
   * location, a platform, an HTTPS vs HTTP request, or the type of auction).
   */
  servingRestrictions: Schema$ServingRestriction[];
  /**
   * All vendor IDs for the ads that may be shown from this creative. See
   * https://storage.googleapis.com/adx-rtb-dictionaries/vendors.txt for
   * possible values.
   */
  vendorIds: number[];
  /**
   * @OutputOnly The version of this creative.
   */
  version: number;
  /**
   * A video creative.
   */
  video: Schema$VideoContent;
}
/**
 * The association between a creative and a deal.
 */
export interface Schema$CreativeDealAssociation {
  /**
   * The account the creative belongs to.
   */
  accountId: string;
  /**
   * The ID of the creative associated with the deal.
   */
  creativeId: string;
  /**
   * The externalDealId for the deal associated with the creative.
   */
  dealsId: string;
}
/**
 * The number of bids with the specified dimension values that did not win the
 * auction (either were filtered pre-auction or lost the auction), as described
 * by the specified creative status.
 */
export interface Schema$CreativeStatusRow {
  /**
   * The number of bids with the specified status.
   */
  bidCount: Schema$MetricValue;
  /**
   * The ID of the creative status. See
   * [creative-status-codes](https://developers.google.com/ad-exchange/rtb/downloads/creative-status-codes).
   */
  creativeStatusId: number;
  /**
   * The values of all dimensions associated with metric values in this row.
   */
  rowDimensions: Schema$RowDimensions;
}
/**
 * Represents a whole calendar date, e.g. date of birth. The time of day and
 * time zone are either specified elsewhere or are not significant. The date is
 * relative to the Proleptic Gregorian Calendar. The day may be 0 to represent a
 * year and month where the day is not significant, e.g. credit card expiration
 * date. The year may be 0 to represent a month and day independent of year,
 * e.g. anniversary date. Related types are google.type.TimeOfDay and
 * `google.protobuf.Timestamp`.
 */
export interface Schema$Date {
  /**
   * Day of month. Must be from 1 to 31 and valid for the year and month, or 0
   * if specifying a year/month where the day is not significant.
   */
  day: number;
  /**
   * Month of year. Must be from 1 to 12, or 0 if specifying a date without a
   * month.
   */
  month: number;
  /**
   * Year of date. Must be from 1 to 9999, or 0 if specifying a date without a
   * year.
   */
  year: number;
}
/**
 * @OutputOnly The reason and details for a disapproval.
 */
export interface Schema$Disapproval {
  /**
   * Additional details about the reason for disapproval.
   */
  details: string[];
  /**
   * The categorized reason for disapproval.
   */
  reason: string;
}
/**
 * A generic empty message that you can re-use to avoid defining duplicated
 * empty messages in your APIs. A typical example is to use it as the request or
 * the response type of an API method. For instance:      service Foo { rpc
 * Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON
 * representation for `Empty` is empty JSON object `{}`.
 */
export interface Schema$Empty {}
/**
 * The number of filtered bids with the specified dimension values that have the
 * specified creative.
 */
export interface Schema$FilteredBidCreativeRow {
  /**
   * The number of bids with the specified creative.
   */
  bidCount: Schema$MetricValue;
  /**
   * The ID of the creative.
   */
  creativeId: string;
  /**
   * The values of all dimensions associated with metric values in this row.
   */
  rowDimensions: Schema$RowDimensions;
}
/**
 * The number of filtered bids with the specified dimension values, among those
 * filtered due to the requested filtering reason (i.e. creative status), that
 * have the specified detail.
 */
export interface Schema$FilteredBidDetailRow {
  /**
   * The number of bids with the specified detail.
   */
  bidCount: Schema$MetricValue;
  /**
   * The ID of the detail. The associated value can be looked up in the
   * dictionary file corresponding to the DetailType in the response message.
   */
  detailId: number;
  /**
   * The values of all dimensions associated with metric values in this row.
   */
  rowDimensions: Schema$RowDimensions;
}
/**
 * @OutputOnly Filtering reasons for this creative during a period of a single
 * day (from midnight to midnight Pacific).
 */
export interface Schema$FilteringStats {
  /**
   * The day during which the data was collected. The data is collected from
   * 00:00:00 to 23:59:59 PT. During switches from PST to PDT and back, the day
   * may contain 23 or 25 hours of data instead of the usual 24.
   */
  date: Schema$Date;
  /**
   * The set of filtering reasons for this date.
   */
  reasons: Schema$Reason[];
}
/**
 * A set of filters that is applied to a request for data. Within a filter set,
 * an AND operation is performed across the filters represented by each field.
 * An OR operation is performed across the filters represented by the multiple
 * values of a repeated field. E.g. &quot;format=VIDEO AND deal_id=12 AND
 * (seller_network_id=34 OR seller_network_id=56)&quot;
 */
export interface Schema$FilterSet {
  /**
   * An absolute date range, defined by a start date and an end date.
   * Interpreted relative to Pacific time zone.
   */
  absoluteDateRange: Schema$AbsoluteDateRange;
  /**
   * The ID of the creative on which to filter; optional. This field may be set
   * only for a filter set that accesses account-level troubleshooting data,
   * i.e. one whose name matches the `bidders/x/accounts/x/filterSets/x pattern.
   */
  creativeId: string;
  /**
   * The ID of the deal on which to filter; optional. This field may be set only
   * for a filter set that accesses account-level troubleshooting data, i.e. one
   * whose name matches the `bidders/x/accounts/x/filterSets/x pattern.
   */
  dealId: string;
  /**
   * The environment on which to filter; optional.
   */
  environment: string;
  /**
   * The list of formats on which to filter; may be empty. The filters
   * represented by multiple formats are ORed together (i.e. if non-empty,
   * results must match any one of the formats).
   */
  formats: string[];
  /**
   * A user-defined name of the filter set. Filter set names must be unique
   * globally and match one of the patterns:  - `bidders/x/filterSets/x (for
   * accessing bidder-level troubleshooting data) -
   * `bidders/x/accounts/x/filterSets/x (for accessing account-level
   * troubleshooting data)  This field is required in create operations.
   */
  name: string;
  /**
   * The list of platforms on which to filter; may be empty. The filters
   * represented by multiple platforms are ORed together (i.e. if non-empty,
   * results must match any one of the platforms).
   */
  platforms: string[];
  /**
   * An open-ended realtime time range, defined by the aggregation start
   * timestamp.
   */
  realtimeTimeRange: Schema$RealtimeTimeRange;
  /**
   * A relative date range, defined by an offset from today and a duration.
   * Interpreted relative to Pacific time zone.
   */
  relativeDateRange: Schema$RelativeDateRange;
  /**
   * The list of IDs of the seller (publisher) networks on which to filter; may
   * be empty. The filters represented by multiple seller network IDs are ORed
   * together (i.e. if non-empty, results must match any one of the publisher
   * networks). See
   * [seller-network-ids](https://developers.google.com/ad-exchange/rtb/downloads/seller-network-ids)
   * file for the set of existing seller network IDs.
   */
  sellerNetworkIds: number[];
  /**
   * The granularity of time intervals if a time series breakdown is desired;
   * optional.
   */
  timeSeriesGranularity: string;
}
/**
 * HTML content for a creative.
 */
export interface Schema$HtmlContent {
  /**
   * The height of the HTML snippet in pixels.
   */
  height: number;
  /**
   * The HTML snippet that displays the ad when inserted in the web page.
   */
  snippet: string;
  /**
   * The width of the HTML snippet in pixels.
   */
  width: number;
}
/**
 * An image resource. You may provide a larger image than was requested, so long
 * as the aspect ratio is preserved.
 */
export interface Schema$Image {
  /**
   * Image height in pixels.
   */
  height: number;
  /**
   * The URL of the image.
   */
  url: string;
  /**
   * Image width in pixels.
   */
  width: number;
}
/**
 * The set of metrics that are measured in numbers of impressions, representing
 * how many impressions with the specified dimension values were considered
 * eligible at each stage of the bidding funnel.
 */
export interface Schema$ImpressionMetricsRow {
  /**
   * The number of impressions available to the buyer on Ad Exchange. In some
   * cases this value may be unavailable.
   */
  availableImpressions: Schema$MetricValue;
  /**
   * The number of impressions for which Ad Exchange sent the buyer a bid
   * request.
   */
  bidRequests: Schema$MetricValue;
  /**
   * The number of impressions that match the buyer&#39;s inventory
   * pretargeting.
   */
  inventoryMatches: Schema$MetricValue;
  /**
   * The number of impressions for which Ad Exchange received a response from
   * the buyer that contained at least one applicable bid.
   */
  responsesWithBids: Schema$MetricValue;
  /**
   * The values of all dimensions associated with metric values in this row.
   */
  rowDimensions: Schema$RowDimensions;
  /**
   * The number of impressions for which the buyer successfully sent a response
   * to Ad Exchange.
   */
  successfulResponses: Schema$MetricValue;
}
/**
 * Response message for listing the metrics that are measured in number of bids.
 */
export interface Schema$ListBidMetricsResponse {
  /**
   * List of rows, each containing a set of bid metrics.
   */
  bidMetricsRows: Schema$BidMetricsRow[];
  /**
   * A token to retrieve the next page of results. Pass this value in the
   * ListBidMetricsRequest.pageToken field in the subsequent call to the
   * bidMetrics.list method to retrieve the next page of results.
   */
  nextPageToken: string;
}
/**
 * Response message for listing all reasons that bid responses resulted in an
 * error.
 */
export interface Schema$ListBidResponseErrorsResponse {
  /**
   * List of rows, with counts of bid responses aggregated by callout status.
   */
  calloutStatusRows: Schema$CalloutStatusRow[];
  /**
   * A token to retrieve the next page of results. Pass this value in the
   * ListBidResponseErrorsRequest.pageToken field in the subsequent call to the
   * bidResponseErrors.list method to retrieve the next page of results.
   */
  nextPageToken: string;
}
/**
 * Response message for listing all reasons that bid responses were considered
 * to have no applicable bids.
 */
export interface Schema$ListBidResponsesWithoutBidsResponse {
  /**
   * List of rows, with counts of bid responses without bids aggregated by
   * status.
   */
  bidResponseWithoutBidsStatusRows: Schema$BidResponseWithoutBidsStatusRow[];
  /**
   * A token to retrieve the next page of results. Pass this value in the
   * ListBidResponsesWithoutBidsRequest.pageToken field in the subsequent call
   * to the bidResponsesWithoutBids.list method to retrieve the next page of
   * results.
   */
  nextPageToken: string;
}
export interface Schema$ListClientsResponse {
  /**
   * The returned list of clients.
   */
  clients: Schema$Client[];
  /**
   * A token to retrieve the next page of results. Pass this value in the
   * ListClientsRequest.pageToken field in the subsequent call to the
   * accounts.clients.list method to retrieve the next page of results.
   */
  nextPageToken: string;
}
export interface Schema$ListClientUserInvitationsResponse {
  /**
   * The returned list of client users.
   */
  invitations: Schema$ClientUserInvitation[];
  /**
   * A token to retrieve the next page of results. Pass this value in the
   * ListClientUserInvitationsRequest.pageToken field in the subsequent call to
   * the clients.invitations.list method to retrieve the next page of results.
   */
  nextPageToken: string;
}
export interface Schema$ListClientUsersResponse {
  /**
   * A token to retrieve the next page of results. Pass this value in the
   * ListClientUsersRequest.pageToken field in the subsequent call to the
   * clients.invitations.list method to retrieve the next page of results.
   */
  nextPageToken: string;
  /**
   * The returned list of client users.
   */
  users: Schema$ClientUser[];
}
/**
 * A response for listing creatives.
 */
export interface Schema$ListCreativesResponse {
  /**
   * The list of creatives.
   */
  creatives: Schema$Creative[];
  /**
   * A token to retrieve the next page of results. Pass this value in the
   * ListCreativesRequest.page_token field in the subsequent call to
   * `ListCreatives` method to retrieve the next page of results.
   */
  nextPageToken: string;
}
/**
 * Response message for listing all creatives associated with a given filtered
 * bid reason.
 */
export interface Schema$ListCreativeStatusBreakdownByCreativeResponse {
  /**
   * List of rows, with counts of bids with a given creative status aggregated
   * by creative.
   */
  filteredBidCreativeRows: Schema$FilteredBidCreativeRow[];
  /**
   * A token to retrieve the next page of results. Pass this value in the
   * ListCreativeStatusBreakdownByCreativeRequest.pageToken field in the
   * subsequent call to the filteredBids.creatives.list method to retrieve the
   * next page of results.
   */
  nextPageToken: string;
}
/**
 * Response message for listing all details associated with a given filtered bid
 * reason.
 */
export interface Schema$ListCreativeStatusBreakdownByDetailResponse {
  /**
   * The type of detail that the detail IDs represent.
   */
  detailType: string;
  /**
   * List of rows, with counts of bids with a given creative status aggregated
   * by detail.
   */
  filteredBidDetailRows: Schema$FilteredBidDetailRow[];
  /**
   * A token to retrieve the next page of results. Pass this value in the
   * ListCreativeStatusBreakdownByDetailRequest.pageToken field in the
   * subsequent call to the filteredBids.details.list method to retrieve the
   * next page of results.
   */
  nextPageToken: string;
}
/**
 * A response for listing creative and deal associations
 */
export interface Schema$ListDealAssociationsResponse {
  /**
   * The list of associations.
   */
  associations: Schema$CreativeDealAssociation[];
  /**
   * A token to retrieve the next page of results. Pass this value in the
   * ListDealAssociationsRequest.page_token field in the subsequent call to
   * &#39;ListDealAssociation&#39; method to retrieve the next page of results.
   */
  nextPageToken: string;
}
/**
 * Response message for listing all reasons that bid requests were filtered and
 * not sent to the buyer.
 */
export interface Schema$ListFilteredBidRequestsResponse {
  /**
   * List of rows, with counts of filtered bid requests aggregated by callout
   * status.
   */
  calloutStatusRows: Schema$CalloutStatusRow[];
  /**
   * A token to retrieve the next page of results. Pass this value in the
   * ListFilteredBidRequestsRequest.pageToken field in the subsequent call to
   * the filteredBidRequests.list method to retrieve the next page of results.
   */
  nextPageToken: string;
}
/**
 * Response message for listing all reasons that bids were filtered from the
 * auction.
 */
export interface Schema$ListFilteredBidsResponse {
  /**
   * List of rows, with counts of filtered bids aggregated by filtering reason
   * (i.e. creative status).
   */
  creativeStatusRows: Schema$CreativeStatusRow[];
  /**
   * A token to retrieve the next page of results. Pass this value in the
   * ListFilteredBidsRequest.pageToken field in the subsequent call to the
   * filteredBids.list method to retrieve the next page of results.
   */
  nextPageToken: string;
}
/**
 * Response message for listing filter sets.
 */
export interface Schema$ListFilterSetsResponse {
  /**
   * The filter sets belonging to the buyer.
   */
  filterSets: Schema$FilterSet[];
  /**
   * A token to retrieve the next page of results. Pass this value in the
   * ListFilterSetsRequest.pageToken field in the subsequent call to the
   * accounts.filterSets.list method to retrieve the next page of results.
   */
  nextPageToken: string;
}
/**
 * Response message for listing the metrics that are measured in number of
 * impressions.
 */
export interface Schema$ListImpressionMetricsResponse {
  /**
   * List of rows, each containing a set of impression metrics.
   */
  impressionMetricsRows: Schema$ImpressionMetricsRow[];
  /**
   * A token to retrieve the next page of results. Pass this value in the
   * ListImpressionMetricsRequest.pageToken field in the subsequent call to the
   * impressionMetrics.list method to retrieve the next page of results.
   */
  nextPageToken: string;
}
/**
 * Response message for listing all reasons that bids lost in the auction.
 */
export interface Schema$ListLosingBidsResponse {
  /**
   * List of rows, with counts of losing bids aggregated by loss reason (i.e.
   * creative status).
   */
  creativeStatusRows: Schema$CreativeStatusRow[];
  /**
   * A token to retrieve the next page of results. Pass this value in the
   * ListLosingBidsRequest.pageToken field in the subsequent call to the
   * losingBids.list method to retrieve the next page of results.
   */
  nextPageToken: string;
}
/**
 * Response message for listing all reasons for which a buyer was not billed for
 * a winning bid.
 */
export interface Schema$ListNonBillableWinningBidsResponse {
  /**
   * A token to retrieve the next page of results. Pass this value in the
   * ListNonBillableWinningBidsRequest.pageToken field in the subsequent call to
   * the nonBillableWinningBids.list method to retrieve the next page of
   * results.
   */
  nextPageToken: string;
  /**
   * List of rows, with counts of bids not billed aggregated by reason.
   */
  nonBillableWinningBidStatusRows: Schema$NonBillableWinningBidStatusRow[];
}
/**
 * @OutputOnly The Geo criteria the restriction applies to.
 */
export interface Schema$LocationContext {
  /**
   * IDs representing the geo location for this context. Please refer to the
   * [geo-table.csv](https://storage.googleapis.com/adx-rtb-dictionaries/geo-table.csv)
   * file for different geo criteria IDs.
   */
  geoCriteriaIds: number[];
}
/**
 * A metric value, with an expected value and a variance; represents a count
 * that may be either exact or estimated (i.e. when sampled).
 */
export interface Schema$MetricValue {
  /**
   * The expected value of the metric.
   */
  value: string;
  /**
   * The variance (i.e. square of the standard deviation) of the metric value.
   * If value is exact, variance is 0. Can be used to calculate margin of error
   * as a percentage of value, using the following formula, where Z is the
   * standard constant that depends on the desired size of the confidence
   * interval (e.g. for 90% confidence interval, use Z = 1.645): marginOfError =
   * 100 * Z * sqrt(variance) / value
   */
  variance: string;
}
/**
 * Native content for a creative.
 */
export interface Schema$NativeContent {
  /**
   * The name of the advertiser or sponsor, to be displayed in the ad creative.
   */
  advertiserName: string;
  /**
   * The app icon, for app download ads.
   */
  appIcon: Schema$Image;
  /**
   * A long description of the ad.
   */
  body: string;
  /**
   * A label for the button that the user is supposed to click.
   */
  callToAction: string;
  /**
   * The URL that the browser/SDK will load when the user clicks the ad.
   */
  clickLinkUrl: string;
  /**
   * The URL to use for click tracking.
   */
  clickTrackingUrl: string;
  /**
   * A short title for the ad.
   */
  headline: string;
  /**
   * A large image.
   */
  image: Schema$Image;
  /**
   * A smaller image, for the advertiser&#39;s logo.
   */
  logo: Schema$Image;
  /**
   * The price of the promoted app including currency info.
   */
  priceDisplayText: string;
  /**
   * The app rating in the app store. Must be in the range [0-5].
   */
  starRating: number;
  /**
   * The URL to the app store to purchase/download the promoted app.
   */
  storeUrl: string;
  /**
   * The URL to fetch a native video ad.
   */
  videoUrl: string;
}
/**
 * The number of winning bids with the specified dimension values for which the
 * buyer was not billed, as described by the specified status.
 */
export interface Schema$NonBillableWinningBidStatusRow {
  /**
   * The number of bids with the specified status.
   */
  bidCount: Schema$MetricValue;
  /**
   * The values of all dimensions associated with metric values in this row.
   */
  rowDimensions: Schema$RowDimensions;
  /**
   * The status specifying why the winning bids were not billed.
   */
  status: string;
}
/**
 * @OutputOnly The type of platform the restriction applies to.
 */
export interface Schema$PlatformContext {
  /**
   * The platforms this restriction applies to.
   */
  platforms: string[];
}
/**
 * An open-ended realtime time range specified by the start timestamp. For
 * filter sets that specify a realtime time range RTB metrics continue to be
 * aggregated throughout the lifetime of the filter set.
 */
export interface Schema$RealtimeTimeRange {
  /**
   * The start timestamp of the real-time RTB metrics aggregation.
   */
  startTimestamp: string;
}
/**
 * A specific filtering status and how many times it occurred.
 */
export interface Schema$Reason {
  /**
   * The number of times the creative was filtered for the status. The count is
   * aggregated across all publishers on the exchange.
   */
  count: string;
  /**
   * The filtering status code. Please refer to the
   * [creative-status-codes.txt](https://storage.googleapis.com/adx-rtb-dictionaries/creative-status-codes.txt)
   * file for different statuses.
   */
  status: number;
}
/**
 * A relative date range, specified by an offset and a duration. The supported
 * range of dates begins 30 days before today and ends today. I.e. the limits
 * for these values are: offset_days &gt;= 0 duration_days &gt;= 1 offset_days +
 * duration_days &lt;= 30
 */
export interface Schema$RelativeDateRange {
  /**
   * The number of days in the requested date range. E.g. for a range spanning
   * today, 1. For a range spanning the last 7 days, 7.
   */
  durationDays: number;
  /**
   * The end date of the filter set, specified as the number of days before
   * today. E.g. for a range where the last date is today, 0.
   */
  offsetDays: number;
}
/**
 * A request for removing the association between a deal and a creative.
 */
export interface Schema$RemoveDealAssociationRequest {
  /**
   * The association between a creative and a deal that should be removed.
   */
  association: Schema$CreativeDealAssociation;
}
/**
 * A response may include multiple rows, breaking down along various dimensions.
 * Encapsulates the values of all dimensions for a given row.
 */
export interface Schema$RowDimensions {
  /**
   * The time interval that this row represents.
   */
  timeInterval: Schema$TimeInterval;
}
/**
 * @OutputOnly A security context.
 */
export interface Schema$SecurityContext {
  /**
   * The security types in this context.
   */
  securities: string[];
}
/**
 * The serving context for this restriction.
 */
export interface Schema$ServingContext {
  /**
   * Matches all contexts.
   */
  all: string;
  /**
   * Matches impressions for a particular app type.
   */
  appType: Schema$AppContext;
  /**
   * Matches impressions for a particular auction type.
   */
  auctionType: Schema$AuctionContext;
  /**
   * Matches impressions coming from users *or* publishers in a specific
   * location.
   */
  location: Schema$LocationContext;
  /**
   * Matches impressions coming from a particular platform.
   */
  platform: Schema$PlatformContext;
  /**
   * Matches impressions for a particular security type.
   */
  securityType: Schema$SecurityContext;
}
/**
 * @OutputOnly A representation of the status of an ad in a specific context. A
 * context here relates to where something ultimately serves (for example, a
 * user or publisher geo, a platform, an HTTPS vs HTTP request, or the type of
 * auction).
 */
export interface Schema$ServingRestriction {
  /**
   * The contexts for the restriction.
   */
  contexts: Schema$ServingContext[];
  /**
   * Any disapprovals bound to this restriction. Only present if
   * status=DISAPPROVED. Can be used to filter the response of the
   * creatives.list method.
   */
  disapprovalReasons: Schema$Disapproval[];
  /**
   * The status of the creative in this context (for example, it has been
   * explicitly disapproved or is pending review).
   */
  status: string;
}
/**
 * A request for stopping notifications for changes to creative Status.
 */
export interface Schema$StopWatchingCreativeRequest {}
/**
 * An interval of time, with an absolute start and end.
 */
export interface Schema$TimeInterval {
  /**
   * The timestamp marking the end of the range (exclusive) for which data is
   * included.
   */
  endTime: string;
  /**
   * The timestamp marking the start of the range (inclusive) for which data is
   * included.
   */
  startTime: string;
}
/**
 * Video content for a creative.
 */
export interface Schema$VideoContent {
  /**
   * The URL to fetch a video ad.
   */
  videoUrl: string;
  /**
   * The contents of a VAST document for a video ad. This document should
   * conform to the VAST 2.0 or 3.0 standard.
   */
  videoVastXml: string;
}
/**
 * A request for watching changes to creative Status.
 */
export interface Schema$WatchCreativeRequest {
  /**
   * The Pub/Sub topic to publish notifications to. This topic must already
   * exist and must give permission to ad-exchange-buyside-reports@google.com to
   * write to the topic. This should be the full resource name in
   * &quot;projects/{project_id}/topics/{topic_id}&quot; format.
   */
  topic: string;
}

export class Resource$Accounts {
  root: Adexchangebuyer2;
  clients: Resource$Accounts$Clients;
  creatives: Resource$Accounts$Creatives;
  constructor(root: Adexchangebuyer2) {
    this.root = root;
    this.getRoot.bind(this);
    this.clients = new Resource$Accounts$Clients(root);
    this.creatives = new Resource$Accounts$Creatives(root);
  }

  getRoot() {
    return this.root;
  }
}
export class Resource$Accounts$Clients {
  root: Adexchangebuyer2;
  invitations: Resource$Accounts$Clients$Invitations;
  users: Resource$Accounts$Clients$Users;
  constructor(root: Adexchangebuyer2) {
    this.root = root;
    this.getRoot.bind(this);
    this.invitations = new Resource$Accounts$Clients$Invitations(root);
    this.users = new Resource$Accounts$Clients$Users(root);
  }

  getRoot() {
    return this.root;
  }


  /**
   * adexchangebuyer2.accounts.clients.create
   * @desc Creates a new client buyer.
   * @alias adexchangebuyer2.accounts.clients.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Unique numerical account ID for the buyer of which the client buyer is a customer; the sponsor buyer to create a client for. (required)
   * @param {().Client} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions): AxiosPromise<Schema$Client>;
  create(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Client>,
      callback?: BodyResponseCallback<Schema$Client>): void;
  create(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Client>,
      callback?: BodyResponseCallback<Schema$Client>):
      void|AxiosPromise<Schema$Client> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/accounts/{accountId}/clients')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['accountId'],
      pathParams: ['accountId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Client>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Client>(parameters);
    }
  }


  /**
   * adexchangebuyer2.accounts.clients.get
   * @desc Gets a client buyer with a given client account ID.
   * @alias adexchangebuyer2.accounts.clients.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Numerical account ID of the client's sponsor buyer. (required)
   * @param {string} params.clientAccountId Numerical account ID of the client buyer to retrieve. (required)
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Client>;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Client>,
      callback?: BodyResponseCallback<Schema$Client>): void;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Client>,
      callback?: BodyResponseCallback<Schema$Client>):
      void|AxiosPromise<Schema$Client> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/v2beta1/accounts/{accountId}/clients/{clientAccountId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['accountId', 'clientAccountId'],
      pathParams: ['accountId', 'clientAccountId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Client>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Client>(parameters);
    }
  }


  /**
   * adexchangebuyer2.accounts.clients.list
   * @desc Lists all the clients for the current sponsor buyer.
   * @alias adexchangebuyer2.accounts.clients.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Unique numerical account ID of the sponsor buyer to list the clients for.
   * @param {integer=} params.pageSize Requested page size. The server may return fewer clients than requested. If unspecified, the server will pick an appropriate default.
   * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListClientsResponse.nextPageToken returned from the previous call to the accounts.clients.list method.
   * @param {string=} params.partnerClientId Optional unique identifier (from the standpoint of an Ad Exchange sponsor buyer partner) of the client to return. If specified, at most one client will be returned in the response.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListClientsResponse>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListClientsResponse>,
      callback?: BodyResponseCallback<Schema$ListClientsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListClientsResponse>,
      callback?: BodyResponseCallback<Schema$ListClientsResponse>):
      void|AxiosPromise<Schema$ListClientsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/accounts/{accountId}/clients')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['accountId'],
      pathParams: ['accountId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListClientsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListClientsResponse>(parameters);
    }
  }


  /**
   * adexchangebuyer2.accounts.clients.update
   * @desc Updates an existing client buyer.
   * @alias adexchangebuyer2.accounts.clients.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Unique numerical account ID for the buyer of which the client buyer is a customer; the sponsor buyer to update a client for. (required)
   * @param {string} params.clientAccountId Unique numerical account ID of the client to update. (required)
   * @param {().Client} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions): AxiosPromise<Schema$Client>;
  update(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Client>,
      callback?: BodyResponseCallback<Schema$Client>): void;
  update(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Client>,
      callback?: BodyResponseCallback<Schema$Client>):
      void|AxiosPromise<Schema$Client> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/v2beta1/accounts/{accountId}/clients/{clientAccountId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['accountId', 'clientAccountId'],
      pathParams: ['accountId', 'clientAccountId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Client>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Client>(parameters);
    }
  }
}
export class Resource$Accounts$Clients$Invitations {
  root: Adexchangebuyer2;
  constructor(root: Adexchangebuyer2) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * adexchangebuyer2.accounts.clients.invitations.create
   * @desc Creates and sends out an email invitation to access an Ad Exchange
   * client buyer account.
   * @alias adexchangebuyer2.accounts.clients.invitations.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Numerical account ID of the client's sponsor buyer. (required)
   * @param {string} params.clientAccountId Numerical account ID of the client buyer that the user should be associated with. (required)
   * @param {().ClientUserInvitation} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ClientUserInvitation>;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ClientUserInvitation>,
      callback?: BodyResponseCallback<Schema$ClientUserInvitation>): void;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ClientUserInvitation>,
      callback?: BodyResponseCallback<Schema$ClientUserInvitation>):
      void|AxiosPromise<Schema$ClientUserInvitation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['accountId', 'clientAccountId'],
      pathParams: ['accountId', 'clientAccountId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ClientUserInvitation>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ClientUserInvitation>(parameters);
    }
  }


  /**
   * adexchangebuyer2.accounts.clients.invitations.get
   * @desc Retrieves an existing client user invitation.
   * @alias adexchangebuyer2.accounts.clients.invitations.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Numerical account ID of the client's sponsor buyer. (required)
   * @param {string} params.clientAccountId Numerical account ID of the client buyer that the user invitation to be retrieved is associated with. (required)
   * @param {string} params.invitationId Numerical identifier of the user invitation to retrieve. (required)
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any,
      options?: MethodOptions): AxiosPromise<Schema$ClientUserInvitation>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ClientUserInvitation>,
      callback?: BodyResponseCallback<Schema$ClientUserInvitation>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ClientUserInvitation>,
      callback?: BodyResponseCallback<Schema$ClientUserInvitation>):
      void|AxiosPromise<Schema$ClientUserInvitation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations/{invitationId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['accountId', 'clientAccountId', 'invitationId'],
      pathParams: ['accountId', 'clientAccountId', 'invitationId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ClientUserInvitation>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ClientUserInvitation>(parameters);
    }
  }


  /**
   * adexchangebuyer2.accounts.clients.invitations.list
   * @desc Lists all the client users invitations for a client with a given
   * account ID.
   * @alias adexchangebuyer2.accounts.clients.invitations.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Numerical account ID of the client's sponsor buyer. (required)
   * @param {string} params.clientAccountId Numerical account ID of the client buyer to list invitations for. (required) You must either specify a string representation of a numerical account identifier or the `-` character to list all the invitations for all the clients of a given sponsor buyer.
   * @param {integer=} params.pageSize Requested page size. Server may return fewer clients than requested. If unspecified, server will pick an appropriate default.
   * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListClientUserInvitationsResponse.nextPageToken returned from the previous call to the clients.invitations.list method.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListClientUserInvitationsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListClientUserInvitationsResponse>,
      callback?:
          BodyResponseCallback<Schema$ListClientUserInvitationsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListClientUserInvitationsResponse>,
      callback?:
          BodyResponseCallback<Schema$ListClientUserInvitationsResponse>):
      void|AxiosPromise<Schema$ListClientUserInvitationsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['accountId', 'clientAccountId'],
      pathParams: ['accountId', 'clientAccountId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListClientUserInvitationsResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$ListClientUserInvitationsResponse>(
          parameters);
    }
  }
}

export class Resource$Accounts$Clients$Users {
  root: Adexchangebuyer2;
  constructor(root: Adexchangebuyer2) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * adexchangebuyer2.accounts.clients.users.get
   * @desc Retrieves an existing client user.
   * @alias adexchangebuyer2.accounts.clients.users.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Numerical account ID of the client's sponsor buyer. (required)
   * @param {string} params.clientAccountId Numerical account ID of the client buyer that the user to be retrieved is associated with. (required)
   * @param {string} params.userId Numerical identifier of the user to retrieve. (required)
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$ClientUser>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ClientUser>,
      callback?: BodyResponseCallback<Schema$ClientUser>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ClientUser>,
      callback?: BodyResponseCallback<Schema$ClientUser>):
      void|AxiosPromise<Schema$ClientUser> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v2beta1/accounts/{accountId}/clients/{clientAccountId}/users/{userId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['accountId', 'clientAccountId', 'userId'],
      pathParams: ['accountId', 'clientAccountId', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ClientUser>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ClientUser>(parameters);
    }
  }


  /**
   * adexchangebuyer2.accounts.clients.users.list
   * @desc Lists all the known client users for a specified sponsor buyer
   * account ID.
   * @alias adexchangebuyer2.accounts.clients.users.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Numerical account ID of the sponsor buyer of the client to list users for. (required)
   * @param {string} params.clientAccountId The account ID of the client buyer to list users for. (required) You must specify either a string representation of a numerical account identifier or the `-` character to list all the client users for all the clients of a given sponsor buyer.
   * @param {integer=} params.pageSize Requested page size. The server may return fewer clients than requested. If unspecified, the server will pick an appropriate default.
   * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListClientUsersResponse.nextPageToken returned from the previous call to the accounts.clients.users.list method.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListClientUsersResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListClientUsersResponse>,
      callback?: BodyResponseCallback<Schema$ListClientUsersResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListClientUsersResponse>,
      callback?: BodyResponseCallback<Schema$ListClientUsersResponse>):
      void|AxiosPromise<Schema$ListClientUsersResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v2beta1/accounts/{accountId}/clients/{clientAccountId}/users')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['accountId', 'clientAccountId'],
      pathParams: ['accountId', 'clientAccountId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListClientUsersResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListClientUsersResponse>(parameters);
    }
  }


  /**
   * adexchangebuyer2.accounts.clients.users.update
   * @desc Updates an existing client user. Only the user status can be changed
   * on update.
   * @alias adexchangebuyer2.accounts.clients.users.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Numerical account ID of the client's sponsor buyer. (required)
   * @param {string} params.clientAccountId Numerical account ID of the client buyer that the user to be retrieved is associated with. (required)
   * @param {string} params.userId Numerical identifier of the user to retrieve. (required)
   * @param {().ClientUser} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ClientUser>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ClientUser>,
      callback?: BodyResponseCallback<Schema$ClientUser>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ClientUser>,
      callback?: BodyResponseCallback<Schema$ClientUser>):
      void|AxiosPromise<Schema$ClientUser> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v2beta1/accounts/{accountId}/clients/{clientAccountId}/users/{userId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['accountId', 'clientAccountId', 'userId'],
      pathParams: ['accountId', 'clientAccountId', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ClientUser>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ClientUser>(parameters);
    }
  }
}


export class Resource$Accounts$Creatives {
  root: Adexchangebuyer2;
  dealAssociations: Resource$Accounts$Creatives$Dealassociations;
  constructor(root: Adexchangebuyer2) {
    this.root = root;
    this.getRoot.bind(this);
    this.dealAssociations =
        new Resource$Accounts$Creatives$Dealassociations(root);
  }

  getRoot() {
    return this.root;
  }


  /**
   * adexchangebuyer2.accounts.creatives.create
   * @desc Creates a creative.
   * @alias adexchangebuyer2.accounts.creatives.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The account that this creative belongs to. Can be used to filter the response of the creatives.list method.
   * @param {string=} params.duplicateIdMode Indicates if multiple creatives can share an ID or not. Default is NO_DUPLICATES (one ID per creative).
   * @param {().Creative} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions): AxiosPromise<Schema$Creative>;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Creative>,
      callback?: BodyResponseCallback<Schema$Creative>): void;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Creative>,
      callback?: BodyResponseCallback<Schema$Creative>):
      void|AxiosPromise<Schema$Creative> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/accounts/{accountId}/creatives')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['accountId'],
      pathParams: ['accountId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Creative>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Creative>(parameters);
    }
  }


  /**
   * adexchangebuyer2.accounts.creatives.get
   * @desc Gets a creative.
   * @alias adexchangebuyer2.accounts.creatives.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The account the creative belongs to.
   * @param {string} params.creativeId The ID of the creative to retrieve.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Creative>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Creative>,
      callback?: BodyResponseCallback<Schema$Creative>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Creative>,
      callback?: BodyResponseCallback<Schema$Creative>):
      void|AxiosPromise<Schema$Creative> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/v2beta1/accounts/{accountId}/creatives/{creativeId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['accountId', 'creativeId'],
      pathParams: ['accountId', 'creativeId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Creative>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Creative>(parameters);
    }
  }


  /**
   * adexchangebuyer2.accounts.creatives.list
   * @desc Lists creatives.
   * @alias adexchangebuyer2.accounts.creatives.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The account to list the creatives from. Specify "-" to list all creatives the current user has access to.
   * @param {integer=} params.pageSize Requested page size. The server may return fewer creatives than requested (due to timeout constraint) even if more are available via another call. If unspecified, server will pick an appropriate default. Acceptable values are 1 to 1000, inclusive.
   * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListCreativesResponse.next_page_token returned from the previous call to 'ListCreatives' method.
   * @param {string=} params.query An optional query string to filter creatives. If no filter is specified, all active creatives will be returned. Supported queries are: <ul> <li>accountId=<i>account_id_string</i> <li>creativeId=<i>creative_id_string</i> <li>dealsStatus: {approved, conditionally_approved, disapproved,                    not_checked} <li>openAuctionStatus: {approved, conditionally_approved, disapproved,                           not_checked} <li>attribute: {a numeric attribute from the list of attributes} <li>disapprovalReason: {a reason from DisapprovalReason} </ul> Example: 'accountId=12345 AND (dealsStatus:disapproved AND disapprovalReason:unacceptable_content) OR attribute:47'
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListCreativesResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListCreativesResponse>,
      callback?: BodyResponseCallback<Schema$ListCreativesResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListCreativesResponse>,
      callback?: BodyResponseCallback<Schema$ListCreativesResponse>):
      void|AxiosPromise<Schema$ListCreativesResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/accounts/{accountId}/creatives')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['accountId'],
      pathParams: ['accountId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListCreativesResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListCreativesResponse>(parameters);
    }
  }


  /**
   * adexchangebuyer2.accounts.creatives.stopWatching
   * @desc Stops watching a creative. Will stop push notifications being sent to
   * the topics when the creative changes status.
   * @alias adexchangebuyer2.accounts.creatives.stopWatching
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The account of the creative to stop notifications for.
   * @param {string} params.creativeId The creative ID of the creative to stop notifications for. Specify "-" to specify stopping account level notifications.
   * @param {().StopWatchingCreativeRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  stopWatching(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Empty>;
  stopWatching(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>): void;
  stopWatching(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>):
      void|AxiosPromise<Schema$Empty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v2beta1/accounts/{accountId}/creatives/{creativeId}:stopWatching')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['accountId', 'creativeId'],
      pathParams: ['accountId', 'creativeId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Empty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Empty>(parameters);
    }
  }


  /**
   * adexchangebuyer2.accounts.creatives.update
   * @desc Updates a creative.
   * @alias adexchangebuyer2.accounts.creatives.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The account that this creative belongs to. Can be used to filter the response of the creatives.list method.
   * @param {string} params.creativeId The buyer-defined creative ID of this creative. Can be used to filter the response of the creatives.list method.
   * @param {().Creative} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions): AxiosPromise<Schema$Creative>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Creative>,
      callback?: BodyResponseCallback<Schema$Creative>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Creative>,
      callback?: BodyResponseCallback<Schema$Creative>):
      void|AxiosPromise<Schema$Creative> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/v2beta1/accounts/{accountId}/creatives/{creativeId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['accountId', 'creativeId'],
      pathParams: ['accountId', 'creativeId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Creative>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Creative>(parameters);
    }
  }


  /**
   * adexchangebuyer2.accounts.creatives.watch
   * @desc Watches a creative. Will result in push notifications being sent to
   * the topic when the creative changes status.
   * @alias adexchangebuyer2.accounts.creatives.watch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The account of the creative to watch.
   * @param {string} params.creativeId The creative ID to watch for status changes. Specify "-" to watch all creatives under the above account. If both creative-level and account-level notifications are sent, only a single notification will be sent to the creative-level notification topic.
   * @param {().WatchCreativeRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  watch(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
  watch(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>): void;
  watch(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>):
      void|AxiosPromise<Schema$Empty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/v2beta1/accounts/{accountId}/creatives/{creativeId}:watch')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['accountId', 'creativeId'],
      pathParams: ['accountId', 'creativeId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Empty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Empty>(parameters);
    }
  }
}
export class Resource$Accounts$Creatives$Dealassociations {
  root: Adexchangebuyer2;
  constructor(root: Adexchangebuyer2) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * adexchangebuyer2.accounts.creatives.dealAssociations.add
   * @desc Associate an existing deal with a creative.
   * @alias adexchangebuyer2.accounts.creatives.dealAssociations.add
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The account the creative belongs to.
   * @param {string} params.creativeId The ID of the creative associated with the deal.
   * @param {().AddDealAssociationRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  add(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
  add(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>): void;
  add(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>):
      void|AxiosPromise<Schema$Empty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations:add')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['accountId', 'creativeId'],
      pathParams: ['accountId', 'creativeId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Empty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Empty>(parameters);
    }
  }


  /**
   * adexchangebuyer2.accounts.creatives.dealAssociations.list
   * @desc List all creative-deal associations.
   * @alias adexchangebuyer2.accounts.creatives.dealAssociations.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The account to list the associations from. Specify "-" to list all creatives the current user has access to.
   * @param {string} params.creativeId The creative ID to list the associations from. Specify "-" to list all creatives under the above account.
   * @param {integer=} params.pageSize Requested page size. Server may return fewer associations than requested. If unspecified, server will pick an appropriate default.
   * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListDealAssociationsResponse.next_page_token returned from the previous call to 'ListDealAssociations' method.
   * @param {string=} params.query An optional query string to filter deal associations. If no filter is specified, all associations will be returned. Supported queries are: <ul> <li>accountId=<i>account_id_string</i> <li>creativeId=<i>creative_id_string</i> <li>dealsId=<i>deals_id_string</i> <li>dealsStatus:{approved, conditionally_approved, disapproved,                   not_checked} <li>openAuctionStatus:{approved, conditionally_approved, disapproved,                          not_checked} </ul> Example: 'dealsId=12345 AND dealsStatus:disapproved'
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListDealAssociationsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListDealAssociationsResponse>,
      callback?: BodyResponseCallback<Schema$ListDealAssociationsResponse>):
      void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListDealAssociationsResponse>,
      callback?: BodyResponseCallback<Schema$ListDealAssociationsResponse>):
      void|AxiosPromise<Schema$ListDealAssociationsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['accountId', 'creativeId'],
      pathParams: ['accountId', 'creativeId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListDealAssociationsResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$ListDealAssociationsResponse>(parameters);
    }
  }


  /**
   * adexchangebuyer2.accounts.creatives.dealAssociations.remove
   * @desc Remove the association between a deal and a creative.
   * @alias adexchangebuyer2.accounts.creatives.dealAssociations.remove
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The account the creative belongs to.
   * @param {string} params.creativeId The ID of the creative associated with the deal.
   * @param {().RemoveDealAssociationRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  remove(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
  remove(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>): void;
  remove(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>):
      void|AxiosPromise<Schema$Empty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations:remove')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['accountId', 'creativeId'],
      pathParams: ['accountId', 'creativeId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Empty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Empty>(parameters);
    }
  }
}



export class Resource$Bidders {
  root: Adexchangebuyer2;
  accounts: Resource$Bidders$Accounts;
  filterSets: Resource$Bidders$Filtersets;
  constructor(root: Adexchangebuyer2) {
    this.root = root;
    this.getRoot.bind(this);
    this.accounts = new Resource$Bidders$Accounts(root);
    this.filterSets = new Resource$Bidders$Filtersets(root);
  }

  getRoot() {
    return this.root;
  }
}
export class Resource$Bidders$Accounts {
  root: Adexchangebuyer2;
  filterSets: Resource$Bidders$Accounts$Filtersets;
  constructor(root: Adexchangebuyer2) {
    this.root = root;
    this.getRoot.bind(this);
    this.filterSets = new Resource$Bidders$Accounts$Filtersets(root);
  }

  getRoot() {
    return this.root;
  }
}
export class Resource$Bidders$Accounts$Filtersets {
  root: Adexchangebuyer2;
  bidMetrics: Resource$Bidders$Accounts$Filtersets$Bidmetrics;
  bidResponseErrors: Resource$Bidders$Accounts$Filtersets$Bidresponseerrors;
  bidResponsesWithoutBids:
      Resource$Bidders$Accounts$Filtersets$Bidresponseswithoutbids;
  filteredBidRequests: Resource$Bidders$Accounts$Filtersets$Filteredbidrequests;
  filteredBids: Resource$Bidders$Accounts$Filtersets$Filteredbids;
  impressionMetrics: Resource$Bidders$Accounts$Filtersets$Impressionmetrics;
  losingBids: Resource$Bidders$Accounts$Filtersets$Losingbids;
  nonBillableWinningBids:
      Resource$Bidders$Accounts$Filtersets$Nonbillablewinningbids;
  constructor(root: Adexchangebuyer2) {
    this.root = root;
    this.getRoot.bind(this);
    this.bidMetrics = new Resource$Bidders$Accounts$Filtersets$Bidmetrics(root);
    this.bidResponseErrors =
        new Resource$Bidders$Accounts$Filtersets$Bidresponseerrors(root);
    this.bidResponsesWithoutBids =
        new Resource$Bidders$Accounts$Filtersets$Bidresponseswithoutbids(root);
    this.filteredBidRequests =
        new Resource$Bidders$Accounts$Filtersets$Filteredbidrequests(root);
    this.filteredBids =
        new Resource$Bidders$Accounts$Filtersets$Filteredbids(root);
    this.impressionMetrics =
        new Resource$Bidders$Accounts$Filtersets$Impressionmetrics(root);
    this.losingBids = new Resource$Bidders$Accounts$Filtersets$Losingbids(root);
    this.nonBillableWinningBids =
        new Resource$Bidders$Accounts$Filtersets$Nonbillablewinningbids(root);
  }

  getRoot() {
    return this.root;
  }


  /**
   * adexchangebuyer2.bidders.accounts.filterSets.create
   * @desc Creates the specified filter set for the account with the given
   * account ID.
   * @alias adexchangebuyer2.bidders.accounts.filterSets.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {boolean=} params.isTransient Whether the filter set is transient, or should be persisted indefinitely. By default, filter sets are not transient. If transient, it will be available for at least 1 hour after creation.
   * @param {string} params.ownerName Name of the owner (bidder or account) of the filter set to be created. For example:  - For a bidder-level filter set for bidder 123: `bidders/123`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456`
   * @param {().FilterSet} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions): AxiosPromise<Schema$FilterSet>;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$FilterSet>,
      callback?: BodyResponseCallback<Schema$FilterSet>): void;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$FilterSet>,
      callback?: BodyResponseCallback<Schema$FilterSet>):
      void|AxiosPromise<Schema$FilterSet> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/{+ownerName}/filterSets')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['ownerName'],
      pathParams: ['ownerName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$FilterSet>(parameters, callback);
    } else {
      return createAPIRequest<Schema$FilterSet>(parameters);
    }
  }


  /**
   * adexchangebuyer2.bidders.accounts.filterSets.delete
   * @desc Deletes the requested filter set from the account with the given
   * account ID.
   * @alias adexchangebuyer2.bidders.accounts.filterSets.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Full name of the resource to delete. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>):
      void|AxiosPromise<Schema$Empty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Empty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Empty>(parameters);
    }
  }


  /**
   * adexchangebuyer2.bidders.accounts.filterSets.get
   * @desc Retrieves the requested filter set for the account with the given
   * account ID.
   * @alias adexchangebuyer2.bidders.accounts.filterSets.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Full name of the resource being requested. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$FilterSet>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$FilterSet>,
      callback?: BodyResponseCallback<Schema$FilterSet>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$FilterSet>,
      callback?: BodyResponseCallback<Schema$FilterSet>):
      void|AxiosPromise<Schema$FilterSet> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$FilterSet>(parameters, callback);
    } else {
      return createAPIRequest<Schema$FilterSet>(parameters);
    }
  }


  /**
   * adexchangebuyer2.bidders.accounts.filterSets.list
   * @desc Lists all filter sets for the account with the given account ID.
   * @alias adexchangebuyer2.bidders.accounts.filterSets.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.ownerName Name of the owner (bidder or account) of the filter sets to be listed. For example:  - For a bidder-level filter set for bidder 123: `bidders/123`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456`
   * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
   * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListFilterSetsResponse.nextPageToken returned from the previous call to the accounts.filterSets.list method.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListFilterSetsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListFilterSetsResponse>,
      callback?: BodyResponseCallback<Schema$ListFilterSetsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListFilterSetsResponse>,
      callback?: BodyResponseCallback<Schema$ListFilterSetsResponse>):
      void|AxiosPromise<Schema$ListFilterSetsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/{+ownerName}/filterSets')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['ownerName'],
      pathParams: ['ownerName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListFilterSetsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListFilterSetsResponse>(parameters);
    }
  }
}
export class Resource$Bidders$Accounts$Filtersets$Bidmetrics {
  root: Adexchangebuyer2;
  constructor(root: Adexchangebuyer2) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * adexchangebuyer2.bidders.accounts.filterSets.bidMetrics.list
   * @desc Lists all metrics that are measured in terms of number of bids.
   * @alias adexchangebuyer2.bidders.accounts.filterSets.bidMetrics.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
   * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
   * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListBidMetricsResponse.nextPageToken returned from the previous call to the bidMetrics.list method.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListBidMetricsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListBidMetricsResponse>,
      callback?: BodyResponseCallback<Schema$ListBidMetricsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListBidMetricsResponse>,
      callback?: BodyResponseCallback<Schema$ListBidMetricsResponse>):
      void|AxiosPromise<Schema$ListBidMetricsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/{+filterSetName}/bidMetrics')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['filterSetName'],
      pathParams: ['filterSetName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListBidMetricsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListBidMetricsResponse>(parameters);
    }
  }
}

export class Resource$Bidders$Accounts$Filtersets$Bidresponseerrors {
  root: Adexchangebuyer2;
  constructor(root: Adexchangebuyer2) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * adexchangebuyer2.bidders.accounts.filterSets.bidResponseErrors.list
   * @desc List all errors that occurred in bid responses, with the number of
   * bid responses affected for each reason.
   * @alias adexchangebuyer2.bidders.accounts.filterSets.bidResponseErrors.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
   * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
   * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListBidResponseErrorsResponse.nextPageToken returned from the previous call to the bidResponseErrors.list method.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListBidResponseErrorsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListBidResponseErrorsResponse>,
      callback?: BodyResponseCallback<Schema$ListBidResponseErrorsResponse>):
      void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListBidResponseErrorsResponse>,
      callback?: BodyResponseCallback<Schema$ListBidResponseErrorsResponse>):
      void|AxiosPromise<Schema$ListBidResponseErrorsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/{+filterSetName}/bidResponseErrors')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['filterSetName'],
      pathParams: ['filterSetName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListBidResponseErrorsResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$ListBidResponseErrorsResponse>(parameters);
    }
  }
}

export class Resource$Bidders$Accounts$Filtersets$Bidresponseswithoutbids {
  root: Adexchangebuyer2;
  constructor(root: Adexchangebuyer2) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * adexchangebuyer2.bidders.accounts.filterSets.bidResponsesWithoutBids.list
   * @desc List all reasons for which bid responses were considered to have no
   * applicable bids, with the number of bid responses affected for each reason.
   * @alias
   * adexchangebuyer2.bidders.accounts.filterSets.bidResponsesWithoutBids.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
   * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
   * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListBidResponsesWithoutBidsResponse.nextPageToken returned from the previous call to the bidResponsesWithoutBids.list method.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListBidResponsesWithoutBidsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListBidResponsesWithoutBidsResponse>,
      callback?:
          BodyResponseCallback<Schema$ListBidResponsesWithoutBidsResponse>):
      void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListBidResponsesWithoutBidsResponse>,
      callback?:
          BodyResponseCallback<Schema$ListBidResponsesWithoutBidsResponse>):
      void|AxiosPromise<Schema$ListBidResponsesWithoutBidsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/{+filterSetName}/bidResponsesWithoutBids')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['filterSetName'],
      pathParams: ['filterSetName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListBidResponsesWithoutBidsResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$ListBidResponsesWithoutBidsResponse>(
          parameters);
    }
  }
}

export class Resource$Bidders$Accounts$Filtersets$Filteredbidrequests {
  root: Adexchangebuyer2;
  constructor(root: Adexchangebuyer2) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * adexchangebuyer2.bidders.accounts.filterSets.filteredBidRequests.list
   * @desc List all reasons that caused a bid request not to be sent for an
   * impression, with the number of bid requests not sent for each reason.
   * @alias
   * adexchangebuyer2.bidders.accounts.filterSets.filteredBidRequests.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
   * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
   * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListFilteredBidRequestsResponse.nextPageToken returned from the previous call to the filteredBidRequests.list method.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListFilteredBidRequestsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListFilteredBidRequestsResponse>,
      callback?: BodyResponseCallback<Schema$ListFilteredBidRequestsResponse>):
      void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListFilteredBidRequestsResponse>,
      callback?: BodyResponseCallback<Schema$ListFilteredBidRequestsResponse>):
      void|AxiosPromise<Schema$ListFilteredBidRequestsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/{+filterSetName}/filteredBidRequests')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['filterSetName'],
      pathParams: ['filterSetName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListFilteredBidRequestsResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$ListFilteredBidRequestsResponse>(
          parameters);
    }
  }
}

export class Resource$Bidders$Accounts$Filtersets$Filteredbids {
  root: Adexchangebuyer2;
  creatives: Resource$Bidders$Accounts$Filtersets$Filteredbids$Creatives;
  details: Resource$Bidders$Accounts$Filtersets$Filteredbids$Details;
  constructor(root: Adexchangebuyer2) {
    this.root = root;
    this.getRoot.bind(this);
    this.creatives =
        new Resource$Bidders$Accounts$Filtersets$Filteredbids$Creatives(root);
    this.details =
        new Resource$Bidders$Accounts$Filtersets$Filteredbids$Details(root);
  }

  getRoot() {
    return this.root;
  }


  /**
   * adexchangebuyer2.bidders.accounts.filterSets.filteredBids.list
   * @desc List all reasons for which bids were filtered, with the number of
   * bids filtered for each reason.
   * @alias adexchangebuyer2.bidders.accounts.filterSets.filteredBids.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
   * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
   * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListFilteredBidsResponse.nextPageToken returned from the previous call to the filteredBids.list method.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListFilteredBidsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListFilteredBidsResponse>,
      callback?: BodyResponseCallback<Schema$ListFilteredBidsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListFilteredBidsResponse>,
      callback?: BodyResponseCallback<Schema$ListFilteredBidsResponse>):
      void|AxiosPromise<Schema$ListFilteredBidsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/{+filterSetName}/filteredBids')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['filterSetName'],
      pathParams: ['filterSetName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListFilteredBidsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListFilteredBidsResponse>(parameters);
    }
  }
}
export class Resource$Bidders$Accounts$Filtersets$Filteredbids$Creatives {
  root: Adexchangebuyer2;
  constructor(root: Adexchangebuyer2) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * adexchangebuyer2.bidders.accounts.filterSets.filteredBids.creatives.list
   * @desc List all creatives associated with a specific reason for which bids
   * were filtered, with the number of bids filtered for each creative.
   * @alias
   * adexchangebuyer2.bidders.accounts.filterSets.filteredBids.creatives.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer} params.creativeStatusId The ID of the creative status for which to retrieve a breakdown by creative. See [creative-status-codes](https://developers.google.com/ad-exchange/rtb/downloads/creative-status-codes).
   * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
   * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
   * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListCreativeStatusBreakdownByCreativeResponse.nextPageToken returned from the previous call to the filteredBids.creatives.list method.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListCreativeStatusBreakdownByCreativeResponse>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<
          Schema$ListCreativeStatusBreakdownByCreativeResponse>,
      callback?: BodyResponseCallback<
          Schema$ListCreativeStatusBreakdownByCreativeResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<
          Schema$ListCreativeStatusBreakdownByCreativeResponse>,
      callback?: BodyResponseCallback<
          Schema$ListCreativeStatusBreakdownByCreativeResponse>):
      void|AxiosPromise<Schema$ListCreativeStatusBreakdownByCreativeResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v2beta1/{+filterSetName}/filteredBids/{creativeStatusId}/creatives')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['filterSetName', 'creativeStatusId'],
      pathParams: ['creativeStatusId', 'filterSetName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListCreativeStatusBreakdownByCreativeResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<
          Schema$ListCreativeStatusBreakdownByCreativeResponse>(parameters);
    }
  }
}

export class Resource$Bidders$Accounts$Filtersets$Filteredbids$Details {
  root: Adexchangebuyer2;
  constructor(root: Adexchangebuyer2) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * adexchangebuyer2.bidders.accounts.filterSets.filteredBids.details.list
   * @desc List all details associated with a specific reason for which bids
   * were filtered, with the number of bids filtered for each detail.
   * @alias
   * adexchangebuyer2.bidders.accounts.filterSets.filteredBids.details.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer} params.creativeStatusId The ID of the creative status for which to retrieve a breakdown by detail. See [creative-status-codes](https://developers.google.com/ad-exchange/rtb/downloads/creative-status-codes). Details are only available for statuses 10, 14, 15, 17, 18, 19, 86, and 87.
   * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
   * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
   * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListCreativeStatusBreakdownByDetailResponse.nextPageToken returned from the previous call to the filteredBids.details.list method.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListCreativeStatusBreakdownByDetailResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListCreativeStatusBreakdownByDetailResponse>,
      callback?: BodyResponseCallback<
          Schema$ListCreativeStatusBreakdownByDetailResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListCreativeStatusBreakdownByDetailResponse>,
      callback?: BodyResponseCallback<
          Schema$ListCreativeStatusBreakdownByDetailResponse>):
      void|AxiosPromise<Schema$ListCreativeStatusBreakdownByDetailResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v2beta1/{+filterSetName}/filteredBids/{creativeStatusId}/details')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['filterSetName', 'creativeStatusId'],
      pathParams: ['creativeStatusId', 'filterSetName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListCreativeStatusBreakdownByDetailResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<
          Schema$ListCreativeStatusBreakdownByDetailResponse>(parameters);
    }
  }
}


export class Resource$Bidders$Accounts$Filtersets$Impressionmetrics {
  root: Adexchangebuyer2;
  constructor(root: Adexchangebuyer2) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * adexchangebuyer2.bidders.accounts.filterSets.impressionMetrics.list
   * @desc Lists all metrics that are measured in terms of number of
   * impressions.
   * @alias adexchangebuyer2.bidders.accounts.filterSets.impressionMetrics.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
   * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
   * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListImpressionMetricsResponse.nextPageToken returned from the previous call to the impressionMetrics.list method.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListImpressionMetricsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListImpressionMetricsResponse>,
      callback?: BodyResponseCallback<Schema$ListImpressionMetricsResponse>):
      void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListImpressionMetricsResponse>,
      callback?: BodyResponseCallback<Schema$ListImpressionMetricsResponse>):
      void|AxiosPromise<Schema$ListImpressionMetricsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/{+filterSetName}/impressionMetrics')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['filterSetName'],
      pathParams: ['filterSetName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListImpressionMetricsResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$ListImpressionMetricsResponse>(parameters);
    }
  }
}

export class Resource$Bidders$Accounts$Filtersets$Losingbids {
  root: Adexchangebuyer2;
  constructor(root: Adexchangebuyer2) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * adexchangebuyer2.bidders.accounts.filterSets.losingBids.list
   * @desc List all reasons for which bids lost in the auction, with the number
   * of bids that lost for each reason.
   * @alias adexchangebuyer2.bidders.accounts.filterSets.losingBids.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
   * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
   * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListLosingBidsResponse.nextPageToken returned from the previous call to the losingBids.list method.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListLosingBidsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListLosingBidsResponse>,
      callback?: BodyResponseCallback<Schema$ListLosingBidsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListLosingBidsResponse>,
      callback?: BodyResponseCallback<Schema$ListLosingBidsResponse>):
      void|AxiosPromise<Schema$ListLosingBidsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/{+filterSetName}/losingBids')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['filterSetName'],
      pathParams: ['filterSetName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListLosingBidsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListLosingBidsResponse>(parameters);
    }
  }
}

export class Resource$Bidders$Accounts$Filtersets$Nonbillablewinningbids {
  root: Adexchangebuyer2;
  constructor(root: Adexchangebuyer2) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * adexchangebuyer2.bidders.accounts.filterSets.nonBillableWinningBids.list
   * @desc List all reasons for which winning bids were not billable, with the
   * number of bids not billed for each reason.
   * @alias
   * adexchangebuyer2.bidders.accounts.filterSets.nonBillableWinningBids.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
   * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
   * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListNonBillableWinningBidsResponse.nextPageToken returned from the previous call to the nonBillableWinningBids.list method.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListNonBillableWinningBidsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListNonBillableWinningBidsResponse>,
      callback?:
          BodyResponseCallback<Schema$ListNonBillableWinningBidsResponse>):
      void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListNonBillableWinningBidsResponse>,
      callback?:
          BodyResponseCallback<Schema$ListNonBillableWinningBidsResponse>):
      void|AxiosPromise<Schema$ListNonBillableWinningBidsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/{+filterSetName}/nonBillableWinningBids')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['filterSetName'],
      pathParams: ['filterSetName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListNonBillableWinningBidsResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$ListNonBillableWinningBidsResponse>(
          parameters);
    }
  }
}



export class Resource$Bidders$Filtersets {
  root: Adexchangebuyer2;
  bidMetrics: Resource$Bidders$Filtersets$Bidmetrics;
  bidResponseErrors: Resource$Bidders$Filtersets$Bidresponseerrors;
  bidResponsesWithoutBids: Resource$Bidders$Filtersets$Bidresponseswithoutbids;
  filteredBidRequests: Resource$Bidders$Filtersets$Filteredbidrequests;
  filteredBids: Resource$Bidders$Filtersets$Filteredbids;
  impressionMetrics: Resource$Bidders$Filtersets$Impressionmetrics;
  losingBids: Resource$Bidders$Filtersets$Losingbids;
  nonBillableWinningBids: Resource$Bidders$Filtersets$Nonbillablewinningbids;
  constructor(root: Adexchangebuyer2) {
    this.root = root;
    this.getRoot.bind(this);
    this.bidMetrics = new Resource$Bidders$Filtersets$Bidmetrics(root);
    this.bidResponseErrors =
        new Resource$Bidders$Filtersets$Bidresponseerrors(root);
    this.bidResponsesWithoutBids =
        new Resource$Bidders$Filtersets$Bidresponseswithoutbids(root);
    this.filteredBidRequests =
        new Resource$Bidders$Filtersets$Filteredbidrequests(root);
    this.filteredBids = new Resource$Bidders$Filtersets$Filteredbids(root);
    this.impressionMetrics =
        new Resource$Bidders$Filtersets$Impressionmetrics(root);
    this.losingBids = new Resource$Bidders$Filtersets$Losingbids(root);
    this.nonBillableWinningBids =
        new Resource$Bidders$Filtersets$Nonbillablewinningbids(root);
  }

  getRoot() {
    return this.root;
  }


  /**
   * adexchangebuyer2.bidders.filterSets.create
   * @desc Creates the specified filter set for the account with the given
   * account ID.
   * @alias adexchangebuyer2.bidders.filterSets.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {boolean=} params.isTransient Whether the filter set is transient, or should be persisted indefinitely. By default, filter sets are not transient. If transient, it will be available for at least 1 hour after creation.
   * @param {string} params.ownerName Name of the owner (bidder or account) of the filter set to be created. For example:  - For a bidder-level filter set for bidder 123: `bidders/123`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456`
   * @param {().FilterSet} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions): AxiosPromise<Schema$FilterSet>;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$FilterSet>,
      callback?: BodyResponseCallback<Schema$FilterSet>): void;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$FilterSet>,
      callback?: BodyResponseCallback<Schema$FilterSet>):
      void|AxiosPromise<Schema$FilterSet> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/{+ownerName}/filterSets')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['ownerName'],
      pathParams: ['ownerName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$FilterSet>(parameters, callback);
    } else {
      return createAPIRequest<Schema$FilterSet>(parameters);
    }
  }


  /**
   * adexchangebuyer2.bidders.filterSets.delete
   * @desc Deletes the requested filter set from the account with the given
   * account ID.
   * @alias adexchangebuyer2.bidders.filterSets.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Full name of the resource to delete. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>):
      void|AxiosPromise<Schema$Empty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Empty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Empty>(parameters);
    }
  }


  /**
   * adexchangebuyer2.bidders.filterSets.get
   * @desc Retrieves the requested filter set for the account with the given
   * account ID.
   * @alias adexchangebuyer2.bidders.filterSets.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Full name of the resource being requested. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$FilterSet>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$FilterSet>,
      callback?: BodyResponseCallback<Schema$FilterSet>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$FilterSet>,
      callback?: BodyResponseCallback<Schema$FilterSet>):
      void|AxiosPromise<Schema$FilterSet> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$FilterSet>(parameters, callback);
    } else {
      return createAPIRequest<Schema$FilterSet>(parameters);
    }
  }


  /**
   * adexchangebuyer2.bidders.filterSets.list
   * @desc Lists all filter sets for the account with the given account ID.
   * @alias adexchangebuyer2.bidders.filterSets.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.ownerName Name of the owner (bidder or account) of the filter sets to be listed. For example:  - For a bidder-level filter set for bidder 123: `bidders/123`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456`
   * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
   * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListFilterSetsResponse.nextPageToken returned from the previous call to the accounts.filterSets.list method.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListFilterSetsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListFilterSetsResponse>,
      callback?: BodyResponseCallback<Schema$ListFilterSetsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListFilterSetsResponse>,
      callback?: BodyResponseCallback<Schema$ListFilterSetsResponse>):
      void|AxiosPromise<Schema$ListFilterSetsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/{+ownerName}/filterSets')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['ownerName'],
      pathParams: ['ownerName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListFilterSetsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListFilterSetsResponse>(parameters);
    }
  }
}
export class Resource$Bidders$Filtersets$Bidmetrics {
  root: Adexchangebuyer2;
  constructor(root: Adexchangebuyer2) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * adexchangebuyer2.bidders.filterSets.bidMetrics.list
   * @desc Lists all metrics that are measured in terms of number of bids.
   * @alias adexchangebuyer2.bidders.filterSets.bidMetrics.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
   * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
   * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListBidMetricsResponse.nextPageToken returned from the previous call to the bidMetrics.list method.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListBidMetricsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListBidMetricsResponse>,
      callback?: BodyResponseCallback<Schema$ListBidMetricsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListBidMetricsResponse>,
      callback?: BodyResponseCallback<Schema$ListBidMetricsResponse>):
      void|AxiosPromise<Schema$ListBidMetricsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/{+filterSetName}/bidMetrics')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['filterSetName'],
      pathParams: ['filterSetName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListBidMetricsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListBidMetricsResponse>(parameters);
    }
  }
}

export class Resource$Bidders$Filtersets$Bidresponseerrors {
  root: Adexchangebuyer2;
  constructor(root: Adexchangebuyer2) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * adexchangebuyer2.bidders.filterSets.bidResponseErrors.list
   * @desc List all errors that occurred in bid responses, with the number of
   * bid responses affected for each reason.
   * @alias adexchangebuyer2.bidders.filterSets.bidResponseErrors.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
   * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
   * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListBidResponseErrorsResponse.nextPageToken returned from the previous call to the bidResponseErrors.list method.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListBidResponseErrorsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListBidResponseErrorsResponse>,
      callback?: BodyResponseCallback<Schema$ListBidResponseErrorsResponse>):
      void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListBidResponseErrorsResponse>,
      callback?: BodyResponseCallback<Schema$ListBidResponseErrorsResponse>):
      void|AxiosPromise<Schema$ListBidResponseErrorsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/{+filterSetName}/bidResponseErrors')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['filterSetName'],
      pathParams: ['filterSetName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListBidResponseErrorsResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$ListBidResponseErrorsResponse>(parameters);
    }
  }
}

export class Resource$Bidders$Filtersets$Bidresponseswithoutbids {
  root: Adexchangebuyer2;
  constructor(root: Adexchangebuyer2) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * adexchangebuyer2.bidders.filterSets.bidResponsesWithoutBids.list
   * @desc List all reasons for which bid responses were considered to have no
   * applicable bids, with the number of bid responses affected for each reason.
   * @alias adexchangebuyer2.bidders.filterSets.bidResponsesWithoutBids.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
   * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
   * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListBidResponsesWithoutBidsResponse.nextPageToken returned from the previous call to the bidResponsesWithoutBids.list method.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListBidResponsesWithoutBidsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListBidResponsesWithoutBidsResponse>,
      callback?:
          BodyResponseCallback<Schema$ListBidResponsesWithoutBidsResponse>):
      void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListBidResponsesWithoutBidsResponse>,
      callback?:
          BodyResponseCallback<Schema$ListBidResponsesWithoutBidsResponse>):
      void|AxiosPromise<Schema$ListBidResponsesWithoutBidsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/{+filterSetName}/bidResponsesWithoutBids')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['filterSetName'],
      pathParams: ['filterSetName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListBidResponsesWithoutBidsResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$ListBidResponsesWithoutBidsResponse>(
          parameters);
    }
  }
}

export class Resource$Bidders$Filtersets$Filteredbidrequests {
  root: Adexchangebuyer2;
  constructor(root: Adexchangebuyer2) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * adexchangebuyer2.bidders.filterSets.filteredBidRequests.list
   * @desc List all reasons that caused a bid request not to be sent for an
   * impression, with the number of bid requests not sent for each reason.
   * @alias adexchangebuyer2.bidders.filterSets.filteredBidRequests.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
   * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
   * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListFilteredBidRequestsResponse.nextPageToken returned from the previous call to the filteredBidRequests.list method.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListFilteredBidRequestsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListFilteredBidRequestsResponse>,
      callback?: BodyResponseCallback<Schema$ListFilteredBidRequestsResponse>):
      void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListFilteredBidRequestsResponse>,
      callback?: BodyResponseCallback<Schema$ListFilteredBidRequestsResponse>):
      void|AxiosPromise<Schema$ListFilteredBidRequestsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/{+filterSetName}/filteredBidRequests')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['filterSetName'],
      pathParams: ['filterSetName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListFilteredBidRequestsResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$ListFilteredBidRequestsResponse>(
          parameters);
    }
  }
}

export class Resource$Bidders$Filtersets$Filteredbids {
  root: Adexchangebuyer2;
  creatives: Resource$Bidders$Filtersets$Filteredbids$Creatives;
  details: Resource$Bidders$Filtersets$Filteredbids$Details;
  constructor(root: Adexchangebuyer2) {
    this.root = root;
    this.getRoot.bind(this);
    this.creatives =
        new Resource$Bidders$Filtersets$Filteredbids$Creatives(root);
    this.details = new Resource$Bidders$Filtersets$Filteredbids$Details(root);
  }

  getRoot() {
    return this.root;
  }


  /**
   * adexchangebuyer2.bidders.filterSets.filteredBids.list
   * @desc List all reasons for which bids were filtered, with the number of
   * bids filtered for each reason.
   * @alias adexchangebuyer2.bidders.filterSets.filteredBids.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
   * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
   * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListFilteredBidsResponse.nextPageToken returned from the previous call to the filteredBids.list method.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListFilteredBidsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListFilteredBidsResponse>,
      callback?: BodyResponseCallback<Schema$ListFilteredBidsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListFilteredBidsResponse>,
      callback?: BodyResponseCallback<Schema$ListFilteredBidsResponse>):
      void|AxiosPromise<Schema$ListFilteredBidsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/{+filterSetName}/filteredBids')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['filterSetName'],
      pathParams: ['filterSetName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListFilteredBidsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListFilteredBidsResponse>(parameters);
    }
  }
}
export class Resource$Bidders$Filtersets$Filteredbids$Creatives {
  root: Adexchangebuyer2;
  constructor(root: Adexchangebuyer2) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * adexchangebuyer2.bidders.filterSets.filteredBids.creatives.list
   * @desc List all creatives associated with a specific reason for which bids
   * were filtered, with the number of bids filtered for each creative.
   * @alias adexchangebuyer2.bidders.filterSets.filteredBids.creatives.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer} params.creativeStatusId The ID of the creative status for which to retrieve a breakdown by creative. See [creative-status-codes](https://developers.google.com/ad-exchange/rtb/downloads/creative-status-codes).
   * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
   * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
   * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListCreativeStatusBreakdownByCreativeResponse.nextPageToken returned from the previous call to the filteredBids.creatives.list method.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListCreativeStatusBreakdownByCreativeResponse>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<
          Schema$ListCreativeStatusBreakdownByCreativeResponse>,
      callback?: BodyResponseCallback<
          Schema$ListCreativeStatusBreakdownByCreativeResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<
          Schema$ListCreativeStatusBreakdownByCreativeResponse>,
      callback?: BodyResponseCallback<
          Schema$ListCreativeStatusBreakdownByCreativeResponse>):
      void|AxiosPromise<Schema$ListCreativeStatusBreakdownByCreativeResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v2beta1/{+filterSetName}/filteredBids/{creativeStatusId}/creatives')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['filterSetName', 'creativeStatusId'],
      pathParams: ['creativeStatusId', 'filterSetName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListCreativeStatusBreakdownByCreativeResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<
          Schema$ListCreativeStatusBreakdownByCreativeResponse>(parameters);
    }
  }
}

export class Resource$Bidders$Filtersets$Filteredbids$Details {
  root: Adexchangebuyer2;
  constructor(root: Adexchangebuyer2) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * adexchangebuyer2.bidders.filterSets.filteredBids.details.list
   * @desc List all details associated with a specific reason for which bids
   * were filtered, with the number of bids filtered for each detail.
   * @alias adexchangebuyer2.bidders.filterSets.filteredBids.details.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer} params.creativeStatusId The ID of the creative status for which to retrieve a breakdown by detail. See [creative-status-codes](https://developers.google.com/ad-exchange/rtb/downloads/creative-status-codes). Details are only available for statuses 10, 14, 15, 17, 18, 19, 86, and 87.
   * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
   * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
   * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListCreativeStatusBreakdownByDetailResponse.nextPageToken returned from the previous call to the filteredBids.details.list method.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListCreativeStatusBreakdownByDetailResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListCreativeStatusBreakdownByDetailResponse>,
      callback?: BodyResponseCallback<
          Schema$ListCreativeStatusBreakdownByDetailResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListCreativeStatusBreakdownByDetailResponse>,
      callback?: BodyResponseCallback<
          Schema$ListCreativeStatusBreakdownByDetailResponse>):
      void|AxiosPromise<Schema$ListCreativeStatusBreakdownByDetailResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v2beta1/{+filterSetName}/filteredBids/{creativeStatusId}/details')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['filterSetName', 'creativeStatusId'],
      pathParams: ['creativeStatusId', 'filterSetName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListCreativeStatusBreakdownByDetailResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<
          Schema$ListCreativeStatusBreakdownByDetailResponse>(parameters);
    }
  }
}


export class Resource$Bidders$Filtersets$Impressionmetrics {
  root: Adexchangebuyer2;
  constructor(root: Adexchangebuyer2) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * adexchangebuyer2.bidders.filterSets.impressionMetrics.list
   * @desc Lists all metrics that are measured in terms of number of
   * impressions.
   * @alias adexchangebuyer2.bidders.filterSets.impressionMetrics.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
   * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
   * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListImpressionMetricsResponse.nextPageToken returned from the previous call to the impressionMetrics.list method.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListImpressionMetricsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListImpressionMetricsResponse>,
      callback?: BodyResponseCallback<Schema$ListImpressionMetricsResponse>):
      void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListImpressionMetricsResponse>,
      callback?: BodyResponseCallback<Schema$ListImpressionMetricsResponse>):
      void|AxiosPromise<Schema$ListImpressionMetricsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/{+filterSetName}/impressionMetrics')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['filterSetName'],
      pathParams: ['filterSetName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListImpressionMetricsResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$ListImpressionMetricsResponse>(parameters);
    }
  }
}

export class Resource$Bidders$Filtersets$Losingbids {
  root: Adexchangebuyer2;
  constructor(root: Adexchangebuyer2) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * adexchangebuyer2.bidders.filterSets.losingBids.list
   * @desc List all reasons for which bids lost in the auction, with the number
   * of bids that lost for each reason.
   * @alias adexchangebuyer2.bidders.filterSets.losingBids.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
   * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
   * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListLosingBidsResponse.nextPageToken returned from the previous call to the losingBids.list method.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListLosingBidsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListLosingBidsResponse>,
      callback?: BodyResponseCallback<Schema$ListLosingBidsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListLosingBidsResponse>,
      callback?: BodyResponseCallback<Schema$ListLosingBidsResponse>):
      void|AxiosPromise<Schema$ListLosingBidsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/{+filterSetName}/losingBids')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['filterSetName'],
      pathParams: ['filterSetName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListLosingBidsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListLosingBidsResponse>(parameters);
    }
  }
}

export class Resource$Bidders$Filtersets$Nonbillablewinningbids {
  root: Adexchangebuyer2;
  constructor(root: Adexchangebuyer2) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * adexchangebuyer2.bidders.filterSets.nonBillableWinningBids.list
   * @desc List all reasons for which winning bids were not billable, with the
   * number of bids not billed for each reason.
   * @alias adexchangebuyer2.bidders.filterSets.nonBillableWinningBids.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
   * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
   * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListNonBillableWinningBidsResponse.nextPageToken returned from the previous call to the nonBillableWinningBids.list method.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListNonBillableWinningBidsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListNonBillableWinningBidsResponse>,
      callback?:
          BodyResponseCallback<Schema$ListNonBillableWinningBidsResponse>):
      void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListNonBillableWinningBidsResponse>,
      callback?:
          BodyResponseCallback<Schema$ListNonBillableWinningBidsResponse>):
      void|AxiosPromise<Schema$ListNonBillableWinningBidsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/{+filterSetName}/nonBillableWinningBids')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['filterSetName'],
      pathParams: ['filterSetName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListNonBillableWinningBidsResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$ListNonBillableWinningBidsResponse>(
          parameters);
    }
  }
}
