// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
} from 'google-auth-library';
import {
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  GlobalOptions,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {GaxiosPromise} from 'gaxios';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace billingbudgets_v1beta1 {
  export interface Options extends GlobalOptions {
    version: 'v1beta1';
  }

  interface StandardParameters {
    /**
     * V1 error format.
     */
    '$.xgafv'?: string;
    /**
     * OAuth access token.
     */
    access_token?: string;
    /**
     * Data format for response.
     */
    alt?: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauth_token?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    upload_protocol?: string;
  }

  /**
   * Cloud Billing Budget API
   *
   * The Cloud Billing Budget API stores Cloud Billing budgets, which define a budget plan and the rules to execute as spend is tracked against that plan.
   *
   * @example
   * const {google} = require('googleapis');
   * const billingbudgets = google.billingbudgets('v1beta1');
   *
   * @namespace billingbudgets
   * @type {Function}
   * @version v1beta1
   * @variation v1beta1
   * @param {object=} options Options for Billingbudgets
   */
  export class Billingbudgets {
    context: APIRequestContext;
    billingAccounts: Resource$Billingaccounts;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.billingAccounts = new Resource$Billingaccounts(this.context);
    }
  }

  /**
   * AllUpdatesRule defines notifications that are sent on every update to the billing account&#39;s spend, regardless of the thresholds defined using threshold rules.
   */
  export interface Schema$GoogleCloudBillingBudgetsV1beta1AllUpdatesRule {
    /**
     * Required. The name of the Cloud Pub/Sub topic where budget related messages will be published, in the form `projects/{project_id}/topics/{topic_id}`. Updates are sent at regular intervals to the topic. The topic needs to be created before the budget is created; see https://cloud.google.com/billing/docs/how-to/budgets#manage-notifications for more details. Caller is expected to have `pubsub.topics.setIamPolicy` permission on the topic when it&#39;s set for a budget, otherwise, the API call will fail with PERMISSION_DENIED. See https://cloud.google.com/pubsub/docs/access-control for more details on Pub/Sub roles and permissions.
     */
    pubsubTopic?: string | null;
    /**
     * Required. The schema version of the notification. Only &quot;1.0&quot; is accepted. It represents the JSON schema as defined in https://cloud.google.com/billing/docs/how-to/budgets#notification_format
     */
    schemaVersion?: string | null;
  }
  /**
   * A budget is a plan that describes what you expect to spend on Cloud projects, plus the rules to execute as spend is tracked against that plan, (for example, send an alert when 90% of the target spend is met). Currently all plans are monthly budgets so the usage period(s) tracked are implied (calendar months of usage back-to-back).
   */
  export interface Schema$GoogleCloudBillingBudgetsV1beta1Budget {
    /**
     * Optional. Rules to apply to all updates to the actual spend, regardless of the thresholds set in `threshold_rules`.
     */
    allUpdatesRule?: Schema$GoogleCloudBillingBudgetsV1beta1AllUpdatesRule;
    /**
     * Required. Budgeted amount.
     */
    amount?: Schema$GoogleCloudBillingBudgetsV1beta1BudgetAmount;
    /**
     * Optional. Filters that define which resources are used to compute the actual spend against the budget.
     */
    budgetFilter?: Schema$GoogleCloudBillingBudgetsV1beta1Filter;
    /**
     * User data for display name in UI. Validation: &lt;= 60 chars.
     */
    displayName?: string | null;
    /**
     * Optional. Etag to validate that the object is unchanged for a read-modify-write operation. An empty etag will cause an update to overwrite other changes.
     */
    etag?: string | null;
    /**
     * Output only. Resource name of the budget. The resource name implies the scope of a budget. Values are of the form `billingAccounts/{billingAccountId}/budgets/{budgetId}`.
     */
    name?: string | null;
    /**
     * Optional. Rules that trigger alerts (notifications of thresholds being crossed) when spend exceeds the specified percentages of the budget.
     */
    thresholdRules?: Schema$GoogleCloudBillingBudgetsV1beta1ThresholdRule[];
  }
  /**
   * The budgeted amount for each usage period.
   */
  export interface Schema$GoogleCloudBillingBudgetsV1beta1BudgetAmount {
    /**
     * Use the last period&#39;s actual spend as the budget for the present period.
     */
    lastPeriodAmount?: Schema$GoogleCloudBillingBudgetsV1beta1LastPeriodAmount;
    /**
     * A specified amount to use as the budget. `currency_code` is optional. If specified, it must match the currency of the billing account. The `currency_code` is provided on output.
     */
    specifiedAmount?: Schema$GoogleTypeMoney;
  }
  /**
   * Request for CreateBudget
   */
  export interface Schema$GoogleCloudBillingBudgetsV1beta1CreateBudgetRequest {
    /**
     * Required. Budget to create.
     */
    budget?: Schema$GoogleCloudBillingBudgetsV1beta1Budget;
  }
  /**
   * A filter for a budget, limiting the scope of the cost to calculate.
   */
  export interface Schema$GoogleCloudBillingBudgetsV1beta1Filter {
    /**
     * Optional. If not set, default behavior is `INCLUDE_ALL_CREDITS`.
     */
    creditTypesTreatment?: string | null;
    /**
     * Optional. A set of projects of the form `projects/{project}`, specifying that usage from only this set of projects should be included in the budget. If omitted, the report will include all usage for the billing account, regardless of which project the usage occurred on. Only zero or one project can be specified currently.
     */
    projects?: string[] | null;
    /**
     * Optional. A set of services of the form `services/{service_id}`, specifying that usage from only this set of services should be included in the budget. If omitted, the report will include usage for all the services. The service names are available through the Catalog API: https://cloud.google.com/billing/v1/how-tos/catalog-api.
     */
    services?: string[] | null;
  }
  /**
   * Describes a budget amount targeted to last period&#39;s spend. At this time, the amount is automatically 100% of last period&#39;s spend; that is, there are no other options yet. Future configuration will be described here (for example, configuring a percentage of last period&#39;s spend).
   */
  export interface Schema$GoogleCloudBillingBudgetsV1beta1LastPeriodAmount {}
  /**
   * Response for ListBudgets
   */
  export interface Schema$GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse {
    /**
     * List of the budgets owned by the requested billing account.
     */
    budgets?: Schema$GoogleCloudBillingBudgetsV1beta1Budget[];
    /**
     * If not empty, indicates that there may be more budgets that match the request; this value should be passed in a new `ListBudgetsRequest`.
     */
    nextPageToken?: string | null;
  }
  /**
   * ThresholdRule contains a definition of a threshold which triggers an alert (a notification of a threshold being crossed) to be sent when spend goes above the specified amount. Alerts are automatically e-mailed to users with the Billing Account Administrator role or the Billing Account User role. The thresholds here have no effect on notifications sent to anything configured under `Budget.all_updates_rule`.
   */
  export interface Schema$GoogleCloudBillingBudgetsV1beta1ThresholdRule {
    /**
     * Optional. The type of basis used to determine if spend has passed the threshold. Behavior defaults to CURRENT_SPEND if not set.
     */
    spendBasis?: string | null;
    /**
     * Required. Send an alert when this threshold is exceeded. This is a 1.0-based percentage, so 0.5 = 50%. Validation: non-negative number.
     */
    thresholdPercent?: number | null;
  }
  /**
   * Request for UpdateBudget
   */
  export interface Schema$GoogleCloudBillingBudgetsV1beta1UpdateBudgetRequest {
    /**
     * Required. The updated budget object. The budget to update is specified by the budget name in the budget.
     */
    budget?: Schema$GoogleCloudBillingBudgetsV1beta1Budget;
    /**
     * Optional. Indicates which fields in the provided budget to update. Read-only fields (such as `name`) cannot be changed. If this is not provided, then only fields with non-default values from the request are updated. See https://developers.google.com/protocol-buffers/docs/proto3#default for more details about default values.
     */
    updateMask?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:      service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$GoogleProtobufEmpty {}
  /**
   * Represents an amount of money with its currency type.
   */
  export interface Schema$GoogleTypeMoney {
    /**
     * The 3-letter currency code defined in ISO 4217.
     */
    currencyCode?: string | null;
    /**
     * Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
     */
    nanos?: number | null;
    /**
     * The whole units of the amount. For example if `currencyCode` is `&quot;USD&quot;`, then 1 unit is one US dollar.
     */
    units?: string | null;
  }

  export class Resource$Billingaccounts {
    context: APIRequestContext;
    budgets: Resource$Billingaccounts$Budgets;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.budgets = new Resource$Billingaccounts$Budgets(this.context);
    }
  }

  export class Resource$Billingaccounts$Budgets {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * billingbudgets.billingAccounts.budgets.create
     * @desc Creates a new budget. See <a href="https://cloud.google.com/billing/quotas">Quotas and limits</a> for more information on the limits of the number of budgets you can create.
     * @alias billingbudgets.billingAccounts.budgets.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The name of the billing account to create the budget in. Values are of the form `billingAccounts/{billingAccountId}`.
     * @param {().GoogleCloudBillingBudgetsV1beta1CreateBudgetRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Billingaccounts$Budgets$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudBillingBudgetsV1beta1Budget>;
    create(
      params: Params$Resource$Billingaccounts$Budgets$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingBudgetsV1beta1Budget>,
      callback: BodyResponseCallback<
        Schema$GoogleCloudBillingBudgetsV1beta1Budget
      >
    ): void;
    create(
      params: Params$Resource$Billingaccounts$Budgets$Create,
      callback: BodyResponseCallback<
        Schema$GoogleCloudBillingBudgetsV1beta1Budget
      >
    ): void;
    create(
      callback: BodyResponseCallback<
        Schema$GoogleCloudBillingBudgetsV1beta1Budget
      >
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Budgets$Create
        | BodyResponseCallback<Schema$GoogleCloudBillingBudgetsV1beta1Budget>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingBudgetsV1beta1Budget>,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudBillingBudgetsV1beta1Budget
      >
    ): void | GaxiosPromise<Schema$GoogleCloudBillingBudgetsV1beta1Budget> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Billingaccounts$Budgets$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Billingaccounts$Budgets$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://billingbudgets.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/budgets').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudBillingBudgetsV1beta1Budget>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudBillingBudgetsV1beta1Budget>(
          parameters
        );
      }
    }

    /**
     * billingbudgets.billingAccounts.budgets.delete
     * @desc Deletes a budget. Returns successfully if already deleted.
     * @alias billingbudgets.billingAccounts.budgets.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. Name of the budget to delete. Values are of the form `billingAccounts/{billingAccountId}/budgets/{budgetId}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Billingaccounts$Budgets$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Billingaccounts$Budgets$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Billingaccounts$Budgets$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Budgets$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void | GaxiosPromise<Schema$GoogleProtobufEmpty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Billingaccounts$Budgets$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Billingaccounts$Budgets$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://billingbudgets.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * billingbudgets.billingAccounts.budgets.get
     * @desc Returns a budget.  WARNING: There are some fields exposed on the Google Cloud Console that aren’t available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.
     * @alias billingbudgets.billingAccounts.budgets.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. Name of budget to get. Values are of the form `billingAccounts/{billingAccountId}/budgets/{budgetId}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Billingaccounts$Budgets$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudBillingBudgetsV1beta1Budget>;
    get(
      params: Params$Resource$Billingaccounts$Budgets$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingBudgetsV1beta1Budget>,
      callback: BodyResponseCallback<
        Schema$GoogleCloudBillingBudgetsV1beta1Budget
      >
    ): void;
    get(
      params: Params$Resource$Billingaccounts$Budgets$Get,
      callback: BodyResponseCallback<
        Schema$GoogleCloudBillingBudgetsV1beta1Budget
      >
    ): void;
    get(
      callback: BodyResponseCallback<
        Schema$GoogleCloudBillingBudgetsV1beta1Budget
      >
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Budgets$Get
        | BodyResponseCallback<Schema$GoogleCloudBillingBudgetsV1beta1Budget>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingBudgetsV1beta1Budget>,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudBillingBudgetsV1beta1Budget
      >
    ): void | GaxiosPromise<Schema$GoogleCloudBillingBudgetsV1beta1Budget> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Billingaccounts$Budgets$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Billingaccounts$Budgets$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://billingbudgets.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudBillingBudgetsV1beta1Budget>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudBillingBudgetsV1beta1Budget>(
          parameters
        );
      }
    }

    /**
     * billingbudgets.billingAccounts.budgets.list
     * @desc Returns a list of budgets for a billing account.  WARNING: There are some fields exposed on the Google Cloud Console that aren’t available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.
     * @alias billingbudgets.billingAccounts.budgets.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Optional. The maximum number of budgets to return per page. The default and maximum value are 100.
     * @param {string=} params.pageToken Optional. The value returned by the last `ListBudgetsResponse` which indicates that this is a continuation of a prior `ListBudgets` call, and that the system should return the next page of data.
     * @param {string} params.parent Required. Name of billing account to list budgets under. Values are of the form `billingAccounts/{billingAccountId}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Billingaccounts$Budgets$List,
      options?: MethodOptions
    ): GaxiosPromise<
      Schema$GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse
    >;
    list(
      params: Params$Resource$Billingaccounts$Budgets$List,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse
      >
    ): void;
    list(
      params: Params$Resource$Billingaccounts$Budgets$List,
      callback: BodyResponseCallback<
        Schema$GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Budgets$List
        | BodyResponseCallback<
            Schema$GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse
          >,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse
      >
    ): void | GaxiosPromise<
      Schema$GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Billingaccounts$Budgets$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Billingaccounts$Budgets$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://billingbudgets.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/budgets').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<
          Schema$GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse
        >(parameters, callback);
      } else {
        return createAPIRequest<
          Schema$GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse
        >(parameters);
      }
    }

    /**
     * billingbudgets.billingAccounts.budgets.patch
     * @desc Updates a budget and returns the updated budget.  WARNING: There are some fields exposed on the Google Cloud Console that aren’t available on this API. Budget fields that are not exposed in this API will not be changed by this method.
     * @alias billingbudgets.billingAccounts.budgets.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Output only. Resource name of the budget. The resource name implies the scope of a budget. Values are of the form `billingAccounts/{billingAccountId}/budgets/{budgetId}`.
     * @param {().GoogleCloudBillingBudgetsV1beta1UpdateBudgetRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Billingaccounts$Budgets$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudBillingBudgetsV1beta1Budget>;
    patch(
      params: Params$Resource$Billingaccounts$Budgets$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingBudgetsV1beta1Budget>,
      callback: BodyResponseCallback<
        Schema$GoogleCloudBillingBudgetsV1beta1Budget
      >
    ): void;
    patch(
      params: Params$Resource$Billingaccounts$Budgets$Patch,
      callback: BodyResponseCallback<
        Schema$GoogleCloudBillingBudgetsV1beta1Budget
      >
    ): void;
    patch(
      callback: BodyResponseCallback<
        Schema$GoogleCloudBillingBudgetsV1beta1Budget
      >
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Budgets$Patch
        | BodyResponseCallback<Schema$GoogleCloudBillingBudgetsV1beta1Budget>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingBudgetsV1beta1Budget>,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudBillingBudgetsV1beta1Budget
      >
    ): void | GaxiosPromise<Schema$GoogleCloudBillingBudgetsV1beta1Budget> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Billingaccounts$Budgets$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Billingaccounts$Budgets$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://billingbudgets.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudBillingBudgetsV1beta1Budget>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudBillingBudgetsV1beta1Budget>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Billingaccounts$Budgets$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the billing account to create the budget in. Values are of the form `billingAccounts/{billingAccountId}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudBillingBudgetsV1beta1CreateBudgetRequest;
  }
  export interface Params$Resource$Billingaccounts$Budgets$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. Name of the budget to delete. Values are of the form `billingAccounts/{billingAccountId}/budgets/{budgetId}`.
     */
    name?: string;
  }
  export interface Params$Resource$Billingaccounts$Budgets$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. Name of budget to get. Values are of the form `billingAccounts/{billingAccountId}/budgets/{budgetId}`.
     */
    name?: string;
  }
  export interface Params$Resource$Billingaccounts$Budgets$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The maximum number of budgets to return per page. The default and maximum value are 100.
     */
    pageSize?: number;
    /**
     * Optional. The value returned by the last `ListBudgetsResponse` which indicates that this is a continuation of a prior `ListBudgets` call, and that the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * Required. Name of billing account to list budgets under. Values are of the form `billingAccounts/{billingAccountId}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Billingaccounts$Budgets$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Output only. Resource name of the budget. The resource name implies the scope of a budget. Values are of the form `billingAccounts/{billingAccountId}/budgets/{budgetId}`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudBillingBudgetsV1beta1UpdateBudgetRequest;
  }
}
