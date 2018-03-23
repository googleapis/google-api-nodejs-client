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

import {BodyResponseCallback, GlobalOptions, MethodOptions} from '../../lib/api';
import {createAPIRequest} from '../../lib/apirequest';

// TODO: We will eventually get the `any` in here cleared out, but in the
// interim we want to turn on no-implicit-any.

// tslint:disable: no-any


/**
 * Cloud Billing API
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
function Cloudbilling(options: GlobalOptions) {
  const self = this;
  self._options = options || {};
  self.billingAccounts = {
    /**
     * cloudbilling.billingAccounts.create
     * @desc Creates a billing account. This method can only be used to create
     * [billing subaccounts](https://cloud.google.com/billing/docs/concepts).
     * When creating a subaccount, the current authenticated user must have the
     * `billing.accounts.update` IAM permission on the master account, which is
     * typically given to billing account
     * [administrators](https://cloud.google.com/billing/docs/how-to/billing-access).
     * > This method is currently in >
     * [Beta](https://cloud.google.com/terms/launch-stages).
     * @alias cloudbilling.billingAccounts.create
     * @memberOf! cloudbilling(v1)
     *
     * @param {object} params Parameters for request
     * @param {cloudbilling(v1).BillingAccount} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params: any, options: MethodOptions|BodyResponseCallback<any>,
        callback?: BodyResponseCallback<any>) {
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
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: self
      };
      return createAPIRequest(parameters, callback!);
    }, /**
        * cloudbilling.billingAccounts.get
        * @desc Gets information about a billing account. The current
        * authenticated user must be a [viewer of the billing
        * account](https://cloud.google.com/billing/docs/how-to/billing-access).
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
        *     // The resource name of the billing account to retrieve. For
        * example,
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
    get(params: any, options: MethodOptions|BodyResponseCallback<any>,
        callback?: BodyResponseCallback<any>) {
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
      return createAPIRequest(parameters, callback!);
    }, /**
        * cloudbilling.billingAccounts.getIamPolicy
        * @desc Gets the access control policy for a billing account. The caller
        * must have the `billing.accounts.getIamPolicy` permission on the
        * account, which is often given to billing account
        * [viewers](https://cloud.google.com/billing/docs/how-to/billing-access).
        * > This method is currently in >
        * [Beta](https://cloud.google.com/terms/launch-stages).
        * @alias cloudbilling.billingAccounts.getIamPolicy
        * @memberOf! cloudbilling(v1)
        *
        * @param {object} params Parameters for request
        * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    getIamPolicy(
        params: any, options: MethodOptions|BodyResponseCallback<any>,
        callback?: BodyResponseCallback<any>) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://cloudbilling.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{resource}:getIamPolicy')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: self
      };
      return createAPIRequest(parameters, callback!);
    }, /**
        * cloudbilling.billingAccounts.list
        * @desc Lists the billing accounts that the current authenticated user
        * has permission to
        * [view](https://cloud.google.com/billing/docs/how-to/billing-access).
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
        * @param {string=} params.filter Options for how to filter the returned billing accounts. Currently this only supports filtering for [subaccounts](https://cloud.google.com/billing/docs/concepts) under a single provided reseller billing account. (e.g. "master_billing_account=billingAccounts/012345-678901-ABCDEF"). Boolean algebra and other fields are not currently supported.  > This field is currently in > [Beta](https://cloud.google.com/terms/launch-stages).
        * @param {integer=} params.pageSize Requested page size. The maximum page size is 100; this is also the default.
        * @param {string=} params.pageToken A token identifying a page of results to return. This should be a `next_page_token` value returned from a previous `ListBillingAccounts` call. If unspecified, the first page of results is returned.
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    list(
        params: any, options: MethodOptions|BodyResponseCallback<any>,
        callback?: BodyResponseCallback<any>) {
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
      return createAPIRequest(parameters, callback!);
    }, /**
        * cloudbilling.billingAccounts.patch
        * @desc Updates a billing account's fields. Currently the only field
        * that can be edited is `display_name`. The current authenticated user
        * must have the `billing.accounts.update` IAM permission, which is
        * typically given to the
        * [administrator](https://cloud.google.com/billing/docs/how-to/billing-access)
        * of the billing account.  > This method is currently in >
        * [Beta](https://cloud.google.com/terms/launch-stages).
        * @alias cloudbilling.billingAccounts.patch
        * @memberOf! cloudbilling(v1)
        *
        * @param {object} params Parameters for request
        * @param {string} params.name The name of the billing account resource to be updated.
        * @param {string=} params.updateMask The update mask applied to the resource. Only "display_name" is currently supported.
        * @param {cloudbilling(v1).BillingAccount} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    patch(
        params: any, options: MethodOptions|BodyResponseCallback<any>,
        callback?: BodyResponseCallback<any>) {
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
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: self
      };
      return createAPIRequest(parameters, callback!);
    }, /**
        * cloudbilling.billingAccounts.setIamPolicy
        * @desc Sets the access control policy for a billing account. Replaces
        * any existing policy. The caller must have the
        * `billing.accounts.setIamPolicy` permission on the account, which is
        * often given to billing account
        * [administrators](https://cloud.google.com/billing/docs/how-to/billing-access).
        * > This method is currently in >
        * [Beta](https://cloud.google.com/terms/launch-stages).
        * @alias cloudbilling.billingAccounts.setIamPolicy
        * @memberOf! cloudbilling(v1)
        *
        * @param {object} params Parameters for request
        * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
        * @param {cloudbilling(v1).SetIamPolicyRequest} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    setIamPolicy(
        params: any, options: MethodOptions|BodyResponseCallback<any>,
        callback?: BodyResponseCallback<any>) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://cloudbilling.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{resource}:setIamPolicy')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: self
      };
      return createAPIRequest(parameters, callback!);
    }, /**
        * cloudbilling.billingAccounts.testIamPermissions
        * @desc Tests the access control policy for a billing account. This
        * method takes the resource and a set of permissions as input and
        * returns the subset of the input permissions that the caller is allowed
        * for that resource.  > This method is currently in >
        * [Beta](https://cloud.google.com/terms/launch-stages).
        * @alias cloudbilling.billingAccounts.testIamPermissions
        * @memberOf! cloudbilling(v1)
        *
        * @param {object} params Parameters for request
        * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
        * @param {cloudbilling(v1).TestIamPermissionsRequest} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    testIamPermissions(
        params: any, options: MethodOptions|BodyResponseCallback<any>,
        callback?: BodyResponseCallback<any>) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://cloudbilling.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{resource}:testIamPermissions')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: self
      };
      return createAPIRequest(parameters, callback!);
    },
    projects: {
      /**
       * cloudbilling.billingAccounts.projects.list
       * @desc Lists the projects associated with a billing account. The current
       * authenticated user must have the `billing.resourceAssociations.list`
       * IAM permission, which is often given to billing account
       * [viewers](https://cloud.google.com/billing/docs/how-to/billing-access).
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
      list(
          params: any, options: MethodOptions|BodyResponseCallback<any>,
          callback?: BodyResponseCallback<any>) {
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
        return createAPIRequest(parameters, callback!);
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
    getBillingInfo(
        params: any, options: MethodOptions|BodyResponseCallback<any>,
        callback?: BodyResponseCallback<any>) {
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
      return createAPIRequest(parameters, callback!);
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
        * transaction history of the GCP Console might be billed to the new
        * billing account, even if the charge occurred before the new billing
        * account was assigned to the project.  The current authenticated user
        * must have ownership privileges for both the
        * [project](https://cloud.google.com/docs/permissions-overview#h.bgs0oxofvnoo
        * ) and the [billing
        * account](https://cloud.google.com/billing/docs/how-to/billing-access).
        * You can disable billing on the project by setting the
        * `billing_account_name` field to empty. This action disassociates the
        * current billing account from the project. Any billable activity of
        * your in-use services will stop, and your application could stop
        * functioning as expected. Any unbilled charges to date will be billed
        * to the previously associated account. The current authenticated user
        * must be either an owner of the project or an owner of the billing
        * account for the project.  Note that associating a project with a
        * *closed* billing account will have much the same effect as disabling
        * billing on the project: any paid resources used by the project will be
        * shut down. Thus, unless you wish to disable billing, you should always
        * call this method with the name of an *open* billing account.
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
    updateBillingInfo(
        params: any, options: MethodOptions|BodyResponseCallback<any>,
        callback?: BodyResponseCallback<any>) {
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
      return createAPIRequest(parameters, callback!);
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
    list(
        params: any, options: MethodOptions|BodyResponseCallback<any>,
        callback?: BodyResponseCallback<any>) {
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
      return createAPIRequest(parameters, callback!);
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
      list(
          params: any, options: MethodOptions|BodyResponseCallback<any>,
          callback?: BodyResponseCallback<any>) {
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
        return createAPIRequest(parameters, callback!);
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
 * @typedef AuditConfig
 * @memberOf! cloudbilling(v1)
 * @type object
 * @property {cloudbilling(v1).AuditLogConfig[]} auditLogConfigs The configuration for logging of each type of permission. Next ID: 4
 * @property {string} service Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.
 */
/**
 * @typedef AuditLogConfig
 * @memberOf! cloudbilling(v1)
 * @type object
 * @property {string[]} exemptedMembers Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.
 * @property {string} logType The log type that this config enables.
 */
/**
 * @typedef BillingAccount
 * @memberOf! cloudbilling(v1)
 * @type object
 * @property {string} displayName The display name given to the billing account, such as `My Billing Account`. This name is displayed in the GCP Console.
 * @property {string} masterBillingAccount If this account is a [subaccount](https://cloud.google.com/billing/docs/concepts), then this will be the resource name of the master billing account that it is being resold through. Otherwise this will be empty.  &gt; This field is currently in &gt; [Beta](https://cloud.google.com/terms/launch-stages).
 * @property {string} name The resource name of the billing account. The resource name has the form `billingAccounts/{billing_account_id}`. For example, `billingAccounts/012345-567890-ABCDEF` would be the resource name for billing account `012345-567890-ABCDEF`.
 * @property {boolean} open True if the billing account is open, and will therefore be charged for any usage on associated projects. False if the billing account is closed, and therefore projects associated with it will be unable to use paid services.
 */
/**
 * @typedef Binding
 * @memberOf! cloudbilling(v1)
 * @type object
 * @property {string[]} members Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values:  * `allUsers`: A special identifier that represents anyone who is    on the internet; with or without a Google account.  * `allAuthenticatedUsers`: A special identifier that represents anyone    who is authenticated with a Google account or a service account.  * `user:{emailid}`: An email address that represents a specific Google    account. For example, `alice@gmail.com` or `joe@example.com`.   * `serviceAccount:{emailid}`: An email address that represents a service    account. For example, `my-other-app@appspot.gserviceaccount.com`.  * `group:{emailid}`: An email address that represents a Google group.    For example, `admins@example.com`.   * `domain:{domain}`: A Google Apps domain name that represents all the    users of that domain. For example, `google.com` or `example.com`.
 * @property {string} role Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. Required
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
 * @typedef Policy
 * @memberOf! cloudbilling(v1)
 * @type object
 * @property {cloudbilling(v1).AuditConfig[]} auditConfigs Specifies cloud audit logging configuration for this policy.
 * @property {cloudbilling(v1).Binding[]} bindings Associates a list of `members` to a `role`. `bindings` with no members will result in an error.
 * @property {string} etag `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy.  If no `etag` is provided in the call to `setIamPolicy`, then the existing policy is overwritten blindly.
 * @property {integer} version Deprecated.
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
 * @property {number} currencyConversionRate Conversion rate used for currency conversion, from USD to the currency specified in the request. This includes any surcharge collected for billing in non USD currency. If a currency is not specified in the request this defaults to 1.0. Example: USD * currency_conversion_rate = JPY
 * @property {string} effectiveTime The timestamp from which this pricing was effective within the requested time range. This is guaranteed to be greater than or equal to the start_time field in the request and less than the end_time field in the request. If a time range was not specified in the request this field will be equivalent to a time within the last 12 hours, indicating the latest pricing info.
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
 * @typedef SetIamPolicyRequest
 * @memberOf! cloudbilling(v1)
 * @type object
 * @property {cloudbilling(v1).Policy} policy REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Cloud Platform services (such as Projects) might reject them.
 * @property {string} updateMask OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: paths: &quot;bindings, etag&quot; This field is only used by Cloud IAM.
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
 * @typedef TestIamPermissionsRequest
 * @memberOf! cloudbilling(v1)
 * @type object
 * @property {string[]} permissions The set of permissions to check for the `resource`. Permissions with wildcards (such as &#39;*&#39; or &#39;storage.*&#39;) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
 */
/**
 * @typedef TestIamPermissionsResponse
 * @memberOf! cloudbilling(v1)
 * @type object
 * @property {string[]} permissions A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
 */
/**
 * @typedef TierRate
 * @memberOf! cloudbilling(v1)
 * @type object
 * @property {number} startUsageAmount Usage is priced at this rate only after this amount. Example: start_usage_amount of 10 indicates that the usage will be priced at the unit_price after the first 10 usage_units.
 * @property {cloudbilling(v1).Money} unitPrice The price per unit of usage. Example: unit_price of amount $10 indicates that each unit will cost $10.
 */

export = Cloudbilling;
