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

import {AxiosPromise} from 'axios';

import {GoogleApis} from '../..';
import {BodyResponseCallback, GlobalOptions, MethodOptions} from '../../lib/api';
import {createAPIRequest} from '../../lib/apirequest';

// TODO: We will eventually get the `any` in here cleared out, but in the
// interim we want to turn on no-implicit-any.

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format

/**
 * Google Play Developer API
 *
 * Lets Android application developers access their Google Play accounts.
 *
 * @example
 * const google = require('googleapis');
 * const androidpublisher = google.androidpublisher('v1.1');
 *
 * @namespace androidpublisher
 * @type {Function}
 * @version v1.1
 * @variation v1.1
 * @param {object=} options Options for Androidpublisher
 */
export class Androidpublisher {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  inapppurchases: Resource$Inapppurchases;
  purchases: Resource$Purchases;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;
    this.getRoot.bind(this);

    this.inapppurchases = new Resource$Inapppurchases(this);
    this.purchases = new Resource$Purchases(this);
  }

  getRoot() {
    return this.root;
  }
}

/**
 * An InappPurchase resource indicates the status of a user&#39;s inapp product
 * purchase.
 */
export interface Schema$InappPurchase {
  /**
   * The consumption state of the inapp product. Possible values are:   - Yet to
   * be consumed  - Consumed
   */
  consumptionState: number;
  /**
   * A developer-specified string that contains supplemental information about
   * an order.
   */
  developerPayload: string;
  /**
   * This kind represents an inappPurchase object in the androidpublisher
   * service.
   */
  kind: string;
  /**
   * The order id associated with the purchase of the inapp product.
   */
  orderId: string;
  /**
   * The purchase state of the order. Possible values are:   - Purchased  -
   * Canceled
   */
  purchaseState: number;
  /**
   * The time the product was purchased, in milliseconds since the epoch (Jan 1,
   * 1970).
   */
  purchaseTime: string;
  /**
   * The type of purchase of the inapp product. This field is only set if this
   * purchase was not made using the standard in-app billing flow. Possible
   * values are:   - Test (i.e. purchased from a license testing account)  -
   * Promo (i.e. purchased using a promo code)
   */
  purchaseType: number;
}
/**
 * A SubscriptionPurchase resource indicates the status of a user&#39;s
 * subscription purchase.
 */
export interface Schema$SubscriptionPurchase {
  /**
   * Whether the subscription will automatically be renewed when it reaches its
   * current expiry time.
   */
  autoRenewing: boolean;
  /**
   * Time at which the subscription was granted, in milliseconds since the
   * Epoch.
   */
  initiationTimestampMsec: string;
  /**
   * This kind represents a subscriptionPurchase object in the androidpublisher
   * service.
   */
  kind: string;
  /**
   * Time at which the subscription will expire, in milliseconds since the
   * Epoch.
   */
  validUntilTimestampMsec: string;
}

export class Resource$Inapppurchases {
  root: Androidpublisher;
  constructor(root: Androidpublisher) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
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
  get(params?: any,
      options?: MethodOptions): AxiosPromise<Schema$InappPurchase>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$InappPurchase>,
      callback?: BodyResponseCallback<Schema$InappPurchase>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$InappPurchase>,
      callback?: BodyResponseCallback<Schema$InappPurchase>):
      void|AxiosPromise<Schema$InappPurchase> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidpublisher/v1.1/applications/{packageName}/inapp/{productId}/purchases/{token}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['packageName', 'productId', 'token'],
      pathParams: ['packageName', 'productId', 'token'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$InappPurchase>(parameters, callback);
    } else {
      return createAPIRequest<Schema$InappPurchase>(parameters);
    }
  }
}

export class Resource$Purchases {
  root: Androidpublisher;
  constructor(root: Androidpublisher) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * androidpublisher.purchases.cancel
   * @desc Cancels a user's subscription purchase. The subscription remains
   * valid until its expiration time.
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
  cancel(params?: any, options?: MethodOptions): AxiosPromise<void>;
  cancel(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  cancel(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidpublisher/v1.1/applications/{packageName}/subscriptions/{subscriptionId}/purchases/{token}/cancel')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['packageName', 'subscriptionId', 'token'],
      pathParams: ['packageName', 'subscriptionId', 'token'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * androidpublisher.purchases.get
   * @desc Checks whether a user's subscription purchase is valid and returns
   * its expiry time.
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
  get(params?: any,
      options?: MethodOptions): AxiosPromise<Schema$SubscriptionPurchase>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$SubscriptionPurchase>,
      callback?: BodyResponseCallback<Schema$SubscriptionPurchase>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$SubscriptionPurchase>,
      callback?: BodyResponseCallback<Schema$SubscriptionPurchase>):
      void|AxiosPromise<Schema$SubscriptionPurchase> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidpublisher/v1.1/applications/{packageName}/subscriptions/{subscriptionId}/purchases/{token}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['packageName', 'subscriptionId', 'token'],
      pathParams: ['packageName', 'subscriptionId', 'token'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$SubscriptionPurchase>(parameters, callback);
    } else {
      return createAPIRequest<Schema$SubscriptionPurchase>(parameters);
    }
  }
}
