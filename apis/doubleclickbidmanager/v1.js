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
 * DoubleClick Bid Manager API
 *
 * @classdesc API for viewing and managing your reports in DoubleClick Bid Manager.
 * @namespace doubleclickbidmanager
 * @version  v1
 * @variation v1
 * @this Doubleclickbidmanager
 * @param {object=} options Options for Doubleclickbidmanager
 */
function Doubleclickbidmanager(options) {

  var self = this;
  this._options = options || {};

  this.lineitems = {

    /**
     * doubleclickbidmanager.lineitems.downloadlineitems
     *
     * @desc Retrieves line items in CSV format.
     *
     * @alias doubleclickbidmanager.lineitems.downloadlineitems
     * @memberOf! doubleclickbidmanager(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    downloadlineitems: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/doubleclickbidmanager/v1/lineitems/downloadlineitems',
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
     * doubleclickbidmanager.lineitems.uploadlineitems
     *
     * @desc Uploads line items in CSV format.
     *
     * @alias doubleclickbidmanager.lineitems.uploadlineitems
     * @memberOf! doubleclickbidmanager(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    uploadlineitems: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/doubleclickbidmanager/v1/lineitems/uploadlineitems',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.queries = {

    /**
     * doubleclickbidmanager.queries.createquery
     *
     * @desc Creates a query.
     *
     * @alias doubleclickbidmanager.queries.createquery
     * @memberOf! doubleclickbidmanager(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    createquery: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/doubleclickbidmanager/v1/query',
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
     * doubleclickbidmanager.queries.deletequery
     *
     * @desc Deletes a stored query as well as the associated stored reports.
     *
     * @alias doubleclickbidmanager.queries.deletequery
     * @memberOf! doubleclickbidmanager(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.queryId - Query ID to delete.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    deletequery: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/doubleclickbidmanager/v1/query/{queryId}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['queryId'],
        pathParams: ['queryId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * doubleclickbidmanager.queries.getquery
     *
     * @desc Retrieves a stored query.
     *
     * @alias doubleclickbidmanager.queries.getquery
     * @memberOf! doubleclickbidmanager(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.queryId - Query ID to retrieve.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    getquery: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/doubleclickbidmanager/v1/query/{queryId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['queryId'],
        pathParams: ['queryId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * doubleclickbidmanager.queries.listqueries
     *
     * @desc Retrieves stored queries.
     *
     * @alias doubleclickbidmanager.queries.listqueries
     * @memberOf! doubleclickbidmanager(v1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    listqueries: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/doubleclickbidmanager/v1/queries',
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
     * doubleclickbidmanager.queries.runquery
     *
     * @desc Runs a stored query to generate a report.
     *
     * @alias doubleclickbidmanager.queries.runquery
     * @memberOf! doubleclickbidmanager(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.queryId - Query ID to run.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    runquery: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/doubleclickbidmanager/v1/query/{queryId}',
          method: 'POST'
        },
        params: params,
        requiredParams: ['queryId'],
        pathParams: ['queryId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.reports = {

    /**
     * doubleclickbidmanager.reports.listreports
     *
     * @desc Retrieves stored reports.
     *
     * @alias doubleclickbidmanager.reports.listreports
     * @memberOf! doubleclickbidmanager(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.queryId - Query ID with which the reports are associated.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    listreports: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/doubleclickbidmanager/v1/queries/{queryId}/reports',
          method: 'GET'
        },
        params: params,
        requiredParams: ['queryId'],
        pathParams: ['queryId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * Exports Doubleclickbidmanager object
 * @type Doubleclickbidmanager
 */
module.exports = Doubleclickbidmanager;