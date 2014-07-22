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
 * Cloud SQL Administration API
 *
 * @classdesc API for Cloud SQL database instance management.
 * @namespace sqladmin
 * @version  v1beta1
 * @variation v1beta1
 * @this Sqladmin
 * @param {object=} options Options for Sqladmin
 */
function Sqladmin(options) {

  var self = this;
  this._options = options || {};

  this.backupRuns = {

    /**
     * sql.backupRuns.get
     *
     * @desc Retrieves a resource containing information about a backup run.
     *
     * @alias sql.backupRuns.get
     * @memberOf! sqladmin(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.backupConfiguration - Identifier for the backup configuration. This gets generated automatically when a backup configuration is created.
     * @param  {string} params.dueTime - The time when this run is due to start in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
     * @param  {string} params.instance - Cloud SQL instance ID. This does not include the project ID.
     * @param  {string} params.project - Project ID of the project that contains the instance.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'instance', 'backupConfiguration', 'dueTime']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/sql/v1beta1/projects/' + params.project + '/instances/' + params.instance + '/backupRuns/' + params.backupConfiguration,
        method: 'GET'
      };

      delete params.backupConfiguration;

      delete params.instance;
      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * sql.backupRuns.list
     *
     * @desc Lists all backup runs associated with a given instance and configuration in the reverse chronological order of the enqueued time.
     *
     * @alias sql.backupRuns.list
     * @memberOf! sqladmin(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.backupConfiguration - Identifier for the backup configuration. This gets generated automatically when a backup configuration is created.
     * @param  {string} params.instance - Cloud SQL instance ID. This does not include the project ID.
     * @param  {integer=} params.maxResults - Maximum number of backup runs per response.
     * @param  {string=} params.pageToken - A previously-returned page token representing part of the larger set of results to view.
     * @param  {string} params.project - Project ID of the project that contains the instance.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'instance', 'backupConfiguration']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/sql/v1beta1/projects/' + params.project + '/instances/' + params.instance + '/backupRuns',
        method: 'GET'
      };

      delete params.instance;

      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.instances = {

    /**
     * sql.instances.delete
     *
     * @desc Deletes a Cloud SQL instance.
     *
     * @alias sql.instances.delete
     * @memberOf! sqladmin(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.instance - Cloud SQL instance ID. This does not include the project ID.
     * @param  {string} params.project - Project ID of the project that contains the instance to be deleted.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'instance']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/sql/v1beta1/projects/' + params.project + '/instances/' + params.instance,
        method: 'DELETE'
      };

      delete params.instance;
      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * sql.instances.export
     *
     * @desc Exports data from a Cloud SQL instance to a Google Cloud Storage bucket as a MySQL dump file.
     *
     * @alias sql.instances.export
     * @memberOf! sqladmin(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.instance - Cloud SQL instance ID. This does not include the project ID.
     * @param  {string} params.project - Project ID of the project that contains the instance to be exported.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    export: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'instance']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/sql/v1beta1/projects/' + params.project + '/instances/' + params.instance + '/export',
        method: 'POST'
      };

      delete params.instance;
      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * sql.instances.get
     *
     * @desc Retrieves a resource containing information about a Cloud SQL instance.
     *
     * @alias sql.instances.get
     * @memberOf! sqladmin(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.instance - Cloud SQL instance ID. This does not include the project ID.
     * @param  {string} params.project - Project ID of the project that contains the instance.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'instance']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/sql/v1beta1/projects/' + params.project + '/instances/' + params.instance,
        method: 'GET'
      };

      delete params.instance;
      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * sql.instances.import
     *
     * @desc Imports data into a Cloud SQL instance from a MySQL dump file in Google Cloud Storage.
     *
     * @alias sql.instances.import
     * @memberOf! sqladmin(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.instance - Cloud SQL instance ID. This does not include the project ID.
     * @param  {string} params.project - Project ID of the project that contains the instance.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    import: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'instance']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/sql/v1beta1/projects/' + params.project + '/instances/' + params.instance + '/import',
        method: 'POST'
      };

      delete params.instance;
      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * sql.instances.insert
     *
     * @desc Creates a new Cloud SQL instance.
     *
     * @alias sql.instances.insert
     * @memberOf! sqladmin(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - Project ID of the project to which the newly created Cloud SQL instances should belong.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/sql/v1beta1/projects/' + params.project + '/instances',
        method: 'POST'
      };

      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * sql.instances.list
     *
     * @desc Lists instances under a given project in the alphabetical order of the instance name.
     *
     * @alias sql.instances.list
     * @memberOf! sqladmin(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer=} params.maxResults - The maximum number of results to return per response.
     * @param  {string=} params.pageToken - A previously-returned page token representing part of the larger set of results to view.
     * @param  {string} params.project - Project ID of the project for which to list Cloud SQL instances.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/sql/v1beta1/projects/' + params.project + '/instances',
        method: 'GET'
      };

      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * sql.instances.patch
     *
     * @desc Updates settings of a Cloud SQL instance. Caution: This is not a partial update, so you must include values for all the settings that you want to retain. For partial updates, use patch.. This method supports patch semantics.
     *
     * @alias sql.instances.patch
     * @memberOf! sqladmin(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.instance - Cloud SQL instance ID. This does not include the project ID.
     * @param  {string} params.project - Project ID of the project that contains the instance.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'instance']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/sql/v1beta1/projects/' + params.project + '/instances/' + params.instance,
        method: 'PATCH'
      };

      delete params.instance;
      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * sql.instances.restart
     *
     * @desc Restarts a Cloud SQL instance.
     *
     * @alias sql.instances.restart
     * @memberOf! sqladmin(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.instance - Cloud SQL instance ID. This does not include the project ID.
     * @param  {string} params.project - Project ID of the project that contains the instance to be restarted.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    restart: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'instance']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/sql/v1beta1/projects/' + params.project + '/instances/' + params.instance + '/restart',
        method: 'POST'
      };

      delete params.instance;
      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * sql.instances.restoreBackup
     *
     * @desc Restores a backup of a Cloud SQL instance.
     *
     * @alias sql.instances.restoreBackup
     * @memberOf! sqladmin(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.backupConfiguration - The identifier of the backup configuration. This gets generated automatically when a backup configuration is created.
     * @param  {string} params.dueTime - The time when this run is due to start in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
     * @param  {string} params.instance - Cloud SQL instance ID. This does not include the project ID.
     * @param  {string} params.project - Project ID of the project that contains the instance.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    restoreBackup: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'instance', 'backupConfiguration', 'dueTime']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/sql/v1beta1/projects/' + params.project + '/instances/' + params.instance + '/restoreBackup',
        method: 'POST'
      };

      delete params.instance;
      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * sql.instances.update
     *
     * @desc Updates settings of a Cloud SQL instance. Caution: This is not a partial update, so you must include values for all the settings that you want to retain. For partial updates, use patch.
     *
     * @alias sql.instances.update
     * @memberOf! sqladmin(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.instance - Cloud SQL instance ID. This does not include the project ID.
     * @param  {string} params.project - Project ID of the project that contains the instance.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'instance']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/sql/v1beta1/projects/' + params.project + '/instances/' + params.instance,
        method: 'PUT'
      };

      delete params.instance;
      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.operations = {

    /**
     * sql.operations.get
     *
     * @desc Retrieves an instance operation that has been performed on an instance.
     *
     * @alias sql.operations.get
     * @memberOf! sqladmin(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.instance - Cloud SQL instance ID. This does not include the project ID.
     * @param  {string} params.operation - Instance operation ID.
     * @param  {string} params.project - Project ID of the project that contains the instance.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'instance', 'operation']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/sql/v1beta1/projects/' + params.project + '/instances/' + params.instance + '/operations/' + params.operation,
        method: 'GET'
      };

      delete params.instance;
      delete params.operation;
      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * sql.operations.list
     *
     * @desc Lists all instance operations that have been performed on the given Cloud SQL instance in the reverse chronological order of the start time.
     *
     * @alias sql.operations.list
     * @memberOf! sqladmin(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.instance - Cloud SQL instance ID. This does not include the project ID.
     * @param  {integer=} params.maxResults - Maximum number of operations per response.
     * @param  {string=} params.pageToken - A previously-returned page token representing part of the larger set of results to view.
     * @param  {string} params.project - Project ID of the project that contains the instance.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'instance']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/sql/v1beta1/projects/' + params.project + '/instances/' + params.instance + '/operations',
        method: 'GET'
      };

      delete params.instance;

      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.tiers = {

    /**
     * sql.tiers.list
     *
     * @desc Lists all available service tiers for Google Cloud SQL, for example D1, D2. For related information, see Pricing.
     *
     * @alias sql.tiers.list
     * @memberOf! sqladmin(v1beta1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/sql/v1beta1/tiers',
        method: 'GET'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };
}

/**
 * Exports Sqladmin object
 * @type Sqladmin
 */
module.exports = Sqladmin;