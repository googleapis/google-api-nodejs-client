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

/* jshint maxlen: false */

import {
  createAPIRequest
} from '../../lib/apirequest';

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
function Manufacturers(options) { // eslint-disable-line
  const self = this;
  self._options = options || {};

  self.accounts = {
    products: {

      /**
       * manufacturers.accounts.products.delete
       *
       * @desc Deletes the product from a Manufacturer Center account.
       *
       * @alias manufacturers.accounts.products.delete
       * @memberOf! manufacturers(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name Name in the format `{target_country}:{content_language}:{product_id}`.  `target_country`   - The target country of the product as a CLDR territory                      code (for example, US).  `content_language` - The content language of the product as a two-letter                      ISO 639-1 language code (for example, en).  `product_id`     -   The ID of the product. For more information, see                      https://support.google.com/manufacturers/answer/6124116#id.
       * @param {string} params.parent Parent ID in the format `accounts/{account_id}`.  `account_id` - The ID of the Manufacturer Center account.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      delete: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://manufacturers.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{parent}/products/{name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          }, options),
          params: params,
          requiredParams: ['parent', 'name'],
          pathParams: ['name', 'parent'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * manufacturers.accounts.products.get
       *
       * @desc Gets the product from a Manufacturer Center account, including product issues.  A recently updated product takes around 15 minutes to process. Changes are only visible after it has been processed. While some issues may be available once the product has been processed, other issues may take days to appear.
       *
       * @alias manufacturers.accounts.products.get
       * @memberOf! manufacturers(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name Name in the format `{target_country}:{content_language}:{product_id}`.  `target_country`   - The target country of the product as a CLDR territory                      code (for example, US).  `content_language` - The content language of the product as a two-letter                      ISO 639-1 language code (for example, en).  `product_id`     -   The ID of the product. For more information, see                      https://support.google.com/manufacturers/answer/6124116#id.
       * @param {string} params.parent Parent ID in the format `accounts/{account_id}`.  `account_id` - The ID of the Manufacturer Center account.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      get: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://manufacturers.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{parent}/products/{name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['parent', 'name'],
          pathParams: ['name', 'parent'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * manufacturers.accounts.products.list
       *
       * @desc Lists all the products in a Manufacturer Center account.
       *
       * @alias manufacturers.accounts.products.list
       * @memberOf! manufacturers(v1)
       *
       * @param {object} params Parameters for request
       * @param {integer=} params.pageSize Maximum number of product statuses to return in the response, used for paging.
       * @param {string=} params.pageToken The token returned by the previous request.
       * @param {string} params.parent Parent ID in the format `accounts/{account_id}`.  `account_id` - The ID of the Manufacturer Center account.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://manufacturers.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{parent}/products').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * manufacturers.accounts.products.update
       *
       * @desc Inserts or updates the product in a Manufacturer Center account.  The checks at upload time are minimal. All required attributes need to be present for a product to be valid. Issues may show up later after the API has accepted an update for a product and it is possible to overwrite an existing valid product with an invalid product. To detect this, you should retrieve the product and check it for issues once the updated version is available.  Inserted or updated products first need to be processed before they can be retrieved. Until then, new products will be unavailable, and retrieval of updated products will return the original state of the product.
       *
       * @alias manufacturers.accounts.products.update
       * @memberOf! manufacturers(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name Name in the format `{target_country}:{content_language}:{product_id}`.  `target_country`   - The target country of the product as a CLDR territory                      code (for example, US).  `content_language` - The content language of the product as a two-letter                      ISO 639-1 language code (for example, en).  `product_id`     -   The ID of the product. For more information, see                      https://support.google.com/manufacturers/answer/6124116#id.
       * @param {string} params.parent Parent ID in the format `accounts/{account_id}`.  `account_id` - The ID of the Manufacturer Center account.
       * @param {manufacturers(v1).Product} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      update: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://manufacturers.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{parent}/products/{name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          }, options),
          params: params,
          requiredParams: ['parent', 'name'],
          pathParams: ['name', 'parent'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };
}

/**
 * @typedef Attributes
 * @memberOf! manufacturers(v1)
 * @type object
* @property {manufacturers(v1).Image[]} additionalImageLink The additional images of the product. For more information, see
https://support.google.com/manufacturers/answer/6124116#addlimage.
* @property {string} ageGroup The target age group of the product. For more information, see
https://support.google.com/manufacturers/answer/6124116#agegroup.
* @property {string} brand The brand name of the product. For more information, see
https://support.google.com/manufacturers/answer/6124116#brand.
* @property {manufacturers(v1).Capacity} capacity The capacity of the product. For more information, see
https://support.google.com/manufacturers/answer/6124116#capacity.
* @property {string} color The color of the product. For more information, see
https://support.google.com/manufacturers/answer/6124116#color.
* @property {manufacturers(v1).Count} count The count of the product. For more information, see
https://support.google.com/manufacturers/answer/6124116#count.
* @property {string} description The description of the product. For more information, see
https://support.google.com/manufacturers/answer/6124116#description.
* @property {string} disclosureDate The disclosure date of the product. For more information, see
https://support.google.com/manufacturers/answer/6124116#disclosure.
* @property {manufacturers(v1).FeatureDescription[]} featureDescription The rich format description of the product. For more information, see
https://support.google.com/manufacturers/answer/6124116#featuredesc.
* @property {string} flavor The flavor of the product. For more information, see
https://support.google.com/manufacturers/answer/6124116#flavor.
* @property {string} format The format of the product. For more information, see
https://support.google.com/manufacturers/answer/6124116#format.
* @property {string} gender The target gender of the product. For more information, see
https://support.google.com/manufacturers/answer/6124116#gender.
* @property {string[]} gtin The Global Trade Item Number (GTIN) of the product. For more information,
see https://support.google.com/manufacturers/answer/6124116#gtin.
* @property {manufacturers(v1).Image} imageLink The image of the product. For more information, see
https://support.google.com/manufacturers/answer/6124116#image.
* @property {string} itemGroupId The item group id of the product. For more information, see
https://support.google.com/manufacturers/answer/6124116#itemgroupid.
* @property {string} material The material of the product. For more information, see
https://support.google.com/manufacturers/answer/6124116#material.
* @property {string} mpn The Manufacturer Part Number (MPN) of the product. For more information,
see https://support.google.com/manufacturers/answer/6124116#mpn.
* @property {string} pattern The pattern of the product. For more information, see
https://support.google.com/manufacturers/answer/6124116#pattern.
* @property {manufacturers(v1).ProductDetail[]} productDetail The details of the product. For more information, see
https://support.google.com/manufacturers/answer/6124116#productdetail.
* @property {string} productLine The name of the group of products related to the product. For more
information, see
https://support.google.com/manufacturers/answer/6124116#productline.
* @property {string} productName The canonical name of the product. For more information, see
https://support.google.com/manufacturers/answer/6124116#productname.
* @property {string} productPageUrl The URL of the detail page of the product. For more information, see
https://support.google.com/manufacturers/answer/6124116#productpage.
* @property {string[]} productType The type or category of the product. For more information, see
https://support.google.com/manufacturers/answer/6124116#producttype.
* @property {string} releaseDate The release date of the product. For more information, see
https://support.google.com/manufacturers/answer/6124116#release.
* @property {string} scent The scent of the product. For more information, see
 https://support.google.com/manufacturers/answer/6124116#scent.
* @property {string} size The size of the product. For more information, see
https://support.google.com/manufacturers/answer/6124116#size.
* @property {string} sizeSystem The size system of the product. For more information, see
https://support.google.com/manufacturers/answer/6124116#sizesystem.
* @property {string} sizeType The size type of the product. For more information, see
https://support.google.com/manufacturers/answer/6124116#sizetype.
* @property {manufacturers(v1).Price} suggestedRetailPrice The suggested retail price (MSRP) of the product. For more information,
see https://support.google.com/manufacturers/answer/6124116#price.
* @property {string} targetClientId The target client id. Should only be used in the accounts of the data
partners.
* @property {string} theme The theme of the product. For more information, see
https://support.google.com/manufacturers/answer/6124116#theme.
* @property {string} title The title of the product. For more information, see
https://support.google.com/manufacturers/answer/6124116#title.
* @property {string[]} videoLink The videos of the product. For more information, see
https://support.google.com/manufacturers/answer/6124116#video.
*/

/**
 * @typedef Capacity
 * @memberOf! manufacturers(v1)
 * @type object
 * @property {string} unit The unit of the capacity, i.e., MB, GB, or TB.
 * @property {string} value The numeric value of the capacity.
 */

/**
 * @typedef Count
 * @memberOf! manufacturers(v1)
 * @type object
 * @property {string} unit The unit in which these products are counted.
 * @property {string} value The numeric value of the number of products in a package.
 */

/**
 * @typedef Empty
 * @memberOf! manufacturers(v1)
 * @type object
 */

/**
 * @typedef FeatureDescription
 * @memberOf! manufacturers(v1)
 * @type object
 * @property {string} headline A short description of the feature.
 * @property {manufacturers(v1).Image} image An optional image describing the feature.
 * @property {string} text A detailed description of the feature.
 */

/**
 * @typedef Image
 * @memberOf! manufacturers(v1)
 * @type object
* @property {string} imageUrl The URL of the image. For crawled images, this is the provided URL. For
uploaded images, this is a serving URL from Google if the image has been
processed successfully.
* @property {string} status The status of the image.
@OutputOnly
* @property {string} type The type of the image, i.e., crawled or uploaded.
@OutputOnly
*/

/**
 * @typedef Issue
 * @memberOf! manufacturers(v1)
 * @type object
* @property {string} attribute If present, the attribute that triggered the issue. For more information
about attributes, see
https://support.google.com/manufacturers/answer/6124116.
* @property {string} description Description of the issue.
* @property {string} severity The severity of the issue.
* @property {string} timestamp The timestamp when this issue appeared.
* @property {string} type The server-generated type of the issue, for example,
“INCORRECT_TEXT_FORMATTING”, “IMAGE_NOT_SERVEABLE”, etc.
*/

/**
 * @typedef ListProductsResponse
 * @memberOf! manufacturers(v1)
 * @type object
 * @property {string} nextPageToken The token for the retrieval of the next page of product statuses.
 * @property {manufacturers(v1).Product[]} products List of the products.
 */

/**
 * @typedef Price
 * @memberOf! manufacturers(v1)
 * @type object
 * @property {string} amount The numeric value of the price.
 * @property {string} currency The currency in which the price is denoted.
 */

/**
 * @typedef Product
 * @memberOf! manufacturers(v1)
 * @type object
* @property {string} contentLanguage The content language of the product as a two-letter ISO 639-1 language code
(for example, en).
@OutputOnly
* @property {manufacturers(v1).Attributes} finalAttributes Final attributes of the product. The final attributes are obtained by
overriding the uploaded attributes with the manually provided and deleted
attributes. Google systems only process, evaluate, review, and/or use final
attributes.
@OutputOnly
* @property {manufacturers(v1).Issue[]} issues A server-generated list of issues associated with the product.
@OutputOnly
* @property {string[]} manuallyDeletedAttributes Names of the attributes of the product deleted manually via the
Manufacturer Center UI.
@OutputOnly
* @property {manufacturers(v1).Attributes} manuallyProvidedAttributes Attributes of the product provided manually via the Manufacturer Center UI.
@OutputOnly
* @property {string} name Name in the format `{target_country}:{content_language}:{product_id}`.

`target_country`   - The target country of the product as a CLDR territory
                     code (for example, US).

`content_language` - The content language of the product as a two-letter
                     ISO 639-1 language code (for example, en).

`product_id`     -   The ID of the product. For more information, see
                     https://support.google.com/manufacturers/answer/6124116#id.
@OutputOnly
* @property {string} parent Parent ID in the format `accounts/{account_id}`.

`account_id` - The ID of the Manufacturer Center account.
@OutputOnly
* @property {string} productId The ID of the product. For more information, see
https://support.google.com/manufacturers/answer/6124116#id.
@OutputOnly
* @property {string} targetCountry The target country of the product as a CLDR territory code (for example,
US).
@OutputOnly
* @property {manufacturers(v1).Attributes} uploadedAttributes Attributes of the product uploaded via the Manufacturer Center API or via
feeds.
*/

/**
 * @typedef ProductDetail
 * @memberOf! manufacturers(v1)
 * @type object
 * @property {string} attributeName The name of the attribute.
 * @property {string} attributeValue The value of the attribute.
 * @property {string} sectionName A short section name that can be reused between multiple product details.
 */
export = Manufacturers;
