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
 * Google Cloud Logging API
 *
 * @classdesc The Google Cloud Logging API lets you write log entries and manage your logs, log sinks and logs-based metrics.
 * @namespace logging
 * @version  v2beta1
 * @variation v2beta1
 * @this Logging
 * @param {object=} options Options for Logging
 */
function Logging(options) {

  var self = this;
  this._options = options || {};

  this.projects = {

    logs: {

      /**
       * logging.projects.logs.delete
       *
       * @desc Deletes a log and all its log entries. The log will reappear if it receives new entries.
       *
       * @alias logging.projects.logs.delete
       * @memberOf! logging(v2beta1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.logName - Required. The resource name of the log to delete. Example: `"projects/my-project/logs/syslog"`.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      delete: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://logging.googleapis.com/v2beta1/{logName}',
            method: 'DELETE'
          },
          params: params,
          requiredParams: ['logName'],
          pathParams: ['logName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    sinks: {

      /**
       * logging.projects.sinks.list
       *
       * @desc Lists sinks.
       *
       * @alias logging.projects.sinks.list
       * @memberOf! logging(v2beta1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.projectName - Required. The resource name of the project containing the sinks. Example: `"projects/my-logging-project"`, `"projects/01234567890"`.
       * @param  {string=} params.pageToken - Optional. If the `pageToken` request parameter is supplied, then the next page of results in the set are retrieved. The `pageToken` parameter must be set with the value of the `nextPageToken` result parameter from the previous request. The value of `projectName` must be the same as in the previous request.
       * @param  {integer=} params.pageSize - Optional. The maximum number of results to return from this request. Fewer results might be returned. You must check for the `nextPageToken` result to determine if additional results are available, which you can retrieve by passing the `nextPageToken` value in the `pageToken` parameter to the next request.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://logging.googleapis.com/v2beta1/{projectName}/sinks',
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
       * logging.projects.sinks.get
       *
       * @desc Gets a sink.
       *
       * @alias logging.projects.sinks.get
       * @memberOf! logging(v2beta1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.sinkName - The resource name of the sink to return. Example: `"projects/my-project-id/sinks/my-sink-id"`.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://logging.googleapis.com/v2beta1/{sinkName}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['sinkName'],
          pathParams: ['sinkName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * logging.projects.sinks.create
       *
       * @desc Creates a sink.
       *
       * @alias logging.projects.sinks.create
       * @memberOf! logging(v2beta1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.projectName - The resource name of the project in which to create the sink. Example: `"projects/my-project-id"`. The new sink must be provided in the request.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      create: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://logging.googleapis.com/v2beta1/{projectName}/sinks',
            method: 'POST'
          },
          params: params,
          requiredParams: ['projectName'],
          pathParams: ['projectName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * logging.projects.sinks.update
       *
       * @desc Creates or updates a sink.
       *
       * @alias logging.projects.sinks.update
       * @memberOf! logging(v2beta1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.sinkName - The resource name of the sink to update. Example: `"projects/my-project-id/sinks/my-sink-id"`. The updated sink must be provided in the request and have the same name that is specified in `sinkName`. If the sink does not exist, it is created.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      update: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://logging.googleapis.com/v2beta1/{sinkName}',
            method: 'PUT'
          },
          params: params,
          requiredParams: ['sinkName'],
          pathParams: ['sinkName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * logging.projects.sinks.delete
       *
       * @desc Deletes a sink.
       *
       * @alias logging.projects.sinks.delete
       * @memberOf! logging(v2beta1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.sinkName - The resource name of the sink to delete. Example: `"projects/my-project-id/sinks/my-sink-id"`.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      delete: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://logging.googleapis.com/v2beta1/{sinkName}',
            method: 'DELETE'
          },
          params: params,
          requiredParams: ['sinkName'],
          pathParams: ['sinkName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    metrics: {

      /**
       * logging.projects.metrics.list
       *
       * @desc Lists logs-based metrics.
       *
       * @alias logging.projects.metrics.list
       * @memberOf! logging(v2beta1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.projectName - Required. The resource name of the project containing the metrics. Example: `"projects/my-project-id"`.
       * @param  {string=} params.pageToken - Optional. If the `pageToken` request parameter is supplied, then the next page of results in the set are retrieved. The `pageToken` parameter must be set with the value of the `nextPageToken` result parameter from the previous request. The value of `projectName` must be the same as in the previous request.
       * @param  {integer=} params.pageSize - Optional. The maximum number of results to return from this request. Fewer results might be returned. You must check for the `nextPageToken` result to determine if additional results are available, which you can retrieve by passing the `nextPageToken` value in the `pageToken` parameter to the next request.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://logging.googleapis.com/v2beta1/{projectName}/metrics',
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
       * logging.projects.metrics.get
       *
       * @desc Gets a logs-based metric.
       *
       * @alias logging.projects.metrics.get
       * @memberOf! logging(v2beta1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.metricName - The resource name of the desired metric. Example: `"projects/my-project-id/metrics/my-metric-id"`.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://logging.googleapis.com/v2beta1/{metricName}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['metricName'],
          pathParams: ['metricName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * logging.projects.metrics.create
       *
       * @desc Creates a logs-based metric.
       *
       * @alias logging.projects.metrics.create
       * @memberOf! logging(v2beta1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.projectName - The resource name of the project in which to create the metric. Example: `"projects/my-project-id"`. The new metric must be provided in the request.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      create: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://logging.googleapis.com/v2beta1/{projectName}/metrics',
            method: 'POST'
          },
          params: params,
          requiredParams: ['projectName'],
          pathParams: ['projectName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * logging.projects.metrics.update
       *
       * @desc Creates or updates a logs-based metric.
       *
       * @alias logging.projects.metrics.update
       * @memberOf! logging(v2beta1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.metricName - The resource name of the metric to update. Example: `"projects/my-project-id/metrics/my-metric-id"`. The updated metric must be provided in the request and have the same identifier that is specified in `metricName`. If the metric does not exist, it is created.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      update: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://logging.googleapis.com/v2beta1/{metricName}',
            method: 'PUT'
          },
          params: params,
          requiredParams: ['metricName'],
          pathParams: ['metricName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * logging.projects.metrics.delete
       *
       * @desc Deletes a logs-based metric.
       *
       * @alias logging.projects.metrics.delete
       * @memberOf! logging(v2beta1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.metricName - The resource name of the metric to delete. Example: `"projects/my-project-id/metrics/my-metric-id"`.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      delete: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://logging.googleapis.com/v2beta1/{metricName}',
            method: 'DELETE'
          },
          params: params,
          requiredParams: ['metricName'],
          pathParams: ['metricName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  this.entries = {

    /**
     * logging.entries.write
     *
     * @desc Writes log entries to Cloud Logging. All log entries in Cloud Logging are written by this method.
     *
     * @alias logging.entries.write
     * @memberOf! logging(v2beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    write: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://logging.googleapis.com/v2beta1/entries:write',
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
     * logging.entries.list
     *
     * @desc Lists log entries. Use this method to retrieve log entries from Cloud Logging. For ways to export log entries, see [Exporting Logs](/logging/docs/export).
     *
     * @alias logging.entries.list
     * @memberOf! logging(v2beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://logging.googleapis.com/v2beta1/entries:list',
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

  this.monitoredResourceDescriptors = {

    /**
     * logging.monitoredResourceDescriptors.list
     *
     * @desc Lists monitored resource descriptors that are used by Cloud Logging.
     *
     * @alias logging.monitoredResourceDescriptors.list
     * @memberOf! logging(v2beta1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {integer=} params.pageSize - Optional. The maximum number of results to return from this request. Fewer results might be returned. You must check for the `nextPageToken` result to determine if additional results are available, which you can retrieve by passing the `nextPageToken` value in the `pageToken` parameter to the next request.
     * @param  {string=} params.pageToken - Optional. If the `pageToken` request parameter is supplied, then the next page of results in the set are retrieved. The `pageToken` parameter must be set with the value of the `nextPageToken` result parameter from the previous request.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://logging.googleapis.com/v2beta1/monitoredResourceDescriptors',
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
 * Exports Logging object
 * @type Logging
 */
module.exports = Logging;