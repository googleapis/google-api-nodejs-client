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
 * Admin Data Transfer API
 *
 * @classdesc Transfers user data from one user to another.
 * @namespace admin
 * @version  datatransfer_v1
 * @variation datatransfer_v1
 * @this Admin
 * @param {object=} options Options for Admin
 */
function Admin(options) {

  var self = this;
  this._options = options || {};

  this.applications = {

    /**
     * datatransfer.applications.get
     *
     * @desc Retrieves information about an application for the given application ID.
     *
     * @alias datatransfer.applications.get
     * @memberOf! admin(datatransfer_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.applicationId - ID of the application resource to be retrieved.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/datatransfer/v1/applications/{applicationId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['applicationId'],
        pathParams: ['applicationId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * datatransfer.applications.list
     *
     * @desc Lists the applications available for data transfer for a customer.
     *
     * @alias datatransfer.applications.list
     * @memberOf! admin(datatransfer_v1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {string=} params.customerId - Immutable ID of the Google Apps account.
     * @param  {integer=} params.maxResults - Maximum number of results to return. Default is 100.
     * @param  {string=} params.pageToken - Token to specify next page in the list.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/datatransfer/v1/applications',
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

  this.transfers = {

    /**
     * datatransfer.transfers.get
     *
     * @desc Retrieves a data transfer request by its resource ID.
     *
     * @alias datatransfer.transfers.get
     * @memberOf! admin(datatransfer_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.dataTransferId - ID of the resource to be retrieved. This is returned in the response from the insert method.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/datatransfer/v1/transfers/{dataTransferId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['dataTransferId'],
        pathParams: ['dataTransferId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * datatransfer.transfers.insert
     *
     * @desc Inserts a data transfer request.
     *
     * @alias datatransfer.transfers.insert
     * @memberOf! admin(datatransfer_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/datatransfer/v1/transfers',
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
     * datatransfer.transfers.list
     *
     * @desc Lists the transfers for a customer by source user, destination user, or status.
     *
     * @alias datatransfer.transfers.list
     * @memberOf! admin(datatransfer_v1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {string=} params.customerId - Immutable ID of the Google Apps account.
     * @param  {integer=} params.maxResults - Maximum number of results to return. Default is 100.
     * @param  {string=} params.newOwnerUserId - Destination user's profile ID.
     * @param  {string=} params.oldOwnerUserId - Source user's profile ID.
     * @param  {string=} params.pageToken - Token to specify the next page in the list.
     * @param  {string=} params.status - Status of the transfer.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/datatransfer/v1/transfers',
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
}

/**
 * Exports Admin object
 * @type Admin
 */
module.exports = Admin;