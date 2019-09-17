/**
 * Copyright 2019 Google LLC
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

export namespace androidpublisher_v1_1 {
  export interface Options extends GlobalOptions {
    version: 'v1.1';
  }

  interface StandardParameters {
    /**
     * Data format for the response.
     */
    alt?: string;
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
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
  }

  /**
   * Google Play Developer API
   *
   * Accesses Android application developers&#39; Google Play accounts.
   *
   * @example
   * const {google} = require('googleapis');
   * const androidpublisher = google.androidpublisher('v1.1');
   *
   * @namespace androidpublisher
   * @type {Function}
   * @version v1.1
   * @variation v1.1
   * @param {object=} options Options for Androidpublisher
   */
  export class Androidpublisher {
    context: APIRequestContext;
    inapppurchases: Resource$Inapppurchases;
    purchases: Resource$Purchases;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.inapppurchases = new Resource$Inapppurchases(this.context);
      this.purchases = new Resource$Purchases(this.context);
    }
  }

  /**
   * An InappPurchase resource indicates the status of a user&#39;s inapp product purchase.
   */
  export interface Schema$InappPurchase {
    /**
     * The consumption state of the inapp product. Possible values are:   - Yet to be consumed  - Consumed
     */
    consumptionState?: number | null;
    /**
     * A developer-specified string that contains supplemental information about an order.
     */
    developerPayload?: string | null;
    /**
     * This kind represents an inappPurchase object in the androidpublisher service.
     */
    kind?: string | null;
    /**
     * The order id associated with the purchase of the inapp product.
     */
    orderId?: string | null;
    /**
     * The purchase state of the order. Possible values are:   - Purchased  - Canceled  - Pending
     */
    purchaseState?: number | null;
    /**
     * The time the product was purchased, in milliseconds since the epoch (Jan 1, 1970).
     */
    purchaseTime?: string | null;
    /**
     * The type of purchase of the inapp product. This field is only set if this purchase was not made using the standard in-app billing flow. Possible values are:   - Test (i.e. purchased from a license testing account)  - Promo (i.e. purchased using a promo code)  - Rewarded (i.e. from watching a video ad instead of paying)
     */
    purchaseType?: number | null;
  }
  /**
   * A SubscriptionPurchase resource indicates the status of a user&#39;s subscription purchase.
   */
  export interface Schema$SubscriptionPurchase {
    /**
     * Whether the subscription will automatically be renewed when it reaches its current expiry time.
     */
    autoRenewing?: boolean | null;
    /**
     * Time at which the subscription was granted, in milliseconds since the Epoch.
     */
    initiationTimestampMsec?: string | null;
    /**
     * This kind represents a subscriptionPurchase object in the androidpublisher service.
     */
    kind?: string | null;
    /**
     * Time at which the subscription will expire, in milliseconds since the Epoch.
     */
    validUntilTimestampMsec?: string | null;
  }

  export class Resource$Inapppurchases {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * androidpublisher.inapppurchases.get
     * @desc Checks the purchase and consumption status of an inapp item.
     * @alias androidpublisher.inapppurchases.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.packageName The package name of the application the inapp product was sold in (for example, 'com.some.thing').
     * @param {string} params.productId The inapp product SKU (for example, 'com.some.thing.inapp1').
     * @param {string} params.token The token provided to the user's device when the inapp product was purchased.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Inapppurchases$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$InappPurchase>;
    get(
      params: Params$Resource$Inapppurchases$Get,
      options: MethodOptions | BodyResponseCallback<Schema$InappPurchase>,
      callback: BodyResponseCallback<Schema$InappPurchase>
    ): void;
    get(
      params: Params$Resource$Inapppurchases$Get,
      callback: BodyResponseCallback<Schema$InappPurchase>
    ): void;
    get(callback: BodyResponseCallback<Schema$InappPurchase>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Inapppurchases$Get
        | BodyResponseCallback<Schema$InappPurchase>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$InappPurchase>,
      callback?: BodyResponseCallback<Schema$InappPurchase>
    ): void | GaxiosPromise<Schema$InappPurchase> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Inapppurchases$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Inapppurchases$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v1.1/applications/{packageName}/inapp/{productId}/purchases/{token}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'productId', 'token'],
        pathParams: ['packageName', 'productId', 'token'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$InappPurchase>(parameters, callback);
      } else {
        return createAPIRequest<Schema$InappPurchase>(parameters);
      }
    }
  }

  export interface Params$Resource$Inapppurchases$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The package name of the application the inapp product was sold in (for example, 'com.some.thing').
     */
    packageName?: string;
    /**
     * The inapp product SKU (for example, 'com.some.thing.inapp1').
     */
    productId?: string;
    /**
     * The token provided to the user's device when the inapp product was purchased.
     */
    token?: string;
  }

  export class Resource$Purchases {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * androidpublisher.purchases.cancel
     * @desc Cancels a user's subscription purchase. The subscription remains valid until its expiration time.
     * @alias androidpublisher.purchases.cancel
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.packageName The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
     * @param {string} params.subscriptionId The purchased subscription ID (for example, 'monthly001').
     * @param {string} params.token The token provided to the user's device when the subscription was purchased.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancel(
      params?: Params$Resource$Purchases$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    cancel(
      params: Params$Resource$Purchases$Cancel,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    cancel(
      params: Params$Resource$Purchases$Cancel,
      callback: BodyResponseCallback<void>
    ): void;
    cancel(callback: BodyResponseCallback<void>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Purchases$Cancel
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Purchases$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Purchases$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v1.1/applications/{packageName}/subscriptions/{subscriptionId}/purchases/{token}/cancel'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'subscriptionId', 'token'],
        pathParams: ['packageName', 'subscriptionId', 'token'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * androidpublisher.purchases.get
     * @desc Checks whether a user's subscription purchase is valid and returns its expiry time.
     * @alias androidpublisher.purchases.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.packageName The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
     * @param {string} params.subscriptionId The purchased subscription ID (for example, 'monthly001').
     * @param {string} params.token The token provided to the user's device when the subscription was purchased.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Purchases$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SubscriptionPurchase>;
    get(
      params: Params$Resource$Purchases$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SubscriptionPurchase>,
      callback: BodyResponseCallback<Schema$SubscriptionPurchase>
    ): void;
    get(
      params: Params$Resource$Purchases$Get,
      callback: BodyResponseCallback<Schema$SubscriptionPurchase>
    ): void;
    get(callback: BodyResponseCallback<Schema$SubscriptionPurchase>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Purchases$Get
        | BodyResponseCallback<Schema$SubscriptionPurchase>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SubscriptionPurchase>,
      callback?: BodyResponseCallback<Schema$SubscriptionPurchase>
    ): void | GaxiosPromise<Schema$SubscriptionPurchase> {
      let params = (paramsOrCallback || {}) as Params$Resource$Purchases$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Purchases$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v1.1/applications/{packageName}/subscriptions/{subscriptionId}/purchases/{token}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'subscriptionId', 'token'],
        pathParams: ['packageName', 'subscriptionId', 'token'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SubscriptionPurchase>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SubscriptionPurchase>(parameters);
      }
    }
  }

  export interface Params$Resource$Purchases$Cancel extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
     */
    packageName?: string;
    /**
     * The purchased subscription ID (for example, 'monthly001').
     */
    subscriptionId?: string;
    /**
     * The token provided to the user's device when the subscription was purchased.
     */
    token?: string;
  }
  export interface Params$Resource$Purchases$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
     */
    packageName?: string;
    /**
     * The purchased subscription ID (for example, 'monthly001').
     */
    subscriptionId?: string;
    /**
     * The token provided to the user's device when the subscription was purchased.
     */
    token?: string;
  }
}
