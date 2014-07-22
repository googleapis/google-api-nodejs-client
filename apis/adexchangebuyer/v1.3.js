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
 * Ad Exchange Buyer API
 *
 * @classdesc Lets you manage your Ad Exchange Buyer account.
 * @namespace adexchangebuyer
 * @version  v1.3
 * @variation v1.3
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
     * @memberOf! adexchangebuyer(v1.3)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.id - The account id
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['id']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adexchangebuyer/v1.3/accounts/' + params.id,
        method: 'GET'
      };

      delete params.id;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * adexchangebuyer.accounts.list
     *
     * @desc Retrieves the authenticated user's list of accounts.
     *
     * @alias adexchangebuyer.accounts.list
     * @memberOf! adexchangebuyer(v1.3)
     *
     * @param  {object=} params - Parameters for request
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adexchangebuyer/v1.3/accounts',
        method: 'GET'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * adexchangebuyer.accounts.patch
     *
     * @desc Updates an existing account. This method supports patch semantics.
     *
     * @alias adexchangebuyer.accounts.patch
     * @memberOf! adexchangebuyer(v1.3)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.id - The account id
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['id']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adexchangebuyer/v1.3/accounts/' + params.id,
        method: 'PATCH'
      };

      delete params.id;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * adexchangebuyer.accounts.update
     *
     * @desc Updates an existing account.
     *
     * @alias adexchangebuyer.accounts.update
     * @memberOf! adexchangebuyer(v1.3)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.id - The account id
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['id']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adexchangebuyer/v1.3/accounts/' + params.id,
        method: 'PUT'
      };

      delete params.id;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.creatives = {

    /**
     * adexchangebuyer.creatives.get
     *
     * @desc Gets the status for a single creative. A creative will be available 30-40 minutes after submission.
     *
     * @alias adexchangebuyer.creatives.get
     * @memberOf! adexchangebuyer(v1.3)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.accountId - The id for the account that will serve this creative.
     * @param  {string} params.buyerCreativeId - The buyer-specific id for this creative.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['accountId', 'buyerCreativeId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adexchangebuyer/v1.3/creatives/' + params.accountId + '/' + params.buyerCreativeId,
        method: 'GET'
      };

      delete params.accountId;
      delete params.buyerCreativeId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * adexchangebuyer.creatives.insert
     *
     * @desc Submit a new creative.
     *
     * @alias adexchangebuyer.creatives.insert
     * @memberOf! adexchangebuyer(v1.3)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adexchangebuyer/v1.3/creatives',
        method: 'POST'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * adexchangebuyer.creatives.list
     *
     * @desc Retrieves a list of the authenticated user's active creatives. A creative will be available 30-40 minutes after submission.
     *
     * @alias adexchangebuyer.creatives.list
     * @memberOf! adexchangebuyer(v1.3)
     *
     * @param  {object=} params - Parameters for request
     * @param  {integer=} params.accountId - When specified, only creatives for the given account ids are returned.
     * @param  {string=} params.buyerCreativeId - When specified, only creatives for the given buyer creative ids are returned.
     * @param  {integer=} params.maxResults - Maximum number of entries returned on one result page. If not set, the default is 100. Optional.
     * @param  {string=} params.pageToken - A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response. Optional.
     * @param  {string=} params.statusFilter - When specified, only creatives having the given status are returned.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adexchangebuyer/v1.3/creatives',
        method: 'GET'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.directDeals = {

    /**
     * adexchangebuyer.directDeals.get
     *
     * @desc Gets one direct deal by ID.
     *
     * @alias adexchangebuyer.directDeals.get
     * @memberOf! adexchangebuyer(v1.3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The direct deal id
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['id']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adexchangebuyer/v1.3/directdeals/' + params.id,
        method: 'GET'
      };

      delete params.id;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * adexchangebuyer.directDeals.list
     *
     * @desc Retrieves the authenticated user's list of direct deals.
     *
     * @alias adexchangebuyer.directDeals.list
     * @memberOf! adexchangebuyer(v1.3)
     *
     * @param  {object=} params - Parameters for request
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adexchangebuyer/v1.3/directdeals',
        method: 'GET'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.performanceReport = {

    /**
     * adexchangebuyer.performanceReport.list
     *
     * @desc Retrieves the authenticated user's list of performance metrics.
     *
     * @alias adexchangebuyer.performanceReport.list
     * @memberOf! adexchangebuyer(v1.3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.accountId - The account id to get the reports.
     * @param  {string} params.endDateTime - The end time of the report in ISO 8601 timestamp format using UTC.
     * @param  {integer=} params.maxResults - Maximum number of entries returned on one result page. If not set, the default is 100. Optional.
     * @param  {string=} params.pageToken - A continuation token, used to page through performance reports. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response. Optional.
     * @param  {string} params.startDateTime - The start time of the report in ISO 8601 timestamp format using UTC.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['accountId', 'endDateTime', 'startDateTime']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adexchangebuyer/v1.3/performancereport',
        method: 'GET'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.pretargetingConfig = {

    /**
     * adexchangebuyer.pretargetingConfig.delete
     *
     * @desc Deletes an existing pretargeting config.
     *
     * @alias adexchangebuyer.pretargetingConfig.delete
     * @memberOf! adexchangebuyer(v1.3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.accountId - The account id to delete the pretargeting config for.
     * @param  {string} params.configId - The specific id of the configuration to delete.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['accountId', 'configId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adexchangebuyer/v1.3/pretargetingconfigs/' + params.accountId + '/' + params.configId,
        method: 'DELETE'
      };

      delete params.accountId;
      delete params.configId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * adexchangebuyer.pretargetingConfig.get
     *
     * @desc Gets a specific pretargeting configuration
     *
     * @alias adexchangebuyer.pretargetingConfig.get
     * @memberOf! adexchangebuyer(v1.3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.accountId - The account id to get the pretargeting config for.
     * @param  {string} params.configId - The specific id of the configuration to retrieve.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['accountId', 'configId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adexchangebuyer/v1.3/pretargetingconfigs/' + params.accountId + '/' + params.configId,
        method: 'GET'
      };

      delete params.accountId;
      delete params.configId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * adexchangebuyer.pretargetingConfig.insert
     *
     * @desc Inserts a new pretargeting configuration.
     *
     * @alias adexchangebuyer.pretargetingConfig.insert
     * @memberOf! adexchangebuyer(v1.3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.accountId - The account id to insert the pretargeting config for.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['accountId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adexchangebuyer/v1.3/pretargetingconfigs/' + params.accountId,
        method: 'POST'
      };

      delete params.accountId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * adexchangebuyer.pretargetingConfig.list
     *
     * @desc Retrieves a list of the authenticated user's pretargeting configurations.
     *
     * @alias adexchangebuyer.pretargetingConfig.list
     * @memberOf! adexchangebuyer(v1.3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.accountId - The account id to get the pretargeting configs for.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['accountId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adexchangebuyer/v1.3/pretargetingconfigs/' + params.accountId,
        method: 'GET'
      };

      delete params.accountId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * adexchangebuyer.pretargetingConfig.patch
     *
     * @desc Updates an existing pretargeting config. This method supports patch semantics.
     *
     * @alias adexchangebuyer.pretargetingConfig.patch
     * @memberOf! adexchangebuyer(v1.3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.accountId - The account id to update the pretargeting config for.
     * @param  {string} params.configId - The specific id of the configuration to update.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['accountId', 'configId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adexchangebuyer/v1.3/pretargetingconfigs/' + params.accountId + '/' + params.configId,
        method: 'PATCH'
      };

      delete params.accountId;
      delete params.configId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * adexchangebuyer.pretargetingConfig.update
     *
     * @desc Updates an existing pretargeting config.
     *
     * @alias adexchangebuyer.pretargetingConfig.update
     * @memberOf! adexchangebuyer(v1.3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.accountId - The account id to update the pretargeting config for.
     * @param  {string} params.configId - The specific id of the configuration to update.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['accountId', 'configId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adexchangebuyer/v1.3/pretargetingconfigs/' + params.accountId + '/' + params.configId,
        method: 'PUT'
      };

      delete params.accountId;
      delete params.configId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };
}

/**
 * Exports Adexchangebuyer object
 * @type Adexchangebuyer
 */
module.exports = Adexchangebuyer;