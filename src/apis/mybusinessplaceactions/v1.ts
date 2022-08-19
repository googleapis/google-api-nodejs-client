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
  GaxiosPromise,
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

export namespace mybusinessplaceactions_v1 {
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
   * My Business Place Actions API
   *
   * The My Business Place Actions API provides an interface for managing place action links of a location on Google.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const mybusinessplaceactions = google.mybusinessplaceactions('v1');
   * ```
   */
  export class Mybusinessplaceactions {
    context: APIRequestContext;
    locations: Resource$Locations;
    placeActionTypeMetadata: Resource$Placeactiontypemetadata;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.locations = new Resource$Locations(this.context);
      this.placeActionTypeMetadata = new Resource$Placeactiontypemetadata(
        this.context
      );
    }
  }

  /**
   * Day level availability.
   */
  export interface Schema$AvailableDay {
    /**
     * An available date for a fulfillment method. Assumed to be in merchant's timezone.
     */
    fulfillmentDate?: Schema$Date;
    /**
     * Unix timestamp. The last time till when, a user could place an order to be received by `fulfillment_date`. In other words, after last_ordering_time, fulfillment_date will no longer be shown as available.
     */
    lastOrderingTime?: string | null;
  }
  /**
   * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
   */
  export interface Schema$Date {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | null;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | null;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Fee details for the fulfillment method associated with the action.
   */
  export interface Schema$FeeDetails {
    /**
     * The base fee associated with the fulfillment method.
     */
    baseFee?: Schema$MinimumFee;
    /**
     * The fixed fee associated with the fulfillment method.
     */
    fixedFee?: Schema$FixedFee;
    /**
     * No fee for the fulfillment method.
     */
    noFee?: Schema$NoFee;
  }
  /**
   * The fixed fee required for the fulfillment method.
   */
  export interface Schema$FixedFee {
    /**
     * The amount of the fixed fee for the fulfillment method.
     */
    amount?: Schema$Money;
  }
  /**
   * The fulfillment option for an order online action.
   */
  export interface Schema$FulfillmentOption {
    /**
     * A list of days on which there is availability for this fulfillment method (preferably at least 2).
     */
    availableDay?: Schema$AvailableDay[];
    /**
     * Fee details for the fulfillment method.
     */
    feeDetails?: Schema$FeeDetails;
    /**
     * Fulfillment type
     */
    fulfillmentType?: string | null;
    /**
     * Minimum order for the fulfillment method associated with the action.
     */
    minimumOrder?: Schema$Money;
  }
  /**
   * Response message for PlaceActions.ListPlaceActionLinks.
   */
  export interface Schema$ListPlaceActionLinksResponse {
    /**
     * If there are more place action links than the requested page size, then this field is populated with a token to fetch the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * The returned list of place action links.
     */
    placeActionLinks?: Schema$PlaceActionLink[];
  }
  /**
   * Response message for PlaceActions.ListPlaceActionTypeMetadata.
   */
  export interface Schema$ListPlaceActionTypeMetadataResponse {
    /**
     * If the number of action types exceeded the requested page size, this field will be populated with a token to fetch the next page on a subsequent call to `placeActionTypeMetadata.list`. If there are no more results, this field will not be present in the response.
     */
    nextPageToken?: string | null;
    /**
     * A collection of metadata for the available place action types.
     */
    placeActionTypeMetadata?: Schema$PlaceActionTypeMetadata[];
  }
  /**
   * The minimum fee required for the fulfillment method.
   */
  export interface Schema$MinimumFee {
    /**
     * The base fee amount for the fulfillment method.
     */
    baseFeeAmount?: Schema$Money;
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
   * No fee required for the fulfillment method associated with the action.
   */
  export interface Schema$NoFee {}
  /**
   * Client version of the metadata for an order online action.
   */
  export interface Schema$OrderOnlineMetadata {
    /**
     * Available fulfillment options for an order online action.
     */
    fulfillmentOption?: Schema$FulfillmentOption[];
  }
  /**
   * Represents a place action link and its attributes.
   */
  export interface Schema$PlaceActionLink {
    /**
     * Output only. The time when the place action link was created.
     */
    createTime?: string | null;
    /**
     * Output only. Indicates whether this link can be edited by the client.
     */
    isEditable?: boolean | null;
    /**
     * Optional. Whether this link is preferred by the merchant. Only one link can be marked as preferred per place action type at a location. If a future request marks a different link as preferred for the same place action type, then the current preferred link (if any exists) will lose its preference.
     */
    isPreferred?: boolean | null;
    /**
     * Optional. The resource name, in the format `locations/{location_id\}/placeActionLinks/{place_action_link_id\}`. The name field will only be considered in UpdatePlaceActionLink and DeletePlaceActionLink requests for updating and deleting links respectively. However, it will be ignored in CreatePlaceActionLink request, where `place_action_link_id` will be assigned by the server on successful creation of a new link and returned as part of the response.
     */
    name?: string | null;
    /**
     * Optional. Metadata for the order online link. Supports action with PlaceActionType of SHOP_ONLINE.
     */
    orderOnlineMetadata?: Schema$OrderOnlineMetadata;
    /**
     * Required. The type of place action that can be performed using this link.
     */
    placeActionType?: string | null;
    /**
     * Output only. Specifies the provider type.
     */
    providerType?: string | null;
    /**
     * Output only. The time when the place action link was last modified.
     */
    updateTime?: string | null;
    /**
     * Required. The link uri. The same uri can be reused for different action types across different locations. However, only one place action link is allowed for each unique combination of (uri, place action type, location).
     */
    uri?: string | null;
  }
  /**
   * Metadata for supported place action types.
   */
  export interface Schema$PlaceActionTypeMetadata {
    /**
     * The localized display name for the attribute, if available; otherwise, the English display name.
     */
    displayName?: string | null;
    /**
     * The place action type.
     */
    placeActionType?: string | null;
  }

  export class Resource$Locations {
    context: APIRequestContext;
    placeActionLinks: Resource$Locations$Placeactionlinks;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.placeActionLinks = new Resource$Locations$Placeactionlinks(
        this.context
      );
    }
  }

  export class Resource$Locations$Placeactionlinks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a place action link associated with the specified location, and returns it. The request is considered duplicate if the `parent`, `place_action_link.uri` and `place_action_link.place_action_type` are the same as a previous request.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/mybusinessplaceactions.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const mybusinessplaceactions = google.mybusinessplaceactions('v1');
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
     *   const res = await mybusinessplaceactions.locations.placeActionLinks.create({
     *     // Required. The resource name of the location where to create this place action link. `locations/{location_id\}`.
     *     parent: 'locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "isEditable": false,
     *       //   "isPreferred": false,
     *       //   "name": "my_name",
     *       //   "orderOnlineMetadata": {},
     *       //   "placeActionType": "my_placeActionType",
     *       //   "providerType": "my_providerType",
     *       //   "updateTime": "my_updateTime",
     *       //   "uri": "my_uri"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "isEditable": false,
     *   //   "isPreferred": false,
     *   //   "name": "my_name",
     *   //   "orderOnlineMetadata": {},
     *   //   "placeActionType": "my_placeActionType",
     *   //   "providerType": "my_providerType",
     *   //   "updateTime": "my_updateTime",
     *   //   "uri": "my_uri"
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
      params: Params$Resource$Locations$Placeactionlinks$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Locations$Placeactionlinks$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PlaceActionLink>;
    create(
      params: Params$Resource$Locations$Placeactionlinks$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Locations$Placeactionlinks$Create,
      options: MethodOptions | BodyResponseCallback<Schema$PlaceActionLink>,
      callback: BodyResponseCallback<Schema$PlaceActionLink>
    ): void;
    create(
      params: Params$Resource$Locations$Placeactionlinks$Create,
      callback: BodyResponseCallback<Schema$PlaceActionLink>
    ): void;
    create(callback: BodyResponseCallback<Schema$PlaceActionLink>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Locations$Placeactionlinks$Create
        | BodyResponseCallback<Schema$PlaceActionLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PlaceActionLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PlaceActionLink>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$PlaceActionLink> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Locations$Placeactionlinks$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Locations$Placeactionlinks$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://mybusinessplaceactions.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/placeActionLinks').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PlaceActionLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PlaceActionLink>(parameters);
      }
    }

    /**
     * Deletes a place action link from the specified location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/mybusinessplaceactions.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const mybusinessplaceactions = google.mybusinessplaceactions('v1');
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
     *   const res = await mybusinessplaceactions.locations.placeActionLinks.delete({
     *     // Required. The resource name of the place action link to remove from the location.
     *     name: 'locations/my-location/placeActionLinks/my-placeActionLink',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
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
    delete(
      params: Params$Resource$Locations$Placeactionlinks$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Locations$Placeactionlinks$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Locations$Placeactionlinks$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Locations$Placeactionlinks$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Locations$Placeactionlinks$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Locations$Placeactionlinks$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Locations$Placeactionlinks$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Locations$Placeactionlinks$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://mybusinessplaceactions.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Gets the specified place action link.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/mybusinessplaceactions.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const mybusinessplaceactions = google.mybusinessplaceactions('v1');
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
     *   const res = await mybusinessplaceactions.locations.placeActionLinks.get({
     *     // Required. The name of the place action link to fetch.
     *     name: 'locations/my-location/placeActionLinks/my-placeActionLink',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "isEditable": false,
     *   //   "isPreferred": false,
     *   //   "name": "my_name",
     *   //   "orderOnlineMetadata": {},
     *   //   "placeActionType": "my_placeActionType",
     *   //   "providerType": "my_providerType",
     *   //   "updateTime": "my_updateTime",
     *   //   "uri": "my_uri"
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
      params: Params$Resource$Locations$Placeactionlinks$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Locations$Placeactionlinks$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PlaceActionLink>;
    get(
      params: Params$Resource$Locations$Placeactionlinks$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Locations$Placeactionlinks$Get,
      options: MethodOptions | BodyResponseCallback<Schema$PlaceActionLink>,
      callback: BodyResponseCallback<Schema$PlaceActionLink>
    ): void;
    get(
      params: Params$Resource$Locations$Placeactionlinks$Get,
      callback: BodyResponseCallback<Schema$PlaceActionLink>
    ): void;
    get(callback: BodyResponseCallback<Schema$PlaceActionLink>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Locations$Placeactionlinks$Get
        | BodyResponseCallback<Schema$PlaceActionLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PlaceActionLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PlaceActionLink>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$PlaceActionLink> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Locations$Placeactionlinks$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Locations$Placeactionlinks$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://mybusinessplaceactions.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PlaceActionLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PlaceActionLink>(parameters);
      }
    }

    /**
     * Lists the place action links for the specified location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/mybusinessplaceactions.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const mybusinessplaceactions = google.mybusinessplaceactions('v1');
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
     *   const res = await mybusinessplaceactions.locations.placeActionLinks.list({
     *     // Optional. A filter constraining the place action links to return. The response includes entries that match the filter. We support only the following filter: 1. place_action_type=XYZ where XYZ is a valid PlaceActionType.
     *     filter: 'placeholder-value',
     *     // Optional. How many place action links to return per page. Default of 10. The minimum is 1.
     *     pageSize: 'placeholder-value',
     *     // Optional. If specified, returns the next page of place action links.
     *     pageToken: 'placeholder-value',
     *     // Required. The name of the location whose place action links will be listed. `locations/{location_id\}`.
     *     parent: 'locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "placeActionLinks": []
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
      params: Params$Resource$Locations$Placeactionlinks$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Locations$Placeactionlinks$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListPlaceActionLinksResponse>;
    list(
      params: Params$Resource$Locations$Placeactionlinks$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Locations$Placeactionlinks$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListPlaceActionLinksResponse>,
      callback: BodyResponseCallback<Schema$ListPlaceActionLinksResponse>
    ): void;
    list(
      params: Params$Resource$Locations$Placeactionlinks$List,
      callback: BodyResponseCallback<Schema$ListPlaceActionLinksResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListPlaceActionLinksResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Locations$Placeactionlinks$List
        | BodyResponseCallback<Schema$ListPlaceActionLinksResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListPlaceActionLinksResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListPlaceActionLinksResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListPlaceActionLinksResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Locations$Placeactionlinks$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Locations$Placeactionlinks$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://mybusinessplaceactions.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/placeActionLinks').replace(
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
        createAPIRequest<Schema$ListPlaceActionLinksResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListPlaceActionLinksResponse>(
          parameters
        );
      }
    }

    /**
     * Updates the specified place action link and returns it.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/mybusinessplaceactions.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const mybusinessplaceactions = google.mybusinessplaceactions('v1');
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
     *   const res = await mybusinessplaceactions.locations.placeActionLinks.patch({
     *     // Optional. The resource name, in the format `locations/{location_id\}/placeActionLinks/{place_action_link_id\}`. The name field will only be considered in UpdatePlaceActionLink and DeletePlaceActionLink requests for updating and deleting links respectively. However, it will be ignored in CreatePlaceActionLink request, where `place_action_link_id` will be assigned by the server on successful creation of a new link and returned as part of the response.
     *     name: 'locations/my-location/placeActionLinks/my-placeActionLink',
     *     // Required. The specific fields to update. The only editable fields are `uri`, `place_action_type` and `is_preferred`. If the updated link already exists at the same location with the same `place_action_type` and `uri`, fails with an `ALREADY_EXISTS` error.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "isEditable": false,
     *       //   "isPreferred": false,
     *       //   "name": "my_name",
     *       //   "orderOnlineMetadata": {},
     *       //   "placeActionType": "my_placeActionType",
     *       //   "providerType": "my_providerType",
     *       //   "updateTime": "my_updateTime",
     *       //   "uri": "my_uri"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "isEditable": false,
     *   //   "isPreferred": false,
     *   //   "name": "my_name",
     *   //   "orderOnlineMetadata": {},
     *   //   "placeActionType": "my_placeActionType",
     *   //   "providerType": "my_providerType",
     *   //   "updateTime": "my_updateTime",
     *   //   "uri": "my_uri"
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
      params: Params$Resource$Locations$Placeactionlinks$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Locations$Placeactionlinks$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PlaceActionLink>;
    patch(
      params: Params$Resource$Locations$Placeactionlinks$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Locations$Placeactionlinks$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$PlaceActionLink>,
      callback: BodyResponseCallback<Schema$PlaceActionLink>
    ): void;
    patch(
      params: Params$Resource$Locations$Placeactionlinks$Patch,
      callback: BodyResponseCallback<Schema$PlaceActionLink>
    ): void;
    patch(callback: BodyResponseCallback<Schema$PlaceActionLink>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Locations$Placeactionlinks$Patch
        | BodyResponseCallback<Schema$PlaceActionLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PlaceActionLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PlaceActionLink>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$PlaceActionLink> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Locations$Placeactionlinks$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Locations$Placeactionlinks$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://mybusinessplaceactions.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PlaceActionLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PlaceActionLink>(parameters);
      }
    }
  }

  export interface Params$Resource$Locations$Placeactionlinks$Create
    extends StandardParameters {
    /**
     * Required. The resource name of the location where to create this place action link. `locations/{location_id\}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PlaceActionLink;
  }
  export interface Params$Resource$Locations$Placeactionlinks$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the place action link to remove from the location.
     */
    name?: string;
  }
  export interface Params$Resource$Locations$Placeactionlinks$Get
    extends StandardParameters {
    /**
     * Required. The name of the place action link to fetch.
     */
    name?: string;
  }
  export interface Params$Resource$Locations$Placeactionlinks$List
    extends StandardParameters {
    /**
     * Optional. A filter constraining the place action links to return. The response includes entries that match the filter. We support only the following filter: 1. place_action_type=XYZ where XYZ is a valid PlaceActionType.
     */
    filter?: string;
    /**
     * Optional. How many place action links to return per page. Default of 10. The minimum is 1.
     */
    pageSize?: number;
    /**
     * Optional. If specified, returns the next page of place action links.
     */
    pageToken?: string;
    /**
     * Required. The name of the location whose place action links will be listed. `locations/{location_id\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Locations$Placeactionlinks$Patch
    extends StandardParameters {
    /**
     * Optional. The resource name, in the format `locations/{location_id\}/placeActionLinks/{place_action_link_id\}`. The name field will only be considered in UpdatePlaceActionLink and DeletePlaceActionLink requests for updating and deleting links respectively. However, it will be ignored in CreatePlaceActionLink request, where `place_action_link_id` will be assigned by the server on successful creation of a new link and returned as part of the response.
     */
    name?: string;
    /**
     * Required. The specific fields to update. The only editable fields are `uri`, `place_action_type` and `is_preferred`. If the updated link already exists at the same location with the same `place_action_type` and `uri`, fails with an `ALREADY_EXISTS` error.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PlaceActionLink;
  }

  export class Resource$Placeactiontypemetadata {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns the list of available place action types for a location or country.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/mybusinessplaceactions.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const mybusinessplaceactions = google.mybusinessplaceactions('v1');
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
     *   const res = await mybusinessplaceactions.placeActionTypeMetadata.list({
     *     // Optional. A filter constraining the place action types to return metadata for. The response includes entries that match the filter. We support only the following filters: 1. location=XYZ where XYZ is a string indicating the resource name of a location, in the format `locations/{location_id\}`. 2. region_code=XYZ where XYZ is a Unicode CLDR region code to find available action types. If no filter is provided, all place action types are returned.
     *     filter: 'placeholder-value',
     *     // Optional. The IETF BCP-47 code of language to get display names in. If this language is not available, they will be provided in English.
     *     languageCode: 'placeholder-value',
     *     // Optional. How many action types to include per page. Default is 10, minimum is 1.
     *     pageSize: 'placeholder-value',
     *     // Optional. If specified, the next page of place action type metadata is retrieved. The `pageToken` is returned when a call to `placeActionTypeMetadata.list` returns more results than can fit into the requested page size.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "placeActionTypeMetadata": []
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
      params: Params$Resource$Placeactiontypemetadata$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Placeactiontypemetadata$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListPlaceActionTypeMetadataResponse>;
    list(
      params: Params$Resource$Placeactiontypemetadata$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Placeactiontypemetadata$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListPlaceActionTypeMetadataResponse>,
      callback: BodyResponseCallback<Schema$ListPlaceActionTypeMetadataResponse>
    ): void;
    list(
      params: Params$Resource$Placeactiontypemetadata$List,
      callback: BodyResponseCallback<Schema$ListPlaceActionTypeMetadataResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListPlaceActionTypeMetadataResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Placeactiontypemetadata$List
        | BodyResponseCallback<Schema$ListPlaceActionTypeMetadataResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListPlaceActionTypeMetadataResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListPlaceActionTypeMetadataResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListPlaceActionTypeMetadataResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Placeactiontypemetadata$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Placeactiontypemetadata$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://mybusinessplaceactions.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/placeActionTypeMetadata').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListPlaceActionTypeMetadataResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListPlaceActionTypeMetadataResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Placeactiontypemetadata$List
    extends StandardParameters {
    /**
     * Optional. A filter constraining the place action types to return metadata for. The response includes entries that match the filter. We support only the following filters: 1. location=XYZ where XYZ is a string indicating the resource name of a location, in the format `locations/{location_id\}`. 2. region_code=XYZ where XYZ is a Unicode CLDR region code to find available action types. If no filter is provided, all place action types are returned.
     */
    filter?: string;
    /**
     * Optional. The IETF BCP-47 code of language to get display names in. If this language is not available, they will be provided in English.
     */
    languageCode?: string;
    /**
     * Optional. How many action types to include per page. Default is 10, minimum is 1.
     */
    pageSize?: number;
    /**
     * Optional. If specified, the next page of place action type metadata is retrieved. The `pageToken` is returned when a call to `placeActionTypeMetadata.list` returns more results than can fit into the requested page size.
     */
    pageToken?: string;
  }
}
