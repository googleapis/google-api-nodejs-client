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
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Billing API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudbilling
     * // 2. This sample uses Application Default Credentials for Auth.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var cloudbilling = google.cloudbilling('v1');
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
     *     // The resource name of the billing account to retrieve. For example,
     *     // `billingAccounts/012345-567890-ABCDEF`.
     *     name: "billingAccounts/{MY-BILLINGACCOUNT}",
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   cloudbilling.billingAccounts.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
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
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Billing API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudbilling
     * // 2. This sample uses Application Default Credentials for Auth.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var cloudbilling = google.cloudbilling('v1');
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
     *         cloudbilling.billingAccounts.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   cloudbilling.billingAccounts.list(request, recur);
     * });
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
       * @example
       * // PRE-REQUISITES:
       * // ---------------
       * // 1. If not already done, enable the Google Cloud Billing API
       * //    and check the quota for your project at
       * //    https://console.developers.google.com/apis/api/cloudbilling
       * // 2. This sample uses Application Default Credentials for Auth.
       * //    If not already done, install the gcloud CLI from
       * //    https://cloud.google.com/sdk/ and run 'gcloud auth application-default login'
       * // 3. To install the client library and Application Default Credentials library, run:
       * //    'npm install googleapis --save'
       * var google = require('googleapis');
       * var cloudbilling = google.cloudbilling('v1');
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
       *     // The resource name of the billing account associated with the projects that you want to list. For
       *     // example, `billingAccounts/012345-567890-ABCDEF`.
       *     name: "billingAccounts/{MY-BILLINGACCOUNT}",
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
       *         cloudbilling.billingAccounts.projects.list(request, recur);
       *       }
       *     }
       *   };
       *
       *   cloudbilling.billingAccounts.projects.list(request, recur);
       * });
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
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Billing API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudbilling
     * // 2. This sample uses Application Default Credentials for Auth.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var cloudbilling = google.cloudbilling('v1');
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
     *     // TODO: Change placeholders below to appropriate parameter values for the 'getBillingInfo' method:
     *
     *     // The resource name of the project for which billing information is retrieved. For example,
     *     // `projects/tokyo-rain-123`.
     *     name: "projects/{MY-PROJECT}",
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   cloudbilling.projects.getBillingInfo(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
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
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Billing API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudbilling
     * // 2. This sample uses Application Default Credentials for Auth.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var cloudbilling = google.cloudbilling('v1');
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
     *     // TODO: Change placeholders below to appropriate parameter values for the 'updateBillingInfo' method:
     *
     *     // The resource name of the project associated with the billing information that you want to update.
     *     // For example, `projects/tokyo-rain-123`.
     *     name: "projects/{MY-PROJECT}",
     *     resource: {},
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   cloudbilling.projects.updateBillingInfo(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
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
