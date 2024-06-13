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
  GaxiosPromise,
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

export namespace merchantapi_inventories_v1beta {
  export interface Options extends GlobalOptions {
    version: 'inventories_v1beta';
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
   * const merchantapi = google.merchantapi('inventories_v1beta');
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
   * A message that represents custom attributes. Exactly one of `value` or `group_values` must not be empty.
   */
  export interface Schema$CustomAttribute {
    /**
     * Subattributes within this attribute group. If `group_values` is not empty, `value` must be empty.
     */
    groupValues?: Schema$CustomAttribute[];
    /**
     * The name of the attribute.
     */
    name?: string | null;
    /**
     * The value of the attribute. If `value` is not empty, `group_values` must be empty.
     */
    value?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive). The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time.
   */
  export interface Schema$Interval {
    /**
     * Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end.
     */
    endTime?: string | null;
    /**
     * Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start.
     */
    startTime?: string | null;
  }
  /**
   * Response message for the `ListLocalInventories` method.
   */
  export interface Schema$ListLocalInventoriesResponse {
    /**
     * The `LocalInventory` resources for the given product from the specified account.
     */
    localInventories?: Schema$LocalInventory[];
    /**
     * A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for the `ListRegionalInventories` method.
   */
  export interface Schema$ListRegionalInventoriesResponse {
    /**
     * A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The `RegionalInventory` resources for the given product from the specified account.
     */
    regionalInventories?: Schema$RegionalInventory[];
  }
  /**
   * Local inventory information for the product. Represents in-store information for a specific product at the store specified by `storeCode`. For a list of all accepted attribute values, see the [local product inventory data specification](https://support.google.com/merchants/answer/3061342).
   */
  export interface Schema$LocalInventory {
    /**
     * Output only. The account that owns the product. This field will be ignored if set by the client.
     */
    account?: string | null;
    /**
     * Availability of the product at this store. For accepted attribute values, see the [local product inventory data specification](https://support.google.com/merchants/answer/3061342)
     */
    availability?: string | null;
    /**
     * A list of custom (merchant-provided) attributes. You can also use `CustomAttribute` to submit any attribute of the data specification in its generic form.
     */
    customAttributes?: Schema$CustomAttribute[];
    /**
     * Location of the product inside the store. Maximum length is 20 bytes.
     */
    instoreProductLocation?: string | null;
    /**
     * Output only. The name of the `LocalInventory` resource. Format: `accounts/{account\}/products/{product\}/localInventories/{store_code\}`
     */
    name?: string | null;
    /**
     * Supported pickup method for this product. Unless the value is `"not supported"`, this field must be submitted together with `pickupSla`. For accepted attribute values, see the [local product inventory data specification](https://support.google.com/merchants/answer/3061342)
     */
    pickupMethod?: string | null;
    /**
     * Relative time period from the order date for an order for this product, from this store, to be ready for pickup. Must be submitted with `pickupMethod`. For accepted attribute values, see the [local product inventory data specification](https://support.google.com/merchants/answer/3061342)
     */
    pickupSla?: string | null;
    /**
     * Price of the product at this store.
     */
    price?: Schema$Price;
    /**
     * Quantity of the product available at this store. Must be greater than or equal to zero.
     */
    quantity?: string | null;
    /**
     * Sale price of the product at this store. Mandatory if `salePriceEffectiveDate` is defined.
     */
    salePrice?: Schema$Price;
    /**
     * The `TimePeriod` of the sale at this store.
     */
    salePriceEffectiveDate?: Schema$Interval;
    /**
     * Required. Immutable. Store code (the store ID from your Business Profile) of the physical store the product is sold in. See the [Local product inventory data specification](https://support.google.com/merchants/answer/3061342) for more information.
     */
    storeCode?: string | null;
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
     * The new value of the changed resource or attribute.
     */
    newValue?: string | null;
    /**
     * The old value of the changed resource or attribute.
     */
    oldValue?: string | null;
    /**
     * Countries that have the change (if applicable)
     */
    regionCode?: string | null;
    /**
     * Reporting contexts that have the change (if applicable)
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
     * The account that manages the merchant's account. can be the same as merchant id if it is standalone account. Format : `accounts/{service_provider_id\}`
     */
    managingAccount?: string | null;
    /**
     * The product name. Format: `{product.name=accounts/{account\}/products/{product\}\}`
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
   * Regional inventory information for the product. Represents specific information like price and availability for a given product in a specific `region`. For a list of all accepted attribute values, see the [regional product inventory data specification](https://support.google.com/merchants/answer/9698880).
   */
  export interface Schema$RegionalInventory {
    /**
     * Output only. The account that owns the product. This field will be ignored if set by the client.
     */
    account?: string | null;
    /**
     * Availability of the product in this region. For accepted attribute values, see the [regional product inventory data specification](https://support.google.com/merchants/answer/3061342)
     */
    availability?: string | null;
    /**
     * A list of custom (merchant-provided) attributes. You can also use `CustomAttribute` to submit any attribute of the data specification in its generic form.
     */
    customAttributes?: Schema$CustomAttribute[];
    /**
     * Output only. The name of the `RegionalInventory` resource. Format: `{regional_inventory.name=accounts/{account\}/products/{product\}/regionalInventories/{region\}`
     */
    name?: string | null;
    /**
     * Price of the product in this region.
     */
    price?: Schema$Price;
    /**
     * Required. Immutable. ID of the region for this `RegionalInventory` resource. See the [Regional availability and pricing](https://support.google.com/merchants/answer/9698880) for more details.
     */
    region?: string | null;
    /**
     * Sale price of the product in this region. Mandatory if `salePriceEffectiveDate` is defined.
     */
    salePrice?: Schema$Price;
    /**
     * The `TimePeriod` of the sale price in this region.
     */
    salePriceEffectiveDate?: Schema$Interval;
  }

  export class Resource$Accounts {
    context: APIRequestContext;
    products: Resource$Accounts$Products;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.products = new Resource$Accounts$Products(this.context);
    }
  }

  export class Resource$Accounts$Products {
    context: APIRequestContext;
    localInventories: Resource$Accounts$Products$Localinventories;
    regionalInventories: Resource$Accounts$Products$Regionalinventories;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.localInventories = new Resource$Accounts$Products$Localinventories(
        this.context
      );
      this.regionalInventories =
        new Resource$Accounts$Products$Regionalinventories(this.context);
    }
  }

  export class Resource$Accounts$Products$Localinventories {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes the specified `LocalInventory` from the given product in your merchant account. It might take a up to an hour for the `LocalInventory` to be deleted from the specific product. Once you have received a successful delete response, wait for that period before attempting a delete again.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Accounts$Products$Localinventories$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Accounts$Products$Localinventories$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Accounts$Products$Localinventories$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Accounts$Products$Localinventories$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Accounts$Products$Localinventories$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Accounts$Products$Localinventories$Delete
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
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Products$Localinventories$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounts$Products$Localinventories$Delete;
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
            url: (rootUrl + '/inventories/v1beta/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
     * Inserts a `LocalInventory` resource to a product in your merchant account. Replaces the full `LocalInventory` resource if an entry with the same `storeCode` already exists for the product. It might take up to 30 minutes for the new or updated `LocalInventory` resource to appear in products.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Accounts$Products$Localinventories$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Accounts$Products$Localinventories$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LocalInventory>;
    insert(
      params: Params$Resource$Accounts$Products$Localinventories$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Accounts$Products$Localinventories$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$LocalInventory>,
      callback: BodyResponseCallback<Schema$LocalInventory>
    ): void;
    insert(
      params: Params$Resource$Accounts$Products$Localinventories$Insert,
      callback: BodyResponseCallback<Schema$LocalInventory>
    ): void;
    insert(callback: BodyResponseCallback<Schema$LocalInventory>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Accounts$Products$Localinventories$Insert
        | BodyResponseCallback<Schema$LocalInventory>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LocalInventory>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LocalInventory>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$LocalInventory> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Products$Localinventories$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounts$Products$Localinventories$Insert;
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
              rootUrl + '/inventories/v1beta/{+parent}/localInventories:insert'
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
        createAPIRequest<Schema$LocalInventory>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LocalInventory>(parameters);
      }
    }

    /**
     * Lists the `LocalInventory` resources for the given product in your merchant account. The response might contain fewer items than specified by `pageSize`. If `pageToken` was returned in previous request, it can be used to obtain additional results. `LocalInventory` resources are listed per product for a given account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Accounts$Products$Localinventories$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Accounts$Products$Localinventories$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListLocalInventoriesResponse>;
    list(
      params: Params$Resource$Accounts$Products$Localinventories$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Products$Localinventories$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLocalInventoriesResponse>,
      callback: BodyResponseCallback<Schema$ListLocalInventoriesResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Products$Localinventories$List,
      callback: BodyResponseCallback<Schema$ListLocalInventoriesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListLocalInventoriesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Products$Localinventories$List
        | BodyResponseCallback<Schema$ListLocalInventoriesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListLocalInventoriesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListLocalInventoriesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListLocalInventoriesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Products$Localinventories$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Products$Localinventories$List;
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
              rootUrl + '/inventories/v1beta/{+parent}/localInventories'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListLocalInventoriesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListLocalInventoriesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Accounts$Products$Localinventories$Delete
    extends StandardParameters {
    /**
     * Required. The name of the local inventory for the given product to delete. Format: `accounts/{account\}/products/{product\}/localInventories/{store_code\}`
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Products$Localinventories$Insert
    extends StandardParameters {
    /**
     * Required. The account and product where this inventory will be inserted. Format: `accounts/{account\}/products/{product\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LocalInventory;
  }
  export interface Params$Resource$Accounts$Products$Localinventories$List
    extends StandardParameters {
    /**
     * The maximum number of `LocalInventory` resources for the given product to return. The service returns fewer than this value if the number of inventories for the given product is less that than the `pageSize`. The default value is 25000. The maximum value is 25000; If a value higher than the maximum is specified, then the `pageSize` will default to the maximum
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListLocalInventories` call. Provide the page token to retrieve the subsequent page. When paginating, all other parameters provided to `ListLocalInventories` must match the call that provided the page token. The token returned as nextPageToken in the response to the previous request.
     */
    pageToken?: string;
    /**
     * Required. The `name` of the parent product to list local inventories for. Format: `accounts/{account\}/products/{product\}`
     */
    parent?: string;
  }

  export class Resource$Accounts$Products$Regionalinventories {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes the specified `RegionalInventory` resource from the given product in your merchant account. It might take up to an hour for the `RegionalInventory` to be deleted from the specific product. Once you have received a successful delete response, wait for that period before attempting a delete again.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Accounts$Products$Regionalinventories$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Accounts$Products$Regionalinventories$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Accounts$Products$Regionalinventories$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Accounts$Products$Regionalinventories$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Accounts$Products$Regionalinventories$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Accounts$Products$Regionalinventories$Delete
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
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Products$Regionalinventories$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounts$Products$Regionalinventories$Delete;
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
            url: (rootUrl + '/inventories/v1beta/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
     * Inserts a `RegionalInventory` to a given product in your merchant account. Replaces the full `RegionalInventory` resource if an entry with the same `region` already exists for the product. It might take up to 30 minutes for the new or updated `RegionalInventory` resource to appear in products.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Accounts$Products$Regionalinventories$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Accounts$Products$Regionalinventories$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RegionalInventory>;
    insert(
      params: Params$Resource$Accounts$Products$Regionalinventories$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Accounts$Products$Regionalinventories$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$RegionalInventory>,
      callback: BodyResponseCallback<Schema$RegionalInventory>
    ): void;
    insert(
      params: Params$Resource$Accounts$Products$Regionalinventories$Insert,
      callback: BodyResponseCallback<Schema$RegionalInventory>
    ): void;
    insert(callback: BodyResponseCallback<Schema$RegionalInventory>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Accounts$Products$Regionalinventories$Insert
        | BodyResponseCallback<Schema$RegionalInventory>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RegionalInventory>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RegionalInventory>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$RegionalInventory>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Products$Regionalinventories$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounts$Products$Regionalinventories$Insert;
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
              rootUrl +
              '/inventories/v1beta/{+parent}/regionalInventories:insert'
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
        createAPIRequest<Schema$RegionalInventory>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RegionalInventory>(parameters);
      }
    }

    /**
     * Lists the `RegionalInventory` resources for the given product in your merchant account. The response might contain fewer items than specified by `pageSize`. If `pageToken` was returned in previous request, it can be used to obtain additional results. `RegionalInventory` resources are listed per product for a given account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Accounts$Products$Regionalinventories$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Accounts$Products$Regionalinventories$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListRegionalInventoriesResponse>;
    list(
      params: Params$Resource$Accounts$Products$Regionalinventories$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Products$Regionalinventories$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListRegionalInventoriesResponse>,
      callback: BodyResponseCallback<Schema$ListRegionalInventoriesResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Products$Regionalinventories$List,
      callback: BodyResponseCallback<Schema$ListRegionalInventoriesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListRegionalInventoriesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Products$Regionalinventories$List
        | BodyResponseCallback<Schema$ListRegionalInventoriesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListRegionalInventoriesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListRegionalInventoriesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListRegionalInventoriesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Products$Regionalinventories$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounts$Products$Regionalinventories$List;
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
              rootUrl + '/inventories/v1beta/{+parent}/regionalInventories'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListRegionalInventoriesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListRegionalInventoriesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Accounts$Products$Regionalinventories$Delete
    extends StandardParameters {
    /**
     * Required. The name of the `RegionalInventory` resource to delete. Format: `accounts/{account\}/products/{product\}/regionalInventories/{region\}`
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Products$Regionalinventories$Insert
    extends StandardParameters {
    /**
     * Required. The account and product where this inventory will be inserted. Format: `accounts/{account\}/products/{product\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RegionalInventory;
  }
  export interface Params$Resource$Accounts$Products$Regionalinventories$List
    extends StandardParameters {
    /**
     * The maximum number of `RegionalInventory` resources for the given product to return. The service returns fewer than this value if the number of inventories for the given product is less that than the `pageSize`. The default value is 25000. The maximum value is 100000; If a value higher than the maximum is specified, then the `pageSize` will default to the maximum.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListRegionalInventories` call. Provide the page token to retrieve the subsequent page. When paginating, all other parameters provided to `ListRegionalInventories` must match the call that provided the page token. The token returned as nextPageToken in the response to the previous request.
     */
    pageToken?: string;
    /**
     * Required. The `name` of the parent product to list `RegionalInventory` resources for. Format: `accounts/{account\}/products/{product\}`
     */
    parent?: string;
  }
}
