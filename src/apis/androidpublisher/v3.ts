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
/* eslint-disable @typescript-eslint/class-name-casing */
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

export namespace androidpublisher_v3 {
  export interface Options extends GlobalOptions {
    version: 'v3';
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
   * Google Play Android Developer API
   *
   * Lets Android application developers access their Google Play accounts.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const androidpublisher = google.androidpublisher('v3');
   * ```
   */
  export class Androidpublisher {
    context: APIRequestContext;
    edits: Resource$Edits;
    generatedapks: Resource$Generatedapks;
    grants: Resource$Grants;
    inappproducts: Resource$Inappproducts;
    internalappsharingartifacts: Resource$Internalappsharingartifacts;
    monetization: Resource$Monetization;
    orders: Resource$Orders;
    purchases: Resource$Purchases;
    reviews: Resource$Reviews;
    systemapks: Resource$Systemapks;
    users: Resource$Users;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.edits = new Resource$Edits(this.context);
      this.generatedapks = new Resource$Generatedapks(this.context);
      this.grants = new Resource$Grants(this.context);
      this.inappproducts = new Resource$Inappproducts(this.context);
      this.internalappsharingartifacts =
        new Resource$Internalappsharingartifacts(this.context);
      this.monetization = new Resource$Monetization(this.context);
      this.orders = new Resource$Orders(this.context);
      this.purchases = new Resource$Purchases(this.context);
      this.reviews = new Resource$Reviews(this.context);
      this.systemapks = new Resource$Systemapks(this.context);
      this.users = new Resource$Users(this.context);
    }
  }

  /**
   * Information about an APK. The resource for ApksService.
   */
  export interface Schema$Apk {
    /**
     * Information about the binary payload of this APK.
     */
    binary?: Schema$ApkBinary;
    /**
     * The version code of the APK, as specified in the manifest file.
     */
    versionCode?: number | null;
  }
  /**
   * Represents the binary payload of an APK.
   */
  export interface Schema$ApkBinary {
    /**
     * A sha1 hash of the APK payload, encoded as a hex string and matching the output of the sha1sum command.
     */
    sha1?: string | null;
    /**
     * A sha256 hash of the APK payload, encoded as a hex string and matching the output of the sha256sum command.
     */
    sha256?: string | null;
  }
  /**
   * Request to create a new externally hosted APK.
   */
  export interface Schema$ApksAddExternallyHostedRequest {
    /**
     * The definition of the externally-hosted APK and where it is located.
     */
    externallyHostedApk?: Schema$ExternallyHostedApk;
  }
  /**
   * Response for creating a new externally hosted APK.
   */
  export interface Schema$ApksAddExternallyHostedResponse {
    /**
     * The definition of the externally-hosted APK and where it is located.
     */
    externallyHostedApk?: Schema$ExternallyHostedApk;
  }
  /**
   * Response listing all APKs.
   */
  export interface Schema$ApksListResponse {
    /**
     * All APKs.
     */
    apks?: Schema$Apk[];
    /**
     * The kind of this response ("androidpublisher#apksListResponse").
     */
    kind?: string | null;
  }
  /**
   * The app details. The resource for DetailsService.
   */
  export interface Schema$AppDetails {
    /**
     * The user-visible support email for this app.
     */
    contactEmail?: string | null;
    /**
     * The user-visible support telephone number for this app.
     */
    contactPhone?: string | null;
    /**
     * The user-visible website for this app.
     */
    contactWebsite?: string | null;
    /**
     * Default language code, in BCP 47 format (eg "en-US").
     */
    defaultLanguage?: string | null;
  }
  /**
   * An app edit. The resource for EditsService.
   */
  export interface Schema$AppEdit {
    /**
     * Output only. The time (as seconds since Epoch) at which the edit will expire and will be no longer valid for use.
     */
    expiryTimeSeconds?: string | null;
    /**
     * Output only. Identifier of the edit. Can be used in subsequent API calls.
     */
    id?: string | null;
  }
  /**
   * Information about an app bundle. The resource for BundlesService.
   */
  export interface Schema$Bundle {
    /**
     * A sha1 hash of the upload payload, encoded as a hex string and matching the output of the sha1sum command.
     */
    sha1?: string | null;
    /**
     * A sha256 hash of the upload payload, encoded as a hex string and matching the output of the sha256sum command.
     */
    sha256?: string | null;
    /**
     * The version code of the Android App Bundle, as specified in the Android App Bundle's base module APK manifest file.
     */
    versionCode?: number | null;
  }
  /**
   * Response listing all app bundles.
   */
  export interface Schema$BundlesListResponse {
    /**
     * All app bundles.
     */
    bundles?: Schema$Bundle[];
    /**
     * The kind of this response ("androidpublisher#bundlesListResponse").
     */
    kind?: string | null;
  }
  /**
   * An entry of conversation between user and developer.
   */
  export interface Schema$Comment {
    /**
     * A comment from a developer.
     */
    developerComment?: Schema$DeveloperComment;
    /**
     * A comment from a user.
     */
    userComment?: Schema$UserComment;
  }
  /**
   * Converted other regions prices.
   */
  export interface Schema$ConvertedOtherRegionsPrice {
    /**
     * Price in EUR to use for the "Other regions" location exclusive of taxes.
     */
    eurPrice?: Schema$Money;
    /**
     * Price in USD to use for the "Other regions" location exclusive of taxes.
     */
    usdPrice?: Schema$Money;
  }
  /**
   * A converted region price.
   */
  export interface Schema$ConvertedRegionPrice {
    /**
     * The converted price tax inclusive.
     */
    price?: Schema$Money;
    /**
     * The region code of the region.
     */
    regionCode?: string | null;
    /**
     * The tax amount of the converted price.
     */
    taxAmount?: Schema$Money;
  }
  /**
   * Request message for ConvertRegionPrices.
   */
  export interface Schema$ConvertRegionPricesRequest {
    /**
     * The intital price to convert other regions from. Tax exclusive.
     */
    price?: Schema$Money;
  }
  /**
   * Response message for ConvertRegionPrices.
   */
  export interface Schema$ConvertRegionPricesResponse {
    /**
     * Converted other regions prices in USD and EUR, to use for countries where Play doesn't support a country's local currency.
     */
    convertedOtherRegionsPrice?: Schema$ConvertedOtherRegionsPrice;
    /**
     * Map from region code to converted region price.
     */
    convertedRegionPrices?: {[key: string]: Schema$ConvertedRegionPrice} | null;
  }
  /**
   * Country targeting specification.
   */
  export interface Schema$CountryTargeting {
    /**
     * Countries to target, specified as two letter [CLDR codes](https://unicode.org/cldr/charts/latest/supplemental/territory_containment_un_m_49.html).
     */
    countries?: string[] | null;
    /**
     * Include "rest of world" as well as explicitly targeted countries.
     */
    includeRestOfWorld?: boolean | null;
  }
  /**
   * Represents a deobfuscation file.
   */
  export interface Schema$DeobfuscationFile {
    /**
     * The type of the deobfuscation file.
     */
    symbolType?: string | null;
  }
  /**
   * Responses for the upload.
   */
  export interface Schema$DeobfuscationFilesUploadResponse {
    /**
     * The uploaded Deobfuscation File configuration.
     */
    deobfuscationFile?: Schema$DeobfuscationFile;
  }
  /**
   * Developer entry from conversation between user and developer.
   */
  export interface Schema$DeveloperComment {
    /**
     * The last time at which this comment was updated.
     */
    lastModified?: Schema$Timestamp;
    /**
     * The content of the comment, i.e. reply body.
     */
    text?: string | null;
  }
  /**
   * Characteristics of the user's device.
   */
  export interface Schema$DeviceMetadata {
    /**
     * Device CPU make, e.g. "Qualcomm"
     */
    cpuMake?: string | null;
    /**
     * Device CPU model, e.g. "MSM8974"
     */
    cpuModel?: string | null;
    /**
     * Device class (e.g. tablet)
     */
    deviceClass?: string | null;
    /**
     * OpenGL version
     */
    glEsVersion?: number | null;
    /**
     * Device manufacturer (e.g. Motorola)
     */
    manufacturer?: string | null;
    /**
     * Comma separated list of native platforms (e.g. "arm", "arm7")
     */
    nativePlatform?: string | null;
    /**
     * Device model name (e.g. Droid)
     */
    productName?: string | null;
    /**
     * Device RAM in Megabytes, e.g. "2048"
     */
    ramMb?: number | null;
    /**
     * Screen density in DPI
     */
    screenDensityDpi?: number | null;
    /**
     * Screen height in pixels
     */
    screenHeightPx?: number | null;
    /**
     * Screen width in pixels
     */
    screenWidthPx?: number | null;
  }
  /**
   * The device spec used to generate a system APK.
   */
  export interface Schema$DeviceSpec {
    /**
     * Screen dpi.
     */
    screenDensity?: number | null;
    /**
     * Supported ABI architectures in the order of preference. The values should be the string as reported by the platform, e.g. "armeabi-v7a", "x86_64".
     */
    supportedAbis?: string[] | null;
    /**
     * All installed locales represented as BCP-47 strings, e.g. "en-US".
     */
    supportedLocales?: string[] | null;
  }
  /**
   * An expansion file. The resource for ExpansionFilesService.
   */
  export interface Schema$ExpansionFile {
    /**
     * If set, this field indicates that this APK has an expansion file uploaded to it: this APK does not reference another APK's expansion file. The field's value is the size of the uploaded expansion file in bytes.
     */
    fileSize?: string | null;
    /**
     * If set, this APK's expansion file references another APK's expansion file. The file_size field will not be set.
     */
    referencesVersion?: number | null;
  }
  /**
   * Response for uploading an expansion file.
   */
  export interface Schema$ExpansionFilesUploadResponse {
    /**
     * The uploaded expansion file configuration.
     */
    expansionFile?: Schema$ExpansionFile;
  }
  /**
   * Defines an APK available for this application that is hosted externally and not uploaded to Google Play. This function is only available to organizations using Managed Play whose application is configured to restrict distribution to the organizations.
   */
  export interface Schema$ExternallyHostedApk {
    /**
     * The application label.
     */
    applicationLabel?: string | null;
    /**
     * A certificate (or array of certificates if a certificate-chain is used) used to sign this APK, represented as a base64 encoded byte array.
     */
    certificateBase64s?: string[] | null;
    /**
     * The URL at which the APK is hosted. This must be an https URL.
     */
    externallyHostedUrl?: string | null;
    /**
     * The sha1 checksum of this APK, represented as a base64 encoded byte array.
     */
    fileSha1Base64?: string | null;
    /**
     * The sha256 checksum of this APK, represented as a base64 encoded byte array.
     */
    fileSha256Base64?: string | null;
    /**
     * The file size in bytes of this APK.
     */
    fileSize?: string | null;
    /**
     * The icon image from the APK, as a base64 encoded byte array.
     */
    iconBase64?: string | null;
    /**
     * The maximum SDK supported by this APK (optional).
     */
    maximumSdk?: number | null;
    /**
     * The minimum SDK targeted by this APK.
     */
    minimumSdk?: number | null;
    /**
     * The native code environments supported by this APK (optional).
     */
    nativeCodes?: string[] | null;
    /**
     * The package name.
     */
    packageName?: string | null;
    /**
     * The features required by this APK (optional).
     */
    usesFeatures?: string[] | null;
    /**
     * The permissions requested by this APK.
     */
    usesPermissions?: Schema$UsesPermission[];
    /**
     * The version code of this APK.
     */
    versionCode?: number | null;
    /**
     * The version name of this APK.
     */
    versionName?: string | null;
  }
  /**
   * Response to list generated APKs.
   */
  export interface Schema$GeneratedApksListResponse {
    /**
     * All generated APKs, grouped by the APK signing key.
     */
    generatedApks?: Schema$GeneratedApksPerSigningKey[];
  }
  /**
   * Download metadata for split, standalone and universal APKs, as well as asset pack slices, signed with a given key.
   */
  export interface Schema$GeneratedApksPerSigningKey {
    /**
     * SHA256 hash of the APK signing public key certificate.
     */
    certificateSha256Hash?: string | null;
    /**
     * List of asset pack slices which will be served for this app bundle, signed with a key corresponding to certificate_sha256_hash.
     */
    generatedAssetPackSlices?: Schema$GeneratedAssetPackSlice[];
    /**
     * List of generated split APKs, signed with a key corresponding to certificate_sha256_hash.
     */
    generatedSplitApks?: Schema$GeneratedSplitApk[];
    /**
     * List of generated standalone APKs, signed with a key corresponding to certificate_sha256_hash.
     */
    generatedStandaloneApks?: Schema$GeneratedStandaloneApk[];
    /**
     * Generated universal APK, signed with a key corresponding to certificate_sha256_hash. This field is not set if no universal APK was generated for this signing key.
     */
    generatedUniversalApk?: Schema$GeneratedUniversalApk;
  }
  /**
   * Download metadata for an asset pack slice.
   */
  export interface Schema$GeneratedAssetPackSlice {
    /**
     * Download ID, which uniquely identifies the APK to download. Should be supplied to `generatedapks.download` method.
     */
    downloadId?: string | null;
    /**
     * Name of the module that this asset slice belongs to.
     */
    moduleName?: string | null;
    /**
     * Asset slice ID.
     */
    sliceId?: string | null;
    /**
     * Asset module version.
     */
    version?: string | null;
  }
  /**
   * Download metadata for a split APK.
   */
  export interface Schema$GeneratedSplitApk {
    /**
     * Download ID, which uniquely identifies the APK to download. Should be supplied to `generatedapks.download` method.
     */
    downloadId?: string | null;
    /**
     * Name of the module that this APK belongs to.
     */
    moduleName?: string | null;
    /**
     * Split ID. Empty for the main split of the base module.
     */
    splitId?: string | null;
    /**
     * ID of the generated variant.
     */
    variantId?: number | null;
  }
  /**
   * Download metadata for a standalone APK.
   */
  export interface Schema$GeneratedStandaloneApk {
    /**
     * Download ID, which uniquely identifies the APK to download. Should be supplied to `generatedapks.download` method.
     */
    downloadId?: string | null;
    /**
     * ID of the generated variant.
     */
    variantId?: number | null;
  }
  /**
   * Download metadata for a universal APK.
   */
  export interface Schema$GeneratedUniversalApk {
    /**
     * Download ID, which uniquely identifies the APK to download. Should be supplied to `generatedapks.download` method.
     */
    downloadId?: string | null;
  }
  /**
   * An access grant resource.
   */
  export interface Schema$Grant {
    /**
     * The permissions granted to the user for this app.
     */
    appLevelPermissions?: string[] | null;
    /**
     * Required. Resource name for this grant, following the pattern "developers/{developer\}/users/{email\}/grants/{package_name\}".
     */
    name?: string | null;
    /**
     * Immutable. The package name of the app.
     */
    packageName?: string | null;
  }
  /**
   * An uploaded image. The resource for ImagesService.
   */
  export interface Schema$Image {
    /**
     * A unique id representing this image.
     */
    id?: string | null;
    /**
     * A sha1 hash of the image.
     */
    sha1?: string | null;
    /**
     * A sha256 hash of the image.
     */
    sha256?: string | null;
    /**
     * A URL that will serve a preview of the image.
     */
    url?: string | null;
  }
  /**
   * Response for deleting all images.
   */
  export interface Schema$ImagesDeleteAllResponse {
    /**
     * The deleted images.
     */
    deleted?: Schema$Image[];
  }
  /**
   * Response listing all images.
   */
  export interface Schema$ImagesListResponse {
    /**
     * All listed Images.
     */
    images?: Schema$Image[];
  }
  /**
   * Response for uploading an image.
   */
  export interface Schema$ImagesUploadResponse {
    /**
     * The uploaded image.
     */
    image?: Schema$Image;
  }
  /**
   * An in-app product. The resource for InappproductsService.
   */
  export interface Schema$InAppProduct {
    /**
     * Default language of the localized data, as defined by BCP-47. e.g. "en-US".
     */
    defaultLanguage?: string | null;
    /**
     * Default price. Cannot be zero, as in-app products are never free. Always in the developer's Checkout merchant currency.
     */
    defaultPrice?: Schema$Price;
    /**
     * Grace period of the subscription, specified in ISO 8601 format. Allows developers to give their subscribers a grace period when the payment for the new recurrence period is declined. Acceptable values are P0D (zero days), P3D (three days), P7D (seven days), P14D (14 days), and P30D (30 days).
     */
    gracePeriod?: string | null;
    /**
     * List of localized title and description data. Map key is the language of the localized data, as defined by BCP-47, e.g. "en-US".
     */
    listings?: {[key: string]: Schema$InAppProductListing} | null;
    /**
     * Details about taxes and legal compliance. Only applicable to managed products.
     */
    managedProductTaxesAndComplianceSettings?: Schema$ManagedProductTaxAndComplianceSettings;
    /**
     * Package name of the parent app.
     */
    packageName?: string | null;
    /**
     * Prices per buyer region. None of these can be zero, as in-app products are never free. Map key is region code, as defined by ISO 3166-2.
     */
    prices?: {[key: string]: Schema$Price} | null;
    /**
     * The type of the product, e.g. a recurring subscription.
     */
    purchaseType?: string | null;
    /**
     * Stock-keeping-unit (SKU) of the product, unique within an app.
     */
    sku?: string | null;
    /**
     * The status of the product, e.g. whether it's active.
     */
    status?: string | null;
    /**
     * Subscription period, specified in ISO 8601 format. Acceptable values are P1W (one week), P1M (one month), P3M (three months), P6M (six months), and P1Y (one year).
     */
    subscriptionPeriod?: string | null;
    /**
     * Details about taxes and legal compliance. Only applicable to subscription products.
     */
    subscriptionTaxesAndComplianceSettings?: Schema$SubscriptionTaxAndComplianceSettings;
    /**
     * Trial period, specified in ISO 8601 format. Acceptable values are anything between P7D (seven days) and P999D (999 days).
     */
    trialPeriod?: string | null;
  }
  /**
   * Store listing of a single in-app product.
   */
  export interface Schema$InAppProductListing {
    /**
     * Localized entitlement benefits for a subscription.
     */
    benefits?: string[] | null;
    /**
     * Description for the store listing.
     */
    description?: string | null;
    /**
     * Title for the store listing.
     */
    title?: string | null;
  }
  /**
   * Response listing all in-app products.
   */
  export interface Schema$InappproductsListResponse {
    /**
     * All in-app products.
     */
    inappproduct?: Schema$InAppProduct[];
    /**
     * The kind of this response ("androidpublisher#inappproductsListResponse").
     */
    kind?: string | null;
    /**
     * Deprecated and unset.
     */
    pageInfo?: Schema$PageInfo;
    /**
     * Pagination token, to handle a number of products that is over one page.
     */
    tokenPagination?: Schema$TokenPagination;
  }
  /**
   * An artifact resource which gets created when uploading an APK or Android App Bundle through internal app sharing.
   */
  export interface Schema$InternalAppSharingArtifact {
    /**
     * The sha256 fingerprint of the certificate used to sign the generated artifact.
     */
    certificateFingerprint?: string | null;
    /**
     * The download URL generated for the uploaded artifact. Users that are authorized to download can follow the link to the Play Store app to install it.
     */
    downloadUrl?: string | null;
    /**
     * The sha256 hash of the artifact represented as a lowercase hexadecimal number, matching the output of the sha256sum command.
     */
    sha256?: string | null;
  }
  /**
   * Contains the introductory price information for a subscription.
   */
  export interface Schema$IntroductoryPriceInfo {
    /**
     * Introductory price of the subscription, not including tax. The currency is the same as price_currency_code. Price is expressed in micro-units, where 1,000,000 micro-units represents one unit of the currency. For example, if the subscription price is €1.99, price_amount_micros is 1990000.
     */
    introductoryPriceAmountMicros?: string | null;
    /**
     * ISO 4217 currency code for the introductory subscription price. For example, if the price is specified in British pounds sterling, price_currency_code is "GBP".
     */
    introductoryPriceCurrencyCode?: string | null;
    /**
     * The number of billing period to offer introductory pricing.
     */
    introductoryPriceCycles?: number | null;
    /**
     * Introductory price period, specified in ISO 8601 format. Common values are (but not limited to) "P1W" (one week), "P1M" (one month), "P3M" (three months), "P6M" (six months), and "P1Y" (one year).
     */
    introductoryPricePeriod?: string | null;
  }
  /**
   * A localized store listing. The resource for ListingsService.
   */
  export interface Schema$Listing {
    /**
     * Full description of the app.
     */
    fullDescription?: string | null;
    /**
     * Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).
     */
    language?: string | null;
    /**
     * Short description of the app.
     */
    shortDescription?: string | null;
    /**
     * Localized title of the app.
     */
    title?: string | null;
    /**
     * URL of a promotional YouTube video for the app.
     */
    video?: string | null;
  }
  /**
   * Response listing all localized listings.
   */
  export interface Schema$ListingsListResponse {
    /**
     * The kind of this response ("androidpublisher#listingsListResponse").
     */
    kind?: string | null;
    /**
     * All localized listings.
     */
    listings?: Schema$Listing[];
  }
  /**
   * A response containing one or more users with access to an account.
   */
  export interface Schema$ListUsersResponse {
    /**
     * A token to pass to subsequent calls in order to retrieve subsequent results. This will not be set if there are no more results to return.
     */
    nextPageToken?: string | null;
    /**
     * The resulting users.
     */
    users?: Schema$User[];
  }
  /**
   * Localized text in given language.
   */
  export interface Schema$LocalizedText {
    /**
     * Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).
     */
    language?: string | null;
    /**
     * The text in the given language.
     */
    text?: string | null;
  }
  /**
   * Details about taxation and legal compliance for managed products.
   */
  export interface Schema$ManagedProductTaxAndComplianceSettings {
    /**
     * Digital content or service classification for products distributed to users in the European Economic Area (EEA). The withdrawal regime under EEA consumer laws depends on this classification. Refer to the [Help Center article](https://support.google.com/googleplay/android-developer/answer/10463498) for more information.
     */
    eeaWithdrawalRightType?: string | null;
    /**
     * A mapping from region code to tax rate details. The keys are region codes as defined by Unicode's "CLDR".
     */
    taxRateInfoByRegionCode?: {
      [key: string]: Schema$RegionalTaxRateInfo;
    } | null;
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
   * Information about the current page. List operations that supports paging return only one "page" of results. This protocol buffer message describes the page that has been returned.
   */
  export interface Schema$PageInfo {
    /**
     * Maximum number of results returned in one page. ! The number of results included in the API response.
     */
    resultPerPage?: number | null;
    /**
     * Index of the first result returned in the current page.
     */
    startIndex?: number | null;
    /**
     * Total number of results available on the backend ! The total number of results in the result set.
     */
    totalResults?: number | null;
  }
  /**
   * Definition of a price, i.e. currency and units.
   */
  export interface Schema$Price {
    /**
     * 3 letter Currency code, as defined by ISO 4217. See java/com/google/common/money/CurrencyCode.java
     */
    currency?: string | null;
    /**
     * Price in 1/million of the currency base unit, represented as a string.
     */
    priceMicros?: string | null;
  }
  /**
   * A ProductPurchase resource indicates the status of a user's inapp product purchase.
   */
  export interface Schema$ProductPurchase {
    /**
     * The acknowledgement state of the inapp product. Possible values are: 0. Yet to be acknowledged 1. Acknowledged
     */
    acknowledgementState?: number | null;
    /**
     * The consumption state of the inapp product. Possible values are: 0. Yet to be consumed 1. Consumed
     */
    consumptionState?: number | null;
    /**
     * A developer-specified string that contains supplemental information about an order.
     */
    developerPayload?: string | null;
    /**
     * This kind represents an inappPurchase object in the androidpublisher service.
     */
    kind?: string | null;
    /**
     * An obfuscated version of the id that is uniquely associated with the user's account in your app. Only present if specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedaccountid when the purchase was made.
     */
    obfuscatedExternalAccountId?: string | null;
    /**
     * An obfuscated version of the id that is uniquely associated with the user's profile in your app. Only present if specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedprofileid when the purchase was made.
     */
    obfuscatedExternalProfileId?: string | null;
    /**
     * The order id associated with the purchase of the inapp product.
     */
    orderId?: string | null;
    /**
     * The inapp product SKU.
     */
    productId?: string | null;
    /**
     * The purchase state of the order. Possible values are: 0. Purchased 1. Canceled 2. Pending
     */
    purchaseState?: number | null;
    /**
     * The time the product was purchased, in milliseconds since the epoch (Jan 1, 1970).
     */
    purchaseTimeMillis?: string | null;
    /**
     * The purchase token generated to identify this purchase.
     */
    purchaseToken?: string | null;
    /**
     * The type of purchase of the inapp product. This field is only set if this purchase was not made using the standard in-app billing flow. Possible values are: 0. Test (i.e. purchased from a license testing account) 1. Promo (i.e. purchased using a promo code) 2. Rewarded (i.e. from watching a video ad instead of paying)
     */
    purchaseType?: number | null;
    /**
     * The quantity associated with the purchase of the inapp product.
     */
    quantity?: number | null;
    /**
     * ISO 3166-1 alpha-2 billing region code of the user at the time the product was granted.
     */
    regionCode?: string | null;
  }
  /**
   * Request for the product.purchases.acknowledge API.
   */
  export interface Schema$ProductPurchasesAcknowledgeRequest {
    /**
     * Payload to attach to the purchase.
     */
    developerPayload?: string | null;
  }
  /**
   * Specified details about taxation in a given geographical region.
   */
  export interface Schema$RegionalTaxRateInfo {
    /**
     * You must tell us if your app contains streaming products to correctly charge US state and local sales tax. Field only supported in United States.
     */
    eligibleForStreamingServiceTaxRate?: boolean | null;
    /**
     * Tax tier to specify reduced tax rate. Developers who sell digital news, magazines, newspapers, books, or audiobooks in various regions may be eligible for reduced tax rates. [Learn more](https://support.google.com/googleplay/android-developer/answer/10463498).
     */
    taxTier?: string | null;
  }
  /**
   * An Android app review.
   */
  export interface Schema$Review {
    /**
     * The name of the user who wrote the review.
     */
    authorName?: string | null;
    /**
     * A repeated field containing comments for the review.
     */
    comments?: Schema$Comment[];
    /**
     * Unique identifier for this review.
     */
    reviewId?: string | null;
  }
  /**
   * The result of replying/updating a reply to review.
   */
  export interface Schema$ReviewReplyResult {
    /**
     * The time at which the reply took effect.
     */
    lastEdited?: Schema$Timestamp;
    /**
     * The reply text that was applied.
     */
    replyText?: string | null;
  }
  /**
   * Response listing reviews.
   */
  export interface Schema$ReviewsListResponse {
    /**
     * Information about the current page.
     */
    pageInfo?: Schema$PageInfo;
    /**
     * List of reviews.
     */
    reviews?: Schema$Review[];
    /**
     * Pagination token, to handle a number of products that is over one page.
     */
    tokenPagination?: Schema$TokenPagination;
  }
  /**
   * Request to reply to review or update existing reply.
   */
  export interface Schema$ReviewsReplyRequest {
    /**
     * The text to set as the reply. Replies of more than approximately 350 characters will be rejected. HTML tags will be stripped.
     */
    replyText?: string | null;
  }
  /**
   * Response on status of replying to a review.
   */
  export interface Schema$ReviewsReplyResponse {
    /**
     * The result of replying/updating a reply to review.
     */
    result?: Schema$ReviewReplyResult;
  }
  /**
   * Information provided by the user when they complete the subscription cancellation flow (cancellation reason survey).
   */
  export interface Schema$SubscriptionCancelSurveyResult {
    /**
     * The cancellation reason the user chose in the survey. Possible values are: 0. Other 1. I don't use this service enough 2. Technical issues 3. Cost-related reasons 4. I found a better app
     */
    cancelSurveyReason?: number | null;
    /**
     * The customized input cancel reason from the user. Only present when cancelReason is 0.
     */
    userInputCancelReason?: string | null;
  }
  /**
   * A SubscriptionDeferralInfo contains the data needed to defer a subscription purchase to a future expiry time.
   */
  export interface Schema$SubscriptionDeferralInfo {
    /**
     * The desired next expiry time to assign to the subscription, in milliseconds since the Epoch. The given time must be later/greater than the current expiry time for the subscription.
     */
    desiredExpiryTimeMillis?: string | null;
    /**
     * The expected expiry time for the subscription. If the current expiry time for the subscription is not the value specified here, the deferral will not occur.
     */
    expectedExpiryTimeMillis?: string | null;
  }
  /**
   * Contains the price change information for a subscription that can be used to control the user journey for the price change in the app. This can be in the form of seeking confirmation from the user or tailoring the experience for a successful conversion.
   */
  export interface Schema$SubscriptionPriceChange {
    /**
     * The new price the subscription will renew with if the price change is accepted by the user.
     */
    newPrice?: Schema$Price;
    /**
     * The current state of the price change. Possible values are: 0. Outstanding: State for a pending price change waiting for the user to agree. In this state, you can optionally seek confirmation from the user using the In-App API. 1. Accepted: State for an accepted price change that the subscription will renew with unless it's canceled. The price change takes effect on a future date when the subscription renews. Note that the change might not occur when the subscription is renewed next.
     */
    state?: number | null;
  }
  /**
   * A SubscriptionPurchase resource indicates the status of a user's subscription purchase.
   */
  export interface Schema$SubscriptionPurchase {
    /**
     * The acknowledgement state of the subscription product. Possible values are: 0. Yet to be acknowledged 1. Acknowledged
     */
    acknowledgementState?: number | null;
    /**
     * Whether the subscription will automatically be renewed when it reaches its current expiry time.
     */
    autoRenewing?: boolean | null;
    /**
     * Time at which the subscription will be automatically resumed, in milliseconds since the Epoch. Only present if the user has requested to pause the subscription.
     */
    autoResumeTimeMillis?: string | null;
    /**
     * The reason why a subscription was canceled or is not auto-renewing. Possible values are: 0. User canceled the subscription 1. Subscription was canceled by the system, for example because of a billing problem 2. Subscription was replaced with a new subscription 3. Subscription was canceled by the developer
     */
    cancelReason?: number | null;
    /**
     * Information provided by the user when they complete the subscription cancellation flow (cancellation reason survey).
     */
    cancelSurveyResult?: Schema$SubscriptionCancelSurveyResult;
    /**
     * ISO 3166-1 alpha-2 billing country/region code of the user at the time the subscription was granted.
     */
    countryCode?: string | null;
    /**
     * A developer-specified string that contains supplemental information about an order.
     */
    developerPayload?: string | null;
    /**
     * The email address of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'.
     */
    emailAddress?: string | null;
    /**
     * Time at which the subscription will expire, in milliseconds since the Epoch.
     */
    expiryTimeMillis?: string | null;
    /**
     * User account identifier in the third-party service. Only present if account linking happened as part of the subscription purchase flow.
     */
    externalAccountId?: string | null;
    /**
     * The family name of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'.
     */
    familyName?: string | null;
    /**
     * The given name of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'.
     */
    givenName?: string | null;
    /**
     * Introductory price information of the subscription. This is only present when the subscription was purchased with an introductory price. This field does not indicate the subscription is currently in introductory price period.
     */
    introductoryPriceInfo?: Schema$IntroductoryPriceInfo;
    /**
     * This kind represents a subscriptionPurchase object in the androidpublisher service.
     */
    kind?: string | null;
    /**
     * The purchase token of the originating purchase if this subscription is one of the following: 0. Re-signup of a canceled but non-lapsed subscription 1. Upgrade/downgrade from a previous subscription For example, suppose a user originally signs up and you receive purchase token X, then the user cancels and goes through the resignup flow (before their subscription lapses) and you receive purchase token Y, and finally the user upgrades their subscription and you receive purchase token Z. If you call this API with purchase token Z, this field will be set to Y. If you call this API with purchase token Y, this field will be set to X. If you call this API with purchase token X, this field will not be set.
     */
    linkedPurchaseToken?: string | null;
    /**
     * An obfuscated version of the id that is uniquely associated with the user's account in your app. Present for the following purchases: * If account linking happened as part of the subscription purchase flow. * It was specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedaccountid when the purchase was made.
     */
    obfuscatedExternalAccountId?: string | null;
    /**
     * An obfuscated version of the id that is uniquely associated with the user's profile in your app. Only present if specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedprofileid when the purchase was made.
     */
    obfuscatedExternalProfileId?: string | null;
    /**
     * The order id of the latest recurring order associated with the purchase of the subscription. If the subscription was canceled because payment was declined, this will be the order id from the payment declined order.
     */
    orderId?: string | null;
    /**
     * The payment state of the subscription. Possible values are: 0. Payment pending 1. Payment received 2. Free trial 3. Pending deferred upgrade/downgrade Not present for canceled, expired subscriptions.
     */
    paymentState?: number | null;
    /**
     * Price of the subscription, For tax exclusive countries, the price doesn't include tax. For tax inclusive countries, the price includes tax. Price is expressed in micro-units, where 1,000,000 micro-units represents one unit of the currency. For example, if the subscription price is €1.99, price_amount_micros is 1990000.
     */
    priceAmountMicros?: string | null;
    /**
     * The latest price change information available. This is present only when there is an upcoming price change for the subscription yet to be applied. Once the subscription renews with the new price or the subscription is canceled, no price change information will be returned.
     */
    priceChange?: Schema$SubscriptionPriceChange;
    /**
     * ISO 4217 currency code for the subscription price. For example, if the price is specified in British pounds sterling, price_currency_code is "GBP".
     */
    priceCurrencyCode?: string | null;
    /**
     * The Google profile id of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'.
     */
    profileId?: string | null;
    /**
     * The profile name of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'.
     */
    profileName?: string | null;
    /**
     * The promotion code applied on this purchase. This field is only set if a vanity code promotion is applied when the subscription was purchased.
     */
    promotionCode?: string | null;
    /**
     * The type of promotion applied on this purchase. This field is only set if a promotion is applied when the subscription was purchased. Possible values are: 0. One time code 1. Vanity code
     */
    promotionType?: number | null;
    /**
     * The type of purchase of the subscription. This field is only set if this purchase was not made using the standard in-app billing flow. Possible values are: 0. Test (i.e. purchased from a license testing account) 1. Promo (i.e. purchased using a promo code)
     */
    purchaseType?: number | null;
    /**
     * Time at which the subscription was granted, in milliseconds since the Epoch.
     */
    startTimeMillis?: string | null;
    /**
     * The time at which the subscription was canceled by the user, in milliseconds since the epoch. Only present if cancelReason is 0.
     */
    userCancellationTimeMillis?: string | null;
  }
  /**
   * Request for the purchases.subscriptions.acknowledge API.
   */
  export interface Schema$SubscriptionPurchasesAcknowledgeRequest {
    /**
     * Payload to attach to the purchase.
     */
    developerPayload?: string | null;
  }
  /**
   * Request for the purchases.subscriptions.defer API.
   */
  export interface Schema$SubscriptionPurchasesDeferRequest {
    /**
     * The information about the new desired expiry time for the subscription.
     */
    deferralInfo?: Schema$SubscriptionDeferralInfo;
  }
  /**
   * Response for the purchases.subscriptions.defer API.
   */
  export interface Schema$SubscriptionPurchasesDeferResponse {
    /**
     * The new expiry time for the subscription in milliseconds since the Epoch.
     */
    newExpiryTimeMillis?: string | null;
  }
  /**
   * Details about taxation, Google Play policy and legal compliance for subscription products.
   */
  export interface Schema$SubscriptionTaxAndComplianceSettings {
    /**
     * Digital content or service classification for products distributed to users in the European Economic Area (EEA). The withdrawal regime under EEA consumer laws depends on this classification. Refer to the [Help Center article](https://support.google.com/googleplay/android-developer/answer/10463498) for more information.
     */
    eeaWithdrawalRightType?: string | null;
    /**
     * A mapping from region code to tax rate details. The keys are region codes as defined by Unicode's "CLDR".
     */
    taxRateInfoByRegionCode?: {
      [key: string]: Schema$RegionalTaxRateInfo;
    } | null;
  }
  /**
   * Response to list previously created system APK variants.
   */
  export interface Schema$SystemApksListResponse {
    /**
     * All system APK variants created.
     */
    variants?: Schema$Variant[];
  }
  /**
   * The testers of an app. The resource for TestersService.
   */
  export interface Schema$Testers {
    /**
     * All testing Google Groups, as email addresses.
     */
    googleGroups?: string[] | null;
  }
  /**
   * A Timestamp represents a point in time independent of any time zone or local calendar, encoded as a count of seconds and fractions of seconds at nanosecond resolution. The count is relative to an epoch at UTC midnight on January 1, 1970.
   */
  export interface Schema$Timestamp {
    /**
     * Non-negative fractions of a second at nanosecond resolution. Must be from 0 to 999,999,999 inclusive.
     */
    nanos?: number | null;
    /**
     * Represents seconds of UTC time since Unix epoch.
     */
    seconds?: string | null;
  }
  /**
   * Pagination information returned by a List operation when token pagination is enabled. List operations that supports paging return only one "page" of results. This protocol buffer message describes the page that has been returned. When using token pagination, clients should use the next/previous token to get another page of the result. The presence or absence of next/previous token indicates whether a next/previous page is available and provides a mean of accessing this page. ListRequest.page_token should be set to either next_page_token or previous_page_token to access another page.
   */
  export interface Schema$TokenPagination {
    /**
     * Tokens to pass to the standard list field 'page_token'. Whenever available, tokens are preferred over manipulating start_index.
     */
    nextPageToken?: string | null;
    previousPageToken?: string | null;
  }
  /**
   * A track configuration. The resource for TracksService.
   */
  export interface Schema$Track {
    /**
     * In a read request, represents all active releases in the track. In an update request, represents desired changes.
     */
    releases?: Schema$TrackRelease[];
    /**
     * Identifier of the track.
     */
    track?: string | null;
  }
  /**
   * Resource for per-track country availability information.
   */
  export interface Schema$TrackCountryAvailability {
    /**
     * A list of one or more countries where artifacts in this track are available. This list includes all countries that are targeted by the track, even if only specific carriers are targeted in that country.
     */
    countries?: Schema$TrackTargetedCountry[];
    /**
     * Whether artifacts in this track are available to "rest of the world" countries.
     */
    restOfWorld?: boolean | null;
    /**
     * Whether this track's availability is synced with the default production track. See https://support.google.com/googleplay/android-developer/answer/7550024 for more information on syncing country availability with production. Note that if this is true, the returned "countries" and "rest_of_world" fields will reflect the values for the default production track.
     */
    syncWithProduction?: boolean | null;
  }
  /**
   * A release within a track.
   */
  export interface Schema$TrackRelease {
    /**
     * Restricts a release to a specific set of countries.
     */
    countryTargeting?: Schema$CountryTargeting;
    /**
     * In-app update priority of the release. All newly added APKs in the release will be considered at this priority. Can take values in the range [0, 5], with 5 the highest priority. Defaults to 0. in_app_update_priority can not be updated once the release is rolled out. See https://developer.android.com/guide/playcore/in-app-updates.
     */
    inAppUpdatePriority?: number | null;
    /**
     * The release name. Not required to be unique. If not set, the name is generated from the APK's version_name. If the release contains multiple APKs, the name is generated from the date.
     */
    name?: string | null;
    /**
     * A description of what is new in this release.
     */
    releaseNotes?: Schema$LocalizedText[];
    /**
     * The status of the release.
     */
    status?: string | null;
    /**
     * Fraction of users who are eligible for a staged release. 0 < fraction < 1. Can only be set when status is "inProgress" or "halted".
     */
    userFraction?: number | null;
    /**
     * Version codes of all APKs in the release. Must include version codes to retain from previous releases.
     */
    versionCodes?: string[] | null;
  }
  /**
   * Response listing all tracks.
   */
  export interface Schema$TracksListResponse {
    /**
     * The kind of this response ("androidpublisher#tracksListResponse").
     */
    kind?: string | null;
    /**
     * All tracks.
     */
    tracks?: Schema$Track[];
  }
  /**
   * Representation of a single country where the contents of a track are available.
   */
  export interface Schema$TrackTargetedCountry {
    /**
     * The country to target, as a two-letter CLDR code.
     */
    countryCode?: string | null;
  }
  /**
   * A user resource.
   */
  export interface Schema$User {
    /**
     * Output only. The state of the user's access to the Play Console.
     */
    accessState?: string | null;
    /**
     * Permissions for the user which apply across the developer account.
     */
    developerAccountPermissions?: string[] | null;
    /**
     * Immutable. The user's email address.
     */
    email?: string | null;
    /**
     * The time at which the user's access expires, if set.
     */
    expirationTime?: string | null;
    /**
     * Output only. Per-app permissions for the user.
     */
    grants?: Schema$Grant[];
    /**
     * Required. Resource name for this user, following the pattern "developers/{developer\}/users/{email\}".
     */
    name?: string | null;
    /**
     * Output only. Whether there are more permissions for the user that are not represented here.
     */
    partial?: boolean | null;
  }
  /**
   * User entry from conversation between user and developer.
   */
  export interface Schema$UserComment {
    /**
     * Integer Android SDK version of the user's device at the time the review was written, e.g. 23 is Marshmallow. May be absent.
     */
    androidOsVersion?: number | null;
    /**
     * Integer version code of the app as installed at the time the review was written. May be absent.
     */
    appVersionCode?: number | null;
    /**
     * String version name of the app as installed at the time the review was written. May be absent.
     */
    appVersionName?: string | null;
    /**
     * Codename for the reviewer's device, e.g. klte, flounder. May be absent.
     */
    device?: string | null;
    /**
     * Information about the characteristics of the user's device.
     */
    deviceMetadata?: Schema$DeviceMetadata;
    /**
     * The last time at which this comment was updated.
     */
    lastModified?: Schema$Timestamp;
    /**
     * Untranslated text of the review, where the review was translated. If the review was not translated this is left blank.
     */
    originalText?: string | null;
    /**
     * Language code for the reviewer. This is taken from the device settings so is not guaranteed to match the language the review is written in. May be absent.
     */
    reviewerLanguage?: string | null;
    /**
     * The star rating associated with the review, from 1 to 5.
     */
    starRating?: number | null;
    /**
     * The content of the comment, i.e. review body. In some cases users have been able to write a review with separate title and body; in those cases the title and body are concatenated and separated by a tab character.
     */
    text?: string | null;
    /**
     * Number of users who have given this review a thumbs down.
     */
    thumbsDownCount?: number | null;
    /**
     * Number of users who have given this review a thumbs up.
     */
    thumbsUpCount?: number | null;
  }
  /**
   * A permission used by this APK.
   */
  export interface Schema$UsesPermission {
    /**
     * Optionally, the maximum SDK version for which the permission is required.
     */
    maxSdkVersion?: number | null;
    /**
     * The name of the permission requested.
     */
    name?: string | null;
  }
  /**
   * APK that is suitable for inclusion in a system image. The resource of SystemApksService.
   */
  export interface Schema$Variant {
    /**
     * The device spec used to generate the APK.
     */
    deviceSpec?: Schema$DeviceSpec;
    /**
     * Output only. The ID of a previously created system APK variant.
     */
    variantId?: number | null;
  }
  /**
   * A VoidedPurchase resource indicates a purchase that was either canceled/refunded/charged-back.
   */
  export interface Schema$VoidedPurchase {
    /**
     * This kind represents a voided purchase object in the androidpublisher service.
     */
    kind?: string | null;
    /**
     * The order id which uniquely identifies a one-time purchase, subscription purchase, or subscription renewal.
     */
    orderId?: string | null;
    /**
     * The time at which the purchase was made, in milliseconds since the epoch (Jan 1, 1970).
     */
    purchaseTimeMillis?: string | null;
    /**
     * The token which uniquely identifies a one-time purchase or subscription. To uniquely identify subscription renewals use order_id (available starting from version 3 of the API).
     */
    purchaseToken?: string | null;
    /**
     * The reason why the purchase was voided, possible values are: 0. Other 1. Remorse 2. Not_received 3. Defective 4. Accidental_purchase 5. Fraud 6. Friendly_fraud 7. Chargeback
     */
    voidedReason?: number | null;
    /**
     * The initiator of voided purchase, possible values are: 0. User 1. Developer 2. Google
     */
    voidedSource?: number | null;
    /**
     * The time at which the purchase was canceled/refunded/charged-back, in milliseconds since the epoch (Jan 1, 1970).
     */
    voidedTimeMillis?: string | null;
  }
  /**
   * Response for the voidedpurchases.list API.
   */
  export interface Schema$VoidedPurchasesListResponse {
    /**
     * General pagination information.
     */
    pageInfo?: Schema$PageInfo;
    /**
     * Pagination information for token pagination.
     */
    tokenPagination?: Schema$TokenPagination;
    voidedPurchases?: Schema$VoidedPurchase[];
  }

  export class Resource$Edits {
    context: APIRequestContext;
    apks: Resource$Edits$Apks;
    bundles: Resource$Edits$Bundles;
    countryavailability: Resource$Edits$Countryavailability;
    deobfuscationfiles: Resource$Edits$Deobfuscationfiles;
    details: Resource$Edits$Details;
    expansionfiles: Resource$Edits$Expansionfiles;
    images: Resource$Edits$Images;
    listings: Resource$Edits$Listings;
    testers: Resource$Edits$Testers;
    tracks: Resource$Edits$Tracks;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.apks = new Resource$Edits$Apks(this.context);
      this.bundles = new Resource$Edits$Bundles(this.context);
      this.countryavailability = new Resource$Edits$Countryavailability(
        this.context
      );
      this.deobfuscationfiles = new Resource$Edits$Deobfuscationfiles(
        this.context
      );
      this.details = new Resource$Edits$Details(this.context);
      this.expansionfiles = new Resource$Edits$Expansionfiles(this.context);
      this.images = new Resource$Edits$Images(this.context);
      this.listings = new Resource$Edits$Listings(this.context);
      this.testers = new Resource$Edits$Testers(this.context);
      this.tracks = new Resource$Edits$Tracks(this.context);
    }

    /**
     * Commits an app edit.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.edits.commit({
     *     // Indicates that the changes in this edit will not be reviewed until they are explicitly sent for review from the Google Play Console UI. These changes will be added to any other changes that are not yet sent for review.
     *     changesNotSentForReview: 'placeholder-value',
     *     // Identifier of the edit.
     *     editId: 'placeholder-value',
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "expiryTimeSeconds": "my_expiryTimeSeconds",
     *   //   "id": "my_id"
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
    commit(
      params: Params$Resource$Edits$Commit,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    commit(
      params?: Params$Resource$Edits$Commit,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AppEdit>;
    commit(
      params: Params$Resource$Edits$Commit,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    commit(
      params: Params$Resource$Edits$Commit,
      options: MethodOptions | BodyResponseCallback<Schema$AppEdit>,
      callback: BodyResponseCallback<Schema$AppEdit>
    ): void;
    commit(
      params: Params$Resource$Edits$Commit,
      callback: BodyResponseCallback<Schema$AppEdit>
    ): void;
    commit(callback: BodyResponseCallback<Schema$AppEdit>): void;
    commit(
      paramsOrCallback?:
        | Params$Resource$Edits$Commit
        | BodyResponseCallback<Schema$AppEdit>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AppEdit>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AppEdit>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AppEdit> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Edits$Commit;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Edits$Commit;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/edits/{editId}:commit'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'editId'],
        pathParams: ['editId', 'packageName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AppEdit>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AppEdit>(parameters);
      }
    }

    /**
     * Deletes an app edit.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.edits.delete({
     *     // Identifier of the edit.
     *     editId: 'placeholder-value',
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
      params: Params$Resource$Edits$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Edits$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Edits$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Edits$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Edits$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Edits$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Edits$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Edits$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/edits/{editId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'editId'],
        pathParams: ['editId', 'packageName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Gets an app edit.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.edits.get({
     *     // Identifier of the edit.
     *     editId: 'placeholder-value',
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "expiryTimeSeconds": "my_expiryTimeSeconds",
     *   //   "id": "my_id"
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
      params: Params$Resource$Edits$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Edits$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AppEdit>;
    get(
      params: Params$Resource$Edits$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Edits$Get,
      options: MethodOptions | BodyResponseCallback<Schema$AppEdit>,
      callback: BodyResponseCallback<Schema$AppEdit>
    ): void;
    get(
      params: Params$Resource$Edits$Get,
      callback: BodyResponseCallback<Schema$AppEdit>
    ): void;
    get(callback: BodyResponseCallback<Schema$AppEdit>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Edits$Get
        | BodyResponseCallback<Schema$AppEdit>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AppEdit>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AppEdit>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AppEdit> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Edits$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Edits$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/edits/{editId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'editId'],
        pathParams: ['editId', 'packageName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AppEdit>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AppEdit>(parameters);
      }
    }

    /**
     * Creates a new edit for an app.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.edits.insert({
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "expiryTimeSeconds": "my_expiryTimeSeconds",
     *       //   "id": "my_id"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "expiryTimeSeconds": "my_expiryTimeSeconds",
     *   //   "id": "my_id"
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
    insert(
      params: Params$Resource$Edits$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Edits$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AppEdit>;
    insert(
      params: Params$Resource$Edits$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Edits$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$AppEdit>,
      callback: BodyResponseCallback<Schema$AppEdit>
    ): void;
    insert(
      params: Params$Resource$Edits$Insert,
      callback: BodyResponseCallback<Schema$AppEdit>
    ): void;
    insert(callback: BodyResponseCallback<Schema$AppEdit>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Edits$Insert
        | BodyResponseCallback<Schema$AppEdit>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AppEdit>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AppEdit>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AppEdit> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Edits$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Edits$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/androidpublisher/v3/applications/{packageName}/edits'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['packageName'],
        pathParams: ['packageName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AppEdit>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AppEdit>(parameters);
      }
    }

    /**
     * Validates an app edit.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.edits.validate({
     *     // Identifier of the edit.
     *     editId: 'placeholder-value',
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "expiryTimeSeconds": "my_expiryTimeSeconds",
     *   //   "id": "my_id"
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
    validate(
      params: Params$Resource$Edits$Validate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    validate(
      params?: Params$Resource$Edits$Validate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AppEdit>;
    validate(
      params: Params$Resource$Edits$Validate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    validate(
      params: Params$Resource$Edits$Validate,
      options: MethodOptions | BodyResponseCallback<Schema$AppEdit>,
      callback: BodyResponseCallback<Schema$AppEdit>
    ): void;
    validate(
      params: Params$Resource$Edits$Validate,
      callback: BodyResponseCallback<Schema$AppEdit>
    ): void;
    validate(callback: BodyResponseCallback<Schema$AppEdit>): void;
    validate(
      paramsOrCallback?:
        | Params$Resource$Edits$Validate
        | BodyResponseCallback<Schema$AppEdit>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AppEdit>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AppEdit>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AppEdit> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Edits$Validate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Edits$Validate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/edits/{editId}:validate'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'editId'],
        pathParams: ['editId', 'packageName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AppEdit>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AppEdit>(parameters);
      }
    }
  }

  export interface Params$Resource$Edits$Commit extends StandardParameters {
    /**
     * Indicates that the changes in this edit will not be reviewed until they are explicitly sent for review from the Google Play Console UI. These changes will be added to any other changes that are not yet sent for review.
     */
    changesNotSentForReview?: boolean;
    /**
     * Identifier of the edit.
     */
    editId?: string;
    /**
     * Package name of the app.
     */
    packageName?: string;
  }
  export interface Params$Resource$Edits$Delete extends StandardParameters {
    /**
     * Identifier of the edit.
     */
    editId?: string;
    /**
     * Package name of the app.
     */
    packageName?: string;
  }
  export interface Params$Resource$Edits$Get extends StandardParameters {
    /**
     * Identifier of the edit.
     */
    editId?: string;
    /**
     * Package name of the app.
     */
    packageName?: string;
  }
  export interface Params$Resource$Edits$Insert extends StandardParameters {
    /**
     * Package name of the app.
     */
    packageName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AppEdit;
  }
  export interface Params$Resource$Edits$Validate extends StandardParameters {
    /**
     * Identifier of the edit.
     */
    editId?: string;
    /**
     * Package name of the app.
     */
    packageName?: string;
  }

  export class Resource$Edits$Apks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to organizations using Managed Play whose application is configured to restrict distribution to the organizations.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.edits.apks.addexternallyhosted({
     *     // Identifier of the edit.
     *     editId: 'placeholder-value',
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "externallyHostedApk": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "externallyHostedApk": {}
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
    addexternallyhosted(
      params: Params$Resource$Edits$Apks$Addexternallyhosted,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    addexternallyhosted(
      params?: Params$Resource$Edits$Apks$Addexternallyhosted,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ApksAddExternallyHostedResponse>;
    addexternallyhosted(
      params: Params$Resource$Edits$Apks$Addexternallyhosted,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    addexternallyhosted(
      params: Params$Resource$Edits$Apks$Addexternallyhosted,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ApksAddExternallyHostedResponse>,
      callback: BodyResponseCallback<Schema$ApksAddExternallyHostedResponse>
    ): void;
    addexternallyhosted(
      params: Params$Resource$Edits$Apks$Addexternallyhosted,
      callback: BodyResponseCallback<Schema$ApksAddExternallyHostedResponse>
    ): void;
    addexternallyhosted(
      callback: BodyResponseCallback<Schema$ApksAddExternallyHostedResponse>
    ): void;
    addexternallyhosted(
      paramsOrCallback?:
        | Params$Resource$Edits$Apks$Addexternallyhosted
        | BodyResponseCallback<Schema$ApksAddExternallyHostedResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ApksAddExternallyHostedResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ApksAddExternallyHostedResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ApksAddExternallyHostedResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Edits$Apks$Addexternallyhosted;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Edits$Apks$Addexternallyhosted;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/externallyHosted'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'editId'],
        pathParams: ['editId', 'packageName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ApksAddExternallyHostedResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ApksAddExternallyHostedResponse>(
          parameters
        );
      }
    }

    /**
     * Lists all current APKs of the app and edit.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.edits.apks.list({
     *     // Identifier of the edit.
     *     editId: 'placeholder-value',
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apks": [],
     *   //   "kind": "my_kind"
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
      params: Params$Resource$Edits$Apks$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Edits$Apks$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ApksListResponse>;
    list(
      params: Params$Resource$Edits$Apks$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Edits$Apks$List,
      options: MethodOptions | BodyResponseCallback<Schema$ApksListResponse>,
      callback: BodyResponseCallback<Schema$ApksListResponse>
    ): void;
    list(
      params: Params$Resource$Edits$Apks$List,
      callback: BodyResponseCallback<Schema$ApksListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ApksListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Edits$Apks$List
        | BodyResponseCallback<Schema$ApksListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ApksListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ApksListResponse>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ApksListResponse> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Edits$Apks$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Edits$Apks$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'editId'],
        pathParams: ['editId', 'packageName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ApksListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ApksListResponse>(parameters);
      }
    }

    /**
     * Uploads an APK and adds to the current edit.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.edits.apks.upload({
     *     // Identifier of the edit.
     *     editId: 'placeholder-value',
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *
     *     requestBody: {
     *       // request body parameters
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
     *   //   "binary": {},
     *   //   "versionCode": 0
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
      params: Params$Resource$Edits$Apks$Upload,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    upload(
      params?: Params$Resource$Edits$Apks$Upload,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Apk>;
    upload(
      params: Params$Resource$Edits$Apks$Upload,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    upload(
      params: Params$Resource$Edits$Apks$Upload,
      options: MethodOptions | BodyResponseCallback<Schema$Apk>,
      callback: BodyResponseCallback<Schema$Apk>
    ): void;
    upload(
      params: Params$Resource$Edits$Apks$Upload,
      callback: BodyResponseCallback<Schema$Apk>
    ): void;
    upload(callback: BodyResponseCallback<Schema$Apk>): void;
    upload(
      paramsOrCallback?:
        | Params$Resource$Edits$Apks$Upload
        | BodyResponseCallback<Schema$Apk>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Apk>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Apk>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Apk> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Edits$Apks$Upload;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Edits$Apks$Upload;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        mediaUrl: (
          rootUrl +
          '/upload/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks'
        ).replace(/([^:]\/)\/+/g, '$1'),
        requiredParams: ['packageName', 'editId'],
        pathParams: ['editId', 'packageName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Apk>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Apk>(parameters);
      }
    }
  }

  export interface Params$Resource$Edits$Apks$Addexternallyhosted
    extends StandardParameters {
    /**
     * Identifier of the edit.
     */
    editId?: string;
    /**
     * Package name of the app.
     */
    packageName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ApksAddExternallyHostedRequest;
  }
  export interface Params$Resource$Edits$Apks$List extends StandardParameters {
    /**
     * Identifier of the edit.
     */
    editId?: string;
    /**
     * Package name of the app.
     */
    packageName?: string;
  }
  export interface Params$Resource$Edits$Apks$Upload
    extends StandardParameters {
    /**
     * Identifier of the edit.
     */
    editId?: string;
    /**
     * Package name of the app.
     */
    packageName?: string;

    /**
     * Request body metadata
     */
    requestBody?: {};

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

  export class Resource$Edits$Bundles {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists all current Android App Bundles of the app and edit.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.edits.bundles.list({
     *     // Identifier of the edit.
     *     editId: 'placeholder-value',
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "bundles": [],
     *   //   "kind": "my_kind"
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
      params: Params$Resource$Edits$Bundles$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Edits$Bundles$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BundlesListResponse>;
    list(
      params: Params$Resource$Edits$Bundles$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Edits$Bundles$List,
      options: MethodOptions | BodyResponseCallback<Schema$BundlesListResponse>,
      callback: BodyResponseCallback<Schema$BundlesListResponse>
    ): void;
    list(
      params: Params$Resource$Edits$Bundles$List,
      callback: BodyResponseCallback<Schema$BundlesListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$BundlesListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Edits$Bundles$List
        | BodyResponseCallback<Schema$BundlesListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BundlesListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BundlesListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$BundlesListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Edits$Bundles$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Edits$Bundles$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/edits/{editId}/bundles'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'editId'],
        pathParams: ['editId', 'packageName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BundlesListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BundlesListResponse>(parameters);
      }
    }

    /**
     * Uploads a new Android App Bundle to this edit. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.edits.bundles.upload({
     *     // Must be set to true if the app bundle installation may trigger a warning on user devices (for example, if installation size may be over a threshold, typically 100 MB).
     *     ackBundleInstallationWarning: 'placeholder-value',
     *     // Identifier of the edit.
     *     editId: 'placeholder-value',
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *
     *     requestBody: {
     *       // request body parameters
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
     *   //   "sha1": "my_sha1",
     *   //   "sha256": "my_sha256",
     *   //   "versionCode": 0
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
      params: Params$Resource$Edits$Bundles$Upload,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    upload(
      params?: Params$Resource$Edits$Bundles$Upload,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Bundle>;
    upload(
      params: Params$Resource$Edits$Bundles$Upload,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    upload(
      params: Params$Resource$Edits$Bundles$Upload,
      options: MethodOptions | BodyResponseCallback<Schema$Bundle>,
      callback: BodyResponseCallback<Schema$Bundle>
    ): void;
    upload(
      params: Params$Resource$Edits$Bundles$Upload,
      callback: BodyResponseCallback<Schema$Bundle>
    ): void;
    upload(callback: BodyResponseCallback<Schema$Bundle>): void;
    upload(
      paramsOrCallback?:
        | Params$Resource$Edits$Bundles$Upload
        | BodyResponseCallback<Schema$Bundle>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Bundle>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Bundle>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Bundle> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Edits$Bundles$Upload;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Edits$Bundles$Upload;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/edits/{editId}/bundles'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        mediaUrl: (
          rootUrl +
          '/upload/androidpublisher/v3/applications/{packageName}/edits/{editId}/bundles'
        ).replace(/([^:]\/)\/+/g, '$1'),
        requiredParams: ['packageName', 'editId'],
        pathParams: ['editId', 'packageName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Bundle>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Bundle>(parameters);
      }
    }
  }

  export interface Params$Resource$Edits$Bundles$List
    extends StandardParameters {
    /**
     * Identifier of the edit.
     */
    editId?: string;
    /**
     * Package name of the app.
     */
    packageName?: string;
  }
  export interface Params$Resource$Edits$Bundles$Upload
    extends StandardParameters {
    /**
     * Must be set to true if the app bundle installation may trigger a warning on user devices (for example, if installation size may be over a threshold, typically 100 MB).
     */
    ackBundleInstallationWarning?: boolean;
    /**
     * Identifier of the edit.
     */
    editId?: string;
    /**
     * Package name of the app.
     */
    packageName?: string;

    /**
     * Request body metadata
     */
    requestBody?: {};

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

  export class Resource$Edits$Countryavailability {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets country availability.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.edits.countryavailability.get({
     *     // Identifier of the edit.
     *     editId: 'placeholder-value',
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *     // The track to read from.
     *     track: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "countries": [],
     *   //   "restOfWorld": false,
     *   //   "syncWithProduction": false
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
      params: Params$Resource$Edits$Countryavailability$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Edits$Countryavailability$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TrackCountryAvailability>;
    get(
      params: Params$Resource$Edits$Countryavailability$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Edits$Countryavailability$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TrackCountryAvailability>,
      callback: BodyResponseCallback<Schema$TrackCountryAvailability>
    ): void;
    get(
      params: Params$Resource$Edits$Countryavailability$Get,
      callback: BodyResponseCallback<Schema$TrackCountryAvailability>
    ): void;
    get(callback: BodyResponseCallback<Schema$TrackCountryAvailability>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Edits$Countryavailability$Get
        | BodyResponseCallback<Schema$TrackCountryAvailability>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TrackCountryAvailability>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TrackCountryAvailability>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$TrackCountryAvailability>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Edits$Countryavailability$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Edits$Countryavailability$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/edits/{editId}/countryAvailability/{track}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'editId', 'track'],
        pathParams: ['editId', 'packageName', 'track'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TrackCountryAvailability>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TrackCountryAvailability>(parameters);
      }
    }
  }

  export interface Params$Resource$Edits$Countryavailability$Get
    extends StandardParameters {
    /**
     * Identifier of the edit.
     */
    editId?: string;
    /**
     * Package name of the app.
     */
    packageName?: string;
    /**
     * The track to read from.
     */
    track?: string;
  }

  export class Resource$Edits$Deobfuscationfiles {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Uploads a new deobfuscation file and attaches to the specified APK.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.edits.deobfuscationfiles.upload({
     *     // The version code of the APK whose Deobfuscation File is being uploaded.
     *     apkVersionCode: 'placeholder-value',
     *     // The type of the deobfuscation file.
     *     deobfuscationFileType: 'placeholder-value',
     *     // Unique identifier for this edit.
     *     editId: 'placeholder-value',
     *     // Unique identifier for the Android app.
     *     packageName: 'placeholder-value',
     *
     *     requestBody: {
     *       // request body parameters
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
     *   //   "deobfuscationFile": {}
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
      params: Params$Resource$Edits$Deobfuscationfiles$Upload,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    upload(
      params?: Params$Resource$Edits$Deobfuscationfiles$Upload,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DeobfuscationFilesUploadResponse>;
    upload(
      params: Params$Resource$Edits$Deobfuscationfiles$Upload,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    upload(
      params: Params$Resource$Edits$Deobfuscationfiles$Upload,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$DeobfuscationFilesUploadResponse>,
      callback: BodyResponseCallback<Schema$DeobfuscationFilesUploadResponse>
    ): void;
    upload(
      params: Params$Resource$Edits$Deobfuscationfiles$Upload,
      callback: BodyResponseCallback<Schema$DeobfuscationFilesUploadResponse>
    ): void;
    upload(
      callback: BodyResponseCallback<Schema$DeobfuscationFilesUploadResponse>
    ): void;
    upload(
      paramsOrCallback?:
        | Params$Resource$Edits$Deobfuscationfiles$Upload
        | BodyResponseCallback<Schema$DeobfuscationFilesUploadResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DeobfuscationFilesUploadResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DeobfuscationFilesUploadResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$DeobfuscationFilesUploadResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Edits$Deobfuscationfiles$Upload;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Edits$Deobfuscationfiles$Upload;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/deobfuscationFiles/{deobfuscationFileType}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        mediaUrl: (
          rootUrl +
          '/upload/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/deobfuscationFiles/{deobfuscationFileType}'
        ).replace(/([^:]\/)\/+/g, '$1'),
        requiredParams: [
          'packageName',
          'editId',
          'apkVersionCode',
          'deobfuscationFileType',
        ],
        pathParams: [
          'apkVersionCode',
          'deobfuscationFileType',
          'editId',
          'packageName',
        ],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DeobfuscationFilesUploadResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DeobfuscationFilesUploadResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Edits$Deobfuscationfiles$Upload
    extends StandardParameters {
    /**
     * The version code of the APK whose Deobfuscation File is being uploaded.
     */
    apkVersionCode?: number;
    /**
     * The type of the deobfuscation file.
     */
    deobfuscationFileType?: string;
    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * Unique identifier for the Android app.
     */
    packageName?: string;

    /**
     * Request body metadata
     */
    requestBody?: {};

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

  export class Resource$Edits$Details {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets details of an app.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.edits.details.get({
     *     // Identifier of the edit.
     *     editId: 'placeholder-value',
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contactEmail": "my_contactEmail",
     *   //   "contactPhone": "my_contactPhone",
     *   //   "contactWebsite": "my_contactWebsite",
     *   //   "defaultLanguage": "my_defaultLanguage"
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
      params: Params$Resource$Edits$Details$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Edits$Details$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AppDetails>;
    get(
      params: Params$Resource$Edits$Details$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Edits$Details$Get,
      options: MethodOptions | BodyResponseCallback<Schema$AppDetails>,
      callback: BodyResponseCallback<Schema$AppDetails>
    ): void;
    get(
      params: Params$Resource$Edits$Details$Get,
      callback: BodyResponseCallback<Schema$AppDetails>
    ): void;
    get(callback: BodyResponseCallback<Schema$AppDetails>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Edits$Details$Get
        | BodyResponseCallback<Schema$AppDetails>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AppDetails>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AppDetails>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AppDetails> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Edits$Details$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Edits$Details$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/edits/{editId}/details'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'editId'],
        pathParams: ['editId', 'packageName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AppDetails>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AppDetails>(parameters);
      }
    }

    /**
     * Patches details of an app.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.edits.details.patch({
     *     // Identifier of the edit.
     *     editId: 'placeholder-value',
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "contactEmail": "my_contactEmail",
     *       //   "contactPhone": "my_contactPhone",
     *       //   "contactWebsite": "my_contactWebsite",
     *       //   "defaultLanguage": "my_defaultLanguage"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contactEmail": "my_contactEmail",
     *   //   "contactPhone": "my_contactPhone",
     *   //   "contactWebsite": "my_contactWebsite",
     *   //   "defaultLanguage": "my_defaultLanguage"
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
      params: Params$Resource$Edits$Details$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Edits$Details$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AppDetails>;
    patch(
      params: Params$Resource$Edits$Details$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Edits$Details$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$AppDetails>,
      callback: BodyResponseCallback<Schema$AppDetails>
    ): void;
    patch(
      params: Params$Resource$Edits$Details$Patch,
      callback: BodyResponseCallback<Schema$AppDetails>
    ): void;
    patch(callback: BodyResponseCallback<Schema$AppDetails>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Edits$Details$Patch
        | BodyResponseCallback<Schema$AppDetails>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AppDetails>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AppDetails>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AppDetails> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Edits$Details$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Edits$Details$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/edits/{editId}/details'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'editId'],
        pathParams: ['editId', 'packageName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AppDetails>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AppDetails>(parameters);
      }
    }

    /**
     * Updates details of an app.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.edits.details.update({
     *     // Identifier of the edit.
     *     editId: 'placeholder-value',
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "contactEmail": "my_contactEmail",
     *       //   "contactPhone": "my_contactPhone",
     *       //   "contactWebsite": "my_contactWebsite",
     *       //   "defaultLanguage": "my_defaultLanguage"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contactEmail": "my_contactEmail",
     *   //   "contactPhone": "my_contactPhone",
     *   //   "contactWebsite": "my_contactWebsite",
     *   //   "defaultLanguage": "my_defaultLanguage"
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
    update(
      params: Params$Resource$Edits$Details$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Edits$Details$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AppDetails>;
    update(
      params: Params$Resource$Edits$Details$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Edits$Details$Update,
      options: MethodOptions | BodyResponseCallback<Schema$AppDetails>,
      callback: BodyResponseCallback<Schema$AppDetails>
    ): void;
    update(
      params: Params$Resource$Edits$Details$Update,
      callback: BodyResponseCallback<Schema$AppDetails>
    ): void;
    update(callback: BodyResponseCallback<Schema$AppDetails>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Edits$Details$Update
        | BodyResponseCallback<Schema$AppDetails>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AppDetails>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AppDetails>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AppDetails> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Edits$Details$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Edits$Details$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/edits/{editId}/details'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'editId'],
        pathParams: ['editId', 'packageName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AppDetails>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AppDetails>(parameters);
      }
    }
  }

  export interface Params$Resource$Edits$Details$Get
    extends StandardParameters {
    /**
     * Identifier of the edit.
     */
    editId?: string;
    /**
     * Package name of the app.
     */
    packageName?: string;
  }
  export interface Params$Resource$Edits$Details$Patch
    extends StandardParameters {
    /**
     * Identifier of the edit.
     */
    editId?: string;
    /**
     * Package name of the app.
     */
    packageName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AppDetails;
  }
  export interface Params$Resource$Edits$Details$Update
    extends StandardParameters {
    /**
     * Identifier of the edit.
     */
    editId?: string;
    /**
     * Package name of the app.
     */
    packageName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AppDetails;
  }

  export class Resource$Edits$Expansionfiles {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Fetches the expansion file configuration for the specified APK.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.edits.expansionfiles.get({
     *     // The version code of the APK whose expansion file configuration is being read or modified.
     *     apkVersionCode: 'placeholder-value',
     *     // Identifier of the edit.
     *     editId: 'placeholder-value',
     *     // The file type of the file configuration which is being read or modified.
     *     expansionFileType: 'placeholder-value',
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "fileSize": "my_fileSize",
     *   //   "referencesVersion": 0
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
      params: Params$Resource$Edits$Expansionfiles$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Edits$Expansionfiles$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ExpansionFile>;
    get(
      params: Params$Resource$Edits$Expansionfiles$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Edits$Expansionfiles$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ExpansionFile>,
      callback: BodyResponseCallback<Schema$ExpansionFile>
    ): void;
    get(
      params: Params$Resource$Edits$Expansionfiles$Get,
      callback: BodyResponseCallback<Schema$ExpansionFile>
    ): void;
    get(callback: BodyResponseCallback<Schema$ExpansionFile>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Edits$Expansionfiles$Get
        | BodyResponseCallback<Schema$ExpansionFile>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ExpansionFile>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ExpansionFile>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ExpansionFile> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Edits$Expansionfiles$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Edits$Expansionfiles$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [
          'packageName',
          'editId',
          'apkVersionCode',
          'expansionFileType',
        ],
        pathParams: [
          'apkVersionCode',
          'editId',
          'expansionFileType',
          'packageName',
        ],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ExpansionFile>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ExpansionFile>(parameters);
      }
    }

    /**
     * Patches the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.edits.expansionfiles.patch({
     *     // The version code of the APK whose expansion file configuration is being read or modified.
     *     apkVersionCode: 'placeholder-value',
     *     // Identifier of the edit.
     *     editId: 'placeholder-value',
     *     // The file type of the expansion file configuration which is being updated.
     *     expansionFileType: 'placeholder-value',
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "fileSize": "my_fileSize",
     *       //   "referencesVersion": 0
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "fileSize": "my_fileSize",
     *   //   "referencesVersion": 0
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
      params: Params$Resource$Edits$Expansionfiles$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Edits$Expansionfiles$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ExpansionFile>;
    patch(
      params: Params$Resource$Edits$Expansionfiles$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Edits$Expansionfiles$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$ExpansionFile>,
      callback: BodyResponseCallback<Schema$ExpansionFile>
    ): void;
    patch(
      params: Params$Resource$Edits$Expansionfiles$Patch,
      callback: BodyResponseCallback<Schema$ExpansionFile>
    ): void;
    patch(callback: BodyResponseCallback<Schema$ExpansionFile>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Edits$Expansionfiles$Patch
        | BodyResponseCallback<Schema$ExpansionFile>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ExpansionFile>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ExpansionFile>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ExpansionFile> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Edits$Expansionfiles$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Edits$Expansionfiles$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: [
          'packageName',
          'editId',
          'apkVersionCode',
          'expansionFileType',
        ],
        pathParams: [
          'apkVersionCode',
          'editId',
          'expansionFileType',
          'packageName',
        ],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ExpansionFile>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ExpansionFile>(parameters);
      }
    }

    /**
     * Updates the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.edits.expansionfiles.update({
     *     // The version code of the APK whose expansion file configuration is being read or modified.
     *     apkVersionCode: 'placeholder-value',
     *     // Identifier of the edit.
     *     editId: 'placeholder-value',
     *     // The file type of the file configuration which is being read or modified.
     *     expansionFileType: 'placeholder-value',
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "fileSize": "my_fileSize",
     *       //   "referencesVersion": 0
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "fileSize": "my_fileSize",
     *   //   "referencesVersion": 0
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
    update(
      params: Params$Resource$Edits$Expansionfiles$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Edits$Expansionfiles$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ExpansionFile>;
    update(
      params: Params$Resource$Edits$Expansionfiles$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Edits$Expansionfiles$Update,
      options: MethodOptions | BodyResponseCallback<Schema$ExpansionFile>,
      callback: BodyResponseCallback<Schema$ExpansionFile>
    ): void;
    update(
      params: Params$Resource$Edits$Expansionfiles$Update,
      callback: BodyResponseCallback<Schema$ExpansionFile>
    ): void;
    update(callback: BodyResponseCallback<Schema$ExpansionFile>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Edits$Expansionfiles$Update
        | BodyResponseCallback<Schema$ExpansionFile>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ExpansionFile>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ExpansionFile>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ExpansionFile> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Edits$Expansionfiles$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Edits$Expansionfiles$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: [
          'packageName',
          'editId',
          'apkVersionCode',
          'expansionFileType',
        ],
        pathParams: [
          'apkVersionCode',
          'editId',
          'expansionFileType',
          'packageName',
        ],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ExpansionFile>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ExpansionFile>(parameters);
      }
    }

    /**
     * Uploads a new expansion file and attaches to the specified APK.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.edits.expansionfiles.upload({
     *     // The version code of the APK whose expansion file configuration is being read or modified.
     *     apkVersionCode: 'placeholder-value',
     *     // Identifier of the edit.
     *     editId: 'placeholder-value',
     *     // The file type of the expansion file configuration which is being updated.
     *     expansionFileType: 'placeholder-value',
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *
     *     requestBody: {
     *       // request body parameters
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
     *   //   "expansionFile": {}
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
      params: Params$Resource$Edits$Expansionfiles$Upload,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    upload(
      params?: Params$Resource$Edits$Expansionfiles$Upload,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ExpansionFilesUploadResponse>;
    upload(
      params: Params$Resource$Edits$Expansionfiles$Upload,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    upload(
      params: Params$Resource$Edits$Expansionfiles$Upload,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ExpansionFilesUploadResponse>,
      callback: BodyResponseCallback<Schema$ExpansionFilesUploadResponse>
    ): void;
    upload(
      params: Params$Resource$Edits$Expansionfiles$Upload,
      callback: BodyResponseCallback<Schema$ExpansionFilesUploadResponse>
    ): void;
    upload(
      callback: BodyResponseCallback<Schema$ExpansionFilesUploadResponse>
    ): void;
    upload(
      paramsOrCallback?:
        | Params$Resource$Edits$Expansionfiles$Upload
        | BodyResponseCallback<Schema$ExpansionFilesUploadResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ExpansionFilesUploadResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ExpansionFilesUploadResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ExpansionFilesUploadResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Edits$Expansionfiles$Upload;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Edits$Expansionfiles$Upload;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        mediaUrl: (
          rootUrl +
          '/upload/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}'
        ).replace(/([^:]\/)\/+/g, '$1'),
        requiredParams: [
          'packageName',
          'editId',
          'apkVersionCode',
          'expansionFileType',
        ],
        pathParams: [
          'apkVersionCode',
          'editId',
          'expansionFileType',
          'packageName',
        ],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ExpansionFilesUploadResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ExpansionFilesUploadResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Edits$Expansionfiles$Get
    extends StandardParameters {
    /**
     * The version code of the APK whose expansion file configuration is being read or modified.
     */
    apkVersionCode?: number;
    /**
     * Identifier of the edit.
     */
    editId?: string;
    /**
     * The file type of the file configuration which is being read or modified.
     */
    expansionFileType?: string;
    /**
     * Package name of the app.
     */
    packageName?: string;
  }
  export interface Params$Resource$Edits$Expansionfiles$Patch
    extends StandardParameters {
    /**
     * The version code of the APK whose expansion file configuration is being read or modified.
     */
    apkVersionCode?: number;
    /**
     * Identifier of the edit.
     */
    editId?: string;
    /**
     * The file type of the expansion file configuration which is being updated.
     */
    expansionFileType?: string;
    /**
     * Package name of the app.
     */
    packageName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ExpansionFile;
  }
  export interface Params$Resource$Edits$Expansionfiles$Update
    extends StandardParameters {
    /**
     * The version code of the APK whose expansion file configuration is being read or modified.
     */
    apkVersionCode?: number;
    /**
     * Identifier of the edit.
     */
    editId?: string;
    /**
     * The file type of the file configuration which is being read or modified.
     */
    expansionFileType?: string;
    /**
     * Package name of the app.
     */
    packageName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ExpansionFile;
  }
  export interface Params$Resource$Edits$Expansionfiles$Upload
    extends StandardParameters {
    /**
     * The version code of the APK whose expansion file configuration is being read or modified.
     */
    apkVersionCode?: number;
    /**
     * Identifier of the edit.
     */
    editId?: string;
    /**
     * The file type of the expansion file configuration which is being updated.
     */
    expansionFileType?: string;
    /**
     * Package name of the app.
     */
    packageName?: string;

    /**
     * Request body metadata
     */
    requestBody?: {};

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

  export class Resource$Edits$Images {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes the image (specified by id) from the edit.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.edits.images.delete({
     *     // Identifier of the edit.
     *     editId: 'placeholder-value',
     *     // Unique identifier an image within the set of images attached to this edit.
     *     imageId: 'placeholder-value',
     *     // Type of the Image.
     *     imageType: 'placeholder-value',
     *     // Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).
     *     language: 'placeholder-value',
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
      params: Params$Resource$Edits$Images$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Edits$Images$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Edits$Images$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Edits$Images$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Edits$Images$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Edits$Images$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Edits$Images$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Edits$Images$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}/{imageId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: [
          'packageName',
          'editId',
          'language',
          'imageType',
          'imageId',
        ],
        pathParams: [
          'editId',
          'imageId',
          'imageType',
          'language',
          'packageName',
        ],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Deletes all images for the specified language and image type. Returns an empty response if no images are found.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.edits.images.deleteall({
     *     // Identifier of the edit.
     *     editId: 'placeholder-value',
     *     // Type of the Image. Providing an image type that refers to no images is a no-op.
     *     imageType: 'placeholder-value',
     *     // Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German). Providing a language that is not supported by the App is a no-op.
     *     language: 'placeholder-value',
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "deleted": []
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
    deleteall(
      params: Params$Resource$Edits$Images$Deleteall,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    deleteall(
      params?: Params$Resource$Edits$Images$Deleteall,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ImagesDeleteAllResponse>;
    deleteall(
      params: Params$Resource$Edits$Images$Deleteall,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    deleteall(
      params: Params$Resource$Edits$Images$Deleteall,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ImagesDeleteAllResponse>,
      callback: BodyResponseCallback<Schema$ImagesDeleteAllResponse>
    ): void;
    deleteall(
      params: Params$Resource$Edits$Images$Deleteall,
      callback: BodyResponseCallback<Schema$ImagesDeleteAllResponse>
    ): void;
    deleteall(
      callback: BodyResponseCallback<Schema$ImagesDeleteAllResponse>
    ): void;
    deleteall(
      paramsOrCallback?:
        | Params$Resource$Edits$Images$Deleteall
        | BodyResponseCallback<Schema$ImagesDeleteAllResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ImagesDeleteAllResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ImagesDeleteAllResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ImagesDeleteAllResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Edits$Images$Deleteall;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Edits$Images$Deleteall;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'editId', 'language', 'imageType'],
        pathParams: ['editId', 'imageType', 'language', 'packageName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ImagesDeleteAllResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ImagesDeleteAllResponse>(parameters);
      }
    }

    /**
     * Lists all images. The response may be empty.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.edits.images.list({
     *     // Identifier of the edit.
     *     editId: 'placeholder-value',
     *     // Type of the Image. Providing an image type that refers to no images will return an empty response.
     *     imageType: 'placeholder-value',
     *     // Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German). There must be a store listing for the specified language.
     *     language: 'placeholder-value',
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "images": []
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
      params: Params$Resource$Edits$Images$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Edits$Images$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ImagesListResponse>;
    list(
      params: Params$Resource$Edits$Images$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Edits$Images$List,
      options: MethodOptions | BodyResponseCallback<Schema$ImagesListResponse>,
      callback: BodyResponseCallback<Schema$ImagesListResponse>
    ): void;
    list(
      params: Params$Resource$Edits$Images$List,
      callback: BodyResponseCallback<Schema$ImagesListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ImagesListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Edits$Images$List
        | BodyResponseCallback<Schema$ImagesListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ImagesListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ImagesListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ImagesListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Edits$Images$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Edits$Images$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'editId', 'language', 'imageType'],
        pathParams: ['editId', 'imageType', 'language', 'packageName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ImagesListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ImagesListResponse>(parameters);
      }
    }

    /**
     * Uploads an image of the specified language and image type, and adds to the edit.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.edits.images.upload({
     *     // Identifier of the edit.
     *     editId: 'placeholder-value',
     *     // Type of the Image.
     *     imageType: 'placeholder-value',
     *     // Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German). Providing a language that is not supported by the App is a no-op.
     *     language: 'placeholder-value',
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *
     *     requestBody: {
     *       // request body parameters
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
     *   //   "image": {}
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
      params: Params$Resource$Edits$Images$Upload,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    upload(
      params?: Params$Resource$Edits$Images$Upload,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ImagesUploadResponse>;
    upload(
      params: Params$Resource$Edits$Images$Upload,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    upload(
      params: Params$Resource$Edits$Images$Upload,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ImagesUploadResponse>,
      callback: BodyResponseCallback<Schema$ImagesUploadResponse>
    ): void;
    upload(
      params: Params$Resource$Edits$Images$Upload,
      callback: BodyResponseCallback<Schema$ImagesUploadResponse>
    ): void;
    upload(callback: BodyResponseCallback<Schema$ImagesUploadResponse>): void;
    upload(
      paramsOrCallback?:
        | Params$Resource$Edits$Images$Upload
        | BodyResponseCallback<Schema$ImagesUploadResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ImagesUploadResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ImagesUploadResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ImagesUploadResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Edits$Images$Upload;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Edits$Images$Upload;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        mediaUrl: (
          rootUrl +
          '/upload/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}'
        ).replace(/([^:]\/)\/+/g, '$1'),
        requiredParams: ['packageName', 'editId', 'language', 'imageType'],
        pathParams: ['editId', 'imageType', 'language', 'packageName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ImagesUploadResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ImagesUploadResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Edits$Images$Delete
    extends StandardParameters {
    /**
     * Identifier of the edit.
     */
    editId?: string;
    /**
     * Unique identifier an image within the set of images attached to this edit.
     */
    imageId?: string;
    /**
     * Type of the Image.
     */
    imageType?: string;
    /**
     * Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).
     */
    language?: string;
    /**
     * Package name of the app.
     */
    packageName?: string;
  }
  export interface Params$Resource$Edits$Images$Deleteall
    extends StandardParameters {
    /**
     * Identifier of the edit.
     */
    editId?: string;
    /**
     * Type of the Image. Providing an image type that refers to no images is a no-op.
     */
    imageType?: string;
    /**
     * Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German). Providing a language that is not supported by the App is a no-op.
     */
    language?: string;
    /**
     * Package name of the app.
     */
    packageName?: string;
  }
  export interface Params$Resource$Edits$Images$List
    extends StandardParameters {
    /**
     * Identifier of the edit.
     */
    editId?: string;
    /**
     * Type of the Image. Providing an image type that refers to no images will return an empty response.
     */
    imageType?: string;
    /**
     * Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German). There must be a store listing for the specified language.
     */
    language?: string;
    /**
     * Package name of the app.
     */
    packageName?: string;
  }
  export interface Params$Resource$Edits$Images$Upload
    extends StandardParameters {
    /**
     * Identifier of the edit.
     */
    editId?: string;
    /**
     * Type of the Image.
     */
    imageType?: string;
    /**
     * Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German). Providing a language that is not supported by the App is a no-op.
     */
    language?: string;
    /**
     * Package name of the app.
     */
    packageName?: string;

    /**
     * Request body metadata
     */
    requestBody?: {};

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

  export class Resource$Edits$Listings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a localized store listing.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.edits.listings.delete({
     *     // Identifier of the edit.
     *     editId: 'placeholder-value',
     *     // Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).
     *     language: 'placeholder-value',
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
      params: Params$Resource$Edits$Listings$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Edits$Listings$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Edits$Listings$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Edits$Listings$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Edits$Listings$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Edits$Listings$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Edits$Listings$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Edits$Listings$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'editId', 'language'],
        pathParams: ['editId', 'language', 'packageName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Deletes all store listings.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.edits.listings.deleteall({
     *     // Identifier of the edit.
     *     editId: 'placeholder-value',
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
    deleteall(
      params: Params$Resource$Edits$Listings$Deleteall,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    deleteall(
      params?: Params$Resource$Edits$Listings$Deleteall,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    deleteall(
      params: Params$Resource$Edits$Listings$Deleteall,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    deleteall(
      params: Params$Resource$Edits$Listings$Deleteall,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    deleteall(
      params: Params$Resource$Edits$Listings$Deleteall,
      callback: BodyResponseCallback<void>
    ): void;
    deleteall(callback: BodyResponseCallback<void>): void;
    deleteall(
      paramsOrCallback?:
        | Params$Resource$Edits$Listings$Deleteall
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Edits$Listings$Deleteall;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Edits$Listings$Deleteall;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'editId'],
        pathParams: ['editId', 'packageName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Gets a localized store listing.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.edits.listings.get({
     *     // Identifier of the edit.
     *     editId: 'placeholder-value',
     *     // Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).
     *     language: 'placeholder-value',
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "fullDescription": "my_fullDescription",
     *   //   "language": "my_language",
     *   //   "shortDescription": "my_shortDescription",
     *   //   "title": "my_title",
     *   //   "video": "my_video"
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
      params: Params$Resource$Edits$Listings$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Edits$Listings$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Listing>;
    get(
      params: Params$Resource$Edits$Listings$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Edits$Listings$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Listing>,
      callback: BodyResponseCallback<Schema$Listing>
    ): void;
    get(
      params: Params$Resource$Edits$Listings$Get,
      callback: BodyResponseCallback<Schema$Listing>
    ): void;
    get(callback: BodyResponseCallback<Schema$Listing>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Edits$Listings$Get
        | BodyResponseCallback<Schema$Listing>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Listing>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Listing>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Listing> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Edits$Listings$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Edits$Listings$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'editId', 'language'],
        pathParams: ['editId', 'language', 'packageName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Listing>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Listing>(parameters);
      }
    }

    /**
     * Lists all localized store listings.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.edits.listings.list({
     *     // Identifier of the edit.
     *     editId: 'placeholder-value',
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "listings": []
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
      params: Params$Resource$Edits$Listings$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Edits$Listings$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListingsListResponse>;
    list(
      params: Params$Resource$Edits$Listings$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Edits$Listings$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListingsListResponse>,
      callback: BodyResponseCallback<Schema$ListingsListResponse>
    ): void;
    list(
      params: Params$Resource$Edits$Listings$List,
      callback: BodyResponseCallback<Schema$ListingsListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListingsListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Edits$Listings$List
        | BodyResponseCallback<Schema$ListingsListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListingsListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListingsListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListingsListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Edits$Listings$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Edits$Listings$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'editId'],
        pathParams: ['editId', 'packageName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListingsListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListingsListResponse>(parameters);
      }
    }

    /**
     * Patches a localized store listing.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.edits.listings.patch({
     *     // Identifier of the edit.
     *     editId: 'placeholder-value',
     *     // Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).
     *     language: 'placeholder-value',
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "fullDescription": "my_fullDescription",
     *       //   "language": "my_language",
     *       //   "shortDescription": "my_shortDescription",
     *       //   "title": "my_title",
     *       //   "video": "my_video"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "fullDescription": "my_fullDescription",
     *   //   "language": "my_language",
     *   //   "shortDescription": "my_shortDescription",
     *   //   "title": "my_title",
     *   //   "video": "my_video"
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
      params: Params$Resource$Edits$Listings$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Edits$Listings$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Listing>;
    patch(
      params: Params$Resource$Edits$Listings$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Edits$Listings$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Listing>,
      callback: BodyResponseCallback<Schema$Listing>
    ): void;
    patch(
      params: Params$Resource$Edits$Listings$Patch,
      callback: BodyResponseCallback<Schema$Listing>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Listing>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Edits$Listings$Patch
        | BodyResponseCallback<Schema$Listing>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Listing>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Listing>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Listing> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Edits$Listings$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Edits$Listings$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'editId', 'language'],
        pathParams: ['editId', 'language', 'packageName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Listing>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Listing>(parameters);
      }
    }

    /**
     * Creates or updates a localized store listing.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.edits.listings.update({
     *     // Identifier of the edit.
     *     editId: 'placeholder-value',
     *     // Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).
     *     language: 'placeholder-value',
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "fullDescription": "my_fullDescription",
     *       //   "language": "my_language",
     *       //   "shortDescription": "my_shortDescription",
     *       //   "title": "my_title",
     *       //   "video": "my_video"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "fullDescription": "my_fullDescription",
     *   //   "language": "my_language",
     *   //   "shortDescription": "my_shortDescription",
     *   //   "title": "my_title",
     *   //   "video": "my_video"
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
    update(
      params: Params$Resource$Edits$Listings$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Edits$Listings$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Listing>;
    update(
      params: Params$Resource$Edits$Listings$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Edits$Listings$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Listing>,
      callback: BodyResponseCallback<Schema$Listing>
    ): void;
    update(
      params: Params$Resource$Edits$Listings$Update,
      callback: BodyResponseCallback<Schema$Listing>
    ): void;
    update(callback: BodyResponseCallback<Schema$Listing>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Edits$Listings$Update
        | BodyResponseCallback<Schema$Listing>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Listing>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Listing>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Listing> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Edits$Listings$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Edits$Listings$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'editId', 'language'],
        pathParams: ['editId', 'language', 'packageName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Listing>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Listing>(parameters);
      }
    }
  }

  export interface Params$Resource$Edits$Listings$Delete
    extends StandardParameters {
    /**
     * Identifier of the edit.
     */
    editId?: string;
    /**
     * Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).
     */
    language?: string;
    /**
     * Package name of the app.
     */
    packageName?: string;
  }
  export interface Params$Resource$Edits$Listings$Deleteall
    extends StandardParameters {
    /**
     * Identifier of the edit.
     */
    editId?: string;
    /**
     * Package name of the app.
     */
    packageName?: string;
  }
  export interface Params$Resource$Edits$Listings$Get
    extends StandardParameters {
    /**
     * Identifier of the edit.
     */
    editId?: string;
    /**
     * Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).
     */
    language?: string;
    /**
     * Package name of the app.
     */
    packageName?: string;
  }
  export interface Params$Resource$Edits$Listings$List
    extends StandardParameters {
    /**
     * Identifier of the edit.
     */
    editId?: string;
    /**
     * Package name of the app.
     */
    packageName?: string;
  }
  export interface Params$Resource$Edits$Listings$Patch
    extends StandardParameters {
    /**
     * Identifier of the edit.
     */
    editId?: string;
    /**
     * Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).
     */
    language?: string;
    /**
     * Package name of the app.
     */
    packageName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Listing;
  }
  export interface Params$Resource$Edits$Listings$Update
    extends StandardParameters {
    /**
     * Identifier of the edit.
     */
    editId?: string;
    /**
     * Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).
     */
    language?: string;
    /**
     * Package name of the app.
     */
    packageName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Listing;
  }

  export class Resource$Edits$Testers {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets testers.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.edits.testers.get({
     *     // Identifier of the edit.
     *     editId: 'placeholder-value',
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *     // The track to read from.
     *     track: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "googleGroups": []
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
      params: Params$Resource$Edits$Testers$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Edits$Testers$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Testers>;
    get(
      params: Params$Resource$Edits$Testers$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Edits$Testers$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Testers>,
      callback: BodyResponseCallback<Schema$Testers>
    ): void;
    get(
      params: Params$Resource$Edits$Testers$Get,
      callback: BodyResponseCallback<Schema$Testers>
    ): void;
    get(callback: BodyResponseCallback<Schema$Testers>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Edits$Testers$Get
        | BodyResponseCallback<Schema$Testers>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Testers>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Testers>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Testers> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Edits$Testers$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Edits$Testers$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/edits/{editId}/testers/{track}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'editId', 'track'],
        pathParams: ['editId', 'packageName', 'track'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Testers>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Testers>(parameters);
      }
    }

    /**
     * Patches testers.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.edits.testers.patch({
     *     // Identifier of the edit.
     *     editId: 'placeholder-value',
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *     // The track to update.
     *     track: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "googleGroups": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "googleGroups": []
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
      params: Params$Resource$Edits$Testers$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Edits$Testers$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Testers>;
    patch(
      params: Params$Resource$Edits$Testers$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Edits$Testers$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Testers>,
      callback: BodyResponseCallback<Schema$Testers>
    ): void;
    patch(
      params: Params$Resource$Edits$Testers$Patch,
      callback: BodyResponseCallback<Schema$Testers>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Testers>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Edits$Testers$Patch
        | BodyResponseCallback<Schema$Testers>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Testers>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Testers>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Testers> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Edits$Testers$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Edits$Testers$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/edits/{editId}/testers/{track}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'editId', 'track'],
        pathParams: ['editId', 'packageName', 'track'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Testers>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Testers>(parameters);
      }
    }

    /**
     * Updates testers.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.edits.testers.update({
     *     // Identifier of the edit.
     *     editId: 'placeholder-value',
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *     // The track to update.
     *     track: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "googleGroups": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "googleGroups": []
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
    update(
      params: Params$Resource$Edits$Testers$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Edits$Testers$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Testers>;
    update(
      params: Params$Resource$Edits$Testers$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Edits$Testers$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Testers>,
      callback: BodyResponseCallback<Schema$Testers>
    ): void;
    update(
      params: Params$Resource$Edits$Testers$Update,
      callback: BodyResponseCallback<Schema$Testers>
    ): void;
    update(callback: BodyResponseCallback<Schema$Testers>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Edits$Testers$Update
        | BodyResponseCallback<Schema$Testers>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Testers>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Testers>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Testers> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Edits$Testers$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Edits$Testers$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/edits/{editId}/testers/{track}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'editId', 'track'],
        pathParams: ['editId', 'packageName', 'track'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Testers>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Testers>(parameters);
      }
    }
  }

  export interface Params$Resource$Edits$Testers$Get
    extends StandardParameters {
    /**
     * Identifier of the edit.
     */
    editId?: string;
    /**
     * Package name of the app.
     */
    packageName?: string;
    /**
     * The track to read from.
     */
    track?: string;
  }
  export interface Params$Resource$Edits$Testers$Patch
    extends StandardParameters {
    /**
     * Identifier of the edit.
     */
    editId?: string;
    /**
     * Package name of the app.
     */
    packageName?: string;
    /**
     * The track to update.
     */
    track?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Testers;
  }
  export interface Params$Resource$Edits$Testers$Update
    extends StandardParameters {
    /**
     * Identifier of the edit.
     */
    editId?: string;
    /**
     * Package name of the app.
     */
    packageName?: string;
    /**
     * The track to update.
     */
    track?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Testers;
  }

  export class Resource$Edits$Tracks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets a track.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.edits.tracks.get({
     *     // Identifier of the edit.
     *     editId: 'placeholder-value',
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *     // Identifier of the track.
     *     track: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "releases": [],
     *   //   "track": "my_track"
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
      params: Params$Resource$Edits$Tracks$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Edits$Tracks$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Track>;
    get(
      params: Params$Resource$Edits$Tracks$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Edits$Tracks$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Track>,
      callback: BodyResponseCallback<Schema$Track>
    ): void;
    get(
      params: Params$Resource$Edits$Tracks$Get,
      callback: BodyResponseCallback<Schema$Track>
    ): void;
    get(callback: BodyResponseCallback<Schema$Track>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Edits$Tracks$Get
        | BodyResponseCallback<Schema$Track>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Track>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Track>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Track> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Edits$Tracks$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Edits$Tracks$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks/{track}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'editId', 'track'],
        pathParams: ['editId', 'packageName', 'track'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Track>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Track>(parameters);
      }
    }

    /**
     * Lists all tracks.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.edits.tracks.list({
     *     // Identifier of the edit.
     *     editId: 'placeholder-value',
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "tracks": []
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
      params: Params$Resource$Edits$Tracks$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Edits$Tracks$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TracksListResponse>;
    list(
      params: Params$Resource$Edits$Tracks$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Edits$Tracks$List,
      options: MethodOptions | BodyResponseCallback<Schema$TracksListResponse>,
      callback: BodyResponseCallback<Schema$TracksListResponse>
    ): void;
    list(
      params: Params$Resource$Edits$Tracks$List,
      callback: BodyResponseCallback<Schema$TracksListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$TracksListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Edits$Tracks$List
        | BodyResponseCallback<Schema$TracksListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TracksListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TracksListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$TracksListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Edits$Tracks$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Edits$Tracks$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'editId'],
        pathParams: ['editId', 'packageName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TracksListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TracksListResponse>(parameters);
      }
    }

    /**
     * Patches a track.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.edits.tracks.patch({
     *     // Identifier of the edit.
     *     editId: 'placeholder-value',
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *     // Identifier of the track.
     *     track: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "releases": [],
     *       //   "track": "my_track"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "releases": [],
     *   //   "track": "my_track"
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
      params: Params$Resource$Edits$Tracks$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Edits$Tracks$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Track>;
    patch(
      params: Params$Resource$Edits$Tracks$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Edits$Tracks$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Track>,
      callback: BodyResponseCallback<Schema$Track>
    ): void;
    patch(
      params: Params$Resource$Edits$Tracks$Patch,
      callback: BodyResponseCallback<Schema$Track>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Track>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Edits$Tracks$Patch
        | BodyResponseCallback<Schema$Track>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Track>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Track>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Track> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Edits$Tracks$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Edits$Tracks$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks/{track}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'editId', 'track'],
        pathParams: ['editId', 'packageName', 'track'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Track>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Track>(parameters);
      }
    }

    /**
     * Updates a track.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.edits.tracks.update({
     *     // Identifier of the edit.
     *     editId: 'placeholder-value',
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *     // Identifier of the track.
     *     track: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "releases": [],
     *       //   "track": "my_track"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "releases": [],
     *   //   "track": "my_track"
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
    update(
      params: Params$Resource$Edits$Tracks$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Edits$Tracks$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Track>;
    update(
      params: Params$Resource$Edits$Tracks$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Edits$Tracks$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Track>,
      callback: BodyResponseCallback<Schema$Track>
    ): void;
    update(
      params: Params$Resource$Edits$Tracks$Update,
      callback: BodyResponseCallback<Schema$Track>
    ): void;
    update(callback: BodyResponseCallback<Schema$Track>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Edits$Tracks$Update
        | BodyResponseCallback<Schema$Track>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Track>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Track>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Track> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Edits$Tracks$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Edits$Tracks$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks/{track}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'editId', 'track'],
        pathParams: ['editId', 'packageName', 'track'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Track>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Track>(parameters);
      }
    }
  }

  export interface Params$Resource$Edits$Tracks$Get extends StandardParameters {
    /**
     * Identifier of the edit.
     */
    editId?: string;
    /**
     * Package name of the app.
     */
    packageName?: string;
    /**
     * Identifier of the track.
     */
    track?: string;
  }
  export interface Params$Resource$Edits$Tracks$List
    extends StandardParameters {
    /**
     * Identifier of the edit.
     */
    editId?: string;
    /**
     * Package name of the app.
     */
    packageName?: string;
  }
  export interface Params$Resource$Edits$Tracks$Patch
    extends StandardParameters {
    /**
     * Identifier of the edit.
     */
    editId?: string;
    /**
     * Package name of the app.
     */
    packageName?: string;
    /**
     * Identifier of the track.
     */
    track?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Track;
  }
  export interface Params$Resource$Edits$Tracks$Update
    extends StandardParameters {
    /**
     * Identifier of the edit.
     */
    editId?: string;
    /**
     * Package name of the app.
     */
    packageName?: string;
    /**
     * Identifier of the track.
     */
    track?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Track;
  }

  export class Resource$Generatedapks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Downloads a single signed APK generated from an app bundle.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.generatedapks.download({
     *     // Download ID, which uniquely identifies the APK to download. Can be obtained from the response of `generatedapks.list` method.
     *     downloadId: 'placeholder-value',
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *     // Version code of the app bundle.
     *     versionCode: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
    download(
      params: Params$Resource$Generatedapks$Download,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    download(
      params?: Params$Resource$Generatedapks$Download,
      options?: MethodOptions
    ): GaxiosPromise<unknown>;
    download(
      params: Params$Resource$Generatedapks$Download,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    download(
      params: Params$Resource$Generatedapks$Download,
      options: MethodOptions | BodyResponseCallback<unknown>,
      callback: BodyResponseCallback<unknown>
    ): void;
    download(
      params: Params$Resource$Generatedapks$Download,
      callback: BodyResponseCallback<unknown>
    ): void;
    download(callback: BodyResponseCallback<unknown>): void;
    download(
      paramsOrCallback?:
        | Params$Resource$Generatedapks$Download
        | BodyResponseCallback<unknown>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<unknown>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<unknown> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<unknown> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Generatedapks$Download;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Generatedapks$Download;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/generatedApks/{versionCode}/downloads/{downloadId}:download'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'versionCode', 'downloadId'],
        pathParams: ['downloadId', 'packageName', 'versionCode'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<unknown>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<unknown>(parameters);
      }
    }

    /**
     * Returns download metadata for all APKs that were generated from a given app bundle.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.generatedapks.list({
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *     // Version code of the app bundle.
     *     versionCode: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "generatedApks": []
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
      params: Params$Resource$Generatedapks$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Generatedapks$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GeneratedApksListResponse>;
    list(
      params: Params$Resource$Generatedapks$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Generatedapks$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GeneratedApksListResponse>,
      callback: BodyResponseCallback<Schema$GeneratedApksListResponse>
    ): void;
    list(
      params: Params$Resource$Generatedapks$List,
      callback: BodyResponseCallback<Schema$GeneratedApksListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GeneratedApksListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Generatedapks$List
        | BodyResponseCallback<Schema$GeneratedApksListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GeneratedApksListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GeneratedApksListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GeneratedApksListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Generatedapks$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Generatedapks$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/generatedApks/{versionCode}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'versionCode'],
        pathParams: ['packageName', 'versionCode'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GeneratedApksListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GeneratedApksListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Generatedapks$Download
    extends StandardParameters {
    /**
     * Download ID, which uniquely identifies the APK to download. Can be obtained from the response of `generatedapks.list` method.
     */
    downloadId?: string;
    /**
     * Package name of the app.
     */
    packageName?: string;
    /**
     * Version code of the app bundle.
     */
    versionCode?: number;
  }
  export interface Params$Resource$Generatedapks$List
    extends StandardParameters {
    /**
     * Package name of the app.
     */
    packageName?: string;
    /**
     * Version code of the app bundle.
     */
    versionCode?: number;
  }

  export class Resource$Grants {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Grant access for a user to the given package.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.grants.create({
     *     // Required. The user which needs permission. Format: developers/{developer\}/users/{user\}
     *     parent: 'developers/my-developer/users/my-user',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "appLevelPermissions": [],
     *       //   "name": "my_name",
     *       //   "packageName": "my_packageName"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appLevelPermissions": [],
     *   //   "name": "my_name",
     *   //   "packageName": "my_packageName"
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
      params: Params$Resource$Grants$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Grants$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Grant>;
    create(
      params: Params$Resource$Grants$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Grants$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Grant>,
      callback: BodyResponseCallback<Schema$Grant>
    ): void;
    create(
      params: Params$Resource$Grants$Create,
      callback: BodyResponseCallback<Schema$Grant>
    ): void;
    create(callback: BodyResponseCallback<Schema$Grant>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Grants$Create
        | BodyResponseCallback<Schema$Grant>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Grant>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Grant>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Grant> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Grants$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Grants$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/androidpublisher/v3/{+parent}/grants').replace(
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
        createAPIRequest<Schema$Grant>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Grant>(parameters);
      }
    }

    /**
     * Removes all access for the user to the given package or developer account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.grants.delete({
     *     // Required. The name of the grant to delete. Format: developers/{developer\}/users/{email\}/grants/{package_name\}
     *     name: 'developers/my-developer/users/my-user/grants/my-grant',
     *   });
     *   console.log(res.data);
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
      params: Params$Resource$Grants$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Grants$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Grants$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Grants$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Grants$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Grants$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Grants$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Grants$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/androidpublisher/v3/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Updates access for the user to the given package.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.grants.patch({
     *     // Required. Resource name for this grant, following the pattern "developers/{developer\}/users/{email\}/grants/{package_name\}".
     *     name: 'developers/my-developer/users/my-user/grants/my-grant',
     *     // Optional. The list of fields to be updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "appLevelPermissions": [],
     *       //   "name": "my_name",
     *       //   "packageName": "my_packageName"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appLevelPermissions": [],
     *   //   "name": "my_name",
     *   //   "packageName": "my_packageName"
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
      params: Params$Resource$Grants$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Grants$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Grant>;
    patch(
      params: Params$Resource$Grants$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Grants$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Grant>,
      callback: BodyResponseCallback<Schema$Grant>
    ): void;
    patch(
      params: Params$Resource$Grants$Patch,
      callback: BodyResponseCallback<Schema$Grant>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Grant>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Grants$Patch
        | BodyResponseCallback<Schema$Grant>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Grant>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Grant>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Grant> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Grants$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Grants$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/androidpublisher/v3/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$Grant>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Grant>(parameters);
      }
    }
  }

  export interface Params$Resource$Grants$Create extends StandardParameters {
    /**
     * Required. The user which needs permission. Format: developers/{developer\}/users/{user\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Grant;
  }
  export interface Params$Resource$Grants$Delete extends StandardParameters {
    /**
     * Required. The name of the grant to delete. Format: developers/{developer\}/users/{email\}/grants/{package_name\}
     */
    name?: string;
  }
  export interface Params$Resource$Grants$Patch extends StandardParameters {
    /**
     * Required. Resource name for this grant, following the pattern "developers/{developer\}/users/{email\}/grants/{package_name\}".
     */
    name?: string;
    /**
     * Optional. The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Grant;
  }

  export class Resource$Inappproducts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes an in-app product (i.e. a managed product or a subscriptions).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.inappproducts.delete({
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *     // Unique identifier for the in-app product.
     *     sku: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
      params: Params$Resource$Inappproducts$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Inappproducts$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Inappproducts$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Inappproducts$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Inappproducts$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Inappproducts$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Inappproducts$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Inappproducts$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/inappproducts/{sku}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'sku'],
        pathParams: ['packageName', 'sku'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Gets an in-app product, which can be a managed product or a subscription.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.inappproducts.get({
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *     // Unique identifier for the in-app product.
     *     sku: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "defaultLanguage": "my_defaultLanguage",
     *   //   "defaultPrice": {},
     *   //   "gracePeriod": "my_gracePeriod",
     *   //   "listings": {},
     *   //   "managedProductTaxesAndComplianceSettings": {},
     *   //   "packageName": "my_packageName",
     *   //   "prices": {},
     *   //   "purchaseType": "my_purchaseType",
     *   //   "sku": "my_sku",
     *   //   "status": "my_status",
     *   //   "subscriptionPeriod": "my_subscriptionPeriod",
     *   //   "subscriptionTaxesAndComplianceSettings": {},
     *   //   "trialPeriod": "my_trialPeriod"
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
      params: Params$Resource$Inappproducts$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Inappproducts$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$InAppProduct>;
    get(
      params: Params$Resource$Inappproducts$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Inappproducts$Get,
      options: MethodOptions | BodyResponseCallback<Schema$InAppProduct>,
      callback: BodyResponseCallback<Schema$InAppProduct>
    ): void;
    get(
      params: Params$Resource$Inappproducts$Get,
      callback: BodyResponseCallback<Schema$InAppProduct>
    ): void;
    get(callback: BodyResponseCallback<Schema$InAppProduct>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Inappproducts$Get
        | BodyResponseCallback<Schema$InAppProduct>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$InAppProduct>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$InAppProduct>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$InAppProduct> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Inappproducts$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Inappproducts$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/inappproducts/{sku}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'sku'],
        pathParams: ['packageName', 'sku'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$InAppProduct>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$InAppProduct>(parameters);
      }
    }

    /**
     * Creates an in-app product (i.e. a managed product or a subscriptions).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.inappproducts.insert({
     *     // If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
     *     autoConvertMissingPrices: 'placeholder-value',
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "defaultLanguage": "my_defaultLanguage",
     *       //   "defaultPrice": {},
     *       //   "gracePeriod": "my_gracePeriod",
     *       //   "listings": {},
     *       //   "managedProductTaxesAndComplianceSettings": {},
     *       //   "packageName": "my_packageName",
     *       //   "prices": {},
     *       //   "purchaseType": "my_purchaseType",
     *       //   "sku": "my_sku",
     *       //   "status": "my_status",
     *       //   "subscriptionPeriod": "my_subscriptionPeriod",
     *       //   "subscriptionTaxesAndComplianceSettings": {},
     *       //   "trialPeriod": "my_trialPeriod"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "defaultLanguage": "my_defaultLanguage",
     *   //   "defaultPrice": {},
     *   //   "gracePeriod": "my_gracePeriod",
     *   //   "listings": {},
     *   //   "managedProductTaxesAndComplianceSettings": {},
     *   //   "packageName": "my_packageName",
     *   //   "prices": {},
     *   //   "purchaseType": "my_purchaseType",
     *   //   "sku": "my_sku",
     *   //   "status": "my_status",
     *   //   "subscriptionPeriod": "my_subscriptionPeriod",
     *   //   "subscriptionTaxesAndComplianceSettings": {},
     *   //   "trialPeriod": "my_trialPeriod"
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
    insert(
      params: Params$Resource$Inappproducts$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Inappproducts$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$InAppProduct>;
    insert(
      params: Params$Resource$Inappproducts$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Inappproducts$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$InAppProduct>,
      callback: BodyResponseCallback<Schema$InAppProduct>
    ): void;
    insert(
      params: Params$Resource$Inappproducts$Insert,
      callback: BodyResponseCallback<Schema$InAppProduct>
    ): void;
    insert(callback: BodyResponseCallback<Schema$InAppProduct>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Inappproducts$Insert
        | BodyResponseCallback<Schema$InAppProduct>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$InAppProduct>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$InAppProduct>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$InAppProduct> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Inappproducts$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Inappproducts$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/inappproducts'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['packageName'],
        pathParams: ['packageName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$InAppProduct>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$InAppProduct>(parameters);
      }
    }

    /**
     * Lists all in-app products - both managed products and subscriptions. If an app has a large number of in-app products, the response may be paginated. In this case the response field `tokenPagination.nextPageToken` will be set and the caller should provide its value as a `token` request parameter to retrieve the next page.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.inappproducts.list({
     *     // Deprecated and ignored. The page size is determined by the server.
     *     maxResults: 'placeholder-value',
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *     // Deprecated and ignored. Set the `token` parameter to rertieve the next page.
     *     startIndex: 'placeholder-value',
     *     // Pagination token. If empty, list starts at the first product.
     *     token: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "inappproduct": [],
     *   //   "kind": "my_kind",
     *   //   "pageInfo": {},
     *   //   "tokenPagination": {}
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
      params: Params$Resource$Inappproducts$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Inappproducts$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$InappproductsListResponse>;
    list(
      params: Params$Resource$Inappproducts$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Inappproducts$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$InappproductsListResponse>,
      callback: BodyResponseCallback<Schema$InappproductsListResponse>
    ): void;
    list(
      params: Params$Resource$Inappproducts$List,
      callback: BodyResponseCallback<Schema$InappproductsListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$InappproductsListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Inappproducts$List
        | BodyResponseCallback<Schema$InappproductsListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$InappproductsListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$InappproductsListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$InappproductsListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Inappproducts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Inappproducts$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/inappproducts'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['packageName'],
        pathParams: ['packageName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$InappproductsListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$InappproductsListResponse>(parameters);
      }
    }

    /**
     * Patches an in-app product (i.e. a managed product or a subscriptions).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.inappproducts.patch({
     *     // If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
     *     autoConvertMissingPrices: 'placeholder-value',
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *     // Unique identifier for the in-app product.
     *     sku: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "defaultLanguage": "my_defaultLanguage",
     *       //   "defaultPrice": {},
     *       //   "gracePeriod": "my_gracePeriod",
     *       //   "listings": {},
     *       //   "managedProductTaxesAndComplianceSettings": {},
     *       //   "packageName": "my_packageName",
     *       //   "prices": {},
     *       //   "purchaseType": "my_purchaseType",
     *       //   "sku": "my_sku",
     *       //   "status": "my_status",
     *       //   "subscriptionPeriod": "my_subscriptionPeriod",
     *       //   "subscriptionTaxesAndComplianceSettings": {},
     *       //   "trialPeriod": "my_trialPeriod"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "defaultLanguage": "my_defaultLanguage",
     *   //   "defaultPrice": {},
     *   //   "gracePeriod": "my_gracePeriod",
     *   //   "listings": {},
     *   //   "managedProductTaxesAndComplianceSettings": {},
     *   //   "packageName": "my_packageName",
     *   //   "prices": {},
     *   //   "purchaseType": "my_purchaseType",
     *   //   "sku": "my_sku",
     *   //   "status": "my_status",
     *   //   "subscriptionPeriod": "my_subscriptionPeriod",
     *   //   "subscriptionTaxesAndComplianceSettings": {},
     *   //   "trialPeriod": "my_trialPeriod"
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
      params: Params$Resource$Inappproducts$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Inappproducts$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$InAppProduct>;
    patch(
      params: Params$Resource$Inappproducts$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Inappproducts$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$InAppProduct>,
      callback: BodyResponseCallback<Schema$InAppProduct>
    ): void;
    patch(
      params: Params$Resource$Inappproducts$Patch,
      callback: BodyResponseCallback<Schema$InAppProduct>
    ): void;
    patch(callback: BodyResponseCallback<Schema$InAppProduct>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Inappproducts$Patch
        | BodyResponseCallback<Schema$InAppProduct>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$InAppProduct>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$InAppProduct>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$InAppProduct> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Inappproducts$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Inappproducts$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/inappproducts/{sku}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'sku'],
        pathParams: ['packageName', 'sku'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$InAppProduct>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$InAppProduct>(parameters);
      }
    }

    /**
     * Updates an in-app product (i.e. a managed product or a subscriptions).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.inappproducts.update({
     *     // If set to true, and the in-app product with the given package_name and sku doesn't exist, the in-app product will be created.
     *     allowMissing: 'placeholder-value',
     *     // If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
     *     autoConvertMissingPrices: 'placeholder-value',
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *     // Unique identifier for the in-app product.
     *     sku: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "defaultLanguage": "my_defaultLanguage",
     *       //   "defaultPrice": {},
     *       //   "gracePeriod": "my_gracePeriod",
     *       //   "listings": {},
     *       //   "managedProductTaxesAndComplianceSettings": {},
     *       //   "packageName": "my_packageName",
     *       //   "prices": {},
     *       //   "purchaseType": "my_purchaseType",
     *       //   "sku": "my_sku",
     *       //   "status": "my_status",
     *       //   "subscriptionPeriod": "my_subscriptionPeriod",
     *       //   "subscriptionTaxesAndComplianceSettings": {},
     *       //   "trialPeriod": "my_trialPeriod"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "defaultLanguage": "my_defaultLanguage",
     *   //   "defaultPrice": {},
     *   //   "gracePeriod": "my_gracePeriod",
     *   //   "listings": {},
     *   //   "managedProductTaxesAndComplianceSettings": {},
     *   //   "packageName": "my_packageName",
     *   //   "prices": {},
     *   //   "purchaseType": "my_purchaseType",
     *   //   "sku": "my_sku",
     *   //   "status": "my_status",
     *   //   "subscriptionPeriod": "my_subscriptionPeriod",
     *   //   "subscriptionTaxesAndComplianceSettings": {},
     *   //   "trialPeriod": "my_trialPeriod"
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
    update(
      params: Params$Resource$Inappproducts$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Inappproducts$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$InAppProduct>;
    update(
      params: Params$Resource$Inappproducts$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Inappproducts$Update,
      options: MethodOptions | BodyResponseCallback<Schema$InAppProduct>,
      callback: BodyResponseCallback<Schema$InAppProduct>
    ): void;
    update(
      params: Params$Resource$Inappproducts$Update,
      callback: BodyResponseCallback<Schema$InAppProduct>
    ): void;
    update(callback: BodyResponseCallback<Schema$InAppProduct>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Inappproducts$Update
        | BodyResponseCallback<Schema$InAppProduct>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$InAppProduct>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$InAppProduct>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$InAppProduct> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Inappproducts$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Inappproducts$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/inappproducts/{sku}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'sku'],
        pathParams: ['packageName', 'sku'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$InAppProduct>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$InAppProduct>(parameters);
      }
    }
  }

  export interface Params$Resource$Inappproducts$Delete
    extends StandardParameters {
    /**
     * Package name of the app.
     */
    packageName?: string;
    /**
     * Unique identifier for the in-app product.
     */
    sku?: string;
  }
  export interface Params$Resource$Inappproducts$Get
    extends StandardParameters {
    /**
     * Package name of the app.
     */
    packageName?: string;
    /**
     * Unique identifier for the in-app product.
     */
    sku?: string;
  }
  export interface Params$Resource$Inappproducts$Insert
    extends StandardParameters {
    /**
     * If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
     */
    autoConvertMissingPrices?: boolean;
    /**
     * Package name of the app.
     */
    packageName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$InAppProduct;
  }
  export interface Params$Resource$Inappproducts$List
    extends StandardParameters {
    /**
     * Deprecated and ignored. The page size is determined by the server.
     */
    maxResults?: number;
    /**
     * Package name of the app.
     */
    packageName?: string;
    /**
     * Deprecated and ignored. Set the `token` parameter to rertieve the next page.
     */
    startIndex?: number;
    /**
     * Pagination token. If empty, list starts at the first product.
     */
    token?: string;
  }
  export interface Params$Resource$Inappproducts$Patch
    extends StandardParameters {
    /**
     * If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
     */
    autoConvertMissingPrices?: boolean;
    /**
     * Package name of the app.
     */
    packageName?: string;
    /**
     * Unique identifier for the in-app product.
     */
    sku?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$InAppProduct;
  }
  export interface Params$Resource$Inappproducts$Update
    extends StandardParameters {
    /**
     * If set to true, and the in-app product with the given package_name and sku doesn't exist, the in-app product will be created.
     */
    allowMissing?: boolean;
    /**
     * If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
     */
    autoConvertMissingPrices?: boolean;
    /**
     * Package name of the app.
     */
    packageName?: string;
    /**
     * Unique identifier for the in-app product.
     */
    sku?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$InAppProduct;
  }

  export class Resource$Internalappsharingartifacts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Uploads an APK to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.internalappsharingartifacts.uploadapk({
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *
     *     requestBody: {
     *       // request body parameters
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
     *   //   "certificateFingerprint": "my_certificateFingerprint",
     *   //   "downloadUrl": "my_downloadUrl",
     *   //   "sha256": "my_sha256"
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
    uploadapk(
      params: Params$Resource$Internalappsharingartifacts$Uploadapk,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    uploadapk(
      params?: Params$Resource$Internalappsharingartifacts$Uploadapk,
      options?: MethodOptions
    ): GaxiosPromise<Schema$InternalAppSharingArtifact>;
    uploadapk(
      params: Params$Resource$Internalappsharingartifacts$Uploadapk,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    uploadapk(
      params: Params$Resource$Internalappsharingartifacts$Uploadapk,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$InternalAppSharingArtifact>,
      callback: BodyResponseCallback<Schema$InternalAppSharingArtifact>
    ): void;
    uploadapk(
      params: Params$Resource$Internalappsharingartifacts$Uploadapk,
      callback: BodyResponseCallback<Schema$InternalAppSharingArtifact>
    ): void;
    uploadapk(
      callback: BodyResponseCallback<Schema$InternalAppSharingArtifact>
    ): void;
    uploadapk(
      paramsOrCallback?:
        | Params$Resource$Internalappsharingartifacts$Uploadapk
        | BodyResponseCallback<Schema$InternalAppSharingArtifact>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$InternalAppSharingArtifact>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$InternalAppSharingArtifact>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$InternalAppSharingArtifact>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Internalappsharingartifacts$Uploadapk;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Internalappsharingartifacts$Uploadapk;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/internalappsharing/{packageName}/artifacts/apk'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        mediaUrl: (
          rootUrl +
          '/upload/androidpublisher/v3/applications/internalappsharing/{packageName}/artifacts/apk'
        ).replace(/([^:]\/)\/+/g, '$1'),
        requiredParams: ['packageName'],
        pathParams: ['packageName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$InternalAppSharingArtifact>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$InternalAppSharingArtifact>(parameters);
      }
    }

    /**
     * Uploads an app bundle to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.internalappsharingartifacts.uploadbundle({
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *
     *     requestBody: {
     *       // request body parameters
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
     *   //   "certificateFingerprint": "my_certificateFingerprint",
     *   //   "downloadUrl": "my_downloadUrl",
     *   //   "sha256": "my_sha256"
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
    uploadbundle(
      params: Params$Resource$Internalappsharingartifacts$Uploadbundle,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    uploadbundle(
      params?: Params$Resource$Internalappsharingartifacts$Uploadbundle,
      options?: MethodOptions
    ): GaxiosPromise<Schema$InternalAppSharingArtifact>;
    uploadbundle(
      params: Params$Resource$Internalappsharingartifacts$Uploadbundle,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    uploadbundle(
      params: Params$Resource$Internalappsharingartifacts$Uploadbundle,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$InternalAppSharingArtifact>,
      callback: BodyResponseCallback<Schema$InternalAppSharingArtifact>
    ): void;
    uploadbundle(
      params: Params$Resource$Internalappsharingartifacts$Uploadbundle,
      callback: BodyResponseCallback<Schema$InternalAppSharingArtifact>
    ): void;
    uploadbundle(
      callback: BodyResponseCallback<Schema$InternalAppSharingArtifact>
    ): void;
    uploadbundle(
      paramsOrCallback?:
        | Params$Resource$Internalappsharingartifacts$Uploadbundle
        | BodyResponseCallback<Schema$InternalAppSharingArtifact>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$InternalAppSharingArtifact>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$InternalAppSharingArtifact>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$InternalAppSharingArtifact>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Internalappsharingartifacts$Uploadbundle;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Internalappsharingartifacts$Uploadbundle;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/internalappsharing/{packageName}/artifacts/bundle'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        mediaUrl: (
          rootUrl +
          '/upload/androidpublisher/v3/applications/internalappsharing/{packageName}/artifacts/bundle'
        ).replace(/([^:]\/)\/+/g, '$1'),
        requiredParams: ['packageName'],
        pathParams: ['packageName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$InternalAppSharingArtifact>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$InternalAppSharingArtifact>(parameters);
      }
    }
  }

  export interface Params$Resource$Internalappsharingartifacts$Uploadapk
    extends StandardParameters {
    /**
     * Package name of the app.
     */
    packageName?: string;

    /**
     * Request body metadata
     */
    requestBody?: {};

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
  export interface Params$Resource$Internalappsharingartifacts$Uploadbundle
    extends StandardParameters {
    /**
     * Package name of the app.
     */
    packageName?: string;

    /**
     * Request body metadata
     */
    requestBody?: {};

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

  export class Resource$Monetization {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Calculates the region prices, using today's exchange rate and country-specific pricing patterns, based on the price in the request for a set of regions.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.monetization.convertRegionPrices({
     *     // Required. The app package name.
     *     packageName: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "price": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "convertedOtherRegionsPrice": {},
     *   //   "convertedRegionPrices": {}
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
    convertRegionPrices(
      params: Params$Resource$Monetization$Convertregionprices,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    convertRegionPrices(
      params?: Params$Resource$Monetization$Convertregionprices,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ConvertRegionPricesResponse>;
    convertRegionPrices(
      params: Params$Resource$Monetization$Convertregionprices,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    convertRegionPrices(
      params: Params$Resource$Monetization$Convertregionprices,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ConvertRegionPricesResponse>,
      callback: BodyResponseCallback<Schema$ConvertRegionPricesResponse>
    ): void;
    convertRegionPrices(
      params: Params$Resource$Monetization$Convertregionprices,
      callback: BodyResponseCallback<Schema$ConvertRegionPricesResponse>
    ): void;
    convertRegionPrices(
      callback: BodyResponseCallback<Schema$ConvertRegionPricesResponse>
    ): void;
    convertRegionPrices(
      paramsOrCallback?:
        | Params$Resource$Monetization$Convertregionprices
        | BodyResponseCallback<Schema$ConvertRegionPricesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ConvertRegionPricesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ConvertRegionPricesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ConvertRegionPricesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Monetization$Convertregionprices;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Monetization$Convertregionprices;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/pricing:convertRegionPrices'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['packageName'],
        pathParams: ['packageName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ConvertRegionPricesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ConvertRegionPricesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Monetization$Convertregionprices
    extends StandardParameters {
    /**
     * Required. The app package name.
     */
    packageName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ConvertRegionPricesRequest;
  }

  export class Resource$Orders {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Refunds a user's subscription or in-app purchase order. Orders older than 1 year cannot be refunded.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.orders.refund({
     *     // The order ID provided to the user when the subscription or in-app order was purchased.
     *     orderId: 'placeholder-value',
     *     // The package name of the application for which this subscription or in-app item was purchased (for example, 'com.some.thing').
     *     packageName: 'placeholder-value',
     *     // Whether to revoke the purchased item. If set to true, access to the subscription or in-app item will be terminated immediately. If the item is a recurring subscription, all future payments will also be terminated. Consumed in-app items need to be handled by developer's app. (optional).
     *     revoke: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
    refund(
      params: Params$Resource$Orders$Refund,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    refund(
      params?: Params$Resource$Orders$Refund,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    refund(
      params: Params$Resource$Orders$Refund,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    refund(
      params: Params$Resource$Orders$Refund,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    refund(
      params: Params$Resource$Orders$Refund,
      callback: BodyResponseCallback<void>
    ): void;
    refund(callback: BodyResponseCallback<void>): void;
    refund(
      paramsOrCallback?:
        | Params$Resource$Orders$Refund
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Orders$Refund;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Orders$Refund;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/orders/{orderId}:refund'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'orderId'],
        pathParams: ['orderId', 'packageName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Orders$Refund extends StandardParameters {
    /**
     * The order ID provided to the user when the subscription or in-app order was purchased.
     */
    orderId?: string;
    /**
     * The package name of the application for which this subscription or in-app item was purchased (for example, 'com.some.thing').
     */
    packageName?: string;
    /**
     * Whether to revoke the purchased item. If set to true, access to the subscription or in-app item will be terminated immediately. If the item is a recurring subscription, all future payments will also be terminated. Consumed in-app items need to be handled by developer's app. (optional).
     */
    revoke?: boolean;
  }

  export class Resource$Purchases {
    context: APIRequestContext;
    products: Resource$Purchases$Products;
    subscriptions: Resource$Purchases$Subscriptions;
    voidedpurchases: Resource$Purchases$Voidedpurchases;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.products = new Resource$Purchases$Products(this.context);
      this.subscriptions = new Resource$Purchases$Subscriptions(this.context);
      this.voidedpurchases = new Resource$Purchases$Voidedpurchases(
        this.context
      );
    }
  }

  export class Resource$Purchases$Products {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Acknowledges a purchase of an inapp item.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.purchases.products.acknowledge({
     *     // The package name of the application the inapp product was sold in (for example, 'com.some.thing').
     *     packageName: 'placeholder-value',
     *     // The inapp product SKU (for example, 'com.some.thing.inapp1').
     *     productId: 'placeholder-value',
     *     // The token provided to the user's device when the inapp product was purchased.
     *     token: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "developerPayload": "my_developerPayload"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
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
    acknowledge(
      params: Params$Resource$Purchases$Products$Acknowledge,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    acknowledge(
      params?: Params$Resource$Purchases$Products$Acknowledge,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    acknowledge(
      params: Params$Resource$Purchases$Products$Acknowledge,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    acknowledge(
      params: Params$Resource$Purchases$Products$Acknowledge,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    acknowledge(
      params: Params$Resource$Purchases$Products$Acknowledge,
      callback: BodyResponseCallback<void>
    ): void;
    acknowledge(callback: BodyResponseCallback<void>): void;
    acknowledge(
      paramsOrCallback?:
        | Params$Resource$Purchases$Products$Acknowledge
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Purchases$Products$Acknowledge;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Purchases$Products$Acknowledge;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/purchases/products/{productId}/tokens/{token}:acknowledge'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'productId', 'token'],
        pathParams: ['packageName', 'productId', 'token'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Checks the purchase and consumption status of an inapp item.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.purchases.products.get({
     *     // The package name of the application the inapp product was sold in (for example, 'com.some.thing').
     *     packageName: 'placeholder-value',
     *     // The inapp product SKU (for example, 'com.some.thing.inapp1').
     *     productId: 'placeholder-value',
     *     // The token provided to the user's device when the inapp product was purchased.
     *     token: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "acknowledgementState": 0,
     *   //   "consumptionState": 0,
     *   //   "developerPayload": "my_developerPayload",
     *   //   "kind": "my_kind",
     *   //   "obfuscatedExternalAccountId": "my_obfuscatedExternalAccountId",
     *   //   "obfuscatedExternalProfileId": "my_obfuscatedExternalProfileId",
     *   //   "orderId": "my_orderId",
     *   //   "productId": "my_productId",
     *   //   "purchaseState": 0,
     *   //   "purchaseTimeMillis": "my_purchaseTimeMillis",
     *   //   "purchaseToken": "my_purchaseToken",
     *   //   "purchaseType": 0,
     *   //   "quantity": 0,
     *   //   "regionCode": "my_regionCode"
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
      params: Params$Resource$Purchases$Products$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Purchases$Products$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ProductPurchase>;
    get(
      params: Params$Resource$Purchases$Products$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Purchases$Products$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ProductPurchase>,
      callback: BodyResponseCallback<Schema$ProductPurchase>
    ): void;
    get(
      params: Params$Resource$Purchases$Products$Get,
      callback: BodyResponseCallback<Schema$ProductPurchase>
    ): void;
    get(callback: BodyResponseCallback<Schema$ProductPurchase>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Purchases$Products$Get
        | BodyResponseCallback<Schema$ProductPurchase>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ProductPurchase>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ProductPurchase>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ProductPurchase> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Purchases$Products$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Purchases$Products$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/purchases/products/{productId}/tokens/{token}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'productId', 'token'],
        pathParams: ['packageName', 'productId', 'token'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ProductPurchase>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ProductPurchase>(parameters);
      }
    }
  }

  export interface Params$Resource$Purchases$Products$Acknowledge
    extends StandardParameters {
    /**
     * The package name of the application the inapp product was sold in (for example, 'com.some.thing').
     */
    packageName?: string;
    /**
     * The inapp product SKU (for example, 'com.some.thing.inapp1').
     */
    productId?: string;
    /**
     * The token provided to the user's device when the inapp product was purchased.
     */
    token?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ProductPurchasesAcknowledgeRequest;
  }
  export interface Params$Resource$Purchases$Products$Get
    extends StandardParameters {
    /**
     * The package name of the application the inapp product was sold in (for example, 'com.some.thing').
     */
    packageName?: string;
    /**
     * The inapp product SKU (for example, 'com.some.thing.inapp1').
     */
    productId?: string;
    /**
     * The token provided to the user's device when the inapp product was purchased.
     */
    token?: string;
  }

  export class Resource$Purchases$Subscriptions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Acknowledges a subscription purchase.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.purchases.subscriptions.acknowledge({
     *     // The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
     *     packageName: 'placeholder-value',
     *     // The purchased subscription ID (for example, 'monthly001').
     *     subscriptionId: 'placeholder-value',
     *     // The token provided to the user's device when the subscription was purchased.
     *     token: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "developerPayload": "my_developerPayload"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
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
    acknowledge(
      params: Params$Resource$Purchases$Subscriptions$Acknowledge,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    acknowledge(
      params?: Params$Resource$Purchases$Subscriptions$Acknowledge,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    acknowledge(
      params: Params$Resource$Purchases$Subscriptions$Acknowledge,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    acknowledge(
      params: Params$Resource$Purchases$Subscriptions$Acknowledge,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    acknowledge(
      params: Params$Resource$Purchases$Subscriptions$Acknowledge,
      callback: BodyResponseCallback<void>
    ): void;
    acknowledge(callback: BodyResponseCallback<void>): void;
    acknowledge(
      paramsOrCallback?:
        | Params$Resource$Purchases$Subscriptions$Acknowledge
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Purchases$Subscriptions$Acknowledge;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Purchases$Subscriptions$Acknowledge;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:acknowledge'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'subscriptionId', 'token'],
        pathParams: ['packageName', 'subscriptionId', 'token'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Cancels a user's subscription purchase. The subscription remains valid until its expiration time.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.purchases.subscriptions.cancel({
     *     // The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
     *     packageName: 'placeholder-value',
     *     // The purchased subscription ID (for example, 'monthly001').
     *     subscriptionId: 'placeholder-value',
     *     // The token provided to the user's device when the subscription was purchased.
     *     token: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
    cancel(
      params: Params$Resource$Purchases$Subscriptions$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Purchases$Subscriptions$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    cancel(
      params: Params$Resource$Purchases$Subscriptions$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Purchases$Subscriptions$Cancel,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    cancel(
      params: Params$Resource$Purchases$Subscriptions$Cancel,
      callback: BodyResponseCallback<void>
    ): void;
    cancel(callback: BodyResponseCallback<void>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Purchases$Subscriptions$Cancel
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Purchases$Subscriptions$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Purchases$Subscriptions$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:cancel'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'subscriptionId', 'token'],
        pathParams: ['packageName', 'subscriptionId', 'token'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Defers a user's subscription purchase until a specified future expiration time.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.purchases.subscriptions.defer({
     *     // The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
     *     packageName: 'placeholder-value',
     *     // The purchased subscription ID (for example, 'monthly001').
     *     subscriptionId: 'placeholder-value',
     *     // The token provided to the user's device when the subscription was purchased.
     *     token: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "deferralInfo": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "newExpiryTimeMillis": "my_newExpiryTimeMillis"
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
    defer(
      params: Params$Resource$Purchases$Subscriptions$Defer,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    defer(
      params?: Params$Resource$Purchases$Subscriptions$Defer,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SubscriptionPurchasesDeferResponse>;
    defer(
      params: Params$Resource$Purchases$Subscriptions$Defer,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    defer(
      params: Params$Resource$Purchases$Subscriptions$Defer,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SubscriptionPurchasesDeferResponse>,
      callback: BodyResponseCallback<Schema$SubscriptionPurchasesDeferResponse>
    ): void;
    defer(
      params: Params$Resource$Purchases$Subscriptions$Defer,
      callback: BodyResponseCallback<Schema$SubscriptionPurchasesDeferResponse>
    ): void;
    defer(
      callback: BodyResponseCallback<Schema$SubscriptionPurchasesDeferResponse>
    ): void;
    defer(
      paramsOrCallback?:
        | Params$Resource$Purchases$Subscriptions$Defer
        | BodyResponseCallback<Schema$SubscriptionPurchasesDeferResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SubscriptionPurchasesDeferResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SubscriptionPurchasesDeferResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SubscriptionPurchasesDeferResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Purchases$Subscriptions$Defer;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Purchases$Subscriptions$Defer;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:defer'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'subscriptionId', 'token'],
        pathParams: ['packageName', 'subscriptionId', 'token'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SubscriptionPurchasesDeferResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SubscriptionPurchasesDeferResponse>(
          parameters
        );
      }
    }

    /**
     * Checks whether a user's subscription purchase is valid and returns its expiry time.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.purchases.subscriptions.get({
     *     // The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
     *     packageName: 'placeholder-value',
     *     // The purchased subscription ID (for example, 'monthly001').
     *     subscriptionId: 'placeholder-value',
     *     // The token provided to the user's device when the subscription was purchased.
     *     token: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "acknowledgementState": 0,
     *   //   "autoRenewing": false,
     *   //   "autoResumeTimeMillis": "my_autoResumeTimeMillis",
     *   //   "cancelReason": 0,
     *   //   "cancelSurveyResult": {},
     *   //   "countryCode": "my_countryCode",
     *   //   "developerPayload": "my_developerPayload",
     *   //   "emailAddress": "my_emailAddress",
     *   //   "expiryTimeMillis": "my_expiryTimeMillis",
     *   //   "externalAccountId": "my_externalAccountId",
     *   //   "familyName": "my_familyName",
     *   //   "givenName": "my_givenName",
     *   //   "introductoryPriceInfo": {},
     *   //   "kind": "my_kind",
     *   //   "linkedPurchaseToken": "my_linkedPurchaseToken",
     *   //   "obfuscatedExternalAccountId": "my_obfuscatedExternalAccountId",
     *   //   "obfuscatedExternalProfileId": "my_obfuscatedExternalProfileId",
     *   //   "orderId": "my_orderId",
     *   //   "paymentState": 0,
     *   //   "priceAmountMicros": "my_priceAmountMicros",
     *   //   "priceChange": {},
     *   //   "priceCurrencyCode": "my_priceCurrencyCode",
     *   //   "profileId": "my_profileId",
     *   //   "profileName": "my_profileName",
     *   //   "promotionCode": "my_promotionCode",
     *   //   "promotionType": 0,
     *   //   "purchaseType": 0,
     *   //   "startTimeMillis": "my_startTimeMillis",
     *   //   "userCancellationTimeMillis": "my_userCancellationTimeMillis"
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
      params: Params$Resource$Purchases$Subscriptions$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Purchases$Subscriptions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SubscriptionPurchase>;
    get(
      params: Params$Resource$Purchases$Subscriptions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Purchases$Subscriptions$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SubscriptionPurchase>,
      callback: BodyResponseCallback<Schema$SubscriptionPurchase>
    ): void;
    get(
      params: Params$Resource$Purchases$Subscriptions$Get,
      callback: BodyResponseCallback<Schema$SubscriptionPurchase>
    ): void;
    get(callback: BodyResponseCallback<Schema$SubscriptionPurchase>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Purchases$Subscriptions$Get
        | BodyResponseCallback<Schema$SubscriptionPurchase>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SubscriptionPurchase>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SubscriptionPurchase>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SubscriptionPurchase>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Purchases$Subscriptions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Purchases$Subscriptions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'subscriptionId', 'token'],
        pathParams: ['packageName', 'subscriptionId', 'token'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SubscriptionPurchase>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SubscriptionPurchase>(parameters);
      }
    }

    /**
     * Refunds a user's subscription purchase, but the subscription remains valid until its expiration time and it will continue to recur.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.purchases.subscriptions.refund({
     *     // The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
     *     packageName: 'placeholder-value',
     *     // "The purchased subscription ID (for example, 'monthly001').
     *     subscriptionId: 'placeholder-value',
     *     // The token provided to the user's device when the subscription was purchased.
     *     token: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
    refund(
      params: Params$Resource$Purchases$Subscriptions$Refund,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    refund(
      params?: Params$Resource$Purchases$Subscriptions$Refund,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    refund(
      params: Params$Resource$Purchases$Subscriptions$Refund,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    refund(
      params: Params$Resource$Purchases$Subscriptions$Refund,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    refund(
      params: Params$Resource$Purchases$Subscriptions$Refund,
      callback: BodyResponseCallback<void>
    ): void;
    refund(callback: BodyResponseCallback<void>): void;
    refund(
      paramsOrCallback?:
        | Params$Resource$Purchases$Subscriptions$Refund
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Purchases$Subscriptions$Refund;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Purchases$Subscriptions$Refund;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:refund'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'subscriptionId', 'token'],
        pathParams: ['packageName', 'subscriptionId', 'token'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Refunds and immediately revokes a user's subscription purchase. Access to the subscription will be terminated immediately and it will stop recurring.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.purchases.subscriptions.revoke({
     *     // The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
     *     packageName: 'placeholder-value',
     *     // The purchased subscription ID (for example, 'monthly001').
     *     subscriptionId: 'placeholder-value',
     *     // The token provided to the user's device when the subscription was purchased.
     *     token: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
    revoke(
      params: Params$Resource$Purchases$Subscriptions$Revoke,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    revoke(
      params?: Params$Resource$Purchases$Subscriptions$Revoke,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    revoke(
      params: Params$Resource$Purchases$Subscriptions$Revoke,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    revoke(
      params: Params$Resource$Purchases$Subscriptions$Revoke,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    revoke(
      params: Params$Resource$Purchases$Subscriptions$Revoke,
      callback: BodyResponseCallback<void>
    ): void;
    revoke(callback: BodyResponseCallback<void>): void;
    revoke(
      paramsOrCallback?:
        | Params$Resource$Purchases$Subscriptions$Revoke
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Purchases$Subscriptions$Revoke;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Purchases$Subscriptions$Revoke;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:revoke'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'subscriptionId', 'token'],
        pathParams: ['packageName', 'subscriptionId', 'token'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Purchases$Subscriptions$Acknowledge
    extends StandardParameters {
    /**
     * The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
     */
    packageName?: string;
    /**
     * The purchased subscription ID (for example, 'monthly001').
     */
    subscriptionId?: string;
    /**
     * The token provided to the user's device when the subscription was purchased.
     */
    token?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SubscriptionPurchasesAcknowledgeRequest;
  }
  export interface Params$Resource$Purchases$Subscriptions$Cancel
    extends StandardParameters {
    /**
     * The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
     */
    packageName?: string;
    /**
     * The purchased subscription ID (for example, 'monthly001').
     */
    subscriptionId?: string;
    /**
     * The token provided to the user's device when the subscription was purchased.
     */
    token?: string;
  }
  export interface Params$Resource$Purchases$Subscriptions$Defer
    extends StandardParameters {
    /**
     * The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
     */
    packageName?: string;
    /**
     * The purchased subscription ID (for example, 'monthly001').
     */
    subscriptionId?: string;
    /**
     * The token provided to the user's device when the subscription was purchased.
     */
    token?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SubscriptionPurchasesDeferRequest;
  }
  export interface Params$Resource$Purchases$Subscriptions$Get
    extends StandardParameters {
    /**
     * The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
     */
    packageName?: string;
    /**
     * The purchased subscription ID (for example, 'monthly001').
     */
    subscriptionId?: string;
    /**
     * The token provided to the user's device when the subscription was purchased.
     */
    token?: string;
  }
  export interface Params$Resource$Purchases$Subscriptions$Refund
    extends StandardParameters {
    /**
     * The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
     */
    packageName?: string;
    /**
     * "The purchased subscription ID (for example, 'monthly001').
     */
    subscriptionId?: string;
    /**
     * The token provided to the user's device when the subscription was purchased.
     */
    token?: string;
  }
  export interface Params$Resource$Purchases$Subscriptions$Revoke
    extends StandardParameters {
    /**
     * The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
     */
    packageName?: string;
    /**
     * The purchased subscription ID (for example, 'monthly001').
     */
    subscriptionId?: string;
    /**
     * The token provided to the user's device when the subscription was purchased.
     */
    token?: string;
  }

  export class Resource$Purchases$Voidedpurchases {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists the purchases that were canceled, refunded or charged-back.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.purchases.voidedpurchases.list({
     *     // The time, in milliseconds since the Epoch, of the newest voided purchase that you want to see in the response. The value of this parameter cannot be greater than the current time and is ignored if a pagination token is set. Default value is current time. Note: This filter is applied on the time at which the record is seen as voided by our systems and not the actual voided time returned in the response.
     *     endTime: 'placeholder-value',
     *     // Defines how many results the list operation should return. The default number depends on the resource collection.
     *     maxResults: 'placeholder-value',
     *     // The package name of the application for which voided purchases need to be returned (for example, 'com.some.thing').
     *     packageName: 'placeholder-value',
     *     // Defines the index of the first element to return. This can only be used if indexed paging is enabled.
     *     startIndex: 'placeholder-value',
     *     // The time, in milliseconds since the Epoch, of the oldest voided purchase that you want to see in the response. The value of this parameter cannot be older than 30 days and is ignored if a pagination token is set. Default value is current time minus 30 days. Note: This filter is applied on the time at which the record is seen as voided by our systems and not the actual voided time returned in the response.
     *     startTime: 'placeholder-value',
     *     // Defines the token of the page to return, usually taken from TokenPagination. This can only be used if token paging is enabled.
     *     token: 'placeholder-value',
     *     // The type of voided purchases that you want to see in the response. Possible values are: 0. Only voided in-app product purchases will be returned in the response. This is the default value. 1. Both voided in-app purchases and voided subscription purchases will be returned in the response. Note: Before requesting to receive voided subscription purchases, you must switch to use orderId in the response which uniquely identifies one-time purchases and subscriptions. Otherwise, you will receive multiple subscription orders with the same PurchaseToken, because subscription renewal orders share the same PurchaseToken.
     *     type: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "pageInfo": {},
     *   //   "tokenPagination": {},
     *   //   "voidedPurchases": []
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
      params: Params$Resource$Purchases$Voidedpurchases$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Purchases$Voidedpurchases$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$VoidedPurchasesListResponse>;
    list(
      params: Params$Resource$Purchases$Voidedpurchases$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Purchases$Voidedpurchases$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$VoidedPurchasesListResponse>,
      callback: BodyResponseCallback<Schema$VoidedPurchasesListResponse>
    ): void;
    list(
      params: Params$Resource$Purchases$Voidedpurchases$List,
      callback: BodyResponseCallback<Schema$VoidedPurchasesListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$VoidedPurchasesListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Purchases$Voidedpurchases$List
        | BodyResponseCallback<Schema$VoidedPurchasesListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VoidedPurchasesListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VoidedPurchasesListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$VoidedPurchasesListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Purchases$Voidedpurchases$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Purchases$Voidedpurchases$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/purchases/voidedpurchases'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['packageName'],
        pathParams: ['packageName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$VoidedPurchasesListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VoidedPurchasesListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Purchases$Voidedpurchases$List
    extends StandardParameters {
    /**
     * The time, in milliseconds since the Epoch, of the newest voided purchase that you want to see in the response. The value of this parameter cannot be greater than the current time and is ignored if a pagination token is set. Default value is current time. Note: This filter is applied on the time at which the record is seen as voided by our systems and not the actual voided time returned in the response.
     */
    endTime?: string;
    /**
     * Defines how many results the list operation should return. The default number depends on the resource collection.
     */
    maxResults?: number;
    /**
     * The package name of the application for which voided purchases need to be returned (for example, 'com.some.thing').
     */
    packageName?: string;
    /**
     * Defines the index of the first element to return. This can only be used if indexed paging is enabled.
     */
    startIndex?: number;
    /**
     * The time, in milliseconds since the Epoch, of the oldest voided purchase that you want to see in the response. The value of this parameter cannot be older than 30 days and is ignored if a pagination token is set. Default value is current time minus 30 days. Note: This filter is applied on the time at which the record is seen as voided by our systems and not the actual voided time returned in the response.
     */
    startTime?: string;
    /**
     * Defines the token of the page to return, usually taken from TokenPagination. This can only be used if token paging is enabled.
     */
    token?: string;
    /**
     * The type of voided purchases that you want to see in the response. Possible values are: 0. Only voided in-app product purchases will be returned in the response. This is the default value. 1. Both voided in-app purchases and voided subscription purchases will be returned in the response. Note: Before requesting to receive voided subscription purchases, you must switch to use orderId in the response which uniquely identifies one-time purchases and subscriptions. Otherwise, you will receive multiple subscription orders with the same PurchaseToken, because subscription renewal orders share the same PurchaseToken.
     */
    type?: number;
  }

  export class Resource$Reviews {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets a single review.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.reviews.get({
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *     // Unique identifier for a review.
     *     reviewId: 'placeholder-value',
     *     // Language localization code.
     *     translationLanguage: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "authorName": "my_authorName",
     *   //   "comments": [],
     *   //   "reviewId": "my_reviewId"
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
      params: Params$Resource$Reviews$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Reviews$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Review>;
    get(
      params: Params$Resource$Reviews$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Reviews$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Review>,
      callback: BodyResponseCallback<Schema$Review>
    ): void;
    get(
      params: Params$Resource$Reviews$Get,
      callback: BodyResponseCallback<Schema$Review>
    ): void;
    get(callback: BodyResponseCallback<Schema$Review>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Reviews$Get
        | BodyResponseCallback<Schema$Review>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Review>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Review>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Review> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Reviews$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Reviews$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/reviews/{reviewId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'reviewId'],
        pathParams: ['packageName', 'reviewId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Review>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Review>(parameters);
      }
    }

    /**
     * Lists all reviews.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.reviews.list({
     *     // How many results the list operation should return.
     *     maxResults: 'placeholder-value',
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *     // The index of the first element to return.
     *     startIndex: 'placeholder-value',
     *     // Pagination token. If empty, list starts at the first review.
     *     token: 'placeholder-value',
     *     // Language localization code.
     *     translationLanguage: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "pageInfo": {},
     *   //   "reviews": [],
     *   //   "tokenPagination": {}
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
      params: Params$Resource$Reviews$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Reviews$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ReviewsListResponse>;
    list(
      params: Params$Resource$Reviews$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Reviews$List,
      options: MethodOptions | BodyResponseCallback<Schema$ReviewsListResponse>,
      callback: BodyResponseCallback<Schema$ReviewsListResponse>
    ): void;
    list(
      params: Params$Resource$Reviews$List,
      callback: BodyResponseCallback<Schema$ReviewsListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ReviewsListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Reviews$List
        | BodyResponseCallback<Schema$ReviewsListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ReviewsListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ReviewsListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ReviewsListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Reviews$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Reviews$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/reviews'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['packageName'],
        pathParams: ['packageName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ReviewsListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ReviewsListResponse>(parameters);
      }
    }

    /**
     * Replies to a single review, or updates an existing reply.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.reviews.reply({
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *     // Unique identifier for a review.
     *     reviewId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "replyText": "my_replyText"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "result": {}
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
    reply(
      params: Params$Resource$Reviews$Reply,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    reply(
      params?: Params$Resource$Reviews$Reply,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ReviewsReplyResponse>;
    reply(
      params: Params$Resource$Reviews$Reply,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    reply(
      params: Params$Resource$Reviews$Reply,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ReviewsReplyResponse>,
      callback: BodyResponseCallback<Schema$ReviewsReplyResponse>
    ): void;
    reply(
      params: Params$Resource$Reviews$Reply,
      callback: BodyResponseCallback<Schema$ReviewsReplyResponse>
    ): void;
    reply(callback: BodyResponseCallback<Schema$ReviewsReplyResponse>): void;
    reply(
      paramsOrCallback?:
        | Params$Resource$Reviews$Reply
        | BodyResponseCallback<Schema$ReviewsReplyResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ReviewsReplyResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ReviewsReplyResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ReviewsReplyResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Reviews$Reply;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Reviews$Reply;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/reviews/{reviewId}:reply'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'reviewId'],
        pathParams: ['packageName', 'reviewId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ReviewsReplyResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ReviewsReplyResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Reviews$Get extends StandardParameters {
    /**
     * Package name of the app.
     */
    packageName?: string;
    /**
     * Unique identifier for a review.
     */
    reviewId?: string;
    /**
     * Language localization code.
     */
    translationLanguage?: string;
  }
  export interface Params$Resource$Reviews$List extends StandardParameters {
    /**
     * How many results the list operation should return.
     */
    maxResults?: number;
    /**
     * Package name of the app.
     */
    packageName?: string;
    /**
     * The index of the first element to return.
     */
    startIndex?: number;
    /**
     * Pagination token. If empty, list starts at the first review.
     */
    token?: string;
    /**
     * Language localization code.
     */
    translationLanguage?: string;
  }
  export interface Params$Resource$Reviews$Reply extends StandardParameters {
    /**
     * Package name of the app.
     */
    packageName?: string;
    /**
     * Unique identifier for a review.
     */
    reviewId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ReviewsReplyRequest;
  }

  export class Resource$Systemapks {
    context: APIRequestContext;
    variants: Resource$Systemapks$Variants;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.variants = new Resource$Systemapks$Variants(this.context);
    }
  }

  export class Resource$Systemapks$Variants {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates an APK which is suitable for inclusion in a system image from an already uploaded Android App Bundle.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.systemapks.variants.create({
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *     // The version code of the App Bundle.
     *     versionCode: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "deviceSpec": {},
     *       //   "variantId": 0
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "deviceSpec": {},
     *   //   "variantId": 0
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
      params: Params$Resource$Systemapks$Variants$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Systemapks$Variants$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Variant>;
    create(
      params: Params$Resource$Systemapks$Variants$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Systemapks$Variants$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Variant>,
      callback: BodyResponseCallback<Schema$Variant>
    ): void;
    create(
      params: Params$Resource$Systemapks$Variants$Create,
      callback: BodyResponseCallback<Schema$Variant>
    ): void;
    create(callback: BodyResponseCallback<Schema$Variant>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Systemapks$Variants$Create
        | BodyResponseCallback<Schema$Variant>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Variant>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Variant>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Variant> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Systemapks$Variants$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Systemapks$Variants$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'versionCode'],
        pathParams: ['packageName', 'versionCode'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Variant>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Variant>(parameters);
      }
    }

    /**
     * Downloads a previously created system APK which is suitable for inclusion in a system image.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.systemapks.variants.download({
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *     // The ID of a previously created system APK variant.
     *     variantId: 'placeholder-value',
     *     // The version code of the App Bundle.
     *     versionCode: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
    download(
      params: Params$Resource$Systemapks$Variants$Download,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    download(
      params?: Params$Resource$Systemapks$Variants$Download,
      options?: MethodOptions
    ): GaxiosPromise<unknown>;
    download(
      params: Params$Resource$Systemapks$Variants$Download,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    download(
      params: Params$Resource$Systemapks$Variants$Download,
      options: MethodOptions | BodyResponseCallback<unknown>,
      callback: BodyResponseCallback<unknown>
    ): void;
    download(
      params: Params$Resource$Systemapks$Variants$Download,
      callback: BodyResponseCallback<unknown>
    ): void;
    download(callback: BodyResponseCallback<unknown>): void;
    download(
      paramsOrCallback?:
        | Params$Resource$Systemapks$Variants$Download
        | BodyResponseCallback<unknown>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<unknown>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<unknown> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<unknown> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Systemapks$Variants$Download;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Systemapks$Variants$Download;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants/{variantId}:download'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'versionCode', 'variantId'],
        pathParams: ['packageName', 'variantId', 'versionCode'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<unknown>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<unknown>(parameters);
      }
    }

    /**
     * Returns a previously created system APK variant.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.systemapks.variants.get({
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *     // The ID of a previously created system APK variant.
     *     variantId: 'placeholder-value',
     *     // The version code of the App Bundle.
     *     versionCode: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "deviceSpec": {},
     *   //   "variantId": 0
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
      params: Params$Resource$Systemapks$Variants$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Systemapks$Variants$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Variant>;
    get(
      params: Params$Resource$Systemapks$Variants$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Systemapks$Variants$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Variant>,
      callback: BodyResponseCallback<Schema$Variant>
    ): void;
    get(
      params: Params$Resource$Systemapks$Variants$Get,
      callback: BodyResponseCallback<Schema$Variant>
    ): void;
    get(callback: BodyResponseCallback<Schema$Variant>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Systemapks$Variants$Get
        | BodyResponseCallback<Schema$Variant>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Variant>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Variant>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Variant> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Systemapks$Variants$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Systemapks$Variants$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants/{variantId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'versionCode', 'variantId'],
        pathParams: ['packageName', 'variantId', 'versionCode'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Variant>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Variant>(parameters);
      }
    }

    /**
     * Returns the list of previously created system APK variants.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.systemapks.variants.list({
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *     // The version code of the App Bundle.
     *     versionCode: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
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
    list(
      params: Params$Resource$Systemapks$Variants$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Systemapks$Variants$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SystemApksListResponse>;
    list(
      params: Params$Resource$Systemapks$Variants$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Systemapks$Variants$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SystemApksListResponse>,
      callback: BodyResponseCallback<Schema$SystemApksListResponse>
    ): void;
    list(
      params: Params$Resource$Systemapks$Variants$List,
      callback: BodyResponseCallback<Schema$SystemApksListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$SystemApksListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Systemapks$Variants$List
        | BodyResponseCallback<Schema$SystemApksListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SystemApksListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SystemApksListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SystemApksListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Systemapks$Variants$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Systemapks$Variants$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'versionCode'],
        pathParams: ['packageName', 'versionCode'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SystemApksListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SystemApksListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Systemapks$Variants$Create
    extends StandardParameters {
    /**
     * Package name of the app.
     */
    packageName?: string;
    /**
     * The version code of the App Bundle.
     */
    versionCode?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Variant;
  }
  export interface Params$Resource$Systemapks$Variants$Download
    extends StandardParameters {
    /**
     * Package name of the app.
     */
    packageName?: string;
    /**
     * The ID of a previously created system APK variant.
     */
    variantId?: number;
    /**
     * The version code of the App Bundle.
     */
    versionCode?: string;
  }
  export interface Params$Resource$Systemapks$Variants$Get
    extends StandardParameters {
    /**
     * Package name of the app.
     */
    packageName?: string;
    /**
     * The ID of a previously created system APK variant.
     */
    variantId?: number;
    /**
     * The version code of the App Bundle.
     */
    versionCode?: string;
  }
  export interface Params$Resource$Systemapks$Variants$List
    extends StandardParameters {
    /**
     * Package name of the app.
     */
    packageName?: string;
    /**
     * The version code of the App Bundle.
     */
    versionCode?: string;
  }

  export class Resource$Users {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Grant access for a user to the given developer account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.users.create({
     *     // Required. The developer account to add the user to. Format: developers/{developer\}
     *     parent: 'developers/my-developer',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accessState": "my_accessState",
     *       //   "developerAccountPermissions": [],
     *       //   "email": "my_email",
     *       //   "expirationTime": "my_expirationTime",
     *       //   "grants": [],
     *       //   "name": "my_name",
     *       //   "partial": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accessState": "my_accessState",
     *   //   "developerAccountPermissions": [],
     *   //   "email": "my_email",
     *   //   "expirationTime": "my_expirationTime",
     *   //   "grants": [],
     *   //   "name": "my_name",
     *   //   "partial": false
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
      params: Params$Resource$Users$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Users$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$User>;
    create(
      params: Params$Resource$Users$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Users$Create,
      options: MethodOptions | BodyResponseCallback<Schema$User>,
      callback: BodyResponseCallback<Schema$User>
    ): void;
    create(
      params: Params$Resource$Users$Create,
      callback: BodyResponseCallback<Schema$User>
    ): void;
    create(callback: BodyResponseCallback<Schema$User>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Users$Create
        | BodyResponseCallback<Schema$User>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$User>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$User>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$User> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Users$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/androidpublisher/v3/{+parent}/users').replace(
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
        createAPIRequest<Schema$User>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$User>(parameters);
      }
    }

    /**
     * Removes all access for the user to the given developer account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.users.delete({
     *     // Required. The name of the user to delete. Format: developers/{developer\}/users/{email\}
     *     name: 'developers/my-developer/users/my-user',
     *   });
     *   console.log(res.data);
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
      params: Params$Resource$Users$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Users$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Users$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Users$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Users$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Users$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Users$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/androidpublisher/v3/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Lists all users with access to a developer account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.users.list({
     *     // The maximum number of results to return. This must be set to -1 to disable pagination.
     *     pageSize: 'placeholder-value',
     *     // A token received from a previous call to this method, in order to retrieve further results.
     *     pageToken: 'placeholder-value',
     *     // Required. The developer account to fetch users from. Format: developers/{developer\}
     *     parent: 'developers/my-developer',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "users": []
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
      params: Params$Resource$Users$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Users$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListUsersResponse>;
    list(
      params: Params$Resource$Users$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Users$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListUsersResponse>,
      callback: BodyResponseCallback<Schema$ListUsersResponse>
    ): void;
    list(
      params: Params$Resource$Users$List,
      callback: BodyResponseCallback<Schema$ListUsersResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListUsersResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Users$List
        | BodyResponseCallback<Schema$ListUsersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListUsersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListUsersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListUsersResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Users$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/androidpublisher/v3/{+parent}/users').replace(
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
        createAPIRequest<Schema$ListUsersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListUsersResponse>(parameters);
      }
    }

    /**
     * Updates access for the user to the developer account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidpublisher.users.patch({
     *     // Required. Resource name for this user, following the pattern "developers/{developer\}/users/{email\}".
     *     name: 'developers/my-developer/users/my-user',
     *     // Optional. The list of fields to be updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accessState": "my_accessState",
     *       //   "developerAccountPermissions": [],
     *       //   "email": "my_email",
     *       //   "expirationTime": "my_expirationTime",
     *       //   "grants": [],
     *       //   "name": "my_name",
     *       //   "partial": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accessState": "my_accessState",
     *   //   "developerAccountPermissions": [],
     *   //   "email": "my_email",
     *   //   "expirationTime": "my_expirationTime",
     *   //   "grants": [],
     *   //   "name": "my_name",
     *   //   "partial": false
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
      params: Params$Resource$Users$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Users$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$User>;
    patch(
      params: Params$Resource$Users$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Users$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$User>,
      callback: BodyResponseCallback<Schema$User>
    ): void;
    patch(
      params: Params$Resource$Users$Patch,
      callback: BodyResponseCallback<Schema$User>
    ): void;
    patch(callback: BodyResponseCallback<Schema$User>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Users$Patch
        | BodyResponseCallback<Schema$User>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$User>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$User>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$User> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Users$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/androidpublisher/v3/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$User>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$User>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Create extends StandardParameters {
    /**
     * Required. The developer account to add the user to. Format: developers/{developer\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$User;
  }
  export interface Params$Resource$Users$Delete extends StandardParameters {
    /**
     * Required. The name of the user to delete. Format: developers/{developer\}/users/{email\}
     */
    name?: string;
  }
  export interface Params$Resource$Users$List extends StandardParameters {
    /**
     * The maximum number of results to return. This must be set to -1 to disable pagination.
     */
    pageSize?: number;
    /**
     * A token received from a previous call to this method, in order to retrieve further results.
     */
    pageToken?: string;
    /**
     * Required. The developer account to fetch users from. Format: developers/{developer\}
     */
    parent?: string;
  }
  export interface Params$Resource$Users$Patch extends StandardParameters {
    /**
     * Required. Resource name for this user, following the pattern "developers/{developer\}/users/{email\}".
     */
    name?: string;
    /**
     * Optional. The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$User;
  }
}
