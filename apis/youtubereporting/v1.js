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
 * YouTube Reporting API
 *
 * @classdesc An API to schedule reporting jobs and download the resulting bulk data reports about YouTube channels, videos etc. in the form of CSV files.
 * @namespace youtubereporting
 * @version  v1
 * @variation v1
 * @this Youtubereporting
 * @param {object=} options Options for Youtubereporting
 */
function Youtubereporting(options) {

  var self = this;
  this._options = options || {};

  this.media = {

    /**
     * youtubereporting.media.download
     *
     * @desc Method for media download. Download is supported on the URI `/v1/media/{+name}?alt=media`.
     *
     * @alias youtubereporting.media.download
     * @memberOf! youtubereporting(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.resourceName - Name of the media that is being downloaded. See [][ByteStream.ReadRequest.resource_name].
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    download: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://youtubereporting.googleapis.com/v1/media/{resourceName}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['resourceName'],
        pathParams: ['resourceName'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.reportTypes = {

    /**
     * youtubereporting.reportTypes.list
     *
     * @desc Lists report types.
     *
     * @alias youtubereporting.reportTypes.list
     * @memberOf! youtubereporting(v1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {string=} params.onBehalfOfContentOwner - The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
     * @param  {integer=} params.pageSize - Requested page size. Server may return fewer report types than requested. If unspecified, server will pick an appropriate default.
     * @param  {string=} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListReportTypesResponse.next_page_token returned in response to the previous call to the `ListReportTypes` method.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://youtubereporting.googleapis.com/v1/reportTypes',
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

  this.jobs = {

    /**
     * youtubereporting.jobs.create
     *
     * @desc Creates a job and returns it.
     *
     * @alias youtubereporting.jobs.create
     * @memberOf! youtubereporting(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.onBehalfOfContentOwner - The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    create: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://youtubereporting.googleapis.com/v1/jobs',
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
     * youtubereporting.jobs.list
     *
     * @desc Lists jobs.
     *
     * @alias youtubereporting.jobs.list
     * @memberOf! youtubereporting(v1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {string=} params.onBehalfOfContentOwner - The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
     * @param  {integer=} params.pageSize - Requested page size. Server may return fewer jobs than requested. If unspecified, server will pick an appropriate default.
     * @param  {string=} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListReportTypesResponse.next_page_token returned in response to the previous call to the `ListJobs` method.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://youtubereporting.googleapis.com/v1/jobs',
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
     * youtubereporting.jobs.get
     *
     * @desc Gets a job.
     *
     * @alias youtubereporting.jobs.get
     * @memberOf! youtubereporting(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.jobId - The ID of the job to retrieve.
     * @param  {string=} params.onBehalfOfContentOwner - The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://youtubereporting.googleapis.com/v1/jobs/{jobId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['jobId'],
        pathParams: ['jobId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtubereporting.jobs.delete
     *
     * @desc Deletes a job.
     *
     * @alias youtubereporting.jobs.delete
     * @memberOf! youtubereporting(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.jobId - The ID of the job to delete.
     * @param  {string=} params.onBehalfOfContentOwner - The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://youtubereporting.googleapis.com/v1/jobs/{jobId}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['jobId'],
        pathParams: ['jobId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    reports: {

      /**
       * youtubereporting.jobs.reports.list
       *
       * @desc Lists reports created by a specific job. Returns NOT_FOUND if the job does not exist.
       *
       * @alias youtubereporting.jobs.reports.list
       * @memberOf! youtubereporting(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.jobId - The ID of the job.
       * @param  {string=} params.onBehalfOfContentOwner - The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
       * @param  {integer=} params.pageSize - Requested page size. Server may return fewer report types than requested. If unspecified, server will pick an appropriate default.
       * @param  {string=} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListReportsResponse.next_page_token returned in response to the previous call to the `ListReports` method.
       * @param  {string=} params.createdAfter - If set, only reports created after the specified date/time are returned.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://youtubereporting.googleapis.com/v1/jobs/{jobId}/reports',
            method: 'GET'
          },
          params: params,
          requiredParams: ['jobId'],
          pathParams: ['jobId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * youtubereporting.jobs.reports.get
       *
       * @desc Gets the metadata of a specific report.
       *
       * @alias youtubereporting.jobs.reports.get
       * @memberOf! youtubereporting(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.jobId - The ID of the job.
       * @param  {string} params.reportId - The ID of the report to retrieve.
       * @param  {string=} params.onBehalfOfContentOwner - The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://youtubereporting.googleapis.com/v1/jobs/{jobId}/reports/{reportId}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['jobId', 'reportId'],
          pathParams: ['jobId', 'reportId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };
}

/**
 * Exports Youtubereporting object
 * @type Youtubereporting
 */
module.exports = Youtubereporting;