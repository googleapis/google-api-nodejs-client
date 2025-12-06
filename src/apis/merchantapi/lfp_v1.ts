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

export namespace merchantapi_lfp_v1 {
  export interface Options extends GlobalOptions {
    version: 'lfp_v1';
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
   * const merchantapi = google.merchantapi('lfp_v1');
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
   * Country-specific settings for the merchant.
   */
  export interface Schema$CountrySettings {
    /**
     * True if this merchant has enabled free local listings in MC.
     */
    freeLocalListingsEnabled?: boolean | null;
    /**
     * Output only. The verification state of this merchant's instock serving feature.
     */
    instockServingVerificationState?: string | null;
    /**
     * Output only. The verification state of this merchant's inventory check.
     */
    inventoryVerificationState?: string | null;
    /**
     * True if this merchant has enabled local inventory ads in MC.
     */
    localInventoryAdsEnabled?: boolean | null;
    /**
     * Output only. The verification state of this merchant's pickup serving feature.
     */
    pickupServingVerificationState?: string | null;
    /**
     * Output only. The product page type selected by this merchant.
     */
    productPageType?: string | null;
    /**
     * Required. The [CLDR territory code](https://github.com/unicode-org/cldr/blob/latest/common/main/en.xml) for the country for which these settings are defined.
     */
    regionCode?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * The inventory statistics for a merchant.
   */
  export interface Schema$InventoryStats {
    /**
     * Number of entries (understanding entry as a pair of product and store) that were built based on provided inventories/sales and submitted to Google.
     */
    submittedEntries?: string | null;
    /**
     * Number of submitted in stock entries.
     */
    submittedInStockEntries?: string | null;
    /**
     * Number of products from provided inventories/sales that were created from matches to existing online products provided by the merchant or to the Google catalog.
     */
    submittedProducts?: string | null;
    /**
     * Number of entries that were built based on provided inventories/sales and couldn't be submitted to Google due to errors like missing product.
     */
    unsubmittedEntries?: string | null;
  }
  /**
   * Local Inventory for the merchant.
   */
  export interface Schema$LfpInventory {
    /**
     * Required. Availability of the product at this store. For accepted attribute values, see the [local product inventory data specification](https://support.google.com/merchants/answer/3061342)
     */
    availability?: string | null;
    /**
     * Optional. The time when the inventory is collected. If not set, it will be set to the time when the inventory is submitted.
     */
    collectionTime?: string | null;
    /**
     * Required. The two-letter ISO 639-1 language code for the item.
     */
    contentLanguage?: string | null;
    /**
     * Optional. The [feed label](https://developers.google.com/shopping-content/guides/products/feed-labels) for the product. If this is not set, it will default to `regionCode`.
     */
    feedLabel?: string | null;
    /**
     * Optional. The Global Trade Item Number of the product.
     */
    gtin?: string | null;
    /**
     * Output only. Identifier. The name for the `LfpInventory` resource. Format: `accounts/{account\}/lfpInventories/{target_merchant\}~{store_code\}~{offer\}`
     */
    name?: string | null;
    /**
     * Required. Immutable. A unique identifier for the product. If both inventories and sales are submitted for a merchant, this id should match for the same product. **Note**: if the merchant sells the same product new and used, they should have different IDs.
     */
    offerId?: string | null;
    /**
     * Optional. Supported pickup method for this offer. Unless the value is "not supported", this field must be submitted together with `pickupSla`. For accepted attribute values, see the [local product inventory data specification](https://support.google.com/merchants/answer/3061342).
     */
    pickupMethod?: string | null;
    /**
     * Optional. Expected date that an order will be ready for pickup relative to the order date. Must be submitted together with `pickupMethod`. For accepted attribute values, see the [local product inventory data specification](https://support.google.com/merchants/answer/3061342).
     */
    pickupSla?: string | null;
    /**
     * Optional. The current price of the product.
     */
    price?: Schema$Price;
    /**
     * Optional. Quantity of the product available at this store. Must be greater than or equal to zero.
     */
    quantity?: string | null;
    /**
     * Required. The [CLDR territory code](https://github.com/unicode-org/cldr/blob/latest/common/main/en.xml) for the country where the product is sold.
     */
    regionCode?: string | null;
    /**
     * Required. The identifier of the merchant's store. Either the store code inserted through `InsertLfpStore` or the store code in the Business Profile.
     */
    storeCode?: string | null;
    /**
     * Required. The Merchant Center ID of the merchant to submit the inventory for.
     */
    targetAccount?: string | null;
  }
  /**
   * The LFP state of a merchant.
   */
  export interface Schema$LfpMerchantState {
    /**
     * Country-specific settings for the merchant.
     */
    countrySettings?: Schema$CountrySettings[];
    /**
     * The inventory statistics for the merchant. The field will be absent if the merchant has no inventory submitted through LFP.
     */
    inventoryStats?: Schema$InventoryStats;
    /**
     * Number of [GBPs](https://www.google.com/business/) this merchant has access to.
     */
    linkedGbps?: string | null;
    /**
     * Identifier. The name of the `LfpMerchantState` resource. Format: `accounts/{account\}/lfpMerchantStates/{target_merchant\}`. For example, `accounts/123456/lfpMerchantStates/567890`.
     */
    name?: string | null;
    /**
     * Output only. The state per store from the specified merchant. The field will be absent if the merchant has no stores submitted through LFP.
     */
    storeStates?: Schema$LfpStoreState[];
  }
  /**
   * A sale for the merchant.
   */
  export interface Schema$LfpSale {
    /**
     * Required. The two-letter ISO 639-1 language code for the item.
     */
    contentLanguage?: string | null;
    /**
     * Optional. The [feed label](https://developers.google.com/shopping-content/guides/products/feed-labels) for the product. If this is not set, it will default to `regionCode`.
     */
    feedLabel?: string | null;
    /**
     * Required. The Global Trade Item Number of the sold product.
     */
    gtin?: string | null;
    /**
     * Output only. Identifier. The name of the `LfpSale` resource. Format: `accounts/{account\}/lfpSales/{sale\}`
     */
    name?: string | null;
    /**
     * Required. A unique identifier for the product. If both inventories and sales are submitted for a merchant, this id should match for the same product. **Note**: if the merchant sells the same product new and used, they should have different IDs.
     */
    offerId?: string | null;
    /**
     * Required. The unit price of the product.
     */
    price?: Schema$Price;
    /**
     * Required. The relative change of the available quantity. Negative for items returned.
     */
    quantity?: string | null;
    /**
     * Required. The [CLDR territory code](https://github.com/unicode-org/cldr/blob/latest/common/main/en.xml) for the country where the product is sold.
     */
    regionCode?: string | null;
    /**
     * Required. The timestamp for the sale.
     */
    saleTime?: string | null;
    /**
     * Required. The identifier of the merchant's store. Either a `storeCode` inserted through the API or the code of the store in the Business Profile.
     */
    storeCode?: string | null;
    /**
     * Required. The Merchant Center ID of the merchant to submit the sale for.
     */
    targetAccount?: string | null;
    /**
     * Output only. System generated globally unique ID for the `LfpSale`.
     */
    uid?: string | null;
  }
  /**
   * A store for the merchant. This will be used to match to a store under the Google Business Profile of the target merchant. If a matching store can't be found, the inventories or sales submitted with the store code will not be used.
   */
  export interface Schema$LfpStore {
    /**
     * Optional. [Google My Business category id](https://support.google.com/business/answer/7249669).
     */
    gcidCategory?: string[] | null;
    /**
     * Optional. Output only. The state of matching to a Google Business Profile. See matchingStateHint for further details if no match is found.
     */
    matchingState?: string | null;
    /**
     * Optional. Output only. The hint of why the matching has failed. This is only set when matchingState=`STORE_MATCHING_STATE_FAILED`. Possible values are: - "`linked-store-not-found`": There aren't any Google Business Profile stores available for matching. - "`store-match-not-found`": The provided `LfpStore` couldn't be matched to any of the connected Google Business Profile stores. Merchant Center account is connected correctly and stores are available on Google Business Profile, but the `LfpStore` location address does not match with Google Business Profile stores' addresses. Update the `LfpStore` address or Google Business Profile store address to match correctly. - "`store-match-unverified`": The provided `LfpStore` couldn't be matched to any of the connected Google Business Profile stores, as the matched Google Business Profile store is unverified. Go through the Google Business Profile verification process to match correctly.
     */
    matchingStateHint?: string | null;
    /**
     * Output only. Identifier. The name of the `LfpStore` resource. Format: `accounts/{account\}/lfpStores/{target_merchant\}~{store_code\}`
     */
    name?: string | null;
    /**
     * Optional. The store phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format. Example: `+15556767888`
     */
    phoneNumber?: string | null;
    /**
     * Optional. The [Google Place Id](https://developers.google.com/maps/documentation/places/web-service/place-id#id-overview) of the store location.
     */
    placeId?: string | null;
    /**
     * Required. The street address of the store. Example: 1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA.
     */
    storeAddress?: string | null;
    /**
     * Required. Immutable. A store identifier that is unique for the target merchant.
     */
    storeCode?: string | null;
    /**
     * Optional. The merchant or store name.
     */
    storeName?: string | null;
    /**
     * Required. The Merchant Center id of the merchant to submit the store for.
     */
    targetAccount?: string | null;
    /**
     * Optional. The website URL for the store or merchant.
     */
    websiteUri?: string | null;
  }
  /**
   * The state of a specific merchant's store.
   */
  export interface Schema$LfpStoreState {
    /**
     * Output only. The store matching state.
     */
    matchingState?: string | null;
    /**
     * The hint of why the matching has failed (only set if matching_state is FAILED).
     */
    matchingStateHint?: string | null;
    /**
     * Required. Immutable. The identifier of this store.
     */
    storeCode?: string | null;
  }
  /**
   * Response message for the ListLfpStores method.
   */
  export interface Schema$ListLfpStoresResponse {
    /**
     * The stores from the specified merchant.
     */
    lfpStores?: Schema$LfpStore[];
    /**
     * A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * The price represented as a number and currency.
   */
  export interface Schema$Price {
    /**
     * The price represented as a number in micros (1 million micros is an equivalent to one's currency standard unit, for example, 1 USD = 1000000 micros).
     */
    amountMicros?: string | null;
    /**
     * The currency of the price using three-letter acronyms according to [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217).
     */
    currencyCode?: string | null;
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

  export class Resource$Accounts {
    context: APIRequestContext;
    lfpInventories: Resource$Accounts$Lfpinventories;
    lfpMerchantStates: Resource$Accounts$Lfpmerchantstates;
    lfpSales: Resource$Accounts$Lfpsales;
    lfpStores: Resource$Accounts$Lfpstores;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.lfpInventories = new Resource$Accounts$Lfpinventories(this.context);
      this.lfpMerchantStates = new Resource$Accounts$Lfpmerchantstates(
        this.context
      );
      this.lfpSales = new Resource$Accounts$Lfpsales(this.context);
      this.lfpStores = new Resource$Accounts$Lfpstores(this.context);
    }
  }

  export class Resource$Accounts$Lfpinventories {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Inserts a `LfpInventory` resource for the given target merchant account. If the resource already exists, it will be replaced. The inventory automatically expires after 30 days.
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
     * const merchantapi = google.merchantapi('lfp_v1');
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
     *   const res = await merchantapi.accounts.lfpInventories.insert({
     *     // Required. The LFP provider account. Format: `accounts/{account\}`
     *     parent: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "availability": "my_availability",
     *       //   "collectionTime": "my_collectionTime",
     *       //   "contentLanguage": "my_contentLanguage",
     *       //   "feedLabel": "my_feedLabel",
     *       //   "gtin": "my_gtin",
     *       //   "name": "my_name",
     *       //   "offerId": "my_offerId",
     *       //   "pickupMethod": "my_pickupMethod",
     *       //   "pickupSla": "my_pickupSla",
     *       //   "price": {},
     *       //   "quantity": "my_quantity",
     *       //   "regionCode": "my_regionCode",
     *       //   "storeCode": "my_storeCode",
     *       //   "targetAccount": "my_targetAccount"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "availability": "my_availability",
     *   //   "collectionTime": "my_collectionTime",
     *   //   "contentLanguage": "my_contentLanguage",
     *   //   "feedLabel": "my_feedLabel",
     *   //   "gtin": "my_gtin",
     *   //   "name": "my_name",
     *   //   "offerId": "my_offerId",
     *   //   "pickupMethod": "my_pickupMethod",
     *   //   "pickupSla": "my_pickupSla",
     *   //   "price": {},
     *   //   "quantity": "my_quantity",
     *   //   "regionCode": "my_regionCode",
     *   //   "storeCode": "my_storeCode",
     *   //   "targetAccount": "my_targetAccount"
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
    insert(
      params: Params$Resource$Accounts$Lfpinventories$Insert,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    insert(
      params?: Params$Resource$Accounts$Lfpinventories$Insert,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$LfpInventory>>;
    insert(
      params: Params$Resource$Accounts$Lfpinventories$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Accounts$Lfpinventories$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$LfpInventory>,
      callback: BodyResponseCallback<Schema$LfpInventory>
    ): void;
    insert(
      params: Params$Resource$Accounts$Lfpinventories$Insert,
      callback: BodyResponseCallback<Schema$LfpInventory>
    ): void;
    insert(callback: BodyResponseCallback<Schema$LfpInventory>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Accounts$Lfpinventories$Insert
        | BodyResponseCallback<Schema$LfpInventory>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LfpInventory>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LfpInventory>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$LfpInventory>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Lfpinventories$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Lfpinventories$Insert;
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
            url: (rootUrl + '/lfp/v1/{+parent}/lfpInventories:insert').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$LfpInventory>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LfpInventory>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Lfpinventories$Insert extends StandardParameters {
    /**
     * Required. The LFP provider account. Format: `accounts/{account\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LfpInventory;
  }

  export class Resource$Accounts$Lfpmerchantstates {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the LFP state of a merchant
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
     * const merchantapi = google.merchantapi('lfp_v1');
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
     *   const res = await merchantapi.accounts.lfpMerchantStates.get({
     *     // Required. The name of the state to retrieve. Format: `accounts/{account\}/lfpMerchantStates/{target_merchant\}`. For example, `accounts/123456/lfpMerchantStates/567890`.
     *     name: 'accounts/my-account/lfpMerchantStates/my-lfpMerchantState',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "countrySettings": [],
     *   //   "inventoryStats": {},
     *   //   "linkedGbps": "my_linkedGbps",
     *   //   "name": "my_name",
     *   //   "storeStates": []
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
      params: Params$Resource$Accounts$Lfpmerchantstates$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Accounts$Lfpmerchantstates$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$LfpMerchantState>>;
    get(
      params: Params$Resource$Accounts$Lfpmerchantstates$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounts$Lfpmerchantstates$Get,
      options: MethodOptions | BodyResponseCallback<Schema$LfpMerchantState>,
      callback: BodyResponseCallback<Schema$LfpMerchantState>
    ): void;
    get(
      params: Params$Resource$Accounts$Lfpmerchantstates$Get,
      callback: BodyResponseCallback<Schema$LfpMerchantState>
    ): void;
    get(callback: BodyResponseCallback<Schema$LfpMerchantState>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Lfpmerchantstates$Get
        | BodyResponseCallback<Schema$LfpMerchantState>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LfpMerchantState>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LfpMerchantState>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$LfpMerchantState>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Lfpmerchantstates$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Lfpmerchantstates$Get;
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
            url: (rootUrl + '/lfp/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$LfpMerchantState>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LfpMerchantState>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Lfpmerchantstates$Get extends StandardParameters {
    /**
     * Required. The name of the state to retrieve. Format: `accounts/{account\}/lfpMerchantStates/{target_merchant\}`. For example, `accounts/123456/lfpMerchantStates/567890`.
     */
    name?: string;
  }

  export class Resource$Accounts$Lfpsales {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Inserts a `LfpSale` for the given merchant.
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
     * const merchantapi = google.merchantapi('lfp_v1');
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
     *   const res = await merchantapi.accounts.lfpSales.insert({
     *     // Required. The LFP provider account. Format: `accounts/{lfp_partner\}`
     *     parent: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "contentLanguage": "my_contentLanguage",
     *       //   "feedLabel": "my_feedLabel",
     *       //   "gtin": "my_gtin",
     *       //   "name": "my_name",
     *       //   "offerId": "my_offerId",
     *       //   "price": {},
     *       //   "quantity": "my_quantity",
     *       //   "regionCode": "my_regionCode",
     *       //   "saleTime": "my_saleTime",
     *       //   "storeCode": "my_storeCode",
     *       //   "targetAccount": "my_targetAccount",
     *       //   "uid": "my_uid"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentLanguage": "my_contentLanguage",
     *   //   "feedLabel": "my_feedLabel",
     *   //   "gtin": "my_gtin",
     *   //   "name": "my_name",
     *   //   "offerId": "my_offerId",
     *   //   "price": {},
     *   //   "quantity": "my_quantity",
     *   //   "regionCode": "my_regionCode",
     *   //   "saleTime": "my_saleTime",
     *   //   "storeCode": "my_storeCode",
     *   //   "targetAccount": "my_targetAccount",
     *   //   "uid": "my_uid"
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
    insert(
      params: Params$Resource$Accounts$Lfpsales$Insert,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    insert(
      params?: Params$Resource$Accounts$Lfpsales$Insert,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$LfpSale>>;
    insert(
      params: Params$Resource$Accounts$Lfpsales$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Accounts$Lfpsales$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$LfpSale>,
      callback: BodyResponseCallback<Schema$LfpSale>
    ): void;
    insert(
      params: Params$Resource$Accounts$Lfpsales$Insert,
      callback: BodyResponseCallback<Schema$LfpSale>
    ): void;
    insert(callback: BodyResponseCallback<Schema$LfpSale>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Accounts$Lfpsales$Insert
        | BodyResponseCallback<Schema$LfpSale>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LfpSale>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LfpSale>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$LfpSale>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Lfpsales$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Lfpsales$Insert;
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
            url: (rootUrl + '/lfp/v1/{+parent}/lfpSales:insert').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$LfpSale>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LfpSale>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Lfpsales$Insert extends StandardParameters {
    /**
     * Required. The LFP provider account. Format: `accounts/{lfp_partner\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LfpSale;
  }

  export class Resource$Accounts$Lfpstores {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a store for a target merchant.
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
     * const merchantapi = google.merchantapi('lfp_v1');
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
     *   const res = await merchantapi.accounts.lfpStores.delete({
     *     // Required. The name of the store to delete for the target merchant account. Format: `accounts/{account\}/lfpStores/{target_merchant\}~{store_code\}`
     *     name: 'accounts/my-account/lfpStores/my-lfpStore',
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
    delete(
      params: Params$Resource$Accounts$Lfpstores$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Accounts$Lfpstores$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Accounts$Lfpstores$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Accounts$Lfpstores$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Accounts$Lfpstores$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Accounts$Lfpstores$Delete
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
        {}) as Params$Resource$Accounts$Lfpstores$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Lfpstores$Delete;
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
            url: (rootUrl + '/lfp/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
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
     * Retrieves information about a store.
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
     * const merchantapi = google.merchantapi('lfp_v1');
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
     *   const res = await merchantapi.accounts.lfpStores.get({
     *     // Required. The name of the store to retrieve. Format: `accounts/{account\}/lfpStores/{target_merchant\}~{store_code\}`
     *     name: 'accounts/my-account/lfpStores/my-lfpStore',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "gcidCategory": [],
     *   //   "matchingState": "my_matchingState",
     *   //   "matchingStateHint": "my_matchingStateHint",
     *   //   "name": "my_name",
     *   //   "phoneNumber": "my_phoneNumber",
     *   //   "placeId": "my_placeId",
     *   //   "storeAddress": "my_storeAddress",
     *   //   "storeCode": "my_storeCode",
     *   //   "storeName": "my_storeName",
     *   //   "targetAccount": "my_targetAccount",
     *   //   "websiteUri": "my_websiteUri"
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
      params: Params$Resource$Accounts$Lfpstores$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Accounts$Lfpstores$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$LfpStore>>;
    get(
      params: Params$Resource$Accounts$Lfpstores$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounts$Lfpstores$Get,
      options: MethodOptions | BodyResponseCallback<Schema$LfpStore>,
      callback: BodyResponseCallback<Schema$LfpStore>
    ): void;
    get(
      params: Params$Resource$Accounts$Lfpstores$Get,
      callback: BodyResponseCallback<Schema$LfpStore>
    ): void;
    get(callback: BodyResponseCallback<Schema$LfpStore>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Lfpstores$Get
        | BodyResponseCallback<Schema$LfpStore>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LfpStore>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LfpStore>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$LfpStore>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Lfpstores$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Lfpstores$Get;
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
            url: (rootUrl + '/lfp/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$LfpStore>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LfpStore>(parameters);
      }
    }

    /**
     * Inserts a store for the target merchant. If the store with the same store code already exists, it will be replaced.
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
     * const merchantapi = google.merchantapi('lfp_v1');
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
     *   const res = await merchantapi.accounts.lfpStores.insert({
     *     // Required. The LFP provider account Format: `accounts/{account\}`
     *     parent: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "gcidCategory": [],
     *       //   "matchingState": "my_matchingState",
     *       //   "matchingStateHint": "my_matchingStateHint",
     *       //   "name": "my_name",
     *       //   "phoneNumber": "my_phoneNumber",
     *       //   "placeId": "my_placeId",
     *       //   "storeAddress": "my_storeAddress",
     *       //   "storeCode": "my_storeCode",
     *       //   "storeName": "my_storeName",
     *       //   "targetAccount": "my_targetAccount",
     *       //   "websiteUri": "my_websiteUri"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "gcidCategory": [],
     *   //   "matchingState": "my_matchingState",
     *   //   "matchingStateHint": "my_matchingStateHint",
     *   //   "name": "my_name",
     *   //   "phoneNumber": "my_phoneNumber",
     *   //   "placeId": "my_placeId",
     *   //   "storeAddress": "my_storeAddress",
     *   //   "storeCode": "my_storeCode",
     *   //   "storeName": "my_storeName",
     *   //   "targetAccount": "my_targetAccount",
     *   //   "websiteUri": "my_websiteUri"
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
    insert(
      params: Params$Resource$Accounts$Lfpstores$Insert,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    insert(
      params?: Params$Resource$Accounts$Lfpstores$Insert,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$LfpStore>>;
    insert(
      params: Params$Resource$Accounts$Lfpstores$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Accounts$Lfpstores$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$LfpStore>,
      callback: BodyResponseCallback<Schema$LfpStore>
    ): void;
    insert(
      params: Params$Resource$Accounts$Lfpstores$Insert,
      callback: BodyResponseCallback<Schema$LfpStore>
    ): void;
    insert(callback: BodyResponseCallback<Schema$LfpStore>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Accounts$Lfpstores$Insert
        | BodyResponseCallback<Schema$LfpStore>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LfpStore>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LfpStore>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$LfpStore>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Lfpstores$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Lfpstores$Insert;
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
            url: (rootUrl + '/lfp/v1/{+parent}/lfpStores:insert').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$LfpStore>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LfpStore>(parameters);
      }
    }

    /**
     * Lists the stores of the target merchant, specified by the filter in `ListLfpStoresRequest`.
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
     * const merchantapi = google.merchantapi('lfp_v1');
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
     *   const res = await merchantapi.accounts.lfpStores.list({
     *     // Optional. The maximum number of `LfpStore` resources for the given account to return. The service returns fewer than this value if the number of stores for the given account is less than the `pageSize`. The default value is 250. The maximum value is 1000; If a value higher than the maximum is specified, then the `pageSize` will default to the maximum.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListLfpStoresRequest` call. Provide the page token to retrieve the subsequent page. When paginating, all other parameters provided to `ListLfpStoresRequest` must match the call that provided the page token. The token returned as nextPageToken in the response to the previous request.
     *     pageToken: 'placeholder-value',
     *     // Required. The LFP partner. Format: `accounts/{account\}`
     *     parent: 'accounts/my-account',
     *     // Required. The Merchant Center id of the merchant to list stores for.
     *     targetAccount: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "lfpStores": [],
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
      params: Params$Resource$Accounts$Lfpstores$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Accounts$Lfpstores$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListLfpStoresResponse>>;
    list(
      params: Params$Resource$Accounts$Lfpstores$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Lfpstores$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLfpStoresResponse>,
      callback: BodyResponseCallback<Schema$ListLfpStoresResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Lfpstores$List,
      callback: BodyResponseCallback<Schema$ListLfpStoresResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListLfpStoresResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Lfpstores$List
        | BodyResponseCallback<Schema$ListLfpStoresResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListLfpStoresResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListLfpStoresResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListLfpStoresResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Lfpstores$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Lfpstores$List;
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
            url: (rootUrl + '/lfp/v1/{+parent}/lfpStores').replace(
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
        createAPIRequest<Schema$ListLfpStoresResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListLfpStoresResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Lfpstores$Delete extends StandardParameters {
    /**
     * Required. The name of the store to delete for the target merchant account. Format: `accounts/{account\}/lfpStores/{target_merchant\}~{store_code\}`
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Lfpstores$Get extends StandardParameters {
    /**
     * Required. The name of the store to retrieve. Format: `accounts/{account\}/lfpStores/{target_merchant\}~{store_code\}`
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Lfpstores$Insert extends StandardParameters {
    /**
     * Required. The LFP provider account Format: `accounts/{account\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LfpStore;
  }
  export interface Params$Resource$Accounts$Lfpstores$List extends StandardParameters {
    /**
     * Optional. The maximum number of `LfpStore` resources for the given account to return. The service returns fewer than this value if the number of stores for the given account is less than the `pageSize`. The default value is 250. The maximum value is 1000; If a value higher than the maximum is specified, then the `pageSize` will default to the maximum.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListLfpStoresRequest` call. Provide the page token to retrieve the subsequent page. When paginating, all other parameters provided to `ListLfpStoresRequest` must match the call that provided the page token. The token returned as nextPageToken in the response to the previous request.
     */
    pageToken?: string;
    /**
     * Required. The LFP partner. Format: `accounts/{account\}`
     */
    parent?: string;
    /**
     * Required. The Merchant Center id of the merchant to list stores for.
     */
    targetAccount?: string;
  }
}
