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

export namespace merchantapi_datasources_v1 {
  export interface Options extends GlobalOptions {
    version: 'datasources_v1';
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
   * Merchant API
   *
   * Programmatically manage your Merchant Center Accounts.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const merchantapi = google.merchantapi('datasources_v1');
   * ```
   */
  export class Merchantapi {
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
   * The [data source](/merchant/api/guides/data-sources/overview) for the Merchant Center account.
   */
  export interface Schema$DataSource {
    /**
     * Output only. The data source id.
     */
    dataSourceId?: string | null;
    /**
     * Required. The displayed data source name in the Merchant Center UI.
     */
    displayName?: string | null;
    /**
     * Optional. The field is used only when data is managed through a file.
     */
    fileInput?: Schema$FileInput;
    /**
     * Output only. Determines the type of input to the data source. Based on the input some settings might not work. Only generic data sources can be created through the API.
     */
    input?: string | null;
    /**
     * The [local inventory](https://support.google.com/merchants/answer/7023001) data source.
     */
    localInventoryDataSource?: Schema$LocalInventoryDataSource;
    /**
     * The [merchant review](https://support.google.com/merchants/answer/7045996) data source.
     */
    merchantReviewDataSource?: Schema$MerchantReviewDataSource;
    /**
     * Required. Identifier. The name of the data source. Format: `accounts/{account\}/dataSources/{datasource\}`
     */
    name?: string | null;
    /**
     * The [primary data source](https://support.google.com/merchants/answer/7439058) for local and online products.
     */
    primaryProductDataSource?: Schema$PrimaryProductDataSource;
    /**
     * The [product review](https://support.google.com/merchants/answer/7045996) data source.
     */
    productReviewDataSource?: Schema$ProductReviewDataSource;
    /**
     * The [promotion](https://support.google.com/merchants/answer/2906014) data source.
     */
    promotionDataSource?: Schema$PromotionDataSource;
    /**
     * The [regional inventory](https://support.google.com/merchants/answer/7439058) data source.
     */
    regionalInventoryDataSource?: Schema$RegionalInventoryDataSource;
    /**
     * The [supplemental data source](https://support.google.com/merchants/answer/7439058) for local and online products.
     */
    supplementalProductDataSource?: Schema$SupplementalProductDataSource;
  }
  /**
   * Data source reference can be used to manage related data sources within the data source service.
   */
  export interface Schema$DataSourceReference {
    /**
     * Optional. The name of the primary data source. Format: `accounts/{account\}/dataSources/{datasource\}`
     */
    primaryDataSourceName?: string | null;
    /**
     * Self should be used to reference the primary data source itself.
     */
    self?: boolean | null;
    /**
     * Optional. The name of the supplemental data source. Format: `accounts/{account\}/dataSources/{datasource\}`
     */
    supplementalDataSourceName?: string | null;
  }
  /**
   * Default rule management of the data source.
   */
  export interface Schema$DefaultRule {
    /**
     * Required. The list of data sources linked in the [default rule](https://support.google.com/merchants/answer/7450276). This list is ordered by the default rule priority of joining the data. It might include none or multiple references to `self` and supplemental data sources. The list must not be empty. To link the data source to the default rule, you need to add a new reference to this list (in sequential order). To unlink the data source from the default rule, you need to remove the given reference from this list. Changing the order of this list will result in changing the priority of data sources in the default rule. For example, providing the following list: [`1001`, `self`] will take attribute values from supplemental data source `1001`, and fallback to `self` if the attribute is not set in `1001`.
     */
    takeFromDataSources?: Schema$DataSourceReference[];
  }
  /**
   * Destinations also known as [Marketing methods](https://support.google.com/merchants/answer/15130232) selections.
   */
  export interface Schema$Destination {
    /**
     * [Marketing methods](https://support.google.com/merchants/answer/15130232) (also known as destination) selections.
     */
    destination?: string | null;
    /**
     * The state of the destination.
     */
    state?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Request message for the FetchDataSource method.
   */
  export interface Schema$FetchDataSourceRequest {}
  /**
   * Fetch details to deliver the data source.
   */
  export interface Schema$FetchSettings {
    /**
     * Optional. The day of the month when the data source file should be fetched (1-31). This field can only be set for monthly frequency.
     */
    dayOfMonth?: number | null;
    /**
     * Optional. The day of the week when the data source file should be fetched. This field can only be set for weekly frequency.
     */
    dayOfWeek?: string | null;
    /**
     * Optional. Enables or pauses the fetch schedule.
     */
    enabled?: boolean | null;
    /**
     * Optional. The URL where the data source file can be fetched. Google Merchant Center supports automatic scheduled uploads using the HTTP, HTTPS or SFTP protocols, so the value will need to be a valid link using one of those three protocols. Immutable for Google Sheets files.
     */
    fetchUri?: string | null;
    /**
     * Required. The frequency describing fetch schedule.
     */
    frequency?: string | null;
    /**
     * Optional. An optional password for fetch_uri. Used for [submitting data sources through SFTP](https://support.google.com/merchants/answer/13813117).
     */
    password?: string | null;
    /**
     * Optional. The hour of the day when the data source file should be fetched. Minutes and seconds are not supported and will be ignored.
     */
    timeOfDay?: Schema$TimeOfDay;
    /**
     * Optional. [Time zone](https://cldr.unicode.org) used for schedule. UTC by default. For example, "America/Los_Angeles".
     */
    timeZone?: string | null;
    /**
     * Optional. An optional user name for fetch_uri. Used for [submitting data sources through SFTP](https://support.google.com/merchants/answer/13813117).
     */
    username?: string | null;
  }
  /**
   * The data specific for file data sources. This field is empty for other data source inputs.
   */
  export interface Schema$FileInput {
    /**
     * Optional. Fetch details to deliver the data source. It contains settings for `FETCH` and `GOOGLE_SHEETS` file input types. The required fields vary based on the frequency of fetching.
     */
    fetchSettings?: Schema$FetchSettings;
    /**
     * Output only. The type of file input.
     */
    fileInputType?: string | null;
    /**
     * Optional. The file name of the data source. Required for `UPLOAD` file input type.
     */
    fileName?: string | null;
  }
  /**
   * The file upload of a specific data source, that is, the result of the retrieval of the data source at a certain timestamp computed asynchronously when the data source processing is finished. Only applicable to file data sources.
   */
  export interface Schema$FileUpload {
    /**
     * Output only. The data source id.
     */
    dataSourceId?: string | null;
    /**
     * Output only. The list of issues occurring in the data source.
     */
    issues?: Schema$Issue[];
    /**
     * Output only. The number of items in the data source that were created.
     */
    itemsCreated?: string | null;
    /**
     * Output only. The number of items in the data source that were processed.
     */
    itemsTotal?: string | null;
    /**
     * Output only. The number of items in the data source that were updated.
     */
    itemsUpdated?: string | null;
    /**
     * Identifier. The name of the data source file upload. Format: `{datasource.name=accounts/{account\}/dataSources/{datasource\}/fileUploads/{fileupload\}\}`
     */
    name?: string | null;
    /**
     * Output only. The processing state of the data source.
     */
    processingState?: string | null;
    /**
     * Output only. The date at which the file of the data source was uploaded.
     */
    uploadTime?: string | null;
  }
  /**
   * An error occurring in the data source, like "invalid price".
   */
  export interface Schema$Issue {
    /**
     * Output only. The code of the error, for example, "validation/invalid_value". Returns "?" if the code is unknown.
     */
    code?: string | null;
    /**
     * Output only. The number of occurrences of the error in the file upload.
     */
    count?: string | null;
    /**
     * Output only. The error description, for example, "Your data source contains items which have too many attributes, or are too big. These items will be dropped".
     */
    description?: string | null;
    /**
     * Output only. Link to the documentation explaining the issue in more details, if available.
     */
    documentationUri?: string | null;
    /**
     * Output only. The severity of the issue.
     */
    severity?: string | null;
    /**
     * Output only. The title of the issue, for example, "Item too big".
     */
    title?: string | null;
  }
  /**
   * Response message for the ListDataSources method.
   */
  export interface Schema$ListDataSourcesResponse {
    /**
     * The data sources from the specified account.
     */
    dataSources?: Schema$DataSource[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * The local inventory data source type is only available for file inputs and can't be used to create API local inventory data sources.
   */
  export interface Schema$LocalInventoryDataSource {
    /**
     * Required. Immutable. The two-letter ISO 639-1 language of the items to which the local inventory is provided.
     */
    contentLanguage?: string | null;
    /**
     * Required. Immutable. The feed label of the offers to which the local inventory is provided. Must be less than or equal to 20 uppercase letters (A-Z), numbers (0-9), and dashes (-). See also [migration to feed labels](https://developers.google.com/shopping-content/guides/products/feed-labels).
     */
    feedLabel?: string | null;
  }
  /**
   * The merchant review data source.
   */
  export interface Schema$MerchantReviewDataSource {}
  /**
   * The primary data source for local and online products.
   */
  export interface Schema$PrimaryProductDataSource {
    /**
     * Optional. Immutable. The two-letter ISO 639-1 language of the items in the data source. `feedLabel` and `contentLanguage` must be either both set or unset. The fields can only be unset for data sources without file input. If set, the data source will only accept products matching this combination. If unset, the data source will accept products without that restriction.
     */
    contentLanguage?: string | null;
    /**
     * Optional. The countries where the items may be displayed. Represented as a [CLDR territory code](https://github.com/unicode-org/cldr/blob/latest/common/main/en.xml).
     */
    countries?: string[] | null;
    /**
     * Optional. Default rule management of the data source. If set, the linked data sources will be replaced.
     */
    defaultRule?: Schema$DefaultRule;
    /**
     * Optional. A list of destinations describing where products of the data source can be shown. When retrieving the data source, the list contains all the destinations that can be used for the data source, including the ones that are disabled for the data source but enabled for the account. Only destinations that are enabled on the account, for example through program participation, can be enabled on the data source. If unset, during creation, the destinations will be inherited based on the account level program participation. If set, during creation or update, the data source will be set only for the specified destinations. Updating this field requires at least one destination.
     */
    destinations?: Schema$Destination[];
    /**
     * Optional. Immutable. The feed label that is specified on the data source level. Must be less than or equal to 20 uppercase letters (A-Z), numbers (0-9), and dashes (-). See also [migration to feed labels](https://developers.google.com/shopping-content/guides/products/feed-labels). `feedLabel` and `contentLanguage` must be either both set or unset for data sources with product content type. They must be set for data sources with a file input. If set, the data source will only accept products matching this combination. If unset, the data source will accept products without that restriction.
     */
    feedLabel?: string | null;
    /**
     * Optional. Immutable. Determines whether the products of this data source are **only** targeting local destinations. Legacy local products are prefixed with `local~` in the product resource ID. For example, `accounts/123/products/local~en~US~sku123`.
     */
    legacyLocal?: boolean | null;
  }
  /**
   * The change that happened to the product including old value, new value, country code as the region code and reporting context.
   */
  export interface Schema$ProductChange {
    /**
     * The new value of the changed resource or attribute. If empty, it means that the product was deleted. Will have one of these values : (`approved`, `pending`, `disapproved`, ``)
     */
    newValue?: string | null;
    /**
     * The old value of the changed resource or attribute. If empty, it means that the product was created. Will have one of these values : (`approved`, `pending`, `disapproved`, ``)
     */
    oldValue?: string | null;
    /**
     * Countries that have the change (if applicable). Represented in the ISO 3166 format.
     */
    regionCode?: string | null;
    /**
     * Reporting contexts that have the change (if applicable). Currently this field supports only (`SHOPPING_ADS`, `LOCAL_INVENTORY_ADS`, `YOUTUBE_SHOPPING`, `YOUTUBE_CHECKOUT`, `YOUTUBE_AFFILIATE`) from the enum value [ReportingContextEnum](/merchant/api/reference/rest/Shared.Types/ReportingContextEnum)
     */
    reportingContext?: string | null;
  }
  /**
   * The product review data source.
   */
  export interface Schema$ProductReviewDataSource {}
  /**
   * The message that the merchant will receive to notify about product status change event
   */
  export interface Schema$ProductStatusChangeMessage {
    /**
     * The target account that owns the entity that changed. Format : `accounts/{merchant_id\}`
     */
    account?: string | null;
    /**
     * The attribute in the resource that changed, in this case it will be always `Status`.
     */
    attribute?: string | null;
    /**
     * A message to describe the change that happened to the product
     */
    changes?: Schema$ProductChange[];
    /**
     * The time at which the event was generated. If you want to order the notification messages you receive you should rely on this field not on the order of receiving the notifications.
     */
    eventTime?: string | null;
    /**
     * Optional. The product expiration time. This field will not be set if the notification is sent for a product deletion event.
     */
    expirationTime?: string | null;
    /**
     * The account that manages the merchant's account. can be the same as merchant id if it is standalone account. Format : `accounts/{service_provider_id\}`
     */
    managingAccount?: string | null;
    /**
     * The product name. Format: `accounts/{account\}/products/{product\}`
     */
    resource?: string | null;
    /**
     * The product id.
     */
    resourceId?: string | null;
    /**
     * The resource that changed, in this case it will always be `Product`.
     */
    resourceType?: string | null;
  }
  /**
   * The promotion data source.
   */
  export interface Schema$PromotionDataSource {
    /**
     * Required. Immutable. The two-letter ISO 639-1 language of the items in the data source.
     */
    contentLanguage?: string | null;
    /**
     * Required. Immutable. The target country used as part of the unique identifier. Represented as a [CLDR territory code](https://github.com/unicode-org/cldr/blob/latest/common/main/en.xml). Promotions are only available in selected [countries](https://support.google.com/merchants/answer/4588460).
     */
    targetCountry?: string | null;
  }
  export interface Schema$RegionalInventoryDataSource {
    /**
     * Required. Immutable. The two-letter ISO 639-1 language of the items to which the regional inventory is provided.
     */
    contentLanguage?: string | null;
    /**
     * Required. Immutable. The feed label of the offers to which the regional inventory is provided. Must be less than or equal to 20 uppercase letters (A-Z), numbers (0-9), and dashes (-). See also [migration to feed labels](https://developers.google.com/shopping-content/guides/products/feed-labels).
     */
    feedLabel?: string | null;
  }
  /**
   * The [supplemental data source](https://developers.google.com/merchant/api/guides/data-sources/api-sources#link-supplemental-data-source) for local and online products. After creation,you should make sure to link the supplemental product data source into one or more primary product data sources.
   */
  export interface Schema$SupplementalProductDataSource {
    /**
     * Optional. Immutable. The two-letter ISO 639-1 language of the items in the data source. `feedLabel` and `contentLanguage` must be either both set or unset. The fields can only be unset for data sources without file input. If set, the data source will only accept products matching this combination. If unset, the data source will accept produts without that restriction.
     */
    contentLanguage?: string | null;
    /**
     * Optional. Immutable. The feed label that is specified on the data source level. Must be less than or equal to 20 uppercase letters (A-Z), numbers (0-9), and dashes (-). See also [migration to feed labels](https://developers.google.com/shopping-content/guides/products/feed-labels). `feedLabel` and `contentLanguage` must be either both set or unset for data sources with product content type. They must be set for data sources with a file input. The fields must be unset for data sources without file input. If set, the data source will only accept products matching this combination. If unset, the data source will accept produts without that restriction.
     */
    feedLabel?: string | null;
    /**
     * Output only. The (unordered and deduplicated) list of all primary data sources linked to this data source in either default or custom rules. Supplemental data source cannot be deleted before all links are removed.
     */
    referencingPrimaryDataSources?: Schema$DataSourceReference[];
  }
  /**
   * Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
   */
  export interface Schema$TimeOfDay {
    /**
     * Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less than or equal to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
     */
    hours?: number | null;
    /**
     * Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59.
     */
    minutes?: number | null;
    /**
     * Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999.
     */
    nanos?: number | null;
    /**
     * Seconds of a minute. Must be greater than or equal to 0 and typically must be less than or equal to 59. An API may allow the value 60 if it allows leap-seconds.
     */
    seconds?: number | null;
  }

  export class Resource$Accounts {
    context: APIRequestContext;
    dataSources: Resource$Accounts$Datasources;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.dataSources = new Resource$Accounts$Datasources(this.context);
    }
  }

  export class Resource$Accounts$Datasources {
    context: APIRequestContext;
    fileUploads: Resource$Accounts$Datasources$Fileuploads;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.fileUploads = new Resource$Accounts$Datasources$Fileuploads(
        this.context
      );
    }

    /**
     * Creates the new data source configuration for the given account. This method always creates a new data source.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/merchantapi.googleapis.com
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
     * const merchantapi = google.merchantapi('datasources_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await merchantapi.accounts.dataSources.create({
     *     // Required. The account where this data source will be created. Format: `accounts/{account\}`
     *     parent: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "dataSourceId": "my_dataSourceId",
     *       //   "displayName": "my_displayName",
     *       //   "fileInput": {},
     *       //   "input": "my_input",
     *       //   "localInventoryDataSource": {},
     *       //   "merchantReviewDataSource": {},
     *       //   "name": "my_name",
     *       //   "primaryProductDataSource": {},
     *       //   "productReviewDataSource": {},
     *       //   "promotionDataSource": {},
     *       //   "regionalInventoryDataSource": {},
     *       //   "supplementalProductDataSource": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dataSourceId": "my_dataSourceId",
     *   //   "displayName": "my_displayName",
     *   //   "fileInput": {},
     *   //   "input": "my_input",
     *   //   "localInventoryDataSource": {},
     *   //   "merchantReviewDataSource": {},
     *   //   "name": "my_name",
     *   //   "primaryProductDataSource": {},
     *   //   "productReviewDataSource": {},
     *   //   "promotionDataSource": {},
     *   //   "regionalInventoryDataSource": {},
     *   //   "supplementalProductDataSource": {}
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
      params: Params$Resource$Accounts$Datasources$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Accounts$Datasources$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DataSource>>;
    create(
      params: Params$Resource$Accounts$Datasources$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Accounts$Datasources$Create,
      options: MethodOptions | BodyResponseCallback<Schema$DataSource>,
      callback: BodyResponseCallback<Schema$DataSource>
    ): void;
    create(
      params: Params$Resource$Accounts$Datasources$Create,
      callback: BodyResponseCallback<Schema$DataSource>
    ): void;
    create(callback: BodyResponseCallback<Schema$DataSource>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Accounts$Datasources$Create
        | BodyResponseCallback<Schema$DataSource>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DataSource>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DataSource>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$DataSource>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Datasources$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Datasources$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://merchantapi.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/datasources/v1/{+parent}/dataSources').replace(
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
        createAPIRequest<Schema$DataSource>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DataSource>(parameters);
      }
    }

    /**
     * Deletes a data source from your Merchant Center account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/merchantapi.googleapis.com
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
     * const merchantapi = google.merchantapi('datasources_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await merchantapi.accounts.dataSources.delete({
     *     // Required. The name of the data source to delete. Format: `accounts/{account\}/dataSources/{datasource\}`
     *     name: 'accounts/my-account/dataSources/my-dataSource',
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
      params: Params$Resource$Accounts$Datasources$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Accounts$Datasources$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Accounts$Datasources$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Accounts$Datasources$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Accounts$Datasources$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Accounts$Datasources$Delete
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Datasources$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Datasources$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://merchantapi.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/datasources/v1/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Performs the data fetch immediately (even outside fetch schedule) on a data source from your Merchant Center Account. If you need to call this method more than once per day, you should use the Products service to update your product data instead. This method only works on data sources with a file input set.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/merchantapi.googleapis.com
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
     * const merchantapi = google.merchantapi('datasources_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await merchantapi.accounts.dataSources.fetch({
     *     // Required. The name of the data source resource to fetch. Format: `accounts/{account\}/dataSources/{datasource\}`
     *     name: 'accounts/my-account/dataSources/my-dataSource',
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
    fetch(
      params: Params$Resource$Accounts$Datasources$Fetch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    fetch(
      params?: Params$Resource$Accounts$Datasources$Fetch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    fetch(
      params: Params$Resource$Accounts$Datasources$Fetch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    fetch(
      params: Params$Resource$Accounts$Datasources$Fetch,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    fetch(
      params: Params$Resource$Accounts$Datasources$Fetch,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    fetch(callback: BodyResponseCallback<Schema$Empty>): void;
    fetch(
      paramsOrCallback?:
        | Params$Resource$Accounts$Datasources$Fetch
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Datasources$Fetch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Datasources$Fetch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://merchantapi.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/datasources/v1/{+name}:fetch').replace(
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Retrieves the data source configuration for the given account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/merchantapi.googleapis.com
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
     * const merchantapi = google.merchantapi('datasources_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await merchantapi.accounts.dataSources.get({
     *     // Required. The name of the data source to retrieve. Format: `accounts/{account\}/dataSources/{datasource\}`
     *     name: 'accounts/my-account/dataSources/my-dataSource',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dataSourceId": "my_dataSourceId",
     *   //   "displayName": "my_displayName",
     *   //   "fileInput": {},
     *   //   "input": "my_input",
     *   //   "localInventoryDataSource": {},
     *   //   "merchantReviewDataSource": {},
     *   //   "name": "my_name",
     *   //   "primaryProductDataSource": {},
     *   //   "productReviewDataSource": {},
     *   //   "promotionDataSource": {},
     *   //   "regionalInventoryDataSource": {},
     *   //   "supplementalProductDataSource": {}
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
      params: Params$Resource$Accounts$Datasources$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Accounts$Datasources$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DataSource>>;
    get(
      params: Params$Resource$Accounts$Datasources$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounts$Datasources$Get,
      options: MethodOptions | BodyResponseCallback<Schema$DataSource>,
      callback: BodyResponseCallback<Schema$DataSource>
    ): void;
    get(
      params: Params$Resource$Accounts$Datasources$Get,
      callback: BodyResponseCallback<Schema$DataSource>
    ): void;
    get(callback: BodyResponseCallback<Schema$DataSource>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Datasources$Get
        | BodyResponseCallback<Schema$DataSource>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DataSource>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DataSource>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$DataSource>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Datasources$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Datasources$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://merchantapi.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/datasources/v1/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$DataSource>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DataSource>(parameters);
      }
    }

    /**
     * Lists the configurations for data sources for the given account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/merchantapi.googleapis.com
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
     * const merchantapi = google.merchantapi('datasources_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await merchantapi.accounts.dataSources.list({
     *     // Optional. The maximum number of data sources to return. The service may return fewer than this value. The maximum value is 1000; values above 1000 will be coerced to 1000. If unspecified, the maximum number of data sources will be returned.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListDataSources` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDataSources` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The account to list data sources for. Format: `accounts/{account\}`
     *     parent: 'accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dataSources": [],
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
      params: Params$Resource$Accounts$Datasources$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Accounts$Datasources$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListDataSourcesResponse>>;
    list(
      params: Params$Resource$Accounts$Datasources$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Datasources$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDataSourcesResponse>,
      callback: BodyResponseCallback<Schema$ListDataSourcesResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Datasources$List,
      callback: BodyResponseCallback<Schema$ListDataSourcesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListDataSourcesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Datasources$List
        | BodyResponseCallback<Schema$ListDataSourcesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDataSourcesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDataSourcesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListDataSourcesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Datasources$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Datasources$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://merchantapi.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/datasources/v1/{+parent}/dataSources').replace(
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
        createAPIRequest<Schema$ListDataSourcesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDataSourcesResponse>(parameters);
      }
    }

    /**
     * Updates the existing data source configuration. The fields that are set in the update mask but not provided in the resource will be deleted.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/merchantapi.googleapis.com
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
     * const merchantapi = google.merchantapi('datasources_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await merchantapi.accounts.dataSources.patch({
     *     // Required. Identifier. The name of the data source. Format: `accounts/{account\}/dataSources/{datasource\}`
     *     name: 'accounts/my-account/dataSources/my-dataSource',
     *     // Required. The list of data source fields to be updated. Fields specified in the update mask without a value specified in the body will be deleted from the data source. Providing special "*" value for full data source replacement is not supported. For example, If you insert `updateMask=displayName` in the request, it will only update the `displayName` leaving all other fields untouched.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "dataSourceId": "my_dataSourceId",
     *       //   "displayName": "my_displayName",
     *       //   "fileInput": {},
     *       //   "input": "my_input",
     *       //   "localInventoryDataSource": {},
     *       //   "merchantReviewDataSource": {},
     *       //   "name": "my_name",
     *       //   "primaryProductDataSource": {},
     *       //   "productReviewDataSource": {},
     *       //   "promotionDataSource": {},
     *       //   "regionalInventoryDataSource": {},
     *       //   "supplementalProductDataSource": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dataSourceId": "my_dataSourceId",
     *   //   "displayName": "my_displayName",
     *   //   "fileInput": {},
     *   //   "input": "my_input",
     *   //   "localInventoryDataSource": {},
     *   //   "merchantReviewDataSource": {},
     *   //   "name": "my_name",
     *   //   "primaryProductDataSource": {},
     *   //   "productReviewDataSource": {},
     *   //   "promotionDataSource": {},
     *   //   "regionalInventoryDataSource": {},
     *   //   "supplementalProductDataSource": {}
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
      params: Params$Resource$Accounts$Datasources$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Accounts$Datasources$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DataSource>>;
    patch(
      params: Params$Resource$Accounts$Datasources$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Accounts$Datasources$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$DataSource>,
      callback: BodyResponseCallback<Schema$DataSource>
    ): void;
    patch(
      params: Params$Resource$Accounts$Datasources$Patch,
      callback: BodyResponseCallback<Schema$DataSource>
    ): void;
    patch(callback: BodyResponseCallback<Schema$DataSource>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Accounts$Datasources$Patch
        | BodyResponseCallback<Schema$DataSource>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DataSource>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DataSource>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$DataSource>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Datasources$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Datasources$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://merchantapi.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/datasources/v1/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$DataSource>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DataSource>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Datasources$Create
    extends StandardParameters {
    /**
     * Required. The account where this data source will be created. Format: `accounts/{account\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DataSource;
  }
  export interface Params$Resource$Accounts$Datasources$Delete
    extends StandardParameters {
    /**
     * Required. The name of the data source to delete. Format: `accounts/{account\}/dataSources/{datasource\}`
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Datasources$Fetch
    extends StandardParameters {
    /**
     * Required. The name of the data source resource to fetch. Format: `accounts/{account\}/dataSources/{datasource\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$FetchDataSourceRequest;
  }
  export interface Params$Resource$Accounts$Datasources$Get
    extends StandardParameters {
    /**
     * Required. The name of the data source to retrieve. Format: `accounts/{account\}/dataSources/{datasource\}`
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Datasources$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of data sources to return. The service may return fewer than this value. The maximum value is 1000; values above 1000 will be coerced to 1000. If unspecified, the maximum number of data sources will be returned.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListDataSources` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDataSources` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The account to list data sources for. Format: `accounts/{account\}`
     */
    parent?: string;
  }
  export interface Params$Resource$Accounts$Datasources$Patch
    extends StandardParameters {
    /**
     * Required. Identifier. The name of the data source. Format: `accounts/{account\}/dataSources/{datasource\}`
     */
    name?: string;
    /**
     * Required. The list of data source fields to be updated. Fields specified in the update mask without a value specified in the body will be deleted from the data source. Providing special "*" value for full data source replacement is not supported. For example, If you insert `updateMask=displayName` in the request, it will only update the `displayName` leaving all other fields untouched.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DataSource;
  }

  export class Resource$Accounts$Datasources$Fileuploads {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the latest data source file upload. Only the `latest` alias is accepted for a file upload.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/merchantapi.googleapis.com
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
     * const merchantapi = google.merchantapi('datasources_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await merchantapi.accounts.dataSources.fileUploads.get({
     *     // Required. The name of the data source file upload to retrieve. Format: `accounts/{account\}/dataSources/{datasource\}/fileUploads/latest`
     *     name: 'accounts/my-account/dataSources/my-dataSource/fileUploads/my-fileUpload',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dataSourceId": "my_dataSourceId",
     *   //   "issues": [],
     *   //   "itemsCreated": "my_itemsCreated",
     *   //   "itemsTotal": "my_itemsTotal",
     *   //   "itemsUpdated": "my_itemsUpdated",
     *   //   "name": "my_name",
     *   //   "processingState": "my_processingState",
     *   //   "uploadTime": "my_uploadTime"
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
      params: Params$Resource$Accounts$Datasources$Fileuploads$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Accounts$Datasources$Fileuploads$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$FileUpload>>;
    get(
      params: Params$Resource$Accounts$Datasources$Fileuploads$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounts$Datasources$Fileuploads$Get,
      options: MethodOptions | BodyResponseCallback<Schema$FileUpload>,
      callback: BodyResponseCallback<Schema$FileUpload>
    ): void;
    get(
      params: Params$Resource$Accounts$Datasources$Fileuploads$Get,
      callback: BodyResponseCallback<Schema$FileUpload>
    ): void;
    get(callback: BodyResponseCallback<Schema$FileUpload>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Datasources$Fileuploads$Get
        | BodyResponseCallback<Schema$FileUpload>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FileUpload>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FileUpload>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$FileUpload>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Datasources$Fileuploads$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Datasources$Fileuploads$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://merchantapi.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/datasources/v1/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$FileUpload>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FileUpload>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Datasources$Fileuploads$Get
    extends StandardParameters {
    /**
     * Required. The name of the data source file upload to retrieve. Format: `accounts/{account\}/dataSources/{datasource\}/fileUploads/latest`
     */
    name?: string;
  }
}
