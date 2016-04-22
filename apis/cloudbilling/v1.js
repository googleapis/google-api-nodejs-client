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
 * Google Cloud Billing API
 *
 * Retrieves Google Developers Console billing accounts and associates them with projects.
 *
 * @example
 * var google = require('googleapis');
 * var cloudbilling = google.cloudbilling('v1');
 *
 * @namespace cloudbilling
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Cloudbilling
 */
function Cloudbilling(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.billingAccounts = {

    /**
     * cloudbilling.billingAccounts.get
     *
     * @desc Gets information about a billing account. The current authenticated user must be an [owner of the billing account](https://support.google.com/cloud/answer/4430947).
     *
     * @alias cloudbilling.billingAccounts.get
     * @memberOf! cloudbilling(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the billing account to retrieve. For example, `billingAccounts/012345-567890-ABCDEF`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://cloudbilling.googleapis.com/v1/{name}',
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
     * cloudbilling.billingAccounts.list
     *
     * @desc Lists the billing accounts that the current authenticated user [owns](https://support.google.com/cloud/answer/4430947).
     *
     * @alias cloudbilling.billingAccounts.list
     * @memberOf! cloudbilling(v1)
     *
     * @param {object=} params Parameters for request
     * @param {integer=} params.pageSize Requested page size. The maximum page size is 100; this is also the default.
     * @param {string=} params.pageToken A token identifying a page of results to return. This should be a `next_page_token` value returned from a previous `ListBillingAccounts` call. If unspecified, the first page of results is returned.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://cloudbilling.googleapis.com/v1/billingAccounts',
          method: 'GET'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    projects: {

      /**
       * cloudbilling.billingAccounts.projects.list
       *
       * @desc Lists the projects associated with a billing account. The current authenticated user must be an [owner of the billing account](https://support.google.com/cloud/answer/4430947).
       *
       * @alias cloudbilling.billingAccounts.projects.list
       * @memberOf! cloudbilling(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name The resource name of the billing account associated with the projects that you want to list. For example, `billingAccounts/012345-567890-ABCDEF`.
       * @param {integer=} params.pageSize Requested page size. The maximum page size is 100; this is also the default.
       * @param {string=} params.pageToken A token identifying a page of results to be returned. This should be a `next_page_token` value returned from a previous `ListProjectBillingInfo` call. If unspecified, the first page of results is returned.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://cloudbilling.googleapis.com/v1/{name}/projects',
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
  };

  self.projects = {

    /**
     * cloudbilling.projects.getBillingInfo
     *
     * @desc Gets the billing information for a project. The current authenticated user must have [permission to view the project](https://cloud.google.com/docs/permissions-overview#h.bgs0oxofvnoo ).
     *
     * @alias cloudbilling.projects.getBillingInfo
     * @memberOf! cloudbilling(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the project for which billing information is retrieved. For example, `projects/tokyo-rain-123`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getBillingInfo: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://cloudbilling.googleapis.com/v1/{name}/billingInfo',
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
     * cloudbilling.projects.updateBillingInfo
     *
     * @desc Sets or updates the billing account associated with a project. You specify the new billing account by setting the `billing_account_name` in the `ProjectBillingInfo` resource to the resource name of a billing account. Associating a project with an open billing account enables billing on the project and allows charges for resource usage. If the project already had a billing account, this method changes the billing account used for resource usage charges. *Note:* Incurred charges that have not yet been reported in the transaction history of the Google Developers Console may be billed to the new billing account, even if the charge occurred before the new billing account was assigned to the project. The current authenticated user must have ownership privileges for both the [project](https://cloud.google.com/docs/permissions-overview#h.bgs0oxofvnoo ) and the [billing account](https://support.google.com/cloud/answer/4430947). You can disable billing on the project by setting the `billing_account_name` field to empty. This action disassociates the current billing account from the project. Any billable activity of your in-use services will stop, and your application could stop functioning as expected. Any unbilled charges to date will be billed to the previously associated account. The current authenticated user must be either an owner of the project or an owner of the billing account for the project. Note that associating a project with a *closed* billing account will have much the same effect as disabling billing on the project: any paid resources used by the project will be shut down. Thus, unless you wish to disable billing, you should always call this method with the name of an *open* billing account.
     *
     * @alias cloudbilling.projects.updateBillingInfo
     * @memberOf! cloudbilling(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the project associated with the billing information that you want to update. For example, `projects/tokyo-rain-123`.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updateBillingInfo: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://cloudbilling.googleapis.com/v1/{name}/billingInfo',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

module.exports = Cloudbilling;
