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
import {Compute, JWT, OAuth2Client, UserRefreshClient} from 'google-auth-library';

import {BodyResponseCallback, createAPIRequest, GlobalOptions, GoogleConfigurable, MethodOptions} from '../../shared/src';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace androidpublisher_v2 {
  export interface Options extends GlobalOptions {
    version: 'v2';
  }

  /**
   * Google Play Developer API
   *
   * Lets Android application developers access their Google Play accounts.
   *
   * @example
   * const {google} = require('googleapis');
   * const androidpublisher = google.androidpublisher('v2');
   *
   * @namespace androidpublisher
   * @type {Function}
   * @version v2
   * @variation v2
   * @param {object=} options Options for Androidpublisher
   */
  export class Androidpublisher {
    _options: GlobalOptions;
    google?: GoogleConfigurable;
    root = this;

    edits: Resource$Edits;
    inappproducts: Resource$Inappproducts;
    purchases: Resource$Purchases;
    reviews: Resource$Reviews;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.edits = new Resource$Edits(this);
      this.inappproducts = new Resource$Inappproducts(this);
      this.purchases = new Resource$Purchases(this);
      this.reviews = new Resource$Reviews(this);
    }

    getRoot() {
      return this.root;
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
    versionCode?: number;
  }
  /**
   * Represents the binary payload of an APK.
   */
  export interface Schema$ApkBinary {
    /**
     * A sha1 hash of the APK payload, encoded as a hex string and matching the
     * output of the sha1sum command.
     */
    sha1?: string;
    /**
     * A sha256 hash of the APK payload, encoded as a hex string and matching
     * the output of the sha256sum command.
     */
    sha256?: string;
  }
  export interface Schema$ApkListing {
    /**
     * The language code, in BCP 47 format (eg &quot;en-US&quot;).
     */
    language?: string;
    /**
     * Describe what&#39;s new in your APK.
     */
    recentChanges?: string;
  }
  export interface Schema$ApkListingsListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string
     * &quot;androidpublisher#apkListingsListResponse&quot;.
     */
    kind?: string;
    listings?: Schema$ApkListing[];
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
     * Identifies what kind of resource this is. Value: the fixed string
     * &quot;androidpublisher#apksListResponse&quot;.
     */
    kind?: string;
  }
  export interface Schema$AppDetails {
    /**
     * The user-visible support email for this app.
     */
    contactEmail?: string;
    /**
     * The user-visible support telephone number for this app.
     */
    contactPhone?: string;
    /**
     * The user-visible website for this app.
     */
    contactWebsite?: string;
    /**
     * Default language code, in BCP 47 format (eg &quot;en-US&quot;).
     */
    defaultLanguage?: string;
  }
  /**
   * Represents an edit of an app. An edit allows clients to make multiple
   * changes before committing them in one operation.
   */
  export interface Schema$AppEdit {
    /**
     * The time at which the edit will expire and will be no longer valid for
     * use in any subsequent API calls (encoded as seconds since the Epoch).
     */
    expiryTimeSeconds?: string;
    /**
     * The ID of the edit that can be used in subsequent API calls.
     */
    id?: string;
  }
  export interface Schema$Bundle {
    /**
     * A sha1 hash of the upload payload, encoded as a hex string and matching
     * the output of the sha1sum command.
     */
    sha1?: string;
    /**
     * A sha256 hash of the upload payload, encoded as a hex string and matching
     * the output of the sha256sum command.
     */
    sha256?: string;
    /**
     * The version code of the Android App Bundle. As specified in the Android
     * App Bundle&#39;s base module APK manifest file.
     */
    versionCode?: number;
  }
  export interface Schema$BundlesListResponse {
    bundles?: Schema$Bundle[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string
     * &quot;androidpublisher#bundlesListResponse&quot;.
     */
    kind?: string;
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
  /**
   * Represents a deobfuscation file.
   */
  export interface Schema$DeobfuscationFile {
    /**
     * The type of the deobfuscation file.
     */
    symbolType?: string;
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
    text?: string;
  }
  export interface Schema$DeviceMetadata {
    /**
     * Device CPU make e.g. &quot;Qualcomm&quot;
     */
    cpuMake?: string;
    /**
     * Device CPU model e.g. &quot;MSM8974&quot;
     */
    cpuModel?: string;
    /**
     * Device class (e.g. tablet)
     */
    deviceClass?: string;
    /**
     * OpenGL version
     */
    glEsVersion?: number;
    /**
     * Device manufacturer (e.g. Motorola)
     */
    manufacturer?: string;
    /**
     * Comma separated list of native platforms (e.g. &quot;arm&quot;,
     * &quot;arm7&quot;)
     */
    nativePlatform?: string;
    /**
     * Device model name (e.g. Droid)
     */
    productName?: string;
    /**
     * Device RAM in Megabytes e.g. &quot;2048&quot;
     */
    ramMb?: number;
    /**
     * Screen density in DPI
     */
    screenDensityDpi?: number;
    /**
     * Screen height in pixels
     */
    screenHeightPx?: number;
    /**
     * Screen width in pixels
     */
    screenWidthPx?: number;
  }
  export interface Schema$ExpansionFile {
    /**
     * If set this field indicates that this APK has an Expansion File uploaded
     * to it: this APK does not reference another APK&#39;s Expansion File. The
     * field&#39;s value is the size of the uploaded Expansion File in bytes.
     */
    fileSize?: string;
    /**
     * If set this APK&#39;s Expansion File references another APK&#39;s
     * Expansion File. The file_size field will not be set.
     */
    referencesVersion?: number;
  }
  export interface Schema$ExpansionFilesUploadResponse {
    expansionFile?: Schema$ExpansionFile;
  }
  /**
   * Defines an APK available for this application that is hosted externally and
   * not uploaded to Google Play. This function is only available to enterprises
   * who are using Google Play for Work, and whos application is restricted to
   * the enterprise private channel
   */
  export interface Schema$ExternallyHostedApk {
    /**
     * The application label.
     */
    applicationLabel?: string;
    /**
     * A certificate (or array of certificates if a certificate-chain is used)
     * used to signed this APK, represented as a base64 encoded byte array.
     */
    certificateBase64s?: string[];
    /**
     * The URL at which the APK is hosted. This must be an https URL.
     */
    externallyHostedUrl?: string;
    /**
     * The SHA1 checksum of this APK, represented as a base64 encoded byte
     * array.
     */
    fileSha1Base64?: string;
    /**
     * The SHA256 checksum of this APK, represented as a base64 encoded byte
     * array.
     */
    fileSha256Base64?: string;
    /**
     * The file size in bytes of this APK.
     */
    fileSize?: string;
    /**
     * The icon image from the APK, as a base64 encoded byte array.
     */
    iconBase64?: string;
    /**
     * The maximum SDK supported by this APK (optional).
     */
    maximumSdk?: number;
    /**
     * The minimum SDK targeted by this APK.
     */
    minimumSdk?: number;
    /**
     * The native code environments supported by this APK (optional).
     */
    nativeCodes?: string[];
    /**
     * The package name.
     */
    packageName?: string;
    /**
     * The features required by this APK (optional).
     */
    usesFeatures?: string[];
    /**
     * The permissions requested by this APK.
     */
    usesPermissions?: Schema$ExternallyHostedApkUsesPermission[];
    /**
     * The version code of this APK.
     */
    versionCode?: number;
    /**
     * The version name of this APK.
     */
    versionName?: string;
  }
  /**
   * A permission used by this APK.
   */
  export interface Schema$ExternallyHostedApkUsesPermission {
    /**
     * Optionally, the maximum SDK version for which the permission is required.
     */
    maxSdkVersion?: number;
    /**
     * The name of the permission requested.
     */
    name?: string;
  }
  export interface Schema$Image {
    /**
     * A unique id representing this image.
     */
    id?: string;
    /**
     * A sha1 hash of the image that was uploaded.
     */
    sha1?: string;
    /**
     * A URL that will serve a preview of the image.
     */
    url?: string;
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
     * The default language of the localized data, as defined by BCP 47. e.g.
     * &quot;en-US&quot;, &quot;en-GB&quot;.
     */
    defaultLanguage?: string;
    /**
     * Default price cannot be zero. In-app products can never be free. Default
     * price is always in the developer&#39;s Checkout merchant currency.
     */
    defaultPrice?: Schema$Price;
    /**
     * List of localized title and description data.
     */
    listings?: any;
    /**
     * The package name of the parent app.
     */
    packageName?: string;
    /**
     * Prices per buyer region. None of these prices should be zero. In-app
     * products can never be free.
     */
    prices?: any;
    /**
     * Purchase type enum value. Unmodifiable after creation.
     */
    purchaseType?: string;
    /**
     * Definition of a season for a seasonal subscription. Can be defined only
     * for yearly subscriptions.
     */
    season?: Schema$Season;
    /**
     * The stock-keeping-unit (SKU) of the product, unique within an app.
     */
    sku?: string;
    status?: string;
    /**
     * Subscription period, specified in ISO 8601 format. Acceptable values are
     * &quot;P1W&quot; (one week), &quot;P1M&quot; (one month), &quot;P3M&quot;
     * (three months), &quot;P6M&quot; (six months), and &quot;P1Y&quot; (one
     * year).
     */
    subscriptionPeriod?: string;
    /**
     * Trial period, specified in ISO 8601 format. Acceptable values are
     * anything between &quot;P7D&quot; (seven days) and &quot;P999D&quot; (999
     * days). Seasonal subscriptions cannot have a trial period.
     */
    trialPeriod?: string;
  }
  export interface Schema$InAppProductListing {
    description?: string;
    title?: string;
  }
  export interface Schema$InappproductsListResponse {
    inappproduct?: Schema$InAppProduct[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string
     * &quot;androidpublisher#inappproductsListResponse&quot;.
     */
    kind?: string;
    pageInfo?: Schema$PageInfo;
    tokenPagination?: Schema$TokenPagination;
  }
  export interface Schema$Listing {
    /**
     * Full description of the app; this may be up to 4000 characters in length.
     */
    fullDescription?: string;
    /**
     * Language localization code (for example, &quot;de-AT&quot; for Austrian
     * German).
     */
    language?: string;
    /**
     * Short description of the app (previously known as promo text); this may
     * be up to 80 characters in length.
     */
    shortDescription?: string;
    /**
     * App&#39;s localized title.
     */
    title?: string;
    /**
     * URL of a promotional YouTube video for the app.
     */
    video?: string;
  }
  export interface Schema$ListingsListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string
     * &quot;androidpublisher#listingsListResponse&quot;.
     */
    kind?: string;
    listings?: Schema$Listing[];
  }
  export interface Schema$MonthDay {
    /**
     * Day of a month, value in [1, 31] range. Valid range depends on the
     * specified month.
     */
    day?: number;
    /**
     * Month of a year. e.g. 1 = JAN, 2 = FEB etc.
     */
    month?: number;
  }
  export interface Schema$PageInfo {
    resultPerPage?: number;
    startIndex?: number;
    totalResults?: number;
  }
  export interface Schema$Price {
    /**
     * 3 letter Currency code, as defined by ISO 4217.
     */
    currency?: string;
    /**
     * The price in millionths of the currency base unit represented as a
     * string.
     */
    priceMicros?: string;
  }
  /**
   * A ProductPurchase resource indicates the status of a user&#39;s inapp
   * product purchase.
   */
  export interface Schema$ProductPurchase {
    /**
     * The consumption state of the inapp product. Possible values are:   - Yet
     * to be consumed  - Consumed
     */
    consumptionState?: number;
    /**
     * A developer-specified string that contains supplemental information about
     * an order.
     */
    developerPayload?: string;
    /**
     * This kind represents an inappPurchase object in the androidpublisher
     * service.
     */
    kind?: string;
    /**
     * The order id associated with the purchase of the inapp product.
     */
    orderId?: string;
    /**
     * The purchase state of the order. Possible values are:   - Purchased  -
     * Canceled
     */
    purchaseState?: number;
    /**
     * The time the product was purchased, in milliseconds since the epoch (Jan
     * 1, 1970).
     */
    purchaseTimeMillis?: string;
    /**
     * The type of purchase of the inapp product. This field is only set if this
     * purchase was not made using the standard in-app billing flow. Possible
     * values are:   - Test (i.e. purchased from a license testing account)  -
     * Promo (i.e. purchased using a promo code)
     */
    purchaseType?: number;
  }
  export interface Schema$Prorate {
    /**
     * Default price cannot be zero and must be less than the full subscription
     * price. Default price is always in the developer&#39;s Checkout merchant
     * currency. Targeted countries have their prices set automatically based on
     * the default_price.
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
    authorName?: string;
    /**
     * A repeated field containing comments for the review.
     */
    comments?: Schema$Comment[];
    /**
     * Unique identifier for this review.
     */
    reviewId?: string;
  }
  export interface Schema$ReviewReplyResult {
    /**
     * The time at which the reply took effect.
     */
    lastEdited?: Schema$Timestamp;
    /**
     * The reply text that was applied.
     */
    replyText?: string;
  }
  export interface Schema$ReviewsListResponse {
    pageInfo?: Schema$PageInfo;
    reviews?: Schema$Review[];
    tokenPagination?: Schema$TokenPagination;
  }
  export interface Schema$ReviewsReplyRequest {
    /**
     * The text to set as the reply. Replies of more than approximately 350
     * characters will be rejected. HTML tags will be stripped.
     */
    replyText?: string;
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
     * Optionally present list of prorations for the season. Each proration is a
     * one-off discounted entry into a subscription. Each proration contains the
     * first date on which the discount is available and the new pricing
     * information.
     */
    prorations?: Schema$Prorate[];
    /**
     * Inclusive start date of the recurrence period.
     */
    start?: Schema$MonthDay;
  }
  /**
   * Information provided by the user when they complete the subscription
   * cancellation flow (cancellation reason survey).
   */
  export interface Schema$SubscriptionCancelSurveyResult {
    /**
     * The cancellation reason the user chose in the survey. Possible values
     * are:   - Other  - I don&#39;t use this service enough  - Technical issues
     * - Cost-related reasons  - I found a better app
     */
    cancelSurveyReason?: number;
    /**
     * The customized input cancel reason from the user. Only present when
     * cancelReason is 0.
     */
    userInputCancelReason?: string;
  }
  /**
   * A SubscriptionDeferralInfo contains the data needed to defer a subscription
   * purchase to a future expiry time.
   */
  export interface Schema$SubscriptionDeferralInfo {
    /**
     * The desired next expiry time to assign to the subscription, in
     * milliseconds since the Epoch. The given time must be later/greater than
     * the current expiry time for the subscription.
     */
    desiredExpiryTimeMillis?: string;
    /**
     * The expected expiry time for the subscription. If the current expiry time
     * for the subscription is not the value specified here, the deferral will
     * not occur.
     */
    expectedExpiryTimeMillis?: string;
  }
  /**
   * A SubscriptionPurchase resource indicates the status of a user&#39;s
   * subscription purchase.
   */
  export interface Schema$SubscriptionPurchase {
    /**
     * Whether the subscription will automatically be renewed when it reaches
     * its current expiry time.
     */
    autoRenewing?: boolean;
    /**
     * The reason why a subscription was canceled or is not auto-renewing.
     * Possible values are:   - User canceled the subscription  - Subscription
     * was canceled by the system, for example because of a billing problem  -
     * Subscription was replaced with a new subscription  - Subscription was
     * canceled by the developer
     */
    cancelReason?: number;
    /**
     * Information provided by the user when they complete the subscription
     * cancellation flow (cancellation reason survey).
     */
    cancelSurveyResult?: Schema$SubscriptionCancelSurveyResult;
    /**
     * ISO 3166-1 alpha-2 billing country/region code of the user at the time
     * the subscription was granted.
     */
    countryCode?: string;
    /**
     * A developer-specified string that contains supplemental information about
     * an order.
     */
    developerPayload?: string;
    /**
     * The email address of the user when the subscription was purchased. Only
     * present for purchases made with &#39;Subscribe with Google&#39;.
     */
    emailAddress?: string;
    /**
     * Time at which the subscription will expire, in milliseconds since the
     * Epoch.
     */
    expiryTimeMillis?: string;
    /**
     * The family name of the user when the subscription was purchased. Only
     * present for purchases made with &#39;Subscribe with Google&#39;.
     */
    familyName?: string;
    /**
     * The given name of the user when the subscription was purchased. Only
     * present for purchases made with &#39;Subscribe with Google&#39;.
     */
    givenName?: string;
    /**
     * This kind represents a subscriptionPurchase object in the
     * androidpublisher service.
     */
    kind?: string;
    /**
     * The purchase token of the originating purchase if this subscription is
     * one of the following:   - Re-signup of a canceled but non-lapsed
     * subscription  - Upgrade/downgrade from a previous subscription  For
     * example, suppose a user originally signs up and you receive purchase
     * token X, then the user cancels and goes through the resignup flow (before
     * their subscription lapses) and you receive purchase token Y, and finally
     * the user upgrades their subscription and you receive purchase token Z. If
     * you call this API with purchase token Z, this field will be set to Y. If
     * you call this API with purchase token Y, this field will be set to X. If
     * you call this API with purchase token X, this field will not be set.
     */
    linkedPurchaseToken?: string;
    /**
     * The order id of the latest recurring order associated with the purchase
     * of the subscription.
     */
    orderId?: string;
    /**
     * The payment state of the subscription. Possible values are:   - Payment
     * pending  - Payment received  - Free trial
     */
    paymentState?: number;
    /**
     * Price of the subscription, not including tax. Price is expressed in
     * micro-units, where 1,000,000 micro-units represents one unit of the
     * currency. For example, if the subscription price is €1.99,
     * price_amount_micros is 1990000.
     */
    priceAmountMicros?: string;
    /**
     * ISO 4217 currency code for the subscription price. For example, if the
     * price is specified in British pounds sterling, price_currency_code is
     * &quot;GBP&quot;.
     */
    priceCurrencyCode?: string;
    /**
     * The profile id of the user when the subscription was purchased. Only
     * present for purchases made with &#39;Subscribe with Google&#39;.
     */
    profileId?: string;
    /**
     * The profile name of the user when the subscription was purchased. Only
     * present for purchases made with &#39;Subscribe with Google&#39;.
     */
    profileName?: string;
    /**
     * The type of purchase of the subscription. This field is only set if this
     * purchase was not made using the standard in-app billing flow. Possible
     * values are:   - Test (i.e. purchased from a license testing account)
     */
    purchaseType?: number;
    /**
     * Time at which the subscription was granted, in milliseconds since the
     * Epoch.
     */
    startTimeMillis?: string;
    /**
     * The time at which the subscription was canceled by the user, in
     * milliseconds since the epoch. Only present if cancelReason is 0.
     */
    userCancellationTimeMillis?: string;
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
    newExpiryTimeMillis?: string;
  }
  export interface Schema$Testers {
    googleGroups?: string[];
    googlePlusCommunities?: string[];
  }
  export interface Schema$Timestamp {
    nanos?: number;
    seconds?: string;
  }
  export interface Schema$TokenPagination {
    nextPageToken?: string;
    previousPageToken?: string;
  }
  export interface Schema$Track {
    /**
     * Identifier for this track. One of &quot;alpha&quot;, &quot;beta&quot;,
     * &quot;production&quot;, &quot;rollout&quot; or &quot;internal&quot;.
     */
    track?: string;
    userFraction?: number;
    /**
     * Version codes to make active on this track. Note that this list should
     * contain all versions you wish to be active, including those you wish to
     * retain from previous releases.
     */
    versionCodes?: number[];
  }
  export interface Schema$TracksListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string
     * &quot;androidpublisher#tracksListResponse&quot;.
     */
    kind?: string;
    tracks?: Schema$Track[];
  }
  export interface Schema$UserComment {
    /**
     * Integer Android SDK version of the user&#39;s device at the time the
     * review was written, e.g. 23 is Marshmallow. May be absent.
     */
    androidOsVersion?: number;
    /**
     * Integer version code of the app as installed at the time the review was
     * written. May be absent.
     */
    appVersionCode?: number;
    /**
     * String version name of the app as installed at the time the review was
     * written. May be absent.
     */
    appVersionName?: string;
    /**
     * Codename for the reviewer&#39;s device, e.g. klte, flounder. May be
     * absent.
     */
    device?: string;
    /**
     * Some information about the characteristics of the user&#39;s device
     */
    deviceMetadata?: Schema$DeviceMetadata;
    /**
     * The last time at which this comment was updated.
     */
    lastModified?: Schema$Timestamp;
    /**
     * Untranslated text of the review, in the case where the review has been
     * translated. If the review has not been translated this is left blank.
     */
    originalText?: string;
    /**
     * Language code for the reviewer. This is taken from the device settings so
     * is not guaranteed to match the language the review is written in. May be
     * absent.
     */
    reviewerLanguage?: string;
    /**
     * The star rating associated with the review, from 1 to 5.
     */
    starRating?: number;
    /**
     * The content of the comment, i.e. review body. In some cases users have
     * been able to write a review with separate title and body; in those cases
     * the title and body are concatenated and separated by a tab character.
     */
    text?: string;
    /**
     * Number of users who have given this review a thumbs down
     */
    thumbsDownCount?: number;
    /**
     * Number of users who have given this review a thumbs up
     */
    thumbsUpCount?: number;
  }
  /**
   * A VoidedPurchase resource indicates a purchase that was either
   * canceled/refunded/charged-back.
   */
  export interface Schema$VoidedPurchase {
    /**
     * This kind represents a voided purchase object in the androidpublisher
     * service.
     */
    kind?: string;
    /**
     * The time at which the purchase was made, in milliseconds since the epoch
     * (Jan 1, 1970).
     */
    purchaseTimeMillis?: string;
    /**
     * The token that was generated when a purchase was made. This uniquely
     * identifies a purchase.
     */
    purchaseToken?: string;
    /**
     * The time at which the purchase was canceled/refunded/charged-back, in
     * milliseconds since the epoch (Jan 1, 1970).
     */
    voidedTimeMillis?: string;
  }
  export interface Schema$VoidedPurchasesListResponse {
    pageInfo?: Schema$PageInfo;
    tokenPagination?: Schema$TokenPagination;
    voidedPurchases?: Schema$VoidedPurchase[];
  }


  export class Resource$Edits {
    root: Androidpublisher;
    apklistings: Resource$Edits$Apklistings;
    apks: Resource$Edits$Apks;
    bundles: Resource$Edits$Bundles;
    deobfuscationfiles: Resource$Edits$Deobfuscationfiles;
    details: Resource$Edits$Details;
    expansionfiles: Resource$Edits$Expansionfiles;
    images: Resource$Edits$Images;
    listings: Resource$Edits$Listings;
    testers: Resource$Edits$Testers;
    tracks: Resource$Edits$Tracks;
    constructor(root: Androidpublisher) {
      this.root = root;
      this.getRoot.bind(this);
      this.apklistings = new Resource$Edits$Apklistings(root);
      this.apks = new Resource$Edits$Apks(root);
      this.bundles = new Resource$Edits$Bundles(root);
      this.deobfuscationfiles = new Resource$Edits$Deobfuscationfiles(root);
      this.details = new Resource$Edits$Details(root);
      this.expansionfiles = new Resource$Edits$Expansionfiles(root);
      this.images = new Resource$Edits$Images(root);
      this.listings = new Resource$Edits$Listings(root);
      this.testers = new Resource$Edits$Testers(root);
      this.tracks = new Resource$Edits$Tracks(root);
    }

    getRoot() {
      return this.root;
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
    commit(params?: Params$Resource$Edits$Commit, options?: MethodOptions):
        AxiosPromise<Schema$AppEdit>;
    commit(
        params: Params$Resource$Edits$Commit,
        options: MethodOptions|BodyResponseCallback<Schema$AppEdit>,
        callback: BodyResponseCallback<Schema$AppEdit>): void;
    commit(
        params: Params$Resource$Edits$Commit,
        callback: BodyResponseCallback<Schema$AppEdit>): void;
    commit(callback: BodyResponseCallback<Schema$AppEdit>): void;
    commit(
        paramsOrCallback?: Params$Resource$Edits$Commit|
        BodyResponseCallback<Schema$AppEdit>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$AppEdit>,
        callback?: BodyResponseCallback<Schema$AppEdit>):
        void|AxiosPromise<Schema$AppEdit> {
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/edits/{editId}:commit')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['packageName', 'editId'],
        pathParams: ['editId', 'packageName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$AppEdit>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AppEdit>(parameters);
      }
    }


    /**
     * androidpublisher.edits.delete
     * @desc Deletes an edit for an app. Creating a new edit will automatically
     * delete any of your previous edits so this method need only be called if
     * you want to preemptively abandon an edit.
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
    delete(params?: Params$Resource$Edits$Delete, options?: MethodOptions):
        AxiosPromise<void>;
    delete(
        params: Params$Resource$Edits$Delete,
        options: MethodOptions|BodyResponseCallback<void>,
        callback: BodyResponseCallback<void>): void;
    delete(
        params: Params$Resource$Edits$Delete,
        callback: BodyResponseCallback<void>): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
        paramsOrCallback?: Params$Resource$Edits$Delete|
        BodyResponseCallback<void>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/edits/{editId}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['packageName', 'editId'],
        pathParams: ['editId', 'packageName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }


    /**
     * androidpublisher.edits.get
     * @desc Returns information about the edit specified. Calls will fail if
     * the edit is no long active (e.g. has been deleted, superseded or
     * expired).
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
    get(params?: Params$Resource$Edits$Get,
        options?: MethodOptions): AxiosPromise<Schema$AppEdit>;
    get(params: Params$Resource$Edits$Get,
        options: MethodOptions|BodyResponseCallback<Schema$AppEdit>,
        callback: BodyResponseCallback<Schema$AppEdit>): void;
    get(params: Params$Resource$Edits$Get,
        callback: BodyResponseCallback<Schema$AppEdit>): void;
    get(callback: BodyResponseCallback<Schema$AppEdit>): void;
    get(paramsOrCallback?: Params$Resource$Edits$Get|
        BodyResponseCallback<Schema$AppEdit>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$AppEdit>,
        callback?: BodyResponseCallback<Schema$AppEdit>):
        void|AxiosPromise<Schema$AppEdit> {
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/edits/{editId}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['packageName', 'editId'],
        pathParams: ['editId', 'packageName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$AppEdit>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AppEdit>(parameters);
      }
    }


    /**
     * androidpublisher.edits.insert
     * @desc Creates a new edit for an app, populated with the app's current
     * state.
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
    insert(params?: Params$Resource$Edits$Insert, options?: MethodOptions):
        AxiosPromise<Schema$AppEdit>;
    insert(
        params: Params$Resource$Edits$Insert,
        options: MethodOptions|BodyResponseCallback<Schema$AppEdit>,
        callback: BodyResponseCallback<Schema$AppEdit>): void;
    insert(
        params: Params$Resource$Edits$Insert,
        callback: BodyResponseCallback<Schema$AppEdit>): void;
    insert(callback: BodyResponseCallback<Schema$AppEdit>): void;
    insert(
        paramsOrCallback?: Params$Resource$Edits$Insert|
        BodyResponseCallback<Schema$AppEdit>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$AppEdit>,
        callback?: BodyResponseCallback<Schema$AppEdit>):
        void|AxiosPromise<Schema$AppEdit> {
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
              url: (rootUrl +
                    '/androidpublisher/v2/applications/{packageName}/edits')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['packageName'],
        pathParams: ['packageName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$AppEdit>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AppEdit>(parameters);
      }
    }


    /**
     * androidpublisher.edits.validate
     * @desc Checks that the edit can be successfully committed. The edit's
     * changes are not applied to the live app.
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
    validate(params?: Params$Resource$Edits$Validate, options?: MethodOptions):
        AxiosPromise<Schema$AppEdit>;
    validate(
        params: Params$Resource$Edits$Validate,
        options: MethodOptions|BodyResponseCallback<Schema$AppEdit>,
        callback: BodyResponseCallback<Schema$AppEdit>): void;
    validate(
        params: Params$Resource$Edits$Validate,
        callback: BodyResponseCallback<Schema$AppEdit>): void;
    validate(callback: BodyResponseCallback<Schema$AppEdit>): void;
    validate(
        paramsOrCallback?: Params$Resource$Edits$Validate|
        BodyResponseCallback<Schema$AppEdit>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$AppEdit>,
        callback?: BodyResponseCallback<Schema$AppEdit>):
        void|AxiosPromise<Schema$AppEdit> {
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/edits/{editId}:validate')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['packageName', 'editId'],
        pathParams: ['editId', 'packageName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$AppEdit>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AppEdit>(parameters);
      }
    }
  }

  export interface Params$Resource$Edits$Commit {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example,
     * "com.spiffygame".
     */
    packageName?: string;
  }
  export interface Params$Resource$Edits$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example,
     * "com.spiffygame".
     */
    packageName?: string;
  }
  export interface Params$Resource$Edits$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example,
     * "com.spiffygame".
     */
    packageName?: string;
  }
  export interface Params$Resource$Edits$Insert {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Unique identifier for the Android app that is being updated; for example,
     * "com.spiffygame".
     */
    packageName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AppEdit;
  }
  export interface Params$Resource$Edits$Validate {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example,
     * "com.spiffygame".
     */
    packageName?: string;
  }

  export class Resource$Edits$Apklistings {
    root: Androidpublisher;
    constructor(root: Androidpublisher) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * androidpublisher.edits.apklistings.delete
     * @desc Deletes the APK-specific localized listing for a specified APK and
     * language code.
     * @alias androidpublisher.edits.apklistings.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer} params.apkVersionCode The APK version code whose APK-specific listings should be read or modified.
     * @param {string} params.editId Unique identifier for this edit.
     * @param {string} params.language The language code (a BCP-47 language tag) of the APK-specific localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
     * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Edits$Apklistings$Delete,
        options?: MethodOptions): AxiosPromise<void>;
    delete(
        params: Params$Resource$Edits$Apklistings$Delete,
        options: MethodOptions|BodyResponseCallback<void>,
        callback: BodyResponseCallback<void>): void;
    delete(
        params: Params$Resource$Edits$Apklistings$Delete,
        callback: BodyResponseCallback<void>): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
        paramsOrCallback?: Params$Resource$Edits$Apklistings$Delete|
        BodyResponseCallback<void>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Edits$Apklistings$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Edits$Apklistings$Delete;
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/listings/{language}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['packageName', 'editId', 'apkVersionCode', 'language'],
        pathParams: ['apkVersionCode', 'editId', 'language', 'packageName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }


    /**
     * androidpublisher.edits.apklistings.deleteall
     * @desc Deletes all the APK-specific localized listings for a specified
     * APK.
     * @alias androidpublisher.edits.apklistings.deleteall
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer} params.apkVersionCode The APK version code whose APK-specific listings should be read or modified.
     * @param {string} params.editId Unique identifier for this edit.
     * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    deleteall(
        params?: Params$Resource$Edits$Apklistings$Deleteall,
        options?: MethodOptions): AxiosPromise<void>;
    deleteall(
        params: Params$Resource$Edits$Apklistings$Deleteall,
        options: MethodOptions|BodyResponseCallback<void>,
        callback: BodyResponseCallback<void>): void;
    deleteall(
        params: Params$Resource$Edits$Apklistings$Deleteall,
        callback: BodyResponseCallback<void>): void;
    deleteall(callback: BodyResponseCallback<void>): void;
    deleteall(
        paramsOrCallback?: Params$Resource$Edits$Apklistings$Deleteall|
        BodyResponseCallback<void>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Edits$Apklistings$Deleteall;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Edits$Apklistings$Deleteall;
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/listings')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['packageName', 'editId', 'apkVersionCode'],
        pathParams: ['apkVersionCode', 'editId', 'packageName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }


    /**
     * androidpublisher.edits.apklistings.get
     * @desc Fetches the APK-specific localized listing for a specified APK and
     * language code.
     * @alias androidpublisher.edits.apklistings.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer} params.apkVersionCode The APK version code whose APK-specific listings should be read or modified.
     * @param {string} params.editId Unique identifier for this edit.
     * @param {string} params.language The language code (a BCP-47 language tag) of the APK-specific localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
     * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Edits$Apklistings$Get,
        options?: MethodOptions): AxiosPromise<Schema$ApkListing>;
    get(params: Params$Resource$Edits$Apklistings$Get,
        options: MethodOptions|BodyResponseCallback<Schema$ApkListing>,
        callback: BodyResponseCallback<Schema$ApkListing>): void;
    get(params: Params$Resource$Edits$Apklistings$Get,
        callback: BodyResponseCallback<Schema$ApkListing>): void;
    get(callback: BodyResponseCallback<Schema$ApkListing>): void;
    get(paramsOrCallback?: Params$Resource$Edits$Apklistings$Get|
        BodyResponseCallback<Schema$ApkListing>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ApkListing>,
        callback?: BodyResponseCallback<Schema$ApkListing>):
        void|AxiosPromise<Schema$ApkListing> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Edits$Apklistings$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Edits$Apklistings$Get;
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/listings/{language}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['packageName', 'editId', 'apkVersionCode', 'language'],
        pathParams: ['apkVersionCode', 'editId', 'language', 'packageName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ApkListing>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ApkListing>(parameters);
      }
    }


    /**
     * androidpublisher.edits.apklistings.list
     * @desc Lists all the APK-specific localized listings for a specified APK.
     * @alias androidpublisher.edits.apklistings.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer} params.apkVersionCode The APK version code whose APK-specific listings should be read or modified.
     * @param {string} params.editId Unique identifier for this edit.
     * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Edits$Apklistings$List,
        options?: MethodOptions): AxiosPromise<Schema$ApkListingsListResponse>;
    list(
        params: Params$Resource$Edits$Apklistings$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ApkListingsListResponse>,
        callback: BodyResponseCallback<Schema$ApkListingsListResponse>): void;
    list(
        params: Params$Resource$Edits$Apklistings$List,
        callback: BodyResponseCallback<Schema$ApkListingsListResponse>): void;
    list(callback: BodyResponseCallback<Schema$ApkListingsListResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Edits$Apklistings$List|
        BodyResponseCallback<Schema$ApkListingsListResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ApkListingsListResponse>,
        callback?: BodyResponseCallback<Schema$ApkListingsListResponse>):
        void|AxiosPromise<Schema$ApkListingsListResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Edits$Apklistings$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Edits$Apklistings$List;
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/listings')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['packageName', 'editId', 'apkVersionCode'],
        pathParams: ['apkVersionCode', 'editId', 'packageName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ApkListingsListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ApkListingsListResponse>(parameters);
      }
    }


    /**
     * androidpublisher.edits.apklistings.patch
     * @desc Updates or creates the APK-specific localized listing for a
     * specified APK and language code. This method supports patch semantics.
     * @alias androidpublisher.edits.apklistings.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer} params.apkVersionCode The APK version code whose APK-specific listings should be read or modified.
     * @param {string} params.editId Unique identifier for this edit.
     * @param {string} params.language The language code (a BCP-47 language tag) of the APK-specific localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
     * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     * @param {().ApkListing} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
        params?: Params$Resource$Edits$Apklistings$Patch,
        options?: MethodOptions): AxiosPromise<Schema$ApkListing>;
    patch(
        params: Params$Resource$Edits$Apklistings$Patch,
        options: MethodOptions|BodyResponseCallback<Schema$ApkListing>,
        callback: BodyResponseCallback<Schema$ApkListing>): void;
    patch(
        params: Params$Resource$Edits$Apklistings$Patch,
        callback: BodyResponseCallback<Schema$ApkListing>): void;
    patch(callback: BodyResponseCallback<Schema$ApkListing>): void;
    patch(
        paramsOrCallback?: Params$Resource$Edits$Apklistings$Patch|
        BodyResponseCallback<Schema$ApkListing>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ApkListing>,
        callback?: BodyResponseCallback<Schema$ApkListing>):
        void|AxiosPromise<Schema$ApkListing> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Edits$Apklistings$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Edits$Apklistings$Patch;
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/listings/{language}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['packageName', 'editId', 'apkVersionCode', 'language'],
        pathParams: ['apkVersionCode', 'editId', 'language', 'packageName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ApkListing>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ApkListing>(parameters);
      }
    }


    /**
     * androidpublisher.edits.apklistings.update
     * @desc Updates or creates the APK-specific localized listing for a
     * specified APK and language code.
     * @alias androidpublisher.edits.apklistings.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer} params.apkVersionCode The APK version code whose APK-specific listings should be read or modified.
     * @param {string} params.editId Unique identifier for this edit.
     * @param {string} params.language The language code (a BCP-47 language tag) of the APK-specific localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
     * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     * @param {().ApkListing} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
        params?: Params$Resource$Edits$Apklistings$Update,
        options?: MethodOptions): AxiosPromise<Schema$ApkListing>;
    update(
        params: Params$Resource$Edits$Apklistings$Update,
        options: MethodOptions|BodyResponseCallback<Schema$ApkListing>,
        callback: BodyResponseCallback<Schema$ApkListing>): void;
    update(
        params: Params$Resource$Edits$Apklistings$Update,
        callback: BodyResponseCallback<Schema$ApkListing>): void;
    update(callback: BodyResponseCallback<Schema$ApkListing>): void;
    update(
        paramsOrCallback?: Params$Resource$Edits$Apklistings$Update|
        BodyResponseCallback<Schema$ApkListing>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ApkListing>,
        callback?: BodyResponseCallback<Schema$ApkListing>):
        void|AxiosPromise<Schema$ApkListing> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Edits$Apklistings$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Edits$Apklistings$Update;
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/listings/{language}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['packageName', 'editId', 'apkVersionCode', 'language'],
        pathParams: ['apkVersionCode', 'editId', 'language', 'packageName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ApkListing>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ApkListing>(parameters);
      }
    }
  }

  export interface Params$Resource$Edits$Apklistings$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The APK version code whose APK-specific listings should be read or
     * modified.
     */
    apkVersionCode?: number;
    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * The language code (a BCP-47 language tag) of the APK-specific localized
     * listing to read or modify. For example, to select Austrian German, pass
     * "de-AT".
     */
    language?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example,
     * "com.spiffygame".
     */
    packageName?: string;
  }
  export interface Params$Resource$Edits$Apklistings$Deleteall {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The APK version code whose APK-specific listings should be read or
     * modified.
     */
    apkVersionCode?: number;
    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example,
     * "com.spiffygame".
     */
    packageName?: string;
  }
  export interface Params$Resource$Edits$Apklistings$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The APK version code whose APK-specific listings should be read or
     * modified.
     */
    apkVersionCode?: number;
    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * The language code (a BCP-47 language tag) of the APK-specific localized
     * listing to read or modify. For example, to select Austrian German, pass
     * "de-AT".
     */
    language?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example,
     * "com.spiffygame".
     */
    packageName?: string;
  }
  export interface Params$Resource$Edits$Apklistings$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The APK version code whose APK-specific listings should be read or
     * modified.
     */
    apkVersionCode?: number;
    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example,
     * "com.spiffygame".
     */
    packageName?: string;
  }
  export interface Params$Resource$Edits$Apklistings$Patch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The APK version code whose APK-specific listings should be read or
     * modified.
     */
    apkVersionCode?: number;
    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * The language code (a BCP-47 language tag) of the APK-specific localized
     * listing to read or modify. For example, to select Austrian German, pass
     * "de-AT".
     */
    language?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example,
     * "com.spiffygame".
     */
    packageName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ApkListing;
  }
  export interface Params$Resource$Edits$Apklistings$Update {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The APK version code whose APK-specific listings should be read or
     * modified.
     */
    apkVersionCode?: number;
    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * The language code (a BCP-47 language tag) of the APK-specific localized
     * listing to read or modify. For example, to select Austrian German, pass
     * "de-AT".
     */
    language?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example,
     * "com.spiffygame".
     */
    packageName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ApkListing;
  }


  export class Resource$Edits$Apks {
    root: Androidpublisher;
    constructor(root: Androidpublisher) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * androidpublisher.edits.apks.addexternallyhosted
     * @desc Creates a new APK without uploading the APK itself to Google Play,
     * instead hosting the APK at a specified URL. This function is only
     * available to enterprises using Google Play for Work whose application is
     * configured to restrict distribution to the enterprise domain.
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
        options?: MethodOptions):
        AxiosPromise<Schema$ApksAddExternallyHostedResponse>;
    addexternallyhosted(
        params: Params$Resource$Edits$Apks$Addexternallyhosted,
        options: MethodOptions|
        BodyResponseCallback<Schema$ApksAddExternallyHostedResponse>,
        callback: BodyResponseCallback<Schema$ApksAddExternallyHostedResponse>):
        void;
    addexternallyhosted(
        params: Params$Resource$Edits$Apks$Addexternallyhosted,
        callback: BodyResponseCallback<Schema$ApksAddExternallyHostedResponse>):
        void;
    addexternallyhosted(
        callback: BodyResponseCallback<Schema$ApksAddExternallyHostedResponse>):
        void;
    addexternallyhosted(
        paramsOrCallback?: Params$Resource$Edits$Apks$Addexternallyhosted|
        BodyResponseCallback<Schema$ApksAddExternallyHostedResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ApksAddExternallyHostedResponse>,
        callback?:
            BodyResponseCallback<Schema$ApksAddExternallyHostedResponse>):
        void|AxiosPromise<Schema$ApksAddExternallyHostedResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Edits$Apks$Addexternallyhosted;
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/externallyHosted')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['packageName', 'editId'],
        pathParams: ['editId', 'packageName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ApksAddExternallyHostedResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$ApksAddExternallyHostedResponse>(
            parameters);
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
    list(params?: Params$Resource$Edits$Apks$List, options?: MethodOptions):
        AxiosPromise<Schema$ApksListResponse>;
    list(
        params: Params$Resource$Edits$Apks$List,
        options: MethodOptions|BodyResponseCallback<Schema$ApksListResponse>,
        callback: BodyResponseCallback<Schema$ApksListResponse>): void;
    list(
        params: Params$Resource$Edits$Apks$List,
        callback: BodyResponseCallback<Schema$ApksListResponse>): void;
    list(callback: BodyResponseCallback<Schema$ApksListResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Edits$Apks$List|
        BodyResponseCallback<Schema$ApksListResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ApksListResponse>,
        callback?: BodyResponseCallback<Schema$ApksListResponse>):
        void|AxiosPromise<Schema$ApksListResponse> {
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['packageName', 'editId'],
        pathParams: ['editId', 'packageName'],
        context: this.getRoot()
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
    upload(params?: Params$Resource$Edits$Apks$Upload, options?: MethodOptions):
        AxiosPromise<Schema$Apk>;
    upload(
        params: Params$Resource$Edits$Apks$Upload,
        options: MethodOptions|BodyResponseCallback<Schema$Apk>,
        callback: BodyResponseCallback<Schema$Apk>): void;
    upload(
        params: Params$Resource$Edits$Apks$Upload,
        callback: BodyResponseCallback<Schema$Apk>): void;
    upload(callback: BodyResponseCallback<Schema$Apk>): void;
    upload(
        paramsOrCallback?: Params$Resource$Edits$Apks$Upload|
        BodyResponseCallback<Schema$Apk>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Apk>,
        callback?: BodyResponseCallback<Schema$Apk>):
        void|AxiosPromise<Schema$Apk> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Edits$Apks$Upload;
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        mediaUrl:
            (rootUrl +
             '/upload/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks')
                .replace(/([^:]\/)\/+/g, '$1'),
        requiredParams: ['packageName', 'editId'],
        pathParams: ['editId', 'packageName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Apk>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Apk>(parameters);
      }
    }
  }

  export interface Params$Resource$Edits$Apks$Addexternallyhosted {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example,
     * "com.spiffygame".
     */
    packageName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ApksAddExternallyHostedRequest;
  }
  export interface Params$Resource$Edits$Apks$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example,
     * "com.spiffygame".
     */
    packageName?: string;
  }
  export interface Params$Resource$Edits$Apks$Upload {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example,
     * "com.spiffygame".
     */
    packageName?: string;


    /**
     * Media metadata
     */
    media?: {
      /**
       * Media mime-type
       */
      mediaType?: string;

      /**
       * Media body contents
       */
      body?: any;
    };
  }


  export class Resource$Edits$Bundles {
    root: Androidpublisher;
    constructor(root: Androidpublisher) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
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
    list(params?: Params$Resource$Edits$Bundles$List, options?: MethodOptions):
        AxiosPromise<Schema$BundlesListResponse>;
    list(
        params: Params$Resource$Edits$Bundles$List,
        options: MethodOptions|BodyResponseCallback<Schema$BundlesListResponse>,
        callback: BodyResponseCallback<Schema$BundlesListResponse>): void;
    list(
        params: Params$Resource$Edits$Bundles$List,
        callback: BodyResponseCallback<Schema$BundlesListResponse>): void;
    list(callback: BodyResponseCallback<Schema$BundlesListResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Edits$Bundles$List|
        BodyResponseCallback<Schema$BundlesListResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$BundlesListResponse>,
        callback?: BodyResponseCallback<Schema$BundlesListResponse>):
        void|AxiosPromise<Schema$BundlesListResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Edits$Bundles$List;
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/edits/{editId}/bundles')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['packageName', 'editId'],
        pathParams: ['editId', 'packageName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$BundlesListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$BundlesListResponse>(parameters);
      }
    }


    /**
     * androidpublisher.edits.bundles.upload
     * @alias androidpublisher.edits.bundles.upload
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
        params?: Params$Resource$Edits$Bundles$Upload,
        options?: MethodOptions): AxiosPromise<Schema$Bundle>;
    upload(
        params: Params$Resource$Edits$Bundles$Upload,
        options: MethodOptions|BodyResponseCallback<Schema$Bundle>,
        callback: BodyResponseCallback<Schema$Bundle>): void;
    upload(
        params: Params$Resource$Edits$Bundles$Upload,
        callback: BodyResponseCallback<Schema$Bundle>): void;
    upload(callback: BodyResponseCallback<Schema$Bundle>): void;
    upload(
        paramsOrCallback?: Params$Resource$Edits$Bundles$Upload|
        BodyResponseCallback<Schema$Bundle>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Bundle>,
        callback?: BodyResponseCallback<Schema$Bundle>):
        void|AxiosPromise<Schema$Bundle> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Edits$Bundles$Upload;
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/edits/{editId}/bundles')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        mediaUrl:
            (rootUrl +
             '/upload/androidpublisher/v2/applications/{packageName}/edits/{editId}/bundles')
                .replace(/([^:]\/)\/+/g, '$1'),
        requiredParams: ['packageName', 'editId'],
        pathParams: ['editId', 'packageName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Bundle>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Bundle>(parameters);
      }
    }
  }

  export interface Params$Resource$Edits$Bundles$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example,
     * "com.spiffygame".
     */
    packageName?: string;
  }
  export interface Params$Resource$Edits$Bundles$Upload {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example,
     * "com.spiffygame".
     */
    packageName?: string;


    /**
     * Media metadata
     */
    media?: {
      /**
       * Media mime-type
       */
      mediaType?: string;

      /**
       * Media body contents
       */
      body?: any;
    };
  }


  export class Resource$Edits$Deobfuscationfiles {
    root: Androidpublisher;
    constructor(root: Androidpublisher) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * androidpublisher.edits.deobfuscationfiles.upload
     * @desc Uploads the deobfuscation file of the specified APK. If a
     * deobfuscation file already exists, it will be replaced.
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
        options?: MethodOptions):
        AxiosPromise<Schema$DeobfuscationFilesUploadResponse>;
    upload(
        params: Params$Resource$Edits$Deobfuscationfiles$Upload,
        options: MethodOptions|
        BodyResponseCallback<Schema$DeobfuscationFilesUploadResponse>,
        callback:
            BodyResponseCallback<Schema$DeobfuscationFilesUploadResponse>):
        void;
    upload(
        params: Params$Resource$Edits$Deobfuscationfiles$Upload,
        callback:
            BodyResponseCallback<Schema$DeobfuscationFilesUploadResponse>):
        void;
    upload(callback:
               BodyResponseCallback<Schema$DeobfuscationFilesUploadResponse>):
        void;
    upload(
        paramsOrCallback?: Params$Resource$Edits$Deobfuscationfiles$Upload|
        BodyResponseCallback<Schema$DeobfuscationFilesUploadResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$DeobfuscationFilesUploadResponse>,
        callback?:
            BodyResponseCallback<Schema$DeobfuscationFilesUploadResponse>):
        void|AxiosPromise<Schema$DeobfuscationFilesUploadResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Edits$Deobfuscationfiles$Upload;
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/deobfuscationFiles/{deobfuscationFileType}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        mediaUrl:
            (rootUrl +
             '/upload/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/deobfuscationFiles/{deobfuscationFileType}')
                .replace(/([^:]\/)\/+/g, '$1'),
        requiredParams: [
          'packageName', 'editId', 'apkVersionCode', 'deobfuscationFileType'
        ],
        pathParams: [
          'apkVersionCode', 'deobfuscationFileType', 'editId', 'packageName'
        ],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$DeobfuscationFilesUploadResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$DeobfuscationFilesUploadResponse>(
            parameters);
      }
    }
  }

  export interface Params$Resource$Edits$Deobfuscationfiles$Upload {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

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
     * Unique identifier of the Android app for which the deobfuscatiuon files
     * are being uploaded; for example, "com.spiffygame".
     */
    packageName?: string;


    /**
     * Media metadata
     */
    media?: {
      /**
       * Media mime-type
       */
      mediaType?: string;

      /**
       * Media body contents
       */
      body?: any;
    };
  }


  export class Resource$Edits$Details {
    root: Androidpublisher;
    constructor(root: Androidpublisher) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * androidpublisher.edits.details.get
     * @desc Fetches app details for this edit. This includes the default
     * language and developer support contact information.
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
    get(params?: Params$Resource$Edits$Details$Get,
        options?: MethodOptions): AxiosPromise<Schema$AppDetails>;
    get(params: Params$Resource$Edits$Details$Get,
        options: MethodOptions|BodyResponseCallback<Schema$AppDetails>,
        callback: BodyResponseCallback<Schema$AppDetails>): void;
    get(params: Params$Resource$Edits$Details$Get,
        callback: BodyResponseCallback<Schema$AppDetails>): void;
    get(callback: BodyResponseCallback<Schema$AppDetails>): void;
    get(paramsOrCallback?: Params$Resource$Edits$Details$Get|
        BodyResponseCallback<Schema$AppDetails>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$AppDetails>,
        callback?: BodyResponseCallback<Schema$AppDetails>):
        void|AxiosPromise<Schema$AppDetails> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Edits$Details$Get;
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/edits/{editId}/details')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['packageName', 'editId'],
        pathParams: ['editId', 'packageName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$AppDetails>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AppDetails>(parameters);
      }
    }


    /**
     * androidpublisher.edits.details.patch
     * @desc Updates app details for this edit. This method supports patch
     * semantics.
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
        options?: MethodOptions): AxiosPromise<Schema$AppDetails>;
    patch(
        params: Params$Resource$Edits$Details$Patch,
        options: MethodOptions|BodyResponseCallback<Schema$AppDetails>,
        callback: BodyResponseCallback<Schema$AppDetails>): void;
    patch(
        params: Params$Resource$Edits$Details$Patch,
        callback: BodyResponseCallback<Schema$AppDetails>): void;
    patch(callback: BodyResponseCallback<Schema$AppDetails>): void;
    patch(
        paramsOrCallback?: Params$Resource$Edits$Details$Patch|
        BodyResponseCallback<Schema$AppDetails>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$AppDetails>,
        callback?: BodyResponseCallback<Schema$AppDetails>):
        void|AxiosPromise<Schema$AppDetails> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Edits$Details$Patch;
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/edits/{editId}/details')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['packageName', 'editId'],
        pathParams: ['editId', 'packageName'],
        context: this.getRoot()
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
        options?: MethodOptions): AxiosPromise<Schema$AppDetails>;
    update(
        params: Params$Resource$Edits$Details$Update,
        options: MethodOptions|BodyResponseCallback<Schema$AppDetails>,
        callback: BodyResponseCallback<Schema$AppDetails>): void;
    update(
        params: Params$Resource$Edits$Details$Update,
        callback: BodyResponseCallback<Schema$AppDetails>): void;
    update(callback: BodyResponseCallback<Schema$AppDetails>): void;
    update(
        paramsOrCallback?: Params$Resource$Edits$Details$Update|
        BodyResponseCallback<Schema$AppDetails>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$AppDetails>,
        callback?: BodyResponseCallback<Schema$AppDetails>):
        void|AxiosPromise<Schema$AppDetails> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Edits$Details$Update;
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/edits/{editId}/details')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['packageName', 'editId'],
        pathParams: ['editId', 'packageName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$AppDetails>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AppDetails>(parameters);
      }
    }
  }

  export interface Params$Resource$Edits$Details$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example,
     * "com.spiffygame".
     */
    packageName?: string;
  }
  export interface Params$Resource$Edits$Details$Patch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example,
     * "com.spiffygame".
     */
    packageName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AppDetails;
  }
  export interface Params$Resource$Edits$Details$Update {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example,
     * "com.spiffygame".
     */
    packageName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AppDetails;
  }


  export class Resource$Edits$Expansionfiles {
    root: Androidpublisher;
    constructor(root: Androidpublisher) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
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
    get(params?: Params$Resource$Edits$Expansionfiles$Get,
        options?: MethodOptions): AxiosPromise<Schema$ExpansionFile>;
    get(params: Params$Resource$Edits$Expansionfiles$Get,
        options: MethodOptions|BodyResponseCallback<Schema$ExpansionFile>,
        callback: BodyResponseCallback<Schema$ExpansionFile>): void;
    get(params: Params$Resource$Edits$Expansionfiles$Get,
        callback: BodyResponseCallback<Schema$ExpansionFile>): void;
    get(callback: BodyResponseCallback<Schema$ExpansionFile>): void;
    get(paramsOrCallback?: Params$Resource$Edits$Expansionfiles$Get|
        BodyResponseCallback<Schema$ExpansionFile>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ExpansionFile>,
        callback?: BodyResponseCallback<Schema$ExpansionFile>):
        void|AxiosPromise<Schema$ExpansionFile> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Edits$Expansionfiles$Get;
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams:
            ['packageName', 'editId', 'apkVersionCode', 'expansionFileType'],
        pathParams:
            ['apkVersionCode', 'editId', 'expansionFileType', 'packageName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ExpansionFile>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ExpansionFile>(parameters);
      }
    }


    /**
     * androidpublisher.edits.expansionfiles.patch
     * @desc Updates the APK's Expansion File configuration to reference another
     * APK's Expansion Files. To add a new Expansion File use the Upload method.
     * This method supports patch semantics.
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
        options?: MethodOptions): AxiosPromise<Schema$ExpansionFile>;
    patch(
        params: Params$Resource$Edits$Expansionfiles$Patch,
        options: MethodOptions|BodyResponseCallback<Schema$ExpansionFile>,
        callback: BodyResponseCallback<Schema$ExpansionFile>): void;
    patch(
        params: Params$Resource$Edits$Expansionfiles$Patch,
        callback: BodyResponseCallback<Schema$ExpansionFile>): void;
    patch(callback: BodyResponseCallback<Schema$ExpansionFile>): void;
    patch(
        paramsOrCallback?: Params$Resource$Edits$Expansionfiles$Patch|
        BodyResponseCallback<Schema$ExpansionFile>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ExpansionFile>,
        callback?: BodyResponseCallback<Schema$ExpansionFile>):
        void|AxiosPromise<Schema$ExpansionFile> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Edits$Expansionfiles$Patch;
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams:
            ['packageName', 'editId', 'apkVersionCode', 'expansionFileType'],
        pathParams:
            ['apkVersionCode', 'editId', 'expansionFileType', 'packageName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ExpansionFile>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ExpansionFile>(parameters);
      }
    }


    /**
     * androidpublisher.edits.expansionfiles.update
     * @desc Updates the APK's Expansion File configuration to reference another
     * APK's Expansion Files. To add a new Expansion File use the Upload method.
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
        options?: MethodOptions): AxiosPromise<Schema$ExpansionFile>;
    update(
        params: Params$Resource$Edits$Expansionfiles$Update,
        options: MethodOptions|BodyResponseCallback<Schema$ExpansionFile>,
        callback: BodyResponseCallback<Schema$ExpansionFile>): void;
    update(
        params: Params$Resource$Edits$Expansionfiles$Update,
        callback: BodyResponseCallback<Schema$ExpansionFile>): void;
    update(callback: BodyResponseCallback<Schema$ExpansionFile>): void;
    update(
        paramsOrCallback?: Params$Resource$Edits$Expansionfiles$Update|
        BodyResponseCallback<Schema$ExpansionFile>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ExpansionFile>,
        callback?: BodyResponseCallback<Schema$ExpansionFile>):
        void|AxiosPromise<Schema$ExpansionFile> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Edits$Expansionfiles$Update;
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams:
            ['packageName', 'editId', 'apkVersionCode', 'expansionFileType'],
        pathParams:
            ['apkVersionCode', 'editId', 'expansionFileType', 'packageName'],
        context: this.getRoot()
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
        options?: MethodOptions):
        AxiosPromise<Schema$ExpansionFilesUploadResponse>;
    upload(
        params: Params$Resource$Edits$Expansionfiles$Upload,
        options: MethodOptions|
        BodyResponseCallback<Schema$ExpansionFilesUploadResponse>,
        callback: BodyResponseCallback<Schema$ExpansionFilesUploadResponse>):
        void;
    upload(
        params: Params$Resource$Edits$Expansionfiles$Upload,
        callback: BodyResponseCallback<Schema$ExpansionFilesUploadResponse>):
        void;
    upload(callback: BodyResponseCallback<Schema$ExpansionFilesUploadResponse>):
        void;
    upload(
        paramsOrCallback?: Params$Resource$Edits$Expansionfiles$Upload|
        BodyResponseCallback<Schema$ExpansionFilesUploadResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ExpansionFilesUploadResponse>,
        callback?: BodyResponseCallback<Schema$ExpansionFilesUploadResponse>):
        void|AxiosPromise<Schema$ExpansionFilesUploadResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Edits$Expansionfiles$Upload;
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        mediaUrl:
            (rootUrl +
             '/upload/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}')
                .replace(/([^:]\/)\/+/g, '$1'),
        requiredParams:
            ['packageName', 'editId', 'apkVersionCode', 'expansionFileType'],
        pathParams:
            ['apkVersionCode', 'editId', 'expansionFileType', 'packageName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ExpansionFilesUploadResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$ExpansionFilesUploadResponse>(
            parameters);
      }
    }
  }

  export interface Params$Resource$Edits$Expansionfiles$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The version code of the APK whose Expansion File configuration is being
     * read or modified.
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
     * Unique identifier for the Android app that is being updated; for example,
     * "com.spiffygame".
     */
    packageName?: string;
  }
  export interface Params$Resource$Edits$Expansionfiles$Patch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The version code of the APK whose Expansion File configuration is being
     * read or modified.
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
     * Unique identifier for the Android app that is being updated; for example,
     * "com.spiffygame".
     */
    packageName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ExpansionFile;
  }
  export interface Params$Resource$Edits$Expansionfiles$Update {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The version code of the APK whose Expansion File configuration is being
     * read or modified.
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
     * Unique identifier for the Android app that is being updated; for example,
     * "com.spiffygame".
     */
    packageName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ExpansionFile;
  }
  export interface Params$Resource$Edits$Expansionfiles$Upload {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The version code of the APK whose Expansion File configuration is being
     * read or modified.
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
     * Unique identifier for the Android app that is being updated; for example,
     * "com.spiffygame".
     */
    packageName?: string;


    /**
     * Media metadata
     */
    media?: {
      /**
       * Media mime-type
       */
      mediaType?: string;

      /**
       * Media body contents
       */
      body?: any;
    };
  }


  export class Resource$Edits$Images {
    root: Androidpublisher;
    constructor(root: Androidpublisher) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
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
        options?: MethodOptions): AxiosPromise<void>;
    delete(
        params: Params$Resource$Edits$Images$Delete,
        options: MethodOptions|BodyResponseCallback<void>,
        callback: BodyResponseCallback<void>): void;
    delete(
        params: Params$Resource$Edits$Images$Delete,
        callback: BodyResponseCallback<void>): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
        paramsOrCallback?: Params$Resource$Edits$Images$Delete|
        BodyResponseCallback<void>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Edits$Images$Delete;
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}/{imageId}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams:
            ['packageName', 'editId', 'language', 'imageType', 'imageId'],
        pathParams:
            ['editId', 'imageId', 'imageType', 'language', 'packageName'],
        context: this.getRoot()
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
        options?: MethodOptions): AxiosPromise<Schema$ImagesDeleteAllResponse>;
    deleteall(
        params: Params$Resource$Edits$Images$Deleteall,
        options: MethodOptions|
        BodyResponseCallback<Schema$ImagesDeleteAllResponse>,
        callback: BodyResponseCallback<Schema$ImagesDeleteAllResponse>): void;
    deleteall(
        params: Params$Resource$Edits$Images$Deleteall,
        callback: BodyResponseCallback<Schema$ImagesDeleteAllResponse>): void;
    deleteall(callback: BodyResponseCallback<Schema$ImagesDeleteAllResponse>):
        void;
    deleteall(
        paramsOrCallback?: Params$Resource$Edits$Images$Deleteall|
        BodyResponseCallback<Schema$ImagesDeleteAllResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ImagesDeleteAllResponse>,
        callback?: BodyResponseCallback<Schema$ImagesDeleteAllResponse>):
        void|AxiosPromise<Schema$ImagesDeleteAllResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Edits$Images$Deleteall;
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['packageName', 'editId', 'language', 'imageType'],
        pathParams: ['editId', 'imageType', 'language', 'packageName'],
        context: this.getRoot()
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
    list(params?: Params$Resource$Edits$Images$List, options?: MethodOptions):
        AxiosPromise<Schema$ImagesListResponse>;
    list(
        params: Params$Resource$Edits$Images$List,
        options: MethodOptions|BodyResponseCallback<Schema$ImagesListResponse>,
        callback: BodyResponseCallback<Schema$ImagesListResponse>): void;
    list(
        params: Params$Resource$Edits$Images$List,
        callback: BodyResponseCallback<Schema$ImagesListResponse>): void;
    list(callback: BodyResponseCallback<Schema$ImagesListResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Edits$Images$List|
        BodyResponseCallback<Schema$ImagesListResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ImagesListResponse>,
        callback?: BodyResponseCallback<Schema$ImagesListResponse>):
        void|AxiosPromise<Schema$ImagesListResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Edits$Images$List;
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['packageName', 'editId', 'language', 'imageType'],
        pathParams: ['editId', 'imageType', 'language', 'packageName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ImagesListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ImagesListResponse>(parameters);
      }
    }


    /**
     * androidpublisher.edits.images.upload
     * @desc Uploads a new image and adds it to the list of images for the
     * specified language and image type.
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
        options?: MethodOptions): AxiosPromise<Schema$ImagesUploadResponse>;
    upload(
        params: Params$Resource$Edits$Images$Upload,
        options: MethodOptions|
        BodyResponseCallback<Schema$ImagesUploadResponse>,
        callback: BodyResponseCallback<Schema$ImagesUploadResponse>): void;
    upload(
        params: Params$Resource$Edits$Images$Upload,
        callback: BodyResponseCallback<Schema$ImagesUploadResponse>): void;
    upload(callback: BodyResponseCallback<Schema$ImagesUploadResponse>): void;
    upload(
        paramsOrCallback?: Params$Resource$Edits$Images$Upload|
        BodyResponseCallback<Schema$ImagesUploadResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ImagesUploadResponse>,
        callback?: BodyResponseCallback<Schema$ImagesUploadResponse>):
        void|AxiosPromise<Schema$ImagesUploadResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Edits$Images$Upload;
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        mediaUrl:
            (rootUrl +
             '/upload/androidpublisher/v2/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}')
                .replace(/([^:]\/)\/+/g, '$1'),
        requiredParams: ['packageName', 'editId', 'language', 'imageType'],
        pathParams: ['editId', 'imageType', 'language', 'packageName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ImagesUploadResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ImagesUploadResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Edits$Images$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * Unique identifier an image within the set of images attached to this
     * edit.
     */
    imageId?: string;
    /**
     *
     */
    imageType?: string;
    /**
     * The language code (a BCP-47 language tag) of the localized listing whose
     * images are to read or modified. For example, to select Austrian German,
     * pass "de-AT".
     */
    language?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example,
     * "com.spiffygame".
     */
    packageName?: string;
  }
  export interface Params$Resource$Edits$Images$Deleteall {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     *
     */
    imageType?: string;
    /**
     * The language code (a BCP-47 language tag) of the localized listing whose
     * images are to read or modified. For example, to select Austrian German,
     * pass "de-AT".
     */
    language?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example,
     * "com.spiffygame".
     */
    packageName?: string;
  }
  export interface Params$Resource$Edits$Images$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     *
     */
    imageType?: string;
    /**
     * The language code (a BCP-47 language tag) of the localized listing whose
     * images are to read or modified. For example, to select Austrian German,
     * pass "de-AT".
     */
    language?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example,
     * "com.spiffygame".
     */
    packageName?: string;
  }
  export interface Params$Resource$Edits$Images$Upload {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     *
     */
    imageType?: string;
    /**
     * The language code (a BCP-47 language tag) of the localized listing whose
     * images are to read or modified. For example, to select Austrian German,
     * pass "de-AT".
     */
    language?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example,
     * "com.spiffygame".
     */
    packageName?: string;


    /**
     * Media metadata
     */
    media?: {
      /**
       * Media mime-type
       */
      mediaType?: string;

      /**
       * Media body contents
       */
      body?: any;
    };
  }


  export class Resource$Edits$Listings {
    root: Androidpublisher;
    constructor(root: Androidpublisher) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
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
        options?: MethodOptions): AxiosPromise<void>;
    delete(
        params: Params$Resource$Edits$Listings$Delete,
        options: MethodOptions|BodyResponseCallback<void>,
        callback: BodyResponseCallback<void>): void;
    delete(
        params: Params$Resource$Edits$Listings$Delete,
        callback: BodyResponseCallback<void>): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
        paramsOrCallback?: Params$Resource$Edits$Listings$Delete|
        BodyResponseCallback<void>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Edits$Listings$Delete;
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/edits/{editId}/listings/{language}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['packageName', 'editId', 'language'],
        pathParams: ['editId', 'language', 'packageName'],
        context: this.getRoot()
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
        options?: MethodOptions): AxiosPromise<void>;
    deleteall(
        params: Params$Resource$Edits$Listings$Deleteall,
        options: MethodOptions|BodyResponseCallback<void>,
        callback: BodyResponseCallback<void>): void;
    deleteall(
        params: Params$Resource$Edits$Listings$Deleteall,
        callback: BodyResponseCallback<void>): void;
    deleteall(callback: BodyResponseCallback<void>): void;
    deleteall(
        paramsOrCallback?: Params$Resource$Edits$Listings$Deleteall|
        BodyResponseCallback<void>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Edits$Listings$Deleteall;
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/edits/{editId}/listings')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['packageName', 'editId'],
        pathParams: ['editId', 'packageName'],
        context: this.getRoot()
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
    get(params?: Params$Resource$Edits$Listings$Get,
        options?: MethodOptions): AxiosPromise<Schema$Listing>;
    get(params: Params$Resource$Edits$Listings$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Listing>,
        callback: BodyResponseCallback<Schema$Listing>): void;
    get(params: Params$Resource$Edits$Listings$Get,
        callback: BodyResponseCallback<Schema$Listing>): void;
    get(callback: BodyResponseCallback<Schema$Listing>): void;
    get(paramsOrCallback?: Params$Resource$Edits$Listings$Get|
        BodyResponseCallback<Schema$Listing>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Listing>,
        callback?: BodyResponseCallback<Schema$Listing>):
        void|AxiosPromise<Schema$Listing> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Edits$Listings$Get;
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/edits/{editId}/listings/{language}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['packageName', 'editId', 'language'],
        pathParams: ['editId', 'language', 'packageName'],
        context: this.getRoot()
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
    list(params?: Params$Resource$Edits$Listings$List, options?: MethodOptions):
        AxiosPromise<Schema$ListingsListResponse>;
    list(
        params: Params$Resource$Edits$Listings$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListingsListResponse>,
        callback: BodyResponseCallback<Schema$ListingsListResponse>): void;
    list(
        params: Params$Resource$Edits$Listings$List,
        callback: BodyResponseCallback<Schema$ListingsListResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListingsListResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Edits$Listings$List|
        BodyResponseCallback<Schema$ListingsListResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListingsListResponse>,
        callback?: BodyResponseCallback<Schema$ListingsListResponse>):
        void|AxiosPromise<Schema$ListingsListResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Edits$Listings$List;
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/edits/{editId}/listings')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['packageName', 'editId'],
        pathParams: ['editId', 'packageName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListingsListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListingsListResponse>(parameters);
      }
    }


    /**
     * androidpublisher.edits.listings.patch
     * @desc Creates or updates a localized store listing. This method supports
     * patch semantics.
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
        options?: MethodOptions): AxiosPromise<Schema$Listing>;
    patch(
        params: Params$Resource$Edits$Listings$Patch,
        options: MethodOptions|BodyResponseCallback<Schema$Listing>,
        callback: BodyResponseCallback<Schema$Listing>): void;
    patch(
        params: Params$Resource$Edits$Listings$Patch,
        callback: BodyResponseCallback<Schema$Listing>): void;
    patch(callback: BodyResponseCallback<Schema$Listing>): void;
    patch(
        paramsOrCallback?: Params$Resource$Edits$Listings$Patch|
        BodyResponseCallback<Schema$Listing>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Listing>,
        callback?: BodyResponseCallback<Schema$Listing>):
        void|AxiosPromise<Schema$Listing> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Edits$Listings$Patch;
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/edits/{editId}/listings/{language}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['packageName', 'editId', 'language'],
        pathParams: ['editId', 'language', 'packageName'],
        context: this.getRoot()
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
        options?: MethodOptions): AxiosPromise<Schema$Listing>;
    update(
        params: Params$Resource$Edits$Listings$Update,
        options: MethodOptions|BodyResponseCallback<Schema$Listing>,
        callback: BodyResponseCallback<Schema$Listing>): void;
    update(
        params: Params$Resource$Edits$Listings$Update,
        callback: BodyResponseCallback<Schema$Listing>): void;
    update(callback: BodyResponseCallback<Schema$Listing>): void;
    update(
        paramsOrCallback?: Params$Resource$Edits$Listings$Update|
        BodyResponseCallback<Schema$Listing>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Listing>,
        callback?: BodyResponseCallback<Schema$Listing>):
        void|AxiosPromise<Schema$Listing> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Edits$Listings$Update;
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/edits/{editId}/listings/{language}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['packageName', 'editId', 'language'],
        pathParams: ['editId', 'language', 'packageName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Listing>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Listing>(parameters);
      }
    }
  }

  export interface Params$Resource$Edits$Listings$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * The language code (a BCP-47 language tag) of the localized listing to
     * read or modify. For example, to select Austrian German, pass "de-AT".
     */
    language?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example,
     * "com.spiffygame".
     */
    packageName?: string;
  }
  export interface Params$Resource$Edits$Listings$Deleteall {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example,
     * "com.spiffygame".
     */
    packageName?: string;
  }
  export interface Params$Resource$Edits$Listings$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * The language code (a BCP-47 language tag) of the localized listing to
     * read or modify. For example, to select Austrian German, pass "de-AT".
     */
    language?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example,
     * "com.spiffygame".
     */
    packageName?: string;
  }
  export interface Params$Resource$Edits$Listings$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example,
     * "com.spiffygame".
     */
    packageName?: string;
  }
  export interface Params$Resource$Edits$Listings$Patch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * The language code (a BCP-47 language tag) of the localized listing to
     * read or modify. For example, to select Austrian German, pass "de-AT".
     */
    language?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example,
     * "com.spiffygame".
     */
    packageName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Listing;
  }
  export interface Params$Resource$Edits$Listings$Update {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * The language code (a BCP-47 language tag) of the localized listing to
     * read or modify. For example, to select Austrian German, pass "de-AT".
     */
    language?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example,
     * "com.spiffygame".
     */
    packageName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Listing;
  }


  export class Resource$Edits$Testers {
    root: Androidpublisher;
    constructor(root: Androidpublisher) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * androidpublisher.edits.testers.get
     * @alias androidpublisher.edits.testers.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.editId Unique identifier for this edit.
     * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     * @param {string} params.track The track to read or modify. Acceptable values are: "alpha", "beta", "production", "rollout" or "internal".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Edits$Testers$Get,
        options?: MethodOptions): AxiosPromise<Schema$Testers>;
    get(params: Params$Resource$Edits$Testers$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Testers>,
        callback: BodyResponseCallback<Schema$Testers>): void;
    get(params: Params$Resource$Edits$Testers$Get,
        callback: BodyResponseCallback<Schema$Testers>): void;
    get(callback: BodyResponseCallback<Schema$Testers>): void;
    get(paramsOrCallback?: Params$Resource$Edits$Testers$Get|
        BodyResponseCallback<Schema$Testers>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Testers>,
        callback?: BodyResponseCallback<Schema$Testers>):
        void|AxiosPromise<Schema$Testers> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Edits$Testers$Get;
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/edits/{editId}/testers/{track}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['packageName', 'editId', 'track'],
        pathParams: ['editId', 'packageName', 'track'],
        context: this.getRoot()
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
     * @param {string} params.track The track to read or modify. Acceptable values are: "alpha", "beta", "production", "rollout" or "internal".
     * @param {().Testers} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
        params?: Params$Resource$Edits$Testers$Patch,
        options?: MethodOptions): AxiosPromise<Schema$Testers>;
    patch(
        params: Params$Resource$Edits$Testers$Patch,
        options: MethodOptions|BodyResponseCallback<Schema$Testers>,
        callback: BodyResponseCallback<Schema$Testers>): void;
    patch(
        params: Params$Resource$Edits$Testers$Patch,
        callback: BodyResponseCallback<Schema$Testers>): void;
    patch(callback: BodyResponseCallback<Schema$Testers>): void;
    patch(
        paramsOrCallback?: Params$Resource$Edits$Testers$Patch|
        BodyResponseCallback<Schema$Testers>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Testers>,
        callback?: BodyResponseCallback<Schema$Testers>):
        void|AxiosPromise<Schema$Testers> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Edits$Testers$Patch;
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/edits/{editId}/testers/{track}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['packageName', 'editId', 'track'],
        pathParams: ['editId', 'packageName', 'track'],
        context: this.getRoot()
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
     * @param {string} params.track The track to read or modify. Acceptable values are: "alpha", "beta", "production", "rollout" or "internal".
     * @param {().Testers} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
        params?: Params$Resource$Edits$Testers$Update,
        options?: MethodOptions): AxiosPromise<Schema$Testers>;
    update(
        params: Params$Resource$Edits$Testers$Update,
        options: MethodOptions|BodyResponseCallback<Schema$Testers>,
        callback: BodyResponseCallback<Schema$Testers>): void;
    update(
        params: Params$Resource$Edits$Testers$Update,
        callback: BodyResponseCallback<Schema$Testers>): void;
    update(callback: BodyResponseCallback<Schema$Testers>): void;
    update(
        paramsOrCallback?: Params$Resource$Edits$Testers$Update|
        BodyResponseCallback<Schema$Testers>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Testers>,
        callback?: BodyResponseCallback<Schema$Testers>):
        void|AxiosPromise<Schema$Testers> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Edits$Testers$Update;
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/edits/{editId}/testers/{track}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['packageName', 'editId', 'track'],
        pathParams: ['editId', 'packageName', 'track'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Testers>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Testers>(parameters);
      }
    }
  }

  export interface Params$Resource$Edits$Testers$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example,
     * "com.spiffygame".
     */
    packageName?: string;
    /**
     * The track to read or modify. Acceptable values are: "alpha", "beta",
     * "production", "rollout" or "internal".
     */
    track?: string;
  }
  export interface Params$Resource$Edits$Testers$Patch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example,
     * "com.spiffygame".
     */
    packageName?: string;
    /**
     * The track to read or modify. Acceptable values are: "alpha", "beta",
     * "production", "rollout" or "internal".
     */
    track?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Testers;
  }
  export interface Params$Resource$Edits$Testers$Update {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example,
     * "com.spiffygame".
     */
    packageName?: string;
    /**
     * The track to read or modify. Acceptable values are: "alpha", "beta",
     * "production", "rollout" or "internal".
     */
    track?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Testers;
  }


  export class Resource$Edits$Tracks {
    root: Androidpublisher;
    constructor(root: Androidpublisher) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * androidpublisher.edits.tracks.get
     * @desc Fetches the track configuration for the specified track type.
     * Includes the APK version codes that are in this track.
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
    get(params?: Params$Resource$Edits$Tracks$Get,
        options?: MethodOptions): AxiosPromise<Schema$Track>;
    get(params: Params$Resource$Edits$Tracks$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Track>,
        callback: BodyResponseCallback<Schema$Track>): void;
    get(params: Params$Resource$Edits$Tracks$Get,
        callback: BodyResponseCallback<Schema$Track>): void;
    get(callback: BodyResponseCallback<Schema$Track>): void;
    get(paramsOrCallback?: Params$Resource$Edits$Tracks$Get|
        BodyResponseCallback<Schema$Track>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Track>,
        callback?: BodyResponseCallback<Schema$Track>):
        void|AxiosPromise<Schema$Track> {
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/edits/{editId}/tracks/{track}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['packageName', 'editId', 'track'],
        pathParams: ['editId', 'packageName', 'track'],
        context: this.getRoot()
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
    list(params?: Params$Resource$Edits$Tracks$List, options?: MethodOptions):
        AxiosPromise<Schema$TracksListResponse>;
    list(
        params: Params$Resource$Edits$Tracks$List,
        options: MethodOptions|BodyResponseCallback<Schema$TracksListResponse>,
        callback: BodyResponseCallback<Schema$TracksListResponse>): void;
    list(
        params: Params$Resource$Edits$Tracks$List,
        callback: BodyResponseCallback<Schema$TracksListResponse>): void;
    list(callback: BodyResponseCallback<Schema$TracksListResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Edits$Tracks$List|
        BodyResponseCallback<Schema$TracksListResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$TracksListResponse>,
        callback?: BodyResponseCallback<Schema$TracksListResponse>):
        void|AxiosPromise<Schema$TracksListResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Edits$Tracks$List;
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/edits/{editId}/tracks')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['packageName', 'editId'],
        pathParams: ['editId', 'packageName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$TracksListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TracksListResponse>(parameters);
      }
    }


    /**
     * androidpublisher.edits.tracks.patch
     * @desc Updates the track configuration for the specified track type. When
     * halted, the rollout track cannot be updated without adding new APKs, and
     * adding new APKs will cause it to resume. This method supports patch
     * semantics.
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
    patch(params?: Params$Resource$Edits$Tracks$Patch, options?: MethodOptions):
        AxiosPromise<Schema$Track>;
    patch(
        params: Params$Resource$Edits$Tracks$Patch,
        options: MethodOptions|BodyResponseCallback<Schema$Track>,
        callback: BodyResponseCallback<Schema$Track>): void;
    patch(
        params: Params$Resource$Edits$Tracks$Patch,
        callback: BodyResponseCallback<Schema$Track>): void;
    patch(callback: BodyResponseCallback<Schema$Track>): void;
    patch(
        paramsOrCallback?: Params$Resource$Edits$Tracks$Patch|
        BodyResponseCallback<Schema$Track>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Track>,
        callback?: BodyResponseCallback<Schema$Track>):
        void|AxiosPromise<Schema$Track> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Edits$Tracks$Patch;
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/edits/{editId}/tracks/{track}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['packageName', 'editId', 'track'],
        pathParams: ['editId', 'packageName', 'track'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Track>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Track>(parameters);
      }
    }


    /**
     * androidpublisher.edits.tracks.update
     * @desc Updates the track configuration for the specified track type. When
     * halted, the rollout track cannot be updated without adding new APKs, and
     * adding new APKs will cause it to resume.
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
        options?: MethodOptions): AxiosPromise<Schema$Track>;
    update(
        params: Params$Resource$Edits$Tracks$Update,
        options: MethodOptions|BodyResponseCallback<Schema$Track>,
        callback: BodyResponseCallback<Schema$Track>): void;
    update(
        params: Params$Resource$Edits$Tracks$Update,
        callback: BodyResponseCallback<Schema$Track>): void;
    update(callback: BodyResponseCallback<Schema$Track>): void;
    update(
        paramsOrCallback?: Params$Resource$Edits$Tracks$Update|
        BodyResponseCallback<Schema$Track>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Track>,
        callback?: BodyResponseCallback<Schema$Track>):
        void|AxiosPromise<Schema$Track> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Edits$Tracks$Update;
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/edits/{editId}/tracks/{track}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['packageName', 'editId', 'track'],
        pathParams: ['editId', 'packageName', 'track'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Track>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Track>(parameters);
      }
    }
  }

  export interface Params$Resource$Edits$Tracks$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example,
     * "com.spiffygame".
     */
    packageName?: string;
    /**
     * The track to read or modify.
     */
    track?: string;
  }
  export interface Params$Resource$Edits$Tracks$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example,
     * "com.spiffygame".
     */
    packageName?: string;
  }
  export interface Params$Resource$Edits$Tracks$Patch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example,
     * "com.spiffygame".
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
  export interface Params$Resource$Edits$Tracks$Update {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Unique identifier for this edit.
     */
    editId?: string;
    /**
     * Unique identifier for the Android app that is being updated; for example,
     * "com.spiffygame".
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
    root: Androidpublisher;
    constructor(root: Androidpublisher) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
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
        options?: MethodOptions): AxiosPromise<void>;
    delete(
        params: Params$Resource$Inappproducts$Delete,
        options: MethodOptions|BodyResponseCallback<void>,
        callback: BodyResponseCallback<void>): void;
    delete(
        params: Params$Resource$Inappproducts$Delete,
        callback: BodyResponseCallback<void>): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
        paramsOrCallback?: Params$Resource$Inappproducts$Delete|
        BodyResponseCallback<void>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Inappproducts$Delete;
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/inappproducts/{sku}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['packageName', 'sku'],
        pathParams: ['packageName', 'sku'],
        context: this.getRoot()
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
    get(params?: Params$Resource$Inappproducts$Get,
        options?: MethodOptions): AxiosPromise<Schema$InAppProduct>;
    get(params: Params$Resource$Inappproducts$Get,
        options: MethodOptions|BodyResponseCallback<Schema$InAppProduct>,
        callback: BodyResponseCallback<Schema$InAppProduct>): void;
    get(params: Params$Resource$Inappproducts$Get,
        callback: BodyResponseCallback<Schema$InAppProduct>): void;
    get(callback: BodyResponseCallback<Schema$InAppProduct>): void;
    get(paramsOrCallback?: Params$Resource$Inappproducts$Get|
        BodyResponseCallback<Schema$InAppProduct>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$InAppProduct>,
        callback?: BodyResponseCallback<Schema$InAppProduct>):
        void|AxiosPromise<Schema$InAppProduct> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Inappproducts$Get;
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/inappproducts/{sku}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['packageName', 'sku'],
        pathParams: ['packageName', 'sku'],
        context: this.getRoot()
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
        options?: MethodOptions): AxiosPromise<Schema$InAppProduct>;
    insert(
        params: Params$Resource$Inappproducts$Insert,
        options: MethodOptions|BodyResponseCallback<Schema$InAppProduct>,
        callback: BodyResponseCallback<Schema$InAppProduct>): void;
    insert(
        params: Params$Resource$Inappproducts$Insert,
        callback: BodyResponseCallback<Schema$InAppProduct>): void;
    insert(callback: BodyResponseCallback<Schema$InAppProduct>): void;
    insert(
        paramsOrCallback?: Params$Resource$Inappproducts$Insert|
        BodyResponseCallback<Schema$InAppProduct>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$InAppProduct>,
        callback?: BodyResponseCallback<Schema$InAppProduct>):
        void|AxiosPromise<Schema$InAppProduct> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Inappproducts$Insert;
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/inappproducts')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['packageName'],
        pathParams: ['packageName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$InAppProduct>(parameters, callback);
      } else {
        return createAPIRequest<Schema$InAppProduct>(parameters);
      }
    }


    /**
     * androidpublisher.inappproducts.list
     * @desc List all the in-app products for an Android app, both subscriptions
     * and managed in-app products..
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
    list(params?: Params$Resource$Inappproducts$List, options?: MethodOptions):
        AxiosPromise<Schema$InappproductsListResponse>;
    list(
        params: Params$Resource$Inappproducts$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$InappproductsListResponse>,
        callback: BodyResponseCallback<Schema$InappproductsListResponse>): void;
    list(
        params: Params$Resource$Inappproducts$List,
        callback: BodyResponseCallback<Schema$InappproductsListResponse>): void;
    list(callback: BodyResponseCallback<Schema$InappproductsListResponse>):
        void;
    list(
        paramsOrCallback?: Params$Resource$Inappproducts$List|
        BodyResponseCallback<Schema$InappproductsListResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$InappproductsListResponse>,
        callback?: BodyResponseCallback<Schema$InappproductsListResponse>):
        void|AxiosPromise<Schema$InappproductsListResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Inappproducts$List;
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/inappproducts')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['packageName'],
        pathParams: ['packageName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$InappproductsListResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$InappproductsListResponse>(parameters);
      }
    }


    /**
     * androidpublisher.inappproducts.patch
     * @desc Updates the details of an in-app product. This method supports
     * patch semantics.
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
        options?: MethodOptions): AxiosPromise<Schema$InAppProduct>;
    patch(
        params: Params$Resource$Inappproducts$Patch,
        options: MethodOptions|BodyResponseCallback<Schema$InAppProduct>,
        callback: BodyResponseCallback<Schema$InAppProduct>): void;
    patch(
        params: Params$Resource$Inappproducts$Patch,
        callback: BodyResponseCallback<Schema$InAppProduct>): void;
    patch(callback: BodyResponseCallback<Schema$InAppProduct>): void;
    patch(
        paramsOrCallback?: Params$Resource$Inappproducts$Patch|
        BodyResponseCallback<Schema$InAppProduct>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$InAppProduct>,
        callback?: BodyResponseCallback<Schema$InAppProduct>):
        void|AxiosPromise<Schema$InAppProduct> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Inappproducts$Patch;
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/inappproducts/{sku}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['packageName', 'sku'],
        pathParams: ['packageName', 'sku'],
        context: this.getRoot()
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
        options?: MethodOptions): AxiosPromise<Schema$InAppProduct>;
    update(
        params: Params$Resource$Inappproducts$Update,
        options: MethodOptions|BodyResponseCallback<Schema$InAppProduct>,
        callback: BodyResponseCallback<Schema$InAppProduct>): void;
    update(
        params: Params$Resource$Inappproducts$Update,
        callback: BodyResponseCallback<Schema$InAppProduct>): void;
    update(callback: BodyResponseCallback<Schema$InAppProduct>): void;
    update(
        paramsOrCallback?: Params$Resource$Inappproducts$Update|
        BodyResponseCallback<Schema$InAppProduct>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$InAppProduct>,
        callback?: BodyResponseCallback<Schema$InAppProduct>):
        void|AxiosPromise<Schema$InAppProduct> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Inappproducts$Update;
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/inappproducts/{sku}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['packageName', 'sku'],
        pathParams: ['packageName', 'sku'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$InAppProduct>(parameters, callback);
      } else {
        return createAPIRequest<Schema$InAppProduct>(parameters);
      }
    }
  }

  export interface Params$Resource$Inappproducts$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Unique identifier for the Android app with the in-app product; for
     * example, "com.spiffygame".
     */
    packageName?: string;
    /**
     * Unique identifier for the in-app product.
     */
    sku?: string;
  }
  export interface Params$Resource$Inappproducts$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     *
     */
    packageName?: string;
    /**
     * Unique identifier for the in-app product.
     */
    sku?: string;
  }
  export interface Params$Resource$Inappproducts$Insert {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * If true the prices for all regions targeted by the parent app that don't
     * have a price specified for this in-app product will be auto converted to
     * the target currency based on the default price. Defaults to false.
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
  export interface Params$Resource$Inappproducts$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     *
     */
    maxResults?: number;
    /**
     * Unique identifier for the Android app with in-app products; for example,
     * "com.spiffygame".
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
  export interface Params$Resource$Inappproducts$Patch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * If true the prices for all regions targeted by the parent app that don't
     * have a price specified for this in-app product will be auto converted to
     * the target currency based on the default price. Defaults to false.
     */
    autoConvertMissingPrices?: boolean;
    /**
     * Unique identifier for the Android app with the in-app product; for
     * example, "com.spiffygame".
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
  export interface Params$Resource$Inappproducts$Update {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * If true the prices for all regions targeted by the parent app that don't
     * have a price specified for this in-app product will be auto converted to
     * the target currency based on the default price. Defaults to false.
     */
    autoConvertMissingPrices?: boolean;
    /**
     * Unique identifier for the Android app with the in-app product; for
     * example, "com.spiffygame".
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


  export class Resource$Purchases {
    root: Androidpublisher;
    products: Resource$Purchases$Products;
    subscriptions: Resource$Purchases$Subscriptions;
    voidedpurchases: Resource$Purchases$Voidedpurchases;
    constructor(root: Androidpublisher) {
      this.root = root;
      this.getRoot.bind(this);
      this.products = new Resource$Purchases$Products(root);
      this.subscriptions = new Resource$Purchases$Subscriptions(root);
      this.voidedpurchases = new Resource$Purchases$Voidedpurchases(root);
    }

    getRoot() {
      return this.root;
    }
  }


  export class Resource$Purchases$Products {
    root: Androidpublisher;
    constructor(root: Androidpublisher) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
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
    get(params?: Params$Resource$Purchases$Products$Get,
        options?: MethodOptions): AxiosPromise<Schema$ProductPurchase>;
    get(params: Params$Resource$Purchases$Products$Get,
        options: MethodOptions|BodyResponseCallback<Schema$ProductPurchase>,
        callback: BodyResponseCallback<Schema$ProductPurchase>): void;
    get(params: Params$Resource$Purchases$Products$Get,
        callback: BodyResponseCallback<Schema$ProductPurchase>): void;
    get(callback: BodyResponseCallback<Schema$ProductPurchase>): void;
    get(paramsOrCallback?: Params$Resource$Purchases$Products$Get|
        BodyResponseCallback<Schema$ProductPurchase>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ProductPurchase>,
        callback?: BodyResponseCallback<Schema$ProductPurchase>):
        void|AxiosPromise<Schema$ProductPurchase> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Purchases$Products$Get;
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/purchases/products/{productId}/tokens/{token}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['packageName', 'productId', 'token'],
        pathParams: ['packageName', 'productId', 'token'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ProductPurchase>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ProductPurchase>(parameters);
      }
    }
  }

  export interface Params$Resource$Purchases$Products$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The package name of the application the inapp product was sold in (for
     * example, 'com.some.thing').
     */
    packageName?: string;
    /**
     * The inapp product SKU (for example, 'com.some.thing.inapp1').
     */
    productId?: string;
    /**
     * The token provided to the user's device when the inapp product was
     * purchased.
     */
    token?: string;
  }


  export class Resource$Purchases$Subscriptions {
    root: Androidpublisher;
    constructor(root: Androidpublisher) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * androidpublisher.purchases.subscriptions.cancel
     * @desc Cancels a user's subscription purchase. The subscription remains
     * valid until its expiration time.
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
        options?: MethodOptions): AxiosPromise<void>;
    cancel(
        params: Params$Resource$Purchases$Subscriptions$Cancel,
        options: MethodOptions|BodyResponseCallback<void>,
        callback: BodyResponseCallback<void>): void;
    cancel(
        params: Params$Resource$Purchases$Subscriptions$Cancel,
        callback: BodyResponseCallback<void>): void;
    cancel(callback: BodyResponseCallback<void>): void;
    cancel(
        paramsOrCallback?: Params$Resource$Purchases$Subscriptions$Cancel|
        BodyResponseCallback<void>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Purchases$Subscriptions$Cancel;
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:cancel')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['packageName', 'subscriptionId', 'token'],
        pathParams: ['packageName', 'subscriptionId', 'token'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }


    /**
     * androidpublisher.purchases.subscriptions.defer
     * @desc Defers a user's subscription purchase until a specified future
     * expiration time.
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
        options?: MethodOptions):
        AxiosPromise<Schema$SubscriptionPurchasesDeferResponse>;
    defer(
        params: Params$Resource$Purchases$Subscriptions$Defer,
        options: MethodOptions|
        BodyResponseCallback<Schema$SubscriptionPurchasesDeferResponse>,
        callback:
            BodyResponseCallback<Schema$SubscriptionPurchasesDeferResponse>):
        void;
    defer(
        params: Params$Resource$Purchases$Subscriptions$Defer,
        callback:
            BodyResponseCallback<Schema$SubscriptionPurchasesDeferResponse>):
        void;
    defer(callback:
              BodyResponseCallback<Schema$SubscriptionPurchasesDeferResponse>):
        void;
    defer(
        paramsOrCallback?: Params$Resource$Purchases$Subscriptions$Defer|
        BodyResponseCallback<Schema$SubscriptionPurchasesDeferResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$SubscriptionPurchasesDeferResponse>,
        callback?:
            BodyResponseCallback<Schema$SubscriptionPurchasesDeferResponse>):
        void|AxiosPromise<Schema$SubscriptionPurchasesDeferResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Purchases$Subscriptions$Defer;
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:defer')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['packageName', 'subscriptionId', 'token'],
        pathParams: ['packageName', 'subscriptionId', 'token'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$SubscriptionPurchasesDeferResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$SubscriptionPurchasesDeferResponse>(
            parameters);
      }
    }


    /**
     * androidpublisher.purchases.subscriptions.get
     * @desc Checks whether a user's subscription purchase is valid and returns
     * its expiry time.
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
    get(params?: Params$Resource$Purchases$Subscriptions$Get,
        options?: MethodOptions): AxiosPromise<Schema$SubscriptionPurchase>;
    get(params: Params$Resource$Purchases$Subscriptions$Get,
        options: MethodOptions|
        BodyResponseCallback<Schema$SubscriptionPurchase>,
        callback: BodyResponseCallback<Schema$SubscriptionPurchase>): void;
    get(params: Params$Resource$Purchases$Subscriptions$Get,
        callback: BodyResponseCallback<Schema$SubscriptionPurchase>): void;
    get(callback: BodyResponseCallback<Schema$SubscriptionPurchase>): void;
    get(paramsOrCallback?: Params$Resource$Purchases$Subscriptions$Get|
        BodyResponseCallback<Schema$SubscriptionPurchase>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$SubscriptionPurchase>,
        callback?: BodyResponseCallback<Schema$SubscriptionPurchase>):
        void|AxiosPromise<Schema$SubscriptionPurchase> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Purchases$Subscriptions$Get;
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['packageName', 'subscriptionId', 'token'],
        pathParams: ['packageName', 'subscriptionId', 'token'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$SubscriptionPurchase>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SubscriptionPurchase>(parameters);
      }
    }


    /**
     * androidpublisher.purchases.subscriptions.refund
     * @desc Refunds a user's subscription purchase, but the subscription
     * remains valid until its expiration time and it will continue to recur.
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
        options?: MethodOptions): AxiosPromise<void>;
    refund(
        params: Params$Resource$Purchases$Subscriptions$Refund,
        options: MethodOptions|BodyResponseCallback<void>,
        callback: BodyResponseCallback<void>): void;
    refund(
        params: Params$Resource$Purchases$Subscriptions$Refund,
        callback: BodyResponseCallback<void>): void;
    refund(callback: BodyResponseCallback<void>): void;
    refund(
        paramsOrCallback?: Params$Resource$Purchases$Subscriptions$Refund|
        BodyResponseCallback<void>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Purchases$Subscriptions$Refund;
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:refund')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['packageName', 'subscriptionId', 'token'],
        pathParams: ['packageName', 'subscriptionId', 'token'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }


    /**
     * androidpublisher.purchases.subscriptions.revoke
     * @desc Refunds and immediately revokes a user's subscription purchase.
     * Access to the subscription will be terminated immediately and it will
     * stop recurring.
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
        options?: MethodOptions): AxiosPromise<void>;
    revoke(
        params: Params$Resource$Purchases$Subscriptions$Revoke,
        options: MethodOptions|BodyResponseCallback<void>,
        callback: BodyResponseCallback<void>): void;
    revoke(
        params: Params$Resource$Purchases$Subscriptions$Revoke,
        callback: BodyResponseCallback<void>): void;
    revoke(callback: BodyResponseCallback<void>): void;
    revoke(
        paramsOrCallback?: Params$Resource$Purchases$Subscriptions$Revoke|
        BodyResponseCallback<void>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Purchases$Subscriptions$Revoke;
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:revoke')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['packageName', 'subscriptionId', 'token'],
        pathParams: ['packageName', 'subscriptionId', 'token'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Purchases$Subscriptions$Cancel {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The package name of the application for which this subscription was
     * purchased (for example, 'com.some.thing').
     */
    packageName?: string;
    /**
     * The purchased subscription ID (for example, 'monthly001').
     */
    subscriptionId?: string;
    /**
     * The token provided to the user's device when the subscription was
     * purchased.
     */
    token?: string;
  }
  export interface Params$Resource$Purchases$Subscriptions$Defer {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The package name of the application for which this subscription was
     * purchased (for example, 'com.some.thing').
     */
    packageName?: string;
    /**
     * The purchased subscription ID (for example, 'monthly001').
     */
    subscriptionId?: string;
    /**
     * The token provided to the user's device when the subscription was
     * purchased.
     */
    token?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SubscriptionPurchasesDeferRequest;
  }
  export interface Params$Resource$Purchases$Subscriptions$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The package name of the application for which this subscription was
     * purchased (for example, 'com.some.thing').
     */
    packageName?: string;
    /**
     * The purchased subscription ID (for example, 'monthly001').
     */
    subscriptionId?: string;
    /**
     * The token provided to the user's device when the subscription was
     * purchased.
     */
    token?: string;
  }
  export interface Params$Resource$Purchases$Subscriptions$Refund {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The package name of the application for which this subscription was
     * purchased (for example, 'com.some.thing').
     */
    packageName?: string;
    /**
     * The purchased subscription ID (for example, 'monthly001').
     */
    subscriptionId?: string;
    /**
     * The token provided to the user's device when the subscription was
     * purchased.
     */
    token?: string;
  }
  export interface Params$Resource$Purchases$Subscriptions$Revoke {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The package name of the application for which this subscription was
     * purchased (for example, 'com.some.thing').
     */
    packageName?: string;
    /**
     * The purchased subscription ID (for example, 'monthly001').
     */
    subscriptionId?: string;
    /**
     * The token provided to the user's device when the subscription was
     * purchased.
     */
    token?: string;
  }


  export class Resource$Purchases$Voidedpurchases {
    root: Androidpublisher;
    constructor(root: Androidpublisher) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * androidpublisher.purchases.voidedpurchases.list
     * @desc Lists the purchases that were canceled, refunded or charged-back.
     * @alias androidpublisher.purchases.voidedpurchases.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.endTime The time, in milliseconds since the Epoch, of the newest voided in-app product purchase that you want to see in the response. The value of this parameter cannot be greater than the current time and is ignored if a pagination token is set. Default value is current time. Note: This filter is applied on the time at which the record is seen as voided by our systems and not the actual voided time returned in the response.
     * @param {integer=} params.maxResults
     * @param {string} params.packageName The package name of the application for which voided purchases need to be returned (for example, 'com.some.thing').
     * @param {integer=} params.startIndex
     * @param {string=} params.startTime The time, in milliseconds since the Epoch, of the oldest voided in-app product purchase that you want to see in the response. The value of this parameter cannot be older than 30 days and is ignored if a pagination token is set. Default value is current time minus 30 days. Note: This filter is applied on the time at which the record is seen as voided by our systems and not the actual voided time returned in the response.
     * @param {string=} params.token
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Purchases$Voidedpurchases$List,
        options?: MethodOptions):
        AxiosPromise<Schema$VoidedPurchasesListResponse>;
    list(
        params: Params$Resource$Purchases$Voidedpurchases$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$VoidedPurchasesListResponse>,
        callback: BodyResponseCallback<Schema$VoidedPurchasesListResponse>):
        void;
    list(
        params: Params$Resource$Purchases$Voidedpurchases$List,
        callback: BodyResponseCallback<Schema$VoidedPurchasesListResponse>):
        void;
    list(callback: BodyResponseCallback<Schema$VoidedPurchasesListResponse>):
        void;
    list(
        paramsOrCallback?: Params$Resource$Purchases$Voidedpurchases$List|
        BodyResponseCallback<Schema$VoidedPurchasesListResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$VoidedPurchasesListResponse>,
        callback?: BodyResponseCallback<Schema$VoidedPurchasesListResponse>):
        void|AxiosPromise<Schema$VoidedPurchasesListResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Purchases$Voidedpurchases$List;
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/purchases/voidedpurchases')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['packageName'],
        pathParams: ['packageName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$VoidedPurchasesListResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$VoidedPurchasesListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Purchases$Voidedpurchases$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The time, in milliseconds since the Epoch, of the newest voided in-app
     * product purchase that you want to see in the response. The value of this
     * parameter cannot be greater than the current time and is ignored if a
     * pagination token is set. Default value is current time. Note: This filter
     * is applied on the time at which the record is seen as voided by our
     * systems and not the actual voided time returned in the response.
     */
    endTime?: string;
    /**
     *
     */
    maxResults?: number;
    /**
     * The package name of the application for which voided purchases need to be
     * returned (for example, 'com.some.thing').
     */
    packageName?: string;
    /**
     *
     */
    startIndex?: number;
    /**
     * The time, in milliseconds since the Epoch, of the oldest voided in-app
     * product purchase that you want to see in the response. The value of this
     * parameter cannot be older than 30 days and is ignored if a pagination
     * token is set. Default value is current time minus 30 days. Note: This
     * filter is applied on the time at which the record is seen as voided by
     * our systems and not the actual voided time returned in the response.
     */
    startTime?: string;
    /**
     *
     */
    token?: string;
  }



  export class Resource$Reviews {
    root: Androidpublisher;
    constructor(root: Androidpublisher) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
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
    get(params?: Params$Resource$Reviews$Get,
        options?: MethodOptions): AxiosPromise<Schema$Review>;
    get(params: Params$Resource$Reviews$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Review>,
        callback: BodyResponseCallback<Schema$Review>): void;
    get(params: Params$Resource$Reviews$Get,
        callback: BodyResponseCallback<Schema$Review>): void;
    get(callback: BodyResponseCallback<Schema$Review>): void;
    get(paramsOrCallback?: Params$Resource$Reviews$Get|
        BodyResponseCallback<Schema$Review>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Review>,
        callback?: BodyResponseCallback<Schema$Review>):
        void|AxiosPromise<Schema$Review> {
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/reviews/{reviewId}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['packageName', 'reviewId'],
        pathParams: ['packageName', 'reviewId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Review>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Review>(parameters);
      }
    }


    /**
     * androidpublisher.reviews.list
     * @desc Returns a list of reviews. Only reviews from last week will be
     * returned.
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
    list(params?: Params$Resource$Reviews$List, options?: MethodOptions):
        AxiosPromise<Schema$ReviewsListResponse>;
    list(
        params: Params$Resource$Reviews$List,
        options: MethodOptions|BodyResponseCallback<Schema$ReviewsListResponse>,
        callback: BodyResponseCallback<Schema$ReviewsListResponse>): void;
    list(
        params: Params$Resource$Reviews$List,
        callback: BodyResponseCallback<Schema$ReviewsListResponse>): void;
    list(callback: BodyResponseCallback<Schema$ReviewsListResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Reviews$List|
        BodyResponseCallback<Schema$ReviewsListResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ReviewsListResponse>,
        callback?: BodyResponseCallback<Schema$ReviewsListResponse>):
        void|AxiosPromise<Schema$ReviewsListResponse> {
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
              url: (rootUrl +
                    '/androidpublisher/v2/applications/{packageName}/reviews')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['packageName'],
        pathParams: ['packageName'],
        context: this.getRoot()
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
    reply(params?: Params$Resource$Reviews$Reply, options?: MethodOptions):
        AxiosPromise<Schema$ReviewsReplyResponse>;
    reply(
        params: Params$Resource$Reviews$Reply,
        options: MethodOptions|
        BodyResponseCallback<Schema$ReviewsReplyResponse>,
        callback: BodyResponseCallback<Schema$ReviewsReplyResponse>): void;
    reply(
        params: Params$Resource$Reviews$Reply,
        callback: BodyResponseCallback<Schema$ReviewsReplyResponse>): void;
    reply(callback: BodyResponseCallback<Schema$ReviewsReplyResponse>): void;
    reply(
        paramsOrCallback?: Params$Resource$Reviews$Reply|
        BodyResponseCallback<Schema$ReviewsReplyResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ReviewsReplyResponse>,
        callback?: BodyResponseCallback<Schema$ReviewsReplyResponse>):
        void|AxiosPromise<Schema$ReviewsReplyResponse> {
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
              url:
                  (rootUrl +
                   '/androidpublisher/v2/applications/{packageName}/reviews/{reviewId}:reply')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['packageName', 'reviewId'],
        pathParams: ['packageName', 'reviewId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ReviewsReplyResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ReviewsReplyResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Reviews$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Unique identifier for the Android app for which we want reviews; for
     * example, "com.spiffygame".
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
  export interface Params$Resource$Reviews$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     *
     */
    maxResults?: number;
    /**
     * Unique identifier for the Android app for which we want reviews; for
     * example, "com.spiffygame".
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
  export interface Params$Resource$Reviews$Reply {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Unique identifier for the Android app for which we want reviews; for
     * example, "com.spiffygame".
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
