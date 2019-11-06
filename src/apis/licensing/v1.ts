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

export namespace licensing_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
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
   * Licensing API
   *
   * Licensing API to view and manage licenses for your domain
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
    context: APIRequestContext;
    licenseAssignments: Resource$Licenseassignments;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.licenseAssignments = new Resource$Licenseassignments(this.context);
    }
  }

  /**
   * Representation of a license assignment.
   */
  export interface Schema$LicenseAssignment {
    /**
     * ETag of the resource.
     */
    etags?: string | null;
    /**
     * Identifies the resource as a LicenseAssignment.
     */
    kind?: string | null;
    /**
     * A product&#39;s unique identifier. For more information about products in this version of the API, see Product and SKU IDs.
     */
    productId?: string | null;
    /**
     * Display Name of the product.
     */
    productName?: string | null;
    /**
     * Link to this page.
     */
    selfLink?: string | null;
    /**
     * A product SKU&#39;s unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
     */
    skuId?: string | null;
    /**
     * Display Name of the sku of the product.
     */
    skuName?: string | null;
    /**
     * The user&#39;s current primary email address. If the user&#39;s email address changes, use the new email address in your API requests. Since a userId is subject to change, do not use a userId value as a key for persistent data. This key could break if the current user&#39;s email address changes. If the userId is suspended, the license status changes.
     */
    userId?: string | null;
  }
  /**
   * Representation of a license assignment.
   */
  export interface Schema$LicenseAssignmentInsert {
    /**
     * Email id of the user
     */
    userId?: string | null;
  }
  /**
   * LicesnseAssignment List for a given product/sku for a customer.
   */
  export interface Schema$LicenseAssignmentList {
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * The LicenseAssignments in this page of results.
     */
    items?: Schema$LicenseAssignment[];
    /**
     * Identifies the resource as a collection of LicenseAssignments.
     */
    kind?: string | null;
    /**
     * The token that you must submit in a subsequent request to retrieve additional license results matching your query parameters. The maxResults query string is related to the nextPageToken since maxResults determines how many entries are returned on each next page.
     */
    nextPageToken?: string | null;
  }

  export class Resource$Licenseassignments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * licensing.licenseAssignments.delete
     * @desc Revoke a license.
     * @alias licensing.licenseAssignments.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.productId A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
     * @param {string} params.skuId A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
     * @param {string} params.userId The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a userId is subject to change, do not use a userId value as a key for persistent data. This key could break if the current user's email address changes. If the userId is suspended, the license status changes.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Licenseassignments$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Licenseassignments$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Licenseassignments$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Licenseassignments$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Licenseassignments$Delete;
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
            url: (
              rootUrl +
              '/apps/licensing/v1/product/{productId}/sku/{skuId}/user/{userId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['productId', 'skuId', 'userId'],
        pathParams: ['productId', 'skuId', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * licensing.licenseAssignments.get
     * @desc Get a specific user's license by product SKU.
     * @alias licensing.licenseAssignments.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.productId A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
     * @param {string} params.skuId A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
     * @param {string} params.userId The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a userId is subject to change, do not use a userId value as a key for persistent data. This key could break if the current user's email address changes. If the userId is suspended, the license status changes.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Licenseassignments$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LicenseAssignment>;
    get(
      params: Params$Resource$Licenseassignments$Get,
      options: MethodOptions | BodyResponseCallback<Schema$LicenseAssignment>,
      callback: BodyResponseCallback<Schema$LicenseAssignment>
    ): void;
    get(
      params: Params$Resource$Licenseassignments$Get,
      callback: BodyResponseCallback<Schema$LicenseAssignment>
    ): void;
    get(callback: BodyResponseCallback<Schema$LicenseAssignment>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Licenseassignments$Get
        | BodyResponseCallback<Schema$LicenseAssignment>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LicenseAssignment>,
      callback?: BodyResponseCallback<Schema$LicenseAssignment>
    ): void | GaxiosPromise<Schema$LicenseAssignment> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Licenseassignments$Get;
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
            url: (
              rootUrl +
              '/apps/licensing/v1/product/{productId}/sku/{skuId}/user/{userId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['productId', 'skuId', 'userId'],
        pathParams: ['productId', 'skuId', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LicenseAssignment>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LicenseAssignment>(parameters);
      }
    }

    /**
     * licensing.licenseAssignments.insert
     * @desc Assign a license.
     * @alias licensing.licenseAssignments.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.productId A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
     * @param {string} params.skuId A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
     * @param {().LicenseAssignmentInsert} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Licenseassignments$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LicenseAssignment>;
    insert(
      params: Params$Resource$Licenseassignments$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$LicenseAssignment>,
      callback: BodyResponseCallback<Schema$LicenseAssignment>
    ): void;
    insert(
      params: Params$Resource$Licenseassignments$Insert,
      callback: BodyResponseCallback<Schema$LicenseAssignment>
    ): void;
    insert(callback: BodyResponseCallback<Schema$LicenseAssignment>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Licenseassignments$Insert
        | BodyResponseCallback<Schema$LicenseAssignment>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LicenseAssignment>,
      callback?: BodyResponseCallback<Schema$LicenseAssignment>
    ): void | GaxiosPromise<Schema$LicenseAssignment> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Licenseassignments$Insert;
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
            url: (
              rootUrl +
              '/apps/licensing/v1/product/{productId}/sku/{skuId}/user'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['productId', 'skuId'],
        pathParams: ['productId', 'skuId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LicenseAssignment>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LicenseAssignment>(parameters);
      }
    }

    /**
     * licensing.licenseAssignments.listForProduct
     * @desc List all users assigned licenses for a specific product SKU.
     * @alias licensing.licenseAssignments.listForProduct
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.customerId Customer's customerId. A previous version of this API accepted the primary domain name as a value for this field. If the customer is suspended, the server returns an error.
     * @param {integer=} params.maxResults The maxResults query string determines how many entries are returned on each page of a large response. This is an optional parameter. The value must be a positive number.
     * @param {string=} params.pageToken Token to fetch the next page of data. The maxResults query string is related to the pageToken since maxResults determines how many entries are returned on each page. This is an optional query string. If not specified, the server returns the first page.
     * @param {string} params.productId A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listForProduct(
      params?: Params$Resource$Licenseassignments$Listforproduct,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LicenseAssignmentList>;
    listForProduct(
      params: Params$Resource$Licenseassignments$Listforproduct,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$LicenseAssignmentList>,
      callback: BodyResponseCallback<Schema$LicenseAssignmentList>
    ): void;
    listForProduct(
      params: Params$Resource$Licenseassignments$Listforproduct,
      callback: BodyResponseCallback<Schema$LicenseAssignmentList>
    ): void;
    listForProduct(
      callback: BodyResponseCallback<Schema$LicenseAssignmentList>
    ): void;
    listForProduct(
      paramsOrCallback?:
        | Params$Resource$Licenseassignments$Listforproduct
        | BodyResponseCallback<Schema$LicenseAssignmentList>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LicenseAssignmentList>,
      callback?: BodyResponseCallback<Schema$LicenseAssignmentList>
    ): void | GaxiosPromise<Schema$LicenseAssignmentList> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Licenseassignments$Listforproduct;
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
            url: (
              rootUrl + '/apps/licensing/v1/product/{productId}/users'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['productId', 'customerId'],
        pathParams: ['productId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LicenseAssignmentList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LicenseAssignmentList>(parameters);
      }
    }

    /**
     * licensing.licenseAssignments.listForProductAndSku
     * @desc List all users assigned licenses for a specific product SKU.
     * @alias licensing.licenseAssignments.listForProductAndSku
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.customerId Customer's customerId. A previous version of this API accepted the primary domain name as a value for this field. If the customer is suspended, the server returns an error.
     * @param {integer=} params.maxResults The maxResults query string determines how many entries are returned on each page of a large response. This is an optional parameter. The value must be a positive number.
     * @param {string=} params.pageToken Token to fetch the next page of data. The maxResults query string is related to the pageToken since maxResults determines how many entries are returned on each page. This is an optional query string. If not specified, the server returns the first page.
     * @param {string} params.productId A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
     * @param {string} params.skuId A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listForProductAndSku(
      params?: Params$Resource$Licenseassignments$Listforproductandsku,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LicenseAssignmentList>;
    listForProductAndSku(
      params: Params$Resource$Licenseassignments$Listforproductandsku,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$LicenseAssignmentList>,
      callback: BodyResponseCallback<Schema$LicenseAssignmentList>
    ): void;
    listForProductAndSku(
      params: Params$Resource$Licenseassignments$Listforproductandsku,
      callback: BodyResponseCallback<Schema$LicenseAssignmentList>
    ): void;
    listForProductAndSku(
      callback: BodyResponseCallback<Schema$LicenseAssignmentList>
    ): void;
    listForProductAndSku(
      paramsOrCallback?:
        | Params$Resource$Licenseassignments$Listforproductandsku
        | BodyResponseCallback<Schema$LicenseAssignmentList>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LicenseAssignmentList>,
      callback?: BodyResponseCallback<Schema$LicenseAssignmentList>
    ): void | GaxiosPromise<Schema$LicenseAssignmentList> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Licenseassignments$Listforproductandsku;
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
            url: (
              rootUrl +
              '/apps/licensing/v1/product/{productId}/sku/{skuId}/users'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['productId', 'skuId', 'customerId'],
        pathParams: ['productId', 'skuId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LicenseAssignmentList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LicenseAssignmentList>(parameters);
      }
    }

    /**
     * licensing.licenseAssignments.patch
     * @desc Reassign a user's product SKU with a different SKU in the same product. This method supports patch semantics.
     * @alias licensing.licenseAssignments.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.productId A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
     * @param {string} params.skuId A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
     * @param {string} params.userId The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a userId is subject to change, do not use a userId value as a key for persistent data. This key could break if the current user's email address changes. If the userId is suspended, the license status changes.
     * @param {().LicenseAssignment} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Licenseassignments$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LicenseAssignment>;
    patch(
      params: Params$Resource$Licenseassignments$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$LicenseAssignment>,
      callback: BodyResponseCallback<Schema$LicenseAssignment>
    ): void;
    patch(
      params: Params$Resource$Licenseassignments$Patch,
      callback: BodyResponseCallback<Schema$LicenseAssignment>
    ): void;
    patch(callback: BodyResponseCallback<Schema$LicenseAssignment>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Licenseassignments$Patch
        | BodyResponseCallback<Schema$LicenseAssignment>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LicenseAssignment>,
      callback?: BodyResponseCallback<Schema$LicenseAssignment>
    ): void | GaxiosPromise<Schema$LicenseAssignment> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Licenseassignments$Patch;
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
            url: (
              rootUrl +
              '/apps/licensing/v1/product/{productId}/sku/{skuId}/user/{userId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['productId', 'skuId', 'userId'],
        pathParams: ['productId', 'skuId', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LicenseAssignment>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LicenseAssignment>(parameters);
      }
    }

    /**
     * licensing.licenseAssignments.update
     * @desc Reassign a user's product SKU with a different SKU in the same product.
     * @alias licensing.licenseAssignments.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.productId A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
     * @param {string} params.skuId A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
     * @param {string} params.userId The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a userId is subject to change, do not use a userId value as a key for persistent data. This key could break if the current user's email address changes. If the userId is suspended, the license status changes.
     * @param {().LicenseAssignment} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Licenseassignments$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LicenseAssignment>;
    update(
      params: Params$Resource$Licenseassignments$Update,
      options: MethodOptions | BodyResponseCallback<Schema$LicenseAssignment>,
      callback: BodyResponseCallback<Schema$LicenseAssignment>
    ): void;
    update(
      params: Params$Resource$Licenseassignments$Update,
      callback: BodyResponseCallback<Schema$LicenseAssignment>
    ): void;
    update(callback: BodyResponseCallback<Schema$LicenseAssignment>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Licenseassignments$Update
        | BodyResponseCallback<Schema$LicenseAssignment>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LicenseAssignment>,
      callback?: BodyResponseCallback<Schema$LicenseAssignment>
    ): void | GaxiosPromise<Schema$LicenseAssignment> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Licenseassignments$Update;
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
            url: (
              rootUrl +
              '/apps/licensing/v1/product/{productId}/sku/{skuId}/user/{userId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['productId', 'skuId', 'userId'],
        pathParams: ['productId', 'skuId', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LicenseAssignment>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LicenseAssignment>(parameters);
      }
    }
  }

  export interface Params$Resource$Licenseassignments$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
     */
    productId?: string;
    /**
     * A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
     */
    skuId?: string;
    /**
     * The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a userId is subject to change, do not use a userId value as a key for persistent data. This key could break if the current user's email address changes. If the userId is suspended, the license status changes.
     */
    userId?: string;
  }
  export interface Params$Resource$Licenseassignments$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
     */
    productId?: string;
    /**
     * A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
     */
    skuId?: string;
    /**
     * The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a userId is subject to change, do not use a userId value as a key for persistent data. This key could break if the current user's email address changes. If the userId is suspended, the license status changes.
     */
    userId?: string;
  }
  export interface Params$Resource$Licenseassignments$Insert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
     */
    productId?: string;
    /**
     * A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
     */
    skuId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LicenseAssignmentInsert;
  }
  export interface Params$Resource$Licenseassignments$Listforproduct
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Customer's customerId. A previous version of this API accepted the primary domain name as a value for this field. If the customer is suspended, the server returns an error.
     */
    customerId?: string;
    /**
     * The maxResults query string determines how many entries are returned on each page of a large response. This is an optional parameter. The value must be a positive number.
     */
    maxResults?: number;
    /**
     * Token to fetch the next page of data. The maxResults query string is related to the pageToken since maxResults determines how many entries are returned on each page. This is an optional query string. If not specified, the server returns the first page.
     */
    pageToken?: string;
    /**
     * A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
     */
    productId?: string;
  }
  export interface Params$Resource$Licenseassignments$Listforproductandsku
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Customer's customerId. A previous version of this API accepted the primary domain name as a value for this field. If the customer is suspended, the server returns an error.
     */
    customerId?: string;
    /**
     * The maxResults query string determines how many entries are returned on each page of a large response. This is an optional parameter. The value must be a positive number.
     */
    maxResults?: number;
    /**
     * Token to fetch the next page of data. The maxResults query string is related to the pageToken since maxResults determines how many entries are returned on each page. This is an optional query string. If not specified, the server returns the first page.
     */
    pageToken?: string;
    /**
     * A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
     */
    productId?: string;
    /**
     * A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
     */
    skuId?: string;
  }
  export interface Params$Resource$Licenseassignments$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
     */
    productId?: string;
    /**
     * A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
     */
    skuId?: string;
    /**
     * The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a userId is subject to change, do not use a userId value as a key for persistent data. This key could break if the current user's email address changes. If the userId is suspended, the license status changes.
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LicenseAssignment;
  }
  export interface Params$Resource$Licenseassignments$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
     */
    productId?: string;
    /**
     * A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
     */
    skuId?: string;
    /**
     * The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a userId is subject to change, do not use a userId value as a key for persistent data. This key could break if the current user's email address changes. If the userId is suspended, the license status changes.
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LicenseAssignment;
  }
}
