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

'use strict';

var apirequest = require('../../lib/apirequest');
var createAPIRequest = apirequest.createAPIRequest;
var checkRequired = apirequest.checkRequired;
var extend = require('../../lib/utils').extend;

/**
 * Admin Reports API
 *
 * @classdesc Allows the administrators of Google Apps customers to fetch reports about the usage, collaboration, security and risk for their users.
 * @namespace admin
 * @version  reports_v1
 * @variation reports_v1
 * @this Admin
 * @param {object=} options Options for Admin
 */
function Admin(options) {

  var self = this;
  this._options = options || {};

  this.activities = {

    /**
     * reports.activities.list
     *
     * @desc Retrieves a list of activities for a specific customer and application.
     *
     * @alias reports.activities.list
     * @memberOf! admin(reports_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.actorIpAddress - IP Address of host where the event was performed. Supports both IPv4 and IPv6 addresses.
     * @param  {string} params.applicationName - Application name for which the events are to be retrieved.
     * @param  {string=} params.customerId - Represents the customer for which the data is to be fetched.
     * @param  {string=} params.endTime - Return events which occured at or before this time.
     * @param  {string=} params.eventName - Name of the event being queried.
     * @param  {string=} params.filters - Event parameters in the form [parameter1 name][operator][parameter1 value],[parameter2 name][operator][parameter2 value],...
     * @param  {integer=} params.maxResults - Number of activity records to be shown in each page.
     * @param  {string=} params.pageToken - Token to specify next page.
     * @param  {string=} params.startTime - Return events which occured at or after this time.
     * @param  {string} params.userKey - Represents the profile id or the user email for which the data should be filtered. When 'all' is specified as the userKey, it returns usageReports for all users.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['userKey', 'applicationName']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/admin/reports/v1/activity/users/' + params.userKey + '/applications/' + params.applicationName,
        method: 'GET'
      };

      delete params.applicationName;

      delete params.userKey;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * reports.activities.watch
     *
     * @desc Push changes to activities
     *
     * @alias reports.activities.watch
     * @memberOf! admin(reports_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.actorIpAddress - IP Address of host where the event was performed. Supports both IPv4 and IPv6 addresses.
     * @param  {string} params.applicationName - Application name for which the events are to be retrieved.
     * @param  {string=} params.customerId - Represents the customer for which the data is to be fetched.
     * @param  {string=} params.endTime - Return events which occured at or before this time.
     * @param  {string=} params.eventName - Name of the event being queried.
     * @param  {string=} params.filters - Event parameters in the form [parameter1 name][operator][parameter1 value],[parameter2 name][operator][parameter2 value],...
     * @param  {integer=} params.maxResults - Number of activity records to be shown in each page.
     * @param  {string=} params.pageToken - Token to specify next page.
     * @param  {string=} params.startTime - Return events which occured at or after this time.
     * @param  {string} params.userKey - Represents the profile id or the user email for which the data should be filtered. When 'all' is specified as the userKey, it returns usageReports for all users.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    watch: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['userKey', 'applicationName']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/admin/reports/v1/activity/users/' + params.userKey + '/applications/' + params.applicationName + '/watch',
        method: 'POST'
      };

      delete params.applicationName;

      delete params.userKey;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.channels = {

    /**
     * admin.channels.stop
     *
     * @desc Stop watching resources through this channel
     *
     * @alias admin.channels.stop
     * @memberOf! admin(reports_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    stop: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/admin/reports/v1//admin/reports_v1/channels/stop',
        method: 'POST'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.customerUsageReports = {

    /**
     * reports.customerUsageReports.get
     *
     * @desc Retrieves a report which is a collection of properties / statistics for a specific customer.
     *
     * @alias reports.customerUsageReports.get
     * @memberOf! admin(reports_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.customerId - Represents the customer for which the data is to be fetched.
     * @param  {string} params.date - Represents the date in yyyy-mm-dd format for which the data is to be fetched.
     * @param  {string=} params.pageToken - Token to specify next page.
     * @param  {string=} params.parameters - Represents the application name, parameter name pairs to fetch in csv as app_name1:param_name1, app_name2:param_name2.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['date']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/admin/reports/v1/usage/dates/' + params.date,
        method: 'GET'
      };

      delete params.date;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.userUsageReport = {

    /**
     * reports.userUsageReport.get
     *
     * @desc Retrieves a report which is a collection of properties / statistics for a set of users.
     *
     * @alias reports.userUsageReport.get
     * @memberOf! admin(reports_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.customerId - Represents the customer for which the data is to be fetched.
     * @param  {string} params.date - Represents the date in yyyy-mm-dd format for which the data is to be fetched.
     * @param  {string=} params.filters - Represents the set of filters including parameter operator value.
     * @param  {integer=} params.maxResults - Maximum number of results to return. Maximum allowed is 1000
     * @param  {string=} params.pageToken - Token to specify next page.
     * @param  {string=} params.parameters - Represents the application name, parameter name pairs to fetch in csv as app_name1:param_name1, app_name2:param_name2.
     * @param  {string} params.userKey - Represents the profile id or the user email for which the data should be filtered.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['userKey', 'date']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/admin/reports/v1/usage/users/' + params.userKey + '/dates/' + params.date,
        method: 'GET'
      };

      delete params.date;

      delete params.userKey;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };
}

/**
 * Exports Admin object
 * @type Admin
 */
module.exports = Admin;