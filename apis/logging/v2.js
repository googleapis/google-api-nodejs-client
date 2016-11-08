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
var utils = require('../../lib/utils');

/**
 * Stackdriver Logging API
 *
 * Writes log entries and manages your Stackdriver Logging configuration.
 *
 * @example
 * var google = require('googleapis');
 * var logging = google.logging('v2');
 *
 * @namespace logging
 * @type {Function}
 * @version v2
 * @variation v2
 * @param {object=} options Options for Logging
 */
function Logging(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.folders = {

    logs: {

      /**
       * logging.folders.logs.delete
       *
       * @desc Deletes a log and all its log entries. The log will reappear if it receives new entries.
       *
       * @alias logging.folders.logs.delete
       * @memberOf! logging(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.logName Required. The resource name of the log to delete.  Example: `"projects/my-project/logs/syslog"`.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      delete: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://logging.googleapis.com/v2/{logName}',
            method: 'DELETE'
          }, options),
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
       * logging.folders.sinks.update
       *
       * @desc Updates or creates a sink.
       *
       * @alias logging.folders.sinks.update
       * @memberOf! logging(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.sinkName Required. The resource name of the sink to update, including the parent resource and the sink identifier.  If the sink does not exist, this method creates the sink.  Example: `"projects/my-project-id/sinks/my-sink-id"`.
       * @param {boolean=} params.uniqueWriterIdentity Optional. Whether the sink will have a dedicated service account returned in the sink's writer_identity. Set this field to be true to export logs from one project to a different project. This field is ignored for non-project sinks (e.g. organization sinks) because those sinks are required to have dedicated service accounts.
       * @param {logging(v2).LogSink} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      update: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://logging.googleapis.com/v2/{sinkName}',
            method: 'PUT'
          }, options),
          params: params,
          requiredParams: ['sinkName'],
          pathParams: ['sinkName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * logging.folders.sinks.get
       *
       * @desc Gets a sink.
       *
       * @alias logging.folders.sinks.get
       * @memberOf! logging(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.sinkName Required. The resource name of the sink to return. Example: `"projects/my-project-id/sinks/my-sink-id"`.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      get: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://logging.googleapis.com/v2/{sinkName}',
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['sinkName'],
          pathParams: ['sinkName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * logging.folders.sinks.create
       *
       * @desc Creates a sink.
       *
       * @alias logging.folders.sinks.create
       * @memberOf! logging(v2)
       *
       * @param {object} params Parameters for request
       * @param {boolean=} params.uniqueWriterIdentity Optional. Whether the sink will have a dedicated service account returned in the sink's writer_identity. Set this field to be true to export logs from one project to a different project. This field is ignored for non-project sinks (e.g. organization sinks) because those sinks are required to have dedicated service accounts.
       * @param {string} params.parent Required. The resource in which to create the sink. Example: `"projects/my-project-id"`. The new sink must be provided in the request.
       * @param {logging(v2).LogSink} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      create: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://logging.googleapis.com/v2/{parent}/sinks',
            method: 'POST'
          }, options),
          params: params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * logging.folders.sinks.list
       *
       * @desc Lists sinks.
       *
       * @alias logging.folders.sinks.list
       * @memberOf! logging(v2)
       *
       * @param {object} params Parameters for request
       * @param {integer=} params.pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored.  The presence of `nextPageToken` in the response indicates that more results might be available.
       * @param {string} params.parent Required. The resource name where this sink was created. Example: `"projects/my-logging-project"`.
       * @param {string=} params.pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method.  `pageToken` must be the value of `nextPageToken` from the previous response.  The values of other method parameters should be identical to those in the previous call.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://logging.googleapis.com/v2/{parent}/sinks',
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * logging.folders.sinks.delete
       *
       * @desc Deletes a sink.
       *
       * @alias logging.folders.sinks.delete
       * @memberOf! logging(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.sinkName Required. The resource name of the sink to delete, including the parent resource and the sink identifier.  Example: `"projects/my-project-id/sinks/my-sink-id"`.  It is an error if the sink does not exist.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      delete: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://logging.googleapis.com/v2/{sinkName}',
            method: 'DELETE'
          }, options),
          params: params,
          requiredParams: ['sinkName'],
          pathParams: ['sinkName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  self.billingAccounts = {

    logs: {

      /**
       * logging.billingAccounts.logs.delete
       *
       * @desc Deletes a log and all its log entries. The log will reappear if it receives new entries.
       *
       * @alias logging.billingAccounts.logs.delete
       * @memberOf! logging(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.logName Required. The resource name of the log to delete.  Example: `"projects/my-project/logs/syslog"`.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      delete: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://logging.googleapis.com/v2/{logName}',
            method: 'DELETE'
          }, options),
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
       * logging.billingAccounts.sinks.update
       *
       * @desc Updates or creates a sink.
       *
       * @alias logging.billingAccounts.sinks.update
       * @memberOf! logging(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.sinkName Required. The resource name of the sink to update, including the parent resource and the sink identifier.  If the sink does not exist, this method creates the sink.  Example: `"projects/my-project-id/sinks/my-sink-id"`.
       * @param {boolean=} params.uniqueWriterIdentity Optional. Whether the sink will have a dedicated service account returned in the sink's writer_identity. Set this field to be true to export logs from one project to a different project. This field is ignored for non-project sinks (e.g. organization sinks) because those sinks are required to have dedicated service accounts.
       * @param {logging(v2).LogSink} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      update: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://logging.googleapis.com/v2/{sinkName}',
            method: 'PUT'
          }, options),
          params: params,
          requiredParams: ['sinkName'],
          pathParams: ['sinkName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * logging.billingAccounts.sinks.get
       *
       * @desc Gets a sink.
       *
       * @alias logging.billingAccounts.sinks.get
       * @memberOf! logging(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.sinkName Required. The resource name of the sink to return. Example: `"projects/my-project-id/sinks/my-sink-id"`.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      get: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://logging.googleapis.com/v2/{sinkName}',
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['sinkName'],
          pathParams: ['sinkName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * logging.billingAccounts.sinks.create
       *
       * @desc Creates a sink.
       *
       * @alias logging.billingAccounts.sinks.create
       * @memberOf! logging(v2)
       *
       * @param {object} params Parameters for request
       * @param {boolean=} params.uniqueWriterIdentity Optional. Whether the sink will have a dedicated service account returned in the sink's writer_identity. Set this field to be true to export logs from one project to a different project. This field is ignored for non-project sinks (e.g. organization sinks) because those sinks are required to have dedicated service accounts.
       * @param {string} params.parent Required. The resource in which to create the sink. Example: `"projects/my-project-id"`. The new sink must be provided in the request.
       * @param {logging(v2).LogSink} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      create: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://logging.googleapis.com/v2/{parent}/sinks',
            method: 'POST'
          }, options),
          params: params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * logging.billingAccounts.sinks.list
       *
       * @desc Lists sinks.
       *
       * @alias logging.billingAccounts.sinks.list
       * @memberOf! logging(v2)
       *
       * @param {object} params Parameters for request
       * @param {integer=} params.pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored.  The presence of `nextPageToken` in the response indicates that more results might be available.
       * @param {string} params.parent Required. The resource name where this sink was created. Example: `"projects/my-logging-project"`.
       * @param {string=} params.pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method.  `pageToken` must be the value of `nextPageToken` from the previous response.  The values of other method parameters should be identical to those in the previous call.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://logging.googleapis.com/v2/{parent}/sinks',
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * logging.billingAccounts.sinks.delete
       *
       * @desc Deletes a sink.
       *
       * @alias logging.billingAccounts.sinks.delete
       * @memberOf! logging(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.sinkName Required. The resource name of the sink to delete, including the parent resource and the sink identifier.  Example: `"projects/my-project-id/sinks/my-sink-id"`.  It is an error if the sink does not exist.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      delete: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://logging.googleapis.com/v2/{sinkName}',
            method: 'DELETE'
          }, options),
          params: params,
          requiredParams: ['sinkName'],
          pathParams: ['sinkName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  self.organizations = {

    logs: {

      /**
       * logging.organizations.logs.delete
       *
       * @desc Deletes a log and all its log entries. The log will reappear if it receives new entries.
       *
       * @alias logging.organizations.logs.delete
       * @memberOf! logging(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.logName Required. The resource name of the log to delete.  Example: `"projects/my-project/logs/syslog"`.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      delete: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://logging.googleapis.com/v2/{logName}',
            method: 'DELETE'
          }, options),
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
       * logging.organizations.sinks.update
       *
       * @desc Updates or creates a sink.
       *
       * @alias logging.organizations.sinks.update
       * @memberOf! logging(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.sinkName Required. The resource name of the sink to update, including the parent resource and the sink identifier.  If the sink does not exist, this method creates the sink.  Example: `"projects/my-project-id/sinks/my-sink-id"`.
       * @param {boolean=} params.uniqueWriterIdentity Optional. Whether the sink will have a dedicated service account returned in the sink's writer_identity. Set this field to be true to export logs from one project to a different project. This field is ignored for non-project sinks (e.g. organization sinks) because those sinks are required to have dedicated service accounts.
       * @param {logging(v2).LogSink} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      update: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://logging.googleapis.com/v2/{sinkName}',
            method: 'PUT'
          }, options),
          params: params,
          requiredParams: ['sinkName'],
          pathParams: ['sinkName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * logging.organizations.sinks.get
       *
       * @desc Gets a sink.
       *
       * @alias logging.organizations.sinks.get
       * @memberOf! logging(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.sinkName Required. The resource name of the sink to return. Example: `"projects/my-project-id/sinks/my-sink-id"`.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      get: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://logging.googleapis.com/v2/{sinkName}',
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['sinkName'],
          pathParams: ['sinkName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * logging.organizations.sinks.create
       *
       * @desc Creates a sink.
       *
       * @alias logging.organizations.sinks.create
       * @memberOf! logging(v2)
       *
       * @param {object} params Parameters for request
       * @param {boolean=} params.uniqueWriterIdentity Optional. Whether the sink will have a dedicated service account returned in the sink's writer_identity. Set this field to be true to export logs from one project to a different project. This field is ignored for non-project sinks (e.g. organization sinks) because those sinks are required to have dedicated service accounts.
       * @param {string} params.parent Required. The resource in which to create the sink. Example: `"projects/my-project-id"`. The new sink must be provided in the request.
       * @param {logging(v2).LogSink} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      create: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://logging.googleapis.com/v2/{parent}/sinks',
            method: 'POST'
          }, options),
          params: params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * logging.organizations.sinks.list
       *
       * @desc Lists sinks.
       *
       * @alias logging.organizations.sinks.list
       * @memberOf! logging(v2)
       *
       * @param {object} params Parameters for request
       * @param {integer=} params.pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored.  The presence of `nextPageToken` in the response indicates that more results might be available.
       * @param {string} params.parent Required. The resource name where this sink was created. Example: `"projects/my-logging-project"`.
       * @param {string=} params.pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method.  `pageToken` must be the value of `nextPageToken` from the previous response.  The values of other method parameters should be identical to those in the previous call.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://logging.googleapis.com/v2/{parent}/sinks',
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * logging.organizations.sinks.delete
       *
       * @desc Deletes a sink.
       *
       * @alias logging.organizations.sinks.delete
       * @memberOf! logging(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.sinkName Required. The resource name of the sink to delete, including the parent resource and the sink identifier.  Example: `"projects/my-project-id/sinks/my-sink-id"`.  It is an error if the sink does not exist.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      delete: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://logging.googleapis.com/v2/{sinkName}',
            method: 'DELETE'
          }, options),
          params: params,
          requiredParams: ['sinkName'],
          pathParams: ['sinkName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  self.projects = {

    metrics: {

      /**
       * logging.projects.metrics.update
       *
       * @desc Creates or updates a logs-based metric.
       *
       * @alias logging.projects.metrics.update
       * @memberOf! logging(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.metricName The resource name of the metric to update. Example: `"projects/my-project-id/metrics/my-metric-id"`.  The updated metric must be provided in the request and have the same identifier that is specified in `metricName`. If the metric does not exist, it is created.
       * @param {logging(v2).LogMetric} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      update: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://logging.googleapis.com/v2/{metricName}',
            method: 'PUT'
          }, options),
          params: params,
          requiredParams: ['metricName'],
          pathParams: ['metricName'],
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
       * @memberOf! logging(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.metricName The resource name of the desired metric. Example: `"projects/my-project-id/metrics/my-metric-id"`.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      get: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://logging.googleapis.com/v2/{metricName}',
            method: 'GET'
          }, options),
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
       * @memberOf! logging(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.parent The resource name of the project in which to create the metric. Example: `"projects/my-project-id"`.  The new metric must be provided in the request.
       * @param {logging(v2).LogMetric} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      create: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://logging.googleapis.com/v2/{parent}/metrics',
            method: 'POST'
          }, options),
          params: params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * logging.projects.metrics.list
       *
       * @desc Lists logs-based metrics.
       *
       * @alias logging.projects.metrics.list
       * @memberOf! logging(v2)
       *
       * @param {object} params Parameters for request
       * @param {integer=} params.pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored.  The presence of `nextPageToken` in the response indicates that more results might be available.
       * @param {string} params.parent Required. The resource name containing the metrics. Example: `"projects/my-project-id"`.
       * @param {string=} params.pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method.  `pageToken` must be the value of `nextPageToken` from the previous response.  The values of other method parameters should be identical to those in the previous call.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://logging.googleapis.com/v2/{parent}/metrics',
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
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
       * @memberOf! logging(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.metricName The resource name of the metric to delete. Example: `"projects/my-project-id/metrics/my-metric-id"`.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      delete: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://logging.googleapis.com/v2/{metricName}',
            method: 'DELETE'
          }, options),
          params: params,
          requiredParams: ['metricName'],
          pathParams: ['metricName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    logs: {

      /**
       * logging.projects.logs.delete
       *
       * @desc Deletes a log and all its log entries. The log will reappear if it receives new entries.
       *
       * @alias logging.projects.logs.delete
       * @memberOf! logging(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.logName Required. The resource name of the log to delete.  Example: `"projects/my-project/logs/syslog"`.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      delete: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://logging.googleapis.com/v2/{logName}',
            method: 'DELETE'
          }, options),
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
       * logging.projects.sinks.update
       *
       * @desc Updates or creates a sink.
       *
       * @alias logging.projects.sinks.update
       * @memberOf! logging(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.sinkName Required. The resource name of the sink to update, including the parent resource and the sink identifier.  If the sink does not exist, this method creates the sink.  Example: `"projects/my-project-id/sinks/my-sink-id"`.
       * @param {boolean=} params.uniqueWriterIdentity Optional. Whether the sink will have a dedicated service account returned in the sink's writer_identity. Set this field to be true to export logs from one project to a different project. This field is ignored for non-project sinks (e.g. organization sinks) because those sinks are required to have dedicated service accounts.
       * @param {logging(v2).LogSink} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      update: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://logging.googleapis.com/v2/{sinkName}',
            method: 'PUT'
          }, options),
          params: params,
          requiredParams: ['sinkName'],
          pathParams: ['sinkName'],
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
       * @memberOf! logging(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.sinkName Required. The resource name of the sink to return. Example: `"projects/my-project-id/sinks/my-sink-id"`.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      get: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://logging.googleapis.com/v2/{sinkName}',
            method: 'GET'
          }, options),
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
       * @memberOf! logging(v2)
       *
       * @param {object} params Parameters for request
       * @param {boolean=} params.uniqueWriterIdentity Optional. Whether the sink will have a dedicated service account returned in the sink's writer_identity. Set this field to be true to export logs from one project to a different project. This field is ignored for non-project sinks (e.g. organization sinks) because those sinks are required to have dedicated service accounts.
       * @param {string} params.parent Required. The resource in which to create the sink. Example: `"projects/my-project-id"`. The new sink must be provided in the request.
       * @param {logging(v2).LogSink} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      create: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://logging.googleapis.com/v2/{parent}/sinks',
            method: 'POST'
          }, options),
          params: params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * logging.projects.sinks.list
       *
       * @desc Lists sinks.
       *
       * @alias logging.projects.sinks.list
       * @memberOf! logging(v2)
       *
       * @param {object} params Parameters for request
       * @param {integer=} params.pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored.  The presence of `nextPageToken` in the response indicates that more results might be available.
       * @param {string} params.parent Required. The resource name where this sink was created. Example: `"projects/my-logging-project"`.
       * @param {string=} params.pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method.  `pageToken` must be the value of `nextPageToken` from the previous response.  The values of other method parameters should be identical to those in the previous call.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://logging.googleapis.com/v2/{parent}/sinks',
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
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
       * @memberOf! logging(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.sinkName Required. The resource name of the sink to delete, including the parent resource and the sink identifier.  Example: `"projects/my-project-id/sinks/my-sink-id"`.  It is an error if the sink does not exist.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      delete: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://logging.googleapis.com/v2/{sinkName}',
            method: 'DELETE'
          }, options),
          params: params,
          requiredParams: ['sinkName'],
          pathParams: ['sinkName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  self.entries = {

    /**
     * logging.entries.write
     *
     * @desc Writes log entries to Stackdriver Logging.  All log entries are written by this method.
     *
     * @alias logging.entries.write
     * @memberOf! logging(v2)
     *
     * @param {object} params Parameters for request
     * @param {logging(v2).WriteLogEntriesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    write: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://logging.googleapis.com/v2/entries:write',
          method: 'POST'
        }, options),
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
     * @desc Lists log entries.  Use this method to retrieve log entries from Cloud Logging.  For ways to export log entries, see [Exporting Logs](/logging/docs/export).
     *
     * @alias logging.entries.list
     * @memberOf! logging(v2)
     *
     * @param {object} params Parameters for request
     * @param {logging(v2).ListLogEntriesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://logging.googleapis.com/v2/entries:list',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.monitoredResourceDescriptors = {

    /**
     * logging.monitoredResourceDescriptors.list
     *
     * @desc Lists the monitored resource descriptors used by Stackdriver Logging.
     *
     * @alias logging.monitoredResourceDescriptors.list
     * @memberOf! logging(v2)
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored.  The presence of `nextPageToken` in the response indicates that more results might be available.
     * @param {string=} params.pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method.  `pageToken` must be the value of `nextPageToken` from the previous response.  The values of other method parameters should be identical to those in the previous call.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://logging.googleapis.com/v2/monitoredResourceDescriptors',
          method: 'GET'
        }, options),
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
 * @typedef ListLogEntriesResponse
 * @memberOf! logging(v2)
 * @type object
* @property {logging(v2).LogEntry[]} entries A list of log entries.
* @property {string} nextPageToken If there might be more results than appear in this response, then
`nextPageToken` is included.  To get the next set of results, call this
method again using the value of `nextPageToken` as `pageToken`.
*/
/**
 * @typedef ListSinksResponse
 * @memberOf! logging(v2)
 * @type object
* @property {string} nextPageToken If there might be more results than appear in this response, then
`nextPageToken` is included.  To get the next set of results, call the same
method again using the value of `nextPageToken` as `pageToken`.
* @property {logging(v2).LogSink[]} sinks A list of sinks.
*/
/**
 * @typedef SourceLocation
 * @memberOf! logging(v2)
 * @type object
* @property {string} file Source file name. Depending on the runtime environment, this might be a
simple name or a fully-qualified name.
* @property {string} functionName Human-readable name of the function or method being invoked, with optional
context such as the class or package name. This information is used in
contexts such as the logs viewer, where a file and line number are less
meaningful. The format can vary by language. For example:
`qual.if.ied.Class.method` (Java), `dir/package.func` (Go), `function`
(Python).
* @property {string} line Line within the source file.
*/
/**
 * @typedef LogSink
 * @memberOf! logging(v2)
 * @type object
* @property {string} destination Required. The export destination. See
[Exporting Logs With Sinks](/logging/docs/api/tasks/exporting-logs).
Examples:

    &quot;storage.googleapis.com/my-gcs-bucket&quot;
    &quot;bigquery.googleapis.com/projects/my-project-id/datasets/my-dataset&quot;
    &quot;pubsub.googleapis.com/projects/my-project/topics/my-topic&quot;
* @property {string} filter Optional. An [advanced logs filter](/logging/docs/view/advanced_filters).
Only log entries matching the filter are exported. The filter
must be consistent with the log entry format specified by the
`outputVersionFormat` parameter, regardless of the format of the
log entry that was originally written to Stackdriver Logging.
Example filter (V2 format):

    logName=projects/my-projectid/logs/syslog AND severity&gt;=ERROR
The maximum length of the filter is 20000 characters.
* @property {string} endTime Optional. Time at which this sink will stop exporting log entries.  If this
value is present, then log entries are exported only if `entry.timestamp` &lt;
`end_time`.
* @property {string} name Required. The client-assigned sink identifier, unique within the
project. Example: `&quot;my-syslog-errors-to-pubsub&quot;`.  Sink identifiers are
limited to 1000 characters and can include only the following characters:
`A-Z`, `a-z`, `0-9`, and the special characters `_-.`.  The maximum length
of the name is 100 characters.
* @property {string} startTime Optional. The time at which this sink will begin exporting log entries.  If
this value is present, then log entries are exported only if `start_time`
&lt;=`entry.timestamp`.
* @property {string} outputVersionFormat Optional. The log entry version to use for this sink&#39;s exported log
entries.  This version does not have to correspond to the version of the
log entry that was written to Stackdriver Logging. If omitted, the
v2 format is used.
* @property {string} writerIdentity Output only. An IAM identity&amp;mdash;a service account or group&amp;mdash;that
will write exported log entries to the destination on behalf of Stackdriver
Logging. You must grant this identity write-access to the destination.
Consult the destination service&#39;s documentation to determine the exact role
that must be granted.
*/
/**
 * @typedef LogMetric
 * @memberOf! logging(v2)
 * @type object
* @property {string} description Optional. A description of this metric, which is used in documentation.
* @property {string} filter Required. An [advanced logs filter](/logging/docs/view/advanced_filters).
Example: `&quot;resource.type=gae_app AND severity&gt;=ERROR&quot;`.
The maximum length of the filter is 20000 characters.
* @property {string} name Required. The client-assigned metric identifier. Example:
`&quot;severe_errors&quot;`.  Metric identifiers are limited to 100
characters and can include only the following characters: `A-Z`,
`a-z`, `0-9`, and the special characters `_-.,+!*&#39;,()%/`.  The
forward-slash character (`/`) denotes a hierarchy of name pieces,
and it cannot be the first character of the name.  The &#39;%&#39; character
is used to URL encode unsafe and reserved characters and must be
followed by two hexadecimal digits according to RFC 1738.
* @property {string} version Output only. The API version that created or updated this metric.
The version also dictates the syntax of the filter expression. When a value
for this field is missing, the default value of V2 should be assumed.
*/
/**
 * @typedef LogEntry
 * @memberOf! logging(v2)
 * @type object
* @property {string} textPayload The log entry payload, represented as a Unicode string (UTF-8).
* @property {logging(v2).HttpRequest} httpRequest Optional. Information about the HTTP request associated with this
log entry, if applicable.
* @property {object} jsonPayload The log entry payload, represented as a structure that
is expressed as a JSON object.
* @property {object} labels Optional. A set of user-defined (key, value) data that provides additional
information about the log entry.
* @property {string} logName Required. The resource name of the log to which this log entry
belongs. The format of the name is
`&quot;projects/&lt;project-id&gt;/logs/&lt;log-id&gt;&quot;`.  Examples:
`&quot;projects/my-projectid/logs/syslog&quot;`,
`&quot;projects/my-projectid/logs/library.googleapis.com%2Fbook_log&quot;`.

The log ID part of resource name must be less than 512 characters
long and can only include the following characters: upper and
lower case alphanumeric characters: [A-Za-z0-9]; and punctuation
characters: forward-slash, underscore, hyphen, and period.
Forward-slash (`/`) characters in the log ID must be URL-encoded.
* @property {string} severity Optional. The severity of the log entry. The default value is
`LogSeverity.DEFAULT`.
* @property {logging(v2).MonitoredResource} resource Required. The monitored resource associated with this log entry.
Example: a log entry that reports a database error would be
associated with the monitored resource designating the particular
database that reported the error.
* @property {object} protoPayload The log entry payload, represented as a protocol buffer.  Some
Google Cloud Platform services use this field for their log
entry payloads.
* @property {string} timestamp Optional. The time the event described by the log entry occurred.  If
omitted, Stackdriver Logging will use the time the log entry is received.
* @property {string} insertId Optional. A unique ID for the log entry. If you provide this
field, the logging service considers other log entries in the
same project with the same ID as duplicates which can be removed.  If
omitted, Stackdriver Logging will generate a unique ID for this
log entry.
* @property {logging(v2).LogEntryOperation} operation Optional. Information about an operation associated with the log entry, if
applicable.
*/
/**
 * @typedef LogLine
 * @memberOf! logging(v2)
 * @type object
 * @property {string} time Approximate time when this log entry was made.
 * @property {string} severity Severity of this log entry.
 * @property {logging(v2).SourceLocation} sourceLocation Where in the source code this log message was written.
 * @property {string} logMessage App-provided log message.
 */
/**
 * @typedef SourceReference
 * @memberOf! logging(v2)
 * @type object
* @property {string} repository Optional. A URI string identifying the repository.
Example: &quot;https://github.com/GoogleCloudPlatform/kubernetes.git&quot;
* @property {string} revisionId The canonical and persistent identifier of the deployed revision.
Example (git): &quot;0035781c50ec7aa23385dc841529ce8a4b70db1b&quot;
*/
/**
 * @typedef MonitoredResource
 * @memberOf! logging(v2)
 * @type object
* @property {object} labels Required. Values for all of the labels listed in the associated monitored
resource descriptor. For example, Cloud SQL databases use the labels
`&quot;database_id&quot;` and `&quot;zone&quot;`.
* @property {string} type Required. The monitored resource type. This field must match
the `type` field of a MonitoredResourceDescriptor object. For
example, the type of a Cloud SQL database is `&quot;cloudsql_database&quot;`.
*/
/**
 * @typedef WriteLogEntriesRequest
 * @memberOf! logging(v2)
 * @type object
* @property {object} labels Optional. Default labels that are added to the `labels` field of all log
entries in `entries`. If a log entry already has a label with the same key
as a label in this parameter, then the log entry&#39;s label is not changed.
See LogEntry.
* @property {logging(v2).LogEntry[]} entries Required. The log entries to write. Values supplied for the fields
`log_name`, `resource`, and `labels` in this `entries.write` request are
added to those log entries that do not provide their own values for the
fields.

To improve throughput and to avoid exceeding the
[quota limit](/logging/quota-policy) for calls to `entries.write`,
you should write multiple log entries at once rather than
calling this method for each individual log entry.
* @property {string} logName Optional. A default log resource name that is assigned to all log entries
in `entries` that do not specify a value for `log_name`.  Example:
`&quot;projects/my-project/logs/syslog&quot;`.  See
LogEntry.
* @property {boolean} partialSuccess Optional. Whether valid entries should be written even if some other
entries fail due to INVALID_ARGUMENT or PERMISSION_DENIED errors. If any
entry is not written, the response status will be the error associated
with one of the failed entries and include error details in the form of
WriteLogEntriesPartialErrors.
* @property {logging(v2).MonitoredResource} resource Optional. A default monitored resource object that is assigned to all log
entries in `entries` that do not specify a value for `resource`. Example:

    { &quot;type&quot;: &quot;gce_instance&quot;,
      &quot;labels&quot;: {
        &quot;zone&quot;: &quot;us-central1-a&quot;, &quot;instance_id&quot;: &quot;00000000000000000000&quot; }}

See LogEntry.
*/
/**
 * @typedef LabelDescriptor
 * @memberOf! logging(v2)
 * @type object
 * @property {string} description A human-readable description for the label.
 * @property {string} valueType The type of data that can be assigned to the label.
 * @property {string} key The label key.
 */
/**
 * @typedef ListLogMetricsResponse
 * @memberOf! logging(v2)
 * @type object
* @property {logging(v2).LogMetric[]} metrics A list of logs-based metrics.
* @property {string} nextPageToken If there might be more results than appear in this response, then
`nextPageToken` is included.  To get the next set of results, call this
method again using the value of `nextPageToken` as `pageToken`.
*/
/**
 * @typedef MonitoredResourceDescriptor
 * @memberOf! logging(v2)
 * @type object
* @property {string} displayName Optional. A concise name for the monitored resource type that might be
displayed in user interfaces. It should be a Title Cased Noun Phrase,
without any article or other determiners. For example,
`&quot;Google Cloud SQL Database&quot;`.
* @property {string} description Optional. A detailed description of the monitored resource type that might
be used in documentation.
* @property {logging(v2).LabelDescriptor[]} labels Required. A set of labels used to describe instances of this monitored
resource type. For example, an individual Google Cloud SQL database is
identified by values for the labels `&quot;database_id&quot;` and `&quot;zone&quot;`.
* @property {string} type Required. The monitored resource type. For example, the type
`&quot;cloudsql_database&quot;` represents databases in Google Cloud SQL.
The maximum length of this value is 256 characters.
* @property {string} name Optional. The resource name of the monitored resource descriptor:
`&quot;projects/{project_id}/monitoredResourceDescriptors/{type}&quot;` where
{type} is the value of the `type` field in this object and
{project_id} is a project ID that provides API-specific context for
accessing the type.  APIs that do not use project information can use the
resource name format `&quot;monitoredResourceDescriptors/{type}&quot;`.
*/
/**
 * @typedef ListMonitoredResourceDescriptorsResponse
 * @memberOf! logging(v2)
 * @type object
* @property {string} nextPageToken If there might be more results than appear in this response, then
`nextPageToken` is included.  To get the next set of results, call this
method again using the value of `nextPageToken` as `pageToken`.
* @property {logging(v2).MonitoredResourceDescriptor[]} resourceDescriptors A list of resource descriptors.
*/
/**
 * @typedef LogEntryOperation
 * @memberOf! logging(v2)
 * @type object
* @property {string} producer Optional. An arbitrary producer identifier. The combination of
`id` and `producer` must be globally unique.  Examples for `producer`:
`&quot;MyDivision.MyBigCompany.com&quot;`, `&quot;github.com/MyProject/MyApplication&quot;`.
* @property {boolean} last Optional. Set this to True if this is the last log entry in the operation.
* @property {boolean} first Optional. Set this to True if this is the first log entry in the operation.
* @property {string} id Optional. An arbitrary operation identifier. Log entries with the
same identifier are assumed to be part of the same operation.
*/
/**
 * @typedef Empty
 * @memberOf! logging(v2)
 * @type object
 */
/**
 * @typedef HttpRequest
 * @memberOf! logging(v2)
 * @type object
* @property {boolean} cacheLookup Whether or not a cache lookup was attempted.
* @property {string} responseSize The size of the HTTP response message sent back to the client, in bytes,
including the response headers and the response body.
* @property {integer} status The response code indicating the status of response.
Examples: 200, 404.
* @property {boolean} cacheValidatedWithOriginServer Whether or not the response was validated with the origin server before
being served from cache. This field is only meaningful if `cache_hit` is
True.
* @property {string} referer The referer URL of the request, as defined in
[HTTP/1.1 Header Field Definitions](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html).
* @property {boolean} cacheHit Whether or not an entity was served from cache
(with or without validation).
* @property {string} requestUrl The scheme (http, https), the host name, the path and the query
portion of the URL that was requested.
Example: `&quot;http://example.com/some/info?color=red&quot;`.
* @property {string} latency The request processing latency on the server, from the time the request was
received until the response was sent.
* @property {string} cacheFillBytes The number of HTTP response bytes inserted into cache. Set only when a
cache fill was attempted.
* @property {string} requestMethod The request method. Examples: `&quot;GET&quot;`, `&quot;HEAD&quot;`, `&quot;PUT&quot;`, `&quot;POST&quot;`.
* @property {string} remoteIp The IP address (IPv4 or IPv6) of the client that issued the HTTP
request. Examples: `&quot;192.168.1.1&quot;`, `&quot;FE80::0202:B3FF:FE1E:8329&quot;`.
* @property {string} serverIp The IP address (IPv4 or IPv6) of the origin server that the request was
sent to.
* @property {string} userAgent The user agent sent by the client. Example:
`&quot;Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; Q312461; .NET CLR 1.0.3705)&quot;`.
* @property {string} requestSize The size of the HTTP request message in bytes, including the request
headers and the request body.
*/
/**
 * @typedef RequestLog
 * @memberOf! logging(v2)
 * @type object
* @property {string} responseSize Size in bytes sent back to client by request.
* @property {string} requestId Globally unique identifier for a request, which is based on the request
start time.  Request IDs for requests which started later will compare
greater as strings than those for requests which started earlier.
* @property {boolean} first Whether this is the first `RequestLog` entry for this request.  If an
active request has several `RequestLog` entries written to Stackdriver
Logging, then this field will be set for one of them.
* @property {string} method Request method. Example: `&quot;GET&quot;`, `&quot;HEAD&quot;`, `&quot;PUT&quot;`, `&quot;POST&quot;`, `&quot;DELETE&quot;`.
* @property {string} versionId Version of the application that handled this request.
* @property {integer} status HTTP response status code. Example: 200, 404.
* @property {boolean} wasLoadingRequest Whether this was a loading request for the instance.
* @property {string} ip Origin IP address.
* @property {string} nickname The logged-in user who made the request.

Most likely, this is the part of the user&#39;s email before the `@` sign.  The
field value is the same for different requests from the same user, but
different users can have similar names.  This information is also
available to the application via the App Engine Users API.

This field will be populated starting with App Engine 1.9.21.
* @property {string} taskQueueName Queue name of the request, in the case of an offline request.
* @property {string} pendingTime Time this request spent in the pending request queue.
* @property {integer} instanceIndex If the instance processing this request belongs to a manually scaled
module, then this is the 0-based index of the instance. Otherwise, this
value is -1.
* @property {logging(v2).SourceReference[]} sourceReference Source code for the application that handled this request. There can be
more than one source reference per deployed application if source code is
distributed among multiple repositories.
* @property {string} moduleId Module of the application that handled this request.
* @property {string} host Internet host and port number of the resource being requested.
* @property {string} latency Latency of the request.
* @property {string} urlMapEntry File or class that handled the request.
* @property {string} endTime Time when the request finished.
* @property {logging(v2).LogLine[]} line A list of log lines emitted by the application while serving this request.
* @property {string} megaCycles Number of CPU megacycles used to process request.
* @property {string} appId Application that handled this request.
* @property {string} traceId Stackdriver Trace identifier for this request.
* @property {string} taskName Task name of the request, in the case of an offline request.
* @property {number} cost An indication of the relative cost of serving this request.
* @property {string} instanceId An identifier for the instance that handled the request.
* @property {string} startTime Time when the request started.
* @property {string} appEngineRelease App Engine release version.
* @property {string} resource Contains the path and query portion of the URL that was requested. For
example, if the URL was &quot;http://example.com/app?name=val&quot;, the resource
would be &quot;/app?name=val&quot;.  The fragment identifier, which is identified by
the `#` character, is not included.
* @property {string} httpVersion HTTP version of request. Example: `&quot;HTTP/1.1&quot;`.
* @property {string} referrer Referrer URL of request.
* @property {string} userAgent User agent that made the request.
* @property {boolean} finished Whether this request is finished or active.
*/
/**
 * @typedef WriteLogEntriesResponse
 * @memberOf! logging(v2)
 * @type object
 */
/**
 * @typedef ListLogEntriesRequest
 * @memberOf! logging(v2)
 * @type object
* @property {string} filter Optional. A filter that chooses which log entries to return.  See [Advanced
Logs Filters](/logging/docs/view/advanced_filters).  Only log entries that
match the filter are returned.  An empty filter matches all log entries.
The maximum length of the filter is 20000 characters.
* @property {string[]} projectIds Deprecated. One or more project identifiers or project numbers from which
to retrieve log entries.  Examples: `&quot;my-project-1A&quot;`, `&quot;1234567890&quot;`. If
present, these project identifiers are converted to resource format and
added to the list of resources in `resourceNames`. Callers should use
`resourceNames` rather than this parameter.
* @property {string[]} resourceNames Required. One or more cloud resources from which to retrieve log entries.
Example: `&quot;projects/my-project-1A&quot;`, `&quot;projects/1234567890&quot;`.  Projects
listed in `projectIds` are added to this list.
* @property {integer} pageSize Optional. The maximum number of results to return from this request.
Non-positive values are ignored.  The presence of `nextPageToken` in the
response indicates that more results might be available.
* @property {string} orderBy Optional. How the results should be sorted.  Presently, the only permitted
values are `&quot;timestamp asc&quot;` (default) and `&quot;timestamp desc&quot;`. The first
option returns entries in order of increasing values of
`LogEntry.timestamp` (oldest first), and the second option returns entries
in order of decreasing timestamps (newest first).  Entries with equal
timestamps are returned in order of `LogEntry.insertId`.
* @property {string} pageToken Optional. If present, then retrieve the next batch of results from the
preceding call to this method.  `pageToken` must be the value of
`nextPageToken` from the previous response.  The values of other method
parameters should be identical to those in the previous call.
*/
module.exports = Logging;
