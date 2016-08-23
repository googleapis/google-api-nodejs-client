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
 * Google Cloud Logging API
 *
 * Writes log entries and manages your logs, log sinks, and logs-based metrics.
 *
 * @example
 * var google = require('googleapis');
 * var logging = google.logging('v2beta1');
 *
 * @namespace logging
 * @type {Function}
 * @version v2beta1
 * @variation v2beta1
 * @param {object=} options Options for Logging
 */
function Logging(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.projects = {

    logs: {

      /**
       * logging.projects.logs.delete
       *
       * @desc Deletes a log and all its log entries. The log will reappear if it receives new entries.
       *
       * @example
       * // BEFORE RUNNING:
       * // ---------------
       * // 1. If not already done, enable the Google Cloud Logging API
       * //    and check the quota for your project at
       * //    https://console.developers.google.com/apis/api/logging
       * // 2. This sample uses Application Default Credentials for authentication.
       * //    If not already done, install the gcloud CLI from
       * //    https://cloud.google.com/sdk/ and run
       * //    'gcloud beta auth application-default login'
       * // 3. Install the Node.js client library and Application Default Credentials
       * //    library by running 'npm install googleapis --save'
       * var google = require('googleapis');
       * var logging = google.logging('v2beta1');
       *
       * google.auth.getApplicationDefault(function(err, authClient) {
       *   if (err) {
       *     console.log('Authentication failed because of ', err);
       *     return;
       *   }
       *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
       *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
       *     authClient = authClient.createScoped(scopes);
       *   }
       *
       *   var request = {
       *     // TODO: Change placeholders below to appropriate parameter values for the 'delete' method:
       *
       *     // * Required. The resource name of the log to delete.  Example:
       *     //   `"projects/my-project/logs/syslog"`.
       *     logName: "projects/{MY-PROJECT}/logs/{MY-LOG}",
       *
       *     // Auth client
       *     auth: authClient
       *   };
       *
       *   logging.projects.logs.delete(request, function(err, result) {
       *     if (err) {
       *       console.log(err);
       *     } else {
       *       console.log(result);
       *     }
       *   });
       * });
       *
       * @alias logging.projects.logs.delete
       * @memberOf! logging(v2beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.logName Required. The resource name of the log to delete. Example: `"projects/my-project/logs/syslog"`.
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
            url: 'https://logging.googleapis.com/v2beta1/{logName}',
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
       * logging.projects.sinks.list
       *
       * @desc Lists sinks.
       *
       * @example
       * // BEFORE RUNNING:
       * // ---------------
       * // 1. If not already done, enable the Google Cloud Logging API
       * //    and check the quota for your project at
       * //    https://console.developers.google.com/apis/api/logging
       * // 2. This sample uses Application Default Credentials for authentication.
       * //    If not already done, install the gcloud CLI from
       * //    https://cloud.google.com/sdk/ and run
       * //    'gcloud beta auth application-default login'
       * // 3. Install the Node.js client library and Application Default Credentials
       * //    library by running 'npm install googleapis --save'
       * var google = require('googleapis');
       * var logging = google.logging('v2beta1');
       *
       * google.auth.getApplicationDefault(function(err, authClient) {
       *   if (err) {
       *     console.log('Authentication failed because of ', err);
       *     return;
       *   }
       *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
       *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
       *     authClient = authClient.createScoped(scopes);
       *   }
       *
       *   var request = {
       *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
       *
       *     // * Required. The cloud resource containing the sinks.
       *     //   Example: `"projects/my-logging-project"`.
       *     parent: "projects/{MY-PROJECT}",
       *
       *     // Auth client
       *     auth: authClient
       *   };
       *
       *
       *   var recur = function(err, result) {
       *     if (err) {
       *       console.log(err);
       *     } else {
       *       console.log(result);
       *       if (result.nextPageToken) {
       *         request.pageToken = result.nextPageToken;
       *         logging.projects.sinks.list(request, recur);
       *       }
       *     }
       *   };
       *
       *   logging.projects.sinks.list(request, recur);
       * });
       *
       * @alias logging.projects.sinks.list
       * @memberOf! logging(v2beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.projectName Required. The resource name of the project containing the sinks. Example: `"projects/my-logging-project"`.
       * @param {string=} params.pageToken Optional. If the `pageToken` parameter is supplied, then the next page of results is retrieved. The `pageToken` parameter must be set to the value of the `nextPageToken` from the previous response. The value of `projectName` must be the same as in the previous request.
       * @param {integer=} params.pageSize Optional. The maximum number of results to return from this request. You must check for presence of `nextPageToken` to determine if additional results are available, which you can retrieve by passing the `nextPageToken` value as the `pageToken` parameter in the next request.
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
            url: 'https://logging.googleapis.com/v2beta1/{projectName}/sinks',
            method: 'GET'
          }, options),
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
       * @example
       * // BEFORE RUNNING:
       * // ---------------
       * // 1. If not already done, enable the Google Cloud Logging API
       * //    and check the quota for your project at
       * //    https://console.developers.google.com/apis/api/logging
       * // 2. This sample uses Application Default Credentials for authentication.
       * //    If not already done, install the gcloud CLI from
       * //    https://cloud.google.com/sdk/ and run
       * //    'gcloud beta auth application-default login'
       * // 3. Install the Node.js client library and Application Default Credentials
       * //    library by running 'npm install googleapis --save'
       * var google = require('googleapis');
       * var logging = google.logging('v2beta1');
       *
       * google.auth.getApplicationDefault(function(err, authClient) {
       *   if (err) {
       *     console.log('Authentication failed because of ', err);
       *     return;
       *   }
       *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
       *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
       *     authClient = authClient.createScoped(scopes);
       *   }
       *
       *   var request = {
       *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
       *
       *     // * Required. The resource name of the sink to return.
       *     //   Example: `"projects/my-project-id/sinks/my-sink-id"`.
       *     sinkName: "projects/{MY-PROJECT}/sinks/{MY-SINK}",
       *
       *     // Auth client
       *     auth: authClient
       *   };
       *
       *   logging.projects.sinks.get(request, function(err, result) {
       *     if (err) {
       *       console.log(err);
       *     } else {
       *       console.log(result);
       *     }
       *   });
       * });
       *
       * @alias logging.projects.sinks.get
       * @memberOf! logging(v2beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.sinkName The resource name of the sink to return. Example: `"projects/my-project-id/sinks/my-sink-id"`.
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
            url: 'https://logging.googleapis.com/v2beta1/{sinkName}',
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
       * @example
       * // BEFORE RUNNING:
       * // ---------------
       * // 1. If not already done, enable the Google Cloud Logging API
       * //    and check the quota for your project at
       * //    https://console.developers.google.com/apis/api/logging
       * // 2. This sample uses Application Default Credentials for authentication.
       * //    If not already done, install the gcloud CLI from
       * //    https://cloud.google.com/sdk/ and run
       * //    'gcloud beta auth application-default login'
       * // 3. Install the Node.js client library and Application Default Credentials
       * //    library by running 'npm install googleapis --save'
       * var google = require('googleapis');
       * var logging = google.logging('v2beta1');
       *
       * google.auth.getApplicationDefault(function(err, authClient) {
       *   if (err) {
       *     console.log('Authentication failed because of ', err);
       *     return;
       *   }
       *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
       *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
       *     authClient = authClient.createScoped(scopes);
       *   }
       *
       *   var request = {
       *     // TODO: Change placeholders below to appropriate parameter values for the 'create' method:
       *
       *     // * Required. The resource in which to create the sink.
       *     //   Example: `"projects/my-project-id"`.
       *     //   The new sink must be provided in the request.
       *     parent: "projects/{MY-PROJECT}",
       *
       *     resource: {},
       *
       *     // Auth client
       *     auth: authClient
       *   };
       *
       *   logging.projects.sinks.create(request, function(err, result) {
       *     if (err) {
       *       console.log(err);
       *     } else {
       *       console.log(result);
       *     }
       *   });
       * });
       *
       * @alias logging.projects.sinks.create
       * @memberOf! logging(v2beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.projectName The resource name of the project in which to create the sink. Example: `"projects/my-project-id"`. The new sink must be provided in the request.
       * @param {logging(v2beta1).LogSink} params.resource Request body data
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
            url: 'https://logging.googleapis.com/v2beta1/{projectName}/sinks',
            method: 'POST'
          }, options),
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
       * @example
       * // BEFORE RUNNING:
       * // ---------------
       * // 1. If not already done, enable the Google Cloud Logging API
       * //    and check the quota for your project at
       * //    https://console.developers.google.com/apis/api/logging
       * // 2. This sample uses Application Default Credentials for authentication.
       * //    If not already done, install the gcloud CLI from
       * //    https://cloud.google.com/sdk/ and run
       * //    'gcloud beta auth application-default login'
       * // 3. Install the Node.js client library and Application Default Credentials
       * //    library by running 'npm install googleapis --save'
       * var google = require('googleapis');
       * var logging = google.logging('v2beta1');
       *
       * google.auth.getApplicationDefault(function(err, authClient) {
       *   if (err) {
       *     console.log('Authentication failed because of ', err);
       *     return;
       *   }
       *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
       *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
       *     authClient = authClient.createScoped(scopes);
       *   }
       *
       *   var request = {
       *     // TODO: Change placeholders below to appropriate parameter values for the 'update' method:
       *
       *     // * Required. The resource name of the sink to update, including the parent
       *     //   resource and the sink identifier.  If the sink does not exist, this method
       *     //   creates the sink.  Example: `"projects/my-project-id/sinks/my-sink-id"`.
       *     sinkName: "projects/{MY-PROJECT}/sinks/{MY-SINK}",
       *
       *     resource: {},
       *
       *     // Auth client
       *     auth: authClient
       *   };
       *
       *   logging.projects.sinks.update(request, function(err, result) {
       *     if (err) {
       *       console.log(err);
       *     } else {
       *       console.log(result);
       *     }
       *   });
       * });
       *
       * @alias logging.projects.sinks.update
       * @memberOf! logging(v2beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.sinkName The resource name of the sink to update. Example: `"projects/my-project-id/sinks/my-sink-id"`. The updated sink must be provided in the request and have the same name that is specified in `sinkName`. If the sink does not exist, it is created.
       * @param {logging(v2beta1).LogSink} params.resource Request body data
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
            url: 'https://logging.googleapis.com/v2beta1/{sinkName}',
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
       * logging.projects.sinks.delete
       *
       * @desc Deletes a sink.
       *
       * @example
       * // BEFORE RUNNING:
       * // ---------------
       * // 1. If not already done, enable the Google Cloud Logging API
       * //    and check the quota for your project at
       * //    https://console.developers.google.com/apis/api/logging
       * // 2. This sample uses Application Default Credentials for authentication.
       * //    If not already done, install the gcloud CLI from
       * //    https://cloud.google.com/sdk/ and run
       * //    'gcloud beta auth application-default login'
       * // 3. Install the Node.js client library and Application Default Credentials
       * //    library by running 'npm install googleapis --save'
       * var google = require('googleapis');
       * var logging = google.logging('v2beta1');
       *
       * google.auth.getApplicationDefault(function(err, authClient) {
       *   if (err) {
       *     console.log('Authentication failed because of ', err);
       *     return;
       *   }
       *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
       *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
       *     authClient = authClient.createScoped(scopes);
       *   }
       *
       *   var request = {
       *     // TODO: Change placeholders below to appropriate parameter values for the 'delete' method:
       *
       *     // * Required. The resource name of the sink to delete, including the parent
       *     //   resource and the sink identifier.  Example:
       *     //   `"projects/my-project-id/sinks/my-sink-id"`.  It is an error if the sink
       *     //   does not exist.
       *     sinkName: "projects/{MY-PROJECT}/sinks/{MY-SINK}",
       *
       *     // Auth client
       *     auth: authClient
       *   };
       *
       *   logging.projects.sinks.delete(request, function(err, result) {
       *     if (err) {
       *       console.log(err);
       *     } else {
       *       console.log(result);
       *     }
       *   });
       * });
       *
       * @alias logging.projects.sinks.delete
       * @memberOf! logging(v2beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.sinkName The resource name of the sink to delete. Example: `"projects/my-project-id/sinks/my-sink-id"`.
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
            url: 'https://logging.googleapis.com/v2beta1/{sinkName}',
            method: 'DELETE'
          }, options),
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
       * @example
       * // BEFORE RUNNING:
       * // ---------------
       * // 1. If not already done, enable the Google Cloud Logging API
       * //    and check the quota for your project at
       * //    https://console.developers.google.com/apis/api/logging
       * // 2. This sample uses Application Default Credentials for authentication.
       * //    If not already done, install the gcloud CLI from
       * //    https://cloud.google.com/sdk/ and run
       * //    'gcloud beta auth application-default login'
       * // 3. Install the Node.js client library and Application Default Credentials
       * //    library by running 'npm install googleapis --save'
       * var google = require('googleapis');
       * var logging = google.logging('v2beta1');
       *
       * google.auth.getApplicationDefault(function(err, authClient) {
       *   if (err) {
       *     console.log('Authentication failed because of ', err);
       *     return;
       *   }
       *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
       *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
       *     authClient = authClient.createScoped(scopes);
       *   }
       *
       *   var request = {
       *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
       *
       *     // * Required. The resource name containing the metrics.
       *     //   Example: `"projects/my-project-id"`.
       *     parent: "projects/{MY-PROJECT}",
       *
       *     // Auth client
       *     auth: authClient
       *   };
       *
       *
       *   var recur = function(err, result) {
       *     if (err) {
       *       console.log(err);
       *     } else {
       *       console.log(result);
       *       if (result.nextPageToken) {
       *         request.pageToken = result.nextPageToken;
       *         logging.projects.metrics.list(request, recur);
       *       }
       *     }
       *   };
       *
       *   logging.projects.metrics.list(request, recur);
       * });
       *
       * @alias logging.projects.metrics.list
       * @memberOf! logging(v2beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.projectName Required. The resource name of the project containing the metrics. Example: `"projects/my-project-id"`.
       * @param {string=} params.pageToken Optional. If the `pageToken` parameter is supplied, then the next page of results is retrieved. The `pageToken` parameter must be set to the value of the `nextPageToken` from the previous response. The value of `projectName` must be the same as in the previous request.
       * @param {integer=} params.pageSize Optional. The maximum number of results to return from this request. You must check for presence of `nextPageToken` to determine if additional results are available, which you can retrieve by passing the `nextPageToken` value as the `pageToken` parameter in the next request.
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
            url: 'https://logging.googleapis.com/v2beta1/{projectName}/metrics',
            method: 'GET'
          }, options),
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
       * @example
       * // BEFORE RUNNING:
       * // ---------------
       * // 1. If not already done, enable the Google Cloud Logging API
       * //    and check the quota for your project at
       * //    https://console.developers.google.com/apis/api/logging
       * // 2. This sample uses Application Default Credentials for authentication.
       * //    If not already done, install the gcloud CLI from
       * //    https://cloud.google.com/sdk/ and run
       * //    'gcloud beta auth application-default login'
       * // 3. Install the Node.js client library and Application Default Credentials
       * //    library by running 'npm install googleapis --save'
       * var google = require('googleapis');
       * var logging = google.logging('v2beta1');
       *
       * google.auth.getApplicationDefault(function(err, authClient) {
       *   if (err) {
       *     console.log('Authentication failed because of ', err);
       *     return;
       *   }
       *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
       *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
       *     authClient = authClient.createScoped(scopes);
       *   }
       *
       *   var request = {
       *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
       *
       *     // * The resource name of the desired metric.
       *     //   Example: `"projects/my-project-id/metrics/my-metric-id"`.
       *     metricName: "projects/{MY-PROJECT}/metrics/{MY-METRIC}",
       *
       *     // Auth client
       *     auth: authClient
       *   };
       *
       *   logging.projects.metrics.get(request, function(err, result) {
       *     if (err) {
       *       console.log(err);
       *     } else {
       *       console.log(result);
       *     }
       *   });
       * });
       *
       * @alias logging.projects.metrics.get
       * @memberOf! logging(v2beta1)
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
            url: 'https://logging.googleapis.com/v2beta1/{metricName}',
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
       * @example
       * // BEFORE RUNNING:
       * // ---------------
       * // 1. If not already done, enable the Google Cloud Logging API
       * //    and check the quota for your project at
       * //    https://console.developers.google.com/apis/api/logging
       * // 2. This sample uses Application Default Credentials for authentication.
       * //    If not already done, install the gcloud CLI from
       * //    https://cloud.google.com/sdk/ and run
       * //    'gcloud beta auth application-default login'
       * // 3. Install the Node.js client library and Application Default Credentials
       * //    library by running 'npm install googleapis --save'
       * var google = require('googleapis');
       * var logging = google.logging('v2beta1');
       *
       * google.auth.getApplicationDefault(function(err, authClient) {
       *   if (err) {
       *     console.log('Authentication failed because of ', err);
       *     return;
       *   }
       *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
       *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
       *     authClient = authClient.createScoped(scopes);
       *   }
       *
       *   var request = {
       *     // TODO: Change placeholders below to appropriate parameter values for the 'create' method:
       *
       *     // * The resource name of the project in which to create the metric.
       *     //   Example: `"projects/my-project-id"`.
       *     //   The new metric must be provided in the request.
       *     parent: "projects/{MY-PROJECT}",
       *
       *     resource: {},
       *
       *     // Auth client
       *     auth: authClient
       *   };
       *
       *   logging.projects.metrics.create(request, function(err, result) {
       *     if (err) {
       *       console.log(err);
       *     } else {
       *       console.log(result);
       *     }
       *   });
       * });
       *
       * @alias logging.projects.metrics.create
       * @memberOf! logging(v2beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.projectName The resource name of the project in which to create the metric. Example: `"projects/my-project-id"`. The new metric must be provided in the request.
       * @param {logging(v2beta1).LogMetric} params.resource Request body data
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
            url: 'https://logging.googleapis.com/v2beta1/{projectName}/metrics',
            method: 'POST'
          }, options),
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
       * @example
       * // BEFORE RUNNING:
       * // ---------------
       * // 1. If not already done, enable the Google Cloud Logging API
       * //    and check the quota for your project at
       * //    https://console.developers.google.com/apis/api/logging
       * // 2. This sample uses Application Default Credentials for authentication.
       * //    If not already done, install the gcloud CLI from
       * //    https://cloud.google.com/sdk/ and run
       * //    'gcloud beta auth application-default login'
       * // 3. Install the Node.js client library and Application Default Credentials
       * //    library by running 'npm install googleapis --save'
       * var google = require('googleapis');
       * var logging = google.logging('v2beta1');
       *
       * google.auth.getApplicationDefault(function(err, authClient) {
       *   if (err) {
       *     console.log('Authentication failed because of ', err);
       *     return;
       *   }
       *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
       *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
       *     authClient = authClient.createScoped(scopes);
       *   }
       *
       *   var request = {
       *     // TODO: Change placeholders below to appropriate parameter values for the 'update' method:
       *
       *     // * The resource name of the metric to update.
       *     //   Example: `"projects/my-project-id/metrics/my-metric-id"`.
       *     //   The updated metric must be provided in the request and have the
       *     //   same identifier that is specified in `metricName`.
       *     //   If the metric does not exist, it is created.
       *     metricName: "projects/{MY-PROJECT}/metrics/{MY-METRIC}",
       *
       *     resource: {},
       *
       *     // Auth client
       *     auth: authClient
       *   };
       *
       *   logging.projects.metrics.update(request, function(err, result) {
       *     if (err) {
       *       console.log(err);
       *     } else {
       *       console.log(result);
       *     }
       *   });
       * });
       *
       * @alias logging.projects.metrics.update
       * @memberOf! logging(v2beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.metricName The resource name of the metric to update. Example: `"projects/my-project-id/metrics/my-metric-id"`. The updated metric must be provided in the request and have the same identifier that is specified in `metricName`. If the metric does not exist, it is created.
       * @param {logging(v2beta1).LogMetric} params.resource Request body data
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
            url: 'https://logging.googleapis.com/v2beta1/{metricName}',
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
       * logging.projects.metrics.delete
       *
       * @desc Deletes a logs-based metric.
       *
       * @example
       * // BEFORE RUNNING:
       * // ---------------
       * // 1. If not already done, enable the Google Cloud Logging API
       * //    and check the quota for your project at
       * //    https://console.developers.google.com/apis/api/logging
       * // 2. This sample uses Application Default Credentials for authentication.
       * //    If not already done, install the gcloud CLI from
       * //    https://cloud.google.com/sdk/ and run
       * //    'gcloud beta auth application-default login'
       * // 3. Install the Node.js client library and Application Default Credentials
       * //    library by running 'npm install googleapis --save'
       * var google = require('googleapis');
       * var logging = google.logging('v2beta1');
       *
       * google.auth.getApplicationDefault(function(err, authClient) {
       *   if (err) {
       *     console.log('Authentication failed because of ', err);
       *     return;
       *   }
       *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
       *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
       *     authClient = authClient.createScoped(scopes);
       *   }
       *
       *   var request = {
       *     // TODO: Change placeholders below to appropriate parameter values for the 'delete' method:
       *
       *     // * The resource name of the metric to delete.
       *     //   Example: `"projects/my-project-id/metrics/my-metric-id"`.
       *     metricName: "projects/{MY-PROJECT}/metrics/{MY-METRIC}",
       *
       *     // Auth client
       *     auth: authClient
       *   };
       *
       *   logging.projects.metrics.delete(request, function(err, result) {
       *     if (err) {
       *       console.log(err);
       *     } else {
       *       console.log(result);
       *     }
       *   });
       * });
       *
       * @alias logging.projects.metrics.delete
       * @memberOf! logging(v2beta1)
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
            url: 'https://logging.googleapis.com/v2beta1/{metricName}',
            method: 'DELETE'
          }, options),
          params: params,
          requiredParams: ['metricName'],
          pathParams: ['metricName'],
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
     * @desc Writes log entries to Cloud Logging. All log entries in Cloud Logging are written by this method.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Logging API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/logging
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud beta auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var logging = google.logging('v2beta1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'write' method:
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   logging.entries.write(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias logging.entries.write
     * @memberOf! logging(v2beta1)
     *
     * @param {object} params Parameters for request
     * @param {logging(v2beta1).WriteLogEntriesRequest} params.resource Request body data
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
          url: 'https://logging.googleapis.com/v2beta1/entries:write',
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
     * @desc Lists log entries. Use this method to retrieve log entries from Cloud Logging. For ways to export log entries, see [Exporting Logs](/logging/docs/export).
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Logging API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/logging
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud beta auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var logging = google.logging('v2beta1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         logging.entries.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   logging.entries.list(request, recur);
     * });
     *
     * @alias logging.entries.list
     * @memberOf! logging(v2beta1)
     *
     * @param {object} params Parameters for request
     * @param {logging(v2beta1).ListLogEntriesRequest} params.resource Request body data
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
          url: 'https://logging.googleapis.com/v2beta1/entries:list',
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
     * @desc Lists monitored resource descriptors that are used by Cloud Logging.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Logging API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/logging
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud beta auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var logging = google.logging('v2beta1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         logging.monitoredResourceDescriptors.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   logging.monitoredResourceDescriptors.list(request, recur);
     * });
     *
     * @alias logging.monitoredResourceDescriptors.list
     * @memberOf! logging(v2beta1)
     *
     * @param {object=} params Parameters for request
     * @param {integer=} params.pageSize Optional. The maximum number of results to return from this request. You must check for presence of `nextPageToken` to determine if additional results are available, which you can retrieve by passing the `nextPageToken` value as the `pageToken` parameter in the next request.
     * @param {string=} params.pageToken Optional. If the `pageToken` parameter is supplied, then the next page of results is retrieved. The `pageToken` parameter must be set to the value of the `nextPageToken` from the previous response.
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
          url: 'https://logging.googleapis.com/v2beta1/monitoredResourceDescriptors',
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
 * @typedef Empty
 * @memberOf! logging(v2beta1)
 * @type object
 */
/**
 * @typedef WriteLogEntriesRequest
 * @memberOf! logging(v2beta1)
 * @type object
 * @property {string} logName Optional. A default log resource name for those log entries in `entries` that do not specify their own `logName`. Example: `&quot;projects/my-project/logs/syslog&quot;`. See LogEntry.
 * @property {logging(v2beta1).MonitoredResource} resource Optional. A default monitored resource for those log entries in `entries` that do not specify their own `resource`.
 * @property {object} labels Optional. User-defined `key:value` items that are added to the `labels` field of each log entry in `entries`, except when a log entry specifies its own `key:value` item with the same key. Example: `{ &quot;size&quot;: &quot;large&quot;, &quot;color&quot;:&quot;red&quot; }`
 * @property {logging(v2beta1).LogEntry[]} entries Required. The log entries to write. The log entries must have values for all required fields.
 * @property {boolean} partialSuccess Optional. Whether valid entries should be written even if some other entries fail due to INVALID_ARGUMENT or PERMISSION_DENIED errors. If any entry is not written, the response status will be the error associated with one of the failed entries and include error details in the form of WriteLogEntriesPartialErrors.
 */
/**
 * @typedef MonitoredResource
 * @memberOf! logging(v2beta1)
 * @type object
 * @property {string} type Required. The monitored resource type. This field must match the `type` field of a MonitoredResourceDescriptor object. For example, the type of a Cloud SQL database is `&quot;cloudsql_database&quot;`.
 * @property {object} labels Required. Values for all of the labels listed in the associated monitored resource descriptor. For example, Cloud SQL databases use the labels `&quot;database_id&quot;` and `&quot;zone&quot;`.
 */
/**
 * @typedef LogEntry
 * @memberOf! logging(v2beta1)
 * @type object
* @property {string} logName Required. The resource name of the log to which this log entry belongs. The format of the name is `&quot;projects/
/logs/&quot;`. Examples: `&quot;projects/my-projectid/logs/syslog&quot;`, `&quot;projects/1234567890/logs/library.googleapis.com%2Fbook_log&quot;`. The log ID part of resource name must be less than 512 characters long and can only include the following characters: upper and lower case alphanumeric characters: [A-Za-z0-9]; and punctuation characters: forward-slash, underscore, hyphen, and period. Forward-slash (`/`) characters in the log ID must be URL-encoded.
* @property {logging(v2beta1).MonitoredResource} resource Required. The monitored resource associated with this log entry. Example: a log entry that reports a database error would be associated with the monitored resource designating the particular database that reported the error.
* @property {object} protoPayload The log entry payload, represented as a protocol buffer. You can only use `protoPayload` values that belong to a set of approved types.
* @property {string} textPayload The log entry payload, represented as a Unicode string (UTF-8).
* @property {object} jsonPayload The log entry payload, represented as a structure that is expressed as a JSON object.
* @property {string} timestamp Optional. The time the event described by the log entry occurred. If omitted, Cloud Logging will use the time the log entry is written.
* @property {string} severity Optional. The severity of the log entry. The default value is `LogSeverity.DEFAULT`.
* @property {string} insertId Optional. A unique ID for the log entry. If you provide this field, the logging service considers other log entries in the same log with the same ID as duplicates which can be removed. If omitted, Cloud Logging will generate a unique ID for this log entry.
* @property {logging(v2beta1).HttpRequest} httpRequest Optional. Information about the HTTP request associated with this log entry, if applicable.
* @property {object} labels Optional. A set of user-defined (key, value) data that provides additional information about the log entry.
* @property {logging(v2beta1).LogEntryOperation} operation Optional. Information about an operation associated with the log entry, if applicable.
*/
/**
 * @typedef HttpRequest
 * @memberOf! logging(v2beta1)
 * @type object
 * @property {string} requestMethod The request method. Examples: `&quot;GET&quot;`, `&quot;HEAD&quot;`, `&quot;PUT&quot;`, `&quot;POST&quot;`.
 * @property {string} requestUrl The scheme (http, https), the host name, the path and the query portion of the URL that was requested. Example: `&quot;http://example.com/some/info?color=red&quot;`.
 * @property {string} requestSize The size of the HTTP request message in bytes, including the request headers and the request body.
 * @property {integer} status The response code indicating the status of response. Examples: 200, 404.
 * @property {string} responseSize The size of the HTTP response message sent back to the client, in bytes, including the response headers and the response body.
 * @property {string} userAgent The user agent sent by the client. Example: `&quot;Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; Q312461; .NET CLR 1.0.3705)&quot;`.
 * @property {string} remoteIp The IP address (IPv4 or IPv6) of the client that issued the HTTP request. Examples: `&quot;192.168.1.1&quot;`, `&quot;FE80::0202:B3FF:FE1E:8329&quot;`.
 * @property {string} referer The referer URL of the request, as defined in [HTTP/1.1 Header Field Definitions](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html).
 * @property {boolean} cacheLookup Whether or not a cache lookup was attempted.
 * @property {boolean} cacheHit Whether or not an entity was served from cache (with or without validation).
 * @property {boolean} cacheValidatedWithOriginServer Whether or not the response was validated with the origin server before being served from cache. This field is only meaningful if `cache_hit` is True.
 * @property {string} cacheFillBytes The number of HTTP response bytes inserted into cache. Set only when a cache fill was attempted.
 */
/**
 * @typedef LogEntryOperation
 * @memberOf! logging(v2beta1)
 * @type object
 * @property {string} id Required. An arbitrary operation identifier. Log entries with the same identifier are assumed to be part of the same operation.
 * @property {string} producer Required. An arbitrary producer identifier. The combination of `id` and `producer` must be globally unique. Examples for `producer`: `&quot;MyDivision.MyBigCompany.com&quot;`, &quot;github.com/MyProject/MyApplication&quot;`.
 * @property {boolean} first Optional. Set this to True if this is the first log entry in the operation.
 * @property {boolean} last Optional. Set this to True if this is the last log entry in the operation.
 */
/**
 * @typedef WriteLogEntriesResponse
 * @memberOf! logging(v2beta1)
 * @type object
 */
/**
 * @typedef ListLogEntriesRequest
 * @memberOf! logging(v2beta1)
 * @type object
 * @property {string[]} projectIds Required. One or more project IDs or project numbers from which to retrieve log entries. Examples of a project ID: `&quot;my-project-1A&quot;`, `&quot;1234567890&quot;`.
 * @property {string} filter Optional. An [advanced logs filter](/logging/docs/view/advanced_filters). The filter is compared against all log entries in the projects specified by `projectIds`. Only entries that match the filter are retrieved. An empty filter matches all log entries.
 * @property {string} orderBy Optional. How the results should be sorted. Presently, the only permitted values are `&quot;timestamp asc&quot;` (default) and `&quot;timestamp desc&quot;`. The first option returns entries in order of increasing values of `LogEntry.timestamp` (oldest first), and the second option returns entries in order of decreasing timestamps (newest first). Entries with equal timestamps are returned in order of `LogEntry.insertId`.
 * @property {integer} pageSize Optional. The maximum number of results to return from this request. You must check for presence of `nextPageToken` to determine if additional results are available, which you can retrieve by passing the `nextPageToken` value as the `pageToken` parameter in the next request.
 * @property {string} pageToken Optional. If the `pageToken` parameter is supplied, then the next page of results is retrieved. The `pageToken` parameter must be set to the value of the `nextPageToken` from the previous response. The values of `projectIds`, `filter`, and `orderBy` must be the same as in the previous request.
 * @property {boolean} partialSuccess Optional. If true, read access to all projects is not required and results will be returned for the subset of projects for which read access is permitted (empty subset is permitted).
 */
/**
 * @typedef ListLogEntriesResponse
 * @memberOf! logging(v2beta1)
 * @type object
 * @property {logging(v2beta1).LogEntry[]} entries A list of log entries.
 * @property {string} nextPageToken If there are more results than were returned, then `nextPageToken` is included in the response. To get the next set of results, call this method again using the value of `nextPageToken` as `pageToken`.
 * @property {object} projectIdErrors If partial_success is true, contains the project ids that had errors and the associated errors.
 */
/**
 * @typedef Status
 * @memberOf! logging(v2beta1)
 * @type object
 * @property {integer} code The status code, which should be an enum value of google.rpc.Code.
 * @property {string} message A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
 * @property {object[]} details A list of messages that carry the error details. There will be a common set of message types for APIs to use.
 */
/**
 * @typedef ListMonitoredResourceDescriptorsResponse
 * @memberOf! logging(v2beta1)
 * @type object
 * @property {logging(v2beta1).MonitoredResourceDescriptor[]} resourceDescriptors A list of resource descriptors.
 * @property {string} nextPageToken If there are more results than were returned, then `nextPageToken` is included in the response. To get the next set of results, call this method again using the value of `nextPageToken` as `pageToken`.
 */
/**
 * @typedef MonitoredResourceDescriptor
 * @memberOf! logging(v2beta1)
 * @type object
 * @property {string} name Optional. The resource name of the monitored resource descriptor: `&quot;projects/{project_id}/monitoredResourceDescriptors/{type}&quot;` where {type} is the value of the `type` field in this object and {project_id} is a project ID that provides API-specific context for accessing the type. APIs that do not use project information can use the resource name format `&quot;monitoredResourceDescriptors/{type}&quot;`.
 * @property {string} type Required. The monitored resource type. For example, the type `&quot;cloudsql_database&quot;` represents databases in Google Cloud SQL.
 * @property {string} displayName Optional. A concise name for the monitored resource type that might be displayed in user interfaces. For example, `&quot;Google Cloud SQL Database&quot;`.
 * @property {string} description Optional. A detailed description of the monitored resource type that might be used in documentation.
 * @property {logging(v2beta1).LabelDescriptor[]} labels Required. A set of labels used to describe instances of this monitored resource type. For example, an individual Google Cloud SQL database is identified by values for the labels `&quot;database_id&quot;` and `&quot;zone&quot;`.
 */
/**
 * @typedef LabelDescriptor
 * @memberOf! logging(v2beta1)
 * @type object
 * @property {string} key The label key.
 * @property {string} valueType The type of data that can be assigned to the label.
 * @property {string} description A human-readable description for the label.
 */
/**
 * @typedef ListSinksResponse
 * @memberOf! logging(v2beta1)
 * @type object
 * @property {logging(v2beta1).LogSink[]} sinks A list of sinks.
 * @property {string} nextPageToken If there are more results than were returned, then `nextPageToken` is included in the response. To get the next set of results, call this method again using the value of `nextPageToken` as `pageToken`.
 */
/**
 * @typedef LogSink
 * @memberOf! logging(v2beta1)
 * @type object
 * @property {string} name Required. The client-assigned sink identifier. Example: `&quot;my-severe-errors-to-pubsub&quot;`. Sink identifiers are limited to 1000 characters and can include only the following characters: `A-Z`, `a-z`, `0-9`, and the special characters `_-.`.
 * @property {string} destination The export destination. See [Exporting Logs With Sinks](/logging/docs/api/tasks/exporting-logs). Examples: `&quot;storage.googleapis.com/a-bucket&quot;`, `&quot;bigquery.googleapis.com/projects/a-project-id/datasets/a-dataset&quot;`.
 * @property {string} filter An [advanced logs filter](/logging/docs/view/advanced_filters). Only log entries matching that filter are exported. The filter must be consistent with the log entry format specified by the `outputVersionFormat` parameter, regardless of the format of the log entry that was originally written to Cloud Logging. Example (V2 format): `&quot;logName=projects/my-projectid/logs/syslog AND severity&gt;=ERROR&quot;`.
 * @property {string} outputVersionFormat The log entry version to use for this sink&#39;s exported log entries. This version does not have to correspond to the version of the log entry when it was written to Cloud Logging.
 */
/**
 * @typedef ListLogMetricsResponse
 * @memberOf! logging(v2beta1)
 * @type object
 * @property {logging(v2beta1).LogMetric[]} metrics A list of logs-based metrics.
 * @property {string} nextPageToken If there are more results than were returned, then `nextPageToken` is included in the response. To get the next set of results, call this method again using the value of `nextPageToken` as `pageToken`.
 */
/**
 * @typedef LogMetric
 * @memberOf! logging(v2beta1)
 * @type object
 * @property {string} name Required. The client-assigned metric identifier. Example: `&quot;severe_errors&quot;`. Metric identifiers are limited to 1000 characters and can include only the following characters: `A-Z`, `a-z`, `0-9`, and the special characters `_-.,+!*&#39;,()%/\`. The forward-slash character (`/`) denotes a hierarchy of name pieces, and it cannot be the first character of the name.
 * @property {string} description A description of this metric, which is used in documentation.
 * @property {string} filter An [advanced logs filter](/logging/docs/view/advanced_filters). Example: `&quot;logName:syslog AND severity&gt;=ERROR&quot;`.
 */
/**
 * @typedef RequestLog
 * @memberOf! logging(v2beta1)
 * @type object
 * @property {string} appId Application that handled this request.
 * @property {string} moduleId Module of the application that handled this request.
 * @property {string} versionId Version of the application that handled this request.
 * @property {string} requestId Globally unique identifier for a request, which is based on the request start time. Request IDs for requests which started later will compare greater as strings than those for requests which started earlier.
 * @property {string} ip Origin IP address.
 * @property {string} startTime Time when the request started.
 * @property {string} endTime Time when the request finished.
 * @property {string} latency Latency of the request.
 * @property {string} megaCycles Number of CPU megacycles used to process request.
 * @property {string} method Request method. Example: `&quot;GET&quot;`, `&quot;HEAD&quot;`, `&quot;PUT&quot;`, `&quot;POST&quot;`, `&quot;DELETE&quot;`.
 * @property {string} resource Contains the path and query portion of the URL that was requested. For example, if the URL was &quot;http://example.com/app?name=val&quot;, the resource would be &quot;/app?name=val&quot;. The fragment identifier, which is identified by the `#` character, is not included.
 * @property {string} httpVersion HTTP version of request. Example: `&quot;HTTP/1.1&quot;`.
 * @property {integer} status HTTP response status code. Example: 200, 404.
 * @property {string} responseSize Size in bytes sent back to client by request.
 * @property {string} referrer Referrer URL of request.
 * @property {string} userAgent User agent that made the request.
 * @property {string} nickname The logged-in user who made the request. Most likely, this is the part of the user&#39;s email before the `@` sign. The field value is the same for different requests from the same user, but different users can have similar names. This information is also available to the application via the App Engine Users API. This field will be populated starting with App Engine 1.9.21.
 * @property {string} urlMapEntry File or class that handled the request.
 * @property {string} host Internet host and port number of the resource being requested.
 * @property {number} cost An indication of the relative cost of serving this request.
 * @property {string} taskQueueName Queue name of the request, in the case of an offline request.
 * @property {string} taskName Task name of the request, in the case of an offline request.
 * @property {boolean} wasLoadingRequest Whether this was a loading request for the instance.
 * @property {string} pendingTime Time this request spent in the pending request queue.
 * @property {integer} instanceIndex If the instance processing this request belongs to a manually scaled module, then this is the 0-based index of the instance. Otherwise, this value is -1.
 * @property {boolean} finished Whether this request is finished or active.
 * @property {boolean} first Whether this is the first RequestLog entry for this request. If an active request has several RequestLog entries written to Cloud Logging, this field will be set for one of them.
 * @property {string} instanceId An identifier for the instance that handled the request.
 * @property {logging(v2beta1).LogLine[]} line A list of log lines emitted by the application while serving this request.
 * @property {string} appEngineRelease App Engine release version.
 * @property {string} traceId Cloud Trace identifier for this request.
 * @property {logging(v2beta1).SourceReference[]} sourceReference Source code for the application that handled this request. There can be more than one source reference per deployed application if source code is distributed among multiple repositories.
 */
/**
 * @typedef LogLine
 * @memberOf! logging(v2beta1)
 * @type object
 * @property {string} time Approximate time when this log entry was made.
 * @property {string} severity Severity of this log entry.
 * @property {string} logMessage App-provided log message.
 * @property {logging(v2beta1).SourceLocation} sourceLocation Where in the source code this log message was written.
 */
/**
 * @typedef SourceLocation
 * @memberOf! logging(v2beta1)
 * @type object
 * @property {string} file Source file name. Depending on the runtime environment, this might be a simple name or a fully-qualified name.
 * @property {string} line Line within the source file.
 * @property {string} functionName Human-readable name of the function or method being invoked, with optional context such as the class or package name. This information is used in contexts such as the logs viewer, where a file and line number are less meaningful. The format can vary by language. For example: `qual.if.ied.Class.method` (Java), `dir/package.func` (Go), `function` (Python).
 */
/**
 * @typedef SourceReference
 * @memberOf! logging(v2beta1)
 * @type object
 * @property {string} repository Optional. A URI string identifying the repository. Example: &quot;https://github.com/GoogleCloudPlatform/kubernetes.git&quot;
 * @property {string} revisionId The canonical and persistent identifier of the deployed revision. Example (git): &quot;0035781c50ec7aa23385dc841529ce8a4b70db1b&quot;
 */
module.exports = Logging;
