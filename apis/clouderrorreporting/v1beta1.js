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
 * Stackdriver Error Reporting API
 *
 * Stackdriver Error Reporting groups and counts similar errors from cloud services. The Stackdriver Error Reporting API provides read access to error groups and their associated errors.

 *
 * @example
 * var google = require('googleapis');
 * var clouderrorreporting = google.clouderrorreporting('v1beta1');
 *
 * @namespace clouderrorreporting
 * @type {Function}
 * @version v1beta1
 * @variation v1beta1
 * @param {object=} options Options for Clouderrorreporting
 */
function Clouderrorreporting(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.projects = {

    /**
     * clouderrorreporting.projects.deleteEvents
     *
     * @desc Deletes all error events of a given project.
     *
     * @alias clouderrorreporting.projects.deleteEvents
     * @memberOf! clouderrorreporting(v1beta1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectName [Required] The resource name of the Google Cloud Platform project. Written as `projects/` plus the [Google Cloud Platform project ID](https://support.google.com/cloud/answer/6158840). Example: `projects/my-project-123`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    deleteEvents: function (params, callback) {
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
       * @param {object} params Parameters for request
       * @param {string=} params.timeRange.period Restricts the query to the specified time range.
       * @param {string} params.projectName [Required] The resource name of the Google Cloud Platform project. Written as `projects/` plus the [Google Cloud Platform project ID](https://support.google.com/cloud/answer/6158840). Example: `projects/my-project-123`.
       * @param {string=} params.serviceFilter.service [Optional] The exact value to match against [`ServiceContext.service`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.service).
       * @param {string=} params.groupId [Required] The group for which events shall be returned.
       * @param {string=} params.serviceFilter.version [Optional] The exact value to match against [`ServiceContext.version`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.version).
       * @param {integer=} params.pageSize [Optional] The maximum number of results to return per response.
       * @param {string=} params.pageToken [Optional] A `next_page_token` provided by a previous response.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, callback) {
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
      },

      /**
       * clouderrorreporting.projects.events.report
       *
       * @desc Report an individual error event.  This endpoint accepts <strong>either</strong> an OAuth token, <strong>or</strong> an <a href="https://support.google.com/cloud/answer/6158862">API key</a> for authentication. To use an API key, append it to the URL as the value of a `key` parameter. For example: <pre>POST https://clouderrorreporting.googleapis.com/v1beta1/projects/example-project/events:report?key=123ABC456</pre>
       *
       * @alias clouderrorreporting.projects.events.report
       * @memberOf! clouderrorreporting(v1beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.projectName [Required] The resource name of the Google Cloud Platform project. Written as `projects/` plus the [Google Cloud Platform project ID](https://support.google.com/cloud/answer/6158840). Example: `projects/my-project-123`.
       * @param {object} params.resource Request body data
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      report: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://clouderrorreporting.googleapis.com/v1beta1/{projectName}/events:report',
            method: 'POST'
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
       * @param {object} params Parameters for request
       * @param {string} params.name The group resource name. Example: <code>projects/my-project-123/groups/my-groupid</code>
       * @param {object} params.resource Request body data
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      update: function (params, callback) {
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
       * @param {object} params Parameters for request
       * @param {string} params.groupName [Required] The group resource name. Written as <code>projects/<var>projectID</var>/groups/<var>group_name</var></code>. Call <a href="/error-reporting/reference/rest/v1beta1/projects.groupStats/list"> <code>groupStats.list</code></a> to return a list of groups belonging to this project.  Example: <code>projects/my-project-123/groups/my-group</code>
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      get: function (params, callback) {
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
       * @param {object} params Parameters for request
       * @param {string=} params.alignment [Optional] The alignment of the timed counts to be returned. Default is `ALIGNMENT_EQUAL_AT_END`.
       * @param {string=} params.timeRange.period Restricts the query to the specified time range.
       * @param {string} params.projectName [Required] The resource name of the Google Cloud Platform project. Written as <code>projects/</code> plus the <a href="https://support.google.com/cloud/answer/6158840">Google Cloud Platform project ID</a>.  Example: <code>projects/my-project-123</code>.
       * @param {string=} params.order [Optional] The sort order in which the results are returned. Default is `COUNT_DESC`.
       * @param {string=} params.groupId [Optional] List all <code>ErrorGroupStats</code> with these IDs. If not specified, all error group stats with a non-zero error count for the given selection criteria are returned.
       * @param {string=} params.serviceFilter.service [Optional] The exact value to match against [`ServiceContext.service`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.service).
       * @param {string=} params.alignmentTime [Optional] Time where the timed counts shall be aligned if rounded alignment is chosen. Default is 00:00 UTC.
       * @param {string=} params.serviceFilter.version [Optional] The exact value to match against [`ServiceContext.version`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.version).
       * @param {integer=} params.pageSize [Optional] The maximum number of results to return per response. Default is 20.
       * @param {string=} params.timedCountDuration [Optional] The preferred duration for a single returned `TimedCount`. If not set, no timed counts are returned.
       * @param {string=} params.pageToken [Optional] A `next_page_token` provided by a previous response. To view additional results, pass this token along with the identical query parameters as the first request.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, callback) {
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
    }
  };
}

module.exports = Clouderrorreporting;
