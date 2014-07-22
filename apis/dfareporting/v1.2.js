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
 * DFA Reporting API
 *
 * @classdesc Lets you create, run and download reports.
 * @namespace dfareporting
 * @version  v1.2
 * @variation v1.2
 * @this Dfareporting
 * @param {object=} options Options for Dfareporting
 */
function Dfareporting(options) {

  var self = this;
  this._options = options || {};

  this.dimensionValues = {

    /**
     * dfareporting.dimensionValues.query
     *
     * @desc Retrieves list of report dimension values for a list of filters.
     *
     * @alias dfareporting.dimensionValues.query
     * @memberOf! dfareporting(v1.2)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer=} params.maxResults - Maximum number of results to return.
     * @param  {string=} params.pageToken - The value of the nextToken from the previous result page.
     * @param  {string} params.profileId - The DFA user profile ID.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    query: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['profileId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/dfareporting/v1.2/userprofiles/' + params.profileId + '/dimensionvalues/query',
        method: 'POST'
      };

      delete params.profileId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.files = {

    /**
     * dfareporting.files.get
     *
     * @desc Retrieves a report file by its report ID and file ID.
     *
     * @alias dfareporting.files.get
     * @memberOf! dfareporting(v1.2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.fileId - The ID of the report file.
     * @param  {string} params.reportId - The ID of the report.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['reportId', 'fileId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/dfareporting/v1.2/reports/' + params.reportId + '/files/' + params.fileId,
        method: 'GET'
      };

      delete params.fileId;
      delete params.reportId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * dfareporting.files.list
     *
     * @desc Lists files for a user profile.
     *
     * @alias dfareporting.files.list
     * @memberOf! dfareporting(v1.2)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer=} params.maxResults - Maximum number of results to return.
     * @param  {string=} params.pageToken - The value of the nextToken from the previous result page.
     * @param  {string} params.profileId - The DFA profile ID.
     * @param  {string=} params.scope - The scope that defines which results are returned, default is 'MINE'.
     * @param  {string=} params.sortField - The field by which to sort the list.
     * @param  {string=} params.sortOrder - Order of sorted results, default is 'DESCENDING'.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['profileId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/dfareporting/v1.2/userprofiles/' + params.profileId + '/files',
        method: 'GET'
      };

      delete params.profileId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.reports = {

    /**
     * dfareporting.reports.delete
     *
     * @desc Deletes a report by its ID.
     *
     * @alias dfareporting.reports.delete
     * @memberOf! dfareporting(v1.2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.profileId - The DFA user profile ID.
     * @param  {string} params.reportId - The ID of the report.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['profileId', 'reportId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/dfareporting/v1.2/userprofiles/' + params.profileId + '/reports/' + params.reportId,
        method: 'DELETE'
      };

      delete params.profileId;
      delete params.reportId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * dfareporting.reports.get
     *
     * @desc Retrieves a report by its ID.
     *
     * @alias dfareporting.reports.get
     * @memberOf! dfareporting(v1.2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.profileId - The DFA user profile ID.
     * @param  {string} params.reportId - The ID of the report.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['profileId', 'reportId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/dfareporting/v1.2/userprofiles/' + params.profileId + '/reports/' + params.reportId,
        method: 'GET'
      };

      delete params.profileId;
      delete params.reportId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * dfareporting.reports.insert
     *
     * @desc Creates a report.
     *
     * @alias dfareporting.reports.insert
     * @memberOf! dfareporting(v1.2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.profileId - The DFA user profile ID.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['profileId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/dfareporting/v1.2/userprofiles/' + params.profileId + '/reports',
        method: 'POST'
      };

      delete params.profileId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * dfareporting.reports.list
     *
     * @desc Retrieves list of reports.
     *
     * @alias dfareporting.reports.list
     * @memberOf! dfareporting(v1.2)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer=} params.maxResults - Maximum number of results to return.
     * @param  {string=} params.pageToken - The value of the nextToken from the previous result page.
     * @param  {string} params.profileId - The DFA user profile ID.
     * @param  {string=} params.scope - The scope that defines which results are returned, default is 'MINE'.
     * @param  {string=} params.sortField - The field by which to sort the list.
     * @param  {string=} params.sortOrder - Order of sorted results, default is 'DESCENDING'.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['profileId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/dfareporting/v1.2/userprofiles/' + params.profileId + '/reports',
        method: 'GET'
      };

      delete params.profileId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * dfareporting.reports.patch
     *
     * @desc Updates a report. This method supports patch semantics.
     *
     * @alias dfareporting.reports.patch
     * @memberOf! dfareporting(v1.2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.profileId - The DFA user profile ID.
     * @param  {string} params.reportId - The ID of the report.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['profileId', 'reportId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/dfareporting/v1.2/userprofiles/' + params.profileId + '/reports/' + params.reportId,
        method: 'PATCH'
      };

      delete params.profileId;
      delete params.reportId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * dfareporting.reports.run
     *
     * @desc Runs a report.
     *
     * @alias dfareporting.reports.run
     * @memberOf! dfareporting(v1.2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.profileId - The DFA profile ID.
     * @param  {string} params.reportId - The ID of the report.
     * @param  {boolean=} params.synchronous - If set and true, tries to run the report synchronously.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    run: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['profileId', 'reportId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/dfareporting/v1.2/userprofiles/' + params.profileId + '/reports/' + params.reportId + '/run',
        method: 'POST'
      };

      delete params.profileId;
      delete params.reportId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * dfareporting.reports.update
     *
     * @desc Updates a report.
     *
     * @alias dfareporting.reports.update
     * @memberOf! dfareporting(v1.2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.profileId - The DFA user profile ID.
     * @param  {string} params.reportId - The ID of the report.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['profileId', 'reportId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/dfareporting/v1.2/userprofiles/' + params.profileId + '/reports/' + params.reportId,
        method: 'PUT'
      };

      delete params.profileId;
      delete params.reportId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.userProfiles = {

    /**
     * dfareporting.userProfiles.get
     *
     * @desc Gets one user profile by ID.
     *
     * @alias dfareporting.userProfiles.get
     * @memberOf! dfareporting(v1.2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.profileId - The user profile ID.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['profileId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/dfareporting/v1.2/userprofiles/' + params.profileId,
        method: 'GET'
      };

      delete params.profileId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * dfareporting.userProfiles.list
     *
     * @desc Retrieves list of user profiles for a user.
     *
     * @alias dfareporting.userProfiles.list
     * @memberOf! dfareporting(v1.2)
     *
     * @param  {object=} params - Parameters for request
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/dfareporting/v1.2/userprofiles',
        method: 'GET'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };
}

/**
 * Exports Dfareporting object
 * @type Dfareporting
 */
module.exports = Dfareporting;