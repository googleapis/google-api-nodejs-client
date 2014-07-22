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
var checkRequired = apirequest.checkRequired;
var extend = require('../../lib/utils').extend;

/**
 * Enterprise License Manager API
 *
 * @classdesc Licensing API to view and manage license for your domain.
 * @namespace licensing
 * @version  v1
 * @variation v1
 * @this Licensing
 * @param {object=} options Options for Licensing
 */
function Licensing(options) {

  var self = this;
  this._options = options || {};

  this.licenseAssignments = {

    /**
     * licensing.licenseAssignments.delete
     *
     * @desc Revoke License.
     *
     * @alias licensing.licenseAssignments.delete
     * @memberOf! licensing(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.productId - Name for product
     * @param  {string} params.skuId - Name for sku
     * @param  {string} params.userId - email id or unique Id of the user
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['productId', 'skuId', 'userId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/apps/licensing/v1/product/' + params.productId + '/sku/' + params.skuId + '/user/' + params.userId,
        method: 'DELETE'
      };

      delete params.productId;
      delete params.skuId;
      delete params.userId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * licensing.licenseAssignments.get
     *
     * @desc Get license assignment of a particular product and sku for a user
     *
     * @alias licensing.licenseAssignments.get
     * @memberOf! licensing(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.productId - Name for product
     * @param  {string} params.skuId - Name for sku
     * @param  {string} params.userId - email id or unique Id of the user
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['productId', 'skuId', 'userId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/apps/licensing/v1/product/' + params.productId + '/sku/' + params.skuId + '/user/' + params.userId,
        method: 'GET'
      };

      delete params.productId;
      delete params.skuId;
      delete params.userId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * licensing.licenseAssignments.insert
     *
     * @desc Assign License.
     *
     * @alias licensing.licenseAssignments.insert
     * @memberOf! licensing(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.productId - Name for product
     * @param  {string} params.skuId - Name for sku
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['productId', 'skuId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/apps/licensing/v1/product/' + params.productId + '/sku/' + params.skuId + '/user',
        method: 'POST'
      };

      delete params.productId;
      delete params.skuId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * licensing.licenseAssignments.listForProduct
     *
     * @desc List license assignments for given product of the customer.
     *
     * @alias licensing.licenseAssignments.listForProduct
     * @memberOf! licensing(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.customerId - CustomerId represents the customer for whom licenseassignments are queried
     * @param  {integer=} params.maxResults - Maximum number of campaigns to return at one time. Must be positive. Optional. Default value is 100.
     * @param  {string=} params.pageToken - Token to fetch the next page.Optional. By default server will return first page
     * @param  {string} params.productId - Name for product
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    listForProduct: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['productId', 'customerId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/apps/licensing/v1/product/' + params.productId + '/users',
        method: 'GET'
      };

      delete params.productId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * licensing.licenseAssignments.listForProductAndSku
     *
     * @desc List license assignments for given product and sku of the customer.
     *
     * @alias licensing.licenseAssignments.listForProductAndSku
     * @memberOf! licensing(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.customerId - CustomerId represents the customer for whom licenseassignments are queried
     * @param  {integer=} params.maxResults - Maximum number of campaigns to return at one time. Must be positive. Optional. Default value is 100.
     * @param  {string=} params.pageToken - Token to fetch the next page.Optional. By default server will return first page
     * @param  {string} params.productId - Name for product
     * @param  {string} params.skuId - Name for sku
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    listForProductAndSku: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['productId', 'skuId', 'customerId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/apps/licensing/v1/product/' + params.productId + '/sku/' + params.skuId + '/users',
        method: 'GET'
      };

      delete params.productId;
      delete params.skuId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * licensing.licenseAssignments.patch
     *
     * @desc Assign License. This method supports patch semantics.
     *
     * @alias licensing.licenseAssignments.patch
     * @memberOf! licensing(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.productId - Name for product
     * @param  {string} params.skuId - Name for sku for which license would be revoked
     * @param  {string} params.userId - email id or unique Id of the user
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['productId', 'skuId', 'userId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/apps/licensing/v1/product/' + params.productId + '/sku/' + params.skuId + '/user/' + params.userId,
        method: 'PATCH'
      };

      delete params.productId;
      delete params.skuId;
      delete params.userId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * licensing.licenseAssignments.update
     *
     * @desc Assign License.
     *
     * @alias licensing.licenseAssignments.update
     * @memberOf! licensing(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.productId - Name for product
     * @param  {string} params.skuId - Name for sku for which license would be revoked
     * @param  {string} params.userId - email id or unique Id of the user
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['productId', 'skuId', 'userId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/apps/licensing/v1/product/' + params.productId + '/sku/' + params.skuId + '/user/' + params.userId,
        method: 'PUT'
      };

      delete params.productId;
      delete params.skuId;
      delete params.userId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };
}

/**
 * Exports Licensing object
 * @type Licensing
 */
module.exports = Licensing;