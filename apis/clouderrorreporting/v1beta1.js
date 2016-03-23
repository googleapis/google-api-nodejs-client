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
 * Google Cloud Error Reporting API
 *
 * @classdesc Collects errors from Cloud Logging data or sent directly from client applications. Groups and counts similar errors to provide an overview on the health of the application and to enable further analysis.

 * @namespace clouderrorreporting
 * @version  v1beta1
 * @variation v1beta1
 * @this Clouderrorreporting
 * @param {object=} options Options for Clouderrorreporting
 */
function Clouderrorreporting(options) {

  var self = this;
  this._options = options || {};

  this.projects = {

    /**
     * clouderrorreporting.projects.deleteEvents
     *
     * @desc Deletes all error events of a given project.
     *
     * @alias clouderrorreporting.projects.deleteEvents
     * @memberOf! clouderrorreporting(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.projectName - The resource name of the Google Cloud Platform project. Required. Example: `projects/my-project`.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    deleteEvents: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://clouderrorreporting.googleapis.com/v1beta1/{projectName}/events',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['projectName'],
        pathParams: ['projectName'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    events: {

      /**
       * clouderrorreporting.projects.events.list
       *
       * @desc Lists the specified events.
       *
       * @alias clouderrorreporting.projects.events.list
       * @memberOf! clouderrorreporting(v1beta1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string=} params.timeRange.period - Restricts the query to the specified time range.
       * @param  {string} params.projectName - The resource name of the Google Cloud Platform project. Required. Example: projects/my-project
       * @param  {string=} params.serviceFilter.environment - The exact value to match against [`ServiceContext.environment`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.environment).
       * @param  {string=} params.serviceFilter.service - The exact value to match against [`ServiceContext.service`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.service).
       * @param  {string=} params.groupId - The group for which events shall be returned. Required.
       * @param  {integer=} params.pageSize - The maximum number of results to return per response.
       * @param  {string=} params.serviceFilter.version - The exact value to match against [`ServiceContext.version`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.version).
       * @param  {string=} params.pageToken - A `next_page_token` provided by a previous response.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://clouderrorreporting.googleapis.com/v1beta1/{projectName}/events',
            method: 'GET'
          },
          params: params,
          requiredParams: ['projectName'],
          pathParams: ['projectName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    groupStats: {

      /**
       * clouderrorreporting.projects.groupStats.list
       *
       * @desc Lists the specified groups.
       *
       * @alias clouderrorreporting.projects.groupStats.list
       * @memberOf! clouderrorreporting(v1beta1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string=} params.alignment - The alignment of the timed counts to be returned. Default is `ALIGNMENT_EQUAL_AT_END`.
       * @param  {string=} params.timeRange.period - Restricts the query to the specified time range.
       * @param  {string} params.projectName - The [Google Cloud Platform project ID](https://support.google.com/cloud/answer/6158840). Required. Example: `my-project-123`.
       * @param  {string=} params.serviceFilter.environment - The exact value to match against [`ServiceContext.environment`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.environment).
       * @param  {string=} params.order - The sort order in which the results are returned. Default is `COUNT_DESC`.
       * @param  {string=} params.serviceFilter.service - The exact value to match against [`ServiceContext.service`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.service).
       * @param  {string=} params.groupId - List all `ErrorGroupStats` with these IDs. If not specified, all error group stats with a non-zero error count for the given selection criteria are returned.
       * @param  {string=} params.alignmentTime - Time where the timed counts shall be aligned if rounded alignment is chosen. Default is 00:00 UTC.
       * @param  {integer=} params.pageSize - The maximum number of results to return per response. Default is 20.
       * @param  {string=} params.serviceFilter.version - The exact value to match against [`ServiceContext.version`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.version).
       * @param  {string=} params.timedCountDuration - The preferred duration for a single returned `TimedCount`. If not set, no timed counts are returned.
       * @param  {string=} params.pageToken - A `next_page_token` provided by a previous response. To view additional results, pass this token along with the identical query parameters as the first request.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://clouderrorreporting.googleapis.com/v1beta1/{projectName}/groupStats',
            method: 'GET'
          },
          params: params,
          requiredParams: ['projectName'],
          pathParams: ['projectName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    groups: {

      /**
       * clouderrorreporting.projects.groups.update
       *
       * @desc Replace the data for the specified group. Fails if the group does not exist.
       *
       * @alias clouderrorreporting.projects.groups.update
       * @memberOf! clouderrorreporting(v1beta1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.name - Group resource name. Example: projects/my-projectid/groups/my-groupid
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      update: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://clouderrorreporting.googleapis.com/v1beta1/{name}',
            method: 'PUT'
          },
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * clouderrorreporting.projects.groups.get
       *
       * @desc Get the specified group.
       *
       * @alias clouderrorreporting.projects.groups.get
       * @memberOf! clouderrorreporting(v1beta1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.groupName - Group resource name. Required. Example: projects/my-project/groups/my-group
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://clouderrorreporting.googleapis.com/v1beta1/{groupName}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['groupName'],
          pathParams: ['groupName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };
}

/**
 * Exports Clouderrorreporting object
 * @type Clouderrorreporting
 */
module.exports = Clouderrorreporting;