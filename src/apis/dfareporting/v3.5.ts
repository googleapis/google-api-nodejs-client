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

export namespace dfareporting_v3_5 {
  export interface Options extends GlobalOptions {
    version: 'v3.5';
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
   * Campaign Manager 360 API
   *
   * Build applications to efficiently manage large or complex trafficking, reporting, and attribution workflows for Campaign Manager 360.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const dfareporting = google.dfareporting('v3.5');
   * ```
   */
  export class Dfareporting {
    context: APIRequestContext;
    media: Resource$Media;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.media = new Resource$Media(this.context);
    }
  }

  /**
   * Creative Click Tag.
   */
  export interface Schema$ClickTag {
    /**
     * Parameter value for the specified click tag. This field contains a click-through url.
     */
    clickThroughUrl?: Schema$CreativeClickThroughUrl;
    /**
     * Advertiser event name associated with the click tag. This field is used by DISPLAY_IMAGE_GALLERY and HTML5_BANNER creatives. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.
     */
    eventName?: string | null;
    /**
     * Parameter name for the specified click tag. For DISPLAY_IMAGE_GALLERY creative assets, this field must match the value of the creative asset's creativeAssetId.name field.
     */
    name?: string | null;
  }
  /**
   * Creative Asset ID.
   */
  export interface Schema$CreativeAssetId {
    /**
     * Name of the creative asset. This is a required field while inserting an asset. After insertion, this assetIdentifier is used to identify the uploaded asset. Characters in the name must be alphanumeric or one of the following: ".-_ ". Spaces are allowed.
     */
    name?: string | null;
    /**
     * Type of asset to upload. This is a required field. FLASH and IMAGE are no longer supported for new uploads. All image assets should use HTML_IMAGE.
     */
    type?: string | null;
  }
  /**
   * CreativeAssets contains properties of a creative asset file which will be uploaded or has already been uploaded. Refer to the creative sample code for how to upload assets and insert a creative.
   */
  export interface Schema$CreativeAssetMetadata {
    /**
     * ID of the creative asset. This is a required field.
     */
    assetIdentifier?: Schema$CreativeAssetId;
    /**
     * List of detected click tags for assets. This is a read-only, auto-generated field. This field is empty for a rich media asset.
     */
    clickTags?: Schema$ClickTag[];
    /**
     * List of counter events configured for the asset. This is a read-only, auto-generated field and only applicable to a rich media asset.
     */
    counterCustomEvents?: Schema$CreativeCustomEvent[];
    /**
     * List of feature dependencies for the creative asset that are detected by Campaign Manager. Feature dependencies are features that a browser must be able to support in order to render your HTML5 creative correctly. This is a read-only, auto-generated field.
     */
    detectedFeatures?: string[] | null;
    /**
     * List of exit events configured for the asset. This is a read-only, auto-generated field and only applicable to a rich media asset.
     */
    exitCustomEvents?: Schema$CreativeCustomEvent[];
    /**
     * Numeric ID of the asset. This is a read-only, auto-generated field.
     */
    id?: string | null;
    /**
     * Dimension value for the numeric ID of the asset. This is a read-only, auto-generated field.
     */
    idDimensionValue?: Schema$DimensionValue;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeAssetMetadata".
     */
    kind?: string | null;
    /**
     * True if the uploaded asset is a rich media asset. This is a read-only, auto-generated field.
     */
    richMedia?: boolean | null;
    /**
     * List of timer events configured for the asset. This is a read-only, auto-generated field and only applicable to a rich media asset.
     */
    timerCustomEvents?: Schema$CreativeCustomEvent[];
    /**
     * Rules validated during code generation that generated a warning. This is a read-only, auto-generated field. Possible values are: - "ADMOB_REFERENCED" - "ASSET_FORMAT_UNSUPPORTED_DCM" - "ASSET_INVALID" - "CLICK_TAG_HARD_CODED" - "CLICK_TAG_INVALID" - "CLICK_TAG_IN_GWD" - "CLICK_TAG_MISSING" - "CLICK_TAG_MORE_THAN_ONE" - "CLICK_TAG_NON_TOP_LEVEL" - "COMPONENT_UNSUPPORTED_DCM" - "ENABLER_UNSUPPORTED_METHOD_DCM" - "EXTERNAL_FILE_REFERENCED" - "FILE_DETAIL_EMPTY" - "FILE_TYPE_INVALID" - "GWD_PROPERTIES_INVALID" - "HTML5_FEATURE_UNSUPPORTED" - "LINKED_FILE_NOT_FOUND" - "MAX_FLASH_VERSION_11" - "MRAID_REFERENCED" - "NOT_SSL_COMPLIANT" - "ORPHANED_ASSET" - "PRIMARY_HTML_MISSING" - "SVG_INVALID" - "ZIP_INVALID"
     */
    warnedValidationRules?: string[] | null;
  }
  /**
   * Click-through URL
   */
  export interface Schema$CreativeClickThroughUrl {
    /**
     * Read-only convenience field representing the actual URL that will be used for this click-through. The URL is computed as follows: - If landingPageId is specified then that landing page's URL is assigned to this field. - Otherwise, the customClickThroughUrl is assigned to this field.
     */
    computedClickThroughUrl?: string | null;
    /**
     * Custom click-through URL. Applicable if the landingPageId field is left unset.
     */
    customClickThroughUrl?: string | null;
    /**
     * ID of the landing page for the click-through URL.
     */
    landingPageId?: string | null;
  }
  /**
   * Creative Custom Event.
   */
  export interface Schema$CreativeCustomEvent {
    /**
     * Unique ID of this event used by Reporting and Data Transfer. This is a read-only field.
     */
    advertiserCustomEventId?: string | null;
    /**
     * User-entered name for the event.
     */
    advertiserCustomEventName?: string | null;
    /**
     * Type of the event. This is a read-only field.
     */
    advertiserCustomEventType?: string | null;
    /**
     * Artwork label column, used to link events in Campaign Manager back to events in Studio. This is a required field and should not be modified after insertion.
     */
    artworkLabel?: string | null;
    /**
     * Artwork type used by the creative.This is a read-only field.
     */
    artworkType?: string | null;
    /**
     * Exit click-through URL for the event. This field is used only for exit events.
     */
    exitClickThroughUrl?: Schema$CreativeClickThroughUrl;
    /**
     * ID of this event. This is a required field and should not be modified after insertion.
     */
    id?: string | null;
    /**
     * Properties for rich media popup windows. This field is used only for exit events.
     */
    popupWindowProperties?: Schema$PopupWindowProperties;
    /**
     * Target type used by the event.
     */
    targetType?: string | null;
    /**
     * Video reporting ID, used to differentiate multiple videos in a single creative. This is a read-only field.
     */
    videoReportingId?: string | null;
  }
  /**
   * Represents a DimensionValue resource.
   */
  export interface Schema$DimensionValue {
    /**
     * The name of the dimension.
     */
    dimensionName?: string | null;
    /**
     * The eTag of this response for caching purposes.
     */
    etag?: string | null;
    /**
     * The ID associated with the value if available.
     */
    id?: string | null;
    /**
     * The kind of resource this is, in this case dfareporting#dimensionValue.
     */
    kind?: string | null;
    /**
     * Determines how the 'value' field is matched when filtering. If not specified, defaults to EXACT. If set to WILDCARD_EXPRESSION, '*' is allowed as a placeholder for variable length character sequences, and it can be escaped with a backslash. Note, only paid search dimensions ('dfa:paidSearch*') allow a matchType other than EXACT.
     */
    matchType?: string | null;
    /**
     * The value of the dimension.
     */
    value?: string | null;
  }
  /**
   * Offset Position.
   */
  export interface Schema$OffsetPosition {
    /**
     * Offset distance from left side of an asset or a window.
     */
    left?: number | null;
    /**
     * Offset distance from top side of an asset or a window.
     */
    top?: number | null;
  }
  /**
   * Popup Window Properties.
   */
  export interface Schema$PopupWindowProperties {
    /**
     * Popup dimension for a creative. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA and all VPAID
     */
    dimension?: Schema$Size;
    /**
     * Upper-left corner coordinates of the popup window. Applicable if positionType is COORDINATES.
     */
    offset?: Schema$OffsetPosition;
    /**
     * Popup window position either centered or at specific coordinate.
     */
    positionType?: string | null;
    /**
     * Whether to display the browser address bar.
     */
    showAddressBar?: boolean | null;
    /**
     * Whether to display the browser menu bar.
     */
    showMenuBar?: boolean | null;
    /**
     * Whether to display the browser scroll bar.
     */
    showScrollBar?: boolean | null;
    /**
     * Whether to display the browser status bar.
     */
    showStatusBar?: boolean | null;
    /**
     * Whether to display the browser tool bar.
     */
    showToolBar?: boolean | null;
    /**
     * Title of popup window.
     */
    title?: string | null;
  }
  /**
   * Represents the dimensions of ads, placements, creatives, or creative assets.
   */
  export interface Schema$Size {
    /**
     * Height of this size. Acceptable values are 0 to 32767, inclusive.
     */
    height?: number | null;
    /**
     * IAB standard size. This is a read-only, auto-generated field.
     */
    iab?: boolean | null;
    /**
     * ID of this size. This is a read-only, auto-generated field.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#size".
     */
    kind?: string | null;
    /**
     * Width of this size. Acceptable values are 0 to 32767, inclusive.
     */
    width?: number | null;
  }

  export class Resource$Media {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Inserts a new creative asset.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dfareporting.googleapis.com
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
     * const dfareporting = google.dfareporting('v3.5');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/dfatrafficking'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dfareporting.media.upload({
     *     // Advertiser ID of this creative. This is a required field.
     *     advertiserId: '[^/]+',
     *     // User profile ID associated with this request.
     *     profileId: '[^/]+',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "assetIdentifier": {},
     *       //   "clickTags": [],
     *       //   "counterCustomEvents": [],
     *       //   "detectedFeatures": [],
     *       //   "exitCustomEvents": [],
     *       //   "id": "my_id",
     *       //   "idDimensionValue": {},
     *       //   "kind": "my_kind",
     *       //   "richMedia": false,
     *       //   "timerCustomEvents": [],
     *       //   "warnedValidationRules": []
     *       // }
     *     },
     *     media: {
     *       mimeType: 'placeholder-value',
     *       body: 'placeholder-value',
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "assetIdentifier": {},
     *   //   "clickTags": [],
     *   //   "counterCustomEvents": [],
     *   //   "detectedFeatures": [],
     *   //   "exitCustomEvents": [],
     *   //   "id": "my_id",
     *   //   "idDimensionValue": {},
     *   //   "kind": "my_kind",
     *   //   "richMedia": false,
     *   //   "timerCustomEvents": [],
     *   //   "warnedValidationRules": []
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
    upload(
      params: Params$Resource$Media$Upload,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    upload(
      params?: Params$Resource$Media$Upload,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CreativeAssetMetadata>>;
    upload(
      params: Params$Resource$Media$Upload,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    upload(
      params: Params$Resource$Media$Upload,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CreativeAssetMetadata>,
      callback: BodyResponseCallback<Schema$CreativeAssetMetadata>
    ): void;
    upload(
      params: Params$Resource$Media$Upload,
      callback: BodyResponseCallback<Schema$CreativeAssetMetadata>
    ): void;
    upload(callback: BodyResponseCallback<Schema$CreativeAssetMetadata>): void;
    upload(
      paramsOrCallback?:
        | Params$Resource$Media$Upload
        | BodyResponseCallback<Schema$CreativeAssetMetadata>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CreativeAssetMetadata>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CreativeAssetMetadata>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CreativeAssetMetadata>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Media$Upload;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Media$Upload;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dfareporting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.5/userprofiles/{+profileId}/creativeAssets/{+advertiserId}/creativeAssets'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        mediaUrl: (
          rootUrl +
          '/upload/dfareporting/v3.5/userprofiles/{+profileId}/creativeAssets/{+advertiserId}/creativeAssets'
        ).replace(/([^:]\/)\/+/g, '$1'),
        requiredParams: ['profileId', 'advertiserId'],
        pathParams: ['advertiserId', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CreativeAssetMetadata>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CreativeAssetMetadata>(parameters);
      }
    }
  }

  export interface Params$Resource$Media$Upload extends StandardParameters {
    /**
     * Advertiser ID of this creative. This is a required field.
     */
    advertiserId?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreativeAssetMetadata;

    /**
     * Media metadata
     */
    media?: {
      /**
       * Media mime-type
       */
      mimeType?: string;

      /**
       * Media body contents
       */
      body?: any;
    };
  }
}
