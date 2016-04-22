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
 * Google Partners API
 *
 * Lets advertisers search certified companies and create contact leads with them, and also audits the usage of clients.
 *
 * @example
 * var google = require('googleapis');
 * var partners = google.partners('v2');
 *
 * @namespace partners
 * @type {Function}
 * @version v2
 * @variation v2
 * @param {object=} options Options for Partners
 */
function Partners(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.userEvents = {

    /**
     * partners.userEvents.log
     *
     * @desc Logs a user event.
     *
     * @alias partners.userEvents.log
     * @memberOf! partners(v2)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    log: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://partners.googleapis.com/v2/userEvents:log',
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

  self.clientMessages = {

    /**
     * partners.clientMessages.log
     *
     * @desc Logs a generic message from the client, such as `Failed to render component`, `Profile page is running slow`, `More than 500 users have accessed this result.`, etc.
     *
     * @alias partners.clientMessages.log
     * @memberOf! partners(v2)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    log: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://partners.googleapis.com/v2/clientMessages:log',
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

  self.userStates = {

    /**
     * partners.userStates.list
     *
     * @desc Lists states for current user.
     *
     * @alias partners.userStates.list
     * @memberOf! partners(v2)
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.requestMetadata.userOverrides.ipAddress IP address to use instead of the user's geo-located IP address.
     * @param {string=} params.requestMetadata.userOverrides.userId Logged-in user ID to impersonate instead of the user's ID.
     * @param {string=} params.requestMetadata.locale Locale to use for the current request.
     * @param {string=} params.requestMetadata.partnersSessionId Google Partners session ID.
     * @param {string=} params.requestMetadata.experimentIds Experiment IDs the current request belongs to.
     * @param {string=} params.requestMetadata.trafficSource.trafficSourceId Identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
     * @param {string=} params.requestMetadata.trafficSource.trafficSubId Second level identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://partners.googleapis.com/v2/userStates',
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

  self.companies = {

    /**
     * partners.companies.get
     *
     * @desc Gets a company.
     *
     * @alias partners.companies.get
     * @memberOf! partners(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.companyId The ID of the company to retrieve.
     * @param {string=} params.requestMetadata.userOverrides.ipAddress IP address to use instead of the user's geo-located IP address.
     * @param {string=} params.requestMetadata.userOverrides.userId Logged-in user ID to impersonate instead of the user's ID.
     * @param {string=} params.requestMetadata.locale Locale to use for the current request.
     * @param {string=} params.requestMetadata.partnersSessionId Google Partners session ID.
     * @param {string=} params.requestMetadata.experimentIds Experiment IDs the current request belongs to.
     * @param {string=} params.requestMetadata.trafficSource.trafficSourceId Identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
     * @param {string=} params.requestMetadata.trafficSource.trafficSubId Second level identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
     * @param {string=} params.view The view of `Company` resource to be returned. This must not be `COMPANY_VIEW_UNSPECIFIED`.
     * @param {string=} params.orderBy How to order addresses within the returned company. Currently, only `address` and `address desc` is supported which will sorted by closest to farthest in distance from given address and farthest to closest distance from given address respectively.
     * @param {string=} params.currencyCode If the company's budget is in a different currency code than this one, then the converted budget is converted to this currency code.
     * @param {string=} params.address The address to use for sorting the company's addresses by proximity. If not given, the geo-located address of the request is used. Used when order_by is set.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://partners.googleapis.com/v2/companies/{companyId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['companyId'],
        pathParams: ['companyId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * partners.companies.list
     *
     * @desc Lists companies.
     *
     * @alias partners.companies.list
     * @memberOf! partners(v2)
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.requestMetadata.userOverrides.ipAddress IP address to use instead of the user's geo-located IP address.
     * @param {string=} params.requestMetadata.userOverrides.userId Logged-in user ID to impersonate instead of the user's ID.
     * @param {string=} params.requestMetadata.locale Locale to use for the current request.
     * @param {string=} params.requestMetadata.partnersSessionId Google Partners session ID.
     * @param {string=} params.requestMetadata.experimentIds Experiment IDs the current request belongs to.
     * @param {string=} params.requestMetadata.trafficSource.trafficSourceId Identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
     * @param {string=} params.requestMetadata.trafficSource.trafficSubId Second level identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
     * @param {integer=} params.pageSize Requested page size. Server may return fewer companies than requested. If unspecified, server picks an appropriate default.
     * @param {string=} params.pageToken A token identifying a page of results that the server returns. Typically, this is the value of `ListCompaniesResponse.next_page_token` returned from the previous call to ListCompanies.
     * @param {string=} params.companyName Company name to search for.
     * @param {string=} params.view The view of the `Company` resource to be returned. This must not be `COMPANY_VIEW_UNSPECIFIED`.
     * @param {string=} params.minMonthlyBudget.currencyCode The 3-letter currency code defined in ISO 4217.
     * @param {string=} params.minMonthlyBudget.units The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.
     * @param {integer=} params.minMonthlyBudget.nanos Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
     * @param {string=} params.maxMonthlyBudget.currencyCode The 3-letter currency code defined in ISO 4217.
     * @param {string=} params.maxMonthlyBudget.units The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.
     * @param {integer=} params.maxMonthlyBudget.nanos Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
     * @param {string=} params.industries List of industries the company can help with.
     * @param {string=} params.services List of services the company can help with.
     * @param {string=} params.languageCodes List of language codes that company can support. Only primary language subtags are accepted as defined by BCP 47 (IETF BCP 47, "Tags for Identifying Languages").
     * @param {string=} params.address The address to use when searching for companies. If not given, the geo-located address of the request is used.
     * @param {string=} params.orderBy How to order addresses within the returned companies. Currently, only `address` and `address desc` is supported which will sorted by closest to farthest in distance from given address and farthest to closest distance from given address respectively.
     * @param {string=} params.gpsMotivations List of reasons for using Google Partner Search to get companies.
     * @param {string=} params.websiteUrl Website URL that will help to find a better matched company. .
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://partners.googleapis.com/v2/companies',
          method: 'GET'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    leads: {

      /**
       * partners.companies.leads.create
       *
       * @desc Creates an advertiser lead for the given company ID.
       *
       * @alias partners.companies.leads.create
       * @memberOf! partners(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.companyId The ID of the company to contact.
       * @param {object} params.resource Request body data
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      create: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://partners.googleapis.com/v2/companies/{companyId}/leads',
            method: 'POST'
          },
          params: params,
          requiredParams: ['companyId'],
          pathParams: ['companyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };
}

module.exports = Partners;
