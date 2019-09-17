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

export namespace androidpublisher_v3 {
  export interface Options extends GlobalOptions {
    version: 'v3';
  }

  interface StandardParameters {
    /**
     * Data format for the response.
     */
    alt?: string;
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
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
  }

  /**
   * Google Play Developer API
   *
   * Accesses Android application developers&#39; Google Play accounts.
   *
   * @example
   * const {google} = require('googleapis');
   * const androidpublisher = google.androidpublisher('v3');
   *
   * @namespace androidpublisher
   * @type {Function}
   * @version v3
   * @variation v3
   * @param {object=} options Options for Androidpublisher
   */
  export class Androidpublisher {
    context: APIRequestContext;
    edits: Resource$Edits;
    inappproducts: Resource$Inappproducts;
    internalappsharingartifacts: Resource$Internalappsharingartifacts;
    orders: Resource$Orders;
    purchases: Resource$Purchases;
    reviews: Resource$Reviews;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.edits = new Resource$Edits(this.context);
      this.inappproducts = new Resource$Inappproducts(this.context);
      this.internalappsharingartifacts = new Resource$Internalappsharingartifacts(
        this.context
      );
      this.orders = new Resource$Orders(this.context);
      this.purchases = new Resource$Purchases(this.context);
      this.reviews = new Resource$Reviews(this.context);
    }
  }

  export interface Schema$Apk {
    /**
     * Information about the binary payload of this APK.
     */
    binary?: Schema$ApkBinary;
    /**
     * The version code of the APK, as specified in the APK&#39;s manifest file.
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
  export interface Schema$ApksAddExternallyHostedRequest {
    /**
     * The definition of the externally-hosted APK and where it is located.
     */
    externallyHostedApk?: Schema$ExternallyHostedApk;
  }
  export interface Schema$ApksAddExternallyHostedResponse {
    /**
     * The definition of the externally-hosted APK and where it is located.
     */
    externallyHostedApk?: Schema$ExternallyHostedApk;
  }
  export interface Schema$ApksListResponse {
    apks?: Schema$Apk[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;androidpublisher#apksListResponse&quot;.
     */
    kind?: string | null;
  }
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
     * Default language code, in BCP 47 format (eg &quot;en-US&quot;).
     */
    defaultLanguage?: string | null;
  }
  /**
   * Represents an edit of an app. An edit allows clients to make multiple changes before committing them in one operation.
   */
  export interface Schema$AppEdit {
    /**
     * The time at which the edit will expire and will be no longer valid for use in any subsequent API calls (encoded as seconds since the Epoch).
     */
    expiryTimeSeconds?: string | null;
    /**
     * The ID of the edit that can be used in subsequent API calls.
     */
    id?: string | null;
  }
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
     * The version code of the Android App Bundle. As specified in the Android App Bundle&#39;s base module APK manifest file.
     */
    versionCode?: number | null;
  }
  export interface Schema$BundlesListResponse {
    bundles?: Schema$Bundle[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;androidpublisher#bundlesListResponse&quot;.
     */
    kind?: string | null;
  }
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
  export interface Schema$CountryTargeting {
    countries?: string[] | null;
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
  export interface Schema$DeobfuscationFilesUploadResponse {
    deobfuscationFile?: Schema$DeobfuscationFile;
  }
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
  export interface Schema$DeviceMetadata {
    /**
     * Device CPU make e.g. &quot;Qualcomm&quot;
     */
    cpuMake?: string | null;
    /**
     * Device CPU model e.g. &quot;MSM8974&quot;
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
     * Comma separated list of native platforms (e.g. &quot;arm&quot;, &quot;arm7&quot;)
     */
    nativePlatform?: string | null;
    /**
     * Device model name (e.g. Droid)
     */
    productName?: string | null;
    /**
     * Device RAM in Megabytes e.g. &quot;2048&quot;
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
  export interface Schema$ExpansionFile {
    /**
     * If set this field indicates that this APK has an Expansion File uploaded to it: this APK does not reference another APK&#39;s Expansion File. The field&#39;s value is the size of the uploaded Expansion File in bytes.
     */
    fileSize?: string | null;
    /**
     * If set this APK&#39;s Expansion File references another APK&#39;s Expansion File. The file_size field will not be set.
     */
    referencesVersion?: number | null;
  }
  export interface Schema$ExpansionFilesUploadResponse {
    expansionFile?: Schema$ExpansionFile;
  }
  /**
   * Defines an APK available for this application that is hosted externally and not uploaded to Google Play. This function is only available to enterprises who are using Google Play for Work, and whos application is restricted to the enterprise private channel
   */
  export interface Schema$ExternallyHostedApk {
    /**
     * The application label.
     */
    applicationLabel?: string | null;
    /**
     * A certificate (or array of certificates if a certificate-chain is used) used to signed this APK, represented as a base64 encoded byte array.
     */
    certificateBase64s?: string[] | null;
    /**
     * The URL at which the APK is hosted. This must be an https URL.
     */
    externallyHostedUrl?: string | null;
    /**
     * The SHA1 checksum of this APK, represented as a base64 encoded byte array.
     */
    fileSha1Base64?: string | null;
    /**
     * The SHA256 checksum of this APK, represented as a base64 encoded byte array.
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
    usesPermissions?: Schema$ExternallyHostedApkUsesPermission[];
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
   * A permission used by this APK.
   */
  export interface Schema$ExternallyHostedApkUsesPermission {
    /**
     * Optionally, the maximum SDK version for which the permission is required.
     */
    maxSdkVersion?: number | null;
    /**
     * The name of the permission requested.
     */
    name?: string | null;
  }
  export interface Schema$Image {
    /**
     * A unique id representing this image.
     */
    id?: string | null;
    /**
     * A sha1 hash of the image that was uploaded.
     */
    sha1?: string | null;
    /**
     * A sha256 hash of the image that was uploaded.
     */
    sha256?: string | null;
    /**
     * A URL that will serve a preview of the image.
     */
    url?: string | null;
  }
  export interface Schema$ImagesDeleteAllResponse {
    deleted?: Schema$Image[];
  }
  export interface Schema$ImagesListResponse {
    images?: Schema$Image[];
  }
  export interface Schema$ImagesUploadResponse {
    image?: Schema$Image;
  }
  export interface Schema$InAppProduct {
    /**
     * The default language of the localized data, as defined by BCP 47. e.g. &quot;en-US&quot;, &quot;en-GB&quot;.
     */
    defaultLanguage?: string | null;
    /**
     * Default price cannot be zero. In-app products can never be free. Default price is always in the developer&#39;s Checkout merchant currency.
     */
    defaultPrice?: Schema$Price;
    /**
     * Grace period of the subscription, specified in ISO 8601 format. It will allow developers to give their subscribers a grace period when the payment for the new recurrence period is declined. Acceptable values = &quot;P3D&quot; (three days) and &quot;P7D&quot; (seven days)
     */
    gracePeriod?: string | null;
    /**
     * List of localized title and description data.
     */
    listings?: {[key: string]: Schema$InAppProductListing} | null;
    /**
     * The package name of the parent app.
     */
    packageName?: string | null;
    /**
     * Prices per buyer region. None of these prices should be zero. In-app products can never be free.
     */
    prices?: {[key: string]: Schema$Price} | null;
    /**
     * Purchase type enum value. Unmodifiable after creation.
     */
    purchaseType?: string | null;
    /**
     * Definition of a season for a seasonal subscription. Can be defined only for yearly subscriptions.
     */
    season?: Schema$Season;
    /**
     * The stock-keeping-unit (SKU) of the product, unique within an app.
     */
    sku?: string | null;
    status?: string | null;
    /**
     * Subscription period, specified in ISO 8601 format. Acceptable values are &quot;P1W&quot; (one week), &quot;P1M&quot; (one month), &quot;P3M&quot; (three months), &quot;P6M&quot; (six months), and &quot;P1Y&quot; (one year).
     */
    subscriptionPeriod?: string | null;
    /**
     * Trial period, specified in ISO 8601 format. Acceptable values are anything between &quot;P7D&quot; (seven days) and &quot;P999D&quot; (999 days). Seasonal subscriptions cannot have a trial period.
     */
    trialPeriod?: string | null;
  }
  export interface Schema$InAppProductListing {
    description?: string | null;
    title?: string | null;
  }
  export interface Schema$InappproductsListResponse {
    inappproduct?: Schema$InAppProduct[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;androidpublisher#inappproductsListResponse&quot;.
     */
    kind?: string | null;
    pageInfo?: Schema$PageInfo;
    tokenPagination?: Schema$TokenPagination;
  }
  /**
   * An artifact resource which gets created when uploading an APK or Android App Bundle through internal app sharing.
   */
  export interface Schema$InternalAppSharingArtifact {
    /**
     * The SHA256 fingerprint of the certificate used to signed the generated artifact.
     */
    certificateFingerprint?: string | null;
    /**
     * The download URL generated for the uploaded artifact. Users that are authorized to download can follow the link to the Play Store app to install it.
     */
    downloadUrl?: string | null;
    /**
     * The SHA-256 hash of the artifact represented as a lowercase hexadecimal number, matching the output of the sha256sum command.
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
     * ISO 4217 currency code for the introductory subscription price. For example, if the price is specified in British pounds sterling, price_currency_code is &quot;GBP&quot;.
     */
    introductoryPriceCurrencyCode?: string | null;
    /**
     * The number of billing period to offer introductory pricing.
     */
    introductoryPriceCycles?: number | null;
    /**
     * Introductory price period, specified in ISO 8601 format. Common values are (but not limited to) &quot;P1W&quot; (one week), &quot;P1M&quot; (one month), &quot;P3M&quot; (three months), &quot;P6M&quot; (six months), and &quot;P1Y&quot; (one year).
     */
    introductoryPricePeriod?: string | null;
  }
  export interface Schema$Listing {
    /**
     * Full description of the app; this may be up to 4000 characters in length.
     */
    fullDescription?: string | null;
    /**
     * Language localization code (for example, &quot;de-AT&quot; for Austrian German).
     */
    language?: string | null;
    /**
     * Short description of the app (previously known as promo text); this may be up to 80 characters in length.
     */
    shortDescription?: string | null;
    /**
     * App&#39;s localized title.
     */
    title?: string | null;
    /**
     * URL of a promotional YouTube video for the app.
     */
    video?: string | null;
  }
  export interface Schema$ListingsListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;androidpublisher#listingsListResponse&quot;.
     */
    kind?: string | null;
    listings?: Schema$Listing[];
  }
  export interface Schema$LocalizedText {
    /**
     * The language code, in BCP 47 format (eg &quot;en-US&quot;).
     */
    language?: string | null;
    /**
     * The text in the given `language`.
     */
    text?: string | null;
  }
  export interface Schema$MonthDay {
    /**
     * Day of a month, value in [1, 31] range. Valid range depends on the specified month.
     */
    day?: number | null;
    /**
     * Month of a year. e.g. 1 = JAN, 2 = FEB etc.
     */
    month?: number | null;
  }
  export interface Schema$PageInfo {
    resultPerPage?: number | null;
    startIndex?: number | null;
    totalResults?: number | null;
  }
  export interface Schema$Price {
    /**
     * 3 letter Currency code, as defined by ISO 4217.
     */
    currency?: string | null;
    /**
     * The price in millionths of the currency base unit represented as a string.
     */
    priceMicros?: string | null;
  }
  /**
   * A ProductPurchase resource indicates the status of a user&#39;s inapp product purchase.
   */
  export interface Schema$ProductPurchase {
    /**
     * The acknowledgement state of the inapp product. Possible values are:   - Yet to be acknowledged  - Acknowledged
     */
    acknowledgementState?: number | null;
    /**
     * The consumption state of the inapp product. Possible values are:   - Yet to be consumed  - Consumed
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
     * The order id associated with the purchase of the inapp product.
     */
    orderId?: string | null;
    /**
     * The purchase state of the order. Possible values are:   - Purchased  - Canceled  - Pending
     */
    purchaseState?: number | null;
    /**
     * The time the product was purchased, in milliseconds since the epoch (Jan 1, 1970).
     */
    purchaseTimeMillis?: string | null;
    /**
     * The type of purchase of the inapp product. This field is only set if this purchase was not made using the standard in-app billing flow. Possible values are:   - Test (i.e. purchased from a license testing account)  - Promo (i.e. purchased using a promo code)  - Rewarded (i.e. from watching a video ad instead of paying)
     */
    purchaseType?: number | null;
  }
  export interface Schema$ProductPurchasesAcknowledgeRequest {
    /**
     * Payload to attach to the purchase.
     */
    developerPayload?: string | null;
  }
  export interface Schema$Prorate {
    /**
     * Default price cannot be zero and must be less than the full subscription price. Default price is always in the developer&#39;s Checkout merchant currency. Targeted countries have their prices set automatically based on the default_price.
     */
    defaultPrice?: Schema$Price;
    /**
     * Defines the first day on which the price takes effect.
     */
    start?: Schema$MonthDay;
  }
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
  export interface Schema$ReviewsListResponse {
    pageInfo?: Schema$PageInfo;
    reviews?: Schema$Review[];
    tokenPagination?: Schema$TokenPagination;
  }
  export interface Schema$ReviewsReplyRequest {
    /**
     * The text to set as the reply. Replies of more than approximately 350 characters will be rejected. HTML tags will be stripped.
     */
    replyText?: string | null;
  }
  export interface Schema$ReviewsReplyResponse {
    result?: Schema$ReviewReplyResult;
  }
  export interface Schema$Season {
    /**
     * Inclusive end date of the recurrence period.
     */
    end?: Schema$MonthDay;
    /**
     * Optionally present list of prorations for the season. Each proration is a one-off discounted entry into a subscription. Each proration contains the first date on which the discount is available and the new pricing information.
     */
    prorations?: Schema$Prorate[];
    /**
     * Inclusive start date of the recurrence period.
     */
    start?: Schema$MonthDay;
  }
  /**
   * Information provided by the user when they complete the subscription cancellation flow (cancellation reason survey).
   */
  export interface Schema$SubscriptionCancelSurveyResult {
    /**
     * The cancellation reason the user chose in the survey. Possible values are:   - Other  - I don&#39;t use this service enough  - Technical issues  - Cost-related reasons  - I found a better app
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
     * The current state of the price change. Possible values are:   - Outstanding: State for a pending price change waiting for the user to agree. In this state, you can optionally seek confirmation from the user using the In-App API.  - Accepted: State for an accepted price change that the subscription will renew with unless it&#39;s canceled. The price change takes effect on a future date when the subscription renews. Note that the change might not occur when the subscription is renewed next.
     */
    state?: number | null;
  }
  /**
   * A SubscriptionPurchase resource indicates the status of a user&#39;s subscription purchase.
   */
  export interface Schema$SubscriptionPurchase {
    /**
     * The acknowledgement state of the subscription product. Possible values are:   - Yet to be acknowledged  - Acknowledged
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
     * The reason why a subscription was canceled or is not auto-renewing. Possible values are:   - User canceled the subscription  - Subscription was canceled by the system, for example because of a billing problem  - Subscription was replaced with a new subscription  - Subscription was canceled by the developer
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
     * The email address of the user when the subscription was purchased. Only present for purchases made with &#39;Subscribe with Google&#39;.
     */
    emailAddress?: string | null;
    /**
     * Time at which the subscription will expire, in milliseconds since the Epoch.
     */
    expiryTimeMillis?: string | null;
    /**
     * The family name of the user when the subscription was purchased. Only present for purchases made with &#39;Subscribe with Google&#39;.
     */
    familyName?: string | null;
    /**
     * The given name of the user when the subscription was purchased. Only present for purchases made with &#39;Subscribe with Google&#39;.
     */
    givenName?: string | null;
    /**
     * Introductory price information of the subscription. This is only present when the subscription was purchased with an introductory price.  This field does not indicate the subscription is currently in introductory price period.
     */
    introductoryPriceInfo?: Schema$IntroductoryPriceInfo;
    /**
     * This kind represents a subscriptionPurchase object in the androidpublisher service.
     */
    kind?: string | null;
    /**
     * The purchase token of the originating purchase if this subscription is one of the following:   - Re-signup of a canceled but non-lapsed subscription  - Upgrade/downgrade from a previous subscription  For example, suppose a user originally signs up and you receive purchase token X, then the user cancels and goes through the resignup flow (before their subscription lapses) and you receive purchase token Y, and finally the user upgrades their subscription and you receive purchase token Z. If you call this API with purchase token Z, this field will be set to Y. If you call this API with purchase token Y, this field will be set to X. If you call this API with purchase token X, this field will not be set.
     */
    linkedPurchaseToken?: string | null;
    /**
     * The order id of the latest recurring order associated with the purchase of the subscription.
     */
    orderId?: string | null;
    /**
     * The payment state of the subscription. Possible values are:   - Payment pending  - Payment received  - Free trial  - Pending deferred upgrade/downgrade
     */
    paymentState?: number | null;
    /**
     * Price of the subscription, not including tax. Price is expressed in micro-units, where 1,000,000 micro-units represents one unit of the currency. For example, if the subscription price is €1.99, price_amount_micros is 1990000.
     */
    priceAmountMicros?: string | null;
    /**
     * The latest price change information available. This is present only when there is an upcoming price change for the subscription yet to be applied.  Once the subscription renews with the new price or the subscription is canceled, no price change information will be returned.
     */
    priceChange?: Schema$SubscriptionPriceChange;
    /**
     * ISO 4217 currency code for the subscription price. For example, if the price is specified in British pounds sterling, price_currency_code is &quot;GBP&quot;.
     */
    priceCurrencyCode?: string | null;
    /**
     * The Google profile id of the user when the subscription was purchased. Only present for purchases made with &#39;Subscribe with Google&#39;.
     */
    profileId?: string | null;
    /**
     * The profile name of the user when the subscription was purchased. Only present for purchases made with &#39;Subscribe with Google&#39;.
     */
    profileName?: string | null;
    /**
     * The type of purchase of the subscription. This field is only set if this purchase was not made using the standard in-app billing flow. Possible values are:   - Test (i.e. purchased from a license testing account)
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
  export interface Schema$SubscriptionPurchasesAcknowledgeRequest {
    /**
     * Payload to attach to the purchase.
     */
    developerPayload?: string | null;
  }
  export interface Schema$SubscriptionPurchasesDeferRequest {
    /**
     * The information about the new desired expiry time for the subscription.
     */
    deferralInfo?: Schema$SubscriptionDeferralInfo;
  }
  export interface Schema$SubscriptionPurchasesDeferResponse {
    /**
     * The new expiry time for the subscription in milliseconds since the Epoch.
     */
    newExpiryTimeMillis?: string | null;
  }
  export interface Schema$Testers {
    /**
     * A list of all Google Groups, as email addresses, that define testers for this track.
     */
    googleGroups?: string[] | null;
  }
  export interface Schema$Timestamp {
    nanos?: number | null;
    seconds?: string | null;
  }
  export interface Schema$TokenPagination {
    nextPageToken?: string | null;
    previousPageToken?: string | null;
  }
  export interface Schema$Track {
    /**
     * A list of all active releases in this track during a read request. On an update request, it represents desired changes.
     */
    releases?: Schema$TrackRelease[];
    /**
     * Identifier for this track.
     */
    track?: string | null;
  }
  export interface Schema$TrackRelease {
    countryTargeting?: Schema$CountryTargeting;
    /**
     * The release name, used to identify this release in the Play Console UI. Not required to be unique. This is optional, if not set it will be generated from the version_name in the APKs.
     */
    name?: string | null;
    /**
     * The description of what is new in the app in this release.
     */
    releaseNotes?: Schema$LocalizedText[];
    /**
     * The desired status of this release.
     */
    status?: string | null;
    /**
     * Fraction of users who are eligible to receive the release. 0 &lt; fraction &lt; 1. To be set, release status must be &quot;inProgress&quot; or &quot;halted&quot;.
     */
    userFraction?: number | null;
    /**
     * A list of all version codes of APKs that will be exposed to the users of this track when this release is rolled out. Note that this list should contain all versions you wish to be active, including those you wish to retain from previous releases.
     */
    versionCodes?: string[] | null;
  }
  export interface Schema$TracksListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;androidpublisher#tracksListResponse&quot;.
     */
    kind?: string | null;
    tracks?: Schema$Track[];
  }
  export interface Schema$UserComment {
    /**
     * Integer Android SDK version of the user&#39;s device at the time the review was written, e.g. 23 is Marshmallow. May be absent.
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
     * Codename for the reviewer&#39;s device, e.g. klte, flounder. May be absent.
     */
    device?: string | null;
    /**
     * Some information about the characteristics of the user&#39;s device
     */
    deviceMetadata?: Schema$DeviceMetadata;
    /**
     * The last time at which this comment was updated.
     */
    lastModified?: Schema$Timestamp;
    /**
     * Untranslated text of the review, in the case where the review has been translated. If the review has not been translated this is left blank.
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
     * Number of users who have given this review a thumbs down
     */
    thumbsDownCount?: number | null;
    /**
     * Number of users who have given this review a thumbs up
     */
    thumbsUpCount?: number | null;
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
     * The reason why the purchase was voided, possible values are:   - Other  - Remorse  - Not_received  - Defective  - Accidental_purchase  - Fraud  - Friendly_fraud  - Chargeback
     */
    voidedReason?: number | null;
    /**
     * The initiator of voided purchase, possible values are:   - User  - Developer  - Google
     */
    voidedSource?: number | null;
    /**
     * The time at which the purchase was canceled/refunded/charged-back, in milliseconds since the epoch (Jan 1, 1970).
     */
    voidedTimeMillis?: string | null;
  }
  export interface Schema$VoidedPurchasesListResponse {
    pageInfo?: Schema$PageInfo;
    tokenPagination?: Schema$TokenPagination;
    voidedPurchases?: Schema$VoidedPurchase[];
  }

  export class Resource$Edits {
    context: APIRequestContext;
    apks: Resource$Edits$Apks;
    bundles: Resource$Edits$Bundles;
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
     * androidpublisher.edits.commit
     * @desc Commits/applies the changes made in this edit back to the app.
     * @alias androidpublisher.edits.commit
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.editId Unique identifier for this edit.
     * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    commit(
      params?: Params$Resource$Edits$Commit,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AppEdit>;
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
        | BodyResponseCallback<Schema$AppEdit>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$AppEdit>,
      callback?: BodyResponseCallback<Schema$AppEdit>
    ): void | GaxiosPromise<Schema$AppEdit> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$AppEdit>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AppEdit>(parameters);
      }
    }

    /**
     * androidpublisher.edits.delete
     * @desc Deletes an edit for an app. Creating a new edit will automatically delete any of your previous edits so this method need only be called if you want to preemptively abandon an edit.
     * @alias androidpublisher.edits.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.editId Unique identifier for this edit.
     * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Edits$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
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
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * androidpublisher.edits.get
     * @desc Returns information about the edit specified. Calls will fail if the edit is no long active (e.g. has been deleted, superseded or expired).
     * @alias androidpublisher.edits.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.editId Unique identifier for this edit.
     * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Edits$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AppEdit>;
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
        | BodyResponseCallback<Schema$AppEdit>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$AppEdit>,
      callback?: BodyResponseCallback<Schema$AppEdit>
    ): void | GaxiosPromise<Schema$AppEdit> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$AppEdit>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AppEdit>(parameters);
      }
    }

    /**
     * androidpublisher.edits.insert
     * @desc Creates a new edit for an app, populated with the app's current state.
     * @alias androidpublisher.edits.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     * @param {().AppEdit} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Edits$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AppEdit>;
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
        | BodyResponseCallback<Schema$AppEdit>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$AppEdit>,
      callback?: BodyResponseCallback<Schema$AppEdit>
    ): void | GaxiosPromise<Schema$AppEdit> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$AppEdit>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AppEdit>(parameters);
      }
    }

    /**
     * androidpublisher.edits.validate
     * @desc Checks that the edit can be successfully committed. The edit's changes are not applied to the live app.
     * @alias androidpublisher.edits.validate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.editId Unique identifier for this edit.
     * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    validate(
      params?: Params$Resource$Edits$Validate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AppEdit>;
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
        | BodyResponseCallback<Schema$AppEdit>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$AppEdit>,
      callback?: BodyResponseCallback<Schema$AppEdit>
    ): void | GaxiosPromise<Schema$AppEdit> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$AppEdit>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AppEdit>(parameters);
      }
    }
  }

  export interface Params$Resource$Edits$Commit extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     */
    packageName?: string;
  }
  export interface Params$Resource$Edits$Delete extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     */
    packageName?: string;
  }
  export interface Params$Resource$Edits$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     */
    packageName?: string;
  }
  export interface Params$Resource$Edits$Insert extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     */
    packageName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AppEdit;
  }
  export interface Params$Resource$Edits$Validate extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     */
    packageName?: string;
  }

  export class Resource$Edits$Apks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * androidpublisher.edits.apks.addexternallyhosted
     * @desc Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to enterprises using Google Play for Work whose application is configured to restrict distribution to the enterprise domain.
     * @alias androidpublisher.edits.apks.addexternallyhosted
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.editId Unique identifier for this edit.
     * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     * @param {().ApksAddExternallyHostedRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    addexternallyhosted(
      params?: Params$Resource$Edits$Apks$Addexternallyhosted,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ApksAddExternallyHostedResponse>;
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
        | BodyResponseCallback<Schema$ApksAddExternallyHostedResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ApksAddExternallyHostedResponse>,
      callback?: BodyResponseCallback<Schema$ApksAddExternallyHostedResponse>
    ): void | GaxiosPromise<Schema$ApksAddExternallyHostedResponse> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
          callback
        );
      } else {
        return createAPIRequest<Schema$ApksAddExternallyHostedResponse>(
          parameters
        );
      }
    }

    /**
     * androidpublisher.edits.apks.list
     * @alias androidpublisher.edits.apks.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.editId Unique identifier for this edit.
     * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Edits$Apks$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ApksListResponse>;
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
        | BodyResponseCallback<Schema$ApksListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ApksListResponse>,
      callback?: BodyResponseCallback<Schema$ApksListResponse>
    ): void | GaxiosPromise<Schema$ApksListResponse> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$ApksListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ApksListResponse>(parameters);
      }
    }

    /**
     * androidpublisher.edits.apks.upload
     * @alias androidpublisher.edits.apks.upload
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.editId Unique identifier for this edit.
     * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    upload(
      params?: Params$Resource$Edits$Apks$Upload,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Apk>;
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
        | BodyResponseCallback<Schema$Apk>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Apk>,
      callback?: BodyResponseCallback<Schema$Apk>
    ): void | GaxiosPromise<Schema$Apk> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$Apk>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Apk>(parameters);
      }
    }
  }

  export interface Params$Resource$Edits$Apks$Addexternallyhosted
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     */
    packageName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ApksAddExternallyHostedRequest;
  }
  export interface Params$Resource$Edits$Apks$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     */
    packageName?: string;
  }
  export interface Params$Resource$Edits$Apks$Upload
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     */
    packageName?: string;

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
     * androidpublisher.edits.bundles.list
     * @alias androidpublisher.edits.bundles.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.editId Unique identifier for this edit.
     * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Edits$Bundles$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BundlesListResponse>;
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
        | BodyResponseCallback<Schema$BundlesListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$BundlesListResponse>,
      callback?: BodyResponseCallback<Schema$BundlesListResponse>
    ): void | GaxiosPromise<Schema$BundlesListResponse> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$BundlesListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$BundlesListResponse>(parameters);
      }
    }

    /**
     * androidpublisher.edits.bundles.upload
     * @desc Uploads a new Android App Bundle to this edit. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See: https://developers.google.com/api-client-library/java/google-api-java-client/errors for an example in java.
     * @alias androidpublisher.edits.bundles.upload
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.ackBundleInstallationWarning Must be set to true if the bundle installation may trigger a warning on user devices (for example, if installation size may be over a threshold, typically 100 MB).
     * @param {string} params.editId Unique identifier for this edit.
     * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    upload(
      params?: Params$Resource$Edits$Bundles$Upload,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Bundle>;
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
        | BodyResponseCallback<Schema$Bundle>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Bundle>,
      callback?: BodyResponseCallback<Schema$Bundle>
    ): void | GaxiosPromise<Schema$Bundle> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$Bundle>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Bundle>(parameters);
      }
    }
  }

  export interface Params$Resource$Edits$Bundles$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     */
    packageName?: string;
  }
  export interface Params$Resource$Edits$Bundles$Upload
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Must be set to true if the bundle installation may trigger a warning on user devices (for example, if installation size may be over a threshold, typically 100 MB).
     */
    ackBundleInstallationWarning?: boolean;
    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     */
    packageName?: string;

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

  export class Resource$Edits$Deobfuscationfiles {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * androidpublisher.edits.deobfuscationfiles.upload
     * @desc Uploads the deobfuscation file of the specified APK. If a deobfuscation file already exists, it will be replaced.
     * @alias androidpublisher.edits.deobfuscationfiles.upload
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer} params.apkVersionCode The version code of the APK whose deobfuscation file is being uploaded.
     * @param {string} params.deobfuscationFileType
     * @param {string} params.editId Unique identifier for this edit.
     * @param {string} params.packageName Unique identifier of the Android app for which the deobfuscatiuon files are being uploaded; for example, "com.spiffygame".
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    upload(
      params?: Params$Resource$Edits$Deobfuscationfiles$Upload,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DeobfuscationFilesUploadResponse>;
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
        | BodyResponseCallback<Schema$DeobfuscationFilesUploadResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$DeobfuscationFilesUploadResponse>,
      callback?: BodyResponseCallback<Schema$DeobfuscationFilesUploadResponse>
    ): void | GaxiosPromise<Schema$DeobfuscationFilesUploadResponse> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
          callback
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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The version code of the APK whose deobfuscation file is being uploaded.
     */
    apkVersionCode?: number;
    /**
     *
     */
    deobfuscationFileType?: string;
    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * Unique identifier of the Android app for which the deobfuscatiuon files are being uploaded; for example, "com.spiffygame".
     */
    packageName?: string;

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
     * androidpublisher.edits.details.get
     * @desc Fetches app details for this edit. This includes the default language and developer support contact information.
     * @alias androidpublisher.edits.details.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.editId Unique identifier for this edit.
     * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Edits$Details$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AppDetails>;
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
        | BodyResponseCallback<Schema$AppDetails>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AppDetails>,
      callback?: BodyResponseCallback<Schema$AppDetails>
    ): void | GaxiosPromise<Schema$AppDetails> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$AppDetails>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AppDetails>(parameters);
      }
    }

    /**
     * androidpublisher.edits.details.patch
     * @desc Updates app details for this edit. This method supports patch semantics.
     * @alias androidpublisher.edits.details.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.editId Unique identifier for this edit.
     * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     * @param {().AppDetails} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Edits$Details$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AppDetails>;
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
        | BodyResponseCallback<Schema$AppDetails>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AppDetails>,
      callback?: BodyResponseCallback<Schema$AppDetails>
    ): void | GaxiosPromise<Schema$AppDetails> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$AppDetails>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AppDetails>(parameters);
      }
    }

    /**
     * androidpublisher.edits.details.update
     * @desc Updates app details for this edit.
     * @alias androidpublisher.edits.details.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.editId Unique identifier for this edit.
     * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     * @param {().AppDetails} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Edits$Details$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AppDetails>;
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
        | BodyResponseCallback<Schema$AppDetails>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AppDetails>,
      callback?: BodyResponseCallback<Schema$AppDetails>
    ): void | GaxiosPromise<Schema$AppDetails> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$AppDetails>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AppDetails>(parameters);
      }
    }
  }

  export interface Params$Resource$Edits$Details$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     */
    packageName?: string;
  }
  export interface Params$Resource$Edits$Details$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
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
     * androidpublisher.edits.expansionfiles.get
     * @desc Fetches the Expansion File configuration for the APK specified.
     * @alias androidpublisher.edits.expansionfiles.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer} params.apkVersionCode The version code of the APK whose Expansion File configuration is being read or modified.
     * @param {string} params.editId Unique identifier for this edit.
     * @param {string} params.expansionFileType
     * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Edits$Expansionfiles$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ExpansionFile>;
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
        | BodyResponseCallback<Schema$ExpansionFile>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ExpansionFile>,
      callback?: BodyResponseCallback<Schema$ExpansionFile>
    ): void | GaxiosPromise<Schema$ExpansionFile> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$ExpansionFile>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ExpansionFile>(parameters);
      }
    }

    /**
     * androidpublisher.edits.expansionfiles.patch
     * @desc Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method. This method supports patch semantics.
     * @alias androidpublisher.edits.expansionfiles.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer} params.apkVersionCode The version code of the APK whose Expansion File configuration is being read or modified.
     * @param {string} params.editId Unique identifier for this edit.
     * @param {string} params.expansionFileType
     * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     * @param {().ExpansionFile} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Edits$Expansionfiles$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ExpansionFile>;
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
        | BodyResponseCallback<Schema$ExpansionFile>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ExpansionFile>,
      callback?: BodyResponseCallback<Schema$ExpansionFile>
    ): void | GaxiosPromise<Schema$ExpansionFile> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$ExpansionFile>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ExpansionFile>(parameters);
      }
    }

    /**
     * androidpublisher.edits.expansionfiles.update
     * @desc Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method.
     * @alias androidpublisher.edits.expansionfiles.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer} params.apkVersionCode The version code of the APK whose Expansion File configuration is being read or modified.
     * @param {string} params.editId Unique identifier for this edit.
     * @param {string} params.expansionFileType
     * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     * @param {().ExpansionFile} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Edits$Expansionfiles$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ExpansionFile>;
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
        | BodyResponseCallback<Schema$ExpansionFile>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ExpansionFile>,
      callback?: BodyResponseCallback<Schema$ExpansionFile>
    ): void | GaxiosPromise<Schema$ExpansionFile> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$ExpansionFile>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ExpansionFile>(parameters);
      }
    }

    /**
     * androidpublisher.edits.expansionfiles.upload
     * @desc Uploads and attaches a new Expansion File to the APK specified.
     * @alias androidpublisher.edits.expansionfiles.upload
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer} params.apkVersionCode The version code of the APK whose Expansion File configuration is being read or modified.
     * @param {string} params.editId Unique identifier for this edit.
     * @param {string} params.expansionFileType
     * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    upload(
      params?: Params$Resource$Edits$Expansionfiles$Upload,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ExpansionFilesUploadResponse>;
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
        | BodyResponseCallback<Schema$ExpansionFilesUploadResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ExpansionFilesUploadResponse>,
      callback?: BodyResponseCallback<Schema$ExpansionFilesUploadResponse>
    ): void | GaxiosPromise<Schema$ExpansionFilesUploadResponse> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
          callback
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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The version code of the APK whose Expansion File configuration is being read or modified.
     */
    apkVersionCode?: number;
    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     *
     */
    expansionFileType?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     */
    packageName?: string;
  }
  export interface Params$Resource$Edits$Expansionfiles$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The version code of the APK whose Expansion File configuration is being read or modified.
     */
    apkVersionCode?: number;
    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     *
     */
    expansionFileType?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The version code of the APK whose Expansion File configuration is being read or modified.
     */
    apkVersionCode?: number;
    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     *
     */
    expansionFileType?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The version code of the APK whose Expansion File configuration is being read or modified.
     */
    apkVersionCode?: number;
    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     *
     */
    expansionFileType?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     */
    packageName?: string;

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
     * androidpublisher.edits.images.delete
     * @desc Deletes the image (specified by id) from the edit.
     * @alias androidpublisher.edits.images.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.editId Unique identifier for this edit.
     * @param {string} params.imageId Unique identifier an image within the set of images attached to this edit.
     * @param {string} params.imageType
     * @param {string} params.language The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass "de-AT".
     * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Edits$Images$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
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
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * androidpublisher.edits.images.deleteall
     * @desc Deletes all images for the specified language and image type.
     * @alias androidpublisher.edits.images.deleteall
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.editId Unique identifier for this edit.
     * @param {string} params.imageType
     * @param {string} params.language The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass "de-AT".
     * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    deleteall(
      params?: Params$Resource$Edits$Images$Deleteall,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ImagesDeleteAllResponse>;
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
        | BodyResponseCallback<Schema$ImagesDeleteAllResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ImagesDeleteAllResponse>,
      callback?: BodyResponseCallback<Schema$ImagesDeleteAllResponse>
    ): void | GaxiosPromise<Schema$ImagesDeleteAllResponse> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$ImagesDeleteAllResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ImagesDeleteAllResponse>(parameters);
      }
    }

    /**
     * androidpublisher.edits.images.list
     * @desc Lists all images for the specified language and image type.
     * @alias androidpublisher.edits.images.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.editId Unique identifier for this edit.
     * @param {string} params.imageType
     * @param {string} params.language The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass "de-AT".
     * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Edits$Images$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ImagesListResponse>;
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
        | BodyResponseCallback<Schema$ImagesListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ImagesListResponse>,
      callback?: BodyResponseCallback<Schema$ImagesListResponse>
    ): void | GaxiosPromise<Schema$ImagesListResponse> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$ImagesListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ImagesListResponse>(parameters);
      }
    }

    /**
     * androidpublisher.edits.images.upload
     * @desc Uploads a new image and adds it to the list of images for the specified language and image type.
     * @alias androidpublisher.edits.images.upload
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.editId Unique identifier for this edit.
     * @param {string} params.imageType
     * @param {string} params.language The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass "de-AT".
     * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    upload(
      params?: Params$Resource$Edits$Images$Upload,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ImagesUploadResponse>;
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
        | BodyResponseCallback<Schema$ImagesUploadResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ImagesUploadResponse>,
      callback?: BodyResponseCallback<Schema$ImagesUploadResponse>
    ): void | GaxiosPromise<Schema$ImagesUploadResponse> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$ImagesUploadResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ImagesUploadResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Edits$Images$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * Unique identifier an image within the set of images attached to this edit.
     */
    imageId?: string;
    /**
     *
     */
    imageType?: string;
    /**
     * The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass "de-AT".
     */
    language?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     */
    packageName?: string;
  }
  export interface Params$Resource$Edits$Images$Deleteall
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     *
     */
    imageType?: string;
    /**
     * The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass "de-AT".
     */
    language?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     */
    packageName?: string;
  }
  export interface Params$Resource$Edits$Images$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     *
     */
    imageType?: string;
    /**
     * The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass "de-AT".
     */
    language?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     */
    packageName?: string;
  }
  export interface Params$Resource$Edits$Images$Upload
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     *
     */
    imageType?: string;
    /**
     * The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass "de-AT".
     */
    language?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     */
    packageName?: string;

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
     * androidpublisher.edits.listings.delete
     * @desc Deletes the specified localized store listing from an edit.
     * @alias androidpublisher.edits.listings.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.editId Unique identifier for this edit.
     * @param {string} params.language The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
     * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Edits$Listings$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
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
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * androidpublisher.edits.listings.deleteall
     * @desc Deletes all localized listings from an edit.
     * @alias androidpublisher.edits.listings.deleteall
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.editId Unique identifier for this edit.
     * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    deleteall(
      params?: Params$Resource$Edits$Listings$Deleteall,
      options?: MethodOptions
    ): GaxiosPromise<void>;
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
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * androidpublisher.edits.listings.get
     * @desc Fetches information about a localized store listing.
     * @alias androidpublisher.edits.listings.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.editId Unique identifier for this edit.
     * @param {string} params.language The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
     * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Edits$Listings$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Listing>;
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
        | BodyResponseCallback<Schema$Listing>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Listing>,
      callback?: BodyResponseCallback<Schema$Listing>
    ): void | GaxiosPromise<Schema$Listing> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$Listing>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Listing>(parameters);
      }
    }

    /**
     * androidpublisher.edits.listings.list
     * @desc Returns all of the localized store listings attached to this edit.
     * @alias androidpublisher.edits.listings.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.editId Unique identifier for this edit.
     * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Edits$Listings$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListingsListResponse>;
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
        | BodyResponseCallback<Schema$ListingsListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListingsListResponse>,
      callback?: BodyResponseCallback<Schema$ListingsListResponse>
    ): void | GaxiosPromise<Schema$ListingsListResponse> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$ListingsListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListingsListResponse>(parameters);
      }
    }

    /**
     * androidpublisher.edits.listings.patch
     * @desc Creates or updates a localized store listing. This method supports patch semantics.
     * @alias androidpublisher.edits.listings.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.editId Unique identifier for this edit.
     * @param {string} params.language The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
     * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     * @param {().Listing} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Edits$Listings$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Listing>;
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
        | BodyResponseCallback<Schema$Listing>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Listing>,
      callback?: BodyResponseCallback<Schema$Listing>
    ): void | GaxiosPromise<Schema$Listing> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$Listing>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Listing>(parameters);
      }
    }

    /**
     * androidpublisher.edits.listings.update
     * @desc Creates or updates a localized store listing.
     * @alias androidpublisher.edits.listings.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.editId Unique identifier for this edit.
     * @param {string} params.language The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
     * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     * @param {().Listing} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Edits$Listings$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Listing>;
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
        | BodyResponseCallback<Schema$Listing>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Listing>,
      callback?: BodyResponseCallback<Schema$Listing>
    ): void | GaxiosPromise<Schema$Listing> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$Listing>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Listing>(parameters);
      }
    }
  }

  export interface Params$Resource$Edits$Listings$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
     */
    language?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     */
    packageName?: string;
  }
  export interface Params$Resource$Edits$Listings$Deleteall
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     */
    packageName?: string;
  }
  export interface Params$Resource$Edits$Listings$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
     */
    language?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     */
    packageName?: string;
  }
  export interface Params$Resource$Edits$Listings$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     */
    packageName?: string;
  }
  export interface Params$Resource$Edits$Listings$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
     */
    language?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
     */
    language?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
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
     * androidpublisher.edits.testers.get
     * @alias androidpublisher.edits.testers.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.editId Unique identifier for this edit.
     * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     * @param {string} params.track The track to read or modify.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Edits$Testers$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Testers>;
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
        | BodyResponseCallback<Schema$Testers>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Testers>,
      callback?: BodyResponseCallback<Schema$Testers>
    ): void | GaxiosPromise<Schema$Testers> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$Testers>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Testers>(parameters);
      }
    }

    /**
     * androidpublisher.edits.testers.patch
     * @alias androidpublisher.edits.testers.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.editId Unique identifier for this edit.
     * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     * @param {string} params.track The track to read or modify.
     * @param {().Testers} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Edits$Testers$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Testers>;
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
        | BodyResponseCallback<Schema$Testers>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Testers>,
      callback?: BodyResponseCallback<Schema$Testers>
    ): void | GaxiosPromise<Schema$Testers> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$Testers>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Testers>(parameters);
      }
    }

    /**
     * androidpublisher.edits.testers.update
     * @alias androidpublisher.edits.testers.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.editId Unique identifier for this edit.
     * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     * @param {string} params.track The track to read or modify.
     * @param {().Testers} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Edits$Testers$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Testers>;
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
        | BodyResponseCallback<Schema$Testers>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Testers>,
      callback?: BodyResponseCallback<Schema$Testers>
    ): void | GaxiosPromise<Schema$Testers> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$Testers>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Testers>(parameters);
      }
    }
  }

  export interface Params$Resource$Edits$Testers$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     */
    packageName?: string;
    /**
     * The track to read or modify.
     */
    track?: string;
  }
  export interface Params$Resource$Edits$Testers$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     */
    packageName?: string;
    /**
     * The track to read or modify.
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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     */
    packageName?: string;
    /**
     * The track to read or modify.
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
     * androidpublisher.edits.tracks.get
     * @desc Fetches the track configuration for the specified track type. Includes the APK version codes that are in this track.
     * @alias androidpublisher.edits.tracks.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.editId Unique identifier for this edit.
     * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     * @param {string} params.track The track to read or modify.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Edits$Tracks$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Track>;
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
        | BodyResponseCallback<Schema$Track>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Track>,
      callback?: BodyResponseCallback<Schema$Track>
    ): void | GaxiosPromise<Schema$Track> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$Track>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Track>(parameters);
      }
    }

    /**
     * androidpublisher.edits.tracks.list
     * @desc Lists all the track configurations for this edit.
     * @alias androidpublisher.edits.tracks.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.editId Unique identifier for this edit.
     * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Edits$Tracks$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TracksListResponse>;
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
        | BodyResponseCallback<Schema$TracksListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TracksListResponse>,
      callback?: BodyResponseCallback<Schema$TracksListResponse>
    ): void | GaxiosPromise<Schema$TracksListResponse> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$TracksListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TracksListResponse>(parameters);
      }
    }

    /**
     * androidpublisher.edits.tracks.patch
     * @desc Updates the track configuration for the specified track type. This method supports patch semantics.
     * @alias androidpublisher.edits.tracks.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.editId Unique identifier for this edit.
     * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     * @param {string} params.track The track to read or modify.
     * @param {().Track} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Edits$Tracks$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Track>;
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
        | BodyResponseCallback<Schema$Track>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Track>,
      callback?: BodyResponseCallback<Schema$Track>
    ): void | GaxiosPromise<Schema$Track> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$Track>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Track>(parameters);
      }
    }

    /**
     * androidpublisher.edits.tracks.update
     * @desc Updates the track configuration for the specified track type.
     * @alias androidpublisher.edits.tracks.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.editId Unique identifier for this edit.
     * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     * @param {string} params.track The track to read or modify.
     * @param {().Track} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Edits$Tracks$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Track>;
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
        | BodyResponseCallback<Schema$Track>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Track>,
      callback?: BodyResponseCallback<Schema$Track>
    ): void | GaxiosPromise<Schema$Track> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$Track>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Track>(parameters);
      }
    }
  }

  export interface Params$Resource$Edits$Tracks$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     */
    packageName?: string;
    /**
     * The track to read or modify.
     */
    track?: string;
  }
  export interface Params$Resource$Edits$Tracks$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     */
    packageName?: string;
  }
  export interface Params$Resource$Edits$Tracks$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     */
    packageName?: string;
    /**
     * The track to read or modify.
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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     */
    packageName?: string;
    /**
     * The track to read or modify.
     */
    track?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Track;
  }

  export class Resource$Inappproducts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * androidpublisher.inappproducts.delete
     * @desc Delete an in-app product for an app.
     * @alias androidpublisher.inappproducts.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.packageName Unique identifier for the Android app with the in-app product; for example, "com.spiffygame".
     * @param {string} params.sku Unique identifier for the in-app product.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Inappproducts$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
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
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * androidpublisher.inappproducts.get
     * @desc Returns information about the in-app product specified.
     * @alias androidpublisher.inappproducts.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.packageName
     * @param {string} params.sku Unique identifier for the in-app product.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Inappproducts$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$InAppProduct>;
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
        | BodyResponseCallback<Schema$InAppProduct>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$InAppProduct>,
      callback?: BodyResponseCallback<Schema$InAppProduct>
    ): void | GaxiosPromise<Schema$InAppProduct> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$InAppProduct>(parameters, callback);
      } else {
        return createAPIRequest<Schema$InAppProduct>(parameters);
      }
    }

    /**
     * androidpublisher.inappproducts.insert
     * @desc Creates a new in-app product for an app.
     * @alias androidpublisher.inappproducts.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.autoConvertMissingPrices If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
     * @param {string} params.packageName Unique identifier for the Android app; for example, "com.spiffygame".
     * @param {().InAppProduct} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Inappproducts$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$InAppProduct>;
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
        | BodyResponseCallback<Schema$InAppProduct>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$InAppProduct>,
      callback?: BodyResponseCallback<Schema$InAppProduct>
    ): void | GaxiosPromise<Schema$InAppProduct> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$InAppProduct>(parameters, callback);
      } else {
        return createAPIRequest<Schema$InAppProduct>(parameters);
      }
    }

    /**
     * androidpublisher.inappproducts.list
     * @desc List all the in-app products for an Android app, both subscriptions and managed in-app products..
     * @alias androidpublisher.inappproducts.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.maxResults
     * @param {string} params.packageName Unique identifier for the Android app with in-app products; for example, "com.spiffygame".
     * @param {integer=} params.startIndex
     * @param {string=} params.token
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Inappproducts$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$InappproductsListResponse>;
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
        | BodyResponseCallback<Schema$InappproductsListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$InappproductsListResponse>,
      callback?: BodyResponseCallback<Schema$InappproductsListResponse>
    ): void | GaxiosPromise<Schema$InappproductsListResponse> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
          callback
        );
      } else {
        return createAPIRequest<Schema$InappproductsListResponse>(parameters);
      }
    }

    /**
     * androidpublisher.inappproducts.patch
     * @desc Updates the details of an in-app product. This method supports patch semantics.
     * @alias androidpublisher.inappproducts.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.autoConvertMissingPrices If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
     * @param {string} params.packageName Unique identifier for the Android app with the in-app product; for example, "com.spiffygame".
     * @param {string} params.sku Unique identifier for the in-app product.
     * @param {().InAppProduct} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Inappproducts$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$InAppProduct>;
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
        | BodyResponseCallback<Schema$InAppProduct>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$InAppProduct>,
      callback?: BodyResponseCallback<Schema$InAppProduct>
    ): void | GaxiosPromise<Schema$InAppProduct> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$InAppProduct>(parameters, callback);
      } else {
        return createAPIRequest<Schema$InAppProduct>(parameters);
      }
    }

    /**
     * androidpublisher.inappproducts.update
     * @desc Updates the details of an in-app product.
     * @alias androidpublisher.inappproducts.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.autoConvertMissingPrices If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
     * @param {string} params.packageName Unique identifier for the Android app with the in-app product; for example, "com.spiffygame".
     * @param {string} params.sku Unique identifier for the in-app product.
     * @param {().InAppProduct} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Inappproducts$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$InAppProduct>;
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
        | BodyResponseCallback<Schema$InAppProduct>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$InAppProduct>,
      callback?: BodyResponseCallback<Schema$InAppProduct>
    ): void | GaxiosPromise<Schema$InAppProduct> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$InAppProduct>(parameters, callback);
      } else {
        return createAPIRequest<Schema$InAppProduct>(parameters);
      }
    }
  }

  export interface Params$Resource$Inappproducts$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Unique identifier for the Android app with the in-app product; for example, "com.spiffygame".
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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     *
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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
     */
    autoConvertMissingPrices?: boolean;
    /**
     * Unique identifier for the Android app; for example, "com.spiffygame".
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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     *
     */
    maxResults?: number;
    /**
     * Unique identifier for the Android app with in-app products; for example, "com.spiffygame".
     */
    packageName?: string;
    /**
     *
     */
    startIndex?: number;
    /**
     *
     */
    token?: string;
  }
  export interface Params$Resource$Inappproducts$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
     */
    autoConvertMissingPrices?: boolean;
    /**
     * Unique identifier for the Android app with the in-app product; for example, "com.spiffygame".
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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
     */
    autoConvertMissingPrices?: boolean;
    /**
     * Unique identifier for the Android app with the in-app product; for example, "com.spiffygame".
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
     * androidpublisher.internalappsharingartifacts.uploadapk
     * @desc Uploads an APK to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See: https://developers.google.com/api-client-library/java/google-api-java-client/errors for an example in java.
     * @alias androidpublisher.internalappsharingartifacts.uploadapk
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.packageName Unique identifier for the Android app; for example, "com.spiffygame".
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    uploadapk(
      params?: Params$Resource$Internalappsharingartifacts$Uploadapk,
      options?: MethodOptions
    ): GaxiosPromise<Schema$InternalAppSharingArtifact>;
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
        | BodyResponseCallback<Schema$InternalAppSharingArtifact>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$InternalAppSharingArtifact>,
      callback?: BodyResponseCallback<Schema$InternalAppSharingArtifact>
    ): void | GaxiosPromise<Schema$InternalAppSharingArtifact> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
          callback
        );
      } else {
        return createAPIRequest<Schema$InternalAppSharingArtifact>(parameters);
      }
    }

    /**
     * androidpublisher.internalappsharingartifacts.uploadbundle
     * @desc Uploads an app bundle to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See: https://developers.google.com/api-client-library/java/google-api-java-client/errors for an example in java.
     * @alias androidpublisher.internalappsharingartifacts.uploadbundle
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.packageName Unique identifier for the Android app; for example, "com.spiffygame".
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    uploadbundle(
      params?: Params$Resource$Internalappsharingartifacts$Uploadbundle,
      options?: MethodOptions
    ): GaxiosPromise<Schema$InternalAppSharingArtifact>;
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
        | BodyResponseCallback<Schema$InternalAppSharingArtifact>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$InternalAppSharingArtifact>,
      callback?: BodyResponseCallback<Schema$InternalAppSharingArtifact>
    ): void | GaxiosPromise<Schema$InternalAppSharingArtifact> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
          callback
        );
      } else {
        return createAPIRequest<Schema$InternalAppSharingArtifact>(parameters);
      }
    }
  }

  export interface Params$Resource$Internalappsharingartifacts$Uploadapk
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Unique identifier for the Android app; for example, "com.spiffygame".
     */
    packageName?: string;

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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Unique identifier for the Android app; for example, "com.spiffygame".
     */
    packageName?: string;

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

  export class Resource$Orders {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * androidpublisher.orders.refund
     * @desc Refund a user's subscription or in-app purchase order.
     * @alias androidpublisher.orders.refund
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.orderId The order ID provided to the user when the subscription or in-app order was purchased.
     * @param {string} params.packageName The package name of the application for which this subscription or in-app item was purchased (for example, 'com.some.thing').
     * @param {boolean=} params.revoke Whether to revoke the purchased item. If set to true, access to the subscription or in-app item will be terminated immediately. If the item is a recurring subscription, all future payments will also be terminated. Consumed in-app items need to be handled by developer's app. (optional)
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    refund(
      params?: Params$Resource$Orders$Refund,
      options?: MethodOptions
    ): GaxiosPromise<void>;
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
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Orders$Refund extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The order ID provided to the user when the subscription or in-app order was purchased.
     */
    orderId?: string;
    /**
     * The package name of the application for which this subscription or in-app item was purchased (for example, 'com.some.thing').
     */
    packageName?: string;
    /**
     * Whether to revoke the purchased item. If set to true, access to the subscription or in-app item will be terminated immediately. If the item is a recurring subscription, all future payments will also be terminated. Consumed in-app items need to be handled by developer's app. (optional)
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
     * androidpublisher.purchases.products.acknowledge
     * @desc Acknowledges a purchase of an inapp item.
     * @alias androidpublisher.purchases.products.acknowledge
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.packageName The package name of the application the inapp product was sold in (for example, 'com.some.thing').
     * @param {string} params.productId The inapp product SKU (for example, 'com.some.thing.inapp1').
     * @param {string} params.token The token provided to the user's device when the subscription was purchased.
     * @param {().ProductPurchasesAcknowledgeRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    acknowledge(
      params?: Params$Resource$Purchases$Products$Acknowledge,
      options?: MethodOptions
    ): GaxiosPromise<void>;
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
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * androidpublisher.purchases.products.get
     * @desc Checks the purchase and consumption status of an inapp item.
     * @alias androidpublisher.purchases.products.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.packageName The package name of the application the inapp product was sold in (for example, 'com.some.thing').
     * @param {string} params.productId The inapp product SKU (for example, 'com.some.thing.inapp1').
     * @param {string} params.token The token provided to the user's device when the inapp product was purchased.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Purchases$Products$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ProductPurchase>;
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
        | BodyResponseCallback<Schema$ProductPurchase>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ProductPurchase>,
      callback?: BodyResponseCallback<Schema$ProductPurchase>
    ): void | GaxiosPromise<Schema$ProductPurchase> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$ProductPurchase>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ProductPurchase>(parameters);
      }
    }
  }

  export interface Params$Resource$Purchases$Products$Acknowledge
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The package name of the application the inapp product was sold in (for example, 'com.some.thing').
     */
    packageName?: string;
    /**
     * The inapp product SKU (for example, 'com.some.thing.inapp1').
     */
    productId?: string;
    /**
     * The token provided to the user's device when the subscription was purchased.
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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * androidpublisher.purchases.subscriptions.acknowledge
     * @desc Acknowledges a subscription purchase.
     * @alias androidpublisher.purchases.subscriptions.acknowledge
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.packageName The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
     * @param {string} params.subscriptionId The purchased subscription ID (for example, 'monthly001').
     * @param {string} params.token The token provided to the user's device when the subscription was purchased.
     * @param {().SubscriptionPurchasesAcknowledgeRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    acknowledge(
      params?: Params$Resource$Purchases$Subscriptions$Acknowledge,
      options?: MethodOptions
    ): GaxiosPromise<void>;
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
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * androidpublisher.purchases.subscriptions.cancel
     * @desc Cancels a user's subscription purchase. The subscription remains valid until its expiration time.
     * @alias androidpublisher.purchases.subscriptions.cancel
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.packageName The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
     * @param {string} params.subscriptionId The purchased subscription ID (for example, 'monthly001').
     * @param {string} params.token The token provided to the user's device when the subscription was purchased.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancel(
      params?: Params$Resource$Purchases$Subscriptions$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<void>;
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
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * androidpublisher.purchases.subscriptions.defer
     * @desc Defers a user's subscription purchase until a specified future expiration time.
     * @alias androidpublisher.purchases.subscriptions.defer
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.packageName The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
     * @param {string} params.subscriptionId The purchased subscription ID (for example, 'monthly001').
     * @param {string} params.token The token provided to the user's device when the subscription was purchased.
     * @param {().SubscriptionPurchasesDeferRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    defer(
      params?: Params$Resource$Purchases$Subscriptions$Defer,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SubscriptionPurchasesDeferResponse>;
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
        | BodyResponseCallback<Schema$SubscriptionPurchasesDeferResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SubscriptionPurchasesDeferResponse>,
      callback?: BodyResponseCallback<Schema$SubscriptionPurchasesDeferResponse>
    ): void | GaxiosPromise<Schema$SubscriptionPurchasesDeferResponse> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
          callback
        );
      } else {
        return createAPIRequest<Schema$SubscriptionPurchasesDeferResponse>(
          parameters
        );
      }
    }

    /**
     * androidpublisher.purchases.subscriptions.get
     * @desc Checks whether a user's subscription purchase is valid and returns its expiry time.
     * @alias androidpublisher.purchases.subscriptions.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.packageName The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
     * @param {string} params.subscriptionId The purchased subscription ID (for example, 'monthly001').
     * @param {string} params.token The token provided to the user's device when the subscription was purchased.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Purchases$Subscriptions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SubscriptionPurchase>;
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
        | BodyResponseCallback<Schema$SubscriptionPurchase>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SubscriptionPurchase>,
      callback?: BodyResponseCallback<Schema$SubscriptionPurchase>
    ): void | GaxiosPromise<Schema$SubscriptionPurchase> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$SubscriptionPurchase>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SubscriptionPurchase>(parameters);
      }
    }

    /**
     * androidpublisher.purchases.subscriptions.refund
     * @desc Refunds a user's subscription purchase, but the subscription remains valid until its expiration time and it will continue to recur.
     * @alias androidpublisher.purchases.subscriptions.refund
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.packageName The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
     * @param {string} params.subscriptionId The purchased subscription ID (for example, 'monthly001').
     * @param {string} params.token The token provided to the user's device when the subscription was purchased.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    refund(
      params?: Params$Resource$Purchases$Subscriptions$Refund,
      options?: MethodOptions
    ): GaxiosPromise<void>;
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
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * androidpublisher.purchases.subscriptions.revoke
     * @desc Refunds and immediately revokes a user's subscription purchase. Access to the subscription will be terminated immediately and it will stop recurring.
     * @alias androidpublisher.purchases.subscriptions.revoke
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.packageName The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
     * @param {string} params.subscriptionId The purchased subscription ID (for example, 'monthly001').
     * @param {string} params.token The token provided to the user's device when the subscription was purchased.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    revoke(
      params?: Params$Resource$Purchases$Subscriptions$Revoke,
      options?: MethodOptions
    ): GaxiosPromise<void>;
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
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Purchases$Subscriptions$Acknowledge
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
  export interface Params$Resource$Purchases$Subscriptions$Revoke
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * androidpublisher.purchases.voidedpurchases.list
     * @desc Lists the purchases that were canceled, refunded or charged-back.
     * @alias androidpublisher.purchases.voidedpurchases.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.endTime The time, in milliseconds since the Epoch, of the newest voided purchase that you want to see in the response. The value of this parameter cannot be greater than the current time and is ignored if a pagination token is set. Default value is current time. Note: This filter is applied on the time at which the record is seen as voided by our systems and not the actual voided time returned in the response.
     * @param {integer=} params.maxResults
     * @param {string} params.packageName The package name of the application for which voided purchases need to be returned (for example, 'com.some.thing').
     * @param {integer=} params.startIndex
     * @param {string=} params.startTime The time, in milliseconds since the Epoch, of the oldest voided purchase that you want to see in the response. The value of this parameter cannot be older than 30 days and is ignored if a pagination token is set. Default value is current time minus 30 days. Note: This filter is applied on the time at which the record is seen as voided by our systems and not the actual voided time returned in the response.
     * @param {string=} params.token
     * @param {integer=} params.type The type of voided purchases that you want to see in the response. Possible values are:   - 0: Only voided in-app product purchases will be returned in the response. This is the default value. - 1: Both voided in-app purchases and voided subscription purchases will be returned in the response.  Note: Before requesting to receive voided subscription purchases, you must switch to use orderId in the response which uniquely identifies one-time purchases and subscriptions. Otherwise, you will receive multiple subscription orders with the same PurchaseToken, because subscription renewal orders share the same PurchaseToken.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Purchases$Voidedpurchases$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$VoidedPurchasesListResponse>;
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
        | BodyResponseCallback<Schema$VoidedPurchasesListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$VoidedPurchasesListResponse>,
      callback?: BodyResponseCallback<Schema$VoidedPurchasesListResponse>
    ): void | GaxiosPromise<Schema$VoidedPurchasesListResponse> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
          callback
        );
      } else {
        return createAPIRequest<Schema$VoidedPurchasesListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Purchases$Voidedpurchases$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The time, in milliseconds since the Epoch, of the newest voided purchase that you want to see in the response. The value of this parameter cannot be greater than the current time and is ignored if a pagination token is set. Default value is current time. Note: This filter is applied on the time at which the record is seen as voided by our systems and not the actual voided time returned in the response.
     */
    endTime?: string;
    /**
     *
     */
    maxResults?: number;
    /**
     * The package name of the application for which voided purchases need to be returned (for example, 'com.some.thing').
     */
    packageName?: string;
    /**
     *
     */
    startIndex?: number;
    /**
     * The time, in milliseconds since the Epoch, of the oldest voided purchase that you want to see in the response. The value of this parameter cannot be older than 30 days and is ignored if a pagination token is set. Default value is current time minus 30 days. Note: This filter is applied on the time at which the record is seen as voided by our systems and not the actual voided time returned in the response.
     */
    startTime?: string;
    /**
     *
     */
    token?: string;
    /**
     * The type of voided purchases that you want to see in the response. Possible values are:   - 0: Only voided in-app product purchases will be returned in the response. This is the default value. - 1: Both voided in-app purchases and voided subscription purchases will be returned in the response.  Note: Before requesting to receive voided subscription purchases, you must switch to use orderId in the response which uniquely identifies one-time purchases and subscriptions. Otherwise, you will receive multiple subscription orders with the same PurchaseToken, because subscription renewal orders share the same PurchaseToken.
     */
    type?: number;
  }

  export class Resource$Reviews {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * androidpublisher.reviews.get
     * @desc Returns a single review.
     * @alias androidpublisher.reviews.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.packageName Unique identifier for the Android app for which we want reviews; for example, "com.spiffygame".
     * @param {string} params.reviewId
     * @param {string=} params.translationLanguage
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Reviews$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Review>;
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
        | BodyResponseCallback<Schema$Review>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Review>,
      callback?: BodyResponseCallback<Schema$Review>
    ): void | GaxiosPromise<Schema$Review> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$Review>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Review>(parameters);
      }
    }

    /**
     * androidpublisher.reviews.list
     * @desc Returns a list of reviews. Only reviews from last week will be returned.
     * @alias androidpublisher.reviews.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.maxResults
     * @param {string} params.packageName Unique identifier for the Android app for which we want reviews; for example, "com.spiffygame".
     * @param {integer=} params.startIndex
     * @param {string=} params.token
     * @param {string=} params.translationLanguage
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Reviews$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ReviewsListResponse>;
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
        | BodyResponseCallback<Schema$ReviewsListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ReviewsListResponse>,
      callback?: BodyResponseCallback<Schema$ReviewsListResponse>
    ): void | GaxiosPromise<Schema$ReviewsListResponse> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$ReviewsListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ReviewsListResponse>(parameters);
      }
    }

    /**
     * androidpublisher.reviews.reply
     * @desc Reply to a single review, or update an existing reply.
     * @alias androidpublisher.reviews.reply
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.packageName Unique identifier for the Android app for which we want reviews; for example, "com.spiffygame".
     * @param {string} params.reviewId
     * @param {().ReviewsReplyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    reply(
      params?: Params$Resource$Reviews$Reply,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ReviewsReplyResponse>;
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
        | BodyResponseCallback<Schema$ReviewsReplyResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ReviewsReplyResponse>,
      callback?: BodyResponseCallback<Schema$ReviewsReplyResponse>
    ): void | GaxiosPromise<Schema$ReviewsReplyResponse> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$ReviewsReplyResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ReviewsReplyResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Reviews$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Unique identifier for the Android app for which we want reviews; for example, "com.spiffygame".
     */
    packageName?: string;
    /**
     *
     */
    reviewId?: string;
    /**
     *
     */
    translationLanguage?: string;
  }
  export interface Params$Resource$Reviews$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     *
     */
    maxResults?: number;
    /**
     * Unique identifier for the Android app for which we want reviews; for example, "com.spiffygame".
     */
    packageName?: string;
    /**
     *
     */
    startIndex?: number;
    /**
     *
     */
    token?: string;
    /**
     *
     */
    translationLanguage?: string;
  }
  export interface Params$Resource$Reviews$Reply extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Unique identifier for the Android app for which we want reviews; for example, "com.spiffygame".
     */
    packageName?: string;
    /**
     *
     */
    reviewId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ReviewsReplyRequest;
  }
}
