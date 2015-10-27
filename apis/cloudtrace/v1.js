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
 * Google Cloud Trace API
 *
 * @classdesc The Google Cloud Trace API provides services for reading and writing runtime trace data for Cloud applications.
 * @namespace cloudtrace
 * @version  v1
 * @variation v1
 * @this Cloudtrace
 * @param {object=} options Options for Cloudtrace
 */
function Cloudtrace(options) {

  var self = this;
  this._options = options || {};

  this.projects = {

    /**
     * cloudtrace.projects.patchTraces
     *
     * @desc Updates the existing traces specified by PatchTracesRequest and inserts the new traces. Any existing trace or span fields included in an update are overwritten by the update, and any additional fields in an update are merged with the existing trace data.
     *
     * @alias cloudtrace.projects.patchTraces
     * @memberOf! cloudtrace(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.projectId - The project id of the trace to patch.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patchTraces: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://cloudtrace.googleapis.com/v1/projects/{projectId}/traces',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    traces: {

      /**
       * cloudtrace.projects.traces.list
       *
       * @desc List traces matching the filter expression.
       *
       * @alias cloudtrace.projects.traces.list
       * @memberOf! cloudtrace(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.projectId - The stringified-version of the project id.
       * @param  {string=} params.view - ViewType specifies the projection of the result.
       * @param  {integer=} params.pageSize - Maximum number of topics to return. If not specified or <= 0, the implementation will select a reasonable value. The implemenation may always return fewer than the requested page_size.
       * @param  {string=} params.pageToken - The token identifying the page of results to return from the ListTraces method. If present, this value is should be taken from the next_page_token field of a previous ListTracesResponse.
       * @param  {string=} params.startTime - End of the time interval (inclusive).
       * @param  {string=} params.endTime - Start of the time interval (exclusive).
       * @param  {string=} params.filter - An optional filter for the request.
       * @param  {string=} params.orderBy - The trace field used to establish the order of traces returned by the ListTraces method. Possible options are: trace_id name (name field of root span) duration (different between end_time and start_time fields of root span) start (start_time field of root span) Descending order can be specified by appending "desc" to the sort field: name desc Only one sort field is permitted, though this may change in the future.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://cloudtrace.googleapis.com/v1/projects/{projectId}/traces',
            method: 'GET'
          },
          params: params,
          requiredParams: ['projectId'],
          pathParams: ['projectId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * cloudtrace.projects.traces.get
       *
       * @desc Gets one trace by id.
       *
       * @alias cloudtrace.projects.traces.get
       * @memberOf! cloudtrace(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.projectId - The project id of the trace to return.
       * @param  {string} params.traceId - The trace id of the trace to return.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://cloudtrace.googleapis.com/v1/projects/{projectId}/traces/{traceId}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['projectId', 'traceId'],
          pathParams: ['projectId', 'traceId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  this.v1 = {

    /**
     * cloudtrace.getDiscovery
     *
     * @desc Returns a discovery document in the specified `format`. The typeurl in the returned google.protobuf.Any value depends on the requested format.
     *
     * @alias cloudtrace.getDiscovery
     * @memberOf! cloudtrace(v1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {string=} params.format - The format requested for discovery.
     * @param  {string=} params.labels - A list of labels (like visibility) influencing the scope of the requested doc.
     * @param  {string=} params.version - The API version of the requested discovery doc.
     * @param  {string=} params.args - Any additional arguments.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    getDiscovery: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://cloudtrace.googleapis.com/v1/discovery',
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
 * Exports Cloudtrace object
 * @type Cloudtrace
 */
module.exports = Cloudtrace;