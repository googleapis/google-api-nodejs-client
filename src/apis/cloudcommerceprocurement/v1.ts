// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
  BaseExternalAccountClient,
  GaxiosResponseWithHTTP2,
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  StreamMethodOptions,
  GlobalOptions,
  GoogleAuth,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {Readable} from 'stream';

export namespace cloudcommerceprocurement_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  interface StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?:
      | string
      | OAuth2Client
      | JWT
      | Compute
      | UserRefreshClient
      | BaseExternalAccountClient
      | GoogleAuth;

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
   * Cloud Commerce Partner Procurement API
   *
   * Partner API for the Cloud Commerce Procurement Service.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const cloudcommerceprocurement = google.cloudcommerceprocurement('v1');
   * ```
   */
  export class Cloudcommerceprocurement {
    context: APIRequestContext;
    providers: Resource$Providers;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.providers = new Resource$Providers(this.context);
    }
  }

  /**
   * Represents an account that was established by the customer on the service provider's system.
   */
  export interface Schema$Account {
    /**
     * Output only. The approvals for this account. These approvals are used to track actions that are permitted or have been completed by a customer within the context of the provider. This might include a sign up flow or a provisioning step, for example, that the provider can admit to having happened.
     */
    approvals?: Schema$Approval[];
    /**
     * Output only. The creation timestamp.
     */
    createTime?: string | null;
    /**
     * Output only. The custom properties that were collected from the user to create this account.
     */
    inputProperties?: {[key: string]: any} | null;
    /**
     * Output only. The resource name of the account. Account names have the form `accounts/{account_id\}`.
     */
    name?: string | null;
    /**
     * Output only. The identifier of the service provider that this account was created against. Each service provider is assigned a unique provider value when they onboard with Cloud Commerce platform.
     */
    provider?: string | null;
    /**
     * Output only. The reseller parent billing account of the account's corresponding billing account, applicable only when the corresponding billing account is a subaccount of a reseller. Included in responses only for view: ACCOUNT_VIEW_FULL. Format: billingAccounts/{billing_account_id\}
     */
    resellerParentBillingAccount?: string | null;
    /**
     * Output only. The state of the account. This is used to decide whether the customer is in good standing with the provider and is able to make purchases. An account might not be able to make a purchase if the billing account is suspended, for example.
     */
    state?: string | null;
    /**
     * Output only. The last update timestamp.
     */
    updateTime?: string | null;
  }
  /**
   * An approval for some action on an account.
   */
  export interface Schema$Approval {
    /**
     * Output only. The name of the approval.
     */
    name?: string | null;
    /**
     * Output only. An explanation for the state of the approval.
     */
    reason?: string | null;
    /**
     * Output only. The state of the approval.
     */
    state?: string | null;
    /**
     * Optional. The last update timestamp of the approval.
     */
    updateTime?: string | null;
  }
  /**
   * Request message for PartnerProcurementService.ApproveAccount.
   */
  export interface Schema$ApproveAccountRequest {
    /**
     * The name of the approval being approved. If absent and there is only one approval possible, that approval will be granted. If absent and there are many approvals possible, the request will fail with a 400 Bad Request. Optional.
     */
    approvalName?: string | null;
    /**
     * Set of properties that should be associated with the account. Optional.
     */
    properties?: {[key: string]: string} | null;
    /**
     * Free form text string explaining the approval reason. Optional. Max allowed length: 256 bytes. Longer strings will be truncated.
     */
    reason?: string | null;
  }
  /**
   * Request message for [PartnerProcurementService.ApproveEntitlementPlanChange[].
   */
  export interface Schema$ApproveEntitlementPlanChangeRequest {
    /**
     * Required. Name of the pending plan that's being approved.
     */
    pendingPlanName?: string | null;
  }
  /**
   * Request message for [PartnerProcurementService.ApproveEntitlement[].
   */
  export interface Schema$ApproveEntitlementRequest {
    /**
     * Optional. The resource name of the entitlement that was migrated, with the format `providers/{provider_id\}/entitlements/{entitlement_id\}`. Should only be sent when resources have been migrated from entitlement_migrated to the new entitlement. Optional.
     */
    entitlementMigrated?: string | null;
    /**
     * Set of properties that should be associated with the entitlement. Optional.
     */
    properties?: {[key: string]: string} | null;
  }
  /**
   * A resource using (consuming) this entitlement.
   */
  export interface Schema$Consumer {
    /**
     * A project name with format `projects/`.
     */
    project?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Represents a procured product of a customer.
   */
  export interface Schema$Entitlement {
    /**
     * Output only. The resource name of the account that this entitlement is based on, if any.
     */
    account?: string | null;
    /**
     * Output only. The reason the entitlement was cancelled. If this entitlement wasn't cancelled, this field is empty. Possible values include "unknown", "expired", "user-cancelled", "account-closed", "billing-disabled" (if the customer has manually disabled billing to their resources), "user-aborted", and "migrated" (if the entitlement has migrated across products). Values of this field are subject to change, and we recommend that you don't build your technical integration to rely on these fields.
     */
    cancellationReason?: string | null;
    /**
     * Output only. The resources using this entitlement, if applicable.
     */
    consumers?: Schema$Consumer[];
    /**
     * Output only. The creation timestamp.
     */
    createTime?: string | null;
    /**
     * Output only. The entitlement benefit IDs associated with the purchase.
     */
    entitlementBenefitIds?: string[] | null;
    /**
     * Output only. The custom properties that were collected from the user to create this entitlement.
     */
    inputProperties?: {[key: string]: any} | null;
    /**
     * Provider-supplied message that is displayed to the end user. Currently this is used to communicate progress and ETA for provisioning. This field can be updated only when a user is waiting for an action from the provider, i.e. entitlement state is EntitlementState.ENTITLEMENT_ACTIVATION_REQUESTED or EntitlementState.ENTITLEMENT_PENDING_PLAN_CHANGE_APPROVAL. This field is cleared automatically when the entitlement state changes.
     */
    messageToUser?: string | null;
    /**
     * Output only. The resource name of the entitlement. Entitlement names have the form `providers/{provider_id\}/entitlements/{entitlement_id\}`.
     */
    name?: string | null;
    /**
     * Output only. The end time of the new offer, determined from the offer's specified end date. If the offer des not have a specified end date then this field is not set. This field is populated even if the entitlement isn't active yet. If there's no upcoming offer, the field is empty. * If the entitlement is in the state ENTITLEMENT_ACTIVATION_REQUESTED, ENTITLEMENT_ACTIVE, or ENTITLEMENT_PENDING_CANCELLATION, then this field is empty. * If the entitlement is in the state ENTITLEMENT_PENDING_PLAN_CHANGE_APPROVAL or ENTITLEMENT_PENDING_PLAN_CHANGE, and the upcoming offer has a specified end date, then this field is populated with the expected end time of the upcoming offer, in the future. Otherwise, this field is empty. * If the entitlement is in the state ENTITLEMENT_CANCELLED, then this field is empty.
     */
    newOfferEndTime?: string | null;
    /**
     * Output only. The timestamp when the new offer becomes effective. This field is populated even if the entitlement isn't active yet. If there's no upcoming offer, the field is empty. * If the entitlement is in the state ENTITLEMENT_ACTIVATION_REQUESTED, this field isn't populated when the entitlement isn't yet approved. After the entitlement is approved, this field is populated with the effective time of the upcoming offer. * If the entitlement is in the state ENTITLEMENT_ACTIVE or ENTITLEMENT_PENDING_CANCELLATION, this field isn't populated. * If the entitlement is in the state ENTITLEMENT_PENDING_PLAN_CHANGE_APPROVAL, this field isn't populated, because the entitlement change is waiting on approval. * If the entitlement is in the state ENTITLEMENT_PENDING_PLAN_CHANGE, this field is populated with the expected effective time of the upcoming offer, which is in the future. * If the entitlement is in the state ENTITLEMENT_CANCELLED, then this field is empty.
     */
    newOfferStartTime?: string | null;
    /**
     * Output only. Upon a pending plan change, the name of the offer that the entitlement is switching to. Only exists if the pending plan change is moving to an offer. This field isn't populated for entitlements which aren't active yet. Format: 'projects/{project\}/services/{service\}/privateOffers/{offer\}' OR 'projects/{project\}/services/{service\}/standardOffers/{offer\}', depending on whether the offer is private or public. The {service\} in the name is the listing service of the offer. It could be either the product service that the offer is referencing, or a generic private offer parent service. We recommend that you don't build your integration to rely on the meaning of this {service\} part. * If the entitlement is in the state ENTITLEMENT_ACTIVATION_REQUESTED, ENTITLEMENT_ACTIVE or ENTITLEMENT_PENDING_CANCELLATION, then this field is empty. * If the entitlement is in the state ENTITLEMENT_PENDING_PLAN_CHANGE_APPROVAL or ENTITLEMENT_PENDING_PLAN_CHANGE, then this field is populated with the upcoming offer. * If the entitlement is in the state ENTITLEMENT_CANCELLED, then this is empty.
     */
    newPendingOffer?: string | null;
    /**
     * Output only. The duration of the new offer, in ISO 8601 duration format. This field is populated for pending offer changes. It isn't populated for entitlements which aren't active yet. If the offer has a specified end date instead of a duration, this field is empty. * If the entitlement is in the state ENTITLEMENT_ACTIVATION_REQUESTED, ENTITLEMENT_ACTIVE, or ENTITLEMENT_PENDING_CANCELLATION, this field is empty. * If the entitlement is in the state ENTITLEMENT_PENDING_PLAN_CHANGE_APPROVAL or ENTITLEMENT_PENDING_PLAN_CHANGE, and the upcoming offer doesn't have a specified end date, then this field is populated with the duration of the upcoming offer. Otherwise, this field is empty. * If the entitlement is in the state ENTITLEMENT_CANCELLED, then this field is empty.
     */
    newPendingOfferDuration?: string | null;
    /**
     * Output only. The identifier of the pending new plan. Required if the product has plans and the entitlement has a pending plan change.
     */
    newPendingPlan?: string | null;
    /**
     * Output only. The name of the offer that was procured. Field is empty if order wasn't made using an offer. Format: 'projects/{project\}/services/{service\}/privateOffers/{offer\}' OR 'projects/{project\}/services/{service\}/standardOffers/{offer\}', depending on whether the offer is private or public. The {service\} in the name is the listing service of the offer. It could be either the product service that the offer is referencing, or a generic private offer parent service. We recommend that you don't build your integration to rely on the meaning of this {service\} part. * If the entitlement is in the state ENTITLEMENT_ACTIVATION_REQUESTED, this field is populated with the upcoming offer. * If the entitlement is in the state ENTITLEMENT_ACTIVE, ENTITLEMENT_PENDING_CANCELLATION, ENTITLEMENT_PENDING_PLAN_CHANGE, or ENTITLEMENT_PENDING_PLAN_CHANGE_APPROVAL, this field is populated with the current offer. * If the entitlement is in the state ENTITLEMENT_CANCELLED, then this field is populated with the latest offer that the order was associated with.
     */
    offer?: string | null;
    /**
     * Output only. The offer duration of the current offer, in ISO 8601 duration format. This is empty if the entitlement wasn't made using an offer, or if the offer has a specified end date instead of a duration. * If the entitlement is in the state ENTITLEMENT_ACTIVATION_REQUESTED, and the upcoming offer doesn't have a specified end date, then this field is populated with the duration of the upcoming offer. Otherwise, this field is empty. * If the entitlement is in the state ENTITLEMENT_ACTIVE, ENTITLEMENT_PENDING_CANCELLATION, ENTITLEMENT_PENDING_PLAN_CHANGE, or ENTITLEMENT_PENDING_PLAN_CHANGE_APPROVAL, and the current offer doesn't have a specified end date, then this field contains the duration of the current offer. Otherwise, this field is empty. * If the entitlement is in the state ENTITLEMENT_CANCELLED, and the offer doesn't have a specified end date, then this field is populated with the duration of the latest offer that the order was associated with. Otherwise, this field is empty.
     */
    offerDuration?: string | null;
    /**
     * Output only. End time for the current term of the Offer associated with this entitlement. The value of this field can change naturally over time due to auto-renewal, even if the offer isn't changed. * If the entitlement is in the state ENTITLEMENT_ACTIVATION_REQUESTED, then: * If the entitlement isn't approved yet approved, and the offer has a specified end date, then this field is populated with the expected end time of the upcoming offer, in the future. Otherwise, this field is empty. * If the entitlement is approved, then this field is populated with the expected end time of the upcoming offer, in the future. This means that this field and the field offer_duration can both exist. * If the entitlement is in the state ENTITLEMENT_ACTIVE or ENTITLEMENT_PENDING_CANCELLATION, then this field is populated with the expected end time of the current offer, in the future. This field's value is set regardless of whether the offer has a specific end date or a duration. This means that this field and the field offer_duration can both exist. * If the entitlement is in the state ENTITLEMENT_PENDING_PLAN_CHANGE_APPROVAL or ENTITLEMENT_PENDING_PLAN_CHANGE: * If the entitlement's pricing model is usage based and the associated offer is a private offer whose term has ended, then this field reflects the ACTUAL end time of the entitlement's associated offer (in the past), even though the entitlement associated with this private offer does not terminate at the end of that private offer's term. * Otherwise, this is the expected end date of the current offer, in the future. * If the entitlement is in the state ENTITLEMENT_CANCELLED, then this field is populated with the end time, in the past, of the latest offer that the order was associated with. If the entitlement was cancelled before any offer started, then this field is empty.
     */
    offerEndTime?: string | null;
    /**
     * Output only. The order ID of this entitlement, without any `orders/` resource name prefix.
     */
    orderId?: string | null;
    /**
     * Output only. The identifier of the plan that was procured. Required if the product has plans.
     */
    plan?: string | null;
    /**
     * Output only. The identifier of the entity that was purchased. This may actually represent a product, quote, or offer. We strongly recommend that you use the following more explicit fields: productExternalName, quoteExternalName, or offer.
     */
    product?: string | null;
    /**
     * Output only. The identifier of the product that was procured.
     */
    productExternalName?: string | null;
    /**
     * Output only. The identifier of the service provider that this entitlement was created against. Each service provider is assigned a unique provider value when they onboard with Cloud Commerce platform.
     */
    provider?: string | null;
    /**
     * Output only. The identifier of the quote that was used to procure. Empty if the order is not purchased using a quote.
     */
    quoteExternalName?: string | null;
    /**
     * Output only. The state of the entitlement.
     */
    state?: string | null;
    /**
     * Output only. End time for the subscription corresponding to this entitlement.
     */
    subscriptionEndTime?: string | null;
    /**
     * Output only. The last update timestamp.
     */
    updateTime?: string | null;
    /**
     * Output only. The consumerId to use when reporting usage through the Service Control API. See the consumerId field at [Reporting Metrics](https://cloud.google.com/service-control/reporting-metrics) for more details. This field is present only if the product has usage-based billing configured.
     */
    usageReportingId?: string | null;
  }
  /**
   * Response message for [PartnerProcurementService.ListAccounts[].
   */
  export interface Schema$ListAccountsResponse {
    /**
     * The list of accounts in this response.
     */
    accounts?: Schema$Account[];
    /**
     * The token for fetching the next page.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for PartnerProcurementService.ListEntitlements.
   */
  export interface Schema$ListEntitlementsResponse {
    /**
     * The list of entitlements in this response.
     */
    entitlements?: Schema$Entitlement[];
    /**
     * The token for fetching the next page.
     */
    nextPageToken?: string | null;
  }
  /**
   * Request message for PartnerProcurementService.RejectAccount.
   */
  export interface Schema$RejectAccountRequest {
    /**
     * The name of the approval being rejected. If absent and there is only one approval possible, that approval will be rejected. If absent and there are many approvals possible, the request will fail with a 400 Bad Request. Optional.
     */
    approvalName?: string | null;
    /**
     * Free form text string explaining the rejection reason. Max allowed length: 256 bytes. Longer strings will be truncated.
     */
    reason?: string | null;
  }
  /**
   * Request message for PartnerProcurementService.RejectEntitlementPlanChange.
   */
  export interface Schema$RejectEntitlementPlanChangeRequest {
    /**
     * Required. Name of the pending plan that is being rejected.
     */
    pendingPlanName?: string | null;
    /**
     * Free form text string explaining the rejection reason. Max allowed length: 256 bytes. Longer strings will be truncated.
     */
    reason?: string | null;
  }
  /**
   * Request message for PartnerProcurementService.RejectEntitlement.
   */
  export interface Schema$RejectEntitlementRequest {
    /**
     * Free form text string explaining the rejection reason. Max allowed length: 256 bytes. Longer strings will be truncated.
     */
    reason?: string | null;
  }
  /**
   * Request message for PartnerProcurementService.ResetAccount.
   */
  export interface Schema$ResetAccountRequest {}
  /**
   * Request message for ParterProcurementService.SuspendEntitlement. This is not yet supported.
   */
  export interface Schema$SuspendEntitlementRequest {
    /**
     * A free-form reason string, explaining the reason for suspension request.
     */
    reason?: string | null;
  }

  export class Resource$Providers {
    context: APIRequestContext;
    accounts: Resource$Providers$Accounts;
    entitlements: Resource$Providers$Entitlements;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.accounts = new Resource$Providers$Accounts(this.context);
      this.entitlements = new Resource$Providers$Entitlements(this.context);
    }
  }

  export class Resource$Providers$Accounts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Grants an approval on an Account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudcommerceprocurement.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const cloudcommerceprocurement = google.cloudcommerceprocurement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudcommerceprocurement.providers.accounts.approve({
     *     // Required. The resource name of the account, with the format `providers/{providerId\}/accounts/{accountId\}`.
     *     name: 'providers/my-provider/accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "approvalName": "my_approvalName",
     *       //   "properties": {},
     *       //   "reason": "my_reason"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    approve(
      params: Params$Resource$Providers$Accounts$Approve,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    approve(
      params?: Params$Resource$Providers$Accounts$Approve,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    approve(
      params: Params$Resource$Providers$Accounts$Approve,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    approve(
      params: Params$Resource$Providers$Accounts$Approve,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    approve(
      params: Params$Resource$Providers$Accounts$Approve,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    approve(callback: BodyResponseCallback<Schema$Empty>): void;
    approve(
      paramsOrCallback?:
        | Params$Resource$Providers$Accounts$Approve
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Providers$Accounts$Approve;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Providers$Accounts$Approve;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudcommerceprocurement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:approve').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Gets a requested Account resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudcommerceprocurement.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const cloudcommerceprocurement = google.cloudcommerceprocurement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudcommerceprocurement.providers.accounts.get({
     *     // Required. The name of the account to retrieve.
     *     name: 'providers/my-provider/accounts/my-account',
     *     // Optional. What information to include in the response.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "approvals": [],
     *   //   "createTime": "my_createTime",
     *   //   "inputProperties": {},
     *   //   "name": "my_name",
     *   //   "provider": "my_provider",
     *   //   "resellerParentBillingAccount": "my_resellerParentBillingAccount",
     *   //   "state": "my_state",
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Providers$Accounts$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Providers$Accounts$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Account>>;
    get(
      params: Params$Resource$Providers$Accounts$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Providers$Accounts$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Account>,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    get(
      params: Params$Resource$Providers$Accounts$Get,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    get(callback: BodyResponseCallback<Schema$Account>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Providers$Accounts$Get
        | BodyResponseCallback<Schema$Account>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Account>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Account>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Account>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Providers$Accounts$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Providers$Accounts$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudcommerceprocurement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Account>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Account>(parameters);
      }
    }

    /**
     * Lists Accounts that the provider has access to.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudcommerceprocurement.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const cloudcommerceprocurement = google.cloudcommerceprocurement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudcommerceprocurement.providers.accounts.list({
     *     // The maximum number of entries that are requested. The default page size is 25 and the maximum page size is 200.
     *     pageSize: 'placeholder-value',
     *     // The token for fetching the next page.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent resource name.
     *     parent: 'providers/my-provider',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accounts": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Providers$Accounts$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Providers$Accounts$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListAccountsResponse>>;
    list(
      params: Params$Resource$Providers$Accounts$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Providers$Accounts$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAccountsResponse>,
      callback: BodyResponseCallback<Schema$ListAccountsResponse>
    ): void;
    list(
      params: Params$Resource$Providers$Accounts$List,
      callback: BodyResponseCallback<Schema$ListAccountsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListAccountsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Providers$Accounts$List
        | BodyResponseCallback<Schema$ListAccountsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAccountsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAccountsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListAccountsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Providers$Accounts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Providers$Accounts$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudcommerceprocurement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/accounts').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListAccountsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAccountsResponse>(parameters);
      }
    }

    /**
     * Rejects an approval on an Account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudcommerceprocurement.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const cloudcommerceprocurement = google.cloudcommerceprocurement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudcommerceprocurement.providers.accounts.reject({
     *     // Required. The resource name of the account.
     *     name: 'providers/my-provider/accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "approvalName": "my_approvalName",
     *       //   "reason": "my_reason"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    reject(
      params: Params$Resource$Providers$Accounts$Reject,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    reject(
      params?: Params$Resource$Providers$Accounts$Reject,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    reject(
      params: Params$Resource$Providers$Accounts$Reject,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    reject(
      params: Params$Resource$Providers$Accounts$Reject,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    reject(
      params: Params$Resource$Providers$Accounts$Reject,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    reject(callback: BodyResponseCallback<Schema$Empty>): void;
    reject(
      paramsOrCallback?:
        | Params$Resource$Providers$Accounts$Reject
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Providers$Accounts$Reject;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Providers$Accounts$Reject;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudcommerceprocurement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:reject').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Resets an Account and cancels all associated Entitlements. Partner can only reset accounts they own rather than customer accounts.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudcommerceprocurement.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const cloudcommerceprocurement = google.cloudcommerceprocurement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudcommerceprocurement.providers.accounts.reset({
     *     // Required. The resource name of the account.
     *     name: 'providers/my-provider/accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    reset(
      params: Params$Resource$Providers$Accounts$Reset,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    reset(
      params?: Params$Resource$Providers$Accounts$Reset,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    reset(
      params: Params$Resource$Providers$Accounts$Reset,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    reset(
      params: Params$Resource$Providers$Accounts$Reset,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    reset(
      params: Params$Resource$Providers$Accounts$Reset,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    reset(callback: BodyResponseCallback<Schema$Empty>): void;
    reset(
      paramsOrCallback?:
        | Params$Resource$Providers$Accounts$Reset
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Providers$Accounts$Reset;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Providers$Accounts$Reset;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudcommerceprocurement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:reset').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }
  }

  export interface Params$Resource$Providers$Accounts$Approve
    extends StandardParameters {
    /**
     * Required. The resource name of the account, with the format `providers/{providerId\}/accounts/{accountId\}`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ApproveAccountRequest;
  }
  export interface Params$Resource$Providers$Accounts$Get
    extends StandardParameters {
    /**
     * Required. The name of the account to retrieve.
     */
    name?: string;
    /**
     * Optional. What information to include in the response.
     */
    view?: string;
  }
  export interface Params$Resource$Providers$Accounts$List
    extends StandardParameters {
    /**
     * The maximum number of entries that are requested. The default page size is 25 and the maximum page size is 200.
     */
    pageSize?: number;
    /**
     * The token for fetching the next page.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name.
     */
    parent?: string;
  }
  export interface Params$Resource$Providers$Accounts$Reject
    extends StandardParameters {
    /**
     * Required. The resource name of the account.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RejectAccountRequest;
  }
  export interface Params$Resource$Providers$Accounts$Reset
    extends StandardParameters {
    /**
     * Required. The resource name of the account.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ResetAccountRequest;
  }

  export class Resource$Providers$Entitlements {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Approves an entitlement that is in the EntitlementState.ENTITLEMENT_ACTIVATION_REQUESTED state. This method is invoked by the provider to approve the creation of the entitlement resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudcommerceprocurement.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const cloudcommerceprocurement = google.cloudcommerceprocurement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudcommerceprocurement.providers.entitlements.approve({
     *     // Required. The resource name of the entitlement, with the format `providers/{providerId\}/entitlements/{entitlementId\}`.
     *     name: 'providers/my-provider/entitlements/my-entitlement',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "entitlementMigrated": "my_entitlementMigrated",
     *       //   "properties": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    approve(
      params: Params$Resource$Providers$Entitlements$Approve,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    approve(
      params?: Params$Resource$Providers$Entitlements$Approve,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    approve(
      params: Params$Resource$Providers$Entitlements$Approve,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    approve(
      params: Params$Resource$Providers$Entitlements$Approve,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    approve(
      params: Params$Resource$Providers$Entitlements$Approve,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    approve(callback: BodyResponseCallback<Schema$Empty>): void;
    approve(
      paramsOrCallback?:
        | Params$Resource$Providers$Entitlements$Approve
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Providers$Entitlements$Approve;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Providers$Entitlements$Approve;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudcommerceprocurement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:approve').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Approves an entitlement plan change that is in the EntitlementState.ENTITLEMENT_PENDING_PLAN_CHANGE_APPROVAL state. This method is invoked by the provider to approve the plan change on the entitlement resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudcommerceprocurement.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const cloudcommerceprocurement = google.cloudcommerceprocurement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await cloudcommerceprocurement.providers.entitlements.approvePlanChange({
     *       // Required. The resource name of the entitlement.
     *       name: 'providers/my-provider/entitlements/my-entitlement',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "pendingPlanName": "my_pendingPlanName"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    approvePlanChange(
      params: Params$Resource$Providers$Entitlements$Approveplanchange,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    approvePlanChange(
      params?: Params$Resource$Providers$Entitlements$Approveplanchange,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    approvePlanChange(
      params: Params$Resource$Providers$Entitlements$Approveplanchange,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    approvePlanChange(
      params: Params$Resource$Providers$Entitlements$Approveplanchange,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    approvePlanChange(
      params: Params$Resource$Providers$Entitlements$Approveplanchange,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    approvePlanChange(callback: BodyResponseCallback<Schema$Empty>): void;
    approvePlanChange(
      paramsOrCallback?:
        | Params$Resource$Providers$Entitlements$Approveplanchange
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Providers$Entitlements$Approveplanchange;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Providers$Entitlements$Approveplanchange;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudcommerceprocurement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:approvePlanChange').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Gets a requested Entitlement resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudcommerceprocurement.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const cloudcommerceprocurement = google.cloudcommerceprocurement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudcommerceprocurement.providers.entitlements.get({
     *     // Required. The name of the entitlement to retrieve.
     *     name: 'providers/my-provider/entitlements/my-entitlement',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "account": "my_account",
     *   //   "cancellationReason": "my_cancellationReason",
     *   //   "consumers": [],
     *   //   "createTime": "my_createTime",
     *   //   "entitlementBenefitIds": [],
     *   //   "inputProperties": {},
     *   //   "messageToUser": "my_messageToUser",
     *   //   "name": "my_name",
     *   //   "newOfferEndTime": "my_newOfferEndTime",
     *   //   "newOfferStartTime": "my_newOfferStartTime",
     *   //   "newPendingOffer": "my_newPendingOffer",
     *   //   "newPendingOfferDuration": "my_newPendingOfferDuration",
     *   //   "newPendingPlan": "my_newPendingPlan",
     *   //   "offer": "my_offer",
     *   //   "offerDuration": "my_offerDuration",
     *   //   "offerEndTime": "my_offerEndTime",
     *   //   "orderId": "my_orderId",
     *   //   "plan": "my_plan",
     *   //   "product": "my_product",
     *   //   "productExternalName": "my_productExternalName",
     *   //   "provider": "my_provider",
     *   //   "quoteExternalName": "my_quoteExternalName",
     *   //   "state": "my_state",
     *   //   "subscriptionEndTime": "my_subscriptionEndTime",
     *   //   "updateTime": "my_updateTime",
     *   //   "usageReportingId": "my_usageReportingId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Providers$Entitlements$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Providers$Entitlements$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Entitlement>>;
    get(
      params: Params$Resource$Providers$Entitlements$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Providers$Entitlements$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Entitlement>,
      callback: BodyResponseCallback<Schema$Entitlement>
    ): void;
    get(
      params: Params$Resource$Providers$Entitlements$Get,
      callback: BodyResponseCallback<Schema$Entitlement>
    ): void;
    get(callback: BodyResponseCallback<Schema$Entitlement>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Providers$Entitlements$Get
        | BodyResponseCallback<Schema$Entitlement>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Entitlement>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Entitlement>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Entitlement>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Providers$Entitlements$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Providers$Entitlements$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudcommerceprocurement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Entitlement>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Entitlement>(parameters);
      }
    }

    /**
     * Lists Entitlements for which the provider has read access.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudcommerceprocurement.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const cloudcommerceprocurement = google.cloudcommerceprocurement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudcommerceprocurement.providers.entitlements.list({
     *     // The filter that can be used to limit the list request. The filter is a query string that can match a selected set of attributes with string values. For example `account=E-1234-5678-ABCD-EFGH`, `state=pending_cancellation`, and `plan!=foo-plan`. Supported query attributes are * `account` * `customer_billing_account` with value in the format of: `billingAccounts/{id\}` * `product_external_name` * `quote_external_name` * `offer` * `new_pending_offer` * `plan` * `newPendingPlan` or `new_pending_plan` * `state` * `services` * `consumers.project` * `change_history.new_offer` Note that the consumers and change_history.new_offer match works on repeated structures, so equality (`consumers.project=projects/123456789`) is not supported. Set membership can be expressed with the `:` operator. For example, `consumers.project:projects/123456789` finds entitlements with at least one consumer with project field equal to `projects/123456789`. `change_history.new_offer` retrieves all entitlements that were once associated or are currently active with the offer. Also note that the state name match is case-insensitive and query can omit the prefix "ENTITLEMENT_". For example, `state=active` is equivalent to `state=ENTITLEMENT_ACTIVE`. If the query contains some special characters other than letters, underscore, or digits, the phrase must be quoted with double quotes. For example, `product="providerId:productId"`, where the product name needs to be quoted because it contains special character colon. Queries can be combined with `AND`, `OR`, and `NOT` to form more complex queries. They can also be grouped to force a desired evaluation order. For example, `state=active AND (account=E-1234 OR account=5678) AND NOT (product=foo-product)`. Connective `AND` can be omitted between two predicates. For example `account=E-1234 state=active` is equivalent to `account=E-1234 AND state=active`.
     *     filter: 'placeholder-value',
     *     // The maximum number of entries that are requested. The default page size is 200.
     *     pageSize: 'placeholder-value',
     *     // The token for fetching the next page.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent resource name.
     *     parent: 'providers/my-provider',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "entitlements": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Providers$Entitlements$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Providers$Entitlements$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListEntitlementsResponse>>;
    list(
      params: Params$Resource$Providers$Entitlements$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Providers$Entitlements$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListEntitlementsResponse>,
      callback: BodyResponseCallback<Schema$ListEntitlementsResponse>
    ): void;
    list(
      params: Params$Resource$Providers$Entitlements$List,
      callback: BodyResponseCallback<Schema$ListEntitlementsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListEntitlementsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Providers$Entitlements$List
        | BodyResponseCallback<Schema$ListEntitlementsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListEntitlementsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListEntitlementsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListEntitlementsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Providers$Entitlements$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Providers$Entitlements$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudcommerceprocurement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/entitlements').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListEntitlementsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListEntitlementsResponse>(parameters);
      }
    }

    /**
     * Updates an existing Entitlement.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudcommerceprocurement.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const cloudcommerceprocurement = google.cloudcommerceprocurement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudcommerceprocurement.providers.entitlements.patch({
     *     // Required. The name of the entitlement to update.
     *     name: 'providers/my-provider/entitlements/my-entitlement',
     *     // The update mask that applies to the resource. See the [FieldMask definition] (https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask) for more details.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "account": "my_account",
     *       //   "cancellationReason": "my_cancellationReason",
     *       //   "consumers": [],
     *       //   "createTime": "my_createTime",
     *       //   "entitlementBenefitIds": [],
     *       //   "inputProperties": {},
     *       //   "messageToUser": "my_messageToUser",
     *       //   "name": "my_name",
     *       //   "newOfferEndTime": "my_newOfferEndTime",
     *       //   "newOfferStartTime": "my_newOfferStartTime",
     *       //   "newPendingOffer": "my_newPendingOffer",
     *       //   "newPendingOfferDuration": "my_newPendingOfferDuration",
     *       //   "newPendingPlan": "my_newPendingPlan",
     *       //   "offer": "my_offer",
     *       //   "offerDuration": "my_offerDuration",
     *       //   "offerEndTime": "my_offerEndTime",
     *       //   "orderId": "my_orderId",
     *       //   "plan": "my_plan",
     *       //   "product": "my_product",
     *       //   "productExternalName": "my_productExternalName",
     *       //   "provider": "my_provider",
     *       //   "quoteExternalName": "my_quoteExternalName",
     *       //   "state": "my_state",
     *       //   "subscriptionEndTime": "my_subscriptionEndTime",
     *       //   "updateTime": "my_updateTime",
     *       //   "usageReportingId": "my_usageReportingId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "account": "my_account",
     *   //   "cancellationReason": "my_cancellationReason",
     *   //   "consumers": [],
     *   //   "createTime": "my_createTime",
     *   //   "entitlementBenefitIds": [],
     *   //   "inputProperties": {},
     *   //   "messageToUser": "my_messageToUser",
     *   //   "name": "my_name",
     *   //   "newOfferEndTime": "my_newOfferEndTime",
     *   //   "newOfferStartTime": "my_newOfferStartTime",
     *   //   "newPendingOffer": "my_newPendingOffer",
     *   //   "newPendingOfferDuration": "my_newPendingOfferDuration",
     *   //   "newPendingPlan": "my_newPendingPlan",
     *   //   "offer": "my_offer",
     *   //   "offerDuration": "my_offerDuration",
     *   //   "offerEndTime": "my_offerEndTime",
     *   //   "orderId": "my_orderId",
     *   //   "plan": "my_plan",
     *   //   "product": "my_product",
     *   //   "productExternalName": "my_productExternalName",
     *   //   "provider": "my_provider",
     *   //   "quoteExternalName": "my_quoteExternalName",
     *   //   "state": "my_state",
     *   //   "subscriptionEndTime": "my_subscriptionEndTime",
     *   //   "updateTime": "my_updateTime",
     *   //   "usageReportingId": "my_usageReportingId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Providers$Entitlements$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Providers$Entitlements$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Entitlement>>;
    patch(
      params: Params$Resource$Providers$Entitlements$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Providers$Entitlements$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Entitlement>,
      callback: BodyResponseCallback<Schema$Entitlement>
    ): void;
    patch(
      params: Params$Resource$Providers$Entitlements$Patch,
      callback: BodyResponseCallback<Schema$Entitlement>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Entitlement>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Providers$Entitlements$Patch
        | BodyResponseCallback<Schema$Entitlement>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Entitlement>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Entitlement>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Entitlement>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Providers$Entitlements$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Providers$Entitlements$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudcommerceprocurement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Entitlement>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Entitlement>(parameters);
      }
    }

    /**
     * Rejects an entitlement that is in the EntitlementState.ENTITLEMENT_ACTIVATION_REQUESTED state. This method is invoked by the provider to reject the creation of the entitlement resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudcommerceprocurement.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const cloudcommerceprocurement = google.cloudcommerceprocurement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudcommerceprocurement.providers.entitlements.reject({
     *     // Required. The resource name of the entitlement.
     *     name: 'providers/my-provider/entitlements/my-entitlement',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "reason": "my_reason"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    reject(
      params: Params$Resource$Providers$Entitlements$Reject,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    reject(
      params?: Params$Resource$Providers$Entitlements$Reject,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    reject(
      params: Params$Resource$Providers$Entitlements$Reject,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    reject(
      params: Params$Resource$Providers$Entitlements$Reject,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    reject(
      params: Params$Resource$Providers$Entitlements$Reject,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    reject(callback: BodyResponseCallback<Schema$Empty>): void;
    reject(
      paramsOrCallback?:
        | Params$Resource$Providers$Entitlements$Reject
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Providers$Entitlements$Reject;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Providers$Entitlements$Reject;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudcommerceprocurement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:reject').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Rejects an entitlement plan change that is in the EntitlementState.ENTITLEMENT_PENDING_PLAN_CHANGE_APPROVAL state. This method is invoked by the provider to reject the plan change on the entitlement resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudcommerceprocurement.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const cloudcommerceprocurement = google.cloudcommerceprocurement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await cloudcommerceprocurement.providers.entitlements.rejectPlanChange({
     *       // Required. The resource name of the entitlement.
     *       name: 'providers/my-provider/entitlements/my-entitlement',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "pendingPlanName": "my_pendingPlanName",
     *         //   "reason": "my_reason"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    rejectPlanChange(
      params: Params$Resource$Providers$Entitlements$Rejectplanchange,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    rejectPlanChange(
      params?: Params$Resource$Providers$Entitlements$Rejectplanchange,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    rejectPlanChange(
      params: Params$Resource$Providers$Entitlements$Rejectplanchange,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    rejectPlanChange(
      params: Params$Resource$Providers$Entitlements$Rejectplanchange,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    rejectPlanChange(
      params: Params$Resource$Providers$Entitlements$Rejectplanchange,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    rejectPlanChange(callback: BodyResponseCallback<Schema$Empty>): void;
    rejectPlanChange(
      paramsOrCallback?:
        | Params$Resource$Providers$Entitlements$Rejectplanchange
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Providers$Entitlements$Rejectplanchange;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Providers$Entitlements$Rejectplanchange;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudcommerceprocurement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:rejectPlanChange').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Requests suspension of an active Entitlement. This is not yet supported.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudcommerceprocurement.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const cloudcommerceprocurement = google.cloudcommerceprocurement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudcommerceprocurement.providers.entitlements.suspend({
     *     // Required. The name of the entitlement to suspend.
     *     name: 'providers/my-provider/entitlements/my-entitlement',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "reason": "my_reason"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    suspend(
      params: Params$Resource$Providers$Entitlements$Suspend,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    suspend(
      params?: Params$Resource$Providers$Entitlements$Suspend,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    suspend(
      params: Params$Resource$Providers$Entitlements$Suspend,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    suspend(
      params: Params$Resource$Providers$Entitlements$Suspend,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    suspend(
      params: Params$Resource$Providers$Entitlements$Suspend,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    suspend(callback: BodyResponseCallback<Schema$Empty>): void;
    suspend(
      paramsOrCallback?:
        | Params$Resource$Providers$Entitlements$Suspend
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Providers$Entitlements$Suspend;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Providers$Entitlements$Suspend;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudcommerceprocurement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:suspend').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }
  }

  export interface Params$Resource$Providers$Entitlements$Approve
    extends StandardParameters {
    /**
     * Required. The resource name of the entitlement, with the format `providers/{providerId\}/entitlements/{entitlementId\}`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ApproveEntitlementRequest;
  }
  export interface Params$Resource$Providers$Entitlements$Approveplanchange
    extends StandardParameters {
    /**
     * Required. The resource name of the entitlement.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ApproveEntitlementPlanChangeRequest;
  }
  export interface Params$Resource$Providers$Entitlements$Get
    extends StandardParameters {
    /**
     * Required. The name of the entitlement to retrieve.
     */
    name?: string;
  }
  export interface Params$Resource$Providers$Entitlements$List
    extends StandardParameters {
    /**
     * The filter that can be used to limit the list request. The filter is a query string that can match a selected set of attributes with string values. For example `account=E-1234-5678-ABCD-EFGH`, `state=pending_cancellation`, and `plan!=foo-plan`. Supported query attributes are * `account` * `customer_billing_account` with value in the format of: `billingAccounts/{id\}` * `product_external_name` * `quote_external_name` * `offer` * `new_pending_offer` * `plan` * `newPendingPlan` or `new_pending_plan` * `state` * `services` * `consumers.project` * `change_history.new_offer` Note that the consumers and change_history.new_offer match works on repeated structures, so equality (`consumers.project=projects/123456789`) is not supported. Set membership can be expressed with the `:` operator. For example, `consumers.project:projects/123456789` finds entitlements with at least one consumer with project field equal to `projects/123456789`. `change_history.new_offer` retrieves all entitlements that were once associated or are currently active with the offer. Also note that the state name match is case-insensitive and query can omit the prefix "ENTITLEMENT_". For example, `state=active` is equivalent to `state=ENTITLEMENT_ACTIVE`. If the query contains some special characters other than letters, underscore, or digits, the phrase must be quoted with double quotes. For example, `product="providerId:productId"`, where the product name needs to be quoted because it contains special character colon. Queries can be combined with `AND`, `OR`, and `NOT` to form more complex queries. They can also be grouped to force a desired evaluation order. For example, `state=active AND (account=E-1234 OR account=5678) AND NOT (product=foo-product)`. Connective `AND` can be omitted between two predicates. For example `account=E-1234 state=active` is equivalent to `account=E-1234 AND state=active`.
     */
    filter?: string;
    /**
     * The maximum number of entries that are requested. The default page size is 200.
     */
    pageSize?: number;
    /**
     * The token for fetching the next page.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name.
     */
    parent?: string;
  }
  export interface Params$Resource$Providers$Entitlements$Patch
    extends StandardParameters {
    /**
     * Required. The name of the entitlement to update.
     */
    name?: string;
    /**
     * The update mask that applies to the resource. See the [FieldMask definition] (https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask) for more details.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Entitlement;
  }
  export interface Params$Resource$Providers$Entitlements$Reject
    extends StandardParameters {
    /**
     * Required. The resource name of the entitlement.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RejectEntitlementRequest;
  }
  export interface Params$Resource$Providers$Entitlements$Rejectplanchange
    extends StandardParameters {
    /**
     * Required. The resource name of the entitlement.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RejectEntitlementPlanChangeRequest;
  }
  export interface Params$Resource$Providers$Entitlements$Suspend
    extends StandardParameters {
    /**
     * Required. The name of the entitlement to suspend.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SuspendEntitlementRequest;
  }
}
