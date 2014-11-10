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

/* jshint maxlen: false */

'use strict';

var createAPIRequest = require('../../lib/apirequest');

/**
 * Google Cloud Datastore API
 *
 * @classdesc API for accessing Google Cloud Datastore.
 * @namespace datastore
 * @version  v1beta2
 * @variation v1beta2
 * @this Datastore
 * @param {object=} options Options for Datastore
 */
function Datastore(options) {

  var self = this;
  this._options = options || {};

  this.datasets = {

    /**
     * datastore.datasets.allocateIds
     *
     * @desc Allocate IDs for incomplete keys (useful for referencing an entity before it is inserted).
     *
     * @alias datastore.datasets.allocateIds
     * @memberOf! datastore(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.datasetId - Identifies the dataset.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    allocateIds: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/datastore/v1beta2/datasets/{datasetId}/allocateIds',
          method: 'POST'
        },
        params: params,
        requiredParams: ['datasetId'],
        pathParams: ['datasetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * datastore.datasets.beginTransaction
     *
     * @desc Begin a new transaction.
     *
     * @alias datastore.datasets.beginTransaction
     * @memberOf! datastore(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.datasetId - Identifies the dataset.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    beginTransaction: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/datastore/v1beta2/datasets/{datasetId}/beginTransaction',
          method: 'POST'
        },
        params: params,
        requiredParams: ['datasetId'],
        pathParams: ['datasetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * datastore.datasets.commit
     *
     * @desc Commit a transaction, optionally creating, deleting or modifying some entities.
     *
     * @alias datastore.datasets.commit
     * @memberOf! datastore(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.datasetId - Identifies the dataset.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    commit: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/datastore/v1beta2/datasets/{datasetId}/commit',
          method: 'POST'
        },
        params: params,
        requiredParams: ['datasetId'],
        pathParams: ['datasetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * datastore.datasets.lookup
     *
     * @desc Look up some entities by key.
     *
     * @alias datastore.datasets.lookup
     * @memberOf! datastore(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.datasetId - Identifies the dataset.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    lookup: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/datastore/v1beta2/datasets/{datasetId}/lookup',
          method: 'POST'
        },
        params: params,
        requiredParams: ['datasetId'],
        pathParams: ['datasetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * datastore.datasets.rollback
     *
     * @desc Roll back a transaction.
     *
     * @alias datastore.datasets.rollback
     * @memberOf! datastore(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.datasetId - Identifies the dataset.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    rollback: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/datastore/v1beta2/datasets/{datasetId}/rollback',
          method: 'POST'
        },
        params: params,
        requiredParams: ['datasetId'],
        pathParams: ['datasetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * datastore.datasets.runQuery
     *
     * @desc Query for entities.
     *
     * @alias datastore.datasets.runQuery
     * @memberOf! datastore(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.datasetId - Identifies the dataset.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    runQuery: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/datastore/v1beta2/datasets/{datasetId}/runQuery',
          method: 'POST'
        },
        params: params,
        requiredParams: ['datasetId'],
        pathParams: ['datasetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * Exports Datastore object
 * @type Datastore
 */
module.exports = Datastore;