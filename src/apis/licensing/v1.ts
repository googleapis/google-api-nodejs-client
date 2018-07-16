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

import {BodyResponseCallback, createAPIRequest, GlobalOptions, GoogleConfigurable, MethodOptions} from '../../shared/src';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace licensing_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  /**
   * Enterprise License Manager API
   *
   * Views and manages licenses for your domain.
   *
   * @example
   * const {google} = require('googleapis');
   * const licensing = google.licensing('v1');
   *
   * @namespace licensing
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Licensing
   */
  export class Licensing {
    _options: GlobalOptions;
    google?: GoogleConfigurable;
    root = this;

    licenseAssignments: Resource$Licenseassignments;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.licenseAssignments = new Resource$Licenseassignments(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * Template for LiscenseAssignment Resource
   */
  export interface Schema$LicenseAssignment {
    /**
     * ETag of the resource.
     */
    etags?: string;
    /**
     * Identifies the resource as a LicenseAssignment.
     */
    kind?: string;
    /**
     * Id of the product.
     */
    productId?: string;
    /**
     * Display Name of the product.
     */
    productName?: string;
    /**
     * Link to this page.
     */
    selfLink?: string;
    /**
     * Id of the sku of the product.
     */
    skuId?: string;
    /**
     * Display Name of the sku of the product.
     */
    skuName?: string;
    /**
     * Email id of the user.
     */
    userId?: string;
  }
  /**
   * Template for LicenseAssignment Insert request
   */
  export interface Schema$LicenseAssignmentInsert {
    /**
     * Email id of the user
     */
    userId?: string;
  }
  /**
   * LicesnseAssignment List for a given product/sku for a customer.
   */
  export interface Schema$LicenseAssignmentList {
    /**
     * ETag of the resource.
     */
    etag?: string;
    /**
     * The LicenseAssignments in this page of results.
     */
    items?: Schema$LicenseAssignment[];
    /**
     * Identifies the resource as a collection of LicenseAssignments.
     */
    kind?: string;
    /**
     * The continuation token, used to page through large result sets. Provide
     * this value in a subsequent request to return the next page of results.
     */
    nextPageToken?: string;
  }


  export class Resource$Licenseassignments {
    root: Licensing;
    constructor(root: Licensing) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * licensing.licenseAssignments.delete
     * @desc Revoke License.
     * @alias licensing.licenseAssignments.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.productId Name for product
     * @param {string} params.skuId Name for sku
     * @param {string} params.userId email id or unique Id of the user
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Licenseassignments$Delete,
        options?: MethodOptions): AxiosPromise<void>;
    delete(
        params: Params$Resource$Licenseassignments$Delete,
        options: MethodOptions|BodyResponseCallback<void>,
        callback: BodyResponseCallback<void>): void;
    delete(
        params: Params$Resource$Licenseassignments$Delete,
        callback: BodyResponseCallback<void>): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
        paramsOrCallback?: Params$Resource$Licenseassignments$Delete|
        BodyResponseCallback<void>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Licenseassignments$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Licenseassignments$Delete;
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
                   '/apps/licensing/v1/product/{productId}/sku/{skuId}/user/{userId}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['productId', 'skuId', 'userId'],
        pathParams: ['productId', 'skuId', 'userId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }


    /**
     * licensing.licenseAssignments.get
     * @desc Get license assignment of a particular product and sku for a user
     * @alias licensing.licenseAssignments.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.productId Name for product
     * @param {string} params.skuId Name for sku
     * @param {string} params.userId email id or unique Id of the user
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Licenseassignments$Get,
        options?: MethodOptions): AxiosPromise<Schema$LicenseAssignment>;
    get(params: Params$Resource$Licenseassignments$Get,
        options: MethodOptions|BodyResponseCallback<Schema$LicenseAssignment>,
        callback: BodyResponseCallback<Schema$LicenseAssignment>): void;
    get(params: Params$Resource$Licenseassignments$Get,
        callback: BodyResponseCallback<Schema$LicenseAssignment>): void;
    get(callback: BodyResponseCallback<Schema$LicenseAssignment>): void;
    get(paramsOrCallback?: Params$Resource$Licenseassignments$Get|
        BodyResponseCallback<Schema$LicenseAssignment>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$LicenseAssignment>,
        callback?: BodyResponseCallback<Schema$LicenseAssignment>):
        void|AxiosPromise<Schema$LicenseAssignment> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Licenseassignments$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Licenseassignments$Get;
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
                   '/apps/licensing/v1/product/{productId}/sku/{skuId}/user/{userId}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['productId', 'skuId', 'userId'],
        pathParams: ['productId', 'skuId', 'userId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$LicenseAssignment>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LicenseAssignment>(parameters);
      }
    }


    /**
     * licensing.licenseAssignments.insert
     * @desc Assign License.
     * @alias licensing.licenseAssignments.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.productId Name for product
     * @param {string} params.skuId Name for sku
     * @param {().LicenseAssignmentInsert} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
        params?: Params$Resource$Licenseassignments$Insert,
        options?: MethodOptions): AxiosPromise<Schema$LicenseAssignment>;
    insert(
        params: Params$Resource$Licenseassignments$Insert,
        options: MethodOptions|BodyResponseCallback<Schema$LicenseAssignment>,
        callback: BodyResponseCallback<Schema$LicenseAssignment>): void;
    insert(
        params: Params$Resource$Licenseassignments$Insert,
        callback: BodyResponseCallback<Schema$LicenseAssignment>): void;
    insert(callback: BodyResponseCallback<Schema$LicenseAssignment>): void;
    insert(
        paramsOrCallback?: Params$Resource$Licenseassignments$Insert|
        BodyResponseCallback<Schema$LicenseAssignment>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$LicenseAssignment>,
        callback?: BodyResponseCallback<Schema$LicenseAssignment>):
        void|AxiosPromise<Schema$LicenseAssignment> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Licenseassignments$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Licenseassignments$Insert;
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
              url: (rootUrl +
                    '/apps/licensing/v1/product/{productId}/sku/{skuId}/user')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['productId', 'skuId'],
        pathParams: ['productId', 'skuId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$LicenseAssignment>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LicenseAssignment>(parameters);
      }
    }


    /**
     * licensing.licenseAssignments.listForProduct
     * @desc List license assignments for given product of the customer.
     * @alias licensing.licenseAssignments.listForProduct
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.customerId CustomerId represents the customer for whom licenseassignments are queried
     * @param {integer=} params.maxResults Maximum number of campaigns to return at one time. Must be positive. Optional. Default value is 100.
     * @param {string=} params.pageToken Token to fetch the next page.Optional. By default server will return first page
     * @param {string} params.productId Name for product
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listForProduct(
        params?: Params$Resource$Licenseassignments$Listforproduct,
        options?: MethodOptions): AxiosPromise<Schema$LicenseAssignmentList>;
    listForProduct(
        params: Params$Resource$Licenseassignments$Listforproduct,
        options: MethodOptions|
        BodyResponseCallback<Schema$LicenseAssignmentList>,
        callback: BodyResponseCallback<Schema$LicenseAssignmentList>): void;
    listForProduct(
        params: Params$Resource$Licenseassignments$Listforproduct,
        callback: BodyResponseCallback<Schema$LicenseAssignmentList>): void;
    listForProduct(
        callback: BodyResponseCallback<Schema$LicenseAssignmentList>): void;
    listForProduct(
        paramsOrCallback?: Params$Resource$Licenseassignments$Listforproduct|
        BodyResponseCallback<Schema$LicenseAssignmentList>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$LicenseAssignmentList>,
        callback?: BodyResponseCallback<Schema$LicenseAssignmentList>):
        void|AxiosPromise<Schema$LicenseAssignmentList> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Licenseassignments$Listforproduct;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Licenseassignments$Listforproduct;
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
              url: (rootUrl + '/apps/licensing/v1/product/{productId}/users')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['productId', 'customerId'],
        pathParams: ['productId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$LicenseAssignmentList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LicenseAssignmentList>(parameters);
      }
    }


    /**
     * licensing.licenseAssignments.listForProductAndSku
     * @desc List license assignments for given product and sku of the customer.
     * @alias licensing.licenseAssignments.listForProductAndSku
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.customerId CustomerId represents the customer for whom licenseassignments are queried
     * @param {integer=} params.maxResults Maximum number of campaigns to return at one time. Must be positive. Optional. Default value is 100.
     * @param {string=} params.pageToken Token to fetch the next page.Optional. By default server will return first page
     * @param {string} params.productId Name for product
     * @param {string} params.skuId Name for sku
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listForProductAndSku(
        params?: Params$Resource$Licenseassignments$Listforproductandsku,
        options?: MethodOptions): AxiosPromise<Schema$LicenseAssignmentList>;
    listForProductAndSku(
        params: Params$Resource$Licenseassignments$Listforproductandsku,
        options: MethodOptions|
        BodyResponseCallback<Schema$LicenseAssignmentList>,
        callback: BodyResponseCallback<Schema$LicenseAssignmentList>): void;
    listForProductAndSku(
        params: Params$Resource$Licenseassignments$Listforproductandsku,
        callback: BodyResponseCallback<Schema$LicenseAssignmentList>): void;
    listForProductAndSku(
        callback: BodyResponseCallback<Schema$LicenseAssignmentList>): void;
    listForProductAndSku(
        paramsOrCallback?:
            Params$Resource$Licenseassignments$Listforproductandsku|
        BodyResponseCallback<Schema$LicenseAssignmentList>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$LicenseAssignmentList>,
        callback?: BodyResponseCallback<Schema$LicenseAssignmentList>):
        void|AxiosPromise<Schema$LicenseAssignmentList> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Licenseassignments$Listforproductandsku;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Licenseassignments$Listforproductandsku;
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
              url: (rootUrl +
                    '/apps/licensing/v1/product/{productId}/sku/{skuId}/users')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['productId', 'skuId', 'customerId'],
        pathParams: ['productId', 'skuId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$LicenseAssignmentList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LicenseAssignmentList>(parameters);
      }
    }


    /**
     * licensing.licenseAssignments.patch
     * @desc Assign License. This method supports patch semantics.
     * @alias licensing.licenseAssignments.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.productId Name for product
     * @param {string} params.skuId Name for sku for which license would be revoked
     * @param {string} params.userId email id or unique Id of the user
     * @param {().LicenseAssignment} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
        params?: Params$Resource$Licenseassignments$Patch,
        options?: MethodOptions): AxiosPromise<Schema$LicenseAssignment>;
    patch(
        params: Params$Resource$Licenseassignments$Patch,
        options: MethodOptions|BodyResponseCallback<Schema$LicenseAssignment>,
        callback: BodyResponseCallback<Schema$LicenseAssignment>): void;
    patch(
        params: Params$Resource$Licenseassignments$Patch,
        callback: BodyResponseCallback<Schema$LicenseAssignment>): void;
    patch(callback: BodyResponseCallback<Schema$LicenseAssignment>): void;
    patch(
        paramsOrCallback?: Params$Resource$Licenseassignments$Patch|
        BodyResponseCallback<Schema$LicenseAssignment>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$LicenseAssignment>,
        callback?: BodyResponseCallback<Schema$LicenseAssignment>):
        void|AxiosPromise<Schema$LicenseAssignment> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Licenseassignments$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Licenseassignments$Patch;
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
                   '/apps/licensing/v1/product/{productId}/sku/{skuId}/user/{userId}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['productId', 'skuId', 'userId'],
        pathParams: ['productId', 'skuId', 'userId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$LicenseAssignment>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LicenseAssignment>(parameters);
      }
    }


    /**
     * licensing.licenseAssignments.update
     * @desc Assign License.
     * @alias licensing.licenseAssignments.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.productId Name for product
     * @param {string} params.skuId Name for sku for which license would be revoked
     * @param {string} params.userId email id or unique Id of the user
     * @param {().LicenseAssignment} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
        params?: Params$Resource$Licenseassignments$Update,
        options?: MethodOptions): AxiosPromise<Schema$LicenseAssignment>;
    update(
        params: Params$Resource$Licenseassignments$Update,
        options: MethodOptions|BodyResponseCallback<Schema$LicenseAssignment>,
        callback: BodyResponseCallback<Schema$LicenseAssignment>): void;
    update(
        params: Params$Resource$Licenseassignments$Update,
        callback: BodyResponseCallback<Schema$LicenseAssignment>): void;
    update(callback: BodyResponseCallback<Schema$LicenseAssignment>): void;
    update(
        paramsOrCallback?: Params$Resource$Licenseassignments$Update|
        BodyResponseCallback<Schema$LicenseAssignment>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$LicenseAssignment>,
        callback?: BodyResponseCallback<Schema$LicenseAssignment>):
        void|AxiosPromise<Schema$LicenseAssignment> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Licenseassignments$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Licenseassignments$Update;
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
                   '/apps/licensing/v1/product/{productId}/sku/{skuId}/user/{userId}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['productId', 'skuId', 'userId'],
        pathParams: ['productId', 'skuId', 'userId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$LicenseAssignment>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LicenseAssignment>(parameters);
      }
    }
  }

  export interface Params$Resource$Licenseassignments$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name for product
     */
    productId?: string;
    /**
     * Name for sku
     */
    skuId?: string;
    /**
     * email id or unique Id of the user
     */
    userId?: string;
  }
  export interface Params$Resource$Licenseassignments$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name for product
     */
    productId?: string;
    /**
     * Name for sku
     */
    skuId?: string;
    /**
     * email id or unique Id of the user
     */
    userId?: string;
  }
  export interface Params$Resource$Licenseassignments$Insert {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name for product
     */
    productId?: string;
    /**
     * Name for sku
     */
    skuId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LicenseAssignmentInsert;
  }
  export interface Params$Resource$Licenseassignments$Listforproduct {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * CustomerId represents the customer for whom licenseassignments are
     * queried
     */
    customerId?: string;
    /**
     * Maximum number of campaigns to return at one time. Must be positive.
     * Optional. Default value is 100.
     */
    maxResults?: number;
    /**
     * Token to fetch the next page.Optional. By default server will return
     * first page
     */
    pageToken?: string;
    /**
     * Name for product
     */
    productId?: string;
  }
  export interface Params$Resource$Licenseassignments$Listforproductandsku {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * CustomerId represents the customer for whom licenseassignments are
     * queried
     */
    customerId?: string;
    /**
     * Maximum number of campaigns to return at one time. Must be positive.
     * Optional. Default value is 100.
     */
    maxResults?: number;
    /**
     * Token to fetch the next page.Optional. By default server will return
     * first page
     */
    pageToken?: string;
    /**
     * Name for product
     */
    productId?: string;
    /**
     * Name for sku
     */
    skuId?: string;
  }
  export interface Params$Resource$Licenseassignments$Patch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name for product
     */
    productId?: string;
    /**
     * Name for sku for which license would be revoked
     */
    skuId?: string;
    /**
     * email id or unique Id of the user
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LicenseAssignment;
  }
  export interface Params$Resource$Licenseassignments$Update {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name for product
     */
    productId?: string;
    /**
     * Name for sku for which license would be revoked
     */
    skuId?: string;
    /**
     * email id or unique Id of the user
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LicenseAssignment;
  }
}
