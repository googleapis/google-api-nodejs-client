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
 * Google Cloud Logging API
 *
 * @classdesc Google Cloud Logging API lets you create logs, ingest log entries, and manage log sinks.
 * @namespace logging
 * @version  v1beta3
 * @variation v1beta3
 * @this Logging
 * @param {object=} options Options for Logging
 */
function Logging(options) {

  var self = this;
  this._options = options || {};

  this.projects = {

    logs: {

      /**
       * logging.projects.logs.list
       *
       * @desc Lists the logs in the project. Only logs that have entries are listed.
       *
       * @alias logging.projects.logs.list
       * @memberOf! logging(v1beta3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.projectsId - Part of `projectName`. The resource name of the project whose logs are requested. If both `serviceName` and `serviceIndexPrefix` are empty, then all logs with entries in this project are listed.
       * @param  {string=} params.serviceName - If not empty, this field must be a log service name such as `"compute.googleapis.com"`. Only logs associated with that that log service are listed.
       * @param  {string=} params.serviceIndexPrefix - The purpose of this field is to restrict the listed logs to those with entries of a certain kind. If `serviceName` is the name of a log service, then this field may contain values for the log service's indexes. Only logs that have entries whose indexes include the values are listed. The format for this field is `"/val1/val2.../valN"`, where `val1` is a value for the first index, `val2` for the second index, etc. An empty value (a single slash) for an index matches all values, and you can omit values for later indexes entirely.
       * @param  {integer=} params.pageSize - The maximum number of results to return.
       * @param  {string=} params.pageToken - An opaque token, returned as `nextPageToken` by a prior `ListLogs` operation. If `pageToken` is supplied, then the other fields of this request are ignored, and instead the previous `ListLogs` operation is continued.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://logging.googleapis.com/v1beta3/projects/{projectsId}/logs',
            method: 'GET'
          },
          params: params,
          requiredParams: ['projectsId'],
          pathParams: ['projectsId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * logging.projects.logs.delete
       *
       * @desc Deletes a log and all its log entries. The log will reappear if it receives new entries.
       *
       * @alias logging.projects.logs.delete
       * @memberOf! logging(v1beta3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.projectsId - Part of `logName`. The resource name of the log to be deleted.
       * @param  {string} params.logsId - Part of `logName`. See documentation of `projectsId`.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      delete: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://logging.googleapis.com/v1beta3/projects/{projectsId}/logs/{logsId}',
            method: 'DELETE'
          },
          params: params,
          requiredParams: ['projectsId', 'logsId'],
          pathParams: ['projectsId', 'logsId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      entries: {

        /**
         * logging.projects.logs.entries.write
         *
         * @desc Writes log entries to Cloud Logging. Each entry consists of a `LogEntry` object. You must fill in all the fields of the object, including one of the payload fields. You may supply a map, `commonLabels`, that holds default (key, value) data for the `entries[].metadata.labels` map in each entry, saving you the trouble of creating identical copies for each entry.
         *
         * @alias logging.projects.logs.entries.write
         * @memberOf! logging(v1beta3)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.projectsId - Part of `logName`. The resource name of the log that will receive the log entries.
         * @param  {string} params.logsId - Part of `logName`. See documentation of `projectsId`.
         * @param  {object} params.resource - Request body data
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        write: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://logging.googleapis.com/v1beta3/projects/{projectsId}/logs/{logsId}/entries:write',
              method: 'POST'
            },
            params: params,
            requiredParams: ['projectsId', 'logsId'],
            pathParams: ['projectsId', 'logsId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      },

      sinks: {

        /**
         * logging.projects.logs.sinks.list
         *
         * @desc Lists log sinks associated with a log.
         *
         * @alias logging.projects.logs.sinks.list
         * @memberOf! logging(v1beta3)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.projectsId - Part of `logName`. The log whose sinks are wanted. For example, `"compute.google.com/syslog"`.
         * @param  {string} params.logsId - Part of `logName`. See documentation of `projectsId`.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        list: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://logging.googleapis.com/v1beta3/projects/{projectsId}/logs/{logsId}/sinks',
              method: 'GET'
            },
            params: params,
            requiredParams: ['projectsId', 'logsId'],
            pathParams: ['projectsId', 'logsId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * logging.projects.logs.sinks.get
         *
         * @desc Gets a log sink.
         *
         * @alias logging.projects.logs.sinks.get
         * @memberOf! logging(v1beta3)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.projectsId - Part of `sinkName`. The resource name of the log sink to return.
         * @param  {string} params.logsId - Part of `sinkName`. See documentation of `projectsId`.
         * @param  {string} params.sinksId - Part of `sinkName`. See documentation of `projectsId`.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        get: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://logging.googleapis.com/v1beta3/projects/{projectsId}/logs/{logsId}/sinks/{sinksId}',
              method: 'GET'
            },
            params: params,
            requiredParams: ['projectsId', 'logsId', 'sinksId'],
            pathParams: ['projectsId', 'logsId', 'sinksId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * logging.projects.logs.sinks.create
         *
         * @desc Creates a log sink. All log entries for a specified log are written to the destination.
         *
         * @alias logging.projects.logs.sinks.create
         * @memberOf! logging(v1beta3)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.projectsId - Part of `logName`. The resource name of the log to which to the sink is bound.
         * @param  {string} params.logsId - Part of `logName`. See documentation of `projectsId`.
         * @param  {object} params.resource - Request body data
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        create: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://logging.googleapis.com/v1beta3/projects/{projectsId}/logs/{logsId}/sinks',
              method: 'POST'
            },
            params: params,
            requiredParams: ['projectsId', 'logsId'],
            pathParams: ['projectsId', 'logsId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * logging.projects.logs.sinks.update
         *
         * @desc Updates a log sink. If the sink does not exist, it is created.
         *
         * @alias logging.projects.logs.sinks.update
         * @memberOf! logging(v1beta3)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.projectsId - Part of `sinkName`. The resource name of the sink to update.
         * @param  {string} params.logsId - Part of `sinkName`. See documentation of `projectsId`.
         * @param  {string} params.sinksId - Part of `sinkName`. See documentation of `projectsId`.
         * @param  {object} params.resource - Request body data
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        update: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://logging.googleapis.com/v1beta3/projects/{projectsId}/logs/{logsId}/sinks/{sinksId}',
              method: 'PUT'
            },
            params: params,
            requiredParams: ['projectsId', 'logsId', 'sinksId'],
            pathParams: ['projectsId', 'logsId', 'sinksId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * logging.projects.logs.sinks.delete
         *
         * @desc Deletes a log sink. After deletion, no new log entries are written to the destination.
         *
         * @alias logging.projects.logs.sinks.delete
         * @memberOf! logging(v1beta3)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.projectsId - Part of `sinkName`. The resource name of the log sink to delete.
         * @param  {string} params.logsId - Part of `sinkName`. See documentation of `projectsId`.
         * @param  {string} params.sinksId - Part of `sinkName`. See documentation of `projectsId`.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        delete: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://logging.googleapis.com/v1beta3/projects/{projectsId}/logs/{logsId}/sinks/{sinksId}',
              method: 'DELETE'
            },
            params: params,
            requiredParams: ['projectsId', 'logsId', 'sinksId'],
            pathParams: ['projectsId', 'logsId', 'sinksId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      }
    },

    logServices: {

      /**
       * logging.projects.logServices.list
       *
       * @desc Lists the log services that have log entries in this project.
       *
       * @alias logging.projects.logServices.list
       * @memberOf! logging(v1beta3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.projectsId - Part of `projectName`. The resource name of the project whose services are to be listed.
       * @param  {integer=} params.pageSize - The maximum number of `LogService` objects to return in one operation.
       * @param  {string=} params.pageToken - An opaque token, returned as `nextPageToken` by a prior `ListLogServices` operation. If `pageToken` is supplied, then the other fields of this request are ignored, and instead the previous `ListLogServices` operation is continued.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://logging.googleapis.com/v1beta3/projects/{projectsId}/logServices',
            method: 'GET'
          },
          params: params,
          requiredParams: ['projectsId'],
          pathParams: ['projectsId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      indexes: {

        /**
         * logging.projects.logServices.indexes.list
         *
         * @desc Lists the current index values for a log service.
         *
         * @alias logging.projects.logServices.indexes.list
         * @memberOf! logging(v1beta3)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.projectsId - Part of `serviceName`. The resource name of a log service whose service indexes are requested. Example: `"projects/my-project-id/logServices/appengine.googleapis.com"`.
         * @param  {string} params.logServicesId - Part of `serviceName`. See documentation of `projectsId`.
         * @param  {string=} params.indexPrefix - Restricts the index values returned to be those with a specified prefix for each index key. This field has the form `"/prefix1/prefix2/..."`, in order corresponding to the `LogService indexKeys`. Non-empty prefixes must begin with `/`. For example, App Engine's two keys are the module ID and the version ID. Following is the effect of using various values for `indexPrefix`: + `"/Mod/"` retrieves `/Mod/10` and `/Mod/11` but not `/ModA/10`. + `"/Mod` retrieves `/Mod/10`, `/Mod/11` and `/ModA/10` but not `/XXX/33`. + `"/Mod/1"` retrieves `/Mod/10` and `/Mod/11` but not `/ModA/10`. + `"/Mod/10/"` retrieves `/Mod/10` only. + An empty prefix or `"/"` retrieves all values.
         * @param  {integer=} params.depth - A non-negative integer that limits the number of levels of the index hierarchy that are returned. If `depth` is 1 (default), only the first index key value is returned. If `depth` is 2, both primary and secondary key values are returned. If `depth` is 0, the depth is the number of slash-separators in the `indexPrefix` field, not counting a slash appearing as the last character of the prefix. If the `indexPrefix` field is empty, the default depth is 1. It is an error for `depth` to be any positive value less than the number of components in `indexPrefix`.
         * @param  {integer=} params.pageSize - The maximum number of log service index resources to return in one operation.
         * @param  {string=} params.pageToken - An opaque token, returned as `nextPageToken` by a prior `ListLogServiceIndexes` operation. If `pageToken` is supplied, then the other fields of this request are ignored, and instead the previous `ListLogServiceIndexes` operation is continued.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        list: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://logging.googleapis.com/v1beta3/projects/{projectsId}/logServices/{logServicesId}/indexes',
              method: 'GET'
            },
            params: params,
            requiredParams: ['projectsId', 'logServicesId'],
            pathParams: ['projectsId', 'logServicesId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      },

      sinks: {

        /**
         * logging.projects.logServices.sinks.list
         *
         * @desc Lists log service sinks associated with a log service.
         *
         * @alias logging.projects.logServices.sinks.list
         * @memberOf! logging(v1beta3)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.projectsId - Part of `serviceName`. The log service whose sinks are wanted.
         * @param  {string} params.logServicesId - Part of `serviceName`. See documentation of `projectsId`.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        list: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://logging.googleapis.com/v1beta3/projects/{projectsId}/logServices/{logServicesId}/sinks',
              method: 'GET'
            },
            params: params,
            requiredParams: ['projectsId', 'logServicesId'],
            pathParams: ['projectsId', 'logServicesId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * logging.projects.logServices.sinks.get
         *
         * @desc Gets a log service sink.
         *
         * @alias logging.projects.logServices.sinks.get
         * @memberOf! logging(v1beta3)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.projectsId - Part of `sinkName`. The resource name of the log service sink to return.
         * @param  {string} params.logServicesId - Part of `sinkName`. See documentation of `projectsId`.
         * @param  {string} params.sinksId - Part of `sinkName`. See documentation of `projectsId`.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        get: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://logging.googleapis.com/v1beta3/projects/{projectsId}/logServices/{logServicesId}/sinks/{sinksId}',
              method: 'GET'
            },
            params: params,
            requiredParams: ['projectsId', 'logServicesId', 'sinksId'],
            pathParams: ['projectsId', 'logServicesId', 'sinksId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * logging.projects.logServices.sinks.create
         *
         * @desc Creates a log service sink. All log entries from a specified log service are written to the destination.
         *
         * @alias logging.projects.logServices.sinks.create
         * @memberOf! logging(v1beta3)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.projectsId - Part of `serviceName`. The resource name of the log service to which the sink is bound.
         * @param  {string} params.logServicesId - Part of `serviceName`. See documentation of `projectsId`.
         * @param  {object} params.resource - Request body data
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        create: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://logging.googleapis.com/v1beta3/projects/{projectsId}/logServices/{logServicesId}/sinks',
              method: 'POST'
            },
            params: params,
            requiredParams: ['projectsId', 'logServicesId'],
            pathParams: ['projectsId', 'logServicesId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * logging.projects.logServices.sinks.update
         *
         * @desc Updates a log service sink. If the sink does not exist, it is created.
         *
         * @alias logging.projects.logServices.sinks.update
         * @memberOf! logging(v1beta3)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.projectsId - Part of `sinkName`. The resource name of the log service sink to update.
         * @param  {string} params.logServicesId - Part of `sinkName`. See documentation of `projectsId`.
         * @param  {string} params.sinksId - Part of `sinkName`. See documentation of `projectsId`.
         * @param  {object} params.resource - Request body data
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        update: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://logging.googleapis.com/v1beta3/projects/{projectsId}/logServices/{logServicesId}/sinks/{sinksId}',
              method: 'PUT'
            },
            params: params,
            requiredParams: ['projectsId', 'logServicesId', 'sinksId'],
            pathParams: ['projectsId', 'logServicesId', 'sinksId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * logging.projects.logServices.sinks.delete
         *
         * @desc Deletes a log service sink. After deletion, no new log entries are written to the destination.
         *
         * @alias logging.projects.logServices.sinks.delete
         * @memberOf! logging(v1beta3)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.projectsId - Part of `sinkName`. The resource name of the log service sink to delete.
         * @param  {string} params.logServicesId - Part of `sinkName`. See documentation of `projectsId`.
         * @param  {string} params.sinksId - Part of `sinkName`. See documentation of `projectsId`.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        delete: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://logging.googleapis.com/v1beta3/projects/{projectsId}/logServices/{logServicesId}/sinks/{sinksId}',
              method: 'DELETE'
            },
            params: params,
            requiredParams: ['projectsId', 'logServicesId', 'sinksId'],
            pathParams: ['projectsId', 'logServicesId', 'sinksId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      }
    },

    sinks: {

      /**
       * logging.projects.sinks.list
       *
       * @desc Lists project sinks associated with a project.
       *
       * @alias logging.projects.sinks.list
       * @memberOf! logging(v1beta3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.projectsId - Part of `projectName`. The project whose sinks are wanted.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://logging.googleapis.com/v1beta3/projects/{projectsId}/sinks',
            method: 'GET'
          },
          params: params,
          requiredParams: ['projectsId'],
          pathParams: ['projectsId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * logging.projects.sinks.get
       *
       * @desc Gets a project sink.
       *
       * @alias logging.projects.sinks.get
       * @memberOf! logging(v1beta3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.projectsId - Part of `sinkName`. The resource name of the project sink to return.
       * @param  {string} params.sinksId - Part of `sinkName`. See documentation of `projectsId`.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://logging.googleapis.com/v1beta3/projects/{projectsId}/sinks/{sinksId}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['projectsId', 'sinksId'],
          pathParams: ['projectsId', 'sinksId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * logging.projects.sinks.create
       *
       * @desc Creates a project sink. A logs filter determines which log entries are written to the destination.
       *
       * @alias logging.projects.sinks.create
       * @memberOf! logging(v1beta3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.projectsId - Part of `projectName`. The resource name of the project to which the sink is bound.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      create: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://logging.googleapis.com/v1beta3/projects/{projectsId}/sinks',
            method: 'POST'
          },
          params: params,
          requiredParams: ['projectsId'],
          pathParams: ['projectsId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * logging.projects.sinks.update
       *
       * @desc Updates a project sink. If the sink does not exist, it is created. The destination, filter, or both may be updated.
       *
       * @alias logging.projects.sinks.update
       * @memberOf! logging(v1beta3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.projectsId - Part of `sinkName`. The resource name of the project sink to update.
       * @param  {string} params.sinksId - Part of `sinkName`. See documentation of `projectsId`.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      update: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://logging.googleapis.com/v1beta3/projects/{projectsId}/sinks/{sinksId}',
            method: 'PUT'
          },
          params: params,
          requiredParams: ['projectsId', 'sinksId'],
          pathParams: ['projectsId', 'sinksId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * logging.projects.sinks.delete
       *
       * @desc Deletes a project sink. After deletion, no new log entries are written to the destination.
       *
       * @alias logging.projects.sinks.delete
       * @memberOf! logging(v1beta3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.projectsId - Part of `sinkName`. The resource name of the project sink to delete.
       * @param  {string} params.sinksId - Part of `sinkName`. See documentation of `projectsId`.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      delete: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://logging.googleapis.com/v1beta3/projects/{projectsId}/sinks/{sinksId}',
            method: 'DELETE'
          },
          params: params,
          requiredParams: ['projectsId', 'sinksId'],
          pathParams: ['projectsId', 'sinksId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    metrics: {

      /**
       * logging.projects.metrics.list
       *
       * @desc List log metrics associated with the specified project.
       *
       * @alias logging.projects.metrics.list
       * @memberOf! logging(v1beta3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.projectsId - Part of `projectName`. The resource name for the project whose metrics are wanted.
       * @param  {string=} params.pageToken - An opaque token, returned as `nextPageToken` by a prior `ListLogMetrics` operation. If `pageToken` is supplied, then the other fields of this request are ignored, and instead the previous `ListLogMetrics` operation is continued.
       * @param  {integer=} params.pageSize - The maximum number of `LogMetric` objects to return in one operation.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://logging.googleapis.com/v1beta3/projects/{projectsId}/metrics',
            method: 'GET'
          },
          params: params,
          requiredParams: ['projectsId'],
          pathParams: ['projectsId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * logging.projects.metrics.get
       *
       * @desc Get the specified log metric resource.
       *
       * @alias logging.projects.metrics.get
       * @memberOf! logging(v1beta3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.projectsId - Part of `metricName`. The resource name of the desired metric.
       * @param  {string} params.metricsId - Part of `metricName`. See documentation of `projectsId`.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://logging.googleapis.com/v1beta3/projects/{projectsId}/metrics/{metricsId}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['projectsId', 'metricsId'],
          pathParams: ['projectsId', 'metricsId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * logging.projects.metrics.create
       *
       * @desc Create the specified log metric resource.
       *
       * @alias logging.projects.metrics.create
       * @memberOf! logging(v1beta3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.projectsId - Part of `projectName`. The resource name of the project in which to create the metric.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      create: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://logging.googleapis.com/v1beta3/projects/{projectsId}/metrics',
            method: 'POST'
          },
          params: params,
          requiredParams: ['projectsId'],
          pathParams: ['projectsId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * logging.projects.metrics.update
       *
       * @desc Create or update the specified log metric resource.
       *
       * @alias logging.projects.metrics.update
       * @memberOf! logging(v1beta3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.projectsId - Part of `metricName`. The resource name of the metric to update.
       * @param  {string} params.metricsId - Part of `metricName`. See documentation of `projectsId`.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      update: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://logging.googleapis.com/v1beta3/projects/{projectsId}/metrics/{metricsId}',
            method: 'PUT'
          },
          params: params,
          requiredParams: ['projectsId', 'metricsId'],
          pathParams: ['projectsId', 'metricsId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * logging.projects.metrics.delete
       *
       * @desc Deletes the specified log metric.
       *
       * @alias logging.projects.metrics.delete
       * @memberOf! logging(v1beta3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.projectsId - Part of `metricName`. The resource name of the metric to delete.
       * @param  {string} params.metricsId - Part of `metricName`. See documentation of `projectsId`.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      delete: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://logging.googleapis.com/v1beta3/projects/{projectsId}/metrics/{metricsId}',
            method: 'DELETE'
          },
          params: params,
          requiredParams: ['projectsId', 'metricsId'],
          pathParams: ['projectsId', 'metricsId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };
}

/**
 * Exports Logging object
 * @type Logging
 */
module.exports = Logging;