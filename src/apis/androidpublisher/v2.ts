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
 * Google Play Developer API
 *
 * Lets Android application developers access their Google Play accounts.
 *
 * @example
 * const google = require('googleapis');
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
  google: GoogleApis;
  root = this;

  edits: Resource$Edits;
  inappproducts: Resource$Inappproducts;
  purchases: Resource$Purchases;
  reviews: Resource$Reviews;

  constructor(options: GlobalOptions, google: GoogleApis) {
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
  binary: Schema$ApkBinary;
  /**
   * The version code of the APK, as specified in the APK&#39;s manifest file.
   */
  versionCode: number;
}
/**
 * Represents the binary payload of an APK.
 */
export interface Schema$ApkBinary {
  /**
   * A sha1 hash of the APK payload, encoded as a hex string and matching the
   * output of the sha1sum command.
   */
  sha1: string;
  /**
   * A sha256 hash of the APK payload, encoded as a hex string and matching the
   * output of the sha256sum command.
   */
  sha256: string;
}
export interface Schema$ApkListing {
  /**
   * The language code, in BCP 47 format (eg &quot;en-US&quot;).
   */
  language: string;
  /**
   * Describe what&#39;s new in your APK.
   */
  recentChanges: string;
}
export interface Schema$ApkListingsListResponse {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;androidpublisher#apkListingsListResponse&quot;.
   */
  kind: string;
  listings: Schema$ApkListing[];
}
export interface Schema$ApksAddExternallyHostedRequest {
  /**
   * The definition of the externally-hosted APK and where it is located.
   */
  externallyHostedApk: Schema$ExternallyHostedApk;
}
export interface Schema$ApksAddExternallyHostedResponse {
  /**
   * The definition of the externally-hosted APK and where it is located.
   */
  externallyHostedApk: Schema$ExternallyHostedApk;
}
export interface Schema$ApksListResponse {
  apks: Schema$Apk[];
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;androidpublisher#apksListResponse&quot;.
   */
  kind: string;
}
export interface Schema$AppDetails {
  /**
   * The user-visible support email for this app.
   */
  contactEmail: string;
  /**
   * The user-visible support telephone number for this app.
   */
  contactPhone: string;
  /**
   * The user-visible website for this app.
   */
  contactWebsite: string;
  /**
   * Default language code, in BCP 47 format (eg &quot;en-US&quot;).
   */
  defaultLanguage: string;
}
/**
 * Represents an edit of an app. An edit allows clients to make multiple changes
 * before committing them in one operation.
 */
export interface Schema$AppEdit {
  /**
   * The time at which the edit will expire and will be no longer valid for use
   * in any subsequent API calls (encoded as seconds since the Epoch).
   */
  expiryTimeSeconds: string;
  /**
   * The ID of the edit that can be used in subsequent API calls.
   */
  id: string;
}
export interface Schema$Comment {
  /**
   * A comment from a developer.
   */
  developerComment: Schema$DeveloperComment;
  /**
   * A comment from a user.
   */
  userComment: Schema$UserComment;
}
/**
 * Represents a deobfuscation file.
 */
export interface Schema$DeobfuscationFile {
  /**
   * The type of the deobfuscation file.
   */
  symbolType: string;
}
export interface Schema$DeobfuscationFilesUploadResponse {
  deobfuscationFile: Schema$DeobfuscationFile;
}
export interface Schema$DeveloperComment {
  /**
   * The last time at which this comment was updated.
   */
  lastModified: Schema$Timestamp;
  /**
   * The content of the comment, i.e. reply body.
   */
  text: string;
}
export interface Schema$DeviceMetadata {
  /**
   * Device CPU make e.g. &quot;Qualcomm&quot;
   */
  cpuMake: string;
  /**
   * Device CPU model e.g. &quot;MSM8974&quot;
   */
  cpuModel: string;
  /**
   * Device class (e.g. tablet)
   */
  deviceClass: string;
  /**
   * OpenGL version
   */
  glEsVersion: number;
  /**
   * Device manufacturer (e.g. Motorola)
   */
  manufacturer: string;
  /**
   * Comma separated list of native platforms (e.g. &quot;arm&quot;,
   * &quot;arm7&quot;)
   */
  nativePlatform: string;
  /**
   * Device model name (e.g. Droid)
   */
  productName: string;
  /**
   * Device RAM in Megabytes e.g. &quot;2048&quot;
   */
  ramMb: number;
  /**
   * Screen density in DPI
   */
  screenDensityDpi: number;
  /**
   * Screen height in pixels
   */
  screenHeightPx: number;
  /**
   * Screen width in pixels
   */
  screenWidthPx: number;
}
export interface Schema$ExpansionFile {
  /**
   * If set this field indicates that this APK has an Expansion File uploaded to
   * it: this APK does not reference another APK&#39;s Expansion File. The
   * field&#39;s value is the size of the uploaded Expansion File in bytes.
   */
  fileSize: string;
  /**
   * If set this APK&#39;s Expansion File references another APK&#39;s Expansion
   * File. The file_size field will not be set.
   */
  referencesVersion: number;
}
export interface Schema$ExpansionFilesUploadResponse {
  expansionFile: Schema$ExpansionFile;
}
/**
 * Defines an APK available for this application that is hosted externally and
 * not uploaded to Google Play. This function is only available to enterprises
 * who are using Google Play for Work, and whos application is restricted to the
 * enterprise private channel
 */
export interface Schema$ExternallyHostedApk {
  /**
   * The application label.
   */
  applicationLabel: string;
  /**
   * A certificate (or array of certificates if a certificate-chain is used)
   * used to signed this APK, represented as a base64 encoded byte array.
   */
  certificateBase64s: string[];
  /**
   * The URL at which the APK is hosted. This must be an https URL.
   */
  externallyHostedUrl: string;
  /**
   * The SHA1 checksum of this APK, represented as a base64 encoded byte array.
   */
  fileSha1Base64: string;
  /**
   * The SHA256 checksum of this APK, represented as a base64 encoded byte
   * array.
   */
  fileSha256Base64: string;
  /**
   * The file size in bytes of this APK.
   */
  fileSize: string;
  /**
   * The icon image from the APK, as a base64 encoded byte array.
   */
  iconBase64: string;
  /**
   * The maximum SDK supported by this APK (optional).
   */
  maximumSdk: number;
  /**
   * The minimum SDK targeted by this APK.
   */
  minimumSdk: number;
  /**
   * The native code environments supported by this APK (optional).
   */
  nativeCodes: string[];
  /**
   * The package name.
   */
  packageName: string;
  /**
   * The features required by this APK (optional).
   */
  usesFeatures: string[];
  /**
   * The permissions requested by this APK.
   */
  usesPermissions: Schema$ExternallyHostedApkUsesPermission[];
  /**
   * The version code of this APK.
   */
  versionCode: number;
  /**
   * The version name of this APK.
   */
  versionName: string;
}
/**
 * A permission used by this APK.
 */
export interface Schema$ExternallyHostedApkUsesPermission {
  /**
   * Optionally, the maximum SDK version for which the permission is required.
   */
  maxSdkVersion: number;
  /**
   * The name of the permission requested.
   */
  name: string;
}
export interface Schema$Image {
  /**
   * A unique id representing this image.
   */
  id: string;
  /**
   * A sha1 hash of the image that was uploaded.
   */
  sha1: string;
  /**
   * A URL that will serve a preview of the image.
   */
  url: string;
}
export interface Schema$ImagesDeleteAllResponse { deleted: Schema$Image[]; }
export interface Schema$ImagesListResponse { images: Schema$Image[]; }
export interface Schema$ImagesUploadResponse { image: Schema$Image; }
export interface Schema$InAppProduct {
  /**
   * The default language of the localized data, as defined by BCP 47. e.g.
   * &quot;en-US&quot;, &quot;en-GB&quot;.
   */
  defaultLanguage: string;
  /**
   * Default price cannot be zero. In-app products can never be free. Default
   * price is always in the developer&#39;s Checkout merchant currency.
   */
  defaultPrice: Schema$Price;
  /**
   * List of localized title and description data.
   */
  listings: any;
  /**
   * The package name of the parent app.
   */
  packageName: string;
  /**
   * Prices per buyer region. None of these prices should be zero. In-app
   * products can never be free.
   */
  prices: any;
  /**
   * Purchase type enum value. Unmodifiable after creation.
   */
  purchaseType: string;
  /**
   * Definition of a season for a seasonal subscription. Can be defined only for
   * yearly subscriptions.
   */
  season: Schema$Season;
  /**
   * The stock-keeping-unit (SKU) of the product, unique within an app.
   */
  sku: string;
  status: string;
  /**
   * Subscription period, specified in ISO 8601 format. Acceptable values are
   * &quot;P1W&quot; (one week), &quot;P1M&quot; (one month), &quot;P3M&quot;
   * (three months), &quot;P6M&quot; (six months), and &quot;P1Y&quot; (one
   * year).
   */
  subscriptionPeriod: string;
  /**
   * Trial period, specified in ISO 8601 format. Acceptable values are anything
   * between &quot;P7D&quot; (seven days) and &quot;P999D&quot; (999 days).
   * Seasonal subscriptions cannot have a trial period.
   */
  trialPeriod: string;
}
export interface Schema$InAppProductListing {
  description: string;
  title: string;
}
export interface Schema$InappproductsListResponse {
  inappproduct: Schema$InAppProduct[];
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;androidpublisher#inappproductsListResponse&quot;.
   */
  kind: string;
  pageInfo: Schema$PageInfo;
  tokenPagination: Schema$TokenPagination;
}
export interface Schema$Listing {
  /**
   * Full description of the app; this may be up to 4000 characters in length.
   */
  fullDescription: string;
  /**
   * Language localization code (for example, &quot;de-AT&quot; for Austrian
   * German).
   */
  language: string;
  /**
   * Short description of the app (previously known as promo text); this may be
   * up to 80 characters in length.
   */
  shortDescription: string;
  /**
   * App&#39;s localized title.
   */
  title: string;
  /**
   * URL of a promotional YouTube video for the app.
   */
  video: string;
}
export interface Schema$ListingsListResponse {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;androidpublisher#listingsListResponse&quot;.
   */
  kind: string;
  listings: Schema$Listing[];
}
export interface Schema$MonthDay {
  /**
   * Day of a month, value in [1, 31] range. Valid range depends on the
   * specified month.
   */
  day: number;
  /**
   * Month of a year. e.g. 1 = JAN, 2 = FEB etc.
   */
  month: number;
}
export interface Schema$PageInfo {
  resultPerPage: number;
  startIndex: number;
  totalResults: number;
}
export interface Schema$Price {
  /**
   * 3 letter Currency code, as defined by ISO 4217.
   */
  currency: string;
  /**
   * The price in millionths of the currency base unit represented as a string.
   */
  priceMicros: string;
}
/**
 * A ProductPurchase resource indicates the status of a user&#39;s inapp product
 * purchase.
 */
export interface Schema$ProductPurchase {
  /**
   * The consumption state of the inapp product. Possible values are:   - Yet to
   * be consumed  - Consumed
   */
  consumptionState: number;
  /**
   * A developer-specified string that contains supplemental information about
   * an order.
   */
  developerPayload: string;
  /**
   * This kind represents an inappPurchase object in the androidpublisher
   * service.
   */
  kind: string;
  /**
   * The order id associated with the purchase of the inapp product.
   */
  orderId: string;
  /**
   * The purchase state of the order. Possible values are:   - Purchased  -
   * Canceled
   */
  purchaseState: number;
  /**
   * The time the product was purchased, in milliseconds since the epoch (Jan 1,
   * 1970).
   */
  purchaseTimeMillis: string;
  /**
   * The type of purchase of the inapp product. This field is only set if this
   * purchase was not made using the standard in-app billing flow. Possible
   * values are:   - Test (i.e. purchased from a license testing account)  -
   * Promo (i.e. purchased using a promo code)
   */
  purchaseType: number;
}
export interface Schema$Prorate {
  /**
   * Default price cannot be zero and must be less than the full subscription
   * price. Default price is always in the developer&#39;s Checkout merchant
   * currency. Targeted countries have their prices set automatically based on
   * the default_price.
   */
  defaultPrice: Schema$Price;
  /**
   * Defines the first day on which the price takes effect.
   */
  start: Schema$MonthDay;
}
export interface Schema$Review {
  /**
   * The name of the user who wrote the review.
   */
  authorName: string;
  /**
   * A repeated field containing comments for the review.
   */
  comments: Schema$Comment[];
  /**
   * Unique identifier for this review.
   */
  reviewId: string;
}
export interface Schema$ReviewReplyResult {
  /**
   * The time at which the reply took effect.
   */
  lastEdited: Schema$Timestamp;
  /**
   * The reply text that was applied.
   */
  replyText: string;
}
export interface Schema$ReviewsListResponse {
  pageInfo: Schema$PageInfo;
  reviews: Schema$Review[];
  tokenPagination: Schema$TokenPagination;
}
export interface Schema$ReviewsReplyRequest {
  /**
   * The text to set as the reply. Replies of more than approximately 350
   * characters will be rejected. HTML tags will be stripped.
   */
  replyText: string;
}
export interface Schema$ReviewsReplyResponse {
  result: Schema$ReviewReplyResult;
}
export interface Schema$Season {
  /**
   * Inclusive end date of the recurrence period.
   */
  end: Schema$MonthDay;
  /**
   * Optionally present list of prorations for the season. Each proration is a
   * one-off discounted entry into a subscription. Each proration contains the
   * first date on which the discount is available and the new pricing
   * information.
   */
  prorations: Schema$Prorate[];
  /**
   * Inclusive start date of the recurrence period.
   */
  start: Schema$MonthDay;
}
/**
 * A SubscriptionDeferralInfo contains the data needed to defer a subscription
 * purchase to a future expiry time.
 */
export interface Schema$SubscriptionDeferralInfo {
  /**
   * The desired next expiry time to assign to the subscription, in milliseconds
   * since the Epoch. The given time must be later/greater than the current
   * expiry time for the subscription.
   */
  desiredExpiryTimeMillis: string;
  /**
   * The expected expiry time for the subscription. If the current expiry time
   * for the subscription is not the value specified here, the deferral will not
   * occur.
   */
  expectedExpiryTimeMillis: string;
}
/**
 * A SubscriptionPurchase resource indicates the status of a user&#39;s
 * subscription purchase.
 */
export interface Schema$SubscriptionPurchase {
  /**
   * Whether the subscription will automatically be renewed when it reaches its
   * current expiry time.
   */
  autoRenewing: boolean;
  /**
   * The reason why a subscription was canceled or is not auto-renewing.
   * Possible values are:   - User canceled the subscription  - Subscription was
   * canceled by the system, for example because of a billing problem  -
   * Subscription was replaced with a new subscription  - Subscription was
   * canceled by the developer
   */
  cancelReason: number;
  /**
   * ISO 3166-1 alpha-2 billing country/region code of the user at the time the
   * subscription was granted.
   */
  countryCode: string;
  /**
   * A developer-specified string that contains supplemental information about
   * an order.
   */
  developerPayload: string;
  /**
   * The email address of the user when the subscription was purchased. Only
   * present for purchases made with &#39;Subscribe with Google&#39;.
   */
  emailAddress: string;
  /**
   * Time at which the subscription will expire, in milliseconds since the
   * Epoch.
   */
  expiryTimeMillis: string;
  /**
   * The family name of the user when the subscription was purchased. Only
   * present for purchases made with &#39;Subscribe with Google&#39;.
   */
  familyName: string;
  /**
   * The given name of the user when the subscription was purchased. Only
   * present for purchases made with &#39;Subscribe with Google&#39;.
   */
  givenName: string;
  /**
   * This kind represents a subscriptionPurchase object in the androidpublisher
   * service.
   */
  kind: string;
  /**
   * The purchase token of the originating purchase if this subscription is one
   * of the following:   - Re-signup of a canceled but non-lapsed subscription
   * - Upgrade/downgrade from a previous subscription  For example, suppose a
   * user originally signs up and you receive purchase token X, then the user
   * cancels and goes through the resignup flow (before their subscription
   * lapses) and you receive purchase token Y, and finally the user upgrades
   * their subscription and you receive purchase token Z. If you call this API
   * with purchase token Z, this field will be set to Y. If you call this API
   * with purchase token Y, this field will be set to X. If you call this API
   * with purchase token X, this field will not be set.
   */
  linkedPurchaseToken: string;
  /**
   * The order id of the latest recurring order associated with the purchase of
   * the subscription.
   */
  orderId: string;
  /**
   * The payment state of the subscription. Possible values are:   - Payment
   * pending  - Payment received  - Free trial
   */
  paymentState: number;
  /**
   * Price of the subscription, not including tax. Price is expressed in
   * micro-units, where 1,000,000 micro-units represents one unit of the
   * currency. For example, if the subscription price is €1.99,
   * price_amount_micros is 1990000.
   */
  priceAmountMicros: string;
  /**
   * ISO 4217 currency code for the subscription price. For example, if the
   * price is specified in British pounds sterling, price_currency_code is
   * &quot;GBP&quot;.
   */
  priceCurrencyCode: string;
  /**
   * The profile id of the user when the subscription was purchased. Only
   * present for purchases made with &#39;Subscribe with Google&#39;.
   */
  profileId: string;
  /**
   * The profile name of the user when the subscription was purchased. Only
   * present for purchases made with &#39;Subscribe with Google&#39;.
   */
  profileName: string;
  /**
   * The type of purchase of the subscription. This field is only set if this
   * purchase was not made using the standard in-app billing flow. Possible
   * values are:   - Test (i.e. purchased from a license testing account)
   */
  purchaseType: number;
  /**
   * Time at which the subscription was granted, in milliseconds since the
   * Epoch.
   */
  startTimeMillis: string;
  /**
   * The time at which the subscription was canceled by the user, in
   * milliseconds since the epoch. Only present if cancelReason is 0.
   */
  userCancellationTimeMillis: string;
}
export interface Schema$SubscriptionPurchasesDeferRequest {
  /**
   * The information about the new desired expiry time for the subscription.
   */
  deferralInfo: Schema$SubscriptionDeferralInfo;
}
export interface Schema$SubscriptionPurchasesDeferResponse {
  /**
   * The new expiry time for the subscription in milliseconds since the Epoch.
   */
  newExpiryTimeMillis: string;
}
export interface Schema$Testers {
  googleGroups: string[];
  googlePlusCommunities: string[];
}
export interface Schema$Timestamp {
  nanos: number;
  seconds: string;
}
export interface Schema$TokenPagination {
  nextPageToken: string;
  previousPageToken: string;
}
export interface Schema$Track {
  /**
   * Identifier for this track. One of &quot;alpha&quot;, &quot;beta&quot;,
   * &quot;production&quot;, &quot;rollout&quot; or &quot;internal&quot;.
   */
  track: string;
  userFraction: number;
  versionCodes: number[];
}
export interface Schema$TracksListResponse {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;androidpublisher#tracksListResponse&quot;.
   */
  kind: string;
  tracks: Schema$Track[];
}
export interface Schema$UserComment {
  /**
   * Integer Android SDK version of the user&#39;s device at the time the review
   * was written, e.g. 23 is Marshmallow. May be absent.
   */
  androidOsVersion: number;
  /**
   * Integer version code of the app as installed at the time the review was
   * written. May be absent.
   */
  appVersionCode: number;
  /**
   * String version name of the app as installed at the time the review was
   * written. May be absent.
   */
  appVersionName: string;
  /**
   * Codename for the reviewer&#39;s device, e.g. klte, flounder. May be absent.
   */
  device: string;
  /**
   * Some information about the characteristics of the user&#39;s device
   */
  deviceMetadata: Schema$DeviceMetadata;
  /**
   * The last time at which this comment was updated.
   */
  lastModified: Schema$Timestamp;
  /**
   * Untranslated text of the review, in the case where the review has been
   * translated. If the review has not been translated this is left blank.
   */
  originalText: string;
  /**
   * Language code for the reviewer. This is taken from the device settings so
   * is not guaranteed to match the language the review is written in. May be
   * absent.
   */
  reviewerLanguage: string;
  /**
   * The star rating associated with the review, from 1 to 5.
   */
  starRating: number;
  /**
   * The content of the comment, i.e. review body. In some cases users have been
   * able to write a review with separate title and body; in those cases the
   * title and body are concatenated and separated by a tab character.
   */
  text: string;
  /**
   * Number of users who have given this review a thumbs down
   */
  thumbsDownCount: number;
  /**
   * Number of users who have given this review a thumbs up
   */
  thumbsUpCount: number;
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
  kind: string;
  /**
   * The time at which the purchase was made, in milliseconds since the epoch
   * (Jan 1, 1970).
   */
  purchaseTimeMillis: string;
  /**
   * The token that was generated when a purchase was made. This uniquely
   * identifies a purchase.
   */
  purchaseToken: string;
  /**
   * The time at which the purchase was canceled/refunded/charged-back, in
   * milliseconds since the epoch (Jan 1, 1970).
   */
  voidedTimeMillis: string;
}
export interface Schema$VoidedPurchasesListResponse {
  pageInfo: Schema$PageInfo;
  tokenPagination: Schema$TokenPagination;
  voidedPurchases: Schema$VoidedPurchase[];
}

export class Resource$Edits {
  root: Androidpublisher;
  apklistings: Resource$Edits$Apklistings;
  apks: Resource$Edits$Apks;
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
  commit(params: any, options?: MethodOptions): AxiosPromise<Schema$AppEdit>;
  commit(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$AppEdit>,
      callback?: BodyResponseCallback<Schema$AppEdit>): void;
  commit(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$AppEdit>,
      callback?: BodyResponseCallback<Schema$AppEdit>):
      void|AxiosPromise<Schema$AppEdit> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
   * delete any of your previous edits so this method need only be called if you
   * want to preemptively abandon an edit.
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
  delete(params: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
   * @desc Returns information about the edit specified. Calls will fail if the
   * edit is no long active (e.g. has been deleted, superseded or expired).
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
  get(params: any, options?: MethodOptions): AxiosPromise<Schema$AppEdit>;
  get(params: any, options: MethodOptions|BodyResponseCallback<Schema$AppEdit>,
      callback?: BodyResponseCallback<Schema$AppEdit>): void;
  get(params: any, options?: MethodOptions|BodyResponseCallback<Schema$AppEdit>,
      callback?: BodyResponseCallback<Schema$AppEdit>):
      void|AxiosPromise<Schema$AppEdit> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  insert(params: any, options?: MethodOptions): AxiosPromise<Schema$AppEdit>;
  insert(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$AppEdit>,
      callback?: BodyResponseCallback<Schema$AppEdit>): void;
  insert(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$AppEdit>,
      callback?: BodyResponseCallback<Schema$AppEdit>):
      void|AxiosPromise<Schema$AppEdit> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  validate(params: any, options?: MethodOptions): AxiosPromise<Schema$AppEdit>;
  validate(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$AppEdit>,
      callback?: BodyResponseCallback<Schema$AppEdit>): void;
  validate(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$AppEdit>,
      callback?: BodyResponseCallback<Schema$AppEdit>):
      void|AxiosPromise<Schema$AppEdit> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  delete(params: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
   * @desc Deletes all the APK-specific localized listings for a specified APK.
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
  deleteall(params: any, options?: MethodOptions): AxiosPromise<void>;
  deleteall(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  deleteall(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  get(params: any, options?: MethodOptions): AxiosPromise<Schema$ApkListing>;
  get(params: any,
      options: MethodOptions|BodyResponseCallback<Schema$ApkListing>,
      callback?: BodyResponseCallback<Schema$ApkListing>): void;
  get(params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ApkListing>,
      callback?: BodyResponseCallback<Schema$ApkListing>):
      void|AxiosPromise<Schema$ApkListing> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  list(params: any, options?: MethodOptions):
      AxiosPromise<Schema$ApkListingsListResponse>;
  list(
      params: any,
      options: MethodOptions|
      BodyResponseCallback<Schema$ApkListingsListResponse>,
      callback?: BodyResponseCallback<Schema$ApkListingsListResponse>): void;
  list(
      params: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ApkListingsListResponse>,
      callback?: BodyResponseCallback<Schema$ApkListingsListResponse>):
      void|AxiosPromise<Schema$ApkListingsListResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
   * @desc Updates or creates the APK-specific localized listing for a specified
   * APK and language code. This method supports patch semantics.
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
  patch(params: any, options?: MethodOptions): AxiosPromise<Schema$ApkListing>;
  patch(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$ApkListing>,
      callback?: BodyResponseCallback<Schema$ApkListing>): void;
  patch(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ApkListing>,
      callback?: BodyResponseCallback<Schema$ApkListing>):
      void|AxiosPromise<Schema$ApkListing> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
   * @desc Updates or creates the APK-specific localized listing for a specified
   * APK and language code.
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
  update(params: any, options?: MethodOptions): AxiosPromise<Schema$ApkListing>;
  update(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$ApkListing>,
      callback?: BodyResponseCallback<Schema$ApkListing>): void;
  update(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ApkListing>,
      callback?: BodyResponseCallback<Schema$ApkListing>):
      void|AxiosPromise<Schema$ApkListing> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
   * instead hosting the APK at a specified URL. This function is only available
   * to enterprises using Google Play for Work whose application is configured
   * to restrict distribution to the enterprise domain.
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
  addexternallyhosted(params: any, options?: MethodOptions):
      AxiosPromise<Schema$ApksAddExternallyHostedResponse>;
  addexternallyhosted(
      params: any,
      options: MethodOptions|
      BodyResponseCallback<Schema$ApksAddExternallyHostedResponse>,
      callback?: BodyResponseCallback<Schema$ApksAddExternallyHostedResponse>):
      void;
  addexternallyhosted(
      params: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ApksAddExternallyHostedResponse>,
      callback?: BodyResponseCallback<Schema$ApksAddExternallyHostedResponse>):
      void|AxiosPromise<Schema$ApksAddExternallyHostedResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  list(params: any, options?: MethodOptions):
      AxiosPromise<Schema$ApksListResponse>;
  list(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$ApksListResponse>,
      callback?: BodyResponseCallback<Schema$ApksListResponse>): void;
  list(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ApksListResponse>,
      callback?: BodyResponseCallback<Schema$ApksListResponse>):
      void|AxiosPromise<Schema$ApksListResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  upload(params: any, options?: MethodOptions): AxiosPromise<Schema$Apk>;
  upload(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Apk>,
      callback?: BodyResponseCallback<Schema$Apk>): void;
  upload(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Apk>,
      callback?: BodyResponseCallback<Schema$Apk>):
      void|AxiosPromise<Schema$Apk> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  upload(params: any, options?: MethodOptions):
      AxiosPromise<Schema$DeobfuscationFilesUploadResponse>;
  upload(
      params: any,
      options: MethodOptions|
      BodyResponseCallback<Schema$DeobfuscationFilesUploadResponse>,
      callback?: BodyResponseCallback<Schema$DeobfuscationFilesUploadResponse>):
      void;
  upload(
      params: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$DeobfuscationFilesUploadResponse>,
      callback?: BodyResponseCallback<Schema$DeobfuscationFilesUploadResponse>):
      void|AxiosPromise<Schema$DeobfuscationFilesUploadResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
      requiredParams:
          ['packageName', 'editId', 'apkVersionCode', 'deobfuscationFileType'],
      pathParams:
          ['apkVersionCode', 'deobfuscationFileType', 'editId', 'packageName'],
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
   * @desc Fetches app details for this edit. This includes the default language
   * and developer support contact information.
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
  get(params: any, options?: MethodOptions): AxiosPromise<Schema$AppDetails>;
  get(params: any,
      options: MethodOptions|BodyResponseCallback<Schema$AppDetails>,
      callback?: BodyResponseCallback<Schema$AppDetails>): void;
  get(params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$AppDetails>,
      callback?: BodyResponseCallback<Schema$AppDetails>):
      void|AxiosPromise<Schema$AppDetails> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  patch(params: any, options?: MethodOptions): AxiosPromise<Schema$AppDetails>;
  patch(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$AppDetails>,
      callback?: BodyResponseCallback<Schema$AppDetails>): void;
  patch(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$AppDetails>,
      callback?: BodyResponseCallback<Schema$AppDetails>):
      void|AxiosPromise<Schema$AppDetails> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  update(params: any, options?: MethodOptions): AxiosPromise<Schema$AppDetails>;
  update(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$AppDetails>,
      callback?: BodyResponseCallback<Schema$AppDetails>): void;
  update(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$AppDetails>,
      callback?: BodyResponseCallback<Schema$AppDetails>):
      void|AxiosPromise<Schema$AppDetails> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  get(params: any, options?: MethodOptions): AxiosPromise<Schema$ExpansionFile>;
  get(params: any,
      options: MethodOptions|BodyResponseCallback<Schema$ExpansionFile>,
      callback?: BodyResponseCallback<Schema$ExpansionFile>): void;
  get(params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ExpansionFile>,
      callback?: BodyResponseCallback<Schema$ExpansionFile>):
      void|AxiosPromise<Schema$ExpansionFile> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  patch(params: any, options?: MethodOptions):
      AxiosPromise<Schema$ExpansionFile>;
  patch(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$ExpansionFile>,
      callback?: BodyResponseCallback<Schema$ExpansionFile>): void;
  patch(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ExpansionFile>,
      callback?: BodyResponseCallback<Schema$ExpansionFile>):
      void|AxiosPromise<Schema$ExpansionFile> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  update(params: any, options?: MethodOptions):
      AxiosPromise<Schema$ExpansionFile>;
  update(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$ExpansionFile>,
      callback?: BodyResponseCallback<Schema$ExpansionFile>): void;
  update(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ExpansionFile>,
      callback?: BodyResponseCallback<Schema$ExpansionFile>):
      void|AxiosPromise<Schema$ExpansionFile> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  upload(params: any, options?: MethodOptions):
      AxiosPromise<Schema$ExpansionFilesUploadResponse>;
  upload(
      params: any,
      options: MethodOptions|
      BodyResponseCallback<Schema$ExpansionFilesUploadResponse>,
      callback?: BodyResponseCallback<Schema$ExpansionFilesUploadResponse>):
      void;
  upload(
      params: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ExpansionFilesUploadResponse>,
      callback?: BodyResponseCallback<Schema$ExpansionFilesUploadResponse>):
      void|AxiosPromise<Schema$ExpansionFilesUploadResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
      return createAPIRequest<Schema$ExpansionFilesUploadResponse>(parameters);
    }
  }
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
  delete(params: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
      pathParams: ['editId', 'imageId', 'imageType', 'language', 'packageName'],
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
  deleteall(params: any, options?: MethodOptions):
      AxiosPromise<Schema$ImagesDeleteAllResponse>;
  deleteall(
      params: any,
      options: MethodOptions|
      BodyResponseCallback<Schema$ImagesDeleteAllResponse>,
      callback?: BodyResponseCallback<Schema$ImagesDeleteAllResponse>): void;
  deleteall(
      params: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ImagesDeleteAllResponse>,
      callback?: BodyResponseCallback<Schema$ImagesDeleteAllResponse>):
      void|AxiosPromise<Schema$ImagesDeleteAllResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  list(params: any, options?: MethodOptions):
      AxiosPromise<Schema$ImagesListResponse>;
  list(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$ImagesListResponse>,
      callback?: BodyResponseCallback<Schema$ImagesListResponse>): void;
  list(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ImagesListResponse>,
      callback?: BodyResponseCallback<Schema$ImagesListResponse>):
      void|AxiosPromise<Schema$ImagesListResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  upload(params: any, options?: MethodOptions):
      AxiosPromise<Schema$ImagesUploadResponse>;
  upload(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$ImagesUploadResponse>,
      callback?: BodyResponseCallback<Schema$ImagesUploadResponse>): void;
  upload(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ImagesUploadResponse>,
      callback?: BodyResponseCallback<Schema$ImagesUploadResponse>):
      void|AxiosPromise<Schema$ImagesUploadResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  delete(params: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  deleteall(params: any, options?: MethodOptions): AxiosPromise<void>;
  deleteall(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  deleteall(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  get(params: any, options?: MethodOptions): AxiosPromise<Schema$Listing>;
  get(params: any, options: MethodOptions|BodyResponseCallback<Schema$Listing>,
      callback?: BodyResponseCallback<Schema$Listing>): void;
  get(params: any, options?: MethodOptions|BodyResponseCallback<Schema$Listing>,
      callback?: BodyResponseCallback<Schema$Listing>):
      void|AxiosPromise<Schema$Listing> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  list(params: any, options?: MethodOptions):
      AxiosPromise<Schema$ListingsListResponse>;
  list(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$ListingsListResponse>,
      callback?: BodyResponseCallback<Schema$ListingsListResponse>): void;
  list(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListingsListResponse>,
      callback?: BodyResponseCallback<Schema$ListingsListResponse>):
      void|AxiosPromise<Schema$ListingsListResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  patch(params: any, options?: MethodOptions): AxiosPromise<Schema$Listing>;
  patch(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Listing>,
      callback?: BodyResponseCallback<Schema$Listing>): void;
  patch(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Listing>,
      callback?: BodyResponseCallback<Schema$Listing>):
      void|AxiosPromise<Schema$Listing> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  update(params: any, options?: MethodOptions): AxiosPromise<Schema$Listing>;
  update(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Listing>,
      callback?: BodyResponseCallback<Schema$Listing>): void;
  update(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Listing>,
      callback?: BodyResponseCallback<Schema$Listing>):
      void|AxiosPromise<Schema$Listing> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  get(params: any, options?: MethodOptions): AxiosPromise<Schema$Testers>;
  get(params: any, options: MethodOptions|BodyResponseCallback<Schema$Testers>,
      callback?: BodyResponseCallback<Schema$Testers>): void;
  get(params: any, options?: MethodOptions|BodyResponseCallback<Schema$Testers>,
      callback?: BodyResponseCallback<Schema$Testers>):
      void|AxiosPromise<Schema$Testers> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  patch(params: any, options?: MethodOptions): AxiosPromise<Schema$Testers>;
  patch(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Testers>,
      callback?: BodyResponseCallback<Schema$Testers>): void;
  patch(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Testers>,
      callback?: BodyResponseCallback<Schema$Testers>):
      void|AxiosPromise<Schema$Testers> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  update(params: any, options?: MethodOptions): AxiosPromise<Schema$Testers>;
  update(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Testers>,
      callback?: BodyResponseCallback<Schema$Testers>): void;
  update(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Testers>,
      callback?: BodyResponseCallback<Schema$Testers>):
      void|AxiosPromise<Schema$Testers> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
   * @param {string} params.track The track to read or modify. Acceptable values are: "alpha", "beta", "production", "rollout" or "internal".
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params: any, options?: MethodOptions): AxiosPromise<Schema$Track>;
  get(params: any, options: MethodOptions|BodyResponseCallback<Schema$Track>,
      callback?: BodyResponseCallback<Schema$Track>): void;
  get(params: any, options?: MethodOptions|BodyResponseCallback<Schema$Track>,
      callback?: BodyResponseCallback<Schema$Track>):
      void|AxiosPromise<Schema$Track> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  list(params: any, options?: MethodOptions):
      AxiosPromise<Schema$TracksListResponse>;
  list(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$TracksListResponse>,
      callback?: BodyResponseCallback<Schema$TracksListResponse>): void;
  list(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$TracksListResponse>,
      callback?: BodyResponseCallback<Schema$TracksListResponse>):
      void|AxiosPromise<Schema$TracksListResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
   * @param {string} params.track The track to read or modify. Acceptable values are: "alpha", "beta", "production", "rollout" or "internal".
   * @param {().Track} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params: any, options?: MethodOptions): AxiosPromise<Schema$Track>;
  patch(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Track>,
      callback?: BodyResponseCallback<Schema$Track>): void;
  patch(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Track>,
      callback?: BodyResponseCallback<Schema$Track>):
      void|AxiosPromise<Schema$Track> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
   * @param {string} params.track The track to read or modify. Acceptable values are: "alpha", "beta", "production", "rollout" or "internal".
   * @param {().Track} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params: any, options?: MethodOptions): AxiosPromise<Schema$Track>;
  update(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Track>,
      callback?: BodyResponseCallback<Schema$Track>): void;
  update(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Track>,
      callback?: BodyResponseCallback<Schema$Track>):
      void|AxiosPromise<Schema$Track> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  delete(params: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  get(params: any, options?: MethodOptions): AxiosPromise<Schema$InAppProduct>;
  get(params: any,
      options: MethodOptions|BodyResponseCallback<Schema$InAppProduct>,
      callback?: BodyResponseCallback<Schema$InAppProduct>): void;
  get(params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$InAppProduct>,
      callback?: BodyResponseCallback<Schema$InAppProduct>):
      void|AxiosPromise<Schema$InAppProduct> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  insert(params: any, options?: MethodOptions):
      AxiosPromise<Schema$InAppProduct>;
  insert(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$InAppProduct>,
      callback?: BodyResponseCallback<Schema$InAppProduct>): void;
  insert(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$InAppProduct>,
      callback?: BodyResponseCallback<Schema$InAppProduct>):
      void|AxiosPromise<Schema$InAppProduct> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  list(params: any, options?: MethodOptions):
      AxiosPromise<Schema$InappproductsListResponse>;
  list(
      params: any,
      options: MethodOptions|
      BodyResponseCallback<Schema$InappproductsListResponse>,
      callback?: BodyResponseCallback<Schema$InappproductsListResponse>): void;
  list(
      params: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$InappproductsListResponse>,
      callback?: BodyResponseCallback<Schema$InappproductsListResponse>):
      void|AxiosPromise<Schema$InappproductsListResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
      createAPIRequest<Schema$InappproductsListResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$InappproductsListResponse>(parameters);
    }
  }


  /**
   * androidpublisher.inappproducts.patch
   * @desc Updates the details of an in-app product. This method supports patch
   * semantics.
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
  patch(params: any, options?: MethodOptions):
      AxiosPromise<Schema$InAppProduct>;
  patch(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$InAppProduct>,
      callback?: BodyResponseCallback<Schema$InAppProduct>): void;
  patch(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$InAppProduct>,
      callback?: BodyResponseCallback<Schema$InAppProduct>):
      void|AxiosPromise<Schema$InAppProduct> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  update(params: any, options?: MethodOptions):
      AxiosPromise<Schema$InAppProduct>;
  update(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$InAppProduct>,
      callback?: BodyResponseCallback<Schema$InAppProduct>): void;
  update(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$InAppProduct>,
      callback?: BodyResponseCallback<Schema$InAppProduct>):
      void|AxiosPromise<Schema$InAppProduct> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  get(params: any,
      options?: MethodOptions): AxiosPromise<Schema$ProductPurchase>;
  get(params: any,
      options: MethodOptions|BodyResponseCallback<Schema$ProductPurchase>,
      callback?: BodyResponseCallback<Schema$ProductPurchase>): void;
  get(params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ProductPurchase>,
      callback?: BodyResponseCallback<Schema$ProductPurchase>):
      void|AxiosPromise<Schema$ProductPurchase> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  cancel(params: any, options?: MethodOptions): AxiosPromise<void>;
  cancel(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  cancel(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  defer(params: any, options?: MethodOptions):
      AxiosPromise<Schema$SubscriptionPurchasesDeferResponse>;
  defer(
      params: any,
      options: MethodOptions|
      BodyResponseCallback<Schema$SubscriptionPurchasesDeferResponse>,
      callback?:
          BodyResponseCallback<Schema$SubscriptionPurchasesDeferResponse>):
      void;
  defer(
      params: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$SubscriptionPurchasesDeferResponse>,
      callback?:
          BodyResponseCallback<Schema$SubscriptionPurchasesDeferResponse>):
      void|AxiosPromise<Schema$SubscriptionPurchasesDeferResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  get(params: any,
      options?: MethodOptions): AxiosPromise<Schema$SubscriptionPurchase>;
  get(params: any,
      options: MethodOptions|BodyResponseCallback<Schema$SubscriptionPurchase>,
      callback?: BodyResponseCallback<Schema$SubscriptionPurchase>): void;
  get(params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$SubscriptionPurchase>,
      callback?: BodyResponseCallback<Schema$SubscriptionPurchase>):
      void|AxiosPromise<Schema$SubscriptionPurchase> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
   * @desc Refunds a user's subscription purchase, but the subscription remains
   * valid until its expiration time and it will continue to recur.
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
  refund(params: any, options?: MethodOptions): AxiosPromise<void>;
  refund(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  refund(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
   * Access to the subscription will be terminated immediately and it will stop
   * recurring.
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
  revoke(params: any, options?: MethodOptions): AxiosPromise<void>;
  revoke(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  revoke(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  list(params: any, options?: MethodOptions):
      AxiosPromise<Schema$VoidedPurchasesListResponse>;
  list(
      params: any,
      options: MethodOptions|
      BodyResponseCallback<Schema$VoidedPurchasesListResponse>,
      callback?: BodyResponseCallback<Schema$VoidedPurchasesListResponse>):
      void;
  list(
      params: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$VoidedPurchasesListResponse>,
      callback?: BodyResponseCallback<Schema$VoidedPurchasesListResponse>):
      void|AxiosPromise<Schema$VoidedPurchasesListResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  get(params: any, options?: MethodOptions): AxiosPromise<Schema$Review>;
  get(params: any, options: MethodOptions|BodyResponseCallback<Schema$Review>,
      callback?: BodyResponseCallback<Schema$Review>): void;
  get(params: any, options?: MethodOptions|BodyResponseCallback<Schema$Review>,
      callback?: BodyResponseCallback<Schema$Review>):
      void|AxiosPromise<Schema$Review> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  list(params: any, options?: MethodOptions):
      AxiosPromise<Schema$ReviewsListResponse>;
  list(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$ReviewsListResponse>,
      callback?: BodyResponseCallback<Schema$ReviewsListResponse>): void;
  list(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ReviewsListResponse>,
      callback?: BodyResponseCallback<Schema$ReviewsListResponse>):
      void|AxiosPromise<Schema$ReviewsListResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  reply(params: any, options?: MethodOptions):
      AxiosPromise<Schema$ReviewsReplyResponse>;
  reply(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$ReviewsReplyResponse>,
      callback?: BodyResponseCallback<Schema$ReviewsReplyResponse>): void;
  reply(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ReviewsReplyResponse>,
      callback?: BodyResponseCallback<Schema$ReviewsReplyResponse>):
      void|AxiosPromise<Schema$ReviewsReplyResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
