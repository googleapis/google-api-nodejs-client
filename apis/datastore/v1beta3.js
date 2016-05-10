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
 * Google Cloud Datastore API
 *
 * Google Cloud Datastore is a schemaless NoSQL datastore providing robust, scalable storage for your application.

 *
 * @example
 * var google = require('googleapis');
 * var datastore = google.datastore('v1beta3');
 *
 * @namespace datastore
 * @type {Function}
 * @version v1beta3
 * @variation v1beta3
 * @param {object=} options Options for Datastore
 */
function Datastore(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.projects = {

    /**
     * datastore.projects.runQuery
     *
     * @desc Queries for entities.
     *
     * @alias datastore.projects.runQuery
     * @memberOf! datastore(v1beta3)
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId The ID of the project against which to make the request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    runQuery: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://datastore.googleapis.com/v1beta3/projects/{projectId}:runQuery',
          method: 'POST'
        },
        params: params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * datastore.projects.beginTransaction
     *
     * @desc Begins a new transaction.
     *
     * @alias datastore.projects.beginTransaction
     * @memberOf! datastore(v1beta3)
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId The ID of the project against which to make the request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    beginTransaction: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://datastore.googleapis.com/v1beta3/projects/{projectId}:beginTransaction',
          method: 'POST'
        },
        params: params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * datastore.projects.allocateIds
     *
     * @desc Allocates IDs for the given keys, which is useful for referencing an entity before it is inserted.
     *
     * @alias datastore.projects.allocateIds
     * @memberOf! datastore(v1beta3)
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId The ID of the project against which to make the request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    allocateIds: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://datastore.googleapis.com/v1beta3/projects/{projectId}:allocateIds',
          method: 'POST'
        },
        params: params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * datastore.projects.lookup
     *
     * @desc Looks up entities by key.
     *
     * @alias datastore.projects.lookup
     * @memberOf! datastore(v1beta3)
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId The ID of the project against which to make the request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    lookup: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://datastore.googleapis.com/v1beta3/projects/{projectId}:lookup',
          method: 'POST'
        },
        params: params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * datastore.projects.commit
     *
     * @desc Commits a transaction, optionally creating, deleting or modifying some entities.
     *
     * @alias datastore.projects.commit
     * @memberOf! datastore(v1beta3)
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId The ID of the project against which to make the request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    commit: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://datastore.googleapis.com/v1beta3/projects/{projectId}:commit',
          method: 'POST'
        },
        params: params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * datastore.projects.rollback
     *
     * @desc Rolls back a transaction.
     *
     * @alias datastore.projects.rollback
     * @memberOf! datastore(v1beta3)
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId The ID of the project against which to make the request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    rollback: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://datastore.googleapis.com/v1beta3/projects/{projectId}:rollback',
          method: 'POST'
        },
        params: params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

module.exports = Datastore;
