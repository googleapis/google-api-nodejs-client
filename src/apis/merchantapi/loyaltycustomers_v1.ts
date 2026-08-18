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

export namespace merchantapi_loyaltycustomers_v1 {
  export interface Options extends GlobalOptions {
    version: 'loyaltycustomers_v1';
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
   * Merchant API
   *
   * Programmatically manage your Merchant Center Accounts.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const merchantapi = google.merchantapi('loyaltycustomers_v1');
   * ```
   */
  export class Merchantapi {
    context: APIRequestContext;
    accounts: Resource$Accounts;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.accounts = new Resource$Accounts(this.context);
    }
  }

  /**
   * Represents a customer’s physical address.
   */
  export interface Schema$AddressInfo {
    /**
     * Optional. The city of the customer.
     */
    city?: string | null;
    /**
     * Optional. The family name of the customer.
     */
    familyName?: string | null;
    /**
     * Optional. The given name of the customer.
     */
    givenName?: string | null;
    /**
     * Optional. The postal code (zip code) of the customer. **Format Rules:** * **United States:** 5-digit zip codes (e.g., "94108").
     */
    postalCode?: string | null;
    /**
     * Optional. The Unicode country/region code (CLDR) of the customer, such as "US" or "CH". This field is case-insensitive. For more information, see https://cldr.unicode.org/ and https://www.unicode.org/cldr/charts/latest/supplemental/territory_containment_un_m_49.html.
     */
    regionCode?: string | null;
    /**
     * Optional. The state or province of the customer.
     */
    state?: string | null;
  }
  /**
   * Represents a customer’s loyalty information. Represents loyalty customer data in `ManageLoyaltyCustomerMatch` API, but is not a resource that can be retrieved or listed by other methods.
   */
  export interface Schema$LoyaltyCustomer {
    /**
     * Required. The tier label of the loyalty tier the customer belongs to.
     */
    loyaltyTier?: string | null;
    /**
     * Optional. The point balance of the loyalty customer.
     */
    pointBalance?: string | null;
    /**
     * Required. The identifiers for the customer.
     */
    userIdentifier?: Schema$UserIdentifier;
  }
  /**
   * Request message for the ManageLoyaltyCustomerMatch method.
   */
  export interface Schema$ManageLoyaltyCustomerMatchRequest {
    /**
     * Required. The loyalty customer to insert, update, or remove.
     */
    loyaltyCustomer?: Schema$LoyaltyCustomer;
  }
  /**
   * Response message for the ManageLoyaltyCustomerMatch method.
   */
  export interface Schema$ManageLoyaltyCustomerMatchResponse {
    /**
     * The loyalty customer that was inserted, updated, or removed. If the customer's identifier cannot be matched to a Google account or if the user has not opted into loyalty personalization, this field will contain a default `LoyaltyCustomer` instance.
     */
    loyaltyCustomer?: Schema$LoyaltyCustomer;
  }
  /**
   * The change that happened to the product including old value, new value, country code as the region code and reporting context.
   */
  export interface Schema$ProductChange {
    /**
     * The new value of the changed resource or attribute. If empty, it means that the product was deleted. Will have one of these values : (`approved`, `pending`, `disapproved`, ``)
     */
    newValue?: string | null;
    /**
     * The old value of the changed resource or attribute. If empty, it means that the product was created. Will have one of these values : (`approved`, `pending`, `disapproved`, ``)
     */
    oldValue?: string | null;
    /**
     * Countries that have the change (if applicable). Represented in the ISO 3166 format.
     */
    regionCode?: string | null;
    /**
     * Reporting contexts that have the change (if applicable). Currently this field supports only (`SHOPPING_ADS`, `LOCAL_INVENTORY_ADS`, `YOUTUBE_SHOPPING`, `YOUTUBE_CHECKOUT`, `YOUTUBE_AFFILIATE`) from the enum value [ReportingContextEnum](/merchant/api/reference/rest/Shared.Types/ReportingContextEnum)
     */
    reportingContext?: string | null;
  }
  /**
   * The message that the merchant will receive to notify about product status change event
   */
  export interface Schema$ProductStatusChangeMessage {
    /**
     * The target account that owns the entity that changed. Format : `accounts/{merchant_id\}`
     */
    account?: string | null;
    /**
     * The attribute in the resource that changed, in this case it will be always `Status`.
     */
    attribute?: string | null;
    /**
     * A message to describe the change that happened to the product
     */
    changes?: Schema$ProductChange[];
    /**
     * The time at which the event was generated. If you want to order the notification messages you receive you should rely on this field not on the order of receiving the notifications.
     */
    eventTime?: string | null;
    /**
     * Optional. The product expiration time. This field will not be set if the notification is sent for a product deletion event.
     */
    expirationTime?: string | null;
    /**
     * The account that manages the merchant's account. can be the same as merchant id if it is standalone account. Format : `accounts/{service_provider_id\}`
     */
    managingAccount?: string | null;
    /**
     * The product name. Format: `accounts/{account\}/products/{product\}`
     */
    resource?: string | null;
    /**
     * The product id.
     */
    resourceId?: string | null;
    /**
     * The resource that changed, in this case it will always be `Product`.
     */
    resourceType?: string | null;
  }
  /**
   * The user identifiers associated with the customer. At least one of the fields within this message must be provided.
   */
  export interface Schema$UserIdentifier {
    /**
     * Optional. The customer’s physical address.
     */
    address?: Schema$AddressInfo;
    /**
     * Optional. The customer’s email address.
     */
    emailAddress?: string | null;
    /**
     * Optional. The customer's phone number, in [E.164 format](https://support.google.com/google-ads/answer/16355235) (e.g., "+16502530000").
     */
    phoneNumber?: string | null;
  }

  export class Resource$Accounts {
    context: APIRequestContext;
    loyaltyCustomers: Resource$Accounts$Loyaltycustomers;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.loyaltyCustomers = new Resource$Accounts$Loyaltycustomers(
        this.context
      );
    }
  }

  export class Resource$Accounts$Loyaltycustomers {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Manages (inserts, updates, or removes) a customer's loyalty tier information. This method serves as a single interface for all changes to a customer's loyalty status. The specific action (insert, update, or remove) is determined by the current state of the merchant-to-customer association and the `loyalty_tier` value provided in the request. **Operation Logic:** * **Upsert (Insert/Update):** Providing any valid tier other than `NON_MEMBER` will associate the customer with that tier. If an association already exists, it will be updated; otherwise, a new one will be created. * **Removal:** Setting `loyalty_tier` to `NON_MEMBER` will remove any existing loyalty association for the customer. **Privacy Note:** To protect user privacy, this method consistently returns a `200 OK` status with a default `LoyaltyCustomer` response if the customer's identifier cannot be matched to a Google account or if the user has not opted into loyalty personalization.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/merchantapi.googleapis.com
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
     * const merchantapi = google.merchantapi('loyaltycustomers_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await merchantapi.accounts.loyaltyCustomers.manage({
     *     // Required. The parent account where this loyalty customer will be handled. Format: `accounts/{account\}`
     *     parent: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "loyaltyCustomer": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "loyaltyCustomer": {}
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
    manage(
      params: Params$Resource$Accounts$Loyaltycustomers$Manage,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    manage(
      params?: Params$Resource$Accounts$Loyaltycustomers$Manage,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ManageLoyaltyCustomerMatchResponse>
    >;
    manage(
      params: Params$Resource$Accounts$Loyaltycustomers$Manage,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    manage(
      params: Params$Resource$Accounts$Loyaltycustomers$Manage,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ManageLoyaltyCustomerMatchResponse>,
      callback: BodyResponseCallback<Schema$ManageLoyaltyCustomerMatchResponse>
    ): void;
    manage(
      params: Params$Resource$Accounts$Loyaltycustomers$Manage,
      callback: BodyResponseCallback<Schema$ManageLoyaltyCustomerMatchResponse>
    ): void;
    manage(
      callback: BodyResponseCallback<Schema$ManageLoyaltyCustomerMatchResponse>
    ): void;
    manage(
      paramsOrCallback?:
        | Params$Resource$Accounts$Loyaltycustomers$Manage
        | BodyResponseCallback<Schema$ManageLoyaltyCustomerMatchResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ManageLoyaltyCustomerMatchResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ManageLoyaltyCustomerMatchResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ManageLoyaltyCustomerMatchResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Loyaltycustomers$Manage;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Loyaltycustomers$Manage;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://merchantapi.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/loyaltyCustomers/v1/{+parent}/loyaltyCustomers:manage'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
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
        createAPIRequest<Schema$ManageLoyaltyCustomerMatchResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ManageLoyaltyCustomerMatchResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Accounts$Loyaltycustomers$Manage extends StandardParameters {
    /**
     * Required. The parent account where this loyalty customer will be handled. Format: `accounts/{account\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ManageLoyaltyCustomerMatchRequest;
  }
}
