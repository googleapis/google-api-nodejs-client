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
 * Manufacturer Center API
 *
 * Public API for managing Manufacturer Center related data.
 *
 * @example
 * const google = require('googleapis');
 * const manufacturers = google.manufacturers('v1');
 *
 * @namespace manufacturers
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Manufacturers
 */
export class Manufacturers {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  accounts: Resource$Accounts;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;
    this.getRoot.bind(this);

    this.accounts = new Resource$Accounts(this);
  }

  getRoot() {
    return this.root;
  }
}

/**
 * Attributes of the product. For more information, see
 * https://support.google.com/manufacturers/answer/6124116.
 */
export interface Schema$Attributes {
  /**
   * The additional images of the product. For more information, see
   * https://support.google.com/manufacturers/answer/6124116#addlimage.
   */
  additionalImageLink: Schema$Image[];
  /**
   * The target age group of the product. For more information, see
   * https://support.google.com/manufacturers/answer/6124116#agegroup.
   */
  ageGroup: string;
  /**
   * The brand name of the product. For more information, see
   * https://support.google.com/manufacturers/answer/6124116#brand.
   */
  brand: string;
  /**
   * The capacity of the product. For more information, see
   * https://support.google.com/manufacturers/answer/6124116#capacity.
   */
  capacity: Schema$Capacity;
  /**
   * The color of the product. For more information, see
   * https://support.google.com/manufacturers/answer/6124116#color.
   */
  color: string;
  /**
   * The count of the product. For more information, see
   * https://support.google.com/manufacturers/answer/6124116#count.
   */
  count: Schema$Count;
  /**
   * The description of the product. For more information, see
   * https://support.google.com/manufacturers/answer/6124116#description.
   */
  description: string;
  /**
   * The disclosure date of the product. For more information, see
   * https://support.google.com/manufacturers/answer/6124116#disclosure.
   */
  disclosureDate: string;
  /**
   * A list of excluded destinations.
   */
  excludedDestination: string[];
  /**
   * The rich format description of the product. For more information, see
   * https://support.google.com/manufacturers/answer/6124116#featuredesc.
   */
  featureDescription: Schema$FeatureDescription[];
  /**
   * The flavor of the product. For more information, see
   * https://support.google.com/manufacturers/answer/6124116#flavor.
   */
  flavor: string;
  /**
   * The format of the product. For more information, see
   * https://support.google.com/manufacturers/answer/6124116#format.
   */
  format: string;
  /**
   * The target gender of the product. For more information, see
   * https://support.google.com/manufacturers/answer/6124116#gender.
   */
  gender: string;
  /**
   * The Global Trade Item Number (GTIN) of the product. For more information,
   * see https://support.google.com/manufacturers/answer/6124116#gtin.
   */
  gtin: string[];
  /**
   * The image of the product. For more information, see
   * https://support.google.com/manufacturers/answer/6124116#image.
   */
  imageLink: Schema$Image;
  /**
   * A list of included destinations.
   */
  includedDestination: string[];
  /**
   * The item group id of the product. For more information, see
   * https://support.google.com/manufacturers/answer/6124116#itemgroupid.
   */
  itemGroupId: string;
  /**
   * The material of the product. For more information, see
   * https://support.google.com/manufacturers/answer/6124116#material.
   */
  material: string;
  /**
   * The Manufacturer Part Number (MPN) of the product. For more information,
   * see https://support.google.com/manufacturers/answer/6124116#mpn.
   */
  mpn: string;
  /**
   * The pattern of the product. For more information, see
   * https://support.google.com/manufacturers/answer/6124116#pattern.
   */
  pattern: string;
  /**
   * The details of the product. For more information, see
   * https://support.google.com/manufacturers/answer/6124116#productdetail.
   */
  productDetail: Schema$ProductDetail[];
  /**
   * The name of the group of products related to the product. For more
   * information, see
   * https://support.google.com/manufacturers/answer/6124116#productline.
   */
  productLine: string;
  /**
   * The canonical name of the product. For more information, see
   * https://support.google.com/manufacturers/answer/6124116#productname.
   */
  productName: string;
  /**
   * The URL of the detail page of the product. For more information, see
   * https://support.google.com/manufacturers/answer/6124116#productpage.
   */
  productPageUrl: string;
  /**
   * The type or category of the product. For more information, see
   * https://support.google.com/manufacturers/answer/6124116#producttype.
   */
  productType: string[];
  /**
   * The release date of the product. For more information, see
   * https://support.google.com/manufacturers/answer/6124116#release.
   */
  releaseDate: string;
  /**
   * The scent of the product. For more information, see
   * https://support.google.com/manufacturers/answer/6124116#scent.
   */
  scent: string;
  /**
   * The size of the product. For more information, see
   * https://support.google.com/manufacturers/answer/6124116#size.
   */
  size: string;
  /**
   * The size system of the product. For more information, see
   * https://support.google.com/manufacturers/answer/6124116#sizesystem.
   */
  sizeSystem: string;
  /**
   * The size type of the product. For more information, see
   * https://support.google.com/manufacturers/answer/6124116#sizetype.
   */
  sizeType: string;
  /**
   * The suggested retail price (MSRP) of the product. For more information, see
   * https://support.google.com/manufacturers/answer/6124116#price.
   */
  suggestedRetailPrice: Schema$Price;
  /**
   * The target client id. Should only be used in the accounts of the data
   * partners.
   */
  targetClientId: string;
  /**
   * The theme of the product. For more information, see
   * https://support.google.com/manufacturers/answer/6124116#theme.
   */
  theme: string;
  /**
   * The title of the product. For more information, see
   * https://support.google.com/manufacturers/answer/6124116#title.
   */
  title: string;
  /**
   * The videos of the product. For more information, see
   * https://support.google.com/manufacturers/answer/6124116#video.
   */
  videoLink: string[];
}
/**
 * The capacity of a product. For more information, see
 * https://support.google.com/manufacturers/answer/6124116#capacity.
 */
export interface Schema$Capacity {
  /**
   * The unit of the capacity, i.e., MB, GB, or TB.
   */
  unit: string;
  /**
   * The numeric value of the capacity.
   */
  value: string;
}
/**
 * The number of products in a single package. For more information, see
 * https://support.google.com/manufacturers/answer/6124116#count.
 */
export interface Schema$Count {
  /**
   * The unit in which these products are counted.
   */
  unit: string;
  /**
   * The numeric value of the number of products in a package.
   */
  value: string;
}
/**
 * The destination status.
 */
export interface Schema$DestinationStatus {
  /**
   * The name of the destination.
   */
  destination: string;
  /**
   * The status of the destination.
   */
  status: string;
}
/**
 * A generic empty message that you can re-use to avoid defining duplicated
 * empty messages in your APIs. A typical example is to use it as the request or
 * the response type of an API method. For instance:      service Foo { rpc
 * Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON
 * representation for `Empty` is empty JSON object `{}`.
 */
export interface Schema$Empty {}
/**
 * A feature description of the product. For more information, see
 * https://support.google.com/manufacturers/answer/6124116#featuredesc.
 */
export interface Schema$FeatureDescription {
  /**
   * A short description of the feature.
   */
  headline: string;
  /**
   * An optional image describing the feature.
   */
  image: Schema$Image;
  /**
   * A detailed description of the feature.
   */
  text: string;
}
/**
 * An image.
 */
export interface Schema$Image {
  /**
   * The URL of the image. For crawled images, this is the provided URL. For
   * uploaded images, this is a serving URL from Google if the image has been
   * processed successfully.
   */
  imageUrl: string;
  /**
   * The status of the image. @OutputOnly
   */
  status: string;
  /**
   * The type of the image, i.e., crawled or uploaded. @OutputOnly
   */
  type: string;
}
/**
 * Product issue.
 */
export interface Schema$Issue {
  /**
   * If present, the attribute that triggered the issue. For more information
   * about attributes, see
   * https://support.google.com/manufacturers/answer/6124116.
   */
  attribute: string;
  /**
   * Longer description of the issue focused on how to resolve it.
   */
  description: string;
  /**
   * The destination this issue applies to.
   */
  destination: string;
  /**
   * What needs to happen to resolve the issue.
   */
  resolution: string;
  /**
   * The severity of the issue.
   */
  severity: string;
  /**
   * The timestamp when this issue appeared.
   */
  timestamp: string;
  /**
   * Short title describing the nature of the issue.
   */
  title: string;
  /**
   * The server-generated type of the issue, for example,
   * “INCORRECT_TEXT_FORMATTING”, “IMAGE_NOT_SERVEABLE”, etc.
   */
  type: string;
}
export interface Schema$ListProductsResponse {
  /**
   * The token for the retrieval of the next page of product statuses.
   */
  nextPageToken: string;
  /**
   * List of the products.
   */
  products: Schema$Product[];
}
/**
 * A price.
 */
export interface Schema$Price {
  /**
   * The numeric value of the price.
   */
  amount: string;
  /**
   * The currency in which the price is denoted.
   */
  currency: string;
}
/**
 * Product data.
 */
export interface Schema$Product {
  /**
   * Attributes of the product uploaded to the Manufacturer Center.
   */
  attributes: Schema$Attributes;
  /**
   * The content language of the product as a two-letter ISO 639-1 language code
   * (for example, en).
   */
  contentLanguage: string;
  /**
   * The status of the destinations.
   */
  destinationStatuses: Schema$DestinationStatus[];
  /**
   * Final attributes of the product. The final attributes are obtained by
   * overriding the uploaded attributes with the manually provided and deleted
   * attributes. Google systems only process, evaluate, review, and/or use final
   * attributes.  This field is deprecated and will be removed end of July 2018.
   * Please use attributes.
   */
  finalAttributes: Schema$Attributes;
  /**
   * A server-generated list of issues associated with the product.
   */
  issues: Schema$Issue[];
  /**
   * Names of the attributes of the product deleted manually via the
   * Manufacturer Center UI.  This field is deprecated and will be removed end
   * of July 2018. Please use attributes.
   */
  manuallyDeletedAttributes: string[];
  /**
   * Attributes of the product provided manually via the Manufacturer Center UI.
   * This field is deprecated and will be removed end of July 2018. Please use
   * attributes.
   */
  manuallyProvidedAttributes: Schema$Attributes;
  /**
   * Name in the format `{target_country}:{content_language}:{product_id}`.
   * `target_country`   - The target country of the product as a CLDR territory
   * code (for example, US).  `content_language` - The content language of the
   * product as a two-letter                      ISO 639-1 language code (for
   * example, en).  `product_id`     -   The ID of the product. For more
   * information, see
   * https://support.google.com/manufacturers/answer/6124116#id.
   */
  name: string;
  /**
   * Parent ID in the format `accounts/{account_id}`.  `account_id` - The ID of
   * the Manufacturer Center account.
   */
  parent: string;
  /**
   * The ID of the product. For more information, see
   * https://support.google.com/manufacturers/answer/6124116#id.
   */
  productId: string;
  /**
   * The target country of the product as a CLDR territory code (for example,
   * US).
   */
  targetCountry: string;
  /**
   * Attributes of the product uploaded via the Manufacturer Center API or via
   * feeds.  This field is deprecated and will be removed end of July 2018.
   * Please use attributes.
   */
  uploadedAttributes: Schema$Attributes;
}
/**
 * A product detail of the product. For more information, see
 * https://support.google.com/manufacturers/answer/6124116#productdetail.
 */
export interface Schema$ProductDetail {
  /**
   * The name of the attribute.
   */
  attributeName: string;
  /**
   * The value of the attribute.
   */
  attributeValue: string;
  /**
   * A short section name that can be reused between multiple product details.
   */
  sectionName: string;
}

export class Resource$Accounts {
  root: Manufacturers;
  products: Resource$Accounts$Products;
  constructor(root: Manufacturers) {
    this.root = root;
    this.getRoot.bind(this);
    this.products = new Resource$Accounts$Products(root);
  }

  getRoot() {
    return this.root;
  }
}
export class Resource$Accounts$Products {
  root: Manufacturers;
  constructor(root: Manufacturers) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
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
  delete(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>):
      void|AxiosPromise<Schema$Empty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://manufacturers.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/products/{+name}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['parent', 'name'],
      pathParams: ['name', 'parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Empty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Empty>(parameters);
    }
  }


  /**
   * manufacturers.accounts.products.get
   * @desc Gets the product from a Manufacturer Center account, including
   * product issues.  A recently updated product takes around 15 minutes to
   * process. Changes are only visible after it has been processed. While some
   * issues may be available once the product has been processed, other issues
   * may take days to appear.
   * @alias manufacturers.accounts.products.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.include The information to be included in the response. Only sections listed here will be returned.  If this parameter is not specified, ATTRIBUTES and ISSUES are returned. This behavior is temporary and will be removed once all clients are ready or at the latest end of July 2018. After that no sections will be returned.
   * @param {string} params.name Name in the format `{target_country}:{content_language}:{product_id}`.  `target_country`   - The target country of the product as a CLDR territory                      code (for example, US).  `content_language` - The content language of the product as a two-letter                      ISO 639-1 language code (for example, en).  `product_id`     -   The ID of the product. For more information, see                      https://support.google.com/manufacturers/answer/6124116#id.
   * @param {string} params.parent Parent ID in the format `accounts/{account_id}`.  `account_id` - The ID of the Manufacturer Center account.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Product>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Product>,
      callback?: BodyResponseCallback<Schema$Product>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Product>,
      callback?: BodyResponseCallback<Schema$Product>):
      void|AxiosPromise<Schema$Product> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://manufacturers.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/products/{+name}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['parent', 'name'],
      pathParams: ['name', 'parent'],
      context: this.getRoot()
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
   * @param {string=} params.include The information to be included in the response. Only sections listed here will be returned.  If this parameter is not specified, ATTRIBUTES and ISSUES are returned. This behavior is temporary and will be removed once all clients are ready or at the latest end of July 2018. After that no sections will be returned.
   * @param {integer=} params.pageSize Maximum number of product statuses to return in the response, used for paging.
   * @param {string=} params.pageToken The token returned by the previous request.
   * @param {string} params.parent Parent ID in the format `accounts/{account_id}`.  `account_id` - The ID of the Manufacturer Center account.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListProductsResponse>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListProductsResponse>,
      callback?: BodyResponseCallback<Schema$ListProductsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListProductsResponse>,
      callback?: BodyResponseCallback<Schema$ListProductsResponse>):
      void|AxiosPromise<Schema$ListProductsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://manufacturers.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/products')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListProductsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListProductsResponse>(parameters);
    }
  }


  /**
   * manufacturers.accounts.products.update
   * @desc Inserts or updates the attributes of the product in a Manufacturer
   * Center account.  Creates a product with the provided attributes. If the
   * product already exists, then all attributes are replaced with the new ones.
   * The checks at upload time are minimal. All required attributes need to be
   * present for a product to be valid. Issues may show up later after the API
   * has accepted a new upload for a product and it is possible to overwrite an
   * existing valid product with an invalid product. To detect this, you should
   * retrieve the product and check it for issues once the new version is
   * available.  Uploaded attributes first need to be processed before they can
   * be retrieved. Until then, new products will be unavailable, and retrieval
   * of previously uploaded products will return the original state of the
   * product.
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
  update(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
  update(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>): void;
  update(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>):
      void|AxiosPromise<Schema$Empty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://manufacturers.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/products/{+name}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['parent', 'name'],
      pathParams: ['name', 'parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Empty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Empty>(parameters);
    }
  }
}
