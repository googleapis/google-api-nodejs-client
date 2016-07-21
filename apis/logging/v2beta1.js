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
       * // PRE-REQUISITES:
       * // ---------------
       * // 1. If not already done, enable the Google Cloud Logging API
       * //    and check the quota for your project at
       * //    https://console.developers.google.com/apis/api/logging
       * // 2. This sample uses Application Default Credentials for Auth.
       * //    If not already done, install the gcloud CLI from
       * //    https://cloud.google.com/sdk/ and run 'gcloud auth application-default login'
       * // 3. To install the client library and Application Default Credentials library, run:
       * //    'npm install googleapis --save'
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
       *     // Required. The resource name of the log to delete.  Example:
       *     // `"projects/my-project/logs/syslog"`.
       *     logName: "projects/{MY-PROJECT}/logs/{MY-LOG}",
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
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      delete: function (params, callback) {
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
       * @example
       * // PRE-REQUISITES:
       * // ---------------
       * // 1. If not already done, enable the Google Cloud Logging API
       * //    and check the quota for your project at
       * //    https://console.developers.google.com/apis/api/logging
       * // 2. This sample uses Application Default Credentials for Auth.
       * //    If not already done, install the gcloud CLI from
       * //    https://cloud.google.com/sdk/ and run 'gcloud auth application-default login'
       * // 3. To install the client library and Application Default Credentials library, run:
       * //    'npm install googleapis --save'
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
       *     // Required. The resource name containing the sinks.
       *     // Example: `"projects/my-logging-project"`.
       *     parent: "projects/{MY-PROJECT}",
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
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, callback) {
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
       * @example
       * // PRE-REQUISITES:
       * // ---------------
       * // 1. If not already done, enable the Google Cloud Logging API
       * //    and check the quota for your project at
       * //    https://console.developers.google.com/apis/api/logging
       * // 2. This sample uses Application Default Credentials for Auth.
       * //    If not already done, install the gcloud CLI from
       * //    https://cloud.google.com/sdk/ and run 'gcloud auth application-default login'
       * // 3. To install the client library and Application Default Credentials library, run:
       * //    'npm install googleapis --save'
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
       *     // The resource name of the sink to return.
       *     // Example: `"projects/my-project-id/sinks/my-sink-id"`.
       *     sinkName: "projects/{MY-PROJECT}/sinks/{MY-SINK}",
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
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      get: function (params, callback) {
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
       * @example
       * // PRE-REQUISITES:
       * // ---------------
       * // 1. If not already done, enable the Google Cloud Logging API
       * //    and check the quota for your project at
       * //    https://console.developers.google.com/apis/api/logging
       * // 2. This sample uses Application Default Credentials for Auth.
       * //    If not already done, install the gcloud CLI from
       * //    https://cloud.google.com/sdk/ and run 'gcloud auth application-default login'
       * // 3. To install the client library and Application Default Credentials library, run:
       * //    'npm install googleapis --save'
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
       *     // The resource in which to create the sink.
       *     // Example: `"projects/my-project-id"`.
       *     // The new sink must be provided in the request.
       *     parent: "projects/{MY-PROJECT}",
       *     resource: {},
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
       * @param {object} params.resource Request body data
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      create: function (params, callback) {
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
       * @example
       * // PRE-REQUISITES:
       * // ---------------
       * // 1. If not already done, enable the Google Cloud Logging API
       * //    and check the quota for your project at
       * //    https://console.developers.google.com/apis/api/logging
       * // 2. This sample uses Application Default Credentials for Auth.
       * //    If not already done, install the gcloud CLI from
       * //    https://cloud.google.com/sdk/ and run 'gcloud auth application-default login'
       * // 3. To install the client library and Application Default Credentials library, run:
       * //    'npm install googleapis --save'
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
       *     // The resource name of the sink to update.
       *     // Example: `"projects/my-project-id/sinks/my-sink-id"`.
       *     // The updated sink must be provided in the request and have the
       *     // same name that is specified in `sinkName`.  If the sink does not
       *     // exist, it is created.
       *     sinkName: "projects/{MY-PROJECT}/sinks/{MY-SINK}",
       *     resource: {},
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
       * @param {object} params.resource Request body data
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      update: function (params, callback) {
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
       * @example
       * // PRE-REQUISITES:
       * // ---------------
       * // 1. If not already done, enable the Google Cloud Logging API
       * //    and check the quota for your project at
       * //    https://console.developers.google.com/apis/api/logging
       * // 2. This sample uses Application Default Credentials for Auth.
       * //    If not already done, install the gcloud CLI from
       * //    https://cloud.google.com/sdk/ and run 'gcloud auth application-default login'
       * // 3. To install the client library and Application Default Credentials library, run:
       * //    'npm install googleapis --save'
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
       *     // The resource name of the sink to delete.
       *     // Example: `"projects/my-project-id/sinks/my-sink-id"`.
       *     sinkName: "projects/{MY-PROJECT}/sinks/{MY-SINK}",
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
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      delete: function (params, callback) {
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
       * @example
       * // PRE-REQUISITES:
       * // ---------------
       * // 1. If not already done, enable the Google Cloud Logging API
       * //    and check the quota for your project at
       * //    https://console.developers.google.com/apis/api/logging
       * // 2. This sample uses Application Default Credentials for Auth.
       * //    If not already done, install the gcloud CLI from
       * //    https://cloud.google.com/sdk/ and run 'gcloud auth application-default login'
       * // 3. To install the client library and Application Default Credentials library, run:
       * //    'npm install googleapis --save'
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
       *     // Required. The resource name containing the metrics.
       *     // Example: `"projects/my-project-id"`.
       *     parent: "projects/{MY-PROJECT}",
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
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, callback) {
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
       * @example
       * // PRE-REQUISITES:
       * // ---------------
       * // 1. If not already done, enable the Google Cloud Logging API
       * //    and check the quota for your project at
       * //    https://console.developers.google.com/apis/api/logging
       * // 2. This sample uses Application Default Credentials for Auth.
       * //    If not already done, install the gcloud CLI from
       * //    https://cloud.google.com/sdk/ and run 'gcloud auth application-default login'
       * // 3. To install the client library and Application Default Credentials library, run:
       * //    'npm install googleapis --save'
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
       *     // The resource name of the desired metric.
       *     // Example: `"projects/my-project-id/metrics/my-metric-id"`.
       *     metricName: "projects/{MY-PROJECT}/metrics/{MY-METRIC}",
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
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      get: function (params, callback) {
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
       * @example
       * // PRE-REQUISITES:
       * // ---------------
       * // 1. If not already done, enable the Google Cloud Logging API
       * //    and check the quota for your project at
       * //    https://console.developers.google.com/apis/api/logging
       * // 2. This sample uses Application Default Credentials for Auth.
       * //    If not already done, install the gcloud CLI from
       * //    https://cloud.google.com/sdk/ and run 'gcloud auth application-default login'
       * // 3. To install the client library and Application Default Credentials library, run:
       * //    'npm install googleapis --save'
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
       *     // The resource name of the project in which to create the metric.
       *     // Example: `"projects/my-project-id"`.
       *     // The new metric must be provided in the request.
       *     parent: "projects/{MY-PROJECT}",
       *     resource: {},
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
       * @param {object} params.resource Request body data
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      create: function (params, callback) {
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
       * @example
       * // PRE-REQUISITES:
       * // ---------------
       * // 1. If not already done, enable the Google Cloud Logging API
       * //    and check the quota for your project at
       * //    https://console.developers.google.com/apis/api/logging
       * // 2. This sample uses Application Default Credentials for Auth.
       * //    If not already done, install the gcloud CLI from
       * //    https://cloud.google.com/sdk/ and run 'gcloud auth application-default login'
       * // 3. To install the client library and Application Default Credentials library, run:
       * //    'npm install googleapis --save'
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
       *     // The resource name of the metric to update.
       *     // Example: `"projects/my-project-id/metrics/my-metric-id"`.
       *     // The updated metric must be provided in the request and have the
       *     // same identifier that is specified in `metricName`.
       *     // If the metric does not exist, it is created.
       *     metricName: "projects/{MY-PROJECT}/metrics/{MY-METRIC}",
       *     resource: {},
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
       * @param {object} params.resource Request body data
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      update: function (params, callback) {
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
       * @example
       * // PRE-REQUISITES:
       * // ---------------
       * // 1. If not already done, enable the Google Cloud Logging API
       * //    and check the quota for your project at
       * //    https://console.developers.google.com/apis/api/logging
       * // 2. This sample uses Application Default Credentials for Auth.
       * //    If not already done, install the gcloud CLI from
       * //    https://cloud.google.com/sdk/ and run 'gcloud auth application-default login'
       * // 3. To install the client library and Application Default Credentials library, run:
       * //    'npm install googleapis --save'
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
       *     // The resource name of the metric to delete.
       *     // Example: `"projects/my-project-id/metrics/my-metric-id"`.
       *     metricName: "projects/{MY-PROJECT}/metrics/{MY-METRIC}",
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
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      delete: function (params, callback) {
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

  self.entries = {

    /**
     * logging.entries.write
     *
     * @desc Writes log entries to Cloud Logging. All log entries in Cloud Logging are written by this method.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Logging API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/logging
     * // 2. This sample uses Application Default Credentials for Auth.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
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
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    write: function (params, callback) {
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
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Logging API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/logging
     * // 2. This sample uses Application Default Credentials for Auth.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
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
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
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

  self.monitoredResourceDescriptors = {

    /**
     * logging.monitoredResourceDescriptors.list
     *
     * @desc Lists monitored resource descriptors that are used by Cloud Logging.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Logging API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/logging
     * // 2. This sample uses Application Default Credentials for Auth.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
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
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
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

module.exports = Logging;
