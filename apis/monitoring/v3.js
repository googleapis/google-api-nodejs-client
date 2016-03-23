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
 * Google Monitoring API
 *
 * @classdesc The Google Monitoring API lets you manage your monitoring data and configurations.
 * @namespace monitoring
 * @version  v3
 * @variation v3
 * @this Monitoring
 * @param {object=} options Options for Monitoring
 */
function Monitoring(options) {

  var self = this;
  this._options = options || {};

  this.projects = {

    collectdTimeSeries: {

      /**
       * monitoring.projects.collectdTimeSeries.create
       *
       * @desc Creates a new time series with the given data points. This method is only for use in `collectd`-related code, including the Google Monitoring Agent. See [google.monitoring.v3.MetricService.CreateTimeSeries] instead.
       *
       * @alias monitoring.projects.collectdTimeSeries.create
       * @memberOf! monitoring(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.name - The project in which to create the time series. The format is `"projects/PROJECT_ID_OR_NUMBER"`.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      create: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://monitoring.googleapis.com/v3/{name}/collectdTimeSeries',
            method: 'POST'
          },
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    groups: {

      /**
       * monitoring.projects.groups.list
       *
       * @desc Lists the existing groups.
       *
       * @alias monitoring.projects.groups.list
       * @memberOf! monitoring(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.name - The project whose groups are to be listed. The format is `"projects/{project_id_or_number}"`.
       * @param  {string=} params.childrenOfGroup - A group name: `"projects/{project_id_or_number}/groups/{group_id}"`. Returns groups whose `parentName` field contains the group name. If no groups have this parent, the results are empty.
       * @param  {string=} params.ancestorsOfGroup - A group name: `"projects/{project_id_or_number}/groups/{group_id}"`. Returns groups that are ancestors of the specified group. The groups are returned in order, starting with the immediate parent and ending with the most distant ancestor. If the specified group has no immediate parent, the results are empty.
       * @param  {string=} params.descendantsOfGroup - A group name: `"projects/{project_id_or_number}/groups/{group_id}"`. Returns the descendants of the specified group. This is a superset of the results returned by the `childrenOfGroup` filter, and includes children-of-children, and so forth.
       * @param  {integer=} params.pageSize - A positive number that is the maximum number of results to return.
       * @param  {string=} params.pageToken - If this field is not empty then it must contain the `nextPageToken` value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://monitoring.googleapis.com/v3/{name}/groups',
            method: 'GET'
          },
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * monitoring.projects.groups.get
       *
       * @desc Gets a single group.
       *
       * @alias monitoring.projects.groups.get
       * @memberOf! monitoring(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.name - The group to retrieve. The format is `"projects/{project_id_or_number}/groups/{group_id}"`.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://monitoring.googleapis.com/v3/{name}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * monitoring.projects.groups.create
       *
       * @desc Creates a new group.
       *
       * @alias monitoring.projects.groups.create
       * @memberOf! monitoring(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.name - The project in which to create the group. The format is `"projects/{project_id_or_number}"`.
       * @param  {boolean=} params.validateOnly - If true, validate this request but do not create the group.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      create: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://monitoring.googleapis.com/v3/{name}/groups',
            method: 'POST'
          },
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * monitoring.projects.groups.update
       *
       * @desc Updates an existing group. You can change any group attributes except `name`.
       *
       * @alias monitoring.projects.groups.update
       * @memberOf! monitoring(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.name - The name of this group. The format is `"projects/{project_id_or_number}/groups/{group_id}"`. When creating a group, this field is ignored and a new name is created consisting of the project specified in the call to `CreateGroup` and a unique `{group_id}` that is generated automatically. @OutputOnly
       * @param  {boolean=} params.validateOnly - If true, validate this request but do not update the existing group.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      update: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://monitoring.googleapis.com/v3/{name}',
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
       * monitoring.projects.groups.delete
       *
       * @desc Deletes an existing group.
       *
       * @alias monitoring.projects.groups.delete
       * @memberOf! monitoring(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.name - The group to delete. The format is `"projects/{project_id_or_number}/groups/{group_id}"`.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      delete: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://monitoring.googleapis.com/v3/{name}',
            method: 'DELETE'
          },
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      members: {

        /**
         * monitoring.projects.groups.members.list
         *
         * @desc Lists the monitored resources that are members of a group.
         *
         * @alias monitoring.projects.groups.members.list
         * @memberOf! monitoring(v3)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.name - The group whose members are listed. The format is `"projects/{project_id_or_number}/groups/{group_id}"`.
         * @param  {integer=} params.pageSize - A positive number that is the maximum number of results to return.
         * @param  {string=} params.pageToken - If this field is not empty then it must contain the `nextPageToken` value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
         * @param  {string=} params.filter - An optional [list filter](/monitoring/api/learn_more#filtering) describing the members to be returned. The filter may reference the type, labels, and metadata of monitored resources that comprise the group. For example, to return only resources representing Compute Engine VM instances, use this filter: resource.type = "gce_instance"
         * @param  {string=} params.interval.endTime - (required) The end of the interval. The interval includes this time.
         * @param  {string=} params.interval.startTime - (optional) If omitted, the interval is a point in time, `endTime`. If `startTime` is present, it must be earlier than (less than) `endTime`. The interval begins after `startTime`—it does not include `startTime`.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        list: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://monitoring.googleapis.com/v3/{name}/members',
              method: 'GET'
            },
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      }
    },

    monitoredResourceDescriptors: {

      /**
       * monitoring.projects.monitoredResourceDescriptors.list
       *
       * @desc Lists monitored resource descriptors that match a filter.
       *
       * @alias monitoring.projects.monitoredResourceDescriptors.list
       * @memberOf! monitoring(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.name - The project on which to execute the request. The format is `"projects/{project_id_or_number}"`.
       * @param  {string=} params.filter - An optional [filter](/monitoring/api/v3/filters) describing the descriptors to be returned. The filter can reference the descriptor's type and labels. For example, the following filter returns only Google Compute Engine descriptors that have an `id` label: resource.type = starts_with("gce_") AND resource.label:id
       * @param  {integer=} params.pageSize - A positive number that is the maximum number of results to return.
       * @param  {string=} params.pageToken - If this field is not empty then it must contain the `nextPageToken` value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://monitoring.googleapis.com/v3/{name}/monitoredResourceDescriptors',
            method: 'GET'
          },
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * monitoring.projects.monitoredResourceDescriptors.get
       *
       * @desc Gets a single monitored resource descriptor.
       *
       * @alias monitoring.projects.monitoredResourceDescriptors.get
       * @memberOf! monitoring(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.name - The monitored resource descriptor to get. The format is `"projects/{project_id_or_number}/monitoredResourceDescriptors/{resource_type}"`. The `{resource_type}` is a predefined type, such as `cloudsql_database`.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://monitoring.googleapis.com/v3/{name}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    metricDescriptors: {

      /**
       * monitoring.projects.metricDescriptors.list
       *
       * @desc Lists metric descriptors that match a filter.
       *
       * @alias monitoring.projects.metricDescriptors.list
       * @memberOf! monitoring(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.name - The project on which to execute the request. The format is `"projects/{project_id_or_number}"`.
       * @param  {string=} params.filter - If this field is empty, all custom and system-defined metric descriptors are returned. Otherwise, the [filter](/monitoring/api/v3/filters) specifies which metric descriptors are to be returned. For example, the following filter matches all [custom metrics](/monitoring/custom-metrics): metric.type = starts_with("custom.googleapis.com/")
       * @param  {integer=} params.pageSize - A positive number that is the maximum number of results to return.
       * @param  {string=} params.pageToken - If this field is not empty then it must contain the `nextPageToken` value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://monitoring.googleapis.com/v3/{name}/metricDescriptors',
            method: 'GET'
          },
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * monitoring.projects.metricDescriptors.get
       *
       * @desc Gets a single metric descriptor.
       *
       * @alias monitoring.projects.metricDescriptors.get
       * @memberOf! monitoring(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.name - The metric descriptor on which to execute the request. The format is `"projects/{project_id_or_number}/metricDescriptors/{metric_id}"`. An example value of `{metric_id}` is `"compute.googleapis.com/instance/disk/read_bytes_count"`.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://monitoring.googleapis.com/v3/{name}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * monitoring.projects.metricDescriptors.create
       *
       * @desc Creates a new metric descriptor. User-created metric descriptors define [custom metrics](/monitoring/custom-metrics).
       *
       * @alias monitoring.projects.metricDescriptors.create
       * @memberOf! monitoring(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.name - The project on which to execute the request. The format is `"projects/{project_id_or_number}"`.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      create: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://monitoring.googleapis.com/v3/{name}/metricDescriptors',
            method: 'POST'
          },
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * monitoring.projects.metricDescriptors.delete
       *
       * @desc Deletes a metric descriptor. Only user-created [custom metrics](/monitoring/custom-metrics) can be deleted.
       *
       * @alias monitoring.projects.metricDescriptors.delete
       * @memberOf! monitoring(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.name - The metric descriptor on which to execute the request. The format is `"projects/{project_id_or_number}/metricDescriptors/{metric_id}"`. An example of `{metric_id}` is: `"custom.googleapis.com/my_test_metric"`.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      delete: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://monitoring.googleapis.com/v3/{name}',
            method: 'DELETE'
          },
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    timeSeries: {

      /**
       * monitoring.projects.timeSeries.list
       *
       * @desc Lists time series that match a filter.
       *
       * @alias monitoring.projects.timeSeries.list
       * @memberOf! monitoring(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.name - The project on which to execute the request. The format is "projects/{project_id_or_number}".
       * @param  {string=} params.filter - A [monitoring filter](/monitoring/api/v3/filters) that specifies which time series should be returned. The filter must specify a single metric type, and can additionally specify metric labels and other information. For example: metric.type = "compute.googleapis.com/instance/cpu/usage_time" AND metric.label.instance_name = "my-instance-name"
       * @param  {string=} params.interval.endTime - (required) The end of the interval. The interval includes this time.
       * @param  {string=} params.interval.startTime - (optional) If omitted, the interval is a point in time, `endTime`. If `startTime` is present, it must be earlier than (less than) `endTime`. The interval begins after `startTime`—it does not include `startTime`.
       * @param  {string=} params.aggregation.alignmentPeriod - The alignment period for per-[time series](TimeSeries) alignment. If present, `alignmentPeriod` must be at least 60 seconds. After per-time series alignment, each time series will contain data points only on the period boundaries. If `perSeriesAligner` is not specified or equals `ALIGN_NONE`, then this field is ignored. If `perSeriesAligner` is specified and does not equal `ALIGN_NONE`, then this field must be defined; otherwise an error is returned.
       * @param  {string=} params.aggregation.perSeriesAligner - The approach to be used to align individual time series. Not all alignment functions may be applied to all time series, depending on the metric type and value type of the original time series. Alignment may change the metric type or the value type of the time series. Time series data must be aligned in order to perform cross-time series reduction. If `crossSeriesReducer` is specified, then `perSeriesAligner` must be specified and not equal `ALIGN_NONE` and `alignmentPeriod` must be specified; otherwise, an error is returned.
       * @param  {string=} params.aggregation.crossSeriesReducer - The approach to be used to combine time series. Not all reducer functions may be applied to all time series, depending on the metric type and the value type of the original time series. Reduction may change the metric type of value type of the time series. Time series data must be aligned in order to perform cross-time series reduction. If `crossSeriesReducer` is specified, then `perSeriesAligner` must be specified and not equal `ALIGN_NONE` and `alignmentPeriod` must be specified; otherwise, an error is returned.
       * @param  {string=} params.aggregation.groupByFields - The set of fields to preserve when `crossSeriesReducer` is specified. The `groupByFields` determine how the time series are partitioned into subsets prior to applying the aggregation function. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The `crossSeriesReducer` is applied to each subset of time series. Fields not specified in `groupByFields` are aggregated away. If `groupByFields` is not specified, the time series are aggregated into a single output time series. If `crossSeriesReducer` is not defined, this field is ignored.
       * @param  {string=} params.orderBy - Specifies the order in which the points of the time series should be returned. By default, results are not ordered. Currently, this field must be left blank.
       * @param  {string=} params.view - Specifies which information is returned about the time series.
       * @param  {integer=} params.pageSize - A positive number that is the maximum number of results to return. When `view` field sets to `FULL`, it limits the number of `Points` server will return; if `view` field is `HEADERS`, it limits the number of `TimeSeries` server will return.
       * @param  {string=} params.pageToken - If this field is not empty then it must contain the `nextPageToken` value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://monitoring.googleapis.com/v3/{name}/timeSeries',
            method: 'GET'
          },
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * monitoring.projects.timeSeries.create
       *
       * @desc Creates or adds data to one or more time series. The response is empty if all time series in the request were written. If any time series could not be written, a corresponding failure message is included in the error response.
       *
       * @alias monitoring.projects.timeSeries.create
       * @memberOf! monitoring(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.name - The project on which to execute the request. The format is `"projects/{project_id_or_number}"`.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      create: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://monitoring.googleapis.com/v3/{name}/timeSeries',
            method: 'POST'
          },
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };
}

/**
 * Exports Monitoring object
 * @type Monitoring
 */
module.exports = Monitoring;