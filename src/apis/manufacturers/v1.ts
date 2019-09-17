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

export namespace manufacturers_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  interface StandardParameters {
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
   * Manufacturer Center API
   *
   * Public API for managing Manufacturer Center related data.
   *
   * @example
   * const {google} = require('googleapis');
   * const manufacturers = google.manufacturers('v1');
   *
   * @namespace manufacturers
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Manufacturers
   */
  export class Manufacturers {
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
   * Attributes of the product. For more information, see https://support.google.com/manufacturers/answer/6124116.
   */
  export interface Schema$Attributes {
    /**
     * The additional images of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#addlimage.
     */
    additionalImageLink?: Schema$Image[];
    /**
     * The target age group of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#agegroup.
     */
    ageGroup?: string | null;
    /**
     * The brand name of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#brand.
     */
    brand?: string | null;
    /**
     * The capacity of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#capacity.
     */
    capacity?: Schema$Capacity;
    /**
     * The color of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#color.
     */
    color?: string | null;
    /**
     * The count of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#count.
     */
    count?: Schema$Count;
    /**
     * The description of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#description.
     */
    description?: string | null;
    /**
     * The disclosure date of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#disclosure.
     */
    disclosureDate?: string | null;
    /**
     * A list of excluded destinations.
     */
    excludedDestination?: string[] | null;
    /**
     * The rich format description of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#featuredesc.
     */
    featureDescription?: Schema$FeatureDescription[];
    /**
     * The flavor of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#flavor.
     */
    flavor?: string | null;
    /**
     * The format of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#format.
     */
    format?: string | null;
    /**
     * The target gender of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#gender.
     */
    gender?: string | null;
    /**
     * The Global Trade Item Number (GTIN) of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#gtin.
     */
    gtin?: string[] | null;
    /**
     * The image of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#image.
     */
    imageLink?: Schema$Image;
    /**
     * A list of included destinations.
     */
    includedDestination?: string[] | null;
    /**
     * The item group id of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#itemgroupid.
     */
    itemGroupId?: string | null;
    /**
     * The material of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#material.
     */
    material?: string | null;
    /**
     * The Manufacturer Part Number (MPN) of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#mpn.
     */
    mpn?: string | null;
    /**
     * The pattern of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#pattern.
     */
    pattern?: string | null;
    /**
     * The details of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#productdetail.
     */
    productDetail?: Schema$ProductDetail[];
    /**
     * The name of the group of products related to the product. For more information, see https://support.google.com/manufacturers/answer/6124116#productline.
     */
    productLine?: string | null;
    /**
     * The canonical name of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#productname.
     */
    productName?: string | null;
    /**
     * The URL of the detail page of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#productpage.
     */
    productPageUrl?: string | null;
    /**
     * The type or category of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#producttype.
     */
    productType?: string[] | null;
    /**
     * The release date of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#release.
     */
    releaseDate?: string | null;
    /**
     * The scent of the product. For more information, see  https://support.google.com/manufacturers/answer/6124116#scent.
     */
    scent?: string | null;
    /**
     * The size of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#size.
     */
    size?: string | null;
    /**
     * The size system of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#sizesystem.
     */
    sizeSystem?: string | null;
    /**
     * The size type of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#sizetype.
     */
    sizeType?: string | null;
    /**
     * The suggested retail price (MSRP) of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#price.
     */
    suggestedRetailPrice?: Schema$Price;
    /**
     * The target client id. Should only be used in the accounts of the data partners.
     */
    targetClientId?: string | null;
    /**
     * The theme of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#theme.
     */
    theme?: string | null;
    /**
     * The title of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#title.
     */
    title?: string | null;
    /**
     * The videos of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#video.
     */
    videoLink?: string[] | null;
  }
  /**
   * The capacity of a product. For more information, see https://support.google.com/manufacturers/answer/6124116#capacity.
   */
  export interface Schema$Capacity {
    /**
     * The unit of the capacity, i.e., MB, GB, or TB.
     */
    unit?: string | null;
    /**
     * The numeric value of the capacity.
     */
    value?: string | null;
  }
  /**
   * The number of products in a single package. For more information, see https://support.google.com/manufacturers/answer/6124116#count.
   */
  export interface Schema$Count {
    /**
     * The unit in which these products are counted.
     */
    unit?: string | null;
    /**
     * The numeric value of the number of products in a package.
     */
    value?: string | null;
  }
  /**
   * The destination status.
   */
  export interface Schema$DestinationStatus {
    /**
     * The name of the destination.
     */
    destination?: string | null;
    /**
     * The status of the destination.
     */
    status?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:      service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * A feature description of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#featuredesc.
   */
  export interface Schema$FeatureDescription {
    /**
     * A short description of the feature.
     */
    headline?: string | null;
    /**
     * An optional image describing the feature.
     */
    image?: Schema$Image;
    /**
     * A detailed description of the feature.
     */
    text?: string | null;
  }
  /**
   * An image.
   */
  export interface Schema$Image {
    /**
     * The URL of the image. For crawled images, this is the provided URL. For uploaded images, this is a serving URL from Google if the image has been processed successfully.
     */
    imageUrl?: string | null;
    /**
     * The status of the image. @OutputOnly
     */
    status?: string | null;
    /**
     * The type of the image, i.e., crawled or uploaded. @OutputOnly
     */
    type?: string | null;
  }
  /**
   * Product issue.
   */
  export interface Schema$Issue {
    /**
     * If present, the attribute that triggered the issue. For more information about attributes, see https://support.google.com/manufacturers/answer/6124116.
     */
    attribute?: string | null;
    /**
     * Longer description of the issue focused on how to resolve it.
     */
    description?: string | null;
    /**
     * The destination this issue applies to.
     */
    destination?: string | null;
    /**
     * What needs to happen to resolve the issue.
     */
    resolution?: string | null;
    /**
     * The severity of the issue.
     */
    severity?: string | null;
    /**
     * The timestamp when this issue appeared.
     */
    timestamp?: string | null;
    /**
     * Short title describing the nature of the issue.
     */
    title?: string | null;
    /**
     * The server-generated type of the issue, for example, “INCORRECT_TEXT_FORMATTING”, “IMAGE_NOT_SERVEABLE”, etc.
     */
    type?: string | null;
  }
  export interface Schema$ListProductsResponse {
    /**
     * The token for the retrieval of the next page of product statuses.
     */
    nextPageToken?: string | null;
    /**
     * List of the products.
     */
    products?: Schema$Product[];
  }
  /**
   * A price.
   */
  export interface Schema$Price {
    /**
     * The numeric value of the price.
     */
    amount?: string | null;
    /**
     * The currency in which the price is denoted.
     */
    currency?: string | null;
  }
  /**
   * Product data.
   */
  export interface Schema$Product {
    /**
     * Attributes of the product uploaded to the Manufacturer Center. Manually edited attributes are taken into account.
     */
    attributes?: Schema$Attributes;
    /**
     * The content language of the product as a two-letter ISO 639-1 language code (for example, en).
     */
    contentLanguage?: string | null;
    /**
     * The status of the destinations.
     */
    destinationStatuses?: Schema$DestinationStatus[];
    /**
     * A server-generated list of issues associated with the product.
     */
    issues?: Schema$Issue[];
    /**
     * Name in the format `{target_country}:{content_language}:{product_id}`.  `target_country`   - The target country of the product as a CLDR territory                      code (for example, US).  `content_language` - The content language of the product as a two-letter                      ISO 639-1 language code (for example, en).  `product_id`     -   The ID of the product. For more information, see                      https://support.google.com/manufacturers/answer/6124116#id.
     */
    name?: string | null;
    /**
     * Parent ID in the format `accounts/{account_id}`.  `account_id` - The ID of the Manufacturer Center account.
     */
    parent?: string | null;
    /**
     * The ID of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#id.
     */
    productId?: string | null;
    /**
     * The target country of the product as a CLDR territory code (for example, US).
     */
    targetCountry?: string | null;
  }
  /**
   * A product detail of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#productdetail.
   */
  export interface Schema$ProductDetail {
    /**
     * The name of the attribute.
     */
    attributeName?: string | null;
    /**
     * The value of the attribute.
     */
    attributeValue?: string | null;
    /**
     * A short section name that can be reused between multiple product details.
     */
    sectionName?: string | null;
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
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * manufacturers.accounts.products.delete
     * @desc Deletes the product from a Manufacturer Center account.
     * @alias manufacturers.accounts.products.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Name in the format `{target_country}:{content_language}:{product_id}`.  `target_country`   - The target country of the product as a CLDR territory                      code (for example, US).  `content_language` - The content language of the product as a two-letter                      ISO 639-1 language code (for example, en).  `product_id`     -   The ID of the product. For more information, see                      https://support.google.com/manufacturers/answer/6124116#id.
     * @param {string} params.parent Parent ID in the format `accounts/{account_id}`.  `account_id` - The ID of the Manufacturer Center account.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Accounts$Products$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Accounts$Products$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Accounts$Products$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Accounts$Products$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Products$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Products$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://manufacturers.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/products/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['parent', 'name'],
        pathParams: ['name', 'parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * manufacturers.accounts.products.get
     * @desc Gets the product from a Manufacturer Center account, including product issues.  A recently updated product takes around 15 minutes to process. Changes are only visible after it has been processed. While some issues may be available once the product has been processed, other issues may take days to appear.
     * @alias manufacturers.accounts.products.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.include The information to be included in the response. Only sections listed here will be returned.
     * @param {string} params.name Name in the format `{target_country}:{content_language}:{product_id}`.  `target_country`   - The target country of the product as a CLDR territory                      code (for example, US).  `content_language` - The content language of the product as a two-letter                      ISO 639-1 language code (for example, en).  `product_id`     -   The ID of the product. For more information, see                      https://support.google.com/manufacturers/answer/6124116#id.
     * @param {string} params.parent Parent ID in the format `accounts/{account_id}`.  `account_id` - The ID of the Manufacturer Center account.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Accounts$Products$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Product>;
    get(
      params: Params$Resource$Accounts$Products$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Product>,
      callback: BodyResponseCallback<Schema$Product>
    ): void;
    get(
      params: Params$Resource$Accounts$Products$Get,
      callback: BodyResponseCallback<Schema$Product>
    ): void;
    get(callback: BodyResponseCallback<Schema$Product>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Products$Get
        | BodyResponseCallback<Schema$Product>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Product>,
      callback?: BodyResponseCallback<Schema$Product>
    ): void | GaxiosPromise<Schema$Product> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Products$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Products$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://manufacturers.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/products/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent', 'name'],
        pathParams: ['name', 'parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Product>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Product>(parameters);
      }
    }

    /**
     * manufacturers.accounts.products.list
     * @desc Lists all the products in a Manufacturer Center account.
     * @alias manufacturers.accounts.products.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.include The information to be included in the response. Only sections listed here will be returned.
     * @param {integer=} params.pageSize Maximum number of product statuses to return in the response, used for paging.
     * @param {string=} params.pageToken The token returned by the previous request.
     * @param {string} params.parent Parent ID in the format `accounts/{account_id}`.  `account_id` - The ID of the Manufacturer Center account.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Accounts$Products$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListProductsResponse>;
    list(
      params: Params$Resource$Accounts$Products$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListProductsResponse>,
      callback: BodyResponseCallback<Schema$ListProductsResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Products$List,
      callback: BodyResponseCallback<Schema$ListProductsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListProductsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Products$List
        | BodyResponseCallback<Schema$ListProductsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListProductsResponse>,
      callback?: BodyResponseCallback<Schema$ListProductsResponse>
    ): void | GaxiosPromise<Schema$ListProductsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Products$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Products$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://manufacturers.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/products').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListProductsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListProductsResponse>(parameters);
      }
    }

    /**
     * manufacturers.accounts.products.update
     * @desc Inserts or updates the attributes of the product in a Manufacturer Center account.  Creates a product with the provided attributes. If the product already exists, then all attributes are replaced with the new ones. The checks at upload time are minimal. All required attributes need to be present for a product to be valid. Issues may show up later after the API has accepted a new upload for a product and it is possible to overwrite an existing valid product with an invalid product. To detect this, you should retrieve the product and check it for issues once the new version is available.  Uploaded attributes first need to be processed before they can be retrieved. Until then, new products will be unavailable, and retrieval of previously uploaded products will return the original state of the product.
     * @alias manufacturers.accounts.products.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Name in the format `{target_country}:{content_language}:{product_id}`.  `target_country`   - The target country of the product as a CLDR territory                      code (for example, US).  `content_language` - The content language of the product as a two-letter                      ISO 639-1 language code (for example, en).  `product_id`     -   The ID of the product. For more information, see                      https://support.google.com/manufacturers/answer/6124116#id.
     * @param {string} params.parent Parent ID in the format `accounts/{account_id}`.  `account_id` - The ID of the Manufacturer Center account.
     * @param {().Attributes} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Accounts$Products$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    update(
      params: Params$Resource$Accounts$Products$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    update(
      params: Params$Resource$Accounts$Products$Update,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    update(callback: BodyResponseCallback<Schema$Empty>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Accounts$Products$Update
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Products$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Products$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://manufacturers.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/products/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['parent', 'name'],
        pathParams: ['name', 'parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Products$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name in the format `{target_country}:{content_language}:{product_id}`.  `target_country`   - The target country of the product as a CLDR territory                      code (for example, US).  `content_language` - The content language of the product as a two-letter                      ISO 639-1 language code (for example, en).  `product_id`     -   The ID of the product. For more information, see                      https://support.google.com/manufacturers/answer/6124116#id.
     */
    name?: string;
    /**
     * Parent ID in the format `accounts/{account_id}`.  `account_id` - The ID of the Manufacturer Center account.
     */
    parent?: string;
  }
  export interface Params$Resource$Accounts$Products$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The information to be included in the response. Only sections listed here will be returned.
     */
    include?: string[];
    /**
     * Name in the format `{target_country}:{content_language}:{product_id}`.  `target_country`   - The target country of the product as a CLDR territory                      code (for example, US).  `content_language` - The content language of the product as a two-letter                      ISO 639-1 language code (for example, en).  `product_id`     -   The ID of the product. For more information, see                      https://support.google.com/manufacturers/answer/6124116#id.
     */
    name?: string;
    /**
     * Parent ID in the format `accounts/{account_id}`.  `account_id` - The ID of the Manufacturer Center account.
     */
    parent?: string;
  }
  export interface Params$Resource$Accounts$Products$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The information to be included in the response. Only sections listed here will be returned.
     */
    include?: string[];
    /**
     * Maximum number of product statuses to return in the response, used for paging.
     */
    pageSize?: number;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
    /**
     * Parent ID in the format `accounts/{account_id}`.  `account_id` - The ID of the Manufacturer Center account.
     */
    parent?: string;
  }
  export interface Params$Resource$Accounts$Products$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name in the format `{target_country}:{content_language}:{product_id}`.  `target_country`   - The target country of the product as a CLDR territory                      code (for example, US).  `content_language` - The content language of the product as a two-letter                      ISO 639-1 language code (for example, en).  `product_id`     -   The ID of the product. For more information, see                      https://support.google.com/manufacturers/answer/6124116#id.
     */
    name?: string;
    /**
     * Parent ID in the format `accounts/{account_id}`.  `account_id` - The ID of the Manufacturer Center account.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Attributes;
  }
}
