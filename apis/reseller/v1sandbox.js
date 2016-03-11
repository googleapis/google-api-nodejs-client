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
 * Enterprise Apps Reseller API
 *
 * @classdesc Creates and manages your customers and their subscriptions.
 * @namespace reseller
 * @version  v1sandbox
 * @variation v1sandbox
 * @this Reseller
 * @param {object=} options Options for Reseller
 */
function Reseller(options) {

  var self = this;
  this._options = options || {};

  this.customers = {

    /**
     * reseller.customers.get
     *
     * @desc Gets a customer resource if one exists and is owned by the reseller.
     *
     * @alias reseller.customers.get
     * @memberOf! reseller(v1sandbox)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.customerId - Id of the Customer
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/apps/reseller/v1sandbox/customers/{customerId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['customerId'],
        pathParams: ['customerId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * reseller.customers.insert
     *
     * @desc Creates a customer resource if one does not already exist.
     *
     * @alias reseller.customers.insert
     * @memberOf! reseller(v1sandbox)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.customerAuthToken - An auth token needed for inserting a customer for which domain already exists. Can be generated at https://admin.google.com/TransferToken. Optional.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/apps/reseller/v1sandbox/customers',
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
     * reseller.customers.patch
     *
     * @desc Update a customer resource if one it exists and is owned by the reseller. This method supports patch semantics.
     *
     * @alias reseller.customers.patch
     * @memberOf! reseller(v1sandbox)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.customerId - Id of the Customer
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/apps/reseller/v1sandbox/customers/{customerId}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['customerId'],
        pathParams: ['customerId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * reseller.customers.update
     *
     * @desc Update a customer resource if one it exists and is owned by the reseller.
     *
     * @alias reseller.customers.update
     * @memberOf! reseller(v1sandbox)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.customerId - Id of the Customer
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/apps/reseller/v1sandbox/customers/{customerId}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['customerId'],
        pathParams: ['customerId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.subscriptions = {

    /**
     * reseller.subscriptions.activate
     *
     * @desc Activates a subscription previously suspended by the reseller
     *
     * @alias reseller.subscriptions.activate
     * @memberOf! reseller(v1sandbox)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.customerId - Id of the Customer
     * @param  {string} params.subscriptionId - Id of the subscription, which is unique for a customer
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    activate: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/apps/reseller/v1sandbox/customers/{customerId}/subscriptions/{subscriptionId}/activate',
          method: 'POST'
        },
        params: params,
        requiredParams: ['customerId', 'subscriptionId'],
        pathParams: ['customerId', 'subscriptionId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * reseller.subscriptions.changePlan
     *
     * @desc Changes the plan of a subscription
     *
     * @alias reseller.subscriptions.changePlan
     * @memberOf! reseller(v1sandbox)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.customerId - Id of the Customer
     * @param  {string} params.subscriptionId - Id of the subscription, which is unique for a customer
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    changePlan: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/apps/reseller/v1sandbox/customers/{customerId}/subscriptions/{subscriptionId}/changePlan',
          method: 'POST'
        },
        params: params,
        requiredParams: ['customerId', 'subscriptionId'],
        pathParams: ['customerId', 'subscriptionId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * reseller.subscriptions.changeRenewalSettings
     *
     * @desc Changes the renewal settings of a subscription
     *
     * @alias reseller.subscriptions.changeRenewalSettings
     * @memberOf! reseller(v1sandbox)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.customerId - Id of the Customer
     * @param  {string} params.subscriptionId - Id of the subscription, which is unique for a customer
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    changeRenewalSettings: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/apps/reseller/v1sandbox/customers/{customerId}/subscriptions/{subscriptionId}/changeRenewalSettings',
          method: 'POST'
        },
        params: params,
        requiredParams: ['customerId', 'subscriptionId'],
        pathParams: ['customerId', 'subscriptionId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * reseller.subscriptions.changeSeats
     *
     * @desc Changes the seats configuration of a subscription
     *
     * @alias reseller.subscriptions.changeSeats
     * @memberOf! reseller(v1sandbox)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.customerId - Id of the Customer
     * @param  {string} params.subscriptionId - Id of the subscription, which is unique for a customer
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    changeSeats: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/apps/reseller/v1sandbox/customers/{customerId}/subscriptions/{subscriptionId}/changeSeats',
          method: 'POST'
        },
        params: params,
        requiredParams: ['customerId', 'subscriptionId'],
        pathParams: ['customerId', 'subscriptionId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * reseller.subscriptions.delete
     *
     * @desc Cancels/Downgrades a subscription.
     *
     * @alias reseller.subscriptions.delete
     * @memberOf! reseller(v1sandbox)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.customerId - Id of the Customer
     * @param  {string} params.deletionType - Whether the subscription is to be fully cancelled or downgraded
     * @param  {string} params.subscriptionId - Id of the subscription, which is unique for a customer
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/apps/reseller/v1sandbox/customers/{customerId}/subscriptions/{subscriptionId}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['customerId', 'subscriptionId', 'deletionType'],
        pathParams: ['customerId', 'subscriptionId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * reseller.subscriptions.get
     *
     * @desc Gets a subscription of the customer.
     *
     * @alias reseller.subscriptions.get
     * @memberOf! reseller(v1sandbox)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.customerId - Id of the Customer
     * @param  {string} params.subscriptionId - Id of the subscription, which is unique for a customer
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/apps/reseller/v1sandbox/customers/{customerId}/subscriptions/{subscriptionId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['customerId', 'subscriptionId'],
        pathParams: ['customerId', 'subscriptionId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * reseller.subscriptions.insert
     *
     * @desc Creates/Transfers a subscription for the customer.
     *
     * @alias reseller.subscriptions.insert
     * @memberOf! reseller(v1sandbox)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.customerAuthToken - An auth token needed for transferring a subscription. Can be generated at https://www.google.com/a/cpanel/customer-domain/TransferToken. Optional.
     * @param  {string} params.customerId - Id of the Customer
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/apps/reseller/v1sandbox/customers/{customerId}/subscriptions',
          method: 'POST'
        },
        params: params,
        requiredParams: ['customerId'],
        pathParams: ['customerId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * reseller.subscriptions.list
     *
     * @desc Lists subscriptions of a reseller, optionally filtered by a customer name prefix.
     *
     * @alias reseller.subscriptions.list
     * @memberOf! reseller(v1sandbox)
     *
     * @param  {object=} params - Parameters for request
     * @param  {string=} params.customerAuthToken - An auth token needed if the customer is not a resold customer of this reseller. Can be generated at https://www.google.com/a/cpanel/customer-domain/TransferToken.Optional.
     * @param  {string=} params.customerId - Id of the Customer
     * @param  {string=} params.customerNamePrefix - Prefix of the customer's domain name by which the subscriptions should be filtered. Optional
     * @param  {integer=} params.maxResults - Maximum number of results to return
     * @param  {string=} params.pageToken - Token to specify next page in the list
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/apps/reseller/v1sandbox/subscriptions',
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
     * reseller.subscriptions.startPaidService
     *
     * @desc Starts paid service of a trial subscription
     *
     * @alias reseller.subscriptions.startPaidService
     * @memberOf! reseller(v1sandbox)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.customerId - Id of the Customer
     * @param  {string} params.subscriptionId - Id of the subscription, which is unique for a customer
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    startPaidService: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/apps/reseller/v1sandbox/customers/{customerId}/subscriptions/{subscriptionId}/startPaidService',
          method: 'POST'
        },
        params: params,
        requiredParams: ['customerId', 'subscriptionId'],
        pathParams: ['customerId', 'subscriptionId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * reseller.subscriptions.suspend
     *
     * @desc Suspends an active subscription
     *
     * @alias reseller.subscriptions.suspend
     * @memberOf! reseller(v1sandbox)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.customerId - Id of the Customer
     * @param  {string} params.subscriptionId - Id of the subscription, which is unique for a customer
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    suspend: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/apps/reseller/v1sandbox/customers/{customerId}/subscriptions/{subscriptionId}/suspend',
          method: 'POST'
        },
        params: params,
        requiredParams: ['customerId', 'subscriptionId'],
        pathParams: ['customerId', 'subscriptionId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * Exports Reseller object
 * @type Reseller
 */
module.exports = Reseller;