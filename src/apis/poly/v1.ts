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

import {createAPIRequest} from '../../lib/apirequest';

/**
 * Poly API
 *
 * The Poly API provides read-only access to assets hosted on &lt;a
 * href=&quot;https://poly.google.com&quot;&gt;poly.google.com&lt;/a&gt;.
 *
 * @example
 * const google = require('googleapis');
 * const poly = google.poly('v1');
 *
 * @namespace poly
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Poly
 */
function Poly(options) {
  const self = this;
  self._options = options || {};
  self.assets = {
    /**
     * poly.assets.get
     * @desc Returns detailed information about an asset given its name. PRIVATE
     * assets are returned only if  the currently authenticated user (via OAuth
     * token) is the author of the asset.
     * @alias poly.assets.get
     * @memberOf! poly(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. An asset's name in the form `assets/{ASSET_ID}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://poly.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * poly.assets.list
        * @desc Lists all public, remixable assets. These are assets with an
        * access level of PUBLIC and published under the CC-By license.
        * @alias poly.assets.list
        * @memberOf! poly(v1)
        *
        * @param {object} params Parameters for request
        * @param {string=} params.category Filter assets based on the specified category. Supported values are: `animals`, `architecture`, `art`, `food`, `nature`, `objects`, `people`, `scenes`, `technology`, and `transport`.
        * @param {boolean=} params.curated Return only assets that have been curated by the Poly team.
        * @param {string=} params.format Return only assets with the matching format. Acceptable values are: `BLOCKS`, `FBX`, `GLTF`, `GLTF2`, `OBJ`, `TILT`.
        * @param {string=} params.keywords One or more search terms to be matched against all text that Poly has indexed for assets, which includes display_name, description, and tags. Multiple keywords should be separated by spaces.
        * @param {string=} params.maxComplexity Returns assets that are of the specified complexity or less. Defaults to COMPLEX. For example, a request for MEDIUM assets also includes SIMPLE assets.
        * @param {string=} params.orderBy Specifies an ordering for assets. Acceptable values are: `BEST`, `NEWEST`, `OLDEST`. Defaults to `BEST`, which ranks assets based on a combination of popularity and other features.
        * @param {integer=} params.pageSize The maximum number of assets to be returned. This value must be between `1` and `100`. Defaults to `20`.
        * @param {string=} params.pageToken Specifies a continuation token from a previous search whose results were split into multiple pages. To get the next page, submit the same request specifying the value from next_page_token.
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    list(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://poly.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/assets').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }

  };
  self.users = {
    assets: {
      /**
       * poly.users.assets.list
       * @desc Lists assets authored by the given user. Only the value 'me',
       * representing the currently-authenticated user, is supported. May
       * include assets with an access level of PRIVATE or UNLISTED and assets
       * which are All Rights Reserved for the currently-authenticated user.
       * @alias poly.users.assets.list
       * @memberOf! poly(v1)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.format Return only assets with the matching format. Acceptable values are: `BLOCKS`, `FBX`, `GLTF`, `GLTF2`, `OBJ`, and `TILT`.
       * @param {string} params.name A valid user id. Currently, only the special value 'me', representing the currently-authenticated user is supported. To use 'me', you must pass an OAuth token with the request.
       * @param {string=} params.orderBy Specifies an ordering for assets. Acceptable values are: `BEST`, `NEWEST`, `OLDEST`. Defaults to `BEST`, which ranks assets based on a combination of popularity and other features.
       * @param {integer=} params.pageSize The maximum number of assets to be returned. This value must be between `1` and `100`. Defaults to `20`.
       * @param {string=} params.pageToken Specifies a continuation token from a previous search whose results were split into multiple pages. To get the next page, submit the same request specifying the value from next_page_token.
       * @param {string=} params.visibility The visibility of the assets to be returned. Defaults to VISIBILITY_UNSPECIFIED which returns all assets.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://poly.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{name}/assets')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }

    },
    likedassets: {
      /**
       * poly.users.likedassets.list
       * @desc Lists assets that the user has liked. Only the value 'me',
       * representing the currently-authenticated user, is supported. May
       * include assets with an access level of UNLISTED.
       * @alias poly.users.likedassets.list
       * @memberOf! poly(v1)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.format Return only assets with the matching format. Acceptable values are: `BLOCKS`, `FBX`, `GLTF`, `GLTF2`, `OBJ`, `TILT`.
       * @param {string} params.name A valid user id. Currently, only the special value 'me', representing the currently-authenticated user is supported. To use 'me', you must pass an OAuth token with the request.
       * @param {string=} params.orderBy Specifies an ordering for assets. Acceptable values are: `BEST`, `NEWEST`, `OLDEST`, 'LIKED_TIME'. Defaults to `LIKED_TIME`, which ranks assets based on how recently they were liked.
       * @param {integer=} params.pageSize The maximum number of assets to be returned. This value must be between `1` and `100`. Defaults to `20`.
       * @param {string=} params.pageToken Specifies a continuation token from a previous search whose results were split into multiple pages. To get the next page, submit the same request specifying the value from next_page_token.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://poly.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{name}/likedassets')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }

    }
  };
}
/**
 * @typedef Asset
 * @memberOf! poly(v1)
 * @type object
 * @property {string} authorName The author&#39;s publicly visible name. Use this name when giving credit to the author. For more information, see [Licensing](/poly/discover/licensing).
 * @property {string} createTime For published assets, the time when the asset was published. For unpublished assets, the time when the asset was created.
 * @property {string} description The human-readable description, set by the asset&#39;s author.
 * @property {string} displayName The human-readable name, set by the asset&#39;s author.
 * @property {poly(v1).Format[]} formats A list of Formats where each format describes one representation of the asset.
 * @property {boolean} isCurated Whether this asset has been curated by the Poly team.
 * @property {string} license The license under which the author has made the asset available for use, if any.
 * @property {string} name The unique identifier for the asset in the form: `assets/{ASSET_ID}`.
 * @property {poly(v1).PresentationParams} presentationParams Hints for displaying the asset. Note that these parameters are not immutable; the author of an asset may change them post-publication.
 * @property {poly(v1).File} thumbnail The thumbnail image for the asset.
 * @property {string} updateTime The time when the asset was last modified. For published assets, whose contents are immutable, the update time changes only when metadata properties, such as visibility, are updated.
 * @property {string} visibility The visibility of the asset and who can access it.
 */
/**
 * @typedef File
 * @memberOf! poly(v1)
 * @type object
 * @property {string} contentType The MIME content-type, such as `image/png`. For more information, see [MIME types](//developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types).
 * @property {string} relativePath The path of the resource file relative to the root file. For root or thumbnail files, this is just the filename.
 * @property {string} url The URL where the file data can be retrieved.
 */
/**
 * @typedef Format
 * @memberOf! poly(v1)
 * @type object
 * @property {poly(v1).FormatComplexity} formatComplexity Complexity stats about this representation of the asset.
 * @property {string} formatType A short string that identifies the format type of this representation. Possible values are: `FBX`, `GLTF`, `GLTF2`, `OBJ`, and `TILT`.
 * @property {poly(v1).File[]} resources A list of dependencies of the root element. May include, but is not limited to, materials, textures, and shader programs.
 * @property {poly(v1).File} root The root of the file hierarchy. This will always be populated. For some format_types - such as `TILT`, which are self-contained - this is all of the data.  Other types - such as `OBJ` - often reference other data elements. These are contained in the resources field.
 */
/**
 * @typedef FormatComplexity
 * @memberOf! poly(v1)
 * @type object
 * @property {integer} lodHint A non-negative integer that represents the level of detail (LOD) of this format relative to other formats of the same asset with the same format_type. This hint allows you to sort formats from the most-detailed (0) to least-detailed (integers greater than 0).
 * @property {string} triangleCount The estimated number of triangles.
 */
/**
 * @typedef ListAssetsResponse
 * @memberOf! poly(v1)
 * @type object
 * @property {poly(v1).Asset[]} assets A list of assets that match the criteria specified in the request.
 * @property {string} nextPageToken The continuation token for retrieving the next page. If empty, indicates that there are no more pages. To get the next page, submit the same request specifying this value as the page_token.
 * @property {integer} totalSize The total number of assets in the list, without pagination.
 */
/**
 * @typedef ListLikedAssetsResponse
 * @memberOf! poly(v1)
 * @type object
 * @property {poly(v1).Asset[]} assets A list of assets that match the criteria specified in the request.
 * @property {string} nextPageToken The continuation token for retrieving the next page. If empty, indicates that there are no more pages. To get the next page, submit the same request specifying this value as the page_token.
 * @property {integer} totalSize The total number of assets in the list, without pagination.
 */
/**
 * @typedef ListUserAssetsResponse
 * @memberOf! poly(v1)
 * @type object
 * @property {string} nextPageToken The continuation token for retrieving the next page. If empty, indicates that there are no more pages. To get the next page, submit the same request specifying this value as the page_token.
 * @property {integer} totalSize The total number of assets in the list, without pagination.
 * @property {poly(v1).UserAsset[]} userAssets A list of UserAssets matching the request.
 */
/**
 * @typedef PresentationParams
 * @memberOf! poly(v1)
 * @type object
 * @property {string} colorSpace The materials&#39; diffuse/albedo color. This does not apply to vertex colors or texture maps.
 * @property {poly(v1).Quaternion} orientingRotation A rotation that should be applied to the object root to make it upright. More precisely, this quaternion transforms from &quot;object space&quot; (the space in which the object is defined) to &quot;presentation space&quot;, a coordinate system where +Y is up, +X is right, -Z is forward. For example, if the object is the Eiffel Tower, in its local coordinate system the object might be laid out such that the base of the tower is on the YZ plane and the tip of the tower is towards positive X. In this case this quaternion would specify a rotation (of 90 degrees about the Z axis) such that in the presentation space the base of the tower is aligned with the XZ plane, and the tip of the tower lies towards +Y.  This rotation is unrelated to the object&#39;s pose in the web preview, which is just a camera position setting and is *not* reflected in this rotation.  Please note: this is applicable only to the gLTF.
 */
/**
 * @typedef Quaternion
 * @memberOf! poly(v1)
 * @type object
 * @property {number} w The scalar component.
 * @property {number} x The x component.
 * @property {number} y The y component.
 * @property {number} z The z component.
 */
/**
 * @typedef UserAsset
 * @memberOf! poly(v1)
 * @type object
 * @property {poly(v1).Asset} asset An Asset.
 */

export = Poly;
