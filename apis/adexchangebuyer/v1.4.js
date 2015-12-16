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

/* jshint maxlen: false */

'use strict';

var createAPIRequest = require('../../lib/apirequest');

/**
 * Ad Exchange Buyer API
 *
 * @classdesc Accesses your bidding-account information, submits creatives for validation, finds available direct deals, and retrieves performance reports.
 * @namespace adexchangebuyer
 * @version  v1.4
 * @variation v1.4
 * @this Adexchangebuyer
 * @param {object=} options Options for Adexchangebuyer
 */
function Adexchangebuyer(options) {

  var self = this;
  this._options = options || {};

  this.accounts = {

    /**
     * adexchangebuyer.accounts.get
     *
     * @desc Gets one account by ID.
     *
     * @alias adexchangebuyer.accounts.get
     * @memberOf! adexchangebuyer(v1.4)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.id - The account id
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adexchangebuyer/v1.4/accounts/{id}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * adexchangebuyer.accounts.list
     *
     * @desc Retrieves the authenticated user's list of accounts.
     *
     * @alias adexchangebuyer.accounts.list
     * @memberOf! adexchangebuyer(v1.4)
     *
     * @param  {object=} params - Parameters for request
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adexchangebuyer/v1.4/accounts',
          method: 'GET'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * adexchangebuyer.accounts.patch
     *
     * @desc Updates an existing account. This method supports patch semantics.
     *
     * @alias adexchangebuyer.accounts.patch
     * @memberOf! adexchangebuyer(v1.4)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.id - The account id
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adexchangebuyer/v1.4/accounts/{id}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * adexchangebuyer.accounts.update
     *
     * @desc Updates an existing account.
     *
     * @alias adexchangebuyer.accounts.update
     * @memberOf! adexchangebuyer(v1.4)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.id - The account id
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adexchangebuyer/v1.4/accounts/{id}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.billingInfo = {

    /**
     * adexchangebuyer.billingInfo.get
     *
     * @desc Returns the billing information for one account specified by account ID.
     *
     * @alias adexchangebuyer.billingInfo.get
     * @memberOf! adexchangebuyer(v1.4)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.accountId - The account id.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adexchangebuyer/v1.4/billinginfo/{accountId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['accountId'],
        pathParams: ['accountId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * adexchangebuyer.billingInfo.list
     *
     * @desc Retrieves a list of billing information for all accounts of the authenticated user.
     *
     * @alias adexchangebuyer.billingInfo.list
     * @memberOf! adexchangebuyer(v1.4)
     *
     * @param  {object=} params - Parameters for request
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adexchangebuyer/v1.4/billinginfo',
          method: 'GET'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.budget = {

    /**
     * adexchangebuyer.budget.get
     *
     * @desc Returns the budget information for the adgroup specified by the accountId and billingId.
     *
     * @alias adexchangebuyer.budget.get
     * @memberOf! adexchangebuyer(v1.4)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.accountId - The account id to get the budget information for.
     * @param  {string} params.billingId - The billing id to get the budget information for.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adexchangebuyer/v1.4/billinginfo/{accountId}/{billingId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['accountId', 'billingId'],
        pathParams: ['accountId', 'billingId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * adexchangebuyer.budget.patch
     *
     * @desc Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request. This method supports patch semantics.
     *
     * @alias adexchangebuyer.budget.patch
     * @memberOf! adexchangebuyer(v1.4)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.accountId - The account id associated with the budget being updated.
     * @param  {string} params.billingId - The billing id associated with the budget being updated.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adexchangebuyer/v1.4/billinginfo/{accountId}/{billingId}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['accountId', 'billingId'],
        pathParams: ['accountId', 'billingId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * adexchangebuyer.budget.update
     *
     * @desc Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request.
     *
     * @alias adexchangebuyer.budget.update
     * @memberOf! adexchangebuyer(v1.4)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.accountId - The account id associated with the budget being updated.
     * @param  {string} params.billingId - The billing id associated with the budget being updated.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adexchangebuyer/v1.4/billinginfo/{accountId}/{billingId}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['accountId', 'billingId'],
        pathParams: ['accountId', 'billingId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.creatives = {

    /**
     * adexchangebuyer.creatives.addDeal
     *
     * @desc Add a deal id association for the creative.
     *
     * @alias adexchangebuyer.creatives.addDeal
     * @memberOf! adexchangebuyer(v1.4)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.accountId - The id for the account that will serve this creative.
     * @param  {string} params.buyerCreativeId - The buyer-specific id for this creative.
     * @param  {string} params.dealId - The id of the deal id to associate with this creative.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    addDeal: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adexchangebuyer/v1.4/creatives/{accountId}/{buyerCreativeId}/addDeal/{dealId}',
          method: 'POST'
        },
        params: params,
        requiredParams: ['accountId', 'buyerCreativeId', 'dealId'],
        pathParams: ['accountId', 'buyerCreativeId', 'dealId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * adexchangebuyer.creatives.get
     *
     * @desc Gets the status for a single creative. A creative will be available 30-40 minutes after submission.
     *
     * @alias adexchangebuyer.creatives.get
     * @memberOf! adexchangebuyer(v1.4)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.accountId - The id for the account that will serve this creative.
     * @param  {string} params.buyerCreativeId - The buyer-specific id for this creative.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adexchangebuyer/v1.4/creatives/{accountId}/{buyerCreativeId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['accountId', 'buyerCreativeId'],
        pathParams: ['accountId', 'buyerCreativeId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * adexchangebuyer.creatives.insert
     *
     * @desc Submit a new creative.
     *
     * @alias adexchangebuyer.creatives.insert
     * @memberOf! adexchangebuyer(v1.4)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adexchangebuyer/v1.4/creatives',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * adexchangebuyer.creatives.list
     *
     * @desc Retrieves a list of the authenticated user's active creatives. A creative will be available 30-40 minutes after submission.
     *
     * @alias adexchangebuyer.creatives.list
     * @memberOf! adexchangebuyer(v1.4)
     *
     * @param  {object=} params - Parameters for request
     * @param  {integer=} params.accountId - When specified, only creatives for the given account ids are returned.
     * @param  {string=} params.buyerCreativeId - When specified, only creatives for the given buyer creative ids are returned.
     * @param  {string=} params.dealsStatusFilter - When specified, only creatives having the given deals status are returned.
     * @param  {integer=} params.maxResults - Maximum number of entries returned on one result page. If not set, the default is 100. Optional.
     * @param  {string=} params.openAuctionStatusFilter - When specified, only creatives having the given open auction status are returned.
     * @param  {string=} params.pageToken - A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response. Optional.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adexchangebuyer/v1.4/creatives',
          method: 'GET'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * adexchangebuyer.creatives.removeDeal
     *
     * @desc Remove a deal id associated with the creative.
     *
     * @alias adexchangebuyer.creatives.removeDeal
     * @memberOf! adexchangebuyer(v1.4)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.accountId - The id for the account that will serve this creative.
     * @param  {string} params.buyerCreativeId - The buyer-specific id for this creative.
     * @param  {string} params.dealId - The id of the deal id to disassociate with this creative.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    removeDeal: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adexchangebuyer/v1.4/creatives/{accountId}/{buyerCreativeId}/removeDeal/{dealId}',
          method: 'POST'
        },
        params: params,
        requiredParams: ['accountId', 'buyerCreativeId', 'dealId'],
        pathParams: ['accountId', 'buyerCreativeId', 'dealId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.marketplacedeals = {

    /**
     * adexchangebuyer.marketplacedeals.delete
     *
     * @desc Delete the specified deals from the order
     *
     * @alias adexchangebuyer.marketplacedeals.delete
     * @memberOf! adexchangebuyer(v1.4)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.orderId - The orderId to delete deals from.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adexchangebuyer/v1.4/marketplaceOrders/{orderId}/deals/delete',
          method: 'POST'
        },
        params: params,
        requiredParams: ['orderId'],
        pathParams: ['orderId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * adexchangebuyer.marketplacedeals.insert
     *
     * @desc Add new deals for the specified order
     *
     * @alias adexchangebuyer.marketplacedeals.insert
     * @memberOf! adexchangebuyer(v1.4)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.orderId - OrderId for which deals need to be added.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adexchangebuyer/v1.4/marketplaceOrders/{orderId}/deals/insert',
          method: 'POST'
        },
        params: params,
        requiredParams: ['orderId'],
        pathParams: ['orderId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * adexchangebuyer.marketplacedeals.list
     *
     * @desc List all the deals for a given order
     *
     * @alias adexchangebuyer.marketplacedeals.list
     * @memberOf! adexchangebuyer(v1.4)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.orderId - The orderId to get deals for.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adexchangebuyer/v1.4/marketplaceOrders/{orderId}/deals',
          method: 'GET'
        },
        params: params,
        requiredParams: ['orderId'],
        pathParams: ['orderId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * adexchangebuyer.marketplacedeals.update
     *
     * @desc Replaces all the deals in the order with the passed in deals
     *
     * @alias adexchangebuyer.marketplacedeals.update
     * @memberOf! adexchangebuyer(v1.4)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.orderId - The orderId to edit deals on.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adexchangebuyer/v1.4/marketplaceOrders/{orderId}/deals/update',
          method: 'POST'
        },
        params: params,
        requiredParams: ['orderId'],
        pathParams: ['orderId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.marketplacenotes = {

    /**
     * adexchangebuyer.marketplacenotes.insert
     *
     * @desc Add notes to the order
     *
     * @alias adexchangebuyer.marketplacenotes.insert
     * @memberOf! adexchangebuyer(v1.4)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.orderId - The orderId to add notes for.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adexchangebuyer/v1.4/marketplaceOrders/{orderId}/notes/insert',
          method: 'POST'
        },
        params: params,
        requiredParams: ['orderId'],
        pathParams: ['orderId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * adexchangebuyer.marketplacenotes.list
     *
     * @desc Get all the notes associated with an order
     *
     * @alias adexchangebuyer.marketplacenotes.list
     * @memberOf! adexchangebuyer(v1.4)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.orderId - The orderId to get notes for.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adexchangebuyer/v1.4/marketplaceOrders/{orderId}/notes',
          method: 'GET'
        },
        params: params,
        requiredParams: ['orderId'],
        pathParams: ['orderId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.marketplaceoffers = {

    /**
     * adexchangebuyer.marketplaceoffers.get
     *
     * @desc Gets the requested negotiation.
     *
     * @alias adexchangebuyer.marketplaceoffers.get
     * @memberOf! adexchangebuyer(v1.4)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.offerId - The offerId for the offer to get the head revision for.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adexchangebuyer/v1.4/marketplaceOffers/{offerId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['offerId'],
        pathParams: ['offerId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * adexchangebuyer.marketplaceoffers.search
     *
     * @desc Gets the requested negotiation.
     *
     * @alias adexchangebuyer.marketplaceoffers.search
     * @memberOf! adexchangebuyer(v1.4)
     *
     * @param  {object=} params - Parameters for request
     * @param  {string=} params.pqlQuery - The pql query used to query for offers.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    search: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adexchangebuyer/v1.4/marketplaceOffers/search',
          method: 'GET'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.marketplaceorders = {

    /**
     * adexchangebuyer.marketplaceorders.get
     *
     * @desc Get an order given its id
     *
     * @alias adexchangebuyer.marketplaceorders.get
     * @memberOf! adexchangebuyer(v1.4)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.orderId - Id of the order to retrieve.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adexchangebuyer/v1.4/marketplaceOrders/{orderId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['orderId'],
        pathParams: ['orderId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * adexchangebuyer.marketplaceorders.insert
     *
     * @desc Create the given list of orders
     *
     * @alias adexchangebuyer.marketplaceorders.insert
     * @memberOf! adexchangebuyer(v1.4)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adexchangebuyer/v1.4/marketplaceOrders/insert',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * adexchangebuyer.marketplaceorders.patch
     *
     * @desc Update the given order. This method supports patch semantics.
     *
     * @alias adexchangebuyer.marketplaceorders.patch
     * @memberOf! adexchangebuyer(v1.4)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.orderId - The order id to update.
     * @param  {string} params.revisionNumber - The last known revision number to update. If the head revision in the marketplace database has since changed, an error will be thrown. The caller should then fetch the lastest order at head revision and retry the update at that revision.
     * @param  {string} params.updateAction - The proposed action to take on the order.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adexchangebuyer/v1.4/marketplaceOrders/{orderId}/{revisionNumber}/{updateAction}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['orderId', 'revisionNumber', 'updateAction'],
        pathParams: ['orderId', 'revisionNumber', 'updateAction'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * adexchangebuyer.marketplaceorders.search
     *
     * @desc Search for orders using pql query
     *
     * @alias adexchangebuyer.marketplaceorders.search
     * @memberOf! adexchangebuyer(v1.4)
     *
     * @param  {object=} params - Parameters for request
     * @param  {string=} params.pqlQuery - Query string to retrieve specific orders.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    search: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adexchangebuyer/v1.4/marketplaceOrders/search',
          method: 'GET'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * adexchangebuyer.marketplaceorders.update
     *
     * @desc Update the given order
     *
     * @alias adexchangebuyer.marketplaceorders.update
     * @memberOf! adexchangebuyer(v1.4)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.orderId - The order id to update.
     * @param  {string} params.revisionNumber - The last known revision number to update. If the head revision in the marketplace database has since changed, an error will be thrown. The caller should then fetch the lastest order at head revision and retry the update at that revision.
     * @param  {string} params.updateAction - The proposed action to take on the order.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adexchangebuyer/v1.4/marketplaceOrders/{orderId}/{revisionNumber}/{updateAction}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['orderId', 'revisionNumber', 'updateAction'],
        pathParams: ['orderId', 'revisionNumber', 'updateAction'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.performanceReport = {

    /**
     * adexchangebuyer.performanceReport.list
     *
     * @desc Retrieves the authenticated user's list of performance metrics.
     *
     * @alias adexchangebuyer.performanceReport.list
     * @memberOf! adexchangebuyer(v1.4)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.accountId - The account id to get the reports.
     * @param  {string} params.endDateTime - The end time of the report in ISO 8601 timestamp format using UTC.
     * @param  {integer=} params.maxResults - Maximum number of entries returned on one result page. If not set, the default is 100. Optional.
     * @param  {string=} params.pageToken - A continuation token, used to page through performance reports. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response. Optional.
     * @param  {string} params.startDateTime - The start time of the report in ISO 8601 timestamp format using UTC.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adexchangebuyer/v1.4/performancereport',
          method: 'GET'
        },
        params: params,
        requiredParams: ['accountId', 'endDateTime', 'startDateTime'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.pretargetingConfig = {

    /**
     * adexchangebuyer.pretargetingConfig.delete
     *
     * @desc Deletes an existing pretargeting config.
     *
     * @alias adexchangebuyer.pretargetingConfig.delete
     * @memberOf! adexchangebuyer(v1.4)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.accountId - The account id to delete the pretargeting config for.
     * @param  {string} params.configId - The specific id of the configuration to delete.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adexchangebuyer/v1.4/pretargetingconfigs/{accountId}/{configId}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['accountId', 'configId'],
        pathParams: ['accountId', 'configId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * adexchangebuyer.pretargetingConfig.get
     *
     * @desc Gets a specific pretargeting configuration
     *
     * @alias adexchangebuyer.pretargetingConfig.get
     * @memberOf! adexchangebuyer(v1.4)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.accountId - The account id to get the pretargeting config for.
     * @param  {string} params.configId - The specific id of the configuration to retrieve.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adexchangebuyer/v1.4/pretargetingconfigs/{accountId}/{configId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['accountId', 'configId'],
        pathParams: ['accountId', 'configId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * adexchangebuyer.pretargetingConfig.insert
     *
     * @desc Inserts a new pretargeting configuration.
     *
     * @alias adexchangebuyer.pretargetingConfig.insert
     * @memberOf! adexchangebuyer(v1.4)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.accountId - The account id to insert the pretargeting config for.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adexchangebuyer/v1.4/pretargetingconfigs/{accountId}',
          method: 'POST'
        },
        params: params,
        requiredParams: ['accountId'],
        pathParams: ['accountId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * adexchangebuyer.pretargetingConfig.list
     *
     * @desc Retrieves a list of the authenticated user's pretargeting configurations.
     *
     * @alias adexchangebuyer.pretargetingConfig.list
     * @memberOf! adexchangebuyer(v1.4)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.accountId - The account id to get the pretargeting configs for.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adexchangebuyer/v1.4/pretargetingconfigs/{accountId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['accountId'],
        pathParams: ['accountId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * adexchangebuyer.pretargetingConfig.patch
     *
     * @desc Updates an existing pretargeting config. This method supports patch semantics.
     *
     * @alias adexchangebuyer.pretargetingConfig.patch
     * @memberOf! adexchangebuyer(v1.4)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.accountId - The account id to update the pretargeting config for.
     * @param  {string} params.configId - The specific id of the configuration to update.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adexchangebuyer/v1.4/pretargetingconfigs/{accountId}/{configId}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['accountId', 'configId'],
        pathParams: ['accountId', 'configId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * adexchangebuyer.pretargetingConfig.update
     *
     * @desc Updates an existing pretargeting config.
     *
     * @alias adexchangebuyer.pretargetingConfig.update
     * @memberOf! adexchangebuyer(v1.4)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.accountId - The account id to update the pretargeting config for.
     * @param  {string} params.configId - The specific id of the configuration to update.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adexchangebuyer/v1.4/pretargetingconfigs/{accountId}/{configId}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['accountId', 'configId'],
        pathParams: ['accountId', 'configId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * Exports Adexchangebuyer object
 * @type Adexchangebuyer
 */
module.exports = Adexchangebuyer;