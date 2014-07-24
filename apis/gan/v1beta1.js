/**
 * Copyright 2014 Google Inc. All Rights Reserved.
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

'use strict';

var apirequest = require('../../lib/apirequest');
var createAPIRequest = apirequest.createAPIRequest;

/**
 * Google Affiliate Network API
 *
 * @classdesc Lets you have programmatic access to your Google Affiliate Network data.
 * @namespace gan
 * @version  v1beta1
 * @variation v1beta1
 * @this Gan
 * @param {object=} options Options for Gan
 */
function Gan(options) {

  var self = this;
  this._options = options || {};

  this.advertisers = {

    /**
     * gan.advertisers.get
     *
     * @desc Retrieves data about a single advertiser if that the requesting advertiser/publisher has access to it. Only publishers can lookup advertisers. Advertisers can request information about themselves by omitting the advertiserId query parameter.
     *
     * @alias gan.advertisers.get
     * @memberOf! gan(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.advertiserId - The ID of the advertiser to look up. Optional.
     * @param  {string} params.role - The role of the requester. Valid values: 'advertisers' or 'publishers'.
     * @param  {string} params.roleId - The ID of the requesting advertiser or publisher.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/gan/v1beta1/' + params.role + '/' + params.roleId + '/advertiser',
          method: 'GET'
        },
        params: params,
        requiredParams: ['role', 'roleId'],
        pathParams: ['role', 'roleId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * gan.advertisers.list
     *
     * @desc Retrieves data about all advertisers that the requesting advertiser/publisher has access to.
     *
     * @alias gan.advertisers.list
     * @memberOf! gan(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.advertiserCategory - Caret(^) delimted list of advertiser categories. Valid categories are defined here: http://www.google.com/support/affiliatenetwork/advertiser/bin/answer.py?hl=en&answer=107581. Filters out all advertisers not in one of the given advertiser categories. Optional.
     * @param  {integer=} params.maxResults - Max number of items to return in this page. Optional. Defaults to 20.
     * @param  {number=} params.minNinetyDayEpc - Filters out all advertisers that have a ninety day EPC average lower than the given value (inclusive). Min value: 0.0. Optional.
     * @param  {integer=} params.minPayoutRank - A value between 1 and 4, where 1 represents the quartile of advertisers with the lowest ranks and 4 represents the quartile of advertisers with the highest ranks. Filters out all advertisers with a lower rank than the given quartile. For example if a 2 was given only advertisers with a payout rank of 25 or higher would be included. Optional.
     * @param  {number=} params.minSevenDayEpc - Filters out all advertisers that have a seven day EPC average lower than the given value (inclusive). Min value: 0.0. Optional.
     * @param  {string=} params.pageToken - The value of 'nextPageToken' from the previous page. Optional.
     * @param  {string=} params.relationshipStatus - Filters out all advertisers for which do not have the given relationship status with the requesting publisher.
     * @param  {string} params.role - The role of the requester. Valid values: 'advertisers' or 'publishers'.
     * @param  {string} params.roleId - The ID of the requesting advertiser or publisher.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/gan/v1beta1/' + params.role + '/' + params.roleId + '/advertisers',
          method: 'GET'
        },
        params: params,
        requiredParams: ['role', 'roleId'],
        pathParams: ['role', 'roleId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.ccOffers = {

    /**
     * gan.ccOffers.list
     *
     * @desc Retrieves credit card offers for the given publisher.
     *
     * @alias gan.ccOffers.list
     * @memberOf! gan(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.advertiser - The advertiser ID of a card issuer whose offers to include. Optional, may be repeated.
     * @param  {string=} params.projection - The set of fields to return.
     * @param  {string} params.publisher - The ID of the publisher in question.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/gan/v1beta1/publishers/' + params.publisher + '/ccOffers',
          method: 'GET'
        },
        params: params,
        requiredParams: ['publisher'],
        pathParams: ['publisher'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.events = {

    /**
     * gan.events.list
     *
     * @desc Retrieves event data for a given advertiser/publisher.
     *
     * @alias gan.events.list
     * @memberOf! gan(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.advertiserId - Caret(^) delimited list of advertiser IDs. Filters out all events that do not reference one of the given advertiser IDs. Only used when under publishers role. Optional.
     * @param  {string=} params.chargeType - Filters out all charge events that are not of the given charge type. Valid values: 'other', 'slotting_fee', 'monthly_minimum', 'tier_bonus', 'credit', 'debit'. Optional.
     * @param  {string=} params.eventDateMax - Filters out all events later than given date. Optional. Defaults to 24 hours after eventMin.
     * @param  {string=} params.eventDateMin - Filters out all events earlier than given date. Optional. Defaults to 24 hours from current date/time.
     * @param  {string=} params.linkId - Caret(^) delimited list of link IDs. Filters out all events that do not reference one of the given link IDs. Optional.
     * @param  {integer=} params.maxResults - Max number of offers to return in this page. Optional. Defaults to 20.
     * @param  {string=} params.memberId - Caret(^) delimited list of member IDs. Filters out all events that do not reference one of the given member IDs. Optional.
     * @param  {string=} params.modifyDateMax - Filters out all events modified later than given date. Optional. Defaults to 24 hours after modifyDateMin, if modifyDateMin is explicitly set.
     * @param  {string=} params.modifyDateMin - Filters out all events modified earlier than given date. Optional. Defaults to 24 hours before the current modifyDateMax, if modifyDateMax is explicitly set.
     * @param  {string=} params.orderId - Caret(^) delimited list of order IDs. Filters out all events that do not reference one of the given order IDs. Optional.
     * @param  {string=} params.pageToken - The value of 'nextPageToken' from the previous page. Optional.
     * @param  {string=} params.productCategory - Caret(^) delimited list of product categories. Filters out all events that do not reference a product in one of the given product categories. Optional.
     * @param  {string=} params.publisherId - Caret(^) delimited list of publisher IDs. Filters out all events that do not reference one of the given publishers IDs. Only used when under advertiser role. Optional.
     * @param  {string} params.role - The role of the requester. Valid values: 'advertisers' or 'publishers'.
     * @param  {string} params.roleId - The ID of the requesting advertiser or publisher.
     * @param  {string=} params.sku - Caret(^) delimited list of SKUs. Filters out all events that do not reference one of the given SKU. Optional.
     * @param  {string=} params.status - Filters out all events that do not have the given status. Valid values: 'active', 'canceled'. Optional.
     * @param  {string=} params.type - Filters out all events that are not of the given type. Valid values: 'action', 'transaction', 'charge'. Optional.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/gan/v1beta1/' + params.role + '/' + params.roleId + '/events',
          method: 'GET'
        },
        params: params,
        requiredParams: ['role', 'roleId'],
        pathParams: ['role', 'roleId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.links = {

    /**
     * gan.links.get
     *
     * @desc Retrieves data about a single link if the requesting advertiser/publisher has access to it. Advertisers can look up their own links. Publishers can look up visible links or links belonging to advertisers they are in a relationship with.
     *
     * @alias gan.links.get
     * @memberOf! gan(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.linkId - The ID of the link to look up.
     * @param  {string} params.role - The role of the requester. Valid values: 'advertisers' or 'publishers'.
     * @param  {string} params.roleId - The ID of the requesting advertiser or publisher.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/gan/v1beta1/' + params.role + '/' + params.roleId + '/link/' + params.linkId,
          method: 'GET'
        },
        params: params,
        requiredParams: ['role', 'roleId', 'linkId'],
        pathParams: ['linkId', 'role', 'roleId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * gan.links.insert
     *
     * @desc Inserts a new link.
     *
     * @alias gan.links.insert
     * @memberOf! gan(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.role - The role of the requester. Valid values: 'advertisers' or 'publishers'.
     * @param  {string} params.roleId - The ID of the requesting advertiser or publisher.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/gan/v1beta1/' + params.role + '/' + params.roleId + '/link',
          method: 'POST'
        },
        params: params,
        requiredParams: ['role', 'roleId'],
        pathParams: ['role', 'roleId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * gan.links.list
     *
     * @desc Retrieves all links that match the query parameters.
     *
     * @alias gan.links.list
     * @memberOf! gan(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.advertiserId - Limits the resulting links to the ones belonging to the listed advertisers.
     * @param  {string=} params.assetSize - The size of the given asset.
     * @param  {string=} params.authorship - The role of the author of the link.
     * @param  {string=} params.createDateMax - The end of the create date range.
     * @param  {string=} params.createDateMin - The beginning of the create date range.
     * @param  {string=} params.linkType - The type of the link.
     * @param  {integer=} params.maxResults - Max number of items to return in this page. Optional. Defaults to 20.
     * @param  {string=} params.pageToken - The value of 'nextPageToken' from the previous page. Optional.
     * @param  {string=} params.promotionType - The promotion type.
     * @param  {string=} params.relationshipStatus - The status of the relationship.
     * @param  {string} params.role - The role of the requester. Valid values: 'advertisers' or 'publishers'.
     * @param  {string} params.roleId - The ID of the requesting advertiser or publisher.
     * @param  {string=} params.searchText - Field for full text search across title and merchandising text, supports link id search.
     * @param  {string=} params.startDateMax - The end of the start date range.
     * @param  {string=} params.startDateMin - The beginning of the start date range.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/gan/v1beta1/' + params.role + '/' + params.roleId + '/links',
          method: 'GET'
        },
        params: params,
        requiredParams: ['role', 'roleId'],
        pathParams: ['role', 'roleId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.publishers = {

    /**
     * gan.publishers.get
     *
     * @desc Retrieves data about a single advertiser if that the requesting advertiser/publisher has access to it. Only advertisers can look up publishers. Publishers can request information about themselves by omitting the publisherId query parameter.
     *
     * @alias gan.publishers.get
     * @memberOf! gan(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.publisherId - The ID of the publisher to look up. Optional.
     * @param  {string} params.role - The role of the requester. Valid values: 'advertisers' or 'publishers'.
     * @param  {string} params.roleId - The ID of the requesting advertiser or publisher.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/gan/v1beta1/' + params.role + '/' + params.roleId + '/publisher',
          method: 'GET'
        },
        params: params,
        requiredParams: ['role', 'roleId'],
        pathParams: ['role', 'roleId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * gan.publishers.list
     *
     * @desc Retrieves data about all publishers that the requesting advertiser/publisher has access to.
     *
     * @alias gan.publishers.list
     * @memberOf! gan(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer=} params.maxResults - Max number of items to return in this page. Optional. Defaults to 20.
     * @param  {number=} params.minNinetyDayEpc - Filters out all publishers that have a ninety day EPC average lower than the given value (inclusive). Min value: 0.0. Optional.
     * @param  {integer=} params.minPayoutRank - A value between 1 and 4, where 1 represents the quartile of publishers with the lowest ranks and 4 represents the quartile of publishers with the highest ranks. Filters out all publishers with a lower rank than the given quartile. For example if a 2 was given only publishers with a payout rank of 25 or higher would be included. Optional.
     * @param  {number=} params.minSevenDayEpc - Filters out all publishers that have a seven day EPC average lower than the given value (inclusive). Min value 0.0. Optional.
     * @param  {string=} params.pageToken - The value of 'nextPageToken' from the previous page. Optional.
     * @param  {string=} params.publisherCategory - Caret(^) delimted list of publisher categories. Valid categories: (unclassified|community_and_content|shopping_and_promotion|loyalty_and_rewards|network|search_specialist|comparison_shopping|email). Filters out all publishers not in one of the given advertiser categories. Optional.
     * @param  {string=} params.relationshipStatus - Filters out all publishers for which do not have the given relationship status with the requesting publisher.
     * @param  {string} params.role - The role of the requester. Valid values: 'advertisers' or 'publishers'.
     * @param  {string} params.roleId - The ID of the requesting advertiser or publisher.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/gan/v1beta1/' + params.role + '/' + params.roleId + '/publishers',
          method: 'GET'
        },
        params: params,
        requiredParams: ['role', 'roleId'],
        pathParams: ['role', 'roleId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.reports = {

    /**
     * gan.reports.get
     *
     * @desc Retrieves a report of the specified type.
     *
     * @alias gan.reports.get
     * @memberOf! gan(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.advertiserId - The IDs of the advertisers to look up, if applicable.
     * @param  {boolean=} params.calculateTotals - Whether or not to calculate totals rows. Optional.
     * @param  {string=} params.endDate - The end date (exclusive), in RFC 3339 format, for the report data to be returned. Defaults to one day after startDate, if that is given, or today. Optional.
     * @param  {string=} params.eventType - Filters out all events that are not of the given type. Valid values: 'action', 'transaction', or 'charge'. Optional.
     * @param  {string=} params.linkId - Filters to capture one of given link IDs. Optional.
     * @param  {integer=} params.maxResults - Max number of items to return in this page. Optional. Defaults to return all results.
     * @param  {string=} params.orderId - Filters to capture one of the given order IDs. Optional.
     * @param  {string=} params.publisherId - The IDs of the publishers to look up, if applicable.
     * @param  {string} params.reportType - The type of report being requested. Valid values: 'order_delta'. Required.
     * @param  {string} params.role - The role of the requester. Valid values: 'advertisers' or 'publishers'.
     * @param  {string} params.roleId - The ID of the requesting advertiser or publisher.
     * @param  {string=} params.startDate - The start date (inclusive), in RFC 3339 format, for the report data to be returned. Defaults to one day before endDate, if that is given, or yesterday. Optional.
     * @param  {integer=} params.startIndex - Offset on which to return results when paging. Optional.
     * @param  {string=} params.status - Filters out all events that do not have the given status. Valid values: 'active', 'canceled', or 'invalid'. Optional.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/gan/v1beta1/' + params.role + '/' + params.roleId + '/report/' + params.reportType,
          method: 'GET'
        },
        params: params,
        requiredParams: ['role', 'roleId', 'reportType'],
        pathParams: ['reportType', 'role', 'roleId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * Exports Gan object
 * @type Gan
 */
module.exports = Gan;