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
 * DFA Reporting API
 *
 * @classdesc Lets you create, run and download reports.
 * @namespace dfareporting
 * @version  v1.3
 * @variation v1.3
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
     * @memberOf! dfareporting(v1.3)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer=} params.maxResults - Maximum number of results to return.
     * @param  {string=} params.pageToken - The value of the nextToken from the previous result page.
     * @param  {string} params.profileId - The DFA user profile ID.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    query: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v1.3/userprofiles/{profileId}/dimensionvalues/query',
          method: 'POST'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.files = {

    /**
     * dfareporting.files.get
     *
     * @desc Retrieves a report file by its report ID and file ID.
     *
     * @alias dfareporting.files.get
     * @memberOf! dfareporting(v1.3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.fileId - The ID of the report file.
     * @param  {string} params.reportId - The ID of the report.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v1.3/reports/{reportId}/files/{fileId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['reportId', 'fileId'],
        pathParams: ['fileId', 'reportId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.files.list
     *
     * @desc Lists files for a user profile.
     *
     * @alias dfareporting.files.list
     * @memberOf! dfareporting(v1.3)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer=} params.maxResults - Maximum number of results to return.
     * @param  {string=} params.pageToken - The value of the nextToken from the previous result page.
     * @param  {string} params.profileId - The DFA profile ID.
     * @param  {string=} params.scope - The scope that defines which results are returned, default is 'MINE'.
     * @param  {string=} params.sortField - The field by which to sort the list.
     * @param  {string=} params.sortOrder - Order of sorted results, default is 'DESCENDING'.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v1.3/userprofiles/{profileId}/files',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.reports = {

    /**
     * dfareporting.reports.delete
     *
     * @desc Deletes a report by its ID.
     *
     * @alias dfareporting.reports.delete
     * @memberOf! dfareporting(v1.3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.profileId - The DFA user profile ID.
     * @param  {string} params.reportId - The ID of the report.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v1.3/userprofiles/{profileId}/reports/{reportId}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['profileId', 'reportId'],
        pathParams: ['profileId', 'reportId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.reports.get
     *
     * @desc Retrieves a report by its ID.
     *
     * @alias dfareporting.reports.get
     * @memberOf! dfareporting(v1.3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.profileId - The DFA user profile ID.
     * @param  {string} params.reportId - The ID of the report.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v1.3/userprofiles/{profileId}/reports/{reportId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId', 'reportId'],
        pathParams: ['profileId', 'reportId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.reports.insert
     *
     * @desc Creates a report.
     *
     * @alias dfareporting.reports.insert
     * @memberOf! dfareporting(v1.3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.profileId - The DFA user profile ID.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v1.3/userprofiles/{profileId}/reports',
          method: 'POST'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.reports.list
     *
     * @desc Retrieves list of reports.
     *
     * @alias dfareporting.reports.list
     * @memberOf! dfareporting(v1.3)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer=} params.maxResults - Maximum number of results to return.
     * @param  {string=} params.pageToken - The value of the nextToken from the previous result page.
     * @param  {string} params.profileId - The DFA user profile ID.
     * @param  {string=} params.scope - The scope that defines which results are returned, default is 'MINE'.
     * @param  {string=} params.sortField - The field by which to sort the list.
     * @param  {string=} params.sortOrder - Order of sorted results, default is 'DESCENDING'.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v1.3/userprofiles/{profileId}/reports',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.reports.patch
     *
     * @desc Updates a report. This method supports patch semantics.
     *
     * @alias dfareporting.reports.patch
     * @memberOf! dfareporting(v1.3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.profileId - The DFA user profile ID.
     * @param  {string} params.reportId - The ID of the report.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v1.3/userprofiles/{profileId}/reports/{reportId}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['profileId', 'reportId'],
        pathParams: ['profileId', 'reportId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.reports.run
     *
     * @desc Runs a report.
     *
     * @alias dfareporting.reports.run
     * @memberOf! dfareporting(v1.3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.profileId - The DFA profile ID.
     * @param  {string} params.reportId - The ID of the report.
     * @param  {boolean=} params.synchronous - If set and true, tries to run the report synchronously.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    run: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v1.3/userprofiles/{profileId}/reports/{reportId}/run',
          method: 'POST'
        },
        params: params,
        requiredParams: ['profileId', 'reportId'],
        pathParams: ['profileId', 'reportId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.reports.update
     *
     * @desc Updates a report.
     *
     * @alias dfareporting.reports.update
     * @memberOf! dfareporting(v1.3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.profileId - The DFA user profile ID.
     * @param  {string} params.reportId - The ID of the report.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v1.3/userprofiles/{profileId}/reports/{reportId}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['profileId', 'reportId'],
        pathParams: ['profileId', 'reportId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    compatibleFields: {

      /**
       * dfareporting.reports.compatibleFields.query
       *
       * @desc Returns the fields that are compatible to be selected in the respective sections of a report criteria, given the fields already selected in the input report and user permissions.
       *
       * @alias dfareporting.reports.compatibleFields.query
       * @memberOf! dfareporting(v1.3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.profileId - The DFA user profile ID.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      query: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/dfareporting/v1.3/userprofiles/{profileId}/reports/compatiblefields/query',
            method: 'POST'
          },
          params: params,
          requiredParams: ['profileId'],
          pathParams: ['profileId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    files: {

      /**
       * dfareporting.reports.files.get
       *
       * @desc Retrieves a report file.
       *
       * @alias dfareporting.reports.files.get
       * @memberOf! dfareporting(v1.3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.fileId - The ID of the report file.
       * @param  {string} params.profileId - The DFA profile ID.
       * @param  {string} params.reportId - The ID of the report.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/dfareporting/v1.3/userprofiles/{profileId}/reports/{reportId}/files/{fileId}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['profileId', 'reportId', 'fileId'],
          pathParams: ['fileId', 'profileId', 'reportId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * dfareporting.reports.files.list
       *
       * @desc Lists files for a report.
       *
       * @alias dfareporting.reports.files.list
       * @memberOf! dfareporting(v1.3)
       *
       * @param  {object} params - Parameters for request
       * @param  {integer=} params.maxResults - Maximum number of results to return.
       * @param  {string=} params.pageToken - The value of the nextToken from the previous result page.
       * @param  {string} params.profileId - The DFA profile ID.
       * @param  {string} params.reportId - The ID of the parent report.
       * @param  {string=} params.sortField - The field by which to sort the list.
       * @param  {string=} params.sortOrder - Order of sorted results, default is 'DESCENDING'.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/dfareporting/v1.3/userprofiles/{profileId}/reports/{reportId}/files',
            method: 'GET'
          },
          params: params,
          requiredParams: ['profileId', 'reportId'],
          pathParams: ['profileId', 'reportId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  this.userProfiles = {

    /**
     * dfareporting.userProfiles.get
     *
     * @desc Gets one user profile by ID.
     *
     * @alias dfareporting.userProfiles.get
     * @memberOf! dfareporting(v1.3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.profileId - The user profile ID.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v1.3/userprofiles/{profileId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.userProfiles.list
     *
     * @desc Retrieves list of user profiles for a user.
     *
     * @alias dfareporting.userProfiles.list
     * @memberOf! dfareporting(v1.3)
     *
     * @param  {object=} params - Parameters for request
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v1.3/userprofiles',
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
 * Exports Dfareporting object
 * @type Dfareporting
 */
module.exports = Dfareporting;