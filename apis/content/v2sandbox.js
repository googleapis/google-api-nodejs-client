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
 * Content API for Shopping
 *
 * @classdesc Manages product items, inventory, and Merchant Center accounts for Google Shopping.
 * @namespace content
 * @version  v2sandbox
 * @variation v2sandbox
 * @this Content
 * @param {object=} options Options for Content
 */
function Content(options) {

  var self = this;
  this._options = options || {};

  this.orders = {

    /**
     * content.orders.acknowledge
     *
     * @desc Marks an order as acknowledged.
     *
     * @alias content.orders.acknowledge
     * @memberOf! content(v2sandbox)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.merchantId - The ID of the managing account.
     * @param  {string} params.orderId - The ID of the order.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    acknowledge: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/content/v2sandbox/{merchantId}/orders/{orderId}/acknowledge',
          method: 'POST'
        },
        params: params,
        requiredParams: ['merchantId', 'orderId'],
        pathParams: ['merchantId', 'orderId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * content.orders.advancetestorder
     *
     * @desc Sandbox only. Moves a test order from state "inProgress" to state "pendingShipment".
     *
     * @alias content.orders.advancetestorder
     * @memberOf! content(v2sandbox)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.merchantId - The ID of the managing account.
     * @param  {string} params.orderId - The ID of the test order to modify.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    advancetestorder: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/content/v2sandbox/{merchantId}/testorders/{orderId}/advance',
          method: 'POST'
        },
        params: params,
        requiredParams: ['merchantId', 'orderId'],
        pathParams: ['merchantId', 'orderId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * content.orders.cancel
     *
     * @desc Cancels all line items in an order.
     *
     * @alias content.orders.cancel
     * @memberOf! content(v2sandbox)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.merchantId - The ID of the managing account.
     * @param  {string} params.orderId - The ID of the order to cancel.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    cancel: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/content/v2sandbox/{merchantId}/orders/{orderId}/cancel',
          method: 'POST'
        },
        params: params,
        requiredParams: ['merchantId', 'orderId'],
        pathParams: ['merchantId', 'orderId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * content.orders.cancellineitem
     *
     * @desc Cancels a line item.
     *
     * @alias content.orders.cancellineitem
     * @memberOf! content(v2sandbox)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.merchantId - The ID of the managing account.
     * @param  {string} params.orderId - The ID of the order.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    cancellineitem: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/content/v2sandbox/{merchantId}/orders/{orderId}/cancelLineItem',
          method: 'POST'
        },
        params: params,
        requiredParams: ['merchantId', 'orderId'],
        pathParams: ['merchantId', 'orderId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * content.orders.createtestorder
     *
     * @desc Sandbox only. Creates a test order.
     *
     * @alias content.orders.createtestorder
     * @memberOf! content(v2sandbox)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.merchantId - The ID of the managing account.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    createtestorder: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/content/v2sandbox/{merchantId}/testorders',
          method: 'POST'
        },
        params: params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * content.orders.custombatch
     *
     * @desc Retrieves or modifies multiple orders in a single request.
     *
     * @alias content.orders.custombatch
     * @memberOf! content(v2sandbox)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    custombatch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/content/v2sandbox/orders/batch',
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
     * content.orders.get
     *
     * @desc Retrieves an order from your Merchant Center account.
     *
     * @alias content.orders.get
     * @memberOf! content(v2sandbox)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.merchantId - The ID of the managing account.
     * @param  {string} params.orderId - The ID of the order.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/content/v2sandbox/{merchantId}/orders/{orderId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['merchantId', 'orderId'],
        pathParams: ['merchantId', 'orderId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * content.orders.getbymerchantorderid
     *
     * @desc Retrieves an order using merchant order id.
     *
     * @alias content.orders.getbymerchantorderid
     * @memberOf! content(v2sandbox)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.merchantId - The ID of the managing account.
     * @param  {string} params.merchantOrderId - The merchant order id to be looked for.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    getbymerchantorderid: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/content/v2sandbox/{merchantId}/ordersbymerchantid/{merchantOrderId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['merchantId', 'merchantOrderId'],
        pathParams: ['merchantId', 'merchantOrderId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * content.orders.gettestordertemplate
     *
     * @desc Sandbox only. Retrieves an order template that can be used to quickly create a new order in sandbox.
     *
     * @alias content.orders.gettestordertemplate
     * @memberOf! content(v2sandbox)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.merchantId - The ID of the managing account.
     * @param  {string} params.templateName - The name of the template to retrieve.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    gettestordertemplate: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/content/v2sandbox/{merchantId}/testordertemplates/{templateName}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['merchantId', 'templateName'],
        pathParams: ['merchantId', 'templateName'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * content.orders.list
     *
     * @desc Lists the orders in your Merchant Center account.
     *
     * @alias content.orders.list
     * @memberOf! content(v2sandbox)
     *
     * @param  {object} params - Parameters for request
     * @param  {boolean=} params.acknowledged - Obtains orders that match the acknowledgement status. When set to true, obtains orders that have been acknowledged. When false, obtains orders that have not been acknowledged. We recommend using this filter set to false, in conjunction with the acknowledge call, such that only un-acknowledged orders are returned.
     * @param  {integer=} params.maxResults - The maximum number of orders to return in the response, used for paging. The default value is 25 orders per page, and the maximum allowed value is 250 orders per page. Known issue: All List calls will return all Orders without limit regardless of the value of this field.
     * @param  {string} params.merchantId - The ID of the managing account.
     * @param  {string=} params.orderBy - The ordering of the returned list. The only supported value are placedDate desc and placedDate asc for now, which returns orders sorted by placement date. "placedDate desc" stands for listing orders by placement date, from oldest to most recent. "placedDate asc" stands for listing orders by placement date, from most recent to oldest. In future releases we'll support other sorting criteria.
     * @param  {string=} params.pageToken - The token returned by the previous request.
     * @param  {string=} params.placedDateEnd - Obtains orders placed before this date (exclusively), in ISO 8601 format.
     * @param  {string=} params.placedDateStart - Obtains orders placed after this date (inclusively), in ISO 8601 format.
     * @param  {string=} params.statuses - Obtains orders that match any of the specified statuses. Multiple values can be specified with comma separation. Additionally, please note that active is a shortcut for pendingShipment and partiallyShipped, and completed is a shortcut for shipped , partiallyDelivered, delivered, partiallyReturned, returned, and canceled.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/content/v2sandbox/{merchantId}/orders',
          method: 'GET'
        },
        params: params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * content.orders.refund
     *
     * @desc Refund a portion of the order, up to the full amount paid.
     *
     * @alias content.orders.refund
     * @memberOf! content(v2sandbox)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.merchantId - The ID of the managing account.
     * @param  {string} params.orderId - The ID of the order to refund.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    refund: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/content/v2sandbox/{merchantId}/orders/{orderId}/refund',
          method: 'POST'
        },
        params: params,
        requiredParams: ['merchantId', 'orderId'],
        pathParams: ['merchantId', 'orderId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * content.orders.returnlineitem
     *
     * @desc Returns a line item.
     *
     * @alias content.orders.returnlineitem
     * @memberOf! content(v2sandbox)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.merchantId - The ID of the managing account.
     * @param  {string} params.orderId - The ID of the order.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    returnlineitem: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/content/v2sandbox/{merchantId}/orders/{orderId}/returnLineItem',
          method: 'POST'
        },
        params: params,
        requiredParams: ['merchantId', 'orderId'],
        pathParams: ['merchantId', 'orderId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * content.orders.shiplineitems
     *
     * @desc Marks line item(s) as shipped.
     *
     * @alias content.orders.shiplineitems
     * @memberOf! content(v2sandbox)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.merchantId - The ID of the managing account.
     * @param  {string} params.orderId - The ID of the order.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    shiplineitems: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/content/v2sandbox/{merchantId}/orders/{orderId}/shipLineItems',
          method: 'POST'
        },
        params: params,
        requiredParams: ['merchantId', 'orderId'],
        pathParams: ['merchantId', 'orderId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * content.orders.updatemerchantorderid
     *
     * @desc Updates the merchant order ID for a given order.
     *
     * @alias content.orders.updatemerchantorderid
     * @memberOf! content(v2sandbox)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.merchantId - The ID of the managing account.
     * @param  {string} params.orderId - The ID of the order.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    updatemerchantorderid: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/content/v2sandbox/{merchantId}/orders/{orderId}/updateMerchantOrderId',
          method: 'POST'
        },
        params: params,
        requiredParams: ['merchantId', 'orderId'],
        pathParams: ['merchantId', 'orderId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * content.orders.updateshipment
     *
     * @desc Updates a shipment's status, carrier, and/or tracking ID.
     *
     * @alias content.orders.updateshipment
     * @memberOf! content(v2sandbox)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.merchantId - The ID of the managing account.
     * @param  {string} params.orderId - The ID of the order.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    updateshipment: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/content/v2sandbox/{merchantId}/orders/{orderId}/updateShipment',
          method: 'POST'
        },
        params: params,
        requiredParams: ['merchantId', 'orderId'],
        pathParams: ['merchantId', 'orderId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * Exports Content object
 * @type Content
 */
module.exports = Content;