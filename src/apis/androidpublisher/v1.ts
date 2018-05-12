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
import {Compute, JWT, OAuth2Client, UserRefreshClient} from 'google-auth-library';

import {GoogleApis} from '../..';
import {BodyResponseCallback, GlobalOptions, MethodOptions} from '../../shared/api';
import {createAPIRequest} from '../../shared/apirequest';

// TODO: We will eventually get the `any` in here cleared out, but in the
// interim we want to turn on no-implicit-any.

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace androidpublisher_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  /**
   * Google Play Developer API
   *
   * Lets Android application developers access their Google Play accounts.
   *
   * @example
   * const google = require('googleapis');
   * const androidpublisher = google.androidpublisher('v1');
   *
   * @namespace androidpublisher
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Androidpublisher
   */
  export class Androidpublisher {
    _options: GlobalOptions;
    google: GoogleApis;
    root = this;

    purchases: Resource$Purchases;

    constructor(options: GlobalOptions, google: GoogleApis) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.purchases = new Resource$Purchases(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * A SubscriptionPurchase resource indicates the status of a user&#39;s
   * subscription purchase.
   */
  export interface Schema$SubscriptionPurchase {
    /**
     * Whether the subscription will automatically be renewed when it reaches
     * its current expiry time.
     */
    autoRenewing?: boolean;
    /**
     * Time at which the subscription was granted, in milliseconds since the
     * Epoch.
     */
    initiationTimestampMsec?: string;
    /**
     * This kind represents a subscriptionPurchase object in the
     * androidpublisher service.
     */
    kind?: string;
    /**
     * Time at which the subscription will expire, in milliseconds since the
     * Epoch.
     */
    validUntilTimestampMsec?: string;
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
    cancel(params?: Params$Resource$Purchases$Cancel, options?: MethodOptions):
        AxiosPromise<void>;
    cancel(
        params: Params$Resource$Purchases$Cancel,
        options: MethodOptions|BodyResponseCallback<void>,
        callback: BodyResponseCallback<void>): void;
    cancel(
        params: Params$Resource$Purchases$Cancel,
        callback: BodyResponseCallback<void>): void;
    cancel(callback: BodyResponseCallback<void>): void;
    cancel(
        paramsOrCallback?: Params$Resource$Purchases$Cancel|
        BodyResponseCallback<void>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
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
              url:
                  (rootUrl +
                   '/androidpublisher/v1/applications/{packageName}/subscriptions/{subscriptionId}/purchases/{token}/cancel')
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
    get(params?: Params$Resource$Purchases$Get,
        options?: MethodOptions): AxiosPromise<Schema$SubscriptionPurchase>;
    get(params: Params$Resource$Purchases$Get,
        options: MethodOptions|
        BodyResponseCallback<Schema$SubscriptionPurchase>,
        callback: BodyResponseCallback<Schema$SubscriptionPurchase>): void;
    get(params: Params$Resource$Purchases$Get,
        callback: BodyResponseCallback<Schema$SubscriptionPurchase>): void;
    get(callback: BodyResponseCallback<Schema$SubscriptionPurchase>): void;
    get(paramsOrCallback?: Params$Resource$Purchases$Get|
        BodyResponseCallback<Schema$SubscriptionPurchase>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$SubscriptionPurchase>,
        callback?: BodyResponseCallback<Schema$SubscriptionPurchase>):
        void|AxiosPromise<Schema$SubscriptionPurchase> {
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
              url:
                  (rootUrl +
                   '/androidpublisher/v1/applications/{packageName}/subscriptions/{subscriptionId}/purchases/{token}')
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

  export interface Params$Resource$Purchases$Cancel {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The package name of the application for which this subscription was
     * purchased (for example, 'com.some.thing').
     */
    packageName?: string;
    /**
     * The purchased subscription ID (for example, 'monthly001').
     */
    subscriptionId?: string;
    /**
     * The token provided to the user's device when the subscription was
     * purchased.
     */
    token?: string;
  }
  export interface Params$Resource$Purchases$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The package name of the application for which this subscription was
     * purchased (for example, 'com.some.thing').
     */
    packageName?: string;
    /**
     * The purchased subscription ID (for example, 'monthly001').
     */
    subscriptionId?: string;
    /**
     * The token provided to the user's device when the subscription was
     * purchased.
     */
    token?: string;
  }
}
