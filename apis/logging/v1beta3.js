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
       * @desc Lists log resources belonging to the specified project.
       *
       * @alias logging.projects.logs.list
       * @memberOf! logging(v1beta3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.projectsId - Part of `projectName`. The project name for which to list the log resources.
       * @param  {string=} params.serviceName - A service name for which to list logs. Only logs containing entries whose metadata includes this service name are returned. If `serviceName` and `serviceIndexPrefix` are both empty, then all log names are returned. To list all log names, regardless of service, leave both the `serviceName` and `serviceIndexPrefix` empty. To list log names containing entries with a particular service name (or explicitly empty service name) set `serviceName` to the desired value and `serviceIndexPrefix` to `"/"`.
       * @param  {string=} params.serviceIndexPrefix - A log service index prefix for which to list logs. Only logs containing entries whose metadata that includes these label values (associated with index keys) are returned. The prefix is a slash separated list of values, and need not specify all index labels. An empty index (or a single slash) matches all log service indexes.
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
       * @desc Deletes the specified log resource and all log entries contained in it.
       *
       * @alias logging.projects.logs.delete
       * @memberOf! logging(v1beta3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.projectsId - Part of `logName`. The log resource to delete.
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
         * @desc Creates one or more log entries in a log. You must supply a list of `LogEntry` objects, named `entries`. Each `LogEntry` object must contain a payload object and a `LogEntryMetadata` object that describes the entry. You must fill in all the fields of the entry, metadata, and payload. You can also supply a map, `commonLabels`, that supplies default (key, value) data for the `entries[].metadata.labels` maps, saving you the trouble of creating identical copies for each entry.
         *
         * @alias logging.projects.logs.entries.write
         * @memberOf! logging(v1beta3)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.projectsId - Part of `logName`. The name of the log resource into which to insert the log entries.
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
         * @desc Lists log sinks associated with the specified log.
         *
         * @alias logging.projects.logs.sinks.list
         * @memberOf! logging(v1beta3)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.projectsId - Part of `logName`. The log for which to list sinks.
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
         * @desc Gets the specified log sink resource.
         *
         * @alias logging.projects.logs.sinks.get
         * @memberOf! logging(v1beta3)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.projectsId - Part of `sinkName`. The name of the sink resource to return.
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
         * @desc Creates the specified log sink resource.
         *
         * @alias logging.projects.logs.sinks.create
         * @memberOf! logging(v1beta3)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.projectsId - Part of `logName`. The log in which to create a sink resource.
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
         * @desc Creates or updates the specified log sink resource.
         *
         * @alias logging.projects.logs.sinks.update
         * @memberOf! logging(v1beta3)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.projectsId - Part of `sinkName`. The name of the sink to update.
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
         * @desc Deletes the specified log sink resource.
         *
         * @alias logging.projects.logs.sinks.delete
         * @memberOf! logging(v1beta3)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.projectsId - Part of `sinkName`. The name of the sink to delete.
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
       * @desc Lists log services associated with log entries ingested for a project.
       *
       * @alias logging.projects.logServices.list
       * @memberOf! logging(v1beta3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.projectsId - Part of `projectName`. The project resource whose services are to be listed.
       * @param  {string=} params.log - The name of the log resource whose services are to be listed. log for which to list services. When empty, all services are listed.
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
         * @desc Lists log service indexes associated with a log service.
         *
         * @alias logging.projects.logServices.indexes.list
         * @memberOf! logging(v1beta3)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.projectsId - Part of `serviceName`. A log service resource of the form `/projects/x/logServices/x`. The service indexes of the log service are returned. Example: `"/projects/myProj/logServices/appengine.googleapis.com"`.
         * @param  {string} params.logServicesId - Part of `serviceName`. See documentation of `projectsId`.
         * @param  {string=} params.indexPrefix - Restricts the indexes returned to be those with a specified prefix. The prefix has the form `"/label_value/label_value/..."`, in order corresponding to the [`LogService indexKeys`][google.logging.v1.LogService.index_keys]. Non-empty prefixes must begin with `/` . Example prefixes: + `"/myModule/"` retrieves App Engine versions associated with `myModule`. The trailing slash terminates the value. + `"/myModule"` retrieves App Engine modules with names beginning with `myModule`. + `""` retrieves all indexes.
         * @param  {integer=} params.depth - A limit to the number of levels of the index hierarchy that are expanded. If `depth` is 0, it defaults to the level specified by the prefix field (the number of slash separators). The default empty prefix implies a `depth` of 1. It is an error for `depth` to be any non-zero value less than the number of components in `indexPrefix`.
         * @param  {string=} params.log - A log resource like `/projects/project_id/logs/log_name`, identifying the log for which to list service indexes.
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
         * @desc Lists log service sinks associated with the specified service.
         *
         * @alias logging.projects.logServices.sinks.list
         * @memberOf! logging(v1beta3)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.projectsId - Part of `serviceName`. The name of the service for which to list sinks.
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
         * @desc Gets the specified log service sink resource.
         *
         * @alias logging.projects.logServices.sinks.get
         * @memberOf! logging(v1beta3)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.projectsId - Part of `sinkName`. The name of the sink to return.
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
         * @desc Creates the specified log service sink resource.
         *
         * @alias logging.projects.logServices.sinks.create
         * @memberOf! logging(v1beta3)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.projectsId - Part of `serviceName`. The name of the service in which to create a sink.
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
         * @desc Creates or update the specified log service sink resource.
         *
         * @alias logging.projects.logServices.sinks.update
         * @memberOf! logging(v1beta3)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.projectsId - Part of `sinkName`. The name of the sink to update.
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
         * @desc Deletes the specified log service sink.
         *
         * @alias logging.projects.logServices.sinks.delete
         * @memberOf! logging(v1beta3)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.projectsId - Part of `sinkName`. The name of the sink to delete.
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
    }
  };
}

/**
 * Exports Logging object
 * @type Logging
 */
module.exports = Logging;