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

/**
 * Google Analytics API
 *
 * @classdesc View and manage your Google Analytics data
 * @namespace analytics
 * @version  v3
 * @variation v3
 * @this Analytics
 * @param {object=} options Options for Analytics
 */
function Analytics(options) {

  var self = this;
  this._options = options || {};

  this.data = {

    ga: {

      /**
       * analytics.data.ga.get
       *
       * @desc Returns Analytics data for a view (profile).
       *
       * @alias analytics.data.ga.get
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string=} params.dimensions - A comma-separated list of Analytics dimensions. E.g., 'ga:browser,ga:city'.
       * @param  {string} params.end-date - End date for fetching Analytics data. Request can should specify an end date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is yesterday.
       * @param  {string=} params.filters - A comma-separated list of dimension or metric filters to be applied to Analytics data.
       * @param  {string} params.ids - Unique table ID for retrieving Analytics data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
       * @param  {integer=} params.max-results - The maximum number of entries to include in this feed.
       * @param  {string} params.metrics - A comma-separated list of Analytics metrics. E.g., 'ga:sessions,ga:pageviews'. At least one metric must be specified.
       * @param  {string=} params.output - The selected format for the response. Default format is JSON.
       * @param  {string=} params.samplingLevel - The desired sampling level.
       * @param  {string=} params.segment - An Analytics segment to be applied to data.
       * @param  {string=} params.sort - A comma-separated list of dimensions or metrics that determine the sort order for Analytics data.
       * @param  {string} params.start-date - Start date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.
       * @param  {integer=} params.start-index - An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/data/ga',
            method: 'GET'
          },
          params: params,
          requiredParams: ['ids', 'start-date', 'end-date', 'metrics'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    mcf: {

      /**
       * analytics.data.mcf.get
       *
       * @desc Returns Analytics Multi-Channel Funnels data for a view (profile).
       *
       * @alias analytics.data.mcf.get
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string=} params.dimensions - A comma-separated list of Multi-Channel Funnels dimensions. E.g., 'mcf:source,mcf:medium'.
       * @param  {string} params.end-date - End date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.
       * @param  {string=} params.filters - A comma-separated list of dimension or metric filters to be applied to the Analytics data.
       * @param  {string} params.ids - Unique table ID for retrieving Analytics data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
       * @param  {integer=} params.max-results - The maximum number of entries to include in this feed.
       * @param  {string} params.metrics - A comma-separated list of Multi-Channel Funnels metrics. E.g., 'mcf:totalConversions,mcf:totalConversionValue'. At least one metric must be specified.
       * @param  {string=} params.samplingLevel - The desired sampling level.
       * @param  {string=} params.sort - A comma-separated list of dimensions or metrics that determine the sort order for the Analytics data.
       * @param  {string} params.start-date - Start date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.
       * @param  {integer=} params.start-index - An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/data/mcf',
            method: 'GET'
          },
          params: params,
          requiredParams: ['ids', 'start-date', 'end-date', 'metrics'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    realtime: {

      /**
       * analytics.data.realtime.get
       *
       * @desc Returns real time data for a view (profile).
       *
       * @alias analytics.data.realtime.get
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string=} params.dimensions - A comma-separated list of real time dimensions. E.g., 'rt:medium,rt:city'.
       * @param  {string=} params.filters - A comma-separated list of dimension or metric filters to be applied to real time data.
       * @param  {string} params.ids - Unique table ID for retrieving real time data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
       * @param  {integer=} params.max-results - The maximum number of entries to include in this feed.
       * @param  {string} params.metrics - A comma-separated list of real time metrics. E.g., 'rt:activeUsers'. At least one metric must be specified.
       * @param  {string=} params.sort - A comma-separated list of dimensions or metrics that determine the sort order for real time data.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/data/realtime',
            method: 'GET'
          },
          params: params,
          requiredParams: ['ids', 'metrics'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  this.management = {

    accountSummaries: {

      /**
       * analytics.management.accountSummaries.list
       *
       * @desc Lists account summaries (lightweight tree comprised of accounts/properties/profiles) to which the user has access.
       *
       * @alias analytics.management.accountSummaries.list
       * @memberOf! analytics(v3)
       *
       * @param  {object=} params - Parameters for request
       * @param  {integer=} params.max-results - The maximum number of filters to include in this response.
       * @param  {integer=} params.start-index - An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accountSummaries',
            method: 'GET'
          },
          params: params,
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    accountUserLinks: {

      /**
       * analytics.management.accountUserLinks.delete
       *
       * @desc Removes a user from the given account.
       *
       * @alias analytics.management.accountUserLinks.delete
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID to delete the user link for.
       * @param  {string} params.linkId - Link ID to delete the user link for.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      delete: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/entityUserLinks/' + params.linkId,
            method: 'DELETE'
          },
          params: params,
          requiredParams: ['accountId', 'linkId'],
          pathParams: ['accountId', 'linkId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.accountUserLinks.insert
       *
       * @desc Adds a new user to the given account.
       *
       * @alias analytics.management.accountUserLinks.insert
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID to create the user link for.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      insert: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/entityUserLinks',
            method: 'POST'
          },
          params: params,
          requiredParams: ['accountId'],
          pathParams: ['accountId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.accountUserLinks.list
       *
       * @desc Lists account-user links for a given account.
       *
       * @alias analytics.management.accountUserLinks.list
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID to retrieve the user links for.
       * @param  {integer=} params.max-results - The maximum number of account-user links to include in this response.
       * @param  {integer=} params.start-index - An index of the first account-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/entityUserLinks',
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId'],
          pathParams: ['accountId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.accountUserLinks.update
       *
       * @desc Updates permissions for an existing user on the given account.
       *
       * @alias analytics.management.accountUserLinks.update
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID to update the account-user link for.
       * @param  {string} params.linkId - Link ID to update the account-user link for.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      update: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/entityUserLinks/' + params.linkId,
            method: 'PUT'
          },
          params: params,
          requiredParams: ['accountId', 'linkId'],
          pathParams: ['accountId', 'linkId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    accounts: {

      /**
       * analytics.management.accounts.list
       *
       * @desc Lists all accounts to which the user has access.
       *
       * @alias analytics.management.accounts.list
       * @memberOf! analytics(v3)
       *
       * @param  {object=} params - Parameters for request
       * @param  {integer=} params.max-results - The maximum number of accounts to include in this response.
       * @param  {integer=} params.start-index - An index of the first account to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts',
            method: 'GET'
          },
          params: params,
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    customDataSources: {

      /**
       * analytics.management.customDataSources.list
       *
       * @desc List custom data sources to which the user has access.
       *
       * @alias analytics.management.customDataSources.list
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account Id for the custom data sources to retrieve.
       * @param  {integer=} params.max-results - The maximum number of custom data sources to include in this response.
       * @param  {integer=} params.start-index - A 1-based index of the first custom data source to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
       * @param  {string} params.webPropertyId - Web property Id for the custom data sources to retrieve.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/customDataSources',
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId'],
          pathParams: ['accountId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    dailyUploads: {

      /**
       * analytics.management.dailyUploads.delete
       *
       * @desc Delete uploaded data for the given date.
       *
       * @alias analytics.management.dailyUploads.delete
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account Id associated with daily upload delete.
       * @param  {string} params.customDataSourceId - Custom data source Id associated with daily upload delete.
       * @param  {string} params.date - Date for which data is to be deleted. Date should be formatted as YYYY-MM-DD.
       * @param  {string} params.type - Type of data for this delete.
       * @param  {string} params.webPropertyId - Web property Id associated with daily upload delete.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      delete: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/customDataSources/' + params.customDataSourceId + '/dailyUploads/' + params.date,
            method: 'DELETE'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId', 'customDataSourceId', 'date', 'type'],
          pathParams: ['accountId', 'customDataSourceId', 'date', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.dailyUploads.list
       *
       * @desc List daily uploads to which the user has access.
       *
       * @alias analytics.management.dailyUploads.list
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account Id for the daily uploads to retrieve.
       * @param  {string} params.customDataSourceId - Custom data source Id for daily uploads to retrieve.
       * @param  {string} params.end-date - End date of the form YYYY-MM-DD.
       * @param  {integer=} params.max-results - The maximum number of custom data sources to include in this response.
       * @param  {string} params.start-date - Start date of the form YYYY-MM-DD.
       * @param  {integer=} params.start-index - A 1-based index of the first daily upload to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
       * @param  {string} params.webPropertyId - Web property Id for the daily uploads to retrieve.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/customDataSources/' + params.customDataSourceId + '/dailyUploads',
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId', 'customDataSourceId', 'start-date', 'end-date'],
          pathParams: ['accountId', 'customDataSourceId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.dailyUploads.upload
       *
       * @desc Update/Overwrite data for a custom data source.
       *
       * @alias analytics.management.dailyUploads.upload
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account Id associated with daily upload.
       * @param  {integer} params.appendNumber - Append number for this upload indexed from 1.
       * @param  {string} params.customDataSourceId - Custom data source Id to which the data being uploaded belongs.
       * @param  {string} params.date - Date for which data is uploaded. Date should be formatted as YYYY-MM-DD.
       * @param  {boolean=} params.reset - Reset/Overwrite all previous appends for this date and start over with this file as the first upload.
       * @param  {string} params.type - Type of data for this upload.
       * @param  {string} params.webPropertyId - Web property Id associated with daily upload.
       * @param  {object} params.media - Media object
       * @param  {string} params.media.mimeType - Media mime-type
       * @param  {string|object} params.media.body - Media body contents
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      upload: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/customDataSources/' + params.customDataSourceId + '/dailyUploads/' + params.date + '/uploads',
            method: 'POST'
          },
          params: params,
          mediaUrl: 'https://www.googleapis.com/upload/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/customDataSources/' + params.customDataSourceId + '/dailyUploads/' + params.date + '/uploads',
          requiredParams: ['accountId', 'webPropertyId', 'customDataSourceId', 'date', 'appendNumber', 'type'],
          pathParams: ['accountId', 'customDataSourceId', 'date', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    experiments: {

      /**
       * analytics.management.experiments.delete
       *
       * @desc Delete an experiment.
       *
       * @alias analytics.management.experiments.delete
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID to which the experiment belongs
       * @param  {string} params.experimentId - ID of the experiment to delete
       * @param  {string} params.profileId - View (Profile) ID to which the experiment belongs
       * @param  {string} params.webPropertyId - Web property ID to which the experiment belongs
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      delete: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/profiles/' + params.profileId + '/experiments/' + params.experimentId,
            method: 'DELETE'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId', 'profileId', 'experimentId'],
          pathParams: ['accountId', 'experimentId', 'profileId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.experiments.get
       *
       * @desc Returns an experiment to which the user has access.
       *
       * @alias analytics.management.experiments.get
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID to retrieve the experiment for.
       * @param  {string} params.experimentId - Experiment ID to retrieve the experiment for.
       * @param  {string} params.profileId - View (Profile) ID to retrieve the experiment for.
       * @param  {string} params.webPropertyId - Web property ID to retrieve the experiment for.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/profiles/' + params.profileId + '/experiments/' + params.experimentId,
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId', 'profileId', 'experimentId'],
          pathParams: ['accountId', 'experimentId', 'profileId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.experiments.insert
       *
       * @desc Create a new experiment.
       *
       * @alias analytics.management.experiments.insert
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID to create the experiment for.
       * @param  {string} params.profileId - View (Profile) ID to create the experiment for.
       * @param  {string} params.webPropertyId - Web property ID to create the experiment for.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      insert: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/profiles/' + params.profileId + '/experiments',
            method: 'POST'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId', 'profileId'],
          pathParams: ['accountId', 'profileId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.experiments.list
       *
       * @desc Lists experiments to which the user has access.
       *
       * @alias analytics.management.experiments.list
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID to retrieve experiments for.
       * @param  {integer=} params.max-results - The maximum number of experiments to include in this response.
       * @param  {string} params.profileId - View (Profile) ID to retrieve experiments for.
       * @param  {integer=} params.start-index - An index of the first experiment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
       * @param  {string} params.webPropertyId - Web property ID to retrieve experiments for.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/profiles/' + params.profileId + '/experiments',
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId', 'profileId'],
          pathParams: ['accountId', 'profileId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.experiments.patch
       *
       * @desc Update an existing experiment. This method supports patch semantics.
       *
       * @alias analytics.management.experiments.patch
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID of the experiment to update.
       * @param  {string} params.experimentId - Experiment ID of the experiment to update.
       * @param  {string} params.profileId - View (Profile) ID of the experiment to update.
       * @param  {string} params.webPropertyId - Web property ID of the experiment to update.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      patch: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/profiles/' + params.profileId + '/experiments/' + params.experimentId,
            method: 'PATCH'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId', 'profileId', 'experimentId'],
          pathParams: ['accountId', 'experimentId', 'profileId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.experiments.update
       *
       * @desc Update an existing experiment.
       *
       * @alias analytics.management.experiments.update
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID of the experiment to update.
       * @param  {string} params.experimentId - Experiment ID of the experiment to update.
       * @param  {string} params.profileId - View (Profile) ID of the experiment to update.
       * @param  {string} params.webPropertyId - Web property ID of the experiment to update.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      update: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/profiles/' + params.profileId + '/experiments/' + params.experimentId,
            method: 'PUT'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId', 'profileId', 'experimentId'],
          pathParams: ['accountId', 'experimentId', 'profileId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    filters: {

      /**
       * analytics.management.filters.delete
       *
       * @desc Delete a filter.
       *
       * @alias analytics.management.filters.delete
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID to delete the filter for.
       * @param  {string} params.filterId - ID of the filter to be deleted.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      delete: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/filters/' + params.filterId,
            method: 'DELETE'
          },
          params: params,
          requiredParams: ['accountId', 'filterId'],
          pathParams: ['accountId', 'filterId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.filters.get
       *
       * @desc Returns a filters to which the user has access.
       *
       * @alias analytics.management.filters.get
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID to retrieve filters for.
       * @param  {string} params.filterId - Filter ID to retrieve filters for.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/filters/' + params.filterId,
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId', 'filterId'],
          pathParams: ['accountId', 'filterId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.filters.insert
       *
       * @desc Create a new filter.
       *
       * @alias analytics.management.filters.insert
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID to create filter for.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      insert: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/filters',
            method: 'POST'
          },
          params: params,
          requiredParams: ['accountId'],
          pathParams: ['accountId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.filters.list
       *
       * @desc Lists all filters for an account
       *
       * @alias analytics.management.filters.list
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID to retrieve filters for.
       * @param  {integer=} params.max-results - The maximum number of filters to include in this response.
       * @param  {integer=} params.start-index - An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/filters',
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId'],
          pathParams: ['accountId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.filters.patch
       *
       * @desc Updates an existing filter. This method supports patch semantics.
       *
       * @alias analytics.management.filters.patch
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID to which the filter belongs.
       * @param  {string} params.filterId - ID of the filter to be updated.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      patch: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/filters/' + params.filterId,
            method: 'PATCH'
          },
          params: params,
          requiredParams: ['accountId', 'filterId'],
          pathParams: ['accountId', 'filterId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.filters.update
       *
       * @desc Updates an existing filter.
       *
       * @alias analytics.management.filters.update
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID to which the filter belongs.
       * @param  {string} params.filterId - ID of the filter to be updated.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      update: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/filters/' + params.filterId,
            method: 'PUT'
          },
          params: params,
          requiredParams: ['accountId', 'filterId'],
          pathParams: ['accountId', 'filterId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    goals: {

      /**
       * analytics.management.goals.get
       *
       * @desc Gets a goal to which the user has access.
       *
       * @alias analytics.management.goals.get
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID to retrieve the goal for.
       * @param  {string} params.goalId - Goal ID to retrieve the goal for.
       * @param  {string} params.profileId - View (Profile) ID to retrieve the goal for.
       * @param  {string} params.webPropertyId - Web property ID to retrieve the goal for.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/profiles/' + params.profileId + '/goals/' + params.goalId,
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId', 'profileId', 'goalId'],
          pathParams: ['accountId', 'goalId', 'profileId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.goals.insert
       *
       * @desc Create a new goal.
       *
       * @alias analytics.management.goals.insert
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID to create the goal for.
       * @param  {string} params.profileId - View (Profile) ID to create the goal for.
       * @param  {string} params.webPropertyId - Web property ID to create the goal for.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      insert: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/profiles/' + params.profileId + '/goals',
            method: 'POST'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId', 'profileId'],
          pathParams: ['accountId', 'profileId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.goals.list
       *
       * @desc Lists goals to which the user has access.
       *
       * @alias analytics.management.goals.list
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID to retrieve goals for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.
       * @param  {integer=} params.max-results - The maximum number of goals to include in this response.
       * @param  {string} params.profileId - View (Profile) ID to retrieve goals for. Can either be a specific view (profile) ID or '~all', which refers to all the views (profiles) that user has access to.
       * @param  {integer=} params.start-index - An index of the first goal to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
       * @param  {string} params.webPropertyId - Web property ID to retrieve goals for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/profiles/' + params.profileId + '/goals',
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId', 'profileId'],
          pathParams: ['accountId', 'profileId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.goals.patch
       *
       * @desc Updates an existing view (profile). This method supports patch semantics.
       *
       * @alias analytics.management.goals.patch
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID to update the goal.
       * @param  {string} params.goalId - Index of the goal to be updated.
       * @param  {string} params.profileId - View (Profile) ID to update the goal.
       * @param  {string} params.webPropertyId - Web property ID to update the goal.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      patch: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/profiles/' + params.profileId + '/goals/' + params.goalId,
            method: 'PATCH'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId', 'profileId', 'goalId'],
          pathParams: ['accountId', 'goalId', 'profileId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.goals.update
       *
       * @desc Updates an existing view (profile).
       *
       * @alias analytics.management.goals.update
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID to update the goal.
       * @param  {string} params.goalId - Index of the goal to be updated.
       * @param  {string} params.profileId - View (Profile) ID to update the goal.
       * @param  {string} params.webPropertyId - Web property ID to update the goal.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      update: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/profiles/' + params.profileId + '/goals/' + params.goalId,
            method: 'PUT'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId', 'profileId', 'goalId'],
          pathParams: ['accountId', 'goalId', 'profileId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    profileFilterLinks: {

      /**
       * analytics.management.profileFilterLinks.delete
       *
       * @desc Delete a profile filter link.
       *
       * @alias analytics.management.profileFilterLinks.delete
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID to which the profile filter link belongs.
       * @param  {string} params.linkId - ID of the profile filter link to delete.
       * @param  {string} params.profileId - Profile ID to which the filter link belongs.
       * @param  {string} params.webPropertyId - Web property Id to which the profile filter link belongs.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      delete: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/profiles/' + params.profileId + '/profileFilterLinks/' + params.linkId,
            method: 'DELETE'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId', 'profileId', 'linkId'],
          pathParams: ['accountId', 'linkId', 'profileId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.profileFilterLinks.get
       *
       * @desc Returns a single profile filter link.
       *
       * @alias analytics.management.profileFilterLinks.get
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID to retrieve profile filter link for.
       * @param  {string} params.linkId - ID of the profile filter link.
       * @param  {string} params.profileId - Profile ID to retrieve filter link for.
       * @param  {string} params.webPropertyId - Web property Id to retrieve profile filter link for.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/profiles/' + params.profileId + '/profileFilterLinks/' + params.linkId,
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId', 'profileId', 'linkId'],
          pathParams: ['accountId', 'linkId', 'profileId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.profileFilterLinks.insert
       *
       * @desc Create a new profile filter link.
       *
       * @alias analytics.management.profileFilterLinks.insert
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID to create profile filter link for.
       * @param  {string} params.profileId - Profile ID to create filter link for.
       * @param  {string} params.webPropertyId - Web property Id to create profile filter link for.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      insert: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/profiles/' + params.profileId + '/profileFilterLinks',
            method: 'POST'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId', 'profileId'],
          pathParams: ['accountId', 'profileId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.profileFilterLinks.list
       *
       * @desc Lists all profile filter links for a profile.
       *
       * @alias analytics.management.profileFilterLinks.list
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID to retrieve profile filter links for.
       * @param  {integer=} params.max-results - The maximum number of profile filter links to include in this response.
       * @param  {string} params.profileId - Profile ID to retrieve filter links for. Can either be a specific profile ID or '~all', which refers to all the profiles that user has access to.
       * @param  {integer=} params.start-index - An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
       * @param  {string} params.webPropertyId - Web property Id for profile filter links for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/profiles/' + params.profileId + '/profileFilterLinks',
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId', 'profileId'],
          pathParams: ['accountId', 'profileId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.profileFilterLinks.patch
       *
       * @desc Update an existing profile filter link. This method supports patch semantics.
       *
       * @alias analytics.management.profileFilterLinks.patch
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID to which profile filter link belongs.
       * @param  {string} params.linkId - ID of the profile filter link to be updated.
       * @param  {string} params.profileId - Profile ID to which filter link belongs
       * @param  {string} params.webPropertyId - Web property Id to which profile filter link belongs
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      patch: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/profiles/' + params.profileId + '/profileFilterLinks/' + params.linkId,
            method: 'PATCH'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId', 'profileId', 'linkId'],
          pathParams: ['accountId', 'linkId', 'profileId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.profileFilterLinks.update
       *
       * @desc Update an existing profile filter link.
       *
       * @alias analytics.management.profileFilterLinks.update
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID to which profile filter link belongs.
       * @param  {string} params.linkId - ID of the profile filter link to be updated.
       * @param  {string} params.profileId - Profile ID to which filter link belongs
       * @param  {string} params.webPropertyId - Web property Id to which profile filter link belongs
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      update: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/profiles/' + params.profileId + '/profileFilterLinks/' + params.linkId,
            method: 'PUT'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId', 'profileId', 'linkId'],
          pathParams: ['accountId', 'linkId', 'profileId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    profileUserLinks: {

      /**
       * analytics.management.profileUserLinks.delete
       *
       * @desc Removes a user from the given view (profile).
       *
       * @alias analytics.management.profileUserLinks.delete
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID to delete the user link for.
       * @param  {string} params.linkId - Link ID to delete the user link for.
       * @param  {string} params.profileId - View (Profile) ID to delete the user link for.
       * @param  {string} params.webPropertyId - Web Property ID to delete the user link for.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      delete: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/profiles/' + params.profileId + '/entityUserLinks/' + params.linkId,
            method: 'DELETE'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId', 'profileId', 'linkId'],
          pathParams: ['accountId', 'linkId', 'profileId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.profileUserLinks.insert
       *
       * @desc Adds a new user to the given view (profile).
       *
       * @alias analytics.management.profileUserLinks.insert
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID to create the user link for.
       * @param  {string} params.profileId - View (Profile) ID to create the user link for.
       * @param  {string} params.webPropertyId - Web Property ID to create the user link for.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      insert: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/profiles/' + params.profileId + '/entityUserLinks',
            method: 'POST'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId', 'profileId'],
          pathParams: ['accountId', 'profileId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.profileUserLinks.list
       *
       * @desc Lists profile-user links for a given view (profile).
       *
       * @alias analytics.management.profileUserLinks.list
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID which the given view (profile) belongs to.
       * @param  {integer=} params.max-results - The maximum number of profile-user links to include in this response.
       * @param  {string} params.profileId - View (Profile) ID to retrieve the profile-user links for. Can either be a specific profile ID or '~all', which refers to all the profiles that user has access to.
       * @param  {integer=} params.start-index - An index of the first profile-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
       * @param  {string} params.webPropertyId - Web Property ID which the given view (profile) belongs to. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/profiles/' + params.profileId + '/entityUserLinks',
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId', 'profileId'],
          pathParams: ['accountId', 'profileId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.profileUserLinks.update
       *
       * @desc Updates permissions for an existing user on the given view (profile).
       *
       * @alias analytics.management.profileUserLinks.update
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID to update the user link for.
       * @param  {string} params.linkId - Link ID to update the user link for.
       * @param  {string} params.profileId - View (Profile ID) to update the user link for.
       * @param  {string} params.webPropertyId - Web Property ID to update the user link for.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      update: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/profiles/' + params.profileId + '/entityUserLinks/' + params.linkId,
            method: 'PUT'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId', 'profileId', 'linkId'],
          pathParams: ['accountId', 'linkId', 'profileId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    profiles: {

      /**
       * analytics.management.profiles.delete
       *
       * @desc Deletes a view (profile).
       *
       * @alias analytics.management.profiles.delete
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID to delete the view (profile) for.
       * @param  {string} params.profileId - ID of the view (profile) to be deleted.
       * @param  {string} params.webPropertyId - Web property ID to delete the view (profile) for.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      delete: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/profiles/' + params.profileId,
            method: 'DELETE'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId', 'profileId'],
          pathParams: ['accountId', 'profileId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.profiles.get
       *
       * @desc Gets a view (profile) to which the user has access.
       *
       * @alias analytics.management.profiles.get
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID to retrieve the goal for.
       * @param  {string} params.profileId - View (Profile) ID to retrieve the goal for.
       * @param  {string} params.webPropertyId - Web property ID to retrieve the goal for.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/profiles/' + params.profileId,
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId', 'profileId'],
          pathParams: ['accountId', 'profileId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.profiles.insert
       *
       * @desc Create a new view (profile).
       *
       * @alias analytics.management.profiles.insert
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID to create the view (profile) for.
       * @param  {string} params.webPropertyId - Web property ID to create the view (profile) for.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      insert: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/profiles',
            method: 'POST'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId'],
          pathParams: ['accountId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.profiles.list
       *
       * @desc Lists views (profiles) to which the user has access.
       *
       * @alias analytics.management.profiles.list
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID for the view (profiles) to retrieve. Can either be a specific account ID or '~all', which refers to all the accounts to which the user has access.
       * @param  {integer=} params.max-results - The maximum number of views (profiles) to include in this response.
       * @param  {integer=} params.start-index - An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
       * @param  {string} params.webPropertyId - Web property ID for the views (profiles) to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties to which the user has access.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/profiles',
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId'],
          pathParams: ['accountId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.profiles.patch
       *
       * @desc Updates an existing view (profile). This method supports patch semantics.
       *
       * @alias analytics.management.profiles.patch
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID to which the view (profile) belongs
       * @param  {string} params.profileId - ID of the view (profile) to be updated.
       * @param  {string} params.webPropertyId - Web property ID to which the view (profile) belongs
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      patch: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/profiles/' + params.profileId,
            method: 'PATCH'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId', 'profileId'],
          pathParams: ['accountId', 'profileId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.profiles.update
       *
       * @desc Updates an existing view (profile).
       *
       * @alias analytics.management.profiles.update
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID to which the view (profile) belongs
       * @param  {string} params.profileId - ID of the view (profile) to be updated.
       * @param  {string} params.webPropertyId - Web property ID to which the view (profile) belongs
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      update: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/profiles/' + params.profileId,
            method: 'PUT'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId', 'profileId'],
          pathParams: ['accountId', 'profileId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    segments: {

      /**
       * analytics.management.segments.list
       *
       * @desc Lists segments to which the user has access.
       *
       * @alias analytics.management.segments.list
       * @memberOf! analytics(v3)
       *
       * @param  {object=} params - Parameters for request
       * @param  {integer=} params.max-results - The maximum number of segments to include in this response.
       * @param  {integer=} params.start-index - An index of the first segment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/segments',
            method: 'GET'
          },
          params: params,
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    unsampledReports: {

      /**
       * analytics.management.unsampledReports.get
       *
       * @desc Returns a single unsampled report.
       *
       * @alias analytics.management.unsampledReports.get
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID to retrieve unsampled report for.
       * @param  {string} params.profileId - View (Profile) ID to retrieve unsampled report for.
       * @param  {string} params.unsampledReportId - ID of the unsampled report to retrieve.
       * @param  {string} params.webPropertyId - Web property ID to retrieve unsampled reports for.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/profiles/' + params.profileId + '/unsampledReports/' + params.unsampledReportId,
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId', 'profileId', 'unsampledReportId'],
          pathParams: ['accountId', 'profileId', 'unsampledReportId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.unsampledReports.insert
       *
       * @desc Create a new unsampled report.
       *
       * @alias analytics.management.unsampledReports.insert
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID to create the unsampled report for.
       * @param  {string} params.profileId - View (Profile) ID to create the unsampled report for.
       * @param  {string} params.webPropertyId - Web property ID to create the unsampled report for.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      insert: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/profiles/' + params.profileId + '/unsampledReports',
            method: 'POST'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId', 'profileId'],
          pathParams: ['accountId', 'profileId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.unsampledReports.list
       *
       * @desc Lists unsampled reports to which the user has access.
       *
       * @alias analytics.management.unsampledReports.list
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID to retrieve unsampled reports for. Must be a specific account ID, ~all is not supported.
       * @param  {integer=} params.max-results - The maximum number of unsampled reports to include in this response.
       * @param  {string} params.profileId - View (Profile) ID to retrieve unsampled reports for. Must be a specific view (profile) ID, ~all is not supported.
       * @param  {integer=} params.start-index - An index of the first unsampled report to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
       * @param  {string} params.webPropertyId - Web property ID to retrieve unsampled reports for. Must be a specific web property ID, ~all is not supported.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/profiles/' + params.profileId + '/unsampledReports',
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId', 'profileId'],
          pathParams: ['accountId', 'profileId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    uploads: {

      /**
       * analytics.management.uploads.deleteUploadData
       *
       * @desc Delete data associated with a previous upload.
       *
       * @alias analytics.management.uploads.deleteUploadData
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account Id for the uploads to be deleted.
       * @param  {string} params.customDataSourceId - Custom data source Id for the uploads to be deleted.
       * @param  {string} params.webPropertyId - Web property Id for the uploads to be deleted.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      deleteUploadData: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/customDataSources/' + params.customDataSourceId + '/deleteUploadData',
            method: 'POST'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId', 'customDataSourceId'],
          pathParams: ['accountId', 'customDataSourceId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.uploads.get
       *
       * @desc List uploads to which the user has access.
       *
       * @alias analytics.management.uploads.get
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account Id for the upload to retrieve.
       * @param  {string} params.customDataSourceId - Custom data source Id for upload to retrieve.
       * @param  {string} params.uploadId - Upload Id to retrieve.
       * @param  {string} params.webPropertyId - Web property Id for the upload to retrieve.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/customDataSources/' + params.customDataSourceId + '/uploads/' + params.uploadId,
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId', 'customDataSourceId', 'uploadId'],
          pathParams: ['accountId', 'customDataSourceId', 'uploadId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.uploads.list
       *
       * @desc List uploads to which the user has access.
       *
       * @alias analytics.management.uploads.list
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account Id for the uploads to retrieve.
       * @param  {string} params.customDataSourceId - Custom data source Id for uploads to retrieve.
       * @param  {integer=} params.max-results - The maximum number of uploads to include in this response.
       * @param  {integer=} params.start-index - A 1-based index of the first upload to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
       * @param  {string} params.webPropertyId - Web property Id for the uploads to retrieve.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/customDataSources/' + params.customDataSourceId + '/uploads',
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId', 'customDataSourceId'],
          pathParams: ['accountId', 'customDataSourceId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.uploads.migrateDataImport
       *
       * @desc Migrate custom data source and data imports to latest version.
       *
       * @alias analytics.management.uploads.migrateDataImport
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account Id for migration.
       * @param  {string} params.customDataSourceId - Custom data source Id for migration.
       * @param  {string} params.webPropertyId - Web property Id for migration.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      migrateDataImport: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/customDataSources/' + params.customDataSourceId + '/migrateDataImport',
            method: 'POST'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId', 'customDataSourceId'],
          pathParams: ['accountId', 'customDataSourceId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.uploads.uploadData
       *
       * @desc Upload data for a custom data source.
       *
       * @alias analytics.management.uploads.uploadData
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account Id associated with the upload.
       * @param  {string} params.customDataSourceId - Custom data source Id to which the data being uploaded belongs.
       * @param  {string} params.webPropertyId - Web property UA-string associated with the upload.
       * @param  {object} params.media - Media object
       * @param  {string} params.media.mimeType - Media mime-type
       * @param  {string|object} params.media.body - Media body contents
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      uploadData: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/customDataSources/' + params.customDataSourceId + '/uploads',
            method: 'POST'
          },
          params: params,
          mediaUrl: 'https://www.googleapis.com/upload/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/customDataSources/' + params.customDataSourceId + '/uploads',
          requiredParams: ['accountId', 'webPropertyId', 'customDataSourceId'],
          pathParams: ['accountId', 'customDataSourceId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    webPropertyAdWordsLinks: {

      /**
       * analytics.management.webPropertyAdWordsLinks.delete
       *
       * @desc Deletes a web property-AdWords link.
       *
       * @alias analytics.management.webPropertyAdWordsLinks.delete
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - ID of the account which the given web property belongs to.
       * @param  {string} params.webPropertyAdWordsLinkId - Web property AdWords link ID.
       * @param  {string} params.webPropertyId - Web property ID to delete the AdWords link for.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      delete: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/entityAdWordsLinks/' + params.webPropertyAdWordsLinkId,
            method: 'DELETE'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId', 'webPropertyAdWordsLinkId'],
          pathParams: ['accountId', 'webPropertyAdWordsLinkId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.webPropertyAdWordsLinks.get
       *
       * @desc Returns a web property-AdWords link to which the user has access.
       *
       * @alias analytics.management.webPropertyAdWordsLinks.get
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - ID of the account which the given web property belongs to.
       * @param  {string} params.webPropertyAdWordsLinkId - Web property-AdWords link ID.
       * @param  {string} params.webPropertyId - Web property ID to retrieve the AdWords link for.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/entityAdWordsLinks/' + params.webPropertyAdWordsLinkId,
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId', 'webPropertyAdWordsLinkId'],
          pathParams: ['accountId', 'webPropertyAdWordsLinkId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.webPropertyAdWordsLinks.insert
       *
       * @desc Creates a webProperty-AdWords link.
       *
       * @alias analytics.management.webPropertyAdWordsLinks.insert
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - ID of the Google Analytics account to create the link for.
       * @param  {string} params.webPropertyId - Web property ID to create the link for.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      insert: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/entityAdWordsLinks',
            method: 'POST'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId'],
          pathParams: ['accountId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.webPropertyAdWordsLinks.list
       *
       * @desc Lists webProperty-AdWords links for a given web property.
       *
       * @alias analytics.management.webPropertyAdWordsLinks.list
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - ID of the account which the given web property belongs to.
       * @param  {integer=} params.max-results - The maximum number of webProperty-AdWords links to include in this response.
       * @param  {integer=} params.start-index - An index of the first webProperty-AdWords link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
       * @param  {string} params.webPropertyId - Web property ID to retrieve the AdWords links for.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/entityAdWordsLinks',
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId'],
          pathParams: ['accountId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.webPropertyAdWordsLinks.patch
       *
       * @desc Updates an existing webProperty-AdWords link. This method supports patch semantics.
       *
       * @alias analytics.management.webPropertyAdWordsLinks.patch
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - ID of the account which the given web property belongs to.
       * @param  {string} params.webPropertyAdWordsLinkId - Web property-AdWords link ID.
       * @param  {string} params.webPropertyId - Web property ID to retrieve the AdWords link for.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      patch: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/entityAdWordsLinks/' + params.webPropertyAdWordsLinkId,
            method: 'PATCH'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId', 'webPropertyAdWordsLinkId'],
          pathParams: ['accountId', 'webPropertyAdWordsLinkId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.webPropertyAdWordsLinks.update
       *
       * @desc Updates an existing webProperty-AdWords link.
       *
       * @alias analytics.management.webPropertyAdWordsLinks.update
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - ID of the account which the given web property belongs to.
       * @param  {string} params.webPropertyAdWordsLinkId - Web property-AdWords link ID.
       * @param  {string} params.webPropertyId - Web property ID to retrieve the AdWords link for.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      update: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/entityAdWordsLinks/' + params.webPropertyAdWordsLinkId,
            method: 'PUT'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId', 'webPropertyAdWordsLinkId'],
          pathParams: ['accountId', 'webPropertyAdWordsLinkId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    webproperties: {

      /**
       * analytics.management.webproperties.get
       *
       * @desc Gets a web property to which the user has access.
       *
       * @alias analytics.management.webproperties.get
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID to retrieve the web property for.
       * @param  {string} params.webPropertyId - ID to retrieve the web property for.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId,
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId'],
          pathParams: ['accountId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.webproperties.insert
       *
       * @desc Create a new property if the account has fewer than 20 properties. Web properties are visible in the Google Analytics interface only if they have at least one profile.
       *
       * @alias analytics.management.webproperties.insert
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID to create the web property for.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      insert: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties',
            method: 'POST'
          },
          params: params,
          requiredParams: ['accountId'],
          pathParams: ['accountId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.webproperties.list
       *
       * @desc Lists web properties to which the user has access.
       *
       * @alias analytics.management.webproperties.list
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID to retrieve web properties for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.
       * @param  {integer=} params.max-results - The maximum number of web properties to include in this response.
       * @param  {integer=} params.start-index - An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties',
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId'],
          pathParams: ['accountId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.webproperties.patch
       *
       * @desc Updates an existing web property. This method supports patch semantics.
       *
       * @alias analytics.management.webproperties.patch
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID to which the web property belongs
       * @param  {string} params.webPropertyId - Web property ID
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      patch: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId,
            method: 'PATCH'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId'],
          pathParams: ['accountId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.webproperties.update
       *
       * @desc Updates an existing web property.
       *
       * @alias analytics.management.webproperties.update
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID to which the web property belongs
       * @param  {string} params.webPropertyId - Web property ID
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      update: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId,
            method: 'PUT'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId'],
          pathParams: ['accountId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    webpropertyUserLinks: {

      /**
       * analytics.management.webpropertyUserLinks.delete
       *
       * @desc Removes a user from the given web property.
       *
       * @alias analytics.management.webpropertyUserLinks.delete
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID to delete the user link for.
       * @param  {string} params.linkId - Link ID to delete the user link for.
       * @param  {string} params.webPropertyId - Web Property ID to delete the user link for.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      delete: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/entityUserLinks/' + params.linkId,
            method: 'DELETE'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId', 'linkId'],
          pathParams: ['accountId', 'linkId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.webpropertyUserLinks.insert
       *
       * @desc Adds a new user to the given web property.
       *
       * @alias analytics.management.webpropertyUserLinks.insert
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID to create the user link for.
       * @param  {string} params.webPropertyId - Web Property ID to create the user link for.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      insert: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/entityUserLinks',
            method: 'POST'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId'],
          pathParams: ['accountId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.webpropertyUserLinks.list
       *
       * @desc Lists webProperty-user links for a given web property.
       *
       * @alias analytics.management.webpropertyUserLinks.list
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID which the given web property belongs to.
       * @param  {integer=} params.max-results - The maximum number of webProperty-user Links to include in this response.
       * @param  {integer=} params.start-index - An index of the first webProperty-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
       * @param  {string} params.webPropertyId - Web Property ID for the webProperty-user links to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/entityUserLinks',
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId'],
          pathParams: ['accountId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * analytics.management.webpropertyUserLinks.update
       *
       * @desc Updates permissions for an existing user on the given web property.
       *
       * @alias analytics.management.webpropertyUserLinks.update
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID to update the account-user link for.
       * @param  {string} params.linkId - Link ID to update the account-user link for.
       * @param  {string} params.webPropertyId - Web property ID to update the account-user link for.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      update: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/entityUserLinks/' + params.linkId,
            method: 'PUT'
          },
          params: params,
          requiredParams: ['accountId', 'webPropertyId', 'linkId'],
          pathParams: ['accountId', 'linkId', 'webPropertyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  this.metadata = {

    columns: {

      /**
       * analytics.metadata.columns.list
       *
       * @desc Lists all columns for a report type
       *
       * @alias analytics.metadata.columns.list
       * @memberOf! analytics(v3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.reportType - Report type. Allowed Values: 'ga'. Where 'ga' corresponds to the Core Reporting API
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/analytics/v3/metadata/' + params.reportType + '/columns',
            method: 'GET'
          },
          params: params,
          requiredParams: ['reportType'],
          pathParams: ['reportType'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  this.provisioning = {

    /**
     * analytics.provisioning.createAccountTicket
     *
     * @desc Creates an account ticket.
     *
     * @alias analytics.provisioning.createAccountTicket
     * @memberOf! analytics(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    createAccountTicket: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/analytics/v3/provisioning/createAccountTicket',
          method: 'POST'
        },
        params: params,
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * Exports Analytics object
 * @type Analytics
 */
module.exports = Analytics;