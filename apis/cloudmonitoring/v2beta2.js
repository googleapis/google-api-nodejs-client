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
 * Cloud Monitoring API
 *
 * @classdesc API for accessing Google Cloud and API monitoring data.
 * @namespace cloudmonitoring
 * @version  v2beta2
 * @variation v2beta2
 * @this Cloudmonitoring
 * @param {object=} options Options for Cloudmonitoring
 */
function Cloudmonitoring(options) {

  var self = this;
  this._options = options || {};

  this.metricDescriptors = {

    /**
     * cloudmonitoring.metricDescriptors.create
     *
     * @desc Create a new metric.
     *
     * @alias cloudmonitoring.metricDescriptors.create
     * @memberOf! cloudmonitoring(v2beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - The project id. The value can be the numeric project ID or string-based project name.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    create: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/cloudmonitoring/v2beta2/projects/{project}/metricDescriptors',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * cloudmonitoring.metricDescriptors.delete
     *
     * @desc Delete an existing metric.
     *
     * @alias cloudmonitoring.metricDescriptors.delete
     * @memberOf! cloudmonitoring(v2beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.metric - Name of the metric.
     * @param  {string} params.project - The project ID to which the metric belongs.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/cloudmonitoring/v2beta2/projects/{project}/metricDescriptors/{metric}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'metric'],
        pathParams: ['metric', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * cloudmonitoring.metricDescriptors.list
     *
     * @desc List metric descriptors that match the query. If the query is not set, then all of the metric descriptors will be returned. Large responses will be paginated, use the nextPageToken returned in the response to request subsequent pages of results by setting the pageToken query parameter to the value of the nextPageToken.
     *
     * @alias cloudmonitoring.metricDescriptors.list
     * @memberOf! cloudmonitoring(v2beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer=} params.count - Maximum number of metric descriptors per page. Used for pagination. If not specified, count = 100.
     * @param  {string=} params.pageToken - The pagination token, which is used to page through large result sets. Set this value to the value of the nextPageToken to retrieve the next page of results.
     * @param  {string} params.project - The project id. The value can be the numeric project ID or string-based project name.
     * @param  {string=} params.query - The query used to search against existing metrics. Separate keywords with a space; the service joins all keywords with AND, meaning that all keywords must match for a metric to be returned. If this field is omitted, all metrics are returned. If an empty string is passed with this field, no metrics are returned.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/cloudmonitoring/v2beta2/projects/{project}/metricDescriptors',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.timeseries = {

    /**
     * cloudmonitoring.timeseries.list
     *
     * @desc List the data points of the time series that match the metric and labels values and that have data points in the interval. Large responses are paginated; use the nextPageToken returned in the response to request subsequent pages of results by setting the pageToken query parameter to the value of the nextPageToken.
     *
     * @alias cloudmonitoring.timeseries.list
     * @memberOf! cloudmonitoring(v2beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.aggregator - The aggregation function that will reduce the data points in each window to a single point. This parameter is only valid for non-cumulative metric types.
     * @param  {integer=} params.count - Maximum number of data points per page, which is used for pagination of results.
     * @param  {string=} params.labels - A collection of labels for the matching time series, which are represented as:   - key==value: key equals the value  - key=~value: key regex matches the value  - key!=value: key does not equal the value  - key!~value: key regex does not match the value  For example, to list all of the time series descriptors for the region us-central1, you could specify: label=cloud.googleapis.com%2Flocation=~us-central1.*
     * @param  {string} params.metric - Metric names are protocol-free URLs as listed in the Supported Metrics page. For example, compute.googleapis.com/instance/disk/read_ops_count.
     * @param  {string=} params.oldest - Start of the time interval (exclusive), which is expressed as an RFC 3339 timestamp. If neither oldest nor timespan is specified, the default time interval will be (youngest - 4 hours, youngest]
     * @param  {string=} params.pageToken - The pagination token, which is used to page through large result sets. Set this value to the value of the nextPageToken to retrieve the next page of results.
     * @param  {string} params.project - The project ID to which this time series belongs. The value can be the numeric project ID or string-based project name.
     * @param  {string=} params.timespan - Length of the time interval to query, which is an alternative way to declare the interval: (youngest - timespan, youngest]. The timespan and oldest parameters should not be used together. Units:   - s: second  - m: minute  - h: hour  - d: day  - w: week  Examples: 2s, 3m, 4w. Only one unit is allowed, for example: 2w3d is not allowed; you should use 17d instead.  If neither oldest nor timespan is specified, the default time interval will be (youngest - 4 hours, youngest].
     * @param  {string=} params.window - The sampling window. At most one data point will be returned for each window in the requested time interval. This parameter is only valid for non-cumulative metric types. Units:   - m: minute  - h: hour  - d: day  - w: week  Examples: 3m, 4w. Only one unit is allowed, for example: 2w3d is not allowed; you should use 17d instead.
     * @param  {string} params.youngest - End of the time interval (inclusive), which is expressed as an RFC 3339 timestamp.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/cloudmonitoring/v2beta2/projects/{project}/timeseries/{metric}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'metric', 'youngest'],
        pathParams: ['metric', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * cloudmonitoring.timeseries.write
     *
     * @desc Put data points to one or more time series for one or more metrics. If a time series does not exist, a new time series will be created. It is not allowed to write a time series point that is older than the existing youngest point of that time series. Points that are older than the existing youngest point of that time series will be discarded silently. Therefore, users should make sure that points of a time series are written sequentially in the order of their end time.
     *
     * @alias cloudmonitoring.timeseries.write
     * @memberOf! cloudmonitoring(v2beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - The project ID. The value can be the numeric project ID or string-based project name.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    write: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/cloudmonitoring/v2beta2/projects/{project}/timeseries:write',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.timeseriesDescriptors = {

    /**
     * cloudmonitoring.timeseriesDescriptors.list
     *
     * @desc List the descriptors of the time series that match the metric and labels values and that have data points in the interval. Large responses are paginated; use the nextPageToken returned in the response to request subsequent pages of results by setting the pageToken query parameter to the value of the nextPageToken.
     *
     * @alias cloudmonitoring.timeseriesDescriptors.list
     * @memberOf! cloudmonitoring(v2beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.aggregator - The aggregation function that will reduce the data points in each window to a single point. This parameter is only valid for non-cumulative metric types.
     * @param  {integer=} params.count - Maximum number of time series descriptors per page. Used for pagination. If not specified, count = 100.
     * @param  {string=} params.labels - A collection of labels for the matching time series, which are represented as:   - key==value: key equals the value  - key=~value: key regex matches the value  - key!=value: key does not equal the value  - key!~value: key regex does not match the value  For example, to list all of the time series descriptors for the region us-central1, you could specify: label=cloud.googleapis.com%2Flocation=~us-central1.*
     * @param  {string} params.metric - Metric names are protocol-free URLs as listed in the Supported Metrics page. For example, compute.googleapis.com/instance/disk/read_ops_count.
     * @param  {string=} params.oldest - Start of the time interval (exclusive), which is expressed as an RFC 3339 timestamp. If neither oldest nor timespan is specified, the default time interval will be (youngest - 4 hours, youngest]
     * @param  {string=} params.pageToken - The pagination token, which is used to page through large result sets. Set this value to the value of the nextPageToken to retrieve the next page of results.
     * @param  {string} params.project - The project ID to which this time series belongs. The value can be the numeric project ID or string-based project name.
     * @param  {string=} params.timespan - Length of the time interval to query, which is an alternative way to declare the interval: (youngest - timespan, youngest]. The timespan and oldest parameters should not be used together. Units:   - s: second  - m: minute  - h: hour  - d: day  - w: week  Examples: 2s, 3m, 4w. Only one unit is allowed, for example: 2w3d is not allowed; you should use 17d instead.  If neither oldest nor timespan is specified, the default time interval will be (youngest - 4 hours, youngest].
     * @param  {string=} params.window - The sampling window. At most one data point will be returned for each window in the requested time interval. This parameter is only valid for non-cumulative metric types. Units:   - m: minute  - h: hour  - d: day  - w: week  Examples: 3m, 4w. Only one unit is allowed, for example: 2w3d is not allowed; you should use 17d instead.
     * @param  {string} params.youngest - End of the time interval (inclusive), which is expressed as an RFC 3339 timestamp.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/cloudmonitoring/v2beta2/projects/{project}/timeseriesDescriptors/{metric}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'metric', 'youngest'],
        pathParams: ['metric', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * Exports Cloudmonitoring object
 * @type Cloudmonitoring
 */
module.exports = Cloudmonitoring;