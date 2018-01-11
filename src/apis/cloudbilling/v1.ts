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

import {createAPIRequest} from '../../lib/apirequest';

/**
 * Google Cloud Billing API
 *
 * Allows developers to manage billing for their Google Cloud Platform projects
 * programmatically.
 *
 * @example
 * const google = require('googleapis');
 * const cloudbilling = google.cloudbilling('v1');
 *
 * @namespace cloudbilling
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Cloudbilling
 */
function Cloudbilling(options) {
  const self = this;
  self._options = options || {};
  self.billingAccounts = {
    /**
     * cloudbilling.billingAccounts.get
     * @desc Gets information about a billing account. The current authenticated
     * user must be an [owner of the billing
     * account](https://support.google.com/cloud/answer/4430947).
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Billing API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudbilling
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudbilling = google.cloudbilling('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The resource name of the billing account to retrieve. For example,
     *     // `billingAccounts/012345-567890-ABCDEF`.
     *     name: 'billingAccounts/my-billing-account',  // TODO: Update
     * placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudbilling.billingAccounts.get(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudbilling.billingAccounts.get
     * @memberOf! cloudbilling(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the billing account to retrieve. For example, `billingAccounts/012345-567890-ABCDEF`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://cloudbilling.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * cloudbilling.billingAccounts.list
        * @desc Lists the billing accounts that the current authenticated user
        * [owns](https://support.google.com/cloud/answer/4430947).
        * @example
        * // BEFORE RUNNING:
        * // ---------------
        * // 1. If not already done, enable the Google Cloud Billing API
        * //    and check the quota for your project at
        * //    https://console.developers.google.com/apis/api/cloudbilling
        * // 2. This sample uses Application Default Credentials for
        * authentication.
        * //    If not already done, install the gcloud CLI from
        * //    https://cloud.google.com/sdk and run
        * //    `gcloud beta auth application-default login`.
        * //    For more information, see
        * //
        * https://developers.google.com/identity/protocols/application-default-credentials
        * // 3. Install the Node.js client library by running
        * //    `npm install googleapis --save`
        *
        * var google = require('googleapis');
        * var cloudbilling = google.cloudbilling('v1');
        *
        * authorize(function(authClient) {
        *   var request = {
        *     auth: authClient,
        *   };
        *
        *   var handlePage = function(err, response) {
        *     if (err) {
        *       console.error(err);
        *       return;
        *     }
        *
        *     var billingAccountsPage = response['billingAccounts'];
        *     if (!billingAccountsPage) {
        *       return;
        *     }
        *     for (var i = 0; i < billingAccountsPage.length; i++) {
        *       // TODO: Change code below to process each resource in
        * `billingAccountsPage`:
        *       console.log(JSON.stringify(billingAccountsPage[i], null, 2));
        *     }
        *
        *     if (response.nextPageToken) {
        *       request.pageToken = response.nextPageToken;
        *       cloudbilling.billingAccounts.list(request, handlePage);
        *     }
        *   };
        *
        *   cloudbilling.billingAccounts.list(request, handlePage);
        * });
        *
        * function authorize(callback) {
        *   google.auth.getApplicationDefault(function(err, authClient) {
        *     if (err) {
        *       console.error('authentication failed: ', err);
        *       return;
        *     }
        *     if (authClient.createScopedRequired &&
        * authClient.createScopedRequired()) { var scopes =
        * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
        * authClient.createScoped(scopes);
        *     }
        *     callback(authClient);
        *   });
        * }
        * @alias cloudbilling.billingAccounts.list
        * @memberOf! cloudbilling(v1)
        *
        * @param {object} params Parameters for request
        * @param {integer=} params.pageSize Requested page size. The maximum page size is 100; this is also the default.
        * @param {string=} params.pageToken A token identifying a page of results to return. This should be a `next_page_token` value returned from a previous `ListBillingAccounts` call. If unspecified, the first page of results is returned.
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    list(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://cloudbilling.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/billingAccounts')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: self
      };
      return createAPIRequest(parameters, callback);
    },
    projects: {
      /**
       * cloudbilling.billingAccounts.projects.list
       * @desc Lists the projects associated with a billing account. The current
       * authenticated user must have the "billing.resourceAssociations.list"
       * IAM permission, which is often given to billing account
       * [viewers](https://support.google.com/cloud/answer/4430947).
       * @example
       * // BEFORE RUNNING:
       * // ---------------
       * // 1. If not already done, enable the Google Cloud Billing API
       * //    and check the quota for your project at
       * //    https://console.developers.google.com/apis/api/cloudbilling
       * // 2. This sample uses Application Default Credentials for
       * authentication.
       * //    If not already done, install the gcloud CLI from
       * //    https://cloud.google.com/sdk and run
       * //    `gcloud beta auth application-default login`.
       * //    For more information, see
       * //
       * https://developers.google.com/identity/protocols/application-default-credentials
       * // 3. Install the Node.js client library by running
       * //    `npm install googleapis --save`
       *
       * var google = require('googleapis');
       * var cloudbilling = google.cloudbilling('v1');
       *
       * authorize(function(authClient) {
       *   var request = {
       *     // The resource name of the billing account associated with the
       * projects that
       *     // you want to list. For example,
       * `billingAccounts/012345-567890-ABCDEF`. name:
       * 'billingAccounts/my-billing-account',  // TODO: Update placeholder
       * value.
       *
       *     auth: authClient,
       *   };
       *
       *   var handlePage = function(err, response) {
       *     if (err) {
       *       console.error(err);
       *       return;
       *     }
       *
       *     var projectBillingInfoPage = response['projectBillingInfo'];
       *     if (!projectBillingInfoPage) {
       *       return;
       *     }
       *     for (var i = 0; i < projectBillingInfoPage.length; i++) {
       *       // TODO: Change code below to process each resource in
       * `projectBillingInfoPage`:
       *       console.log(JSON.stringify(projectBillingInfoPage[i], null, 2));
       *     }
       *
       *     if (response.nextPageToken) {
       *       request.pageToken = response.nextPageToken;
       *       cloudbilling.billingAccounts.projects.list(request, handlePage);
       *     }
       *   };
       *
       *   cloudbilling.billingAccounts.projects.list(request, handlePage);
       * });
       *
       * function authorize(callback) {
       *   google.auth.getApplicationDefault(function(err, authClient) {
       *     if (err) {
       *       console.error('authentication failed: ', err);
       *       return;
       *     }
       *     if (authClient.createScopedRequired &&
       * authClient.createScopedRequired()) { var scopes =
       * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
       * authClient.createScoped(scopes);
       *     }
       *     callback(authClient);
       *   });
       * }
       * @alias cloudbilling.billingAccounts.projects.list
       * @memberOf! cloudbilling(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name The resource name of the billing account associated with the projects that you want to list. For example, `billingAccounts/012345-567890-ABCDEF`.
       * @param {integer=} params.pageSize Requested page size. The maximum page size is 100; this is also the default.
       * @param {string=} params.pageToken A token identifying a page of results to be returned. This should be a `next_page_token` value returned from a previous `ListProjectBillingInfo` call. If unspecified, the first page of results is returned.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl =
            options.rootUrl || 'https://cloudbilling.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{name}/projects')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
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
     * @desc Gets the billing information for a project. The current
     * authenticated user must have [permission to view the
     * project](https://cloud.google.com/docs/permissions-overview#h.bgs0oxofvnoo
     * ).
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Billing API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudbilling
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudbilling = google.cloudbilling('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The resource name of the project for which billing information is
     *     // retrieved. For example, `projects/tokyo-rain-123`.
     *     name: 'projects/my-project',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudbilling.projects.getBillingInfo(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudbilling.projects.getBillingInfo
     * @memberOf! cloudbilling(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the project for which billing information is retrieved. For example, `projects/tokyo-rain-123`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getBillingInfo(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://cloudbilling.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{name}/billingInfo')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * cloudbilling.projects.updateBillingInfo
        * @desc Sets or updates the billing account associated with a project.
        * You specify the new billing account by setting the
        * `billing_account_name` in the `ProjectBillingInfo` resource to the
        * resource name of a billing account. Associating a project with an open
        * billing account enables billing on the project and allows charges for
        * resource usage. If the project already had a billing account, this
        * method changes the billing account used for resource usage charges.
        * *Note:* Incurred charges that have not yet been reported in the
        * transaction history of the Google Cloud Console may be billed to the
        * new billing account, even if the charge occurred before the new
        * billing account was assigned to the project.  The current
        * authenticated user must have ownership privileges for both the
        * [project](https://cloud.google.com/docs/permissions-overview#h.bgs0oxofvnoo
        * ) and the [billing
        * account](https://support.google.com/cloud/answer/4430947).  You can
        * disable billing on the project by setting the `billing_account_name`
        * field to empty. This action disassociates the current billing account
        * from the project. Any billable activity of your in-use services will
        * stop, and your application could stop functioning as expected. Any
        * unbilled charges to date will be billed to the previously associated
        * account. The current authenticated user must be either an owner of the
        * project or an owner of the billing account for the project.  Note that
        * associating a project with a *closed* billing account will have much
        * the same effect as disabling billing on the project: any paid
        * resources used by the project will be shut down. Thus, unless you wish
        * to disable billing, you should always call this method with the name
        * of an *open* billing account.
        * @example
        * // BEFORE RUNNING:
        * // ---------------
        * // 1. If not already done, enable the Google Cloud Billing API
        * //    and check the quota for your project at
        * //    https://console.developers.google.com/apis/api/cloudbilling
        * // 2. This sample uses Application Default Credentials for
        * authentication.
        * //    If not already done, install the gcloud CLI from
        * //    https://cloud.google.com/sdk and run
        * //    `gcloud beta auth application-default login`.
        * //    For more information, see
        * //
        * https://developers.google.com/identity/protocols/application-default-credentials
        * // 3. Install the Node.js client library by running
        * //    `npm install googleapis --save`
        *
        * var google = require('googleapis');
        * var cloudbilling = google.cloudbilling('v1');
        *
        * authorize(function(authClient) {
        *   var request = {
        *     // The resource name of the project associated with the billing
        * information
        *     // that you want to update. For example,
        * `projects/tokyo-rain-123`. name: 'projects/my-project',  // TODO:
        * Update placeholder value.
        *
        *     resource: {
        *       // TODO: Add desired properties to the request body. All
        * existing properties
        *       // will be replaced.
        *     },
        *
        *     auth: authClient,
        *   };
        *
        *   cloudbilling.projects.updateBillingInfo(request, function(err,
        * response) { if (err) { console.error(err); return;
        *     }
        *
        *     // TODO: Change code below to process the `response` object:
        *     console.log(JSON.stringify(response, null, 2));
        *   });
        * });
        *
        * function authorize(callback) {
        *   google.auth.getApplicationDefault(function(err, authClient) {
        *     if (err) {
        *       console.error('authentication failed: ', err);
        *       return;
        *     }
        *     if (authClient.createScopedRequired &&
        * authClient.createScopedRequired()) { var scopes =
        * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
        * authClient.createScoped(scopes);
        *     }
        *     callback(authClient);
        *   });
        * }
        * @alias cloudbilling.projects.updateBillingInfo
        * @memberOf! cloudbilling(v1)
        *
        * @param {object} params Parameters for request
        * @param {string} params.name The resource name of the project associated with the billing information that you want to update. For example, `projects/tokyo-rain-123`.
        * @param {cloudbilling(v1).ProjectBillingInfo} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    updateBillingInfo(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://cloudbilling.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{name}/billingInfo')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }

  };
  self.services = {
    /**
     * cloudbilling.services.list
     * @desc Lists all public cloud services.
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Billing API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudbilling
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudbilling = google.cloudbilling('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var servicesPage = response['services'];
     *     if (!servicesPage) {
     *       return;
     *     }
     *     for (var i = 0; i < servicesPage.length; i++) {
     *       // TODO: Change code below to process each resource in
     * `servicesPage`: console.log(JSON.stringify(servicesPage[i], null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.pageToken = response.nextPageToken;
     *       cloudbilling.services.list(request, handlePage);
     *     }
     *   };
     *
     *   cloudbilling.services.list(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudbilling.services.list
     * @memberOf! cloudbilling(v1)
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Requested page size. Defaults to 5000.
     * @param {string=} params.pageToken A token identifying a page of results to return. This should be a `next_page_token` value returned from a previous `ListServices` call. If unspecified, the first page of results is returned.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://cloudbilling.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/services').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: self
      };
      return createAPIRequest(parameters, callback);
    },
    skus: {
      /**
       * cloudbilling.services.skus.list
       * @desc Lists all publicly available SKUs for a given cloud service.
       * @example
       * // BEFORE RUNNING:
       * // ---------------
       * // 1. If not already done, enable the Google Cloud Billing API
       * //    and check the quota for your project at
       * //    https://console.developers.google.com/apis/api/cloudbilling
       * // 2. This sample uses Application Default Credentials for
       * authentication.
       * //    If not already done, install the gcloud CLI from
       * //    https://cloud.google.com/sdk and run
       * //    `gcloud beta auth application-default login`.
       * //    For more information, see
       * //
       * https://developers.google.com/identity/protocols/application-default-credentials
       * // 3. Install the Node.js client library by running
       * //    `npm install googleapis --save`
       *
       * var google = require('googleapis');
       * var cloudbilling = google.cloudbilling('v1');
       *
       * authorize(function(authClient) {
       *   var request = {
       *     // The name of the service.
       *     // Example: "services/DA34-426B-A397"
       *     parent: 'services/my-service',  // TODO: Update placeholder value.
       *
       *     auth: authClient,
       *   };
       *
       *   var handlePage = function(err, response) {
       *     if (err) {
       *       console.error(err);
       *       return;
       *     }
       *
       *     var skusPage = response['skus'];
       *     if (!skusPage) {
       *       return;
       *     }
       *     for (var i = 0; i < skusPage.length; i++) {
       *       // TODO: Change code below to process each resource in
       * `skusPage`: console.log(JSON.stringify(skusPage[i], null, 2));
       *     }
       *
       *     if (response.nextPageToken) {
       *       request.pageToken = response.nextPageToken;
       *       cloudbilling.services.skus.list(request, handlePage);
       *     }
       *   };
       *
       *   cloudbilling.services.skus.list(request, handlePage);
       * });
       *
       * function authorize(callback) {
       *   google.auth.getApplicationDefault(function(err, authClient) {
       *     if (err) {
       *       console.error('authentication failed: ', err);
       *       return;
       *     }
       *     if (authClient.createScopedRequired &&
       * authClient.createScopedRequired()) { var scopes =
       * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
       * authClient.createScoped(scopes);
       *     }
       *     callback(authClient);
       *   });
       * }
       * @alias cloudbilling.services.skus.list
       * @memberOf! cloudbilling(v1)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.currencyCode The ISO 4217 currency code for the pricing info in the response proto. Will use the conversion rate as of start_time. Optional. If not specified USD will be used.
       * @param {string=} params.endTime Optional exclusive end time of the time range for which the pricing versions will be returned. Timestamps in the future are not allowed. The time range has to be within a single calendar month in America/Los_Angeles timezone. Time range as a whole is optional. If not specified, the latest pricing will be returned (up to 12 hours old at most).
       * @param {integer=} params.pageSize Requested page size. Defaults to 5000.
       * @param {string=} params.pageToken A token identifying a page of results to return. This should be a `next_page_token` value returned from a previous `ListSkus` call. If unspecified, the first page of results is returned.
       * @param {string} params.parent The name of the service. Example: "services/DA34-426B-A397"
       * @param {string=} params.startTime Optional inclusive start time of the time range for which the pricing versions will be returned. Timestamps in the future are not allowed. The time range has to be within a single calendar month in America/Los_Angeles timezone. Time range as a whole is optional. If not specified, the latest pricing will be returned (up to 12 hours old at most).
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl =
            options.rootUrl || 'https://cloudbilling.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{parent}/skus')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }

    }
  };
}
/**
 * @typedef AggregationInfo
 * @memberOf! cloudbilling(v1)
 * @type object
 * @property {integer} aggregationCount The number of intervals to aggregate over. Example: If aggregation_level is &quot;DAILY&quot; and aggregation_count is 14, aggregation will be over 14 days.
 * @property {string} aggregationInterval
 * @property {string} aggregationLevel
 */
/**
 * @typedef BillingAccount
 * @memberOf! cloudbilling(v1)
 * @type object
 * @property {string} displayName The display name given to the billing account, such as `My Billing Account`. This name is displayed in the Google Cloud Console.
 * @property {string} name The resource name of the billing account. The resource name has the form `billingAccounts/{billing_account_id}`. For example, `billingAccounts/012345-567890-ABCDEF` would be the resource name for billing account `012345-567890-ABCDEF`.
 * @property {boolean} open True if the billing account is open, and will therefore be charged for any usage on associated projects. False if the billing account is closed, and therefore projects associated with it will be unable to use paid services.
 */
/**
 * @typedef Category
 * @memberOf! cloudbilling(v1)
 * @type object
 * @property {string} resourceFamily The type of product the SKU refers to. Example: &quot;Compute&quot;, &quot;Storage&quot;, &quot;Network&quot;, &quot;ApplicationServices&quot; etc.
 * @property {string} resourceGroup A group classification for related SKUs. Example: &quot;RAM&quot;, &quot;GPU&quot;, &quot;Prediction&quot;, &quot;Ops&quot;, &quot;GoogleEgress&quot; etc.
 * @property {string} serviceDisplayName The display name of the service this SKU belongs to.
 * @property {string} usageType Represents how the SKU is consumed. Example: &quot;OnDemand&quot;, &quot;Preemptible&quot;, &quot;Commit1Mo&quot;, &quot;Commit1Yr&quot; etc.
 */
/**
 * @typedef ListBillingAccountsResponse
 * @memberOf! cloudbilling(v1)
 * @type object
 * @property {cloudbilling(v1).BillingAccount[]} billingAccounts A list of billing accounts.
 * @property {string} nextPageToken A token to retrieve the next page of results. To retrieve the next page, call `ListBillingAccounts` again with the `page_token` field set to this value. This field is empty if there are no more results to retrieve.
 */
/**
 * @typedef ListProjectBillingInfoResponse
 * @memberOf! cloudbilling(v1)
 * @type object
 * @property {string} nextPageToken A token to retrieve the next page of results. To retrieve the next page, call `ListProjectBillingInfo` again with the `page_token` field set to this value. This field is empty if there are no more results to retrieve.
 * @property {cloudbilling(v1).ProjectBillingInfo[]} projectBillingInfo A list of `ProjectBillingInfo` resources representing the projects associated with the billing account.
 */
/**
 * @typedef ListServicesResponse
 * @memberOf! cloudbilling(v1)
 * @type object
 * @property {string} nextPageToken A token to retrieve the next page of results. To retrieve the next page, call `ListServices` again with the `page_token` field set to this value. This field is empty if there are no more results to retrieve.
 * @property {cloudbilling(v1).Service[]} services A list of services.
 */
/**
 * @typedef ListSkusResponse
 * @memberOf! cloudbilling(v1)
 * @type object
 * @property {string} nextPageToken A token to retrieve the next page of results. To retrieve the next page, call `ListSkus` again with the `page_token` field set to this value. This field is empty if there are no more results to retrieve.
 * @property {cloudbilling(v1).Sku[]} skus The list of public SKUs of the given service.
 */
/**
 * @typedef Money
 * @memberOf! cloudbilling(v1)
 * @type object
 * @property {string} currencyCode The 3-letter currency code defined in ISO 4217.
 * @property {integer} nanos Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
 * @property {string} units The whole units of the amount. For example if `currencyCode` is `&quot;USD&quot;`, then 1 unit is one US dollar.
 */
/**
 * @typedef PricingExpression
 * @memberOf! cloudbilling(v1)
 * @type object
 * @property {string} baseUnit The base unit for the SKU which is the unit used in usage exports. Example: &quot;By&quot;
 * @property {number} baseUnitConversionFactor Conversion factor for converting from price per usage_unit to price per base_unit, and start_usage_amount to start_usage_amount in base_unit. unit_price / base_unit_conversion_factor = price per base_unit. start_usage_amount * base_unit_conversion_factor = start_usage_amount in base_unit.
 * @property {string} baseUnitDescription The base unit in human readable form. Example: &quot;byte&quot;.
 * @property {number} displayQuantity The recommended quantity of units for displaying pricing info. When displaying pricing info it is recommended to display: (unit_price * display_quantity) per display_quantity usage_unit. This field does not affect the pricing formula and is for display purposes only. Example: If the unit_price is &quot;0.0001 USD&quot;, the usage_unit is &quot;GB&quot; and the display_quantity is &quot;1000&quot; then the recommended way of displaying the pricing info is &quot;0.10 USD per 1000 GB&quot;
 * @property {cloudbilling(v1).TierRate[]} tieredRates The list of tiered rates for this pricing. The total cost is computed by applying each of the tiered rates on usage. This repeated list is sorted by ascending order of start_usage_amount.
 * @property {string} usageUnit The short hand for unit of usage this pricing is specified in. Example: usage_unit of &quot;GiBy&quot; means that usage is specified in &quot;Gibi Byte&quot;.
 * @property {string} usageUnitDescription The unit of usage in human readable form. Example: &quot;gibi byte&quot;.
 */
/**
 * @typedef PricingInfo
 * @memberOf! cloudbilling(v1)
 * @type object
 * @property {cloudbilling(v1).AggregationInfo} aggregationInfo Aggregation Info. This can be left unspecified if the pricing expression doesn&#39;t require aggregation.
 * @property {number} currencyConversionRate Conversion rate for currency conversion, from USD to the currency specified in the request. If the currency is not specified this defaults to 1.0. Example: USD * currency_conversion_rate = JPY
 * @property {string} effectiveTime The timestamp from which this pricing was effective.
 * @property {cloudbilling(v1).PricingExpression} pricingExpression Expresses the pricing formula. See `PricingExpression` for an example.
 * @property {string} summary An optional human readable summary of the pricing information, has a maximum length of 256 characters.
 */
/**
 * @typedef ProjectBillingInfo
 * @memberOf! cloudbilling(v1)
 * @type object
 * @property {string} billingAccountName The resource name of the billing account associated with the project, if any. For example, `billingAccounts/012345-567890-ABCDEF`.
 * @property {boolean} billingEnabled True if the project is associated with an open billing account, to which usage on the project is charged. False if the project is associated with a closed billing account, or no billing account at all, and therefore cannot use paid services. This field is read-only.
 * @property {string} name The resource name for the `ProjectBillingInfo`; has the form `projects/{project_id}/billingInfo`. For example, the resource name for the billing information for project `tokyo-rain-123` would be `projects/tokyo-rain-123/billingInfo`. This field is read-only.
 * @property {string} projectId The ID of the project that this `ProjectBillingInfo` represents, such as `tokyo-rain-123`. This is a convenience field so that you don&#39;t need to parse the `name` field to obtain a project ID. This field is read-only.
 */
/**
 * @typedef Service
 * @memberOf! cloudbilling(v1)
 * @type object
 * @property {string} displayName A human readable display name for this service.
 * @property {string} name The resource name for the service. Example: &quot;services/DA34-426B-A397&quot;
 * @property {string} serviceId The identifier for the service. Example: &quot;DA34-426B-A397&quot;
 */
/**
 * @typedef Sku
 * @memberOf! cloudbilling(v1)
 * @type object
 * @property {cloudbilling(v1).Category} category The category hierarchy of this SKU, purely for organizational purpose.
 * @property {string} description A human readable description of the SKU, has a maximum length of 256 characters.
 * @property {string} name The resource name for the SKU. Example: &quot;services/DA34-426B-A397/skus/AA95-CD31-42FE&quot;
 * @property {cloudbilling(v1).PricingInfo[]} pricingInfo A timeline of pricing info for this SKU in chronological order.
 * @property {string} serviceProviderName Identifies the service provider. This is &#39;Google&#39; for first party services in Google Cloud Platform.
 * @property {string[]} serviceRegions List of service regions this SKU is offered at. Example: &quot;asia-east1&quot; Service regions can be found at https://cloud.google.com/about/locations/
 * @property {string} skuId The identifier for the SKU. Example: &quot;AA95-CD31-42FE&quot;
 */
/**
 * @typedef TierRate
 * @memberOf! cloudbilling(v1)
 * @type object
 * @property {number} startUsageAmount Usage is priced at this rate only after this amount. Example: start_usage_amount of 10 indicates that the usage will be priced at the unit_price after the first 10 usage_units.
 * @property {cloudbilling(v1).Money} unitPrice The price per unit of usage. Example: unit_price of amount $10 indicates that each unit will cost $10.
 */

export = Cloudbilling;
