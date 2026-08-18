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
import {
  validateSingleSegment,
  validateMultiSegment,
  encodeWithSlashes,
  encodeWithoutSlashes,
} from '../../transcoding';

export namespace cloudproductregistry_v1 {
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
   * Cloud Product Registry API
   *
   * Cloud Product Registry API provides capabilities to access all first Google Cloud products.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const cloudproductregistry = google.cloudproductregistry('v1');
   * ```
   */
  export class Cloudproductregistry {
    context: APIRequestContext;
    logicalProducts: Resource$Logicalproducts;
    productSuites: Resource$Productsuites;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.logicalProducts = new Resource$Logicalproducts(this.context);
      this.productSuites = new Resource$Productsuites(this.context);
    }
  }

  /**
   * Response message for ListLogicalProducts.
   */
  export interface Schema$ListLogicalProductsResponse {
    /**
     * Matched LogicalProducts
     */
    logicalProducts?: Schema$LogicalProduct[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for ListLogicalProductVariants.
   */
  export interface Schema$ListLogicalProductVariantsResponse {
    /**
     * Matched LogicalProductVariants
     */
    logicalProductVariants?: Schema$LogicalProductVariant[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for ListProductSuites.
   */
  export interface Schema$ListProductSuitesResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Matched ProductSuites
     */
    productSuites?: Schema$ProductSuite[];
  }
  /**
   * Represents an independent service offering that can be provisioned by a customer.
   */
  export interface Schema$LogicalProduct {
    /**
     * Output only. Current Lifecycle state of the logical product.
     */
    lifecycleState?: string | null;
    /**
     * Identifier. The resource name of the LogicalProduct. Format: logicalProducts/{logical_product\}.
     */
    name?: string | null;
    /**
     * Product suite associated with the logical product. Format: productSuites/{product_suite\}.
     */
    productSuite?: string | null;
    /**
     * Output only. Indicates whether the logical product has been replaced. If `false`, the product is active. If `true`, the product has been replaced by another type, and the `replacement` field contains the resource name of that replacement.
     */
    replaced?: boolean | null;
    /**
     * Output only. The resource name of the Logical Entity that the logical product is replaced by. This field is only populated when this logical product is replaced by some other type. Eg: logicalProducts/{logical_product\}/variants/{variant\}, productSuites/{product_suite\}, etc.
     */
    replacement?: string | null;
    /**
     * Display name of the LogicalProduct.
     */
    title?: string | null;
    /**
     * Output only. Child variant resource references. Format: logicalProducts/{logical_product\}/variants/{variant\}
     */
    variants?: string[] | null;
  }
  /**
   * Represents a distinct offering derived from a primary product that retains core functionalities but offers specialized features for a specific market segment.
   */
  export interface Schema$LogicalProductVariant {
    /**
     * Output only. Current Lifecycle state of the logical product variant.
     */
    lifecycleState?: string | null;
    /**
     * Identifier. The resource name of the LogicalProductVariant. Format: logicalProducts/{logical_product\}/variants/{variant\}
     */
    name?: string | null;
    /**
     * Output only. Indicates whether the logical product variant has been replaced. If `false`, the variant is active. If `true`, the variant has been replaced by another type, and the `replacement` field contains the resource name of that replacement.
     */
    replaced?: boolean | null;
    /**
     * Output only. The resource name of the Logical Entity that the logical product variant is replaced by. This field is only populated when this logical product variant is replaced by some other type. Eg: logicalProducts/{logical_product\}, productSuites/{product_suite\}, etc.
     */
    replacement?: string | null;
    /**
     * Display name of the LogicalProductVariant.
     */
    title?: string | null;
  }
  /**
   * Response message for LookupEntity.
   */
  export interface Schema$LookupEntityResponse {
    /**
     * Matched LogicalProduct.
     */
    logicalProduct?: Schema$LogicalProduct;
    /**
     * Matched LogicalProductVariant.
     */
    logicalProductVariant?: Schema$LogicalProductVariant;
    /**
     * Matched ProductSuite.
     */
    productSuite?: Schema$ProductSuite;
  }
  /**
   * Represents a unified grouping of products sharing a common brand and market positioning.
   */
  export interface Schema$ProductSuite {
    /**
     * Output only. LogicalProducts under this suite. Format: logicalProducts/{logical_product\}
     */
    logicalProducts?: string[] | null;
    /**
     * Identifier. The resource name of the ProductSuite. Format: productSuites/{product_suite\}
     */
    name?: string | null;
    /**
     * Output only. Indicates whether the product suite has been replaced. If `false`, the product suite is active. If `true`, the product suite has been replaced by another type, and the `replacement` field contains the resource name of that replacement.
     */
    replaced?: boolean | null;
    /**
     * Output only. The resource name of the Logical Entity that the product suite is replaced by. This field is only populated when this product suite is replaced by some other type. Eg: logicalProducts/{logical_product\}, logicalProducts/{logical_product\}/variants/{variant\}, etc.
     */
    replacement?: string | null;
    /**
     * Title of the ProductSuite.
     */
    title?: string | null;
  }

  export class Resource$Logicalproducts {
    context: APIRequestContext;
    variants: Resource$Logicalproducts$Variants;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.variants = new Resource$Logicalproducts$Variants(this.context);
    }

    /**
     * Gets details of a LogicalProduct.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudproductregistry.googleapis.com
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
     * const cloudproductregistry = google.cloudproductregistry('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudproductregistry.logicalProducts.get({
     *     // Required. The name of the LogicalProduct to retrieve. Format: logicalProducts/{logical_product\}
     *     name: 'logicalProducts/my-logicalProduct',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "lifecycleState": "my_lifecycleState",
     *   //   "name": "my_name",
     *   //   "productSuite": "my_productSuite",
     *   //   "replaced": false,
     *   //   "replacement": "my_replacement",
     *   //   "title": "my_title",
     *   //   "variants": []
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
      params: Params$Resource$Logicalproducts$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Logicalproducts$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$LogicalProduct>>;
    get(
      params: Params$Resource$Logicalproducts$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Logicalproducts$Get,
      options: MethodOptions | BodyResponseCallback<Schema$LogicalProduct>,
      callback: BodyResponseCallback<Schema$LogicalProduct>
    ): void;
    get(
      params: Params$Resource$Logicalproducts$Get,
      callback: BodyResponseCallback<Schema$LogicalProduct>
    ): void;
    get(callback: BodyResponseCallback<Schema$LogicalProduct>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Logicalproducts$Get
        | BodyResponseCallback<Schema$LogicalProduct>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LogicalProduct>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LogicalProduct>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$LogicalProduct>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Logicalproducts$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Logicalproducts$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      if (params.name !== undefined && params.name !== null) {
        validateMultiSegment('name', String(params.name));
        params.name = encodeWithoutSlashes(String(params.name));
      }

      const rootUrl =
        options.rootUrl || 'https://cloudproductregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}')
              .replace(/([^:]\/)\/+/g, '$1')
              .replace(/\{([^+:][^}]*)\}/g, '{+$1}'),
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
        createAPIRequest<Schema$LogicalProduct>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LogicalProduct>(parameters);
      }
    }

    /**
     * Lists LogicalProducts matching given criteria.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudproductregistry.googleapis.com
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
     * const cloudproductregistry = google.cloudproductregistry('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudproductregistry.logicalProducts.list({
     *     // Optional. The filter expression for listing logical products. Filter syntax: https://google.aip.dev/160 Supported fields: suite_id
     *     filter: 'placeholder-value',
     *     // Optional. The maximum number of logical products to return. The service may return fewer than this value. If unspecified, at most 100 logical products will be returned. The maximum value is 500; values above 500 will be coerced to 500.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListLogicalProducts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListLogicalProducts` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "logicalProducts": [],
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
      params: Params$Resource$Logicalproducts$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Logicalproducts$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListLogicalProductsResponse>>;
    list(
      params: Params$Resource$Logicalproducts$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Logicalproducts$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLogicalProductsResponse>,
      callback: BodyResponseCallback<Schema$ListLogicalProductsResponse>
    ): void;
    list(
      params: Params$Resource$Logicalproducts$List,
      callback: BodyResponseCallback<Schema$ListLogicalProductsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListLogicalProductsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Logicalproducts$List
        | BodyResponseCallback<Schema$ListLogicalProductsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListLogicalProductsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListLogicalProductsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListLogicalProductsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Logicalproducts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Logicalproducts$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudproductregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/logicalProducts')
              .replace(/([^:]\/)\/+/g, '$1')
              .replace(/\{([^+:][^}]*)\}/g, '{+$1}'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListLogicalProductsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListLogicalProductsResponse>(parameters);
      }
    }

    /**
     * Look up entities.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudproductregistry.googleapis.com
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
     * const cloudproductregistry = google.cloudproductregistry('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudproductregistry.logicalProducts.lookupEntity({
     *     // Required. Entity uri to look up. Supported Formats: logicalProducts/{logical_product\} logicalProducts/{logical_product\}/variants/{variant\} productSuites/{product_suite\}
     *     lookupUri: 'logicalProducts/my-logicalProduct',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "logicalProduct": {},
     *   //   "logicalProductVariant": {},
     *   //   "productSuite": {}
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
    lookupEntity(
      params: Params$Resource$Logicalproducts$Lookupentity,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    lookupEntity(
      params?: Params$Resource$Logicalproducts$Lookupentity,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$LookupEntityResponse>>;
    lookupEntity(
      params: Params$Resource$Logicalproducts$Lookupentity,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    lookupEntity(
      params: Params$Resource$Logicalproducts$Lookupentity,
      options:
        MethodOptions | BodyResponseCallback<Schema$LookupEntityResponse>,
      callback: BodyResponseCallback<Schema$LookupEntityResponse>
    ): void;
    lookupEntity(
      params: Params$Resource$Logicalproducts$Lookupentity,
      callback: BodyResponseCallback<Schema$LookupEntityResponse>
    ): void;
    lookupEntity(
      callback: BodyResponseCallback<Schema$LookupEntityResponse>
    ): void;
    lookupEntity(
      paramsOrCallback?:
        | Params$Resource$Logicalproducts$Lookupentity
        | BodyResponseCallback<Schema$LookupEntityResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LookupEntityResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LookupEntityResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$LookupEntityResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Logicalproducts$Lookupentity;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Logicalproducts$Lookupentity;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      if (params.lookupUri !== undefined && params.lookupUri !== null) {
        validateMultiSegment('lookupUri', String(params.lookupUri));
        params.lookupUri = encodeWithoutSlashes(String(params.lookupUri));
      }

      const rootUrl =
        options.rootUrl || 'https://cloudproductregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+lookupUri}:lookupEntity')
              .replace(/([^:]\/)\/+/g, '$1')
              .replace(/\{([^+:][^}]*)\}/g, '{+$1}'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['lookupUri'],
        pathParams: ['lookupUri'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LookupEntityResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LookupEntityResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Logicalproducts$Get extends StandardParameters {
    /**
     * Required. The name of the LogicalProduct to retrieve. Format: logicalProducts/{logical_product\}
     */
    name?: string;
  }
  export interface Params$Resource$Logicalproducts$List extends StandardParameters {
    /**
     * Optional. The filter expression for listing logical products. Filter syntax: https://google.aip.dev/160 Supported fields: suite_id
     */
    filter?: string;
    /**
     * Optional. The maximum number of logical products to return. The service may return fewer than this value. If unspecified, at most 100 logical products will be returned. The maximum value is 500; values above 500 will be coerced to 500.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListLogicalProducts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListLogicalProducts` must match the call that provided the page token.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Logicalproducts$Lookupentity extends StandardParameters {
    /**
     * Required. Entity uri to look up. Supported Formats: logicalProducts/{logical_product\} logicalProducts/{logical_product\}/variants/{variant\} productSuites/{product_suite\}
     */
    lookupUri?: string;
  }

  export class Resource$Logicalproducts$Variants {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get details of a LogicalProductVariant.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudproductregistry.googleapis.com
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
     * const cloudproductregistry = google.cloudproductregistry('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudproductregistry.logicalProducts.variants.get({
     *     // Required. The name of the LogicalProductVariant to retrieve. Format: logicalProducts/{logical_product\}/variants/{variant\}
     *     name: 'logicalProducts/my-logicalProduct/variants/my-variant',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "lifecycleState": "my_lifecycleState",
     *   //   "name": "my_name",
     *   //   "replaced": false,
     *   //   "replacement": "my_replacement",
     *   //   "title": "my_title"
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
      params: Params$Resource$Logicalproducts$Variants$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Logicalproducts$Variants$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$LogicalProductVariant>>;
    get(
      params: Params$Resource$Logicalproducts$Variants$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Logicalproducts$Variants$Get,
      options:
        MethodOptions | BodyResponseCallback<Schema$LogicalProductVariant>,
      callback: BodyResponseCallback<Schema$LogicalProductVariant>
    ): void;
    get(
      params: Params$Resource$Logicalproducts$Variants$Get,
      callback: BodyResponseCallback<Schema$LogicalProductVariant>
    ): void;
    get(callback: BodyResponseCallback<Schema$LogicalProductVariant>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Logicalproducts$Variants$Get
        | BodyResponseCallback<Schema$LogicalProductVariant>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LogicalProductVariant>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LogicalProductVariant>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$LogicalProductVariant>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Logicalproducts$Variants$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Logicalproducts$Variants$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      if (params.name !== undefined && params.name !== null) {
        validateMultiSegment('name', String(params.name));
        params.name = encodeWithoutSlashes(String(params.name));
      }

      const rootUrl =
        options.rootUrl || 'https://cloudproductregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}')
              .replace(/([^:]\/)\/+/g, '$1')
              .replace(/\{([^+:][^}]*)\}/g, '{+$1}'),
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
        createAPIRequest<Schema$LogicalProductVariant>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LogicalProductVariant>(parameters);
      }
    }

    /**
     * Lists LogicalProductVariants matching given criteria.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudproductregistry.googleapis.com
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
     * const cloudproductregistry = google.cloudproductregistry('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudproductregistry.logicalProducts.variants.list({
     *     // Optional. The maximum number of logical product variants to return. The service may return fewer than this value. If unspecified, at most 100 logical product variants will be returned. The maximum value is 500; values above 500 will be coerced to 500.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListLogicalProductVariants` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListLogicalProductVariants` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. Parent logical product id. Format: logicalProducts/{logical_product\}
     *     parent: 'logicalProducts/my-logicalProduct',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "logicalProductVariants": [],
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
      params: Params$Resource$Logicalproducts$Variants$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Logicalproducts$Variants$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ListLogicalProductVariantsResponse>
    >;
    list(
      params: Params$Resource$Logicalproducts$Variants$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Logicalproducts$Variants$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLogicalProductVariantsResponse>,
      callback: BodyResponseCallback<Schema$ListLogicalProductVariantsResponse>
    ): void;
    list(
      params: Params$Resource$Logicalproducts$Variants$List,
      callback: BodyResponseCallback<Schema$ListLogicalProductVariantsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListLogicalProductVariantsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Logicalproducts$Variants$List
        | BodyResponseCallback<Schema$ListLogicalProductVariantsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListLogicalProductVariantsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListLogicalProductVariantsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ListLogicalProductVariantsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Logicalproducts$Variants$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Logicalproducts$Variants$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      if (params.parent !== undefined && params.parent !== null) {
        validateMultiSegment('parent', String(params.parent));
        params.parent = encodeWithoutSlashes(String(params.parent));
      }

      const rootUrl =
        options.rootUrl || 'https://cloudproductregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/variants')
              .replace(/([^:]\/)\/+/g, '$1')
              .replace(/\{([^+:][^}]*)\}/g, '{+$1}'),
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
        createAPIRequest<Schema$ListLogicalProductVariantsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListLogicalProductVariantsResponse>(
          parameters
        );
      }
    }

    /**
     * Look up entities.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudproductregistry.googleapis.com
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
     * const cloudproductregistry = google.cloudproductregistry('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudproductregistry.logicalProducts.variants.lookupEntity({
     *     // Required. Entity uri to look up. Supported Formats: logicalProducts/{logical_product\} logicalProducts/{logical_product\}/variants/{variant\} productSuites/{product_suite\}
     *     lookupUri: 'logicalProducts/my-logicalProduct/variants/my-variant',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "logicalProduct": {},
     *   //   "logicalProductVariant": {},
     *   //   "productSuite": {}
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
    lookupEntity(
      params: Params$Resource$Logicalproducts$Variants$Lookupentity,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    lookupEntity(
      params?: Params$Resource$Logicalproducts$Variants$Lookupentity,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$LookupEntityResponse>>;
    lookupEntity(
      params: Params$Resource$Logicalproducts$Variants$Lookupentity,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    lookupEntity(
      params: Params$Resource$Logicalproducts$Variants$Lookupentity,
      options:
        MethodOptions | BodyResponseCallback<Schema$LookupEntityResponse>,
      callback: BodyResponseCallback<Schema$LookupEntityResponse>
    ): void;
    lookupEntity(
      params: Params$Resource$Logicalproducts$Variants$Lookupentity,
      callback: BodyResponseCallback<Schema$LookupEntityResponse>
    ): void;
    lookupEntity(
      callback: BodyResponseCallback<Schema$LookupEntityResponse>
    ): void;
    lookupEntity(
      paramsOrCallback?:
        | Params$Resource$Logicalproducts$Variants$Lookupentity
        | BodyResponseCallback<Schema$LookupEntityResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LookupEntityResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LookupEntityResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$LookupEntityResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Logicalproducts$Variants$Lookupentity;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Logicalproducts$Variants$Lookupentity;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      if (params.lookupUri !== undefined && params.lookupUri !== null) {
        validateMultiSegment('lookupUri', String(params.lookupUri));
        params.lookupUri = encodeWithoutSlashes(String(params.lookupUri));
      }

      const rootUrl =
        options.rootUrl || 'https://cloudproductregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+lookupUri}:lookupEntity')
              .replace(/([^:]\/)\/+/g, '$1')
              .replace(/\{([^+:][^}]*)\}/g, '{+$1}'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['lookupUri'],
        pathParams: ['lookupUri'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LookupEntityResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LookupEntityResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Logicalproducts$Variants$Get extends StandardParameters {
    /**
     * Required. The name of the LogicalProductVariant to retrieve. Format: logicalProducts/{logical_product\}/variants/{variant\}
     */
    name?: string;
  }
  export interface Params$Resource$Logicalproducts$Variants$List extends StandardParameters {
    /**
     * Optional. The maximum number of logical product variants to return. The service may return fewer than this value. If unspecified, at most 100 logical product variants will be returned. The maximum value is 500; values above 500 will be coerced to 500.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListLogicalProductVariants` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListLogicalProductVariants` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Parent logical product id. Format: logicalProducts/{logical_product\}
     */
    parent?: string;
  }
  export interface Params$Resource$Logicalproducts$Variants$Lookupentity extends StandardParameters {
    /**
     * Required. Entity uri to look up. Supported Formats: logicalProducts/{logical_product\} logicalProducts/{logical_product\}/variants/{variant\} productSuites/{product_suite\}
     */
    lookupUri?: string;
  }

  export class Resource$Productsuites {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get details of a ProductSuite.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudproductregistry.googleapis.com
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
     * const cloudproductregistry = google.cloudproductregistry('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudproductregistry.productSuites.get({
     *     // Required. The name of the ProductSuite to retrieve. Format: productSuites/{product_suite\}
     *     name: 'productSuites/my-productSuite',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "logicalProducts": [],
     *   //   "name": "my_name",
     *   //   "replaced": false,
     *   //   "replacement": "my_replacement",
     *   //   "title": "my_title"
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
      params: Params$Resource$Productsuites$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Productsuites$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ProductSuite>>;
    get(
      params: Params$Resource$Productsuites$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Productsuites$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ProductSuite>,
      callback: BodyResponseCallback<Schema$ProductSuite>
    ): void;
    get(
      params: Params$Resource$Productsuites$Get,
      callback: BodyResponseCallback<Schema$ProductSuite>
    ): void;
    get(callback: BodyResponseCallback<Schema$ProductSuite>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Productsuites$Get
        | BodyResponseCallback<Schema$ProductSuite>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ProductSuite>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ProductSuite>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ProductSuite>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Productsuites$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Productsuites$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      if (params.name !== undefined && params.name !== null) {
        validateMultiSegment('name', String(params.name));
        params.name = encodeWithoutSlashes(String(params.name));
      }

      const rootUrl =
        options.rootUrl || 'https://cloudproductregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}')
              .replace(/([^:]\/)\/+/g, '$1')
              .replace(/\{([^+:][^}]*)\}/g, '{+$1}'),
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
        createAPIRequest<Schema$ProductSuite>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ProductSuite>(parameters);
      }
    }

    /**
     * Lists ProductSuites.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudproductregistry.googleapis.com
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
     * const cloudproductregistry = google.cloudproductregistry('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudproductregistry.productSuites.list({
     *     // Optional. The maximum number of suites to return. The service may return fewer than this value. If unspecified, at most 100 suites will be returned. The maximum value is 500; values above 500 will be coerced to 500.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListProductSuites` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProductSuites` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "productSuites": []
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
      params: Params$Resource$Productsuites$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Productsuites$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListProductSuitesResponse>>;
    list(
      params: Params$Resource$Productsuites$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Productsuites$List,
      options:
        MethodOptions | BodyResponseCallback<Schema$ListProductSuitesResponse>,
      callback: BodyResponseCallback<Schema$ListProductSuitesResponse>
    ): void;
    list(
      params: Params$Resource$Productsuites$List,
      callback: BodyResponseCallback<Schema$ListProductSuitesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListProductSuitesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Productsuites$List
        | BodyResponseCallback<Schema$ListProductSuitesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListProductSuitesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListProductSuitesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListProductSuitesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Productsuites$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Productsuites$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudproductregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/productSuites')
              .replace(/([^:]\/)\/+/g, '$1')
              .replace(/\{([^+:][^}]*)\}/g, '{+$1}'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListProductSuitesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListProductSuitesResponse>(parameters);
      }
    }

    /**
     * Look up entities.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudproductregistry.googleapis.com
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
     * const cloudproductregistry = google.cloudproductregistry('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudproductregistry.productSuites.lookupEntity({
     *     // Required. Entity uri to look up. Supported Formats: logicalProducts/{logical_product\} logicalProducts/{logical_product\}/variants/{variant\} productSuites/{product_suite\}
     *     lookupUri: 'productSuites/my-productSuite',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "logicalProduct": {},
     *   //   "logicalProductVariant": {},
     *   //   "productSuite": {}
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
    lookupEntity(
      params: Params$Resource$Productsuites$Lookupentity,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    lookupEntity(
      params?: Params$Resource$Productsuites$Lookupentity,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$LookupEntityResponse>>;
    lookupEntity(
      params: Params$Resource$Productsuites$Lookupentity,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    lookupEntity(
      params: Params$Resource$Productsuites$Lookupentity,
      options:
        MethodOptions | BodyResponseCallback<Schema$LookupEntityResponse>,
      callback: BodyResponseCallback<Schema$LookupEntityResponse>
    ): void;
    lookupEntity(
      params: Params$Resource$Productsuites$Lookupentity,
      callback: BodyResponseCallback<Schema$LookupEntityResponse>
    ): void;
    lookupEntity(
      callback: BodyResponseCallback<Schema$LookupEntityResponse>
    ): void;
    lookupEntity(
      paramsOrCallback?:
        | Params$Resource$Productsuites$Lookupentity
        | BodyResponseCallback<Schema$LookupEntityResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LookupEntityResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LookupEntityResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$LookupEntityResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Productsuites$Lookupentity;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Productsuites$Lookupentity;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      if (params.lookupUri !== undefined && params.lookupUri !== null) {
        validateMultiSegment('lookupUri', String(params.lookupUri));
        params.lookupUri = encodeWithoutSlashes(String(params.lookupUri));
      }

      const rootUrl =
        options.rootUrl || 'https://cloudproductregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+lookupUri}:lookupEntity')
              .replace(/([^:]\/)\/+/g, '$1')
              .replace(/\{([^+:][^}]*)\}/g, '{+$1}'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['lookupUri'],
        pathParams: ['lookupUri'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LookupEntityResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LookupEntityResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Productsuites$Get extends StandardParameters {
    /**
     * Required. The name of the ProductSuite to retrieve. Format: productSuites/{product_suite\}
     */
    name?: string;
  }
  export interface Params$Resource$Productsuites$List extends StandardParameters {
    /**
     * Optional. The maximum number of suites to return. The service may return fewer than this value. If unspecified, at most 100 suites will be returned. The maximum value is 500; values above 500 will be coerced to 500.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListProductSuites` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProductSuites` must match the call that provided the page token.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Productsuites$Lookupentity extends StandardParameters {
    /**
     * Required. Entity uri to look up. Supported Formats: logicalProducts/{logical_product\} logicalProducts/{logical_product\}/variants/{variant\} productSuites/{product_suite\}
     */
    lookupUri?: string;
  }
}
