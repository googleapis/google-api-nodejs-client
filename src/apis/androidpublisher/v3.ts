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
   * Lets Android application developers access their Google Play accounts. At a high level, the expected workflow is to &quot;insert&quot; an Edit, make changes as necessary, and then &quot;commit&quot; it.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const androidpublisher = google.androidpublisher('v3');
   * ```
   */
  export class Androidpublisher {
    context: APIRequestContext;
    applications: Resource$Applications;
    edits: Resource$Edits;
    externaltransactions: Resource$Externaltransactions;
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

      this.applications = new Resource$Applications(this.context);
      this.edits = new Resource$Edits(this.context);
      this.externaltransactions = new Resource$Externaltransactions(
        this.context
      );
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
   * Represents a targeting rule of the form: User never had {scope\} before.
   */
  export interface Schema$AcquisitionTargetingRule {
    /**
     * Required. The scope of subscriptions this rule considers. Only allows "this subscription" and "any subscription in app".
     */
    scope?: Schema$TargetingRuleScope;
  }
  /**
   * Request message for ActivateBasePlan.
   */
  export interface Schema$ActivateBasePlanRequest {}
  /**
   * Request message for ActivateSubscriptionOffer.
   */
  export interface Schema$ActivateSubscriptionOfferRequest {}
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
   * Request message for ArchiveSubscription.
   */
  export interface Schema$ArchiveSubscriptionRequest {}
  /**
   * Represents a base plan that automatically renews at the end of its subscription period.
   */
  export interface Schema$AutoRenewingBasePlanType {
    /**
     * Required. Subscription period, specified in ISO 8601 format. For a list of acceptable billing periods, refer to the help center.
     */
    billingPeriodDuration?: string | null;
    /**
     * Grace period of the subscription, specified in ISO 8601 format. Acceptable values are P0D (zero days), P3D (3 days), P7D (7 days), P14D (14 days), and P30D (30 days). If not specified, a default value will be used based on the recurring period duration.
     */
    gracePeriodDuration?: string | null;
    /**
     * Whether the renewing base plan is backward compatible. The backward compatible base plan is returned by the Google Play Billing Library deprecated method querySkuDetailsAsync(). Only one renewing base plan can be marked as legacy compatible for a given subscription.
     */
    legacyCompatible?: boolean | null;
    /**
     * Subscription offer id which is legacy compatible. The backward compatible subscription offer is returned by the Google Play Billing Library deprecated method querySkuDetailsAsync(). Only one subscription offer can be marked as legacy compatible for a given renewing base plan. To have no Subscription offer as legacy compatible set this field as empty string.
     */
    legacyCompatibleSubscriptionOfferId?: string | null;
    /**
     * The proration mode for the base plan determines what happens when a user switches to this plan from another base plan. If unspecified, defaults to CHARGE_ON_NEXT_BILLING_DATE.
     */
    prorationMode?: string | null;
    /**
     * Whether users should be able to resubscribe to this base plan in Google Play surfaces. Defaults to RESUBSCRIBE_STATE_ACTIVE if not specified.
     */
    resubscribeState?: string | null;
  }
  /**
   * Information related to an auto renewing plan.
   */
  export interface Schema$AutoRenewingPlan {
    /**
     * If the subscription is currently set to auto-renew, e.g. the user has not canceled the subscription
     */
    autoRenewEnabled?: boolean | null;
    /**
     * The information of the last price change for the item since subscription signup.
     */
    priceChangeDetails?: Schema$SubscriptionItemPriceChangeDetails;
  }
  /**
   * A single base plan for a subscription.
   */
  export interface Schema$BasePlan {
    /**
     * Set when the base plan automatically renews at a regular interval.
     */
    autoRenewingBasePlanType?: Schema$AutoRenewingBasePlanType;
    /**
     * Required. Immutable. The unique identifier of this base plan. Must be unique within the subscription, and conform with RFC-1034. That is, this ID can only contain lower-case letters (a-z), numbers (0-9), and hyphens (-), and be at most 63 characters.
     */
    basePlanId?: string | null;
    /**
     * List of up to 20 custom tags specified for this base plan, and returned to the app through the billing library. Subscription offers for this base plan will also receive these offer tags in the billing library.
     */
    offerTags?: Schema$OfferTag[];
    /**
     * Pricing information for any new locations Play may launch in the future. If omitted, the BasePlan will not be automatically available any new locations Play may launch in the future.
     */
    otherRegionsConfig?: Schema$OtherRegionsBasePlanConfig;
    /**
     * Set when the base plan does not automatically renew at the end of the billing period.
     */
    prepaidBasePlanType?: Schema$PrepaidBasePlanType;
    /**
     * Region-specific information for this base plan.
     */
    regionalConfigs?: Schema$RegionalBasePlanConfig[];
    /**
     * Output only. The state of the base plan, i.e. whether it's active. Draft and inactive base plans can be activated or deleted. Active base plans can be made inactive. Inactive base plans can be canceled. This field cannot be changed by updating the resource. Use the dedicated endpoints instead.
     */
    state?: string | null;
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
   * Information specific to a subscription in canceled state.
   */
  export interface Schema$CanceledStateContext {
    /**
     * Subscription was canceled by the developer.
     */
    developerInitiatedCancellation?: Schema$DeveloperInitiatedCancellation;
    /**
     * Subscription was replaced by a new subscription.
     */
    replacementCancellation?: Schema$ReplacementCancellation;
    /**
     * Subscription was canceled by the system, for example because of a billing problem.
     */
    systemInitiatedCancellation?: Schema$SystemInitiatedCancellation;
    /**
     * Subscription was canceled by user.
     */
    userInitiatedCancellation?: Schema$UserInitiatedCancellation;
  }
  /**
   * Result of the cancel survey when the subscription was canceled by the user.
   */
  export interface Schema$CancelSurveyResult {
    /**
     * The reason the user selected in the cancel survey.
     */
    reason?: string | null;
    /**
     * Only set for CANCEL_SURVEY_REASON_OTHERS. This is the user's freeform response to the survey.
     */
    reasonUserInput?: string | null;
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
   * Request message for DeactivateBasePlan.
   */
  export interface Schema$DeactivateBasePlanRequest {}
  /**
   * Request message for DeactivateSubscriptionOffer.
   */
  export interface Schema$DeactivateSubscriptionOfferRequest {}
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
   * Information specific to cancellations initiated by developers.
   */
  export interface Schema$DeveloperInitiatedCancellation {}
  /**
   * A group of devices. A group is defined by a set of device selectors. A device belongs to the group if it matches any selector (logical OR).
   */
  export interface Schema$DeviceGroup {
    /**
     * Device selectors for this group. A device matching any of the selectors is included in this group.
     */
    deviceSelectors?: Schema$DeviceSelector[];
    /**
     * The name of the group.
     */
    name?: string | null;
  }
  /**
   * Identifier of a device.
   */
  export interface Schema$DeviceId {
    /**
     * Value of Build.BRAND.
     */
    buildBrand?: string | null;
    /**
     * Value of Build.DEVICE.
     */
    buildDevice?: string | null;
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
   * Conditions about a device's RAM capabilities.
   */
  export interface Schema$DeviceRam {
    /**
     * Maximum RAM in bytes (bound excluded).
     */
    maxBytes?: string | null;
    /**
     * Minimum RAM in bytes (bound included).
     */
    minBytes?: string | null;
  }
  /**
   * Selector for a device group. A selector consists of a set of conditions on the device that should all match (logical AND) to determine a device group eligibility. For instance, if a selector specifies RAM conditions, device model inclusion and device model exclusion, a device is considered to match if: device matches RAM conditions AND device matches one of the included device models AND device doesn't match excluded device models
   */
  export interface Schema$DeviceSelector {
    /**
     * Conditions on the device's RAM.
     */
    deviceRam?: Schema$DeviceRam;
    /**
     * Device models excluded by this selector, even if they match all other conditions.
     */
    excludedDeviceIds?: Schema$DeviceId[];
    /**
     * A device that has any of these system features is excluded by this selector, even if it matches all other conditions.
     */
    forbiddenSystemFeatures?: Schema$SystemFeature[];
    /**
     * Device models included by this selector.
     */
    includedDeviceIds?: Schema$DeviceId[];
    /**
     * A device needs to have all these system features to be included by the selector.
     */
    requiredSystemFeatures?: Schema$SystemFeature[];
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
   * A single device tier. Devices matching any of the device groups in device_group_names are considered to match the tier.
   */
  export interface Schema$DeviceTier {
    /**
     * Groups of devices included in this tier. These groups must be defined explicitly under device_groups in this configuration.
     */
    deviceGroupNames?: string[] | null;
    /**
     * The priority level of the tier. Tiers are evaluated in descending order of level: the highest level tier has the highest priority. The highest tier matching a given device is selected for that device. You should use a contiguous range of levels for your tiers in a tier set; tier levels in a tier set must be unique. For instance, if your tier set has 4 tiers (including the global fallback), you should define tiers 1, 2 and 3 in this configuration. Note: tier 0 is implicitly defined as a global fallback and selected for devices that don't match any of the tiers explicitly defined here. You mustn't define level 0 explicitly in this configuration.
     */
    level?: number | null;
  }
  /**
   * Configuration describing device targeting criteria for the content of an app.
   */
  export interface Schema$DeviceTierConfig {
    /**
     * Definition of device groups for the app.
     */
    deviceGroups?: Schema$DeviceGroup[];
    /**
     * Output only. The device tier config ID.
     */
    deviceTierConfigId?: string | null;
    /**
     * Definition of the set of device tiers for the app.
     */
    deviceTierSet?: Schema$DeviceTierSet;
    /**
     * Definition of user country sets for the app.
     */
    userCountrySets?: Schema$UserCountrySet[];
  }
  /**
   * A set of device tiers. A tier set determines what variation of app content gets served to a specific device, for device-targeted content. You should assign a priority level to each tier, which determines the ordering by which they are evaluated by Play. See the documentation of DeviceTier.level for more details.
   */
  export interface Schema$DeviceTierSet {
    /**
     * Device tiers belonging to the set.
     */
    deviceTiers?: Schema$DeviceTier[];
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
   * User account identifier in the third-party service.
   */
  export interface Schema$ExternalAccountIdentifiers {
    /**
     * User account identifier in the third-party service. Only present if account linking happened as part of the subscription purchase flow.
     */
    externalAccountId?: string | null;
    /**
     * An obfuscated version of the id that is uniquely associated with the user's account in your app. Present for the following purchases: * If account linking happened as part of the subscription purchase flow. * It was specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedaccountid when the purchase was made.
     */
    obfuscatedExternalAccountId?: string | null;
    /**
     * An obfuscated version of the id that is uniquely associated with the user's profile in your app. Only present if specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedprofileid when the purchase was made.
     */
    obfuscatedExternalProfileId?: string | null;
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
   * Details of an external subscription.
   */
  export interface Schema$ExternalSubscription {
    /**
     * Required. The type of the external subscription.
     */
    subscriptionType?: string | null;
  }
  /**
   * The details of an external transaction.
   */
  export interface Schema$ExternalTransaction {
    /**
     * Output only. The time when this transaction was created. This is the time when Google was notified of the transaction.
     */
    createTime?: string | null;
    /**
     * Output only. The current transaction amount before tax. This represents the current pre-tax amount including any refunds that may have been applied to this transaction.
     */
    currentPreTaxAmount?: Schema$Price;
    /**
     * Output only. The current tax amount. This represents the current tax amount including any refunds that may have been applied to this transaction.
     */
    currentTaxAmount?: Schema$Price;
    /**
     * Output only. The id of this transaction. All transaction ids under the same package name must be unique. Set when creating the external transaction.
     */
    externalTransactionId?: string | null;
    /**
     * This is a one-time transaction and not part of a subscription.
     */
    oneTimeTransaction?: Schema$OneTimeExternalTransaction;
    /**
     * Required. The original transaction amount before taxes. This represents the pre-tax amount originally notified to Google before any refunds were applied.
     */
    originalPreTaxAmount?: Schema$Price;
    /**
     * Required. The original tax amount. This represents the tax amount originally notified to Google before any refunds were applied.
     */
    originalTaxAmount?: Schema$Price;
    /**
     * Output only. The resource name of the external transaction. The package name of the application the inapp products were sold (for example, 'com.some.app').
     */
    packageName?: string | null;
    /**
     * This transaction is part of a recurring series of transactions.
     */
    recurringTransaction?: Schema$RecurringExternalTransaction;
    /**
     * Output only. If set, this transaction was a test purchase. Google will not charge for a test transaction.
     */
    testPurchase?: Schema$ExternalTransactionTestPurchase;
    /**
     * Output only. The current state of the transaction.
     */
    transactionState?: string | null;
    /**
     * Required. The time when the transaction was completed.
     */
    transactionTime?: string | null;
    /**
     * Required. User address for tax computation.
     */
    userTaxAddress?: Schema$ExternalTransactionAddress;
  }
  /**
   * User's address for the external transaction.
   */
  export interface Schema$ExternalTransactionAddress {
    /**
     * Required. Two letter region code based on ISO-3166-1 Alpha-2 (UN region codes).
     */
    regionCode?: string | null;
  }
  /**
   * Represents a transaction performed using a test account. These transactions will not be charged by Google.
   */
  export interface Schema$ExternalTransactionTestPurchase {}
  /**
   * A full refund of the remaining amount of a transaction.
   */
  export interface Schema$FullRefund {}
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
     * Required. Resource name for this grant, following the pattern "developers/{developer\}/users/{email\}/grants/{package_name\}". If this grant is for a draft app, the app ID will be used in this resource name instead of the package name.
     */
    name?: string | null;
    /**
     * Immutable. The package name of the app. This will be empty for draft apps.
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
   * Response listing existing device tier configs.
   */
  export interface Schema$ListDeviceTierConfigsResponse {
    /**
     * Device tier configs created by the developer.
     */
    deviceTierConfigs?: Schema$DeviceTierConfig[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
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
   * Response message for ListSubscriptionOffers.
   */
  export interface Schema$ListSubscriptionOffersResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The subscription offers from the specified subscription.
     */
    subscriptionOffers?: Schema$SubscriptionOffer[];
  }
  /**
   * Response message for ListSubscriptions.
   */
  export interface Schema$ListSubscriptionsResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The subscriptions from the specified app.
     */
    subscriptions?: Schema$Subscription[];
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
   * Request message for MigrateBasePlanPrices.
   */
  export interface Schema$MigrateBasePlanPricesRequest {
    /**
     * Required. The regional prices to update.
     */
    regionalPriceMigrations?: Schema$RegionalPriceMigrationConfig[];
    /**
     * Required. The version of the available regions being used for the regional_price_migrations.
     */
    regionsVersion?: Schema$RegionsVersion;
  }
  /**
   * Response message for MigrateBasePlanPrices.
   */
  export interface Schema$MigrateBasePlanPricesResponse {}
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
   * Offer details information related to a purchase line item.
   */
  export interface Schema$OfferDetails {
    /**
     * The base plan ID. Present for all base plan and offers.
     */
    basePlanId?: string | null;
    /**
     * The offer ID. Only present for discounted offers.
     */
    offerId?: string | null;
    /**
     * The latest offer tags associated with the offer. It includes tags inherited from the base plan.
     */
    offerTags?: string[] | null;
  }
  /**
   * Represents a custom tag specified for base plans and subscription offers.
   */
  export interface Schema$OfferTag {
    /**
     * Must conform with RFC-1034. That is, this string can only contain lower-case letters (a-z), numbers (0-9), and hyphens (-), and be at most 20 characters.
     */
    tag?: string | null;
  }
  /**
   * Represents a one-time transaction.
   */
  export interface Schema$OneTimeExternalTransaction {
    /**
     * Input only. Provided during the call to Create. Retrieved from the client when the alternative billing flow is launched.
     */
    externalTransactionToken?: string | null;
  }
  /**
   * Pricing information for any new locations Play may launch in.
   */
  export interface Schema$OtherRegionsBasePlanConfig {
    /**
     * Required. Price in EUR to use for any new locations Play may launch in.
     */
    eurPrice?: Schema$Money;
    /**
     * Whether the base plan is available for new subscribers in any new locations Play may launch in. If not specified, this will default to false.
     */
    newSubscriberAvailability?: boolean | null;
    /**
     * Required. Price in USD to use for any new locations Play may launch in.
     */
    usdPrice?: Schema$Money;
  }
  /**
   * Configuration for any new locations Play may launch in specified on a subscription offer.
   */
  export interface Schema$OtherRegionsSubscriptionOfferConfig {
    /**
     * Whether the subscription offer in any new locations Play may launch in the future. If not specified, this will default to false.
     */
    otherRegionsNewSubscriberAvailability?: boolean | null;
  }
  /**
   * Configuration for any new locations Play may launch in for a single offer phase.
   */
  export interface Schema$OtherRegionsSubscriptionOfferPhaseConfig {
    /**
     * The absolute amount of money subtracted from the base plan price prorated over the phase duration that the user pays for this offer phase. For example, if the base plan price for this region is $12 for a period of 1 year, then a $1 absolute discount for a phase of a duration of 3 months would correspond to a price of $2. The resulting price may not be smaller than the minimum price allowed for any new locations Play may launch in.
     */
    absoluteDiscounts?: Schema$OtherRegionsSubscriptionOfferPhasePrices;
    /**
     * The absolute price the user pays for this offer phase. The price must not be smaller than the minimum price allowed for any new locations Play may launch in.
     */
    otherRegionsPrices?: Schema$OtherRegionsSubscriptionOfferPhasePrices;
    /**
     * The fraction of the base plan price prorated over the phase duration that the user pays for this offer phase. For example, if the base plan price for this region is $12 for a period of 1 year, then a 50% discount for a phase of a duration of 3 months would correspond to a price of $1.50. The discount must be specified as a fraction strictly larger than 0 and strictly smaller than 1. The resulting price will be rounded to the nearest billable unit (e.g. cents for USD). The relative discount is considered invalid if the discounted price ends up being smaller than the minimum price allowed in any new locations Play may launch in.
     */
    relativeDiscount?: number | null;
  }
  /**
   * Pricing information for any new locations Play may launch in.
   */
  export interface Schema$OtherRegionsSubscriptionOfferPhasePrices {
    /**
     * Required. Price in EUR to use for any new locations Play may launch in.
     */
    eurPrice?: Schema$Money;
    /**
     * Required. Price in USD to use for any new locations Play may launch in.
     */
    usdPrice?: Schema$Money;
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
   * A partial refund of a transaction.
   */
  export interface Schema$PartialRefund {
    /**
     * Required. A unique id distinguishing this partial refund. If the refund is successful, subsequent refunds with the same id will fail. Must be unique across refunds for one individual transaction.
     */
    refundId?: string | null;
    /**
     * Required. The pre-tax amount of the partial refund. Should be less than the remaining pre-tax amount of the transaction.
     */
    refundPreTaxAmount?: Schema$Price;
  }
  /**
   * Information specific to a subscription in paused state.
   */
  export interface Schema$PausedStateContext {
    /**
     * Time at which the subscription will be automatically resumed.
     */
    autoResumeTime?: string | null;
  }
  /**
   * Represents a base plan that does not automatically renew at the end of the base plan, and must be manually renewed by the user.
   */
  export interface Schema$PrepaidBasePlanType {
    /**
     * Required. Subscription period, specified in ISO 8601 format. For a list of acceptable billing periods, refer to the help center.
     */
    billingPeriodDuration?: string | null;
    /**
     * Whether users should be able to extend this prepaid base plan in Google Play surfaces. Defaults to TIME_EXTENSION_ACTIVE if not specified.
     */
    timeExtension?: string | null;
  }
  /**
   * Information related to a prepaid plan.
   */
  export interface Schema$PrepaidPlan {
    /**
     * If present, this is the time after which top up purchases are allowed for the prepaid plan. Will not be present for expired prepaid plans.
     */
    allowExtendAfterTime?: string | null;
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
     * The inapp product SKU. May not be present.
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
     * The purchase token generated to identify this purchase. May not be present.
     */
    purchaseToken?: string | null;
    /**
     * The type of purchase of the inapp product. This field is only set if this purchase was not made using the standard in-app billing flow. Possible values are: 0. Test (i.e. purchased from a license testing account) 1. Promo (i.e. purchased using a promo code) 2. Rewarded (i.e. from watching a video ad instead of paying)
     */
    purchaseType?: number | null;
    /**
     * The quantity associated with the purchase of the inapp product. If not present, the quantity is 1.
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
   * Represents a transaction that is part of a recurring series of payments. This can be a subscription or a one-time product with multiple payments (such as preorder).
   */
  export interface Schema$RecurringExternalTransaction {
    /**
     * Details of an external subscription.
     */
    externalSubscription?: Schema$ExternalSubscription;
    /**
     * Input only. Provided during the call to Create. Retrieved from the client when the alternative billing flow is launched. Required only for the initial purchase.
     */
    externalTransactionToken?: string | null;
    /**
     * The external transaction id of the first transaction of this recurring series of transactions. For example, for a subscription this would be the transaction id of the first payment. Required when creating recurring external transactions.
     */
    initialExternalTransactionId?: string | null;
  }
  /**
   * A request to refund an existing external transaction.
   */
  export interface Schema$RefundExternalTransactionRequest {
    /**
     * A full-amount refund.
     */
    fullRefund?: Schema$FullRefund;
    /**
     * A partial refund.
     */
    partialRefund?: Schema$PartialRefund;
    /**
     * Required. The time that the transaction was refunded.
     */
    refundTime?: string | null;
  }
  /**
   * Configuration for a base plan specific to a region.
   */
  export interface Schema$RegionalBasePlanConfig {
    /**
     * Whether the base plan in the specified region is available for new subscribers. Existing subscribers will not have their subscription canceled if this value is set to false. If not specified, this will default to false.
     */
    newSubscriberAvailability?: boolean | null;
    /**
     * The price of the base plan in the specified region. Must be set if the base plan is available to new subscribers. Must be set in the currency that is linked to the specified region.
     */
    price?: Schema$Money;
    /**
     * Required. Region code this configuration applies to, as defined by ISO 3166-2, e.g. "US".
     */
    regionCode?: string | null;
  }
  /**
   * Configuration for a price migration.
   */
  export interface Schema$RegionalPriceMigrationConfig {
    /**
     * Required. The cutoff time for historical prices that subscribers can remain paying. Subscribers who are on a price that was created before this cutoff time will be migrated to the currently-offered price. These subscribers will receive a notification that they will be paying a different price. Subscribers who do not agree to the new price will have their subscription ended at the next renewal.
     */
    oldestAllowedPriceVersionTime?: string | null;
    /**
     * Required. Region code this configuration applies to, as defined by ISO 3166-2, e.g. "US".
     */
    regionCode?: string | null;
  }
  /**
   * Configuration for a subscription offer in a single region.
   */
  export interface Schema$RegionalSubscriptionOfferConfig {
    /**
     * Whether the subscription offer in the specified region is available for new subscribers. Existing subscribers will not have their subscription cancelled if this value is set to false. If not specified, this will default to false.
     */
    newSubscriberAvailability?: boolean | null;
    /**
     * Required. Immutable. Region code this configuration applies to, as defined by ISO 3166-2, e.g. "US".
     */
    regionCode?: string | null;
  }
  /**
   * Configuration for a single phase of a subscription offer in a single region.
   */
  export interface Schema$RegionalSubscriptionOfferPhaseConfig {
    /**
     * The absolute amount of money subtracted from the base plan price prorated over the phase duration that the user pays for this offer phase. For example, if the base plan price for this region is $12 for a period of 1 year, then a $1 absolute discount for a phase of a duration of 3 months would correspond to a price of $2. The resulting price may not be smaller than the minimum price allowed for this region.
     */
    absoluteDiscount?: Schema$Money;
    /**
     * The absolute price the user pays for this offer phase. The price must not be smaller than the minimum price allowed for this region.
     */
    price?: Schema$Money;
    /**
     * Required. Immutable. The region to which this config applies.
     */
    regionCode?: string | null;
    /**
     * The fraction of the base plan price prorated over the phase duration that the user pays for this offer phase. For example, if the base plan price for this region is $12 for a period of 1 year, then a 50% discount for a phase of a duration of 3 months would correspond to a price of $1.50. The discount must be specified as a fraction strictly larger than 0 and strictly smaller than 1. The resulting price will be rounded to the nearest billable unit (e.g. cents for USD). The relative discount is considered invalid if the discounted price ends up being smaller than the minimum price allowed in this region.
     */
    relativeDiscount?: number | null;
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
     * To collect communications or amusement taxes in the United States, choose the appropriate tax category. [Learn more](https://support.google.com/googleplay/android-developer/answer/10463498#streaming_tax).
     */
    streamingTaxType?: string | null;
    /**
     * Tax tier to specify reduced tax rate. Developers who sell digital news, magazines, newspapers, books, or audiobooks in various regions may be eligible for reduced tax rates. [Learn more](https://support.google.com/googleplay/android-developer/answer/10463498).
     */
    taxTier?: string | null;
  }
  /**
   * The version of the available regions being used for the specified resource.
   */
  export interface Schema$RegionsVersion {
    /**
     * Required. A string representing version of the available regions being used for the specified resource. The current version is 2022/02.
     */
    version?: string | null;
  }
  /**
   * Information specific to cancellations caused by subscription replacement.
   */
  export interface Schema$ReplacementCancellation {}
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
   * Information associated with purchases made with 'Subscribe with Google'.
   */
  export interface Schema$SubscribeWithGoogleInfo {
    /**
     * The email address of the user when the subscription was purchased.
     */
    emailAddress?: string | null;
    /**
     * The family name of the user when the subscription was purchased.
     */
    familyName?: string | null;
    /**
     * The given name of the user when the subscription was purchased.
     */
    givenName?: string | null;
    /**
     * The Google profile id of the user when the subscription was purchased.
     */
    profileId?: string | null;
    /**
     * The profile name of the user when the subscription was purchased.
     */
    profileName?: string | null;
  }
  /**
   * A single subscription for an app.
   */
  export interface Schema$Subscription {
    /**
     * Output only. Whether this subscription is archived. Archived subscriptions are not available to any subscriber any longer, cannot be updated, and are not returned in list requests unless the show archived flag is passed in.
     */
    archived?: boolean | null;
    /**
     * The set of base plans for this subscription. Represents the prices and duration of the subscription if no other offers apply.
     */
    basePlans?: Schema$BasePlan[];
    /**
     * Required. List of localized listings for this subscription. Must contain at least an entry for the default language of the parent app.
     */
    listings?: Schema$SubscriptionListing[];
    /**
     * Immutable. Package name of the parent app.
     */
    packageName?: string | null;
    /**
     * Immutable. Unique product ID of the product. Unique within the parent app. Product IDs must be composed of lower-case letters (a-z), numbers (0-9), underscores (_) and dots (.). It must start with a lower-case letter or number, and be between 1 and 40 (inclusive) characters in length.
     */
    productId?: string | null;
    /**
     * Details about taxes and legal compliance.
     */
    taxAndComplianceSettings?: Schema$SubscriptionTaxAndComplianceSettings;
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
   * Price change related information of a subscription item.
   */
  export interface Schema$SubscriptionItemPriceChangeDetails {
    /**
     * The renewal time at which the price change will become effective for the user. This is subject to change(to a future time) due to cases where the renewal time shifts like pause.
     */
    expectedNewPriceChargeTime?: string | null;
    /**
     * New recurring price for the subscription item.
     */
    newPrice?: Schema$Money;
    /**
     * Price change mode specifies how the subscription item price is changing.
     */
    priceChangeMode?: string | null;
    /**
     * State the price change is currently in.
     */
    priceChangeState?: string | null;
  }
  /**
   * The consumer-visible metadata of a subscription.
   */
  export interface Schema$SubscriptionListing {
    /**
     * A list of benefits shown to the user on platforms such as the Play Store and in restoration flows in the language of this listing. Plain text. Ordered list of at most four benefits.
     */
    benefits?: string[] | null;
    /**
     * The description of this subscription in the language of this listing. Maximum length - 80 characters. Plain text.
     */
    description?: string | null;
    /**
     * Required. The language of this listing, as defined by BCP-47, e.g. "en-US".
     */
    languageCode?: string | null;
    /**
     * Required. The title of this subscription in the language of this listing. Plain text.
     */
    title?: string | null;
  }
  /**
   * A single, temporary offer
   */
  export interface Schema$SubscriptionOffer {
    /**
     * Required. Immutable. The ID of the base plan to which this offer is an extension.
     */
    basePlanId?: string | null;
    /**
     * Required. Immutable. Unique ID of this subscription offer. Must be unique within the base plan.
     */
    offerId?: string | null;
    /**
     * List of up to 20 custom tags specified for this offer, and returned to the app through the billing library.
     */
    offerTags?: Schema$OfferTag[];
    /**
     * The configuration for any new locations Play may launch in the future.
     */
    otherRegionsConfig?: Schema$OtherRegionsSubscriptionOfferConfig;
    /**
     * Required. Immutable. The package name of the app the parent subscription belongs to.
     */
    packageName?: string | null;
    /**
     * Required. The phases of this subscription offer. Must contain at least one entry, and may contain at most five. Users will always receive all these phases in the specified order. Phases may not be added, removed, or reordered after initial creation.
     */
    phases?: Schema$SubscriptionOfferPhase[];
    /**
     * Required. Immutable. The ID of the parent subscription this offer belongs to.
     */
    productId?: string | null;
    /**
     * Required. The region-specific configuration of this offer. Must contain at least one entry.
     */
    regionalConfigs?: Schema$RegionalSubscriptionOfferConfig[];
    /**
     * Output only. The current state of this offer. Can be changed using Activate and Deactivate actions. NB: the base plan state supersedes this state, so an active offer may not be available if the base plan is not active.
     */
    state?: string | null;
    /**
     * The requirements that users need to fulfil to be eligible for this offer. Represents the requirements that Play will evaluate to decide whether an offer should be returned. Developers may further filter these offers themselves.
     */
    targeting?: Schema$SubscriptionOfferTargeting;
  }
  /**
   * A single phase of a subscription offer.
   */
  export interface Schema$SubscriptionOfferPhase {
    /**
     * Required. The duration of a single recurrence of this phase. Specified in ISO 8601 format.
     */
    duration?: string | null;
    /**
     * Pricing information for any new locations Play may launch in.
     */
    otherRegionsConfig?: Schema$OtherRegionsSubscriptionOfferPhaseConfig;
    /**
     * Required. The number of times this phase repeats. If this offer phase is not free, each recurrence charges the user the price of this offer phase.
     */
    recurrenceCount?: number | null;
    /**
     * Required. The region-specific configuration of this offer phase. This list must contain exactly one entry for each region for which the subscription offer has a regional config.
     */
    regionalConfigs?: Schema$RegionalSubscriptionOfferPhaseConfig[];
  }
  /**
   * Defines the rule a user needs to satisfy to receive this offer.
   */
  export interface Schema$SubscriptionOfferTargeting {
    /**
     * Offer targeting rule for new user acquisition.
     */
    acquisitionRule?: Schema$AcquisitionTargetingRule;
    /**
     * Offer targeting rule for upgrading users' existing plans.
     */
    upgradeRule?: Schema$UpgradeTargetingRule;
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
   * Item-level info for a subscription purchase.
   */
  export interface Schema$SubscriptionPurchaseLineItem {
    /**
     * The item is auto renewing.
     */
    autoRenewingPlan?: Schema$AutoRenewingPlan;
    /**
     * Time at which the subscription expired or will expire unless the access is extended (ex. renews).
     */
    expiryTime?: string | null;
    /**
     * The offer details for this item.
     */
    offerDetails?: Schema$OfferDetails;
    /**
     * The item is prepaid.
     */
    prepaidPlan?: Schema$PrepaidPlan;
    /**
     * The purchased product ID (for example, 'monthly001').
     */
    productId?: string | null;
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
   * Indicates the status of a user's subscription purchase.
   */
  export interface Schema$SubscriptionPurchaseV2 {
    /**
     * The acknowledgement state of the subscription.
     */
    acknowledgementState?: string | null;
    /**
     * Additional context around canceled subscriptions. Only present if the subscription currently has subscription_state SUBSCRIPTION_STATE_CANCELED.
     */
    canceledStateContext?: Schema$CanceledStateContext;
    /**
     * User account identifier in the third-party service.
     */
    externalAccountIdentifiers?: Schema$ExternalAccountIdentifiers;
    /**
     * This kind represents a SubscriptionPurchaseV2 object in the androidpublisher service.
     */
    kind?: string | null;
    /**
     * The order id of the latest order associated with the purchase of the subscription. For autoRenewing subscription, this is the order id of signup order if it is not renewed yet, or the last recurring order id (success, pending, or declined order). For prepaid subscription, this is the order id associated with the queried purchase token.
     */
    latestOrderId?: string | null;
    /**
     * Item-level info for a subscription purchase. The items in the same purchase should be either all with AutoRenewingPlan or all with PrepaidPlan.
     */
    lineItems?: Schema$SubscriptionPurchaseLineItem[];
    /**
     * The purchase token of the old subscription if this subscription is one of the following: * Re-signup of a canceled but non-lapsed subscription * Upgrade/downgrade from a previous subscription. * Convert from prepaid to auto renewing subscription. * Convert from an auto renewing subscription to prepaid. * Topup a prepaid subscription.
     */
    linkedPurchaseToken?: string | null;
    /**
     * Additional context around paused subscriptions. Only present if the subscription currently has subscription_state SUBSCRIPTION_STATE_PAUSED.
     */
    pausedStateContext?: Schema$PausedStateContext;
    /**
     * ISO 3166-1 alpha-2 billing country/region code of the user at the time the subscription was granted.
     */
    regionCode?: string | null;
    /**
     * Time at which the subscription was granted. Not set for pending subscriptions (subscription was created but awaiting payment during signup).
     */
    startTime?: string | null;
    /**
     * User profile associated with purchases made with 'Subscribe with Google'.
     */
    subscribeWithGoogleInfo?: Schema$SubscribeWithGoogleInfo;
    /**
     * The current state of the subscription.
     */
    subscriptionState?: string | null;
    /**
     * Only present if this subscription purchase is a test purchase.
     */
    testPurchase?: Schema$TestPurchase;
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
   * Representation of a system feature.
   */
  export interface Schema$SystemFeature {
    /**
     * The name of the feature.
     */
    name?: string | null;
  }
  /**
   * Information specific to cancellations initiated by Google system.
   */
  export interface Schema$SystemInitiatedCancellation {}
  /**
   * Defines the scope of subscriptions which a targeting rule can match to target offers to users based on past or current entitlement.
   */
  export interface Schema$TargetingRuleScope {
    /**
     * The scope of the current targeting rule is the subscription with the specified subscription ID. Must be a subscription within the same parent app.
     */
    specificSubscriptionInApp?: string | null;
  }
  /**
   * The testers of an app. The resource for TestersService. Note: while it is possible in the Play Console UI to add testers via email lists, email lists are not supported by this resource.
   */
  export interface Schema$Testers {
    /**
     * All testing Google Groups, as email addresses.
     */
    googleGroups?: string[] | null;
  }
  /**
   * Whether this subscription purchase is a test purchase.
   */
  export interface Schema$TestPurchase {}
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
     * Identifier of the track. Form factor tracks have a special prefix as an identifier, for example `wear:production`, `automotive:production`. [More on track name](https://developers.google.com/android-publisher/tracks#ff-track-name)
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
   * Represents a targeting rule of the form: User currently has {scope\} [with billing period {billing_period\}].
   */
  export interface Schema$UpgradeTargetingRule {
    /**
     * The specific billing period duration, specified in ISO 8601 format, that a user must be currently subscribed to to be eligible for this rule. If not specified, users subscribed to any billing period are matched.
     */
    billingPeriodDuration?: string | null;
    /**
     * Limit this offer to only once per user. If set to true, a user can never be eligible for this offer again if they ever subscribed to this offer.
     */
    oncePerUser?: boolean | null;
    /**
     * Required. The scope of subscriptions this rule considers. Only allows "this subscription" and "specific subscription in app".
     */
    scope?: Schema$TargetingRuleScope;
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
     * The time at which the user's access expires, if set. When setting this value, it must always be in the future.
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
     * Output only. Whether there are more permissions for the user that are not represented here. This can happen if the caller does not have permission to manage all apps in the account. This is also `true` if this user is the account owner. If this field is `true`, it should be taken as a signal that this user cannot be fully managed via the API. That is, the API caller is not be able to manage all of the permissions this user holds, either because it doesn't know about them or because the user is the account owner.
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
   * A set of user countries. A country set determines what variation of app content gets served to a specific location.
   */
  export interface Schema$UserCountrySet {
    /**
     * List of country codes representing countries. A Country code is represented in ISO 3166 alpha-2 format. For Example:- "IT" for Italy, "GE" for Georgia.
     */
    countryCodes?: string[] | null;
    /**
     * Country set name.
     */
    name?: string | null;
  }
  /**
   * Information specific to cancellations initiated by users.
   */
  export interface Schema$UserInitiatedCancellation {
    /**
     * Information provided by the user when they complete the subscription cancellation flow (cancellation reason survey).
     */
    cancelSurveyResult?: Schema$CancelSurveyResult;
    /**
     * The time at which the subscription was canceled by the user. The user might still have access to the subscription after this time. Use line_items.expiry_time to determine if a user still has access.
     */
    cancelTime?: string | null;
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

  export class Resource$Applications {
    context: APIRequestContext;
    deviceTierConfigs: Resource$Applications$Devicetierconfigs;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.deviceTierConfigs = new Resource$Applications$Devicetierconfigs(
        this.context
      );
    }
  }

  export class Resource$Applications$Devicetierconfigs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new device tier config for an app.
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
     *   const res = await androidpublisher.applications.deviceTierConfigs.create({
     *     // Whether the service should accept device IDs that are unknown to Play's device catalog.
     *     allowUnknownDevices: 'placeholder-value',
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "deviceGroups": [],
     *       //   "deviceTierConfigId": "my_deviceTierConfigId",
     *       //   "deviceTierSet": {},
     *       //   "userCountrySets": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "deviceGroups": [],
     *   //   "deviceTierConfigId": "my_deviceTierConfigId",
     *   //   "deviceTierSet": {},
     *   //   "userCountrySets": []
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
      params: Params$Resource$Applications$Devicetierconfigs$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Applications$Devicetierconfigs$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DeviceTierConfig>;
    create(
      params: Params$Resource$Applications$Devicetierconfigs$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Applications$Devicetierconfigs$Create,
      options: MethodOptions | BodyResponseCallback<Schema$DeviceTierConfig>,
      callback: BodyResponseCallback<Schema$DeviceTierConfig>
    ): void;
    create(
      params: Params$Resource$Applications$Devicetierconfigs$Create,
      callback: BodyResponseCallback<Schema$DeviceTierConfig>
    ): void;
    create(callback: BodyResponseCallback<Schema$DeviceTierConfig>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Applications$Devicetierconfigs$Create
        | BodyResponseCallback<Schema$DeviceTierConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DeviceTierConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DeviceTierConfig>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$DeviceTierConfig> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Applications$Devicetierconfigs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Applications$Devicetierconfigs$Create;
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
              '/androidpublisher/v3/applications/{packageName}/deviceTierConfigs'
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
        createAPIRequest<Schema$DeviceTierConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DeviceTierConfig>(parameters);
      }
    }

    /**
     * Returns a particular device tier config.
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
     *   const res = await androidpublisher.applications.deviceTierConfigs.get({
     *     // Required. Id of an existing device tier config.
     *     deviceTierConfigId: 'placeholder-value',
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "deviceGroups": [],
     *   //   "deviceTierConfigId": "my_deviceTierConfigId",
     *   //   "deviceTierSet": {},
     *   //   "userCountrySets": []
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
      params: Params$Resource$Applications$Devicetierconfigs$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Applications$Devicetierconfigs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DeviceTierConfig>;
    get(
      params: Params$Resource$Applications$Devicetierconfigs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Applications$Devicetierconfigs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$DeviceTierConfig>,
      callback: BodyResponseCallback<Schema$DeviceTierConfig>
    ): void;
    get(
      params: Params$Resource$Applications$Devicetierconfigs$Get,
      callback: BodyResponseCallback<Schema$DeviceTierConfig>
    ): void;
    get(callback: BodyResponseCallback<Schema$DeviceTierConfig>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Applications$Devicetierconfigs$Get
        | BodyResponseCallback<Schema$DeviceTierConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DeviceTierConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DeviceTierConfig>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$DeviceTierConfig> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Applications$Devicetierconfigs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Applications$Devicetierconfigs$Get;
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
              '/androidpublisher/v3/applications/{packageName}/deviceTierConfigs/{deviceTierConfigId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'deviceTierConfigId'],
        pathParams: ['deviceTierConfigId', 'packageName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DeviceTierConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DeviceTierConfig>(parameters);
      }
    }

    /**
     * Returns created device tier configs, ordered by descending creation time.
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
     *   const res = await androidpublisher.applications.deviceTierConfigs.list({
     *     // Package name of the app.
     *     packageName: 'placeholder-value',
     *     // The maximum number of device tier configs to return. The service may return fewer than this value. If unspecified, at most 10 device tier configs will be returned. The maximum value for this field is 100; values above 100 will be coerced to 100. Device tier configs will be ordered by descending creation time.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListDeviceTierConfigs` call. Provide this to retrieve the subsequent page.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "deviceTierConfigs": [],
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
      params: Params$Resource$Applications$Devicetierconfigs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Applications$Devicetierconfigs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListDeviceTierConfigsResponse>;
    list(
      params: Params$Resource$Applications$Devicetierconfigs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Applications$Devicetierconfigs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDeviceTierConfigsResponse>,
      callback: BodyResponseCallback<Schema$ListDeviceTierConfigsResponse>
    ): void;
    list(
      params: Params$Resource$Applications$Devicetierconfigs$List,
      callback: BodyResponseCallback<Schema$ListDeviceTierConfigsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListDeviceTierConfigsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Applications$Devicetierconfigs$List
        | BodyResponseCallback<Schema$ListDeviceTierConfigsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDeviceTierConfigsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDeviceTierConfigsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListDeviceTierConfigsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Applications$Devicetierconfigs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Applications$Devicetierconfigs$List;
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
              '/androidpublisher/v3/applications/{packageName}/deviceTierConfigs'
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
        createAPIRequest<Schema$ListDeviceTierConfigsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDeviceTierConfigsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Applications$Devicetierconfigs$Create
    extends StandardParameters {
    /**
     * Whether the service should accept device IDs that are unknown to Play's device catalog.
     */
    allowUnknownDevices?: boolean;
    /**
     * Package name of the app.
     */
    packageName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DeviceTierConfig;
  }
  export interface Params$Resource$Applications$Devicetierconfigs$Get
    extends StandardParameters {
    /**
     * Required. Id of an existing device tier config.
     */
    deviceTierConfigId?: string;
    /**
     * Package name of the app.
     */
    packageName?: string;
  }
  export interface Params$Resource$Applications$Devicetierconfigs$List
    extends StandardParameters {
    /**
     * Package name of the app.
     */
    packageName?: string;
    /**
     * The maximum number of device tier configs to return. The service may return fewer than this value. If unspecified, at most 10 device tier configs will be returned. The maximum value for this field is 100; values above 100 will be coerced to 100. Device tier configs will be ordered by descending creation time.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListDeviceTierConfigs` call. Provide this to retrieve the subsequent page.
     */
    pageToken?: string;
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
     *     // Device tier config (DTC) to be used for generating deliverables (APKs). Contains id of the DTC or "LATEST" for last uploaded DTC.
     *     deviceTierConfigId: 'placeholder-value',
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
     * Device tier config (DTC) to be used for generating deliverables (APKs). Contains id of the DTC or "LATEST" for last uploaded DTC.
     */
    deviceTierConfigId?: string;
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
     * Gets testers. Note: Testers resource does not support email lists.
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
     * Patches testers. Note: Testers resource does not support email lists.
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
     * Updates testers. Note: Testers resource does not support email lists.
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
     *     // Identifier of the track. [More on track name](https://developers.google.com/android-publisher/tracks#ff-track-name)
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
     *     // Identifier of the track. [More on track name](https://developers.google.com/android-publisher/tracks#ff-track-name)
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
     *     // Identifier of the track. [More on track name](https://developers.google.com/android-publisher/tracks#ff-track-name)
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
     * Identifier of the track. [More on track name](https://developers.google.com/android-publisher/tracks#ff-track-name)
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
     * Identifier of the track. [More on track name](https://developers.google.com/android-publisher/tracks#ff-track-name)
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
     * Identifier of the track. [More on track name](https://developers.google.com/android-publisher/tracks#ff-track-name)
     */
    track?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Track;
  }

  export class Resource$Externaltransactions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new external transaction.
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
     *   const res =
     *     await androidpublisher.externaltransactions.createexternaltransaction({
     *       // Required. The id to use for the external transaction. Must be unique across all other transactions for the app. This value should be 1-63 characters and valid characters are /a-z0-9_-/.
     *       externalTransactionId: 'placeholder-value',
     *       // Required. The parent resource where this external transaction will be created. Format: applications/{package_name\}
     *       parent: 'applications/my-application',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "createTime": "my_createTime",
     *         //   "currentPreTaxAmount": {},
     *         //   "currentTaxAmount": {},
     *         //   "externalTransactionId": "my_externalTransactionId",
     *         //   "oneTimeTransaction": {},
     *         //   "originalPreTaxAmount": {},
     *         //   "originalTaxAmount": {},
     *         //   "packageName": "my_packageName",
     *         //   "recurringTransaction": {},
     *         //   "testPurchase": {},
     *         //   "transactionState": "my_transactionState",
     *         //   "transactionTime": "my_transactionTime",
     *         //   "userTaxAddress": {}
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "currentPreTaxAmount": {},
     *   //   "currentTaxAmount": {},
     *   //   "externalTransactionId": "my_externalTransactionId",
     *   //   "oneTimeTransaction": {},
     *   //   "originalPreTaxAmount": {},
     *   //   "originalTaxAmount": {},
     *   //   "packageName": "my_packageName",
     *   //   "recurringTransaction": {},
     *   //   "testPurchase": {},
     *   //   "transactionState": "my_transactionState",
     *   //   "transactionTime": "my_transactionTime",
     *   //   "userTaxAddress": {}
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
    createexternaltransaction(
      params: Params$Resource$Externaltransactions$Createexternaltransaction,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    createexternaltransaction(
      params?: Params$Resource$Externaltransactions$Createexternaltransaction,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ExternalTransaction>;
    createexternaltransaction(
      params: Params$Resource$Externaltransactions$Createexternaltransaction,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    createexternaltransaction(
      params: Params$Resource$Externaltransactions$Createexternaltransaction,
      options: MethodOptions | BodyResponseCallback<Schema$ExternalTransaction>,
      callback: BodyResponseCallback<Schema$ExternalTransaction>
    ): void;
    createexternaltransaction(
      params: Params$Resource$Externaltransactions$Createexternaltransaction,
      callback: BodyResponseCallback<Schema$ExternalTransaction>
    ): void;
    createexternaltransaction(
      callback: BodyResponseCallback<Schema$ExternalTransaction>
    ): void;
    createexternaltransaction(
      paramsOrCallback?:
        | Params$Resource$Externaltransactions$Createexternaltransaction
        | BodyResponseCallback<Schema$ExternalTransaction>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ExternalTransaction>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ExternalTransaction>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ExternalTransaction>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Externaltransactions$Createexternaltransaction;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Externaltransactions$Createexternaltransaction;
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
              rootUrl + '/androidpublisher/v3/{+parent}/externalTransactions'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ExternalTransaction>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ExternalTransaction>(parameters);
      }
    }

    /**
     * Gets an existing external transaction.
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
     *   const res =
     *     await androidpublisher.externaltransactions.getexternaltransaction({
     *       // Required. The name of the external transaction to retrieve. Format: applications/{package_name\}/externalTransactions/{external_transaction\}
     *       name: 'applications/my-application/externalTransactions/my-externalTransaction',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "currentPreTaxAmount": {},
     *   //   "currentTaxAmount": {},
     *   //   "externalTransactionId": "my_externalTransactionId",
     *   //   "oneTimeTransaction": {},
     *   //   "originalPreTaxAmount": {},
     *   //   "originalTaxAmount": {},
     *   //   "packageName": "my_packageName",
     *   //   "recurringTransaction": {},
     *   //   "testPurchase": {},
     *   //   "transactionState": "my_transactionState",
     *   //   "transactionTime": "my_transactionTime",
     *   //   "userTaxAddress": {}
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
    getexternaltransaction(
      params: Params$Resource$Externaltransactions$Getexternaltransaction,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getexternaltransaction(
      params?: Params$Resource$Externaltransactions$Getexternaltransaction,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ExternalTransaction>;
    getexternaltransaction(
      params: Params$Resource$Externaltransactions$Getexternaltransaction,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getexternaltransaction(
      params: Params$Resource$Externaltransactions$Getexternaltransaction,
      options: MethodOptions | BodyResponseCallback<Schema$ExternalTransaction>,
      callback: BodyResponseCallback<Schema$ExternalTransaction>
    ): void;
    getexternaltransaction(
      params: Params$Resource$Externaltransactions$Getexternaltransaction,
      callback: BodyResponseCallback<Schema$ExternalTransaction>
    ): void;
    getexternaltransaction(
      callback: BodyResponseCallback<Schema$ExternalTransaction>
    ): void;
    getexternaltransaction(
      paramsOrCallback?:
        | Params$Resource$Externaltransactions$Getexternaltransaction
        | BodyResponseCallback<Schema$ExternalTransaction>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ExternalTransaction>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ExternalTransaction>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ExternalTransaction>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Externaltransactions$Getexternaltransaction;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Externaltransactions$Getexternaltransaction;
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
        createAPIRequest<Schema$ExternalTransaction>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ExternalTransaction>(parameters);
      }
    }

    /**
     * Refunds or partially refunds an existing external transaction.
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
     *   const res =
     *     await androidpublisher.externaltransactions.refundexternaltransaction({
     *       // Required. The name of the external transaction that will be refunded. Format: applications/{package_name\}/externalTransactions/{external_transaction\}
     *       name: 'applications/my-application/externalTransactions/my-externalTransaction',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "fullRefund": {},
     *         //   "partialRefund": {},
     *         //   "refundTime": "my_refundTime"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "currentPreTaxAmount": {},
     *   //   "currentTaxAmount": {},
     *   //   "externalTransactionId": "my_externalTransactionId",
     *   //   "oneTimeTransaction": {},
     *   //   "originalPreTaxAmount": {},
     *   //   "originalTaxAmount": {},
     *   //   "packageName": "my_packageName",
     *   //   "recurringTransaction": {},
     *   //   "testPurchase": {},
     *   //   "transactionState": "my_transactionState",
     *   //   "transactionTime": "my_transactionTime",
     *   //   "userTaxAddress": {}
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
    refundexternaltransaction(
      params: Params$Resource$Externaltransactions$Refundexternaltransaction,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    refundexternaltransaction(
      params?: Params$Resource$Externaltransactions$Refundexternaltransaction,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ExternalTransaction>;
    refundexternaltransaction(
      params: Params$Resource$Externaltransactions$Refundexternaltransaction,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    refundexternaltransaction(
      params: Params$Resource$Externaltransactions$Refundexternaltransaction,
      options: MethodOptions | BodyResponseCallback<Schema$ExternalTransaction>,
      callback: BodyResponseCallback<Schema$ExternalTransaction>
    ): void;
    refundexternaltransaction(
      params: Params$Resource$Externaltransactions$Refundexternaltransaction,
      callback: BodyResponseCallback<Schema$ExternalTransaction>
    ): void;
    refundexternaltransaction(
      callback: BodyResponseCallback<Schema$ExternalTransaction>
    ): void;
    refundexternaltransaction(
      paramsOrCallback?:
        | Params$Resource$Externaltransactions$Refundexternaltransaction
        | BodyResponseCallback<Schema$ExternalTransaction>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ExternalTransaction>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ExternalTransaction>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ExternalTransaction>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Externaltransactions$Refundexternaltransaction;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Externaltransactions$Refundexternaltransaction;
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
            url: (rootUrl + '/androidpublisher/v3/{+name}:refund').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ExternalTransaction>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ExternalTransaction>(parameters);
      }
    }
  }

  export interface Params$Resource$Externaltransactions$Createexternaltransaction
    extends StandardParameters {
    /**
     * Required. The id to use for the external transaction. Must be unique across all other transactions for the app. This value should be 1-63 characters and valid characters are /a-z0-9_-/.
     */
    externalTransactionId?: string;
    /**
     * Required. The parent resource where this external transaction will be created. Format: applications/{package_name\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ExternalTransaction;
  }
  export interface Params$Resource$Externaltransactions$Getexternaltransaction
    extends StandardParameters {
    /**
     * Required. The name of the external transaction to retrieve. Format: applications/{package_name\}/externalTransactions/{external_transaction\}
     */
    name?: string;
  }
  export interface Params$Resource$Externaltransactions$Refundexternaltransaction
    extends StandardParameters {
    /**
     * Required. The name of the external transaction that will be refunded. Format: applications/{package_name\}/externalTransactions/{external_transaction\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RefundExternalTransactionRequest;
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
     *     // Required. Resource name for this grant, following the pattern "developers/{developer\}/users/{email\}/grants/{package_name\}". If this grant is for a draft app, the app ID will be used in this resource name instead of the package name.
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
     * Required. Resource name for this grant, following the pattern "developers/{developer\}/users/{email\}/grants/{package_name\}". If this grant is for a draft app, the app ID will be used in this resource name instead of the package name.
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
    subscriptions: Resource$Monetization$Subscriptions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.subscriptions = new Resource$Monetization$Subscriptions(
        this.context
      );
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

  export class Resource$Monetization$Subscriptions {
    context: APIRequestContext;
    basePlans: Resource$Monetization$Subscriptions$Baseplans;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.basePlans = new Resource$Monetization$Subscriptions$Baseplans(
        this.context
      );
    }

    /**
     * Archives a subscription. Can only be done if at least one base plan was active in the past, and no base plan is available for new or existing subscribers currently. This action is irreversible, and the subscription ID will remain reserved.
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
     *   const res = await androidpublisher.monetization.subscriptions.archive({
     *     // Required. The parent app (package name) of the app of the subscription to delete.
     *     packageName: 'placeholder-value',
     *     // Required. The unique product ID of the subscription to delete.
     *     productId: 'placeholder-value',
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
     *   //   "archived": false,
     *   //   "basePlans": [],
     *   //   "listings": [],
     *   //   "packageName": "my_packageName",
     *   //   "productId": "my_productId",
     *   //   "taxAndComplianceSettings": {}
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
    archive(
      params: Params$Resource$Monetization$Subscriptions$Archive,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    archive(
      params?: Params$Resource$Monetization$Subscriptions$Archive,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Subscription>;
    archive(
      params: Params$Resource$Monetization$Subscriptions$Archive,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    archive(
      params: Params$Resource$Monetization$Subscriptions$Archive,
      options: MethodOptions | BodyResponseCallback<Schema$Subscription>,
      callback: BodyResponseCallback<Schema$Subscription>
    ): void;
    archive(
      params: Params$Resource$Monetization$Subscriptions$Archive,
      callback: BodyResponseCallback<Schema$Subscription>
    ): void;
    archive(callback: BodyResponseCallback<Schema$Subscription>): void;
    archive(
      paramsOrCallback?:
        | Params$Resource$Monetization$Subscriptions$Archive
        | BodyResponseCallback<Schema$Subscription>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Subscription>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Subscription>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Subscription> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Monetization$Subscriptions$Archive;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Monetization$Subscriptions$Archive;
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
              '/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}:archive'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'productId'],
        pathParams: ['packageName', 'productId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Subscription>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Subscription>(parameters);
      }
    }

    /**
     * Creates a new subscription. Newly added base plans will remain in draft state until activated.
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
     *   const res = await androidpublisher.monetization.subscriptions.create({
     *     // Required. The parent app (package name) for which the subscription should be created. Must be equal to the package_name field on the Subscription resource.
     *     packageName: 'placeholder-value',
     *     // Required. The ID to use for the subscription. For the requirements on this format, see the documentation of the product_id field on the Subscription resource.
     *     productId: 'placeholder-value',
     *     // Required. A string representing version of the available regions being used for the specified resource. The current version is 2022/02.
     *     'regionsVersion.version': 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "archived": false,
     *       //   "basePlans": [],
     *       //   "listings": [],
     *       //   "packageName": "my_packageName",
     *       //   "productId": "my_productId",
     *       //   "taxAndComplianceSettings": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "archived": false,
     *   //   "basePlans": [],
     *   //   "listings": [],
     *   //   "packageName": "my_packageName",
     *   //   "productId": "my_productId",
     *   //   "taxAndComplianceSettings": {}
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
      params: Params$Resource$Monetization$Subscriptions$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Monetization$Subscriptions$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Subscription>;
    create(
      params: Params$Resource$Monetization$Subscriptions$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Monetization$Subscriptions$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Subscription>,
      callback: BodyResponseCallback<Schema$Subscription>
    ): void;
    create(
      params: Params$Resource$Monetization$Subscriptions$Create,
      callback: BodyResponseCallback<Schema$Subscription>
    ): void;
    create(callback: BodyResponseCallback<Schema$Subscription>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Monetization$Subscriptions$Create
        | BodyResponseCallback<Schema$Subscription>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Subscription>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Subscription>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Subscription> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Monetization$Subscriptions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Monetization$Subscriptions$Create;
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
              '/androidpublisher/v3/applications/{packageName}/subscriptions'
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
        createAPIRequest<Schema$Subscription>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Subscription>(parameters);
      }
    }

    /**
     * Deletes a subscription. A subscription can only be deleted if it has never had a base plan published.
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
     *   const res = await androidpublisher.monetization.subscriptions.delete({
     *     // Required. The parent app (package name) of the app of the subscription to delete.
     *     packageName: 'placeholder-value',
     *     // Required. The unique product ID of the subscription to delete.
     *     productId: 'placeholder-value',
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
      params: Params$Resource$Monetization$Subscriptions$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Monetization$Subscriptions$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Monetization$Subscriptions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Monetization$Subscriptions$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Monetization$Subscriptions$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Monetization$Subscriptions$Delete
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
        {}) as Params$Resource$Monetization$Subscriptions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Monetization$Subscriptions$Delete;
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
              '/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'productId'],
        pathParams: ['packageName', 'productId'],
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
     * Reads a single subscription.
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
     *   const res = await androidpublisher.monetization.subscriptions.get({
     *     // Required. The parent app (package name) of the subscription to get.
     *     packageName: 'placeholder-value',
     *     // Required. The unique product ID of the subscription to get.
     *     productId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "archived": false,
     *   //   "basePlans": [],
     *   //   "listings": [],
     *   //   "packageName": "my_packageName",
     *   //   "productId": "my_productId",
     *   //   "taxAndComplianceSettings": {}
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
      params: Params$Resource$Monetization$Subscriptions$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Monetization$Subscriptions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Subscription>;
    get(
      params: Params$Resource$Monetization$Subscriptions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Monetization$Subscriptions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Subscription>,
      callback: BodyResponseCallback<Schema$Subscription>
    ): void;
    get(
      params: Params$Resource$Monetization$Subscriptions$Get,
      callback: BodyResponseCallback<Schema$Subscription>
    ): void;
    get(callback: BodyResponseCallback<Schema$Subscription>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Monetization$Subscriptions$Get
        | BodyResponseCallback<Schema$Subscription>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Subscription>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Subscription>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Subscription> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Monetization$Subscriptions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Monetization$Subscriptions$Get;
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
              '/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'productId'],
        pathParams: ['packageName', 'productId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Subscription>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Subscription>(parameters);
      }
    }

    /**
     * Lists all subscriptions under a given app.
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
     *   const res = await androidpublisher.monetization.subscriptions.list({
     *     // Required. The parent app (package name) for which the subscriptions should be read.
     *     packageName: 'placeholder-value',
     *     // The maximum number of subscriptions to return. The service may return fewer than this value. If unspecified, at most 50 subscriptions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListSubscriptions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubscriptions` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Whether archived subscriptions should be included in the response. Defaults to false.
     *     showArchived: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "subscriptions": []
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
      params: Params$Resource$Monetization$Subscriptions$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Monetization$Subscriptions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListSubscriptionsResponse>;
    list(
      params: Params$Resource$Monetization$Subscriptions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Monetization$Subscriptions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListSubscriptionsResponse>,
      callback: BodyResponseCallback<Schema$ListSubscriptionsResponse>
    ): void;
    list(
      params: Params$Resource$Monetization$Subscriptions$List,
      callback: BodyResponseCallback<Schema$ListSubscriptionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListSubscriptionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Monetization$Subscriptions$List
        | BodyResponseCallback<Schema$ListSubscriptionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListSubscriptionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListSubscriptionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListSubscriptionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Monetization$Subscriptions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Monetization$Subscriptions$List;
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
              '/androidpublisher/v3/applications/{packageName}/subscriptions'
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
        createAPIRequest<Schema$ListSubscriptionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListSubscriptionsResponse>(parameters);
      }
    }

    /**
     * Updates an existing subscription.
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
     *   const res = await androidpublisher.monetization.subscriptions.patch({
     *     // Immutable. Package name of the parent app.
     *     packageName: 'placeholder-value',
     *     // Immutable. Unique product ID of the product. Unique within the parent app. Product IDs must be composed of lower-case letters (a-z), numbers (0-9), underscores (_) and dots (.). It must start with a lower-case letter or number, and be between 1 and 40 (inclusive) characters in length.
     *     productId: 'placeholder-value',
     *     // Required. A string representing version of the available regions being used for the specified resource. The current version is 2022/02.
     *     'regionsVersion.version': 'placeholder-value',
     *     // Required. The list of fields to be updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "archived": false,
     *       //   "basePlans": [],
     *       //   "listings": [],
     *       //   "packageName": "my_packageName",
     *       //   "productId": "my_productId",
     *       //   "taxAndComplianceSettings": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "archived": false,
     *   //   "basePlans": [],
     *   //   "listings": [],
     *   //   "packageName": "my_packageName",
     *   //   "productId": "my_productId",
     *   //   "taxAndComplianceSettings": {}
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
      params: Params$Resource$Monetization$Subscriptions$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Monetization$Subscriptions$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Subscription>;
    patch(
      params: Params$Resource$Monetization$Subscriptions$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Monetization$Subscriptions$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Subscription>,
      callback: BodyResponseCallback<Schema$Subscription>
    ): void;
    patch(
      params: Params$Resource$Monetization$Subscriptions$Patch,
      callback: BodyResponseCallback<Schema$Subscription>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Subscription>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Monetization$Subscriptions$Patch
        | BodyResponseCallback<Schema$Subscription>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Subscription>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Subscription>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Subscription> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Monetization$Subscriptions$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Monetization$Subscriptions$Patch;
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
              '/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'productId'],
        pathParams: ['packageName', 'productId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Subscription>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Subscription>(parameters);
      }
    }
  }

  export interface Params$Resource$Monetization$Subscriptions$Archive
    extends StandardParameters {
    /**
     * Required. The parent app (package name) of the app of the subscription to delete.
     */
    packageName?: string;
    /**
     * Required. The unique product ID of the subscription to delete.
     */
    productId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ArchiveSubscriptionRequest;
  }
  export interface Params$Resource$Monetization$Subscriptions$Create
    extends StandardParameters {
    /**
     * Required. The parent app (package name) for which the subscription should be created. Must be equal to the package_name field on the Subscription resource.
     */
    packageName?: string;
    /**
     * Required. The ID to use for the subscription. For the requirements on this format, see the documentation of the product_id field on the Subscription resource.
     */
    productId?: string;
    /**
     * Required. A string representing version of the available regions being used for the specified resource. The current version is 2022/02.
     */
    'regionsVersion.version'?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Subscription;
  }
  export interface Params$Resource$Monetization$Subscriptions$Delete
    extends StandardParameters {
    /**
     * Required. The parent app (package name) of the app of the subscription to delete.
     */
    packageName?: string;
    /**
     * Required. The unique product ID of the subscription to delete.
     */
    productId?: string;
  }
  export interface Params$Resource$Monetization$Subscriptions$Get
    extends StandardParameters {
    /**
     * Required. The parent app (package name) of the subscription to get.
     */
    packageName?: string;
    /**
     * Required. The unique product ID of the subscription to get.
     */
    productId?: string;
  }
  export interface Params$Resource$Monetization$Subscriptions$List
    extends StandardParameters {
    /**
     * Required. The parent app (package name) for which the subscriptions should be read.
     */
    packageName?: string;
    /**
     * The maximum number of subscriptions to return. The service may return fewer than this value. If unspecified, at most 50 subscriptions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListSubscriptions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubscriptions` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Whether archived subscriptions should be included in the response. Defaults to false.
     */
    showArchived?: boolean;
  }
  export interface Params$Resource$Monetization$Subscriptions$Patch
    extends StandardParameters {
    /**
     * Immutable. Package name of the parent app.
     */
    packageName?: string;
    /**
     * Immutable. Unique product ID of the product. Unique within the parent app. Product IDs must be composed of lower-case letters (a-z), numbers (0-9), underscores (_) and dots (.). It must start with a lower-case letter or number, and be between 1 and 40 (inclusive) characters in length.
     */
    productId?: string;
    /**
     * Required. A string representing version of the available regions being used for the specified resource. The current version is 2022/02.
     */
    'regionsVersion.version'?: string;
    /**
     * Required. The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Subscription;
  }

  export class Resource$Monetization$Subscriptions$Baseplans {
    context: APIRequestContext;
    offers: Resource$Monetization$Subscriptions$Baseplans$Offers;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.offers = new Resource$Monetization$Subscriptions$Baseplans$Offers(
        this.context
      );
    }

    /**
     * Activates a base plan. Once activated, base plans will be available to new subscribers.
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
     *   const res =
     *     await androidpublisher.monetization.subscriptions.basePlans.activate({
     *       // Required. The unique base plan ID of the base plan to activate.
     *       basePlanId: 'placeholder-value',
     *       // Required. The parent app (package name) of the base plan to activate.
     *       packageName: 'placeholder-value',
     *       // Required. The parent subscription (ID) of the base plan to activate.
     *       productId: 'placeholder-value',
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
     *   //   "archived": false,
     *   //   "basePlans": [],
     *   //   "listings": [],
     *   //   "packageName": "my_packageName",
     *   //   "productId": "my_productId",
     *   //   "taxAndComplianceSettings": {}
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
      params: Params$Resource$Monetization$Subscriptions$Baseplans$Activate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    activate(
      params?: Params$Resource$Monetization$Subscriptions$Baseplans$Activate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Subscription>;
    activate(
      params: Params$Resource$Monetization$Subscriptions$Baseplans$Activate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    activate(
      params: Params$Resource$Monetization$Subscriptions$Baseplans$Activate,
      options: MethodOptions | BodyResponseCallback<Schema$Subscription>,
      callback: BodyResponseCallback<Schema$Subscription>
    ): void;
    activate(
      params: Params$Resource$Monetization$Subscriptions$Baseplans$Activate,
      callback: BodyResponseCallback<Schema$Subscription>
    ): void;
    activate(callback: BodyResponseCallback<Schema$Subscription>): void;
    activate(
      paramsOrCallback?:
        | Params$Resource$Monetization$Subscriptions$Baseplans$Activate
        | BodyResponseCallback<Schema$Subscription>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Subscription>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Subscription>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Subscription> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Monetization$Subscriptions$Baseplans$Activate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Monetization$Subscriptions$Baseplans$Activate;
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
              '/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}:activate'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'productId', 'basePlanId'],
        pathParams: ['basePlanId', 'packageName', 'productId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Subscription>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Subscription>(parameters);
      }
    }

    /**
     * Deactivates a base plan. Once deactivated, the base plan will become unavailable to new subscribers, but existing subscribers will maintain their subscription
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
     *   const res =
     *     await androidpublisher.monetization.subscriptions.basePlans.deactivate({
     *       // Required. The unique base plan ID of the base plan to deactivate.
     *       basePlanId: 'placeholder-value',
     *       // Required. The parent app (package name) of the base plan to deactivate.
     *       packageName: 'placeholder-value',
     *       // Required. The parent subscription (ID) of the base plan to deactivate.
     *       productId: 'placeholder-value',
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
     *   //   "archived": false,
     *   //   "basePlans": [],
     *   //   "listings": [],
     *   //   "packageName": "my_packageName",
     *   //   "productId": "my_productId",
     *   //   "taxAndComplianceSettings": {}
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
      params: Params$Resource$Monetization$Subscriptions$Baseplans$Deactivate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    deactivate(
      params?: Params$Resource$Monetization$Subscriptions$Baseplans$Deactivate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Subscription>;
    deactivate(
      params: Params$Resource$Monetization$Subscriptions$Baseplans$Deactivate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    deactivate(
      params: Params$Resource$Monetization$Subscriptions$Baseplans$Deactivate,
      options: MethodOptions | BodyResponseCallback<Schema$Subscription>,
      callback: BodyResponseCallback<Schema$Subscription>
    ): void;
    deactivate(
      params: Params$Resource$Monetization$Subscriptions$Baseplans$Deactivate,
      callback: BodyResponseCallback<Schema$Subscription>
    ): void;
    deactivate(callback: BodyResponseCallback<Schema$Subscription>): void;
    deactivate(
      paramsOrCallback?:
        | Params$Resource$Monetization$Subscriptions$Baseplans$Deactivate
        | BodyResponseCallback<Schema$Subscription>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Subscription>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Subscription>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Subscription> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Monetization$Subscriptions$Baseplans$Deactivate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Monetization$Subscriptions$Baseplans$Deactivate;
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
              '/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}:deactivate'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'productId', 'basePlanId'],
        pathParams: ['basePlanId', 'packageName', 'productId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Subscription>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Subscription>(parameters);
      }
    }

    /**
     * Deletes a base plan. Can only be done for draft base plans. This action is irreversible.
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
     *   const res =
     *     await androidpublisher.monetization.subscriptions.basePlans.delete({
     *       // Required. The unique offer ID of the base plan to delete.
     *       basePlanId: 'placeholder-value',
     *       // Required. The parent app (package name) of the base plan to delete.
     *       packageName: 'placeholder-value',
     *       // Required. The parent subscription (ID) of the base plan to delete.
     *       productId: 'placeholder-value',
     *     });
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
      params: Params$Resource$Monetization$Subscriptions$Baseplans$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Monetization$Subscriptions$Baseplans$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Monetization$Subscriptions$Baseplans$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Monetization$Subscriptions$Baseplans$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Monetization$Subscriptions$Baseplans$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Monetization$Subscriptions$Baseplans$Delete
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
        {}) as Params$Resource$Monetization$Subscriptions$Baseplans$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Monetization$Subscriptions$Baseplans$Delete;
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
              '/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'productId', 'basePlanId'],
        pathParams: ['basePlanId', 'packageName', 'productId'],
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
     * Migrates subscribers who are receiving an historical subscription price to the currently-offered price for the specified region. Requests will cause price change notifications to be sent to users who are currently receiving an historical price older than the supplied timestamp. Subscribers who do not agree to the new price will have their subscription ended at the next renewal.
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
     *   const res =
     *     await androidpublisher.monetization.subscriptions.basePlans.migratePrices({
     *       // Required. The unique base plan ID of the base plan to update prices on.
     *       basePlanId: 'placeholder-value',
     *       // Required. Package name of the parent app. Must be equal to the package_name field on the Subscription resource.
     *       packageName: 'placeholder-value',
     *       // Required. The ID of the subscription to update. Must be equal to the product_id field on the Subscription resource.
     *       productId: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "regionalPriceMigrations": [],
     *         //   "regionsVersion": {}
     *         // }
     *       },
     *     });
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
    migratePrices(
      params: Params$Resource$Monetization$Subscriptions$Baseplans$Migrateprices,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    migratePrices(
      params?: Params$Resource$Monetization$Subscriptions$Baseplans$Migrateprices,
      options?: MethodOptions
    ): GaxiosPromise<Schema$MigrateBasePlanPricesResponse>;
    migratePrices(
      params: Params$Resource$Monetization$Subscriptions$Baseplans$Migrateprices,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    migratePrices(
      params: Params$Resource$Monetization$Subscriptions$Baseplans$Migrateprices,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$MigrateBasePlanPricesResponse>,
      callback: BodyResponseCallback<Schema$MigrateBasePlanPricesResponse>
    ): void;
    migratePrices(
      params: Params$Resource$Monetization$Subscriptions$Baseplans$Migrateprices,
      callback: BodyResponseCallback<Schema$MigrateBasePlanPricesResponse>
    ): void;
    migratePrices(
      callback: BodyResponseCallback<Schema$MigrateBasePlanPricesResponse>
    ): void;
    migratePrices(
      paramsOrCallback?:
        | Params$Resource$Monetization$Subscriptions$Baseplans$Migrateprices
        | BodyResponseCallback<Schema$MigrateBasePlanPricesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$MigrateBasePlanPricesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$MigrateBasePlanPricesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$MigrateBasePlanPricesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Monetization$Subscriptions$Baseplans$Migrateprices;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Monetization$Subscriptions$Baseplans$Migrateprices;
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
              '/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}:migratePrices'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'productId', 'basePlanId'],
        pathParams: ['basePlanId', 'packageName', 'productId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$MigrateBasePlanPricesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$MigrateBasePlanPricesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Monetization$Subscriptions$Baseplans$Activate
    extends StandardParameters {
    /**
     * Required. The unique base plan ID of the base plan to activate.
     */
    basePlanId?: string;
    /**
     * Required. The parent app (package name) of the base plan to activate.
     */
    packageName?: string;
    /**
     * Required. The parent subscription (ID) of the base plan to activate.
     */
    productId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ActivateBasePlanRequest;
  }
  export interface Params$Resource$Monetization$Subscriptions$Baseplans$Deactivate
    extends StandardParameters {
    /**
     * Required. The unique base plan ID of the base plan to deactivate.
     */
    basePlanId?: string;
    /**
     * Required. The parent app (package name) of the base plan to deactivate.
     */
    packageName?: string;
    /**
     * Required. The parent subscription (ID) of the base plan to deactivate.
     */
    productId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DeactivateBasePlanRequest;
  }
  export interface Params$Resource$Monetization$Subscriptions$Baseplans$Delete
    extends StandardParameters {
    /**
     * Required. The unique offer ID of the base plan to delete.
     */
    basePlanId?: string;
    /**
     * Required. The parent app (package name) of the base plan to delete.
     */
    packageName?: string;
    /**
     * Required. The parent subscription (ID) of the base plan to delete.
     */
    productId?: string;
  }
  export interface Params$Resource$Monetization$Subscriptions$Baseplans$Migrateprices
    extends StandardParameters {
    /**
     * Required. The unique base plan ID of the base plan to update prices on.
     */
    basePlanId?: string;
    /**
     * Required. Package name of the parent app. Must be equal to the package_name field on the Subscription resource.
     */
    packageName?: string;
    /**
     * Required. The ID of the subscription to update. Must be equal to the product_id field on the Subscription resource.
     */
    productId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$MigrateBasePlanPricesRequest;
  }

  export class Resource$Monetization$Subscriptions$Baseplans$Offers {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Activates a subscription offer. Once activated, subscription offers will be available to new subscribers.
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
     *   const res =
     *     await androidpublisher.monetization.subscriptions.basePlans.offers.activate(
     *       {
     *         // Required. The parent base plan (ID) of the offer to activate.
     *         basePlanId: 'placeholder-value',
     *         // Required. The unique offer ID of the offer to activate.
     *         offerId: 'placeholder-value',
     *         // Required. The parent app (package name) of the offer to activate.
     *         packageName: 'placeholder-value',
     *         // Required. The parent subscription (ID) of the offer to activate.
     *         productId: 'placeholder-value',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {}
     *         },
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "basePlanId": "my_basePlanId",
     *   //   "offerId": "my_offerId",
     *   //   "offerTags": [],
     *   //   "otherRegionsConfig": {},
     *   //   "packageName": "my_packageName",
     *   //   "phases": [],
     *   //   "productId": "my_productId",
     *   //   "regionalConfigs": [],
     *   //   "state": "my_state",
     *   //   "targeting": {}
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
      params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Activate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    activate(
      params?: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Activate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SubscriptionOffer>;
    activate(
      params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Activate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    activate(
      params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Activate,
      options: MethodOptions | BodyResponseCallback<Schema$SubscriptionOffer>,
      callback: BodyResponseCallback<Schema$SubscriptionOffer>
    ): void;
    activate(
      params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Activate,
      callback: BodyResponseCallback<Schema$SubscriptionOffer>
    ): void;
    activate(callback: BodyResponseCallback<Schema$SubscriptionOffer>): void;
    activate(
      paramsOrCallback?:
        | Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Activate
        | BodyResponseCallback<Schema$SubscriptionOffer>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SubscriptionOffer>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SubscriptionOffer>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SubscriptionOffer>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Activate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Activate;
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
              '/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}:activate'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'productId', 'basePlanId', 'offerId'],
        pathParams: ['basePlanId', 'offerId', 'packageName', 'productId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SubscriptionOffer>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SubscriptionOffer>(parameters);
      }
    }

    /**
     * Creates a new subscription offer. Only auto-renewing base plans can have subscription offers. The offer state will be DRAFT until it is activated.
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
     *   const res =
     *     await androidpublisher.monetization.subscriptions.basePlans.offers.create({
     *       // Required. The parent base plan (ID) for which the offer should be created. Must be equal to the base_plan_id field on the SubscriptionOffer resource.
     *       basePlanId: 'placeholder-value',
     *       // Required. The ID to use for the offer. For the requirements on this format, see the documentation of the offer_id field on the SubscriptionOffer resource.
     *       offerId: 'placeholder-value',
     *       // Required. The parent app (package name) for which the offer should be created. Must be equal to the package_name field on the Subscription resource.
     *       packageName: 'placeholder-value',
     *       // Required. The parent subscription (ID) for which the offer should be created. Must be equal to the product_id field on the SubscriptionOffer resource.
     *       productId: 'placeholder-value',
     *       // Required. A string representing version of the available regions being used for the specified resource. The current version is 2022/02.
     *       'regionsVersion.version': 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "basePlanId": "my_basePlanId",
     *         //   "offerId": "my_offerId",
     *         //   "offerTags": [],
     *         //   "otherRegionsConfig": {},
     *         //   "packageName": "my_packageName",
     *         //   "phases": [],
     *         //   "productId": "my_productId",
     *         //   "regionalConfigs": [],
     *         //   "state": "my_state",
     *         //   "targeting": {}
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "basePlanId": "my_basePlanId",
     *   //   "offerId": "my_offerId",
     *   //   "offerTags": [],
     *   //   "otherRegionsConfig": {},
     *   //   "packageName": "my_packageName",
     *   //   "phases": [],
     *   //   "productId": "my_productId",
     *   //   "regionalConfigs": [],
     *   //   "state": "my_state",
     *   //   "targeting": {}
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
      params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SubscriptionOffer>;
    create(
      params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Create,
      options: MethodOptions | BodyResponseCallback<Schema$SubscriptionOffer>,
      callback: BodyResponseCallback<Schema$SubscriptionOffer>
    ): void;
    create(
      params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Create,
      callback: BodyResponseCallback<Schema$SubscriptionOffer>
    ): void;
    create(callback: BodyResponseCallback<Schema$SubscriptionOffer>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Create
        | BodyResponseCallback<Schema$SubscriptionOffer>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SubscriptionOffer>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SubscriptionOffer>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SubscriptionOffer>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Create;
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
              '/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'productId', 'basePlanId'],
        pathParams: ['basePlanId', 'packageName', 'productId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SubscriptionOffer>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SubscriptionOffer>(parameters);
      }
    }

    /**
     * Deactivates a subscription offer. Once deactivated, existing subscribers will maintain their subscription, but the offer will become unavailable to new subscribers.
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
     *   const res =
     *     await androidpublisher.monetization.subscriptions.basePlans.offers.deactivate(
     *       {
     *         // Required. The parent base plan (ID) of the offer to deactivate.
     *         basePlanId: 'placeholder-value',
     *         // Required. The unique offer ID of the offer to deactivate.
     *         offerId: 'placeholder-value',
     *         // Required. The parent app (package name) of the offer to deactivate.
     *         packageName: 'placeholder-value',
     *         // Required. The parent subscription (ID) of the offer to deactivate.
     *         productId: 'placeholder-value',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {}
     *         },
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "basePlanId": "my_basePlanId",
     *   //   "offerId": "my_offerId",
     *   //   "offerTags": [],
     *   //   "otherRegionsConfig": {},
     *   //   "packageName": "my_packageName",
     *   //   "phases": [],
     *   //   "productId": "my_productId",
     *   //   "regionalConfigs": [],
     *   //   "state": "my_state",
     *   //   "targeting": {}
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
      params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Deactivate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    deactivate(
      params?: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Deactivate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SubscriptionOffer>;
    deactivate(
      params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Deactivate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    deactivate(
      params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Deactivate,
      options: MethodOptions | BodyResponseCallback<Schema$SubscriptionOffer>,
      callback: BodyResponseCallback<Schema$SubscriptionOffer>
    ): void;
    deactivate(
      params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Deactivate,
      callback: BodyResponseCallback<Schema$SubscriptionOffer>
    ): void;
    deactivate(callback: BodyResponseCallback<Schema$SubscriptionOffer>): void;
    deactivate(
      paramsOrCallback?:
        | Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Deactivate
        | BodyResponseCallback<Schema$SubscriptionOffer>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SubscriptionOffer>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SubscriptionOffer>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SubscriptionOffer>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Deactivate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Deactivate;
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
              '/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}:deactivate'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'productId', 'basePlanId', 'offerId'],
        pathParams: ['basePlanId', 'offerId', 'packageName', 'productId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SubscriptionOffer>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SubscriptionOffer>(parameters);
      }
    }

    /**
     * Deletes a subscription offer. Can only be done for draft offers. This action is irreversible.
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
     *   const res =
     *     await androidpublisher.monetization.subscriptions.basePlans.offers.delete({
     *       // Required. The parent base plan (ID) of the offer to delete.
     *       basePlanId: 'placeholder-value',
     *       // Required. The unique offer ID of the offer to delete.
     *       offerId: 'placeholder-value',
     *       // Required. The parent app (package name) of the offer to delete.
     *       packageName: 'placeholder-value',
     *       // Required. The parent subscription (ID) of the offer to delete.
     *       productId: 'placeholder-value',
     *     });
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
      params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Delete
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
        {}) as Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Delete;
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
              '/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'productId', 'basePlanId', 'offerId'],
        pathParams: ['basePlanId', 'offerId', 'packageName', 'productId'],
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
     * Reads a single offer
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
     *   const res =
     *     await androidpublisher.monetization.subscriptions.basePlans.offers.get({
     *       // Required. The parent base plan (ID) of the offer to get.
     *       basePlanId: 'placeholder-value',
     *       // Required. The unique offer ID of the offer to get.
     *       offerId: 'placeholder-value',
     *       // Required. The parent app (package name) of the offer to get.
     *       packageName: 'placeholder-value',
     *       // Required. The parent subscription (ID) of the offer to get.
     *       productId: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "basePlanId": "my_basePlanId",
     *   //   "offerId": "my_offerId",
     *   //   "offerTags": [],
     *   //   "otherRegionsConfig": {},
     *   //   "packageName": "my_packageName",
     *   //   "phases": [],
     *   //   "productId": "my_productId",
     *   //   "regionalConfigs": [],
     *   //   "state": "my_state",
     *   //   "targeting": {}
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
      params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SubscriptionOffer>;
    get(
      params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Get,
      options: MethodOptions | BodyResponseCallback<Schema$SubscriptionOffer>,
      callback: BodyResponseCallback<Schema$SubscriptionOffer>
    ): void;
    get(
      params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Get,
      callback: BodyResponseCallback<Schema$SubscriptionOffer>
    ): void;
    get(callback: BodyResponseCallback<Schema$SubscriptionOffer>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Get
        | BodyResponseCallback<Schema$SubscriptionOffer>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SubscriptionOffer>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SubscriptionOffer>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SubscriptionOffer>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Get;
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
              '/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'productId', 'basePlanId', 'offerId'],
        pathParams: ['basePlanId', 'offerId', 'packageName', 'productId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SubscriptionOffer>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SubscriptionOffer>(parameters);
      }
    }

    /**
     * Lists all offers under a given subscription.
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
     *   const res =
     *     await androidpublisher.monetization.subscriptions.basePlans.offers.list({
     *       // Required. The parent base plan (ID) for which the offers should be read. May be specified as '-' to read all offers under a subscription.
     *       basePlanId: 'placeholder-value',
     *       // Required. The parent app (package name) for which the subscriptions should be read.
     *       packageName: 'placeholder-value',
     *       // The maximum number of subscriptions to return. The service may return fewer than this value. If unspecified, at most 50 subscriptions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *       pageSize: 'placeholder-value',
     *       // A page token, received from a previous `ListSubscriptionsOffers` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubscriptionOffers` must match the call that provided the page token.
     *       pageToken: 'placeholder-value',
     *       // Required. The parent subscription (ID) for which the offers should be read.
     *       productId: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "subscriptionOffers": []
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
      params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListSubscriptionOffersResponse>;
    list(
      params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListSubscriptionOffersResponse>,
      callback: BodyResponseCallback<Schema$ListSubscriptionOffersResponse>
    ): void;
    list(
      params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$List,
      callback: BodyResponseCallback<Schema$ListSubscriptionOffersResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListSubscriptionOffersResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Monetization$Subscriptions$Baseplans$Offers$List
        | BodyResponseCallback<Schema$ListSubscriptionOffersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListSubscriptionOffersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListSubscriptionOffersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListSubscriptionOffersResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Monetization$Subscriptions$Baseplans$Offers$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Monetization$Subscriptions$Baseplans$Offers$List;
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
              '/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'productId', 'basePlanId'],
        pathParams: ['basePlanId', 'packageName', 'productId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListSubscriptionOffersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListSubscriptionOffersResponse>(
          parameters
        );
      }
    }

    /**
     * Updates an existing subscription offer.
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
     *   const res =
     *     await androidpublisher.monetization.subscriptions.basePlans.offers.patch({
     *       // Required. Immutable. The ID of the base plan to which this offer is an extension.
     *       basePlanId: 'placeholder-value',
     *       // Required. Immutable. Unique ID of this subscription offer. Must be unique within the base plan.
     *       offerId: 'placeholder-value',
     *       // Required. Immutable. The package name of the app the parent subscription belongs to.
     *       packageName: 'placeholder-value',
     *       // Required. Immutable. The ID of the parent subscription this offer belongs to.
     *       productId: 'placeholder-value',
     *       // Required. A string representing version of the available regions being used for the specified resource. The current version is 2022/02.
     *       'regionsVersion.version': 'placeholder-value',
     *       // Required. The list of fields to be updated.
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "basePlanId": "my_basePlanId",
     *         //   "offerId": "my_offerId",
     *         //   "offerTags": [],
     *         //   "otherRegionsConfig": {},
     *         //   "packageName": "my_packageName",
     *         //   "phases": [],
     *         //   "productId": "my_productId",
     *         //   "regionalConfigs": [],
     *         //   "state": "my_state",
     *         //   "targeting": {}
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "basePlanId": "my_basePlanId",
     *   //   "offerId": "my_offerId",
     *   //   "offerTags": [],
     *   //   "otherRegionsConfig": {},
     *   //   "packageName": "my_packageName",
     *   //   "phases": [],
     *   //   "productId": "my_productId",
     *   //   "regionalConfigs": [],
     *   //   "state": "my_state",
     *   //   "targeting": {}
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
      params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SubscriptionOffer>;
    patch(
      params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$SubscriptionOffer>,
      callback: BodyResponseCallback<Schema$SubscriptionOffer>
    ): void;
    patch(
      params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Patch,
      callback: BodyResponseCallback<Schema$SubscriptionOffer>
    ): void;
    patch(callback: BodyResponseCallback<Schema$SubscriptionOffer>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Patch
        | BodyResponseCallback<Schema$SubscriptionOffer>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SubscriptionOffer>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SubscriptionOffer>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SubscriptionOffer>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Patch;
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
              '/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'productId', 'basePlanId', 'offerId'],
        pathParams: ['basePlanId', 'offerId', 'packageName', 'productId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SubscriptionOffer>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SubscriptionOffer>(parameters);
      }
    }
  }

  export interface Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Activate
    extends StandardParameters {
    /**
     * Required. The parent base plan (ID) of the offer to activate.
     */
    basePlanId?: string;
    /**
     * Required. The unique offer ID of the offer to activate.
     */
    offerId?: string;
    /**
     * Required. The parent app (package name) of the offer to activate.
     */
    packageName?: string;
    /**
     * Required. The parent subscription (ID) of the offer to activate.
     */
    productId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ActivateSubscriptionOfferRequest;
  }
  export interface Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Create
    extends StandardParameters {
    /**
     * Required. The parent base plan (ID) for which the offer should be created. Must be equal to the base_plan_id field on the SubscriptionOffer resource.
     */
    basePlanId?: string;
    /**
     * Required. The ID to use for the offer. For the requirements on this format, see the documentation of the offer_id field on the SubscriptionOffer resource.
     */
    offerId?: string;
    /**
     * Required. The parent app (package name) for which the offer should be created. Must be equal to the package_name field on the Subscription resource.
     */
    packageName?: string;
    /**
     * Required. The parent subscription (ID) for which the offer should be created. Must be equal to the product_id field on the SubscriptionOffer resource.
     */
    productId?: string;
    /**
     * Required. A string representing version of the available regions being used for the specified resource. The current version is 2022/02.
     */
    'regionsVersion.version'?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SubscriptionOffer;
  }
  export interface Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Deactivate
    extends StandardParameters {
    /**
     * Required. The parent base plan (ID) of the offer to deactivate.
     */
    basePlanId?: string;
    /**
     * Required. The unique offer ID of the offer to deactivate.
     */
    offerId?: string;
    /**
     * Required. The parent app (package name) of the offer to deactivate.
     */
    packageName?: string;
    /**
     * Required. The parent subscription (ID) of the offer to deactivate.
     */
    productId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DeactivateSubscriptionOfferRequest;
  }
  export interface Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Delete
    extends StandardParameters {
    /**
     * Required. The parent base plan (ID) of the offer to delete.
     */
    basePlanId?: string;
    /**
     * Required. The unique offer ID of the offer to delete.
     */
    offerId?: string;
    /**
     * Required. The parent app (package name) of the offer to delete.
     */
    packageName?: string;
    /**
     * Required. The parent subscription (ID) of the offer to delete.
     */
    productId?: string;
  }
  export interface Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Get
    extends StandardParameters {
    /**
     * Required. The parent base plan (ID) of the offer to get.
     */
    basePlanId?: string;
    /**
     * Required. The unique offer ID of the offer to get.
     */
    offerId?: string;
    /**
     * Required. The parent app (package name) of the offer to get.
     */
    packageName?: string;
    /**
     * Required. The parent subscription (ID) of the offer to get.
     */
    productId?: string;
  }
  export interface Params$Resource$Monetization$Subscriptions$Baseplans$Offers$List
    extends StandardParameters {
    /**
     * Required. The parent base plan (ID) for which the offers should be read. May be specified as '-' to read all offers under a subscription.
     */
    basePlanId?: string;
    /**
     * Required. The parent app (package name) for which the subscriptions should be read.
     */
    packageName?: string;
    /**
     * The maximum number of subscriptions to return. The service may return fewer than this value. If unspecified, at most 50 subscriptions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListSubscriptionsOffers` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubscriptionOffers` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent subscription (ID) for which the offers should be read.
     */
    productId?: string;
  }
  export interface Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Patch
    extends StandardParameters {
    /**
     * Required. Immutable. The ID of the base plan to which this offer is an extension.
     */
    basePlanId?: string;
    /**
     * Required. Immutable. Unique ID of this subscription offer. Must be unique within the base plan.
     */
    offerId?: string;
    /**
     * Required. Immutable. The package name of the app the parent subscription belongs to.
     */
    packageName?: string;
    /**
     * Required. Immutable. The ID of the parent subscription this offer belongs to.
     */
    productId?: string;
    /**
     * Required. A string representing version of the available regions being used for the specified resource. The current version is 2022/02.
     */
    'regionsVersion.version'?: string;
    /**
     * Required. The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SubscriptionOffer;
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
    subscriptionsv2: Resource$Purchases$Subscriptionsv2;
    voidedpurchases: Resource$Purchases$Voidedpurchases;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.products = new Resource$Purchases$Products(this.context);
      this.subscriptions = new Resource$Purchases$Subscriptions(this.context);
      this.subscriptionsv2 = new Resource$Purchases$Subscriptionsv2(
        this.context
      );
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
     * Consumes a purchase for an inapp item.
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
     *   const res = await androidpublisher.purchases.products.consume({
     *     // The package name of the application the inapp product was sold in (for example, 'com.some.thing').
     *     packageName: 'placeholder-value',
     *     // The inapp product SKU (for example, 'com.some.thing.inapp1').
     *     productId: 'placeholder-value',
     *     // The token provided to the user's device when the inapp product was purchased.
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
    consume(
      params: Params$Resource$Purchases$Products$Consume,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    consume(
      params?: Params$Resource$Purchases$Products$Consume,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    consume(
      params: Params$Resource$Purchases$Products$Consume,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    consume(
      params: Params$Resource$Purchases$Products$Consume,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    consume(
      params: Params$Resource$Purchases$Products$Consume,
      callback: BodyResponseCallback<void>
    ): void;
    consume(callback: BodyResponseCallback<void>): void;
    consume(
      paramsOrCallback?:
        | Params$Resource$Purchases$Products$Consume
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
        {}) as Params$Resource$Purchases$Products$Consume;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Purchases$Products$Consume;
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
              '/androidpublisher/v3/applications/{packageName}/purchases/products/{productId}/tokens/{token}:consume'
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
  export interface Params$Resource$Purchases$Products$Consume
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

  export class Resource$Purchases$Subscriptionsv2 {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get metadata about a subscription
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
     *   const res = await androidpublisher.purchases.subscriptionsv2.get({
     *     // The package of the application for which this subscription was purchased (for example, 'com.some.thing').
     *     packageName: 'placeholder-value',
     *     // Required. The token provided to the user's device when the subscription was purchased.
     *     token: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "acknowledgementState": "my_acknowledgementState",
     *   //   "canceledStateContext": {},
     *   //   "externalAccountIdentifiers": {},
     *   //   "kind": "my_kind",
     *   //   "latestOrderId": "my_latestOrderId",
     *   //   "lineItems": [],
     *   //   "linkedPurchaseToken": "my_linkedPurchaseToken",
     *   //   "pausedStateContext": {},
     *   //   "regionCode": "my_regionCode",
     *   //   "startTime": "my_startTime",
     *   //   "subscribeWithGoogleInfo": {},
     *   //   "subscriptionState": "my_subscriptionState",
     *   //   "testPurchase": {}
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
      params: Params$Resource$Purchases$Subscriptionsv2$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Purchases$Subscriptionsv2$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SubscriptionPurchaseV2>;
    get(
      params: Params$Resource$Purchases$Subscriptionsv2$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Purchases$Subscriptionsv2$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SubscriptionPurchaseV2>,
      callback: BodyResponseCallback<Schema$SubscriptionPurchaseV2>
    ): void;
    get(
      params: Params$Resource$Purchases$Subscriptionsv2$Get,
      callback: BodyResponseCallback<Schema$SubscriptionPurchaseV2>
    ): void;
    get(callback: BodyResponseCallback<Schema$SubscriptionPurchaseV2>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Purchases$Subscriptionsv2$Get
        | BodyResponseCallback<Schema$SubscriptionPurchaseV2>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SubscriptionPurchaseV2>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SubscriptionPurchaseV2>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SubscriptionPurchaseV2>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Purchases$Subscriptionsv2$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Purchases$Subscriptionsv2$Get;
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
              '/androidpublisher/v3/applications/{packageName}/purchases/subscriptionsv2/tokens/{token}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['packageName', 'token'],
        pathParams: ['packageName', 'token'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SubscriptionPurchaseV2>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SubscriptionPurchaseV2>(parameters);
      }
    }
  }

  export interface Params$Resource$Purchases$Subscriptionsv2$Get
    extends StandardParameters {
    /**
     * The package of the application for which this subscription was purchased (for example, 'com.some.thing').
     */
    packageName?: string;
    /**
     * Required. The token provided to the user's device when the subscription was purchased.
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
