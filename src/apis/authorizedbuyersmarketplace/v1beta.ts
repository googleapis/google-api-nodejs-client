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

export namespace authorizedbuyersmarketplace_v1beta {
  export interface Options extends GlobalOptions {
    version: 'v1beta';
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
   * Authorized Buyers Marketplace API
   *
   * The Authorized Buyers Marketplace API lets buyers programmatically discover inventory; propose, retrieve and negotiate deals with publishers.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const authorizedbuyersmarketplace = google.authorizedbuyersmarketplace('v1beta');
   * ```
   */
  export class Authorizedbuyersmarketplace {
    context: APIRequestContext;
    curators: Resource$Curators;
    mediaPlanners: Resource$Mediaplanners;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.curators = new Resource$Curators(this.context);
      this.mediaPlanners = new Resource$Mediaplanners(this.context);
    }
  }

  /**
   * Settings for controlling access to a curated package.
   */
  export interface Schema$AccessControlSettings {
    /**
     * Required. Immutable. The list of media planners that are explicitly granted access to the curated package. Eligible media planners can be found in the mediaPlanners.list method. Only a single media planner may be allowlisted at this time. Format: `mediaPlanners/{mediaPlannerAccountId\}`
     */
    allowlistedMediaPlanners?: string[] | null;
  }
  /**
   * Request message for ActivateCuratedPackage.
   */
  export interface Schema$ActivateCuratedPackageRequest {}
  /**
   * Request message for activating a data segment
   */
  export interface Schema$ActivateDataSegmentRequest {}
  /**
   * Represents size of a single ad slot, or a creative.
   */
  export interface Schema$AdSize {
    /**
     * The height of the ad slot in pixels. This field will be present only when size type is `PIXEL`.
     */
    height?: string | null;
    /**
     * The type of the ad slot size.
     */
    type?: string | null;
    /**
     * The width of the ad slot in pixels. This field will be present only when size type is `PIXEL`.
     */
    width?: string | null;
  }
  /**
   * Generic targeting used for targeting dimensions that contains a list of included and excluded numeric IDs. This cannot be filtered using list filter syntax.
   */
  export interface Schema$CriteriaTargeting {
    /**
     * A list of numeric IDs to be excluded.
     */
    excludedCriteriaIds?: string[] | null;
    /**
     * A list of numeric IDs to be included.
     */
    targetedCriteriaIds?: string[] | null;
  }
  /**
   * Represents a curated package of inventory created and managed by a Curator.
   */
  export interface Schema$CuratedPackage {
    /**
     * Required. Settings for controlling access to the curated package. Access to this curated package is limited to the allowlisted media planners and the creator. Buyers and bidders can not be allowlisted for or have direct access to this resource.
     */
    accessSettings?: Schema$AccessControlSettings;
    /**
     * Output only. The timestamp when the curated package was created. Can be used to filter the response of the curatedPackages.list method.
     */
    createTime?: string | null;
    /**
     * Optional. A description of the curated package, provided by the curator.
     */
    description?: string | null;
    /**
     * Required. The display name assigned to the curated package by the curator. Can be used to filter the response of the curatedPackages.list method.
     */
    displayName?: string | null;
    /**
     * Optional. The CPM fee charged by the curator to buyers using this curated package. Can be used to filter the response of the curatedPackages.list method.
     */
    feeCpm?: Schema$Money;
    /**
     * Optional. The minimum CPM a buyer has to bid to participate in auctions for inventory in this curated package. Can be used to filter the response of the curatedPackages.list method.
     */
    floorPriceCpm?: Schema$Money;
    /**
     * Identifier. The unique resource name for the curated package. Format: `curators/{accountId\}/curatedPackages/{curatedPackageId\}`
     */
    name?: string | null;
    /**
     * Output only. The state of the curated package. Can be used to filter the response of the curatedPackages.list method.
     */
    state?: string | null;
    /**
     * Optional. Targeting criteria for the curated package.
     */
    targeting?: Schema$PackageTargeting;
    /**
     * Output only. The timestamp when the curated package was last updated. Can be used to filter the response of the curatedPackages.list method.
     */
    updateTime?: string | null;
  }
  /**
   * Defines an identifier for a segment of inventory that can be targeted by curators or media planners in the deals or auction packages UI. Curation of inventory is done by curators on external platforms.
   */
  export interface Schema$DataSegment {
    /**
     * Optional. A fixed fee charged per thousand impressions. Once set, the currency code cannot be changed.
     */
    cpmFee?: Schema$Money;
    /**
     * Output only. Time the data segment was created.
     */
    createTime?: string | null;
    /**
     * Immutable. Identifier. The unique identifier for the data segment. Account ID corresponds to the account ID that created the segment. v1alpha format: `buyers/{accountId\}/dataSegments/{curatorDataSegmentId\}` v1beta format: `curators/{curatorAccountId\}/dataSegments/{curatorDataSegmentId\}`
     */
    name?: string | null;
    /**
     * Output only. The state of the data segment.
     */
    state?: string | null;
    /**
     * Output only. Time the data segment was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Request message for DeactivateCuratedPackage.
   */
  export interface Schema$DeactivateCuratedPackageRequest {}
  /**
   * Request message for deactivating a data segment
   */
  export interface Schema$DeactivateDataSegmentRequest {}
  /**
   * Response message for ListCuratedPackages.
   */
  export interface Schema$ListCuratedPackagesResponse {
    /**
     * The list of curated packages.
     */
    curatedPackages?: Schema$CuratedPackage[];
    /**
     * A token to retrieve the next page of results. Pass this value in the ListCuratedPackagesRequest.pageToken field in the subsequent call to `ListCuratedPackages` method to retrieve the next page of results. If empty, then there are no more results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for listing data segments.
   */
  export interface Schema$ListDataSegmentsResponse {
    /**
     * The list of data segments.
     */
    dataSegments?: Schema$DataSegment[];
    /**
     * Continuation token for fetching the next page of results. Pass this value in the ListDataSegmentsRequest.pageToken field in the subsequent call to the `ListDataSegments` method to retrieve the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * A response containing media planner account information.
   */
  export interface Schema$ListMediaPlannersResponse {
    /**
     * List of media planners.
     */
    mediaPlanners?: Schema$MediaPlanner[];
    /**
     * A token which can be passed to a subsequent call to the `ListMediaPlanners` method to retrieve the next page of results in ListMediaPlannersRequest.pageToken.
     */
    nextPageToken?: string | null;
  }
  /**
   * Represents a media planner account.
   */
  export interface Schema$MediaPlanner {
    /**
     * Output only. Account ID of the media planner.
     */
    accountId?: string | null;
    /**
     * Output only. The ancestor names of the media planner. Format: `mediaPlanners/{mediaPlannerAccountId\}` Can be used to filter the response of the mediaPlanners.list method.
     */
    ancestorNames?: string[] | null;
    /**
     * Output only. The display name of the media planner. Can be used to filter the response of the mediaPlanners.list method.
     */
    displayName?: string | null;
    /**
     * Identifier. The unique resource name of the media planner. Format: `mediaPlanners/{mediaPlannerAccountId\}` Can be used to filter the response of the mediaPlanners.list method.
     */
    name?: string | null;
  }
  /**
   * Represents an amount of money with its currency type.
   */
  export interface Schema$Money {
    /**
     * The three-letter currency code defined in ISO 4217.
     */
    currencyCode?: string | null;
    /**
     * Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
     */
    nanos?: number | null;
    /**
     * The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.
     */
    units?: string | null;
  }
  /**
   * Represents targeting about where the ads can appear, for example, certain sites or mobile applications. Different placement targeting types will be logically OR'ed.
   */
  export interface Schema$PackagePlacementTargeting {
    /**
     * Optional. The list of targeted mobile app categories.
     */
    includedMobileAppCategoryTargeting?: string[] | null;
    /**
     * Optional. The list of targeted or excluded mobile application IDs that publishers own. Currently, only Android and Apple apps are supported. Android App ID, for example, com.google.android.apps.maps, can be found in Google Play Store URL. iOS App ID (which is a number) can be found at the end of iTunes store URL. First party mobile applications is either included or excluded.
     */
    mobileAppTargeting?: Schema$StringTargetingDimension;
    /**
     * Optional. The list of targeted or excluded URLs. The domains should have the http/https stripped (for example, google.com), and can contain a max of 5 paths per url.
     */
    uriTargeting?: Schema$StringTargetingDimension;
  }
  /**
   * Represents targeting about publisher provided signals. Different publisher provided signals types will be logically OR'ed.
   */
  export interface Schema$PackagePublisherProvidedSignalsTargeting {
    /**
     * Optional. The list of targeted or excluded audience IDs. Based off of IAB Audience Taxonomy version 1.1 (https://github.com/InteractiveAdvertisingBureau/Taxonomies/blob/main/Audience%20Taxonomies/Audience%20Taxonomy%201.1.tsv)
     */
    audienceTargeting?: Schema$TaxonomyTargeting;
    /**
     * Optional. The list of targeted or excluded content IDs. Based off of IAB Content Taxonomy version 2.2 (https://github.com/InteractiveAdvertisingBureau/Taxonomies/blob/main/Content%20Taxonomies/Content%20Taxonomy%202.2.tsv)
     */
    contentTargeting?: Schema$TaxonomyTargeting;
    /**
     * Optional. The list of targeted and excluded video and audio signals IDs. These are additional signals supported by publisher provided signals.
     */
    videoAndAudioSignalsTargeting?: Schema$StringTargetingDimension;
  }
  /**
   * Targeting criteria for curated and auction packages.
   */
  export interface Schema$PackageTargeting {
    /**
     * Optional. The geo criteria IDs to be included or excluded as defined in https://storage.googleapis.com/adx-rtb-dictionaries/geo-table.csv. If unset, inventory will be targeted regardless of geo.
     */
    geoTargeting?: Schema$CriteriaTargeting;
    /**
     * Optional. The targeted accelerated mobile page type. If unset, inventory will be targeted regardless of AMP status.
     */
    includedAcceleratedMobilePageType?: string | null;
    /**
     * Optional. The list of ad sizes to target. If unset, inventory will be targeted regardless of ad size. Curated packages supports `PIXEL` and `INTERSTITIAL` ad sizes.
     */
    includedAdSizes?: Schema$AdSize[];
    /**
     * Optional. The included list of targeted authorized seller statuses. If empty, inventory will be targeted regardless of seller status.
     */
    includedAuthorizedSellerStatuses?: string[] | null;
    /**
     * Optional. The creative format to target. If unset, all creative markup types are targeted.
     */
    includedCreativeFormat?: string | null;
    /**
     * Optional. The active data segments to be targeted. If unset, inventory will be targeted regardless of data segments. Format: `curators/{account_id\}/dataSegments/{data_segment_id\}`
     */
    includedDataSegments?: string[] | null;
    /**
     * Optional. The list of included device types to target. If empty, all device types are targeted.
     */
    includedDeviceTypes?: string[] | null;
    /**
     * Optional. The environment to target. If unspecified, all environments are targeted.
     */
    includedEnvironment?: string | null;
    /**
     * Optional. The targeted native inventory types. If empty, inventory will be targeted regardless of native inventory type.
     */
    includedNativeInventoryTypes?: string[] | null;
    /**
     * Optional. The list of targeted open measurement types. If empty, inventory will be targeted regardless of Open Measurement support.
     */
    includedOpenMeasurementTypes?: string[] | null;
    /**
     * Optional. The list of targeted restricted categories. If empty, inventory will be targeted regardless of restricted categories.
     */
    includedRestrictedCategories?: string[] | null;
    /**
     * Optional. The targeted rewarded type. If unset, inventory will be targeted regardless of rewarded type.
     */
    includedRewardedType?: string | null;
    /**
     * Optional. The languages to target. If unset, inventory will be targeted regardless of language. See https://developers.google.com/google-ads/api/data/codes-formats#languages for the list of supported language codes.
     */
    languageTargeting?: Schema$StringTargetingDimension;
    /**
     * Optional. The targeted minimum predicted click through rate, ranging in values [10, 10000] (0.01% - 10%). A value of 50 means that the configuration will only match adslots for which we predict at least 0.05% click through rate. An unset value indicates inventory will be targeted regardless of predicted click through rate.
     */
    minimumPredictedClickThroughRatePercentageMillis?: string | null;
    /**
     * Optional. The targeted minimum predicted viewability percentage. This value must be a multiple of 10 between 10 and 90 (inclusive). For example, 10 is valid, but 0, 15, and 100 are not. A value of 10 means that the configuration will only match adslots for which we predict at least 10% viewability. An unset value indicates inventory will be targeted regardless of predicted viewability.
     */
    minimumPredictedViewabilityPercentage?: string | null;
    /**
     * Optional. Placement targeting information, for example, URL, mobile applications.
     */
    placementTargeting?: Schema$PackagePlacementTargeting;
    /**
     * Optional. The publisher provided signals to target. If unset, inventory will be targeted regardless of publisher provided signals.
     */
    publisherProvidedSignalsTargeting?: Schema$PackagePublisherProvidedSignalsTargeting;
    /**
     * Optional. The targeted publishers. If unset, inventory will be targeted regardless of publisher. Publishers are identified by their publisher ID from ads.txt / app-ads.txt. See https://iabtechlab.com/ads-txt/ and https://iabtechlab.com/app-ads-txt/ for more details.
     */
    publisherTargeting?: Schema$StringTargetingDimension;
    /**
     * Optional. The verticals included or excluded as defined in https://developers.google.com/authorized-buyers/rtb/downloads/publisher-verticals. If unset, inventory will be targeted regardless of vertical.
     */
    verticalTargeting?: Schema$CriteriaTargeting;
    /**
     * Optional. Video specific targeting criteria.
     */
    videoTargeting?: Schema$PackageVideoTargeting;
  }
  /**
   * Video specific targeting criteria.
   */
  export interface Schema$PackageVideoTargeting {
    /**
     * Optional. The targeted video delivery method. If unset, inventory will be targeted regardless of video delivery method.
     */
    includedContentDeliveryMethod?: string | null;
    /**
     * Optional. The targeted maximum video ad duration. If unset, inventory will be targeted regardless of maximum video ad duration.
     */
    includedMaximumAdDurationTargeting?: string | null;
    /**
     * Optional. The list of targeted video mime types using the IANA published MIME type strings (https://www.iana.org/assignments/media-types/media-types.xhtml). If empty, inventory will be targeted regardless of video mime type.
     */
    includedMimeTypes?: string[] | null;
    /**
     * Optional. The list of targeted video playback methods. If empty, inventory will be targeted regardless of video playback method.
     */
    includedPlaybackMethods?: string[] | null;
    /**
     * Optional. The targeted video player size. If unset, inventory will be targeted regardless of video player size.
     */
    includedPlayerSizeTargeting?: Schema$VideoPlayerSizeTargeting;
    /**
     * Optional. The targeted video ad position types. If empty, inventory will be targeted regardless of video ad position type.
     */
    includedPositionTypes?: string[] | null;
    /**
     * Optional. The targeted minimum predicted completion rate percentage. This value must be a multiple of 10 between 10 and 90 (inclusive). For example, 10 is valid, but 0, 15, and 100 are not. A value of 10 means that the configuration will only match adslots for which we predict at least 10% completion rate. An unset value indicates inventory will be targeted regardless of predicted completion rate.
     */
    minimumPredictedCompletionRatePercentage?: string | null;
    /**
     * Optional. The targeted video plcmt types. If unset, inventory will be targeted regardless of video plcmt type.
     */
    plcmtTargeting?: Schema$VideoPlcmtTargeting;
  }
  /**
   * Generic targeting with string values.
   */
  export interface Schema$StringTargetingDimension {
    /**
     * Required. How the items in this list should be targeted.
     */
    selectionType?: string | null;
    /**
     * Required. The values specified.
     */
    values?: string[] | null;
  }
  /**
   * Defines targeting criteria for handling the IAB audience and content Taxonomy ID space.
   */
  export interface Schema$TaxonomyTargeting {
    /**
     * Optional. The list of excluded content taxonomy IDs.
     */
    excludedTaxonomyIds?: string[] | null;
    /**
     * Optional. The list of targeted content taxonomy IDs.
     */
    targetedTaxonomyIds?: string[] | null;
  }
  /**
   * Represents the size of the video player that can be targeted. Both width and height are required to be set to non-zero values.
   */
  export interface Schema$VideoPlayerSizeTargeting {
    /**
     * Required. The minimum height of the video player in pixels.
     */
    minimumHeight?: string | null;
    /**
     * Required. The minimum width of the video player in pixels.
     */
    minimumWidth?: string | null;
  }
  /**
   * Defines targeting criteria based on the video placement type, often corresponding to the IAB OpenRTB 'plcmt' field.
   */
  export interface Schema$VideoPlcmtTargeting {
    /**
     * Required. The selection type for the list of video plcmts.
     */
    selectionType?: string | null;
    /**
     * Required. The list of targeted video plcmts types. If empty, inventory will be targeted regardless of video plcmt type.
     */
    videoPlcmtTypes?: string[] | null;
  }

  export class Resource$Curators {
    context: APIRequestContext;
    curatedPackages: Resource$Curators$Curatedpackages;
    dataSegments: Resource$Curators$Datasegments;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.curatedPackages = new Resource$Curators$Curatedpackages(
        this.context
      );
      this.dataSegments = new Resource$Curators$Datasegments(this.context);
    }
  }

  export class Resource$Curators$Curatedpackages {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Activates an existing curated package.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/authorizedbuyersmarketplace.googleapis.com
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
     * const authorizedbuyersmarketplace =
     *   google.authorizedbuyersmarketplace('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await authorizedbuyersmarketplace.curators.curatedPackages.activate({
     *       // Required. The name of the curated package to activate. Format: `curators/{accountId\}/curatedPackages/{curatedPackageId\}`
     *       name: 'curators/my-curator/curatedPackages/my-curatedPackage',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {}
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accessSettings": {},
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "feeCpm": {},
     *   //   "floorPriceCpm": {},
     *   //   "name": "my_name",
     *   //   "state": "my_state",
     *   //   "targeting": {},
     *   //   "updateTime": "my_updateTime"
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
    activate(
      params: Params$Resource$Curators$Curatedpackages$Activate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    activate(
      params?: Params$Resource$Curators$Curatedpackages$Activate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CuratedPackage>>;
    activate(
      params: Params$Resource$Curators$Curatedpackages$Activate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    activate(
      params: Params$Resource$Curators$Curatedpackages$Activate,
      options: MethodOptions | BodyResponseCallback<Schema$CuratedPackage>,
      callback: BodyResponseCallback<Schema$CuratedPackage>
    ): void;
    activate(
      params: Params$Resource$Curators$Curatedpackages$Activate,
      callback: BodyResponseCallback<Schema$CuratedPackage>
    ): void;
    activate(callback: BodyResponseCallback<Schema$CuratedPackage>): void;
    activate(
      paramsOrCallback?:
        | Params$Resource$Curators$Curatedpackages$Activate
        | BodyResponseCallback<Schema$CuratedPackage>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CuratedPackage>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CuratedPackage>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CuratedPackage>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Curators$Curatedpackages$Activate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Curators$Curatedpackages$Activate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}:activate').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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
        createAPIRequest<Schema$CuratedPackage>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CuratedPackage>(parameters);
      }
    }

    /**
     * Creates a new curated package.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/authorizedbuyersmarketplace.googleapis.com
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
     * const authorizedbuyersmarketplace =
     *   google.authorizedbuyersmarketplace('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await authorizedbuyersmarketplace.curators.curatedPackages.create(
     *     {
     *       // Required. The parent curator account where this curated package will be created. Format: `curators/{accountId\}`
     *       parent: 'curators/my-curator',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "accessSettings": {},
     *         //   "createTime": "my_createTime",
     *         //   "description": "my_description",
     *         //   "displayName": "my_displayName",
     *         //   "feeCpm": {},
     *         //   "floorPriceCpm": {},
     *         //   "name": "my_name",
     *         //   "state": "my_state",
     *         //   "targeting": {},
     *         //   "updateTime": "my_updateTime"
     *         // }
     *       },
     *     },
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accessSettings": {},
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "feeCpm": {},
     *   //   "floorPriceCpm": {},
     *   //   "name": "my_name",
     *   //   "state": "my_state",
     *   //   "targeting": {},
     *   //   "updateTime": "my_updateTime"
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
    create(
      params: Params$Resource$Curators$Curatedpackages$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Curators$Curatedpackages$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CuratedPackage>>;
    create(
      params: Params$Resource$Curators$Curatedpackages$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Curators$Curatedpackages$Create,
      options: MethodOptions | BodyResponseCallback<Schema$CuratedPackage>,
      callback: BodyResponseCallback<Schema$CuratedPackage>
    ): void;
    create(
      params: Params$Resource$Curators$Curatedpackages$Create,
      callback: BodyResponseCallback<Schema$CuratedPackage>
    ): void;
    create(callback: BodyResponseCallback<Schema$CuratedPackage>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Curators$Curatedpackages$Create
        | BodyResponseCallback<Schema$CuratedPackage>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CuratedPackage>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CuratedPackage>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CuratedPackage>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Curators$Curatedpackages$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Curators$Curatedpackages$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/curatedPackages').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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
        createAPIRequest<Schema$CuratedPackage>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CuratedPackage>(parameters);
      }
    }

    /**
     * Deactivates an existing curated package.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/authorizedbuyersmarketplace.googleapis.com
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
     * const authorizedbuyersmarketplace =
     *   google.authorizedbuyersmarketplace('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await authorizedbuyersmarketplace.curators.curatedPackages.deactivate({
     *       // Required. The name of the curated package to deactivate. Format: `curators/{accountId\}/curatedPackages/{curatedPackageId\}`
     *       name: 'curators/my-curator/curatedPackages/my-curatedPackage',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {}
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accessSettings": {},
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "feeCpm": {},
     *   //   "floorPriceCpm": {},
     *   //   "name": "my_name",
     *   //   "state": "my_state",
     *   //   "targeting": {},
     *   //   "updateTime": "my_updateTime"
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
    deactivate(
      params: Params$Resource$Curators$Curatedpackages$Deactivate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    deactivate(
      params?: Params$Resource$Curators$Curatedpackages$Deactivate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CuratedPackage>>;
    deactivate(
      params: Params$Resource$Curators$Curatedpackages$Deactivate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    deactivate(
      params: Params$Resource$Curators$Curatedpackages$Deactivate,
      options: MethodOptions | BodyResponseCallback<Schema$CuratedPackage>,
      callback: BodyResponseCallback<Schema$CuratedPackage>
    ): void;
    deactivate(
      params: Params$Resource$Curators$Curatedpackages$Deactivate,
      callback: BodyResponseCallback<Schema$CuratedPackage>
    ): void;
    deactivate(callback: BodyResponseCallback<Schema$CuratedPackage>): void;
    deactivate(
      paramsOrCallback?:
        | Params$Resource$Curators$Curatedpackages$Deactivate
        | BodyResponseCallback<Schema$CuratedPackage>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CuratedPackage>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CuratedPackage>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CuratedPackage>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Curators$Curatedpackages$Deactivate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Curators$Curatedpackages$Deactivate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}:deactivate').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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
        createAPIRequest<Schema$CuratedPackage>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CuratedPackage>(parameters);
      }
    }

    /**
     * Gets a curated package given its resource name.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/authorizedbuyersmarketplace.googleapis.com
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
     * const authorizedbuyersmarketplace =
     *   google.authorizedbuyersmarketplace('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await authorizedbuyersmarketplace.curators.curatedPackages.get({
     *     // Required. The name of the curated package to retrieve. Format: `curators/{accountId\}/curatedPackages/{curatedPackageId\}`
     *     name: 'curators/my-curator/curatedPackages/my-curatedPackage',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accessSettings": {},
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "feeCpm": {},
     *   //   "floorPriceCpm": {},
     *   //   "name": "my_name",
     *   //   "state": "my_state",
     *   //   "targeting": {},
     *   //   "updateTime": "my_updateTime"
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
      params: Params$Resource$Curators$Curatedpackages$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Curators$Curatedpackages$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CuratedPackage>>;
    get(
      params: Params$Resource$Curators$Curatedpackages$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Curators$Curatedpackages$Get,
      options: MethodOptions | BodyResponseCallback<Schema$CuratedPackage>,
      callback: BodyResponseCallback<Schema$CuratedPackage>
    ): void;
    get(
      params: Params$Resource$Curators$Curatedpackages$Get,
      callback: BodyResponseCallback<Schema$CuratedPackage>
    ): void;
    get(callback: BodyResponseCallback<Schema$CuratedPackage>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Curators$Curatedpackages$Get
        | BodyResponseCallback<Schema$CuratedPackage>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CuratedPackage>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CuratedPackage>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CuratedPackage>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Curators$Curatedpackages$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Curators$Curatedpackages$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$CuratedPackage>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CuratedPackage>(parameters);
      }
    }

    /**
     * Lists curated packages owned by the specified curator.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/authorizedbuyersmarketplace.googleapis.com
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
     * const authorizedbuyersmarketplace =
     *   google.authorizedbuyersmarketplace('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await authorizedbuyersmarketplace.curators.curatedPackages.list({
     *     // Optional. Optional query string using the [Cloud API list filtering syntax](/authorized-buyers/apis/guides/list-filters). Supported columns for filtering are: * displayName * createTime * updateTime * state * feeCpm.currencyCode * feeCpm.units * feeCpm.nanos * floorPriceCpm.currencyCode * floorPriceCpm.units * floorPriceCpm.nanos
     *     filter: 'placeholder-value',
     *     // Optional. Requested page size. The server may return fewer results than requested. Max allowed page size is 500. If unspecified, the server will default to 500.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListCuratedPackages` call. Provide this to retrieve the subsequent page.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent curator account which owns this collection of curated packages. Format: `curators/{accountId\}`
     *     parent: 'curators/my-curator',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "curatedPackages": [],
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
      params: Params$Resource$Curators$Curatedpackages$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Curators$Curatedpackages$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListCuratedPackagesResponse>>;
    list(
      params: Params$Resource$Curators$Curatedpackages$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Curators$Curatedpackages$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListCuratedPackagesResponse>,
      callback: BodyResponseCallback<Schema$ListCuratedPackagesResponse>
    ): void;
    list(
      params: Params$Resource$Curators$Curatedpackages$List,
      callback: BodyResponseCallback<Schema$ListCuratedPackagesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListCuratedPackagesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Curators$Curatedpackages$List
        | BodyResponseCallback<Schema$ListCuratedPackagesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListCuratedPackagesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListCuratedPackagesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListCuratedPackagesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Curators$Curatedpackages$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Curators$Curatedpackages$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/curatedPackages').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$ListCuratedPackagesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListCuratedPackagesResponse>(parameters);
      }
    }

    /**
     * Updates an existing curated package.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/authorizedbuyersmarketplace.googleapis.com
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
     * const authorizedbuyersmarketplace =
     *   google.authorizedbuyersmarketplace('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await authorizedbuyersmarketplace.curators.curatedPackages.patch({
     *     // Identifier. The unique resource name for the curated package. Format: `curators/{accountId\}/curatedPackages/{curatedPackageId\}`
     *     name: 'curators/my-curator/curatedPackages/my-curatedPackage',
     *     // Optional. List of fields to be updated. If empty or unspecified, the service will update all fields populated in the update request excluding the output only fields and primitive fields with default value. Note that explicit field mask is required in order to reset a primitive field back to its default value, for example, false for boolean fields, 0 for integer fields. A special field mask consisting of a single path "*" can be used to indicate full replacement (the equivalent of PUT method), updatable fields unset or unspecified in the input will be cleared or set to default value. Output only fields will be ignored regardless of the value of updateMask.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accessSettings": {},
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "feeCpm": {},
     *       //   "floorPriceCpm": {},
     *       //   "name": "my_name",
     *       //   "state": "my_state",
     *       //   "targeting": {},
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accessSettings": {},
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "feeCpm": {},
     *   //   "floorPriceCpm": {},
     *   //   "name": "my_name",
     *   //   "state": "my_state",
     *   //   "targeting": {},
     *   //   "updateTime": "my_updateTime"
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
    patch(
      params: Params$Resource$Curators$Curatedpackages$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Curators$Curatedpackages$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CuratedPackage>>;
    patch(
      params: Params$Resource$Curators$Curatedpackages$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Curators$Curatedpackages$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$CuratedPackage>,
      callback: BodyResponseCallback<Schema$CuratedPackage>
    ): void;
    patch(
      params: Params$Resource$Curators$Curatedpackages$Patch,
      callback: BodyResponseCallback<Schema$CuratedPackage>
    ): void;
    patch(callback: BodyResponseCallback<Schema$CuratedPackage>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Curators$Curatedpackages$Patch
        | BodyResponseCallback<Schema$CuratedPackage>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CuratedPackage>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CuratedPackage>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CuratedPackage>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Curators$Curatedpackages$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Curators$Curatedpackages$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
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
        createAPIRequest<Schema$CuratedPackage>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CuratedPackage>(parameters);
      }
    }
  }

  export interface Params$Resource$Curators$Curatedpackages$Activate extends StandardParameters {
    /**
     * Required. The name of the curated package to activate. Format: `curators/{accountId\}/curatedPackages/{curatedPackageId\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ActivateCuratedPackageRequest;
  }
  export interface Params$Resource$Curators$Curatedpackages$Create extends StandardParameters {
    /**
     * Required. The parent curator account where this curated package will be created. Format: `curators/{accountId\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CuratedPackage;
  }
  export interface Params$Resource$Curators$Curatedpackages$Deactivate extends StandardParameters {
    /**
     * Required. The name of the curated package to deactivate. Format: `curators/{accountId\}/curatedPackages/{curatedPackageId\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DeactivateCuratedPackageRequest;
  }
  export interface Params$Resource$Curators$Curatedpackages$Get extends StandardParameters {
    /**
     * Required. The name of the curated package to retrieve. Format: `curators/{accountId\}/curatedPackages/{curatedPackageId\}`
     */
    name?: string;
  }
  export interface Params$Resource$Curators$Curatedpackages$List extends StandardParameters {
    /**
     * Optional. Optional query string using the [Cloud API list filtering syntax](/authorized-buyers/apis/guides/list-filters). Supported columns for filtering are: * displayName * createTime * updateTime * state * feeCpm.currencyCode * feeCpm.units * feeCpm.nanos * floorPriceCpm.currencyCode * floorPriceCpm.units * floorPriceCpm.nanos
     */
    filter?: string;
    /**
     * Optional. Requested page size. The server may return fewer results than requested. Max allowed page size is 500. If unspecified, the server will default to 500.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListCuratedPackages` call. Provide this to retrieve the subsequent page.
     */
    pageToken?: string;
    /**
     * Required. The parent curator account which owns this collection of curated packages. Format: `curators/{accountId\}`
     */
    parent?: string;
  }
  export interface Params$Resource$Curators$Curatedpackages$Patch extends StandardParameters {
    /**
     * Identifier. The unique resource name for the curated package. Format: `curators/{accountId\}/curatedPackages/{curatedPackageId\}`
     */
    name?: string;
    /**
     * Optional. List of fields to be updated. If empty or unspecified, the service will update all fields populated in the update request excluding the output only fields and primitive fields with default value. Note that explicit field mask is required in order to reset a primitive field back to its default value, for example, false for boolean fields, 0 for integer fields. A special field mask consisting of a single path "*" can be used to indicate full replacement (the equivalent of PUT method), updatable fields unset or unspecified in the input will be cleared or set to default value. Output only fields will be ignored regardless of the value of updateMask.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CuratedPackage;
  }

  export class Resource$Curators$Datasegments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Activates a data segment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/authorizedbuyersmarketplace.googleapis.com
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
     * const authorizedbuyersmarketplace =
     *   google.authorizedbuyersmarketplace('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await authorizedbuyersmarketplace.curators.dataSegments.activate({
     *     // Required. Name of data segment to activate. v1alpha format: `buyers/{accountId\}/dataSegments/{curatorDataSegmentId\}` v1beta format: `curators/{accountId\}/dataSegments/{curatorDataSegmentId\}`
     *     name: 'curators/my-curator/dataSegments/my-dataSegment',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cpmFee": {},
     *   //   "createTime": "my_createTime",
     *   //   "name": "my_name",
     *   //   "state": "my_state",
     *   //   "updateTime": "my_updateTime"
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
    activate(
      params: Params$Resource$Curators$Datasegments$Activate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    activate(
      params?: Params$Resource$Curators$Datasegments$Activate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DataSegment>>;
    activate(
      params: Params$Resource$Curators$Datasegments$Activate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    activate(
      params: Params$Resource$Curators$Datasegments$Activate,
      options: MethodOptions | BodyResponseCallback<Schema$DataSegment>,
      callback: BodyResponseCallback<Schema$DataSegment>
    ): void;
    activate(
      params: Params$Resource$Curators$Datasegments$Activate,
      callback: BodyResponseCallback<Schema$DataSegment>
    ): void;
    activate(callback: BodyResponseCallback<Schema$DataSegment>): void;
    activate(
      paramsOrCallback?:
        | Params$Resource$Curators$Datasegments$Activate
        | BodyResponseCallback<Schema$DataSegment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DataSegment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DataSegment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$DataSegment>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Curators$Datasegments$Activate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Curators$Datasegments$Activate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}:activate').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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
        createAPIRequest<Schema$DataSegment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DataSegment>(parameters);
      }
    }

    /**
     * Creates a data segment owned by the listed curator. The data segment will be created in the `ACTIVE` state, meaning it will be immediately available for buyers to use in preferred deals, private auction deals, and auction packages.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/authorizedbuyersmarketplace.googleapis.com
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
     * const authorizedbuyersmarketplace =
     *   google.authorizedbuyersmarketplace('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await authorizedbuyersmarketplace.curators.dataSegments.create({
     *     // Required. The parent resource where this data segment will be created. v1alpha format: `buyers/{accountId\}` v1beta format: `curators/{accountId\}`
     *     parent: 'curators/my-curator',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "cpmFee": {},
     *       //   "createTime": "my_createTime",
     *       //   "name": "my_name",
     *       //   "state": "my_state",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cpmFee": {},
     *   //   "createTime": "my_createTime",
     *   //   "name": "my_name",
     *   //   "state": "my_state",
     *   //   "updateTime": "my_updateTime"
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
    create(
      params: Params$Resource$Curators$Datasegments$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Curators$Datasegments$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DataSegment>>;
    create(
      params: Params$Resource$Curators$Datasegments$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Curators$Datasegments$Create,
      options: MethodOptions | BodyResponseCallback<Schema$DataSegment>,
      callback: BodyResponseCallback<Schema$DataSegment>
    ): void;
    create(
      params: Params$Resource$Curators$Datasegments$Create,
      callback: BodyResponseCallback<Schema$DataSegment>
    ): void;
    create(callback: BodyResponseCallback<Schema$DataSegment>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Curators$Datasegments$Create
        | BodyResponseCallback<Schema$DataSegment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DataSegment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DataSegment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$DataSegment>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Curators$Datasegments$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Curators$Datasegments$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/dataSegments').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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
        createAPIRequest<Schema$DataSegment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DataSegment>(parameters);
      }
    }

    /**
     * Deactivates a data segment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/authorizedbuyersmarketplace.googleapis.com
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
     * const authorizedbuyersmarketplace =
     *   google.authorizedbuyersmarketplace('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await authorizedbuyersmarketplace.curators.dataSegments.deactivate({
     *       // Required. Name of data segment to deactivate. v1alpha format: `buyers/{accountId\}/dataSegments/{curatorDataSegmentId\}` v1beta format: `curators/{accountId\}/dataSegments/{curatorDataSegmentId\}`
     *       name: 'curators/my-curator/dataSegments/my-dataSegment',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {}
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cpmFee": {},
     *   //   "createTime": "my_createTime",
     *   //   "name": "my_name",
     *   //   "state": "my_state",
     *   //   "updateTime": "my_updateTime"
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
    deactivate(
      params: Params$Resource$Curators$Datasegments$Deactivate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    deactivate(
      params?: Params$Resource$Curators$Datasegments$Deactivate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DataSegment>>;
    deactivate(
      params: Params$Resource$Curators$Datasegments$Deactivate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    deactivate(
      params: Params$Resource$Curators$Datasegments$Deactivate,
      options: MethodOptions | BodyResponseCallback<Schema$DataSegment>,
      callback: BodyResponseCallback<Schema$DataSegment>
    ): void;
    deactivate(
      params: Params$Resource$Curators$Datasegments$Deactivate,
      callback: BodyResponseCallback<Schema$DataSegment>
    ): void;
    deactivate(callback: BodyResponseCallback<Schema$DataSegment>): void;
    deactivate(
      paramsOrCallback?:
        | Params$Resource$Curators$Datasegments$Deactivate
        | BodyResponseCallback<Schema$DataSegment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DataSegment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DataSegment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$DataSegment>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Curators$Datasegments$Deactivate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Curators$Datasegments$Deactivate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}:deactivate').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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
        createAPIRequest<Schema$DataSegment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DataSegment>(parameters);
      }
    }

    /**
     * Gets a data segment given its name.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/authorizedbuyersmarketplace.googleapis.com
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
     * const authorizedbuyersmarketplace =
     *   google.authorizedbuyersmarketplace('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await authorizedbuyersmarketplace.curators.dataSegments.get({
     *     // Required. Name of data segment to get. v1alpha format: `buyers/{accountId\}/dataSegments/{curatorDataSegmentId\}` v1beta format: `curators/{accountId\}/dataSegments/{curatorDataSegmentId\}`
     *     name: 'curators/my-curator/dataSegments/my-dataSegment',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cpmFee": {},
     *   //   "createTime": "my_createTime",
     *   //   "name": "my_name",
     *   //   "state": "my_state",
     *   //   "updateTime": "my_updateTime"
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
      params: Params$Resource$Curators$Datasegments$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Curators$Datasegments$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DataSegment>>;
    get(
      params: Params$Resource$Curators$Datasegments$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Curators$Datasegments$Get,
      options: MethodOptions | BodyResponseCallback<Schema$DataSegment>,
      callback: BodyResponseCallback<Schema$DataSegment>
    ): void;
    get(
      params: Params$Resource$Curators$Datasegments$Get,
      callback: BodyResponseCallback<Schema$DataSegment>
    ): void;
    get(callback: BodyResponseCallback<Schema$DataSegment>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Curators$Datasegments$Get
        | BodyResponseCallback<Schema$DataSegment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DataSegment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DataSegment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$DataSegment>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Curators$Datasegments$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Curators$Datasegments$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$DataSegment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DataSegment>(parameters);
      }
    }

    /**
     * List the data segments owned by a curator.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/authorizedbuyersmarketplace.googleapis.com
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
     * const authorizedbuyersmarketplace =
     *   google.authorizedbuyersmarketplace('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await authorizedbuyersmarketplace.curators.dataSegments.list({
     *     // Optional. Requested page size. The server may return fewer results than requested. Max allowed page size is 500. If unspecified, the server will default to 500.
     *     pageSize: 'placeholder-value',
     *     // Optional. The page token as returned. ListDataSegmentsResponse.nextPageToken
     *     pageToken: 'placeholder-value',
     *     // Required. Name of the parent curator that can access the data segment. v1alpha format: `buyers/{accountId\}` v1beta format: `curators/{accountId\}`
     *     parent: 'curators/my-curator',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dataSegments": [],
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
      params: Params$Resource$Curators$Datasegments$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Curators$Datasegments$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListDataSegmentsResponse>>;
    list(
      params: Params$Resource$Curators$Datasegments$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Curators$Datasegments$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDataSegmentsResponse>,
      callback: BodyResponseCallback<Schema$ListDataSegmentsResponse>
    ): void;
    list(
      params: Params$Resource$Curators$Datasegments$List,
      callback: BodyResponseCallback<Schema$ListDataSegmentsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListDataSegmentsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Curators$Datasegments$List
        | BodyResponseCallback<Schema$ListDataSegmentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDataSegmentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDataSegmentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListDataSegmentsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Curators$Datasegments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Curators$Datasegments$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/dataSegments').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$ListDataSegmentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDataSegmentsResponse>(parameters);
      }
    }

    /**
     * Updates a data segment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/authorizedbuyersmarketplace.googleapis.com
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
     * const authorizedbuyersmarketplace =
     *   google.authorizedbuyersmarketplace('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await authorizedbuyersmarketplace.curators.dataSegments.patch({
     *     // Immutable. Identifier. The unique identifier for the data segment. Account ID corresponds to the account ID that created the segment. v1alpha format: `buyers/{accountId\}/dataSegments/{curatorDataSegmentId\}` v1beta format: `curators/{curatorAccountId\}/dataSegments/{curatorDataSegmentId\}`
     *     name: 'curators/my-curator/dataSegments/my-dataSegment',
     *     // Optional. List of fields to be updated. If empty or unspecified, the service will update all fields populated in the update request excluding the output only fields and primitive fields with default value. Note that explicit field mask is required in order to reset a primitive field back to its default value, for example, false for boolean fields, 0 for integer fields. A special field mask consisting of a single path "*" can be used to indicate full replacement(the equivalent of PUT method), updatable fields unset or unspecified in the input will be cleared or set to default value. Output only fields will be ignored regardless of the value of updateMask.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "cpmFee": {},
     *       //   "createTime": "my_createTime",
     *       //   "name": "my_name",
     *       //   "state": "my_state",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cpmFee": {},
     *   //   "createTime": "my_createTime",
     *   //   "name": "my_name",
     *   //   "state": "my_state",
     *   //   "updateTime": "my_updateTime"
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
    patch(
      params: Params$Resource$Curators$Datasegments$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Curators$Datasegments$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DataSegment>>;
    patch(
      params: Params$Resource$Curators$Datasegments$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Curators$Datasegments$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$DataSegment>,
      callback: BodyResponseCallback<Schema$DataSegment>
    ): void;
    patch(
      params: Params$Resource$Curators$Datasegments$Patch,
      callback: BodyResponseCallback<Schema$DataSegment>
    ): void;
    patch(callback: BodyResponseCallback<Schema$DataSegment>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Curators$Datasegments$Patch
        | BodyResponseCallback<Schema$DataSegment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DataSegment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DataSegment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$DataSegment>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Curators$Datasegments$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Curators$Datasegments$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
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
        createAPIRequest<Schema$DataSegment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DataSegment>(parameters);
      }
    }
  }

  export interface Params$Resource$Curators$Datasegments$Activate extends StandardParameters {
    /**
     * Required. Name of data segment to activate. v1alpha format: `buyers/{accountId\}/dataSegments/{curatorDataSegmentId\}` v1beta format: `curators/{accountId\}/dataSegments/{curatorDataSegmentId\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ActivateDataSegmentRequest;
  }
  export interface Params$Resource$Curators$Datasegments$Create extends StandardParameters {
    /**
     * Required. The parent resource where this data segment will be created. v1alpha format: `buyers/{accountId\}` v1beta format: `curators/{accountId\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DataSegment;
  }
  export interface Params$Resource$Curators$Datasegments$Deactivate extends StandardParameters {
    /**
     * Required. Name of data segment to deactivate. v1alpha format: `buyers/{accountId\}/dataSegments/{curatorDataSegmentId\}` v1beta format: `curators/{accountId\}/dataSegments/{curatorDataSegmentId\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DeactivateDataSegmentRequest;
  }
  export interface Params$Resource$Curators$Datasegments$Get extends StandardParameters {
    /**
     * Required. Name of data segment to get. v1alpha format: `buyers/{accountId\}/dataSegments/{curatorDataSegmentId\}` v1beta format: `curators/{accountId\}/dataSegments/{curatorDataSegmentId\}`
     */
    name?: string;
  }
  export interface Params$Resource$Curators$Datasegments$List extends StandardParameters {
    /**
     * Optional. Requested page size. The server may return fewer results than requested. Max allowed page size is 500. If unspecified, the server will default to 500.
     */
    pageSize?: number;
    /**
     * Optional. The page token as returned. ListDataSegmentsResponse.nextPageToken
     */
    pageToken?: string;
    /**
     * Required. Name of the parent curator that can access the data segment. v1alpha format: `buyers/{accountId\}` v1beta format: `curators/{accountId\}`
     */
    parent?: string;
  }
  export interface Params$Resource$Curators$Datasegments$Patch extends StandardParameters {
    /**
     * Immutable. Identifier. The unique identifier for the data segment. Account ID corresponds to the account ID that created the segment. v1alpha format: `buyers/{accountId\}/dataSegments/{curatorDataSegmentId\}` v1beta format: `curators/{curatorAccountId\}/dataSegments/{curatorDataSegmentId\}`
     */
    name?: string;
    /**
     * Optional. List of fields to be updated. If empty or unspecified, the service will update all fields populated in the update request excluding the output only fields and primitive fields with default value. Note that explicit field mask is required in order to reset a primitive field back to its default value, for example, false for boolean fields, 0 for integer fields. A special field mask consisting of a single path "*" can be used to indicate full replacement(the equivalent of PUT method), updatable fields unset or unspecified in the input will be cleared or set to default value. Output only fields will be ignored regardless of the value of updateMask.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DataSegment;
  }

  export class Resource$Mediaplanners {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists all media planner accounts that the caller has access to. For curators, this will return all media planners that have accepted curator terms. For other accounts, attempting to list media planners will return an error.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/authorizedbuyersmarketplace.googleapis.com
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
     * const authorizedbuyersmarketplace =
     *   google.authorizedbuyersmarketplace('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await authorizedbuyersmarketplace.mediaPlanners.list({
     *     // Optional query string using the [Cloud API list filtering syntax](/authorized-buyers/apis/guides/list-filters). Supported columns for filtering are: * `name` * `displayName` * `ancestorNames`
     *     filter: 'placeholder-value',
     *     // The maximum number of media planners to return. If unspecified, at most 100 media planners will be returned. The maximum value is 500; values above 500 will be coerced to 500.
     *     pageSize: 'placeholder-value',
     *     // A token identifying a page of results the server should return. This value is received from a previous `ListMediaPlanners` call in ListMediaPlannersResponse.nextPageToken.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "mediaPlanners": [],
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
      params: Params$Resource$Mediaplanners$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Mediaplanners$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListMediaPlannersResponse>>;
    list(
      params: Params$Resource$Mediaplanners$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Mediaplanners$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListMediaPlannersResponse>,
      callback: BodyResponseCallback<Schema$ListMediaPlannersResponse>
    ): void;
    list(
      params: Params$Resource$Mediaplanners$List,
      callback: BodyResponseCallback<Schema$ListMediaPlannersResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListMediaPlannersResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Mediaplanners$List
        | BodyResponseCallback<Schema$ListMediaPlannersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListMediaPlannersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListMediaPlannersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListMediaPlannersResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Mediaplanners$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Mediaplanners$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/mediaPlanners').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$ListMediaPlannersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListMediaPlannersResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Mediaplanners$List extends StandardParameters {
    /**
     * Optional query string using the [Cloud API list filtering syntax](/authorized-buyers/apis/guides/list-filters). Supported columns for filtering are: * `name` * `displayName` * `ancestorNames`
     */
    filter?: string;
    /**
     * The maximum number of media planners to return. If unspecified, at most 100 media planners will be returned. The maximum value is 500; values above 500 will be coerced to 500.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return. This value is received from a previous `ListMediaPlanners` call in ListMediaPlannersResponse.nextPageToken.
     */
    pageToken?: string;
  }
}
