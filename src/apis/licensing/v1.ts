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
 * Enterprise License Manager API
 *
 * Views and manages licenses for your domain.
 *
 * @example
 * const google = require('googleapis');
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
  google: GoogleApis;
  root = this;

  licenseAssignments: Resource$Licenseassignments;

  constructor(options: GlobalOptions, google: GoogleApis) {
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
  etags: string;
  /**
   * Identifies the resource as a LicenseAssignment.
   */
  kind: string;
  /**
   * Id of the product.
   */
  productId: string;
  /**
   * Display Name of the product.
   */
  productName: string;
  /**
   * Link to this page.
   */
  selfLink: string;
  /**
   * Id of the sku of the product.
   */
  skuId: string;
  /**
   * Display Name of the sku of the product.
   */
  skuName: string;
  /**
   * Email id of the user.
   */
  userId: string;
}
/**
 * Template for LicenseAssignment Insert request
 */
export interface Schema$LicenseAssignmentInsert {
  /**
   * Email id of the user
   */
  userId: string;
}
/**
 * LicesnseAssignment List for a given product/sku for a customer.
 */
export interface Schema$LicenseAssignmentList {
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * The LicenseAssignments in this page of results.
   */
  items: Schema$LicenseAssignment[];
  /**
   * Identifies the resource as a collection of LicenseAssignments.
   */
  kind: string;
  /**
   * The continuation token, used to page through large result sets. Provide
   * this value in a subsequent request to return the next page of results.
   */
  nextPageToken: string;
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
  delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
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
  get(params?: any,
      options?: MethodOptions): AxiosPromise<Schema$LicenseAssignment>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$LicenseAssignment>,
      callback?: BodyResponseCallback<Schema$LicenseAssignment>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$LicenseAssignment>,
      callback?: BodyResponseCallback<Schema$LicenseAssignment>):
      void|AxiosPromise<Schema$LicenseAssignment> {
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
  insert(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$LicenseAssignment>;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$LicenseAssignment>,
      callback?: BodyResponseCallback<Schema$LicenseAssignment>): void;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$LicenseAssignment>,
      callback?: BodyResponseCallback<Schema$LicenseAssignment>):
      void|AxiosPromise<Schema$LicenseAssignment> {
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
  listForProduct(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$LicenseAssignmentList>;
  listForProduct(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$LicenseAssignmentList>,
      callback?: BodyResponseCallback<Schema$LicenseAssignmentList>): void;
  listForProduct(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$LicenseAssignmentList>,
      callback?: BodyResponseCallback<Schema$LicenseAssignmentList>):
      void|AxiosPromise<Schema$LicenseAssignmentList> {
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
  listForProductAndSku(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$LicenseAssignmentList>;
  listForProductAndSku(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$LicenseAssignmentList>,
      callback?: BodyResponseCallback<Schema$LicenseAssignmentList>): void;
  listForProductAndSku(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$LicenseAssignmentList>,
      callback?: BodyResponseCallback<Schema$LicenseAssignmentList>):
      void|AxiosPromise<Schema$LicenseAssignmentList> {
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
  patch(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$LicenseAssignment>;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$LicenseAssignment>,
      callback?: BodyResponseCallback<Schema$LicenseAssignment>): void;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$LicenseAssignment>,
      callback?: BodyResponseCallback<Schema$LicenseAssignment>):
      void|AxiosPromise<Schema$LicenseAssignment> {
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
  update(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$LicenseAssignment>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$LicenseAssignment>,
      callback?: BodyResponseCallback<Schema$LicenseAssignment>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$LicenseAssignment>,
      callback?: BodyResponseCallback<Schema$LicenseAssignment>):
      void|AxiosPromise<Schema$LicenseAssignment> {
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
