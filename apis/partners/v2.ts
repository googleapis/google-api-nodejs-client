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

import {
  createAPIRequest
} from '../../lib/apirequest';

/**
 * Google Partners API
 *
 * Searches certified companies and creates contact leads with them, and also audits the usage of clients.
 *
 * @example
 * const google = require('googleapis');
 * const partners = google.partners('v2');
 *
 * @namespace partners
 * @type {Function}
 * @version v2
 * @variation v2
 * @param {object=} options Options for Partners
 */
function Partners(options) { // eslint-disable-line
  const self = this;
  self._options = options || {};

  self.analytics = {

    /**
     * partners.analytics.list
     *
     * @desc Lists analytics data for a user's associated company. Should only be called within the context of an authorized logged in user.
     *
     * @alias partners.analytics.list
     * @memberOf! partners(v2)
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Requested page size. Server may return fewer analytics than requested. If unspecified or set to 0, default value is 30. Specifies the number of days in the date range when querying analytics. The `page_token` represents the end date of the date range and the start date is calculated using the `page_size` as the number of days BEFORE the end date. Must be a non-negative integer.
     * @param {string=} params.pageToken A token identifying a page of results that the server returns. Typically, this is the value of `ListAnalyticsResponse.next_page_token` returned from the previous call to ListAnalytics. Will be a date string in `YYYY-MM-DD` format representing the end date of the date range of results to return. If unspecified or set to "", default value is the current date.
     * @param {string=} params.requestMetadata.experimentIds Experiment IDs the current request belongs to.
     * @param {string=} params.requestMetadata.locale Locale to use for the current request.
     * @param {string=} params.requestMetadata.partnersSessionId Google Partners session ID.
     * @param {string=} params.requestMetadata.trafficSource.trafficSourceId Identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
     * @param {string=} params.requestMetadata.trafficSource.trafficSubId Second level identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
     * @param {string=} params.requestMetadata.userOverrides.ipAddress IP address to use instead of the user's geo-located IP address.
     * @param {string=} params.requestMetadata.userOverrides.userId Logged-in user ID to impersonate instead of the user's ID.
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

      const rootUrl = options.rootUrl || 'https://partners.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v2/analytics').replace(/([^:]\/)\/+/g, '$1'),
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
     * @param {partners(v2).LogMessageRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    log: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://partners.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v2/clientMessages:log').replace(/([^:]\/)\/+/g, '$1'),
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
     * @param {string=} params.address The address to use for sorting the company's addresses by proximity. If not given, the geo-located address of the request is used. Used when order_by is set.
     * @param {string} params.companyId The ID of the company to retrieve.
     * @param {string=} params.currencyCode If the company's budget is in a different currency code than this one, then the converted budget is converted to this currency code.
     * @param {string=} params.orderBy How to order addresses within the returned company. Currently, only `address` and `address desc` is supported which will sorted by closest to farthest in distance from given address and farthest to closest distance from given address respectively.
     * @param {string=} params.requestMetadata.experimentIds Experiment IDs the current request belongs to.
     * @param {string=} params.requestMetadata.locale Locale to use for the current request.
     * @param {string=} params.requestMetadata.partnersSessionId Google Partners session ID.
     * @param {string=} params.requestMetadata.trafficSource.trafficSourceId Identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
     * @param {string=} params.requestMetadata.trafficSource.trafficSubId Second level identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
     * @param {string=} params.requestMetadata.userOverrides.ipAddress IP address to use instead of the user's geo-located IP address.
     * @param {string=} params.requestMetadata.userOverrides.userId Logged-in user ID to impersonate instead of the user's ID.
     * @param {string=} params.view The view of `Company` resource to be returned. This must not be `COMPANY_VIEW_UNSPECIFIED`.
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

      const rootUrl = options.rootUrl || 'https://partners.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v2/companies/{companyId}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'GET'
        }, options),
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
     * @param {object} params Parameters for request
     * @param {string=} params.address The address to use when searching for companies. If not given, the geo-located address of the request is used.
     * @param {string=} params.companyName Company name to search for.
     * @param {string=} params.gpsMotivations List of reasons for using Google Partner Search to get companies.
     * @param {string=} params.industries List of industries the company can help with.
     * @param {string=} params.languageCodes List of language codes that company can support. Only primary language subtags are accepted as defined by <a href="https://tools.ietf.org/html/bcp47">BCP 47</a> (IETF BCP 47, "Tags for Identifying Languages").
     * @param {string=} params.maxMonthlyBudget.currencyCode The 3-letter currency code defined in ISO 4217.
     * @param {integer=} params.maxMonthlyBudget.nanos Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
     * @param {string=} params.maxMonthlyBudget.units The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.
     * @param {string=} params.minMonthlyBudget.currencyCode The 3-letter currency code defined in ISO 4217.
     * @param {integer=} params.minMonthlyBudget.nanos Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
     * @param {string=} params.minMonthlyBudget.units The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.
     * @param {string=} params.orderBy How to order addresses within the returned companies. Currently, only `address` and `address desc` is supported which will sorted by closest to farthest in distance from given address and farthest to closest distance from given address respectively.
     * @param {integer=} params.pageSize Requested page size. Server may return fewer companies than requested. If unspecified, server picks an appropriate default.
     * @param {string=} params.pageToken A token identifying a page of results that the server returns. Typically, this is the value of `ListCompaniesResponse.next_page_token` returned from the previous call to ListCompanies.
     * @param {string=} params.requestMetadata.experimentIds Experiment IDs the current request belongs to.
     * @param {string=} params.requestMetadata.locale Locale to use for the current request.
     * @param {string=} params.requestMetadata.partnersSessionId Google Partners session ID.
     * @param {string=} params.requestMetadata.trafficSource.trafficSourceId Identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
     * @param {string=} params.requestMetadata.trafficSource.trafficSubId Second level identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
     * @param {string=} params.requestMetadata.userOverrides.ipAddress IP address to use instead of the user's geo-located IP address.
     * @param {string=} params.requestMetadata.userOverrides.userId Logged-in user ID to impersonate instead of the user's ID.
     * @param {string=} params.services List of services that the returned agencies should provide. If this is not empty, any returned agency must have at least one of these services, or one of the specializations in the "specializations" field.
     * @param {string=} params.specializations List of specializations that the returned agencies should provide. If this is not empty, any returned agency must have at least one of these specializations, or one of the services in the "services" field.
     * @param {string=} params.view The view of the `Company` resource to be returned. This must not be `COMPANY_VIEW_UNSPECIFIED`.
     * @param {string=} params.websiteUrl Website URL that will help to find a better matched company. .
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

      const rootUrl = options.rootUrl || 'https://partners.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v2/companies').replace(/([^:]\/)\/+/g, '$1'),
          method: 'GET'
        }, options),
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
       * @param {partners(v2).CreateLeadRequest} params.resource Request body data
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

        const rootUrl = options.rootUrl || 'https://partners.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v2/companies/{companyId}/leads').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          }, options),
          params: params,
          requiredParams: ['companyId'],
          pathParams: ['companyId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  self.exams = {

    /**
     * partners.exams.getToken
     *
     * @desc Gets an Exam Token for a Partner's user to take an exam in the Exams System
     *
     * @alias partners.exams.getToken
     * @memberOf! partners(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.examType The exam type we are requesting a token for.
     * @param {string=} params.requestMetadata.experimentIds Experiment IDs the current request belongs to.
     * @param {string=} params.requestMetadata.locale Locale to use for the current request.
     * @param {string=} params.requestMetadata.partnersSessionId Google Partners session ID.
     * @param {string=} params.requestMetadata.trafficSource.trafficSourceId Identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
     * @param {string=} params.requestMetadata.trafficSource.trafficSubId Second level identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
     * @param {string=} params.requestMetadata.userOverrides.ipAddress IP address to use instead of the user's geo-located IP address.
     * @param {string=} params.requestMetadata.userOverrides.userId Logged-in user ID to impersonate instead of the user's ID.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getToken: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://partners.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v2/exams/{examType}/token').replace(/([^:]\/)\/+/g, '$1'),
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['examType'],
        pathParams: ['examType'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.leads = {

    /**
     * partners.leads.list
     *
     * @desc Lists advertiser leads for a user's associated company. Should only be called within the context of an authorized logged in user.
     *
     * @alias partners.leads.list
     * @memberOf! partners(v2)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.orderBy How to order Leads. Currently, only `create_time` and `create_time desc` are supported
     * @param {integer=} params.pageSize Requested page size. Server may return fewer leads than requested. If unspecified, server picks an appropriate default.
     * @param {string=} params.pageToken A token identifying a page of results that the server returns. Typically, this is the value of `ListLeadsResponse.next_page_token` returned from the previous call to ListLeads.
     * @param {string=} params.requestMetadata.experimentIds Experiment IDs the current request belongs to.
     * @param {string=} params.requestMetadata.locale Locale to use for the current request.
     * @param {string=} params.requestMetadata.partnersSessionId Google Partners session ID.
     * @param {string=} params.requestMetadata.trafficSource.trafficSourceId Identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
     * @param {string=} params.requestMetadata.trafficSource.trafficSubId Second level identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
     * @param {string=} params.requestMetadata.userOverrides.ipAddress IP address to use instead of the user's geo-located IP address.
     * @param {string=} params.requestMetadata.userOverrides.userId Logged-in user ID to impersonate instead of the user's ID.
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

      const rootUrl = options.rootUrl || 'https://partners.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v2/leads').replace(/([^:]\/)\/+/g, '$1'),
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

  self.offers = {

    /**
     * partners.offers.list
     *
     * @desc Lists the Offers available for the current user
     *
     * @alias partners.offers.list
     * @memberOf! partners(v2)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.requestMetadata.experimentIds Experiment IDs the current request belongs to.
     * @param {string=} params.requestMetadata.locale Locale to use for the current request.
     * @param {string=} params.requestMetadata.partnersSessionId Google Partners session ID.
     * @param {string=} params.requestMetadata.trafficSource.trafficSourceId Identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
     * @param {string=} params.requestMetadata.trafficSource.trafficSubId Second level identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
     * @param {string=} params.requestMetadata.userOverrides.ipAddress IP address to use instead of the user's geo-located IP address.
     * @param {string=} params.requestMetadata.userOverrides.userId Logged-in user ID to impersonate instead of the user's ID.
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

      const rootUrl = options.rootUrl || 'https://partners.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v2/offers').replace(/([^:]\/)\/+/g, '$1'),
          method: 'GET'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },
    history: {

      /**
       * partners.offers.history.list
       *
       * @desc Lists the Historical Offers for the current user (or user's entire company)
       *
       * @alias partners.offers.history.list
       * @memberOf! partners(v2)
       *
       * @param {object} params Parameters for request
       * @param {boolean=} params.entireCompany if true, show history for the entire company.  Requires user to be admin.
       * @param {string=} params.orderBy Comma-separated list of fields to order by, e.g.: "foo,bar,baz". Use "foo desc" to sort descending. List of valid field names is: name, offer_code, expiration_time, status,     last_modified_time, sender_name, creation_time, country_code,     offer_type.
       * @param {integer=} params.pageSize Maximum number of rows to return per page.
       * @param {string=} params.pageToken Token to retrieve a specific page.
       * @param {string=} params.requestMetadata.experimentIds Experiment IDs the current request belongs to.
       * @param {string=} params.requestMetadata.locale Locale to use for the current request.
       * @param {string=} params.requestMetadata.partnersSessionId Google Partners session ID.
       * @param {string=} params.requestMetadata.trafficSource.trafficSourceId Identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
       * @param {string=} params.requestMetadata.trafficSource.trafficSubId Second level identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
       * @param {string=} params.requestMetadata.userOverrides.ipAddress IP address to use instead of the user's geo-located IP address.
       * @param {string=} params.requestMetadata.userOverrides.userId Logged-in user ID to impersonate instead of the user's ID.
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

        const rootUrl = options.rootUrl || 'https://partners.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v2/offers/history').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: [],
          pathParams: [],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

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
     * @param {partners(v2).LogUserEventRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    log: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://partners.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v2/userEvents:log').replace(/([^:]\/)\/+/g, '$1'),
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

  self.userStates = {

    /**
     * partners.userStates.list
     *
     * @desc Lists states for current user.
     *
     * @alias partners.userStates.list
     * @memberOf! partners(v2)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.requestMetadata.experimentIds Experiment IDs the current request belongs to.
     * @param {string=} params.requestMetadata.locale Locale to use for the current request.
     * @param {string=} params.requestMetadata.partnersSessionId Google Partners session ID.
     * @param {string=} params.requestMetadata.trafficSource.trafficSourceId Identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
     * @param {string=} params.requestMetadata.trafficSource.trafficSubId Second level identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
     * @param {string=} params.requestMetadata.userOverrides.ipAddress IP address to use instead of the user's geo-located IP address.
     * @param {string=} params.requestMetadata.userOverrides.userId Logged-in user ID to impersonate instead of the user's ID.
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

      const rootUrl = options.rootUrl || 'https://partners.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v2/userStates').replace(/([^:]\/)\/+/g, '$1'),
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

  self.users = {

    /**
     * partners.users.createCompanyRelation
     *
     * @desc Creates a user's company relation. Affiliates the user to a company.
     *
     * @alias partners.users.createCompanyRelation
     * @memberOf! partners(v2)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.requestMetadata.experimentIds Experiment IDs the current request belongs to.
     * @param {string=} params.requestMetadata.locale Locale to use for the current request.
     * @param {string=} params.requestMetadata.partnersSessionId Google Partners session ID.
     * @param {string=} params.requestMetadata.trafficSource.trafficSourceId Identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
     * @param {string=} params.requestMetadata.trafficSource.trafficSubId Second level identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
     * @param {string=} params.requestMetadata.userOverrides.ipAddress IP address to use instead of the user's geo-located IP address.
     * @param {string=} params.requestMetadata.userOverrides.userId Logged-in user ID to impersonate instead of the user's ID.
     * @param {string} params.userId The ID of the user. Can be set to <code>me</code> to mean the currently authenticated user.
     * @param {partners(v2).CompanyRelation} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    createCompanyRelation: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://partners.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v2/users/{userId}/companyRelation').replace(/([^:]\/)\/+/g, '$1'),
          method: 'PUT'
        }, options),
        params: params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * partners.users.deleteCompanyRelation
     *
     * @desc Deletes a user's company relation. Unaffiliaites the user from a company.
     *
     * @alias partners.users.deleteCompanyRelation
     * @memberOf! partners(v2)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.requestMetadata.experimentIds Experiment IDs the current request belongs to.
     * @param {string=} params.requestMetadata.locale Locale to use for the current request.
     * @param {string=} params.requestMetadata.partnersSessionId Google Partners session ID.
     * @param {string=} params.requestMetadata.trafficSource.trafficSourceId Identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
     * @param {string=} params.requestMetadata.trafficSource.trafficSubId Second level identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
     * @param {string=} params.requestMetadata.userOverrides.ipAddress IP address to use instead of the user's geo-located IP address.
     * @param {string=} params.requestMetadata.userOverrides.userId Logged-in user ID to impersonate instead of the user's ID.
     * @param {string} params.userId The ID of the user. Can be set to <code>me</code> to mean the currently authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    deleteCompanyRelation: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://partners.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v2/users/{userId}/companyRelation').replace(/([^:]\/)\/+/g, '$1'),
          method: 'DELETE'
        }, options),
        params: params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * partners.users.get
     *
     * @desc Gets a user.
     *
     * @alias partners.users.get
     * @memberOf! partners(v2)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.requestMetadata.experimentIds Experiment IDs the current request belongs to.
     * @param {string=} params.requestMetadata.locale Locale to use for the current request.
     * @param {string=} params.requestMetadata.partnersSessionId Google Partners session ID.
     * @param {string=} params.requestMetadata.trafficSource.trafficSourceId Identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
     * @param {string=} params.requestMetadata.trafficSource.trafficSubId Second level identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
     * @param {string=} params.requestMetadata.userOverrides.ipAddress IP address to use instead of the user's geo-located IP address.
     * @param {string=} params.requestMetadata.userOverrides.userId Logged-in user ID to impersonate instead of the user's ID.
     * @param {string} params.userId Identifier of the user. Can be set to <code>me</code> to mean the currently authenticated user.
     * @param {string=} params.userView Specifies what parts of the user information to return.
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

      const rootUrl = options.rootUrl || 'https://partners.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v2/users/{userId}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * partners.users.updateProfile
     *
     * @desc Updates a user's profile. A user can only update their own profile and should only be called within the context of a logged in user.
     *
     * @alias partners.users.updateProfile
     * @memberOf! partners(v2)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.requestMetadata.experimentIds Experiment IDs the current request belongs to.
     * @param {string=} params.requestMetadata.locale Locale to use for the current request.
     * @param {string=} params.requestMetadata.partnersSessionId Google Partners session ID.
     * @param {string=} params.requestMetadata.trafficSource.trafficSourceId Identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
     * @param {string=} params.requestMetadata.trafficSource.trafficSubId Second level identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
     * @param {string=} params.requestMetadata.userOverrides.ipAddress IP address to use instead of the user's geo-located IP address.
     * @param {string=} params.requestMetadata.userOverrides.userId Logged-in user ID to impersonate instead of the user's ID.
     * @param {partners(v2).UserProfile} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updateProfile: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://partners.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v2/users/profile').replace(/([^:]\/)\/+/g, '$1'),
          method: 'PATCH'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.v2 = {

    /**
     * partners.getPartnersstatus
     *
     * @desc Gets Partners Status of the logged in user's agency. Should only be called if the logged in user is the admin of the agency.
     *
     * @alias partners.getPartnersstatus
     * @memberOf! partners(v2)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.requestMetadata.experimentIds Experiment IDs the current request belongs to.
     * @param {string=} params.requestMetadata.locale Locale to use for the current request.
     * @param {string=} params.requestMetadata.partnersSessionId Google Partners session ID.
     * @param {string=} params.requestMetadata.trafficSource.trafficSourceId Identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
     * @param {string=} params.requestMetadata.trafficSource.trafficSubId Second level identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
     * @param {string=} params.requestMetadata.userOverrides.ipAddress IP address to use instead of the user's geo-located IP address.
     * @param {string=} params.requestMetadata.userOverrides.userId Logged-in user ID to impersonate instead of the user's ID.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getPartnersstatus: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://partners.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v2/partnersstatus').replace(/([^:]\/)\/+/g, '$1'),
          method: 'GET'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * partners.updateCompanies
     *
     * @desc Update company. Should only be called within the context of an authorized logged in user.
     *
     * @alias partners.updateCompanies
     * @memberOf! partners(v2)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.requestMetadata.experimentIds Experiment IDs the current request belongs to.
     * @param {string=} params.requestMetadata.locale Locale to use for the current request.
     * @param {string=} params.requestMetadata.partnersSessionId Google Partners session ID.
     * @param {string=} params.requestMetadata.trafficSource.trafficSourceId Identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
     * @param {string=} params.requestMetadata.trafficSource.trafficSubId Second level identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
     * @param {string=} params.requestMetadata.userOverrides.ipAddress IP address to use instead of the user's geo-located IP address.
     * @param {string=} params.requestMetadata.userOverrides.userId Logged-in user ID to impersonate instead of the user's ID.
     * @param {string=} params.updateMask Standard field mask for the set of fields to be updated. Required with at least 1 value in FieldMask's paths.
     * @param {partners(v2).Company} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updateCompanies: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://partners.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v2/companies').replace(/([^:]\/)\/+/g, '$1'),
          method: 'PATCH'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * partners.updateLeads
     *
     * @desc Updates the specified lead.
     *
     * @alias partners.updateLeads
     * @memberOf! partners(v2)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.requestMetadata.experimentIds Experiment IDs the current request belongs to.
     * @param {string=} params.requestMetadata.locale Locale to use for the current request.
     * @param {string=} params.requestMetadata.partnersSessionId Google Partners session ID.
     * @param {string=} params.requestMetadata.trafficSource.trafficSourceId Identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
     * @param {string=} params.requestMetadata.trafficSource.trafficSubId Second level identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
     * @param {string=} params.requestMetadata.userOverrides.ipAddress IP address to use instead of the user's geo-located IP address.
     * @param {string=} params.requestMetadata.userOverrides.userId Logged-in user ID to impersonate instead of the user's ID.
     * @param {string=} params.updateMask Standard field mask for the set of fields to be updated. Required with at least 1 value in FieldMask's paths. Only `state` and `adwords_customer_id` are currently supported.
     * @param {partners(v2).Lead} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updateLeads: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://partners.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v2/leads').replace(/([^:]\/)\/+/g, '$1'),
          method: 'PATCH'
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
 * @typedef AdWordsManagerAccountInfo
 * @memberOf! partners(v2)
 * @type object
 * @property {string} customerName Name of the customer this account represents.
 * @property {string} id The AdWords Manager Account id.
 */

/**
 * @typedef Analytics
 * @memberOf! partners(v2)
 * @type object
* @property {partners(v2).AnalyticsDataPoint} contacts Instances of users contacting the `Company`
on the specified date.
* @property {partners(v2).Date} eventDate Date on which these events occurred.
* @property {partners(v2).AnalyticsDataPoint} profileViews Instances of users viewing the `Company` profile
on the specified date.
* @property {partners(v2).AnalyticsDataPoint} searchViews Instances of users seeing the `Company` in Google Partners Search results
on the specified date.
*/

/**
 * @typedef AnalyticsDataPoint
 * @memberOf! partners(v2)
 * @type object
* @property {integer} eventCount Number of times the type of event occurred.
Meaning depends on context (e.g. profile views, contacts, etc.).
* @property {partners(v2).LatLng[]} eventLocations Location information of where these events occurred.
*/

/**
 * @typedef AnalyticsSummary
 * @memberOf! partners(v2)
 * @type object
* @property {integer} contactsCount Aggregated number of times users contacted the `Company`
for given date range.
* @property {integer} profileViewsCount Aggregated number of profile views for the `Company` for given date range.
* @property {integer} searchViewsCount Aggregated number of times users saw the `Company`
in Google Partners Search results for given date range.
*/

/**
 * @typedef AvailableOffer
 * @memberOf! partners(v2)
 * @type object
 * @property {integer} available The number of codes for this offer that are available for distribution.
 * @property {partners(v2).CountryOfferInfo[]} countryOfferInfos Offer info by country.
 * @property {string} description Description of the offer.
 * @property {string} id ID of this offer.
 * @property {integer} maxAccountAge The maximum age of an account [in days] to be eligible.
 * @property {string} name Name of the offer.
 * @property {string} offerLevel Level of this offer.
 * @property {string} offerType Type of offer.
 * @property {partners(v2).OfferCustomer[]} qualifiedCustomer Customers who qualify for this offer.
 * @property {boolean} qualifiedCustomersComplete Whether or not the list of qualified customers is definitely complete.
 * @property {boolean} showSpecialOfferCopy Should special text be shown on the offers page.
 * @property {string} terms Terms of the offer.
 */

/**
 * @typedef Certification
 * @memberOf! partners(v2)
 * @type object
 * @property {boolean} achieved Whether this certification has been achieved.
 * @property {string} certificationType The type of certification, the area of expertise.
 * @property {string} expiration Date this certification is due to expire.
 * @property {string} lastAchieved The date the user last achieved certification.
 * @property {boolean} warning Whether this certification is in the state of warning.
 */

/**
 * @typedef CertificationExamStatus
 * @memberOf! partners(v2)
 * @type object
 * @property {integer} numberUsersPass The number of people who have passed the certification exam.
 * @property {string} type The type of certification exam.
 */

/**
 * @typedef CertificationStatus
 * @memberOf! partners(v2)
 * @type object
 * @property {partners(v2).CertificationExamStatus[]} examStatuses List of certification exam statuses.
 * @property {boolean} isCertified Whether certification is passing.
 * @property {string} type The type of the certification.
 * @property {integer} userCount Number of people who are certified,
 */

/**
 * @typedef Company
 * @memberOf! partners(v2)
 * @type object
* @property {string[]} additionalWebsites URL of the company&#39;s additional websites used to verify the dynamic badges.
These are stored as full URLs as entered by the user, but only the TLD will
be used for the actual verification.
* @property {string[]} autoApprovalEmailDomains Email domains that allow users with a matching email address to get
auto-approved for associating with this company.
* @property {string} badgeTier Partner badge tier
* @property {partners(v2).CertificationStatus[]} certificationStatuses The list of Google Partners certification statuses for the company.
* @property {string[]} companyTypes Company type labels listed on the company&#39;s profile.
* @property {partners(v2).Money} convertedMinMonthlyBudget The minimum monthly budget that the company accepts for partner business,
converted to the requested currency code.
* @property {string} id The ID of the company.
* @property {string[]} industries Industries the company can help with.
* @property {partners(v2).LocalizedCompanyInfo[]} localizedInfos The list of localized info for the company.
* @property {partners(v2).Location[]} locations The list of all company locations.
If set, must include the
primary_location
in the list.
* @property {string} name The name of the company.
* @property {partners(v2).Money} originalMinMonthlyBudget The unconverted minimum monthly budget that the company accepts for partner
business.
* @property {string} primaryAdwordsManagerAccountId The Primary AdWords Manager Account id.
* @property {string} primaryLanguageCode The primary language code of the company, as defined by
&lt;a href=&quot;https://tools.ietf.org/html/bcp47&quot;&gt;BCP 47&lt;/a&gt;
(IETF BCP 47, &quot;Tags for Identifying Languages&quot;).
* @property {partners(v2).Location} primaryLocation The primary location of the company.
* @property {string} profileStatus The public viewability status of the company&#39;s profile.
* @property {partners(v2).PublicProfile} publicProfile Basic information from the company&#39;s public profile.
* @property {partners(v2).Rank[]} ranks Information related to the ranking of the company within the list of
companies.
* @property {string[]} services Services the company can help with.
* @property {partners(v2).SpecializationStatus[]} specializationStatus The list of Google Partners specialization statuses for the company.
* @property {string} websiteUrl URL of the company&#39;s website.
*/

/**
 * @typedef CompanyRelation
 * @memberOf! partners(v2)
 * @type object
* @property {string} address The primary address for this company.
* @property {string} badgeTier Whether the company is a Partner.
* @property {boolean} companyAdmin Indicates if the user is an admin for this company.
* @property {string} companyId The ID of the company. There may be no id if this is a
pending company.5
* @property {string} creationTime The timestamp of when affiliation was requested.
@OutputOnly
* @property {string} internalCompanyId The internal company ID.
Only available for a whitelisted set of api clients.
* @property {boolean} isPending The flag that indicates if the company is pending verification.
* @property {string} logoUrl A URL to a profile photo, e.g. a G+ profile photo.
* @property {string} managerAccount The AdWords manager account # associated this company.
* @property {string} name The name (in the company&#39;s primary language) for the company.
* @property {string} phoneNumber The phone number for the company&#39;s primary address.
* @property {partners(v2).Location} primaryAddress The primary location of the company.
* @property {string} primaryCountryCode The primary country code of the company.
* @property {string} primaryLanguageCode The primary language code of the company.
* @property {string} resolvedTimestamp The timestamp when the user was approved.
@OutputOnly
* @property {string[]} segment The segment the company is classified as.
* @property {partners(v2).SpecializationStatus[]} specializationStatus The list of Google Partners specialization statuses for the company.
* @property {string} state The state of relationship, in terms of approvals.
* @property {string} website The website URL for this company.
*/

/**
 * @typedef CountryOfferInfo
 * @memberOf! partners(v2)
 * @type object
 * @property {string} getYAmount (localized) Get Y amount for that country&#39;s offer.
 * @property {string} offerCountryCode Country code for which offer codes may be requested.
 * @property {string} offerType Type of offer country is eligible for.
 * @property {string} spendXAmount (localized) Spend X amount for that country&#39;s offer.
 */

/**
 * @typedef CreateLeadRequest
 * @memberOf! partners(v2)
 * @type object
* @property {partners(v2).Lead} lead The lead resource. The `LeadType` must not be `LEAD_TYPE_UNSPECIFIED`
and either `email` or `phone_number` must be provided.
* @property {partners(v2).RecaptchaChallenge} recaptchaChallenge &lt;a href=&quot;https://www.google.com/recaptcha/&quot;&gt;reCaptcha&lt;/a&gt; challenge info.
* @property {partners(v2).RequestMetadata} requestMetadata Current request metadata.
*/

/**
 * @typedef CreateLeadResponse
 * @memberOf! partners(v2)
 * @type object
* @property {partners(v2).Lead} lead Lead that was created depending on the outcome of
&lt;a href=&quot;https://www.google.com/recaptcha/&quot;&gt;reCaptcha&lt;/a&gt; validation.
* @property {string} recaptchaStatus The outcome of &lt;a href=&quot;https://www.google.com/recaptcha/&quot;&gt;reCaptcha&lt;/a&gt;
validation.
* @property {partners(v2).ResponseMetadata} responseMetadata Current response metadata.
*/

/**
 * @typedef Date
 * @memberOf! partners(v2)
 * @type object
* @property {integer} day Day of month. Must be from 1 to 31 and valid for the year and month, or 0
if specifying a year/month where the day is not significant.
* @property {integer} month Month of year. Must be from 1 to 12.
* @property {integer} year Year of date. Must be from 1 to 9999, or 0 if specifying a date without
a year.
*/

/**
 * @typedef DebugInfo
 * @memberOf! partners(v2)
 * @type object
 * @property {string} serverInfo Info about the server that serviced this request.
 * @property {string} serverTraceInfo Server-side debug stack trace.
 * @property {string} serviceUrl URL of the service that handled this request.
 */

/**
 * @typedef Empty
 * @memberOf! partners(v2)
 * @type object
 */

/**
 * @typedef EventData
 * @memberOf! partners(v2)
 * @type object
 * @property {string} key Data type.
 * @property {string[]} values Data values.
 */

/**
 * @typedef ExamStatus
 * @memberOf! partners(v2)
 * @type object
 * @property {string} examType The type of the exam.
 * @property {string} expiration Date this exam is due to expire.
 * @property {string} lastPassed The date the user last passed this exam.
 * @property {boolean} passed Whether this exam has been passed and not expired.
 * @property {string} taken The date the user last taken this exam.
 * @property {boolean} warning Whether this exam is in the state of warning.
 */

/**
 * @typedef ExamToken
 * @memberOf! partners(v2)
 * @type object
 * @property {string} examId The id of the exam the token is for.
 * @property {string} examType The type of the exam the token belongs to.
 * @property {string} token The token, only present if the user has access to the exam.
 */

/**
 * @typedef GetCompanyResponse
 * @memberOf! partners(v2)
 * @type object
 * @property {partners(v2).Company} company The company.
 * @property {partners(v2).ResponseMetadata} responseMetadata Current response metadata.
 */

/**
 * @typedef GetPartnersStatusResponse
 * @memberOf! partners(v2)
 * @type object
 * @property {partners(v2).ResponseMetadata} responseMetadata Current response metadata.
 */

/**
 * @typedef HistoricalOffer
 * @memberOf! partners(v2)
 * @type object
 * @property {string} adwordsUrl Client&#39;s AdWords page URL.
 * @property {string} clientEmail Email address for client.
 * @property {string} clientId ID of client.
 * @property {string} clientName Name of the client.
 * @property {string} creationTime Time offer was first created.
 * @property {string} expirationTime Time this offer expires.
 * @property {string} lastModifiedTime Time last action was taken.
 * @property {string} offerCode Offer code.
 * @property {string} offerCountryCode Country Code for the offer country.
 * @property {string} offerType Type of offer.
 * @property {string} senderName Name (First + Last) of the partners user to whom the incentive is allocated.
 * @property {string} status Status of the offer.
 */

/**
 * @typedef LatLng
 * @memberOf! partners(v2)
 * @type object
 * @property {number} latitude The latitude in degrees. It must be in the range [-90.0, +90.0].
 * @property {number} longitude The longitude in degrees. It must be in the range [-180.0, +180.0].
 */

/**
 * @typedef Lead
 * @memberOf! partners(v2)
 * @type object
* @property {string} adwordsCustomerId The AdWords Customer ID of the lead.
* @property {string} comments Comments lead source gave.
* @property {string} createTime Timestamp of when this lead was created.
* @property {string} email Email address of lead source.
* @property {string} familyName Last name of lead source.
* @property {string} givenName First name of lead source.
* @property {string[]} gpsMotivations List of reasons for using Google Partner Search and creating a lead.
* @property {string} id ID of the lead.
* @property {string} languageCode Language code of the lead&#39;s language preference, as defined by
&lt;a href=&quot;https://tools.ietf.org/html/bcp47&quot;&gt;BCP 47&lt;/a&gt;
(IETF BCP 47, &quot;Tags for Identifying Languages&quot;).
* @property {boolean} marketingOptIn Whether or not the lead signed up for marketing emails
* @property {partners(v2).Money} minMonthlyBudget The minimum monthly budget lead source is willing to spend.
* @property {string} phoneNumber Phone number of lead source.
* @property {string} state The lead&#39;s state in relation to the company.
* @property {string} type Type of lead.
* @property {string} websiteUrl Website URL of lead source.
*/

/**
 * @typedef ListAnalyticsResponse
 * @memberOf! partners(v2)
 * @type object
* @property {partners(v2).Analytics[]} analytics The list of analytics.
Sorted in ascending order of
Analytics.event_date.
* @property {partners(v2).AnalyticsSummary} analyticsSummary Aggregated information across the response&#39;s
analytics.
* @property {string} nextPageToken A token to retrieve next page of results.
Pass this value in the `ListAnalyticsRequest.page_token` field in the
subsequent call to
ListAnalytics to retrieve the
next page of results.
* @property {partners(v2).ResponseMetadata} responseMetadata Current response metadata.
*/

/**
 * @typedef ListCompaniesResponse
 * @memberOf! partners(v2)
 * @type object
* @property {partners(v2).Company[]} companies The list of companies.
* @property {string} nextPageToken A token to retrieve next page of results.
Pass this value in the `ListCompaniesRequest.page_token` field in the
subsequent call to
ListCompanies to retrieve the
next page of results.
* @property {partners(v2).ResponseMetadata} responseMetadata Current response metadata.
*/

/**
 * @typedef ListLeadsResponse
 * @memberOf! partners(v2)
 * @type object
* @property {partners(v2).Lead[]} leads The list of leads.
* @property {string} nextPageToken A token to retrieve next page of results.
Pass this value in the `ListLeadsRequest.page_token` field in the
subsequent call to
ListLeads to retrieve the
next page of results.
* @property {partners(v2).ResponseMetadata} responseMetadata Current response metadata.
* @property {integer} totalSize The total count of leads for the given company.
*/

/**
 * @typedef ListOffersHistoryResponse
 * @memberOf! partners(v2)
 * @type object
 * @property {boolean} canShowEntireCompany True if the user has the option to show entire company history.
 * @property {string} nextPageToken Supply this token in a ListOffersHistoryRequest to retrieve the next page.
 * @property {partners(v2).HistoricalOffer[]} offers Historical offers meeting request.
 * @property {partners(v2).ResponseMetadata} responseMetadata Current response metadata.
 * @property {boolean} showingEntireCompany True if this response is showing entire company history.
 * @property {integer} totalResults Number of results across all pages.
 */

/**
 * @typedef ListOffersResponse
 * @memberOf! partners(v2)
 * @type object
 * @property {partners(v2).AvailableOffer[]} availableOffers Available Offers to be distributed.
 * @property {string} noOfferReason Reason why no Offers are available.
 * @property {partners(v2).ResponseMetadata} responseMetadata Current response metadata.
 */

/**
 * @typedef ListUserStatesResponse
 * @memberOf! partners(v2)
 * @type object
 * @property {partners(v2).ResponseMetadata} responseMetadata Current response metadata.
 * @property {string[]} userStates User&#39;s states.
 */

/**
 * @typedef LocalizedCompanyInfo
 * @memberOf! partners(v2)
 * @type object
* @property {string[]} countryCodes List of country codes for the localized company info.
* @property {string} displayName Localized display name.
* @property {string} languageCode Language code of the localized company info, as defined by
&lt;a href=&quot;https://tools.ietf.org/html/bcp47&quot;&gt;BCP 47&lt;/a&gt;
(IETF BCP 47, &quot;Tags for Identifying Languages&quot;).
* @property {string} overview Localized brief description that the company uses to advertise themselves.
*/

/**
 * @typedef Location
 * @memberOf! partners(v2)
 * @type object
* @property {string} address The single string version of the address.
* @property {string[]} addressLine The following address lines represent the most specific part of any
address.
* @property {string} administrativeArea Top-level administrative subdivision of this country.
* @property {string} dependentLocality Dependent locality or sublocality. Used for UK dependent localities, or
neighborhoods or boroughs in other locations.
* @property {string} languageCode Language code of the address. Should be in BCP 47 format.
* @property {partners(v2).LatLng} latLng The latitude and longitude of the location, in degrees.
* @property {string} locality Generally refers to the city/town portion of an address.
* @property {string} postalCode Values are frequently alphanumeric.
* @property {string} regionCode CLDR (Common Locale Data Repository) region code .
* @property {string} sortingCode Use of this code is very country-specific, but will refer to a secondary
classification code for sorting mail.
*/

/**
 * @typedef LogMessageRequest
 * @memberOf! partners(v2)
 * @type object
 * @property {object} clientInfo Map of client info, such as URL, browser navigator, browser platform, etc.
 * @property {string} details Details about the client message.
 * @property {string} level Message level of client message.
 * @property {partners(v2).RequestMetadata} requestMetadata Current request metadata.
 */

/**
 * @typedef LogMessageResponse
 * @memberOf! partners(v2)
 * @type object
 * @property {partners(v2).ResponseMetadata} responseMetadata Current response metadata.
 */

/**
 * @typedef LogUserEventRequest
 * @memberOf! partners(v2)
 * @type object
 * @property {string} eventAction The action that occurred.
 * @property {string} eventCategory The category the action belongs to.
 * @property {partners(v2).EventData[]} eventDatas List of event data for the event.
 * @property {string} eventScope The scope of the event.
 * @property {partners(v2).Lead} lead Advertiser lead information.
 * @property {partners(v2).RequestMetadata} requestMetadata Current request metadata.
 * @property {string} url The URL where the event occurred.
 */

/**
 * @typedef LogUserEventResponse
 * @memberOf! partners(v2)
 * @type object
 * @property {partners(v2).ResponseMetadata} responseMetadata Current response metadata.
 */

/**
 * @typedef Money
 * @memberOf! partners(v2)
 * @type object
* @property {string} currencyCode The 3-letter currency code defined in ISO 4217.
* @property {integer} nanos Number of nano (10^-9) units of the amount.
The value must be between -999,999,999 and +999,999,999 inclusive.
If `units` is positive, `nanos` must be positive or zero.
If `units` is zero, `nanos` can be positive, zero, or negative.
If `units` is negative, `nanos` must be negative or zero.
For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
* @property {string} units The whole units of the amount.
For example if `currencyCode` is `&quot;USD&quot;`, then 1 unit is one US dollar.
*/

/**
 * @typedef OfferCustomer
 * @memberOf! partners(v2)
 * @type object
 * @property {string} adwordsUrl URL to the customer&#39;s AdWords page.
 * @property {string} countryCode Country code of the customer.
 * @property {string} creationTime Time the customer was created.
 * @property {integer} eligibilityDaysLeft Days the customer is still eligible.
 * @property {string} externalCid External CID for the customer.
 * @property {string} getYAmount Formatted Get Y amount with currency code.
 * @property {string} name Name of the customer.
 * @property {string} offerType Type of the offer
 * @property {string} spendXAmount Formatted Spend X amount with currency code.
 */

/**
 * @typedef OptIns
 * @memberOf! partners(v2)
 * @type object
* @property {boolean} marketComm An opt-in about receiving email from Partners marketing teams. Includes
member-only events and special promotional offers for Google products.
* @property {boolean} performanceSuggestions An opt-in about receiving email with customized AdWords campaign management
tips.
* @property {boolean} phoneContact An opt-in to allow recieivng phone calls about their Partners account.
* @property {boolean} physicalMail An opt-in to receive special promotional gifts and material in the mail.
* @property {boolean} specialOffers An opt-in about receiving email regarding new features and products.
*/

/**
 * @typedef PublicProfile
 * @memberOf! partners(v2)
 * @type object
 * @property {string} displayImageUrl The URL to the main display image of the public profile. Being deprecated.
 * @property {string} displayName The display name of the public profile.
 * @property {string} id The ID which can be used to retrieve more details about the public profile.
 * @property {string} profileImage The URL to the main profile image of the public profile.
 * @property {string} url The URL of the public profile.
 */

/**
 * @typedef Rank
 * @memberOf! partners(v2)
 * @type object
 * @property {string} type The type of rank.
 * @property {number} value The numerical value of the rank.
 */

/**
 * @typedef RecaptchaChallenge
 * @memberOf! partners(v2)
 * @type object
 * @property {string} id The ID of the reCaptcha challenge.
 * @property {string} response The response to the reCaptcha challenge.
 */

/**
 * @typedef RequestMetadata
 * @memberOf! partners(v2)
 * @type object
* @property {string[]} experimentIds Experiment IDs the current request belongs to.
* @property {string} locale Locale to use for the current request.
* @property {string} partnersSessionId Google Partners session ID.
* @property {partners(v2).TrafficSource} trafficSource Source of traffic for the current request.
* @property {partners(v2).UserOverrides} userOverrides Values to use instead of the user&#39;s respective defaults for the current
request. These are only honored by whitelisted products.
*/

/**
 * @typedef ResponseMetadata
 * @memberOf! partners(v2)
 * @type object
 * @property {partners(v2).DebugInfo} debugInfo Debug information about this request.
 */

/**
 * @typedef SpecializationStatus
 * @memberOf! partners(v2)
 * @type object
 * @property {string} badgeSpecialization The specialization this status is for.
 * @property {string} badgeSpecializationState State of agency specialization.
 */

/**
 * @typedef TrafficSource
 * @memberOf! partners(v2)
 * @type object
* @property {string} trafficSourceId Identifier to indicate where the traffic comes from.
An identifier has multiple letters created by a team which redirected the
traffic to us.
* @property {string} trafficSubId Second level identifier to indicate where the traffic comes from.
An identifier has multiple letters created by a team which redirected the
traffic to us.
*/

/**
 * @typedef User
 * @memberOf! partners(v2)
 * @type object
* @property {partners(v2).AdWordsManagerAccountInfo[]} availableAdwordsManagerAccounts This is the list of AdWords Manager Accounts the user has edit access to.
If the user has edit access to multiple accounts, the user can choose the
preferred account and we use this when a personal account is needed. Can
be empty meaning the user has access to no accounts.
@OutputOnly
* @property {partners(v2).Certification[]} certificationStatus The list of achieved certifications. These are calculated based on exam
results and other requirements.
@OutputOnly
* @property {partners(v2).CompanyRelation} company The company that the user is associated with.
If not present, the user is not associated with any company.
* @property {string} companyVerificationEmail The email address used by the user used for company verification.
@OutputOnly
* @property {partners(v2).ExamStatus[]} examStatus The list of exams the user ever taken. For each type of exam, only one
entry is listed.
* @property {string} id The ID of the user.
* @property {string} internalId The internal user ID.
Only available for a whitelisted set of api clients.
* @property {string} lastAccessTime The most recent time the user interacted with the Partners site.
@OutputOnly
* @property {string[]} primaryEmails The list of emails the user has access to/can select as primary.
@OutputOnly
* @property {partners(v2).UserProfile} profile The profile information of a Partners user, contains all the directly
editable user information.
* @property {partners(v2).PublicProfile} publicProfile Information about a user&#39;s external public profile outside Google Partners.
*/

/**
 * @typedef UserOverrides
 * @memberOf! partners(v2)
 * @type object
 * @property {string} ipAddress IP address to use instead of the user&#39;s geo-located IP address.
 * @property {string} userId Logged-in user ID to impersonate instead of the user&#39;s ID.
 */

/**
 * @typedef UserProfile
 * @memberOf! partners(v2)
 * @type object
* @property {partners(v2).Location} address The user&#39;s mailing address, contains multiple fields.
* @property {string} adwordsManagerAccount If the user has edit access to multiple accounts, the user can choose the
preferred account and it is used when a personal account is needed. Can
be empty.
* @property {string[]} channels A list of ids representing which channels the user selected they were in.
* @property {string} emailAddress The email address the user has selected on the Partners site as primary.
* @property {partners(v2).OptIns} emailOptIns The list of opt-ins for the user, related to communication preferences.
* @property {string} familyName The user&#39;s family name.
* @property {string} givenName The user&#39;s given name.
* @property {string[]} industries A list of ids representing which industries the user selected.
* @property {string[]} jobFunctions A list of ids represnting which job categories the user selected.
* @property {string[]} languages The list of languages this user understands.
* @property {string[]} markets A list of ids representing which markets the user was interested in.
* @property {boolean} migrateToAfa Whether or not to migrate the user&#39;s exam data to Academy for Ads.
* @property {string} phoneNumber The user&#39;s phone number.
* @property {string} primaryCountryCode The user&#39;s primary country, an ISO 2-character code.
* @property {boolean} profilePublic Whether the user&#39;s public profile is visible to anyone with the URL.
*/
export = Partners;
